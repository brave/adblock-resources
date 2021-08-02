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
    const $___mock_b3a105678096e0ee = {};
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
    })($___mock_b3a105678096e0ee);
    (function () {
        !function (e) {
            function t(t) {
                for (var n, r, i = t[0], s = t[1], a = 0, u = []; a < i.length; a++)
                    r = i[a], Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]), o[r] = 0;
                for (n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
                for (c && c(t); u.length;)
                    u.shift()();
            }
            var n = {}, o = {
                    1: 0,
                    4: 0
                };
            function r(t) {
                if (n[t])
                    return n[t].exports;
                var o = n[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return e[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
            }
            r.e = function (e) {
                var t = [], n = o[e];
                if (0 !== n)
                    if (n)
                        t.push(n[2]);
                    else {
                        var i = new Promise(function (t, r) {
                            n = o[e] = [
                                t,
                                r
                            ];
                        });
                        t.push(n[2] = i);
                        var s, a = document.createElement('script');
                        a.charset = 'utf-8', a.timeout = 120, r.nc && a.setAttribute('nonce', r.nc), a.src = function (e) {
                            return r.p + '' + ({
                                2: 'polyfills',
                                5: 'vendors~polyfills'
                            }[e] || e) + '.bundle.js';
                        }(e);
                        var c = new Error();
                        s = function (t) {
                            a.onerror = a.onload = null, clearTimeout(u);
                            var n = o[e];
                            if (0 !== n) {
                                if (n) {
                                    var r = t && ('load' === t.type ? 'missing' : t.type), i = t && t.target && t.target.src;
                                    c.message = 'Loading chunk ' + e + ' failed.\n(' + r + ': ' + i + ')', c.name = 'ChunkLoadError', c.type = r, c.request = i, n[1](c);
                                }
                                o[e] = void 0;
                            }
                        };
                        var u = setTimeout(function () {
                            s({
                                type: 'timeout',
                                target: a
                            });
                        }, 120000);
                        a.onerror = a.onload = s, document.head.appendChild(a);
                    }
                return Promise.all(t);
            }, r.m = e, r.c = n, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                });
            }, r.r = function (e) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
            }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t)
                    return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: e
                    }), 2 & t && 'string' != typeof e)
                    for (var o in e)
                        r.d(n, o, function (t) {
                            return e[t];
                        }.bind(null, o));
                return n;
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return r.d(t, 'a', t), t;
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, r.p = 'https://gdpr.privacymanager.io/1.2.1/', r.oe = function (e) {
                throw console.error(e), e;
            };
            var i = window.wpJsonpLiverampGdprCmp = window.wpJsonpLiverampGdprCmp || [], s = i.push.bind(i);
            i.push = t, i = i.slice();
            for (var a = 0; a < i.length; a++)
                t(i[a]);
            var c = s;
            r(r.s = 12);
        }([
            function (e, t, n) {
                var o = n(19).TCStringV2;
                e.exports = { TCStringV2: o };
            },
            function (e, t, n) {
                e.exports = n(4).Promise;
            },
            function (e, t) {
                !function () {
                    if ('function' != typeof window.__tcfapi || window.__tcfapi && 'function' != typeof window.__tcfapi.start) {
                        var e, t = [], n = window, o = n.document, r = n.__tcfapi ? n.__tcfapi.start : function () {
                            };
                        if (!n.__tcfapi && function e() {
                                var t = !!n.frames.__tcfapiLocator;
                                if (!t)
                                    if (o.body) {
                                        var r = o.createElement('iframe');
                                        r.style.cssText = 'display:none', r.name = '__tcfapiLocator', o.body.appendChild(r);
                                    } else
                                        setTimeout(e, 5);
                                return !t;
                            }() || n.__tcfapi && !n.__tcfapi.start) {
                            var i = n.__tcfapi ? n.__tcfapi() : [];
                            t.push.apply(t, i), n.__tcfapi = function (n, o, r, i) {
                                var s = [
                                    n,
                                    o,
                                    r,
                                    i
                                ];
                                if (!s.length)
                                    return t;
                                if ('setGdprApplies' === s[0])
                                    s.length > 3 && 2 === parseInt(s[1], 10) && 'boolean' == typeof s[3] && (e = s[3], 'function' == typeof s[2] && s[2]('set', !0));
                                else if ('ping' === s[0]) {
                                    var a = {
                                        gdprApplies: e,
                                        cmpLoaded: !1,
                                        apiVersion: '2.0'
                                    };
                                    'function' == typeof s[2] && s[2](a, !0);
                                } else
                                    t.push(s);
                            }, n.__tcfapi.commandQueue = t, n.__tcfapi.start = r, n.addEventListener('message', function (e) {
                                var t = 'string' == typeof e.data, o = {};
                                try {
                                    o = t ? JSON.parse(e.data) : e.data;
                                } catch (e) {
                                }
                                var r = o.__tcfapiCall;
                                r && n.__tcfapi(r.command, r.version, function (n, o) {
                                    if (e.source) {
                                        var i = {
                                            __tcfapiReturn: {
                                                returnValue: n,
                                                success: o,
                                                callId: r.callId,
                                                command: r.command
                                            }
                                        };
                                        t && (i = JSON.stringify(i)), e.source.postMessage(i, '*');
                                    }
                                }, r.parameter);
                            }, !1);
                        }
                    }
                }();
            },
            function (e, t) {
                var n;
                n = function () {
                    return this;
                }();
                try {
                    n = n || new Function('return this')();
                } catch (e) {
                    'object' == typeof window && (n = window);
                }
                e.exports = n;
            },
            function (e, t, n) {
                (function (t, o) {
                    var r;
                    r = function () {
                        'use strict';
                        function e(e) {
                            return 'function' == typeof e;
                        }
                        var r = Array.isArray ? Array.isArray : function (e) {
                                return '[object Array]' === Object.prototype.toString.call(e);
                            }, i = 0, s = void 0, a = void 0, c = function (e, t) {
                                g[i] = e, g[i + 1] = t, 2 === (i += 2) && (a ? a(y) : C());
                            }, u = 'undefined' != typeof window ? window : void 0, l = u || {}, d = l.MutationObserver || l.WebKitMutationObserver, p = 'undefined' == typeof self && void 0 !== t && '[object process]' === {}.toString.call(t), f = 'undefined' != typeof Uint8ClampedArray && 'undefined' != typeof importScripts && 'undefined' != typeof MessageChannel;
                        function h() {
                            var e = setTimeout;
                            return function () {
                                return e(y, 1);
                            };
                        }
                        var g = new Array(1000);
                        function y() {
                            for (var e = 0; e < i; e += 2)
                                (0, g[e])(g[e + 1]), g[e] = void 0, g[e + 1] = void 0;
                            i = 0;
                        }
                        var m, v, b, w, C = void 0;
                        function S(e, t) {
                            var n = arguments, o = this, r = new this.constructor(L);
                            void 0 === r[T] && N(r);
                            var i, s = o._state;
                            return s ? (i = n[s - 1], c(function () {
                                return M(s, r, i, o._result);
                            })) : E(o, r, e, t), r;
                        }
                        function P(e) {
                            if (e && 'object' == typeof e && e.constructor === this)
                                return e;
                            var t = new this(L);
                            return k(t, e), t;
                        }
                        p ? C = function () {
                            return t.nextTick(y);
                        } : d ? (v = 0, b = new d(y), w = document.createTextNode(''), b.observe(w, { characterData: !0 }), C = function () {
                            w.data = v = ++v % 2;
                        }) : f ? ((m = new MessageChannel()).port1.onmessage = y, C = function () {
                            return m.port2.postMessage(0);
                        }) : C = void 0 === u ? function () {
                            try {
                                var e = n(6);
                                return s = e.runOnLoop || e.runOnContext, function () {
                                    s(y);
                                };
                            } catch (e) {
                                return h();
                            }
                        }() : h();
                        var T = Math.random().toString(36).substring(16);
                        function L() {
                        }
                        var O = new B();
                        function A(e) {
                            try {
                                return e.then;
                            } catch (e) {
                                return O.error = e, O;
                            }
                        }
                        function I(t, n, o) {
                            n.constructor === t.constructor && o === S && n.constructor.resolve === P ? function (e, t) {
                                1 === t._state ? x(e, t._result) : 2 === t._state ? j(e, t._result) : E(t, void 0, function (t) {
                                    return k(e, t);
                                }, function (t) {
                                    return j(e, t);
                                });
                            }(t, n) : o === O ? j(t, O.error) : void 0 === o ? x(t, n) : e(o) ? function (e, t, n) {
                                c(function (e) {
                                    var o = !1, r = function (e, t, n, o) {
                                            try {
                                                e.call(t, n, o);
                                            } catch (e) {
                                                return e;
                                            }
                                        }(n, t, function (n) {
                                            o || (o = !0, t !== n ? k(e, n) : x(e, n));
                                        }, function (t) {
                                            o || (o = !0, j(e, t));
                                        }, e._label);
                                    !o && r && (o = !0, j(e, r));
                                }, e);
                            }(t, n, o) : x(t, n);
                        }
                        function k(e, t) {
                            var n;
                            e === t ? j(e, new TypeError('You cannot resolve a promise with itself')) : 'function' == typeof (n = t) || 'object' == typeof n && null !== n ? I(e, t, A(t)) : x(e, t);
                        }
                        function D(e) {
                            e._onerror && e._onerror(e._result), V(e);
                        }
                        function x(e, t) {
                            void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && c(V, e));
                        }
                        function j(e, t) {
                            void 0 === e._state && (e._state = 2, e._result = t, c(D, e));
                        }
                        function E(e, t, n, o) {
                            var r = e._subscribers, i = r.length;
                            e._onerror = null, r[i] = t, r[i + 1] = n, r[i + 2] = o, 0 === i && e._state && c(V, e);
                        }
                        function V(e) {
                            var t = e._subscribers, n = e._state;
                            if (0 !== t.length) {
                                for (var o = void 0, r = void 0, i = e._result, s = 0; s < t.length; s += 3)
                                    o = t[s], r = t[s + n], o ? M(n, o, r, i) : r(i);
                                e._subscribers.length = 0;
                            }
                        }
                        function B() {
                            this.error = null;
                        }
                        var _ = new B();
                        function M(t, n, o, r) {
                            var i = e(o), s = void 0, a = void 0, c = void 0, u = void 0;
                            if (i) {
                                if ((s = function (e, t) {
                                        try {
                                            return e(t);
                                        } catch (e) {
                                            return _.error = e, _;
                                        }
                                    }(o, r)) === _ ? (u = !0, a = s.error, s = null) : c = !0, n === s)
                                    return void j(n, new TypeError('A promises callback cannot return that same promise.'));
                            } else
                                s = r, c = !0;
                            void 0 !== n._state || (i && c ? k(n, s) : u ? j(n, a) : 1 === t ? x(n, s) : 2 === t && j(n, s));
                        }
                        var U = 0;
                        function N(e) {
                            e[T] = U++, e._state = void 0, e._result = void 0, e._subscribers = [];
                        }
                        function F(e, t) {
                            this._instanceConstructor = e, this.promise = new e(L), this.promise[T] || N(this.promise), r(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && x(this.promise, this._result))) : j(this.promise, new Error('Array Methods must be provided an Array'));
                        }
                        function R(e) {
                            this[T] = U++, this._result = this._state = void 0, this._subscribers = [], L !== e && ('function' != typeof e && function () {
                                throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                            }(), this instanceof R ? function (e, t) {
                                try {
                                    t(function (t) {
                                        k(e, t);
                                    }, function (t) {
                                        j(e, t);
                                    });
                                } catch (t) {
                                    j(e, t);
                                }
                            }(this, e) : function () {
                                throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
                            }());
                        }
                        function z() {
                            var e = void 0;
                            if (void 0 !== o)
                                e = o;
                            else if ('undefined' != typeof self)
                                e = self;
                            else
                                try {
                                    e = Function('return this')();
                                } catch (e) {
                                    throw new Error('polyfill failed because global object is unavailable in this environment');
                                }
                            var t = e.Promise;
                            if (t) {
                                var n = null;
                                try {
                                    n = Object.prototype.toString.call(t.resolve());
                                } catch (e) {
                                }
                                if ('[object Promise]' === n && !t.cast)
                                    return;
                            }
                            e.Promise = R;
                        }
                        return F.prototype._enumerate = function () {
                            for (var e = this.length, t = this._input, n = 0; void 0 === this._state && n < e; n++)
                                this._eachEntry(t[n], n);
                        }, F.prototype._eachEntry = function (e, t) {
                            var n = this._instanceConstructor, o = n.resolve;
                            if (o === P) {
                                var r = A(e);
                                if (r === S && void 0 !== e._state)
                                    this._settledAt(e._state, t, e._result);
                                else if ('function' != typeof r)
                                    this._remaining--, this._result[t] = e;
                                else if (n === R) {
                                    var i = new n(L);
                                    I(i, e, r), this._willSettleAt(i, t);
                                } else
                                    this._willSettleAt(new n(function (t) {
                                        return t(e);
                                    }), t);
                            } else
                                this._willSettleAt(o(e), t);
                        }, F.prototype._settledAt = function (e, t, n) {
                            var o = this.promise;
                            void 0 === o._state && (this._remaining--, 2 === e ? j(o, n) : this._result[t] = n), 0 === this._remaining && x(o, this._result);
                        }, F.prototype._willSettleAt = function (e, t) {
                            var n = this;
                            E(e, void 0, function (e) {
                                return n._settledAt(1, t, e);
                            }, function (e) {
                                return n._settledAt(2, t, e);
                            });
                        }, R.all = function (e) {
                            return new F(this, e).promise;
                        }, R.race = function (e) {
                            var t = this;
                            return r(e) ? new t(function (n, o) {
                                for (var r = e.length, i = 0; i < r; i++)
                                    t.resolve(e[i]).then(n, o);
                            }) : new t(function (e, t) {
                                return t(new TypeError('You must pass an array to race.'));
                            });
                        }, R.resolve = P, R.reject = function (e) {
                            var t = new this(L);
                            return j(t, e), t;
                        }, R._setScheduler = function (e) {
                            a = e;
                        }, R._setAsap = function (e) {
                            c = e;
                        }, R._asap = c, R.prototype = {
                            constructor: R,
                            then: S,
                            catch: function (e) {
                                return this.then(null, e);
                            }
                        }, z(), R.polyfill = z, R.Promise = R, R;
                    }, e.exports = r();
                }.call(this, n(5), n(3)));
            },
            function (e, t) {
                var n, o, r = e.exports = {};
                function i() {
                    throw new Error('setTimeout has not been defined');
                }
                function s() {
                    throw new Error('clearTimeout has not been defined');
                }
                function a(e) {
                    if (n === setTimeout)
                        return setTimeout(e, 0);
                    if ((n === i || !n) && setTimeout)
                        return n = setTimeout, setTimeout(e, 0);
                    try {
                        return n(e, 0);
                    } catch (t) {
                        try {
                            return n.call(null, e, 0);
                        } catch (t) {
                            return n.call(this, e, 0);
                        }
                    }
                }
                !function () {
                    try {
                        n = 'function' == typeof setTimeout ? setTimeout : i;
                    } catch (e) {
                        n = i;
                    }
                    try {
                        o = 'function' == typeof clearTimeout ? clearTimeout : s;
                    } catch (e) {
                        o = s;
                    }
                }();
                var c, u = [], l = !1, d = -1;
                function p() {
                    l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && f());
                }
                function f() {
                    if (!l) {
                        var e = a(p);
                        l = !0;
                        for (var t = u.length; t;) {
                            for (c = u, u = []; ++d < t;)
                                c && c[d].run();
                            d = -1, t = u.length;
                        }
                        c = null, l = !1, function (e) {
                            if (o === clearTimeout)
                                return clearTimeout(e);
                            if ((o === s || !o) && clearTimeout)
                                return o = clearTimeout, clearTimeout(e);
                            try {
                                o(e);
                            } catch (t) {
                                try {
                                    return o.call(null, e);
                                } catch (t) {
                                    return o.call(this, e);
                                }
                            }
                        }(e);
                    }
                }
                function h(e, t) {
                    this.fun = e, this.array = t;
                }
                function g() {
                }
                r.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                    u.push(new h(e, t)), 1 !== u.length || l || a(f);
                }, h.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }, r.title = 'browser', r.browser = !0, r.env = {}, r.argv = [], r.version = '', r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function (e) {
                    return [];
                }, r.binding = function (e) {
                    throw new Error('process.binding is not supported');
                }, r.cwd = function () {
                    return '/';
                }, r.chdir = function (e) {
                    throw new Error('process.chdir is not supported');
                }, r.umask = function () {
                    return 0;
                };
            },
            function (e, t) {
            },
            function (e, t, n) {
                'use strict';
                n.r(t), n.d(t, 'Headers', function () {
                    return h;
                }), n.d(t, 'Request', function () {
                    return C;
                }), n.d(t, 'Response', function () {
                    return P;
                }), n.d(t, 'DOMException', function () {
                    return L;
                }), n.d(t, 'fetch', function () {
                    return O;
                });
                var o = 'undefined' != typeof globalThis && globalThis || 'undefined' != typeof self && self || void 0 !== o && o, r = 'URLSearchParams' in o, i = 'Symbol' in o && 'iterator' in Symbol, s = 'FileReader' in o && 'Blob' in o && function () {
                        try {
                            return new Blob(), !0;
                        } catch (e) {
                            return !1;
                        }
                    }(), a = 'FormData' in o, c = 'ArrayBuffer' in o;
                if (c)
                    var u = [
                            '[object Int8Array]',
                            '[object Uint8Array]',
                            '[object Uint8ClampedArray]',
                            '[object Int16Array]',
                            '[object Uint16Array]',
                            '[object Int32Array]',
                            '[object Uint32Array]',
                            '[object Float32Array]',
                            '[object Float64Array]'
                        ], l = ArrayBuffer.isView || function (e) {
                            return e && u.indexOf(Object.prototype.toString.call(e)) > -1;
                        };
                function d(e) {
                    if ('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e)
                        throw new TypeError('Invalid character in header field name: "' + e + '"');
                    return e.toLowerCase();
                }
                function p(e) {
                    return 'string' != typeof e && (e = String(e)), e;
                }
                function f(e) {
                    var t = {
                        next: function () {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            };
                        }
                    };
                    return i && (t[Symbol.iterator] = function () {
                        return t;
                    }), t;
                }
                function h(e) {
                    this.map = {}, e instanceof h ? e.forEach(function (e, t) {
                        this.append(t, e);
                    }, this) : Array.isArray(e) ? e.forEach(function (e) {
                        this.append(e[0], e[1]);
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t]);
                    }, this);
                }
                function g(e) {
                    if (e.bodyUsed)
                        return Promise.reject(new TypeError('Already read'));
                    e.bodyUsed = !0;
                }
                function y(e) {
                    return new Promise(function (t, n) {
                        e.onload = function () {
                            t(e.result);
                        }, e.onerror = function () {
                            n(e.error);
                        };
                    });
                }
                function m(e) {
                    var t = new FileReader(), n = y(t);
                    return t.readAsArrayBuffer(e), n;
                }
                function v(e) {
                    if (e.slice)
                        return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer;
                }
                function b() {
                    return this.bodyUsed = !1, this._initBody = function (e) {
                        var t;
                        this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? 'string' == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c && s && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = v(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = v(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = '', this.headers.get('content-type') || ('string' == typeof e ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
                    }, s && (this.blob = function () {
                        var e = g(this);
                        if (e)
                            return e;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error('could not read FormData body as blob');
                        return Promise.resolve(new Blob([this._bodyText]));
                    }, this.arrayBuffer = function () {
                        if (this._bodyArrayBuffer) {
                            var e = g(this);
                            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
                        }
                        return this.blob().then(m);
                    }), this.text = function () {
                        var e, t, n, o = g(this);
                        if (o)
                            return o;
                        if (this._bodyBlob)
                            return e = this._bodyBlob, t = new FileReader(), n = y(t), t.readAsText(e), n;
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function (e) {
                                for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++)
                                    n[o] = String.fromCharCode(t[o]);
                                return n.join('');
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error('could not read FormData body as text');
                        return Promise.resolve(this._bodyText);
                    }, a && (this.formData = function () {
                        return this.text().then(S);
                    }), this.json = function () {
                        return this.text().then(JSON.parse);
                    }, this;
                }
                h.prototype.append = function (e, t) {
                    e = d(e), t = p(t);
                    var n = this.map[e];
                    this.map[e] = n ? n + ', ' + t : t;
                }, h.prototype.delete = function (e) {
                    delete this.map[d(e)];
                }, h.prototype.get = function (e) {
                    return e = d(e), this.has(e) ? this.map[e] : null;
                }, h.prototype.has = function (e) {
                    return this.map.hasOwnProperty(d(e));
                }, h.prototype.set = function (e, t) {
                    this.map[d(e)] = p(t);
                }, h.prototype.forEach = function (e, t) {
                    for (var n in this.map)
                        this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
                }, h.prototype.keys = function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push(n);
                    }), f(e);
                }, h.prototype.values = function () {
                    var e = [];
                    return this.forEach(function (t) {
                        e.push(t);
                    }), f(e);
                }, h.prototype.entries = function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push([
                            n,
                            t
                        ]);
                    }), f(e);
                }, i && (h.prototype[Symbol.iterator] = h.prototype.entries);
                var w = [
                    'DELETE',
                    'GET',
                    'HEAD',
                    'OPTIONS',
                    'POST',
                    'PUT'
                ];
                function C(e, t) {
                    if (!(this instanceof C))
                        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    var n, o, r = (t = t || {}).body;
                    if (e instanceof C) {
                        if (e.bodyUsed)
                            throw new TypeError('Already read');
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0);
                    } else
                        this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || 'same-origin', !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (n = t.method || this.method || 'GET', o = n.toUpperCase(), w.indexOf(o) > -1 ? o : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ('GET' === this.method || 'HEAD' === this.method) && r)
                        throw new TypeError('Body not allowed for GET or HEAD requests');
                    if (this._initBody(r), !('GET' !== this.method && 'HEAD' !== this.method || 'no-store' !== t.cache && 'no-cache' !== t.cache)) {
                        var i = /([?&])_=[^&]*/;
                        if (i.test(this.url))
                            this.url = this.url.replace(i, '$1_=' + new Date().getTime());
                        else {
                            this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
                        }
                    }
                }
                function S(e) {
                    var t = new FormData();
                    return e.trim().split('&').forEach(function (e) {
                        if (e) {
                            var n = e.split('='), o = n.shift().replace(/\+/g, ' '), r = n.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(o), decodeURIComponent(r));
                        }
                    }), t;
                }
                function P(e, t) {
                    if (!(this instanceof P))
                        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    t || (t = {}), this.type = 'default', this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? '' : '' + t.statusText, this.headers = new h(t.headers), this.url = t.url || '', this._initBody(e);
                }
                C.prototype.clone = function () {
                    return new C(this, { body: this._bodyInit });
                }, b.call(C.prototype), b.call(P.prototype), P.prototype.clone = function () {
                    return new P(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new h(this.headers),
                        url: this.url
                    });
                }, P.error = function () {
                    var e = new P(null, {
                        status: 0,
                        statusText: ''
                    });
                    return e.type = 'error', e;
                };
                var T = [
                    301,
                    302,
                    303,
                    307,
                    308
                ];
                P.redirect = function (e, t) {
                    if (-1 === T.indexOf(t))
                        throw new RangeError('Invalid status code');
                    return new P(null, {
                        status: t,
                        headers: { location: e }
                    });
                };
                var L = o.DOMException;
                try {
                    new L();
                } catch (e) {
                    (L = function (e, t) {
                        this.message = e, this.name = t;
                        var n = Error(e);
                        this.stack = n.stack;
                    }).prototype = Object.create(Error.prototype), L.prototype.constructor = L;
                }
                function O(e, t) {
                    return new Promise(function (n, r) {
                        var i = new C(e, t);
                        if (i.signal && i.signal.aborted)
                            return r(new L('Aborted', 'AbortError'));
                        var a = new XMLHttpRequest();
                        function u() {
                            a.abort();
                        }
                        a.onload = function () {
                            var e, t, o = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: (e = a.getAllResponseHeaders() || '', t = new h(), e.replace(/\r?\n[\t ]+/g, ' ').split('\r').map(function (e) {
                                        return 0 === e.indexOf('\n') ? e.substr(1, e.length) : e;
                                    }).forEach(function (e) {
                                        var n = e.split(':'), o = n.shift().trim();
                                        if (o) {
                                            var r = n.join(':').trim();
                                            t.append(o, r);
                                        }
                                    }), t)
                                };
                            o.url = 'responseURL' in a ? a.responseURL : o.headers.get('X-Request-URL');
                            var r = 'response' in a ? a.response : a.responseText;
                            setTimeout(function () {
                                n(new P(r, o));
                            }, 0);
                        }, a.onerror = function () {
                            setTimeout(function () {
                                r(new TypeError('Network request failed'));
                            }, 0);
                        }, a.ontimeout = function () {
                            setTimeout(function () {
                                r(new TypeError('Network request failed'));
                            }, 0);
                        }, a.onabort = function () {
                            setTimeout(function () {
                                r(new L('Aborted', 'AbortError'));
                            }, 0);
                        }, a.open(i.method, function (e) {
                            try {
                                return '' === e && o.location.href ? o.location.href : e;
                            } catch (t) {
                                return e;
                            }
                        }(i.url), !0), 'include' === i.credentials ? a.withCredentials = !0 : 'omit' === i.credentials && (a.withCredentials = !1), 'responseType' in a && (s ? a.responseType = 'blob' : c && i.headers.get('Content-Type') && -1 !== i.headers.get('Content-Type').indexOf('application/octet-stream') && (a.responseType = 'arraybuffer')), !t || 'object' != typeof t.headers || t.headers instanceof h ? i.headers.forEach(function (e, t) {
                            a.setRequestHeader(t, e);
                        }) : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                            a.setRequestHeader(e, p(t.headers[e]));
                        }), i.signal && (i.signal.addEventListener('abort', u), a.onreadystatechange = function () {
                            4 === a.readyState && i.signal.removeEventListener('abort', u);
                        }), a.send(void 0 === i._bodyInit ? null : i._bodyInit);
                    });
                }
                O.polyfill = !0, o.fetch || (o.fetch = O, o.Headers = h, o.Request = C, o.Response = P);
            },
            function (e, t) {
                function n(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '0', n = '', o = 0; o < e; o += 1)
                        n += t;
                    return n;
                }
                e.exports = {
                    padLeft: function (e, t) {
                        return n(Math.max(0, t)) + e;
                    },
                    padRight: function (e, t) {
                        return e + n(Math.max(0, t));
                    },
                    getMaxListElement: function (e) {
                        var t = 0;
                        return (e || []).forEach(function (e) {
                            e > t && (t = e);
                        }), t;
                    }
                };
            },
            function (e, t, n) {
                var o = n(26), r = n(27);
                e.exports = function (e, t, n) {
                    var i = t && n || 0;
                    'string' == typeof e && (t = 'binary' === e ? new Array(16) : null, e = null);
                    var s = (e = e || {}).random || (e.rng || o)();
                    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
                        for (var a = 0; a < 16; ++a)
                            t[i + a] = s[a];
                    return t || r(s);
                };
            },
            function (e, t, n) {
                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach(function (t) {
                            i(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function i(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var s = n(13), a = {
                        generate: function (e) {
                            return r(r({}, s), {}, {
                                env: '',
                                cmpVersion: e,
                                vendorListLocation: './vendor-list.json',
                                purposeListLocalePath: 'https://vendors-dev.console.fktr.io/',
                                customVendorListPath: 'https://gdpr-wrapper-dev.console.fktr.io/gdpr/',
                                globalConsentLocation: './portal.html',
                                sharedConsentLocation: './portal.html',
                                consentLoggingURL: 'https://gdpr-web-logs-dev.console.fktr.io/kinesis/streams/tcf-web-audit-logs-stream-dev/records',
                                dailyActiveUserLoggingURL: 'https://gdpr-web-dau-dev.console.fktr.io/kinesis/streams/tcf-web-daily-active-users-dev/records',
                                geoTargetingUrl: 'https://geo-dev.console.fktr.io',
                                preferenceLinkURL: 'https://data-api.dev.preferencelink.com/v1/subjects',
                                publicPath: '/',
                                noticeConfig: r(r({}, s.noticeConfig), {}, { location: 'http://localhost:4200/index.html#/notice' }),
                                managerConfig: r(r({}, s.managerConfig), {}, { location: 'http://localhost:4200/index.html#/manager' })
                            });
                        }
                    };
                e.exports = a;
            },
            function (e, t, n) {
                'use strict';
                var o = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
                Object.defineProperty(t, '__esModule', { value: !0 }), t.getDefault = void 0;
                var r = o(n(18));
                t.getDefault = function () {
                    return { en: r.default };
                };
            },
            function (e, t, n) {
                n(1), n(7), e.exports = n(32);
            },
            function (e, t, n) {
                var o = n(14), r = n(16), i = {
                        env: null,
                        cmpId: 3,
                        configVersion: null,
                        appId: null,
                        logo: './assets/icons/pm-logo-dark.svg',
                        backdrop: 'rgba(0,0,0,0.5)',
                        useSystemFonts: !1,
                        storeConsentGlobally: !1,
                        thirdPartyCookieSync: !1,
                        useSecondLevelDomain: !0,
                        useCookies: !0,
                        useExternalData: !1,
                        preferenceLink: {
                            enabled: !1,
                            apiKey: null,
                            identifier: null,
                            identifyingField: null
                        },
                        forceMobile: !1,
                        logging: !1,
                        topics: o.getDefault(),
                        supportedLocales: ['en'],
                        defaultLocale: 'en',
                        forceLocale: null,
                        consentDataConfig: {
                            vendors: null,
                            handleLegIntOnAcceptAndDenyAll: !1,
                            purposeOneTreatment: !1,
                            publisherCC: null,
                            publisher: {
                                enabled: !1,
                                purposes: null,
                                legIntPurposes: null,
                                specialPurposes: null,
                                lockedPurposes: null,
                                features: null,
                                name: 'Publisher / Brand',
                                policyUrl: null
                            },
                            publisherRestrictions: [],
                            lockedPurposesPerVendor: []
                        },
                        redisplayAfter: {
                            accept: 31536000,
                            reject: 31536000,
                            vendorChange: 2592000,
                            configChange: 2592000
                        },
                        geoTargeting: {
                            allCountries: !1,
                            countries: [
                                'AT',
                                'BE',
                                'BG',
                                'HR',
                                'CY',
                                'CZ',
                                'DK',
                                'EE',
                                'FI',
                                'FR',
                                'DE',
                                'GR',
                                'HU',
                                'IE',
                                'IT',
                                'LT',
                                'LV',
                                'LU',
                                'MT',
                                'NL',
                                'PL',
                                'PT',
                                'RO',
                                'SK',
                                'SI',
                                'ES',
                                'SE',
                                'GB'
                            ],
                            includeSelection: !0
                        },
                        gdprApplies: !0,
                        suppressUI: !1,
                        localization: {},
                        theme: 'defaultTheme',
                        disableLoadInIframe: !1,
                        toggleConfig: {
                            displayToggleOnMobile: !0,
                            displayToggle: !0,
                            id: 'gdpr-toggle',
                            zIndex: 2147483646,
                            position: 'bottomRight',
                            openPrivacyInformation: !1,
                            toggleUrl: null,
                            style: {
                                icon: 'cookie',
                                iconStyle: {
                                    color: '#fff',
                                    backgroundColor: '#48484A'
                                }
                            }
                        },
                        actionButtons: {
                            acceptAll: {
                                showDialog: !1,
                                style: {
                                    type: 'raised',
                                    backgroundColor: '#F88D37'
                                }
                            },
                            denyAll: {
                                showDialog: !0,
                                style: {
                                    type: 'outlined',
                                    backgroundColor: '#F88D37'
                                }
                            },
                            saveAndExit: {
                                showDialog: !1,
                                style: {
                                    type: 'raised',
                                    backgroundColor: '#F88D37'
                                }
                            },
                            privacySettings: {
                                style: {
                                    backgroundColor: '#F88D37',
                                    type: 'outlined'
                                }
                            }
                        },
                        noticeConfig: {
                            id: 'gdpr-consent-notice',
                            display: !0,
                            hideAfter: null,
                            hideLogo: !1,
                            showBackdrop: !0,
                            loadLimit: null,
                            showCloseButton: !1,
                            showDenyButton: !0,
                            resurfacingElaboration: 'toggle',
                            desktopConfig: {
                                type: 'bar',
                                position: 'modal',
                                privacyLinks: {
                                    style: {
                                        textSize: 14,
                                        textColor: '#000000',
                                        bold: !1,
                                        italic: !1,
                                        underline: !1,
                                        showIcon: !1,
                                        iconColor: '#d5632d',
                                        icon: 'settings'
                                    }
                                }
                            },
                            mobileConfig: {
                                mobile: !0,
                                matchDesktop: !1,
                                type: 'bar',
                                position: 'modal',
                                privacyLinks: {
                                    style: {
                                        textSize: 14,
                                        textColor: '#000000',
                                        bold: !1,
                                        italic: !1,
                                        underline: !1,
                                        showIcon: !1,
                                        iconColor: '#d5632d',
                                        icon: 'settings'
                                    }
                                }
                            }
                        },
                        managerConfig: {
                            id: 'gdpr-consent-manager',
                            hideLogo: !1,
                            showBackdrop: !0,
                            name: 'faktor.io',
                            showCloseButton: !1,
                            showBackToNotice: !0,
                            showDenyButton: !0,
                            displayAllVendorsToggle: !1,
                            detachPurposesFromVendors: !0
                        },
                        disclosure: {
                            hide: !1,
                            hideCustomPurposes: !0,
                            stacks: [
                                1,
                                42
                            ],
                            stacksAndPurposesOrder: [],
                            customStacks: r.getDefault()
                        },
                        externalLinks: {
                            privacyPolicy: {
                                showLink: !1,
                                url: ''
                            },
                            imprint: {
                                showLink: !1,
                                url: ''
                            }
                        },
                        loadedFromLaunchPad: !1
                    };
                e.exports = i;
            },
            function (e, t, n) {
                'use strict';
                var o = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
                Object.defineProperty(t, '__esModule', { value: !0 }), t.getDefault = void 0;
                var r = o(n(15));
                t.getDefault = function () {
                    return { en: r.default };
                };
            },
            function (e) {
                e.exports = JSON.parse('[{"title":"Why Do You Need My Consent?","text":"<p>This site and its partners store and access personal data based on unique identifiers such as cookies. The EU General Data Protection Regulation calls for freely-given consent prior to processing any personal data. As such, to provide the best experience for you on our properties, we ask for your consent to allow us and our partners to process your data. \\n\\nBy accepting or rejecting consent, you give your express consent with regards to data processing on this site. You agree to share your personal data with us and our partners on this site. If you do not consent to or withdraw consent from data processing by us and our partners, this may adversely affect site functions and your experience.\\n\\nTo see the list of vendors processing your data, click on the \u201COur Partners\u201D link below.\\n</p>","tip":"","icon":"how-is-my-data-used","expanded":false,"showOnNotice":false,"displayPurposes":false},{"title":"Why Do You Use My Data?","text":"<p>By reviewing and consenting to the purposes and special features listed, you agree to have your personal data processed by us and our partners. This enables us to improve our services and facilitate a better user experience for you. Not consenting or withdrawing consent, may adversely affect certain features and functions of our digital properties.\\n\\nWe process your data for a variety of purposes. These purposes and the special features that support these purposes are listed below.</p>","tip":"","icon":"consent","expanded":false,"showOnNotice":false,"displayPurposes":true},{"title":"Withdrawing My Consent","text":"<ul><li>Withdrawing Consent</li></ul><p>You may withdraw your consent and update your preferences at any time by resurfacing the Privacy Manager. However, please be aware that not all vendors request consent and some may process data on the basis of legitimate interest \u2013 you have the right to object processing on both these grounds. Click \u201COur Partners\u201D below to review the list of vendors processing data based on consent and legitimate interest.</p><ul><li>Resurfacing the Privacy Manager</li></ul><p>You can review and update your privacy settings at any time by clicking the Privacy Settings Icon in the bottom of the screen.</p>","tip":"","icon":"cookie","expanded":false,"showOnNotice":false,"displayPurposes":false}]');
            },
            function (e, t, n) {
                'use strict';
                var o = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
                Object.defineProperty(t, '__esModule', { value: !0 }), t.getDefault = void 0;
                var r = o(n(17));
                t.getDefault = function () {
                    return { en: r.default };
                };
            },
            function (e) {
                e.exports = JSON.parse('[{"name":"Functional, Analytics, Advertising (non-IAB vendors) and Social Media cookies","description":"We use functional cookies for the service to function properly. Data and cookies can be used to provide an improved user experience, select relevant content and ads and track activities for analytical purposes. Lastly we provide services to share content on social networks."}]');
            },
            function (e) {
                e.exports = JSON.parse('{"accept":"Accept","acceptAll":"Accept All","acceptAllDescription":"By accepting all, you will allow all purposes we and third-parties request.","accessibilityBack":"Go back to the previous page.","accessibilityBooleanConsent":"Controls to enable or disable consent.","accessibilityBooleanLI":"Controls to enable or disable legitimate interest.","accessibilityClose":"Close the Privacy Manager window.","accessibilityCustomize":"Customize your consent preferences.","accessibilityDeviceStorageDisclosure":"View the vendor\'s additional storage and access information.","accessibilityDisclosurePurpose":"View the list of purposes.","accessibilityFeatureInfo":"Read more detailed information about this feature.","accessibilityFeatureVendors":"View the vendors that use this feature.","accessibilityInformationModule":"Go to the Privacy Information page.","accessibilityLanguage":"Language selector.","accessibilityPrivacyPolicy":"View the vendor\u2019s privacy policy.","accessibilityPurposeInfo":"Read more detailed information about this purpose.","accessibilityPurposeList":"View the list of purposes and features.","accessibilityPurposesConsent":"View the purposes for which the vendor request consent.","accessibilityPurposesLI":"View the purposes for which the vendor claims legitimate interest.","accessibilityStackInfo":"Read more detailed information about this functionality.","accessibilityToggle":"Go to the Privacy Manager window.","accessibilityTopic":"Read more on this topic.","accessibilityVendorFeatures":"View the features that are used by the vendor","accessibilityVendorList":"View the list of vendors","accessibilityVendors":"View the consent state of all parties involved.","accessibilityVendorsConsent":"Parties requesting consent.","accessibilityVendorsLI":"Parties claiming legitimate interest.","accessibilityWindow":"Privacy Manager window.","accessibilityToggleAllVendors":"Toggle consent state for all vendors [on,off]","accessibilityListVendors":"List of vendors.","accessibilityListPurposesFeatures":"List of purposes and features.","accessibilitySubListPurposesFeatures":"Sub list of purposes and features.","accessibilityDetailsScreen":"Details screen of","accessibilityOverviewPurposes":"Overview screen of purposes.\\nManage Privacy Settings by purpose.","accessibilityOverviewVendors":"Overview screen of vendors.\\nManage Privacy Settings by vendor.","accessibilityInformationScreen":"Information Page.","accessibilityTriStateToggle":"Toggle consent state for grouped purposes and features [on,off,partial].","accessibilityToggleChecked":"Toggle checked.","accessibilityToggleNotChecked":"Toggle not checked.","accessibilityTogglePartiallyChecked":"Toggle partially checked.","alwaysOn":"Always On","auditIdExplanation":"The Audit ID is a random unique number that is generated for you when you visit this website. The Audit ID is only logged and stored after you save your consent preferences. The purpose of the Audit ID is to keep a record of your preference history on which cookies you accepted and when. The information kept in relation to your Audit ID includes: timestamp, version of vendor list, and a list of vendors that are allowed to process your data.","auditIdTitle":"Audit ID","backButtonDialogBody":"Before continuing you need to make a choice concerning your privacy settings.","backButtonDialogButton":"Ok","backButtonDialogTitle":"Save Your Preferences","backToNotice":"Back","cancel":"Cancel","close":"Close","consent":"Consent","cookieMaxAgeSeconds":"The maximum storage duration is","copyToClipboard":"Copy to Clipboard","customResurfacingElaboration":"","deny":"Reject","denyAll":"Reject All","denyAllDescription":"Be aware that by clicking \u201CReject\u201D not all features of this app may operate properly.","deviceStorageDisclosure":"Device Storage Disclosure","disclosureIntro":"We use your data for:","domain":"Host","exitButtonBoxDescription":"By pressing OK you are confirming your privacy preferences. It\u2019s possible to change your settings at any time.","exitButtonBoxTitle":"Save Your Preferences","featureDetailsDescription":"Features support purposes and improve our ability to deliver services to you. See below to learn more about this feature and who is using it to process your data.","featureDetailsProcessingDataFor":"Vendors Using This Feature","featureDetailsTitle":"Your Choice. Your Experience.","features":"Features","giveConsentToAll":"Give Consent to All","iabExplanation":"Consent is stored and processed in compliance with the IAB Transparency and Consent Framework policy.","identifier":"Identifier Name","introDescription":"To provide the best experiences, we and our partners use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us and our partners to process personal data such as browsing behaviour or unique IDs on this site.","introTitle":"Your Choice. Your Experience.","legitimateInterest":"Legitimate Interest","legitimateInterestNote":"For some purposes, your personal data may be processed on the legal ground of legitimate interest, you can exercise your right to object to companies processing personal data based on legitimate interest.","manageSettings":"Manage Settings","manageVendors":"Our Partners","maxAgeSeconds":"Maximum Storage Duration","moreInfo":"More Info","myAuditId":"My Audit ID","off":"Off","ok":"Ok","on":"On","privacyInformation":"Information","privacyInformationDescription":"Dig deeper and learn more about why we need your consent, why and how we use your data, where your consent is used, how to update your preferences, and more.","privacyInformationSubtitle":"Learn About Privacy","privacyManager":"Privacy Manager","publisherDetailsDescription":"See below to learn more about which purposes we are requesting consent and/or claiming legitimate interest to process your data for.","publisherDetailsIntroText":"See below to customise your data processing preferences and learn which purposes this vendor is requesting consent and/or which purposes they are claiming legitimate interest for.","publisherDetailsTitle":"Your Choice. Your Experience.","purposeDetailsClaimingLegitimateInterestFor":"Vendors Claiming Legitimate Interest","purposeDetailsRequiringConsentFor":"Vendors Requesting Consent","purposes":"Purposes","purposesDetailsDescription":"See below to learn more about this purpose and who is requesting consent and/or claiming legitimate interest to process your data for this purpose.","purposesDetailsTitle":"Your Choice. Your Experience.","purposesTabDescription":"We and selected companies may access and use your data for the purposes below. Click into any purpose to customise your preferences and to learn who is requesting consent and/or claiming legitimate interest to process your data for that purpose.","purposesTitle":"Your Choice. Your Experience.","reset":"Reset","resetAuditIdDialogBody":"Resetting your Audit ID will make it impossible for the website owner to verify your consent history prior to the reset.","resetAuditIdDialogTitle":"Reset Audit ID?","resetMyAuditId":"Reset My Audit ID","resurfacingElaborationMenu":"You can update your choices at any time by going to the settings menu.","resurfacingElaborationNoToggle":"You can change your settings at any time by visiting our privacy policy.","resurfacingElaborationToggle":"You can update your choices at any time by clicking on the Privacy icon in the bottom of the screen.","revokeConsentToAll":"Revoke Consent to All","saveAndExit":"Save and Exit","specialFeaturesDetailsDescription":"Features support purposes and improve our ability to deliver services to you. See below to customise your preferences with regard to this feature and/or learn more about this feature and who is using it to process your data. Features may still be used to ensure security, prevent fraud, and debug regardless of your choice.","specialFeaturesDetailsTitle":"Your Choice. Your Experience.","specialPurposeDetailsDescription":"This purpose is necessary for the service to function properly and therefore cannot be rejected nor turned off. The data for this purpose can only be used for the specified data processing operations.","specialPurposeDetailsTitle":"Your Choice. Your Experience.","thirdPartyVendors":"Our Partners","tip":"TIP!","type":"Storage Type","usesCookieAccessTrue":"This vendor utilizes cookies and other methods of storage (e.g. local storage) or accessing information on your device.","usesNonCookieAccessFalse":"This vendor utilizes cookies as a means of storage or accessing information on your device.","usesNonCookieAccessTrue":"This vendor utilizes other methods of storage (e.g. local storage) or accessing information on your device.","vendorDetailsClaimingLegitimateInterestFor":"Claiming Legitimate Interest To","vendorDetailsRequiringConsentFor":"Requesting Consent To","vendorDetailsSupportingFeature":"Feature(s) in Use","vendors":"Vendors","vendorsDetailsDescription":"See below to customise your data processing preferences and learn which purposes this vendor is requesting consent and/or which purposes they are claiming legitimate interest for.","vendorsDetailsTitle":"Your Choice. Your Experience.","vendorsTabDescription":"These are the vendors who process your data. Click into any vendor to customise your data processing preferences and learn which purposes they are requesting consent and/or which purposes they are claiming legitimate interest for.","vendorsTitle":"Your Choice. Your Experience.","vendorsUsingThisPurpose":"Vendors Using This Purpose","viewPrivacyPolicy":"View Privacy Policy","purposesTabNote":"Please note that when all purposes are disallowed, some site functionality may be affected.","privacyManagerToggle":"Manage Privacy Settings","imprint":"Imprint","privacyPolicy":"Privacy Policy","accessibilityPolicy":"View the organisation\'s privacy policy page.","accessibilityImprint":"Organisation\'s contact information page.","deviceStorageDisclosureNote":"No device storage and access information provided by the vendor.","vendorTooltip":"This vendor may process your personal data based on legitimate interest. Click on the vendor for more information or to object to this processing.","purposeTooltip":"Some vendors may process your personal data based on legitimate interest for this purpose. Click on the purpose for more information or to object to this processing.","stackStatusAccept":"Accepted All","stackStatusReject":"Rejected All","stackStatusPartial":"Partial","stackStatus":"Consent:","searchVendor":"Search vendors","deviceStorageCookieRefresh":"Refreshes Cookie","cookieRefresh":"Storage duration may be refreshed upon your next visit.","true":"yes","false":"no"}');
            },
            function (e, t, n) {
                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach(function (t) {
                            i(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function i(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function s(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                }
                function a(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                var c = n(20), u = c.encodeToBase64, l = c.decodeFromBase64, d = c.decodePublisherTCFromBase64, p = c.getSegmentType, f = n(25).consentStringDefinition, h = function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            s(this, e), this.setConsentString(t);
                        }
                        var t, n, o;
                        return t = e, (n = [
                            {
                                key: 'getCoreSegmentData',
                                value: function () {
                                    return this.core ? r({}, this.core) : null;
                                }
                            },
                            {
                                key: 'setCoreSegmentData',
                                value: function (e) {
                                    this.core = r({}, e);
                                }
                            },
                            {
                                key: 'getCoreSegmentString',
                                value: function () {
                                    return this.core ? u(this.core, f.core) : null;
                                }
                            },
                            {
                                key: 'setCoreSegmentString',
                                value: function (e) {
                                    this.core = l(e, f.core);
                                }
                            },
                            {
                                key: 'getDisclosedVendorsData',
                                value: function () {
                                    return this.disclosedVendors ? r({}, this.disclosedVendors) : null;
                                }
                            },
                            {
                                key: 'setDisclosedVendorsData',
                                value: function (e) {
                                    this.disclosedVendors = r({}, e);
                                }
                            },
                            {
                                key: 'getDisclosedVendorsString',
                                value: function () {
                                    return this.disclosedVendors ? u(this.disclosedVendors, f.disclosedVendors) : null;
                                }
                            },
                            {
                                key: 'setDisclosedVendorsString',
                                value: function (e) {
                                    this.disclosedVendors = l(e, f.disclosedVendors);
                                }
                            },
                            {
                                key: 'getAllowedVendorsData',
                                value: function () {
                                    return this.allowedVendors ? r({}, this.allowedVendors) : null;
                                }
                            },
                            {
                                key: 'setAllowedVendorsData',
                                value: function (e) {
                                    this.allowedVendors = r({}, e);
                                }
                            },
                            {
                                key: 'getAllowedVendorsString',
                                value: function () {
                                    return this.allowedVendors ? u(this.allowedVendors, f.allowedVendors) : null;
                                }
                            },
                            {
                                key: 'setAllowedVendorsString',
                                value: function (e) {
                                    this.allowedVendors = l(e, f.allowedVendors);
                                }
                            },
                            {
                                key: 'getPublisherTCData',
                                value: function () {
                                    return this.publisherTC ? r({}, this.publisherTC) : null;
                                }
                            },
                            {
                                key: 'setPublisherTCData',
                                value: function (e) {
                                    this.publisherTC = r({}, e);
                                }
                            },
                            {
                                key: 'getPublisherTCString',
                                value: function () {
                                    return this.publisherTC ? u(this.publisherTC, f.publisherTC) : null;
                                }
                            },
                            {
                                key: 'setPublisherTCString',
                                value: function (e) {
                                    this.publisherTC = d(e);
                                }
                            },
                            {
                                key: 'setConsentString',
                                value: function (e) {
                                    if (this.core = null, this.disclosedVendors = null, this.allowedVendors = null, this.publisherTC = null, e) {
                                        var t = e.split('.');
                                        t.length > 0 && this.setCoreSegmentString(t[0]);
                                        for (var n = 1; n < t.length; n += 1)
                                            switch (p(t[n])) {
                                            case 1:
                                                this.setAllowedVendorsString(t[n]);
                                                break;
                                            case 2:
                                                this.setDisclosedVendorsString(t[n]);
                                                break;
                                            case 3:
                                                this.setPublisherTCString(t[n]);
                                                break;
                                            default:
                                                throw new Error('Unknown segment type in consent string');
                                            }
                                    }
                                }
                            },
                            {
                                key: 'getConsentString',
                                value: function () {
                                    var e = [];
                                    return this.core ? (e.push(this.getCoreSegmentString()), this.disclosedVendors && e.push(this.getDisclosedVendorsString()), this.allowedVendors && e.push(this.getAllowedVendorsString()), this.publisherTC && e.push(this.getPublisherTCString()), e.join('.')) : null;
                                }
                            }
                        ]) && a(t.prototype, n), o && a(t, o), e;
                    }();
                e.exports = { TCStringV2: h };
            },
            function (e, t, n) {
                var o = n(21), r = n(8), i = r.padLeft, s = r.padRight, a = n(23).encodeFields, c = n(24), u = c.decodeFields, l = c.decodePublisherTC;
                function d(e) {
                    for (var t = e; t.length % 4 != 0;)
                        t += '=';
                    t = t.replace(/-/g, '+').replace(/_/g, '/');
                    for (var n = o.decode(t), r = '', s = 0; s < n.length; s += 1) {
                        var a = n.charCodeAt(s).toString(2);
                        r += i(a, 8 - a.length);
                    }
                    return r;
                }
                e.exports = {
                    encodeToBase64: function (e, t) {
                        return function (e) {
                            if (e) {
                                for (var t = s(e, 7 - (e.length + 7) % 8), n = '', r = 0; r < t.length; r += 8)
                                    n += String.fromCharCode(parseInt(t.substr(r, 8), 2));
                                return o.encode(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
                            }
                            return null;
                        }(a(e, t));
                    },
                    decodeFromBase64: function (e, t) {
                        var n = d(e);
                        return u(n, t).decodedObject;
                    },
                    decodePublisherTCFromBase64: function (e) {
                        var t = d(e);
                        return l(t);
                    },
                    getSegmentType: function (e) {
                        var t = d(e);
                        return parseInt(t.substr(0, 3), 2);
                    }
                };
            },
            function (e, t, n) {
                (function (e, o) {
                    var r;
                    !function (i) {
                        var s = t, a = (e && e.exports, 'object' == typeof o && o);
                        a.global !== a && a.window;
                        var c = function (e) {
                            this.message = e;
                        };
                        (c.prototype = new Error()).name = 'InvalidCharacterError';
                        var u = function (e) {
                                throw new c(e);
                            }, l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', d = /[\t\n\f\r ]/g, p = {
                                encode: function (e) {
                                    e = String(e), /[^\0-\xFF]/.test(e) && u('The string to be encoded contains characters outside of the Latin1 range.');
                                    for (var t, n, o, r, i = e.length % 3, s = '', a = -1, c = e.length - i; ++a < c;)
                                        t = e.charCodeAt(a) << 16, n = e.charCodeAt(++a) << 8, o = e.charCodeAt(++a), s += l.charAt((r = t + n + o) >> 18 & 63) + l.charAt(r >> 12 & 63) + l.charAt(r >> 6 & 63) + l.charAt(63 & r);
                                    return 2 == i ? (t = e.charCodeAt(a) << 8, n = e.charCodeAt(++a), s += l.charAt((r = t + n) >> 10) + l.charAt(r >> 4 & 63) + l.charAt(r << 2 & 63) + '=') : 1 == i && (r = e.charCodeAt(a), s += l.charAt(r >> 2) + l.charAt(r << 4 & 63) + '=='), s;
                                },
                                decode: function (e) {
                                    var t = (e = String(e).replace(d, '')).length;
                                    t % 4 == 0 && (t = (e = e.replace(/==?$/, '')).length), (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && u('Invalid character: the string to be decoded is not correctly encoded.');
                                    for (var n, o, r = 0, i = '', s = -1; ++s < t;)
                                        o = l.indexOf(e.charAt(s)), n = r % 4 ? 64 * n + o : o, r++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * r & 6)));
                                    return i;
                                },
                                version: '0.1.0'
                            };
                        void 0 === (r = function () {
                            return p;
                        }.call(t, n, t, e)) || (e.exports = r);
                    }();
                }.call(this, n(22)(e), n(3)));
            },
            function (e, t) {
                e.exports = function (e) {
                    return e.webpackPolyfill || (e.deprecate = function () {
                    }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, 'loaded', {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        }
                    }), Object.defineProperty(e, 'id', {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        }
                    }), e.webpackPolyfill = 1), e;
                };
            },
            function (e, t, n) {
                var o = n(8), r = o.padLeft, i = o.getMaxListElement;
                function s(e, t) {
                    var n = '';
                    return 'number' != typeof e || Number.isNaN(e) || (n = parseInt(e, 10).toString(2)), t >= n.length && (n = r(n, t - n.length)), n.length > t && (n = n.substring(0, t)), n;
                }
                function a(e) {
                    return s(!0 === e ? 1 : 0, 1);
                }
                function c(e, t) {
                    return e instanceof Date ? s(e.getTime() / 100, t) : s(e, t);
                }
                function u(e, t) {
                    return s(e.toUpperCase().charCodeAt(0) - 65, t);
                }
                function l(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
                    return u(e.slice(0, 1), t / 2) + u(e.slice(1), t / 2);
                }
                function d(e, t) {
                    for (var n = '', o = 1; o <= t; o += 1)
                        n += -1 !== e.indexOf(o) ? '1' : '0';
                    return n;
                }
                function p(e) {
                    return s(e.length, 12) + e.reduce(function (e, t) {
                        return e + function (e) {
                            return a(e.isRange) + s(e.startId, 16) + (e.isRange ? s(e.endId, 16) : '');
                        }(t);
                    }, '');
                }
                function f(e) {
                    return p(function (e) {
                        for (var t = i(e), n = [], o = [], r = 1; r <= t; r += 1) {
                            var s = r;
                            if (-1 !== e.indexOf(s) && n.push(s), (-1 === e.indexOf(s) || -1 === e.indexOf(s + 1)) && n.length) {
                                var a = n.shift(), c = n.pop();
                                n = [], o.push({
                                    isRange: 'number' == typeof c,
                                    startId: a,
                                    endId: c
                                });
                            }
                        }
                        return o;
                    }(e));
                }
                function h(e, t) {
                    var n = f(e), o = d(e, i(e));
                    return s(i(e), t) + a(n.length < o.length) + (n.length < o.length ? n : o);
                }
                function g(e, t, n) {
                    var o = e || [];
                    return s(o.length, t) + o.reduce(function (e, t) {
                        return e + y(t, n);
                    }, '');
                }
                function y(e, t) {
                    var n = '';
                    return t.segmentId && (n = s(t.segmentId, 3)), t.fields.reduce(function (t, n) {
                        return t + function (e, t) {
                            var n = t.name, o = t.type, r = t.numBits, i = e[n], u = null == i ? '' : i, p = 'function' == typeof r ? r(e) : r;
                            switch (o) {
                            case 'int':
                                return s(u, p);
                            case 'bool':
                                return a(u);
                            case 'date':
                                return c(u, p);
                            case 'list':
                                return d(u, p);
                            case 'textcode':
                                return l(u, p);
                            case 'range':
                                return f(u);
                            case 'minlist':
                                return h(u, p);
                            case 'array':
                                return g(u, p, t);
                            default:
                                throw new Error('TCStringV2 - Unknown field type '.concat(o, ' for encoding'));
                            }
                        }(e, n);
                    }, n);
                }
                e.exports = {
                    encodeBoolToBits: a,
                    encodeIntToBits: s,
                    encodeDateToBits: c,
                    encodeLetterToBits: u,
                    encodeTextCodeToBits: l,
                    encodeListToBits: d,
                    encodeListToRangeBits: f,
                    encodeMinListToBits: h,
                    encodeArrayToBits: g,
                    encodeFields: y
                };
            },
            function (e, t) {
                function n(e, t, n) {
                    if (void 0 !== n && e.length < t + n)
                        throw new Error('Invalid decoding input');
                }
                function o(e, t, o) {
                    return n(e, t, o), parseInt(e.substr(t, o), 2);
                }
                function r(e, t, r) {
                    return n(e, t, r), new Date(100 * o(e, t, r));
                }
                function i(e, t) {
                    return 1 === parseInt(e.substr(t, 1), 2);
                }
                function s(e) {
                    var t = o(e);
                    return String.fromCharCode(t + 65).toLowerCase();
                }
                function a(e, t, o) {
                    n(e, t, o);
                    var r = e.substr(t, o);
                    return s(r.slice(0, o / 2)) + s(r.slice(o / 2));
                }
                function c(e, t, n, r) {
                    var i = t, s = [], a = o(e, i, n);
                    i += n;
                    for (var c = 0; c < a; c += 1) {
                        var u = f(e, r, i), l = u.decodedObject;
                        i = u.newPosition, s.push(l);
                    }
                    return {
                        fieldValue: s,
                        newPosition: i
                    };
                }
                function u(e, t) {
                    var n = t, r = [], s = o(e, n, 12);
                    n += 12;
                    for (var a = 0; a < s;) {
                        var c = i(e, n);
                        if (n += 1, c) {
                            var u = o(e, n, 16), l = o(e, n += 16, 16);
                            n += 16;
                            for (var d = u; d <= l; d += 1)
                                r.push(d);
                        } else {
                            var p = o(e, n, 16);
                            n += 16, r.push(p);
                        }
                        a += 1;
                    }
                    return {
                        fieldValue: r,
                        newPosition: n
                    };
                }
                function l(e, t, o) {
                    n(e, t, o);
                    for (var r = [], i = e.substr(t, o), s = 0; s < i.length; s += 1)
                        '0' !== i[s] && r.push(s + 1);
                    return r;
                }
                function d(e, t, n) {
                    var r = t, s = o(e, t, n), a = i(e, r += n);
                    return r += 1, a ? u(e, r) : {
                        fieldValue: l(e.substr(r, s)),
                        newPosition: r += s
                    };
                }
                function p(e, t, n, s) {
                    var p = s.type, f = s.numBits, h = 'function' == typeof f ? f(t) : f;
                    switch (p) {
                    case 'int':
                        return { fieldValue: o(e, n, h) };
                    case 'bool':
                        return { fieldValue: i(e, n) };
                    case 'date':
                        return { fieldValue: r(e, n, h) };
                    case 'list':
                        return { fieldValue: l(e, n, h) };
                    case 'textcode':
                        return { fieldValue: a(e, n, h) };
                    case 'range':
                        return u(e, n);
                    case 'minlist':
                        return d(e, n, h);
                    case 'array':
                        return c(e, n, h, s);
                    default:
                        throw new Error('TCStringV2 - Unknown field type '.concat(p, ' for decoding'));
                    }
                }
                function f(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = n;
                    t.segmentId && (o += 3);
                    var r = t.fields.reduce(function (t, n) {
                        var r = n.name, i = n.numBits, s = p(e, t, o, n), a = s.fieldValue, c = s.newPosition;
                        return void 0 !== a && (t[r] = a), void 0 !== c ? o = c : 'number' == typeof i && (o += i), t;
                    }, {});
                    return {
                        decodedObject: r,
                        newPosition: o
                    };
                }
                e.exports = {
                    decodeBitsToInt: o,
                    decodeBitsToBool: i,
                    decodeBitsToDate: r,
                    decodeBitsToLetter: s,
                    decodeBitsToTextCode: a,
                    decodeBitsToRange: u,
                    decodeBitsToMinList: d,
                    decodeBitsToArray: c,
                    decodeFields: f,
                    decodePublisherTC: function (e) {
                        var t = 0, n = o(e, t, 3);
                        if (t += 3, 3 !== n)
                            throw new Error('Invalid consent string');
                        var r = l(e, t, 24), i = l(e, t += 24, 24), s = o(e, t += 24, 6);
                        return {
                            pubPurposesConsent: r,
                            pubPurposesLITransparency: i,
                            numCustomPurposes: s,
                            customPurposesConsent: l(e, t += 6, s),
                            customPurposesLITransparency: l(e, t += s, s)
                        };
                    }
                };
            },
            function (e, t) {
                e.exports = {
                    consentStringDefinition: {
                        core: {
                            fields: [
                                {
                                    name: 'version',
                                    type: 'int',
                                    numBits: 6
                                },
                                {
                                    name: 'created',
                                    type: 'date',
                                    numBits: 36
                                },
                                {
                                    name: 'lastUpdated',
                                    type: 'date',
                                    numBits: 36
                                },
                                {
                                    name: 'cmpId',
                                    type: 'int',
                                    numBits: 12
                                },
                                {
                                    name: 'cmpVersion',
                                    type: 'int',
                                    numBits: 12
                                },
                                {
                                    name: 'consentScreen',
                                    type: 'int',
                                    numBits: 6
                                },
                                {
                                    name: 'consentLanguage',
                                    type: 'textcode',
                                    numBits: 12
                                },
                                {
                                    name: 'vendorListVersion',
                                    type: 'int',
                                    numBits: 12
                                },
                                {
                                    name: 'tcfPolicyVersion',
                                    type: 'int',
                                    numBits: 6
                                },
                                {
                                    name: 'isServiceSpecific',
                                    type: 'bool',
                                    numBits: 1
                                },
                                {
                                    name: 'useNonStandardStacks',
                                    type: 'bool',
                                    numBits: 1
                                },
                                {
                                    name: 'specialFeatureOptIns',
                                    type: 'list',
                                    numBits: 12
                                },
                                {
                                    name: 'purposesConsent',
                                    type: 'list',
                                    numBits: 24
                                },
                                {
                                    name: 'purposeLITransparency',
                                    type: 'list',
                                    numBits: 24
                                },
                                {
                                    name: 'purposeOneTreatment',
                                    type: 'bool',
                                    numBits: 1
                                },
                                {
                                    name: 'publisherCC',
                                    type: 'textcode',
                                    numBits: 12
                                },
                                {
                                    name: 'vendorsConsent',
                                    type: 'minlist',
                                    numBits: 16
                                },
                                {
                                    name: 'vendorsLegitimateInterest',
                                    type: 'minlist',
                                    numBits: 16
                                },
                                {
                                    name: 'publisherRestrictions',
                                    type: 'array',
                                    numBits: 12,
                                    fields: [
                                        {
                                            name: 'purposeId',
                                            type: 'int',
                                            numBits: 6
                                        },
                                        {
                                            name: 'restrictionType',
                                            type: 'int',
                                            numBits: 2
                                        },
                                        {
                                            name: 'restrictedVendors',
                                            type: 'range'
                                        }
                                    ]
                                }
                            ]
                        },
                        disclosedVendors: {
                            segmentId: 1,
                            fields: [{
                                    name: 'disclosedVendors',
                                    type: 'minlist',
                                    numBits: 16
                                }]
                        },
                        allowedVendors: {
                            segmentId: 2,
                            fields: [{
                                    name: 'allowedVendors',
                                    type: 'minlist',
                                    numBits: 16
                                }]
                        },
                        publisherTC: {
                            segmentId: 3,
                            fields: [
                                {
                                    name: 'pubPurposesConsent',
                                    type: 'list',
                                    numBits: 24
                                },
                                {
                                    name: 'pubPurposesLITransparency',
                                    type: 'list',
                                    numBits: 24
                                },
                                {
                                    name: 'numCustomPurposes',
                                    type: 'int',
                                    numBits: 6
                                },
                                {
                                    name: 'customPurposesConsent',
                                    type: 'list',
                                    numBits: function (e) {
                                        return e.numCustomPurposes;
                                    }
                                },
                                {
                                    name: 'customPurposesLITransparency',
                                    type: 'list',
                                    numBits: function (e) {
                                        return e.numCustomPurposes;
                                    }
                                }
                            ]
                        }
                    }
                };
            },
            function (e, t) {
                var n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || 'undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (n) {
                    var o = new Uint8Array(16);
                    e.exports = function () {
                        return n(o), o;
                    };
                } else {
                    var r = new Array(16);
                    e.exports = function () {
                        for (var e, t = 0; t < 16; t++)
                            0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                        return r;
                    };
                }
            },
            function (e, t) {
                for (var n = [], o = 0; o < 256; ++o)
                    n[o] = (o + 256).toString(16).substr(1);
                e.exports = function (e, t) {
                    var o = t || 0, r = n;
                    return [
                        r[e[o++]],
                        r[e[o++]],
                        r[e[o++]],
                        r[e[o++]],
                        '-',
                        r[e[o++]],
                        r[e[o++]],
                        '-',
                        r[e[o++]],
                        r[e[o++]],
                        '-',
                        r[e[o++]],
                        r[e[o++]],
                        '-',
                        r[e[o++]],
                        r[e[o++]],
                        r[e[o++]],
                        r[e[o++]],
                        r[e[o++]],
                        r[e[o++]]
                    ].join('');
                };
            },
            function (e, t, n) {
                var o;
                !function (r, i) {
                    'use strict';
                    var s = 'model', a = 'name', c = 'type', u = 'vendor', l = 'version', d = 'mobile', p = 'tablet', f = 'smarttv', h = {
                            extend: function (e, t) {
                                var n = {};
                                for (var o in e)
                                    t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                                return n;
                            },
                            has: function (e, t) {
                                return 'string' == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
                            },
                            lowerize: function (e) {
                                return e.toLowerCase();
                            },
                            major: function (e) {
                                return 'string' == typeof e ? e.replace(/[^\d\.]/g, '').split('.')[0] : void 0;
                            },
                            trim: function (e) {
                                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                            }
                        }, g = {
                            rgx: function (e, t) {
                                for (var n, o, r, i, s, a, c = 0; c < t.length && !s;) {
                                    var u = t[c], l = t[c + 1];
                                    for (n = o = 0; n < u.length && !s;)
                                        if (s = u[n++].exec(e))
                                            for (r = 0; r < l.length; r++)
                                                a = s[++o], 'object' == typeof (i = l[r]) && i.length > 0 ? 2 == i.length ? 'function' == typeof i[1] ? this[i[0]] = i[1].call(this, a) : this[i[0]] = i[1] : 3 == i.length ? 'function' != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = a ? a.replace(i[1], i[2]) : void 0 : this[i[0]] = a ? i[1].call(this, a, i[2]) : void 0 : 4 == i.length && (this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : void 0) : this[i] = a || void 0;
                                    c += 2;
                                }
                            },
                            str: function (e, t) {
                                for (var n in t)
                                    if ('object' == typeof t[n] && t[n].length > 0) {
                                        for (var o = 0; o < t[n].length; o++)
                                            if (h.has(t[n][o], e))
                                                return '?' === n ? void 0 : n;
                                    } else if (h.has(t[n], e))
                                        return '?' === n ? void 0 : n;
                                return e;
                            }
                        }, y = {
                            browser: {
                                oldsafari: {
                                    version: {
                                        '1.0': '/8',
                                        1.2: '/1',
                                        1.3: '/3',
                                        '2.0': '/412',
                                        '2.0.2': '/416',
                                        '2.0.3': '/417',
                                        '2.0.4': '/419',
                                        '?': '/'
                                    }
                                }
                            },
                            device: {
                                amazon: {
                                    model: {
                                        'Fire Phone': [
                                            'SD',
                                            'KF'
                                        ]
                                    }
                                },
                                sprint: {
                                    model: { 'Evo Shift 4G': '7373KT' },
                                    vendor: {
                                        HTC: 'APA',
                                        Sprint: 'Sprint'
                                    }
                                }
                            },
                            os: {
                                windows: {
                                    version: {
                                        ME: '4.90',
                                        'NT 3.11': 'NT3.51',
                                        'NT 4.0': 'NT4.0',
                                        2000: 'NT 5.0',
                                        XP: [
                                            'NT 5.1',
                                            'NT 5.2'
                                        ],
                                        Vista: 'NT 6.0',
                                        7: 'NT 6.1',
                                        8: 'NT 6.2',
                                        8.1: 'NT 6.3',
                                        10: [
                                            'NT 6.4',
                                            'NT 10.0'
                                        ],
                                        RT: 'ARM'
                                    }
                                }
                            }
                        }, m = {
                            browser: [
                                [
                                    /(opera\smini)\/([\w\.-]+)/i,
                                    /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,
                                    /(opera).+version\/([\w\.]+)/i,
                                    /(opera)[\/\s]+([\w\.]+)/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [/(opios)[\/\s]+([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera Mini'
                                    ],
                                    l
                                ],
                                [/\s(opr)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera'
                                    ],
                                    l
                                ],
                                [
                                    /(kindle)\/([\w\.]+)/i,
                                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                    /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                    /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                                    /(rekonq)\/([\w\.]*)/i,
                                    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [/(konqueror)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Konqueror'
                                    ],
                                    l
                                ],
                                [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
                                [
                                    [
                                        a,
                                        'IE'
                                    ],
                                    l
                                ],
                                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Edge'
                                    ],
                                    l
                                ],
                                [/(yabrowser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Yandex'
                                    ],
                                    l
                                ],
                                [/(Avast)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Avast Secure Browser'
                                    ],
                                    l
                                ],
                                [/(AVG)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'AVG Secure Browser'
                                    ],
                                    l
                                ],
                                [/(puffin)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Puffin'
                                    ],
                                    l
                                ],
                                [/(focus)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Firefox Focus'
                                    ],
                                    l
                                ],
                                [/(opt)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera Touch'
                                    ],
                                    l
                                ],
                                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'UCBrowser'
                                    ],
                                    l
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        /_/g,
                                        ' '
                                    ],
                                    l
                                ],
                                [/(windowswechat qbcore)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'WeChat(Win) Desktop'
                                    ],
                                    l
                                ],
                                [/(micromessenger)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'WeChat'
                                    ],
                                    l
                                ],
                                [/(brave)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Brave'
                                    ],
                                    l
                                ],
                                [/(whale)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Whale'
                                    ],
                                    l
                                ],
                                [/(qqbrowserlite)\/([\w\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(QQ)\/([\d\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                                [a],
                                [/(LBBROWSER)/i],
                                [a],
                                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'MIUI Browser'
                                    ]
                                ],
                                [/;fbav\/([\w\.]+);/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Facebook'
                                    ]
                                ],
                                [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                                [[
                                        a,
                                        'Facebook'
                                    ]],
                                [
                                    /safari\s(line)\/([\w\.]+)/i,
                                    /android.+(line)\/([\w\.]+)\/iab/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Chrome Headless'
                                    ]
                                ],
                                [/\swv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        /(.+)/,
                                        '$1 WebView'
                                    ],
                                    l
                                ],
                                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        /(.+(?:g|us))(.+)/,
                                        '$1 $2'
                                    ],
                                    l
                                ],
                                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Android Browser'
                                    ]
                                ],
                                [/(coc_coc_browser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Coc Coc'
                                    ],
                                    l
                                ],
                                [/(sailfishbrowser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Sailfish Browser'
                                    ],
                                    l
                                ],
                                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(dolfin)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Dolphin'
                                    ],
                                    l
                                ],
                                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                                [[
                                        a,
                                        '360 Browser'
                                    ]],
                                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Chrome'
                                    ],
                                    l
                                ],
                                [/(coast)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera Coast'
                                    ],
                                    l
                                ],
                                [/fxios\/([\w\.-]+)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Firefox'
                                    ]
                                ],
                                [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Mobile Safari'
                                    ]
                                ],
                                [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                                [
                                    l,
                                    a
                                ],
                                [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'GSA'
                                    ],
                                    l
                                ],
                                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [
                                    a,
                                    [
                                        l,
                                        g.str,
                                        y.browser.oldsafari.version
                                    ]
                                ],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(navigator|netscape)\/([\w\.-]+)/i],
                                [
                                    [
                                        a,
                                        'Netscape'
                                    ],
                                    l
                                ],
                                [
                                    /(swiftfox)/i,
                                    /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                    /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                                    /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
                                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                    /(links)\s\(([\w\.]+)/i,
                                    /(gobrowser)\/?([\w\.]*)/i,
                                    /(ice\s?browser)\/v?([\w\._]+)/i,
                                    /(mosaic)[\/\s]([\w\.]+)/i
                                ],
                                [
                                    a,
                                    l
                                ]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                [[
                                        'architecture',
                                        'amd64'
                                    ]],
                                [/(ia32(?=;))/i],
                                [[
                                        'architecture',
                                        h.lowerize
                                    ]],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [[
                                        'architecture',
                                        'ia32'
                                    ]],
                                [/windows\s(ce|mobile);\sppc;/i],
                                [[
                                        'architecture',
                                        'arm'
                                    ]],
                                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                [[
                                        'architecture',
                                        /ower/,
                                        '',
                                        h.lowerize
                                    ]],
                                [/(sun4\w)[;\)]/i],
                                [[
                                        'architecture',
                                        'sparc'
                                    ]],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                [[
                                        'architecture',
                                        h.lowerize
                                    ]]
                            ],
                            device: [
                                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                                [
                                    s,
                                    u,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/applecoremedia\/[\w\.]+ \((ipad)/],
                                [
                                    s,
                                    [
                                        u,
                                        'Apple'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/(apple\s{0,1}tv)/i],
                                [
                                    [
                                        s,
                                        'Apple TV'
                                    ],
                                    [
                                        u,
                                        'Apple'
                                    ],
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [
                                    /(archos)\s(gamepad2?)/i,
                                    /(hp).+(touchpad)/i,
                                    /(hp).+(tablet)/i,
                                    /(kindle)\/([\w\.]+)/i,
                                    /\s(nook)[\w\s]+build\/(\w+)/i,
                                    /(dell)\s(strea[kpr\s\d]*[\dko])/i
                                ],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
                                [
                                    s,
                                    [
                                        u,
                                        'Amazon'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                                [
                                    [
                                        s,
                                        g.str,
                                        y.device.amazon.model
                                    ],
                                    [
                                        u,
                                        'Amazon'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+aft([\w])(\sbuild\/|\))/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Amazon'
                                    ],
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                [
                                    s,
                                    u,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/\((ip[honed|\s\w*]+);/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Apple'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /(blackberry)[\s-]?(\w+)/i,
                                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                    /(hp)\s([\w\s]+\w)/i,
                                    /(asus)-?(\w+)/i
                                ],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/\(bb10;\s(\w+)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'BlackBerry'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Asus'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [
                                    /(sony)\s(tablet\s[ps])\sbuild\//i,
                                    /(sony)?(?:sgp.+)\sbuild\//i
                                ],
                                [
                                    [
                                        u,
                                        'Sony'
                                    ],
                                    [
                                        s,
                                        'Xperia Tablet'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Sony'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /\s(ouya)\s/i,
                                    /(nintendo)\s([wids3u]+)/i
                                ],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        'console'
                                    ]
                                ],
                                [/android.+;\s(shield)\sbuild/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Nvidia'
                                    ],
                                    [
                                        c,
                                        'console'
                                    ]
                                ],
                                [/(playstation\s[34portablevi]+)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Sony'
                                    ],
                                    [
                                        c,
                                        'console'
                                    ]
                                ],
                                [/(sprint\s(\w+))/i],
                                [
                                    [
                                        u,
                                        g.str,
                                        y.device.sprint.vendor
                                    ],
                                    [
                                        s,
                                        g.str,
                                        y.device.sprint.model
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
                                    /(zte)-(\w*)/i,
                                    /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                ],
                                [
                                    u,
                                    [
                                        s,
                                        /_/g,
                                        ' '
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/(nexus\s9)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'HTC'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [
                                    /d\/huawei([\w\s-]+)[;\)]/i,
                                    /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i
                                ],
                                [
                                    s,
                                    [
                                        u,
                                        'Huawei'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+(bah2?-a?[lw]\d{2})/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Huawei'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/(microsoft);\s(lumia[\s\w]+)/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Microsoft'
                                    ],
                                    [
                                        c,
                                        'console'
                                    ]
                                ],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [
                                        s,
                                        /\./g,
                                        ' '
                                    ],
                                    [
                                        u,
                                        'Microsoft'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                                    /mot[\s-]?(\w*)/i,
                                    /(XT\d{3,4}) build\//i,
                                    /(nexus\s6)/i
                                ],
                                [
                                    s,
                                    [
                                        u,
                                        'Motorola'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                [
                                    s,
                                    [
                                        u,
                                        'Motorola'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                [
                                    [
                                        u,
                                        h.trim
                                    ],
                                    [
                                        s,
                                        h.trim
                                    ],
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [
                                        s,
                                        /^/,
                                        'SmartTV'
                                    ],
                                    [
                                        u,
                                        'Samsung'
                                    ],
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [/\(dtv[\);].+(aquos)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Sharp'
                                    ],
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [
                                    /android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                                    /((SM-T\w+))/i
                                ],
                                [
                                    [
                                        u,
                                        'Samsung'
                                    ],
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [
                                    u,
                                    [
                                        c,
                                        f
                                    ],
                                    s
                                ],
                                [
                                    /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                                    /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                                    /sec-((sgh\w+))/i
                                ],
                                [
                                    [
                                        u,
                                        'Samsung'
                                    ],
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/sie-(\w*)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Siemens'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /(maemo|nokia).*(n900|lumia\s\d+)/i,
                                    /(nokia)[\s_-]?([\w-]*)/i
                                ],
                                [
                                    [
                                        u,
                                        'Nokia'
                                    ],
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Acer'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+([vl]k\-?\d{3})\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'LG'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                [
                                    [
                                        u,
                                        'LG'
                                    ],
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [
                                    /linux;\snetcast.+smarttv/i,
                                    /lg\snetcast\.tv-201\d/i
                                ],
                                [
                                    [
                                        u,
                                        'LG'
                                    ],
                                    s,
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [
                                    /(nexus\s[45])/i,
                                    /lg[e;\s\/-]+(\w*)/i,
                                    /android.+lg(\-?[\d\w]+)\s+build/i
                                ],
                                [
                                    s,
                                    [
                                        u,
                                        'LG'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Lenovo'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/(lenovo)[_\s-]?([\w-]+)/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/linux;.+((jolla));/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/((pebble))app\/[\d\.]+\s/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        'wearable'
                                    ]
                                ],
                                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/crkey/i],
                                [
                                    [
                                        s,
                                        'Chromecast'
                                    ],
                                    [
                                        u,
                                        'Google'
                                    ],
                                    [
                                        c,
                                        f
                                    ]
                                ],
                                [/android.+;\s(glass)\s\d/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Google'
                                    ],
                                    [
                                        c,
                                        'wearable'
                                    ]
                                ],
                                [/android.+;\s(pixel c)[\s)]/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Google'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Google'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /android.+;\s(\w+)\s+build\/hm\1/i,
                                    /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                                    /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,
                                    /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i
                                ],
                                [
                                    [
                                        s,
                                        /_/g,
                                        ' '
                                    ],
                                    [
                                        u,
                                        'Xiaomi'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
                                [
                                    [
                                        s,
                                        /_/g,
                                        ' '
                                    ],
                                    [
                                        u,
                                        'Xiaomi'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Meizu'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/(mz)-([\w-]{2,})/i],
                                [
                                    [
                                        u,
                                        'Meizu'
                                    ],
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [
                                    /android.+a000(1)\s+build/i,
                                    /android.+oneplus\s(a\d{4})[\s)]/i
                                ],
                                [
                                    s,
                                    [
                                        u,
                                        'OnePlus'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'RCA'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Dell'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Verizon'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],
                                [
                                    [
                                        u,
                                        'Barnes & Noble'
                                    ],
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'NuVision'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+;\s(k88)\sbuild/i],
                                [
                                    s,
                                    [
                                        u,
                                        'ZTE'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Swiss'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Swiss'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Zeki'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [
                                    /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                                    /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i
                                ],
                                [
                                    [
                                        u,
                                        'Dragon Touch'
                                    ],
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Insignia'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'NextBook'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                                [
                                    [
                                        u,
                                        'Voice'
                                    ],
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                                [
                                    [
                                        u,
                                        'LvTel'
                                    ],
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+;\s(PH-1)\s/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Essential'
                                    ],
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Envizen'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'MachSpeed'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Rotor'
                                    ],
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                                [
                                    u,
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                                [
                                    s,
                                    [
                                        c,
                                        d
                                    ]
                                ],
                                [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                                [
                                    s,
                                    [
                                        c,
                                        p
                                    ]
                                ],
                                [
                                    /\s(tablet|tab)[;\/]/i,
                                    /\s(mobile)(?:[;\/]|\ssafari)/i
                                ],
                                [
                                    [
                                        c,
                                        h.lowerize
                                    ],
                                    u,
                                    s
                                ],
                                [/[\s\/\(](smart-?tv)[;\)]/i],
                                [[
                                        c,
                                        f
                                    ]],
                                [/(android[\w\.\s\-]{0,9});.+build/i],
                                [
                                    s,
                                    [
                                        u,
                                        'Generic'
                                    ]
                                ],
                                [/(phone)/i],
                                [[
                                        c,
                                        d
                                    ]]
                            ],
                            engine: [
                                [/windows.+\sedge\/([\w\.]+)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'EdgeHTML'
                                    ]
                                ],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Blink'
                                    ]
                                ],
                                [
                                    /(presto)\/([\w\.]+)/i,
                                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                                    /(icab)[\/\s]([23]\.[\d\.]+)/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                                [
                                    l,
                                    a
                                ]
                            ],
                            os: [
                                [
                                    /(xbox);\s+xbox\s([^\);]+)/i,
                                    /microsoft\s(windows)\s(vista|xp)/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [
                                    /(windows)\snt\s6\.2;\s(arm)/i,
                                    /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                                    /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                                ],
                                [
                                    a,
                                    [
                                        l,
                                        g.str,
                                        y.os.windows.version
                                    ]
                                ],
                                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                [
                                    [
                                        a,
                                        'Windows'
                                    ],
                                    [
                                        l,
                                        g.str,
                                        y.os.windows.version
                                    ]
                                ],
                                [/\((bb)(10);/i],
                                [
                                    [
                                        a,
                                        'BlackBerry'
                                    ],
                                    l
                                ],
                                [
                                    /(blackberry)\w*\/?([\w\.]*)/i,
                                    /(tizen|kaios)[\/\s]([\w\.]+)/i,
                                    /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                                [
                                    [
                                        a,
                                        'Symbian'
                                    ],
                                    l
                                ],
                                [/\((series40);/i],
                                [a],
                                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                [
                                    [
                                        a,
                                        'Firefox OS'
                                    ],
                                    l
                                ],
                                [/crkey\/([\d\.]+)/i],
                                [
                                    l,
                                    [
                                        a,
                                        'Chromecast'
                                    ]
                                ],
                                [
                                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                                    /(mint)[\/\s\(]?(\w*)/i,
                                    /(mageia|vectorlinux)[;\s]/i,
                                    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                    /(hurd|linux)\s?([\w\.]*)/i,
                                    /(gnu)\s?([\w\.]*)/i
                                ],
                                [
                                    a,
                                    l
                                ],
                                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                [
                                    [
                                        a,
                                        'Chromium OS'
                                    ],
                                    l
                                ],
                                [/(sunos)\s?([\w\.\d]*)/i],
                                [
                                    [
                                        a,
                                        'Solaris'
                                    ],
                                    l
                                ],
                                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                                [
                                    a,
                                    l
                                ],
                                [/(haiku)\s(\w+)/i],
                                [
                                    a,
                                    l
                                ],
                                [
                                    /cfnetwork\/.+darwin/i,
                                    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i
                                ],
                                [
                                    [
                                        l,
                                        /_/g,
                                        '.'
                                    ],
                                    [
                                        a,
                                        'iOS'
                                    ]
                                ],
                                [
                                    /(mac\sos\sx)\s?([\w\s\.]*)/i,
                                    /(macintosh|mac(?=_powerpc)\s)/i
                                ],
                                [
                                    [
                                        a,
                                        'Mac OS'
                                    ],
                                    [
                                        l,
                                        /_/g,
                                        '.'
                                    ]
                                ],
                                [
                                    /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                                    /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                                    /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                    /(unix)\s?([\w\.]*)/i
                                ],
                                [
                                    a,
                                    l
                                ]
                            ]
                        }, v = function (e, t) {
                            if ('object' == typeof e && (t = e, e = void 0), !(this instanceof v))
                                return new v(e, t).getResult();
                            var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ''), o = t ? h.extend(m, t) : m;
                            return this.getBrowser = function () {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return g.rgx.call(e, n, o.browser), e.major = h.major(e.version), e;
                            }, this.getCPU = function () {
                                var e = { architecture: void 0 };
                                return g.rgx.call(e, n, o.cpu), e;
                            }, this.getDevice = function () {
                                var e = {
                                    vendor: void 0,
                                    model: void 0,
                                    type: void 0
                                };
                                return g.rgx.call(e, n, o.device), e;
                            }, this.getEngine = function () {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return g.rgx.call(e, n, o.engine), e;
                            }, this.getOS = function () {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return g.rgx.call(e, n, o.os), e;
                            }, this.getResult = function () {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                };
                            }, this.getUA = function () {
                                return n;
                            }, this.setUA = function (e) {
                                return n = e, this;
                            }, this;
                        };
                    v.VERSION = '0.7.24', v.BROWSER = {
                        NAME: a,
                        MAJOR: 'major',
                        VERSION: l
                    }, v.CPU = { ARCHITECTURE: 'architecture' }, v.DEVICE = {
                        MODEL: s,
                        VENDOR: u,
                        TYPE: c,
                        CONSOLE: 'console',
                        MOBILE: d,
                        SMARTTV: f,
                        TABLET: p,
                        WEARABLE: 'wearable',
                        EMBEDDED: 'embedded'
                    }, v.ENGINE = {
                        NAME: a,
                        VERSION: l
                    }, v.OS = {
                        NAME: a,
                        VERSION: l
                    }, void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = v), t.UAParser = v) : void 0 === (o = function () {
                        return v;
                    }.call(t, n, t, e)) || (e.exports = o);
                    var b = r && (r.jQuery || r.Zepto);
                    if (b && !b.ua) {
                        var w = new v();
                        b.ua = w.getResult(), b.ua.get = function () {
                            return w.getUA();
                        }, b.ua.set = function (e) {
                            w.setUA(e);
                            var t = w.getResult();
                            for (var n in t)
                                b.ua[n] = t[n];
                        };
                    }
                }('object' == typeof window ? window : this);
            },
            ,
            ,
            ,
            function (e, t, n) {
                'use strict';
                n.r(t);
                var o = [];
                'fetch' in window && 'from' in Array && 'isArray' in Array && 'reduce' in Array.prototype && 'fill' in Array.prototype && 'forEach' in Array.prototype && 'filter' in Array.prototype && 'find' in Array.prototype && 'map' in Array.prototype && 'isNaN' in Number && 'Symbol' in window || o.push(Promise.all([
                    n.e(5),
                    n.e(2)
                ]).then(n.bind(null, 145)));
                var r = o, i = n(10), s = n.n(i);
                function a(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return c(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, t) {
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
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function u(e) {
                    return (u = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var l = [
                        'debug',
                        'info',
                        'warn',
                        'error'
                    ], d = l.reduce(function (e, t, n) {
                        return e[t] = function () {
                            var e = 'debug' === t ? 'log' : t, o = b.logging;
                            if (Function.prototype.bind && window.console && 'object' === u(console.log) && [
                                    'log',
                                    'info',
                                    'warn',
                                    'error',
                                    'assert',
                                    'dir',
                                    'clear',
                                    'profile',
                                    'profileEnd'
                                ].forEach(function (e) {
                                    console[e] = this.bind(console[e], console);
                                }, Function.prototype.call), o && console && 'function' == typeof console[e]) {
                                var r = l.indexOf(o.toString().toLocaleLowerCase());
                                if (!0 === o || r > -1 && n >= r) {
                                    for (var i, s = arguments.length, c = new Array(s), d = 0; d < s; d++)
                                        c[d] = arguments[d];
                                    var p = [].concat(c), f = p[0], h = p.slice(1);
                                    (i = console)[e].apply(i, [''.concat(t.toUpperCase(), ' - (CMP) ').concat(f)].concat(a(h)));
                                }
                            }
                        }, e;
                    }, {});
                function p() {
                    return (p = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function f(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function h(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? f(Object(n), !0).forEach(function (t) {
                            g(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function g(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function y(e) {
                    return (y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var m = {
                    env: 'production',
                    cmpId: 3,
                    configVersion: null,
                    appId: null,
                    logo: './assets/icons/pm-logo-dark.svg',
                    backdrop: 'rgba(0,0,0,0.5)',
                    useSystemFonts: !1,
                    storeConsentGlobally: !1,
                    thirdPartyCookieSync: !1,
                    useSecondLevelDomain: !0,
                    useCookies: !0,
                    useExternalData: !1,
                    preferenceLink: {
                        enabled: !1,
                        apiKey: null,
                        identifier: null,
                        identifyingField: null
                    },
                    forceMobile: !1,
                    logging: !1,
                    topics: {
                        en: [
                            {
                                title: 'Why Do You Need My Consent?',
                                text: '<p>This site and its partners store and access personal data based on unique identifiers such as cookies. The EU General Data Protection Regulation calls for freely-given consent prior to processing any personal data. As such, to provide the best experience for you on our properties, we ask for your consent to allow us and our partners to process your data. \n\nBy accepting or rejecting consent, you give your express consent with regards to data processing on this site. You agree to share your personal data with us and our partners on this site. If you do not consent to or withdraw consent from data processing by us and our partners, this may adversely affect site functions and your experience.\n\nTo see the list of vendors processing your data, click on the \u201COur Partners\u201D link below.\n</p>',
                                tip: '',
                                icon: 'how-is-my-data-used',
                                expanded: !1,
                                showOnNotice: !1,
                                displayPurposes: !1
                            },
                            {
                                title: 'Why Do You Use My Data?',
                                text: '<p>By reviewing and consenting to the purposes and special features listed, you agree to have your personal data processed by us and our partners. This enables us to improve our services and facilitate a better user experience for you. Not consenting or withdrawing consent, may adversely affect certain features and functions of our digital properties.\n\nWe process your data for a variety of purposes. These purposes and the special features that support these purposes are listed below.</p>',
                                tip: '',
                                icon: 'consent',
                                expanded: !1,
                                showOnNotice: !1,
                                displayPurposes: !0
                            },
                            {
                                title: 'Withdrawing My Consent',
                                text: '<ul><li>Withdrawing Consent</li></ul><p>You may withdraw your consent and update your preferences at any time by resurfacing the Privacy Manager. However, please be aware that not all vendors request consent and some may process data on the basis of legitimate interest \u2013 you have the right to object processing on both these grounds. Click \u201COur Partners\u201D below to review the list of vendors processing data based on consent and legitimate interest.</p><ul><li>Resurfacing the Privacy Manager</li></ul><p>You can review and update your privacy settings at any time by clicking the Privacy Settings Icon in the bottom of the screen.</p>',
                                tip: '',
                                icon: 'cookie',
                                expanded: !1,
                                showOnNotice: !1,
                                displayPurposes: !1
                            }
                        ]
                    },
                    supportedLocales: ['en'],
                    defaultLocale: 'en',
                    forceLocale: null,
                    consentDataConfig: {
                        vendors: null,
                        handleLegIntOnAcceptAndDenyAll: !1,
                        purposeOneTreatment: !1,
                        publisherCC: null,
                        publisher: {
                            enabled: !1,
                            purposes: null,
                            legIntPurposes: null,
                            specialPurposes: null,
                            lockedPurposes: null,
                            features: null,
                            name: 'Publisher / Brand',
                            policyUrl: null
                        },
                        publisherRestrictions: [],
                        lockedPurposesPerVendor: []
                    },
                    redisplayAfter: {
                        accept: 31536000,
                        reject: 31536000,
                        vendorChange: 2592000,
                        configChange: 2592000
                    },
                    geoTargeting: {
                        allCountries: !1,
                        countries: [
                            'AT',
                            'BE',
                            'BG',
                            'HR',
                            'CY',
                            'CZ',
                            'DK',
                            'EE',
                            'FI',
                            'FR',
                            'DE',
                            'GR',
                            'HU',
                            'IE',
                            'IT',
                            'LT',
                            'LV',
                            'LU',
                            'MT',
                            'NL',
                            'PL',
                            'PT',
                            'RO',
                            'SK',
                            'SI',
                            'ES',
                            'SE',
                            'GB'
                        ],
                        includeSelection: !0
                    },
                    gdprApplies: !0,
                    suppressUI: !1,
                    localization: {},
                    theme: 'defaultTheme',
                    disableLoadInIframe: !1,
                    toggleConfig: {
                        displayToggleOnMobile: !0,
                        displayToggle: !0,
                        id: 'gdpr-toggle',
                        zIndex: 2147483646,
                        position: 'bottomRight',
                        openPrivacyInformation: !1,
                        toggleUrl: null,
                        style: {
                            icon: 'cookie',
                            iconStyle: {
                                color: '#fff',
                                backgroundColor: '#48484A'
                            }
                        }
                    },
                    actionButtons: {
                        acceptAll: {
                            showDialog: !1,
                            style: {
                                type: 'raised',
                                backgroundColor: '#F88D37'
                            }
                        },
                        denyAll: {
                            showDialog: !0,
                            style: {
                                type: 'outlined',
                                backgroundColor: '#F88D37'
                            }
                        },
                        saveAndExit: {
                            showDialog: !1,
                            style: {
                                type: 'raised',
                                backgroundColor: '#F88D37'
                            }
                        },
                        privacySettings: {
                            style: {
                                backgroundColor: '#F88D37',
                                type: 'outlined'
                            }
                        }
                    },
                    noticeConfig: {
                        id: 'gdpr-consent-notice',
                        display: !0,
                        hideAfter: null,
                        hideLogo: !1,
                        showBackdrop: !0,
                        loadLimit: null,
                        showCloseButton: !1,
                        showDenyButton: !0,
                        resurfacingElaboration: 'toggle',
                        desktopConfig: {
                            type: 'bar',
                            position: 'modal',
                            privacyLinks: {
                                style: {
                                    textSize: 14,
                                    textColor: '#000000',
                                    bold: !1,
                                    italic: !1,
                                    underline: !1,
                                    showIcon: !1,
                                    iconColor: '#d5632d',
                                    icon: 'settings'
                                }
                            }
                        },
                        mobileConfig: {
                            mobile: !0,
                            matchDesktop: !1,
                            type: 'bar',
                            position: 'modal',
                            privacyLinks: {
                                style: {
                                    textSize: 14,
                                    textColor: '#000000',
                                    bold: !1,
                                    italic: !1,
                                    underline: !1,
                                    showIcon: !1,
                                    iconColor: '#d5632d',
                                    icon: 'settings'
                                }
                            }
                        },
                        location: 'https://gdpr-consent-tool.privacymanager.io/1.2.1/index.html#/notice'
                    },
                    managerConfig: {
                        id: 'gdpr-consent-manager',
                        hideLogo: !1,
                        showBackdrop: !0,
                        name: 'faktor.io',
                        showCloseButton: !1,
                        showBackToNotice: !0,
                        showDenyButton: !0,
                        displayAllVendorsToggle: !1,
                        detachPurposesFromVendors: !0,
                        location: 'https://gdpr-consent-tool.privacymanager.io/1.2.1/index.html#/manager'
                    },
                    disclosure: {
                        hide: !1,
                        hideCustomPurposes: !0,
                        stacks: [
                            1,
                            42
                        ],
                        stacksAndPurposesOrder: [],
                        customStacks: {
                            en: [{
                                    name: 'Functional, Analytics, Advertising (non-IAB vendors) and Social Media cookies',
                                    description: 'We use functional cookies for the service to function properly. Data and cookies can be used to provide an improved user experience, select relevant content and ads and track activities for analytical purposes. Lastly we provide services to share content on social networks.'
                                }]
                        }
                    },
                    externalLinks: {
                        privacyPolicy: {
                            showLink: !1,
                            url: ''
                        },
                        imprint: {
                            showLink: !1,
                            url: ''
                        }
                    },
                    loadedFromLaunchPad: !1,
                    cmpVersion: '1.2.1',
                    vendorListLocation: 'https://vendors.privacymanager.io/vendor-list.json',
                    purposeListLocalePath: 'https://vendors.privacymanager.io/',
                    customVendorListPath: 'https://gdpr-wrapper.privacymanager.io/gdpr/',
                    globalConsentLocation: 'https://cmp.faktor.mgr.consensu.org/dist/1.2.1/portal.html',
                    sharedConsentLocation: 'https://gdpr.privacymanager.io/1.2.1/portal.html',
                    consentLoggingURL: 'https://gdpr-web-logs-prod.privacymanager.io/kinesis/streams/tcf-web-audit-logs-stream-prod/records',
                    dailyActiveUserLoggingURL: 'https://gdpr-web-dau-prod.privacymanager.io/kinesis/streams/tcf-web-daily-active-users-prod/records',
                    geoTargetingUrl: 'https://geo.privacymanager.io',
                    preferenceLinkURL: 'https://data-api.preferencelink.com/v1/subjects',
                    publicPath: 'https://gdpr.privacymanager.io/1.2.1/'
                } || s.a.generate();
                function v(e, t) {
                    var n = h(h({}, e), t);
                    return Object.keys(e).forEach(function (o) {
                        var r, i;
                        e[o] && 'object' === y(e[o]) && (r = e[o], ('function' === (i = y(r)) || 'object' === i && r) && r.constructor !== Array && t[o] ? n[o] = v(e[o], t[o]) : !t[o] || t[o].constructor !== String && t[o].constructor !== Array ? e[o].constructor === String || e[o].constructor === Array ? n[o] = e[o] : n[o] = h(h({}, e[o]), t[o]) : n[o] = t[o]);
                    }), n;
                }
                var b = new function e() {
                        var t = this;
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), g(this, 'update', function (e) {
                            if (e && 'object' === y(e)) {
                                var n = Object.keys(m), o = Object.keys(e).reduce(function (t, o) {
                                        return n.indexOf(o) > -1 ? t.validUpdates = h(h({}, t.validUpdates), {}, g({}, o, e[o])) : t.invalidKeys.push(o), t;
                                    }, {
                                        validUpdates: {},
                                        invalidKeys: []
                                    }), r = o.validUpdates, i = o.invalidKeys, s = v(t, r);
                                p(t, s), i.length && d.warn('Invalid CMP config values not applied: '.concat(i.join(', ')));
                            }
                        }), this.update(m);
                    }(), w = n(11), C = n(1), S = n.n(C);
                function P(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function T(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? P(Object(n), !0).forEach(function (t) {
                            L(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function L(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var O, A, I = 0, k = 0, D = {}, x = {};
                function j(e, t) {
                    return new S.a(function (n, o) {
                        var r = function (e) {
                                var t = document.createElement('iframe');
                                return t.setAttribute('style', 'display: none;'), t.setAttribute('src', e), t;
                            }(e), i = function (e) {
                                var t = setInterval(function () {
                                    document.body && (document.body.appendChild(e), clearInterval(t));
                                }, 5);
                                return t;
                            }(r), s = setTimeout(function () {
                                clearInterval(i), o(new Error('Communication could not be established with the portal domain within '.concat(50000, ' milliseconds')));
                            }, 50000);
                        window.addEventListener('message', function (e) {
                            if (e && e.data) {
                                var o = e.data.tcfData;
                                if (o)
                                    if ('isLoaded' === o.command && s)
                                        clearTimeout(s), s = void 0, n(r);
                                    else {
                                        var i = t[o.callId];
                                        if (i) {
                                            var a = i.resolve, c = i.timeout;
                                            delete t[o.callId], clearTimeout(c), a(o.result);
                                        }
                                    }
                            }
                        });
                    });
                }
                function E(e, t, n, o, r, i) {
                    var s = setTimeout(function () {
                        delete n[o], i(new Error(''.concat(t.command, ' response not received from portal domain within ').concat(5000, ' milliseconds')));
                    }, 5000);
                    n[o] = {
                        resolve: r,
                        timeout: s
                    };
                    var a = { tcfData: T({ callId: o }, t) };
                    e.contentWindow.postMessage(a, '*');
                }
                function V(e) {
                    var t = 'vp:'.concat(++I);
                    return new S.a(function (n, o) {
                        return (O || (O = j(b.globalConsentLocation, D)), O).then(function (r) {
                            E(r, e, D, t, n, o);
                        }).catch(o);
                    });
                }
                function B(e) {
                    var t = 'vp:'.concat(++k);
                    return new S.a(function (n, o) {
                        return (A || (A = j(b.sharedConsentLocation, x)), A).then(function (r) {
                            E(r, e, x, t, n, o);
                        }).catch(o);
                    });
                }
                var _ = n(0);
                function M(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || U(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function U(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return N(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(e, t) : void 0;
                    }
                }
                function N(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                var F = n(9), R = 33696000, z = 'Thu, 01 Jan 1970 00:00:01 GMT;', H = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                function G() {
                    var e, t, n = 'lr_get_top_level_domain=cookie', o = document.location.hostname.split('.');
                    for (e = o.length - 1; e >= 0; e--)
                        if (t = o.slice(e).join('.'), document.cookie = n + ';domain=.' + t + ';SameSite=Lax', document.cookie.indexOf(n) > -1)
                            return document.cookie = n.split('=')[0] + '=;domain=.' + t + ';expires=='.concat(z, 'SameSite=Lax'), t;
                    return null;
                }
                function W() {
                    var e = location.href.split('?')[1], t = {};
                    if (e) {
                        var n, o = function (e, t) {
                                var n;
                                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (Array.isArray(e) || (n = U(e)) || t && e && 'number' == typeof e.length) {
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
                                var i, s = !0, a = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return s = e.done, e;
                                    },
                                    e: function (e) {
                                        a = !0, i = e;
                                    },
                                    f: function () {
                                        try {
                                            s || null == n.return || n.return();
                                        } finally {
                                            if (a)
                                                throw i;
                                        }
                                    }
                                };
                            }(e.split('&'));
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var r = M(n.value.split('='), 2), i = r[0], s = r[1];
                                t[i] = s;
                            }
                        } catch (e) {
                            o.e(e);
                        } finally {
                            o.f();
                        }
                    }
                    return t;
                }
                function q(e) {
                    return W()[e];
                }
                function Y(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = '; '.concat(document.cookie), o = n.split('; '.concat(e, '='));
                    return o.length >= 2 ? o.pop().split(';').shift() : t ? null : J(e, !0);
                }
                function K(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '/', r = null === n ? '' : ';max-age='.concat(n), i = null === n ? '' : ';expires=' + new Date(1 * new Date() + 1000 * n).toUTCString();
                    o = ';path='.concat(o);
                    var s = G();
                    return s = s ? ';domain=.'.concat(s) : '', t ? b.useSecondLevelDomain ? (document.cookie = ''.concat(e, '=').concat(o, ';expires=').concat(z, 'SameSite=Lax'), document.cookie = ''.concat(e, '=').concat(t).concat(o).concat(s).concat(r).concat(i, ';SameSite=Lax')) : (document.cookie = ''.concat(e, '=').concat(s).concat(o, ';expires=').concat(z, 'SameSite=Lax'), document.cookie = ''.concat(e, '=').concat(t).concat(o).concat(r).concat(i, ';SameSite=Lax')) : (document.cookie = ''.concat(e, '=').concat(o, ';expires=').concat(z, 'SameSite=Lax'), document.cookie = ''.concat(e, '=').concat(s).concat(o, ';expires=').concat(z, 'SameSite=Lax')), Y(e);
                }
                function J(e) {
                    const $___old_ff488c2442de5aea = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_ff488c2442de5aea)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                        return function () {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            try {
                                if (localStorage)
                                    if (n) {
                                        var o = localStorage.getItem(e);
                                        if (o)
                                            return o;
                                    } else {
                                        var r = JSON.parse(localStorage.getItem(e));
                                        if (r && r.data) {
                                            if (!r.expire || r.expire > +new Date())
                                                return r.data;
                                            if (!t) {
                                                var i = Y(e, !0);
                                                return i || r.data;
                                            }
                                        }
                                    }
                            } catch (t) {
                                d.error('Unable to parse '.concat(e, ' from localStorage: '), t);
                            }
                            return t ? null : Y(e, !0);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_ff488c2442de5aea)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_ff488c2442de5aea));
                    }
                }
                function Q(e, t) {
                    const $___old_a6d8df38b5671daa = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_a6d8df38b5671daa)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                        return function () {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : R, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            try {
                                if (localStorage) {
                                    if (t) {
                                        var r = {
                                            data: t,
                                            expire: +new Date(1 * new Date() + 1000 * n)
                                        };
                                        localStorage.setItem(e, JSON.stringify(r));
                                    } else
                                        localStorage.removeItem(e);
                                    return t;
                                }
                            } catch (t) {
                                d.error('Unable to store '.concat(e, ' to localStorage: '), t);
                            }
                            return o ? null : K(e, t, n);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_a6d8df38b5671daa)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_a6d8df38b5671daa));
                    }
                }
                function $(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (b.useExternalData) {
                        var o = q(e);
                        if (o)
                            return d.debug('Skipping cookies and localStorage for '.concat(e, ', read from query string: '), o), o;
                    }
                    return b.useCookies ? Y(e) : J(e, t, n);
                }
                function X(e, t, n, o) {
                    return b.useCookies ? K(e, t, n, o) : Q(e, t, n);
                }
                function Z(e, t, n) {
                    return d.debug('Request data from portal'), e({
                        command: t,
                        name: n,
                        useCookies: b.useCookies
                    }).then(function (e) {
                        return d.debug('Read data from portal: ', e), e;
                    }).catch(function (e) {
                        d.error('Failed reading from portal: ', e);
                    });
                }
                function ee(e, t, n, o, r) {
                    return d.debug('Send data to portal: ', o), e({
                        command: t,
                        name: n,
                        value: o,
                        maxAgeSeconds: r,
                        useCookies: b.useCookies
                    }).catch(function (e) {
                        d.error('Failed writing data on portal: ', e);
                    });
                }
                function te(e, t) {
                    var n = $(e);
                    return n && !t || H && b.useCookies || !b.thirdPartyCookieSync ? (d.debug('Read local consent data: ', n), Promise.resolve(new _.TCStringV2(n))) : Z(B, 'read', e).then(function (n) {
                        return d.debug('Read consent data from portal: ', n), n && !t && X(e, n, R), new _.TCStringV2(n);
                    });
                }
                function ne(e, t) {
                    var n = e ? 'cconsent-v2' : 'euconsent-v2';
                    return t || H && b.useCookies || !b.storeConsentGlobally ? te(n, t) : Z(V, 'read', n).then(function (e) {
                        if (!e)
                            return te(n);
                        var t = new _.TCStringV2(e);
                        return Promise.resolve(t);
                    });
                }
                function oe(e, t, n, o, r) {
                    var i = e.getConsentString(!n), s = t ? 'cconsent-v2' : 'euconsent-v2';
                    return H && b.useCookies || !b.storeConsentGlobally ? r && b.thirdPartyCookieSync ? ee(B, 'write', s, i, R) : function (e, t, n) {
                        return d.debug('Write consent data locally: ', t), n || H && b.useCookies || !b.thirdPartyCookieSync || ee(B, 'write', e, t, R), Promise.resolve(X(e, t, R));
                    }(s, i, o) : ee(V, 'write', s, i, R).then(function (e) {
                        return Promise.resolve(e);
                    });
                }
                function re() {
                    var e = $('gdpr-auditId');
                    return e ? Promise.resolve(e) : H && b.useCookies || !b.thirdPartyCookieSync ? Promise.resolve(ie(null)) : Z(B, 'read', 'gdpr-auditId').then(function (e) {
                        return d.debug('Read geo location from portal: ', e), e ? ie(e) : ie(null, !0);
                    });
                }
                function ie(e, t) {
                    var n = e || F();
                    return n = n.replace(/[^\w\s]/gi, ''), !t || H && b.useCookies || !b.thirdPartyCookieSync || ee(B, 'write', 'gdpr-auditId', n, R), X('gdpr-auditId', n, R);
                }
                function se() {
                    var e = $('gdpr-dau');
                    return d.debug('Read local daily active user: ', e), e;
                }
                function ae() {
                    return d.debug('Write daily active user value locally'), X('gdpr-dau', !0, 86400);
                }
                function ce() {
                    var e = $('gdpr-last-interaction');
                    return e ? (d.debug('Read local last interaction timestamp: ', e), Promise.resolve(e)) : H && b.useCookies || !b.thirdPartyCookieSync ? Promise.resolve(e) : Z(B, 'read', 'gdpr-last-interaction').then(function (e) {
                        return d.debug('Read last interaction from portal: ', e), e ? ue(e) : e;
                    });
                }
                function ue(e, t) {
                    var n = e || new Date().getTime() / 1000;
                    return d.debug('Write last interaction timestamp locally: ', n), !t || H && b.useCookies || !b.thirdPartyCookieSync || ee(B, 'write', 'gdpr-last-interaction', n, R), X('gdpr-last-interaction', n, R);
                }
                function le() {
                    var e = $('gdpr-config-version');
                    return e ? (d.debug('Read local config version: ', e), Promise.resolve(parseInt(e, 10))) : H && b.useCookies || !b.thirdPartyCookieSync ? Promise.resolve(e) : Z(B, 'read', 'gdpr-config-version').then(function (e) {
                        return d.debug('Read config version from portal: ', e), e ? de(parseInt(e, 10)) : e;
                    });
                }
                function de(e, t) {
                    return e = e || b.configVersion, d.debug('Write config version locally: ', e), !t || H && b.useCookies || !b.thirdPartyCookieSync || ee(B, 'write', 'gdpr-config-version', e, R), X('gdpr-config-version', e, R);
                }
                function pe(e, t) {
                    !t || H && b.useCookies || !b.thirdPartyCookieSync || ee(B, 'write', 'geo-location', e, 86400), X('geo-location', e, 86400);
                }
                function fe() {
                    var e = $('geo-location');
                    if (e)
                        try {
                            return Promise.resolve(JSON.parse(e));
                        } catch (e) {
                            d.debug('Error while parsing local geoLocation: ', e);
                        }
                    return H && b.useCookies || !b.thirdPartyCookieSync ? Promise.resolve(e) : Z(B, 'read', 'geo-location').then(function (e) {
                        d.debug('Read geo location from portal: ', e);
                        try {
                            if (e)
                                return pe(e), JSON.parse(e);
                        } catch (e) {
                            d.debug('Error while parsing geoLocation from portal: ', e);
                        }
                        return null;
                    });
                }
                function he(e, t) {
                    return !t || H && b.useCookies || !b.thirdPartyCookieSync || ee(B, 'write', 'addtl_consent', e, R), X('addtl_consent', e, R);
                }
                function ge(e) {
                    var t = $('addtl_consent');
                    return t && !e || H && b.useCookies || !b.thirdPartyCookieSync ? (d.debug('Read local AC string: ', t), Promise.resolve(t)) : Z(B, 'read', 'addtl_consent').then(function (t) {
                        return d.debug('Read AC string from portal: ', t), t && !e && X('addtl_consent', t, R), t;
                    });
                }
                function ye() {
                    var e = $('gdpr-dau-log-sent');
                    return d.debug('Read local daily active user log sent: ', e), e;
                }
                function me() {
                    return X('gdpr-dau-log-sent', !0, 86400);
                }
                function ve() {
                    return J('gdprPublisherSelection', !0);
                }
                function be(e) {
                    Q('gdprPublisherSelection', e, R, !0);
                }
                function we() {
                    var e = b.preferenceLink.identifier || b.preferenceLink.identifyingField || 'userIdentifier';
                    d.debug('Read user identifier: ', e);
                    var t = q(e);
                    return t || (t = $(e, !1, !0)), t ? Promise.resolve(t) : (d.debug('User identifier not found, fallback to auditId'), re());
                }
                function Ce(e) {
                    return (Ce = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function Se(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function Pe(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Se(Object(n), !0).forEach(function (t) {
                            Ae(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function Te(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return Le(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return Le(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function Le(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function Oe(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                function Ae(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var Ie = Object(w.getDefault)();
                function ke(e) {
                    var t, n = null, o = (t = $(b.appId + 'locale'), d.debug('Read local locale: ', t), t), r = b.forceLocale;
                    return r && (n = xe(r)), !n && o && (n = xe(o)), n || (n = xe(navigator && (navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.languages && navigator.languages[0] || null))), !n && b.defaultLocale && (n = xe(b.defaultLocale)), n || (n = 'en'), 'nb' !== n && 'nb-no' !== n && 'nn' !== n && 'nn-no' !== n || (n = 'no'), e && !e[n] && (e[n = n.substr(0, 2)] || (n = 'en')), n;
                }
                function De(e) {
                    return (t = e) && 'string' == typeof t && b.supportedLocales && b.supportedLocales.indexOf(e) > -1;
                    var t;
                }
                function xe(e) {
                    return De(e = e.toLowerCase()) || e !== e.substr(0, 2) && De(e = e.substr(0, 2)) ? e : null;
                }
                var je = new (function () {
                        function e(t) {
                            var n = this;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                            }(this, e), Ae(this, 'processLocalized', function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.keys(e);
                                return t.reduce(function (t, o) {
                                    var r = Te(o.toLowerCase().split('-'), 1)[0];
                                    return Pe(Pe({}, t), {}, Ae({}, o.toLowerCase(), Pe(Pe(Pe({}, t[o]), n.flattenObject(e[r])), n.flattenObject(e[o]))));
                                }, {});
                            }), Ae(this, 'flattenObject', function (e) {
                                var t = {};
                                return function e(n, o) {
                                    n && Object.keys(n).forEach(function (r) {
                                        var i = o ? ''.concat(o, '.').concat(r) : r, s = n[r];
                                        if (s && 'object' === Ce(s))
                                            return e(s, i);
                                        t[i] = s;
                                    });
                                }(e), t;
                            }), Ae(this, 'removeLabelsFromDefaultTranslations', function (e) {
                                ['purposesTabNote'].forEach(function (t) {
                                    delete e.en[t];
                                });
                            });
                            var o = this.processLocalized(t), r = ke(), i = o[r] ? o[r] : o[r.substr(0, 2)];
                            this.localizedValues = Pe({}, i);
                        }
                        var t, n, o;
                        return t = e, (n = [{
                                key: 'updateTranslations',
                                value: function () {
                                    var e = Pe({}, Ie);
                                    this.removeLabelsFromDefaultTranslations(e);
                                    var t = [
                                        'introTitle',
                                        'introDescription',
                                        'vendorsTitle',
                                        'vendorsTabDescription',
                                        'vendorsDetailsTitle',
                                        'vendorsDetailsDescription',
                                        'publisherDetailsDescription',
                                        'purposesTitle',
                                        'purposesTabDescription',
                                        'purposesDetailsTitle',
                                        'purposesDetailsDescription',
                                        'specialPurposeDetailsTitle',
                                        'specialPurposeDetailsDescription',
                                        'featureDetailsTitle',
                                        'featureDetailsDescription',
                                        'specialFeaturesDetailsTitle',
                                        'specialFeaturesDetailsDescription',
                                        'publisherDetailsTitle',
                                        'publisherDetailsIntroText',
                                        'privacyInformationSubtitle',
                                        'privacyInformationDescription'
                                    ];
                                    Object.keys(b.localization).forEach(function (n) {
                                        Object.keys(b.localization[n]).forEach(function (e) {
                                            -1 === t.indexOf(e) && !b.localization[n][e] && delete b.localization[n][e];
                                        }), e[n] = Pe(Pe(Pe({}, e.en), e[n]), b.localization[n]);
                                    });
                                    var n = this.processLocalized(e), o = ke(n), r = n[o] ? n[o] : n[o.substr(0, 2)];
                                    this.localizedValues = Pe({}, r);
                                }
                            }]) && Oe(t.prototype, n), o && Oe(t, o), e;
                    }())(Pe(Pe({}, Ie), b.localization)), Ee = function (e, t) {
                        const $___old_e066a21ac0f18686 = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                        try {
                            if ($___old_e066a21ac0f18686)
                                ({}.constructor.defineProperty(window, 'fetch', $___mock_b3a105678096e0ee.fetch));
                            return function () {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10000;
                                return Promise.race([
                                    fetch(e, t),
                                    new Promise(function (e, t) {
                                        return setTimeout(function () {
                                            return t(new Error('timeout'));
                                        }, n);
                                    })
                                ]);
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_e066a21ac0f18686)
                                ({}.constructor.defineProperty(window, 'fetch', $___old_e066a21ac0f18686));
                        }
                    };
                function Ve(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function Be(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ve(Object(n), !0).forEach(function (t) {
                            _e(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function _e(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var Me = 'en', Ue = !1, Ne = !1, Fe = new function e() {
                        var t = this;
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), _e(this, 'getVendorList', function (e, n) {
                            return Ue = n, t.vendorList = t.vendorList || new Map(), t.vendorList.has(Ue ? 'gvl' : e) ? Promise.resolve(t.vendorList.get(Ue ? 'gvl' : e)) : (Me = e || 'en', t.retrieveCachedData('gdprVendorList', t.fetchVendorList).then(function (e) {
                                return t.setVendorList(Me, e), e;
                            }));
                        }), _e(this, 'setVendorList', function (e, n) {
                            Ne || t.cacheData('gdprVendorList', n), t.vendorList.set(e, n), Ue && t.vendorList.set('gvl', n);
                        }), _e(this, 'fetchVendorList', function (e) {
                            var n = b.previewMode || Ue ? b.vendorListLocation : ''.concat(b.customVendorListPath).concat(b.appId, '/vendor-list.json');
                            return n ? Ee(n, {
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                }
                            }).then(function (e) {
                                return e.json();
                            }).then(function (e) {
                                return 'en' !== Me && !Ue && b.purposeListLocalePath ? t.readLocalePurposeList(Me, e) : e;
                            }).catch(function (o) {
                                return d.error('Failed to load vendor list from '.concat(n), o), Ue ? e : t.getVendorList(Me, !0);
                            }).then(function (e) {
                                return e || ('en' !== Me ? t.getVendorList('en') : null);
                            }) : (d.error('Vendor List URL not provided'), Promise.resolve({}));
                        }), _e(this, 'readLocalePurposeList', function (e, n) {
                            var o = ''.concat(b.purposeListLocalePath, 'purposes-').concat(e, '.json');
                            return Ee(o, { headers: { Accept: 'application/json' } }).then(function (e) {
                                return e.json();
                            }).then(function (e) {
                                return e && (n = Be(Be({}, n), e)), n;
                            }).catch(function (e) {
                                return d.error('Failed to load purpose list from '.concat(o), e), n;
                            }).then(function (n) {
                                var o = e.substr(0, 2);
                                return e !== o ? t.readLocalePurposeList(o, n) : n;
                            });
                        }), _e(this, 'retrieveCachedData', function (e, n) {
                            const $___old_29b15507e28b4eff = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_29b15507e28b4eff)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                                return function () {
                                    Ne = !1;
                                    try {
                                        var o, r = Ue ? 'gvl' : ''.concat(Me, '-').concat(b.configVersion);
                                        if (localStorage) {
                                            var i = JSON.parse(localStorage.getItem(e));
                                            if (i && i[r] && i[r].data) {
                                                if (i[r].expire > +new Date())
                                                    return Ne = !0, Promise.resolve(i[r].data);
                                                o = i[r].data;
                                            } else if (!Ue && 'en' !== Me)
                                                return t.readLocalePurposeList(Me, t.vendorList.get('en'));
                                        }
                                        return n(o);
                                    } catch (t) {
                                        return d.error('Unable to parse '.concat(e, ' from localStorage'), t), n();
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_29b15507e28b4eff)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_29b15507e28b4eff));
                            }
                        }), _e(this, 'cacheData', function (e, n) {
                            const $___old_2e3b5833f2d437d9 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_2e3b5833f2d437d9)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                                return function () {
                                    try {
                                        if (localStorage && n && (n.purposes || n.vendors)) {
                                            var o = JSON.parse(localStorage.getItem(e)) || {};
                                            Ue && t.storeVendorList(n, 'gvl', o, e);
                                            var r = ''.concat(Me, '-').concat(b.configVersion);
                                            t.storeVendorList(n, r, o, e, !0);
                                        }
                                    } catch (t) {
                                        d.error('Unable cache '.concat(e, ' to localStorage'), t);
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_2e3b5833f2d437d9)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_2e3b5833f2d437d9));
                            }
                        }), _e(this, 'storeVendorList', function (e, n, o, r, i) {
                            const $___old_f51a385868eb5122 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_f51a385868eb5122)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                                return function () {
                                    i && t.removeOldVendorLists(o), o[n] = {
                                        data: e,
                                        expire: +t.generateExpirationDate()
                                    }, localStorage.setItem(r, JSON.stringify(o));
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_f51a385868eb5122)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_f51a385868eb5122));
                            }
                        }), _e(this, 'removeOldVendorLists', function (e) {
                            for (var t in e)
                                0 === t.indexOf(Me) && delete e[t];
                        }), _e(this, 'generateExpirationDate', function () {
                            var e = new Date();
                            return 4 === e.getDay() && e.getHours() > 18 ? e.setDate(e.getDate() + 7) : e.setDate(e.getDate() + ((7 - e.getDay()) % 7 + 4) % 7), e.setHours(18), e.setMinutes(0), e;
                        });
                    }();
                function Re(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function ze(e) {
                    return (ze = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function He(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return qe(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || We(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function Ge(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || We(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function We(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return qe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qe(e, t) : void 0;
                    }
                }
                function qe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function Ye(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                function Ke(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var Je = b.cmpId || 3, Qe = parseInt(b.cmpVersion, 10) || 1, $e = function () {
                        function e(t, n, o, r) {
                            var i = this;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                            }(this, e), Ke(this, 'commands', {
                                ping: function (e, t) {
                                    if (t = t || function () {
                                        }, 1 !== e) {
                                        var n = i.store.getVendorList() || {};
                                        t({
                                            gdprApplies: i.gdprApplies,
                                            cmpLoaded: i.isLoaded,
                                            cmpStatus: i.cmpStatus,
                                            displayStatus: b.suppressUI || !i.gdprApplies ? 'disabled' : 'cmpuishown' === i.eventStatus ? 'visible' : 'hidden',
                                            apiVersion: '2.0',
                                            cmpId: Je,
                                            cmpVersion: Qe,
                                            gvlVersion: n.vendorListVersion,
                                            tcfPolicyVersion: n.tcfPolicyVersion
                                        }, !0);
                                    } else
                                        t(null, !1);
                                },
                                getTCData: function (e, t, n) {
                                    (t = t || function () {
                                    }, 1 !== e) ? t(i.store.getConsentObject(n, i.gdprApplies, i.cmpStatus, i.eventStatus), !0) : t(null, !1);
                                },
                                getFullTCData: function (e, t, n) {
                                    (t = t || function () {
                                    }, 1 !== e) ? t(i.store.getConsentObject(n, i.gdprApplies, i.cmpStatus, i.eventStatus, null, !0), !0) : t(null, !1);
                                },
                                checkConsent: function (e, t, n) {
                                    (t = t || function () {
                                    }, 1 !== e) ? (t(i.store.checkConsent(n ? n.data : null, !!n && n.perVendor, i.gdprApplies, !!n && n.ignoreUnsupported), !0), n && n.recheckConsentOnChange && i.checkConsentListeners.add({
                                        data: n.data,
                                        perVendor: n.perVendor,
                                        ignoreUnsupported: n.ignoreUnsupported,
                                        callback: t
                                    })) : t(null, !1);
                                },
                                getVendorList: function (e, t, n) {
                                    t = t || function () {
                                    }, 1 !== e ? Fe.getVendorList(null, !0).then(function (e) {
                                        !e.vendorListVersion || n && n !== e.vendorListVersion ? t(null, !1) : t(e, !0);
                                    }) : t(null, !1);
                                },
                                getAuditId: function (e, t) {
                                    t = t || function () {
                                    }, re().then(function (e) {
                                        t(e, !0);
                                    });
                                },
                                resetAuditId: function (e, t) {
                                    if (t = t || function () {
                                        }, b.loadedFromLaunchPad && window.__launchpad)
                                        window.__launchpad('resetAuditId', null, t);
                                    else {
                                        var n = ie(null, !0);
                                        i.notify('auditIdChanged'), t(n, !0);
                                    }
                                },
                                setAuditId: function (e, t, n) {
                                    ie(n, !0), i.notify('auditIdChanged'), t(n, !0);
                                },
                                accept: function (e, t, n) {
                                    t = t || function () {
                                    }, 1 !== e ? (i.store.accept(n, null, 'API', 0, i.notify), i.changeEventStatus('useractioncomplete'), i.processCheckDataExistListeners(), t(null, !0)) : t(null, !1);
                                },
                                reject: function (e, t, n) {
                                    t = t || function () {
                                    }, 1 !== e ? (i.store.reject(n, null, 'API', 0, i.notify), i.changeEventStatus('useractioncomplete'), i.processCheckDataExistListeners(), t(null, !0)) : t(null, !1);
                                },
                                gdprApplies: function (e, t) {
                                    t = t || function () {
                                    }, 1 !== e ? t(i.gdprApplies, !0) : t(null, !1);
                                },
                                acceptAllButtonClick: function (e, t) {
                                    t = t || function () {
                                    }, i.notify('acceptAllButtonClicked'), ue(null, !0), de(b.configVersion, !0), i.store.accept(null, 'FULL_CONSENT', i.uiHandler.managerDisplay ? 'MANAGER' : 'NOTICE', i.uiHandler.managerDisplay ? 2 : 1, i.notify), i.uiHandler.toggleConsentToolShowing(i.notify, !1, !1), i.changeEventStatus('useractioncomplete'), i.processCheckDataExistListeners(), t(null, !0);
                                },
                                denyAllButtonClick: function (e, t) {
                                    t = t || function () {
                                    }, i.notify('denyAllButtonClicked'), ue(null, !0), de(b.configVersion, !0), i.store.reject(null, 'NO_CONSENT', i.uiHandler.managerDisplay ? 'MANAGER' : 'NOTICE', i.uiHandler.managerDisplay ? 2 : 1, i.notify), i.uiHandler.toggleConsentToolShowing(i.notify, !1, !1), i.changeEventStatus('useractioncomplete'), i.processCheckDataExistListeners(), t(null, !0);
                                },
                                saveAndExitButtonClick: function (e, t, n) {
                                    t = t || function () {
                                    }, i.notify('saveAndExitButtonClicked'), ue(null, !0), de(b.configVersion, !0), n ? i.store.updateConsent(n, i.uiHandler.managerDisplay ? 'MANAGER' : 'NOTICE', i.uiHandler.managerDisplay ? 2 : 1, i.notify) : i.store.storePublisherSelection(), i.uiHandler.toggleConsentToolShowing(i.notify, !1, !1), i.changeEventStatus('useractioncomplete'), i.processCheckDataExistListeners(), t(null, !0);
                                },
                                exitButtonClick: function (e, t, n) {
                                    t = t || function () {
                                    }, i.notify('exitButtonClicked'), ue(null, !0), de(b.configVersion, !0), n ? i.store.updateConsent(n, i.uiHandler.managerDisplay ? 'MANAGER' : 'NOTICE', i.uiHandler.managerDisplay ? 2 : 1, i.notify) : i.store.storePublisherSelection(), i.uiHandler.toggleConsentToolShowing(i.notify, !1, !1), i.changeEventStatus('useractioncomplete'), i.processCheckDataExistListeners(), t(null, !0);
                                },
                                updateManagerSize: function () {
                                    i.uiHandler.updateAndDisplayConsentTool(!0);
                                },
                                updateNoticeSize: function () {
                                    i.uiHandler.updateAndDisplayConsentTool(!1);
                                },
                                updateConsentTool: function (e, t, n) {
                                    t = t || function () {
                                    }, i.uiHandler.updateConsentTool(n), t(document.documentElement.clientHeight, !0);
                                },
                                toggleConsentTool: function (e, t, n) {
                                    t = t || function () {
                                    };
                                    var o = 'boolean' == typeof n ? n : !i.uiHandler.showConsentTool;
                                    o ? i.changeEventStatus('cmpuishown') : i.changeEventStatus('useractioncomplete'), i.uiHandler.toggleConsentToolShowing(i.notify, o), t(null, !0);
                                },
                                showConsentManager: function (e, t, n) {
                                    t = t || function () {
                                    };
                                    var o = n || {}, r = o.openPrivacyInformation, s = o.toggle, a = 'boolean' != typeof s || s;
                                    a ? i.changeEventStatus('cmpuishown') : i.changeEventStatus('useractioncomplete'), i.uiHandler.toggleConsentToolShowing(i.notify, a, !0, r), t(null, !0);
                                },
                                consentToolIsShown: function () {
                                    (!i.uiHandler.managerDisplay && b.noticeConfig.showBackdrop || i.uiHandler.managerDisplay && b.managerConfig.showBackdrop) && i.uiHandler.showBackdrop(b.backdrop), i.uiHandler.addShadow();
                                },
                                getNoticeConfig: function (e, t) {
                                    t = t || function () {
                                    }, i.changeEventStatus('cmpuishown');
                                    var n = b.noticeConfig || {};
                                    n.logo = b.logo || n.desktopConfig.logo, n.hideLogo = n.hideLogo || n.desktopConfig.hideLogo, n.theme = b.theme || b.managerConfig.theme, n.appId = b.appId, n.forceMobile = b.forceMobile, n.isMobileDevice = b.forceMobile || i.uiHandler.isMobile() || i.uiHandler.isTablet(), n.isTabletDevice = i.uiHandler.isTablet(), n.defaultLocale = b.defaultLocale, n.supportedLocales = b.supportedLocales, n.activeLocale = ke(), n.forceLocale = b.forceLocale, n.topics = i.getNoticeTopics(b.topics, ke()), n.translations = je.localizedValues, n.actionButtons = i.setActionButtons(b), n.showDenyButton = i.getDenyButtonStatus(n), n.showCloseButton = i.getCloseButtonStatus(n), n.disclosure = i.getNoticeDisclosure(b.disclosure, ke()), n.externalLinks = b.externalLinks, n.isNoticeConfig = !0, Fe.getVendorList(n.activeLocale).then(function (e) {
                                        i.store.updateVendorList(e), n.vendorList = e, n.publisherSelection = i.store.getPublisherSelection(e), t(n, !0);
                                    });
                                },
                                getManagerConfig: function (e, t) {
                                    t = t || function () {
                                    }, i.changeEventStatus('cmpuishown');
                                    var n = (i.store.consentData.getCoreSegmentData() || {}).lastUpdated, o = void 0 === n ? null : n, r = b || {}, s = r.managerConfig, a = r.appId, c = r.forceMobile, u = i.copyData(s);
                                    u.appId = a, u.logo = b.logo || u.logo, u.hideLogo = void 0 !== u.hideLogo && u.hideLogo, u.forceMobile = c, u.isMobileDevice = c || i.uiHandler.isMobile(), u.isTabletDevice = i.uiHandler.isTablet(), u.defaultLocale = b.defaultLocale, u.supportedLocales = b.supportedLocales, u.storedConsentExist = !!o, u.showPrivacyInformation = i.uiHandler.showPrivacyInformation, u.managerTab = i.uiHandler.managerTab, u.translations = je.localizedValues, u.activeLocale = ke(), u.forceLocale = b.forceLocale, u.topics = i.getManagerTopics(b.topics, ke()), u.actionButtons = i.setActionButtons(b), u.showDenyButton = i.getDenyButtonStatus(u), u.theme = b.theme || b.managerConfig.theme, u.purposeOneTreatment = i.store.getPurposeOneTreatment(), u.externalLinks = b.externalLinks, u.isNoticeConfig = !1, u.disclosure = i.getManagerDisclosure(b.disclosure), Promise.all([
                                        re(),
                                        Fe.getVendorList(u.activeLocale)
                                    ]).then(function (e) {
                                        var n = Ge(e, 2), o = n[0], r = n[1];
                                        u.auditId = o, i.store.updateVendorList(r), u.vendorList = r, u.publisherSelection = i.store.getPublisherSelection(r), u.publisherSelection.vendors = i.store.sortVendors(u.publisherSelection.vendors), t(u, !0);
                                    });
                                },
                                changeLanguage: function (e, t, n) {
                                    if (t = t || function () {
                                        }, n = (n || ke()).toLowerCase(), !b.supportedLocales.some(function (e) {
                                            return e === n;
                                        }))
                                        return d.error('Language "'.concat(n, '" not supported.')), void t(null, !1);
                                    !function (e) {
                                        d.debug('Write locale locally: ', e), X(b.appId + 'locale', e, R);
                                    }(n), b.update({ forceLocale: n }), Fe.getVendorList(n).then(function () {
                                        if (je.updateTranslations(), i.uiHandler.showConsentTool)
                                            return i.uiHandler.managerDisplay ? i.commands.getManagerConfig(e, t) : i.commands.getNoticeConfig(e, t);
                                        t(null, !0);
                                    });
                                },
                                addEventListener: function (e, t, n) {
                                    if (t = t || function () {
                                        }, 1 !== e) {
                                        var o = null;
                                        n || (n = 'tcfListeners', o = i.store.getConsentObject(null, i.gdprApplies, i.cmpStatus, i.eventStatus, i.listenerId, !1));
                                        var r = i.eventListeners[n] || ('tcfListeners' === n ? new Map() : new Set());
                                        'tcfListeners' === n ? r.set(i.listenerId++, t) : r.add(t), i.eventListeners[n] = r, 'isLoaded' === n && i.isLoaded && t({ event: n }, !0), 'cmpReady' === n && i.cmpReady ? t({ event: n }, !0) : 'tcfListeners' === n && t(o, !0);
                                    } else
                                        t(null, !1);
                                },
                                removeEventListener: function (e, t, n) {
                                    if (t = t || function () {
                                        }, 1 !== e) {
                                        var o = !1;
                                        if (n)
                                            if (isNaN(n)) {
                                                var r = i.eventListeners[n] || new Set();
                                                r.clear(), i.eventListeners[n] = r, o = !0;
                                            } else {
                                                var s = i.eventListeners.tcfListeners || new Map();
                                                s.has(n) && (s.delete(n), i.eventListeners.tcfListeners = s, o = !0);
                                            }
                                        else
                                            i.eventListeners = {}, o = !0;
                                        t(o);
                                    } else
                                        t(!1);
                                },
                                consentDataExist: function (e, t) {
                                    if (t = t || function () {
                                        }, 1 !== e) {
                                        var n = !(!i.store.consentData.getLastUpdated() && !i.store.customConsentData.getLastUpdated());
                                        t(n, !0), n || i.checkDataExistListeners.push(t);
                                    } else
                                        t(null, !1);
                                }
                            }), Ke(this, 'processCommandQueue', function () {
                                var e = He(i.commandQueue);
                                e.length && (d.info('Process '.concat(e.length, ' queued commands')), i.commandQueue = [], e.forEach(function (e) {
                                    if (Array.isArray(e)) {
                                        var t = Ge(e, 4), n = t[0], o = t[1], r = t[2], s = t[3];
                                        i.processCommand(n, o, r, s);
                                    } else {
                                        var a = e.callId, c = e.command, u = e.parameter, l = e.version, d = e.callback, p = e.event;
                                        p ? i.processCommand(c, l, function (e, t) {
                                            var n = Ke({}, '__tcfapiReturn', {
                                                callId: a,
                                                command: c,
                                                returnValue: e,
                                                success: t
                                            });
                                            p.source.postMessage(n, p.origin);
                                        }, u) : i.processCommand(c, l, d, u);
                                    }
                                }));
                            }), Ke(this, 'receiveMessage', function (e) {
                                var t = e.data, n = e.origin, o = e.source;
                                if (t) {
                                    var r = t.__tcfapiCall;
                                    if (r) {
                                        var s = r.callId, a = r.command, c = r.parameter, u = r.version;
                                        i.processCommand(a, u, function (e, t) {
                                            var r = Ke({}, '__tcfapiReturn', {
                                                callId: s,
                                                command: a,
                                                returnValue: e,
                                                success: t
                                            });
                                            o.postMessage(r, n);
                                        }, c);
                                    }
                                }
                            }), Ke(this, 'processCommand', function (e, t, n, o) {
                                'function' != typeof i.commands[e] ? d.error('Invalid CMP command "'.concat(e, '"')) : 'ping' !== e && 'boolean' != typeof i.gdprApplies ? (d.info('Queuing command: '.concat(e, ' until gdprApplies is set')), i.commandQueue.push({
                                    command: e,
                                    version: t,
                                    callback: n,
                                    parameter: o
                                }), i.notify('commandQueued', { command: e })) : (d.info('Proccess command: '.concat(e, ', parameter: ').concat(o, ', version: ').concat(t)), i.commands[e](t, n, o));
                            }), Ke(this, 'notify', function (e, t) {
                                d.info('Notify event: '.concat(e)), (i.eventListeners[e] || ('tcfListeners' === e ? new Map() : new Set())).forEach(function (n) {
                                    n({
                                        event: e,
                                        data: t
                                    }, !0);
                                }), 'consentChanged' === e && (i.processCommandQueue(), i.processCheckConsentListeners());
                            }), Ke(this, 'copyData', function (e) {
                                if ('object' !== ze(e))
                                    return e;
                                var t = function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? Re(Object(n), !0).forEach(function (t) {
                                            Ke(e, t, n[t]);
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach(function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                        });
                                    }
                                    return e;
                                }({}, e);
                                for (var n in t)
                                    t.hasOwnProperty(n) && t[n] instanceof Set && (t[n] = new Set(t[n]));
                                return t;
                            }), Ke(this, 'getManagerTopics', function (e, t) {
                                return e[t] || e.en;
                            }), Ke(this, 'getNoticeTopics', function (e, t) {
                                e[t] || (t = 'en');
                                return He(e[t]).filter(function (e) {
                                    return e.showOnNotice;
                                });
                            }), Ke(this, 'getCloseButtonStatus', function (e) {
                                return 'boolean' != typeof e.showCloseButton ? e.desktopConfig.showCloseButton : e.showCloseButton;
                            }), Ke(this, 'getDenyButtonStatus', function (e) {
                                return void 0 === e.showDenyButton || e.showDenyButton;
                            }), Ke(this, 'processTcfListeners', function () {
                                var e = i.eventListeners.tcfListeners || new Map();
                                if (e.size > 0) {
                                    var t = i.store.getConsentObject(null, i.gdprApplies, i.cmpStatus, i.eventStatus, null, !1);
                                    e.forEach(function (e, n) {
                                        t.listenerId = n, e(t, !0);
                                    });
                                }
                            }), Ke(this, 'processCheckConsentListeners', function () {
                                i.checkConsentListeners.forEach(function (e) {
                                    var t = e.data, n = e.perVendor, o = e.callback, r = e.ignoreUnsupported;
                                    o(i.store.checkConsent(t, n, i.gdprApplies, r), !0);
                                });
                            }), Ke(this, 'processCheckDataExistListeners', function () {
                                if (i.checkDataExistListeners && i.checkDataExistListeners.length > 0) {
                                    var e = !(!i.store.consentData.getLastUpdated() && !i.store.customConsentData.getLastUpdated());
                                    e && (i.checkDataExistListeners.forEach(function (t) {
                                        t(e, !0);
                                    }), i.checkDataExistListeners = []);
                                }
                            }), this.uiHandler = n, this.isLoaded = !1, this.cmpReady = !1, this.gdprApplies = void 0, this.cmpStatus = 'stub', this.eventListeners = {}, this.store = t, this.processCommand.receiveMessage = this.receiveMessage, 'number' != typeof o || Number.isNaN(o) || (Je = o), r && (Qe = r), this.processCommand.VERSION = Qe, this.commandQueue = [], this.listenerId = 1, this.eventStatus = void 0, this.checkConsentListeners = new Set(), this.checkDataExistListeners = [], b.disclosure.customStacks && (this.customStacks = b.disclosure.customStacks);
                        }
                        var t, n, o;
                        return t = e, (n = [
                            {
                                key: 'setActionButtons',
                                value: function (e) {
                                    return e.actionButtons || (e.actionButtons = {
                                        acceptAll: e.noticeConfig.desktopConfig.acceptAll,
                                        denyAll: e.noticeConfig.desktopConfig.denyAll,
                                        saveAndExit: e.managerConfig.saveAndExit,
                                        privacySettings: e.noticeConfig.desktopConfig.privacySettings
                                    }, e.actionButtons.acceptAll.showDialog = !1, e.actionButtons.denyAll.showDialog = !0, e.actionButtons.saveAndExit.showDialog = !1), e.actionButtons;
                                }
                            },
                            {
                                key: 'changeEventStatus',
                                value: function (e) {
                                    this.eventStatus !== e && (this.eventStatus = e, this.processTcfListeners());
                                }
                            },
                            {
                                key: 'getNoticeDisclosure',
                                value: function (e, t) {
                                    return this.customStacks && (e.customStacks = this.customStacks[t]), e;
                                }
                            },
                            {
                                key: 'getManagerDisclosure',
                                value: function (e) {
                                    return delete e.customStacks, e;
                                }
                            }
                        ]) && Ye(t.prototype, n), o && Ye(t, o), e;
                    }();
                function Xe(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return Ze(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return Ze(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function Ze(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function et(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                }
                function tt(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                function nt(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var ot = function () {
                    function e() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        et(this, e), nt(this, 'getVendorConsent', function (e) {
                            return -1 !== t.vendorsConsent.indexOf(e);
                        }), nt(this, 'setVendorConsent', function (e, n) {
                            var o = t.vendorsConsent.indexOf(e);
                            n && -1 === o ? t.vendorsConsent.push(e) : n || -1 === o || t.vendorsConsent.splice(o, 1);
                        }), this.setConsentString(n);
                    }
                    var t, n, o;
                    return t = e, (n = [
                        {
                            key: 'getVersion',
                            value: function () {
                                return this.version;
                            }
                        },
                        {
                            key: 'setVersion',
                            value: function (e) {
                                'number' != typeof e || Number.isNaN(e) || (this.version = e);
                            }
                        },
                        {
                            key: 'getVendorsConsent',
                            value: function () {
                                return this.vendorsConsent;
                            }
                        },
                        {
                            key: 'setVendorsConsent',
                            value: function (e) {
                                var t = this;
                                e && Array.isArray(e) && e.length > 0 && e.forEach(function (e) {
                                    'number' != typeof e || Number.isNaN(e) || t.vendorsConsent.push(e);
                                });
                            }
                        },
                        {
                            key: 'getConsentString',
                            value: function () {
                                if (this.vendorsConsent && Array.isArray(this.vendorsConsent) && this.vendorsConsent.length > 0)
                                    return ''.concat(this.version, '~').concat(this.vendorsConsent.join('.'));
                            }
                        },
                        {
                            key: 'setConsentString',
                            value: function (e) {
                                if (this.version = 1, this.vendorsConsent = [], e) {
                                    var t = Xe(e.split('~'), 2), n = t[0], o = t[1];
                                    if (this.setVersion(n), o) {
                                        var r = o.split('.').map(Number);
                                        this.setVendorsConsent(r);
                                    }
                                }
                            }
                        }
                    ]) && tt(t.prototype, n), o && tt(t, o), e;
                }();
                function rt() {
                    return (rt = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function it(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function st(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? it(Object(n), !0).forEach(function (t) {
                            at(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function at(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function ct() {
                    return Math.round(new Date().getTime() / 100);
                }
                var ut = function e(t) {
                    var n = this;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, e), at(this, 'updateCoreSegmentData', function (e) {
                        var t = n.data.getCoreSegmentData() || {
                            version: 2,
                            consentLanguage: ke().substr(0, 2),
                            created: ct(),
                            isServiceSpecific: !b.storeConsentGlobally,
                            purposeOneTreatment: !b.storeConsentGlobally && b.consentDataConfig && b.consentDataConfig.purposeOneTreatment,
                            specialFeatureOptIns: [],
                            purposesConsent: [],
                            vendorsConsent: [],
                            publisherRestrictions: []
                        };
                        t = st(st({}, t), e), n.data.setCoreSegmentData(t);
                    }), at(this, 'updatePublisherTCData', function (e) {
                        var t = n.data.getPublisherTCData() || { pubPurposesConsent: [] };
                        t = st(st({}, t), e), n.data.setPublisherTCData(t);
                    }), at(this, 'getConsentString', function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return !0 === e && n.updateCoreSegmentData({ lastUpdated: ct() }), n.data.getConsentString();
                    }), at(this, 'getConsentData', function () {
                        return n.data;
                    }), at(this, 'getCoreSegmentData', function () {
                        return n.data.getCoreSegmentData();
                    }), at(this, 'getDisclosedVendorsData', function () {
                        return n.data.getDisclosedVendorsData();
                    }), at(this, 'getAllowedVendorsData', function () {
                        return n.data.getAllowedVendorsData();
                    }), at(this, 'getPublisherTCData', function () {
                        return n.data.getPublisherTCData();
                    }), at(this, 'getAllowed', function (e) {
                        return n.data.getCoreSegmentData()[e];
                    }), at(this, 'setAllAllowed', function (e, t) {
                        var o = {};
                        o[e] = t, n.updateCoreSegmentData(o);
                    }), at(this, 'isAllowed', function (e, t) {
                        return -1 !== (n.data.getCoreSegmentData()[e] || []).indexOf(t);
                    }), at(this, 'setAllowed', function (e, t, o) {
                        if (!n.data.getCoreSegmentData()[e]) {
                            var r = {};
                            r[e] = [], n.updateCoreSegmentData(r);
                        }
                        var i = n.data.getCoreSegmentData()[e].indexOf(t);
                        o && -1 === i ? n.data.getCoreSegmentData()[e].push(t) : o || -1 === i || n.data.getCoreSegmentData()[e].splice(i, 1);
                    }), at(this, 'getAllowedPublisherTC', function (e) {
                        return n.data.getPublisherTCData()[e];
                    }), at(this, 'setAllAllowedPublisherTC', function (e, t) {
                        var o = {};
                        o[e] = t, n.updatePublisherTCData(o);
                    }), at(this, 'isAllowedPublisherTC', function (e, t) {
                        return -1 !== (n.data.getPublisherTCData()[e] || []).indexOf(t);
                    }), at(this, 'setAllowedPublisherTC', function (e, t, o) {
                        if (!n.data.getPublisherTCData()[e]) {
                            var r = {};
                            r[e] = [], n.updatePublisherTCData(r);
                        }
                        var i = n.data.getPublisherTCData()[e].indexOf(t);
                        o && -1 === i ? n.data.getPublisherTCData()[e].push(t) : o || -1 === i || n.data.getPublisherTCData()[e].splice(i, 1);
                    }), at(this, 'getLastUpdated', function () {
                        return n.data.getCoreSegmentData().lastUpdated;
                    }), this.data = rt(new _.TCStringV2(), t), this.updateCoreSegmentData(), this.updatePublisherTCData();
                };
                function lt(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return dt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return dt(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function dt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function pt() {
                    return b.preferenceLink.enabled && b.preferenceLink.apiKey ? we().then(function (e) {
                        var t = ''.concat(b.preferenceLinkURL, '/identifying-values/').concat(e);
                        return Ee(t, {
                            headers: {
                                'Content-Type': 'application/json',
                                ApiKey: b.preferenceLink.apiKey
                            }
                        }).then(function (e) {
                            return e.json();
                        }).then(function (e) {
                            return d.debug('Consent data from PL: ', e), e.data;
                        }).catch(function (e) {
                            return d.error('Failed to get consent data from PL: ', e), null;
                        });
                    }) : (d.debug('Sync with PL disabled'), Promise.resolve());
                }
                function ft(e, t, n, o) {
                    if (b.preferenceLink.enabled && b.preferenceLink.apiKey) {
                        var r = b.preferenceLink.consentTriggerVersion;
                        Promise.all([
                            we(),
                            re(),
                            r ? Promise.resolve(r) : le(),
                            o ? Promise.resolve(o) : ce()
                        ]).then(function (o) {
                            var r = lt(o, 4), i = r[0], s = r[1], a = r[2], c = r[3], u = b.preferenceLink.identifyingField || b.preferenceLink.identifier || 'Email', l = {
                                    consentString: e,
                                    customConsentString: t,
                                    acString: n,
                                    auditId: s,
                                    gdprWebConfigVersion: a || b.configVersion,
                                    lastInteraction: 1000 * c,
                                    identifying_field: u
                                };
                            l[u] = i, Ee(b.preferenceLinkURL, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    ApiKey: b.preferenceLink.apiKey
                                },
                                body: JSON.stringify(l)
                            }).then(function () {
                                d.debug('Consent data stored to PL');
                            }).catch(function (e) {
                                d.error('Failed to store consent data to PL: ', e);
                            });
                        });
                    } else
                        d.debug('Sync with PL disabled');
                }
                var ht = 'c'.concat(Math.random().toString(36).substring(7)), gt = [
                        {
                            name: 'cookie',
                            label: 'Cookie',
                            svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100">\n            <path class="'.concat(ht, '" fill="#4A4949" d="M8.05 59.496c1.808 8.078 4.849 13.167 10.48 19.536 3.674 4.156 9.57 8.325 15.109 10.703 5.341 2.292 14.604 3.847 19.06 3.28.82-.104 1.572.477 1.676 1.299.105.821-.476 1.573-1.298 1.677-5.016.639-14.811-1.006-20.621-3.5-5.938-2.548-12.198-6.975-16.174-11.472-5.937-6.715-9.223-12.215-11.159-20.868-.18-.808.328-1.61 1.136-1.791.809-.181 1.61.328 1.792 1.136zM87.38 39.733c.589.095 1.104.11 2.014.075l.259-.011c4.15-.186 5.786 1.067 6.348 6.485.62 5.975-.115 11.36-1.643 17.008-1.322 4.89-4.098 10.298-9.048 16.092-5.376 6.292-12.167 11.032-18.507 13.457-3.619 1.385-6.722 2.21-9.324 2.471-.825.083-1.56-.518-1.642-1.342-.083-.825.518-1.56 1.343-1.643 2.305-.23 5.161-.991 8.551-2.288 5.877-2.248 12.251-6.697 17.298-12.604 4.653-5.446 7.224-10.455 8.433-14.926 1.44-5.325 2.13-10.376 1.555-15.916-.226-2.176-.629-3.24-1.093-3.596-.259-.198-.606-.254-1.693-.219l-.444.018c-1.27.056-1.985.046-2.886-.1-.818-.131-1.374-.901-1.241-1.72.132-.817.902-1.373 1.72-1.24zM50 28.708c5.109 0 9.676 4.82 9.83 9.587l.003.247v5.954c2.32.578 4.056 2.626 4.162 5.097l.005.24v12.834c0 2.963-2.344 5.38-5.279 5.495l-.221.005h-17c-2.963 0-5.38-2.344-5.496-5.28l-.004-.22V49.833c0-2.577 1.773-4.74 4.166-5.337v-5.954c0-5.318 4.437-9.834 9.834-9.834zm8.5 18.625h-17c-1.325 0-2.41 1.032-2.495 2.336l-.005.164v12.834c0 1.325 1.032 2.41 2.336 2.494l.164.006h17c1.325 0 2.41-1.032 2.495-2.336l.005-.164V49.833c0-1.38-1.12-2.5-2.5-2.5zm-8.5 4.23c1.438 0 2.604 1.165 2.604 2.604 0 1.068-.643 1.985-1.562 2.387v3.863h-2.084v-3.863c-.92-.402-1.562-1.32-1.562-2.387 0-1.439 1.166-2.605 2.604-2.605zM38.99 6.858c.185.808-.32 1.612-1.128 1.797-7.554 1.729-16.442 7.802-20.234 12.623-4.052 5.152-7.292 10.467-8.652 15.019-1.868 6.255-2.478 12.247-1.567 18.26.124.818-.44 1.583-1.259 1.707-.819.124-1.584-.44-1.708-1.258-.982-6.486-.328-12.915 1.66-19.568 1.493-4.999 4.902-10.59 9.168-16.015C19.466 14.09 28.93 7.622 37.193 5.731c.808-.184 1.612.32 1.797 1.128zM50 31.709c-3.65 0-6.704 3.03-6.83 6.604l-.003.229-.001 5.791h13.667v-5.791c0-3.237-3.344-6.834-6.833-6.834zm2.604-27.48l.654.004c7.355.092 8.857 1.822 8.857 8.658 0 4.313 3.437 8.107 7.475 9.308 1.35.402 2.459.49 4.035.416l1.242-.067c.263-.01.404-.007.591.008l.073.006c.848.072 1.54.407 1.895 1.242l.086.217c.22.592.239 1.012.109 2.132l-.116.918c-.277 2.103-.218 3.483.463 5.313.953 2.56 2.616 4.57 5.03 6.068.704.437.92 1.362.483 2.065-.437.704-1.362.92-2.065.484-2.974-1.847-5.073-4.383-6.26-7.57-.833-2.24-.95-4.001-.678-6.334l.144-1.14.042-.396-.49.029c-2.098.123-3.58.037-5.44-.516-5.215-1.551-9.619-6.412-9.619-12.183l-.005-.967c-.05-4.31-.615-4.674-5.937-4.694h-1.078l-1.035.009c-2.515.031-4.483.14-5.966.303l-.584.07c-.52.067-.853.128-1.025.169l-.091.024c-.791.246-1.632-.195-1.878-.986-.247-.791.195-1.632.986-1.878l.176-.05c.364-.093.96-.2 1.841-.303l.248-.028c1.89-.208 4.465-.33 7.837-.33z"/>\n        </svg>')
                        },
                        {
                            name: 'shield',
                            label: 'Shield',
                            svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100">\n            <path class="'.concat(ht, '" fill="#4A4949" d="M50.052 9.96c1.66.057 3.25.68 4.482 1.737l1.456 1.3c.552.487 1.065.93 1.597 1.376 1.38 1.155 2.765 2.221 4.228 3.227 5.591 3.845 11.39 6.184 17.412 6.422 3.618.145 4.492 1.086 4.56 4.653l.005.492v17.708c0 10.163-4.552 19.499-12.401 27.937-5.117 5.502-10.834 9.873-16.718 13.5l-.736.45c-1.054.678-2.248 1.103-3.49 1.244l-.34.032-.107.004c-.52 0-1.098-.132-1.78-.363-.231-.078-.47-.167-.716-.264-.207-.083-.413-.169-.612-.256l-.56-.256-.12-.057-.113-.062c-6.179-3.737-12.16-8.241-17.49-13.972-7.849-8.438-12.4-17.774-12.4-27.937 0-.828.67-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5 0 9.306 4.221 17.964 11.597 25.894 4.897 5.265 10.404 9.478 16.101 12.993l.689.42.248.116c.164.075.335.15.508.222l.26.107c.2.079.39.15.569.21.297.1.545.165.699.192l.076.009.223-.021c.665-.085 1.309-.3 1.913-.645l.257-.156c5.961-3.604 11.735-7.953 16.845-13.447 7.24-7.783 11.44-16.268 11.593-25.378l.005-.516V29.167c0-2.488.324-2.067-1.685-2.147-6.663-.264-12.972-2.809-18.992-6.948-1.546-1.063-3.006-2.187-4.453-3.399-.416-.348-.82-.694-1.237-1.058l-1.686-1.499c-.702-.656-1.6-1.057-2.552-1.144L50 12.96l-.187.012c-.873.08-1.702.425-2.394 1.006l-1.422 1.266c-.571.505-1.104.965-1.659 1.43-1.447 1.211-2.907 2.335-4.453 3.398-6.02 4.14-12.33 6.684-18.992 6.948l-.444.011c-1.47.02-1.255-.14-1.241 1.94v9.05c0 .828-.671 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.356l-.007-.144v-8.854c0-3.973.786-4.994 4.566-5.145 6.02-.238 11.819-2.577 17.41-6.422 1.463-1.006 2.85-2.072 4.228-3.227.4-.334.788-.667 1.19-1.018l1.61-1.43c1.213-1.135 2.775-1.82 4.425-1.948l.31-.018h.105zM50 28.707c5.109 0 9.676 4.82 9.83 9.587l.003.247v5.954c2.32.578 4.056 2.626 4.162 5.097l.005.24v12.834c0 2.963-2.344 5.38-5.279 5.495l-.221.005h-17c-2.963 0-5.38-2.344-5.496-5.28l-.004-.22V49.833c0-2.577 1.773-4.74 4.166-5.337v-5.954c0-5.318 4.437-9.834 9.834-9.834zm8.5 18.625h-17c-1.325 0-2.41 1.032-2.495 2.336l-.005.164v12.834c0 1.325 1.032 2.41 2.336 2.494l.164.006h17c1.325 0 2.41-1.032 2.495-2.336l.005-.164V49.833c0-1.38-1.12-2.5-2.5-2.5zm-8.5 4.23c1.438 0 2.604 1.165 2.604 2.604 0 1.067-.642 1.985-1.561 2.387l-.001 3.863h-2.084v-3.863c-.92-.402-1.562-1.32-1.562-2.387 0-1.439 1.166-2.605 2.604-2.605zm0-19.855c-3.65 0-6.704 3.03-6.83 6.605l-.003.229-.001 5.791h13.667v-5.791c0-3.237-3.344-6.834-6.833-6.834z"/>\n        </svg>')
                        },
                        {
                            name: 'link',
                            label: 'Link',
                            svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100">\n            <path class="'.concat(ht, '" fill="#4A4949" d="M38.5 40.104c5.253 0 9.605 3.858 10.378 8.895h2.244c.773-5.037 5.125-8.895 10.378-8.895h11c5.799 0 10.5 4.701 10.5 10.5 0 5.8-4.701 10.5-10.5 10.5h-11c-5.326 0-9.725-3.965-10.408-9.104h-2.184c-.683 5.14-5.082 9.104-10.408 9.104h-12c-5.799 0-10.5-4.7-10.5-10.5 0-5.799 4.701-10.5 10.5-10.5h12zm0 3h-12c-4.142 0-7.5 3.358-7.5 7.5 0 4.061 3.227 7.368 7.257 7.496l.243.004h12c3.665 0 6.717-2.63 7.37-6.105L37.5 52c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h8.328c-.718-3.295-3.602-5.781-7.085-5.892l-.243-.004zm34 0h-11c-3.591 0-6.593 2.524-7.328 5.895L62.5 49c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-8.37c.64 3.398 3.57 5.987 7.127 6.1l.243.004h11c4.142 0 7.5-3.358 7.5-7.5 0-4.06-3.227-7.368-7.257-7.496l-.243-.004z"/>\n        </svg>')
                        },
                        {
                            name: 'controls',
                            label: 'Controls',
                            svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100">\n            <path class="'.concat(ht, '" fill="#4A4949" d="M50 53.667c.78 0 1.42.595 1.493 1.355l.007.145V88.02c0 .828-.672 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.356l-.007-.144V55.167c0-.829.672-1.5 1.5-1.5zm25-8.334c.78 0 1.42.595 1.493 1.356l.007.144v41.188c0 .828-.672 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.356l-.007-.144V46.833c0-.828.672-1.5 1.5-1.5zM25 73.98c.78 0 1.42.595 1.493 1.356l.007.144v12.542c0 .828-.672 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.356l-.007-.144V75.479c0-.828.672-1.5 1.5-1.5zm-.234-12.458c1.419.014 2.78.552 3.788 1.508 1.03.976 1.607 2.308 1.592 3.706-.022 1.39-.634 2.707-1.688 3.658-1.032.931-2.406 1.438-3.82 1.42-1.836-.022-3.545-.92-4.532-2.403-.46-.69-.273-1.62.417-2.08.65-.432 1.512-.291 1.994.301l.086.117c.429.644 1.21 1.055 2.071 1.064.67.01 1.31-.227 1.774-.646.443-.4.69-.93.698-1.471.006-.547-.226-1.08-.656-1.489-.452-.428-1.084-.679-1.756-.685-.818-.01-1.575.345-2.032.925l-.1.138c-.46.689-1.392.874-2.08.414-.69-.46-.875-1.391-.415-2.08 1.014-1.519 2.782-2.419 4.659-2.397zM25 9.958c.78 0 1.42.595 1.493 1.356l.007.144v46.396c0 .829-.672 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.355l-.007-.145V11.458c0-.828.672-1.5 1.5-1.5zm24.766 31.25c1.419.014 2.78.553 3.788 1.508 1.03.977 1.607 2.309 1.592 3.706-.022 1.39-.634 2.708-1.688 3.659-1.032.93-2.406 1.438-3.82 1.419-1.836-.021-3.545-.919-4.532-2.402-.46-.69-.273-1.62.417-2.08.65-.432 1.512-.292 1.994.301l.086.116c.429.645 1.21 1.055 2.071 1.065.67.009 1.31-.227 1.774-.647.443-.4.69-.93.698-1.47.006-.547-.226-1.081-.656-1.49-.452-.428-1.084-.678-1.756-.684-.818-.01-1.575.345-2.032.925l-.1.138c-.46.688-1.392.874-2.08.414-.69-.46-.875-1.392-.415-2.08 1.014-1.519 2.782-2.42 4.659-2.397zm25-8.333c1.419.014 2.78.552 3.788 1.508 1.03.976 1.607 2.308 1.592 3.706-.022 1.39-.634 2.707-1.688 3.658-1.032.931-2.406 1.438-3.82 1.42-1.836-.022-3.545-.92-4.532-2.402-.46-.69-.273-1.621.417-2.08.65-.432 1.512-.292 1.994.3l.086.117c.429.645 1.21 1.055 2.071 1.065.67.009 1.31-.228 1.774-.647.443-.4.69-.93.698-1.47.006-.548-.226-1.082-.656-1.49-.452-.428-1.084-.678-1.756-.685-.818-.01-1.575.346-2.032.925l-.1.138c-.46.69-1.392.875-2.08.415-.69-.46-.875-1.392-.415-2.08 1.014-1.52 2.782-2.42 4.659-2.398zM50 9.958c.78 0 1.42.595 1.493 1.356l.007.144v26.084c0 .828-.672 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.356l-.007-.144V11.458c0-.828.672-1.5 1.5-1.5zm25 0c.78 0 1.42.595 1.493 1.356l.007.144v17.75c0 .829-.672 1.5-1.5 1.5-.78 0-1.42-.595-1.493-1.355l-.007-.145v-17.75c0-.828.672-1.5 1.5-1.5z"/>\n        </svg>')
                        },
                        {
                            name: 'fingerprint',
                            label: 'Fingerprint',
                            svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100">\n            <path class="'.concat(ht, '" fill="#4A4949" d="M68.884 25.318c-6.503-3.34-12.126-4.757-18.867-4.757-6.706 0-13.074 1.586-18.866 4.757-.813.439-1.83.135-2.303-.674-.44-.81-.136-1.856.677-2.295 6.3-3.407 13.21-5.162 20.492-5.162 7.215 0 13.515 1.586 20.425 5.129.847.438 1.152 1.45.711 2.26-.304.607-.88.945-1.49.945-.27 0-.542-.068-.779-.203zm-47.895 16.87c-.341 0-.683-.098-.99-.293-.786-.521-.956-1.53-.41-2.28 3.38-4.556 7.684-8.137 12.806-10.644 10.724-5.273 24.452-5.306 35.21-.032 5.122 2.506 9.425 6.055 12.806 10.58.546.715.376 1.757-.41 2.278-.785.52-1.844.358-2.39-.39-3.074-4.102-6.967-7.325-11.577-9.571-9.802-4.785-22.335-4.785-32.102.033-4.644 2.278-8.537 5.533-11.611 9.635-.273.456-.785.684-1.332.684zm22.028 38.541c-.449 0-.897-.162-1.208-.487-3.002-2.823-4.624-4.64-6.936-8.566-2.38-3.991-3.623-8.858-3.623-14.082 0-9.637 8.765-17.49 19.531-17.49 10.767 0 19.532 7.853 19.532 17.49 0 .908-.76 1.622-1.726 1.622s-1.725-.714-1.725-1.622c0-7.853-7.212-14.245-16.08-14.245-8.87 0-16.081 6.392-16.081 14.245 0 4.672 1.104 8.988 3.209 12.492 2.208 3.732 3.727 5.322 6.384 7.853.655.649.655 1.654 0 2.303-.38.325-.828.487-1.277.487zm23.652-5.208c-4.185 0-7.878-1-10.903-2.967-5.24-3.368-8.37-8.836-8.37-14.637 0-.934.774-1.667 1.758-1.667.985 0 1.759.733 1.759 1.667 0 4.701 2.532 9.135 6.823 11.87 2.497 1.6 5.416 2.366 8.933 2.366.844 0 2.25-.1 3.658-.333.95-.167 1.864.433 2.04 1.367.175.9-.458 1.767-1.442 1.934-2.005.366-3.764.4-4.256.4zm-6.157 7.291c-.137 0-.308-.032-.445-.065-5.44-1.45-8.999-3.393-12.728-6.917-4.79-4.579-7.425-10.672-7.425-17.194 0-5.336 4.722-9.684 10.538-9.684 5.817 0 10.539 4.348 10.539 9.684 0 3.524 3.182 6.39 7.117 6.39 3.934 0 7.116-2.866 7.116-6.39 0-12.418-11.12-22.497-24.806-22.497-9.717 0-18.613 5.204-22.616 13.274-1.335 2.668-2.019 5.797-2.019 9.223 0 2.57.24 6.62 2.293 11.89.342.857-.103 1.812-.993 2.109-.89.329-1.882-.132-2.19-.956-1.676-4.314-2.497-8.596-2.497-13.043 0-3.953.787-7.543 2.326-10.672 4.551-9.19 14.645-15.151 25.696-15.151 15.568 0 28.228 11.56 28.228 25.79 0 5.336-4.722 9.684-10.538 9.684-5.817 0-10.539-4.348-10.539-9.684 0-3.524-3.182-6.39-7.117-6.39-3.934 0-7.116 2.866-7.116 6.39 0 5.632 2.258 10.903 6.398 14.855 3.25 3.096 6.364 4.809 11.188 6.094.924.23 1.437 1.152 1.198 2.009-.171.757-.89 1.251-1.608 1.251z"/>\n        </svg>')
                        }
                    ];
                function yt(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                function mt(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var vt = new (n(28))(), bt = function () {
                        function e() {
                            var t = this;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                            }(this, e), mt(this, 'addConsentTool', function (e, n) {
                                var o = e ? b.managerConfig.id : b.noticeConfig.id;
                                document.getElementById(o) ? (n(t.managerDisplay ? 'consentManagerAlreadyShown' : 'consentNoticeAlreadyShown'), d.debug('Consent tool is already shown!')) : (t.managerDisplay = e, t.iframe.src = e ? b.managerConfig.location : b.noticeConfig.location, e && t.showPrivacyInformation && (t.iframe.src += '/privacy-information'), t.iframe.src += '?theme='.concat(b.theme || b.managerConfig.theme, '&useSystemFonts=').concat(b.useSystemFonts), t.iframe.setAttribute('id', o), t.updateAndDisplayConsentTool(e), t.hideToggle(), t.consentToolShown = !0, n(e ? 'consentManagerDisplayed' : 'consentNoticeDisplayed'));
                            }), mt(this, 'updateAndDisplayConsentTool', function (e) {
                                t.managerDisplay = e;
                                var n = b.forceMobile || t.isMobile() || t.isTablet();
                                e ? (t.showConsentToolAsModal = !1, t.showConsentToolAsBottom = !1, t.displayConsentTool('modal', !1, n)) : (t.showConsentToolAsBottom = 'bottom' === b.noticeConfig[n ? 'mobileConfig' : 'desktopConfig'].position, t.showConsentToolAsModal = 'modal' === b.noticeConfig[n ? 'mobileConfig' : 'desktopConfig'].position, t.displayConsentTool(b.noticeConfig[n ? 'mobileConfig' : 'desktopConfig'].position, !0, n));
                            }), mt(this, 'removeConsentTool', function () {
                                t.showConsentTool = !1, t.consentToolShown = !1, t.iframeWrapper.parentNode ? t.iframeWrapper.parentNode.removeChild(t.iframeWrapper) : t.iframe.parentNode ? t.iframe.parentNode.removeChild(t.iframe) : d.debug('Consent tool is disabled'), t.removeBackdrop(), t.showToggle();
                            }), mt(this, 'displayConsentTool', function (e, n, o) {
                                switch (t.removeBackdrop(), e) {
                                case 'top':
                                    t.displayOnTop(o, n);
                                    break;
                                case 'bottom':
                                    t.displayAtBottom(o, n);
                                    break;
                                case 'modal':
                                    t.displayAsModal(o, n);
                                    break;
                                default:
                                    t.displayInPlaceholder(e, o, n);
                                }
                            }), mt(this, 'displayOnTop', function (e, n) {
                                t.displayAsBarAt(!0, e, n);
                            }), mt(this, 'displayAtBottom', function (e, n) {
                                t.displayAsBarAt(!1, e, n);
                            }), mt(this, 'displayAsModal', function (e, n) {
                                t.showConsentToolAsModal = !0, t.iframe.style.cssText = 'left:50%;top:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);border-radius:2px;', t.iframe.style.cssText += e ? 'height:100%; max-height:640px; width:100%; min-width:320px; max-width: 660px' : 'height:100%; min-height:290px; max-height:640px; width:100%; min-width:320px; max-width: 660px', t.executeWhenBodyDefined('insertBefore', t.iframeWrapper, !0, !0), t.setConsentToolPosition(!1, n);
                            }), mt(this, 'displayInPlaceholder', function (e, n, o) {
                                var r = document.querySelector(e);
                                r ? (t.iframe.style.cssText = 'min-width:100%;width:1px;background:#fff;', t.setConsentToolPosition(!1, o), t.consentToolShown || r.appendChild(t.iframe)) : o ? t.displayAtBottom(n, o) : t.displayOnTop(n, o);
                            }), mt(this, 'setConsentToolPosition', function (e, n) {
                                if (t.iframe.style.position = n || !e ? 'fixed' : 'initial', t.iframe.style.display = 'block', t.iframe.style.zIndex = 2147483647, /Trident|MSIE/.test(navigator.userAgent) && (t.iframe.style.minHeight = '0', t.iframe.style.background = 'white'), n) {
                                    var o = b.noticeConfig ? b.noticeConfig.hideAfter : null;
                                    o && setTimeout(function () {
                                        t.managerDisplay || t.removeConsentTool();
                                    }, 1000 * o);
                                }
                            }), mt(this, 'updateConsentTool', function (e) {
                                if (t.iframe) {
                                    var n = document.getElementById(t.iframe.id);
                                    n && (n.style.display = 'block', (e || parseInt(e.height, 10) > 0) && (t.iframeHeight = e.height), parseInt(t.iframeHeight, 10) > window.innerHeight || parseInt(n.style.height, 10) > window.innerHeight ? t.showConsentToolAsModal ? t.updateConsentToolModalStyle(n, t.iframeHeight) : t.showConsentToolAsBottom ? t.updateConsentToolBottomStyle(n, window.innerHeight + 'px') : n.style.height = window.innerHeight + 'px' : t.managerDisplay ? t.updateConsentToolModalStyle(n, t.iframeHeight) : t.showConsentToolAsBottom ? t.updateConsentToolBottomStyle(n, t.iframeHeight) : n.style.height = t.iframeHeight || n.style.height, t.addResizeListener(n, t.iframeHeight));
                                }
                            }), mt(this, 'showBackdrop', function (e) {
                                t.backdropShown || (t.backdropShown = !0, t.iframeWrapper.style.cssText = 'position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 2147483647', t.iframeWrapper.style.background = e);
                            }), mt(this, 'removeBackdrop', function () {
                                t.backdropShown && (t.backdropShown = !1, t.iframeWrapper.style.cssText = '');
                            }), mt(this, 'hideToggle', function () {
                                t.toggleShow(!1);
                            }), mt(this, 'showToggle', function () {
                                t.toggleShow(!0);
                            }), mt(this, 'toggleShow', function (e) {
                                if (b.toggleConfig.displayToggle || (t.isMobile() || t.isTablet()) && b.toggleConfig.displayToggleOnMobile) {
                                    var n = document.getElementById(b.toggleConfig.id || 'toggle');
                                    n && (n.setAttribute('title', je.localizedValues.privacyManagerToggle), n.setAttribute('aria-label', je.localizedValues.accessibilityToggle), n.style.display = e ? 'flex' : 'none');
                                }
                            }), mt(this, 'isMobile', function () {
                                return 'mobile' === vt.getDevice().type;
                            }), mt(this, 'isTablet', function () {
                                return 'tablet' === vt.getDevice().type;
                            }), mt(this, 'setToggleStyle', function (e, n) {
                                var o = document.getElementsByTagName('head')[0], r = document.createElement('style');
                                r.type = 'text/css', r.appendChild(document.createTextNode(t.getStyle(e, n))), o.appendChild(r);
                            }), mt(this, 'loadLimitReached', function () {
                                var e = b.noticeConfig ? b.noticeConfig.loadLimit : null;
                                if (!e)
                                    return !1;
                                var t, n = (t = $('gdpr-display-counter'), d.debug('Read local consent tool load counter: ', t), +t || 0);
                                return n === e || function (e) {
                                    return d.debug('Write consent tool load counter locally: ', e), X('gdpr-display-counter', e, 86400);
                                }(n + 1) > e;
                            }), mt(this, 'inIframe', function () {
                                try {
                                    return window.self !== window.top;
                                } catch (e) {
                                    return !0;
                                }
                            }), mt(this, 'shouldLoadInIframe', function () {
                                return !(!b.previewMode && b.disableLoadInIframe && t.inIframe());
                            }), this.showConsentTool = !1, this.showConsentToolAsModal = !1, this.showConsentToolAsBottom = !1, this.managerDisplay = !1, this.resizeListener = !1, this.iframe = document.createElement('iframe'), this.iframe.src = b.managerConfig.location, this.iframe.setAttribute('id', b.managerConfig.id), this.iframe.setAttribute('class', 'faktor-iframe-wrapper'), this.iframe.setAttribute('aria-label', je.localizedValues.accessibilityWindow), this.iframe.frameBorder = '0', this.iframe.scrolling = 'yes', this.iframe.style.display = 'none', b.backdrop = b.noticeConfig.desktopConfig.backdrop || b.backdrop, b.noticeConfig.showBackdrop = void 0 === b.noticeConfig.desktopConfig.showBackdrop ? b.noticeConfig.showBackdrop : b.noticeConfig.desktopConfig.showBackdrop, b.managerConfig.showBackdrop = void 0 === b.managerConfig.showBackdrop || b.managerConfig.showBackdrop, 'corner' === b.noticeConfig.desktopConfig.type && (b.noticeConfig.desktopConfig.type = 'bar', b.noticeConfig.desktopConfig.position = 'modal'), this.iframeWrapper = document.createElement('div'), this.iframeWrapper.id = 'gdpr-consent-tool-wrapper', this.iframeWrapper.appendChild(this.iframe);
                        }
                        var t, n, o;
                        return t = e, (n = [
                            {
                                key: 'toggleConsentToolShowing',
                                value: function (e, t, n, o) {
                                    navigator.cookieEnabled ? this.shouldLoadInIframe() ? (this.showConsentTool = 'boolean' == typeof t ? t : !this.showConsentTool, this.showConsentToolAsModal = !1, this.showConsentTool ? (this.showPrivacyInformation = o, this.addConsentTool(!(!n && b.noticeConfig.display), e), this.hideToggle()) : (this.removeConsentTool(), e(this.managerDisplay ? 'consentManagerClosed' : 'consentNoticeClosed'))) : d.debug('Load in iframe is disabled!') : d.debug('Cookies are disabled!');
                                }
                            },
                            {
                                key: 'displayAsBarAt',
                                value: function (e, t, n) {
                                    this.iframe.style.cssText = 'min-height:228px; width: 100%; left: 0;', t && window.innerWidth < 650 && (this.iframe.style.cssText = 'height:100%; min-height: 372px; max-height: 500px; width: 100%; left: 0;'), this.iframe.style.cssText += e ? 'top : 0' : 'bottom : 0', this.executeWhenBodyDefined('appendChild', this.iframeWrapper, !0, !0), this.setConsentToolPosition(t, n);
                                }
                            },
                            {
                                key: 'addShadow',
                                value: function () {
                                    var e = this;
                                    setTimeout(function () {
                                        e.iframe.style.cssText += 'box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 8px 10px -5px rgba(0, 0, 0, 0.2);';
                                    });
                                }
                            },
                            {
                                key: 'updateConsentToolModalStyle',
                                value: function (e, t) {
                                    this.isMobile() ? document.documentElement.clientHeight > window.innerHeight ? (e.style.cssText += 'left:0;top:0;transform:translate(0,0);-webkit-transform:translate(0,0);', e.style.height = document.documentElement.clientHeight - 84 + 'px') : (e.style.cssText += 'left:50%;top:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);', e.style.height = window.innerHeight + 'px') : (e.style.cssText += 'height: '.concat(t), e.style.height = window.innerHeight + 'px');
                                }
                            },
                            {
                                key: 'updateConsentToolBottomStyle',
                                value: function (e, t) {
                                    this.isMobile() || b.forceMobile ? document.documentElement.clientHeight > window.innerHeight ? (e.style.cssText += 'bottom: 83px;', e.style.height = document.documentElement.clientHeight + 'px') : (e.style.cssText += 'bottom: 0px; height:'.concat(t, ';'), e.style.height = t + 'px') : document.documentElement.clientHeight > window.innerHeight ? (e.style.cssText += 'bottom: -30px;', e.style.height = document.documentElement.clientHeight + 'px') : e.style.cssText += 'bottom: 0px; height: '.concat(t);
                                }
                            },
                            {
                                key: 'addResizeListener',
                                value: function (e, t) {
                                    var n = this;
                                    this.resizeListener || (window.addEventListener('resize', function () {
                                        n.showConsentToolAsModal || n.managerDisplay ? n.updateConsentToolModalStyle(e, t) : n.showConsentToolAsBottom ? n.updateConsentToolBottomStyle(e) : e.style.height = window.innerHeight + 'px';
                                    }), this.resizeListener = !0);
                                }
                            },
                            {
                                key: 'initToggle',
                                value: function (e, t) {
                                    this.setToggleStyle(e.style);
                                    var n, o = document.createElement('a');
                                    switch (o.setAttribute('tabindex', 0), o.setAttribute('title', je.localizedValues.privacyManagerToggle), e.toggleUrl ? o.innerHTML = '<img src=\''.concat(e.toggleUrl, '\' style=\'width:100%; height:100%;\'/>') : gt.forEach(function (t) {
                                            t.name === e.style.icon && (o.innerHTML = t.svgContent);
                                        }), o.id = e.id || 'gdpr-toggle', o.style.cssText = 'position: fixed; cursor: pointer; display: flex; width: 40px; height: 40px; align-items: center; \n \t\t\tjustify-content: center; background-color: '.concat(e.style.iconStyle.backgroundColor, '; border-radius: 50px;'), o.style.zIndex = e.zIndex || 2147483646, e.position) {
                                    case 'topRight':
                                        o.style.top = '10px', o.style.right = '10px';
                                        break;
                                    case 'bottomRight':
                                        o.style.bottom = '10px', o.style.right = '10px';
                                        break;
                                    case 'topLeft':
                                        o.style.top = '10px', o.style.left = '10px';
                                        break;
                                    case 'bottomLeft':
                                        o.style.bottom = '10px', o.style.left = '10px';
                                        break;
                                    default:
                                        (n = document.querySelector(e.position)) || (o.style.bottom = '28px', o.style.right = '40px');
                                    }
                                    var r = function () {
                                        t('toggleButtonClicked'), this.toggleConsentToolShowing(t, !0, !0, e.openPrivacyInformation);
                                    }.bind(this);
                                    o.onclick = r, o.addEventListener('keyup', function (e) {
                                        13 === e.keyCode && (e.preventDefault(), r());
                                    }), n ? (o.style.position = 'initial', n.appendChild(o)) : this.executeWhenBodyDefined('appendChild', o);
                                }
                            },
                            {
                                key: 'getStyle',
                                value: function (e) {
                                    var t = '';
                                    return e && (t += '\n\t\t\t\t.'.concat(ht, ' {\n\t\t\t\t\tfill: ').concat(e.iconStyle.color, ';\n\t\t\t\t}\n\t\t\t')), t;
                                }
                            },
                            {
                                key: 'executeWhenBodyDefined',
                                value: function (e, t, n, o) {
                                    document.body ? (o && !t.querySelector('#'.concat(this.iframe.id)) && t.appendChild(this.iframe), o && document.getElementById(t.id) || document.body[e](t, n ? document.body.firstElementChild : null)) : setTimeout(this.executeWhenBodyDefined.bind(this, e, t, n, o), 5);
                                }
                            }
                        ]) && yt(t.prototype, n), o && yt(t, o), e;
                    }();
                function wt(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, o);
                    }
                    return n;
                }
                function Ct(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? wt(Object(n), !0).forEach(function (t) {
                            It(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }
                function St(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return Ot(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || Lt(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function Pt(e, t) {
                    var n;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = Lt(e)) || t && e && 'number' == typeof e.length) {
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
                    var i, s = !0, a = !1;
                    return {
                        s: function () {
                            n = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = n.next();
                            return s = e.done, e;
                        },
                        e: function (e) {
                            a = !0, i = e;
                        },
                        f: function () {
                            try {
                                s || null == n.return || n.return();
                            } finally {
                                if (a)
                                    throw i;
                            }
                        }
                    };
                }
                function Tt(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || Lt(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function Lt(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return Ot(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ot(e, t) : void 0;
                    }
                }
                function Ot(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function At(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                }
                function It(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function kt(e) {
                    return (kt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var Dt = n(9), xt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                function jt(e) {
                    var t = kt(e);
                    return ('function' === t || 'object' === t && !!e) && e.constructor !== Array;
                }
                function Et(e) {
                    return 0 === Object.keys(e).length && e.constructor === Object;
                }
                function Vt(e, t) {
                    this.done = function () {
                        e(t);
                    };
                }
                var Bt = function e() {
                    var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.consentData, r = n.customConsentData, i = n.vendorList, s = n.consentDataConfig, a = n.acString;
                    At(this, e), It(this, 'syncConsentWithThirdPartyAndPL', function () {
                        d.debug('Comparing consent data');
                        var e = !xt && b.thirdPartyCookieSync;
                        Promise.all([
                            pt(),
                            ce(),
                            le(),
                            e ? ne(!1, !0) : Promise.resolve(),
                            e ? ne(!0, !0) : Promise.resolve(),
                            e ? ge(!0) : Promise.resolve()
                        ]).then(function (e) {
                            var n = Tt(e, 6), o = n[0], r = n[1], i = n[2], s = n[3], a = n[4], c = n[5], u = o && o.consentString ? new ut(new _.TCStringV2(o.consentString)) : null, l = o && o.customConsentString ? new ut(new _.TCStringV2(o.customConsentString)) : null, p = o && o.customConsentString ? new ot(o.acString) : null, f = s ? new ut(s) : null, h = a ? new ut(a) : null, g = c ? new ot(c) : null, y = !1, m = !1;
                            if (u && u.getLastUpdated() && (!t.consentData.getLastUpdated() || u.getLastUpdated() > t.consentData.getLastUpdated()) || f && f.getLastUpdated() && (!t.consentData.getLastUpdated() || f.getLastUpdated() > t.consentData.getLastUpdated()) ? (y = !0, u && u.getLastUpdated() && (!f || !f.getLastUpdated() || u.getLastUpdated() > f.getLastUpdated()) ? (t.consentData = u, oe(t.consentData, !1, !0)) : f && ((!u || !u.getLastUpdated() || u.getLastUpdated() < f.getLastUpdated()) && (m = !0), t.consentData = f, oe(t.consentData, !1, !0, !0))) : t.consentData.getLastUpdated() && (b.thirdPartyCookieSync && (!f || !f.getLastUpdated() || f.getLastUpdated() < t.consentData.getLastUpdated()) && oe(t.consentData, !1, !0, !1, !0), (!u || !u.getLastUpdated() || u.getLastUpdated() < t.consentData.getLastUpdated()) && (m = !0)), l && l.getLastUpdated() && (!t.customConsentData.getLastUpdated() || l.getLastUpdated() > t.customConsentData.getLastUpdated()) || h && h.getLastUpdated() && (!t.customConsentData.getLastUpdated() || h.getLastUpdated() > t.customConsentData.getLastUpdated()) ? (y = !0, l && l.getLastUpdated() && (!h || !h.getLastUpdated() || l.getLastUpdated() > h.getLastUpdated()) ? (t.customConsentData = l, oe(t.customConsentData, !0, !0)) : h && ((!l || !l.getLastUpdated() || l.getLastUpdated() < h.getLastUpdated()) && (m = !0), t.customConsentData = h, oe(t.customConsentData, !0, !0, !0))) : t.customConsentData.getLastUpdated() && (b.thirdPartyCookieSync && (!h || !h.getLastUpdated() || h.getLastUpdated() < t.customConsentData.getLastUpdated()) && oe(t.customConsentData, !0, !0, !1, !0), (!l || !l.getLastUpdated() || l.getLastUpdated() < t.customConsentData.getLastUpdated()) && (m = !0)), y && (d.debug('Consent data not in sync'), t.publisherSelection = t.getPublisherSelection(!0), t.updateAdditionalConsent()), g && t.additionalConsent && g.getConsentString() === t.additionalConsent.getConsentString() || t.updateAdditionalConsent(), !t.additionalConsent.getConsentString() || p && p.getConsentString() === t.additionalConsent.getConsentString() || (m = !0), o) {
                                var v = o.gdprWebConfigVersion || o.configVersion;
                                (!v && i || !o.lastInteraction && r) && (m = !0), v && (!i || v > i) && de(i = v, !0), o.lastInteraction && (!r || o.lastInteraction / 1000 > r) && ue(r = o.lastInteraction / 1000, !0);
                            }
                            m && (d.debug('PL Consent data out of sync'), ft(t.consentData.getConsentString(), t.customConsentData.getConsentString(), t.additionalConsent.getConsentString(), r)), d.debug('Consent data synced'), t.syncEvent && t.syncEvent.done();
                        });
                    }), It(this, 'getPurposeOneTreatment', function () {
                        return t.purposeOneTreatment;
                    }), It(this, 'setPurposeOneTreatment', function (e, n) {
                        t.purposeOneTreatment = !n && e;
                    }), It(this, 'updateCoreSegment', function () {
                        var e = t.consentData, n = t.customConsentData, o = t.vendorList, r = void 0 === o ? {} : o, i = e.getCoreSegmentData(), s = {};
                        i.cmpId || (s.cmpId = Je), i.cmpVersion || (s.cmpVersion = Qe), i.tcfPolicyVersion || (s.tcfPolicyVersion = r.tcfPolicyVersion), i.vendorListVersion || (s.vendorListVersion = r.vendorListVersion), Et(s) || (e.updateCoreSegmentData(s), n.updateCoreSegmentData(s));
                    }), It(this, 'updateVendorList', function (e, n) {
                        e && 'object' === kt(e) ? e.vendorListVersion && e.purposes === Object(e.purposes) && e.vendors === Object(e.vendors) ? (d.debug('Vendor List Set'), t.vendorList = e, t.publisherSelection = t.getPublisherSelection(!0), n && n('vendorListChanged')) : d.error('The provided vendor list does not respect the schema from the IAB EU\u2019s GDPR Consent and Transparency Framework') : d.error('Vendor list must be object');
                    }), It(this, 'getVendorList', function (e) {
                        var n = t.vendorList || {};
                        return e ? JSON.parse(JSON.stringify(n)) : n;
                    }), It(this, 'accept', function (e, n, o, r, i) {
                        t.setConsent(e, !0, n, o, r, i);
                    }), It(this, 'reject', function (e, n, o, r, i) {
                        t.setConsent(e, !1, n, o, r, i);
                    }), It(this, 'setConsent', function (e, n, o, r, i, s) {
                        var a = t.consentData, c = t.customConsentData, u = t.consentDataConfig, l = t.getVendorList() || {}, d = l.purposes, p = void 0 === d ? {} : d, f = l.vendors, h = void 0 === f ? {} : f, g = l.specialFeatures, y = void 0 === g ? {} : g, m = e || {}, v = m.purposeIds, w = m.vendorIds, C = m.legIntPurposeIds, S = m.legIntVendorIds, P = m.specialFeatureIds, T = m.publisher, L = void 0 === T ? {} : T, O = m.consentOnDemand, A = void 0 !== O && O, I = t.getPublisherSelection();
                        t.setSelected(h, a, c, !!e, w, n, 'vendorsConsent', 'setAllowed', I.vendors, !0, !1, !1, !1, A), t.setSelected(p, a, c, !!e, v, n, 'purposesConsent', 'setAllowed', I.purposes, !1, !1, !0), t.setSelected(y, a, null, !!e, P, n, 'specialFeatureOptIns', 'setAllowed', I.specialFeatures), u.publisher.enabled && t.setSelected(p, a, c, !!e, L.purposeIds, n, 'pubPurposesConsent', 'setAllowedPublisherTC', u.publisher.purposes, !1, !1, !0, u.publisher.lockedPurposes);
                        var k = !u.handleLegIntOnAcceptAndDenyAll || n;
                        t.setSelected(h, a, c, !!e, S, k, 'vendorsLegitimateInterest', 'setAllowed', I.vendors, !0, !0), t.setSelected(p, a, c, !!e, C, k, 'purposeLITransparency', 'setAllowed', I.purposes, !1, !0, !0), u.publisher.enabled && t.setSelected(p, a, c, !!e, L.legIntPurposeIds, k, 'pubPurposesLITransparency', 'setAllowedPublisherTC', u.publisher.legIntPurposes, !1, !0, !0, u.publisher.lockedPurposes), A && (ue(null, !0), de(b.configVersion, !0)), t.persist(o, r, i, s);
                    }), It(this, 'setSelected', function (e, n, o, r, i, s, a, c, u, l, d, p, f, h) {
                        var g = l ? 10000 : 24;
                        r && i && i.length > 0 ? i.forEach(function (e) {
                            t.setSelectedItem(n, o, e, g, s, a, c, u, l, d, p, f, h);
                        }) : !r && u && Object.keys(e).forEach(function (r) {
                            t.setSelectedItem(n, o, e[r].id, g, s, a, c, u, l, d, p, f, h);
                        });
                    }), It(this, 'setSelectedItem', function (e, n, o, r, i, s, a, c, u, l, d, p, f) {
                        if ((u || !l || o > 1) && (!c || t.isItemAllowed(o, c, u, l, d))) {
                            var h = !u && p && p.indexOf(o) > -1;
                            if (n && o > r ? n[a](s, t.removeOffset(o, !u), h || i) : e[a](s, o, h || i), f && u && i) {
                                var g = c.find(function (e) {
                                    return e === o || e.id === o;
                                });
                                g && t.selectAllVendorPurposesAndFeatures(e, n, g);
                            }
                        }
                    }), It(this, 'selectAllVendorPurposesAndFeatures', function (e, n, o) {
                        o.purposes && o.purposes.length > 0 && o.purposes.forEach(function (o) {
                            t.isCustom(o, !0) ? n.setAllowed('purposesConsent', t.removeOffset(o, !0), !0) : e.setAllowed('purposesConsent', o, !0);
                        }), o.legIntPurposes && o.legIntPurposes.length > 0 && o.legIntPurposes.forEach(function (o) {
                            t.isCustom(o, !0) ? n.setAllowed('purposeLITransparency', t.removeOffset(o, !0), !0) : e.setAllowed('purposeLITransparency', o, !0);
                        }), o.specialFeatures && o.specialFeatures.length > 0 && o.specialFeatures.forEach(function (t) {
                            e.setAllowed('specialFeatureOptIns', t, !0);
                        });
                    }), It(this, 'isItemAllowed', function (e, n, o, r, i) {
                        var s = n.find(function (t) {
                            return t === e || t.id === e;
                        });
                        return !!s && (o ? !r || s.isLegInt : (!t.getPurposeOneTreatment() || !i || 1 !== s.id) && (!s.vendors || s.vendors.some(function (t) {
                            return r && i ? t.legIntPurposes && t.legIntPurposes.indexOf(e) > -1 : t[i ? 'purposes' : 'specialFeatures'] && t[i ? 'purposes' : 'specialFeatures'].indexOf(e) > -1;
                        })));
                    }), It(this, 'updateConsent', function (e, n, o, r) {
                        var i = t.consentData, s = t.customConsentData;
                        t.setAllowed(i, s, e), t.persist(null, n, o, r);
                    }), It(this, 'setAllowed', function (e, n, o) {
                        o && o.vendors && o.vendors.length > 0 && o.vendors.forEach(function (r) {
                            if (r.forPublisher)
                                if (r.isPublisher)
                                    t.setAllowedItems(e, n, o.purposes, r.purposes, 'setAllowedPublisherTC', 'pubPurposesConsent', r, !0), t.setAllowedItems(e, n, o.purposes, r.legIntPurposes, 'setAllowedPublisherTC', 'pubPurposesLITransparency', r, !0, !0);
                                else {
                                    var i = t.isCustom(r.id);
                                    r.isLegInt && t.setAllowedItem(e, n, r, i, 'setAllowed', 'vendorsLegitimateInterest', null, !1, !0), t.setAllowedItem(e, n, r, i, 'setAllowed', 'vendorsConsent'), t.setAllowedItems(e, n, o.purposes, r.purposes, 'setAllowed', 'purposesConsent', null, !0), t.setAllowedItems(e, n, o.purposes, r.legIntPurposes, 'setAllowed', 'purposeLITransparency', null, !0, !0), t.setAllowedItems(e, null, o.specialFeatures, r.specialFeatures, 'setAllowed', 'specialFeatureOptIns');
                                }
                        });
                    }), It(this, 'setAllowedItems', function (e, n, o, r, i, s, a, c, u) {
                        r && r.length > 0 && r.forEach(function (r) {
                            var l = o.find(function (e) {
                                return e.id === r;
                            });
                            if (l) {
                                if (t.getPurposeOneTreatment() && c && 1 === l.id)
                                    return;
                                var d = t.isCustom(l.id, c);
                                u && c && 1 === l.id || t.setAllowedItem(e, n, l, d, i, s, a, c, u);
                            }
                        });
                    }), It(this, 'setAllowedItem', function (e, n, o, r, i, s, a, c, u) {
                        var l = !!(a && a.lockedPurposes && a.lockedPurposes.indexOf(o.id) > -1) || (u ? !o.iObject : o.selected) && (!a || (u ? !a.iObject : a.selected));
                        n && r ? n[i](s, t.removeOffset(o.id, c), l) : e[i](s, o.id, l);
                    }), It(this, 'persist', function (e, n, o, r) {
                        var i = t.consentData, s = t.customConsentData, a = t.consentDataConfig, c = t.vendorList, u = void 0 === c ? {} : c, l = !i.getLastUpdated() || !s.getLastUpdated(), d = {
                                cmpId: Je,
                                cmpVersion: Qe,
                                vendorListVersion: u.vendorListVersion,
                                tcfPolicyVersion: u.tcfPolicyVersion,
                                isServiceSpecific: !b.storeConsentGlobally,
                                purposeOneTreatment: t.getPurposeOneTreatment(),
                                publisherCC: a.publisherCC,
                                consentLanguage: ke(),
                                consentScreen: o
                            };
                        i.updateCoreSegmentData(d), s.updateCoreSegmentData(d), t.updatePublisherTC(i, s, u.purposes), t.updatePublisherRestrictions(i, s, !b.storeConsentGlobally && a.publisherRestrictions ? a.publisherRestrictions : []), oe(i), oe(s, !0), t.syncConsentData();
                        var p = JSON.stringify(ve()), f = JSON.stringify(t.getPublisherSelection(!0));
                        be(t.getPublisherSelection()), (l || p !== f) && (t.updateAdditionalConsent(), ft(t.consentData.getConsentString(), t.customConsentData.getConsentString(), t.additionalConsent.getConsentString()), t.consentChanged(e, n, r));
                    }), It(this, 'updatePublisherTC', function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = t.getPublisherTCData();
                        if (o.pubPurposesConsent || o.pubPurposesLITransparency) {
                            var r = Object.keys(n).filter(function (e) {
                                    return e > 24;
                                }).length, i = {
                                    customPurposesConsent: o.pubPurposesConsent,
                                    customPurposesLITransparency: o.pubPurposesLITransparency,
                                    numCustomPurposes: r
                                };
                            e.updatePublisherTCData(i);
                        }
                    }), It(this, 'updatePublisherRestrictions', function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], o = JSON.parse(JSON.stringify(n.filter(function (e) {
                                return e.purposeId <= 24;
                            })));
                        o = o.filter(function (e) {
                            return e.restrictedVendors = e.restrictedVendors.filter(function (e) {
                                return e <= 10000;
                            }), e.restrictedVendors.length > 0;
                        }), e.updateCoreSegmentData({ publisherRestrictions: o }), t.updateCoreSegmentData({ publisherRestrictions: n });
                    }), It(this, 'updateAdditionalConsent', function () {
                        var e = t.consentData, n = t.additionalConsent, o = e.getAllowed('purposesConsent'), r = e.getAllowed('purposeLITransparency'), i = !(![
                                1,
                                3,
                                4
                            ].every(function (e) {
                                return o.indexOf(e) > -1;
                            }) || !(o.indexOf(2) > -1 || r.indexOf(2) > -1));
                        t.getPublisherSelection().vendors.filter(function (e) {
                            return e.id > 20000;
                        }).forEach(function (e) {
                            n.setVendorConsent(e.id - 20000, e.selected && i);
                        }), he(n.getConsentString(), !0);
                    }), It(this, 'syncConsentData', function () {
                        t.consentData = new ut(new _.TCStringV2(t.consentData.getConsentString())), t.customConsentData = new ut(new _.TCStringV2(t.customConsentData.getConsentString()));
                    }), It(this, 'consentChanged', function (e, n, o) {
                        o = o || function () {
                        }, e || (e = t.getConsentStatus()), se() || t.logging(!1, null, null, o), t.logging(!0, e, n), o('consentChanged');
                    }), It(this, 'getConsentObject', function (e, n, o, r, i, s) {
                        t.updateCoreSegment();
                        var a = t.consentData, c = t.customConsentData, u = t.consentDataConfig, l = t.additionalConsent, d = t.getVendorList(!0), p = a.getCoreSegmentData(), f = a.getConsentData(), h = c.getConsentData(), g = {
                                tcfPolicyVersion: p.tcfPolicyVersion || d.tcfPolicyVersion,
                                cmpId: p.cmpId || Je,
                                cmpVersion: p.cmpVersion || Qe,
                                gdprApplies: n
                            };
                        if (n) {
                            a.getLastUpdated() && (g.tcString = f.getConsentString()), s && c.getLastUpdated() && (g.tcStringCustom = h.getConsentString());
                            var y = l.getConsentString();
                            y && (g.addtlConsent = y), g.cmpStatus = o, g.eventStatus = r, g.listenerId = i, g.isServiceSpecific = !!p.isServiceSpecific, g.useNonStandardStacks = !!p.useNonStandardStacks, g.publisherCC = p.publisherCC, g.purposeOneTreatment = p.purposeOneTreatment, p.isServiceSpecific || (g.outOfBand = {
                                allowedVendors: f.getAllowedVendorsData(),
                                discloseVendors: f.getDisclosedVendorsData()
                            });
                            var m = d.purposes, v = void 0 === m ? {} : m, b = d.vendors, w = void 0 === b ? {} : b, C = d.specialFeatures, S = void 0 === C ? {} : C;
                            s || (v = t.removeCustomItems(v, 24), w = t.removeCustomItems(w, 10000));
                            var P = t.getMaxVendorId(w), T = t.mapSelected(w, a, s ? c : null, 'vendorsConsent', 'getAllowed', 'isAllowed', e, u.vendors, P, !0), L = t.mapSelected(w, a, s ? c : null, 'vendorsLegitimateInterest', 'getAllowed', 'isAllowed', e, u.vendors, P, !0);
                            g.vendor = {
                                consents: T,
                                legitimateInterests: L
                            };
                            var O = t.mapSelected(v, a, s ? c : null, 'purposesConsent', 'getAllowed', 'isAllowed'), A = t.mapSelected(v, a, s ? c : null, 'purposeLITransparency', 'getAllowed', 'isAllowed');
                            g.purpose = {
                                consents: O,
                                legitimateInterests: A
                            };
                            var I = t.mapSelected(S, a, s ? c : null, 'specialFeatureOptIns', 'getAllowed', 'isAllowed');
                            g.specialFeatureOptins = I;
                            var k = t.mapSelected(v, a, null, 'pubPurposesConsent', 'getAllowedPublisherTC', 'isAllowedPublisherTC', null, u.publisher.purposes), D = t.mapSelected(v, a, null, 'pubPurposesLITransparency', 'getAllowedPublisherTC', 'isAllowedPublisherTC', null, u.publisher.legIntPurposes), x = t.mapSelected(d.purposes, a, c, 'pubPurposesConsent', 'getAllowedPublisherTC', 'isAllowedPublisherTC', null, u.publisher.purposes, null, null, !0), j = t.mapSelected(d.purposes, a, c, 'pubPurposesLITransparency', 'getAllowedPublisherTC', 'isAllowedPublisherTC', null, u.publisher.legIntPurposes, null, null, !0);
                            g.publisher = {
                                consents: k,
                                legitimateInterests: D,
                                customPurpose: {
                                    consents: x,
                                    legitimateInterests: j
                                }
                            };
                        }
                        return g;
                    }), It(this, 'mapSelected', function (e, n, o, r, i, s, a, c) {
                        var u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, l = arguments.length > 9 && void 0 !== arguments[9] && arguments[9], d = arguments.length > 10 && void 0 !== arguments[10] && arguments[10], p = {};
                        if (a && a.length)
                            a.forEach(function (e) {
                                t.mapSelectedItem(e, p, n, o, r, s, c, l, d);
                            });
                        else if (!o || 'vendorsConsent' !== r && 'vendorsLegitimateInterest' !== r)
                            for (var f = n[i](r) || [], h = o ? t.addOffsetToIds(o[i](r) || [], !l) : [], g = Math.max.apply(Math, [u].concat(St(Object.keys(e).map(function (t) {
                                        return e[t].id;
                                    })), St(f), St(h))), y = 1; y <= g; y++)
                                t.mapSelectedItem(y, p, n, o, r, s, c, l, d);
                        else {
                            var m, v = Pt(c);
                            try {
                                for (v.s(); !(m = v.n()).done;) {
                                    var b = m.value;
                                    t.mapSelectedItem(b, p, n, o, r, s, c, l);
                                }
                            } catch (e) {
                                v.e(e);
                            } finally {
                                v.f();
                            }
                        }
                        return p;
                    }), It(this, 'mapSelectedItem', function (e, n, o, r, i, s, a, c, u) {
                        t.isCustom(e, !c) ? r && (n[e] = (!a || a.indexOf(e) > -1) && r[s](i, t.removeOffset(e, !c))) : u || (n[e] = (!a || a.indexOf(e) > -1) && o[s](i, e));
                    }), It(this, 'shouldConsentToolBeTriggered', function () {
                        return new Promise(function (e) {
                            b.preferenceLink.enabled && b.preferenceLink.apiKey ? t.syncEvent = new Vt(t.checkShouldConsentToolBeTriggered, e) : t.checkShouldConsentToolBeTriggered(e);
                        });
                    }), It(this, 'checkShouldConsentToolBeTriggered', function (e) {
                        var n = t.consentData, o = t.customConsentData, r = b.redisplayAfter, i = b.configVersion;
                        n.getLastUpdated() && o.getLastUpdated() ? r ? Promise.all([
                            ce(),
                            le()
                        ]).then(function (s) {
                            var a = Tt(s, 2), c = a[0], u = a[1], l = new Date().getTime() / 1000, d = l - Math.max(n.getLastUpdated(), o.getLastUpdated()) / 1000, p = l - (c || 0), f = Math.max(d, p), h = t.getConsentStatus();
                            JSON.stringify(ve()) !== JSON.stringify(t.getPublisherSelection()) && 'FULL_CONSENT' !== h && f > r.vendorChange || i !== u && f > r.configChange || 'FULL_CONSENT' === h && f > r.accept || 'FULL_CONSENT' !== h && f > r.reject ? e(!0) : e(!1);
                        }) : e(!1) : e(!0);
                    }), It(this, 'shouldNoticeBeShown', function () {
                        return !b.noticeConfig || b.noticeConfig.display;
                    }), It(this, 'getPublisherSelection', function (e) {
                        return t.publisherSelection && !e || (t.publisherSelection = t.setPublisherSelection()), t.publisherSelection;
                    }), It(this, 'setPublisherSelection', function () {
                        var e = t.consentDataConfig, n = t.consentData, o = t.customConsentData, r = t.getVendorList(!0), i = t.publisherSelection || ve() || {}, s = n.getCoreSegmentData(), a = n.getPublisherTCData(), c = o.getCoreSegmentData(), u = o.getPublisherTCData(), l = {
                                vendors: [],
                                purposes: [],
                                specialPurposes: [],
                                features: [],
                                specialFeatures: []
                            };
                        if (r) {
                            var d = {
                                purposes: {},
                                specialPurposes: {},
                                features: {},
                                specialFeatures: {}
                            };
                            t.groupVendors(r.vendors, a, u, e, d, l.vendors, i.vendors);
                            var p = !!(e && e.publisher && e.publisher.enabled);
                            t.groupPurposesOrFeatures(!0, r.purposes, s, a, c, u, l.purposes, d.purposes, !0, i.purposes, e.publisherRestrictions, p), t.groupPurposesOrFeatures(!0, r.specialPurposes, null, null, null, null, l.specialPurposes, d.specialPurposes, !1, i.specialPurposes), t.groupPurposesOrFeatures(!1, r.features, null, null, null, null, l.features, d.features, !1), t.groupPurposesOrFeatures(!1, r.specialFeatures, s, null, c, null, l.specialFeatures, d.specialFeatures, !0), t.setVendorSelectionAndLegInt(l.vendors, s, c, i.vendors);
                        }
                        return n.getLastUpdated() || s.purposeLITransparency || s.vendorsLegitimateInterest || a.pubPurposesLITransparency || o.getLastUpdated() || c.purposeLITransparency || c.vendorsLegitimateInterest || u.pubPurposesLITransparency || t.setInitialLIState(n, o, l), l;
                    }), It(this, 'groupVendors', function (e, n, o, r, i, s, a) {
                        if (e) {
                            var c = new Date();
                            if (Object.keys(e).forEach(function (n) {
                                    var o = e[n];
                                    (!o.deletedDate || new Date(o.deletedDate) > c) && (o.forPublisher = !r.vendors || r.vendors && r.vendors.indexOf(o.id) > -1, o.forPublisher && (t.isCustom(o.id) && t.setLockedPurposes(r.lockedPurposesPerVendor, o), s.push(o), t.addToVendorsGroupedByKeyNameId(i.purposes, o, 'purposes'), t.addToVendorsGroupedByKeyNameId(i.purposes, o, 'legIntPurposes'), t.addToVendorsGroupedByKeyNameId(i.specialPurposes, o, 'specialPurposes'), t.addToVendorsGroupedByKeyNameId(i.features, o, 'features'), t.addToVendorsGroupedByKeyNameId(i.specialFeatures, o, 'specialFeatures')));
                                }), r && r.publisher && r.publisher.enabled && (r.publisher.purposes || r.publisher.legIntPurposes)) {
                                var u = Ct(Ct({}, r.publisher), {}, {
                                    isPublisher: !0,
                                    forPublisher: !0
                                });
                                u.selected = t.isPublisherSelected(n, o, r.publisher), u.legIntPurposes = u.legIntPurposes ? u.legIntPurposes.filter(function (e) {
                                    return 1 !== e;
                                }) : [], u.isLegInt = u.legIntPurposes && u.legIntPurposes.length > 0 || u.specialPurposes && u.specialPurposes.length > 0, u.isLegInt && (u.iObject = !t.isLegIntPublisherSelected(n, o, a ? a.find(function (e) {
                                    return e.isPublisher;
                                }) : null)), s.push(u), t.addToVendorsGroupedByKeyNameId(i.purposes, u, 'purposes'), t.addToVendorsGroupedByKeyNameId(i.purposes, u, 'legIntPurposes'), t.addToVendorsGroupedByKeyNameId(i.specialPurposes, u, 'specialPurposes'), t.addToVendorsGroupedByKeyNameId(i.features, u, 'features');
                            }
                        }
                    }), It(this, 'setLockedPurposes', function (e, t) {
                        e && 0 !== e.length && e.forEach(function (e) {
                            e.vendorId === t.id && (t.lockedPurposes = e.purposes);
                        });
                    }), It(this, 'setVendorSelectionAndLegInt', function (e, n, o, r) {
                        e && e.length > 0 && e.forEach(function (e) {
                            !e.isPublisher && e.id && (e.isCustom = t.isCustom(e.id), e.isCustom ? e.selected = o && o.vendorsConsent && o.vendorsConsent.indexOf(t.removeOffset(e.id)) > -1 : e.selected = n && n.vendorsConsent && n.vendorsConsent.indexOf(e.id) > -1, e.isLegInt = e.legIntPurposes && e.legIntPurposes.length > 0 || e.specialPurposes && e.specialPurposes.length > 0, e.isLegInt && (e.iObject = !t.isLegIntVendorSelected(e.isCustom ? o : n, e.id, r, e.isCustom)));
                        });
                    }), It(this, 'groupPurposesOrFeatures', function (e, n, o, r, i, s, a, c, u, l, d, p) {
                        n && Object.keys(n).forEach(function (f) {
                            var h = n[f];
                            c[h.id] && (h.vendors = c[h.id], e && d && t.setPublisherRestriction(h, d), h.vendors && h.vendors.length > 0 && (h.rightToObject = u, e ? (h.isCustom = t.isCustom(h.id, !0), h.selected = h.isCustom ? t.isPurposeSelected(i, s, u, t.removeOffset(h.id, !0), p) : t.isPurposeSelected(o, r, u, h.id, p), h.isLegInt = u && h.vendors.some(function (e) {
                                return (e.forPublisher || e.isPublisher) && e.legIntPurposes && e.legIntPurposes.indexOf(h.id) > -1;
                            }), h.isLegInt && (h.iObject = h.isCustom ? !t.isLegIntPurposeSelected(i, s, u, h.id, l, h.isCustom, p) : !t.isLegIntPurposeSelected(o, r, u, h.id, l, !1, p))) : h.selected = t.isFeatureSelected(o, u, h.id), h.forPublisher = h.vendors.some(function (e) {
                                return e.forPublisher || e.isPublisher;
                            }), a.push(h)));
                        });
                    }), It(this, 'setPublisherRestriction', function (e, t) {
                        var n = t ? t.filter(function (t) {
                            return t.purposeId === e.id;
                        }) : null;
                        n && n.length > 0 && n.forEach(function (t) {
                            switch (t.restrictionType) {
                            case 0:
                                for (var n = e.vendors.length - 1; n >= 0; n--) {
                                    var o = e.vendors[n];
                                    (e.id > 1 || o.id > 10000) && t.restrictedVendors.indexOf(o.id) > -1 && (o.purposes = o.purposes.filter(function (e) {
                                        return e !== t.purposeId;
                                    }), o.legIntPurposes = o.legIntPurposes.filter(function (e) {
                                        return e !== t.purposeId;
                                    }), e.vendors.splice(n, 1));
                                }
                                break;
                            case 1:
                                e.vendors.forEach(function (n) {
                                    (e.id > 1 || n.id > 10000) && t.restrictedVendors.indexOf(n.id) > -1 && n.legIntPurposes.indexOf(t.purposeId) > -1 && n.flexiblePurposes.indexOf(t.purposeId) > -1 && (n.legIntPurposes = n.legIntPurposes.filter(function (e) {
                                        return e !== t.purposeId;
                                    }), n.purposes.push(t.purposeId));
                                });
                                break;
                            case 2:
                                e.vendors.forEach(function (n) {
                                    (e.id > 1 || n.id > 10000) && t.restrictedVendors.indexOf(n.id) > -1 && n.purposes.indexOf(t.purposeId) > -1 && n.flexiblePurposes.indexOf(t.purposeId) > -1 && (n.purposes = n.purposes.filter(function (e) {
                                        return e !== t.purposeId;
                                    }), n.legIntPurposes.push(t.purposeId));
                                });
                                break;
                            default:
                                d.info('Restriction type not supported');
                            }
                        });
                    }), It(this, 'isPublisherSelected', function (e, n, o) {
                        if (!e || !n)
                            return !1;
                        var r = [];
                        n.pubPurposesConsent.forEach(function (e) {
                            r.push(t.addOffset(e, !0));
                        });
                        var i = [].concat(St(e.pubPurposesConsent), r);
                        return !!o.purposes && o.purposes.some(function (e) {
                            return i.indexOf(e) > -1;
                        });
                    }), It(this, 'isLegIntPublisherSelected', function (e, n, o) {
                        if (!(e && e.pubPurposesLITransparency && n && n.pubPurposesLITransparency))
                            return !0;
                        var r = [];
                        n.pubPurposesLITransparency.forEach(function (e) {
                            r.push(t.addOffset(e, !0));
                        });
                        var i = [].concat(St(e.pubPurposesLITransparency), r);
                        return !o || !o.legIntPurposes || o.legIntPurposes.some(function (e) {
                            return i.indexOf(e) > -1;
                        });
                    }), It(this, 'isPurposeSelected', function (e, t, n, o, r) {
                        return !n || e && e.purposesConsent && e.purposesConsent.indexOf(o) > -1 || r && t && t.pubPurposesConsent && t.pubPurposesConsent.indexOf(o) > -1;
                    }), It(this, 'isLegIntPurposeSelected', function (e, n, o, r, i, s, a) {
                        return !o || !e && (!a || !n) || e && (!e.purposeLITransparency || e.purposeLITransparency.indexOf(s ? t.removeOffset(r, !0) : r) > -1) || a && n && (!n.pubPurposesLITransparency || n.pubPurposesLITransparency.indexOf(s ? t.removeOffset(r, !0) : r) > -1) || !i || !i.find(function (e) {
                            return e.id === r && e.isLegInt;
                        });
                    }), It(this, 'isLegIntVendorSelected', function (e, n, o, r) {
                        return e && (!e.vendorsLegitimateInterest || e.vendorsLegitimateInterest.indexOf(r ? t.removeOffset(n) : n) > -1) || !o || !o.find(function (e) {
                            return e.id === n && e.isLegInt;
                        });
                    }), It(this, 'isFeatureSelected', function (e, t, n) {
                        return !t || e && e.specialFeatureOptIns && e.specialFeatureOptIns.indexOf(n) > -1;
                    }), It(this, 'addToVendorsGroupedByKeyNameId', function (e, t, n) {
                        if (t[n]) {
                            var o, r = Pt(t[n]);
                            try {
                                for (r.s(); !(o = r.n()).done;) {
                                    var i = o.value;
                                    e[i] ? e[i].some(function (e) {
                                        return e.id === t.id;
                                    }) || e[i].push(t) : e[i] = [t];
                                }
                            } catch (e) {
                                r.e(e);
                            } finally {
                                r.f();
                            }
                        }
                    }), It(this, 'setInitialLIState', function (e, n, o) {
                        o.vendors.forEach(function (o) {
                            o.isLegInt && !o.iObject && (o.id ? t.isCustom(o.id) ? n.setAllowed('vendorsLegitimateInterest', t.removeOffset(o.id), !0) : e.setAllowed('vendorsLegitimateInterest', o.id, !0) : o.isPublisher && o.legIntPurposes.forEach(function (o) {
                                t.isCustom(o, !0) ? n.setAllowedPublisherTC('pubPurposesLITransparency', t.removeOffset(o, !0), !0) : e.setAllowedPublisherTC('pubPurposesLITransparency', o, !0);
                            }));
                        }), o.purposes.forEach(function (o) {
                            o.id && o.isLegInt && !o.iObject && o.vendors.some(function (e) {
                                return e.id;
                            }) && (t.isCustom(o.id, !0) ? n.setAllowed('purposeLITransparency', t.removeOffset(o.id, !0), !0) : e.setAllowed('purposeLITransparency', o.id, !0));
                        });
                    }), It(this, 'getConsentStatus', function () {
                        var e = t.consentData, n = 'GDPR_NOT_APPLIED';
                        if (t.gdprApplies && (n = 'UNKNOWN', e.getLastUpdated())) {
                            var o = t.getPublisherSelection(), r = {
                                    partialConsent: !1,
                                    fullConsent: !0
                                };
                            o.vendors.forEach(function (e) {
                                t.setPartialAndFullConsentStatus(r, e);
                            }), o.purposes.forEach(function (e) {
                                t.setPartialAndFullConsentStatus(r, e, !0, !0);
                            }), o.specialFeatures.forEach(function (e) {
                                t.setPartialAndFullConsentStatus(r, e, !0);
                            }), n = r.fullConsent ? 'FULL_CONSENT' : r.partialConsent ? 'PARTIAL_CONSENT' : 'NO_CONSENT';
                        }
                        return d.debug('Consent Status: ', n), n;
                    }), It(this, 'setPartialAndFullConsentStatus', function (e, t, n, o) {
                        t.forPublisher && (!n || n && t.rightToObject) && ((!t.isLegInt || !t.iObject || o && t.vendors.every(function (e) {
                            return !e.legIntPurposes || -1 === e.legIntPurposes.indexOf(t.id);
                        })) && (t.selected || o && t.vendors.every(function (e) {
                            return !e.purposes || -1 === e.purposes.indexOf(t.id);
                        })) ? e.partialConsent = !0 : e.fullConsent = !1);
                    }), It(this, 'logging', function (e, n, o, r) {
                        if (e && b.consentLoggingURL || b.dailyActiveUserLoggingURL) {
                            var i = t.consentData, s = t.customConsentData;
                            re().then(function (a) {
                                var c = window.location.hostname.split('.').slice(-2).join('.'), u = {
                                        timestamp: +new Date(),
                                        domain: c,
                                        appId: b.appId,
                                        configVersion: b.configVersion,
                                        libraryVersion: Qe,
                                        auditId: a,
                                        browserFamily: vt.getBrowser().name,
                                        osFamily: vt.getOS().name,
                                        deviceType: vt.getDevice().type || 'desktop',
                                        consentString: i.getConsentString(),
                                        customConsentString: s.getConsentString()
                                    };
                                e ? (u.consentData = i.getConsentData(), u.customConsentData = s.getConsentData(), u.eventName = n, u.eventOrigin = o) : u.consentStatus = t.getConsentStatus();
                                var l = {
                                    PartitionKey: Dt(),
                                    Data: u
                                };
                                'UNKNOWN' === u.consentStatus ? setTimeout(function () {
                                    t.dailyActiveUserLogSent || se() || ye() || t.postLog(!e, l, r);
                                }, 15000) : t.postLog(!e, l, r);
                            });
                        } else
                            d.debug('Logging URL not defined!');
                    }), It(this, 'postLog', function (e, n, o) {
                        const $___old_17013986145d4713 = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                        try {
                            if ($___old_17013986145d4713)
                                ({}.constructor.defineProperty(window, 'fetch', $___mock_b3a105678096e0ee.fetch));
                            return function () {
                                e && o && o('dauLogSent', { consentStatus: n.Data.consentStatus });
                                var r = e ? b.dailyActiveUserLoggingURL : b.consentLoggingURL;
                                fetch(r, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(n)
                                }).then(function () {
                                    e && ('UNKNOWN' !== n.Data.consentStatus && ae(), t.dailyActiveUserLogSent = !0, me()), d.debug('Data logged');
                                }).catch(function (e) {
                                    d.error('Failed to log data: ', e);
                                });
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_17013986145d4713)
                                ({}.constructor.defineProperty(window, 'fetch', $___old_17013986145d4713));
                        }
                    }), It(this, 'getMaxVendorId', function (e) {
                        var t = 0;
                        return Object.keys(e).forEach(function (n) {
                            e[n].id > t && (t = e[n].id);
                        }), t;
                    }), It(this, 'isCustom', function (e, t) {
                        return e > (t ? 24 : 10000);
                    }), It(this, 'addOffsetToIds', function (e, n) {
                        var o = [];
                        return e && e.length > 0 && e.forEach(function (e) {
                            o.push(t.addOffset(e, n));
                        }), o;
                    }), It(this, 'addOffset', function (e, t) {
                        return e += t ? 24 : 10000;
                    }), It(this, 'removeOffset', function (e, t) {
                        return e -= t ? 24 : 10000;
                    }), It(this, 'removeCustomItems', function (e, t) {
                        return Object.keys(e).reduce(function (n, o) {
                            return o <= t && (n[o] = e[o]), n;
                        }, {});
                    }), It(this, 'checkConsent', function (e, n, o, r) {
                        var i = t.getPublisherSelection();
                        return jt(e) ? t.vendorHasConsent(e, i, o, r) : t.checkVendorsConsent(e, i, o, r, n);
                    }), It(this, 'checkVendorsConsent', function (e, n, o, r, i) {
                        var s = !!e;
                        if (e || (e = n.vendors), !i)
                            return e.every(function (e) {
                                return t.vendorHasConsent(e, n, o, r);
                            });
                        var a = t.getVendorList(), c = [];
                        return e.forEach(function (e) {
                            s || (e = {
                                vendorId: e.id,
                                isPublisher: e.isPublisher
                            });
                            var i = a.vendors ? a.vendors[e.vendorId] : void 0, u = i ? i.name : b.consentDataConfig.publisher && b.consentDataConfig.publisher.enabled ? b.consentDataConfig.publisher.name : void 0;
                            c.push({
                                vendorId: e.vendorId,
                                hasConsent: t.vendorHasConsent(e, n, o, r),
                                vendorName: u
                            });
                        }), c;
                    }), It(this, 'vendorHasConsent', function (e, n, o, r) {
                        var i, s = !0;
                        o && ((e.vendorId || e.isPublisher) && (s = !(!(i = n.vendors.find(function (t) {
                            return t.id === e.vendorId;
                        })) || !(e.purposeIds && e.purposeIds.length > 0 || e.specialFeatureIds && e.specialFeatureIds.length > 0 || e.specialPurposeIds && e.specialPurposeIds.length > 0) && (!(!i.purposes || i.purposes.length <= 0 || 1 === i.purposes.length && 1 === i.purposes[0] && t.getPurposeOneTreatment() || i.selected) || i.isLegInt && i.iObject))), s && e.purposeIds && e.purposeIds.length && (s = e.purposeIds.every(function (o) {
                            return t.purposeHasConsent(o, n, i, r, !!e.vendorId);
                        })), s && e.specialPurposeIds && e.specialPurposeIds.length && (s = e.specialPurposeIds.every(function (e) {
                            return t.specialPurposeHasConsent(e, n, i, r);
                        })), s && e.specialFeatureIds && e.specialFeatureIds.length && !e.isPublisher && (s = e.specialFeatureIds.every(function (o) {
                            return t.specialFeatureHasConsent(o, n, i, r, !!e.vendorId);
                        })), !s || !i || e.purposeIds || e.specialPurposeIds || e.specialFeatureIds || ((s = (!i.purposes || i.purposes.every(function (e) {
                            return t.purposeHasConsent(e, n, i, r);
                        })) && (!i.legIntPurposes || i.legIntPurposes.every(function (e) {
                            return t.purposeHasConsent(e, n, i, r);
                        }))) && i.specialPurposes && i.specialPurposes.length > 0 && (s = i.isLegInt && !i.iObject), s && i.specialFeatures && i.specialFeatures.length > 0 && !e.isPublisher && (s = i.specialFeatures.every(function (e) {
                            return t.specialFeatureHasConsent(e, n, i, r);
                        }))));
                        return s;
                    }), It(this, 'purposeHasConsent', function (e, n, o, r, i) {
                        var s = n.purposes.find(function (t) {
                            return t.id === e;
                        });
                        if (!s && r && (!i || o && (o.selected || o.isLegInt && !o.iObject)))
                            return !0;
                        if (s) {
                            if (t.getPurposeOneTreatment() && 1 === e && (!i || o && o.selected))
                                return !0;
                            if (o) {
                                if (r && -1 === o.legIntPurposes.indexOf(e) && -1 === o.purposes.indexOf(e) && (!i || o.selected || o.isLegInt && !o.iObject))
                                    return !0;
                                if (o.legIntPurposes.indexOf(e) > -1) {
                                    if ((!i || !o.iObject) && s.isLegInt && !s.iObject)
                                        return !0;
                                } else if ((!i || o.selected) && o.purposes.indexOf(e) > -1 && (s.selected || o.lockedPurposes && o.lockedPurposes.indexOf(e) > -1))
                                    return !0;
                            } else if (s.selected || s.isLegInt && !s.iObject)
                                return !0;
                        }
                        return !1;
                    }), It(this, 'specialPurposeHasConsent', function (e, t, n, o) {
                        var r = t.specialPurposes.find(function (t) {
                            return t.id === e;
                        });
                        return !!(!r && o || r && (!n || n.specialPurposes.indexOf(e) > -1 && n.isLegInt && !n.iObject));
                    }), It(this, 'specialFeatureHasConsent', function (e, t, n, o, r) {
                        var i = t.specialFeatures.find(function (t) {
                            return t.id === e;
                        });
                        if (!i && o && (!r || n && n.selected))
                            return !0;
                        if (i)
                            if (n) {
                                if (!r || n.selected) {
                                    if (o && -1 === n.specialFeatures.indexOf(e))
                                        return !0;
                                    if (n.specialFeatures.indexOf(e) > -1 && i.selected)
                                        return !0;
                                }
                            } else if (i.selected)
                                return !0;
                        return !1;
                    }), It(this, 'sortVendors', function (e) {
                        return e.sort(function (e, t) {
                            var n = e.name.toUpperCase(), o = t.name.toUpperCase();
                            return n < o ? -1 : n > o ? 1 : 0;
                        });
                    }), this.consentData = new ut(o), this.customConsentData = new ut(r), this.additionalConsent = new ot(a), this.consentDataConfig = s || { publisher: {} }, this.setPurposeOneTreatment(this.consentDataConfig.purposeOneTreatment, b.storeConsentGlobally), i && (this.updateVendorList(i), this.publisherSelection = this.getPublisherSelection()), this.syncConsentWithThirdPartyAndPL();
                };
                function _t(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally {
                            try {
                                o || null == a.return || a.return();
                            } finally {
                                if (r)
                                    throw i;
                            }
                        }
                        return n;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return Mt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return Mt(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function Mt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                function Ut(e) {
                    var t, n, o, r = e.configUpdates, i = e.preview;
                    delete r.vendorListLocation, function (e) {
                        var t = document.getElementById('liveramp-cmp-wrapper');
                        if (t) {
                            var n = t.dataset.geoTargeting;
                            if (n)
                                try {
                                    e.geoTargeting = JSON.parse(n), d.debug('Updated geo targeting: ', n);
                                } catch (e) {
                                    d.error('Unable to parse geo targeting: ', e);
                                }
                        }
                    }(r), b.update(r), n = b, o = q('logging'), ('true' === (t = o) || 'false' === t) && (n.logging = 'true' === o), i ? (b.previewMode = i, b.geoTargeting.allCountries = !0) : delete b.forceMobile, je.updateTranslations(), d.debug('Using configuration: ', JSON.stringify(b));
                    var s = Date.now();
                    return Promise.all([
                        ne(),
                        ne(!0),
                        ge(),
                        Ft()
                    ]).then(function (e) {
                        var t = _t(e, 3), n = t[0], o = t[1], r = t[2], i = new Bt({
                                consentData: n,
                                customConsentData: o,
                                consentDataConfig: b.consentDataConfig,
                                acString: r
                            }), a = new bt(), c = window.__tcfapi || {}, u = c.commandQueue, l = void 0 === u ? [] : u;
                        if (!c.VERSION) {
                            var p = b.cmpId, f = parseInt(b.cmpVersion, 10), h = new $e(i, a, p, f);
                            h.commandQueue = l, window.__tcfapi = h.processCommand;
                            var g = Date.now();
                            return d.debug('Successfully loaded CMP version: '.concat(Qe, ' in ').concat(g - s, 'ms, CMP id: ').concat(Je)), h.isLoaded = !0, h.cmpStatus = 'loaded', h.notify('isLoaded'), Promise.all([
                                b.geoTargeting.allCountries ? Promise.resolve(!0) : fe().then(function (e) {
                                    const $___old_2b2bb513b720a50e = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                                    try {
                                        if ($___old_2b2bb513b720a50e)
                                            ({}.constructor.defineProperty(window, 'fetch', $___mock_b3a105678096e0ee.fetch));
                                        return function () {
                                            return (e = function (e) {
                                                var t = q('country');
                                                if (!e)
                                                    return { country: t };
                                                t && (e.country = t);
                                                return e;
                                            }(e)) && e.country ? Nt(e.country, b.geoTargeting) : fetch(b.geoTargetingUrl, {
                                                headers: {
                                                    Accept: 'application/json',
                                                    'Content-Type': 'application/json'
                                                }
                                            }).then(function (e) {
                                                return e.json();
                                            }).catch(function (e) {
                                                d.error('Failed to get location: ', e);
                                            }).then(function (e) {
                                                return !(!e || !e.country) && (pe(JSON.stringify(e), !0), Nt(e.country, b.geoTargeting));
                                            });
                                        }.apply(this, arguments);
                                    } finally {
                                        if ($___old_2b2bb513b720a50e)
                                            ({}.constructor.defineProperty(window, 'fetch', $___old_2b2bb513b720a50e));
                                    }
                                }),
                                Fe.getVendorList().then(function (e) {
                                    return i.updateVendorList(e, h.notify);
                                })
                            ]).then(function (e) {
                                var t = _t(e, 1)[0];
                                return t || (b.suppressUI = !0), h.gdprApplies = t, i.gdprApplies = t, i.shouldConsentToolBeTriggered();
                            }).then(function (e) {
                                e ? h.changeEventStatus('cmpuishown') : h.changeEventStatus('tcloaded'), h.processCommandQueue(), h.gdprApplies || h.notify('noGdprApplies'), e && h.notify('consentToolShouldBeShown'), h.cmpReady = !0, h.notify('cmpReady'), d.debug('CMP Ready in: '.concat(Date.now() - g, 'ms')), navigator.cookieEnabled || h.notify('disabledCookies'), b.suppressUI && !b.previewMode || !a.shouldLoadInIframe() || ((b.toggleConfig.displayToggle || (a.isMobile() || a.isTablet()) && b.toggleConfig.displayToggleOnMobile) && (a.isMobile() && !1 === b.toggleConfig.displayToggleOnMobile || a.initToggle(b.toggleConfig, h.notify)), e && !a.loadLimitReached() && i.shouldNoticeBeShown() || b.previewMode ? (a.toggleConsentToolShowing(h.notify, !0), a.hideToggle()) : d.debug('Notice should not be shown')), se() || i.logging(!1, null, null, h.notify);
                            }).catch(function (e) {
                                d.error('Failed to load lists. CMP not ready', e), h.cmpStatus = 'error';
                            });
                        }
                        d.error('CMP already loaded');
                    }).catch(function (e) {
                        d.error('Failed to load CMP', e);
                    });
                }
                function Nt(e, t) {
                    var n = !1;
                    if (t.allCountries)
                        n = !0;
                    else {
                        var o = t.countries.indexOf(e) > -1;
                        n = t.includeSelection ? o : !o;
                    }
                    return n;
                }
                function Ft() {
                    var e = document.getElementById('liveramp-cmp-wrapper');
                    if (e) {
                        var t = e.dataset.auditId;
                        if (t)
                            return b.loadedFromLaunchPad = !0, ie(t);
                    }
                    return re();
                }
                n(2);
                var Rt, zt = window.__tcfapi || {};
                Rt = zt, 0 === Object.keys(Rt).length && Rt.constructor === Object && (window.__tcfapi = zt), zt.start = function (e, t) {
                    /MSIE/.test(navigator.userAgent) ? d.info('Your browser is not supported by the CMP. Please update to a more recent one.') : Promise.all(r).then(function () {
                        e && e !== Object(e) ? function (e, t) {
                            fetch(e, {
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                }
                            }).then(function (e) {
                                return e.json();
                            }).then(function (e) {
                                Ut({
                                    configUpdates: e.config,
                                    preview: t
                                });
                            }).catch(function (e) {
                                d.error('Failed to load config: ', e), Ut({ preview: t });
                            });
                        }(e, t) : Ut({
                            configUpdates: e,
                            preview: t
                        });
                    }).catch(function (e) {
                        console.error('Failed fetching polyfills', e);
                    });
                };
            }
        ]);
    }())
}