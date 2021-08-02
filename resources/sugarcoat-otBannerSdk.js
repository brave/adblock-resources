{
    const $___mock_4783a6a9c325c3f9 = {};
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
    })($___mock_4783a6a9c325c3f9);
    (function () {
        !function () {
            'use strict';
            var o = function (e, t) {
                return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
                    e.__proto__ = t;
                } || function (e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            };
            var i, e, r = function () {
                    return (r = Object.assign || function (e) {
                        for (var t, o = 1, n = arguments.length; o < n; o++)
                            for (var r in t = arguments[o])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
                };
            function a(s, i, l, a) {
                return new (l = l || Promise)(function (e, t) {
                    function o(e) {
                        try {
                            r(a.next(e));
                        } catch (e) {
                            t(e);
                        }
                    }
                    function n(e) {
                        try {
                            r(a.throw(e));
                        } catch (e) {
                            t(e);
                        }
                    }
                    function r(t) {
                        t.done ? e(t.value) : new l(function (e) {
                            e(t.value);
                        }).then(o, n);
                    }
                    r((a = a.apply(s, i || [])).next());
                });
            }
            function d(o, n) {
                var r, s, i, e, l = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0])
                                throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, 'function' == typeof Symbol && (e[Symbol.iterator] = function () {
                    return this;
                }), e;
                function t(t) {
                    return function (e) {
                        return function (t) {
                            if (r)
                                throw new TypeError('Generator is already executing.');
                            for (; l;)
                                try {
                                    if (r = 1, s && (i = 2 & t[0] ? s.return : t[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, t[1])).done)
                                        return i;
                                    switch (s = 0, i && (t = [
                                            2 & t[0],
                                            i.value
                                        ]), t[0]) {
                                    case 0:
                                    case 1:
                                        i = t;
                                        break;
                                    case 4:
                                        return l.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        l.label++, s = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = l.ops.pop(), l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            l = 0;
                                            continue;
                                        }
                                        if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                            l.label = t[1];
                                            break;
                                        }
                                        if (6 === t[0] && l.label < i[1]) {
                                            l.label = i[1], i = t;
                                            break;
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2], l.ops.push(t);
                                            break;
                                        }
                                        i[2] && l.ops.pop(), l.trys.pop();
                                        continue;
                                    }
                                    t = n.call(o, l);
                                } catch (e) {
                                    t = [
                                        6,
                                        e
                                    ], s = 0;
                                } finally {
                                    r = i = 0;
                                }
                            if (5 & t[0])
                                throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            };
                        }([
                            t,
                            e
                        ]);
                    };
                }
            }
            function h() {
                for (var e = 0, t = 0, o = arguments.length; t < o; t++)
                    e += arguments[t].length;
                var n = Array(e), r = 0;
                for (t = 0; t < o; t++)
                    for (var s = arguments[t], i = 0, l = s.length; i < l; i++, r++)
                        n[r] = s[i];
                return n;
            }
            (e = i = i || {})[e.ACTIVE = 0] = 'ACTIVE', e[e.ALWAYS_ACTIVE = 1] = 'ALWAYS_ACTIVE', e[e.EXPIRED = 2] = 'EXPIRED', e[e.NO_CONSENT = 3] = 'NO_CONSENT', e[e.OPT_OUT = 4] = 'OPT_OUT', e[e.PENDING = 5] = 'PENDING', e[e.WITHDRAWN = 6] = 'WITHDRAWN';
            var t = setTimeout;
            function c(e) {
                return Boolean(e && void 0 !== e.length);
            }
            function n() {
            }
            function s(e) {
                if (!(this instanceof s))
                    throw new TypeError('Promises must be constructed via new');
                if ('function' != typeof e)
                    throw new TypeError('not a function');
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this);
            }
            function l(o, n) {
                for (; 3 === o._state;)
                    o = o._value;
                0 !== o._state ? (o._handled = !0, s._immediateFn(function () {
                    var e = 1 === o._state ? n.onFulfilled : n.onRejected;
                    if (null !== e) {
                        var t;
                        try {
                            t = e(o._value);
                        } catch (e) {
                            return void p(n.promise, e);
                        }
                        u(n.promise, t);
                    } else
                        (1 === o._state ? u : p)(n.promise, o._value);
                })) : o._deferreds.push(n);
            }
            function u(t, e) {
                try {
                    if (e === t)
                        throw new TypeError('A promise cannot be resolved with itself.');
                    if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var o = e.then;
                        if (e instanceof s)
                            return t._state = 3, t._value = e, void k(t);
                        if ('function' == typeof o)
                            return void f((n = o, r = e, function () {
                                n.apply(r, arguments);
                            }), t);
                    }
                    t._state = 1, t._value = e, k(t);
                } catch (e) {
                    p(t, e);
                }
                var n, r;
            }
            function p(e, t) {
                e._state = 2, e._value = t, k(e);
            }
            function k(e) {
                2 === e._state && 0 === e._deferreds.length && s._immediateFn(function () {
                    e._handled || s._unhandledRejectionFn(e._value);
                });
                for (var t = 0, o = e._deferreds.length; t < o; t++)
                    l(e, e._deferreds[t]);
                e._deferreds = null;
            }
            function y(e, t, o) {
                this.onFulfilled = 'function' == typeof e ? e : null, this.onRejected = 'function' == typeof t ? t : null, this.promise = o;
            }
            function f(e, t) {
                var o = !1;
                try {
                    e(function (e) {
                        o || (o = !0, u(t, e));
                    }, function (e) {
                        o || (o = !0, p(t, e));
                    });
                } catch (e) {
                    if (o)
                        return;
                    o = !0, p(t, e);
                }
            }
            function g() {
            }
            s.prototype.catch = function (e) {
                return this.then(null, e);
            }, s.prototype.then = function (e, t) {
                var o = new this.constructor(n);
                return l(this, new y(e, t, o)), o;
            }, s.prototype.finally = function (t) {
                var o = this.constructor;
                return this.then(function (e) {
                    return o.resolve(t()).then(function () {
                        return e;
                    });
                }, function (e) {
                    return o.resolve(t()).then(function () {
                        return o.reject(e);
                    });
                });
            }, s.all = function (t) {
                return new s(function (n, r) {
                    if (!c(t))
                        return r(new TypeError('Promise.all accepts an array'));
                    var s = Array.prototype.slice.call(t);
                    if (0 === s.length)
                        return n([]);
                    var i = s.length;
                    function l(t, e) {
                        try {
                            if (e && ('object' == typeof e || 'function' == typeof e)) {
                                var o = e.then;
                                if ('function' == typeof o)
                                    return void o.call(e, function (e) {
                                        l(t, e);
                                    }, r);
                            }
                            s[t] = e, 0 == --i && n(s);
                        } catch (e) {
                            r(e);
                        }
                    }
                    for (var e = 0; e < s.length; e++)
                        l(e, s[e]);
                });
            }, s.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === s ? t : new s(function (e) {
                    e(t);
                });
            }, s.reject = function (o) {
                return new s(function (e, t) {
                    t(o);
                });
            }, s.race = function (r) {
                return new s(function (e, t) {
                    if (!c(r))
                        return t(new TypeError('Promise.race accepts an array'));
                    for (var o = 0, n = r.length; o < n; o++)
                        s.resolve(r[o]).then(e, t);
                });
            }, s._immediateFn = 'function' == typeof setImmediate ? function (e) {
                setImmediate(e);
            } : function (e) {
                t(e, 0);
            }, s._unhandledRejectionFn = function (e) {
                'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', e);
            };
            var b, m, C, v, P, A, w, T, S, I, L, _, x, E, z, B, N, V, O, G, D, H, M, F, q, R, j, U, W, K, Y, J, Q, Z, X, $, ee, te, oe, ne, re, se = new (g.prototype.initPolyfill = function () {
                    this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil();
                }, g.prototype.initArrayIncludesPolyfill = function () {
                    Array.prototype.includes || Object.defineProperty(Array.prototype, 'includes', {
                        value: function (e) {
                            for (var t = [], o = 1; o < arguments.length; o++)
                                t[o - 1] = arguments[o];
                            if (null == this)
                                throw new TypeError('Array.prototype.includes called on null or undefined');
                            var n = Object(this), r = parseInt(n.length, 10) || 0;
                            if (0 === r)
                                return !1;
                            var s, i, l = t[1] || 0;
                            for (0 <= l ? s = l : (s = r + l) < 0 && (s = 0); s < r;) {
                                if (e === (i = n[s]) || e != e && i != i)
                                    return !0;
                                s++;
                            }
                            return !1;
                        },
                        writable: !0,
                        configurable: !0
                    });
                }, g.prototype.initEndsWithPoly = function () {
                    String.prototype.endsWith || Object.defineProperty(String.prototype, 'endsWith', {
                        value: function (e, t) {
                            return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e;
                        },
                        writable: !0,
                        configurable: !0
                    });
                }, g.prototype.initClosestPolyfill = function () {
                    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, 'closest', {
                        value: function (e) {
                            var t = this;
                            do {
                                if (t.matches(e))
                                    return t;
                                t = t.parentElement || t.parentNode;
                            } while (null !== t && 1 === t.nodeType);
                            return null;
                        },
                        writable: !0,
                        configurable: !0
                    });
                }, g.prototype.initIncludesPolyfill = function () {
                    String.prototype.includes || Object.defineProperty(String.prototype, 'includes', {
                        value: function (e, t) {
                            return 'number' != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                        },
                        writable: !0,
                        configurable: !0
                    });
                }, g.prototype.initObjectAssignPolyfill = function () {
                    'function' != typeof Object.assign && Object.defineProperty(Object, 'assign', {
                        value: function (e, t) {
                            if (null == e)
                                throw new TypeError('Cannot convert undefined or null to object');
                            for (var o = Object(e), n = 1; n < arguments.length; n++) {
                                var r = arguments[n];
                                if (null != r)
                                    for (var s in r)
                                        Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s]);
                            }
                            return o;
                        },
                        writable: !0,
                        configurable: !0
                    });
                }, g.prototype.initArrayFillPolyfill = function () {
                    Array.prototype.fill || Object.defineProperty(Array.prototype, 'fill', {
                        value: function (e) {
                            if (null == this)
                                throw new TypeError('this is null or not defined');
                            for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), s = arguments[2], i = void 0 === s ? o : s >> 0, l = i < 0 ? Math.max(o + i, 0) : Math.min(i, o); r < l;)
                                t[r] = e, r++;
                            return t;
                        }
                    });
                }, g.prototype.initCustomEventPolyfill = function () {
                    if ('function' == typeof window.CustomEvent)
                        return !1;
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var o = document.createEvent('CustomEvent');
                        return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o;
                    }
                    e.prototype = window.Event.prototype, window.CustomEvent = e;
                }, g.prototype.insertViewPortTag = function () {
                    var e = document.querySelector('meta[name="viewport"]'), t = document.createElement('meta');
                    t.name = 'viewport', t.content = 'width=device-width, initial-scale=1', e || document.head.appendChild(t);
                }, g.prototype.promisesPolyfil = function () {
                    'undefined' == typeof Promise && (window.Promise = s);
                }, g)();
            (m = b = b || {})[m.Unknown = 0] = 'Unknown', m[m.BannerCloseButton = 1] = 'BannerCloseButton', m[m.ConfirmChoiceButton = 2] = 'ConfirmChoiceButton', m[m.AcceptAll = 3] = 'AcceptAll', m[m.RejectAll = 4] = 'RejectAll', m[m.BannerSaveSettings = 5] = 'BannerSaveSettings', (v = C = C || {})[v.Purpose = 1] = 'Purpose', v[v.SpecialFeature = 2] = 'SpecialFeature', (A = P = P || {}).Legal = 'legal', A.UserFriendly = 'user_friendly', (T = w = w || {}).Top = 'top', T.Bottom = 'bottom', (I = S = S || {})[I.Banner = 0] = 'Banner', I[I.PrefCenterHome = 1] = 'PrefCenterHome', I[I.VendorList = 2] = 'VendorList', I[I.CookieList = 3] = 'CookieList', (_ = L = L || {})[_.RightArrow = 39] = 'RightArrow', _[_.LeftArrow = 37] = 'LeftArrow', (E = x = x || {}).AfterTitle = 'AfterTitle', E.AfterDescription = 'AfterDescription', E.AfterDPD = 'AfterDPD', (B = z = z || {}).PlusMinus = 'Plusminus', B.Caret = 'Caret', B.NoAccordion = 'NoAccordion', (V = N = N || {}).Consent = 'Consent', V.LI = 'LI', V.AddtlConsent = 'AddtlConsent', (G = O = O || {}).Iab1Pub = 'eupubconsent', G.Iab2Pub = 'eupubconsent-v2', G.Iab1Eu = 'euconsent', G.Iab2Eu = 'euconsent-v2', (H = D = D || {})[H.Disabled = 0] = 'Disabled', H[H.Consent = 1] = 'Consent', H[H.LegInt = 2] = 'LegInt', (F = M = M || {})[F['Banner - Allow All'] = 1] = 'Banner - Allow All', F[F['Banner - Reject All'] = 2] = 'Banner - Reject All', F[F['Banner - Close'] = 3] = 'Banner - Close', F[F['Preference Center - Allow All'] = 4] = 'Preference Center - Allow All', F[F['Preference Center - Reject All'] = 5] = 'Preference Center - Reject All', F[F['Preference Center - Confirm'] = 6] = 'Preference Center - Confirm', (R = q = q || {}).Active = '1', R.InActive = '0', (U = j = j || {}).Host = 'Host', U.GenVendor = 'GenVen', (K = W = W || {})[K.Host = 1] = 'Host', K[K.GenVen = 2] = 'GenVen', K[K.HostAndGenVen = 3] = 'HostAndGenVen', (J = Y = Y || {})[J.minDays = 1] = 'minDays', J[J.maxDays = 30] = 'maxDays', J[J.maxYear = 31536000] = 'maxYear', J[J.maxSecToDays = 86400] = 'maxSecToDays', (Z = Q = Q || {})[Z.RTL = 0] = 'RTL', Z[Z.LTR = 1] = 'LTR', ($ = X = X || {})[$.GoogleVendor = 1] = 'GoogleVendor', $[$.GeneralVendor = 2] = 'GeneralVendor', (te = ee = ee || {})[te.Days = 1] = 'Days', te[te.Weeks = 7] = 'Weeks', te[te.Months = 30] = 'Months', te[te.Years = 365] = 'Years', (ne = oe = oe || {}).Checkbox = 'Checkbox', ne.Toggle = 'Toggle';
            var ie = {
                    AWAITING_RE_CONSENT: 'AwaitingReconsent',
                    CONSENT_ID: 'consentId',
                    DO_NOT_TRACK: 'do not track',
                    GEO_LOCATION: 'geolocation',
                    INTERACTION_COUNT: 'interactionCount',
                    IS_IAB_GLOBAL: 'isIABGlobal',
                    NOT_LANDING_PAGE: 'NotLandingPage'
                }, le = {
                    ADDITIONAL_CONSENT_STRING: 'OTAdditionalConsentString',
                    ALERT_BOX_CLOSED: 'OptanonAlertBoxClosed',
                    OPTANON_CONSENT: 'OptanonConsent',
                    EU_PUB_CONSENT: 'eupubconsent-v2',
                    EU_CONSENT: 'euconsent-v2',
                    SELECTED_VARIANT: 'OTVariant'
                }, ae = 'CONFIRMED', ce = 'OPT_OUT', de = 'NO_CHOICE', ue = 'NOTGIVEN', pe = 'always active', ke = 'active', he = 'inactive landingpage', ye = 'inactive', fe = 'LOCAL', ge = 'TEST', be = 'data-language', me = 'otCookieSettingsButton.json', Ce = 'otCookieSettingsButtonRtl.json', ve = 'otCenterRounded', Pe = 'otFlat', Ae = 'otFloatingRoundedCorner', Te = 'otFloatingFlat', Se = 'otFloatingRoundedIcon', Ie = 'otFloatingRounded', Le = 'otChoicesBanner', _e = 'otNoBanner', we = 'otPcCenter', xe = 'otPcList', Ee = 'otPcPanel', Be = 'otPcPopup', Ne = 'otPcTab', Ve = ((re = {})[ee.Days] = 'PCenterVendorListLifespanDay', re[ee.Weeks] = 'LfSpnWk', re[ee.Months] = 'PCenterVendorListLifespanMonth', re[ee.Years] = 'LfSpnYr', re), Oe = new function () {
                    this.otSDKVersion = '6.14.0', this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.hostsConsent = [], this.genVendorsConsent = {}, this.vendors = {
                        list: [],
                        searchParam: '',
                        vendorTemplate: null,
                        selectedVendors: [],
                        selectedPurpose: [],
                        selectedLegInt: [],
                        selectedLegIntVendors: [],
                        selectedSpecialFeatures: []
                    }, this.oneTrustIABConsent = {
                        purpose: [],
                        legimateInterest: [],
                        features: [],
                        specialFeatures: [],
                        specialPurposes: [],
                        vendors: [],
                        legIntVendors: [],
                        vendorList: null,
                        IABCookieValue: ''
                    }, this.addtlVendors = {
                        vendorConsent: [],
                        vendorSelected: {}
                    }, this.addtlConsentVersion = '1~', this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
                        hostTemplate: null,
                        hostCookieTemplate: null
                    }, this.generalVendors = {
                        gvTemplate: null,
                        gvCookieTemplate: null
                    }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
                        country: '',
                        state: ''
                    }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1;
                }(), Ge = new function () {
                }(), De = 'BRANCH', He = 'COOKIE', Me = 'IAB2_FEATURE', Fe = 'IAB2_PURPOSE', qe = 'IAB2_SPL_FEATURE', Re = 'IAB2_SPL_PURPOSE', je = 'IAB2_STACK', Ue = [
                    'IAB2_PURPOSE',
                    'IAB2_STACK',
                    'IAB2_FEATURE',
                    'IAB2_SPL_PURPOSE',
                    'IAB2_SPL_FEATURE'
                ], ze = [
                    'COOKIE',
                    'BRANCH',
                    'IAB2_STACK'
                ], We = [
                    'IAB2_PURPOSE',
                    'IAB2_SPL_FEATURE'
                ], Ke = [
                    'IAB2_FEATURE',
                    'IAB2_SPL_PURPOSE'
                ], Ye = [
                    'IAB2_PURPOSE',
                    'IAB2_SPL_PURPOSE',
                    'IAB2_FEATURE',
                    'IAB2_SPL_FEATURE'
                ], Je = (Qe.prototype.setRegionRule = function (e) {
                    this.rule = e;
                }, Qe.prototype.getRegionRule = function () {
                    return this.rule;
                }, Qe.prototype.getRegionRuleType = function () {
                    return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.rule.Type;
                }, Qe.prototype.initVariables = function () {
                    this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
                        purposes: {},
                        legIntPurposes: {},
                        specialPurposes: {},
                        features: {},
                        specialFeatures: {}
                    };
                }, Qe.prototype.init = function (e) {
                    this.initVariables();
                    var t = e.DomainData;
                    this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), Xe.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName();
                }, Qe.prototype.isValidConsentNoticeGroup = function (e, t) {
                    if (!e.ShowInPopup)
                        return !1;
                    var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length, n = !1, r = !1, s = !1;
                    if (e && !e.Parent) {
                        e.SubGroups.length && (n = e.SubGroups.some(function (e) {
                            return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length;
                        }), r = e.SubGroups.some(function (e) {
                            return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length);
                        }), !t || e.FirstPartyCookies.length && e.Hosts.length || (s = !e.SubGroups.some(function (e) {
                            return -1 === Ue.indexOf(e.Type);
                        })));
                        var i = e.SubGroups.some(function (e) {
                            return -1 < Ue.indexOf(e.Type);
                        });
                        (-1 < Ue.indexOf(e.Type) || i) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0);
                    }
                    return o || -1 < Ue.indexOf(e.Type) || n || r || s;
                }, Qe.prototype.extractGroupIdForIabGroup = function (e) {
                    return -1 < e.indexOf('ISPV2_') ? e = e.replace('ISPV2_', '') : -1 < e.indexOf('IABV2_') ? e = e.replace('IABV2_', '') : -1 < e.indexOf('IFEV2_') ? e = e.replace('IFEV2_', '') : -1 < e.indexOf('ISFV2_') && (e = e.replace('ISFV2_', '')), e;
                }, Qe.prototype.populateGroups = function (e, r) {
                    var s = this, i = {}, l = [];
                    e.forEach(function (e) {
                        var t = e.CustomGroupId;
                        if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!r.IsIabEnabled && -1 < Ue.indexOf(e.Type) || 'IAB2' === s.iabType && (e.Type === Fe || e.Type === je) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === qe && !e.HasConsentOptOut) && (t !== Ze.purposeOneGrpId || e.ShowInPopup || (s.purposeOneTreatment = !0), s.grpContainLegalOptOut = e.HasLegIntOptOut || s.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? l.push(e) : i[t] = e, 'IAB2' === s.iabType && -1 < Ue.indexOf(e.Type))) {
                            var o = s.extractGroupIdForIabGroup(t);
                            s.iabGrpIdMap[t] = o, e.IabGrpId = o;
                            var n = {
                                description: e.GroupDescription,
                                descriptionLegal: e.DescriptionLegal,
                                id: Number(o),
                                name: e.GroupName
                            };
                            switch (e.Type) {
                            case Fe:
                                s.iabGroups.purposes[o] = n;
                                break;
                            case Re:
                                s.iabGroups.specialPurposes[o] = n;
                                break;
                            case Me:
                                s.iabGroups.features[o] = n;
                                break;
                            case qe:
                                s.iabGroups.specialFeatures[o] = n;
                            }
                        }
                    }), l.forEach(function (e) {
                        i[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < Ue.indexOf(e.Type)) && i[e.Parent].SubGroups.push(e);
                    });
                    var t = [];
                    return Object.keys(i).forEach(function (e) {
                        s.isValidConsentNoticeGroup(i[e], r.IsIabEnabled) && (i[e].SubGroups.sort(function (e, t) {
                            return e.Order - t.Order;
                        }), t.push(i[e]));
                    }), this.initGrpVar(t), t.sort(function (e, t) {
                        return e.Order - t.Order;
                    });
                }, Qe.prototype.initGrpVar = function (e) {
                    var o = this, n = !0, r = !0;
                    e.forEach(function (e) {
                        h([e], e.SubGroups).forEach(function (e) {
                            var t;
                            e.Type !== He && e.Type !== Fe && e.Type !== qe || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < ze.indexOf(e.Type) && o.consentableGrps.push(e), -1 < We.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === ze.indexOf(e.Type) && o.iabGrps.push(e), 'active' !== (t = o.DNTEnabled && e.IsDntEnabled ? ie.DO_NOT_TRACK.toLowerCase() : e.Status.toLowerCase()) && 'inactive landingpage' !== t && t !== ie.DO_NOT_TRACK || (n = !1), 'inactive landingpage' !== t && 'always active' !== t && (r = !1);
                        });
                    }), this.isOptInMode = n, this.isSoftOptInMode = r;
                }, Qe.prototype.domainDataMapper = function (e) {
                    var t = {
                        cctId: e.cctId,
                        MainText: e.MainText,
                        MainInfoText: e.MainInfoText,
                        AboutText: e.AboutText,
                        AboutCookiesText: e.AboutCookiesText,
                        ConfirmText: e.ConfirmText,
                        AllowAllText: e.PreferenceCenterConfirmText,
                        ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
                        CookiesUsedText: e.CookiesUsedText,
                        AboutLink: e.AboutLink,
                        ActiveText: e.ActiveText,
                        AlwaysActiveText: e.AlwaysActiveText,
                        AlertNoticeText: e.AlertNoticeText,
                        AlertCloseText: e.AlertCloseText,
                        AlertMoreInfoText: e.AlertMoreInfoText,
                        AlertAllowCookiesText: e.AlertAllowCookiesText,
                        AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || '',
                        CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
                        BannerTitle: e.BannerTitle,
                        ForceConsent: e.ForceConsent,
                        LastReconsentDate: e.LastReconsentDate,
                        InactiveText: e.InactiveText,
                        CookiesText: e.CookiesText || 'Cookies',
                        CategoriesText: e.CategoriesText || 'Categories',
                        CookieSettingButtonText: e.CookieSettingButtonText,
                        IsLifespanEnabled: e.IsLifespanEnabled,
                        LifespanText: e.LifespanText || 'Lifespan',
                        Groups: this.populateGroups(e.Groups, e),
                        Language: e.Language,
                        showBannerCloseButton: e.showBannerCloseButton,
                        ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
                        FooterDescriptionText: e.FooterDescriptionText,
                        CustomJs: e.CustomJs,
                        LifespanTypeText: e.LifespanTypeText || 'Session',
                        LifespanDurationText: e.LifespanDurationText || 'days',
                        CloseText: e.CloseText,
                        BannerCloseButtonText: e.BannerCloseButtonText,
                        HideToolbarCookieList: e.HideToolbarCookieList,
                        AlertLayout: e.AlertLayout,
                        AddLinksToCookiepedia: e.AddLinksToCookiepedia,
                        ShowAlertNotice: e.ShowAlertNotice,
                        IsIabEnabled: e.IsIabEnabled,
                        IabType: e.IabType,
                        BannerPosition: e.BannerPosition,
                        PreferenceCenterPosition: e.PreferenceCenterPosition,
                        ReconsentFrequencyDays: e.ReconsentFrequencyDays,
                        VendorLevelOptOut: e.IsIabEnabled,
                        ConsentModel: { Name: e.ConsentModel },
                        VendorConsentModel: e.VendorConsentModel,
                        IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
                        IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
                        ScrollCloseBanner: e.ScrollCloseBanner,
                        ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
                        OnClickCloseBanner: e.OnClickCloseBanner,
                        OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
                        NextPageCloseBanner: e.NextPageCloseBanner,
                        NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
                        VendorListText: e.VendorListText,
                        ThirdPartyCookieListText: e.ThirdPartyCookieListText,
                        CookieListDescription: e.CookieListDescription,
                        CookieListTitle: e.CookieListTitle,
                        NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
                        Flat: e.Flat,
                        FloatingFlat: e.FloatingFlat,
                        FloatingRoundedCorner: e.FloatingRoundedCorner,
                        FloatingRoundedIcon: e.FloatingRoundedIcon,
                        FloatingRounded: e.FloatingRounded,
                        CenterRounded: e.CenterRounded,
                        Center: e.Center,
                        Panel: e.Panel,
                        Popup: e.Popup,
                        List: e.List,
                        Tab: e.Tab,
                        BannerPurposeTitle: e.BannerPurposeTitle,
                        BannerPurposeDescription: e.BannerPurposeDescription,
                        BannerFeatureTitle: e.BannerFeatureTitle,
                        BannerFeatureDescription: e.BannerFeatureDescription,
                        BannerInformationTitle: e.BannerInformationTitle,
                        BannerInformationDescription: e.BannerInformationDescription,
                        BannerIABPartnersLink: e.BannerIABPartnersLink,
                        BannerShowRejectAllButton: e.BannerShowRejectAllButton,
                        BannerRejectAllButtonText: e.BannerRejectAllButtonText,
                        PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
                        PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
                        BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
                        BannerDPDTitle: e.BannerDPDTitle || '',
                        BannerDPDDescription: e.BannerDPDDescription || [],
                        BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || '',
                        PCFirstPartyCookieListText: e.PCFirstPartyCookieListText || 'First Party Cookies',
                        PCViewCookiesText: e.PCViewCookiesText,
                        PCenterBackText: e.PCenterBackText,
                        PCenterVendorsListText: e.PCenterVendorsListText,
                        PCenterVendorListDescText: e.PCenterVendorListDescText,
                        PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
                        PCenterClearFiltersText: e.PCenterClearFiltersText,
                        PCenterApplyFiltersText: e.PCenterApplyFiltersText,
                        PCenterEnableAccordion: e.PCenterEnableAccordion,
                        PCGrpDescType: e.PCGrpDescType,
                        PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
                        PCVendorFullLegalText: e.PCVendorFullLegalText,
                        PCAccordionStyle: z.Caret,
                        PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
                        PCenterCookiesListText: e.PCenterCookiesListText,
                        PCenterCancelFiltersText: e.PCenterCancelFiltersText,
                        PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
                        PCenterFilterText: e.PCenterFilterText,
                        Vendors: e.Vendors,
                        OverriddenVendors: e.OverriddenVendors,
                        Publisher: e.publisher,
                        BannerAdditionalDescription: e.BannerAdditionalDescription,
                        BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
                        PCShowConsentLabels: !(!e.Tab || !e.PCTemplateUpgrade) && e.PCShowConsentLabels,
                        PCActiveText: e.PCActiveText,
                        PCShowPersistentCookiesHoverButton: e.PCShowPersistentCookiesHoverButton || !1,
                        PCInactiveText: e.PCInactiveText,
                        UseGoogleVendors: !!e.PCTemplateUpgrade && this.rule.UseGoogleVendors,
                        OverridenGoogleVendors: e.OverridenGoogleVendors,
                        PCGoogleVendorsText: e.PCGoogleVendorsText,
                        PCIABVendorsText: e.PCIABVendorsText,
                        PCTemplateUpgrade: e.PCTemplateUpgrade,
                        GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
                        GlobalRestrictions: e.GlobalRestrictions,
                        GeneralVendors: e.GeneralVendors,
                        GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
                        PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
                        GenVenOptOut: e.PCenterAllowVendorOptout,
                        GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
                        BannerNonIABVendorListText: e.BannerNonIABVendorListText,
                        PCenterVendorListLifespan: e.PCenterVendorListLifespan,
                        PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
                        PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
                        PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
                        PCenterVendorListStorageType: e.PCenterVendorListStorageType,
                        PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
                        PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
                        PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
                        PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
                        PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
                        PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
                        LfSpnWk: e.PCLifeSpanWk,
                        LfSpnWks: e.PCLifeSpanWks,
                        LfSpnYr: e.PCLifeSpanYr,
                        LfSpnYrs: e.PCLifeSpanYrs,
                        LfSpanSecs: e.PCLifeSpanSecs,
                        PCCookiePolicyText: e.PCCookiePolicyText,
                        ChoicesBanner: e.ChoicesBanner,
                        NoBanner: e.NoBanner,
                        BShowSaveBtn: e.BShowSaveBtn,
                        BSaveBtnTxt: e.BSaveBtnText
                    };
                    e.PCTemplateUpgrade && (e.Center || e.Panel) && e.PCAccordionStyle === z.PlusMinus && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== z.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), Ge.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), Xe = r(r({}, Xe), t);
                }, Qe.prototype.commonDataMapper = function (e) {
                    var t = {
                        iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
                        optanonHideAcceptButton: e.OptanonHideAcceptButton,
                        optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
                        optanonStyle: e.OptanonStyle,
                        optanonStaticContentLocation: e.OptanonStaticContentLocation,
                        bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ''),
                        pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ''),
                        textColor: e.TextColor,
                        buttonColor: e.ButtonColor,
                        buttonTextColor: e.ButtonTextColor,
                        bannerMPButtonColor: e.BannerMPButtonColor,
                        bannerMPButtonTextColor: e.BannerMPButtonTextColor,
                        backgroundColor: e.BackgroundColor,
                        bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
                        pcTextColor: e.PcTextColor,
                        pcButtonColor: e.PcButtonColor,
                        pcButtonTextColor: e.PcButtonTextColor,
                        pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
                        pcLinksTextColor: e.PcLinksTextColor,
                        bannerLinksTextColor: e.BannerLinksTextColor,
                        pcEnableToggles: e.PcEnableToggles,
                        pcBackgroundColor: e.PcBackgroundColor,
                        pcMenuColor: e.PcMenuColor,
                        pcMenuHighLightColor: e.PcMenuHighLightColor,
                        legacyBannerLayout: e.LegacyBannerLayout,
                        optanonLogo: e.OptanonLogo,
                        oneTrustFtrLogo: e.OneTrustFooterLogo,
                        optanonCookieDomain: e.OptanonCookieDomain,
                        optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
                        optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
                        optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
                        optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
                        optanonShowSubGroupCookies: e.ShowSubGroupCookies,
                        useRTL: e.UseRTL,
                        showBannerCookieSettings: e.ShowBannerCookieSettings,
                        showBannerAcceptButton: e.ShowBannerAcceptButton,
                        showCookieList: e.ShowCookieList,
                        allowHostOptOut: e.AllowHostOptOut,
                        CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
                        cookieListTitleColor: e.CookieListTitleColor,
                        cookieListGroupNameColor: e.CookieListGroupNameColor,
                        cookieListTableHeaderColor: e.CookieListTableHeaderColor,
                        CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
                        cookieListPrimaryColor: e.CookieListPrimaryColor,
                        cookieListCustomCss: e.CookieListCustomCss,
                        pcShowCookieHost: e.PCShowCookieHost,
                        pcShowCookieDuration: e.PCShowCookieDuration,
                        pcShowCookieType: e.PCShowCookieType,
                        pcShowCookieCategory: e.PCShowCookieCategory,
                        pcShowCookieDescription: e.PCShowCookieDescription,
                        ConsentIntegration: e.ConsentIntegration,
                        ConsentPurposesText: e.BConsentPurposesText || 'Consent Purposes',
                        FeaturesText: e.BFeaturesText || 'Features',
                        LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || 'Legitimate Interest Purposes',
                        ConsentText: e.BConsentText || 'Consent',
                        LegitInterestText: e.BLegitInterestText || 'Legit. Interest',
                        pcDialogClose: e.PCDialogClose || 'dialog closed',
                        SpecialFeaturesText: e.BSpecialFeaturesText || 'Special Features',
                        SpecialPurposesText: e.BSpecialPurposesText || 'Special Purposes',
                        pcCListName: e.PCCListName || 'Name',
                        pcCListHost: e.PCCListHost || 'Host',
                        pcCListDuration: e.PCCListDuration || 'Duration',
                        pcCListType: e.PCCListType || 'Type',
                        pcCListCategory: e.PCCListCategory || 'Category',
                        pcCListDescription: e.PCCListDescription || 'Description',
                        IabLegalTextUrl: e.IabLegalTextUrl,
                        pcLegIntButtonColor: e.PcLegIntButtonColor,
                        pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
                        PCenterExpandToViewText: e.PCenterExpandToViewText,
                        BCategoryContainerColor: e.BCategoryContainerColor,
                        BCategoryStyleColor: e.BCategoryStyleColor,
                        BLineBreakColor: e.BLineBreakColor,
                        BSaveBtnColor: e.BSaveBtnColor,
                        BCategoryStyle: e.BCategoryStyle
                    };
                    Xe = r(r({}, Xe), t);
                }, Qe.prototype.setPublicDomainData = function (t) {
                    this.pubDomainData = {
                        cctId: t.cctId,
                        MainText: t.MainText,
                        MainInfoText: t.MainInfoText,
                        AboutText: t.AboutText,
                        AboutCookiesText: t.AboutCookiesText,
                        ConfirmText: t.ConfirmText,
                        AllowAllText: t.PreferenceCenterConfirmText,
                        ManagePreferenceText: t.PreferenceCenterManagePreferencesText,
                        CookiesUsedText: t.CookiesUsedText,
                        AboutLink: t.AboutLink,
                        ActiveText: t.ActiveText,
                        AlwaysActiveText: t.AlwaysActiveText,
                        AlertNoticeText: t.AlertNoticeText,
                        AlertCloseText: t.AlertCloseText,
                        AlertMoreInfoText: t.AlertMoreInfoText,
                        AlertAllowCookiesText: t.AlertAllowCookiesText,
                        CloseShouldAcceptAllCookies: t.CloseShouldAcceptAllCookies,
                        BannerTitle: t.BannerTitle,
                        ForceConsent: t.ForceConsent,
                        LastReconsentDate: t.LastReconsentDate,
                        InactiveText: t.InactiveText,
                        CookiesText: t.CookiesText,
                        CookieSettingButtonText: t.CookieSettingButtonText,
                        CategoriesText: t.CategoriesText,
                        IsLifespanEnabled: t.IsLifespanEnabled,
                        LifespanText: t.LifespanText,
                        GeneralVendors: t.GeneralVendors,
                        Groups: null,
                        Language: t.Language,
                        showBannerCloseButton: t.showBannerCloseButton,
                        ShowPreferenceCenterCloseButton: t.ShowPreferenceCenterCloseButton,
                        FooterDescriptionText: t.FooterDescriptionText,
                        CustomJs: t.CustomJs,
                        LifespanTypeText: t.LifespanTypeText,
                        LifespanDurationText: t.LifespanDurationText,
                        CloseText: t.CloseText,
                        BannerCloseButtonText: t.BannerCloseButtonText,
                        HideToolbarCookieList: t.HideToolbarCookieList,
                        AlertLayout: t.AlertLayout,
                        AddLinksToCookiepedia: t.AddLinksToCookiepedia,
                        ShowAlertNotice: t.ShowAlertNotice,
                        IsIABEnabled: t.IsIabEnabled,
                        IabType: t.IabType,
                        BannerPosition: t.BannerPosition,
                        PreferenceCenterPosition: t.PreferenceCenterPosition,
                        VendorLevelOptOut: t.IsIabEnabled,
                        ConsentModel: { Name: t.ConsentModel },
                        VendorConsentModel: t.VendorConsentModel,
                        IsConsentLoggingEnabled: t.IsConsentLoggingEnabled,
                        IsIabThirdPartyCookieEnabled: t.IsIabThirdPartyCookieEnabled,
                        ScrollCloseBanner: t.ScrollCloseBanner,
                        ScrollAcceptAllCookies: t.ScrollAcceptAllCookies,
                        OnClickCloseBanner: t.OnClickCloseBanner,
                        OnClickAcceptAllCookies: t.OnClickAcceptAllCookies,
                        NextPageCloseBanner: t.NextPageCloseBanner,
                        NextPageAcceptAllCookies: t.NextPageAcceptAllCookies,
                        VendorListText: t.VendorListText,
                        ThirdPartyCookieListText: t.ThirdPartyCookieListText,
                        CookieListDescription: t.CookieListDescription,
                        CookieListTitle: t.CookieListTitle,
                        BannerPurposeTitle: t.BannerPurposeTitle,
                        BannerPurposeDescription: t.BannerPurposeDescription,
                        BannerFeatureTitle: t.BannerFeatureTitle,
                        BannerFeatureDescription: t.BannerFeatureDescription,
                        BannerInformationTitle: t.BannerInformationTitle,
                        BannerInformationDescription: t.BannerInformationDescription,
                        BannerIABPartnersLink: t.BannerIABPartnersLink,
                        BannerShowRejectAllButton: t.BannerShowRejectAllButton,
                        BannerRejectAllButtonText: t.BannerRejectAllButtonText,
                        PCenterShowRejectAllButton: t.PCenterShowRejectAllButton,
                        PCenterRejectAllButtonText: t.PCenterRejectAllButtonText,
                        BannerSettingsButtonDisplayLink: t.BannerSettingsButtonDisplayLink,
                        BannerDPDTitle: t.BannerDPDTitle || '',
                        BannerDPDDescription: t.BannerDPDDescription || [],
                        BannerDPDDescriptionFormat: t.BannerDPDDescriptionFormat || '',
                        ConsentIntegrationData: null,
                        PCFirstPartyCookieListText: t.PCFirstPartyCookieListText,
                        PCViewCookiesText: t.PCViewCookiesText,
                        IsBannerLoaded: !1,
                        PCenterBackText: t.PCenterBackText,
                        PCenterVendorsListText: t.PCenterVendorsListText,
                        PCenterVendorListDescText: t.PCenterVendorListDescText,
                        PCenterViewPrivacyPolicyText: t.PCenterViewPrivacyPolicyText,
                        PCenterClearFiltersText: t.PCenterClearFiltersText,
                        PCenterApplyFiltersText: t.PCenterApplyFiltersText,
                        PCenterEnableAccordion: t.PCenterEnableAccordion,
                        PCGrpDescType: t.PCGrpDescType,
                        PCGrpDescLinkPosition: t.PCGrpDescLinkPosition,
                        PCVendorFullLegalText: t.PCVendorFullLegalText,
                        PCAccordionStyle: z.Caret,
                        PCenterExpandToViewText: t.PCenterExpandToViewText,
                        PCenterAllowAllConsentText: t.PCenterAllowAllConsentText,
                        PCenterCookiesListText: t.PCenterCookiesListText,
                        PCenterCancelFiltersText: t.PCenterCancelFiltersText,
                        PCenterSelectAllVendorsText: t.PCenterSelectAllVendorsText,
                        PCShowPersistentCookiesHoverButton: t.PCShowPersistentCookiesHoverButton,
                        PCenterFilterText: t.PCenterFilterText,
                        UseGoogleVendors: !!t.PCTemplateUpgrade && this.rule.UseGoogleVendors,
                        OverridenGoogleVendors: t.OverridenGoogleVendors,
                        PCGoogleVendorsText: t.PCGoogleVendorsText,
                        PCIABVendorsText: t.PCIABVendorsText,
                        PCTemplateUpgrade: t.PCTemplateUpgrade,
                        BCategoryContainerColor: t.BCategoryContainerColor,
                        BCategoryStyleColor: t.BCategoryStyleColor,
                        BLineBreakColor: t.BLineBreakColor,
                        BSaveBtnColor: t.BSaveBtnColor,
                        BCategoryStyle: t.BCategoryStyle,
                        ChoicesBanner: t.ChoicesBanner,
                        NoBanner: t.NoBanner,
                        BShowSaveBtn: t.BShowSaveBtn,
                        BSaveBtnTxt: t.BSaveBtnText
                    }, t.PCTemplateUpgrade && (t.Center || t.Panel) && t.PCAccordionStyle !== z.NoAccordion && (this.pubDomainData.PCAccordionStyle = t.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = t.PCAccordionStyle !== z.NoAccordion;
                    var o = [];
                    t.Groups.forEach(function (e) {
                        !t.IsIabEnabled && e.IsIabPurpose || (e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies)), o.push(e));
                    }), this.pubDomainData.Groups = o;
                }, Qe.prototype.setBannerScriptElement = function (e) {
                    this.bannerScriptElement = e, this.setDomainElementAttributes();
                }, Qe.prototype.setbannerDataParentURL = function (e) {
                    this.bannerDataParentURL = e;
                }, Qe.prototype.setDomainElementAttributes = function () {
                    this.bannerScriptElement && (this.bannerScriptElement.hasAttribute('data-document-language') && this.setUseDocumentLanguage('true' === this.bannerScriptElement.getAttribute('data-document-language')), this.bannerScriptElement.hasAttribute('data-ignore-ga') && (this.ignoreGoogleAnlyticsCall = 'true' === this.bannerScriptElement.getAttribute('data-ignore-ga')), this.bannerScriptElement.hasAttribute('data-ignore-html') && (this.ignoreInjectingHtmlCss = 'true' === this.bannerScriptElement.getAttribute('data-ignore-html')));
                }, Qe.prototype.setUseDocumentLanguage = function (e) {
                    this.useDocumentLanguage = e;
                }, Qe.prototype.setPcName = function () {
                    Xe.Center ? this.pcName = we : Xe.Panel ? this.pcName = Ee : Xe.Popup ? this.pcName = Be : Xe.List ? this.pcName = xe : Xe.Tab && (this.pcName = Ne);
                }, Qe.prototype.setBannerName = function () {
                    Xe.Flat ? this.bannerName = Pe : Xe.FloatingRoundedCorner ? this.bannerName = Ae : Xe.FloatingFlat ? this.bannerName = Te : Xe.FloatingRounded ? this.bannerName = Ie : Xe.FloatingRoundedIcon ? this.bannerName = Se : Xe.CenterRounded ? this.bannerName = ve : Xe.ChoicesBanner ? this.bannerName = Le : Xe.NoBanner && (this.bannerName = _e);
                }, Qe);
            function Qe() {
                var t = this;
                this.DNTEnabled = 'yes' === navigator.doNotTrack || '1' === navigator.doNotTrack, this.pagePushedDown = !1, this.iabGroups = {
                    purposes: {},
                    legIntPurposes: {},
                    specialPurposes: {},
                    features: {},
                    specialFeatures: {}
                }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function (e) {
                    t.thirdPartyiFrameResolve = e;
                }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.purposeOneGrpId = 'IABV2_1';
            }
            var Ze, Xe = {};
            function $e() {
            }
            var et, tt = new ($e.prototype.convertKeyValueLowerCase = function (e) {
                    for (var t in e)
                        e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t.toLowerCase()] = e[t].toLowerCase(), delete e[t]);
                    return e;
                }, $e.prototype.getValidUrl = function (e) {
                    if (e)
                        return e.match(/^:\/\//) ? 'http' + e : e.match(/^(http)s?:\/\//i) ? e : 'http://' + e;
                }, $e.prototype.hexToRgb = function (e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16)
                    } : null;
                }, $e.prototype.arrToStr = function (e) {
                    return e.toString();
                }, $e.prototype.strToArr = function (e) {
                    return e ? e.split(',') : [];
                }, $e.prototype.empty = function (e) {
                    var t = document.getElementById(e);
                    if (t)
                        for (; t.hasChildNodes();)
                            t.removeChild(t.lastChild);
                }, $e.prototype.show = function (e) {
                    var t = document.getElementById(e);
                    t && (t.style.display = 'block');
                }, $e.prototype.remove = function (e) {
                    var t = document.getElementById(e);
                    t && t.parentNode && t.parentNode.removeChild(t);
                }, $e.prototype.appendTo = function (e, t) {
                    var o, n = document.getElementById(e);
                    n && ((o = document.createElement('div')).innerHTML = t, n.appendChild(o));
                }, $e.prototype.contains = function (e, t) {
                    var o;
                    for (o = 0; o < e.length; o += 1)
                        if (e[o].toString().toLowerCase() === t.toString().toLowerCase())
                            return !0;
                    return !1;
                }, $e.prototype.indexOf = function (e, t) {
                    var o;
                    for (o = 0; o < e.length; o += 1)
                        if (e[o] === t)
                            return o;
                    return -1;
                }, $e.prototype.endsWith = function (e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length);
                }, $e.prototype.param = function (e) {
                    var t, o = '';
                    for (t in e)
                        e.hasOwnProperty(t) && ('' !== o && (o += '&'), o += t + '=' + encodeURIComponent(e[t]).replace(/%20/g, '+'));
                    return o;
                }, $e.prototype.generateUUID = function () {
                    var o = new Date().getTime();
                    return 'undefined' != typeof performance && 'function' == typeof performance.now && (o += performance.now()), 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                        var t = (o + 16 * Math.random()) % 16 | 0;
                        return o = Math.floor(o / 16), ('x' === e ? t : 3 & t | 8).toString(16);
                    });
                }, $e.prototype.convertIABVendorPurposeArrayToObject = function (e) {
                    var o = {};
                    return e.forEach(function (e) {
                        var t = e.split(':');
                        o[parseInt(t[0])] = 'true' === t[1];
                    }), o;
                }, $e.prototype.getActiveIdArray = function (e) {
                    return e.filter(function (e) {
                        return 'true' === e.split(':')[1];
                    }).map(function (e) {
                        return parseInt(e.split(':')[0]);
                    });
                }, $e.prototype.distinctArray = function (e) {
                    var t = new Array();
                    return e.forEach(function (e) {
                        t.indexOf(e) < 0 && t.push(e);
                    }), t;
                }, $e.prototype.findIndex = function (e, t) {
                    for (var o = -1, n = 0; n < e.length; n++)
                        if (void 0 !== e[n] && t(e[n], n)) {
                            o = n;
                            break;
                        }
                    return o;
                }, $e.prototype.getIdArray = function (e) {
                    return e.map(function (e) {
                        return parseInt(e.split(':')[0]);
                    });
                }, $e.prototype.getURL = function (e) {
                    var t = document.createElement('a');
                    return t.href = e, t;
                }, $e.prototype.removeURLPrefixes = function (e) {
                    return e.toLowerCase().replace(/(^\w+:|^)\/\//, '').replace('www.', '');
                }, $e.prototype.getFilteredVenderList = function (t, e) {
                    return t = t.filter(function (e) {
                        var t = parseInt(e.split(':')[0]);
                        return -1 < this.indexOf(t);
                    }, e), e.filter(function (e) {
                        var t = e + ':true';
                        return this.indexOf(t) <= -1;
                    }, t).forEach(function (e) {
                        t.push(e + ':false');
                    }), t;
                }, $e.prototype.removeChild = function (e) {
                    if (e)
                        if (e instanceof NodeList)
                            for (var t = 0; t < e.length; t++)
                                e[t].parentElement.removeChild(e[t]);
                        else
                            e.parentElement.removeChild(e);
                }, $e.prototype.getRelativeURL = function (e, t, o) {
                    if (void 0 === o && (o = !1), t) {
                        var n = './' + e.replace(/^(http|https):\/\//, '').split('/').slice(1).join('/').replace('.json', '');
                        return o ? n : n + '.js';
                    }
                    return e;
                }, $e.prototype.setCheckedAttribute = function (e, t, o) {
                    e && (t = document.querySelector(e)), t && (t.setAttribute('aria-checked', o.toString()), o ? t.setAttribute('checked', '') : t.removeAttribute('checked'), t.checked = o);
                }, $e.prototype.setDisabledAttribute = function (e, t, o) {
                    e && (t = document.querySelector(e)), t && (o ? t.setAttribute('disabled', o.toString()) : t.removeAttribute('disabled'));
                }, $e.prototype.setHtmlAttributes = function (e, t) {
                    for (var o in t)
                        e.setAttribute(o, t[o]), e[o] = t[o];
                }, $e.prototype.calculateCookieLifespan = function (e) {
                    if (e < 0)
                        return 'Session';
                    var t = Math.floor(e / Y.maxSecToDays);
                    if (t < Y.minDays)
                        return '< 1 ' + Xe.PCenterVendorListLifespanDay;
                    if (t < Y.maxDays)
                        return t + ' ' + Xe.PCenterVendorListLifespanDays;
                    var o = Math.floor(t / Y.maxDays);
                    return 1 === o ? o + ' ' + Xe.PCenterVendorListLifespanMonth : o + ' ' + Xe.PCenterVendorListLifespanMonths;
                }, $e.prototype.insertElement = function (e, t, o) {
                    e && t && e.insertAdjacentElement(o, t);
                }, $e)(), ot = (nt.prototype.writeCookieParam = function (e, t, o) {
                    var n, r, s, i, l = {}, a = this.getCookie(e);
                    if (a)
                        for (r = a.split('&'), n = 0; n < r.length; n += 1)
                            s = r[n].split('='), l[decodeURIComponent(s[0])] = decodeURIComponent(s[1]).replace(/\+/g, ' ');
                    l[t] = o;
                    var c = Ge.moduleInitializer.TenantFeatures;
                    c && c.CookieV2CookieDateTimeInISO ? l.datestamp = new Date().toISOString() : l.datestamp = new Date().toString(), l.version = Oe.otSDKVersion, i = this.param(l), this.setCookie(e, i, Xe.ReconsentFrequencyDays);
                }, nt.prototype.readCookieParam = function (e, t) {
                    var o, n, r, s, i = this.getCookie(e);
                    if (i) {
                        for (n = {}, r = i.split('&'), o = 0; o < r.length; o += 1)
                            s = r[o].split('='), n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]).replace(/\+/g, ' ');
                        return t && n[t] ? n[t] : t && !n[t] ? '' : n;
                    }
                    return '';
                }, nt.prototype.getCookie = function (e) {
                    if (Ge.moduleInitializer.MobileSDK) {
                        var t = this.getCookieDataObj(e);
                        if (t)
                            return t.value;
                    }
                    if (Oe.isAMP && (Oe.ampData = JSON.parse(localStorage.getItem(Oe.dataDomainId)) || {}, Oe.ampData))
                        return Oe.ampData[e] || null;
                    var o, n, r = e + '=', s = document.cookie.split(';');
                    for (o = 0; o < s.length; o += 1) {
                        for (n = s[o]; ' ' === n.charAt(0);)
                            n = n.substring(1, n.length);
                        if (0 === n.indexOf(r))
                            return n.substring(r.length, n.length);
                    }
                    return null;
                }, nt.prototype.setAmpLocalStorage = function () {
                    localStorage.setItem(Oe.dataDomainId, JSON.stringify(Oe.ampData));
                }, nt.prototype.setCookie = function (e, t, o, n, r) {
                    if (void 0 === n && (n = !1), void 0 === r && (r = new Date()), Oe.isAMP)
                        '' != t && (Oe.ampData[e] = t, this.setAmpLocalStorage());
                    else {
                        var s = void 0;
                        s = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1000), '; expires=' + r.toUTCString()) : n ? '; expires=' + new Date(0).toUTCString() : '';
                        var i = Xe.optanonCookieDomain.split('/'), l = '', a = Ge.moduleInitializer, c = a.TenantFeatures;
                        i.length <= 1 ? i[1] = '' : l = i.slice(1).join('/');
                        var d = 'Samesite=Lax';
                        if (c && c.CookiesSameSiteNone && (d = 'Samesite=None; Secure'), 'TEST' === a.ScriptType || a.MobileSDK) {
                            var u = t + s + '; path=/; ' + d;
                            a.MobileSDK ? this.setCookieDataObj({
                                name: e,
                                value: t,
                                expires: s,
                                date: r,
                                domainAndPath: i
                            }) : document.cookie = e + '=' + u;
                        } else
                            u = t + s + '; path=/' + l + '; domain=.' + i[0] + '; ' + d, document.cookie = e + '=' + u;
                    }
                }, nt.prototype.setCookieDataObj = function (t) {
                    if (t) {
                        Oe.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? Oe.otCookieData = window.OneTrust.otCookieData : Oe.otCookieData = []);
                        var e = tt.findIndex(Oe.otCookieData, function (e) {
                            return e.name === t.name;
                        });
                        -1 < e ? Oe.otCookieData[e] = t : Oe.otCookieData.push(t);
                    }
                }, nt.prototype.getCookieDataObj = function (t) {
                    Oe.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? Oe.otCookieData = window.OneTrust.otCookieData : Oe.otCookieData = []);
                    var e = tt.findIndex(Oe.otCookieData, function (e) {
                        return e.name === t;
                    });
                    if (0 <= e) {
                        var o = Oe.otCookieData[e];
                        if (o.date)
                            return new Date(o.date) < new Date() ? (Oe.otCookieData.splice(e, 1), null) : o;
                    }
                    return null;
                }, nt.prototype.param = function (e) {
                    var t, o = '';
                    for (t in e)
                        e.hasOwnProperty(t) && ('' !== o && (o += '&'), o += t + '=' + encodeURIComponent(e[t]).replace(/%20/g, '+'));
                    return o;
                }, nt);
            function nt() {
            }
            var rt = (st.insertAfter = function (e, t) {
                t.parentNode.insertBefore(e, t.nextSibling);
            }, st.insertBefore = function (e, t) {
                t.parentNode.insertBefore(e, t);
            }, st.inArray = function (e, t) {
                return t.indexOf(e);
            }, st.ajax = function (e) {
                var t, o, n, r, s, i, l = null, a = new XMLHttpRequest();
                t = e.type, o = e.url, e.dataType, n = e.contentType, r = e.data, s = e.success, l = e.error, i = e.sync, a.open(t, o, !i), a.setRequestHeader('Content-Type', n), a.onload = function () {
                    if (200 <= this.status && this.status < 400) {
                        var e = JSON.parse(this.responseText);
                        s(e);
                    } else
                        l({
                            message: 'Error Loading Data',
                            statusCode: this.status
                        });
                }, a.onerror = function (e) {
                    l(e);
                }, 'post' === t.toLowerCase() || 'put' === t.toLowerCase() ? a.send(r) : a.send();
            }, st.prevNextHelper = function (o, e, n) {
                var r = [];
                function s(e, t, o) {
                    t[e] && o ? o.includes('.') ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split('.')[1])) && r.push(t[e]) : o.includes('#') ? t[e].id === o.split('#')[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e]);
                }
                return 'string' == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function (e, t) {
                    s(o, e, n);
                }) : s(o, e, n), r;
            }, st.browser = function () {
                var e, t, o;
                return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? 'IE ' + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || '') : 'Chrome' === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(' ').replace('OPR', 'Opera') : (o = o[2] ? [
                    o[1],
                    o[2]
                ] : [
                    navigator.appName,
                    navigator.appVersion,
                    '-?'
                ], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(' '))), {
                    version: parseInt(navigator.sayswho.split(' ')[1]),
                    type: navigator.sayswho.split(' ')[0],
                    userAgent: navigator.userAgent
                };
            }, st.isNodeList = function (e) {
                return '[object NodeList]' === Object.prototype.toString.call(e);
            }, st.prototype.fadeOut = function (e) {
                var t = this;
                if (void 0 === e && (e = 60), 1 <= this.el.length)
                    for (var o = 0; o < this.el.length; o++)
                        this.el[o].style.visibility = 'hidden', this.el[o].style.opacity = '0', this.el[o].style.transition = 'visibility 0s ' + e + 'ms, opacity ' + e + 'ms linear';
                var n = setInterval(function () {
                    if (1 <= t.el.length)
                        for (var e = 0; e < t.el.length; e++)
                            t.el[e].style.opacity <= 0 && (t.el[e].style.display = 'none', clearInterval(n), 'optanon-popup-bg' === t.el[e].id && t.el[e].setAttribute('style', ''));
                }, e);
                return this;
            }, st.prototype.hide = function () {
                if (1 <= this.el.length)
                    for (var e = 0; e < this.el.length; e++)
                        this.el[e].style.display = 'none';
                else
                    st.isNodeList(this.el) || (this.el.style.display = 'none');
                return this;
            }, st.prototype.show = function (e) {
                if (void 0 === e && (e = 'block'), 1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].style.display = e;
                else
                    st.isNodeList(this.el) || (this.el.style.display = e);
                return this;
            }, st.prototype.remove = function () {
                if (1 <= this.el.length)
                    for (var e = 0; e < this.el.length; e++)
                        this.el[e].parentNode.removeChild(this.el[e]);
                else
                    this.el.parentNode.removeChild(this.el);
                return this;
            }, st.prototype.css = function (e) {
                if (e)
                    if (1 <= this.el.length) {
                        if (!e.includes(':'))
                            return this.el[0].style[e];
                        for (var t = 0; t < this.el.length; t++)
                            this.el[t].setAttribute('style', e);
                    } else {
                        if (!e.includes(':'))
                            return this.el.style[e];
                        this.el.setAttribute('style', e);
                    }
                return this;
            }, st.prototype.offset = function () {
                return 1 <= this.el.length ? this.el[0].getBoundingClientRect() : this.el.getBoundingClientRect();
            }, st.prototype.prop = function (e, t) {
                if (1 <= this.el.length)
                    for (var o = 0; o < this.el.length; o++)
                        this.el[o][e] = t;
                else
                    this.el[e] = t;
                return this;
            }, st.prototype.removeClass = function (e) {
                if (1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                else
                    this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                return this;
            }, st.prototype.addClass = function (e) {
                if (1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += ' ' + e;
                else
                    this.el.classList ? this.el.classList.add(e) : this.el.className += ' ' + e;
                return this;
            }, st.prototype.on = function (r, s, i) {
                var e = this;
                if ('string' != typeof s)
                    if ('HTML' === this.el.nodeName && 'load' === r || 'resize' === r || 'scroll' === r)
                        switch (r) {
                        case 'load':
                            window.onload = s;
                            break;
                        case 'resize':
                            window.onresize = s;
                            break;
                        case 'scroll':
                            window.onscroll = s;
                        }
                    else if (1 <= this.el.length)
                        for (var t = 0; t < this.el.length; t++)
                            this.el[t].addEventListener(r, s);
                    else
                        this.el instanceof Element && this.el.addEventListener(r, s);
                else if ('HTML' === this.el.nodeName && 'load' === r || 'resize' === r || 'scroll' === r)
                    switch (r) {
                    case 'load':
                        window.onload = i;
                        break;
                    case 'resize':
                        window.onresize = i;
                        break;
                    case 'scroll':
                        window.onscroll = i;
                    }
                else {
                    var l = function (o) {
                        var n = o.target;
                        e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(s), function (e, t) {
                            at['' + r + s] && delete at['' + r + s], e.addEventListener(r, i), e === n && i && i.call(e, o);
                        }), e.el[0] ? e.el[0].removeEventListener(r, l) : e.el instanceof Element && e.el.removeEventListener(r, l);
                    };
                    if (1 <= this.el.length)
                        for (t = 0; t < this.el.length; t++)
                            this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, l);
                    else
                        this.el.eventExecuted = !1, !this.el.eventExecuted && this.el instanceof Element && (at['' + r + s] || (at['' + r + s] = !0, this.el.addEventListener(r, l)));
                }
                return this;
            }, st.prototype.off = function (e, t) {
                if (1 <= this.el.length)
                    for (var o = 0; o < this.el.length; o++)
                        this.el[o].removeEventListener(e, t);
                else
                    this.el.removeEventListener(e, t);
                return this;
            }, st.prototype.one = function (t, o) {
                var n = this;
                if (1 <= this.el.length)
                    for (var e = 0; e < this.el.length; e++)
                        this.el[e].addEventListener(t, function (e) {
                            e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0);
                        });
                else {
                    var r = function (e) {
                        e.stopPropagation(), o(), n.off(t, r);
                    };
                    this.el.addEventListener(t, r);
                }
                return this;
            }, st.prototype.trigger = function (e) {
                var t = new CustomEvent(e, { customEvent: 'yes' });
                return this.el.dispatchEvent(t), this;
            }, st.prototype.focus = function () {
                return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this;
            }, st.prototype.attr = function (e, t) {
                return 1 <= this.el.length ? t ? ('class' === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t ? ('class' === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el.getAttribute(e);
            }, st.prototype.html = function (e) {
                if (null == e)
                    return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
                if (1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].innerHTML = e;
                else
                    this.el.innerHTML = e;
                return this;
            }, st.prototype.append = function (o) {
                if ('string' != typeof o || o.includes('<') || o.includes('>'))
                    if (Array.isArray(o)) {
                        var n = this;
                        Array.prototype.forEach.call(o, function (e, t) {
                            document.querySelector(n.selector).appendChild(new st(e, 'ce').el);
                        });
                    } else if ('string' == typeof o || Array.isArray(o))
                        if ('string' == typeof this.selector)
                            document.querySelector(this.selector).appendChild(new st(o, 'ce').el);
                        else if (this.useEl) {
                            var r = document.createDocumentFragment(), s = !(!o.includes('<th') && !o.includes('<td'));
                            if (s) {
                                var e = o.split(' ')[0].split('<')[1];
                                r.appendChild(document.createElement(e)), r.firstChild.innerHTML = o;
                            }
                            Array.prototype.forEach.call(this.el, function (e, t) {
                                s ? e.appendChild(r.firstChild) : e.appendChild(new st(o, 'ce').el);
                            });
                        } else
                            this.selector.appendChild(new st(o, 'ce').el);
                    else if ('string' == typeof this.selector)
                        document.querySelector(this.selector).appendChild(o);
                    else if (1 <= o.length)
                        for (var t = 0; t < o.length; t++)
                            this.selector.appendChild(o[t]);
                    else
                        this.selector.appendChild(o);
                else
                    this.el.insertAdjacentText('beforeend', o);
                return this;
            }, st.prototype.text = function (o) {
                if (this.el) {
                    if (1 <= this.el.length) {
                        if (!o)
                            return this.el[0].textContent;
                        Array.prototype.forEach.call(this.el, function (e, t) {
                            e.textContent = o;
                        });
                    } else {
                        if (!o)
                            return this.el.textContent;
                        this.el.textContent = o;
                    }
                    return this;
                }
            }, st.prototype.data = function (o, n) {
                if (this.el.length < 1)
                    return this;
                if (!(1 <= this.el.length))
                    return r(this.el, n);
                function r(e, t) {
                    if (!t)
                        return JSON.parse(e.getAttribute('data-' + o));
                    'object' == typeof t ? e.setAttribute('data-' + o, JSON.stringify(t)) : e.setAttribute('data-' + o, t);
                }
                return Array.prototype.forEach.call(this.el, function (e, t) {
                    r(e, n);
                }), this;
            }, st.prototype.height = function (e) {
                this.el.length && (this.el = this.el[0]);
                for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('padding-top').split('px')[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('padding-bottom').split('px')[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('margin-top').split('px')[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('margin-bottom').split('px')[0]), s = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('height').split('px')[0]), i = [
                            t,
                            o,
                            n,
                            r
                        ], l = 0, a = 0; a < i.length; a++)
                    0 < i[a] && (l += i[a]);
                if (!e)
                    return this.selector === document ? s : this.el.clientHeight - l;
                var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : 'px', d = 'number' == typeof e ? e : parseInt(e.toString().split(c)[0]);
                return (c && 'px' === c || '%' === c || 'em' === c || 'rem' === c) && (0 < d ? this.el.style.height = l + d + c : 'auto' === e && (this.el.style.height = e)), this;
            }, st.prototype.find = function (o) {
                var n = [];
                if (o) {
                    if ('string' == typeof o) {
                        var e = '.' === o.split('')[0], t = '#' === o.split('')[0];
                        if (e || t) {
                            var r = e ? 'classList' : 'id';
                            Array.prototype.forEach.call(this.el.childNodes, function (e, t) {
                                'function' == typeof e[r].includes && e[r].includes(o.split(o.split('')[0])[1]) ? n.push(e) : e[r] && e[r].contains(o.split(o.split('')[0])[1]) && n.push(e);
                            });
                        } else
                            Array.prototype.forEach.call(this.el.childNodes, function (e, t) {
                                e.tagName.toLowerCase() === o && n.push(e);
                            });
                    }
                    this.el = n, this.useEl = !0;
                }
                return this;
            }, st.prototype.each = function (e) {
                var t = !1;
                return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this;
            }, st.prototype.parent = function (o) {
                var n = [];
                if (Object.prototype.toString.call(this.el).includes('NodeList') ? Array.prototype.forEach.call(this.el, function (e, t) {
                        n.push(e.parentNode);
                    }) : n.push(this.el.parentNode), n = n.filter(function (e, t, o) {
                        return o.indexOf(e) === t;
                    }), o) {
                    var r = [];
                    n.forEach(function (e) {
                        if (o.includes('.'))
                            for (var t = 0; t < e.classList.length; t++)
                                e.classList[t].includes(o.split('.')[1]) && r.push(e);
                        else
                            e.id === o.split('#')[1] && r.push(e);
                    }), n = r;
                }
                return this.el = n, this;
            }, st.prototype.is = function (e) {
                return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e);
            }, st.prototype.hasClass = function (e) {
                return void 0 === this.el.length ? this.el.classList.contains(e) : this.el[0].classList.contains(e);
            }, st.prototype.filter = function (e) {
                return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this;
            }, st.prototype.replaceWith = function (o) {
                return 'string' != typeof this.selector ? this.el.outerHTML = o : Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (e, t) {
                    e.outerHTML = o;
                }), this;
            }, st.prototype.prepend = function (o) {
                return Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (e, t) {
                    e.insertBefore(new st(o, 'ce').el, e.firstChild);
                }), this;
            }, st.prototype.prev = function (e) {
                return this.el = st.prevNextHelper('previousElementSibling', this.selector, e), this;
            }, st.prototype.next = function (e) {
                return this.el = st.prevNextHelper('nextElementSibling', this.selector, e), this;
            }, st.prototype.before = function (o) {
                return Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (e, t) {
                    e.insertAdjacentHTML('beforebegin', o);
                }), this;
            }, st.prototype.after = function (o) {
                return Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (e, t) {
                    e.insertAdjacentHTML('afterend', o);
                }), this;
            }, st.prototype.siblings = function () {
                var t = this;
                return Array.prototype.filter.call(this.el[0].parentNode.children, function (e) {
                    return e !== t.el[0];
                });
            }, st.prototype.outerHeight = function () {
                if ('string' == typeof this.selector)
                    return document.querySelector(this.selector).offsetHeight;
                Array.prototype.forEach.call(this.selector, function (e, t) {
                    return e.offsetHeight;
                });
            }, st.prototype.animate = function (i, l) {
                var a, c = this;
                for (var e in (this.el = document.querySelector(this.selector), i))
                    a = e, function () {
                        var e = parseInt(i[a]), t = i[a].split(parseInt(i[a]))[1] ? i[a].split(parseInt(i[a]))[1] : 'px', o = '\n                      @keyframes slide-' + ('top' === a ? 'up' : 'down') + '-custom {\n                          0% {\n                              ' + ('top' === a ? 'top' : 'bottom') + ': ' + ('top' === a ? c.el.getBoundingClientRect().top : window.innerHeight) + 'px !important;\n                          }\n                          100% {\n                              ' + ('top' === a ? 'top' : 'bottom') + ': ' + (e + t) + ';\n                          }\n                      }\n                      @-webkit-keyframes slide-' + ('top' === a ? 'up' : 'down') + '-custom {\n                          0% {\n                              ' + ('top' === a ? 'top' : 'bottom') + ': ' + ('top' === a ? c.el.getBoundingClientRect().top : window.innerHeight) + 'px !important;\n                          }\n                          100% {\n                              ' + ('top' === a ? 'top' : 'bottom') + ': ' + (e + t) + ';\n                          }\n                      }\n                      @-moz-keyframes slide-' + ('top' === a ? 'up' : 'down') + '-custom {\n                          0% {\n                              ' + ('top' === a ? 'top' : 'bottom') + ': ' + ('top' === a ? c.el.getBoundingClientRect().top : window.innerHeight) + 'px !important;\n                          }\n                          100% {\n                              ' + ('top' === a ? 'top' : 'bottom') + ': ' + (e + t) + ';\n                          }\n                      }\n                      ', n = document.head.querySelector('#onetrust-style');
                        if (n)
                            n.innerHTML += o;
                        else {
                            var r = document.createElement('style');
                            r.id = 'onetrust-legacy-style', r.type = 'text/css', r.innerHTML = o, document.head.appendChild(r);
                        }
                        if (st.browser().type = st.browser().version <= 8) {
                            var s = 'top' === a ? '-webkit-animation: slide-up-custom ' : '-webkit-animation: slide-down-custom ' + l + 'ms ease-out forwards;';
                            c.el.setAttribute('style', s);
                        } else
                            c.el.style.animationName = 'top' === a ? 'slide-up-custom' : 'slide-down-custom', c.el.style.animationDuration = l + 'ms', c.el.style.animationFillMode = 'forwards', c.el.style.animationTimingFunction = 'ease-out';
                    }();
                return this;
            }, st.prototype.wrap = function (i) {
                return Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (e, t) {
                    var o, n = st.browser().type.toLowerCase(), r = st.browser().version;
                    if (r < 10 && 'safari' === n || 'chrome' === n && r <= 44 || r <= 40 && 'firefox' === n) {
                        var s = document.implementation.createHTMLDocument();
                        s.body.innerHTML = i, o = s.body.children[0];
                    } else
                        o = document.createRange().createContextualFragment(i).firstChild;
                    e.parentNode.insertBefore(o, e), o.appendChild(e);
                }), this;
            }, st.prototype.scrollTop = function () {
                return this.el.scrollTop;
            }, st);
            function st(e, t) {
                switch (void 0 === t && (t = ''), this.selector = e, this.useEl = !1, t) {
                case 'ce':
                    var o = st.browser().type.toLowerCase(), n = st.browser().version;
                    if (n < 10 && 'safari' === o || 'chrome' === o && n <= 44 || n <= 40 && 'firefox' === o) {
                        var r = document.implementation.createHTMLDocument();
                        r.body.innerHTML = e, this.el = r.body.children[0];
                    } else {
                        var s = document.createRange().createContextualFragment(e);
                        this.el = s.firstChild;
                    }
                    this.length = 1;
                    break;
                case '':
                    this.el = e === document || e === window ? document.documentElement : 'string' != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || 'string' != typeof e ? 1 : this.el.length;
                    break;
                default:
                    this.length = 0;
                }
            }
            function it(e, t) {
                return void 0 === t && (t = ''), new rt(e, t);
            }
            var lt, at = {}, ct = (dt.prototype.addLogoUrls = function () {
                    lt.checkMobileOfflineRequest(lt.getBannerVersionUrl()) || (Ze.mobileOnlineURL.push(lt.updateCorrectUrl(Xe.optanonLogo)), Ze.mobileOnlineURL.push(lt.updateCorrectUrl(Xe.oneTrustFtrLogo)));
                }, dt.prototype.getCookieLabel = function (e, t, o) {
                    if (void 0 === o && (o = !0), !e)
                        return '';
                    var n = e.Name;
                    return t && (n = '<a href="' + (o ? 'http://cookiepedia.co.uk/cookies/' : 'http://cookiepedia.co.uk/host/') + e.Name + '" rel="noopener" target="_blank" style="text-decoration:underline;">' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + Xe.NewWinTxt + '</span></a>'), n;
                }, dt.prototype.getBannerSDKAssestsUrl = function () {
                    return this.getBannerVersionUrl() + '/assets';
                }, dt.prototype.getBannerVersionUrl = function () {
                    var e = Ze.bannerScriptElement.getAttribute('src');
                    return '' + (-1 !== e.indexOf('/consent/') ? e.split('consent/')[0] + 'scripttemplates/' : e.split('otSDKStub')[0]) + Ge.moduleInitializer.Version;
                }, dt.prototype.checkMobileOfflineRequest = function (e) {
                    return Ge.moduleInitializer.MobileSDK && new RegExp('^file://', 'i').test(e);
                }, dt.prototype.updateCorrectIABUrl = function (e) {
                    if (Ge.moduleInitializer.ScriptType === fe) {
                        var t = tt.getURL(e), o = Ze.bannerScriptElement, n = o && o.getAttribute('src') ? tt.getURL(o.getAttribute('src')) : null;
                        n && t && n.hostname !== t.hostname && (e = (e = (n = '' + Ze.bannerDataParentURL) + t.pathname.split('/').pop().replace(/(^\/?)/, '/')).replace(t.hostname, n.hostname));
                    }
                    return e;
                }, dt.prototype.updateCorrectUrl = function (e, t) {
                    void 0 === t && (t = !1);
                    var o = tt.getURL(e), n = Ze.bannerScriptElement, r = n && n.getAttribute('src') ? tt.getURL(n.getAttribute('src')) : null;
                    if (r && o && r.hostname !== o.hostname)
                        if (Ge.moduleInitializer.ScriptType === fe) {
                            if (t)
                                return e;
                            e = (r = Ze.bannerDataParentURL + '/' + Ze.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, '/');
                        } else
                            e = e.replace(o.hostname, r.hostname);
                    return e;
                }, dt.prototype.isBundleOrStackActive = function (n, r) {
                    void 0 === r && (r = null);
                    var s = Oe.oneTrustIABConsent, i = !0;
                    r = r || Oe.groupsConsent;
                    for (var l = 0, e = function () {
                                var t = n.SubGroups[l];
                                if (t.Type === He)
                                    (-1 < (e = tt.findIndex(r, function (e) {
                                        return e.split(':')[0] === t.CustomGroupId;
                                    })) && '0' === r[e].split(':')[1] || !r.length) && (i = !1);
                                else {
                                    var e, o = t.Type === qe ? s.specialFeatures : s.purpose;
                                    (-1 < (e = tt.findIndex(o, function (e) {
                                        return e.split(':')[0] === t.IabGrpId;
                                    })) && 'false' === o[e].split(':')[1] || !o.length) && (i = !1);
                                }
                                l++;
                            }; e(), i && l < n.SubGroups.length;);
                    return i;
                }, dt.prototype.otFetchOfflineFile = function (r) {
                    return a(this, void 0, void 0, function () {
                        var t, o, n;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return r = r.replace('.json', '.js'), t = r.split('/'), o = t[t.length - 1], n = o.split('.js')[0], [
                                    4,
                                    new Promise(function (e) {
                                        function t() {
                                            e(window[n]);
                                        }
                                        lt.jsonp(r, t, t);
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    e.sent()
                                ];
                            }
                        });
                    });
                }, dt.prototype.jsonp = function (e, t, o) {
                    lt.checkMobileOfflineRequest(e) || Ze.mobileOnlineURL.push(e);
                    var n = document.createElement('script'), r = document.getElementsByTagName('head')[0];
                    function s() {
                        t();
                    }
                    n.onreadystatechange = function () {
                        'loaded' !== this.readyState && 'complete' !== this.readyState || s();
                    }, n.onload = s, n.onerror = function () {
                        o();
                    }, n.type = 'text/javascript', n.async = !0, n.src = e, Oe.crossOrigin && n.setAttribute('crossorigin', Oe.crossOrigin), r.appendChild(n);
                }, dt.prototype.isCookiePolicyPage = function (e) {
                    var t = !1, o = tt.removeURLPrefixes(window.location.href), n = it('<div></div>', 'ce').el;
                    it(n).html(e);
                    for (var r = n.querySelectorAll('a'), s = 0; s < r.length; s++)
                        if (tt.removeURLPrefixes(r[s].href) === o) {
                            t = !0;
                            break;
                        }
                    return t;
                }, dt.prototype.isBannerVisible = function () {
                    var e = !1, t = document.getElementById('onetrust-banner-sdk');
                    return t && t.getAttribute('style') && (e = -1 !== t.getAttribute('style').indexOf('display:none')), e;
                }, dt.prototype.hideBanner = function () {
                    var e = this;
                    Oe.bnrAnimationInProg ? setTimeout(function () {
                        return e.hideBanner();
                    }, 100) : it('#onetrust-banner-sdk').fadeOut(400);
                }, dt.prototype.resetFocusToBody = function () {
                    document.activeElement && document.activeElement.blur();
                }, dt.prototype.getDuration = function (e) {
                    var t = e.Length, o = e.DurationType, n = '';
                    if (!t || 0 === parseInt(t))
                        return Xe.LfSpanSecs;
                    var r = parseInt(t);
                    if (o) {
                        var s = 1 < (r = this.round_to_precision(r / o, 0.5)) ? Ve[o] + 's' : Ve[o];
                        n = r + ' ' + Xe[s];
                    } else
                        n = this.getDurationText(r);
                    return n;
                }, dt.prototype.isDateCurrent = function (e) {
                    var t = e.split('/'), o = parseInt(t[1]), n = parseInt(t[0]), r = parseInt(t[2]), s = new Date(), i = s.getDate(), l = s.getFullYear(), a = s.getMonth() + 1;
                    return l < r || r === l && a < n || r === l && n === a && i <= o;
                }, dt.prototype.insertFooterLogo = function (e) {
                    var t = it(e).el;
                    if (t.length && Xe.oneTrustFtrLogo) {
                        var o = lt.updateCorrectUrl(Xe.oneTrustFtrLogo);
                        lt.checkMobileOfflineRequest(lt.getBannerVersionUrl()) && (o = tt.getRelativeURL(o, !0, !0));
                        for (var n = 0; n < t.length; n++)
                            -1 < o.indexOf('poweredBy_cp_logo') && it(t[n]).attr('href', 'https://www.cookiepro.com/products/cookie-consent/'), it(t[n]).attr('style', 'background-image: url("' + o + '")'), it(t[n]).attr('aria-label', 'Powered by OneTrust ' + Xe.NewWinTxt);
                    }
                }, dt.prototype.getDurationText = function (e) {
                    return 365 <= e ? (e /= 365, (e = this.round_to_precision(e, 0.5)) + ' ' + (1 < e ? Xe.LfSpnYrs : Xe.LfSpnYr)) : e + ' ' + (1 < e ? Xe.PCenterVendorListLifespanDays : Xe.PCenterVendorListLifespanDay);
                }, dt.prototype.round_to_precision = function (e, t) {
                    var o = +e + (void 0 === t ? 0.5 : t / 2);
                    return o - o % (void 0 === t ? 1 : +t);
                }, dt);
            function dt() {
            }
            var ut, pt = {
                    P_Content: '#ot-pc-content',
                    P_Logo: '.ot-pc-logo',
                    P_Title: '#ot-pc-title',
                    P_Policy_Txt: '#ot-pc-desc',
                    P_Vendor_Title_Elm: '#ot-lst-title',
                    P_Vendor_Title: '#ot-lst-title span',
                    P_Manage_Cookies_Txt: '#ot-category-title',
                    P_Label_Txt: '.ot-label-txt',
                    P_Category_Header: '.ot-cat-header',
                    P_Category_Grp: '.ot-cat-grp',
                    P_Category_Item: '.ot-cat-item',
                    P_Vendor_List: '#ot-pc-lst',
                    P_Vendor_Content: '#ot-lst-cnt',
                    P_Vendor_Container: '#ot-ven-lst',
                    P_Ven_Bx: 'ot-ven-box',
                    P_Ven_Name: '.ot-ven-name',
                    P_Ven_Link: '.ot-ven-link',
                    P_Ven_Ctgl: 'ot-ven-ctgl',
                    P_Ven_Ltgl: 'ot-ven-litgl',
                    P_Ven_Ltgl_Only: 'ot-ven-litgl-only',
                    P_Ven_Opts: '.ot-ven-opts',
                    P_Triangle: '#ot-anchor',
                    P_Fltr_Modal: '#ot-fltr-modal',
                    P_Fltr_Options: '.ot-fltr-opts',
                    P_Fltr_Option: '.ot-fltr-opt',
                    P_Select_Cntr: '#ot-sel-blk',
                    P_Host_Cntr: '#ot-host-lst',
                    P_Host_Hdr: '.ot-host-hdr',
                    P_Host_Desc: '.ot-host-desc',
                    P_Li_Hdr: '.ot-pli-hdr',
                    P_Li_Title: '.ot-li-title',
                    P_Sel_All_Vendor_Consent_Handler: '#select-all-vendor-leg-handler',
                    P_Sel_All_Vendor_Leg_Handler: '#select-all-vendor-groups-handler',
                    P_Sel_All_Host_Handler: '#select-all-hosts-groups-handler',
                    P_Host_Title: '.ot-host-name',
                    P_Leg_Select_All: '.ot-sel-all-hdr',
                    P_Leg_Header: '.ot-li-hdr',
                    P_Acc_Header: '.ot-acc-hdr',
                    P_Cnsnt_Header: '.ot-consent-hdr',
                    P_Tgl_Cntr: '.ot-tgl-cntr',
                    P_CBx_Cntr: '.ot-chkbox',
                    P_Sel_All_Host_El: 'ot-selall-hostcntr',
                    P_Sel_All_Vendor_Consent_El: 'ot-selall-vencntr',
                    P_Sel_All_Vendor_Leg_El: 'ot-selall-licntr',
                    P_c_Name: 'ot-c-name',
                    P_c_Host: 'ot-c-host',
                    P_c_Duration: 'ot-c-duration',
                    P_c_Type: 'ot-c-type',
                    P_c_Category: 'ot-c-category',
                    P_c_Desc: 'ot-c-description',
                    P_Host_View_Cookies: '.ot-host-expand',
                    P_Host_Opt: '.ot-host-opt',
                    P_Host_Info: '.ot-host-info',
                    P_Arrw_Cntr: '.ot-arw-cntr',
                    P_Acc_Txt: '.ot-acc-txt',
                    P_Vendor_CheckBx: 'ot-ven-chkbox',
                    P_Vendor_LegCheckBx: 'ot-ven-leg-chkbox',
                    P_Host_UI: 'ot-hosts-ui',
                    P_Host_Cnt: 'ot-host-cnt',
                    P_Host_Bx: 'ot-host-box',
                    P_Ven_Dets: '.ot-ven-dets',
                    P_Ven_Disc: '.ot-ven-disc',
                    P_Gven_List: '#ot-gn-venlst',
                    P_Close_Btn: '.ot-close-icon',
                    P_Ven_Lst_Cntr: '.ot-vlst-cntr',
                    P_Host_Lst_cntr: '.ot-hlst-cntr',
                    P_Sub_Grp_Cntr: '.ot-subgrp-cntr',
                    P_Subgrp_Desc: '.ot-subgrp-desc',
                    P_Subgp_ul: '.ot-subgrps',
                    P_Subgrp_li: '.ot-subgrp',
                    P_Subgrp_Tgl_Cntr: '.ot-subgrp-tgl',
                    P_Grp_Container: '.ot-grps-cntr',
                    P_Privacy_Txt: '#ot-pvcy-txt',
                    P_Privacy_Hdr: '#ot-pvcy-hdr',
                    P_Active_Menu: 'ot-active-menu',
                    P_Desc_Container: '.ot-desc-cntr',
                    P_Tab_Grp_Hdr: 'ot-grp-hdr1',
                    P_Search_Cntr: '#ot-search-cntr',
                    P_Clr_Fltr_Txt: '#clear-filters-handler',
                    P_Acc_Grp_Desc: '.ot-acc-grpdesc',
                    P_Acc_Container: '.ot-acc-grpcntr',
                    P_Line_Through: 'line-through'
                }, kt = {
                    P_Grp_Container: '.groups-container',
                    P_Content: '#ot-content',
                    P_Category_Header: '.category-header',
                    P_Desc_Container: '.description-container',
                    P_Label_Txt: '.label-text',
                    P_Acc_Grp_Desc: '.ot-accordion-group-pc-container',
                    P_Leg_Int_Hdr: '.leg-int-header',
                    P_Not_Always_Active: 'p:not(.ot-always-active)',
                    P_Category_Grp: '.category-group',
                    P_Category_Item: '.category-item',
                    P_Sub_Grp_Cntr: '.cookie-subgroups-container',
                    P_Acc_Container: '.ot-accordion-pc-container',
                    P_Close_Btn: '.pc-close-button',
                    P_Logo: '.pc-logo',
                    P_Title: '#pc-title',
                    P_Privacy_Txt: '#privacy-text',
                    P_Privacy_Hdr: '#pc-privacy-header',
                    P_Policy_Txt: '#pc-policy-text',
                    P_Manage_Cookies_Txt: '#manage-cookies-text',
                    P_Vendor_Title: '#vendors-list-title',
                    P_Vendor_Title_Elm: '#vendors-list-title',
                    P_Vendor_List: '#vendors-list',
                    P_Vendor_Content: '#vendor-list-content',
                    P_Vendor_Container: '#vendors-list-container',
                    P_Ven_Bx: 'vendor-box',
                    P_Ven_Name: '.vendor-title',
                    P_Ven_Link: '.vendor-privacy-notice',
                    P_Ven_Ctgl: 'ot-vendor-consent-tgl',
                    P_Ven_Ltgl: 'ot-leg-int-tgl',
                    P_Ven_Ltgl_Only: 'ot-leg-int-tgl-only',
                    P_Ven_Opts: '.vendor-options',
                    P_Triangle: '#ot-triangle',
                    P_Fltr_Modal: '#ot-filter-modal',
                    P_Fltr_Options: '.ot-group-options',
                    P_Fltr_Option: '.ot-group-option',
                    P_Select_Cntr: '#select-all-container',
                    P_Host_Cntr: '#hosts-list-container',
                    P_Host_Hdr: '.host-info',
                    P_Host_Desc: '.host-description',
                    P_Host_Opt: '.host-option-group',
                    P_Host_Info: '.vendor-host',
                    P_Ven_Dets: '.vendor-purpose-groups',
                    P_Ven_Disc: '.ot-ven-disc',
                    P_Gven_List: '#ot-gn-venlst',
                    P_Arrw_Cntr: '.ot-arrow-container',
                    P_Li_Hdr: '.leg-int-header',
                    P_Li_Title: '.leg-int-title',
                    P_Acc_Txt: '.accordion-text',
                    P_Tgl_Cntr: '.ot-toggle-group',
                    P_CBx_Cntr: '.ot-chkbox-container',
                    P_Host_Title: '.host-title',
                    P_Leg_Select_All: '.leg-int-sel-all-hdr',
                    P_Leg_Header: '.leg-int-hdr',
                    P_Cnsnt_Header: '.consent-hdr',
                    P_Acc_Header: '.accordion-header',
                    P_Sel_All_Vendor_Consent_Handler: '#select-all-vendor-leg-handler',
                    P_Sel_All_Vendor_Leg_Handler: '#select-all-vendor-groups-handler',
                    P_Sel_All_Host_Handler: '#select-all-hosts-groups-handler',
                    P_Sel_All_Host_El: 'select-all-hosts-input-container',
                    P_Sel_All_Vendor_Consent_El: 'select-all-vendors-input-container',
                    P_Sel_All_Vendor_Leg_El: 'select-all-vendors-leg-input-container',
                    P_c_Name: 'cookie-name-container',
                    P_c_Host: 'cookie-host-container',
                    P_c_Duration: 'cookie-duration-container',
                    P_c_Type: 'cookie-type-container',
                    P_c_Category: 'cookie-category-container',
                    P_c_Desc: 'cookie-description-container',
                    P_Host_View_Cookies: '.host-view-cookies',
                    P_Vendor_CheckBx: 'vendor-chkbox',
                    P_Vendor_LegCheckBx: 'vendor-leg-chkbox',
                    P_Host_UI: 'hosts-list',
                    P_Host_Cnt: 'host-list-content',
                    P_Host_Bx: 'host-box',
                    P_Ven_Lst_Cntr: '.category-vendors-list-container',
                    P_Host_Lst_cntr: '.category-host-list-container',
                    P_Subgrp_Desc: '.cookie-subgroups-description-legal',
                    P_Subgp_ul: '.cookie-subgroups',
                    P_Subgrp_li: '.cookie-subgroup',
                    P_Subgrp_Tgl_Cntr: '.cookie-subgroup-toggle',
                    P_Active_Menu: 'active-group',
                    P_Tab_Grp_Hdr: 'group-toggle',
                    P_Search_Cntr: '#search-container',
                    P_Clr_Fltr_Txt: '#clear-filters-handler p'
                };
            function ht() {
            }
            var yt, ft = new (ht.prototype.initializeBannerVariables = function (e) {
                    var t, o = e.DomainData;
                    Ze.iabType = o.IabType, t = o.PCTemplateUpgrade, ut = t ? pt : kt, Ze.init(e), Oe.showGeneralVendors = Xe.GeneralVendorsEnabled && Xe.GeneralVendors.length && Xe.PCTemplateUpgrade, Oe.genVenOptOutEnabled = Oe.showGeneralVendors && Xe.GenVenOptOut, lt.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag();
                }, ht.prototype.initializeVendorInOverriddenVendors = function (e) {
                    Xe.OverriddenVendors[e] = {
                        disabledCP: [],
                        disabledLIP: [],
                        active: !0,
                        legInt: !1,
                        consent: !1
                    };
                }, ht.prototype.applyGlobalRestrictionsonNewVendor = function (e, t, o, n) {
                    var r = Xe.GlobalRestrictions;
                    switch (Xe.OverriddenVendors[t] || this.initializeVendorInOverriddenVendors(t), r[o]) {
                    case D.Disabled:
                        n ? Xe.OverriddenVendors[t].disabledCP.push(o) : Xe.OverriddenVendors[t].disabledLIP.push(o);
                        break;
                    case D.Consent:
                        n ? Xe.OverriddenVendors[t].consent = !0 : (Xe.OverriddenVendors[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                        break;
                    case D.LegInt:
                        n ? (Xe.OverriddenVendors[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : Xe.OverriddenVendors[t].legInt = !0;
                    }
                }, ht.prototype.checkFlexiblePurpose = function (e, t, o, n) {
                    e.flexiblePurposes.includes(o) ? (n ? Xe.OverriddenVendors[t].legInt = !0 : Xe.OverriddenVendors[t].consent = !0, Xe.Publisher.restrictions[o][t] = n ? D.LegInt : D.Consent) : Xe.Publisher.restrictions[o][t] = D.Disabled;
                }, ht.prototype.removeInActiveVendorsForTcf = function (s) {
                    var i = this, l = Oe.iabData.vendorListVersion, e = Xe.Publisher, a = Xe.GlobalRestrictionEnabled, c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
                    Object.keys(s.vendors).forEach(function (t) {
                        var o = s.vendors[t];
                        a && o.iab2GVLVersion > l && (o.purposes.forEach(function (e) {
                            i.applyGlobalRestrictionsonNewVendor(o, t, e, !0);
                        }), o.legIntPurposes.forEach(function (e) {
                            i.applyGlobalRestrictionsonNewVendor(o, t, e, !1);
                        }));
                        var e = !1;
                        Xe.IsIabThirdPartyCookieEnabled || (Ze.legIntSettings.PAllowLI ? Xe.OverriddenVendors[t] && !Xe.OverriddenVendors[t].active && (e = !0) : -1 < Xe.Vendors.indexOf(Number(t)) && (e = !0));
                        var n = !o.purposes.length;
                        Ze.legIntSettings.PAllowLI && Xe.OverriddenVendors[t] && !Xe.OverriddenVendors[t].consent && (n = !0);
                        var r = !0;
                        Ze.legIntSettings.PAllowLI && (!o.legIntPurposes.length || Xe.OverriddenVendors[t] && !Xe.OverriddenVendors[t].legInt || (r = !1)), !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !a && c && o.iab2GVLVersion > l && (e = !0), e && delete s.vendors[t];
                    });
                }, ht.prototype.setPublisherRestrictions = function () {
                    var e = Xe.Publisher;
                    if (e && e.restrictions) {
                        var i = this.iabStringSDK(), t = e.restrictions, l = Oe.iabData, a = Oe.oneTrustIABConsent.vendorList.vendors;
                        Object.keys(t).forEach(function (n) {
                            var r, s = t[n], e = Ze.iabGroups.purposes[n];
                            e && (r = {
                                description: e.description,
                                purposeId: e.id,
                                purposeName: e.name
                            }), Object.keys(s).forEach(function (e) {
                                if (Oe.vendorsSetting[e]) {
                                    var t = Oe.vendorsSetting[e].arrIndex;
                                    1 === s[e] && -1 === a[e].purposes.indexOf(Number(n)) ? l.vendors[t].purposes.push(r) : 2 === s[e] && -1 === a[e].legIntPurposes.indexOf(Number(n)) && l.vendors[t].legIntPurposes.push(r);
                                    var o = i.purposeRestriction(Number(n), s[e]);
                                    Oe.tcModel.publisherRestrictions.add(Number(e), o);
                                }
                            });
                        });
                    }
                }, ht.prototype.populateVendorListTCF = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o, n, r, s, i, l, a, c;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return t = this.iabStringSDK(), o = Oe.iabData, n = lt.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), lt.checkMobileOfflineRequest(lt.getBannerVersionUrl()) ? [
                                    3,
                                    1
                                ] : (Ze.mobileOnlineURL.push(n), s = t.gvl(n, Oe.gvlObj), [
                                    3,
                                    3
                                ]);
                            case 1:
                                return l = (i = t).gvl, a = [null], [
                                    4,
                                    lt.otFetchOfflineFile(tt.getRelativeURL(n, !0))
                                ];
                            case 2:
                                s = l.apply(i, a.concat([e.sent()])), e.label = 3;
                            case 3:
                                return this.removeInActiveVendorsForTcf(s), Oe.oneTrustIABConsent.vendorList = s, this.assignIABDataWithGlobalVendorList(s), c = Oe, [
                                    4,
                                    t.tcModel(s)
                                ];
                            case 4:
                                c.tcModel = e.sent(), r && this.setPublisherRestrictions(), Oe.tcModel.cmpId = parseInt(o.cmpId), Oe.tcModel.cmpVersion = parseInt(o.cmpVersion);
                                try {
                                    Oe.tcModel.consentLanguage = Oe.consentLanguage;
                                } catch (e) {
                                    Oe.tcModel.consentLanguage = 'EN';
                                }
                                return Oe.tcModel.consentScreen = parseInt(o.consentScreen), Oe.tcModel.isServiceSpecific = r, Oe.tcModel.purposeOneTreatment = Ze.purposeOneTreatment, Ge.moduleInitializer.PublisherCC ? Oe.tcModel.publisherCountryCode = Ge.moduleInitializer.PublisherCC : Oe.userLocation.country && (Oe.tcModel.publisherCountryCode = Oe.userLocation.country), Oe.cmpApi = t.cmpApi(Oe.tcModel.cmpId, Oe.tcModel.cmpVersion, r, Xe.UseGoogleVendors ? {
                                    getTCData: this.addtlConsentString,
                                    getInAppTCData: this.addtlConsentString,
                                    addEventListener: this.addtlConsentString
                                } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2];
                            }
                        });
                    });
                }, ht.prototype.resetTCModel = function () {
                    var e = this.iabStringSDK(), t = Oe.tcModel.clone();
                    if (t.unsetAll(), Ze.legIntSettings.PAllowLI) {
                        var o = Ze.consentableIabGrps.filter(function (e) {
                                return e.HasLegIntOptOut && e.Type === Fe;
                            }).map(function (e) {
                                return parseInt(Ze.iabGrpIdMap[e.CustomGroupId]);
                            }), n = Object.keys(Oe.vendorsSetting).filter(function (e) {
                                return Oe.vendorsSetting[e].legInt;
                            }).map(function (e) {
                                return parseInt(e);
                            });
                        t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific && t.publisherLegitimateInterests.set(o);
                    }
                    Oe.cmpApi.update(e.tcString().encode(t), !0);
                }, ht.prototype.addtlConsentString = function (e, t, o) {
                    t && (t.addtlConsent = '' + Oe.addtlConsentVersion + (Oe.isAddtlConsent ? Oe.addtlVendors.vendorConsent.join('.') : '')), 'function' == typeof e ? e(t, o) : console.error('__tcfapi received invalid parameters.');
                }, ht.prototype.setIabData = function () {
                    Oe.iabData = Ge.moduleInitializer.IabV2Data, Oe.iabData.consentLanguage = Oe.consentLanguage;
                }, ht.prototype.assignIABDataWithGlobalVendorList = function (o) {
                    var r = Xe.OverriddenVendors;
                    Oe.iabData.vendorListVersion = o.vendorListVersion, Oe.iabData.vendors = [], Object.keys(o.vendors).forEach(function (n) {
                        Oe.vendorsSetting[n] = {
                            consent: !0,
                            legInt: !0,
                            arrIndex: 0
                        };
                        var e = {}, t = o.vendors[n];
                        e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = tt.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null, Ze.legIntSettings.PAllowLI && (!r[n] || r[n].legInt) && (r[n] || t.legIntPurposes.length) || (Oe.vendorsSetting[n].legInt = !1), Ze.legIntSettings.PAllowLI ? (r[n] && !r[n].consent || !r[n] && !t.purposes.length) && (Oe.vendorsSetting[n].consent = !1) : t.purposes.length || (Oe.vendorsSetting[n].consent = !1), e.features = t.features.map(function (e) {
                            var t, o = Ze.iabGroups.features[e];
                            return o && (t = {
                                description: o.description,
                                featureId: o.id,
                                featureName: o.name
                            }), t;
                        }), e.specialFeatures = o.vendors[n].specialFeatures.reduce(function (e, t) {
                            var o = Ze.iabGroups.specialFeatures[t];
                            return o && e.push({
                                description: o.description,
                                featureId: o.id,
                                featureName: o.name
                            }), e;
                        }, []), e.purposes = o.vendors[n].purposes.reduce(function (e, t) {
                            var o = Ze.iabGroups.purposes[t];
                            return !o || r[n] && r[n].disabledCP && -1 !== r[n].disabledCP.indexOf(t) || e.push({
                                description: o.description,
                                purposeId: o.id,
                                purposeName: o.name
                            }), e;
                        }, []), e.legIntPurposes = o.vendors[n].legIntPurposes.reduce(function (e, t) {
                            var o = Ze.iabGroups.purposes[t];
                            return !o || r[n] && r[n].disabledLIP && -1 !== r[n].disabledLIP.indexOf(t) || e.push({
                                description: o.description,
                                purposeId: o.id,
                                purposeName: o.name
                            }), e;
                        }, []), e.specialPurposes = t.specialPurposes.map(function (e) {
                            var t, o = Ze.iabGroups.specialPurposes[e];
                            return o && (t = {
                                description: o.description,
                                purposeId: o.id,
                                purposeName: o.name
                            }), t;
                        }), Oe.iabData.vendors.push(e), Oe.vendorsSetting[n].arrIndex = Oe.iabData.vendors.length - 1;
                    });
                }, ht.prototype.populateIABCookies = function () {
                    return a(this, void 0, void 0, function () {
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                if (!this.isIABCrossConsentEnabled())
                                    return [
                                        3,
                                        5
                                    ];
                                e.label = 1;
                            case 1:
                                return e.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]), [
                                    4,
                                    this.setIAB3rdPartyCookie(le.EU_CONSENT, '', 0, !0)
                                ];
                            case 2:
                                return e.sent(), [
                                    3,
                                    4
                                ];
                            case 3:
                                return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    3,
                                    6
                                ];
                            case 5:
                                ft.needReconsent() || this.setIABCookieData(), e.label = 6;
                            case 6:
                                return [2];
                            }
                        });
                    });
                }, ht.prototype.setIAB3rdPartyCookie = function (e, t, o, n) {
                    var r = Xe.iabThirdPartyConsentUrl;
                    try {
                        if (r && document.body)
                            return this.updateThirdPartyConsent(r, e, t, o, n);
                        throw new ReferenceError();
                    } catch (e) {
                        throw e;
                    }
                }, ht.prototype.setIABCookieData = function () {
                    Oe.oneTrustIABConsent.IABCookieValue = et.getCookie(le.EU_PUB_CONSENT);
                }, ht.prototype.updateThirdPartyConsent = function (n, r, s, i, l) {
                    return a(this, void 0, void 0, function () {
                        var t, o;
                        return d(this, function (e) {
                            return t = window.location.protocol + '//' + n + '/?name=' + r + '&value=' + s + '&expire=' + i + '&isFirstRequest=' + l, document.getElementById('onetrustIabCookie') ? (document.getElementById('onetrustIabCookie').contentWindow.location.replace(t), [2]) : ((o = document.createElement('iframe')).style.display = 'none', o.id = 'onetrustIabCookie', o.setAttribute('title', 'OneTrust IAB Cookie'), o.src = t, document.body.appendChild(o), [
                                2,
                                new Promise(function (e) {
                                    o.onload = function () {
                                        Ze.thirdPartyiFrameResolve(), Ze.thirdPartyiFrameLoaded = !0, e();
                                    }, o.onerror = function () {
                                        throw Ze.thirdPartyiFrameResolve(), Ze.thirdPartyiFrameLoaded = !0, e(), new URIError();
                                    };
                                })
                            ]);
                        });
                    });
                }, ht.prototype.setIABVendor = function (n) {
                    if (void 0 === n && (n = !0), Oe.iabData.vendors.forEach(function (e) {
                            var t = e.vendorId;
                            if (Ze.legIntSettings.PAllowLI) {
                                var o = !Oe.vendorsSetting[t].consent;
                                Oe.oneTrustIABConsent.vendors.push(t.toString() + ':' + (o ? 'false' : n)), Oe.oneTrustIABConsent.legIntVendors.push(t.toString() + ':' + Oe.vendorsSetting[t].legInt);
                            } else
                                Oe.oneTrustIABConsent.legIntVendors = [], Oe.oneTrustIABConsent.vendors.push(t.toString() + ':' + n);
                        }), Xe.UseGoogleVendors) {
                        var t = Oe.addtlVendors;
                        Object.keys(Oe.addtlVendorsList).forEach(function (e) {
                            n && (t.vendorSelected['' + e.toString()] = !0, t.vendorConsent.push('' + e.toString()));
                        });
                    }
                }, ht.prototype.setOrUpdate3rdPartyIABConsentFlag = function () {
                    var e = this.getIABCrossConsentflagData();
                    Xe.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(Xe.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && 'true' !== e || this.updateCrossConsentCookie(!1);
                }, ht.prototype.isIABCrossConsentEnabled = function () {
                    return 'true' === this.getIABCrossConsentflagData();
                }, ht.prototype.getIABCrossConsentflagData = function () {
                    return et.readCookieParam(le.OPTANON_CONSENT, ie.IS_IAB_GLOBAL);
                }, ht.prototype.setGeolocationInCookies = function () {
                    var e = et.readCookieParam(le.OPTANON_CONSENT, ie.GEO_LOCATION);
                    if (Oe.userLocation && !e && this.isAlertBoxClosedAndValid()) {
                        var t = Oe.userLocation.country + ';' + Oe.userLocation.state;
                        this.setUpdateGeolocationCookiesData(t);
                    } else
                        this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData('');
                }, ht.prototype.iabStringSDK = function () {
                    var e = Ge.moduleInitializer.otIABModuleData;
                    if (Xe.IsIabEnabled && e)
                        return {
                            gvl: e.tcfSdkRef.gvl,
                            tcModel: e.tcfSdkRef.tcModel,
                            tcString: e.tcfSdkRef.tcString,
                            cmpApi: e.tcfSdkRef.cmpApi,
                            purposeRestriction: e.tcfSdkRef.purposeRestriction
                        };
                }, ht.prototype.setUpdateGeolocationCookiesData = function (e) {
                    et.writeCookieParam(le.OPTANON_CONSENT, ie.GEO_LOCATION, e);
                }, ht.prototype.reconsentRequired = function () {
                    return (Ge.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent();
                }, ht.prototype.awaitingReconsent = function () {
                    return 'true' === et.readCookieParam(le.OPTANON_CONSENT, ie.AWAITING_RE_CONSENT);
                }, ht.prototype.needReconsent = function () {
                    var e = this.alertBoxCloseDate(), t = Xe.LastReconsentDate;
                    return e && t && new Date(t) > new Date(e);
                }, ht.prototype.removeAlertBoxCookie = function () {
                    et.setCookie(le.ALERT_BOX_CLOSED, '', 0, !0);
                }, ht.prototype.removeIab1Cookie = function () {
                    et.setCookie(O.Iab1Pub, '', 0, !0);
                }, ht.prototype.removeIab2PubCookie = function () {
                    et.setCookie(O.Iab2Pub, '', 0, !0);
                }, ht.prototype.updateCrossConsentCookie = function (e) {
                    et.writeCookieParam(le.OPTANON_CONSENT, ie.IS_IAB_GLOBAL, e);
                }, ht.prototype.alertBoxCloseDate = function () {
                    return et.getCookie(le.ALERT_BOX_CLOSED);
                }, ht.prototype.isAlertBoxClosedAndValid = function () {
                    return null !== this.alertBoxCloseDate() && !this.reconsentRequired();
                }, ht.prototype.generateLegIntButtonElements = function (e, t, o) {
                    return void 0 === o && (o = !1), '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? 'ot-leg-int-enabled ot-inactive-leg-btn' : 'ot-active-leg-btn') + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + Xe.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                       <span>' + (e ? Ze.legIntSettings.PObjectLegIntText : Ze.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button class="ot-remove-objection-handler" style="color:' + Xe.pcButtonColor + '; ' + (e ? 'display:none;' : '') + '">' + Ze.legIntSettings.PRemoveObjectionText + '</button>\n                </div>\n        ';
                }, ht.prototype.syncAlertBoxCookie = function (e) {
                    var t = Xe.ReconsentFrequencyDays;
                    et.setCookie(le.ALERT_BOX_CLOSED, e, t, !1, new Date(e));
                }, ht.prototype.syncCookieExpiry = function () {
                    if (Oe.syncRequired) {
                        var e = Xe.ReconsentFrequencyDays, t = et.getCookie(le.ALERT_BOX_CLOSED), o = et.getCookie(le.OPTANON_CONSENT);
                        et.setCookie(le.OPTANON_CONSENT, o, e, !1, new Date(t)), ft.needReconsent() && this.removeAlertBoxCookie();
                        var n = et.getCookie(le.EU_PUB_CONSENT);
                        n && (ft.isIABCrossConsentEnabled() ? ft.removeIab2PubCookie() : et.setCookie(le.EU_PUB_CONSENT, n, e, !1, new Date(t)));
                        var r = et.getCookie(le.ADDITIONAL_CONSENT_STRING);
                        r && et.setCookie(le.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t));
                    }
                }, ht.prototype.dispatchConsentEvent = function () {
                    window.dispatchEvent(new CustomEvent('OTConsentApplied', { OTConsentApplied: 'yes' }));
                }, ht)(), gt = (bt.prototype.isAlwaysActiveGroup = function (e) {
                    if (this.getGrpStatus(e)) {
                        var t = this.getGrpStatus(e).toLowerCase();
                        return e.Parent && t !== pe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === pe;
                    }
                    return !0;
                }, bt.prototype.getGrpStatus = function (e) {
                    return e && e.Status ? Ze.DNTEnabled && e.IsDntEnabled ? ie.DO_NOT_TRACK : e.Status : '';
                }, bt.prototype.getParentGroup = function (t) {
                    if (t) {
                        var e = Xe.Groups.filter(function (e) {
                            return e.OptanonGroupId === t;
                        });
                        return 0 < e.length ? e[0] : null;
                    }
                    return null;
                }, bt.prototype.checkIfGroupHasConsent = function (t) {
                    var e = Oe.groupsConsent, o = tt.findIndex(e, function (e) {
                            return e.split(':')[0] === t.CustomGroupId;
                        });
                    return -1 < o && '1' === e[o].split(':')[1];
                }, bt.prototype.checkIsActiveByDefault = function (e) {
                    if (this.getGrpStatus(e)) {
                        var t = this.getGrpStatus(e).toLowerCase();
                        return e.Parent && t !== pe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === pe || t === he || t === ke || t === ie.DO_NOT_TRACK && !Ze.DNTEnabled;
                    }
                    return !0;
                }, bt.prototype.getGroupById = function (e) {
                    for (var t = null, o = 0, n = Xe.Groups; o < n.length; o++) {
                        for (var r = n[o], s = 0, i = h(r.SubGroups, [r]); s < i.length; s++) {
                            var l = i[s];
                            if (l.CustomGroupId === e) {
                                t = l;
                                break;
                            }
                        }
                        if (t)
                            break;
                    }
                    return t;
                }, bt.prototype.getGroupByPurposeId = function (e) {
                    for (var t, o = 0, n = Xe.Groups; o < n.length; o++) {
                        for (var r = n[o], s = 0, i = h(r.SubGroups, [r]); s < i.length; s++) {
                            var l = i[s];
                            if (l.PurposeId === e) {
                                t = l;
                                break;
                            }
                        }
                        if (t)
                            break;
                    }
                    return t;
                }, bt.prototype.isSoftOptInGrp = function (e) {
                    if (e) {
                        var t = e && !e.Parent ? e : yt.getParentGroup(e.Parent);
                        return 'inactive landingpage' === yt.getGrpStatus(t).toLowerCase();
                    }
                    return !1;
                }, bt.prototype.isOptInGrp = function (e) {
                    return !!e && 'inactive' === yt.getGrpStatus(e).toLowerCase();
                }, bt);
            function bt() {
            }
            var mt, Ct = (vt.prototype.ensureConsentId = function (e, t) {
                    var o, n = !1, r = et.readCookieParam(le.OPTANON_CONSENT, ie.CONSENT_ID);
                    if (o = !e && t ? (n = !0, 1) : 0, r) {
                        var s = parseInt(et.readCookieParam(le.OPTANON_CONSENT, ie.INTERACTION_COUNT), 10);
                        isNaN(s) || (o = t ? ++s : s, n = !1);
                    } else
                        r = tt.generateUUID(), et.writeCookieParam(le.OPTANON_CONSENT, ie.CONSENT_ID, r);
                    return et.writeCookieParam(le.OPTANON_CONSENT, ie.INTERACTION_COUNT, o), {
                        id: r,
                        count: o,
                        addDfltInt: n
                    };
                }, vt.prototype.isAnonymousConsent = function () {
                    var e = !0, t = Oe.dsParams;
                    return t && t.hasOwnProperty('isAnonymous') && (e = t.isAnonymous), e;
                }, vt.prototype.isAuthUsr = function (e) {
                    Oe.consentPreferences ? et.writeCookieParam(le.OPTANON_CONSENT, 'iType', '') : et.writeCookieParam(le.OPTANON_CONSENT, 'iType', '' + M[e]);
                }, vt.prototype.createConsentTxn = function (e, t, o, n) {
                    void 0 === t && (t = ''), void 0 === o && (o = !1), void 0 === n && (n = !0);
                    var r = this.ensureConsentId(e, n), s = Xe.ConsentIntegration;
                    if (s.ConsentApi && s.RequestInformation && r.id) {
                        var i = Ge.moduleInitializer, l = {
                                requestInformation: s.RequestInformation,
                                identifier: r.id,
                                customPayload: {
                                    Interaction: r.count,
                                    AddDefaultInteraction: r.addDfltInt
                                },
                                isAnonymous: this.isAnonymousConsent(),
                                test: i.ScriptType === ge,
                                purposes: this.getConsetPurposes(e),
                                dsDataElements: {}
                            };
                        Oe.isV2Stub && (l.syncGroup = Oe.syncGrpId, 'IAB2' !== Ze.iabType || ft.isIABCrossConsentEnabled() || (l.tcStringV2 = et.getCookie(le.EU_PUB_CONSENT)));
                        var a = yt.getGroupById(Xe.AdvancedAnalyticsCategory);
                        if (a && this.canSendAdvancedAnalytics(l.purposes, a) && (l.dsDataElements = {
                                InteractionType: t,
                                Country: Oe.userLocation.country,
                                UserAgent: window.navigator.userAgent
                            }), !i.MobileSDK && n && l.purposes.length) {
                            var c = JSON.stringify(l);
                            e && navigator.sendBeacon ? (navigator.sendBeacon(s.ConsentApi, c), ft.dispatchConsentEvent()) : !o && Oe.consentInteractionType === t || (Oe.isV2Stub && t && this.isAuthUsr(t), rt.ajax({
                                url: s.ConsentApi,
                                type: 'post',
                                dataType: 'json',
                                contentType: 'application/json',
                                data: JSON.stringify(l),
                                sync: e,
                                success: function () {
                                    ft.dispatchConsentEvent();
                                },
                                error: function () {
                                    ft.dispatchConsentEvent();
                                }
                            }));
                        }
                        Ze.pubDomainData.ConsentIntegrationData = {
                            consentApi: s.ConsentApi,
                            consentPayload: l
                        };
                    }
                    Oe.consentInteractionType = t;
                }, vt.prototype.getGrpDetails = function (e, s) {
                    var i = [];
                    return e.forEach(function (e) {
                        var t = e.split(':'), o = t[0], n = 'true' === t[1] ? '1' : '0', r = mt.getOptanonIdForIabGroup(o, s);
                        i.push(r + ':' + n);
                    }), i;
                }, vt.prototype.getOptanonIdForIabGroup = function (e, t) {
                    var o;
                    return t === C.Purpose ? o = 'IABV2_' + e : t === C.SpecialFeature && (o = 'ISFV2_' + e), o;
                }, vt.prototype.getConsetPurposes = function (r) {
                    var e, t, s = this, i = [], o = [], n = Oe.oneTrustIABConsent;
                    return e = this.getGrpDetails(n.purpose, C.Purpose), t = this.getGrpDetails(n.specialFeatures, C.SpecialFeature), o = h(n.specialPurposes, n.features), h(Oe.groupsConsent, e, t).forEach(function (e) {
                        var t = e.split(':'), o = yt.getGroupById(t[0]);
                        if (o && o.PurposeId) {
                            var n = void 0;
                            n = o.Status === pe ? de : Oe.bannerCloseSource === b.BannerCloseButton && o.Status === ye || r ? ue : s.getTxnType(t[1]), i.push({
                                Id: o.PurposeId,
                                TransactionType: n
                            });
                        }
                    }), o.forEach(function (e) {
                        e.purposeId && i.push({
                            Id: e.purposeId,
                            TransactionType: de
                        });
                    }), Oe.bannerCloseSource = b.Unknown, i;
                }, vt.prototype.getTxnType = function (e) {
                    return '0' === e ? ce : ae;
                }, vt.prototype.isPurposeConsentedTo = function (e, t) {
                    var o = [
                        ae,
                        de
                    ];
                    return e.some(function (e) {
                        return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType);
                    });
                }, vt.prototype.canSendAdvancedAnalytics = function (t, e) {
                    var o = this;
                    return 'BRANCH' === e.Type || 'IAB2_STACK' === e.Type ? e.SubGroups.length && e.SubGroups.every(function (e) {
                        return o.isPurposeConsentedTo(t, e);
                    }) : this.isPurposeConsentedTo(t, e);
                }, vt);
            function vt() {
            }
            var Pt, At = (Tt.prototype.isIabCookieValid = function () {
                    var e = null;
                    switch (Ze.iabType) {
                    case 'IAB2':
                        e = et.getCookie('eupubconsent-v2');
                    }
                    return null !== e;
                }, Tt.prototype.iabTypeIsChanged = function () {
                    this.isIabCookieValid() || (ft.removeAlertBoxCookie(), ft.removeIab1Cookie());
                }, Tt.prototype.initializeIABModule = function () {
                    return a(this, void 0, void 0, function () {
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return Xe.IsIabEnabled ? (Ge.moduleInitializer.otIABModuleData = window.otIabModule, ft.setIabData(), [
                                    4,
                                    ft.populateVendorListTCF()
                                ]) : [
                                    3,
                                    2
                                ];
                            case 1:
                                return e.sent(), ft.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), ft.populateIABCookies(), Xe.UseGoogleVendors && this.removeInActiveAddtlVendors(), [
                                    3,
                                    3
                                ];
                            case 2:
                                ft.removeIab1Cookie(), e.label = 3;
                            case 3:
                                return [2];
                            }
                        });
                    });
                }, Tt.prototype.removeInActiveAddtlVendors = function () {
                    var e = Xe.OverridenGoogleVendors;
                    for (var t in Oe.addtlVendorsList)
                        e && e[t] && !e[t].active && delete Oe.addtlVendorsList[t];
                }, Tt.prototype.getIABConsentData = function () {
                    var e = Oe.oneTrustIABConsent, t = ft.iabStringSDK().tcString();
                    Oe.tcModel.unsetAllPurposeConsents(), Oe.tcModel.unsetAllVendorConsents(), Oe.tcModel.unsetAllVendorLegitimateInterests(), Oe.tcModel.unsetAllSpecialFeatureOptins(), Oe.tcModel.unsetAllPurposeLegitimateInterests(), Oe.tcModel.publisherConsents.empty(), Oe.tcModel.publisherLegitimateInterests.empty(), Oe.tcModel.purposeConsents.set(tt.getActiveIdArray(e.purpose)), Oe.tcModel.publisherConsents.set(tt.getActiveIdArray(e.purpose));
                    var o = Ze.legIntSettings.PAllowLI ? tt.getActiveIdArray(e.legimateInterest) : [];
                    Oe.tcModel.purposeLegitimateInterests.set(o), Oe.tcModel.publisherLegitimateInterests.set(o), Oe.tcModel.vendorConsents.set(tt.getActiveIdArray(tt.distinctArray(e.vendors))), Ze.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), Oe.tcModel.vendorLegitimateInterests.set(tt.getActiveIdArray(tt.distinctArray(e.legIntVendors))), Oe.tcModel.specialFeatureOptins.set(tt.getActiveIdArray(e.specialFeatures));
                    var n = t.encode(Oe.tcModel);
                    return Oe.cmpApi.update(n, !1), n;
                }, Tt.prototype.decodeTCString = function (e) {
                    return ft.iabStringSDK().tcString().decode(e);
                }, Tt.prototype.getVendorConsentsRequestV2 = function (e) {
                    var o;
                    return window.__tcfapi('getInAppTCData', 2, function (e, t) {
                        o = [
                            e,
                            t
                        ];
                    }), e.apply(this, o);
                }, Tt.prototype.getPingRequestForTcf = function (e) {
                    var t;
                    return window.__tcfapi('ping', 2, function (e) {
                        t = [e];
                    }), e.apply(this, t);
                }, Tt.prototype.populateVendorAndPurposeFromCookieData = function (r) {
                    void 0 === r && (r = !1);
                    var s = Oe.oneTrustIABConsent, e = Pt.decodeTCString(s.IABCookieValue), i = {}, l = {};
                    Ze.iabGrps.forEach(function (e) {
                        e.Type === Fe ? i[Ze.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === qe && (l[Ze.iabGrpIdMap[e.CustomGroupId]] = e);
                    });
                    var a = [];
                    e.vendorConsents.forEach(function (e, t) {
                        var o = e;
                        Oe.vendorsSetting[t] && Oe.vendorsSetting[t].consent || !e || (a.push(t), o = !1), s.vendors.push(t + ':' + o);
                    }), e.vendorConsents.unset(a), a = [], e.vendorLegitimateInterests.forEach(function (e, t) {
                        var o = e;
                        Oe.vendorsSetting[t] && Oe.vendorsSetting[t].legInt || !e || (a.push(t), o = !1), s.legIntVendors.push(t + ':' + o);
                    }), e.vendorLegitimateInterests.unset(a), a = [], e.purposeConsents.forEach(function (e, o) {
                        var t = e;
                        if (i[o] && i[o].HasConsentOptOut || !e || (a.push(o), t = !1), r)
                            s.purpose.push(o + ':' + t);
                        else {
                            var n = tt.findIndex(s.purpose, function (e, t) {
                                return e.split(':')[0] === o.toString();
                            });
                            n = -1 === n ? o : n, s.purpose[n] = o + ':' + t;
                        }
                    }), e.purposeConsents.unset(a), e.publisherConsents.unset(a), a = [], e.specialFeatureOptins.forEach(function (e, o) {
                        var t = e;
                        if (l[o] && l[o].HasConsentOptOut || !e || (a.push(o), t = !1), r)
                            s.specialFeatures.push(o + ':' + t);
                        else {
                            var n = tt.findIndex(s.specialFeatures, function (e, t) {
                                return e.split(':')[0] === o.toString();
                            });
                            n = -1 === n ? o : n, s.specialFeatures[n] = o + ':' + t;
                        }
                    }), e.specialFeatureOptins.unset(a), a = [], e.purposeLegitimateInterests.forEach(function (e, o) {
                        var t = e;
                        if (i[o] && i[o].HasLegIntOptOut && Ze.legIntSettings.PAllowLI || !e || (a.push(o), t = !1), r)
                            s.legimateInterest.push(o + ':' + t);
                        else {
                            var n = tt.findIndex(s.legimateInterest, function (e, t) {
                                return e.split(':')[0] === o.toString();
                            });
                            n = -1 === n ? o : n, s.legimateInterest[n] = o + ':' + t;
                        }
                    }), e.purposeLegitimateInterests.unset(a), e.publisherLegitimateInterests.unset(a), this.syncBundleAndStack(), e.gvl = Oe.tcModel.gvl, e.isServiceSpecific = !ft.isIABCrossConsentEnabled(), Oe.tcModel = e;
                    var t = ft.iabStringSDK().tcString().encode(e);
                    ft.isAlertBoxClosedAndValid() ? (s.IABCookieValue !== t && (s.IABCookieValue = t, ft.isIABCrossConsentEnabled() ? ft.setIAB3rdPartyCookie(le.EU_CONSENT, s.IABCookieValue, Xe.ReconsentFrequencyDays, !1) : et.setCookie(le.EU_PUB_CONSENT, s.IABCookieValue, Xe.ReconsentFrequencyDays)), Oe.cmpApi.update(t, !1)) : ft.resetTCModel();
                }, Tt.prototype.syncBundleAndStack = function () {
                    var e = et.readCookieParam(le.OPTANON_CONSENT, 'groups');
                    Oe.groupsConsent = tt.strToArr(e), Xe.Groups.forEach(function (t) {
                        if (t.Type === De || t.Type === je) {
                            var e = lt.isBundleOrStackActive(t), o = tt.findIndex(Oe.groupsConsent, function (e) {
                                    return e.split(':')[0] === t.CustomGroupId;
                                }), n = t.CustomGroupId + ':' + Number(e);
                            -1 < o ? Oe.groupsConsent[o] = n : Oe.groupsConsent.push(n);
                        }
                    }), et.writeCookieParam(le.OPTANON_CONSENT, 'groups', Oe.groupsConsent.join(','));
                }, Tt.prototype.populateGoogleConsent = function () {
                    if (Xe.UseGoogleVendors) {
                        var e = et.getCookie(le.ADDITIONAL_CONSENT_STRING);
                        e && (Oe.isAddtlConsent = !0, Oe.addtlVendors.vendorConsent = e.replace(Oe.addtlConsentVersion, '').split('.'));
                    }
                }, Tt.prototype.isInitIABCookieData = function (e) {
                    return 'init' === e || ft.needReconsent();
                }, Tt.prototype.updateFromGlobalConsent = function (e) {
                    var t = Oe.oneTrustIABConsent;
                    t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], Pt.populateVendorAndPurposeFromCookieData(!0), et.setCookie(le.EU_PUB_CONSENT, '', -1);
                }, Tt);
            function Tt() {
            }
            var St, It = (Lt.prototype.writeHstParam = function (e, t) {
                    void 0 === t && (t = null), et.writeCookieParam(e, 'hosts', tt.arrToStr(t || Oe.hostsConsent));
                }, Lt.prototype.writeGenVenCookieParam = function (e) {
                    var t = Xe.GeneralVendors, o = Oe.genVendorsConsent, n = '';
                    t.forEach(function (e) {
                        n += e.VendorCustomId + ':' + (o[e.VendorCustomId] ? '1' : '0') + ',';
                    }), et.writeCookieParam(e, 'genVendors', n);
                }, Lt.prototype.updateGroupsInCookie = function (e, t) {
                    void 0 === t && (t = null), et.writeCookieParam(e, 'groups', tt.arrToStr(t || Oe.groupsConsent));
                }, Lt.prototype.writeGrpParam = function (e, t) {
                    void 0 === t && (t = null), this.updateGroupsInCookie(e, t), Xe.IsIabEnabled && ft.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies();
                }, Lt.prototype.insertOrUpdateIabCookies = function () {
                    var e = Oe.oneTrustIABConsent;
                    if (e.purpose && e.vendors) {
                        Oe.isAddtlConsent = Xe.UseGoogleVendors, e.IABCookieValue = Pt.getIABConsentData();
                        var t = Xe.ReconsentFrequencyDays;
                        ft.isIABCrossConsentEnabled() ? ft.setIAB3rdPartyCookie(le.EU_CONSENT, e.IABCookieValue, t, !1) : (et.setCookie(le.EU_PUB_CONSENT, e.IABCookieValue, t), Xe.UseGoogleVendors && et.setCookie(le.ADDITIONAL_CONSENT_STRING, '' + Oe.addtlConsentVersion + Oe.addtlVendors.vendorConsent.join('.'), t));
                    }
                }, Lt);
            function Lt() {
            }
            var _t, wt = (xt.prototype.initGenVendorConsent = function () {
                    var n = this;
                    if (Xe.GenVenOptOut) {
                        var e = Ze.consentableGrps, t = et.readCookieParam(le.OPTANON_CONSENT, 'genVendors');
                        t ? (Oe.genVendorsConsent = {}, t.split(',').forEach(function (e) {
                            if (e) {
                                var t = e.split(':');
                                '1' === t[1] && (Oe.genVendorsConsent[t[0]] = !0);
                            }
                        })) : (Oe.genVendorsConsent = {}, e.forEach(function (e) {
                            var o = Oe.syncRequired ? yt.checkIfGroupHasConsent(e) : yt.checkIsActiveByDefault(e);
                            e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function (e) {
                                var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                                Oe.genVendorsConsent[e] = t || o;
                            });
                        }));
                    } else
                        Oe.genVendorsConsent = {}, St.writeGenVenCookieParam(le.OPTANON_CONSENT);
                }, xt.prototype.populateGenVendorLists = function () {
                    Ze.consentableGrps.forEach(function (e) {
                        e.GeneralVendorsIds && (yt.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function (e) {
                            Oe.alwaysActiveGenVendors.push(e);
                        }) : yt.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function (e) {
                            Oe.optInGenVendors.push(e);
                        }) : yt.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function (e) {
                            Oe.optInGenVendors.includes(e) || Oe.softOptInGenVendors.push(e);
                        }));
                    });
                }, xt.prototype.updateGenVendorStatus = function (e, t) {
                    Oe.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e);
                }, xt.prototype.isGenVenPartOfAlwaysActiveGroup = function (e) {
                    return Oe.alwaysActiveGenVendors.includes(e);
                }, xt);
            function xt() {
            }
            var Et, Bt = (Nt.prototype.synchroniseCookieGroupData = function (e) {
                    var t = et.readCookieParam(le.OPTANON_CONSENT, 'groups'), s = tt.strToArr(t), i = tt.strToArr(t.replace(/:0|:1/g, '')), l = !1, a = !1;
                    e.forEach(function (e) {
                        var t = e.CustomGroupId;
                        if (-1 === tt.indexOf(i, t)) {
                            if ((e.Type === De || e.Type === je) && Xe.IsIabEnabled)
                                return;
                            var o;
                            o = e.Type === De ? lt.isBundleOrStackActive(e, s) : (l = !0, yt.checkIsActiveByDefault(e)), a = !0, s.push(t + (o ? ':1' : ':0'));
                        } else if ('false' === ft.getIABCrossConsentflagData() && (e.Type === De || e.Type === je)) {
                            var n = lt.isBundleOrStackActive(e, s), r = s.indexOf(t + ':' + (n ? '0' : '1'));
                            -1 < r && (a = !0, s[r] = t + (n ? ':1' : ':0'));
                        }
                    });
                    for (var o = s.length, n = function () {
                                var t = s[o].replace(/:0|:1/g, '');
                                Xe.Groups.some(function (e) {
                                    return (!ft.needReconsent() || e.Type !== je) && (e.CustomGroupId === t || e.SubGroups.some(function (e) {
                                        return e.CustomGroupId === t;
                                    }));
                                }) || (a = !0, s.splice(o, 1));
                            }; o--;)
                        n();
                    a && (Oe.fireOnetrustGrp = !0, St.updateGroupsInCookie(le.OPTANON_CONSENT, s), Oe.syncRequired && l && ft.removeAlertBoxCookie());
                }, Nt.prototype.groupHasConsent = function (t) {
                    var e = tt.strToArr(et.readCookieParam(le.OPTANON_CONSENT, 'groups')), o = tt.findIndex(e, function (e) {
                            return e.split(':')[0] === t.CustomGroupId;
                        });
                    return -1 < o && '1' === e[o].split(':')[1];
                }, Nt.prototype.synchroniseCookieHostData = function () {
                    var n = this, e = et.readCookieParam(le.OPTANON_CONSENT, 'hosts'), r = tt.strToArr(e), s = tt.strToArr(e.replace(/:0|:1/g, '')), i = !1;
                    Xe.Groups.forEach(function (e) {
                        h(e.SubGroups, [e]).forEach(function (o) {
                            o.Hosts.length && o.Hosts.forEach(function (e) {
                                if (-1 === tt.indexOf(s, e.HostId)) {
                                    i = !0;
                                    var t = Oe.syncRequired ? n.groupHasConsent(o) : yt.checkIsActiveByDefault(o);
                                    r.push(e.HostId + (t ? ':1' : ':0'));
                                }
                            });
                        });
                    });
                    for (var o = r.length, t = function () {
                                var t = r[o].replace(/:0|:1/g, '');
                                Xe.Groups.some(function (e) {
                                    return h(e.SubGroups, [e]).some(function (e) {
                                        return e.Hosts.some(function (e) {
                                            return e.HostId === t;
                                        });
                                    });
                                }) || (i = !0, r.splice(o, 1));
                            }; o--;)
                        t();
                    i && (Oe.fireOnetrustGrp = !0, St.writeHstParam(le.OPTANON_CONSENT, r));
                }, Nt.prototype.toggleGroupHosts = function (e, t) {
                    var o = this;
                    e.Hosts.forEach(function (e) {
                        o.updateHostStatus(e, t);
                    });
                }, Nt.prototype.toggleGroupGenVendors = function (e, t) {
                    e.GeneralVendorsIds.forEach(function (e) {
                        _t.updateGenVendorStatus(e, t);
                    });
                }, Nt.prototype.updateHostStatus = function (t, e) {
                    var o = tt.findIndex(Oe.hostsConsent, function (e) {
                        return !t.isActive && t.HostId === e.replace(/:0|:1/g, '');
                    });
                    if (-1 < o) {
                        var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
                        Oe.hostsConsent[o] = t.HostId + ':' + (n ? '1' : '0');
                    }
                }, Nt.prototype.isHostPartOfAlwaysActiveGroup = function (e) {
                    return Oe.oneTrustAlwaysActiveHosts.includes(e);
                }, Nt);
            function Nt() {
            }
            var Vt, Ot = function () {
                    this.assets = function () {
                        return {
                            name: 'otCookiePolicy',
                            html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n<!-- New Cookies policy Link-->\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                            css: '.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}',
                            cssRTL: '.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}'
                        };
                    };
                }, Gt = (Dt.prototype.isLandingPage = function () {
                    var e = et.readCookieParam(le.OPTANON_CONSENT, 'landingPath');
                    return !e || e === location.href;
                }, Dt.prototype.setLandingPathParam = function (e) {
                    et.writeCookieParam(le.OPTANON_CONSENT, 'landingPath', e);
                }, Dt);
            function Dt() {
            }
            var Ht, Mt = '#onetrust-banner-sdk', Ft = (qt.prototype.BannerPushDownHandler = function () {
                    this.checkIsBrowserIE11OrBelow() || (Ht.pushPageDown(Mt), it(window).on('resize', function () {
                        'none' !== it(Mt).css('display') && Ht.pushPageDown(Mt);
                    }));
                }, qt.prototype.pushPageUp = function () {
                    it('body').css('top: 0;');
                }, qt.prototype.checkIsBrowserIE11OrBelow = function () {
                    var e = window.navigator.userAgent;
                    return 0 < e.indexOf('MSIE ') || 0 < e.indexOf('Trident/');
                }, qt.prototype.pushPageDown = function (e) {
                    var t = it(e).height() + 'px';
                    it(e).show().css(' bottom: auto; position:absolute; top:-' + t), it('body').css('position: relative; top:' + t);
                }, qt);
            function qt() {
            }
            var Rt, jt = (Ut.prototype.loadBanner = function () {
                    Ge.moduleInitializer.ScriptDynamicLoadEnabled ? 'complete' === document.readyState ? it(window).trigger('otloadbanner') : window.addEventListener('load', function (e) {
                        it(window).trigger('otloadbanner');
                    }) : 'loading' !== document.readyState ? it(window).trigger('otloadbanner') : window.addEventListener('DOMContentLoaded', function (e) {
                        it(window).trigger('otloadbanner');
                    }), Ze.pubDomainData.IsBannerLoaded = !0;
                }, Ut.prototype.OnConsentChanged = function (e) {
                    var t = e.toString();
                    Rt.consentChangedEventMap[t] || (Rt.consentChangedEventMap[t] = !0, window.addEventListener('consent.onetrust', e));
                }, Ut.prototype.triggerGoogleAnalyticsEvent = function (e, t, o, n) {
                    Ze.ignoreGoogleAnlyticsCall || (void 0 !== window._gaq && window._gaq.push([
                        '_trackEvent',
                        e,
                        t,
                        o,
                        n
                    ]), 'function' == typeof window.ga && window.ga('send', 'event', e, t, o, n)), void 0 !== window.dataLayer && window.dataLayer.constructor === Array && window.dataLayer.push({
                        event: 'trackOptanonEvent',
                        optanonCategory: e,
                        optanonAction: t,
                        optanonLabel: o,
                        optanonValue: n
                    });
                }, Ut.prototype.setAlertBoxClosed = function (e) {
                    var t = new Date().toISOString();
                    e ? et.setCookie(le.ALERT_BOX_CLOSED, t, Xe.ReconsentFrequencyDays) : et.setCookie(le.ALERT_BOX_CLOSED, t, 0), Ze.pagePushedDown && !Ht.checkIsBrowserIE11OrBelow() && Ht.pushPageUp();
                    var o = it('.onetrust-pc-dark-filter').el[0];
                    o && 'none' !== getComputedStyle(o).getPropertyValue('display') && it('.onetrust-pc-dark-filter').fadeOut(400);
                }, Ut.prototype.updateConsentFromCookie = function (t) {
                    return a(this, void 0, void 0, function () {
                        return d(this, function (e) {
                            return t ? (Pt.isInitIABCookieData(t) || Pt.updateFromGlobalConsent(t), 'init' === t && (ft.removeIab1Cookie(), ft.isAlertBoxClosedAndValid() && ft.resetTCModel(), ft.removeAlertBoxCookie())) : (ft.resetTCModel(), ft.updateCrossConsentCookie(!1), ft.setIABCookieData()), Rt.assetPromise.then(function () {
                                Rt.loadBanner();
                            }), [2];
                        });
                    });
                }, Ut);
            function Ut() {
                var t = this;
                this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function (e) {
                    t.assetResolve = e;
                });
            }
            var zt, Wt = 'opt-out', Kt = 'OneTrust Cookie Consent', Yt = 'Banner Auto Close', Jt = 'Banner Close Button', Qt = 'Banner Preferences Saved', Zt = 'Preferences Close Button', Xt = 'Preference Center Opened From Banner', $t = 'Preference Center Opened From Button', eo = 'Preference Center Opened From Function', to = 'Preferences Save Settings', oo = 'Vendors List Opened From Function', no = 'Floating Cookie Settings Open Button', ro = 'Floating Cookie Settings Close Button', so = 'Preferences Toggle On', io = 'Preferences Toggle Off', lo = 'General Vendor Toggle On', ao = 'General Vendor Toggle Off', co = 'Host Toggle On', uo = 'Host Toggle Off', po = 'Preferences Legitimate Interest Objection', ko = 'Preferences Legitimate Interest Remove Objection', ho = 'IAB Vendor Toggle ON', yo = 'IAB Vendor Toggle Off', fo = 'IAB Vendor Legitimate Interest Objection', go = 'IAB Vendor Legitimate Interest Remove Objection', bo = (mo.prototype.getDataLanguageCulture = function () {
                    var e = Ze.bannerScriptElement;
                    return e && e.getAttribute(be) ? e.getAttribute(be).toLowerCase() : this.detectDocumentOrBrowserLanguage().toLowerCase();
                }, mo.prototype.detectDocumentOrBrowserLanguage = function () {
                    var e = tt.convertKeyValueLowerCase(Ze.langSwitcherPldr), t = this.getUserLanguge().toLowerCase(), o = '';
                    if (!(o = e[t] || e[t + '-' + t] || (e.default === t ? e.default : null)))
                        if (2 === t.length)
                            for (var n = 0; n < Object.keys(e).length; n += 1) {
                                var r = Object.keys(e)[n];
                                if (r.substr(0, 2) === t) {
                                    o = e[r];
                                    break;
                                }
                            }
                        else
                            2 < t.length && (o = e[t.substr(0, 2)]);
                    return o = o || e.default;
                }, mo.prototype.getUserLanguge = function () {
                    return Ze.useDocumentLanguage ? document.documentElement.lang : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage;
                }, mo.prototype.isValidLanguage = function (e, t) {
                    var o = tt.convertKeyValueLowerCase(Ze.langSwitcherPldr);
                    return !(!o[t] && !o[t + '-' + t] && o.default !== t);
                }, mo.prototype.getLangJsonUrl = function (e) {
                    void 0 === e && (e = null);
                    var t = Ze.getRegionRule();
                    if (e) {
                        if (e = e.toLowerCase(), !this.isValidLanguage(t, e))
                            return null;
                    } else
                        e = this.getDataLanguageCulture();
                    Oe.lang = e, Oe.consentLanguage = e.substr(0, 2);
                    var o = Ze.bannerDataParentURL + '/' + t.Id + '/' + e;
                    return Ze.multiVariantTestingEnabled && (o = Ze.bannerDataParentURL + '/' + t.Id + '/variants/' + Ze.selectedVariant.Id + '/' + e), o;
                }, mo.prototype.populateLangSwitcherPlhdr = function () {
                    var e = Ze.getRegionRule(), t = e.Variants;
                    if (Ze.multiVariantTestingEnabled && t) {
                        var o = et.getCookie(le.SELECTED_VARIANT), n = void 0;
                        o ? n = t[tt.findIndex(t, function (e) {
                            return e.Id === o;
                        })] : o && n || (n = t[Math.floor(Math.random() * t.length)]), Ze.langSwitcherPldr = n.LanguageSwitcherPlaceholder, Ze.selectedVariant = n;
                    } else
                        Ze.langSwitcherPldr = e.LanguageSwitcherPlaceholder;
                }, mo);
            function mo() {
            }
            var Co, vo = (Po.prototype.getLangJson = function (e) {
                    void 0 === e && (e = null);
                    var t = zt.getLangJsonUrl(e);
                    return t ? Co.otFetch(t + '.json') : Promise.resolve(null);
                }, Po.prototype.fetchGvlObj = function () {
                    return this.otFetch(Ge.moduleInitializer.IabV2Data.globalVendorListUrl);
                }, Po.prototype.fetchGoogleVendors = function () {
                    var e = lt.updateCorrectIABUrl(Ge.moduleInitializer.GoogleData.googleVendorListUrl);
                    return lt.checkMobileOfflineRequest(lt.getBannerVersionUrl()) ? lt.otFetchOfflineFile(tt.getRelativeURL(e, !0)) : (Ze.mobileOnlineURL.push(e), this.otFetch(e));
                }, Po.prototype.getStorageDisclosure = function (t) {
                    return a(this, void 0, void 0, function () {
                        return d(this, function (e) {
                            return [
                                2,
                                this.otFetch(t)
                            ];
                        });
                    });
                }, Po.prototype.loadCMP = function () {
                    var o = this;
                    return new Promise(function (e) {
                        var t = o.checkIfRequiresPollyfill() ? 'otTCF-ie' : 'otTCF';
                        lt.jsonp(lt.getBannerVersionUrl() + '/' + t + '.js', e, e);
                    });
                }, Po.prototype.getCSBtnContent = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o, n, r;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return t = Xe.useRTL ? Q.RTL : Q.LTR, Oe.csBtnAsset[t] ? [
                                    3,
                                    2
                                ] : (o = lt.getBannerSDKAssestsUrl() + '/' + (Xe.useRTL ? Ce : me), n = Oe.csBtnAsset, r = t, [
                                    4,
                                    this.otFetch(o)
                                ]);
                            case 1:
                                n[r] = e.sent(), e.label = 2;
                            case 2:
                                return [
                                    2,
                                    Oe.csBtnAsset[t]
                                ];
                            }
                        });
                    });
                }, Po.prototype.getPcContent = function (i) {
                    return void 0 === i && (i = !1), a(this, void 0, void 0, function () {
                        var t, o, n, r, s;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return t = Xe.useRTL ? Q.RTL : Q.LTR, Oe.pcAsset[t] && !i ? [
                                    3,
                                    2
                                ] : (o = lt.getBannerSDKAssestsUrl(), Xe.PCTemplateUpgrade && (o += '/v2'), n = o + '/' + Ze.pcName + (Xe.useRTL ? 'Rtl' : '') + '.json', r = Oe.pcAsset, s = t, [
                                    4,
                                    this.otFetch(n)
                                ]);
                            case 1:
                                r[s] = e.sent(), e.label = 2;
                            case 2:
                                return [
                                    2,
                                    Oe.pcAsset[t]
                                ];
                            }
                        });
                    });
                }, Po.prototype.getBannerContent = function (s) {
                    return void 0 === s && (s = !1), a(this, void 0, void 0, function () {
                        var t, o, n, r;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return t = Xe.useRTL ? Q.RTL : Q.LTR, Oe.bAsset[t] && !s ? [
                                    3,
                                    2
                                ] : (o = lt.getBannerSDKAssestsUrl() + '/' + Ze.bannerName + (Xe.useRTL ? 'Rtl' : '') + '.json', n = Oe.bAsset, r = t, [
                                    4,
                                    this.otFetch(o)
                                ]);
                            case 1:
                                n[r] = e.sent(), e.label = 2;
                            case 2:
                                return [
                                    2,
                                    Oe.bAsset[t]
                                ];
                            }
                        });
                    });
                }, Po.prototype.getSyncNtfyContent = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o, n, r;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return t = Xe.useRTL ? Q.RTL : Q.LTR, Oe.syncNtfyContent[t] ? [
                                    3,
                                    2
                                ] : (o = lt.getBannerSDKAssestsUrl() + '/otSyncNotification' + (Xe.useRTL ? 'Rtl' : '') + '.json', n = Oe.syncNtfyContent, r = t, [
                                    4,
                                    this.otFetch(o)
                                ]);
                            case 1:
                                n[r] = e.sent(), e.label = 2;
                            case 2:
                                return [
                                    2,
                                    Oe.syncNtfyContent[t]
                                ];
                            }
                        });
                    });
                }, Po.prototype.getConsentProfile = function (e, t) {
                    var o = this, n = {
                            Identifier: e,
                            TenantId: Oe.tenantId,
                            Authorization: t
                        };
                    return new Promise(function (e) {
                        o.getJSON(Oe.consentApi, n, e, e);
                    });
                }, Po.prototype.checkIfRequiresPollyfill = function () {
                    var e = window.navigator.userAgent;
                    return 0 < e.indexOf('MSIE ') || 0 < e.indexOf('Trident/') || 'undefined' == typeof Set;
                }, Po.prototype.otFetch = function (n) {
                    return a(this, void 0, void 0, function () {
                        var t, o = this;
                        return d(this, function (e) {
                            const $___old_d307851b8252d121 = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                            try {
                                if ($___old_d307851b8252d121)
                                    ({}.constructor.defineProperty(window, 'fetch', $___mock_4783a6a9c325c3f9.fetch));
                                return function () {
                                    switch (e.label) {
                                    case 0:
                                        return lt.checkMobileOfflineRequest(n) ? [
                                            4,
                                            lt.otFetchOfflineFile(n)
                                        ] : [
                                            3,
                                            2
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            e.sent()
                                        ];
                                    case 2:
                                        return e.trys.push([
                                            2,
                                            7,
                                            ,
                                            8
                                        ]), Ze.mobileOnlineURL.push(n), 'undefined' != typeof fetch ? [
                                            3,
                                            3
                                        ] : [
                                            2,
                                            new Promise(function (e) {
                                                o.getJSON(n, null, e, e);
                                            })
                                        ];
                                    case 3:
                                        return [
                                            4,
                                            fetch(n)
                                        ];
                                    case 4:
                                        return [
                                            4,
                                            e.sent().json()
                                        ];
                                    case 5:
                                        return [
                                            2,
                                            e.sent()
                                        ];
                                    case 6:
                                        return [
                                            3,
                                            8
                                        ];
                                    case 7:
                                        return t = e.sent(), console.log('Error in fetch URL : ' + n + ' Exception :' + t), [
                                            3,
                                            8
                                        ];
                                    case 8:
                                        return [2];
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_d307851b8252d121)
                                    ({}.constructor.defineProperty(window, 'fetch', $___old_d307851b8252d121));
                            }
                        });
                    });
                }, Po.prototype.getJSON = function (e, t, o, n) {
                    void 0 === t && (t = null);
                    var r = new XMLHttpRequest();
                    if (r.open('GET', e, !0), t)
                        for (var s in t)
                            r.setRequestHeader(s, t[s]);
                    r.onload = function () {
                        if (200 <= this.status && this.status < 400 && this.responseText) {
                            var e = JSON.parse(this.responseText);
                            o(e);
                        } else
                            n({
                                message: 'Error Loading Data',
                                statusCode: this.status
                            });
                    }, r.onerror = function (e) {
                        n(e);
                    }, r.send();
                }, Po);
            function Po() {
            }
            var Ao, To = new Ot().assets(), So = (Io.prototype.initializeFeaturesAndSpecialPurposes = function () {
                    Oe.oneTrustIABConsent.features = [], Oe.oneTrustIABConsent.specialPurposes = [], Xe.Groups.forEach(function (e) {
                        if ('IAB2_FEATURE' === e.Type || 'IAB2_SPL_PURPOSE' === e.Type) {
                            var t = {};
                            t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, 'IAB2_FEATURE' === e.Type ? Oe.oneTrustIABConsent.features.push(t) : Oe.oneTrustIABConsent.specialPurposes.push(t);
                        }
                    });
                }, Io.prototype.initGrpsAndHosts = function () {
                    this.initializeGroupData(Ze.consentableGrps), Xe.showCookieList && (Xe.allowHostOptOut || Oe.genVenOptOutEnabled) ? this.initializeHostData(Ze.consentableGrps) : (Oe.hostsConsent = [], St.writeHstParam(le.OPTANON_CONSENT));
                }, Io.prototype.ensureHtmlGroupDataInitialised = function () {
                    if (this.initGrpsAndHosts(), Oe.showGeneralVendors && (_t.populateGenVendorLists(), _t.initGenVendorConsent()), Xe.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), ft.setOrUpdate3rdPartyIABConsentFlag(), ft.setGeolocationInCookies(), Xe.IsConsentLoggingEnabled) {
                        var e = window.OneTrust.dataSubjectParams || {}, t = et.readCookieParam(le.OPTANON_CONSENT, 'iType'), o = '', n = !1;
                        t && Oe.isV2Stub && e.id && e.token && (n = !0, o = M[t]), mt.createConsentTxn(!1, o, !1, n);
                    }
                }, Io.prototype.initializeGroupData = function (e) {
                    var t = et.readCookieParam(le.OPTANON_CONSENT, 'groups');
                    t ? (Et.synchroniseCookieGroupData(e), t = et.readCookieParam(le.OPTANON_CONSENT, 'groups'), Oe.groupsConsent = tt.strToArr(t)) : (Oe.groupsConsent = [], e.forEach(function (e) {
                        Oe.groupsConsent.push(e.CustomGroupId + (yt.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ':1' : ':0'));
                    }), Xe.IsConsentLoggingEnabled && window.addEventListener('beforeunload', this.consentDefaulCall));
                }, Io.prototype.initializeHostData = function (e) {
                    var t = et.readCookieParam(le.OPTANON_CONSENT, 'hosts');
                    if (t)
                        Et.synchroniseCookieHostData(), t = et.readCookieParam(le.OPTANON_CONSENT, 'hosts'), Oe.hostsConsent = tt.strToArr(t), e.forEach(function (e) {
                            yt.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function (e) {
                                Oe.oneTrustAlwaysActiveHosts.push(e.HostId);
                            });
                        });
                    else {
                        Oe.hostsConsent = [];
                        var r = {};
                        e.forEach(function (e) {
                            var o = yt.isAlwaysActiveGroup(e), n = Oe.syncRequired ? Et.groupHasConsent(e) : yt.checkIsActiveByDefault(e);
                            e.Hosts.length && e.Hosts.forEach(function (e) {
                                if (r[e.HostId])
                                    Et.updateHostStatus(e, n);
                                else {
                                    r[e.HostId] = !0, o && Oe.oneTrustAlwaysActiveHosts.push(e.HostId);
                                    var t = Et.isHostPartOfAlwaysActiveGroup(e.HostId);
                                    Oe.hostsConsent.push(e.HostId + (t || n ? ':1' : ':0'));
                                }
                            });
                        });
                    }
                }, Io.prototype.consentDefaulCall = function () {
                    var e = parseInt(et.readCookieParam(le.OPTANON_CONSENT, ie.INTERACTION_COUNT), 10);
                    !isNaN(e) && 0 !== e || (Rt.triggerGoogleAnalyticsEvent(Kt, 'Click', 'No interaction'), Xe.IsConsentLoggingEnabled && mt.createConsentTxn(!0), window.removeEventListener('beforeunload', Ao.consentDefaulCall));
                }, Io.prototype.fetchAssets = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o, n, r, s, i, l, a, c;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return r = Ge.moduleInitializer, s = ft.isAlertBoxClosedAndValid(), i = !r.IsSuppressBanner || Xe.ShowAlertNotice && !s && r.IsSuppressBanner && !it('#onetrust-banner-sdk').length, l = it('#ot-sdk-btn').length || it('.ot-sdk-show-settings').length || it('.optanon-show-settings').length, a = !r.TenantFeatures.CookieV2RemoveSettingsIcon && 'IAB2' === Xe.IabType && !l || Xe.PCShowPersistentCookiesHoverButton, [
                                    4,
                                    Promise.all([
                                        i && !Xe.NoBanner ? Co.getBannerContent() : Promise.resolve(null),
                                        !r.IsSuppressPC || Oe.isPCVisible ? Co.getPcContent() : Promise.resolve(null),
                                        a ? Co.getCSBtnContent() : Promise.resolve(null)
                                    ])
                                ];
                            case 1:
                                return c = e.sent(), t = c[0], o = c[1], n = c[2], t && (this.bannerGroup = {
                                    name: t.name,
                                    html: atob(t.html),
                                    css: t.css
                                }), o && (this.preferenceCenterGroup = {
                                    name: o.name,
                                    html: atob(o.html),
                                    css: o.css
                                }, Ge.isV2Template = Xe.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(o.name)), this.cookieListGroup = {
                                    name: To.name,
                                    html: To.html,
                                    css: Xe.useRTL ? To.cssRTL : To.css
                                }, n && (this.csBtnGroup = {
                                    name: 'CookieSettingsButton',
                                    html: atob(n.html),
                                    css: n.css
                                }), [2];
                            }
                        });
                    });
                }, Io.prototype.initializeIabPurposeConsentOnReload = function () {
                    var t = this;
                    Ze.consentableIabGrps.forEach(function (e) {
                        t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1);
                    });
                }, Io.prototype.initializeIABData = function (o, n) {
                    var r = this;
                    void 0 === o && (o = !1), void 0 === n && (n = !1);
                    var e = Oe.oneTrustIABConsent;
                    if (e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [], Oe.addtlVendors.vendorConsent = [], !e.IABCookieValue || o || n || ft.reconsentRequired()) {
                        Ze.consentableIabGrps.forEach(function (e) {
                            if (n)
                                r.setIABConsent(e, yt.isAlwaysActiveGroup(e));
                            else {
                                var t = o && e.HasConsentOptOut;
                                r.setIABConsent(e, t), 'IAB2_PURPOSE' === e.Type && (e.IsLegIntToggle = !0, r.setIABConsent(e, e.HasLegIntOptOut));
                            }
                        });
                        var t = o || !n && Xe.VendorConsentModel === Wt;
                        ft.setIABVendor(t), !ft.reconsentRequired() || o || n || ft.resetTCModel();
                    } else
                        this.initializeIabPurposeConsentOnReload(), Pt.populateGoogleConsent(), Pt.populateVendorAndPurposeFromCookieData();
                }, Io.prototype.canSoftOptInInsertForGroup = function (e) {
                    var t = yt.getGroupById(e);
                    if (t) {
                        var o = t && !t.Parent ? t : yt.getParentGroup(t.Parent);
                        return 'inactive landingpage' !== yt.getGrpStatus(o).toLowerCase() || !Vt.isLandingPage();
                    }
                }, Io.prototype.setIABConsent = function (e, t) {
                    e.Type === qe ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t);
                }, Io.prototype.setIabPurposeConsent = function (o, n) {
                    var r = !1;
                    Oe.oneTrustIABConsent.purpose = Oe.oneTrustIABConsent.purpose.map(function (e) {
                        var t = e.split(':')[0];
                        return t === o.IabGrpId && (e = t + ':' + n, r = !0), e;
                    }), r || Oe.oneTrustIABConsent.purpose.push(o.IabGrpId + ':' + n);
                }, Io.prototype.setIabLegIntConsent = function (o, n) {
                    var r = !1;
                    Oe.oneTrustIABConsent.legimateInterest = Oe.oneTrustIABConsent.legimateInterest.map(function (e) {
                        var t = e.split(':')[0];
                        return t === o.IabGrpId && (e = t + ':' + n, r = !0), e;
                    }), r || Oe.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ':' + n);
                }, Io.prototype.setIabSpeciFeatureConsent = function (o, n) {
                    var r = !1;
                    Oe.oneTrustIABConsent.specialFeatures = Oe.oneTrustIABConsent.specialFeatures.map(function (e) {
                        var t = e.split(':')[0];
                        return t === o.IabGrpId && (e = t + ':' + n, r = !0), e;
                    }), r || Oe.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ':' + n);
                }, Io);
            function Io() {
            }
            var Lo, _o = (wo.prototype.getAllowAllButton = function () {
                    return it('#onetrust-pc-sdk #accept-recommended-btn-handler');
                }, wo.prototype.getSelectedVendors = function () {
                    return it('#onetrust-pc-sdk ' + ut.P_Tgl_Cntr + ' .ot-checkbox input:checked');
                }, wo);
            function wo() {
            }
            var xo, Eo = (Bo.prototype.getAllGroupElements = function () {
                    return document.querySelectorAll('div#onetrust-pc-sdk ' + ut.P_Category_Grp + ' ' + ut.P_Category_Item);
                }, Bo.prototype.toggleGrpElements = function (e, t, o) {
                    Ze.pcName === Ne && Xe.PCTemplateUpgrade && (e = document.querySelector('#ot-desc-id-' + e.getAttribute('data-optanongroupid')));
                    for (var n = e.querySelectorAll('input[class*="category-switch-handler"]'), r = 0; r < n.length; r++)
                        tt.setCheckedAttribute(null, n[r], o), n[r] && Xe.PCShowConsentLabels && (n[r].parentElement.parentElement.querySelector('.ot-label-status').innerHTML = o ? Xe.PCActiveText : Xe.PCInactiveText);
                    Ze.legIntSettings.PAllowLI && Ze.legIntSettings.PShowLegIntBtn && t.Type === Fe && t.HasLegIntOptOut && xo.updateLegIntBtnElement(e.querySelector('.ot-leg-btn-container'), o);
                }, Bo.prototype.toogleAllSubGrpElements = function (e, t) {
                    if (e.ShowSubgroup) {
                        var o = e.CustomGroupId, n = this.getGroupElementByOptanonGroupId(o.toString());
                        xo.toogleSubGroupElement(n, t, e.IsLegIntToggle);
                    } else
                        this.updateHiddenSubGroupData(e, t);
                }, Bo.prototype.toogleSubGroupElement = function (e, t, o, n) {
                    void 0 === o && (o = !1), void 0 === n && (n = !1), Ze.pcName === Ne && Xe.PCTemplateUpgrade && (e = document.querySelector('#ot-desc-id-' + e.getAttribute('data-optanongroupid')));
                    for (var r = e.querySelectorAll('li' + ut.P_Subgrp_li), s = 0; s < r.length; s++) {
                        var i = yt.getGroupById(r[s].getAttribute('data-optanongroupid')), l = i.OptanonGroupId, a = yt.getParentGroup(i.Parent);
                        Ze.legIntSettings.PAllowLI && Ze.legIntSettings.PShowLegIntBtn && o && i.Type === Fe && i.HasLegIntOptOut && a.ShowSubgroupToggle && xo.updateLegIntBtnElement(r[s], t);
                        var c = o ? '[id=\'ot-sub-group-id-' + l + '-leg-out\']' : '[id=\'ot-sub-group-id-' + l + '\']', d = r[s].querySelector('input[class*="cookie-subgroup-handler"]' + c);
                        tt.setCheckedAttribute(null, d, t), d && Xe.PCShowConsentLabels && (d.parentElement.parentElement.querySelector('.ot-label-status').innerHTML = t ? Xe.PCActiveText : Xe.PCInactiveText), n || (i.IsLegIntToggle = o, xo.toggleGrpStatus(i, t), i.IsLegIntToggle = !1, Et.toggleGroupHosts(i, t), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(i, t));
                    }
                }, Bo.prototype.toggleGrpStatus = function (e, t) {
                    var o = e.IsLegIntToggle && e.Type === Fe ? t ? ko : po : t ? so : io;
                    Rt.triggerGoogleAnalyticsEvent(Kt, o, e.GroupName + ': ' + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e);
                }, Bo.prototype.setInputID = function (e, t, o, n, r) {
                    it(e).attr('id', t), it(e).attr('name', t), it(e).data('optanonGroupId', o), tt.setCheckedAttribute(null, e, n), it(e).attr('aria-labelledby', r);
                }, Bo.prototype.updateEnabledGroupData = function (e) {
                    if (-1 < We.indexOf(e.Type))
                        this.updateIabGroupData(e, !0);
                    else {
                        var t = xo.getGroupVariable(), o = tt.indexOf(t, e.CustomGroupId + ':0');
                        -1 !== o && (t[o] = e.CustomGroupId + ':1');
                    }
                }, Bo.prototype.updateDisabledGroupData = function (e) {
                    if (-1 < We.indexOf(e.Type))
                        this.updateIabGroupData(e, !1);
                    else {
                        var t = xo.getGroupVariable(), o = tt.indexOf(t, e.CustomGroupId + ':1');
                        -1 !== o && (t[o] = e.CustomGroupId + ':0');
                    }
                }, Bo.prototype.updateIabGroupData = function (e, t) {
                    if (e.Type === qe)
                        this.updateIabSpecialFeatureData(e.IabGrpId, t);
                    else {
                        var o = e.IsLegIntToggle ? Oe.vendors.selectedLegInt : Oe.vendors.selectedPurpose;
                        this.updateIabPurposeData(e.IabGrpId, t, o);
                    }
                }, Bo.prototype.isAllSubgroupsDisabled = function (e) {
                    return !e.SubGroups.some(function (e) {
                        return xo.isGroupActive(e);
                    });
                }, Bo.prototype.isAllSubgroupsEnabled = function (e) {
                    return !e.SubGroups.some(function (e) {
                        return xo.IsGroupInActive(e);
                    });
                }, Bo.prototype.toggleGroupHtmlElement = function (e, t, o) {
                    if (Ze.legIntSettings.PAllowLI && Ze.legIntSettings.PShowLegIntBtn && e.Type === Fe && e.HasLegIntOptOut) {
                        var n = document.querySelector('[data-el-id=' + t + ']');
                        n && this.updateLegIntBtnElement(n, o);
                    }
                    var r = it('#ot-group-id-' + t).el[0];
                    tt.setCheckedAttribute(null, r, o), r && Xe.PCShowConsentLabels && (r.parentElement.querySelector('.ot-label-status').innerHTML = o ? Xe.PCActiveText : Xe.PCInactiveText);
                }, Bo.prototype.updateLegIntBtnElement = function (e, t) {
                    var o = Ze.legIntSettings, n = e.querySelector('.ot-obj-leg-btn-handler'), r = e.querySelector('.ot-remove-objection-handler');
                    t ? (n.classList.add('ot-inactive-leg-btn'), n.classList.add('ot-leg-int-enabled'), n.classList.remove('ot-active-leg-btn')) : (n.classList.add('ot-active-leg-btn'), n.classList.remove('ot-inactive-leg-btn'), n.classList.remove('ot-leg-int-enabled')), n.querySelector('span').innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, r.style.display = t ? 'none' : 'inline-block';
                }, Bo.prototype.isGroupActive = function (e) {
                    return -1 < We.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== rt.inArray(e.CustomGroupId + ':1', xo.getGroupVariable());
                }, Bo.prototype.safeFormattedGroupDescription = function (e) {
                    return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, '<br>') : '';
                }, Bo.prototype.canInsertForGroup = function (e, t) {
                    void 0 === t && (t = !1);
                    var o, n = null != e && void 0 !== e, r = et.readCookieParam(le.OPTANON_CONSENT, 'groups'), s = Oe.groupsConsent.join(','), i = et.readCookieParam(le.OPTANON_CONSENT, 'hosts'), l = Oe.hostsConsent.join(',');
                    if (t)
                        return !0;
                    r === s && i === l || Ao.ensureHtmlGroupDataInitialised(), o = tt.contains(Oe.groupsConsent.concat(Oe.hostsConsent), e + ':1');
                    var a = this.doesHostExist(e), c = this.doesGroupExist(e), d = !!a || o && Ao.canSoftOptInInsertForGroup(e);
                    return !(!n || !(o && d || !c && !a));
                }, Bo.prototype.setAllowAllButton = function () {
                    var t = 0, e = Xe.Groups.some(function (e) {
                            if (-1 === Ke.indexOf(e.Type))
                                return xo.IsGroupInActive(e) && t++, e.SubGroups.some(function (e) {
                                    return xo.IsGroupInActive(e);
                                }) && t++, 1 <= t;
                        });
                    return e ? Lo.getAllowAllButton().show('inline-block') : Lo.getAllowAllButton().hide(), e;
                }, Bo.prototype.getGroupVariable = function () {
                    return Oe.groupsConsent;
                }, Bo.prototype.IsGroupInActive = function (e) {
                    return -1 < We.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : -1 === rt.inArray(e.CustomGroupId + ':1', xo.getGroupVariable());
                }, Bo.prototype.updateIabPurposeData = function (t, e, o) {
                    var n = tt.findIndex(o, function (e) {
                        return e.split(':')[0] === t;
                    });
                    o[n = -1 === n ? Number(t) : n] = t + ':' + e;
                }, Bo.prototype.updateIabSpecialFeatureData = function (t, e) {
                    var o = tt.findIndex(Oe.vendors.selectedSpecialFeatures, function (e) {
                        return e.split(':')[0] === t;
                    });
                    o = -1 === o ? Number(t) : o, Oe.vendors.selectedSpecialFeatures[o] = t + ':' + e;
                }, Bo.prototype.getGroupElementByOptanonGroupId = function (e) {
                    return document.querySelector('#onetrust-pc-sdk ' + ut.P_Category_Grp + ' ' + ut.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]');
                }, Bo.prototype.updateHiddenSubGroupData = function (e, t) {
                    e.SubGroups.forEach(function (e) {
                        xo.toggleGrpStatus(e, t), Et.toggleGroupHosts(e, t), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(e, t);
                    });
                }, Bo.prototype.isIabPurposeActive = function (e) {
                    var t;
                    return t = e.Type === qe ? Oe.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? Oe.vendors.selectedLegInt : Oe.vendors.selectedPurpose, rt.inArray(e.IabGrpId + ':true', t);
                }, Bo.prototype.doesGroupExist = function (e) {
                    return !!yt.getGroupById(e);
                }, Bo.prototype.doesHostExist = function (e) {
                    var t = Oe.hostsConsent;
                    return -1 !== t.indexOf(e + ':0') || -1 !== t.indexOf(e + ':1');
                }, Bo);
            function Bo() {
            }
            var No, Vo = (Oo.prototype.insertCookiePolicyHtml = function () {
                    if (it(this.ONETRUST_COOKIE_POLICY).length) {
                        var e, t = document.createDocumentFragment();
                        if (Ao.cookieListGroup) {
                            var o = Xe.CookiesV2NewCookiePolicy ? '.ot-sdk-cookie-policy' : '#ot-sdk-cookie-policy-v2', n = document.createElement('div');
                            it(n).html(Ao.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector('.ot-sdk-cookie-policy'), Xe.useRTL && it(e).attr('dir', 'rtl');
                        }
                        e.querySelector('#cookie-policy-title').innerHTML = Xe.CookieListTitle || '', e.querySelector('#cookie-policy-description').innerHTML = Xe.CookieListDescription || '';
                        var r = e.querySelector('section'), s = e.querySelector('section tbody tr'), i = null, l = null;
                        Xe.CookiesV2NewCookiePolicy || (i = e.querySelector('section.subgroup'), l = e.querySelector('section.subgroup tbody tr'), it(e).el.removeChild(e.querySelector('section.subgroup'))), it(e).el.removeChild(e.querySelector('section')), !it('#ot-sdk-cookie-policy').length && it('#optanon-cookie-policy').length ? it('#optanon-cookie-policy').append('<div id="ot-sdk-cookie-policy"></div>') : (it('#ot-sdk-cookie-policy').html(''), it('#optanon-cookie-policy').html(''));
                        for (var a = 0; a < Xe.Groups.length; a++)
                            if (Xe.CookiesV2NewCookiePolicy)
                                this.insertGroupHTMLV2(Xe, Xe.Groups, r, a, s, e, t);
                            else if (this.insertGroupHTML(Xe, Xe.Groups, r, a, s, e, t), Xe.Groups[a].ShowSubgroup)
                                for (var c = 0; c < Xe.Groups[a].SubGroups.length; c++)
                                    this.insertGroupHTML(Xe, Xe.Groups[a].SubGroups, i, c, l, e, t);
                    }
                }, Oo.prototype.insertGroupHTMLV2 = function (l, e, t, o, a, n, r) {
                    var s, c, d, i = this;
                    function u(e) {
                        return p.querySelector(e);
                    }
                    s = e[o];
                    var p = t.cloneNode(!0), k = e[o].SubGroups;
                    it(u('tbody')).html('');
                    var h = s.Hosts.slice(), y = s.FirstPartyCookies.slice(), f = h.length || y.length ? s.GroupName : '';
                    if (e[o].ShowSubgroup && k.length) {
                        var g = p.querySelector('section.ot-sdk-subgroup ul li');
                        k.forEach(function (e) {
                            var t = g.cloneNode(!0);
                            h = h.concat(e.Hosts), y = y.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (f += ',' + e.GroupName), it(t.querySelector('.ot-sdk-cookie-policy-group')).html(e.GroupName), it(t.querySelector('.ot-sdk-cookie-policy-group-desc')).html(i.groupsClass.safeFormattedGroupDescription(e)), it(g.parentElement).append(t);
                        }), p.querySelector('section.ot-sdk-subgroup ul').removeChild(g);
                    } else
                        p.removeChild(p.querySelector('section.ot-sdk-subgroup'));
                    l.IsLifespanEnabled ? it(u('th.ot-life-span')).el.innerHTML = l.LifespanText : it(u('thead tr')).el.removeChild(it(u('th.ot-life-span')).el), it(u('th.ot-cookies')).el.innerHTML = l.CookiesText, it(u('th.ot-host')).el.innerHTML = l.CategoriesText, it(u('th.ot-cookies-type')).el.innerHTML = l.CookiesUsedText, c = this.transformFirstPartyCookies(y, h);
                    var b = !1;
                    c.some(function (e) {
                        return e.Description;
                    }) ? b = !0 : it(u('thead tr')).el.removeChild(it(u('th.ot-host-description')).el), it(u('.ot-sdk-cookie-policy-group')).html(s.GroupName), it(u('.ot-sdk-cookie-policy-group-desc')).html(this.groupsClass.safeFormattedGroupDescription(s));
                    for (var m = function (e) {
                                function t(e) {
                                    return o.querySelector(e);
                                }
                                var o = a.cloneNode(!0);
                                it(t('.ot-cookies-td span')).text(''), it(t('.ot-life-span-td span')).text(''), it(t('.ot-cookies-type span')).text(''), it(t('.ot-cookies-td .ot-cookies-td-content')).html(''), it(t('.ot-host-td')).html(''), it(t('.ot-host-description-td')).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + '</p> ');
                                for (var n = [], r = [], s = 0; s < c[e].Cookies.length; s++)
                                    (d = c[e].Cookies[s]).IsSession ? n.push(l.LifespanTypeText) : n.push(lt.getDuration(d).toLowerCase()), r.push(c[e].Type ? '<a href="https://cookiepedia.co.uk/cookies/' + d.Name + '" rel="noopener" target="_blank" aria-label="' + d.Name + ' ' + Xe.NewWinTxt + '">' + d.Name + '</a>' : d.Name);
                                it(t('.ot-host-td')).append('<span class="ot-mobile-border"></span>'), t('.ot-host-td').setAttribute('data-label', l.CategoriesText), t('.ot-cookies-td').setAttribute('data-label', l.CookiesText), t('.ot-cookies-type').setAttribute('data-label', l.CookiesUsedText), t('.ot-life-span-td').setAttribute('data-label', l.LifespanText);
                                var i = c[e].DisplayName || c[e].HostName;
                                it(t('.ot-host-td')).append(c[e].Type ? i : '<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank" aria-label="' + i + ' ' + Xe.NewWinTxt + '">' + i + '</a>'), t('.ot-cookies-td .ot-cookies-td-content').insertAdjacentHTML('beforeend', r.join(', ')), t('.ot-life-span-td .ot-life-span-td-content').innerText = n.join(', '), t('.ot-cookies-type .ot-cookies-type-td-content').innerText = c[e].Type ? '1st Party' : '3rd Party', l.IsLifespanEnabled || o.removeChild(t('td.ot-life-span-td')), b || o.removeChild(t('td.ot-host-description-td')), it(u('tbody')).append(o);
                            }, C = 0; C < c.length; C++)
                        m(C);
                    0 === c.length ? p.removeChild(p.querySelector('table')) : it(u('caption')).el.innerHTML = f, it(n).append(p), it(r).append(n), it('#ot-sdk-cookie-policy').append(r);
                }, Oo.prototype.insertGroupHTML = function (l, e, t, o, a, n, r) {
                    var s, i, c, d;
                    function u(e) {
                        return p.querySelector(e);
                    }
                    s = e[o];
                    var p = t.cloneNode(!0);
                    it(u('caption')).el.innerHTML = s.GroupName, it(u('tbody')).html(''), it(u('thead tr')), l.IsLifespanEnabled ? it(u('th.life-span')).el.innerHTML = l.LifespanText : it(u('thead tr')).el.removeChild(it(u('th.life-span')).el), it(u('th.cookies')).el.innerHTML = l.CookiesText, it(u('th.host')).el.innerHTML = l.CategoriesText;
                    var k = !1;
                    if (s.Hosts.some(function (e) {
                            return e.description;
                        }) ? k = !0 : it(u('thead tr')).el.removeChild(it(u('th.host-description')).el), it(u('.ot-sdk-cookie-policy-group')).html(s.GroupName), it(u('.ot-sdk-cookie-policy-group-desc')).html(this.groupsClass.safeFormattedGroupDescription(s)), 0 < s.FirstPartyCookies.length) {
                        it(u('.cookies-used-header')).html(l.CookiesUsedText), it(u('.cookies-list')).html('');
                        for (var h = 0; h < s.FirstPartyCookies.length; h++)
                            i = s.FirstPartyCookies[h], it(u('.cookies-list')).append('<li> ' + lt.getCookieLabel(i, l.AddLinksToCookiepedia) + ' <li>');
                    } else
                        p.removeChild(u('.cookies-used-header')), p.removeChild(u('.cookies-list'));
                    c = s.Hosts;
                    for (var y = function (e) {
                                function t(e) {
                                    return o.querySelector(e);
                                }
                                var o = a.cloneNode(!0);
                                it(t('.cookies-td ul')).html(''), it(t('.life-span-td ul')).html(''), it(t('.host-td')).html(''), it(t('.host-description-td')).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + '</p> ');
                                for (var n = 0; n < c[e].Cookies.length; n++) {
                                    var r = '';
                                    r = (d = c[e].Cookies[n]).IsSession ? l.LifespanTypeText : 0 === d.Length ? '<1 ' + l.LifespanDurationText : d.Length + ' ' + l.LifespanDurationText;
                                    var s = l.IsLifespanEnabled ? '&nbsp;(' + r + ')' : '';
                                    if (it(t('.cookies-td ul')).append('<li> ' + d.Name + ' ' + s + ' </li>'), l.IsLifespanEnabled) {
                                        var i = d.Length ? d.Length + ' days' : 'N/A';
                                        it(t('.life-span-td ul')).append('<li>' + i + '</li>');
                                    }
                                    0 === n && (it(t('.host-td')).append('<span class="ot-mobile-border"></span>'), it(t('.host-td')).append('<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (c[e].DisplayName || c[e].HostName) + ' ' + Xe.NewWinTxt + '">' + (c[e].DisplayName || c[e].HostName) + '</a>'));
                                }
                                k || o.removeChild(t('td.host-description-td')), it(u('tbody')).append(o);
                            }, f = 0; f < c.length; f++)
                        y(f);
                    0 === c.length && it(u('table')).el.removeChild(it(u('thead')).el), it(n).append(p), it(r).append(n), it('#ot-sdk-cookie-policy').append(r);
                }, Oo.prototype.transformFirstPartyCookies = function (e, t) {
                    var o = t.slice();
                    return e.forEach(function (t) {
                        o.some(function (e) {
                            if (e.HostName === t.Host)
                                return e.Cookies.push(t), !0;
                        }) || o.unshift({
                            HostName: t.Host,
                            DisplayName: t.Host,
                            HostId: '',
                            Description: '',
                            Type: '1st Party',
                            Cookies: [t]
                        });
                    }), o;
                }, Oo);
            function Oo() {
                this.groupsClass = xo, this.ONETRUST_COOKIE_POLICY = '#ot-sdk-cookie-policy, #optanon-cookie-policy';
            }
            var Go, Do = function () {
                };
            var Ho, Mo = (Fo.prototype.updateFilterSelection = function (e) {
                    var t, o;
                    void 0 === e && (e = !1), o = e ? (t = Oe.filterByCategories, 'data-optanongroupid') : (t = Oe.filterByIABCategories, 'data-purposeid');
                    for (var n = it('#onetrust-pc-sdk .category-filter-handler').el, r = 0; r < n.length; r++) {
                        var s = n[r].getAttribute(o);
                        -1 < t.indexOf(s) ? n[r].checked = !0 : n[r].checked = !1;
                    }
                }, Fo.prototype.cancelHostFilter = function () {
                    for (var e = it('#onetrust-pc-sdk .category-filter-handler').el, t = 0; t < e.length; t++) {
                        var o = e[t].getAttribute('data-optanongroupid');
                        e[t].checked && Oe.filterByCategories.indexOf(o) < 0 && (e[t].checked = '');
                    }
                }, Fo.prototype.updateHostFilterList = function () {
                    for (var e = it('#onetrust-pc-sdk .category-filter-handler').el, t = 0; t < e.length; t++) {
                        var o = e[t].getAttribute('data-optanongroupid');
                        if (e[t].checked && Oe.filterByCategories.indexOf(o) < 0)
                            Oe.filterByCategories.push(o);
                        else if (!e[t].checked && -1 < Oe.filterByCategories.indexOf(o)) {
                            var n = Oe.filterByCategories;
                            Oe.filterByCategories.splice(n.indexOf(o), 1);
                        }
                    }
                    return Oe.filterByCategories;
                }, Fo.prototype.InitializeHostList = function () {
                    Oe.hosts.hostTemplate = it(ut.P_Vendor_List + ' ' + ut.P_Host_Cntr + ' li').el[0].cloneNode(!0), Oe.hosts.hostCookieTemplate = it(ut.P_Vendor_List + ' ' + ut.P_Host_Cntr + ' ' + ut.P_Host_Opt + ' li').el[0].cloneNode(!0);
                }, Fo.prototype.getCookiesForGroup = function (t) {
                    var o = [], n = [];
                    return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function (e) {
                        n.push(r(r({}, e), { groupName: t.GroupName }));
                    }), t.Hosts.length && t.Hosts.forEach(function (e) {
                        o.push(r(r({}, e), {
                            isActive: 'always active' === yt.getGrpStatus(t).toLowerCase(),
                            groupName: t.GroupName,
                            Type: j.Host
                        }));
                    }), {
                        firstPartyCookiesList: n,
                        thirdPartyCookiesList: o
                    };
                }, Fo.prototype.reactivateSrcTag = function (e) {
                    var t = ['src'];
                    e.setAttribute(t[0], e.getAttribute('data-' + t[0])), e.removeAttribute('data-src');
                }, Fo.prototype.reactivateScriptTag = function (e) {
                    var t = e.parentNode, o = document.createElement(e.tagName);
                    o.innerHTML = e.innerHTML;
                    var n = e.attributes;
                    if (0 < n.length)
                        for (var r = 0; r < n.length; r++)
                            'type' !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute('type', 'text/javascript', !0);
                    t.appendChild(o), t.removeChild(e);
                }, Fo.prototype.reactivateTag = function (e, t) {
                    var o = e.className.match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split('-'), n = !0;
                    if (o && 0 < o.length) {
                        for (var r = 0; r < o.length; r++)
                            if (!xo.canInsertForGroup(o[r].trim())) {
                                n = !1;
                                break;
                            }
                        n && (t ? this.reactivateSrcTag(e) : this.reactivateScriptTag(e));
                    }
                }, Fo.prototype.substitutePlainTextScriptTags = function () {
                    var t = this, e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')), o = document.querySelectorAll('*[class*="optanon-category"]');
                    Array.prototype.forEach.call(o, function (e) {
                        'SCRIPT' !== e.tagName && e.hasAttribute('data-src') && t.reactivateTag(e, !0);
                    }), Array.prototype.forEach.call(e, function (e) {
                        e.hasAttribute('type') && 'text/plain' === e.getAttribute('type') && t.reactivateTag(e, !1);
                    });
                }, Fo);
            function Fo() {
            }
            var qo, Ro = (jo.prototype.getSearchQuery = function (e) {
                    var t = this, o = e.trim().split(/\s+/g);
                    return new RegExp(o.map(function (e) {
                        return t.escapeRegExp(e);
                    }).join('|') + '(.+)?', 'gi');
                }, jo.prototype.escapeRegExp = function (e) {
                    return e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
                }, jo.prototype.setGlobalFilteredList = function (e) {
                    return Oe.currentGlobalFilteredList = e;
                }, jo.prototype.filterList = function (t, e, n) {
                    var o = n && n.length;
                    if ('' === t && !o)
                        return this.setGlobalFilteredList(e);
                    if (o) {
                        var r = it('#onetrust-pc-sdk ' + ut.P_Fltr_Options + ' input').el.length, s = [], i = !1;
                        r !== n.length ? e.forEach(function (o) {
                            i = !0, o.vendorName && n.forEach(function (e) {
                                var t = parseInt(Ze.iabGrpIdMap[e]);
                                -1 < e.indexOf('IFEV2_') ? (o.features || []).forEach(function (e) {
                                    e.featureId === t && s.push(o);
                                }) : -1 < e.indexOf('ISFV2_') ? o.specialFeatures.forEach(function (e) {
                                    e.featureId === t && s.push(o);
                                }) : -1 < e.indexOf('ISPV2_') ? (o.specialPurposes || []).forEach(function (e) {
                                    e.purposeId === t && s.push(o);
                                }) : (o.purposes.forEach(function (e) {
                                    e.purposeId === t && s.push(o);
                                }), o.legIntPurposes.forEach(function (e) {
                                    e.purposeId === t && s.push(o);
                                }));
                            });
                        }) : s = e, i && (s = s.filter(function (e, t, o) {
                            return o.indexOf(e) === t;
                        })), this.setGlobalFilteredList(s);
                    }
                    return '' === t ? Oe.currentGlobalFilteredList : Oe.currentGlobalFilteredList.filter(function (e) {
                        if (e.vendorName)
                            return e.vendorName.toLowerCase().includes(t.toLowerCase());
                    });
                }, jo.prototype.loadVendorList = function (e, t) {
                    void 0 === e && (e = '');
                    var o = Oe.vendors;
                    Oe.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, Oe.filterByIABCategories = [], Ho.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = '' : t = Oe.filterByIABCategories;
                    var n = this.filterList(o.searchParam, o.list, t);
                    it('#onetrust-pc-sdk ' + ut.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n);
                }, jo.prototype.searchVendors = function (e, t, o, n) {
                    if (n) {
                        var r = this.getSearchQuery(n), s = 0;
                        for (var i in t)
                            if (i) {
                                var l = o === X.GoogleVendor ? i : t[i].VendorCustomId, a = it('' + e.vendorAccBtn + l).el[0].parentElement;
                                r.lastIndex = 0, r.test(t[i][e.name]) ? (a.style.display = '', s++) : a.style.display = 'none';
                            }
                        0 === s ? (it(e.accId).hide(), o === X.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === X.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, it(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n);
                    } else
                        for (var c = it(' ' + e.venListId + ' li[style^="display"]').el, d = 0; d < c.length; d++)
                            c[d].style.display = '';
                    var u = it('#onetrust-pc-sdk ' + e.selectAllEvntHndlr).el[0];
                    document.querySelector(e.venListId + ' li:not([style^="display"]) ' + e.ctgl + ' > input[checked]') ? tt.setCheckedAttribute('', u, !0) : tt.setCheckedAttribute('', u, !1), document.querySelector(e.venListId + ' li:not([style^="display"]) ' + e.ctgl + ' > input:not([checked])') ? u.parentElement.classList.add('line-through') : u.parentElement.classList.remove('line-through');
                }, jo.prototype.initGoogleVendors = function () {
                    this.populateAddtlVendors(Oe.addtlVendorsList), this.venAdtlSelAllTglEvent();
                }, jo.prototype.initGenVendors = function () {
                    this.populateGeneralVendors(), Xe.GenVenOptOut && Xe.GeneralVendors && Xe.GeneralVendors.length && this.genVenSelectAllTglEvent();
                }, jo.prototype.resetAddtlVendors = function () {
                    qo.searchVendors(qo.googleSearchSelectors, Oe.addtlVendorsList, X.GoogleVendor), this.showConsentHeader();
                }, jo.prototype.venAdtlSelAllTglEvent = function () {
                    qo.selectAllEventHandler({
                        vendorsList: '#ot-addtl-venlst li:not([style^="display"]) .ot-ven-adtlctgl input',
                        selAllCntr: '#onetrust-pc-sdk #ot-selall-adtlvencntr',
                        selAllChkbox: '#onetrust-pc-sdk #ot-selall-adtlven-handler'
                    });
                }, jo.prototype.genVenSelectAllTglEvent = function () {
                    var e = {
                        vendorsList: ut.P_Gven_List + ' .ot-ven-gvctgl input',
                        selAllCntr: '#onetrust-pc-sdk #ot-selall-gnvencntr',
                        selAllChkbox: '#onetrust-pc-sdk #ot-selall-gnven-handler'
                    };
                    qo.selectAllEventHandler(e);
                }, jo.prototype.selectAllEventHandler = function (e) {
                    for (var t = it(e.vendorsList).el, o = it(e.selAllCntr).el[0], n = it(e.selAllChkbox).el[0], r = !0, s = 0; s < t.length; s++) {
                        if (!t[s].checked) {
                            r = !1;
                            break;
                        }
                        r = !0;
                    }
                    o && (r ? o.classList.remove('line-through') : o.classList.add('line-through')), n.checked = !0;
                    for (var i = 0; i < t.length && !t[i].checked; i++)
                        i !== t.length - 1 || t[i].checked || (n.checked = !1);
                }, jo.prototype.vendorLegIntToggleEvent = function () {
                    for (var e = it(ut.P_Vendor_Container + ' li:not([style^="display"]) .' + ut.P_Ven_Ltgl + ' input').el, t = it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Leg_El).el[0], o = it('#onetrust-pc-sdk #select-all-vendor-leg-handler').el[0], n = !0, r = 0; r < e.length; r++) {
                        if (!e[r].checked) {
                            n = !1;
                            break;
                        }
                        n = !0;
                    }
                    n ? t.classList.remove('line-through') : t.classList.add('line-through'), o.checked = !0;
                    for (var s = 0; s < e.length && !e[s].checked; s++)
                        s !== e.length - 1 || e[s].checked || (o.checked = !1);
                }, jo.prototype.vendorsListEvent = function () {
                    for (var e = it(ut.P_Vendor_Container + ' li:not([style^="display"]) .' + ut.P_Ven_Ctgl + ' input').el, t = it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Consent_El).el[0], o = it('#onetrust-pc-sdk #select-all-vendor-groups-handler').el[0], n = !0, r = 0; r < e.length; r++) {
                        if (!e[r].checked) {
                            n = !1;
                            break;
                        }
                        n = !0;
                    }
                    n ? t.classList.remove('line-through') : t.classList.add('line-through'), o.checked = !0;
                    for (var s = 0; s < e.length && !e[s].checked; s++)
                        s !== e.length - 1 || e[s].checked || (o.checked = !1);
                }, jo.prototype.showEmptyResults = function (e, t, o) {
                    void 0 === o && (o = !1);
                    var n = it('#onetrust-pc-sdk #no-results');
                    e ? this.setNoResultsContent(t, o) : (it('#onetrust-pc-sdk ' + ut.P_Vendor_Content).removeClass('no-results'), n.length && n.remove());
                }, jo.prototype.playSearchStatus = function (e) {
                    var t = e ? document.querySelectorAll(ut.P_Host_Cntr + ' > li') : document.querySelectorAll(ut.P_Vendor_Container + ' li:not([style$="none;"]),' + ut.P_Gven_List + ' li:not([style$="none;"])'), o = t.length, n = it('#onetrust-pc-sdk [role="status"]');
                    o ? n.text(t.length + ' ' + (e ? 'host' : 'vendor') + (1 < o ? 's' : '') + ' returned.') : n.el[0].textContent = '';
                }, jo.prototype.setNoResultsContent = function (e, t) {
                    void 0 === t && (t = !1);
                    var o = it('#onetrust-pc-sdk #no-results').el[0];
                    if (!o) {
                        var n = document.createElement('div'), r = document.createElement('p'), s = document.createTextNode(' did not match any ' + (t ? 'hosts.' : 'vendors.')), i = document.createElement('span');
                        return n.id = 'no-results', i.id = 'user-text', i.innerText = e, r.appendChild(i), r.appendChild(s), n.appendChild(r), it('#onetrust-pc-sdk ' + ut.P_Vendor_Content).addClass('no-results'), it('#vendor-search-handler').el[0].setAttribute('aria-describedby', n.id), it('#onetrust-pc-sdk ' + ut.P_Vendor_Content).append(n);
                    }
                    o.querySelector('span').innerText = e;
                }, jo.prototype.searchHostList = function (e) {
                    var t = Oe.currentGlobalFilteredList;
                    e && (t = this.searchList(e, t)), this.initHostData(e, t);
                }, jo.prototype.searchList = function (e, t) {
                    var o = this.getSearchQuery(e);
                    return t.filter(function (e) {
                        return o.lastIndex = 0, o.test(e.DisplayName || e.HostName);
                    });
                }, jo.prototype.initHostData = function (e, d) {
                    var u = this;
                    Oe.optanonHostList = d;
                    var p = Ge.isV2Template, k = Ze.pcName, h = Oe.cookieListType === W.GenVen || Oe.cookieListType === W.HostAndGenVen ? Xe.GenVenOptOut : Xe.allowHostOptOut, y = !1;
                    it(ut.P_Vendor_List + ' .back-btn-handler .pc-back-button-text').html(Xe.PCenterBackText), it(ut.P_Vendor_List + ' #select-all-text-container p').html(Xe.PCenterAllowAllConsentText), it('#onetrust-pc-sdk ' + ut.P_Vendor_Content + ' ul' + ut.P_Host_Cntr).html(''), this.showEmptyResults(d && 0 === d.length, e, !0), !Ge.isV2Template && k === Ne || it('#onetrust-pc-sdk ' + ut.P_Vendor_Title).html(Xe.PCenterCookiesListText), Ge.isV2Template && it('#ot-sel-blk span:first-child').html(Xe.PCenterAllowAllConsentText || Xe.ConsentText);
                    for (var t = function (o) {
                                var n = Oe.hosts.hostTemplate.cloneNode(!0), e = n.querySelector('.' + ut.P_Host_Bx), t = d[o].DisplayName || d[o].HostName;
                                e && tt.setHtmlAttributes(e, {
                                    id: 'host-' + o,
                                    name: 'host-' + o,
                                    'aria-label': t + ' ' + Xe.PCViewCookiesText,
                                    'aria-controls': 'ot-host-acc-txt-' + o
                                });
                                var r = n.querySelector(ut.P_Acc_Txt);
                                if (r && tt.setHtmlAttributes(r, {
                                        id: 'ot-host-acc-txt-' + o,
                                        role: 'region',
                                        'aria-labelledby': e.id
                                    }), !h || d[o].isFirstParty) {
                                    var s = n.querySelector('.ot-host-tgl');
                                    s && s.parentElement.removeChild(s);
                                } else {
                                    var i = void 0;
                                    p ? ((i = Go.chkboxEl.cloneNode(!0)).classList.add('ot-host-tgl'), i.querySelector('input').classList.add('host-checkbox-handler'), k === Ne ? n.querySelector(ut.P_Host_Hdr).insertAdjacentElement('beforeBegin', i) : n.querySelector(ut.P_Tgl_Cntr).insertAdjacentElement('beforeEnd', i)) : i = n.querySelector('.ot-host-tgl'), tt.setHtmlAttributes(i.querySelector('input'), {
                                        id: 'ot-host-chkbox-' + o,
                                        'aria-label': t,
                                        hostId: d[o].HostId,
                                        ckType: d[o].Type
                                    }), i.querySelector('label').setAttribute('for', 'ot-host-chkbox-' + o), (d[o].Type === j.GenVendor ? Oe.genVendorsConsent[d[o].HostId] : -1 !== Oe.hostsConsent.indexOf(d[o].HostId + ':1')) ? (tt.setCheckedAttribute(null, i.querySelector('input'), !0), d[o].isActive ? tt.setDisabledAttribute(null, i.querySelector('input'), !0) : y = y || !0) : (y = !0, tt.setCheckedAttribute(null, i.querySelector('input'), !1)), i.querySelector(ut.P_Label_Txt).innerText = t;
                                }
                                if (Xe.PCAccordionStyle === z.PlusMinus)
                                    n.querySelector(ut.P_Acc_Header).insertAdjacentElement('afterBegin', Go.plusMinusEl.cloneNode(!0));
                                else if (p) {
                                    var l = Go.arrowEl.cloneNode(!0);
                                    k === Ne ? n.querySelector(ut.P_Host_View_Cookies).insertAdjacentElement('afterend', l) : n.querySelector(ut.P_Tgl_Cntr).insertAdjacentElement('beforeEnd', l);
                                }
                                Xe.AddLinksToCookiepedia && !d[o].isFirstParty && (t = '<a href="http://cookiepedia.co.uk/host/' + d[o].HostName + '" rel="noopener" target="_blank"\n              style="text-decoration: underline;">' + t + '&nbsp;<span class="ot-scrn-rdr">' + Xe.NewWinTxt + '</span></a>'), n.querySelector(ut.P_Host_Title).innerHTML = t, n.querySelector(ut.P_Host_Desc).innerText = d[o].Description, d[o].PrivacyPolicy && Xe.pcShowCookieHost && n.querySelector(ut.P_Host_Desc).insertAdjacentHTML('afterend', '<a href="' + d[o].PrivacyPolicy + '" rel="noopener" target="_blank">' + Xe.PCCookiePolicyText + '&nbsp;<span class="ot-scrn-rdr">' + Xe.NewWinTxt + '</span></a>');
                                var a = n.querySelector(ut.P_Host_View_Cookies);
                                if (Oe.showGeneralVendors && !d[o].Cookies.length ? (tt.removeChild(a), it(n).addClass('ot-hide-acc')) : Xe.PCViewCookiesText && (a.innerHTML = Xe.PCViewCookiesText), !d[o].Description || !Xe.pcShowCookieHost) {
                                    var c = n.querySelector(ut.P_Host_Desc);
                                    c.parentElement.removeChild(c);
                                }
                                it(n.querySelector(ut.P_Host_Opt)).html(''), d[o].Cookies.forEach(function (e) {
                                    var t = u.getCookieElement(e, d[o]);
                                    it(n.querySelector(ut.P_Host_Opt)).append(t);
                                }), it('#onetrust-pc-sdk ' + ut.P_Vendor_Content + ' ul' + ut.P_Host_Cntr).append(n);
                            }, o = 0; o < d.length; o++)
                        t(o);
                    var n = 1 === d.length && d[0].HostName === Xe.PCFirstPartyCookieListText;
                    if (!Xe.allowHostOptOut && !Oe.genVenOptOutEnabled || n)
                        it('#onetrust-pc-sdk ' + ut.P_Select_Cntr).addClass('ot-hide');
                    else {
                        tt.setDisabledAttribute('#onetrust-pc-sdk #select-all-hosts-groups-handler', null, !y);
                        for (var r = it('#onetrust-pc-sdk ' + ut.P_Host_Cntr + ' .ot-host-tgl input').el, s = 0; s < r.length; s++)
                            r[s].addEventListener('click', this.hostsListEvent);
                        it('#onetrust-pc-sdk ' + ut.P_Select_Cntr).removeClass('ot-hide'), this.hostsListEvent();
                    }
                }, jo.prototype.hostsListEvent = function () {
                    for (var e = it('#onetrust-pc-sdk ' + ut.P_Host_Cntr + ' .ot-host-tgl input').el, t = it('#onetrust-pc-sdk #' + ut.P_Sel_All_Host_El).el[0], o = it('#onetrust-pc-sdk #select-all-hosts-groups-handler').el[0], n = it('#onetrust-pc-sdk ' + ut.P_Cnsnt_Header).el[0], r = !0, s = 0; s < e.length; s++) {
                        if (!e[s].checked) {
                            r = !1;
                            break;
                        }
                        r = !0;
                    }
                    r ? t.classList.remove('line-through') : t.classList.add('line-through'), o.checked = !0;
                    for (var i = 0; i < e.length && !e[i].checked; i++)
                        i !== e.length - 1 || e[i].checked || (o.checked = !1);
                    o && n && o.setAttribute('aria-label', n.textContent + ' ' + Xe.PCenterSelectAllVendorsText);
                }, jo.prototype.loadHostList = function (e, o) {
                    void 0 === e && (e = '');
                    var n = [], r = [], t = [];
                    if (Oe.cookieListType !== W.GenVen && (Xe.Groups.forEach(function (e) {
                            h(e.SubGroups, [e]).forEach(function (e) {
                                if (o.length) {
                                    if (-1 !== o.indexOf(e.CustomGroupId)) {
                                        var t = Ho.getCookiesForGroup(e);
                                        r = h(r, t.firstPartyCookiesList), n = h(n, t.thirdPartyCookiesList);
                                    }
                                } else
                                    t = Ho.getCookiesForGroup(e), r = h(r, t.firstPartyCookiesList), n = h(n, t.thirdPartyCookiesList);
                            });
                        }), r.length && n.unshift({
                            HostName: Xe.PCFirstPartyCookieListText,
                            DisplayName: Xe.PCFirstPartyCookieListText,
                            HostId: 'first-party-cookies-group',
                            isFirstParty: !0,
                            Cookies: r,
                            Description: ''
                        })), Oe.showGeneralVendors) {
                        var s = this.getFilteredGenVendorsList(o), i = this.mapGenVendorListToHostFormat(s);
                        t = h(n, i);
                    } else
                        t = n;
                    Oe.currentGlobalFilteredList = t, this.initHostData(e, t);
                }, jo.prototype.mapGenVendorListToHostFormat = function (e) {
                    return e.map(function (e) {
                        return {
                            Cookies: e.Cookies,
                            DisplayName: e.Name,
                            HostName: e.Name,
                            HostId: e.VendorCustomId,
                            Description: e.Description,
                            Type: j.GenVendor,
                            isActive: -1 < Oe.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
                        };
                    });
                }, jo.prototype.mapGenVendorToHostFormat = function (e) {
                    return {
                        Cookies: e.Cookies,
                        DisplayName: e.Name,
                        HostName: e.Name,
                        HostId: e.VendorCustomId,
                        Description: e.Description,
                        Type: j.GenVendor
                    };
                }, jo.prototype.getFilteredGenVendorsList = function (t) {
                    var o = [], e = [];
                    if (t.length) {
                        Xe.Groups.forEach(function (e) {
                            h(e.SubGroups, [e]).forEach(function (e) {
                                -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function (e) {
                                    o.push(e);
                                });
                            });
                        });
                        var n = Xe.GeneralVendors;
                        return o.length && (e = n.filter(function (e) {
                            if (-1 < o.indexOf(e.VendorCustomId))
                                return e;
                        })), e;
                    }
                    return Xe.GeneralVendors;
                }, jo.prototype.initVendorsData = function (e, t) {
                    var o = t, n = Oe.vendors.list;
                    if (it(ut.P_Vendor_List + ' .back-btn-handler .pc-back-button-text').html(Xe.PCenterBackText), it(ut.P_Vendor_List + ' #select-all-text-container p').html(Xe.PCenterAllowAllConsentText), Ge.isV2Template && (it('#ot-sel-blk span:first-child').html(Xe.PCenterAllowAllConsentText || Xe.ConsentText), it('#ot-sel-blk span:last-child').html(Xe.LegitInterestText), Ze.legIntSettings.PAllowLI && !Ze.legIntSettings.PShowLegIntBtn || (it('#ot-sel-blk span:first-child').el[0].style.maxWidth = '100%')), this.hasIabVendors = 0 < o.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), 0 === o.length ? it('#ot-lst-cnt .ot-acc-cntr').hide() : it('#ot-lst-cnt .ot-acc-cntr').show(), it('#onetrust-pc-sdk ' + ut.P_Vendor_Container + ' .' + ut.P_Ven_Bx).length !== n.length && this.attachVendorsToDOM(), o.length !== n.length)
                        n.forEach(function (e) {
                            it(ut.P_Vendor_Container + ' #IAB' + e.vendorId).el[0].parentElement.style.display = -1 === o.indexOf(e) ? 'none' : '';
                        });
                    else
                        for (var r = it(ut.P_Vendor_Container + ' li[style^="display"]').el, s = 0; s < r.length; s++)
                            r[s].style.display = '';
                    !Ge.isV2Template && Ze.pcName === Ne || it('#onetrust-pc-sdk ' + ut.P_Vendor_Title).html(Xe.PCenterVendorsListText);
                    var i = document.querySelector('#vdr-lst-dsc');
                    if (!i && Xe.PCenterVendorListDescText)
                        if ((i = document.createElement('p')).id = 'vdr-lst-dsc', it(i).html(Xe.PCenterVendorListDescText), Ze.pcName !== Ne && Ze.pcName !== xe) {
                            var l = document.querySelector('#onetrust-pc-sdk ' + ut.P_Vendor_Title_Elm);
                            l && l.insertAdjacentElement('afterend', i);
                        } else {
                            var a = document.querySelector(ut.P_Vendor_Content + ' .ot-sdk-row');
                            a && a.insertAdjacentElement('beforebegin', i);
                        }
                    it('#onetrust-pc-sdk ' + ut.P_Select_Cntr).removeClass('ot-hide'), this.vendorsListEvent(), Ze.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent();
                }, jo.prototype.updateVendorsDOMToggleStatus = function (e) {
                    for (var t = it(ut.P_Vendor_Container + ' ' + ut.P_Tgl_Cntr).el, o = 0; o < t.length; o++) {
                        var n = t[o].querySelector('.' + ut.P_Ven_Ctgl + ' input'), r = t[o].querySelector('.' + ut.P_Ven_Ltgl + ' input');
                        n && tt.setCheckedAttribute('', n, e), r && tt.setCheckedAttribute('', r, e);
                    }
                    var s = it('#onetrust-pc-sdk #select-all-vendor-leg-handler').el[0];
                    s && (s.parentElement.classList.remove('line-through'), tt.setCheckedAttribute('', s, e));
                    var i = it('#onetrust-pc-sdk #select-all-vendor-groups-handler').el[0];
                    i && (i.parentElement.classList.remove('line-through'), tt.setCheckedAttribute('', i, e)), Xe.UseGoogleVendors && this.updateGoogleCheckbox(e), Oe.showGeneralVendors && Xe.GenVenOptOut && this.updateGenVenCheckbox(e);
                }, jo.prototype.updateGenVenCheckbox = function (e) {
                    for (var t = it(ut.P_Gven_List + ' .ot-ven-gvctgl input').el, o = 0; o < t.length; o++)
                        tt.setCheckedAttribute('', t[o], e);
                    var n = it('#onetrust-pc-sdk #ot-selall-gnven-handler').el[0];
                    n && (n.parentElement.classList.remove('line-through'), tt.setCheckedAttribute('', n, e));
                }, jo.prototype.updateGoogleCheckbox = function (e) {
                    for (var t = it('#ot-addtl-venlst .ot-tgl-cntr input').el, o = 0; o < t.length; o++)
                        tt.setCheckedAttribute('', t[o], e);
                    var n = it('#onetrust-pc-sdk #ot-selall-adtlven-handler').el[0];
                    n && (n.parentElement.classList.remove('line-through'), tt.setCheckedAttribute('', n, e));
                }, jo.prototype.updateVendorDisclosure = function (e, t) {
                    var o = it(ut.P_Vendor_Container + ' #IAB' + e).el[0].parentElement;
                    if (t && t.disclosures) {
                        var r = o.querySelector(ut.P_Ven_Dets), s = o.querySelector(ut.P_Ven_Disc).cloneNode(!0), n = s.cloneNode(!0);
                        n.innerHTML = '<p><b>' + Xe.PCenterVendorListDisclosure + ': </b></p>', r.insertAdjacentElement('beforeend', n), t.disclosures.forEach(function (e) {
                            var t = s.cloneNode(!0), o = '<p>' + Xe.PCenterVendorListStorageIdentifier + ' </p> <p>' + (e.name || e.identifier) + ' </p>';
                            if (e.type && (o += '<p>' + Xe.PCenterVendorListStorageType + ' </p> <p>' + e.type + ' </p>'), e.maxAgeSeconds) {
                                var n = tt.calculateCookieLifespan(e.maxAgeSeconds);
                                o += '<p>' + Xe.PCenterVendorListLifespan + ' </p> <p>' + n + ' </p>';
                            }
                            e.domain && (o += '<p>' + Xe.PCenterVendorListStorageDomain + ' </p> <p>' + e.domain + ' </p>'), e.purposes && (o += '<p>' + Xe.PCenterVendorListStoragePurposes + ' </p> <p>' + e.purposes + ' </p>'), t.innerHTML = o, r.insertAdjacentElement('beforeend', t);
                        });
                    }
                }, jo.prototype.attachVendorsToDOM = function () {
                    var H, M, F = Oe.vendors.list, q = Xe.IabType, R = Ze.pcName, j = Oe.vendors.vendorTemplate.cloneNode(!0);
                    Oe.discVendors = {}, Ge.isV2Template && (H = j.querySelector('.ot-ven-pur').cloneNode(!0), M = j.querySelector(ut.P_Ven_Disc).cloneNode(!0), it(j.querySelector('.ot-ven-dets')).html(''));
                    for (var e = function (e) {
                                var t = j.cloneNode(!0), o = F[e].vendorId, n = F[e].vendorName, r = t.querySelector('.' + ut.P_Ven_Bx), s = Oe.vendorsSetting[o];
                                tt.setHtmlAttributes(r, {
                                    id: 'IAB' + o,
                                    name: 'IAB' + o,
                                    'aria-controls': 'IAB-ACC-TXT' + o,
                                    'aria-label': n
                                }), r.nextElementSibling.setAttribute('for', 'IAB' + o), t.querySelector(ut.P_Ven_Name).innerText = n, tt.setHtmlAttributes(t.querySelector(ut.P_Ven_Link), {
                                    href: F[e].policyUrl,
                                    rel: 'noopener',
                                    target: '_blank'
                                }), t.querySelector(ut.P_Ven_Link).innerHTML = Xe.PCenterViewPrivacyPolicyText + '&nbsp;<span class=\'ot-scrn-rdr\'>' + n + ' ' + Xe.NewWinTxt + '</span>';
                                var i = Ge.isV2Template ? Go.chkboxEl.cloneNode(!0) : t.querySelector('.ot-checkbox'), l = i.cloneNode(!0), a = i.cloneNode(!0), c = t.querySelector(ut.P_Tgl_Cntr);
                                Ge.isV2Template || i.parentElement.removeChild(i);
                                var d = t.querySelector(ut.P_Arrw_Cntr);
                                if (s.consent) {
                                    a.classList.add(ut.P_Ven_Ctgl);
                                    var u = -1 !== rt.inArray(o + ':true', Oe.vendors.selectedVendors), p = a.querySelector('input');
                                    if (Ge.isV2Template) {
                                        p.classList.add('vendor-checkbox-handler');
                                        var k = a.querySelector('.ot-label-status');
                                        Xe.PCShowConsentLabels ? k.innerHTML = u ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(k);
                                    }
                                    tt.setCheckedAttribute('', p, u), tt.setHtmlAttributes(p, {
                                        id: ut.P_Vendor_CheckBx + '-' + e,
                                        vendorid: o,
                                        'aria-label': n
                                    }), a.querySelector('label').setAttribute('for', ut.P_Vendor_CheckBx + '-' + e), a.querySelector(ut.P_Label_Txt).textContent = n, R === Ne ? Xe.PCTemplateUpgrade ? c.insertAdjacentElement('beforeend', a) : it(c).append(a) : c.insertBefore(a, d);
                                }
                                if (s.legInt) {
                                    var h = -1 !== rt.inArray(o + ':true', Oe.vendors.selectedLegIntVendors);
                                    if (Ze.legIntSettings.PShowLegIntBtn) {
                                        var y = ft.generateLegIntButtonElements(h, o, !0);
                                        t.querySelector(ut.P_Acc_Txt).insertAdjacentHTML('beforeend', y);
                                    } else
                                        p = l.querySelector('input'), Ge.isV2Template && (p.classList.add('vendor-checkbox-handler'), k = l.querySelector('.ot-label-status'), Xe.PCShowConsentLabels ? k.innerHTML = h ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(k)), l.classList.add(ut.P_Ven_Ltgl), p.classList.remove('vendor-checkbox-handler'), p.classList.add('vendor-leg-checkbox-handler'), tt.setCheckedAttribute('', p, h), tt.setHtmlAttributes(p, {
                                            id: ut.P_Vendor_LegCheckBx + '-' + e,
                                            'leg-vendorid': o,
                                            'aria-label': n
                                        }), l.querySelector('label').setAttribute('for', ut.P_Vendor_LegCheckBx + '-' + e), l.querySelector(ut.P_Label_Txt).textContent = n, t.querySelector('.' + ut.P_Ven_Ctgl) && (d = t.querySelector('.' + ut.P_Ven_Ctgl)), R !== Ne || c.children.length ? c.insertBefore(l, d) : it(c).append(l), s.consent || R !== Ne || l.classList.add(ut.P_Ven_Ltgl_Only);
                                }
                                Ge.isV2Template && (c.insertAdjacentElement('beforeend', Go.arrowEl.cloneNode(!0)), Xe.PCAccordionStyle !== z.Caret && t.querySelector('.ot-ven-hdr').insertAdjacentElement('beforebegin', Go.plusMinusEl.cloneNode(!0)));
                                var f = t.querySelector(ut.P_Acc_Txt);
                                if (f && tt.setHtmlAttributes(f, {
                                        id: 'IAB-ACC-TXT' + o,
                                        'aria-labelledby': 'IAB-ACC-TXT' + o,
                                        role: 'region'
                                    }), F[e].deviceStorageDisclosureUrl && (tt.setHtmlAttributes(r, { 'disc-vid': o }), Oe.discVendors[o] = {
                                        isFetched: !1,
                                        disclosureUrl: F[e].deviceStorageDisclosureUrl
                                    }), Ge.isV2Template)
                                    U.populateVendorDetailsHtml(t, H, F[e], M);
                                else {
                                    var g = t.querySelector('.vendor-option-purpose'), b = t.querySelector('.vendor-consent-group'), m = t.querySelector('.legitimate-interest'), C = t.querySelector('.legitimate-interest-group'), v = t.querySelector('.spl-purpose'), P = t.querySelector('.spl-purpose-grp'), A = t.querySelector('.vendor-feature'), T = t.querySelector('.vendor-feature-group'), S = t.querySelector('.vendor-spl-feature'), I = t.querySelector('.vendor-spl-feature-grp'), L = b.cloneNode(!0), _ = C.cloneNode(!0), w = P.cloneNode(!0), x = T.cloneNode(!0), E = I.cloneNode(!0);
                                    M = t.querySelector(ut.P_Ven_Disc);
                                    var B = t.querySelector(ut.P_Ven_Dets), N = M.cloneNode(!0);
                                    M.parentElement.removeChild(M), U.attachVendorDisclosure(N, F[e]), B.insertAdjacentElement('afterbegin', N), b.parentElement.removeChild(b), s.consent && (it(g.querySelector('p')).text(Xe.ConsentPurposesText), F[e].purposes.forEach(function (e) {
                                        it(L.querySelector('.consent-category')).text(e.purposeName);
                                        var t = L.querySelector('.consent-status');
                                        t && L.removeChild(t), m.insertAdjacentHTML('beforebegin', L.outerHTML);
                                    })), s.consent || g.parentElement.removeChild(g);
                                    var V = _.querySelector('.vendor-opt-out-handler');
                                    'IAB2' === Xe.IabType && V.parentElement.removeChild(V), C.parentElement.removeChild(C), s.legInt && (it(m.querySelector('p')).text(Xe.LegitimateInterestPurposesText), Ze.legIntSettings.PAllowLI && 'IAB2' === Xe.IabType && F[e].legIntPurposes.forEach(function (e) {
                                        it(_.querySelector('.consent-category')).text(e.purposeName), m.insertAdjacentHTML('afterend', _.outerHTML);
                                    })), s.legInt || m.parentElement.removeChild(m), P.parentElement.removeChild(P), 'IAB2' === q && F[e].specialPurposes.forEach(function (e) {
                                        it(w.querySelector('.consent-category')).text(e.purposeName), v.insertAdjacentHTML('afterend', w.outerHTML);
                                    }), 0 === F[e].specialPurposes.length ? v.parentElement.removeChild(v) : it(v.querySelector('p')).text(Xe.SpecialPurposesText), T.parentElement.removeChild(T), it(A.querySelector('p')).text(Xe.FeaturesText), F[e].features.forEach(function (e) {
                                        it(x.querySelector('.consent-category')).text(e.featureName), A.insertAdjacentHTML('afterend', x.outerHTML);
                                    }), 0 === F[e].features.length && A.parentElement.removeChild(A), S.parentElement.removeChild(I), 'IAB2' === q && F[e].specialFeatures.forEach(function (e) {
                                        it(E.querySelector('.consent-category')).text(e.featureName), S.insertAdjacentHTML('afterend', E.outerHTML);
                                    }), 0 === F[e].specialFeatures.length ? S.parentElement.removeChild(S) : it(S.querySelector('p')).text(Xe.SpecialFeaturesText);
                                    var O = r.parentElement.querySelector('.vendor-purposes p');
                                    O.parentElement.removeChild(O);
                                }
                                it('#onetrust-pc-sdk ' + ut.P_Vendor_Container).append(t);
                                var G = it('#onetrust-pc-sdk ' + ut.P_Sel_All_Vendor_Consent_Handler).el[0];
                                G && G.setAttribute('aria-label', Xe.PCenterSelectAllVendorsText + ' ' + Xe.LegitInterestText);
                                var D = it('#onetrust-pc-sdk ' + ut.P_Sel_All_Vendor_Leg_Handler).el[0];
                                D && D.setAttribute('aria-label', Xe.PCenterSelectAllVendorsText + ' ' + Xe.ConsentText);
                            }, U = this, t = 0; t < F.length; t++)
                        e(t);
                }, jo.prototype.populateVendorDetailsHtml = function (e, t, o, n) {
                    var r = e.querySelector('.ot-ven-dets'), s = Oe.vendorsSetting[o.vendorId], i = n.cloneNode(!0);
                    if (this.attachVendorDisclosure(i, o), r.insertAdjacentElement('beforeEnd', i), s.consent) {
                        var l = t.cloneNode(!0), a = '<p>' + Xe.ConsentPurposesText + '</p>';
                        o.purposes.forEach(function (e) {
                            a += '<p>' + e.purposeName + '</p>';
                        }), l.innerHTML = a, r.insertAdjacentElement('beforeEnd', l);
                    }
                    if (s.legInt && o.legIntPurposes.length) {
                        var c = t.cloneNode(!0), d = '<p>' + Xe.LegitimateInterestPurposesText + '</p>';
                        o.legIntPurposes.forEach(function (e) {
                            d += '<p>' + e.purposeName + '</p>';
                        }), c.innerHTML = d, r.insertAdjacentElement('beforeEnd', c);
                    }
                    if ('IAB2' === Ze.iabType && o.specialPurposes.length) {
                        var u = t.cloneNode(!0), p = '<p>' + Xe.SpecialPurposesText + '</p>';
                        o.specialPurposes.forEach(function (e) {
                            p += '<p>' + e.purposeName + '</p>';
                        }), u.innerHTML = p, r.insertAdjacentElement('beforeEnd', u);
                    }
                    if (o.features.length) {
                        var k = t.cloneNode(!0), h = '<p>' + Xe.FeaturesText + '</p>';
                        o.features.forEach(function (e) {
                            h += '<p>' + e.featureName + '</p>';
                        }), k.innerHTML = h, r.insertAdjacentElement('beforeEnd', k);
                    }
                    if ('IAB2' === Ze.iabType && o.specialFeatures.length) {
                        var y = t.cloneNode(!0), f = '<p>' + Xe.SpecialFeaturesText + '</p>';
                        o.specialFeatures.forEach(function (e) {
                            f += '<p>' + e.featureName + '</p>';
                        }), y.innerHTML = f, r.insertAdjacentElement('beforeEnd', y);
                    }
                }, jo.prototype.InitializeVendorList = function () {
                    if (Oe.vendors.list = Oe.iabData ? Oe.iabData.vendors : null, Oe.vendors.vendorTemplate = it(ut.P_Vendor_Container + ' li').el[0].cloneNode(!0), it('#onetrust-pc-sdk ' + ut.P_Vendor_Container).html(''), !Ge.isV2Template && Ze.pcName === Ne) {
                        var e, t = Oe.vendors.vendorTemplate.querySelectorAll(ut.P_Acc_Header);
                        Ze.legIntSettings.PAllowLI && 'IAB2' === Ze.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e);
                    }
                }, jo.prototype.cancelVendorFilter = function () {
                    for (var e = it('#onetrust-pc-sdk .category-filter-handler').el, t = 0; t < e.length; t++) {
                        var o = e[t].getAttribute('data-purposeid');
                        e[t].checked && Oe.filterByIABCategories.indexOf(o) < 0 && (e[t].checked = '');
                    }
                }, jo.prototype.attachVendorDisclosure = function (e, t) {
                    var o = '<p><b>' + Xe.PCenterVendorListLifespan + ' :</b> ' + t.cookieMaxAge + '</p>';
                    t.usesNonCookieAccess && (o += '<p>' + Xe.PCenterVendorListNonCookieUsage + '</p>'), e.innerHTML = o;
                }, jo.prototype.updateVendorFilterList = function () {
                    for (var e = it('#onetrust-pc-sdk .category-filter-handler').el, t = 0; t < e.length; t++) {
                        var o = e[t].getAttribute('data-purposeid');
                        if (e[t].checked && Oe.filterByIABCategories.indexOf(o) < 0)
                            Oe.filterByIABCategories.push(o);
                        else if (!e[t].checked && -1 < Oe.filterByIABCategories.indexOf(o)) {
                            var n = Oe.filterByIABCategories;
                            Oe.filterByIABCategories.splice(n.indexOf(o), 1);
                        }
                    }
                    return Oe.filterByIABCategories;
                }, jo.prototype.saveVendorStatus = function () {
                    var e = Oe.vendors, t = Oe.oneTrustIABConsent;
                    t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
                    var o = Oe.addtlVendors;
                    o.vendorConsent = Object.keys(o.vendorSelected);
                }, jo.prototype.updateIabVariableReference = function () {
                    var e = Oe.oneTrustIABConsent, t = Oe.vendors;
                    t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
                    var o = Oe.addtlVendors;
                    o.vendorSelected = {}, o.vendorConsent.forEach(function (e) {
                        o.vendorSelected[e] = !0;
                    });
                }, jo.prototype.allowAllhandler = function () {
                    Ao.initializeIABData(!0, !1);
                }, jo.prototype.rejectAllHandler = function () {
                    Ao.initializeIABData(!1, !0);
                }, jo.prototype.populateAddtlVendors = function (e) {
                    var t = Xe.PCAccordionStyle === z.Caret ? Go.arrowEl.cloneNode(!0) : Go.plusMinusEl.cloneNode(!0), o = document.querySelector('#onetrust-pc-sdk .ot-sel-all-chkbox'), n = o.cloneNode(!0);
                    tt.removeChild(n.querySelector('#ot-selall-hostcntr')), tt.removeChild(o.querySelector('#ot-selall-vencntr')), tt.removeChild(o.querySelector('#ot-selall-licntr'));
                    var r = Go.accordionEl.cloneNode(!0);
                    r.classList.add('ot-iab-acc'), r.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', t.cloneNode(!0)), r.querySelector('.ot-acc-hdr').insertAdjacentHTML('beforeEnd', '<div class=\'ot-vensec-title\'>' + Xe.PCIABVendorsText + '</div>'), r.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', n), r.querySelector('.ot-acc-txt').insertAdjacentElement('beforeEnd', it('#ot-ven-lst').el[0]), it('#ot-lst-cnt .ot-sdk-column').append(r), r.querySelector('button').setAttribute('aria-label', Xe.PCIABVendorsText), this.iabAccInit = !0;
                    var s = n.cloneNode(!0);
                    tt.removeChild(s.querySelector('#ot-selall-licntr')), s.querySelector('.ot-chkbox').id = 'ot-selall-adtlvencntr', s.querySelector('input').id = 'ot-selall-adtlven-handler', s.querySelector('label').setAttribute('for', 'ot-selall-adtlven-handler');
                    var i = Go.accordionEl.cloneNode(!0);
                    i.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', t.cloneNode(!0)), i.querySelector('.ot-acc-hdr').insertAdjacentHTML('beforeEnd', '<div class=\'ot-vensec-title\'>' + Xe.PCGoogleVendorsText + '</div>'), i.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', s), i.querySelector('.ot-acc-txt').insertAdjacentHTML('beforeEnd', '<ul id=\'ot-addtl-venlst\'></ul>'), i.classList.add('ot-adtlv-acc'), i.querySelector('button').setAttribute('aria-label', Xe.PCGoogleVendorsText);
                    var l = Oe.vendors.vendorTemplate.cloneNode(!0);
                    for (var a in (l.querySelector('button').classList.remove('ot-ven-box'), l.querySelector('button').classList.add('ot-addtl-venbox'), tt.removeChild(l.querySelector('.ot-acc-txt')), e))
                        if (e[a]) {
                            var c = l.cloneNode(!0), d = e[a].name;
                            c.querySelector(ut.P_Ven_Name).innerText = d;
                            var u = c.querySelector('button');
                            tt.setHtmlAttributes(u, { id: 'Adtl-IAB' + a }), tt.setHtmlAttributes(c.querySelector(ut.P_Ven_Link), {
                                href: e[a].policyUrl,
                                rel: 'noopener',
                                target: '_blank'
                            }), c.querySelector(ut.P_Ven_Link).innerHTML = Xe.PCenterViewPrivacyPolicyText + '&nbsp;<span class=\'ot-scrn-rdr\'>' + d + ' ' + Xe.NewWinTxt + '</span>';
                            var p = Go.chkboxEl.cloneNode(!0);
                            p.classList.remove('ot-ven-ctgl'), p.classList.add('ot-ven-adtlctgl');
                            var k = Boolean(Oe.addtlVendors.vendorSelected[a]), h = p.querySelector('input');
                            h.classList.add('ot-addtlven-chkbox-handler');
                            var y = p.querySelector('.ot-label-status');
                            Xe.PCShowConsentLabels ? y.innerHTML = k ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(y), tt.setCheckedAttribute('', h, k), tt.setHtmlAttributes(h, {
                                id: 'ot-addtlven-chkbox-' + a,
                                'addtl-vid': a,
                                'aria-label': d
                            }), p.querySelector('label').setAttribute('for', 'ot-addtlven-chkbox-' + a), p.querySelector(ut.P_Label_Txt).textContent = d;
                            var f = c.querySelector(ut.P_Tgl_Cntr);
                            it(f).append(p), f.insertAdjacentElement('beforeend', Go.arrowEl.cloneNode(!0)), Xe.PCAccordionStyle !== z.Caret && c.querySelector('.ot-ven-hdr').insertAdjacentElement('beforebegin', Go.plusMinusEl.cloneNode(!0)), it(i.querySelector('#ot-addtl-venlst')).append(c);
                        }
                    it('#ot-lst-cnt .ot-sdk-column').append(i), it('#onetrust-pc-sdk').on('click', '#ot-pc-lst .ot-acc-cntr > input', function (e) {
                        tt.setCheckedAttribute(null, e.target, e.target.checked);
                    }), this.showConsentHeader();
                }, jo.prototype.populateGeneralVendors = function () {
                    var u = this, e = Xe.GeneralVendors, t = document.querySelector('.ot-gv-acc'), p = !!t;
                    if (!e.length)
                        return this.hasGenVendors = !1, void (t && it(t).hide());
                    this.hasGenVendors = !0, t && it(t).show();
                    var o = Xe.PCAccordionStyle === z.Caret ? Go.arrowEl.cloneNode(!0) : Go.plusMinusEl.cloneNode(!0);
                    this.iabAccInit || this.addIabAccordion();
                    var n = document.createElement('div');
                    n.setAttribute('class', 'ot-sel-all-chkbox');
                    var r = Go.chkboxEl.cloneNode(!0);
                    r.id = 'ot-selall-gnvencntr', r.querySelector('input').id = 'ot-selall-gnven-handler', r.querySelector('label').setAttribute('for', 'ot-selall-gnven-handler'), it(n).append(r);
                    var k = Go.accordionEl.cloneNode(!0);
                    k.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', o.cloneNode(!0)), k.querySelector('.ot-acc-hdr').insertAdjacentHTML('beforeEnd', '<div class=\'ot-vensec-title\'>' + Xe.PCenterGeneralVendorsText + '</div>'), Xe.GenVenOptOut && k.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', n), k.querySelector('.ot-acc-txt').insertAdjacentHTML('beforeEnd', '<ul id=\'ot-gn-venlst\'></ul>'), k.classList.add('ot-gv-acc'), k.querySelector('button').setAttribute('aria-label', Xe.PCenterGeneralVendorsText);
                    var h = Oe.vendors.vendorTemplate.cloneNode(!0);
                    h.querySelector('button').classList.remove('ot-ven-box'), h.querySelector('button').classList.add('ot-gv-venbox'), it(h.querySelector('.ot-acc-txt')).html('<ul class="ot-host-opt"></ul>'), p && it('' + ut.P_Gven_List).html('');
                    var y = !0;
                    e.forEach(function (e) {
                        var o = u.mapGenVendorToHostFormat(e), n = h.cloneNode(!0), t = e.VendorCustomId, r = e.Name;
                        n.querySelector(ut.P_Ven_Name).innerText = r;
                        var s = n.querySelector('button');
                        if (tt.setHtmlAttributes(s, { id: 'Gn-' + t }), e.PrivacyPolicyUrl ? (tt.setHtmlAttributes(n.querySelector(ut.P_Ven_Link), {
                                href: e.PrivacyPolicyUrl,
                                rel: 'noopener',
                                target: '_blank'
                            }), n.querySelector(ut.P_Ven_Link).innerHTML = Xe.PCenterViewPrivacyPolicyText + '&nbsp;<span class=\'ot-scrn-rdr\'>' + r + ' ' + Xe.NewWinTxt + '</span>') : n.querySelector(ut.P_Ven_Link).classList.add('ot-hide'), Xe.GenVenOptOut) {
                            var i = Go.chkboxEl.cloneNode(!0);
                            i.classList.remove('ot-ven-ctgl'), i.classList.add('ot-ven-gvctgl');
                            var l = Boolean(Oe.genVendorsConsent[t]), a = i.querySelector('input');
                            a.classList.add('ot-gnven-chkbox-handler');
                            var c = i.querySelector('.ot-label-status');
                            Xe.PCShowConsentLabels ? c.innerHTML = l ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(c), tt.setCheckedAttribute('', a, l), tt.setHtmlAttributes(a, {
                                id: 'ot-gnven-chkbox-' + t,
                                'gn-vid': t,
                                'aria-label': r
                            }), _t.isGenVenPartOfAlwaysActiveGroup(t) ? tt.setDisabledAttribute(null, a, !0) : y = !1, i.querySelector('label').setAttribute('for', 'ot-gnven-chkbox-' + t), i.querySelector(ut.P_Label_Txt).textContent = r;
                            var d = n.querySelector(ut.P_Tgl_Cntr);
                            it(d).append(i), d.insertAdjacentElement('beforeend', Go.arrowEl.cloneNode(!0));
                        }
                        Xe.PCAccordionStyle !== z.Caret && n.querySelector('.ot-ven-hdr').insertAdjacentElement('beforebegin', Go.plusMinusEl.cloneNode(!0)), e.Cookies.length || it(n).addClass('ot-hide-acc'), e.Cookies.forEach(function (e) {
                            var t = u.getCookieElement(e, o);
                            n.querySelector('.ot-host-opt').append(t);
                        }), p ? it('' + ut.P_Gven_List).append(n) : it(k.querySelector('' + ut.P_Gven_List)).append(n);
                    }), p || it('#ot-lst-cnt .ot-sdk-column').append(k), it('#onetrust-pc-sdk').on('click', '#ot-pc-lst .ot-acc-cntr > input', function (e) {
                        tt.setCheckedAttribute(null, e.target, e.target.checked);
                    }), this.showConsentHeader(), y && tt.setDisabledAttribute('#ot-selall-gnven-handler', null, !0);
                }, jo.prototype.addIabAccordion = function () {
                    var e = Xe.PCAccordionStyle === z.Caret ? Go.arrowEl.cloneNode(!0) : Go.plusMinusEl.cloneNode(!0), t = document.querySelector('#onetrust-pc-sdk .ot-sel-all-chkbox'), o = t.cloneNode(!0);
                    tt.removeChild(o.querySelector('#ot-selall-hostcntr')), tt.removeChild(t.querySelector('#ot-selall-vencntr')), tt.removeChild(t.querySelector('#ot-selall-licntr'));
                    var n = Go.accordionEl.cloneNode(!0);
                    n.classList.add('ot-iab-acc'), n.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', e.cloneNode(!0)), n.querySelector('.ot-acc-hdr').insertAdjacentHTML('beforeEnd', '<div class=\'ot-vensec-title\'>' + Xe.PCIABVendorsText + '</div>'), n.querySelector('.ot-acc-hdr').insertAdjacentElement('beforeEnd', o), n.querySelector('.ot-acc-txt').insertAdjacentElement('beforeEnd', it('#ot-ven-lst').el[0]), it('#ot-lst-cnt .ot-sdk-column').append(n), n.querySelector('button').setAttribute('aria-label', Xe.PCIABVendorsText), this.iabAccInit = !0;
                }, jo.prototype.showConsentHeader = function () {
                    var e = Ze.legIntSettings;
                    it('#onetrust-pc-sdk .ot-sel-all-hdr').show(), e.PAllowLI && !e.PShowLegIntBtn || it('#onetrust-pc-sdk .ot-li-hdr').hide();
                }, jo.prototype.getCookieElement = function (e, t) {
                    var o = Oe.hosts.hostCookieTemplate.cloneNode(!0), n = o.querySelector('div').cloneNode(!0);
                    n.classList.remove('cookie-name-container'), it(o).html('');
                    var r = e.Name;
                    Xe.AddLinksToCookiepedia && t.isFirstParty && (r = lt.getCookieLabel(e, Xe.AddLinksToCookiepedia));
                    var s = n.cloneNode(!0);
                    if (s.classList.add(ut.P_c_Name), s.querySelector('div:nth-child(1)').innerHTML = Xe.pcCListName, s.querySelector('div:nth-child(2)').innerHTML = r, it(o).append(s), Xe.pcShowCookieHost) {
                        var i = n.cloneNode(!0);
                        i.classList.add(ut.P_c_Host), i.querySelector('div:nth-child(1)').innerHTML = Xe.pcCListHost, i.querySelector('div:nth-child(2)').innerHTML = e.Host, it(o).append(i);
                    }
                    if (Xe.pcShowCookieDuration) {
                        var l = n.cloneNode(!0);
                        l.classList.add(ut.P_c_Duration), l.querySelector('div:nth-child(1)').innerHTML = Xe.pcCListDuration, l.querySelector('div:nth-child(2)').innerHTML = e.IsSession ? 'Session' : lt.getDuration(e).toLowerCase(), it(o).append(l);
                    }
                    if (Xe.pcShowCookieType) {
                        var a = t.Type === j.GenVendor ? !e.isThirdParty : t.isFirstParty, c = n.cloneNode(!0);
                        c.classList.add(ut.P_c_Type), c.querySelector('div:nth-child(1)').innerHTML = Xe.pcCListType, c.querySelector('div:nth-child(2)').innerHTML = a ? '1st Party' : '3rd Party', it(o).append(c);
                    }
                    if (Xe.pcShowCookieCategory) {
                        var d = void 0;
                        if (d = t.Type === j.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                            var u = n.cloneNode(!0);
                            u.classList.add(ut.P_c_Category), u.querySelector('div:nth-child(1)').innerHTML = Xe.pcCListCategory, u.querySelector('div:nth-child(2)').innerHTML = d, it(o).append(u);
                        }
                    }
                    if (Xe.pcShowCookieDescription && e.description) {
                        var p = n.cloneNode(!0);
                        p.classList.add(ut.P_c_Desc), p.querySelector('div:nth-child(1)').innerHTML = Xe.pcCListDescription, p.querySelector('div:nth-child(2)').innerHTML = e.description, it(o).append(p);
                    }
                    return o;
                }, jo);
            function jo() {
                this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this.googleSearchSelectors = {
                    vendorAccBtn: '#ot-addtl-venlst #Adtl-IAB',
                    name: 'name',
                    accId: '.ot-adtlv-acc',
                    selectAllEvntHndlr: '#ot-selall-adtlven-handler',
                    venListId: '#ot-addtl-venlst',
                    ctgl: '.ot-ven-adtlctgl'
                }, this.genVendorSearchSelectors = {
                    vendorAccBtn: '#ot-gn-venlst #Gn-',
                    name: 'Name',
                    accId: '.ot-gv-acc',
                    selectAllEvntHndlr: '#ot-selall-gnven-handler',
                    venListId: '#ot-gn-venlst',
                    ctgl: '.ot-ven-gvctgl'
                };
            }
            var Uo, zo = (Wo.prototype.updateGtmMacros = function (e) {
                    void 0 === e && (e = !0);
                    var t = [];
                    Oe.groupsConsent.forEach(function (e) {
                        tt.endsWith(e, ':1') && Ao.canSoftOptInInsertForGroup(e.replace(':1', '')) && t.push(e.replace(':1', ''));
                    }), Oe.hostsConsent.forEach(function (e) {
                        tt.endsWith(e, ':1') && t.push(e.replace(':1', ''));
                    }), Oe.showGeneralVendors && Xe.GenVenOptOut && Xe.GeneralVendors.forEach(function (e) {
                        Oe.genVendorsConsent[e.VendorCustomId] && (Oe.softOptInGenVendors.includes(e.VendorCustomId) && Vt.isLandingPage() || t.push(e.VendorCustomId));
                    });
                    var o, n, r = ',' + tt.arrToStr(t) + ',';
                    window.OnetrustActiveGroups = r, window.OptanonActiveGroups = r, void 0 !== window.dataLayer ? window.dataLayer.constructor === Array && (window.dataLayer.push({
                        event: 'OneTrustLoaded',
                        OnetrustActiveGroups: r
                    }), window.dataLayer.push({
                        event: 'OptanonLoaded',
                        OptanonActiveGroups: r
                    })) : window.dataLayer = [
                        {
                            event: 'OneTrustLoaded',
                            OnetrustActiveGroups: r
                        },
                        {
                            event: 'OptanonLoaded',
                            OptanonActiveGroups: r
                        }
                    ], e && (o = new CustomEvent('consent.onetrust', { detail: t }));
                    var s = et.readCookieParam(le.OPTANON_CONSENT, 'groups');
                    !Oe.fireOnetrustGrp && s && !e || (Oe.fireOnetrustGrp = !1, window.dataLayer.constructor === Array && window.dataLayer.push({
                        event: 'OneTrustGroupsUpdated',
                        OnetrustActiveGroups: r
                    }), n = new CustomEvent('OneTrustGroupsUpdated', { detail: t })), setTimeout(function () {
                        o && window.dispatchEvent(o), n && window.dispatchEvent(n);
                    });
                }, Wo);
            function Wo() {
            }
            var Ko, Yo = 'Banner', Jo = 'Preference Center', Qo = 'Close', Zo = 'Allow All', Xo = 'Reject All', $o = 'Confirm', en = (tn.prototype.setBannerFocus = function () {
                    var e = Array.prototype.slice.call(it('#onetrust-banner-sdk .onetrust-vendors-list-handler').el), t = Array.prototype.slice.call(it('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el), o = Array.prototype.slice.call(it('#onetrust-banner-sdk .ot-bnr-save-handler').el), n = Array.prototype.slice.call(it('#onetrust-banner-sdk #onetrust-pc-btn-handler').el), r = Array.prototype.concat.call(Array.prototype.slice.call(it('#onetrust-banner-sdk .category-switch-handler:not([disabled])').el), Array.prototype.slice.call(it('#onetrust-banner-sdk .ot-cat-lst button').el), e), s = Array.prototype.concat.call(t, r);
                    Ze.bannerName === Te && (s = Array.prototype.concat.call(e, t));
                    var i = Array.prototype.slice.call(it('#onetrust-banner-sdk #onetrust-accept-btn-handler').el), l = Array.prototype.slice.call(it('#onetrust-banner-sdk #onetrust-reject-all-handler').el), a = Array.prototype.concat.call(o, i, l, n);
                    (Ze.bannerName !== Pe || Xe.IsIabEnabled) && Ze.bannerName !== ve && Ze.bannerName !== Ie || (a = Array.prototype.concat.call(n, l, i));
                    var c = Array.prototype.slice.call(it('#onetrust-banner-sdk .ot-gv-list-handler').el);
                    Ze.bannerName === Le ? (s = Array.prototype.concat.call(c, s), a = Array.prototype.slice.call(it('#onetrust-banner-sdk #onetrust-button-group button').el)) : s = Array.prototype.concat.call(s, c), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(it('#onetrust-banner-sdk #onetrust-cookie-btn').el), s, Array.prototype.slice.call(it('#onetrust-banner-sdk .banner-option-input').el), a, Array.prototype.slice.call(it('#onetrust-banner-sdk .ot-bnr-footer-logo a').el), Array.prototype.slice.call(it('#onetrust-banner-sdk .onetrust-close-btn-handler').el)), Ge.fp.CookieV2BannerFocus && this.bannerEl.unshift(Array.prototype.slice.call(it('#onetrust-banner-sdk').el)[0]), this.bannerEl[0].focus();
                }, tn.prototype.handleBannerFocus = function (e, t) {
                    var o = e.target, n = Ko.bannerEl, r = n.indexOf(o), s = n.length - 1;
                    if (!Xe.ForceConsent && Ge.fp.CookieV2BannerFocus && (t && 0 === r || !t && r === s))
                        lt.resetFocusToBody();
                    else {
                        for (var i = null; !i;) {
                            var l = void 0;
                            0 !== (l = t ? 0 === r ? n[s] : n[r - 1] : r === s ? n[0] : n[r + 1]).clientHeight || 0 !== l.offsetHeight ? i = l : t ? r-- : r++;
                        }
                        i && (e.preventDefault(), i.focus());
                    }
                }, tn.prototype.setPCFocus = function (e) {
                    if (e && !(e.length <= 0)) {
                        for (var t = 0; t < e.length; t++)
                            e[t].setAttribute('tabindex', '0');
                        this.setFirstAndLast(e);
                        var o = Xe.ShowPreferenceCenterCloseButton, n = o ? this.getElementForFocus(e, Xe.Popup ? 2 : 1, !0) : null, r = { preventScroll: !0 };
                        this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(), this.firstItem && it(this.firstItem).on('keydown', Ko.firstItemHandler), this.lastItem && it(this.lastItem).on('keydown', Ko.lastItemHandler);
                    }
                }, tn.prototype.setFirstAndLast = function (e) {
                    this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null;
                }, tn.prototype.getPCElements = function () {
                    var e = '#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk .' + ut.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
                    return Oe.pcLayer === S.CookieList ? e += ' ,#onetrust-pc-sdk ' + ut.P_Content + ' .powered-by-logo' : e += ',#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo', Array.prototype.slice.call(it(e).el);
                }, tn.prototype.getActiveTab = function () {
                    return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]');
                }, tn.prototype.getElementForFocus = function (e, t, o) {
                    for (var n = e[t]; o ? null === n.offsetParent && t < e.length - 1 : null === n.offsetParent && 0 < t;)
                        n = e[t], o ? ++t : --t;
                    return n;
                }, tn.prototype.firstItemHandler = function (e) {
                    var t = document.getElementById('onetrust-banner-sdk');
                    if (9 === e.keyCode && e.shiftKey && Ko.firstItem !== t)
                        e.preventDefault(), Ko.lastItem.focus();
                    else {
                        var o = 'close-pc-btn-handler' === e.target.id && ('13' === e.keyCode || '32' === e.keyCode || 'Enter' === e.code || 'Space' === e.code);
                        if (Xe.Tab && Oe.pcLayer === S.PrefCenterHome && !o) {
                            var n = Ko.getActiveTab();
                            n && (e.preventDefault(), n.focus());
                        }
                    }
                }, tn.prototype.lastItemHandler = function (e) {
                    if (9 === e.keyCode && !e.shiftKey) {
                        e.preventDefault();
                        var t = Oe.pcLayer === S.VendorList || Oe.pcLayer === S.CookieList;
                        Xe.Tab && Oe.isPCVisible && !Xe.ShowPreferenceCenterCloseButton && !t ? Ko.getActiveTab().focus() : Ko.firstItem.focus();
                    }
                }, tn);
            function tn() {
                this.bannerEl = [];
            }
            var on, nn = (rn.prototype.showConsentNotice = function () {
                    switch (!Xe.NoBanner || Xe.ForceConsent ? it('.onetrust-pc-dark-filter').removeClass('ot-hide') : it('.onetrust-pc-dark-filter').addClass('ot-hide'), it('#onetrust-pc-sdk').removeClass('ot-hide'), Ze.pcName) {
                    case Ee:
                        it('#onetrust-pc-sdk').el[0].classList.contains('ot-animated') || it('#onetrust-pc-sdk').addClass('ot-animated');
                        var e = Xe.PreferenceCenterPosition, t = Xe.useRTL, o = t ? 'right' : 'left', n = t ? 'left' : 'right';
                        it('#onetrust-pc-sdk').el[0].classList.contains('ot-slide-out-' + ('right' === e ? n : o)) && it('#onetrust-pc-sdk').removeClass('ot-slide-out-' + ('right' === e ? n : o)), it('#onetrust-pc-sdk').addClass('ot-slide-in-' + ('right' === e ? n : o));
                    }
                    xo.setAllowAllButton(), Ko.setPCFocus(Ko.getPCElements()), Xe.NoBanner && Xe.ScrollCloseBanner || this.pcHasScroll();
                }, rn.prototype.hideConsentNoticeV2 = function () {
                    if (0 !== it('' + this.ONETRUST_PC_SDK).length) {
                        if (Ge.isV2Template && this.closePCText(), Xe.ForceConsent && !lt.isCookiePolicyPage(Xe.AlertNoticeText) && !ft.isAlertBoxClosedAndValid() && Xe.ShowAlertNotice ? it('' + this.ONETRUST_PC_DARK_FILTER).css('z-index: 2147483645').show() : it('' + this.ONETRUST_PC_DARK_FILTER).fadeOut(Xe.Panel ? 500 : 400), Xe.Panel) {
                            var e = Xe.PreferenceCenterPosition, t = Xe.useRTL, o = t ? 'right' : 'left', n = t ? 'left' : 'right';
                            it('' + this.ONETRUST_PC_SDK).removeClass('ot-slide-in-' + ('right' === e ? n : o)), it('' + this.ONETRUST_PC_SDK).addClass('ot-slide-out-' + ('right' === e ? n : o));
                        }
                        if (it('' + this.ONETRUST_PC_SDK).fadeOut(Xe.Panel ? 500 : 400), Oe.isPCVisible = !1, Xe.NoBanner && Xe.ScrollCloseBanner || (it('html').el[0].style.overflow = this.htmlScrollProp || '', it('body').el[0].style.overflow = this.bodyScrollProp || ''), Oe.pcLayer = S.Banner, Oe.pcSource || ft.isAlertBoxClosedAndValid())
                            if (Oe.pcSource)
                                Oe.pcSource.focus(), Oe.pcSource = null;
                            else if (Ge.fp.CookieV2BannerFocus)
                                lt.resetFocusToBody();
                            else {
                                var r = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                r.length && r[0].focus();
                            }
                        else {
                            var s = it('#onetrust-banner-sdk #onetrust-pc-btn-handler').el[0];
                            s && s.focus();
                        }
                    }
                }, rn.prototype.closePCText = function () {
                    var e = document.querySelector('#onetrust-pc-sdk span[aria-live]'), t = Xe.AboutCookiesText;
                    e.innerText = t + ' ' + Xe.pcDialogClose;
                }, rn.prototype.pcHasScroll = function () {
                    var e = it(ut.P_Grp_Container).el[0] || it('#onetrust-pc-sdk ' + ut.P_Content).el[0];
                    e.scrollHeight > e.clientHeight && (this.bodyScrollProp = it('body').el[0].style.overflow, this.htmlScrollProp = it('html').el[0].style.overflow, it('html').el[0].style.overflow = 'hidden', it('body').el[0].style.overflow = 'hidden');
                }, rn);
            function rn() {
                this.bodyScrollProp = '', this.htmlScrollProp = '', this.ONETRUST_PC_SDK = '#onetrust-pc-sdk', this.ONETRUST_PC_DARK_FILTER = '.onetrust-pc-dark-filter';
            }
            var sn, ln = (an.prototype.init = function () {
                    this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler();
                }, an.prototype.getContent = function () {
                    return a(this, void 0, void 0, function () {
                        return d(this, function (e) {
                            return [
                                2,
                                Co.getSyncNtfyContent().then(function (e) {
                                    Oe.syncNtfyGrp = {
                                        name: e.name,
                                        html: atob(e.html),
                                        css: e.css
                                    };
                                })
                            ];
                        });
                    });
                }, an.prototype.insertHtml = function () {
                    function e(e) {
                        return t.querySelector(e);
                    }
                    this.removeHtml();
                    var t = document.createDocumentFragment(), o = document.createElement('div');
                    it(o).html(Oe.syncNtfyGrp.html);
                    var n = o.querySelector(this.El);
                    Xe.useRTL && it(n).attr('dir', 'rtl'), it(t).append(n);
                    var r = Xe.NtfyConfig;
                    this.initHtml('Sync', r.Sync, e, t.querySelector(this.El)), r.ShowCS ? it(e('.ot-pc-handler')).html(r.CSTxt) : (it(n).addClass('ot-hide-csbtn'), e('.ot-sync-btncntr').parentElement.removeChild(e('.ot-sync-btncntr')));
                    var s = document.createElement('div');
                    it(s).append(t), it('#onetrust-consent-sdk').append(s.firstChild);
                }, an.prototype.initHandler = function () {
                    it(this.El + ' .ot-sync-close-handler').on('click', function () {
                        return sn.close();
                    });
                }, an.prototype.showNty = function () {
                    var e = it(this.El);
                    e.css('bottom: -300px'), e.animate({ bottom: '1em' }, 1000), setTimeout(function () {
                        e.css('bottom: 1rem');
                    }, 1000), e.focus();
                }, an.prototype.changeState = function () {
                    setTimeout(function () {
                        sn.refreshState();
                    }, 1500);
                }, an.prototype.refreshState = function () {
                    function e(e) {
                        return t.querySelector(e);
                    }
                    var t = it(this.El).el[0];
                    t.classList.add('ot-nty-complete'), t.classList.remove('ot-nty-sync');
                    var o = Xe.NtfyConfig;
                    this.initHtml('Complete', o.Complete, e, t), o.ShowCS && ('LINK' === o.CSType && it(e('.ot-pc-handler')).addClass('ot-pc-link'), it('.ot-sync-btncntr').show('inline-block'), this.alignContent(), it(window).on('resize', function () {
                        return sn.resizeEvent;
                    })), setTimeout(function () {
                        sn.close();
                    }, 1000 * Xe.NtfyConfig.NtfyDuration);
                }, an.prototype.isNtyVisible = function () {
                    var e = !1, t = document.getElementById(this.El);
                    return t && t.getAttribute('style') && (e = -1 !== t.getAttribute('style').indexOf('display:none')), e;
                }, an.prototype.insertCss = function () {
                    var e = document.getElementById('onetrust-style');
                    e.innerHTML += Oe.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles();
                }, an.prototype.addCustomStyles = function () {
                    var e = Xe.NtfyConfig, t = e.Sync, o = e.Complete, n = e.CSButton, r = e.CSLink;
                    return '\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color:' + t.BgColor + ';\n            border:1px solid ' + t.BdrColor + ';\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill:' + t.IconBgColor + ';\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align:' + t.TitleAlign + ';\n            color:' + t.TitleColor + ';\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align:' + t.DescAlign + ';\n            color:' + t.DescColor + '; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color:' + o.BgColor + ';\n            border:1px solid ' + o.BdrColor + ';\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill:' + o.IconBgColor + ';\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align:' + o.TitleAlign + ';\n            color:' + o.TitleColor + ';\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align:' + o.DescAlign + ';\n            color:' + o.DescColor + '; \n        }\n        ' + ('BUTTON' === e.CSType ? '\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color:' + n.BgColor + ';\n            border:1px solid ' + n.BdrColor + ';\n            color:' + n.Color + ';\n            text-align:' + n.Align + ';\n        }' : ' #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color:' + r.Color + ';\n            text-align:' + r.Align + ';\n        }') + '\n        ';
                }, an.prototype.initHtml = function (e, t, o, n) {
                    var r = 'Sync' === e ? '.ot-sync-refresh' : '.ot-sync-check', s = 'Complete' === e ? '.ot-sync-refresh' : '.ot-sync-check';
                    t.ShowIcon ? (it(o(r)).show(), it(o(s)).hide(), it(o('.ot-sync-icon')).show('inline-block'), n.classList.remove('ot-hide-icon')) : (it(o('.ot-sync-icon')).hide(), n.classList.add('ot-hide-icon')), t.Title ? it(o('#ot-sync-title')).html(t.Title) : it(o('#ot-sync-title')).hide(), t.Desc ? it(o('.ot-sync-desc')).html(t.Desc) : it(o('.ot-sync-desc')).hide(), t.ShowClose ? (it(o('.ot-sync-close-handler')).show('inline-block'), it(o('.ot-close-icon')).attr('aria-label', t.CloseAria), n.classList.remove('ot-hide-close')) : (it(o('.ot-sync-close-handler')).hide(), n.classList.add('ot-hide-close'));
                }, an.prototype.close = function () {
                    this.hideSyncNtfy(), lt.resetFocusToBody();
                }, an.prototype.hideSyncNtfy = function () {
                    Xe.NtfyConfig.ShowCS && window.removeEventListener('resize', sn.resizeEvent), it('#ot-sync-ntfy').fadeOut(400);
                }, an.prototype.removeHtml = function () {
                    var e = it(this.El).el;
                    e && tt.removeChild(e);
                }, an.prototype.alignContent = function () {
                    it('.ot-sync-btncntr').el[0].clientHeight > it('.ot-sync-titlecntr').el[0].clientHeight && (it('.ot-sync-titlecntr').addClass('ot-pos-abs'), it('.ot-sync-btncntr').addClass('ot-pos-rel'));
                }, an.prototype.resizeEvent = function () {
                    window.innerWidth <= 896 && sn.alignContent();
                }, an);
            function an() {
                this.El = '#ot-sync-ntfy';
            }
            var cn, dn = (un.prototype.closeBanner = function (e) {
                    this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1);
                }, un.prototype.allowAll = function (e, t) {
                    void 0 === t && (t = !1), Ge.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t);
                }, un.prototype.bannerActionsHandler = function (t, n) {
                    Vt.setLandingPathParam(ie.NOT_LANDING_PAGE), Oe.groupsConsent = [], Oe.hostsConsent = [], Oe.genVendorsConsent = {};
                    var r = {};
                    Xe.Groups.forEach(function (e) {
                        if (e.IsAboutGroup)
                            return !1;
                        h(e.SubGroups, [e]).forEach(function (e) {
                            var o = !!t || !!n && yt.isAlwaysActiveGroup(e);
                            -1 < ze.indexOf(e.Type) && Oe.groupsConsent.push(e.CustomGroupId + ':' + (o && e.HasConsentOptOut ? '1' : '0')), e.Hosts.length && (Xe.allowHostOptOut || Oe.genVenOptOutEnabled) && e.Hosts.forEach(function (e) {
                                if (r[e.HostId])
                                    Et.updateHostStatus(e, o);
                                else {
                                    r[e.HostId] = !0;
                                    var t = Et.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                                    Oe.hostsConsent.push(e.HostId + ':' + (t ? '1' : '0'));
                                }
                            }), Oe.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function (e) {
                                _t.updateGenVendorStatus(e, o);
                            });
                        });
                    }), Xe.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler()), on.hideConsentNoticeV2(), St.writeGrpParam(le.OPTANON_CONSENT), St.writeHstParam(le.OPTANON_CONSENT), Oe.genVenOptOutEnabled && St.writeGenVenCookieParam(le.OPTANON_CONSENT), Ho.substitutePlainTextScriptTags(), Uo.updateGtmMacros(), this.executeOptanonWrapper();
                }, un.prototype.nextPageCloseBanner = function () {
                    Vt.isLandingPage() || ft.isAlertBoxClosedAndValid() || this.closeBanner(Xe.NextPageAcceptAllCookies);
                }, un.prototype.rmScrollAndClickBodyEvents = function () {
                    Xe.ScrollCloseBanner && window.removeEventListener('scroll', this.scrollCloseBanner), Xe.OnClickCloseBanner && document.body.removeEventListener('click', this.bodyClickEvent);
                }, un.prototype.onClickCloseBanner = function (e) {
                    ft.isAlertBoxClosedAndValid() || (Rt.triggerGoogleAnalyticsEvent(Kt, Yt), this.closeBanner(Xe.OnClickAcceptAllCookies), e.stopPropagation()), cn.rmScrollAndClickBodyEvents();
                }, un.prototype.scrollCloseBanner = function () {
                    var e = it(document).height() - it(window).height();
                    0 === e && (e = it(window).height());
                    var t = 100 * it(window).scrollTop() / e;
                    t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)), 25 < t && !ft.isAlertBoxClosedAndValid() && (!Oe.isPCVisible || Xe.NoBanner) ? (Rt.triggerGoogleAnalyticsEvent(Kt, Yt), cn.closeBanner(Xe.ScrollAcceptAllCookies), cn.rmScrollAndClickBodyEvents()) : ft.isAlertBoxClosedAndValid() && cn.rmScrollAndClickBodyEvents();
                }, un.prototype.AllowAllV2 = function (e, t) {
                    void 0 === t && (t = !1);
                    for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
                        var r = yt.getGroupById(o[n].getAttribute('data-optanongroupid'));
                        this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0);
                    }
                    this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), Xe.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0));
                }, un.prototype.rejectAll = function (e, t) {
                    if (void 0 === t && (t = !1), (t ? M[5] : M[2]) !== Oe.consentInteractionType) {
                        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
                            var r = yt.getGroupById(o[n].getAttribute('data-optanongroupid'));
                            'always active' !== yt.getGrpStatus(r).toLowerCase() && (xo.toggleGrpElements(o[n], r, !1), this.groupsClass.toogleSubGroupElement(o[n], !1, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !1, !0, !0));
                        }
                        this.bannerActionsHandler(!1, !0), this.consentTransactions(e, !1, t), Xe.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1), this.updateVendorLegBtns(!1));
                    }
                }, un.prototype.executeCustomScript = function () {
                    Xe.CustomJs && new Function(Xe.CustomJs)();
                }, un.prototype.updateConsentData = function (e) {
                    Vt.setLandingPathParam(ie.NOT_LANDING_PAGE), Xe.IsIabEnabled && !e && this.iab.saveVendorStatus(), St.writeGrpParam(le.OPTANON_CONSENT), St.writeHstParam(le.OPTANON_CONSENT), Oe.showGeneralVendors && Xe.GenVenOptOut && St.writeGenVenCookieParam(le.OPTANON_CONSENT), Ho.substitutePlainTextScriptTags(), Uo.updateGtmMacros();
                }, un.prototype.close = function (e, t) {
                    void 0 === t && (t = !1), on.hideConsentNoticeV2(), this.updateConsentData(e), Xe.IsConsentLoggingEnabled ? mt.createConsentTxn(!1, (t ? Jo : Yo) + ' - ' + (t ? $o : Qo), t) : ft.dispatchConsentEvent(), this.executeOptanonWrapper();
                }, un.prototype.executeOptanonWrapper = function () {
                    try {
                        if (this.executeCustomScript(), 'function' == typeof window.OptanonWrapper && 'undefined' !== window.OptanonWrapper) {
                            window.OptanonWrapper();
                            for (var e = 0, t = Oe.srcExecGrpsTemp; e < t.length; e++) {
                                var o = t[e];
                                -1 === Oe.srcExecGrps.indexOf(o) && Oe.srcExecGrps.push(o);
                            }
                            Oe.srcExecGrpsTemp = [];
                            for (var n = 0, r = Oe.htmlExecGrpsTemp; n < r.length; n++)
                                o = r[n], -1 === Oe.htmlExecGrps.indexOf(o) && Oe.htmlExecGrps.push(o);
                            Oe.htmlExecGrpsTemp = [];
                        }
                    } catch (e) {
                        console.warn('Error in Optanon wrapper, please review your code. ' + e);
                    }
                }, un.prototype.updateVendorLegBtns = function (e) {
                    if (Ze.legIntSettings.PAllowLI && Ze.legIntSettings.PShowLegIntBtn)
                        for (var t = it(ut.P_Vendor_Container + ' .ot-leg-btn-container').el, o = 0; o < t.length; o++)
                            this.groupsClass.updateLegIntBtnElement(t[o], e);
                }, un.prototype.showFltgCkStgButton = function () {
                    var e = it('#ot-sdk-btn-floating');
                    e.removeClass('ot-hide'), e.removeClass('ot-pc-open'), it('.ot-floating-button__front svg').attr('aria-hidden', ''), it('.ot-floating-button__back svg').attr('aria-hidden', 'true');
                }, un.prototype.consentTransactions = function (e, t, o) {
                    void 0 === o && (o = !1), mt && !e && Xe.IsConsentLoggingEnabled ? mt.createConsentTxn(!1, (o ? Jo : Yo) + ' - ' + (t ? Zo : Xo), o) : ft.dispatchConsentEvent();
                }, un);
            function un() {
                var o = this;
                this.iab = qo, this.groupsClass = xo, this.closeOptanonAlertBox = function () {
                    lt.hideBanner(), Xe.NtfyConfig.ShowNtfy && sn.hideSyncNtfy(), !Ze.isOptInMode && (Ze.isOptInMode || ft.isAlertBoxClosedAndValid()) || Rt.setAlertBoxClosed(!0), Ao.csBtnGroup && o.showFltgCkStgButton();
                }, this.bodyClickEvent = function (e) {
                    var t = e.target;
                    t.closest('#onetrust-banner-sdk') || t.closest('#onetrust-pc-sdk') || t.closest('.onetrust-pc-dark-filter') || t.closest('.ot-sdk-show-settings') || t.closest('.optanon-show-settings') || t.closest('.optanon-toggle-display') || cn.onClickCloseBanner(e);
                }, this.bannerCloseButtonHandler = function (e) {
                    if (void 0 === e && (e = !1), cn.closeOptanonAlertBox(), Ge.moduleInitializer.MobileSDK)
                        window.OneTrust.Close();
                    else {
                        var t = Oe.bannerCloseSource === b.ConfirmChoiceButton;
                        cn.close(e, t);
                    }
                    return !1;
                }, this.allowAllEventHandler = function (e) {
                    void 0 === e && (e = !1);
                    var t = e ? 'Preferences Allow All' : 'Banner Accept Cookies';
                    Rt.triggerGoogleAnalyticsEvent(Kt, t), o.allowAllEvent(!1, e);
                }, this.allowAllEvent = function (e, t) {
                    void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), cn.allowAll(e, t);
                }, this.rejectAllEventHandler = function (e) {
                    void 0 === e && (e = !1);
                    var t = e ? 'Preferences Reject All' : 'Banner Reject All';
                    Rt.triggerGoogleAnalyticsEvent(Kt, t), Ge.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : o.rejectAllEvent(!1, e);
                }, this.rejectAllEvent = function (e, t) {
                    void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), ft.isIABCrossConsentEnabled() ? Ze.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : Ze.thirdPartyiFramePromise.then(function () {
                        o.rejectAll(e, t);
                    }) : o.rejectAll(e, t);
                };
            }
            var pn, kn = (hn.prototype.setFilterList = function (t) {
                    var o = this, n = it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal + ' ' + ut.P_Fltr_Option).el[0].cloneNode(!0);
                    it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal + ' ' + ut.P_Fltr_Options).html(''), (Ge.isV2Template || Xe.Popup) && it('#onetrust-pc-sdk #filter-cancel-handler').html(Xe.PCenterCancelFiltersText || 'Cancel'), !Ge.isV2Template && Xe.Popup || (it('#onetrust-pc-sdk ' + ut.P_Clr_Fltr_Txt).html(Xe.PCenterClearFiltersText), it('#filter-btn-handler').el[0].setAttribute('aria-label', Xe.PCenterFilterText)), it('#onetrust-pc-sdk #filter-apply-handler').html(Xe.PCenterApplyFiltersText), t ? Ze.consentableGrps.forEach(function (e) {
                        (Oe.cookieListType === W.GenVen || Oe.cookieListType === W.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t);
                    }) : Ze.iabGrps.forEach(function (e) {
                        o.filterGroupOptionSetter(n, e, t);
                    });
                }, hn.prototype.filterGroupOptionSetter = function (e, t, o) {
                    var n = t.CustomGroupId, r = n + '-filter', s = e.cloneNode(!0);
                    it(ut.P_Fltr_Modal + ' ' + ut.P_Fltr_Options).append(s), it(s.querySelector('input')).attr('id', r), it(s.querySelector('label')).attr('for', r), Ge.isV2Template ? it(s.querySelector(ut.P_Label_Txt)).html(t.GroupName) : it(s.querySelector('label span')).html(t.GroupName), it(s.querySelector('input')).attr(o ? 'data-optanongroupid' : 'data-purposeid', n);
                }, hn);
            function hn() {
                this.bodyScrollProp = '', this.htmlScrollProp = '', this.ONETRUST_PC_SDK = '#onetrust-pc-sdk', this.ONETRUST_PC_DARK_FILTER = '.onetrust-pc-dark-filter';
            }
            var yn, fn = new function () {
                    this.importCSS = function () {
                        return {
                            css: '#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-left:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon,#ot-sync-ntfy .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a,#ot-sync-ntfy .powered-by-logo,#ot-sync-ntfy .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *,#ot-sync-ntfy h3 *,#ot-sync-ntfy h4 *,#ot-sync-ntfy h6 *,#ot-sync-ntfy button *,#ot-sync-ntfy a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide,#ot-sync-ntfy .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-right:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr,.ot-sdk-cookie-policy .screen-reader-only,.ot-sdk-cookie-policy .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;left:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}#onetrust-banner-sdk .banner-option-input:focus+label{outline:1px solid #000;outline-style:auto}\n#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy,#ot-sync-ntfy{font-size:1rem}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before,#ot-sync-ntfy *,#ot-sync-ntfy ::after,#ot-sync-ntfy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox,#ot-sync-ntfy div,#ot-sync-ntfy span,#ot-sync-ntfy h1,#ot-sync-ntfy h2,#ot-sync-ntfy h3,#ot-sync-ntfy h4,#ot-sync-ntfy h5,#ot-sync-ntfy h6,#ot-sync-ntfy p,#ot-sync-ntfy img,#ot-sync-ntfy svg,#ot-sync-ntfy button,#ot-sync-ntfy section,#ot-sync-ntfy a,#ot-sync-ntfy label,#ot-sync-ntfy input,#ot-sync-ntfy ul,#ot-sync-ntfy li,#ot-sync-ntfy nav,#ot-sync-ntfy table,#ot-sync-ntfy thead,#ot-sync-ntfy tr,#ot-sync-ntfy td,#ot-sync-ntfy tbody,#ot-sync-ntfy .ot-main-content,#ot-sync-ntfy .ot-toggle,#ot-sync-ntfy #ot-content,#ot-sync-ntfy #ot-pc-content,#ot-sync-ntfy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;left:auto;right:auto;top:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before,#ot-sync-ntfy label:before,#ot-sync-ntfy label:after,#ot-sync-ntfy .checkbox:after,#ot-sync-ntfy .checkbox:before{content:"";content:none}\n#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:left;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-left:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-left:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-left:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-left:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-left:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-left:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-left:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-left:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-left:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-left:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-left:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-left:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-left:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #000;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-left:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-left:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:right}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:left}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block}\n',
                            cssRTL: '#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-right:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon,#ot-sync-ntfy .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a,#ot-sync-ntfy .powered-by-logo,#ot-sync-ntfy .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *,#ot-sync-ntfy h3 *,#ot-sync-ntfy h4 *,#ot-sync-ntfy h6 *,#ot-sync-ntfy button *,#ot-sync-ntfy a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide,#ot-sync-ntfy .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-left:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;right:50%;margin-right:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;right:50%;margin-right:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr,.ot-sdk-cookie-policy .screen-reader-only,.ot-sdk-cookie-policy .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;right:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}#onetrust-banner-sdk .banner-option-input:focus+label{outline:1px solid #000;outline-style:auto}\n#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy,#ot-sync-ntfy{font-size:1rem}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before,#ot-sync-ntfy *,#ot-sync-ntfy ::after,#ot-sync-ntfy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox,#ot-sync-ntfy div,#ot-sync-ntfy span,#ot-sync-ntfy h1,#ot-sync-ntfy h2,#ot-sync-ntfy h3,#ot-sync-ntfy h4,#ot-sync-ntfy h5,#ot-sync-ntfy h6,#ot-sync-ntfy p,#ot-sync-ntfy img,#ot-sync-ntfy svg,#ot-sync-ntfy button,#ot-sync-ntfy section,#ot-sync-ntfy a,#ot-sync-ntfy label,#ot-sync-ntfy input,#ot-sync-ntfy ul,#ot-sync-ntfy li,#ot-sync-ntfy nav,#ot-sync-ntfy table,#ot-sync-ntfy thead,#ot-sync-ntfy tr,#ot-sync-ntfy td,#ot-sync-ntfy tbody,#ot-sync-ntfy .ot-main-content,#ot-sync-ntfy .ot-toggle,#ot-sync-ntfy #ot-content,#ot-sync-ntfy #ot-pc-content,#ot-sync-ntfy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;right:auto;left:auto;top:auto;text-align:right;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before,#ot-sync-ntfy label:before,#ot-sync-ntfy label:after,#ot-sync-ntfy .checkbox:after,#ot-sync-ntfy .checkbox:before{content:"";content:none}\n#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:right;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-right:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-right:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-right:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-right:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-right:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-right:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-right:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-right:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-right:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-right:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-right:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-right:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-right:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-right:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-right:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-right:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-right:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #000;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-right:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-right:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 3rem 1.5rem 0;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:right;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:left}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:right}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block}\n'
                        };
                    };
                }().importCSS(), gn = (bn.prototype.initialiseCssReferences = function () {
                    var e;
                    document.getElementById('onetrust-style') ? e = document.getElementById('onetrust-style') : (e = document.createElement('style')).id = 'onetrust-style', e.innerHTML += Xe.useRTL ? fn.cssRTL : fn.css, Ao.bannerGroup && (e.innerHTML += Ao.bannerGroup.css, e.innerHTML += this.addCustomBannerCSS()), Ao.preferenceCenterGroup && (e.innerHTML += Ao.preferenceCenterGroup.css, e.innerHTML += this.addCustomPreferenceCenterCSS()), Ao.cookieListGroup && (e.innerHTML += Ao.cookieListGroup.css, e.innerHTML += this.addCustomCookieListCSS()), this.processedCSS = e.innerHTML, Ze.ignoreInjectingHtmlCss || it(document.head).append(e);
                }, bn);
            function bn() {
                this.processedCSS = '', this.addCustomBannerCSS = function () {
                    var e = Xe.backgroundColor, t = Xe.buttonColor, o = Xe.textColor, n = Xe.buttonTextColor, r = Xe.bannerMPButtonColor, s = Xe.bannerMPButtonTextColor, i = Xe.bannerAccordionBackgroundColor, l = Xe.BSaveBtnColor, a = Xe.BCategoryContainerColor, c = Xe.BLineBreakColor, d = Xe.BCategoryStyleColor, u = '\n        ' + (Ze.bannerName === Te ? e ? '#onetrust-consent-sdk #onetrust-banner-sdk > .ot-sdk-container {\n                    background-color: ' + e + ';}' : '' : e ? '#onetrust-consent-sdk #onetrust-banner-sdk {background-color: ' + e + ';}' : '') + '\n            ' + (o ? '#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: ' + o + ';\n                    }' : '') + '\n            ' + (i ? '#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: ' + i + ';}' : '') + '\n            ';
                    if ((t || n) && (u += '#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            ' + (t ? 'background-color: ' + t + ';border-color: ' + t + ';' : '') + '\n                            ' + (n ? 'color: ' + n + ';' : '') + '\n                        }'), (s || r) && (u += '\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                ' + (s ? 'color: ' + s + '; border-color: ' + s + ';' : '') + '\n                background-color: \n                ' + (r && !Xe.BannerSettingsButtonDisplayLink ? r : e) + ';\n            }'), Ze.bannerName === Le) {
                        var p = void 0, k = void 0, h = void 0, y = void 0, f = void 0;
                        l && (p = 'color: ' + n + ';border-color: ' + n + ';background-color: ' + l + ';'), a && (k = 'background-color: ' + a + ';'), c && (h = 'border-color: ' + c + ';'), d && (y = 'background-color: ' + d + ';', f = 'border-color: ' + d + ';'), u += '#onetrust-banner-sdk .ot-bnr-save-handler {' + p + '}#onetrust-banner-sdk .ot-cat-lst {' + k + '}#onetrust-banner-sdk .ot-cat-bdr {' + h + '}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {' + y + '}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {' + f + '}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}';
                    }
                    return Xe.bannerCustomCSS && (u += Xe.bannerCustomCSS), u;
                }, this.addCustomPreferenceCenterCSS = function () {
                    var e = Xe.pcBackgroundColor, t = Xe.pcButtonColor, o = Xe.pcTextColor, n = Xe.pcButtonTextColor, r = Xe.pcLinksTextColor, s = Xe.bannerLinksTextColor, i = Xe.PCenterEnableAccordion, l = Xe.pcAccordionBackgroundColor, a = Xe.pcMenuColor, c = Xe.pcMenuHighLightColor, d = Xe.pcLegIntButtonColor, u = Xe.pcLegIntButtonTextColor, p = '\n            ' + (e ? (Ze.pcName === xe ? '#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container, \n                        #onetrust-pc-sdk ' + ut.P_Vendor_List : '#onetrust-consent-sdk #onetrust-pc-sdk') + ',\n                #onetrust-consent-sdk ' + ut.P_Search_Cntr + ',\n                ' + (i && Ze.pcName === xe ? '#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout' + ut.P_Category_Item : '#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle') + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Tab_Grp_Hdr + ' .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Title + ':after\n                ' + (Ge.isV2Template ? ',#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Triangle : '') + ' {\n                    background-color: ' + e + ';\n                }\n               ' : '') + '\n            ' + (o ? '#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Vendor_Container + ' ' + ut.P_Ven_Opts + ' p,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Policy_Txt + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Title + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Li_Title + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Leg_Select_All + ' span,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Host_Cntr + ' ' + ut.P_Host_Info + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Fltr_Modal + ' #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Vendor_List + ' ' + ut.P_Select_Cntr + ' p,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Vendor_List + ' ' + ut.P_Vendor_Title + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Vendor_List + ' .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Vendor_List + ' ' + ut.P_Ven_Name + ',\n                #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Vendor_List + ' ' + ut.P_Vendor_Container + ' .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler \n                {\n                    color: ' + o + ';\n                }' : '') + '\n            ' + (r ? ' #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Ven_Link + ',\n                    #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Host_Cntr + ' ' + ut.P_Host_Title + ' a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Host_Cntr + ' ' + ut.P_Acc_Header + ' ' + ut.P_Host_View_Cookies + ',\n                    #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Host_Cntr + ' ' + ut.P_Host_Info + ' a\n                    {\n                        color: ' + r + ';\n                    }' : '') + '\n            ' + (s ? ' #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                     #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: ' + s + ';\n                        }' : '') + '           \n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}\n            ' + (i && l ? '#onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Acc_Container + ut.P_Acc_Txt + ',\n            #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Acc_Txt + ' ' + ut.P_Subgrp_Tgl_Cntr + ' .ot-switch.ot-toggle\n             {\n                background-color: ' + l + ';\n            }' : '') + '\n            \n            ' + (l ? ' #onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Host_Cntr + ' ' + ut.P_Host_Info + ',\n                    ' + (Ge.isV2Template ? '#onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Acc_Txt + ' .ot-ven-dets' : '#onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Acc_Txt + ' ' + ut.P_Ven_Opts) + '\n                            {\n                                background-color: ' + l + ';\n                            }' : '') + '\n        ';
                    return (t || n) && (p += '#onetrust-consent-sdk #onetrust-pc-sdk \n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                ' + (t ? 'background-color: ' + t + ';border-color: ' + t + ';' : '') + '\n                ' + (n ? 'color: ' + n + ';' : '') + '\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .' + ut.P_Active_Menu + ' {\n                ' + (t ? 'border-color: ' + t + ';' : '') + '\n            }\n            ' + (Ze.pcName === xe ? '#onetrust-consent-sdk #onetrust-pc-sdk ' + ut.P_Category_Item + ',\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out ' + ut.P_Li_Hdr + '{\n                border-color: ' + t + ';\n            }' : '') + '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border:1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                ' + (d ? 'background-color: ' + d + ';' : '') + '\n                ' + (u ? 'color: ' + u + '; border-color: ' + u + ';' : '') + '\n            }\n            '), Ze.pcName === Ne && (a && (p += '#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: ' + a + '\n                }'), c && (p += '#onetrust-consent-sdk #onetrust-pc-sdk .' + ut.P_Active_Menu + ' {\n                    background-color: ' + c + '\n                }')), Xe.pcCustomCSS && (p += Xe.pcCustomCSS), p;
                }, this.addCustomCookieListCSS = function () {
                    var e = Xe.CookiesV2NewCookiePolicy ? '-v2.ot-sdk-cookie-policy' : '', t = '\n                ' + (Xe.cookieListPrimaryColor ? '\n                    #ot-sdk-cookie-policy' + e + ' h5,\n                    #ot-sdk-cookie-policy' + e + ' h6,\n                    #ot-sdk-cookie-policy' + e + ' li,\n                    #ot-sdk-cookie-policy' + e + ' p,\n                    #ot-sdk-cookie-policy' + e + ' a,\n                    #ot-sdk-cookie-policy' + e + ' span,\n                    #ot-sdk-cookie-policy' + e + ' td,\n                    #ot-sdk-cookie-policy' + e + ' #cookie-policy-description {\n                        color: ' + Xe.cookieListPrimaryColor + ';\n                    }' : '') + '\n                    ' + (Xe.cookieListTableHeaderColor ? '#ot-sdk-cookie-policy' + e + ' th {\n                        color: ' + Xe.cookieListTableHeaderColor + ';\n                    }' : '') + '\n                    ' + (Xe.cookieListGroupNameColor ? '#ot-sdk-cookie-policy' + e + ' .ot-sdk-cookie-policy-group {\n                        color: ' + Xe.cookieListGroupNameColor + ';\n                    }' : '') + '\n                    ' + (Xe.cookieListTitleColor ? '\n                    #ot-sdk-cookie-policy' + e + ' #cookie-policy-title {\n                            color: ' + Xe.cookieListTitleColor + ';\n                        }\n                    ' : '') + '\n            ' + (e && Xe.CookieListTableHeaderBackgroundColor ? '\n                    #ot-sdk-cookie-policy' + e + ' table th {\n                            background-color: ' + Xe.CookieListTableHeaderBackgroundColor + ';\n                        }\n                    ' : '') + '\n            ';
                    return Xe.cookieListCustomCss && (t += Xe.cookieListCustomCss), t;
                };
            }
            var mn, Cn = (vn.prototype.insertPcHtml = function () {
                    mn.jsonAddAboutCookies(Xe);
                    var t = document.createDocumentFragment();
                    if (Ao.preferenceCenterGroup) {
                        var e = document.createElement('div');
                        it(e).html(Ao.preferenceCenterGroup.html);
                        var o = e.querySelector('#onetrust-pc-sdk');
                        /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || it(o).addClass('ot-sdk-not-webkit'), Xe.useRTL && it(o).attr('dir', 'rtl'), Ze.legIntSettings.PAllowLI && 'IAB2' === Ze.iabType && (it(o).addClass('ot-leg-opt-out'), Ze.legIntSettings.PShowLegIntBtn && it(o).addClass('ot-leg-btn')), Xe.PCShowConsentLabels && it(o).addClass('ot-tgl-with-label'), (Xe.UseGoogleVendors || Oe.showGeneralVendors) && it(o).addClass('ot-addtl-vendors'), 'right' === Xe.PreferenceCenterPosition && it(o).addClass(Xe.useRTL ? 'right-rtl' : 'right'), it(t).append(o);
                        var n = function (e) {
                                return t.querySelector(e);
                            }, r = function (e) {
                                return t.querySelectorAll(e);
                            }, s = it(r(ut.P_Close_Btn)).el;
                        if (Xe.ShowPreferenceCenterCloseButton)
                            for (Xe.CloseText || (Xe.CloseText = 'Close Preference Center'), i = 0; i < s.length; i++)
                                it(s[i]).el.setAttribute('aria-label', Xe.CloseText);
                        else
                            for (var i = 0; i < s.length; i++)
                                it(s[i].parentElement).el.removeChild(s[i]);
                        if (Xe.Language && Xe.Language.Culture && it(n('#onetrust-pc-sdk')).attr('lang', Xe.Language.Culture), n(ut.P_Logo) && Xe.optanonLogo) {
                            var l = lt.updateCorrectUrl(Xe.optanonLogo);
                            lt.checkMobileOfflineRequest(lt.getBannerVersionUrl()) && (l = tt.getRelativeURL(l, !0, !0)), it(n(ut.P_Logo)).attr('style', 'background-image: url("' + l + '");\n                    background-position: ' + (Xe.useRTL ? 'right' : 'left'));
                        }
                        lt.insertFooterLogo(r('.ot-pc-footer-logo a')), it(n(ut.P_Title)).html(Xe.MainText), Ze.pcName === Ne && (it(n(ut.P_Privacy_Txt)).html(Xe.AboutCookiesText), it(n(ut.P_Privacy_Hdr)).html(Xe.AboutCookiesText)), it(n(ut.P_Policy_Txt)).html(Xe.MainInfoText), Xe.AboutText && it(n(ut.P_Policy_Txt)).html(it(n(ut.P_Policy_Txt)).html() + '\n                <br/><a href="' + Xe.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                        aria-label="' + Xe.AboutText + ', ' + Xe.NewWinTxt + '">' + Xe.AboutText + '</a>'), Xe.ConfirmText.trim() ? it(n('#accept-recommended-btn-handler')).html(Xe.ConfirmText) : n('#accept-recommended-btn-handler').parentElement.removeChild(n('#accept-recommended-btn-handler'));
                        var a = r('.save-preference-btn-handler');
                        for (i = 0; i < a.length; i++)
                            it(a[i]).html(Xe.AllowAllText);
                        var c = r('.ot-pc-refuse-all-handler');
                        if (Xe.PCenterShowRejectAllButton && Xe.PCenterRejectAllButtonText.trim())
                            for (i = 0; i < c.length; i++)
                                it(c[i]).html(Xe.PCenterRejectAllButtonText);
                        else
                            tt.removeChild(c);
                        if (n(ut.P_Manage_Cookies_Txt) && it(n(ut.P_Manage_Cookies_Txt)).html(Xe.ManagePreferenceText), mn.initializePreferenceCenterGroups(n, t), !Xe.IsIabEnabled) {
                            var d = n(ut.P_Vendor_Container);
                            d && d.parentElement.removeChild(d);
                        }
                        if (!Xe.showCookieList) {
                            var u = n(ut.P_Host_Cntr);
                            u && u.parentElement.removeChild(u);
                        }
                    }
                    it(t.querySelector('#onetrust-pc-sdk')).append('<iframe class="ot-text-resize" title="onetrust-text-resize" style="position:absolute;top:-50000px;width:100em;" aria-hidden="true"></iframe>');
                    var p = document.getElementById('onetrust-consent-sdk');
                    it(p).append(t), Ze.ignoreInjectingHtmlCss || it(document.body).append(p), Xe.showCookieList && Ho.InitializeHostList();
                }, vn.prototype.setParentGroupName = function (e, t, o, n) {
                    var r = e.querySelector('.category-header,.ot-cat-header,.category-menu-switch-handler>h3');
                    it(r).html(t), it(r).attr('id', o), Ze.pcName === Ne && (e.querySelector(ut.P_Category_Header).innerHTML = t, e.querySelector('' + ut.P_Desc_Container).setAttribute('id', n), e.querySelector('.category-menu-switch-handler').setAttribute('aria-controls', n));
                }, vn.prototype.setLegIntButton = function (e, t, o, n) {
                    void 0 === o && (o = !1);
                    var r = !0;
                    -1 < Oe.vendors.selectedLegInt.indexOf(t.IabGrpId + ':false') && (r = !1);
                    var s = ft.generateLegIntButtonElements(r, t.OptanonGroupId);
                    o ? n.insertAdjacentHTML('afterend', s) : e.insertAdjacentHTML('beforeend', s);
                }, vn.prototype.setParentGroupDescription = function (e, t, o, n, r) {
                    var s = xo.safeFormattedGroupDescription(t), i = e.querySelector('p:not(.ot-always-active)'), l = e.querySelector(ut.P_Acc_Grp_Desc), a = i || l;
                    return -1 < Ye.indexOf(t.Type) && o.PCGrpDescType === P.Legal ? s = t.DescriptionLegal : a.classList.add('ot-category-desc'), Ze.legIntSettings.PAllowLI && !Ze.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function (e) {
                        return e.HasLegIntOptOut;
                    }) || t.HasLegIntOptOut ? a.parentElement.classList.add('ot-leg-border-color') : tt.removeChild(e.querySelector(ut.P_Li_Hdr))), Ze.pcName !== Ne && a.setAttribute('id', n), it(a).html(s), t.Type === je && tt.removeChild(a), a;
                }, vn.prototype.cloneOtHtmlEls = function (e) {
                    var t = /otPcPanel|otPcCenter/;
                    Go.toggleEl = it(e('.ot-tgl')).el.cloneNode(!0), Go.arrowEl = it(e('#onetrust-pc-sdk > ' + ut.P_Arrw_Cntr)).el.cloneNode(!0), Go.subGrpEl = it(e(ut.P_Sub_Grp_Cntr)).el.cloneNode(!0), Go.vListEl = it(e(ut.P_Ven_Lst_Cntr)).el.cloneNode(!0), Go.cListEl = it(e(ut.P_Host_Lst_cntr)).el.cloneNode(!0), Go.chkboxEl = it(e(ut.P_CBx_Cntr)).el.cloneNode(!0), Go.accordionEl = it(e('.ot-acc-cntr')).el.cloneNode(!0), t.test(Ze.pcName) && (Go.plusMinusEl = it(e('.ot-plus-minus')).el.cloneNode(!0)), tt.removeChild(e('.ot-tgl')), tt.removeChild(e('#onetrust-pc-sdk > ' + ut.P_Arrw_Cntr)), tt.removeChild(e(ut.P_Sub_Grp_Cntr)), tt.removeChild(e(ut.P_Ven_Lst_Cntr)), tt.removeChild(e(ut.P_Host_Lst_cntr)), tt.removeChild(e(ut.P_CBx_Cntr)), tt.removeChild(e('.ot-acc-cntr')), t.test(Ze.pcName) && tt.removeChild(e('.ot-plus-minus'));
                }, vn.prototype.insertSelectAllEls = function (e) {
                    var t = e(ut.P_Select_Cntr + ' .ot-sel-all-chkbox'), o = Go.chkboxEl.cloneNode(!0);
                    o.id = ut.P_Sel_All_Host_El, o.querySelector('input').id = 'select-all-hosts-groups-handler', o.querySelector('label').setAttribute('for', 'select-all-hosts-groups-handler'), it(t).append(o);
                    var n = Go.chkboxEl.cloneNode(!0);
                    n.id = ut.P_Sel_All_Vendor_Consent_El, n.querySelector('input').id = 'select-all-vendor-groups-handler', n.querySelector('label').setAttribute('for', 'select-all-vendor-groups-handler'), it(t).append(n);
                    var r = Go.chkboxEl.cloneNode(!0);
                    r.id = ut.P_Sel_All_Vendor_Leg_El, r.querySelector('input').id = 'select-all-vendor-leg-handler', r.querySelector('label').setAttribute('for', 'select-all-vendor-leg-handler'), it(t).append(r);
                }, vn.prototype.initializePreferenceCenterGroups = function (e, t) {
                    var o = Ze.pcName;
                    if (Ge.isV2Template) {
                        mn.cloneOtHtmlEls(e);
                        var n = Go.chkboxEl.cloneNode(!0);
                        n.querySelector('input').classList.add('category-filter-handler'), it(e(ut.P_Fltr_Modal + ' ' + ut.P_Fltr_Option)).append(n), mn.insertSelectAllEls(e);
                    }
                    var r = it(e('#onetrust-pc-sdk ' + ut.P_Category_Grp));
                    o === we || o === Ee || o === xe ? Xe.PCenterEnableAccordion ? tt.removeChild(r.el.querySelector(ut.P_Category_Item + ':not(.ot-accordion-layout)')) : tt.removeChild(r.el.querySelector(ut.P_Category_Item + '.ot-accordion-layout')) : o === Ne && (Xe.PCenterEnableAccordion = !1);
                    var s, i = e('#onetrust-pc-sdk ' + ut.P_Category_Item), l = Ge.isV2Template ? Go.subGrpEl.cloneNode(!0) : it(e(ut.P_Sub_Grp_Cntr)), a = Ge.isV2Template ? '' : it(e(ut.P_Acc_Container + ' ' + ut.P_Sub_Grp_Cntr));
                    Xe.PCTemplateUpgrade && /otPcTab/.test(o) && (s = e('.ot-abt-tab').cloneNode(!0), tt.removeChild(e('.ot-abt-tab'))), r.el.removeChild(i), Ge.isV2Template ? Xe.PCAccordionStyle === z.Caret && (it(e('#onetrust-pc-sdk ' + ut.P_Vendor_List)).addClass('ot-enbl-chr'), Xe.PCenterEnableAccordion && it(e('#onetrust-pc-sdk ' + ut.P_Content)).addClass('ot-enbl-chr')) : it(i.querySelector(ut.P_Sub_Grp_Cntr)).remove();
                    var c = Xe.Groups.filter(function (e) {
                            return e.Order;
                        }), d = 0 === r.el.children.length, u = e(ut.P_Li_Hdr) || i.querySelector(ut.P_Li_Hdr);
                    Ze.legIntSettings.PAllowLI && Ze.grpContainLegalOptOut && 'IAB2' === Xe.IabType && !Ze.legIntSettings.PShowLegIntBtn ? (u.querySelector('span:first-child').innerText = Xe.ConsentText, u.querySelector('span:last-child').innerText = Xe.LegitInterestText, Xe.PCenterEnableAccordion && u ? u.classList.add('ot-leg-border-color') : 'otPcList' === o && i.insertAdjacentElement('afterbegin', u)) : (tt.removeChild(e('#onetrust-pc-sdk ' + ut.P_Li_Hdr)), tt.removeChild(i.querySelector(ut.P_Li_Hdr)));
                    for (var p = e('.ot-tab-desc'), k = 0; k < c.length; k++) {
                        var h = c[k], y = h.GroupName, f = h.CustomGroupId, g = i.cloneNode(!0), b = 'ot-group-id-' + f, m = 'ot-header-id-' + f, C = 'ot-desc-id-' + f;
                        (g = it(g).el).setAttribute('data-optanongroupid', f);
                        var v = g.querySelector('input,button');
                        v && (v.setAttribute('aria-controls', C), v.setAttribute('aria-labelledby', m)), mn.setParentGroupName(g, y, m, C), o === Be && (h.ShowVendorList && 'IAB2' === Xe.IabType ? (tt.removeChild(g.querySelector('p:not(.ot-always-active)')), tt.removeChild(g.querySelector(ut.P_Acc_Txt + ':not(' + ut.P_Acc_Container + ')')), h.SubGroups.length || Ge.isV2Template || tt.removeChild(g.querySelector(ut.P_Sub_Grp_Cntr))) : tt.removeChild(g.querySelector(ut.P_Acc_Container)));
                        var P = mn.setParentGroupDescription(g, h, Xe, C, b);
                        Ge.isV2Template ? mn.setToggle(g, P, h, b, m) : mn.setToggleProps(g, P, h, b, m);
                        var A = !!e('#onetrust-pc-sdk ' + ut.P_Category_Grp).querySelector(ut.P_Category_Item), T = r.el.querySelectorAll(ut.P_Category_Item);
                        if (T = T[T.length - 1], d ? r.append(g) : A ? rt.insertAfter(g, T) : rt.insertAfter(g, r.el.querySelector(ut.P_Li_Hdr) || r.el.querySelector('h3')), 0 < h.SubGroups.length && h.ShowSubgroup) {
                            var S = o === Be && h.ShowVendorList && 'IAB2' === Xe.IabType && !Xe.PCTemplateUpgrade;
                            mn.setSubGrps(h, S ? a : l, g, Xe);
                        }
                        var I = Xe.PCGrpDescLinkPosition === w.Top;
                        h.Type === je && I && (P = g.querySelector(ut.P_Sub_Grp_Cntr));
                        var L = I ? P : null;
                        mn.setVendorListBtn(g, e, t, h, L, Xe), mn.setHostListBtn(g, e, t, h), Oe.dataGroupState.push(h);
                    }
                    if ('otPcTab' === o)
                        if (s && e('#onetrust-pc-sdk ' + ut.P_Category_Grp).insertAdjacentElement('afterbegin', s), p && 640 < window.innerWidth && it(p).append(t.querySelectorAll('#onetrust-pc-sdk ' + ut.P_Desc_Container)), Xe.IsIabEnabled)
                            e(ut.P_Desc_Container + ' .category-vendors-list-handler').innerHTML = Xe.VendorListText + '&#x200E;';
                        else {
                            var _ = e(ut.P_Desc_Container + ' .category-vendors-list-handler');
                            _ && _.parentElement.removeChild(_);
                        }
                }, vn.prototype.jsonAddAboutCookies = function (e) {
                    var t = {};
                    return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t;
                }, vn.prototype.setVendorListBtn = function (e, t, o, n, r, s) {
                    var i = Ze.pcName;
                    if (n.ShowVendorList) {
                        var l = void 0, a = void 0;
                        if (Ge.isV2Template ? l = (a = Go.vListEl.cloneNode(!0)).querySelector('.category-vendors-list-handler') : a = (l = e.querySelector('.category-vendors-list-handler')).parentElement, l.innerHTML = s.VendorListText + '&#x200E;', l.setAttribute('data-parent-id', n.CustomGroupId), s.PCGrpDescType === P.UserFriendly && l.insertAdjacentHTML('afterend', '<a href=\'' + Xe.IabLegalTextUrl + '?lang=' + Oe.consentLanguage + '\' rel="noopener" target=\'_blank\'>&nbsp;|&nbsp;' + s.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + Xe.NewWinTxt + '</span></a>'), Ge.isV2Template) {
                            var c = e;
                            i === Ne ? c = e.querySelector('' + ut.P_Desc_Container) : s.PCenterEnableAccordion && (c = e.querySelector(ut.P_Acc_Txt)), c.insertAdjacentElement('beforeend', a);
                        }
                        r && r.insertAdjacentElement('beforebegin', a);
                    } else if (!Ge.isV2Template) {
                        if (i !== Ee && i !== we || s.PCenterEnableAccordion) {
                            if (i === Be || i === Ee || i === we && s.PCenterEnableAccordion) {
                                var d = t('#vendor-list-container'), u = e.querySelector(ut.P_Acc_Txt);
                                d && o.querySelector('' + ut.P_Content).removeChild(d), Ge.isV2Template || it(u).el.removeChild(u.querySelector(ut.P_Ven_Lst_Cntr));
                            }
                        } else
                            tt.removeChild(e.querySelector(ut.P_Ven_Lst_Cntr));
                        if (i === Ne || i === xe) {
                            var p = e.querySelector(ut.P_Ven_Lst_Cntr);
                            p && p.parentElement.removeChild(p);
                        }
                    }
                }, vn.prototype.setHostListBtn = function (e, t, o, n) {
                    var r = Ze.pcName, s = !1;
                    Xe.showCookieList && (s = -1 < tt.findIndex(h(n.SubGroups, [n]), function (e) {
                        return -1 === Ue.indexOf(e.Type) && e.FirstPartyCookies.length;
                    }));
                    var i = Oe.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
                    if (Xe.showCookieList && (n.ShowHostList || s || i)) {
                        var l = void 0;
                        if (Ge.isV2Template) {
                            var a = Go.cListEl.cloneNode(!0);
                            l = a.querySelector('.category-host-list-handler');
                            var c = e;
                            r === Ne ? c = e.querySelector('' + ut.P_Desc_Container) : Xe.PCenterEnableAccordion && (c = e.querySelector(ut.P_Acc_Txt)), c.insertAdjacentElement('beforeend', a);
                        } else
                            l = e.querySelector('.category-host-list-handler');
                        if (l) {
                            var d = Oe.showGeneralVendors ? Xe.GroupGenVenListLabel : Xe.ThirdPartyCookieListText;
                            l.innerHTML = d + '&#x200E;', l.setAttribute('data-parent-id', n.CustomGroupId);
                        }
                    } else if (r === Be) {
                        var u = t('#vendor-list-container'), p = e.querySelector(ut.P_Acc_Txt);
                        u && o.querySelector('' + ut.P_Content).removeChild(u), p.querySelector(ut.P_Host_Lst_cntr) && it(p).el.removeChild(p.querySelector(ut.P_Host_Lst_cntr));
                    } else {
                        var k = e.querySelector(ut.P_Host_Lst_cntr);
                        k && k.parentElement.removeChild(k);
                    }
                }, vn.prototype.setSubGrps = function (A, T, S, I) {
                    var L = Ze.pcName, _ = I.PCGrpDescType === P.Legal, w = h(We, ze), x = L === Be && A.ShowVendorList && 'IAB2' === I.IabType;
                    if (x && !Xe.PCTemplateUpgrade) {
                        var e = S.querySelector(ut.P_Sub_Grp_Cntr);
                        e.parentElement.removeChild(e);
                    }
                    A.SubGroups.forEach(function (e) {
                        var t;
                        'IAB2' !== Ze.iabType || e.Type !== Fe || e.HasConsentOptOut || (t = !0);
                        var o, n, r = Ge.isV2Template ? T.cloneNode(!0) : T.el.cloneNode(!0), s = r.querySelector(ut.P_Subgrp_li).cloneNode(!0), i = e.CustomGroupId, l = 'ot-sub-group-id-' + i, a = yt.getGrpStatus(e).toLowerCase(), c = yt.getGrpStatus(A).toLowerCase(), d = s.querySelector('.cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6'), u = s.querySelector(ut.P_Tgl_Cntr);
                        s.setAttribute('data-optanongroupid', i), Ge.isV2Template ? ((n = Go.toggleEl.cloneNode(!0)).querySelector('input').setAttribute('data-optanongroupid', i), n.querySelector('input').classList.add('cookie-subgroup-handler'), o = n.cloneNode(!0), u.insertAdjacentElement('beforeend', o)) : (o = s.querySelector('.ot-toggle')).querySelector('input').setAttribute('data-optanongroupid', i), it(r.querySelector(ut.P_Subgp_ul)).html(''), it(d).html(e.GroupName), o.querySelector('input').setAttribute('id', l), o.querySelector('input').setAttribute('aria-label', e.GroupName), o.querySelector('label').setAttribute('for', l);
                        var p = it(s.querySelector(ut.P_Subgrp_Desc));
                        if (x) {
                            var k = e.DescriptionLegal && _ ? e.DescriptionLegal : e.GroupDescription;
                            p.html(k);
                        } else {
                            k = xo.safeFormattedGroupDescription(e);
                            var h = !1;
                            -1 < Ye.indexOf(e.Type) && _ && (h = !0, k = e.DescriptionLegal), I.PCenterEnableAccordion && h || (p = it(s.querySelector('p'))), A.ShowSubGroupDescription ? p.html(k) : p.html('');
                        }
                        if (A.ShowSubgroupToggle && -1 < w.indexOf(e.Type)) {
                            var y = xo.isGroupActive(e);
                            y && (s.querySelector('input').setAttribute('checked', ''), 'always active' === c && -1 === Ye.indexOf(e.Type) && (s.querySelector('input').disabled = !0, s.querySelector('input').setAttribute('disabled', !0)));
                            var f = u.querySelector('.ot-label-status');
                            if (Xe.PCShowConsentLabels ? f.innerHTML = y ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(f), Ze.legIntSettings.PAllowLI && e.Type === Fe && e.HasLegIntOptOut)
                                if (Ze.legIntSettings.PShowLegIntBtn)
                                    mn.setLegIntButton(s, e);
                                else {
                                    var g = u.cloneNode(!0);
                                    u.insertAdjacentElement('afterend', g);
                                    var b = g.querySelector('.ot-label-status'), m = g.querySelector('input');
                                    m.setAttribute('id', l + '-leg-out'), g.querySelector('label').setAttribute('for', l + '-leg-out'), e.IsLegIntToggle = !0;
                                    var C = xo.isGroupActive(e);
                                    Xe.PCShowConsentLabels ? b.innerHTML = C ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(b), tt.setCheckedAttribute(null, m, C), e.IsLegIntToggle = !1;
                                }
                        } else
                            'always active' === a && (A.ShowSubgroupToggle || -1 === Ke.indexOf(e.Type)) || (t = !0);
                        if (t && (o.classList.add('ot-hide-tgl'), o.querySelector('input').setAttribute('aria-hidden', !0)), 'always active' !== a || t || (o && o.parentElement.removeChild(o), s.querySelector(ut.P_Tgl_Cntr).classList.add('ot-always-active-subgroup'), mn.setAlwaysActive(s, !0)), 'COOKIE' === e.Type && -1 !== e.Parent.indexOf('STACK') && (r.style = 'display:none;'), it(r.querySelector(ut.P_Subgp_ul)).append(s), Ge.isV2Template) {
                            var v = S;
                            'otPcTab' === L ? v = S.querySelector('' + ut.P_Desc_Container) : I.PCenterEnableAccordion && (v = S.querySelector(ut.P_Acc_Txt)), v.insertAdjacentElement('beforeend', r);
                        } else {
                            var P = S.querySelector(ut.P_Category_Item + ' ' + ut.P_Ven_Lst_Cntr);
                            P && P.insertAdjacentElement('beforebegin', r);
                        }
                    });
                }, vn.prototype.setToggle = function (e, t, o, n, r) {
                    var s = Go.toggleEl.cloneNode(!0);
                    s.querySelector('input').classList.add('category-switch-handler');
                    var i = s.querySelector('input'), l = e.querySelector(ut.P_Category_Header), a = xo.isGroupActive(o), c = 'always active' === yt.getGrpStatus(o).toLowerCase(), d = o.OptanonGroupId.toString(), u = !0;
                    if ('IAB2' !== Ze.iabType || o.Type !== Fe && o.Type !== je || o.HasConsentOptOut || (u = !1), it(s.querySelector('label')).attr('for', n), it(s.querySelector('.ot-label-txt')).html(o.GroupName), Ze.legIntSettings.PAllowLI && o.Type === Fe && o.HasLegIntOptOut)
                        if (Ze.legIntSettings.PShowLegIntBtn)
                            mn.setLegIntButton(e, o, !0, t);
                        else {
                            var p = s.cloneNode(!0);
                            o.IsLegIntToggle = !0;
                            var k = xo.isGroupActive(o), h = p.querySelector('.ot-label-status');
                            Xe.PCShowConsentLabels ? h.innerHTML = k ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(h), o.IsLegIntToggle = !1, xo.setInputID(p.querySelector('input'), n + '-leg-out', d, k, r), it(p.querySelector('label')).attr('for', n + '-leg-out'), l.insertAdjacentElement('afterend', p);
                        }
                    var y = s.querySelector('.ot-label-status');
                    Xe.PCShowConsentLabels ? y.innerHTML = a ? Xe.PCActiveText : Xe.PCInactiveText : tt.removeChild(y), !c && u || (s.classList.add('ot-hide-tgl'), s.querySelector('input').setAttribute('aria-hidden', !0)), u && (c ? mn.setAlwaysActive(e) : (l.insertAdjacentElement('afterend', s), xo.setInputID(i, n, d, a, r))), Xe.PCenterEnableAccordion && (Xe.PCAccordionStyle === z.Caret ? l.insertAdjacentElement('afterend', Go.arrowEl.cloneNode(!0)) : l.insertAdjacentElement('beforebegin', Go.plusMinusEl.cloneNode(!0)));
                }, vn.prototype.setToggleProps = function (e, t, o, n, r) {
                    var s = e.querySelectorAll('input:not(.cookie-subgroup-handler)'), i = e.querySelectorAll('label'), l = xo.isGroupActive(o), a = o.CustomGroupId, c = e.querySelector('.label-text');
                    c && it(c).html(o.GroupName);
                    for (var d = 0; d < s.length; d++)
                        if (i[d] && it(i[d]).attr('for', n), 2 <= s.length && 0 === d)
                            it(s[d]).attr('id', n + '-toggle');
                        else {
                            var u = !0;
                            if ('IAB2' !== Ze.iabType || o.Type !== Fe && o.Type !== je || o.HasConsentOptOut || (u = !1), Ze.legIntSettings.PAllowLI && o.Type === Fe && o.HasLegIntOptOut)
                                if (Ze.legIntSettings.PShowLegIntBtn)
                                    mn.setLegIntButton(e, o, !0, t);
                                else {
                                    var p = e.querySelector(ut.P_Tgl_Cntr + ':not(' + ut.P_Subgrp_Tgl_Cntr + ')') || e.querySelector('.ot-toggle'), k = p.cloneNode(!0);
                                    p.insertAdjacentElement('afterend', k);
                                    var h = k.querySelector('input');
                                    o.IsLegIntToggle = !0;
                                    var y = xo.isGroupActive(o);
                                    o.IsLegIntToggle = !1, xo.setInputID(h, n + '-leg-out', a, y, r), it(k.querySelector('label')).attr('for', n + '-leg-out'), tt.removeChild(k.querySelector(ut.P_Arrw_Cntr));
                                }
                            var f = 'always active' === yt.getGrpStatus(o).toLowerCase();
                            if (f || !u) {
                                var g = s[d].closest('.ot-toggle');
                                g && (g.classList.add('ot-hide-tgl'), g.querySelector('input').setAttribute('aria-hidden', !0));
                            }
                            u && (f && mn.setAlwaysActive(e), xo.setInputID(s[d], n, a, l, r));
                        }
                }, vn.prototype.setAlwaysActive = function (e, t) {
                    void 0 === t && (t = !1);
                    var o = Ze.pcName;
                    if (o === Be || o === Ne || t)
                        e.querySelector(ut.P_Tgl_Cntr).insertAdjacentElement('afterbegin', it('<div class=\'ot-always-active\'>' + Xe.AlwaysActiveText + '</div>', 'ce').el);
                    else {
                        var n = e.querySelector(ut.P_Category_Header);
                        !Ge.isV2Template && Xe.PCenterEnableAccordion && (n = e.querySelector(ut.P_Arrw_Cntr)), it(n).el.insertAdjacentElement('afterend', it('<div class=\'ot-always-active\'>' + Xe.AlwaysActiveText + '</div>', 'ce').el);
                    }
                    if (Xe.PCenterEnableAccordion) {
                        var r = e.querySelector(ut.P_Acc_Header);
                        r && r.classList.add('ot-always-active-group');
                    } else {
                        var s = e.querySelector('' + ut.P_Desc_Container);
                        s && s.classList.add('ot-always-active-group'), e.classList.add('ot-always-active-group');
                    }
                }, vn);
            function vn() {
            }
            var Pn, An = (Tn.prototype.showBanner = function () {
                    var e = Ze.bannerName, t = it(this.El);
                    if (Oe.skipAddingHTML && 'none' === getComputedStyle(t.el[0]).getPropertyValue('display') && e !== Ae && e !== Pe && e !== Ie)
                        t.css('display: block');
                    else {
                        if (e !== Pe)
                            return e === Ae || e === Ie ? (t.css('bottom: -300px'), t.animate({ bottom: '1em' }, 2000), Oe.bnrAnimationInProg = !0, void setTimeout(function () {
                                t.css('bottom: 1rem'), Oe.bnrAnimationInProg = !1;
                            }, 2000)) : void 0;
                        'bottom' === Xe.BannerPosition ? (t.css('bottom: -99px'), t.animate({ bottom: '0px' }, 1000), Oe.bnrAnimationInProg = !0, setTimeout(function () {
                            t.css('bottom: 0px'), Oe.bnrAnimationInProg = !1;
                        }, 1000)) : (t.css('top: -99px; bottom: auto'), Ze.pagePushedDown && !Ht.checkIsBrowserIE11OrBelow() ? Ht.BannerPushDownHandler() : (t.animate({ top: '0' }, 1000), Oe.bnrAnimationInProg = !0, setTimeout(function () {
                            t.css('top: 0px; bottom: auto'), Oe.bnrAnimationInProg = !1;
                        }, 1000)));
                    }
                }, Tn.prototype.insertAlertHtml = function () {
                    function e(e) {
                        return s.querySelector(e);
                    }
                    function t(e) {
                        return s.querySelectorAll(e);
                    }
                    var o = this, n = [
                            {
                                type: 'purpose',
                                titleKey: 'BannerPurposeTitle',
                                descriptionKey: 'BannerPurposeDescription',
                                identifier: 'purpose-option'
                            },
                            {
                                type: 'feature',
                                titleKey: 'BannerFeatureTitle',
                                descriptionKey: 'BannerFeatureDescription',
                                identifier: 'feature-option'
                            },
                            {
                                type: 'information',
                                titleKey: 'BannerInformationTitle',
                                descriptionKey: 'BannerInformationDescription',
                                identifier: 'information-option'
                            }
                        ], r = Xe.BannerPurposeTitle || Xe.BannerPurposeDescription || Xe.BannerFeatureTitle || Xe.BannerFeatureDescription || Xe.BannerInformationTitle || Xe.BannerInformationDescription, s = document.createDocumentFragment();
                    if (Ao.bannerGroup) {
                        var i = Ze.bannerName, l = document.createElement('div');
                        it(l).html(Ao.bannerGroup.html);
                        var a = l.querySelector('#onetrust-banner-sdk');
                        Ge.fp.CookieV2BannerFocus && a.setAttribute('tabindex', '0'), Xe.useRTL && it(a).attr('dir', 'rtl'), 'IAB2' === Ze.iabType && Xe.BannerDPDDescription.length && it(a).addClass('ot-iab-2');
                        var c = Xe.BannerPosition;
                        if (c && ('bottom-left' === c ? it(a).addClass('ot-bottom-left') : 'bottom-right' === c ? it(a).addClass('ot-bottom-right') : it(a).addClass(c)), it(s).append(a), Xe.BannerTitle ? (it(e('#onetrust-policy-title')).html(Xe.BannerTitle), it(e('[role="dialog"]')).attr('aria-labelledby', 'onetrust-policy-title')) : (tt.removeChild(e('#onetrust-policy-title')), it(e('#onetrust-banner-sdk')).addClass('ot-wo-title')), !Xe.IsIabEnabled && Oe.showGeneralVendors && Xe.BannerNonIABVendorListText) {
                            var d = document.createElement('div');
                            d.setAttribute('id', 'ot-gv-link-ctnr'), it(d).html('<button class="ot-link-btn ot-gv-list-handler">' + Xe.BannerNonIABVendorListText + '</button>'), it(e('#onetrust-policy')).el.appendChild(d);
                        }
                        it(e('#onetrust-policy-text')).html(Xe.AlertNoticeText), 'IAB2' === Xe.IabType && Xe.BannerDPDDescription.length && i !== Le ? (it(e('.ot-dpd-container .ot-dpd-title')).html(Xe.BannerDPDTitle), it(e('.ot-dpd-container .ot-dpd-desc')).html(Xe.BannerDPDDescription.join(',&nbsp;'))) : tt.removeChild(e('.ot-dpd-container'));
                        var u = it(e('#onetrust-group-container'));
                        'IAB2' === Ze.iabType && Xe.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
                        var p = 'IAB2' === Xe.IabType && Xe.BannerDPDDescription.length ? i !== Le ? it(e('.ot-dpd-container .ot-dpd-desc')) : u : it(e('#onetrust-policy-text'));
                        Xe.IsIabEnabled && Xe.BannerIABPartnersLink && p.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n                ' + Xe.BannerIABPartnersLink + '\n                </button>'), Xe.showBannerAcceptButton ? (this._acceptBtn = e('#onetrust-accept-btn-handler'), it(this._acceptBtn).html(Xe.AlertAllowCookiesText), i !== Ie || Xe.showBannerCookieSettings || Xe.BannerShowRejectAllButton || it(this._acceptBtn.parentElement).addClass('accept-btn-only')) : tt.removeChild(e('#onetrust-accept-btn-handler')), Xe.BannerShowRejectAllButton && Xe.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e('#onetrust-reject-all-handler'), it(this._rejectBtn).html(Xe.BannerRejectAllButtonText), e('#onetrust-button-group-parent').classList.add('has-reject-all-button')) : (tt.removeChild(e('#onetrust-reject-all-handler')), tt.removeChild(e('#onetrust-reject-btn-container')));
                        var k = it(e('#onetrust-pc-btn-handler'));
                        Xe.showBannerCookieSettings ? (k.html(Xe.AlertMoreInfoText), Xe.BannerSettingsButtonDisplayLink && k.addClass('cookie-setting-link'), i !== Ie || Xe.showBannerAcceptButton || k.addClass('cookie-settings-btn-only')) : tt.removeChild(k.el);
                        var h = !Xe.showBannerAcceptButton && !Xe.showBannerCookieSettings && !Xe.BannerShowRejectAllButton;
                        h && e('#onetrust-button-group-parent').parentElement.removeChild(e('#onetrust-button-group-parent'));
                        var y = Xe.showBannerCloseButton, f = it(t('.banner-close-button')).el;
                        if (y)
                            for (g = 0; g < f.length; g++)
                                it(f[g]).el.setAttribute('aria-label', Xe.BannerCloseButtonText || 'Close Cookie Banner');
                        else {
                            for (var g = 0; g < f.length; g++)
                                it(f[g].parentElement).el.removeChild(f[g]);
                            i !== Pe && i !== Se || tt.removeChild(e('#onetrust-close-btn-container-mobile'));
                        }
                        if (i === Pe && ('IAB2' === Ze.iabType && (u.removeClass('ot-sdk-eight'), Xe.showBannerAcceptButton && e('#onetrust-button-group').insertAdjacentElement('afterbegin', this._acceptBtn), Xe.showBannerCookieSettings && e('#onetrust-button-group').insertAdjacentElement('beforeend', e('#onetrust-pc-btn-handler'))), y && !h && 'IAB2' === Ze.iabType ? u.addClass('ot-sdk-nine') : y && h ? u.addClass('ot-sdk-eleven') : !y && h ? u.addClass('ot-sdk-twelve') : y || h || 'IAB2' !== Ze.iabType || (u.addClass('ot-sdk-ten'), it(e('#onetrust-button-group-parent')).addClass('ot-sdk-two'), it(e('#onetrust-button-group-parent')).removeClass('ot-sdk-three'))), y && i === Te && 'IAB2' === Ze.iabType) {
                            var b = e('.banner-close-btn-container');
                            b.parentElement.removeChild(b), it(a).el.insertAdjacentElement('beforeEnd', b), it(e('#onetrust-banner-sdk .ot-sdk-container')).addClass('ot-top-cntr');
                        }
                        var m = it(e('#banner-options')).el;
                        r ? (i === Se ? this.setFloatingRoundedIconBannerCmpOptions(e, n) : (this.setCmpBannerOptions(e, n), i === Le && u.el.insertAdjacentElement('beforeend', m)), it(window).on('resize', function () {
                            window.innerWidth <= 896 && o.setBannerOptionContent();
                        })) : (Ze.bannerName === Te && (m = it(e('.banner-options-card')).el), tt.removeChild(m));
                    }
                    Ze.bannerName === Le && (this._fourBtns = Xe.BannerShowRejectAllButton && Xe.showBannerAcceptButton && Xe.showBannerCookieSettings && Xe.BShowSaveBtn, this._saveBtn = e('.ot-bnr-save-handler'), this._settingsBtn = e('#onetrust-pc-btn-handler'), this._btnsCntr = e('.banner-actions-container'), Xe.BShowSaveBtn ? it(this._saveBtn).html(Xe.BSaveBtnTxt) : (tt.removeChild(this._saveBtn), this._saveBtn = null), lt.insertFooterLogo(t('.ot-bnr-footer-logo a')), this._descriptCntr = e('.ot-cat-lst'), this.setBannerBtn(), window.addEventListener('resize', function () {
                        o.setBannerBtn();
                    }), this._fourBtns && it(e('#onetrust-banner-sdk')).addClass('has-reject-all-button'), this.insertGrps(e));
                    var C = document.createElement('div');
                    it(C).append(s), Ze.ignoreInjectingHtmlCss || (it('#onetrust-consent-sdk').append(C.firstChild), r && this.setBannerOptionContent());
                    var v = it('#onetrust-group-container').el, P = it('#onetrust-button-group-parent').el;
                    (v.length && v[0].clientHeight) < (P.length && P[0].clientHeight) ? it('#onetrust-banner-sdk').removeClass('vertical-align-content') : it('#onetrust-banner-sdk').addClass('vertical-align-content');
                    var A = document.querySelector('#onetrust-button-group-parent button:first-of-type'), T = document.querySelector('#onetrust-button-group-parent button:last-of-type');
                    T && A && 1 < Math.abs(T.offsetTop - A.offsetTop) && it('#onetrust-banner-sdk').addClass('ot-buttons-fw');
                }, Tn.prototype.setBannerBtn = function () {
                    window.innerWidth <= 600 ? (tt.insertElement(this._btnsCntr, this._settingsBtn, 'afterbegin'), tt.insertElement(this._btnsCntr, this._saveBtn, 'afterbegin'), tt.insertElement(this._btnsCntr, this._acceptBtn, 'afterbegin'), tt.insertElement(this._btnsCntr, this._rejectBtn, 'afterbegin')) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement('beforeend', this._settingsBtn), this._acceptBtn.insertAdjacentElement('beforebegin', this._rejectBtn), this._btnsCntr.insertAdjacentElement('beforebegin', this._saveBtn)) : (tt.insertElement(this._btnsCntr, this._settingsBtn, 'beforebegin'), tt.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? 'afterbegin' : 'beforebegin'), tt.insertElement(this._btnsCntr, this._rejectBtn, 'beforeend'), tt.insertElement(this._btnsCntr, this._acceptBtn, 'beforeend'));
                }, Tn.prototype.setCmpBannerOptions = function (s, e) {
                    var i = it(s('#banner-options .banner-option')).el.cloneNode(!0);
                    it(s('#banner-options')).html('');
                    var l = 1;
                    e.forEach(function (e) {
                        var t = i.cloneNode(!0), o = Xe[e.titleKey], n = Xe[e.descriptionKey];
                        if (o || n) {
                            t.querySelector('.banner-option-header :first-child').innerHTML = o;
                            var r = t.querySelector('.banner-option-details');
                            n ? (r.setAttribute('id', 'option-details-' + l++), r.innerHTML = n) : r.parentElement.removeChild(r), it(s('#banner-options')).el.appendChild(t);
                        }
                    });
                }, Tn.prototype.setFloatingRoundedIconBannerCmpOptions = function (r, e) {
                    var s = it(r('#banner-options button')).el.cloneNode(!0), n = it(r('.banner-option-details')).el.cloneNode(!0);
                    it(r('#banner-options')).html(''), e.forEach(function (e) {
                        var t = s.cloneNode(!0), o = Xe[e.titleKey], n = Xe[e.descriptionKey];
                        (o || n) && (t.setAttribute('id', e.identifier), t.querySelector('.banner-option-header :first-child').innerHTML = o, it(r('#banner-options')).el.appendChild(t));
                    }), e.forEach(function (e) {
                        var t = Xe[e.descriptionKey];
                        if (t) {
                            var o = n.cloneNode(!0);
                            o.innerHTML = t, o.classList.add(e.identifier), it(r('#banner-options')).el.appendChild(o);
                        }
                    });
                }, Tn.prototype.setBannerOptionContent = function () {
                    Ze.bannerName !== Pe && Ze.bannerName !== Se || setTimeout(function () {
                        if (window.innerWidth < 769) {
                            var e = it('#banner-options').el[0];
                            it('#onetrust-group-container').el[0].appendChild(e);
                        } else
                            e = it('#banner-options').el[0], Ze.bannerName === Se ? it('.banner-content').el[0].appendChild(e) : it('#onetrust-banner-sdk .ot-sdk-container').el[0].appendChild(e);
                    });
                }, Tn.prototype.setAdditionalDesc = function (e) {
                    var t = Xe.BannerAdditionalDescPlacement, o = document.createElement('span');
                    o.classList.add('ot-b-addl-desc'), o.innerHTML = Xe.BannerAdditionalDescription;
                    var n = e('#onetrust-policy-text');
                    if (t === x.AfterTitle)
                        n.insertAdjacentElement('beforeBegin', o);
                    else if (t === x.AfterDescription)
                        n.insertAdjacentElement('afterEnd', o);
                    else if (t === x.AfterDPD) {
                        var r = e('.ot-dpd-container .ot-dpd-desc');
                        Xe.ChoicesBanner && (r = e('#onetrust-group-container')), r.insertAdjacentElement('beforeEnd', o);
                    }
                }, Tn.prototype.insertGrps = function (e) {
                    var p = e('.ot-cat-item').cloneNode(!0);
                    tt.removeChild(e('.ot-cat-item')), Xe.BCategoryStyle === oe.Checkbox ? tt.removeChild(p.querySelector('.ot-tgl')) : (tt.removeChild(p.querySelector('.ot-chkbox')), it(p).addClass('ot-cat-bdr'));
                    var k = e('.ot-cat-lst ul');
                    Xe.Groups.forEach(function (e) {
                        var t = p.cloneNode(!0), o = t.querySelector('.ot-tgl,.ot-chkbox'), n = e.GroupName, r = e.CustomGroupId, s = 'ot-bnr-grp-id-' + r, i = 'ot-bnr-hdr-id-' + r, l = -1 !== Ke.indexOf(e.Type), a = yt.getGrpStatus(e).toLowerCase() === pe || l, c = xo.isGroupActive(e) || l;
                        it(o.querySelector('label')).attr('for', s), it(o.querySelector('.ot-label-txt')).html(e.GroupName);
                        var d = o.querySelector('input');
                        a && (Xe.BCategoryStyle === oe.Toggle ? (tt.removeChild(o), t.insertAdjacentElement('beforeend', it('<div class=\'ot-always-active\'>' + Xe.AlwaysActiveText + '</div>', 'ce').el)) : it(d).attr('disabled', !0)), d.classList.add('category-switch-handler'), xo.setInputID(d, s, r, c, i);
                        var u = t.querySelector('h4');
                        it(u).html(n), it(u).attr('id', i), it(k).append(t);
                    });
                }, Tn);
            function Tn() {
                this.El = '#onetrust-banner-sdk', this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1;
            }
            var Sn, In = (Ln.prototype.initCookieSettingHandlers = function () {
                    it(document).on('click', '.optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler', this.cookieSettingsBoundListner);
                }, Ln.prototype.initFlgtCkStgBtnEventHandlers = function () {
                    it('.ot-floating-button__open').on('click', Sn.floatingCookieSettingOpenBtnClicked), it('.ot-floating-button__close').on('click', Sn.floatingCookieSettingCloseBtnClicked);
                }, Ln.prototype.floatingCookieSettingOpenBtnClicked = function (e) {
                    it(Sn.fltgBtnSltr).addClass('ot-pc-open'), it(Sn.fltgBtnFSltr).attr('aria-hidden', 'true'), it(Sn.fltgBtnBSltr).attr('aria-hidden', ''), Rt.triggerGoogleAnalyticsEvent(Kt, no), Sn.showCookieSettingsHandler(e);
                }, Ln.prototype.floatingCookieSettingCloseBtnClicked = function (e) {
                    Rt.triggerGoogleAnalyticsEvent(Kt, ro), Sn.hideCookieSettingsHandler(e);
                }, Ln.prototype.initialiseLegIntBtnHandlers = function () {
                    it(document).on('click', '.ot-obj-leg-btn-handler', Sn.onLegIntButtonClick), it(document).on('click', '.ot-remove-objection-handler', Sn.onLegIntButtonClick);
                }, Ln.prototype.initialiseAddtlVenHandler = function () {
                    it('#onetrust-pc-sdk #ot-addtl-venlst').on('click', Sn.selectVendorsGroupHandler), it('#onetrust-pc-sdk #ot-selall-adtlven-handler').on('click', Sn.selAllAdtlVenHandler);
                }, Ln.prototype.initializeGenVenHandlers = function () {
                    it('#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler').on('click', Sn.genVendorToggled), it('#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox').on('click', Sn.genVendorDetails), it('#onetrust-pc-sdk #ot-selall-gnven-handler').on('click', Sn.selectAllGenVenHandler);
                }, Ln.prototype.initialiseConsentNoticeHandlers = function () {
                    var t = 37, o = 39;
                    if (Ze.pcName === Ne && Sn.categoryMenuSwitchHandler(), it('#onetrust-pc-sdk .onetrust-close-btn-handler').on('click', Sn.bannerCloseButtonHandler), it('#onetrust-pc-sdk #accept-recommended-btn-handler').on('click', cn.allowAllEventHandler.bind(this, !0)), it('#onetrust-pc-sdk .ot-pc-refuse-all-handler').on('click', cn.rejectAllEventHandler.bind(this, !0)), it('#onetrust-pc-sdk #close-pc-btn-handler').on('click', Sn.hideCookieSettingsHandler), it(document).on('keydown', function (e) {
                            var t = document.getElementById('onetrust-pc-sdk');
                            if (27 === e.keyCode && t && 'none' !== window.getComputedStyle(t).display) {
                                var o = it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal).el[0];
                                'block' === o.style.display || '0px' < o.style.width ? (Sn.closeFilter(), it('#onetrust-pc-sdk #filter-btn-handler').focus()) : Xe.NoBanner && !Xe.ShowPreferenceCenterCloseButton || Sn.hideCookieSettingsHandler(), Sn.confirmPC();
                            }
                        }), it('#onetrust-pc-sdk #vendor-close-pc-btn-handler').on('click', Sn.hideCookieSettingsHandler), it('#onetrust-pc-sdk .category-switch-handler').on('click', Sn.toggleV2Category), it('#onetrust-pc-sdk .cookie-subgroup-handler').on('click', Sn.toggleSubCategory), it('#onetrust-pc-sdk .category-menu-switch-handler').on('keydown', function (e) {
                            Ze.pcName === Ne && (e.keyCode !== t && e.keyCode !== o || (Xe.PCTemplateUpgrade ? Sn.changeSelectedTabV2(e) : Sn.changeSelectedTab(e)));
                        }), it('#onetrust-pc-sdk').on('click', ut.P_Category_Item + ' > input:first-child,' + ut.P_Category_Item + ' > button:first-child', Sn.onCategoryItemToggle.bind(this)), Xe.showCookieList && (it('#onetrust-pc-sdk .category-host-list-handler').on('click', function (e) {
                            Oe.showGeneralVendors ? Oe.cookieListType = W.HostAndGenVen : Oe.cookieListType = W.Host, Sn.pcLinkSource = e.target, Sn.loadCookieList(e.target);
                        }), Xe.allowHostOptOut || Oe.genVenOptOutEnabled ? (it('#onetrust-pc-sdk #select-all-hosts-groups-handler').on('click', Sn.selectAllHostsGroupsHandler), it('#onetrust-pc-sdk ' + ut.P_Host_Cntr).on('click', Sn.selectHostsGroupHandler)) : it('#onetrust-pc-sdk ' + ut.P_Host_Cntr).on('click', Sn.toggleAccordionStatus)), Xe.IsIabEnabled && (it('#onetrust-pc-sdk .category-vendors-list-handler').on('click', function (e) {
                            Sn.pcLinkSource = e.target, Sn.showVendorsList(e.target);
                        }), it('#onetrust-pc-sdk ' + ut.P_Vendor_Container).on('click', Sn.selectVendorsGroupHandler), Xe.UseGoogleVendors || Sn.bindSelAllHandlers(), Sn.initialiseLegIntBtnHandlers()), Xe.IsIabEnabled || Xe.showCookieList) {
                        it(document).on('click', '.back-btn-handler', Sn.backBtnHandler), it('#onetrust-pc-sdk #vendor-search-handler').on('keyup', function (e) {
                            var t = e.target.value.trim();
                            Sn.isCookieList ? qo.searchHostList(t) : (qo.loadVendorList(t, []), Xe.UseGoogleVendors && qo.searchVendors(qo.googleSearchSelectors, Oe.addtlVendorsList, X.GoogleVendor, t), Oe.showGeneralVendors && qo.searchVendors(qo.genVendorSearchSelectors, Xe.GeneralVendors, X.GeneralVendor, t)), qo.playSearchStatus(Sn.isCookieList);
                        }), it('#onetrust-pc-sdk #filter-btn-handler').on('click', Sn.toggleVendorFiltersHandler), it('#onetrust-pc-sdk #filter-apply-handler').on('click', Sn.applyFilterHandler), it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal).on('click', Sn.tglFltrOptionHandler), !Ge.isV2Template && Ze.pcName !== Be || it('#onetrust-pc-sdk #filter-cancel-handler').on('click', Sn.cancelFilterHandler), !Ge.isV2Template && Ze.pcName === Be || it('#onetrust-pc-sdk #clear-filters-handler').on('click', Sn.clearFiltersHandler), Ge.isV2Template ? it('#onetrust-pc-sdk #filter-cancel-handler').on('keydown', function (e) {
                            9 !== e.keyCode && 'tab' !== e.code || e.shiftKey || (e.preventDefault(), it('#onetrust-pc-sdk #clear-filters-handler').el[0].focus());
                        }) : it('#onetrust-pc-sdk #filter-apply-handler').on('keydown', function (e) {
                            9 !== e.keyCode && 'tab' !== e.code || e.shiftKey || (e.preventDefault(), it('#onetrust-pc-sdk .category-filter-handler').el[0].focus());
                        });
                        var e = it('#onetrust-pc-sdk .category-filter-handler').el;
                        it(e[0]).on('keydown', function (e) {
                            9 !== e.keyCode && 'tab' !== e.code || !e.shiftKey || (e.preventDefault(), it('#onetrust-pc-sdk #filter-apply-handler').el[0].focus());
                        });
                    }
                    Xe.NoBanner && (Xe.OnClickCloseBanner && document.body.addEventListener('click', cn.bodyClickEvent), Xe.ScrollCloseBanner && window.addEventListener('scroll', cn.scrollCloseBanner));
                }, Ln.prototype.bindSelAllHandlers = function () {
                    it('#onetrust-pc-sdk #select-all-vendor-leg-handler').on('click', Sn.selectAllVendorsLegIntHandler), it('#onetrust-pc-sdk #select-all-vendor-groups-handler').on('click', Sn.SelectAllVendorConsentHandler);
                }, Ln.prototype.hideCookieSettingsHandler = function (e) {
                    return void 0 === e && (e = window.event), Rt.triggerGoogleAnalyticsEvent(Kt, Zt), on.hideConsentNoticeV2(), Sn.getResizeElement().removeEventListener('resize', Sn.setCenterLayoutFooterHeight), window.removeEventListener('resize', Sn.setCenterLayoutFooterHeight), !Ge.isV2Template && Ze.pcName !== Be || Sn.closeFilter(!1), Ze.pcName === xe && it('#onetrust-pc-sdk ' + ut.P_Content).removeClass('ot-hide'), Sn.hideVendorsList(), Ao.csBtnGroup && (it(Sn.fltgBtnSltr).removeClass('ot-pc-open'), it(Sn.fltgBtnFSltr).attr('aria-hidden', ''), it(Sn.fltgBtnBSltr).attr('aria-hidden', 'true')), Sn.confirmPC(e), !1;
                }, Ln.prototype.selectAllHostsGroupsHandler = function (e) {
                    var t = e.target.checked, o = it('#onetrust-pc-sdk #' + ut.P_Sel_All_Host_El).el[0], n = o.classList.contains('line-through'), r = it('#onetrust-pc-sdk .host-checkbox-handler').el;
                    tt.setCheckedAttribute('#select-all-hosts-groups-handler', null, t);
                    for (var s = 0; s < r.length; s++)
                        r[s].getAttribute('disabled') || tt.setCheckedAttribute(null, r[s], t);
                    Oe.optanonHostList.forEach(function (e) {
                        Et.updateHostStatus(e, t);
                    }), Xe.GeneralVendors.forEach(function (e) {
                        _t.updateGenVendorStatus(e.VendorCustomId, t);
                    }), n && o.classList.remove('line-through');
                }, Ln.prototype.selectHostsGroupHandler = function (e) {
                    Sn.toggleAccordionStatus(e);
                    var t = e.target.getAttribute('hostId'), o = e.target.getAttribute('ckType'), n = e.target.checked;
                    if (null !== t) {
                        if (o === j.GenVendor) {
                            var r = Xe.GeneralVendors.find(function (e) {
                                return e.VendorCustomId === t;
                            }).Name;
                            Rt.triggerGoogleAnalyticsEvent(Kt, n ? lo : ao, r + ': VEN_' + t), _t.updateGenVendorStatus(t, n);
                        } else {
                            var s = tt.findIndex(Oe.optanonHostList, function (e) {
                                    return e.HostId === t;
                                }), i = Oe.optanonHostList[s];
                            Sn.toggleHostStatus(i, n);
                        }
                        tt.setCheckedAttribute(null, e.target, n);
                    }
                }, Ln.prototype.onCategoryItemToggle = function (e) {
                    Ze.pcName === xe && this.setPcListContainerHeight(), Sn.toggleAccordionStatus(e);
                }, Ln.prototype.toggleAccordionStatus = function (e) {
                    var t = e.target;
                    if (t && t.getAttribute('aria-expanded')) {
                        var o = 'true' === t.getAttribute('aria-expanded') ? 'false' : 'true';
                        t.setAttribute('aria-expanded', o);
                    }
                }, Ln.prototype.toggleHostStatus = function (e, t) {
                    Rt.triggerGoogleAnalyticsEvent(Kt, t ? co : uo, e.HostName + ': H_' + e.HostId), Et.updateHostStatus(e, t);
                }, Ln.prototype.toggleBannerOptions = function (e) {
                    it('.banner-option-input').each(function (e) {
                        it(e).el.setAttribute('aria-expanded', !1);
                    }), Sn.toggleAccordionStatus(e);
                }, Ln.prototype.bannerCloseButtonHandler = function (e) {
                    if (e && e.target && e.target.className) {
                        var t = e.target.className;
                        -1 < t.indexOf('save-preference-btn-handler') ? (Oe.bannerCloseSource = b.ConfirmChoiceButton, Rt.triggerGoogleAnalyticsEvent(Kt, to)) : -1 < t.indexOf('banner-close-button') ? (Oe.bannerCloseSource = b.BannerCloseButton, Rt.triggerGoogleAnalyticsEvent(Kt, Jt)) : -1 < t.indexOf('ot-bnr-save-handler') && (Oe.bannerCloseSource = b.BannerSaveSettings, Rt.triggerGoogleAnalyticsEvent(Kt, Qt));
                    }
                    return Sn.hideVendorsList(), cn.bannerCloseButtonHandler();
                }, Ln.prototype.onLegIntButtonClick = function (e) {
                    if (e) {
                        var t = event.currentTarget, o = 'true' === t.parentElement.getAttribute('is-vendor'), n = t.parentElement.getAttribute('data-group-id'), r = !t.classList.contains('ot-leg-int-enabled');
                        if (o)
                            Sn.onVendorToggle(n, N.LI);
                        else {
                            var s = yt.getGroupById(n);
                            s.Parent ? Sn.updateSubGroupToggles(s, r, !0) : Sn.updateGroupToggles(s, r, !0);
                        }
                        xo.updateLegIntBtnElement(t.parentElement, r);
                    }
                }, Ln.prototype.updateGroupToggles = function (e, t, o) {
                    Et.toggleGroupHosts(e, t), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(e, t), e.IsLegIntToggle = o, xo.toggleGrpStatus(e, t), e.SubGroups && e.SubGroups.length && xo.toogleAllSubGrpElements(e, t), this.allowAllVisible(xo.setAllowAllButton()), e.IsLegIntToggle = !1;
                }, Ln.prototype.updateSubGroupToggles = function (e, t, o) {
                    Et.toggleGroupHosts(e, t), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(e, t);
                    var n = yt.getGroupById(e.Parent);
                    e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
                    var r = xo.isGroupActive(n);
                    t ? (xo.toggleGrpStatus(e, !0), xo.isAllSubgroupsEnabled(n) && !r && (xo.toggleGrpStatus(n, !0), Et.toggleGroupHosts(n, t), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(n, t), xo.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? '-leg-out' : ''), !0))) : (xo.toggleGrpStatus(e, !1), xo.isAllSubgroupsDisabled(n) && r ? (xo.toggleGrpStatus(n, !1), Et.toggleGroupHosts(n, t), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(n, t), xo.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? '-leg-out' : ''), t)) : (xo.toggleGrpStatus(n, !1), Et.toggleGroupHosts(n, !1), Oe.genVenOptOutEnabled && Et.toggleGroupGenVendors(n, t), xo.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? '-leg-out' : ''), !1))), this.allowAllVisible(xo.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle;
                }, Ln.prototype.hideCategoryContainer = function (e) {
                    void 0 === e && (e = !1);
                    var t = Ze.pcName, o = Ge.isV2Template;
                    this.isCookieList = e, Xe.PCTemplateUpgrade ? it('#onetrust-pc-sdk ' + ut.P_Content).addClass('ot-hide') : it('#onetrust-pc-sdk .ot-main-content').hide(), it('#onetrust-pc-sdk ' + ut.P_Vendor_List).removeClass('ot-hide'), t !== Be && t !== xe && it('#onetrust-pc-sdk #close-pc-btn-handler.main').hide(), t === xe && (it('#onetrust-pc-sdk').el[0].style.height = ''), e ? (it(ut.P_Vendor_List + ' #select-all-text-container').show('inline-block'), it('#onetrust-pc-sdk ' + ut.P_Host_Cntr).show(), Xe.allowHostOptOut || Oe.genVenOptOutEnabled ? it('#onetrust-pc-sdk #' + ut.P_Sel_All_Host_El).show('inline-block') : it('#onetrust-pc-sdk #' + ut.P_Sel_All_Host_El).hide(), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Leg_El).hide(), it('#onetrust-pc-sdk ' + ut.P_Leg_Header).hide(), o || it('#onetrust-pc-sdk ' + ut.P_Leg_Select_All).hide(), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Consent_El).hide(), it('#onetrust-pc-sdk  ' + ut.P_Vendor_Container).hide(), (Xe.UseGoogleVendors || Oe.showGeneralVendors) && it('#onetrust-pc-sdk .ot-acc-cntr').hide(), it('#onetrust-pc-sdk ' + ut.P_Vendor_List).addClass(ut.P_Host_UI), it('#onetrust-pc-sdk ' + ut.P_Vendor_Content).addClass(ut.P_Host_Cnt)) : (it('#onetrust-pc-sdk ' + ut.P_Vendor_Container).show(), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Consent_El).show('inline-block'), Xe.UseGoogleVendors && it('#onetrust-pc-sdk .ot-acc-cntr').show(), Ze.legIntSettings.PAllowLI && 'IAB2' === Ze.iabType ? (it('#onetrust-pc-sdk ' + ut.P_Select_Cntr).show(Ge.isV2Template ? void 0 : 'inline-block'), it('#onetrust-pc-sdk ' + ut.P_Leg_Select_All).show('inline-block'), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Leg_El).show('inline-block'), it(ut.P_Vendor_List + ' #select-all-text-container').hide(), Ze.legIntSettings.PShowLegIntBtn ? (it('#onetrust-pc-sdk ' + ut.P_Leg_Header).hide(), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Leg_El).hide()) : it('#onetrust-pc-sdk ' + ut.P_Leg_Header).show()) : (it('#onetrust-pc-sdk ' + ut.P_Select_Cntr).show(), it(ut.P_Vendor_List + ' #select-all-text-container').show('inline-block'), it('#onetrust-pc-sdk ' + ut.P_Leg_Select_All).hide(), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Leg_El).hide()), it('#onetrust-pc-sdk #' + ut.P_Sel_All_Host_El).hide(), it('#onetrust-pc-sdk ' + ut.P_Host_Cntr).hide(), it('#onetrust-pc-sdk ' + ut.P_Vendor_List).removeClass(ut.P_Host_UI), it('#onetrust-pc-sdk ' + ut.P_Vendor_Content).removeClass(ut.P_Host_Cnt)), pn.setFilterList(e);
                }, Ln.prototype.showAllVendors = function (t) {
                    return a(this, void 0, void 0, function () {
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return [
                                    4,
                                    Sn.fetchAndSetupPC()
                                ];
                            case 1:
                                return e.sent(), Sn.showVendorsList(null, !0), [
                                    4,
                                    Sn.showCookieSettingsHandler(t)
                                ];
                            case 2:
                                return e.sent(), [2];
                            }
                        });
                    });
                }, Ln.prototype.fetchAndSetupPC = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return Ge.moduleInitializer.IsSuppressPC && 0 === it('#onetrust-pc-sdk').length ? [
                                    4,
                                    Co.getPcContent()
                                ] : [
                                    3,
                                    2
                                ];
                            case 1:
                                t = e.sent(), Ao.preferenceCenterGroup = {
                                    name: t.name,
                                    html: atob(t.html),
                                    css: t.css
                                }, Ge.isV2Template = Xe.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById('onetrust-style')).innerHTML += Ao.preferenceCenterGroup.css, o.innerHTML += yn.addCustomPreferenceCenterCSS(), mn.insertPcHtml(), Sn.initialiseConsentNoticeHandlers(), Xe.IsIabEnabled && qo.InitializeVendorList(), e.label = 2;
                            case 2:
                                return [2];
                            }
                        });
                    });
                }, Ln.prototype.setVendorContent = function () {
                    it('#onetrust-pc-sdk #filter-count').text(Oe.filterByIABCategories.length.toString()), qo.loadVendorList('', Oe.filterByIABCategories), Xe.UseGoogleVendors && (Oe.vendorDomInit ? qo.resetAddtlVendors() : (qo.initGoogleVendors(), it('#onetrust-pc-sdk').on('click', '.ot-acc-cntr > button', Sn.toggleAccordionStatus.bind(this)))), Oe.vendorDomInit || (Oe.vendorDomInit = !0, Sn.initialiseLegIntBtnHandlers(), Xe.UseGoogleVendors && (Sn.initialiseAddtlVenHandler(), Sn.bindSelAllHandlers())), Oe.showGeneralVendors && !Oe.genVendorDomInit && (Oe.genVendorDomInit = !0, qo.initGenVendors(), Sn.initializeGenVenHandlers(), Xe.UseGoogleVendors || (Sn.bindSelAllHandlers(), it('#onetrust-pc-sdk').on('click', '.ot-acc-cntr > button', Sn.toggleAccordionStatus.bind(this))));
                }, Ln.prototype.showVendorsList = function (e, t) {
                    if (void 0 === t && (t = !1), Sn.hideCategoryContainer(!1), !t) {
                        var o = e.getAttribute('data-parent-id');
                        if (o) {
                            var n = yt.getGroupById(o);
                            if (n) {
                                var r = h(n.SubGroups, [n]).reduce(function (e, t) {
                                    return -1 < Ue.indexOf(t.Type) && e.push(t.CustomGroupId), e;
                                }, []);
                                Oe.filterByIABCategories = h(Oe.filterByIABCategories, r);
                            }
                        }
                    }
                    return Sn.setVendorContent(), Ho.updateFilterSelection(!1), Sn.setBackButtonFocus(), Oe.pcLayer = S.VendorList, e && Ko.setPCFocus(Ko.getPCElements()), !1;
                }, Ln.prototype.loadCookieList = function (e) {
                    if (Oe.filterByCategories = [], Sn.hideCategoryContainer(!0), Oe.cookieListType != W.GenVen) {
                        var t = e.getAttribute('data-parent-id'), o = yt.getGroupById(t);
                        Oe.filterByCategories.push(t), o.SubGroups.length && o.SubGroups.forEach(function (e) {
                            if (-1 === Ue.indexOf(e.Type)) {
                                var t = e.CustomGroupId;
                                Oe.filterByCategories.indexOf(t) < 0 && Oe.filterByCategories.push(t);
                            }
                        });
                    }
                    return qo.loadHostList('', Oe.filterByCategories), it('#onetrust-pc-sdk #filter-count').text(Oe.filterByCategories.length.toString()), Ho.updateFilterSelection(!0), Sn.setBackButtonFocus(), Oe.pcLayer = S.CookieList, Ko.setPCFocus(Ko.getPCElements()), !1;
                }, Ln.prototype.selectAllVendorsLegIntHandler = function (e) {
                    for (var t = it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Leg_El).el[0], o = t.classList.contains('line-through'), n = it('#onetrust-pc-sdk .vendor-leg-checkbox-handler').el, r = 0; r < n.length; r++)
                        tt.setCheckedAttribute(null, n[r], e.target.checked), Xe.PCShowConsentLabels && (n[r].parentElement.querySelector('.ot-label-status').innerHTML = e.target.checked ? Xe.PCActiveText : Xe.PCInactiveText);
                    e.target.checked ? Oe.vendors.selectedLegIntVendors = Oe.vendors.list.map(function (e) {
                        return e.vendorId + ':' + Oe.vendorsSetting[e.vendorId].legInt;
                    }) : Oe.vendors.selectedLegIntVendors = [], o && t.classList.remove('line-through');
                }, Ln.prototype.selAllAdtlVenHandler = function (e) {
                    for (var t = it('#onetrust-pc-sdk #ot-selall-adtlvencntr').el[0], o = t.classList.contains('line-through'), n = it('#onetrust-pc-sdk .ot-addtlven-chkbox-handler').el, r = e.target.checked, s = 0; s < n.length; s++)
                        tt.setCheckedAttribute(null, n[s], r), Xe.PCShowConsentLabels && (n[s].parentElement.querySelector('.ot-label-status').innerHTML = r ? Xe.PCActiveText : Xe.PCInactiveText);
                    r ? Xe.UseGoogleVendors && Object.keys(Oe.addtlVendorsList).forEach(function (e) {
                        Oe.addtlVendors.vendorSelected[e] = !0;
                    }) : Oe.addtlVendors.vendorSelected = {}, o && t.classList.remove('line-through');
                }, Ln.prototype.selectAllGenVenHandler = function (e) {
                    var t = e.target.checked;
                    Sn.selectAllHandler({
                        selAllEl: '#onetrust-pc-sdk #ot-selall-gnvencntr',
                        vendorBoxes: '#onetrust-pc-sdk .ot-gnven-chkbox-handler'
                    }, 'genven', t);
                }, Ln.prototype.selectAllHandler = function (e, t, o) {
                    for (var n = it(e.selAllEl).el[0], r = n.classList.contains('line-through'), s = it(e.vendorBoxes).el, i = 0; i < s.length; i++)
                        'genven' === t && !o && Oe.alwaysActiveGenVendors.includes(s[i].getAttribute('gn-vid')) ? (tt.setDisabledAttribute(null, s[i], !0), tt.setCheckedAttribute(null, s[i], !0)) : tt.setCheckedAttribute(null, s[i], o), Xe.PCShowConsentLabels && (s[i].parentElement.querySelector('.ot-label-status').innerHTML = o ? Xe.PCActiveText : Xe.PCInactiveText);
                    o ? 'googleven' === t && Xe.UseGoogleVendors ? Object.keys(Oe.addtlVendorsList).forEach(function (e) {
                        Oe.addtlVendors.vendorSelected[e] = !0;
                    }) : 'genven' === t && Oe.showGeneralVendors && Xe.GeneralVendors.forEach(function (e) {
                        Oe.genVendorsConsent[e.VendorCustomId] = !0;
                    }) : 'googleven' === t ? Oe.addtlVendors.vendorSelected = {} : (Oe.genVendorsConsent = {}, Oe.alwaysActiveGenVendors.forEach(function (e) {
                        Oe.genVendorsConsent[e] = !0;
                    })), r && n.classList.remove('line-through');
                }, Ln.prototype.SelectAllVendorConsentHandler = function (e) {
                    for (var t = it('#onetrust-pc-sdk #' + ut.P_Sel_All_Vendor_Consent_El).el[0], o = t.classList.contains('line-through'), n = it('#onetrust-pc-sdk .vendor-checkbox-handler').el, r = e.target.checked, s = 0; s < n.length; s++)
                        tt.setCheckedAttribute(null, n[s], r), Xe.PCShowConsentLabels && (n[s].parentElement.querySelector('.ot-label-status').innerHTML = r ? Xe.PCActiveText : Xe.PCInactiveText);
                    Oe.vendors.selectedVendors = r ? Oe.vendors.list.map(function (e) {
                        return e.vendorId + ':' + Oe.vendorsSetting[e.vendorId].consent;
                    }) : [], o && t.classList.remove('line-through');
                }, Ln.prototype.onVendorToggle = function (n, e) {
                    var t = Oe.vendors, o = Oe.addtlVendors, r = e === N.LI ? t.selectedLegIntVendors : e === N.AddtlConsent ? [] : t.selectedVendors, s = !1, i = Number(n);
                    r.some(function (e, t) {
                        var o = e.split(':');
                        if (o[0] === n)
                            return i = t, s = 'true' === o[1], !0;
                    }), e === N.LI ? (Rt.triggerGoogleAnalyticsEvent(Kt, s ? fo : go, t.list.find(function (e) {
                        return e.vendorId === n;
                    }).vendorName + ': IABV2_' + n), t.selectedLegIntVendors[i] = n + ':' + !s, Ze.legIntSettings.PShowLegIntBtn || qo.vendorLegIntToggleEvent()) : e === N.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, qo.venAdtlSelAllTglEvent()) : (Rt.triggerGoogleAnalyticsEvent(Kt, s ? yo : ho, t.list.find(function (e) {
                        return e.vendorId === n;
                    }).vendorName + ': IABV2_' + n), t.selectedVendors[i] = n + ':' + !s, qo.vendorsListEvent());
                }, Ln.prototype.onVendorDisclosure = function (n) {
                    return a(this, void 0, void 0, function () {
                        var t, o;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return (t = Oe.discVendors)[n].isFetched ? [
                                    3,
                                    2
                                ] : (t[n].isFetched = !0, [
                                    4,
                                    Co.getStorageDisclosure(t[n].disclosureUrl)
                                ]);
                            case 1:
                                o = e.sent(), qo.updateVendorDisclosure(n, o), e.label = 2;
                            case 2:
                                return [2];
                            }
                        });
                    });
                }, Ln.prototype.tglFltrOptionHandler = function (e) {
                    e && e.target.classList.contains('category-filter-handler') && tt.setCheckedAttribute(null, e.target, e.target.checked);
                }, Ln.prototype.selectVendorsGroupHandler = function (e) {
                    Sn.toggleAccordionStatus(e);
                    var t = e.target.getAttribute('leg-vendorid'), o = e.target.getAttribute('vendorid'), n = e.target.getAttribute('addtl-vid'), r = e.target.getAttribute('disc-vid');
                    t ? Sn.onVendorToggle(t, N.LI) : o ? Sn.onVendorToggle(o, N.Consent) : n && Sn.onVendorToggle(n, N.AddtlConsent), r && Sn.onVendorDisclosure(r), (t || o || n) && (tt.setCheckedAttribute(null, e.target, e.target.checked), Xe.PCShowConsentLabels && (e.target.parentElement.querySelector('.ot-label-status').innerHTML = e.target.checked ? Xe.PCActiveText : Xe.PCInactiveText));
                }, Ln.prototype.toggleVendorFiltersHandler = function () {
                    var e = !1, t = it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal).el[0];
                    switch (Ze.pcName) {
                    case Ee:
                    case we:
                    case xe:
                    case Ne:
                        if (e = 'block' === t.style.display)
                            Sn.closeFilter();
                        else {
                            var o = it('#onetrust-pc-sdk ' + ut.P_Triangle).el[0];
                            it(o).attr('style', 'display:block'), it(t).attr('style', 'display:block');
                            var n = Array.prototype.slice.call(t.querySelectorAll('[href], input, button'));
                            Ko.setPCFocus(n);
                        }
                        break;
                    case Be:
                        896 < window.innerWidth || 896 < window.screen.height ? t.style.width = '400px' : t.setAttribute('style', 'height: 100%; width: 100%'), t.querySelector('.ot-checkbox input').focus();
                        break;
                    default:
                        return;
                    }
                    Ge.isV2Template && !e && (it('#onetrust-pc-sdk').addClass('ot-shw-fltr'), it('#onetrust-pc-sdk .ot-fltr-scrlcnt').el[0].scrollTop = 0);
                }, Ln.prototype.clearFiltersHandler = function () {
                    for (var e = it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal + ' input').el, t = 0; t < e.length; t++)
                        e[t].checked && (e[t].checked = !1);
                    Sn.isCookieList ? Oe.filterByCategories = [] : Oe.filterByIABCategories = [];
                }, Ln.prototype.cancelFilterHandler = function () {
                    Sn.isCookieList ? Ho.cancelHostFilter() : qo.cancelVendorFilter(), Sn.closeFilter(), it('#onetrust-pc-sdk #filter-btn-handler').focus();
                }, Ln.prototype.applyFilterHandler = function () {
                    var e;
                    Sn.isCookieList ? (e = Ho.updateHostFilterList(), qo.loadHostList('', e)) : (e = qo.updateVendorFilterList(), qo.loadVendorList('', e)), it('#onetrust-pc-sdk #filter-count').text(String(e.length)), Sn.closeFilter(), it('#onetrust-pc-sdk #filter-btn-handler').focus();
                }, Ln.prototype.setPcListContainerHeight = function () {
                    it('#onetrust-pc-sdk ' + ut.P_Content).el[0].classList.contains('ot-hide') ? it('#onetrust-pc-sdk').el[0].style.height = '' : setTimeout(function () {
                        var e = window.innerHeight;
                        768 <= window.innerWidth && 600 <= window.innerHeight && (e = 0.8 * window.innerHeight), !it('#onetrust-pc-sdk ' + ut.P_Content).el[0].scrollHeight || it('#onetrust-pc-sdk ' + ut.P_Content).el[0].scrollHeight >= e ? it('#onetrust-pc-sdk').el[0].style.height = e + 'px' : it('#onetrust-pc-sdk').el[0].style.height = 'auto';
                    });
                }, Ln.prototype.changeSelectedTab = function (e) {
                    var t, o = it('#onetrust-pc-sdk .category-menu-switch-handler'), n = 0, r = it(o.el[0]);
                    o.each(function (e, t) {
                        it(e).el.classList.contains(ut.P_Active_Menu) && (n = t, it(e).el.classList.remove(ut.P_Active_Menu), r = it(e));
                    }), e.keyCode === L.RightArrow ? t = n + 1 >= o.el.length ? it(o.el[0]) : it(o.el[n + 1]) : e.keyCode === L.LeftArrow && (t = it(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r);
                }, Ln.prototype.changeSelectedTabV2 = function (e) {
                    var t, o = e.target.parentElement;
                    e.keyCode === L.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === L.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
                    var n = t.querySelector('.category-menu-switch-handler');
                    n.focus(), this.groupTabClick(n);
                }, Ln.prototype.categoryMenuSwitchHandler = function () {
                    for (var t = this, e = it('#onetrust-pc-sdk .category-menu-switch-handler').el, o = 0; o < e.length; o++)
                        e[o].addEventListener('click', this.groupTabClick), e[o].addEventListener('keydown', function (e) {
                            if (32 === e.keyCode || 'space' === e.code)
                                return t.groupTabClick(e.currentTarget), e.preventDefault(), !1;
                        });
                }, Ln.prototype.groupTabClick = function (e) {
                    var t = it('#onetrust-pc-sdk ' + ut.P_Grp_Container).el[0], o = t.querySelector('.' + ut.P_Active_Menu), n = e.currentTarget || e, r = n.getAttribute('aria-controls');
                    o.setAttribute('tabindex', -1), o.setAttribute('aria-selected', !1), o.classList.remove(ut.P_Active_Menu), t.querySelector(ut.P_Desc_Container + ':not(.ot-hide)').classList.add('ot-hide'), t.querySelector('#' + r).classList.remove('ot-hide'), n.setAttribute('tabindex', 0), n.setAttribute('aria-selected', !0), n.classList.add(ut.P_Active_Menu);
                }, Ln.prototype.tabMenuToggle = function (e, t) {
                    e.el.setAttribute('tabindex', 0), e.el.setAttribute('aria-selected', !0), t.el.setAttribute('tabindex', -1), t.el.setAttribute('aria-selected', !1), e.focus(), t.el.parentElement.parentElement.querySelector('' + ut.P_Desc_Container).classList.add('ot-hide'), e.el.parentElement.parentElement.querySelector('' + ut.P_Desc_Container).classList.remove('ot-hide'), e.el.classList.add(ut.P_Active_Menu);
                }, Ln.prototype.hideVendorsList = function () {
                    it('#onetrust-pc-sdk').length && (Xe.PCTemplateUpgrade ? it('#onetrust-pc-sdk ' + ut.P_Content).removeClass('ot-hide') : it('#onetrust-pc-sdk .ot-main-content').show(), it('#onetrust-pc-sdk #close-pc-btn-handler.main').show(), it('#onetrust-pc-sdk ' + ut.P_Vendor_List).addClass('ot-hide'));
                }, Ln.prototype.closeFilter = function (e) {
                    void 0 === e && (e = !0);
                    var t = it('#onetrust-pc-sdk ' + ut.P_Fltr_Modal).el[0], o = it('#onetrust-pc-sdk ' + ut.P_Triangle).el[0];
                    Ze.pcName === Be ? 896 < window.innerWidth || 896 < window.screen.height ? t.style.width = '0' : t.setAttribute('style', 'height:0') : t.setAttribute('style', 'display:none'), o && it(o).attr('style', 'display:none'), Ge.isV2Template && it('#onetrust-pc-sdk').removeClass('ot-shw-fltr'), e && Ko.setFirstAndLast(Ko.getPCElements());
                }, Ln.prototype.setBackButtonFocus = function () {
                    it('#onetrust-pc-sdk .back-btn-handler').el[0].focus();
                }, Ln.prototype.setCenterLayoutFooterHeight = function () {
                    var e = Sn.pc;
                    if (Sn.setMainContentHeight(), Ze.pcName === Ne && e) {
                        var t = e.querySelectorAll('' + ut.P_Desc_Container), o = e.querySelectorAll('li .category-menu-switch-handler');
                        if (!e.querySelector('.category-menu-switch-handler + ' + ut.P_Desc_Container) && window.innerWidth < 640)
                            for (var n = 0; n < t.length; n++)
                                o[n].insertAdjacentElement('afterend', t[n]);
                        else
                            e.querySelector('.category-menu-switch-handler + ' + ut.P_Desc_Container) && 640 < window.innerWidth && it(e.querySelector('.ot-tab-desc')).append(t);
                    }
                }, Ln.prototype.setMainContentHeight = function () {
                    var e = this.pc, t = e.querySelector('.ot-pc-footer'), o = e.querySelector('.ot-pc-header'), n = e.querySelectorAll('.ot-pc-footer button'), r = n[n.length - 1];
                    if (e.classList.remove('ot-ftr-stacked'), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add('ot-ftr-stacked'), !Xe.PCTemplateUpgrade && !Xe.Center) {
                        var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
                        if (Xe.PCTemplateUpgrade && !Xe.Tab && Xe.PCenterVendorListDescText) {
                            var i = it('#vdr-lst-dsc').el;
                            s = s - (i.length && i[0].clientHeight) - 10;
                        }
                        e.querySelector('' + ut.P_Vendor_List).style.height = s + 'px';
                    }
                    var l = e.querySelector('' + ut.P_Content);
                    if (Xe.PCTemplateUpgrade && Xe.Center) {
                        var a = 600 < window.innerWidth && 475 < window.innerHeight;
                        if (!this.pcBodyHeight && a && (this.pcBodyHeight = l.scrollHeight), a) {
                            var c = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                            c > 0.8 * window.innerHeight || 0 === this.pcBodyHeight ? e.style.height = 0.8 * window.innerHeight + 'px' : e.style.height = c + 'px';
                        } else
                            e.style.height = '100%';
                    } else
                        e.querySelector('' + ut.P_Content).style.height = e.clientHeight - t.clientHeight - o.clientHeight - 3 + 'px';
                }, Ln.prototype.allowAllVisible = function (e) {
                    e !== this.allowVisible && Xe.Tab && Xe.PCTemplateUpgrade && (this.setMainContentHeight(), this.allowVisible = e);
                }, Ln.prototype.restorePc = function () {
                    Oe.pcLayer === S.CookieList ? (Sn.hideCategoryContainer(!0), qo.loadHostList('', Oe.filterByCategories), it('#onetrust-pc-sdk #filter-count').text(Oe.filterByCategories.length.toString())) : Oe.pcLayer === S.VendorList && (Sn.hideCategoryContainer(!1), Sn.setVendorContent()), Oe.isPCVisible = !1, Sn.toggleInfoDisplay(), Oe.pcLayer !== S.VendorList && Oe.pcLayer !== S.CookieList || (Ho.updateFilterSelection(Oe.pcLayer === S.CookieList), Sn.setBackButtonFocus(), Ko.setPCFocus(Ko.getPCElements()));
                }, Ln.prototype.toggleInfoDisplay = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return Ao.csBtnGroup && (it(Sn.fltgBtnSltr).addClass('ot-pc-open'), it(Sn.fltgBtnFSltr).attr('aria-hidden', 'true'), it(Sn.fltgBtnBSltr).attr('aria-hidden', '')), [
                                    4,
                                    Sn.fetchAndSetupPC()
                                ];
                            case 1:
                                return e.sent(), Ze.pcName === xe && this.setPcListContainerHeight(), void 0 !== Oe.pcLayer && Oe.pcLayer !== S.Banner || (Oe.pcLayer = S.PrefCenterHome), t = it('#onetrust-pc-sdk').el[0], it('.onetrust-pc-dark-filter').el[0].setAttribute('style', ''), t.setAttribute('style', ''), Oe.isPCVisible || (on.showConsentNotice(), Oe.isPCVisible = !0, Xe.PCTemplateUpgrade && (this.pc = t, o = t.querySelector('#accept-recommended-btn-handler'), this.allowVisible = o && 0 < o.clientHeight, this.setCenterLayoutFooterHeight(), Sn.getResizeElement().addEventListener('resize', Sn.setCenterLayoutFooterHeight), window.addEventListener('resize', Sn.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent('OneTrustPCLoaded', { OneTrustPCLoaded: 'yes' })), [2];
                            }
                        });
                    });
                }, Ln.prototype.close = function (e) {
                    cn.bannerCloseButtonHandler(e), Sn.getResizeElement().removeEventListener('resize', Sn.setCenterLayoutFooterHeight), window.removeEventListener('resize', Sn.setCenterLayoutFooterHeight);
                }, Ln.prototype.closePreferenceCenter = function (e) {
                    e && e.preventDefault(), window.location.href = 'http://otsdk//consentChanged';
                }, Ln.prototype.initializeAlartHtmlAndHandler = function () {
                    Oe.skipAddingHTML = 0 < it('#onetrust-banner-sdk').length, Oe.skipAddingHTML || Pn.insertAlertHtml(), this.initialiseAlertHandlers();
                }, Ln.prototype.initialiseAlertHandlers = function () {
                    Pn.showBanner(), Xe.ForceConsent && !lt.isCookiePolicyPage(Xe.AlertNoticeText) && it('.onetrust-pc-dark-filter').removeClass('ot-hide').css('z-index:2147483645'), Xe.OnClickCloseBanner && document.body.addEventListener('click', cn.bodyClickEvent), Xe.ScrollCloseBanner && (window.addEventListener('scroll', cn.scrollCloseBanner), it(document).on('click', '.onetrust-close-btn-handler', cn.rmScrollAndClickBodyEvents), it(document).on('click', '#onetrust-accept-btn-handler', cn.rmScrollAndClickBodyEvents), it(document).on('click', '#accept-recommended-btn-handler', cn.rmScrollAndClickBodyEvents)), (Xe.IsIabEnabled || Xe.UseGoogleVendors || Oe.showGeneralVendors) && it(document).on('click', '.onetrust-vendors-list-handler', Sn.showAllVendors), Xe.FloatingRoundedIcon && it('#onetrust-banner-sdk #onetrust-cookie-btn').on('click', function (e) {
                        Oe.pcSource = e.currentTarget, Sn.showCookieSettingsHandler(e);
                    }), it('#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler').on('click', Sn.bannerCloseButtonHandler), it('#onetrust-banner-sdk #onetrust-pc-btn-handler').on('click', Sn.showCookieSettingsHandler), it('#onetrust-banner-sdk #onetrust-accept-btn-handler').on('click', cn.allowAllEventHandler.bind(this, !1)), it('#onetrust-banner-sdk #onetrust-reject-all-handler').on('click', cn.rejectAllEventHandler.bind(this, !1)), it('#onetrust-banner-sdk .banner-option-input').on('click', Ze.bannerName === Se ? Sn.toggleBannerOptions : Sn.toggleAccordionStatus), it('#onetrust-banner-sdk .ot-gv-list-handler').on('click', function (e) {
                        Oe.cookieListType = W.GenVen, Sn.loadCookieList(e.target), Sn.showCookieSettingsHandler(e);
                    }), it('#onetrust-banner-sdk .category-switch-handler').on('click', Sn.toggleBannerCategory), it('#onetrust-banner-sdk').on('keydown', function (e) {
                        9 !== e.keyCode && 'tab' !== e.code || Ko.handleBannerFocus(e, e.shiftKey);
                    });
                }, Ln.prototype.getResizeElement = function () {
                    var e = document.querySelector('#onetrust-pc-sdk .ot-text-resize');
                    return e.contentWindow || e || document;
                }, Ln.prototype.insertCookieSettingText = function () {
                    for (var e = Xe.CookieSettingButtonText, t = it('.ot-sdk-show-settings').el, o = 0; o < t.length; o++)
                        it(t[o]).text(e);
                    Sn.initCookieSettingHandlers();
                }, Ln.prototype.genVendorToggled = function (e) {
                    var t = e.target.getAttribute('gn-vid');
                    _t.updateGenVendorStatus(t, e.target.checked);
                    var o = Xe.GeneralVendors.find(function (e) {
                        return e.VendorCustomId === t;
                    }).Name;
                    Rt.triggerGoogleAnalyticsEvent(Kt, e.target.checked ? lo : ao, o + ': VEN_' + t), qo.genVenSelectAllTglEvent();
                }, Ln.prototype.genVendorDetails = function (e) {
                    Sn.toggleAccordionStatus(e);
                }, Ln.prototype.confirmPC = function (e) {
                    var t = ft.isAlertBoxClosedAndValid();
                    Xe.NoBanner && Xe.ShowPreferenceCenterCloseButton && !t && cn.bannerCloseButtonHandler();
                    var o = lt.isBannerVisible();
                    !Ge.moduleInitializer.MobileSDK || !t && o || Sn.closePreferenceCenter(e);
                }, Ln);
            function Ln() {
                var e = this;
                this.fltgBtnSltr = '#ot-sdk-btn-floating', this.fltgBtnFSltr = '.ot-floating-button__front svg', this.fltgBtnBSltr = '.ot-floating-button__back svg', this.pc = null, this.allowVisible = !1, this.pcLinkSource = null, this.isCookieList = !1, this.showCookieSettingsHandler = function (s) {
                    return a(e, void 0, void 0, function () {
                        var t, o, n, r;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return s && s.stopPropagation(), s && s.target && (t = s.target.className, o = 'onetrust-pc-btn-handler' === s.target.id, n = 'ot-sdk-show-settings' === t, (o || n) && (r = o ? Xt : $t, Rt.triggerGoogleAnalyticsEvent(Kt, r)), Oe.pcSource = s.target), [
                                    4,
                                    Sn.toggleInfoDisplay()
                                ];
                            case 1:
                                return e.sent(), [
                                    2,
                                    !1
                                ];
                            }
                        });
                    });
                }, this.cookieSettingsBoundListner = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function () {
                    return e.hideVendorsList(), Ze.pcName === xe && (it('#onetrust-pc-sdk ' + ut.P_Content).removeClass('ot-hide'), it('#onetrust-pc-sdk').el[0].removeAttribute('style'), e.setPcListContainerHeight()), it('#onetrust-pc-sdk #filter-count').text('0'), it('#onetrust-pc-sdk #vendor-search-handler').length && (it('#onetrust-pc-sdk #vendor-search-handler').el[0].value = ''), Oe.currentGlobalFilteredList = [], Oe.filterByCategories = [], Oe.filterByIABCategories = [], Oe.vendors.searchParam = '', Sn.closeFilter(), Oe.pcLayer = S.PrefCenterHome, e.pcLinkSource ? (e.pcLinkSource.focus(), e.pcLinkSource = null) : Ko.setPCFocus(Ko.getPCElements()), !1;
                }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleV2Category = function (e, t, o, n) {
                    var r, s = this;
                    if (!t) {
                        var i = tt.findIndex(Oe.dataGroupState, function (e) {
                            return 'function' == typeof s.getAttribute && e.CustomGroupId === s.getAttribute('data-optanongroupid');
                        });
                        t = Oe.dataGroupState[i];
                    }
                    void 0 === o && (o = it(this).is(':checked')), Xe.ChoicesBanner && tt.setCheckedAttribute('#ot-bnr-grp-id-' + t.CustomGroupId, null, o), n ? document.querySelector('#ot-group-id-' + n) && (tt.setCheckedAttribute('#ot-group-id-' + n, null, o), r = document.querySelector('#ot-group-id-' + n)) : (r = this, tt.setCheckedAttribute(null, this, o)), Xe.PCShowConsentLabels && (r.parentElement.parentElement.querySelector('.ot-label-status').innerHTML = o ? Xe.PCActiveText : Xe.PCInactiveText);
                    var l = this instanceof HTMLElement && -1 !== this.getAttribute('id').indexOf('-leg-out');
                    Sn.updateGroupToggles(t, o, l);
                }, this.toggleBannerCategory = function () {
                    var t = this, e = tt.findIndex(Oe.dataGroupState, function (e) {
                            return 'function' == typeof t.getAttribute && e.CustomGroupId === t.getAttribute('data-optanongroupid');
                        }), o = Oe.dataGroupState[e], n = it(t).is(':checked');
                    Sn.toggleV2Category(null, o, n, o.CustomGroupId);
                }, this.toggleSubCategory = function (e, t, o, n) {
                    t = t || this.getAttribute('data-optanongroupid');
                    var r, s = yt.getGroupById(t);
                    void 0 === o && (o = it(this).is(':checked')), n ? (tt.setCheckedAttribute('#ot-sub-group-id-' + n, null, o), r = document.querySelector('#ot-sub-group-id-' + n)) : (r = this, tt.setCheckedAttribute(null, this, o)), Xe.PCShowConsentLabels && (r.parentElement.parentElement.querySelector('.ot-label-status').innerHTML = o ? Xe.PCActiveText : Xe.PCInactiveText);
                    var i = this instanceof HTMLElement && -1 !== this.getAttribute('id').indexOf('-leg-out');
                    Sn.updateSubGroupToggles(s, o, i);
                };
            }
            var _n, wn = (xn.prototype.initBanner = function () {
                    this.canImpliedConsentLandingPage(), Ge.moduleInitializer.CookieSPAEnabled ? it(window).on('otloadbanner', this.windowLoadBanner.bind(this)) : it(window).one('otloadbanner', this.windowLoadBanner.bind(this));
                }, xn.prototype.insertCSBtnHtmlAndCss = function (e) {
                    document.getElementById('onetrust-style').innerHTML += Ao.csBtnGroup.css;
                    var t = document.createElement('div');
                    it(t).html(Ao.csBtnGroup.html);
                    var o = t.querySelector('#ot-sdk-btn-floating');
                    e && o && it(o).removeClass('ot-hide'), it('#onetrust-consent-sdk').append(o);
                }, xn.prototype.canImpliedConsentLandingPage = function () {
                    this.isImpliedConsent() && !Vt.isLandingPage() && 'true' === et.readCookieParam(le.OPTANON_CONSENT, ie.AWAITING_RE_CONSENT) && this.checkForRefreshCloseImplied();
                }, xn.prototype.isImpliedConsent = function () {
                    return Xe.ConsentModel && 'implied consent' === Xe.ConsentModel.Name.toLowerCase();
                }, xn.prototype.checkForRefreshCloseImplied = function () {
                    cn.closeOptanonAlertBox(), cn.close(!0);
                }, xn.prototype.hideCustomHtml = function () {
                    var e = document.getElementById('onetrust-banner-sdk');
                    e && e.setAttribute('style', 'display:none');
                }, xn.prototype.windowLoadBanner = function () {
                    return a(this, void 0, void 0, function () {
                        var t, o, n, r, s, i, l;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return this.core.substitutePlainTextScriptTags(), t = Ge.moduleInitializer, it('#onetrust-consent-sdk').length ? n = document.getElementById('onetrust-consent-sdk') : (n = document.createElement('div'), it(n).attr('id', 'onetrust-consent-sdk'), it(document.body).append(n)), it('.onetrust-pc-dark-filter').length || (o = document.createElement('div'), it(o).attr('class', 'onetrust-pc-dark-filter'), it(o).attr('class', 'ot-hide'), it(o).attr('class', 'ot-fade-in'), n.firstChild ? n.insertBefore(o, n.firstChild) : it(n).append(o)), Xe.IsIabEnabled && this.iab.updateIabVariableReference(), t.IsSuppressPC || (mn.insertPcHtml(), Sn.initialiseConsentNoticeHandlers(), Xe.IsIabEnabled && this.iab.InitializeVendorList()), r = ft.isAlertBoxClosedAndValid(), s = Xe.ShowAlertNotice && !r && !Xe.NoBanner, i = Xe.ShowAlertNotice && !r && Xe.NoBanner, Oe.ntfyRequired ? (this.hideCustomHtml(), sn.init(), sn.changeState()) : s ? Sn.initializeAlartHtmlAndHandler() : this.hideCustomHtml(), i ? [
                                    4,
                                    Sn.toggleInfoDisplay()
                                ] : [
                                    3,
                                    2
                                ];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return this.insertCSBtn(!s), Sn.insertCookieSettingText(), (l = it(this.FLOATING_COOKIE_BTN)).length && l.attr('title', Xe.CookieSettingButtonText), No.insertCookiePolicyHtml(), cn.executeOptanonWrapper(), et.readCookieParam(le.OPTANON_CONSENT, 'groups') || St.writeGrpParam(le.OPTANON_CONSENT), et.readCookieParam(le.OPTANON_CONSENT, 'hosts') || St.writeHstParam(le.OPTANON_CONSENT), s && Ko.setBannerFocus(), [2];
                            }
                        });
                    });
                }, xn.prototype.insertCSBtn = function (e) {
                    Ao.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), Sn.initFlgtCkStgBtnEventHandlers());
                }, xn);
            function xn() {
                this.iab = qo, this.core = Ho, this.FLOATING_COOKIE_BTN = '#ot-sdk-btn-floating';
            }
            var En, Bn = (Nn.prototype.initialiseLandingPath = function () {
                    if (Vt.isLandingPage())
                        Vt.setLandingPathParam(location.href);
                    else {
                        if (ft.needReconsent() && !ft.awaitingReconsent())
                            return Vt.setLandingPathParam(location.href), void et.writeCookieParam(le.OPTANON_CONSENT, ie.AWAITING_RE_CONSENT, !0);
                        Vt.setLandingPathParam(ie.NOT_LANDING_PAGE), et.writeCookieParam(le.OPTANON_CONSENT, ie.AWAITING_RE_CONSENT, !1), Ze.isSoftOptInMode && !Ge.moduleInitializer.MobileSDK && Rt.setAlertBoxClosed(!0), Xe.NextPageCloseBanner && Xe.ShowAlertNotice && cn.nextPageCloseBanner();
                    }
                }, Nn);
            function Nn() {
            }
            var Vn, On = (Gn.prototype.IsAlertBoxClosedAndValid = function () {
                    return ft.isAlertBoxClosedAndValid();
                }, Gn.prototype.LoadBanner = function () {
                    Rt.loadBanner();
                }, Gn.prototype.Init = function (e) {
                    void 0 === e && (e = !1), se.insertViewPortTag(), Ao.ensureHtmlGroupDataInitialised(), Uo.updateGtmMacros(!1), En.initialiseLandingPath(), e || yn.initialiseCssReferences();
                }, Gn.prototype.FetchAndDownloadPC = function () {
                    Sn.fetchAndSetupPC();
                }, Gn.prototype.ToggleInfoDisplay = function () {
                    Rt.triggerGoogleAnalyticsEvent(Kt, eo), Sn.toggleInfoDisplay();
                }, Gn.prototype.Close = function (e) {
                    Sn.close(e);
                }, Gn.prototype.AllowAll = function (e) {
                    cn.allowAllEvent(e);
                }, Gn.prototype.RejectAll = function (e) {
                    cn.rejectAllEvent(e);
                }, Gn.prototype.setDataSubjectIdV2 = function (e, t) {
                    void 0 === t && (t = !1), e && e.trim() && (et.writeCookieParam(le.OPTANON_CONSENT, ie.CONSENT_ID, e), Oe.dsParams.isAnonymous = t);
                }, Gn.prototype.getDataSubjectId = function () {
                    return et.readCookieParam(le.OPTANON_CONSENT, ie.CONSENT_ID);
                }, Gn.prototype.synchroniseCookieWithPayload = function (s) {
                    var e = et.readCookieParam(le.OPTANON_CONSENT, 'groups'), t = tt.strToArr(e), i = [];
                    t.forEach(function (e) {
                        var t = e.split(':'), o = yt.getGroupById(t[0]), n = tt.findIndex(s, function (e) {
                                return e.Id === o.PurposeId;
                            }), r = s[n];
                        r ? r.TransactionType === ae ? (i.push(t[0] + ':1'), o.Parent ? Sn.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : Sn.toggleV2Category(null, o, !0, o.CustomGroupId)) : (i.push(t[0] + ':0'), o.Parent ? Sn.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : Sn.toggleV2Category(null, o, !1, o.CustomGroupId)) : i.push(t[0] + ':' + t[1]);
                    }), St.writeGrpParam(le.OPTANON_CONSENT, i);
                }, Gn.prototype.getGeolocationData = function () {
                    return Oe.userLocation;
                }, Gn.prototype.TriggerGoogleAnalyticsEvent = function (e, t, o, n) {
                    Rt.triggerGoogleAnalyticsEvent(e, t, o, n);
                }, Gn.prototype.ReconsentGroups = function () {
                    var r = !1, e = et.readCookieParam(le.OPTANON_CONSENT, 'groups'), s = tt.strToArr(e), i = tt.strToArr(e.replace(/:0|:1/g, '')), l = !1, t = et.readCookieParam(le.OPTANON_CONSENT, 'hosts'), a = tt.strToArr(t), c = tt.strToArr(t.replace(/:0|:1/g, '')), d = [
                            'inactive',
                            'inactive landingpage',
                            'do not track'
                        ];
                    e && (Xe.Groups.forEach(function (e) {
                        h(e.SubGroups, [e]).forEach(function (e) {
                            var t = e.CustomGroupId, o = tt.indexOf(i, t);
                            if (-1 !== o) {
                                var n = yt.getGrpStatus(e).toLowerCase();
                                -1 < d.indexOf(n) && (r = !0, s[o] = t + ('inactive landingpage' === n ? ':1' : ':0'));
                            }
                        });
                    }), r && St.writeGrpParam(le.OPTANON_CONSENT, s)), t && (Xe.Groups.forEach(function (e) {
                        h(e.SubGroups, [e]).forEach(function (n) {
                            n.Hosts.forEach(function (e) {
                                var t = tt.indexOf(c, e.HostId);
                                if (-1 !== t) {
                                    var o = yt.getGrpStatus(n).toLowerCase();
                                    -1 < d.indexOf(o) && (l = !0, a[t] = e.HostId + ('inactive landingpage' === o ? ':1' : ':0'));
                                }
                            });
                        });
                    }), l && St.writeHstParam(le.OPTANON_CONSENT, a));
                }, Gn.prototype.SetAlertBoxClosed = function (e) {
                    Rt.setAlertBoxClosed(e);
                }, Gn.prototype.GetDomainData = function () {
                    return Ze.pubDomainData;
                }, Gn.prototype.setGeoLocation = function (e, t) {
                    void 0 === t && (t = ''), Oe.userLocation = {
                        country: e,
                        state: t
                    };
                }, Gn.prototype.changeLang = function (t) {
                    if (t !== Oe.lang) {
                        var o = Ge.moduleInitializer;
                        Co.getLangJson(t).then(function (e) {
                            e ? (Ze.init(e), Ao.fetchAssets().then(function () {
                                var e = document.getElementById('onetrust-style');
                                e && (e.textContent = ''), yn.initialiseCssReferences(), o.IsSuppressPC && !Oe.isPCVisible || (tt.removeChild(it('#onetrust-pc-sdk').el), Oe.vendorDomInit = !1, Oe.genVendorDomInit = !1, mn.insertPcHtml(), Sn.initialiseConsentNoticeHandlers(), Xe.IsIabEnabled && qo.InitializeVendorList(), Oe.isPCVisible && Sn.restorePc());
                                var t = !0;
                                ft.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || Oe.skipAddingHTML) || Xe.NoBanner || (tt.removeChild(it('#onetrust-banner-sdk').el), Sn.initializeAlartHtmlAndHandler(), t = !1), Vn.initCookiePolicyAndSettings(), tt.removeChild(it('#ot-sdk-btn-floating').el), _n.insertCSBtn(t), Vn.processedHtml = null;
                            })) : console.error('Language:' + t + ' doesn\'t exist for the geo rule');
                        });
                    }
                }, Gn.prototype.initCookiePolicyAndSettings = function () {
                    No.insertCookiePolicyHtml(), Sn.insertCookieSettingText();
                }, Gn.prototype.showVendorsList = function () {
                    Oe.pcLayer !== S.VendorList && (Sn.showAllVendors(), Rt.triggerGoogleAnalyticsEvent(Kt, oo));
                }, Gn);
            function Gn() {
                this.processedHtml = '', this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function () {
                    return _n.initBanner();
                }, this.getHTML = function () {
                    return document.getElementById('onetrust-banner-sdk') || (mn.insertPcHtml(), Pn.insertAlertHtml()), Vn.processedHtml || (Vn.processedHtml = document.querySelector('#onetrust-consent-sdk').outerHTML), Vn.processedHtml;
                }, this.getCSS = function () {
                    return yn.processedCSS;
                }, this.setConsentProfile = function (e) {
                    if (e.customPayload) {
                        var t = e.customPayload;
                        t.Interaction && et.writeCookieParam(le.OPTANON_CONSENT, ie.INTERACTION_COUNT, t.Interaction);
                    }
                    Vn.setDataSubjectIdV2(e.identifier, e.isAnonymous), Vn.synchroniseCookieWithPayload(e.purposes), cn.executeOptanonWrapper();
                }, this.InsertScript = function (e, t, o, n, r, s) {
                    var i, l = null != n && void 0 !== n, a = l && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
                    if (xo.canInsertForGroup(r, a) && !tt.contains(Oe.srcExecGrps, r)) {
                        Oe.srcExecGrpsTemp.push(r), l && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && tt.empty(t);
                        var c = document.createElement('script');
                        switch (null != o && void 0 !== o && (i = !1, c.onload = c.onreadystatechange = function () {
                                i || this.readyState && 'loaded' !== this.readyState && 'complete' !== this.readyState || (i = !0, o());
                            }), c.type = 'text/javascript', c.src = e, s && (c.async = s), t) {
                        case 'head':
                            document.getElementsByTagName('head')[0].appendChild(c);
                            break;
                        case 'body':
                            document.getElementsByTagName('body')[0].appendChild(c);
                            break;
                        default:
                            var d = document.getElementById(t);
                            d && (d.appendChild(c), l && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && tt.show(t));
                        }
                        if (l && void 0 !== n.makeElementsVisible)
                            for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                                var k = p[u];
                                tt.show(k);
                            }
                        if (l && void 0 !== n.deleteElements)
                            for (var h = 0, y = n.deleteElements; h < y.length; h++) {
                                k = y[h];
                                tt.remove(k);
                            }
                    }
                }, this.InsertHtml = function (e, t, o, n, r) {
                    var s = null != n && void 0 !== n, i = s && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
                    if (xo.canInsertForGroup(r, i) && !tt.contains(Oe.htmlExecGrps, r)) {
                        if (Oe.htmlExecGrpsTemp.push(r), s && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && tt.empty(t), tt.appendTo(t, e), s && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && tt.show(t), s && void 0 !== n.makeElementsVisible)
                            for (var l = 0, a = n.makeElementsVisible; l < a.length; l++) {
                                var c = a[l];
                                tt.show(c);
                            }
                        if (s && void 0 !== n.deleteElements)
                            for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                                c = u[d];
                                tt.remove(c);
                            }
                        null != o && void 0 !== o && o();
                    }
                }, this.BlockGoogleAnalytics = function (e, t) {
                    window['ga-disable-' + e] = !xo.canInsertForGroup(t);
                };
            }
            var Dn, Hn, Mn, Fn, qn = (o(Hn = jn, Mn = Dn = On), Hn.prototype = null === Mn ? Object.create(Mn) : (Rn.prototype = Mn.prototype, new Rn()), jn.prototype.Close = function (e) {
                    cn.closeBanner(!1), window.location.href = 'http://otsdk//consentChanged';
                }, jn.prototype.RejectAll = function (e) {
                    cn.rejectAllEvent(), window.location.href = 'http://otsdk//consentChanged';
                }, jn.prototype.AllowAll = function (e) {
                    cn.AllowAllV2(e), window.location.href = 'http://otsdk//consentChanged';
                }, jn.prototype.ToggleInfoDisplay = function () {
                    Sn.toggleInfoDisplay();
                }, jn);
            function Rn() {
                this.constructor = Hn;
            }
            function jn() {
                var e = null !== Dn && Dn.apply(this, arguments) || this;
                return e.mobileOnlineURL = Ze.mobileOnlineURL, e;
            }
            var Un, zn = (Wn.prototype.toggleVendorConsent = function (e, t) {
                    void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = Oe.oneTrustIABConsent.vendors), e.forEach(function (e) {
                        var t = e.split(':'), o = t[0], n = t[1], r = it(ut.P_Vendor_Container + ' .' + ut.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
                        r && tt.setCheckedAttribute('', r, 'true' === n);
                    });
                    var o = it('#onetrust-pc-sdk #select-all-vendor-groups-handler').el[0];
                    if (o) {
                        var n = tt.getActiveIdArray(tt.distinctArray(e));
                        null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(pt.P_Line_Through) : o.parentElement.classList.add(pt.P_Line_Through), tt.setCheckedAttribute('', o, t);
                    }
                }, Wn.prototype.toggleVendorLi = function (e, t) {
                    void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = Oe.oneTrustIABConsent.legIntVendors), e.forEach(function (e) {
                        var t = e.split(':'), o = t[0], n = t[1], r = it(ut.P_Vendor_Container + ' .' + ut.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
                        r && tt.setCheckedAttribute('', r, 'true' === n);
                    });
                    var o = it('#onetrust-pc-sdk #select-all-vendor-leg-handler').el[0];
                    if (o) {
                        var n = tt.getActiveIdArray(tt.distinctArray(e));
                        null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(pt.P_Line_Through) : o.parentElement.classList.add(pt.P_Line_Through), tt.setCheckedAttribute('', o, t);
                    }
                }, Wn.prototype.updateVendorLegBtns = function (e) {
                    void 0 === e && (e = []), e.length || (e = Oe.oneTrustIABConsent.legIntVendors), e.forEach(function (e) {
                        var t = e.split(':'), o = t[0], n = t[1], r = it(ut.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
                        r && xo.updateLegIntBtnElement(r, 'true' === n);
                    });
                }, Wn);
            function Wn() {
            }
            var Kn, Yn = (Jn.prototype.syncConsentProfile = function (e, t, o) {
                    void 0 === o && (o = !1), e ? (Oe.dsParams.id = e.trim(), Vn.setDataSubjectIdV2(e)) : e = Oe.dsParams.id, o && (Oe.dsParams.isAnonymous = o), t = t || Oe.dsParams.token, e && t && Co.getConsentProfile(e, t).then(function (e) {
                        return Kn.consentProfileCallback(e);
                    });
                }, Jn.prototype.getConsentValue = function (e) {
                    var t = null;
                    switch (e) {
                    case i[i.ACTIVE]:
                    case i[i.ALWAYS_ACTIVE]:
                        t = q.Active;
                        break;
                    case i[i.EXPIRED]:
                    case i[i.OPT_OUT]:
                    case i[i.PENDING]:
                    case i[i.WITHDRAWN]:
                    case i[i.NO_CONSENT]:
                        t = q.InActive;
                    }
                    return t;
                }, Jn.prototype.isCookieGroup = function (e) {
                    return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e);
                }, Jn.prototype.syncPreferences = function (e, t) {
                    void 0 === t && (t = !1);
                    var o = et.getCookie(le.ALERT_BOX_CLOSED), n = o, r = !1, s = !0, i = !1, l = tt.strToArr(et.readCookieParam(le.OPTANON_CONSENT, 'groups'));
                    if (e && e.preferences.length)
                        for (var a = 0, c = e.preferences; a < c.length; a++) {
                            var d = c[a], u = this.getConsentValue(d.status), p = new Date(d.consentDate) > new Date(n), k = Ze.domainGrps[d.id];
                            if (-1 < Oe.grpsSynced.indexOf(k) && (Oe.syncedValidGrp = !0), k && u && (!o || p) && (i = !0, o = d.consentDate, !t && this.isCookieGroup(k))) {
                                for (var h = k + ':' + u, y = -1, f = 0; f < l.length; f++) {
                                    var g = l[f].split(':');
                                    if (g[0] === k) {
                                        g[1] !== u && (l[f] = h, r = !0), y = f;
                                        break;
                                    }
                                }
                                -1 === y && (l.push(h), r = !0);
                            }
                        }
                    else
                        s = !1;
                    return {
                        alertBoxCookieVal: o,
                        groupsConsent: l,
                        profileFound: s,
                        syncRequired: r,
                        syncOnlyDate: i = i && !r
                    };
                }, Jn.prototype.hideBannerAndPc = function () {
                    var e = lt.isBannerVisible();
                    e && lt.hideBanner(), (e || Oe.isPCVisible) && on.hideConsentNoticeV2();
                }, Jn.prototype.setOptanonConsentCookie = function (e, t) {
                    if (e.syncRequired) {
                        et.writeCookieParam(le.OPTANON_CONSENT, 'groups', e.groupsConsent.toString());
                        var o = et.getCookie(le.OPTANON_CONSENT);
                        et.setCookie(le.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal));
                    }
                }, Jn.prototype.setIabCookie = function (e, t, o) {
                    o.syncGroups && o.syncGroups[Oe.syncGrpId] && o.syncGroups[Oe.syncGrpId].tcStringV2 ? et.getCookie(le.EU_PUB_CONSENT) !== o.syncGroups[Oe.syncGrpId].tcStringV2 && (e.syncRequired = !0, et.setCookie(le.EU_PUB_CONSENT, o.syncGroups[Oe.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1;
                }, Jn.prototype.setAddtlVendorsCookie = function (e, t) {
                    Xe.UseGoogleVendors && (et.getCookie(le.ADDITIONAL_CONSENT_STRING) || et.setCookie(le.ADDITIONAL_CONSENT_STRING, Oe.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)));
                }, Jn.prototype.createTrans = function () {
                    var e = et.readCookieParam(le.OPTANON_CONSENT, 'iType');
                    mt.createConsentTxn(!1, M[e], !1, !0);
                }, Jn.prototype.updateGrpsDom = function () {
                    for (var e = function (e) {
                                var t = e.getAttribute('data-optanongroupid'), o = yt.getGroupById(t), n = !0, r = tt.findIndex(Oe.groupsConsent, function (e) {
                                        return e.split(':')[0] === t;
                                    });
                                -1 < r && Oe.groupsConsent[r].split(':')[1] === q.InActive && (n = !1), xo.toggleGrpElements(e, o, n), xo.toogleSubGroupElement(e, n, !1, !0), xo.toogleSubGroupElement(e, n, !0, !0);
                            }, t = 0, o = xo.getAllGroupElements(); t < o.length; t++)
                        e(o[t]);
                }, Jn.prototype.updateVendorsDom = function () {
                    Xe.IsIabEnabled && (qo.updateIabVariableReference(), Un.toggleVendorConsent(), Ze.legIntSettings.PAllowLI && (Ze.legIntSettings.PShowLegIntBtn ? Un.updateVendorLegBtns() : Un.toggleVendorLi()));
                }, Jn.prototype.consentProfileCallback = function (r) {
                    return a(this, void 0, void 0, function () {
                        var t, o, n;
                        return d(this, function (e) {
                            switch (e.label) {
                            case 0:
                                return t = this.syncPreferences(r), o = Xe.ReconsentFrequencyDays, n = ft.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), Xe.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (ft.syncAlertBoxCookie(t.alertBoxCookieVal), ft.syncCookieExpiry()), t.syncRequired && t.profileFound ? (Oe.syncRequired = t.syncRequired, ft.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), Ao.initGrpsAndHosts(), !n && Xe.NtfyConfig.ShowNtfy && ft.isAlertBoxClosedAndValid() ? [
                                    4,
                                    sn.getContent()
                                ] : [
                                    3,
                                    2
                                ]) : [
                                    3,
                                    3
                                ];
                            case 1:
                                e.sent(), sn.init(), sn.changeState(), e.label = 2;
                            case 2:
                                return Xe.IsIabEnabled && (ft.setIABCookieData(), Pt.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), Vt.setLandingPathParam(ie.NOT_LANDING_PAGE), Ho.substitutePlainTextScriptTags(), Uo.updateGtmMacros(!0), cn.executeOptanonWrapper(), [
                                    3,
                                    4
                                ];
                            case 3:
                                !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                            case 4:
                                return [2];
                            }
                        });
                    });
                }, Jn);
            function Jn() {
            }
            se.initPolyfill(), et = new ot(), lt = new ct(), Ze = new Je(), zt = new bo(), function () {
                var e = window.otStubData;
                if (e) {
                    Ge.moduleInitializer = e.domainData, Ge.fp = Ge.moduleInitializer.TenantFeatures, Ze.setBannerScriptElement(e.stubElement), Ze.setRegionRule(e.regionRule), Oe.userLocation = e.userLocation, Oe.crossOrigin = e.crossOrigin, Oe.isAMP = e.isAmp, Oe.isAMP && (Oe.dataDomainId = e.stubElement.getAttribute('data-domain-script')), Ze.bannerDataParentURL = e.bannerBaseDataURL, Ze.mobileOnlineURL = h(Ze.mobileOnlineURL, e.mobileOnlineURL);
                    var t = Ze.getRegionRule();
                    Ze.multiVariantTestingEnabled = Ge.moduleInitializer.MultiVariantTestingEnabled && 0 < t.Variants.length && lt.isDateCurrent(t.TestEndTime), Oe.isV2Stub = e.isV2Stub || !1, Oe.grpsSynced = e.grpsSynced || [], Oe.isIabSynced = e.isIabSynced, Oe.syncRequired = e.isIabSynced || e.grpsSynced && e.grpsSynced.length, Oe.consentPreferences = e.preferences, Oe.syncGrpId = e.syncGrpId, Oe.consentApi = e.consentApi, Oe.tenantId = e.tenantId, zt.populateLangSwitcherPlhdr(), window.otStubData = { userLocation: Oe.userLocation }, window.OneTrustStub = null;
                }
            }(), function () {
                a(this, void 0, void 0, function () {
                    var t, o, n, r, s;
                    return d(this, function (e) {
                        switch (e.label) {
                        case 0:
                            return yt = new gt(), xo = new Eo(), Lo = new _o(), qo = new Ro(), Ho = new Mo(), cn = new dn(), Sn = new In(), mn = new Cn(), Pn = new An(), _n = new wn(), No = new Vo(), yn = new gn(), _t = new wt(), Ao = new So(), Uo = new zo(), En = new Bn(), Rt = new jt(), Go = new Do(), Kn = new Yn(), Un = new zn(), Co = new vo(), Ko = new en(), on = new nn(), Ge.moduleInitializer.MobileSDK ? Fn = new qn() : Vn = new On(), Pt = new At(), t = Ze.getRegionRule(), 'IAB2' !== Ze.getRegionRuleType() ? [
                                3,
                                2
                            ] : [
                                4,
                                Promise.all([
                                    Co.getLangJson(),
                                    Co.fetchGvlObj(),
                                    t.UseGoogleVendors ? Co.fetchGoogleVendors() : Promise.resolve(null),
                                    Co.loadCMP()
                                ])
                            ];
                        case 1:
                            return s = e.sent(), o = s[0], n = s[1], r = s[2], Oe.gvlObj = n, Oe.addtlVendorsList = r ? r.vendors : null, [
                                3,
                                4
                            ];
                        case 2:
                            return [
                                4,
                                Co.getLangJson()
                            ];
                        case 3:
                            o = e.sent(), e.label = 4;
                        case 4:
                            return function (r) {
                                a(this, void 0, void 0, function () {
                                    var t, o, n;
                                    return d(this, function (e) {
                                        switch (e.label) {
                                        case 0:
                                            return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function (e) {
                                                var t, o = Ge.moduleInitializer.MobileSDK;
                                                t = o ? Fn : Vn;
                                                var n = {
                                                    AllowAll: t.AllowAll,
                                                    BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                    Close: t.Close,
                                                    getCSS: t.getCSS,
                                                    GetDomainData: t.GetDomainData,
                                                    getGeolocationData: t.getGeolocationData,
                                                    getHTML: t.getHTML,
                                                    Init: t.Init,
                                                    InitializeBanner: t.InitializeBanner,
                                                    initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                    InsertHtml: t.InsertHtml,
                                                    InsertScript: t.InsertScript,
                                                    IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                    IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                    LoadBanner: t.LoadBanner,
                                                    OnConsentChanged: Rt.OnConsentChanged,
                                                    ReconsentGroups: t.ReconsentGroups,
                                                    RejectAll: t.RejectAll,
                                                    SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                    setGeoLocation: t.setGeoLocation,
                                                    ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                    TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                    useGeoLocationService: t.useGeoLocationService,
                                                    FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                    changeLanguage: t.changeLang
                                                };
                                                e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, Oe.isV2Stub && (n.syncConsentProfile = Kn.syncConsentProfile));
                                                o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = Oe.otCookieData);
                                                e.IsIabEnabled && (n.updateConsentFromCookies = Rt.updateConsentFromCookie, n.getPingRequest = Pt.getPingRequestForTcf, n.getVendorConsentsRequestV2 = Pt.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                return n;
                                            }(r.DomainData)), ft.initializeBannerVariables(r), St = new It(), Et = new Bt(), mt = new Ct(), Ht = new Ft(), Vt = new Gt(), pn = new kn(), sn = new ln(), function () {
                                                var o = window.OTExternalConsent;
                                                if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                                    var n = [], e = o.groups.split(',');
                                                    e.forEach(function (e) {
                                                        var t = e.split(':');
                                                        n.push({
                                                            consentDate: o.consentedDate,
                                                            status: '1' === t[1] ? i[i.ACTIVE] : i[i.OPT_OUT],
                                                            id: t[0]
                                                        }), Oe.grpsSynced.push(t[0]);
                                                    }), Oe.consentPreferences = {
                                                        preferences: n,
                                                        syncGroups: null
                                                    }, Oe.syncRequired = !0, St.updateGroupsInCookie(le.OPTANON_CONSENT, e), et.setCookie(le.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString && (Oe.isIabSynced = !0, et.setCookie(le.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString && et.setCookie(le.ADDITIONAL_CONSENT_STRING, '' + Oe.addtlConsentVersion + o.addtlString, 365);
                                                }
                                            }(), t = Kn.syncPreferences(Oe.consentPreferences, !0), (Oe.syncRequired || t.syncRequired) && ft.syncAlertBoxCookie(t.alertBoxCookieVal), ft.syncCookieExpiry(), o = window.OneTrust.dataSubjectParams || {}, (Oe.dsParams = o).id && Vn.setDataSubjectIdV2(o.id, o.isAnonymous), Ze.multiVariantTestingEnabled && Ze.selectedVariant && et.setCookie(le.SELECTED_VARIANT, Ze.selectedVariant.Id, Xe.ReconsentFrequencyDays), [
                                                4,
                                                Pt.initializeIABModule()
                                            ];
                                        case 1:
                                            return e.sent(), window.OneTrust.Init(!0), [
                                                4,
                                                Ao.fetchAssets()
                                            ];
                                        case 2:
                                            return (e.sent(), _n.initBanner(), Rt.assetResolve(!0), yn.initialiseCssReferences(), n = ft.isIABCrossConsentEnabled(), (Oe.syncedValidGrp || Oe.isIabSynced) && !n && Xe.NtfyConfig.ShowNtfy && ft.isAlertBoxClosedAndValid()) ? (Oe.ntfyRequired = !0, [
                                                4,
                                                sn.getContent()
                                            ]) : [
                                                3,
                                                4
                                            ];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return n || window.OneTrust.LoadBanner(), [2];
                                        }
                                    });
                                });
                            }(o), [2];
                        }
                    });
                });
            }();
        }();
    }())
}