{
    const $___mock_9748d77dc4065f3f = {};
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
    })($___mock_9748d77dc4065f3f);
    (function () {
        !function (e) {
            var i = {};
            function t(n) {
                if (i[n])
                    return i[n].exports;
                var r = i[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
            }
            t.m = e, t.c = i, t.d = function (e, i, n) {
                t.o(e, i) || Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: n
                });
            }, t.r = function (e) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
            }, t.t = function (e, i) {
                if (1 & i && (e = t(e)), 8 & i)
                    return e;
                if (4 & i && 'object' == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (t.r(n), Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: e
                    }), 2 & i && 'string' != typeof e)
                    for (var r in e)
                        t.d(n, r, function (i) {
                            return e[i];
                        }.bind(null, r));
                return n;
            }, t.n = function (e) {
                var i = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return t.d(i, 'a', i), i;
            }, t.o = function (e, i) {
                return Object.prototype.hasOwnProperty.call(e, i);
            }, t.p = '', t(t.s = 6);
        }([
            function (e, i, t) {
                var n, r;
                !function (s) {
                    if (void 0 === (r = 'function' == typeof (n = s) ? n.call(i, t, i, e) : n) || (e.exports = r), !0, e.exports = s(), !!0) {
                        var o = window.Cookies, a = window.Cookies = s();
                        a.noConflict = function () {
                            return window.Cookies = o, a;
                        };
                    }
                }(function () {
                    function e() {
                        for (var e = 0, i = {}; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var n in t)
                                i[n] = t[n];
                        }
                        return i;
                    }
                    function i(e) {
                        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                    }
                    return function t(n) {
                        function r() {
                        }
                        function s(i, t, s) {
                            if ('undefined' != typeof document) {
                                'number' == typeof (s = e({ path: '/' }, r.defaults, s)).expires && (s.expires = new Date(1 * new Date() + 86400000 * s.expires)), s.expires = s.expires ? s.expires.toUTCString() : '';
                                try {
                                    var o = JSON.stringify(t);
                                    /^[\{\[]/.test(o) && (t = o);
                                } catch (e) {
                                }
                                t = n.write ? n.write(t, i) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), i = encodeURIComponent(String(i)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var a = '';
                                for (var l in s)
                                    s[l] && (a += '; ' + l, !0 !== s[l] && (a += '=' + s[l].split(';')[0]));
                                return document.cookie = i + '=' + t + a;
                            }
                        }
                        function o(e, t) {
                            if ('undefined' != typeof document) {
                                for (var r = {}, s = document.cookie ? document.cookie.split('; ') : [], o = 0; o < s.length; o++) {
                                    var a = s[o].split('='), l = a.slice(1).join('=');
                                    t || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                                    try {
                                        var d = i(a[0]);
                                        if (l = (n.read || n)(l, d) || i(l), t)
                                            try {
                                                l = JSON.parse(l);
                                            } catch (e) {
                                            }
                                        if (r[d] = l, e === d)
                                            break;
                                    } catch (e) {
                                    }
                                }
                                return e ? r[e] : r;
                            }
                        }
                        return r.set = s, r.get = function (e) {
                            return o(e, !1);
                        }, r.getJSON = function (e) {
                            return o(e, !0);
                        }, r.remove = function (i, t) {
                            s(i, '', e(t, { expires: -1 }));
                        }, r.defaults = {}, r.withConverter = t, r;
                    }(function () {
                    });
                });
            },
            function (e, i, t) {
                var n;
                !function (r, s) {
                    'use strict';
                    var o = 'model', a = 'name', l = 'type', d = 'vendor', c = 'version', u = 'mobile', p = 'tablet', h = 'smarttv', m = {
                            extend: function (e, i) {
                                var t = {};
                                for (var n in e)
                                    i[n] && i[n].length % 2 == 0 ? t[n] = i[n].concat(e[n]) : t[n] = e[n];
                                return t;
                            },
                            has: function (e, i) {
                                return 'string' == typeof e && -1 !== i.toLowerCase().indexOf(e.toLowerCase());
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
                            rgx: function (e, i) {
                                for (var t, n, r, s, o, a, l = 0; l < i.length && !o;) {
                                    var d = i[l], c = i[l + 1];
                                    for (t = n = 0; t < d.length && !o;)
                                        if (o = d[t++].exec(e))
                                            for (r = 0; r < c.length; r++)
                                                a = o[++n], 'object' == typeof (s = c[r]) && s.length > 0 ? 2 == s.length ? 'function' == typeof s[1] ? this[s[0]] = s[1].call(this, a) : this[s[0]] = s[1] : 3 == s.length ? 'function' != typeof s[1] || s[1].exec && s[1].test ? this[s[0]] = a ? a.replace(s[1], s[2]) : void 0 : this[s[0]] = a ? s[1].call(this, a, s[2]) : void 0 : 4 == s.length && (this[s[0]] = a ? s[3].call(this, a.replace(s[1], s[2])) : void 0) : this[s] = a || void 0;
                                    l += 2;
                                }
                            },
                            str: function (e, i) {
                                for (var t in i)
                                    if ('object' == typeof i[t] && i[t].length > 0) {
                                        for (var n = 0; n < i[t].length; n++)
                                            if (m.has(i[t][n], e))
                                                return '?' === t ? void 0 : t;
                                    } else if (m.has(i[t], e))
                                        return '?' === t ? void 0 : t;
                                return e;
                            }
                        }, v = {
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
                        }, f = {
                            browser: [
                                [
                                    /(opera\smini)\/([\w\.-]+)/i,
                                    /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                                    /(opera).+version\/([\w\.]+)/i,
                                    /(opera)[\/\s]+([\w\.]+)/i
                                ],
                                [
                                    a,
                                    c
                                ],
                                [/(opios)[\/\s]+([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera Mini'
                                    ],
                                    c
                                ],
                                [/\s(opr)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera'
                                    ],
                                    c
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
                                    c
                                ],
                                [/(konqueror)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Konqueror'
                                    ],
                                    c
                                ],
                                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                [
                                    [
                                        a,
                                        'IE'
                                    ],
                                    c
                                ],
                                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Edge'
                                    ],
                                    c
                                ],
                                [/(yabrowser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Yandex'
                                    ],
                                    c
                                ],
                                [/(Avast)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Avast Secure Browser'
                                    ],
                                    c
                                ],
                                [/(AVG)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'AVG Secure Browser'
                                    ],
                                    c
                                ],
                                [/(puffin)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Puffin'
                                    ],
                                    c
                                ],
                                [/(focus)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Firefox Focus'
                                    ],
                                    c
                                ],
                                [/(opt)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera Touch'
                                    ],
                                    c
                                ],
                                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'UCBrowser'
                                    ],
                                    c
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        /_/g,
                                        ' '
                                    ],
                                    c
                                ],
                                [/(windowswechat qbcore)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'WeChat(Win) Desktop'
                                    ],
                                    c
                                ],
                                [/(micromessenger)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'WeChat'
                                    ],
                                    c
                                ],
                                [/(brave)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Brave'
                                    ],
                                    c
                                ],
                                [/(qqbrowserlite)\/([\w\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(QQ)\/([\d\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                                [a],
                                [/(LBBROWSER)/i],
                                [a],
                                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                [
                                    c,
                                    [
                                        a,
                                        'MIUI Browser'
                                    ]
                                ],
                                [/;fbav\/([\w\.]+);/i],
                                [
                                    c,
                                    [
                                        a,
                                        'Facebook'
                                    ]
                                ],
                                [
                                    /safari\s(line)\/([\w\.]+)/i,
                                    /android.+(line)\/([\w\.]+)\/iab/i
                                ],
                                [
                                    a,
                                    c
                                ],
                                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                                [
                                    c,
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
                                    c
                                ],
                                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        /(.+(?:g|us))(.+)/,
                                        '$1 $2'
                                    ],
                                    c
                                ],
                                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                                [
                                    c,
                                    [
                                        a,
                                        'Android Browser'
                                    ]
                                ],
                                [/(sailfishbrowser)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Sailfish Browser'
                                    ],
                                    c
                                ],
                                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(dolfin)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Dolphin'
                                    ],
                                    c
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
                                    c
                                ],
                                [/(coast)\/([\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'Opera Coast'
                                    ],
                                    c
                                ],
                                [/fxios\/([\w\.-]+)/i],
                                [
                                    c,
                                    [
                                        a,
                                        'Firefox'
                                    ]
                                ],
                                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                [
                                    c,
                                    [
                                        a,
                                        'Mobile Safari'
                                    ]
                                ],
                                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                [
                                    c,
                                    a
                                ],
                                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [
                                    [
                                        a,
                                        'GSA'
                                    ],
                                    c
                                ],
                                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [
                                    a,
                                    [
                                        c,
                                        g.str,
                                        v.browser.oldsafari.version
                                    ]
                                ],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(navigator|netscape)\/([\w\.-]+)/i],
                                [
                                    [
                                        a,
                                        'Netscape'
                                    ],
                                    c
                                ],
                                [
                                    /(swiftfox)/i,
                                    /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                    /(links)\s\(([\w\.]+)/i,
                                    /(gobrowser)\/?([\w\.]*)/i,
                                    /(ice\s?browser)\/v?([\w\._]+)/i,
                                    /(mosaic)[\/\s]([\w\.]+)/i
                                ],
                                [
                                    a,
                                    c
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
                                        m.lowerize
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
                                        m.lowerize
                                    ]],
                                [/(sun4\w)[;\)]/i],
                                [[
                                        'architecture',
                                        'sparc'
                                    ]],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                [[
                                        'architecture',
                                        m.lowerize
                                    ]]
                            ],
                            device: [
                                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                                [
                                    o,
                                    d,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/applecoremedia\/[\w\.]+ \((ipad)/],
                                [
                                    o,
                                    [
                                        d,
                                        'Apple'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/(apple\s{0,1}tv)/i],
                                [
                                    [
                                        o,
                                        'Apple TV'
                                    ],
                                    [
                                        d,
                                        'Apple'
                                    ],
                                    [
                                        l,
                                        h
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
                                    d,
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                                [
                                    o,
                                    [
                                        d,
                                        'Amazon'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                                [
                                    [
                                        o,
                                        g.str,
                                        v.device.amazon.model
                                    ],
                                    [
                                        d,
                                        'Amazon'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+aft([bms])\sbuild/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Amazon'
                                    ],
                                    [
                                        l,
                                        h
                                    ]
                                ],
                                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                [
                                    o,
                                    d,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/\((ip[honed|\s\w*]+);/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Apple'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /(blackberry)[\s-]?(\w+)/i,
                                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                    /(hp)\s([\w\s]+\w)/i,
                                    /(asus)-?(\w+)/i
                                ],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/\(bb10;\s(\w+)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'BlackBerry'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Asus'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [
                                    /(sony)\s(tablet\s[ps])\sbuild\//i,
                                    /(sony)?(?:sgp.+)\sbuild\//i
                                ],
                                [
                                    [
                                        d,
                                        'Sony'
                                    ],
                                    [
                                        o,
                                        'Xperia Tablet'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Sony'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /\s(ouya)\s/i,
                                    /(nintendo)\s([wids3u]+)/i
                                ],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        'console'
                                    ]
                                ],
                                [/android.+;\s(shield)\sbuild/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Nvidia'
                                    ],
                                    [
                                        l,
                                        'console'
                                    ]
                                ],
                                [/(playstation\s[34portablevi]+)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Sony'
                                    ],
                                    [
                                        l,
                                        'console'
                                    ]
                                ],
                                [/(sprint\s(\w+))/i],
                                [
                                    [
                                        d,
                                        g.str,
                                        v.device.sprint.vendor
                                    ],
                                    [
                                        o,
                                        g.str,
                                        v.device.sprint.model
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                                    /(zte)-(\w*)/i,
                                    /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                ],
                                [
                                    d,
                                    [
                                        o,
                                        /_/g,
                                        ' '
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/(nexus\s9)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'HTC'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [
                                    /d\/huawei([\w\s-]+)[;\)]/i,
                                    /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i
                                ],
                                [
                                    o,
                                    [
                                        d,
                                        'Huawei'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+(bah2?-a?[lw]\d{2})/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Huawei'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/(microsoft);\s(lumia[\s\w]+)/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Microsoft'
                                    ],
                                    [
                                        l,
                                        'console'
                                    ]
                                ],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [
                                        o,
                                        /\./g,
                                        ' '
                                    ],
                                    [
                                        d,
                                        'Microsoft'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                                    /mot[\s-]?(\w*)/i,
                                    /(XT\d{3,4}) build\//i,
                                    /(nexus\s6)/i
                                ],
                                [
                                    o,
                                    [
                                        d,
                                        'Motorola'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                [
                                    o,
                                    [
                                        d,
                                        'Motorola'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                [
                                    [
                                        d,
                                        m.trim
                                    ],
                                    [
                                        o,
                                        m.trim
                                    ],
                                    [
                                        l,
                                        h
                                    ]
                                ],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [
                                        o,
                                        /^/,
                                        'SmartTV'
                                    ],
                                    [
                                        d,
                                        'Samsung'
                                    ],
                                    [
                                        l,
                                        h
                                    ]
                                ],
                                [/\(dtv[\);].+(aquos)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Sharp'
                                    ],
                                    [
                                        l,
                                        h
                                    ]
                                ],
                                [
                                    /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                                    /((SM-T\w+))/i
                                ],
                                [
                                    [
                                        d,
                                        'Samsung'
                                    ],
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [
                                    d,
                                    [
                                        l,
                                        h
                                    ],
                                    o
                                ],
                                [
                                    /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                                    /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                                    /sec-((sgh\w+))/i
                                ],
                                [
                                    [
                                        d,
                                        'Samsung'
                                    ],
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/sie-(\w*)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Siemens'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /(maemo|nokia).*(n900|lumia\s\d+)/i,
                                    /(nokia)[\s_-]?([\w-]*)/i
                                ],
                                [
                                    [
                                        d,
                                        'Nokia'
                                    ],
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Acer'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+([vl]k\-?\d{3})\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'LG'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                [
                                    [
                                        d,
                                        'LG'
                                    ],
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/(lg) netcast\.tv/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        h
                                    ]
                                ],
                                [
                                    /(nexus\s[45])/i,
                                    /lg[e;\s\/-]+(\w*)/i,
                                    /android.+lg(\-?[\d\w]+)\s+build/i
                                ],
                                [
                                    o,
                                    [
                                        d,
                                        'LG'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Lenovo'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/(lenovo)[_\s-]?([\w-]+)/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/linux;.+((jolla));/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/((pebble))app\/[\d\.]+\s/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        'wearable'
                                    ]
                                ],
                                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/crkey/i],
                                [
                                    [
                                        o,
                                        'Chromecast'
                                    ],
                                    [
                                        d,
                                        'Google'
                                    ],
                                    [
                                        l,
                                        h
                                    ]
                                ],
                                [/android.+;\s(glass)\s\d/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Google'
                                    ],
                                    [
                                        l,
                                        'wearable'
                                    ]
                                ],
                                [/android.+;\s(pixel c)[\s)]/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Google'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Google'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /android.+;\s(\w+)\s+build\/hm\1/i,
                                    /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                                    /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
                                ],
                                [
                                    [
                                        o,
                                        /_/g,
                                        ' '
                                    ],
                                    [
                                        d,
                                        'Xiaomi'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                                [
                                    [
                                        o,
                                        /_/g,
                                        ' '
                                    ],
                                    [
                                        d,
                                        'Xiaomi'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Meizu'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/(mz)-([\w-]{2,})/i],
                                [
                                    [
                                        d,
                                        'Meizu'
                                    ],
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [
                                    /android.+a000(1)\s+build/i,
                                    /android.+oneplus\s(a\d{4})[\s)]/i
                                ],
                                [
                                    o,
                                    [
                                        d,
                                        'OnePlus'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'RCA'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Dell'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Verizon'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                                [
                                    [
                                        d,
                                        'Barnes & Noble'
                                    ],
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'NuVision'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+;\s(k88)\sbuild/i],
                                [
                                    o,
                                    [
                                        d,
                                        'ZTE'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Swiss'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Swiss'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Zeki'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [
                                    /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                                    /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i
                                ],
                                [
                                    [
                                        d,
                                        'Dragon Touch'
                                    ],
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Insignia'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'NextBook'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                                [
                                    [
                                        d,
                                        'Voice'
                                    ],
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                                [
                                    [
                                        d,
                                        'LvTel'
                                    ],
                                    o,
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+;\s(PH-1)\s/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Essential'
                                    ],
                                    [
                                        l,
                                        u
                                    ]
                                ],
                                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Envizen'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'MachSpeed'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Rotor'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+(KS(.+))\s+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Amazon'
                                    ],
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                                [
                                    d,
                                    o,
                                    [
                                        l,
                                        p
                                    ]
                                ],
                                [
                                    /\s(tablet|tab)[;\/]/i,
                                    /\s(mobile)(?:[;\/]|\ssafari)/i
                                ],
                                [
                                    [
                                        l,
                                        m.lowerize
                                    ],
                                    d,
                                    o
                                ],
                                [/[\s\/\(](smart-?tv)[;\)]/i],
                                [[
                                        l,
                                        h
                                    ]],
                                [/(android[\w\.\s\-]{0,9});.+build/i],
                                [
                                    o,
                                    [
                                        d,
                                        'Generic'
                                    ]
                                ]
                            ],
                            engine: [
                                [/windows.+\sedge\/([\w\.]+)/i],
                                [
                                    c,
                                    [
                                        a,
                                        'EdgeHTML'
                                    ]
                                ],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [
                                    c,
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
                                    c
                                ],
                                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                                [
                                    c,
                                    a
                                ]
                            ],
                            os: [
                                [/microsoft\s(windows)\s(vista|xp)/i],
                                [
                                    a,
                                    c
                                ],
                                [
                                    /(windows)\snt\s6\.2;\s(arm)/i,
                                    /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                                    /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                                ],
                                [
                                    a,
                                    [
                                        c,
                                        g.str,
                                        v.os.windows.version
                                    ]
                                ],
                                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                [
                                    [
                                        a,
                                        'Windows'
                                    ],
                                    [
                                        c,
                                        g.str,
                                        v.os.windows.version
                                    ]
                                ],
                                [/\((bb)(10);/i],
                                [
                                    [
                                        a,
                                        'BlackBerry'
                                    ],
                                    c
                                ],
                                [
                                    /(blackberry)\w*\/?([\w\.]*)/i,
                                    /(tizen|kaios)[\/\s]([\w\.]+)/i,
                                    /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                ],
                                [
                                    a,
                                    c
                                ],
                                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                                [
                                    [
                                        a,
                                        'Symbian'
                                    ],
                                    c
                                ],
                                [/\((series40);/i],
                                [a],
                                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                [
                                    [
                                        a,
                                        'Firefox OS'
                                    ],
                                    c
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
                                    c
                                ],
                                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                [
                                    [
                                        a,
                                        'Chromium OS'
                                    ],
                                    c
                                ],
                                [/(sunos)\s?([\w\.\d]*)/i],
                                [
                                    [
                                        a,
                                        'Solaris'
                                    ],
                                    c
                                ],
                                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                                [
                                    a,
                                    c
                                ],
                                [/(haiku)\s(\w+)/i],
                                [
                                    a,
                                    c
                                ],
                                [
                                    /cfnetwork\/.+darwin/i,
                                    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i
                                ],
                                [
                                    [
                                        c,
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
                                        c,
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
                                    c
                                ]
                            ]
                        }, w = function (e, i) {
                            if ('object' == typeof e && (i = e, e = void 0), !(this instanceof w))
                                return new w(e, i).getResult();
                            var t = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ''), n = i ? m.extend(f, i) : f;
                            return this.getBrowser = function () {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return g.rgx.call(e, t, n.browser), e.major = m.major(e.version), e;
                            }, this.getCPU = function () {
                                var e = { architecture: void 0 };
                                return g.rgx.call(e, t, n.cpu), e;
                            }, this.getDevice = function () {
                                var e = {
                                    vendor: void 0,
                                    model: void 0,
                                    type: void 0
                                };
                                return g.rgx.call(e, t, n.device), e;
                            }, this.getEngine = function () {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return g.rgx.call(e, t, n.engine), e;
                            }, this.getOS = function () {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return g.rgx.call(e, t, n.os), e;
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
                                return t;
                            }, this.setUA = function (e) {
                                return t = e, this;
                            }, this;
                        };
                    w.VERSION = '0.7.21', w.BROWSER = {
                        NAME: a,
                        MAJOR: 'major',
                        VERSION: c
                    }, w.CPU = { ARCHITECTURE: 'architecture' }, w.DEVICE = {
                        MODEL: o,
                        VENDOR: d,
                        TYPE: l,
                        CONSOLE: 'console',
                        MOBILE: u,
                        SMARTTV: h,
                        TABLET: p,
                        WEARABLE: 'wearable',
                        EMBEDDED: 'embedded'
                    }, w.ENGINE = {
                        NAME: a,
                        VERSION: c
                    }, w.OS = {
                        NAME: a,
                        VERSION: c
                    }, void 0 !== i ? (void 0 !== e && e.exports && (i = e.exports = w), i.UAParser = w) : void 0 === (n = function () {
                        return w;
                    }.call(i, t, i, e)) || (e.exports = n);
                    var b = r && (r.jQuery || r.Zepto);
                    if (b && !b.ua) {
                        var y = new w();
                        b.ua = y.getResult(), b.ua.get = function () {
                            return y.getUA();
                        }, b.ua.set = function (e) {
                            y.setUA(e);
                            var i = y.getResult();
                            for (var t in i)
                                b.ua[t] = i[t];
                        };
                    }
                }('object' == typeof window ? window : this);
            },
            function (e, i, t) {
                var n = t(3), r = t(4);
                'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[
                        e.i,
                        r,
                        ''
                    ]]);
                var s = {
                    insert: 'head',
                    singleton: !1
                };
                n(r, s);
                e.exports = r.locals || {};
            },
            function (e, i, t) {
                'use strict';
                var n, r = function () {
                        return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
                    }, s = function () {
                        var e = {};
                        return function (i) {
                            if (void 0 === e[i]) {
                                var t = document.querySelector(i);
                                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                    try {
                                        t = t.contentDocument.head;
                                    } catch (e) {
                                        t = null;
                                    }
                                e[i] = t;
                            }
                            return e[i];
                        };
                    }(), o = [];
                function a(e) {
                    for (var i = -1, t = 0; t < o.length; t++)
                        if (o[t].identifier === e) {
                            i = t;
                            break;
                        }
                    return i;
                }
                function l(e, i) {
                    for (var t = {}, n = [], r = 0; r < e.length; r++) {
                        var s = e[r], l = i.base ? s[0] + i.base : s[0], d = t[l] || 0, c = ''.concat(l, ' ').concat(d);
                        t[l] = d + 1;
                        var u = a(c), p = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3]
                            };
                        -1 !== u ? (o[u].references++, o[u].updater(p)) : o.push({
                            identifier: c,
                            updater: v(p, i),
                            references: 1
                        }), n.push(c);
                    }
                    return n;
                }
                function d(e) {
                    var i = document.createElement('style'), n = e.attributes || {};
                    if (void 0 === n.nonce) {
                        var r = t.nc;
                        r && (n.nonce = r);
                    }
                    if (Object.keys(n).forEach(function (e) {
                            i.setAttribute(e, n[e]);
                        }), 'function' == typeof e.insert)
                        e.insert(i);
                    else {
                        var o = s(e.insert || 'head');
                        if (!o)
                            throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');
                        o.appendChild(i);
                    }
                    return i;
                }
                var c, u = (c = [], function (e, i) {
                        return c[e] = i, c.filter(Boolean).join('\n');
                    });
                function p(e, i, t, n) {
                    var r = t ? '' : n.media ? '@media '.concat(n.media, ' {').concat(n.css, '}') : n.css;
                    if (e.styleSheet)
                        e.styleSheet.cssText = u(i, r);
                    else {
                        var s = document.createTextNode(r), o = e.childNodes;
                        o[i] && e.removeChild(o[i]), o.length ? e.insertBefore(s, o[i]) : e.appendChild(s);
                    }
                }
                function h(e, i, t) {
                    var n = t.css, r = t.media, s = t.sourceMap;
                    if (r ? e.setAttribute('media', r) : e.removeAttribute('media'), s && btoa && (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), ' */')), e.styleSheet)
                        e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild;)
                            e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n));
                    }
                }
                var m = null, g = 0;
                function v(e, i) {
                    var t, n, r;
                    if (i.singleton) {
                        var s = g++;
                        t = m || (m = d(i)), n = p.bind(null, t, s, !1), r = p.bind(null, t, s, !0);
                    } else
                        t = d(i), n = h.bind(null, t, i), r = function () {
                            !function (e) {
                                if (null === e.parentNode)
                                    return !1;
                                e.parentNode.removeChild(e);
                            }(t);
                        };
                    return n(e), function (i) {
                        if (i) {
                            if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap)
                                return;
                            n(e = i);
                        } else
                            r();
                    };
                }
                e.exports = function (e, i) {
                    (i = i || {}).singleton || 'boolean' == typeof i.singleton || (i.singleton = r());
                    var t = l(e = e || [], i);
                    return function (e) {
                        if (e = e || [], '[object Array]' === Object.prototype.toString.call(e)) {
                            for (var n = 0; n < t.length; n++) {
                                var r = a(t[n]);
                                o[r].references--;
                            }
                            for (var s = l(e, i), d = 0; d < t.length; d++) {
                                var c = a(t[d]);
                                0 === o[c].references && (o[c].updater(), o.splice(c, 1));
                            }
                            t = s;
                        }
                    };
                };
            },
            function (e, i, t) {
                (i = t(5)(!1)).push([
                    e.i,
                    '#slider.wrapper {\n    display: none;\n    flex-direction: column;\n    position: fixed;\n    right: -426px;\n    bottom: 0px;\n    z-index: 9999;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 1s;\n    -o-transition-duration: 1s;\n    transition-duration: 1s;\n    font-family: Roboto, sans-serif, Verdana, Arial;\n    font-size: 13px;\n}\n\n#slider video {\n    pointer-events: none;\n    width: 100%;\n    height: 100%;\n    display: block;\n    margin: 0px auto;\n}\n\n#slider .link {\n    display: inline-flex;\n    opacity: 0;\n    color: rgb(255, 255, 255);\n    padding: 4px 10px;\n    background: rgba(0, 0, 0, 0.6);\n    text-decoration: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n}\n\n#slider_click_link {\n    position: absolute;\n    z-index: 100;\n    height: 100%;\n    width: 100%;\n}\n\n#slider .close {\n    pointer-events: auto;\n    padding: 4px 10px;\n    display: flex;\n    user-select: none;\n    color: rgb(255, 255, 255);\n    background: rgba(0, 0, 0, 0.6);\n    cursor: pointer;\n    z-index: 9999;\n    border-top-left-radius: 5px;\n}\n\n#slider .close_text {\n    position: relative;\n    color: #FFFFFF;\n}\n\n#slider .progress_wrapper {\n    pointer-events: none;\n    position: absolute;\n    width: calc(100% - 30px);\n    height: 3px;\n    left: 15px;\n    bottom: 10%;\n    background: rgba(255, 255, 255, 0.25);\n    z-index: 1;\n}\n\n#slider .progressbar {\n    pointer-events: none;\n    width: 0%;\n    height: 100%;\n    background: rgba(249, 211, 0, 0.8);\n    transition: width 0.6s linear 0s;\n}\n\n#slider_replay_button {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 70px;\n    width: 70px;\n    position: absolute;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.7);\n    display: none;\n    z-index: 300;\n}\n\n#slider_mute_button {\n    border-radius: 5px;\n    position: absolute;\n    z-index: 300;\n    right: 5px;\n    bottom: 15%;\n    background: rgba(0, 0, 0, 0.7);\n    height: 30px;\n    width: 30px;\n}\n\n#slider_mute_button svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    fill: #FFFFFF;\n    height: 24px;\n    width: 24px;\n    display: none;\n}\n\n#slider.notransition, #slider .notransition {\n    -webkit-transition: none !important;\n    -moz-transition: none !important;\n    -o-transition: none !important;\n    transition: none !important;\n}\n\n\n.slider_content {\n    display: block;\n    background: rgba(0, 0, 0, 0.6);\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\n}\n\n.slider_header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    line-height: 1.6;\n}\n\n.main_frame {\n    border: none;\n    display: block;\n}\n',
                    ''
                ]), e.exports = i;
            },
            function (e, i, t) {
                'use strict';
                e.exports = function (e) {
                    var i = [];
                    return i.toString = function () {
                        return this.map(function (i) {
                            var t = function (e, i) {
                                var t = e[1] || '', n = e[3];
                                if (!n)
                                    return t;
                                if (i && 'function' == typeof btoa) {
                                    var r = (o = n, a = btoa(unescape(encodeURIComponent(JSON.stringify(o)))), l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(a), '/*# '.concat(l, ' */')), s = n.sources.map(function (e) {
                                            return '/*# sourceURL='.concat(n.sourceRoot || '').concat(e, ' */');
                                        });
                                    return [t].concat(s).concat([r]).join('\n');
                                }
                                var o, a, l;
                                return [t].join('\n');
                            }(i, e);
                            return i[2] ? '@media '.concat(i[2], ' {').concat(t, '}') : t;
                        }).join('');
                    }, i.i = function (e, t, n) {
                        'string' == typeof e && (e = [[
                                null,
                                e,
                                ''
                            ]]);
                        var r = {};
                        if (n)
                            for (var s = 0; s < this.length; s++) {
                                var o = this[s][0];
                                null != o && (r[o] = !0);
                            }
                        for (var a = 0; a < e.length; a++) {
                            var l = [].concat(e[a]);
                            n && r[l[0]] || (t && (l[2] ? l[2] = ''.concat(t, ' and ').concat(l[2]) : l[2] = t), i.push(l));
                        }
                    }, i;
                };
            },
            function (e, i, t) {
                'use strict';
                t.r(i);
                var n = t(1), r = t.n(n), s = t(0), o = t.n(s);
                function a(e, i) {
                    i && i.forEach(function (e) {
                        new Image().src = e;
                    });
                    var t = o.a.get('TCSLIDER') && JSON.parse(o.a.get('TCSLIDER')).ignitions;
                    t ? t.push(Date.now()) : t = [Date.now()], o.a.set('TCSLIDER', { ignitions: t }, { expires: e / 1440 });
                }
                function l(e) {
                    var i = o.a.get('TCSLIDER') && JSON.parse(o.a.get('TCSLIDER')).ignitions;
                    return !i || !i.length || i.length < e;
                }
                function d(e) {
                    for (var i = 0; i < e.length; i++)
                        new Image().src = e[i];
                }
                function c(e, i) {
                    var t = i ? i.videoWidth / i.videoHeight : 16 / 9, n = window.innerHeight * e / 100, r = n * t;
                    return n < 180 || r < 320 ? {
                        height: 180,
                        width: 320
                    } : {
                        height: n,
                        width: r
                    };
                }
                function u(e, i) {
                    var t = [];
                    switch (t.length = 0, i) {
                    case 'start':
                    case 'skip':
                    case 'complete':
                        !1 === e.stopTracking[i] && (null !== e.tracking[i] && (t = e.tracking[i]), e.stopTracking[i] = !0);
                    }
                    d(t);
                }
                t(2);
                function p(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var n = i[t];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var h = function () {
                    function e() {
                        !function (e, i) {
                            if (!(e instanceof i))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), this.mainId = 'slider', this.parser = new r.a();
                    }
                    var i, t, n;
                    return i = e, (t = [
                        {
                            key: 'create',
                            value: function (e, i) {
                                var t, n;
                                this.mainDiv = (t = '\n      <div id="slider" class="wrapper">\n        <div id="slider_header" class="slider_header">\n            <a id="slider_network_link" target="_blank" href="" class="link"></a>\n            <div id="slider_close" class="close">\n                <div id="slider_close_text" class="close_text"></div>\n            </div>\n        </div>\n        <div id="slider_content" class="slider_content">\n          <a id="slider_click_link" target="_blank" href=""></a>\n            <video id="slider_video" playsinline="" webkit-playsinline="">\'\n                <source id="slider_source" src="">\n            </video>\n    \n            <div id="slider_replay_button">\n                <svg style="fill: #FFFFFF;" viewBox="4 4.5 27 27" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"/>\n                </svg>\n            </div>\n            <div id="slider_mute_button">\n                <svg id="slider_mute_off" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">\n                    <path d="m0 5.5924v5.8152h3.7778l4.7222 4.8461v-15.507l-4.7222 4.8461h-3.7778zm12.75 2.9076c0-1.7155-0.9633-3.1887-2.3611-3.9059v7.8021c1.3978-0.7075 2.3611-2.1807 2.3611-3.8962zm-2.3611-8.5v1.9966c2.7294 0.83352 4.7222 3.431 4.7222 6.5034 0 3.0724-1.9928 5.6699-4.7222 6.5034v1.9966c3.7872-0.882 6.6111-4.3518 6.6111-8.5 0-4.1482-2.8239-7.618-6.6111-8.5z"/>\n                </svg>\n                <svg id="slider_mute_on" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">\n                    <path d="m12.75 8.5c0-1.6717-0.9633-3.1072-2.3611-3.8061v2.0872l2.3139 2.3139c0.0283-0.18889 0.0472-0.38722 0.0472-0.595zm2.3611 0c0 0.88778-0.1889 1.7189-0.51 2.4933l1.4261 1.4261c0.6234-1.1711 0.9728-2.5027 0.9728-3.9194 0-4.0422-2.8239-7.4233-6.6111-8.2828v1.9456c2.7294 0.81222 4.7222 3.3433 4.7222 6.3372zm-13.912-8.5l-1.1994 1.1994 4.4672 4.4672h-4.4672v5.6666h3.7778l4.7222 4.7223v-6.3562l4.0139 4.0139c-0.6328 0.4911-1.3411 0.8784-2.125 1.1145v1.9455c1.3033-0.2927 2.4839-0.8972 3.485-1.7094l1.9267 1.9361 1.1994-1.1994-8.5-8.5-7.3006-7.3006zm7.3006 0.94444l-1.9739 1.9739 1.9739 1.9739v-3.9478z"/>\n                </svg>\n            </div>\n            <div class="progress_wrapper">\n                <div id="slider_progress" class="progressbar">\n                </div>\n            </div>\n        </div>\n    </div>', (n = document.createElement('div')).innerHTML = t.trim(), n.firstChild), document.body.appendChild(this.mainDiv), this.wrapper = document.getElementById(this.mainId), this.content = document.getElementById(this.mainId + '_content'), this.closeButton = document.getElementById(this.mainId + '_close'), this.closeText = document.getElementById(this.mainId + '_close_text'), this.networkLink = document.getElementById(this.mainId + '_network_link'), i ? this.content.innerHTML = '' : (this.source = document.getElementById(this.mainId + '_source'), this.video = document.getElementById(this.mainId + '_video'), this.progressbar = document.getElementById(this.mainId + '_progress'), this.muteButton = document.getElementById(this.mainId + '_mute_button'), this.muteOn = document.getElementById(this.mainId + '_mute_on'), this.muteOff = document.getElementById(this.mainId + '_mute_off'), this.replayButton = document.getElementById(this.mainId + '_replay_button'), this.clickOverlay = document.getElementById(this.mainId + '_click_link')), 'Safari' === this.parser.getBrowser().name && (this.content.style.height = '90%'), e ? (this.networkLink.href = 'tubecorp.com', this.networkLink.innerText = 'Ads by Tubecorp', this.networkLink.style.opacity = 1) : (this.networkLink.style.cursor = 'inherit', this.networkLink.onclick = function (e) {
                                    return e.preventDefault();
                                });
                            }
                        },
                        {
                            key: 'hide',
                            value: function () {
                                this.wrapper.classList.remove('notransition'), this.mainDiv.style.right = '-' + this.mainDiv.offsetWidth + 'px';
                            }
                        }
                    ]) && p(i.prototype, t), n && p(i, n), e;
                }();
                function m() {
                    var e = document.querySelector('.main_frame'), i = document.createElement('div'), t = document.createElement('video'), n = e.contentWindow, r = n.getVPAIDAd, s = n.tmpOpts, o = n.params, a = n.impressionHandler, l = n.player, d = o.closeButtonDelay, u = void 0 === d ? 5 : d, p = o.sizePercent, h = void 0 === p ? 25 : p, m = o.capping, g = void 0 === m ? 5 : m, v = new r(), f = !1, w = 6, b = !1, y = c(h);
                    e.style.width = y.width + 'px', e.style.height = y.height + 'px', l.wrapper.style.display = 'flex', l.closeText.innerText = 0 == u ? 'Close ad \u2715' : 'Close ad in '.concat(u, ' sec'), i.appendChild(t), e.contentDocument.body.appendChild(i), v.handshakeVersion() >= 2 && (v.subscribe(function () {
                        v.startAd();
                    }, 'AdLoaded', this), v.subscribe(function () {
                        l.wrapper.style.right = '0', s.tracking.start && s.tracking.start.forEach(function (e) {
                            new Image().src = e;
                        });
                        var e = setInterval(function () {
                            (0 === --w || b) && (b || (l.closeText.innerText = 'Close ad \u2715', l.closeButton.addEventListener('click', function (e) {
                                f = !0, v.stopAd();
                            }.bind(this))), clearInterval(e));
                        }, 1000);
                    }, 'AdStarted', this), v.subscribe(function () {
                        if (b = !0, 0 !== w)
                            var e = setInterval(function () {
                                0 === u ? (clearInterval(e), l.closeText.innerText = 'Close ad \u2715', l.closeButton.addEventListener('click', function (e) {
                                    f = !0, v.stopAd();
                                }.bind(this))) : l.closeText.innerText = 'Close ad in ' + u-- + ' sec';
                            }, 1000);
                        a(g, s.impression);
                    }, 'AdImpression', this), v.subscribe(function () {
                        l.wrapper.style.right = '-426px';
                        var e = f ? s.tracking.skip : s.tracking.complete;
                        e && e.forEach(function (e) {
                            new Image().src = e;
                        }), setTimeout(function () {
                            l.wrapper.remove();
                        }.bind(this), 700);
                    }, 'AdStopped', this), v.subscribe(function () {
                        f = !0;
                    }, 'AdSkipped', this), v.initAd(y.width, y.height, 'normal', 256, { AdParameters: s.AdParameters }, {
                        slot: i,
                        videoSlot: t
                    }));
                }
                function g(e, i) {
                    if (null == e)
                        return {};
                    var t, n, r = function (e, i) {
                            if (null == e)
                                return {};
                            var t, n, r = {}, s = Object.keys(e);
                            for (n = 0; n < s.length; n++)
                                t = s[n], i.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        }(e, i);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++)
                            t = s[n], i.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
                    }
                    return r;
                }
                function v(e, i, t, n) {
                    var r = i.branding, s = void 0 === r || r, o = g(i, ['branding']), a = new t(), l = document.createElement('iframe');
                    l.classList.add('main_frame'), a.create(s, e.VPAID), a.content.appendChild(l), l.contentWindow.document.open().write('\n    <body onload="\n     var js = document.createElement(\'script\');\n        js.src = \'' + e.mediaFile + '\';\n        js.addEventListener(\'load\', function() { window.vpaidHandler(); });\n        document.body.appendChild(js);"\n    style="margin: 0">'), l.contentWindow.document.close(), Object.assign(l.contentWindow, {
                        vpaidHandler: m,
                        player: a,
                        tmpOpts: e,
                        params: o,
                        impressionHandler: n
                    });
                }
                function f(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var n = i[t];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var w = function () {
                    function e(i, t, n, r) {
                        !function (e, i) {
                            if (!(e instanceof i))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e);
                        var s = t.branding;
                        this.branding = void 0 === s || s;
                        var o = t.capping;
                        this.capping = void 0 === o ? 5 : o;
                        var a = t.closeButtonDelay;
                        this.closeButtonDelay = void 0 === a ? 5 : a;
                        var l = t.sound;
                        this.sound = void 0 !== l && l;
                        var d = t.sizePercent;
                        this.sizePercent = void 0 === d ? 25 : d;
                        var c = t.onComplete;
                        this.onComplete = void 0 === c ? '' : c, this.adItem = i, this.player = new n(), this.impressionHandler = r, this.viewCounter = 0, this.playing = !1;
                    }
                    var i, t, n;
                    return i = e, (t = [
                        {
                            key: 'init',
                            value: function () {
                                var e = this;
                                this.player.create(this.branding), this.player.video.onloadeddata = function () {
                                    var i = c(e.sizePercent, e.player.video);
                                    e.player.content.style.width = i.width + 'px', e.player.content.style.height = i.height + 'px', e.player.wrapper.style.display = 'flex';
                                }, this.__subscribeOnEvents(), this.player.clickOverlay.href = this.adItem.clickthroughUrl, this.player.source.setAttribute('src', this.adItem.mediaFile), this.player.video.muted = !this.sound, this.__drawMute();
                                var i = this.player.video.play();
                                void 0 === i || void 0 === i.then ? this.player.video.addEventListener('loadedmetadata', this.__onPlay.bind(this)) : i.then(this.__onPlay.bind(this)).catch(function (i) {
                                    e.player.video.muted = !0, e.__drawMute(), e.player.video.play().then(e.__onPlay.bind(e));
                                });
                            }
                        },
                        {
                            key: '__subscribeOnEvents',
                            value: function () {
                                var e = this;
                                this.player.muteButton.addEventListener('click', function () {
                                    e.player.video.muted = !e.player.video.muted, e.__drawMute();
                                }), this.player.video.addEventListener('ended', function () {
                                    e.playing = !1, e.viewCounter++, 'repeat' === e.onComplete ? (e.player.replayButton.style.display = 'block', e.player.replayButton.addEventListener('click', e.__replay.bind(e))) : e.player.hide();
                                }, !1), this.updateTimeHandler = this.__updateSkipTime.bind(this), this.player.video.addEventListener('timeupdate', this.updateTimeHandler), this.player.video.addEventListener('timeupdate', function () {
                                    var i, t, n;
                                    i = e.adItem, t = e.player.video.currentTime, n = e.player.video.duration, 0 == (t = Math.floor(t)) && u(i, 'start'), t >= n - 1 && u(i, 'complete');
                                    var r = e.player.video.currentTime / e.player.video.duration * 100;
                                    e.player.progressbar.style.width = r + '%';
                                }), this.player.video.addEventListener('error', function () {
                                    d(e.adItem.errorUrl);
                                });
                            }
                        },
                        {
                            key: '__onPlay',
                            value: function () {
                                var e = this;
                                this.playing = !0, this.viewCounter >= 1 || (setTimeout(function () {
                                    e.player.wrapper.classList.remove('notransition'), e.player.wrapper.style.right = 0;
                                }, 100), this.impressionHandler(this.capping, this.adItem.impression));
                            }
                        },
                        {
                            key: '__updateSkipTime',
                            value: function () {
                                var e = this;
                                this.closeButtonDelay > this.player.video.currentTime && this.viewCounter < 1 ? this.player.closeText.innerHTML = 'Close ad in ' + Math.ceil(this.closeButtonDelay - this.player.video.currentTime) + ' sec' : (this.player.closeText.innerHTML = 'Close ad \u2715', this.player.closeButton.addEventListener('click', function () {
                                    u(e.adItem, 'skip'), e.player.video.pause(), e.playing = !1, e.player.hide();
                                }), this.player.video.removeEventListener('timeupdate', this.updateTimeHandler));
                            }
                        },
                        {
                            key: '__replay',
                            value: function () {
                                var e = this;
                                this.player.progressbar.classList.add('notransition'), this.player.progressbar.style.width = '0px', this.player.replayButton.style.display = 'none', this.player.video.play().then(function () {
                                    e.playing = !0, e.player.progressbar.classList.remove('notransition');
                                });
                            }
                        },
                        {
                            key: '__drawMute',
                            value: function () {
                                this.player.video.muted ? (this.player.muteOn.style.display = 'block', this.player.muteOff.style.display = 'none') : (this.player.muteOn.style.display = 'none', this.player.muteOff.style.display = 'block');
                            }
                        }
                    ]) && f(i.prototype, t), n && f(i, n), e;
                }();
                function b(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var n = i[t];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var y = function () {
                    function e(i) {
                        !function (e, i) {
                            if (!(e instanceof i))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), this.tmpOptions = i;
                    }
                    var i, t, n;
                    return i = e, (t = [
                        {
                            key: 'processXml',
                            value: function (e) {
                                var i = e.getElementsByTagName('Impression');
                                null !== i && this.registerImpressionEvents(i);
                                var t = e.getElementsByTagName('Error');
                                null !== t && this.registerErrorEvents(t);
                                var n = e.getElementsByTagName('Creative');
                                if (void 0 !== n && n.length) {
                                    var r = n[0].getElementsByTagName('Linear');
                                    if (null != r && r.length) {
                                        var s = r[0];
                                        this.registerTrackingEvents(s);
                                        var o = this.getClickTrackingEvents(s);
                                        if (this.registerClickTracking(o), !this.hasVastAdTagUri(e) && this.hasInLine(e)) {
                                            this.tmpOptions.adFinished = !1, this.tmpOptions.adType = 'linear', this.tmpOptions.skipoffset = this.convertTimeStringToSeconds(s.getAttribute('skipoffset')), this.tmpOptions.clickthroughUrl = this.getClickThroughUrlFromLinear(s), this.tmpOptions.duration = this.getDurationFromLinear(s);
                                            var a = this.getMediaFileFromLinear(s);
                                            this.tmpOptions.mediaFile = a.mediaFile, this.tmpOptions.VPAID = a.isVPAID, 'VPAID' === this.tmpOptions.VPAID && (this.tmpOptions.AdParameters = this.getAdParametersFromLinear(s)), this.tmpOptions.iconClick = this.getIconClickThroughFromLinear(s);
                                        }
                                    }
                                    var l = n[0].getElementsByTagName('NonLinearAds');
                                    if (null != l && l.length) {
                                        var d = l[0];
                                        this.registerTrackingEvents(d), o = this.getNonLinearClickTrackingEvents(d), this.registerClickTracking(o), !this.hasVastAdTagUri(e) && this.hasInLine(e) && (this.tmpOptions.adType = 'nonLinear', this.tmpOptions.clickthroughUrl = this.getClickThroughUrlFromNonLinear(d), this.tmpOptions.duration = this.getDurationFromNonLinear(d), this.tmpOptions.dimension = this.getDimensionFromNonLinear(d), this.tmpOptions.staticResource = this.getStaticResourceFromNonLinear(d), this.tmpOptions.creativeType = this.getCreativeTypeFromStaticResources(d));
                                    }
                                    if (!this.hasVastAdTagUri(e) && this.hasInLine(e)) {
                                        if (void 0 !== this.tmpOptions.mediaFile || void 0 !== this.tmpOptions.staticResource)
                                            return this.tmpOptions;
                                        console.error('mediaFile is undefined');
                                    }
                                }
                            }
                        },
                        {
                            key: 'registerTrackingEvents',
                            value: function (e) {
                                for (var i = this.getTrackingFromLinear(e), t = '', n = 0; n < i.length; n++)
                                    switch (t = i[n].getAttribute('event')) {
                                    case 'start':
                                    case 'skip':
                                    case 'complete':
                                        void 0 === this.tmpOptions.tracking[t] && (this.tmpOptions.tracking[t] = []), void 0 === this.tmpOptions.stopTracking[t] && (this.tmpOptions.stopTracking[t] = []), this.tmpOptions.tracking[t].push(i[n].childNodes[0].nodeValue), this.tmpOptions.stopTracking[t] = !1;
                                    }
                            }
                        },
                        {
                            key: 'hasInLine',
                            value: function (e) {
                                var i = e.getElementsByTagName('InLine');
                                return void 0 !== i && i.length;
                            }
                        },
                        {
                            key: 'hasVastAdTagUri',
                            value: function (e) {
                                var i = e.getElementsByTagName('VASTAdTagURI');
                                return void 0 !== i && i.length;
                            }
                        },
                        {
                            key: 'extractNodeData',
                            value: function (e) {
                                for (var i = '', t = 0; t < e.childNodes.length; t++) {
                                    var n = e.childNodes[t];
                                    8 === n.nodeType || 3 === n.nodeType && /^\s*$/.test(n.nodeValue) || (i += n.nodeValue);
                                }
                                return i.replace(/(^\s+|\s+$)/g, '');
                            }
                        },
                        {
                            key: 'getVastAdTagUriFromWrapper',
                            value: function (e) {
                                var i = e.getElementsByTagName('Wrapper');
                                if (void 0 !== i && i.length) {
                                    var t = i[0].getElementsByTagName('VASTAdTagURI');
                                    if (t.length)
                                        return this.extractNodeData(t[0]);
                                }
                                return !1;
                            }
                        },
                        {
                            key: 'getMediaFilesFromLinear',
                            value: function (e) {
                                var i = e.getElementsByTagName('MediaFiles');
                                return i.length ? i[0].getElementsByTagName('MediaFile') : [];
                            }
                        },
                        {
                            key: 'getMediaFileFromLinear',
                            value: function (e) {
                                var i, t, n = this.getMediaFilesFromLinear(e);
                                return n.length && (t = n[0].getAttribute('apiFramework'), i = this.extractNodeData(n[0])), {
                                    mediaFile: i,
                                    isVPAID: t
                                };
                            }
                        },
                        {
                            key: 'getIconClickThroughFromLinear',
                            value: function (e) {
                                var i = e.getElementsByTagName('IconClickThrough');
                                return i.length ? this.extractNodeData(i[0]) : (void 0 !== this.displayOptions && void 0 !== this.displayOptions.vastOptions && (this.displayOptions.vastOptions.adCTAText = !1), '');
                            }
                        },
                        {
                            key: 'getStaticResourceFromNonLinear',
                            value: function (e) {
                                for (var i, t = this.getStaticResourcesFromNonLinear(e), n = 0; n < t.length; n++)
                                    if (t[n].getAttribute('type') || (i = this.extractNodeData(t[n])), void 0 !== this.displayOptions && void 0 !== this.displayOptions.staticResource && t[n].getAttribute('type') === this.displayOptions.staticResource)
                                        return this.extractNodeData(t[n]);
                                return i;
                            }
                        },
                        {
                            key: 'getClickTrackingEvents',
                            value: function (e) {
                                var i = [], t = e.getElementsByTagName('VideoClicks');
                                if (t.length) {
                                    var n = t[0].getElementsByTagName('ClickTracking');
                                    if (n.length)
                                        for (var r = 0; r < n.length; r++) {
                                            var s = this.extractNodeData(n[r]);
                                            i.push(s);
                                        }
                                }
                                return i;
                            }
                        },
                        {
                            key: 'getNonLinearClickTrackingEvents',
                            value: function (e) {
                                var i = [];
                                if (e.getElementsByTagName('NonLinear').length) {
                                    var t = e.getElementsByTagName('NonLinearClickTracking');
                                    if (t.length)
                                        for (var n = 0; n < t.length; n++) {
                                            var r = this.extractNodeData(t[n]);
                                            i.push(r);
                                        }
                                }
                                return i;
                            }
                        },
                        {
                            key: 'getTrackingFromLinear',
                            value: function (e) {
                                var i = e.getElementsByTagName('TrackingEvents');
                                return i.length ? i[0].getElementsByTagName('Tracking') : [];
                            }
                        },
                        {
                            key: 'getDurationFromLinear',
                            value: function (e) {
                                var i = e.getElementsByTagName('Duration');
                                if (i.length && void 0 !== i[0].childNodes[0]) {
                                    var t = this.extractNodeData(i[0]);
                                    return this.convertTimeStringToSeconds(t);
                                }
                                return !1;
                            }
                        },
                        {
                            key: 'getAdParametersFromLinear',
                            value: function (e) {
                                var i = e.getElementsByTagName('AdParameters');
                                if (i.length && void 0 !== i[0].childNodes[0])
                                    return this.extractNodeData(i[0]);
                            }
                        },
                        {
                            key: 'getDurationFromNonLinear',
                            value: function (e) {
                                var i = 0, t = e.getElementsByTagName('NonLinear');
                                return t.length && void 0 !== t[0].getAttribute('minSuggestedDuration') && (i = this.convertTimeStringToSeconds(t[0].getAttribute('minSuggestedDuration'))), i;
                            }
                        },
                        {
                            key: 'getClickThroughUrlFromLinear',
                            value: function (e) {
                                var i = e.getElementsByTagName('VideoClicks');
                                if (i.length) {
                                    var t = i[0].getElementsByTagName('ClickThrough');
                                    if (t.length)
                                        return this.extractNodeData(t[0]);
                                }
                                return !1;
                            }
                        },
                        {
                            key: 'getClickThroughUrlFromNonLinear',
                            value: function (e) {
                                var i = '';
                                if (e.getElementsByTagName('NonLinear').length) {
                                    var t = e.getElementsByTagName('NonLinearClickThrough');
                                    t.length && (i = this.extractNodeData(t[0]));
                                }
                                return i;
                            }
                        },
                        {
                            key: 'getDimensionFromNonLinear',
                            value: function (e) {
                                var i = {
                                        width: null,
                                        height: null
                                    }, t = e.getElementsByTagName('NonLinear');
                                return t.length && (void 0 !== t[0].getAttribute('width') && (i.width = t[0].getAttribute('width')), void 0 !== t[0].getAttribute('height') && (i.height = t[0].getAttribute('height'))), i;
                            }
                        },
                        {
                            key: 'getCreativeTypeFromStaticResources',
                            value: function (e) {
                                var i = '', t = e.getElementsByTagName('NonLinear');
                                return t.length && void 0 !== t[0].childNodes[0] && (i = t[0].getElementsByTagName('StaticResource')[0].getAttribute('creativeType')), i.toLowerCase();
                            }
                        },
                        {
                            key: 'convertTimeStringToSeconds',
                            value: function (e) {
                                if (e && e.match(/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/)) {
                                    var i = e.split(':');
                                    return 3600 * parseInt(i[0], 10) + 60 * parseInt(i[1], 10) + parseInt(i[2], 10);
                                }
                                return !1;
                            }
                        },
                        {
                            key: 'registerClickTracking',
                            value: function (e) {
                                if (e.length)
                                    for (var i = 0; i < e.length; i++)
                                        '' != e[i] && this.tmpOptions.clicktracking.push(e[i]);
                            }
                        },
                        {
                            key: 'registerImpressionEvents',
                            value: function (e) {
                                if (e.length)
                                    for (var i = 0; i < e.length; i++) {
                                        var t = this.extractNodeData(e[i]);
                                        this.tmpOptions.impression.push(t);
                                    }
                            }
                        },
                        {
                            key: 'registerErrorEvents',
                            value: function (e) {
                                if (e.length)
                                    for (var i = 0; i < e.length; i++) {
                                        var t = this.extractNodeData(e[i]);
                                        this.tmpOptions.errorUrl.push(t);
                                    }
                            }
                        }
                    ]) && b(i.prototype, t), n && b(i, n), e;
                }();
                function k(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var n = i[t];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var x = function () {
                    function e(i) {
                        !function (e, i) {
                            if (!(e instanceof i))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), this.maxVastRedirects = i || 10, this.numberOfRedirects = 0, this.tmpOptions = {
                            tracking: {},
                            stopTracking: [],
                            impression: [],
                            errorUrl: [],
                            clicktracking: [],
                            vastLoaded: !1
                        }, this.xmlParser = new y(this.tmpOptions);
                    }
                    var i, t, n;
                    return i = e, (t = [
                        {
                            key: 'getVastTagData',
                            value: function (e, i) {
                                this.numberOfRedirects <= this.maxVastRedirects && function (e) {
                                    const $___old_f113d3f8007d2ed7 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_068ed7e8082f6f59 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                    try {
                                        if ($___old_f113d3f8007d2ed7)
                                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_9748d77dc4065f3f.XMLHttpRequest));
                                        if ($___old_068ed7e8082f6f59)
                                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_9748d77dc4065f3f.XMLHttpRequest));
                                        return function () {
                                            var i, t = new XMLHttpRequest();
                                            if (!e)
                                                return t;
                                            switch (e.headers = e.headers || {}, e.type = e.type ? e.type.toUpperCase() : 'GET', e.type) {
                                            case 'POST':
                                                var n = new FormData();
                                                for (var r in e.data)
                                                    r && n.append(r, e.data[r]);
                                                i = n;
                                                break;
                                            case 'JSON':
                                                i = JSON.stringify(e.data), e.type = 'POST', e.headers['Content-type'] = 'application/json; charset=utf-8';
                                                break;
                                            default:
                                                e.type = 'GET';
                                            }
                                            for (var r in (t.open(e.type, e.url, !0), e.headers))
                                                t.setRequestHeader(r, e.headers[r]);
                                            'number' == typeof e.timeout && (t.timeout = e.timeout), 'function' != typeof e.onSuccess && (e.onSuccess = function () {
                                            }), 'function' != typeof e.onFail && (e.onFail = function () {
                                            }), t.onloadend = function (i) {
                                                200 === i.target.status && e.onSuccess(i.target.responseText);
                                            }, t.onerror = function (i) {
                                                e.onFail('status code error', i.target.status);
                                            }, t.ontimeout = function (i) {
                                                e.onFail('Connection timeout');
                                            }, t.onabort = function (i) {
                                                e.onFail('Connection abort');
                                            };
                                            try {
                                                'function' == typeof e.waitData ? e.waitData(function (e) {
                                                    t.send(e);
                                                }) : i ? t.send(i) : t.send();
                                            } catch (i) {
                                                e.onFail('send error');
                                            }
                                        }.apply(this, arguments);
                                    } finally {
                                        if ($___old_f113d3f8007d2ed7)
                                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_f113d3f8007d2ed7));
                                        if ($___old_068ed7e8082f6f59)
                                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_068ed7e8082f6f59));
                                    }
                                }({
                                    url: e,
                                    onSuccess: this.xmlResponseHandler.bind(this, i)
                                }), this.numberOfRedirects++;
                            }
                        },
                        {
                            key: 'xmlResponseHandler',
                            value: function (e, i) {
                                if (i) {
                                    var t = new window.DOMParser().parseFromString(i, 'text/xml'), n = this.xmlParser.hasInLine(t);
                                    if (n || !this.xmlParser.hasVastAdTagUri(t))
                                        return e(this.xmlParser.processXml(t));
                                    var r = this.xmlParser.getVastAdTagUriFromWrapper(t);
                                    this.xmlParser.processXml(t), r ? (this.getVastTagData(r, e), this.numberOfRedirects > this.maxVastRedirects && !n && console.error('Max allowed vast redirects has been exceeded')) : console.error('vastAdTagUri is undefined');
                                }
                            }
                        }
                    ]) && k(i.prototype, t), n && k(i, n), e;
                }();
                function T(e, i) {
                    if (null == e)
                        return {};
                    var t, n, r = function (e, i) {
                            if (null == e)
                                return {};
                            var t, n, r = {}, s = Object.keys(e);
                            for (n = 0; n < s.length; n++)
                                t = s[n], i.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        }(e, i);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++)
                            t = s[n], i.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
                    }
                    return r;
                }
                window.videoSlider = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n, i = e.mobile, t = void 0 === i || i, n = T(e, ['mobile']), s = new x(3), o = new r.a();
                    (t || 'mobile' !== o.getDevice().type) && s.getVastTagData(''.concat('https://vast.yomeno.xyz/', '?tcid=').concat(n.tcid), function (e) {
                        e && l(n.viewCounter || 1) && (e.VPAID ? v(e, n, h, a) : new w(e, n, h, a).init());
                    });
                };
            }
        ]);
    }())
}