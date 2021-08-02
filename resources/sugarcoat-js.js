{
    const $___mock_0af09b6b8c778d41 = {};
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
    })($___mock_0af09b6b8c778d41);
    (function () {
        !function () {
            'use strict';
            if ('object' == typeof window)
                if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype)
                    'isIntersecting' in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                        get: function () {
                            return 0 < this.intersectionRatio;
                        }
                    });
                else {
                    var c = window.document, n = [];
                    t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function (n) {
                        if (!this.t.some(function (t) {
                                return t.element == n;
                            })) {
                            if (!n || 1 != n.nodeType)
                                throw new Error('target must be an Element');
                            this.n(), this.t.push({
                                element: n,
                                entry: null
                            }), this.i(), this.o();
                        }
                    }, t.prototype.unobserve = function (n) {
                        this.t = this.t.filter(function (t) {
                            return t.element != n;
                        }), this.t.length || (this.e(), this.s());
                    }, t.prototype.disconnect = function () {
                        this.t = [], this.e(), this.s();
                    }, t.prototype.takeRecords = function () {
                        var t = this.r.slice();
                        return this.r = [], t;
                    }, t.prototype.c = function (t) {
                        var n = t || [0];
                        return Array.isArray(n) || (n = [n]), n.sort().filter(function (t, n, i) {
                            if ('number' != typeof t || isNaN(t) || t < 0 || 1 < t)
                                throw new Error('threshold must be a number between 0 and 1 inclusively');
                            return t !== i[n - 1];
                        });
                    }, t.prototype.u = function (t) {
                        var n = (t || '0px').split(/\s+/).map(function (t) {
                            var n = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!n)
                                throw new Error('rootMargin must be specified in pixels or percent');
                            return {
                                value: parseFloat(n[1]),
                                unit: n[2]
                            };
                        });
                        return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n;
                    }, t.prototype.i = function () {
                        this.a || (this.a = !0, this.POLL_INTERVAL ? this.l = setInterval(this.o, this.POLL_INTERVAL) : (i(window, 'resize', this.o, !0), i(c, 'scroll', this.o, !0), this.USE_MUTATION_OBSERVER && 'MutationObserver' in window && (this.d = new MutationObserver(this.o), this.d.observe(c, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))));
                    }, t.prototype.e = function () {
                        this.a && (this.a = !1, clearInterval(this.l), this.l = null, e(window, 'resize', this.o, !0), e(c, 'scroll', this.o, !0), this.d && (this.d.disconnect(), this.d = null));
                    }, t.prototype.o = function () {
                        var c = this.f(), u = c ? this.p() : s();
                        this.t.forEach(function (t) {
                            var n = t.element, i = f(n), o = this.h(n), e = t.entry, s = c && o && this.v(n, u), r = t.entry = new a({
                                    time: l(),
                                    target: n,
                                    boundingClientRect: i,
                                    rootBounds: u,
                                    intersectionRect: s
                                });
                            e ? c && o ? this.y(e, r) && this.r.push(r) : e && e.isIntersecting && this.r.push(r) : this.r.push(r);
                        }, this), this.r.length && this.m(this.takeRecords(), this);
                    }, t.prototype.v = function (t, n) {
                        if ('none' != window.getComputedStyle(t).display) {
                            for (var i = f(t), o = d(t), e = !1; !e;) {
                                var s = null, r = 1 == o.nodeType ? window.getComputedStyle(o) : {};
                                if ('none' == r.display)
                                    return;
                                if (o == this.root || o == c ? (e = !0, s = n) : o != c.body && o != c.documentElement && 'visible' != r.overflow && (s = f(o)), s && !(i = u(s, i)))
                                    break;
                                o = d(o);
                            }
                            return i;
                        }
                    }, t.prototype.p = function () {
                        var t;
                        if (this.root)
                            t = f(this.root);
                        else {
                            var n = c.documentElement, i = c.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || i.clientWidth,
                                width: n.clientWidth || i.clientWidth,
                                bottom: n.clientHeight || i.clientHeight,
                                height: n.clientHeight || i.clientHeight
                            };
                        }
                        return this.w(t);
                    }, t.prototype.w = function (i) {
                        var t = this.k.map(function (t, n) {
                                return 'px' == t.unit ? t.value : t.value * (n % 2 ? i.width : i.height) / 100;
                            }), n = {
                                top: i.top - t[0],
                                right: i.right + t[1],
                                bottom: i.bottom + t[2],
                                left: i.left - t[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n;
                    }, t.prototype.y = function (t, n) {
                        var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, o = n.isIntersecting ? n.intersectionRatio || 0 : -1;
                        if (i !== o)
                            for (var e = 0; e < this.thresholds.length; e++) {
                                var s = this.thresholds[e];
                                if (s == i || s == o || s < i != s < o)
                                    return !0;
                            }
                    }, t.prototype.f = function () {
                        return !this.root || r(c, this.root);
                    }, t.prototype.h = function (t) {
                        return r(this.root || c, t);
                    }, t.prototype.n = function () {
                        n.indexOf(this) < 0 && n.push(this);
                    }, t.prototype.s = function () {
                        var t = n.indexOf(this);
                        -1 != t && n.splice(t, 1);
                    }, window.IntersectionObserver = t, window.IntersectionObserverEntry = a;
                }
            function a(t) {
                this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || s(), this.isIntersecting = !!t.intersectionRect;
                var n = this.boundingClientRect, i = n.width * n.height, o = this.intersectionRect, e = o.width * o.height;
                this.intersectionRatio = i ? Number((e / i).toFixed(4)) : this.isIntersecting ? 1 : 0;
            }
            function t(t, n) {
                var i = n || {};
                if ('function' != typeof t)
                    throw new Error('callback must be a function');
                if (i.root && 1 != i.root.nodeType)
                    throw new Error('root must be an Element');
                this.o = o(this.o.bind(this), this.THROTTLE_TIMEOUT), this.m = t, this.t = [], this.r = [], this.k = this.u(i.rootMargin), this.thresholds = this.c(i.threshold), this.root = i.root || null, this.rootMargin = this.k.map(function (t) {
                    return t.value + t.unit;
                }).join(' ');
            }
            function l() {
                return window.performance && performance.now && performance.now();
            }
            function o(t, n) {
                var i = null;
                return function () {
                    i = i || setTimeout(function () {
                        t(), i = null;
                    }, n);
                };
            }
            function i(t, n, i, o) {
                'function' == typeof t.addEventListener ? t.addEventListener(n, i, o || !1) : 'function' == typeof t.attachEvent && t.attachEvent('on' + n, i);
            }
            function e(t, n, i, o) {
                'function' == typeof t.removeEventListener ? t.removeEventListener(n, i, o || !1) : 'function' == typeof t.detatchEvent && t.detatchEvent('on' + n, i);
            }
            function u(t, n) {
                var i = Math.max(t.top, n.top), o = Math.min(t.bottom, n.bottom), e = Math.max(t.left, n.left), s = Math.min(t.right, n.right), r = s - e, c = o - i;
                return 0 <= r && 0 <= c && {
                    top: i,
                    bottom: o,
                    left: e,
                    right: s,
                    width: r,
                    height: c
                };
            }
            function f(t) {
                var n;
                try {
                    n = t.getBoundingClientRect();
                } catch (t) {
                }
                return n ? (n.width && n.height || (n = {
                    top: n.top,
                    right: n.right,
                    bottom: n.bottom,
                    left: n.left,
                    width: n.right - n.left,
                    height: n.bottom - n.top
                }), n) : s();
            }
            function s() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }
            function r(t, n) {
                for (var i = n; i;) {
                    if (i == t)
                        return !0;
                    i = d(i);
                }
                return !1;
            }
            function d(t) {
                var n = t.parentNode;
                return n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n;
            }
        }(), IntersectionObserver.prototype.POLL_INTERVAL = 100, function (t, n, e, i, s, f, d, u) {
            if ('performance' in window == 0 && (window.performance = {}), 'now' in window.performance == 0) {
                var o = Date.now();
                performance.timing && performance.timing.navigationStart && (o = performance.timing.navigationStart), window.performance.now = function () {
                    return Date.now() - o;
                };
            }
            var p = document.head || document.getElementsByTagName('head')[0] || document.documentElement, h = [], v = {
                    _: function (t) {
                        v._.history = v._.history || [], v._.history.push(t), window.console || window.location.href.indexOf('viously_debug=1');
                    },
                    g: function (t, n, i, o) {
                        var e = u[n];
                        if (e) {
                            var s = new Image();
                            o = o || '';
                            var r = f[0].conf, c = r.playlist.videos[0];
                            s.src = r.admin.pings_url[t] + e + '?sps=' + c.token + '&sid=' + r.id_session_one_hour + '&spgid=' + r.page.id_session_page + '&spid=' + r.playlist.id_session_playlist + '&svid=' + c.id_session_video + '&p=' + r.product.id + '&c=' + c.creator.uid + '&d=' + r.diffuser.uid + '&dn=' + r.diffuser.name + '&hn=' + window.location.host + '&ts=' + Math.round(100 * performance.now()) / 100 + '&pc=1&cy=' + (r.user.geoip.country ? r.user.geoip.country.code : '') + '&cn=' + (r.user.geoip.country ? r.user.geoip.country.name : '') + '&pt=' + r.type + '&audience=' + r.page.audience_source.name.toLowerCase().replace(' ', '_') + '&sti=' + r.template.id + '&stv=' + r.template.version + '&pu=' + encodeURIComponent(window.location.protocol + '//' + window.location.hostname + window.location.pathname) + o, 1 == i && (u[n] = !1);
                        }
                    },
                    b: function (t, n, i) {
                        var o = f[0].conf, e = o.playlist.videos[0], s = e.pings[2][t];
                        if (s) {
                            i = i || '';
                            var r = 'ts=' + Math.round(100 * performance.now()) / 100 + '&sid=' + o.id_session_one_hour + '&spgid=' + o.page.id_session_page + '&spid=' + o.playlist.id_session_playlist + '&svid=' + e.id_session_video + '&uuid=&udbn=' + o.user.device.browser.name + '&udbvm=' + o.user.device.browser.version.major + '&udbvn=' + o.user.device.browser.version.minor + '&udon=' + o.user.device.os.name + '&udsh=' + document.documentElement.clientHeight + '&udsw=' + document.documentElement.clientWidth + '&udso=' + (document.documentElement.clientWidth >= document.documentElement.clientHeight ? 'landscape' : 'portrait') + '&udt=' + o.user.device.type + '&ugcy=' + (o.user.geoip.country ? o.user.geoip.country.code : '') + '&ugcn=' + (o.user.geoip.country ? o.user.geoip.country.name : '') + '&ul=' + navigator.language + '&pasi=' + o.page.audience_source.id + '&pasn=' + o.page.audience_source.name + '&pdi=' + o.page.domain.id + '&pdn=' + o.page.domain.name + '&pgs=' + (o.page.grapeshot && o.page.grapeshot.gv_safe ? 'true' : '') + '&pgsg=' + (o.page.grapeshot && o.page.grapeshot.gs_channels ? o.page.grapeshot.gs_channels : '') + '&pglc=&pgcsg=' + (o.page.grapeshot && o.page.grapeshot.vc_channels ? o.page.grapeshot.vc_channels : '') + '&pru=' + encodeURIComponent(o.page.referrer.url) + '&prh=' + encodeURIComponent(o.page.referrer.hostname) + '&pta=' + (o.page.tcf.addtlConsent ? 'true' : 'false') + '&ptna=' + (o.page.tcf.addtlConsent ? o.page.tcf.addtlConsent.split('.').length : 0) + '&ptci=' + (o.page.tcf.cmp ? o.page.tcf.cmp.id : '') + '&ptcv=' + (o.page.tcf.cmp ? o.page.tcf.cmp.version : '') + '&ptfa=' + (o.page.tcf.gdprApplies ? 'true' : 'false') + '&ptts=' + (o.page.tcf.tcString ? 'true' : 'false') + '&ptv=' + (o.page.tcf.nbVendors ? o.page.tcf.nbVendors : '') + '&pu=' + encodeURIComponent(window.location.href) + '&pua=' + o.page.usp.applies + '&puu=' + o.page.usp.uspString + '&ti=' + o.template.id + '&tv=' + o.template.version + '&tt=' + o.type + '&talp=' + o.template.advertising.linear.primary + '&talv=' + o.template.advertising.linear.viously + '&talpk=' + o.template.advertising.linear.passback + '&talmpv=' + o.template.advertising.linear.max_preroll_viously + '&tane=' + o.template.advertising.nonlinear.event + '&tanp=' + o.template.advertising.nonlinear.position + '&tanz=' + o.template.advertising.nonlinear.size + '&ta=' + o.template.autoplay + '&tcsb=' + o.template.controls.seek_bar + '&tcl=' + o.template.controls.control_bar.logo + '&tcp=' + o.template.controls.control_bar.button_play + '&tct=' + o.template.controls.control_bar.video_timer + '&tcr=' + o.template.controls.control_bar.button_report + '&tcf=' + o.template.controls.control_bar.button_fullscreen + '&tcv=' + o.template.controls.control_bar.button_volume + '&tm=' + o.template.mute + '&tsip=' + o.template.sdk.initial_position + '&tspx=' + (o.template.sdk.placement && o.template.sdk.placement.xpath ? o.template.sdk.placement.xpath : '') + '&tspxt=' + (o.template.sdk.placement && o.template.sdk.placement.xpath_type ? o.template.sdk.placement.xpath_type : '') + '&tsse=' + o.template.sdk.sticky.event + '&tssp=' + o.template.sdk.sticky.position + '&tssuc=' + o.template.sdk.sticky.unstick.countdown + '&tssux=' + (o.template.sdk.sticky.unstick.xpath ? 'true' : 'false') + '&tssue=' + o.template.sdk.sticky.unstick.cookie.enabled + '&tssued=' + o.template.sdk.sticky.unstick.cookie.expiration_days + '&tssw=' + o.template.sdk.sticky.width + '&tuh=' + (o.template.ui ? 'true' : 'false') + '&plid=&plix=1&plci=' + e.category.id + '&plcn=&plchi=&plchn=&plcrn=' + e.creator.name + '&plcru=' + e.creator.uid + '&plcd=' + new Date(e.date).getTime() + '&plcdu=' + e.duration + '&plcl=' + e.language + '&plpd=' + new Date(e.parent.date).getTime() + '&plpv=' + e.parent.vid + '&plcr=' + e.ratio + '&plst=' + e.starttime + '&plet=' + e.endtime + '&plctg=' + e.tags + '&plcu=' + encodeURIComponent(e.url) + '&plv=' + e.vid + '&pid=' + o.product.id + '&pn=' + o.product.name + '&duid=' + o.diffuser.uid + '&dun=' + o.diffuser.name + '&ct=' + v.S();
                            new Image().src = o.admin.pings_url[2] + s + '?' + r + i, 1 == n && (e.pings[2][t] = !1);
                        }
                    },
                    I: function (t, n) {
                        var i = document.createElement('div');
                        return i.innerHTML = t, n && (i.id = n), i;
                    },
                    x: function (t, n, i) {
                        var o = document.createElement('script');
                        o.src = n, o.readyState ? o.onreadystatechange = function () {
                            'loaded' == o.readyState || 'complete' == o.readyState ? (v._(sonar.R + 'Script ' + n + ' ' + o.readyState), o.onreadystatechange = null, i && i()) : v._(sonar.R + 'Script ' + n + ' ' + o.readyState);
                        } : (o.onload = function () {
                            v._(sonar.R + 'Script ' + n + ' loaded'), o.onload = null, i && i();
                        }, o.onerror = function () {
                            v._(sonar.R + 'Script ' + n + ' error'), o.onload = null, i && i();
                        }), t.insertBefore(o, t.firstChild);
                    },
                    C: function (t, n, i) {
                        window.addEventListener ? t.addEventListener(n, i, !1) : (t['e' + n + i] = i, t[n + i] = function () {
                            t['e' + n + i](window.event);
                        }, t.attachEvent('on' + n, t[n + i]));
                    },
                    U: function (t, n, i) {
                        window.removeEventListener ? t.removeEventListener(n, i, !1) : (t.detachEvent('on' + n, t[n + i]), t[n + i] = null);
                    },
                    S: function () {
                        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        return t && t.effectiveType ? t.effectiveType : 'unknown';
                    }
                }, y = {
                    N: function () {
                        const $___old_00e4059ee9dcbe8a = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_00e4059ee9dcbe8a)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_0af09b6b8c778d41.localStorage));
                            return function () {
                                try {
                                    return localStorage.setItem('test', '1'), localStorage.removeItem('test'), !0;
                                } catch (t) {
                                    return !1;
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_00e4059ee9dcbe8a)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_00e4059ee9dcbe8a));
                        }
                    }(),
                    O: function (t) {
                        return sessionStorage.getItem(t);
                    },
                    M: function (t) {
                        const $___old_7751b5f04911d7ab = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                        try {
                            if ($___old_7751b5f04911d7ab)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_0af09b6b8c778d41.sessionStorage));
                            return function () {
                                y.N && sessionStorage.removeItem(t);
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_7751b5f04911d7ab)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___old_7751b5f04911d7ab));
                        }
                    },
                    D: function (t, n) {
                        const $___old_33ad04876c8241bb = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_33ad04876c8241bb)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_0af09b6b8c778d41.localStorage));
                            return function () {
                                y.N && localStorage.setItem(t, n);
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_33ad04876c8241bb)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_33ad04876c8241bb));
                        }
                    },
                    z: function (t) {
                        const $___old_cf3a99163ef62f0e = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_cf3a99163ef62f0e)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_0af09b6b8c778d41.localStorage));
                            return function () {
                                return y.N ? localStorage.getItem(t) : null;
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_cf3a99163ef62f0e)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_cf3a99163ef62f0e));
                        }
                    },
                    A: function (t) {
                        const $___old_59be9016f2aa1dd2 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_59be9016f2aa1dd2)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_0af09b6b8c778d41.localStorage));
                            return function () {
                                y.N && localStorage.removeItem(t);
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_59be9016f2aa1dd2)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_59be9016f2aa1dd2));
                        }
                    }
                };
            unsticky = {
                L: null,
                T: null,
                P: null,
                J: (sticky = {
                    L: null,
                    T: null,
                    P: null,
                    J: !1,
                    F: !1,
                    j: null,
                    B: 'viously-sticked ',
                    V: function (t) {
                        if (v._(sonar.R + 'Init stick'), sticky.T = t.iframe, sticky.L = t.iframe.parentNode, 'panoramic' == t.conf.template.sdk.sticky.width)
                            sticky.B += 'viously-sticked-panoramic';
                        else
                            switch (t.conf.template.sdk.sticky.position) {
                            case 'topRight':
                                sticky.B += 'viously-sticked-top-right';
                                break;
                            case 'bottomLeft':
                                sticky.B += 'viously-sticked-bottom-left';
                                break;
                            case 'bottomRight':
                                sticky.B += 'viously-sticked-bottom-right';
                                break;
                            default:
                                sticky.B += 'viously-sticked-top-left';
                            }
                        sticky.P = new IntersectionObserver(sticky.m, { threshold: 0.5 }), sticky.P.observe(sticky.L);
                    },
                    Y: function () {
                        if (v._(sonar.R + 'stick'), 1 == sticky.F) {
                            if (sticky.T.className = sticky.B, sticky.T.contentWindow.document.body.classList.add('player-is-sticked'), !sticky.j) {
                                var t = v.I('<img />', 'viously-video-thumbnail');
                                sticky.T.parentNode.insertBefore(t, sticky.T), sticky.j = t.querySelector('img');
                            }
                            sticky.j.src = sticky.T.contentWindow.document.getElementById('overlay-image').style.backgroundImage.slice(5, -2), sticky.j.alt = sticky.T.title;
                        }
                    },
                    q: function () {
                        v._(sonar.R + 'unstick'), sticky.F = !0, sticky.T.className = 'viously-unsticked', sticky.T.contentWindow.document.body.classList.remove('player-is-sticked');
                    },
                    H: function () {
                        v._(sonar.R + 'disconnect'), sticky.P && sticky.P.disconnect(), unsticky.P && unsticky.P.disconnect(), sticky.T && sticky.q();
                    },
                    m: function (t) {
                        t.forEach(function (t) {
                            t.target == sticky.L && (t.intersectionRatio < 0.5 ? (v._(sonar.R + 'stick observer : outside'), sticky.J = !1, t.boundingClientRect.top < t.intersectionRect.top ? (sticky.F = !0, v._(sonar.R + 'stick observer : on the top')) : v._(sonar.R + 'stick observer : on the bottom'), !1 === unsticky.J && sticky.Y()) : (v._(sonar.R + 'stick observer : inside'), sticky.J = !0, sticky.q()));
                        });
                    }
                }, !1),
                V: function (t) {
                    unsticky.T = sonar.X(t.conf.template.sdk.sticky.unstick.xpath), unsticky.L = v.I('', 'viously-unstick-anchor'), unsticky.T.parentNode.insertBefore(unsticky.L, unsticky.T), unsticky.P = new IntersectionObserver(unsticky.m, { threshold: 0.5 }), unsticky.P.observe(unsticky.L);
                },
                m: function (t) {
                    t.forEach(function (t) {
                        t.target == unsticky.L && (t.intersectionRatio < 0.5 ? (v._(sonar.R + 'unstick observer : outside'), unsticky.J = !1, t.boundingClientRect.top < t.intersectionRect.top ? (v._(sonar.R + 'unstick observer : on the top'), sticky.q()) : (v._(sonar.R + 'unstick observer : on the bottom'), !1 === sticky.J && sticky.Y())) : (v._(sonar.R + 'unstick observer : inside'), unsticky.J = !0, sticky.q()));
                    });
                }
            }, sonar = {
                R: 'SONAR : ',
                $: f.length,
                G: 10,
                K: function (t) {
                    return new Function(t)();
                },
                Q: function (t, n, i) {
                    var o = document.createElement('style');
                    o.type = 'text/css', n && (o.id = n), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), (i = i || document.body).appendChild(o);
                },
                X: function (t, n) {
                    if ('' == t)
                        return null;
                    if ((n = n || document).evaluate)
                        return n.evaluate(t, document, null, 9, null).singleNodeValue;
                    for (; '/' == t.charAt(0);)
                        t = t.substr(1);
                    for (var i = n, o = t.split('/'), e = 0; e < o.length; e++) {
                        var s = o[e].split(/(\w*)\[(\d*)\]/gi).filter(function (t) {
                                return !('' == t || t.match(/\s/gi));
                            }, this), r = s[0], c = s[1] ? s[1] - 1 : 0;
                        if (!(e < o.length - 1))
                            return i.getElementsByTagName(r)[c];
                        i = i.getElementsByTagName(r)[c];
                    }
                },
                W: function (t) {
                    var n = '';
                    return t.conf.template.sdk.sticky.patch.panoramic && (n += '.viously-sticked-panoramic{top:' + t.conf.template.sdk.sticky.patch.panoramic + 'px !important;}'), t.conf.template.sdk.sticky.patch.top && (n += '.viously-sticked-top-left,.viously-sticked-top-right{top:' + t.conf.template.sdk.sticky.patch.top + 'px !important;}'), t.conf.template.sdk.sticky.patch.right && (n += '.viously-sticked-top-right,.viously-sticked-bottom-right{right:' + t.conf.template.sdk.sticky.patch.right + 'px !important;}'), t.conf.template.sdk.sticky.patch.bottom && (n += '.viously-sticked-bottom-right,.viously-sticked-bottom-left{bottom:' + t.conf.template.sdk.sticky.patch.bottom + 'px !important;}'), t.conf.template.sdk.sticky.patch.left && (n += '.viously-sticked-top-left,.viously-sticked-bottom-left{left:' + t.conf.template.sdk.sticky.patch.left + 'px !important;}'), t.conf.template.sdk.sticky.patch.zindex && (n += 'z-index:' + t.conf.template.sdk.sticky.patch.zindex + ' !important;'), t.conf.template.sdk.sticky.patch.css && (n += t.conf.template.sdk.sticky.patch.css), n;
                },
                Z: function (n, t) {
                    var i = document.createElement('iframe');
                    i.setAttribute('allowfullscreen', !0), i.setAttribute('webkitallowfullscreen', !0), i.setAttribute('mozallowfullscreen', !0), i.setAttribute('frameborder', 0), i.setAttribute('title', !!n.conf.template.ui && n.conf.template.ui.header.title.textContent || n.conf.playlist.videos[n.conf.admin.current_index].title), i.className = 'viously-unsticked', t.appendChild(i);
                    var o = i.contentDocument || i.contentWindow.document || i.document;
                    return o.open(), o.write(s), i.onload = function () {
                        var t = i.contentDocument || i.contentWindow.document || i.document;
                        i.contentWindow.conf = n.conf, v.x(t.body, e);
                    }, o.close(), i;
                },
                tt: function () {
                    for (var t, n = 0; n < f.length; n++)
                        if (!(t = f[n]).iframe) {
                            v._(sonar.R + 'Search player ' + n), sonar.Q(sonar.W(t), 'vsly-custom-css', p);
                            var i = document.getElementById('vsly-top-of-page');
                            i ? 'none' == window.getComputedStyle(i).display ? (i.parentNode.removeChild(i), i = null) : (node_top_of_page_xpath_type = 'replace', t.conf.type = 'optimized', t.conf.template.sdk.initial_position = 'top') : t.conf.template.sdk.placement && t.conf.template.sdk.placement.xpath && (i = sonar.X(t.conf.template.sdk.placement.xpath), node_top_of_page_xpath_type = t.conf.template.sdk.placement.xpath_type);
                            var o = null;
                            t.conf.playlist.videos.length && t.conf.playlist.videos[0].vid && (o = document.getElementById(t.conf.playlist.videos[0].vid), node_tag_location_xpath_type = 'replace'), !o && t.conf.playlist.id && (o = document.getElementById(t.conf.playlist.id), node_tag_location_xpath_type = 'replace');
                            var e = null;
                            if (i ? (e = i, t.conf.template.sdk.placement.xpath_type = node_top_of_page_xpath_type, o && o != i && o.parentNode.removeChild(o)) : o && (e = o, t.conf.template.sdk.placement.xpath_type = node_tag_location_xpath_type), e) {
                                v._(sonar.R + 'Node ' + n + ' found');
                                var s = v.I('', '_' + t.conf.playlist.videos[0].vid);
                                switch (t.conf.template.ui && t.conf.template.ui.header ? s.className = 'viously viously-has-ui' : s.className = 'viously', t.conf.template.sdk.placement.xpath_type) {
                                case 'before':
                                    e.parentNode.insertBefore(s, e);
                                    break;
                                case 'after':
                                    e.parentNode.insertBefore(s, e.nextSibling);
                                    break;
                                case 'replace':
                                    e.parentNode.insertBefore(s, e), e.parentNode.removeChild(e);
                                }
                                if (t.iframe = sonar.Z(t, s), sonar.$--, h.push(t), v.g(1, 1, !1), 'custom' === t.conf.type)
                                    if (!0 === t.conf.template.sdk.sticky.unstick.cookie.enabled) {
                                        var r = !1;
                                        if (t.conf.template.sdk.sticky.unstick.cookie.expiration_days) {
                                            var c = y.z('viously_player_closed_' + t.conf.template.id);
                                            if (c) {
                                                c = JSON.parse(c);
                                                var u = new Date();
                                                c.expiration > u.getTime() ? r = 'true' == c.value : y.A('viously_player_closed_' + t.conf.template.id);
                                            }
                                        } else
                                            r = 'true' == y.O('viously_player_closed_' + t.conf.template.id);
                                        r && (t.conf.template.sdk.sticky.event = 'none', v.g(1, 6, !0));
                                    } else
                                        y.A('viously_player_closed_' + t.conf.template.id), y.M('viously_player_closed_' + t.conf.template.id);
                                'none' != t.conf.template.sdk.sticky.event && (sticky.V(t), 'custom' === t.conf.type && t.conf.template.sdk.sticky.unstick && t.conf.template.sdk.sticky.unstick.xpath && '' != t.conf.template.sdk.sticky.unstick.xpath && unsticky.V(t)), v._(sonar.R + 'Player ' + n + ' append');
                            } else
                                v._(sonar.R + 'Node ' + n + ' not found');
                        }
                    if (0 == sonar.$ || 0 == sonar.G) {
                        for (var a = 0, l = d.length; a < l; a++)
                            v._(sonar.R + 'Apply patch ' + a), sonar.K(d[a]);
                        for (h.sort(function (t, n) {
                                return t.iframe.getBoundingClientRect().top - n.iframe.getBoundingClientRect().top;
                            }), n = 0; n < h.length; n++)
                            h[n].conf.page_position = n + 1;
                        window.ReportingObserver && new ReportingObserver(function (t, n) {
                            for (var i = 0; i < t.length; i++) {
                                var o = t[i];
                                o.body && 'HeavyAdIntervention' === o.body.id && v.g(1, 7, !1, '&url=' + encodeURIComponent(o.url) + '&sourceFile=' + encodeURIComponent(o.body.sourceFile) + '&lineNumber=' + encodeURIComponent(o.body.lineNumber) + '&columnNumber=' + encodeURIComponent(o.body.columnNumber) + '&message=' + encodeURIComponent(o.body.message));
                            }
                        }, { buffered: !0 }).observe();
                    }
                    0 < sonar.$ && (v._(sonar.R + 'Player not append ' + sonar.G), 0 < sonar.G ? (v.g(1, 3, !1, '&retry=' + sonar.G), sonar.nt = setTimeout(function () {
                        sonar.G--, sonar.tt();
                    }, 100)) : (v.g(1, 2, !0), clearTimeout(sonar.nt)));
                },
                it: function () {
                    if (window.self != window.parent) {
                        for (var t = window.location.ancestorOrigins || [], n = '', i = 0; i < t.length && (n += '&ancestor' + i + '=' + encodeURIComponent(t[i]), 4 !== i); i++);
                        v.g(1, 4, !0, '&rfr=' + encodeURIComponent(document.referrer) + n + '&wlh=' + encodeURIComponent(window.location.href));
                    }
                    (document.documentElement.clientWidth <= 300 || document.documentElement.clientHeight <= 150) && v.g(1, 5, !0, '&rfr=' + encodeURIComponent(document.referrer) + '&dcw=' + document.documentElement.clientWidth + '&dch=' + document.documentElement.clientHeight);
                },
                ot: function () {
                    v.g(1, 0, !1), v._(sonar.R + 'Init'), f && '' != f && (sonar.it(), sonar.Q(i, 'vsly-append-players-css', p), document.evaluate ? sonar.tt() : v.x(p, t, function () {
                        wgxpath.install(), v._('wgxpath installed'), sonar.tt();
                    }));
                },
                et: function () {
                    window.vsly = function (o) {
                        if (!o)
                            return '\'vid\' parameter is required!';
                        var i = document.getElementById('_' + o);
                        return {
                            on: function (t, n) {
                                t && n && i.addEventListener(t, n);
                            },
                            off: function (t, n) {
                                t && n && i.removeEventListener(t, n);
                            },
                            once: function (n, i) {
                                vsly(o).on(n, function t() {
                                    vsly(o).off(n, t), i();
                                });
                            }
                        };
                    };
                },
                st: function () {
                    var t = y.z('vsl_session'), n = f[0].conf, i = new Date();
                    if (!(t = t && JSON.parse(t)) || t.expiration < i.getTime()) {
                        var o = {
                            value: n.id_session_one_hour,
                            expiration: i.getTime() + 3600000
                        };
                        y.D('vsl_session', JSON.stringify(o)), v.g(0, 8, !0);
                    } else
                        n.id_session_one_hour = t.value;
                }
            }, window.viously = {
                fn: {
                    addStyle: sonar.Q,
                    disconnect: sticky.H
                }
            }, document.getElementById('aJ2Yie7u') && (sonar.st(), sonar.et(), sonar.ot());
        }('https://s.kolplay.com/site/612/js/wgxpath.install.js', 'https://s.kolplay.com/player/886/css/player.css', 'https://s.kolplay.com/player/886/js/core.js', '.viously{position:relative;padding-bottom:56.25%;height:0;line-height:0;overflow:hidden;clear:both;background:#ddd;box-sizing:border-box}.viously-has-ui{padding-bottom:calc(56.25% + 24px)!important}.viously-sticked{z-index:2147483647;box-sizing:border-box;box-shadow:20px 20px 17px -15px rgba(0,0,0,.3)}.qc-cmp-ui-showing .viously-sticked{z-index:1000!important}.viously-unsticked{top:0;left:0;width:100%;height:100%;position:absolute}.viously-sticked,.viously-unsticked{margin:0!important}.viously-sticked-bottom-left,.viously-sticked-bottom-right,.viously-sticked-top-left,.viously-sticked-top-right{position:fixed!important}#viously-video-thumbnail{opacity:.3;position:relative}#viously-video-thumbnail img{width:100%}.viously #viously-video-thumbnail{top:0}@media (min-width:560px){.viously-has-ui .viously-sticked-bottom-left,.viously-has-ui .viously-sticked-bottom-right,.viously-has-ui .viously-sticked-top-left,.viously-has-ui .viously-sticked-top-right{width:520px!important;height:317px!important}.viously-sticked-bottom-left,.viously-sticked-bottom-right,.viously-sticked-top-left,.viously-sticked-top-right{width:520px!important;height:293px!important}.viously-sticked-bottom-left,.viously-sticked-top-left{left:14px}.viously-sticked-bottom-right,.viously-sticked-top-right{right:14px}.viously-sticked-top-left,.viously-sticked-top-right{top:14px}.viously-sticked-bottom-left,.viously-sticked-bottom-right{bottom:14px}}@media (max-width:560px){.viously-has-ui .viously-sticked-panoramic{top:0;left:0;right:0;width:100%;height:calc(100vw*9/16 + 24px);position:fixed!important}.viously-sticked-panoramic{top:0;left:0;right:0;width:100%;height:calc(100vw*9/16);position:fixed}.viously-sticked-top-left,.viously-sticked-top-right{top:5px}.viously-sticked-bottom-left,.viously-sticked-bottom-right{bottom:5px}}@media (max-width:560px) and (min-width:330px){.viously-has-ui .viously-sticked-bottom-left,.viously-has-ui .viously-sticked-bottom-right,.viously-has-ui .viously-sticked-top-left,.viously-has-ui .viously-sticked-top-right{width:330px!important;height:210px!important}.viously-sticked-bottom-left,.viously-sticked-bottom-right,.viously-sticked-top-left,.viously-sticked-top-right{width:330px!important;height:186px!important}}@media (max-width:560px) and (min-width:356px){.viously-sticked-bottom-left,.viously-sticked-top-left{left:5px}.viously-sticked-bottom-right,.viously-sticked-top-right{right:5px}}@media (max-width:356px){.viously-sticked-bottom-left,.viously-sticked-top-left{left:0}.viously-sticked-bottom-right,.viously-sticked-top-right{right:0}}@media (max-width:330px){.viously-sticked-bottom-left,.viously-sticked-bottom-right,.viously-sticked-top-left,.viously-sticked-top-right{width:100%;height:calc(100vw*9/16)}.viously-has-ui .viously-sticked-bottom-left,.viously-has-ui .viously-sticked-bottom-right,.viously-has-ui .viously-sticked-top-left,.viously-has-ui .viously-sticked-top-right{width:100%;height:calc(100vw*9/16 + 24px)}}', '<!DOCTYPE html><html><head><!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]--><meta charset="utf-8" /><link rel="icon" href="https://www.viously.com/favicon.ico"><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" name="viewport" /><meta content="noarchive" name="robots" /><meta content="noindex, nofollow" name="googlebot" /><style id="viously-critical-css">html,body{width:100%;height:100%;padding:0;margin:0;overflow:hidden;background:#ddd;}</style><link href="https://s.kolplay.com/player/886/css/player.css" rel="stylesheet" type="text/css" /></head><body class="player-body embed-player"><div id="viously-player-container"><div class="overlay" id="overlay"><div id="overlay-image"></div><div class="overlay-button"><div class="overlay-button-icon icon-spinner"></div><div class="overlay-button-icon icon-play"></div><div class="overlay-button-icon icon-pause"></div><div class="overlay-button-icon icon-replay"></div><div class="overlay-button-text" id="overlay-button-text"></div></div><div class="overlay-error" id="overlay-error"></div><div class="overlay-error" id="overlay-error-button"></div><div class="overlay-title" id="overlay-title"></div></div><div id="ad"><div id="ad-play-pause"></div><div id="ad-countdown"></div><div id="ad-skip-button"><div id="ad-skip-button-text"></div><div id="ad-skip-button-icon"></div></div><div id="ad-volume"></div><div id="ad-container"></div></div><div id="banner-container"><div id="banner"></div><div id="close-banner"><span id="close-banner-cross"></span></div></div><div id="unstick-button"></div><div id="viously-ui" class="inside"><div id="viously-ui-header"><span id="viously-ui-header-brand"><div id="viously-ui-header-brand-img-block"></div><div id="viously-ui-header-brand-text"></div></span><span id="viously-ui-video-title"><p></p></span></div></div><div class="c-player" id="player"><video preload="metadata" playsinline webkit-playsinline><source src="data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAv9tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAABgAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACKXRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAABgAAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAQAAAAQAAAEAAAAAAaFtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAB9AAAAMAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAFMbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEQc3RibAAAAGpzdHNkAAAAAAAAAAEAAABabXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAB9AAAAAAAA2ZXNkcwAAAAADgICAJQACAASAgIAXQBUAAAAAAD6AAAACXAWAgIAFFYhW5QAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAwAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAMAAAABAAAAIHN0c3oAAAAAAAAAAAAAAAMAAAAVAAAABAAAAAQAAAAUc3RjbwAAAAAAAAABAAADKwAAABpzZ3BkAQAAAHJvbGwAAAACAAAAAf//AAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAADAAAAAQAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTguMTIuMTAwAAAACGZyZWUAAAAlbWRhdN4CAExhdmM1OC4xOC4xMDAAAjBADgEYIAcBGCAH" type="video/mp4"><source src="data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=" type="video/webm"></video></div><div class="c-controls" id="controls"><div class="c-controls__background"></div><div class="c-seekBar" id="seekbar"><div class="c-seekBar__track" id="seekbar-track"></div><div class="c-seekBar__progress" id="seekbar-progress"></div><div class="c-seekBar__thumb" id="seekbar-thumb"></div></div><div class="c-controlBar"><div class="c-controlBar__leftZone"><div class="c-controlBar__button c-controlBar__button--playPause" id="play-pause"></div><div class="c-controlBar__timer" id="timer"><span id="timer-current"></span><span id="timer-separator"></span><span id="timer-duration"></span></div></div><div class="c-controlBar__rightZone"><div class="c-controlBar__button c-controlBar__button--report js-openReport"></div><div class="c-controlBar__button c-controlBar__button--mute" id="mute"><div class="c-volumeBar"><div class="c-volumeBar__wrapper" id="volumebar"><div class="c-volumeBar__track" id="volumebar-track"></div><div class="c-volumeBar__progress" id="volumebar-progress"></div><div class="c-volumeBar__thumb" id="volumebar-thumb"></div></div></div></div><div class="c-controlBar__button c-controlBar__button--fullscreen" id="fullscreen"></div><span class="c-controlBar__logo-container"><a class="c-controlBar__logo" href="https://www.viously.com/publishers?utm_source=wamiz&utm_medium=4&utm_campaign=player" target="_blank"></a></span></div></div></div><div id="related"><div id="related-container"><div class="related-progress"></div><div class="related-thumbnail"><span class="related-label"></span></div><div class="related-text"><div class="related-next"></div><div class="related-title"></div></div><div id="related-close"></div></div></div><div id="modal"><div class="button-close"><i class="icon20 icon-close-white-20"></i></div></div></div><div id="viously-display-container"><div id="viously-display-content"></div><div id="viously-display-close"><span>&times;</span></div></div></body></html>', [{
                'conf': {
                    'id_session_one_hour': 'af06e99cd5ea9d0e6b88bd500bbbe14d',
                    'user': {
                        'device': {
                            'type': 'desktop',
                            'browser': {
                                'name': 'Chrome',
                                'version': {
                                    'major': '83',
                                    'minor': '0'
                                }
                            },
                            'os': { 'name': 'MacOSX' }
                        },
                        'geoip': {
                            'continent_code': 'NA',
                            'country': {
                                'code': 'CA',
                                'name': 'Canada'
                            }
                        },
                        'language': 'en'
                    },
                    'page': {
                        'id_session_page': 'ba0e13b72ebb3c2057e99f79ed3fd5b6',
                        'audience_source': {
                            'id': '1',
                            'name': 'DEFAULT'
                        },
                        'domain': {
                            'id': '89',
                            'name': 'wamiz.com'
                        },
                        'referrer': {
                            'url': 'https://wamiz.com/',
                            'hostname': 'wamiz.com'
                        },
                        'tcf': {
                            'gdprApplies': false,
                            'tcString': '',
                            'addtlConsent': '',
                            'purpose': '',
                            'vendor': '',
                            'nbVendors': 0,
                            'consentType': 'unknown',
                            'cmp': {
                                'id': '',
                                'version': ''
                            }
                        },
                        'usp': {
                            'applies': false,
                            'uspString': '1---'
                        },
                        'url': 'https://wamiz.com/chiens/actu/chutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html'
                    },
                    'template': {
                        'advertising': {
                            'linear': {
                                'primary': true,
                                'viously': true,
                                'max_preroll_viously': 2,
                                'passback': true
                            },
                            'nonlinear': {
                                'event': 'always',
                                'position': 'bottom',
                                'size': 'all'
                            }
                        },
                        'autoplay': true,
                        'controls': {
                            'seek_bar': true,
                            'control_bar': {
                                'logo': true,
                                'button_play': true,
                                'video_timer': true,
                                'button_report': true,
                                'button_fullscreen': true,
                                'button_volume': true
                            }
                        },
                        'id': 'legacy__d_4',
                        'mute': true,
                        'sdk': {
                            'initial_position': 'default',
                            'placement': {
                                'xpath': '//*[@id="tLj3oZqiT69"]',
                                'xpath_type': 'replace'
                            },
                            'sticky': {
                                'event': 'none',
                                'position': 'topLeft',
                                'unstick': {
                                    'countdown': 0,
                                    'xpath': '',
                                    'cookie': {
                                        'enabled': false,
                                        'expiration_days': null
                                    }
                                },
                                'width': 'default',
                                'patch': {
                                    'top': null,
                                    'bottom': null,
                                    'left': null,
                                    'right': null,
                                    'panoramic': null,
                                    'zindex': null,
                                    'css': null,
                                    'js': null
                                }
                            }
                        },
                        'version': 0
                    },
                    'type': 'custom',
                    'advertising': {
                        'nonlinear': {
                            'dfp': {
                                'hash': 'ooWoh1ka',
                                'id_ssp': '3',
                                'id_vast_type': '28',
                                'name': 'NONLINEAR DFP BANNER',
                                'url': '/56274643,1252690/1856_banner_4',
                                'eips': 'NTNhOGE4NTdhZTI5ZTJiZWY1NWIwMDM0YTUzMWFhMjQ1MjQ5MWU4ZDAxZmUzY2Y2OGE0ZTI5YmUzMjExYzI3MisxNjI3NTU1MjQ5LjMzMTQrMw',
                                'placement': '1856_banner_4'
                            },
                            'outbrain': {
                                'hash': 'otbMeo0A',
                                'id_ssp': '12',
                                'id_vast_type': '29',
                                'name': 'NONLINEAR OUTBRAIN',
                                'url': '1856_outbrain_4',
                                'eips': 'YTZkMjQyZWJkOGU3YjJiZjViYWI5OTBlNjEzNTcwNGE5ZDBiNTJjM2ZiOTk3YjEwNjM3NDI2ZTVhOTAyMDZiMisxNjI3NTU1MjQ5LjMzMTQrNTk',
                                'placement': '1856_outbrain_4'
                            },
                            'dfp_edito': {
                                'hash': 'ooWoh1ka',
                                'id_ssp': '3',
                                'id_vast_type': '30',
                                'name': 'NONLINEAR DFP BANNER CUSTOM',
                                'url': '/56274643,1252690/1856_banner_edito_4',
                                'eips': 'NTNhOGE4NTdhZTI5ZTJiZWY1NWIwMDM0YTUzMWFhMjQ1MjQ5MWU4ZDAxZmUzY2Y2OGE0ZTI5YmUzMjExYzI3MisxNjI3NTU1MjQ5LjMzMTQrMw',
                                'placement': '1856_banner_edito_4'
                            }
                        },
                        'linear': {
                            'passback': {
                                'xhr': false,
                                'skippable': false,
                                'skip_ad_in': -1,
                                'name': 'EV297',
                                'id_vast_type': -2,
                                'id_ssp': -2,
                                'pf': 0,
                                'currency': 'EUR',
                                'hash': 'ce4Jeeng',
                                'url': 'https://pubads.g.doubleclick.net/gampad/live/ads?iu=/46980923/wamiz-video-p2&description_url=https%3A%2F%2Fwamiz.com%2F&tfcd=0&npa=0&sz=400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
                                'eips': 'MTAwMGEzOWU3OWQwNDQzM2ZiNTdiZjQ4MmY1YjU5NTViY2FkODRkOThkZjVhNTYxYjQ1MDAwNDZiM2UwMzJkOSsxNjI3NTU1MjQ5LjMwNzUrLTI',
                                'fee': 0,
                                'placement': '',
                                'can_mute': true,
                                'passback_viously': false
                            },
                            'pred': {
                                'vtr': {
                                    'disabled_features': [
                                        'template_type',
                                        'page_url'
                                    ],
                                    'dur': {
                                        '5': '88.19',
                                        '10': '88.19',
                                        '15': '81.45',
                                        '20': '76.25',
                                        '25': '72.26',
                                        '30': '67.69',
                                        '35': '44.9'
                                    },
                                    'kv': {
                                        'vsl_vtr_d5': '65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88',
                                        'vsl_vtr_d10': '65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88',
                                        'vsl_vtr_d15': '65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81',
                                        'vsl_vtr_d20': '65,66,67,68,69,70,71,72,73,74,75,76',
                                        'vsl_vtr_d25': '65,66,67,68,69,70,71,72',
                                        'vsl_vtr_d30': '65,66,67'
                                    }
                                }
                            }
                        }
                    },
                    'diffuser': {
                        'name': 'wamiz',
                        'uid': '1856'
                    },
                    'playlist': {
                        'id_session_playlist': '8e5ecece0d2e71dfc0feb35f22da48a4',
                        'id': null,
                        'videos': [
                            {
                                'id_session_video': '12766efe1187a67e878983a0dffbc204',
                                'category': {
                                    'id': '1',
                                    'name': 'animals'
                                },
                                'channel': {
                                    'id': '1uQIN4HJuQh',
                                    'name': 'News Chien'
                                },
                                'creator': {
                                    'name': 'wamiz',
                                    'uid': '1856'
                                },
                                'date': '2020-12-30 14:40:52',
                                'description': 'Cet amoureux des chiens a eu une idée incroyable en déneigeant devant chez lui. En 2 heures, il a construit un labyrinthe géant pour accueillir ses 21 toutous.\xA0',
                                'duration': 78,
                                'language': 'fr',
                                'parent': {
                                    'date': '2020-12-30 14:40:52',
                                    'vid': 'tLj3oZqiT69'
                                },
                                'tags': '',
                                'ratio': 'landscape',
                                'starttime': 0,
                                'endtime': 78,
                                'thumbnails': {
                                    'w240': 'https://i1.kolplay.com/tLj3oZqiT69/2-w240.jpg',
                                    'w320': 'https://i1.kolplay.com/tLj3oZqiT69/2-w320.jpg',
                                    'w620': 'https://i1.kolplay.com/tLj3oZqiT69/2-w620.jpg',
                                    'w960': 'https://i1.kolplay.com/tLj3oZqiT69/2-w960.jpg',
                                    'wfb': 'https://i1.kolplay.com/tLj3oZqiT69/2-wfb.jpg'
                                },
                                'title': 'Chutes de neige dans la nuit\xA0: il se lève et passe deux heures à créer un jeu exceptionnel pour ses 21 chiens\xA0!',
                                'url': 'https://www.viously.com/wamiz/tLj3oZqiT69',
                                'vid': 'tLj3oZqiT69',
                                'sources': [
                                    {
                                        'file': 'aHR0cHM6Ly93d3cudmlvdXNseS5jb20vdmlkZW8vaGxzL3RMajNvWnFpVDY5L2luZGV4Lm0zdTg%2Fc3Q9cks1Sy1TaUZtY0Mwd3dzTmNhamtkZyZlPTE2Mjc1NTg4NDk%3D',
                                        'label': 'Auto',
                                        'type': 'hls'
                                    },
                                    {
                                        'file': 'aHR0cHM6Ly92LmtvbHBsYXkuY29tL3RMajNvWnFpVDY5L2luZGV4Lm0zdTg%2Fc3Q9cks1Sy1TaUZtY0Mwd3dzTmNhamtkZyZlPTE2Mjc1NTg4NDk%3D',
                                        'label': 'Auto',
                                        'type': 'hls'
                                    },
                                    {
                                        'file': 'aHR0cHM6Ly92LmtvbHBsYXkuY29tL3RMajNvWnFpVDY5L3cyNDAubXA0P3N0PXpieXg4RWhacXNwWm85WVVod2xwdVEmZT0xNjI3NTU4ODQ5',
                                        'label': '240p SD',
                                        'type': 'mp4'
                                    },
                                    {
                                        'file': 'aHR0cHM6Ly92LmtvbHBsYXkuY29tL3RMajNvWnFpVDY5L3czNjAubXA0P3N0PXdrRTJ4QXBmTEJkZDlMRHpxVDBhUFEmZT0xNjI3NTU4ODQ5',
                                        'label': '360p SD',
                                        'type': 'mp4'
                                    },
                                    {
                                        'file': 'aHR0cHM6Ly92LmtvbHBsYXkuY29tL3RMajNvWnFpVDY5L3c0ODAubXA0P3N0PWNYOC1idnF6aVdvTklaTWhUV1dTX0EmZT0xNjI3NTU4ODQ5',
                                        'label': '480p SD',
                                        'type': 'mp4'
                                    },
                                    {
                                        'file': 'aHR0cHM6Ly92LmtvbHBsYXkuY29tL3RMajNvWnFpVDY5L3c3MjAubXA0P3N0PXJtSWw3VkdSMDE0SXNaN0UxRFRYa0EmZT0xNjI3NTU4ODQ5',
                                        'label': '720p HD',
                                        'type': 'mp4'
                                    }
                                ],
                                'user': {
                                    'url': 'https://www.viously.com/wamiz',
                                    'name': 'wamiz',
                                    'avatar_url': 'https://i0.kolplay.com/avatar/i947xMsQrCDY0RK1VuvapWHe8axI-w160.jpg'
                                },
                                'vasts': [
                                    {
                                        'xhr': true,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'FREEWHEEL ADSERVING',
                                        'id_vast_type': '22',
                                        'id_ssp': '10',
                                        'pf': 10,
                                        'currency': 'EUR',
                                        'hash': 'fwaB3m3',
                                        'url': 'https://ads.stickyadstv.com/www/delivery/swfIndex.php?reqType=AdsSetup&protocolVersion=3.0&zoneId=10104257&loc=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&_fw_us_privacy=1---',
                                        'eips': 'YmNkMzdmNDRiZTU1MGU4N2MxNmRlNTQ0YzlmZTllNGIwZjYwNjEwZTkyNWFiNzUzZTE1ZmFjNWFhNjE1ZmFhMCsxNjI3NTU1MjQ5LjMyNjErMzg',
                                        'fee': 0,
                                        'placement': '10104257',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '10.0' },
                                        'aer': 10.35
                                    },
                                    {
                                        'xhr': true,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'FREEWHEEL',
                                        'id_vast_type': '23',
                                        'id_ssp': '4',
                                        'pf': 7.9,
                                        'currency': 'EUR',
                                        'hash': 'aGei1ooB',
                                        'url': 'https://ads.stickyadstv.com/www/delivery/swfIndex.php?reqType=AdsSetup&protocolVersion=3.0&zoneId=9858241&loc=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&_fw_us_privacy=1---',
                                        'eips': 'OWE3MGY4ZTJjNjkxOWQ0ZTQwNmFiMjU3MWViNmVkOWY2YTIxOWU3N2ZhOGUzZmFhNmM3MDYwZjAyYzAyMGY3ZCsxNjI3NTU1MjQ5LjMyNjYrNQ',
                                        'fee': 0.00303,
                                        'placement': '9858241',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '13.5' },
                                        'aer': 13.75
                                    },
                                    {
                                        'xhr': false,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'DFP',
                                        'id_vast_type': '3',
                                        'id_ssp': '3',
                                        'pf': 7.38,
                                        'currency': 'EUR',
                                        'hash': 'ooWoh1ka',
                                        'url': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/56274643,1252690/1856_video_4&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&description_url=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&correlator=1542251948&us_privacy=1---',
                                        'eips': 'NTZkNTU0OGI2MGY1MmNmYWJjZTYwY2ZkMWY4ZWZiZjFjMjIxNmE0NjIzMGQwM2ViYjg0ODJlMmY1ZmY4MGI4YisxNjI3NTU1MjQ5LjMyNjkrMw',
                                        'fee': 0.00647,
                                        'placement': '1856_video_4',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': {
                                            'vsl_floor': 'legacy',
                                            'vsl_algo_rpm_floor': 'r|c:CA|d:1856',
                                            'vsl_aer': '8.0'
                                        },
                                        'aer': 8.44
                                    },
                                    {
                                        'xhr': true,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'FREEWHEEL',
                                        'id_vast_type': '4',
                                        'id_ssp': '4',
                                        'pf': 6.76,
                                        'currency': 'EUR',
                                        'hash': 'aGei1ooB',
                                        'url': 'https://ads.stickyadstv.com/www/delivery/swfIndex.php?reqType=AdsSetup&protocolVersion=3.0&zoneId=8814513&loc=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&_fw_us_privacy=1---',
                                        'eips': 'YTQyNDU2Y2ZmMjU5YTEwOTJlZWUyZTc4MDk5ZmU5ZTlmZTMzNmEzNGYyYzFhYmZhN2JlOWNmNzc5MDMyMGM5OSsxNjI3NTU1MjQ5LjMyNzMrNQ',
                                        'fee': 0.00303,
                                        'placement': '8814513',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '3.0' },
                                        'aer': 3.04
                                    },
                                    {
                                        'xhr': true,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'FREEWHEEL',
                                        'id_vast_type': '24',
                                        'id_ssp': '4',
                                        'pf': 6.69,
                                        'currency': 'EUR',
                                        'hash': 'aGei1ooB',
                                        'url': 'https://ads.stickyadstv.com/www/delivery/swfIndex.php?reqType=AdsSetup&protocolVersion=3.0&zoneId=11258657&loc=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&_fw_us_privacy=1---',
                                        'eips': 'MmY1Yzc2OTUyYjc1MWE5MzViNzNlNDZiZGIzYWZmYTAxMzNhZGE2NThiNGNmNTM1YmQyMWFhZDM1YTMxZWEzMCsxNjI3NTU1MjQ5LjMyNzcrNQ',
                                        'fee': 0.00303,
                                        'placement': '11258657',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '9.0' },
                                        'aer': 9.06
                                    },
                                    {
                                        'xhr': false,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'APPNEXUS',
                                        'id_vast_type': '16',
                                        'id_ssp': '6',
                                        'pf': 4.86,
                                        'currency': 'USD',
                                        'hash': 'lotuYi7o',
                                        'url': '16187449',
                                        'eips': 'MDM5NGJlODc0NDI5NGFmM2QzYTJiYTZhMzdkYTFjZTMwZmJlOGZmOGJiMTUyMzIzOTQ3M2UxZWNkMGQ0MDI5NCsxNjI3NTU1MjQ5LjMyODErMTI',
                                        'fee': 0,
                                        'placement': '16187449',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '8.0' },
                                        'aer': 8.09
                                    },
                                    {
                                        'xhr': false,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'APPNEXUS',
                                        'id_vast_type': '39',
                                        'id_ssp': '6',
                                        'pf': 4.08,
                                        'currency': 'USD',
                                        'hash': 'lotuYi7o',
                                        'url': '19429510',
                                        'eips': 'OWZiMDRmNjZjYWVjOWE4ZGNlMDQ0NTA5ODA1ZWRlYmZiZmM1MDY3NjY0ODZhNjgxMTM2OWNkNDdmMDgwNTVlMysxNjI3NTU1MjQ5LjMyODQrMTI',
                                        'fee': 0,
                                        'placement': '19429510',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '6.5' },
                                        'aer': 6.91
                                    },
                                    {
                                        'xhr': true,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'FREEWHEEL',
                                        'id_vast_type': '6',
                                        'id_ssp': '4',
                                        'pf': 2.68,
                                        'currency': 'EUR',
                                        'hash': 'aGei1ooB',
                                        'url': 'https://ads.stickyadstv.com/www/delivery/swfIndex.php?reqType=AdsSetup&protocolVersion=3.0&zoneId=8814561&loc=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&_fw_us_privacy=1---',
                                        'eips': 'YjM4Y2MyOGU2YWY2MWRkZjdhMTAyN2IwNGRkMWIzMTE4N2M4NGUxYmNjYWYzZTRhMzk0ZDI2ODEyZWY4ZjNjMSsxNjI3NTU1MjQ5LjMyODcrNQ',
                                        'fee': 0.00303,
                                        'placement': '8814561',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': { 'vsl_aer': '5.5' },
                                        'aer': 5.72
                                    },
                                    {
                                        'xhr': false,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'DFP',
                                        'id_vast_type': '25',
                                        'id_ssp': '3',
                                        'pf': 2.36,
                                        'currency': 'EUR',
                                        'hash': 'ooWoh1ka',
                                        'url': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/56274643,1252690/1856_video_4_ads&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&description_url=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&correlator=1485097763&us_privacy=1---',
                                        'eips': 'NmUxMTYyMDlhN2JlZDA1Y2YxNzBjNGEzZThkMWFhZjc1OGM2NjMxZjEzN2M0NjE2YjRjZmE2ODVjNTkxNTQ5NysxNjI3NTU1MjQ5LjMyOTErMw',
                                        'fee': 0.00647,
                                        'placement': '1856_video_4_ads',
                                        'can_mute': true,
                                        'passback_viously': true,
                                        'key_values': {
                                            'vsl_floor_version': 'a|C45',
                                            'vsl_floor': 'legacy',
                                            'vsl_algo_rpm_floor': 'a|c:CA|d:1856|f:leg',
                                            'vsl_aer': '5.5'
                                        },
                                        'aer': 5.7
                                    },
                                    {
                                        'xhr': false,
                                        'skippable': true,
                                        'skip_ad_in': 34,
                                        'name': 'DFP',
                                        'id_vast_type': '10',
                                        'id_ssp': '3',
                                        'pf': 2.26,
                                        'currency': 'EUR',
                                        'hash': 'ooWoh1ka',
                                        'url': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/56274643,1252690/1856_video_4_low&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&description_url=https%3A%2F%2Fwamiz.com%2Fchiens%2Factu%2Fchutes-neige-nuit-leve-passe-heures-creer-jeu-exceptionnel-21-chiens-19089.html&correlator=1913957542&us_privacy=1---',
                                        'eips': 'NDBhZTBmY2JhMDZhZDI0Y2YyNDRjYWQwM2M4NWZlNTljN2NhZDU3ZTg5NDRiZmJmNDY3MjUxNGEwOTk2NDJmNysxNjI3NTU1MjQ5LjMyOTUrMw',
                                        'fee': 0.00647,
                                        'placement': '1856_video_4_low',
                                        'can_mute': true,
                                        'passback_viously': false,
                                        'key_values': {
                                            'vsl_floor_version': 'C45',
                                            'vsl_floor': '10',
                                            'vsl_algo_rpm_floor': 'c:CA|d:1856|f:10',
                                            'vsl_aer': '17.5'
                                        },
                                        'aer': 17.65,
                                        'api_debug': { 'fill_rate': 0.19337455673872997 }
                                    }
                                ],
                                'pings': [
                                    [
                                        'uuphoothaag5Xor0ju5zoo0g.gif',
                                        'yio3eejae2xaebieS7zi.gif',
                                        'kae3Vuy9ig7oEiz8aer6.gif',
                                        'ue5vuR6coyozae3cah0geiyi.gif',
                                        'avipiequ8eeChoy7Raimaeng.gif',
                                        'Ohngei6och6zieNgeiWoh7fe.gif',
                                        'cheiDoh1aefoosh1Dive6get.gif',
                                        'oeh7taisaiGheewohna1.gif',
                                        'equoo3ieyaeph3buj8Ju.gif',
                                        'Mi0Aelias6keing5quaijaeX.gif',
                                        'ohbooShohF7nai4sae9o.gif',
                                        '',
                                        'Xeg2Oogheyow1Ua8oogaep8u.gif',
                                        'doo7ohx9Yo4uoshi1chaipiu.gif',
                                        'ysmckeuW8giR84W2qRm4.gif'
                                    ],
                                    [
                                        'bai4iepaing9siR5aitahche.gif',
                                        'Pohp4uWeicie3ua0cai3aido.gif',
                                        '',
                                        'TohNooN7dae7ahcheengiepu.gif',
                                        'OhTee9aitheev1ideech3ine.gif',
                                        'ae0aiSio2pohshah5rongeeg.gif',
                                        'eeK6leiteiveequeB1seerie.gif',
                                        'hohqu8Quoom5ainieVomai7b.gif',
                                        'dooxahGieyahfieyah4c.gif',
                                        '',
                                        'eSuy6Eog7hooc5chiedo.gif',
                                        'fus6arieraiboush8eerooFe.gif',
                                        '',
                                        'adforceresume.gif',
                                        'retryrequest.gif',
                                        'invalidxml.gif',
                                        'nextrequestfailed.gif',
                                        'nextnomorevideo.gif',
                                        'nextcancel.gif',
                                        'nextreload.gif',
                                        'nextresetended.gif',
                                        'nextresetplaylist.gif',
                                        'videofirstquartil.gif',
                                        'videosecondquartil.gif',
                                        'videothirdquartil.gif',
                                        'playerstatereplay.gif',
                                        'popstatenovid.gif',
                                        'bidsexpired.gif',
                                        'nextalreadyprefetch.gif',
                                        'bidoptimized.gif',
                                        'popstaterequestfailed.gif',
                                        'skip_ad_request.gif',
                                        'gdprerrorgoogle.gif',
                                        'hlsdestroy.gif',
                                        'nonlinear_slotonload.gif',
                                        'nonlinear_slotrequested.gif',
                                        'nonlinear_slotresponsereceived.gif',
                                        'nonlinear_refresh.gif',
                                        'nonlinear_clear.gif',
                                        'nonlinear_define.gif',
                                        'nonlinear_slotrenderended.gif',
                                        'grapeshot.gif',
                                        'logio1.gif',
                                        'logio2.gif',
                                        'logio3.gif',
                                        'logio4.gif',
                                        'logio5.gif',
                                        'tcf2.gif',
                                        'tcf2amp.gif',
                                        'ad_loaded.gif',
                                        'ad_start.gif',
                                        'ad_impression.gif',
                                        'ad_can_play.gif',
                                        'content_pause_requested.gif',
                                        'content_resume_requested.gif',
                                        'all_ads_completed.gif',
                                        'skip.gif',
                                        'user_close.gif',
                                        'complete.gif',
                                        'player_closed.gif',
                                        'aps_loaded.gif',
                                        'aps_retry.gif',
                                        'aps_fetch_request.gif',
                                        'aps_fetch_bid_received.gif',
                                        'aps_fetch_nobid_received.gif',
                                        'heavy_ad_intervention.gif',
                                        'vast_nb_companions.gif',
                                        'vast_companion_data.gif',
                                        'ItKoF1vSiXudxSwFfxpc.gif',
                                        'tcf2_wait_for_event_status.gif',
                                        'tcf2_wait_for_tc_string.gif',
                                        'tcf2_cmp_api_timeout.gif',
                                        'tcf2_cmp_api_wait_10_seconds.gif',
                                        'tcf2_no_tcfapi.gif',
                                        'player_amp_in_viewport.gif',
                                        'prebid_request.gif',
                                        'prebid_response.gif'
                                    ],
                                    [
                                        'ZkN4Nu.gif',
                                        'bpfhU7.gif',
                                        'Atr3DT.gif',
                                        'yL8KXK.gif',
                                        'Vjn6fU.gif',
                                        'Nv9nYE.gif',
                                        'TPMq7f.gif',
                                        'CCSeu9.gif',
                                        'bA5zKy.gif',
                                        '9geqJn.gif',
                                        'fX2sRK.gif',
                                        'KFhj6C.gif',
                                        'EmtG7j.gif',
                                        '8d7dkL.gif',
                                        'xJWJ5K.gif',
                                        'YMD7Hp.gif',
                                        'Hg2ctG.gif',
                                        '2JsgSt.gif',
                                        'mDcFq6.gif',
                                        'yYe6ek.gif',
                                        'BpAKz4.gif',
                                        'HQ7bPT.gif',
                                        'C5ZaHm.gif',
                                        'd7yYtB.gif',
                                        '9EnLEu.gif',
                                        'XSHh6q.gif',
                                        'n4sJTg.gif',
                                        'Qx7Kcq.gif',
                                        'bWw7Az.gif',
                                        'new4VF.gif',
                                        '6vZCjT.gif',
                                        'ub7GGm.gif',
                                        'A4mBmP.gif',
                                        'm8SRVY.gif',
                                        '3gePsB.gif',
                                        'Ma3rvG.gif',
                                        'qH8qdY.gif',
                                        'hte8jF.gif',
                                        'zZ9SRx.gif',
                                        'Ymhy6R.gif',
                                        'an7wUQ.gif',
                                        'ZcVtg3.gif',
                                        'rd5XbS.gif',
                                        'D6mGYb.gif',
                                        'U3MQGf.gif',
                                        'KYxU9g.gif',
                                        '4SfzpX.gif',
                                        'raUWL9.gif',
                                        'mz7fav.gif',
                                        'BCtFu8.gif',
                                        'uqrn2T.gif',
                                        'Ab9edY.gif',
                                        'aYKYE7.gif',
                                        'VukZk4.gif',
                                        'FthT6M.gif',
                                        '6eGfUT.gif',
                                        '8LpTKE.gif',
                                        'YXa8yK.gif',
                                        'xs9ncy.gif',
                                        'PZfE3J.gif',
                                        'ucE3ZW.gif',
                                        'R4TdpF.gif',
                                        'LdXu7C.gif',
                                        'P7du3F.gif',
                                        'CsdGYp.gif',
                                        'O2Kqg7.gif',
                                        'X6sLKW.gif',
                                        'x6qNTQ.gif',
                                        'p7mqrU.gif',
                                        'nSXVif.gif',
                                        'jnEUC0.gif',
                                        '56fReZ.gif',
                                        'XAzeTT.gif'
                                    ]
                                ],
                                'token': 'MTYyNzU1NTI0OS4zMzI3KzIxNjljZTMzMGZiNzFlYjQwNTViYzMxZjQyNjJmODkwM2I5MTI5ZTM1MThjYWFhMDhiMjlmZTEwMGRhYjdkYzQrMTg1NisxODU2Kzk1OCs5NDMrdExqM29acWlUNjkrODk'
                            },
                            {
                                'vid': 'KgJd0Rx1VUb',
                                'url': 'https://www.viously.com/wamiz/KgJd0Rx1VUb'
                            },
                            {
                                'vid': 'w0ImvC1Op7h',
                                'url': 'https://www.viously.com/wamiz/w0ImvC1Op7h'
                            },
                            {
                                'vid': 'BEA-MQB25gk',
                                'url': 'https://www.viously.com/wamiz/BEA-MQB25gk'
                            },
                            {
                                'vid': 'tmB2AKMe14z',
                                'url': 'https://www.viously.com/wamiz/tmB2AKMe14z'
                            },
                            {
                                'vid': 'N60MVwkHQb-',
                                'url': 'https://www.viously.com/wamiz/N60MVwkHQb-'
                            },
                            {
                                'vid': 'gk-ZbPmHj_q',
                                'url': 'https://www.viously.com/wamiz/gk-ZbPmHj_q'
                            },
                            {
                                'vid': 'PiHOy4z57fQ',
                                'url': 'https://www.viously.com/wamiz/PiHOy4z57fQ'
                            },
                            {
                                'vid': 'qsjxPKitMlT',
                                'url': 'https://www.viously.com/wamiz/qsjxPKitMlT'
                            },
                            {
                                'vid': 'pc0DSNY547J',
                                'url': 'https://www.viously.com/wamiz/pc0DSNY547J'
                            },
                            {
                                'vid': 'GWnJdQ9jroU',
                                'url': 'https://www.viously.com/wamiz/GWnJdQ9jroU'
                            },
                            {
                                'vid': 'pC8uezBEr21',
                                'url': 'https://www.viously.com/wamiz/pC8uezBEr21'
                            },
                            {
                                'vid': 'P_vYhFLZEUe',
                                'url': 'https://www.viously.com/wamiz/P_vYhFLZEUe'
                            },
                            {
                                'vid': 'llIV3dXZe7t',
                                'url': 'https://www.viously.com/wamiz/llIV3dXZe7t'
                            },
                            {
                                'vid': 'wa9kAmgjctK',
                                'url': 'https://www.viously.com/wamiz/wa9kAmgjctK'
                            },
                            {
                                'vid': 'AKh8JZGea95',
                                'url': 'https://www.viously.com/wamiz/AKh8JZGea95'
                            },
                            {
                                'vid': 'Kp_9iQ5nuh-',
                                'url': 'https://www.viously.com/wamiz/Kp_9iQ5nuh-'
                            },
                            {
                                'vid': 'pH5BwMLI-VJ',
                                'url': 'https://www.viously.com/wamiz/pH5BwMLI-VJ'
                            },
                            {
                                'vid': 'gvY6N8dzr0y',
                                'url': 'https://www.viously.com/wamiz/gvY6N8dzr0y'
                            },
                            {
                                'vid': 'grXRDFiHEbK',
                                'url': 'https://www.viously.com/wamiz/grXRDFiHEbK'
                            },
                            {
                                'vid': '5-2JK9IXMLS',
                                'url': 'https://www.viously.com/wamiz/5-2JK9IXMLS'
                            },
                            {
                                'vid': 'cZD4XEzuS1m',
                                'url': 'https://www.viously.com/wamiz/cZD4XEzuS1m'
                            },
                            {
                                'vid': 'ZouSYZQwTKI',
                                'url': 'https://www.viously.com/wamiz/ZouSYZQwTKI'
                            },
                            {
                                'vid': 'TRFAPXwfoVm',
                                'url': 'https://www.viously.com/wamiz/TRFAPXwfoVm'
                            },
                            {
                                'vid': 'DNcs3uA4ljk',
                                'url': 'https://www.viously.com/wamiz/DNcs3uA4ljk'
                            },
                            {
                                'vid': 'Tinu4zjmcd-',
                                'url': 'https://www.viously.com/wamiz/Tinu4zjmcd-'
                            },
                            {
                                'vid': 'Ql0xjCGnbPo',
                                'url': 'https://www.viously.com/wamiz/Ql0xjCGnbPo'
                            },
                            {
                                'vid': 'V_-8IQWFJzw',
                                'url': 'https://www.viously.com/wamiz/V_-8IQWFJzw'
                            },
                            {
                                'vid': 'ba2JvDbjdEx',
                                'url': 'https://www.viously.com/wamiz/ba2JvDbjdEx'
                            },
                            {
                                'vid': 'tuSEgIec026',
                                'url': 'https://www.viously.com/wamiz/tuSEgIec026'
                            },
                            {
                                'vid': 'n7qG63cxQa5',
                                'url': 'https://www.viously.com/wamiz/n7qG63cxQa5'
                            }
                        ],
                        'related_url': 'https://www.viously.com/sonar/json/'
                    },
                    'product': {
                        'id': 4,
                        'name': ''
                    },
                    'admin': {
                        'current_index': 0,
                        'expire_timeout': 300,
                        'prefetch_timeout': 10,
                        'progress_timeout': 6,
                        'request_timeout': 9,
                        'social_timeout': 3,
                        'prefetch_ads': true,
                        'optimize_ads': true,
                        'refetch_played_ads': true,
                        'ima_num_redirects': 10,
                        'ad_load_video_timeout': 12,
                        'ads_request_timeout': 12,
                        'skip_ad_request_timeout': 8,
                        'currencies_rate': {
                            'EUR': '1.00000',
                            'USD': '1.18070'
                        },
                        'ad_seller_id': '1856',
                        'no_tcfapi_retry': 10,
                        'pings_url': [
                            'https://p.kolplay.com/',
                            'https://k.kolplay.com/',
                            'https://e.viously.com/'
                        ],
                        'hls_url': 'https://s.kolplay.com/player/886/js/hls.js',
                        'report_url': 'https://www.viously.com/report',
                        'font_url': 'https://s.kolplay.com/player/886/fonts/player.woff',
                        'ima_sdk_url': 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
                        'prebid_url': 'https://s.kolplay.com/player/886/js/prebid.js',
                        'aps_url': 'https://s.kolplay.com/player/886/js/aps.js',
                        'freewheel_pixel_url': 'https://ads.stickyadstv.com/auto-user-sync',
                        'display_time_on_touch': 1500,
                        'autoplay_mute_on_gesture': true,
                        'lng': {
                            'oops': 'Oops, an unknown error has occurred!',
                            'update': 'Your browser is out of date, please update it.',
                            'loading': 'Loading...',
                            'remaining': 'Ad - This ad will end in xxs',
                            'remainingads': 'Ad %%INDEX%% of %%LENGTH%% - %%TIME%%',
                            'skipin': 'Skip in xxs',
                            'skiptext': 'Skip ad',
                            'goskip': 'Leave full screen mode to skip the ad \u25BA\u25BA',
                            'launch': 'Click on \u25BA to watch the video',
                            'relaunch': '&#8634; Relaunch',
                            'related': 'Up next'
                        }
                    },
                    'sticky': {
                        'width_large': 520,
                        'width_short': 330
                    }
                }
            }], [['\n\t\t(function(v){\n\t\t\tvar a = "@media screen and (min-width: 560px) and (max-width: 767px) {"+\n\t\t\t\t".viously-sticked-bottom-left,"+\n\t\t\t\t".viously-sticked-bottom-right {"+\n\t\t\t\t\t"top: 54px !important;"+\n\t\t\t\t"}"+\n\t\t\t\t".viously-sticked-top-left,"+\n\t\t\t\t".viously-sticked-top-right {"+\n\t\t\t\t\t"top: 63px !important;"+\n\t\t\t\t"}"+\n\t\t\t"}"+\n\t\t\t"@media screen and (max-width: 560px) {"+\n\t\t\t\t".viously-sticked-bottom-left,"+\n\t\t\t\t".viously-sticked-bottom-right {"+\n\t\t\t\t\t"top: 45px !important;"+\n\t\t\t\t"}"+\n\t\t\t"}"+\n\t\t\t"@media screen and (min-width: 767px) and (max-width: 956px) {"+\n\t\t\t\t".viously-sticked-top-left,"+\n\t\t\t\t".viously-sticked-top-right {"+\n\t\t\t\t\t"top: 112px !important;"+\n\t\t\t\t"}"+\n\t\t\t"}"+\n\t\t\t"@media screen and (min-width: 956px) {"+\n\t\t\t\t".viously-sticked-top-left,"+\n\t\t\t\t".viously-sticked-top-right {"+\n\t\t\t\t\t"top: 61px !important;"+\n\t\t\t\t"}"+\n\t\t\t"}"+"@media screen and (max-width: 560px) {"+\n\t\t\t".viously-sticked-panoramic {"+\n\t\t\t\t"top: 49px !important;"+\n\t\t\t"}"+\n\t\t"}"+"@media (max-width: 560px) {"+\n\t\t\t".viously-sticked-top-left,"+\n\t\t\t".viously-sticked-top-right {"+\n\t\t\t\t"top: 54px !important;"+\n\t\t\t"}"+\n\t\t"}"+"@media (max-width: 560px) {"+\n\t\t\t".viously-sticked-bottom-left,"+\n\t\t\t".viously-sticked-bottom-right {"+\n\t\t\t\t"bottom: 45px !important;"+\n\t\t\t"}"+\n\t\t"}";v.fn.addStyle(a, "viously-patch-sticky", document.body);\n\t\t}(viously));\n\t']], [
            'Phe8ahh9aerah2ahsh4e.gif',
            'poh4daeB6queeBau5pha.gif',
            'eiho9aiCuXae4hieVo9a.gif',
            'sdk_error_1.gif',
            'sdk_error_2.gif',
            'sdk_error_3.gif',
            'cookie_no_stick.gif',
            'heavy_ad_intervention.gif',
            'uuphoothaag5Xor0ju5zoo0g.gif'
        ]);
        !function () {
            var e, t, n, i, r = {
                    passive: !0,
                    capture: !0
                }, a = new Date(), o = function () {
                    i = [], t = -1, e = null, f(addEventListener);
                }, c = function (i, r) {
                    e || (e = r, t = i, n = new Date(), f(removeEventListener), u());
                }, u = function () {
                    if (t >= 0 && t < n - a) {
                        var r = {
                            entryType: 'first-input',
                            name: e.type,
                            target: e.target,
                            cancelable: e.cancelable,
                            startTime: e.timeStamp,
                            processingStart: e.timeStamp + t
                        };
                        i.forEach(function (e) {
                            e(r);
                        }), i = [];
                    }
                }, s = function (e) {
                    if (e.cancelable) {
                        var t = (e.timeStamp > 1000000000000 ? new Date() : performance.now()) - e.timeStamp;
                        'pointerdown' == e.type ? function (e, t) {
                            var n = function () {
                                    c(e, t), a();
                                }, i = function () {
                                    a();
                                }, a = function () {
                                    removeEventListener('pointerup', n, r), removeEventListener('pointercancel', i, r);
                                };
                            addEventListener('pointerup', n, r), addEventListener('pointercancel', i, r);
                        }(t, e) : c(t, e);
                    }
                }, f = function (e) {
                    [
                        'mousedown',
                        'keydown',
                        'touchstart',
                        'pointerdown'
                    ].forEach(function (t) {
                        return e(t, s, r);
                    });
                }, p = 'hidden' === document.visibilityState ? 0 : 1 / 0;
            addEventListener('visibilitychange', function e(t) {
                'hidden' === document.visibilityState && (p = t.timeStamp, removeEventListener('visibilitychange', e, !0));
            }, !0);
            o(), self.webVitals = {
                firstInputPolyfill: function (e) {
                    i.push(e), u();
                },
                resetFirstInputPolyfill: o,
                get firstHiddenTime() {
                    return p;
                }
            };
        }();
        !function (t, e) {
            'object' == typeof exports && 'undefined' != typeof module ? e(exports) : 'function' == typeof define && define.amd ? define(['exports'], e) : e((t = 'undefined' != typeof globalThis ? globalThis : t || self).webVitals = t.webVitals || {});
        }(this, function (t) {
            'use strict';
            var e = function (t, e) {
                    return {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        delta: 0,
                        entries: [],
                        id: 'v1-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1000000000000)
                    };
                }, n = function (t, e) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var n = new PerformanceObserver(function (t) {
                                return t.getEntries().map(e);
                            });
                            return n.observe({
                                type: t,
                                buffered: !0
                            }), n;
                        }
                    } catch (t) {
                    }
                }, i = !1, a = function (t, e) {
                    i || 'undefined' != typeof InstallTrigger || (addEventListener('beforeunload', function () {
                    }), i = !0);
                    addEventListener('visibilitychange', function n(i) {
                        'hidden' === document.visibilityState && (t(i), e && removeEventListener('visibilitychange', n, !0));
                    }, !0);
                }, o = function (t) {
                    addEventListener('pageshow', function (e) {
                        e.persisted && t(e);
                    }, !0);
                }, r = 'function' == typeof WeakSet ? new WeakSet() : new Set(), u = function (t, e, n) {
                    var i;
                    return function () {
                        e.value >= 0 && (n || r.has(e) || 'hidden' === document.visibilityState) && (e.delta = e.value - (i || 0), (e.delta || void 0 === i) && (i = e.value, t(e)));
                    };
                }, c = -1, s = function () {
                    a(function (t) {
                        var e = t.timeStamp;
                        c = e;
                    }, !0);
                }, f = function () {
                    return c < 0 && ((c = self.webVitals.firstHiddenTime) === 1 / 0 && s(), o(function () {
                        setTimeout(function () {
                            c = 'hidden' === document.visibilityState ? 0 : 1 / 0, s();
                        }, 0);
                    })), {
                        get timeStamp() {
                            return c;
                        }
                    };
                };
            t.getCLS = function (t, i) {
                var r, c = e('CLS', 0), s = function (t) {
                        t.hadRecentInput || (c.value += t.value, c.entries.push(t), r());
                    }, f = n('layout-shift', s);
                f && (r = u(t, c, i), a(function () {
                    f.takeRecords().map(s), r();
                }), o(function () {
                    c = e('CLS', 0), r = u(t, c, i);
                }));
            }, t.getFCP = function (t, i) {
                var a, c = f(), s = e('FCP'), d = n('paint', function (t) {
                        'first-contentful-paint' === t.name && (d && d.disconnect(), t.startTime < c.timeStamp && (s.value = t.startTime, s.entries.push(t), r.add(s), a()));
                    });
                d && (a = u(t, s, i), o(function (n) {
                    s = e('FCP'), a = u(t, s, i), requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            s.value = performance.now() - n.timeStamp, r.add(s), a();
                        });
                    });
                }));
            }, t.getFID = function (t, i) {
                var c, s = f(), d = e('FID'), l = function (t) {
                        t.startTime < s.timeStamp && (d.value = t.processingStart - t.startTime, d.entries.push(t), r.add(d), c());
                    }, m = n('first-input', l);
                c = u(t, d, i), m && a(function () {
                    m.takeRecords().map(l), m.disconnect();
                }, !0), m || window.webVitals.firstInputPolyfill(l), o(function () {
                    d = e('FID'), c = u(t, d, i), window.webVitals.resetFirstInputPolyfill(), window.webVitals.firstInputPolyfill(l);
                });
            }, t.getLCP = function (t, i) {
                var c, s = f(), d = e('LCP'), l = function (t) {
                        var e = t.startTime;
                        e < s.timeStamp && (d.value = e, d.entries.push(t)), c();
                    }, m = n('largest-contentful-paint', l);
                if (m) {
                    c = u(t, d, i);
                    var p = function () {
                        r.has(d) || (m.takeRecords().map(l), m.disconnect(), r.add(d), c());
                    };
                    [
                        'keydown',
                        'click'
                    ].forEach(function (t) {
                        addEventListener(t, p, {
                            once: !0,
                            capture: !0
                        });
                    }), a(p, !0), o(function (n) {
                        d = e('LCP'), c = u(t, d, i), requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                d.value = performance.now() - n.timeStamp, r.add(d), c();
                            });
                        });
                    });
                }
            }, t.getTTFB = function (t) {
                var n, i = e('TTFB');
                n = function () {
                    try {
                        var e = performance.getEntriesByType('navigation')[0] || function () {
                            var t = performance.timing, e = {
                                    entryType: 'navigation',
                                    startTime: 0
                                };
                            for (var n in t)
                                'navigationStart' !== n && 'toJSON' !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                            return e;
                        }();
                        i.value = i.delta = e.responseStart, i.entries = [e], t(i);
                    } catch (t) {
                    }
                }, 'complete' === document.readyState ? setTimeout(n, 0) : addEventListener('pageshow', n);
            }, Object.defineProperty(t, '__esModule', { value: !0 });
        });
        !function (t, r, c) {
            var o = document, a = o.head || o.getElementsByTagName('head')[0] || o.documentElement, i = o.getElementsByTagName('meta'), l = {
                    u: {},
                    t: {},
                    d: {},
                    pd: {},
                    l: {},
                    av: [],
                    ev: [],
                    i: {}
                }, e = {}, f = {
                    e: function (e) {
                        f.e.history = f.e.history || [], f.e.history.push(e), window.console, window.location.href.indexOf('viously_debug=1');
                    },
                    n: function (e, t, n) {
                        var o = c[e];
                        if (o) {
                            n = n || '';
                            var a = 'ts=' + Math.round(100 * performance.now()) / 100 + '&udsh=' + document.documentElement.clientHeight + '&udsw=' + document.documentElement.clientWidth + '&udso=' + (document.documentElement.clientWidth >= document.documentElement.clientHeight ? 'landscape' : 'portrait') + '&ul=' + navigator.language + '&pru=' + encodeURIComponent(document.referrer) + '&pu=' + encodeURIComponent(window.location.href) + '&ct=' + f.a();
                            new Image().src = r + o + '?' + a + n, 1 == t && (c[e] = !1);
                        }
                    },
                    s: function (e) {
                        var t = [];
                        for (var n in e)
                            e.hasOwnProperty(n) && t.push(n + '=' + encodeURIComponent(e[n]));
                        return t.join('&');
                    },
                    m: function (e) {
                        return 'string' == typeof e ? String.prototype.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') : e;
                    },
                    p: function (e, t) {
                        return e.classList ? e.classList.contains(t) : new RegExp('(^| )' + t + '( |$)', 'gi').test(e.className);
                    },
                    f: function (e) {
                        e = f.m(e);
                        var t = Date.parse(e);
                        return t === parseInt(t, 10) && t > new Date('1991-08-06').getTime() ? t : null;
                    },
                    a: function () {
                        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        return e && e.effectiveType ? e.effectiveType : 'unknown';
                    }
                }, n = {
                    g: function () {
                        for (var e = a.getElementsByTagName('link'), t = 0; t < e.length; t++)
                            if ('canonical' == e[t].getAttribute('rel')) {
                                l.u.c = e[t].getAttribute('href');
                                break;
                            }
                        for (var n = a.getElementsByTagName('meta'), o = 0; o < n.length; o++)
                            if ('og:url' == (n[o].getAttribute('name') || n[o].getAttribute('property'))) {
                                l.u.o = n[o].getAttribute('content');
                                break;
                            }
                        l.u.w = window.location.href, l.u.r = document.referrer;
                    },
                    b: function () {
                        o.getElementsByTagName('title').length && (l.t.title = f.m(o.getElementsByTagName('title')[0].innerText)), o.getElementsByTagName('h1').length && (l.t.h1 = f.m(o.getElementsByTagName('h1')[0].innerText)), o.documentElement.getAttribute('lang') && (l.l.lang = f.m(o.documentElement.getAttribute('lang'))), o.documentElement.getAttribute('xml:lang') && (l.l.xmllang = f.m(o.documentElement.getAttribute('xml:lang')));
                        var e = o.getElementsByTagName('time');
                        e.length && (e[0].getAttribute('content') && (l.pd.datepublished = f.f(e[0].getAttribute('content'))), e[0].getAttribute('datetime') && (l.pd.datepublished = f.f(e[0].getAttribute('datetime'))));
                        for (var t = 0; t < i.length; t++)
                            switch (i[t].getAttribute('itemprop') && (-1 < i[t].getAttribute('itemprop').toLowerCase().indexOf('published') || -1 < i[t].getAttribute('itemprop').toLowerCase().indexOf('upload')) && (l.pd.datepublished = f.f(i[t].getAttribute('content'))), (i[t].getAttribute('name') || i[t].getAttribute('property') || i[t].getAttribute('itemprop') || i[t].getAttribute('http-equiv') || '').toLowerCase()) {
                            case 'og:title':
                                l.t.og_title = f.m(i[t].getAttribute('content'));
                                break;
                            case 'twitter:title':
                                l.t.twitter_title = f.m(i[t].getAttribute('content'));
                                break;
                            case 'hdl':
                                l.t.hdl = f.m(i[t].getAttribute('content'));
                                break;
                            case 'description':
                                l.d.description = f.m(i[t].getAttribute('content'));
                                break;
                            case 'og:description':
                                l.d.og_description = f.m(i[t].getAttribute('content'));
                                break;
                            case 'twitter:description':
                                l.d.twitter_description = f.m(i[t].getAttribute('content'));
                                break;
                            case 'datepublished':
                                l.pd.datepublished = f.f(i[t].getAttribute('content'));
                                break;
                            case 'publish-date':
                                l.pd.publish_date = f.f(i[t].getAttribute('content'));
                                break;
                            case 'uploaddate':
                                l.pd.uploaddate = f.f(i[t].getAttribute('content'));
                                break;
                            case 'article:published_time':
                                l.pd.published_time = f.f(i[t].getAttribute('content'));
                                break;
                            case 'article:modified_time':
                                l.pd.modified_time = f.f(i[t].getAttribute('content'));
                                break;
                            case 'content-language':
                                l.l.content_language = f.m(i[t].getAttribute('content'));
                                break;
                            case 'language':
                                l.l.language = f.m(i[t].getAttribute('content'));
                                break;
                            case 'og:locale':
                                l.l.og_locale = f.m(i[t].getAttribute('content'));
                                break;
                            case 'og:image':
                                l.i.og_image = f.m(i[t].getAttribute('content'));
                            }
                        var n = o.querySelector('script[type="application/ld+json"]');
                        if (n) {
                            try {
                                n = JSON.parse(n.innerText);
                            } catch (e) {
                                n = {};
                            }
                            n.length ? n.some(function (e) {
                                n = e.datePublished;
                            }) : n = n.datePublished, n && (l.pd.microdata_datepublished = f.f(n));
                        }
                    },
                    h: function () {
                        for (var e = [].slice.call(document.getElementsByTagName('iframe')), t = [].slice.call(document.getElementsByTagName('video')), n = [
                                    'youtube.com/embed/',
                                    'dailymotion.com/embed/',
                                    'player.vimeo.com/video/',
                                    'player.twitch.tv/',
                                    'players.brightcove.net',
                                    'facebook.com/plugins/video.php',
                                    'content.jwplatform.com/players/',
                                    'ultimedia.com/deliver/generic/iframe/',
                                    'assets.nationalgeographic.com/modules-video/',
                                    'assets.ngeo.com/modules-video'
                                ], o = [
                                    'jw-video',
                                    'vjs-tech',
                                    'fp-engine'
                                ], a = 0, r = e.length; a < r; a++)
                            for (var c = 0, i = n.length; c < i; c++) {
                                var u = e[a].getAttribute('src');
                                (u = u || e[a].getAttribute('data-src')) && -1 < u.indexOf(n[c]) && ((-1 < u.indexOf(n[0]) || -1 < u.indexOf(n[1])) && (u = u.split('?')[0]), '/' == u[0] && '/' == u[1] && (u = 'https:' + u), l.ev.push(encodeURIComponent(u)));
                            }
                        for (var d = 0, m = t.length; d < m; d++)
                            for (var s = 0, p = o.length; s < p; s++)
                                f.p(t[d], o[s]) && l.ev.push(o[s]);
                    },
                    F: function () {
                        for (var e = [].concat.call([].slice.call(document.getElementsByClassName('viously'))), t = 0, n = e.length; t < n; t++)
                            e[t].id && l.av.push(e[t].id.substring(1));
                    },
                    k: function () {
                        return e.c = f.m(l.u.c) || '', e.o = f.m(l.u.o) || '', e.w = l.u.w || '', e.r = l.u.r || '', e.ex = !1, e.t = l.t.title || l.t.og_title || '', e.d = l.d.description || l.d.og_description || '', e.pd = l.pd.microdata_datepublished || l.pd.published_time || l.pd.datepublished || l.pd.publish_date || l.pd.uploaddate || l.pd.modified_time || '', e.l = l.l.content_language || l.l.language || l.l.lang || l.l.xmllang || l.l.og_locale || '', e.v = !!l.av.length || !!l.ev.length || !1, e.ev = l.ev.join(','), e.av = l.av.join(','), 1 < e.l.split('-').length && (e.l = e.l.split('-')[0]), 1 < e.l.split('_').length && (e.l = e.l.split('_')[0]), f.s(e);
                    },
                    y: function () {
                        var e = o.createElement('script');
                        e.id = 'rohQu9Ah', e.src = t + '/' + new Date().getTime() + '/mt?' + n.k(), a.insertBefore(e, a.lastChild);
                    },
                    x: function () {
                    },
                    C: function () {
                        window.onpagehide = function (e) {
                        };
                    }
                };
            o.getElementById('xieg6Sie') && (n.g(), n.b(), setTimeout(function () {
                n.h(), n.F(), n.y();
            }, 1000), n.x(), n.C());
        }('https://sonar.viously.com', 'https://e.viously.com/', [
            'bqtSeM.gif',
            'BKaUfB.gif',
            'rbAxyS.gif',
            'TtqKaa.gif',
            'LvebNC.gif',
            'xdCsKz.gif',
            'raUWL9.gif',
            'VsXmBs.gif'
        ]);
    }())
}