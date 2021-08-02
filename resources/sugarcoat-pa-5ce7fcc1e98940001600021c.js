{
    const $___mock_e7790ddf33cecaea = {};
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
    })($___mock_e7790ddf33cecaea);
    (function () {
        !function () {
            'use strict';
            function t(t, e) {
                return Object.keys(t).map(function (n) {
                    return n + '=' + (e ? t[n] : encodeURIComponent(t[n]));
                }).join('&');
            }
            function e(t, e) {
                var n, o, r = {};
                return t && 'string' == typeof t ? (t.trim().split('&').forEach(function (t) {
                    n = t.indexOf('='), o = t.substring(n + 1), r[t.substr(0, n)] = e ? o : decodeURIComponent(o);
                }), r) : r;
            }
            function n(t) {
                return t instanceof Date && (t = t.valueOf()), 'number' == typeof t && parseInt(t.toString().substring(0, 10), 10);
            }
            function o() {
                var t = {}, e = arguments;
                e[0] instanceof Array && (e = e[0]);
                for (var n = 0, a = e.length; n < a; n++) {
                    var s = e[n];
                    if (r(s))
                        s = o(s);
                    else if (!i(s))
                        continue;
                    Object.keys(s).forEach(function (e) {
                        s.hasOwnProperty(e) && (t[e] = s[e]);
                    });
                }
                return t;
            }
            function r(t) {
                return '[object Array]' === Object.prototype.toString.call(t);
            }
            function i(t) {
                return '[object Object]' === Object.prototype.toString.call(t);
            }
            function a(e, n, r, a) {
                function s(s, c) {
                    var u = a || !1;
                    if (i(c) && (c = o({ id: n.getSiteID() }, c)), 'GET' === s && (r = function (e) {
                            return r + '?' + t(e);
                        }(c)), -1 !== e.navigator.appName.indexOf('Internet Explorer')) {
                        var d = e.navigator.appVersion.match(/MSIE (\d+)/);
                        d && parseInt(d[1]) <= 9 && (u = !0);
                    }
                    if (e.XMLHttpRequest && !u) {
                        var f = new e.XMLHttpRequest();
                        f.open(s, r), 'GET' === s ? f.send(t(c)) : f.send(JSON.stringify(c));
                    } else
                        e.document.createElement('img').src = r;
                }
                return {
                    get: function (t) {
                        s('GET', t);
                    },
                    post: function (t) {
                        s('POST', t);
                    }
                };
            }
            function s(n, o) {
                var r = new Date(Date.now() + o.retVisitor);
                var i = {
                    usesCookies: !0,
                    getItem: function (t) {
                        return i._cookieToObject()[t];
                    },
                    setItem: function (t, e) {
                        var n = i._cookieToObject() || {};
                        n[t] = e, i._objectToCookie(n);
                    },
                    removeItem: function (t) {
                        var e = i._cookieToObject();
                        e && (delete e[t], i._objectToCookie(e));
                    },
                    _cookieToObject: function () {
                        return e(n.document.cookie.split(';').filter(function (t) {
                            return t.length && t.indexOf(o.storageKey) > -1;
                        }).join('').replace(o.storageKey + '=', ''));
                    },
                    _objectToCookie: function (e) {
                        var i;
                        n.document.cookie = (i = t(e), o.storageKey + '=' + i + '; SameSite=Strict; expires=' + r);
                    }
                };
                return i;
            }
            function c(o, c, u) {
                var d = {
                    modules: [],
                    send: void 0,
                    storage: void 0,
                    storageKey: o.storageKey,
                    id: o.id,
                    url: o.url,
                    ver: o.ver,
                    sessionIDLength: o.sessionIDLength,
                    sessionLifetime: o.sessionLifetime,
                    retVisitor: o.retVisitor,
                    getSessionInfo: function () {
                        var t = d.storage.get('sid'), e = parseInt(d.storage.get('sst'), 10), o = n(Date.now());
                        return t && e ? o - e > d.sessionLifetime ? d.sessionStart(o - e < d.retVisitor) : {
                            sId: t,
                            sST: e,
                            sIS: d.getSessionInteractionStep(),
                            rV: d.storage.get('rv') || '0',
                            v: d.ver
                        } : d.sessionStart(!1);
                    },
                    generateSessionID: function () {
                        return (78364164096 + Math.floor(2742745743359 * Math.random())).toString(36);
                    },
                    sessionStart: function (t) {
                        t = t ? '1' : '0';
                        var e = d.generateSessionID();
                        d.storage.set('sid', e);
                        var n = d.sessionMarkActive();
                        return d.storage.set('sis', '1'), d.storage.set('rv', t), {
                            sId: e,
                            sST: n,
                            sIS: '1',
                            rV: t,
                            v: d.ver
                        };
                    },
                    sessionMarkActive: function () {
                        var t = n(Date.now());
                        return d.storage.set('sst', t), t;
                    },
                    getSessionInteractionStep: function () {
                        return parseInt(d.storage.get('sis'), 10) || 1;
                    },
                    bumpSessionInteractionStep: function () {
                        d.storage.set('sis', d.getSessionInteractionStep() + 1);
                    },
                    checkBrowser: function () {
                        return c.document && c.document.readyState && Array.prototype.forEach && Array.prototype.map;
                    },
                    getSiteID: function () {
                        return d.id.length || (r(c._prum) && r(c._prum[0]) && 'id' === c._prum[0][0] ? (d.id = c._prum[0][1], d.storage.set('r1', '1')) : i(c._prum) && c._prum.id && (d.id = c._prum.id, d.storage.set('r1', '1'))), d.id;
                    },
                    initialize: function () {
                        d.storage = function (n, o) {
                            var r;
                            return function () {
                                const $___old_b44b3330d53cae41 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_b44b3330d53cae41)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_e7790ddf33cecaea.localStorage));
                                    return function () {
                                        var t = o.storageKey + '_enabled';
                                        if (n.localStorage && '1' === n.localStorage.getItem(t))
                                            r = n.localStorage;
                                        else {
                                            if (n.localStorage)
                                                try {
                                                    if (n.localStorage.setItem(t, 1), '1' === n.localStorage.getItem(t))
                                                        return void (r = n.localStorage);
                                                } catch (t) {
                                                    console && console.info('localStorage.setItem() failed. Using cookies.');
                                                }
                                            r = s(n, o);
                                        }
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_b44b3330d53cae41)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_b44b3330d53cae41));
                                }
                            }(), {
                                get: function (t) {
                                    if (r && t) {
                                        var n = e(r.getItem(o.storageKey));
                                        return n ? n[t] : '';
                                    }
                                    return '';
                                },
                                set: function (n, i) {
                                    if (r && n)
                                        try {
                                            var a = r.getItem(o.storageKey), s = a ? e(a) : {};
                                            s[n] = i, r.setItem(o.storageKey, t(s));
                                        } catch (t) {
                                            console.error('unable to store ' + n + ' in storage.', t);
                                        }
                                },
                                remove: function (t) {
                                    r && t && r.removeItem(t);
                                }
                            };
                        }(c, d), d.getSessionInfo(), d.send = a(c, d, d.url), r(u) && (d.modules = u, d.modules.forEach(function (t) {
                            t(c, d);
                        }));
                    }
                };
                d.checkBrowser() && ('complete' !== c.document.readyState ? c.addEventListener('load', function t(e) {
                    e.target.removeEventListener('load', t), d.initialize();
                }) : d.initialize());
            }
            function u(t, e) {
                var n, r, i = t.performance || {};
                function a() {
                    return 'https:' === t.location.protocol && r.secureConnectionStart > 0 ? s(r.secureConnectionStart) : -1;
                }
                function s(t) {
                    return t > 0 ? t - r.navigationStart : -1;
                }
                !function () {
                    if (r = i.timing) {
                        var c = {};
                        n = setTimeout(function () {
                            if ((c = function (t, e) {
                                    return [
                                        'connectEnd',
                                        'connectStart',
                                        'domComplete',
                                        'domContentLoadedEventEnd',
                                        'domContentLoadedEventStart',
                                        'domInteractive',
                                        'domLoading',
                                        'domainLookupEnd',
                                        'domainLookupStart',
                                        'fetchStart',
                                        'loadEventEnd',
                                        'loadEventStart',
                                        'navigationStart',
                                        'redirectEnd',
                                        'redirectStart',
                                        'requestStart',
                                        'responseEnd',
                                        'responseStart',
                                        'secureConnectionStart',
                                        'unloadEventEnd',
                                        'unloadEventStart'
                                    ].forEach(function (n) {
                                        e[n] = e[n] ? e[n] : t[n];
                                    }), e;
                                }(r, c)).loadEventEnd) {
                                clearInterval(n);
                                var u = [];
                                u.push(function (t) {
                                    return {
                                        sAW: t.screen.availWidth,
                                        sAH: t.screen.availHeight,
                                        bIW: t.innerWidth,
                                        bIH: t.innerHeight,
                                        pD: t.screen.pixelDepth,
                                        dPR: 1 | t.devicePixelRatio,
                                        or: t.screen.orientation && t.screen.orientation.type || ''
                                    };
                                }(t)), u.push({
                                    nT: i.navigation.type,
                                    rC: i.navigation.redirectCount
                                }), u.push(function (t) {
                                    return {
                                        nS: 0,
                                        cS: s(t.connectStart),
                                        cE: s(t.connectEnd),
                                        dLE: s(t.domainLookupEnd),
                                        dLS: s(t.domainLookupStart),
                                        fS: s(t.fetchStart),
                                        hS: a(),
                                        rE: s(t.redirectEnd),
                                        rS: s(t.redirectStart),
                                        reS: s(t.requestStart),
                                        resS: s(t.responseStart),
                                        resE: s(t.responseEnd),
                                        uEE: s(t.unloadEventEnd),
                                        uES: s(t.unloadEventStart),
                                        dL: s(t.domLoading),
                                        dI: s(t.domInteractive),
                                        dCLES: s(t.domContentLoadedEventStart),
                                        dCLEE: s(t.domContentLoadedEventEnd),
                                        dC: s(t.domComplete),
                                        lES: s(t.loadEventStart),
                                        lEE: s(t.loadEventEnd)
                                    };
                                }(c)), function (n) {
                                    var r = t.location;
                                    n.push({
                                        s: 'nt',
                                        title: t.document.title,
                                        path: r.protocol + '//' + r.host + r.pathname,
                                        ref: t.document.referrer
                                    }), n.push(e.getSessionInfo()), e.bumpSessionInteractionStep();
                                    var i = o(n);
                                    e.send.get(i);
                                }(u);
                            }
                        }, 25);
                    }
                }();
            }
            !function (t) {
                var e = [u];
                c({
                    storageKey: 'pa',
                    id: '5ce7fcc1e98940001600021c',
                    url: '//rum-collector-2.pingdom.net/img/beacon.gif',
                    ver: '1.4.1',
                    sessionIDLength: parseInt('8', 10),
                    sessionLifetime: parseInt('1800', 10),
                    retVisitor: 24 * parseInt('30', 10) * 3600
                }, t, e);
            }(window);
        }();
    }())
}