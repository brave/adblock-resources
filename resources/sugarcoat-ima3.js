{
    const $___mock_e2197425770dc62e = {};
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
    })($___mock_e2197425770dc62e);
    (function () {
        (function () {
            var l, aa = function (a) {
                    var b = 0;
                    return function () {
                        return b < a.length ? {
                            done: !1,
                            value: a[b++]
                        } : { done: !0 };
                    };
                }, ba = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
                    if (a == Array.prototype || a == Object.prototype)
                        return a;
                    a[b] = c.value;
                    return a;
                }, ca = function (a) {
                    a = [
                        'object' == typeof globalThis && globalThis,
                        a,
                        'object' == typeof window && window,
                        'object' == typeof self && self,
                        'object' == typeof global && global
                    ];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        if (c && c.Math == Math)
                            return c;
                    }
                    throw Error('Cannot find global object');
                }, da = ca(this), p = function (a, b) {
                    if (b)
                        a: {
                            var c = da;
                            a = a.split('.');
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c))
                                    break a;
                                c = c[e];
                            }
                            a = a[a.length - 1];
                            d = c[a];
                            b = b(d);
                            b != d && null != b && ba(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            });
                        }
                };
            p('Symbol', function (a) {
                if (a)
                    return a;
                var b = function (f, g) {
                    this.g = f;
                    ba(this, 'description', {
                        configurable: !0,
                        writable: !0,
                        value: g
                    });
                };
                b.prototype.toString = function () {
                    return this.g;
                };
                var c = 'jscomp_symbol_' + (1000000000 * Math.random() >>> 0) + '_', d = 0, e = function (f) {
                        if (this instanceof e)
                            throw new TypeError('Symbol is not a constructor');
                        return new b(c + (f || '') + '_' + d++, f);
                    };
                return e;
            });
            p('Symbol.iterator', function (a) {
                if (a)
                    return a;
                a = Symbol('Symbol.iterator');
                for (var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '), c = 0; c < b.length; c++) {
                    var d = da[b[c]];
                    'function' === typeof d && 'function' != typeof d.prototype[a] && ba(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return ea(aa(this));
                        }
                    });
                }
                return a;
            });
            var ea = function (a) {
                    a = { next: a };
                    a[Symbol.iterator] = function () {
                        return this;
                    };
                    return a;
                }, q = function (a) {
                    var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
                    return b ? b.call(a) : { next: aa(a) };
                }, fa = function (a) {
                    if (!(a instanceof Array)) {
                        a = q(a);
                        for (var b, c = []; !(b = a.next()).done;)
                            c.push(b.value);
                        a = c;
                    }
                    return a;
                }, ha = 'function' == typeof Object.create ? Object.create : function (a) {
                    var b = function () {
                    };
                    b.prototype = a;
                    return new b();
                }, ia = function () {
                    function a() {
                        function c() {
                        }
                        new c();
                        Reflect.construct(c, [], function () {
                        });
                        return new c() instanceof c;
                    }
                    if ('undefined' != typeof Reflect && Reflect.construct) {
                        if (a())
                            return Reflect.construct;
                        var b = Reflect.construct;
                        return function (c, d, e) {
                            c = b(c, d);
                            e && Reflect.setPrototypeOf(c, e.prototype);
                            return c;
                        };
                    }
                    return function (c, d, e) {
                        void 0 === e && (e = c);
                        e = ha(e.prototype || Object.prototype);
                        return Function.prototype.apply.call(c, e, d) || e;
                    };
                }(), ka;
            if ('function' == typeof Object.setPrototypeOf)
                ka = Object.setPrototypeOf;
            else {
                var la;
                a: {
                    var ma = { a: !0 }, na = {};
                    try {
                        na.__proto__ = ma;
                        la = na.a;
                        break a;
                    } catch (a) {
                    }
                    la = !1;
                }
                ka = la ? function (a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + ' is not extensible');
                    return a;
                } : null;
            }
            var oa = ka, t = function (a, b) {
                    a.prototype = ha(b.prototype);
                    a.prototype.constructor = a;
                    if (oa)
                        oa(a, b);
                    else
                        for (var c in b)
                            if ('prototype' != c)
                                if (Object.defineProperties) {
                                    var d = Object.getOwnPropertyDescriptor(b, c);
                                    d && Object.defineProperty(a, c, d);
                                } else
                                    a[c] = b[c];
                    a.ya = b.prototype;
                }, pa = function () {
                    this.B = !1;
                    this.l = null;
                    this.A = void 0;
                    this.g = 1;
                    this.I = this.h = 0;
                    this.o = null;
                }, qa = function (a) {
                    if (a.B)
                        throw new TypeError('Generator is already running');
                    a.B = !0;
                };
            pa.prototype.C = function (a) {
                this.A = a;
            };
            var ra = function (a, b) {
                a.o = {
                    wd: b,
                    Te: !0
                };
                a.g = a.h || a.I;
            };
            pa.prototype.return = function (a) {
                this.o = { return: a };
                this.g = this.I;
            };
            var sa = function (a, b, c) {
                    a.g = c;
                    return { value: b };
                }, ta = function (a) {
                    a.h = 0;
                    var b = a.o.wd;
                    a.o = null;
                    return b;
                }, ua = function (a) {
                    this.g = new pa();
                    this.h = a;
                }, xa = function (a, b) {
                    qa(a.g);
                    var c = a.g.l;
                    if (c)
                        return va(a, 'return' in c ? c['return'] : function (d) {
                            return {
                                value: d,
                                done: !0
                            };
                        }, b, a.g.return);
                    a.g.return(b);
                    return wa(a);
                }, va = function (a, b, c, d) {
                    try {
                        var e = b.call(a.g.l, c);
                        if (!(e instanceof Object))
                            throw new TypeError('Iterator result ' + e + ' is not an object');
                        if (!e.done)
                            return a.g.B = !1, e;
                        var f = e.value;
                    } catch (g) {
                        return a.g.l = null, ra(a.g, g), wa(a);
                    }
                    a.g.l = null;
                    d.call(a.g, f);
                    return wa(a);
                }, wa = function (a) {
                    for (; a.g.g;)
                        try {
                            var b = a.h(a.g);
                            if (b)
                                return a.g.B = !1, {
                                    value: b.value,
                                    done: !1
                                };
                        } catch (c) {
                            a.g.A = void 0, ra(a.g, c);
                        }
                    a.g.B = !1;
                    if (a.g.o) {
                        b = a.g.o;
                        a.g.o = null;
                        if (b.Te)
                            throw b.wd;
                        return {
                            value: b.return,
                            done: !0
                        };
                    }
                    return {
                        value: void 0,
                        done: !0
                    };
                }, ya = function (a) {
                    this.next = function (b) {
                        qa(a.g);
                        a.g.l ? b = va(a, a.g.l.next, b, a.g.C) : (a.g.C(b), b = wa(a));
                        return b;
                    };
                    this.throw = function (b) {
                        qa(a.g);
                        a.g.l ? b = va(a, a.g.l['throw'], b, a.g.C) : (ra(a.g, b), b = wa(a));
                        return b;
                    };
                    this.return = function (b) {
                        return xa(a, b);
                    };
                    this[Symbol.iterator] = function () {
                        return this;
                    };
                }, za = function (a, b) {
                    b = new ya(new ua(b));
                    oa && a.prototype && oa(b, a.prototype);
                    return b;
                }, Aa = function (a) {
                    function b(d) {
                        return a.next(d);
                    }
                    function c(d) {
                        return a.throw(d);
                    }
                    return new Promise(function (d, e) {
                        function f(g) {
                            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
                        }
                        f(a.next());
                    });
                }, Ba = function (a) {
                    return Aa(new ya(new ua(a)));
                };
            p('Reflect', function (a) {
                return a ? a : {};
            });
            p('Reflect.construct', function () {
                return ia;
            });
            p('Reflect.setPrototypeOf', function (a) {
                return a ? a : oa ? function (b, c) {
                    try {
                        return oa(b, c), !0;
                    } catch (d) {
                        return !1;
                    }
                } : null;
            });
            p('Promise', function (a) {
                function b() {
                    this.g = null;
                }
                function c(g) {
                    return g instanceof e ? g : new e(function (h) {
                        h(g);
                    });
                }
                if (a)
                    return a;
                b.prototype.h = function (g) {
                    if (null == this.g) {
                        this.g = [];
                        var h = this;
                        this.l(function () {
                            h.B();
                        });
                    }
                    this.g.push(g);
                };
                var d = da.setTimeout;
                b.prototype.l = function (g) {
                    d(g, 0);
                };
                b.prototype.B = function () {
                    for (; this.g && this.g.length;) {
                        var g = this.g;
                        this.g = [];
                        for (var h = 0; h < g.length; ++h) {
                            var k = g[h];
                            g[h] = null;
                            try {
                                k();
                            } catch (n) {
                                this.o(n);
                            }
                        }
                    }
                    this.g = null;
                };
                b.prototype.o = function (g) {
                    this.l(function () {
                        throw g;
                    });
                };
                var e = function (g) {
                    this.g = 0;
                    this.l = void 0;
                    this.h = [];
                    this.C = !1;
                    var h = this.o();
                    try {
                        g(h.resolve, h.reject);
                    } catch (k) {
                        h.reject(k);
                    }
                };
                e.prototype.o = function () {
                    function g(n) {
                        return function (m) {
                            k || (k = !0, n.call(h, m));
                        };
                    }
                    var h = this, k = !1;
                    return {
                        resolve: g(this.H),
                        reject: g(this.B)
                    };
                };
                e.prototype.H = function (g) {
                    if (g === this)
                        this.B(new TypeError('A Promise cannot resolve to itself'));
                    else if (g instanceof e)
                        this.L(g);
                    else {
                        a:
                            switch (typeof g) {
                            case 'object':
                                var h = null != g;
                                break a;
                            case 'function':
                                h = !0;
                                break a;
                            default:
                                h = !1;
                            }
                        h ? this.F(g) : this.A(g);
                    }
                };
                e.prototype.F = function (g) {
                    var h = void 0;
                    try {
                        h = g.then;
                    } catch (k) {
                        this.B(k);
                        return;
                    }
                    'function' == typeof h ? this.M(h, g) : this.A(g);
                };
                e.prototype.B = function (g) {
                    this.I(2, g);
                };
                e.prototype.A = function (g) {
                    this.I(1, g);
                };
                e.prototype.I = function (g, h) {
                    if (0 != this.g)
                        throw Error('Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.g);
                    this.g = g;
                    this.l = h;
                    2 === this.g && this.K();
                    this.J();
                };
                e.prototype.K = function () {
                    var g = this;
                    d(function () {
                        if (g.D()) {
                            var h = da.console;
                            'undefined' !== typeof h && h.error(g.l);
                        }
                    }, 1);
                };
                e.prototype.D = function () {
                    if (this.C)
                        return !1;
                    var g = da.CustomEvent, h = da.Event, k = da.dispatchEvent;
                    if ('undefined' === typeof k)
                        return !0;
                    'function' === typeof g ? g = new g('unhandledrejection', { cancelable: !0 }) : 'function' === typeof h ? g = new h('unhandledrejection', { cancelable: !0 }) : (g = da.document.createEvent('CustomEvent'), g.initCustomEvent('unhandledrejection', !1, !0, g));
                    g.promise = this;
                    g.reason = this.l;
                    return k(g);
                };
                e.prototype.J = function () {
                    if (null != this.h) {
                        for (var g = 0; g < this.h.length; ++g)
                            f.h(this.h[g]);
                        this.h = null;
                    }
                };
                var f = new b();
                e.prototype.L = function (g) {
                    var h = this.o();
                    g.Rb(h.resolve, h.reject);
                };
                e.prototype.M = function (g, h) {
                    var k = this.o();
                    try {
                        g.call(h, k.resolve, k.reject);
                    } catch (n) {
                        k.reject(n);
                    }
                };
                e.prototype.then = function (g, h) {
                    function k(r, w) {
                        return 'function' == typeof r ? function (B) {
                            try {
                                n(r(B));
                            } catch (M) {
                                m(M);
                            }
                        } : w;
                    }
                    var n, m, v = new e(function (r, w) {
                            n = r;
                            m = w;
                        });
                    this.Rb(k(g, n), k(h, m));
                    return v;
                };
                e.prototype.catch = function (g) {
                    return this.then(void 0, g);
                };
                e.prototype.Rb = function (g, h) {
                    function k() {
                        switch (n.g) {
                        case 1:
                            g(n.l);
                            break;
                        case 2:
                            h(n.l);
                            break;
                        default:
                            throw Error('Unexpected state: ' + n.g);
                        }
                    }
                    var n = this;
                    null == this.h ? f.h(k) : this.h.push(k);
                    this.C = !0;
                };
                e.resolve = c;
                e.reject = function (g) {
                    return new e(function (h, k) {
                        k(g);
                    });
                };
                e.race = function (g) {
                    return new e(function (h, k) {
                        for (var n = q(g), m = n.next(); !m.done; m = n.next())
                            c(m.value).Rb(h, k);
                    });
                };
                e.all = function (g) {
                    var h = q(g), k = h.next();
                    return k.done ? c([]) : new e(function (n, m) {
                        function v(B) {
                            return function (M) {
                                r[B] = M;
                                w--;
                                0 == w && n(r);
                            };
                        }
                        var r = [], w = 0;
                        do
                            r.push(void 0), w++, c(k.value).Rb(v(r.length - 1), m), k = h.next();
                        while (!k.done);
                    });
                };
                return e;
            });
            p('Object.setPrototypeOf', function (a) {
                return a || oa;
            });
            var Ca = function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b);
                }, Da = 'function' == typeof Object.assign ? Object.assign : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (d)
                            for (var e in d)
                                Ca(d, e) && (a[e] = d[e]);
                    }
                    return a;
                };
            p('Object.assign', function (a) {
                return a || Da;
            });
            p('WeakMap', function (a) {
                function b() {
                }
                function c(k) {
                    var n = typeof k;
                    return 'object' === n && null !== k || 'function' === n;
                }
                function d(k) {
                    if (!Ca(k, f)) {
                        var n = new b();
                        ba(k, f, { value: n });
                    }
                }
                function e(k) {
                    var n = Object[k];
                    n && (Object[k] = function (m) {
                        if (m instanceof b)
                            return m;
                        Object.isExtensible(m) && d(m);
                        return n(m);
                    });
                }
                if (function () {
                        if (!a || !Object.seal)
                            return !1;
                        try {
                            var k = Object.seal({}), n = Object.seal({}), m = new a([
                                    [
                                        k,
                                        2
                                    ],
                                    [
                                        n,
                                        3
                                    ]
                                ]);
                            if (2 != m.get(k) || 3 != m.get(n))
                                return !1;
                            m.delete(k);
                            m.set(n, 4);
                            return !m.has(k) && 4 == m.get(n);
                        } catch (v) {
                            return !1;
                        }
                    }())
                    return a;
                var f = '$jscomp_hidden_' + Math.random();
                e('freeze');
                e('preventExtensions');
                e('seal');
                var g = 0, h = function (k) {
                        this.g = (g += Math.random() + 1).toString();
                        if (k) {
                            k = q(k);
                            for (var n; !(n = k.next()).done;)
                                n = n.value, this.set(n[0], n[1]);
                        }
                    };
                h.prototype.set = function (k, n) {
                    if (!c(k))
                        throw Error('Invalid WeakMap key');
                    d(k);
                    if (!Ca(k, f))
                        throw Error('WeakMap key fail: ' + k);
                    k[f][this.g] = n;
                    return this;
                };
                h.prototype.get = function (k) {
                    return c(k) && Ca(k, f) ? k[f][this.g] : void 0;
                };
                h.prototype.has = function (k) {
                    return c(k) && Ca(k, f) && Ca(k[f], this.g);
                };
                h.prototype.delete = function (k) {
                    return c(k) && Ca(k, f) && Ca(k[f], this.g) ? delete k[f][this.g] : !1;
                };
                return h;
            });
            p('Map', function (a) {
                if (function () {
                        if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal)
                            return !1;
                        try {
                            var h = Object.seal({ x: 4 }), k = new a(q([[
                                        h,
                                        's'
                                    ]]));
                            if ('s' != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, 't') != k || 2 != k.size)
                                return !1;
                            var n = k.entries(), m = n.next();
                            if (m.done || m.value[0] != h || 's' != m.value[1])
                                return !1;
                            m = n.next();
                            return m.done || 4 != m.value[0].x || 't' != m.value[1] || !n.next().done ? !1 : !0;
                        } catch (v) {
                            return !1;
                        }
                    }())
                    return a;
                var b = new WeakMap(), c = function (h) {
                        this.h = {};
                        this.g = f();
                        this.size = 0;
                        if (h) {
                            h = q(h);
                            for (var k; !(k = h.next()).done;)
                                k = k.value, this.set(k[0], k[1]);
                        }
                    };
                c.prototype.set = function (h, k) {
                    h = 0 === h ? 0 : h;
                    var n = d(this, h);
                    n.list || (n.list = this.h[n.id] = []);
                    n.na ? n.na.value = k : (n.na = {
                        next: this.g,
                        Ja: this.g.Ja,
                        head: this.g,
                        key: h,
                        value: k
                    }, n.list.push(n.na), this.g.Ja.next = n.na, this.g.Ja = n.na, this.size++);
                    return this;
                };
                c.prototype.delete = function (h) {
                    h = d(this, h);
                    return h.na && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.na.Ja.next = h.na.next, h.na.next.Ja = h.na.Ja, h.na.head = null, this.size--, !0) : !1;
                };
                c.prototype.clear = function () {
                    this.h = {};
                    this.g = this.g.Ja = f();
                    this.size = 0;
                };
                c.prototype.has = function (h) {
                    return !!d(this, h).na;
                };
                c.prototype.get = function (h) {
                    return (h = d(this, h).na) && h.value;
                };
                c.prototype.entries = function () {
                    return e(this, function (h) {
                        return [
                            h.key,
                            h.value
                        ];
                    });
                };
                c.prototype.keys = function () {
                    return e(this, function (h) {
                        return h.key;
                    });
                };
                c.prototype.values = function () {
                    return e(this, function (h) {
                        return h.value;
                    });
                };
                c.prototype.forEach = function (h, k) {
                    for (var n = this.entries(), m; !(m = n.next()).done;)
                        m = m.value, h.call(k, m[1], m[0], this);
                };
                c.prototype[Symbol.iterator] = c.prototype.entries;
                var d = function (h, k) {
                        var n = k && typeof k;
                        'object' == n || 'function' == n ? b.has(k) ? n = b.get(k) : (n = '' + ++g, b.set(k, n)) : n = 'p_' + k;
                        var m = h.h[n];
                        if (m && Ca(h.h, n))
                            for (h = 0; h < m.length; h++) {
                                var v = m[h];
                                if (k !== k && v.key !== v.key || k === v.key)
                                    return {
                                        id: n,
                                        list: m,
                                        index: h,
                                        na: v
                                    };
                            }
                        return {
                            id: n,
                            list: m,
                            index: -1,
                            na: void 0
                        };
                    }, e = function (h, k) {
                        var n = h.g;
                        return ea(function () {
                            if (n) {
                                for (; n.head != h.g;)
                                    n = n.Ja;
                                for (; n.next != n.head;)
                                    return n = n.next, {
                                        done: !1,
                                        value: k(n)
                                    };
                                n = null;
                            }
                            return {
                                done: !0,
                                value: void 0
                            };
                        });
                    }, f = function () {
                        var h = {};
                        return h.Ja = h.next = h.head = h;
                    }, g = 0;
                return c;
            });
            var Ea = function (a, b, c) {
                if (null == a)
                    throw new TypeError('The \'this\' value for String.prototype.' + c + ' must not be null or undefined');
                if (b instanceof RegExp)
                    throw new TypeError('First argument to String.prototype.' + c + ' must not be a regular expression');
                return a + '';
            };
            p('Array.prototype.find', function (a) {
                return a ? a : function (b, c) {
                    a: {
                        var d = this;
                        d instanceof String && (d = String(d));
                        for (var e = d.length, f = 0; f < e; f++) {
                            var g = d[f];
                            if (b.call(c, g, f, d)) {
                                b = g;
                                break a;
                            }
                        }
                        b = void 0;
                    }
                    return b;
                };
            });
            p('String.prototype.repeat', function (a) {
                return a ? a : function (b) {
                    var c = Ea(this, null, 'repeat');
                    if (0 > b || 1342177279 < b)
                        throw new RangeError('Invalid count value');
                    b |= 0;
                    for (var d = ''; b;)
                        if (b & 1 && (d += c), b >>>= 1)
                            c += c;
                    return d;
                };
            });
            var Fa = function (a, b) {
                a instanceof String && (a += '');
                var c = 0, d = !1, e = {
                        next: function () {
                            if (!d && c < a.length) {
                                var f = c++;
                                return {
                                    value: b(f, a[f]),
                                    done: !1
                                };
                            }
                            d = !0;
                            return {
                                done: !0,
                                value: void 0
                            };
                        }
                    };
                e[Symbol.iterator] = function () {
                    return e;
                };
                return e;
            };
            p('Array.prototype.entries', function (a) {
                return a ? a : function () {
                    return Fa(this, function (b, c) {
                        return [
                            b,
                            c
                        ];
                    });
                };
            });
            p('Object.entries', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        Ca(b, d) && c.push([
                            d,
                            b[d]
                        ]);
                    return c;
                };
            });
            p('Array.prototype.keys', function (a) {
                return a ? a : function () {
                    return Fa(this, function (b) {
                        return b;
                    });
                };
            });
            p('Object.is', function (a) {
                return a ? a : function (b, c) {
                    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                };
            });
            p('Array.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    var d = this;
                    d instanceof String && (d = String(d));
                    var e = d.length;
                    c = c || 0;
                    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                        var f = d[c];
                        if (f === b || Object.is(f, b))
                            return !0;
                    }
                    return !1;
                };
            });
            p('String.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    return -1 !== Ea(this, b, 'includes').indexOf(b, c || 0);
                };
            });
            p('Math.trunc', function (a) {
                return a ? a : function (b) {
                    b = Number(b);
                    if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                        return b;
                    var c = Math.floor(Math.abs(b));
                    return 0 > b ? -c : c;
                };
            });
            p('Array.prototype.fill', function (a) {
                return a ? a : function (b, c, d) {
                    var e = this.length || 0;
                    0 > c && (c = Math.max(0, e + c));
                    if (null == d || d > e)
                        d = e;
                    d = Number(d);
                    0 > d && (d = Math.max(0, e + d));
                    for (c = Number(c || 0); c < d; c++)
                        this[c] = b;
                    return this;
                };
            });
            var Ga = function (a) {
                return a ? a : Array.prototype.fill;
            };
            p('Int8Array.prototype.fill', Ga);
            p('Uint8Array.prototype.fill', Ga);
            p('Uint8ClampedArray.prototype.fill', Ga);
            p('Int16Array.prototype.fill', Ga);
            p('Uint16Array.prototype.fill', Ga);
            p('Int32Array.prototype.fill', Ga);
            p('Uint32Array.prototype.fill', Ga);
            p('Float32Array.prototype.fill', Ga);
            p('Float64Array.prototype.fill', Ga);
            p('String.prototype.padStart', function (a) {
                return a ? a : function (b, c) {
                    var d = Ea(this, null, 'padStart');
                    b -= d.length;
                    c = void 0 !== c ? String(c) : ' ';
                    return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : '') + d;
                };
            });
            p('Array.prototype.values', function (a) {
                return a ? a : function () {
                    return Fa(this, function (b, c) {
                        return c;
                    });
                };
            });
            p('Math.imul', function (a) {
                return a ? a : function (b, c) {
                    b = Number(b);
                    c = Number(c);
                    var d = b & 65535, e = c & 65535;
                    return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0;
                };
            });
            var Ha = Ha || {}, u = this || self, x = function (a, b, c) {
                    a = a.split('.');
                    c = c || u;
                    a[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + a[0]);
                    for (var d; a.length && (d = a.shift());)
                        a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
                }, Ia = function (a, b) {
                    a = a.split('.');
                    b = b || u;
                    for (var c = 0; c < a.length; c++)
                        if (b = b[a[c]], null == b)
                            return null;
                    return b;
                }, Ja = function () {
                }, La = function (a) {
                    var b = typeof a;
                    b = 'object' != b ? b : a ? Array.isArray(a) ? 'array' : b : 'null';
                    return 'array' == b || 'object' == b && 'number' == typeof a.length;
                }, Ma = function (a) {
                    var b = typeof a;
                    return 'object' == b && null != a || 'function' == b;
                }, Pa = function (a) {
                    return Object.prototype.hasOwnProperty.call(a, Na) && a[Na] || (a[Na] = ++Oa);
                }, Qa = function (a) {
                    null !== a && 'removeAttribute' in a && a.removeAttribute(Na);
                    try {
                        delete a[Na];
                    } catch (b) {
                    }
                }, Na = 'closure_uid_' + (1000000000 * Math.random() >>> 0), Oa = 0, Sa = function (a, b, c) {
                    return a.call.apply(a.bind, arguments);
                }, Ta = function (a, b, c) {
                    if (!a)
                        throw Error();
                    if (2 < arguments.length) {
                        var d = Array.prototype.slice.call(arguments, 2);
                        return function () {
                            var e = Array.prototype.slice.call(arguments);
                            Array.prototype.unshift.apply(e, d);
                            return a.apply(b, e);
                        };
                    }
                    return function () {
                        return a.apply(b, arguments);
                    };
                }, Ua = function (a, b, c) {
                    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? Ua = Sa : Ua = Ta;
                    return Ua.apply(null, arguments);
                }, Va = function (a, b) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    return function () {
                        var d = c.slice();
                        d.push.apply(d, arguments);
                        return a.apply(this, d);
                    };
                }, Wa = function () {
                    return Date.now();
                }, Xa = function (a, b) {
                    function c() {
                    }
                    c.prototype = b.prototype;
                    a.ya = b.prototype;
                    a.prototype = new c();
                    a.prototype.constructor = a;
                    a.sh = function (d, e, f) {
                        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                            g[h - 2] = arguments[h];
                        return b.prototype[e].apply(d, g);
                    };
                }, Ya = function (a) {
                    return a;
                };
            var Za = function (a, b) {
                var c = void 0;
                return new (c || (c = Promise))(function (d, e) {
                    function f(k) {
                        try {
                            h(b.next(k));
                        } catch (n) {
                            e(n);
                        }
                    }
                    function g(k) {
                        try {
                            h(b['throw'](k));
                        } catch (n) {
                            e(n);
                        }
                    }
                    function h(k) {
                        k.done ? d(k.value) : new c(function (n) {
                            n(k.value);
                        }).then(f, g);
                    }
                    h((b = b.apply(a, void 0)).next());
                });
            };
            function $a(a) {
                if (Error.captureStackTrace)
                    Error.captureStackTrace(this, $a);
                else {
                    var b = Error().stack;
                    b && (this.stack = b);
                }
                a && (this.message = String(a));
            }
            Xa($a, Error);
            $a.prototype.name = 'CustomError';
            var ab;
            var bb, cb = 'undefined' !== typeof TextEncoder;
            function db(a) {
                if (cb)
                    a = (bb || (bb = new TextEncoder())).encode(a);
                else {
                    var b = void 0;
                    b = void 0 === b ? !1 : b;
                    for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                        var f = a.charCodeAt(e);
                        if (128 > f)
                            d[c++] = f;
                        else {
                            if (2048 > f)
                                d[c++] = f >> 6 | 192;
                            else {
                                if (55296 <= f && 57343 >= f) {
                                    if (56319 >= f && e < a.length) {
                                        var g = a.charCodeAt(++e);
                                        if (56320 <= g && 57343 >= g) {
                                            f = 1024 * (f - 55296) + g - 56320 + 65536;
                                            d[c++] = f >> 18 | 240;
                                            d[c++] = f >> 12 & 63 | 128;
                                            d[c++] = f >> 6 & 63 | 128;
                                            d[c++] = f & 63 | 128;
                                            continue;
                                        } else
                                            e--;
                                    }
                                    if (b)
                                        throw Error('Found an unpaired surrogate');
                                    f = 65533;
                                }
                                d[c++] = f >> 12 | 224;
                                d[c++] = f >> 6 & 63 | 128;
                            }
                            d[c++] = f & 63 | 128;
                        }
                    }
                    a = d.subarray(0, c);
                }
                return a;
            }
            ;
            var eb = function (a) {
                return Array.prototype.map.call(a, function (b) {
                    b = b.toString(16);
                    return 1 < b.length ? b : '0' + b;
                }).join('');
            };
            var fb = function (a) {
                    return function () {
                        return a;
                    };
                }, gb = function (a) {
                    var b = !1, c;
                    return function () {
                        b || (c = a(), b = !0);
                        return c;
                    };
                }, ib = function (a) {
                    var b = a;
                    return function () {
                        if (b) {
                            var c = b;
                            b = null;
                            c();
                        }
                    };
                }, jb = function (a) {
                    var b = 0, c = !1, d = [], e = function () {
                            b = 0;
                            c && (c = !1, f());
                        }, f = function () {
                            b = u.setTimeout(e, 1000);
                            var g = d;
                            d = [];
                            a.apply(void 0, g);
                        };
                    return function (g) {
                        d = arguments;
                        b ? c = !0 : f();
                    };
                };
            var kb = function (a, b) {
                    if ('string' === typeof a)
                        return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
                    for (var c = 0; c < a.length; c++)
                        if (c in a && a[c] === b)
                            return c;
                    return -1;
                }, y = function (a, b) {
                    for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
                        e in d && b.call(void 0, d[e], e, a);
                };
            function lb(a, b) {
                for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; --d)
                    d in c && b.call(void 0, c[d], d, a);
            }
            var nb = function (a, b) {
                    for (var c = a.length, d = [], e = 0, f = 'string' === typeof a ? a.split('') : a, g = 0; g < c; g++)
                        if (g in f) {
                            var h = f[g];
                            b.call(void 0, h, g, a) && (d[e++] = h);
                        }
                    return d;
                }, ob = function (a, b) {
                    for (var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, f = 0; f < c; f++)
                        f in e && (d[f] = b.call(void 0, e[f], f, a));
                    return d;
                }, pb = function (a, b, c) {
                    var d = c;
                    y(a, function (e, f) {
                        d = b.call(void 0, d, e, f, a);
                    });
                    return d;
                }, qb = function (a, b) {
                    for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
                        if (e in d && b.call(void 0, d[e], e, a))
                            return !0;
                    return !1;
                };
            function rb(a, b) {
                b = sb(a, b, void 0);
                return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
            }
            function sb(a, b, c) {
                for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0; f < d; f++)
                    if (f in e && b.call(c, e[f], f, a))
                        return f;
                return -1;
            }
            function tb(a, b) {
                for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; d--)
                    if (d in c && b.call(void 0, c[d], d, a))
                        return d;
                return -1;
            }
            function ub(a, b) {
                return 0 <= kb(a, b);
            }
            function vb(a, b) {
                b = kb(a, b);
                var c;
                (c = 0 <= b) && wb(a, b);
                return c;
            }
            function wb(a, b) {
                return 1 == Array.prototype.splice.call(a, b, 1).length;
            }
            function xb(a, b) {
                var c = 0;
                lb(a, function (d, e) {
                    b.call(void 0, d, e, a) && wb(a, e) && c++;
                });
            }
            function yb(a) {
                return Array.prototype.concat.apply([], arguments);
            }
            function zb(a) {
                var b = a.length;
                if (0 < b) {
                    for (var c = Array(b), d = 0; d < b; d++)
                        c[d] = a[d];
                    return c;
                }
                return [];
            }
            function Ab(a) {
                for (var b = 0, c = 0, d = {}; c < a.length;) {
                    var e = a[c++], f = Ma(e) ? 'o' + Pa(e) : (typeof e).charAt(0) + e;
                    Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e);
                }
                a.length = b;
            }
            function Bb(a, b) {
                a.sort(b || Cb);
            }
            function Cb(a, b) {
                return a > b ? 1 : a < b ? -1 : 0;
            }
            function Db(a) {
                for (var b = [], c = 0; c < a; c++)
                    b[c] = '';
                return b;
            }
            ;
            function Eb(a, b, c) {
                for (var d in a)
                    b.call(c, a[d], d, a);
            }
            function Fb(a, b) {
                var c = {}, d;
                for (d in a)
                    b.call(void 0, a[d], d, a) && (c[d] = a[d]);
                return c;
            }
            function Gb(a) {
                var b = Hb, c;
                for (c in b)
                    if (a.call(void 0, b[c], c, b))
                        return !0;
                return !1;
            }
            function Ib(a) {
                var b = Jb, c;
                for (c in b)
                    if (!a.call(void 0, b[c], c, b))
                        return !1;
                return !0;
            }
            function Kb(a) {
                var b = [], c = 0, d;
                for (d in a)
                    b[c++] = a[d];
                return b;
            }
            function Lb(a) {
                var b = [], c = 0, d;
                for (d in a)
                    b[c++] = d;
                return b;
            }
            function Mb(a, b) {
                var c = La(b), d = c ? b : arguments;
                for (c = c ? 0 : 1; c < d.length; c++) {
                    if (null == a)
                        return;
                    a = a[d[c]];
                }
                return a;
            }
            function Nb(a, b) {
                return null !== a && b in a;
            }
            function Ob(a, b) {
                for (var c in a)
                    if (a[c] == b)
                        return !0;
                return !1;
            }
            function Pb(a) {
                var b = Qb, c;
                for (c in b)
                    if (a.call(void 0, b[c], c, b))
                        return c;
            }
            function Rb(a) {
                for (var b in a)
                    return !1;
                return !0;
            }
            function Sb(a) {
                for (var b in a)
                    delete a[b];
            }
            function Tb(a, b, c) {
                return null !== a && b in a ? a[b] : c;
            }
            var Ub = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
            function Vb(a, b) {
                for (var c, d, e = 1; e < arguments.length; e++) {
                    d = arguments[e];
                    for (c in d)
                        a[c] = d[c];
                    for (var f = 0; f < Ub.length; f++)
                        c = Ub[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
                }
            }
            ;
            var Wb, Xb = function () {
                    if (void 0 === Wb) {
                        var a = null, b = u.trustedTypes;
                        if (b && b.createPolicy) {
                            try {
                                a = b.createPolicy('goog#html', {
                                    createHTML: Ya,
                                    createScript: Ya,
                                    createScriptURL: Ya
                                });
                            } catch (c) {
                                u.console && u.console.error(c.message);
                            }
                            Wb = a;
                        } else
                            Wb = a;
                    }
                    return Wb;
                };
            var $b = function (a, b) {
                this.g = a === Yb && b || '';
                this.h = Zb;
            };
            $b.prototype.Qa = !0;
            $b.prototype.Fa = function () {
                return this.g;
            };
            var ac = function (a) {
                    return a instanceof $b && a.constructor === $b && a.h === Zb ? a.g : 'type_error:Const';
                }, bc = function (a) {
                    return new $b(Yb, a);
                }, Zb = {}, Yb = {};
            var dc = function (a, b) {
                this.g = b === cc ? a : '';
            };
            l = dc.prototype;
            l.Qa = !0;
            l.Fa = function () {
                return this.g.toString();
            };
            l.Dc = !0;
            l.zc = function () {
                return 1;
            };
            l.toString = function () {
                return this.g + '';
            };
            var ec = function (a) {
                    return a instanceof dc && a.constructor === dc ? a.g : 'type_error:TrustedResourceUrl';
                }, cc = {}, fc = function (a) {
                    var b = Xb();
                    a = b ? b.createScriptURL(a) : a;
                    return new dc(a, cc);
                };
            var gc = function (a, b) {
                    var c = a.length - b.length;
                    return 0 <= c && a.indexOf(b, c) == c;
                }, hc = function (a) {
                    return /^[\s\xa0]*$/.test(a);
                }, ic = String.prototype.trim ? function (a) {
                    return a.trim();
                } : function (a) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
                }, qc = function (a, b) {
                    if (b)
                        a = a.replace(jc, '&amp;').replace(kc, '&lt;').replace(lc, '&gt;').replace(mc, '&quot;').replace(nc, '&#39;').replace(oc, '&#0;');
                    else {
                        if (!pc.test(a))
                            return a;
                        -1 != a.indexOf('&') && (a = a.replace(jc, '&amp;'));
                        -1 != a.indexOf('<') && (a = a.replace(kc, '&lt;'));
                        -1 != a.indexOf('>') && (a = a.replace(lc, '&gt;'));
                        -1 != a.indexOf('"') && (a = a.replace(mc, '&quot;'));
                        -1 != a.indexOf('\'') && (a = a.replace(nc, '&#39;'));
                        -1 != a.indexOf('\0') && (a = a.replace(oc, '&#0;'));
                    }
                    return a;
                }, jc = /&/g, kc = /</g, lc = />/g, mc = /"/g, nc = /'/g, oc = /\x00/g, pc = /[\x00&<>"']/, rc = function (a, b) {
                    return -1 != a.toLowerCase().indexOf(b.toLowerCase());
                }, tc = function (a, b) {
                    var c = 0;
                    a = ic(String(a)).split('.');
                    b = ic(String(b)).split('.');
                    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                        var f = a[e] || '', g = b[e] || '';
                        do {
                            f = /(\d*)(\D*)(.*)/.exec(f) || [
                                '',
                                '',
                                '',
                                ''
                            ];
                            g = /(\d*)(\D*)(.*)/.exec(g) || [
                                '',
                                '',
                                '',
                                ''
                            ];
                            if (0 == f[0].length && 0 == g[0].length)
                                break;
                            c = sc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || sc(0 == f[2].length, 0 == g[2].length) || sc(f[2], g[2]);
                            f = f[3];
                            g = g[3];
                        } while (0 == c);
                    }
                    return c;
                }, sc = function (a, b) {
                    return a < b ? -1 : a > b ? 1 : 0;
                };
            var vc = function (a, b) {
                this.g = b === uc ? a : '';
            };
            l = vc.prototype;
            l.Qa = !0;
            l.Fa = function () {
                return this.g.toString();
            };
            l.Dc = !0;
            l.zc = function () {
                return 1;
            };
            l.toString = function () {
                return this.g.toString();
            };
            var wc = function (a) {
                    return a instanceof vc && a.constructor === vc ? a.g : 'type_error:SafeUrl';
                }, xc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i, yc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, zc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Ac = function (a) {
                    if (a instanceof vc)
                        return a;
                    a = 'object' == typeof a && a.Qa ? a.Fa() : String(a);
                    zc.test(a) || (a = 'about:invalid#zClosurez');
                    return new vc(a, uc);
                }, uc = {}, Bc = new vc('about:invalid#zClosurez', uc);
            var Cc = {}, Dc = function (a, b) {
                    this.g = b === Cc ? a : '';
                    this.Qa = !0;
                };
            Dc.prototype.Fa = function () {
                return this.g;
            };
            Dc.prototype.toString = function () {
                return this.g.toString();
            };
            var Ec = new Dc('', Cc);
            var Fc;
            a: {
                var Gc = u.navigator;
                if (Gc) {
                    var Hc = Gc.userAgent;
                    if (Hc) {
                        Fc = Hc;
                        break a;
                    }
                }
                Fc = '';
            }
            var z = function (a) {
                return -1 != Fc.indexOf(a);
            };
            var Ic = function () {
                    return z('Trident') || z('MSIE');
                }, Jc = function () {
                    return z('Firefox') || z('FxiOS');
                }, Lc = function () {
                    return z('Safari') && !(Kc() || z('Coast') || z('Opera') || z('Edge') || z('Edg/') || z('OPR') || Jc() || z('Silk') || z('Android'));
                }, Kc = function () {
                    return (z('Chrome') || z('CriOS')) && !z('Edge');
                };
            var Mc = {}, Nc = function (a, b, c) {
                    this.g = c === Mc ? a : '';
                    this.h = b;
                    this.Qa = this.Dc = !0;
                };
            Nc.prototype.zc = function () {
                return this.h;
            };
            Nc.prototype.Fa = function () {
                return this.g.toString();
            };
            Nc.prototype.toString = function () {
                return this.g.toString();
            };
            var Oc = function (a) {
                    return a instanceof Nc && a.constructor === Nc ? a.g : 'type_error:SafeHtml';
                }, Pc = function (a, b) {
                    var c = Xb();
                    a = c ? c.createHTML(a) : a;
                    return new Nc(a, b, Mc);
                }, Qc = new Nc(u.trustedTypes && u.trustedTypes.emptyHTML || '', 0, Mc);
            var Rc = gb(function () {
                    var a = document.createElement('div'), b = document.createElement('div');
                    b.appendChild(document.createElement('div'));
                    a.appendChild(b);
                    b = a.firstChild.firstChild;
                    a.innerHTML = Oc(Qc);
                    return !b.parentElement;
                }), Sc = function (a, b) {
                    if (Rc())
                        for (; a.lastChild;)
                            a.removeChild(a.lastChild);
                    a.innerHTML = Oc(b);
                }, Tc = function (a, b) {
                    a.write(Oc(b));
                }, Uc = /^[\w+/_-]+[=]{0,2}$/, Wc = function (a, b) {
                    b = (b || u).document;
                    return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute('nonce')) && Uc.test(a) ? a : '' : '';
                };
            var Xc = function (a) {
                    return decodeURIComponent(a.replace(/\+/g, ' '));
                }, Yc = function (a) {
                    return a = qc(a, void 0);
                }, Zc = function (a, b) {
                    a.length > b && (a = a.substring(0, b - 3) + '...');
                    return a;
                }, ad = String.prototype.repeat ? function (a, b) {
                    return a.repeat(b);
                } : function (a, b) {
                    return Array(b + 1).join(a);
                }, bd = function (a) {
                    return null == a ? '' : String(a);
                }, cd = 2147483648 * Math.random() | 0, dd = function (a) {
                    return String(a).replace(/\-([a-z])/g, function (b, c) {
                        return c.toUpperCase();
                    });
                }, ed = function () {
                    return 'googleAvInapp'.replace(/([A-Z])/g, '-$1').toLowerCase();
                }, fd = function (a) {
                    return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                        return c + d.toUpperCase();
                    });
                }, gd = function (a) {
                    isFinite(a) && (a = String(a));
                    return 'string' === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
                };
            var hd = 'function' === typeof Uint8Array.prototype.slice, id = 0, jd = 0;
            function kd(a) {
                var b = 0 > a;
                a = Math.abs(a);
                var c = a >>> 0;
                a = Math.floor((a - c) / 4294967296);
                a >>>= 0;
                b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
                id = c;
                jd = a;
            }
            ;
            var ld = function () {
                this.g = new Uint8Array(64);
                this.h = 0;
            };
            ld.prototype.push = function (a) {
                if (!(this.h + 1 < this.g.length)) {
                    var b = this.g;
                    this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
                    this.g.set(b);
                }
                this.g[this.h++] = a;
            };
            ld.prototype.length = function () {
                return this.h;
            };
            ld.prototype.end = function () {
                var a = this.g, b = this.h;
                this.h = 0;
                return hd ? a.slice(0, b) : new Uint8Array(a.subarray(0, b));
            };
            var md = function (a) {
                    for (var b = id, c = jd; 0 < c || 127 < b;)
                        a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
                    a.push(b);
                }, nd = function (a, b) {
                    for (; 127 < b;)
                        a.push(b & 127 | 128), b >>>= 7;
                    a.push(b);
                }, od = function (a, b) {
                    a.push(b >>> 0 & 255);
                    a.push(b >>> 8 & 255);
                    a.push(b >>> 16 & 255);
                    a.push(b >>> 24 & 255);
                };
            var pd = function () {
                    return z('iPhone') && !z('iPod') && !z('iPad');
                }, qd = function () {
                    return pd() || z('iPad') || z('iPod');
                };
            var rd = function (a) {
                rd[' '](a);
                return a;
            };
            rd[' '] = Ja;
            var sd = function (a, b) {
                    try {
                        return rd(a[b]), !0;
                    } catch (c) {
                    }
                    return !1;
                }, ud = function (a, b) {
                    var c = td;
                    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
                };
            var vd = z('Opera'), wd = Ic(), xd = z('Edge'), yd = z('Gecko') && !(rc(Fc, 'WebKit') && !z('Edge')) && !(z('Trident') || z('MSIE')) && !z('Edge'), zd = rc(Fc, 'WebKit') && !z('Edge'), Bd = z('Macintosh'), Cd = z('Android'), Dd = pd(), Ed = z('iPad'), Fd = z('iPod'), Gd = qd(), Hd = function () {
                    var a = u.document;
                    return a ? a.documentMode : void 0;
                }, Id;
            a: {
                var Jd = '', Kd = function () {
                        var a = Fc;
                        if (yd)
                            return /rv:([^\);]+)(\)|;)/.exec(a);
                        if (xd)
                            return /Edge\/([\d\.]+)/.exec(a);
                        if (wd)
                            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (zd)
                            return /WebKit\/(\S+)/.exec(a);
                        if (vd)
                            return /(?:Version)[ \/]?(\S+)/.exec(a);
                    }();
                Kd && (Jd = Kd ? Kd[1] : '');
                if (wd) {
                    var Ld = Hd();
                    if (null != Ld && Ld > parseFloat(Jd)) {
                        Id = String(Ld);
                        break a;
                    }
                }
                Id = Jd;
            }
            var Md = Id, td = {}, Nd = function (a) {
                    return ud(a, function () {
                        return 0 <= tc(Md, a);
                    });
                }, Od;
            if (u.document && wd) {
                var Pd = Hd();
                Od = Pd ? Pd : parseInt(Md, 10) || void 0;
            } else
                Od = void 0;
            var Qd = Od;
            var Rd = Jc(), Sd = pd() || z('iPod'), Td = z('iPad'), Ud = z('Android') && !(Kc() || Jc() || z('Opera') || z('Silk')), Vd = Kc(), Wd = Lc() && !qd();
            var Xd = {}, Yd = null, $d = function (a, b) {
                    void 0 === b && (b = 0);
                    Zd();
                    b = Xd[b];
                    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || '', e = 0, f = 0; e < a.length - 2; e += 3) {
                        var g = a[e], h = a[e + 1], k = a[e + 2], n = b[g >> 2];
                        g = b[(g & 3) << 4 | h >> 4];
                        h = b[(h & 15) << 2 | k >> 6];
                        k = b[k & 63];
                        c[f++] = '' + n + g + h + k;
                    }
                    n = 0;
                    k = d;
                    switch (a.length - e) {
                    case 2:
                        n = a[e + 1], k = b[(n & 15) << 2] || d;
                    case 1:
                        a = a[e], c[f] = '' + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + k + d;
                    }
                    return c.join('');
                }, ae = function (a) {
                    for (var b = [], c = 0, d = 0; d < a.length; d++) {
                        var e = a.charCodeAt(d);
                        255 < e && (b[c++] = e & 255, e >>= 8);
                        b[c++] = e;
                    }
                    return $d(b, 3);
                }, ce = function (a) {
                    var b = [];
                    be(a, function (c) {
                        b.push(c);
                    });
                    return b;
                }, be = function (a, b) {
                    function c(k) {
                        for (; d < a.length;) {
                            var n = a.charAt(d++), m = Yd[n];
                            if (null != m)
                                return m;
                            if (!hc(n))
                                throw Error('Unknown base64 encoding at char: ' + n);
                        }
                        return k;
                    }
                    Zd();
                    for (var d = 0;;) {
                        var e = c(-1), f = c(0), g = c(64), h = c(64);
                        if (64 === h && -1 === e)
                            break;
                        b(e << 2 | f >> 4);
                        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
                    }
                }, Zd = function () {
                    if (!Yd) {
                        Yd = {};
                        for (var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), b = [
                                    '+/=',
                                    '+/',
                                    '-_=',
                                    '-_.',
                                    '-_'
                                ], c = 0; 5 > c; c++) {
                            var d = a.concat(b[c].split(''));
                            Xd[c] = d;
                            for (var e = 0; e < d.length; e++) {
                                var f = d[e];
                                void 0 === Yd[f] && (Yd[f] = e);
                            }
                        }
                    }
                };
            var de = function () {
                    this.l = [];
                    this.h = 0;
                    this.g = new ld();
                }, ee = function (a, b) {
                    nd(a.g, 8 * b + 2);
                    b = a.g.end();
                    a.l.push(b);
                    a.h += b.length;
                    return {
                        We: a.h,
                        re: a.l.length - 1
                    };
                }, fe = function (a, b) {
                    var c = a.g.end();
                    a.l.push(c);
                    a.h += c.length;
                    nd(a.g, a.h + a.g.length() - b.We);
                    c = a.g.end();
                    a.h += c.length;
                    a.l.splice(1 + b.re, 0, c);
                }, ge = function (a) {
                    var b = a.h + a.g.length();
                    if (0 === b)
                        return new Uint8Array(0);
                    b = new Uint8Array(b);
                    for (var c = a.l, d = c.length, e = 0, f = 0; f < d; f++) {
                        var g = c[f];
                        0 !== g.length && (b.set(g, e), e += g.length);
                    }
                    c = a.g;
                    d = c.h;
                    0 !== d && (b.set(c.g.subarray(0, d), e), c.h = 0);
                    a.l = [b];
                    return b;
                }, he = function (a, b, c) {
                    if (null != c && null != c)
                        if (nd(a.g, 8 * b), a = a.g, 0 <= c)
                            nd(a, c);
                        else {
                            for (b = 0; 9 > b; b++)
                                a.push(c & 127 | 128), c >>= 7;
                            a.push(1);
                        }
                }, ie = function (a, b, c) {
                    null != c && null != c && (nd(a.g, 8 * b), a = a.g, kd(c), md(a));
                }, je = function (a, b, c) {
                    null != c && null != c && (nd(a.g, 8 * b), a = a.g, kd(c), md(a));
                }, ke = function (a, b, c) {
                    nd(a.g, 8 * b + 2);
                    nd(a.g, c.length);
                    b = a.g.end();
                    a.l.push(b);
                    a.l.push(c);
                    a.h += b.length + c.length;
                }, me = function (a, b, c) {
                    var d = le;
                    null != c && (b = ee(a, b), d(c, a), fe(a, b));
                }, ne = function (a, b, c, d) {
                    if (null != c)
                        for (var e = 0; e < c.length; e++) {
                            var f = ee(a, b);
                            d(c[e], a);
                            fe(a, f);
                        }
                };
            var oe = 'function' === typeof Uint8Array;
            function pe(a, b, c) {
                return 'object' === typeof a ? oe && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : qe(a, b, c) : b(a);
            }
            function qe(a, b, c) {
                if (Array.isArray(a)) {
                    for (var d = Array(a.length), e = 0; e < a.length; e++) {
                        var f = a[e];
                        null != f && (d[e] = pe(f, b, c));
                    }
                    Array.isArray(a) && a.Ve && re(d);
                    return d;
                }
                d = {};
                for (e in a)
                    f = a[e], null != f && (d[e] = pe(f, b, c));
                return d;
            }
            function se(a) {
                return qe(a, function (b) {
                    return 'number' === typeof b ? isFinite(b) ? b : String(b) : b;
                }, function (b) {
                    return $d(b);
                });
            }
            var te = {
                    Ve: {
                        value: !0,
                        configurable: !0
                    }
                }, re = function (a) {
                    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, te);
                    return a;
                }, ue;
            var we = function (a, b, c, d) {
                    ve(this, a, b, c, d);
                }, xe;
            function ye(a, b) {
                xe = b;
                a = new a(b);
                xe = null;
                return a;
            }
            function ve(a, b, c, d, e) {
                a.g = null;
                xe && (b || (b = xe), xe = null);
                var f = a.constructor.messageId;
                b || (b = f ? [f] : []);
                a.o = f ? 0 : -1;
                a.h = b;
                a: {
                    f = a.h.length;
                    b = -1;
                    if (f && (b = f - 1, f = a.h[b], !(null === f || 'object' != typeof f || Array.isArray(f) || oe && f instanceof Uint8Array))) {
                        a.B = b - a.o;
                        a.l = f;
                        break a;
                    }
                    -1 < c ? (a.B = Math.max(c, b + 1 - a.o), a.l = null) : a.B = Number.MAX_VALUE;
                }
                a.A = {};
                if (d)
                    for (c = 0; c < d.length; c++)
                        b = d[c], b < a.B ? (b += a.o, (f = a.h[b]) ? re(f) : a.h[b] = ze) : (Ae(a), (f = a.l[b]) ? re(f) : a.l[b] = ze);
                if (e && e.length)
                    for (d = 0; d < e.length; d++)
                        Be(a, e[d]);
            }
            var ze = Object.freeze(re([])), Ae = function (a) {
                    var b = a.B + a.o;
                    a.h[b] || (a.l = a.h[b] = {});
                }, A = function (a, b) {
                    if (b < a.B) {
                        b += a.o;
                        var c = a.h[b];
                        return c !== ze ? c : a.h[b] = re([]);
                    }
                    if (a.l)
                        return c = a.l[b], c !== ze ? c : a.l[b] = re([]);
                }, Ce = function (a, b) {
                    a = A(a, b);
                    return null == a ? a : +a;
                }, De = function (a, b) {
                    a = A(a, b);
                    return null == a ? a : !!a;
                }, Ee = function (a, b, c) {
                    a = A(a, b);
                    return null == a ? c : a;
                }, Fe = function (a, b) {
                    var c = void 0 === c ? !1 : c;
                    a = De(a, b);
                    return null == a ? c : a;
                }, Ge = function (a, b) {
                    var c = void 0 === c ? 0 : c;
                    a = Ce(a, b);
                    return null == a ? c : a;
                }, He = function (a, b, c) {
                    b < a.B ? a.h[b + a.o] = c : (Ae(a), a.l[b] = c);
                    return a;
                }, Ie = function (a, b, c) {
                    return He(a, b, re(c || []));
                }, Je = function (a, b, c, d) {
                    c !== d ? He(a, b, c) : b < a.B ? a.h[b + a.o] = null : (Ae(a), delete a.l[b]);
                    return a;
                }, Be = function (a, b) {
                    for (var c, d, e = 0; e < b.length; e++) {
                        var f = b[e], g = A(a, f);
                        null != g && (c = f, d = g, He(a, f, void 0));
                    }
                    return c ? (He(a, c, d), c) : 0;
                }, Ke = function (a, b, c) {
                    a.g || (a.g = {});
                    if (!a.g[c]) {
                        var d = A(a, c);
                        d && (a.g[c] = new b(d));
                    }
                    return a.g[c];
                }, Le = function (a, b, c) {
                    a.g || (a.g = {});
                    if (!a.g[c]) {
                        for (var d = A(a, c), e = [], f = 0; f < d.length; f++)
                            e[f] = new b(d[f]);
                        a.g[c] = e;
                    }
                    return a.g[c];
                }, Ne = function (a, b, c) {
                    a.g || (a.g = {});
                    var d = c ? Me(c) : c;
                    a.g[b] = c;
                    return He(a, b, d);
                }, Me = function (a) {
                    if (a.g)
                        for (var b in a.g) {
                            var c = a.g[b];
                            if (Array.isArray(c))
                                for (var d = 0; d < c.length; d++)
                                    c[d] && Me(c[d]);
                            else
                                c && Me(c);
                        }
                    return a.h;
                };
            we.prototype.toJSON = function () {
                var a = this.h && Me(this);
                return ue ? a : se(a);
            };
            var Pe = function (a) {
                    ue = !0;
                    try {
                        return JSON.stringify(a.toJSON(), Oe);
                    } finally {
                        ue = !1;
                    }
                }, Oe = function (a, b) {
                    switch (typeof b) {
                    case 'number':
                        return isFinite(b) ? b : String(b);
                    case 'object':
                        if (oe && null != b && b instanceof Uint8Array)
                            return $d(b);
                    }
                    return b;
                };
            we.prototype.toString = function () {
                return Me(this).toString();
            };
            var Qe = document, C = window;
            function Re(a) {
                var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
                (b = (c = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, 'script[nonce]')) ? c.nonce || c.getAttribute('nonce') || '' : '') && a.setAttribute('nonce', b);
            }
            ;
            var Se = function (a, b, c) {
                    c = void 0 === c ? {} : c;
                    this.error = a;
                    this.context = b.context;
                    this.msg = b.message || '';
                    this.id = b.id || 'jserror';
                    this.meta = c;
                }, Te = function (a) {
                    return !!(a.error && a.meta && a.id);
                };
            var Ue = gb(function () {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, 'passive', {
                        get: function () {
                            a = !0;
                        }
                    });
                    u.addEventListener('test', null, b);
                } catch (c) {
                }
                return a;
            });
            function Ve(a) {
                return a ? a.passive && Ue() ? a : a.capture || !1 : !1;
            }
            var We = function (a, b, c, d) {
                    return a.addEventListener ? (a.addEventListener(b, c, Ve(d)), !0) : !1;
                }, Xe = function (a, b, c) {
                    a.removeEventListener && a.removeEventListener(b, c, Ve(void 0));
                }, Ye = function (a) {
                    var b = void 0 === b ? {} : b;
                    if ('function' === typeof window.CustomEvent)
                        var c = new CustomEvent('rum_blp', b);
                    else
                        c = document.createEvent('CustomEvent'), c.initCustomEvent('rum_blp', !!b.bubbles, !!b.cancelable, b.detail);
                    a.dispatchEvent(c);
                };
            try {
                new self.OffscreenCanvas(0, 0).getContext('2d');
            } catch (a) {
            }
            var Ze = !wd || 9 <= Number(Qd), $e = wd || vd || zd;
            var af = function (a, b) {
                this.x = void 0 !== a ? a : 0;
                this.y = void 0 !== b ? b : 0;
            };
            af.prototype.ceil = function () {
                this.x = Math.ceil(this.x);
                this.y = Math.ceil(this.y);
                return this;
            };
            af.prototype.floor = function () {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this;
            };
            af.prototype.round = function () {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this;
            };
            af.prototype.scale = function (a, b) {
                this.x *= a;
                this.y *= 'number' === typeof b ? b : a;
                return this;
            };
            var bf = function (a, b) {
                this.width = a;
                this.height = b;
            };
            l = bf.prototype;
            l.aspectRatio = function () {
                return this.width / this.height;
            };
            l.ceil = function () {
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            l.floor = function () {
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            l.round = function () {
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            l.scale = function (a, b) {
                this.width *= a;
                this.height *= 'number' === typeof b ? b : a;
                return this;
            };
            var ef = function (a) {
                    return a ? new cf(df(a)) : ab || (ab = new cf());
                }, ff = function (a) {
                    var b = document;
                    return 'string' === typeof a ? b.getElementById(a) : a;
                }, gf = function () {
                    var a = document;
                    return a.querySelectorAll && a.querySelector ? a.querySelectorAll('SCRIPT') : a.getElementsByTagName('SCRIPT');
                }, jf = function (a, b) {
                    Eb(b, function (c, d) {
                        c && 'object' == typeof c && c.Qa && (c = c.Fa());
                        'style' == d ? a.style.cssText = c : 'class' == d ? a.className = c : 'for' == d ? a.htmlFor = c : hf.hasOwnProperty(d) ? a.setAttribute(hf[d], c) : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ? a.setAttribute(d, c) : a[d] = c;
                    });
                }, hf = {
                    cellpadding: 'cellPadding',
                    cellspacing: 'cellSpacing',
                    colspan: 'colSpan',
                    frameborder: 'frameBorder',
                    height: 'height',
                    maxlength: 'maxLength',
                    nonce: 'nonce',
                    role: 'role',
                    rowspan: 'rowSpan',
                    type: 'type',
                    usemap: 'useMap',
                    valign: 'vAlign',
                    width: 'width'
                }, kf = function (a) {
                    a = a.document;
                    a = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
                    return new bf(a.clientWidth, a.clientHeight);
                }, lf = function (a) {
                    var b = a.scrollingElement ? a.scrollingElement : zd || 'CSS1Compat' != a.compatMode ? a.body || a.documentElement : a.documentElement;
                    a = a.parentWindow || a.defaultView;
                    return wd && Nd('10') && a.pageYOffset != b.scrollTop ? new af(b.scrollLeft, b.scrollTop) : new af(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
                }, D = function (a) {
                    return a ? a.parentWindow || a.defaultView : window;
                }, of = function (a, b, c) {
                    var d = arguments, e = document, f = String(d[0]), g = d[1];
                    if (!Ze && g && (g.name || g.type)) {
                        f = [
                            '<',
                            f
                        ];
                        g.name && f.push(' name="', Yc(g.name), '"');
                        if (g.type) {
                            f.push(' type="', Yc(g.type), '"');
                            var h = {};
                            Vb(h, g);
                            delete h.type;
                            g = h;
                        }
                        f.push('>');
                        f = f.join('');
                    }
                    f = mf(e, f);
                    g && ('string' === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(' ') : jf(f, g));
                    2 < d.length && nf(e, f, d, 2);
                    return f;
                }, nf = function (a, b, c, d) {
                    function e(h) {
                        h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
                    }
                    for (; d < c.length; d++) {
                        var f = c[d];
                        if (!La(f) || Ma(f) && 0 < f.nodeType)
                            e(f);
                        else {
                            a: {
                                if (f && 'number' == typeof f.length) {
                                    if (Ma(f)) {
                                        var g = 'function' == typeof f.item || 'string' == typeof f.item;
                                        break a;
                                    }
                                    if ('function' === typeof f) {
                                        g = 'function' == typeof f.item;
                                        break a;
                                    }
                                }
                                g = !1;
                            }
                            y(g ? zb(f) : f, e);
                        }
                    }
                }, mf = function (a, b) {
                    b = String(b);
                    'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
                    return a.createElement(b);
                }, pf = function (a) {
                    a && a.parentNode && a.parentNode.removeChild(a);
                }, qf = function (a) {
                    var b;
                    if ($e && !(wd && Nd('9') && !Nd('10') && u.SVGElement && a instanceof u.SVGElement) && (b = a.parentElement))
                        return b;
                    b = a.parentNode;
                    return Ma(b) && 1 == b.nodeType ? b : null;
                }, rf = function (a, b) {
                    if (!a || !b)
                        return !1;
                    if (a.contains && 1 == b.nodeType)
                        return a == b || a.contains(b);
                    if ('undefined' != typeof a.compareDocumentPosition)
                        return a == b || !!(a.compareDocumentPosition(b) & 16);
                    for (; b && a != b;)
                        b = b.parentNode;
                    return b == a;
                }, df = function (a) {
                    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
                }, sf = function (a) {
                    try {
                        return a.contentWindow || (a.contentDocument ? D(a.contentDocument) : null);
                    } catch (b) {
                    }
                    return null;
                }, tf = function (a, b) {
                    a && (a = a.parentNode);
                    for (var c = 0; a;) {
                        if (b(a))
                            return a;
                        a = a.parentNode;
                        c++;
                    }
                    return null;
                }, cf = function (a) {
                    this.g = a || u.document || document;
                };
            l = cf.prototype;
            l.getElementsByTagName = function (a, b) {
                return (b || this.g).getElementsByTagName(String(a));
            };
            l.createElement = function (a) {
                return mf(this.g, a);
            };
            l.appendChild = function (a, b) {
                a.appendChild(b);
            };
            l.append = function (a, b) {
                nf(df(a), a, arguments, 1);
            };
            l.canHaveChildren = function (a) {
                if (1 != a.nodeType)
                    return !1;
                switch (a.tagName) {
                case 'APPLET':
                case 'AREA':
                case 'BASE':
                case 'BR':
                case 'COL':
                case 'COMMAND':
                case 'EMBED':
                case 'FRAME':
                case 'HR':
                case 'IMG':
                case 'INPUT':
                case 'IFRAME':
                case 'ISINDEX':
                case 'KEYGEN':
                case 'LINK':
                case 'NOFRAMES':
                case 'NOSCRIPT':
                case 'META':
                case 'OBJECT':
                case 'PARAM':
                case 'SCRIPT':
                case 'SOURCE':
                case 'STYLE':
                case 'TRACK':
                case 'WBR':
                    return !1;
                }
                return !0;
            };
            var vf = function () {
                    return !uf() && (z('iPod') || z('iPhone') || z('Android') || z('IEMobile'));
                }, uf = function () {
                    return z('iPad') || z('Android') && !z('Mobile') || z('Silk');
                };
            var wf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, xf = function (a) {
                    var b = a.match(wf);
                    a = b[1];
                    var c = b[3];
                    b = b[4];
                    var d = '';
                    a && (d += a + ':');
                    c && (d = d + '//' + c, b && (d += ':' + b));
                    return d;
                }, yf = function (a, b) {
                    if (a) {
                        a = a.split('&');
                        for (var c = 0; c < a.length; c++) {
                            var d = a[c].indexOf('='), e = null;
                            if (0 <= d) {
                                var f = a[c].substring(0, d);
                                e = a[c].substring(d + 1);
                            } else
                                f = a[c];
                            b(f, e ? Xc(e) : '');
                        }
                    }
                }, zf = /#|$/, Af = function (a, b) {
                    var c = a.search(zf);
                    a: {
                        var d = 0;
                        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                            var f = a.charCodeAt(d - 1);
                            if (38 == f || 63 == f)
                                if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f)
                                    break a;
                            d += e + 1;
                        }
                        d = -1;
                    }
                    if (0 > d)
                        return null;
                    e = a.indexOf('&', d);
                    if (0 > e || e > c)
                        e = c;
                    d += b.length + 1;
                    return Xc(a.substr(d, e - d));
                };
            var Bf = function (a) {
                    try {
                        return !!a && null != a.location.href && sd(a, 'foo');
                    } catch (b) {
                        return !1;
                    }
                }, Df = function (a) {
                    for (var b = u, c = 0; b && 40 > c++ && (!Bf(b) || !a(b));)
                        b = Cf(b);
                }, Ef = function () {
                    var a, b = a = void 0 === a ? u : a;
                    Df(function (c) {
                        b = c;
                        return !1;
                    });
                    return b;
                }, Cf = function (a) {
                    try {
                        var b = a.parent;
                        if (b && b != a)
                            return b;
                    } catch (c) {
                    }
                    return null;
                }, Ff = function () {
                    var a = window;
                    return Bf(a.top) ? a.top : null;
                }, Gf = function (a, b) {
                    if (a)
                        for (var c in a)
                            Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
                }, Hf = /https?:\/\/[^\/]+/, If = function (a) {
                    return (a = Hf.exec(a)) && a[0] || '';
                }, Jf = function () {
                    var a = u;
                    var b = void 0 === b ? !0 : b;
                    try {
                        for (var c = null; c != a; c = a, a = a.parent)
                            switch (a.location.protocol) {
                            case 'https:':
                                return !0;
                            case 'file:':
                                return b;
                            case 'http:':
                                return !1;
                            }
                    } catch (d) {
                    }
                    return !0;
                }, Lf = function () {
                    var a = Kf;
                    if (!a)
                        return '';
                    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
                    try {
                        var c = b.exec(decodeURIComponent(a));
                        if (c)
                            return c[1] && 1 < c[1].length ? c[1].substring(1) : 'true';
                    } catch (d) {
                    }
                    return '';
                }, Mf = function (a, b) {
                    try {
                        return !(!a.frames || !a.frames[b]);
                    } catch (c) {
                        return !1;
                    }
                }, Nf = function (a, b) {
                    for (var c = 0; 50 > c; ++c) {
                        if (Mf(a, b))
                            return a;
                        if (!(a = Cf(a)))
                            break;
                    }
                    return null;
                }, Of = function (a, b) {
                    b = void 0 === b ? window.document : b;
                    0 != a.length && b.head && a.forEach(function (c) {
                        if (c) {
                            var d = b;
                            d = void 0 === d ? window.document : d;
                            if (c && d.head) {
                                var e = document.createElement('meta');
                                d.head.appendChild(e);
                                e.httpEquiv = 'origin-trial';
                                e.content = c;
                            }
                        }
                    });
                };
            var E = function (a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d;
            };
            E.prototype.getWidth = function () {
                return this.right - this.left;
            };
            E.prototype.getHeight = function () {
                return this.bottom - this.top;
            };
            var Pf = function (a) {
                return new E(a.top, a.right, a.bottom, a.left);
            };
            E.prototype.expand = function (a, b, c, d) {
                Ma(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
                return this;
            };
            E.prototype.ceil = function () {
                this.top = Math.ceil(this.top);
                this.right = Math.ceil(this.right);
                this.bottom = Math.ceil(this.bottom);
                this.left = Math.ceil(this.left);
                return this;
            };
            E.prototype.floor = function () {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this;
            };
            E.prototype.round = function () {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this;
            };
            var Qf = function (a, b, c) {
                b instanceof af ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, 'number' === typeof c && (a.top += c, a.bottom += c));
                return a;
            };
            E.prototype.scale = function (a, b) {
                b = 'number' === typeof b ? b : a;
                this.left *= a;
                this.right *= a;
                this.top *= b;
                this.bottom *= b;
                return this;
            };
            var Rf = function (a, b, c, d) {
                    this.left = a;
                    this.top = b;
                    this.width = c;
                    this.height = d;
                }, Sf = function (a) {
                    return new E(a.top, a.left + a.width, a.top + a.height, a.left);
                };
            Rf.prototype.ceil = function () {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            Rf.prototype.floor = function () {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            Rf.prototype.round = function () {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            Rf.prototype.scale = function (a, b) {
                b = 'number' === typeof b ? b : a;
                this.left *= a;
                this.width *= a;
                this.top *= b;
                this.height *= b;
                return this;
            };
            var Tf = function (a) {
                a = void 0 === a ? u : a;
                var b = a.context || a.AMP_CONTEXT_DATA;
                if (!b)
                    try {
                        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
                    } catch (c) {
                    }
                try {
                    if (b && b.pageViewId && b.canonicalUrl)
                        return b;
                } catch (c) {
                }
                return null;
            };
            var Uf = function (a, b) {
                    a.google_image_requests || (a.google_image_requests = []);
                    var c = a.document.createElement('img');
                    c.src = b;
                    a.google_image_requests.push(c);
                }, Wf = function (a, b) {
                    var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
                    Gf(a, function (d, e) {
                        d && (c += '&' + e + '=' + encodeURIComponent(d));
                    });
                    Vf(c);
                }, Vf = function (a) {
                    var b = window;
                    b.fetch ? b.fetch(a, {
                        keepalive: !0,
                        credentials: 'include',
                        redirect: 'follow',
                        method: 'get',
                        mode: 'no-cors'
                    }) : Uf(b, a);
                };
            var Yf = function (a) {
                    Xf();
                    return Pc(a, null);
                }, Zf = function (a) {
                    Xf();
                    return fc(a);
                }, Xf = Ja;
            var ag = function (a, b) {
                    if ('string' === typeof b)
                        (b = $f(a, b)) && (a.style[b] = void 0);
                    else
                        for (var c in b) {
                            var d = a, e = b[c], f = $f(d, c);
                            f && (d.style[f] = e);
                        }
                }, bg = {}, $f = function (a, b) {
                    var c = bg[b];
                    if (!c) {
                        var d = dd(b);
                        c = d;
                        void 0 === a.style[d] && (d = (zd ? 'Webkit' : yd ? 'Moz' : wd ? 'ms' : vd ? 'O' : null) + fd(d), void 0 !== a.style[d] && (c = d));
                        bg[b] = c;
                    }
                    return c;
                }, cg = function (a, b) {
                    var c = a.style[dd(b)];
                    return 'undefined' !== typeof c ? c : a.style[$f(a, b)] || '';
                }, dg = function (a) {
                    try {
                        return a.getBoundingClientRect();
                    } catch (b) {
                        return {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                    }
                }, eg = function (a) {
                    var b = df(a), c = new af(0, 0);
                    var d = b ? df(b) : document;
                    d = !wd || 9 <= Number(Qd) || 'CSS1Compat' == ef(d).g.compatMode ? d.documentElement : d.body;
                    if (a == d)
                        return c;
                    a = dg(a);
                    b = lf(ef(b).g);
                    c.x = a.left + b.x;
                    c.y = a.top + b.y;
                    return c;
                }, fg = function (a, b) {
                    var c = new af(0, 0), d = D(df(a));
                    if (!sd(d, 'parent'))
                        return c;
                    do {
                        if (d == b)
                            var e = eg(a);
                        else
                            e = dg(a), e = new af(e.left, e.top);
                        c.x += e.x;
                        c.y += e.y;
                    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                    return c;
                }, gg = function () {
                    var a = '100%';
                    'number' == typeof a && (a = Math.round(a) + 'px');
                    return a;
                }, ig = function (a) {
                    var b = hg;
                    a: {
                        var c = df(a);
                        if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                            c = c.display || c.getPropertyValue('display') || '';
                            break a;
                        }
                        c = '';
                    }
                    c || (c = a.currentStyle ? a.currentStyle.display : null);
                    if ('none' != (c || a.style && a.style.display))
                        return b(a);
                    c = a.style;
                    var d = c.display, e = c.visibility, f = c.position;
                    c.visibility = 'hidden';
                    c.position = 'absolute';
                    c.display = 'inline';
                    a = b(a);
                    c.display = d;
                    c.position = f;
                    c.visibility = e;
                    return a;
                }, hg = function (a) {
                    var b = a.offsetWidth, c = a.offsetHeight, d = zd && !b && !c;
                    return (void 0 === b || d) && a.getBoundingClientRect ? (a = dg(a), new bf(a.right - a.left, a.bottom - a.top)) : new bf(b, c);
                };
            var jg = !!window.google_async_iframe_id, kg = jg && window.parent || window, lg = function () {
                    if (jg && !Bf(kg)) {
                        var a = '.' + Qe.domain;
                        try {
                            for (; 2 < a.split('.').length && !Bf(kg);)
                                Qe.domain = a = a.substr(a.indexOf('.') + 1), kg = window.parent;
                        } catch (b) {
                        }
                        Bf(kg) || (kg = window);
                    }
                    return kg;
                };
            var mg = function (a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;)
                    a = a.parent, d++, Bf(a) && (c = a, b = d);
                return {
                    la: c,
                    level: b
                };
            };
            var ng = function () {
                    this.S = {};
                }, qg = function () {
                    if (og)
                        var a = og;
                    else {
                        a = ((a = Tf()) ? Bf(a.master) ? a.master : null : null) || lg();
                        var b = a.google_persistent_state_async;
                        a = null != b && 'object' == typeof b && null != b.S && 'object' == typeof b.S ? og = b : a.google_persistent_state_async = og = new ng();
                    }
                    b = lg();
                    var c = Tf(b);
                    c ? ((c = c || Tf()) ? (b = c.pageViewId, c = c.clientId, 'string' === typeof c && (b += c.replace(/\D/g, '').substr(0, 6))) : b = null, b = +b) : (b = mg(b).la, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2, 43))), b = c);
                    c = pg[7] || 'google_ps_7';
                    a = a.S;
                    var d = a[c];
                    a = void 0 === d ? a[c] = b : d;
                    return a;
                }, og = null, rg = {}, pg = (rg[8] = 'google_prev_ad_formats_by_region', rg[9] = 'google_prev_ad_slotnames_by_region', rg);
            var sg = function () {
                var a;
                this.g = a = void 0 === a ? {} : a;
            };
            sg.prototype.reset = function () {
                this.g = {};
            };
            var tg = null;
            var ug = function () {
                    var a = u.performance;
                    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Wa();
                }, vg = function () {
                    var a = void 0 === a ? u : a;
                    return (a = a.performance) && a.now ? a.now() : null;
                }, wg = function (a) {
                    var b = u.performance;
                    return b && b.timing && b.timing[a] || 0;
                }, xg = function () {
                    var a = Math.min(wg('domLoading') || Infinity, wg('domInteractive') || Infinity);
                    return Infinity == a ? Math.max(wg('responseEnd'), wg('navigationStart')) : a;
                };
            var yg = function (a, b, c, d, e) {
                this.label = a;
                this.type = b;
                this.value = c;
                this.duration = void 0 === d ? 0 : d;
                this.uniqueId = Math.random();
                this.slotId = e;
            };
            var zg = u.performance, Ag = !!(zg && zg.mark && zg.measure && zg.clearMarks), Bg = gb(function () {
                    var a;
                    if (a = Ag) {
                        var b;
                        if (null === tg) {
                            tg = '';
                            try {
                                a = '';
                                try {
                                    a = u.top.location.hash;
                                } catch (c) {
                                    a = u.location.hash;
                                }
                                a && (tg = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : '');
                            } catch (c) {
                            }
                        }
                        b = tg;
                        a = !!b.indexOf && 0 <= b.indexOf('1337');
                    }
                    return a;
                }), Cg = function (a, b) {
                    this.events = [];
                    this.g = b || u;
                    var c = null;
                    b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                    this.l = Bg() || (null != c ? c : Math.random() < a);
                };
            Cg.prototype.C = function () {
                this.l = !1;
                this.events != this.g.google_js_reporting_queue && (Bg() && y(this.events, Dg), this.events.length = 0);
            };
            Cg.prototype.I = function (a) {
                !this.l || 2048 < this.events.length || this.events.push(a);
            };
            var Dg = function (a) {
                a && zg && Bg() && (zg.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), zg.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
            };
            Cg.prototype.start = function (a, b) {
                if (!this.l)
                    return null;
                a = new yg(a, b, vg() || ug());
                b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
                zg && Bg() && zg.mark(b);
                return a;
            };
            Cg.prototype.end = function (a) {
                if (this.l && 'number' === typeof a.value) {
                    a.duration = (vg() || ug()) - a.value;
                    var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
                    zg && Bg() && zg.mark(b);
                    this.I(a);
                }
            };
            var Eg = function () {
                this.h = 'jserror';
                this.l = !1;
                this.g = null;
                this.o = !1;
                this.A = Math.random();
                this.B = this.Ha;
            };
            l = Eg.prototype;
            l.Sc = function (a) {
                this.h = a;
            };
            l.lc = function (a) {
                this.g = a;
            };
            l.Tc = function (a) {
                this.l = a;
            };
            l.Uc = function (a) {
                this.o = a;
            };
            l.Ha = function (a, b, c, d, e) {
                e = void 0 === e ? this.h : e;
                if ((this.o ? this.A : Math.random()) > (void 0 === c ? 0.01 : c))
                    return this.l;
                Te(b) || (b = new Se(b, {
                    context: a,
                    id: e
                }));
                if (d || this.g)
                    b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
                u.google_js_errors = u.google_js_errors || [];
                u.google_js_errors.push(b);
                u.error_rep_loaded || (b = u.document, c = Zf(u.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js'), a = b.createElement('script'), a.src = ec(c), Re(a), (b = b.getElementsByTagName('script')[0]) && b.parentNode && b.parentNode.insertBefore(a, b), u.error_rep_loaded = !0);
                return this.l;
            };
            l.fb = function (a, b, c) {
                try {
                    var d = b();
                } catch (e) {
                    if (!this.B(a, e, 0.01, c, this.h))
                        throw e;
                }
                return d;
            };
            l.Pc = function (a, b, c, d) {
                var e = this;
                return function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h - 0] = arguments[h];
                    return e.fb(a, function () {
                        return b.apply(c, g);
                    }, d);
                };
            };
            var Fg = function (a) {
                    return {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''] || 0;
                }, Gg = function (a) {
                    var b;
                    a.visibilityState ? b = 'visibilitychange' : a.mozVisibilityState ? b = 'mozvisibilitychange' : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
                    return b;
                };
            var Hg = function (a) {
                a = a._google_rum_ns_ = a._google_rum_ns_ || {};
                return a.pq = a.pq || [];
            };
            var Ig = function (a, b, c) {
                    Gf(b, function (d, e) {
                        var f = c && c[e];
                        !d && 0 !== d || f || (a += '&' + encodeURIComponent(e) + '=' + encodeURIComponent(String(d)), c && (c[e] = !0));
                    });
                    return a;
                }, Qg = function (a, b, c, d, e, f, g, h) {
                    f = void 0 === f ? Infinity : f;
                    g = void 0 === g ? !1 : g;
                    Cg.call(this, a, h);
                    var k = this;
                    this.J = 0;
                    this.L = f;
                    this.$ = b;
                    this.K = c;
                    this.Y = d;
                    this.aa = e;
                    a = this.g.navigator;
                    this.V = !('csi.gstatic.com' !== this.K || !a || !a.sendBeacon);
                    this.B = {};
                    this.H = {};
                    this.g.performance && this.g.performance.now || Jg(this, 'dat', 1);
                    a && a.deviceMemory && Jg(this, 'dmc', a.deviceMemory);
                    this.g === this.g.top && Jg(this, 'top', 1);
                    this.T = !g;
                    this.M = function () {
                        k.g.setTimeout(function () {
                            return Kg(k);
                        }, 1100);
                    };
                    this.ua = [];
                    this.X = function () {
                        Lg(k, 1);
                    };
                    this.R = function () {
                        Lg(k, 2);
                    };
                    this.da = jb(function () {
                        Kg(k);
                    });
                    this.va = function () {
                        var m = k.g.document;
                        (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && k.da();
                    };
                    this.D = this.g.setTimeout(function () {
                        return Kg(k);
                    }, 5000);
                    this.A = {};
                    this.o = b.length + c.length + d.length + e.length + 3;
                    this.h = 0;
                    y(this.events, function (m) {
                        return Mg(k, m);
                    });
                    this.F = [];
                    b = Hg(this.g);
                    var n = function (m) {
                        var v = m[0];
                        m = m[1];
                        var r = v.length + m.length + 2;
                        8000 < k.o + k.h + r && Kg(k);
                        k.F.push([
                            v,
                            m
                        ]);
                        k.h += r;
                        Ng(k);
                        return 0;
                    };
                    y(b, function (m) {
                        return n(m);
                    });
                    b.length = 0;
                    b.push = n;
                    Og(this);
                    Pg(this);
                };
            t(Qg, Cg);
            var Pg = function (a) {
                    'complete' === a.g.document.readyState ? a.g.setTimeout(function () {
                        return Kg(a);
                    }, 0) : We(a.g, 'load', a.M);
                    var b = Gg(a.g.document);
                    'undefined' !== typeof b && We(a.g, b, a.va);
                    We(a.g, 'unload', a.X);
                    We(a.g, 'pagehide', a.R);
                }, Jg = function (a, b, c) {
                    c = String(c);
                    a.o = null != a.B[b] ? a.o + (c.length - a.B[b].length) : a.o + (b.length + c.length + 2);
                    a.B[b] = c;
                }, Rg = function (a) {
                    null != a.B.uet && (a.o -= 3 + a.B.uet.length + 2, delete a.B.uet);
                }, Ug = function (a, b, c, d, e) {
                    e = void 0 === e ? '' : e;
                    var f = Sg(a, b, c, d, e);
                    8000 < a.o + a.h + f && (Kg(a), f = b.length + c.length + 2);
                    Tg(a, b, c, d, e);
                    a.h += f;
                    Ng(a);
                }, Sg = function (a, b, c, d, e) {
                    return null == a.A[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? '' : e).length : c.length - a.A[b].length;
                }, Tg = function (a, b, c, d, e) {
                    a.A[b] = d && null != a.A[b] ? a.A[b] + ('' + (void 0 === e ? '' : e) + c) : c;
                }, Ng = function (a) {
                    6000 <= a.o + a.h && Kg(a);
                }, Kg = function (a) {
                    if (a.l && a.T) {
                        try {
                            if (a.h) {
                                var b = a.A;
                                a.J++;
                                var c = Vg(a, b);
                                b = !1;
                                try {
                                    b = !!(a.V && a.g.navigator && a.g.navigator.sendBeacon(c, null));
                                } catch (d) {
                                    a.V = !1;
                                }
                                b || Uf(a.g, c);
                                Og(a);
                                a.J === a.L && a.C();
                            }
                        } catch (d) {
                            new Eg().Ha(358, d);
                        }
                        a.A = {};
                        a.h = 0;
                        a.events.length = 0;
                        a.g.clearTimeout(a.D);
                        a.D = 0;
                    }
                }, Vg = function (a, b) {
                    var c = a.$ + '//' + a.K + a.Y + a.aa, d = {};
                    c = Ig(c, a.B, d);
                    c = Ig(c, b, d);
                    a.g.google_timing_params && (c = Ig(c, a.g.google_timing_params, d), a.g.google_timing_params = void 0);
                    y(a.F, function (e) {
                        var f = q(e);
                        e = f.next().value;
                        f = f.next().value;
                        var g = {};
                        c = Ig(c, (g[e] = f, g));
                    });
                    a.F.length = 0;
                    return c;
                }, Og = function (a) {
                    Jg(a, 'puid', (a.J + 1).toString(36) + '~' + Wa().toString(36));
                }, Mg = function (a, b) {
                    var c = 'met.' + b.type, d = 'number' === typeof b.value ? Math.round(b.value).toString(36) : b.value, e = Math.round(b.duration);
                    b = '' + b.label + (null != b.slotId ? '_' + b.slotId : '') + ('.' + d) + (0 < e ? '_' + e.toString(36) : '');
                    Ug(a, c, b, !0, '~');
                };
            Qg.prototype.I = function (a) {
                this.l && this.J < this.L && (Cg.prototype.I.call(this, a), Mg(this, a));
            };
            Qg.prototype.C = function () {
                Cg.prototype.C.call(this);
                this.g.clearTimeout(this.D);
                this.h = this.D = 0;
                this.A = {};
                Sb(this.H);
                Sb(this.B);
                Xe(this.g, 'load', this.M);
                Xe(this.g, 'unload', this.X);
                Xe(this.g, 'pagehide', this.R);
            };
            var Lg = function (a, b) {
                Jg(a, 'uet', b);
                y(a.ua, function (c) {
                    try {
                        c();
                    } catch (d) {
                    }
                });
                Ye(a.g);
                Kg(a);
                Rg(a);
            };
            var Wg = function (a) {
                var b = [], c = [], d = {}, e = function (f, g) {
                        var h = g + '  ';
                        try {
                            if (void 0 === f)
                                b.push('undefined');
                            else if (null === f)
                                b.push('NULL');
                            else if ('string' === typeof f)
                                b.push('"' + f.replace(/\n/g, '\n' + g) + '"');
                            else if ('function' === typeof f)
                                b.push(String(f).replace(/\n/g, '\n' + g));
                            else if (Ma(f)) {
                                f[Na] || c.push(f);
                                var k = Pa(f);
                                if (d[k])
                                    b.push('*** reference loop detected (id=' + k + ') ***');
                                else {
                                    d[k] = !0;
                                    b.push('{');
                                    for (var n in f)
                                        'function' !== typeof f[n] && (b.push('\n'), b.push(h), b.push(n + ' = '), e(f[n], h));
                                    b.push('\n' + g + '}');
                                    delete d[k];
                                }
                            } else
                                b.push(f);
                        } catch (m) {
                            b.push('*** ' + m + ' ***');
                        }
                    };
                e(a, '');
                for (a = 0; a < c.length; a++)
                    Qa(c[a]);
                return b.join('');
            };
            var F = function (a) {
                if (a.Fc && a.hasOwnProperty('Fc'))
                    return a.Fc;
                var b = new a();
                return a.Fc = b;
            };
            var Xg = function () {
                    this.g = new Qg(1, 'https:', 'csi.gstatic.com', '/csi?v=2&s=', 'ima', void 0, !0);
                    var a = qg();
                    null != a && Jg(this.g, 'c', a);
                    a = parseInt(this.g.B.c, 10) / 2;
                    null != a && Jg(this.g, 'slotId', a);
                }, G = function (a, b, c) {
                    if (null != c) {
                        a = a.g;
                        var d = b + '=' + c;
                        a.H[d] || (Ug(a, b, c, !1), 1000 > d.length && (a.H[d] = !0));
                    }
                }, Yg = function (a, b) {
                    for (var c in b)
                        b[c] = 'object' === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
                    a = a.g;
                    c = !1;
                    var d = 0, e;
                    for (e in b)
                        null != a.A[e] && (c = !0), d += Sg(a, e, b[e], !1);
                    (8000 < a.o + a.h + d || c) && Kg(a);
                    for (var f in b)
                        Tg(a, f, b[f], !1);
                    a.h += d;
                    Ng(a);
                }, I = function (a) {
                    var b = H().g, c = ug() - 0;
                    b.l && b.I(new yg(a, 4, c, 0, void 0));
                }, H = function () {
                    return F(Xg);
                };
            var Zg = function (a) {
                    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, '@').replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, ']').replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ''));
                }, $g = function (a) {
                    try {
                        return u.JSON.parse(a);
                    } catch (b) {
                    }
                    a = String(a);
                    if (Zg(a))
                        try {
                            return eval('(' + a + ')');
                        } catch (b) {
                        }
                    throw Error('Invalid JSON string: ' + a);
                }, ah = function (a) {
                    this.g = a;
                }, ch = function (a, b) {
                    var c = [];
                    bh(a, b, c);
                    return c.join('');
                }, bh = function (a, b, c) {
                    if (null == b)
                        c.push('null');
                    else {
                        if ('object' == typeof b) {
                            if (Array.isArray(b)) {
                                var d = b;
                                b = d.length;
                                c.push('[');
                                for (var e = '', f = 0; f < b; f++)
                                    c.push(e), e = d[f], bh(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ',';
                                c.push(']');
                                return;
                            }
                            if (b instanceof String || b instanceof Number || b instanceof Boolean)
                                b = b.valueOf();
                            else {
                                c.push('{');
                                f = '';
                                for (d in b)
                                    Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], 'function' != typeof e && (c.push(f), dh(d, c), c.push(':'), bh(a, a.g ? a.g.call(b, d, e) : e, c), f = ','));
                                c.push('}');
                                return;
                            }
                        }
                        switch (typeof b) {
                        case 'string':
                            dh(b, c);
                            break;
                        case 'number':
                            c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
                            break;
                        case 'boolean':
                            c.push(String(b));
                            break;
                        case 'function':
                            c.push('null');
                            break;
                        default:
                            throw Error('Unknown type: ' + typeof b);
                        }
                    }
                }, eh = {
                    '"': '\\"',
                    '\\': '\\\\',
                    '/': '\\/',
                    '\b': '\\b',
                    '\f': '\\f',
                    '\n': '\\n',
                    '\r': '\\r',
                    '\t': '\\t',
                    '\x0B': '\\u000b'
                }, fh = /\uffff/.test('\uFFFF') ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g, dh = function (a, b) {
                    b.push('"', a.replace(fh, function (c) {
                        var d = eh[c];
                        d || (d = '\\u' + (c.charCodeAt(0) | 65536).toString(16).substr(1), eh[c] = d);
                        return d;
                    }), '"');
                };
            var gh = function () {
                    this.l = null;
                    this.g = 'missing-id';
                    this.h = !1;
                }, ih = function (a) {
                    var b = null;
                    try {
                        b = document.getElementsByClassName('lima-exp-data');
                    } catch (c) {
                        return hh('missing-element', a.g), null;
                    }
                    if (1 < b.length)
                        return hh('multiple-elements', a.g), null;
                    b = b[0];
                    return b ? b.innerHTML : (hh('missing-element', a.g), null);
                }, kh = function () {
                    var a = jh, b = ih(a);
                    if (null !== b)
                        if (Zg(b)) {
                            var c = JSON.parse(b);
                            b = c.experimentIds;
                            var d = c.binaryIdentifier;
                            c = c.adEventId;
                            var e = 'string' === typeof d;
                            if ('string' == typeof c) {
                                var f = H();
                                null != c && Jg(f.g, 'qqid', c);
                            }
                            e && (a.g = d);
                            'string' !== typeof b ? hh('missing-flags', a.g) : (e || hh('missing-binary-id', a.g), a.l = b);
                        } else
                            hh('invalid-json', a.g);
                };
            gh.prototype.reset = function () {
                this.l = null;
                this.g = 'missing-id';
            };
            var mh = function (a, b, c, d, e) {
                    this.id = a;
                    this.G = b;
                    this.l = c;
                    this.kc = !1;
                    this.h = d;
                    this.g = e;
                    this.l && lh(this);
                }, nh = function (a) {
                    return a.kc || a.l;
                }, lh = function (a) {
                    if (a.h && a.g) {
                        var b = a.h;
                        b && Object.assign(a.g.g, b);
                    }
                }, oh = function () {
                    this.g = [];
                }, ph = function () {
                    this.g = new Map();
                    this.h = !1;
                    this.B = new oh();
                    this.A = new mh(0, 0, !1);
                    this.l = [this.B];
                    this.o = new sg();
                }, J = function (a) {
                    var b = qh;
                    if (b.h || b.g.has(a.id) || null == a.G && null == a.control || 0 == a.ue)
                        return b.A;
                    var c = b.B;
                    if (null != a.control)
                        for (var d = q(b.l), e = d.next(); !e.done; e = d.next()) {
                            if (e = e.value, e.g.includes(a.control)) {
                                c = e;
                                break;
                            }
                        }
                    else
                        null != a.Ba && (c = a.Ba);
                    d = 0;
                    null != a.control ? d = a.control.G : null != a.G && (d = a.G);
                    a = new mh(a.id, d, !!a.uh, a.flags, b.o);
                    c.g.push(a);
                    b.l.includes(c) || b.l.push(c);
                    b.g.set(a.id, a);
                    return a;
                }, rh = function () {
                    var a = qh;
                    return [].concat(fa(a.g.keys())).filter(function (b) {
                        return nh(this.g.get(b));
                    }, a);
                }, sh = function (a) {
                    var b = qh;
                    b.h || (a.g(b.l, b.g), b.h = !0);
                };
            ph.prototype.reset = function () {
                for (var a = q(this.g), b = a.next(); !b.done; b = a.next())
                    b = q(b.value), b.next(), b.next().value.kc = !1;
                this.h = !1;
                this.o.reset();
            };
            var qh = new ph(), uh = function () {
                    return th.g.filter(function (a) {
                        return nh(a);
                    }).map(function (a) {
                        return a.id;
                    });
                };
            var vh = function () {
            };
            vh.prototype.g = function (a) {
                a = q(a);
                for (var b = a.next(); !b.done; b = a.next()) {
                    var c = 0, d = Math.floor(1000 * Math.random());
                    b = q(b.value.g);
                    for (var e = b.next(); !e.done; e = b.next())
                        if (e = e.value, c += e.G, d < c) {
                            e.kc = !0;
                            lh(e);
                            break;
                        }
                }
            };
            var yh = function (a) {
                ve(this, a, -1, wh, xh);
            };
            t(yh, we);
            var wh = [
                    2,
                    8
                ], xh = [
                    [
                        3,
                        4,
                        5
                    ],
                    [
                        6,
                        7
                    ]
                ];
            var Ah = function (a) {
                ve(this, a, -1, zh, null);
            };
            t(Ah, we);
            var zh = [4];
            var Dh = function (a) {
                ve(this, a, -1, Bh, Ch);
            };
            t(Dh, we);
            var Bh = [5], Ch = [[
                        1,
                        2,
                        3,
                        6,
                        7
                    ]];
            var Fh = function (a) {
                ve(this, a, -1, Eh, null);
            };
            t(Fh, we);
            var Eh = [2];
            var Hh = function (a) {
                ve(this, a, -1, Gh, null);
            };
            t(Hh, we);
            var Gh = [2];
            var Jh = function (a) {
                ve(this, a, -1, Ih, null);
            };
            t(Jh, we);
            var Lh = function (a) {
                ve(this, a, -1, Kh, null);
            };
            t(Lh, we);
            var Ih = [
                    1,
                    4,
                    2,
                    3
                ], Kh = [2];
            var Mh = function (a, b) {
                    switch (b) {
                    case 1:
                        return Ee(a, 1, 0);
                    case 2:
                        return Ee(a, 2, 0);
                    case 3:
                        return Ee(a, 3, 0);
                    case 6:
                        return Ee(a, 6, 0);
                    default:
                        return null;
                    }
                }, Nh = function (a, b) {
                    if (!a)
                        return null;
                    switch (b) {
                    case 1:
                        return Fe(a, 1);
                    case 7:
                        return Ee(a, 3, '');
                    case 2:
                        return Ge(a, 2);
                    case 3:
                        return Ee(a, 3, '');
                    case 6:
                        return A(a, 4);
                    default:
                        return null;
                    }
                };
            var Oh = {}, Ph = (Oh[47] = Rd, Oh);
            function Qh() {
                var a = Rh, b = Le(new Jh(Sh), Lh, 2);
                1 == b.length && 16 == Ee(b[0], 1, 0) && Le(b[0], Hh, 2).forEach(function (c) {
                    var d = Ee(c, 1, 0), e = Ke(c, yh, 3), f = a[Ee(c, 4, 0)];
                    Le(c, Fh, 2).forEach(function (g) {
                        var h = d || Ee(g, 4, 0), k = Ee(g, 1, 0), n = e || Ke(g, yh, 3);
                        n = n ? Ee(n, 3, 0) : null;
                        n = Ph[n];
                        g = Th(Le(g, Dh, 2));
                        J({
                            id: k,
                            G: h,
                            Ba: f,
                            ue: n,
                            flags: g
                        });
                    });
                });
            }
            function Th(a) {
                if (a.length) {
                    var b = {};
                    a.forEach(function (c) {
                        var d = Be(c, Ch[0]), e = Ke(c, Ah, 4);
                        e && (c = Mh(c, d), d = Nh(e, d), b[c] = d);
                    });
                    return b;
                }
            }
            ;
            var Uh = function (a) {
                this.h = a;
            };
            Uh.prototype.g = function (a, b) {
                a = q(this.h);
                for (var c = a.next(); !c.done; c = a.next())
                    if (c = b.get(c.value))
                        c.kc = !0, lh(c);
            };
            var Vh = function (a, b) {
                this.h = a;
                this.l = b;
            };
            t(Vh, Uh);
            Vh.prototype.g = function (a, b) {
                Uh.prototype.g.call(this, a, b);
                var c = [];
                a = [];
                for (var d = q(this.h), e = d.next(); !e.done; e = d.next())
                    e = e.value, b.get(e) ? c.push(e) : a.push(e);
                b = c.map(String).join(',') || '0';
                a = a.map(String).join(',') || '0';
                G(H(), 'sei', b);
                G(H(), 'nsei', a);
                G(H(), 'bi', this.l);
            };
            var Wh = function () {
                gh.apply(this, arguments);
            };
            t(Wh, gh);
            var hh = function (a, b) {
                var c = H();
                G(c, 'eee', a);
                G(c, 'bi', b);
            };
            function Xh() {
                return Yh.split(',').map(function (a) {
                    return parseInt(a, 10);
                }).filter(function (a) {
                    return !isNaN(a);
                });
            }
            ;
            var th = new oh(), Zh = new oh(), $h = new oh(), ai = new oh();
            J({
                id: 318475490,
                G: 0
            });
            J({
                id: 324123032,
                G: 0
            });
            J({
                id: 418572103,
                G: 0
            });
            J({
                id: 420706097,
                G: 10
            });
            J({
                id: 420706098,
                G: 10
            });
            J({
                id: 44736152,
                G: 10
            });
            J({
                id: 44736153,
                G: 10
            });
            J({
                id: 44736284,
                G: 10
            });
            J({
                id: 44736285,
                G: 10
            });
            J({
                id: 21062100,
                G: 0
            });
            J({
                id: 21062101,
                G: 0
            });
            J({
                id: 420706109,
                G: 10
            });
            J({
                id: 420706110,
                G: 10
            });
            J({
                id: 21062347,
                G: 0
            });
            J({
                id: 21063070,
                G: 0
            });
            J({
                id: 21063072,
                G: 0
            });
            J({
                id: 21063100,
                G: 0
            });
            J({
                id: 420706105,
                G: 10
            });
            J({
                id: 420706106,
                G: 10
            });
            J({
                id: 21064018,
                G: 0
            });
            J({
                id: 21064020,
                G: 0
            });
            J({
                id: 21064022,
                G: 0
            });
            J({
                id: 21064024,
                G: 0
            });
            J({
                id: 21064075,
                G: 0
            });
            J({
                id: 21064201,
                G: 50
            });
            var bi = J({
                id: 210640812,
                G: 10
            });
            J({
                id: 420706142,
                G: 0
            });
            J({
                id: 21064347,
                G: 0
            });
            J({
                id: 44745813,
                G: 0
            });
            J({
                id: 44746068,
                G: 0
            });
            J({
                id: 21064565,
                G: 0
            });
            J({
                id: 21064567,
                G: 0
            });
            J({
                id: 40819804,
                G: 10
            });
            var ci = J({
                id: 40819805,
                G: 10
            });
            J({
                id: 418572006,
                G: 10
            });
            J({
                id: 44744588,
                G: 10
            });
            J({
                id: 44740339,
                G: 10
            });
            var di = J({
                id: 44740340,
                G: 10
            });
            J({
                id: 44714743,
                G: 0
            });
            J({
                id: 44719216,
                G: 0
            });
            J({
                id: 44730895,
                G: 10
            });
            J({
                id: 44730896,
                G: 10
            });
            J({
                id: 44731465,
                G: 10
            });
            J({
                id: 44731467,
                G: 10
            });
            J({
                id: 44736292,
                G: 10
            });
            J({
                id: 44736293,
                G: 10
            });
            J({
                id: 44731964,
                G: 10,
                Ba: th
            });
            J({
                id: 44731965,
                G: 10,
                Ba: th
            });
            J({
                id: 668123728,
                G: 10,
                Ba: th
            });
            J({
                id: 668123729,
                G: 10,
                Ba: th
            });
            J({
                id: 31061774,
                G: 10
            });
            var ei = J({
                id: 31061775,
                G: 10
            });
            J({
                id: 44730612,
                G: 50
            });
            J({
                id: 44746668,
                G: 10
            });
            J({
                id: 44746669,
                G: 10
            });
            J({
                id: 44712632,
                G: 10
            });
            J({
                id: 44712633,
                G: 10
            });
            J({
                id: 44715336,
                G: 10
            });
            J({
                id: 44729309,
                G: 10
            });
            J({
                id: 44721472,
                G: 0
            });
            J({
                id: 75259410,
                G: 0
            });
            J({
                id: 75259412,
                G: 0
            });
            J({
                id: 75259413,
                G: 0
            });
            J({
                id: 44725355,
                G: 50,
                Ba: $h
            });
            var fi = J({
                id: 44725356,
                G: 50,
                Ba: $h
            });
            J({
                id: 44724516,
                G: 0
            });
            J({
                id: 44726389,
                G: 10
            });
            J({
                id: 44726392,
                G: 10
            });
            J({
                id: 44726393,
                G: 10
            });
            J({
                id: 44730464,
                G: 10
            });
            J({
                id: 44730465,
                G: 10
            });
            J({
                id: 44733378,
                G: 10
            });
            J({
                id: 44727953,
                G: 0
            });
            J({
                id: 44729911,
                G: 0
            });
            J({
                id: 44730425,
                G: 0
            });
            J({
                id: 44730426,
                G: 0
            });
            J({
                id: 447304389,
                G: 0
            });
            J({
                id: 44732022,
                G: 10
            });
            J({
                id: 44732023,
                G: 10
            });
            J({
                id: 44733246,
                G: 10
            });
            J({
                id: 44736980,
                G: 0
            });
            J({
                id: 44736981,
                G: 0
            });
            J({
                id: 44736979,
                G: 0
            });
            J({
                id: 44737473,
                G: 100,
                Ba: Zh
            });
            J({
                id: 44737475,
                G: 100,
                Ba: Zh
            });
            J({
                id: 44738437,
                G: 0
            });
            var gi = J({
                id: 44738438,
                G: 0
            });
            J({
                id: 44745938,
                G: 50
            });
            J({
                id: 44745939,
                G: 50
            });
            J({
                id: 44745940,
                G: 10
            });
            J({
                id: 44745941,
                G: 10
            });
            J({
                id: 44741233,
                G: 10
            });
            J({
                id: 44741234,
                G: 10
            });
            var hi = {}, Rh = (hi[32] = th, hi[35] = ai, hi);
            Rh = void 0 === Rh ? {} : Rh;
            if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test('{{IMA_EXPERIMENT_STATE_JSPB}}'))
                try {
                    var Sh = JSON.parse('{{IMA_EXPERIMENT_STATE_JSPB}}');
                    Sh instanceof Array && Qh();
                } catch (a) {
                    G(H(), 'espe', a.message);
                }
            if ('undefined' === typeof window.v8_flag_map) {
                var jh = F(Wh);
                jh.h || (kh(), jh.h = !0);
                var Yh = jh.l, ii;
                jh.h || (kh(), jh.h = !0);
                ii = jh.g;
                if (null != Yh) {
                    var ji = new Vh(Xh(), ii);
                    sh(ji);
                }
            }
            ;
            qh.reset();
            sh(new vh());
            u.console && 'function' === typeof u.console.log && Ua(u.console.log, u.console);
            var ki = function (a) {
                for (var b = [], c = a = D(a.ownerDocument); c != a.top; c = c.parent)
                    if (c.frameElement)
                        b.push(c.frameElement);
                    else
                        break;
                return b;
            };
            var li = function () {
                if (!u.addEventListener || !Object.defineProperty)
                    return !1;
                var a = !1, b = Object.defineProperty({}, 'passive', {
                        get: function () {
                            a = !0;
                        }
                    });
                try {
                    u.addEventListener('test', Ja, b), u.removeEventListener('test', Ja, b);
                } catch (c) {
                }
                return a;
            }();
            function mi(a) {
                a && 'function' == typeof a.W && a.W();
            }
            ;
            var K = function () {
                this.J = this.J;
                this.I = this.I;
            };
            K.prototype.J = !1;
            K.prototype.Ra = function () {
                return this.J;
            };
            K.prototype.W = function () {
                this.J || (this.J = !0, this.N());
            };
            var oi = function (a, b) {
                    ni(a, Va(mi, b));
                }, ni = function (a, b) {
                    a.J ? b() : (a.I || (a.I = []), a.I.push(b));
                };
            K.prototype.N = function () {
                if (this.I)
                    for (; this.I.length;)
                        this.I.shift()();
            };
            var pi = function (a, b) {
                this.type = a;
                this.currentTarget = this.target = b;
                this.defaultPrevented = this.h = !1;
            };
            pi.prototype.stopPropagation = function () {
                this.h = !0;
            };
            pi.prototype.preventDefault = function () {
                this.defaultPrevented = !0;
            };
            var qi = function (a, b) {
                pi.call(this, a ? a.type : '');
                this.relatedTarget = this.currentTarget = this.target = null;
                this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
                this.key = '';
                this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
                this.state = null;
                this.pointerId = 0;
                this.pointerType = '';
                this.g = null;
                a && this.init(a, b);
            };
            Xa(qi, pi);
            var ri = {
                2: 'touch',
                3: 'pen',
                4: 'mouse'
            };
            qi.prototype.init = function (a, b) {
                var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
                this.target = a.target || a.srcElement;
                this.currentTarget = b;
                (b = a.relatedTarget) ? yd && (sd(b, 'nodeName') || (b = null)) : 'mouseover' == c ? b = a.fromElement : 'mouseout' == c && (b = a.toElement);
                this.relatedTarget = b;
                d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
                this.button = a.button;
                this.key = a.key || '';
                this.ctrlKey = a.ctrlKey;
                this.altKey = a.altKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.pointerId = a.pointerId || 0;
                this.pointerType = 'string' === typeof a.pointerType ? a.pointerType : ri[a.pointerType] || '';
                this.state = a.state;
                this.g = a;
                a.defaultPrevented && qi.ya.preventDefault.call(this);
            };
            qi.prototype.stopPropagation = function () {
                qi.ya.stopPropagation.call(this);
                this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0;
            };
            qi.prototype.preventDefault = function () {
                qi.ya.preventDefault.call(this);
                var a = this.g;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            };
            var si = 'closure_listenable_' + (1000000 * Math.random() | 0), ti = function (a) {
                    return !(!a || !a[si]);
                };
            var ui = 0;
            var vi = function (a, b, c, d, e) {
                    this.listener = a;
                    this.g = null;
                    this.src = b;
                    this.type = c;
                    this.capture = !!d;
                    this.Wb = e;
                    this.key = ++ui;
                    this.Ib = this.Qb = !1;
                }, wi = function (a) {
                    a.Ib = !0;
                    a.listener = null;
                    a.g = null;
                    a.src = null;
                    a.Wb = null;
                };
            var xi = function (a) {
                this.src = a;
                this.g = {};
                this.h = 0;
            };
            xi.prototype.add = function (a, b, c, d, e) {
                var f = a.toString();
                a = this.g[f];
                a || (a = this.g[f] = [], this.h++);
                var g = yi(a, b, d, e);
                -1 < g ? (b = a[g], c || (b.Qb = !1)) : (b = new vi(b, this.src, f, !!d, e), b.Qb = c, a.push(b));
                return b;
            };
            xi.prototype.remove = function (a, b, c, d) {
                a = a.toString();
                if (!(a in this.g))
                    return !1;
                var e = this.g[a];
                b = yi(e, b, c, d);
                return -1 < b ? (wi(e[b]), wb(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
            };
            var zi = function (a, b) {
                var c = b.type;
                c in a.g && vb(a.g[c], b) && (wi(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
            };
            xi.prototype.Cb = function (a, b, c, d) {
                a = this.g[a.toString()];
                var e = -1;
                a && (e = yi(a, b, c, d));
                return -1 < e ? a[e] : null;
            };
            var yi = function (a, b, c, d) {
                for (var e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (!f.Ib && f.listener == b && f.capture == !!c && f.Wb == d)
                        return e;
                }
                return -1;
            };
            var Ai = 'closure_lm_' + (1000000 * Math.random() | 0), Bi = {}, Ci = 0, Ei = function (a, b, c, d, e) {
                    if (d && d.once)
                        return Di(a, b, c, d, e);
                    if (Array.isArray(b)) {
                        for (var f = 0; f < b.length; f++)
                            Ei(a, b[f], c, d, e);
                        return null;
                    }
                    c = Fi(c);
                    return ti(a) ? a.O(b, c, Ma(d) ? !!d.capture : !!d, e) : Gi(a, b, c, !1, d, e);
                }, Gi = function (a, b, c, d, e, f) {
                    if (!b)
                        throw Error('Invalid event type');
                    var g = Ma(e) ? !!e.capture : !!e, h = Hi(a);
                    h || (a[Ai] = h = new xi(a));
                    c = h.add(b, c, d, g, f);
                    if (c.g)
                        return c;
                    d = Ii();
                    c.g = d;
                    d.src = a;
                    d.listener = c;
                    if (a.addEventListener)
                        li || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
                    else if (a.attachEvent)
                        a.attachEvent(Ji(b.toString()), d);
                    else if (a.addListener && a.removeListener)
                        a.addListener(d);
                    else
                        throw Error('addEventListener and attachEvent are unavailable.');
                    Ci++;
                    return c;
                }, Ii = function () {
                    var a = Ki, b = function (c) {
                            return a.call(b.src, b.listener, c);
                        };
                    return b;
                }, Di = function (a, b, c, d, e) {
                    if (Array.isArray(b)) {
                        for (var f = 0; f < b.length; f++)
                            Di(a, b[f], c, d, e);
                        return null;
                    }
                    c = Fi(c);
                    return ti(a) ? a.Gb(b, c, Ma(d) ? !!d.capture : !!d, e) : Gi(a, b, c, !0, d, e);
                }, Li = function (a, b, c, d, e) {
                    if (Array.isArray(b))
                        for (var f = 0; f < b.length; f++)
                            Li(a, b[f], c, d, e);
                    else
                        d = Ma(d) ? !!d.capture : !!d, c = Fi(c), ti(a) ? a.Ua(b, c, d, e) : a && (a = Hi(a)) && (b = a.Cb(b, c, d, e)) && Mi(b);
                }, Mi = function (a) {
                    if ('number' !== typeof a && a && !a.Ib) {
                        var b = a.src;
                        if (ti(b))
                            zi(b.B, a);
                        else {
                            var c = a.type, d = a.g;
                            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ji(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                            Ci--;
                            (c = Hi(b)) ? (zi(c, a), 0 == c.h && (c.src = null, b[Ai] = null)) : wi(a);
                        }
                    }
                }, Ji = function (a) {
                    return a in Bi ? Bi[a] : Bi[a] = 'on' + a;
                }, Ki = function (a, b) {
                    if (a.Ib)
                        a = !0;
                    else {
                        b = new qi(b, this);
                        var c = a.listener, d = a.Wb || a.src;
                        a.Qb && Mi(a);
                        a = c.call(d, b);
                    }
                    return a;
                }, Hi = function (a) {
                    a = a[Ai];
                    return a instanceof xi ? a : null;
                }, Ni = '__closure_events_fn_' + (1000000000 * Math.random() >>> 0), Fi = function (a) {
                    if ('function' === typeof a)
                        return a;
                    a[Ni] || (a[Ni] = function (b) {
                        return a.handleEvent(b);
                    });
                    return a[Ni];
                };
            var L = function () {
                K.call(this);
                this.B = new xi(this);
                this.Ob = this;
                this.ua = null;
            };
            Xa(L, K);
            L.prototype[si] = !0;
            l = L.prototype;
            l.addEventListener = function (a, b, c, d) {
                Ei(this, a, b, c, d);
            };
            l.removeEventListener = function (a, b, c, d) {
                Li(this, a, b, c, d);
            };
            l.dispatchEvent = function (a) {
                var b, c = this.ua;
                if (c)
                    for (b = []; c; c = c.ua)
                        b.push(c);
                c = this.Ob;
                var d = a.type || a;
                if ('string' === typeof a)
                    a = new pi(a, c);
                else if (a instanceof pi)
                    a.target = a.target || c;
                else {
                    var e = a;
                    a = new pi(d, c);
                    Vb(a, e);
                }
                e = !0;
                if (b)
                    for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                        var g = a.currentTarget = b[f];
                        e = Oi(g, d, !0, a) && e;
                    }
                a.h || (g = a.currentTarget = c, e = Oi(g, d, !0, a) && e, a.h || (e = Oi(g, d, !1, a) && e));
                if (b)
                    for (f = 0; !a.h && f < b.length; f++)
                        g = a.currentTarget = b[f], e = Oi(g, d, !1, a) && e;
                return e;
            };
            l.N = function () {
                L.ya.N.call(this);
                if (this.B) {
                    var a = this.B, b = 0, c;
                    for (c in a.g) {
                        for (var d = a.g[c], e = 0; e < d.length; e++)
                            ++b, wi(d[e]);
                        delete a.g[c];
                        a.h--;
                    }
                }
                this.ua = null;
            };
            l.O = function (a, b, c, d) {
                return this.B.add(String(a), b, !1, c, d);
            };
            l.Gb = function (a, b, c, d) {
                return this.B.add(String(a), b, !0, c, d);
            };
            l.Ua = function (a, b, c, d) {
                this.B.remove(String(a), b, c, d);
            };
            var Oi = function (a, b, c, d) {
                b = a.B.g[String(b)];
                if (!b)
                    return !0;
                b = b.concat();
                for (var e = !0, f = 0; f < b.length; ++f) {
                    var g = b[f];
                    if (g && !g.Ib && g.capture == c) {
                        var h = g.listener, k = g.Wb || g.src;
                        g.Qb && zi(a.B, g);
                        e = !1 !== h.call(k, d) && e;
                    }
                }
                return e && !d.defaultPrevented;
            };
            L.prototype.Cb = function (a, b, c, d) {
                return this.B.Cb(String(a), b, c, d);
            };
            var Pi = function (a, b) {
                this.l = a;
                this.o = b;
                this.h = 0;
                this.g = null;
            };
            Pi.prototype.get = function () {
                if (0 < this.h) {
                    this.h--;
                    var a = this.g;
                    this.g = a.next;
                    a.next = null;
                } else
                    a = this.l();
                return a;
            };
            var Qi = function (a, b) {
                a.o(b);
                100 > a.h && (a.h++, b.next = a.g, a.g = b);
            };
            var Ri, Si = function () {
                    var a = u.MessageChannel;
                    'undefined' === typeof a && 'undefined' !== typeof window && window.postMessage && window.addEventListener && !z('Presto') && (a = function () {
                        var e = mf(document, 'IFRAME');
                        e.style.display = 'none';
                        document.documentElement.appendChild(e);
                        var f = e.contentWindow;
                        e = f.document;
                        e.open();
                        e.close();
                        var g = 'callImmediate' + Math.random(), h = 'file:' == f.location.protocol ? '*' : f.location.protocol + '//' + f.location.host;
                        e = Ua(function (k) {
                            if (('*' == h || k.origin == h) && k.data == g)
                                this.port1.onmessage();
                        }, this);
                        f.addEventListener('message', e, !1);
                        this.port1 = {};
                        this.port2 = {
                            postMessage: function () {
                                f.postMessage(g, h);
                            }
                        };
                    });
                    if ('undefined' !== typeof a && !Ic()) {
                        var b = new a(), c = {}, d = c;
                        b.port1.onmessage = function () {
                            if (void 0 !== c.next) {
                                c = c.next;
                                var e = c.rd;
                                c.rd = null;
                                e();
                            }
                        };
                        return function (e) {
                            d.next = { rd: e };
                            d = d.next;
                            b.port2.postMessage(0);
                        };
                    }
                    return function (e) {
                        u.setTimeout(e, 0);
                    };
                };
            function Ti(a) {
                u.setTimeout(function () {
                    throw a;
                }, 0);
            }
            ;
            var Ui = function () {
                this.h = this.g = null;
            };
            Ui.prototype.add = function (a, b) {
                var c = Vi.get();
                c.set(a, b);
                this.h ? this.h.next = c : this.g = c;
                this.h = c;
            };
            Ui.prototype.remove = function () {
                var a = null;
                this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
                return a;
            };
            var Vi = new Pi(function () {
                    return new Wi();
                }, function (a) {
                    return a.reset();
                }), Wi = function () {
                    this.next = this.g = this.h = null;
                };
            Wi.prototype.set = function (a, b) {
                this.h = a;
                this.g = b;
                this.next = null;
            };
            Wi.prototype.reset = function () {
                this.next = this.g = this.h = null;
            };
            var aj = function (a, b) {
                    Xi || Yi();
                    Zi || (Xi(), Zi = !0);
                    $i.add(a, b);
                }, Xi, Yi = function () {
                    if (u.Promise && u.Promise.resolve) {
                        var a = u.Promise.resolve(void 0);
                        Xi = function () {
                            a.then(bj);
                        };
                    } else
                        Xi = function () {
                            var b = bj;
                            'function' !== typeof u.setImmediate || u.Window && u.Window.prototype && !z('Edge') && u.Window.prototype.setImmediate == u.setImmediate ? (Ri || (Ri = Si()), Ri(b)) : u.setImmediate(b);
                        };
                }, Zi = !1, $i = new Ui(), bj = function () {
                    for (var a; a = $i.remove();) {
                        try {
                            a.h.call(a.g);
                        } catch (b) {
                            Ti(b);
                        }
                        Qi(Vi, a);
                    }
                    Zi = !1;
                };
            var cj = function (a) {
                if (!a)
                    return !1;
                try {
                    return !!a.$goog_Thenable;
                } catch (b) {
                    return !1;
                }
            };
            var ej = function (a) {
                    this.g = 0;
                    this.C = void 0;
                    this.o = this.h = this.l = null;
                    this.B = this.A = !1;
                    if (a != Ja)
                        try {
                            var b = this;
                            a.call(void 0, function (c) {
                                dj(b, 2, c);
                            }, function (c) {
                                dj(b, 3, c);
                            });
                        } catch (c) {
                            dj(this, 3, c);
                        }
                }, fj = function () {
                    this.next = this.context = this.h = this.l = this.g = null;
                    this.o = !1;
                };
            fj.prototype.reset = function () {
                this.context = this.h = this.l = this.g = null;
                this.o = !1;
            };
            var gj = new Pi(function () {
                    return new fj();
                }, function (a) {
                    a.reset();
                }), hj = function (a, b, c) {
                    var d = gj.get();
                    d.l = a;
                    d.h = b;
                    d.context = c;
                    return d;
                };
            ej.prototype.then = function (a, b, c) {
                return ij(this, 'function' === typeof a ? a : null, 'function' === typeof b ? b : null, c);
            };
            ej.prototype.$goog_Thenable = !0;
            ej.prototype.cancel = function (a) {
                if (0 == this.g) {
                    var b = new jj(a);
                    aj(function () {
                        kj(this, b);
                    }, this);
                }
            };
            var kj = function (a, b) {
                    if (0 == a.g)
                        if (a.l) {
                            var c = a.l;
                            if (c.h) {
                                for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next)
                                    e || (f = g);
                                e && (0 == c.g && 1 == d ? kj(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : lj(c), mj(c, e, 3, b)));
                            }
                            a.l = null;
                        } else
                            dj(a, 3, b);
                }, oj = function (a, b) {
                    a.h || 2 != a.g && 3 != a.g || nj(a);
                    a.o ? a.o.next = b : a.h = b;
                    a.o = b;
                }, ij = function (a, b, c, d) {
                    var e = hj(null, null, null);
                    e.g = new ej(function (f, g) {
                        e.l = b ? function (h) {
                            try {
                                var k = b.call(d, h);
                                f(k);
                            } catch (n) {
                                g(n);
                            }
                        } : f;
                        e.h = c ? function (h) {
                            try {
                                var k = c.call(d, h);
                                void 0 === k && h instanceof jj ? g(h) : f(k);
                            } catch (n) {
                                g(n);
                            }
                        } : g;
                    });
                    e.g.l = a;
                    oj(a, e);
                    return e.g;
                };
            ej.prototype.J = function (a) {
                this.g = 0;
                dj(this, 2, a);
            };
            ej.prototype.D = function (a) {
                this.g = 0;
                dj(this, 3, a);
            };
            var dj = function (a, b, c) {
                    if (0 == a.g) {
                        a === c && (b = 3, c = new TypeError('Promise cannot resolve to itself'));
                        a.g = 1;
                        a: {
                            var d = c, e = a.J, f = a.D;
                            if (d instanceof ej) {
                                oj(d, hj(e || Ja, f || null, a));
                                var g = !0;
                            } else if (cj(d))
                                d.then(e, f, a), g = !0;
                            else {
                                if (Ma(d))
                                    try {
                                        var h = d.then;
                                        if ('function' === typeof h) {
                                            pj(d, h, e, f, a);
                                            g = !0;
                                            break a;
                                        }
                                    } catch (k) {
                                        f.call(a, k);
                                        g = !0;
                                        break a;
                                    }
                                g = !1;
                            }
                        }
                        g || (a.C = c, a.g = b, a.l = null, nj(a), 3 != b || c instanceof jj || qj(a, c));
                    }
                }, pj = function (a, b, c, d, e) {
                    var f = !1, g = function (k) {
                            f || (f = !0, c.call(e, k));
                        }, h = function (k) {
                            f || (f = !0, d.call(e, k));
                        };
                    try {
                        b.call(a, g, h);
                    } catch (k) {
                        h(k);
                    }
                }, nj = function (a) {
                    a.A || (a.A = !0, aj(a.I, a));
                }, lj = function (a) {
                    var b = null;
                    a.h && (b = a.h, a.h = b.next, b.next = null);
                    a.h || (a.o = null);
                    return b;
                };
            ej.prototype.I = function () {
                for (var a; a = lj(this);)
                    mj(this, a, this.g, this.C);
                this.A = !1;
            };
            var mj = function (a, b, c, d) {
                    if (3 == c && b.h && !b.o)
                        for (; a && a.B; a = a.l)
                            a.B = !1;
                    if (b.g)
                        b.g.l = null, rj(b, c, d);
                    else
                        try {
                            b.o ? b.l.call(b.context) : rj(b, c, d);
                        } catch (e) {
                            sj.call(null, e);
                        }
                    Qi(gj, b);
                }, rj = function (a, b, c) {
                    2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c);
                }, qj = function (a, b) {
                    a.B = !0;
                    aj(function () {
                        a.B && sj.call(null, b);
                    });
                }, sj = Ti, jj = function (a) {
                    $a.call(this, a);
                };
            Xa(jj, $a);
            jj.prototype.name = 'cancel';
            var tj = function (a, b) {
                L.call(this);
                this.h = a || 1;
                this.g = b || u;
                this.l = Ua(this.nf, this);
                this.o = Wa();
            };
            Xa(tj, L);
            l = tj.prototype;
            l.jb = !1;
            l.Da = null;
            l.nf = function () {
                if (this.jb) {
                    var a = Wa() - this.o;
                    0 < a && a < 0.8 * this.h ? this.Da = this.g.setTimeout(this.l, this.h - a) : (this.Da && (this.g.clearTimeout(this.Da), this.Da = null), this.dispatchEvent('tick'), this.jb && (this.stop(), this.start()));
                }
            };
            l.start = function () {
                this.jb = !0;
                this.Da || (this.Da = this.g.setTimeout(this.l, this.h), this.o = Wa());
            };
            l.stop = function () {
                this.jb = !1;
                this.Da && (this.g.clearTimeout(this.Da), this.Da = null);
            };
            l.N = function () {
                tj.ya.N.call(this);
                this.stop();
                delete this.g;
            };
            var uj = function (a, b, c) {
                if ('function' === typeof a)
                    c && (a = Ua(a, c));
                else if (a && 'function' == typeof a.handleEvent)
                    a = Ua(a.handleEvent, a);
                else
                    throw Error('Invalid listener argument');
                return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0);
            };
            var vj = function () {
                return Math.round(Date.now() / 1000);
            };
            var wj = function () {
                this.g = {};
                return this;
            };
            wj.prototype.remove = function (a) {
                var b = this.g;
                a in b && delete b[a];
            };
            wj.prototype.set = function (a, b) {
                this.g[a] = b;
            };
            var xj = function (a, b) {
                a.g.eb = Tb(a.g, 'eb', 0) | b;
            };
            wj.prototype.get = function (a) {
                return Tb(this.g, a, null);
            };
            var yj = null, zj = function () {
                    this.g = {};
                    this.h = 0;
                }, Aj = function () {
                    yj || (yj = new zj());
                    return yj;
                }, Bj = function (a, b) {
                    a.g[b.o] = b;
                }, Cj = function (a, b) {
                    this.o = a;
                    this.l = !0;
                    this.g = b;
                };
            Cj.prototype.h = function () {
                return String(this.g);
            };
            var Dj = function (a, b) {
                Cj.call(this, String(a), b);
                this.B = a;
                this.g = !!b;
            };
            t(Dj, Cj);
            Dj.prototype.h = function () {
                return this.g ? '1' : '0';
            };
            var Ej = function (a, b) {
                Cj.call(this, a, b);
            };
            t(Ej, Cj);
            Ej.prototype.h = function () {
                return this.g ? Math.round(this.g.top) + '.' + Math.round(this.g.left) + '.' + (Math.round(this.g.top) + Math.round(this.g.height)) + '.' + (Math.round(this.g.left) + Math.round(this.g.width)) : '';
            };
            var Fj = function (a) {
                if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                    a = a.split('.');
                    var b = Number(a[0]), c = Number(a[1]);
                    return new Ej('', new Rf(c, b, Number(a[3]) - c, Number(a[2]) - b));
                }
                return new Ej('', new Rf(0, 0, 0, 0));
            };
            var Gj = function (a) {
                    var b = new Rf(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE), c = new Rf(0, 0, 0, 0);
                    if (!a || 0 == a.length)
                        return c;
                    for (var d = 0; d < a.length; d++) {
                        a: {
                            var e = b;
                            var f = a[d], g = Math.max(e.left, f.left), h = Math.min(e.left + e.width, f.left + f.width);
                            if (g <= h) {
                                var k = Math.max(e.top, f.top);
                                f = Math.min(e.top + e.height, f.top + f.height);
                                if (k <= f) {
                                    e.left = g;
                                    e.top = k;
                                    e.width = h - g;
                                    e.height = f - k;
                                    e = !0;
                                    break a;
                                }
                            }
                            e = !1;
                        }
                        if (!e)
                            return c;
                    }
                    return b;
                }, Hj = function (a, b) {
                    var c = a.getBoundingClientRect();
                    a = fg(a, b);
                    return new Rf(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top));
                }, Ij = function (a, b, c) {
                    if (b && c) {
                        a: {
                            var d = Math.max(b.left, c.left);
                            var e = Math.min(b.left + b.width, c.left + c.width);
                            if (d <= e) {
                                var f = Math.max(b.top, c.top), g = Math.min(b.top + b.height, c.top + c.height);
                                if (f <= g) {
                                    d = new Rf(d, f, e - d, g - f);
                                    break a;
                                }
                            }
                            d = null;
                        }
                        e = d ? d.height * d.width : 0;
                        f = d ? b.height * b.width : 0;
                        d = d && f ? Math.round(e / f * 100) : 0;
                        Bj(a, new Cj('vp', d));
                        d && 0 < d ? (e = Sf(b), f = Sf(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;
                        Bj(a, new Dj(512, e));
                        d && 0 < d ? (e = Sf(b), f = Sf(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
                        Bj(a, new Dj(1024, e));
                        d && 0 < d ? (e = Sf(b), f = Sf(c), e = e.left >= f.left && e.left < f.right) : e = !1;
                        Bj(a, new Dj(2048, e));
                        d && 0 < d ? (b = Sf(b), c = Sf(c), c = b.right <= c.right && b.right > c.left) : c = !1;
                        Bj(a, new Dj(4096, c));
                    }
                };
            var Jj = function (a, b) {
                var c = 0;
                Mb(D(), 'ima', 'video', 'client', 'tagged') && (c = 1);
                var d = null;
                a && (d = a());
                if (d) {
                    a = Aj();
                    a.g = {};
                    var e = new Dj(32, !0);
                    e.l = !1;
                    Bj(a, e);
                    e = D().document;
                    e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || '';
                    Bj(a, new Dj(64, 'hidden' != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
                    try {
                        var f = D().top;
                        try {
                            var g = !!f.location.href || '' === f.location.href;
                        } catch (m) {
                            g = !1;
                        }
                        if (g) {
                            var h = ki(d);
                            var k = h && 0 != h.length ? '1' : '0';
                        } else
                            k = '2';
                    } catch (m) {
                        k = '2';
                    }
                    Bj(a, new Dj(256, '2' == k));
                    Bj(a, new Dj(128, '1' == k));
                    h = g = D().top;
                    '2' == k && (h = D());
                    f = Hj(d, h);
                    Bj(a, new Ej('er', f));
                    try {
                        var n = h.document && !h.document.body ? null : kf(h || window);
                    } catch (m) {
                        n = null;
                    }
                    n ? (h = lf(ef(h.document).g), Bj(a, new Dj(16384, !!h)), n = h ? new Rf(h.x, h.y, n.width, n.height) : null) : n = null;
                    Bj(a, new Ej('vi', n));
                    if (n && '1' == k) {
                        k = ki(d);
                        d = [];
                        for (h = 0; h < k.length; h++)
                            (e = Hj(k[h], g)) && d.push(e);
                        d.push(n);
                        n = Gj(d);
                    }
                    Ij(a, f, n);
                    a.h && Bj(a, new Cj('ts', vj() - a.h));
                    a.h = vj();
                } else
                    a = Aj(), a.g = {}, a.h = vj(), Bj(a, new Dj(32, !1));
                this.l = a;
                this.g = new wj();
                this.g.set('ve', 4);
                c && xj(this.g, 1);
                Mb(D(), 'ima', 'video', 'client', 'crossdomainTag') && xj(this.g, 4);
                Mb(D(), 'ima', 'video', 'client', 'sdkTag') && xj(this.g, 8);
                Mb(D(), 'ima', 'video', 'client', 'jsTag') && xj(this.g, 2);
                b && Tb(b, 'fullscreen', !1) && xj(this.g, 16);
                this.h = b = null;
                if (c && (c = Mb(D(), 'ima', 'video', 'client'), c.getEData)) {
                    this.h = c.getEData();
                    if (c = Mb(D(), 'ima', 'video', 'client', 'getLastSnapshotFromTop'))
                        if (a = c())
                            this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi, b && a && (b = Fj(b).g, a = Fj(a).g, k = null, Tb(c.g, 'er', null) && (k = Tb(c.g, 'er', null).g, k.top += b.top, k.left += b.left, Bj(c, new Ej('er', k))), Tb(c.g, 'vi', null) && (n = Tb(c.g, 'vi', null).g, n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = Gj(d), Ij(c, k, b), Bj(c, new Ej('vi', a))));
                    a: {
                        if (this.h) {
                            if (this.h.getTagLoadTimestamp) {
                                b = this.h.getTagLoadTimestamp();
                                break a;
                            }
                            if (this.h.getTimeSinceTagLoadSeconds) {
                                b = this.h.getTimeSinceTagLoadSeconds();
                                break a;
                            }
                        }
                        b = null;
                    }
                }
                c = this.g;
                a = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1000) : null;
                c.set.call(c, 'td', vj() - (null != a ? a : null != b ? b : vj()));
            };
            var Kj = new tj(200), Lj = function (a, b) {
                    try {
                        var c = new Jj(a, b);
                        a = [];
                        var d = Number(c.g.get('eb'));
                        c.g.remove('eb');
                        var e, f = c.g;
                        b = [];
                        for (var g in f.g)
                            b.push(g + f.g[g]);
                        (e = b.join('_')) && a.push(e);
                        if (c.h) {
                            var h = c.h.serialize();
                            h && a.push(h);
                        }
                        var k, n = c.l;
                        e = d;
                        f = [];
                        e || (e = 0);
                        for (var m in n.g) {
                            var v = n.g[m];
                            if (v instanceof Dj)
                                v.g && (e |= v.B);
                            else {
                                var r, w = n.g[m];
                                (r = w.l ? w.h() : '') && f.push(m + r);
                            }
                        }
                        f.push('eb' + String(e));
                        (k = f.join('_')) && a.push(k);
                        c.g.set('eb', d);
                        return a.join('_');
                    } catch (B) {
                        return 'tle;' + Zc(B.name, 12) + ';' + Zc(B.message, 40);
                    }
                }, Mj = function (a, b) {
                    Ei(Kj, 'tick', function () {
                        var c = Lj(b);
                        a(c);
                    });
                    Kj.start();
                    Kj.dispatchEvent('tick');
                };
            var Oj = function (a) {
                ve(this, a, -1, Nj, null);
            };
            t(Oj, we);
            var Tj = function (a, b) {
                    var c = Le(a, Pj, 1);
                    0 < c.length && ne(b, 1, c, Qj);
                    c = Le(a, Rj, 2);
                    0 < c.length && ne(b, 2, c, Sj);
                }, Pj = function (a) {
                    ve(this, a, -1, null, null);
                };
            t(Pj, we);
            var Qj = function (a, b) {
                    var c = A(a, 1);
                    null != c && je(b, 1, c);
                    c = Ke(a, Uj, 2);
                    null != c && me(b, 2, c);
                    c = Ke(a, Uj, 3);
                    null != c && me(b, 3, c);
                    c = A(a, 4);
                    null != c && null != c && ke(b, 4, db(c));
                    c = A(a, 5);
                    null != c && null != c && ke(b, 5, db(c));
                }, Uj = function (a) {
                    ve(this, a, -1, null, null);
                };
            t(Uj, we);
            var le = function (a, b) {
                    var c = A(a, 1);
                    null != c && je(b, 1, c);
                    c = A(a, 2);
                    null != c && je(b, 2, c);
                    c = A(a, 3);
                    null != c && je(b, 3, c);
                }, Rj = function (a) {
                    ve(this, a, -1, null, null);
                };
            t(Rj, we);
            var Vj = function (a, b) {
                    return He(a, 8, b);
                }, Sj = function (a, b) {
                    var c = A(a, 1);
                    null != c && null != c && ke(b, 1, db(c));
                    c = A(a, 2);
                    null != c && null != c && ke(b, 2, db(c));
                    c = A(a, 3);
                    null != c && ie(b, 3, c);
                    c = A(a, 7);
                    null != c && ie(b, 7, c);
                    c = A(a, 8);
                    if (null != c) {
                        var d = c;
                        if (null != d) {
                            nd(b.g, 69);
                            c = b.g;
                            var e = d;
                            e = (d = 0 > e ? 1 : 0) ? -e : e;
                            if (0 === e)
                                0 < 1 / e ? id = jd = 0 : (jd = 0, id = 2147483648);
                            else if (isNaN(e))
                                jd = 0, id = 2147483647;
                            else if (3.4028234663852886e+38 < e)
                                jd = 0, id = (d << 31 | 2139095040) >>> 0;
                            else if (1.1754943508222875e-38 > e)
                                e = Math.round(e / Math.pow(2, -149)), jd = 0, id = (d << 31 | e) >>> 0;
                            else {
                                var f = Math.floor(Math.log(e) / Math.LN2);
                                e *= Math.pow(2, -f);
                                e = Math.round(8388608 * e) & 8388607;
                                jd = 0;
                                id = (d << 31 | f + 127 << 23 | e) >>> 0;
                            }
                            od(c, id);
                        }
                    }
                    c = A(a, 4);
                    null != c && he(b, 4, c);
                    c = A(a, 5);
                    null != c && he(b, 5, c);
                    c = A(a, 6);
                    null != c && he(b, 6, c);
                }, Nj = [
                    1,
                    2
                ];
            var Wj = function (a) {
                ve(this, a, -1, null, null);
            };
            t(Wj, we);
            var Xj;
            Xj = [
                'av.default',
                'js',
                'unreleased'
            ].slice(-1)[0];
            var Yj = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/, ck = function (a) {
                    a = a || Zj();
                    for (var b = new ak(u.location.href, u, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
                        var f = a[e];
                        !c && Yj.test(f.url) && (c = f);
                        if (f.url && !f.Hc) {
                            b = f;
                            break;
                        }
                    }
                    e = null;
                    f = a.length && a[d].url;
                    0 != b.depth && f && (e = a[d]);
                    return new bk(b, e, c);
                }, Zj = function () {
                    var a = u, b = [], c = null;
                    do {
                        var d = a;
                        if (Bf(d)) {
                            var e = d.location.href;
                            c = d.document && d.document.referrer || null;
                        } else
                            e = c, c = null;
                        b.push(new ak(e || '', d));
                        try {
                            a = d.parent;
                        } catch (f) {
                            a = null;
                        }
                    } while (a && d != a);
                    d = 0;
                    for (a = b.length - 1; d <= a; ++d)
                        b[d].depth = a - d;
                    d = u;
                    if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                        for (a = 1; a < b.length; ++a)
                            e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || '', e.Hc = !0);
                    return b;
                }, bk = function (a, b, c) {
                    this.g = a;
                    this.h = b;
                    this.l = c;
                }, ak = function (a, b, c) {
                    this.url = a;
                    this.la = b;
                    this.Hc = !!c;
                    this.depth = null;
                };
            var dk = function () {
                    this.l = '&';
                    this.h = {};
                    this.o = 0;
                    this.g = [];
                }, ek = function (a, b) {
                    var c = {};
                    c[a] = b;
                    return [c];
                }, gk = function (a, b, c, d, e) {
                    var f = [];
                    Gf(a, function (g, h) {
                        (g = fk(g, b, c, d, e)) && f.push(h + '=' + g);
                    });
                    return f.join(b);
                }, fk = function (a, b, c, d, e) {
                    if (null == a)
                        return '';
                    b = b || '&';
                    c = c || ',$';
                    'string' == typeof c && (c = c.split(''));
                    if (a instanceof Array) {
                        if (d = d || 0, d < c.length) {
                            for (var f = [], g = 0; g < a.length; g++)
                                f.push(fk(a[g], b, c, d + 1, e));
                            return f.join(c[d]);
                        }
                    } else if ('object' == typeof a)
                        return e = e || 0, 2 > e ? encodeURIComponent(gk(a, b, c, d, e + 1)) : '...';
                    return encodeURIComponent(String(a));
                }, hk = function (a, b, c) {
                    a.g.push(b);
                    a.h[b] = c;
                }, ik = function (a, b, c, d) {
                    a.g.push(b);
                    a.h[b] = ek(c, d);
                }, kk = function (a, b, c) {
                    b = b + '//pagead2.googlesyndication.com' + c;
                    var d = jk(a) - c.length;
                    if (0 > d)
                        return '';
                    a.g.sort(function (m, v) {
                        return m - v;
                    });
                    c = null;
                    for (var e = '', f = 0; f < a.g.length; f++)
                        for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                            if (!d) {
                                c = null == c ? g : c;
                                break;
                            }
                            var n = gk(h[k], a.l, ',$');
                            if (n) {
                                n = e + n;
                                if (d >= n.length) {
                                    d -= n.length;
                                    b += n;
                                    e = a.l;
                                    break;
                                }
                                c = null == c ? g : c;
                            }
                        }
                    a = '';
                    null != c && (a = e + 'trn=' + c);
                    return b + a + '';
                }, jk = function (a) {
                    var b = 1, c;
                    for (c in a.h)
                        b = c.length > b ? c.length : b;
                    return 3997 - b - a.l.length - 1;
                };
            var lk = function (a, b, c, d, e) {
                if ((d ? a.g : Math.random()) < (e || 0.01))
                    try {
                        if (c instanceof dk)
                            var f = c;
                        else
                            f = new dk(), Gf(c, function (h, k) {
                                var n = f, m = n.o++;
                                hk(n, m, ek(k, h));
                            });
                        var g = kk(f, a.h, '/pagead/gen_204?id=' + b + '&');
                        g && Uf(u, g);
                    } catch (h) {
                    }
            };
            var ok = function () {
                var a = mk;
                this.A = nk;
                this.B = 'jserror';
                this.l = !0;
                this.h = null;
                this.C = this.Ha;
                this.g = void 0 === a ? null : a;
                this.o = !1;
            };
            l = ok.prototype;
            l.lc = function (a) {
                this.h = a;
            };
            l.Sc = function (a) {
                this.B = a;
            };
            l.Tc = function (a) {
                this.l = a;
            };
            l.Uc = function (a) {
                this.o = a;
            };
            l.fb = function (a, b, c) {
                try {
                    if (this.g && this.g.l) {
                        var d = this.g.start(a.toString(), 3);
                        var e = b();
                        this.g.end(d);
                    } else
                        e = b();
                } catch (k) {
                    b = this.l;
                    try {
                        Dg(d);
                        var f = new Se(k, { message: pk(k) });
                        b = this.C(a, f, void 0, c);
                    } catch (n) {
                        this.Ha(217, n);
                    }
                    if (b) {
                        var g, h;
                        null == (g = window.console) || null == (h = g.error) || h.call(g, k);
                    } else
                        throw k;
                }
                return e;
            };
            l.Pc = function (a, b, c, d) {
                var e = this;
                return function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h - 0] = arguments[h];
                    return e.fb(a, function () {
                        return b.apply(c, g);
                    }, d);
                };
            };
            l.Ha = function (a, b, c, d, e) {
                e = e || this.B;
                try {
                    var f = new dk();
                    ik(f, 1, 'context', a);
                    Te(b) || (b = new Se(b, { message: pk(b) }));
                    b.msg && ik(f, 2, 'msg', b.msg.substring(0, 512));
                    var g = b.meta || {};
                    if (this.h)
                        try {
                            this.h(g);
                        } catch (k) {
                        }
                    if (d)
                        try {
                            d(g);
                        } catch (k) {
                        }
                    hk(f, 3, [g]);
                    var h = ck();
                    h.h && ik(f, 4, 'top', h.h.url || '');
                    hk(f, 5, [
                        { url: h.g.url || '' },
                        { url: h.g.url ? xf(h.g.url) : '' }
                    ]);
                    lk(this.A, e, f, this.o, c);
                } catch (k) {
                    try {
                        lk(this.A, e, {
                            context: 'ecmserr',
                            rctx: a,
                            msg: pk(k),
                            url: h && h.g.url
                        }, this.o, c);
                    } catch (n) {
                    }
                }
                return this.l;
            };
            var pk = function (a) {
                var b = a.toString();
                a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
                a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
                if (a.stack) {
                    a = a.stack;
                    var c = b;
                    try {
                        -1 == a.indexOf(c) && (a = c + '\n' + a);
                        for (var d; a != d;)
                            d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1');
                        b = a.replace(/\n */g, '\n');
                    } catch (e) {
                        b = c;
                    }
                }
                return b;
            };
            var nk, qk, rk = lg(), mk = new Cg(1, rk);
            nk = new function () {
                var a = void 0 === a ? C : a;
                this.h = 'http:' === a.location.protocol ? 'http:' : 'https:';
                this.g = Math.random();
            }();
            'number' !== typeof rk.google_srt && (rk.google_srt = Math.random());
            var sk = nk, tk = rk.google_srt;
            0 <= tk && 1 >= tk && (sk.g = tk);
            qk = new ok();
            qk.lc(function () {
            });
            qk.Uc(!0);
            'complete' == rk.document.readyState ? rk.google_measure_js_timing || mk.C() : mk.l && We(rk, 'load', function () {
                rk.google_measure_js_timing || mk.C();
            });
            var uk = function () {
                this.blockSize = -1;
            };
            var vk = [
                    0,
                    2,
                    1
                ], wk = null;
            document.addEventListener && document.addEventListener('mousedown', function (a) {
                wk = a;
            }, !0);
            window.mb = function (a) {
                if (a) {
                    var b;
                    if (b = window.event || wk) {
                        var c;
                        (c = b.which ? 1 << vk[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                        c && b.altKey && (c |= 16);
                        c && b.ctrlKey && (c |= 32);
                        b = c;
                    } else
                        b = null;
                    if (c = b)
                        if (window.css)
                            window.css(a.id, 'mb', c, void 0, void 0);
                        else if (a) {
                            b = a.href;
                            var d = b.indexOf('&mb=');
                            if (0 > d)
                                c = b + '&mb=' + c;
                            else {
                                d += 4;
                                var e = b.indexOf('&', d);
                                c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c;
                            }
                            a.href = 2000 < c.length ? b : c;
                        }
                }
            };
            var xk = function (a, b, c) {
                try {
                    a && (b = b.top);
                    var d = void 0;
                    var e = b;
                    c = void 0 === c ? !1 : c;
                    a && null !== e && e != e.top && (e = e.top);
                    try {
                        d = (void 0 === c ? 0 : c) ? new bf(e.innerWidth, e.innerHeight).round() : kf(e || window).round();
                    } catch (k) {
                        d = new bf(-12245933, -12245933);
                    }
                    a = d;
                    var f = lf(ef(b.document).g);
                    if (-12245933 == a.width) {
                        var g = a.width;
                        var h = new E(g, g, g, g);
                    } else
                        h = new E(f.y, f.x + a.width, f.y + a.height, f.x);
                    return h;
                } catch (k) {
                    return new E(-12245933, -12245933, -12245933, -12245933);
                }
            };
            var yk = function (a) {
                var b = {};
                y(a, function (c) {
                    var d = c.g, e = b[d];
                    b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c;
                });
                xb(a, function (c) {
                    return null === b[c.g];
                });
            };
            var zk = {
                    NONE: 0,
                    Of: 1
                }, Ak = {
                    Nf: 0,
                    Rg: 1,
                    Qg: 2,
                    Sg: 3
                };
            var Bk = function () {
                this.Z = 0;
                this.g = !1;
                this.h = -1;
                this.Za = !1;
                this.pa = 0;
            };
            Bk.prototype.isVisible = function () {
                return this.Za ? 0.3 <= this.Z : 0.5 <= this.Z;
            };
            var Ck = {
                    Mf: 0,
                    Sf: 1
                }, Dk = {
                    668123728: 0,
                    668123729: 1
                }, Ek = {
                    44731964: 0,
                    44731965: 1
                }, Fk = {
                    NONE: 0,
                    sg: 1,
                    Wf: 2
                }, Gk = {
                    480596784: 0,
                    480596785: 1,
                    21063355: 2
                };
            var Hk = function () {
                    this.g = null;
                    this.o = !1;
                    this.l = null;
                }, Ik = function (a) {
                    a.o = !0;
                    return a;
                }, Jk = function (a, b) {
                    a.l && y(b, function (c) {
                        c = a.l[c];
                        void 0 !== c && a.h(c);
                    });
                }, Kk = function (a) {
                    Hk.call(this);
                    this.B = a;
                };
            t(Kk, Hk);
            Kk.prototype.h = function (a) {
                null === this.g && Ob(this.B, a) && (this.g = a);
            };
            var Lk = function () {
                Hk.call(this);
            };
            t(Lk, Hk);
            Lk.prototype.h = function (a) {
                null === this.g && 'number' === typeof a && (this.g = a);
            };
            var Mk = function () {
                Hk.call(this);
            };
            t(Mk, Hk);
            Mk.prototype.h = function (a) {
                null === this.g && 'string' === typeof a && (this.g = a);
            };
            var Nk = function () {
                this.g = {};
                this.l = !0;
                this.h = {};
            };
            Nk.prototype.reset = function () {
                this.g = {};
                this.l = !0;
                this.h = {};
            };
            var Ok = function (a, b, c) {
                    a.g[b] || (a.g[b] = new Kk(c));
                    return a.g[b];
                }, Pk = function (a) {
                    a.g.queryid || (a.g.queryid = new Mk());
                }, Qk = function (a, b, c) {
                    (a = a.g[b]) && a.h(c);
                }, Rk = function (a, b) {
                    if (Nb(a.h, b))
                        return a.h[b];
                    if (a = a.g[b])
                        return a.g;
                }, Sk = function (a) {
                    var b = {}, c = Fb(a.g, function (d) {
                            return d.o;
                        });
                    Eb(c, function (d, e) {
                        d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.g ? String(d.g) : '';
                        0 < d.length && (b[e] = d);
                    }, a);
                    return b;
                }, Tk = function (a) {
                    a = Sk(a);
                    var b = [];
                    Eb(a, function (c, d) {
                        d in Object.prototype || 'undefined' != typeof c && b.push([
                            d,
                            ':',
                            c
                        ].join(''));
                    });
                    return b;
                }, Uk = function () {
                    var a = N().U, b = uh();
                    a.l && y(Kb(a.g), function (c) {
                        return Jk(c, b);
                    });
                };
            var Vk = !wd && !Lc();
            var Wk = function () {
                this.g = this.Sa = null;
            };
            var Xk = function () {
            };
            Xk.prototype.now = function () {
                return 0;
            };
            Xk.prototype.h = function () {
                return 0;
            };
            Xk.prototype.l = function () {
                return 0;
            };
            Xk.prototype.g = function () {
                return 0;
            };
            var Zk = function () {
                if (!Yk())
                    throw Error();
            };
            t(Zk, Xk);
            var Yk = function () {
                return !(!C || !C.performance);
            };
            Zk.prototype.now = function () {
                return Yk() && C.performance.now ? C.performance.now() : Xk.prototype.now.call(this);
            };
            Zk.prototype.h = function () {
                return Yk() && C.performance.memory ? C.performance.memory.totalJSHeapSize || 0 : Xk.prototype.h.call(this);
            };
            Zk.prototype.l = function () {
                return Yk() && C.performance.memory ? C.performance.memory.usedJSHeapSize || 0 : Xk.prototype.l.call(this);
            };
            Zk.prototype.g = function () {
                return Yk() && C.performance.memory ? C.performance.memory.jsHeapSizeLimit || 0 : Xk.prototype.g.call(this);
            };
            var $k = function () {
            };
            $k.prototype.isVisible = function () {
                return 1 === Fg(Qe);
            };
            var al = function (a, b) {
                    this.g = a;
                    this.depth = b;
                }, cl = function (a) {
                    a = a || Zj();
                    var b = Math.max(a.length - 1, 0), c = ck(a);
                    a = c.g;
                    var d = c.h, e = c.l, f = [];
                    c = function (h, k) {
                        return null == h ? k : h;
                    };
                    e && f.push(new al([
                        e.url,
                        e.Hc ? 2 : 0
                    ], c(e.depth, 1)));
                    d && d != e && f.push(new al([
                        d.url,
                        2
                    ], 0));
                    a.url && a != e && f.push(new al([
                        a.url,
                        0
                    ], c(a.depth, b)));
                    var g = ob(f, function (h, k) {
                        return f.slice(0, f.length - k);
                    });
                    !a.url || (e || d) && a != e || (d = If(a.url)) && g.push([new al([
                            d,
                            1
                        ], c(a.depth, b))]);
                    g.push([]);
                    return ob(g, function (h) {
                        return bl(b, h);
                    });
                };
            function bl(a, b) {
                var c = pb(b, function (e, f) {
                        return Math.max(e, f.depth);
                    }, -1), d = Db(c + 2);
                d[0] = a;
                y(b, function (e) {
                    return d[e.depth + 1] = e.g;
                });
                return d;
            }
            var dl = function () {
                var a = cl();
                return ob(a, function (b) {
                    return fk(b);
                });
            };
            var el = function () {
                    this.h = new $k();
                    this.g = Yk() ? new Zk() : new Xk();
                }, gl = function () {
                    fl();
                    var a = C.document;
                    return !!(a && a.body && a.body.getBoundingClientRect && 'function' === typeof C.setInterval && 'function' === typeof C.clearInterval && 'function' === typeof C.setTimeout && 'function' === typeof C.clearTimeout);
                };
            el.prototype.setTimeout = function (a, b) {
                return C.setTimeout(a, b);
            };
            el.prototype.clearTimeout = function (a) {
                C.clearTimeout(a);
            };
            var hl = function (a) {
                    fl();
                    var b = lg() || C;
                    Uf(b, a);
                }, il = function () {
                    fl();
                    return dl();
                };
            var jl = function () {
            };
            jl.prototype.getContext = function () {
                if (!this.g) {
                    if (!C)
                        throw Error('Context has not been set and window is undefined.');
                    this.g = F(el);
                }
                return this.g;
            };
            var fl = function () {
                return F(jl).getContext();
            };
            var kl = function (a) {
                ve(this, a, -1, null, null);
            };
            t(kl, we);
            var ll = function (a) {
                    this.l = a;
                    this.g = -1;
                    this.h = this.o = 0;
                }, ml = function (a, b) {
                    return function (c) {
                        for (var d = [], e = 0; e < arguments.length; ++e)
                            d[e - 0] = arguments[e];
                        if (-1 < a.g)
                            return b.apply(null, fa(d));
                        try {
                            return a.g = a.l.g.now(), b.apply(null, fa(d));
                        } finally {
                            a.o += a.l.g.now() - a.g, a.g = -1, a.h += 1;
                        }
                    };
                };
            var nl = function (a, b) {
                this.h = a;
                this.l = b;
                this.g = new ll(a);
            };
            var ol = function () {
            };
            var pl = {
                Mg: 1,
                oh: 2,
                Ag: 3
            };
            fc(ac(bc('https://pagead2.googlesyndication.com/pagead/osd.js')));
            var ql = function () {
                this.o = void 0;
                this.h = this.C = 0;
                this.A = -1;
                this.U = new Nk();
                Ik(Ok(this.U, 'mv', Fk)).l = void 0 === Gk ? null : Gk;
                Ok(this.U, 'omid', Ck);
                Ik(Ok(this.U, 'epoh', Ck));
                Ik(Ok(this.U, 'epph', Ck));
                Ik(Ok(this.U, 'umt', Ck)).l = void 0 === Dk ? null : Dk;
                Ik(Ok(this.U, 'phel', Ck));
                Ik(Ok(this.U, 'phell', Ck));
                Ik(Ok(this.U, 'oseid', pl));
                var a = this.U;
                a.g.sloi || (a.g.sloi = new Lk());
                Ik(a.g.sloi);
                Ik(Ok(this.U, 'ovms', Ak));
                Ik(Ok(this.U, 'xdi', Ck));
                Ik(Ok(this.U, 'amp', Ck));
                Ik(Ok(this.U, 'prf', Ck));
                Ik(Ok(this.U, 'gtx', Ck));
                Ik(Ok(this.U, 'mvp_lv', Ck));
                Ik(Ok(this.U, 'ssmol', Ck)).l = void 0 === Ek ? null : Ek;
                this.g = new nl(fl(), this.U);
                this.B = this.l = !1;
                this.flags = new ol();
            };
            ql.prototype.Oc = function (a) {
                if ('string' === typeof a && 0 != a.length) {
                    var b = this.U;
                    if (b.l) {
                        a = a.split('&');
                        for (var c = a.length - 1; 0 <= c; c--) {
                            var d = a[c].split('='), e = d[0];
                            d = 1 < d.length ? parseInt(d[1], 10) : 1;
                            isNaN(d) || (e = b.g[e]) && e.h(d);
                        }
                    }
                }
            };
            var N = function () {
                return F(ql);
            };
            var rl = function () {
                    var a = 'https:';
                    C && C.location && 'http:' === C.location.protocol && (a = 'http:');
                    this.h = a;
                    this.g = 0.01;
                    this.l = Math.random();
                }, sl = function (a, b, c, d, e) {
                    if ((d ? a.l : Math.random()) < (e || a.g))
                        try {
                            if (c instanceof dk)
                                var f = c;
                            else
                                f = new dk(), Gf(c, function (h, k) {
                                    var n = f, m = n.o++;
                                    hk(n, m, ek(k, h));
                                });
                            var g = kk(f, a.h, '/pagead/gen_204?id=' + b + '&');
                            g && hl(g);
                        } catch (h) {
                        }
                };
            var vl = function () {
                var a = tl;
                this.A = ul;
                this.B = 'jserror';
                this.l = !0;
                this.h = null;
                this.C = this.Ha;
                this.g = void 0 === a ? null : a;
                this.o = !1;
            };
            l = vl.prototype;
            l.lc = function (a) {
                this.h = a;
            };
            l.Sc = function (a) {
                this.B = a;
            };
            l.Tc = function (a) {
                this.l = a;
            };
            l.Uc = function (a) {
                this.o = a;
            };
            l.fb = function (a, b, c) {
                var d = this;
                return ml(N().g.g, function () {
                    try {
                        if (d.g && d.g.l) {
                            var e = d.g.start(a.toString(), 3);
                            var f = b();
                            d.g.end(e);
                        } else
                            f = b();
                    } catch (k) {
                        var g = d.l;
                        try {
                            Dg(e);
                            var h = new wl(xl(k));
                            g = d.C(a, h, void 0, c);
                        } catch (n) {
                            d.Ha(217, n);
                        }
                        if (!g)
                            throw k;
                    }
                    return f;
                })();
            };
            l.Pc = function (a, b, c, d) {
                var e = this;
                return ml(N().g.g, function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h - 0] = arguments[h];
                    return e.fb(a, function () {
                        return b.apply(c, g);
                    }, d);
                });
            };
            l.Ha = function (a, b, c, d, e) {
                e = e || this.B;
                try {
                    var f = new dk();
                    ik(f, 1, 'context', a);
                    Te(b) || (b = new wl(xl(b)));
                    b.msg && ik(f, 2, 'msg', b.msg.substring(0, 512));
                    var g = b.meta || {};
                    if (this.h)
                        try {
                            this.h(g);
                        } catch (k) {
                        }
                    if (d)
                        try {
                            d(g);
                        } catch (k) {
                        }
                    hk(f, 3, [g]);
                    var h = ck();
                    h.h && ik(f, 4, 'top', h.h.url || '');
                    hk(f, 5, [
                        { url: h.g.url || '' },
                        { url: h.g.url ? xf(h.g.url) : '' }
                    ]);
                    sl(this.A, e, f, this.o, c);
                } catch (k) {
                    try {
                        sl(this.A, e, {
                            context: 'ecmserr',
                            rctx: a,
                            msg: xl(k),
                            url: h && h.g.url
                        }, this.o, c);
                    } catch (n) {
                    }
                }
                return this.l;
            };
            var xl = function (a) {
                    var b = a.toString();
                    a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
                    a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
                    if (a.stack) {
                        a = a.stack;
                        var c = b;
                        try {
                            -1 == a.indexOf(c) && (a = c + '\n' + a);
                            for (var d; a != d;)
                                d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1');
                            b = a.replace(/\n */g, '\n');
                        } catch (e) {
                            b = c;
                        }
                    }
                    return b;
                }, wl = function (a) {
                    Se.call(this, Error(a), { message: a });
                };
            t(wl, Se);
            var ul, yl, tl = new Cg(1, lg()), zl = function () {
                    var a = lg();
                    a && 'undefined' != typeof a.google_measure_js_timing && (a.google_measure_js_timing || tl.C());
                };
            (function () {
                ul = new rl();
                yl = new vl();
                var a = lg();
                a && a.document && ('complete' == a.document.readyState ? zl() : tl.l && We(a, 'load', function () {
                    zl();
                }));
            }());
            var Al = function (a) {
                    yl.lc(function (b) {
                        y(a, function (c) {
                            c(b);
                        });
                    });
                }, Bl = function (a, b) {
                    return yl.fb(a, b, void 0);
                }, Cl = function (a, b, c, d) {
                    return yl.Pc(a, b, c, d);
                }, Dl = function (a, b, c, d) {
                    yl.Ha(a, b, c, d);
                };
            var El = Date.now(), Fl = -1, Gl = -1, Hl, Il = -1, Jl = !1, Kl = function () {
                    return Date.now() - El;
                }, Ll = function () {
                    var a = N().o, b = 0 <= Gl ? Kl() - Gl : -1, c = Jl ? Kl() - Fl : -1, d = 0 <= Il ? Kl() - Il : -1;
                    if (947190542 == a)
                        return 100;
                    if (79463069 == a)
                        return 200;
                    a = [
                        2000,
                        4000
                    ];
                    var e = [
                        250,
                        500,
                        1000
                    ];
                    Dl(637, Error(), 0.001);
                    var f = b;
                    -1 != c && c < b && (f = c);
                    for (b = 0; b < a.length; ++b)
                        if (f < a[b]) {
                            var g = e[b];
                            break;
                        }
                    void 0 === g && (g = e[a.length]);
                    return -1 != d && 1500 < d && 4000 > d ? 500 : g;
                };
            var Ml = function (a, b, c) {
                var d = new E(0, 0, 0, 0);
                this.time = a;
                this.volume = null;
                this.l = b;
                this.g = d;
                this.h = c;
            };
            var Nl = function (a, b, c, d, e, f, g) {
                this.o = a;
                this.l = b;
                this.A = c;
                this.g = d;
                this.B = e;
                this.h = f;
                this.C = g;
            };
            var Ol = {
                    currentTime: 1,
                    duration: 2,
                    isVpaid: 4,
                    volume: 8,
                    isYouTube: 16,
                    isPlaying: 32
                }, Qb = {
                    uc: 'start',
                    FIRST_QUARTILE: 'firstquartile',
                    MIDPOINT: 'midpoint',
                    THIRD_QUARTILE: 'thirdquartile',
                    COMPLETE: 'complete',
                    ae: 'metric',
                    tc: 'pause',
                    kd: 'resume',
                    SKIPPED: 'skip',
                    VIEWABLE_IMPRESSION: 'viewable_impression',
                    be: 'mute',
                    me: 'unmute',
                    FULLSCREEN: 'fullscreen',
                    Wd: 'exitfullscreen',
                    bd: 'bufferstart',
                    $c: 'bufferfinish',
                    dd: 'fully_viewable_audible_half_duration_impression',
                    jd: 'measurable_impression',
                    Rd: 'abandon',
                    cd: 'engagedview',
                    IMPRESSION: 'impression',
                    Td: 'creativeview',
                    LOADED: 'loaded',
                    Og: 'progress',
                    Ef: 'close',
                    Ff: 'collapse',
                    ce: 'overlay_resize',
                    de: 'overlay_unmeasurable_impression',
                    ee: 'overlay_unviewable_impression',
                    ge: 'overlay_viewable_immediate_impression',
                    fe: 'overlay_viewable_end_of_session_impression',
                    Ud: 'custom_metric_viewable',
                    Fg: 'verification_debug'
                }, Pl = 'start firstquartile midpoint thirdquartile resume loaded'.split(' '), Ql = [
                    'start',
                    'firstquartile',
                    'midpoint',
                    'thirdquartile'
                ], Rl = ['abandon'], Sl = {
                    hh: -1,
                    uc: 0,
                    FIRST_QUARTILE: 1,
                    MIDPOINT: 2,
                    THIRD_QUARTILE: 3,
                    COMPLETE: 4,
                    ae: 5,
                    tc: 6,
                    kd: 7,
                    SKIPPED: 8,
                    VIEWABLE_IMPRESSION: 9,
                    be: 10,
                    me: 11,
                    FULLSCREEN: 12,
                    Wd: 13,
                    dd: 14,
                    jd: 15,
                    Rd: 16,
                    cd: 17,
                    IMPRESSION: 18,
                    Td: 19,
                    LOADED: 20,
                    Ud: 21,
                    bd: 22,
                    $c: 23
                };
            var Jb = {
                    wf: 'addEventListener',
                    Xf: 'getMaxSize',
                    Yf: 'getScreenSize',
                    Zf: 'getState',
                    $f: 'getVersion',
                    Pg: 'removeEventListener',
                    tg: 'isViewable'
                }, Tl = function (a) {
                    var b = a !== a.top, c = a.top === mg(a).la, d = -1, e = 0;
                    if (b && c && a.top.mraid) {
                        d = 3;
                        var f = a.top.mraid;
                    } else
                        d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
                    f && (f.IS_GMA_SDK || (e = 2), Ib(function (g) {
                        return 'function' === typeof f[g];
                    }) || (e = 1));
                    return {
                        za: f,
                        Tb: e,
                        lf: d
                    };
                };
            var Ul = function (a) {
                return (a = a.document) && 'function' === typeof a.elementFromPoint;
            };
            if (Qe && Qe.URL) {
                var Vl, Kf = Qe.URL;
                Vl = !!Kf && 0 < Lf().length;
                yl.Tc(!Vl);
            }
            var Wl = function (a, b, c, d) {
                var e = void 0 === e ? !1 : e;
                c = Cl(d, c);
                We(a, b, c, { capture: e });
            };
            var Xl = function (a, b) {
                b = Math.pow(10, b);
                return Math.floor(a * b) / b;
            };
            function Yl(a, b, c, d) {
                if (!a)
                    return {
                        value: d,
                        done: !1
                    };
                d = b(d, a);
                var e = c(d, a);
                return !e && sd(a, 'parentElement') ? Yl(qf(a), b, c, d) : {
                    done: e,
                    value: d
                };
            }
            var Zl = function (a, b, c, d) {
                if (!a)
                    return d;
                d = Yl(a, b, c, d);
                if (!d.done)
                    try {
                        var e = df(a), f = e && D(e);
                        return Zl(f && f.frameElement, b, c, d.value);
                    } catch (g) {
                    }
                return d.value;
            };
            function $l(a) {
                var b = !wd || Nd(8);
                return Zl(a, function (c, d) {
                    c = sd(d, 'style') && d.style && cg(d, 'visibility');
                    return {
                        hidden: 'hidden' === c,
                        visible: b && 'visible' === c
                    };
                }, function (c) {
                    return c.hidden || c.visible;
                }, {
                    hidden: !1,
                    visible: !1
                }).hidden;
            }
            var am = function (a) {
                    return Zl(a, function (b, c) {
                        return !(!sd(c, 'style') || !c.style || 'none' !== cg(c, 'display'));
                    }, function (b) {
                        return b;
                    }, !1) ? !0 : $l(a);
                }, bm = function (a) {
                    return new E(a.top, a.right, a.bottom, a.left);
                }, cm = function (a) {
                    var b = a.top || 0, c = a.left || 0;
                    return new E(b, c + (a.width || 0), b + (a.height || 0), c);
                }, dm = function (a) {
                    return null != a && 0 <= a && 1 >= a;
                };
            function em() {
                var a = Fc;
                return a ? qb('Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX'.split(';'), function (b) {
                    return rc(a, b);
                }) || rc(a, 'OMI/') && !rc(a, 'XiaoMi/') ? !0 : rc(a, 'Presto') && rc(a, 'Linux') && !rc(a, 'X11') && !rc(a, 'Android') && !rc(a, 'Mobi') : !1;
            }
            function fm() {
                var a = Fc;
                return rc(a, 'AppleTV') || rc(a, 'Apple TV') || rc(a, 'CFNetwork') || rc(a, 'tvOS');
            }
            function gm() {
                var a;
                (a = rc(Fc, 'CrKey') || rc(Fc, 'PlayStation') || rc(Fc, 'Roku') || em() || rc(Fc, 'Xbox') || fm()) || (a = Fc, a = rc(a, 'sdk_google_atv_x86') || rc(a, 'Android TV'));
                return a;
            }
            ;
            var im = function () {
                    this.J = !1;
                    this.l = !Bf(C.top);
                    this.C = uf() || vf();
                    var a = Zj();
                    a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(wf)[3] || null) ? decodeURI(a) : a) || '' : '';
                    this.domain = a;
                    this.g = new E(0, 0, 0, 0);
                    this.B = new bf(0, 0);
                    this.o = new bf(0, 0);
                    this.I = new E(0, 0, 0, 0);
                    this.A = 0;
                    this.D = !1;
                    this.h = !(!C || !Tl(C).za);
                    hm(this);
                }, jm = function (a, b) {
                    b && b.screen && (a.B = new bf(b.screen.width, b.screen.height));
                }, km = function (a, b) {
                    var c = a.g ? new bf(a.g.getWidth(), a.g.getHeight()) : new bf(0, 0);
                    b = void 0 === b ? C : b;
                    null !== b && b != b.top && (b = b.top);
                    var d = 0, e = 0;
                    try {
                        var f = b.document, g = f.body, h = f.documentElement;
                        if ('CSS1Compat' == f.compatMode && h.scrollHeight)
                            d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                        else {
                            var k = h.scrollHeight, n = h.scrollWidth, m = h.offsetHeight, v = h.offsetWidth;
                            h.clientHeight != m && (k = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, v = g.offsetWidth);
                            k > c.height ? k > m ? (d = k, e = n) : (d = m, e = v) : k < m ? (d = k, e = n) : (d = m, e = v);
                        }
                        var r = new bf(e, d);
                    } catch (w) {
                        r = new bf(-12245933, -12245933);
                    }
                    a.o = r;
                }, hm = function (a) {
                    C && C.document && (a.I = xk(!1, C, a.C), a.g = xk(!0, C, a.C), km(a, C), jm(a, C));
                }, lm = function () {
                    var a = O();
                    if (0 < a.A || a.D)
                        return !0;
                    a = fl().h.isVisible();
                    var b = 0 === Fg(Qe);
                    return a || b;
                }, O = function () {
                    return F(im);
                };
            var mm = function (a) {
                this.l = a;
                this.h = 0;
                this.g = null;
            };
            mm.prototype.cancel = function () {
                fl().clearTimeout(this.g);
                this.g = null;
            };
            var nm = function (a) {
                var b = fl();
                a.g = b.setTimeout(ml(N().g.g, Cl(143, function () {
                    a.h++;
                    a.l.sample();
                })), Ll());
            };
            var om = function (a, b, c) {
                this.la = a;
                this.da = void 0 === c ? 'na' : c;
                this.B = [];
                this.F = !1;
                this.l = new Ml(-1, !0, this);
                this.g = this;
                this.I = b;
                this.H = this.J = !1;
                this.V = 'uk';
                this.M = !1;
                this.o = !0;
            };
            om.prototype.D = function () {
                return !1;
            };
            om.prototype.initialize = function () {
                return this.F = !0;
            };
            om.prototype.qb = function () {
                return this.g.V;
            };
            om.prototype.Db = function () {
                return this.g.H;
            };
            var qm = function (a, b, c) {
                if (!a.H || (void 0 === c ? 0 : c))
                    a.H = !0, a.V = b, a.I = 0, a.g != a || pm(a);
            };
            om.prototype.fa = function () {
                return this.g.da;
            };
            om.prototype.Ma = function () {
                return this.g.X();
            };
            om.prototype.X = function () {
                return {};
            };
            om.prototype.Ga = function () {
                return this.g.I;
            };
            var rm = function (a, b) {
                ub(a.B, b) || (a.B.push(b), b.rb(a.g), b.Pa(a.l), b.Ca() && (a.J = !0));
            };
            om.prototype.R = function () {
                var a = O();
                a.g = xk(!0, this.la, a.C);
            };
            om.prototype.T = function () {
                jm(O(), this.la);
            };
            om.prototype.Y = function () {
                return this.l.g;
            };
            var sm = function (a) {
                a = a.g;
                a.T();
                a.R();
                var b = O();
                b.I = xk(!1, a.la, b.C);
                km(O(), a.la);
                a.l.g = a.Y();
            };
            om.prototype.sample = function () {
            };
            var tm = function (a, b) {
                a.g != a ? tm(a.g, b) : a.o !== b && (a.o = b, pm(a));
            };
            om.prototype.Gc = function () {
                return this.g.o;
            };
            var um = function (a) {
                    a.J = a.B.length ? qb(a.B, function (b) {
                        return b.Ca();
                    }) : !1;
                }, vm = function (a) {
                    var b = zb(a.B);
                    y(b, function (c) {
                        c.Pa(a.l);
                    });
                }, pm = function (a) {
                    var b = zb(a.B);
                    y(b, function (c) {
                        c.rb(a.g);
                    });
                    a.g != a || vm(a);
                };
            l = om.prototype;
            l.rb = function (a) {
                var b = this.g;
                this.g = a.Ga() >= this.I ? a : this;
                b !== this.g ? (this.o = this.g.o, pm(this)) : this.o !== this.g.o && (this.o = this.g.o, pm(this));
            };
            l.Pa = function (a) {
                if (a.h === this.g) {
                    var b = this.l, c = this.J;
                    if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l)
                        b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
                    this.l = a;
                    !c && vm(this);
                }
            };
            l.Ca = function () {
                return this.J;
            };
            l.W = function () {
                this.M = !0;
            };
            l.Ra = function () {
                return this.M;
            };
            var wm = function (a, b, c, d) {
                this.l = a;
                this.g = new E(0, 0, 0, 0);
                this.A = new E(0, 0, 0, 0);
                this.h = b;
                this.U = c;
                this.H = d;
                this.F = !1;
                this.timestamp = -1;
                this.I = new Nl(b.l, this.g, new E(0, 0, 0, 0), 0, 0, Kl(), 0);
            };
            l = wm.prototype;
            l.sc = function () {
                return !0;
            };
            l.Kb = function () {
            };
            l.W = function () {
                if (!this.Ra()) {
                    var a = this.h;
                    vb(a.B, this);
                    a.J && this.Ca() && um(a);
                    this.Kb();
                    this.F = !0;
                }
            };
            l.Ra = function () {
                return this.F;
            };
            l.Ma = function () {
                return this.h.Ma();
            };
            l.Ga = function () {
                return this.h.Ga();
            };
            l.qb = function () {
                return this.h.qb();
            };
            l.Db = function () {
                return this.h.Db();
            };
            l.rb = function () {
            };
            l.Pa = function () {
                this.La();
            };
            l.Ca = function () {
                return this.H;
            };
            var xm = function (a) {
                this.B = !1;
                this.g = a;
                this.o = Ja;
            };
            l = xm.prototype;
            l.Ga = function () {
                return this.g.Ga();
            };
            l.qb = function () {
                return this.g.qb();
            };
            l.Db = function () {
                return this.g.Db();
            };
            l.create = function (a, b, c) {
                var d = null;
                this.g && (d = this.Lb(a, b, c), rm(this.g, d));
                return d;
            };
            l.ed = function () {
                return this.zb();
            };
            l.zb = function () {
                return !1;
            };
            l.init = function (a) {
                return this.g.initialize() ? (rm(this.g, this), this.o = a, !0) : !1;
            };
            l.rb = function (a) {
                0 == a.Ga() && this.o(a.qb(), this);
            };
            l.Pa = function () {
            };
            l.Ca = function () {
                return !1;
            };
            l.W = function () {
                this.B = !0;
            };
            l.Ra = function () {
                return this.B;
            };
            l.Ma = function () {
                return {};
            };
            var ym = function (a, b, c) {
                    this.l = void 0 === c ? 0 : c;
                    this.h = a;
                    this.g = null == b ? '' : b;
                }, zm = function (a) {
                    switch (Math.trunc(a.l)) {
                    case -16:
                        return -16;
                    case -8:
                        return -8;
                    case 0:
                        return 0;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    default:
                        return 16;
                    }
                }, Am = function (a, b) {
                    return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g;
                };
            var Bm = function () {
                this.l = 0;
                this.g = [];
                this.h = !1;
            };
            Bm.prototype.add = function (a, b, c) {
                ++this.l;
                a = new ym(a, b, c);
                this.g.push(new ym(a.h, a.g, a.l + this.l / 4096));
                this.h = !0;
                return this;
            };
            var Cm = function (a, b) {
                    y(b.g, function (c) {
                        a.add(c.h, c.g, zm(c));
                    });
                }, Dm = function (a, b) {
                    var c = void 0 === c ? 0 : c;
                    var d = void 0 === d ? !0 : d;
                    Gf(b, function (e, f) {
                        d && void 0 === e || a.add(f, e, c);
                    });
                    return a;
                }, Fm = function (a) {
                    var b = Em;
                    a.h && (Bb(a.g, function (c, d) {
                        return Am(d, c) ? 1 : Am(c, d) ? -1 : 0;
                    }), a.h = !1);
                    return pb(a.g, function (c, d) {
                        d = b(d);
                        return '' + c + ('' != c && '' != d ? '&' : '') + d;
                    }, '');
                };
            var Em = function (a) {
                var b = a.h;
                a = a.g;
                return '' === a ? b : 'boolean' === typeof a ? a ? b : '' : Array.isArray(a) ? 0 === a.length ? b : b + '=' + a.join() : b + '=' + (ub([
                    'mtos',
                    'tos',
                    'p'
                ], b) ? a : encodeURIComponent(a));
            };
            var Gm = function (a) {
                var b = void 0 === b ? !0 : b;
                this.g = new Bm();
                void 0 !== a && Cm(this.g, a);
                b && this.g.add('v', Xj, -16);
            };
            Gm.prototype.toString = function () {
                var a = '//pagead2.googlesyndication.com//pagead/gen_204', b = Fm(this.g);
                0 < b.length && (a += '?' + b);
                return a;
            };
            var Hm = function (a) {
                    var b = [], c = [];
                    Eb(a, function (d, e) {
                        if (!(e in Object.prototype) && 'undefined' != typeof d)
                            switch (Array.isArray(d) && (d = d.join(',')), d = [
                                    e,
                                    '=',
                                    d
                                ].join(''), e) {
                            case 'adk':
                            case 'r':
                            case 'tt':
                            case 'error':
                            case 'mtos':
                            case 'tos':
                            case 'p':
                            case 'bs':
                                b.unshift(d);
                                break;
                            case 'req':
                            case 'url':
                            case 'referrer':
                            case 'iframe_loc':
                                c.push(d);
                                break;
                            default:
                                b.push(d);
                            }
                    });
                    return b.concat(c);
                }, Im = function () {
                    if (Xj && 'unreleased' !== Xj)
                        return Xj;
                }, Jm = function (a) {
                    var b = void 0 === b ? 4000 : b;
                    a = a.toString();
                    if (!/&v=[^&]+/.test(a)) {
                        var c = Im();
                        a = c ? a + '&v=' + encodeURIComponent(c) : a;
                    }
                    a = a.substring(0, b);
                    hl(a);
                };
            var Km = function () {
                this.g = 0;
            };
            var Lm = function (a, b, c) {
                y(a.l, function (d) {
                    var e = a.g;
                    if (!d.g && (d.l(b, c), d.o())) {
                        d.g = !0;
                        var f = d.h(), g = new Bm();
                        g.add('id', 'av-js');
                        g.add('type', 'verif');
                        g.add('vtype', d.B);
                        d = F(Km);
                        g.add('i', d.g++);
                        g.add('adk', e);
                        Dm(g, f);
                        e = new Gm(g);
                        Jm(e);
                    }
                });
            };
            var Mm = function () {
                    this.h = this.l = this.o = this.g = 0;
                }, Nm = function (a, b, c, d) {
                    b && (a.g += c, a.h += c, a.o += c, a.l = Math.max(a.l, a.o));
                    if (void 0 === d ? !b : d)
                        a.o = 0;
                };
            var Om = [
                    1,
                    0.75,
                    0.5,
                    0.3,
                    0
                ], Pm = function (a) {
                    this.h = a = void 0 === a ? Om : a;
                    this.g = ob(this.h, function () {
                        return new Mm();
                    });
                }, Rm = function (a, b) {
                    return Qm(a, function (c) {
                        return c.g;
                    }, void 0 === b ? !0 : b);
                }, Tm = function (a, b) {
                    return Sm(a, b, function (c) {
                        return c.g;
                    });
                }, Um = function (a, b) {
                    return Qm(a, function (c) {
                        return c.l;
                    }, void 0 === b ? !0 : b);
                }, Vm = function (a, b) {
                    return Sm(a, b, function (c) {
                        return c.l;
                    });
                }, Wm = function (a, b) {
                    return Sm(a, b, function (c) {
                        return c.h;
                    });
                }, Xm = function (a) {
                    y(a.g, function (b) {
                        b.h = 0;
                    });
                }, Ym = function (a, b, c, d, e, f, g) {
                    g = void 0 === g ? !0 : g;
                    c = f ? Math.min(b, c) : c;
                    for (f = 0; f < a.h.length; f++) {
                        var h = a.h[f], k = 0 < c && c >= h;
                        h = !(0 < b && b >= h) || d;
                        Nm(a.g[f], g && k, e, !g || h);
                    }
                }, Qm = function (a, b, c) {
                    a = ob(a.g, function (d) {
                        return b(d);
                    });
                    return c ? a : Zm(a);
                }, Sm = function (a, b, c) {
                    var d = tb(a.h, function (e) {
                        return b <= e;
                    });
                    return -1 == d ? 0 : c(a.g[d]);
                }, Zm = function (a) {
                    return ob(a, function (b, c, d) {
                        return 0 < c ? d[c] - d[c - 1] : d[c];
                    });
                };
            var $m = function () {
                    this.h = new Pm();
                    this.V = new Mm();
                    this.H = this.C = -1;
                    this.$ = 1000;
                    this.aa = new Pm([
                        1,
                        0.9,
                        0.8,
                        0.7,
                        0.6,
                        0.5,
                        0.4,
                        0.3,
                        0.2,
                        0.1,
                        0
                    ]);
                    this.M = this.K = -1;
                }, an = function (a, b) {
                    return Um(a.h, void 0 === b ? !0 : b);
                };
            $m.prototype.J = function (a, b, c, d) {
                this.C = -1 != this.C ? Math.min(this.C, b.Z) : b.Z;
                this.H = Math.max(this.H, b.Z);
                this.K = -1 != this.K ? Math.min(this.K, b.pa) : b.pa;
                this.M = Math.max(this.M, b.pa);
                Ym(this.aa, b.pa, c.pa, b.g, a, d);
                Ym(this.h, b.Z, c.Z, b.g, a, d);
                c = d || c.Za != b.Za ? c.isVisible() && b.isVisible() : c.isVisible();
                b = !b.isVisible() || b.g;
                Nm(this.V, c, a, b);
            };
            $m.prototype.ab = function () {
                return this.V.l >= this.$;
            };
            var bn = new E(0, 0, 0, 0);
            function cn(a, b) {
                b = dn(b);
                return 0 === b ? 0 : dn(a) / b;
            }
            function dn(a) {
                return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
            }
            function en(a, b) {
                if (!a || !b)
                    return !1;
                for (var c = 0; null !== a && 100 > c++;) {
                    if (a === b)
                        return !0;
                    try {
                        if (a = qf(a) || a) {
                            var d = df(a), e = d && D(d), f = e && e.frameElement;
                            f && (a = f);
                        }
                    } catch (g) {
                        break;
                    }
                }
                return !1;
            }
            function fn(a, b, c) {
                if (!a || !b)
                    return !1;
                b = Qf(Pf(a), -b.left, -b.top);
                a = (b.left + b.right) / 2;
                b = (b.top + b.bottom) / 2;
                var d = lg();
                Bf(d.top) && d.top && d.top.document && (d = d.top);
                if (!Ul(d))
                    return !1;
                a = d.document.elementFromPoint(a, b);
                if (!a)
                    return !1;
                b = (b = (b = df(c)) && b.defaultView && b.defaultView.frameElement) && en(b, a);
                d = a === c;
                a = !d && a && tf(a, function (e) {
                    return e === c;
                });
                return !(b || d || a);
            }
            function gn(a, b, c, d) {
                return O().l ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? Bl(208, function () {
                    return fn(a, b, c);
                }) : !1;
            }
            ;
            var hn = new E(0, 0, 0, 0), jn = function (a, b, c) {
                    K.call(this);
                    this.position = Pf(hn);
                    this.bc = this.Vb();
                    this.Ic = -2;
                    this.qf = Date.now();
                    this.Od = -1;
                    this.Yb = b;
                    this.Xb = null;
                    this.Ub = !1;
                    this.hc = null;
                    this.opacity = -1;
                    this.jf = c;
                    this.Pd = this.Jc = Ja;
                    this.ra = new Wk();
                    this.ra.Sa = a;
                    this.ra.g = a;
                    this.$a = !1;
                    this.Wa = {
                        Lc: null,
                        Kc: null
                    };
                    this.Md = !0;
                    this.Jb = null;
                    this.sb = this.Ue = !1;
                    N().C++;
                    this.oa = this.Bc();
                    this.Nd = -1;
                    this.ba = null;
                    this.Pe = !1;
                    a = this.U = new Nk();
                    Ok(a, 'od', zk);
                    Ik(Ok(a, 'opac', Ck));
                    Ik(Ok(a, 'sbeos', Ck));
                    Ik(Ok(a, 'prf', Ck));
                    Ik(Ok(a, 'mwt', Ck));
                    Ok(a, 'iogeo', Ck);
                    (a = this.ra.Sa) && a.getAttribute && !/-[a-z]/.test('googleAvInapp') && (Vk && a.dataset ? 'googleAvInapp' in a.dataset : a.hasAttribute ? a.hasAttribute('data-' + ed()) : a.getAttribute('data-' + ed())) && (O().h = !0);
                    1 == this.jf ? Qk(this.U, 'od', 1) : Qk(this.U, 'od', 0);
                };
            t(jn, K);
            l = jn.prototype;
            l.N = function () {
                this.ra.g && (this.Wa.Lc && (Xe(this.ra.g, 'mouseover', this.Wa.Lc), this.Wa.Lc = null), this.Wa.Kc && (Xe(this.ra.g, 'mouseout', this.Wa.Kc), this.Wa.Kc = null));
                this.Jb && this.Jb.W();
                this.ba && this.ba.W();
                delete this.bc;
                delete this.Jc;
                delete this.Pd;
                delete this.ra.Sa;
                delete this.ra.g;
                delete this.Wa;
                delete this.Jb;
                delete this.ba;
                delete this.U;
                K.prototype.N.call(this);
            };
            l.Ya = function () {
                return this.ba ? this.ba.g : this.position;
            };
            l.Oc = function (a) {
                N().Oc(a);
            };
            l.Ca = function () {
                return !1;
            };
            l.Vb = function () {
                return new $m();
            };
            l.sa = function () {
                return this.bc;
            };
            var kn = function (a, b) {
                    b != a.sb && (a.sb = b, a = O(), b ? a.A++ : 0 < a.A && a.A--);
                }, ln = function (a, b) {
                    if (a.ba) {
                        if (b.fa() === a.ba.fa())
                            return;
                        a.ba.W();
                        a.ba = null;
                    }
                    b = b.create(a.ra.g, a.U, a.Ca());
                    if (b = null != b && b.sc() ? b : null)
                        a.ba = b;
                }, mn = function (a, b, c) {
                    if (!a.Xb || -1 == a.Yb || -1 === b.h || -1 === a.Xb.h)
                        return 0;
                    a = b.h - a.Xb.h;
                    return a > c ? 0 : a;
                };
            jn.prototype.zd = function (a) {
                return mn(this, a, 10000);
            };
            var nn = function (a, b, c) {
                    if (a.ba) {
                        a.ba.La();
                        var d = a.ba.I, e = d.o, f = e.g;
                        if (null != d.A) {
                            var g = d.l;
                            a.hc = new af(g.left - f.left, g.top - f.top);
                        }
                        f = a.qc() ? Math.max(d.g, d.B) : d.g;
                        g = {};
                        null !== e.volume && (g.volume = e.volume);
                        e = a.zd(d);
                        a.Xb = d;
                        a.Xc(f, b, c, !1, g, e, d.C);
                    }
                }, on = function (a) {
                    if (a.Ub && a.Jb) {
                        var b = 1 == Rk(a.U, 'od'), c = O().g, d = a.Jb, e = new bf(c.getWidth(), c.getHeight());
                        c = a.qc();
                        a = {
                            mf: a.ba ? a.ba.fa() : 'ns',
                            hc: a.hc,
                            vf: e,
                            qc: c,
                            Z: a.oa.Z,
                            rf: b
                        };
                        if (b = d.h) {
                            b.La();
                            e = b.I;
                            var f = e.o.g, g = null, h = null;
                            null != e.A && f && (g = e.l, g = new af(g.left - f.left, g.top - f.top), h = new bf(f.right - f.left, f.bottom - f.top));
                            c = {
                                mf: b.fa(),
                                hc: g,
                                vf: h,
                                qc: c,
                                rf: !1,
                                Z: c ? Math.max(e.g, e.B) : e.g
                            };
                        } else
                            c = null;
                        c && Lm(d, a, c);
                    }
                };
            l = jn.prototype;
            l.Xc = function (a, b, c, d, e, f, g) {
                this.$a || (this.Ub && (a = this.vc(a, c, e, g), d = d && this.oa.Z >= (this.Za() ? 0.3 : 0.5), this.Yc(f, a, d), this.Yb = b, 0 < a.Z && -1 === this.Nd && (this.Nd = b), -1 == this.Od && this.ab() && (this.Od = b), -2 == this.Ic && (this.Ic = dn(this.Ya()) ? a.Z : -1), this.oa = a), this.Jc(this));
            };
            l.Yc = function (a, b, c) {
                this.sa().J(a, b, this.oa, c);
            };
            l.Bc = function () {
                return new Bk();
            };
            l.vc = function (a, b, c, d) {
                c = this.Bc();
                c.g = b;
                b = fl().h;
                b = 0 === Fg(Qe) ? -1 : b.isVisible() ? 0 : 1;
                c.h = b;
                c.Z = this.xc(a);
                c.Za = this.Za();
                c.pa = d;
                return c;
            };
            l.xc = function (a) {
                return 0 === this.opacity && 1 === Rk(this.U, 'opac') ? 0 : a;
            };
            l.Za = function () {
                return !1;
            };
            l.qc = function () {
                return this.Pe || this.Ue;
            };
            l.wa = function () {
                return 0;
            };
            l.ab = function () {
                return this.bc.ab();
            };
            var pn = function (a, b, c) {
                b && (a.Jc = b);
                c && (a.Pd = c);
            };
            var qn = 'StopIteration' in u ? u.StopIteration : {
                    message: 'StopIteration',
                    stack: ''
                }, rn = function () {
                };
            rn.prototype.next = function () {
                return rn.prototype.g.call(this);
            };
            rn.prototype.g = function () {
                throw qn;
            };
            rn.prototype.lb = function () {
                return this;
            };
            var sn = function () {
                    this.o = this.g = this.l = this.h = this.B = 0;
                }, tn = function (a) {
                    var b = {};
                    b = (b.ptlt = Wa() - a.B, b);
                    var c = a.h;
                    c && (b.pnk = c);
                    (c = a.l) && (b.pnc = c);
                    (c = a.o) && (b.pnmm = c);
                    (a = a.g) && (b.pns = a);
                    return b;
                };
            var un = function () {
                Bk.call(this);
                this.l = !1;
                this.volume = void 0;
                this.paused = !1;
                this.mediaTime = -1;
            };
            t(un, Bk);
            var vn = function (a) {
                return dm(a.volume) && 0 < a.volume;
            };
            var wn = function () {
                    var a = {};
                    this.h = (a.vs = [
                        1,
                        0
                    ], a.vw = [
                        0,
                        1
                    ], a.am = [
                        2,
                        2
                    ], a.a = [
                        4,
                        4
                    ], a.f = [
                        8,
                        8
                    ], a.bm = [
                        16,
                        16
                    ], a.b = [
                        32,
                        32
                    ], a.avw = [
                        0,
                        64
                    ], a.avs = [
                        64,
                        0
                    ], a.pv = [
                        256,
                        256
                    ], a.gdr = [
                        0,
                        512
                    ], a.p = [
                        0,
                        1024
                    ], a.r = [
                        0,
                        2048
                    ], a.m = [
                        0,
                        4096
                    ], a.um = [
                        0,
                        8192
                    ], a.ef = [
                        0,
                        16384
                    ], a.s = [
                        0,
                        32768
                    ], a.pmx = [
                        0,
                        16777216
                    ], a);
                    this.g = {};
                    for (var b in this.h)
                        0 < this.h[b][1] && (this.g[b] = 0);
                    this.l = 0;
                }, xn = function (a, b) {
                    var c = a.h[b], d = c[1];
                    a.l += c[0];
                    0 < d && 0 == a.g[b] && (a.g[b] = 1);
                }, yn = function (a) {
                    var b = Lb(a.h), c = 0, d;
                    for (d in a.g)
                        ub(b, d) && 1 == a.g[d] && (c += a.h[d][1], a.g[d] = 2);
                    return c;
                }, zn = function (a) {
                    var b = 0, c;
                    for (c in a.g) {
                        var d = a.g[c];
                        if (1 == d || 2 == d)
                            b += a.h[c][1];
                    }
                    return b;
                };
            var An = function () {
                    this.h = this.g = 0;
                }, Bn = function (a, b, c) {
                    32 <= b || (a.h & 1 << b && !c ? a.g &= ~(1 << b) : a.h & 1 << b || !c || (a.g |= 1 << b), a.h |= 1 << b);
                };
            var Cn = function () {
                $m.call(this);
                this.l = new Mm();
                this.T = this.D = this.L = 0;
                this.I = -1;
                this.da = new Mm();
                this.B = new Mm();
                this.g = new Pm();
                this.A = this.o = -1;
                this.F = new Mm();
                this.$ = 2000;
                this.R = new An();
                this.Y = new An();
                this.X = new An();
            };
            t(Cn, $m);
            var Dn = function (a, b, c) {
                var d = a.T;
                Jl || c || -1 == a.I || (d += b - a.I);
                return d;
            };
            Cn.prototype.J = function (a, b, c, d) {
                if (!b.paused) {
                    $m.prototype.J.call(this, a, b, c, d);
                    var e = vn(b) && vn(c), f = 0.5 <= (d ? Math.min(b.Z, c.Z) : c.Z);
                    dm(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
                    f && (this.L += a, this.D += e ? a : 0);
                    Ym(this.g, b.Z, c.Z, b.g, a, d, e);
                    Nm(this.l, !0, a);
                    Nm(this.B, e, a);
                    Nm(this.F, c.l, a);
                    Nm(this.da, e && !f, a);
                    a = Math.floor(b.mediaTime / 1000);
                    Bn(this.R, a, b.isVisible());
                    Bn(this.Y, a, 1 <= b.Z);
                    Bn(this.X, a, vn(b));
                }
            };
            var En = function () {
                this.g = !1;
            };
            var Fn = function (a, b) {
                this.g = !1;
                this.h = a;
                this.J = b;
                this.l = 0;
            };
            t(Fn, En);
            var Gn = function (a, b) {
                return a.o(b) ? (b = a.J.report(a.h, b), a.l |= b, 0 == b) : !1;
            };
            Fn.prototype.o = function () {
                return !0;
            };
            Fn.prototype.A = function () {
                return !1;
            };
            Fn.prototype.B = function () {
                var a = this, b = Pb(function (c) {
                        return c == a.h;
                    });
                return Sl[b].toString();
            };
            Fn.prototype.toString = function () {
                var a = '';
                this.A() && (a += 'c');
                this.g && (a += 's');
                0 < this.l && (a += ':' + this.l);
                return this.B() + a;
            };
            var Hn = function (a, b, c, d) {
                wm.call(this, a, b, c, d);
            };
            t(Hn, wm);
            l = Hn.prototype;
            l.wc = function () {
                if (this.l) {
                    var a = this.l, b = this.h.g.la;
                    try {
                        try {
                            var c = bm(a.getBoundingClientRect());
                        } catch (n) {
                            c = new E(0, 0, 0, 0);
                        }
                        var d = c.right - c.left, e = c.bottom - c.top, f = fg(a, b), g = f.x, h = f.y;
                        var k = new E(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g));
                    } catch (n) {
                        k = Pf(bn);
                    }
                    this.g = k;
                }
            };
            l.od = function () {
                this.A = this.h.l.g;
            };
            l.Cd = function (a) {
                return gn(a, this.A, this.l, 1 == Rk(this.U, 'od'));
            };
            l.pd = function () {
                this.timestamp = Kl();
            };
            l.La = function () {
                this.pd();
                this.wc();
                if (this.l && 'number' === typeof this.l.videoWidth && 'number' === typeof this.l.videoHeight) {
                    var a = this.l;
                    var b = new bf(a.videoWidth, a.videoHeight);
                    a = this.g;
                    var c = a.getWidth(), d = a.getHeight(), e = b.width;
                    b = b.height;
                    0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Pf(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
                    this.g = a;
                }
                this.od();
                a = this.g;
                c = this.A;
                a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new E(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new E(0, 0, 0, 0);
                c = a.top >= a.bottom || a.left >= a.right ? new E(0, 0, 0, 0) : a;
                a = this.h.l;
                b = e = d = 0;
                0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.Cd(c) ? c = new E(0, 0, 0, 0) : (d = O().B, b = new E(0, d.height, d.width, 0), d = cn(c, this.g), e = cn(c, O().g), b = cn(c, b)));
                c = c.top >= c.bottom || c.left >= c.right ? new E(0, 0, 0, 0) : Qf(c, -this.g.left, -this.g.top);
                lm() || (e = d = 0);
                this.I = new Nl(a, this.g, c, d, e, this.timestamp, b);
            };
            l.fa = function () {
                return this.h.fa();
            };
            var In = new E(0, 0, 0, 0), Jn = function (a, b, c) {
                    wm.call(this, null, a, b, c);
                    this.C = a.Gc();
                    this.B = 0;
                };
            t(Jn, Hn);
            l = Jn.prototype;
            l.sc = function () {
                this.o();
                return !0;
            };
            l.Pa = function () {
                Hn.prototype.La.call(this);
            };
            l.pd = function () {
            };
            l.wc = function () {
            };
            l.La = function () {
                this.o();
                Hn.prototype.La.call(this);
            };
            l.rb = function (a) {
                a = a.Gc();
                a !== this.C && (a ? this.o() : (O().g = new E(0, 0, 0, 0), this.g = new E(0, 0, 0, 0), this.A = new E(0, 0, 0, 0), this.timestamp = -1));
                this.C = a;
            };
            function Kn(a) {
                return [
                    a.top,
                    a.left,
                    a.bottom,
                    a.right
                ];
            }
            var Ln = {}, Mn = (Ln.firstquartile = 0, Ln.midpoint = 1, Ln.thirdquartile = 2, Ln.complete = 3, Ln), Nn = function (a, b, c, d, e, f) {
                    e = void 0 === e ? null : e;
                    f = void 0 === f ? [] : f;
                    jn.call(this, b, c, d);
                    this.yc = 0;
                    this.ha = {};
                    this.ga = new wn();
                    this.Qd = {};
                    this.ka = '';
                    this.Ta = null;
                    this.ua = !1;
                    this.g = [];
                    this.bb = e;
                    this.A = f;
                    this.B = null;
                    this.l = -1;
                    this.V = this.F = void 0;
                    this.K = this.H = 0;
                    this.R = -1;
                    this.aa = this.$ = !1;
                    this.M = this.C = this.h = this.wb = this.da = 0;
                    new Pm();
                    this.T = this.X = 0;
                    this.Y = -1;
                    this.ea = 0;
                    this.D = Ja;
                    this.L = [this.Vb()];
                    this.va = 2;
                    this.gb = {};
                    this.gb.pause = 'p';
                    this.gb.resume = 'r';
                    this.gb.skip = 's';
                    this.gb.mute = 'm';
                    this.gb.unmute = 'um';
                    this.gb.exitfullscreen = 'ef';
                    this.o = null;
                };
            t(Nn, jn);
            Nn.prototype.Ca = function () {
                return !0;
            };
            var On = function (a) {
                return void 0 === a ? a : Number(a) ? Xl(a, 3) : 0;
            };
            l = Nn.prototype;
            l.zd = function (a) {
                return mn(this, a, Math.max(10000, this.l / 3));
            };
            l.Xc = function (a, b, c, d, e, f, g) {
                var h = this, k = this.D(this) || {};
                Vb(k, e);
                this.l = k.duration || this.l;
                this.F = k.isVpaid || this.F;
                this.V = k.isYouTube || this.V;
                e = Pn(this, b);
                1 === Qn(this) && (f = e);
                jn.prototype.Xc.call(this, a, b, c, d, k, f, g);
                this.bb && this.bb.g && y(this.A, function (n) {
                    n.g || (n.g = Gn(n, h));
                });
            };
            l.Yc = function (a, b, c) {
                jn.prototype.Yc.call(this, a, b, c);
                Rn(this).J(a, b, this.oa, c);
                this.aa = vn(this.oa) && vn(b);
                -1 == this.R && this.$ && (this.R = this.sa().l.g);
                this.ga.l = 0;
                a = this.ab();
                b.isVisible() && xn(this.ga, 'vs');
                a && xn(this.ga, 'vw');
                dm(b.volume) && xn(this.ga, 'am');
                vn(b) && xn(this.ga, 'a');
                this.sb && xn(this.ga, 'f');
                -1 != b.h && (xn(this.ga, 'bm'), 1 == b.h && xn(this.ga, 'b'));
                vn(b) && b.isVisible() && xn(this.ga, 'avs');
                this.aa && a && xn(this.ga, 'avw');
                0 < b.Z && xn(this.ga, 'pv');
                Sn(this, this.sa().l.g, !0) && xn(this.ga, 'gdr');
                2000 <= Vm(this.sa().h, 1) && xn(this.ga, 'pmx');
            };
            l.Vb = function () {
                return new Cn();
            };
            l.sa = function () {
                return this.bc;
            };
            var Rn = function (a, b) {
                return a.L[null != b && b < a.L.length ? b : a.L.length - 1];
            };
            Nn.prototype.Bc = function () {
                return new un();
            };
            Nn.prototype.vc = function (a, b, c, d) {
                a = jn.prototype.vc.call(this, a, b, c, void 0 === d ? -1 : d);
                a.l = this.sb;
                a.paused = 2 == this.ea;
                a.volume = c.volume;
                dm(a.volume) || (this.da++, b = this.oa, dm(b.volume) && (a.volume = b.volume));
                c = c.currentTime;
                a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
                return a;
            };
            var Qn = function (a) {
                    var b = !!Rk(N().U, 'umt');
                    return a.F || !b && !a.V ? 0 : 1;
                }, Pn = function (a, b) {
                    2 == a.ea ? b = 0 : -1 == a.Yb ? b = 0 : (b -= a.Yb, b = b > Math.max(10000, a.l / 3) ? 0 : b);
                    var c = a.D(a) || {};
                    c = void 0 !== c.currentTime ? c.currentTime : a.H;
                    var d = c - a.H, e = 0;
                    0 <= d ? (a.K += b, a.T += Math.max(b - d, 0), e = Math.min(d, a.K)) : a.X += Math.abs(d);
                    0 != d && (a.K = 0);
                    -1 == a.Y && 0 < d && (a.Y = 0 <= Il ? Kl() - Il : -1);
                    a.H = c;
                    return e;
                };
            Nn.prototype.xc = function (a) {
                return O().J ? 0 : this.sb ? 1 : jn.prototype.xc.call(this, a);
            };
            Nn.prototype.wa = function () {
                return 1;
            };
            Nn.prototype.getDuration = function () {
                return this.l;
            };
            var Tn = function (a, b) {
                    qb(a.A, function (c) {
                        return c.h == b.h;
                    }) || a.A.push(b);
                }, Sn = function (a, b, c) {
                    return 15000 <= b ? !0 : a.$ ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.R ? b >= a.R : !1 : !1;
                }, Un = function (a) {
                    var b = {}, c = O();
                    b.insideIframe = c.l;
                    b.unmeasurable = a.$a;
                    b.position = a.Ya();
                    b.exposure = a.oa.Z;
                    b.documentSize = c.o;
                    b.viewportSize = new bf(c.g.getWidth(), c.g.getHeight());
                    null != a.o && (b.presenceData = a.o);
                    b.screenShare = a.oa.pa;
                    return b;
                }, Vn = function (a) {
                    var b = Xl(a.oa.Z, 2), c = a.ga.l, d = a.oa, e = Rn(a), f = On(e.o), g = On(e.A), h = On(d.volume), k = Xl(e.C, 2), n = Xl(e.H, 2), m = Xl(d.Z, 2), v = Xl(e.K, 2), r = Xl(e.M, 2);
                    d = Xl(d.pa, 2);
                    a = Pf(a.Ya());
                    a.round();
                    e = an(e, !1);
                    return {
                        uf: b,
                        Eb: c,
                        cc: f,
                        Zb: g,
                        Ab: h,
                        dc: k,
                        $b: n,
                        Z: m,
                        ec: v,
                        ac: r,
                        pa: d,
                        position: a,
                        fc: e
                    };
                }, Xn = function (a, b) {
                    Wn(a.g, b, function () {
                        return {
                            uf: 0,
                            Eb: void 0,
                            cc: -1,
                            Zb: -1,
                            Ab: -1,
                            dc: -1,
                            $b: -1,
                            Z: -1,
                            ec: -1,
                            ac: -1,
                            pa: -1,
                            position: void 0,
                            fc: []
                        };
                    });
                    a.g[b] = Vn(a);
                }, Wn = function (a, b, c) {
                    for (var d = a.length; d < b + 1;)
                        a.push(c()), d++;
                }, $n = function (a, b, c) {
                    var d = a.Qd[b];
                    if (null != d)
                        return d;
                    d = Yn(a, b);
                    var e = Pb(function (f) {
                        return f == b;
                    });
                    a = Zn(a, d, d, c, Mn[Qb[e]]);
                    'fully_viewable_audible_half_duration_impression' == b && (a.std = 'csm');
                    return a;
                }, ao = function (a, b, c) {
                    var d = [b];
                    if (a != b || c != b)
                        d.unshift(a), d.push(c);
                    return d;
                }, Zn = function (a, b, c, d, e) {
                    if (a.$a)
                        return { 'if': 0 };
                    var f = Pf(a.Ya());
                    f.round();
                    var g = O(), h = N(), k = a.sa(), n = a.ba ? a.ba.fa() : 'ns', m = {};
                    m['if'] = g.l ? 1 : void 0;
                    m.sdk = a.B ? a.B : void 0;
                    m.t = a.qf;
                    m.p = [
                        f.top,
                        f.left,
                        f.bottom,
                        f.right
                    ];
                    m.tos = Rm(k.h, !1);
                    m.mtos = an(k);
                    m.mcvt = k.V.l;
                    m.ps = void 0;
                    m.vht = Dn(k, Kl(), 2 == a.ea);
                    m.mut = k.da.l;
                    m.a = On(a.oa.volume);
                    m.mv = On(k.A);
                    m.fs = a.sb ? 1 : 0;
                    m.ft = k.F.g;
                    m.at = k.B.g;
                    m.as = 0 < k.o ? 1 : 0;
                    m.atos = Rm(k.g);
                    m.ssb = Rm(k.aa, !1);
                    m.amtos = Um(k.g, !1);
                    m.uac = a.da;
                    m.vpt = k.l.g;
                    'nio' == n && (m.nio = 1, m.avms = 'nio');
                    m.gmm = '4';
                    m.gdr = Sn(a, k.l.g, !0) ? 1 : 0;
                    m.efpf = a.va;
                    if ('gsv' == n || 'nis' == n)
                        f = a.ba, 0 < f.B && (m.nnut = f.B);
                    m.tcm = Qn(a);
                    m.nmt = a.X;
                    m.bt = a.T;
                    m.pst = a.Y;
                    m.vpaid = a.F;
                    m.dur = a.l;
                    m.vmtime = a.H;
                    m.is = a.ga.l;
                    1 <= a.g.length && (m.i0 = a.g[0].Eb, m.a0 = [a.g[0].Ab], m.c0 = [a.g[0].Z], m.ss0 = [a.g[0].pa], f = a.g[0].position, m.p0 = f ? Kn(f) : void 0);
                    2 <= a.g.length && (m.i1 = a.g[1].Eb, m.a1 = ao(a.g[1].cc, a.g[1].Ab, a.g[1].Zb), m.c1 = ao(a.g[1].dc, a.g[1].Z, a.g[1].$b), m.ss1 = ao(a.g[1].ec, a.g[1].pa, a.g[1].ac), f = a.g[1].position, m.p1 = f ? Kn(f) : void 0, m.mtos1 = a.g[1].fc);
                    3 <= a.g.length && (m.i2 = a.g[2].Eb, m.a2 = ao(a.g[2].cc, a.g[2].Ab, a.g[2].Zb), m.c2 = ao(a.g[2].dc, a.g[2].Z, a.g[2].$b), m.ss2 = ao(a.g[2].ec, a.g[2].pa, a.g[2].ac), f = a.g[2].position, m.p2 = f ? Kn(f) : void 0, m.mtos2 = a.g[2].fc);
                    4 <= a.g.length && (m.i3 = a.g[3].Eb, m.a3 = ao(a.g[3].cc, a.g[3].Ab, a.g[3].Zb), m.c3 = ao(a.g[3].dc, a.g[3].Z, a.g[3].$b), m.ss3 = ao(a.g[3].ec, a.g[3].pa, a.g[3].ac), f = a.g[3].position, m.p3 = f ? Kn(f) : void 0, m.mtos3 = a.g[3].fc);
                    m.cs = zn(a.ga);
                    b && (m.ic = yn(a.ga), m.dvpt = k.l.h, m.dvs = Wm(k.h, 0.5), m.dfvs = Wm(k.h, 1), m.davs = Wm(k.g, 0.5), m.dafvs = Wm(k.g, 1), c && (k.l.h = 0, Xm(k.h), Xm(k.g)), a.ab() && (m.dtos = k.L, m.dav = k.D, m.dtoss = a.yc + 1, c && (k.L = 0, k.D = 0, a.yc++)), m.dat = k.B.h, m.dft = k.F.h, c && (k.B.h = 0, k.F.h = 0));
                    m.ps = [
                        g.o.width,
                        g.o.height
                    ];
                    m.bs = [
                        g.g.getWidth(),
                        g.g.getHeight()
                    ];
                    m.scs = [
                        g.B.width,
                        g.B.height
                    ];
                    m.dom = g.domain;
                    a.wb && (m.vds = a.wb);
                    if (0 < a.A.length || a.bb)
                        b = zb(a.A), a.bb && b.push(a.bb), m.pings = ob(b, function (v) {
                            return v.toString();
                        });
                    b = ob(nb(a.A, function (v) {
                        return v.A();
                    }), function (v) {
                        return v.B();
                    });
                    Ab(b);
                    m.ces = b;
                    a.h && (m.vmer = a.h);
                    a.C && (m.vmmk = a.C);
                    a.M && (m.vmiec = a.M);
                    m.avms = a.ba ? a.ba.fa() : 'ns';
                    a.ba && Vb(m, a.ba.Ma());
                    d ? (m.c = Xl(a.oa.Z, 2), m.ss = Xl(a.oa.pa, 2)) : m.tth = Kl() - Hl;
                    m.mc = Xl(k.H, 2);
                    m.nc = Xl(k.C, 2);
                    m.mv = On(k.A);
                    m.nv = On(k.o);
                    m.lte = Xl(a.Ic, 2);
                    d = Rn(a, e);
                    an(k);
                    m.qmtos = an(d);
                    m.qnc = Xl(d.C, 2);
                    m.qmv = On(d.A);
                    m.qnv = On(d.o);
                    m.qas = 0 < d.o ? 1 : 0;
                    m.qi = a.ka;
                    m.avms || (m.avms = 'geo');
                    m.psm = k.R.h;
                    m.psv = k.R.g;
                    m.psfv = k.Y.g;
                    m.psa = k.X.g;
                    h = Tk(h.U);
                    h.length && (m.veid = h);
                    a.o && Vb(m, tn(a.o));
                    return m;
                }, Yn = function (a, b) {
                    if (ub(Rl, b))
                        return !0;
                    var c = a.ha[b];
                    return void 0 !== c ? (a.ha[b] = !0, !c) : !1;
                };
            var bo = Wa(), fo = function () {
                    this.g = {};
                    var a = D();
                    co(this, a, document);
                    var b = eo();
                    try {
                        if ('1' == b) {
                            for (var c = a.parent; c != a.top; c = c.parent)
                                co(this, c, c.document);
                            co(this, a.top, a.top.document);
                        }
                    } catch (d) {
                    }
                }, eo = function () {
                    var a = document.documentElement;
                    try {
                        if (!Bf(D().top))
                            return '2';
                        var b = [], c = D(a.ownerDocument);
                        for (a = c; a != c.top; a = a.parent)
                            if (a.frameElement)
                                b.push(a.frameElement);
                            else
                                break;
                        return b && 0 != b.length ? '1' : '0';
                    } catch (d) {
                        return '2';
                    }
                }, co = function (a, b, c) {
                    Wl(c, 'mousedown', function () {
                        return go(a);
                    }, 301);
                    Wl(b, 'scroll', function () {
                        return ho(a);
                    }, 302);
                    Wl(c, 'touchmove', function () {
                        return io(a);
                    }, 303);
                    Wl(c, 'mousemove', function () {
                        return jo(a);
                    }, 304);
                    Wl(c, 'keydown', function () {
                        return ko(a);
                    }, 305);
                }, go = function (a) {
                    Eb(a.g, function (b) {
                        100000 < b.l || ++b.l;
                    });
                }, ho = function (a) {
                    Eb(a.g, function (b) {
                        100000 < b.g || ++b.g;
                    });
                }, io = function (a) {
                    Eb(a.g, function (b) {
                        100000 < b.g || ++b.g;
                    });
                }, ko = function (a) {
                    Eb(a.g, function (b) {
                        100000 < b.h || ++b.h;
                    });
                }, jo = function (a) {
                    Eb(a.g, function (b) {
                        100000 < b.o || ++b.o;
                    });
                };
            var lo = function () {
                    this.g = [];
                    this.h = [];
                }, mo = function (a, b) {
                    return rb(a.g, function (c) {
                        return c.ka == b;
                    });
                }, no = function (a, b) {
                    return b ? rb(a.g, function (c) {
                        return c.ra.Sa == b;
                    }) : null;
                }, oo = function (a, b) {
                    return rb(a.h, function (c) {
                        return 2 == c.wa() && c.ka == b;
                    });
                }, qo = function () {
                    var a = po;
                    return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : yb(a.h, a.g);
                };
            lo.prototype.reset = function () {
                this.g = [];
                this.h = [];
            };
            var ro = function (a, b) {
                    a = 1 == b.wa() ? a.g : a.h;
                    var c = sb(a, function (d) {
                        return d == b;
                    });
                    return -1 != c ? (a.splice(c, 1), b.ba && b.ba.Kb(), b.W(), !0) : !1;
                }, so = function (a) {
                    var b = po;
                    if (ro(b, a)) {
                        switch (a.wa()) {
                        case 0:
                            var c = function () {
                                return null;
                            };
                        case 2:
                            c = function () {
                                return oo(b, a.ka);
                            };
                            break;
                        case 1:
                            c = function () {
                                return mo(b, a.ka);
                            };
                        }
                        for (var d = c(); d; d = c())
                            ro(b, d);
                    }
                }, to = function (a) {
                    var b = po;
                    a = nb(a, function (c) {
                        return !no(b, c.ra.Sa);
                    });
                    b.g.push.apply(b.g, fa(a));
                }, uo = function (a) {
                    var b = po, c = [];
                    y(a, function (d) {
                        qb(b.g, function (e) {
                            return e.ra.Sa === d.ra.Sa && e.ka === d.ka;
                        }) || (b.g.push(d), c.push(d));
                    });
                }, po = F(lo);
            var vo = function () {
                    this.g = this.h = null;
                }, wo = function (a, b) {
                    if (null == a.h)
                        return !1;
                    var c = function (d, e) {
                        b(d, e);
                    };
                    a.g = rb(a.h, function (d) {
                        return null != d && d.ed();
                    });
                    a.g && (a.g.init(c) ? sm(a.g.g) : b(a.g.g.qb(), a.g));
                    return null != a.g;
                };
            var yo = function (a) {
                a = xo(a);
                xm.call(this, a.length ? a[a.length - 1] : new om(C, 0));
                this.l = a;
                this.h = null;
            };
            t(yo, xm);
            l = yo.prototype;
            l.fa = function () {
                return (this.h ? this.h : this.g).fa();
            };
            l.Ma = function () {
                return (this.h ? this.h : this.g).Ma();
            };
            l.Ga = function () {
                return (this.h ? this.h : this.g).Ga();
            };
            l.init = function (a) {
                var b = !1;
                y(this.l, function (c) {
                    c.initialize() && (b = !0);
                });
                b && (this.o = a, rm(this.g, this));
                return b;
            };
            l.W = function () {
                y(this.l, function (a) {
                    a.W();
                });
                xm.prototype.W.call(this);
            };
            l.ed = function () {
                return qb(this.l, function (a) {
                    return a.D();
                });
            };
            l.zb = function () {
                return qb(this.l, function (a) {
                    return a.D();
                });
            };
            l.Lb = function (a, b, c) {
                return new Hn(a, this.g, b, c);
            };
            l.Pa = function (a) {
                this.h = a.h;
            };
            var xo = function (a) {
                if (!a.length)
                    return [];
                a = nb(a, function (c) {
                    return null != c && c.D();
                });
                for (var b = 1; b < a.length; b++)
                    rm(a[b - 1], a[b]);
                return a;
            };
            var zo = {
                    threshold: [
                        0,
                        0.3,
                        0.5,
                        0.75,
                        1
                    ]
                }, Ao = function (a, b, c, d) {
                    wm.call(this, a, b, c, d);
                    this.D = this.J = this.C = this.B = this.o = null;
                };
            t(Ao, Hn);
            Ao.prototype.sc = function () {
                var a = this;
                this.D || (this.D = Kl());
                if (Bl(298, function () {
                        return Bo(a);
                    }))
                    return !0;
                qm(this.h, 'msf');
                return !1;
            };
            Ao.prototype.Kb = function () {
                if (this.o && this.l)
                    try {
                        this.o.unobserve(this.l), this.B ? (this.B.unobserve(this.l), this.B = null) : this.C && (this.C.disconnect(), this.C = null);
                    } catch (a) {
                    }
            };
            var Co = function (a) {
                    return a.o && a.o.takeRecords ? a.o.takeRecords() : [];
                }, Bo = function (a) {
                    if (!a.l)
                        return !1;
                    var b = a.l, c = a.h.g.la, d = N().g.g;
                    a.o = new c.IntersectionObserver(ml(d, function (e) {
                        return Do(a, e);
                    }), zo);
                    d = ml(d, function () {
                        a.o.unobserve(b);
                        a.o.observe(b);
                        Do(a, Co(a));
                    });
                    c.ResizeObserver ? (a.B = new c.ResizeObserver(d), a.B.observe(b)) : c.MutationObserver && (a.C = new u.MutationObserver(d), a.C.observe(b, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }));
                    a.o.observe(b);
                    Do(a, Co(a));
                    return !0;
                }, Do = function (a, b) {
                    try {
                        if (b.length) {
                            a.J || (a.J = Kl());
                            var c = Eo(b), d = fg(a.l, a.h.g.la), e = d.x, f = d.y;
                            a.g = new E(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                            var g = bm(c.intersectionRect);
                            a.A = Qf(g, a.g.left - g.left, a.g.top - g.top);
                        }
                    } catch (h) {
                        a.Kb(), Dl(299, h);
                    }
                }, Eo = function (a) {
                    return pb(a, function (b, c) {
                        return b.time > c.time ? b : c;
                    }, a[0]);
                };
            l = Ao.prototype;
            l.La = function () {
                var a = Co(this);
                0 < a.length && Do(this, a);
                Hn.prototype.La.call(this);
            };
            l.wc = function () {
            };
            l.Cd = function () {
                return !1;
            };
            l.od = function () {
            };
            l.Ma = function () {
                var a = {};
                return Object.assign(this.h.Ma(), (a.niot_obs = this.D, a.niot_cbk = this.J, a));
            };
            l.fa = function () {
                return 'nio';
            };
            var Fo = function (a) {
                a = void 0 === a ? C : a;
                xm.call(this, new om(a, 2));
            };
            t(Fo, xm);
            Fo.prototype.fa = function () {
                return 'nio';
            };
            Fo.prototype.zb = function () {
                return !O().h && null != this.g.g.la.IntersectionObserver;
            };
            Fo.prototype.Lb = function (a, b, c) {
                return new Ao(a, this.g, b, c);
            };
            var Ho = function () {
                var a = Go();
                om.call(this, C.top, a, 'geo');
            };
            t(Ho, om);
            Ho.prototype.Y = function () {
                return O().g;
            };
            Ho.prototype.D = function () {
                var a = Go();
                this.I !== a && (this.g != this && a > this.g.I && (this.g = this, pm(this)), this.I = a);
                return 2 == a;
            };
            var Go = function () {
                N();
                var a = O();
                return a.l || a.h ? 0 : 2;
            };
            var Io = function () {
            };
            var Jo = function () {
                    this.done = !1;
                    this.g = {
                        oe: 0,
                        ld: 0,
                        xh: 0,
                        ud: 0,
                        Ec: -1,
                        we: 0,
                        ve: 0,
                        xe: 0
                    };
                    this.B = null;
                    this.A = !1;
                    this.l = null;
                    this.C = 0;
                    this.h = new mm(this);
                }, Mo = function () {
                    var a = Ko;
                    a.A || (a.A = !0, Lo(a, function (b) {
                        for (var c = [], d = 0; d < arguments.length; ++d)
                            c[d - 0] = arguments[d];
                        return a.o.apply(a, fa(c));
                    }), a.o());
                };
            Jo.prototype.sample = function () {
                No(this, qo(), !1);
            };
            var Oo = function () {
                    F(Io);
                    var a = F(vo);
                    null != a.g && a.g.g ? sm(a.g.g) : hm(O());
                }, No = function (a, b, c) {
                    if (!a.done && (a.h.cancel(), 0 != b.length)) {
                        a.l = null;
                        try {
                            Oo();
                            var d = Kl(), e = N();
                            e.A = d;
                            if (null != F(vo).g)
                                for (e = 0; e < b.length; e++)
                                    nn(b[e], d, c);
                            else
                                sl(ul, '', {
                                    strategy_not_selected: 1,
                                    bin: e.h
                                }, !0, void 0);
                            for (d = 0; d < b.length; d++)
                                on(b[d]);
                            ++a.g.ud;
                            N();
                        } finally {
                            c ? y(b, function (f) {
                                f.oa.Z = 0;
                            }) : nm(a.h);
                        }
                    }
                }, Lo = function (a, b) {
                    if (!a.B) {
                        b = Cl(142, b);
                        fl();
                        var c = Gg(Qe);
                        c && We(Qe, c, b, { capture: !1 }) && (a.B = b);
                    }
                };
            Jo.prototype.o = function () {
                var a = lm(), b = Kl();
                a ? (Jl || (Fl = b, y(po.g, function (c) {
                    var d = c.sa();
                    d.T = Dn(d, b, 1 != c.ea);
                })), Jl = !0) : (this.C = Po(this, b), Jl = !1, Hl = b, y(po.g, function (c) {
                    c.Ub && (c.sa().I = b);
                }));
                No(this, qo(), !a);
            };
            var Qo = function () {
                    var a = F(vo);
                    if (null != a.g) {
                        var b = a.g;
                        y(qo(), function (c) {
                            return ln(c, b);
                        });
                    }
                }, Po = function (a, b) {
                    a = a.C;
                    Jl && (a += b - Fl);
                    return a;
                }, Ro = function (a) {
                    var b = Ko;
                    a = void 0 === a ? function () {
                        return {};
                    } : a;
                    yl.Sc('av-js');
                    ul.g = 0.01;
                    Al([function (c) {
                            var d = N(), e = {};
                            e = (e.bin = d.h, e.type = 'error', e);
                            d = Sk(d.U);
                            if (!b.l) {
                                var f = C.document, g = 0 <= Gl ? Kl() - Gl : -1, h = Kl();
                                -1 == b.g.Ec && (g = h);
                                var k = O(), n = N(), m = Sk(n.U), v = qo();
                                try {
                                    if (0 < v.length) {
                                        var r = k.g;
                                        r && (m.bs = [
                                            r.getWidth(),
                                            r.getHeight()
                                        ]);
                                        var w = k.o;
                                        w && (m.ps = [
                                            w.width,
                                            w.height
                                        ]);
                                        C.screen && (m.scs = [
                                            C.screen.width,
                                            C.screen.height
                                        ]);
                                    } else
                                        m.url = encodeURIComponent(C.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                                    m.tt = g;
                                    m.pt = Gl;
                                    m.bin = n.h;
                                    void 0 !== C.google_osd_load_pub_page_exp && (m.olpp = C.google_osd_load_pub_page_exp);
                                    m.deb = [
                                        1,
                                        b.g.oe,
                                        b.g.ld,
                                        b.g.ud,
                                        b.g.Ec,
                                        0,
                                        b.h.h,
                                        b.g.we,
                                        b.g.ve,
                                        b.g.xe
                                    ].join('-');
                                    m.tvt = Po(b, h);
                                    k.h && (m.inapp = 1);
                                    if (null !== C && C != C.top) {
                                        0 < v.length && (m.iframe_loc = encodeURIComponent(C.location.href.substring(0, 512)));
                                        var B = k.I;
                                        m.is = [
                                            B.getWidth(),
                                            B.getHeight()
                                        ];
                                    }
                                } catch (Ka) {
                                    m.error = 1;
                                }
                                b.l = m;
                            }
                            w = b.l;
                            r = {};
                            for (var M in w)
                                r[M] = w[M];
                            M = N().g;
                            if (1 == Rk(M.l, 'prf')) {
                                w = new kl();
                                B = M.g;
                                f = 0;
                                -1 < B.g && (f = B.l.g.now() - B.g);
                                w = Je(w, 1, B.o + f, 0);
                                B = M.g;
                                w = Je(w, 5, -1 < B.g ? B.h + 1 : B.h, 0);
                                w = Je(w, 2, M.h.g.l(), 0);
                                w = Je(w, 3, M.h.g.h(), 0);
                                w = Je(w, 4, M.h.g.g(), 0);
                                M = {};
                                B = new de();
                                f = Ge(w, 1);
                                if (0 !== f && (g = f, null != g)) {
                                    nd(B.g, 9);
                                    f = B.g;
                                    k = g;
                                    k = (g = 0 > k ? 1 : 0) ? -k : k;
                                    if (0 === k)
                                        jd = 0 < 1 / k ? 0 : 2147483648, id = 0;
                                    else if (isNaN(k))
                                        jd = 2147483647, id = 4294967295;
                                    else if (1.7976931348623157e+308 < k)
                                        jd = (g << 31 | 2146435072) >>> 0, id = 0;
                                    else if (2.2250738585072014e-308 > k)
                                        h = k / Math.pow(2, -1074), jd = (g << 31 | h / 4294967296) >>> 0, id = h >>> 0;
                                    else {
                                        n = k;
                                        h = 0;
                                        if (2 <= n)
                                            for (; 2 <= n && 1023 > h;)
                                                h++, n /= 2;
                                        else
                                            for (; 1 > n && -1022 < h;)
                                                n *= 2, h--;
                                        k *= Math.pow(2, -h);
                                        jd = (g << 31 | h + 1023 << 20 | 1048576 * k & 1048575) >>> 0;
                                        id = 4503599627370496 * k >>> 0;
                                    }
                                    od(f, id);
                                    od(f, jd);
                                }
                                f = Ee(w, 2, 0);
                                0 !== f && ie(B, 2, f);
                                f = Ee(w, 3, 0);
                                0 !== f && ie(B, 3, f);
                                f = Ee(w, 4, 0);
                                0 !== f && ie(B, 4, f);
                                f = Ee(w, 5, 0);
                                0 !== f && he(B, 5, f);
                                w = ge(B);
                                M = (M.pf = $d(w), M);
                            } else
                                M = {};
                            Vb(r, M);
                            Vb(c, e, d, r, a());
                            if (e = Im())
                                d = {}, Vb(c, (d.v = encodeURIComponent(e), d));
                        }]);
                }, Ko = F(Jo);
            var So = null, To = '', Uo = !1, Vo = function () {
                    var a = So || C;
                    if (!a)
                        return '';
                    var b = [];
                    if (!a.location || !a.location.href)
                        return '';
                    b.push('url=' + encodeURIComponent(a.location.href.substring(0, 512)));
                    a.document && a.document.referrer && b.push('referrer=' + encodeURIComponent(a.document.referrer.substring(0, 512)));
                    return b.join('&');
                };
            var Wo = function (a) {
                    return function (b) {
                        return void 0 === b[a] ? 0 : b[a];
                    };
                }, Yo = function () {
                    var a = [
                        0,
                        2,
                        4
                    ];
                    return function (b) {
                        b = b.tos;
                        if (Array.isArray(b)) {
                            for (var c = Array(b.length), d = 0; d < b.length; d++)
                                c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                            return void 0 !== a ? Xo(c, a) : c;
                        }
                    };
                }, Zo = function (a, b, c, d) {
                    c = void 0 === c ? !0 : c;
                    d = void 0 === d ? function () {
                        return !0;
                    } : d;
                    return function (e) {
                        var f = e[a];
                        if (Array.isArray(f) && d(e))
                            return Xo(f, b, c);
                    };
                }, $o = function (a, b) {
                    return function (c) {
                        return b(c) ? c[a] : void 0;
                    };
                }, ap = function (a) {
                    return function (b) {
                        for (var c = 0; c < a.length; c++)
                            if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty('e'))
                                return !0;
                        return !1;
                    };
                }, Xo = function (a, b, c) {
                    return void 0 === c || c ? nb(a, function (d, e) {
                        return ub(b, e);
                    }) : ob(b, function (d, e, f) {
                        return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function (g, h) {
                            return g + h;
                        }, 0);
                    });
                };
            var bp = ap([
                    void 0,
                    1,
                    2,
                    3,
                    4,
                    8,
                    16
                ]), cp = ap([
                    void 0,
                    4,
                    8,
                    16
                ]), dp = {
                    sv: 'sv',
                    cb: 'cb',
                    e: 'e',
                    nas: 'nas',
                    msg: 'msg',
                    'if': 'if',
                    sdk: 'sdk',
                    p: 'p',
                    p0: $o('p0', cp),
                    p1: $o('p1', cp),
                    p2: $o('p2', cp),
                    p3: $o('p3', cp),
                    cp: 'cp',
                    tos: 'tos',
                    mtos: 'mtos',
                    amtos: 'amtos',
                    mtos1: Zo('mtos1', [
                        0,
                        2,
                        4
                    ], !1, cp),
                    mtos2: Zo('mtos2', [
                        0,
                        2,
                        4
                    ], !1, cp),
                    mtos3: Zo('mtos3', [
                        0,
                        2,
                        4
                    ], !1, cp),
                    mcvt: 'mcvt',
                    ps: 'ps',
                    scs: 'scs',
                    bs: 'bs',
                    vht: 'vht',
                    mut: 'mut',
                    a: 'a',
                    a0: $o('a0', cp),
                    a1: $o('a1', cp),
                    a2: $o('a2', cp),
                    a3: $o('a3', cp),
                    ft: 'ft',
                    dft: 'dft',
                    at: 'at',
                    dat: 'dat',
                    as: 'as',
                    vpt: 'vpt',
                    gmm: 'gmm',
                    std: 'std',
                    efpf: 'efpf',
                    swf: 'swf',
                    nio: 'nio',
                    px: 'px',
                    nnut: 'nnut',
                    vmer: 'vmer',
                    vmmk: 'vmmk',
                    vmiec: 'vmiec',
                    nmt: 'nmt',
                    tcm: 'tcm',
                    bt: 'bt',
                    pst: 'pst',
                    vpaid: 'vpaid',
                    dur: 'dur',
                    vmtime: 'vmtime',
                    dtos: 'dtos',
                    dtoss: 'dtoss',
                    dvs: 'dvs',
                    dfvs: 'dfvs',
                    dvpt: 'dvpt',
                    fmf: 'fmf',
                    vds: 'vds',
                    is: 'is',
                    i0: 'i0',
                    i1: 'i1',
                    i2: 'i2',
                    i3: 'i3',
                    ic: 'ic',
                    cs: 'cs',
                    c: 'c',
                    c0: $o('c0', cp),
                    c1: $o('c1', cp),
                    c2: $o('c2', cp),
                    c3: $o('c3', cp),
                    mc: 'mc',
                    nc: 'nc',
                    mv: 'mv',
                    nv: 'nv',
                    qmt: $o('qmtos', bp),
                    qnc: $o('qnc', bp),
                    qmv: $o('qmv', bp),
                    qnv: $o('qnv', bp),
                    raf: 'raf',
                    rafc: 'rafc',
                    lte: 'lte',
                    ces: 'ces',
                    tth: 'tth',
                    femt: 'femt',
                    femvt: 'femvt',
                    emc: 'emc',
                    emuc: 'emuc',
                    emb: 'emb',
                    avms: 'avms',
                    nvat: 'nvat',
                    qi: 'qi',
                    psm: 'psm',
                    psv: 'psv',
                    psfv: 'psfv',
                    psa: 'psa',
                    pnk: 'pnk',
                    pnc: 'pnc',
                    pnmm: 'pnmm',
                    pns: 'pns',
                    ptlt: 'ptlt',
                    pngs: 'pings',
                    veid: 'veid',
                    ssb: 'ssb',
                    ss0: $o('ss0', cp),
                    ss1: $o('ss1', cp),
                    ss2: $o('ss2', cp),
                    ss3: $o('ss3', cp),
                    dc_rfl: 'urlsigs',
                    obd: 'obd',
                    omidp: 'omidp',
                    omidr: 'omidr',
                    omidv: 'omidv',
                    omida: 'omida',
                    omids: 'omids',
                    omidpv: 'omidpv',
                    omidam: 'omidam',
                    omidct: 'omidct',
                    omidia: 'omidia'
                }, ep = {
                    c: Wo('c'),
                    at: 'at',
                    atos: Zo('atos', [
                        0,
                        2,
                        4
                    ]),
                    ta: function (a, b) {
                        return function (c) {
                            if (void 0 === c[a])
                                return b;
                        };
                    }('tth', '1'),
                    a: 'a',
                    dur: 'dur',
                    p: 'p',
                    tos: Yo(),
                    j: 'dom',
                    mtos: Zo('mtos', [
                        0,
                        2,
                        4
                    ]),
                    gmm: 'gmm',
                    gdr: 'gdr',
                    ss: Wo('ss'),
                    vsv: fb('w2'),
                    t: 't'
                }, fp = {
                    atos: 'atos',
                    avt: Zo('atos', [2]),
                    davs: 'davs',
                    dafvs: 'dafvs',
                    dav: 'dav',
                    ss: Wo('ss'),
                    t: 't'
                }, gp = {
                    a: 'a',
                    tos: Yo(),
                    at: 'at',
                    c: Wo('c'),
                    mtos: Zo('mtos', [
                        0,
                        2,
                        4
                    ]),
                    dur: 'dur',
                    fs: 'fs',
                    p: 'p',
                    vpt: 'vpt',
                    vsv: fb('ias_w2'),
                    dom: 'dom',
                    gmm: 'gmm',
                    gdr: 'gdr',
                    t: 't'
                }, hp = {
                    tos: Yo(),
                    at: 'at',
                    c: Wo('c'),
                    mtos: Zo('mtos', [
                        0,
                        2,
                        4
                    ]),
                    p: 'p',
                    vpt: 'vpt',
                    vsv: fb('dv_w4'),
                    gmm: 'gmm',
                    gdr: 'gdr',
                    dom: 'dom',
                    t: 't',
                    mv: 'mv',
                    qmpt: Zo('qmtos', [
                        0,
                        2,
                        4
                    ]),
                    qvs: function (a, b) {
                        return function (c) {
                            var d = c[a];
                            if ('number' === typeof d)
                                return ob(b, function (e) {
                                    return 0 < d && d >= e ? 1 : 0;
                                });
                        };
                    }('qnc', [
                        1,
                        0.5,
                        0
                    ]),
                    qmv: 'qmv',
                    qa: 'qas',
                    a: 'a'
                };
            var ip = 'av.default_js_unreleased_RCxx'.includes('outstream') ? 'out' : 'av.default_js_unreleased_RCxx'.includes('drx_rewarded_web') ? 'r' : 'av.default_js_unreleased_RCxx'.includes('gam_native_web_video') ? 'n' : 'av.default_js_unreleased_RCxx'.includes('admob_interstitial_video') ? 'int' : 'j';
            var kp = function (a, b) {
                    var c = {
                        sv: '900',
                        cb: ip
                    };
                    c.nas = po.g.length;
                    c.msg = a;
                    void 0 !== b && (a = jp(b)) && (c.e = Sl[a]);
                    return c;
                }, lp = function (a) {
                    return 0 == a.lastIndexOf('custom_metric_viewable', 0);
                }, jp = function (a) {
                    var b = lp(a) ? 'custom_metric_viewable' : a.toLowerCase();
                    return Pb(function (c) {
                        return c == b;
                    });
                };
            var mp = {
                    Tf: 'visible',
                    Af: 'audible',
                    $g: 'time',
                    bh: 'timetype'
                }, np = {
                    visible: function (a) {
                        return /^(100|[0-9]{1,2})$/.test(a);
                    },
                    audible: function (a) {
                        return '0' == a || '1' == a;
                    },
                    timetype: function (a) {
                        return 'mtos' == a || 'tos' == a;
                    },
                    time: function (a) {
                        return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a);
                    }
                }, op = function () {
                    this.g = void 0;
                    this.h = !1;
                    this.l = 0;
                    this.o = -1;
                    this.B = 'tos';
                }, pp = function (a) {
                    try {
                        var b = a.split(',');
                        return b.length > Lb(mp).length ? null : pb(b, function (c, d) {
                            d = d.toLowerCase().split('=');
                            if (2 != d.length || void 0 === np[d[0]] || !np[d[0]](d[1]))
                                throw Error('Entry (' + d[0] + ', ' + d[1] + ') is invalid.');
                            c[d[0]] = d[1];
                            return c;
                        }, {});
                    } catch (c) {
                        return null;
                    }
                }, qp = function (a, b) {
                    if (void 0 == a.g)
                        return 0;
                    switch (a.B) {
                    case 'mtos':
                        return a.h ? Vm(b.g, a.g) : Vm(b.h, a.g);
                    case 'tos':
                        return a.h ? Tm(b.g, a.g) : Tm(b.h, a.g);
                    }
                    return 0;
                };
            var rp = function (a, b, c, d) {
                Fn.call(this, b, d);
                this.C = a;
                this.I = c;
            };
            t(rp, Fn);
            rp.prototype.B = function () {
                return this.C;
            };
            rp.prototype.A = function () {
                return !0;
            };
            rp.prototype.o = function (a) {
                var b = a.sa(), c = a.getDuration();
                return qb(this.I, function (d) {
                    if (void 0 != d.g)
                        var e = qp(d, b);
                    else
                        b: {
                            switch (d.B) {
                            case 'mtos':
                                e = d.h ? b.B.l : b.l.g;
                                break b;
                            case 'tos':
                                e = d.h ? b.B.g : b.l.g;
                                break b;
                            }
                            e = 0;
                        }
                    0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
                    return d;
                });
            };
            var sp = function (a) {
                Fn.call(this, 'fully_viewable_audible_half_duration_impression', a);
            };
            t(sp, Fn);
            sp.prototype.o = function (a) {
                var b = Tm(a.sa().g, 1);
                return Sn(a, b);
            };
            var tp = function (a, b) {
                Fn.call(this, a, b);
            };
            t(tp, Fn);
            tp.prototype.o = function (a) {
                return a.sa().ab();
            };
            var up = function () {
                this.h = this.o = this.A = this.B = this.l = this.g = '';
            };
            var vp = function () {
                }, wp = function (a, b, c, d, e) {
                    var f = {};
                    if (void 0 !== a)
                        if (null != b)
                            for (var g in b) {
                                var h = b[g];
                                g in Object.prototype || null != h && (f[g] = 'function' === typeof h ? h(a) : a[h]);
                            }
                        else
                            Vb(f, a);
                    void 0 !== c && Vb(f, c);
                    a = Fm(Dm(new Bm(), f));
                    0 < a.length && void 0 !== d && void 0 !== e && (e = e(a), a += '&' + d + '=' + e);
                    return a;
                };
            var xp = function () {
            };
            t(xp, vp);
            xp.prototype.g = function (a) {
                var b = new up();
                b.g = wp(a, dp);
                b.l = wp(a, fp);
                return b;
            };
            var yp = function (a, b, c) {
                Jn.call(this, a, b, c);
            };
            t(yp, Jn);
            yp.prototype.o = function () {
                var a = Ia('ima.admob.getViewability'), b = Rk(this.U, 'queryid');
                'function' === typeof a && b && a(b);
            };
            yp.prototype.fa = function () {
                return 'gsv';
            };
            var zp = function (a) {
                a = void 0 === a ? C : a;
                xm.call(this, new om(a, 2));
            };
            t(zp, xm);
            zp.prototype.fa = function () {
                return 'gsv';
            };
            zp.prototype.zb = function () {
                var a = O();
                N();
                return a.h && !1;
            };
            zp.prototype.Lb = function (a, b, c) {
                return new yp(this.g, b, c);
            };
            var Ap = function (a, b, c) {
                Jn.call(this, a, b, c);
            };
            t(Ap, Jn);
            Ap.prototype.o = function () {
                var a = this, b = Ia('ima.bridge.getNativeViewability'), c = Rk(this.U, 'queryid');
                'function' === typeof b && c && b(c, function (d) {
                    Rb(d) && a.B++;
                    var e = d.opt_nativeViewVisibleBounds || {}, f = d.opt_nativeViewHidden;
                    a.g = cm(d.opt_nativeViewBounds || {});
                    var g = a.h.l;
                    g.g = f ? Pf(In) : cm(e);
                    a.timestamp = d.opt_nativeTime || -1;
                    O().g = g.g;
                    d = d.opt_nativeVolume;
                    void 0 !== d && (g.volume = d);
                });
            };
            Ap.prototype.fa = function () {
                return 'nis';
            };
            var Bp = function (a) {
                a = void 0 === a ? C : a;
                xm.call(this, new om(a, 2));
            };
            t(Bp, xm);
            Bp.prototype.fa = function () {
                return 'nis';
            };
            Bp.prototype.zb = function () {
                var a = O();
                N();
                return a.h && !1;
            };
            Bp.prototype.Lb = function (a, b, c) {
                return new Ap(this.g, b, c);
            };
            var Cp = function () {
                om.call(this, C, 2, 'mraid');
                this.$ = 0;
                this.K = this.L = !1;
                this.C = null;
                this.h = Tl(this.la);
                this.l.g = new E(0, 0, 0, 0);
                this.aa = !1;
            };
            t(Cp, om);
            Cp.prototype.D = function () {
                return null != this.h.za;
            };
            Cp.prototype.X = function () {
                var a = {};
                this.$ && (a.mraid = this.$);
                this.L && (a.mlc = 1);
                a.mtop = this.h.lf;
                this.C && (a.mse = this.C);
                this.aa && (a.msc = 1);
                a.mcp = this.h.Tb;
                return a;
            };
            Cp.prototype.A = function (a, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                    c[d - 1] = arguments[d];
                try {
                    return this.h.za[a].apply(this.h.za, c);
                } catch (e) {
                    Dl(538, e, 0.01, function (f) {
                        f.method = a;
                    });
                }
            };
            var Dp = function (a, b, c) {
                a.A('addEventListener', b, c);
            };
            Cp.prototype.initialize = function () {
                var a = this;
                if (this.F)
                    return !this.Db();
                this.F = !0;
                if (2 === this.h.Tb)
                    return this.C = 'ng', qm(this, 'w'), !1;
                if (1 === this.h.Tb)
                    return this.C = 'mm', qm(this, 'w'), !1;
                O().D = !0;
                this.la.document.readyState && 'complete' == this.la.document.readyState ? Ep(this) : Wl(this.la, 'load', function () {
                    fl().setTimeout(Cl(292, function () {
                        return Ep(a);
                    }), 100);
                }, 292);
                return !0;
            };
            var Ep = function (a) {
                    N().B = !!a.A('isViewable');
                    Dp(a, 'viewableChange', Fp);
                    'loading' === a.A('getState') ? Dp(a, 'ready', Gp) : Hp(a);
                }, Hp = function (a) {
                    'string' === typeof a.h.za.AFMA_LIDAR ? (a.L = !0, Ip(a)) : (a.h.Tb = 3, a.C = 'nc', qm(a, 'w'));
                }, Ip = function (a) {
                    a.K = !1;
                    var b = 1 == Rk(N().U, 'rmmt'), c = !!a.A('isViewable');
                    (b ? !c : 1) && fl().setTimeout(Cl(524, function () {
                        a.K || (Jp(a), Dl(540, Error()), a.C = 'mt', qm(a, 'w'));
                    }), 500);
                    Kp(a);
                    Dp(a, a.h.za.AFMA_LIDAR, Lp);
                }, Kp = function (a) {
                    var b = 1 == Rk(N().U, 'sneio'), c = void 0 !== a.h.za.AFMA_LIDAR_EXP_1, d = void 0 !== a.h.za.AFMA_LIDAR_EXP_2;
                    (b = b && d) && (a.h.za.AFMA_LIDAR_EXP_2 = !0);
                    c && (a.h.za.AFMA_LIDAR_EXP_1 = !b);
                }, Jp = function (a) {
                    a.A('removeEventListener', a.h.za.AFMA_LIDAR, Lp);
                    a.L = !1;
                };
            Cp.prototype.R = function () {
                var a = O(), b = Mp(this, 'getMaxSize');
                a.g = new E(0, b.width, b.height, 0);
            };
            Cp.prototype.T = function () {
                O().B = Mp(this, 'getScreenSize');
            };
            var Mp = function (a, b) {
                if ('loading' === a.A('getState'))
                    return new bf(-1, -1);
                b = a.A(b);
                if (!b)
                    return new bf(-1, -1);
                a = parseInt(b.width, 10);
                b = parseInt(b.height, 10);
                return isNaN(a) || isNaN(b) ? new bf(-1, -1) : new bf(a, b);
            };
            Cp.prototype.W = function () {
                Jp(this);
                om.prototype.W.call(this);
            };
            var Gp = function () {
                    try {
                        var a = F(Cp);
                        a.A('removeEventListener', 'ready', Gp);
                        Hp(a);
                    } catch (b) {
                        Dl(541, b);
                    }
                }, Lp = function (a, b) {
                    try {
                        var c = F(Cp);
                        c.K = !0;
                        var d = a ? new E(a.y, a.x + a.width, a.y + a.height, a.x) : new E(0, 0, 0, 0);
                        var e = Kl(), f = lm();
                        var g = new Ml(e, f, c);
                        g.g = d;
                        g.volume = b;
                        c.Pa(g);
                    } catch (h) {
                        Dl(542, h);
                    }
                }, Fp = function (a) {
                    var b = N(), c = F(Cp);
                    a && !b.B && (b.B = !0, c.aa = !0, c.C && qm(c, 'w', !0));
                };
            var Op = function () {
                this.l = this.H = !1;
                this.g = null;
                this.o = new xp();
                this.h = null;
                var a = {};
                this.M = (a.start = this.Ne, a.firstquartile = this.Ie, a.midpoint = this.Ke, a.thirdquartile = this.Oe, a.complete = this.Ge, a.pause = this.Nc, a.resume = this.Ld, a.skip = this.Me, a.viewable_impression = this.Oa, a.mute = this.ub, a.unmute = this.ub, a.fullscreen = this.Je, a.exitfullscreen = this.He, a.fully_viewable_audible_half_duration_impression = this.Oa, a.measurable_impression = this.Oa, a.abandon = this.Nc, a.engagedview = this.Oa, a.impression = this.Oa, a.creativeview = this.Oa, a.progress = this.ub, a.custom_metric_viewable = this.Oa, a.bufferstart = this.Nc, a.bufferfinish = this.Ld, a);
                a = {};
                this.T = (a.overlay_resize = this.Le, a.abandon = this.Cc, a.close = this.Cc, a.collapse = this.Cc, a.overlay_unmeasurable_impression = function (b) {
                    return $n(b, 'overlay_unmeasurable_impression', lm());
                }, a.overlay_viewable_immediate_impression = function (b) {
                    return $n(b, 'overlay_viewable_immediate_impression', lm());
                }, a.overlay_unviewable_impression = function (b) {
                    return $n(b, 'overlay_unviewable_impression', lm());
                }, a.overlay_viewable_end_of_session_impression = function (b) {
                    return $n(b, 'overlay_viewable_end_of_session_impression', lm());
                }, a);
                N().h = 3;
                Np(this);
            };
            Op.prototype.A = function (a) {
                kn(a, !1);
                so(a);
            };
            Op.prototype.I = function () {
            };
            var Pp = function (a, b, c, d) {
                a = a.C(null, d, !0, b);
                a.B = c;
                to([a]);
                return a;
            };
            Op.prototype.C = function (a, b, c, d) {
                var e = this;
                this.h || (this.h = this.sd());
                b = c ? b : -1;
                a = null == this.h || this.l ? new Nn(C, a, b, 7) : new Nn(C, a, b, 7, new Fn('measurable_impression', this.h), Qp(this));
                a.ka = d;
                Pk(a.U);
                Qk(a.U, 'queryid', a.ka);
                a.Oc('');
                pn(a, function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h - 0] = arguments[h];
                    return e.L.apply(e, fa(g));
                }, function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h - 0] = arguments[h];
                    return e.R.apply(e, fa(g));
                });
                (d = F(vo).g) && ln(a, d);
                a.ra.Sa && F(Io);
                return a;
            };
            var Rp = function (a, b, c) {
                    yk(b);
                    var d = a.h;
                    y(b, function (e) {
                        var f = ob(e.l, function (g) {
                            var h = pp(g);
                            if (null == h)
                                g = null;
                            else if (g = new op(), null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
                                var k = 'mtos' == h.timetype ? 'mtos' : 'tos', n = gc(h.time, '%') ? '%' : 'ms';
                                h = parseInt(h.time, 10);
                                '%' == n && (h /= 100);
                                'ms' == n ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                                g.B = void 0 === k ? 'tos' : k;
                            }
                            return g;
                        });
                        qb(f, function (g) {
                            return null == g;
                        }) || Tn(c, new rp(e.id, e.g, f, d));
                    });
                }, Qp = function (a) {
                    a = a.h;
                    return [
                        new tp('viewable_impression', a),
                        new sp(a)
                    ];
                }, Sp = function () {
                    var a = [], b = N();
                    a.push(F(Ho));
                    Rk(b.U, 'mvp_lv') && a.push(F(Cp));
                    b = [
                        new zp(),
                        new Bp()
                    ];
                    b.push(new yo(a));
                    b.push(new Fo(C));
                    return b;
                }, Up = function (a) {
                    if (!a.H) {
                        a.H = !0;
                        try {
                            var b = Kl(), c = N(), d = O();
                            Gl = b;
                            c.o = 79463069;
                            'o' !== a.g && (So = mg(C).la);
                            if (gl()) {
                                Ko.g.ld = 0;
                                Ko.g.Ec = Kl() - b;
                                var e = Sp(), f = F(vo);
                                f.h = e;
                                wo(f, function () {
                                    Tp();
                                }) ? Ko.done || (Qo(), rm(f.g.g, a), Mo()) : d.l ? Tp() : Mo();
                            } else
                                Uo = !0;
                        } catch (g) {
                            throw po.reset(), g;
                        }
                    }
                }, Vp = function (a) {
                    Ko.h.cancel();
                    To = a;
                    Ko.done = !0;
                }, Wp = function (a) {
                    if (a.g)
                        return a.g;
                    var b = F(vo).g;
                    if (b)
                        switch (b.fa()) {
                        case 'nis':
                            a.g = 'n';
                            break;
                        case 'gsv':
                            a.g = 'm';
                        }
                    a.g || (a.g = 'h');
                    return a.g;
                }, Xp = function (a, b, c) {
                    if (null == a.h)
                        return b.wb |= 4, !1;
                    a = a.h.report(c, b);
                    b.wb |= a;
                    return 0 == a;
                };
            Op.prototype.rb = function (a) {
                switch (a.Ga()) {
                case 0:
                    if (a = F(vo).g)
                        a = a.g, vb(a.B, this), a.J && this.Ca() && um(a);
                    Tp();
                    break;
                case 2:
                    Mo();
                }
            };
            Op.prototype.Pa = function () {
            };
            Op.prototype.Ca = function () {
                return !1;
            };
            var Tp = function () {
                var a = [new Fo(C)], b = F(vo);
                b.h = a;
                wo(b, function () {
                    Vp('i');
                }) ? Ko.done || (Qo(), Mo()) : Vp('i');
            };
            Op.prototype.R = function (a, b) {
                a.$a = !0;
                switch (a.wa()) {
                case 1:
                    Yp(this, a, b);
                    break;
                case 2:
                    this.Qc(a);
                }
                this.Rc(a);
            };
            var Yp = function (a, b, c) {
                if (!b.ua) {
                    var d = $n(b, 'start', lm());
                    a = a.o.g(d).g;
                    var e = { id: 'lidarv' };
                    e.r = c;
                    e.v = '900v';
                    yf(a, function (f, g) {
                        return e[f] = 'mtos' == f || 'tos' == f ? g : encodeURIComponent(g);
                    });
                    c = Vo();
                    yf(c, function (f, g) {
                        return e[f] = encodeURIComponent(g);
                    });
                    c = '//pagead2.googlesyndication.com/pagead/gen_204?' + Fm(Dm(new Bm(), e));
                    Jm(c);
                    b.ua = !0;
                }
            };
            l = Op.prototype;
            l.Ne = function (a) {
                Xn(a, 0);
                return $n(a, 'start', lm());
            };
            l.ub = function (a, b, c) {
                No(Ko, [a], !lm());
                return this.Oa(a, b, c);
            };
            l.Oa = function (a, b, c) {
                return $n(a, c, lm());
            };
            l.Ie = function (a) {
                return Zp(a, 'firstquartile', 1);
            };
            l.Ke = function (a) {
                a.$ = !0;
                return Zp(a, 'midpoint', 2);
            };
            l.Oe = function (a) {
                return Zp(a, 'thirdquartile', 3);
            };
            l.Ge = function (a) {
                var b = Zp(a, 'complete', 4);
                0 != a.ea && (a.ea = 3);
                return b;
            };
            var Zp = function (a, b, c) {
                No(Ko, [a], !lm());
                Xn(a, c);
                4 != c && Wn(a.L, c, a.Vb);
                return $n(a, b, lm());
            };
            l = Op.prototype;
            l.Ld = function (a, b, c) {
                b = lm();
                2 != a.ea || b || (a.sa().I = Kl());
                No(Ko, [a], !b);
                2 == a.ea && (a.ea = 1);
                return $n(a, c, b);
            };
            l.Me = function (a, b) {
                b = this.ub(a, b || {}, 'skip');
                0 != a.ea && (a.ea = 3);
                return b;
            };
            l.Je = function (a, b) {
                kn(a, !0);
                return this.ub(a, b || {}, 'fullscreen');
            };
            l.He = function (a, b) {
                kn(a, !1);
                return this.ub(a, b || {}, 'exitfullscreen');
            };
            l.Nc = function (a, b, c) {
                b = a.sa();
                b.T = Dn(b, Kl(), 1 != a.ea);
                No(Ko, [a], !lm());
                1 == a.ea && (a.ea = 2);
                return $n(a, c, lm());
            };
            l.Le = function (a) {
                No(Ko, [a], !lm());
                return a.h();
            };
            l.Cc = function (a) {
                No(Ko, [a], !lm());
                this.Jd(a);
                0 != a.ea && (a.ea = 3);
                return a.h();
            };
            var Np = function (a) {
                    Ro(function () {
                        var b = $p();
                        null != a.g && (b.sdk = a.g);
                        var c = F(vo);
                        null != c.g && (b.avms = c.g.fa());
                        return b;
                    });
                }, aq = function (a, b, c, d) {
                    var e = no(po, c);
                    null !== e && e.ka !== b && (a.A(e), e = null);
                    e || (b = a.C(c, Kl(), !1, b), 0 == po.h.length && (N().o = 79463069), uo([b]), e = b, e.B = Wp(a), d && (e.Ta = d));
                    return e;
                };
            Op.prototype.L = function () {
            };
            var cq = function (a, b) {
                b.C = 0;
                for (var c in Ol)
                    null == a[c] && (b.C |= Ol[c]);
                bq(a, 'currentTime');
                bq(a, 'duration');
            };
            l = Op.prototype;
            l.Qc = function () {
            };
            l.Jd = function () {
            };
            l.fd = function () {
            };
            l.Rc = function () {
            };
            l.sd = function () {
            };
            var bq = function (a, b) {
                    var c = a[b];
                    void 0 !== c && 0 < c && (a[b] = Math.floor(1000 * c));
                }, $p = function () {
                    var a = O(), b = {};
                    return b.sv = '900', b['if'] = a.l ? '1' : '0', b.nas = String(po.g.length), b;
                };
            var dq = Wa(), eq = !1, fq = !1, gq = !1, hq = function (a) {
                    return !a || 'function' !== typeof a || 0 > String(Function.prototype.toString).indexOf('[native code]') ? !1 : 0 <= String(a).indexOf('[native code]') && !0 || !1;
                }, iq = function (a) {
                    return !!(1 << a & dq);
                }, jq = [
                    function (a) {
                        return !(!a.chrome || !a.chrome.webstore);
                    },
                    function (a) {
                        return !!a.document.documentMode;
                    },
                    function (a) {
                        return !!a.document.fonts.ready;
                    },
                    function () {
                        return iq(0);
                    },
                    function (a) {
                        return !!a.ActiveXObject;
                    },
                    function (a) {
                        return !!a.chrome;
                    },
                    function (a) {
                        return !!a.navigator.serviceWorker;
                    },
                    function (a) {
                        return !!a.opera;
                    },
                    function (a) {
                        return !!a.sidebar;
                    },
                    function () {
                        return !+'\x0B1';
                    },
                    function () {
                        return iq(1);
                    },
                    function (a) {
                        return !a.ActiveXObject;
                    },
                    function (a) {
                        return '-ms-ime-align' in a.document.documentElement.style;
                    },
                    function (a) {
                        return '-ms-scroll-limit' in a.document.documentElement.style;
                    },
                    function (a) {
                        return '-webkit-font-feature-settings' in a.document.body.style;
                    },
                    function () {
                        return iq(2);
                    },
                    function (a) {
                        return 'ActiveXObject' in a;
                    },
                    function (a) {
                        return 'MozAppearance' in a.document.documentElement.style;
                    },
                    function (a) {
                        return '_phantom' in a;
                    },
                    function (a) {
                        return 'callPhantom' in a;
                    },
                    function (a) {
                        return 'content' in a.document.createElement('template');
                    },
                    function (a) {
                        return 'getEntriesByType' in a.performance;
                    },
                    function () {
                        return iq(3);
                    },
                    function (a) {
                        return 'image-rendering' in a.document.body.style;
                    },
                    function (a) {
                        return 'object-fit' in a.document.body.style;
                    },
                    function (a) {
                        return 'open' in a.document.createElement('details');
                    },
                    function (a) {
                        return 'orientation' in a.screen;
                    },
                    function (a) {
                        return 'performance' in a;
                    },
                    function (a) {
                        return 'shape-image-threshold' in a.document.body.style;
                    },
                    function () {
                        return iq(4);
                    },
                    function (a) {
                        return 'srcset' in a.document.createElement('img');
                    },
                    function () {
                        return fq;
                    },
                    function () {
                        return gq;
                    },
                    function () {
                        return iq(5);
                    },
                    function (a) {
                        a = a.document.createElement('div');
                        a.style.width = '1px';
                        a.style.width = '-webkit-min-content';
                        a.style.width = 'min-content';
                        return '1px' != a.style.width;
                    },
                    function (a) {
                        a = a.document.createElement('div');
                        a.style.width = '1px';
                        a.style.width = 'calc(1px - 1px)';
                        a.style.width = '-webkit-calc(1px - 1px)';
                        return '1px' != a.style.width;
                    },
                    function () {
                        var a = !1;
                        eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                        try {
                            DummyFunction1();
                        } catch (b) {
                            a = !0;
                        }
                        return a;
                    },
                    function () {
                        var a = !1;
                        try {
                            DummyFunction2();
                        } catch (b) {
                            a = !0;
                        }
                        return a;
                    },
                    function () {
                        return !1;
                    },
                    function () {
                        return iq(6);
                    },
                    function (a) {
                        var b = a.document.createElement('canvas');
                        b.width = b.height = 1;
                        b = b.getContext('2d');
                        b.globalCompositeOperation = 'multiply';
                        b.fillStyle = 'rgb(0,255,255)';
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b.fillStyle = 'rgb(255,255,0)';
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b = b.getImageData(0, 0, 1, 1).data;
                        return b[0] == b[2] && b[1] == b[3] || hq(a.navigator.vibrate);
                    },
                    function (a) {
                        a = a.document.createElement('canvas');
                        a.width = a.height = 1;
                        a = a.getContext('2d');
                        a.globalCompositeOperation = 'multiply';
                        a.fillStyle = 'rgb(0,255,255)';
                        a.fillRect(0, 0, 1, 1);
                        a.fill();
                        a.fillStyle = 'rgb(255,255,0)';
                        a.fillRect(0, 0, 1, 1);
                        a.fill();
                        a = a.getImageData(0, 0, 1, 1).data;
                        return a[0] == a[2] && a[1] == a[3];
                    },
                    function (a) {
                        return hq(a.document.createElement('div').matches);
                    },
                    function (a) {
                        a = a.document.createElement('input');
                        a.setAttribute('type', 'range');
                        return 'text' !== a.type;
                    },
                    function (a) {
                        return a.CSS.supports('image-rendering', 'pixelated');
                    },
                    function (a) {
                        return a.CSS.supports('object-fit', 'contain');
                    },
                    function () {
                        return iq(7);
                    },
                    function (a) {
                        return a.CSS.supports('object-fit', 'inherit');
                    },
                    function (a) {
                        return a.CSS.supports('shape-image-threshold', '0.9');
                    },
                    function (a) {
                        return a.CSS.supports('word-break', 'keep-all');
                    },
                    function () {
                        return eval('1 == [for (item of [1,2,3]) item][0]');
                    },
                    function (a) {
                        return hq(a.CSS.supports);
                    },
                    function () {
                        return hq(Intl.Collator);
                    },
                    function (a) {
                        return hq(a.document.createElement('dialog').show);
                    },
                    function () {
                        return iq(8);
                    },
                    function (a) {
                        return hq(a.document.createElement('div').animate([
                            {
                                transform: 'scale(1)',
                                easing: 'ease-in'
                            },
                            {
                                transform: 'scale(1.3)',
                                easing: 'ease-in'
                            }
                        ], {
                            duration: 1300,
                            iterations: 1
                        }).reverse);
                    },
                    function (a) {
                        return hq(a.document.createElement('div').animate);
                    },
                    function (a) {
                        return hq(a.document.documentElement.webkitRequestFullScreen);
                    },
                    function (a) {
                        return hq(a.navigator.getBattery);
                    },
                    function (a) {
                        return hq(a.navigator.permissions.query);
                    },
                    function () {
                        return !1;
                    },
                    function () {
                        return iq(9);
                    },
                    function () {
                        return hq(webkitRequestAnimationFrame);
                    },
                    function (a) {
                        return hq(a.BroadcastChannel.call);
                    },
                    function (a) {
                        return hq(a.FontFace);
                    },
                    function (a) {
                        return hq(a.Gamepad);
                    },
                    function () {
                        return iq(10);
                    },
                    function (a) {
                        return hq(a.MutationEvent);
                    },
                    function (a) {
                        return hq(a.MutationObserver);
                    },
                    function (a) {
                        return hq(a.crypto.getRandomValues);
                    },
                    function (a) {
                        return hq(a.document.body.createShadowRoot);
                    },
                    function (a) {
                        return hq(a.document.body.webkitCreateShadowRoot);
                    },
                    function (a) {
                        return hq(a.fetch);
                    },
                    function () {
                        return iq(11);
                    },
                    function (a) {
                        return hq(a.navigator.serviceWorker.register);
                    },
                    function (a) {
                        return hq(a.navigator.webkitGetGamepads);
                    },
                    function (a) {
                        return hq(a.speechSynthesis.speak);
                    },
                    function (a) {
                        return hq(a.webkitRTCPeerConnection);
                    },
                    function (a) {
                        return a.CSS.supports('--fake-var', '0');
                    },
                    function () {
                        return iq(12);
                    },
                    function (a) {
                        return a.CSS.supports('cursor', 'grab');
                    },
                    function (a) {
                        return a.CSS.supports('cursor', 'zoom-in');
                    },
                    function (a) {
                        return a.CSS.supports('image-orientation', '270deg');
                    },
                    function () {
                        return iq(13);
                    },
                    function (a) {
                        return a.CSS.supports('position', 'sticky');
                    },
                    function (a) {
                        return void 0 === a.document.createElement('style').scoped;
                    },
                    function (a) {
                        return a.performance.getEntriesByType('resource') instanceof Array;
                    },
                    function () {
                        return 'undefined' == typeof InstallTrigger;
                    },
                    function () {
                        return 'object' == typeof new Intl.Collator().resolvedOptions();
                    },
                    function (a) {
                        return 'boolean' == typeof a.navigator.onLine;
                    },
                    function () {
                        return iq(14);
                    },
                    function (a) {
                        return 'undefined' == typeof a.navigator.Bh;
                    },
                    function (a) {
                        return 'number' == typeof a.performance.now();
                    },
                    function () {
                        return 0 == new Uint16Array(1)[0];
                    },
                    function (a) {
                        return -1 == a.ActiveXObject.toString().indexOf('native');
                    },
                    function (a) {
                        return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf('Constructor');
                    }
                ], kq = [
                    function (a) {
                        a = a.document.createElement('div');
                        var b = null, c = [
                                '{45EA75A0-A269-11D1-B5BF-0000F8051515}',
                                '{3AF36230-A269-11D1-B5BF-0000F8051515}',
                                '{89820200-ECBD-11CF-8B85-00AA005B4383}'
                            ];
                        try {
                            a.style.behavior = 'url(#default#clientcaps)';
                        } catch (e) {
                        }
                        for (var d = 0; d < c.length; d++) {
                            try {
                                b = a.getComponentVersion(c[d], 'componentid').replace(/,/g, '.');
                            } catch (e) {
                            }
                            if (b)
                                return b.split('.')[0];
                        }
                        return !1;
                    },
                    function () {
                        return new Date().getTimezoneOffset();
                    },
                    function (a) {
                        return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight);
                    },
                    function (a) {
                        return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight);
                    },
                    function (a) {
                        return a.screen.availWidth / a.screen.availHeight;
                    },
                    function (a) {
                        return a.screen.width / a.screen.height;
                    }
                ], lq = [
                    function (a) {
                        return a.navigator.userAgent;
                    },
                    function (a) {
                        return a.navigator.platform;
                    },
                    function (a) {
                        return a.navigator.vendor;
                    }
                ], nq = function () {
                    try {
                        mq();
                    } catch (d) {
                    }
                    var a = 'a=1&b=' + dq + '&', b = [], c = 99;
                    y(jq, function (d, e) {
                        var f = !1;
                        try {
                            f = d(C);
                        } catch (g) {
                        }
                        b[e / 32 >>> 0] |= f << e % 32;
                    });
                    y(b, function (d, e) {
                        a += String.fromCharCode(c + e) + '=' + (d >>> 0).toString(16) + '&';
                    });
                    c = 105;
                    y(kq, function (d) {
                        var e = 'false';
                        try {
                            e = d(C);
                        } catch (f) {
                        }
                        a += String.fromCharCode(c++) + '=' + e + '&';
                    });
                    y(lq, function (d) {
                        var e = '';
                        try {
                            e = ae(d(C));
                        } catch (f) {
                        }
                        a += String.fromCharCode(c++) + '=' + e + '&';
                    });
                    return a.slice(0, -1);
                }, mq = function () {
                    if (!eq) {
                        var a = function () {
                            fq = !0;
                            C.document.removeEventListener('webdriver-evaluate', a, !0);
                        };
                        C.document.addEventListener('webdriver-evaluate', a, !0);
                        var b = function () {
                            gq = !0;
                            C.document.removeEventListener('webdriver-evaluate-response', b, !0);
                        };
                        C.document.addEventListener('webdriver-evaluate-response', b, !0);
                        eq = !0;
                    }
                };
            var oq = function () {
                this.blockSize = -1;
                this.blockSize = 64;
                this.g = Array(4);
                this.o = Array(this.blockSize);
                this.l = this.h = 0;
                this.reset();
            };
            Xa(oq, uk);
            oq.prototype.reset = function () {
                this.g[0] = 1732584193;
                this.g[1] = 4023233417;
                this.g[2] = 2562383102;
                this.g[3] = 271733878;
                this.l = this.h = 0;
            };
            var pq = function (a, b, c) {
                    c || (c = 0);
                    var d = Array(16);
                    if ('string' === typeof b)
                        for (var e = 0; 16 > e; ++e)
                            d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
                    else
                        for (e = 0; 16 > e; ++e)
                            d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
                    b = a.g[0];
                    c = a.g[1];
                    e = a.g[2];
                    var f = a.g[3];
                    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
                    a.g[0] = a.g[0] + b & 4294967295;
                    a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
                    a.g[2] = a.g[2] + e & 4294967295;
                    a.g[3] = a.g[3] + f & 4294967295;
                }, qq = function (a, b) {
                    if (void 0 === c)
                        var c = b.length;
                    for (var d = c - a.blockSize, e = a.o, f = a.h, g = 0; g < c;) {
                        if (0 == f)
                            for (; g <= d;)
                                pq(a, b, g), g += a.blockSize;
                        if ('string' === typeof b)
                            for (; g < c;) {
                                if (e[f++] = b.charCodeAt(g++), f == a.blockSize) {
                                    pq(a, e);
                                    f = 0;
                                    break;
                                }
                            }
                        else
                            for (; g < c;)
                                if (e[f++] = b[g++], f == a.blockSize) {
                                    pq(a, e);
                                    f = 0;
                                    break;
                                }
                    }
                    a.h = f;
                    a.l += c;
                };
            var rq = function () {
                this.h = null;
            };
            t(rq, xp);
            rq.prototype.g = function (a) {
                var b = xp.prototype.g.call(this, a);
                var c = dq = Wa();
                var d = iq(5);
                c = (fq ? !d : d) ? c | 2 : c & -3;
                d = iq(2);
                c = (gq ? !d : d) ? c | 8 : c & -9;
                c = { s1: (c >>> 0).toString(16) };
                this.h || (this.h = nq());
                b.B = this.h;
                b.A = wp(a, ep, c, 'h', sq('kArwaWEsTs'));
                b.o = wp(a, gp, {}, 'h', sq('b96YPMzfnx'));
                b.h = wp(a, hp, {}, 'h', sq('yb8Wev6QDg'));
                return b;
            };
            var sq = function (a) {
                return function (b) {
                    var c = new oq();
                    qq(c, b + a);
                    var d = Array((56 > c.h ? c.blockSize : 2 * c.blockSize) - c.h);
                    d[0] = 128;
                    for (b = 1; b < d.length - 8; ++b)
                        d[b] = 0;
                    var e = 8 * c.l;
                    for (b = d.length - 8; b < d.length; ++b)
                        d[b] = e & 255, e /= 256;
                    qq(c, d);
                    d = Array(16);
                    for (b = e = 0; 4 > b; ++b)
                        for (var f = 0; 32 > f; f += 8)
                            d[e++] = c.g[b] >>> f & 255;
                    return eb(d).slice(-8);
                };
            };
            var tq = function (a, b) {
                this.l = a;
                this.o = b;
            };
            tq.prototype.report = function (a, b) {
                var c = this.g(b);
                if ('function' === typeof c) {
                    var d = {};
                    d = (d.sv = '900', d.cb = ip, d.e = uq(a), d);
                    var e = $n(b, a, lm());
                    Vb(d, e);
                    b.Qd[a] = e;
                    d = 2 == b.wa() ? Hm(d).join('&') : this.o.g(d).g;
                    try {
                        return c(b.ka, d, a), 0;
                    } catch (f) {
                        return 2;
                    }
                } else
                    return 1;
            };
            var uq = function (a) {
                var b = lp(a) ? 'custom_metric_viewable' : a;
                a = Pb(function (c) {
                    return c == b;
                });
                return Sl[a];
            };
            tq.prototype.g = function () {
                return Ia(this.l);
            };
            var vq = function (a, b, c) {
                tq.call(this, a, b);
                this.h = c;
            };
            t(vq, tq);
            vq.prototype.g = function (a) {
                if (!a.Ta)
                    return tq.prototype.g.call(this, a);
                if (this.h[a.Ta])
                    return function () {
                    };
                Dl(393, Error());
                return null;
            };
            var wq = function () {
                Op.call(this);
                this.D = void 0;
                this.F = null;
                this.J = !1;
                this.B = {};
                this.K = 0;
                this.o = new rq();
            };
            t(wq, Op);
            wq.prototype.I = function (a, b) {
                var c = this, d = F(vo);
                if (null != d.g)
                    switch (d.g.fa()) {
                    case 'nis':
                        var e = xq(this, a, b);
                        break;
                    case 'gsv':
                        e = yq(this, a, b);
                        break;
                    case 'exc':
                        e = zq(this, a);
                    }
                e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = aq(this, a, b.opt_adElement, b.opt_osdId)));
                e && 1 == e.wa() && (e.D == Ja && (e.D = function (f) {
                    return c.fd(f);
                }), Aq(this, e, b));
                return e;
            };
            var Aq = function (a, b, c) {
                c = c.opt_configurable_tracking_events;
                null != a.h && Array.isArray(c) && Rp(a, c, b);
            };
            wq.prototype.fd = function (a) {
                a.h = 0;
                a.M = 0;
                if ('h' == a.B || 'n' == a.B) {
                    if (N().l)
                        var b = Ia('ima.bridge.getVideoMetadata');
                    else if (a.Ta && Bq(this)) {
                        var c = this.B[a.Ta];
                        c ? b = function (e) {
                            return Cq(c, e);
                        } : null !== c && Dl(379, Error());
                    } else
                        b = Ia('ima.common.getVideoMetadata');
                    if ('function' === typeof b)
                        try {
                            var d = b(a.ka);
                        } catch (e) {
                            a.h |= 4;
                        }
                    else
                        a.h |= 2;
                } else if ('b' == a.B)
                    if (b = Ia('ytads.bulleit.getVideoMetadata'), 'function' === typeof b)
                        try {
                            d = b(a.ka);
                        } catch (e) {
                            a.h |= 4;
                        }
                    else
                        a.h |= 2;
                else if ('ml' == a.B)
                    if (b = Ia('ima.common.getVideoMetadata'), 'function' === typeof b)
                        try {
                            d = b(a.ka);
                        } catch (e) {
                            a.h |= 4;
                        }
                    else
                        a.h |= 2;
                else
                    a.h |= 1;
                a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : Rb(d) ? a.h |= 32 : null != d.errorCode && (a.M = d.errorCode, a.h |= 64));
                null == d && (d = {});
                cq(d, a);
                dm(d.volume) && dm(this.D) && (d.volume *= this.D);
                return d;
            };
            var yq = function (a, b, c) {
                    var d = mo(po, b);
                    d || (d = c.opt_nativeTime || -1, d = Pp(a, b, Wp(a), d), c.opt_osdId && (d.Ta = c.opt_osdId));
                    return d;
                }, xq = function (a, b, c) {
                    var d = mo(po, b);
                    d || (d = Pp(a, b, 'n', c.opt_nativeTime || -1));
                    return d;
                }, zq = function (a, b) {
                    var c = mo(po, b);
                    c || (c = Pp(a, b, 'h', -1));
                    return c;
                };
            wq.prototype.sd = function () {
                if (Bq(this))
                    return new vq('ima.common.triggerExternalActivityEvent', this.o, this.B);
                var a = Dq(this);
                return null != a ? new tq(a, this.o) : null;
            };
            var Dq = function (a) {
                var b = N();
                switch (Wp(a)) {
                case 'b':
                    return 'ytads.bulleit.triggerExternalActivityEvent';
                case 'n':
                    return 'ima.bridge.triggerExternalActivityEvent';
                case 'h':
                    if (b.l)
                        return 'ima.bridge.triggerExternalActivityEvent';
                case 'm':
                case 'ml':
                    return 'ima.common.triggerExternalActivityEvent';
                }
                return null;
            };
            wq.prototype.Qc = function (a) {
                !a.g && a.$a && Xp(this, a, 'overlay_unmeasurable_impression') && (a.g = !0);
            };
            wq.prototype.Jd = function (a) {
                a.Md && (a.ab() ? Xp(this, a, 'overlay_viewable_end_of_session_impression') : Xp(this, a, 'overlay_unviewable_impression'), a.Md = !1);
            };
            var Eq = function (a, b, c, d) {
                c = void 0 === c ? {} : c;
                var e = {};
                Vb(e, {
                    opt_adElement: void 0,
                    opt_fullscreen: void 0
                }, c);
                if (e.opt_bounds)
                    return a.o.g(kp('ol', d));
                if (void 0 !== d)
                    if (void 0 !== jp(d))
                        if (Uo)
                            b = kp('ue', d);
                        else if (Up(a), 'i' == To)
                            b = kp('i', d), b['if'] = 0;
                        else if (b = a.I(b, e)) {
                            b: {
                                'i' == To && (b.$a = !0, a.Rc(b));
                                c = e.opt_fullscreen;
                                void 0 !== c && kn(b, !!c);
                                var f;
                                if (c = !O().h && !gm())
                                    fl(), c = 0 === Fg(Qe);
                                if (f = c) {
                                    switch (b.wa()) {
                                    case 1:
                                        Yp(a, b, 'pv');
                                        break;
                                    case 2:
                                        a.Qc(b);
                                    }
                                    Vp('pv');
                                }
                                c = d.toLowerCase();
                                if (f = !f)
                                    c: {
                                        if (Rk(N().U, 'ssmol') && (f = a.l, 'loaded' === c))
                                            break c;
                                        f = ub(Pl, c);
                                    }
                                if (f && 0 == b.ea) {
                                    'i' != To && (Ko.done = !1);
                                    f = void 0 !== e ? e.opt_nativeTime : void 0;
                                    Il = f = 'number' === typeof f ? f : Kl();
                                    b.Ub = !0;
                                    var g = lm();
                                    b.ea = 1;
                                    b.ha = {};
                                    b.ha.start = !1;
                                    b.ha.firstquartile = !1;
                                    b.ha.midpoint = !1;
                                    b.ha.thirdquartile = !1;
                                    b.ha.complete = !1;
                                    b.ha.resume = !1;
                                    b.ha.pause = !1;
                                    b.ha.skip = !1;
                                    b.ha.mute = !1;
                                    b.ha.unmute = !1;
                                    b.ha.viewable_impression = !1;
                                    b.ha.measurable_impression = !1;
                                    b.ha.fully_viewable_audible_half_duration_impression = !1;
                                    b.ha.fullscreen = !1;
                                    b.ha.exitfullscreen = !1;
                                    b.yc = 0;
                                    g || (b.sa().I = f);
                                    No(Ko, [b], !g);
                                }
                                (f = b.gb[c]) && xn(b.ga, f);
                                ub(Ql, c) && !b.$a && b.bb && 0 != b.ea && (f = b.bb, f.g || (f.g = Gn(f, b)));
                                switch (b.wa()) {
                                case 1:
                                    var h = lp(c) ? a.M.custom_metric_viewable : a.M[c];
                                    break;
                                case 2:
                                    h = a.T[c];
                                }
                                if (h && (d = h.call(a, b, e, d), void 0 !== d)) {
                                    e = kp(void 0, c);
                                    Vb(e, d);
                                    d = e;
                                    break b;
                                }
                                d = void 0;
                            }
                            3 == b.ea && a.A(b);
                            b = d;
                        } else
                            b = kp('nf', d);
                    else
                        b = void 0;
                else
                    Uo ? b = kp('ue') : (b = a.I(b, e)) ? (d = kp(), Vb(d, Zn(b, !0, !1, !1)), b = d) : b = kp('nf');
                return 'string' === typeof b ? a.o.g(void 0) : a.o.g(b);
            };
            wq.prototype.L = function (a) {
                this.l && 1 == a.wa() && Fq(this, a);
            };
            wq.prototype.Rc = function (a) {
                this.l && 1 == a.wa() && Fq(this, a);
            };
            var Fq = function (a, b) {
                    var c;
                    if (b.Ta && Bq(a)) {
                        var d = a.B[b.Ta];
                        d ? c = function (f, g) {
                            Gq(d, f, g);
                        } : null !== d && Dl(379, Error());
                    } else
                        c = Ia('ima.common.triggerViewabilityMeasurementUpdate');
                    if ('function' === typeof c) {
                        var e = Un(b);
                        e.nativeVolume = a.D;
                        c(b.ka, e);
                    }
                }, Hq = function (a, b, c) {
                    a.B[b] = c;
                }, Bq = function (a) {
                    return N().l || 'h' != Wp(a) && 'm' != Wp(a) ? !1 : 0 != a.K;
                };
            wq.prototype.C = function (a, b, c, d) {
                a = Op.prototype.C.call(this, a, b, c, d);
                this.J && (b = this.F, null == a.o && (a.o = new sn()), b.g[a.ka] = a.o, a.o.B = bo);
                return a;
            };
            wq.prototype.A = function (a) {
                a && 1 == a.wa() && this.J && delete this.F.g[a.ka];
                return Op.prototype.A.call(this, a);
            };
            var Iq = function (a) {
                    var b = {};
                    return b.viewability = a.g, b.googleViewability = a.l, b.moatInit = a.B, b.moatViewability = a.A, b.integralAdsViewability = a.o, b.doubleVerifyViewability = a.h, b;
                }, Jq = function (a, b, c) {
                    c = void 0 === c ? {} : c;
                    a = Eq(F(wq), b, c, a);
                    return Iq(a);
                }, Kq = new up();
            Kq.B = 'stopped';
            Kq.g = 'stopped';
            Kq.l = 'stopped';
            Kq.A = 'stopped';
            Kq.o = 'stopped';
            Kq.h = 'stopped';
            Object.freeze(Kq);
            var Lq = Cl(193, Jq, void 0, $p);
            x('Goog_AdSense_Lidar_sendVastEvent', Lq, void 0);
            var Mq = Cl(194, function (a, b) {
                b = void 0 === b ? {} : b;
                a = Eq(F(wq), a, b);
                return Iq(a);
            });
            x('Goog_AdSense_Lidar_getViewability', Mq, void 0);
            var Nq = Cl(195, function () {
                return il();
            });
            x('Goog_AdSense_Lidar_getUrlSignalsArray', Nq, void 0);
            var Oq = Cl(196, function () {
                return JSON.stringify(il());
            });
            x('Goog_AdSense_Lidar_getUrlSignalsList', Oq, void 0);
            var Qq = function (a) {
                ve(this, a, -1, Pq, null);
            };
            t(Qq, we);
            var Pq = [3];
            var Sq = function (a) {
                ve(this, a, -1, Rq, null);
            };
            t(Sq, we);
            var Tq = function (a, b) {
                    return Ie(a, 1, b);
                }, Uq = function (a, b) {
                    return Ie(a, 2, b);
                }, Vq = function (a, b) {
                    return Ie(a, 3, b);
                }, Wq = function (a, b) {
                    Ie(a, 4, b);
                }, Rq = [
                    1,
                    2,
                    3,
                    4
                ];
            var Xq = function (a) {
                ve(this, a, -1, null, null);
            };
            t(Xq, we);
            var Zq = function (a) {
                ve(this, a, -1, Yq, null);
            };
            t(Zq, we);
            Zq.prototype.getVersion = function () {
                return Ee(this, 1, 0);
            };
            var $q = function (a, b) {
                    return Je(a, 1, b, 0);
                }, ar = function (a, b) {
                    return Ne(a, 2, b);
                }, br = function (a, b) {
                    return Ne(a, 3, b);
                }, cr = function (a, b) {
                    return Je(a, 4, b, 0);
                }, dr = function (a, b) {
                    return Je(a, 5, b, 0);
                }, er = function (a, b) {
                    return Je(a, 6, b, 0);
                }, fr = function (a, b) {
                    return Je(a, 7, b, '');
                }, gr = function (a, b) {
                    return Je(a, 8, b, 0);
                }, hr = function (a, b) {
                    return Je(a, 9, b, 0);
                }, ir = function (a, b) {
                    return Je(a, 10, b, !1);
                }, jr = function (a, b) {
                    return Je(a, 11, b, !1);
                }, kr = function (a, b) {
                    return Ie(a, 12, b);
                }, lr = function (a, b) {
                    return Ie(a, 13, b);
                }, mr = function (a, b) {
                    return Ie(a, 14, b);
                }, nr = function (a, b) {
                    return Je(a, 15, b, !1);
                }, or = function (a, b) {
                    return Je(a, 16, b, '');
                }, pr = function (a, b) {
                    return Ie(a, 17, b);
                }, qr = function (a, b) {
                    return Ie(a, 18, b);
                }, rr = function (a, b) {
                    a.g || (a.g = {});
                    b = b || [];
                    for (var c = re([]), d = 0; d < b.length; d++)
                        c[d] = Me(b[d]);
                    a.g[19] = b;
                    return He(a, 19, c);
                }, Yq = [
                    12,
                    13,
                    14,
                    17,
                    18,
                    19
                ];
            var sr = function (a) {
                ve(this, a, -1, null, null);
            };
            t(sr, we);
            var tr = 'a'.charCodeAt(), ur = Kb({
                    og: 0,
                    ng: 1,
                    kg: 2,
                    fg: 3,
                    lg: 4,
                    gg: 5,
                    mg: 6,
                    ig: 7,
                    jg: 8,
                    eg: 9,
                    hg: 10
                }), vr = Kb({
                    qg: 0,
                    rg: 1,
                    pg: 2
                });
            var wr = function (a) {
                    if (/[^01]/.test(a))
                        throw Error('Input bitstring ' + a + ' is malformed!');
                    this.h = a;
                    this.g = 0;
                }, yr = function (a) {
                    a = xr(a, 36);
                    var b = new Xq();
                    b = Je(b, 1, Math.floor(a / 10), 0);
                    return Je(b, 2, a % 10 * 100000000, 0);
                }, zr = function (a) {
                    return String.fromCharCode(tr + xr(a, 6)) + String.fromCharCode(tr + xr(a, 6));
                }, Cr = function (a) {
                    var b = xr(a, 16);
                    return !0 === !!xr(a, 1) ? (a = Ar(a), a.forEach(function (c) {
                        if (c > b)
                            throw Error('ID ' + c + ' is past MaxVendorId ' + b + '!');
                    }), a) : Br(a, b);
                }, Dr = function (a) {
                    for (var b = [], c = xr(a, 12); c--;) {
                        var d = xr(a, 6), e = xr(a, 2), f = Ar(a), g = b, h = g.push, k = new Qq();
                        d = Je(k, 1, d, 0);
                        e = Je(d, 2, e, 0);
                        f = Ie(e, 3, f);
                        h.call(g, f);
                    }
                    return b;
                }, Ar = function (a) {
                    for (var b = xr(a, 12), c = []; b--;) {
                        var d = !0 === !!xr(a, 1), e = xr(a, 16);
                        if (d)
                            for (d = xr(a, 16); e <= d; e++)
                                c.push(e);
                        else
                            c.push(e);
                    }
                    c.sort(function (f, g) {
                        return f - g;
                    });
                    return c;
                }, Br = function (a, b, c) {
                    for (var d = [], e = 0; e < b; e++)
                        if (xr(a, 1)) {
                            var f = e + 1;
                            if (c && -1 === c.indexOf(f))
                                throw Error('ID: ' + f + ' is outside of allowed values!');
                            d.push(f);
                        }
                    return d;
                }, xr = function (a, b) {
                    if (a.g + b > a.h.length)
                        throw Error('Requested length ' + b + ' is past end of string.');
                    var c = a.h.substring(a.g, a.g + b);
                    a.g += b;
                    return parseInt(c, 2);
                };
            wr.prototype.skip = function (a) {
                this.g += a;
            };
            var Er = function (a) {
                try {
                    var b = ce(a).map(function (f) {
                            return f.toString(2).padStart(8, '0');
                        }).join(''), c = new wr(b);
                    if (3 !== xr(c, 3))
                        return null;
                    var d = Uq(Tq(new Sq(), Br(c, 24, ur)), Br(c, 24, ur)), e = xr(c, 6);
                    0 !== e && Wq(Vq(d, Br(c, e)), Br(c, e));
                    return d;
                } catch (f) {
                    return null;
                }
            };
            var Fr = function (a) {
                try {
                    var b = ce(a).map(function (d) {
                            return d.toString(2).padStart(8, '0');
                        }).join(''), c = new wr(b);
                    return rr(qr(pr(or(nr(mr(lr(kr(jr(ir(hr(gr(fr(er(dr(cr(br(ar($q(new Zq(), xr(c, 6)), yr(c)), yr(c)), xr(c, 12)), xr(c, 12)), xr(c, 6)), zr(c)), xr(c, 12)), xr(c, 6)), !!xr(c, 1)), !!xr(c, 1)), Br(c, 12, vr)), Br(c, 24, ur)), Br(c, 24, ur)), !!xr(c, 1)), zr(c)), Cr(c)), Cr(c)), Dr(c));
                } catch (d) {
                    return null;
                }
            };
            var Hr = function (a) {
                    if (!a)
                        return null;
                    var b = a.split('.');
                    if (4 < b.length)
                        return null;
                    a = Fr(b[0]);
                    if (!a)
                        return null;
                    var c = new sr();
                    a = Ne(c, 1, a);
                    b.shift();
                    b = q(b);
                    for (c = b.next(); !c.done; c = b.next())
                        switch (c = c.value, Gr(c)) {
                        case 1:
                        case 2:
                            break;
                        case 3:
                            c = Er(c);
                            if (!c)
                                return null;
                            Ne(a, 2, c);
                            break;
                        default:
                            return null;
                        }
                    return a;
                }, Gr = function (a) {
                    try {
                        var b = ce(a).map(function (c) {
                            return c.toString(2).padStart(8, '0');
                        }).join('');
                        return xr(new wr(b), 3);
                    } catch (c) {
                        return -1;
                    }
                };
            var Ir = function (a, b) {
                var c = {};
                if (Array.isArray(b) && 0 !== b.length) {
                    b = q(b);
                    for (var d = b.next(); !d.done; d = b.next())
                        d = d.value, c[d] = -1 !== a.indexOf(d);
                } else
                    for (a = q(a), d = a.next(); !d.done; d = a.next())
                        c[d.value] = !0;
                delete c[0];
                return c;
            };
            var Jr = function (a, b) {
                    this.g = a;
                    this.defaultValue = void 0 === b ? !1 : b;
                }, Kr = function (a, b) {
                    this.g = a;
                    this.defaultValue = void 0 === b ? 0 : b;
                };
            var Lr = new Jr(1936, !0), Mr = new Jr(1930), Nr = new Kr(360261971), Or = new Kr(1921, 72), Pr = new Kr(1920, 24), Qr = new Kr(1917, -1), Rr = new Kr(1916, 0.001), Sr = new Jr(382136472), Tr = new Jr(1928), Ur = new Jr(1941), Vr = new Jr(370946349), Wr = new Jr(379841917), Xr = new Jr(377105258, !0);
            var Zr = function (a) {
                ve(this, a, -1, Yr, null);
            };
            t(Zr, we);
            var Yr = [6];
            var $r = function () {
            };
            $r.prototype.g = null;
            var bs = function (a) {
                var b;
                (b = a.g) || (b = {}, as(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
                return b;
            };
            var cs, ds = function () {
                };
            Xa(ds, $r);
            var es = function (a) {
                    return (a = as(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
                }, as = function (a) {
                    if (!a.h && 'undefined' == typeof XMLHttpRequest && 'undefined' != typeof ActiveXObject) {
                        for (var b = [
                                    'MSXML2.XMLHTTP.6.0',
                                    'MSXML2.XMLHTTP.3.0',
                                    'MSXML2.XMLHTTP',
                                    'Microsoft.XMLHTTP'
                                ], c = 0; c < b.length; c++) {
                            var d = b[c];
                            try {
                                return new ActiveXObject(d), a.h = d;
                            } catch (e) {
                            }
                        }
                        throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed');
                    }
                    return a.h;
                };
            cs = new ds();
            var fs = function (a, b) {
                this.g = a[u.Symbol.iterator]();
                this.h = b;
                this.l = 0;
            };
            fs.prototype[Symbol.iterator] = function () {
                return this;
            };
            fs.prototype.next = function () {
                var a = this.g.next();
                return {
                    value: a.done ? void 0 : this.h.call(void 0, a.value, this.l++),
                    done: a.done
                };
            };
            var gs = function (a, b) {
                return new fs(a, b);
            };
            var ls = function (a) {
                    if (a instanceof hs || a instanceof is || a instanceof js)
                        return a;
                    if ('function' == typeof a.next)
                        return new hs(function () {
                            return ks(a);
                        });
                    if ('function' == typeof a[Symbol.iterator])
                        return new hs(function () {
                            return a[Symbol.iterator]();
                        });
                    if ('function' == typeof a.lb)
                        return new hs(function () {
                            return ks(a.lb());
                        });
                    throw Error('Not an iterator or iterable.');
                }, ks = function (a) {
                    if (!(a instanceof rn))
                        return a;
                    var b = !1;
                    return {
                        next: function () {
                            for (var c; !b;)
                                try {
                                    c = a.next();
                                    break;
                                } catch (d) {
                                    if (d !== qn)
                                        throw d;
                                    b = !0;
                                }
                            return {
                                value: c,
                                done: b
                            };
                        }
                    };
                }, hs = function (a) {
                    this.g = a;
                };
            hs.prototype.lb = function () {
                return new is(this.g());
            };
            hs.prototype[Symbol.iterator] = function () {
                return new js(this.g());
            };
            hs.prototype.l = function () {
                return new js(this.g());
            };
            var is = function (a) {
                this.h = a;
            };
            t(is, rn);
            is.prototype.g = function () {
                var a = this.h.next();
                if (a.done)
                    throw qn;
                return a.value;
            };
            is.prototype.next = function () {
                return is.prototype.g.call(this);
            };
            is.prototype[Symbol.iterator] = function () {
                return new js(this.h);
            };
            is.prototype.l = function () {
                return new js(this.h);
            };
            var js = function (a) {
                hs.call(this, function () {
                    return a;
                });
                this.h = a;
            };
            t(js, hs);
            js.prototype.next = function () {
                return this.h.next();
            };
            var ms = function (a, b) {
                this.h = {};
                this.g = [];
                this.l = this.size = 0;
                var c = arguments.length;
                if (1 < c) {
                    if (c % 2)
                        throw Error('Uneven number of arguments');
                    for (var d = 0; d < c; d += 2)
                        this.set(arguments[d], arguments[d + 1]);
                } else if (a)
                    if (a instanceof ms)
                        for (c = a.Xa(), d = 0; d < c.length; d++)
                            this.set(c[d], a.get(c[d]));
                    else
                        for (d in a)
                            this.set(d, a[d]);
            };
            ms.prototype.Na = function () {
                ns(this);
                for (var a = [], b = 0; b < this.g.length; b++)
                    a.push(this.h[this.g[b]]);
                return a;
            };
            ms.prototype.Xa = function () {
                ns(this);
                return this.g.concat();
            };
            ms.prototype.has = function (a) {
                return os(this.h, a);
            };
            ms.prototype.remove = function (a) {
                os(this.h, a) ? (delete this.h[a], --this.size, this.l++, this.g.length > 2 * this.size && ns(this), a = !0) : a = !1;
                return a;
            };
            var ns = function (a) {
                if (a.size != a.g.length) {
                    for (var b = 0, c = 0; b < a.g.length;) {
                        var d = a.g[b];
                        os(a.h, d) && (a.g[c++] = d);
                        b++;
                    }
                    a.g.length = c;
                }
                if (a.size != a.g.length) {
                    var e = {};
                    for (c = b = 0; b < a.g.length;)
                        d = a.g[b], os(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                    a.g.length = c;
                }
            };
            l = ms.prototype;
            l.get = function (a, b) {
                return os(this.h, a) ? this.h[a] : b;
            };
            l.set = function (a, b) {
                os(this.h, a) || (this.size += 1, this.g.push(a), this.l++);
                this.h[a] = b;
            };
            l.forEach = function (a, b) {
                for (var c = this.Xa(), d = 0; d < c.length; d++) {
                    var e = c[d], f = this.get(e);
                    a.call(b, f, e, this);
                }
            };
            l.keys = function () {
                return ls(this.lb(!0)).l();
            };
            l.values = function () {
                return ls(this.lb(!1)).l();
            };
            l.entries = function () {
                var a = this;
                return gs(this.keys(), function (b) {
                    return [
                        b,
                        a.get(b)
                    ];
                });
            };
            l.lb = function (a) {
                ns(this);
                var b = 0, c = this.l, d = this, e = new rn();
                e.g = function () {
                    if (c != d.l)
                        throw Error('The map has changed since the iterator was created');
                    if (b >= d.g.length)
                        throw qn;
                    var f = d.g[b++];
                    return a ? f : d.h[f];
                };
                e.next = e.g.bind(e);
                return e;
            };
            var os = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b);
            };
            var ps = function (a) {
                L.call(this);
                this.headers = new ms();
                this.H = a || null;
                this.h = !1;
                this.F = this.g = null;
                this.M = '';
                this.o = 0;
                this.l = this.L = this.A = this.K = !1;
                this.D = 0;
                this.C = null;
                this.$ = '';
                this.T = this.V = !1;
                this.R = null;
            };
            Xa(ps, L);
            var qs = /^https?$/i, rs = [
                    'POST',
                    'PUT'
                ];
            ps.prototype.X = function (a) {
                this.R = a;
            };
            var ws = function (a, b, c, d) {
                    if (a.g)
                        throw Error('[goog.net.XhrIo] Object is active with another request=' + a.M + '; newUri=' + b);
                    c = c ? c.toUpperCase() : 'GET';
                    a.M = b;
                    a.o = 0;
                    a.K = !1;
                    a.h = !0;
                    a.g = a.H ? es(a.H) : es(cs);
                    a.F = a.H ? bs(a.H) : bs(cs);
                    a.g.onreadystatechange = Ua(a.Y, a);
                    try {
                        a.L = !0, a.g.open(c, String(b), !0), a.L = !1;
                    } catch (g) {
                        ts(a);
                        return;
                    }
                    b = d || '';
                    d = new ms(a.headers);
                    var e = d.Xa().find(function (g) {
                            return 'content-type' == g.toLowerCase();
                        }), f = u.FormData && b instanceof u.FormData;
                    !ub(rs, c) || e || f || d.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                    d.forEach(function (g, h) {
                        this.g.setRequestHeader(h, g);
                    }, a);
                    a.$ && (a.g.responseType = a.$);
                    'withCredentials' in a.g && a.g.withCredentials !== a.V && (a.g.withCredentials = a.V);
                    if ('setTrustToken' in a.g && a.R)
                        try {
                            a.g.setTrustToken(a.R);
                        } catch (g) {
                        }
                    try {
                        us(a), 0 < a.D && (a.T = vs(a.g), a.T ? (a.g.timeout = a.D, a.g.ontimeout = Ua(a.aa, a)) : a.C = uj(a.aa, a.D, a)), a.A = !0, a.g.send(b), a.A = !1;
                    } catch (g) {
                        ts(a);
                    }
                }, vs = function (a) {
                    return wd && Nd(9) && 'number' === typeof a.timeout && void 0 !== a.ontimeout;
                };
            ps.prototype.aa = function () {
                'undefined' != typeof Ha && this.g && (this.o = 8, this.dispatchEvent('timeout'), this.abort(8));
            };
            var ts = function (a) {
                    a.h = !1;
                    a.g && (a.l = !0, a.g.abort(), a.l = !1);
                    a.o = 5;
                    xs(a);
                    ys(a);
                }, xs = function (a) {
                    a.K || (a.K = !0, a.dispatchEvent('complete'), a.dispatchEvent('error'));
                };
            ps.prototype.abort = function (a) {
                this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent('complete'), this.dispatchEvent('abort'), ys(this));
            };
            ps.prototype.N = function () {
                this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), ys(this, !0));
                ps.ya.N.call(this);
            };
            ps.prototype.Y = function () {
                this.Ra() || (this.L || this.A || this.l ? zs(this) : this.da());
            };
            ps.prototype.da = function () {
                zs(this);
            };
            var zs = function (a) {
                    if (a.h && 'undefined' != typeof Ha && (!a.F[1] || 4 != As(a) || 2 != Bs(a)))
                        if (a.A && 4 == As(a))
                            uj(a.Y, 0, a);
                        else if (a.dispatchEvent('readystatechange'), 4 == As(a)) {
                            a.h = !1;
                            try {
                                var b = Bs(a);
                                a:
                                    switch (b) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var c = !0;
                                        break a;
                                    default:
                                        c = !1;
                                    }
                                var d;
                                if (!(d = c)) {
                                    var e;
                                    if (e = 0 === b) {
                                        var f = String(a.M).match(wf)[1] || null;
                                        if (!f && u.self && u.self.location) {
                                            var g = u.self.location.protocol;
                                            f = g.substr(0, g.length - 1);
                                        }
                                        e = !qs.test(f ? f.toLowerCase() : '');
                                    }
                                    d = e;
                                }
                                d ? (a.dispatchEvent('complete'), a.dispatchEvent('success')) : (a.o = 6, xs(a));
                            } finally {
                                ys(a);
                            }
                        }
                }, ys = function (a, b) {
                    if (a.g) {
                        us(a);
                        var c = a.g, d = a.F[0] ? Ja : null;
                        a.g = null;
                        a.F = null;
                        b || a.dispatchEvent('ready');
                        try {
                            c.onreadystatechange = d;
                        } catch (e) {
                        }
                    }
                }, us = function (a) {
                    a.g && a.T && (a.g.ontimeout = null);
                    a.C && (u.clearTimeout(a.C), a.C = null);
                };
            ps.prototype.Gc = function () {
                return !!this.g;
            };
            var As = function (a) {
                    return a.g ? a.g.readyState : 0;
                }, Bs = function (a) {
                    try {
                        return 2 < As(a) ? a.g.status : -1;
                    } catch (b) {
                        return -1;
                    }
                }, Cs = function (a) {
                    try {
                        return a.g ? a.g.responseText : '';
                    } catch (b) {
                        return '';
                    }
                }, Ds = function (a) {
                    if (a.g) {
                        a: {
                            a = a.g.responseText;
                            if (u.JSON)
                                try {
                                    var b = u.JSON.parse(a);
                                    break a;
                                } catch (c) {
                                }
                            b = $g(a);
                        }
                        return b;
                    }
                }, Es = function (a, b) {
                    if (a.g && 4 == As(a))
                        return a = a.g.getResponseHeader(b), null === a ? void 0 : a;
                };
            var Fs = function (a) {
                ve(this, a, -1, null, null);
            };
            t(Fs, we);
            var Gs = function (a) {
                ve(this, a, -1, null, null);
            };
            t(Gs, we);
            var Hs = function (a) {
                this.g = a || { cookie: '' };
            };
            l = Hs.prototype;
            l.set = function (a, b, c) {
                var d = !1;
                if ('object' === typeof c) {
                    var e = c.wh;
                    d = c.kf || !1;
                    var f = c.domain || void 0;
                    var g = c.path || void 0;
                    var h = c.Ed;
                }
                if (/[;=\s]/.test(a))
                    throw Error('Invalid cookie name "' + a + '"');
                if (/[;\r\n]/.test(b))
                    throw Error('Invalid cookie value "' + b + '"');
                void 0 === h && (h = -1);
                this.g.cookie = a + '=' + b + (f ? ';domain=' + f : '') + (g ? ';path=' + g : '') + (0 > h ? '' : 0 == h ? ';expires=' + new Date(1970, 1, 1).toUTCString() : ';expires=' + new Date(Date.now() + 1000 * h).toUTCString()) + (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '');
            };
            l.get = function (a, b) {
                for (var c = a + '=', d = (this.g.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
                    f = ic(d[e]);
                    if (0 == f.lastIndexOf(c, 0))
                        return f.substr(c.length);
                    if (f == a)
                        return '';
                }
                return b;
            };
            l.remove = function (a, b, c) {
                var d = void 0 !== this.get(a);
                this.set(a, '', {
                    Ed: 0,
                    path: b,
                    domain: c
                });
                return d;
            };
            l.Xa = function () {
                return Is(this).keys;
            };
            l.Na = function () {
                return Is(this).values;
            };
            var Is = function (a) {
                a = (a.g.cookie || '').split(';');
                for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
                    e = ic(a[f]), d = e.indexOf('='), -1 == d ? (b.push(''), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
                return {
                    keys: b,
                    values: c
                };
            };
            var Js = function () {
                }, Ks;
            t(Js, ol);
            Ks || (Ks = new Js());
            var Ls = function (a) {
                    return (a = new Hs(a).get('DATA_USE_CONSENT', '')) ? a : null;
                }, Ms = function (a) {
                    var b = (b = new Hs(a).get('FCCDCF', '')) ? b : null;
                    try {
                        var c = b ? ye(Fs, b ? JSON.parse(b) : null) : null;
                    } catch (d) {
                        c = null;
                    }
                    if (!c)
                        return Ls(a);
                    c = Ke(c, Gs, 3);
                    if (!c || null == A(c, 1))
                        return Ls(a);
                    a = A(c, 2);
                    b = Date.now();
                    if (a) {
                        if (b < a || b > a + 33696000000)
                            return null;
                    } else
                        return null;
                    return A(c, 1);
                };
            var Os = function (a) {
                ve(this, a, -1, Ns, null);
            };
            t(Os, we);
            var Ns = [
                1,
                2,
                3,
                4
            ];
            var Ps = /^((market|itms|intent|itms-appss):\/\/)/i;
            var P = function (a, b) {
                this.g = this.A = this.o = '';
                this.I = null;
                this.J = this.h = '';
                this.B = !1;
                var c;
                a instanceof P ? (this.B = void 0 !== b ? b : a.B, Qs(this, a.o), this.A = a.A, this.g = a.g, Rs(this, a.I), this.h = a.h, Ss(this, Ts(a.l)), this.J = a.D()) : a && (c = String(a).match(wf)) ? (this.B = !!b, Qs(this, c[1] || '', !0), this.A = Us(c[2] || ''), this.g = Us(c[3] || '', !0), Rs(this, c[4]), this.h = Us(c[5] || '', !0), Ss(this, c[6] || '', !0), this.J = Us(c[7] || '')) : (this.B = !!b, this.l = new Vs(null, this.B));
            };
            P.prototype.toString = function () {
                var a = [], b = this.o;
                b && a.push(Ws(b, Xs, !0), ':');
                var c = this.g;
                if (c || 'file' == b)
                    a.push('//'), (b = this.A) && a.push(Ws(b, Xs, !0), '@'), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')), c = this.I, null != c && a.push(':', String(c));
                if (c = this.h)
                    this.g && '/' != c.charAt(0) && a.push('/'), a.push(Ws(c, '/' == c.charAt(0) ? Ys : Zs, !0));
                (c = this.l.toString()) && a.push('?', c);
                (c = this.D()) && a.push('#', Ws(c, $s));
                return a.join('');
            };
            P.prototype.resolve = function (a) {
                var b = this.F(), c = !!a.o;
                c ? Qs(b, a.o) : c = !!a.A;
                c ? b.A = a.A : c = !!a.g;
                c ? b.g = a.g : c = null != a.I;
                var d = a.h;
                if (c)
                    Rs(b, a.I);
                else if (c = !!a.h) {
                    if ('/' != d.charAt(0))
                        if (this.g && !this.h)
                            d = '/' + d;
                        else {
                            var e = b.h.lastIndexOf('/');
                            -1 != e && (d = b.h.substr(0, e + 1) + d);
                        }
                    e = d;
                    if ('..' == e || '.' == e)
                        d = '';
                    else if (-1 != e.indexOf('./') || -1 != e.indexOf('/.')) {
                        d = 0 == e.lastIndexOf('/', 0);
                        e = e.split('/');
                        for (var f = [], g = 0; g < e.length;) {
                            var h = e[g++];
                            '.' == h ? d && g == e.length && f.push('') : '..' == h ? ((1 < f.length || 1 == f.length && '' != f[0]) && f.pop(), d && g == e.length && f.push('')) : (f.push(h), d = !0);
                        }
                        d = f.join('/');
                    } else
                        d = e;
                }
                c ? b.h = d : c = '' !== a.l.toString();
                c ? Ss(b, Ts(a.l)) : c = !!a.J;
                c && (b.J = a.D());
                return b;
            };
            P.prototype.F = function () {
                return new P(this);
            };
            var Qs = function (a, b, c) {
                    a.o = c ? Us(b, !0) : b;
                    a.o && (a.o = a.o.replace(/:$/, ''));
                }, Rs = function (a, b) {
                    if (b) {
                        b = Number(b);
                        if (isNaN(b) || 0 > b)
                            throw Error('Bad port number ' + b);
                        a.I = b;
                    } else
                        a.I = null;
                }, Ss = function (a, b, c) {
                    b instanceof Vs ? (a.l = b, at(a.l, a.B)) : (c || (b = Ws(b, bt)), a.l = new Vs(b, a.B));
                }, ct = function (a, b, c) {
                    a.l.set(b, c);
                    return a;
                };
            P.prototype.D = function () {
                return this.J;
            };
            var Us = function (a, b) {
                    return a ? b ? decodeURI(a.replace(/%25/g, '%2525')) : decodeURIComponent(a) : '';
                }, Ws = function (a, b, c) {
                    return 'string' === typeof a ? (a = encodeURI(a).replace(b, dt), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), a) : null;
                }, dt = function (a) {
                    a = a.charCodeAt(0);
                    return '%' + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
                }, Xs = /[#\/\?@]/g, Zs = /[#\?:]/g, Ys = /[#\?]/g, bt = /[#\?@]/g, $s = /#/g, Vs = function (a, b) {
                    this.h = this.g = null;
                    this.l = a || null;
                    this.o = !!b;
                }, et = function (a) {
                    a.g || (a.g = new ms(), a.h = 0, a.l && yf(a.l, function (b, c) {
                        a.add(Xc(b), c);
                    }));
                };
            Vs.prototype.add = function (a, b) {
                et(this);
                this.l = null;
                a = ft(this, a);
                var c = this.g.get(a);
                c || this.g.set(a, c = []);
                c.push(b);
                this.h += 1;
                return this;
            };
            Vs.prototype.remove = function (a) {
                et(this);
                a = ft(this, a);
                return this.g.has(a) ? (this.l = null, this.h -= this.g.get(a).length, this.g.remove(a)) : !1;
            };
            var gt = function (a, b) {
                et(a);
                b = ft(a, b);
                return a.g.has(b);
            };
            l = Vs.prototype;
            l.forEach = function (a, b) {
                et(this);
                this.g.forEach(function (c, d) {
                    c.forEach(function (e) {
                        a.call(b, e, d, this);
                    }, this);
                }, this);
            };
            l.Xa = function () {
                et(this);
                for (var a = this.g.Na(), b = this.g.Xa(), c = [], d = 0; d < b.length; d++)
                    for (var e = a[d], f = 0; f < e.length; f++)
                        c.push(b[d]);
                return c;
            };
            l.Na = function (a) {
                et(this);
                var b = [];
                if ('string' === typeof a)
                    gt(this, a) && (b = b.concat(this.g.get(ft(this, a))));
                else {
                    a = this.g.Na();
                    for (var c = 0; c < a.length; c++)
                        b = b.concat(a[c]);
                }
                return b;
            };
            l.set = function (a, b) {
                et(this);
                this.l = null;
                a = ft(this, a);
                gt(this, a) && (this.h -= this.g.get(a).length);
                this.g.set(a, [b]);
                this.h += 1;
                return this;
            };
            l.get = function (a, b) {
                if (!a)
                    return b;
                a = this.Na(a);
                return 0 < a.length ? String(a[0]) : b;
            };
            l.toString = function () {
                if (this.l)
                    return this.l;
                if (!this.g)
                    return '';
                for (var a = [], b = this.g.Xa(), c = 0; c < b.length; c++) {
                    var d = b[c], e = encodeURIComponent(String(d));
                    d = this.Na(d);
                    for (var f = 0; f < d.length; f++) {
                        var g = e;
                        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
                        a.push(g);
                    }
                }
                return this.l = a.join('&');
            };
            var Ts = function (a) {
                    var b = new Vs();
                    b.l = a.l;
                    a.g && (b.g = new ms(a.g), b.h = a.h);
                    return b;
                }, ft = function (a, b) {
                    b = String(b);
                    a.o && (b = b.toLowerCase());
                    return b;
                }, at = function (a, b) {
                    b && !a.o && (et(a), a.l = null, a.g.forEach(function (c, d) {
                        var e = d.toLowerCase();
                        d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.l = null, this.g.set(ft(this, e), zb(c)), this.h += c.length));
                    }, a));
                    a.o = b;
                };
            var ht = '://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav'.split(' '), it = /\bocr\b/, jt = 0, kt = {}, lt = function (a) {
                    if (hc(bd(a)))
                        return !1;
                    if (0 <= a.indexOf('://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&'))
                        return !0;
                    try {
                        var b = new P(a);
                    } catch (c) {
                        return null != rb(ht, function (d) {
                            return 0 < a.search(d);
                        });
                    }
                    return b.D().match(it) ? !0 : null != rb(ht, function (c) {
                        return null != a.match(c);
                    });
                }, pt = function (a) {
                    if (a && (a = mt(a), !hc(a))) {
                        var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                        nt(function (c) {
                            ot(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"');
                        });
                    }
                }, ot = function (a) {
                    var b = of('IFRAME', {
                        src: a,
                        style: 'display:none'
                    });
                    a = df(b).body;
                    var c = uj(function () {
                        Mi(d);
                        pf(b);
                    }, 15000);
                    var d = Di(b, [
                        'load',
                        'error'
                    ], function () {
                        uj(function () {
                            u.clearTimeout(c);
                            pf(b);
                        }, 5000);
                    });
                    a.appendChild(b);
                }, nt = function (a) {
                    var b = kt.imageLoadingEnabled;
                    if (null != b)
                        a(b);
                    else {
                        var c = !1;
                        qt(function (d, e) {
                            delete kt[e];
                            c || (c = !0, null == kt.imageLoadingEnabled && (kt.imageLoadingEnabled = d), a(d));
                        });
                    }
                }, qt = function (a) {
                    var b = new Image(), c = '' + jt++;
                    kt[c] = b;
                    b.onload = function () {
                        clearTimeout(d);
                        a(!0, c);
                    };
                    var d = setTimeout(function () {
                        a(!1, c);
                    }, 300);
                    b.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
                }, rt = function (a) {
                    if (a) {
                        var b = mf(document, 'OBJECT');
                        b.data = a;
                        b.width = '1';
                        b.height = '1';
                        b.style.visibility = 'hidden';
                        var c = '' + jt++;
                        kt[c] = b;
                        b.onload = b.onerror = function () {
                            delete kt[c];
                        };
                        document.body.appendChild(b);
                    }
                }, tt = function (a) {
                    if (a) {
                        var b = new Image(), c = '' + jt++;
                        kt[c] = b;
                        b.onload = b.onerror = function () {
                            delete kt[c];
                        };
                        b.src = a;
                    }
                }, ut = function (a) {
                    a && nt(function (b) {
                        b ? tt(a) : rt(a);
                    });
                }, mt = function (a) {
                    if (!(a instanceof vc))
                        if (a = 'object' == typeof a && a.Qa ? a.Fa() : String(a), zc.test(a))
                            a = new vc(a, uc);
                        else {
                            a = String(a);
                            a = a.replace(/(%0A|%0D)/g, '');
                            var b = a.match(yc);
                            a = b && xc.test(b[1]) ? new vc(a, uc) : null;
                        }
                    a = wc(a || Bc);
                    if ('about:invalid#zClosurez' === a)
                        return '';
                    if (!(a instanceof Nc)) {
                        b = 'object' == typeof a;
                        var c = null;
                        b && a.Dc && (c = a.zc());
                        a = Pc(qc(b && a.Qa ? a.Fa() : String(a)), c);
                    }
                    a = Oc(a).toString();
                    return encodeURIComponent(String(ch(new ah(void 0), a)));
                };
            var vt = 'ad_type vpos mridx pos vad_type videoad_start_delay'.split(' ');
            var wt = function (a) {
                var b = a.ob, c = a.height, d = a.width, e = void 0 === a.Ia ? !1 : a.Ia;
                this.A = a.vb;
                this.g = b;
                this.o = c;
                this.J = d;
                this.B = e;
            };
            wt.prototype.getHeight = function () {
                return this.o;
            };
            wt.prototype.getWidth = function () {
                return this.J;
            };
            var xt = function (a) {
                var b = a.tf, c = a.qe, d = a.sf, e = a.pe;
                wt.call(this, {
                    vb: a.vb,
                    ob: a.ob,
                    height: a.height,
                    width: a.width,
                    Ia: void 0 === a.Ia ? !1 : a.Ia
                });
                this.I = b;
                this.l = c;
                this.C = d;
                this.h = e;
            };
            t(xt, wt);
            var yt = function (a) {
                var b = a.Xe;
                wt.call(this, {
                    vb: a.vb,
                    ob: a.ob,
                    height: a.height,
                    width: a.width,
                    Ia: void 0 === a.Ia ? !1 : a.Ia
                });
                this.h = b;
            };
            t(yt, wt);
            yt.prototype.getMediaUrl = function () {
                return this.h;
            };
            var zt = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), At = function () {
                    for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
                        8 == d || 13 == d || 18 == d || 23 == d ? a[d] = '-' : 14 == d ? a[d] = '4' : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = zt[19 == d ? c & 3 | 8 : c]);
                    return a.join('');
                };
            function Bt(a, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                    c[d - 1] = arguments[d];
                return new (Function.prototype.bind.apply(a, [null].concat(fa(c))))();
            }
            ;
            var Q = {}, Ct = (Q[18] = -1, Q[22] = -1, Q[43] = 350, Q[44] = 350, Q[45] = 350, Q[59] = -1, Q[133] = 350, Q[134] = 350, Q[135] = 350, Q[136] = 350, Q[139] = 50, Q[140] = 50, Q[141] = 50, Q[160] = 350, Q[242] = 150, Q[243] = 150, Q[244] = 150, Q[245] = 150, Q[249] = 50, Q[250] = 50, Q[251] = 50, Q[278] = 150, Q[342] = -1, Q[343] = -1, Q[344] = -1, Q[345] = -1, Q[346] = -1, Q[347] = -1, Q), R = {}, Dt = (R[18] = !1, R[22] = !1, R[43] = !0, R[44] = !0, R[45] = !0, R[59] = !1, R[133] = !0, R[134] = !0, R[135] = !0, R[136] = !0, R[139] = !0, R[140] = !0, R[141] = !0, R[160] = !0, R[242] = !0, R[243] = !0, R[244] = !0, R[245] = !0, R[249] = !0, R[250] = !0, R[251] = !0, R[278] = !0, R[342] = !1, R[343] = !1, R[344] = !1, R[345] = !1, R[346] = !1, R[347] = !1, R), S = {}, Et = (S[18] = 'video/mp4', S[22] = 'video/mp4', S[43] = 'video/webm', S[44] = 'video/webm', S[45] = 'video/webm', S[59] = 'video/mp4', S[133] = 'video/mp4', S[134] = 'video/mp4', S[135] = 'video/mp4', S[136] = 'video/mp4', S[139] = 'audio/mp4', S[140] = 'audio/mp4', S[141] = 'audio/mp4', S[160] = 'video/mp4', S[242] = 'video/webm', S[243] = 'video/webm', S[244] = 'video/webm', S[245] = 'video/webm', S[249] = 'audio/webm', S[250] = 'audio/webm', S[251] = 'audio/webm', S[278] = 'video/webm', S[342] = 'video/mp4', S[343] = 'video/mp4', S[344] = 'video/mp4', S[345] = 'video/mp4', S[346] = 'video/mp4', S[347] = 'video/mp4', S), U = {}, Ft = (U[18] = 'avc1.42001E, mp4a.40.2', U[22] = 'avc1.64001F, mp4a.40.2', U[43] = 'vp8, vorbis', U[44] = 'vp8, vorbis', U[45] = 'vp8, vorbis', U[59] = 'avc1.4D001F, mp4a.40.2', U[133] = 'avc1.4D401E', U[134] = 'avc1.4D401E', U[135] = 'avc1.4D401E', U[136] = 'avc1.4D401E', U[139] = 'mp4a.40.2', U[140] = 'mp4a.40.2', U[141] = 'mp4a.40.2', U[160] = 'avc1.4D401E', U[242] = 'vp9', U[243] = 'vp9', U[244] = 'vp9', U[245] = 'vp9', U[249] = 'opus', U[250] = 'opus', U[251] = 'opus', U[278] = 'vp9', U[342] = 'avc1.42E01E, mp4a.40.2', U[343] = 'avc1.42E01E, mp4a.40.2', U[344] = 'avc1.42E01E, mp4a.40.2', U[345] = 'avc1.42E01E, mp4a.40.2', U[346] = 'avc1.42E01E, mp4a.40.2', U[347] = 'avc1.4D001F, mp4a.40.2', U);
            var Gt = /\/itag\/(\d+)\//;
            function Ht(a) {
                var b = parseInt(Af(a, 'itag'), 10);
                return b ? b : (a = a.match(Gt)) && 2 == a.length ? parseInt(a[1], 10) : null;
            }
            function It(a) {
                var b = Et[a];
                a = Ft[a];
                b ? (b = bd(b).toLowerCase(), b = a ? b + '; codecs="' + bd(a) + '"' : b) : b = '';
                return b;
            }
            function Jt(a, b) {
                if ('function' === typeof CustomEvent)
                    return new CustomEvent(a, { detail: b });
                var c = document.createEvent('CustomEvent');
                c.initCustomEvent(a, !1, !0, b);
                return c;
            }
            ;
            var Kt = -1;
            var Lt = function () {
                this.g = Date.now();
            };
            Lt.prototype.reset = function () {
                this.g = Date.now();
            };
            var Mt = function (a) {
                a = a.g + 5000 - Date.now();
                return 0 < a ? a : 0;
            };
            var Nt = 'ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com'.split(' '), Ot = ['c.googlesyndication.com'];
            function Pt(a, b) {
                b = void 0 === b ? window.location.protocol : b;
                var c = !1;
                Qt(a, Ot) ? c = !1 : b.includes('https') && Qt(a, Nt) && (c = !0);
                if (c) {
                    b = new P(a);
                    if ('https' == b.o)
                        return a;
                    G(H(), 'htp', '1');
                    Qs(b, 'https');
                    return b.toString();
                }
                return a;
            }
            function Qt(a, b) {
                return new RegExp('^https?://([a-z0-9-]{1,63}\\.)*(' + b.join('|').replace(/\./g, '\\.') + ')(:[0-9]+)?([/?#]|$)', 'i').test(a);
            }
            ;
            var Rt = function (a) {
                return (a = a.exec(Fc)) ? a[1] : '';
            };
            (function () {
                if (Rd)
                    return Rt(/Firefox\/([0-9.]+)/);
                if (wd || xd || vd)
                    return Md;
                if (Vd)
                    return qd() ? Rt(/CriOS\/([0-9.]+)/) : Rt(/Chrome\/([0-9.]+)/);
                if (Wd && !qd())
                    return Rt(/Version\/([0-9.]+)/);
                if (Sd || Td) {
                    var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Fc);
                    if (a)
                        return a[1] + '.' + a[2];
                } else if (Ud)
                    return (a = Rt(/Android\s+([0-9.]+)/)) ? a : Rt(/Version\/([0-9.]+)/);
                return '';
            }());
            var St = /OS (\S+) like/, Tt = /Android ([\d\.]+)/;
            function Ut(a, b) {
                a = (a = a.exec(Fc)) ? a[1] : '';
                a = a.replace(/_/g, '.');
                return 0 <= tc(a, b);
            }
            var Vt = function () {
                    return Bd && 'ontouchstart' in document.documentElement;
                }, Wt = function (a) {
                    return Gd && Ut(St, a);
                }, Xt = function (a) {
                    return (a = void 0 === a ? null : a) && 'function' === typeof a.getAttribute ? a.getAttribute('playsinline') ? !0 : !1 : !1;
                };
            var Yt = function (a) {
                var b = Error.call(this, a);
                this.message = b.message;
                'stack' in b && (this.stack = b.stack);
                this.errorCode = a;
            };
            t(Yt, Error);
            var Zt = function () {
                    if (!wd)
                        return !1;
                    try {
                        return new ActiveXObject('MSXML2.DOMDocument'), !0;
                    } catch (a) {
                        return !1;
                    }
                }, $t = wd && Zt();
            var au = function (a) {
                K.call(this);
                this.o = a;
                this.h = {};
            };
            Xa(au, K);
            var bu = [];
            au.prototype.O = function (a, b, c, d) {
                return cu(this, a, b, c, d);
            };
            var cu = function (a, b, c, d, e, f) {
                Array.isArray(c) || (c && (bu[0] = c.toString()), c = bu);
                for (var g = 0; g < c.length; g++) {
                    var h = Ei(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
                    if (!h)
                        break;
                    a.h[h.key] = h;
                }
                return a;
            };
            au.prototype.Gb = function (a, b, c, d) {
                return du(this, a, b, c, d);
            };
            var du = function (a, b, c, d, e, f) {
                if (Array.isArray(c))
                    for (var g = 0; g < c.length; g++)
                        du(a, b, c[g], d, e, f);
                else {
                    b = Di(b, c, d || a.handleEvent, e, f || a.o || a);
                    if (!b)
                        return a;
                    a.h[b.key] = b;
                }
                return a;
            };
            au.prototype.Ua = function (a, b, c, d, e) {
                if (Array.isArray(b))
                    for (var f = 0; f < b.length; f++)
                        this.Ua(a, b[f], c, d, e);
                else
                    c = c || this.handleEvent, d = Ma(d) ? !!d.capture : !!d, e = e || this.o || this, c = Fi(c), d = !!d, b = ti(a) ? a.Cb(b, c, d, e) : a ? (a = Hi(a)) ? a.Cb(b, c, d, e) : null : null, b && (Mi(b), delete this.h[b.key]);
            };
            var eu = function (a) {
                Eb(a.h, function (b, c) {
                    this.h.hasOwnProperty(c) && Mi(b);
                }, a);
                a.h = {};
            };
            au.prototype.N = function () {
                au.ya.N.call(this);
                eu(this);
            };
            au.prototype.handleEvent = function () {
                throw Error('EventHandler.handleEvent not implemented');
            };
            var fu = function () {
            };
            fu.prototype.get = function (a) {
                return gu({
                    url: a.url,
                    timeout: a.timeout,
                    withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
                    method: 'GET',
                    Ka: void 0 === a.Ka ? void 0 : a.Ka
                });
            };
            var gu = function (a) {
                    var b = a.url, c = a.timeout, d = a.withCredentials, e = a.method, f = void 0 === a.content ? void 0 : a.content, g = void 0 === a.Ka ? void 0 : a.Ka, h = void 0 === a.headers ? {} : a.headers;
                    return hu({
                        url: b,
                        timeout: c,
                        withCredentials: d,
                        method: e,
                        content: f,
                        Ka: g,
                        headers: h
                    }).then(function (k) {
                        return Promise.resolve(k);
                    }, function (k) {
                        return k instanceof Error && 6 == k.message && d ? hu({
                            url: b,
                            timeout: c,
                            withCredentials: !d,
                            method: e,
                            content: f,
                            Ka: g,
                            headers: h
                        }) : Promise.reject(k);
                    });
                }, hu = function (a) {
                    var b = a.url, c = a.timeout, d = a.withCredentials, e = a.method, f = void 0 === a.content ? void 0 : a.content, g = void 0 === a.Ka ? void 0 : a.Ka;
                    a = void 0 === a.headers ? {} : a.headers;
                    var h = new ps();
                    h.V = d;
                    h.D = Math.max(0, Mt(c));
                    h.X && g && h.X(g);
                    for (var k in a)
                        h.headers.set(k, a[k]);
                    var n = new au();
                    return new Promise(function (m, v) {
                        n.Gb(h, 'success', function () {
                            a: {
                                if (fm())
                                    try {
                                        Ds(h);
                                        var r = 'application/json';
                                        break a;
                                    } catch (Vc) {
                                        r = 'application/xml';
                                        break a;
                                    }
                                r = Es(h, 'Content-Type') || '';
                            }
                            if (-1 != r.indexOf('application/json'))
                                m(Ds(h) || {});
                            else {
                                try {
                                    var w = h.g ? h.g.responseXML : null;
                                } catch (Vc) {
                                    w = null;
                                }
                                if (null == w)
                                    if (w = Cs(h), 'undefined' != typeof DOMParser)
                                        r = new DOMParser(), w = Yf(w), w = r.parseFromString(Oc(w), 'application/xml');
                                    else if ($t) {
                                        r = new ActiveXObject('MSXML2.DOMDocument');
                                        r.resolveExternals = !1;
                                        r.validateOnParse = !1;
                                        try {
                                            r.setProperty('ProhibitDTD', !0), r.setProperty('MaxXMLSize', 2048), r.setProperty('MaxElementDepth', 256);
                                        } catch (Vc) {
                                        }
                                        r.loadXML(w);
                                        w = r;
                                    } else
                                        throw Error('Your browser does not support loading xml documents');
                                r = nh(bi);
                                var B;
                                if (B = w && w.documentElement)
                                    (B = w.documentElement) && 'VAST' != !B.nodeName ? (B = B.getAttribute('version')) ? (B = parseInt(B, 10), B = null == B || isNaN(B) ? null : B) : B = null : B = null, B = null == B || 2 > B || 4 < B ? !1 : !0;
                                if (!B && r) {
                                    r = {
                                        vastUrl: b.substring(0, 200),
                                        responseText: Cs(h).substring(0, 200),
                                        status: Bs(h),
                                        origin: window.location.origin
                                    };
                                    fm() || (r.contentType = Es(h, 'Content-Type'), r.acao = Es(h, 'Access-Control-Allow-Origin'), r.acac = Es(h, 'Access-Control-Allow-Credentials'));
                                    B = H();
                                    for (var M = q(Object.keys(r)), Ka = M.next(); !Ka.done; Ka = M.next())
                                        Ka = Ka.value, G(B, Ka, r[Ka]);
                                }
                                m(w);
                            }
                            n.W();
                            h.W();
                        });
                        n.Gb(h, [
                            'error',
                            'timeout'
                        ], function () {
                            v(new Yt(h.o, Bs(h)));
                            n.W();
                            h.W();
                        });
                        ws(h, Pt(b), e, f);
                    });
                };
            function iu(a, b) {
                return hc(b) ? !1 : new RegExp(a).test(b);
            }
            function ju(a) {
                var b = {};
                a.split(',').forEach(function (c) {
                    var d = c.split('=');
                    2 == d.length && (c = ic(d[0]), d = ic(d[1]), 0 < c.length && (b[c] = d));
                });
                return b;
            }
            function ku(a) {
                var b = 'af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu'.split(' ');
                if (!a)
                    return null;
                a = a.toLowerCase().replace('-', '_');
                if (b.includes(a))
                    return a;
                a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, '') : '';
                return b.includes(a) ? a : null;
            }
            ;
            var mu = function (a) {
                P.call(this, a);
                this.C = new Map();
                a = this.h;
                var b = a.indexOf(';'), c = null;
                0 <= b ? (this.h = a.substring(0, b), c = a.substring(b + 1)) : this.h = a;
                lu(this, c);
            };
            t(mu, P);
            mu.prototype.toString = function () {
                return nu(this, P.prototype.toString.call(this));
            };
            mu.prototype.D = function () {
                return '';
            };
            var lu = function (a, b) {
                    hc(bd(b)) || b.split(';').forEach(function (c) {
                        var d = c.indexOf('=');
                        if (!(0 >= d)) {
                            var e = Xc(c.substring(0, d));
                            c = Xc(c.substring(d + 1));
                            d = a.C.get(e);
                            null != d ? d.includes(c) || d.push(c) : d = [bd(c)];
                            a.C.set(e, d);
                        }
                    }, a);
                }, ou = function (a) {
                    if (hc(bd('ord')))
                        return null;
                    a = a.C.get('ord');
                    return null != a ? a : null;
                }, pu = function (a, b) {
                    hc(bd('ord')) || (b = b.map(bd), a.C.set('ord', b));
                }, nu = function (a, b) {
                    b = [bd(b)];
                    b.push.apply(b, fa(qu(a)));
                    return b.join(';');
                }, qu = function (a) {
                    var b = ou(a);
                    null == b ? b = [bd(Date.now())] : hc(bd('ord')) || a.C.delete('ord');
                    var c = [];
                    a.C.forEach(function (d, e) {
                        d.forEach(function (f) {
                            c.push(e + '=' + f);
                        });
                    });
                    c.push('ord=' + b[0]);
                    pu(a, b);
                    return c;
                };
            mu.prototype.F = function () {
                return new mu(this.toString());
            };
            var ru, tu, uu, vu = function () {
                    return u.navigator ? u.navigator.userAgent : '';
                }, wu = -1 != vu().indexOf('(iPad') || -1 != vu().indexOf('(Macintosh') || -1 != vu().indexOf('(iPod') || -1 != vu().indexOf('(iPhone');
            var xu = ['A8RhywYzBE2ntUAzipotZo1NirmVUD5B/IVOEROQCjOklthZ85lxgT2/VAcq1YwhDA6C5W3zQ4bWESWdQ452pgsAAACJeyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1RoaXJkUGFydHkiOnRydWUsInVzYWdlIjoic3Vic2V0In0='];
            function yu(a, b) {
                var c = bc('_blank');
                b = void 0 === b ? '' : b;
                wd && (b = '');
                if (!hc(bd(a))) {
                    var d = window.document;
                    d = void 0 === d ? window.document : d;
                    Of(xu, d);
                    d = a instanceof vc || !Ps.test(a) ? a : new vc(a, uc);
                    a = b;
                    var e = window;
                    b = d instanceof vc ? d : Ac(d);
                    d = e || u;
                    c = c instanceof $b ? ac(c) : c || '';
                    void 0 !== a ? d.open(wc(b), c, a, void 0) : d.open(wc(b), c);
                }
            }
            ;
            var zu = function (a) {
                L.call(this);
                this.g = a;
                this.o = this.A = !1;
                this.C = this.D = 0;
                this.h = new tj(1000);
                oi(this, this.h);
                Ei(this.h, 'tick', this.F, !1, this);
                Ei(this.g, 'pause', this.l, !1, this);
                Ei(this.g, 'playing', this.l, !1, this);
                Ei(this.g, 'ended', this.l, !1, this);
                Ei(this.g, 'timeupdate', this.l, !1, this);
            };
            t(zu, L);
            zu.prototype.l = function (a) {
                switch (a.type) {
                case 'playing':
                    Au(this);
                    break;
                case 'pause':
                case 'ended':
                    this.h.jb && this.h.stop();
                    break;
                case 'timeupdate':
                    !this.A && 0 < this.g.currentTime && (this.A = !0, Au(this));
                }
            };
            var Au = function (a) {
                !a.h.jb && a.A && (a.D = 1000 * a.g.currentTime, a.C = Date.now(), a.o = !1, a.h.start());
            };
            zu.prototype.F = function () {
                var a = Date.now(), b = 1000 * this.g.currentTime;
                b - this.D < 0.5 * (a - this.C) ? this.o || (this.o = !0, this.dispatchEvent('playbackStalled')) : this.o = !1;
                this.D = b;
                this.C = a;
            };
            var Bu = {
                AUTOPLAY_DISALLOWED: 'autoplayDisallowed',
                Bf: 'beginFullscreen',
                Cf: 'canPlay',
                Df: 'canPlayThrough',
                CLICK: 'click',
                DURATION_CHANGE: 'durationChange',
                Pf: 'end',
                Qf: 'endFullscreen',
                Rf: 'error',
                Vf: 'focusSkipButton',
                $d: 'loadStart',
                LOADED: 'loaded',
                xg: 'mediaLoadTimeout',
                yg: 'mediaPlaybackTimeout',
                tc: 'pause',
                Jg: 'play',
                Lg: 'playing',
                Tg: 'seeked',
                Ug: 'seeking',
                Vg: 'skip',
                je: 'skipShown',
                uc: 'start',
                eh: 'timeUpdate',
                ah: 'timedMetadata',
                ne: 'volumeChange',
                ph: 'waiting'
            };
            var Du = function (a) {
                    this.g = a;
                    this.h = Cu(a);
                }, Cu = function (a) {
                    return new Map(a.h.split('/').reduce(function (b, c, d) {
                        d % 2 ? b[b.length - 1].push(c) : b.push([c]);
                        return b;
                    }, []));
                }, Eu = function (a, b) {
                    var c = a.g.l.get(b);
                    return c ? c : (a = a.h.get(b)) ? a : null;
                };
            var Fu = function () {
            };
            var Gu = ['doubleclick.net'];
            function Hu() {
                if (qd())
                    return !1;
                if (z('Android')) {
                    if (void 0 === uu) {
                        a: {
                            if (void 0 === ru) {
                                if (wu) {
                                    var a = -1 != vu().indexOf('Safari');
                                    var b = new P(window.location.href).l.Na('js');
                                    b: {
                                        if ((b = b.length ? b[0] : '') && 0 == b.lastIndexOf('afma-', 0)) {
                                            var c = b.lastIndexOf('v');
                                            if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                                b = b[1];
                                                break b;
                                            }
                                        }
                                        b = '0.0.0';
                                    }
                                    if (!a || '0.0.0' !== b) {
                                        a = ru = !0;
                                        break a;
                                    }
                                }
                                ru = !1;
                            }
                            a = ru;
                        }
                        a || (void 0 === tu && (tu = -1 != vu().indexOf('afma-sdk-a') ? !0 : !1), a = tu);
                        uu = a;
                    }
                    return uu ? !0 : uf() ? !1 : Iu();
                }
                a = z('Macintosh') || z('Linux') || z('Windows') || z('CrOS');
                return nh(di) && a && Kc() ? Iu() : !1;
            }
            function Iu() {
                var a = !1, b = new P(window.location.href).g;
                Gu.forEach(function (c) {
                    b.includes(c) && (a = !0);
                });
                return a;
            }
            function Ju(a) {
                for (var b = 0, c = 0; c < a.length; c++)
                    b = Math.imul(31, b) + a.charCodeAt(c) | 0;
                return b.toString();
            }
            ;
            var Ku, Nu = function (a, b, c) {
                    if ('number' === typeof a)
                        var d = { name: Lu(a) };
                    else
                        d = a, a = Mu(a.name);
                    this.code = a;
                    this.g = d;
                    b = 'Error ' + b + ': ' + (this.g.name || '');
                    c && (b += ', ' + c);
                    $a.call(this, b);
                };
            Xa(Nu, $a);
            var Ou = {
                    le: 1,
                    Dg: 2,
                    NOT_FOUND_ERR: 3,
                    Sd: 4,
                    Vd: 5,
                    Eg: 6,
                    ke: 7,
                    ABORT_ERR: 8,
                    ie: 9,
                    gh: 10,
                    TIMEOUT_ERR: 11,
                    he: 12,
                    INVALID_ACCESS_ERR: 13,
                    INVALID_STATE_ERR: 14
                }, Pu = (u.g || u.h || Ou).le, Qu = (u.g || u.h || Ou).NOT_FOUND_ERR, Ru = (u.g || u.h || Ou).Sd, Su = (u.g || u.h || Ou).Vd, Tu = (u.g || u.h || Ou).ke, Uu = (u.g || u.h || Ou).ABORT_ERR, Vu = (u.g || u.h || Ou).ie, Wu = (u.g || u.h || Ou).TIMEOUT_ERR, Xu = (u.g || u.h || Ou).he, Yu = (u.DOMException || Ou).INVALID_ACCESS_ERR, Zu = (u.DOMException || Ou).INVALID_STATE_ERR, Mu = function (a) {
                    switch (a) {
                    case 'UnknownError':
                        return Pu;
                    case 'NotFoundError':
                        return Qu;
                    case 'ConstraintError':
                        return Ru;
                    case 'DataError':
                        return Su;
                    case 'TransactionInactiveError':
                        return Tu;
                    case 'AbortError':
                        return Uu;
                    case 'ReadOnlyError':
                        return Vu;
                    case 'TimeoutError':
                        return Wu;
                    case 'QuotaExceededError':
                        return Xu;
                    case 'InvalidAccessError':
                        return Yu;
                    case 'InvalidStateError':
                        return Zu;
                    default:
                        return Pu;
                    }
                }, Lu = function (a) {
                    switch (a) {
                    case Pu:
                        return 'UnknownError';
                    case Qu:
                        return 'NotFoundError';
                    case Ru:
                        return 'ConstraintError';
                    case Su:
                        return 'DataError';
                    case Tu:
                        return 'TransactionInactiveError';
                    case Uu:
                        return 'AbortError';
                    case Vu:
                        return 'ReadOnlyError';
                    case Wu:
                        return 'TimeoutError';
                    case Xu:
                        return 'QuotaExceededError';
                    case Yu:
                        return 'InvalidAccessError';
                    case Zu:
                        return 'InvalidStateError';
                    default:
                        return 'UnknownError';
                    }
                }, $u = function (a, b) {
                    return 'error' in a ? new Nu(a.error, b) : new Nu({ name: 'UnknownError' }, b);
                }, av = function (a, b) {
                    if ('name' in a)
                        return b = b + ': ' + a.message, new Nu(a, b);
                    if ('code' in a) {
                        var c = Lu(a.code);
                        b = b + ': ' + a.message;
                        return new Nu({ name: c }, b);
                    }
                    return new Nu({ name: 'UnknownError' }, b);
                };
            var bv = function (a) {
                    this.g = a;
                }, cv = u.IDBKeyRange || u.webkitIDBKeyRange;
            var dv = function () {
                this.A = [];
                this.B = this.o = !1;
                this.l = void 0;
                this.D = this.H = this.I = !1;
                this.C = 0;
                this.h = null;
                this.J = 0;
            };
            dv.prototype.cancel = function (a) {
                if (this.o)
                    this.l instanceof dv && this.l.cancel();
                else {
                    if (this.h) {
                        var b = this.h;
                        delete this.h;
                        a ? b.cancel(a) : (b.J--, 0 >= b.J && b.cancel());
                    }
                    this.D = !0;
                    this.o || ev(this, new fv(this));
                }
            };
            dv.prototype.F = function (a, b) {
                this.I = !1;
                gv(this, a, b);
            };
            var gv = function (a, b, c) {
                    a.o = !0;
                    a.l = c;
                    a.B = !b;
                    hv(a);
                }, jv = function (a) {
                    if (a.o) {
                        if (!a.D)
                            throw new iv(a);
                        a.D = !1;
                    }
                };
            dv.prototype.g = function (a) {
                jv(this);
                gv(this, !0, a);
            };
            var ev = function (a, b) {
                    jv(a);
                    gv(a, !1, b);
                }, lv = function (a, b) {
                    return kv(a, b, null, void 0);
                }, kv = function (a, b, c, d) {
                    a.A.push([
                        b,
                        c,
                        d
                    ]);
                    a.o && hv(a);
                    return a;
                };
            dv.prototype.then = function (a, b, c) {
                var d, e, f = new ej(function (g, h) {
                        e = g;
                        d = h;
                    });
                kv(this, e, function (g) {
                    g instanceof fv ? f.cancel() : d(g);
                });
                return f.then(a, b, c);
            };
            dv.prototype.$goog_Thenable = !0;
            var mv = function (a) {
                    return qb(a.A, function (b) {
                        return 'function' === typeof b[1];
                    });
                }, hv = function (a) {
                    if (a.C && a.o && mv(a)) {
                        var b = a.C, c = nv[b];
                        c && (u.clearTimeout(c.g), delete nv[b]);
                        a.C = 0;
                    }
                    a.h && (a.h.J--, delete a.h);
                    b = a.l;
                    for (var d = c = !1; a.A.length && !a.I;) {
                        var e = a.A.shift(), f = e[0], g = e[1];
                        e = e[2];
                        if (f = a.B ? g : f)
                            try {
                                var h = f.call(e || null, b);
                                void 0 !== h && (a.B = a.B && (h == b || h instanceof Error), a.l = b = h);
                                if (cj(b) || 'function' === typeof u.Promise && b instanceof u.Promise)
                                    d = !0, a.I = !0;
                            } catch (k) {
                                b = k, a.B = !0, mv(a) || (c = !0);
                            }
                    }
                    a.l = b;
                    d && (h = Ua(a.F, a, !0), d = Ua(a.F, a, !1), b instanceof dv ? (kv(b, h, d), b.H = !0) : b.then(h, d));
                    c && (b = new ov(b), nv[b.g] = b, a.C = b.g);
                }, iv = function () {
                    $a.call(this);
                };
            Xa(iv, $a);
            iv.prototype.message = 'Deferred has already fired';
            iv.prototype.name = 'AlreadyCalledError';
            var fv = function () {
                $a.call(this);
            };
            Xa(fv, $a);
            fv.prototype.message = 'Deferred was canceled';
            fv.prototype.name = 'CanceledError';
            var ov = function (a) {
                this.g = u.setTimeout(Ua(this.l, this), 0);
                this.h = a;
            };
            ov.prototype.l = function () {
                delete nv[this.g];
                throw this.h;
            };
            var nv = {};
            var pv = function () {
                L.call(this);
            };
            Xa(pv, L);
            pv.prototype.g = null;
            pv.prototype.next = function (a) {
                if (a)
                    this.g['continue'](a);
                else
                    this.g['continue']();
            };
            pv.prototype.remove = function () {
                var a = new dv();
                try {
                    var b = this.g['delete']();
                } catch (c) {
                    return ev(a, av(c, 'deleting via cursor')), a;
                }
                b.onsuccess = function () {
                    a.g();
                };
                b.onerror = function (c) {
                    ev(a, $u(c.target, 'deleting via cursor'));
                };
                return a;
            };
            var qv = function (a, b) {
                var c = new pv();
                try {
                    var d = a.openCursor(b ? b.g : null);
                } catch (e) {
                    throw c.W(), av(e, a.name);
                }
                d.onsuccess = function (e) {
                    c.g = e.target.result || null;
                    c.g ? c.dispatchEvent('n') : c.dispatchEvent('c');
                };
                d.onerror = function () {
                    c.dispatchEvent('e');
                };
                return c;
            };
            var rv = function (a) {
                    this.g = a;
                }, tv = function (a, b, c) {
                    var d = new dv();
                    try {
                        var e = a.g.get(c);
                    } catch (f) {
                        return b += ' with key ' + Wg(c), ev(d, av(f, b)), d;
                    }
                    e.onsuccess = function (f) {
                        d.g(f.target.result);
                    };
                    e.onerror = function (f) {
                        b += ' with key ' + Wg(c);
                        ev(d, $u(f.target, b));
                    };
                    return d;
                };
            rv.prototype.get = function (a) {
                return tv(this, 'getting from index ' + this.g.name, a);
            };
            var uv = function (a, b) {
                return qv(a.g, b);
            };
            var vv = function (a) {
                    this.g = a;
                }, wv = function (a, b, c, d, e) {
                    var f = new dv();
                    try {
                        var g = e ? a.g[b](d, e) : a.g[b](d);
                    } catch (h) {
                        return c += Wg(d), e && (c += ', with key ' + Wg(e)), ev(f, av(h, c)), f;
                    }
                    g.onsuccess = function (h) {
                        f.g(h.target.result);
                    };
                    g.onerror = function (h) {
                        c += Wg(d);
                        e && (c += ', with key ' + Wg(e));
                        ev(f, $u(h.target, c));
                    };
                    return f;
                };
            vv.prototype.add = function (a, b) {
                return wv(this, 'add', 'adding into ' + this.g.name + ' with value ', a, b);
            };
            vv.prototype.remove = function (a) {
                var b = new dv();
                try {
                    var c = this.g['delete'](a instanceof bv ? a.g : a);
                } catch (e) {
                    return c = 'removing from ' + this.g.name + ' with key ' + Wg(a), ev(b, av(e, c)), b;
                }
                c.onsuccess = function () {
                    b.g();
                };
                var d = this;
                c.onerror = function (e) {
                    var f = 'removing from ' + d.g.name + ' with key ' + Wg(a);
                    ev(b, $u(e.target, f));
                };
                return b;
            };
            vv.prototype.get = function (a) {
                var b = new dv();
                try {
                    var c = this.g.get(a);
                } catch (e) {
                    return c = 'getting from ' + this.g.name + ' with key ' + Wg(a), ev(b, av(e, c)), b;
                }
                c.onsuccess = function (e) {
                    b.g(e.target.result);
                };
                var d = this;
                c.onerror = function (e) {
                    var f = 'getting from ' + d.g.name + ' with key ' + Wg(a);
                    ev(b, $u(e.target, f));
                };
                return b;
            };
            var xv = function (a) {
                try {
                    return new rv(a.g.index('timestamp'));
                } catch (b) {
                    throw av(b, 'getting index timestamp');
                }
            };
            var yv = function (a, b) {
                L.call(this);
                this.g = a;
                this.l = b;
                this.h = new au(this);
                this.h.O(this.g, 'complete', Ua(this.dispatchEvent, this, 'complete'));
                this.h.O(this.g, 'abort', Ua(this.dispatchEvent, this, 'abort'));
                this.h.O(this.g, 'error', this.Xd);
            };
            Xa(yv, L);
            l = yv.prototype;
            l.Xd = function (a) {
                a.target instanceof Nu ? this.dispatchEvent({
                    type: 'error',
                    target: a.target
                }) : this.dispatchEvent({
                    type: 'error',
                    target: $u(a.target, 'in transaction')
                });
            };
            l.objectStore = function (a) {
                try {
                    return new vv(this.g.objectStore(a));
                } catch (b) {
                    throw av(b, 'getting object store ' + a);
                }
            };
            l.commit = function (a) {
                if (this.g.commit || !a)
                    try {
                        this.g.commit();
                    } catch (b) {
                        throw av(b, 'cannot commit the transaction');
                    }
            };
            l.wait = function () {
                var a = new dv();
                Di(this, 'complete', Ua(a.g, a));
                var b = Di(this, 'abort', function () {
                    Mi(c);
                    ev(a, new Nu(Uu, 'waiting for transaction to complete'));
                });
                var c = Di(this, 'error', function (e) {
                    Mi(b);
                    ev(a, e.target);
                });
                var d = this.l;
                return lv(a, function () {
                    return d;
                });
            };
            l.abort = function () {
                this.g.abort();
            };
            l.N = function () {
                yv.ya.N.call(this);
                this.h.W();
            };
            var zv = function (a) {
                L.call(this);
                this.g = a;
                this.h = new au(this);
                this.h.O(this.g, 'abort', Ua(this.dispatchEvent, this, 'abort'));
                this.h.O(this.g, 'error', this.Yd);
                this.h.O(this.g, 'versionchange', this.ze);
                this.h.O(this.g, 'close', Ua(this.dispatchEvent, this, 'close'));
            };
            Xa(zv, L);
            l = zv.prototype;
            l.Mc = !0;
            l.Yd = function (a) {
                a = (a = a.target) && a.error;
                this.dispatchEvent({
                    type: 'error',
                    errorCode: a && a.severity
                });
            };
            l.ze = function (a) {
                this.dispatchEvent(new Av(a.oldVersion, a.newVersion));
            };
            l.close = function () {
                this.Mc && (this.g.close(), this.Mc = !1);
            };
            l.getVersion = function () {
                return Number(this.g.version);
            };
            var Bv = function (a) {
                var b = ['MediaSourceVideoChunk'];
                try {
                    var c = a.g.transaction(b, 'readwrite');
                    return new yv(c, a);
                } catch (d) {
                    throw av(d, 'creating transaction');
                }
            };
            zv.prototype.N = function () {
                zv.ya.N.call(this);
                this.h.W();
            };
            var Av = function (a, b) {
                pi.call(this, 'versionchange');
                this.oldVersion = a;
                this.newVersion = b;
            };
            Xa(Av, pi);
            var Cv = function (a) {
                var b = new dv();
                void 0 == Ku && (Ku = u.indexedDB || u.mozIndexedDB || u.webkitIndexedDB || u.moz_indexedDB);
                var c = Ku.open('VideoChunkPersistentStorage', 5);
                c.onsuccess = function (d) {
                    d = new zv(d.target.result);
                    b.g(d);
                };
                c.onerror = function (d) {
                    ev(b, $u(d.target, 'opening database VideoChunkPersistentStorage'));
                };
                c.onupgradeneeded = function (d) {
                    if (a) {
                        var e = new zv(d.target.result);
                        a(new Av(d.oldVersion, d.newVersion), e, new yv(d.target.transaction, e));
                    }
                };
                c.onblocked = function () {
                };
                return b;
            };
            var Dv = {
                    nh: 'videoId',
                    ug: 'itag',
                    Wg: 'source',
                    Xg: 'startIndex'
                }, Ev = function () {
                    L.call(this);
                    this.g = null;
                };
            t(Ev, L);
            Ev.prototype.initialize = function () {
                var a = this;
                return Promise.resolve(Cv(this.h)).then(function (b) {
                    return a.g = b;
                }, function (b) {
                    G(H(), 'codf', b.message);
                });
            };
            var Fv = function (a) {
                return null !== a.g && a.g.Mc;
            };
            Ev.prototype.close = function () {
                var a = this;
                return new Promise(function (b) {
                    return Gv(a, b);
                }).then(function () {
                    return Hv();
                }).then(function () {
                    return a.g.close();
                });
            };
            var Hv = function () {
                    return 'storage' in navigator && 'estimate' in navigator.storage ? navigator.storage.estimate().then(function (a) {
                        G(H(), 'csue', String(a.usage));
                    }) : Promise.resolve(void 0);
                }, Lv = function (a, b) {
                    b = Iv(b);
                    if (!b)
                        return Promise.resolve(null);
                    var c = Jv(b);
                    return Kv(a, c, b.lmt);
                }, Nv = function (a, b, c, d) {
                    if (c = Iv(c)) {
                        var e = Jv(c), f = c.startIndex;
                        Mv(a, {
                            cacheId: e,
                            startIndex: f,
                            endIndex: f + b.byteLength - 1,
                            lmt: c.lmt,
                            timestamp: new Date(Date.now()),
                            isLastVideoChunk: d,
                            video: b
                        });
                    } else
                        Promise.resolve(void 0);
                };
            Ev.prototype.h = function (a, b) {
                if (b.g.objectStoreNames.contains('MediaSourceVideoChunk'))
                    try {
                        b.g.deleteObjectStore('MediaSourceVideoChunk');
                    } catch (d) {
                        throw av(d, 'deleting object store MediaSourceVideoChunk');
                    }
                a = { keyPath: 'cacheId' };
                try {
                    var c = new vv(b.g.createObjectStore('MediaSourceVideoChunk', a));
                } catch (d) {
                    throw av(d, 'creating object store MediaSourceVideoChunk');
                }
                b = { unique: !1 };
                try {
                    c.g.createIndex('timestamp', 'timestamp', b);
                } catch (d) {
                    throw av(d, 'creating new index timestamp with key path timestamp');
                }
            };
            var Gv = function (a, b) {
                    var c = new Date(Date.now());
                    c.setDate(c.getDate() - 30);
                    c = new bv(cv.upperBound(c, void 0));
                    var d = uv(xv(Bv(a.g).objectStore('MediaSourceVideoChunk')), c), e = d.O('n', function () {
                            d.remove();
                            d.next();
                        });
                    Di(d, 'c', function () {
                        Mi(e);
                        b();
                    });
                }, Iv = function (a) {
                    var b = new Du(a);
                    a = Eu(b, 'id');
                    var c = Eu(b, 'itag'), d = Eu(b, 'source'), e = Eu(b, 'lmt');
                    (b = b.g.l.get('range')) ? (b = b.split('-')[0], b = !b || isNaN(b) ? null : parseInt(b, 10)) : b = null;
                    var f = [];
                    a ? c ? d ? e ? null === b && f.push('startIndex') : f.push('lmt') : f.push('source') : f.push('itag') : f.push('videoId');
                    return 0 < f.length ? (G(H(), 'civp', f.join('-')), null) : {
                        videoId: a,
                        itag: c,
                        source: d,
                        lmt: e,
                        startIndex: b + 0
                    };
                }, Jv = function (a) {
                    var b = Object.keys(Dv).sort().map(function (c) {
                        return a[Dv[c]];
                    }).join(',');
                    return Ju(b);
                }, Kv = function (a, b, c) {
                    var d = Bv(a.g).objectStore('MediaSourceVideoChunk');
                    return Promise.resolve(d.get(b)).then(function (e) {
                        if (!e)
                            return G(H(), 'cenf', '1'), null;
                        if (e.lmt !== c)
                            return G(H(), 'cdl', '1'), d.remove(b).then(null, function (f) {
                                G(H(), 'crdlvf', f.message);
                            }), null;
                        G(H(), 'cefml', '1');
                        return {
                            endIndex: e.endIndex,
                            isLastVideoChunk: e.isLastVideoChunk,
                            video: e.video
                        };
                    }, function (e) {
                        G(H(), 'cgvf', e.message);
                    });
                }, Mv = function (a, b) {
                    a = Bv(a.g).objectStore('MediaSourceVideoChunk');
                    Promise.resolve(wv(a, 'put', 'putting into ' + a.g.name + ' with value', b, void 0)).then(function () {
                        G(H(), 'cavs', '1');
                    }, function (c) {
                        G(H(), 'cavf', c.message);
                    });
                };
            var Ov = function (a) {
                L.call(this);
                var b = this;
                this.D = new P(a);
                this.F = this.g = this.l = this.h = 0;
                this.o = (this.C = Hu()) ? Bt(Ev) : null;
                ni(this, function () {
                    mi(b.o);
                });
                this.H = this.C ? this.o.initialize() : null;
                this.A = null;
            };
            t(Ov, L);
            var Qv = function (a) {
                    Ba(function (b) {
                        if (1 == b.g)
                            return 2 === a.g && (a.g = 1), sa(b, Pv(a), 4);
                        var c = 3 < a.F;
                        if (c && null !== a.A) {
                            var d = Jt('media_source_error', {
                                code: 0 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                                message: 'Response code "' + a.A + '" with ' + a.h + ' bytes requested and ' + a.l + ' bytes loaded'
                            });
                            a.dispatchEvent(d);
                        }
                        a.l < a.h && 3 !== a.g && !c ? b.g = 1 : (3 !== a.g && (a.g = 0), b.g = 0);
                    });
                }, Pv = function (a) {
                    var b;
                    return Ba(function (c) {
                        switch (c.g) {
                        case 1:
                            b = a.l + '-' + (a.h - 1);
                            ct(a.D, 'range', b);
                            if (!a.C) {
                                c.g = 2;
                                break;
                            }
                            return sa(c, a.H, 3);
                        case 3:
                            return c.return(Rv(a));
                        case 2:
                            return c.h = 4, sa(c, Sv(a), 6);
                        case 6:
                            c.g = 0;
                            c.h = 0;
                            break;
                        case 4:
                            ta(c), a.F++, c.g = 0;
                        }
                    });
                }, Rv = function (a) {
                    var b;
                    return Ba(function (c) {
                        switch (c.g) {
                        case 1:
                            return sa(c, Lv(a.o, a.D), 2);
                        case 2:
                            if (b = c.A) {
                                b.isLastVideoChunk && (a.g = 3);
                                Tv(a, b.video, 0);
                                c.g = 0;
                                break;
                            }
                            c.h = 4;
                            return sa(c, Sv(a), 6);
                        case 6:
                            c.g = 0;
                            c.h = 0;
                            break;
                        case 4:
                            ta(c), a.F++, c.g = 0;
                        }
                    });
                }, Sv = function (a) {
                    return new Promise(function (b, c) {
                        var d = new XMLHttpRequest(), e = 0, f = a.h - a.l;
                        d.addEventListener('load', function () {
                            I('lvlcl');
                            if (400 <= d.status)
                                return G(H(), 'lvlxes', d.status.toString()), a.A = d.status, c();
                            var g = d.response;
                            g.byteLength < f && (a.g = 3);
                            var h = Tv(a, g, e);
                            e += h;
                            a.C && 0 < g.byteLength && Nv(a.o, g, a.D, g.byteLength < f);
                            b();
                        });
                        d.addEventListener('timeout', function () {
                            I('lvlct');
                            a.A = d.status;
                            c();
                        });
                        d.addEventListener('error', function () {
                            I('lvlce');
                            a.A = d.status;
                            c();
                        });
                        d.addEventListener('progress', function () {
                            if (400 <= d.status)
                                a.A = d.status;
                            else {
                                var g = Tv(a, d.response, e);
                                e += g;
                            }
                        });
                        d.responseType = 'arraybuffer';
                        d.open('get', a.D.toString());
                        d.send(null);
                    });
                }, Tv = function (a, b, c) {
                    if (null === b)
                        return 0;
                    b = b.slice(c);
                    a.l += b.byteLength;
                    a.dispatchEvent({
                        type: 'progress',
                        se: b
                    });
                    return b.byteLength;
                };
            Ov.prototype.N = function () {
                this.C && Fv(this.o) && this.o.close();
                L.prototype.N.call(this);
            };
            function Uv() {
                return !!window.MediaSource;
            }
            function Vv(a) {
                return [
                    43,
                    44,
                    45
                ].includes(a) && Rd ? !1 : Dt[a] ? (a = It(a), !!a && Uv() && MediaSource.isTypeSupported(a)) : !1;
            }
            ;
            var Wv = function () {
            };
            Wv.prototype.g = function (a, b, c) {
                return 0 === c ? 1000000 : 5000 > b - a ? 300000 : 0;
            };
            var Xv = function (a, b, c, d) {
                this.url = a;
                this.mimeType = b;
                this.g = c;
                this.h = void 0 === d ? null : d;
            };
            var $v = function (a) {
                L.call(this);
                var b = this;
                this.h = a;
                this.o = this.h.map(function (c) {
                    return Bt(Ov, c.url);
                });
                this.ca = Bt(MediaSource);
                this.g = [];
                this.l = window.URL.createObjectURL(this.ca);
                this.F = 0;
                this.D = !1;
                this.C = function () {
                    return Yv(b);
                };
                this.ca.addEventListener('sourceopen', this.C);
                this.H = Zv(this);
                this.A = 0;
            };
            t($v, L);
            var Zv = function (a) {
                    for (var b = [], c = 0; c < a.h.length; ++c)
                        b.push(new Wv());
                    return b;
                }, Yv = function (a) {
                    I('msms_oso');
                    for (var b = {}, c = 0; c < a.h.length; b = {
                            yb: b.yb,
                            xb: b.xb
                        }, ++c) {
                        var d = a.h[c];
                        G(H(), 'msms_mime' + c, d.mimeType);
                        G(H(), 'msms_cs' + c, d.g.toString());
                        b.yb = a.ca.addSourceBuffer(d.mimeType);
                        b.xb = a.o[c];
                        b.xb.O('progress', function (e) {
                            return function (f) {
                                var g = e.xb;
                                f = f.se;
                                0 !== f.byteLength && e.yb.appendBuffer(f);
                                3 === g.g && (a.F++, a.F === a.g.length && aw(a));
                            };
                        }(b));
                        b.xb.O('media_source_error', function (e) {
                            a.dispatchEvent(e);
                        });
                        b.yb ? a.g.push(b.yb) : I('msms_sbf' + c);
                    }
                    G(H(), 'msms_ns', a.g.length.toString());
                    a.D = !0;
                    bw(a);
                }, aw = function (a) {
                    Promise.all(a.g.map(function (b) {
                        return new Promise(function (c) {
                            b.updating ? b.addEventListener('updateend', function () {
                                c();
                            }) : c();
                        });
                    })).then(function () {
                        return a.ca.endOfStream();
                    });
                }, bw = function (a) {
                    if (a.D)
                        for (var b = 0; b < a.h.length; ++b) {
                            var c = a.o[b], d = a.g[b];
                            d = 0 === d.buffered.length ? 0 : 1000 * d.buffered.end(0);
                            d = a.H[b].g(a.A, d, c.h);
                            0 !== d && (1 === c.g ? (c.h += d, c.g = 2) : 0 === c.g && (c.h += d, c.g = 1, Qv(c)));
                        }
                };
            $v.prototype.N = function () {
                this.l && window.URL.revokeObjectURL(this.l);
                for (var a = q(this.o), b = a.next(); !b.done; b = a.next())
                    b.value.W();
                this.ca.removeEventListener('sourceopen', this.C);
                L.prototype.N.call(this);
            };
            var cw = /\/pagead\/conversion|\/pagead\/adview|\/pagead\/gen_204|\/activeview?|csi.gstatic.com\/csi|google.com\/pagead\/xsul|google.com\/ads\/measurement\/l|googleads.g.doubleclick.net\/pagead\/ide_cookie|googleads.g.doubleclick.net\/xbbe\/pixel/, dw = /outstream.min.js/, ew = /outstream.min.css/, fw = /fonts.gstatic.com/, gw = /googlevideo.com\/videoplayback|c.2mdn.net\/videoplayback|gcdn.2mdn.net\/videoplayback/, hw = /custom.elements.min.js/;
            function iw(a, b) {
                var c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, k = 0, n = !1, m = !1;
                if ('function' === typeof Ia('performance.getEntriesByType', u) && 'transferSize' in u.PerformanceResourceTiming.prototype) {
                    var v = u.performance.getEntriesByType('resource');
                    v = q(v);
                    for (var r = v.next(); !r.done; r = v.next())
                        r = r.value, cw.test(r.name) || (f += 1, r.transferSize ? (c += r.transferSize, r.encodedBodySize && r.transferSize < r.encodedBodySize && (h += 1, e += r.encodedBodySize, dw.test(r.name) && (n = !0), ew.test(r.name) && (m = !0)), gw.test(r.name) && (d += r.transferSize)) : 0 == r.transferSize && 0 == r.encodedBodySize ? hw.test(r.name) ? c += 6686 : fw.test(r.name) || (k += 1, Yg(H(), {
                            event_name: 'unmeasurable_asset',
                            resource_name: r.name,
                            encoded_body_size: r.encodedBodySize,
                            transfer_size: r.transferSize
                        })) : (g += 1, e += r.encodedBodySize, dw.test(r.name) && (n = !0), ew.test(r.name) && (m = !0)));
                    v = 0;
                    if (a.duration) {
                        for (r = 0; r < a.buffered.length; r++)
                            v += a.buffered.end(r) - a.buffered.start(r);
                        v = Math.min(v, a.duration);
                    }
                    Yg(H(), {
                        event_name: b,
                        asset_bytes: c,
                        video_bytes: d,
                        cached_data_bytes: e,
                        js_cached: n,
                        css_cached: m,
                        num_assets: f,
                        num_assets_cached: g,
                        num_assets_cache_validated: h,
                        num_assets_unmeasurable: k,
                        video_played_seconds: a.currentTime.toFixed(2),
                        video_muted: a.muted,
                        video_seconds_loaded: v.toFixed(2)
                    });
                } else
                    G(H(), 'error', 'reporting_timing_not_supported');
            }
            ;
            function jw(a) {
                var b = H(), c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
                c ? (a = a.currentTime, G(b, 'vqdf', String(c.droppedVideoFrames)), G(b, 'vqtf', String(c.totalVideoFrames)), G(b, 'vqfr', String(Math.round(c.totalVideoFrames / a)))) : G(b, 'vqu', '1');
            }
            ;
            var kw = function () {
            };
            kw.prototype.toString = function () {
                return 'video_mute';
            };
            var lw = new kw();
            var mw = function (a) {
                K.call(this);
                this.B = 1;
                this.l = [];
                this.o = 0;
                this.g = [];
                this.h = {};
                this.D = !!a;
            };
            Xa(mw, K);
            var nw = function (a, b, c) {
                    var d = lw.toString(), e = a.h[d];
                    e || (e = a.h[d] = []);
                    var f = a.B;
                    a.g[f] = d;
                    a.g[f + 1] = b;
                    a.g[f + 2] = c;
                    a.B = f + 3;
                    e.push(f);
                }, ow = function (a, b, c) {
                    var d = a.h[lw.toString()];
                    if (d) {
                        var e = a.g;
                        (d = d.find(function (f) {
                            return e[f + 1] == b && e[f + 2] == c;
                        })) && a.A(d);
                    }
                };
            mw.prototype.A = function (a) {
                var b = this.g[a];
                b && (b = this.h[b], 0 != this.o ? (this.l.push(a), this.g[a + 1] = Ja) : (b && vb(b, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2]));
            };
            mw.prototype.C = function (a, b) {
                var c = this.h[a];
                if (c) {
                    for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                        d[e - 1] = arguments[e];
                    if (this.D)
                        for (e = 0; e < c.length; e++) {
                            var g = c[e];
                            pw(this.g[g + 1], this.g[g + 2], d);
                        }
                    else {
                        this.o++;
                        try {
                            for (e = 0, f = c.length; e < f && !this.Ra(); e++)
                                g = c[e], this.g[g + 1].apply(this.g[g + 2], d);
                        } finally {
                            if (this.o--, 0 < this.l.length && 0 == this.o)
                                for (; c = this.l.pop();)
                                    this.A(c);
                        }
                    }
                }
            };
            var pw = function (a, b, c) {
                aj(function () {
                    a.apply(b, c);
                });
            };
            mw.prototype.N = function () {
                mw.ya.N.call(this);
                this.g.length = 0;
                this.h = {};
                this.l.length = 0;
            };
            var qw = function (a) {
                K.call(this);
                this.g = new mw(a);
                oi(this, this.g);
            };
            Xa(qw, K);
            var rw = function (a) {
                a = void 0 === a ? null : a;
                K.call(this);
                this.g = new au(this);
                oi(this, this.g);
                this.tb = a;
            };
            t(rw, K);
            var tw = function (a, b, c) {
                a.tb && (nw(a.tb.g, b, c), ni(a, function () {
                    ow(a.tb.g, b, c);
                }));
            };
            var uw = function (a, b) {
                rw.call(this, b);
                tw(this, function (c) {
                    c ? a.show() : a.g.mode = 'hidden';
                }, this);
            };
            t(uw, rw);
            var vw = function () {
                L.call(this);
                this.h = new au(this);
                oi(this, this.h);
            };
            t(vw, L);
            var xw = function (a, b, c) {
                c = void 0 === c ? !0 : c;
                vw.call(this);
                a.setAttribute('crossorigin', 'anonymous');
                var d = of('TRACK');
                d.setAttribute('kind', 'captions');
                d.setAttribute('src', b);
                d.setAttribute('default', '');
                a.appendChild(d);
                this.g = a.textTracks[0];
                ww(this);
                c ? this.show() : this.g.mode = 'hidden';
            };
            t(xw, vw);
            var ww = function (a) {
                var b = a.g;
                b.addEventListener('cuechange', function () {
                    for (var c = b.cues, d = 0; d < c.length; d++) {
                        var e = c[d];
                        e.align = 'center';
                        e.position = 'auto';
                    }
                }, { once: !0 });
            };
            xw.prototype.show = function () {
                this.g.mode = 'showing';
            };
            function yw(a, b) {
                if ('undefined' !== typeof ReportingObserver) {
                    var c = function (e) {
                            e = q(e);
                            for (var f = e.next(); !f.done; f = e.next())
                                f = f.value, a(f) && b(f);
                        }, d = new ReportingObserver(c, { buffered: !0 });
                    u.addEventListener('unload', function () {
                        c(d.takeRecords(), d);
                        d.disconnect();
                    });
                    d.observe();
                }
            }
            function zw(a) {
                a = void 0 === a ? null : a;
                yw(function (b) {
                    return b.body && 'HeavyAdIntervention' === b.body.id;
                }, function (b) {
                    var c = b.body, d = H();
                    G(d, 'ham', c.message);
                    c.message.includes('Ad was removed because its CPU usage exceeded the limit') ? G(d, 'hacpu', 'true') : c.message.includes('Ad was removed because its network usage exceeded the limit') && G(d, 'habytes', 'true');
                    a && a(b);
                });
            }
            ;
            var Aw = 'autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay'.split(' '), Bw = 'autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen'.split(' '), Cw = { childList: !0 }, Dw = HTMLElement;
            /^\s*class\s*\{\s*\}\s*$/.test(function () {
            }.toString()) || (Dw = function () {
                return u.Reflect.construct(HTMLElement, [], this.__proto__.constructor);
            }, Object.setPrototypeOf(Dw, HTMLElement), Object.setPrototypeOf(Dw.prototype, HTMLElement.prototype));
            var Ew = function (a) {
                    if (null !== a) {
                        a = q(a);
                        for (var b = a.next(); !b.done; b = a.next())
                            if (b = b.value, b.nodeName === 'TRACK'.toString())
                                return b;
                    }
                    return null;
                }, Fw = function (a, b) {
                    this.code = a;
                    this.message = void 0 === b ? '' : b;
                }, Gw = function (a) {
                    Fw.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? '' : a);
                };
            t(Gw, Fw);
            var Kw = function () {
                var a = Dw.call(this) || this;
                G(H(), 'ulv', '1');
                a.ca = null;
                a.Hd = '';
                a.md = null;
                a.P = of('VIDEO');
                Hw(a);
                a.tb = new qw();
                Iw(a);
                a.Sb = null;
                Jw(a);
                a.attachShadow({ mode: 'open' });
                a.shadowRoot.appendChild(a.P);
                zw(function () {
                    G(H(), 'has', a.src || a.pb);
                    G(H(), 'hat', String(a.P.currentTime));
                });
                a.jc = !1;
                a.Kd = !1;
                a.Hb = null;
                return a;
            };
            t(Kw, Dw);
            Kw.prototype.attributeChangedCallback = function (a, b, c) {
                switch (a) {
                case 'src':
                    Lw(this, c);
                    break;
                case 'demuxedaudiosrc':
                case 'demuxedvideosrc':
                    Mw(this);
                    break;
                case 'muted':
                    this.P[a] = '' === c ? !0 : !!c;
                    Nw(this, a, c);
                    break;
                default:
                    Nw(this, a, c);
                }
            };
            var Nw = function (a, b, c) {
                    c !== a.P.getAttribute(b) && (null === c ? a.P.removeAttribute(b) : a.P.setAttribute(b, c));
                }, Ow = function (a) {
                    a.ca && (a.P.removeEventListener('timeupdate', a.Hb), a.ca.W(), a.ca = null);
                }, Pw = function (a, b) {
                    a.md = b;
                    a.P.dispatchEvent(new Event('error'));
                }, Hw = function (a) {
                    Qw(a);
                    Rw(a);
                    a.P.addEventListener('loadedmetadata', function () {
                        var b = a.P.videoWidth, c = a.P.videoHeight, d = ig(a), e = d.width, f = d.height;
                        0 < b && 0 < c && 0 < e && 0 < f && (d = d.width / d.height, b /= c, 0.97 <= Math.min(b, d) / Math.max(b, d) ? ag(a.P, { 'object-fit': 'cover' }) : ag(a.P, { 'object-fit': 'contain' }));
                    });
                    a.P.addEventListener('play', function () {
                        a.Kd || (iw(a.P, 'first_play'), a.Kd = !0);
                    });
                    a.P.addEventListener('pause', function () {
                        a.jc || (iw(a.P, 'first_pause'), jw(a.P), a.jc = !0);
                    });
                    Ei(u, 'unload', function () {
                        a.jc || (iw(a.P, 'first_pause'), jw(a.P), a.jc = !0);
                    });
                    a.P.addEventListener('stalled', function () {
                        G(H(), 'ves', '1');
                    });
                    new zu(a.P).O('playbackStalled', function () {
                        return G(H(), 'pbs', '1');
                    });
                    a.P.addEventListener('media_source_error', function (b) {
                        Ow(a);
                        b = b.detail;
                        Pw(a, new Fw(b.code, b.message));
                    });
                    Sw(a);
                }, Jw = function (a) {
                    var b = Ew(a.childNodes);
                    b && Tw(a, b);
                    null === a.Sb && Uw(a);
                }, Uw = function (a) {
                    if (u.MutationObserver) {
                        var b = new MutationObserver(function (c) {
                            c = q(c);
                            for (var d = c.next(); !d.done; d = c.next())
                                if (d = d.value, 'childList' === d.type && (d = Ew(d.addedNodes))) {
                                    Tw(a, d);
                                    b.disconnect();
                                    break;
                                }
                        });
                        b.observe(a, Cw);
                    }
                }, Iw = function (a) {
                    a.P.addEventListener('volumechange', function () {
                        a.tb.g.C(lw.toString(), a.P.muted);
                    });
                }, Tw = function (a, b) {
                    if (null === a.Sb && b.hasAttribute('src')) {
                        var c = b.getAttribute('src');
                        a.Sb = new xw(a.P, c, b.hasAttribute('default'));
                        new uw(a.Sb, a.tb);
                        c.includes('kind=asr') && G(H(), 'act', '1');
                    }
                }, Lw = function (a, b) {
                    if (b !== a.Hd) {
                        var c = (a.Hd = b) ? Ht(b) : null, d = !!c && Vv(c);
                        G(H(), 'umsem', d ? '1' : '0');
                        d ? (b = Bt(Xv, b, It(c), 1000 * Ct[c], null), a.ca = Bt($v, [b]), a.ca.O('media_source_error', function (e) {
                            e = Jt('media_source_error', e.detail);
                            a.P.dispatchEvent(e);
                        }), a.Hb = function () {
                            var e = a.ca;
                            e.A = 1000 * a.P.currentTime;
                            bw(e);
                        }, a.P.addEventListener('timeupdate', a.Hb), a.P.src = a.ca.l) : (Ow(a), a.P.src = b);
                        a.P.load();
                    }
                }, Mw = function (a) {
                    a.src && Pw(a, new Fw(MediaError.MEDIA_ERR_ABORTED, 'Setting demuxed src after src is already set.'));
                    if (!a.Bb && !a.pb && a.ca)
                        Ow(a), a.P.src = 'about:blank', a.P.load();
                    else if (a.Bb && a.pb) {
                        var b = Ht(a.Bb), c = Ht(a.pb);
                        if (c && Vv(c))
                            if (b && Vv(b)) {
                                var d = !!c && Vv(c) && !!b && Vv(b);
                                G(H(), 'umsed', d ? '1' : '0');
                                c = Bt(Xv, a.pb, It(c), -1, null);
                                b = Bt(Xv, a.Bb, It(b), -1, null);
                                a.ca = Bt($v, [
                                    c,
                                    b
                                ]);
                                a.ca.O('media_source_error', function (e) {
                                    e = Jt('media_source_error', e.detail);
                                    a.P.dispatchEvent(e);
                                });
                                a.Hb = function () {
                                    var e = a.ca;
                                    e.A = 1000 * a.P.currentTime;
                                    bw(e);
                                };
                                a.P.addEventListener('timeupdate', a.Hb);
                                a.P.src = a.ca.l;
                                a.P.load();
                            } else
                                Pw(a, new Gw('Audio itag "' + b + '" not supported.'));
                        else
                            Pw(a, new Gw('Video itag "' + c + '" not supported.'));
                    }
                }, Qw = function (a) {
                    for (var b = {}, c = q(Bw), d = c.next(); !d.done; b = {
                            Aa: b.Aa,
                            rc: b.rc
                        }, d = c.next())
                        b.Aa = d.value, b.Aa in a.P && ('function' === typeof a.P[b.Aa] ? (b.rc = a.P[b.Aa].bind(a.P), Object.defineProperty(a, b.Aa, {
                            set: function (e) {
                                return function (f) {
                                    a.P[e.Aa] = f;
                                };
                            }(b),
                            get: function (e) {
                                return function () {
                                    return e.rc;
                                };
                            }(b)
                        })) : Object.defineProperty(a, b.Aa, {
                            set: function (e) {
                                return function (f) {
                                    a.P[e.Aa] = f;
                                };
                            }(b),
                            get: function (e) {
                                return function () {
                                    return a.P[e.Aa];
                                };
                            }(b)
                        }));
                }, Rw = function (a) {
                    Object.defineProperty(a, 'error', {
                        set: function () {
                        },
                        get: function () {
                            return a.P.error ? a.P.error : a.md;
                        }
                    });
                }, Sw = function (a) {
                    a.P.style.width = gg();
                    a.P.style.height = gg();
                };
            da.Object.defineProperties(Kw.prototype, {
                Bb: {
                    configurable: !0,
                    enumerable: !0,
                    set: function (a) {
                        this.setAttribute('demuxedaudiosrc', a);
                    },
                    get: function () {
                        return this.getAttribute('demuxedaudiosrc');
                    }
                },
                pb: {
                    configurable: !0,
                    enumerable: !0,
                    set: function (a) {
                        this.setAttribute('demuxedvideosrc', a);
                    },
                    get: function () {
                        return this.getAttribute('demuxedvideosrc');
                    }
                },
                src: {
                    configurable: !0,
                    enumerable: !0,
                    set: function (a) {
                        this.setAttribute('src', a);
                    },
                    get: function () {
                        return this.getAttribute('src');
                    }
                }
            });
            da.Object.defineProperties(Kw, {
                observedAttributes: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return Aw;
                    }
                }
            });
            u.customElements && (u.customElements.get('lima-video') || u.customElements.define('lima-video', Kw));
            function Vw() {
                var a = Bt(Ev);
                a.initialize().then(function (b) {
                    b && (b = Jt('initialized'), a.dispatchEvent(b));
                });
                return a;
            }
            var Xw = function (a, b, c, d, e) {
                K.call(this);
                this.K = a;
                this.R = new P(b.url);
                this.h = c;
                this.o = e;
                this.H = b.g;
                this.va = d;
                (this.V = b.h) || this.R.l.remove('alr');
                G(H(), 'sl_dv' + this.o, (null != this.V).toString());
                this.X = !this.V;
                this.nb = 0;
                this.g = new XMLHttpRequest();
                this.$ = this.T = this.Ob = this.D = this.l = 0;
                this.Y = 0.1;
                this.C = [];
                this.M = !1;
                this.aa = this.ua = this.da = null;
                this.Va = !1;
                this.Pb = this.L = this.A = this.kb = this.ib = null;
                this.F = !1;
                if (this.B = Hu())
                    this.A = Vw(), oi(this, this.A);
                Ww(this);
            };
            t(Xw, K);
            var Yw = function (a, b) {
                    b = Jt('media_source_error', b);
                    a.K.dispatchEvent(b);
                }, Zw = function (a, b) {
                    Yw(a, {
                        code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: b
                    });
                }, Ww = function (a) {
                    a.da = function () {
                        $w(a);
                        if (a.X) {
                            var b = a.g.responseText;
                            a.M = !b || b.length < a.H;
                            a.T = 0;
                            I('sl_cc' + a.o + '_' + a.l);
                            a.D++;
                            ax(a);
                        }
                    };
                    a.ua = function () {
                        return $w(a);
                    };
                    a.aa = function () {
                        I('sl_ec' + a.o + '_' + a.l);
                        Zw(a, 'Failed to load chunk ' + a.l + ' for stream ' + a.o);
                    };
                    a.g.addEventListener('load', a.da);
                    a.g.addEventListener('progress', a.ua);
                    a.g.addEventListener('error', a.aa);
                    a.h.addEventListener('updateend', function () {
                        a.h.buffered.length && (a.Ob = a.h.buffered.end(0), a.B ? a.F && !a.h.updating && a.l === a.D && (I('sl_lc' + a.o), a.va()) : a.M && !a.h.updating && a.l === a.D && (I('sl_lc' + a.o), a.va()));
                        !a.Va && 1 < a.K.buffered.length && (G(H(), 'dbr', '1'), a.Va = !0);
                    });
                    a.h.addEventListener('update', function () {
                        a.C.length && !a.h.updating && a.h.appendBuffer(a.C.shift());
                    });
                    a.h.addEventListener('error', function () {
                        I('msb_err' + a.o);
                        Yw(a, {
                            code: MediaError.MEDIA_ERR_DECODE,
                            message: 'Error on SourceBuffer ' + a.o
                        });
                    });
                    a.B ? (Fv(a.A) ? bx(a) : a.ib = Ei(a.A, 'initialized', function () {
                        bx(a);
                    }), a.kb = Ei(a.A, 'get_video_succeeded', function () {
                        ax(a);
                    })) : bx(a);
                }, dx = function (a) {
                    I('sl_rc' + a.o + '-' + a.l);
                    var b = cx(a);
                    a.g.open('get', b);
                    a.g.overrideMimeType('text/plain; charset=x-user-defined');
                    a.g.send(null);
                    a.B && (a.L = null, a.Pb = b);
                }, $w = function (a) {
                    if (400 <= a.g.status)
                        Zw(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + ' for stream ' + a.o);
                    else {
                        if (!a.X) {
                            var b = a.g.getResponseHeader('content-type');
                            if (b && 0 <= b.indexOf('text/plain')) {
                                a.g.readyState === XMLHttpRequest.DONE && (a.R = new P(a.g.response), a.l = 0, a.D = 0, a.nb++, bx(a));
                                return;
                            }
                            a.X = !0;
                            I('sl_redc' + a.o);
                            G(H(), 'sl_tr' + a.o, a.nb.toString());
                        }
                        a.R.l.remove('alr');
                        if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE)
                            b = ex(a, a.T), a.T = a.g.response.length, a.$ += b.byteLength, fx(a, b);
                        if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = ex(a, 0), 0 < b.byteLength)) {
                            var c = a.g.responseText;
                            a.F = !c || c.length < a.H;
                            Nv(a.A, b, new P(a.Pb), a.F);
                        }
                    }
                }, fx = function (a, b) {
                    0 < b.byteLength && (a.h.updating || a.C.length ? a.C.push(b) : a.h.appendBuffer(b));
                }, ex = function (a, b) {
                    a = a.g.response;
                    for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
                        c[d] = a.charCodeAt(d + b) & 255;
                    return c.buffer;
                }, ax = function (a) {
                    var b = Kt;
                    -1 != b && b < a.$ + a.H ? (a.K.pause(), Kt = -1, b = !1) : (b = a.D === a.l && !a.h.updating && !a.C.length, b = a.B ? !a.F && b && a.K.currentTime >= a.Y : !a.M && b && a.K.currentTime >= a.Y);
                    b && (a.Y = a.Ob + 0.1, bx(a));
                }, cx = function (a) {
                    var b = a.B && a.L ? a.L + 1 : a.l * a.H;
                    return ct(a.R, 'range', b + '-' + (b + a.H - 1)).toString();
                }, bx = function (a) {
                    if (a.B) {
                        var b = new P(cx(a));
                        Lv(a.A, b).then(function (c) {
                            c ? (a.L = parseInt(c.endIndex, 10), a.F = c.isLastVideoChunk, fx(a, c.video), c = Jt('get_video_succeeded'), a.A.dispatchEvent(c), a.D++) : dx(a);
                            a.l++;
                        });
                    } else
                        dx(a), a.l++;
                };
            Xw.prototype.N = function () {
                this.B && Fv(this.A) && this.A.close();
                this.g.removeEventListener('load', this.da);
                this.g.removeEventListener('progress', this.ua);
                this.g.removeEventListener('error', this.aa);
                Mi(this.ib);
                Mi(this.kb);
                K.prototype.N.call(this);
            };
            var hx = function (a, b) {
                K.call(this);
                var c = this;
                this.o = a;
                this.D = b;
                this.ca = new MediaSource();
                this.C = [];
                this.h = [];
                this.g = this.l = null;
                this.B = !1;
                this.A = function () {
                    return gx(c);
                };
                this.ca.addEventListener('sourceopen', this.A);
            };
            t(hx, K);
            var ix = function (a) {
                    a.l && a.o.removeEventListener('timeupdate', a.l);
                }, gx = function (a) {
                    I('msmsw_oso');
                    a.l = function () {
                        if (!a.B)
                            for (var e = q(a.h), f = e.next(); !f.done; f = e.next())
                                ax(f.value);
                    };
                    a.o.addEventListener('timeupdate', a.l);
                    for (var b = 0; b < a.D.length; b++) {
                        var c = a.D[b];
                        G(H(), 'msmsw_mime' + b, c.mimeType);
                        G(H(), 'msmsw_cs' + b, c.g.toString());
                        var d = a.ca.addSourceBuffer(c.mimeType);
                        d ? (a.C.push(d), c = Bt(Xw, a.o, c, d, function () {
                            a:
                                if (!a.B) {
                                    for (var e = q(a.h), f = e.next(); !f.done; f = e.next())
                                        if (f = f.value, f.B ? !f.F || f.h.updating || f.C.length : !f.M || f.h.updating || f.C.length)
                                            break a;
                                    a.ca.endOfStream();
                                    a.B = !0;
                                    ix(a);
                                }
                        }, b), a.h.push(c)) : I('msmsw_sbf' + b);
                    }
                    G(H(), 'msmsw_ns', a.C.length.toString());
                };
            hx.prototype.N = function () {
                this.g && window.URL.revokeObjectURL(this.g);
                for (var a = q(this.h), b = a.next(); !b.done; b = a.next())
                    b.value.W();
                ix(this);
                this.ca.removeEventListener('sourceopen', this.A);
                K.prototype.N.call(this);
            };
            var jx = function () {
                throw Error('Do not instantiate directly');
            };
            jx.prototype.g = null;
            jx.prototype.getContent = function () {
                return this.content;
            };
            jx.prototype.toString = function () {
                return this.content;
            };
            var kx = function () {
                jx.call(this);
            };
            Xa(kx, jx);
            var lx = function (a) {
                function b(c) {
                    this.content = c;
                }
                b.prototype = a.prototype;
                return function (c, d) {
                    c = new b(String(c));
                    void 0 !== d && (c.g = d);
                    return c;
                };
            }(kx);
            var mx = {
                    rgb: !0,
                    rgba: !0,
                    alpha: !0,
                    rect: !0,
                    image: !0,
                    'linear-gradient': !0,
                    'radial-gradient': !0,
                    'repeating-linear-gradient': !0,
                    'repeating-radial-gradient': !0,
                    'cubic-bezier': !0,
                    matrix: !0,
                    perspective: !0,
                    rotate: !0,
                    rotate3d: !0,
                    rotatex: !0,
                    rotatey: !0,
                    steps: !0,
                    rotatez: !0,
                    scale: !0,
                    scale3d: !0,
                    scalex: !0,
                    scaley: !0,
                    scalez: !0,
                    skew: !0,
                    skewx: !0,
                    skewy: !0,
                    translate: !0,
                    translate3d: !0,
                    translatex: !0,
                    translatey: !0,
                    translatez: !0
                }, nx = function (a) {
                    a = ic(a);
                    if ('' == a)
                        return null;
                    var b = String(a.substr(0, 4)).toLowerCase();
                    if (0 == ('url(' < b ? -1 : 'url(' == b ? 0 : 1))
                        return null;
                    if (0 < a.indexOf('(')) {
                        if (/"|'/.test(a))
                            return null;
                        b = /([\-\w]+)\(/g;
                        for (var c; c = b.exec(a);)
                            if (!(c[1].toLowerCase() in mx))
                                return null;
                    }
                    return a;
                };
            function ox(a) {
                var b = u.CSSStyleDeclaration;
                return b && b.prototype && b.prototype[a] || null;
            }
            var px = ox('getPropertyValue'), qx = ox('setProperty');
            function rx(a, b, c, d) {
                if (a)
                    return a.apply(b, d);
                if (wd && 10 > document.documentMode) {
                    if (!b[c].call)
                        throw Error('IE Clobbering detected');
                } else if ('function' != typeof b[c])
                    throw Error('Clobbering detected');
                return b[c].apply(b, d);
            }
            ;
            var sx = {
                    '-webkit-border-horizontal-spacing': !0,
                    '-webkit-border-vertical-spacing': !0
                }, ux = function (a) {
                    if (!a)
                        return Ec;
                    var b = document.createElement('div').style;
                    tx(a).forEach(function (c) {
                        var d = zd && c in sx ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, '');
                        0 != d.lastIndexOf('--', 0) && 0 != d.lastIndexOf('var', 0) && (c = rx(px, a, a.getPropertyValue ? 'getPropertyValue' : 'getAttribute', [c]) || '', c = nx(c), null != c && rx(qx, b, b.setProperty ? 'setProperty' : 'setAttribute', [
                            d,
                            c
                        ]));
                    });
                    return new Dc(b.cssText || '', Cc);
                }, tx = function (a) {
                    La(a) ? a = zb(a) : (a = Lb(a), vb(a, 'cssText'));
                    return a;
                };
            var vx = function () {
                if (window.MutationObserver) {
                    var a = [];
                    new MutationObserver(function () {
                        a.forEach(function (b) {
                            return b();
                        });
                        a = [];
                    }).observe(document.createTextNode(''), { characterData: !0 });
                }
            };
            'function' === typeof Promise && -1 < String(Promise).indexOf('[native code]') || vx();
            var wx = function (a) {
                    this.g = a;
                }, xx = function (a, b) {
                    return Nb(a.g, b) && (a = a.g[b], 'boolean' === typeof a) ? a : !1;
                }, yx = function (a) {
                    if (Nb(a.g, 'forceExperimentIds')) {
                        a = a.g.forceExperimentIds;
                        var b = [], c = 0;
                        Array.isArray(a) && a.forEach(function (d) {
                            'number' === typeof d && (b[c++] = d);
                        });
                        return b;
                    }
                    return null;
                };
            var V = function () {
                    this.J = 'always';
                    this.L = 4;
                    this.A = 1;
                    this.g = 0;
                    this.I = !0;
                    this.o = 'en';
                    this.K = !1;
                    this.T = this.R = '';
                    this.B = null;
                    this.X = this.M = -1;
                    this.V = this.H = this.C = '';
                    this.D = !1;
                    this.h = !0;
                    this.Y = At();
                    this.F = {};
                    try {
                        this.aa = cl(void 0)[0];
                    } catch (a) {
                    }
                }, zx = function (a) {
                    a = bd(a);
                    hc(a) || (a = a.substring(0, 20));
                    return a;
                };
            l = V.prototype;
            l.setCompanionBackfill = function (a) {
                this.J = a;
            };
            l.getCompanionBackfill = function () {
                return this.J;
            };
            l.setNumRedirects = function (a) {
                this.L = a;
            };
            l.getNumRedirects = function () {
                return this.L;
            };
            l.setPpid = function (a) {
                this.$ = a;
            };
            l.getPpid = function () {
                return this.$;
            };
            l.setVpaidAllowed = function (a) {
                'boolean' === typeof a && (this.A = a ? 1 : 0);
            };
            l.setVpaidMode = function (a) {
                this.A = a;
            };
            l.getVpaidMode = function () {
                return this.A;
            };
            l.setAutoPlayAdBreaks = function (a) {
                this.I = a;
            };
            l.isAutoPlayAdBreaks = function () {
                return this.I;
            };
            l.setIsVpaidAdapter = function (a) {
                this.K = a;
            };
            l.Fb = function () {
                return this.K;
            };
            l.setLocale = function (a) {
                if (a = ku(a))
                    this.o = a;
            };
            l.Ce = function () {
                return this.o;
            };
            l.setPlayerType = function (a) {
                this.R = zx(a);
            };
            l.getPlayerType = function () {
                return this.R;
            };
            l.setPlayerVersion = function (a) {
                this.T = zx(a);
            };
            l.getPlayerVersion = function () {
                return this.T;
            };
            var Ax = function (a) {
                if (null == a.B) {
                    var b = {};
                    var c = new P(D().location.href).l;
                    if (gt(c, 'tcnfp'))
                        try {
                            b = JSON.parse(c.get('tcnfp'));
                        } catch (d) {
                        }
                    a.B = new wx(b);
                }
                return a.B;
            };
            l = V.prototype;
            l.setPageCorrelator = function (a) {
                this.M = a;
            };
            l.setStreamCorrelator = function (a) {
                this.X = a;
            };
            l.setDisableCustomPlaybackForIOS10Plus = function (a) {
                this.D = a;
            };
            l.getDisableCustomPlaybackForIOS10Plus = function () {
                return this.D;
            };
            l.Qe = function () {
                return this.h;
            };
            l.setCookiesEnabled = function (a) {
                null != a && (this.h = a);
            };
            l.setDisableFlashAds = function () {
            };
            l.getDisableFlashAds = function () {
                return !0;
            };
            l.setFeatureFlags = function (a) {
                this.F = a;
            };
            l.getFeatureFlags = function () {
                return this.F;
            };
            V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
            V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
            V.prototype.getDisableFlashAds = V.prototype.getDisableFlashAds;
            V.prototype.setDisableFlashAds = V.prototype.setDisableFlashAds;
            V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
            V.prototype.isCookiesEnabled = V.prototype.Qe;
            V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
            V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
            V.prototype.setStreamCorrelator = V.prototype.setStreamCorrelator;
            V.prototype.setPageCorrelator = V.prototype.setPageCorrelator;
            V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
            V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
            V.prototype.getPlayerType = V.prototype.getPlayerType;
            V.prototype.setPlayerType = V.prototype.setPlayerType;
            V.prototype.getLocale = V.prototype.Ce;
            V.prototype.setLocale = V.prototype.setLocale;
            V.prototype.isVpaidAdapter = V.prototype.Fb;
            V.prototype.setIsVpaidAdapter = V.prototype.setIsVpaidAdapter;
            V.prototype.isAutoPlayAdBreaks = V.prototype.isAutoPlayAdBreaks;
            V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
            V.prototype.getVpaidMode = V.prototype.getVpaidMode;
            V.prototype.setVpaidMode = V.prototype.setVpaidMode;
            V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
            V.prototype.getPpid = V.prototype.getPpid;
            V.prototype.setPpid = V.prototype.setPpid;
            V.prototype.getNumRedirects = V.prototype.getNumRedirects;
            V.prototype.setNumRedirects = V.prototype.setNumRedirects;
            V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
            V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
            var W = new V();
            var Bx = function (a) {
                ve(this, a, -1, null, null);
            };
            t(Bx, we);
            var Cx = function () {
                    var a = {};
                    this.g = function (b, c) {
                        return null != a[b] ? a[b] : c;
                    };
                    this.h = function (b, c) {
                        return null != a[b] ? a[b] : c;
                    };
                }, Dx = function (a) {
                    return F(Cx).g(a.g, a.defaultValue);
                }, Ex = function (a) {
                    return F(Cx).h(a.g, a.defaultValue);
                };
            var Fx = function (a) {
                    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
                    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
                    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
                }, Gx = function (a, b) {
                    b = void 0 === b ? 500 : b;
                    K.call(this);
                    this.h = a;
                    this.g = null;
                    this.B = {};
                    this.A = 0;
                    this.o = b;
                    this.l = null;
                };
            t(Gx, K);
            Gx.prototype.N = function () {
                this.B = {};
                this.l && (Xe(this.h, 'message', this.l), delete this.l);
                delete this.B;
                delete this.h;
                delete this.g;
                K.prototype.N.call(this);
            };
            var Ix = function (a) {
                    return 'function' === typeof a.h.__tcfapi || null != Hx(a);
                }, Lx = function (a, b) {
                    var c = { internalErrorState: 0 }, d = ib(function () {
                            return b(c);
                        }), e = 0;
                    -1 !== a.o && (e = setTimeout(function () {
                        e = 0;
                        c.tcString = 'tcunavailable';
                        c.internalErrorState = 1;
                        d();
                    }, a.o));
                    Jx(a, 'addEventListener', function (f) {
                        f && (c = f, c.internalErrorState = Fx(c), Kx(c) && (0 != c.internalErrorState && (c.tcString = 'tcunavailable'), Jx(a, 'removeEventListener', null, c.listenerId), e && (clearTimeout(e), e = 0), d()));
                    });
                };
            Gx.prototype.addEventListener = function (a) {
                var b = {}, c = ib(function () {
                        return a(b);
                    }), d = 0;
                -1 !== this.o && (d = setTimeout(function () {
                    b.tcString = 'tcunavailable';
                    b.internalErrorState = 1;
                    c();
                }, this.o));
                var e = function (f, g) {
                    clearTimeout(d);
                    f ? (b = f, b.internalErrorState = Fx(b), g && 0 === b.internalErrorState || (b.tcString = 'tcunavailable', g || (b.internalErrorState = 3))) : (b.tcString = 'tcunavailable', b.internalErrorState = 3);
                    a(b);
                };
                try {
                    Jx(this, 'addEventListener', e);
                } catch (f) {
                    b.tcString = 'tcunavailable', b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
            };
            Gx.prototype.removeEventListener = function (a) {
                a && a.listenerId && Jx(this, 'removeEventListener', null, a.listenerId);
            };
            var Jx = function (a, b, c, d) {
                    c || (c = function () {
                    });
                    if ('function' === typeof a.h.__tcfapi)
                        a = a.h.__tcfapi, a(b, 2, c, d);
                    else if (Hx(a)) {
                        Mx(a);
                        var e = ++a.A;
                        a.B[e] = c;
                        a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                            command: b,
                            version: 2,
                            callId: e,
                            parameter: d
                        }, c), '*'));
                    } else
                        c({}, !1);
                }, Hx = function (a) {
                    if (a.g)
                        return a.g;
                    a.g = Nf(a.h, '__tcfapiLocator');
                    return a.g;
                }, Mx = function (a) {
                    a.l || (a.l = function (b) {
                        try {
                            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                            a.B[c.callId](c.returnValue, c.success);
                        } catch (d) {
                        }
                    }, We(a.h, 'message', a.l));
                }, Kx = function (a) {
                    if (!1 === a.gdprApplies)
                        return !0;
                    void 0 === a.internalErrorState && (a.internalErrorState = Fx(a));
                    return 'error' === a.cmpStatus || 0 !== a.internalErrorState || 'loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus) ? !0 : !1;
                };
            function Nx(a) {
                var b = {};
                new P(a).l.forEach(function (c, d) {
                    b[d] = c;
                });
                return b;
            }
            var Ox = function (a) {
                    this.Dd = a.isGdprLoader || !1;
                    this.uspString = a.uspString || '';
                    var b = a.gdprApplies;
                    this.h = 'boolean' == typeof b ? b ? '1' : '0' : 'number' != typeof b || 1 !== b && 0 !== b ? 'string' != typeof b || '1' !== b && '0' !== b ? '' : '1' == b ? '1' : '0' : 1 == b ? '1' : '0';
                    this.g = a.tcString || '';
                    /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
                }, Px = function (a, b) {
                    a = void 0 === a ? {} : a;
                    b = void 0 === b ? {} : b;
                    this.g = a;
                    this.h = new Ox(b);
                }, Qx = function (a, b) {
                    var c = new P(a);
                    var d = c.h;
                    (c = gc(c.g, 'googleads.g.doubleclick.net') && iu('/pagead/(live/)?ads', d)) || (d = new mu(a), c = d.g, d = nu(d, d.h), c = !gc(c, '.g.doubleclick.net') && gc(c, 'doubleclick.net') && iu('/(ad|pfad)[x|i|j]?/', d));
                    c || (c = new P(a), d = c.h, c = gc(c.g, 'doubleclick.net') && iu('/gampad/(live/)?ads', d));
                    (c = c || 'bid.g.doubleclick.net' == new P(a).g) || (c = new P(a), d = c.h, c = 'ad.doubleclick.net' === c.g && iu('/dv3/adv', d));
                    c || (c = new P(a), d = c.h, 'pubads.g.doubleclick.net' === c.g && (iu('/ssai/', d) || iu('/ondemand/', d)));
                    return new Px(Nx(a), b);
                }, Rx = function (a, b) {
                    if (a.g.hasOwnProperty(b))
                        return a.g[b];
                }, Sx = function (a) {
                    var b, c;
                    if (!(b = '1' == (null == (c = Rx(a, 'ltd')) ? void 0 : c.toString()))) {
                        var d;
                        b = null == (d = Rx(a, 'gdpr')) ? void 0 : d.toString();
                        d = a.h.h;
                        d = ('1' == d || '0' == d ? d : void 0 != b ? b : '').toLowerCase();
                        if ('true' === d || '1' === d)
                            if (d = a.h.g, a = Rx(a, 'gdpr_consent'), a = d && 'tcunavailable' != d ? d : 'tcunavailable' == d ? a || d : a || '', 'tcunavailable' === a)
                                var e = !1;
                            else {
                                if ((d = Hr(a)) && a) {
                                    var f = Ke(d, Zq, 1);
                                    d = Ke(d, Sq, 2) || new Sq();
                                    b = Ee(f, 9, 0);
                                    c = Ee(f, 4, 0);
                                    var g = Ee(f, 5, 0), h = Fe(f, 10), k = Fe(f, 11), n = Ee(f, 16, ''), m = Fe(f, 15), v = {
                                            consents: Ir(A(f, 13), ur),
                                            legitimateInterests: Ir(A(f, 14), ur)
                                        }, r = {
                                            consents: Ir(A(f, 17), void 0),
                                            legitimateInterests: Ir(A(f, 18), void 0)
                                        }, w = Ir(A(f, 12), vr), B = Le(f, Qq, 19);
                                    f = {};
                                    B = q(B);
                                    for (var M = B.next(); !M.done; M = B.next()) {
                                        M = M.value;
                                        var Ka = Ee(M, 1, 0);
                                        f[Ka] = f[Ka] || {};
                                        for (var Vc = q(A(M, 3)), Ad = Vc.next(); !Ad.done; Ad = Vc.next())
                                            f[Ka][Ad.value] = Ee(M, 2, 0);
                                    }
                                    a = {
                                        tcString: a,
                                        tcfPolicyVersion: b,
                                        gdprApplies: !0,
                                        cmpId: c,
                                        cmpVersion: g,
                                        isServiceSpecific: h,
                                        useNonStandardStacks: k,
                                        publisherCC: n,
                                        purposeOneTreatment: m,
                                        purpose: v,
                                        vendor: r,
                                        specialFeatureOptins: w,
                                        publisher: {
                                            restrictions: f,
                                            consents: Ir(A(d, 1), ur),
                                            legitimateInterests: Ir(A(d, 2), ur),
                                            customPurposes: {
                                                consents: Ir(A(d, 3)),
                                                legitimateInterests: Ir(A(d, 4))
                                            }
                                        }
                                    };
                                } else
                                    a = null;
                                if (a) {
                                    var Ra = void 0 === Ra ? !1 : Ra;
                                    if (Kx(a))
                                        if (!1 === a.gdprApplies || 'tcunavailable' === a.tcString || void 0 === a.gdprApplies && !Ra || 'string' !== typeof a.tcString || !a.tcString.length)
                                            e = !0;
                                        else {
                                            e = void 0 === e ? '755' : e;
                                            c: {
                                                if (a.publisher && a.publisher.restrictions && (Ra = a.publisher.restrictions['1'], void 0 !== Ra)) {
                                                    Ra = Ra[void 0 === e ? '755' : e];
                                                    break c;
                                                }
                                                Ra = void 0;
                                            }
                                            0 === Ra ? e = !1 : a.purpose && a.vendor ? (Ra = a.vendor.consents, (e = !(!Ra || !Ra[void 0 === e ? '755' : e])) && a.purposeOneTreatment && ('DE' === a.publisherCC || Dx(Lr) && 'CH' === a.publisherCC) ? e = !0 : e && (e = a.purpose.consents, e = !(!e || !e['1']))) : e = !0;
                                        }
                                    else
                                        e = !1;
                                } else
                                    e = !1;
                            }
                        else
                            e = !0;
                        b = !e;
                    }
                    return b;
                };
            var Tx = 'platform platformVersion architecture model uaFullVersion bitness'.split(' '), Ux = function () {
                    var a = window;
                    return a.navigator && a.navigator.userAgentData && 'function' === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Tx).then(function (b) {
                        var c = new Zr();
                        c = He(c, 1, b.platform);
                        c = He(c, 2, b.platformVersion);
                        c = He(c, 3, b.architecture);
                        c = He(c, 4, b.model);
                        c = He(c, 5, b.uaFullVersion);
                        return He(c, 9, b.bitness);
                    }) : null;
                };
            var Wx = function () {
                    new Px();
                    At();
                    this.deviceId = '';
                    this.g = this.referrer = null;
                    Vx(this);
                }, Xx = function () {
                    F(Wx);
                    var a = 'h.3.473.0';
                    W.Fb() && (a += '/vpaid_adapter');
                    return a;
                }, Vx = function (a) {
                    var b = Ux();
                    b && b.then(function (c) {
                        a.g = ae(Pe(c));
                    });
                };
            var Yx = 'abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting'.split(' ');
            var $x = function (a) {
                    var b = Ax(W);
                    if (b && xx(b, 'forceCustomPlayback') || W.Fb())
                        return !0;
                    if ((Ed || Vt()) && a)
                        return !1;
                    a = a && (Ed || Vt() || Wt(10)) && (W.getDisableCustomPlaybackForIOS10Plus() || nh(ci));
                    return (Dd || Fd) && !a || Cd && (!Cd || !Ut(Tt, 4)) || Zx() ? !0 : !1;
                }, ay = function (a) {
                    return null == a ? !1 : W.Fb() ? !0 : Gd || Ed || Vt() ? Xt(a) ? Ed || Vt() || Wt(10) && W.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : Cd && (!Cd || !Ut(Tt, 4)) || Zx() ? !0 : !1;
                }, by = function () {
                    var a = Ax(W);
                    return a && xx(a, 'disableOnScreenDetection') ? !1 : !fm();
                }, Zx = function () {
                    var a;
                    (a = gm()) || (F(Wx), a = !1);
                    return a;
                };
            var cy = function () {
                    this.allowCustom = !0;
                    this.creativeType = this.resourceType = 'All';
                    this.sizeCriteria = 'SelectExactMatch';
                    this.nearMatchPercent = 90;
                    this.adSlotIds = [];
                }, dy = {
                    IMAGE: 'Image',
                    FLASH: 'Flash',
                    ALL: 'All'
                };
            x('module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType', dy, void 0);
            var ey = {
                HTML: 'Html',
                IFRAME: 'IFrame',
                STATIC: 'Static',
                ALL: 'All'
            };
            x('module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType', ey, void 0);
            var fy = {
                IGNORE: 'IgnoreSize',
                SELECT_EXACT_MATCH: 'SelectExactMatch',
                SELECT_NEAR_MATCH: 'SelectNearMatch'
            };
            x('module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria', fy, void 0);
            var hy = function (a, b) {
                    b = void 0 === b ? new cy() : b;
                    this.h = a;
                    this.g = b ? b : new cy();
                    this.A = gy(ey, this.g.resourceType) ? this.g.resourceType : 'All';
                    this.l = gy(dy, this.g.creativeType) ? this.g.creativeType : 'All';
                    this.C = gy(fy, this.g.sizeCriteria) ? this.g.sizeCriteria : 'SelectExactMatch';
                    this.o = null != this.g.adSlotIds ? this.g.adSlotIds : [];
                    this.B = 'number' === typeof this.g.nearMatchPercent && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90;
                }, ky = function (a, b) {
                    var c = [];
                    b.forEach(function (d) {
                        a.g.allowCustom && (!hc(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.mainAdSequenceNumber) || d.g.mainAdSequenceNumber == d.g.sequenceNumber) && iy(a, d) ? c.push(d) : (d = jy(a, d), null != d && !hc(d.getContent()) && c.push(d)));
                    });
                    return c;
                }, iy = function (a, b) {
                    var c;
                    if (c = 'Flash' != b.getContentType()) {
                        if (c = 'All' == a.A || a.A == b.g.resourceType)
                            c = b.getContentType(), c = null == c ? !0 : 'All' == a.l || a.l == c;
                        c && (c = b.xd(), c = 0 == a.o.length ? !0 : null != c ? a.o.includes(c) : !1);
                    }
                    if (c)
                        if (b = b.g.size, (c = 'IgnoreSize' == a.C) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height : !1), c)
                            a = !0;
                        else {
                            if (c = 'SelectNearMatch' == a.C)
                                c = b.width, b = b.height, c = c > a.h.width || b > a.h.height || c < a.B / 100 * a.h.width || b < a.B / 100 * a.h.height ? !1 : !0;
                            a = c;
                        }
                    else
                        a = !1;
                    return a;
                }, jy = function (a, b) {
                    b = ly(b);
                    return null == b ? null : b.find(function (c) {
                        return iy(a, c);
                    }) || null;
                }, gy = function (a, b) {
                    return null != b && Ob(a, b);
                };
            var X = {}, my = (X.creativeView = 'creativeview', X.start = 'start', X.midpoint = 'midpoint', X.firstQuartile = 'firstquartile', X.thirdQuartile = 'thirdquartile', X.complete = 'complete', X.mute = 'mute', X.unmute = 'unmute', X.pause = 'pause', X.rewind = 'rewind', X.resume = 'resume', X.fullscreen = 'fullscreen', X.exitFullscreen = 'exitfullscreen', X.expand = 'expand', X.collapse = 'collapse', X.close = 'close', X.acceptInvitation = 'acceptinvitation', X.userInteraction = 'userInteraction', X.adCanPlay = 'adCanPlay', X.adStarted = 'adStarted', X.abandon = 'abandon', X.acceptInvitationLinear = 'acceptinvitationlinear', X.engagedView = 'engagedview', X.instreamAdComplete = 'instreamAdComplete', X.skipShown = 'skipshown', X.skippableStateChanged = 'skippableStateChanged', X.skip = 'skip', X.progress = 'progress', X.publisher_invoked_skip = 'PUBLISHER_INVOKED_SKIP', X.annotation_start = 'annotation_start', X.annotation_click = 'annotation_click', X.annotation_close = 'annotation_close', X.cta_annotation_shown = 'cta_annotation_shown', X.cta_annotation_clicked = 'cta_annotation_clicked', X.cta_annotation_closed = 'cta_annotation_closed', X.replay = 'replay', X.stop = 'stop', X.autoplayDisallowed = 'autoplayDisallowed', X.error = 'error', X.mediaLoadTimeout = 'mediaLoadTimeout', X.linearChanged = 'linearChanged', X.click = 'click', X.contentPauseRequested = 'contentPauseRequested', X.contentResumeRequested = 'contentResumeRequested', X.discardAdBreak = 'discardAdBreak', X.updateAdsRenderingSettings = 'updateAdsRenderingSettings', X.durationChange = 'durationChange', X.expandedChanged = 'expandedChanged', X.autoClose = 'autoClose', X.userClose = 'userClose', X.userRecall = 'userRecall', X.prefetched = 'prefetched', X.loaded = 'loaded', X.init = 'init', X.allAdsCompleted = 'allAdsCompleted', X.adMetadata = 'adMetadata', X.adBreakReady = 'adBreakReady', X.adBreakFetchError = 'adBreakFetchError', X.log = 'log', X.volumeChange = 'volumeChange', X.companionBackfill = 'companionBackfill', X.companionInitialized = 'companionInitialized', X.companionImpression = 'companionImpression', X.companionClick = 'companionClick', X.impression = 'impression', X.interaction = 'interaction', X.adProgress = 'adProgress', X.adBuffering = 'adBuffering', X.trackingUrlPinged = 'trackingUrlPinged', X.measurable_impression = 'measurable_impression', X.custom_metric_viewable = 'custom_metric_viewable', X.viewable_impression = 'viewable_impression', X.fully_viewable_audible_half_duration_impression = 'fully_viewable_audible_half_duration_impression', X.overlay_resize = 'overlay_resize', X.overlay_unmeasurable_impression = 'overlay_unmeasurable_impression', X.overlay_unviewable_impression = 'overlay_unviewable_impression', X.overlay_viewable_immediate_impression = 'overlay_viewable_immediate_impression', X.overlay_viewable_end_of_session_impression = 'overlay_viewable_end_of_session_impression', X.externalActivityEvent = 'externalActivityEvent', X.adEvent = 'adEvent', X.configure = 'configure', X.remainingTime = 'remainingTime', X.destroy = 'destroy', X.resize = 'resize', X.volume = 'volume', X.authorIconClicked = 'videoAuthorIconClicked', X.authorNameClicked = 'videoAuthorClicked', X.videoClicked = 'videoClicked', X.videoIconClicked = 'videoIconClicked', X.learnMoreClicked = 'videoLearnMoreClicked', X.muteClicked = 'videoMuteClicked', X.titleClicked = 'videoTitleClicked', X.skipShown = 'SKIP_SHOWN', X.videoSkipClicked = 'SKIPPED', X.unmuteClicked = 'videoUnmuteClicked', X.vpaidEvent = 'vpaidEvent', X.show_ad = 'show_ad', X.video_card_endcap_collapse = 'video_card_endcap_collapse', X.video_card_endcap_dismiss = 'video_card_endcap_dismiss', X.video_card_endcap_impression = 'video_card_endcap_impression', X.mediaUrlPinged = 'mediaUrlPinged', X.breakStart = 'breakstart', X.breakEnd = 'breakend', X.omidReady = 'omidReady', X.omidUnavailable = 'omidUnavailable', X.omidAdSessionCompleted = 'omidAdSessionCompleted', X.omidAdSessionAbandoned = 'omidAdSessionAbandoned', X.verificationNotExecuted = 'verificationNotExecuted', X.loadStart = 'loadStart', X.seeked = 'seeked', X.seeking = 'seeking', X);
            var ny = function (a) {
                L.call(this);
                this.h = a || 'goog_' + cd++;
                this.o = [];
                this.l = !1;
            };
            t(ny, L);
            ny.prototype.connect = function () {
                for (this.l = !0; 0 != this.o.length;) {
                    var a = this.o.shift();
                    this.sendMessage(a.name, a.type, a.data);
                }
            };
            var oy = function (a, b, c, d) {
                a.l ? a.sendMessage(b, c, d) : a.o.push({
                    name: b,
                    type: c,
                    data: d
                });
            };
            ny.prototype.sendMessage = function () {
            };
            function py(a) {
                a = Pt(a, fm() ? 'https' : window.location.protocol);
                if (fm())
                    qy(a);
                else
                    try {
                        a && (lt(a) ? pt(a) : ut(a));
                    } catch (b) {
                    }
            }
            function qy(a) {
                new fu().get({
                    url: a,
                    timeout: new Lt()
                }).then(function () {
                }, function () {
                });
            }
            ;
            var ry = function (a, b, c) {
                var d = Error.call(this);
                this.message = d.message;
                'stack' in d && (this.stack = d.stack);
                this.l = b;
                this.g = c;
                this.o = a;
            };
            t(ry, Error);
            l = ry.prototype;
            l.getAd = function () {
                return this.B;
            };
            l.getInnerError = function () {
                return this.h;
            };
            l.getMessage = function () {
                return this.l;
            };
            l.getErrorCode = function () {
                return this.g;
            };
            l.Bd = function () {
                return 1000 > this.g ? this.g : 900;
            };
            l.getType = function () {
                return this.o;
            };
            l.toString = function () {
                return 'AdError ' + this.getErrorCode() + ': ' + this.getMessage() + (null != this.getInnerError() ? ' Caused by: ' + this.getInnerError() : '');
            };
            var sy = function (a, b) {
                this.message = a;
                this.errorCode = b;
            };
            sy.prototype.getErrorCode = function () {
                return this.errorCode;
            };
            sy.prototype.getMessage = function () {
                return this.message;
            };
            var ty = new sy('Failed to initialize ad playback element before starting ad playback.', 400), uy = new sy('The provided {0} information: {1} is invalid.', 1101);
            function vy(a, b, c) {
                var d = void 0 === b ? null : b;
                if (!(d instanceof ry)) {
                    var e = a.errorCode, f = a.message, g = Array.prototype.slice.call(arguments, 2);
                    if (0 < g.length)
                        for (var h = 0; h < g.length; h++)
                            f = f.replace(new RegExp('\\{' + h + '\\}', 'ig'), g[h]);
                    e = new ry('adPlayError', f, e);
                    e.h = d;
                    d = e;
                }
                return d;
            }
            ;
            var wy = function () {
                    this.errorMessage = this.info = this.error = this.Wc = null;
                }, yy = function (a, b) {
                    a.Wc = b;
                    return a;
                };
            wy.prototype.getError = function () {
                return this.error;
            };
            var zy = function (a, b) {
                a.errorMessage = b;
                return a;
            };
            wy.prototype.getErrorMessage = function () {
                return this.errorMessage;
            };
            var Ay = function () {
                    this.cache = {};
                }, Ey = function () {
                    By || (Cy = Ex(Pr), Dy = Ex(Or), By = new Ay());
                    return By;
                }, Fy = function (a) {
                    var b = A(a, 3);
                    if (!b)
                        return 3;
                    if (void 0 === A(a, 2))
                        return 4;
                    a = Date.now();
                    return a > b + 3600000 * Dy ? 2 : a > b + 3600000 * Cy ? 1 : 0;
                };
            Ay.prototype.get = function (a, b) {
                var c = new wy();
                if (this.cache[a])
                    return yy(c, this.cache[a]);
                var d = '';
                try {
                    d = b.getItem('_GESPSK-' + a);
                } catch (e) {
                    return c.error = 6, zy(c, e.message);
                }
                if (!d)
                    return new wy();
                b = null;
                try {
                    b = ye(Rj, d ? JSON.parse(d) : null);
                } catch (e) {
                    return a = new wy(), a.error = 5, zy(a, e.message);
                }
                b && (this.cache[a] = b);
                return yy(new wy(), b);
            };
            Ay.prototype.set = function (a, b) {
                var c = A(a, 1), d = '_GESPSK-' + c, e = yy(new wy(), a);
                try {
                    b.setItem(d, Pe(a));
                } catch (f) {
                    e.info = 7, zy(e, f.message);
                }
                this.cache[c] = a;
                return e;
            };
            var By = null, Cy = 24, Dy = 72;
            var Gy = function () {
                this.g = function () {
                    return [];
                };
            };
            function Hy(a, b, c, d) {
                c = void 0 === c ? null : c;
                d = void 0 === d ? {} : d;
                if (Math.random() < Ex(Rr)) {
                    var e = {}, f = Object, g = f.assign;
                    e.c = String(a);
                    a = String;
                    var h = window;
                    if ('number' !== typeof h.goog_pvsid)
                        try {
                            Object.defineProperty(h, 'goog_pvsid', {
                                value: Math.floor(Math.random() * Math.pow(2, 52)),
                                configurable: !1
                            });
                        } catch (k) {
                        }
                    Wf(g.call(f, (e.pc = a(Number(h.goog_pvsid) || -1), e.em = c, e.lid = b, e.eids = F(Gy).g().join(), e), d), 'esp');
                }
            }
            ;
            function Iy(a) {
                if (!a)
                    return null;
                var b = new Oj(), c = Ex(Qr), d = [], e = /^_GESPSK-(.+)$/;
                try {
                    for (var f = 0; f < a.length; f++) {
                        var g = (e.exec(a.key(f)) || [])[1];
                        g && d.push(g);
                    }
                } catch (k) {
                }
                d = q(d);
                for (e = d.next(); !e.done; e = d.next())
                    if (e = e.value, f = Ey().get(e, a), f.getError())
                        Hy(f.getError(), e, f.getErrorMessage());
                    else if (f = f.Wc)
                        if (g = Fy(f), 0 === g || 1 === g)
                            if (g = A(f, 2), 0 <= c && g && g.length > c)
                                Hy(12, e);
                            else {
                                var h = Rj;
                                g = Le(b, h, 2);
                                f = f ? f : new h();
                                h = A(b, 2);
                                g.push(f);
                                h.push(Me(f));
                                Hy(19, e);
                            }
                if (!Le(b, Rj, 2).length)
                    return null;
                if (Dx(Sr))
                    return a = new de(), Tj(b, a), b = ge(a), $d(b, 2);
                a = new de();
                Tj(b, a);
                return $d(ge(a), void 0);
            }
            ;
            var Jy = function () {
                this.g = [];
                this.h = [];
                this.l = [];
            };
            var Ky = function () {
                var a = this;
                this.promise = new Promise(function (b, c) {
                    a.resolve = b;
                    a.reject = c;
                });
            };
            var Ly = function (a) {
                a = Error.call(this, a);
                this.message = a.message;
                'stack' in a && (this.stack = a.stack);
                Object.setPrototypeOf(this, Ly.prototype);
                this.name = 'InputError';
            };
            t(Ly, Error);
            var My = function () {
                    var a = this;
                    this.C = this.l = null;
                    this.o = -1;
                    this.h = new Ky();
                    this.g = !1;
                    this.h.promise.then(function () {
                        -1 !== a.o && (a.C = ug() - a.o);
                    }, function () {
                    });
                }, Ny = function () {
                    My.apply(this, arguments);
                };
            t(Ny, My);
            var Oy = function (a, b) {
                    a.g || (a.g = !0, a.l = b, a.h.resolve(b));
                }, Py = function (a) {
                    a.g || (a.g = !0, a.l = null, a.h.resolve(null));
                };
            da.Object.defineProperties(Ny.prototype, {
                promise: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.h.promise;
                    }
                },
                B: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.g;
                    }
                }
            });
            var Qy = function (a) {
                My.call(this);
                this.B = a;
            };
            t(Qy, My);
            da.Object.defineProperties(Qy.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.B.l;
                    }
                },
                error: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.B.A;
                    }
                }
            });
            function Ry(a, b) {
                return Za(this, function d() {
                    var e, f, g;
                    return za(d, function (h) {
                        if (1 == h.g)
                            return e = 0 < b ? a.filter(function (k) {
                                return !k.nd;
                            }) : a, sa(h, Promise.all(e.map(function (k) {
                                return k.td.promise;
                            })), 2);
                        if (3 != h.g) {
                            if (a.length === e.length)
                                return h.return(0);
                            f = a.filter(function (k) {
                                return k.nd;
                            });
                            g = ug();
                            return sa(h, Promise.race([
                                Promise.all(f.map(function (k) {
                                    return k.td.promise;
                                })),
                                new Promise(function (k) {
                                    return void setTimeout(k, b);
                                })
                            ]), 3);
                        }
                        return h.return(ug() - g);
                    });
                });
            }
            var Sy = function (a, b) {
                b = void 0 === b ? 0 : b;
                K.call(this);
                var c = this;
                this.id = a;
                this.D = b;
                this.g = new Jy();
                this.C = !1;
                this.H = -1;
                ni(this, function () {
                    var d = c.g;
                    d.g.length = 0;
                    d.l.length = 0;
                    d.h.length = 0;
                });
            };
            t(Sy, K);
            Sy.prototype.start = function () {
                return Za(this, function b() {
                    var c = this, d, e, f, g;
                    return za(b, function (h) {
                        switch (h.g) {
                        case 1:
                            if (c.C)
                                return h.return();
                            c.C = !0;
                            h.h = 2;
                            return sa(h, Ry(c.g.h, c.D), 4);
                        case 4:
                            c.H = h.A;
                            if (c.Ra()) {
                                h.g = 5;
                                break;
                            }
                            for (var k = 0, n = q(c.g.l), m = n.next(); !m.done; m = n.next()) {
                                if (null === m.value.B.l)
                                    throw Error('missing input: ' + c.id + '/' + k);
                                ++k;
                            }
                            d = q(c.g.g);
                            for (e = d.next(); !e.done; e = d.next())
                                f = e.value, f.o = ug();
                            return sa(h, c.A(), 5);
                        case 5:
                            h.g = 0;
                            h.h = 0;
                            break;
                        case 2:
                            g = ta(h);
                            if (c.Ra())
                                return h.return();
                            if (!(g instanceof Ly) && g instanceof Error && (c.K(c.id, g), c.g.g.length))
                                for (k = new Ly(g.message), n = q(c.g.g), m = n.next(); !m.done; m = n.next())
                                    if (m = m.value, !m.B) {
                                        var v = k;
                                        m.g = !0;
                                        m.A = v;
                                        m.h.reject(v);
                                    }
                            h.g = 0;
                        }
                    });
                });
            };
            var Ty = function (a) {
                    var b = new Ny();
                    a.g.g.push(b);
                    return b;
                }, Uy = function (a, b) {
                    a.g.h.push({
                        nd: !1,
                        td: b
                    });
                    return new Qy(b);
                };
            var Vy = function (a, b) {
                Sy.call(this, a);
                this.id = a;
                this.K = b;
            };
            t(Vy, Sy);
            var Wy = function (a, b, c, d) {
                Vy.call(this, 655, d);
                this.Ea = a;
                this.B = b;
                this.F = c;
                this.l = Ty(this);
                this.o = Ty(this);
                this.h = Ex(Nr);
            };
            t(Wy, Vy);
            Wy.prototype.A = function () {
                var a, b = Ey().get(this.Ea, this.F);
                if (b.getError())
                    Hy(b.getError(), this.Ea, b.getErrorMessage()), Py(this.l), Py(this.o);
                else {
                    var c = Date.now();
                    if (b = b.Wc)
                        if (this.h && (null == A(b, 8) && (Hy(33, this.Ea), Vj(b, this.h)), null == A(b, 7) && (Hy(34, this.Ea), He(b, 7, Math.round(Date.now() / 1000 / 60)))), null != A(b, 3) || Hy(35, this.Ea), this.h) {
                            var d = Ce(b, 8), e = null !== (a = A(b, 7)) && void 0 !== a ? a : c;
                            d < this.h && Vj(b, Math.min(d + Number((this.h * (c / 1000 / 60 - e) / 60).toFixed(3)), this.h));
                            1 > Ce(b, 8) ? (c = {}, Hy(22, this.Ea, null, (c.t = String(e), c.cr = String(d), c.cs = String(Fy(b)), c)), Py(this.l), Py(this.o)) : (Oy(this.l, this.B), Oy(this.o, b));
                        } else
                            Oy(this.l, this.B), Oy(this.o, b);
                    else
                        Oy(this.l, this.B), b = this.o, d = new Rj(), d = He(d, 1, this.Ea), d = Vj(d, this.h), c = He(d, 3, c), Oy(b, c);
                }
            };
            function Xy(a, b, c, d) {
                Hy(18, a);
                try {
                    var e = ug();
                    Ex(Nr) && (Vj(b, Number((Ce(b, 8) - 1).toFixed(3))), He(b, 7, Math.round(e / 1000 / 60)));
                    return c().then(function (f) {
                        Hy(29, a, null, { delta: String(ug() - e) });
                        He(b, 3, Date.now());
                        Yy(a, b, f, d);
                        return b;
                    }).catch(function (f) {
                        Yy(a, b, A(b, 2), d);
                        Hy(28, a, Zy(f));
                        return b;
                    });
                } catch (f) {
                    return Yy(a, b, A(b, 2), d), Hy(1, a, Zy(f)), Promise.resolve(b);
                }
            }
            var Yy = function (a, b, c, d) {
                    'string' !== typeof c ? Hy(21, a) : c || Hy(20, a);
                    He(b, 2, c);
                    b = Ey().set(b, d);
                    b.getErrorMessage() ? Hy(b.info, a, b.getErrorMessage()) : Hy(27, a);
                }, Zy = function (a) {
                    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
                };
            var $y = function (a, b, c, d) {
                Vy.call(this, 658, d);
                this.F = c;
                this.h = Ty(this);
                this.l = Ty(this);
                this.o = Ty(this);
                this.B = Uy(this, a);
                this.L = Uy(this, b);
            };
            t($y, Vy);
            $y.prototype.A = function () {
                var a = this;
                if (this.B.value) {
                    var b = function (g) {
                            Oy(a.h, {
                                id: A(g, 1),
                                te: A(g, 2)
                            });
                        }, c = this.B.value, d = this.L.value, e = A(d, 1), f = Fy(d);
                    switch (f) {
                    case 0:
                        Hy(24, e);
                        break;
                    case 1:
                        Hy(25, e);
                        break;
                    case 2:
                        Hy(26, e);
                        break;
                    case 3:
                        Hy(9, e);
                        break;
                    case 4:
                        Hy(23, e);
                    }
                    switch (f) {
                    case 0:
                        b(d);
                        az(this);
                        break;
                    case 1:
                        b(d);
                        Oy(this.l, c);
                        Oy(this.o, d);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        He(d, 2, null), Xy(e, d, c, this.F).then(b), az(this);
                    }
                } else
                    Py(this.h), az(this);
            };
            var az = function (a) {
                Py(a.l);
                Py(a.o);
            };
            function bz() {
                var a = window;
                var b = void 0 === b ? function () {
                } : b;
                return new Promise(function (c) {
                    var d = function () {
                        c(b());
                        Xe(a, 'load', d);
                    };
                    We(a, 'load', d);
                });
            }
            ;
            var cz = function (a, b, c, d) {
                Vy.call(this, 662, d);
                this.o = c;
                this.h = Uy(this, a);
                this.l = Uy(this, b);
            };
            t(cz, Vy);
            cz.prototype.A = function () {
                var a = this;
                this.l.value && this.h.value && bz().then(function () {
                    var b = a.l.value, c = A(b, 1);
                    Xy(c, b, a.h.value, a.o);
                });
            };
            var dz = function () {
                K.apply(this, arguments);
                this.g = [];
            };
            t(dz, K);
            dz.prototype.N = function () {
                K.prototype.N.call(this);
                this.g.length = 0;
            };
            function ez(a, b, c, d) {
                return Za(this, function f() {
                    var g, h, k, n, m;
                    return za(f, function (v) {
                        if (1 == v.g) {
                            g = new Wy(a, b, c, d);
                            h = new $y(g.l, g.o, c, d);
                            k = new cz(h.l, h.o, c, d);
                            n = new dz();
                            for (var r = q([
                                        g,
                                        h,
                                        k
                                    ]), w = r.next(); !w.done; w = r.next())
                                w = w.value, oi(n, w), n.g.push(w);
                            if (n.g.length)
                                for (r = q(n.g), w = r.next(); !w.done; w = r.next())
                                    w.value.start();
                            return sa(v, h.h.promise, 2);
                        }
                        m = v.A;
                        return v.return(m ? m : {
                            id: a,
                            te: null
                        });
                    });
                });
            }
            ;
            function fz(a, b, c, d) {
                var e, f = null !== (e = a.encryptedSignalSource) && void 0 !== e ? e : a.encryptedSignalSource = {};
                return c ? Ef() === Ff() || Dx(Mr) ? b.map(function (g) {
                    var h = g.Ea;
                    if ((g = Object.getOwnPropertyDescriptor(f, h)) && !g.configurable)
                        return Promise.resolve(null);
                    var k = !1;
                    return new Promise(function (n) {
                        var m = f[h];
                        Object.defineProperty(f, h, {
                            set: function (v) {
                                if (!k) {
                                    k = !0;
                                    if ('function' === typeof v) {
                                        var r = {};
                                        Hy(17, h, null, (r.api = '0', r));
                                        v = ez(h, v, c, d);
                                    } else
                                        Hy(14, h), v = Promise.resolve(null);
                                    v.then(n);
                                }
                            }
                        });
                        m && (f[h] = m);
                    });
                }) : (Hy(16, ''), []) : (Hy(15, ''), []);
            }
            ;
            function gz(a) {
                const $___old_6de0f40fbcd83aa6 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_6de0f40fbcd83aa6)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_e2197425770dc62e.localStorage));
                    return function () {
                        if (!a || Sx(a))
                            return null;
                        try {
                            return window.localStorage;
                        } catch (b) {
                            return null;
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_6de0f40fbcd83aa6)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_6de0f40fbcd83aa6));
                }
            }
            function hz(a, b) {
                return (b = gz(b)) && 0 != a.length ? fz(u.googletag || (u.googletag = {}), a, b, function () {
                }) : null;
            }
            ;
            var iz = function (a) {
                try {
                    var b = new P(a);
                    if (!b.g.includes('.cdn.ampproject.org'))
                        return null;
                    var c = b.h.split('/').slice(1);
                    if ('s' == c[1] && 3 > c.length)
                        return null;
                    if (2 > c.length)
                        return a;
                    var d = 's' == c[1];
                    c = d ? c.slice(2) : c.slice(1);
                    var e = decodeURIComponent(c[0]) + '/';
                    return d ? 'https://' + e + c.slice(1).join('/') : 'http://' + e + c.slice(1).join('/');
                } catch (f) {
                    return null;
                }
            };
            var jz = function () {
                L.call(this);
                this.F = !1;
                this.g = null;
                this.A = this.D = this.L = !1;
                this.h = 0;
                this.o = [];
                this.C = !1;
                this.R = this.M = Infinity;
                this.l = 0;
                this.K = new au(this);
                oi(this, this.K);
                this.H = {};
            };
            t(jz, L);
            var lz = function (a, b) {
                    null == b || a.F || (a.g = b, kz(a), a.F = !0);
                }, nz = function (a) {
                    null != a.g && a.F && (mz(a), a.F = !1, a.D = !1, a.A = !1, a.h = 0, a.o = [], a.C = !1);
                }, kz = function (a) {
                    mz(a);
                    !(a.g instanceof L) && 'ontouchstart' in document.documentElement && Gd ? (a.H = {
                        touchstart: function (b) {
                            a.D = !0;
                            a.h = b.touches.length;
                            a.l && (window.clearTimeout(a.l), a.l = 0, a.L = !0);
                            a.C = oz(a, b.touches) || 1 != b.touches.length;
                            a.C ? (a.M = Infinity, a.R = Infinity) : (a.M = b.touches[0].clientX, a.R = b.touches[0].clientY);
                            b = b.touches;
                            a.o = [];
                            for (var c = 0; c < b.length; c++)
                                a.o.push(b[c].identifier);
                        },
                        touchmove: function (b) {
                            a.h = b.touches.length;
                            if (!Wt(8) || Math.pow(b.changedTouches[0].clientX - a.M, 2) + Math.pow(b.changedTouches[0].clientY - a.R, 2) > Math.pow(5, 2))
                                a.A = !0;
                        },
                        touchend: function (b) {
                            return void pz(a, b);
                        }
                    }, Eb(a.H, function (b, c) {
                        a.g.addEventListener(c, b, !1);
                    })) : a.K.O(a.g, 'click', a.T);
                }, mz = function (a) {
                    a.K.Ua(a.g, 'click', a.T);
                    Eb(a.H, function (b, c) {
                        this.g.removeEventListener(c, b, !1);
                    }, a);
                    a.H = {};
                }, pz = function (a, b) {
                    !a.D || 1 != a.h || a.A || a.L || a.C || !oz(a, b.changedTouches) || (a.l = window.setTimeout(function () {
                        return void qz(a);
                    }, 300));
                    a.h = b.touches.length;
                    0 == a.h && (a.D = !1, a.A = !1, a.o = []);
                    a.L = !1;
                };
            jz.prototype.T = function () {
                qz(this);
            };
            var oz = function (a, b) {
                    for (var c = 0; c < b.length; c++)
                        if (a.o.includes(b[c].identifier))
                            return !0;
                    return !1;
                }, qz = function (a) {
                    a.l = 0;
                    a.dispatchEvent(new pi('click'));
                };
            jz.prototype.N = function () {
                nz(this);
                L.prototype.N.call(this);
            };
            var rz = function (a, b, c) {
                this.h = c;
                0 == b.length && (b = [[]]);
                this.g = b.map(function (d) {
                    d = a.concat(d);
                    for (var e = [], f = 0, g = 0; f < d.length;) {
                        var h = d[f++];
                        if (128 > h)
                            e[g++] = String.fromCharCode(h);
                        else if (191 < h && 224 > h) {
                            var k = d[f++];
                            e[g++] = String.fromCharCode((h & 31) << 6 | k & 63);
                        } else if (239 < h && 365 > h) {
                            k = d[f++];
                            var n = d[f++], m = d[f++];
                            h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                            e[g++] = String.fromCharCode(55296 + (h >> 10));
                            e[g++] = String.fromCharCode(56320 + (h & 1023));
                        } else
                            k = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | n & 63);
                    }
                    return new RegExp(e.join(''));
                });
            };
            rz.prototype.match = function (a) {
                var b = this;
                return this.g.some(function (c) {
                    c = a.match(c);
                    return null == c ? !1 : !b.h || 1 <= c.length && '3.473.0' == c[1] || 2 <= c.length && '3.473.0' == c[2] ? !0 : !1;
                });
            };
            var sz = [
                    104,
                    116,
                    116,
                    112,
                    115,
                    63,
                    58,
                    47,
                    47,
                    105,
                    109,
                    97,
                    115,
                    100,
                    107,
                    92,
                    46,
                    103,
                    111,
                    111,
                    103,
                    108,
                    101,
                    97,
                    112,
                    105,
                    115,
                    92,
                    46,
                    99,
                    111,
                    109,
                    47,
                    106,
                    115,
                    47,
                    40,
                    115,
                    100,
                    107,
                    108,
                    111,
                    97,
                    100,
                    101,
                    114,
                    124,
                    99,
                    111,
                    114,
                    101,
                    41,
                    47
                ], tz = [
                    104,
                    116,
                    116,
                    112,
                    115,
                    63,
                    58,
                    47,
                    47,
                    115,
                    48,
                    92,
                    46,
                    50,
                    109,
                    100,
                    110,
                    92,
                    46,
                    110,
                    101,
                    116,
                    47,
                    105,
                    110,
                    115,
                    116,
                    114,
                    101,
                    97,
                    109,
                    47,
                    104,
                    116,
                    109,
                    108,
                    53,
                    47
                ], uz = [
                    104,
                    116,
                    116,
                    112,
                    115,
                    63,
                    58,
                    47,
                    47,
                    105,
                    109,
                    97,
                    115,
                    100,
                    107,
                    92,
                    46,
                    103,
                    111,
                    111,
                    103,
                    108,
                    101,
                    97,
                    112,
                    105,
                    115,
                    92,
                    46,
                    99,
                    111,
                    109,
                    47,
                    112,
                    114,
                    101,
                    114,
                    101,
                    108,
                    101,
                    97,
                    115,
                    101,
                    47,
                    106,
                    115,
                    47,
                    91,
                    48,
                    45,
                    57,
                    93,
                    43,
                    92,
                    46,
                    91,
                    48,
                    45,
                    57,
                    92,
                    46,
                    93,
                    43,
                    47
                ], vz = [
                    [
                        105,
                        109,
                        97,
                        51,
                        92,
                        46,
                        106,
                        115
                    ],
                    [
                        105,
                        109,
                        97,
                        51,
                        95,
                        100,
                        101,
                        98,
                        117,
                        103,
                        92,
                        46,
                        106,
                        115
                    ]
                ], wz = [
                    [
                        98,
                        114,
                        105,
                        100,
                        103,
                        101,
                        40,
                        91,
                        48,
                        45,
                        57,
                        93,
                        43,
                        92,
                        46,
                        91,
                        48,
                        45,
                        57,
                        92,
                        46,
                        93,
                        43,
                        41,
                        40,
                        95,
                        40,
                        91,
                        97,
                        45,
                        122,
                        48,
                        45,
                        57,
                        93,
                        41,
                        123,
                        50,
                        44,
                        51,
                        125,
                        41,
                        123,
                        48,
                        44,
                        50,
                        125,
                        92,
                        46,
                        104,
                        116,
                        109,
                        108
                    ],
                    [
                        98,
                        114,
                        105,
                        100,
                        103,
                        101,
                        40,
                        91,
                        48,
                        45,
                        57,
                        93,
                        43,
                        92,
                        46,
                        91,
                        48,
                        45,
                        57,
                        92,
                        46,
                        93,
                        43,
                        41,
                        95,
                        100,
                        101,
                        98,
                        117,
                        103,
                        40,
                        95,
                        40,
                        91,
                        97,
                        45,
                        122,
                        48,
                        45,
                        57,
                        93,
                        41,
                        123,
                        50,
                        44,
                        51,
                        125,
                        41,
                        123,
                        48,
                        44,
                        50,
                        125,
                        92,
                        46,
                        104,
                        116,
                        109,
                        108
                    ],
                    [
                        98,
                        114,
                        105,
                        100,
                        103,
                        101,
                        40,
                        95,
                        40,
                        91,
                        97,
                        45,
                        122,
                        48,
                        45,
                        57,
                        93,
                        41,
                        123,
                        50,
                        44,
                        51,
                        125,
                        41,
                        123,
                        48,
                        44,
                        50,
                        125,
                        92,
                        46,
                        104,
                        116,
                        109,
                        108
                    ]
                ], xz = [
                    [
                        111,
                        117,
                        116,
                        115,
                        116,
                        114,
                        101,
                        97,
                        109,
                        92,
                        46,
                        106,
                        115
                    ],
                    [
                        111,
                        117,
                        116,
                        115,
                        116,
                        114,
                        101,
                        97,
                        109,
                        95,
                        100,
                        101,
                        98,
                        117,
                        103,
                        92,
                        46,
                        106,
                        115
                    ]
                ], yz = new rz(sz, vz, !1), zz = new rz(sz, wz, !0), Az = new rz(tz, vz, !1), Bz = new rz(tz, wz, !0), Cz = new rz(uz, vz, !1), Dz = new rz([
                    104,
                    116,
                    116,
                    112,
                    115,
                    63,
                    58,
                    47,
                    47,
                    40,
                    112,
                    97,
                    103,
                    101,
                    97,
                    100,
                    50,
                    124,
                    116,
                    112,
                    99,
                    41,
                    92,
                    46,
                    103,
                    111,
                    111,
                    103,
                    108,
                    101,
                    115,
                    121,
                    110,
                    100,
                    105,
                    99,
                    97,
                    116,
                    105,
                    111,
                    110,
                    92,
                    46,
                    99,
                    111,
                    109,
                    47,
                    112,
                    97,
                    103,
                    101,
                    97,
                    100,
                    47,
                    40,
                    103,
                    97,
                    100,
                    103,
                    101,
                    116,
                    115,
                    124,
                    106,
                    115,
                    41,
                    47
                ], [], !1), Ez = new rz(sz, [
                    [
                        100,
                        97,
                        105,
                        95,
                        105,
                        102,
                        114,
                        97,
                        109,
                        101,
                        40,
                        91,
                        48,
                        45,
                        57,
                        93,
                        43,
                        92,
                        46,
                        91,
                        48,
                        45,
                        57,
                        92,
                        46,
                        93,
                        43,
                        41,
                        40,
                        95,
                        40,
                        91,
                        97,
                        45,
                        122,
                        48,
                        45,
                        57,
                        93,
                        41,
                        123,
                        50,
                        44,
                        51,
                        125,
                        41,
                        123,
                        48,
                        44,
                        50,
                        125,
                        92,
                        46,
                        104,
                        116,
                        109,
                        108
                    ],
                    [
                        100,
                        97,
                        105,
                        95,
                        105,
                        102,
                        114,
                        97,
                        109,
                        101,
                        40,
                        91,
                        48,
                        45,
                        57,
                        93,
                        43,
                        92,
                        46,
                        91,
                        48,
                        45,
                        57,
                        92,
                        46,
                        93,
                        43,
                        41,
                        95,
                        100,
                        101,
                        98,
                        117,
                        103,
                        40,
                        95,
                        40,
                        91,
                        97,
                        45,
                        122,
                        48,
                        45,
                        57,
                        93,
                        41,
                        123,
                        50,
                        44,
                        51,
                        125,
                        41,
                        123,
                        48,
                        44,
                        50,
                        125,
                        92,
                        46,
                        104,
                        116,
                        109,
                        108
                    ],
                    [
                        100,
                        97,
                        105,
                        95,
                        105,
                        102,
                        114,
                        97,
                        109,
                        101,
                        40,
                        95,
                        40,
                        91,
                        97,
                        45,
                        122,
                        48,
                        45,
                        57,
                        93,
                        41,
                        123,
                        50,
                        44,
                        51,
                        125,
                        41,
                        123,
                        48,
                        44,
                        50,
                        125,
                        92,
                        46,
                        104,
                        116,
                        109,
                        108
                    ]
                ], !0), Fz = new rz(sz, xz, !1), Gz = new rz(uz, xz, !1), Hb = {
                    cg: yz,
                    ag: zz,
                    wg: Az,
                    vg: Bz,
                    dg: Cz,
                    Zg: Dz,
                    bg: Ez,
                    Gg: Fz,
                    Hg: Gz
                };
            function Hz(a) {
                for (var b = null, c = 0; c < a.length; c++)
                    if (b = a[c], Gb(function (d) {
                            return d.match(b.src);
                        }))
                        return b;
                return null;
            }
            ;
            var Iz = function () {
                    var a = D(), b = document;
                    return new P(a.parent == a ? a.location.href : b.referrer);
                }, Jz = function (a, b) {
                    ct(a, 'url', '');
                    try {
                        var c = 2083 - a.toString().length - 1;
                        if (0 >= c)
                            return a.toString();
                        for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;)
                            d = b.slice(0, f--), e = encodeURIComponent(d);
                        ct(a, 'url', d);
                    } catch (g) {
                    }
                    return a.toString();
                };
            var Kz = function () {
                this.g = 0.01 > Math.random();
                this.h = Math.floor(4503599627370496 * Math.random());
            };
            Kz.prototype.report = function (a, b, c) {
                b = void 0 === b ? {} : b;
                if (null == u.G_testRunner && (this.g || (void 0 === c ? 0 : c))) {
                    b.lid = a;
                    b.sdkv = Xx();
                    a = rh().sort().join(',');
                    hc(bd(a)) || (b.e = a);
                    b = Lz(this, b);
                    var d = new P('http://pagead2.googlesyndication.com/pagead/gen_204');
                    Eb(b, function (e, f) {
                        ct(d, f, null == e ? '' : 'boolean' == typeof e ? e ? 't' : 'f' : '' + e);
                    }, this);
                    b = Iz();
                    Qs(d, b.o);
                    b = d.toString();
                    a = d.l.get('url');
                    null != a && Ic() && 2083 < b.length && (b = Jz(d, a));
                    py(b);
                }
            };
            var Lz = function (a, b) {
                    b.id = 'ima_html5';
                    var c = Iz();
                    b.c = a.h;
                    b.domain = c.g;
                    return b;
                }, Mz = function () {
                    return F(Kz);
                };
            var Nz = function (a, b, c, d, e) {
                e = void 0 === e ? '' : e;
                pi.call(this, a);
                this.ia = b;
                this.ma = c;
                this.Mb = d;
                this.Gd = e;
            };
            t(Nz, pi);
            Nz.prototype.toString = function () {
                return '';
            };
            var Oz = function (a) {
                this.g = a;
            };
            l = Oz.prototype;
            l.getTotalAds = function () {
                return this.g.totalAds;
            };
            l.getMaxDuration = function () {
                return this.g.maxDuration;
            };
            l.getAdPosition = function () {
                return this.g.adPosition;
            };
            l.getPodIndex = function () {
                return this.g.podIndex;
            };
            l.getTimeOffset = function () {
                return this.g.timeOffset;
            };
            l.getIsBumper = function () {
                return this.g.isBumper;
            };
            Oz.prototype.getIsBumper = Oz.prototype.getIsBumper;
            Oz.prototype.getTimeOffset = Oz.prototype.getTimeOffset;
            Oz.prototype.getPodIndex = Oz.prototype.getPodIndex;
            Oz.prototype.getAdPosition = Oz.prototype.getAdPosition;
            Oz.prototype.getMaxDuration = Oz.prototype.getMaxDuration;
            Oz.prototype.getTotalAds = Oz.prototype.getTotalAds;
            var Pz = function (a) {
                this.g = a;
            };
            l = Pz.prototype;
            l.getContent = function () {
                return this.g.content;
            };
            l.getContentType = function () {
                return this.g.contentType;
            };
            l.getWidth = function () {
                return this.g.size.width;
            };
            l.getHeight = function () {
                return this.g.size.height;
            };
            l.xd = function () {
                return this.g.adSlotId;
            };
            var ly = function (a) {
                return (a = a.g.backupCompanions) ? a.map(function (b) {
                    return new Pz(b);
                }) : [];
            };
            Pz.prototype.getAdSlotId = Pz.prototype.xd;
            Pz.prototype.getHeight = Pz.prototype.getHeight;
            Pz.prototype.getWidth = Pz.prototype.getWidth;
            Pz.prototype.getContentType = Pz.prototype.getContentType;
            Pz.prototype.getContent = Pz.prototype.getContent;
            var Qz = function (a, b) {
                this.h = a;
                this.g = b;
            };
            Qz.prototype.getAdIdValue = function () {
                return this.h;
            };
            Qz.prototype.getAdIdRegistry = function () {
                return this.g;
            };
            Qz.prototype.getAdIdRegistry = Qz.prototype.getAdIdRegistry;
            Qz.prototype.getAdIdValue = Qz.prototype.getAdIdValue;
            var Y = function (a) {
                this.g = a;
            };
            Y.prototype.getAdId = function () {
                return this.g.adId;
            };
            Y.prototype.getCreativeAdId = function () {
                return this.g.creativeAdId;
            };
            Y.prototype.getCreativeId = function () {
                return this.g.creativeId;
            };
            var Rz = function (a) {
                return a.g.adQueryId;
            };
            l = Y.prototype;
            l.getAdSystem = function () {
                return this.g.adSystem;
            };
            l.getAdvertiserName = function () {
                return this.g.advertiserName;
            };
            l.getApiFramework = function () {
                return this.g.apiFramework;
            };
            l.getWrapperAdIds = function () {
                return this.g.adWrapperIds;
            };
            l.getWrapperCreativeIds = function () {
                return this.g.adWrapperCreativeIds;
            };
            l.getWrapperAdSystems = function () {
                return this.g.adWrapperSystems;
            };
            l.isLinear = function () {
                return this.g.linear;
            };
            l.isSkippable = function () {
                return this.g.skippable;
            };
            l.getContentType = function () {
                return this.g.contentType;
            };
            l.Be = function () {
                return this.g.description;
            };
            l.De = function () {
                return this.g.title;
            };
            l.getDuration = function () {
                return this.g.duration;
            };
            l.getVastMediaWidth = function () {
                return this.g.vastMediaWidth;
            };
            l.getVastMediaHeight = function () {
                return this.g.vastMediaHeight;
            };
            l.getWidth = function () {
                return this.g.width;
            };
            l.getHeight = function () {
                return this.g.height;
            };
            l.getUiElements = function () {
                return this.g.uiElements;
            };
            l.getMinSuggestedDuration = function () {
                return this.g.minSuggestedDuration;
            };
            l.getAdPodInfo = function () {
                return new Oz(this.g.adPodInfo);
            };
            l.getCompanionAds = function (a, b, c) {
                if (!this.g.companions)
                    return [];
                var d = this.g.companions.map(function (e) {
                    return new Pz(e);
                });
                return ky(new hy(new bf(a, b), c), d);
            };
            l.getTraffickingParameters = function () {
                return ju(bd(this.g.traffickingParameters));
            };
            l.getTraffickingParametersString = function () {
                return this.g.traffickingParameters;
            };
            l.getVastMediaBitrate = function () {
                return this.g.vastMediaBitrate;
            };
            l.getMediaUrl = function () {
                return this.g.mediaUrl;
            };
            l.getSurveyUrl = function () {
                return this.g.surveyUrl;
            };
            l.getDealId = function () {
                return this.g.dealId;
            };
            l.Ee = function () {
                return (this.g.universalAdIds || []).map(function (a) {
                    return new Qz(a.adIdValue, a.adIdRegistry);
                });
            };
            l.getUniversalAdIdValue = function () {
                return this.g.universalAdIdValue;
            };
            l.getUniversalAdIdRegistry = function () {
                return this.g.universalAdIdRegistry;
            };
            l.getSkipTimeOffset = function () {
                return this.g.skipTimeOffset;
            };
            l.isUiDisabled = function () {
                return this.g.disableUi;
            };
            Y.prototype.isUiDisabled = Y.prototype.isUiDisabled;
            Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
            Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
            Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
            Y.prototype.getUniversalAdIds = Y.prototype.Ee;
            Y.prototype.getDealId = Y.prototype.getDealId;
            Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
            Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
            Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
            Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
            Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
            Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
            Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
            Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
            Y.prototype.getUiElements = Y.prototype.getUiElements;
            Y.prototype.getHeight = Y.prototype.getHeight;
            Y.prototype.getWidth = Y.prototype.getWidth;
            Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
            Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
            Y.prototype.getDuration = Y.prototype.getDuration;
            Y.prototype.getTitle = Y.prototype.De;
            Y.prototype.getDescription = Y.prototype.Be;
            Y.prototype.getContentType = Y.prototype.getContentType;
            Y.prototype.isSkippable = Y.prototype.isSkippable;
            Y.prototype.isLinear = Y.prototype.isLinear;
            Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
            Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
            Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
            Y.prototype.getApiFramework = Y.prototype.getApiFramework;
            Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
            Y.prototype.getAdSystem = Y.prototype.getAdSystem;
            Y.prototype.getCreativeId = Y.prototype.getCreativeId;
            Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
            Y.prototype.getAdId = Y.prototype.getAdId;
            var Sz = null, Tz = function () {
                    L.call(this);
                    this.g = null;
                    this.D = new au(this);
                    oi(this, this.D);
                    this.h = new Map();
                    this.o = new Map();
                    this.l = this.A = !1;
                    this.C = null;
                }, Uz;
            t(Tz, L);
            var Vz = function () {
                    null == Sz && (Sz = new Tz());
                    return Sz;
                }, Gq = function (a, b, c) {
                    var d = {};
                    d.queryId = b;
                    d.viewabilityData = c;
                    a.g && oy(a.g, 'activityMonitor', 'viewabilityMeasurement', d);
                };
            Tz.prototype.destroy = function () {
                this.D.Ua(this.g, 'activityMonitor', this.F);
                this.l = !1;
                this.h.clear();
                this === Uz && (Uz = null);
            };
            Tz.prototype.N = function () {
                this.destroy();
                L.prototype.N.call(this);
            };
            Tz.prototype.init = function (a) {
                if (!this.l) {
                    if (this.g = a || null)
                        this.D.O(this.g, 'activityMonitor', this.F), Wz(this);
                    if (!(u.ima && u.ima.video && u.ima.video.client && u.ima.video.client.tagged)) {
                        x('ima.video.client.sdkTag', !0, void 0);
                        var b = u.document;
                        a = mf(document, 'SCRIPT');
                        var c = fc(ac(bc('https://s0.2mdn.net/instream/video/client.js')));
                        a.src = ec(c);
                        Re(a);
                        a.async = !0;
                        a.type = 'text/javascript';
                        b = b.getElementsByTagName('script')[0];
                        b.parentNode.insertBefore(a, b);
                    }
                    Uk();
                    F(wq).K = W.g;
                    this.A = !0;
                    F(wq).l = !0;
                    this.C = null;
                    a = F(wq);
                    b = 'h' == Wp(a) || 'b' == Wp(a);
                    c = !(N(), !1);
                    b && c && (a.J = !0, a.F = new fo());
                    this.l = !0;
                }
            };
            var Yz = function (a) {
                    if (null == a)
                        return !1;
                    if ((Dd || Fd) && null != a.webkitDisplayingFullscreen)
                        return a.webkitDisplayingFullscreen;
                    a = Xz(a);
                    var b = window.screen.availHeight || window.screen.height;
                    return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height;
                }, Xz = function (a) {
                    var b = {
                        left: a.offsetLeft,
                        top: a.offsetTop,
                        width: a.offsetWidth,
                        height: a.offsetHeight
                    };
                    try {
                        'function' === typeof a.getBoundingClientRect && rf(df(a), a) && (b = a.getBoundingClientRect());
                    } catch (c) {
                    }
                    return b;
                }, Zz = function (a, b, c, d, e) {
                    e = void 0 === e ? {} : e;
                    if (a.l) {
                        d && null == e.opt_osdId && (e.opt_osdId = d);
                        if (a.C)
                            return a.C(b, c, e);
                        if (a = d ? a.o.get(d) : W.l)
                            null == e.opt_fullscreen && (e.opt_fullscreen = Yz(a)), null == e.opt_adElement && (e.opt_adElement = a);
                        return qk.fb(469, Va(Jq, b, c, e), void 0) || {};
                    }
                    return {};
                }, $z = function (a, b) {
                    var c = String(Math.floor(1000000000 * Math.random()));
                    a.o.set(c, b);
                    if (nh(ei))
                        try {
                            Mj(function (d) {
                                if (a.g) {
                                    var e = {};
                                    e.engagementString = d;
                                    oy(a.g, 'activityMonitor', 'engagementData', e);
                                }
                            }, function () {
                                return b;
                            });
                        } catch (d) {
                        }
                    0 != W.g && Hq(F(wq), c, a);
                    return c;
                }, aA = function (a, b, c) {
                    if (c)
                        a.h.get(c) == b && a.h.delete(c);
                    else {
                        var d = [];
                        a.h.forEach(function (e, f) {
                            e == b && d.push(f);
                        });
                        d.forEach(a.h.delete, a.h);
                    }
                }, Cq = function (a, b) {
                    a = a.h.get(b);
                    return 'function' === typeof a ? a() : {};
                }, Wz = function (a) {
                    if ('function' === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
                        var b = {};
                        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                        oy(a.g, 'activityMonitor', 'pageSignals', b);
                    }
                };
            Tz.prototype.F = function (a) {
                var b = a.ma, c = b.queryId, d = {}, e = null;
                d.eventId = b.eventId;
                switch (a.ia) {
                case 'getPageSignals':
                    Wz(this);
                    break;
                case 'reportVastEvent':
                    e = b.vastEvent;
                    a = b.osdId;
                    var f = {};
                    f.opt_fullscreen = b.isFullscreen;
                    b.isOverlay && (f.opt_bounds = b.overlayBounds);
                    d.viewabilityData = Zz(this, e, c, a, f);
                    oy(this.g, 'activityMonitor', 'viewability', d);
                    break;
                case 'fetchAdTagUrl':
                    c = {}, c.eventId = b.eventId, a = b.osdId, Nb(b, 'isFullscreen') && (e = b.isFullscreen), Nb(b, 'loggingId') && (b = b.loggingId, c.loggingId = b, Mz().report(43, {
                        step: 'beforeLookup',
                        logid: b,
                        time: Date.now()
                    })), c.engagementString = bA(this, a, e), this.g && oy(this.g, 'activityMonitor', 'engagement', c);
                }
            };
            var bA = function (a, b, c) {
                var d = b ? a.o.get(b) : W.l;
                a = {};
                null != c && (a.fullscreen = c);
                c = '';
                try {
                    c = Lj(function () {
                        return d;
                    }, a);
                } catch (e) {
                    c = 'sdktle;' + Zc(e.name, 12) + ';' + Zc(e.message, 40);
                }
                return c;
            };
            x('ima.common.getVideoMetadata', function (a) {
                return Cq(Vz(), a);
            }, void 0);
            x('ima.common.triggerViewabilityMeasurementUpdate', function (a, b) {
                Gq(Vz(), a, b);
            }, void 0);
            var cA = wd ? fc(ac(bc('javascript:""'))) : fc(ac(bc('about:blank')));
            ec(cA);
            var dA = wd ? fc(ac(bc('javascript:""'))) : fc(ac(bc('javascript:undefined')));
            ec(dA);
            var eA = function (a, b, c) {
                b = void 0 === b ? null : b;
                c = void 0 === c ? null : c;
                pi.call(this, a);
                this.l = b;
                this.g = c;
            };
            t(eA, pi);
            eA.prototype.getAd = function () {
                return this.l;
            };
            eA.prototype.getAdData = function () {
                return this.g;
            };
            var fA = function () {
                    this.loadVideoTimeout = 8000;
                    this.autoAlign = !0;
                    this.bitrate = -1;
                    this.uiElements = null;
                    this.enablePreloading = this.disableClickThrough = !1;
                    this.mimeTypes = null;
                    this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
                    this.playAdsAfterTime = -1;
                    this.useVideoAdUi = !0;
                    this.disableUi = !1;
                }, gA = function (a, b) {
                    var c = {};
                    Object.assign(c, a);
                    b && (c.disableClickThrough = !0);
                    return c;
                };
            fA.prototype.append = function (a) {
                if (a) {
                    this.autoAlign = a.autoAlign || this.autoAlign;
                    var b = gd(a.bitrate);
                    'number' === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
                    this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
                    this.disableUi = a.disableUi || this.disableUi;
                    this.enablePreloading = a.enablePreloading || this.enablePreloading;
                    a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
                    b = gd(a.playAdsAfterTime);
                    'number' === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
                    this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
                    b = gd(a.loadVideoTimeout);
                    'number' === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
                    this.uiElements = a.uiElements || this.uiElements;
                    this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
                    this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
                    this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
                    this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
                }
            };
            x('module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE', -1, void 0);
            var hA = null, iA = function () {
                    L.call(this);
                    this.g = new ms();
                    this.h = null;
                    this.o = new Map();
                    this.l = new au(this);
                    oi(this, this.l);
                    this.A = new Map();
                    this.F = null;
                    this.D = -1;
                    N().l = !0;
                    by();
                };
            t(iA, L);
            var jA = function () {
                    null == hA && (hA = new iA());
                    return hA;
                }, kA = function (a, b) {
                    var c = {};
                    c.queryId = a;
                    c.viewabilityString = b;
                    jA().dispatchEvent(new eA('measurable_impression', null, c));
                }, lA = function (a, b) {
                    var c = {};
                    c.queryId = a;
                    c.viewabilityString = b;
                    jA().dispatchEvent(new eA('viewable_impression', null, c));
                }, mA = function (a, b, c) {
                    var d = {};
                    d.queryId = a;
                    d.viewabilityString = b;
                    d.eventName = c;
                    jA().dispatchEvent(new eA('externalActivityEvent', null, d));
                };
            iA.prototype.destroy = function () {
                this.l.Ua(this.h, 'activityMonitor', this.C);
                this.h = null;
            };
            iA.prototype.C = function (a) {
                var b = a.ma;
                switch (a.ia) {
                case 'appStateChanged':
                    F(wq);
                    b = b.appState;
                    a = O();
                    a.J != b && (a.J = b, (a = F(vo).g) && tm(a.g, !b));
                    break;
                case 'externalActivityEvent':
                    mA(b.queryId, b.viewabilityString, b.eventName);
                    break;
                case 'measurableImpression':
                    kA(b.queryId, b.viewabilityString);
                    break;
                case 'viewableImpression':
                    lA(b.queryId, b.viewabilityString);
                    break;
                case 'engagementData':
                    b = b.engagementString;
                    jA().F = b;
                    jA().D = Wa();
                    break;
                case 'viewability':
                    a = b.queryId;
                    var c = b.vastEvent;
                    this.o.get(a) && 'start' == c && this.o.get(a);
                    a = b.eventId;
                    clearTimeout(a);
                    if (c = this.g.get(a))
                        this.g.remove(a), c(b.viewabilityData);
                    break;
                case 'viewabilityMeasurement':
                    F(wq);
                    N();
                    break;
                case 'engagement':
                    a = b.eventId;
                    clearTimeout(a);
                    c = this.g.get(a);
                    if (Mz().g) {
                        var d = -1;
                        this.H && (d = Wa() - this.H);
                        var e = !1;
                        c || (e = !0);
                        Nb(b, 'loggingId') && Mz().report(43, {
                            step: 'receivedResponse',
                            time: Wa(),
                            timeout: e,
                            logid: b.loggingId,
                            timediff: d
                        });
                    }
                    c && (this.g.remove(a), c(b.engagementString));
                }
            };
            x('ima.bridge.getNativeViewability', function (a, b) {
                jA();
                b({});
            }, void 0);
            x('ima.bridge.getVideoMetadata', function (a) {
                return (a = jA().A.get(a)) ? a() : {};
            }, void 0);
            x('ima.bridge.triggerViewEvent', lA, void 0);
            x('ima.bridge.triggerMeasurableEvent', kA, void 0);
            x('ima.bridge.triggerExternalActivityEvent', mA, void 0);
            Object.entries({
                'application/dash+xml': 1,
                'application/x-javascript': 2,
                'application/x-mpegurl': 3,
                'application/javascript': 4,
                'audio/ogg': 5,
                'audio/mp4': 6,
                'audio/mpeg': 7,
                'audio/wav': 8,
                'text/javascript': 9,
                'video/m4v': 10,
                'video/ogg': 11,
                'video/x-flv': 12,
                'video/3gpp': 13,
                'video/mpt2': 14,
                'video/mp4': 15,
                'video/mpeg': 16,
                'video/quicktime': 17,
                'video/webm': 18
            });
            function nA(a, b) {
                return b instanceof RegExp ? '__REGEXP' + b.toString() : b;
            }
            function oA(a, b) {
                return b && 0 == b.toString().indexOf('__REGEXP') ? (a = b.split('__REGEXP')[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || '')) : b;
            }
            var pA = function (a, b) {
                ny.call(this, b);
                this.A = a;
                this.g = null;
                this.C = new au(this);
                this.C.O(D(), 'message', this.D);
            };
            t(pA, ny);
            var qA = function (a) {
                if (null == a || 'string' !== typeof a || 0 != a.lastIndexOf('ima://', 0))
                    return null;
                a = a.substr(6);
                try {
                    return JSON.parse(a, oA);
                } catch (b) {
                    return null;
                }
            };
            pA.prototype.sendMessage = function (a, b, c) {
                if (null != this.g && null != this.g.postMessage) {
                    var d = this.g, e = d.postMessage, f = {};
                    f.name = a;
                    f.type = b;
                    null != c && (f.data = c);
                    f.sid = this.h;
                    f.channel = this.A;
                    a = 'ima://' + ch(new ah(nA), f);
                    e.call(d, a, '*');
                }
                null != this.g && null == this.g.postMessage && Mz().report(11);
            };
            pA.prototype.N = function () {
                mi(this.C);
                this.g = null;
                ny.prototype.N.call(this);
            };
            pA.prototype.D = function (a) {
                a = a.g;
                var b = qA(a.data);
                if (rA(this, b)) {
                    if (null == this.g)
                        this.g = a.source, this.l || this.connect();
                    else if (this.g != a.source)
                        return;
                    rA(this, b) && this.dispatchEvent(new Nz(b.name, b.type, b.data || {}, b.sid, a.origin));
                }
            };
            var rA = function (a, b) {
                if (null == b)
                    return !1;
                var c = b.channel;
                if (null == c || c != a.A)
                    return !1;
                b = b.sid;
                return null == b || '*' != a.h && b != a.h ? !1 : !0;
            };
            var sA = fc(ac(bc('https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js')));
            var tA = {
                LOADED: 'loaded',
                uc: 'start',
                FIRST_QUARTILE: 'firstQuartile',
                MIDPOINT: 'midpoint',
                THIRD_QUARTILE: 'thirdQuartile',
                COMPLETE: 'complete',
                tc: 'pause',
                kd: 'resume',
                bd: 'bufferStart',
                $c: 'bufferFinish',
                SKIPPED: 'skipped',
                ne: 'volumeChange',
                Kg: 'playerStateChange',
                zf: 'adUserInteraction'
            };
            function uA(a, b) {
                if (!b)
                    throw Error('Value for ' + a + ' is undefined, null or blank.');
                if ('string' !== typeof b && !(b instanceof String))
                    throw Error('Value for ' + a + ' is not a string.');
                if ('' === b.trim())
                    throw Error('Value for ' + a + ' is empty string.');
            }
            function vA(a, b) {
                if (null == b)
                    throw Error('Value for ' + a + ' is undefined or null');
            }
            function wA(a, b) {
                if (null == b)
                    throw Error(a + ' must not be null or undefined.');
                if ('number' !== typeof b || isNaN(b))
                    throw Error('Value for ' + a + ' is not a number');
            }
            ;
            function xA(a, b) {
                return a && (a[b] || (a[b] = {}));
            }
            function yA(a, b) {
                var c;
                if (c = void 0 === c ? 'undefined' === typeof omidExports ? null : omidExports : c)
                    a = a.split('.'), a.slice(0, a.length - 1).reduce(xA, c)[a[a.length - 1]] = b;
            }
            ;
            function zA() {
                return /\d+\.\d+\.\d+(-.*)?/.test('1.3.20-google_20210603');
            }
            function AA() {
                for (var a = [
                            '1',
                            '3',
                            '20'
                        ], b = [
                            '1',
                            '0',
                            '3'
                        ], c = 0; 3 > c; c++) {
                    var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
                    if (d > e)
                        break;
                    else if (d < e)
                        return !1;
                }
                return !0;
            }
            ;
            var BA = function (a, b, c, d) {
                    this.h = a;
                    this.method = b;
                    this.version = c;
                    this.g = d;
                }, CA = function (a) {
                    return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && 'string' === typeof a.omid_message_guid && 'string' === typeof a.omid_message_method && 'string' === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args);
                }, DA = function (a) {
                    return new BA(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args);
                }, EA = function (a) {
                    var b = {};
                    b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
                    void 0 !== a.g && (b.omid_message_args = a.g);
                    return b;
                };
            var FA = function (a) {
                this.h = a;
            };
            function GA() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
                    var b = 16 * Math.random() | 0;
                    return 'y' === a ? (b & 3 | 8).toString(16) : b.toString(16);
                });
            }
            ;
            function HA(a) {
                for (var b = [], c = 0; c < arguments.length; ++c)
                    b[c - 0] = arguments[c];
                IA(function () {
                    throw new (Function.prototype.bind.apply(Error, [
                        null,
                        'Could not complete the test successfully - '
                    ].concat(fa(b))))();
                }, function () {
                    return console.error.apply(console, fa(b));
                });
            }
            function IA(a, b) {
                'undefined' !== typeof jasmine && jasmine ? a() : 'undefined' !== typeof console && console && console.error && b();
            }
            ;
            var JA = function (a) {
                try {
                    return a.frames ? !!a.frames.omid_v1_present : !1;
                } catch (b) {
                    return !1;
                }
            };
            var KA = function (a) {
                this.h = a;
                this.handleExportedMessage = KA.prototype.l.bind(this);
            };
            t(KA, FA);
            KA.prototype.sendMessage = function (a, b) {
                b = void 0 === b ? this.h : b;
                if (!b)
                    throw Error('Message destination must be defined at construction time or when sending the message.');
                b.handleExportedMessage(EA(a), this);
            };
            KA.prototype.l = function (a, b) {
                CA(a) && this.g && this.g(DA(a), b);
            };
            var LA = eval('this'), MA = function () {
                    if ('undefined' !== typeof omidGlobal && omidGlobal)
                        return omidGlobal;
                    if ('undefined' !== typeof global && global)
                        return global;
                    if ('undefined' !== typeof window && window)
                        return window;
                    if ('undefined' !== typeof LA && LA)
                        return LA;
                    throw Error('Could not determine global object context.');
                }();
            function NA(a) {
                return null != a && 'undefined' !== typeof a.top && null != a.top;
            }
            function OA(a) {
                if (a === MA)
                    return !1;
                try {
                    if ('undefined' === typeof a.location.hostname)
                        return !0;
                } catch (b) {
                    return !0;
                }
                return !1;
            }
            ;
            var PA = function (a, b) {
                this.h = b = void 0 === b ? MA : b;
                var c = this;
                a.addEventListener('message', function (d) {
                    if ('object' === typeof d.data) {
                        var e = d.data;
                        CA(e) && d.source && c.g && c.g(DA(e), d.source);
                    }
                });
            };
            t(PA, FA);
            PA.prototype.sendMessage = function (a, b) {
                b = void 0 === b ? this.h : b;
                if (!b)
                    throw Error('Message destination must be defined at construction time or when sending the message.');
                b.postMessage(EA(a), '*');
            };
            var QA = [
                'omid',
                'v1_SessionServiceCommunication'
            ];
            function RA(a) {
                return QA.reduce(function (b, c) {
                    return b && b[c];
                }, a);
            }
            ;
            yA('OmidSessionClient.Partner', function (a, b) {
                uA('Partner.name', a);
                uA('Partner.version', b);
                this.name = a;
                this.version = b;
            });
            var SA = function (a, b, c, d) {
                d = void 0 === d ? 'full' : d;
                uA('VerificationScriptResource.resourceUrl', a);
                this.l = a;
                this.o = b;
                this.h = c;
                this.g = d;
            };
            SA.prototype.toJSON = function () {
                return {
                    accessMode: this.g,
                    resourceUrl: this.l,
                    vendorKey: this.o,
                    verificationParameters: this.h
                };
            };
            yA('OmidSessionClient.VerificationScriptResource', SA);
            yA('OmidSessionClient.Context', function (a, b, c, d) {
                c = void 0 === c ? null : c;
                d = void 0 === d ? null : d;
                vA('Context.partner', a);
                this.g = a;
                this.B = b;
                this.l = c;
                this.h = d;
                this.o = !1;
            });
            var TA = { sessionError: 'reportError' }, UA = Object.keys(tA).map(function (a) {
                    return tA[a];
                }), VA = ['impressionOccurred'], WA = function () {
                    var a = void 0 === a ? MA : a;
                    this.g = a.omidSessionInterface;
                };
            WA.prototype.sendMessage = function (a, b, c) {
                'registerSessionObserver' == a && (c = [b]);
                TA[a] && (a = TA[a]);
                b = this.g;
                0 <= VA.indexOf(a) && (b = b.adEvents);
                0 <= UA.indexOf(a) && (b = b.mediaEvents);
                b = b[a];
                if (!b)
                    throw Error('Unrecognized method name: ' + a + '.');
                b.apply(null, fa(c));
            };
            var ZA = function (a, b, c) {
                    vA('AdSession.context', a);
                    this.g = a;
                    if (!b) {
                        var d;
                        'undefined' === typeof d && 'undefined' !== typeof window && window && (d = window);
                        d = NA(d) ? d : MA;
                        var e = void 0 === e ? JA : e;
                        a: {
                            b = q([
                                d,
                                NA(d) ? d.top : MA
                            ]);
                            for (var f = b.next(); !f.done; f = b.next()) {
                                b: {
                                    var g = d;
                                    f = f.value;
                                    var h = e;
                                    if (!OA(f))
                                        try {
                                            var k = RA(f);
                                            if (k) {
                                                var n = new KA(k);
                                                break b;
                                            }
                                        } catch (m) {
                                        }
                                    n = h(f) ? new PA(g, f) : null;
                                }
                                if (g = n) {
                                    b = g;
                                    break a;
                                }
                            }
                            b = null;
                        }
                    }
                    this.h = b;
                    this.B = c || new WA();
                    this.J = this.C = this.A = !1;
                    this.I = this.o = null;
                    this.l = {};
                    this.h && (this.h.g = this.Fe.bind(this));
                    this.xa('setClientInfo', '1.3.20-google_20210603', this.g.g.name, this.g.g.version);
                    XA(this, a.B);
                    (a = a.l) && this.xa('setContentUrl', a);
                    YA(this);
                }, $A = function (a, b) {
                    a.sendMessage('registerSessionObserver', b);
                };
            l = ZA.prototype;
            l.start = function () {
                this.xa('startSession', {
                    customReferenceData: this.g.h,
                    underEvaluation: this.g.o
                });
            };
            l.error = function (a, b) {
                this.xa('sessionError', a, b);
            };
            l.xa = function (a, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                    c[d - 1] = arguments[d];
                this.sendMessage.apply(this, [
                    a,
                    null
                ].concat(fa(c)));
            };
            l.sendMessage = function (a, b, c) {
                for (var d = [], e = 2; e < arguments.length; ++e)
                    d[e - 2] = arguments[e];
                if (this.h)
                    e = GA(), b && (this.l[e] = b), d = new BA(e, 'SessionService.' + a, '1.3.20-google_20210603', zA() && AA() ? d : JSON.stringify(d)), this.h.sendMessage(d);
                else if (null != this.B.g)
                    try {
                        this.B.sendMessage(a, b, d);
                    } catch (f) {
                        HA('Failed to communicate with SessionInterface with error:'), HA(f);
                    }
            };
            l.Fe = function (a) {
                var b = a.method, c = a.h;
                a = a.g;
                if ('response' === b && this.l[c]) {
                    var d = zA() && AA() ? a ? a : [] : a && 'string' === typeof a ? JSON.parse(a) : [];
                    this.l[c].apply(this, d);
                }
                'error' === b && window.console && HA(a);
            };
            var XA = function (a, b) {
                    b && (b = b.map(function (c) {
                        return c.toJSON();
                    }), a.xa('injectVerificationScriptResources', b));
                }, YA = function (a) {
                    $A(a, function (b) {
                        'sessionStart' === b.type && (a.J = !0, a.o = b.data.creativeType, a.I = b.data.impressionType);
                        'sessionFinish' === b.type && (a.J = !1);
                    });
                };
            yA('OmidSessionClient.AdSession', ZA);
            var aB = function (a) {
                vA('AdEvents.adSession', a);
                try {
                    if (a.A)
                        throw Error('AdEvents already registered.');
                    a.A = !0;
                    a.xa('registerAdEvents');
                    this.g = a;
                } catch (b) {
                    throw Error('AdSession already has an ad events instance registered');
                }
            };
            aB.prototype.loaded = function (a) {
                a = void 0 === a ? null : a;
                var b = this.g;
                if ('definedByJavaScript' === b.o)
                    throw Error('Creative type has not been redefined');
                if ('definedByJavaScript' === b.I)
                    throw Error('Impression type has not been redefined');
                a ? this.g.xa('loaded', a.toJSON()) : this.g.xa('loaded');
            };
            yA('OmidSessionClient.AdEvents', aB);
            var bB = function (a) {
                vA('MediaEvents.adSession', a);
                try {
                    if (a.C)
                        throw Error('MediaEvents already registered.');
                    a.C = !0;
                    a.xa('registerMediaEvents');
                    this.g = a;
                } catch (b) {
                    throw Error('AdSession already has a media events instance registered');
                }
            };
            bB.prototype.start = function (a, b) {
                wA('MediaEvents.start.duration', a);
                wA('MediaEvents.start.mediaPlayerVolume', b);
                if (0 > b || 1 < b)
                    throw Error('Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]');
                this.g.xa('start', a, b);
            };
            bB.prototype.pause = function () {
                this.g.xa('pause');
            };
            bB.prototype.resume = function () {
                this.g.xa('resume');
            };
            yA('OmidSessionClient.MediaEvents', bB);
            var eB = function (a, b) {
                    cB ? a.srcdoc = b : (a = a.contentWindow) && dB(a.document, b);
                }, cB = zd && 'srcdoc' in mf(document, 'IFRAME'), dB = function (a, b) {
                    a.open('text/html', 'replace');
                    Tc(a, Yf(b));
                    a.close();
                };
            function fB(a) {
                return (a = sf(a)) && a.omidSessionInterface ? a.omidSessionInterface : null;
            }
            function gB(a, b) {
                var c = of('IFRAME', {
                    name: b,
                    sandbox: 'allow-scripts allow-same-origin',
                    style: 'display: none'
                });
                a.appendChild(c);
                a = '<script src=' + sA.Fa() + '></script>';
                b = new Promise(function (d, e) {
                    c.addEventListener('load', function () {
                        fB(c) ? d(c) : e();
                    });
                });
                eB(c, a);
                return b;
            }
            ;
            var hB = function (a, b) {
                L.call(this);
                this.h = fB(a);
                this.g = b;
            };
            t(hB, L);
            var jB = function (a) {
                    try {
                        a.h.registerSessionObserver(function (b) {
                            'sessionStart' == b.type ? iB(a, a.g) : 'sessionFinish' == b.type && jB(a);
                        });
                    } catch (b) {
                        a.dispatchEvent(new Event('error'));
                    }
                }, iB = function (a, b) {
                    try {
                        a.h.setVideoElement(b);
                    } catch (c) {
                        a.dispatchEvent(new Event('error'));
                    }
                };
            var kB = function (a) {
                this.g = a;
            };
            kB.prototype.getCuePoints = function () {
                return this.g;
            };
            kB.prototype.getCuePoints = kB.prototype.getCuePoints;
            x('module$contents$ima$AdCuePoints_AdCuePoints.PREROLL', 0, void 0);
            x('module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL', -1, void 0);
            var lB = function (a) {
                    this.g = a;
                    this.l = '';
                    this.h = -1;
                    this.o = !1;
                }, nB = function (a, b) {
                    if (0 <= a.h) {
                        var c = null == b ? function () {
                            } : b, d = function () {
                                mB(a, c);
                                a.g.removeEventListener('loadedmetadata', d, !1);
                            };
                        a.g.addEventListener('loadedmetadata', d, !1);
                        a.g.src = a.l;
                        a.g.load();
                    } else
                        null != b && b();
                }, mB = function (a, b) {
                    var c = 0 < a.g.seekable.length;
                    a.o ? c ? (a.g.currentTime = a.h, oB(a), b()) : setTimeout(function () {
                        return mB(a, b);
                    }, 100) : (oB(a), b());
                }, oB = function (a) {
                    a.h = -1;
                    a.l = '';
                    a.o = !1;
                };
            var pB = function (a) {
                    return 5 < a.width && 5 < a.height;
                }, qB = function (a) {
                    L.call(this);
                    this.g = a;
                    this.aa = null;
                    this.D = new lB(a);
                    this.h = new au(this);
                    oi(this, this.h);
                    this.C = 0;
                    this.M = this.H = this.T = this.$ = this.L = !1;
                    this.R = this.o = null;
                    this.l = new bf(this.g.offsetWidth, this.g.offsetHeight);
                    this.A = null;
                    this.X = Yz(this.g);
                    this.Y = !1;
                };
            t(qB, L);
            l = qB.prototype;
            l.gd = function () {
                var a = this.D;
                a.l = a.g.currentSrc;
                a.o = 0 < a.g.seekable.length;
                a.h = a.g.ended ? -1 : a.g.currentTime;
            };
            l.Nb = function (a) {
                nB(this.D, a);
            };
            l.load = function (a, b) {
                var c = H().g;
                c.T = !0;
                Kg(c);
                I('hvd_lc');
                pB(this.l) ? (c = this.l, G(H(), 'ps', c.width + 'x' + c.height)) : rB(this);
                sB(this);
                this.T = !1;
                if (b)
                    if (I('hvd_ad'), b instanceof yt) {
                        if (I('hvd_mad'), c = b.getMediaUrl()) {
                            I('hvd_admu');
                            I('hvd_src');
                            this.g.src = c;
                            this.g.load();
                            return;
                        }
                    } else if (b instanceof xt) {
                        I('hvd_dad');
                        c = b.I;
                        var d = b.l, e = b.C, f = b.h, g = b.A, h = b.g;
                        if (c && d && e && f && g && h && (I('hvd_addu'), b.B)) {
                            I('hvd_admse');
                            b = e + '; codecs="' + g + '"';
                            f = f + '; codecs="' + h + '"';
                            if (Uv() && Uv() && MediaSource.isTypeSupported(b) && Uv() && MediaSource.isTypeSupported(f)) {
                                I('hvd_ymse');
                                I('hvd_mse');
                                a = !1;
                                try {
                                    -1 != window.location.search.indexOf('goog_limavideo=true') && (a = !0);
                                } catch (k) {
                                }
                                u.customElements ? a ? a = !0 : (nh(fi) && Mz().report(153, { limvid: 'vd' }), a = nh(fi) || nh(di) ? !0 : !1) : a = !1;
                                a ? (this.g.pb = c, this.g.Bb = d) : (this.aa = new hx(this.g, [
                                    new Xv(c, b, 350000, new Fu()),
                                    new Xv(d, f, 82000, new Fu())
                                ]), oi(this, this.aa), a = this.g, c = this.aa, c.g || (c.g = window.URL.createObjectURL(c.ca)), c = c.g, a.src = c);
                                this.g.load();
                                return;
                            }
                            I('hvd_nmse');
                        }
                    } else
                        I('hvd_uad');
                a ? (I('hvd_src'), this.g.src = a) : I('hvd_vn');
                this.g.load();
            };
            l.setVolume = function (a) {
                this.g.volume = Math.max(a, 0);
                this.g.muted = 0 == a ? !0 : !1;
            };
            l.getVolume = function () {
                return this.g.muted ? 0 : this.g.volume;
            };
            var tB = function (a) {
                a.Y = !1;
                a.T || Ic() ? (a.M = !1, a.o = a.g.play(), null != a.o && (a.R = null, a.o.then(function () {
                    a.o = null;
                    a.Fd(a.R);
                    a.R = null;
                }).catch(function (b) {
                    a.o = null;
                    var c = '';
                    null != b && null != b.name && (c = b.name);
                    'AbortError' == c || 'NotAllowedError' == c ? a.dispatchEvent('autoplayDisallowed') : a.da();
                }))) : a.M = !0;
            };
            qB.prototype.pause = function () {
                null == this.o && (this.Y = !0, this.g.pause());
            };
            qB.prototype.getDuration = function () {
                return isNaN(this.g.duration) ? -1 : this.g.duration;
            };
            qB.prototype.N = function () {
                this.A && (this.g instanceof HTMLElement && this.A.unobserve(this.g), this.A = null);
                uB(this);
                L.prototype.N.call(this);
            };
            var uB = function (a) {
                    null != a.F && (nz(a.F), a.F = null);
                    null != a.V && a.V.W();
                    eu(a.h);
                    sB(a);
                }, sB = function (a) {
                    a.$ = !1;
                    a.H = !1;
                    a.L = !1;
                    a.M = !1;
                    a.C = 0;
                    a.o = null;
                    a.R = null;
                    mi(a.K);
                };
            qB.prototype.nb = function (a) {
                this.dispatchEvent(a.type);
            };
            var wB = function (a) {
                if (!a.H) {
                    a.H = !0;
                    a.dispatchEvent('start');
                    try {
                        if (nh(fi) && u.customElements) {
                            var b = u.customElements.get('lima-video');
                            a.g instanceof b ? Mz().report(153, { limvid: 'limastart' }) : Mz().report(153, { limvid: 'videostart' });
                        }
                    } catch (d) {
                        Mz().report(153, { limvid: 'startfail' });
                    }
                    b = 'function' === typeof a.g.getAttribute && null != a.g.getAttribute('playsinline');
                    b = void 0 === b ? !1 : b;
                    var c;
                    if (!(c = !(Ed || Vt()) && !Wt(10))) {
                        if (b = !b)
                            F(Wx), b = !1;
                        c = b;
                    }
                    c ? (F(Wx), (b = rc(Fc, 'Xbox')) || (Dd || Fd ? b = 0 : !Cd || Cd && Ut(Tt, 4) ? fm() ? (F(Wx), b = !1) : b = !Zx() : b = 0)) : b = 1;
                    b || !Cd || Cd && Ut(Tt, 3) || (Dd || Fd) && !Wt(4) || vB(a);
                }
            };
            l = qB.prototype;
            l.Ze = function () {
                this.T = !0;
                this.M && tB(this);
                this.M = !1;
            };
            l.$e = function () {
                this.$ || (this.$ = !0, this.dispatchEvent('loaded'));
            };
            l.Fd = function (a) {
                null != this.o ? this.R = a : (this.dispatchEvent('play'), Gd || Ed || Vt() || Ud || wB(this));
            };
            l.cf = function (a) {
                if (!this.H && (Gd || Ed || Vt() || Ud)) {
                    if (0 >= this.g.currentTime)
                        return;
                    if (Ud && this.g.ended && 1 == this.getDuration()) {
                        this.da(a);
                        return;
                    }
                    wB(this);
                }
                if (Gd || rc(Fc, 'Nintendo WiiU')) {
                    if (1.5 < this.g.currentTime - this.C) {
                        this.L = !0;
                        this.g.currentTime = this.C;
                        return;
                    }
                    this.L = !1;
                    this.g.currentTime > this.C && (this.C = this.g.currentTime);
                }
                this.dispatchEvent('timeUpdate');
            };
            l.df = function () {
                this.dispatchEvent('volumeChange');
            };
            l.bf = function () {
                if (this.H && Gd && !this.Y && (2 > xB(this) || this.L)) {
                    this.K = new tj(250);
                    this.h.O(this.K, 'tick', this.kb);
                    this.K.start();
                    var a = !0;
                } else
                    a = !1;
                a || this.o || this.dispatchEvent('pause');
            };
            l.Ye = function () {
                var a = !0;
                if (Gd || rc(Fc, 'Nintendo WiiU'))
                    a = this.C >= this.g.duration - 1.5;
                !this.L && a && this.dispatchEvent('end');
            };
            var vB = function (a) {
                a.dispatchEvent('beginFullscreen');
            };
            qB.prototype.va = function () {
                this.dispatchEvent('endFullscreen');
            };
            qB.prototype.da = function () {
                this.dispatchEvent('error');
            };
            qB.prototype.Va = function () {
                this.dispatchEvent('click');
            };
            var rB = function (a) {
                'ResizeObserver' in window && (a.A = new ResizeObserver(function (b) {
                    b = q(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value, c.contentBoxSize ? (c = Array.isArray(c.contentBoxSize) ? c.contentBoxSize[0] : c.contentBoxSize, a.l.width = Math.floor(c.inlineSize), a.l.height = Math.floor(c.blockSize)) : (a.l.width = Math.floor(c.contentRect.width), a.l.height = Math.floor(c.contentRect.height)), pB(a.l) && (a.g instanceof HTMLElement && a.A.unobserve(a.g), a.A = null, c = a.l, G(H(), 'ps', c.width + 'x' + c.height));
                }), a.g instanceof HTMLElement && a.A.observe(a.g));
            };
            qB.prototype.ib = function () {
                var a = new bf(this.g.offsetWidth, this.g.offsetHeight), b = Yz(this.g);
                if (a.width != this.l.width || a.height != this.l.height)
                    !this.X && b ? vB(this) : this.X && !b && this.va(), this.l = a, this.X = b;
            };
            qB.prototype.kb = function () {
                if (!this.g.ended && this.g.paused && (Gd || Vd ? this.g.currentTime < this.g.duration : 1)) {
                    var a = this.g.duration - this.g.currentTime, b = xB(this);
                    0 < b && (2 <= b || 2 > a) && (mi(this.K), tB(this));
                } else
                    mi(this.K);
            };
            var xB = function (a) {
                var b;
                a: {
                    for (b = a.g.buffered.length - 1; 0 <= b;) {
                        if (a.g.buffered.start(b) <= a.g.currentTime) {
                            b = a.g.buffered.end(b);
                            break a;
                        }
                        b--;
                    }
                    b = 0;
                }
                return b - a.g.currentTime;
            };
            qB.prototype.Pb = function () {
                Mz().report(139);
                vB(this);
            };
            var BB = function (a, b, c) {
                K.call(this);
                var d = this;
                this.l = b;
                this.o = c;
                b = new au(this);
                oi(this, b);
                this.B = 'goog_' + cd++;
                this.g = this.h = null;
                gB(a, this.B).then(function (e) {
                    return void yB(d, e);
                }).catch(function () {
                    return void zB(d);
                });
                b.O(this.l, 'adsManager', function (e) {
                    'allAdsCompleted' == e.ia && AB(d);
                });
            };
            t(BB, K);
            var yB = function (a, b) {
                    a.h = b;
                    var c = {};
                    c = (c.frameName = a.B, c);
                    oy(a.l, 'omid', 'iframeReady', c);
                    a.g = new hB(b, a.o);
                    a.g.O('error', function () {
                        return void zB(a);
                    });
                    jB(a.g);
                }, zB = function (a) {
                    oy(a.l, 'omid', 'iframeFailed');
                    a.W();
                }, AB = function (a) {
                    setTimeout(function () {
                        a.W();
                    }, 3000);
                };
            BB.prototype.N = function () {
                this.h && (pf(this.h), this.h = null);
                K.prototype.N.call(this);
            };
            var CB = function (a, b, c, d) {
                K.call(this);
                this.o = a;
                this.l = b;
                this.g = c;
                this.C = d;
                this.h = new au(this);
                oi(this, this.h);
                this.h.O(this.o, d, this.A);
            };
            t(CB, K);
            var EB = function (a, b) {
                var c = b.ma;
                switch (b.ia) {
                case 'showVideo':
                    c = a.l;
                    null != c.h && c.h.show();
                    break;
                case 'hide':
                    c = a.l;
                    null != c.h && DB(c.h.g, !1);
                    break;
                case 'resizeAndPositionVideo':
                    a = a.l.g;
                    c = c.resizeAndPositionVideo;
                    a.g.style.left = String(c.left) + 'px';
                    a.g.style.top = String(c.top) + 'px';
                    a.g.style.width = String(c.width) + 'px';
                    a.g.style.height = String(c.height) + 'px';
                    break;
                case 'restoreSizeAndPositionVideo':
                    c = a.l.g, c.g.style.width = '100%', c.g.style.height = '100%', c.g.style.left = '0', c.g.style.right = '0';
                }
            };
            CB.prototype.A = function (a) {
                var b = a.ma;
                switch (a.ia) {
                case 'activate':
                    a = this.l;
                    var c = this.g;
                    a.g != c && a.h && a.o && a.l && (c.setVolume(a.g.getVolume()), c = a.g, a.g = a.l, a.l = c, c = a.h, a.h = a.o, a.o = c, DB(a.o.g, !1), null != (c = a.I.F) && (a = a.g.D.g, c.o = a, c.g && (c = c.g, c.g = a, iB(c, a))));
                    break;
                case 'startTracking':
                    a = this.g;
                    c = this.B;
                    this.h.O(a, Kb(Bu), c);
                    this.h.O(a, Yx, c);
                    a = this.g;
                    uB(a);
                    a.h.O(a.g, Yx, a.nb);
                    a.h.O(a.g, 'ended', a.Ye);
                    a.h.O(a.g, 'webkitbeginfullscreen', a.Pb);
                    a.h.O(a.g, 'webkitendfullscreen', a.va);
                    a.h.O(a.g, 'loadedmetadata', a.Ze);
                    a.h.O(a.g, 'pause', a.bf);
                    a.h.O(a.g, 'playing', a.Fd);
                    a.h.O(a.g, 'timeupdate', a.cf);
                    a.h.O(a.g, 'volumechange', a.df);
                    a.h.O(a.g, 'error', a.da);
                    a.h.O(a.g, Ud || Gd && !Wt(8) ? 'loadeddata' : 'canplay', a.$e);
                    a.F = new jz();
                    a.h.O(a.F, 'click', a.Va);
                    lz(a.F, a.g);
                    a.V = new tj(1000);
                    a.h.O(a.V, 'tick', a.ib);
                    a.V.start();
                    break;
                case 'stopTracking':
                    a = this.g;
                    c = this.B;
                    this.h.Ua(a, Kb(Bu), c);
                    this.h.Ua(a, Yx, c);
                    uB(this.g);
                    break;
                case 'exitFullscreen':
                    a = this.g;
                    (Dd || Fd) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
                    break;
                case 'play':
                    tB(this.g);
                    break;
                case 'pause':
                    this.g.pause();
                    break;
                case 'load':
                    a = this.g;
                    c = b.videoUrl;
                    var d = b.muxedMediaUrl, e = b.muxedMimeType, f = b.muxedAudioCodec, g = b.muxedVideoCodec, h = b.demuxedAudioUrl, k = b.demuxedVideoUrl, n = b.demuxedAudioMimeType, m = b.demuxedVideoMimeType, v = b.demuxedAudioCodec, r = b.demuxedVideoCodec;
                    b = b.mseCompatible;
                    var w = null;
                    k && h && b && m && n && r && v && (w = new xt({
                        tf: k,
                        qe: h,
                        Ah: null,
                        rh: null,
                        sf: m,
                        pe: n,
                        vb: r,
                        ob: v,
                        height: null,
                        width: null,
                        Ia: b,
                        zh: null,
                        qh: null
                    }));
                    h = null;
                    d && e && g && f && (h = new yt({
                        Xe: d,
                        vh: null,
                        mimeType: e,
                        vb: g,
                        ob: f,
                        height: null,
                        width: null,
                        Ia: b,
                        th: null
                    }));
                    w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
                    break;
                case 'unload':
                    a = this.g;
                    sB(a);
                    a.T = !1;
                    'removeAttribute' in a.g ? a.g.removeAttribute('src') : a.g.src = '';
                    a.g.load();
                    break;
                case 'setCurrentTime':
                    this.g.g.currentTime = b.currentTime;
                    break;
                case 'setVolume':
                    this.g.setVolume(b.volume);
                }
            };
            CB.prototype.B = function (a) {
                var b = {};
                switch (a.type) {
                case 'autoplayDisallowed':
                    a = 'autoplayDisallowed';
                    break;
                case 'beginFullscreen':
                    a = 'fullscreen';
                    break;
                case 'endFullscreen':
                    a = 'exitFullscreen';
                    break;
                case 'click':
                    a = 'click';
                    break;
                case 'end':
                    a = 'end';
                    break;
                case 'error':
                    a = 'error';
                    break;
                case 'loaded':
                    a = 'loaded';
                    break;
                case 'mediaLoadTimeout':
                    a = 'mediaLoadTimeout';
                    break;
                case 'pause':
                    a = 'pause';
                    b.ended = this.g.g.ended;
                    break;
                case 'play':
                    a = 'play';
                    break;
                case 'skip':
                    a = 'skip';
                    break;
                case 'start':
                    a = 'start';
                    b.volume = this.g.getVolume();
                    break;
                case 'timeUpdate':
                    a = 'timeupdate';
                    b.currentTime = this.g.g.currentTime;
                    b.duration = this.g.getDuration();
                    break;
                case 'volumeChange':
                    a = 'volumeChange';
                    b.volume = this.g.getVolume();
                    break;
                case 'loadedmetadata':
                    a = a.type;
                    b.duration = this.g.getDuration();
                    break;
                case 'abort':
                case 'canplay':
                case 'canplaythrough':
                case 'durationchange':
                case 'emptied':
                case 'loadstart':
                case 'loadeddata':
                case 'progress':
                case 'ratechange':
                case 'seeked':
                case 'seeking':
                case 'stalled':
                case 'suspend':
                case 'waiting':
                    a = a.type;
                    break;
                default:
                    return;
                }
                oy(this.o, this.C, a, b);
            };
            var FB = function (a, b) {
                K.call(this);
                this.h = b;
                this.l = new CB(a, b, this.h.g, 'videoDisplay1');
                oi(this, this.l);
                this.g = null;
                var c = this.h.l;
                null != c && (this.g = new CB(a, b, c, 'videoDisplay2'), oi(this, this.g));
            };
            t(FB, K);
            var GB = function (a, b, c, d) {
                var e = document.createElement('IFRAME');
                e.id = b;
                e.name = b;
                e.width = String(c);
                e.height = String(d);
                e.allowTransparency = 'true';
                e.scrolling = 'no';
                e.marginWidth = '0';
                e.marginHeight = '0';
                e.frameBorder = '0';
                e.style.border = '0';
                e.style.verticalAlign = 'bottom';
                e.src = 'about:blank';
                a.appendChild(e);
                return e;
            };
            function HB() {
                var a, b;
                return null == (a = D().googletag) ? void 0 : null == (b = a.companionAds) ? void 0 : b.call(a);
            }
            function IB(a) {
                var b = {};
                b.slotId = a.getSlotId().getId();
                var c = [];
                a = q(a.getSizes() || []);
                for (var d = a.next(); !d.done; d = a.next())
                    if (d = d.value, 'string' !== typeof d) {
                        var e = {};
                        c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e));
                    }
                return b.adSizes = c, b;
            }
            function JB(a) {
                var b = HB();
                if (b && a && Array.isArray(a)) {
                    var c = new Map(b.getSlots().map(function (r) {
                        return [
                            r.getSlotId().getId(),
                            r
                        ];
                    }));
                    a = q(a);
                    for (var d = a.next(); !d.done; d = a.next()) {
                        var e = d.value, f = c.get(e.slotId);
                        if (f && !b.isSlotAPersistentRoadblock(f)) {
                            var g = e.adContent;
                            if (g && (d = ff(f.getSlotId().getDomId()))) {
                                d.style.display = '';
                                var h = e.adWidth, k = e.adHeight;
                                d.textContent = '';
                                if (e.friendlyIframeRendering)
                                    try {
                                        var n = 'google_companion_' + f.getSlotId().getId(), m = GB(d, n, h, k), v = m.contentWindow ? m.contentWindow.document : m.contentDocument;
                                        yd && v.open('text/html', 'replace');
                                        Tc(v, Yf(g));
                                        v.close();
                                    } catch (r) {
                                    }
                                else
                                    Sc(d, Yf(g)), d.style.width = h + 'px', d.style.height = k + 'px';
                                b.slotRenderEnded(f, h, k);
                                (e = e.onAdContentSet) && e(d);
                            }
                        }
                    }
                }
            }
            ;
            var KB = function (a, b, c, d, e, f) {
                Nz.call(this, a, b, c, d, e);
                this.g = f;
            };
            t(KB, Nz);
            var LB = function (a, b) {
                L.call(this);
                this.o = a;
                this.l = b;
                this.g = {};
                this.h = new au(this);
                oi(this, this.h);
                this.h.O(D(), 'message', this.A);
            };
            t(LB, L);
            var MB = function (a, b) {
                    var c = b.g;
                    a.g.hasOwnProperty(c) && oy(a.g[c], b.type, b.ia, b.ma);
                }, NB = function (a, b, c, d) {
                    a.g.hasOwnProperty(b) || (c = new pA(b, c), a.h.O(c, a.o, function (e) {
                        this.dispatchEvent(new KB(e.type, e.ia, e.ma, e.Mb, e.Gd, b));
                    }), c.g = d, c.connect(), a.g[b] = c);
                };
            LB.prototype.N = function () {
                for (var a in this.g)
                    mi(this.g[a]);
                L.prototype.N.call(this);
            };
            LB.prototype.A = function (a) {
                a = a.g;
                var b = qA(a.data);
                if (null != b) {
                    var c = b.channel;
                    if (this.l && !this.g.hasOwnProperty(c)) {
                        var d = b.sid;
                        NB(this, c, d, a.source);
                        this.dispatchEvent(new KB(b.name, b.type, b.data || {}, d, a.origin, c));
                    }
                }
            };
            function OB() {
                return !!Ia('googletag.cmd', D());
            }
            function PB() {
                var a = Ia('googletag.console', D());
                return null != a ? a : null;
            }
            var QB = function () {
                au.call(this);
                this.l = new LB('gpt', !0);
                oi(this, this.l);
                this.O(this.l, 'gpt', this.A);
                this.g = null;
                OB() || D().top === D() || (this.g = new LB('gpt', !1), oi(this, this.g), this.O(this.g, 'gpt', this.B));
            };
            t(QB, au);
            QB.prototype.A = function (a) {
                var b = a.Gd, c = '//imasdk.googleapis.com'.match(wf);
                b = b.match(wf);
                if (c[3] == b[3] && c[4] == b[4])
                    if (null != this.g)
                        NB(this.g, a.g, a.Mb, D().parent), null != this.g && MB(this.g, a);
                    else if (c = a.ma, null != c && void 0 !== c.scope) {
                        b = c.scope;
                        c = c.args;
                        var d;
                        if ('proxy' == b) {
                            var e = a.ia;
                            'isGptPresent' == e ? d = OB() : 'isConsolePresent' == e && (d = null != PB());
                        } else if (OB())
                            if ('pubads' == b || 'companionAds' == b) {
                                d = a.ia;
                                var f = D().googletag;
                                if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d)))
                                    try {
                                        e = d.apply(b, c);
                                    } catch (g) {
                                    }
                                d = e;
                            } else if ('console' == b) {
                                if (e = PB(), null != e && (b = e[a.ia], null != b))
                                    try {
                                        b.apply(e, c);
                                    } catch (g) {
                                    }
                            } else
                                null === b && (e = a.ia, 'googleGetCompanionAdSlots' == e ? (e = HB()) ? (e = e.getSlots().map(IB), d = e.length ? e : null) : d = null : ('googleSetCompanionAdContents' == e && JB(c[0]), d = null));
                        void 0 !== d && (a.ma.returnValue = d, MB(this.l, a));
                    }
            };
            QB.prototype.B = function (a) {
                MB(this.l, a);
            };
            var RB = function (a, b) {
                if (a.g) {
                    var c = a.g;
                    mi(c.g[b]);
                    delete c.g[b];
                }
                a.l && (a = a.l, mi(a.g[b]), delete a.g[b]);
            };
            var TB = function (a, b) {
                    var c = Array.prototype.slice.call(arguments), d = c.shift();
                    if ('undefined' == typeof d)
                        throw Error('[goog.string.format] Template required');
                    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, h, k, n, m, v) {
                        if ('%' == n)
                            return '%';
                        var r = c.shift();
                        if ('undefined' == typeof r)
                            throw Error('[goog.string.format] Not enough arguments');
                        arguments[0] = r;
                        return SB[n].apply(null, arguments);
                    });
                }, SB = {
                    s: function (a, b, c) {
                        return isNaN(c) || '' == c || a.length >= Number(c) ? a : a = -1 < b.indexOf('-', 0) ? a + ad(' ', Number(c) - a.length) : ad(' ', Number(c) - a.length) + a;
                    },
                    f: function (a, b, c, d, e) {
                        d = a.toString();
                        isNaN(e) || '' == e || (d = parseFloat(a).toFixed(e));
                        var f = 0 > Number(a) ? '-' : 0 <= b.indexOf('+') ? '+' : 0 <= b.indexOf(' ') ? ' ' : '';
                        0 <= Number(a) && (d = f + d);
                        if (isNaN(c) || d.length >= Number(c))
                            return d;
                        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                        a = Number(c) - d.length - f.length;
                        return d = 0 <= b.indexOf('-', 0) ? f + d + ad(' ', a) : f + ad(0 <= b.indexOf('0', 0) ? '0' : ' ', a) + d;
                    },
                    d: function (a, b, c, d, e, f, g, h) {
                        return SB.f(parseInt(a, 10), b, c, d, 0, f, g, h);
                    }
                };
            SB.i = SB.d;
            SB.u = SB.d;
            var VB = function (a, b) {
                L.call(this);
                this.l = new au(this);
                oi(this, this.l);
                this.L = this.K = null;
                this.H = !1;
                this.D = 'goog_' + cd++;
                this.A = new Map();
                var c = this.D, d = (Jf() ? 'https:' : 'http:') + TB('//imasdk.googleapis.com/js/core/bridge3.473.0_%s.html', W.o);
                a: {
                    var e = window;
                    try {
                        do {
                            try {
                                if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                                    var f = !0;
                                    break a;
                                }
                            } catch (g) {
                            }
                            e = e.parent;
                        } while (e != e.top);
                    } catch (g) {
                    }
                    f = !1;
                }
                f && (d += '?f=' + c);
                c = of('IFRAME', {
                    src: d + '#' + c,
                    allowFullscreen: !0,
                    allow: 'autoplay;trust-token-redemption',
                    style: 'border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;'
                });
                this.l.Gb(c, 'load', this.Y);
                a.appendChild(c);
                this.g = c;
                this.o = UB(this);
                this.C = b;
                this.h = null;
                this.M = new FB(this.o, this.C);
                oi(this, this.M);
                this.C.g && this.l.O(this.o, 'displayContainer', this.T);
                this.l.O(this.o, 'mouse', this.V);
                this.l.O(this.o, 'touch', this.X);
                c = D();
                d = Ia('google.ima.gptProxyInstance', c);
                null != d ? c = d : (d = new QB(), x('google.ima.gptProxyInstance', d, c), c = d);
                this.R = c;
                Zx() || (this.F = new BB(a, this.o, b.g.D.g), oi(this, this.F));
            };
            t(VB, L);
            var UB = function (a, b) {
                b = void 0 === b ? '*' : b;
                var c = a.A.get(b);
                null == c && (c = new pA(a.D, b), a.H && (c.g = sf(a.g), c.connect()), a.A.set(b, c));
                return c;
            };
            VB.prototype.N = function () {
                null !== this.h && (this.h.W(), this.h = null);
                this.A.forEach(function (a) {
                    mi(a);
                });
                this.A.clear();
                RB(this.R, this.D);
                pf(this.g);
                L.prototype.N.call(this);
            };
            VB.prototype.V = function (a) {
                var b = a.ma, c = eg(this.g), d = document.createEvent('MouseEvent');
                d.initMouseEvent(a.ia, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
                this.g.dispatchEvent(d);
            };
            var WB = function (a, b) {
                var c = eg(a.g), d = !!('TouchEvent' in window && 0 < TouchEvent.length);
                b = b.map(function (e) {
                    return d ? new Touch({
                        identifier: e.identifier,
                        target: a.g,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        screenX: e.screenX,
                        screenY: e.screenY,
                        pageX: e.pageX + c.x,
                        pageY: e.pageY + c.y
                    }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY);
                });
                return d ? b : document.createTouchList.apply(document, b);
            };
            VB.prototype.X = function (a) {
                var b = a.ma, c = eg(this.g);
                if ('TouchEvent' in window && 0 < TouchEvent.length)
                    b = {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        detail: b.detail,
                        ctrlKey: b.ctrlKey,
                        altKey: b.altKey,
                        shiftKey: b.shiftKey,
                        metaKey: b.metaKey,
                        touches: WB(this, b.touches),
                        targetTouches: WB(this, b.targetTouches),
                        changedTouches: WB(this, b.changedTouches)
                    }, a = new TouchEvent(a.ia, b), this.g.dispatchEvent(a);
                else {
                    var d = document.createEvent('TouchEvent');
                    d.initTouchEvent(a.ia, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, WB(this, b.touches), WB(this, b.targetTouches), WB(this, b.changedTouches), b.scale, b.rotation);
                    this.g.dispatchEvent(d);
                }
            };
            VB.prototype.T = function (a) {
                switch (a.ia) {
                case 'showVideo':
                    null == this.h ? (this.h = new jz(), this.l.O(this.h, 'click', this.$)) : nz(this.h);
                    lz(this.h, XB(this.C));
                    break;
                case 'hide':
                    null !== this.h && (this.h.W(), this.h = null);
                }
                var b = this.M;
                EB(b.l, a);
                b.g && EB(b.g, a);
            };
            VB.prototype.$ = function () {
                oy(this.o, 'displayContainer', 'videoClick');
            };
            VB.prototype.Y = function () {
                var a = this;
                this.K = xg();
                this.L = ug();
                this.A.forEach(function (b) {
                    b.g = sf(a.g);
                    b.connect();
                });
                this.H = !0;
            };
            var ZB = function () {
                L.call(this);
                this.buffered = new YB();
                this.D = new YB();
                this.A = new au(this);
                oi(this, this.A);
                this.src = this.C = '';
                this.F = !1;
                this.l = null;
                var a = Ax(W);
                if (a) {
                    a: {
                        if (Nb(a.g, 'videoElementFakeDuration') && (a = a.g.videoElementFakeDuration, 'number' === typeof a))
                            break a;
                        a = NaN;
                    }
                    this.duration = a;
                }
            };
            t(ZB, L);
            var $B = function () {
                var a = ['video/mp4'], b = ['video/ogg'], c = new ZB();
                c.canPlayType = function (d) {
                    return a.includes(d) ? 'probably' : b.includes(d) ? 'maybe' : '';
                };
                c.width = 0;
                c.height = 0;
                c.offsetWidth = 0;
                c.offsetHeight = 0;
                return c;
            };
            l = ZB.prototype;
            l.pause = function () {
                this.paused || (null.stop(), this.paused = !0, this.dispatchEvent('timeupdate'), this.dispatchEvent('pause'));
            };
            l.load = function () {
                this.hd = 0;
                this.paused = !0;
                this.dispatchEvent('loadstart');
                var a;
                isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
                this.setProperty('duration', a);
                a = this.D;
                a.g.push(new aC(this.duration));
                a.length = a.g.length;
                a = this.buffered;
                a.g.push(new aC(this.duration));
                a.length = a.g.length;
                this.dispatchEvent('loadedmetadata');
                0 < this.currentTime && this.dispatchEvent('timeupdate');
                this.dispatchEvent('loadeddata');
                this.dispatchEvent('canplay');
                this.dispatchEvent('canplaythrough');
                this.dispatchEvent('progress');
            };
            l.setProperty = function (a, b) {
                switch (a) {
                case 'currentTime':
                    a = Number(b);
                    this.dispatchEvent('seeking');
                    this.currentTime = a;
                    this.dispatchEvent('seeked');
                    a = Wa() - this.o;
                    b = this.currentTime + a / 1000;
                    this.o += a;
                    2 < this.hd && (this.currentTime = Math.min(b, this.duration));
                    this.dispatchEvent('timeupdate');
                    this.currentTime == this.duration && (this.paused = !0, null.stop(), this.dispatchEvent('ended'));
                    break;
                case 'duration':
                    this.duration = Number(b);
                    this.dispatchEvent('durationchange');
                    break;
                case 'volume':
                    this.volume = Number(b);
                    this.dispatchEvent('volumechange');
                    break;
                default:
                    throw 'Property setter not implemented';
                }
            };
            l.setAttribute = function (a, b) {
                null != a && bC.set(a, b);
            };
            l.getAttribute = function (a) {
                return bC.get(a);
            };
            l.Zd = function (a) {
                var b = null, c = null;
                switch (a.type) {
                case 'loadeddata':
                    b = 'Loaded';
                    break;
                case 'playing':
                    b = 'Playing';
                    c = '#00f';
                    break;
                case 'pause':
                    b = 'Paused';
                    break;
                case 'ended':
                    b = 'Ended', c = '#000';
                }
                b && this.h && (this.h.innerText = b);
                c && this.g && (this.g.style.backgroundColor = c);
            };
            var bC = new ms(), aC = function (a) {
                    this.startTime = 0;
                    this.endTime = a;
                }, YB = function () {
                    this.length = 0;
                    this.g = [];
                };
            YB.prototype.start = function (a) {
                return this.g[a].startTime;
            };
            YB.prototype.end = function (a) {
                return this.g[a].endTime;
            };
            l = ZB.prototype;
            l.hd = 0;
            l.currentTime = 0;
            l.duration = NaN;
            l.paused = !0;
            l.volume = 1;
            l.muted = !1;
            Object.defineProperty(ZB.prototype, 'src', {
                get: function () {
                    return ZB.prototype.C;
                },
                set: function (a) {
                    var b = ZB.prototype;
                    b.F && null != b.l ? (b.l.reject(), b.l = null) : b.C = a;
                }
            });
            ZB.prototype.o = 0;
            ZB.prototype.g = null;
            ZB.prototype.h = null;
            var eC = function (a, b) {
                K.call(this);
                this.o = a;
                this.l = this.g = null;
                this.h = cC();
                dC(this, b);
                zw(function () {
                    G(H(), 'haob', '1');
                });
            };
            t(eC, K);
            eC.prototype.initialize = function () {
                this.h && this.h.load();
            };
            eC.prototype.N = function () {
                pf(this.g);
                K.prototype.N.call(this);
            };
            var dC = function (a, b) {
                    a.g = of('DIV', { style: 'display:none;' });
                    a.o.appendChild(a.g);
                    a.g.appendChild(a.h);
                    b && (a.l = of('DIV', { style: 'position:absolute;width:100%;height:100%;left:0px;top:0px' }), a.g.appendChild(a.l));
                }, cC = function () {
                    var a = Ax(W);
                    if (xx(a, 'useVideoElementFake')) {
                        a = $B();
                        var b = of('DIV', { style: 'position:absolute;width:100%;height:100%;top:0px;left:0px;' });
                        for (c in a)
                            b[c] = a[c];
                        a.g = of('DIV', { style: 'position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000' });
                        a.h = of('P', { style: 'position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;' });
                        a.g.appendChild(a.h);
                        b.appendChild(a.g);
                        a.A.O(a, [
                            'loadeddata',
                            'playing',
                            'pause',
                            'ended'
                        ], a.Zd);
                        var c = b;
                    } else {
                        c = !1;
                        try {
                            -1 != window.location.search.indexOf('goog_limavideo=true') && (c = !0);
                        } catch (d) {
                        }
                        u.customElements ? c ? a = !0 : (nh(fi) && Mz().report(153, { limvid: 'vw' }), a = nh(di) || nh(fi) ? !0 : !1) : a = !1;
                        if (a) {
                            c && console.log('force lima video in wrapper');
                            c = null;
                            try {
                                c = new Kw();
                            } catch (d) {
                                c = of('lima-video'), nh(fi) && Mz().report(153, { limvid: 'firefail' });
                            }
                            c.style.backgroundColor = '#000';
                            c.style.height = '100%';
                            c.style.width = '100%';
                            c.style.position = 'absolute';
                            c.style.left = '0';
                            c.style.top = '0';
                        } else
                            c = of('VIDEO', {
                                style: 'background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;',
                                title: lx('Advertisement').toString()
                            });
                    }
                    c.setAttribute('webkit-playsinline', !0);
                    c.setAttribute('playsinline', !0);
                    return c;
                };
            eC.prototype.show = function () {
                DB(this.g, !0);
            };
            var DB = function (a, b) {
                null != a && (a.style.display = b ? 'block' : 'none');
            };
            var hC = function (a, b, c) {
                var d = a && a.getRootNode ? a.getRootNode({ composed: !0 }) : a;
                if (null == a || !rf(df(d), d))
                    throw vy(uy, null, 'containerElement', 'element');
                this.A = b;
                this.Y = ay(this.A || null);
                this.X = Xt(this.A || null);
                this.V = String(Math.floor(1000000000 * Math.random()));
                this.H = !1;
                this.F = a;
                this.T = null != b;
                W.g = 2;
                this.D = fC(b ? b : null);
                d = of('DIV', { style: 'position:absolute' });
                a.insertBefore(d, a.firstChild);
                this.B = d;
                this.h = null;
                gC(this) && b ? a = new qB(b) : (this.h = new eC(this.B, !0), a = new qB(this.h.h));
                this.g = a;
                this.l = this.o = null;
                if (a = this.h && W.isAutoPlayAdBreaks())
                    a = !(gC(this) || Dd || Fd || gm() || Cd && (!Cd || !Ut(Tt, 4)));
                a && (this.o = new eC(this.B, !0), this.l = new qB(this.o.h));
                this.C = c || null;
                this.R = null != this.C;
                gC(this) && b ? 'function' !== typeof b.getBoundingClientRect ? (c = this.B, W.l = c) : c = b : c = this.B;
                this.J = c;
                this.I = new VB(this.B, this);
                this.M = new bf(0, 0);
                this.K = '';
                b && (b = b.src || b.currentSrc, b = b instanceof P ? b.F() : new P(b, void 0), 200 > b.toString().length ? this.K = b.toString() : 200 > b.g.length && (this.K = b.g));
                this.L = new Map();
                this.L.set('videoDisplay1', this.g);
                this.l && this.L.set('videoDisplay2', this.l);
            };
            hC.prototype.initialize = function () {
                this.H = !0;
                null != this.h && this.h.initialize();
                null != this.o && this.o.initialize();
            };
            hC.prototype.destroy = function () {
                var a = this;
                this.A = null;
                mi(this.h);
                mi(this.o);
                mi(this.I);
                this.g.Nb(function () {
                    return mi(a.g);
                });
                null != this.l && this.l.Nb(function () {
                    return mi(a.l);
                });
                pf(this.B);
            };
            var XB = function (a) {
                    return a.R && a.C ? a.C : null != a.h ? a.h.l : null;
                }, gC = function (a) {
                    return $x(a.D) && a.T;
                }, fC = function (a) {
                    return null != a && 'function' === typeof a.getAttribute && null != a.getAttribute('playsinline') ? !0 : !1;
                };
            hC.prototype.destroy = hC.prototype.destroy;
            hC.prototype.initialize = hC.prototype.initialize;
            var iC = function (a) {
                var b = Error.call(this);
                this.message = b.message;
                'stack' in b && (this.stack = b.stack);
                this.g = a;
            };
            t(iC, Error);
            l = iC.prototype;
            l.getInnerError = function () {
                var a = this.g.innerError;
                return a instanceof Object ? new iC(a) : null != a ? Error(a) : null;
            };
            l.getMessage = function () {
                return this.g.errorMessage;
            };
            l.getErrorCode = function () {
                return this.g.errorCode;
            };
            l.Bd = function () {
                var a = this.getErrorCode();
                return 1000 > a ? a : 900;
            };
            l.getType = function () {
                return this.g.type;
            };
            l.toString = function () {
                return 'AdError ' + this.getErrorCode() + ': ' + this.getMessage() + (null != this.getInnerError() ? ' Caused by: ' + this.getInnerError() : '');
            };
            iC.prototype.getType = iC.prototype.getType;
            iC.prototype.getVastErrorCode = iC.prototype.Bd;
            iC.prototype.getErrorCode = iC.prototype.getErrorCode;
            iC.prototype.getMessage = iC.prototype.getMessage;
            iC.prototype.getInnerError = iC.prototype.getInnerError;
            var jC = {
                AD_LOAD: 'adLoadError',
                AD_PLAY: 'adPlayError'
            };
            x('module$contents$ima$AdError_AdError.Type', jC, void 0);
            var kC = function (a, b) {
                b = void 0 === b ? null : b;
                pi.call(this, 'adError');
                this.g = a;
                this.l = b;
            };
            t(kC, pi);
            kC.prototype.getError = function () {
                return this.g;
            };
            kC.prototype.getUserRequestContext = function () {
                return this.l;
            };
            kC.prototype.getUserRequestContext = kC.prototype.getUserRequestContext;
            kC.prototype.getError = kC.prototype.getError;
            var lC = { AD_ERROR: 'adError' };
            x('module$contents$ima$AdErrorEvent_AdErrorEvent.Type', lC, void 0);
            var mC = function (a, b, c) {
                b = void 0 === b ? null : b;
                c = void 0 === c ? null : c;
                pi.call(this, a);
                this.l = b;
                this.g = c;
            };
            t(mC, pi);
            mC.prototype.getAd = function () {
                return this.l;
            };
            mC.prototype.getAdData = function () {
                return this.g;
            };
            mC.prototype.getAdData = mC.prototype.getAdData;
            mC.prototype.getAd = mC.prototype.getAd;
            var nC = {
                AD_CAN_PLAY: 'adCanPlay',
                yf: 'adStarted',
                CONTENT_PAUSE_REQUESTED: 'contentPauseRequested',
                CONTENT_RESUME_REQUESTED: 'contentResumeRequested',
                CLICK: 'click',
                VIDEO_CLICKED: 'videoClicked',
                VIDEO_ICON_CLICKED: 'videoIconClicked',
                cd: 'engagedView',
                EXPANDED_CHANGED: 'expandedChanged',
                STARTED: 'start',
                AD_PROGRESS: 'adProgress',
                AD_BUFFERING: 'adBuffering',
                IMPRESSION: 'impression',
                jd: 'measurable_impression',
                VIEWABLE_IMPRESSION: 'viewable_impression',
                dd: 'fully_viewable_audible_half_duration_impression',
                ce: 'overlay_resize',
                de: 'overlay_unmeasurable_impression',
                ee: 'overlay_unviewable_impression',
                ge: 'overlay_viewable_immediate_impression',
                fe: 'overlay_viewable_end_of_session_impression',
                Uf: 'externalActivityEvent',
                PAUSED: 'pause',
                RESUMED: 'resume',
                FIRST_QUARTILE: 'firstQuartile',
                MIDPOINT: 'midpoint',
                THIRD_QUARTILE: 'thirdQuartile',
                COMPLETE: 'complete',
                DURATION_CHANGE: 'durationChange',
                USER_CLOSE: 'userClose',
                ih: 'userRecall',
                Ng: 'prefetched',
                LOADED: 'loaded',
                ALL_ADS_COMPLETED: 'allAdsCompleted',
                SKIPPED: 'skip',
                je: 'skipShown',
                LINEAR_CHANGED: 'linearChanged',
                SKIPPABLE_STATE_CHANGED: 'skippableStateChanged',
                AD_METADATA: 'adMetadata',
                xf: 'adBreakFetchError',
                AD_BREAK_READY: 'adBreakReady',
                LOG: 'log',
                VOLUME_CHANGED: 'volumeChange',
                VOLUME_MUTED: 'mute',
                INTERACTION: 'interaction',
                Hf: 'companionBackfill',
                fh: 'trackingUrlPinged',
                kh: 'video_card_endcap_collapse',
                lh: 'video_card_endcap_dismiss',
                mh: 'video_card_endcap_impression',
                Kf: 'companionInitialized',
                Jf: 'companionImpression',
                If: 'companionClick',
                zg: 'mediaUrlPinged',
                $d: 'loadStart',
                Cg: 'navigationRequested'
            };
            x('module$contents$ima$AdEvent_AdEvent.Type', nC, void 0);
            var oC = function (a, b) {
                b = void 0 === b ? null : b;
                mC.call(this, 'adMetadata', a);
                this.o = b;
            };
            t(oC, mC);
            oC.prototype.Ae = function () {
                return this.o;
            };
            oC.prototype.getAdCuePoints = oC.prototype.Ae;
            var pC = function (a) {
                this.adBreakDuration = a.adBreakDuration;
                this.adPosition = a.adPosition;
                this.currentTime = a.currentTime;
                this.duration = a.duration;
                this.totalAds = a.totalAds;
            };
            var qC = function (a, b) {
                L.call(this);
                this.l = a;
                this.A = b;
                this.h = this.l.currentTime;
                this.g = new tj(250);
                oi(this, this.g);
                this.o = new au(this);
                oi(this, this.o);
                cu(this.o, this.g, 'tick', this.C, !1, this);
            };
            t(qC, L);
            qC.prototype.Ya = function () {
                return this.h;
            };
            qC.prototype.start = function () {
                rC(this);
                this.g.start();
            };
            qC.prototype.stop = function () {
                this.g.stop();
            };
            qC.prototype.C = function () {
                var a = this.l.currentTime;
                a != this.Ya() && (this.h = a, rC(this));
            };
            var rC = function (a) {
                var b = {};
                b.currentTime = a.Ya();
                oy(a.A, 'contentTimeUpdate', 'contentTimeUpdate', b);
            };
            var sC = function (a, b, c) {
                L.call(this);
                this.h = a;
                this.g = null;
                this.H = '';
                this.K = Ec;
                this.L = 0;
                this.C = this.l = null;
                this.o = b;
                this.A = null;
                this.D = '';
                this.F = c;
            };
            t(sC, L);
            sC.prototype.init = function (a) {
                this.D = a;
                a = 'about:blank';
                wd && (a = '');
                this.l = of('IFRAME', {
                    src: a,
                    allowtransparency: !0,
                    background: 'transparent'
                });
                ag(this.l, {
                    display: 'none',
                    width: '0',
                    height: '0'
                });
                a = this.h.F;
                a.appendChild(this.l);
                a = a.ownerDocument;
                a = a.defaultView || a.parentWindow;
                null == this.A && (this.A = new au(this));
                this.A.O(a, 'message', this.M);
                a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js"></script><script>loader = new VPAIDLoader(false, "' + (this.D + '");</script></body>');
                if (Vd || Rd || xd) {
                    var b = this.l.contentWindow;
                    b && dB(b.document, a);
                } else
                    eB(this.l, a);
            };
            sC.prototype.M = function (a) {
                try {
                    var b = a.g.data;
                    try {
                        var c = JSON.parse(b);
                    } catch (Ka) {
                        return;
                    }
                    var d = c.session;
                    if (null != d && this.D == d)
                        switch (c.type) {
                        case 'friendlyReady':
                            var e = tC(this);
                            if (null != e) {
                                this.g = e;
                                this.H = e.currentSrc;
                                var f = e.style.cssText;
                                if (wd && 10 > document.documentMode)
                                    var g = Ec;
                                else {
                                    var h = document;
                                    'function' === typeof HTMLTemplateElement && (h = mf(document, 'TEMPLATE').content.ownerDocument);
                                    var k = h.implementation.createHTMLDocument('').createElement('DIV');
                                    k.style.cssText = f;
                                    g = ux(k.style);
                                }
                                this.K = g;
                                this.L = e.currentTime;
                            } else {
                                var n = this.h.F, m = this.h.M;
                                var v = 'border: 0; margin: 0; padding: 0; position: absolute; width:' + (m.width + 'px; ');
                                v += 'height:' + m.height + 'px;';
                                this.g = of('VIDEO', {
                                    style: v,
                                    autoplay: !0
                                });
                                n.appendChild(this.g);
                            }
                            var r = this.h.F;
                            e = 'border: 0; margin: 0; padding: 0;position: absolute; ';
                            var w = ig(this.g);
                            e += 'width:' + w.width + 'px; ';
                            e += 'height:' + w.height + 'px;';
                            this.C = of('DIV', { style: e });
                            r.appendChild(this.C);
                            try {
                                this.l.contentWindow.loader.initFriendly(this.g, this.C);
                            } catch (Ka) {
                                uC(this);
                            }
                            oy(this.o, 'vpaid', '', b);
                            break;
                        case 'becameLinear':
                            this.g && !vf() && !uf() && ag(this.g, { visibility: 'visible' });
                            oy(this.o, 'vpaid', '', b);
                            break;
                        case 'becameNonlinear':
                            vC(this);
                            oy(this.o, 'vpaid', '', b);
                            break;
                        case 'startAd':
                            r = {};
                            if (this.g) {
                                h = this.g.paused;
                                var B = 0 < this.g.currentTime;
                                r.apl = B && !h ? '1' : '0';
                                r.ip = h ? '1' : '0';
                                r.iavp = B ? '1' : '0';
                            } else
                                r.apl = 'n';
                            Mz().report(99, r);
                            oy(this.o, 'vpaid', '', b);
                            if (null != tC(this)) {
                                var M = this.h;
                                null != M.h && M.h.show();
                            }
                            break;
                        default:
                            oy(this.o, 'vpaid', '', b);
                        }
                } catch (Ka) {
                    uC(this);
                }
            };
            var uC = function (a) {
                    var b = { type: 'error' };
                    b.session = a.D;
                    a = ch(new ah(void 0), b);
                    window.postMessage(a, '*');
                }, tC = function (a) {
                    return ('videoDisplayUnknown' == a.F ? a.h.g : a.h.L.get(a.F)).D.g;
                }, vC = function (a) {
                    a.g && !vf() && !uf() && ag(a.g, { visibility: 'hidden' });
                };
            sC.prototype.N = function () {
                L.ya.N.call(this);
                mi(this.A);
                this.A = null;
                pf(this.C);
                this.C = null;
                pf(this.l);
                this.l = null;
                var a = tC(this);
                if (null != a) {
                    var b = this.K;
                    a.style.cssText = b instanceof Dc && b.constructor === Dc ? b.g : 'type_error:SafeStyle';
                    vf() || uf() ? (a.src = this.H, a.currentTime = this.L) : (a.removeAttribute('src'), a = this.h, null != a.h && DB(a.h.g, !1));
                } else
                    pf(this.g), this.g = null;
            };
            var wC = function (a, b) {
                K.call(this);
                this.h = a;
                this.l = b;
                this.g = new Map();
            };
            t(wC, K);
            var xC = function (a, b) {
                try {
                    var c = b.ma, d = c.session;
                    switch (c.vpaidEventType) {
                    case 'createFriendlyIframe':
                        b = 'videoDisplayUnknown';
                        c.videoDisplayName && (b = c.videoDisplayName);
                        var e = c.session, f = new sC(a.h, a.l, b);
                        a.g.set(e, f);
                        f.init(e);
                        break;
                    case 'vpaidNonLinear':
                        var g = a.g.get(d);
                        g && vC(g);
                        break;
                    case 'destroyFriendlyIframe':
                        var h = a.g.get(d);
                        h && (h.W(), a.g.delete(d));
                    }
                } catch (k) {
                    Mz().report(125, { msg: k.message });
                }
            };
            wC.prototype.N = function () {
                this.g.forEach(function (a) {
                    return a.W();
                });
            };
            var yC = function () {
                    this.g = [];
                    this.h = [];
                }, zC = function (a) {
                    return 0 === a.g.length && 0 === a.h.length;
                };
            yC.prototype.remove = function (a) {
                var b = this.g;
                b: {
                    var c = b.length - 1;
                    0 > c && (c = Math.max(0, b.length + c));
                    if ('string' === typeof b)
                        c = 'string' !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
                    else {
                        for (; 0 <= c; c--)
                            if (c in b && b[c] === a)
                                break b;
                        c = -1;
                    }
                }
                0 <= c ? (wb(b, c), b = !0) : b = !1;
                return b || vb(this.h, a);
            };
            yC.prototype.Na = function () {
                for (var a = [], b = this.g.length - 1; 0 <= b; --b)
                    a.push(this.g[b]);
                var c = this.h.length;
                for (b = 0; b < c; ++b)
                    a.push(this.h[b]);
                return a;
            };
            var Z = function (a, b, c, d, e, f, g) {
                L.call(this);
                var h = this;
                this.H = a;
                this.g = b;
                this.L = c;
                this.ib = e;
                this.o = new fA();
                this.C = g;
                this.M = !1;
                this.T = 1;
                this.kb = d;
                this.aa = -1;
                this.l = this.h = null;
                this.F = new qC({ currentTime: 0 }, this.C);
                this.D = new yC();
                this.da = this.X = !1;
                this.Y = new Map();
                this.$ = this.va = !1;
                this.Va = new wC(b, g);
                oi(this, this.Va);
                this.K = f && null != this.g.C;
                this.R = function () {
                    var k = h.g.g, n = k.g.currentTime;
                    k = k.getDuration();
                    return {
                        currentTime: n,
                        duration: k,
                        isPlaying: !0,
                        volume: h.T
                    };
                };
                this.V = new au(this);
                this.V.O(this.C, 'adsManager', this.nb);
            };
            t(Z, L);
            Z.prototype.nb = function (a) {
                var b = this, c = a.ia, d = a.ma;
                switch (c) {
                case 'error':
                    AC(this);
                    BC(this, d);
                    break;
                case 'contentPauseRequested':
                    Mz().report(130);
                    CC(this);
                    DC(this, c, d);
                    break;
                case 'contentResumeRequested':
                    EC(this, function () {
                        return DC(b, c, d);
                    });
                    break;
                case 'remainingTime':
                    this.aa = d.remainingTime;
                    break;
                case 'skip':
                    DC(this, c, d);
                    break;
                case 'log':
                    DC(this, c, d, d.logData);
                    break;
                case 'companionBackfill':
                    a = Ia('window.google_show_companion_ad');
                    null != a && a();
                    break;
                case 'skipShown':
                    this.M = !0;
                    DC(this, c, d);
                    break;
                case 'interaction':
                    DC(this, c, d, d.interactionData);
                    break;
                case 'vpaidEvent':
                    xC(this.Va, a);
                    break;
                case 'skippableStateChanged':
                    a = d.adData;
                    null != a.skippable && (this.M = a.skippable);
                    DC(this, c, d);
                    break;
                case 'volumeChange':
                    a = d.adData;
                    null != a && 'number' === typeof a.volume && (this.T = a.volume);
                    DC(this, c, d);
                    break;
                case 'firstQuartile':
                    DC(this, my.firstQuartile, d);
                    DC(this, c, d);
                    break;
                case 'thirdQuartile':
                    DC(this, my.thirdQuartile, d);
                    DC(this, c, d);
                    break;
                default:
                    DC(this, c, d);
                }
            };
            var DC = function (a, b, c, d) {
                    if (null == c.companions) {
                        var e = a.Y.get(c.adId);
                        c.companions = null != e ? e : [];
                    }
                    var f = c.adData;
                    if (e = null == f ? null : new Y(f))
                        a.h = e;
                    switch (b) {
                    case 'adBreakReady':
                    case 'mediaUrlPinged':
                        b = new mC(b, null, c);
                        break;
                    case 'adMetadata':
                        b = null;
                        null != c.adCuePoints && (b = new kB(c.adCuePoints));
                        b = new oC(e, b);
                        break;
                    case 'allAdsCompleted':
                        a.h = null;
                        a.va = !0;
                        b = new mC(b, e);
                        break;
                    case 'contentPauseRequested':
                        a.$ = !1;
                        b = new mC(b, e);
                        break;
                    case 'contentResumeRequested':
                        a.h = null;
                        a.$ = !0;
                        b = new mC(b, e);
                        break;
                    case 'loaded':
                        a.aa = e.getDuration();
                        a.M = !1;
                        by() && (d = a.H, c = a.ib, d.h.set(Rz(e), a.R), (0 != W.g ? F(wq).l : d.A) && Zz(d, 'loaded', Rz(e), c));
                        b = new mC(b, e, f);
                        break;
                    case 'start':
                        a.Y.set(c.adId, c.companions);
                        null != XB(a.g) && (null == a.l ? (a.l = new jz(), a.V.O(a.l, 'click', a.af)) : nz(a.l), lz(a.l, XB(a.g)));
                        b = new mC(b, e);
                        break;
                    case 'complete':
                        null != a.l && nz(a.l);
                        by() && aA(a.H, a.R, Rz(e));
                        a.h = null;
                        a.Y.delete(c.adId);
                        b = new mC(b, e);
                        break;
                    case 'log':
                        c = null;
                        null != d && null != d.type ? (f = d.type, f = 'adLoadError' == f || 'adPlayError' == f) : f = !1;
                        f && (c = { adError: new iC(d) });
                        b = new mC(b, e, c);
                        break;
                    case 'interaction':
                        b = new mC(b, e, d);
                        break;
                    case 'adProgress':
                        b = new mC(b, e, new pC(c));
                        break;
                    default:
                        b = new mC(b, e);
                    }
                    a.dispatchEvent(b);
                    a.va && a.$ && a.destroy();
                }, BC = function (a, b) {
                    var c = new kC(new iC(b));
                    a.X ? (a.dispatchEvent(c), by() && a.h && aA(a.H, a.R, Rz(a.h)), a.h = null) : a.D.h.push(c);
                    a = {
                        error: b.errorCode,
                        vis: Fg(document)
                    };
                    Mz().report(7, a);
                }, FC = function (a, b, c) {
                    oy(a.C, 'adsManager', b, c);
                }, EC = function (a, b) {
                    Mz().report(131);
                    AC(a, b);
                }, CC = function (a) {
                    var b = a.g.g;
                    gC(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != b.gd && b.gd();
                }, AC = function (a, b) {
                    var c = a.g.g;
                    gC(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Nb ? c.Nb(b) : b && b();
                };
            l = Z.prototype;
            l.init = function (a, b, c, d) {
                if (zC(this.D)) {
                    var e = this.g, f = null;
                    e.A && null == d && (f = { vd: 'setnull' });
                    e.A && e.A === d && (f = { vd: 'match' });
                    if (e.A && e.A !== d) {
                        f = ay(d || null);
                        var g = Xt(d || null);
                        f = {
                            vd: 'diff',
                            oc: e.Y,
                            nc: f,
                            oi: e.X,
                            ni: g
                        };
                    }
                    !e.A && d && (f = { vd: 'new' });
                    f && (f.custVid = e.V, Mz().report(93, f));
                    null != d && (e.D = fC(d), $x(e.D) && (e.T = !0, mi(e.h), mi(e.o), mi(e.l), e.h = null, e.o = null, e.l = null, mi(e.g), e.g = new qB(d), 'function' !== typeof d.getBoundingClientRect ? (e.J = e.B, W.l = e.J) : e.J = d, null != (d = e.I.F) && (e = e.g.D.g, d.o = e, d.g && (d = d.g, d.g = e, iB(d, e)))));
                    this.X = !0;
                    this.resize(a, b, c);
                    e = gA(this.o, this.K);
                    FC(this, 'init', {
                        adsRenderingSettings: e,
                        width: a,
                        height: b,
                        viewMode: c
                    });
                } else {
                    for (; !zC(this.D);)
                        b = a = this.D, 0 === b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
                    this.W();
                }
            };
            l.Se = function () {
                return gC(this.g);
            };
            l.Re = function () {
                return this.K;
            };
            l.getRemainingTime = function () {
                return this.aa;
            };
            l.getAdSkippableState = function () {
                return this.M;
            };
            l.ye = function () {
                FC(this, 'discardAdBreak');
            };
            l.updateAdsRenderingSettings = function (a) {
                if (null != a) {
                    var b = this.o.bitrate, c = a.bitrate;
                    Mz().report(96, {
                        init: this.X ? '1' : '0',
                        start: this.da ? '1' : '0',
                        old: b,
                        'new': c,
                        changed: b != c ? '1' : '0'
                    });
                    this.o = a;
                    a = gA(this.o, this.K);
                    FC(this, 'updateAdsRenderingSettings', { adsRenderingSettings: a });
                }
            };
            l.skip = function () {
                FC(this, 'skip');
            };
            l.start = function () {
                if (this.L) {
                    (Dd || Fd) && Mz().report(50, { customPlayback: gC(this.g) });
                    this.g.H || Mz().report(26, {
                        adtagurl: this.L,
                        customPlayback: gC(this.g)
                    });
                    am(this.g.B) && Mz().report(30, {
                        adtagurl: this.L,
                        customPlayback: gC(this.g)
                    });
                    var a = this.g.C, b = this.g.B, c;
                    if (c = a && b && !am(a))
                        a = Xz(a), b = Xz(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
                    c && Mz().report(31, {
                        adtagurl: this.L,
                        customPlayback: gC(this.g)
                    });
                }
                if (!this.g.H && !gC(this.g))
                    throw vy(ty);
                b = this.g;
                b.R = this.K && null != b.C;
                this.g.I.g.style.opacity = 1;
                null != this.A && 1 == this.getVolume() && ('boolean' === typeof this.A.muted && this.A.muted ? this.setVolume(0) : 'number' === typeof this.A.volume && (b = this.A.volume, 0 <= b && 1 >= b && this.setVolume(this.A.volume)));
                this.da = !0;
                FC(this, 'start');
            };
            l.af = function () {
                if (!this.o.disableClickThrough && null != this.h) {
                    var a = this.h.g.clickThroughUrl;
                    null != a && yu(a, this.h.g.attributionParams);
                }
            };
            l.resize = function (a, b, c) {
                var d = this.g, e = d.B;
                null != e && (-1 == a ? (e.style.right = '0', e.style.left = '0') : e.style.width = a + 'px', -1 == b ? (e.style.bottom = '0', e.style.top = '0') : e.style.height = b + 'px');
                e = d.I;
                e.g.width = -1 == a ? '100%' : a;
                e.g.height = -1 == b ? '100%' : b;
                try {
                    e.g.offsetTop = e.g.offsetTop;
                } catch (f) {
                }
                d.M = new bf(a, b);
                FC(this, 'resize', {
                    width: a,
                    height: b,
                    viewMode: c
                });
            };
            l.stop = function () {
                FC(this, 'stop');
            };
            l.expand = function () {
                FC(this, 'expand');
            };
            l.collapse = function () {
                FC(this, 'collapse');
            };
            l.getVolume = function () {
                return this.T;
            };
            l.setVolume = function (a) {
                this.T = a;
                this.g.g.setVolume(a);
                FC(this, 'volume', { volume: a });
            };
            l.pause = function () {
                FC(this, 'pause');
            };
            l.resume = function () {
                FC(this, 'resume');
            };
            l.destroy = function () {
                this.W();
            };
            l.getCuePoints = function () {
                return this.kb;
            };
            l.getCurrentAd = function () {
                return this.h;
            };
            l.N = function () {
                FC(this, 'destroy');
                null != this.l && this.l.W();
                this.V.W();
                var a = this.D;
                a.g = [];
                a.h = [];
                this.F && (this.F.stop(), this.F.W());
                by() && aA(this.H, this.R);
                L.prototype.N.call(this);
            };
            l.clicked = function () {
                Mz().report(124, { api: 'clicked' });
                var a = this.h && this.h.g.clickThroughUrl;
                a && this.h.isUiDisabled() && yu(a, this.h.g.attributionParams);
                FC(this, 'click');
            };
            l.focus = function () {
                oy(this.C, 'userInteraction', 'focusUiElement');
            };
            Z.prototype.clicked = Z.prototype.clicked;
            Z.prototype.getCurrentAd = Z.prototype.getCurrentAd;
            Z.prototype.getCuePoints = Z.prototype.getCuePoints;
            Z.prototype.destroy = Z.prototype.destroy;
            Z.prototype.resume = Z.prototype.resume;
            Z.prototype.pause = Z.prototype.pause;
            Z.prototype.setVolume = Z.prototype.setVolume;
            Z.prototype.getVolume = Z.prototype.getVolume;
            Z.prototype.collapse = Z.prototype.collapse;
            Z.prototype.expand = Z.prototype.expand;
            Z.prototype.stop = Z.prototype.stop;
            Z.prototype.resize = Z.prototype.resize;
            Z.prototype.start = Z.prototype.start;
            Z.prototype.skip = Z.prototype.skip;
            Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
            Z.prototype.discardAdBreak = Z.prototype.ye;
            Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
            Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
            Z.prototype.isCustomClickTrackingUsed = Z.prototype.Re;
            Z.prototype.isCustomPlaybackUsed = Z.prototype.Se;
            Z.prototype.init = Z.prototype.init;
            var GC = function (a, b) {
                pi.call(this, 'adsManagerLoaded');
                this.g = a;
                this.l = b;
            };
            t(GC, pi);
            GC.prototype.getAdsManager = function (a, b) {
                a = a || { currentTime: null };
                var c = this.g;
                c.A = a;
                null != a.currentTime && (c.F = new qC(a, c.C), c.F.start());
                null != b && (c.o = b);
                return this.g;
            };
            GC.prototype.getUserRequestContext = function () {
                return this.l;
            };
            GC.prototype.getUserRequestContext = GC.prototype.getUserRequestContext;
            GC.prototype.getAdsManager = GC.prototype.getAdsManager;
            var HC = { ADS_MANAGER_LOADED: 'adsManagerLoaded' };
            x('module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type', HC, void 0);
            var IC = function () {
                this.videoPlayMuted = this.videoPlayActivation = 'unknown';
                this.videoContinuousPlay = '0';
                this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
                this.forceNonLinearFullSlot = !1;
                this.contentTitle = this.contentKeywords = this.contentDuration = null;
                this.vastLoadTimeout = 5000;
                this.omidAccessModeRules = {};
                this.pageUrl = null;
            };
            IC.prototype.setAdWillAutoPlay = function (a) {
                this.videoPlayActivation = a ? 'auto' : 'click';
            };
            IC.prototype.setAdWillPlayMuted = function (a) {
                this.videoPlayMuted = a ? 'muted' : 'unmuted';
            };
            IC.prototype.setContinuousPlayback = function (a) {
                this.videoContinuousPlay = a ? '2' : '1';
            };
            IC.prototype.setContinuousPlayback = IC.prototype.setContinuousPlayback;
            IC.prototype.setAdWillPlayMuted = IC.prototype.setAdWillPlayMuted;
            IC.prototype.setAdWillAutoPlay = IC.prototype.setAdWillAutoPlay;
            var JC = function (a) {
                var b = document;
                try {
                    var c = Ms(b);
                    var d = c ? ye(Os, c ? JSON.parse(c) : null) : null;
                } catch (e) {
                    d = null;
                }
                if (!d)
                    return 0;
                if (De(d, 7))
                    return 4;
                if (a) {
                    if (ub(A(d, 3), a))
                        return 2;
                    if (ub(A(d, 4), a))
                        return 3;
                }
                return 1;
            };
            function KC(a, b, c) {
                b = De(b, 5) && 'null' !== c.origin ? c.document.cookie : null;
                return null === b ? null : new Hs({ cookie: b }).get(a) || '';
            }
            ;
            var LC = function () {
                    this.g = window;
                    this.h = 0;
                }, MC = function (a, b) {
                    return b ? b ? KC('__gads', b, a.g) : null : null;
                };
            var NC = function (a, b, c) {
                var d = 'script';
                d = void 0 === d ? '' : d;
                var e = a.createElement('link');
                try {
                    if (e.rel = 'preload', rc('preload', 'stylesheet')) {
                        e.href = ec(b).toString();
                        var f = Wc('style[nonce],link[rel="stylesheet"][nonce]', e.ownerDocument && e.ownerDocument.defaultView);
                        f && e.setAttribute('nonce', f);
                    } else
                        e.href = b instanceof dc ? ec(b).toString() : b instanceof vc ? wc(b) : wc(Ac(b));
                } catch (g) {
                    return;
                }
                d && (e.as = d);
                c && e.setAttribute('nonce', c);
                if (a = a.getElementsByTagName('head')[0])
                    try {
                        a.appendChild(e);
                    } catch (g) {
                    }
            };
            var OC = /^\.google\.(com?\.)?[a-z]{2,3}$/, PC = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, QC = u, SC = function (a) {
                    a = 'https://adservice' + (a + '/adsid/integrator.js');
                    var b = ['domain=' + encodeURIComponent(u.location.hostname)];
                    RC[3] >= Wa() && b.push('adsid=' + encodeURIComponent(RC[1]));
                    return a + '?' + b.join('&');
                }, RC, TC, UC = function () {
                    QC = u;
                    RC = QC.googleToken = QC.googleToken || {};
                    var a = Wa();
                    RC[1] && RC[3] > a && 0 < RC[2] || (RC[1] = '', RC[2] = -1, RC[3] = -1, RC[4] = '', RC[6] = '');
                    TC = QC.googleIMState = QC.googleIMState || {};
                    a = TC[1];
                    OC.test(a) && !PC.test(a) || (TC[1] = '.google.com');
                    Array.isArray(TC[5]) || (TC[5] = []);
                    'boolean' !== typeof TC[6] && (TC[6] = !1);
                    Array.isArray(TC[7]) || (TC[7] = []);
                    'number' !== typeof TC[8] && (TC[8] = 0);
                }, VC = {
                    Ac: function () {
                        return 0 < TC[8];
                    },
                    ff: function () {
                        TC[8]++;
                    },
                    gf: function () {
                        0 < TC[8] && TC[8]--;
                    },
                    hf: function () {
                        TC[8] = 0;
                    },
                    yh: function () {
                        return !1;
                    },
                    yd: function () {
                        return TC[5];
                    },
                    qd: function (a) {
                        try {
                            a();
                        } catch (b) {
                            u.setTimeout(function () {
                                throw b;
                            }, 0);
                        }
                    },
                    Id: function () {
                        if (!VC.Ac()) {
                            var a = u.document, b = function (e) {
                                    e = SC(e);
                                    a: {
                                        try {
                                            var f = Wc('script[nonce]', void 0);
                                            break a;
                                        } catch (g) {
                                        }
                                        f = void 0;
                                    }
                                    NC(a, e, f);
                                    f = a.createElement('script');
                                    f.type = 'text/javascript';
                                    f.onerror = function () {
                                        return u.processGoogleToken({}, 2);
                                    };
                                    e = Zf(e);
                                    f.src = ec(e);
                                    Re(f);
                                    try {
                                        (a.head || a.body || a.documentElement).appendChild(f), VC.ff();
                                    } catch (g) {
                                    }
                                }, c = TC[1];
                            b(c);
                            '.google.com' != c && b('.google.com');
                            b = {};
                            var d = (b.newToken = 'FBT', b);
                            u.setTimeout(function () {
                                return u.processGoogleToken(d, 1);
                            }, 1000);
                        }
                    }
                }, WC = function (a) {
                    UC();
                    var b = QC.googleToken[5] || 0;
                    a && (0 != b || RC[3] >= Wa() ? VC.qd(a) : (VC.yd().push(a), VC.Id()));
                    RC[3] >= Wa() && RC[2] >= Wa() || VC.Id();
                }, XC = function (a) {
                    u.processGoogleToken = u.processGoogleToken || function (b, c) {
                        var d = b;
                        d = void 0 === d ? {} : d;
                        c = void 0 === c ? 0 : c;
                        b = d.newToken || '';
                        var e = 'NT' == b, f = parseInt(d.freshLifetimeSecs || '', 10), g = parseInt(d.validLifetimeSecs || '', 10), h = d['1p_jar'] || '';
                        d = d.pucrd || '';
                        UC();
                        1 == c ? VC.hf() : VC.gf();
                        var k = QC.googleToken = QC.googleToken || {}, n = 0 == c && b && 'string' === typeof b && !e && 'number' === typeof f && 0 < f && 'number' === typeof g && 0 < g && 'string' === typeof h;
                        e = e && !VC.Ac() && (!(RC[3] >= Wa()) || 'NT' == RC[1]);
                        var m = !(RC[3] >= Wa()) && 0 != c;
                        if (n || e || m)
                            e = Wa(), f = e + 1000 * f, g = e + 1000 * g, 0.00001 > Math.random() && Uf(u, 'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, UC();
                        if (n || !VC.Ac()) {
                            c = VC.yd();
                            for (b = 0; b < c.length; b++)
                                VC.qd(c[b]);
                            c.length = 0;
                        }
                    };
                    WC(a);
                };
            var YC = function (a, b) {
                b = void 0 === b ? 500 : b;
                K.call(this);
                this.h = a;
                this.B = b;
                this.g = null;
                this.o = {};
                this.A = 0;
                this.l = null;
            };
            t(YC, K);
            YC.prototype.N = function () {
                this.o = {};
                this.l && (Xe(this.h, 'message', this.l), delete this.l);
                delete this.o;
                delete this.h;
                delete this.g;
                K.prototype.N.call(this);
            };
            var $C = function (a) {
                    var b;
                    return 'function' === typeof (null === (b = a.h) || void 0 === b ? void 0 : b.__uspapi) || null != ZC(a);
                }, bD = function (a, b) {
                    var c = {};
                    if ($C(a)) {
                        var d = ib(function () {
                            return b(c);
                        });
                        aD(a, function (e, f) {
                            f && (c = e);
                            d();
                        });
                        setTimeout(d, a.B);
                    } else
                        b(c);
                }, aD = function (a, b) {
                    var c, d;
                    if ('function' === typeof (null === (c = a.h) || void 0 === c ? void 0 : c.__uspapi))
                        (null === (d = a.h) || void 0 === d ? void 0 : d.__uspapi)('getUSPData', 1, b);
                    else if (ZC(a)) {
                        cD(a);
                        var e = ++a.A;
                        a.o[e] = b;
                        a.g && (b = {}, a.g.postMessage((b.__uspapiCall = {
                            command: 'getUSPData',
                            version: 1,
                            callId: e
                        }, b), '*'));
                    }
                }, ZC = function (a) {
                    if (a.g)
                        return a.g;
                    a.g = Nf(a.h, '__uspapiLocator');
                    return a.g;
                }, cD = function (a) {
                    a.l || (a.l = function (b) {
                        var c;
                        try {
                            var d = {};
                            'string' === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                            var e = d.__uspapiReturn;
                            null === (c = a.o) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success);
                        } catch (f) {
                        }
                    }, We(a.h, 'message', a.l));
                };
            var dD = function (a) {
                    a = void 0 === a ? window : a;
                    return !a.PeriodicSyncManager;
                }, eD = function () {
                    var a = void 0 === a ? window : a;
                    if (!dD(a) && Dx(Tr) || dD(a) && Dx(Ur)) {
                        a = a.navigator.userAgent;
                        var b = /Chrome/.test(a);
                        return /Android/.test(a) && b;
                    }
                    return !1;
                }, fD = {
                    issuerOrigin: 'https://attestation.android.com',
                    issuancePath: '/att/i',
                    redemptionPath: '/att/r',
                    shouldRedeemToken: function () {
                        return eD();
                    },
                    shouldRequestToken: function () {
                        return eD();
                    }
                };
            var gD = [
                    'A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
                    'A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='
                ], jD = function (a, b, c) {
                    a = void 0 === a ? function () {
                    } : a;
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    K.call(this);
                    Dx(Wr) || hD();
                    this.o = b || [fD];
                    this.g = c;
                    this.h = a;
                    if (document.hasTrustToken && !Dx(Vr))
                        if (Dx(Xr)) {
                            if (!Array.isArray(window.goog_tt_state)) {
                                var d = iD(this);
                                Object.defineProperty(window, 'goog_tt_state', {
                                    configurable: !1,
                                    get: function () {
                                        return d.slice();
                                    }
                                });
                            }
                        } else
                            this.l = iD(this);
                };
            t(jD, K);
            var hD = function () {
                    var a = void 0 === a ? window.document : a;
                    Of(gD, a);
                }, iD = function (a) {
                    var b = a.o.map(function (c) {
                        return {
                            issuerOrigin: c.issuerOrigin,
                            state: Dx(Wr) && !a.g ? 12 : 1
                        };
                    });
                    Dx(Xr) || a.h(b);
                    return b;
                }, kD = function (a, b, c) {
                    if (Dx(Xr)) {
                        if (a = window.goog_tt_state.find(function (e) {
                                return e.issuerOrigin === b;
                            }))
                            a.state = c;
                    } else {
                        var d = a.l.find(function (e) {
                            return e.issuerOrigin === b;
                        });
                        d && (d.state = c, a.h(a.l));
                    }
                }, lD = function () {
                    var a = window.goog_tt_state;
                    return Array.isArray(a) && a.some(function (b) {
                        return 1 != b.state;
                    });
                }, mD = function (a, b) {
                    var c = '' + b.issuerOrigin + b.redemptionPath, d = {
                            keepalive: !0,
                            redirect: 'follow',
                            method: 'get',
                            trustToken: {
                                type: 'token-redemption',
                                issuer: b.issuerOrigin,
                                refreshPolicy: 'none'
                            }
                        };
                    kD(a, b.issuerOrigin, 2);
                    return window.fetch(c, d).then(function (e) {
                        if (!e.ok)
                            throw Error(e.status + ': Network response was not ok!');
                        kD(a, b.issuerOrigin, 6);
                    }).catch(function (e) {
                        e && 'NoModificationAllowedError' === e.name ? kD(a, b.issuerOrigin, 6) : kD(a, b.issuerOrigin, 5);
                    });
                }, nD = function (a, b, c) {
                    var d = '' + b.issuerOrigin + b.issuancePath;
                    kD(a, b.issuerOrigin, 8);
                    return window.fetch(d, { trustToken: { type: 'token-request' } }).then(function (e) {
                        if (!e.ok)
                            throw Error(e.status + ': Network response was not ok!');
                        kD(a, b.issuerOrigin, 10);
                        if (c)
                            return mD(a, b);
                    }).catch(function (e) {
                        if (e && 'NoModificationAllowedError' === e.name) {
                            if (kD(a, b.issuerOrigin, 10), c)
                                return mD(a, b);
                        } else
                            kD(a, b.issuerOrigin, 9);
                    });
                }, oD = function (a) {
                    if (!(!document.hasTrustToken || Dx(Vr) || Dx(Wr) && !a.g || Dx(Xr) && lD())) {
                        var b = [];
                        a.o.forEach(function (d) {
                            var e = d.shouldRedeemToken(), f = d.shouldRequestToken();
                            if (e || f) {
                                var g = document.hasTrustToken(d.issuerOrigin).then(function (h) {
                                    if (h) {
                                        if (e)
                                            return mD(a, d);
                                    } else {
                                        if (f)
                                            return nD(a, d, e);
                                        kD(a, d.issuerOrigin, 3);
                                    }
                                });
                                b.push(g);
                            } else
                                kD(a, d.issuerOrigin, 7);
                        });
                        if (window.Promise && window.Promise.all) {
                            var c = window.Promise.all(b);
                            Dx(Xr) && 'object' != typeof window.goog_tt_promise && Object.defineProperty(window, 'goog_tt_promise', {
                                configurable: !1,
                                value: c,
                                writable: !1
                            });
                        }
                    }
                };
            (function () {
                if (!Gb(function (b) {
                        return b.match(D().location.href);
                    })) {
                    var a = Hz(gf());
                    null == a && document.querySelectorAll && (a = Hz(document.querySelectorAll('script')));
                    if (null == a)
                        throw Error('IMA SDK is either not loaded from a google domain or is not a supported version.');
                }
            }());
            var qD = function (a) {
                L.call(this);
                var b = this, c = yx(Ax(this.getSettings()));
                c && 0 < c.length && (qh.reset(), sh(new Uh(c)));
                this.D = new LC();
                this.g = a;
                this.F = new Map();
                this.l = this.g.I;
                this.H = new au(this);
                oi(this, this.H);
                this.K = new Gx(window);
                this.L = new YC(window);
                this.o = null;
                this.A = {};
                0 != W.g ? (this.h = new Tz(), oi(this, this.h)) : this.h = Vz();
                by() && (this.h.init(UB(this.l)), this.C = $z(this.h, this.g.J), ni(this, function () {
                    var d = b.C;
                    b.h.o.delete(d);
                    0 != W.g && (F(wq).B[d] = null);
                }));
                nh(gi) && pD(this);
            };
            t(qD, L);
            qD.prototype.destroy = function () {
                this.W();
            };
            qD.prototype.getVersion = function () {
                return 'h.3.473.0';
            };
            qD.prototype.requestAds = function (a, b) {
                var c = this, d = [], e = null;
                Ix(this.K) && d.push(new Promise(function (g) {
                    Lx(c.K, function (h) {
                        e = h;
                        g();
                    });
                }));
                var f = null;
                $C(this.L) && d.push(new Promise(function (g) {
                    bD(c.L, function (h) {
                        f = h;
                        g();
                    });
                }));
                Promise.all(d).then(function () {
                    rD(c, a, b, {
                        Vc: e,
                        Zc: f
                    });
                });
            };
            var rD = function (a, b, c, d) {
                var e = b.adTagUrl;
                e && Mz().report(8, {
                    adtagurl: e,
                    customPlayback: gC(a.g),
                    customClick: null != a.g.C
                });
                var f = 'goog_' + cd++;
                a.F.set(f, c || null);
                var g = sD({
                    adTagUrl: e,
                    Dd: !1,
                    Vc: d.Vc,
                    Zc: d.Zc
                });
                a.o = Qx(e, g || {});
                tD(Sx(a.o)) ? uD().then(function () {
                    vD(a, f, b, g);
                }) : vD(a, f, b, g);
            };
            qD.prototype.getSettings = function () {
                return W;
            };
            qD.prototype.contentComplete = function () {
                oy(UB(this.l), 'adsLoader', 'contentComplete');
            };
            var tD = function (a) {
                return a ? !1 : !Zx();
            };
            qD.prototype.M = function (a) {
                var b = a.ia;
                switch (b) {
                case 'adsLoaded':
                    b = a.ma;
                    a = a.Mb;
                    b = new Z(this.h, this.g, b.adTagUrl || '', b.adCuePoints, this.C, b.isCustomClickTrackingAllowed, UB(this.l, a));
                    this.dispatchEvent(new GC(b, wD(this, a)));
                    break;
                case 'error':
                    b = a.ma;
                    this.dispatchEvent(new kC(new iC(b), wD(this, a.Mb)));
                    a = {
                        error: b.errorCode,
                        vis: Fg(document)
                    };
                    Mz().report(7, a);
                    break;
                case 'cookieUpdate':
                    a = a.ma;
                    if (null == a)
                        break;
                    var c = a.gfpCookie;
                    if (c && W.h) {
                        var d = new Bx();
                        He(d, 5, !0);
                        b = this.D;
                        c = ye(Wj, c ? JSON.parse(c) : null);
                        if (d) {
                            if (d) {
                                var e = {
                                        Ed: A(c, 2) - Date.now() / 1000,
                                        path: A(c, 3),
                                        domain: A(c, 4),
                                        kf: !1
                                    }, f = A(c, 1), g = b.g;
                                De(d, 5) && 'null' !== g.origin && new Hs(g.document).set('__gads', f, e);
                            }
                            De(d, 5) && 0.01 > b.g.Math.random() && (d = MC(b, d), Wf({
                                domain: A(c, 4),
                                host: b.g.location.host,
                                success: d === A(c, 1) ? '1' : '0'
                            }, 'gfp_cw_status'));
                        }
                    }
                    xD(this, a.encryptedSignalBidderIds || []);
                    break;
                case 'trackingUrlPinged':
                    this.dispatchEvent(new mC(b, null, a.ma));
                }
            };
            var xD = function (a, b) {
                    0 != b.length && (b = hz(b.map(function (c) {
                        return { Ea: c };
                    }), a.o)) && b.forEach(function (c) {
                        return c.then(function (d) {
                            d && (d = Iy(gz(a.o))) && (a.A.espSignals = d, yD(a));
                        });
                    });
                }, yD = function (a) {
                    oy(UB(a.l), 'adsLoader', 'signalsRefresh', a.A);
                }, wD = function (a, b) {
                    var c = a.F.get(b);
                    a.F.delete(b);
                    return c;
                }, sD = function (a) {
                    var b = a.adTagUrl;
                    if (b) {
                        var c = /iu=\/(\d+)\//.exec(Xc(b));
                        (c = c && 2 == c.length ? c[1] : null) || (b = bd(new P(b).l.get('client')), c = hc(b) ? null : b);
                        b = c;
                    } else
                        b = null;
                    b = b || '';
                    var d = void 0 === d ? u : d;
                    c = JC(b);
                    if (0 != c)
                        var e = c;
                    else
                        e = void 0 === e ? u : e, e = e.top, e = Mf(e, 'googlefcInactive') ? 4 : b && Mf(e, 'googlefcPA-' + b) ? 2 : Mf(e, 'googlefcNPA') ? 3 : 0;
                    b = d;
                    d = b = void 0 === b ? u : b;
                    d = void 0 === d ? u : d;
                    (d = !!d.googlefc) || (d = b.top, d = void 0 === d ? u.top : d, d = Mf(d, 'googlefcPresent'));
                    var f = void 0 === f ? u : f;
                    f = Mf(f.top, 'googlefcLoaded');
                    b = a.Vc;
                    c = a.Zc;
                    var g = {};
                    return g.gfcPresent = d && 4 != e, g.gfcLoaded = f, g.gfcUserConsent = e, g.isGdprLoader = a.Dd, g.addtlConsent = b ? b.addtlConsent : null, g.gdprApplies = b ? b.gdprApplies : null, g.tcString = b ? b.tcString : null, g.uspString = c ? c.uspString : null, g;
                }, uD = function () {
                    return new Promise(function (a) {
                        XC(function () {
                            UC();
                            W.C = RC[1] || '';
                            UC();
                            W.V = RC[6] || '';
                            UC();
                            W.H = RC[4] || '';
                            a();
                        });
                    });
                }, vD = function (a, b, c, d) {
                    var e = {};
                    e = (e.limaExperimentIds = rh().sort().join(','), e);
                    var f = a.getSettings(), g = 0 != W.g ? F(wq).l : a.h.A;
                    g = void 0 === g ? null : g;
                    var h = {};
                    null != g && (h.activeViewPushUpdates = g);
                    h.activityMonitorMode = f.g;
                    h.adsToken = f.C;
                    h.autoPlayAdBreaks = f.isAutoPlayAdBreaks();
                    h.companionBackfill = f.getCompanionBackfill();
                    h.cookiesEnabled = f.h;
                    h.disableCustomPlaybackForIOS10Plus = f.getDisableCustomPlaybackForIOS10Plus();
                    h.engagementDetection = !0;
                    h.isFunctionalTest = !1;
                    h.isVpaidAdapter = f.Fb();
                    h['1pJar'] = f.H;
                    h.numRedirects = f.getNumRedirects();
                    h.pageCorrelator = f.M;
                    h.persistentStateCorrelator = qg();
                    h.playerType = f.getPlayerType();
                    h.playerVersion = f.getPlayerVersion();
                    h.ppid = f.getPpid();
                    h.privacyControls = f.V;
                    h.reportMediaRequests = !1;
                    h.sessionId = f.Y;
                    h.streamCorrelator = f.X;
                    h.testingConfig = Ax(f).g;
                    h.urlSignals = f.aa;
                    h.vpaidMode = f.getVpaidMode();
                    h.featureFlags = f.getFeatureFlags();
                    g = c.adTagUrl;
                    f = {};
                    f.contentMediaUrl = a.g.K;
                    f.customClickTrackingProvided = null != a.g.C;
                    a: {
                        var k = Zj();
                        k = q(k);
                        for (var n = k.next(); !n.done; n = k.next())
                            if (n = n.value, n.url && n.url.includes('amp=1')) {
                                k = !0;
                                break a;
                            }
                        k = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != ck().l;
                    }
                    f.isAmp = k;
                    a: {
                        try {
                            var m = window.top.location.href;
                        } catch (zD) {
                            m = 2;
                            break a;
                        }
                        m = null == m ? 2 : m == window.document.location.href ? 0 : 1;
                    }
                    f.iframeState = m;
                    f.imaHostingDomain = window.document.domain;
                    f.imaHostingPageUrl = window.document.URL;
                    if (fm())
                        m = window.location.href;
                    else {
                        n = ck();
                        m = n.h;
                        k = n.g;
                        n = n.l;
                        var v = null;
                        n && (v = iz(n.url));
                        m = v ? v : m && m.url ? m.url : k && k.url ? k.url : '';
                    }
                    f.topAccessiblePageUrl = m;
                    f.referrer = window.document.referrer;
                    f.domLoadTime = a.l.K;
                    f.sdkImplLoadTime = a.l.L;
                    f.supportsResizing = !gC(a.g);
                    m = D().location.ancestorOrigins;
                    f.topOrigin = m ? 0 < m.length && 200 > m[m.length - 1].length ? m[m.length - 1] : '' : null;
                    f.osdId = a.C;
                    f.usesCustomVideoPlayback = gC(a.g);
                    f.usesInlinePlayback = a.g.D;
                    k = a.g.F;
                    m = [];
                    v = n = '';
                    if (null != k) {
                        n = k;
                        v = !0;
                        v = void 0 === v ? !1 : v;
                        for (var r = [], w = 0; n && 25 > w; ++w) {
                            var B = '';
                            void 0 !== v && v || (B = (B = 9 !== n.nodeType && n.id) ? '/' + B : '');
                            a: {
                                if (n && n.nodeName && n.parentElement) {
                                    var M = n.nodeName.toString().toLowerCase();
                                    for (var Ka = n.parentElement.childNodes, Vc = 0, Ad = 0; Ad < Ka.length; ++Ad) {
                                        var Ra = Ka[Ad];
                                        if (Ra.nodeName && Ra.nodeName.toString().toLowerCase() === M) {
                                            if (n === Ra) {
                                                M = '.' + Vc;
                                                break a;
                                            }
                                            ++Vc;
                                        }
                                    }
                                }
                                M = '';
                            }
                            r.push((n.nodeName && n.nodeName.toString().toLowerCase()) + B + M);
                            n = n.parentElement;
                        }
                        n = r.join();
                        if (k) {
                            k = (k = k.ownerDocument) && (k.defaultView || k.parentWindow) || null;
                            v = [];
                            if (k)
                                try {
                                    var T = k.parent;
                                    for (r = 0; T && T !== k && 25 > r; ++r) {
                                        var $c = T.frames;
                                        for (w = 0; w < $c.length; ++w)
                                            if (k === $c[w]) {
                                                v.push(w);
                                                break;
                                            }
                                        k = T;
                                        T = k.parent;
                                    }
                                } catch (zD) {
                                }
                            v = v.join();
                        } else
                            v = '';
                    }
                    m.push(n, v);
                    if (null != g) {
                        for (T = 0; T < vt.length - 1; ++T)
                            m.push(Af(g, vt[T]) || '');
                        T = Af(g, 'videoad_start_delay');
                        $c = '';
                        T && (T = parseInt(T, 10), $c = 0 > T ? 'postroll' : 0 == T ? 'preroll' : 'midroll');
                        m.push($c);
                    } else
                        for (T = 0; T < vt.length; ++T)
                            m.push('');
                    T = m.join(':');
                    $c = T.length;
                    if (0 == $c)
                        T = 0;
                    else {
                        g = 305419896;
                        for (m = 0; m < $c; m++)
                            g ^= (g << 5) + (g >> 2) + T.charCodeAt(m) & 4294967295;
                        T = 0 < g ? g : 4294967296 + g;
                    }
                    f = (f.videoAdKey = T.toString(), f);
                    T = {};
                    d = (T.consentSettings = d, T.imalibExperiments = e, T.settings = h, T.videoEnvironment = f, T);
                    e = {};
                    e.adsResponse = c.adsResponse;
                    e.videoPlayActivation = c.videoPlayActivation;
                    e.videoPlayMuted = c.videoPlayMuted;
                    e.videoContinuousPlay = c.videoContinuousPlay;
                    e.adTagUrl = c.adTagUrl;
                    e.contentDuration = c.contentDuration;
                    e.contentKeywords = c.contentKeywords;
                    e.contentTitle = c.contentTitle;
                    e.linearAdSlotWidth = c.linearAdSlotWidth;
                    e.linearAdSlotHeight = c.linearAdSlotHeight;
                    e.nonLinearAdSlotWidth = c.nonLinearAdSlotWidth;
                    e.nonLinearAdSlotHeight = c.nonLinearAdSlotHeight;
                    e.forceNonLinearFullSlot = c.forceNonLinearFullSlot;
                    e.liveStreamPrefetchSeconds = c.liveStreamPrefetchSeconds;
                    e.vastLoadTimeout = c.vastLoadTimeout;
                    e.omidAccessModeRules = c.omidAccessModeRules;
                    e.pageUrl = c.pageUrl;
                    Object.assign(d, e);
                    if (a.o && W.h) {
                        e = a.o;
                        c = new Bx();
                        e = !Sx(e);
                        He(c, 5, e);
                        e = a.D;
                        if (0 === e.h) {
                            if (MC(e, c))
                                h = !0;
                            else if (h = e.g, De(c, 5) && 'null' !== h.origin && new Hs(h.document).set('GoogleAdServingTest', 'Good', void 0), h = 'Good' === KC('GoogleAdServingTest', c, e.g))
                                f = e.g, De(c, 5) && 'null' !== f.origin && new Hs(f.document).remove('GoogleAdServingTest', void 0, void 0);
                            e.h = h ? 2 : 1;
                        }
                        d.isBrowserCookieEnabled = 2 === e.h;
                        c = MC(a.D, c);
                        null !== c && (d.gfpCookieValue = c);
                    }
                    d.trustTokenStatus = a.A.trustTokenStatus;
                    if (c = Iy(gz(a.o)))
                        a.A.espSignals = c, d.espSignals = c;
                    d.isEapLoader = !1;
                    b = UB(a.l, b);
                    a.H.O(b, 'adsLoader', a.M);
                    oy(b, 'adsLoader', 'requestAds', d);
                }, pD = function (a) {
                    oD(new jD(function (b) {
                        a.A.trustTokenStatus = b;
                        yD(a);
                    }));
                };
            qD.prototype.contentComplete = qD.prototype.contentComplete;
            qD.prototype.getSettings = qD.prototype.getSettings;
            qD.prototype.requestAds = qD.prototype.requestAds;
            qD.prototype.getVersion = qD.prototype.getVersion;
            qD.prototype.destroy = qD.prototype.destroy;
            x('google.ima.AdCuePoints', kB, window);
            x('google.ima.AdDisplayContainer', hC, window);
            x('google.ima.AdError.ErrorCode', {
                DEPRECATED_ERROR_CODE: -1,
                VAST_MALFORMED_RESPONSE: 100,
                VAST_SCHEMA_VALIDATION_ERROR: 101,
                VAST_UNSUPPORTED_VERSION: 102,
                VAST_TRAFFICKING_ERROR: 200,
                VAST_UNEXPECTED_LINEARITY: 201,
                VAST_UNEXPECTED_DURATION_ERROR: 202,
                VAST_WRAPPER_ERROR: 300,
                VAST_LOAD_TIMEOUT: 301,
                VAST_TOO_MANY_REDIRECTS: 302,
                VAST_NO_ADS_AFTER_WRAPPER: 303,
                VIDEO_PLAY_ERROR: 400,
                VAST_MEDIA_LOAD_TIMEOUT: 402,
                VAST_LINEAR_ASSET_MISMATCH: 403,
                VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
                OVERLAY_AD_PLAYING_FAILED: 500,
                NONLINEAR_DIMENSIONS_ERROR: 501,
                Ig: 502,
                jh: 503,
                Lf: 602,
                Gf: 603,
                UNKNOWN_ERROR: 900,
                VPAID_ERROR: 901,
                FAILED_TO_REQUEST_ADS: 1005,
                VAST_ASSET_NOT_FOUND: 1007,
                VAST_EMPTY_RESPONSE: 1009,
                UNKNOWN_AD_RESPONSE: 1010,
                UNSUPPORTED_LOCALE: 1011,
                ADS_REQUEST_NETWORK_ERROR: 1012,
                INVALID_AD_TAG: 1013,
                STREAM_INITIALIZATION_FAILED: 1020,
                ASSET_FALLBACK_FAILED: 1021,
                INVALID_ARGUMENTS: 1101,
                Bg: 1204,
                AUTOPLAY_DISALLOWED: 1205,
                CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
                Yg: 2002
            }, window);
            x('google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED', -1, window);
            x('google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED', -1, window);
            x('google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR', -1, window);
            x('google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE', -1, window);
            x('google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED', -1, window);
            x('google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE', -1, window);
            x('google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED', -1, window);
            x('google.ima.AdError.Type', jC, window);
            x('google.ima.AdErrorEvent.Type', lC, window);
            x('google.ima.AdEvent.Type', nC, window);
            x('google.ima.AdsLoader', qD, window);
            x('google.ima.AdsManagerLoadedEvent.Type', HC, window);
            x('google.ima.CompanionAdSelectionSettings', cy, window);
            x('google.ima.CompanionAdSelectionSettings.CreativeType', dy, void 0);
            x('google.ima.CompanionAdSelectionSettings.ResourceType', ey, void 0);
            x('google.ima.CompanionAdSelectionSettings.SizeCriteria', fy, void 0);
            x('google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED', 'deprecated-event', window);
            x('ima.ImaSdkSettings', V, window);
            x('google.ima.settings', W, window);
            x('google.ima.ImaSdkSettings.CompanionBackfillMode', {
                ALWAYS: 'always',
                ON_MASTER_AD: 'on_master_ad'
            }, void 0);
            x('google.ima.ImaSdkSettings.VpaidMode', {
                DISABLED: 0,
                ENABLED: 1,
                INSECURE: 2
            }, void 0);
            x('google.ima.AdsRenderingSettings', fA, window);
            x('google.ima.AdsRenderingSettings.AUTO_SCALE', -1, window);
            x('google.ima.AdsRequest', IC, window);
            x('google.ima.VERSION', '3.473.0', void 0);
            x('google.ima.OmidAccessMode', {
                LIMITED: 'limited',
                DOMAIN: 'domain',
                FULL: 'full'
            }, void 0);
            x('google.ima.UiElements', {
                AD_ATTRIBUTION: 'adAttribution',
                COUNTDOWN: 'countdown'
            }, void 0);
            x('google.ima.ViewMode', {
                NORMAL: 'normal',
                FULLSCREEN: 'fullscreen'
            }, void 0);
        }());
    }())
}