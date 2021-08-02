{
    const $___mock_1216bee92518ecfd = {};
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
    })($___mock_1216bee92518ecfd);
    (function () {
        !function (e) {
            var t = {};
            function n(o) {
                if (t[o])
                    return t[o].exports;
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
            }
            n.m = e, n.c = t, n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                });
            }, n.r = function (e) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
            }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t)
                    return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, 'default', {
                        enumerable: !0,
                        value: e
                    }), 2 & t && 'string' != typeof e)
                    for (var r in e)
                        n.d(o, r, function (t) {
                            return e[t];
                        }.bind(null, r));
                return o;
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return n.d(t, 'a', t), t;
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, n.p = '', n(n.s = 103);
        }([
            function (e, t, n) {
                var o = n(27)('wks'), r = n(18), i = n(1).Symbol, c = 'function' == typeof i;
                (e.exports = function (e) {
                    return o[e] || (o[e] = c && i[e] || (c ? i : r)('Symbol.' + e));
                }).store = o;
            },
            function (e, t) {
                var n = e.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')();
                'number' == typeof __g && (__g = n);
            },
            function (e, t, n) {
                var o = n(5);
                e.exports = function (e) {
                    if (!o(e))
                        throw TypeError(e + ' is not an object!');
                    return e;
                };
            },
            function (e, t, n) {
                e.exports = !n(6)(function () {
                    return 7 != Object.defineProperty({}, 'a', {
                        get: function () {
                            return 7;
                        }
                    }).a;
                });
            },
            function (e, t, n) {
                var o = n(2), r = n(45), i = n(35), c = Object.defineProperty;
                t.f = n(3) ? Object.defineProperty : function (e, t, n) {
                    if (o(e), t = i(t, !0), o(n), r)
                        try {
                            return c(e, t, n);
                        } catch (e) {
                        }
                    if ('get' in n || 'set' in n)
                        throw TypeError('Accessors not supported!');
                    return 'value' in n && (e[t] = n.value), e;
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    return 'object' == typeof e ? null !== e : 'function' == typeof e;
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            function (e, t, n) {
                var o = n(1), r = n(8), i = n(11), c = n(18)('src'), a = n(66), s = ('' + a).split('toString');
                n(9).inspectSource = function (e) {
                    return a.call(e);
                }, (e.exports = function (e, t, n, a) {
                    var u = 'function' == typeof n;
                    u && (i(n, 'name') || r(n, 'name', t)), e[t] !== n && (u && (i(n, c) || r(n, c, e[t] ? '' + e[t] : s.join(String(t)))), e === o ? e[t] = n : a ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)));
                })(Function.prototype, 'toString', function () {
                    return 'function' == typeof this && this[c] || a.call(this);
                });
            },
            function (e, t, n) {
                var o = n(4), r = n(28);
                e.exports = n(3) ? function (e, t, n) {
                    return o.f(e, t, r(1, n));
                } : function (e, t, n) {
                    return e[t] = n, e;
                };
            },
            function (e, t) {
                var n = e.exports = { version: '2.6.10' };
                'number' == typeof __e && (__e = n);
            },
            function (e, t, n) {
                var o = n(1), r = n(9), i = n(8), c = n(7), a = n(17), s = function (e, t, n) {
                        var u, p, f, l, d = e & s.F, v = e & s.G, h = e & s.S, g = e & s.P, m = e & s.B, y = v ? o : h ? o[t] || (o[t] = {}) : (o[t] || {}).prototype, _ = v ? r : r[t] || (r[t] = {}), w = _.prototype || (_.prototype = {});
                        for (u in (v && (n = t), n))
                            f = ((p = !d && y && void 0 !== y[u]) ? y : n)[u], l = m && p ? a(f, o) : g && 'function' == typeof f ? a(Function.call, f) : f, y && c(y, u, f, e & s.U), _[u] != f && i(_, u, l), g && w[u] != f && (w[u] = f);
                    };
                o.core = r, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s;
            },
            function (e, t) {
                var n = {}.hasOwnProperty;
                e.exports = function (e, t) {
                    return n.call(e, t);
                };
            },
            function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1);
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(51), r = n(79), i = n(19), c = n(14);
                e.exports = n(52)(Array, 'Array', function (e, t) {
                    this._t = c(e), this._i = 0, this._k = t;
                }, function () {
                    var e = this._t, t = this._k, n = this._i++;
                    return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, 'keys' == t ? n : 'values' == t ? e[n] : [
                        n,
                        e[n]
                    ]);
                }, 'values'), i.Arguments = i.Array, o('keys'), o('values'), o('entries');
            },
            function (e, t, n) {
                var o = n(80), r = n(22);
                e.exports = function (e) {
                    return o(r(e));
                };
            },
            function (e, t, n) {
                'use strict';
                var o, r, i, c, a = n(16), s = n(1), u = n(17), p = n(26), f = n(10), l = n(5), d = n(25), v = n(67), h = n(68), g = n(46), m = n(47).set, y = n(73)(), _ = n(49), w = n(74), b = n(75), x = n(76), S = s.TypeError, k = s.process, O = k && k.versions, P = O && O.v8 || '', I = s.Promise, E = 'process' == p(k), D = function () {
                    }, j = r = _.f, U = !!function () {
                        try {
                            var e = I.resolve(1), t = (e.constructor = {})[n(0)('species')] = function (e) {
                                    e(D, D);
                                };
                            return (E || 'function' == typeof PromiseRejectionEvent) && e.then(D) instanceof t && 0 !== P.indexOf('6.6') && -1 === b.indexOf('Chrome/66');
                        } catch (e) {
                        }
                    }(), M = function (e) {
                        var t;
                        return !(!l(e) || 'function' != typeof (t = e.then)) && t;
                    }, A = function (e, t) {
                        if (!e._n) {
                            e._n = !0;
                            var n = e._c;
                            y(function () {
                                for (var o = e._v, r = 1 == e._s, i = 0, c = function (t) {
                                            var n, i, c, a = r ? t.ok : t.fail, s = t.resolve, u = t.reject, p = t.domain;
                                            try {
                                                a ? (r || (2 == e._h && N(e), e._h = 1), !0 === a ? n = o : (p && p.enter(), n = a(o), p && (p.exit(), c = !0)), n === t.promise ? u(S('Promise-chain cycle')) : (i = M(n)) ? i.call(n, s, u) : s(n)) : u(o);
                                            } catch (e) {
                                                p && !c && p.exit(), u(e);
                                            }
                                        }; n.length > i;)
                                    c(n[i++]);
                                e._c = [], e._n = !1, t && !e._h && T(e);
                            });
                        }
                    }, T = function (e) {
                        m.call(s, function () {
                            var t, n, o, r = e._v, i = C(e);
                            if (i && (t = w(function () {
                                    E ? k.emit('unhandledRejection', r, e) : (n = s.onunhandledrejection) ? n({
                                        promise: e,
                                        reason: r
                                    }) : (o = s.console) && o.error && o.error('Unhandled promise rejection', r);
                                }), e._h = E || C(e) ? 2 : 1), e._a = void 0, i && t.e)
                                throw t.v;
                        });
                    }, C = function (e) {
                        return 1 !== e._h && 0 === (e._a || e._c).length;
                    }, N = function (e) {
                        m.call(s, function () {
                            var t;
                            E ? k.emit('rejectionHandled', e) : (t = s.onrejectionhandled) && t({
                                promise: e,
                                reason: e._v
                            });
                        });
                    }, L = function (e) {
                        var t = this;
                        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), A(t, !0));
                    }, R = function (e) {
                        var t, n = this;
                        if (!n._d) {
                            n._d = !0, n = n._w || n;
                            try {
                                if (n === e)
                                    throw S('Promise can\'t be resolved itself');
                                (t = M(e)) ? y(function () {
                                    var o = {
                                        _w: n,
                                        _d: !1
                                    };
                                    try {
                                        t.call(e, u(R, o, 1), u(L, o, 1));
                                    } catch (e) {
                                        L.call(o, e);
                                    }
                                }) : (n._v = e, n._s = 1, A(n, !1));
                            } catch (e) {
                                L.call({
                                    _w: n,
                                    _d: !1
                                }, e);
                            }
                        }
                    };
                U || (I = function (e) {
                    v(this, I, 'Promise', '_h'), d(e), o.call(this);
                    try {
                        e(u(R, this, 1), u(L, this, 1));
                    } catch (e) {
                        L.call(this, e);
                    }
                }, (o = function (e) {
                    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
                }).prototype = n(77)(I.prototype, {
                    then: function (e, t) {
                        var n = j(g(this, I));
                        return n.ok = 'function' != typeof e || e, n.fail = 'function' == typeof t && t, n.domain = E ? k.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise;
                    },
                    catch: function (e) {
                        return this.then(void 0, e);
                    }
                }), i = function () {
                    var e = new o();
                    this.promise = e, this.resolve = u(R, e, 1), this.reject = u(L, e, 1);
                }, _.f = j = function (e) {
                    return e === I || e === c ? new i(e) : r(e);
                }), f(f.G + f.W + f.F * !U, { Promise: I }), n(30)(I, 'Promise'), n(50)('Promise'), c = n(9).Promise, f(f.S + f.F * !U, 'Promise', {
                    reject: function (e) {
                        var t = j(this);
                        return (0, t.reject)(e), t.promise;
                    }
                }), f(f.S + f.F * (a || !U), 'Promise', {
                    resolve: function (e) {
                        return x(a && this === c ? I : this, e);
                    }
                }), f(f.S + f.F * !(U && n(78)(function (e) {
                    I.all(e).catch(D);
                })), 'Promise', {
                    all: function (e) {
                        var t = this, n = j(t), o = n.resolve, r = n.reject, i = w(function () {
                                var n = [], i = 0, c = 1;
                                h(e, !1, function (e) {
                                    var a = i++, s = !1;
                                    n.push(void 0), c++, t.resolve(e).then(function (e) {
                                        s || (s = !0, n[a] = e, --c || o(n));
                                    }, r);
                                }), --c || o(n);
                            });
                        return i.e && r(i.v), n.promise;
                    },
                    race: function (e) {
                        var t = this, n = j(t), o = n.reject, r = w(function () {
                                h(e, !1, function (e) {
                                    t.resolve(e).then(n.resolve, o);
                                });
                            });
                        return r.e && o(r.v), n.promise;
                    }
                });
            },
            function (e, t) {
                e.exports = !1;
            },
            function (e, t, n) {
                var o = n(25);
                e.exports = function (e, t, n) {
                    if (o(e), void 0 === t)
                        return e;
                    switch (n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function (n, o) {
                            return e.call(t, n, o);
                        };
                    case 3:
                        return function (n, o, r) {
                            return e.call(t, n, o, r);
                        };
                    }
                    return function () {
                        return e.apply(t, arguments);
                    };
                };
            },
            function (e, t) {
                var n = 0, o = Math.random();
                e.exports = function (e) {
                    return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + o).toString(36));
                };
            },
            function (e, t) {
                e.exports = {};
            },
            function (e, t, n) {
                var o = n(29), r = Math.min;
                e.exports = function (e) {
                    return e > 0 ? r(o(e), 9007199254740991) : 0;
                };
            },
            function (e, t, n) {
                for (var o = n(13), r = n(23), i = n(7), c = n(1), a = n(8), s = n(19), u = n(0), p = u('iterator'), f = u('toStringTag'), l = s.Array, d = {
                            CSSRuleList: !0,
                            CSSStyleDeclaration: !1,
                            CSSValueList: !1,
                            ClientRectList: !1,
                            DOMRectList: !1,
                            DOMStringList: !1,
                            DOMTokenList: !0,
                            DataTransferItemList: !1,
                            FileList: !1,
                            HTMLAllCollection: !1,
                            HTMLCollection: !1,
                            HTMLFormElement: !1,
                            HTMLSelectElement: !1,
                            MediaList: !0,
                            MimeTypeArray: !1,
                            NamedNodeMap: !1,
                            NodeList: !0,
                            PaintRequestList: !1,
                            Plugin: !1,
                            PluginArray: !1,
                            SVGLengthList: !1,
                            SVGNumberList: !1,
                            SVGPathSegList: !1,
                            SVGPointList: !1,
                            SVGStringList: !1,
                            SVGTransformList: !1,
                            SourceBufferList: !1,
                            StyleSheetList: !0,
                            TextTrackCueList: !1,
                            TextTrackList: !1,
                            TouchList: !1
                        }, v = r(d), h = 0; h < v.length; h++) {
                    var g, m = v[h], y = d[m], _ = c[m], w = _ && _.prototype;
                    if (w && (w[p] || a(w, p, l), w[f] || a(w, f, m), s[m] = l, y))
                        for (g in o)
                            w[g] || i(w, g, o[g], !0);
                }
            },
            function (e, t) {
                e.exports = function (e) {
                    if (null == e)
                        throw TypeError('Can\'t call method on  ' + e);
                    return e;
                };
            },
            function (e, t, n) {
                var o = n(54), r = n(37);
                e.exports = Object.keys || function (e) {
                    return o(e, r);
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(26), r = {};
                r[n(0)('toStringTag')] = 'z', r + '' != '[object z]' && n(7)(Object.prototype, 'toString', function () {
                    return '[object ' + o(this) + ']';
                }, !0);
            },
            function (e, t) {
                e.exports = function (e) {
                    if ('function' != typeof e)
                        throw TypeError(e + ' is not a function!');
                    return e;
                };
            },
            function (e, t, n) {
                var o = n(12), r = n(0)('toStringTag'), i = 'Arguments' == o(function () {
                        return arguments;
                    }());
                e.exports = function (e) {
                    var t, n, c;
                    return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (n = function (e, t) {
                        try {
                            return e[t];
                        } catch (e) {
                        }
                    }(t = Object(e), r)) ? n : i ? o(t) : 'Object' == (c = o(t)) && 'function' == typeof t.callee ? 'Arguments' : c;
                };
            },
            function (e, t, n) {
                var o = n(9), r = n(1), i = r['__core-js_shared__'] || (r['__core-js_shared__'] = {});
                (e.exports = function (e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {});
                })('versions', []).push({
                    version: o.version,
                    mode: n(16) ? 'pure' : 'global',
                    copyright: '\xA9 2019 Denis Pushkarev (zloirock.ru)'
                });
            },
            function (e, t) {
                e.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    };
                };
            },
            function (e, t) {
                var n = Math.ceil, o = Math.floor;
                e.exports = function (e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e);
                };
            },
            function (e, t, n) {
                var o = n(4).f, r = n(11), i = n(0)('toStringTag');
                e.exports = function (e, t, n) {
                    e && !r(e = n ? e : e.prototype, i) && o(e, i, {
                        configurable: !0,
                        value: t
                    });
                };
            },
            function (e, t, n) {
                var o = n(22);
                e.exports = function (e) {
                    return Object(o(e));
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(56)(!0);
                n(52)(String, 'String', function (e) {
                    this._t = String(e), this._i = 0;
                }, function () {
                    var e, t = this._t, n = this._i;
                    return n >= t.length ? {
                        value: void 0,
                        done: !0
                    } : (e = o(t, n), this._i += e.length, {
                        value: e,
                        done: !1
                    });
                });
            },
            function (e, t, n) {
                'use strict';
                var o = n(2);
                e.exports = function () {
                    var e = o(this), t = '';
                    return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), e.unicode && (t += 'u'), e.sticky && (t += 'y'), t;
                };
            },
            function (e, t, n) {
                var o = n(5), r = n(1).document, i = o(r) && o(r.createElement);
                e.exports = function (e) {
                    return i ? r.createElement(e) : {};
                };
            },
            function (e, t, n) {
                var o = n(5);
                e.exports = function (e, t) {
                    if (!o(e))
                        return e;
                    var n, r;
                    if (t && 'function' == typeof (n = e.toString) && !o(r = n.call(e)))
                        return r;
                    if ('function' == typeof (n = e.valueOf) && !o(r = n.call(e)))
                        return r;
                    if (!t && 'function' == typeof (n = e.toString) && !o(r = n.call(e)))
                        return r;
                    throw TypeError('Can\'t convert object to primitive value');
                };
            },
            function (e, t, n) {
                var o = n(27)('keys'), r = n(18);
                e.exports = function (e) {
                    return o[e] || (o[e] = r(e));
                };
            },
            function (e, t) {
                e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
            },
            function (e, t, n) {
                var o = n(5), r = n(12), i = n(0)('match');
                e.exports = function (e) {
                    var t;
                    return o(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == r(e));
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(56)(!0);
                e.exports = function (e, t, n) {
                    return t + (n ? o(e, t).length : 1);
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(26), r = RegExp.prototype.exec;
                e.exports = function (e, t) {
                    var n = e.exec;
                    if ('function' == typeof n) {
                        var i = n.call(e, t);
                        if ('object' != typeof i)
                            throw new TypeError('RegExp exec method returned something other than an Object or null');
                        return i;
                    }
                    if ('RegExp' !== o(e))
                        throw new TypeError('RegExp#exec called on incompatible receiver');
                    return r.call(e, t);
                };
            },
            function (e, t, n) {
                'use strict';
                var o, r, i = n(33), c = RegExp.prototype.exec, a = String.prototype.replace, s = c, u = (o = /a/, r = /b*/g, c.call(o, 'a'), c.call(r, 'a'), 0 !== o.lastIndex || 0 !== r.lastIndex), p = void 0 !== /()??/.exec('')[1];
                (u || p) && (s = function (e) {
                    var t, n, o, r, s = this;
                    return p && (n = new RegExp('^' + s.source + '$(?!\\s)', i.call(s))), u && (t = s.lastIndex), o = c.call(s, e), u && o && (s.lastIndex = s.global ? o.index + o[0].length : t), p && o && o.length > 1 && a.call(o[0], n, function () {
                        for (r = 1; r < arguments.length - 2; r++)
                            void 0 === arguments[r] && (o[r] = void 0);
                    }), o;
                }), e.exports = s;
            },
            function (e, t, n) {
                'use strict';
                n(85);
                var o = n(7), r = n(8), i = n(6), c = n(22), a = n(0), s = n(41), u = a('species'), p = !i(function () {
                        var e = /./;
                        return e.exec = function () {
                            var e = [];
                            return e.groups = { a: '7' }, e;
                        }, '7' !== ''.replace(e, '$<a>');
                    }), f = function () {
                        var e = /(?:)/, t = e.exec;
                        e.exec = function () {
                            return t.apply(this, arguments);
                        };
                        var n = 'ab'.split(e);
                        return 2 === n.length && 'a' === n[0] && 'b' === n[1];
                    }();
                e.exports = function (e, t, n) {
                    var l = a(e), d = !i(function () {
                            var t = {};
                            return t[l] = function () {
                                return 7;
                            }, 7 != ''[e](t);
                        }), v = d ? !i(function () {
                            var t = !1, n = /a/;
                            return n.exec = function () {
                                return t = !0, null;
                            }, 'split' === e && (n.constructor = {}, n.constructor[u] = function () {
                                return n;
                            }), n[l](''), !t;
                        }) : void 0;
                    if (!d || !v || 'replace' === e && !p || 'split' === e && !f) {
                        var h = /./[l], g = n(c, l, ''[e], function (e, t, n, o, r) {
                                return t.exec === s ? d && !r ? {
                                    done: !0,
                                    value: h.call(t, n, o)
                                } : {
                                    done: !0,
                                    value: e.call(n, t, o)
                                } : { done: !1 };
                            }), m = g[0], y = g[1];
                        o(String.prototype, e, m), r(RegExp.prototype, l, 2 == t ? function (e, t) {
                            return y.call(e, this, t);
                        } : function (e) {
                            return y.call(e, this);
                        });
                    }
                };
            },
            function (e, t) {
                t.f = {}.propertyIsEnumerable;
            },
            function (e, t, n) {
                var o = n(54), r = n(37).concat('length', 'prototype');
                t.f = Object.getOwnPropertyNames || function (e) {
                    return o(e, r);
                };
            },
            function (e, t, n) {
                e.exports = !n(3) && !n(6)(function () {
                    return 7 != Object.defineProperty(n(34)('div'), 'a', {
                        get: function () {
                            return 7;
                        }
                    }).a;
                });
            },
            function (e, t, n) {
                var o = n(2), r = n(25), i = n(0)('species');
                e.exports = function (e, t) {
                    var n, c = o(e).constructor;
                    return void 0 === c || null == (n = o(c)[i]) ? t : r(n);
                };
            },
            function (e, t, n) {
                var o, r, i, c = n(17), a = n(72), s = n(48), u = n(34), p = n(1), f = p.process, l = p.setImmediate, d = p.clearImmediate, v = p.MessageChannel, h = p.Dispatch, g = 0, m = {}, y = function () {
                        var e = +this;
                        if (m.hasOwnProperty(e)) {
                            var t = m[e];
                            delete m[e], t();
                        }
                    }, _ = function (e) {
                        y.call(e.data);
                    };
                l && d || (l = function (e) {
                    for (var t = [], n = 1; arguments.length > n;)
                        t.push(arguments[n++]);
                    return m[++g] = function () {
                        a('function' == typeof e ? e : Function(e), t);
                    }, o(g), g;
                }, d = function (e) {
                    delete m[e];
                }, 'process' == n(12)(f) ? o = function (e) {
                    f.nextTick(c(y, e, 1));
                } : h && h.now ? o = function (e) {
                    h.now(c(y, e, 1));
                } : v ? (i = (r = new v()).port2, r.port1.onmessage = _, o = c(i.postMessage, i, 1)) : p.addEventListener && 'function' == typeof postMessage && !p.importScripts ? (o = function (e) {
                    p.postMessage(e + '', '*');
                }, p.addEventListener('message', _, !1)) : o = 'onreadystatechange' in u('script') ? function (e) {
                    s.appendChild(u('script')).onreadystatechange = function () {
                        s.removeChild(this), y.call(e);
                    };
                } : function (e) {
                    setTimeout(c(y, e, 1), 0);
                }), e.exports = {
                    set: l,
                    clear: d
                };
            },
            function (e, t, n) {
                var o = n(1).document;
                e.exports = o && o.documentElement;
            },
            function (e, t, n) {
                'use strict';
                var o = n(25);
                function r(e) {
                    var t, n;
                    this.promise = new e(function (e, o) {
                        if (void 0 !== t || void 0 !== n)
                            throw TypeError('Bad Promise constructor');
                        t = e, n = o;
                    }), this.resolve = o(t), this.reject = o(n);
                }
                e.exports.f = function (e) {
                    return new r(e);
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(1), r = n(4), i = n(3), c = n(0)('species');
                e.exports = function (e) {
                    var t = o[e];
                    i && t && !t[c] && r.f(t, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        }
                    });
                };
            },
            function (e, t, n) {
                var o = n(0)('unscopables'), r = Array.prototype;
                null == r[o] && n(8)(r, o, {}), e.exports = function (e) {
                    r[o][e] = !0;
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(16), r = n(10), i = n(7), c = n(8), a = n(19), s = n(81), u = n(30), p = n(84), f = n(0)('iterator'), l = !([].keys && 'next' in [].keys()), d = function () {
                        return this;
                    };
                e.exports = function (e, t, n, v, h, g, m) {
                    s(n, t, v);
                    var y, _, w, b = function (e) {
                            if (!l && e in O)
                                return O[e];
                            switch (e) {
                            case 'keys':
                            case 'values':
                                return function () {
                                    return new n(this, e);
                                };
                            }
                            return function () {
                                return new n(this, e);
                            };
                        }, x = t + ' Iterator', S = 'values' == h, k = !1, O = e.prototype, P = O[f] || O['@@iterator'] || h && O[h], I = P || b(h), E = h ? S ? b('entries') : I : void 0, D = 'Array' == t && O.entries || P;
                    if (D && (w = p(D.call(new e()))) !== Object.prototype && w.next && (u(w, x, !0), o || 'function' == typeof w[f] || c(w, f, d)), S && P && 'values' !== P.name && (k = !0, I = function () {
                            return P.call(this);
                        }), o && !m || !l && !k && O[f] || c(O, f, I), a[t] = I, a[x] = d, h)
                        if (y = {
                                values: S ? I : b('values'),
                                keys: g ? I : b('keys'),
                                entries: E
                            }, m)
                            for (_ in y)
                                _ in O || i(O, _, y[_]);
                        else
                            r(r.P + r.F * (l || k), t, y);
                    return y;
                };
            },
            function (e, t, n) {
                var o = n(2), r = n(82), i = n(37), c = n(36)('IE_PROTO'), a = function () {
                    }, s = function () {
                        var e, t = n(34)('iframe'), o = i.length;
                        for (t.style.display = 'none', n(48).appendChild(t), t.src = 'javascript:', (e = t.contentWindow.document).open(), e.write('<script>document.F=Object</script>'), e.close(), s = e.F; o--;)
                            delete s.prototype[i[o]];
                        return s();
                    };
                e.exports = Object.create || function (e, t) {
                    var n;
                    return null !== e ? (a.prototype = o(e), n = new a(), a.prototype = null, n[c] = e) : n = s(), void 0 === t ? n : r(n, t);
                };
            },
            function (e, t, n) {
                var o = n(11), r = n(14), i = n(55)(!1), c = n(36)('IE_PROTO');
                e.exports = function (e, t) {
                    var n, a = r(e), s = 0, u = [];
                    for (n in a)
                        n != c && o(a, n) && u.push(n);
                    for (; t.length > s;)
                        o(a, n = t[s++]) && (~i(u, n) || u.push(n));
                    return u;
                };
            },
            function (e, t, n) {
                var o = n(14), r = n(20), i = n(83);
                e.exports = function (e) {
                    return function (t, n, c) {
                        var a, s = o(t), u = r(s.length), p = i(c, u);
                        if (e && n != n) {
                            for (; u > p;)
                                if ((a = s[p++]) != a)
                                    return !0;
                        } else
                            for (; u > p; p++)
                                if ((e || p in s) && s[p] === n)
                                    return e || p || 0;
                        return !e && -1;
                    };
                };
            },
            function (e, t, n) {
                var o = n(29), r = n(22);
                e.exports = function (e) {
                    return function (t, n) {
                        var i, c, a = String(r(t)), s = o(n), u = a.length;
                        return s < 0 || s >= u ? e ? '' : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (c = a.charCodeAt(s + 1)) < 56320 || c > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : c - 56320 + (i - 55296 << 10) + 65536;
                    };
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(38), r = n(2), i = n(46), c = n(39), a = n(20), s = n(40), u = n(41), p = n(6), f = Math.min, l = [].push, d = !p(function () {
                        RegExp(4294967295, 'y');
                    });
                n(42)('split', 2, function (e, t, n, p) {
                    var v;
                    return v = 'c' == 'abbc'.split(/(b)*/)[1] || 4 != 'test'.split(/(?:)/, -1).length || 2 != 'ab'.split(/(?:ab)*/).length || 4 != '.'.split(/(.?)(.?)/).length || '.'.split(/()()/).length > 1 || ''.split(/.?/).length ? function (e, t) {
                        var r = String(this);
                        if (void 0 === e && 0 === t)
                            return [];
                        if (!o(e))
                            return n.call(r, e, t);
                        for (var i, c, a, s = [], p = (e.ignoreCase ? 'i' : '') + (e.multiline ? 'm' : '') + (e.unicode ? 'u' : '') + (e.sticky ? 'y' : ''), f = 0, d = void 0 === t ? 4294967295 : t >>> 0, v = new RegExp(e.source, p + 'g'); (i = u.call(v, r)) && !((c = v.lastIndex) > f && (s.push(r.slice(f, i.index)), i.length > 1 && i.index < r.length && l.apply(s, i.slice(1)), a = i[0].length, f = c, s.length >= d));)
                            v.lastIndex === i.index && v.lastIndex++;
                        return f === r.length ? !a && v.test('') || s.push('') : s.push(r.slice(f)), s.length > d ? s.slice(0, d) : s;
                    } : '0'.split(void 0, 0).length ? function (e, t) {
                        return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                    } : n, [
                        function (n, o) {
                            var r = e(this), i = null == n ? void 0 : n[t];
                            return void 0 !== i ? i.call(n, r, o) : v.call(String(r), n, o);
                        },
                        function (e, t) {
                            var o = p(v, e, this, t, v !== n);
                            if (o.done)
                                return o.value;
                            var u = r(e), l = String(this), h = i(u, RegExp), g = u.unicode, m = (u.ignoreCase ? 'i' : '') + (u.multiline ? 'm' : '') + (u.unicode ? 'u' : '') + (d ? 'y' : 'g'), y = new h(d ? u : '^(?:' + u.source + ')', m), _ = void 0 === t ? 4294967295 : t >>> 0;
                            if (0 === _)
                                return [];
                            if (0 === l.length)
                                return null === s(y, l) ? [l] : [];
                            for (var w = 0, b = 0, x = []; b < l.length;) {
                                y.lastIndex = d ? b : 0;
                                var S, k = s(y, d ? l : l.slice(b));
                                if (null === k || (S = f(a(y.lastIndex + (d ? 0 : b)), l.length)) === w)
                                    b = c(l, b, g);
                                else {
                                    if (x.push(l.slice(w, b)), x.length === _)
                                        return x;
                                    for (var O = 1; O <= k.length - 1; O++)
                                        if (x.push(k[O]), x.length === _)
                                            return x;
                                    b = w = S;
                                }
                            }
                            return x.push(l.slice(w)), x;
                        }
                    ];
                });
            },
            function (e, t, n) {
                var o = n(1), r = n(9), i = n(16), c = n(59), a = n(4).f;
                e.exports = function (e) {
                    var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
                    '_' == e.charAt(0) || e in t || a(t, e, { value: c.f(e) });
                };
            },
            function (e, t, n) {
                t.f = n(0);
            },
            function (e, t) {
                t.f = Object.getOwnPropertySymbols;
            },
            function (e, t, n) {
                var o = n(43), r = n(28), i = n(14), c = n(35), a = n(11), s = n(45), u = Object.getOwnPropertyDescriptor;
                t.f = n(3) ? u : function (e, t) {
                    if (e = i(e), t = c(t, !0), s)
                        try {
                            return u(e, t);
                        } catch (e) {
                        }
                    if (a(e, t))
                        return r(!o.f.call(e, t), e[t]);
                };
            },
            function (e, t, n) {
                'use strict';
                n(92);
                var o = n(2), r = n(33), i = n(3), c = /./.toString, a = function (e) {
                        n(7)(RegExp.prototype, 'toString', e, !0);
                    };
                n(6)(function () {
                    return '/a/b' != c.call({
                        source: 'a',
                        flags: 'b'
                    });
                }) ? a(function () {
                    var e = o(this);
                    return '/'.concat(e.source, '/', 'flags' in e ? e.flags : !i && e instanceof RegExp ? r.call(e) : void 0);
                }) : 'toString' != c.name && a(function () {
                    return c.call(this);
                });
            },
            function (e, t, n) {
                'use strict';
                var o = n(2), r = n(31), i = n(20), c = n(29), a = n(39), s = n(40), u = Math.max, p = Math.min, f = Math.floor, l = /\$([$&`']|\d\d?|<[^>]*>)/g, d = /\$([$&`']|\d\d?)/g;
                n(42)('replace', 2, function (e, t, n, v) {
                    return [
                        function (o, r) {
                            var i = e(this), c = null == o ? void 0 : o[t];
                            return void 0 !== c ? c.call(o, i, r) : n.call(String(i), o, r);
                        },
                        function (e, t) {
                            var r = v(n, e, this, t);
                            if (r.done)
                                return r.value;
                            var f = o(e), l = String(this), d = 'function' == typeof t;
                            d || (t = String(t));
                            var g = f.global;
                            if (g) {
                                var m = f.unicode;
                                f.lastIndex = 0;
                            }
                            for (var y = [];;) {
                                var _ = s(f, l);
                                if (null === _)
                                    break;
                                if (y.push(_), !g)
                                    break;
                                '' === String(_[0]) && (f.lastIndex = a(l, i(f.lastIndex), m));
                            }
                            for (var w, b = '', x = 0, S = 0; S < y.length; S++) {
                                _ = y[S];
                                for (var k = String(_[0]), O = u(p(c(_.index), l.length), 0), P = [], I = 1; I < _.length; I++)
                                    P.push(void 0 === (w = _[I]) ? w : String(w));
                                var E = _.groups;
                                if (d) {
                                    var D = [k].concat(P, O, l);
                                    void 0 !== E && D.push(E);
                                    var j = String(t.apply(void 0, D));
                                } else
                                    j = h(k, l, O, P, E, t);
                                O >= x && (b += l.slice(x, O) + j, x = O + k.length);
                            }
                            return b + l.slice(x);
                        }
                    ];
                    function h(e, t, o, i, c, a) {
                        var s = o + e.length, u = i.length, p = d;
                        return void 0 !== c && (c = r(c), p = l), n.call(a, p, function (n, r) {
                            var a;
                            switch (r.charAt(0)) {
                            case '$':
                                return '$';
                            case '&':
                                return e;
                            case '`':
                                return t.slice(0, o);
                            case '\'':
                                return t.slice(s);
                            case '<':
                                a = c[r.slice(1, -1)];
                                break;
                            default:
                                var p = +r;
                                if (0 === p)
                                    return n;
                                if (p > u) {
                                    var l = f(p / 10);
                                    return 0 === l ? n : l <= u ? void 0 === i[l - 1] ? r.charAt(1) : i[l - 1] + r.charAt(1) : n;
                                }
                                a = i[p - 1];
                            }
                            return void 0 === a ? '' : a;
                        });
                    }
                });
            },
            function (e, t, n) {
                var o = n(31), r = n(23);
                n(102)('keys', function () {
                    return function (e) {
                        return r(o(e));
                    };
                });
            },
            function (e) {
                e.exports = JSON.parse('{"name":"clientjs-v2","version":"1.0.48","description":"","main":"webpack.config.js","scripts":{"jest":"jest --testPathPattern ./__tests__/ --verbose --colors","jest-integration":"jest --testPathPattern ./__tests__/integration --verbose --colors","test":"BABEL_DEBUG=0 PORT=8080 webpack-dev-server --config test.config.js","build-messaging":"webpack --config messaging.config.js","build-messagingWithoutDetection":"webpack --config messagingWithoutDetection.config.js","build-ccpa":"webpack --config ccpa.config.js","dev":"webpack-dev-server --config dev.config.js --open"},"author":"","license":"ISC","devDependencies":{"jest":"^24.9.0","npm":"^6.14.8","sp-test-core":"git+ssh://git@github.com/SourcePointUSA/sp-testing-core.git","webpack-bundle-analyzer":"^3.5.2","webpack-cli":"^3.3.6","webpack-dev-server":"^3.7.2"},"dependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","babel-loader":"^8.0.6","babel-minify-webpack-plugin":"^0.3.1","compression-webpack-plugin":"^3.0.0","consent-string":"^1.4.2","core-js":"^2.6.10","terser-webpack-plugin":"^1.3.0","uglifyjs-webpack-plugin":"^2.1.3","webpack":"^4.35.3"}}');
            },
            function (e, t, n) {
                e.exports = n(27)('native-function-to-string', Function.toString);
            },
            function (e, t) {
                e.exports = function (e, t, n, o) {
                    if (!(e instanceof t) || void 0 !== o && o in e)
                        throw TypeError(n + ': incorrect invocation!');
                    return e;
                };
            },
            function (e, t, n) {
                var o = n(17), r = n(69), i = n(70), c = n(2), a = n(20), s = n(71), u = {}, p = {};
                (t = e.exports = function (e, t, n, f, l) {
                    var d, v, h, g, m = l ? function () {
                            return e;
                        } : s(e), y = o(n, f, t ? 2 : 1), _ = 0;
                    if ('function' != typeof m)
                        throw TypeError(e + ' is not iterable!');
                    if (i(m)) {
                        for (d = a(e.length); d > _; _++)
                            if ((g = t ? y(c(v = e[_])[0], v[1]) : y(e[_])) === u || g === p)
                                return g;
                    } else
                        for (h = m.call(e); !(v = h.next()).done;)
                            if ((g = r(h, y, v.value, t)) === u || g === p)
                                return g;
                }).BREAK = u, t.RETURN = p;
            },
            function (e, t, n) {
                var o = n(2);
                e.exports = function (e, t, n, r) {
                    try {
                        return r ? t(o(n)[0], n[1]) : t(n);
                    } catch (t) {
                        var i = e.return;
                        throw void 0 !== i && o(i.call(e)), t;
                    }
                };
            },
            function (e, t, n) {
                var o = n(19), r = n(0)('iterator'), i = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (o.Array === e || i[r] === e);
                };
            },
            function (e, t, n) {
                var o = n(26), r = n(0)('iterator'), i = n(19);
                e.exports = n(9).getIteratorMethod = function (e) {
                    if (null != e)
                        return e[r] || e['@@iterator'] || i[o(e)];
                };
            },
            function (e, t) {
                e.exports = function (e, t, n) {
                    var o = void 0 === n;
                    switch (t.length) {
                    case 0:
                        return o ? e() : e.call(n);
                    case 1:
                        return o ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
                    }
                    return e.apply(n, t);
                };
            },
            function (e, t, n) {
                var o = n(1), r = n(47).set, i = o.MutationObserver || o.WebKitMutationObserver, c = o.process, a = o.Promise, s = 'process' == n(12)(c);
                e.exports = function () {
                    var e, t, n, u = function () {
                            var o, r;
                            for (s && (o = c.domain) && o.exit(); e;) {
                                r = e.fn, e = e.next;
                                try {
                                    r();
                                } catch (o) {
                                    throw e ? n() : t = void 0, o;
                                }
                            }
                            t = void 0, o && o.enter();
                        };
                    if (s)
                        n = function () {
                            c.nextTick(u);
                        };
                    else if (!i || o.navigator && o.navigator.standalone)
                        if (a && a.resolve) {
                            var p = a.resolve(void 0);
                            n = function () {
                                p.then(u);
                            };
                        } else
                            n = function () {
                                r.call(o, u);
                            };
                    else {
                        var f = !0, l = document.createTextNode('');
                        new i(u).observe(l, { characterData: !0 }), n = function () {
                            l.data = f = !f;
                        };
                    }
                    return function (o) {
                        var r = {
                            fn: o,
                            next: void 0
                        };
                        t && (t.next = r), e || (e = r, n()), t = r;
                    };
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    try {
                        return {
                            e: !1,
                            v: e()
                        };
                    } catch (e) {
                        return {
                            e: !0,
                            v: e
                        };
                    }
                };
            },
            function (e, t, n) {
                var o = n(1).navigator;
                e.exports = o && o.userAgent || '';
            },
            function (e, t, n) {
                var o = n(2), r = n(5), i = n(49);
                e.exports = function (e, t) {
                    if (o(e), r(t) && t.constructor === e)
                        return t;
                    var n = i.f(e);
                    return (0, n.resolve)(t), n.promise;
                };
            },
            function (e, t, n) {
                var o = n(7);
                e.exports = function (e, t, n) {
                    for (var r in t)
                        o(e, r, t[r], n);
                    return e;
                };
            },
            function (e, t, n) {
                var o = n(0)('iterator'), r = !1;
                try {
                    var i = [7][o]();
                    i.return = function () {
                        r = !0;
                    }, Array.from(i, function () {
                        throw 2;
                    });
                } catch (e) {
                }
                e.exports = function (e, t) {
                    if (!t && !r)
                        return !1;
                    var n = !1;
                    try {
                        var i = [7], c = i[o]();
                        c.next = function () {
                            return { done: n = !0 };
                        }, i[o] = function () {
                            return c;
                        }, e(i);
                    } catch (e) {
                    }
                    return n;
                };
            },
            function (e, t) {
                e.exports = function (e, t) {
                    return {
                        value: t,
                        done: !!e
                    };
                };
            },
            function (e, t, n) {
                var o = n(12);
                e.exports = Object('z').propertyIsEnumerable(0) ? Object : function (e) {
                    return 'String' == o(e) ? e.split('') : Object(e);
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(53), r = n(28), i = n(30), c = {};
                n(8)(c, n(0)('iterator'), function () {
                    return this;
                }), e.exports = function (e, t, n) {
                    e.prototype = o(c, { next: r(1, n) }), i(e, t + ' Iterator');
                };
            },
            function (e, t, n) {
                var o = n(4), r = n(2), i = n(23);
                e.exports = n(3) ? Object.defineProperties : function (e, t) {
                    r(e);
                    for (var n, c = i(t), a = c.length, s = 0; a > s;)
                        o.f(e, n = c[s++], t[n]);
                    return e;
                };
            },
            function (e, t, n) {
                var o = n(29), r = Math.max, i = Math.min;
                e.exports = function (e, t) {
                    return (e = o(e)) < 0 ? r(e + t, 0) : i(e, t);
                };
            },
            function (e, t, n) {
                var o = n(11), r = n(31), i = n(36)('IE_PROTO'), c = Object.prototype;
                e.exports = Object.getPrototypeOf || function (e) {
                    return e = r(e), o(e, i) ? e[i] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null;
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(41);
                n(10)({
                    target: 'RegExp',
                    proto: !0,
                    forced: o !== /./.exec
                }, { exec: o });
            },
            function (e, t, n) {
                n(58)('asyncIterator');
            },
            function (e, t, n) {
                'use strict';
                var o = n(1), r = n(11), i = n(3), c = n(10), a = n(7), s = n(88).KEY, u = n(6), p = n(27), f = n(30), l = n(18), d = n(0), v = n(59), h = n(58), g = n(89), m = n(90), y = n(2), _ = n(5), w = n(31), b = n(14), x = n(35), S = n(28), k = n(53), O = n(91), P = n(61), I = n(60), E = n(4), D = n(23), j = P.f, U = E.f, M = O.f, A = o.Symbol, T = o.JSON, C = T && T.stringify, N = d('_hidden'), L = d('toPrimitive'), R = {}.propertyIsEnumerable, J = p('symbol-registry'), G = p('symbols'), F = p('op-symbols'), B = Object.prototype, q = 'function' == typeof A && !!I.f, $ = o.QObject, H = !$ || !$.prototype || !$.prototype.findChild, z = i && u(function () {
                        return 7 != k(U({}, 'a', {
                            get: function () {
                                return U(this, 'a', { value: 7 }).a;
                            }
                        })).a;
                    }) ? function (e, t, n) {
                        var o = j(B, t);
                        o && delete B[t], U(e, t, n), o && e !== B && U(B, t, o);
                    } : U, V = function (e) {
                        var t = G[e] = k(A.prototype);
                        return t._k = e, t;
                    }, W = q && 'symbol' == typeof A.iterator ? function (e) {
                        return 'symbol' == typeof e;
                    } : function (e) {
                        return e instanceof A;
                    }, Y = function (e, t, n) {
                        return e === B && Y(F, t, n), y(e), t = x(t, !0), y(n), r(G, t) ? (n.enumerable ? (r(e, N) && e[N][t] && (e[N][t] = !1), n = k(n, { enumerable: S(0, !1) })) : (r(e, N) || U(e, N, S(1, {})), e[N][t] = !0), z(e, t, n)) : U(e, t, n);
                    }, K = function (e, t) {
                        y(e);
                        for (var n, o = g(t = b(t)), r = 0, i = o.length; i > r;)
                            Y(e, n = o[r++], t[n]);
                        return e;
                    }, Q = function (e) {
                        var t = R.call(this, e = x(e, !0));
                        return !(this === B && r(G, e) && !r(F, e)) && (!(t || !r(this, e) || !r(G, e) || r(this, N) && this[N][e]) || t);
                    }, X = function (e, t) {
                        if (e = b(e), t = x(t, !0), e !== B || !r(G, t) || r(F, t)) {
                            var n = j(e, t);
                            return !n || !r(G, t) || r(e, N) && e[N][t] || (n.enumerable = !0), n;
                        }
                    }, Z = function (e) {
                        for (var t, n = M(b(e)), o = [], i = 0; n.length > i;)
                            r(G, t = n[i++]) || t == N || t == s || o.push(t);
                        return o;
                    }, ee = function (e) {
                        for (var t, n = e === B, o = M(n ? F : b(e)), i = [], c = 0; o.length > c;)
                            !r(G, t = o[c++]) || n && !r(B, t) || i.push(G[t]);
                        return i;
                    };
                q || (a((A = function () {
                    if (this instanceof A)
                        throw TypeError('Symbol is not a constructor!');
                    var e = l(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
                            this === B && t.call(F, n), r(this, N) && r(this[N], e) && (this[N][e] = !1), z(this, e, S(1, n));
                        };
                    return i && H && z(B, e, {
                        configurable: !0,
                        set: t
                    }), V(e);
                }).prototype, 'toString', function () {
                    return this._k;
                }), P.f = X, E.f = Y, n(44).f = O.f = Z, n(43).f = Q, I.f = ee, i && !n(16) && a(B, 'propertyIsEnumerable', Q, !0), v.f = function (e) {
                    return V(d(e));
                }), c(c.G + c.W + c.F * !q, { Symbol: A });
                for (var te = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), ne = 0; te.length > ne;)
                    d(te[ne++]);
                for (var oe = D(d.store), re = 0; oe.length > re;)
                    h(oe[re++]);
                c(c.S + c.F * !q, 'Symbol', {
                    for: function (e) {
                        return r(J, e += '') ? J[e] : J[e] = A(e);
                    },
                    keyFor: function (e) {
                        if (!W(e))
                            throw TypeError(e + ' is not a symbol!');
                        for (var t in J)
                            if (J[t] === e)
                                return t;
                    },
                    useSetter: function () {
                        H = !0;
                    },
                    useSimple: function () {
                        H = !1;
                    }
                }), c(c.S + c.F * !q, 'Object', {
                    create: function (e, t) {
                        return void 0 === t ? k(e) : K(k(e), t);
                    },
                    defineProperty: Y,
                    defineProperties: K,
                    getOwnPropertyDescriptor: X,
                    getOwnPropertyNames: Z,
                    getOwnPropertySymbols: ee
                });
                var ie = u(function () {
                    I.f(1);
                });
                c(c.S + c.F * ie, 'Object', {
                    getOwnPropertySymbols: function (e) {
                        return I.f(w(e));
                    }
                }), T && c(c.S + c.F * (!q || u(function () {
                    var e = A();
                    return '[null]' != C([e]) || '{}' != C({ a: e }) || '{}' != C(Object(e));
                })), 'JSON', {
                    stringify: function (e) {
                        for (var t, n, o = [e], r = 1; arguments.length > r;)
                            o.push(arguments[r++]);
                        if (n = t = o[1], (_(t) || void 0 !== e) && !W(e))
                            return m(t) || (t = function (e, t) {
                                if ('function' == typeof n && (t = n.call(this, e, t)), !W(t))
                                    return t;
                            }), o[1] = t, C.apply(T, o);
                    }
                }), A.prototype[L] || n(8)(A.prototype, L, A.prototype.valueOf), f(A, 'Symbol'), f(Math, 'Math', !0), f(o.JSON, 'JSON', !0);
            },
            function (e, t, n) {
                var o = n(18)('meta'), r = n(5), i = n(11), c = n(4).f, a = 0, s = Object.isExtensible || function () {
                        return !0;
                    }, u = !n(6)(function () {
                        return s(Object.preventExtensions({}));
                    }), p = function (e) {
                        c(e, o, {
                            value: {
                                i: 'O' + ++a,
                                w: {}
                            }
                        });
                    }, f = e.exports = {
                        KEY: o,
                        NEED: !1,
                        fastKey: function (e, t) {
                            if (!r(e))
                                return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
                            if (!i(e, o)) {
                                if (!s(e))
                                    return 'F';
                                if (!t)
                                    return 'E';
                                p(e);
                            }
                            return e[o].i;
                        },
                        getWeak: function (e, t) {
                            if (!i(e, o)) {
                                if (!s(e))
                                    return !0;
                                if (!t)
                                    return !1;
                                p(e);
                            }
                            return e[o].w;
                        },
                        onFreeze: function (e) {
                            return u && f.NEED && s(e) && !i(e, o) && p(e), e;
                        }
                    };
            },
            function (e, t, n) {
                var o = n(23), r = n(60), i = n(43);
                e.exports = function (e) {
                    var t = o(e), n = r.f;
                    if (n)
                        for (var c, a = n(e), s = i.f, u = 0; a.length > u;)
                            s.call(e, c = a[u++]) && t.push(c);
                    return t;
                };
            },
            function (e, t, n) {
                var o = n(12);
                e.exports = Array.isArray || function (e) {
                    return 'Array' == o(e);
                };
            },
            function (e, t, n) {
                var o = n(14), r = n(44).f, i = {}.toString, c = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                e.exports.f = function (e) {
                    return c && '[object Window]' == i.call(e) ? function (e) {
                        try {
                            return r(e);
                        } catch (e) {
                            return c.slice();
                        }
                    }(e) : r(o(e));
                };
            },
            function (e, t, n) {
                n(3) && 'g' != /./g.flags && n(4).f(RegExp.prototype, 'flags', {
                    configurable: !0,
                    get: n(33)
                });
            },
            function (e, t, n) {
                var o = n(4).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
                'name' in r || n(3) && o(r, 'name', {
                    configurable: !0,
                    get: function () {
                        try {
                            return ('' + this).match(i)[1];
                        } catch (e) {
                            return '';
                        }
                    }
                });
            },
            function (e, t, n) {
                'use strict';
                var o = n(2), r = n(20), i = n(39), c = n(40);
                n(42)('match', 1, function (e, t, n, a) {
                    return [
                        function (n) {
                            var o = e(this), r = null == n ? void 0 : n[t];
                            return void 0 !== r ? r.call(n, o) : new RegExp(n)[t](String(o));
                        },
                        function (e) {
                            var t = a(n, e, this);
                            if (t.done)
                                return t.value;
                            var s = o(e), u = String(this);
                            if (!s.global)
                                return c(s, u);
                            var p = s.unicode;
                            s.lastIndex = 0;
                            for (var f, l = [], d = 0; null !== (f = c(s, u));) {
                                var v = String(f[0]);
                                l[d] = v, '' === v && (s.lastIndex = i(u, r(s.lastIndex), p)), d++;
                            }
                            return 0 === d ? null : l;
                        }
                    ];
                });
            },
            function (e, t, n) {
                var o = n(1), r = n(96), i = n(4).f, c = n(44).f, a = n(38), s = n(33), u = o.RegExp, p = u, f = u.prototype, l = /a/g, d = /a/g, v = new u(l) !== l;
                if (n(3) && (!v || n(6)(function () {
                        return d[n(0)('match')] = !1, u(l) != l || u(d) == d || '/a/i' != u(l, 'i');
                    }))) {
                    u = function (e, t) {
                        var n = this instanceof u, o = a(e), i = void 0 === t;
                        return !n && o && e.constructor === u && i ? e : r(v ? new p(o && !i ? e.source : e, t) : p((o = e instanceof u) ? e.source : e, o && i ? s.call(e) : t), n ? this : f, u);
                    };
                    for (var h = function (e) {
                                e in u || i(u, e, {
                                    configurable: !0,
                                    get: function () {
                                        return p[e];
                                    },
                                    set: function (t) {
                                        p[e] = t;
                                    }
                                });
                            }, g = c(p), m = 0; g.length > m;)
                        h(g[m++]);
                    f.constructor = u, u.prototype = f, n(7)(o, 'RegExp', u);
                }
                n(50)('RegExp');
            },
            function (e, t, n) {
                var o = n(5), r = n(97).set;
                e.exports = function (e, t, n) {
                    var i, c = t.constructor;
                    return c !== n && 'function' == typeof c && (i = c.prototype) !== n.prototype && o(i) && r && r(e, i), e;
                };
            },
            function (e, t, n) {
                var o = n(5), r = n(2), i = function (e, t) {
                        if (r(e), !o(t) && null !== t)
                            throw TypeError(t + ': can\'t set as prototype!');
                    };
                e.exports = {
                    set: Object.setPrototypeOf || ('__proto__' in {} ? function (e, t, o) {
                        try {
                            (o = n(17)(Function.call, n(61).f(Object.prototype, '__proto__').set, 2))(e, []), t = !(e instanceof Array);
                        } catch (e) {
                            t = !0;
                        }
                        return function (e, n) {
                            return i(e, n), t ? e.__proto__ = n : o(e, n), e;
                        };
                    }({}, !1) : void 0),
                    check: i
                };
            },
            function (e, t, n) {
                'use strict';
                var o = n(10), r = n(55)(!0);
                o(o.P, 'Array', {
                    includes: function (e) {
                        return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }), n(51)('includes');
            },
            function (e, t, n) {
                'use strict';
                var o = n(10), r = n(100);
                o(o.P + o.F * n(101)('includes'), 'String', {
                    includes: function (e) {
                        return !!~r(this, e, 'includes').indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                });
            },
            function (e, t, n) {
                var o = n(38), r = n(22);
                e.exports = function (e, t, n) {
                    if (o(t))
                        throw TypeError('String#' + n + ' doesn\'t accept regex!');
                    return String(r(e));
                };
            },
            function (e, t, n) {
                var o = n(0)('match');
                e.exports = function (e) {
                    var t = /./;
                    try {
                        '/./'[e](t);
                    } catch (n) {
                        try {
                            return t[o] = !1, !'/./'[e](t);
                        } catch (e) {
                        }
                    }
                    return !0;
                };
            },
            function (e, t, n) {
                var o = n(10), r = n(9), i = n(6);
                e.exports = function (e, t) {
                    var n = (r.Object || {})[e] || Object[e], c = {};
                    c[e] = t(n), o(o.S + o.F * i(function () {
                        n(1);
                    }), 'Object', c);
                };
            },
            function (e, t, n) {
                'use strict';
                n.r(t);
                n(15), n(21), n(13), n(24), n(32), n(57), n(86), n(87), n(62), n(93), n(94), n(95), n(63), n(98), n(99), n(64);
                var o = function (e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], o = e.indexOf('?') > -1 ? '&requestUUID='.concat(window._sp_ccpa.requestUUID) : '?requestUUID='.concat(window._sp_ccpa.requestUUID);
                        e += o;
                        var r = t.method, i = t.params, c = void 0 === i ? {} : i, a = t.body, s = Object.keys(c).reduce(function (e, t) {
                                if (null !== c[t] || void 0 !== c[t])
                                    return e + '&'.concat(t, '=').concat(encodeURIComponent(c[t]));
                            }, '');
                        return s.length > 1 && (e += s), new Promise(function (t, o) {
                            const $___old_64842053f00d5731 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_79cf89757d7a64ad = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                            try {
                                if ($___old_64842053f00d5731)
                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1216bee92518ecfd.XMLHttpRequest));
                                if ($___old_79cf89757d7a64ad)
                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1216bee92518ecfd.XMLHttpRequest));
                                return function () {
                                    var i = new XMLHttpRequest();
                                    'withCredentials' in i && (i.withCredentials = n);
                                    i.addEventListener('load', function (e) {
                                        t(i.response);
                                    }), i.addEventListener('error', function (e) {
                                        o(e);
                                    }), i.open(r, e), 'POST' === r ? (i.setRequestHeader('Content-Type', 'application/json'), i.send(JSON.stringify(a))) : i.send();
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_64842053f00d5731)
                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_64842053f00d5731));
                                if ($___old_79cf89757d7a64ad)
                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_79cf89757d7a64ad));
                            }
                        });
                    }, r = function (e) {
                        var t = e.js, n = e.type;
                        if (!t)
                            return Promise.resolve();
                        var o = new Function(t);
                        if ('inline' === n)
                            try {
                                return o(), Promise.resolve();
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        else if ('promise' === n)
                            return o();
                    }, i = function (e, t) {
                        t || (t = window.location.href), e = (e = e.replace('[', '\\$&')).replace(']', '\\$&');
                        var n = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t);
                        return n ? n[2] ? decodeURIComponent(n[2].replace('+', ' ')) : '' : null;
                    }, c = function (e) {
                        var t = new RegExp('('.concat(e, '=\\S[^;]*)'), 'g'), n = document.cookie.match(t, 'g');
                        return n && n[0].split('=')[1];
                    }, a = function (e) {
                        var t = document.createElement('style');
                        t.type = 'text/css', t.innerHTML = e, document.getElementsByTagName('head')[0].appendChild(t);
                    }, s = function (e) {
                        return /cmp.sp-stage.net|sourcepoint.mgr.consensu.org/g.test(e);
                    }, u = function (e) {
                        return /mms/g.test(e);
                    }, p = function e(t, n, c, a) {
                        var p = c.commands, f = void 0 === p ? [] : p, l = c.cookies, d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], v = arguments.length > 5 ? arguments[5] : void 0;
                        return M(l).then(function (c) {
                            return Promise.all(f.map(function (c) {
                                if ('send_data' === c.command) {
                                    var p = c.data, f = p.body, l = p.method, h = p.actions, g = p.callback_path, m = p.url;
                                    if (m.indexOf('logic') >= 0)
                                        return;
                                    return h && h.forEach(function (e) {
                                        'read_cookie' === e.type && (m = m.replace(e.at, S('cookies', e.name)));
                                    }), o(m, {
                                        method: l,
                                        body: f
                                    }).then(JSON.parse).then(function (e) {
                                        var t = e.actions, n = e.cookies;
                                        return t && s(m) ? Promise.all(t.map(r)).then(function (e) {
                                            return M(n);
                                        }) : Promise.resolve();
                                    }).then(function (r) {
                                        return g ? (g = _(g, !0), o(t + g, {
                                            method: 'GET',
                                            params: { cookie: JSON.stringify(y(document.cookie)) }
                                        }).then(function (o) {
                                            return u(g) ? e(t, n, o ? JSON.parse(o) : {}, a, d) : Promise.resolve();
                                        })) : Promise.resolve();
                                    });
                                }
                                if ('iframewithcallback' === c.command) {
                                    var w = c.data, b = w.src, x = w.callback_path;
                                    if (b.indexOf('pm.sourcepoint.mgr.consensu.org') > 0 || b.indexOf('pm.cmp.sp-stage.net') > 0 || b.indexOf('ccpa') > 0) {
                                        var k = i('privacy_manager_id', b) || window._sp_ccpa.config.privacyManagerId;
                                        window._sp_ccpa.loadPrivacyManagerModal(n, k, a, x, d, v);
                                    }
                                }
                            }));
                        });
                    }, f = {}, l = function (e, t) {
                        f[e] || (f[e] = []), f[e].push(t);
                    }, d = function (e, t) {
                        f[e] && f[e].forEach(function (e) {
                            if ('function' == typeof e)
                                try {
                                    e.apply(null, t);
                                } catch (e) {
                                    console.log('Callback execution error: ', e);
                                }
                        });
                    }, v = function () {
                        window._sp_ccpa_queue && Array.isArray(window._sp_ccpa_queue) || (window._sp_ccpa_queue = []);
                        var e = function (e) {
                            try {
                                e(window._sp_ccpa);
                            } catch (e) {
                                handleError(e);
                            }
                        };
                        window._sp_ccpa_queue.forEach(e), window._sp_ccpa.processedQueue = window._sp_ccpa_queue, window._sp_ccpa_queue = Object.defineProperties([], { push: { value: e } });
                    }, h = function (e, t, n, i, a, s, u) {
                        var f = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 'https://ccpa-service.sp-prod.net', v = arguments.length > 9 ? arguments[9] : void 0, h = function () {
                                var a;
                                return 'sp.hideMessage' === s.data.name ? (f || (n.style.display = 'none', document.documentElement.classList.remove('sp-message-open')), window.removeEventListener('message', u), a = s.data.actions, Promise.all(a.filter(function (e) {
                                    return 'choice' === e.type;
                                }).map(function (a) {
                                    var s = a.type, u = a.data;
                                    if ('choice' === s) {
                                        var h = u.choice_id, g = u.type;
                                        if (13 === g)
                                            return o(''.concat(l, '/ccpa/consent/').concat(t, '/reject-all'), {
                                                method: 'POST',
                                                body: {
                                                    ccpaUUID: S('cookies', 'ccpaUUID'),
                                                    authId: S('cookies', 'authId'),
                                                    mmsDomain: e,
                                                    messageId: v,
                                                    pubData: S('cookies', 'pubData')
                                                }
                                            }).then(function (e) {
                                                var t = JSON.parse(e), n = t.actions, o = t.cookies;
                                                return d('onMessageChoiceSelect', [
                                                    h,
                                                    g
                                                ]), Promise.all(n.map(r)).then(function (e) {
                                                    return M(o);
                                                });
                                            }).catch(function (e) {
                                                return console.log('Error rejecting all from message.');
                                            });
                                        if (11 === g)
                                            return o(''.concat(l, '/ccpa/consent/').concat(t, '/consent-all'), {
                                                method: 'POST',
                                                body: {
                                                    ccpaUUID: S('cookies', 'ccpaUUID'),
                                                    authId: S('cookies', 'authId'),
                                                    mmsDomain: e,
                                                    messageId: v,
                                                    pubData: S('cookies', 'pubData')
                                                }
                                            }).then(function (e) {
                                                var t = JSON.parse(e), n = t.actions, o = t.cookies;
                                                return d('onMessageChoiceSelect', [
                                                    h,
                                                    g
                                                ]), Promise.all(n.map(r)).then(function (e) {
                                                    return M(o);
                                                });
                                            }).catch(function (e) {
                                                return console.log('Error rejecting all from message.');
                                            });
                                        var m = {
                                            choice_id: h,
                                            href: i,
                                            cookie: JSON.stringify(y(document.cookie)),
                                            ccpaUUID: S('cookies', 'ccpaUUID')
                                        };
                                        return d('onMessageChoiceSelect', [
                                            h,
                                            g
                                        ]), o(''.concat(e, '/mms/choice_select'), {
                                            method: 'GET',
                                            params: m
                                        }).then(JSON.parse).then(function (o) {
                                            return p(e, t, o, n, f, v);
                                        }).then(function (e) {
                                            if (15 === g || 13 === g || 11 === g) {
                                                var t = c('consentUUID'), n = c('euconsent') || 'BOS22d1OS22d1AGABAENBfAAAAAgmAAA';
                                                d('onConsentReady', [
                                                    t,
                                                    n
                                                ]);
                                            }
                                        });
                                    }
                                }))) : 'sp.showMessage' === s.data.name ? (d('onMessageReady'), n.style.display = 'block', !1 === s.data.settings.lockScroll && document.documentElement.classList.remove('sp-message-open'), 'top' !== s.data.settings.type && 'bottom' !== s.data.settings.type || (n.style.height = '0px', n.style.top = 'top' === s.data.settings.type ? '0px' : 'auto'), Promise.resolve()) : 'sp.resizeMessage' === s.data.name ? (n.style.height = s.data.showVeil ? '100%' : ''.concat(s.data.height, 'px'), Promise.resolve()) : Promise.resolve();
                            };
                        s.origin === a && h().catch(function (e) {
                            g(), d('onMessageChoiceError', [e]), console.log('Error occured from msg post: ', e);
                        });
                    }, g = function () {
                        [
                            {
                                key: 'gdprApplies',
                                value: '',
                                expires: 'Thu, 01 Jan 1970 00:00:00 GMT'
                            },
                            {
                                key: 'hasGlobalScope',
                                value: '',
                                expires: 'Thu, 01 Jan 1970 00:00:00 GMT'
                            },
                            {
                                key: 'consentUUID',
                                value: '',
                                expires: 'Thu, 01 Jan 1970 00:00:00 GMT'
                            },
                            {
                                key: 'euconsent',
                                value: '',
                                expires: 'Thu, 01 Jan 1970 00:00:00 GMT'
                            },
                            {
                                key: '_sp_enable_dfp_personalized_ads',
                                value: !1
                            }
                        ].forEach(function (e) {
                            var t = e.key, n = e.value, o = e.expires, r = e.maxAge, i = o ? '; expires='.concat(o) : '', c = r ? '; Max-Age='.concat(r) : '';
                            document.cookie = ''.concat(t, '=').concat(n).concat(i).concat(c);
                        });
                    }, m = function (e) {
                        'complete' === document.readyState || 'interactive' === document.readyState ? setTimeout(e, 1) : document.addEventListener('DOMContentLoaded', e);
                    }, y = function (e) {
                        return e.split(' ').map(function (e) {
                            return e.trim();
                        }).filter(function (e) {
                            return 0 === e.indexOf('_sp_');
                        });
                    }, _ = function (e) {
                        e = (e = e.replace('[RET]', 0)).replace('[STATUS]', 'true');
                        var t = c('consentUUID'), n = c('euconsent');
                        return t && n && (e = e.replace('[DATA]', encodeURIComponent(JSON.stringify({
                            consentUUID: t,
                            euconsent: n
                        })))), e;
                    };
                function w(e) {
                    return (w = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var b = null, x = { cookies: {} }, S = function (e, t) {
                        if (null != e && e in x) {
                            if (null != t) {
                                if ('cookies' === e) {
                                    var n = c(t);
                                    if (n && n.length > 0)
                                        return n;
                                }
                                return x[e][t];
                            }
                            return x[e];
                        }
                        return null;
                    }, k = function (e, t, n) {
                        null != e && null != t && (null != n ? x[t][n] = e : x[t] = e);
                    }, O = {
                        getuspdata: function (e, t) {
                            if (e = e || '1', 'true' === S('cookies', 'ccpaApplies')) {
                                var n = 'true' === S('cookies', 'ccpaReject'), o = 'true' === S('cookies', 'signedLspa') ? 'Y' : 'N', r = '';
                                n ? r = e + 'YY' + o : n || (r = e + 'YN' + o), t({
                                    version: e,
                                    uspString: r,
                                    newUser: S('newUser'),
                                    dateCreated: S('dateCreated')
                                }, !0);
                            } else
                                t({
                                    version: e,
                                    uspString: e + '---'
                                }, !0);
                        },
                        getcustomvendorrejects: function (e, t, n, r) {
                            if (b)
                                t(b, !0);
                            else {
                                var i = ''.concat(n, '/ccpa/consent/').concat(r, '/custom-vendors?ccpaUUID=').concat(S('cookies', 'ccpaUUID'));
                                o(i, { method: 'GET' }).then(function (e) {
                                    return JSON.parse(e);
                                }).then(function (e) {
                                    var n = e.rejectedCategories, o = e.rejectedVendors, r = e.ccpaApplies;
                                    t(b = {
                                        rejectedCategories: n,
                                        rejectedVendors: o,
                                        ccpaApplies: r
                                    }, !0);
                                }).catch(function (e) {
                                    return t(null, !1);
                                });
                            }
                        }
                    }, P = function (e) {
                        var t = e.newUser, n = e.userConsent.dateCreated;
                        return k(t, 'newUser'), k(n, 'dateCreated'), e;
                    }, I = function (e, t, n, r) {
                        return o(e + '/ccpa/consent/'.concat(t, '/display-dns'), {
                            method: 'POST',
                            body: {
                                getDnsMessage: !1,
                                ccpaUUID: S('cookies', 'ccpaUUID'),
                                dnsDisplayed: !0,
                                messageId: n,
                                dnsCookieSet: 'true' === S('cookies', 'dnsDisplayed'),
                                authId: S('cookies', 'authId'),
                                mmsDomain: r,
                                pubData: S('cookies', 'pubData'),
                                ageGate: S('cookies', 'ageGate')
                            }
                        }).then(JSON.parse).then(P);
                    }, E = function (e, t) {
                        var n = window.__uspapi.a;
                        !function (e, t) {
                            window.__uspapi = function (n, o, r) {
                                'string' == typeof n && (n = n.toLowerCase());
                                var i = O[n];
                                i && i(o, r, e, t);
                            };
                        }(e, t), n && n.length > 0 && n.forEach(function (e) {
                            window.__uspapi.apply(null, e);
                        });
                    }, D = function (e, t) {
                        'true' === S('cookies', 'dnsDisplayed') ? E(e, t) : window.__uspapi.hasSeenCCPAMessage = function () {
                            E(e, t);
                        };
                    }, j = function () {
                        for (var e = [], t = 0; t < 256; t++)
                            e[t] = (t < 16 ? '0' : '') + t.toString(16);
                        var n = 4294967296 * Math.random() >>> 0, o = 4294967296 * Math.random() >>> 0, r = 4294967296 * Math.random() >>> 0, i = 4294967296 * Math.random() >>> 0;
                        return e[255 & n] + e[n >> 8 & 255] + e[n >> 16 & 255] + e[n >> 24 & 255] + '-' + e[255 & o] + e[o >> 8 & 255] + '-' + e[o >> 16 & 15 | 64] + e[o >> 24 & 255] + '-' + e[63 & r | 128] + e[r >> 8 & 255] + '-' + e[r >> 16 & 255] + e[r >> 24 & 255] + e[255 & i] + e[i >> 8 & 255] + e[i >> 16 & 255] + e[i >> 24 & 255];
                    }, U = function (e) {
                        var t = e.js, n = e.type;
                        if (!t)
                            return Promise.resolve();
                        var o = new Function(t);
                        if ('inline' === n)
                            try {
                                return o(), Promise.resolve();
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        else if ('promise' === n)
                            return o();
                    }, M = function (e) {
                        if (e && e.length > 0) {
                            var t = !0, n = !1, o = void 0;
                            try {
                                for (var r, i = e[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                    var c = r.value, a = c.key, s = c.value, u = c.maxAge, p = void 0 === u ? 31536000 : u, f = c.shareRootDomain, l = void 0 === f || f, d = c.session, v = void 0 !== d && d;
                                    k(s, 'cookies', a);
                                    var h = new Date();
                                    h.setTime(h.getTime() + 1000 * p);
                                    var g = h.toGMTString(), m = ''.concat(a, '=').concat(s, '; Path=/;');
                                    v || (m = ''.concat(m, ' Max-Age=').concat(p, '; expires=').concat(g, ';'));
                                    var y = m;
                                    if (l) {
                                        var _ = window.location && window.location.hostname;
                                        if (_) {
                                            var w = /\.co\.uk$/.test(_) || /\.com\.br$/.test(_) || /\.com\.au$/.test(_) || /\.co\.nz$/.test(_) || /\.co\.jp$/.test(_) ? 3 : 2, b = _.split('.'), x = b.slice(b.length - w);
                                            if (x.length > 1)
                                                y += ' Domain=' + x.join('.') + ';';
                                        }
                                    }
                                    document.cookie = y;
                                }
                            } catch (e) {
                                n = !0, o = e;
                            } finally {
                                try {
                                    t || null == i.return || i.return();
                                } finally {
                                    if (n)
                                        throw o;
                                }
                            }
                        }
                        return Promise.resolve();
                    }, A = function (e, t, n, o, r, i, c, s) {
                        var u = i.type_settings || {}, p = 'sp_message_container_'.concat(s), f = 'sp_message_iframe_'.concat(s), l = document.createElement('iframe'), d = '#'.concat(f, ' { width: 100%; height: 100%; border: 0 none; } .sp-message-open { margin-top: ').concat(0 - window.scrollY, 'px !important; overflow: hidden !important; left: 0 !important; right: 0 !important; top: 0 !important; bottom: 0 !important; position: fixed  !important; } #').concat(p, ' { display: none; position: ').concat('inline' === i.type ? 'relative' : 'fixed', '; z-index: ').concat('inline' === i.type ? '1' : '2147483647', '; left: 0; right: 0; bottom: 0; top: 0; height: 100%; width: 100%; max-width: 100%; max-height: 100%;}'), v = document.createElement('div'), g = document.getElementsByTagName('html')[0];
                        l.src = e, l.id = f, l.title = 'SP Consent Message', v.id = p, a(d), v.appendChild(l);
                        var y = !('inline' !== i.type);
                        m(y ? function () {
                            var e = 'id' === u.targetType ? document.getElementById(u.targetName) : document.getElementsByClassName(u.targetName)[0];
                            e && e.appendChild(v);
                        } : function () {
                            document.body.appendChild(v), g.classList.add('sp-message-open');
                        });
                        window.addEventListener('message', function e(i) {
                            return h(t, n, v, o, r, i, e, y, c, s);
                        }, !1);
                    }, T = function (e, t, n, r, c, a, s) {
                        var u = S('cookies', 'ccpaUUID'), p = JSON.stringify(e).replace('"', '"'), f = {
                                account_id: c,
                                abp: !1,
                                href: r,
                                consentUUID: u,
                                loadedData: JSON.stringify([{
                                        id: 'CONSENT:endpoint:'.concat(window._sp_ccpa.config.ccpaOrigin, ':').concat(n),
                                        result: p
                                    }]),
                                stage_campaign: 'stage' === i('_sp_env'),
                                cookie: JSON.stringify(y(document.cookie))
                            };
                        return Object.keys(s).forEach(function (e) {
                            f['t[' + e + ']'] = s[e];
                        }), o(''.concat(a, '/mms/v2/message_url'), {
                            method: 'GET',
                            params: f
                        });
                    }, C = n(65), N = function (e, t, n, i, s, u, f) {
                        var l, v;
                        window._sp_ccpa.loadPrivacyManager = function (e, t, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                            null === e && f && (e = f), m(e, t, n, o, r);
                        }, window._sp_ccpa.loadPrivacyManagerModal = function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i = arguments.length > 5 ? arguments[5] : void 0;
                            null === e && f && (e = f), w(e, t, n, o, r, i);
                        };
                        var m = function (e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'body', o = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0, i = k(e, t, o, r), c = '#'.concat('sp_privacy_manager_iframe', ' { width: 100%; height: 100%; border: 0 none; }');
                                a(c);
                                var s = document.querySelector(n);
                                s.appendChild(i);
                            }, w = function (e, t, n, o, r, i) {
                                var c = k(e, t, n, o, r, i), s = '#'.concat('sp_privacy_manager_iframe', ' { width: 100%; height: 100%; border: 0 none; } ').concat('.sp-pm-open {\n            overflow: hidden !important;\n        }', ' #').concat('sp_privacy_manager_container', ' { position: fixed; z-index: 2147483647; left: 0; right: 0; bottom: 0; top: 0; height: 100%; width: 100%; max-width: 100%; max-height: 100%; background-color: rgba(0, 0, 0, 0.7);}');
                                a(s);
                                var u = document.createElement('div'), p = document.getElementsByTagName('html')[0];
                                u.id = 'sp_privacy_manager_container', u.appendChild(c), document.body.appendChild(u), p.classList.add('sp-pm-open');
                            }, b = function (e, n, i, c, a) {
                                return e ? Promise.all(e.map(r)).then(function (e) {
                                    return i ? (i = _(i), o(t + i, {
                                        method: 'GET',
                                        params: { cookie: JSON.stringify(y(document.cookie)) }
                                    }).then(JSON.parse).then(function (e) {
                                        return p(t, n, e, null, c, a);
                                    })) : Promise.resolve();
                                }) : Promise.resolve();
                            }, x = function (e, t, n, o) {
                                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                var r = arguments.length > 5 ? arguments[5] : void 0, i = arguments.length > 6 ? arguments[6] : void 0, a = e && e.source;
                                if (a)
                                    if (a !== window) {
                                        for (var s, u = document.getElementsByTagName('iframe'), p = 0; p < u.length; p++)
                                            try {
                                                u[p].contentWindow === a && (s = u[p]);
                                            } catch (e) {
                                            }
                                        if (s) {
                                            var f = s.parentElement;
                                            if (f && !(window._sp_ccpa && window._sp_ccpa.msg && window._sp_ccpa.msg.getMorphedClassName && window._sp_ccpa.msg.getMorphedClassName('sp_iframe_container') === f.className)) {
                                                window.removeEventListener('message', l);
                                                var v = document.getElementsByTagName('html')[0];
                                                'sp_privacy_manager_container' === f.id ? (document.body.removeChild(f), v.classList.remove('sp-pm-open')) : (v.classList.remove('sp-pm-open'), f.removeChild(s));
                                                var h = t.data || {}, g = h.actions, m = h.cookies;
                                                b(g, n, o, r, i).then(function (e) {
                                                    return M(m);
                                                }).then(function (e) {
                                                    return d('onConsentReady', [
                                                        c('consentUUID'),
                                                        c('euconsent')
                                                    ]);
                                                }).catch(function (e) {
                                                    return console.log(e);
                                                });
                                            }
                                        }
                                    } else
                                        window.history && window.history.go(-1);
                            }, k = function (n, o, r, a, p, f) {
                                var m = document.createElement('iframe');
                                m.id = 'sp_privacy_manager_iframe';
                                var y = S('cookies', 'ccpaUUID'), _ = window._sp_ccpa.requestUUID ? '&requestUUID='.concat(window._sp_ccpa.requestUUID) : '', w = f ? '&messageId='.concat(f) : '', b = '&pubData=' + encodeURIComponent(JSON.stringify(S('cookies', 'pubData')));
                                m.src = ''.concat(i, '/?privacy_manager_id=').concat(o, '&site_id=').concat(n, '&ccpa_origin=').concat(e, '&ccpaUUID=').concat(y).concat(_).concat(w).concat(b), m.title = 'SP Consent Message';
                                var k = S('cookies', 'authId');
                                return k && (k = encodeURIComponent(k), m.src = ''.concat(m.src, '&authId=').concat(k)), t && (m.src = ''.concat(m.src, '&mmsDomain=').concat(t)), l = function (o) {
                                    return function (n, o, r, i, a, p) {
                                        var f = n.data;
                                        if (f && f.action && ('sp.complete' === f.action || 'sp.choiceComplete' === f.action || 'sp.cancel' === f.action || 'sp.pmComplete' === f.action))
                                            if ('sp.cancel' !== f.action)
                                                if ('sp.error' !== f.action)
                                                    'sp.pmComplete' !== f.action ? x(n, f, o, i, !1, a, p) : (v = f.data, d('onPrivacyManagerAction', [v]), a && window.addEventListener('message', function n(i) {
                                                        return h(t, o, r, s, u, i, n, a, e, p);
                                                    }));
                                                else {
                                                    if (g(), r)
                                                        return r.style.display = 'block', x(n, f, o, i, !1, a, p), void window.addEventListener('message', function n(i) {
                                                            return h(t, o, r, s, u, i, n, a, e, p);
                                                        });
                                                    x(n, f, o, i, !1, a, p);
                                                }
                                            else {
                                                if (d('onPMCancel'), r)
                                                    return r.style.display = 'block', x(n, f, o, i, !0, a, p), void window.addEventListener('message', function n(i) {
                                                        return h(t, o, r, s, u, i, n, a, e, p);
                                                    });
                                                x(n, f, o, i, !0, a, p);
                                                var l = c('consentUUID'), m = c('euconsent') || 'BOS22d1OS22d1AGABAENBfAAAAAgmAAA';
                                                d('onConsentReady', [
                                                    l,
                                                    m
                                                ]);
                                            }
                                    }(o, n, r, a, p, f);
                                }, window.addEventListener('message', l), m;
                            };
                    };
                window._sp_ccpa && function () {
                    window._sp_ccpa.version = C.version, window._sp_ccpa.requestUUID = j(), window._sp_ccpa.addEventListener = function (e, t) {
                        return l(e, t);
                    }, window._sp_ccpa.removeEventListener = function (e, t) {
                        return function (e, t) {
                            f[e] && f[e].length && (f[e] = f[e].filter(function (e) {
                            }));
                        }(e);
                    }, window._sp_ccpa.config.baseEndpoint && (window._sp_ccpa.config.ccpaOrigin = window._sp_ccpa.config.baseEndpoint, window._sp_ccpa.config.mmsDomain = window._sp_ccpa.config.baseEndpoint);
                    var e, t = (e = window._sp_ccpa && window._sp_ccpa.config.pubData ? window._sp_ccpa.config.pubData : {}, window._sp_ccpa && window._sp_ccpa.config.clientId && (e.clientId = window._sp_ccpa.config.clientId), window._sp_ccpa && window._sp_ccpa.config.pageviewId && (e.pageviewId = window._sp_ccpa.config.pageviewId), window._sp_ccpa && window._sp_ccpa.config.pageviewId64 && (e.pageviewId64 = window._sp_ccpa.config.pageviewId64), k(e || c('pubData'), 'cookies', 'pubData'), {
                            mmsDomain: window._sp_ccpa.config.mmsDomain,
                            accountId: window._sp_ccpa.config.accountId,
                            ccpaOrigin: window._sp_ccpa.config.ccpaOrigin,
                            pmOrigin: 'https://ccpa.sp-stage.net' === window._sp_ccpa.config.ccpaOrigin ? 'https://ccpa-pm-dev.sp-prod.net' : 'https://ccpa-pm.sp-prod.net',
                            msgOrigin: 'https://ccpa.sp-stage.net' === window._sp_ccpa.config.ccpaOrigin ? 'https://ccpa-notice.sp-stage.net' : 'https://ccpa-notice.sp-prod.net',
                            cmpOrigin: 'https://ccpa.sp-stage.net' === window._sp_ccpa.config.ccpaOrigin ? 'https://cmp.sp-stage.net' : 'https://sourcepoint.mgr.consensu.org',
                            siteHref: window._sp_ccpa.config.siteHref ? window._sp_ccpa.config.siteHref : window.location.href,
                            events: window._sp_ccpa.config.events,
                            siteId: window._sp_ccpa.config.siteId,
                            targetingParams: window._sp_ccpa.config.targetingParams || {},
                            privacyManagerId: window._sp_ccpa.config.privacyManagerId || '',
                            getDnsMsgMms: !!window._sp_ccpa.config.getDnsMsgMms,
                            alwaysDisplayDns: !!window._sp_ccpa.config.alwaysDisplayDns,
                            pubData: e
                        }), n = t.accountId, r = t.alwaysDisplayDns, a = t.ccpaOrigin, s = t.events, u = t.getDnsMsgMms, p = t.mmsDomain, h = t.siteHref, g = t.siteId, y = t.targetingParams, _ = t.msgOrigin, b = t.cmpOrigin, x = t.pmOrigin, O = t.privacyManagerId;
                    for (var E in s)
                        l(E, s[E]);
                    return window._sp_ccpa.delete_consent_cookies = function () {
                        return function (e) {
                            return o(''.concat(e, '/ccpa/consent/delete-consent-cookies'), { method: 'GET' }).then(JSON.parse).then(function (e) {
                                var t = e.actions, n = e.cookies;
                                return Promise.all(t.map(U)).then(function (e) {
                                    return M(n);
                                });
                            });
                        }(a);
                    }, D(), k(window._sp_ccpa && window._sp_ccpa.config.authId ? window._sp_ccpa.config.authId : c('authId'), 'cookies', 'authId'), k(c('ccpaUUID'), 'cookies', 'ccpaUUID'), function (e, t, n, r) {
                        if (r)
                            return Promise.resolve(r);
                        var i = {
                            account_id: t,
                            href: n
                        };
                        return o(''.concat(e, '/mms/get_site_data'), {
                            method: 'GET',
                            params: i
                        }, !1).then(JSON.parse).then(function (e) {
                            var t = e.site_id;
                            return t || Promise.reject('no site_id');
                        });
                    }(p, n, h, g).then(function (e) {
                        var t = S('cookies', 'authId');
                        return 'true' !== S('cookies', 'resolvedID') && t ? function (e, t, n, r, i) {
                            var c = ''.concat(i, '/ccpa/consent/').concat(r, '/link');
                            return o(c, {
                                method: 'POST',
                                params: {
                                    scriptV2: !0,
                                    mmsDomain: n,
                                    ccpaUUID: t,
                                    authId: e
                                }
                            }).then(function (e) {
                                return JSON.parse(e);
                            });
                        }(S('cookies', 'authId'), S('cookies', 'ccpaUUID'), p, e, a).then(function (e) {
                            return e.ccpaUUID && k(e.ccpaUUID, 'cookies', 'ccpaUUID'), e.resolved && k(e.resolved, 'cookies', 'resolved'), Promise.all(e.actions.map(U)).then(function (t) {
                                return M(e.cookies);
                            });
                        }).then(function (t) {
                            return e;
                        }) : Promise.resolve(e);
                    }).then(function (e) {
                        D(a, e), N(a, p, 0, x, h, _, e);
                        var t = S('cookies', 'consentStatus');
                        if (u && !r) {
                            var s = i('_sp_showPM');
                            s = 'true' === s;
                            var f = i('_sp_runMessaging');
                            return null === f ? f = !0 : 'false' === f && (f = !1), f ? function (e, t, n, o, r, i, a, s, u) {
                                return T(o, i, r, n, t, e, s).then(function (t) {
                                    return t ? (t = JSON.parse(t), M(t.cookies).then(function (o) {
                                        return delete t.setCookies, delete t.cookies, d('onMessageReceiveData', [t]), A(t.message_url, e, r, n, a, JSON.parse(t.message_settings || '{}'), u, t.msg_id), t.msg_id;
                                    })) : (d('onMessageReceiveData', [{ msg_id: 0 }]), d('onConsentReady', [
                                        c('consentUUID'),
                                        c('euconsent') || 'BOS22d1OS22d1AGABAENBfAAAAAgmAAA'
                                    ]), Promise.resolve(null));
                                });
                            }(p, n, h, {
                                hasConsentData: 'consentedAll' === t || 'rejectedAll' === t || 'rejectedSome' === t || 'rejectedNone' === t || !1,
                                consentedToAny: 'consentedAll' === t || !1,
                                consentedToAll: 'consentedAll' === t || !1,
                                rejectedAny: 'rejectedAll' === t || 'rejectedSome' === t
                            }, e, b, _, y, a).then(function (t) {
                                return I(a, e, t, p);
                            }).then(function (e) {
                                return {
                                    cookies: e.cookies,
                                    actions: e.actions
                                };
                            }) : (d('onSPPMObjectReady'), function (e, t, n, r) {
                                var i = {
                                    getDnsMessage: !1,
                                    dnsDisplayed: !0,
                                    dnsCookieSet: 'true' === S('cookies', 'dnsDisplayed'),
                                    ccpaUUID: S('cookies', 'ccpaUUID'),
                                    authId: S('cookies', 'authId'),
                                    mmsDomain: t,
                                    pubData: S('cookies', 'pubData'),
                                    ageGate: S('cookies', 'ageGate')
                                };
                                return o(''.concat(e, '/ccpa/consent/').concat(n, '/display-dns'), {
                                    method: 'POST',
                                    body: i
                                }).then(function (e) {
                                    return JSON.parse(e);
                                }).then(function (e) {
                                    return e && e.cookies ? M(e.cookies).then(function (t) {
                                        return delete e.cookies, e;
                                    }) : Promise.resolve(e);
                                }).then(function (e) {
                                    return e && e.actions ? Promise.all(e.actions.map(U)).then(function (t) {
                                        return delete e.actions, e;
                                    }) : Promise.resolve(e);
                                }).then(P);
                            }(a, p, e, j()).then(function (t) {
                                return {
                                    loadedData: t,
                                    siteId: e
                                };
                            }).then(function (t) {
                                return s && m(function () {
                                    return window._sp_ccpa.loadPrivacyManagerModal(e, O);
                                }), {
                                    cookies: [],
                                    actions: []
                                };
                            }));
                        }
                        return u || r ? r ? I(a, e, null, p) : void 0 : function (e, t, n) {
                            return o(e + '/ccpa/consent/'.concat(t, '/display-dns'), {
                                method: 'POST',
                                body: {
                                    getDnsMessage: !0,
                                    ccpaUUID: S('cookies', 'ccpaUUID'),
                                    dnsDisplayed: !1,
                                    dnsCookieSet: S('cookies', 'dnsCookieSet'),
                                    authId: S('cookies', 'authId'),
                                    pubData: S('cookies', 'pubData'),
                                    ageGate: S('cookies', 'ageGate'),
                                    mmsDomain: n
                                }
                            }).then(JSON.parse).then(function (e) {
                                var t = e.message_url, n = e.message_settings, o = e.actions;
                                if (t && n && n.length > 0 && t.length > 0)
                                    return {
                                        message_settings: n,
                                        message_url: t,
                                        actions: o
                                    };
                            }).then(P);
                        }(a, e, p).then(function (t) {
                            var n = t.message_settings, o = t.message_url, r = t.cookies, i = t.actions, c = t.messageId;
                            return A(o, p, e, h, _, JSON.parse(n || '{}'), a, c), {
                                cookies: r,
                                actions: i
                            };
                        });
                    }).then(function (e) {
                        var t = e.cookies;
                        return function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return 0 === t.length ? Promise.resolve() : void 0 === t || 'object' != w(t) || n === t.length ? Promise.resolve() : U(t[n]).then(function (o) {
                                return e(t, ++n);
                            });
                        }(e.actions).then(function (e) {
                            return M(t);
                        });
                    }).then(function (e) {
                        return window.__uspapi && 'function' == typeof window.__uspapi.hasSeenCCPAMessage && window.__uspapi.hasSeenCCPAMessage(), e;
                    }).then(v);
                }().then(function (e) {
                    return console.log('CCPA script successfully executed.');
                }).catch(function (e) {
                    return console.log('Error occurred when executing the CCPA script: '.concat(e.stack));
                });
            }
        ]);
    }())
}