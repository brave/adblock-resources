var _typeof, MG_Utils;
{
    const $___mock_3773b652659315ab = {};
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
    })($___mock_3773b652659315ab);
    const $___mock_0b0282fe397d8329 = {};
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
    })($___mock_0b0282fe397d8329);
    (function () {
        _typeof = $___var_54b33605f1614754;
        ({}.constructor.defineProperty(_typeof, 'name', {
            configurable: true,
            enumerable: false,
            value: '_typeof',
            writable: false
        }));
        function $___var_54b33605f1614754(e) {
            return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                return typeof e;
            } : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            })(e);
        }
        var $___var_31cacc70358bc108 = {
            browser: {
                hasTouchSupport: 'createTouch' in document,
                version: (navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
                androidversion: function () {
                    var e = navigator.userAgent.match(/\s*Android\s*([0-9]+)\.?([0-9]+)?\.?([0-9]+)?\s*/);
                    return e && e[1] && e[2] ? parseFloat(e[1] + '.' + e[2]) : !(!e || !e[1]) && parseFloat(e[1]);
                },
                isWebkit: -1 < navigator.userAgent.indexOf('AppleWebKit/'),
                isMobileSafari: /(ipad|iphone|ipod|android).*apple.*mobile.*safari/.test(navigator.userAgent.toLowerCase()),
                isAppleChrome: /crios/.test(navigator.userAgent.toLowerCase()),
                isAppleMobileDevice: /(ipad|iphone|ipod)/.test(navigator.userAgent.toLowerCase()),
                isAndroidMobileDevice: /android/.test(navigator.userAgent.toLowerCase()),
                isTansoDl: navigator.userAgent.toLowerCase().match(/TansoDL/i),
                isWindowsPhone: function () {
                    return !!(navigator.userAgent.toLowerCase().match(/Windows CE|IEMobile|Windows Phone OS/i) || 'XDomainRequest' in window);
                },
                highPixelDensityDisplay: 2 <= window.devicePixelRatio,
                iPhone4: 2 <= window.devicePixelRatio && this.isMobileSafari,
                currentOrientation: null,
                isBlackBerry: function () {
                    return !!navigator.userAgent.match(/BlackBerry/i);
                },
                isBB10: function () {
                    return !!navigator.userAgent.match(/BB10/i);
                },
                iOSversion: function () {
                    var e = window.navigator.userAgent, t = e.indexOf('OS ');
                    return (-1 < e.indexOf('iPhone') || -1 < e.indexOf('iPad')) && -1 < t ? window.Number(e.substr(t + 3, 3).replace('_', '.')) : 0;
                }
            },
            setCookie: function (e, t, n, o) {
                var a = new Date(), r = window.location.hostname;
                a.setTime(a.getTime() + 24 * o * 60 * 60 * 1000), a = e + '=' + t + '; ' + ('expires=' + a.toUTCString()), void 0 !== n && (a += '; path=' + n), 0 === r.indexOf('www.') ? r = r.replace('www.', '.') : 0 !== r.indexOf('.') && (r = '.' + r), a += ';domain=' + r, 'https:' === location.protocol && (a += ';secure'), document.cookie = a;
            },
            getCookie: function (e, t) {
                e = document.cookie.match('(^|;) ?' + e + '=([^;]*)(;|$)');
                return e ? t ? e[2] : decodeURI(e[2]) : null;
            },
            addClass: function (e, t) {
                var n = e && 'object' == _typeof(e.className) ? e.className.baseVal : e.className;
                this.hasClass(e, t) || ('object' == _typeof(e.className) ? e.className.baseVal = n += n ? ' ' + t : t : e.className = n += n ? ' ' + t : t);
            },
            addClassMultiple: function (e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    this.hasClass(e[n], t) || (e[n].className ? e[n].className += ' ' + t : e[n].className += t);
            },
            addEventHandler: function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent('on' + t, n) : e['on' + t] = n;
            },
            extendSimple: function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e;
            },
            extendDefaults: function (e, t, n) {
                var o, a = Object.prototype.hasOwnProperty;
                for (o in t)
                    a.call(t, o) && ('constructor' === o && e === window || (void 0 === t[o] ? delete e[o] : n && void 0 !== e[o] || (e[o] = t[o])));
                return e;
            },
            hasClass: function (e, t) {
                e = e && 'object' == _typeof(e.className) ? e.className.baseVal : e.className;
                return e && new RegExp('(\\s|^)' + t + '(\\s|$)').test(e);
            },
            removeClass: function (e, t) {
                var n = ' ' + (e && 'object' == _typeof(e.className) ? e.className.baseVal : e.className).replace(/[\t\r\n]/g, ' ') + ' ';
                if (this.hasClass(e, t)) {
                    for (; 0 <= n.indexOf(' ' + t + ' ');)
                        n = n.replace(' ' + t + ' ', ' ');
                    'object' == _typeof(e.className) ? e.className.baseVal = n.replace(/^\s+|\s+$/g, '') : e.className = n.replace(/^\s+|\s+$/g, '');
                }
            },
            removeClassMultiple: function (e, t) {
                for (var n = 0, o = e.length; n < o; n++) {
                    var a = ' ' + e[n].className.replace(/[\t\r\n]/g, ' ') + ' ';
                    if (this.hasClass(e[n], t)) {
                        for (; 0 <= a.indexOf(' ' + t + ' ');)
                            a = a.replace(' ' + t + ' ', ' ');
                        e[n].className = a.replace(/^\s+|\s+$/g, '');
                    }
                }
            },
            removeEventHandler: function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent('on' + t, n) : e['on' + t] = null;
            },
            children: function (e) {
                for (var t = e.childNodes, n = [], o = t.length; o--;)
                    1 == t[o].nodeType && n.unshift(t[o]);
                return n;
            },
            triggerEvent: function (e, t) {
                var n;
                document.createEvent ? ((n = document.createEvent('HTMLEvents')).initEvent(t, !0, !1), e.dispatchEvent(n)) : e.fireEvent('on' + t);
            },
            ajaxGet: function (e) {
                var t, n = '';
                for (t in e.data)
                    '' != n && (n += '&'), n += t + '=' + encodeURIComponent(e.data[t]);
                var o = new XMLHttpRequest();
                o.open('GET', e.url + '?' + n, !0), o.onreadystatechange = function () {
                    4 === this.readyState && (200 <= this.status && this.status < 400 ? e.success && 'function' == typeof e.success && e.success(JSON.parse(this.responseText)) : console.error('Ajax error occured.'));
                }, o.send();
            },
            ajaxGetData: function (e) {
                var t = '';
                if (void 0 !== e.data)
                    for (var n in e.data)
                        '' != t && (t += '&'), t += n + '=' + encodeURIComponent(e.data[n]);
                var o = e.url, a = new XMLHttpRequest();
                a.open('GET', o, !0), a.onreadystatechange = function () {
                    4 === this.readyState && (200 <= this.status && this.status < 400 ? e.success && 'function' == typeof e.success && e.success(this.responseText) : console.error('Ajax error occured.'));
                }, a.send();
            },
            appendString: function (e, t) {
                var n = document.createElement('div');
                for (n.innerHTML = t; n.firstChild;)
                    e.appendChild(n.firstChild);
            },
            nextElementSibling: function (e) {
                for (; (e = e.nextSibling) && 1 !== e.nodeType;);
                return e;
            },
            previousElementSibling: function (e) {
                for (; (e = e.previousSibling) && 1 !== e.nodeType;);
                return e;
            },
            closest: function (e, t) {
                var n;
                for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;);
                        return -1 < n;
                    }); null !== e;) {
                    if (null !== (n = e.parentElement) && n instanceof Element && n.matches(t))
                        return n;
                    e = n;
                }
                return null;
            },
            setText: function (e, t) {
                e.textContent ? e.textContent = t : e.innerText = t;
            },
            setData: function (e, t, n) {
                e.dataset ? (t = t.replace(/[-_]([a-z])/g, function (e) {
                    return e[1].toUpperCase();
                }), e.dataset[t] = n) : e.setAttribute('data-' + t, n);
            },
            getData: function (e, t) {
                return e.dataset ? (t = t.replace(/[-_]([a-z])/g, function (e) {
                    return e[1].toUpperCase();
                }), e.dataset[t]) : e.getAttribute('data-' + t);
            },
            domReady: function (e) {
                function n() {
                    document.addEventListener ? (document.removeEventListener('DOMContentLoaded', t), window.removeEventListener('load', t)) : (document.detachEvent('onreadystatechange', t), window.detachEvent('onload', t));
                }
                var o = !1, t = function () {
                        o || !document.addEventListener && 'load' !== event.type && 'complete' !== document.readyState || (o = !0, n(), e());
                    };
                if ('complete' === document.readyState)
                    e();
                else if (document.addEventListener)
                    document.addEventListener('DOMContentLoaded', t), window.addEventListener('load', t);
                else {
                    document.attachEvent('onreadystatechange', t), window.attachEvent('onload', t);
                    var a = !1;
                    try {
                        a = null == window.frameElement && document.documentElement;
                    } catch (e) {
                    }
                    a && a.doScroll && !function t() {
                        if (!o) {
                            try {
                                a.doScroll('left');
                            } catch (e) {
                                return setTimeout(t, 50);
                            }
                            o = !0, n(), e();
                        }
                    }();
                }
            },
            lastChild: function (e) {
                if (!e.children.length)
                    return null;
                if (e.lastElementChild)
                    return e.lastElementChild;
                for (var t = e.children.length - 1; 0 <= t; --t) {
                    var n = e.children[t];
                    if (1 === n.nodeType)
                        return n;
                }
            },
            offset: function (e) {
                var t = e.getBoundingClientRect(), n = document.body, o = document.documentElement, a = window.pageYOffset || o.scrollTop || n.scrollTop, r = window.pageXOffset || o.scrollLeft || n.scrollLeft, e = o.clientTop || n.clientTop || 0, n = o.clientLeft || n.clientLeft || 0, e = t.top + a - e, n = t.left + r - n;
                return {
                    left: Math.round(n),
                    top: Math.round(e)
                };
            },
            empty: function (e) {
                for (; e.firstChild;)
                    e.removeChild(e.firstChild);
            },
            preventDefault: function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            },
            toggleClass: function (e, t) {
                if (e.classList)
                    e.classList.toggle(t);
                else {
                    for (var n = e.className.split(' '), o = -1, a = n.length; a--;)
                        n[a] === t && (o = a);
                    0 <= o ? n.splice(o, 1) : n.push(t), e.className = n.join(' ');
                }
            },
            debounce: function (e, t, n) {
                function o() {
                    a = null;
                }
                var a = null;
                return function () {
                    n && n.apply(this, arguments), a || (e.apply(this, arguments), a = setTimeout(o, t));
                };
            },
            areCookiesEnabled: function () {
                var e = !!navigator.cookieEnabled;
                return void 0 !== navigator.cookieEnabled || e || (document.cookie = 'testcookie', e = -1 != document.cookie.indexOf('testcookie')), e;
            },
            isLocalStorageEnabled: function () {
                if ('undefined' == typeof localStorage)
                    return !1;
                try {
                    localStorage.removeItem('LsAccessSuccess'), localStorage.setItem('LsAccessSuccess', 'localStorageEnabledOk'), localStorage.removeItem('LsAccessSuccess');
                } catch (e) {
                    return !1;
                }
                var e;
                return !!MG_Utils.areCookiesEnabled() && (-1 == document.cookie.indexOf('local_storage') && ((e = new Date()).setTime(e.getTime() + 31536000000), e = ' expires = ' + e.toGMTString() + ';', document.cookie = 'local_storage = 1;' + e + ' path=/;'), !0);
            },
            storage: {
                hasLocalStorage: function () {
                    const $___old_d8536b35e801044d = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_d8536b35e801044d)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_3773b652659315ab.localStorage));
                        return function () {
                            try {
                                localStorage.enableStorage = 1, localStorage.removeItem('enableStorage');
                            } catch (e) {
                                return !1;
                            }
                            return !0;
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_d8536b35e801044d)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_d8536b35e801044d));
                    }
                }(),
                defaultExpiry: 1,
                saveWithExpiry: function (e, t, n) {
                    this.hasLocalStorage && ((n = t.expires && !n ? t.expires : n) || (n = new Date()).setDate(n.getDate() + this.defaultExpiry), n = n instanceof Date ? n.getTime() : parseInt(n), this.saveItem(e, {
                        val: t,
                        expires: n
                    }));
                },
                getItem: function (t) {
                    if (this.hasLocalStorage) {
                        var e;
                        try {
                            e = JSON.parse(localStorage[t]);
                        } catch (e) {
                            return localStorage[t];
                        }
                        return parseInt(e.expires) < new Date().getTime() ? (this.deleteItem(t), null) : e.val || e;
                    }
                },
                saveItem: function (e, t) {
                    this.hasLocalStorage && (t = JSON.stringify('object' === _typeof(t) ? t : { val: t }), localStorage.setItem(e, t));
                },
                deleteItem: function (e) {
                    this.hasLocalStorage && localStorage.removeItem(e);
                },
                saveExpiry: function (e, t, n) {
                    if ('undefined' == typeof Storage)
                        return !1;
                    n = {
                        value: JSON.stringify(t),
                        timestamp: new Date().getTime() + n
                    };
                    return localStorage.setItem(e, JSON.stringify(n)), t;
                },
                getExpiry: function (e) {
                    if ('undefined' == typeof Storage)
                        return !1;
                    e = JSON.parse(localStorage.getItem(e));
                    return !!e && (new Date().getTime() < e.timestamp && JSON.parse(e.value));
                }
            },
            ajaxCall: function (n) {
                const $___old_c393bb9989eaefee = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_90e8837b57843443 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_c393bb9989eaefee)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_0b0282fe397d8329.XMLHttpRequest));
                    if ($___old_90e8837b57843443)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_0b0282fe397d8329.XMLHttpRequest));
                    return function () {
                        if (null == n || '' == n.url || '' == n.data || '' == n.type)
                            return console.log('ajaxPost: Parameters can\'t be empty'), !1;
                        var o;
                        o = new (1 == n.crossDomain && 'undefined' != typeof XDomainRequest ? XDomainRequest : XMLHttpRequest)();
                        var e, a = new CustomEvent('ajaxSuccess'), r = new CustomEvent('ajaxFail'), t = n.type ? n.type.toUpperCase() : 'GET', s = '', c = n.contentType || 'application/x-www-form-urlencoded; charset=UTF-8';
                        for (e in n.data)
                            '' != s && (s += '&'), s += e + '=' + encodeURIComponent(n.data[e]);
                        if ('GET' === t && (0 == n.cache ? n.url += '&timestamp=' + Date.now() : n.url = n.url + '?' + s), o.open(t, n.url, !0), '' != n.dataType && 'string' == typeof n.dataType ? o.responseType = n.dataType : o.responseType = 'json', o instanceof XMLHttpRequest && void 0 === n.requestType && (o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), o.setRequestHeader('Content-Type', c)), '' != n.requestType && 'string' == typeof n.requestType && (s = JSON.stringify(n.data), o.setRequestHeader('Content-Type', n.requestType)), n.headers && (Object.keys || (Object.keys = function (e) {
                                var t, n = [];
                                for (t in e)
                                    e.hasOwnProperty(t) && n.push(t);
                                return n;
                            }), Object.keys(n.headers).forEach(function (e) {
                                o.setRequestHeader(e, n.headers[e]);
                            })), 'false' == n.cache && 'POST' == t && o.setRequestHeader('cache-control', 'no-cache'), n.xhrFields)
                            for (i in n.xhrFields)
                                o[i] = n.xhrFields[i];
                        return 'function' == typeof n.beforeSend && !1 === n.beforeSend() ? o.abort() : (o.onreadystatechange = function () {
                            const $___old_fce9a9fc4f03b37e = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                            try {
                                if ($___old_fce9a9fc4f03b37e)
                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_0b0282fe397d8329.XMLHttpRequest));
                                return function () {
                                    var t = {};
                                    if (4 == o.readyState)
                                        if (200 <= o.status && o.status < 400) {
                                            try {
                                                t = JSON.parse(o.responseText);
                                            } catch (e) {
                                                t = o.response;
                                            }
                                            'function' == typeof n.success && (o instanceof XMLHttpRequest ? n.success(t) : o.onload(function () {
                                                n.success(t);
                                            })), o.dispatchEvent(a);
                                        } else
                                            o.dispatchEvent(r), t = { error: 'Error getting data from AJAX call' };
                                    if (null != t && void 0 !== t.error)
                                        return console.log('ajaxPost: ' + t.error), !1;
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_fce9a9fc4f03b37e)
                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_fce9a9fc4f03b37e));
                            }
                        }, o.send(s), o.done = function (e) {
                            'function' == typeof e && (o instanceof XMLHttpRequest ? MG_Utils.addEventHandler(o, 'ajaxSuccess', e) : o.onload = e());
                        }, o.fail = function (e) {
                            'function' == typeof e && (o instanceof XMLHttpRequest ? MG_Utils.addEventHandler(o, 'ajaxFail', e) : o.onerror = e());
                        }, o.always = function (e) {
                            'function' == typeof e && (o instanceof XMLHttpRequest ? (MG_Utils.addEventHandler(o, 'ajaxSuccess', e), MG_Utils.addEventHandler(o, 'ajaxFail', e)) : (o.onload = e(), o.onerror = e()));
                        }, o);
                    }.apply(this, arguments);
                } finally {
                    if ($___old_c393bb9989eaefee)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_c393bb9989eaefee));
                    if ($___old_90e8837b57843443)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_90e8837b57843443));
                }
            },
            getEventTarget: function (e) {
                return (e = e || window.event).target || e.srcElement;
            }
        };
        MG_Utils = $___var_31cacc70358bc108;
        !function () {
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent('CustomEvent');
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            'function' != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e);
        }();
    }())
}