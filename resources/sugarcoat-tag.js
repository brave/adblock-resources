{
    const $___mock_33bfcac5c9fafdd3 = {};
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
    })($___mock_33bfcac5c9fafdd3);
    (function () {
        !function (n) {
            var t = {};
            function e(r) {
                if (t[r])
                    return t[r].exports;
                var i = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return n[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
            }
            e.m = n, e.c = t, e.d = function (n, t, r) {
                e.o(n, t) || Object.defineProperty(n, t, {
                    enumerable: !0,
                    get: r
                });
            }, e.r = function (n) {
                'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(n, '__esModule', { value: !0 });
            }, e.t = function (n, t) {
                if (1 & t && (n = e(n)), 8 & t)
                    return n;
                if (4 & t && 'object' === typeof n && n && n.__esModule)
                    return n;
                var r = Object.create(null);
                if (e.r(r), Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: n
                    }), 2 & t && 'string' != typeof n)
                    for (var i in n)
                        e.d(r, i, function (t) {
                            return n[t];
                        }.bind(null, i));
                return r;
            }, e.n = function (n) {
                var t = n && n.__esModule ? function () {
                    return n['default'];
                } : function () {
                    return n;
                };
                return e.d(t, 'a', t), t;
            }, e.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t);
            }, e.p = '', e(e.s = 2);
        }({
            2: function (n, t, e) {
                const $___old_0254a297373fa644 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_30ef1eec6df95a8f = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                try {
                    if ($___old_0254a297373fa644)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_33bfcac5c9fafdd3.localStorage));
                    if ($___old_30ef1eec6df95a8f)
                        ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_33bfcac5c9fafdd3.sessionStorage));
                    return function () {
                        function r(n, t) {
                            try {
                                return window.eval.apply(window, [n]);
                            } catch (e) {
                                t && t(e);
                            }
                        }
                        e.r(t);
                        var i = function () {
                            var n;
                            return function (t, e) {
                                var r = e || document;
                                return 'undefined' === typeof n && (n = new BrightTag.HTTP.URL(r.location.href)), n.param(t);
                            };
                        }();
                        function o(n, t) {
                            var e = BrightTag.V2_RESPONSE ? BrightTag.configuredSites()[0] : BrightTag.instance;
                            return e ? e.data(n, t) : '';
                        }
                        function a(n) {
                            window.console && console.log && console.log('Yahoo Japan: ' + n);
                        }
                        function u(n, t) {
                            return n || t;
                        }
                        function c(n, t) {
                            return Object.prototype.toString.call(n) === '[object ' + t + ']';
                        }
                        var f = {
                            isString: function (n) {
                                return c(n, 'String');
                            },
                            isArray: function (n) {
                                return c(n, 'Array');
                            },
                            isNumber: function (n) {
                                return c(n, 'Number');
                            },
                            isBoolean: function (n) {
                                return c(n, 'Boolean');
                            },
                            isFunction: function (n) {
                                return c(n, 'Function');
                            },
                            isObject: function (n) {
                                return null !== n && n !== undefined && c(n, 'Object');
                            }
                        };
                        function s(n) {
                            return (n || '').substring(1);
                        }
                        function d(n) {
                            return '\n//at-sourceURL=/BrightTag/' + n.replace(/\s+/g, '_') + '.js';
                        }
                        var l = r;
                        var p = u(Array.prototype.forEach, function (n, t) {
                            for (var e = 0, r = this.length; e < r; e++)
                                n.call(t, this[e], e, this);
                        });
                        function g(n, t, e) {
                            for (var r in n)
                                n.hasOwnProperty(r) && t.call(e, r, n[r], n);
                        }
                        function h(n) {
                            return f.isArray(n) || !f.isString(n) && n.length;
                        }
                        function v(n) {
                            return !!n;
                        }
                        var m = u(Array.prototype.filter, function (n, t) {
                            var e = Array.isArray(this) ? this.slice() : Array.from(this), r = [];
                            return p.call(e, function (e, i) {
                                n.call(t, e, i, this) && r.push(e);
                            }), r;
                        });
                        var y = u(Array.prototype.map, function (n, t) {
                            var e = Array.isArray(this) ? this.slice() : Array.from(this), r = new Array(e.length);
                            return p.call(e, function (e, i) {
                                r[i] = n.call(t, e, i, this);
                            }), r;
                        });
                        var w = {
                            contains: function (n, t) {
                                for (var e = f.isArray(n) ? n : [n], r = 0, i = e.length; r < i; r++)
                                    if (e[r] === t)
                                        return !0;
                                return !1;
                            },
                            each: function (n, t, e) {
                                n && (h(n) ? p.call(n, t, e) : f.isObject(n) && g(n, t, e));
                            },
                            extend: function (n, t) {
                                return g(t, function (t, e) {
                                    n[t] = e;
                                }), n;
                            },
                            filter: function (n, t, e) {
                                if (n)
                                    return m.call(h(n) ? n : [n], t || v, e);
                            },
                            map: function (n, t, e) {
                                if (n)
                                    return y.call(h(n) ? n : [n], t, e);
                            },
                            trim: function (n) {
                                return n.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                            },
                            getTagserveHostOverride: T
                        };
                        function b(n) {
                            return f.isString(n) ? n.replace(/%/g, '%25').replace(/#/g, '%23').replace(/&/g, '%26').replace(/'/g, '%27').replace(/;/g, '%3B').replace(/</g, '%3C').replace(/>/g, '%3E') : n;
                        }
                        function S(n) {
                            for (var t = 5381, e = 0, r = n.length; e < r;)
                                t = (t << 5) + t + n.charCodeAt(e++);
                            return t.toString(36);
                        }
                        function T(n) {
                            if (function (n) {
                                    return 's.yjtag.jp' === n;
                                }(n) && 'false' !== BrightTag.HTTP.Cookie(document).get('testyjproxy'))
                                return 'yjtag.yahoo.co.jp';
                        }
                        var x = {
                                cookie: b,
                                javascript: function (n) {
                                    return f.isString(n) ? n.replace(/\\/g, '\\\\').replace(/'/g, '\\x27').replace(/"/g, '\\x22').replace(/\n/g, '\\n').replace(/\r/g, '\\r') : n;
                                }
                            }, O = {
                                integer: function (n) {
                                    return Math.floor(Math.random() * (n || 100000000));
                                }
                            };
                        function j(n, t, e) {
                            n && n.constructor == Array && null != t && n.push(e || t);
                        }
                        var _ = {
                            pushImage: function (n) {
                                throw new Image().src = n, 'CookieSync.pushImage no longer supported [' + n + ']';
                            },
                            pushIframe: function (n) {
                                throw 'CookieSync.pushIframe no longer supported [' + n + ']';
                            }
                        };
                        function E(n) {
                            var t = this, e = {};
                            function r(n, t) {
                                return null == n[t] ? i(n, t) : n[t];
                            }
                            function i(n, t) {
                                return n[t] = [];
                            }
                            function o(n) {
                                var t = {};
                                return f.isString(n) ? (w.each(n.split('&'), function (n) {
                                    if ('' !== n) {
                                        var e = n.split('='), i = (o = e[0], a = e[1], {
                                                key: decodeURIComponent(o),
                                                value: a && decodeURIComponent(a.replace(/\+/g, ' '))
                                            });
                                        r(t, i.key).push(i.value);
                                    }
                                    var o, a;
                                }), t) : n;
                            }
                            function a(n, t) {
                                var e = [];
                                return w.each(n, function (n) {
                                    if (f.isObject(n))
                                        return !1;
                                    var r = function (n) {
                                        return null == n || '' === n;
                                    }(n) ? t : n;
                                    (function (n) {
                                        return f.isString(n) || f.isNumber(n) || f.isBoolean(n);
                                    }(r) && e.push(r));
                                }), e;
                            }
                            function u(n, t) {
                                t.length > 0 && (e[n] = r(e, n).concat(t));
                            }
                            function c(n, t) {
                                t.length > 0 && (e[n] = i(e, n).concat(t));
                            }
                            function s(n) {
                                return f.isArray(n) ? n : [n];
                            }
                            function d(n, t) {
                                var e = function (n, t) {
                                    return {
                                        key: encodeURIComponent(n),
                                        value: encodeURIComponent(t)
                                    };
                                }(n, t);
                                return e.key + '=' + e.value;
                            }
                            w.extend(e, o(n)), t.param = function (n) {
                                var t = e[n] || [''];
                                return t.length > 1 ? t : t[0];
                            }, t.params = function () {
                                return e;
                            }, t.appendParam = function (n, t) {
                                return n && u(n, a(s(t))), this;
                            }, t.replaceParam = function (n, t) {
                                return n && c(n, a(s(t))), this;
                            }, t.appendParams = function (n) {
                                return w.each(n, t.appendParam), this;
                            }, t.alwaysAppendParam = function (n, t) {
                                return n && u(n, a(s(t), '')), this;
                            }, t.alwaysReplaceParam = function (n, t) {
                                return n && c(n, a(s(t), '')), this;
                            }, t.alwaysAppendParams = function (n) {
                                return w.each(n, t.alwaysAppendParam), this;
                            }, t.appendPartialQueryString = function (n) {
                                return n && t.alwaysAppendParams(o(n)), this;
                            }, t.deleteParam = function (n) {
                                delete e[n];
                            }, t.toString = function () {
                                var n = [];
                                return w.each(e, function (t, e) {
                                    w.each(e, function (e) {
                                        n.push(d(t, e));
                                    });
                                }), n.join('&');
                            };
                        }
                        var B = /^(?:([^:\/]+:)?\/\/)?([^:\/?#]+)?(:[0-9]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
                        function P(n) {
                            var t, e, r, i, o, a, u, c, f, d, l, p, g = n.match(B);
                            function h() {
                                var n = p.toString();
                                return o + a + (n.length > 0 ? '?' + n : '');
                            }
                            t = g[1] || '', r = g[2] || '', i = s(g[3]), o = t + ((e = r + (i ? ':' + i : '')) ? '//' + e : ''), u = (f = (a = g[4] || '').match(/^(.+?)?\/([^\/]+)?$/)) && f[1] || '', c = f && f[2] || '', d = s(g[5]), l = s(g[6]), p = new E(d);
                            var v = {};
                            return w.extend(v, p), w.extend(v, {
                                origin: o,
                                scheme: t,
                                host: e,
                                hostname: r,
                                port: i,
                                path: a,
                                pathname: u,
                                scriptname: c,
                                queryString: p.toString,
                                fragment: function () {
                                    return l;
                                },
                                tooLong: function () {
                                    return h().length > 2082;
                                },
                                asString: h
                            }), v.toString = h, v;
                        }
                        function N(n) {
                            var t = {}, e = new RegExp('([^=]+)=?(.*)'), r = /; ?/;
                            function i(n) {
                                return b(n);
                            }
                            function o(n) {
                                var i, o = n.split(r);
                                t = {};
                                for (var a = 0, u = o.length; a < u; a++) {
                                    var c = e.exec(o[a]);
                                    c && (t[c[1]] = (i = c[2], unescape(i)));
                                }
                            }
                            function a(n, t, e) {
                                e && n.push(t + '=' + e);
                            }
                            function u(n, t, e) {
                                !0 === e && n.push(t);
                            }
                            function c(t, e, r) {
                                if (t) {
                                    var c = r || {}, s = [t + '=' + i(e || '')];
                                    !function (n, t) {
                                        (t || 0 === t) && (f.isNumber(t) && (t = new Date(t).toUTCString()), n.push('expires=' + t));
                                    }(s, c.expires), a(s, 'path', c.path), a(s, 'domain', c.domain), u(s, 'Secure', c.secure), u(s, 'HttpOnly', c.httponly), function (t) {
                                        if (!(t.length < 4096))
                                            throw {
                                                name: 'CookieTooLongError',
                                                message: 'Cookie reached 4096 byte limit'
                                            };
                                        n.cookie = t;
                                    }(s.join(';')), o(n.cookie);
                                }
                            }
                            function s(n, t) {
                                c(n, '', w.extend(t || {}, { expires: 1 }));
                            }
                            return o(n.cookie || ''), {
                                get: function (n) {
                                    return t[n];
                                },
                                set: c,
                                remove: s,
                                findEach: function (n, e) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && r.match(n) && e(r, t[r]);
                                },
                                clear: function (n) {
                                    var e = w.extend({}, t);
                                    for (var r in e)
                                        s(r, n);
                                }
                            };
                        }
                        function R(n) {
                            var t, e = this, r = n.window, i = n.parentReferrer, u = n.referrer, c = P(0 === (t = n.host).length ? '' : (/^[a-z0-9+.-]+:\/\/.+/.test(t) ? '' : '//') + t + '/tag'), s = n.store ? n.store.get('X-BT-InspectSession') : null;
                            function d(n, t) {
                                t && t.findEach(n, function (n, t) {
                                    e.appendParam(n, t);
                                });
                            }
                            function p(n) {
                                return '_cb_' + n;
                            }
                            function g(n, t) {
                                return function (e) {
                                    a('invalid ' + n + ' expression: ' + t + ', exception = ' + e);
                                };
                            }
                            w.extend(e, c), e.toString = c.toString, e.appendParams({
                                site: n.site,
                                referrer: u,
                                docReferrer: n.docReferrer,
                                mode: n.mode,
                                H: S(u || n.document.location.href)
                            }), s && e.appendParam('inspect-session', s), u !== i && e.appendParam('parentReferrer', i), d(/^btps\..+/, new N(n.document)), d(/^btpdb\..+/, n.store), e.appendData = function (n) {
                                var t = o(n), i = function (n) {
                                        return f.isArray(n) || f.isObject(n);
                                    }(t) ? r.JSON.stringify(t) : t;
                                return e.alwaysReplaceParam(function (n) {
                                    return p('bt_data(\'' + n + '\')');
                                }(n), i);
                            }, e.appendJs = function (n) {
                                var t = g('client binding expression', n);
                                return e.alwaysReplaceParam(p(n), l(n, t));
                            }, e.cf = function (n) {
                                f.isArray(n) || (n = [n]);
                                var t = e.param('cf');
                                return t && (n = new Array(t).concat(n)), e.replaceParam('cf', n.join()), e;
                            }, e.addCf = function (n, t) {
                                if (!l(t, g('conditional fire', t)))
                                    return !1;
                                var r = e.param('cf');
                                return e.replaceParam('cf', r ? r + ',' + n : n), !0;
                            }, e.length = function () {
                                return e.toString().length;
                            }, e.isTooLarge = function () {
                                return e.length() > 2028;
                            };
                            var h = e.toString();
                            e.hasConditions = function () {
                                return h != e.toString();
                            };
                        }
                        function A(n, t) {
                            return new function (n, t) {
                                var e, r = {}, i = BrightTag.Blab.group(t), o = '';
                                function a(n) {
                                    i.wait(n);
                                }
                                function u(n) {
                                    function t() {
                                        e = BrightTag.jQuery, a(n);
                                    }
                                    o = 'var $ = BrightTag.$; ', BrightTag.jQuery ? t() : i.script(BrightTag.instance.baseUri() + 'jquery.js').wait(t);
                                }
                                return r.getJQuery = function () {
                                    return e;
                                }, r.ensureJQuery = function (i) {
                                    r.ensureJQuery = a, ((e = n.jQuery) ? a : u)(i), BrightTag.Blab.run(t);
                                }, r.functionWithAccess = function (n, t) {
                                    return new Function(n, o + t);
                                }, r;
                            }(n, t);
                        }
                        function k(n) {
                            var t = n.createElement('div');
                            function e(n, t) {
                                n.src ? t.preemptScript(n.src, n.innerHTML) : n.innerHTML && t.preemptWait(n.innerHTML);
                            }
                            function r(t) {
                                try {
                                    n.body.appendChild(t.cloneNode(!0));
                                } catch (e) {
                                    window.bt_log('error appending content to body: ' + e);
                                }
                            }
                            function i(n) {
                                return 'SCRIPT' == n.tagName;
                            }
                            function o(n, t) {
                                for (var r = n.childNodes || [], a = 0, u = r.length; a < u; a++) {
                                    var c = r[a];
                                    i(c) ? e(c, t) : o(c, t);
                                }
                            }
                            return {
                                process: function (n, a) {
                                    if (0 !== a.length) {
                                        t.innerHTML = '<br/>' + a;
                                        for (var u = t.childNodes || [], c = 1, f = u.length; c < f; c++) {
                                            var s = u[c];
                                            i(s) ? e(s, n) : (r(s), o(s, n));
                                        }
                                    }
                                }
                            };
                        }
                        var I = function () {
                            function n() {
                            }
                            var t, e = [], r = function (n) {
                                    t.push(n);
                                };
                            function i(n, t, e) {
                                try {
                                    n[t] = e;
                                } catch (r) {
                                    a('warning: could not assign value to \'document.' + t + '\': ' + r);
                                }
                            }
                            return function (o, a) {
                                var u;
                                this['block:start'] = function () {
                                    !function (o) {
                                        e.push([
                                            t,
                                            o.write,
                                            o.writeln,
                                            o.open,
                                            o.close
                                        ]), t = [], i(o, 'write', r), i(o, 'writeln', r), i(o, 'open', n), i(o, 'close', n);
                                    }(o);
                                }, this['block:finish'] = function () {
                                    try {
                                        a.process(u, t.join(''));
                                    } finally {
                                        !function (n) {
                                            var r = e.pop();
                                            t = r[0], i(n, 'write', r[1]), i(n, 'writeln', r[2]), i(n, 'open', r[3]), i(n, 'close', r[4]);
                                        }(o);
                                    }
                                }, this['engine:listen'] = function (n) {
                                    u = n;
                                };
                            };
                        }();
                        function L(n, t) {
                            return {
                                'engine:listen': function (e) {
                                    e.listen(new I(n, t));
                                }
                            };
                        }
                        function C(n, t, e, r) {
                            var i = !1, o = {};
                            return o[r] = !0, {
                                tag: function (t, a) {
                                    var u = function (n) {
                                        var t, e, o = (e = 'group', (t = n) && t[e]);
                                        return i || o ? o : r;
                                    }(a);
                                    !function (t, r, i) {
                                        var o = n.group(i).options(r || {});
                                        o.wait(function () {
                                            e.process(o, t);
                                        });
                                    }(t, a, u), u && function (n) {
                                        return o[n] === undefined;
                                    }(u) && (o[u] = !0, i && n.run(u));
                                },
                                run: function () {
                                    n.addGlobalListener(L(t, e)), i = !0, w.each(o, n.run);
                                }
                            };
                        }
                        function J(n) {
                            return {
                                dbe: function (t, e, r) {
                                    n.push({
                                        type: 'dbe',
                                        message: t.toString(),
                                        'dbe.name': e,
                                        pageId: (r || {}).pageId || -1
                                    });
                                },
                                events: function (t, e, r) {
                                    var i = t.type, o = 'evdbe' === i ? 'pageId' : 'tagId', a = {
                                            type: i,
                                            message: t.toString()
                                        };
                                    w.each(e, function (n, t) {
                                        a[i + '.' + n] = t;
                                    }), a[o] = (r || {})[o] || -1, n.push(a);
                                },
                                'block:error': function (t, e) {
                                    if (e) {
                                        var r = e.type, i = e.exception || e, o = t.option('tagId') || -1;
                                        n.push({
                                            type: r,
                                            message: i.toString(),
                                            tagId: o
                                        });
                                    }
                                }
                            };
                        }
                        function M(n, t) {
                            var e = this, i = n.data || {}, o = n.document || {}, a = n.window || {}, u = n.blab || BrightTag.Blab, c = n.errorManager, s = n.store, d = k(o), p = n.asyncTagManager || C(u, o, d, 'domready'), g = A(window, 'jquery');
                            function h(n) {
                                w.each(f.isArray(n) ? n : [n], function (n) {
                                    f.isFunction(n) ? n() : o.write('<script type="text/javascript" src="' + n + '"></script>');
                                });
                            }
                            function v(n) {
                                var t = u.group().options({ tagId: -2 });
                                w.each(f.isArray(n) ? n : [n], function (n) {
                                    (f.isFunction(n) ? t.wait : t.script)(n);
                                });
                            }
                            function m(n) {
                                o.write(n);
                            }
                            function y(n, t) {
                                p.tag(n, t);
                            }
                            function b(n) {
                                e.writeScript = n ? h : v, e.appendContent = n ? m : y;
                            }
                            function S() {
                                return w.contains(n.mode, 'sync');
                            }
                            function T(t) {
                                c.hasErrors() && (t.appendParam('errors', c.toJSON()), t.tooLong() && (t.deleteParam('errors'), c.tooManyErrors(), t.appendParam('errors', c.toJSON()))), c.reset({
                                    site: n.site,
                                    referrer: n.referrer || o.location.href
                                });
                            }
                            e.referrer = n.referrer, e.parentReferrer = n.parentReferrer, e.docReferrer = n.docReferrer, e.site = n.site, e.host = n.host, e.loadOnly = !!n.loadOnly, c && u.addGlobalListener(new J(c)), u.run('serializer'), e.load = function () {
                                var n = Array.prototype.slice.call(arguments, 0);
                                w.each(n, function (n) {
                                    f.isFunction(n) ? u.addToGroup('serializer', u.newEngine().wait(function () {
                                        n(e);
                                    })) : f.isObject(n) && n.src ? e.library(n.src, n.options) : f.isString(n) && e.library(n);
                                });
                            }, e.library = function (n, t) {
                                u.addToGroup('serializer', u.newEngine().options(t || {}).script(n));
                            }, b(S()), e.domReady = function () {
                                S() && b(!1), p.run();
                            }, e.parameter = function (n) {
                                return window.bt_parameter(n, o);
                            }, e.meta = function (n) {
                                return window.bt_meta(n, o);
                            }, e.cookie = function (n) {
                                return window.bt_cookie(n, o);
                            }, e.data = function (n, t) {
                                return t !== undefined ? (i[n] = t, t) : null == (t = i[n]) ? '' : t;
                            }, e.dbe = function (n, t, r) {
                                if (null == i[n]) {
                                    var o = 'page-dbes/' + n + '-page-' + (r && r.pageId || 'adhoc');
                                    e.data(n, l(t, function (t) {
                                        c && function (n, t, e) {
                                            c.push({
                                                type: 'dbe',
                                                message: t.toString(),
                                                'dbe.name': n,
                                                pageId: e.pageId || -1
                                            });
                                        }(n, t, r || {});
                                    }, o));
                                }
                            }, e.errors = function (n) {
                                BrightTag.V2_RESPONSE = !1, c.configure(n);
                            }, e.store = s ? function (n) {
                                w.each(n, function (n) {
                                    if (n.name) {
                                        var t = w.extend({}, n);
                                        delete t.name, delete t.value, s.set(n.name, n.value, t);
                                    }
                                });
                            } : function () {
                            }, e.serverURL = function () {
                                return new R(n);
                            }, e.defaultBaseUri = function () {
                                return ('https:' == o.location.protocol ? 'https:' : 'http:') + '//static-s.tgm.yahoo-net.jp/';
                            }, e.baseUri = function () {
                                return t && t.src && t.src.replace(/\btag(\.[^.]+|-n)?\.js(#.*)?$/, '') || e.defaultBaseUri();
                            }, e.primary = function () {
                                function n() {
                                    var n = e.serverURL();
                                    return c && (c.processStoredErrors(), T(n)), n.toString();
                                }
                                var t = [];
                                a.JSON ? t.push(n()) : (t.push(e.baseUri() + 'json2.js'), t.push(function () {
                                    e.writeScript(n());
                                })), e.writeScript(t);
                            }, e.secondary = function (n) {
                                var t = e.serverURL(), r = t.toString();
                                n(t), t.toString() != r && (t.appendParam('mode', 'v1'), c && T(t), t.isTooLarge() ? e.post(t) : e.writeScript(t.toString()));
                            }, e.post = function (n) {
                                g.ensureJQuery(function () {
                                    g.getJQuery().ajax({
                                        url: 'https://' + n.host + n.path,
                                        type: 'POST',
                                        dataType: 'text',
                                        success: r,
                                        data: n.queryString(),
                                        xhrFields: { withCredentials: !0 }
                                    });
                                });
                            };
                        }
                        function D(n) {
                            var t, e, r = function () {
                                    var t, e, r = /\/tag(\.[^.]+|-n)?\.js(#.*)?$/, i = n.document.getElementsByTagName('script');
                                    for (t = i.length - 1; t > -1; t--)
                                        if (e = i[t], r.test(e.src))
                                            return e;
                                }();
                            if (r) {
                                var i = new P(r.src);
                                n.host = n.host || T(i.host), function (t) {
                                    var e = t.fragment();
                                    e && w.each(new E(e).params(), function (t, e) {
                                        n[t] = e[0];
                                    });
                                }(i), e = r.innerHTML, 0 !== (e = w.trim(e)).length && w.extend(n, l('(\n' + e + '\n)', function (n) {
                                    window.bt_log('configuration error: ' + n);
                                }, 'site-config'));
                            }
                            if (null != n.site) {
                                BrightTag.Events.enablePageReadyOverrides();
                                try {
                                    t = new M(n, r), BrightTag.Events.onDOMReady(t.domReady), t.loadOnly || t.primary();
                                } catch (o) {
                                    window.bt_log('execution error: ' + o);
                                }
                                return t;
                            }
                        }
                        function Q(n, t) {
                            var e = {}, r = {}, i = A(n, 'BrightTag.jQuery'), o = /^direct\//i;
                            function a(n, e) {
                                w.each(e, function (t, e) {
                                    n[n.type + '.' + t] = e;
                                }), t.push(n);
                            }
                            function u(n, t, e, r) {
                                a({
                                    type: n,
                                    message: t,
                                    tagId: e || -1
                                }, r);
                            }
                            function c(n, t, e) {
                                var r = BrightTag.instance.serverURL();
                                w.each(n, function (n) {
                                    n.trigger(t, e, r);
                                }), r.hasConditions() && (r.appendParam('mode', 'v1'), BrightTag.Blab.script(r.asString()));
                            }
                            function s(n, t, e) {
                                var o = {}, u = [], f = {}, s = (t || {}).pageId;
                                function l(t, r) {
                                    w.each(u, function (o) {
                                        var u = o.name;
                                        try {
                                            var c = f[o.dbe];
                                            c || (c = f[o.dbe] = function (t, e) {
                                                var r = d('event-dbes/' + e + '-page-' + (s || 'adhoc') + '-event-' + n);
                                                return i.functionWithAccess([
                                                    'eventObject',
                                                    'eventData'
                                                ], 'return ' + t + ';' + r);
                                            }(o.dbe, u)), e.data(u, c.call(t.target, t, r));
                                        } catch (l) {
                                            !function (n, t, e, r) {
                                                a({
                                                    type: n,
                                                    message: t,
                                                    pageId: e || -1
                                                }, r);
                                            }('evdbe', l.toString(), s, {
                                                name: u,
                                                eventName: n
                                            });
                                        }
                                    });
                                }
                                return o.data = function (n, t) {
                                    return u.push({
                                        name: n,
                                        dbe: t
                                    }), o;
                                }, o.applyDataBindings = l, o.handler = function (t) {
                                    var e = r[n];
                                    if (e && e.length > 0) {
                                        var i = Array.prototype.slice.call(arguments, 1);
                                        l(t, i), c(e, t, i);
                                    }
                                }, o;
                            }
                            function p(n, t, e) {
                                return !function (n, t) {
                                    return !f.isString(n) || o.test(t);
                                }(n, e) && (t.on || t.live);
                            }
                            function g(n) {
                                var t, e, r = {}, o = {}, a = [], c = [], s = [];
                                function p() {
                                    var n, e, r = (n = 'post-event conditional fire', e = t, function (t) {
                                            window.bt_log('Invalid ' + n + ' expression: ' + e + ', exception = ' + t);
                                        });
                                    return !t || l(t, r);
                                }
                                return r.execute = function (t, a) {
                                    return w.extend(o, a || {}), f.isFunction(t) ? e = t : f.isString(t) ? e = function (t) {
                                        try {
                                            var e = d('events/' + n + '-tag-' + (o.tagId || 'adhoc'));
                                            return i.functionWithAccess([
                                                'eventObject',
                                                'eventData'
                                            ], t + e);
                                        } catch (r) {
                                            u('evparse', r.toString(), o.tagId, { eventName: n });
                                        }
                                    }(t) : window.bt_log('when.execute: unknown action: ' + t), r;
                                }, r.evaluate = function (n) {
                                    return t = n, r;
                                }, r.fire = function (n) {
                                    return a.push(n), r;
                                }, r.appendData = function (n) {
                                    return c.push(n), r;
                                }, r.appendJs = function (n) {
                                    return s.push(n), r;
                                }, r.trigger = function (t, r, i) {
                                    p() && (function (t, r) {
                                        try {
                                            e && e.call(t.target, t, r);
                                        } catch (i) {
                                            u('evwait', i.toString(), o.tagId, { eventName: n });
                                        }
                                    }(t, r), function (n) {
                                        a.length > 0 && (n.cf(a), w.each(c, function (t) {
                                            n.appendData(t);
                                        }), w.each(s, function (t) {
                                            n.appendJs(t);
                                        }));
                                    }(i));
                                }, r;
                            }
                            return e.executeActions = c, e.Binder = s, e.bind = function (n, t, e, r) {
                                var a = s(n, r, BrightTag.instance);
                                return i.ensureJQuery(function () {
                                    var n = i.getJQuery(), r = n(t);
                                    p(t, r, e) ? r.on ? n(document).on(e, t, a.handler) : r.live(e, a.handler) : r.bind ? r.bind(e.split(o).pop(), a.handler) : r.on(e.split(o).pop(), a.handler);
                                }), a;
                            }, e.EventAction = g, e.when = function (n) {
                                return function (n, t) {
                                    var e = r[n];
                                    return e || (e = r[n] = []), e.push(t), t;
                                }(n, g(n));
                            }, e;
                        }
                        function H(n, t, e) {
                            if (!n)
                                throw new Error('ErrorManager requires a store');
                            var r, i, o = !0, a = [], u = +new Date();
                            function c(n) {
                                n.hasOwnProperty('enabled') && (o = n.enabled), n.hasOwnProperty('timestamp') && (u = n.timestamp, o = !0), n.hasOwnProperty('site') && (r = n.site), n.hasOwnProperty('referrer') && (i = n.referrer);
                            }
                            function s(e) {
                                e && c(e), a = [], n.remove(t);
                            }
                            function d() {
                                try {
                                    return JSON.stringify({
                                        site: r,
                                        referrer: i,
                                        errors: a
                                    });
                                } catch (n) {
                                    window.bt_log('problem serializing errors: ' + n.message);
                                }
                                return null;
                            }
                            function l(e) {
                                a.push(function (n) {
                                    var t = f.isObject(n) ? w.extend({}, n) : {};
                                    return t.type = t.type || 'unknown', t.message = t.message || n.toString(), t.timestamp = u, t;
                                }(e)), n.set(t, d());
                            }
                            function p() {
                                s(), l({
                                    type: 'runtime',
                                    message: 'Too many errors'
                                });
                            }
                            return e && c(e), {
                                configure: c,
                                reset: s,
                                hasErrors: function () {
                                    return a.length > 0;
                                },
                                tooManyErrors: p,
                                processStoredErrors: function () {
                                    !function (n) {
                                        if (n)
                                            try {
                                                var t = JSON.parse(n) || {};
                                                r = t.site, i = t.referrer, f.isArray(t.errors) && (a = a.concat(t.errors));
                                            } catch (e) {
                                                window.bt_log('problem reading stored errors: ' + e.message);
                                            }
                                    }(n.get(t));
                                },
                                push: function (n) {
                                    if (window.bt_log('error: ' + JSON.stringify(n)), o && n && !(n.tagId < -1 || n.pageId < -1))
                                        try {
                                            l(n);
                                        } catch (t) {
                                            if ('CookieTooLongError' != t.name)
                                                throw t;
                                            p();
                                        }
                                },
                                toJSON: d,
                                toArray: function () {
                                    return a;
                                }
                            };
                        }
                        function U(n) {
                            var t = N(n), e = t.set, r = t.remove;
                            return t.set = function (n, t, r) {
                                var i = w.extend(r || {}, { path: '/' });
                                0 === i.expires && (i.expires = +new Date('1/1/2038')), e(n, t, i);
                            }, t.remove = function (n, t) {
                                r(n, w.extend(t || {}, { path: '/' }));
                            }, t.purge = function () {
                            }, t;
                        }
                        function F(n, t) {
                            function e(n) {
                                var t = n.expires;
                                return 0 !== t && t <= +new Date();
                            }
                            function r(t, e) {
                                n.setItem(t, e);
                            }
                            function i(n, r, i) {
                                var o = {
                                    value: r,
                                    expires: i
                                };
                                e(o) || t.setItem(n, JSON.stringify(o));
                            }
                            function o(t) {
                                return n.getItem(t);
                            }
                            function a(n) {
                                var e = t.getItem(n);
                                try {
                                    return e ? JSON.parse(e) : undefined;
                                } catch (r) {
                                    return undefined;
                                }
                            }
                            function u(n) {
                                return n && n.hasOwnProperty('value') && n.hasOwnProperty('expires');
                            }
                            function c(n) {
                                var t = a(n);
                                if (u(t) && !e(t)) {
                                    var r = t.value;
                                    return delete t.value, [
                                        r,
                                        t
                                    ];
                                }
                                return [];
                            }
                            function f(n, t, e, r) {
                                for (var i = 0, o = n.length; i < o; i++) {
                                    var a = n.key(i);
                                    !e[a] && (e[a] = a.match(t)) && r(a);
                                }
                            }
                            return {
                                set: function (n, t, e) {
                                    n && null != t && (null != (e = e || {}).expires ? i : r)(n, t, e.expires);
                                },
                                get: function (n) {
                                    return o(n) || c(n)[0];
                                },
                                findEach: function (e, r) {
                                    var i = {};
                                    f(n, e, i, function (n) {
                                        var t = o(n);
                                        null != t && r(n, t);
                                    }), f(t, e, i, function (n) {
                                        var t = c(n), e = t[0], i = t[1];
                                        null != e && r(n, e, i);
                                    });
                                },
                                remove: function (e) {
                                    n.removeItem(e), t.removeItem(e);
                                },
                                purge: function () {
                                    for (var n = t.length; n--;) {
                                        var r = t.key(n), i = a(r);
                                        u(i) && e(i) && t.removeItem(r);
                                    }
                                }
                            };
                        }
                        function $(n, t) {
                            var e = {};
                            return e.set = n.set, e.findEach = function (e, r) {
                                var i = {};
                                n.findEach(e, function (n, t, e) {
                                    i[n] = !0, r(n, t, e);
                                }), t.findEach(e, function (t, e, o) {
                                    i[t] || (n.set(t, e, o), r(t, e, o));
                                });
                            }, e.get = function (e) {
                                var r = n.get(e);
                                return r === undefined && (r = t.get(e)) !== undefined && n.set(e, r), r;
                            }, e.remove = function (e) {
                                n.remove(e), t.remove(e);
                            }, e.purge = function () {
                                n.purge(), t.purge();
                            }, e;
                        }
                        function G(n) {
                            var t = this, e = [], r = {}, i = [], o = !1, a = 0, u = 0;
                            function c() {
                            }
                            function s(n, t) {
                                (n || c).apply(null, t);
                            }
                            function d(n) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                w.each(e, function (e) {
                                    s(e[n], [t].concat(r));
                                });
                            }
                            function l() {
                                o = !0, a = i.length, d('engine:off');
                            }
                            function p() {
                                o && d('engine:on'), o = !1, u = 0, (i[a++] || l)();
                            }
                            function g(n, t) {
                                return {
                                    type: n,
                                    exception: t
                                };
                            }
                            function h() {
                                d('block:finish'), p();
                            }
                            var v = {
                                    tagName: 'iframe',
                                    defaults: {
                                        frameborder: '0',
                                        height: '1px',
                                        scrolling: 'no',
                                        width: '1px'
                                    },
                                    supported: [
                                        {
                                            option: 'display',
                                            setter: function (n, t) {
                                                n.style.display = t;
                                            }
                                        },
                                        'frameborder',
                                        'id',
                                        'height',
                                        'scrolling',
                                        'width'
                                    ]
                                }, m = {
                                    tagName: 'img',
                                    defaults: {},
                                    supported: [
                                        {
                                            option: 'display',
                                            setter: function (n, t) {
                                                n.style.display = t;
                                            }
                                        },
                                        'id',
                                        {
                                            option: 'height',
                                            setter: function (n, t) {
                                                n.setAttribute('height', t);
                                            }
                                        },
                                        {
                                            option: 'width',
                                            setter: function (n, t) {
                                                n.setAttribute('width', t);
                                            }
                                        }
                                    ]
                                }, y = {
                                    tagName: 'script',
                                    defaults: { type: 'text/javascript' },
                                    supported: [
                                        'async',
                                        'id',
                                        'type',
                                        'charset'
                                    ]
                                };
                            function b(n) {
                                return null != n;
                            }
                            function S(t, e) {
                                var r = n.createElement(t.tagName), i = w.extend(w.extend({}, t.defaults), e || {});
                                return w.each(t.supported, function (n) {
                                    f.isString(n) && b(i[n]) ? r[n] = i[n] : f.isObject(n) && b(i[n.option]) && n.setter(r, i[n.option]);
                                }), r;
                            }
                            function T(t, e) {
                                var r = S(v, e);
                                r.onerror = function () {
                                    d('block:error', g('iframe', 'Problem loading ' + t));
                                }, d('block:start', t), r.src = t.toString(), n.body.appendChild(r), h();
                            }
                            function x(n, t) {
                                var e = S(m, t);
                                e.onerror = function () {
                                    d('block:error', g('image', 'Problem loading ' + n));
                                }, d('block:start', n), e.src = n.toString(), h();
                            }
                            function O(t, e, r) {
                                var i = !1, o = S(y, r);
                                o.onerror = function () {
                                    d('block:error', g('script', 'Problem loading ' + t)), i || h();
                                }, o.onload = o.onreadystatechange = function () {
                                    !i && function (n) {
                                        switch (n.readyState) {
                                        case undefined:
                                        case 'loaded':
                                        case 'complete':
                                            return !0;
                                        }
                                        return !1;
                                    }(o) && (i = !0, h());
                                }, d('block:start', t), t && (o.src = t.toString()), e && (o.text = e);
                                var a = n.getElementsByTagName('script')[0];
                                a.parentNode.insertBefore(o, a);
                            }
                            function j(n) {
                                var t = Array.prototype.slice.call(arguments, 1);
                                return function () {
                                    n.apply(null, t);
                                };
                            }
                            function _(t) {
                                return function () {
                                    try {
                                        d('block:start', t), f.isString(t) ? function (t) {
                                            n.defaultView ? n.defaultView.eval.call(window, t) : n.parentWindow ? n.parentWindow.execScript(t) : d('block:error', g('wait', 'Could not evaluate wait block [' + t + ']'));
                                        }((e = t, w.trim(e).replace(/^<!--/, '').replace(/-->$/, ''))) : t();
                                    } catch (r) {
                                        d('block:error', g('wait', r));
                                    } finally {
                                        h();
                                    }
                                    var e;
                                };
                            }
                            function E(n) {
                                return i.push(n), o && p(), t;
                            }
                            function B(n) {
                                return i.splice(a + u++, 0, n), t;
                            }
                            t.run = function () {
                                d('engine:on'), p();
                            }, t.options = function (n) {
                                return w.extend(r, n), t;
                            }, t.option = function (n) {
                                return r[n];
                            }, t.iframe = function (n, t) {
                                return E(j(T, n, t));
                            }, t.image = function (n, t) {
                                return E(j(x, n, t));
                            }, t.script = function (n, t, e) {
                                return E(j(O, n, t, e));
                            }, t.wait = function (n) {
                                return E(_(n));
                            }, t.preemptCss = function (n, t) {
                                return B(j(O, n, t));
                            }, t.preemptIframe = function (n, t) {
                                return B(j(O, n, t));
                            }, t.preemptImage = function (n, t) {
                                return B(j(O, n, t));
                            }, t.preemptScript = function (n, t, e) {
                                return B(j(O, n, t, e));
                            }, t.preemptWait = function (n) {
                                return B(_(n));
                            }, t.listen = function (n) {
                                return e.push(n), s(n['engine:listen'], [t]), t;
                            };
                        }
                        function z(n) {
                            var t, e = [], r = {
                                    'engine:on': function () {
                                        a = !0;
                                    },
                                    'engine:off': function () {
                                        a = !1, f();
                                    }
                                }, i = 0, o = !1, a = !1;
                            function u(n) {
                                e.push(n), o && !a && f();
                            }
                            function c(n) {
                                n.run();
                            }
                            function f() {
                                var n = e[i];
                                n && (i++, n.listen(r).run());
                            }
                            t = u, this.alwaysQueue = function () {
                                t = u;
                            }, this.neverQueue = function () {
                                t = c;
                            }, this.push = function (n) {
                                return t(n), n;
                            }, this.run = function () {
                                o = !0, f();
                            }, this.applyListener = function (n) {
                                for (var t = i, r = e.length; t < r; t++)
                                    e[t].listen(n);
                            }, this.toString = function () {
                                return 'Group[name=' + n + '; working=' + a + '; running=' + o + ']';
                            };
                        }
                        function q(n) {
                            var t = this, e = { undefined: new z(undefined) }, r = [];
                            function i(n) {
                                return e[n] || (e[n] = new z(n));
                            }
                            function o(n) {
                                return t.addToGroup(n, t.newEngine());
                            }
                            e[void 0].neverQueue(), t.addGlobalListener = function (n) {
                                r.push(n), w.each(e, function (t, e) {
                                    e.applyListener(n);
                                });
                            }, t.addToGroup = function (n, t) {
                                return w.each(r, function (n) {
                                    t.listen(n);
                                }), i(n).push(t);
                            }, t.newEngine = function () {
                                return new G(n);
                            }, t.group = function (n) {
                                return o(n);
                            }, t.listen = function () {
                                return o().listen.apply(null, arguments);
                            }, t.iframe = function () {
                                return o().iframe.apply(null, arguments);
                            }, t.image = function () {
                                return o().image.apply(null, arguments);
                            }, t.script = function () {
                                return o().script.apply(null, arguments);
                            }, t.wait = function () {
                                return o().wait.apply(null, arguments);
                            }, t.run = function (n) {
                                i(n).run();
                            }, t.alwaysQueue = function (n) {
                                i(n).alwaysQueue();
                            }, t.neverQueue = function (n) {
                                i(n).neverQueue();
                            }, t.setOptions = function () {
                                return o();
                            };
                        }
                        var W = function () {
                            function n(n, t) {
                                this.tagMgrRouter = n, this.config = t;
                            }
                            var t = {
                                JSON: {
                                    object: 'JSON',
                                    path: '/json2.js'
                                },
                                jQuery: {
                                    object: 'BrightTag.jQuery',
                                    path: '/jquery.js'
                                }
                            };
                            return n.prototype = {
                                ensure: function (n, e) {
                                    var r = t[n];
                                    if (r) {
                                        for (var i, o = r.object.split('.'), a = o.length - 1, u = window, c = 0; c < a; c++) {
                                            if (!(u = u[i = o[c]]))
                                                throw 'DependencyManager: Could not find key ' + i;
                                            u = u[o[c]];
                                        }
                                        u ? e() : this.tagMgrRouter.script(P(this.config.staticHost + r.path)).wait(e);
                                    }
                                }
                            }, n;
                        }();
                        function V() {
                            var n = {}, t = {};
                            function e(n, t, e) {
                                var r = n[t];
                                r || (r = n[t] = []), r.push(e);
                            }
                            return {
                                on: function (t, r) {
                                    e(n, t, r);
                                },
                                once: function (n, r) {
                                    e(t, n, r);
                                },
                                emit: function (e) {
                                    var r = Array.prototype.slice.call(arguments, 1);
                                    function i(n) {
                                        n.apply(this, r);
                                    }
                                    w.each(n[e], i), w.each(t[e], i), t[e] = [];
                                }
                            };
                        }
                        function X(n) {
                            var t, e = w.extend({}, n);
                            function r(n) {
                                return null != e[n];
                            }
                            function i(n, t) {
                                t !== undefined && (e[n] = t);
                                var r = e[n];
                                return null == r ? '' : r;
                            }
                            return t = w.extend({
                                dbe: function (n, e, o) {
                                    if (!r(n)) {
                                        var a = l(e, function (e) {
                                            t.emit('error', e, n, o);
                                        });
                                        return null != a ? i(n, a) : void 0;
                                    }
                                },
                                data: i,
                                hasData: r
                            }, V());
                        }
                        function Y() {
                            var n;
                            function t() {
                                return n;
                            }
                            return n = {
                                fire: t,
                                appendData: t,
                                appendJs: t,
                                execute: t,
                                when: t
                            };
                        }
                        function K(n) {
                            var t, e = [], r = {};
                            return t = {
                                toJSON: function () {
                                    var n = e.length > 0 ? { cf: e.join() } : {};
                                    return w.extend(n, r);
                                },
                                fire: function (n) {
                                    f.isArray(n) || (n = [n]);
                                    var r = w.filter(n, function (n) {
                                        return null != n && '' !== n;
                                    });
                                    return e = e.concat(r), t;
                                },
                                appendData: function (e) {
                                    var i, o = n.data(e);
                                    return r['_cb_bt_data(\'' + e + '\')'] = f.isArray(i = o) || f.isObject(i) ? JSON.stringify(o) : o, t;
                                },
                                appendJs: function (n) {
                                    return r['_cb_' + n] = l(n), t;
                                },
                                execute: function (n) {
                                    return n(), t;
                                },
                                when: function (e) {
                                    try {
                                        return new Function(['bt_data'], 'return ' + w.trim(e))(n.data) ? t : Y();
                                    } catch (r) {
                                        window.bt_log('conditional evaluation error: [' + r.toString() + '] while evaluating [' + e + ']');
                                    }
                                    return Y();
                                },
                                hasConditions: function () {
                                    return e.length > 0 || function (n, t) {
                                        for (var e in n)
                                            if (t(e, n[e]))
                                                return !0;
                                        return !1;
                                    }(r, function (n, t) {
                                        return null != t;
                                    });
                                }
                            };
                        }
                        function Z(n, t) {
                            var e = {}, r = V();
                            return w.extend(r, {
                                bind: function (i, o, a, u) {
                                    var c = t.newBinder(n, i);
                                    function f(t, o, a) {
                                        c.trigger(t, o, a), function (t, e, i, o) {
                                            var a = K(n);
                                            w.each(t, function (n) {
                                                n.trigger(a, e, i, o);
                                            }), r.emit('triggered', a);
                                        }(e[i], t, o, a);
                                    }
                                    return c.on('error', function (n, t) {
                                        r.emit('error', n, {
                                            name: t,
                                            eventName: i
                                        }, u);
                                    }), t.ensureLibrary(function () {
                                        try {
                                            t.bind(o, a, f);
                                        } catch (n) {
                                            r.emit('error', n, { eventName: i }, u);
                                        }
                                    }), c;
                                },
                                handle: function (i, o) {
                                    var a = t.newHandler(n);
                                    return a.on('error', function (n) {
                                        r.emit('error', n, { eventName: i }, o);
                                    }), e[i] = e[i] || [], e[i].push(a), a;
                                }
                            });
                        }
                        function nn(n) {
                            var t = {}, e = [
                                    'eventObject',
                                    'eventData',
                                    '$',
                                    'bt_data'
                                ];
                            function r(n, t) {
                                n.type = 'evdbe', i.emit('error', n, t);
                            }
                            var i = w.extend({
                                dbe: function (n, o) {
                                    try {
                                        t[n] = new Function(e, 'return ' + o + ';');
                                    } catch (a) {
                                        r(a, n);
                                    }
                                    return i;
                                },
                                trigger: function (e, i, o) {
                                    var a = e.target, u = [
                                            e,
                                            i,
                                            o,
                                            n.data
                                        ];
                                    w.each(t, function (t, e) {
                                        try {
                                            n.data(t, e.apply(a, u));
                                        } catch (i) {
                                            r(i, t);
                                        }
                                    });
                                }
                            }, V());
                            return i;
                        }
                        function tn(n) {
                            var t = [], e = [
                                    'eventObject',
                                    'eventData',
                                    '$',
                                    'bt_data'
                                ], r = function () {
                                    return !0;
                                };
                            function i(n, t) {
                                t.type = n, u.emit('error', t);
                            }
                            function o(n) {
                                return t.push(n), u;
                            }
                            function a(n) {
                                try {
                                    return new Function(e, n);
                                } catch (t) {
                                    i('evparse', t);
                                }
                            }
                            var u = w.extend({
                                fire: function (n) {
                                    return o(function (t) {
                                        t.fire(n);
                                    });
                                },
                                appendData: function (n) {
                                    return o(function (t) {
                                        t.appendData(n);
                                    });
                                },
                                appendJs: function (n) {
                                    return o(function (t) {
                                        t.appendJs(n);
                                    });
                                },
                                execute: function (t) {
                                    var e = f.isString(t) ? a(t) : t;
                                    return e ? o(function (t, r, o, a) {
                                        try {
                                            e.call(r.target, r, o, a, n.data);
                                        } catch (u) {
                                            i('evwait', u);
                                        }
                                    }) : u;
                                },
                                evaluate: function (t) {
                                    var e = a('return ' + t);
                                    return r = e ? function (t, r, i, o) {
                                        return e.call(r.target, r, i, o, n.data);
                                    } : function () {
                                        return !1;
                                    }, u;
                                },
                                trigger: function (n, e, i, o) {
                                    r(n, e, i, o) && w.each(t, function (t) {
                                        t(n, e, i, o);
                                    });
                                }
                            }, V());
                            return u;
                        }
                        function en(n) {
                            var t = /^direct\//i, e = !1;
                            function r() {
                                return BrightTag.jQuery || window.jQuery;
                            }
                            return {
                                bind: function (n, e, i) {
                                    var o = r(), a = o(n), u = function (n, e) {
                                            return !f.isString(n) || t.test(e);
                                        }(n, e);
                                    function c(n) {
                                        var t = Array.prototype.slice.call(arguments, 1);
                                        i(n, t, r());
                                    }
                                    !u && a.on ? o(document).on(e, n, c) : !u && a.live ? a.live(e, c) : a.bind ? a.bind(e.split(t).pop(), c) : a.on(e.split(t).pop(), c);
                                },
                                newBinder: function (n) {
                                    return nn(n);
                                },
                                newHandler: function (n) {
                                    return tn(n);
                                },
                                ensureLibrary: function (t) {
                                    r() ? t() : (e || (e = !0, n.run()), n).wait(t);
                                }
                            };
                        }
                        function rn(n) {
                            function t(t) {
                                return n.write(t), e;
                            }
                            var e = {
                                tag: t,
                                script: function (n) {
                                    return t('<script type="text/javascript" src="' + n + '"></script>');
                                },
                                wait: function (n) {
                                    return n(), e;
                                }
                            };
                            return e;
                        }
                        function on(n, t) {
                            var e = {}, r = {
                                    tag: function (i, o) {
                                        return function (t, r) {
                                            var i = t && t.group;
                                            r(n.group(i).options(t || {})), i && e[i] === undefined && (e[i] = !0, n.run(i));
                                        }(o, function (n) {
                                            n.wait(function () {
                                                t.process(n, i);
                                            });
                                        }), r;
                                    },
                                    script: n.script,
                                    wait: n.wait
                                };
                            return r;
                        }
                        function an(n, t) {
                            var e = t;
                            return {
                                tag: function (n, t) {
                                    return e.tag(n, t);
                                },
                                script: function (n) {
                                    return e.script(n);
                                },
                                wait: function (n) {
                                    return e.wait(n);
                                },
                                sync: function () {
                                    e = n;
                                },
                                async: function () {
                                    e = t;
                                }
                            };
                        }
                        var un, cn = {};
                        function fn(n, t, e, r, i, o) {
                            var a = w.extend({}, o), u = a.host || '', c = V(), f = new W(t, a), s = !1;
                            function d(n) {
                                (null == n || n.hasConditions()) && r.reset({
                                    site: a.site,
                                    referrer: a.referrer || window.location.href
                                });
                            }
                            function l(n) {
                                var t = P('//' + u + '/tag').appendParams({
                                        site: a.site,
                                        mode: a.mode,
                                        H: a.H,
                                        referrer: a.referrer,
                                        docReferrer: a.docReferrer
                                    }).appendParam('mode', 'v2').alwaysAppendParams(n), e = dn.get('X-BT-InspectSession');
                                return e && t.appendParam('inspect-session', e), i.findEach(new RegExp('^btp(s|db)\\.' + a.site + '\\..+'), function (n, e) {
                                    t.appendParam(n, e);
                                }), t.appendParams({ errors: r.hasErrors() ? r.toJSON() : null });
                            }
                            function p(n) {
                                var e = function (n) {
                                    return null == n ? l() : n.hasConditions() ? l(n.toJSON()) : void 0;
                                }(n);
                                e ? (d(n), e.tooLong() ? f.ensure('jQuery', function () {
                                    !function (n) {
                                        var t = 'https:' + (n.host ? '//' + n.host : '') + n.path;
                                        BrightTag.jQuery.ajax({
                                            url: t,
                                            type: 'POST',
                                            data: n.queryString(),
                                            xhrFields: { withCredentials: !0 }
                                        });
                                    }(e);
                                }) : t.script(e.toString())) : d(n);
                            }
                            e.on('triggered', p);
                            var g = w.extend({
                                config: a,
                                diagnostic: function (n) {
                                    n && (a.diagnostic = n, g.emit('diagnostic', n));
                                },
                                errors: function (n) {
                                    r.configure({ timestamp: n });
                                },
                                dbe: function (t, e, r) {
                                    var i = n.dbe(t, e, r);
                                    null != i && g.emit('dbe', t, e, i, r);
                                },
                                data: n.data,
                                dataref: function (n) {
                                    return null == n ? '' : 'BrightTag.site("' + a.site + '").data("' + n.replace(/"/g, '\\x22') + '")';
                                },
                                store: function (n) {
                                    w.each(n, function (n) {
                                        n.name && function (n) {
                                            var t = w.extend({}, n);
                                            delete t.name, delete t.value, i.set(n.name, n.value, t);
                                        }(n);
                                    });
                                },
                                tag: function (n, e) {
                                    return g.emit('tag', n, e), t.tag(n, e);
                                },
                                script: t.script,
                                wait: t.wait,
                                events: {
                                    bind: function (n, t, r, i) {
                                        return g.emit('event-binding', n, t, r, i), e.bind(n, t, r, i);
                                    },
                                    on: e.handle
                                },
                                when: function (t, e) {
                                    return K(n).when(t).execute(function () {
                                        e(g);
                                    }), g;
                                },
                                domready: function (n) {
                                    null == n ? (s = !0, t.async(), a.mode = w.filter(a.mode, function (n) {
                                        return 'sync' !== n;
                                    })) : c.once('domready', n), s && c.emit('domready', g);
                                },
                                primary: function () {
                                    f.ensure('JSON', function () {
                                        r.processStoredErrors(), p();
                                    });
                                },
                                secondary: function (t) {
                                    var e = K(n);
                                    t(e), p(e);
                                }
                            }, V());
                            return g;
                        }
                        var sn, dn = U(document);
                        try {
                            window.localStorage && window.sessionStorage && (un = F(sessionStorage, localStorage)).purge();
                        } catch (jn) {
                            a('Unable to access DOM storage: ' + jn);
                        }
                        function ln(n) {
                            var t = n.site;
                            if (t && !cn[t]) {
                                var e = X(n.data), r = new q(document), i = k(document), o = function (n, t, e) {
                                        var r = an(rn(document), on(n, t));
                                        return w.contains(e.mode, 'sync') && r.sync(), r;
                                    }(r, i, n), a = Z(e, function (n) {
                                        var t = P(n.staticHost + '/jquery.js');
                                        return en(new G(document).script(t));
                                    }(n)), u = H(un ? $(un, dn) : dn, '__bterr_' + t, {
                                        site: t,
                                        referrer: n.referrer,
                                        enabled: !1
                                    }), c = J(u);
                                return e.on('error', c.dbe), a.on('error', c.events), r.addGlobalListener(c), BrightTag.Events.onDOMReady(function () {
                                    r.addGlobalListener(L(document, i));
                                }), cn[t] = fn(e, o, a, u, un ? $(dn, un) : dn, n);
                            }
                        }
                        function pn() {
                            var n = [];
                            return w.each(cn, function (t, e) {
                                n.push(e);
                            }), n;
                        }
                        function gn(n, t) {
                            try {
                                var e = cn[n];
                                return e && t && t(e), e;
                            } catch (jn) {
                                a('error while executing site configuration [' + n + ']: ' + jn);
                            }
                        }
                        function hn(n, t) {
                            return {
                                isTagjs: function () {
                                    return /\/tag(\.[^.]+|-n)?\.js(\?.*)?(#.*)?$/.test(n.src);
                                },
                                toJSON: function () {
                                    return w.extend(function () {
                                        var e = new P(n.src), r = {}, i = e.fragment(), o = T(e.host);
                                        r.staticHost = e.host + e.pathname, o && (r.host = o);
                                        var a = new E(i || '').params();
                                        return w.each(a, function (n, t) {
                                            r[n] = t.length > 1 ? t : t[0];
                                        }), a.referrer === undefined && t.location.href !== undefined && (r.referrer = t.location.href.split('#')[0]), r;
                                    }(), function () {
                                        var t = w.trim(n.innerHTML);
                                        return 0 === t.length ? {} : l('(\n' + t + '\n)', function (n) {
                                            window.bt_log('json configuration error: ' + n);
                                        });
                                    }());
                                },
                                script: n
                            };
                        }
                        function vn(n) {
                            return {
                                isTagjs: function () {
                                    return !0;
                                },
                                toJSON: function () {
                                    return n || {};
                                },
                                script: { src: undefined }
                            };
                        }
                        function mn(n) {
                            return w.contains(n.mode, 'v2') || w.contains(n.mode, 'v2b');
                        }
                        function yn(n, t, e) {
                            try {
                                var r = n.toJSON();
                                if (!BrightTag.instance || BrightTag.instance.site !== r.site) {
                                    var i, o = function (n, t) {
                                            var e, r = n.referrer || t.location.href;
                                            return ln(w.extend({
                                                host: 's.tgm.yahoo-net.jp',
                                                staticHost: 'static-s.tgm.yahoo-net.jp',
                                                H: S(r),
                                                referrer: (e = r, e.split('#')[0]),
                                                docReferrer: t.document.referrer
                                            }, n));
                                        }(r, t);
                                    return !r.site || BrightTag.instance || mn(r) ? o && (o.config.mode = (u = o.config.mode, w.contains(u, 'v2') ? u : u ? ['v2'].concat(u) : 'v2')) : (i = function (n, t) {
                                        var e = BrightTag.defaultConfig();
                                        return BrightTag.EventBinding = Q(e.window, e.errorManager), BrightTag.instance = new M(w.extend(e, n), t), BrightTag.instance;
                                    }(r, n.script), o.config.loadOnly = !0), e && e(o, i), o;
                                }
                            } catch (jn) {
                                a('error configuring site [' + n.script.src + ']: ' + jn);
                            }
                            var u;
                        }
                        function wn(n, t) {
                            w.each(function (n) {
                                var t = [];
                                if (f.isArray(n))
                                    t = n.slice(0);
                                else
                                    for (var e = 0, r = n.length; e < r; e++)
                                        t.push(n[e]);
                                return t;
                            }(n.document.getElementsByTagName('script')), function (e) {
                                var r = hn(e, n);
                                r.isTagjs() && yn(r, n, t);
                            });
                        }
                        function bn(n, t, e) {
                            return yn(vn(n), t, e);
                        }
                        function Sn(n, t) {
                            t && function (n) {
                                BrightTag.Events.onDOMReady(n.domReady), n.loadOnly || n.primary();
                            }(t), n && function (n) {
                                mn(n.config) ? n.config.loadOnly || (BrightTag.Events.onDOMReady(function () {
                                    n.domready();
                                }), n.primary()) : BrightTag.Events.onDOMReady(function () {
                                    n.domready();
                                });
                            }(n);
                        }
                        function Tn(n) {
                            var t = n || BrightTag.Blab;
                            return {
                                iframe: t.iframe,
                                image: t.image,
                                link: t.link,
                                script: t.script
                            };
                        }
                        function xn(n, t, e) {
                            var r = !!n.addEventListener, i = r ? 'addEventListener' : 'attachEvent', o = n[i];
                            function a() {
                                return r ? function () {
                                    var r = e.createEvent('Event');
                                    r.initEvent(t, !0, !1);
                                    try {
                                        r.currentTarget = r.target = n;
                                    } catch (jn) {
                                        window.bt_log('warning: can not set target for [' + t + '] event: ' + jn);
                                    }
                                    return r;
                                }() : function () {
                                    var n = e.createEventObject('Event');
                                    return n.type = t, n.cancelable = !0, n.bubbleable = !1, n;
                                }();
                            }
                            function u(n) {
                                return 'function' == typeof n;
                            }
                            n[i] = function (e, i, c) {
                                (function (n) {
                                    return n && (u(n) || u(n.handleEvent));
                                }(i) && (function (n) {
                                    return n == t || n == 'on' + t;
                                }(e) ? function (e) {
                                    setTimeout(function () {
                                        try {
                                            (e.handleEvent || e).call(n, a());
                                        } catch (jn) {
                                            window.bt_log('error: overriding [' + t + '] event: ' + jn);
                                        }
                                    }, 0);
                                }(i) : function (t, e, i) {
                                    try {
                                        r ? o.call(n, t, e, i) : o(t, e);
                                    } catch (jn) {
                                        window.bt_log('error: proxying [' + t + '] event: ' + jn);
                                    }
                                }(e, i, c)));
                            };
                        }
                        function On(n, t) {
                            var e = this, r = !!n.addEventListener, i = 'DOMContentLoaded', o = r ? 'addEventListener' : 'attachEvent', a = r ? 'removeEventListener' : 'detachEvent', u = r ? '' : 'on', c = t.documentElement.doScroll || function () {
                                    throw 'No doScroll';
                                };
                            function f() {
                            }
                            function s(n, t, e) {
                                n[o](u + t, e, !1);
                            }
                            function d(n, t, e) {
                                n[a](u + t, e, !1);
                            }
                            function l() {
                                var n = t.readyState;
                                return 'loading' != n && ('complete' == n || function () {
                                    try {
                                        c('left');
                                    } catch (jn) {
                                        return !1;
                                    }
                                    return !0;
                                }());
                            }
                            function p() {
                                p = f, r && xn(t, i, t);
                            }
                            function g() {
                                p(), xn(n, 'load', t);
                            }
                            e.listen = s, e.unlisten = d, e.onDOMReady = function (e) {
                                l() ? e.call(this) : t.addEventListener ? (s(t, i, e), s(t, i, function () {
                                    d(n, 'load', e);
                                }), s(n, 'load', e)) : function r(n, t, e) {
                                    var i = this;
                                    setTimeout(function () {
                                        n() ? t.call(i) : r(n, t, e);
                                    }, e);
                                }(l, e, 1);
                            }, e.enablePageReadyOverrides = function () {
                                e.enablePageReadyOverrides = f, l() ? g() : (r && s(t, i, p), s(n, 'load', g));
                            };
                        }
                        window._bt_url_prefix = undefined, window._bt_referrer = undefined, window._bt_site = undefined, window._bt_mode = undefined, window.bt_log = a, window.bt_eval = r, window.bt_parameter = i, window.bt_meta = function (n, t) {
                            for (var e, r = (t || document).getElementsByTagName('meta'), i = 0, o = r.length; i < o; i++)
                                if ((e = r[i]).getAttribute('name') === n)
                                    return e.getAttribute('content');
                            return '';
                        }, window.bt_cookie = function (n, t) {
                            var e = t || document;
                            return new BrightTag.HTTP.Cookie(e).get(n) || '';
                        }, window.bt_data = o, window.bt_handle_exception = a, window.bt_data_escaped = o, window.BrightTag = function (n) {
                            if (n)
                                return n;
                            return (n = {}).Escaper = x, n.Random = O, n.pushIfDefined = j, n.ServerURL = R, n.Main = D, n.CookieSync = _, n.EventBindingManager = Q, n.defaultConfig = function () {
                                const $___old_3316efcf986095f4 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_d32b376b7ed2a289 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                                try {
                                    if ($___old_3316efcf986095f4)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_33bfcac5c9fafdd3.localStorage));
                                    if ($___old_d32b376b7ed2a289)
                                        ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_33bfcac5c9fafdd3.sessionStorage));
                                    return function () {
                                        var n, t = U(document), e = t, r = t;
                                        try {
                                            window.localStorage && window.sessionStorage && ((n = F(sessionStorage, localStorage)).purge(), e = $(t, n), r = $(n, t));
                                        } catch (jn) {
                                            a('Unable to access DOM storage: ' + jn);
                                        }
                                        return {
                                            id: Math.random(),
                                            loadOnly: !1,
                                            window: window,
                                            document: document,
                                            host: 's.tgm.yahoo-net.jp',
                                            parentReferrer: top != self && self.window ? self.window.location.href : null,
                                            docReferrer: document.referrer,
                                            data: {},
                                            store: e,
                                            errorManager: H(r, '__bterr')
                                        };
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_3316efcf986095f4)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_3316efcf986095f4));
                                    if ($___old_d32b376b7ed2a289)
                                        ({}.constructor.defineProperty(window, 'sessionStorage', $___old_d32b376b7ed2a289));
                                }
                            }, n.eval = l, n.Types = f, n.trim = w.trim, n.Util = w, n.each = w.each, n.extend = w.extend, n.HTTP = {
                                Cookie: N,
                                QueryString: E,
                                URL: P
                            }, n.Blab = new q(document), n.Events = new On(window, document), n.Events.enablePageReadyOverrides(), n.Content = new Tn(n.Blab), n.V2_RESPONSE = !0, n.site = gn, n.configureNewSites = wn, n.configureSite = bn, n.configuredSites = pn, n.initializeSite = Sn, n;
                        }(window.BrightTag), window.btServe = function (n) {
                            var t = BrightTag, e = {
                                    referrer: window._bt_referrer,
                                    site: window._bt_site,
                                    mode: window._bt_mode
                                };
                            null != window._bt_url_prefix && (e.host = window._bt_url_prefix), t.configureSite(t.extend(e, n), window, t.initializeSite);
                        }, (sn = BrightTag).configureNewSites(window, sn.initializeSite), null == sn.instance && setTimeout(function () {
                            null == sn.instance && sn.configureNewSites(window, sn.initializeSite);
                        }, 0);
                    }.apply(this, arguments);
                } finally {
                    if ($___old_0254a297373fa644)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_0254a297373fa644));
                    if ($___old_30ef1eec6df95a8f)
                        ({}.constructor.defineProperty(window, 'sessionStorage', $___old_30ef1eec6df95a8f));
                }
            }
        });
    }())
}