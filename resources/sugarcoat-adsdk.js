{
    const $___mock_27cf2a2f7a76325a = {};
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
    })($___mock_27cf2a2f7a76325a);
    (function () {
        !function (t) {
            function n(r) {
                if (e[r])
                    return e[r].exports;
                var o = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
            }
            var e = {};
            n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                });
            }, n.r = function (t) {
                'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e)
                    return t;
                if (4 & e && 'object' === typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: t
                    }), 2 & e && 'string' != typeof t)
                    for (var o in t)
                        n.d(r, o, function (n) {
                            return t[n];
                        }.bind(null, o));
                return r;
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default;
                } : function () {
                    return t;
                };
                return n.d(e, 'a', e), e;
            }, n.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }, n.p = '', n(n.s = 105);
        }([
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var r = n[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function o() {
                    if (x.a && x.a.document && 'function' === typeof x.a.document.hasFocus)
                        try {
                            return x.a.document.hasFocus();
                        } catch (t) {
                        }
                }
                function i(t) {
                    return U ? Object(V.a)(t.location.ancestorOrigins) : [];
                }
                function a(t) {
                    var n = '', e = '';
                    t && Object(G.a)(t).reverse().forEach(function (t) {
                        var r = t.location, o = t.referrer;
                        n = n || r, e = e || o;
                    });
                    return {
                        location: n,
                        referrer: e
                    };
                }
                function u(t, n) {
                    var e;
                    if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (e = function (t, n) {
                                if (!t)
                                    return;
                                if ('string' === typeof t)
                                    return c(t, n);
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                'Object' === e && t.constructor && (e = t.constructor.name);
                                if ('Map' === e || 'Set' === e)
                                    return Array.from(t);
                                if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                                    return c(t, n);
                            }(t)) || n && t && 'number' === typeof t.length) {
                            e && (t = e);
                            var r = 0;
                            return function () {
                                return r >= t.length ? { done: !0 } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    return (e = t[Symbol.iterator]()).next.bind(e);
                }
                function c(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for (var e = 0, r = new Array(n); e < n; e++)
                        r[e] = t[e];
                    return r;
                }
                function s(t, n) {
                    var e;
                    if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (e = function (t, n) {
                                if (!t)
                                    return;
                                if ('string' === typeof t)
                                    return d(t, n);
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                'Object' === e && t.constructor && (e = t.constructor.name);
                                if ('Map' === e || 'Set' === e)
                                    return Array.from(t);
                                if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                                    return d(t, n);
                            }(t)) || n && t && 'number' === typeof t.length) {
                            e && (t = e);
                            var r = 0;
                            return function () {
                                return r >= t.length ? { done: !0 } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    return (e = t[Symbol.iterator]()).next.bind(e);
                }
                function d(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for (var e = 0, r = new Array(n); e < n; e++)
                        r[e] = t[e];
                    return r;
                }
                function f(t) {
                    for (var n, e = [], r = s(t); !(n = r()).done;) {
                        var o = n.value, i = o[0], a = l(o[1], i);
                        e.push(a);
                    }
                    return function (t) {
                        if (t.length > 53)
                            throw new Error('bitUtils.toDecimal: больше 53 бит не поддерживается из-за ограниченной точности, но передана строка длиной ' + t.length + ' бит.');
                        return parseInt(t, 2);
                    }(e.reverse().join(''));
                }
                function l(t, n) {
                    return v(function (t, n) {
                        return Number(t) & Math.pow(2, n) - 1;
                    }(t, n).toString(2), n);
                }
                function v(t, n) {
                    return Object(ht.a)(t, n, '0');
                }
                function p() {
                    return (p = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function h(t, n) {
                    void 0 === n && (n = !0);
                    var e = mt(t);
                    return e ? !t[e] : n;
                }
                function b(t, n, e) {
                    return n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e, t;
                }
                function y() {
                    return (y = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var m = e(35), g = e(19), O = e(22), w = e(65), _ = function (t, n) {
                        void 0 === t && (t = document);
                        var e = t.currentScript;
                        if (e)
                            return e;
                        for (var r = t.getElementsByTagName('script'), o = [], i = 0; i < r.length; i++)
                            o.push(r[i]);
                        if ('function' === typeof n) {
                            var a = o.filter(n);
                            return a[a.length - 1];
                        }
                        return o[o.length - 1];
                    }(), j = _ ? _.src : '', E = e(32), A = e(3), S = e(48), T = (Object(S.a)({
                        propertyName: 'YANDEX_DESTROYABLE_GLOBAL_CALLBACK_PROPERTY_NAME',
                        win: window
                    }), function () {
                        function t() {
                            this._isDestroyed = !1, this.destroyHandlers = [];
                        }
                        t.addErrorHandler = function (n) {
                            t.errorHandlers.push(n);
                        };
                        var n, e, o, i = t.prototype;
                        return i.onDestroy = function (t) {
                            this._addDestroyHandler(t);
                        }, i.addDestroyListener = function (t) {
                            this._addDestroyHandler(t);
                        }, i.addDestroyHandler = function (t) {
                            this._addDestroyHandler(t);
                        }, i.destroy = function () {
                            for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                                e[r] = arguments[r];
                            var o = e[0];
                            if (!this._isDestroyed) {
                                this._isDestroyed = !0, this._destroyReason = o;
                                try {
                                    w.a.apply(void 0, [this.destroyHandlers].concat(e));
                                } catch (i) {
                                    Object(w.a)(t.errorHandlers, i);
                                }
                                this.destroyHandlers.length = 0;
                            }
                        }, i.getIsDestroyed = function () {
                            return this._isDestroyed;
                        }, i.ignoreAfterDestroy = function (t) {
                            var n = this, e = t;
                            return function () {
                                n.isDestroyed && (e = A.a);
                                for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                                    r[o] = arguments[o];
                                e.apply(n, r);
                            };
                        }, i._addDestroyHandler = function (t) {
                            this._isDestroyed ? t.apply(void 0, [this._destroyReason]) : this.destroyHandlers.push(t);
                        }, n = t, (e = [
                            {
                                key: 'destroyReason',
                                get: function () {
                                    return this._destroyReason;
                                }
                            },
                            {
                                key: 'isDestroyed',
                                get: function () {
                                    return this._isDestroyed;
                                }
                            }
                        ]) && r(n.prototype, e), o && r(n, o), t;
                    }());
                T.errorHandlers = [];
                var R, L = e(11), N = e(66), D = e(44), P = e(7), I = e(10), k = e(29), M = Object(k.a)(window), C = e(12), x = e(18), U = Boolean(window.location.ancestorOrigins), V = e(61), F = i(window), B = e(67), G = e(62), Y = e(15), H = e(53), K = function () {
                        var t = Object(Y.a)(H.a, function (t) {
                                return t.ownerDocument;
                            }), n = t.length, e = (n ? t[n - 1] : document).defaultView;
                        return !!e && e.self !== e.parent;
                    }(), W = function (t) {
                        void 0 === t && (t = window);
                        var n = i(t);
                        if (n.length > 0)
                            return {
                                topAncestor: n[n.length - 1],
                                isTrusted: !0
                            };
                        var e = a(t.document), r = e.location, o = e.referrer, u = K ? o : r, c = !K || Object(B.a)(x.a).length < 2, s = Object(L.d)(u), d = s.protocol, f = s.hostname, l = s.host, v = s.port;
                        return {
                            topAncestor: Object(L.e)({
                                protocol: d,
                                hostname: f,
                                host: l,
                                port: v,
                                originalPath: '',
                                href: '',
                                pathname: '',
                                search: '',
                                hash: ''
                            }),
                            isTrusted: c
                        };
                    }(), X = W.topAncestor, z = W.isTrusted, J = X, q = z, $ = e(42), Q = e(4), Z = e(69), tt = e(52), nt = e(27), et = e(25), rt = e(70), ot = Object(rt.a)(window), it = 64, at = (Object(S.a)({
                        propertyName: 'YANDEX_STATS_GLOBAL_CALLBACK_PROPERTY_NAME',
                        win: window
                    }), e(49)), ut = e(71), ct = e(72), st = e(6), dt = e(31).a, ft = function (t) {
                        for (var n, e = u(dt(t)); !(n = e()).done;) {
                            var r = n.value.BANNER_TYPE_FROM_NANPU;
                            if ('string' === typeof r && r.length > 0)
                                return r;
                        }
                    }(window), lt = e(90), vt = e(34), pt = e(1), ht = e(55), bt = {
                        AdSDKLoader: 0,
                        VpaidPlayerLoader: 1,
                        OldPythiaSurvey: 4,
                        AdLoader: 11,
                        BannerAd: 12,
                        InPage: 13,
                        VideoPlayer: 15,
                        Multiroll: 16,
                        VideoBannerAd: 17,
                        OverlayTGO: 18,
                        YaMusicAPI: 19,
                        MotionTGO: 20,
                        InteractiveElementsAdCreative: 24,
                        VpaidPlayer: 21,
                        VASFrame: 24,
                        ThemeEmpty: 26,
                        Rum: 27,
                        Examples: 30,
                        Test: 31,
                        TestVpaid: 31
                    }, yt = new (function (t) {
                        function n() {
                            return t.apply(this, arguments) || this;
                        }
                        var e, r;
                        r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var o = n.prototype;
                        return o.getTemplate = function () {
                            return [
                                [
                                    10,
                                    'VERSION'
                                ],
                                [
                                    5,
                                    'BUNDLE'
                                ],
                                [
                                    36,
                                    'UNUSED'
                                ],
                                [
                                    1,
                                    'ADBLOCK'
                                ]
                            ];
                        }, o.defaults = function () {
                            return {
                                VERSION: P.a,
                                BUNDLE: bt[st.c],
                                UNUSED: 0,
                                ADBLOCK: Object(Q.a)(M)
                            };
                        }, n;
                    }(function () {
                        function t(t) {
                            void 0 === t && (t = {}), this.props = {}, this.setProps(p({}, this.defaults(), t));
                        }
                        t.sliceBits = function (t, n, e) {
                            return function (t, n, e) {
                                var r = n + e, o = v(t.toString(2), r).substr(-r, e);
                                return parseInt(o, 2);
                            }(t, n, e);
                        };
                        var n = t.prototype;
                        return n.defaults = function () {
                            return {};
                        }, n.toString = function () {
                            return this.serialize().toString();
                        }, n.setProps = function (t) {
                            var n = this;
                            return Object(pt.a)(t) && Object(C.a)(this.getTemplate(), function (e) {
                                var r = e[1];
                                r && t.hasOwnProperty(r) && (n.props[r] = t[r]);
                            }, this), this;
                        }, n.getProps = function () {
                            return p({}, this.props);
                        }, n.clone = function () {
                            return new (0, this.constructor)(this.props);
                        }, n.serialize = function () {
                            var t, n;
                            return f((t = this.getTemplate(), n = this.props, Object(Y.a)(t, function (t) {
                                var e = t[0], r = t[1];
                                return [
                                    e,
                                    r && n[r] || null
                                ];
                            })));
                        }, n.slice = function (n, e) {
                            return t.sliceBits(this.serialize(), n, e);
                        }, t;
                    }()))(), mt = function (t) {
                        return 'hidden' in t ? 'hidden' : 'webkitHidden' in t ? 'webkitHidden' : void 0;
                    }, gt = e(74), Ot = e(45), wt = y({}, gt.a, ((R = {})['adsdk-test-tag'] = String(yt.serialize()), R.bannerTypeFromNanpu = ft, R.bundleName = st.c, R.abFlags = at.a, R.iCookie = ut.a, R.testIds = ct.a, R.ecmaVer = 'ES5', R)), _t = function () {
                        function t(t) {
                            var n = this;
                            b(this, 'rootFields', {}), b(this, 'labels', {}), b(this, 'params', void 0), b(this, 'event', function (t) {
                                var e = t.name, r = t.data, o = t.labels, i = t.probability, a = t.extraRootFields, u = t.queryParams;
                                n.push({
                                    eventType: 'event',
                                    eventName: e,
                                    data: r,
                                    additionalStatsLabels: o,
                                    probability: i,
                                    extraRootFields: a,
                                    queryParams: u
                                });
                            }), b(this, 'error', function (t) {
                                var e = t.error, r = t.labels, o = t.probability, i = t.extraRootFields, a = new O.a(e);
                                n.push({
                                    eventName: String(a.code),
                                    eventType: 'fatal',
                                    data: a,
                                    additionalStatsLabels: r,
                                    probability: o,
                                    extraRootFields: i
                                });
                            }), b(this, 'values', function (t) {
                                var e = t.name, r = t.values, o = t.data, i = t.labels, a = t.probability, u = t.extraRootFields;
                                n.push({
                                    eventName: e,
                                    eventType: 'values',
                                    data: o,
                                    additionalStatsLabels: i,
                                    probability: a,
                                    values: r,
                                    extraRootFields: u
                                });
                            }), b(this, 'warning', function (t) {
                                var e = t.name, r = t.message, o = t.probability, i = t.extraRootFields;
                                Object(vt.a)(r), n.push({
                                    eventName: e,
                                    eventType: 'warning',
                                    data: { message: r },
                                    probability: o,
                                    extraRootFields: i
                                });
                            }), b(this, 'getParams', function () {
                                var t = n.params;
                                t.onLogError;
                                return function (t, n) {
                                    if (null == t)
                                        return {};
                                    var e, r, o = {}, i = Object.keys(t);
                                    for (r = 0; r < i.length; r++)
                                        e = i[r], n.indexOf(e) >= 0 || (o[e] = t[e]);
                                    return o;
                                }(t, ['onLogError']);
                            }), b(this, 'setRootFields', function (t) {
                                var e = Object(et.a)(t);
                                Object(C.a)(e, function (t) {
                                    var e = t[0], r = t[1];
                                    void 0 === r ? delete n.rootFields[e] : n.rootFields[e] = r;
                                });
                            }), b(this, 'setLabels', function (t) {
                                var e = Object(et.a)(t);
                                Object(C.a)(e, function (t) {
                                    var e = t[0], r = t[1];
                                    void 0 === r ? delete n.labels[e] : n.labels[e] = r;
                                });
                            }), b(this, 'errorToStats', function (t, e, r) {
                                var o = new O.a(t);
                                n.push({
                                    eventName: String(o.code),
                                    eventType: 'fatal',
                                    data: o,
                                    additionalStatsLabels: e,
                                    extraRootFields: r
                                });
                            });
                            var e = t.onLogError;
                            this.params = y({}, t, {
                                sid: t.sid || Object(E.a)(it),
                                rnd: t.rnd,
                                onLogError: e ? function (t) {
                                    try {
                                        e(t);
                                    } catch (t) {
                                        Object(m.a)(t);
                                    }
                                } : m.a
                            });
                        }
                        var n = t.prototype;
                        return n.push = function (n) {
                            var e = n.eventName, r = n.eventType, o = n.data, i = void 0 === o ? {} : o, a = n.additionalStatsLabels, u = n.value, c = void 0 === u ? 1 : u, s = n.probability, d = void 0 === s ? 1 : s, f = n.values, l = void 0 === f ? {} : f, v = n.extraRootFields, p = void 0 === v ? {} : v, h = n.queryParams, b = void 0 === h ? {} : h;
                            if (Object(Ot.a)(d)) {
                                var m = this.params, g = m.service, w = m.version, _ = {
                                        service: g,
                                        version: w,
                                        data: i,
                                        eventName: e,
                                        eventType: r,
                                        additionalStatsLabels: a,
                                        value: c,
                                        values: l
                                    };
                                if (void 0 !== t.sendingEventName)
                                    throw new O.a({
                                        message: 'RecursiveStatsRequests',
                                        details: {
                                            service: g,
                                            version: w,
                                            eventType: r,
                                            eventName: e,
                                            sendingEventName: t.sendingEventName
                                        }
                                    });
                                t.sendingEventName = e;
                                try {
                                    var j, E = Object(L.a)(jt, y(((j = {})[g] = w, j[r] = e, j), a, b)), A = this.createFullStatsObject(_, p);
                                    this.sendData(E, Object(lt.a)(A));
                                } catch (S) {
                                    t.sendingEventName = void 0, this.params.onLogError(new O.a(S, {
                                        details: {
                                            service: g,
                                            version: w,
                                            eventType: r,
                                            eventName: e
                                        }
                                    }));
                                }
                                t.sendingEventName = void 0;
                            }
                        }, n.sendData = function (t, n) {
                            (function (t, n) {
                                return !!ot && window.navigator.sendBeacon(t, n);
                            }(t, n) || Object(Z.a)({
                                url: t,
                                data: n,
                                method: 'POST'
                            }));
                        }, n.createFullStatsObject = function (t, n) {
                            var e = t.service, r = t.version, i = t.eventName, u = t.eventType, c = t.data, s = t.additionalStatsLabels, d = t.value, f = function (t) {
                                    var n, e = t.eventType, r = t.eventName, o = t.value, i = t.values, a = {};
                                    return Object(nt.a)(i, function (t, n) {
                                        a[e + '_' + r + '_' + n] = t;
                                    }), y(((n = {})[e + '_' + r] = o, n), a);
                                }(t), l = y({}, this.labels, s, { version: this.params.version }), v = Object(et.a)(f), p = Object(tt.a)(v), b = Object(et.a)(l), m = {
                                    service: e,
                                    tags: p,
                                    labels: Object(tt.a)(b)
                                }, g = a(document), O = g.location, w = g.referrer;
                            return y({}, n, wt, this.rootFields, m, {
                                timestamp: Date.now(),
                                eventType: u,
                                eventName: i,
                                data: c,
                                sid: this.params.sid,
                                version: r,
                                location: Object($.a)(window),
                                topLocation: O,
                                topAncestor: J,
                                isTopAncestorUndetermined: !q || void 0,
                                ancestorOrigins: F,
                                documentIsVisible: h(document),
                                referrer: window.document.referrer,
                                topReferrer: w,
                                currentScriptSrc: j,
                                secureIFrame: K,
                                isVideoADB: Object(Q.a)(M),
                                value: d,
                                rnd: this.params.rnd,
                                topDocumentFocus: o()
                            });
                        }, t;
                    }();
                b(_t, 'sendingEventName', void 0), e.d(n, 'a', function () {
                    return jt;
                }), e.d(n, 'b', function () {
                    return Et;
                });
                var jt = 'https://jstracer.yandex.ru/jstracer', Et = (Object(L.d)(jt).hostname, new _t({
                        service: 'AdSDKJS',
                        version: String(P.a),
                        sid: N.a,
                        rnd: D.a,
                        onLogError: Object(g.a)(function (t) {
                            Object(m.a)(t), Et.error({
                                error: new I.a(t, {
                                    code: 'STATS_LOG_ERROR',
                                    details: void 0
                                })
                            });
                        })
                    }));
                T.addErrorHandler(function (t) {
                    Et.error({
                        error: new I.a(t, {
                            code: 'DESTROYABLE_CALLBACK_ERROR',
                            details: void 0
                        })
                    });
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n = typeof t;
                    return Boolean(t) && ('object' === n || 'function' === n);
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'e', function () {
                    return a;
                }), e.d(n, 'h', function () {
                    return u;
                }), e.d(n, 'b', function () {
                    return c;
                }), e.d(n, 'g', function () {
                    return s;
                }), e.d(n, 'a', function () {
                    return d;
                }), e.d(n, 'f', function () {
                    return f;
                }), e.d(n, 'c', function () {
                    return l;
                }), e.d(n, 'd', function () {
                    return v;
                });
                var r = e(20), o = e(33), i = r.a ? Object(o.b)(r.a) : void 0;
                r.a && Object(o.a)(r.a);
                var a = null === i || void 0 === i ? void 0 : i.SID, u = null === i || void 0 === i ? void 0 : i.VSID, c = null === i || void 0 === i ? void 0 : i.ICOOKIE, s = null === i || void 0 === i ? void 0 : i.TEST_IDS, d = null === i || void 0 === i ? void 0 : i.AB_FLAGS, f = null === i || void 0 === i ? void 0 : i.AdditionalStatsRootFields, l = null === i || void 0 === i ? void 0 : i.VAS_USER_SESSION_RANDOM, v = null === i || void 0 === i ? void 0 : i.RUM_WRAPPER;
            },
            function (t, n, e) {
                'use strict';
                function r() {
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return 'function' === typeof t || 'Function' === Object(o.a)(t);
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(38);
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    var e;
                    if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (e = function (t, n) {
                                if (!t)
                                    return;
                                if ('string' === typeof t)
                                    return o(t, n);
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                'Object' === e && t.constructor && (e = t.constructor.name);
                                if ('Map' === e || 'Set' === e)
                                    return Array.from(t);
                                if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                                    return o(t, n);
                            }(t)) || n && t && 'number' === typeof t.length) {
                            e && (t = e);
                            var r = 0;
                            return function () {
                                return r >= t.length ? { done: !0 } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    return (e = t[Symbol.iterator]()).next.bind(e);
                }
                function o(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for (var e = 0, r = new Array(n); e < n; e++)
                        r[e] = t[e];
                    return r;
                }
                function i(t, n) {
                    for (var e, o = {
                                UrlParams: function () {
                                    return g[n];
                                },
                                SessionStorage: function () {
                                    const $___old_99ba81282052f42e = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                                    try {
                                        if ($___old_99ba81282052f42e)
                                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_27cf2a2f7a76325a.sessionStorage));
                                        return function () {
                                            return t.sessionStorage.getItem(n);
                                        }.apply(this, arguments);
                                    } finally {
                                        if ($___old_99ba81282052f42e)
                                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_99ba81282052f42e));
                                    }
                                },
                                LocalStorage: function () {
                                    const $___old_d85967d1ec8aa632 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                    try {
                                        if ($___old_d85967d1ec8aa632)
                                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_27cf2a2f7a76325a.localStorage));
                                        return function () {
                                            return t.localStorage.getItem(n);
                                        }.apply(this, arguments);
                                    } finally {
                                        if ($___old_d85967d1ec8aa632)
                                            ({}.constructor.defineProperty(window, 'localStorage', $___old_d85967d1ec8aa632));
                                    }
                                },
                                GlobalVariable: function () {
                                    for (var e, o = r(Object(c.a)(t)); !(e = o()).done;) {
                                        var i, a, u = null === (i = e.value.Ya) || void 0 === i ? void 0 : null === (a = i.hardcodedParams) || void 0 === a ? void 0 : a[n];
                                        if (u)
                                            return String(u);
                                    }
                                }
                            }, i = r(Object(d.a)(o)); !(e = i()).done;) {
                        var a = e.value, u = a[0], s = a[1], l = Object(b.a)(s);
                        if (Object(f.a)(l))
                            return Object(y.a)('VAS WARNING! Hardcoded parameter=[' + n + '] with value=[' + l + '] found in [' + u + ']'), l;
                    }
                }
                function a(t, n, e) {
                    var r = i(t, n);
                    return r ? Number(r) : function (t) {
                        for (var n = 100 * Object(v.a)(), e = 0, r = 0; r < t.length; r++)
                            if (n < (e += t[r].percent))
                                return t[r].id;
                        return t[0].id;
                    }(e);
                }
                var u = e(27), c = e(31), s = e(62), d = e(25), f = e(21), l = e(11), v = e(28), p = e(14), h = {
                        adsdkver: 0,
                        adsdkdebug: 0,
                        adsdknovastconvertation: 0,
                        adsdkmotionoldanimation: 0,
                        adsdkecmaver: 0,
                        adsdktracelogs: 0,
                        adsdksecuremode: 0,
                        adsdkwithcredentials: 0,
                        adsdkthemeemptyactionbutton: 0,
                        adsdkabflags: 0
                    }, b = (Object(p.a)(h), e(63)), y = e(34);
                e.d(n, 'b', function () {
                    return i;
                }), e.d(n, 'a', function () {
                    return a;
                });
                for (var m, g = {}, O = r(Object(s.a)(document)); !(m = O()).done;) {
                    var w = m.value.location, _ = Object(l.b)(w);
                    Object(u.a)(_, function (t, n) {
                        0 === h[n] && (g[n] = t);
                    });
                }
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'b', function () {
                    return r;
                }), e.d(n, 'c', function () {
                    return o;
                }), e.d(n, 'a', function () {
                    return i;
                });
                var r = '', o = 'AdSDKLoader', i = 1627400467919;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return c;
                }), e.d(n, 'b', function () {
                    return s;
                });
                var r, o = e(5);
                try {
                    r = {
                        build: 394646,
                        code: [{
                                id: 394646,
                                percent: 100
                            }]
                    };
                } catch (d) {
                    r = {};
                }
                var i = r, a = i.build, u = i.code, c = a, s = Object(o.a)(window, 'adsdkver', u);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return a;
                }), e.d(n, 'b', function () {
                    return u;
                });
                var r = e(45), o = e(54), i = 0.001, a = o.a ? 1 : 0.05, u = o.a ? 1 : i;
                Object(r.a)(a);
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return 'string' === typeof t;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r() {
                    return (r = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                e.d(n, 'a', function () {
                    return a;
                });
                var o = e(22), i = {
                        NO_APPROPRIATE_VIDEO_SOURCE: 52,
                        MEDIA_ERR_ABORTED: 101,
                        MEDIA_ERR_NETWORK: 102,
                        MEDIA_ERR_SRC_NOT_SUPPORTED: 104,
                        VIDEO_ERROR: 10,
                        INVALID_VAST_XML: 40,
                        YANDEX_INVALID_VAST_XML: 40,
                        INCORRECT_SKIPOFFSET_FORMAT: 46,
                        YANDEX_INCORRECT_SKIPOFFSET_FORMAT: 46,
                        ADFOX_VAST_LOAD_ERROR: 47,
                        VAST_LOAD_ERROR: 48,
                        NO_AD_SECTION: 53,
                        VAST_LOAD_TIMEOUT: 60,
                        YANDEX_VAST_LOAD_TIMEOUT: 60,
                        NO_INLINE_OR_WRAPPER_NODE: 58,
                        YANDEX_NO_INLINE_OR_WRAPPER_NODE: 58,
                        INLINE_AND_WRAPPER_NODE_IN_ONE_AD_SECTION: 59,
                        YANDEX_INLINE_AND_WRAPPER_NODE_IN_ONE_AD_SECTION: 59,
                        VIDEO_TIMEOUT: 62,
                        BUFFER_FULL_TIMEOUT: 63,
                        BUFFER_EMPTY_LIMIT: 64,
                        VPAID_START_TIMEOUT: 65,
                        EXPECTED_PREROLL_AD_BREAK: 66,
                        VMAP_CONFIG_WITHOUT_PARTNER_ID: 1003,
                        NO_AD_TO_DISPLAY: 51,
                        VPAIDLoadingError: 68,
                        VPAIDPlayingError: 67,
                        VpaidEventBusCallbackError: 81,
                        CANNOT_LOAD_VPAID_MEDIA_FILE: 82,
                        CANNOT_LOAD_MODULE: 91,
                        CANNOT_INIT_MODULE: 92,
                        TOO_MANY_CREATE_AD_DISPLAY_CONTROLLER_REQUESTS: 21002,
                        PUBLIC_CONTROLLER_PLAY_ERROR: 21010,
                        NO_AD_CUSTOM_MARKER: 21101
                    }, a = function (t) {
                        function n(n, e) {
                            var o;
                            void 0 === n && (n = {}), void 0 === e && (e = {});
                            var a, u, c, s = e.message || n.message, d = e.code || n.code;
                            return o = t.call(this, n, r({}, e, { message: 'AdSDK Error [' + d + ']' + (s ? '[' + s + ']' : '') })) || this, a = function (t) {
                                if (void 0 === t)
                                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                                return t;
                            }(o), c = void 0, (u = 'id') in a ? Object.defineProperty(a, u, {
                                value: c,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : a[u] = c, o.id = function (t) {
                                return i[t] || 0;
                            }(o.code), o;
                        }
                        var e, o;
                        return o = t, (e = n).prototype = Object.create(o.prototype), e.prototype.constructor = e, e.__proto__ = o, n;
                    }(o.a);
            },
            function (t, n, e) {
                'use strict';
                function r() {
                    return (r = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function o(t) {
                    v.href = t;
                    var n = v.pathname || '';
                    '/' !== n.charAt(0) && (n = '/' + n);
                    var e = (v.search || '') + (v.hash || ''), i = t.lastIndexOf(e), a = -1 === i ? t : t.slice(0, i);
                    if (y.test(t)) {
                        var u = o(t.replace(y, 'https:'));
                        return v.href = t, r({}, u, {
                            originalPath: a,
                            protocol: t.slice(0, t.indexOf(':') + 1),
                            href: v.href
                        });
                    }
                    var c = v.protocol && /^[a-z\-]+:/i.test(v.protocol) ? v.protocol : '';
                    return {
                        originalPath: a,
                        href: v.href,
                        protocol: c,
                        host: v.host,
                        hostname: v.hostname,
                        port: v.port,
                        pathname: n,
                        search: v.search,
                        hash: v.hash
                    };
                }
                function i(t, n) {
                    if (void 0 === n && (n = !1), n) {
                        var e = t.originalPath, r = '/' === t.pathname && '/' !== e[e.length - 1];
                        return t.originalPath + (r ? '/' : '') + t.search + t.hash;
                    }
                    var o = '443' === t.port || '80' === t.port ? t.hostname : t.host;
                    return t.protocol + '//' + o + t.pathname + t.search + t.hash;
                }
                function a(t) {
                    for (var n = {}, e = t.replace(/^[?#]+/, '').replace(/#.*$/, '').split('&'), r = 0; r < e.length; r++) {
                        var o = e[r].indexOf('='), i = void 0, a = void 0;
                        if (-1 === o ? (i = m(e[r]), a = '') : (i = m(e[r].slice(0, o)), a = e[r].slice(o + 1)), i) {
                            var u = Boolean(/(\[\])$/.exec(i));
                            i = i.replace(/\[\]$/, ''), u ? void 0 === n[i] ? n[i] = [m(a)] : n[i] = [].concat(n[i], m(a)) : n[i] = m(a);
                        }
                    }
                    return n;
                }
                function u(t) {
                    return a(o(t).search);
                }
                function c(t) {
                    var n = [];
                    for (var e in t)
                        if (t.hasOwnProperty(e)) {
                            var r = t[e];
                            Object(d.a)(r) ? n.push(g(e, r)) : void 0 !== r && n.push(e + '=' + encodeURIComponent(r));
                        }
                    return '?' + n.join('&');
                }
                function s(t, n, e) {
                    var u = void 0 === e ? {} : e, s = u.override, d = void 0 === s || s, f = u.saveOriginalPath, v = void 0 !== f && f, p = o(t), h = a(p.search);
                    return Object(l.a)(n, function (t, n) {
                        (void 0 === h[n] || d) && (h[n] = t);
                    }), i(r({}, p, { search: c(h) }), v);
                }
                var d = e(40), f = function () {
                        function t(t) {
                            this.cache = t;
                        }
                        var n = t.prototype;
                        return n.get = function (t) {
                            return this.cache[t];
                        }, n.has = function (t) {
                            return t in this.cache;
                        }, n.set = function (t, n) {
                            this.cache[t] = n;
                        }, t;
                    }(), l = e(27), v = document.createElement('a');
                e.d(n, 'd', function () {
                    return o;
                }), e.d(n, 'e', function () {
                    return i;
                }), e.d(n, 'c', function () {
                    return a;
                }), e.d(n, 'b', function () {
                    return u;
                }), e.d(n, 'a', function () {
                    return s;
                });
                p = function (t) {
                    return r({}, o(t));
                }, void 0 === h && (h = function (t) {
                    return t;
                }), void 0 === b && (b = new f({}));
                var p, h, b, y = /^(android-app:|chrome-extension:)/, m = function (t) {
                        try {
                            return decodeURIComponent(t);
                        } catch (n) {
                            return t;
                        }
                    }, g = function (t, n) {
                        return n.map(function (n) {
                            return t + '[]=' + encodeURIComponent(n);
                        }).join('&');
                    };
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = function (t, n, e) {
                    for (var r = 0; r < t.length; r++)
                        n.call(e, t[r], r, t);
                };
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    var e;
                    if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (e = function (t, n) {
                                if (!t)
                                    return;
                                if ('string' === typeof t)
                                    return o(t, n);
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                'Object' === e && t.constructor && (e = t.constructor.name);
                                if ('Map' === e || 'Set' === e)
                                    return Array.from(t);
                                if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                                    return o(t, n);
                            }(t)) || n && t && 'number' === typeof t.length) {
                            e && (t = e);
                            var r = 0;
                            return function () {
                                return r >= t.length ? { done: !0 } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    return (e = t[Symbol.iterator]()).next.bind(e);
                }
                function o(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for (var e = 0, r = new Array(n); e < n; e++)
                        r[e] = t[e];
                    return r;
                }
                function i() {
                    return (i = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var a = e(19), u = (e(84), e(12)), c = e(40), s = e(39), d = e(14), f = e(1), l = e(9), v = function (t, n) {
                        if (!Object(f.a)(n))
                            throw new Error('Parsed replaced macro is not an object: ' + t);
                        if (!function (t) {
                                if (void 0 !== t) {
                                    if (!Object(l.a)(t))
                                        throw new Error('testIdsString is not a string or undefined [' + t + ']');
                                    if (0 === t.length)
                                        throw new Error('testIdsString string is empty');
                                    for (var n, e = r(t.split(';')); !(n = e()).done;) {
                                        var o = n.value.split(',');
                                        if (3 !== o.length)
                                            throw new Error('testIdParts length error [' + t + ']');
                                        var i = o[0], a = o[2];
                                        if (0 === i.trim().length)
                                            throw new Error('testId length error [' + t + ']');
                                        if (0 === a.trim().length)
                                            throw new Error('testId bucket length error [' + t + ']');
                                    }
                                    return t;
                                }
                            }(n.testIds))
                            throw new Error('Parsed replaced macro has no testIds field: ' + t);
                        if (!('flags' in n) || !Object(f.a)(n.flags))
                            throw new Error('Parsed replaced macro has no flags field: ' + t);
                        return !0;
                    }, p = function (t) {
                        t.expFlags;
                        var n = function (t, n) {
                                if (null == t)
                                    return {};
                                var e, r, o = {}, i = Object.keys(t);
                                for (r = 0; r < i.length; r++)
                                    e = i[r], n.indexOf(e) >= 0 || (o[e] = t[e]);
                                return o;
                            }(t, ['expFlags']), e = {};
                        return Object(u.a)(t.expFlags, function (t) {
                            Object(u.a)(t, function (t) {
                                var n = t.CONTEXT.FLAGS;
                                Object(f.a)(n) && Object(u.a)(Object(d.a)(n), function (t) {
                                    var r = n[t];
                                    e[t] = r;
                                });
                            });
                        }), i({ flags: e }, n);
                    }, h = {
                        testIds: '',
                        flags: {}
                    };
                var b = Object(a.a)(function () {
                        try {
                            return '{"flags":{"FEATURE_TOGGLE_FLAG":1,"AB_LONG_EXP_FLAG_ENABLE_ABUSE_DISPLAY":"1","VAS_STABLE_VERSION":"390999","ADSDKVER":"390999"},"flagsMap":{"FEATURE_TOGGLE_FLAG":[{"value":1,"testId":"386029"}],"AB_LONG_EXP_FLAG_ENABLE_ABUSE_DISPLAY":[{"value":"1","testId":"390415"}],"VAS_STABLE_VERSION":[{"value":"390999","testId":"394415"},{"value":"390999","testId":"394463"}],"ADSDKVER":[{"value":"390999","testId":"394494"}]},"testIds":"394463,0,50","isDryRun":false,"pcodever":"0","adsdkver":"390999","yawProduct":"ads","route":"video-ads-sdk/adsdk","uri":"/pcode?route=video-ads-sdk/adsdk","query":{"route":"video-ads-sdk/adsdk"},"device":"desktop","iCookie":"3889792021627538550","isInternalNetwork":false,"isStickyVersion":false,"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"}';
                        } catch (t) {
                            return t;
                        }
                    }), y = function (t) {
                        if (Object(s.a)(t))
                            return {
                                error: t,
                                config: h
                            };
                        try {
                            var n = Object(f.a)(t) ? t : JSON.parse('' + (t || '')), e = function (t) {
                                    return !!Object(f.a)(t) && (!!('expFlags' in t && Object(c.a)(t.expFlags)) && !!('testIds' in t && Object(l.a)(t.testIds)));
                                }(n) ? p(n) : n;
                            if (!v(String(t), e))
                                throw new Error('UAAS config is not valid: ' + t);
                            return {
                                error: void 0,
                                config: e
                            };
                        } catch (r) {
                            return {
                                error: r,
                                config: h
                            };
                        }
                    }, m = Object(a.a)(function () {
                        return y(b());
                    });
                e.d(n, 'a', function () {
                    return _;
                }), e.d(n, 'b', function () {
                    return j;
                });
                var g, O = h;
                try {
                    var w = m();
                    if (w.error)
                        throw w.error;
                    O = w.config;
                } catch (E) {
                    g = E;
                }
                var _ = O, j = g;
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    if ('function' === typeof Object.keys)
                        return Object.keys(t);
                    var n = [];
                    for (var e in t)
                        Object(o.a)(t, e) && n.push(e);
                    return n;
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(59);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = function (t, n, e) {
                    for (var r = new Array(t.length), o = 0; o < t.length; o++)
                        r[o] = n.call(e, t[o], o, t);
                    return r;
                };
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n = t.element, e = t.eventName, r = t.listener, o = t.options, i = t.ignoreBubbling, a = void 0 !== i && i ? function (t) {
                            t.target === n && r.call(this, t);
                        } : r, u = function (t) {
                            var n = !1, e = !1, r = !1;
                            return !0 === t ? n = !0 : 'object' === typeof t && (n = Boolean(t.capture), e = Boolean(t.passive), r = Boolean(t.once)), {
                                capture: n,
                                passive: e,
                                once: r
                            };
                        }(o), c = j ? u : u.capture, s = u.once && !_ ? function (t) {
                            d(), a.call(this, t);
                        } : a, d = function () {
                            w(n, e, s, c);
                        };
                    try {
                        O(n, e, s, c);
                    } catch (l) {
                        var f = function (t) {
                            return Object(R.a)(t) && Boolean(t.code);
                        }(l) ? l : new b.a({
                            code: 'ADD_EVENT_LISTENER_FUNCTION_CALL_ERROR',
                            details: { error: l }
                        });
                        throw m.b.error({ error: f }), f;
                    }
                    return d;
                }
                function o(t, n) {
                    return function () {
                        try {
                            t.apply(void 0, arguments);
                        } catch (e) {
                            m.b.error({ error: new b.a(e, { code: n }) }), Object(L.a)(e);
                        }
                    };
                }
                function i(t, n, e) {
                    var r, o, i, a, u, c, s, d = null === (r = e.ya) || void 0 === r ? void 0 : null === (o = r.videoAd) || void 0 === o ? void 0 : null === (i = o.loadedModules) || void 0 === i ? void 0 : i[t];
                    return d || (void 0 !== n ? null === (a = e.ya) || void 0 === a ? void 0 : null === (u = a.videoAd) || void 0 === u ? void 0 : null === (c = u.modules) || void 0 === c ? void 0 : null === (s = c[n]) || void 0 === s ? void 0 : s[t] : void 0);
                }
                function a() {
                    return (a = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function u(t) {
                    return void 0 === t && (t = h.b), V.b || function (t) {
                        return F.a + '1.0-' + t + '/';
                    }(t);
                }
                function c(t, n) {
                    void 0 === n && (n = window);
                    var e = Object(G.d)(t).hostname, r = Object(C.a)(n);
                    return r ? -1 === Y.c.indexOf(e) ? t : r(t) : t;
                }
                function s() {
                    return (s = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function d(t) {
                    var n = t.moduleName, e = t.version, a = void 0 === e ? h.b : e, u = t.onSuccess, c = t.onError, s = t.win, d = t.timeout, g = 'loading', O = Date.now(), w = Object(f.a)(o(function (t) {
                            g = 'success';
                            var e = Date.now() - O;
                            m.b.values({
                                name: 'ModuleLoaded',
                                labels: { bundleName: n },
                                data: {
                                    loaderVersion: h.a,
                                    bundleVersion: a
                                },
                                values: { timeSpent: e }
                            }), u(t);
                        }, 'LOAD_MODULE_CALLBACK_ERROR')), _ = Object(f.a)(o(function (t) {
                            g = 'error', m.b.error({ error: t }), c(t);
                        }, 'LOAD_MODULE_CALLBACK_ERROR')), j = i(n, a, s);
                    if (j)
                        return w(j), l.a;
                    var E = B({
                            version: a,
                            bundleName: n,
                            win: s,
                            ecmaVersion: I
                        }), A = ct({
                            src: E,
                            win: s
                        }), S = A.promise, T = A.teardown, R = Object(v.a)(d), L = R.promise, N = R.clear, D = r({
                            element: s,
                            eventName: 'unload',
                            listener: function () {
                                _(new b.a({
                                    code: 'LOAD_MODULE_REJECTED_BY_WINDOW_UNLOAD',
                                    details: {
                                        moduleName: n,
                                        version: a,
                                        timeout: d
                                    }
                                }));
                            }
                        }), P = function () {
                            D(), N();
                        };
                    return L.then(function () {
                        _(new b.a({
                            code: 'LOAD_MODULE_TIMEOUT',
                            details: {
                                moduleName: n,
                                version: a,
                                timeout: d
                            }
                        }));
                    }), S.then(function () {
                        P();
                        var t = i(n, a, s), e = M(n);
                        t ? (y.a && p.a.logTimingAndLoadRum(e, E), w(t)) : _(new b.a({
                            code: 'CANNOT_INIT_MODULE',
                            details: {
                                moduleName: n,
                                version: a
                            }
                        }));
                    }).catch(function (t) {
                        P(), _(new b.a(t, {
                            code: 'CANNOT_LOAD_MODULE',
                            details: {
                                moduleName: n,
                                version: a
                            }
                        }));
                    }), function () {
                        P(), T(), 'loading' === g && m.b.event({
                            name: 'LoadModuleTeardownCalled',
                            data: void 0
                        });
                    };
                }
                var f = e(19), l = e(3), v = e(92), p = e(46), h = e(7), b = e(10), y = e(75), m = e(0), g = e(37), O = function (t, n, e) {
                        t.attachEvent('on' + n, e);
                    }, w = function (t, n, e) {
                        t.detachEvent('on' + n, e);
                    };
                Object(g.a)(document, 'addEventListener') && Object(g.a)(document, 'removeEventListener') && (O = function (t, n, e, r) {
                    var o = t && Object(g.a)(t, 'addEventListener');
                    o && o.call(t, n, e, r);
                }, w = function (t, n, e, r) {
                    var o = t && Object(g.a)(t, 'removeEventListener');
                    o && o.call(t, n, e, r);
                });
                var _ = !1, j = !1;
                try {
                    if (function (t) {
                            void 0 === t && (t = window);
                            var n = t.Object;
                            try {
                                var e = {};
                                return n.defineProperty(e, 'sentinel', {}), 'sentinel' in e;
                            } catch (r) {
                                return !1;
                            }
                        }()) {
                        var E = document.createElement('div'), A = {};
                        Object.defineProperty(A, 'once', {
                            get: function () {
                                return _ = !0;
                            }
                        }), Object.defineProperty(A, 'passive', {
                            get: function () {
                                return !0;
                            }
                        }), Object.defineProperty(A, 'capture', {
                            get: function () {
                                return j = !0;
                            }
                        }), O(E, 'click', l.a, A);
                    }
                } catch (dt) {
                }
                var S, T, R = e(73), L = e(35), N = e(70), D = function (t) {
                        try {
                            if ('noModule' in t.HTMLScriptElement.prototype)
                                return !0;
                        } catch (n) {
                        }
                        return !1;
                    }(S = window) && Object(N.a)(S), P = e(56), I = 'ES2017' === P.a ? 'ES2017' : 'ES5' === P.a ? 'ES5' : D ? 'ES2017' : 'ES5', k = a({}, {
                        InPage: 'inpage',
                        BannerAd: 'banner_ad',
                        VideoPlayer: 'video_player',
                        AdLoader: 'loader',
                        VideoBannerAd: 'videobannerad',
                        Multiroll: 'multiroll',
                        YaMusicAPI: 'ya-music-api',
                        VpaidPlayer: 'vpaid_player',
                        Rum: 'rum'
                    }, {
                        OverlayTGO: 'overlay_tgo',
                        MotionTGO: 'motion_ad_creative',
                        InteractiveElementsAdCreative: 'interactive_elements_ad_creative',
                        ThemeEmpty: 'theme_empty'
                    }), M = function (t) {
                        return k[t] + '.bundle.js';
                    }, C = e(29), x = e(4), U = {
                        ES5: 'bundles',
                        ES2017: 'bundles-es2017'
                    }, V = e(6), F = e(76), B = function (t) {
                        var n = t.bundleName, e = t.win, r = t.ecmaVersion, o = t.version, i = U[r], a = Object(C.a)(e), c = M(n), s = '' + u(o) + i + '/' + c;
                        return Object(x.a)(a) ? a(s) : s;
                    }, G = (e(18), e(11)), Y = e(24), H = e(93), K = e(49), W = e(74), X = e(71), z = e(72), J = e(66), q = e(44), $ = e(32), Q = e(55), Z = 'VAS', tt = function (t) {
                        return Object(Q.a)(String(t % Math.pow(10, 4)), 4, '0');
                    }, nt = e(47), et = e(2), rt = (null === et.f || void 0 === et.f ? void 0 : et.f.vsid) || et.h || (void 0 === T && (T = h.a), [
                        Object($.a)(44),
                        Z,
                        tt(T),
                        Object(Q.a)(Date.now().toString().slice(0, 10), 10, '0')
                    ].join('x'));
                Object(nt.a)(((null === et.f || void 0 === et.f ? void 0 : et.f.vsid) ? 'Use VSID from player' : et.h ? 'Use VSID from session' : 'Generate new VSID') + ' [' + rt + ']');
                var ot = {
                        SID: J.a,
                        VSID: rt,
                        VAS_USER_SESSION_RANDOM: q.a,
                        AB_FLAGS: K.a,
                        ICOOKIE: X.a,
                        TEST_IDS: z.a,
                        AdditionalStatsRootFields: W.a,
                        RUM_WRAPPER: p.a
                    }, it = e(33), at = {
                        onBeforeLoad: function (t) {
                            Object(it.d)(t, ot);
                        }
                    }, ut = function (t) {
                        var n;
                        !function (t) {
                            t.crossOrigin = 'anonymous';
                        }(t), null === (n = at.onBeforeLoad) || void 0 === n || n.call(at, t);
                    }, ct = function (t) {
                        var n = t.src, e = t.win;
                        return function (t) {
                            var n = t.src, e = t.win;
                            return Object(H.a)(s({}, at, t, { src: c(n, e) }));
                        }({
                            src: n,
                            onBeforeLoad: ut,
                            win: e
                        });
                    };
                e.d(n, 'a', function () {
                    return st;
                }), e.d(n, 'b', function () {
                    return d;
                });
                var st = 30000;
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    if (!t || !t.toString)
                        return !1;
                    var n = t.toString();
                    return /\[native code\]/.test(n) || /\/\* source code not available \*\//.test(n);
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(53), o = r.a.length, i = o > 0 ? r.a[o - 1].ownerDocument.defaultView : window;
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n = function () {
                        var e;
                        return n = function () {
                            return e;
                        }, e = t.apply(this, arguments);
                    };
                    return function () {
                        return n.apply(this, arguments);
                    };
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return c;
                });
                var r = e(41), o = e(61), i = e(33), a = document.currentScript;
                if (!a) {
                    var u = Object(o.a)(document.getElementsByTagName('script'));
                    (a = Object(r.a)(u, i.c)) || (a = u[u.length - 1]);
                }
                var c = a;
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return Object(o.a)(t) && t.length > 0;
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(9);
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function r(n) {
                        var e = 'function' === typeof t ? new t() : void 0;
                        return (r = function (t) {
                            function n() {
                                return o(t, arguments, a(this).constructor);
                            }
                            if (null === t || (r = t, -1 === Function.toString.call(r).indexOf('[native code]')))
                                return t;
                            var r;
                            if ('function' !== typeof t)
                                throw new TypeError('Super expression must either be null or a function');
                            if ('undefined' !== typeof e) {
                                if (e.has(t))
                                    return e.get(t);
                                e.set(t, n);
                            }
                            return n.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: n,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), i(n, t);
                        })(n);
                    }
                    function o(t, n, e) {
                        return (o = function () {
                            if ('undefined' === typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ('function' === typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                                })), !0;
                            } catch (t) {
                                return !1;
                            }
                        }() ? Reflect.construct : function (t, n, e) {
                            var r = [null];
                            r.push.apply(r, n);
                            var o = new (Function.bind.apply(t, r))();
                            return e && i(o, e.prototype), o;
                        }).apply(null, arguments);
                    }
                    function i(t, n) {
                        return (i = Object.setPrototypeOf || function (t, n) {
                            return t.__proto__ = n, t;
                        })(t, n);
                    }
                    function a(t) {
                        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                            return t.__proto__ || Object.getPrototypeOf(t);
                        })(t);
                    }
                    e.d(n, 'a', function () {
                        return f;
                    });
                    var u = e(104), c = e(87), s = e(26), d = e(112), f = function (t) {
                            function n(e, r) {
                                var o;
                                void 0 === r && (r = {});
                                var i = 'object' === typeof e ? e : { message: String(e || s.a.message) };
                                o = t.call(this) || this, d(function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                                    return t;
                                }(o), n.prototype), o.message = r.message || i.message || s.a.message, o.code = r.code || i.code || i.id || s.a.code, o.isFatal = Boolean(Object(u.a)([
                                    r.isFatal,
                                    i.isFatal,
                                    s.a.isFatal
                                ])), o.details = r.details || i.details || s.a.details;
                                var a = r.stack || i.stack || function (t) {
                                        var n = t.url, e = t.line, r = t.col, o = t.fileName, i = t.columnNumber, a = t.lineNumber;
                                        return (n || o || '?') + ':' + (e || a || '?') + ':' + (r || i || '?');
                                    }(i), f = a === s.a.stack ? o.stack : a;
                                if (f && f !== s.a.stack)
                                    o.stack = f;
                                else if (!o.stack)
                                    try {
                                        throw new Error(o.message);
                                    } catch (l) {
                                        o.stack = f = l.stack || s.a.stack;
                                    }
                                return o.toString = function () {
                                    return Object(c.a)(o.toJSON());
                                }, o.toJSON = function () {
                                    return {
                                        message: o.message,
                                        code: o.code,
                                        isFatal: o.isFatal,
                                        details: o.details,
                                        stack: f
                                    };
                                }, o;
                            }
                            var e, r;
                            return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n;
                        }(r(Error));
                }.call(this, e(111).Map));
            },
            function (t, n, e) {
                (function (n, e) {
                    var r;
                    r = function () {
                        'use strict';
                        function t(t) {
                            return 'function' === typeof t;
                        }
                        function r() {
                            var t = setTimeout;
                            return function () {
                                return t(o, 1);
                            };
                        }
                        function o() {
                            for (var t = 0; t < j; t += 2)
                                (0, P[t])(P[t + 1]), P[t] = void 0, P[t + 1] = void 0;
                            j = 0;
                        }
                        function i(t, n) {
                            var e = this, r = new this.constructor(u);
                            void 0 === r[k] && y(r);
                            var o = e._state;
                            if (o) {
                                var i = arguments[o - 1];
                                S(function () {
                                    return b(o, r, i, e._result);
                                });
                            } else
                                p(e, r, t, n);
                            return r;
                        }
                        function a(t) {
                            if (t && 'object' === typeof t && t.constructor === this)
                                return t;
                            var n = new this(u);
                            return d(n, t), n;
                        }
                        function u() {
                        }
                        function c(t) {
                            try {
                                return t.then;
                            } catch (n) {
                                return U.error = n, U;
                            }
                        }
                        function s(n, e, r) {
                            e.constructor === n.constructor && r === i && e.constructor.resolve === a ? function (t, n) {
                                n._state === C ? l(t, n._result) : n._state === x ? v(t, n._result) : p(n, void 0, function (n) {
                                    return d(t, n);
                                }, function (n) {
                                    return v(t, n);
                                });
                            }(n, e) : r === U ? (v(n, U.error), U.error = null) : void 0 === r ? l(n, e) : t(r) ? function (t, n, e) {
                                S(function (t) {
                                    var r = !1, o = function (t, n, e, r) {
                                            try {
                                                t.call(n, e, r);
                                            } catch (o) {
                                                return o;
                                            }
                                        }(e, n, function (e) {
                                            r || (r = !0, n !== e ? d(t, e) : l(t, e));
                                        }, function (n) {
                                            r || (r = !0, v(t, n));
                                        }, t._label);
                                    !r && o && (r = !0, v(t, o));
                                }, t);
                            }(n, e, r) : l(n, e);
                        }
                        function d(t, n) {
                            var e, r;
                            t === n ? v(t, new TypeError('You cannot resolve a promise with itself')) : (r = typeof (e = n), null === e || 'object' !== r && 'function' !== r ? l(t, n) : s(t, n, c(n)));
                        }
                        function f(t) {
                            t._onerror && t._onerror(t._result), h(t);
                        }
                        function l(t, n) {
                            t._state === M && (t._result = n, t._state = C, 0 !== t._subscribers.length && S(h, t));
                        }
                        function v(t, n) {
                            t._state === M && (t._state = x, t._result = n, S(f, t));
                        }
                        function p(t, n, e, r) {
                            var o = t._subscribers, i = o.length;
                            t._onerror = null, o[i] = n, o[i + C] = e, o[i + x] = r, 0 === i && t._state && S(h, t);
                        }
                        function h(t) {
                            var n = t._subscribers, e = t._state;
                            if (0 !== n.length) {
                                for (var r = void 0, o = void 0, i = t._result, a = 0; a < n.length; a += 3)
                                    r = n[a], o = n[a + e], r ? b(e, r, o, i) : o(i);
                                t._subscribers.length = 0;
                            }
                        }
                        function b(n, e, r, o) {
                            var i = t(r), a = void 0, u = void 0, c = void 0, s = void 0;
                            if (i) {
                                if ((a = function (t, n) {
                                        try {
                                            return t(n);
                                        } catch (e) {
                                            return U.error = e, U;
                                        }
                                    }(r, o)) === U ? (s = !0, u = a.error, a.error = null) : c = !0, e === a)
                                    return void v(e, new TypeError('A promises callback cannot return that same promise.'));
                            } else
                                a = o, c = !0;
                            e._state !== M || (i && c ? d(e, a) : s ? v(e, u) : n === C ? l(e, a) : n === x && v(e, a));
                        }
                        function y(t) {
                            t[k] = V++, t._state = void 0, t._result = void 0, t._subscribers = [];
                        }
                        var m, g, O, w, _ = Array.isArray ? Array.isArray : function (t) {
                                return '[object Array]' === Object.prototype.toString.call(t);
                            }, j = 0, E = void 0, A = void 0, S = function (t, n) {
                                P[j] = t, P[j + 1] = n, 2 === (j += 2) && (A ? A(o) : I());
                            }, T = 'undefined' !== typeof window ? window : void 0, R = T || {}, L = R.MutationObserver || R.WebKitMutationObserver, N = 'undefined' === typeof self && 'undefined' !== typeof n && '[object process]' === {}.toString.call(n), D = 'undefined' !== typeof Uint8ClampedArray && 'undefined' !== typeof importScripts && 'undefined' !== typeof MessageChannel, P = new Array(1000), I = void 0;
                        N ? I = function () {
                            return n.nextTick(o);
                        } : L ? (g = 0, O = new L(o), w = document.createTextNode(''), O.observe(w, { characterData: !0 }), I = function () {
                            w.data = g = ++g % 2;
                        }) : D ? ((m = new MessageChannel()).port1.onmessage = o, I = function () {
                            return m.port2.postMessage(0);
                        }) : I = void 0 === T ? function () {
                            try {
                                var t = Function('return this')().require('vertx');
                                return 'undefined' !== typeof (E = t.runOnLoop || t.runOnContext) ? function () {
                                    E(o);
                                } : r();
                            } catch (n) {
                                return r();
                            }
                        }() : r();
                        var k = Math.random().toString(36).substring(2), M = void 0, C = 1, x = 2, U = { error: null }, V = 0, F = function () {
                                function t(t, n) {
                                    this._instanceConstructor = t, this.promise = new t(u), this.promise[k] || y(this.promise), _(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? l(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && l(this.promise, this._result))) : v(this.promise, new Error('Array Methods must be provided an Array'));
                                }
                                return t.prototype._enumerate = function (t) {
                                    for (var n = 0; this._state === M && n < t.length; n++)
                                        this._eachEntry(t[n], n);
                                }, t.prototype._eachEntry = function (t, n) {
                                    var e = this._instanceConstructor, r = e.resolve;
                                    if (r === a) {
                                        var o = c(t);
                                        if (o === i && t._state !== M)
                                            this._settledAt(t._state, n, t._result);
                                        else if ('function' !== typeof o)
                                            this._remaining--, this._result[n] = t;
                                        else if (e === B) {
                                            var d = new e(u);
                                            s(d, t, o), this._willSettleAt(d, n);
                                        } else
                                            this._willSettleAt(new e(function (n) {
                                                return n(t);
                                            }), n);
                                    } else
                                        this._willSettleAt(r(t), n);
                                }, t.prototype._settledAt = function (t, n, e) {
                                    var r = this.promise;
                                    r._state === M && (this._remaining--, t === x ? v(r, e) : this._result[n] = e), 0 === this._remaining && l(r, this._result);
                                }, t.prototype._willSettleAt = function (t, n) {
                                    var e = this;
                                    p(t, void 0, function (t) {
                                        return e._settledAt(C, n, t);
                                    }, function (t) {
                                        return e._settledAt(x, n, t);
                                    });
                                }, t;
                            }(), B = function () {
                                function t(n) {
                                    this[k] = V++, this._result = this._state = void 0, this._subscribers = [], u !== n && ('function' !== typeof n && function () {
                                        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                                    }(), this instanceof t ? function (t, n) {
                                        try {
                                            n(function (n) {
                                                d(t, n);
                                            }, function (n) {
                                                v(t, n);
                                            });
                                        } catch (e) {
                                            v(t, e);
                                        }
                                    }(this, n) : function () {
                                        throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
                                    }());
                                }
                                return t.prototype.catch = function (t) {
                                    return this.then(null, t);
                                }, t.prototype.finally = function (t) {
                                    var n = this.constructor;
                                    return this.then(function (e) {
                                        return n.resolve(t()).then(function () {
                                            return e;
                                        });
                                    }, function (e) {
                                        return n.resolve(t()).then(function () {
                                            throw e;
                                        });
                                    });
                                }, t;
                            }();
                        return B.prototype.then = i, B.all = function (t) {
                            return new F(this, t).promise;
                        }, B.race = function (t) {
                            var n = this;
                            return _(t) ? new n(function (e, r) {
                                for (var o = t.length, i = 0; i < o; i++)
                                    n.resolve(t[i]).then(e, r);
                            }) : new n(function (t, n) {
                                return n(new TypeError('You must pass an array to race.'));
                            });
                        }, B.resolve = a, B.reject = function (t) {
                            var n = new this(u);
                            return v(n, t), n;
                        }, B._setScheduler = function (t) {
                            A = t;
                        }, B._setAsap = function (t) {
                            S = t;
                        }, B._asap = S, B.polyfill = function () {
                            var t = void 0;
                            if ('undefined' !== typeof e)
                                t = e;
                            else if ('undefined' !== typeof self)
                                t = self;
                            else
                                try {
                                    t = Function('return this')();
                                } catch (o) {
                                    throw new Error('polyfill failed because global object is unavailable in this environment');
                                }
                            var n = t.Promise;
                            if (n) {
                                var r = null;
                                try {
                                    r = Object.prototype.toString.call(n.resolve());
                                } catch (o) {
                                }
                                if ('[object Promise]' === r && !n.cast)
                                    return;
                            }
                            t.Promise = B;
                        }, B.Promise = B, B;
                    }, t.exports = r();
                }.call(this, e(107), e(108)));
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                }), e.d(n, 'b', function () {
                    return o;
                }), e.d(n, 'c', function () {
                    return i;
                });
                var r = [
                        'a',
                        'n.ya',
                        'nd',
                        'ex.ru'
                    ].join(''), o = [
                        'ya',
                        'sta',
                        'tic.net'
                    ].join(''), i = [
                        r,
                        o
                    ];
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return 'function' === typeof Object.entries ? Object.entries(t) : Object(o.a)(t).map(function (n) {
                        return [
                            n,
                            t[n]
                        ];
                    });
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(14);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = {
                    message: 'DEFAULT_ERROR_MESSAGE',
                    code: 0,
                    details: '',
                    stack: '?:?:?',
                    isFatal: !0
                };
            },
            function (t, n, e) {
                'use strict';
                function r(t, n, e) {
                    for (var r in t)
                        Object(o.a)(t, r) && n.call(e, t[r], r, t);
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(59);
            },
            function (t, n, e) {
                'use strict';
                var r = e(17), o = !Object(r.a)(Math.random) || Math.random() === Math.random(), i = e(4), a = Date && Object(i.a)(Date.now) ? function () {
                        return Date.now();
                    } : function () {
                        return new Date().getTime();
                    }, u = 'undefined' === typeof window ? void 0 : window.performance, c = u && Object(i.a)(u.now), s = u && u.timing && u.timing.navigationStart ? u.timing.navigationStart : a(), d = 0, f = c ? function () {
                        return u.now();
                    } : function () {
                        return t = a() - s, d = Math.max(t, d);
                        var t;
                    }, l = 2147483647, v = 16807, p = Date.now() * f() % l, h = l - 1;
                e.d(n, 'a', function () {
                    return b;
                });
                var b = o ? function () {
                    return ((p = p * v % l) - 1) / h;
                } : function () {
                    return Math.random();
                };
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    var e;
                    if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (e = function (t, n) {
                                if (!t)
                                    return;
                                if ('string' === typeof t)
                                    return o(t, n);
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                'Object' === e && t.constructor && (e = t.constructor.name);
                                if ('Map' === e || 'Set' === e)
                                    return Array.from(t);
                                if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                                    return o(t, n);
                            }(t)) || n && t && 'number' === typeof t.length) {
                            e && (t = e);
                            var r = 0;
                            return function () {
                                return r >= t.length ? { done: !0 } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    return (e = t[Symbol.iterator]()).next.bind(e);
                }
                function o(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for (var e = 0, r = new Array(n); e < n; e++)
                        r[e] = t[e];
                    return r;
                }
                var i = e(31), a = e(4), u = e(1), c = function (t, n) {
                        for (var e, o = r(n.split('.')); !(e = o()).done;) {
                            var i = e.value;
                            if (!Object(u.a)(t)) {
                                t = void 0;
                                break;
                            }
                            t = t[i];
                        }
                        return t;
                    }, s = e(57);
                e.d(n, 'a', function () {
                    return d;
                });
                var d = function (t) {
                    if (void 0 === t && (t = window), s.a)
                        return s.a;
                    for (var n = Object(i.a)(t); n.length;) {
                        var e = n.pop();
                        if (e) {
                            var r = c(e, 'ya.videoAd.encodeUrl');
                            if (Object(a.a)(r))
                                return r;
                        }
                    }
                };
            },
            function (t, n, e) {
                'use strict';
                var r = e(14), o = e(1), i = e(21), a = e(63);
                e.d(n, 'b', function () {
                    return d;
                }), e.d(n, 'a', function () {
                    return f;
                });
                var u, c, s = (u = window, {
                        rootFields: Object(a.a)(function () {
                            return function (t) {
                                var n, e, a = null === t || void 0 === t ? void 0 : null === (n = t.ya) || void 0 === n ? void 0 : null === (e = n.videoAd) || void 0 === e ? void 0 : e.statsRootParams;
                                if (Object(o.a)(a)) {
                                    var u = {}, c = a.vsid, s = a.contentPlayerVersion, d = a.pcodeVersion, f = a.widgetVersion;
                                    if (Object(i.a)(c) && (u.vsid = c), Object(i.a)(s) && (u.contentPlayerVersion = s), Object(i.a)(d) && (u.pcodeVersion = d), Object(i.a)(f) && (u.widgetVersion = f), Object(r.a)(u).length > 0)
                                        return u;
                                }
                            }(u);
                        }, function (t) {
                            c = t;
                        }) || void 0,
                        extractionError: c
                    }), d = s.rootFields, f = s.extractionError;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(42), o = function (t) {
                        for (var n = []; t;)
                            try {
                                if (Object(r.a)(t), n.push(t), t.parent === t)
                                    break;
                                t = t.parent;
                            } catch (e) {
                                break;
                            }
                        return n;
                    };
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    for (var n = '', e = 0; e < t; e++)
                        n += (16 * Object(o.a)() | 0).toString(16);
                    return n;
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(28);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'c', function () {
                    return o;
                }), e.d(n, 'd', function () {
                    return i;
                }), e.d(n, 'b', function () {
                    return a;
                }), e.d(n, 'a', function () {
                    return u;
                });
                var r = e(1), o = function (t) {
                        return Object(r.a)(t.__AD_SDK_SCRIPT_SESSION_PARAMETERS__);
                    }, i = function (t, n) {
                        t.__AD_SDK_SCRIPT_SESSION_PARAMETERS__ = n;
                    }, a = function (t) {
                        return t.__AD_SDK_SCRIPT_SESSION_PARAMETERS__;
                    }, u = function (t) {
                        delete t.__AD_SDK_SCRIPT_SESSION_PARAMETERS__;
                    };
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    Object(i.a)(console) && Object(o.a)(console.warn) && console.warn(t);
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(4), i = e(1);
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    setTimeout(function () {
                        throw t;
                    }, 0);
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                var r = e(24), o = e(77).a + '/1_0';
                e.d(n, 'b', function () {
                    return i;
                }), e.d(n, 'a', function () {
                    return a;
                });
                var i = 'https://' + r.b + '/' + o + '/', a = 'https://' + r.a + '/system/video-ads-sdk/';
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    var e = t[n];
                    if (!Object(o.a)(e)) {
                        var r = e;
                        try {
                            delete t[n];
                            var i = t[n];
                            'function' === typeof i && (e = i), t[n] = r;
                        } catch (a) {
                        }
                    }
                    return e;
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(17);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = {}.toString, o = /\[object (\w+)\]/, i = function (t) {
                        var n = r.call(t);
                        if (!n)
                            return null;
                        var e = n.match(o);
                        if (!e)
                            return null;
                        var i = e[1];
                        return i || null;
                    };
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(38), o = function (t) {
                        return t instanceof Error || 'Error' === Object(r.a)(t);
                    };
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return a;
                });
                var r = e(38), o = e(37), i = Object(o.a)(Array, 'isArray'), a = Boolean(i) ? function (t) {
                        return i.call(Array, t);
                    } : function (t) {
                        return 'Array' === Object(r.a)(t);
                    };
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(17), o = [].find, i = Object(r.a)(o) ? function (t, n) {
                        return o.call(t, n);
                    } : function (t, n) {
                        for (var e = 0; e < t.length; e++) {
                            var r = t[e];
                            if (n(r, e, t))
                                return r;
                        }
                    };
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    if (t && t.location) {
                        var n = t.location;
                        return 'function' === typeof n.toString ? n.toString() : n.href || '';
                    }
                    return '';
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = e(3).a;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(28), o = e(2), i = null !== o.c && void 0 !== o.c ? o.c : Object(r.a)();
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return o.a < t;
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(44);
            },
            function (t, n, e) {
                'use strict';
                function r(t, n, e) {
                    return n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e, t;
                }
                var o, i = e(51), a = e(60), u = (void 0 === o && (o = window), Object(a.a)(o)), c = e(28), s = e(3), d = e(86), f = e(58), l = function (t) {
                        function n(n, e) {
                            var r;
                            return void 0 === e && (e = function (t, n) {
                                return t === n;
                            }), (r = t.call(this) || this).checkToEqualFunction = e, r.value = n, r;
                        }
                        var e, r;
                        r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var o = n.prototype;
                        return o.getValue = function () {
                            return this.value;
                        }, o.subscribeValueCondition = function (t, n) {
                            return this.add(function (e) {
                                t(e) && Object(f.a)(n, e);
                            });
                        }, o.subscribeValueConditionOnce = function (t, n) {
                            var e = this.subscribeValueCondition(t, function (t) {
                                e(), Object(f.a)(n, t);
                            });
                            return e;
                        }, o.dispatch = function (n) {
                            this.checkToEqualFunction(this.value, n) || (this.value = n, t.prototype.dispatch.call(this, n));
                        }, n;
                    }(d.a), v = e(7), p = e(0), h = e(47), b = {
                        idle: ['initializing'],
                        initializing: [
                            'initialized',
                            'disabled'
                        ]
                    }, y = function () {
                        function t(t) {
                            var n = this;
                            r(this, 'state', new l({ name: 'idle' }, function (t, n) {
                                var e = b[t.name];
                                return !e || !Object(i.a)(e, n.name) || (Object(h.a)('RumWrapperClass: change state from [' + t.name + '] to [' + n.name + ']'), !1);
                            })), r(this, 'config', void 0), this.config = t, this.state.subscribeValueCondition(function (t) {
                                return 'initializing' === t.name;
                            }, function () {
                                return n.loadRum();
                            }), this.state.subscribeValueCondition(function (t) {
                                return 'disabled' === t.name;
                            }, function () {
                                return p.b.event({
                                    name: 'RumIsDisabled',
                                    data: void 0
                                });
                            });
                        }
                        var n = t.prototype;
                        return n.init = function () {
                            this.state.dispatch({ name: 'initializing' });
                        }, n.logBundleTiming = function (t, n) {
                            var e = this, r = this.state.getValue();
                            'disabled' !== r.name && ('initialized' === r.name ? this.sendResTiming({
                                name: t,
                                src: n,
                                state: r
                            }) : this.state.subscribeValueCondition(function (t) {
                                return 'initialized' === t.name;
                            }, function (r) {
                                e.sendResTiming({
                                    name: t,
                                    src: n,
                                    state: r
                                });
                            }));
                        }, n.logTimingAndLoadRum = function (t, n) {
                            'idle' === this.state.getValue().name && this.init(), this.logBundleTiming(t, n);
                        }, n.isLoading = function () {
                            return 'initializing' === this.state.getValue().name;
                        }, n.isLoaded = function () {
                            return 'initialized' === this.state.getValue().name;
                        }, n.loadRum = function () {
                            var t, n = this, r = null === (t = this.config) || void 0 === t ? void 0 : t.loadModule;
                            r || (r = e(113).loadRumModule), r().then(function (t) {
                                n.initLoadedRum(t), t.isRumInited() ? n.state.dispatch({
                                    name: 'initialized',
                                    rum: t
                                }) : n.state.dispatch({ name: 'disabled' });
                            }).catch(s.a);
                        }, n.initLoadedRum = function (t) {
                            var n = {
                                    clck: 'https://yandex.ru/clck/click',
                                    reqid: Date.now() + ':adsdk:' + Object(c.a)(),
                                    scrollLatencyMetric: !0,
                                    sendAutoElementTiming: !0,
                                    isDevMode: !1
                                }, e = u ? 'touch' : 'desktop', r = {
                                    rum_id: 'ru.adsdk.' + e,
                                    '-project': 'adsdk',
                                    '-page': window.location.host,
                                    '-version': v.a,
                                    '-platform': e,
                                    '-env': 'production',
                                    '-url': window.location.href,
                                    '-domain': window.location.host,
                                    '-blocker': void 0
                                };
                            t.init(n, r);
                        }, n.sendResTiming = function (t) {
                            var n = t.state, e = t.name, r = t.src;
                            n.rum.sendResTiming(e, r);
                        }, t;
                    }(), m = e(2);
                e.d(n, 'a', function () {
                    return g;
                });
                var g = null !== m.d && void 0 !== m.d ? m.d : new y();
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n;
                    var e = (o.a || window).console;
                    if (u.a && void 0 !== e) {
                        var r = 'AdSDKJS[' + c.c + ']:';
                        0, null === (n = e.log) || void 0 === n || n.call(e, r, t);
                    }
                }
                var o = e(18), i = e(67), a = (Object(i.a)(window), e(20)), u = (a.a && a.a.src, e(54)), c = (e(81), e(6)), s = e(48);
                Object(s.a)({
                    propertyName: 'DEBUG_LOG_GLOBAL_CALLBACK_PROPERTY_NAME',
                    win: window
                });
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r() {
                    return (r = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                e(31), e(65);
                var o = e(3), i = o.a, a = o.a, u = e(43), c = e(88), s = e(89);
                e.d(n, 'a', function () {
                    return d;
                });
                var d = function (t) {
                    var n = t.win, e = t.propertyName;
                    return {
                        call: function (t) {
                            return i(r({
                                win: n,
                                propertyName: e
                            }, t));
                        },
                        subscribe: function (t) {
                            return Object(u.a)(r({
                                win: n,
                                propertyName: e
                            }, t));
                        },
                        wait: function (t) {
                            return Object(c.a)(r({
                                win: n,
                                propertyName: e
                            }, t));
                        },
                        waitUntil: function (t) {
                            return Object(s.a)(r({
                                win: n,
                                propertyName: e
                            }, t));
                        },
                        clear: function (t) {
                            return a(r({
                                win: n,
                                propertyName: e
                            }, t));
                        }
                    };
                };
            },
            function (t, n, e) {
                'use strict';
                function r() {
                    return (r = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var o = e(18), i = (e(1), e(9)), a = e(11), u = e(13), c = e(2), s = e(5);
                e.d(n, 'a', function () {
                    return h;
                });
                var d = u.a.flags, f = Object(a.c)(location.search).adsdkabflags, l = Object(s.b)(o.a, 'adsdkabflags'), v = null !== f && void 0 !== f ? f : l, p = Object(i.a)(v) ? function (t, n, e) {
                        var r = 0;
                        for (arguments.length < 3 && (r = 1, e = t[0]); r < t.length; r++)
                            e = n(e, t[r], r, t);
                        return e;
                    }(v.split(','), function (t, n) {
                        var e, o = n.split('='), i = o[0], a = o[1];
                        return r({}, t, ((e = {})[i] = a, e));
                    }, {}) : {}, h = r({}, {}, d, c.a, p);
            },
            function (t, n, e) {
                'use strict';
                var r = e(51), o = e(14), i = Object(o.a)({
                        AdSDKLoader: 0,
                        VpaidPlayerLoader: 0,
                        OldPythiaSurvey: 0
                    }), a = e(6);
                e.d(n, 'a', function () {
                    return u;
                });
                var u = Object(r.a)(i, a.c);
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    return -1 !== o(t, n);
                }
                var o = function (t, n, e, r) {
                        void 0 === e && (e = 0), void 0 === r && (r = i);
                        for (var o = e; o < t.length; o++)
                            if (r(t[o], n))
                                return o;
                        return -1;
                    }, i = function (t, n) {
                        return t === n;
                    };
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n = {};
                    return t.forEach(function (t) {
                        var e = t[0], r = t[1];
                        n[e] = r;
                    }), n;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(80), o = Object(r.a)(document.documentElement);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return a;
                });
                var r = e(13), o = e(68), i = r.a.isInternalNetwork || !1, a = Boolean(o.a) || i;
            },
            function (t, n, e) {
                'use strict';
                function r(t, n, e) {
                    void 0 === e && (e = ' ');
                    var r = n - t.length;
                    if (r > 0) {
                        for (var o = e; o.length < r;)
                            o += o;
                        return (o.length > r ? o.substr(0, r) : o) + t;
                    }
                    return t;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(5), o = ('' + Object(r.b)(window, 'adsdkecmaver')).toUpperCase(), i = 'ES2017' === o || 'ES5' === o ? o : void 0;
            },
            function (t, n, e) {
                'use strict';
                var r = e(4), o = e(1), i = '__ADB_CONFIG__';
                e.d(n, 'a', function () {
                    return u;
                });
                var a = Object(o.a)(i) && i.fn && Object(r.a)(i.fn.encodeUrl) ? i.fn.encodeUrl : void 0, u = void 0 !== a ? function (t) {
                        return a(t);
                    } : void 0;
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    !function (t) {
                        return 'function' === typeof t.dispatch;
                    }(t) ? t(n) : t.dispatch(n);
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n);
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return 'ontouchstart' in t;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    if (!t)
                        return [];
                    for (var n = [], e = 0; e < t.length; e++)
                        n.push(t[e]);
                    return n;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n = Object(i.a)(t.documentElement).map(function (t) {
                        return t.ownerDocument;
                    });
                    return n.unshift(t), n.map(function (t) {
                        return {
                            location: Object(o.a)(t.defaultView),
                            referrer: t.referrer
                        };
                    });
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(42), i = e(80);
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    try {
                        return t();
                    } catch (e) {
                        'function' === typeof n && n(e);
                    }
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    if (t) {
                        var n = t.parentElement;
                        n && n.removeChild(t);
                    }
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                        e[r - 1] = arguments[r];
                    Object(o.a)(t) && t.forEach(function (t) {
                        'function' === typeof t && t.apply(void 0, e);
                    });
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(40);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return a;
                });
                var r = e(32), o = e(47), i = e(2), a = i.e || Object(r.a)(64);
                Object(o.a)((i.e ? 'Use existing SID' : 'Generate new SID') + ' [' + a + ']');
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    for (var n = t, e = [t], r = t.top; n !== r;)
                        n = n.parent, e.push(n);
                    return e;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(5), o = Object(r.b)(window, 'adsdkdebug');
            },
            function (t, n, e) {
                'use strict';
                function r() {
                    return (r = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function o(t) {
                    var n = t.method, e = t.url, d = t.async, f = void 0 === d || d, l = t.data, v = t.responseType, p = void 0 === v ? 'text' : v, h = t.onBeforeSend, b = void 0 === h ? a.a : h, y = t.onRetry, m = void 0 === y ? a.a : y, g = t.checkStatus, O = void 0 === g ? function (t) {
                            return c === t;
                        } : g, w = t.headers, _ = void 0 === w ? {} : w, j = t.xhrConstructor, E = void 0 === j ? XMLHttpRequest : j, A = t.retries, S = void 0 === A ? 0 : A, T = t.timeout, R = void 0 === T ? 0 : T, L = t.withCredentials, N = t.onAbort, D = t.onSetup;
                    if (E) {
                        var P, I = t.onSuccess ? Object(i.a)(t.onSuccess) : a.a, k = t.onError ? Object(i.a)(t.onError) : a.a, M = !1, C = 0, x = function (t) {
                                M = !0, x = a.a, P = t, U(new Error('Abort request')), 'function' === typeof N && N(t);
                            }, U = function (n) {
                                if (V.onerror = null, V.onreadystatechange = null, C && clearTimeout(C), C && V.readyState !== s || M)
                                    try {
                                        V.abort();
                                    } catch (n) {
                                    }
                                if (!M)
                                    if (S > 0) {
                                        var e = m(n, V);
                                        if ('boolean' !== typeof e || Boolean(e) || x(), M)
                                            return;
                                        o(r({}, t, {
                                            onSetup: function (t) {
                                                var n = t.abort;
                                                x = function (t) {
                                                    return n(t);
                                                }, M && n(P);
                                            },
                                            retries: S - 1
                                        }));
                                    } else
                                        x = a.a, k(n, V);
                            }, V = new E();
                        try {
                            V.open(n, e, f);
                        } catch (F) {
                            return void U(F);
                        }
                        if (V.responseType = p, V.withCredentials = Boolean(L), Object(u.a)(_, function (t, n) {
                                try {
                                    V.setRequestHeader(n, t);
                                } catch (F) {
                                }
                            }), R > 0 && isFinite(R) && (C = window.setTimeout(function () {
                                U(new Error('Request timeout, ' + e));
                            }, R)), V.onerror = U, V.onreadystatechange = function () {
                                if (V.readyState === s) {
                                    var t = V.status;
                                    O(t) ? (x = a.a, clearTimeout(C), I(V)) : U(new Error('Invalid request status ' + t + ', ' + e));
                                }
                            }, ('function' !== typeof D || (D({
                                abort: function (t) {
                                    return x(t);
                                }
                            }), !M)) && (b(V, t), !M))
                            try {
                                V.send(l);
                            } catch (F) {
                                U(F);
                            }
                    }
                }
                e.d(n, 'a', function () {
                    return o;
                });
                var i = e(19), a = e(3), u = e(27), c = 200, s = 4;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(17), o = function (t) {
                        return Object(r.a)(t.navigator.sendBeacon);
                    };
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(2), o = e(13), i = r.b || o.a.iCookie;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(2), o = e(13), i = r.g || (null === o.a || void 0 === o.a ? void 0 : o.a.testIds) || void 0;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                }), e.d(n, 'b', function () {
                    return a;
                });
                var r = e(1), o = e(9), i = function (t) {
                        return !!Object(r.a)(t) && (!!Object(o.a)(t.name) && !!Object(o.a)(t.message));
                    }, a = function (t) {
                        return {
                            name: t.name,
                            message: t.message,
                            stack: t.stack
                        };
                    };
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(2), o = e(30), i = r.f || o.b || void 0;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(8), o = e(45), i = Object(o.a)(r.a);
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(77), o = 'https://' + e(24).b + '/' + r.a + '-bundles/';
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = [
                    'aw',
                    'ap',
                    's-a',
                    'd-sd',
                    'k-j',
                    's'
                ].join('');
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return o;
                });
                var r = e(79), o = '' + e(36).a + r.a + '.js';
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = 'adsdk';
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return function (t) {
                        return Boolean(t.PointerEvent);
                    }(t) && function (t) {
                        var n = t.navigator || {}, e = n.msMaxTouchPoints, r = n.maxTouchPoints;
                        return e || r || 0;
                    }(t) > 0 && !d(t);
                }
                function o(t, n) {
                    if (!Object(l.a)(t.matchMedia))
                        return !1;
                    var e = t.matchMedia(n);
                    return Object(v.a)(e) && Boolean(e.matches);
                }
                function i(t) {
                    return void 0 === t && (t = window), r(t) || function (t) {
                        return o(t, h);
                    }(t) || function (t) {
                        return o(t, b);
                    }(t) || function (t) {
                        var n = t.DocumentTouch;
                        return Boolean(n) && t.document instanceof n;
                    }(t) || Object(c.a)(t);
                }
                function a(t, n) {
                    if (void 0 === n && (n = !0), g && n)
                        return [];
                    for (var e = [], r = t;;)
                        try {
                            if (!(r = r.ownerDocument.defaultView.frameElement))
                                return e;
                            e.push(r);
                        } catch (o) {
                            return e;
                        }
                }
                var u, c = e(60), s = e(110), d = function (t) {
                        return void 0 === t && (t = window), function (t) {
                            void 0 === t && (t = window);
                            var n = s(t);
                            return 'boolean' === typeof n ? -1 : n;
                        }(t) > 11;
                    }, f = e(15), l = e(4), v = e(1), p = [
                        '',
                        '-webkit-',
                        '-ms-',
                        '-moz-',
                        '-o-'
                    ], h = Object(f.a)(p, function (t) {
                        return '(' + t + 'any-pointer:coarse)';
                    }).join(','), b = Object(f.a)(p, function (t) {
                        return '(' + t + 'touch-enabled)';
                    }).join(','), y = function (t) {
                        return void 0 === t && (t = window), t.navigator.userAgent.indexOf('UCBrowser') > -1;
                    }, m = function (t) {
                        void 0 === t && (t = window);
                        var n = function (t) {
                            void 0 === t && (t = window);
                            try {
                                return (t.navigator || {}).userAgent || '';
                            } catch (n) {
                                return '';
                            }
                        }(t).toLowerCase();
                        if (n.indexOf('android') > -1)
                            return !1;
                        var e = n.replace(/\(.+?\)/gi, '').split(' ').map(function (t) {
                            return t.trim().split('/')[0];
                        }).filter(function (t) {
                            return t && 'mobile' !== t;
                        });
                        return 4 === e.length && 'mozilla' === e[0] && 'applewebkit' === e[1] && 'version' === e[2] && 'safari' === e[3];
                    }, g = (void 0 === u && (u = window), m(u) || function (t) {
                        void 0 === t && (t = window);
                        var n = t.navigator.userAgent.toLowerCase();
                        return /ipad|iphone|ipod/.test(n) && !t.MSStream && !y(t);
                    }(u) || function (t) {
                        return void 0 === t && (t = window), /Apple/.test(t.navigator.vendor) && i(t);
                    }(u));
                e.d(n, 'a', function () {
                    return a;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return i;
                });
                var r = e(5), o = Object(r.b)(window, 'adsdktracelogs'), i = Boolean(o) || void 0;
            },
            function (t, n, e) {
                'use strict';
                function r(t, n) {
                    t.forEach(function (t) {
                        Object(o.a)(t, n);
                    });
                }
                e.d(n, 'a', function () {
                    return r;
                });
                var o = e(58);
            },
            function (t, n, e) {
                t.exports = e(114);
            },
            function (t, n) {
            },
            function (t, n, e) {
                'use strict';
                e.r(n), e.d(n, 'WeakMapPonyfill', function () {
                    return a;
                }), e.d(n, 'WeakMap', function () {
                    return u;
                });
                var r = e(12), o = e(17), i = 0, a = function (t) {
                        var n = '__' + [
                                i++,
                                Math.random()
                            ], e = function (t) {
                                return Object.hasOwnProperty.call(t, n);
                            }, o = {
                                has: e,
                                get: function (t) {
                                    return t[n];
                                },
                                delete: function (t) {
                                    return e(t) && delete t[n];
                                },
                                set: function (t, e) {
                                    return Object.defineProperty(t, n, {
                                        configurable: !0,
                                        value: e
                                    }), o;
                                }
                            };
                        return t && Object(r.a)(t, function (t) {
                            return o.set(t[0], t[1]);
                        }), o;
                    }, u = Object(o.a)(window.WeakMap) ? window.WeakMap : a;
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    e.d(n, 'a', function () {
                        return o;
                    });
                    var r = e(82), o = function () {
                            function n() {
                                this.on = [], this.once = [];
                            }
                            var e = n.prototype;
                            return e.add = function () {
                                for (var t, n = this, e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                                    r[o] = arguments[o];
                                return (t = this.on).push.apply(t, r), function () {
                                    return n.remove.apply(n, r);
                                };
                            }, e.addOne = function () {
                                for (var t, n = this, e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                                    r[o] = arguments[o];
                                return (t = this.once).push.apply(t, r), function () {
                                    return n.remove.apply(n, r);
                                };
                            }, e.promise = function () {
                                var n = this;
                                return new t(function (t) {
                                    return n.addOne(t);
                                });
                            }, e.dispatch = function (t) {
                                var n = this.once;
                                this.once = [], Object(r.a)(this.on, t), Object(r.a)(n, t);
                            }, e.removeAll = function () {
                                this.on.length = 0, this.once.length = 0;
                            }, e.remove = function () {
                                for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
                                    n[e] = arguments[e];
                                this.on = this.on.filter(function (t) {
                                    return n.indexOf(t) < 0;
                                }), this.once = this.once.filter(function (t) {
                                    return n.indexOf(t) < 0;
                                });
                            }, n;
                        }();
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function r(n) {
                        var e, r, s, d;
                        return Object(a.a)().stringify(n, (e = [], s = 'undefined' !== typeof t ? new t() : void 0, d = [], r = {
                            set: function (t, n) {
                                if (void 0 !== s)
                                    try {
                                        s.set(t, n);
                                    } catch (e) {
                                        d.push({
                                            path: n,
                                            value: t
                                        });
                                    }
                                else
                                    d.push({
                                        path: n,
                                        value: t
                                    });
                            },
                            get: function (t) {
                                var n = Object(o.a)(d, function (n) {
                                    return n.value === t;
                                });
                                return void 0 !== s && void 0 === n ? s.get(t) : n ? n.path : void 0;
                            }
                        }, function (t, n) {
                            if (Object(i.a)(n))
                                return Object(c.a)(n.name) ? n.name : '[Function]';
                            if (!Object(u.a)(n))
                                return n;
                            var o = r.get(n);
                            if (o)
                                return '[Circular ' + o + ']';
                            for (; e.length > 0 && e[e.length - 1].value[t] !== n;)
                                e.pop();
                            var a = (e.length > 0 ? e[e.length - 1].path : '') + (t ? '/' + t : '~');
                            return e.push({
                                path: a,
                                value: n
                            }), r.set(n, a), n;
                        }));
                    }
                    e.d(n, 'a', function () {
                        return r;
                    });
                    var o = e(41), i = e(4), a = e(103), u = e(1), c = e(9);
                }.call(this, e(85).WeakMap));
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    e.d(n, 'a', function () {
                        return o;
                    });
                    var r = e(43), o = function (n) {
                            var e = n.propertyName, o = n.win;
                            return new t(function (t) {
                                Object(r.a)({
                                    callback: function () {
                                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                                            e[r] = arguments[r];
                                        return t(e);
                                    },
                                    propertyName: e,
                                    win: o
                                });
                            });
                        };
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    e.d(n, 'a', function () {
                        return o;
                    });
                    var r = e(43), o = function (n) {
                            var e = n.propertyName, o = n.win, i = n.comparator;
                            return new t(function (t) {
                                Object(r.a)({
                                    propertyName: e,
                                    win: o,
                                    callback: function () {
                                        i.apply(void 0, arguments) && t();
                                    }
                                });
                            });
                        };
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function r(n) {
                        var e, r, f, l;
                        return Object(d.a)().stringify(n, (e = [], f = 'undefined' !== typeof t ? new t() : void 0, l = [], r = {
                            set: function (t, n) {
                                if (void 0 !== f)
                                    try {
                                        f.set(t, n);
                                    } catch (e) {
                                        l.push({
                                            path: n,
                                            value: t
                                        });
                                    }
                                else
                                    l.push({
                                        path: n,
                                        value: t
                                    });
                            },
                            get: function (t) {
                                var n = Object(o.a)(l, function (n) {
                                    return n.value === t;
                                });
                                return void 0 !== f && void 0 === n ? f.get(t) : n ? n.path : void 0;
                            }
                        }, function (t, n) {
                            if (Object(a.a)(n))
                                return Object(c.a)(n.name) ? n.name : '[Function]';
                            if (Object(i.a)(n))
                                return Object(s.b)(n);
                            if (!Object(u.a)(n))
                                return n;
                            var o = r.get(n);
                            if (o)
                                return '[Circular ' + o + ']';
                            for (; e.length > 0 && e[e.length - 1].value[t] !== n;)
                                e.pop();
                            var d = (e.length > 0 ? e[e.length - 1].path : '') + (t ? '/' + t : '~');
                            return e.push({
                                path: d,
                                value: n
                            }), r.set(n, d), n;
                        }));
                    }
                    e.d(n, 'a', function () {
                        return r;
                    });
                    var o = e(41), i = e(39), a = e(4), u = e(1), c = e(9), s = e(73), d = e(91);
                }.call(this, e(85).WeakMap));
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return void 0 === t && (t = window), void 0 === o && (o = t.JSON), o;
                }
                var o;
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    e.d(n, 'a', function () {
                        return r;
                    });
                    var r = function (n) {
                        var e = 0;
                        return {
                            promise: new t(function (t) {
                                e = window.setTimeout(t, n);
                            }),
                            clear: function () {
                                clearTimeout(e);
                            },
                            timeoutId: e
                        };
                    };
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function r(n) {
                        var e = n.src, r = n.win, s = n.onBeforeLoad, d = void 0 === s ? a.a : s, f = new o.a({}), l = a.a;
                        return {
                            promise: new t(function (t, n) {
                                var a = r.document.createElement('script'), s = !1;
                                l = function () {
                                    s = !0, Object(u.a)(a);
                                };
                                a.type = 'text/javascript', a.async = !0, a.onload = function () {
                                    s || t();
                                }, a.onerror = function (t) {
                                    s || (n(new o.a(f, {
                                        message: 'Failed to load script [' + e + ']',
                                        details: {
                                            src: e,
                                            isSelfWindow: r === window,
                                            event: t
                                        }
                                    })), l());
                                }, a.src = e, a.charset = c.a, d(a), Object(i.a)(r).appendChild(a);
                            }),
                            teardown: l
                        };
                    }
                    e.d(n, 'a', function () {
                        return r;
                    });
                    var o = e(22), i = e(94), a = e(3), u = e(64), c = e(95);
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    var n = t.document, e = n.getElementsByTagName('head')[0];
                    return e || (e = n.createElement('head'), n.documentElement.appendChild(e)), e;
                }
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = 'utf-8';
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = 'AdSDKLoader' === e(6).c;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = 'VpaidPlayerLoader' === e(6).c;
            },
            function (t, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return r;
                });
                var r = '1.0-' + e(7).a;
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function r() {
                        return (r = Object.assign || function (t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var e = arguments[n];
                                for (var r in e)
                                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            }
                            return t;
                        }).apply(this, arguments);
                    }
                    function o(n) {
                        return new t(function (t, e) {
                            Object(i.a)(r({}, n, {
                                onSuccess: t,
                                onError: e
                            }));
                        });
                    }
                    e.d(n, 'a', function () {
                        return o;
                    });
                    var i = e(69);
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function r(n, e, r, o, i, a, u) {
                        try {
                            var c = n[a](u), s = c.value;
                        } catch (d) {
                            return void r(d);
                        }
                        c.done ? e(s) : t.resolve(s).then(o, i);
                    }
                    e.d(n, 'a', function () {
                        return a;
                    });
                    var o = e(83), i = e.n(o), a = function () {
                            var n, e = (n = i.a.mark(function n(e, r) {
                                    var o;
                                    return i.a.wrap(function (n) {
                                        for (;;)
                                            switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, new t(function (t, n) {
                                                    r && r.then(t, n), o = window.setTimeout(t, e);
                                                });
                                            case 3:
                                                return n.prev = 3, window.clearTimeout(o), n.finish(3);
                                            case 6:
                                            case 'end':
                                                return n.stop();
                                            }
                                    }, n, null, [[
                                            0,
                                            ,
                                            3,
                                            6
                                        ]]);
                                }), function () {
                                    var e = this, o = arguments;
                                    return new t(function (t, i) {
                                        function a(n) {
                                            r(c, t, i, a, u, 'next', n);
                                        }
                                        function u(n) {
                                            r(c, t, i, a, u, 'throw', n);
                                        }
                                        var c = n.apply(e, o);
                                        a(void 0);
                                    });
                                });
                            return function (t, n) {
                                return e.apply(this, arguments);
                            };
                        }();
                }.call(this, e(23)));
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return 'number' === typeof t && isFinite(t) && t > 0;
                }
                function o(t) {
                    return 'number' === typeof (n = t) && isFinite(n) && Math.floor(t) === t;
                    var n;
                }
                function i() {
                    Object(u.a)(Object(c.a)(L), function (t) {
                        var n = t[0], e = t[1];
                        void 0 !== e && s.b.event({
                            name: N[n],
                            data: { value: e }
                        });
                    });
                }
                var a, u = e(12), c = e(25), s = e(0), d = e(5), f = Object(d.b)(window, 'adsdkabflags'), l = e(68), v = e(56), p = Object(d.b)(window, 'adsdkmotionoldanimation'), h = Object(d.b)(window, 'adsdknovastconvertation'), b = e(51), y = e(14), m = Object(y.a)({
                        Unsafe: 0,
                        Safe: 0,
                        ForceSafe: 0,
                        OnlyYandexCreatives: 0
                    }), g = Object(d.b)(window, 'adsdksecuremode'), O = g && Object(b.a)(m, g) ? g : void 0, w = Object(d.b)(window, 'adsdkthemeemptyactionbutton'), _ = e(81), j = Object(d.b)(window, 'adsdkver'), E = parseInt(null !== j && void 0 !== j ? j : '', 10), A = r(a = E) && o(a) && r(E) ? E : void 0, S = Object(d.b)(window, 'adsdkwithcredentials'), T = S ? ('' + S).toLowerCase() : void 0, R = 'true' === T || 'false' !== T && void 0, L = {
                        adsdkdebug: l.a,
                        adsdkecmaver: v.a,
                        adsdkmotionoldanimation: p,
                        adsdknovastconvertation: h,
                        adsdksecuremode: O,
                        adsdkthemeemptyactionbutton: w,
                        adsdktracelogs: _.a,
                        adsdkwithcredentials: R,
                        adsdkver: A,
                        adsdkabflags: f
                    }, N = {
                        adsdkdebug: 'UsingAdsdkDebugHardcodedParam',
                        adsdkecmaver: 'UsingAdsdkEcmaVerHardcodedParam',
                        adsdkmotionoldanimation: 'UsingAdsdkMotionOldAnimationHardcodedParam',
                        adsdknovastconvertation: 'UsingAdsdkNoVASTConvertationHardcodedParam',
                        adsdksecuremode: 'UsingAdsdkSecureModeHardcodedParam',
                        adsdkthemeemptyactionbutton: 'UsingAdsdkThemeEmptyActionButtonHardcodedParam',
                        adsdktracelogs: 'UsingAdsdkTraceLogsHardcodedParam',
                        adsdkwithcredentials: 'UsingAdsdkWithCredentialsHardcodedParam',
                        adsdkver: 'UsingAdsdkVerHardcodedParam',
                        adsdkabflags: 'UsingAdsdkabflagsParam'
                    };
                e.d(n, 'a', function () {
                    return i;
                });
            },
            function (t, n, e) {
                'use strict';
                function r() {
                    return (r = Object.assign || function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function o() {
                    i.a && (g(), E());
                }
                var i = e(50), a = e(29), u = e(4), c = e(21), s = e(9), d = e(11), f = {
                        AdSDKLoader: e(79).a,
                        VpaidPlayerLoader: 'interactive_viewer',
                        OldPythiaSurvey: 'vpaid-pythia-survey-embed'
                    }, l = e(76), v = e(36), p = e(78), h = e(8), b = e(0), y = e(6), m = e(34), g = function () {
                        if (i.a) {
                            var t = document.currentScript;
                            if (t) {
                                var n = t, e = n.src, o = n.crossOrigin;
                                if (Object(s.a)(e)) {
                                    var g = y.c, O = f[g], w = '' + ('AdSDKLoader' === g ? v.a : v.b) + O + '.js', _ = Object(d.e)(r({}, Object(d.d)(e), {
                                            search: '',
                                            hash: ''
                                        }));
                                    (Object(c.a)(o) ? 'anonymous' === o.toLowerCase() : '' === o) && (b.b.event({
                                        name: 'CrossOriginAnonymousLoaderScript',
                                        probability: h.a,
                                        data: {
                                            src: e,
                                            crossOrigin: String(o)
                                        }
                                    }), Object(m.a)('VAS script "crossorigin" attribute set to the value "anonymous". This value is NOT supported. Remove this attribute.')), _ !== w && (Object(u.a)(Object(a.a)(window)) ? b.b.event({
                                        name: 'AbdLoaderScripsSrc',
                                        probability: h.a,
                                        data: { src: e }
                                    }) : 0 === _.indexOf(l.a) ? b.b.event({
                                        name: 'HardcodedLoaderScriptSrc',
                                        probability: h.a,
                                        data: { src: e }
                                    }) : 'AdSDKLoader' === g ? (Object(m.a)('You are using unsupported Video Ads SDK script src [' + _ + '] please, use new link [' + p.a + ']'), b.b.event({
                                        name: 'UnsupportedAdsdkLoaderScriptSrc',
                                        probability: h.a,
                                        data: {
                                            src: e,
                                            crossOrigin: String(o)
                                        }
                                    })) : b.b.event({
                                        name: 'UnexpectedLoaderScripsSrc',
                                        probability: h.a,
                                        data: {
                                            src: e,
                                            expectedSrc: w,
                                            crossOrigin: String(o)
                                        }
                                    }));
                                }
                            }
                        }
                    }, O = e(99), w = e(100), _ = e(7), j = e(10), E = function () {
                        Date.now() - y.a < 2592000000 || Object(w.a)(2000).then(function () {
                            return Object(O.a)({
                                url: v.b + 'build_info.json',
                                method: 'GET'
                            });
                        }).then(function (t) {
                            var n = t.responseText, e = JSON.parse(n).version;
                            e !== _.a && b.b.warning({
                                name: 'UsingDeprecatedLoaderVersion',
                                message: 'AdSDK version you are using (' + _.a + ') is out of date. Actual version is ' + e + '.'
                            });
                        }).catch(function (t) {
                            b.b.error({ error: new j.a(t, { code: 'REQUEST_BUILD_INFO_ERROR' }) });
                        });
                    };
                e.d(n, 'a', function () {
                    return o;
                });
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return void 0 === t && (t = window), void 0 === o && (o = function (t) {
                        void 0 === t && (t = window);
                        return t.JSON && Object(a.a)(t.JSON.stringify) && Object(a.a)(t.JSON.parse);
                    }(t) ? t.JSON : {
                        stringify: c('stringify'),
                        parse: c('parse')
                    }), o;
                }
                var o, i = e(64), a = e(17);
                e.d(n, 'a', function () {
                    return r;
                });
                var u = function (t) {
                        void 0 === t && (t = document.body);
                        var n = function (t) {
                            var n = function (t, n) {
                                var e = void 0 === n ? {} : n, r = e.content, o = e.size, i = t.ownerDocument.createElement('iframe');
                                i.scrolling = 'no', i.setAttribute('allowfullscreen', ''), i.style.display = 'block', o && (i.height = o.height, i.width = o.width), t.appendChild(i);
                                var a = i.contentDocument;
                                return a.open(), r && a.write(r), a.close(), a.body.style.margin = '0', i.style.borderWidth = '0', i;
                            }(t);
                            return n.width = '0', n.height = '0', n.style.position = 'absolute', n;
                        }(t);
                        return {
                            JSON: n.contentWindow.JSON,
                            clean: function () {
                                return function (t) {
                                    t.src = '', Object(i.a)(t);
                                }(n);
                            }
                        };
                    }, c = function (t) {
                        return function (n) {
                            var e = u(), r = e.JSON, o = e.clean;
                            try {
                                return r[t](n);
                            } finally {
                                o();
                            }
                        };
                    };
            },
            function (t, n, e) {
                'use strict';
                function r(t) {
                    return o(t, function (t) {
                        return void 0 !== t;
                    })[0];
                }
                var o = function (t, n, e) {
                    for (var r = [], o = 0; o < t.length; o++) {
                        var i = t[o];
                        n.call(e, i, o, t) && r.push(i);
                    }
                    return r;
                };
                e.d(n, 'a', function () {
                    return r;
                });
            },
            function (t, n, e) {
                'use strict';
                e.r(n);
                e(106);
            },
            function (t, n, e) {
                'use strict';
                (function (t) {
                    function n() {
                        return (n = Object.assign || function (t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var e = arguments[n];
                                for (var r in e)
                                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            }
                            return t;
                        }).apply(this, arguments);
                    }
                    var r, o, i = e(57), a = e(15), u = e(39), c = e(3), s = e(52), d = e(14), f = e(1), l = e(21), v = (e(109), e(49)), p = e(13), h = e(46), b = e(96), y = e(50), m = e(97), g = e(78), O = e(8), w = e(98), _ = e(24), j = e(7), E = e(10), A = e(75), S = e(0), T = e(30), R = e(101), L = e(6), N = e(20), D = e(102), P = e(16), I = {
                            PREROLL: 'preroll',
                            MIDROLL: 'midroll',
                            PAUSEROLL: 'pauseroll',
                            OVERLAY: 'overlay',
                            POSTROLL: 'postroll'
                        }, k = {
                            VAST_URL: 'vastUrl',
                            VAST: 'vast',
                            AD_FOX_URL: 'adFoxUrl',
                            AD_FOX_URL_VAST: 'adFoxUrlVast',
                            PARTNER_ID: 'partnerId',
                            CATEGORY: 'category',
                            TAGS_LIST: 'tagsList',
                            CHARSET: 'charset',
                            VIDEO_CONTENT_ID: 'videoContentId',
                            VIDEO_CONTENT_NAME: 'videoContentName',
                            VIDEO_PUBLISHER_ID: 'videoPublisherId',
                            VIDEO_PUBLISHER_NAME: 'videoPublisherName',
                            VIDEO_GENRE_ID: 'videoGenreId',
                            VIDEO_GENRE_NAME: 'videoGenreName',
                            EXT_PARAM: 'extParam',
                            PLAYER_INFO: 'playerInfo',
                            DURATION: 'duration'
                        }, M = window, C = {
                            videoAd: {
                                debugParameters: {},
                                get AdConfigParams() {
                                    return M.ya && !M.ya.isDeploying && S.b.warning({
                                        name: 'UsingDeprecatedGlobalVideoAdAdConfigParamsProperty',
                                        message: 'You are using deprecated ya.videoAd.AdConfigParams property',
                                        probability: O.a
                                    }), k;
                                },
                                encodeUrl: i.a,
                                loadedModules: {},
                                loadModule: function (n) {
                                    return new t(function (t, e) {
                                        Object(P.b)({
                                            moduleName: n,
                                            version: void 0,
                                            onSuccess: t,
                                            onError: e,
                                            win: window,
                                            timeout: P.a
                                        });
                                    });
                                },
                                skipTokens: [],
                                modules: {},
                                play: function (n) {
                                    return new t(function (t, e) {
                                        Object(P.b)({
                                            moduleName: 'AdLoader',
                                            version: void 0,
                                            onSuccess: function (r) {
                                                (0, r.play)(n).then(t).catch(e);
                                            },
                                            onError: e,
                                            win: window,
                                            timeout: P.a
                                        });
                                    });
                                },
                                getBundleVersion: function () {
                                    return String(j.a);
                                },
                                getModuleVersion: function () {
                                    return String(j.b);
                                }
                            },
                            mediaAd: {
                                get DOMAIN() {
                                    return M.ya && !M.ya.isDeploying && S.b.warning({
                                        name: 'UsingDeprecatedGlobalMediaAdDomainProperty',
                                        message: 'You are using deprecated ya.mediaAd.DOMAIN property',
                                        probability: O.a
                                    }), _.b;
                                },
                                get SDK_VERSION() {
                                    return M.ya && !M.ya.isDeploying && S.b.warning({
                                        name: 'UsingDeprecatedGlobalMediaAdSdkVersionProperty',
                                        message: 'You are using deprecated ya.mediaAd.SDK_VERSION property, use videoAd.getBundleVersion() instead',
                                        probability: O.a
                                    }), w.a;
                                },
                                get AdType() {
                                    return M.ya && !M.ya.isDeploying && S.b.warning({
                                        name: 'UsingDeprecatedGlobalMediaAdAdTypeProperty',
                                        message: 'You are using deprecated ya.mediaAd.AdType property',
                                        probability: O.a
                                    }), I;
                                },
                                get TrackingEventType() {
                                    return M.ya && !M.ya.isDeploying && S.b.warning({
                                        name: 'UsingDeprecatedGlobalMediaAdTrackingEventTypeProperty',
                                        message: 'You are using deprecated ya.mediaAd.TrackingEventType property',
                                        probability: O.a
                                    }), {
                                        ERROR: 'error',
                                        IMPRESSION: 'impression',
                                        CREATIVE_VIEW: 'creativeView',
                                        START: 'start',
                                        FIRST_QUARTILE: 'firstQuartile',
                                        MIDPOINT: 'midpoint',
                                        THIRD_QUARTILE: 'thirdQuartile',
                                        COMPLETE: 'complete',
                                        MUTE: 'mute',
                                        UNMUTE: 'unmute',
                                        PAUSE: 'pause',
                                        RESUME: 'resume',
                                        FULLSCREEN: 'fullscreen',
                                        EXIT_FULLSCREEN: 'exitFullscreen',
                                        CLOSE: 'close',
                                        SKIP: 'skip',
                                        CLICK_THROUGH: 'clickThrough',
                                        PROGRESS: 'progress',
                                        REWIND: 'rewind',
                                        EXPAND: 'expand',
                                        COLLAPSE: 'collapse',
                                        ACCEPT_INVITATION: 'acceptInvitation'
                                    };
                                },
                                get AdConfigParams() {
                                    return M.ya && !M.ya.isDeploying && S.b.warning({
                                        name: 'UsingDeprecatedGlobalMediaAdAdConfigParamsTypeProperty',
                                        message: 'You are using deprecated ya.mediaAd.AdConfigParams property',
                                        probability: O.a
                                    }), k;
                                },
                                bannerAd: {
                                    initVideo: function (t, n, e) {
                                        S.b.event({
                                            name: 'UsingDeprecatedGlobalMethodInitVideo',
                                            probability: O.a,
                                            data: void 0
                                        }), Object(P.b)({
                                            moduleName: 'BannerAd',
                                            version: void 0,
                                            onSuccess: function (r) {
                                                r.initVideo(t, n, e);
                                            },
                                            onError: e,
                                            win: window,
                                            timeout: P.a
                                        });
                                    }
                                },
                                inPage: {
                                    addInPageVideo: function (t, n, e) {
                                        S.b.event({
                                            name: 'UsingDeprecatedGlobalMethodAddInPageVideo',
                                            probability: O.a,
                                            data: void 0
                                        }), Object(P.b)({
                                            moduleName: 'InPage',
                                            version: void 0,
                                            onSuccess: function (r) {
                                                r.addInPageVideo(t, n, e);
                                            },
                                            onError: e,
                                            win: window,
                                            timeout: P.a
                                        });
                                    }
                                }
                            },
                            video: {
                                addVideoPlayer: function (t, n, e, r) {
                                    S.b.warning({
                                        name: 'UsingDeprecatedGlobalMethodAddVideoPlayer',
                                        message: 'You are using deprecated HTML5VideoPlayer. Use Yandex StreamPlayer https://yandex.ru/support/video-hosting/index.html.'
                                    }), Object(P.b)({
                                        moduleName: 'VideoPlayer',
                                        version: void 0,
                                        onSuccess: function (o) {
                                            o.addVideoPlayer(t, n, e, r);
                                        },
                                        onError: c.a,
                                        win: window,
                                        timeout: P.a
                                    });
                                }
                            }
                        };
                    r = C, o = 'ya', M.ya || (M.ya = {}), M.ya.isDeploying = !0, function t(n, e) {
                        for (var r = e.split('.'), o = window, i = 0; i < r.length - 1; i++)
                            o = o[r[i]];
                        var a = r[r.length - 1];
                        if (void 0 === o[a])
                            o[a] = n;
                        else if ('object' === typeof o[a])
                            for (var u in n)
                                n.hasOwnProperty(u) && t(n[u], e + '.' + u);
                    }(r, o), delete M.ya.isDeploying;
                    ya;
                    (Object(f.a)(T.b) ? S.b.event({
                        name: 'UsingGlobalStatsRootField',
                        probability: O.b,
                        data: { statsRootParams: T.b }
                    }) : Object(u.a)(T.a) && S.b.error({
                        error: new E.a({
                            code: 'GLOBAL_STATS_ROOT_FIELDS_EXTRACTION_ERROR',
                            details: { error: T.a }
                        })
                    }), b.a || m.a) && (Object(R.a)(), p.b && (p.b instanceof ReferenceError ? S.b.event({
                        name: 'VasUAASConfigIsEmpty',
                        data: {}
                    }) : S.b.error({
                        error: new E.a(p.b, {
                            code: 'VAS_UAAS_CONFIG_EXTRACTION_ERROR',
                            details: { error: p.b }
                        })
                    })));
                    if (y.a) {
                        var x = Object(s.a)(Object(a.a)(Object(d.a)(v.a), function (t) {
                                return [
                                    'flag_' + t,
                                    1
                                ];
                            })), U = { crossorigin: void 0 }, V = document.currentScript;
                        if (V) {
                            var F = V.crossOrigin;
                            Object(l.a)(F) && (U.crossorigin = F.toLowerCase());
                        }
                        S.b.values({
                            name: 'CreateLoader',
                            data: n({ statsRootParams: T.b }, U),
                            labels: { bundleName: L.c },
                            values: n({ liveTime: Date.now() - L.a }, x)
                        }), A.a && h.a.logTimingAndLoadRum('adsdk.js', (null === N.a || void 0 === N.a ? void 0 : N.a.src) || g.a);
                    }
                    Object(D.a)();
                }.call(this, e(23)));
            },
            function (t, n) {
                function e() {
                    throw new Error('setTimeout has not been defined');
                }
                function r() {
                    throw new Error('clearTimeout has not been defined');
                }
                function o(t) {
                    if (s === setTimeout)
                        return setTimeout(t, 0);
                    if ((s === e || !s) && setTimeout)
                        return s = setTimeout, setTimeout(t, 0);
                    try {
                        return s(t, 0);
                    } catch (n) {
                        try {
                            return s.call(null, t, 0);
                        } catch (n) {
                            return s.call(this, t, 0);
                        }
                    }
                }
                function i() {
                    p && l && (p = !1, l.length ? v = l.concat(v) : h = -1, v.length && a());
                }
                function a() {
                    if (!p) {
                        var t = o(i);
                        p = !0;
                        for (var n = v.length; n;) {
                            for (l = v, v = []; ++h < n;)
                                l && l[h].run();
                            h = -1, n = v.length;
                        }
                        l = null, p = !1, function (t) {
                            if (d === clearTimeout)
                                return clearTimeout(t);
                            if ((d === r || !d) && clearTimeout)
                                return d = clearTimeout, clearTimeout(t);
                            try {
                                d(t);
                            } catch (n) {
                                try {
                                    return d.call(null, t);
                                } catch (n) {
                                    return d.call(this, t);
                                }
                            }
                        }(t);
                    }
                }
                function u(t, n) {
                    this.fun = t, this.array = n;
                }
                function c() {
                }
                var s, d, f = t.exports = {};
                !function () {
                    try {
                        s = 'function' === typeof setTimeout ? setTimeout : e;
                    } catch (t) {
                        s = e;
                    }
                    try {
                        d = 'function' === typeof clearTimeout ? clearTimeout : r;
                    } catch (t) {
                        d = r;
                    }
                }();
                var l, v = [], p = !1, h = -1;
                f.nextTick = function (t) {
                    var n = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var e = 1; e < arguments.length; e++)
                            n[e - 1] = arguments[e];
                    v.push(new u(t, n)), 1 !== v.length || p || o(a);
                }, u.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }, f.title = 'browser', f.browser = !0, f.env = {}, f.argv = [], f.version = '', f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function (t) {
                    return [];
                }, f.binding = function (t) {
                    throw new Error('process.binding is not supported');
                }, f.cwd = function () {
                    return '/';
                }, f.chdir = function (t) {
                    throw new Error('process.chdir is not supported');
                }, f.umask = function () {
                    return 0;
                };
            },
            function (t, n) {
                var e;
                e = function () {
                    return this;
                }();
                try {
                    e = e || new Function('return this')();
                } catch (r) {
                    'object' === typeof window && (e = window);
                }
                t.exports = e;
            },
            function (t, n) {
                Array.prototype.find || (Array.prototype.find = function (t) {
                    if (null == this)
                        throw new TypeError('Array.prototype.find called on null or undefined');
                    if ('function' !== typeof t)
                        throw new TypeError('predicate must be a function');
                    for (var n, e = Object(this), r = e.length >>> 0, o = arguments[1], i = 0; i < r; i++)
                        if (n = e[i], t.call(o, n, i, e))
                            return n;
                });
            },
            function (t, n) {
                t.exports = function (t) {
                    t || (t = window);
                    var n = t.navigator.userAgent, e = n.indexOf('MSIE ');
                    if (e > 0)
                        return parseInt(n.substring(e + 5, n.indexOf('.', e)), 10);
                    if (n.indexOf('Trident/') > 0) {
                        var r = n.indexOf('rv:');
                        return parseInt(n.substring(r + 3, n.indexOf('.', r)), 10);
                    }
                    var o = n.indexOf('Edge/');
                    return o > 0 && parseInt(n.substring(o + 5, n.indexOf('.', o)), 10);
                };
            },
            function (t, n, e) {
                'use strict';
                e.r(n), e.d(n, 'MapPonyfill', function () {
                    return i;
                }), e.d(n, 'Map', function () {
                    return a;
                });
                var r = e(12), o = e(15), i = function (t) {
                        var n = 0, e = t ? Object(o.a)(t, function (t) {
                                return t[0];
                            }) : [], i = t ? Object(o.a)(t, function (t) {
                                return t[1];
                            }) : [], a = function (t) {
                                return -1 < (n = e.indexOf(t));
                            }, u = {
                                get size() {
                                    return e.length;
                                },
                                has: a,
                                clear: function () {
                                    e = [], i = [];
                                },
                                get: function (t) {
                                    return i[e.indexOf(t)];
                                },
                                keys: function (t) {
                                    function n() {
                                        return t.apply(this, arguments);
                                    }
                                    return n.toString = function () {
                                        return t.toString();
                                    }, n;
                                }(function () {
                                    return e.slice();
                                }),
                                values: function (t) {
                                    function n() {
                                        return t.apply(this, arguments);
                                    }
                                    return n.toString = function () {
                                        return t.toString();
                                    }, n;
                                }(function () {
                                    return i.slice();
                                }),
                                entries: function () {
                                    return Object(o.a)(e, function (t, n) {
                                        return [
                                            t,
                                            i[n]
                                        ];
                                    });
                                },
                                delete: function (t) {
                                    return a(t) && e.splice(n, 1) && Boolean(i.splice(n, 1));
                                },
                                forEach: function (t, n) {
                                    Object(r.a)(i, function (r, o) {
                                        return t.call(n, r, e[o], u);
                                    });
                                },
                                set: function (t, r) {
                                    return a(t) ? i[n] = r : i[e.push(t) - 1] = r, u;
                                }
                            };
                        return u;
                    }, a = Boolean(window.Map) && 'function' === typeof window.Map.prototype.keys ? window.Map : i;
            },
            function (t, n) {
                t.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function (t, n) {
                    return t.__proto__ = n, t;
                } : function (t, n) {
                    for (var e in n)
                        t.hasOwnProperty(e) || (t[e] = n[e]);
                    return t;
                });
            },
            function (t, n, e) {
                'use strict';
                e.r(n), function (t) {
                    e.d(n, 'loadRumModule', function () {
                        return o;
                    });
                    var r = e(16), o = function () {
                            return new t(function (t, n) {
                                Object(r.b)({
                                    moduleName: 'Rum',
                                    version: void 0,
                                    onSuccess: function (n) {
                                        t(n);
                                    },
                                    onError: n,
                                    win: window,
                                    timeout: r.a
                                });
                            });
                        };
                }.call(this, e(23));
            },
            function (t, n, e) {
                (function (n) {
                    var e = function (t) {
                        'use strict';
                        function e(t, n, e, i) {
                            var a = n && n.prototype instanceof o ? n : o, u = Object.create(a.prototype), c = new l(i || []);
                            return u._invoke = function (t, n, e) {
                                var o = _;
                                return function (i, a) {
                                    if (o === E)
                                        throw new Error('Generator is already running');
                                    if (o === A) {
                                        if ('throw' === i)
                                            throw a;
                                        return p();
                                    }
                                    for (e.method = i, e.arg = a;;) {
                                        var u = e.delegate;
                                        if (u) {
                                            var c = s(u, e);
                                            if (c) {
                                                if (c === S)
                                                    continue;
                                                return c;
                                            }
                                        }
                                        if ('next' === e.method)
                                            e.sent = e._sent = e.arg;
                                        else if ('throw' === e.method) {
                                            if (o === _)
                                                throw o = A, e.arg;
                                            e.dispatchException(e.arg);
                                        } else
                                            'return' === e.method && e.abrupt('return', e.arg);
                                        o = E;
                                        var d = r(t, n, e);
                                        if ('normal' === d.type) {
                                            if (o = e.done ? A : j, d.arg === S)
                                                continue;
                                            return {
                                                value: d.arg,
                                                done: e.done
                                            };
                                        }
                                        'throw' === d.type && (o = A, e.method = 'throw', e.arg = d.arg);
                                    }
                                };
                            }(t, e, c), u;
                        }
                        function r(t, n, e) {
                            try {
                                return {
                                    type: 'normal',
                                    arg: t.call(n, e)
                                };
                            } catch (r) {
                                return {
                                    type: 'throw',
                                    arg: r
                                };
                            }
                        }
                        function o() {
                        }
                        function i() {
                        }
                        function a() {
                        }
                        function u(t) {
                            [
                                'next',
                                'throw',
                                'return'
                            ].forEach(function (n) {
                                t[n] = function (t) {
                                    return this._invoke(n, t);
                                };
                            });
                        }
                        function c(t, n) {
                            var e;
                            this._invoke = function (o, i) {
                                function a() {
                                    return new n(function (e, a) {
                                        !function e(o, i, a, u) {
                                            var c = r(t[o], t, i);
                                            if ('throw' !== c.type) {
                                                var s = c.arg, d = s.value;
                                                return d && 'object' === typeof d && y.call(d, '__await') ? n.resolve(d.__await).then(function (t) {
                                                    e('next', t, a, u);
                                                }, function (t) {
                                                    e('throw', t, a, u);
                                                }) : n.resolve(d).then(function (t) {
                                                    s.value = t, a(s);
                                                }, function (t) {
                                                    return e('throw', t, a, u);
                                                });
                                            }
                                            u(c.arg);
                                        }(o, i, e, a);
                                    });
                                }
                                return e = e ? e.then(a, a) : a();
                            };
                        }
                        function s(t, n) {
                            var e = t.iterator[n.method];
                            if (e === h) {
                                if (n.delegate = null, 'throw' === n.method) {
                                    if (t.iterator.return && (n.method = 'return', n.arg = h, s(t, n), 'throw' === n.method))
                                        return S;
                                    n.method = 'throw', n.arg = new TypeError('The iterator does not provide a \'throw\' method');
                                }
                                return S;
                            }
                            var o = r(e, t.iterator, n.arg);
                            if ('throw' === o.type)
                                return n.method = 'throw', n.arg = o.arg, n.delegate = null, S;
                            var i = o.arg;
                            return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, 'return' !== n.method && (n.method = 'next', n.arg = h), n.delegate = null, S) : i : (n.method = 'throw', n.arg = new TypeError('iterator result is not an object'), n.delegate = null, S);
                        }
                        function d(t) {
                            var n = { tryLoc: t[0] };
                            1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);
                        }
                        function f(t) {
                            var n = t.completion || {};
                            n.type = 'normal', delete n.arg, t.completion = n;
                        }
                        function l(t) {
                            this.tryEntries = [{ tryLoc: 'root' }], t.forEach(d, this), this.reset(!0);
                        }
                        function v(t) {
                            if (t) {
                                var n = t[g];
                                if (n)
                                    return n.call(t);
                                if ('function' === typeof t.next)
                                    return t;
                                if (!isNaN(t.length)) {
                                    var e = -1, r = function n() {
                                            for (; ++e < t.length;)
                                                if (y.call(t, e))
                                                    return n.value = t[e], n.done = !1, n;
                                            return n.value = h, n.done = !0, n;
                                        };
                                    return r.next = r;
                                }
                            }
                            return { next: p };
                        }
                        function p() {
                            return {
                                value: h,
                                done: !0
                            };
                        }
                        var h, b = Object.prototype, y = b.hasOwnProperty, m = 'function' === typeof Symbol ? Symbol : {}, g = m.iterator || '@@iterator', O = m.asyncIterator || '@@asyncIterator', w = m.toStringTag || '@@toStringTag';
                        t.wrap = e;
                        var _ = 'suspendedStart', j = 'suspendedYield', E = 'executing', A = 'completed', S = {}, T = {};
                        T[g] = function () {
                            return this;
                        };
                        var R = Object.getPrototypeOf, L = R && R(R(v([])));
                        L && L !== b && y.call(L, g) && (T = L);
                        var N = a.prototype = o.prototype = Object.create(T);
                        return i.prototype = N.constructor = a, a.constructor = i, a[w] = i.displayName = 'GeneratorFunction', t.isGeneratorFunction = function (t) {
                            var n = 'function' === typeof t && t.constructor;
                            return !!n && (n === i || 'GeneratorFunction' === (n.displayName || n.name));
                        }, t.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, w in t || (t[w] = 'GeneratorFunction')), t.prototype = Object.create(N), t;
                        }, t.awrap = function (t) {
                            return { __await: t };
                        }, u(c.prototype), c.prototype[O] = function () {
                            return this;
                        }, t.AsyncIterator = c, t.async = function (r, o, i, a, u) {
                            void 0 === u && (u = n);
                            var s = new c(e(r, o, i, a), u);
                            return t.isGeneratorFunction(o) ? s : s.next().then(function (t) {
                                return t.done ? t.value : s.next();
                            });
                        }, u(N), N[w] = 'Generator', N[g] = function () {
                            return this;
                        }, N.toString = function () {
                            return '[object Generator]';
                        }, t.keys = function (t) {
                            var n = [];
                            for (var e in t)
                                n.push(e);
                            return n.reverse(), function e() {
                                for (; n.length;) {
                                    var r = n.pop();
                                    if (r in t)
                                        return e.value = r, e.done = !1, e;
                                }
                                return e.done = !0, e;
                            };
                        }, t.values = v, l.prototype = {
                            constructor: l,
                            reset: function (t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = h, this.done = !1, this.delegate = null, this.method = 'next', this.arg = h, this.tryEntries.forEach(f), !t)
                                    for (var n in this)
                                        't' === n.charAt(0) && y.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = h);
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ('throw' === t.type)
                                    throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function (t) {
                                function n(n, r) {
                                    return i.type = 'throw', i.arg = t, e.next = n, r && (e.method = 'next', e.arg = h), !!r;
                                }
                                if (this.done)
                                    throw t;
                                for (var e = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var o = this.tryEntries[r], i = o.completion;
                                    if ('root' === o.tryLoc)
                                        return n('end');
                                    if (o.tryLoc <= this.prev) {
                                        var a = y.call(o, 'catchLoc'), u = y.call(o, 'finallyLoc');
                                        if (a && u) {
                                            if (this.prev < o.catchLoc)
                                                return n(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc)
                                                return n(o.finallyLoc);
                                        } else if (a) {
                                            if (this.prev < o.catchLoc)
                                                return n(o.catchLoc, !0);
                                        } else {
                                            if (!u)
                                                throw new Error('try statement without catch or finally');
                                            if (this.prev < o.finallyLoc)
                                                return n(o.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, n) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var r = this.tryEntries[e];
                                    if (r.tryLoc <= this.prev && y.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                                        var o = r;
                                        break;
                                    }
                                }
                                o && ('break' === t || 'continue' === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
                                var i = o ? o.completion : {};
                                return i.type = t, i.arg = n, o ? (this.method = 'next', this.next = o.finallyLoc, S) : this.complete(i);
                            },
                            complete: function (t, n) {
                                if ('throw' === t.type)
                                    throw t.arg;
                                return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && n && (this.next = n), S;
                            },
                            finish: function (t) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var e = this.tryEntries[n];
                                    if (e.finallyLoc === t)
                                        return this.complete(e.completion, e.afterLoc), f(e), S;
                                }
                            },
                            catch: function (t) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var e = this.tryEntries[n];
                                    if (e.tryLoc === t) {
                                        var r = e.completion;
                                        if ('throw' === r.type) {
                                            var o = r.arg;
                                            f(e);
                                        }
                                        return o;
                                    }
                                }
                                throw new Error('illegal catch attempt');
                            },
                            delegateYield: function (t, n, e) {
                                return this.delegate = {
                                    iterator: v(t),
                                    resultName: n,
                                    nextLoc: e
                                }, 'next' === this.method && (this.arg = h), S;
                            }
                        }, t;
                    }(t.exports);
                    try {
                        regeneratorRuntime = e;
                    } catch (r) {
                        Function('r', 'regeneratorRuntime = r')(e);
                    }
                }.call(this, e(23)));
            }
        ]);
    }())
}