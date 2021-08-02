{
    const $___mock_d2252eb400e70eb8 = {};
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
    })($___mock_d2252eb400e70eb8);
    const $___mock_a64013dfdee6051c = {};
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
    })($___mock_a64013dfdee6051c);
    (function () {
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to QB'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var data = {};
                if ('')
                    data['value'] = '';
                if ('')
                    data['currency'] = '';
                if ('')
                    data['content_name'] = '';
                if ('')
                    data['content_category'] = '';
                if ('')
                    data['content_ids'] = '' ? ''.split(',') : '';
                if ('')
                    data['content_type'] = '';
                if ('')
                    data['num_items'] = '';
                if ('')
                    data['search_string'] = '';
                if ('')
                    data['status'] = '';
                var eventTrackingPixelId = '1827482914219447';
                var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_quickbooks' : 'CustomEvent';
                var trackString = 'CustomEvent' === 'CustomEvent' ? eventTrackingPixelId ? 'trackSingleCustom' : 'trackCustom' : eventTrackingPixelId ? 'trackSingle' : 'track';
                var makeRequest = function () {
                    if (eventTrackingPixelId)
                        fbq(trackString, eventTrackingPixelId, eventType, data);
                    else
                        fbq(trackString, eventType, data);
                };
                if (true)
                    var interval = setInterval(function () {
                        if (window.fbq) {
                            makeRequest();
                            clearInterval(interval);
                        }
                    }, 100);
                else
                    makeRequest();
            });
        }, 2762253, [3309959], 585674, [520782]);
        Bootstrapper.bindDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            try {
                var nonDataLinks = document.body.querySelectorAll('[href]:not([data-wa-link])');
                for (var i = 0; i < nonDataLinks.length; i++)
                    nonDataLinks[i].setAttribute('data-wa-link', 'custom linkTrack');
            } catch (Err) {
            }
        }, 2852260, 597525);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', 'li.accountantssignin a', function () {
                Bootstrapper.ensEvent.trigger('US - SBG - QBOA - Accountant Sign In Click', this);
            }, true);
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to ProConnect'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var data = {};
                if ('')
                    data['value'] = '';
                if ('')
                    data['currency'] = '';
                if ('')
                    data['content_name'] = '';
                if ('')
                    data['content_category'] = '';
                if ('')
                    data['content_ids'] = '' ? ''.split(',') : '';
                if ('')
                    data['content_type'] = '';
                if ('')
                    data['num_items'] = '';
                if ('')
                    data['search_string'] = '';
                if ('')
                    data['status'] = '';
                var eventTrackingPixelId = '1827482914219447';
                var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_proconnect' : 'CustomEvent';
                var trackString = 'CustomEvent' === 'CustomEvent' ? eventTrackingPixelId ? 'trackSingleCustom' : 'trackCustom' : eventTrackingPixelId ? 'trackSingle' : 'track';
                var makeRequest = function () {
                    if (eventTrackingPixelId)
                        fbq(trackString, eventTrackingPixelId, eventType, data);
                    else
                        fbq(trackString, eventType, data);
                };
                if (true)
                    var interval = setInterval(function () {
                        if (window.fbq) {
                            makeRequest();
                            clearInterval(interval);
                        }
                    }, 100);
                else
                    makeRequest();
            });
        }, 2762243, [3309959], 585677, [520782]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            try {
                var allowActivityMap = 'true';
                var publishPath = Bootstrapper.ensightenOptions.publishPath, omitPaths = [
                        'sbg',
                        'sbg-dev',
                        'us_fmsp_dev',
                        'us_fmsp_prod'
                    ];
                for (var i = 0, max = omitPaths.length; i < max; i++) {
                    var patt = new RegExp('^' + omitPaths[i], 'i');
                    allowActivityMap = patt.test(publishPath) ? false : true;
                    if (allowActivityMap === false)
                        break;
                }
                if (allowActivityMap)
                    window.AppMeasurement_Module_ActivityMap = function (f) {
                        function g(a, d) {
                            var b, c, n;
                            if (a && d && (b = e.c[d] || (e.c[d] = d.split(','))))
                                for (n = 0; n < b.length && (c = b[n++]);)
                                    if (-1 < a.indexOf(c))
                                        return null;
                            p = 1;
                            return a;
                        }
                        function q(a, d, b, c, e) {
                            var g, h;
                            if (a.dataset && (h = a.dataset[d]))
                                g = h;
                            else if (a.getAttribute)
                                if (h = a.getAttribute('data-' + b))
                                    g = h;
                                else if (h = a.getAttribute(b))
                                    g = h;
                            if (!g && f.useForcedLinkTracking && e && (g = '', d = a.onclick ? '' + a.onclick : '')) {
                                b = d.indexOf(c);
                                var l, k;
                                if (0 <= b) {
                                    for (b += 10; b < d.length && 0 <= '= \t\r\n'.indexOf(d.charAt(b));)
                                        b++;
                                    if (b < d.length) {
                                        h = b;
                                        for (l = k = 0; h < d.length && (';' != d.charAt(h) || l);)
                                            l ? d.charAt(h) != l || k ? k = '\\' == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h), '"' != l && '\'' != l && (l = 0)), h++;
                                        if (d = d.substring(b, h))
                                            a.e = new Function('s', 'var e;try{s.w.' + c + '=' + d + '}catch(e){}'), a.e(f);
                                    }
                                }
                            }
                            return g || e && f.w[c];
                        }
                        function r(a, d, b) {
                            var c;
                            return (c = e[d](a, b)) && (p ? (p = 0, c) : g(k(c), e[d + 'Exclusions']));
                        }
                        function s(a, d, b) {
                            var c;
                            if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a || b.t || b.s || !a.getAttribute || ((c = a.getAttribute('alt')) ? b.a = c : (c = a.getAttribute('title')) ? b.t = c : 'IMG' == ('' + a.nodeName).toUpperCase() && (c = a.getAttribute('src') || a.src) && (b.s = c)), (c = a.childNodes) && c.length))
                                for (a = 0; a < c.length; a++)
                                    s(c[a], d, b);
                        }
                        function k(a) {
                            if (null == a || void 0 == a)
                                return a;
                            try {
                                return a.replace(RegExp('^[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]+', 'mg'), '').replace(RegExp('[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]+$', 'mg'), '').replace(RegExp('[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]{1,}', 'mg'), ' ').substring(0, 254);
                            } catch (d) {
                            }
                        }
                        var e = this;
                        e.s = f;
                        var m = window;
                        m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
                        e._il = m.s_c_il;
                        e._in = m.s_c_in;
                        e._il[e._in] = e;
                        m.s_c_in++;
                        e._c = 's_m';
                        e.c = {};
                        var p = 0, t = {
                                SCRIPT: 1,
                                STYLE: 1,
                                LINK: 1,
                                CANVAS: 1
                            };
                        e._g = function () {
                            var a, d, b, c = f.contextData, e = f.linkObject;
                            (a = f.pageName || f.pageURL) && (d = r(e, 'link', f.linkName)) && (b = r(e, 'region')) && (c['a.activitymap.page'] = a.substring(0, 255), c['a.activitymap.link'] = 128 < d.length ? d.substring(0, 128) : d, c['a.activitymap.region'] = 127 < b.length ? b.substring(0, 127) : b, c['a.activitymap.pageIDType'] = f.pageName ? 1 : 0);
                        };
                        e.link = function (a, d) {
                            var b;
                            if (d)
                                b = g(k(d), e.linkExclusions);
                            else if ((b = a) && !(b = q(a, 'sObjectId', 's-object-id', 's_objectID', 1))) {
                                var c, f;
                                (f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [], b = {
                                    a: void 0,
                                    t: void 0,
                                    s: void 0
                                }), (f = g(k(c.join('')))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : '') || ('INPUT' == c || 'SUBMIT' == c && a.value ? f = g(k(a.value)) : 'IMAGE' == c && a.src && (f = g(k(a.src)))));
                                b = f;
                            }
                            return b;
                        };
                        e.region = function (a) {
                            for (var d, b = e.regionIDAttribute || 'id'; a && (a = a.parentNode);) {
                                if (d = q(a, b, b, b))
                                    return d;
                                if ('BODY' == a.nodeName)
                                    return 'BODY';
                            }
                        };
                    };
            } catch (err) {
            }
            window.AppMeasurement_Module_Integrate = function (l) {
                var c = this;
                c.s = l;
                var e = window;
                e.s_c_in || (e.s_c_il = [], e.s_c_in = 0);
                c._il = e.s_c_il;
                c._in = e.s_c_in;
                c._il[c._in] = c;
                e.s_c_in++;
                c._c = 's_m';
                c.list = [];
                c.add = function (d, b) {
                    var a;
                    b || (b = 's_Integrate_' + d);
                    e[b] || (e[b] = {});
                    a = c[d] = e[b];
                    a.a = d;
                    a.e = c;
                    a._c = 0;
                    a._d = 0;
                    void 0 == a.disable && (a.disable = 0);
                    a.get = function (b, d) {
                        var f = document, h = f.getElementsByTagName('HEAD'), k;
                        if (!a.disable && (d || (v = 's_' + c._in + '_Integrate_' + a.a + '_get_' + a._c), a._c++, a.VAR = v, a.CALLBACK = 's_c_il[' + c._in + '].' + a.a + '.callback', a.delay(), h = h && 0 < h.length ? h[0] : f.body))
                            try {
                                k = f.createElement('SCRIPT'), k.type = 'text/javascript', k.setAttribute('async', 'async'), k.src = c.c(a, b), 0 > b.indexOf('[CALLBACK]') && (k.onload = k.onreadystatechange = function () {
                                    a.callback(e[v]);
                                }), h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k);
                            } catch (l) {
                            }
                    };
                    a.callback = function (b) {
                        var c;
                        if (b)
                            for (c in b)
                                Object.prototype[c] || (a[c] = b[c]);
                        a.ready();
                    };
                    a.beacon = function (b) {
                        var d = 's_i_' + c._in + '_Integrate_' + a.a + '_' + a._c;
                        a.disable || (a._c++, d = e[d] = new Image(), d.src = c.c(a, b));
                    };
                    a.script = function (b) {
                        a.get(b, 1);
                    };
                    a.delay = function () {
                        a._d++;
                    };
                    a.ready = function () {
                        a._d--;
                        a.disable || l.delayReady();
                    };
                    c.list.push(d);
                };
                c._g = function (d) {
                    var b, a = (d ? 'use' : 'set') + 'Vars';
                    for (d = 0; d < c.list.length; d++)
                        if ((b = c[c.list[d]]) && !b.disable && b[a])
                            try {
                                b[a](l, b);
                            } catch (e) {
                            }
                };
                c._t = function () {
                    c._g(1);
                };
                c._d = function () {
                    var d, b;
                    for (d = 0; d < c.list.length; d++)
                        if ((b = c[c.list[d]]) && !b.disable && 0 < b._d)
                            return 1;
                    return 0;
                };
                c.c = function (c, b) {
                    var a, e, g, f;
                    'http' != b.toLowerCase().substring(0, 4) && (b = 'http://' + b);
                    l.ssl && (b = l.replace(b, 'http:', 'https:'));
                    c.RAND = Math.floor(10000000000000 * Math.random());
                    for (a = 0; 0 <= a;)
                        a = b.indexOf('[', a), 0 <= a && (e = b.indexOf(']', a), e > a && (g = b.substring(a + 1, e), 2 < g.length && 's.' == g.substring(0, 2) ? (f = l[g.substring(2)]) || (f = '') : (f = '' + c[g], f != c[g] && parseFloat(f) != c[g] && (g = 0)), g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)), a = e));
                    return b;
                };
            };
            window.AppMeasurement = function (r) {
                var a = this;
                a.version = '2.22.0';
                var h = window;
                h.s_c_in || (h.s_c_il = [], h.s_c_in = 0);
                a._il = h.s_c_il;
                a._in = h.s_c_in;
                a._il[a._in] = a;
                h.s_c_in++;
                a._c = 's_c';
                var q = h.AppMeasurement.ic;
                q || (q = null);
                var p = h, m, s;
                try {
                    for (m = p.parent, s = p.location; m && m.location && s && '' + m.location !== '' + s && p.location && '' + m.location !== '' + p.location && m.location.host === s.host;)
                        p = m, m = p.parent;
                } catch (u) {
                }
                a.C = function (a) {
                    try {
                        console.log(a);
                    } catch (b) {
                    }
                };
                a.Ra = function (a) {
                    return '' + parseInt(a) == '' + a;
                };
                a.replace = function (a, b, d) {
                    return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
                };
                a.escape = function (c) {
                    var b, d;
                    if (!c)
                        return c;
                    c = encodeURIComponent(c);
                    for (b = 0; 7 > b; b++)
                        d = '+~!*()\''.substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, '%' + d.charCodeAt(0).toString(16).toUpperCase()));
                    return c;
                };
                a.unescape = function (c) {
                    if (!c)
                        return c;
                    c = 0 <= c.indexOf('+') ? a.replace(c, '+', ' ') : c;
                    try {
                        return decodeURIComponent(c);
                    } catch (b) {
                    }
                    return unescape(c);
                };
                a.Nb = function () {
                    var c = h.location.hostname, b = a.fpCookieDomainPeriods, d;
                    b || (b = a.cookieDomainPeriods);
                    if (c && !a.Ka && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf('.'), 0 <= d)) {
                        for (; 0 <= d && 1 < b;)
                            d = c.lastIndexOf('.', d - 1), b--;
                        a.Ka = 0 < d ? c.substring(d) : c;
                    }
                    return a.Ka;
                };
                a.c_r = a.cookieRead = function (c) {
                    c = a.escape(c);
                    var b = ' ' + a.d.cookie, d = b.indexOf(' ' + c + '='), f = 0 > d ? d : b.indexOf(';', d);
                    c = 0 > d ? '' : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
                    return '[[B]]' != c ? c : '';
                };
                a.c_w = a.cookieWrite = function (c, b, d) {
                    var f = a.Nb(), e = a.cookieLifetime, g;
                    b = '' + b;
                    e = e ? ('' + e).toUpperCase() : '';
                    d && 'SESSION' != e && 'NONE' != e && ((g = '' != b ? parseInt(e ? e : 0) : -60) ? (d = new Date(), d.setTime(d.getTime() + 1000 * g)) : 1 === d && (d = new Date(), g = d.getYear(), d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
                    return c && 'NONE' != e ? (a.d.cookie = a.escape(c) + '=' + a.escape('' != b ? b : '[[B]]') + '; path=/;' + (d && 'SESSION' != e ? ' expires=' + d.toUTCString() + ';' : '') + (f ? ' domain=' + f + ';' : '') + (a.writeSecureCookies ? ' secure;' : ''), a.cookieRead(c) == b) : 0;
                };
                a.Kb = function () {
                    var c = a.Util.getIeVersion();
                    'number' === typeof c && 10 > c && (a.unsupportedBrowser = !0, a.xb(a, function () {
                    }));
                };
                a.ya = function () {
                    var a = navigator.userAgent;
                    return 'Microsoft Internet Explorer' === navigator.appName || 0 <= a.indexOf('MSIE ') || 0 <= a.indexOf('Trident/') && 0 <= a.indexOf('Windows NT 6') ? !0 : !1;
                };
                a.xb = function (a, b) {
                    for (var d in a)
                        Object.prototype.hasOwnProperty.call(a, d) && 'function' === typeof a[d] && (a[d] = b);
                };
                a.K = [];
                a.fa = function (c, b, d) {
                    if (a.La)
                        return 0;
                    a.maxDelay || (a.maxDelay = 250);
                    var f = 0, e = new Date().getTime() + a.maxDelay, g = a.d.visibilityState, k = [
                            'webkitvisibilitychange',
                            'visibilitychange'
                        ];
                    g || (g = a.d.webkitVisibilityState);
                    if (g && 'prerender' == g) {
                        if (!a.ga)
                            for (a.ga = 1, d = 0; d < k.length; d++)
                                a.d.addEventListener(k[d], function () {
                                    var c = a.d.visibilityState;
                                    c || (c = a.d.webkitVisibilityState);
                                    'visible' == c && (a.ga = 0, a.delayReady());
                                });
                        f = 1;
                        e = 0;
                    } else
                        d || a.u('_d') && (f = 1);
                    f && (a.K.push({
                        m: c,
                        a: b,
                        t: e
                    }), a.ga || setTimeout(a.delayReady, a.maxDelay));
                    return f;
                };
                a.delayReady = function () {
                    var c = new Date().getTime(), b = 0, d;
                    for (a.u('_d') ? b = 1 : a.Aa(); 0 < a.K.length;) {
                        d = a.K.shift();
                        if (b && !d.t && d.t > c) {
                            a.K.unshift(d);
                            setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                            break;
                        }
                        a.La = 1;
                        a[d.m].apply(a, d.a);
                        a.La = 0;
                    }
                };
                a.setAccount = a.sa = function (c) {
                    var b, d;
                    if (!a.fa('setAccount', arguments))
                        if (a.account = c, a.allAccounts)
                            for (b = a.allAccounts.concat(c.split(',')), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++)
                                0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
                        else
                            a.allAccounts = c.split(',');
                };
                a.foreachVar = function (c, b) {
                    var d, f, e, g, k = '';
                    e = f = '';
                    if (a.lightProfileID)
                        d = a.O, (k = a.lightTrackVars) && (k = ',' + k + ',' + a.la.join(',') + ',');
                    else {
                        d = a.g;
                        if (a.pe || a.linkType)
                            k = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (k = a[e].ec, f = a[e].cc));
                        k && (k = ',' + k + ',' + a.F.join(',') + ',');
                        f && k && (k += ',events,');
                    }
                    b && (b = ',' + b + ',');
                    for (f = 0; f < d.length; f++)
                        e = d[f], (g = a[e]) && (!k || 0 <= k.indexOf(',' + e + ',')) && (!b || 0 <= b.indexOf(',' + e + ',')) && c(e, g);
                };
                a.o = function (c, b, d, f, e) {
                    var g = '', k, l, h, n, m = 0;
                    'contextData' == c && (c = 'c');
                    if (b) {
                        for (k in b)
                            if (!(Object.prototype[k] || e && k.substring(0, e.length) != e) && b[k] && (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + k + ','))) {
                                h = !1;
                                if (m)
                                    for (l = 0; l < m.length; l++)
                                        if (k.substring(0, m[l].length) == m[l]) {
                                            h = !0;
                                            break;
                                        }
                                if (!h && ('' == g && (g += '&' + c + '.'), l = b[k], e && (k = k.substring(e.length)), 0 < k.length))
                                    if (h = k.indexOf('.'), 0 < h)
                                        l = k.substring(0, h), h = (e ? e : '') + l + '.', m || (m = []), m.push(h), g += a.o(l, b, d, f, h);
                                    else if ('boolean' == typeof l && (l = l ? 'true' : 'false'), l) {
                                        if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                                            switch (h = k.substring(0, 4), n = k.substring(4), k) {
                                            case 'transactionID':
                                                k = 'xact';
                                                break;
                                            case 'channel':
                                                k = 'ch';
                                                break;
                                            case 'campaign':
                                                k = 'v0';
                                                break;
                                            default:
                                                a.Ra(n) && ('prop' == h ? k = 'c' + n : 'eVar' == h ? k = 'v' + n : 'list' == h ? k = 'l' + n : 'hier' == h && (k = 'h' + n, l = l.substring(0, 255)));
                                            }
                                        g += '&' + a.escape(k) + '=' + a.escape(l);
                                    }
                            }
                        '' != g && (g += '&.' + c);
                    }
                    return g;
                };
                a.usePostbacks = 0;
                a.Qb = function () {
                    var c = '', b, d, f, e, g, k, l, h, n = '', m = '', p = e = '', r = a.T();
                    if (a.lightProfileID)
                        b = a.O, (n = a.lightTrackVars) && (n = ',' + n + ',' + a.la.join(',') + ',');
                    else {
                        b = a.g;
                        if (a.pe || a.linkType)
                            n = a.linkTrackVars, m = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].ec, m = a[e].cc));
                        n && (n = ',' + n + ',' + a.F.join(',') + ',');
                        m && (m = ',' + m + ',', n && (n += ',events,'));
                        a.events2 && (p += ('' != p ? ',' : '') + a.events2);
                    }
                    if (r && r.getCustomerIDs) {
                        e = q;
                        if (g = r.getCustomerIDs())
                            for (d in g)
                                Object.prototype[d] || (f = g[d], 'object' == typeof f && (e || (e = {}), f.id && (e[d + '.id'] = f.id), f.authState && (e[d + '.as'] = f.authState)));
                        e && (c += a.o('cid', e));
                    }
                    a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.o('d', a.AudienceManagement.getEventCallConfigParams()));
                    for (d = 0; d < b.length; d++) {
                        e = b[d];
                        g = a[e];
                        f = e.substring(0, 4);
                        k = e.substring(4);
                        g || ('events' == e && p ? (g = p, p = '') : 'marketingCloudOrgID' == e && r && a.V('ECID') && (g = r.marketingCloudOrgID));
                        if (g && (!n || 0 <= n.indexOf(',' + e + ','))) {
                            switch (e) {
                            case 'customerPerspective':
                                e = 'cp';
                                break;
                            case 'marketingCloudOrgID':
                                e = 'mcorgid';
                                break;
                            case 'supplementalDataID':
                                e = 'sdid';
                                break;
                            case 'timestamp':
                                e = 'ts';
                                break;
                            case 'dynamicVariablePrefix':
                                e = 'D';
                                break;
                            case 'visitorID':
                                e = 'vid';
                                break;
                            case 'marketingCloudVisitorID':
                                e = 'mid';
                                break;
                            case 'analyticsVisitorID':
                                e = 'aid';
                                break;
                            case 'audienceManagerLocationHint':
                                e = 'aamlh';
                                break;
                            case 'audienceManagerBlob':
                                e = 'aamb';
                                break;
                            case 'authState':
                                e = 'as';
                                break;
                            case 'pageURL':
                                e = 'g';
                                255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
                                break;
                            case 'pageURLRest':
                                e = '-g';
                                break;
                            case 'referrer':
                                e = 'r';
                                break;
                            case 'vmk':
                            case 'visitorMigrationKey':
                                e = 'vmt';
                                break;
                            case 'visitorMigrationServer':
                                e = 'vmf';
                                a.ssl && a.visitorMigrationServerSecure && (g = '');
                                break;
                            case 'visitorMigrationServerSecure':
                                e = 'vmf';
                                !a.ssl && a.visitorMigrationServer && (g = '');
                                break;
                            case 'charSet':
                                e = 'ce';
                                break;
                            case 'visitorNamespace':
                                e = 'ns';
                                break;
                            case 'cookieDomainPeriods':
                                e = 'cdp';
                                break;
                            case 'cookieLifetime':
                                e = 'cl';
                                break;
                            case 'variableProvider':
                                e = 'vvp';
                                break;
                            case 'currencyCode':
                                e = 'cc';
                                break;
                            case 'channel':
                                e = 'ch';
                                break;
                            case 'transactionID':
                                e = 'xact';
                                break;
                            case 'campaign':
                                e = 'v0';
                                break;
                            case 'latitude':
                                e = 'lat';
                                break;
                            case 'longitude':
                                e = 'lon';
                                break;
                            case 'resolution':
                                e = 's';
                                break;
                            case 'colorDepth':
                                e = 'c';
                                break;
                            case 'javascriptVersion':
                                e = 'j';
                                break;
                            case 'javaEnabled':
                                e = 'v';
                                break;
                            case 'cookiesEnabled':
                                e = 'k';
                                break;
                            case 'browserWidth':
                                e = 'bw';
                                break;
                            case 'browserHeight':
                                e = 'bh';
                                break;
                            case 'connectionType':
                                e = 'ct';
                                break;
                            case 'homepage':
                                e = 'hp';
                                break;
                            case 'events':
                                p && (g += ('' != g ? ',' : '') + p);
                                if (m)
                                    for (k = g.split(','), g = '', f = 0; f < k.length; f++)
                                        l = k[f], h = l.indexOf('='), 0 <= h && (l = l.substring(0, h)), h = l.indexOf(':'), 0 <= h && (l = l.substring(0, h)), 0 <= m.indexOf(',' + l + ',') && (g += (g ? ',' : '') + k[f]);
                                break;
                            case 'events2':
                                g = '';
                                break;
                            case 'contextData':
                                c += a.o('c', a[e], n, e);
                                g = '';
                                break;
                            case 'lightProfileID':
                                e = 'mtp';
                                break;
                            case 'lightStoreForSeconds':
                                e = 'mtss';
                                a.lightProfileID || (g = '');
                                break;
                            case 'lightIncrementBy':
                                e = 'mti';
                                a.lightProfileID || (g = '');
                                break;
                            case 'retrieveLightProfiles':
                                e = 'mtsr';
                                break;
                            case 'deleteLightProfiles':
                                e = 'mtsd';
                                break;
                            case 'retrieveLightData':
                                a.retrieveLightProfiles && (c += a.o('mts', a[e], n, e));
                                g = '';
                                break;
                            default:
                                a.Ra(k) && ('prop' == f ? e = 'c' + k : 'eVar' == f ? e = 'v' + k : 'list' == f ? e = 'l' + k : 'hier' == f && (e = 'h' + k, g = g.substring(0, 255)));
                            }
                            g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                        }
                        'pev3' == e && a.e && (c += a.e);
                    }
                    a.ka && (c += '&lrt=' + a.ka, a.ka = null);
                    return c;
                };
                a.B = function (a) {
                    var b = a.tagName;
                    if ('undefined' != '' + a.lc || 'undefined' != '' + a.Zb && 'HTML' != ('' + a.Zb).toUpperCase())
                        return '';
                    b = b && b.toUpperCase ? b.toUpperCase() : '';
                    'SHAPE' == b && (b = '');
                    b && (('INPUT' == b || 'BUTTON' == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = 'A'));
                    return b;
                };
                a.Na = function (a) {
                    var b = h.location, d = a.href ? a.href : '', f, e, g;
                    f = d.indexOf(':');
                    e = d.indexOf('?');
                    g = d.indexOf('/');
                    d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : '', f = b.pathname.lastIndexOf('/'), d = (e ? e + '//' : '') + (a.host ? a.host : b.host ? b.host : '') + ('/' != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + '/' : '') + d);
                    return d;
                };
                a.L = function (c) {
                    var b = a.B(c), d, f, e = '', g = 0;
                    return b && (d = c.protocol, f = c.onclick, !c.href || 'A' != b && 'AREA' != b || f && d && !(0 > d.toLowerCase().indexOf('javascript')) ? f ? (e = a.replace(a.replace(a.replace(a.replace('' + f, '\r', ''), '\n', ''), '\t', ''), ' ', ''), g = 2) : 'INPUT' == b || 'SUBMIT' == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : 'IMAGE' == b && c.src && (e = c.src) : e = a.Na(c), e) ? {
                        id: e.substring(0, 100),
                        type: g
                    } : 0;
                };
                a.jc = function (c) {
                    for (var b = a.B(c), d = a.L(c); c && !d && 'BODY' != b;)
                        if (c = c.parentElement ? c.parentElement : c.parentNode)
                            b = a.B(c), d = a.L(c);
                    d && 'BODY' != b || (c = 0);
                    c && (b = c.onclick ? '' + c.onclick : '', 0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) && (c = 0);
                    return c;
                };
                a.Yb = function () {
                    var c, b, d = a.linkObject, f = a.linkType, e = a.linkURL, g, k;
                    a.ma = 1;
                    d || (a.ma = 0, d = a.clickObject);
                    if (d) {
                        c = a.B(d);
                        for (b = a.L(d); d && !b && 'BODY' != c;)
                            if (d = d.parentElement ? d.parentElement : d.parentNode)
                                c = a.B(d), b = a.L(d);
                        b && 'BODY' != c || (d = 0);
                        if (d && !a.linkObject) {
                            var l = d.onclick ? '' + d.onclick : '';
                            if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink('))
                                d = 0;
                        }
                    } else
                        a.ma = 1;
                    !e && d && (e = a.Na(d));
                    e && !a.linkLeaveQueryString && (g = e.indexOf('?'), 0 <= g && (e = e.substring(0, g)));
                    if (!f && e) {
                        var m = 0, n = 0, p;
                        if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                            for (l = e.toLowerCase(), g = l.indexOf('?'), k = l.indexOf('#'), 0 <= g ? 0 <= k && k < g && (g = k) : g = k, 0 <= g && (l = l.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(','), k = 0; k < g.length; k++)
                                (p = g[k]) && l.substring(l.length - (p.length + 1)) == '.' + p && (f = 'd');
                        if (a.trackExternalLinks && !f && (l = e.toLowerCase(), a.Qa(l) && (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(','), m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(',')), g))) {
                            for (k = 0; k < g.length; k++)
                                p = g[k], 0 <= l.indexOf(p) && (n = 1);
                            n ? m && (f = 'e') : m || (f = 'e');
                        }
                    }
                    a.linkObject = d;
                    a.linkURL = e;
                    a.linkType = f;
                    if (a.trackClickMap || a.trackInlineStats)
                        a.e = '', d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), h.s_objectID && (b.id = h.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = '&pid=' + a.escape(f.substring(0, 255)) + (e ? '&pidt=' + e : '') + '&oid=' + a.escape(b.id.substring(0, 100)) + (b.type ? '&oidt=' + b.type : '') + '&ot=' + c + (d ? '&oi=' + d : '')));
                };
                a.Rb = function () {
                    var c = a.ma, b = a.linkType, d = a.linkURL, f = a.linkName;
                    b && (d || f) && (b = b.toLowerCase(), 'd' != b && 'e' != b && (b = 'o'), a.pe = 'lnk_' + b, a.pev1 = d ? a.escape(d) : '', a.pev2 = f ? a.escape(f) : '', c = 1);
                    a.abort && (c = 0);
                    if (a.trackClickMap || a.trackInlineStats || a.Ub()) {
                        var b = {}, d = 0, e = a.rb(), g = e ? e.split('&') : 0, k, l, h, e = 0;
                        if (g)
                            for (k = 0; k < g.length; k++)
                                l = g[k].split('='), f = a.unescape(l[0]).split(','), l = a.unescape(l[1]), b[l] = f;
                        f = a.account.split(',');
                        k = {};
                        for (h in a.contextData)
                            h && !Object.prototype[h] && 'a.activitymap.' == h.substring(0, 14) && (k[h] = a.contextData[h], a.contextData[h] = '');
                        a.e = a.o('c', k) + (a.e ? a.e : '');
                        if (c || a.e) {
                            c && !a.e && (e = 1);
                            for (l in b)
                                if (!Object.prototype[l])
                                    for (h = 0; h < f.length; h++)
                                        for (e && (g = b[l].join(','), g == a.account && (a.e += ('&' != l.charAt(0) ? '&' : '') + l, b[l] = [], d = 1)), k = 0; k < b[l].length; k++)
                                            g = b[l][k], g == f[h] && (e && (a.e += '&u=' + a.escape(g) + ('&' != l.charAt(0) ? '&' : '') + l + '&u=0'), b[l].splice(k, 1), d = 1);
                            c || (d = 1);
                            if (d) {
                                e = '';
                                k = 2;
                                !c && a.e && (e = a.escape(f.join(',')) + '=' + a.escape(a.e), k = 1);
                                for (l in b)
                                    !Object.prototype[l] && 0 < k && 0 < b[l].length && (e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l), k--);
                                a.zb(e);
                            }
                        }
                    }
                    return c;
                };
                a.rb = function () {
                    if (a.useLinkTrackSessionStorage) {
                        if (a.Ea())
                            return h.sessionStorage.getItem(a.P);
                    } else
                        return a.cookieRead(a.P);
                };
                a.Ea = function () {
                    return h.sessionStorage ? !0 : !1;
                };
                a.zb = function (c) {
                    a.useLinkTrackSessionStorage ? a.Ea() && h.sessionStorage.setItem(a.P, c) : a.cookieWrite(a.P, c);
                };
                a.Sb = function () {
                    if (!a.bc) {
                        var c = new Date(), b = p.location, d, f, e = f = d = '', g = '', k = '', l = '1.2', h = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N', m = '', q = '';
                        if (c.setUTCDate && (l = '1.3', 0 .toPrecision && (l = '1.5', c = [], c.forEach))) {
                            l = '1.6';
                            f = 0;
                            d = {};
                            try {
                                f = new Iterator(d), f.next && (l = '1.7', c.reduce && (l = '1.8', l.trim && (l = '1.8.1', Date.parse && (l = '1.8.2', Object.create && (l = '1.8.5')))));
                            } catch (r) {
                            }
                        }
                        d = screen.width + 'x' + screen.height;
                        e = navigator.javaEnabled() ? 'Y' : 'N';
                        f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                        g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                        k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                        try {
                            a.b.addBehavior('#default#homePage'), m = a.b.kc(b) ? 'Y' : 'N';
                        } catch (s) {
                        }
                        try {
                            a.b.addBehavior('#default#clientCaps'), q = a.b.connectionType;
                        } catch (t) {
                        }
                        a.resolution = d;
                        a.colorDepth = f;
                        a.javascriptVersion = l;
                        a.javaEnabled = e;
                        a.cookiesEnabled = h;
                        a.browserWidth = g;
                        a.browserHeight = k;
                        a.connectionType = q;
                        a.homepage = m;
                        a.bc = 1;
                    }
                };
                a.Q = {};
                a.loadModule = function (c, b) {
                    var d = a.Q[c];
                    if (!d) {
                        d = h['AppMeasurement_Module_' + c] ? new h['AppMeasurement_Module_' + c](a) : {};
                        a.Q[c] = a[c] = d;
                        d.kb = function () {
                            return d.ub;
                        };
                        d.Ab = function (b) {
                            if (d.ub = b)
                                a[c + '_onLoad'] = b, a.fa(c + '_onLoad', [
                                    a,
                                    d
                                ], 1) || b(a, d);
                        };
                        try {
                            Object.defineProperty ? Object.defineProperty(d, 'onLoad', {
                                get: d.kb,
                                set: d.Ab
                            }) : d._olc = 1;
                        } catch (f) {
                            d._olc = 1;
                        }
                    }
                    b && (a[c + '_onLoad'] = b, a.fa(c + '_onLoad', [
                        a,
                        d
                    ], 1) || b(a, d));
                };
                a.u = function (c) {
                    var b, d;
                    for (b in a.Q)
                        if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]()))
                            return 1;
                    return 0;
                };
                a.Ub = function () {
                    return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
                };
                a.Vb = function () {
                    var c = Math.floor(10000000000000 * Math.random()), b = a.visitorSampling, d = a.visitorSamplingGroup, d = 's_vsn_' + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? '_' + d : ''), f = a.cookieRead(d);
                    if (b) {
                        b *= 100;
                        f && (f = parseInt(f));
                        if (!f) {
                            if (!a.cookieWrite(d, c))
                                return 0;
                            f = c;
                        }
                        if (f % 10000 > b)
                            return 0;
                    }
                    return 1;
                };
                a.S = function (c, b) {
                    var d, f, e, g, k, h, m;
                    m = {};
                    for (d = 0; 2 > d; d++)
                        for (f = 0 < d ? a.Ga : a.g, e = 0; e < f.length; e++)
                            if (g = f[e], (k = c[g]) || c['!' + g]) {
                                if (k && !b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                                    for (h in a[g])
                                        k[h] || (k[h] = a[g][h]);
                                a[g] || (m['!' + g] = 1);
                                m[g] = a[g];
                                a[g] = k;
                            }
                    return m;
                };
                a.hc = function (c) {
                    var b, d, f, e;
                    for (b = 0; 2 > b; b++)
                        for (d = 0 < b ? a.Ga : a.g, f = 0; f < d.length; f++)
                            e = d[f], c[e] = a[e], c[e] || 'prop' !== e.substring(0, 4) && 'eVar' !== e.substring(0, 4) && 'hier' !== e.substring(0, 4) && 'list' !== e.substring(0, 4) && 'channel' !== e && 'events' !== e && 'eventList' !== e && 'products' !== e && 'productList' !== e && 'purchaseID' !== e && 'transactionID' !== e && 'state' !== e && 'zip' !== e && 'campaign' !== e && 'events2' !== e && 'latitude' !== e && 'longitude' !== e && 'ms_a' !== e && 'contextData' !== e && 'supplementalDataID' !== e && 'tnt' !== e && 'timestamp' !== e && 'abort' !== e && 'useBeacon' !== e && 'linkObject' !== e && 'clickObject' !== e && 'linkType' !== e && 'linkName' !== e && 'linkURL' !== e && 'bodyClickTarget' !== e && 'bodyClickFunction' !== e || (c['!' + e] = 1);
                };
                a.Mb = function (a) {
                    var b, d, f, e, g, k = 0, h, m = '', n = '';
                    if (a && 255 < a.length && (b = '' + a, d = b.indexOf('?'), 0 < d && (h = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, 'http://' == e.substring(0, 7) ? f += 7 : 'https://' == e.substring(0, 8) && (f += 8), d = e.indexOf('/', f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf('google') ? k = ',q,ie,start,search_key,word,kw,cd,' : 0 <= e.indexOf('yahoo.co') ? k = ',p,ei,' : 0 <= e.indexOf('baidu.') && (k = ',wd,word,'), k && h)))) {
                        if ((a = h.split('&')) && 1 < a.length) {
                            for (f = 0; f < a.length; f++)
                                e = a[f], d = e.indexOf('='), 0 < d && 0 <= k.indexOf(',' + e.substring(0, d) + ',') ? m += (m ? '&' : '') + e : n += (n ? '&' : '') + e;
                            m && n ? h = m + '&' + n : n = '';
                        }
                        d = 253 - (h.length - n.length) - b.length;
                        a = b + (0 < d ? g.substring(0, d) : '') + '?' + h;
                    }
                    return a;
                };
                a.eb = function (c) {
                    var b = a.d.visibilityState, d = [
                            'webkitvisibilitychange',
                            'visibilitychange'
                        ];
                    b || (b = a.d.webkitVisibilityState);
                    if (b && 'prerender' == b) {
                        if (c)
                            for (b = 0; b < d.length; b++)
                                a.d.addEventListener(d[b], function () {
                                    var b = a.d.visibilityState;
                                    b || (b = a.d.webkitVisibilityState);
                                    'visible' == b && c();
                                });
                        return !1;
                    }
                    return !0;
                };
                a.ca = !1;
                a.H = !1;
                a.Cb = function () {
                    a.H = !0;
                    a.p();
                };
                a.I = !1;
                a.Db = function (c) {
                    a.marketingCloudVisitorID = c.MCMID;
                    a.visitorOptedOut = c.MCOPTOUT;
                    a.analyticsVisitorID = c.MCAID;
                    a.audienceManagerLocationHint = c.MCAAMLH;
                    a.audienceManagerBlob = c.MCAAMB;
                    a.I = !1;
                    a.p();
                };
                a.cb = function (c) {
                    a.maxDelay || (a.maxDelay = 250);
                    return a.u('_d') ? (c && setTimeout(function () {
                        c();
                    }, a.maxDelay), !1) : !0;
                };
                a.aa = !1;
                a.G = !1;
                a.Aa = function () {
                    a.G = !0;
                    a.p();
                };
                a.isReadyToTrack = function () {
                    var c = !0;
                    if (!a.ob() || !a.mb())
                        return !1;
                    a.qb() || (c = !1);
                    a.tb() || (c = !1);
                    return c;
                };
                a.ob = function () {
                    a.ca || a.H || (a.eb(a.Cb) ? a.H = !0 : a.ca = !0);
                    return a.ca && !a.H ? !1 : !0;
                };
                a.mb = function () {
                    var c = a.wa();
                    if (c)
                        if (a.ta || a.ba)
                            if (a.ta) {
                                if (!c.isApproved(c.Categories.ANALYTICS))
                                    return !1;
                            } else
                                return !1;
                        else
                            return c.fetchPermissions(a.vb, !0), a.ba = !0, !1;
                    return !0;
                };
                a.V = function (c) {
                    var b = a.wa();
                    return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
                };
                a.wa = function () {
                    return h.adobe && h.adobe.optIn ? h.adobe.optIn : null;
                };
                a.Y = !0;
                a.qb = function () {
                    var c = a.T();
                    if (!c || !c.getVisitorValues)
                        return !0;
                    a.Y && (a.Y = !1, a.I || (a.I = !0, c.getVisitorValues(a.Db)));
                    return !a.I;
                };
                a.T = function () {
                    var c = a.visitor;
                    c && !c.isAllowed() && (c = null);
                    return c;
                };
                a.tb = function () {
                    a.aa || a.G || (a.cb(a.Aa) ? a.G = !0 : a.aa = !0);
                    return a.aa && !a.G ? !1 : !0;
                };
                a.ba = !1;
                a.vb = function () {
                    a.ba = !1;
                    a.ta = !0;
                };
                a.j = q;
                a.q = 0;
                a.callbackWhenReadyToTrack = function (c, b, d) {
                    var f;
                    f = {};
                    f.Hb = c;
                    f.Gb = b;
                    f.Eb = d;
                    a.j == q && (a.j = []);
                    a.j.push(f);
                    0 == a.q && (a.q = setInterval(a.p, 100));
                };
                a.p = function () {
                    var c;
                    if (a.isReadyToTrack() && (a.Bb(), a.j != q))
                        for (; 0 < a.j.length;)
                            c = a.j.shift(), c.Gb.apply(c.Hb, c.Eb);
                };
                a.Bb = function () {
                    a.q && (clearInterval(a.q), a.q = 0);
                };
                a.ua = function (c) {
                    var b, d = {};
                    a.hc(d);
                    if (c != q)
                        for (b in c)
                            d[b] = c[b];
                    a.callbackWhenReadyToTrack(a, a.Fa, [d]);
                    a.Da();
                };
                a.Ob = function () {
                    var c = a.cookieRead('s_fid'), b = '', d = '', f;
                    f = 8;
                    var e = 4;
                    if (!c || 0 > c.indexOf('-')) {
                        for (c = 0; 16 > c; c++)
                            f = Math.floor(Math.random() * f), b += '0123456789ABCDEF'.substring(f, f + 1), f = Math.floor(Math.random() * e), d += '0123456789ABCDEF'.substring(f, f + 1), f = e = 16;
                        c = b + '-' + d;
                    }
                    a.cookieWrite('s_fid', c, 1) || (c = 0);
                    return c;
                };
                a.Fa = function (c) {
                    var b = new Date(), d = 's' + Math.floor(b.getTime() / 10800000) % 10 + Math.floor(10000000000000 * Math.random()), f = b.getYear(), f = 't=' + a.escape(b.getDate() + '/' + b.getMonth() + '/' + (1900 > f ? f + 1900 : f) + ' ' + b.getHours() + ':' + b.getMinutes() + ':' + b.getSeconds() + ' ' + b.getDay() + ' ' + b.getTimezoneOffset()), e = a.T(), g;
                    c && (g = a.S(c, 1));
                    a.Vb() && !a.visitorOptedOut && (a.xa() || (a.fid = a.Ob()), a.Yb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(b.getTime() / 1000)), c = h.location, a.pageURL || (a.pageURL = c.href ? c.href : c), a.referrer || a.$a || (c = a.Util.getQueryParam('adobe_mc_ref', null, null, !0), a.referrer = c || void 0 === c ? void 0 === c ? '' : c : p.document.referrer), a.$a = 1, !a.referrer && a.Z && (a.referrer = a.Z), a.Z = 0, a.referrer = a.Mb(a.referrer), a.u('_g')), a.Rb() && !a.abort && (e && a.V('TARGET') && !a.supplementalDataID && e.getSupplementalDataID && (a.supplementalDataID = e.getSupplementalDataID('AppMeasurement:' + a._in, a.expectSupplementalData ? !1 : !0)), a.V('AAM') || (a.contextData['cm.ssf'] = 1), a.Sb(), a.wb(), f += a.Qb(), a.sb(d, f), a.u('_t'), a.referrer = '')));
                    a.referrer && (a.Z = a.referrer);
                    a.Da();
                    g && a.S(g, 1);
                };
                a.t = a.track = function (c, b) {
                    b && a.S(b);
                    a.Y = !0;
                    a.isReadyToTrack() ? null != a.j && 0 < a.j.length ? (a.ua(c), a.p()) : a.Fa(c) : a.ua(c);
                };
                a.wb = function () {
                    a.writeSecureCookies && !a.ssl && a.ab();
                };
                a.ab = function () {
                    a.contextData.excCodes = a.contextData.excCodes ? a.contextData.excCodes : [];
                    a.contextData.excCodes.push(1);
                };
                a.Da = function () {
                    a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = a.useBeacon = a.referrer = 0;
                    a.contextData && a.contextData.excCodes && (a.contextData.excCodes = 0);
                };
                a.Ca = [];
                a.registerPreTrackCallback = function (c) {
                    for (var b = [], d = 1; d < arguments.length; d++)
                        b.push(arguments[d]);
                    'function' == typeof c ? a.Ca.push([
                        c,
                        b
                    ]) : a.debugTracking && a.C('DEBUG: Non function type passed to registerPreTrackCallback');
                };
                a.hb = function (c) {
                    a.va(a.Ca, c);
                };
                a.Ba = [];
                a.registerPostTrackCallback = function (c) {
                    for (var b = [], d = 1; d < arguments.length; d++)
                        b.push(arguments[d]);
                    'function' == typeof c ? a.Ba.push([
                        c,
                        b
                    ]) : a.debugTracking && a.C('DEBUG: Non function type passed to registerPostTrackCallback');
                };
                a.gb = function (c) {
                    a.va(a.Ba, c);
                };
                a.va = function (c, b) {
                    if ('object' == typeof c)
                        for (var d = 0; d < c.length; d++) {
                            var f = c[d][0], e = c[d][1].slice();
                            e.unshift(b);
                            if ('function' == typeof f)
                                try {
                                    f.apply(null, e);
                                } catch (g) {
                                    a.debugTracking && a.C(g.message);
                                }
                        }
                };
                a.tl = a.trackLink = function (c, b, d, f, e) {
                    a.linkObject = c;
                    a.linkType = b;
                    a.linkName = d;
                    e && (a.bodyClickTarget = c, a.bodyClickFunction = e);
                    return a.track(f);
                };
                a.trackLight = function (c, b, d, f) {
                    a.lightProfileID = c;
                    a.lightStoreForSeconds = b;
                    a.lightIncrementBy = d;
                    return a.track(f);
                };
                a.clearVars = function () {
                    var c, b;
                    for (c = 0; c < a.g.length; c++)
                        if (b = a.g[c], 'prop' == b.substring(0, 4) || 'eVar' == b.substring(0, 4) || 'hier' == b.substring(0, 4) || 'list' == b.substring(0, 4) || 'channel' == b || 'events' == b || 'eventList' == b || 'products' == b || 'productList' == b || 'purchaseID' == b || 'transactionID' == b || 'state' == b || 'zip' == b || 'campaign' == b)
                            a[b] = void 0;
                };
                a.tagContainerMarker = '';
                a.sb = function (c, b) {
                    var d = a.ib() + '/' + c + '?AQB=1&ndh=1&pf=1&' + (a.za() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') + b + '&AQE=1';
                    a.hb(d);
                    a.fb(d);
                    a.U();
                };
                a.ib = function () {
                    var c = a.jb();
                    return 'http' + (a.ssl ? 's' : '') + '://' + c + '/b/ss/' + a.account + '/' + (a.mobile ? '5.' : '') + (a.za() ? '10' : '1') + '/JS-' + a.version + (a.ac ? 'T' : '') + (a.tagContainerMarker ? '-' + a.tagContainerMarker : '');
                };
                a.za = function () {
                    return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
                };
                a.jb = function () {
                    var c = a.dc, b = a.trackingServer;
                    b ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure) : (c = c ? ('' + c).toLowerCase() : 'd1', 'd1' == c ? c = '112' : 'd2' == c && (c = '122'), b = a.lb() + '.' + c + '.2o7.net');
                    return b;
                };
                a.lb = function () {
                    var c = a.visitorNamespace;
                    c || (c = a.account.split(',')[0], c = c.replace(/[^0-9a-z]/gi, ''));
                    return c;
                };
                a.Za = /{(%?)(.*?)(%?)}/;
                a.gc = RegExp(a.Za.source, 'g');
                a.Lb = function (c) {
                    if ('object' == typeof c.dests)
                        for (var b = 0; b < c.dests.length; ++b) {
                            var d = c.dests[b];
                            if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                                for (var f = d.c.match(a.gc), e = 0; e < f.length; ++e) {
                                    var g = f[e], k = g.match(a.Za), h = '';
                                    '%' == k[1] && 'timezone_offset' == k[2] ? h = new Date().getTimezoneOffset() : '%' == k[1] && 'timestampz' == k[2] && (h = a.Pb());
                                    d.c = d.c.replace(g, a.escape(h));
                                }
                        }
                };
                a.Pb = function () {
                    var c = new Date(), b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
                    return a.k(4, c.getFullYear()) + '-' + a.k(2, c.getMonth() + 1) + '-' + a.k(2, c.getDate()) + 'T' + a.k(2, c.getHours()) + ':' + a.k(2, c.getMinutes()) + ':' + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? '-' : '+') + a.k(2, b.getUTCHours()) + ':' + a.k(2, b.getUTCMinutes());
                };
                a.k = function (a, b) {
                    return (Array(a + 1).join(0) + b).slice(-a);
                };
                a.qa = {};
                a.doPostbacks = function (c) {
                    if ('object' == typeof c)
                        if (a.Lb(c), 'object' == typeof a.AudienceManagement && 'function' == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && 'function' == typeof a.AudienceManagement.passData)
                            a.AudienceManagement.passData(c);
                        else if ('object' == typeof c && 'object' == typeof c.dests)
                            for (var b = 0; b < c.dests.length; ++b) {
                                var d = c.dests[b];
                                'object' == typeof d && 'string' == typeof d.c && 'string' == typeof d.id && 'aa.' == d.id.substr(0, 3) && (a.qa[d.id] = new Image(), a.qa[d.id].alt = '', a.qa[d.id].src = d.c);
                            }
                };
                a.fb = function (c) {
                    a.i || a.Tb();
                    a.i.push(c);
                    a.ja = a.A();
                    a.Ya();
                };
                a.Tb = function () {
                    a.i = a.Wb();
                    a.i || (a.i = []);
                };
                a.Wb = function () {
                    var c, b;
                    if (a.pa()) {
                        try {
                            (b = h.localStorage.getItem(a.na())) && (c = h.JSON.parse(b));
                        } catch (d) {
                        }
                        return c;
                    }
                };
                a.pa = function () {
                    var c = !0;
                    a.trackOffline && a.offlineFilename && h.localStorage && h.JSON || (c = !1);
                    return c;
                };
                a.Oa = function () {
                    var c = 0;
                    a.i && (c = a.i.length);
                    a.l && c++;
                    return c;
                };
                a.U = function () {
                    if (a.l && (a.v && a.v.complete && a.v.D && a.v.R(), a.l))
                        return;
                    a.Pa = q;
                    if (a.oa)
                        a.ja > a.N && a.Wa(a.i), a.ra(500);
                    else {
                        var c = a.Fb();
                        if (0 < c)
                            a.ra(c);
                        else if (c = a.Ma())
                            a.l = 1, a.Xb(c), a.$b(c);
                    }
                };
                a.ra = function (c) {
                    a.Pa || (c || (c = 0), a.Pa = setTimeout(a.U, c));
                };
                a.Fb = function () {
                    var c;
                    if (!a.trackOffline || 0 >= a.offlineThrottleDelay)
                        return 0;
                    c = a.A() - a.Ua;
                    return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
                };
                a.Ma = function () {
                    if (0 < a.i.length)
                        return a.i.shift();
                };
                a.Xb = function (c) {
                    if (a.debugTracking) {
                        var b = 'AppMeasurement Debug: ' + c;
                        c = c.split('&');
                        var d;
                        for (d = 0; d < c.length; d++)
                            b += '\n\t' + a.unescape(c[d]);
                        a.C(b);
                    }
                };
                a.xa = function () {
                    return a.marketingCloudVisitorID || a.analyticsVisitorID;
                };
                a.X = !1;
                var t;
                try {
                    t = JSON.parse('{"x":"y"}');
                } catch (v) {
                    t = null;
                }
                t && 'y' == t.x ? (a.X = !0, a.W = function (a) {
                    return JSON.parse(a);
                }) : h.$ && h.$.parseJSON ? (a.W = function (a) {
                    return h.$.parseJSON(a);
                }, a.X = !0) : a.W = function () {
                    return null;
                };
                a.$b = function (c) {
                    var b, d, f;
                    a.nb(c) && (d = 1, b = {
                        send: function (c) {
                            a.useBeacon = !1;
                            navigator.sendBeacon(c) ? b.R() : b.ha();
                        }
                    });
                    !b && a.xa() && 2047 < c.length && (a.bb() && (d = 2, b = new XMLHttpRequest()), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.X ? b.Ha = !0 : b = 0));
                    !b && a.fc && (c = c.substring(0, 2047));
                    !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement('SCRIPT')) && 'async' in b && ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body) ? (b.type = 'text/javascript', b.setAttribute('async', 'async'), d = 3) : b = 0);
                    b || (b = new Image(), b.alt = '', b.abort || 'undefined' === typeof h.InstallTrigger || (b.abort = function () {
                        b.src = q;
                    }));
                    b.Va = Date.now();
                    b.Ja = function () {
                        try {
                            b.D && (clearTimeout(b.D), b.D = 0);
                        } catch (a) {
                        }
                    };
                    b.onload = b.R = function () {
                        b.Va && (a.ka = Date.now() - b.Va);
                        a.gb(c);
                        b.Ja();
                        a.Jb();
                        a.da();
                        a.l = 0;
                        a.U();
                        if (b.Ha) {
                            b.Ha = !1;
                            try {
                                a.doPostbacks(a.W(b.responseText));
                            } catch (d) {
                            }
                        }
                    };
                    b.onabort = b.onerror = b.ha = function () {
                        b.Ja();
                        (a.trackOffline || a.oa) && a.l && a.i.unshift(a.Ib);
                        a.l = 0;
                        a.ja > a.N && a.Wa(a.i);
                        a.da();
                        a.ra(500);
                    };
                    b.onreadystatechange = function () {
                        4 == b.readyState && (200 == b.status ? b.R() : b.ha());
                    };
                    a.Ua = a.A();
                    if (1 === d)
                        b.send(c);
                    else if (2 === d)
                        f = c.indexOf('?'), d = c.substring(0, f), f = c.substring(f + 1), f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ''), b.open('POST', d, !0), b.withCredentials = !0, b.send(f);
                    else if (b.src = c, 3 === d) {
                        if (a.Sa)
                            try {
                                f.removeChild(a.Sa);
                            } catch (e) {
                            }
                        f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                        a.Sa = a.v;
                    }
                    b.D = setTimeout(function () {
                        b.D && (b.complete ? b.R() : (a.trackOffline && b.abort && b.abort(), b.ha()));
                    }, 5000);
                    a.Ib = c;
                    a.v = h['s_i_' + a.replace(a.account, ',', '_')] = b;
                    if (a.useForcedLinkTracking && a.J || a.bodyClickFunction)
                        a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ea = setTimeout(a.da, a.forcedLinkTrackingTimeout);
                };
                a.nb = function (c) {
                    var b = !1;
                    navigator.sendBeacon && (a.pb(c) ? b = !0 : a.useBeacon && (b = !0));
                    a.yb(c) && (b = !1);
                    return b;
                };
                a.pb = function (a) {
                    return a && 0 < a.indexOf('pe=lnk_e') ? !0 : !1;
                };
                a.yb = function (a) {
                    return 64000 <= a.length;
                };
                a.bb = function () {
                    return 'undefined' !== typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest() ? !0 : !1;
                };
                a.Jb = function () {
                    if (a.pa() && !(a.Ta > a.N))
                        try {
                            h.localStorage.removeItem(a.na()), a.Ta = a.A();
                        } catch (c) {
                        }
                };
                a.Wa = function (c) {
                    if (a.pa()) {
                        a.Ya();
                        try {
                            h.localStorage.setItem(a.na(), h.JSON.stringify(c)), a.N = a.A();
                        } catch (b) {
                        }
                    }
                };
                a.Ya = function () {
                    if (a.trackOffline) {
                        if (!a.offlineLimit || 0 >= a.offlineLimit)
                            a.offlineLimit = 10;
                        for (; a.i.length > a.offlineLimit;)
                            a.Ma();
                    }
                };
                a.forceOffline = function () {
                    a.oa = !0;
                };
                a.forceOnline = function () {
                    a.oa = !1;
                };
                a.na = function () {
                    return a.offlineFilename + '-' + a.visitorNamespace + a.account;
                };
                a.A = function () {
                    return new Date().getTime();
                };
                a.Qa = function (a) {
                    a = a.toLowerCase();
                    return 0 != a.indexOf('#') && 0 != a.indexOf('about:') && 0 != a.indexOf('opera:') && 0 != a.indexOf('javascript:') ? !0 : !1;
                };
                a.setTagContainer = function (c) {
                    var b, d, f;
                    a.ac = c;
                    for (b = 0; b < a._il.length; b++)
                        if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                            a.S(d);
                            if (d.lmq)
                                for (b = 0; b < d.lmq.length; b++)
                                    f = d.lmq[b], a.loadModule(f.n);
                            if (d.ml)
                                for (f in d.ml)
                                    if (a[f])
                                        for (b in (c = a[f], f = d.ml[f], f))
                                            !Object.prototype[b] && ('function' != typeof f[b] || 0 > ('' + f[b]).indexOf('s_c_il')) && (c[b] = f[b]);
                            if (d.mmq)
                                for (b = 0; b < d.mmq.length; b++)
                                    f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && 'function' == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                            if (d.tq)
                                for (b = 0; b < d.tq.length; b++)
                                    a.track(d.tq[b]);
                            d.s = a;
                            break;
                        }
                };
                a.Util = {
                    urlEncode: a.escape,
                    urlDecode: a.unescape,
                    cookieRead: a.cookieRead,
                    cookieWrite: a.cookieWrite,
                    getQueryParam: function (c, b, d, f) {
                        var e, g = '';
                        b || (b = a.pageURL ? a.pageURL : h.location);
                        d = d ? d : '&';
                        if (!c || !b)
                            return g;
                        b = '' + b;
                        e = b.indexOf('?');
                        if (0 > e)
                            return g;
                        b = d + b.substring(e + 1) + d;
                        if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + '=' + d))) {
                            e = b.indexOf('#');
                            0 <= e && (b = b.substr(0, e) + d);
                            e = b.indexOf(d + c + '=');
                            if (0 > e)
                                return g;
                            b = b.substring(e + d.length + c.length + 1);
                            e = b.indexOf(d);
                            0 <= e && (b = b.substring(0, e));
                            0 < b.length && (g = a.unescape(b));
                            return g;
                        }
                    },
                    getIeVersion: function () {
                        return document.documentMode ? document.documentMode : a.ya() ? 7 : null;
                    }
                };
                a.F = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(' ');
                a.g = a.F.concat('purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(' '));
                a.la = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(' ');
                a.O = a.la.slice(0);
                a.Ga = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement'.split(' ');
                for (m = 0; 250 >= m; m++)
                    76 > m && (a.g.push('prop' + m), a.O.push('prop' + m)), a.g.push('eVar' + m), a.O.push('eVar' + m), 6 > m && a.g.push('hier' + m), 4 > m && a.g.push('list' + m);
                m = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a'.split(' ');
                a.g = a.g.concat(m);
                a.F = a.F.concat(m);
                a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf('https');
                a.charSet = 'UTF-8';
                a.contextData = {};
                a.writeSecureCookies = !1;
                a.offlineThrottleDelay = 0;
                a.offlineFilename = 'AppMeasurement.offline';
                a.P = 's_sq';
                a.Ua = 0;
                a.ja = 0;
                a.N = 0;
                a.Ta = 0;
                a.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
                a.w = h;
                a.d = h.document;
                a.da = function () {
                    a.ea && (h.clearTimeout(a.ea), a.ea = q);
                    a.bodyClickTarget && a.J && a.bodyClickTarget.dispatchEvent(a.J);
                    a.bodyClickFunction && ('function' == typeof a.bodyClickFunction ? a.bodyClickFunction() : a.bodyClickTarget && a.bodyClickTarget.href && (a.d.location = a.bodyClickTarget.href));
                    a.bodyClickTarget = a.J = a.bodyClickFunction = 0;
                };
                a.Xa = function () {
                    a.b = a.d.body;
                    a.b ? (a.r = function (c) {
                        var b, d, f, e, g;
                        if (!(a.d && a.d.getElementById('cppXYctnr') || c && c['s_fe_' + a._in])) {
                            if (a.Ia)
                                if (a.useForcedLinkTracking)
                                    a.b.removeEventListener('click', a.r, !1);
                                else {
                                    a.b.removeEventListener('click', a.r, !0);
                                    a.Ia = a.useForcedLinkTracking = 0;
                                    return;
                                }
                            else
                                a.useForcedLinkTracking = 0;
                            a.clickObject = c.srcElement ? c.srcElement : c.target;
                            try {
                                if (!a.clickObject || a.M && a.M == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode))
                                    a.clickObject = 0;
                                else {
                                    var k = a.M = a.clickObject;
                                    a.ia && (clearTimeout(a.ia), a.ia = 0);
                                    a.ia = setTimeout(function () {
                                        a.M == k && (a.M = 0);
                                    }, 10000);
                                    f = a.Oa();
                                    a.track();
                                    if (f < a.Oa() && a.useForcedLinkTracking && c.target) {
                                        for (e = c.target; e && e != a.b && 'A' != e.tagName.toUpperCase() && 'AREA' != e.tagName.toUpperCase();)
                                            e = e.parentNode;
                                        if (e && (g = e.href, a.Qa(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || '_self' == d || '_top' == d || '_parent' == d || h.name && d == h.name))) {
                                            try {
                                                b = a.d.createEvent('MouseEvents');
                                            } catch (l) {
                                                b = new h.MouseEvent();
                                            }
                                            if (b) {
                                                try {
                                                    b.initMouseEvent('click', c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget);
                                                } catch (m) {
                                                    b = 0;
                                                }
                                                b && (b['s_fe_' + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.bodyClickTarget = c.target, a.J = b);
                                            }
                                        }
                                    }
                                }
                            } catch (n) {
                                a.clickObject = 0;
                            }
                        }
                    }, a.b && a.b.attachEvent ? a.b.attachEvent('onclick', a.r) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent || 0 <= navigator.userAgent.indexOf('Firefox/2') && h.MouseEvent) && (a.Ia = 1, a.useForcedLinkTracking = 1, a.b.addEventListener('click', a.r, !0)), a.b.addEventListener('click', a.r, !1))) : setTimeout(a.Xa, 30);
                };
                a.fc = a.ya();
                a.Kb();
                a.mc || (r ? a.setAccount(r) : a.C('Error, missing Report Suite ID in AppMeasurement initialization'), a.Xa(), a.loadModule('ActivityMap'));
            };
            function s_gi(r) {
                var a, h = window.s_c_il, q, p, m = r.split(','), s, u, t = 0;
                if (h)
                    for (q = 0; !t && q < h.length;) {
                        a = h[q];
                        if ('s_c' == a._c && (a.account || a.oun))
                            if (a.account && a.account == r)
                                t = 1;
                            else
                                for (p = a.account ? a.account : a.oun, p = a.allAccounts ? a.allAccounts : p.split(','), s = 0; s < m.length; s++)
                                    for (u = 0; u < p.length; u++)
                                        m[s] == p[u] && (t = 1);
                        q++;
                    }
                t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r);
                return a;
            }
            AppMeasurement.getInstance = s_gi;
            window.s_objectID || (window.s_objectID = 0);
            function s_pgicq() {
                var r = window, a = r.s_giq, h, q, p;
                if (a)
                    for (h = 0; h < a.length; h++)
                        q = a[h], p = s_gi(q.oun), p.setAccount(q.un), p.setTagContainer(q.tagContainerName);
                r.s_giq = 0;
            }
            s_pgicq();
        }, 3452281, 496139);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var e = function () {
                function e(t) {
                    '@babel/helpers - typeof';
                    return (e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(t);
                }
                function t(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function n() {
                    return {
                        callbacks: {},
                        add: function (e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var n = this.callbacks[e].push(t) - 1, i = this;
                            return function () {
                                i.callbacks[e].splice(n, 1);
                            };
                        },
                        execute: function (e, t) {
                            if (this.callbacks[e]) {
                                t = void 0 === t ? [] : t, t = t instanceof Array ? t : [t];
                                try {
                                    for (; this.callbacks[e].length;) {
                                        var n = this.callbacks[e].shift();
                                        'function' == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t);
                                    }
                                    delete this.callbacks[e];
                                } catch (e) {
                                }
                            }
                        },
                        executeAll: function (e, t) {
                            (t || e && !V.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function (t) {
                                var n = void 0 !== e[t] ? e[t] : '';
                                this.execute(t, n);
                            }, this);
                        },
                        hasCallbacks: function () {
                            return Boolean(Object.keys(this.callbacks).length);
                        }
                    };
                }
                function i(e, t, n) {
                    var i = null == e ? void 0 : e[t];
                    return void 0 === i ? n : i;
                }
                function r(e) {
                    for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++)
                        if (!t.test(e[n]))
                            return !1;
                    return !0;
                }
                function a(e, t) {
                    for (; e.length < t.length;)
                        e.push('0');
                    for (; t.length < e.length;)
                        t.push('0');
                }
                function o(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var i = parseInt(e[n], 10), r = parseInt(t[n], 10);
                        if (i > r)
                            return 1;
                        if (r > i)
                            return -1;
                    }
                    return 0;
                }
                function s(e, t) {
                    if (e === t)
                        return 0;
                    var n = e.toString().split('.'), i = t.toString().split('.');
                    return r(n.concat(i)) ? (a(n, i), o(n, i)) : NaN;
                }
                function c(e) {
                    return e === Object(e) && 0 === Object.keys(e).length;
                }
                function u(e) {
                    return 'function' == typeof e || e instanceof Array && e.length;
                }
                function l() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '', t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                            return !0;
                        };
                    this.log = Ie('log', e, t), this.warn = Ie('warn', e, t), this.error = Ie('error', e, t);
                }
                function d() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.cookieName, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = n.cookies;
                    if (!t || !i)
                        return {
                            get: we,
                            set: we,
                            remove: we
                        };
                    var r = {
                        remove: function () {
                            i.remove(t);
                        },
                        get: function () {
                            var e = i.get(t), n = {};
                            try {
                                n = JSON.parse(e);
                            } catch (e) {
                                n = {};
                            }
                            return n;
                        },
                        set: function (e, n) {
                            n = n || {};
                            var a = r.get(), o = Object.assign(a, e);
                            i.set(t, JSON.stringify(o), {
                                domain: n.optInCookieDomain || '',
                                cookieLifetime: n.optInStorageExpiry || 34190000,
                                expires: !0
                            });
                        }
                    };
                    return r;
                }
                function f(e) {
                    this.name = this.constructor.name, this.message = e, 'function' == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack;
                }
                function p() {
                    function e(e, t) {
                        var n = Ae(e);
                        return n.length ? n.every(function (e) {
                            return !!t[e];
                        }) : be(t);
                    }
                    function t() {
                        M(b), O(le.COMPLETE), _(h.status, h.permissions), s && m.set(h.permissions, {
                            optInCookieDomain: c,
                            optInStorageExpiry: u
                        }), C.execute(He);
                    }
                    function n(e) {
                        return function (n, i) {
                            if (!Oe(n))
                                throw new Error('[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.');
                            return O(le.CHANGED), Object.assign(b, Me(Ae(n), e)), i || t(), h;
                        };
                    }
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = i.doesOptInApply, a = i.previousPermissions, o = i.preOptInApprovals, s = i.isOptInStorageEnabled, c = i.optInCookieDomain, u = i.optInStorageExpiry, l = i.isIabContext, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, p = f.cookies, g = Fe(a);
                    Ne(g, 'Invalid `previousPermissions`!'), Ne(o, 'Invalid `preOptInApprovals`!');
                    var m = d({ cookieName: 'adobeujs-optin' }, { cookies: p }), h = this, _ = ue(h), C = he(), I = Te(g), S = Te(o), v = s ? m.get() : {}, D = {}, y = function (e, t) {
                            return Pe(e) || t && Pe(t) ? le.COMPLETE : le.PENDING;
                        }(I, v), A = function (e, t, n) {
                            var i = Me(me, !r);
                            return r ? Object.assign({}, i, e, t, n) : i;
                        }(S, I, v), b = ke(A), O = function (e) {
                            return y = e;
                        }, M = function (e) {
                            return A = e;
                        };
                    h.deny = n(!1), h.approve = n(!0), h.denyAll = h.deny.bind(h, me), h.approveAll = h.approve.bind(h, me), h.isApproved = function (t) {
                        return e(t, h.permissions);
                    }, h.isPreApproved = function (t) {
                        return e(t, S);
                    }, h.fetchPermissions = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = t ? h.on(le.COMPLETE, e) : we;
                        return !r || r && h.isComplete || !!o ? e(h.permissions) : t || C.add(He, function () {
                            return e(h.permissions);
                        }), n;
                    }, h.complete = function () {
                        h.status === le.CHANGED && t();
                    }, h.registerPlugin = function (e) {
                        if (!e || !e.name || 'function' != typeof e.onRegister)
                            throw new Error(Ue);
                        D[e.name] || (D[e.name] = e, e.onRegister.call(e, h));
                    }, h.execute = Ve(D), h.memoizeContent = function (e) {
                        Re(e) && m.set(e, {
                            optInCookieDomain: c,
                            optInStorageExpiry: u
                        });
                    }, h.getMemoizedContent = function (e) {
                        var t = m.get();
                        if (t)
                            return t[e];
                    }, Object.defineProperties(h, {
                        permissions: {
                            get: function () {
                                return A;
                            }
                        },
                        status: {
                            get: function () {
                                return y;
                            }
                        },
                        Categories: {
                            get: function () {
                                return de;
                            }
                        },
                        doesOptInApply: {
                            get: function () {
                                return !!r;
                            }
                        },
                        isPending: {
                            get: function () {
                                return h.status === le.PENDING;
                            }
                        },
                        isComplete: {
                            get: function () {
                                return h.status === le.COMPLETE;
                            }
                        },
                        __plugins: {
                            get: function () {
                                return Object.keys(D);
                            }
                        },
                        isIabContext: {
                            get: function () {
                                return l;
                            }
                        }
                    });
                }
                function g(e, t) {
                    function n() {
                        r = null, e.call(e, new f('The call took longer than you wanted!'));
                    }
                    function i() {
                        r && (clearTimeout(r), e.apply(e, arguments));
                    }
                    if (void 0 === t)
                        return e;
                    var r = setTimeout(n, t);
                    return i;
                }
                function m() {
                    if (window.__tcfapi)
                        return window.__tcfapi;
                    var e = window;
                    if (e === window.top)
                        return void De.error('__tcfapi not found');
                    for (var t; !t;) {
                        e = e.parent;
                        try {
                            e.frames.__tcfapiLocator && (t = e);
                        } catch (e) {
                        }
                        if (e === window.top)
                            break;
                    }
                    if (!t)
                        return void De.error('__tcfapi not found');
                    var n = {};
                    return window.__tcfapi = function (e, i, r, a) {
                        var o = Math.random() + '', s = {
                                __tcfapiCall: {
                                    command: e,
                                    parameter: a,
                                    version: i,
                                    callId: o
                                }
                            };
                        n[o] = r, t.postMessage(s, '*');
                    }, window.addEventListener('message', function (e) {
                        var t = e.data;
                        if ('string' == typeof t)
                            try {
                                t = JSON.parse(e.data);
                            } catch (e) {
                            }
                        if (t.__tcfapiReturn) {
                            var i = t.__tcfapiReturn;
                            'function' == typeof n[i.callId] && (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
                        }
                    }, !1), window.__tcfapi;
                }
                function h(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], i = !0 === e.vendor.consents[t], r = n.every(function (t) {
                            return !0 === e.purpose.consents[t];
                        });
                    return i && r;
                }
                function _() {
                    var e = this;
                    e.name = 'iabPlugin', e.version = '0.0.2';
                    var t, n = he(), i = { transparencyAndConsentData: null }, r = function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return i[e] = t;
                        };
                    e.fetchConsentData = function (e) {
                        var t = e.callback, n = e.timeout, i = g(t, n);
                        a({ callback: i });
                    }, e.isApproved = function (e) {
                        var t = e.callback, n = e.category, r = e.timeout;
                        if (i.transparencyAndConsentData)
                            return t(null, h(i.transparencyAndConsentData, fe[n], pe[n]));
                        var o = g(function (e, i) {
                            t(e, h(i, fe[n], pe[n]));
                        }, r);
                        a({
                            category: n,
                            callback: o
                        });
                    }, e.onRegister = function (n) {
                        t = n;
                        var i = Object.keys(fe), r = function (e, t) {
                                !e && t && (i.forEach(function (e) {
                                    var i = h(t, fe[e], pe[e]);
                                    n[i ? 'approve' : 'deny'](e, !0);
                                }), n.complete());
                            };
                        e.fetchConsentData({ callback: r });
                    };
                    var a = function (e) {
                            var a = e.callback;
                            if (i.transparencyAndConsentData)
                                return a(null, i.transparencyAndConsentData);
                            n.add('FETCH_CONSENT_DATA', a), o(function (e, a) {
                                if (a) {
                                    var o = ke(e), s = t.getMemoizedContent('iabConsentHash'), c = ve(o.tcString).toString(32);
                                    o.consentString = e.tcString, o.hasConsentChangedSinceLastCmpPull = s !== c, r('transparencyAndConsentData', o), t.memoizeContent({ iabConsentHash: c });
                                }
                                n.execute('FETCH_CONSENT_DATA', [
                                    null,
                                    i.transparencyAndConsentData
                                ]);
                            });
                        }, o = function (e) {
                            var t = je(fe), n = m();
                            'function' == typeof n && n('getTCData', 2, e, t);
                        };
                }
                var C = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
                Object.assign = Object.assign || function (e) {
                    for (var t, n, i = 1; i < arguments.length; ++i) {
                        n = arguments[i];
                        for (t in n)
                            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                    }
                    return e;
                };
                var I, S, v = {
                        HANDSHAKE: 'HANDSHAKE',
                        GETSTATE: 'GETSTATE',
                        PARENTSTATE: 'PARENTSTATE'
                    }, D = {
                        MCMID: 'MCMID',
                        MCAID: 'MCAID',
                        MCAAMB: 'MCAAMB',
                        MCAAMLH: 'MCAAMLH',
                        MCOPTOUT: 'MCOPTOUT',
                        CUSTOMERIDS: 'CUSTOMERIDS'
                    }, y = {
                        MCMID: 'getMarketingCloudVisitorID',
                        MCAID: 'getAnalyticsVisitorID',
                        MCAAMB: 'getAudienceManagerBlob',
                        MCAAMLH: 'getAudienceManagerLocationHint',
                        MCOPTOUT: 'isOptedOut',
                        ALLFIELDS: 'getVisitorValues'
                    }, A = { CUSTOMERIDS: 'getCustomerIDs' }, b = {
                        MCMID: 'getMarketingCloudVisitorID',
                        MCAAMB: 'getAudienceManagerBlob',
                        MCAAMLH: 'getAudienceManagerLocationHint',
                        MCOPTOUT: 'isOptedOut',
                        MCAID: 'getAnalyticsVisitorID',
                        CUSTOMERIDS: 'getCustomerIDs',
                        ALLFIELDS: 'getVisitorValues'
                    }, O = {
                        MC: 'MCMID',
                        A: 'MCAID',
                        AAM: 'MCAAMB'
                    }, M = {
                        MCMID: 'MCMID',
                        MCOPTOUT: 'MCOPTOUT',
                        MCAID: 'MCAID',
                        MCAAMLH: 'MCAAMLH',
                        MCAAMB: 'MCAAMB'
                    }, k = {
                        UNKNOWN: 0,
                        AUTHENTICATED: 1,
                        LOGGED_OUT: 2
                    }, E = { GLOBAL: 'global' }, T = {
                        MESSAGES: v,
                        STATE_KEYS_MAP: D,
                        ASYNC_API_MAP: y,
                        SYNC_API_MAP: A,
                        ALL_APIS: b,
                        FIELDGROUP_TO_FIELD: O,
                        FIELDS: M,
                        AUTH_STATE: k,
                        OPT_OUT: E
                    }, P = T.STATE_KEYS_MAP, L = function (e) {
                        function t() {
                        }
                        function n(t, n) {
                            var i = this;
                            return function () {
                                var r = e(0, t), a = {};
                                return a[t] = r, i.setStateAndPublish(a), n(r), r;
                            };
                        }
                        this.getMarketingCloudVisitorID = function (e) {
                            e = e || t;
                            var i = this.findField(P.MCMID, e), r = n.call(this, P.MCMID, e);
                            return void 0 !== i ? i : r();
                        }, this.getVisitorValues = function (e) {
                            this.getMarketingCloudVisitorID(function (t) {
                                e({ MCMID: t });
                            });
                        };
                    }, R = T.MESSAGES, w = T.ASYNC_API_MAP, F = T.SYNC_API_MAP, N = function () {
                        function e() {
                        }
                        function t(e, t) {
                            var n = this;
                            return function () {
                                return n.callbackRegistry.add(e, t), n.messageParent(R.GETSTATE), '';
                            };
                        }
                        function n(n) {
                            this[w[n]] = function (i) {
                                i = i || e;
                                var r = this.findField(n, i), a = t.call(this, n, i);
                                return void 0 !== r ? r : a();
                            };
                        }
                        function i(t) {
                            this[F[t]] = function () {
                                return this.findField(t, e) || {};
                            };
                        }
                        Object.keys(w).forEach(n, this), Object.keys(F).forEach(i, this);
                    }, x = T.ASYNC_API_MAP, j = function () {
                        Object.keys(x).forEach(function (e) {
                            this[x[e]] = function (t) {
                                this.callbackRegistry.add(e, t);
                            };
                        }, this);
                    }, V = function (e, t) {
                        return t = { exports: {} }, e(t, t.exports), t.exports;
                    }(function (t, n) {
                        n.isObjectEmpty = function (e) {
                            return e === Object(e) && 0 === Object.keys(e).length;
                        }, n.isValueEmpty = function (e) {
                            return '' === e || n.isObjectEmpty(e);
                        };
                        var i = function () {
                            var e = navigator.appName, t = navigator.userAgent;
                            return 'Microsoft Internet Explorer' === e || t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0 && t.indexOf('Windows NT 6') >= 0;
                        };
                        n.getIeVersion = function () {
                            return document.documentMode ? document.documentMode : i() ? 7 : null;
                        }, n.encodeAndBuildRequest = function (e, t) {
                            return e.map(encodeURIComponent).join(t);
                        }, n.isObject = function (t) {
                            return null !== t && 'object' === e(t) && !1 === Array.isArray(t);
                        }, n.defineGlobalNamespace = function () {
                            return window.adobe = n.isObject(window.adobe) ? window.adobe : {}, window.adobe;
                        }, n.pluck = function (e, t) {
                            return t.reduce(function (t, n) {
                                return e[n] && (t[n] = e[n]), t;
                            }, Object.create(null));
                        }, n.parseOptOut = function (e, t, n) {
                            t || (t = n, e.d_optout && e.d_optout instanceof Array && (t = e.d_optout.join(',')));
                            var i = parseInt(e.d_ottl, 10);
                            return isNaN(i) && (i = 7200), {
                                optOut: t,
                                d_ottl: i
                            };
                        }, n.normalizeBoolean = function (e) {
                            var t = e;
                            return 'true' === e ? t = !0 : 'false' === e && (t = !1), t;
                        };
                    }), H = (V.isObjectEmpty, V.isValueEmpty, V.getIeVersion, V.encodeAndBuildRequest, V.isObject, V.defineGlobalNamespace, V.pluck, V.parseOptOut, V.normalizeBoolean, n), U = T.MESSAGES, B = {
                        0: 'prefix',
                        1: 'orgID',
                        2: 'state'
                    }, G = function (e, t) {
                        this.parse = function (e) {
                            try {
                                var t = {};
                                return e.data.split('|').forEach(function (e, n) {
                                    if (void 0 !== e)
                                        t[B[n]] = 2 !== n ? e : JSON.parse(e);
                                }), t;
                            } catch (e) {
                            }
                        }, this.isInvalid = function (n) {
                            var i = this.parse(n);
                            if (!i || Object.keys(i).length < 2)
                                return !0;
                            var r = e !== i.orgID, a = !t || n.origin !== t, o = -1 === Object.keys(U).indexOf(i.prefix);
                            return r || a || o;
                        }, this.send = function (n, i, r) {
                            var a = i + '|' + e;
                            r && r === Object(r) && (a += '|' + JSON.stringify(r));
                            try {
                                n.postMessage(a, t);
                            } catch (e) {
                            }
                        };
                    }, Y = T.MESSAGES, q = function (e, t, n, i) {
                        function r(e) {
                            Object.assign(p, e);
                        }
                        function a(e) {
                            Object.assign(p.state, e), Object.assign(p.state.ALLFIELDS, e), p.callbackRegistry.executeAll(p.state);
                        }
                        function o(e) {
                            if (!h.isInvalid(e)) {
                                m = !1;
                                var t = h.parse(e);
                                p.setStateAndPublish(t.state);
                            }
                        }
                        function s(e) {
                            !m && g && (m = !0, h.send(i, e));
                        }
                        function c() {
                            r(new L(n._generateID)), p.getMarketingCloudVisitorID(), p.callbackRegistry.executeAll(p.state, !0), C.removeEventListener('message', u);
                        }
                        function u(e) {
                            if (!h.isInvalid(e)) {
                                var t = h.parse(e);
                                m = !1, C.clearTimeout(p._handshakeTimeout), C.removeEventListener('message', u), r(new N(p)), C.addEventListener('message', o), p.setStateAndPublish(t.state), p.callbackRegistry.hasCallbacks() && s(Y.GETSTATE);
                            }
                        }
                        function l() {
                            g && postMessage ? (C.addEventListener('message', u), s(Y.HANDSHAKE), p._handshakeTimeout = setTimeout(c, 250)) : c();
                        }
                        function d() {
                            C.s_c_in || (C.s_c_il = [], C.s_c_in = 0), p._c = 'Visitor', p._il = C.s_c_il, p._in = C.s_c_in, p._il[p._in] = p, C.s_c_in++;
                        }
                        function f() {
                            function e(e) {
                                0 !== e.indexOf('_') && 'function' == typeof n[e] && (p[e] = function () {
                                });
                            }
                            Object.keys(n).forEach(e), p.getSupplementalDataID = n.getSupplementalDataID, p.isAllowed = function () {
                                return !0;
                            };
                        }
                        var p = this, g = t.whitelistParentDomain;
                        p.state = { ALLFIELDS: {} }, p.version = n.version, p.marketingCloudOrgID = e, p.cookieDomain = n.cookieDomain || '', p._instanceType = 'child';
                        var m = !1, h = new G(e, g);
                        p.callbackRegistry = H(), p.init = function () {
                            d(), f(), r(new j(p)), l();
                        }, p.findField = function (e, t) {
                            if (void 0 !== p.state[e])
                                return t(p.state[e]), p.state[e];
                        }, p.messageParent = s, p.setStateAndPublish = a;
                    }, W = T.MESSAGES, X = T.ALL_APIS, K = T.ASYNC_API_MAP, J = T.FIELDGROUP_TO_FIELD, z = function (e, t) {
                        function n() {
                            var t = {};
                            return Object.keys(X).forEach(function (n) {
                                var i = X[n], r = e[i]();
                                V.isValueEmpty(r) || (t[n] = r);
                            }), t;
                        }
                        function i() {
                            var t = [];
                            return e._loading && Object.keys(e._loading).forEach(function (n) {
                                if (e._loading[n]) {
                                    var i = J[n];
                                    t.push(i);
                                }
                            }), t.length ? t : null;
                        }
                        function r(t) {
                            return function n(r) {
                                var a = i();
                                if (a) {
                                    var o = K[a[0]];
                                    e[o](n, !0);
                                } else
                                    t();
                            };
                        }
                        function a(e, i) {
                            var r = n();
                            t.send(e, i, r);
                        }
                        function o(e) {
                            c(e), a(e, W.HANDSHAKE);
                        }
                        function s(e) {
                            r(function () {
                                a(e, W.PARENTSTATE);
                            })();
                        }
                        function c(n) {
                            function i(i) {
                                r.call(e, i), t.send(n, W.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                            }
                            var r = e.setCustomerIDs;
                            e.setCustomerIDs = i;
                        }
                        return function (e) {
                            if (!t.isInvalid(e))
                                (t.parse(e).prefix === W.HANDSHAKE ? o : s)(e.source);
                        };
                    }, Q = function (e, t) {
                        function n(e) {
                            return function (n) {
                                i[e] = n, r++, r === a && t(i);
                            };
                        }
                        var i = {}, r = 0, a = Object.keys(e).length;
                        Object.keys(e).forEach(function (t) {
                            var i = e[t];
                            if (i.fn) {
                                var r = i.args || [];
                                r.unshift(n(t)), i.fn.apply(i.context || null, r);
                            }
                        });
                    }, $ = {
                        get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'), n = t.indexOf(';' + e + '='), i = n < 0 ? n : t.indexOf(';', n + 1);
                            return n < 0 ? '' : decodeURIComponent(t.substring(n + 2 + e.length, i < 0 ? t.length : i));
                        },
                        set: function (e, t, n) {
                            var r = i(n, 'cookieLifetime'), a = i(n, 'expires'), o = i(n, 'domain'), s = i(n, 'secure'), c = s ? 'Secure' : '';
                            if (a && 'SESSION' !== r && 'NONE' !== r) {
                                var u = '' !== t ? parseInt(r || 0, 10) : -60;
                                if (u)
                                    a = new Date(), a.setTime(a.getTime() + 1000 * u);
                                else if (1 === a) {
                                    a = new Date();
                                    var l = a.getYear();
                                    a.setYear(l + 2 + (l < 1900 ? 1900 : 0));
                                }
                            } else
                                a = 0;
                            return e && 'NONE' !== r ? (document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + '; path=/;' + (a ? ' expires=' + a.toGMTString() + ';' : '') + (o ? ' domain=' + o + ';' : '') + c, this.get(e) === t) : 0;
                        },
                        remove: function (e, t) {
                            var n = i(t, 'domain');
                            n = n ? ' domain=' + n + ';' : '', document.cookie = encodeURIComponent(e) + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' + n;
                        }
                    }, Z = function (e) {
                        var t;
                        !e && C.location && (e = C.location.hostname), t = e;
                        var n, i = t.split('.');
                        for (n = i.length - 2; n >= 0; n--)
                            if (t = i.slice(n).join('.'), $.set('test', 'cookie', { domain: t }))
                                return $.remove('test', { domain: t }), t;
                        return '';
                    }, ee = {
                        compare: s,
                        isLessThan: function (e, t) {
                            return s(e, t) < 0;
                        },
                        areVersionsDifferent: function (e, t) {
                            return 0 !== s(e, t);
                        },
                        isGreaterThan: function (e, t) {
                            return s(e, t) > 0;
                        },
                        isEqual: function (e, t) {
                            return 0 === s(e, t);
                        }
                    }, te = !!C.postMessage, ne = {
                        postMessage: function (e, t, n) {
                            var i = 1;
                            t && (te ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1')) : t && (n.location = t.replace(/#.*$/, '') + '#' + +new Date() + i++ + '&' + e));
                        },
                        receiveMessage: function (e, t) {
                            var n;
                            try {
                                te && (e && (n = function (n) {
                                    if ('string' == typeof t && n.origin !== t || '[object Function]' === Object.prototype.toString.call(t) && !1 === t(n.origin))
                                        return !1;
                                    e(n);
                                }), C.addEventListener ? C[e ? 'addEventListener' : 'removeEventListener']('message', n) : C[e ? 'attachEvent' : 'detachEvent']('onmessage', n));
                            } catch (e) {
                            }
                        }
                    }, ie = function (e) {
                        var t, n, i = '0123456789', r = '', a = '', o = 8, s = 10, c = 10;
                        if (1 == e) {
                            for (i += 'ABCDEF', t = 0; 16 > t; t++)
                                n = Math.floor(Math.random() * o), r += i.substring(n, n + 1), n = Math.floor(Math.random() * o), a += i.substring(n, n + 1), o = 16;
                            return r + '-' + a;
                        }
                        for (t = 0; 19 > t; t++)
                            n = Math.floor(Math.random() * s), r += i.substring(n, n + 1), 0 === t && 9 == n ? s = 3 : (1 == t || 2 == t) && 10 != s && 2 > n ? s = 10 : 2 < t && (s = 10), n = Math.floor(Math.random() * c), a += i.substring(n, n + 1), 0 === t && 9 == n ? c = 3 : (1 == t || 2 == t) && 10 != c && 2 > n ? c = 10 : 2 < t && (c = 10);
                        return r + a;
                    }, re = function (e, t) {
                        return {
                            corsMetadata: function () {
                                const $___old_5cce771e501aaa2d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_6b6920217e84a610 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                try {
                                    if ($___old_5cce771e501aaa2d)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d2252eb400e70eb8.XMLHttpRequest));
                                    if ($___old_6b6920217e84a610)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d2252eb400e70eb8.XMLHttpRequest));
                                    return function () {
                                        var e = 'none', t = !0;
                                        return 'undefined' != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ('withCredentials' in new XMLHttpRequest() ? e = 'XMLHttpRequest' : 'undefined' != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (t = !1), Object.prototype.toString.call(C.HTMLElement).indexOf('Constructor') > 0 && (t = !1)), {
                                            corsType: e,
                                            corsCookiesEnabled: t
                                        };
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_5cce771e501aaa2d)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_5cce771e501aaa2d));
                                    if ($___old_6b6920217e84a610)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_6b6920217e84a610));
                                }
                            }(),
                            getCORSInstance: function () {
                                const $___old_008110bc8c85d813 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_69b44a03337102c9 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                try {
                                    if ($___old_008110bc8c85d813)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d2252eb400e70eb8.XMLHttpRequest));
                                    if ($___old_69b44a03337102c9)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d2252eb400e70eb8.XMLHttpRequest));
                                    return function () {
                                        return 'none' === this.corsMetadata.corsType ? null : new C[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_008110bc8c85d813)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_008110bc8c85d813));
                                    if ($___old_69b44a03337102c9)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_69b44a03337102c9));
                                }
                            },
                            fireCORS: function (t, n, i) {
                                function r(e) {
                                    var n;
                                    try {
                                        if ((n = JSON.parse(e)) !== Object(n))
                                            return void a.handleCORSError(t, null, 'Response is not JSON');
                                    } catch (e) {
                                        return void a.handleCORSError(t, e, 'Error parsing response as JSON');
                                    }
                                    try {
                                        for (var i = t.callback, r = C, o = 0; o < i.length; o++)
                                            r = r[i[o]];
                                        r(n);
                                    } catch (e) {
                                        a.handleCORSError(t, e, 'Error forming callback function');
                                    }
                                }
                                var a = this;
                                n && (t.loadErrorHandler = n);
                                try {
                                    var o = this.getCORSInstance();
                                    o.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0), 'XMLHttpRequest' === this.corsMetadata.corsType && (o.withCredentials = !0, o.timeout = e.loadTimeout, o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), o.onreadystatechange = function () {
                                        4 === this.readyState && 200 === this.status && r(this.responseText);
                                    }), o.onerror = function (e) {
                                        a.handleCORSError(t, e, 'onerror');
                                    }, o.ontimeout = function (e) {
                                        a.handleCORSError(t, e, 'ontimeout');
                                    }, o.send(), e._log.requests.push(t.corsUrl);
                                } catch (e) {
                                    this.handleCORSError(t, e, 'try-catch');
                                }
                            },
                            handleCORSError: function (t, n, i) {
                                e.CORSErrors.push({
                                    corsData: t,
                                    error: n,
                                    description: i
                                }), t.loadErrorHandler && ('ontimeout' === i ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
                            }
                        };
                    }, ae = {
                        POST_MESSAGE_ENABLED: !!C.postMessage,
                        DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                        MILLIS_PER_DAY: 86400000,
                        ADOBE_MC: 'adobe_mc',
                        ADOBE_MC_SDID: 'adobe_mc_sdid',
                        VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                        ADOBE_MC_TTL_IN_MIN: 5,
                        VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                        FIRST_PARTY_SERVER_COOKIE: 's_ecid'
                    }, oe = function (e, t) {
                        var n = C.document;
                        return {
                            THROTTLE_START: 30000,
                            MAX_SYNCS_LENGTH: 649,
                            throttleTimerSet: !1,
                            id: null,
                            onPagePixels: [],
                            iframeHost: null,
                            getIframeHost: function (e) {
                                if ('string' == typeof e) {
                                    var t = e.split('/');
                                    return t[0] + '//' + t[2];
                                }
                            },
                            subdomain: null,
                            url: null,
                            getUrl: function () {
                                var t, i = 'http://fast.', r = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.origin);
                                return this.subdomain || (this.subdomain = 'nosubdomainreturned'), e.loadSSL && (i = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'), t = i + this.subdomain + '.demdex.net/dest5.html' + r, this.iframeHost = this.getIframeHost(t), this.id = 'destination_publishing_iframe_' + this.subdomain + '_' + e.idSyncContainerID, t;
                            },
                            checkDPIframeSrc: function () {
                                var t = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.href);
                                'string' == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = 'destination_publishing_iframe_' + (e._subdomain || this.subdomain || new Date().getTime()) + '_' + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t);
                            },
                            idCallNotProcesssed: null,
                            doAttachIframe: !1,
                            startedAttachingIframe: !1,
                            iframeHasLoaded: null,
                            iframeIdChanged: null,
                            newIframeCreated: null,
                            originalIframeHasLoadedAlready: null,
                            iframeLoadedCallbacks: [],
                            regionChanged: !1,
                            timesRegionChanged: 0,
                            sendingMessages: !1,
                            messages: [],
                            messagesPosted: [],
                            messagesReceived: [],
                            messageSendingInterval: ae.POST_MESSAGE_ENABLED ? null : 100,
                            onPageDestinationsFired: [],
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function () {
                                return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls);
                            },
                            readyToAttachIframe: function () {
                                return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && 'nosubdomainreturned' !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe;
                            },
                            attachIframe: function () {
                                function e() {
                                    r = n.createElement('iframe'), r.sandbox = 'allow-scripts allow-same-origin', r.title = 'Adobe ID Syncing iFrame', r.id = i.id, r.name = i.id + '_name', r.style.cssText = 'display: none; width: 0; height: 0;', r.src = i.url, i.newIframeCreated = !0, t(), n.body.appendChild(r);
                                }
                                function t(e) {
                                    r.addEventListener('load', function () {
                                        r.className = 'aamIframeLoaded', i.iframeHasLoaded = !0, i.fireIframeLoadedCallbacks(e), i.requestToProcess();
                                    });
                                }
                                this.startedAttachingIframe = !0;
                                var i = this, r = n.getElementById(this.id);
                                r ? 'IFRAME' !== r.nodeName ? (this.id += '_2', this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, 'aamIframeLoaded' !== r.className ? (this.originalIframeHasLoadedAlready = !1, t('The destination publishing iframe already exists from a different library, but hadn\'t loaded yet.')) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = r, this.fireIframeLoadedCallbacks('The destination publishing iframe already exists from a different library, and had loaded alresady.'), this.requestToProcess())) : e(), this.iframe = r;
                            },
                            fireIframeLoadedCallbacks: function (e) {
                                this.iframeLoadedCallbacks.forEach(function (t) {
                                    'function' == typeof t && t({ message: e || 'The destination publishing iframe was attached and loaded successfully.' });
                                }), this.iframeLoadedCallbacks = [];
                            },
                            requestToProcess: function (t) {
                                function n() {
                                    r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t);
                                }
                                var i, r = this;
                                if (t === Object(t) && t.ibs)
                                    if (i = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
                                        var a, o, s, c = !1;
                                        for (a = 0, o = this.jsonForComparison.length; a < o; a++)
                                            if (s = this.jsonForComparison[a], i === JSON.stringify(s.ibs || [])) {
                                                c = !0;
                                                break;
                                            }
                                        c ? this.jsonDuplicates.push(t) : n();
                                    } else
                                        n();
                                if ((this.receivedThirdPartyCookiesNotification || !ae.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                                    var u = this.jsonWaiting.shift();
                                    this.process(u), this.requestToProcess();
                                }
                                e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function () {
                                    r.messageSendingInterval = ae.POST_MESSAGE_ENABLED ? null : 150;
                                }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (t, n) {
                                var i = e._getField('MCAAMLH'), r = t.d_region || t.dcs_region;
                                return i ? r && (e._setFieldExpire('MCAAMLH', n), e._setField('MCAAMLH', r), parseInt(i, 10) !== r && (this.regionChanged = !0, this.timesRegionChanged++, e._setField('MCSYNCSOP', ''), e._setField('MCSYNCS', ''), i = r)) : (i = r) && (e._setFieldExpire('MCAAMLH', n), e._setField('MCAAMLH', i)), i || (i = ''), i;
                            },
                            processSyncOnPage: function (e) {
                                var t, n, i, r;
                                if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                    for (i = 0; i < n; i++)
                                        r = t[i], r.syncOnPage && this.checkFirstPartyCookie(r, '', 'syncOnPage');
                            },
                            process: function (e) {
                                var t, n, i, r, a, o = encodeURIComponent, s = !1;
                                if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                    for (s = !0, i = 0; i < n; i++)
                                        r = t[i], a = [
                                            o('ibs'),
                                            o(r.id || ''),
                                            o(r.tag || ''),
                                            V.encodeAndBuildRequest(r.url || [], ','),
                                            o(r.ttl || ''),
                                            '',
                                            '',
                                            r.fireURLSync ? 'true' : 'false'
                                        ], r.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(a.join('|')) : r.fireURLSync && this.checkFirstPartyCookie(r, a.join('|')));
                                s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (t, n, i) {
                                var r = 'syncOnPage' === i, a = r ? 'MCSYNCSOP' : 'MCSYNCS';
                                e._readVisitor();
                                var o, s, c = e._getField(a), u = !1, l = !1, d = Math.ceil(new Date().getTime() / ae.MILLIS_PER_DAY);
                                c ? (o = c.split('*'), s = this.pruneSyncData(o, t.id, d), u = s.dataPresent, l = s.dataValid, u && l || this.fireSync(r, t, n, o, a, d)) : (o = [], this.fireSync(r, t, n, o, a, d));
                            },
                            pruneSyncData: function (e, t, n) {
                                var i, r, a, o = !1, s = !1;
                                for (r = 0; r < e.length; r++)
                                    i = e[r], a = parseInt(i.split('-')[1], 10), i.match('^' + t + '-') ? (o = !0, n < a ? s = !0 : (e.splice(r, 1), r--)) : n >= a && (e.splice(r, 1), r--);
                                return {
                                    dataPresent: o,
                                    dataValid: s
                                };
                            },
                            manageSyncsSize: function (e) {
                                if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                                    for (e.sort(function (e, t) {
                                            return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
                                        }); e.join('*').length > this.MAX_SYNCS_LENGTH;)
                                        e.shift();
                            },
                            fireSync: function (t, n, i, r, a, o) {
                                var s = this;
                                if (t) {
                                    if ('img' === n.tag) {
                                        var c, u, l, d, f = n.url, p = e.loadSSL ? 'https:' : 'http:';
                                        for (c = 0, u = f.length; c < u; c++) {
                                            l = f[c], d = /^\/\//.test(l);
                                            var g = new Image();
                                            g.addEventListener('load', function (t, n, i, r) {
                                                return function () {
                                                    s.onPagePixels[t] = null, e._readVisitor();
                                                    var o, c = e._getField(a), u = [];
                                                    if (c) {
                                                        o = c.split('*');
                                                        var l, d, f;
                                                        for (l = 0, d = o.length; l < d; l++)
                                                            f = o[l], f.match('^' + n.id + '-') || u.push(f);
                                                    }
                                                    s.setSyncTrackingData(u, n, i, r);
                                                };
                                            }(this.onPagePixels.length, n, a, o)), g.src = (d ? p : '') + l, this.onPagePixels.push(g);
                                        }
                                    }
                                } else
                                    this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
                            },
                            addMessage: function (t) {
                                var n = encodeURIComponent, i = n(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
                                this.messages.push((ae.POST_MESSAGE_ENABLED ? '' : i) + t);
                            },
                            setSyncTrackingData: function (t, n, i, r) {
                                t.push(n.id + '-' + (r + Math.ceil(n.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(i, t.join('*'));
                            },
                            sendMessages: function () {
                                var e, t = this, n = '', i = encodeURIComponent;
                                this.regionChanged && (n = i('---destpub-clear-dextp---'), this.regionChanged = !1), this.messages.length ? ae.POST_MESSAGE_ENABLED ? (e = n + i('---destpub-combined---') + this.messages.join('%01'), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(n + e), setTimeout(function () {
                                    t.sendMessages();
                                }, this.messageSendingInterval)) : this.sendingMessages = !1;
                            },
                            postMessage: function (e) {
                                ne.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e);
                            },
                            receiveMessage: function (e) {
                                var t, n = /^---destpub-to-parent---/;
                                'string' == typeof e && n.test(e) && (t = e.replace(n, '').split('|'), 'canSetThirdPartyCookies' === t[0] && (this.canSetThirdPartyCookies = 'true' === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e));
                            },
                            processIDCallData: function (i) {
                                (null == this.url || i.subdomain && 'nosubdomainreturned' === this.subdomain) && ('string' == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = i.subdomain || '', this.url = this.getUrl()), i.ibs instanceof Array && i.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || 'complete' === n.readyState || 'loaded' === n.readyState) && this.attachIframe() : this.attachIframeASAP()), 'function' == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(i) : this.requestToProcess(i), 'function' == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(i);
                            },
                            canMakeSyncIDCall: function (t, n) {
                                return e._forceSyncIDCall || !t || n - t > ae.DAYS_BETWEEN_SYNC_ID_CALLS;
                            },
                            attachIframeASAP: function () {
                                function e() {
                                    t.startedAttachingIframe || (n.body ? t.attachIframe() : setTimeout(e, 30));
                                }
                                var t = this;
                                e();
                            }
                        };
                    }, se = {
                        audienceManagerServer: {},
                        audienceManagerServerSecure: {},
                        cookieDomain: {},
                        cookieLifetime: {},
                        cookieName: {},
                        doesOptInApply: {},
                        disableThirdPartyCalls: {},
                        discardTrackingServerECID: {},
                        idSyncAfterIDCallResult: {},
                        idSyncAttachIframeOnWindowLoad: {},
                        idSyncContainerID: {},
                        idSyncDisable3rdPartySyncing: {},
                        disableThirdPartyCookies: {},
                        idSyncDisableSyncs: {},
                        disableIdSyncs: {},
                        idSyncIDCallResult: {},
                        idSyncSSLUseAkamai: {},
                        isCoopSafe: {},
                        isIabContext: {},
                        isOptInStorageEnabled: {},
                        loadSSL: {},
                        loadTimeout: {},
                        marketingCloudServer: {},
                        marketingCloudServerSecure: {},
                        optInCookieDomain: {},
                        optInStorageExpiry: {},
                        overwriteCrossDomainMCIDAndAID: {},
                        preOptInApprovals: {},
                        previousPermissions: {},
                        resetBeforeVersion: {},
                        sdidParamExpiry: {},
                        serverState: {},
                        sessionCookieName: {},
                        secureCookie: {},
                        takeTimeoutMetrics: {},
                        trackingServer: {},
                        trackingServerSecure: {},
                        whitelistIframeDomains: {},
                        whitelistParentDomain: {}
                    }, ce = {
                        getConfigNames: function () {
                            return Object.keys(se);
                        },
                        getConfigs: function () {
                            return se;
                        },
                        normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                        }
                    }, ue = function (e) {
                        var t = {};
                        return e.on = function (e, n, i) {
                            if (!n || 'function' != typeof n)
                                throw new Error('[ON] Callback should be a function.');
                            t.hasOwnProperty(e) || (t[e] = []);
                            var r = t[e].push({
                                callback: n,
                                context: i
                            }) - 1;
                            return function () {
                                t[e].splice(r, 1), t[e].length || delete t[e];
                            };
                        }, e.off = function (e, n) {
                            t.hasOwnProperty(e) && (t[e] = t[e].filter(function (e) {
                                if (e.callback !== n)
                                    return e;
                            }));
                        }, e.publish = function (e) {
                            if (t.hasOwnProperty(e)) {
                                var n = [].slice.call(arguments, 1);
                                t[e].slice(0).forEach(function (e) {
                                    e.callback.apply(e.context, n);
                                });
                            }
                        }, e.publish;
                    }, le = {
                        PENDING: 'pending',
                        CHANGED: 'changed',
                        COMPLETE: 'complete'
                    }, de = {
                        AAM: 'aam',
                        ADCLOUD: 'adcloud',
                        ANALYTICS: 'aa',
                        CAMPAIGN: 'campaign',
                        ECID: 'ecid',
                        LIVEFYRE: 'livefyre',
                        TARGET: 'target',
                        MEDIA_ANALYTICS: 'mediaaa'
                    }, fe = (I = {}, t(I, de.AAM, 565), t(I, de.ECID, 565), I), pe = (S = {}, t(S, de.AAM, [
                        1,
                        10
                    ]), t(S, de.ECID, [
                        1,
                        10
                    ]), S), ge = [
                        'videoaa',
                        'iabConsentHash'
                    ], me = function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    }(de), he = function () {
                        var e = {};
                        return e.callbacks = Object.create(null), e.add = function (t, n) {
                            if (!u(n))
                                throw new Error('[callbackRegistryFactory] Make sure callback is a function or an array of functions.');
                            e.callbacks[t] = e.callbacks[t] || [];
                            var i = e.callbacks[t].push(n) - 1;
                            return function () {
                                e.callbacks[t].splice(i, 1);
                            };
                        }, e.execute = function (t, n) {
                            if (e.callbacks[t]) {
                                n = void 0 === n ? [] : n, n = n instanceof Array ? n : [n];
                                try {
                                    for (; e.callbacks[t].length;) {
                                        var i = e.callbacks[t].shift();
                                        'function' == typeof i ? i.apply(null, n) : i instanceof Array && i[1].apply(i[0], n);
                                    }
                                    delete e.callbacks[t];
                                } catch (e) {
                                }
                            }
                        }, e.executeAll = function (t, n) {
                            (n || t && !c(t)) && Object.keys(e.callbacks).forEach(function (n) {
                                var i = void 0 !== t[n] ? t[n] : '';
                                e.execute(n, i);
                            }, e);
                        }, e.hasCallbacks = function () {
                            return Boolean(Object.keys(e.callbacks).length);
                        }, e;
                    }, _e = function () {
                    }, Ce = function (e) {
                        var t = window, n = t.console;
                        return !!n && 'function' == typeof n[e];
                    }, Ie = function (e, t, n) {
                        return n() ? function () {
                            if (Ce(e)) {
                                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                                    i[r] = arguments[r];
                                console[e].apply(console, [t].concat(i));
                            }
                        } : _e;
                    }, Se = l, ve = function () {
                        for (var e = [], t = 0; t < 256; t++) {
                            for (var n = t, i = 0; i < 8; i++)
                                n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                            e.push(n);
                        }
                        return function (t, n) {
                            t = unescape(encodeURIComponent(t)), n || (n = 0), n ^= -1;
                            for (var i = 0; i < t.length; i++) {
                                var r = 255 & (n ^ t.charCodeAt(i));
                                n = n >>> 8 ^ e[r];
                            }
                            return (n ^= -1) >>> 0;
                        };
                    }(), De = new Se('[ADOBE OPT-IN]'), ye = function (t, n) {
                        return e(t) === n;
                    }, Ae = function (e, t) {
                        return e instanceof Array ? e : ye(e, 'string') ? [e] : t || [];
                    }, be = function (e) {
                        var t = Object.keys(e);
                        return !!t.length && t.every(function (t) {
                            return !0 === e[t];
                        });
                    }, Oe = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return !(!e || Ee(e)) && Ae(e).every(function (e) {
                            return me.indexOf(e) > -1 || t && ge.indexOf(e) > -1;
                        });
                    }, Me = function (e, t) {
                        return e.reduce(function (e, n) {
                            return e[n] = t, e;
                        }, {});
                    }, ke = function (e) {
                        return JSON.parse(JSON.stringify(e));
                    }, Ee = function (e) {
                        return '[object Array]' === Object.prototype.toString.call(e) && !e.length;
                    }, Te = function (e) {
                        if (Re(e))
                            return e;
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            return {};
                        }
                    }, Pe = function (e) {
                        return void 0 === e || (Re(e) ? Oe(Object.keys(e), !0) : Le(e));
                    }, Le = function (e) {
                        try {
                            var t = JSON.parse(e);
                            return !!e && ye(e, 'string') && Oe(Object.keys(t), !0);
                        } catch (e) {
                            return !1;
                        }
                    }, Re = function (e) {
                        return null !== e && ye(e, 'object') && !1 === Array.isArray(e);
                    }, we = function () {
                    }, Fe = function (e) {
                        return ye(e, 'function') ? e() : e;
                    }, Ne = function (e, t) {
                        Pe(e) || De.error(''.concat(t));
                    }, xe = function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    }, je = function (e) {
                        return xe(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                        });
                    }, Ve = function (e) {
                        return function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.command, i = t.params, r = void 0 === i ? {} : i, a = t.callback, o = void 0 === a ? we : a;
                            if (!n || -1 === n.indexOf('.'))
                                throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                                var s = n.split('.'), c = e[s[0]], u = s[1];
                                if (!c || 'function' != typeof c[u])
                                    throw new Error('Make sure the plugin and API name exist.');
                                var l = Object.assign(r, { callback: o });
                                c[u].call(c, l);
                            } catch (e) {
                                De.error('[execute] Something went wrong: ' + e.message);
                            }
                        };
                    };
                f.prototype = Object.create(Error.prototype), f.prototype.constructor = f;
                var He = 'fetchPermissions', Ue = '[OptIn#registerPlugin] Plugin is invalid.';
                p.Categories = de, p.TimeoutError = f;
                var Be = Object.freeze({
                        OptIn: p,
                        IabPlugin: _
                    }), Ge = function (e, t) {
                        e.publishDestinations = function (n) {
                            var i = arguments[1], r = arguments[2];
                            try {
                                r = 'function' == typeof r ? r : n.callback;
                            } catch (e) {
                                r = function () {
                                };
                            }
                            var a = t;
                            if (!a.readyToAttachIframePreliminary())
                                return void r({ error: 'The destination publishing iframe is disabled in the Visitor library.' });
                            if ('string' == typeof n) {
                                if (!n.length)
                                    return void r({ error: 'subdomain is not a populated string.' });
                                if (!(i instanceof Array && i.length))
                                    return void r({ error: 'messages is not a populated array.' });
                                var o = !1;
                                if (i.forEach(function (e) {
                                        'string' == typeof e && e.length && (a.addMessage(e), o = !0);
                                    }), !o)
                                    return void r({ error: 'None of the messages are populated strings.' });
                            } else {
                                if (!V.isObject(n))
                                    return void r({ error: 'Invalid parameters passed.' });
                                var s = n;
                                if ('string' != typeof (n = s.subdomain) || !n.length)
                                    return void r({ error: 'config.subdomain is not a populated string.' });
                                var c = s.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                    return void r({ error: 'config.urlDestinations is not a populated array.' });
                                var u = [];
                                c.forEach(function (e) {
                                    V.isObject(e) && (e.hideReferrer ? e.message && a.addMessage(e.message) : u.push(e));
                                });
                                !function e() {
                                    u.length && setTimeout(function () {
                                        var t = new Image(), n = u.shift();
                                        t.src = n.url, a.onPageDestinationsFired.push(n), e();
                                    }, 100);
                                }();
                            }
                            a.iframe ? (r({ message: 'The destination publishing iframe is already attached and loaded.' }), a.requestToProcess()) : !e.subdomain && e._getField('MCMID') ? (a.subdomain = n, a.doAttachIframe = !0, a.url = a.getUrl(), a.readyToAttachIframe() ? (a.iframeLoadedCallbacks.push(function (e) {
                                r({ message: 'Attempted to attach and load the destination publishing iframe through this API call. Result: ' + (e.message || 'no result') });
                            }), a.attachIframe()) : r({ error: 'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.' })) : a.iframeLoadedCallbacks.push(function (e) {
                                r({ message: 'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' + (e.message || 'no result') });
                            });
                        };
                    }, Ye = function e(t) {
                        function n(e, t) {
                            return e >>> t | e << 32 - t;
                        }
                        for (var i, r, a = Math.pow, o = a(2, 32), s = '', c = [], u = 8 * t.length, l = e.h = e.h || [], d = e.k = e.k || [], f = d.length, p = {}, g = 2; f < 64; g++)
                            if (!p[g]) {
                                for (i = 0; i < 313; i += g)
                                    p[i] = g;
                                l[f] = a(g, 0.5) * o | 0, d[f++] = a(g, 1 / 3) * o | 0;
                            }
                        for (t += '\x80'; t.length % 64 - 56;)
                            t += '\0';
                        for (i = 0; i < t.length; i++) {
                            if ((r = t.charCodeAt(i)) >> 8)
                                return;
                            c[i >> 2] |= r << (3 - i) % 4 * 8;
                        }
                        for (c[c.length] = u / o | 0, c[c.length] = u, r = 0; r < c.length;) {
                            var m = c.slice(r, r += 16), h = l;
                            for (l = l.slice(0, 8), i = 0; i < 64; i++) {
                                var _ = m[i - 15], C = m[i - 2], I = l[0], S = l[4], v = l[7] + (n(S, 6) ^ n(S, 11) ^ n(S, 25)) + (S & l[5] ^ ~S & l[6]) + d[i] + (m[i] = i < 16 ? m[i] : m[i - 16] + (n(_, 7) ^ n(_, 18) ^ _ >>> 3) + m[i - 7] + (n(C, 17) ^ n(C, 19) ^ C >>> 10) | 0);
                                l = [v + ((n(I, 2) ^ n(I, 13) ^ n(I, 22)) + (I & l[1] ^ I & l[2] ^ l[1] & l[2])) | 0].concat(l), l[4] = l[4] + v | 0;
                            }
                            for (i = 0; i < 8; i++)
                                l[i] = l[i] + h[i] | 0;
                        }
                        for (i = 0; i < 8; i++)
                            for (r = 3; r + 1; r--) {
                                var D = l[i] >> 8 * r & 255;
                                s += (D < 16 ? 0 : '') + D.toString(16);
                            }
                        return s;
                    }, qe = function (e, t) {
                        return 'SHA-256' !== t && 'SHA256' !== t && 'sha256' !== t && 'sha-256' !== t || (e = Ye(e)), e;
                    }, We = function (e) {
                        return String(e).trim().toLowerCase();
                    }, Xe = Be.OptIn;
                V.defineGlobalNamespace(), window.adobe.OptInCategories = Xe.Categories;
                var Ke = function (t, n, i) {
                    function r() {
                        I._customerIDsHashChanged = !1;
                    }
                    function a(e) {
                        var t = e;
                        return function (e) {
                            var n = e || b.location.href;
                            try {
                                var i = I._extractParamFromUri(n, t);
                                if (i)
                                    return B.parsePipeDelimetedKeyValues(i);
                            } catch (e) {
                            }
                        };
                    }
                    function o(e) {
                        function t(e, t, n) {
                            e && e.match(ae.VALID_VISITOR_ID_REGEX) && (n === E && (A = !0), t(e));
                        }
                        t(e[E], I.setMarketingCloudVisitorID, E), I._setFieldExpire(F, -1), t(e[R], I.setAnalyticsVisitorID);
                    }
                    function s(e) {
                        e = e || {}, I._supplementalDataIDCurrent = e.supplementalDataIDCurrent || '', I._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, I._supplementalDataIDLast = e.supplementalDataIDLast || '', I._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {};
                    }
                    function c(e) {
                        function t(e, t, n) {
                            return n = n ? n += '|' : n, n += e + '=' + encodeURIComponent(t);
                        }
                        function n(e, n) {
                            var i = n[0], r = n[1];
                            return null != r && r !== N && (e = t(i, r, e)), e;
                        }
                        var i = e.reduce(n, '');
                        return function (e) {
                            var t = B.getTimestampInSeconds();
                            return e = e ? e += '|' : e, e += 'TS=' + t;
                        }(i);
                    }
                    function u(e) {
                        var t = e.minutesToLive, n = '';
                        return (I.idSyncDisableSyncs || I.disableIdSyncs) && (n = n || 'Error: id syncs have been disabled'), 'string' == typeof e.dpid && e.dpid.length || (n = n || 'Error: config.dpid is empty'), 'string' == typeof e.url && e.url.length || (n = n || 'Error: config.url is empty'), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (n = n || 'Error: config.minutesToLive needs to be a positive number')), {
                            error: n,
                            ttl: t
                        };
                    }
                    function l() {
                        return !!I.configs.doesOptInApply && !(S.optIn.isComplete && d());
                    }
                    function d() {
                        return I.configs.doesOptInApply && I.configs.isIabContext ? S.optIn.isApproved(S.optIn.Categories.ECID) && y : S.optIn.isApproved(S.optIn.Categories.ECID);
                    }
                    function f() {
                        [
                            ['getMarketingCloudVisitorID'],
                            [
                                'setCustomerIDs',
                                void 0
                            ],
                            [
                                'syncIdentity',
                                void 0
                            ],
                            ['getAnalyticsVisitorID'],
                            ['getAudienceManagerLocationHint'],
                            ['getLocationHint'],
                            ['getAudienceManagerBlob']
                        ].forEach(function (e) {
                            var t = e[0], n = 2 === e.length ? e[1] : '', i = I[t];
                            I[t] = function (e) {
                                return d() && I.isAllowed() ? i.apply(I, arguments) : ('function' == typeof e && I._callCallback(e, [n]), n);
                            };
                        });
                    }
                    function p() {
                        var e = I._getAudienceManagerURLData(), t = e.url;
                        return I._loadData(k, t, null, e);
                    }
                    function g(e, t) {
                        if (y = !0, e)
                            throw new Error('[IAB plugin] : ' + e);
                        t && t.gdprApplies && (v = t.consentString, D = t.hasConsentChangedSinceLastCmpPull ? 1 : 0), p(), _();
                    }
                    function m(e, t) {
                        if (y = !0, e)
                            throw new Error('[IAB plugin] : ' + e);
                        t.gdprApplies && (v = t.consentString, D = t.hasConsentChangedSinceLastCmpPull ? 1 : 0), I.init(), _();
                    }
                    function h() {
                        S.optIn.isComplete && (S.optIn.isApproved(S.optIn.Categories.ECID) ? I.configs.isIabContext ? S.optIn.execute({
                            command: 'iabPlugin.fetchConsentData',
                            callback: m
                        }) : (I.init(), _()) : I.configs.isIabContext ? S.optIn.execute({
                            command: 'iabPlugin.fetchConsentData',
                            callback: g
                        }) : (f(), _()));
                    }
                    function _() {
                        S.optIn.off('complete', h);
                    }
                    if (!i || i.split('').reverse().join('') !== t)
                        throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
                    var I = this, S = window.adobe, v = '', D = 0, y = !1, A = !1;
                    I.version = '5.0.1';
                    var b = C, O = b.Visitor;
                    O.version = I.version, O.AuthState = T.AUTH_STATE, O.OptOut = T.OPT_OUT, b.s_c_in || (b.s_c_il = [], b.s_c_in = 0), I._c = 'Visitor', I._il = b.s_c_il, I._in = b.s_c_in, I._il[I._in] = I, b.s_c_in++, I._instanceType = 'regular', I._log = { requests: [] }, I.marketingCloudOrgID = t, I.cookieName = 'AMCV_' + t, I.sessionCookieName = 'AMCVS_' + t, I.cookieDomain = Z(), I.loadSSL = !0, I.loadTimeout = 30000, I.CORSErrors = [], I.marketingCloudServer = I.audienceManagerServer = 'dpm.demdex.net', I.sdidParamExpiry = 30;
                    var M = null, k = 'MC', E = 'MCMID', P = 'MCIDTS', L = 'A', R = 'MCAID', w = 'AAM', F = 'MCAAMB', N = 'NONE', x = function (e) {
                            return !Object.prototype[e];
                        }, j = re(I);
                    I.FIELDS = T.FIELDS, I.cookieRead = function (e) {
                        return $.get(e);
                    }, I.cookieWrite = function (e, t, n) {
                        var i = I.cookieLifetime ? ('' + I.cookieLifetime).toUpperCase() : '', r = !1;
                        return I.configs && I.configs.secureCookie && 'https:' === location.protocol && (r = !0), $.set(e, '' + t, {
                            expires: n,
                            domain: I.cookieDomain,
                            cookieLifetime: i,
                            secure: r
                        });
                    }, I.resetState = function (e) {
                        e ? I._mergeServerState(e) : s();
                    }, I._isAllowedDone = !1, I._isAllowedFlag = !1, I.isAllowed = function () {
                        return I._isAllowedDone || (I._isAllowedDone = !0, (I.cookieRead(I.cookieName) || I.cookieWrite(I.cookieName, 'T', 1)) && (I._isAllowedFlag = !0)), 'T' === I.cookieRead(I.cookieName) && I._helpers.removeCookie(I.cookieName), I._isAllowedFlag;
                    }, I.setMarketingCloudVisitorID = function (e) {
                        I._setMarketingCloudFields(e);
                    }, I._use1stPartyMarketingCloudServer = !1, I.getMarketingCloudVisitorID = function (e, t) {
                        I.marketingCloudServer && I.marketingCloudServer.indexOf('.demdex.net') < 0 && (I._use1stPartyMarketingCloudServer = !0);
                        var n = I._getAudienceManagerURLData('_setMarketingCloudFields'), i = n.url;
                        return I._getRemoteField(E, i, e, t, n);
                    };
                    var H = function (e, t) {
                        var n = {};
                        I.getMarketingCloudVisitorID(function () {
                            t.forEach(function (e) {
                                n[e] = I._getField(e, !0);
                            }), -1 !== t.indexOf('MCOPTOUT') ? I.isOptedOut(function (t) {
                                n.MCOPTOUT = t, e(n);
                            }, null, !0) : e(n);
                        }, !0);
                    };
                    I.getVisitorValues = function (e, t) {
                        var n = {
                                MCMID: {
                                    fn: I.getMarketingCloudVisitorID,
                                    args: [!0],
                                    context: I
                                },
                                MCOPTOUT: {
                                    fn: I.isOptedOut,
                                    args: [
                                        void 0,
                                        !0
                                    ],
                                    context: I
                                },
                                MCAID: {
                                    fn: I.getAnalyticsVisitorID,
                                    args: [!0],
                                    context: I
                                },
                                MCAAMLH: {
                                    fn: I.getAudienceManagerLocationHint,
                                    args: [!0],
                                    context: I
                                },
                                MCAAMB: {
                                    fn: I.getAudienceManagerBlob,
                                    args: [!0],
                                    context: I
                                }
                            }, i = t && t.length ? V.pluck(n, t) : n;
                        t && -1 === t.indexOf('MCAID') ? H(e, t) : Q(i, e);
                    }, I._currentCustomerIDs = {}, I._customerIDsHashChanged = !1, I._newCustomerIDsHash = '', I.setCustomerIDs = function (t, n) {
                        if (!I.isOptedOut() && t) {
                            if (!V.isObject(t) || V.isObjectEmpty(t))
                                return !1;
                            I._readVisitor();
                            var i, a, o, s;
                            for (i in t)
                                if (x(i) && (I._currentCustomerIDs.dataSources = I._currentCustomerIDs.dataSources || {}, a = t[i], n = a.hasOwnProperty('hashType') ? a.hashType : n, a))
                                    if ('object' === e(a)) {
                                        var c = {};
                                        if (a.id) {
                                            if (n) {
                                                if (!(s = qe(We(a.id), n)))
                                                    return;
                                                a.id = s, c.hashType = n;
                                            }
                                            c.id = a.id;
                                        }
                                        void 0 != a.authState && (c.authState = a.authState), I._currentCustomerIDs.dataSources[i] = c;
                                    } else if (n) {
                                        if (!(s = qe(We(a), n)))
                                            return;
                                        I._currentCustomerIDs.dataSources[i] = {
                                            id: s,
                                            hashType: n
                                        };
                                    } else
                                        I._currentCustomerIDs.dataSources[i] = { id: a };
                            var u = I.getCustomerIDs(!0), l = I._getField('MCCIDH'), d = '';
                            l || (l = 0);
                            for (o in u) {
                                var f = u[o];
                                if (!V.isObjectEmpty(f))
                                    for (i in f)
                                        x(i) && (a = f[i], d += (d ? '|' : '') + i + '|' + (a.id ? a.id : '') + (a.authState ? a.authState : ''));
                            }
                            I._newCustomerIDsHash = String(I._hash(d)), I._newCustomerIDsHash !== l && (I._customerIDsHashChanged = !0, I._mapCustomerIDs(r));
                        }
                    }, I.syncIdentity = function (t, n) {
                        if (!I.isOptedOut() && t) {
                            if (!V.isObject(t) || V.isObjectEmpty(t))
                                return !1;
                            I._readVisitor();
                            var i, a, o, s, c;
                            for (i in t)
                                if (x(i) && (I._currentCustomerIDs.nameSpaces = I._currentCustomerIDs.nameSpaces || {}, a = t[i], n = a.hasOwnProperty('hashType') ? a.hashType : n, a && 'object' === e(a))) {
                                    var u = {};
                                    if (a.id) {
                                        if (n) {
                                            if (!(o = qe(We(a.id), n)))
                                                return;
                                            a.id = o, u.hashType = n;
                                        }
                                        u.id = a.id;
                                    }
                                    void 0 != a.authState && (u.authState = a.authState), a.dataSource && (I._currentCustomerIDs.dataSources = I._currentCustomerIDs.dataSources || {}, s = a.dataSource, I._currentCustomerIDs.dataSources[s] = u), I._currentCustomerIDs.nameSpaces[i] = u;
                                }
                            var l = I.getCustomerIDs(!0), d = I._getField('MCCIDH'), f = '';
                            d || (d = '0');
                            for (c in l) {
                                var p = l[c];
                                if (!V.isObjectEmpty(p))
                                    for (i in p)
                                        x(i) && (a = p[i], f += (f ? '|' : '') + i + '|' + (a.id ? a.id : '') + (a.authState ? a.authState : ''));
                            }
                            I._newCustomerIDsHash = String(I._hash(f)), I._newCustomerIDsHash !== d && (I._customerIDsHashChanged = !0, I._mapCustomerIDs(r));
                        }
                    }, I.getCustomerIDs = function (e) {
                        I._readVisitor();
                        var t, n, i = {
                                dataSources: {},
                                nameSpaces: {}
                            }, r = I._currentCustomerIDs.dataSources;
                        for (t in r)
                            x(t) && (n = r[t], n.id && (i.dataSources[t] || (i.dataSources[t] = {}), i.dataSources[t].id = n.id, void 0 != n.authState ? i.dataSources[t].authState = n.authState : i.dataSources[t].authState = O.AuthState.UNKNOWN, n.hashType && (i.dataSources[t].hashType = n.hashType)));
                        var a = I._currentCustomerIDs.nameSpaces;
                        for (t in a)
                            x(t) && (n = a[t], n.id && (i.nameSpaces[t] || (i.nameSpaces[t] = {}), i.nameSpaces[t].id = n.id, void 0 != n.authState ? i.nameSpaces[t].authState = n.authState : i.nameSpaces[t].authState = O.AuthState.UNKNOWN, n.hashType && (i.nameSpaces[t].hashType = n.hashType)));
                        return e ? i : i.dataSources;
                    }, I.setAnalyticsVisitorID = function (e) {
                        I._setAnalyticsFields(e);
                    }, I.getAnalyticsVisitorID = function (e, t, n) {
                        if (!B.isTrackingServerPopulated() && !n)
                            return I._callCallback(e, ['']), '';
                        var i = '';
                        if (n || (i = I.getMarketingCloudVisitorID(function (t) {
                                I.getAnalyticsVisitorID(e, !0);
                            })), i || n) {
                            var r = n ? I.marketingCloudServer : I.trackingServer, a = '';
                            I.loadSSL && (n ? I.marketingCloudServerSecure && (r = I.marketingCloudServerSecure) : I.trackingServerSecure && (r = I.trackingServerSecure));
                            var o = {};
                            if (r) {
                                var s = 'http' + (I.loadSSL ? 's' : '') + '://' + r + '/id', c = 'd_visid_ver=' + I.version + '&mcorgid=' + encodeURIComponent(I.marketingCloudOrgID) + (i ? '&mid=' + encodeURIComponent(i) : '') + (I.idSyncDisable3rdPartySyncing || I.disableThirdPartyCookies ? '&d_coppa=true' : ''), u = [
                                        's_c_il',
                                        I._in,
                                        '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields'
                                    ];
                                a = s + '?' + c + '&callback=s_c_il%5B' + I._in + '%5D._set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields', o.corsUrl = s + '?' + c, o.callback = u;
                            }
                            return o.url = a, I._getRemoteField(n ? E : R, a, e, t, o);
                        }
                        return '';
                    }, I.getAudienceManagerLocationHint = function (e, t) {
                        if (I.getMarketingCloudVisitorID(function (t) {
                                I.getAudienceManagerLocationHint(e, !0);
                            })) {
                            var n = I._getField(R);
                            if (!n && B.isTrackingServerPopulated() && (n = I.getAnalyticsVisitorID(function (t) {
                                    I.getAudienceManagerLocationHint(e, !0);
                                })), n || !B.isTrackingServerPopulated()) {
                                var i = I._getAudienceManagerURLData(), r = i.url;
                                return I._getRemoteField('MCAAMLH', r, e, t, i);
                            }
                        }
                        return '';
                    }, I.getLocationHint = I.getAudienceManagerLocationHint, I.getAudienceManagerBlob = function (e, t) {
                        if (I.getMarketingCloudVisitorID(function (t) {
                                I.getAudienceManagerBlob(e, !0);
                            })) {
                            var n = I._getField(R);
                            if (!n && B.isTrackingServerPopulated() && (n = I.getAnalyticsVisitorID(function (t) {
                                    I.getAudienceManagerBlob(e, !0);
                                })), n || !B.isTrackingServerPopulated()) {
                                var i = I._getAudienceManagerURLData(), r = i.url;
                                return I._customerIDsHashChanged && I._setFieldExpire(F, -1), I._getRemoteField(F, r, e, t, i);
                            }
                        }
                        return '';
                    }, I._supplementalDataIDCurrent = '', I._supplementalDataIDCurrentConsumed = {}, I._supplementalDataIDLast = '', I._supplementalDataIDLastConsumed = {}, I.getSupplementalDataID = function (e, t) {
                        I._supplementalDataIDCurrent || t || (I._supplementalDataIDCurrent = I._generateID(1));
                        var n = I._supplementalDataIDCurrent;
                        return I._supplementalDataIDLast && !I._supplementalDataIDLastConsumed[e] ? (n = I._supplementalDataIDLast, I._supplementalDataIDLastConsumed[e] = !0) : n && (I._supplementalDataIDCurrentConsumed[e] && (I._supplementalDataIDLast = I._supplementalDataIDCurrent, I._supplementalDataIDLastConsumed = I._supplementalDataIDCurrentConsumed, I._supplementalDataIDCurrent = n = t ? '' : I._generateID(1), I._supplementalDataIDCurrentConsumed = {}), n && (I._supplementalDataIDCurrentConsumed[e] = !0)), n;
                    };
                    var U = !1;
                    I._liberatedOptOut = null, I.getOptOut = function (e, t) {
                        var n = I._getAudienceManagerURLData('_setMarketingCloudFields'), i = n.url;
                        if (d())
                            return I._getRemoteField('MCOPTOUT', i, e, t, n);
                        if (I._registerCallback('liberatedOptOut', e), null !== I._liberatedOptOut)
                            return I._callAllCallbacks('liberatedOptOut', [I._liberatedOptOut]), U = !1, I._liberatedOptOut;
                        if (U)
                            return null;
                        U = !0;
                        var r = 'liberatedGetOptOut';
                        return n.corsUrl = n.corsUrl.replace(/\.demdex\.net\/id\?/, '.demdex.net/optOutStatus?'), n.callback = [r], C[r] = function (e) {
                            if (e === Object(e)) {
                                var t, n, i = V.parseOptOut(e, t, N);
                                t = i.optOut, n = 1000 * i.d_ottl, I._liberatedOptOut = t, setTimeout(function () {
                                    I._liberatedOptOut = null;
                                }, n);
                            }
                            I._callAllCallbacks('liberatedOptOut', [t]), U = !1;
                        }, j.fireCORS(n), null;
                    }, I.isOptedOut = function (e, t, n) {
                        t || (t = O.OptOut.GLOBAL);
                        var i = I.getOptOut(function (n) {
                            var i = n === O.OptOut.GLOBAL || n.indexOf(t) >= 0;
                            I._callCallback(e, [i]);
                        }, n);
                        return i ? i === O.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
                    }, I._fields = null, I._fieldsExpired = null, I._hash = function (e) {
                        var t, n, i = 0;
                        if (e)
                            for (t = 0; t < e.length; t++)
                                n = e.charCodeAt(t), i = (i << 5) - i + n, i &= i;
                        return i;
                    }, I._generateID = ie, I._generateLocalMID = function () {
                        var e = I._generateID(0);
                        return q.isClientSideMarketingCloudVisitorID = !0, e;
                    }, I._callbackList = null, I._callCallback = function (e, t) {
                        try {
                            'function' == typeof e ? e.apply(b, t) : e[1].apply(e[0], t);
                        } catch (e) {
                        }
                    }, I._registerCallback = function (e, t) {
                        t && (null == I._callbackList && (I._callbackList = {}), void 0 == I._callbackList[e] && (I._callbackList[e] = []), I._callbackList[e].push(t));
                    }, I._callAllCallbacks = function (e, t) {
                        if (null != I._callbackList) {
                            var n = I._callbackList[e];
                            if (n)
                                for (; n.length > 0;)
                                    I._callCallback(n.shift(), t);
                        }
                    }, I._addQuerystringParam = function (e, t, n, i) {
                        var r = encodeURIComponent(t) + '=' + encodeURIComponent(n), a = B.parseHash(e), o = B.hashlessUrl(e);
                        if (-1 === o.indexOf('?'))
                            return o + '?' + r + a;
                        var s = o.split('?'), c = s[0] + '?', u = s[1];
                        return c + B.addQueryParamAtLocation(u, r, i) + a;
                    }, I._extractParamFromUri = function (e, t) {
                        var n = new RegExp('[\\?&#]' + t + '=([^&#]*)'), i = n.exec(e);
                        if (i && i.length)
                            return decodeURIComponent(i[1]);
                    }, I._parseAdobeMcFromUrl = a(ae.ADOBE_MC), I._parseAdobeMcSdidFromUrl = a(ae.ADOBE_MC_SDID), I._attemptToPopulateSdidFromUrl = function (e) {
                        var n = I._parseAdobeMcSdidFromUrl(e), i = 1000000000;
                        n && n.TS && (i = B.getTimestampInSeconds() - n.TS), n && n.SDID && n.MCORGID === t && i < I.sdidParamExpiry && (I._supplementalDataIDCurrent = n.SDID, I._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0);
                    }, I._attemptToPopulateIdsFromUrl = function () {
                        var e = I._parseAdobeMcFromUrl();
                        if (e && e.TS) {
                            var n = B.getTimestampInSeconds(), i = n - e.TS;
                            if (Math.floor(i / 60) > ae.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t)
                                return;
                            o(e);
                        }
                    }, I._mergeServerState = function (e) {
                        if (e)
                            try {
                                if (e = function (e) {
                                        return B.isObject(e) ? e : JSON.parse(e);
                                    }(e), e[I.marketingCloudOrgID]) {
                                    var t = e[I.marketingCloudOrgID];
                                    !function (e) {
                                        B.isObject(e) && I.setCustomerIDs(e);
                                    }(t.customerIDs), s(t.sdid);
                                }
                            } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                            }
                    }, I._timeout = null, I._loadData = function (e, t, n, i) {
                        t = I._addQuerystringParam(t, 'd_fieldgroup', e, 1), i.url = I._addQuerystringParam(i.url, 'd_fieldgroup', e, 1), i.corsUrl = I._addQuerystringParam(i.corsUrl, 'd_fieldgroup', e, 1), q.fieldGroupObj[e] = !0, i === Object(i) && i.corsUrl && 'XMLHttpRequest' === j.corsMetadata.corsType && j.fireCORS(i, n, e);
                    }, I._clearTimeout = function (e) {
                        null != I._timeout && I._timeout[e] && (clearTimeout(I._timeout[e]), I._timeout[e] = 0);
                    }, I._settingsDigest = 0, I._getSettingsDigest = function () {
                        if (!I._settingsDigest) {
                            var e = I.version;
                            I.audienceManagerServer && (e += '|' + I.audienceManagerServer), I.audienceManagerServerSecure && (e += '|' + I.audienceManagerServerSecure), I._settingsDigest = I._hash(e);
                        }
                        return I._settingsDigest;
                    }, I._readVisitorDone = !1, I._readVisitor = function () {
                        if (!I._readVisitorDone) {
                            I._readVisitorDone = !0;
                            var e, t, n, i, r, a, o = I._getSettingsDigest(), s = !1, c = I.cookieRead(I.cookieName), u = new Date();
                            if (c || A || I.discardTrackingServerECID || (c = I.cookieRead(ae.FIRST_PARTY_SERVER_COOKIE)), null == I._fields && (I._fields = {}), c && 'T' !== c)
                                for (c = c.split('|'), c[0].match(/^[\-0-9]+$/) && (parseInt(c[0], 10) !== o && (s = !0), c.shift()), c.length % 2 == 1 && c.pop(), e = 0; e < c.length; e += 2)
                                    t = c[e].split('-'), n = t[0], i = c[e + 1], t.length > 1 ? (r = parseInt(t[1], 10), a = t[1].indexOf('s') > 0) : (r = 0, a = !1), s && ('MCCIDH' === n && (i = ''), r > 0 && (r = u.getTime() / 1000 - 60)), n && i && (I._setField(n, i, 1), r > 0 && (I._fields['expire' + n] = r + (a ? 's' : ''), (u.getTime() >= 1000 * r || a && !I.cookieRead(I.sessionCookieName)) && (I._fieldsExpired || (I._fieldsExpired = {}), I._fieldsExpired[n] = !0)));
                            !I._getField(R) && B.isTrackingServerPopulated() && (c = I.cookieRead('s_vi')) && (c = c.split('|'), c.length > 1 && c[0].indexOf('v1') >= 0 && (i = c[1], e = i.indexOf('['), e >= 0 && (i = i.substring(0, e)), i && i.match(ae.VALID_VISITOR_ID_REGEX) && I._setField(R, i)));
                        }
                    }, I._appendVersionTo = function (e) {
                        var t = 'vVersion|' + I.version, n = e ? I._getCookieVersion(e) : null;
                        return n ? ee.areVersionsDifferent(n, I.version) && (e = e.replace(ae.VERSION_REGEX, t)) : e += (e ? '|' : '') + t, e;
                    }, I._writeVisitor = function () {
                        var e, t, n = I._getSettingsDigest();
                        for (e in I._fields)
                            x(e) && I._fields[e] && 'expire' !== e.substring(0, 6) && (t = I._fields[e], n += (n ? '|' : '') + e + (I._fields['expire' + e] ? '-' + I._fields['expire' + e] : '') + '|' + t);
                        n = I._appendVersionTo(n), I.cookieWrite(I.cookieName, n, 1);
                    }, I._getField = function (e, t) {
                        return null == I._fields || !t && I._fieldsExpired && I._fieldsExpired[e] ? null : I._fields[e];
                    }, I._setField = function (e, t, n) {
                        null == I._fields && (I._fields = {}), I._fields[e] = t, n || I._writeVisitor();
                    }, I._getFieldList = function (e, t) {
                        var n = I._getField(e, t);
                        return n ? n.split('*') : null;
                    }, I._setFieldList = function (e, t, n) {
                        I._setField(e, t ? t.join('*') : '', n);
                    }, I._getFieldMap = function (e, t) {
                        var n = I._getFieldList(e, t);
                        if (n) {
                            var i, r = {};
                            for (i = 0; i < n.length; i += 2)
                                r[n[i]] = n[i + 1];
                            return r;
                        }
                        return null;
                    }, I._setFieldMap = function (e, t, n) {
                        var i, r = null;
                        if (t) {
                            r = [];
                            for (i in t)
                                x(i) && (r.push(i), r.push(t[i]));
                        }
                        I._setFieldList(e, r, n);
                    }, I._setFieldExpire = function (e, t, n) {
                        var i = new Date();
                        i.setTime(i.getTime() + 1000 * t), null == I._fields && (I._fields = {}), I._fields['expire' + e] = Math.floor(i.getTime() / 1000) + (n ? 's' : ''), t < 0 ? (I._fieldsExpired || (I._fieldsExpired = {}), I._fieldsExpired[e] = !0) : I._fieldsExpired && (I._fieldsExpired[e] = !1), n && (I.cookieRead(I.sessionCookieName) || I.cookieWrite(I.sessionCookieName, '1'));
                    }, I._findVisitorID = function (t) {
                        return t && ('object' === e(t) && (t = t.d_mid ? t.d_mid : t.visitorID ? t.visitorID : t.id ? t.id : t.uuid ? t.uuid : '' + t), t && 'NOTARGET' === (t = t.toUpperCase()) && (t = N), t && (t === N || t.match(ae.VALID_VISITOR_ID_REGEX)) || (t = '')), t;
                    }, I._setFields = function (t, n) {
                        if (I._clearTimeout(t), null != I._loading && (I._loading[t] = !1), q.fieldGroupObj[t] && q.setState(t, !1), t === k) {
                            !0 !== q.isClientSideMarketingCloudVisitorID && (q.isClientSideMarketingCloudVisitorID = !1);
                            var i = I._getField(E);
                            if (!i || I.overwriteCrossDomainMCIDAndAID) {
                                if (!(i = 'object' === e(n) && n.mid ? n.mid : I._findVisitorID(n))) {
                                    if (I._use1stPartyMarketingCloudServer && !I.tried1stPartyMarketingCloudServer)
                                        return I.tried1stPartyMarketingCloudServer = !0, void I.getAnalyticsVisitorID(null, !1, !0);
                                    i = I._generateLocalMID();
                                }
                                I._setField(E, i);
                            }
                            i && i !== N || (i = ''), 'object' === e(n) && ((n.d_region || n.dcs_region || n.d_blob || n.blob) && I._setFields(w, n), I._use1stPartyMarketingCloudServer && n.mid && I._setFields(L, { id: n.id })), I._callAllCallbacks(E, [i]);
                        }
                        if (t === w && 'object' === e(n)) {
                            var r = 604800;
                            void 0 != n.id_sync_ttl && n.id_sync_ttl && (r = parseInt(n.id_sync_ttl, 10));
                            var a = Y.getRegionAndCheckIfChanged(n, r);
                            I._callAllCallbacks('MCAAMLH', [a]);
                            var o = I._getField(F);
                            (n.d_blob || n.blob) && (o = n.d_blob, o || (o = n.blob), I._setFieldExpire(F, r), I._setField(F, o)), o || (o = ''), I._callAllCallbacks(F, [o]), !n.error_msg && I._newCustomerIDsHash && I._setField('MCCIDH', I._newCustomerIDsHash);
                        }
                        if (t === L) {
                            var s = I._getField(R);
                            s && !I.overwriteCrossDomainMCIDAndAID || (s = I._findVisitorID(n), s ? s !== N && I._setFieldExpire(F, -1) : s = N, I._setField(R, s)), s && s !== N || (s = ''), I._callAllCallbacks(R, [s]);
                        }
                        if (I.idSyncDisableSyncs || I.disableIdSyncs)
                            Y.idCallNotProcesssed = !0;
                        else {
                            Y.idCallNotProcesssed = !1;
                            var c = {};
                            c.ibs = n.ibs, c.subdomain = n.subdomain, Y.processIDCallData(c);
                        }
                        if (n === Object(n)) {
                            var u, l;
                            d() && I.isAllowed() && (u = I._getField('MCOPTOUT'));
                            var f = V.parseOptOut(n, u, N);
                            u = f.optOut, l = f.d_ottl, I._setFieldExpire('MCOPTOUT', l, !0), I._setField('MCOPTOUT', u), I._callAllCallbacks('MCOPTOUT', [u]);
                        }
                    }, I._loading = null, I._getRemoteField = function (e, t, n, i, r) {
                        var a, o = '', s = B.isFirstPartyAnalyticsVisitorIDCall(e), c = {
                                MCAAMLH: !0,
                                MCAAMB: !0
                            };
                        if (d() && I.isAllowed()) {
                            I._readVisitor(), o = I._getField(e, !0 === c[e]);
                            if (function () {
                                    return (!o || I._fieldsExpired && I._fieldsExpired[e]) && (!I.disableThirdPartyCalls || s);
                                }()) {
                                if (e === E || 'MCOPTOUT' === e ? a = k : 'MCAAMLH' === e || e === F ? a = w : e === R && (a = L), a)
                                    return !t || null != I._loading && I._loading[a] || (null == I._loading && (I._loading = {}), I._loading[a] = !0, a === w && (D = 0), I._loadData(a, t, function (t) {
                                        if (!I._getField(e)) {
                                            t && q.setState(a, !0);
                                            var n = '';
                                            e === E ? n = I._generateLocalMID() : a === w && (n = { error_msg: 'timeout' }), I._setFields(a, n);
                                        }
                                    }, r)), I._registerCallback(e, n), o || (t || I._setFields(a, { id: N }), '');
                            } else
                                o || (e === E ? (I._registerCallback(e, n), o = I._generateLocalMID(), I.setMarketingCloudVisitorID(o)) : e === R ? (I._registerCallback(e, n), o = '', I.setAnalyticsVisitorID(o)) : (o = '', i = !0));
                        }
                        return e !== E && e !== R || o !== N || (o = '', i = !0), n && i && I._callCallback(n, [o]), o;
                    }, I._setMarketingCloudFields = function (e) {
                        I._readVisitor(), I._setFields(k, e);
                    }, I._mapCustomerIDs = function (e) {
                        I.getAudienceManagerBlob(e, !0);
                    }, I._setAnalyticsFields = function (e) {
                        I._readVisitor(), I._setFields(L, e);
                    }, I._setAudienceManagerFields = function (e) {
                        I._readVisitor(), I._setFields(w, e);
                    }, I._getAudienceManagerURLData = function (e) {
                        var t = I.audienceManagerServer, n = '', i = I._getField(E), r = I._getField(F, !0), a = I._getField(R), o = a && a !== N ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
                        if (I.loadSSL && I.audienceManagerServerSecure && (t = I.audienceManagerServerSecure), t) {
                            var s, c, u, l = I.getCustomerIDs(!0);
                            if (l)
                                for (c in l) {
                                    var d = l[c];
                                    if (!V.isObjectEmpty(d)) {
                                        var f = 'nameSpaces' === c ? '&d_cid_ns=' : '&d_cid_ic=';
                                        for (s in d)
                                            x(s) && (u = d[s], o += f + encodeURIComponent(s) + '%01' + encodeURIComponent(u.id ? u.id : '') + (u.authState ? '%01' + u.authState : ''));
                                    }
                                }
                            e || (e = '_setAudienceManagerFields');
                            var p = 'http' + (I.loadSSL ? 's' : '') + '://' + t + '/id', g = 'd_visid_ver=' + I.version + (v && -1 !== p.indexOf('demdex.net') ? '&gdpr=1&gdpr_consent=' + v : '') + (D && -1 !== p.indexOf('demdex.net') ? '&d_cf=' + D : '') + '&d_rtbd=json&d_ver=2' + (!i && I._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') + '&d_orgid=' + encodeURIComponent(I.marketingCloudOrgID) + '&d_nsid=' + (I.idSyncContainerID || 0) + (i ? '&d_mid=' + encodeURIComponent(i) : '') + (I.idSyncDisable3rdPartySyncing || I.disableThirdPartyCookies ? '&d_coppa=true' : '') + (!0 === M ? '&d_coop_safe=1' : !1 === M ? '&d_coop_unsafe=1' : '') + (r ? '&d_blob=' + encodeURIComponent(r) : '') + o, m = [
                                    's_c_il',
                                    I._in,
                                    e
                                ];
                            return n = p + '?' + g + '&d_cb=s_c_il%5B' + I._in + '%5D.' + e, {
                                url: n,
                                corsUrl: p + '?' + g,
                                callback: m
                            };
                        }
                        return { url: n };
                    }, I.appendVisitorIDsTo = function (e) {
                        try {
                            var t = [
                                [
                                    E,
                                    I._getField(E)
                                ],
                                [
                                    R,
                                    I._getField(R)
                                ],
                                [
                                    'MCORGID',
                                    I.marketingCloudOrgID
                                ]
                            ];
                            return I._addQuerystringParam(e, ae.ADOBE_MC, c(t));
                        } catch (t) {
                            return e;
                        }
                    }, I.appendSupplementalDataIDTo = function (e, t) {
                        if (!(t = t || I.getSupplementalDataID(B.generateRandomString(), !0)))
                            return e;
                        try {
                            var n = c([
                                [
                                    'SDID',
                                    t
                                ],
                                [
                                    'MCORGID',
                                    I.marketingCloudOrgID
                                ]
                            ]);
                            return I._addQuerystringParam(e, ae.ADOBE_MC_SDID, n);
                        } catch (t) {
                            return e;
                        }
                    };
                    var B = {
                        parseHash: function (e) {
                            var t = e.indexOf('#');
                            return t > 0 ? e.substr(t) : '';
                        },
                        hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return t > 0 ? e.substr(0, t) : e;
                        },
                        addQueryParamAtLocation: function (e, t, n) {
                            var i = e.split('&');
                            return n = null != n ? n : i.length, i.splice(n, 0, t), i.join('&');
                        },
                        isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                            if (e !== R)
                                return !1;
                            var i;
                            return t || (t = I.trackingServer), n || (n = I.trackingServerSecure), !('string' != typeof (i = I.loadSSL ? n : t) || !i.length) && (i.indexOf('2o7.net') < 0 && i.indexOf('omtrdc.net') < 0);
                        },
                        isObject: function (e) {
                            return Boolean(e && e === Object(e));
                        },
                        removeCookie: function (e) {
                            $.remove(e, { domain: I.cookieDomain });
                        },
                        isTrackingServerPopulated: function () {
                            return !!I.trackingServer || !!I.trackingServerSecure;
                        },
                        getTimestampInSeconds: function () {
                            return Math.round(new Date().getTime() / 1000);
                        },
                        parsePipeDelimetedKeyValues: function (e) {
                            return e.split('|').reduce(function (e, t) {
                                var n = t.split('=');
                                return e[n[0]] = decodeURIComponent(n[1]), e;
                            }, {});
                        },
                        generateRandomString: function (e) {
                            e = e || 5;
                            for (var t = '', n = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--;)
                                t += n[Math.floor(Math.random() * n.length)];
                            return t;
                        },
                        normalizeBoolean: function (e) {
                            return 'true' === e || 'false' !== e && e;
                        },
                        parseBoolean: function (e) {
                            return 'true' === e || 'false' !== e && null;
                        },
                        replaceMethodsWithFunction: function (e, t) {
                            for (var n in e)
                                e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
                            return e;
                        }
                    };
                    I._helpers = B;
                    var Y = oe(I, O);
                    I._destinationPublishing = Y, I.timeoutMetricsLog = [];
                    var q = {
                        isClientSideMarketingCloudVisitorID: null,
                        MCIDCallTimedOut: null,
                        AnalyticsIDCallTimedOut: null,
                        AAMIDCallTimedOut: null,
                        fieldGroupObj: {},
                        setState: function (e, t) {
                            switch (e) {
                            case k:
                                !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                break;
                            case L:
                                !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                break;
                            case w:
                                !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t;
                            }
                        }
                    };
                    I.isClientSideMarketingCloudVisitorID = function () {
                        return q.isClientSideMarketingCloudVisitorID;
                    }, I.MCIDCallTimedOut = function () {
                        return q.MCIDCallTimedOut;
                    }, I.AnalyticsIDCallTimedOut = function () {
                        return q.AnalyticsIDCallTimedOut;
                    }, I.AAMIDCallTimedOut = function () {
                        return q.AAMIDCallTimedOut;
                    }, I.idSyncGetOnPageSyncInfo = function () {
                        return I._readVisitor(), I._getField('MCSYNCSOP');
                    }, I.idSyncByURL = function (e) {
                        if (!I.isOptedOut()) {
                            var t = u(e || {});
                            if (t.error)
                                return t.error;
                            var n, i, r = e.url, a = encodeURIComponent, o = Y;
                            return r = r.replace(/^https:/, '').replace(/^http:/, ''), n = V.encodeAndBuildRequest([
                                '',
                                e.dpid,
                                e.dpuuid || ''
                            ], ','), i = [
                                'ibs',
                                a(e.dpid),
                                'img',
                                a(r),
                                t.ttl,
                                '',
                                n
                            ], o.addMessage(i.join('|')), o.requestToProcess(), 'Successfully queued';
                        }
                    }, I.idSyncByDataSource = function (e) {
                        if (!I.isOptedOut())
                            return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length ? (e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid, I.idSyncByURL(e)) : 'Error: config or config.dpuuid is empty';
                    }, Ge(I, Y), I._getCookieVersion = function (e) {
                        e = e || I.cookieRead(I.cookieName);
                        var t = ae.VERSION_REGEX.exec(e);
                        return t && t.length > 1 ? t[1] : null;
                    }, I._resetAmcvCookie = function (e) {
                        var t = I._getCookieVersion();
                        t && !ee.isLessThan(t, e) || B.removeCookie(I.cookieName);
                    }, I.setAsCoopSafe = function () {
                        M = !0;
                    }, I.setAsCoopUnsafe = function () {
                        M = !1;
                    }, function () {
                        if (I.configs = Object.create(null), B.isObject(n))
                            for (var e in n)
                                x(e) && (I[e] = n[e], I.configs[e] = n[e]);
                    }(), f();
                    var W;
                    I.init = function () {
                        l() && (S.optIn.fetchPermissions(h, !0), !S.optIn.isApproved(S.optIn.Categories.ECID)) || W || (W = !0, function () {
                            if (B.isObject(n)) {
                                I.idSyncContainerID = I.idSyncContainerID || 0, M = 'boolean' == typeof I.isCoopSafe ? I.isCoopSafe : B.parseBoolean(I.isCoopSafe), I.resetBeforeVersion && I._resetAmcvCookie(I.resetBeforeVersion), I._attemptToPopulateIdsFromUrl(), I._attemptToPopulateSdidFromUrl(), I._readVisitor();
                                var e = I._getField(P), t = Math.ceil(new Date().getTime() / ae.MILLIS_PER_DAY);
                                I.idSyncDisableSyncs || I.disableIdSyncs || !Y.canMakeSyncIDCall(e, t) || (I._setFieldExpire(F, -1), I._setField(P, t)), I.getMarketingCloudVisitorID(), I.getAudienceManagerLocationHint(), I.getAudienceManagerBlob(), I._mergeServerState(I.serverState);
                            } else
                                I._attemptToPopulateIdsFromUrl(), I._attemptToPopulateSdidFromUrl();
                        }(), function () {
                            if (!I.idSyncDisableSyncs && !I.disableIdSyncs) {
                                Y.checkDPIframeSrc();
                                var e = function () {
                                    var e = Y;
                                    e.readyToAttachIframe() && e.attachIframe();
                                };
                                b.addEventListener('load', function () {
                                    O.windowLoaded = !0, e();
                                });
                                try {
                                    ne.receiveMessage(function (e) {
                                        Y.receiveMessage(e.data);
                                    }, Y.iframeHost);
                                } catch (e) {
                                }
                            }
                        }(), function () {
                            I.whitelistIframeDomains && ae.POST_MESSAGE_ENABLED && (I.whitelistIframeDomains = I.whitelistIframeDomains instanceof Array ? I.whitelistIframeDomains : [I.whitelistIframeDomains], I.whitelistIframeDomains.forEach(function (e) {
                                var n = new G(t, e), i = z(I, n);
                                ne.receiveMessage(i, e);
                            }));
                        }());
                    };
                };
                Ke.config = ce, C.Visitor = Ke;
                var Je = Ke, ze = function (e) {
                        if (V.isObject(e))
                            return Object.keys(e).filter(function (t) {
                                return '' !== e[t];
                            }).reduce(function (t, n) {
                                var i = ce.normalizeConfig(e[n]), r = V.normalizeBoolean(i);
                                return t[n] = r, t;
                            }, Object.create(null));
                    }, Qe = Be.OptIn, $e = Be.IabPlugin;
                return Je.getInstance = function (e, t) {
                    if (!e)
                        throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                    e.indexOf('@') < 0 && (e += '@AdobeOrg');
                    var n = function () {
                        var t = C.s_c_il;
                        if (t)
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                if (i && 'Visitor' === i._c && i.marketingCloudOrgID === e)
                                    return i;
                            }
                    }();
                    if (n)
                        return n;
                    var i = ze(t);
                    !function (e) {
                        C.adobe.optIn = C.adobe.optIn || function () {
                            var t = V.pluck(e, [
                                    'doesOptInApply',
                                    'previousPermissions',
                                    'preOptInApprovals',
                                    'isOptInStorageEnabled',
                                    'optInStorageExpiry',
                                    'isIabContext'
                                ]), n = e.optInCookieDomain || e.cookieDomain;
                            n = n || Z(), n = n === window.location.hostname ? '' : n, t.optInCookieDomain = n;
                            var i = new Qe(t, { cookies: $ });
                            if (t.isIabContext && t.doesOptInApply) {
                                var r = new $e();
                                i.registerPlugin(r);
                            }
                            return i;
                        }();
                    }(i || {});
                    var r = e, a = r.split('').reverse().join(''), o = new Je(e, null, a);
                    V.isObject(i) && i.cookieDomain && (o.cookieDomain = i.cookieDomain), function () {
                        C.s_c_il.splice(--C.s_c_in, 1);
                    }();
                    var s = V.getIeVersion();
                    if ('number' == typeof s && s < 10)
                        return o._helpers.replaceMethodsWithFunction(o, function () {
                        });
                    var c = function () {
                        try {
                            return C.self !== C.parent;
                        } catch (e) {
                            return !0;
                        }
                    }() && !function (e) {
                        return e.cookieWrite('TEST_AMCV_COOKIE', 'T', 1), 'T' === e.cookieRead('TEST_AMCV_COOKIE') && (e._helpers.removeCookie('TEST_AMCV_COOKIE'), !0);
                    }(o) && C.parent ? new q(e, i, o, C.parent) : new Je(e, i, a);
                    return o = null, c.init(), c;
                }, function () {
                    function e() {
                        Je.windowLoaded = !0;
                    }
                    C.addEventListener ? C.addEventListener('load', e) : C.attachEvent && C.attachEvent('onload', e), Je.codeLoadEnd = new Date().getTime();
                }(), Je;
            }();
            var containerID = Bootstrapper.data.resolve('55349');
            var visitorServiceNamespace = Bootstrapper.data.resolve('55350');
            var visitor = Visitor.getInstance(visitorServiceNamespace, {
                trackingServer: 'ci.intuit.com',
                trackingServerSecure: 'sci.intuit.com',
                marketingCloudServer: 'ci.intuit.com',
                marketingCloudServerSecure: 'sci.intuit.com',
                idSyncContainerID: containerID.nsidId,
                idSyncAttachIframeOnWindowLoad: true,
                loadSSL: true
            });
            try {
                if (window.wa.ivid)
                    visitor.setCustomerIDs({
                        'IVID': {
                            'id': window.wa.ivid,
                            'authState': Visitor.AuthState.UNKNOWN
                        }
                    });
            } catch (err) {
            }
            window.visitor = visitor;
        }, 3454315, 559422);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.bindDOMParsed(function () {
                var elements = Bootstrapper.qwery('.IntuitBrandClicktoQB');
                for (var i = 0; i < elements.length; i++)
                    Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
                        Bootstrapper.ensEvent.trigger('ICom - Button Click to QB');
                    });
            });
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to TT'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var countingMethod = 'standard';
                var dl = 'dataLayer';
                var floodLightId = 'DC-8344993';
                var send_to = [];
                if (floodLightId) {
                    var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui000' + '+' + countingMethod;
                    send_to.push(receiver);
                } else {
                    var ids = [];
                    for (var i in ids) {
                        var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui000' + '+' + countingMethod;
                        send_to.push(receiver);
                    }
                }
                var allow_custom_scripts = 'true' == 'true' ? true : false;
                var eventObj = {
                    'allow_custom_scripts': allow_custom_scripts,
                    'send_to': send_to
                };
                if (countingMethod === 'per_session')
                    if ('')
                        eventObj.session_id = '';
                if (countingMethod === 'transactions') {
                    if ('')
                        eventObj.value = '';
                    if ('')
                        eventObj.transaction_id = '';
                    if ('')
                        eventObj.quantity = '';
                }
                window[dl] = window[dl] || [];
                window.gtag = window.gtag || function gtag() {
                    window[dl].push(arguments);
                };
                gtag('event', 'conversion', eventObj);
            });
        }, 2762228, [2762202], 585583, [585580]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.bindDOMParsed(function () {
                var elements = Bootstrapper.qwery('.IntuitBrandClicktoTT');
                for (var i = 0; i < elements.length; i++)
                    Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
                        Bootstrapper.ensEvent.trigger('ICom - Button Click to TT');
                    });
            });
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to Mint'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var countingMethod = 'standard';
                var dl = 'dataLayer';
                var floodLightId = 'DC-8344993';
                var send_to = [];
                if (floodLightId) {
                    var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui002' + '+' + countingMethod;
                    send_to.push(receiver);
                } else {
                    var ids = [];
                    for (var i in ids) {
                        var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui002' + '+' + countingMethod;
                        send_to.push(receiver);
                    }
                }
                var allow_custom_scripts = 'true' == 'true' ? true : false;
                var eventObj = {
                    'allow_custom_scripts': allow_custom_scripts,
                    'send_to': send_to
                };
                if (countingMethod === 'per_session')
                    if ('')
                        eventObj.session_id = '';
                if (countingMethod === 'transactions') {
                    if ('')
                        eventObj.value = '';
                    if ('')
                        eventObj.transaction_id = '';
                    if ('')
                        eventObj.quantity = '';
                }
                window[dl] = window[dl] || [];
                window.gtag = window.gtag || function gtag() {
                    window[dl].push(arguments);
                };
                gtag('event', 'conversion', eventObj);
            });
        }, 2762260, [2762202], 585585, [585580]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window._waConfig = window._waConfig || {};
            var config = window._waConfig;
            config.lastUpdate = config.lastUpdate || [];
            config.lastUpdate.push('2021|04|13');
            config.configReady = true;
            config.segmentIO = config.segmentIO || {};
            config.segmentIO.enabled = true;
            config.varmap = {
                'sbgsegment': {
                    org: 'org',
                    purpose: 'purpose',
                    scope: 'scope',
                    pageName: 'name',
                    pageProperties: 'properties',
                    userAction: 'properties[action]'
                },
                'sbgprod': {
                    pageType: 'pageType',
                    hostname: 'server',
                    channel: 'channel',
                    referrer: 'referrer',
                    pageName: [
                        'pageName',
                        'prop2'
                    ],
                    pageHier: 'hier2',
                    adobeEventList: 'events',
                    products: 'products',
                    cid: [
                        'campaign',
                        'eVar66',
                        'prop66'
                    ],
                    siteGroupSubgroup: [
                        'eVar1',
                        'prop1'
                    ],
                    billingCode: 'eVar2',
                    funnelName: [
                        'eVar3',
                        'prop3'
                    ],
                    formAnalysisData: 'prop4',
                    brand: 'eVar4',
                    navigation: [
                        'eVar5',
                        'prop5'
                    ],
                    pcsAppStatus: 'eVar6',
                    qboUserId: 'eVar7',
                    xsell_upsell: 'prop8',
                    emsExternalId: 'eVar8',
                    pcsAppId: 'eVar9',
                    emsLicenseId: 'eVar9',
                    aamQbusCookie: 'prop9',
                    fingerPrintId: 'eVar10',
                    invoiceID: 'prop10',
                    emsPartnerId: 'prop11',
                    chatSessionId: 'eVar11',
                    globalCookie: 'prop12',
                    articleTitle: 'eVar12',
                    articleId: 'eVar13',
                    articleProductType: 'prop14',
                    customerId: 'prop13',
                    eStoreOfferCode: 'eVar14',
                    sku: 'eVar15',
                    userStatus: 'prop16',
                    firstProduct: 'eVar16',
                    refUrlSbg: 'eVar17',
                    videoTrack: 'prop17',
                    localRefUrl: 'eVar18',
                    licenseId: 'eVar19',
                    marketingCloudID: 'prop20',
                    decibelSessionId: 'eVar20',
                    internalCampaign: 'eVar21',
                    campaignStack: 'eVar22',
                    priorityCode: 'eVar23',
                    p_prioritycode: 'eVar24',
                    pageDetail: 'prop24',
                    pcode: 'eVar25',
                    qboConvCookie: [
                        'eVar26',
                        'prop26'
                    ],
                    pageUrl: [
                        'pageUrl',
                        'eVar27',
                        'prop27'
                    ],
                    urs: [
                        'eVar28',
                        'prop28'
                    ],
                    ppckw: 'eVar29',
                    natkw: 'eVar30',
                    trackType: 'prop30',
                    zonCode: 'eVar31',
                    inspectorData: 'prop31',
                    internalSearch: 'prop19',
                    numIntSearchResults: 'prop32',
                    mdsProspectStatus: 'eVar32',
                    reportSuite: 'prop33',
                    responsysCreativeId: 'eVar33',
                    responsysSubId: 'eVar34',
                    leadEvalID: 'prop34',
                    qbcPersonId: 'eVar35',
                    surveyId: 'prop35',
                    mdsPersonalizationStore: 'eVar36',
                    jsLibraryVersion: 'prop36',
                    testData: 'prop39',
                    purchaseId: [
                        'purchaseID',
                        'transactionID',
                        'eVar40'
                    ],
                    qboSemHistCookie: 'prop40',
                    prevPagePctViewed: 'prop41',
                    prevPage: 'prop42',
                    articleDetail: 'prop43',
                    pageOrAction: 'prop49',
                    qboCustType: 'eVar50',
                    personalizedPage: 'eVar51',
                    s_vi: 'prop52',
                    qbseUserId: [
                        'eVar53',
                        'prop53'
                    ],
                    iksmUserId: 'prop54',
                    ivid: 'eVar54',
                    linkHREF: 'prop55',
                    sourceCode: 'eVar55',
                    personaMatrix: 'prop56',
                    suiPaymentPlan: 'eVar56',
                    addOnIds: 'eVar57',
                    intuitAuthId: [
                        'eVar58',
                        'prop58'
                    ],
                    companyId: [
                        'eVar59',
                        'prop59'
                    ],
                    country: [
                        'eVar60',
                        'prop60'
                    ],
                    pageId: ['prop61'],
                    ixpId: ['prop62'],
                    mobileLocale: ['eVar62'],
                    mobileIp: [
                        'eVar63',
                        'prop63'
                    ],
                    siteName: [
                        'eVar64',
                        'prop64'
                    ],
                    userAction: [
                        'eVar65',
                        'prop65'
                    ],
                    visitDate: [
                        'eVar67',
                        'prop67'
                    ],
                    internalKeyword: [
                        'eVar68',
                        'prop68'
                    ],
                    appVersion: [
                        'eVar69',
                        'prop69'
                    ],
                    mobileDevice: [
                        'eVar70',
                        'prop70'
                    ],
                    abTest: [
                        'eVar71',
                        'prop71'
                    ],
                    fraudId: [
                        'eVar72',
                        'prop72'
                    ],
                    pageLoadTime: [
                        'eVar73',
                        'prop73'
                    ],
                    userId: [
                        'eVar74',
                        'prop74'
                    ],
                    error: [
                        'eVar75',
                        'prop75'
                    ],
                    miscVisitData: 'list1',
                    abTestList: 'list2'
                }
            };
            config.eventNames = {
                prodView: [
                    'prodview',
                    'product_view'
                ],
                scView: [
                    'cartview',
                    'view_cart'
                ],
                scOpen: [
                    'cartopen',
                    'open_cart'
                ],
                scAdd: [
                    'cartadd',
                    'add_to_cart'
                ],
                scRemove: [
                    'cartremove',
                    'remove_from_cart'
                ],
                scCheckout: [
                    'checkout',
                    'scCheckout'
                ],
                purchase: [
                    'order',
                    'purchase'
                ],
                event1: ['fmsstep1'],
                event2: ['fmsstep2'],
                event3: ['fmsstep3'],
                event4: ['fmsappcomplete'],
                event5: ['fmsestorecustomer'],
                event6: ['fmspaymentmethod'],
                event7: ['fmsretailstep1'],
                event10: ['fmsretailstep2'],
                event11: ['fmsretailcomplete'],
                event13: ['emsappstart'],
                event14: ['emsappstep2'],
                event15: ['emsappstep3'],
                event16: ['emsappstep4'],
                event17: ['emsappcomplete'],
                event18: ['emsinsstart'],
                event19: ['emsinssubmit'],
                event20: ['emsiamsignin'],
                event21: ['emsiamcolist'],
                event22: ['emsiamcoselected'],
                event23: ['emsretailactivation'],
                event25: [
                    'psdstart',
                    'imsstart',
                    'pcsstart'
                ],
                event26: [
                    'psdstep2',
                    'imsstep2',
                    'pcsstep2'
                ],
                event27: [
                    'psdstep3',
                    'imsstep3',
                    'pcsstep3'
                ],
                event28: [
                    'psdappsubmitconfirm',
                    'imsappsubmitconfirm',
                    'pcsappsubmitconfirm'
                ],
                event51: ['emsapprovedpayroll'],
                event52: ['emstaxsetupstart'],
                event53: ['emstaxsetupcomplete'],
                event54: ['emssetupcomplete'],
                event55: ['emsccinforeceived'],
                event56: ['emsfirstcheckapproved'],
                event57: ['emstrialstart'],
                event66: [
                    'qbastep1',
                    'qboastep1',
                    'qbacastep1',
                    'papstep1',
                    'papqbastep1',
                    'qbapapstep1'
                ],
                event67: [
                    'qbasignupcomplete',
                    'papsignupcomplete',
                    'qbapapsignupcomplete',
                    'papqbasignupcomplete',
                    'qboacomplete',
                    'qbacasignupcomplete'
                ],
                event69: [
                    'qbastep2',
                    'papstep2',
                    'qbapapstep2',
                    'papqbastep2'
                ],
                event70: [
                    'qbastep3',
                    'papstep3',
                    'qbapapstep3',
                    'papqbastep3'
                ],
                event71: ['qbesstart'],
                event72: ['qbesstep2'],
                event73: ['qbessubmit'],
                event74: ['engagedseconds'],
                event75: ['qbfspstart'],
                event76: ['qbfspstep2'],
                event77: ['qbfspcomplete'],
                event94: [
                    'crashed',
                    'crash'
                ],
                event95: [
                    'launches',
                    'launch'
                ],
                event96: [
                    'upgrades',
                    'upgrade'
                ],
                event97: ['install'],
                event98: ['register'],
                event99: ['login'],
                event100: ['error'],
                event101: ['grabpdf'],
                event102: ['downloadqbes'],
                event110: ['attachpayroll'],
                event111: ['switchtobuynow'],
                event112: ['fmscompletewithoutbilling'],
                event113: ['defercompanycreation'],
                event201: ['qbsestep1'],
                event202: ['qbseaccountcreated'],
                event203: ['qbsechooser'],
                event204: ['qbsebillinginfo'],
                event205: ['qbsesubscribe'],
                event206: ['qbsetrialstart'],
                event207: ['qbsetrialcomplete'],
                event208: ['qbsebuystart'],
                event209: ['qbsebuycomplete'],
                event210: ['fspcontactformshow'],
                event211: ['fspcontactformsubmit'],
                event212: ['blog_comment_attempt'],
                event220: ['fmsposleadstart'],
                event221: ['fmsposleadcomplete'],
                event230: ['qboadvleadstart'],
                event231: ['qboadvleadcomplete'],
                event241: ['qbcstep1'],
                event242: ['qbcstep2'],
                event243: ['qbcregistersuccess'],
                event251: ['qbotrialsignupstart'],
                event252: ['qbotrialsignupcomplete'],
                event253: ['qbobuysignupstart'],
                event254: ['qbobuysignupcomplete']
            };
            config.eventSerialIds = {
                event4: 'companyId',
                event11: 'companyId',
                event17: 'emsExternalId',
                event28: 'pcsAppId',
                event52: 'emsExternalId',
                event53: 'emsExternalId',
                event54: 'emsExternalId',
                event55: 'emsExternalId',
                event57: 'emsExternalId',
                event67: 'companyId',
                event73: 'leadEvalID',
                event77: 'companyId',
                event112: 'companyId',
                event202: 'qbseUserId',
                event205: 'qbseUserId',
                event207: 'companyId',
                event209: 'companyId',
                event221: 'leadEvalID',
                event231: 'leadEvalID',
                event243: 'purchaseId',
                event252: 'companyId',
                event254: 'companyId'
            };
            config.varsets = {
                link: [
                    'ivid',
                    'referrer',
                    'siteGroupSubgroup',
                    'billingCode',
                    'fullUrl',
                    'landingPage',
                    'jsLibraryVersion',
                    'siteName',
                    'pageOrAction',
                    'userAction',
                    'adobeEventList',
                    'abTest',
                    'formAnalysisData',
                    'reportSuite',
                    'siteLocale',
                    'country',
                    'inspectorData',
                    'pageName',
                    'pageUrl',
                    'linkHREF',
                    's_vi',
                    'org',
                    'scope',
                    'purpose',
                    'internalSearch'
                ]
            };
            config.s = {};
            config.s.charSet = 'UTF-8';
            config.s.currencyCode = 'USD';
            config.s.linkLeaveQueryString = false;
            config.s.trackDownloadLinks = true;
            config.s.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,msi';
            config.s.linkTrackVars = 'eVar1,prop1,prop2,prop19,eVar27,prop27,prop33,prop36,eVar52,eVar54,eVar60,prop60,eVar61,eVar64,prop64';
            config.s.linkTrackEvents = 'None';
            config.s.trackInlineStats = false;
            config.s.visitorNamespace = 'intuitinc';
            config.s.trackingServer = 'ci.intuit.com';
            config.s.trackingServerSecure = 'sci.intuit.com';
            config.internalHostEms = [
                'search.payroll.com',
                'search2.payroll.com',
                'payroll.intuit.com',
                'paycycle.com',
                'www.paycycle.com',
                'easy.paycycle.com',
                'payroll.com',
                'www.bestonlinepayroll.com',
                'onlinepayroll.intuit.com',
                'online.payroll.intuit.com',
                'usepayroll.com',
                'www.qbmacpayroll.com',
                'www.macpayroll.com',
                'payroll.quickbooks.com',
                'www.intuitfullservicepayroll.com',
                'quickbookspayroll.com',
                'www.managepayroll.com',
                'intuitfullservicepayroll.com',
                'www.fullpayrollsolution.com',
                'fullpayrollsolution.com',
                'www.intuithire.com',
                'intuithirebook.com',
                'www.intuit-hire-book.com',
                'www.intuit-hire.com',
                'hire.intuit.com',
                'snappypayroll.com',
                'www.intuitinc.com',
                'www.firstemployee.intuit.com',
                'www.firstemployeebok.com',
                'insurance.intuit.com',
                'compliance.intuitlabs.com',
                'iop.intuit.com',
                'www.paycheckrecords.com',
                'qbosso.onlinepayroll.intuit.com',
                'iopsso.onlinepayroll.intuit.com',
                'workplacesso.onlinepayroll.intuit.com',
                'beyondpayroll.emslabs.intuit.com',
                'www.payroll.intuit.com',
                'beyondpayroll.emslabs.intuit.com',
                'ems.intuit.com',
                'ews.intuit.com',
                'viewmypaycheck.com',
                'viewmypaycheck.intuit.com',
                'paychecks.intuit.com',
                'ewslogincallback.intuit.com',
                '1099central.intuit.com',
                'index.intuit.com',
                'quickbooks.intuit.com',
                'quickbooks.com'
            ];
            config.internalHostFms = [
                'qbpayroll.com',
                'quickbooks.com',
                'quickbooks.intuit.com',
                'search.quickbooks.com',
                'search2.quickbooks.com',
                'qboe.com',
                'qbonline.com',
                'quickbooksonline.com',
                'quickbooksonline.intuit.com',
                'search.quickbooksonline.com',
                'search2.quickbooksonline.com',
                'www.qbpayroll.com',
                'sbconnect.intuit.com',
                'www.quickbooks.intuit.com',
                'selfemployed.intuit.com',
                'www.firmofthefuture.com',
                'events.intuit.com',
                'www.quickbooksconnect.com',
                'quickbooksconnect.com',
                'www.eiseverywhere.com',
                'eiseverywhere.com',
                'events.quickbooksconnect.com',
                'canevents.quickbooksconnect.com',
                'ukevents.quickbooksconnect.com',
                'auevents.quickbooksconnect.com',
                'help.developer.intuit.com',
                'signup.quickbooks.intuit.com',
                'qbindia.intuit.com',
                'na.eventscloud.com'
            ];
            config.internalHostIcs = [
                'intuitmarket.intuit.com',
                'www.intuitmarket.com'
            ];
            config.internalHostPcs = [
                'ipd.intuit.com',
                'pay.intuit.com',
                'payments.intuit.com',
                'gopayment.com',
                'intuit-gopayment.com',
                'www.gopayment.com',
                'www.intuit-gopayment.com',
                'intuitpayments.com',
                'pointofsale.intuit.com',
                'merchant.intuit.com',
                'www.intuitmerchant.com',
                'intuitmerchant.com',
                'merchantboarding.ipcommerce.com',
                'www.quickbooksmerchantservice.com',
                'quickbooksmerchantservice.com',
                'inquickbooks.intuit.com',
                'http-download.intuit.com',
                'www.intuitpayments.com',
                'paymentsolutions.intuit.com',
                'translate.googleusercontent.com',
                'merchantcenter.intuit.com',
                'webcache.googleusercontent.com',
                'intuitshipping.panomark.com',
                'www.intuitcreditcardprocessing.com',
                'paaf.payments.intuit.com',
                'qbdtonboard.payments.intuit.com',
                'gopaymenthelp.com',
                'www.gopaymenthelp.com',
                'quickbooks.intuit.com',
                'connect.intuit.com',
                'payments-gpa.intuit.com'
            ];
            config.internalHostIcom = [
                'www.intuit.com',
                'intuit.com',
                'intuitblog.com'
            ];
            config.internalHostQbes = [
                'enterprisesuite.intuit.com',
                'quickbooks.com',
                'quickbooks.intuit.com'
            ];
            config.internalHostIksm = ['iksm.intuit.com'];
            config.internalHostAllLocal = [
                'qbgdm.intuit.com',
                'qbinproduct.intuit.com',
                'www.aboutqbtrial.com',
                'www.buyqb.com',
                'www.buyquickbooks.com',
                'www.checkoutqb.com',
                'www.chooseqb.com',
                'www.freeqb.com',
                'www.freeqbtrial.com',
                'www.getqb.com',
                'www.getqbnow.com',
                'www.getqbtrial.com',
                'www.getqbtrialnow.com',
                'www.gogetqb.com',
                'www.gogetqbtrial.com',
                'www.gotoqb.com',
                'www.intuitdirect.com',
                'www.iwantqb.com',
                'www.iwantqbtrial.com',
                'www.mustgetqb.com',
                'www.musthaveqb.com',
                'www.myqbtrial.com',
                'www.ordermyqb.com',
                'www.ordermyqbtrial.com',
                'www.orderqb.com',
                'www.orderqbtrial.com',
                'www.posmas.com',
                'www.qbmas.com',
                'www.qbpointofsale.com',
                'www.qbposms.com',
                'www.qbretail.com',
                'www.qbretailsolutions.com',
                'www.qbtrial.com',
                'www.qbtrialnow.com',
                'www.qbtvoffer.com',
                'www.qbtvtrial.com',
                'www.quickbooksdirect.com',
                'www.quickbooksms.com',
                'www.quickbookspos.com',
                'www.quickbookspro.com',
                'www.quickbooksretail.com',
                'www.quickbooksupgrade.com',
                'www.seeqbtrial.com',
                'www.tryqb.com',
                'www.tryqbnow.com',
                'www.useqb.com',
                'www.usequickbooks.com',
                'support.intuit.com',
                'selfservice.intuit.com',
                'sblb.intuit.com',
                'www.smallbusinessbiggame.com',
                'support.quickbooks.intuit.com',
                'sales.liveperson.net',
                'www.qbomobilecc.com',
                'qbomobilecc.com',
                'e.shop.intuit.com',
                'registration.intuitpartnerportal.com',
                'qbdtipd.qbinproduct.intuit.com',
                'iksm.intuit.com',
                'intuitblog.com'
            ];
            config.internalHostQaDomains = [
                'qa.sr.payroll.intuit.com',
                'qa.sr.pay.intuit.com',
                'qa.sr.payments.intuit.com',
                'qa.sr.intuit.com',
                'merchant.qa.intuit.com',
                'bp-test.intuitlabs.com',
                'wcgo2c3.enterprisesuite.intuit.com',
                'wcgo2c3.quickbooks.intuit.com',
                'pds.enterprisesuite.intuit.com',
                'pds.quickbooks.intuit.com',
                'inf2.payroll.intuit.com',
                'inf2.qbinproduct.intuit.com',
                'inf2.quickbooks.intuit.com',
                'stg.payroll.intuit.com',
                'stg.qbinproduct.intuit.com',
                'stg.inf2.quickbooks.intuit.com',
                'wcgo2c3.qbinproduct.intuit.com',
                'pds.qbinproduct.intuit.com',
                'wcgo2c3.proadvisor.intuit.com',
                'pds.proadvisor.intuit.com',
                'wcgo2c3.payroll.intuit.com',
                'pds.payroll.intuit.com',
                'qbdtipd-dev.qbinproduct.intuit.com',
                'qbdtipd-qal.qbinproduct.intuit.com',
                'qbdtipd-prf.qbinproduct.intuit.com',
                'signup-e2e.quickbooks.intuit.com',
                'signup-qa.quickbooks.intuit.com',
                'try.iksm.a.intuit.com',
                'uqa0.iksm-ppd.a.intuit.com',
                'uqa1.iksm-ppd.a.intuit.com',
                'uqa2.iksm-ppd.a.intuit.com',
                'uqa3.iksm-ppd.a.intuit.com',
                'qbdtipd-dev.qbinproduct.intuit.com',
                'qbdtipd-qal.qbinproduct.intuit.com',
                'qbdtipd-prf.qbinproduct.intuit.com',
                'qbdtonboard-qa.payments.intuit.com',
                'qbdtonboard-e2e.payments.intuit.com'
            ];
            config.internalHostSbg = config.internalHostEms.concat(config.internalHostFms, config.internalHostPcs, config.internalHostIcom, config.internalHostQbes, config.internalHostIcs);
            config.internalHostBr = [
                'signup.quickbooks.intuit.com',
                'www.quickbooks.com.br',
                'quickbooks.com.br',
                'www.quickbooksonline.com.br',
                'quickbooks.intuit.com.br',
                'quickbooksonline.intuit.com.br',
                'zeropaper.com.br',
                'www.zeropaper.com.br',
                'global.intuit.com',
                'quickbooks.intuit.com'
            ];
            config.internalHostBrQa = [
                'test.quickbooks.intuit.com.br',
                'test.www.intuit.com.br',
                'xhjga.zeropaper.com.br'
            ];
            config.internalHostMx = [
                'signup.quickbooks.intuit.com',
                'quickbooks.intuit.mx',
                'global.intuit.com',
                'www.intuit.com',
                'quickbooks.intuit.com'
            ];
            config.internalHostMxQa = ['test.quickbooks.intuit.mx'];
            config.internalHostAu = [
                'signup.quickbooks.intuit.com',
                'quickbooks.intuit.com',
                'www.intuit.com.au',
                'quickbooks.intuit.com.au',
                'www.quickbooks.com.au',
                'intuit.com.au',
                'quickbooks.com.au',
                'intuitglobal.com',
                'www.intuitglobal.com',
                'au.quickbooksconnect.com',
                'www.eiseverywhere.com',
                'auevents.quickbooksconnect.com',
                'au.eventscloud.com'
            ];
            config.internalHostAuQa = [
                'signup-qa.quickbooks.intuit.com',
                'qasp.quickbooks.intuit.com',
                'perfsp.quickbooks.intuit.com',
                'test.quickbooks.intuit.com.au',
                'test.www.intuit.com.au'
            ];
            config.internalHostCa = [
                'signup.quickbooks.intuit.com',
                'global.intuit.ca',
                'enterprise.intuit.ca',
                'shop.quickbooks.ca',
                'www.intuit.ca',
                'quickbooks.intuit.ca',
                'enterprise.intuit.ca',
                'shop.quickbooks.ca',
                'proadvisor.intuit.ca',
                'quickbooksenligne.intuit.ca',
                'succespme.intuit.ca',
                'quickbooksonline.intuit.ca',
                'global.intuit.ca',
                'intuitglobal.ca',
                'qbofortrades.ca',
                'accountant.intuit.ca',
                'conseillerspro.intuit.ca',
                'comptable.intuit.ca',
                'profile.intuit.ca',
                'ww1.secure.intuit.ca',
                'quickbooks-startup-foundations.thinkific.com',
                'can.quickbooksconnect.com',
                'events.intuit.com',
                'quickbooks.intuit.com',
                'intuit.com',
                'www.intuit.com',
                'enterprise.intuit.ca',
                'merchantservices.intuit.ca',
                'gopayment.intuit.ca',
                'gopayment.ca',
                'merchant.quickbooks.ca',
                'canevents.quickbooksconnect.com'
            ];
            config.internalHostCaQa = [
                'test.quickbooks.intuit.ca',
                'test.www.intuit.ca',
                'test.education.intuit.ca',
                'ww2.test.secure.intuit.ca',
                'ww2.perf.secure.intuit.ca'
            ];
            if (document.location.hostname.search('profile.intuit.ca') > -1) {
                try {
                    wa.internalHostArray.push('profile.intuit.ca');
                } catch (err) {
                }
                wa.siteHost = 'pfenca';
                wa.siteGroup = 'mktg';
                wa.siteName = 'aag';
            }
            if (document.location.hostname.search('profilefrancais.intuit.ca') > -1) {
                try {
                    wa.internalHostArray.push('profilefrancais.intuit.ca');
                } catch (err) {
                }
                wa.siteHost = 'pffrca';
                wa.siteGroup = 'mktg';
                wa.siteName = 'aag';
            }
            if (document.location.hostname.search('conseillerspro.intuit.ca') > -1)
                try {
                    wa.internalHostArray.push('conseillerspro.intuit.ca');
                } catch (err) {
                }
            if (document.location.hostname.search('education.intuit.ca') > -1) {
                wa.siteHost = 'quickbooks';
                wa.siteGroup = 'mktg';
                wa.siteName = 'fms';
            }
            if (document.location.hostname.search('quickbooks.intuit.com') > -1 && (document.location.pathname.search('community') > -1 || document.location.pathname.search('learn-support') > -1)) {
                wa.siteHost = 'qbcommunity';
                wa.siteGroup = 'care';
                wa.siteName = 'fms';
            }
            if (document.location.hostname.search('ww1.secure.intuit.ca') > -1)
                try {
                    wa.internalHostArray.push('ww1.secure.intuit.ca');
                } catch (err) {
                }
            if (document.location.hostname.search('quickbooksconnect.com') > -1)
                try {
                    wa.pagePath = document.location.pathname;
                } catch (err) {
                }
            config.internalHostFr = [
                'signup.quickbooks.intuit.com',
                'quickbooks.intuit.fr',
                'lesmoulins.club',
                'event-intuit.com',
                'global.intuit.com',
                'quickbooks.intuit.com'
            ];
            config.internalHostFrQa = [
                'qa.quickbooks.intuit.fr',
                'prodblue.quickbooks.intuit.fr'
            ];
            config.internalHostIn = [
                'signup.quickbooks.intuit.com',
                'www.quickbooks.in',
                'qbindia.intuit.com',
                'quickbooks.in',
                'quickbooks.intuit.com'
            ];
            config.internalHostInQa = [
                'test.www.quickbooks.in',
                'test.qbindia.intuit.com',
                'test.quickbooks.intuit.in',
                'preview.quickbooks.intuit.in'
            ];
            config.internalHostUk = [
                'signup.quickbooks.intuit.com',
                'global.intuit.co.uk',
                'enterprise.intuit.co.uk',
                'shop.quickbooks.co.uk',
                'www.quickbooks.co.uk',
                'www.intuit.co.uk',
                'quickbooks.intuit.co.uk',
                'enterprise.intuit.co.uk',
                'shop.quickbooks.co.uk',
                'proadvisor.intuit.co.uk',
                'quickbooksenligne.intuit.co.uk',
                'succespme.intuit.co.uk',
                'quickbooksonline.intuit.co.uk',
                'global.intuit.co.uk',
                'intuitglobal.co.uk',
                'qbofortrades.co.uk',
                'selfemployed.intuit.co.uk',
                'uk.selfemployed.intuit.com',
                'eu.eventscloud.com',
                'quickbooks.co.uk',
                'quickbooks.intuit.com',
                'events.intuit.com',
                'www.eiseverywhere.com',
                'uk.quickbooksconnect.com',
                'ukevents.quickbooksconnect.com'
            ];
            config.internalHostUkQa = [
                'perf.sr.quickbooks.intuit.co.uk',
                'qa.sr.intuit.co.uk',
                'qa.quickbooks.co.uk',
                'perf.quickbooks.co.uk',
                'uk.qbconnectdev.ycms2.com'
            ];
            config.internalHostRw = [
                'signup.quickbooks.intuit.com',
                'global.intuit.com',
                'enterprise.intuit.com',
                'shop.quickbooks.com',
                'www.intuit.com',
                'quickbooks.intuit.com',
                'enterprise.intuit.com',
                'shop.quickbooks.com',
                'proadvisor.intuit.com',
                'quickbooksenligne.intuit.com',
                'succespme.intuit.com',
                'quickbooksonline.intuit.com',
                'global.intuit.com',
                'intuitglobal.com',
                'qbofortrades.com',
                'www.intuit.ph',
                'intuit.ph',
                'quickbooks.intuit.ph',
                'quickbooks.intuit.sg',
                'intuit.sg',
                'www.intuit.sg',
                'www.intuit.hk',
                'intuit.hk',
                'quickbooks.intuit.hk',
                'www.intuit.ae',
                'intuit.ae',
                'quickbooks.intuit.ae',
                'www.intuit.com.my',
                'intuit.com.my',
                'quickbooks.intuit.com.my',
                'quickbooks.intuit.co.za',
                'merchantservices.intuit.com',
                'gopayment.intuit.com',
                'gopayment.com',
                'merchant.quickbooks.com'
            ];
            config.internalHostRwQa = [
                'test.quickbooks.intuit.com',
                'test.www.intuit.com'
            ];
            config.internalReferralDomains = [
                'intuit.com',
                'paycheckrecords.com',
                'quickbooksonline.com',
                'quickbooks.com',
                'intuitpayments.com',
                'intuitblog.com',
                'payroll.com',
                'intuit-gopayment.com',
                'quickbooksconnect.com',
                'firmofthefuture.com',
                'qbcommunity.com',
                'intuit.net',
                'zeropaper.com.br',
                'quickbooks.com.br',
                'intuit.ca',
                'quickbooks.co.uk',
                'intuit.co.uk',
                'quickbooks.in',
                'intuit.com.au',
                'intuit.ph',
                'intuit.com.my',
                'intuit.fr',
                'intuit.mx',
                'intuit.sg',
                'intuit.ae',
                'intuit.hk',
                'accounts.google.com',
                'eiseverywhere.com',
                'ycms2.com',
                'events.quickbooksconnect.com',
                'canevents.quickbooksconnect.com',
                'ukevents.quickbooksconnect.com',
                'auevents.quickbooksconnect.com',
                'eloqua.com'
            ];
            config.reportSuites = {
                'ems': {
                    'prod': 'intuitemsprod',
                    'qa': 'intuitemsqa'
                },
                'iop': {
                    'prod': 'intuitiopnewprod',
                    'qa': 'intuitiopnewqa'
                },
                'fms': {
                    'prod': 'intuitsbgprod',
                    'qa': 'intuitsbgqa'
                },
                'ics': {
                    'prod': 'intuitmarketsbgprod',
                    'qa': 'intuitsbgqa'
                },
                'pcs': {
                    'prod': 'intuitpcsprod',
                    'qa': 'intuitpcsqa'
                },
                'icom': {
                    'prod': 'intuiticomprod',
                    'qa': 'intuiticomqa'
                },
                'sbg': {
                    'prod': 'intuitsbgprod',
                    'qa': 'intuitsbgqa'
                },
                'qbes': {
                    'prod': 'intuitqbesprod',
                    'qa': 'intuitqbesqa'
                },
                'qbse': {
                    'prod': 'intuitqbse',
                    'qa': 'intuitqbseqa'
                },
                'br': {
                    'prod': 'intuitcasbgbrazilglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'mx': {
                    'prod': 'intuitcasbgmxglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'ca': {
                    'prod': 'intuitsbgcanadaglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'au': {
                    'prod': 'intuitcasbgaustraliaglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'uk': {
                    'prod': 'intuitcasbgukglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'rw': {
                    'prod': 'intuitcasbgrowglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'fr': {
                    'prod': 'intuitcasbgfranceglobal',
                    'qa': 'intuitca-sbg-global-qa'
                },
                'iksm': {
                    'prod': 'intuitiksm',
                    'qa': 'intuitiksmqa'
                },
                'in': {
                    'prod': 'intuitcasbgindiaglobal',
                    'qa': 'intuitca-sbg-global-qa'
                }
            };
            config.searchSites = {
                aol: {
                    pattern: /(\.|^)search\.aol\.|(\.|^)aolsearch\.com$/,
                    searchParam: 'q'
                },
                ask: {
                    pattern: /(\.|^)ask\.com$/,
                    searchParam: 'q'
                },
                avg: {
                    pattern: /(\.|i|^)search\.avg\.com$/,
                    searchParam: 'q'
                },
                baidu: {
                    pattern: /(\.|^)baidu\.com$/,
                    searchParam: 'wd'
                },
                bing: {
                    pattern: /(\.|^)bing\.com$/,
                    searchParam: 'q'
                },
                bt: {
                    pattern: /(\.|^)search\.bt\.com$/,
                    searchParam: 'p'
                },
                duckduckgo: {
                    pattern: /(\.|^)duckduckgo\.com$/,
                    searchParam: 'q'
                },
                earthlink: {
                    pattern: /(\.|^)search\.earthlink\.net$/,
                    searchParam: 'q'
                },
                ecosia: {
                    pattern: /(\.|^)ecosia\.org$/,
                    searchParam: 'q'
                },
                google: {
                    pattern: /^(www\.)?google\.|com\.google\.android\.googlequicksearchbox$/,
                    searchParam: 'q'
                },
                informationvine: {
                    pattern: /(\.|^)informationvine\.com/,
                    searchParam: 'q'
                },
                kvasir: {
                    pattern: /(\.|^)kvasir\.no$/,
                    searchParam: 'q'
                },
                lastfm: {
                    pattern: /(\.|^)s\.last\.fm/,
                    searchParam: 'q'
                },
                monstercrawler: {
                    pattern: /(\.|^)search\.monstercrawler\.com$/,
                    searchParam: 'q'
                },
                myway: {
                    pattern: /(\.|^)search\.myway\.com$/,
                    searchParam: 'q'
                },
                mywebsearch: {
                    pattern: /(\.|^)search\.mywebsearch\.com$/,
                    searchParam: 'searchfor'
                },
                rambler: {
                    pattern: /(\.|^)nova\.rambler\.ru$/,
                    searchParam: 'query'
                },
                reference: {
                    pattern: /(\.|^)reference\.com$/,
                    searchParam: 'q'
                },
                naver: {
                    pattern: /(\.|^)search\.naver\.com$/,
                    searchParam: 'query'
                },
                searchalot: {
                    pattern: /(\.|^)searchalot\.com$/,
                    searchParam: 'q'
                },
                searchencrypt: {
                    pattern: /(\.|^)searchencrypt\.com/,
                    searchParam: 'q'
                },
                so: {
                    pattern: /(\.|^)so\.com/,
                    searchParam: 'text'
                },
                sogou: {
                    pattern: /(\.|^)sogou\.com$/,
                    searchParam: 'query'
                },
                teoma: {
                    pattern: /(\.|^)teoma\.com$/,
                    searchParam: 'q'
                },
                webcrawler: {
                    pattern: /(\.|^)webcrawler\.com/,
                    searchParam: 'q'
                },
                xfinity: {
                    pattern: /(\.|^)search\.xfinity\.com$/,
                    searchParam: 'q'
                },
                yahoo: {
                    pattern: /(\.|^)search\.yahoo\.com$/,
                    searchParam: 'p'
                },
                yandex: {
                    pattern: /(www\.|^)yandex\./,
                    searchParam: 'text'
                }
            };
            config.socialSites = {
                blogspot: { pattern: /(\.|^)blogspot\./ },
                dailymotion: { pattern: /(\.|^)dailymotion\./ },
                deviantart: { pattern: /(\.|^)deviantart\.com/ },
                digg: { pattern: /(\.|^)digg\.com/ },
                disqus: { pattern: /(\.|^)disqus\.com$/ },
                facebook: { pattern: /(\.|^)facebook\.com$/ },
                fc2: { pattern: /(\.|^)fc2\.com$/ },
                flickr: { pattern: /(\.|^)flickr\.com$/ },
                foursquare: { pattern: /(\.|^)foursquare\.com$/ },
                goodreads: { pattern: /(\.|^)goodreads\.com$/ },
                googlePlus: { pattern: /(\.|^)plus.google\.com$/ },
                hatena: { pattern: /(\.|^)hatena\.ne\.jp$/ },
                instagram: { pattern: /(\.|^)instagram\.com$/ },
                linkedin: { pattern: /(\.|^)linkedin\.com$|^lnkd\.in$|com\.linkedin\.android/ },
                livejournal: { pattern: /(\.|^)livejournal\./ },
                meetup: { pattern: /(\.|^)meetup\.com$/ },
                myspace: { pattern: /(\.|^)myspace\.com$/ },
                nextdoor: { pattern: /(\.|^)nextdoor\.com$/ },
                pinterest: { pattern: /(\.|^)pinterest\.com|com\.pinterest$/ },
                reddit: { pattern: /(\.|^)reddit\.com$/ },
                slideshare: { pattern: /(\.|^)slideshare\.com$/ },
                stumbleupon: { pattern: /(\.|^)stumbleupon\.com$/ },
                tagged: { pattern: /(\.|^)tagged\.com|(\.|^)hi5\.com/ },
                taringa: { pattern: /(\.|^)taringa\.com$/ },
                tumblr: { pattern: /(\.|^)tumblr\.com$/ },
                twitter: { pattern: /^t\.co$|(\.|^)twitter\.com$/ },
                vimeo: { pattern: /(\.|^)vimeo\.com$/ },
                vk: { pattern: /(\.|^)vk\.com$/ },
                weibo: { pattern: /(\.|^)weibo\.com$/ },
                wordpress: { pattern: /(\.|^)wordpress\.com$/ },
                xing: { pattern: /(\.|^)xing\.com$/ },
                yahooAnswers: { pattern: /(\.|^)answers\.yahoo\.com$/ },
                yammer: { pattern: /(\.|^)yammer\.com$/ },
                yelp: { pattern: /(\.|^)yelp\./ },
                youtube: { pattern: /(\.|^)youtube\.com$/ },
                twelvesecondstv: { pattern: /(\.|^)12seconds\.tv$/ },
                fourtravel: { pattern: /(\.|^)4travel\.jp$/ },
                advogato: { pattern: /(\.|^)advogato\.org$/ },
                ameba: { pattern: /(\.|^)ameba\.jp$/ },
                anobil: { pattern: /(\.|^)anobil\.com$/ },
                asmallworld: { pattern: /(\.|^)asmallworld\.net$/ },
                avforums: { pattern: /(\.|^)avforumd\.com$/ },
                backtype: { pattern: /(\.|^)backtype\.com$/ },
                badoo: { pattern: /(\.|^)badoo\.com$/ },
                bebo: { pattern: /(\.|^)bebo\.com$/ },
                bigadda: { pattern: /(\.|^)bigadda\.com$/ },
                bigtent: { pattern: /(\.|^)bigtent\.com$/ },
                blip: { pattern: /(\.|^)blip\.no$/ },
                blackplanet: { pattern: /(\.|^)blackplanet\.com$/ },
                blogseesa: { pattern: /(\.|^)blog\.seesa\.jp$/ },
                blogster: { pattern: /(\.|^)blogster\.com$/ },
                blomotion: { pattern: /(\.|^)blomotion\.com$/ },
                bolt: { pattern: /(\.|^)bolt\.com$/ },
                brightknife: { pattern: /(\.|^)brightknife\.com$/ },
                buzznet: { pattern: /(\.|^)buzznet\.com$/ },
                cafemom: { pattern: /(\.|^)cafemom\.com$/ },
                care2: { pattern: /(\.|^)care2\.com$/ },
                classmates: { pattern: /(\.|^)classmates\.com$/ },
                cloob: { pattern: /(\.|^)cloob\.com$/ },
                collegeblender: { pattern: /(\.|^)collegeblender\.com$/ },
                cyworld: { pattern: /(\.|^)cyworld\.co\.kr$/ },
                cyworldcom: { pattern: /(\.|^)cyworld\.com\.cn$/ },
                delicious: { pattern: /(\.|^)delicious\.com$/ },
                diigo: { pattern: /(\.|^)diigo\.com$/ },
                draugiem: { pattern: /(\.|^)draugiem\.lv$/ },
                faceparty: { pattern: /(\.|^)faceparty\.com$/ },
                flixster: { pattern: /(\.|^)flixster\.com$/ },
                fotolog: { pattern: /(\.|^)fotolog\.com$/ },
                friendfeed: { pattern: /(\.|^)friendfeed\.com$/ },
                friendsreunited: { pattern: /(\.|^)friendsreunited\.com$/ },
                friendsreuniteduk: { pattern: /(\.|^)friendsreunited\.co\.uk$/ },
                friendster: { pattern: /(\.|^)friendster\.com$/ },
                fubar: { pattern: /(\.|^)fubar\.com$/ },
                gaiaonline: { pattern: /(\.|^)gaiaonline\.com$/ },
                geni: { pattern: /(\.|^)geni\.com$/ },
                grono: { pattern: /(\.|^)grono\.net$/ },
                habbo: { pattern: /(\.|^)habbo\.com$/ },
                hifive: { pattern: /(\.|^)hi5\.com$/ },
                hotnews: { pattern: /(\.|^)hotnews\.infoseek\.co\.jp$/ },
                hyves: { pattern: /(\.|^)hyves\.nl$/ },
                ibibo: { pattern: /(\.|^)ibibo\.com$/ },
                identi: { pattern: /(\.|^)identi\.ca$/ },
                imeem: { pattern: /(\.|^)imeem\.com$/ },
                intensedebate: { pattern: /(\.|^)intensedebate\.com$/ },
                ircgalleria: { pattern: /(\.|^)irc-galleria\.net$/ },
                iwiw: { pattern: /(\.|^)iwiw\.hu$/ },
                jaiku: { pattern: /(\.|^)jaiku\.com$/ },
                jpmyspace: { pattern: /(\.|^)jp\.myspace\.com$/ },
                kaixin: { pattern: /(\.|^)kaixin(001|002)\.com$/ },
                kakaku: { pattern: /(\.|^)kakaku\.com$/ },
                kanshin: { pattern: /(\.|^)kanshin\.com$/ },
                kozocom: { pattern: /(\.|^)kozocom\.com$/ },
                last: { pattern: /(\.|^)last\.fm$/ },
                lnkd: { pattern: /(\.|^)lnkd\.in$/ },
                matomenaver: { pattern: /(\.|^)matome\.naver\.jp$/ },
                metoday: { pattern: /(\.|^)me2day\.net$/ },
                misterwong: { pattern: /(\.|^)mister-wong\.com$/ },
                mixi: { pattern: /(\.|^)mixi\.jp$/ },
                mouthshut: { pattern: /(\.|^)mouthshut\.com$/ },
                mpweixin: { pattern: /(\.|^)mp\.weixin\.qq\.com$/ },
                multiply: { pattern: /(\.|^)multiply\.com$/ },
                mumsnet: { pattern: /(\.|^)mumsnet.com$/ },
                myheritage: { pattern: /(\.|^)myheritage\.com$/ },
                mylife: { pattern: /(\.|^)mylife\.com$/ },
                myyearbook: { pattern: /(\.|^)myyearbook\.com$/ },
                naszaklasa: { pattern: /(\.|^)nasza-klasa\.pl$/ },
                netlog: { pattern: /(\.|^)netlog\.com$/ },
                nettby: { pattern: /(\.|^)nettby\.no$/ },
                netvibes: { pattern: /(\.|^)netvibes\.com$/ },
                nicovideo: { pattern: /(\.|^)nicovideo\.jp$/ },
                ning: { pattern: /(\.|^)ning\.com$/ },
                odnoklassniki: { pattern: /(\.|^)odnoklassniki\.ru$/ },
                okru: { pattern: /(\.|^)ok\.ru$/ },
                orkut: { pattern: /(\.|^)orkut\.com$/ },
                pakila: { pattern: /(\.|^)pakila\.jp$/ },
                photobucket: { pattern: /(\.|^)photobucket\.com$/ },
                pinterestintl: { pattern: /(\.|^pinterest)\.[A-Za-z]{2,3}(\.uk|kr)?$/ },
                plurk: { pattern: /(\.|^)plurk\.com$/ },
                plaxo: { pattern: /(\.|^)plaxo\.com$/ },
                plusgoogle: { pattern: /(\.|^)plus\.google\.com$/ },
                post: { pattern: /(\.|^)po\.st$/ },
                renren: { pattern: /(\.|^)renren\.com$/ },
                smcb: { pattern: /(\.|^)smcb\.jp$/ },
                smugmug: { pattern: /(\.|^)smugmug\.com$/ },
                sonico: { pattern: /(\.|^)sonico\.com$/ },
                studivz: { pattern: /(\.|^)studivz\.net$/ },
                tonesixthree: { pattern: /(\.|^)t\.163\.com$/ },
                thexun: { pattern: /(\.|^)t\.hexun\.com$/ },
                tifeng: { pattern: /(\.|^)t\.ifeng\.com$/ },
                tpeople: { pattern: /(\.|^)t\.people\.com\.cn$/ },
                tqq: { pattern: /(\.|^)t\.qq\.com$/ },
                tsina: { pattern: /(\.|^)t\.sina\.com\.cn$/ },
                tabelog: { pattern: /(\.|^)tabelog\.com$/ },
                thefancy: { pattern: /(\.|^)site\.com$/ },
                toutiao: { pattern: /(\.|^)toutiao\.com$/ },
                tripit: { pattern: /(\.|^)tripit\.com$/ },
                trombi: { pattern: /(\.|^)trombi\.com$/ },
                trytrend: { pattern: /(\.|^)trytrend.jp\.com$/ },
                tuenti: { pattern: /(\.|^)tuenti\.com$/ },
                twine: { pattern: /(\.|^)twine\.com$/ },
                uhuru: { pattern: /(\.|^)uhuru\.jp$/ },
                viadeo: { pattern: /(\.|^)viadeo\.com$/ },
                wayn: { pattern: /(\.|^)wayn\.com$/ },
                weourfamily: { pattern: /(\.|^)weourfamily\.com$/ },
                werkenntwen: { pattern: /(\.|^)wer-kennt-wen\.de$/ },
                xanga: { pattern: /(\.|^)xanga\.com$/ },
                yaplog: { pattern: /(\.|^)yaplog\.jp$/ },
                yelpuk: { pattern: /(\.|^)yelp\.co\.uk$/ },
                youku: { pattern: /(\.|^)youku\.com$/ },
                yozmdaum: { pattern: /(\.|^)yozm\.daum\.net$/ },
                yuku: { pattern: /(\.|^)yuku\.com$/ },
                zhihu: { pattern: /(\.|^)zhihu\.com$/ },
                zooomr: { pattern: /(\.|^)zooomr\.com$/ }
            };
            config.countryTldMap = {
                '.br': 'br',
                '.ca': 'ca',
                '.uk': 'gb',
                '.au': 'au',
                '.in': 'in',
                '.mx': 'mx',
                '.my': 'my',
                '.ph': 'ph',
                '.fr': 'fr',
                '.sg': 'sg',
                '.ae': 'ae',
                '.hk': 'hk',
                '.za': 'za'
            };
            config.countryPathMap = {
                'br': 'br',
                'ca': 'ca',
                'uk': 'gb',
                'au': 'au',
                'in': 'in',
                'mx': 'mx',
                'my': 'my',
                'ph': 'ph',
                'fr': 'fr',
                'sg': 'sg',
                'ae': 'ae',
                'hk': 'hk',
                'za': 'za'
            };
            config.countryPathDomainExclusions = ['iop.intuit.com'];
            config.addDataAttribute = function () {
                var host = wa.hostname.match(/(www|perfsp|qasp)\.intuit\.com/);
                if (host)
                    return true;
                else
                    return false;
            };
            config.formAnalysisEvents = {};
            config.marketingChannelCookieNames = {
                'com': {
                    'prod': {
                        'main': 'qbn.qbo_sc',
                        'timer': 'qbn.qbo_sctimer'
                    },
                    'dev': {
                        'main': 'qbn.ptc.qbo_sc',
                        'timer': 'qbn.ptc.qbo_sctimer'
                    }
                },
                'intl': {
                    'prod': {
                        'main': 'qbn.sbm_global_sc_channel',
                        'timer': 'qbn.sbm_global_sc_channel_timer'
                    },
                    'dev': {
                        'main': 'qbn.sbm_global_sc_channel_test',
                        'timer': 'qbn.sbm_global_sc_channel_test_timer'
                    }
                }
            };
            config.countryMap = {
                AF: 'Afghanistan',
                AX: 'Aland Islands',
                AL: 'Albania',
                DZ: 'Algeria',
                AS: 'American Samoa',
                AD: 'Andorra',
                AO: 'Angola',
                AI: 'Anguilla',
                AQ: 'Antarctica',
                AG: 'Antigua And Barbuda',
                AR: 'Argentina',
                AM: 'Armenia',
                AW: 'Aruba',
                AU: 'Australia',
                AT: 'Austria',
                AZ: 'Azerbaijan',
                BS: 'Bahamas',
                BH: 'Bahrain',
                BD: 'Bangladesh',
                BB: 'Barbados',
                BY: 'Belarus',
                BE: 'Belgium',
                BZ: 'Belize',
                BJ: 'Benin',
                BM: 'Bermuda',
                BT: 'Bhutan',
                BO: 'Bolivia',
                BA: 'Bosnia And Herzegovina',
                BW: 'Botswana',
                BV: 'Bouvet Island',
                BR: 'Brazil',
                IO: 'British Indian Ocean Territory',
                BN: 'Brunei Darussalam',
                BG: 'Bulgaria',
                BF: 'Burkina Faso',
                BI: 'Burundi',
                KH: 'Cambodia',
                CM: 'Cameroon',
                CA: 'Canada',
                CV: 'Cape Verde',
                KY: 'Cayman Islands',
                CF: 'Central African Republic',
                TD: 'Chad',
                CL: 'Chile',
                CN: 'China',
                CX: 'Christmas Island',
                CC: 'Cocos (Keeling) Islands',
                CO: 'Colombia',
                KM: 'Comoros',
                CG: 'Congo',
                CD: 'Congo, Democratic Republic',
                CK: 'Cook Islands',
                CR: 'Costa Rica',
                CI: 'Cote D\'Ivoire',
                HR: 'Croatia',
                CU: 'Cuba',
                CY: 'Cyprus',
                CZ: 'Czech Republic',
                DK: 'Denmark',
                DJ: 'Djibouti',
                DM: 'Dominica',
                DO: 'Dominican Republic',
                EC: 'Ecuador',
                EG: 'Egypt',
                SV: 'El Salvador',
                GQ: 'Equatorial Guinea',
                ER: 'Eritrea',
                EE: 'Estonia',
                ET: 'Ethiopia',
                FK: 'Falkland Islands (Malvinas)',
                FO: 'Faroe Islands',
                FJ: 'Fiji',
                FI: 'Finland',
                FR: 'France',
                GF: 'French Guiana',
                PF: 'French Polynesia',
                TF: 'French Southern Territories',
                GA: 'Gabon',
                GM: 'Gambia',
                GE: 'Georgia',
                DE: 'Germany',
                GH: 'Ghana',
                GI: 'Gibraltar',
                GR: 'Greece',
                GL: 'Greenland',
                GD: 'Grenada',
                GP: 'Guadeloupe',
                GU: 'Guam',
                GT: 'Guatemala',
                GG: 'Guernsey',
                GN: 'Guinea',
                GW: 'Guinea-Bissau',
                GY: 'Guyana',
                HT: 'Haiti',
                HM: 'Heard Island & Mcdonald Islands',
                VA: 'Holy See (Vatican City State)',
                HN: 'Honduras',
                HK: 'Hong Kong',
                HU: 'Hungary',
                IS: 'Iceland',
                IN: 'India',
                ID: 'Indonesia',
                IR: 'Iran, Islamic Republic Of',
                IQ: 'Iraq',
                IE: 'Ireland',
                IM: 'Isle Of Man',
                IL: 'Israel',
                IT: 'Italy',
                JM: 'Jamaica',
                JP: 'Japan',
                JE: 'Jersey',
                JO: 'Jordan',
                KZ: 'Kazakhstan',
                KE: 'Kenya',
                KI: 'Kiribati',
                KR: 'Korea',
                KW: 'Kuwait',
                KG: 'Kyrgyzstan',
                LA: 'Lao People\'s Democratic Republic',
                LV: 'Latvia',
                LB: 'Lebanon',
                LS: 'Lesotho',
                LR: 'Liberia',
                LY: 'Libyan Arab Jamahiriya',
                LI: 'Liechtenstein',
                LT: 'Lithuania',
                LU: 'Luxembourg',
                MO: 'Macao',
                MK: 'Macedonia',
                MG: 'Madagascar',
                MW: 'Malawi',
                MY: 'Malaysia',
                MV: 'Maldives',
                ML: 'Mali',
                MT: 'Malta',
                MH: 'Marshall Islands',
                MQ: 'Martinique',
                MR: 'Mauritania',
                MU: 'Mauritius',
                YT: 'Mayotte',
                MX: 'Mexico',
                FM: 'Micronesia, Federated States Of',
                MD: 'Moldova',
                MC: 'Monaco',
                MN: 'Mongolia',
                ME: 'Montenegro',
                MS: 'Montserrat',
                MA: 'Morocco',
                MZ: 'Mozambique',
                MM: 'Myanmar',
                NA: 'Namibia',
                NR: 'Nauru',
                NP: 'Nepal',
                NL: 'Netherlands',
                AN: 'Netherlands Antilles',
                NC: 'New Caledonia',
                NZ: 'New Zealand',
                NI: 'Nicaragua',
                NE: 'Niger',
                NG: 'Nigeria',
                NU: 'Niue',
                NF: 'Norfolk Island',
                MP: 'Northern Mariana Islands',
                NO: 'Norway',
                OM: 'Oman',
                PK: 'Pakistan',
                PW: 'Palau',
                PS: 'Palestinian Territory, Occupied',
                PA: 'Panama',
                PG: 'Papua New Guinea',
                PY: 'Paraguay',
                PE: 'Peru',
                PH: 'Philippines',
                PN: 'Pitcairn',
                PL: 'Poland',
                PT: 'Portugal',
                PR: 'Puerto Rico',
                QA: 'Qatar',
                RE: 'Reunion',
                RO: 'Romania',
                RU: 'Russian Federation',
                RW: 'Rwanda',
                BL: 'Saint Barthelemy',
                SH: 'Saint Helena',
                KN: 'Saint Kitts And Nevis',
                LC: 'Saint Lucia',
                MF: 'Saint Martin',
                PM: 'Saint Pierre And Miquelon',
                VC: 'Saint Vincent And Grenadines',
                WS: 'Samoa',
                SM: 'San Marino',
                ST: 'Sao Tome And Principe',
                SA: 'Saudi Arabia',
                SN: 'Senegal',
                RS: 'Serbia',
                SC: 'Seychelles',
                SL: 'Sierra Leone',
                SG: 'Singapore',
                SK: 'Slovakia',
                SI: 'Slovenia',
                SB: 'Solomon Islands',
                SO: 'Somalia',
                ZA: 'South Africa',
                GS: 'South Georgia And Sandwich Isl.',
                ES: 'Spain',
                LK: 'Sri Lanka',
                SD: 'Sudan',
                SR: 'Suriname',
                SJ: 'Svalbard And Jan Mayen',
                SZ: 'Swaziland',
                SE: 'Sweden',
                CH: 'Switzerland',
                SY: 'Syrian Arab Republic',
                TW: 'Taiwan',
                TJ: 'Tajikistan',
                TZ: 'Tanzania',
                TH: 'Thailand',
                TL: 'Timor-Leste',
                TG: 'Togo',
                TK: 'Tokelau',
                TO: 'Tonga',
                TT: 'Trinidad And Tobago',
                TN: 'Tunisia',
                TR: 'Turkey',
                TM: 'Turkmenistan',
                TC: 'Turks And Caicos Islands',
                TV: 'Tuvalu',
                UG: 'Uganda',
                UA: 'Ukraine',
                AE: 'United Arab Emirates',
                GB: 'United Kingdom',
                US: 'United States',
                UM: 'United States Outlying Islands',
                UY: 'Uruguay',
                UZ: 'Uzbekistan',
                VU: 'Vanuatu',
                VE: 'Venezuela',
                VN: 'Viet Nam',
                VG: 'Virgin Islands, British',
                VI: 'Virgin Islands, U.S.',
                WF: 'Wallis And Futuna',
                EH: 'Western Sahara',
                YE: 'Yemen',
                ZM: 'Zambia',
                ZW: 'Zimbabwe'
            };
            setTimeout(function () {
                if (window.intuit && intuit.tracking && intuit.tracking.ecs && wa && typeof wa.trackLinkPlus == 'function')
                    try {
                        window.intuit.tracking.ecs.webAnalytics.on('track', function (event, properties, options) {
                            if (event == 'lead:create_submitted') {
                                var leadFromSeg = properties.lead_xref_id || '';
                                if (leadFromSeg !== '' && wa)
                                    wa.trackLinkPlus('link', {
                                        linkName: 'lead_submit_success',
                                        leadEvalID: leadFromSeg
                                    });
                            }
                        });
                    } catch (err) {
                    }
            }, 3000);
        }, 3499180, 496143);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to TT'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var data = {};
                if ('')
                    data['value'] = '';
                if ('')
                    data['currency'] = '';
                if ('')
                    data['content_name'] = '';
                if ('')
                    data['content_category'] = '';
                if ('')
                    data['content_ids'] = '' ? ''.split(',') : '';
                if ('')
                    data['content_type'] = '';
                if ('')
                    data['num_items'] = '';
                if ('')
                    data['search_string'] = '';
                if ('')
                    data['status'] = '';
                var eventTrackingPixelId = '1827482914219447';
                var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_turbotax' : 'CustomEvent';
                var trackString = 'CustomEvent' === 'CustomEvent' ? eventTrackingPixelId ? 'trackSingleCustom' : 'trackCustom' : eventTrackingPixelId ? 'trackSingle' : 'track';
                var makeRequest = function () {
                    if (eventTrackingPixelId)
                        fbq(trackString, eventTrackingPixelId, eventType, data);
                    else
                        fbq(trackString, eventType, data);
                };
                if (true)
                    var interval = setInterval(function () {
                        if (window.fbq) {
                            makeRequest();
                            clearInterval(interval);
                        }
                    }, 100);
                else
                    makeRequest();
            });
        }, 2762238, [3309959], 585664, [520782]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function () {
                        var returnVal = 'false';
                        try {
                            var publishPath = Bootstrapper.ensightenOptions.publishPath, truePaths = [
                                    'us_fms_',
                                    'us_qbes_',
                                    'us_ems_',
                                    'tealium_poc'
                                ];
                            for (var i = 0, max = truePaths.length; i < max; i++) {
                                var patt = new RegExp('^' + truePaths[i], 'i');
                                returnVal = patt.test(publishPath) ? 'true' : 'false';
                                if (returnVal === 'true')
                                    break;
                            }
                            return returnVal;
                        } catch (err) {
                            return returnVal;
                        }
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'page',
                    trigger: Bootstrapper.data.immediateTrigger,
                    dataDefName: 'AAM ECID isAllowed',
                    collection: 'AAM',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '55364' });
            }, 55364);
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function () {
                        if (window.location.href.indexOf('quickbooks.intuit.com/signup/core/') == -1 && window.location.href.indexOf('selfemployed.intuit.com/login?') == -1 && window.location.href.indexOf('quickbooks.intuit.com/signup/qboa/') == -1 && window.location.href.indexOf('quickbooks.intuit.com/signup/proadvisor/') == -1 && window.location.href.indexOf('signup.quickbooks.intuit.com/') == -1 && window.location.href.indexOf('signup-e2e.quickbooks.intuit.com/') == -1)
                            return 'no';
                        else
                            return 'yes';
                    },
                    load: 'page',
                    trigger: Bootstrapper.data.immediateTrigger,
                    dataDefName: 'QBSE Sign In-Create Account Page and WW SUI pages',
                    collection: 'QBO QBSE',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '56949' });
            }, 56949);
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to QB'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var countingMethod = 'standard';
                var dl = 'dataLayer';
                var floodLightId = 'DC-8344993';
                var send_to = [];
                if (floodLightId) {
                    var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui001' + '+' + countingMethod;
                    send_to.push(receiver);
                } else {
                    var ids = [];
                    for (var i in ids) {
                        var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui001' + '+' + countingMethod;
                        send_to.push(receiver);
                    }
                }
                var allow_custom_scripts = 'true' == 'true' ? true : false;
                var eventObj = {
                    'allow_custom_scripts': allow_custom_scripts,
                    'send_to': send_to
                };
                if (countingMethod === 'per_session')
                    if ('')
                        eventObj.session_id = '';
                if (countingMethod === 'transactions') {
                    if ('')
                        eventObj.value = '';
                    if ('')
                        eventObj.transaction_id = '';
                    if ('')
                        eventObj.quantity = '';
                }
                window[dl] = window[dl] || [];
                window.gtag = window.gtag || function gtag() {
                    window[dl].push(arguments);
                };
                gtag('event', 'conversion', eventObj);
            });
        }, 2762233, [2762202], 585584, [585580]);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add([
                'ICom - Button Click to Mint',
                'ICom - Button Click to ProConnect',
                'ICom - Button Click to QB',
                'ICom - Button Click to TT'
            ], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var countingMethod = 'standard';
                var dl = 'dataLayer';
                var floodLightId = 'DC-8344993';
                var send_to = [];
                if (floodLightId) {
                    var receiver = floodLightId + '/' + 'all_00' + '/' + 'intui0' + '+' + countingMethod;
                    send_to.push(receiver);
                } else {
                    var ids = [];
                    for (var i in ids) {
                        var receiver = ids[i] + '/' + 'all_00' + '/' + 'intui0' + '+' + countingMethod;
                        send_to.push(receiver);
                    }
                }
                var allow_custom_scripts = 'true' == 'true' ? true : false;
                var eventObj = {
                    'allow_custom_scripts': allow_custom_scripts,
                    'send_to': send_to
                };
                if (countingMethod === 'per_session')
                    if ('')
                        eventObj.session_id = '';
                if (countingMethod === 'transactions') {
                    if ('')
                        eventObj.value = '';
                    if ('')
                        eventObj.transaction_id = '';
                    if ('')
                        eventObj.quantity = '';
                }
                window[dl] = window[dl] || [];
                window.gtag = window.gtag || function gtag() {
                    window[dl].push(arguments);
                };
                gtag('event', 'conversion', eventObj);
            });
        }, 2762237, [2762202], 585587, [585580]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window._waConfig = window._waConfig || {};
            var config = window._waConfig;
            config.lastUpdate = config.lastUpdate || [];
            config.lastUpdate.push('2020|11|16');
            config.dataReady = true;
            window._waDataElements = window._waDataElements || {};
            var dataElements = window._waDataElements;
            dataElements.articleTitle = {
                definition: function (data, config, utils, wa) {
                    if (window.LITHIUM.CommunityJsonObject.Page.object.subject)
                        return window.LITHIUM.CommunityJsonObject.Page.object.subject;
                    else
                        return null;
                }
            };
            dataElements.articleId = {
                definition: function (data, config, utils, wa) {
                    if (window.LITHIUM.CommunityJsonObject.Page.object.id)
                        return window.LITHIUM.CommunityJsonObject.Page.object.id;
                    else
                        return null;
                }
            };
            dataElements.articleProductType = {
                definition: function (data, config, utils, wa) {
                    try {
                        var metas = document.getElementsByTagName('meta');
                        var metaVals = '';
                        for (var i = 0; i < metas.length; i++)
                            if (metas[i].getAttribute('property') === 'article:tag')
                                metaVals = metaVals + metas[i].getAttribute('content') + '|';
                        if (metaVals != '') {
                            metaVals = metaVals.substring(0, metaVals.length - 1);
                            return metaVals;
                        } else
                            return null;
                    } catch (err) {
                        console.error('[wa - getMeta] -> Error \n');
                        return null;
                    }
                }
            };
            dataElements.cookie = {
                runOrder: 'first',
                definition: function (data, config, utils, wa) {
                    return utils.getAllCookies();
                }
            };
            dataElements.queryString = {
                runOrder: 'first',
                definition: function (data, config, utils, wa) {
                    return utils.getAllQueryStringParams(undefined, true);
                }
            };
            dataElements.pageUrl = {
                definition: function (data, config, utils, wa) {
                    return window.document.location.href;
                }
            };
            dataElements.org = {
                definition: function (data, config, utils, wa) {
                    return 'Segment: sbseg';
                }
            };
            dataElements.scope = {
                definition: function (data, config, utils, wa) {
                    return 'Segment: quickbooks';
                }
            };
            dataElements.purpose = {
                definition: function (data, config, utils, wa) {
                    return 'Segment: care';
                }
            };
            dataElements.cleanUrl = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.pageUrl;
                    retVal = retVal.indexOf('#__utm') > -1 ? retVal.substr(0, retVal.indexOf('#__utm')) : retVal;
                    if (data.queryString['gclid'])
                        retVal = retVal.replace(data.queryString['gclid'], '');
                    if (data.queryString['_requestid'])
                        retVal = retVal.replace(data.queryString['_requestid'], '');
                },
                dependencies: ['pageUrl']
            };
            dataElements.pageUrlNoQuery = {
                definition: function (data, config, utils, wa) {
                    var retVal = [
                        location.protocol,
                        '//',
                        location.host,
                        location.pathname
                    ].join('');
                    return retVal;
                }
            };
            dataElements.hostname = {
                definition: function (data, config, utils, wa) {
                    return window.document.location.hostname;
                }
            };
            dataElements.pathname = {
                definition: function (data, config, utils, wa) {
                    return document.location.pathname;
                }
            };
            dataElements.baseDomain = {
                definition: function (data, config, utils, wa) {
                    var hostSplit = data.hostname.split('.');
                    return hostSplit.slice(-2).join('.');
                },
                dependencies: ['hostname']
            };
            dataElements.referrer = {
                definition: function () {
                    return window.document.referrer || '';
                }
            };
            dataElements.referrerDomain = {
                definition: function (data, config, utils, wa) {
                    var allButPath = data.referrer.replace(/(\/\/[^\/]+\/).*/, '$1');
                    var cleanDomain = allButPath.replace(/www.|http:|https:|\//g, '');
                    cleanDomain = cleanDomain.indexOf('mail.') > -1 ? utils.spliceDelimitedString(cleanDomain, '.', 3) : cleanDomain;
                    return cleanDomain;
                },
                dependencies: ['referrer']
            };
            dataElements.referrerPath = {
                definition: function (data, config, utils, wa) {
                    var allButPath = data.referrer.replace(/(\/\/[^\/]+\/).*/, '$1');
                    var path = data.referrer.replace(allButPath, '');
                    return path;
                },
                dependencies: ['referrer']
            };
            dataElements.refUrlSbg = {
                definition: function (data, config, utils, wa) {
                    var refUrlSbg = '';
                    if (data.referrer && data.referrer != data.pageUrl) {
                        var referrerIsSbg = false;
                        for (var i = 0; i < config.internalHostSbg.length; i++)
                            if (data.referrerDomain == config.internalHostSbg[i]) {
                                referrerIsSbg = true;
                                break;
                            }
                        if (!referrerIsSbg)
                            refUrlSbg = data.referrer;
                    }
                    return refUrlSbg;
                },
                dependencies: [
                    'referrer',
                    'referrerDomain'
                ]
            };
            dataElements.localRefUrl = {
                definition: function (data, config, utils, wa) {
                    var localReferrer = '';
                    if (data.referrer) {
                        var referralIsLocal = false;
                        for (var i = 0; i < data.internalHostArray.length; i++)
                            if (data.referrerDomain == data.internalHostArray[i]) {
                                referralIsLocal = true;
                                break;
                            }
                        if (!referralIsLocal)
                            return data.referrer;
                    }
                    return localReferrer;
                },
                dependencies: [
                    'referrer',
                    'referrerDomain',
                    'internalHostArray'
                ]
            };
            dataElements.refDomainLocal = {
                definition: function (data, config, utils, wa) {
                    if (!utils.isVarEmpty(data.localRefUrl))
                        return data.referrer.split('/')[2];
                },
                dependencies: [
                    'localRefUrl',
                    'referrer'
                ]
            };
            dataElements.isQBSE = {
                definition: function (data, config, utils, wa) {
                    if (data.publishPathCountry == 'us')
                        if (/.*quickbooks\.intuit\.com/.test(data.hostname) && (/.*\/self\-?employed\/?/.test(data.pathname) || /\/(pricing|products)\/?/.test(data.pathname) || /\/(r|oa)\/.*self\-?employ(ed|ment)\-/.test(data.pathname)))
                            return true;
                        else {
                            if (/selfemployed/.test(data.hostname))
                                return true;
                        }
                    else if (data.publishPathCountry == 'uk')
                        return true;
                    return false;
                },
                dependencies: [
                    'hostname',
                    'pathname',
                    'publishPathCountry'
                ]
            };
            dataElements.reportSuiteSites = {
                definition: function (data, config, utils, wa) {
                    var sites = [];
                    if (data.publishPathCountry === 'us' || data.publishPathCountry === 'apps')
                        if (data.siteName == 'ems')
                            if (data.iopAll === 'true') {
                                sites.push('ems');
                                sites.push('iop');
                            } else if (data.iopAll === 'false')
                                sites.push('iop');
                            else
                                sites.push('ems');
                        else if (data.siteName == 'aag' || data.siteName == 'fms' || data.siteName == 'sbg')
                            sites.push('fms');
                        else if (data.siteName == 'psd' || data.siteName == 'ims' || data.siteName == 'pcs')
                            sites.push('pcs');
                        else {
                            if (!utils.isVarEmpty(data.siteName))
                                sites.push(data.siteName);
                        }
                    else if (data.publishPathCountry)
                        sites.push(data.publishPathCountry);
                    else if (wa._log)
                        wa._log('No idea which base report suite to use', 'warn');
                    if (data.isQBSE)
                        sites.push('qbse');
                    if (!utils.isIn('sbg', sites))
                        sites.unshift('sbg');
                    return sites;
                },
                dependencies: [
                    'siteName',
                    'iopAll',
                    'isQBSE',
                    'publishPathCountry'
                ]
            };
            dataElements.internalHostArray = {
                definition: function (data, config, utils, wa) {
                    var internalHosts = [];
                    if (data.publishPathCountry === 'us' || data.publishPathCountry === 'apps' || data.publishPathCountry === 'int') {
                        for (var i = 0; i < data.reportSuiteSites.length; i++) {
                            var site = data.reportSuiteSites[i];
                            var siteHostList = config['internalHost' + utils.capitalize(site)];
                            if (site == 'sbg' && data.reportSuiteSites.length > 1)
                                continue;
                            if (!utils.isVarEmpty(siteHostList))
                                internalHosts = internalHosts.concat(siteHostList);
                        }
                        if (internalHosts.length > 0)
                            internalHosts = internalHosts.concat(config.internalHostAllLocal);
                        else {
                            config.internalHostQaDomains.push(data.hostname);
                            internalHosts = ['hostListNotFound'];
                        }
                    } else
                        internalHosts = config['internalHost' + utils.capitalize(data.publishPathCountry)] || ['hostListNotFound'];
                    return internalHosts;
                },
                dependencies: [
                    'hostname',
                    'reportSuiteSites',
                    'publishPathCountry'
                ]
            };
            dataElements.isProd = {
                definition: function (data, config, utils, wa) {
                    for (var i = 0; i < data.internalHostArray.length; i++)
                        if (data.internalHostArray[i] == 'hostListNotFound')
                            return false;
                        else if (data.internalHostArray[i] == data.hostname) {
                            return true;
                            break;
                        }
                    return false;
                },
                dependencies: [
                    'internalHostArray',
                    'hostname'
                ]
            };
            dataElements.reportSuiteOverride = {};
            dataElements.reportSuite = {
                definition: function (data, config, utils, wa) {
                    if (data.reportSuiteOverride)
                        return data.reportSuiteOverride;
                    else {
                        var reportSuites = [];
                        var rsType = 'qa';
                        if (data.isProd)
                            rsType = 'prod';
                        for (var i = 0; i < data.reportSuiteSites.length; i++) {
                            var site = data.reportSuiteSites[i];
                            if (!utils.isVarEmpty(config.reportSuites[site]) && !utils.isVarEmpty(config.reportSuites[site][rsType]))
                                if (!utils.isIn(config.reportSuites[site][rsType], reportSuites))
                                    reportSuites.push(config.reportSuites[site][rsType]);
                        }
                        if (reportSuites.length < 1)
                            reportSuites.push(config.reportSuites.sbg.qa);
                        return reportSuites.join(',');
                    }
                },
                dependencies: [
                    'reportSuiteSites',
                    'isProd',
                    'reportSuiteOverride'
                ]
            };
            dataElements.trackExitLinks = {
                definition: function (data, config, utils, wa) {
                    return data.reportSuiteOverride ? true : data.isProd;
                },
                dependencies: [
                    'reportSuiteOverride',
                    'isProd'
                ]
            };
            dataElements.siteName = {
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    var siteName = this.explicitValue || '';
                    if (data.publishPathCountry !== 'us' && !siteName)
                        siteName = 'fms';
                    if (wa.siteHost.indexOf('intuitmarket') == 0)
                        siteName = 'ics';
                    if (siteName === 'psd' || siteName === 'ims')
                        siteName = 'pcs';
                    return siteName;
                },
                dependencies: [
                    'publishPathCountry',
                    'siteHost'
                ]
            };
            dataElements.siteGroup = {
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    var siteGroup = this.explicitValue || '';
                    if (data.publishPathCountry !== 'us' && !siteGroup || data.siteHost.indexOf('intuitmarket') == 0)
                        siteGroup = 'mktg';
                    return siteGroup;
                },
                dependencies: [
                    'publishPathCountry',
                    'siteName'
                ]
            };
            dataElements.siteHost = {
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    var siteHost = this.explicitValue || '';
                    if (data.publishPathCountry !== 'us' && !siteHost) {
                        if (utils.isIn('quickbooks.intuit.com', data.hostname))
                            siteHost = 'quickbooks';
                        if (utils.isIn('zeropaper.com.br', data.hostname))
                            siteHost = 'zeropaper';
                        if (utils.isIn('intuitmarket.intuit.com', data.hostname))
                            siteHost = 'intuitmarket';
                    }
                    return siteHost || data.hostname;
                },
                dependencies: ['hostname']
            };
            dataElements.pagePath = {
                definition: function (data, config, utils, wa) {
                    return data.pathname;
                },
                dependencies: ['pathname']
            };
            dataElements.pageCleanPath = {
                definition: function (data, config, utils, wa) {
                    var path = data.pagePath;
                    var re = /(\/|^)(var|uk|au|ca|global|eu|br|fr-ca|mx|za|fr|in)(?=\/|$)/g;
                    path = re.test(path) ? path.replace(re, '') : path;
                    path = path === '/' || path === '' ? 'index' : path;
                    if (path.indexOf('/') === 0)
                        path = path.replace('/', '');
                    if (path.indexOf(';') > 0)
                        path = path.substr(0, path.indexOf(';'));
                    if (path.indexOf('#') === path.length - 1)
                        path = path.replace('#', '');
                    if (path.lastIndexOf('/') === path.length - 1)
                        path = path.slice(0, path.lastIndexOf('/'));
                    if (data.addIndexToPath) {
                        if (path.indexOf('.') < 0 && path !== 'index')
                            path += '/';
                        if (path.lastIndexOf('/') == path.length - 1)
                            path += 'index';
                    }
                    if (wa.siteName === 'qbes') {
                        var cleanQbesPath = /(^enterprise\/)|(^desktop\/enterprise\/)/;
                        path = cleanQbesPath.test(path) ? path.replace(cleanQbesPath, '') : path;
                        path = path.replace(/\.jsp$/i, '');
                    }
                    if (wa.siteName === 'pcs') {
                        var cleanPcsPage = /(^desktop\/)/;
                        path = cleanPcsPage.test(path) ? path.replace(cleanPcsPage, '') : path;
                        path = path.replace(/\.jsp$/i, '');
                    }
                    if (wa.siteName === 'ems') {
                        var cleanEmsPath = /^payroll\//;
                        path = cleanEmsPath.test(path) ? path.replace(cleanEmsPath, '') : path;
                        path = path.replace(/\.jsp$/i, '');
                    }
                    return path;
                },
                dependencies: [
                    'pagePath',
                    'siteName',
                    'addIndexToPath'
                ]
            };
            dataElements.addIndexToPath = {
                definition: function (data, config, utils, wa) {
                    return true;
                }
            };
            dataElements.channel = {
                definition: function (data, config, utils, wa) {
                    var retVal;
                    retVal = data.siteName ? data.siteName : '';
                    retVal += data.siteGroup ? '|' + data.siteGroup : '|';
                    return retVal;
                },
                dependencies: [
                    'siteName',
                    'siteGroup'
                ]
            };
            dataElements.siteGroupSubgroup = {
                definition: function (data, config, utils, wa) {
                    var returnValue = '';
                    if (!utils.isUndefined(data.siteName))
                        returnValue += data.siteName;
                    if (!utils.isUndefined(data.siteGroup))
                        returnValue += '|' + data.siteGroup;
                    if (!utils.isUndefined(data.siteHost))
                        returnValue += '|' + data.siteHost;
                    return returnValue;
                },
                dependencies: [
                    'siteName',
                    'siteGroup',
                    'siteHost'
                ]
            };
            dataElements.pageName = {
                definition: function (data, config, utils, wa) {
                    if (data.pageNameOverride)
                        return data.pageNameOverride;
                    else {
                        var retVal = data.siteGroupSubgroup;
                        retVal += data.pageCleanPath ? '|' + data.pageCleanPath : '|';
                        retVal = retVal.toLowerCase();
                        return retVal;
                    }
                },
                dependencies: [
                    'siteGroupSubgroup',
                    'pageCleanPath',
                    'pageNameOverride'
                ]
            };
            dataElements.pageNameOverride = { persistent: false };
            dataElements.pageHier = {
                definition: function (data, config, utils, wa) {
                    return utils.buildPageHier({
                        str: data.pageName,
                        max: 15,
                        delim: '|'
                    });
                },
                dependencies: ['pageName']
            };
            dataElements.eventList = { persistent: false };
            dataElements.adobeEventList = {
                persistent: false,
                runOrder: 'last',
                definition: function (data, config, utils, wa) {
                    var eventString = '';
                    if (data.eventList) {
                        var aryEvents = data.eventList.split(',');
                        for (var i = 0; i < aryEvents.length; i++) {
                            var eventLowercase = aryEvents[i].toLowerCase();
                            var eventName = eventLowercase.split(':')[0];
                            var serialId = aryEvents[i].split(':')[1];
                            var eventValue = eventName.split('=')[1] || '';
                            eventName = eventName.split('=')[0];
                            for (var adobeEvent in config.eventNames)
                                if (utils.isIn(eventName, config.eventNames[adobeEvent])) {
                                    eventName = adobeEvent;
                                    break;
                                }
                            if (config.eventSerialIds[eventName] && wa[config.eventSerialIds[eventName]])
                                serialId = data[config.eventSerialIds[eventName]];
                            if (eventName == 'event73' && !serialId)
                                return '';
                            if (serialId)
                                eventString = utils.appendList(eventString, eventName + ':' + serialId);
                            else if (eventValue)
                                eventString = utils.appendList(eventString, eventName + '=' + eventValue);
                            else
                                eventString = utils.appendList(eventString, eventName);
                        }
                    }
                    return eventString;
                },
                dependencies: ['eventList']
            };
            dataElements.linkTrackEvents = {
                persistent: false,
                definition: function (data, config, utils, wa) {
                    if (data.adobeEventList) {
                        var eventListWithoutSerialization = data.adobeEventList.replace(/(:|=)[^,]+,?/g, ',');
                        return eventListWithoutSerialization;
                    }
                    return '';
                },
                dependencies: ['adobeEventList']
            };
            dataElements.aryProducts = { persistent: false };
            dataElements.products = {
                persistent: false,
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (data.aryProducts)
                        for (var i = 0; i < data.aryProducts.length; i++) {
                            var aProd = ';' + data.aryProducts[i][0];
                            aProd += data.aryProducts[i][1] ? ';' + data.aryProducts[i][1] : ';1';
                            aProd += data.aryProducts[i][2] ? ';' + data.aryProducts[i][2] : '';
                            retVal += retVal ? ',' + aProd : aProd;
                        }
                    return retVal;
                },
                dependencies: ['aryProducts']
            };
            dataElements.firstProduct = {
                persistent: false,
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (data.adobeEventList && data.adobeEventList.indexOf('scAdd') > -1)
                        if (data.products)
                            retVal = data.products.split(',')[0].split(';')[1];
                    return retVal;
                },
                dependencies: [
                    'adobeEventList',
                    'products'
                ]
            };
            dataElements.language = {
                definition: function (data, config, utils, wa) {
                    var language;
                    try {
                        var htmlElement = document.getElementsByTagName('html')[0];
                        if (!utils.isUndefined(htmlElement)) {
                            htmlLang = htmlElement.getAttribute('lang');
                            if (!utils.isUndefined(htmlLang))
                                language = htmlLang.split('-')[0];
                        }
                        if (utils.isVarEmpty(language))
                            language = wa.utils.getMetaData('name', 'language');
                        if (utils.isVarEmpty(language))
                            language = 'unknown';
                    } catch (error) {
                    }
                    return language;
                }
            };
            dataElements.country = {
                definition: function (data, config, utils, wa) {
                    var validUrlRegex = /^https?:\/\/(\w+\.)*(\w+\/?)+\/?/, urlWithoutProtocol, firstPath;
                    var pageUrl = data.pageUrl || '';
                    if (validUrlRegex.test(pageUrl)) {
                        urlWithoutProtocol = pageUrl.split('//')[1];
                        firstPath = urlWithoutProtocol.indexOf('/') > 0 ? urlWithoutProtocol.split('/')[1].split('?')[0].toUpperCase() : '';
                        if (config.countryMap && !(firstPath in config.countryMap))
                            switch (firstPath) {
                            case 'GLOBAL':
                            case 'EU':
                                firstPath = data.queryString['region'] || data.cookie['REGION'] || 'unknown: ' + firstPath;
                                break;
                            case 'FR-CA':
                                firstPath = 'CA-FR';
                                break;
                            case 'ZH-HK':
                                firstPath = 'HK-ZH';
                                break;
                            case 'UK':
                                firstPath = 'GB';
                                break;
                            default:
                                firstPath = data.publishPathCountry || 'US';
                            }
                    } else
                        firstPath = 'unknown: \'' + pageUrl.substring(0, 10) + '*\'';
                    firstPath = firstPath.toLowerCase();
                    if (firstPath === 'uk')
                        firstPath = 'gb';
                    if (document.location.hostname.search('quickbooks.intuit.com') > -1 && (document.location.pathname.search('community') > -1 || document.location.pathname.search('learn-support') > -1))
                        firstPath = window.getLocale();
                    return firstPath;
                },
                dependencies: [
                    'pageUrl',
                    'publishPathCountry'
                ]
            };
            dataElements.siteLocale = {
                definition: function (data, config, utils, wa) {
                    var language = data.language;
                    var country = '';
                    var htmlElement = document.getElementsByTagName('html')[0];
                    if (utils.getType(htmlElement) != 'undefined') {
                        htmlLang = htmlElement.getAttribute('lang');
                        if (htmlLang)
                            country = htmlLang.split('-')[1];
                    }
                    if (utils.isVarEmpty(country))
                        country = data.country;
                    if (utils.isVarEmpty(country))
                        country = 'unknown';
                    if (utils.isVarEmpty(language))
                        language = 'unknown';
                    return country.toLowerCase() + '-' + language.toLowerCase();
                },
                dependencies: [
                    'language',
                    'country'
                ]
            };
            dataElements.sVersion = {
                definition: function (data, config, utils, wa) {
                    if (!utils.isUndefined(wa.s))
                        return wa.s.version;
                    else
                        return '';
                }
            };
            dataElements.lastUpdate = {
                definition: function (data, config, utils, wa) {
                    config.lastUpdate = config.lastUpdate || [];
                    var latestDate = utils.parsePipeDate('1970|1|1');
                    for (var i = 0; i < config.lastUpdate.length; i++) {
                        var parsedDate = utils.parsePipeDate(config.lastUpdate[i]);
                        latestDate = Math.max(latestDate, parsedDate);
                    }
                    return utils.buildPipeDate(latestDate);
                },
                dependencies: []
            };
            dataElements.publishPath = {
                definition: function (data, config, utils, wa) {
                    if (window.Bootstrapper && window.Bootstrapper.ensightenOptions)
                        return window.Bootstrapper.ensightenOptions.publishPath;
                    return '';
                },
                dependencies: []
            };
            dataElements.publishPathCountry = {
                definition: function (data, config, utils, wa) {
                    if (data.publishPath == 'sbg-dev' || data.publishPath == 'sbg' || data.publishPath == 'ohh_sbg_prod')
                        return 'us';
                    return data.publishPath.toLowerCase().split('_')[0] || '';
                },
                dependencies: ['publishPath']
            };
            dataElements.publishPathSite = {
                definition: function (data, config, utils, wa) {
                    return data.publishPath.toLowerCase().split('_')[1] || '';
                },
                dependencies: ['publishPath']
            };
            dataElements.publishPathEnvironment = {
                definition: function (data, config, utils, wa) {
                    return data.publishPath.toLowerCase().split('_')[2] || '';
                },
                dependencies: ['publishPath']
            };
            dataElements.jsLibraryVersion = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.sVersion ? data.sVersion : '';
                    retVal += ':wa2';
                    retVal += '|' + data.lastUpdate;
                    retVal += data.publishPath ? '|' + data.publishPath : '';
                    return retVal;
                },
                dependencies: [
                    'sVersion',
                    'lastUpdate',
                    'publishPath'
                ]
            };
            dataElements.funnelName = {
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    var funnelName = this.explicitValue || data.funnelname || '';
                    if (!utils.isVarEmpty(funnelName) && !utils.isVarEmpty(data.siteName))
                        funnelName = data.siteName + '|' + funnelName;
                    return funnelName;
                },
                dependencies: ['siteName']
            };
            dataElements.linkNameOverride = { persistent: false };
            dataElements.linkOverride = { persistent: false };
            dataElements.excludePageNameFromLink = { persistent: false };
            dataElements.userAction = {
                persistent: false,
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    if (data.linkOverride)
                        return data.linkOverride;
                    if (utils.isIn('formAnalysis:', data.linkName))
                        return '';
                    var action = data.linkName || this.explicitValue || '';
                    action = action.toLowerCase();
                    if (!utils.isVarEmpty(action) && !utils.isIn('["+pageName+"]', action) && !data.excludePageNameFromLink)
                        action = 'D="' + action + ' ["+pageName+"]"';
                    return action;
                },
                dependencies: [
                    'linkOverride',
                    'linkName',
                    'excludePageNameFromLink'
                ]
            };
            dataElements.linkName = {
                persistent: false,
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    return data.linkNameOverride || data.linkName || '';
                },
                dependencies: ['linkNameOverride']
            };
            dataElements.trackType = {
                persistent: false,
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    var trackType = data.trackType || 'wa.track';
                    if (data.linkName)
                        trackType = 'link|' + trackType;
                    else
                        trackType = 'page|' + trackType;
                    return trackType;
                },
                dependencies: ['linkName']
            };
            dataElements.pageOrAction = {
                definition: function (data, config, utils, wa) {
                    return data.userAction ? data.userAction : data.pageName;
                },
                dependencies: [
                    'userAction',
                    'pageName'
                ]
            };
            dataElements.cid = {
                definition: function (data, config, utils, wa) {
                    var retVal;
                    retVal = data.queryString.cid;
                    var kbid = data.queryString.kbid, msclkid = data.queryString.msclkid, gclid = data.queryString.gclid;
                    retVal = !retVal ? kbid ? 'aff_kb_' + kbid : '' : retVal;
                    retVal = !retVal ? data.isSaa ? 'saa' : '' : retVal;
                    if (utils.isVarEmpty(retVal)) {
                        var medium = data.queryString.utm_medium || '', source = data.queryString.utm_source || '', content = data.queryString.utm_content || '', campaign = data.queryString.utm_campaign || '';
                        if (medium || source) {
                            retVal = medium + '_' + source;
                            if (content || campaign)
                                retVal += '_' + content + (campaign ? '_' + campaign : '');
                        }
                    }
                    retVal = !retVal ? gclid ? 'ppc_gg_' + gclid : '' : retVal;
                    retVal = !retVal ? msclkid ? 'ppc_ms_' + msclkid : '' : retVal;
                    if (retVal.indexOf('Z0N') >= 0)
                        retVal = retVal.substring(12);
                    return retVal;
                }
            };
            dataElements.campaignPrefix = {
                definition: function (data, config, utils, wa) {
                    if (data.cid)
                        if (data.cid.indexOf('_') > -1)
                            return data.cid.split('_')[0];
                        else
                            return data.cid;
                },
                dependencies: ['cid']
            };
            dataElements.isSocial = {
                definition: function (data, config, utils, wa) {
                    for (var site in config.socialSites)
                        if (config.socialSites[site].pattern.test(data.referrerDomain))
                            return true;
                    return false;
                },
                dependencies: ['referrerDomain']
            };
            dataElements.searchTerm = {
                definition: function (data, config, utils, wa) {
                    if (data.searchSite && !utils.isVarEmpty(config.searchSites[data.searchSite].searchParam)) {
                        var referrerParams = utils.getAllQueryStringParams(data.referrer);
                        var searchParam = config.searchSites[data.searchSite].searchParam;
                        if (referrerParams[searchParam])
                            return referrerParams[searchParam];
                        else {
                            var otherParamsToTry = [
                                'wakw',
                                'raw_kw',
                                'raw_keyword',
                                'keyword'
                            ];
                            for (var i = 0; i < otherParamsToTry.length; i++)
                                if (referrerParams[otherParamsToTry[i]])
                                    return referrerParams[otherParamsToTry[i]];
                            return 'not provided|' + data.searchSite;
                        }
                    }
                },
                dependencies: [
                    'cid',
                    'searchSite',
                    'referrer',
                    'referrerDomain',
                    'referrerPath'
                ]
            };
            dataElements.searchSite = {
                definition: function (data, config, utils, wa) {
                    for (var site in config.searchSites)
                        if (config.searchSites[site].pattern.test(data.referrerDomain))
                            return site;
                    return '';
                },
                dependencies: ['referrerDomain']
            };
            dataElements.trafficType = {
                definition: function (data, config, utils, wa) {
                    if (data.searchSite)
                        if (data.cid)
                            return 'ppc';
                        else
                            return 'seo';
                    else if (data.cid && data.campaignPrefix)
                        return data.campaignPrefix;
                    else if (data.isSocial) {
                        if (data.referrerDomain)
                            return 'soc';
                    } else if (data.referrerDomain) {
                        var domainList = config.internalReferralDomains || [data.hostname];
                        for (var i = 0; i < domainList.length; i++) {
                            var domainToCheck = domainList[i];
                            if (domainToCheck.slice(0, 4) == 'www.')
                                domainToCheck = domainToCheck.slice(4);
                            if (utils.endsWith(data.referrerDomain, domainToCheck))
                                return '';
                        }
                        return 'ref';
                    }
                    return '';
                },
                dependencies: [
                    'cid',
                    'searchSite',
                    'campaignPrefix',
                    'isSocial',
                    'referrerDomain',
                    'hostname'
                ]
            };
            dataElements.ppckw = {
                definition: function (data, config, utils, wa) {
                    if (data.trafficType)
                        if (data.trafficType == 'ppc')
                            return data.searchTerm;
                        else
                            return '(not paid search)';
                },
                dependencies: [
                    'searchTerm',
                    'trafficType'
                ]
            };
            dataElements.natkw = {
                definition: function (data, config, utils, wa) {
                    if (data.trafficType)
                        if (data.trafficType == 'seo')
                            return data.searchTerm;
                        else
                            return '(not organic search)';
                },
                dependencies: [
                    'searchTerm',
                    'trafficType'
                ]
            };
            dataElements.urs = {
                definition: function (data, config, utils, wa) {
                    if (data.cid)
                        return data.cid;
                    else if (utils.isIn(data.trafficType, [
                            'seo',
                            'soc',
                            'ref'
                        ]))
                        return data.referrerDomain + ' [' + data.trafficType + ']';
                },
                dependencies: [
                    'cid',
                    'trafficType',
                    'referrerDomain'
                ]
            };
            dataElements.campaignStack = {
                definition: function (data, config, utils, wa) {
                    if (data.trafficType) {
                        var channelStack = utils.stackCookie('sc_sbg_cmp_cvp', data.trafficType, {
                            stackLength: 5,
                            delimiter: ',',
                            expirationDays: 90,
                            domain: data.baseDomain
                        });
                        return channelStack.split(',').reverse().join('|');
                    }
                },
                dependencies: [
                    'trafficType',
                    'baseDomain'
                ]
            };
            dataElements.internalCampaign = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.queryString['scid'] || data.queryString['xcid'] || '';
                    return retVal.toLowerCase();
                }
            };
            dataElements.priorityCode = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.queryString['prioritycode'] || data.cookie['priorityCode'] || '';
                    return retVal.toLowerCase();
                }
            };
            dataElements.iksmUserId = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.cookie['iksm.intuit.com#auth-token'] || '';
                    if (retVal) {
                        const base64Url = retVal.split('.')[1];
                        const base64 = base64Url.replace('-', '+').replace('_', '/');
                        retVal = JSON.parse(window.atob(base64)).sub;
                    }
                    return retVal.toLowerCase();
                }
            };
            dataElements.pcode = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.offerCode || data.p_prioritycode || utils.getFirstNotEmpty([
                        data.queryString['pcode'],
                        data.queryString['p'],
                        data.queryString['offerid'],
                        data.queryString['offer_id'],
                        data.queryString['offer_code']
                    ]) || '';
                    return retVal.toLowerCase();
                },
                dependencies: ['p_prioritycode']
            };
            dataElements.p_prioritycode = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.queryString['p_prioritycode'] || '';
                    return retVal.toLowerCase();
                }
            };
            dataElements.sourceCode = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.qboSourceCode || data.queryString['sc'] || data.queryString['source'] || '';
                    return retVal.toLowerCase();
                }
            };
            dataElements.sku = {
                definition: function (data, config, utils, wa) {
                    return data.offeringId || data.queryString['sku'] || data.queryString['offeringid'] || '';
                }
            };
            dataElements.billingCode = {
                definition: function (data, config, utils, wa) {
                    return data.queryString['bc'];
                }
            };
            dataElements.brand = {
                definition: function (data, config, utils, wa) {
                    return data.queryString['b'];
                }
            };
            dataElements.companyId = {
                definition: function (data, config, utils, wa) {
                    var companyId = '';
                    if (data.publishPathCountry == 'br')
                        try {
                            var idIsDeclared;
                            companyId = data.gaDataLayer[0].companyId;
                        } catch (e) {
                            if (e.name == 'ReferenceError')
                                idIsDeclared = false;
                        }
                    if (!companyId)
                        if (data.publishPathCountry != 'us')
                            if (!utils.isVarEmpty(data.windowCompanyId))
                                companyId = data.windowCompanyId;
                            else if (!utils.isVarEmpty(data.swCookieCompanyId))
                                companyId = data.cookie[data.swCookieCompanyId];
                    companyId = companyId || data.queryString['companyid'] || '';
                    if (document.location.hostname.search('quickbooks.intuit.com') > -1 && (document.location.pathname.search('community') > -1 || document.location.pathname.search('learn-support') > -1))
                        companyId = window.qbo_company_id;
                    return companyId;
                },
                dependencies: [
                    'publishPathCountry',
                    'gaDataLayer'
                ]
            };
            dataElements.intuitAuthId = {
                definition: function (data, config, utils, wa) {
                    if (document.location.hostname.search('quickbooks.intuit.com') > -1 && (document.location.pathname.search('community') > -1 || document.location.pathname.search('learn-support') > -1))
                        return window.qbo_gauth_id;
                    else
                        return '';
                }
            };
            dataElements.qboUserId = {
                definition: function (data, config, utils, wa) {
                    if (data.publishPathCountry == 'br')
                        try {
                            var idIsDeclared;
                            return data.gaDataLayer[0].userId;
                        } catch (e) {
                            if (e.name == 'ReferenceError')
                                idIsDeclared = false;
                            return '';
                        }
                    else
                        return '';
                },
                dependencies: [
                    'publishPathCountry',
                    'gaDataLayer'
                ]
            };
            dataElements.gaDataLayer = {
                definition: function (data, config, utils, wa) {
                    return window.dataLayer;
                }
            };
            dataElements.swCookieCompanyId = {
                definition: function (data, config, utils, wa) {
                    return window.SWCOOKIE_COMPANY_ID;
                }
            };
            dataElements.windowCompanyId = {
                definition: function (data, config, utils, wa) {
                    return window.companyId;
                }
            };
            dataElements.responsysCreativeId = {
                definition: function (data, config, utils, wa) {
                    return data.queryString['rmid'];
                }
            };
            dataElements.responsysSubId = {
                definition: function (data, config, utils, wa) {
                    return data.queryString['rrid'];
                }
            };
            dataElements.formEvent = { persistent: false };
            dataElements.formName = { persistent: false };
            dataElements.formLastFieldChanged = { persistent: false };
            dataElements.formField = { persistent: false };
            dataElements.formAnalysisData = {
                persistent: false,
                definition: function (data, config, utils, wa) {
                    if (data.formField)
                        return data.formField;
                    var formAnalysis = '';
                    if (!utils.isVarEmpty(data.formEvent)) {
                        formAnalysis = data.formEvent + '|' + data.formName;
                        if (data.formEvent == 'abandon')
                            formAnalysis += '|' + data.formLastFieldChanged;
                    }
                    return formAnalysis;
                },
                dependencies: [
                    'formEvent',
                    'formName',
                    'formLastFieldChanged',
                    'formField'
                ]
            };
            dataElements.qboConvCookie = {
                definition: function (data, config, utils, wa) {
                    var cookieEnvironment = 'prod';
                    if (!data.isProd)
                        cookieEnvironment = 'dev';
                    var cookieNameCom = config.marketingChannelCookieNames['com'][cookieEnvironment]['main'];
                    var cookieNameIntl = config.marketingChannelCookieNames['intl'][cookieEnvironment]['main'];
                    var cookieVal = data.cookie[cookieNameCom] || data.cookie[cookieNameIntl] || '';
                    if (utils.isVarEmpty(cookieVal))
                        return '(no cookie)';
                    else
                        return cookieVal;
                },
                dependencies: [
                    'isProd',
                    'publishPathCountry'
                ]
            };
            dataElements.globalCookie = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.cookie['propertySegments'];
                    if (retVal) {
                        retVal = retVal.split('|');
                        retVal.shift();
                        retVal = retVal.join('|');
                        return retVal;
                    }
                }
            };
            dataElements.s_vi = {
                definition: function (data, config, utils, wa) {
                    return data.cookie['s_vi'];
                }
            };
            dataElements.marketingCloudID = {
                definition: function (data, config, utils, wa) {
                    if (window.Visitor) {
                        var id = window.Bootstrapper.data.resolve('55350');
                        var retVal = window.Visitor.getInstance(id).getMarketingCloudVisitorID();
                        return retVal;
                    }
                }
            };
            dataElements.userId = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.cookie['sbm_intuit_id'];
                    if (retVal)
                        return retVal;
                }
            };
            dataElements.qboCustType = {
                definition: function (data, config, utils, wa) {
                    var qboCookie = data.cookie['qbo.qbo'];
                    if (!utils.isUndefined(qboCookie)) {
                        qboCookie = qboCookie.replace(/"/g, '');
                        return qboCookie;
                    }
                }
            };
            dataElements.ivid = {
                runOrder: 'last',
                definition: function (data, config, utils, wa) {
                    return data.cookie['ivid'];
                }
            };
            dataElements.ixpId = {
                definition: function (data, config, utils, wa) {
                    return data.cookie['ixp_ivid'];
                }
            };
            dataElements.userStatus = {
                definition: function (data, config, utils, wa) {
                    var retVal = 'Lookers';
                    var cookiePat = /^[1-9][\.\d]*(,\d+)?$/;
                    if (data.cookie['qbo.company'] && cookiePat.test(data.cookie['qbo.company']))
                        retVal = 'Users';
                    return retVal;
                }
            };
            dataElements.mdsPersonalizationStore = {
                definition: function (data, config, utils, wa) {
                    return data.cookie['mds_3rdparty_experience_store'];
                }
            };
            dataElements.mdsProspectStatus = {
                definition: function (data, config, utils, wa) {
                    return data.cookie['prospect_status'];
                }
            };
            dataElements.visitDate = {
                definition: function (data, config, utils, wa) {
                    var retVal = utils.calculateDate('-8');
                    retVal = retVal ? retVal.toLowerCase() : '';
                    return retVal;
                }
            };
            dataElements.optimizelyTestId = {
                definition: function (data, config, utils, wa) {
                    retVal = '';
                    if (wa.s)
                        if (window.optimizely && window.optimizely.hasOwnProperty('get')) {
                            var obj, str = '';
                            try {
                                obj = window.optimizely.get('state').getVariationMap();
                            } catch (err) {
                            }
                            if (obj !== null || obj !== 'undefined') {
                                var output = [];
                                for (var key in obj) {
                                    var tmp = key + ':' + obj[key].id;
                                    output.push(tmp);
                                }
                                retVal = output.join(',');
                                retVal = retVal ? 'oz:' + retVal : '';
                            }
                            return retVal;
                        }
                },
                dependencies: []
            };
            dataElements.ssTestId = {};
            dataElements.ttTestId = {};
            dataElements.testId = {};
            dataElements.abTest = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    retVal = data.ssTestId ? 'ss:' + data.ssTestId : '';
                    retVal += data.ttTestId ? '|tt:' + data.ttTestId : '';
                    retVal += data.testId ? '|' + data.testId : '';
                    retVal += data.optimizelyTestId ? '|' + data.optimizelyTestId : '';
                    retVal += data.mdsPersonalizationStore ? '|' + 'mds:' + data.mdsPersonalizationStore : '';
                    if (retVal.indexOf('|') == 0)
                        retVal = retVal.replace('|', '');
                    return retVal;
                },
                dependencies: [
                    'optimizelyTestId',
                    'ssTestId',
                    'ttTestId',
                    'testId',
                    'mdsPersonalizationStore'
                ]
            };
            dataElements.abTestList = {
                definition: function (data, config, utils, wa) {
                    if (data.abTest) {
                        var abTestSplit = data.abTest.split('|');
                        var acceptedTextPrefixes = [
                            'ss:',
                            'tt:',
                            'oz:',
                            'mds:'
                        ];
                        var abTestList = [];
                        for (var abTestIndex = 0; abTestIndex < abTestSplit.length; abTestIndex++) {
                            var abTestValues = abTestSplit[abTestIndex].split(',');
                            var prefix = '';
                            for (var prefixIndex = 0; prefixIndex < acceptedTextPrefixes.length; prefixIndex++)
                                if (abTestValues[0].indexOf(acceptedTextPrefixes[prefixIndex]) === 0) {
                                    prefix = acceptedTextPrefixes[prefixIndex];
                                    abTestValues[0] = abTestValues[0].slice(prefix.length);
                                    break;
                                }
                            for (var i = 0; i < abTestValues.length; i++)
                                abTestList.push(prefix + abTestValues[i]);
                        }
                        return abTestList.join(',');
                    }
                    return '';
                },
                dependencies: ['abTest']
            };
            dataElements.suiPaymentPlan = {};
            dataElements.pageLoadStart = { persistent: false };
            dataElements.pageLoadTime = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (window.performance && window.performance.timing.domContentLoadedEventEnd > 0)
                        try {
                            retVal = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
                        } catch (err) {
                        }
                    else if (data.pageLoadStart)
                        retVal = new Date() - data.pageLoadStart;
                    else
                        retVal = 'start time not provided';
                    return retVal;
                },
                dependencies: ['pageLoadStart']
            };
            dataElements.pcsAppId = {
                definition: function (data, config, utils, wa) {
                    var appId = data.pcsApplication || data.psdApplication || data.imsApplication || '';
                    return appId;
                }
            };
            dataElements.merchantId = {
                definition: function (data, config, utils, wa) {
                    var merchId = data.pcsMerchantId || data.psdMerchantId || data.imsMerchantId || '';
                    return merchId;
                }
            };
            dataElements.articleDetail = {
                definition: function (data, config, utils, wa) {
                    var retVal;
                    if (typeof google_tag_params != 'undefined') {
                        if (!utils.isVarEmpty(google_tag_params.pageCategory) && !utils.isVarEmpty(google_tag_params.pagePostAuthor))
                            retVal = google_tag_params.pageCategory + '|' + google_tag_params.pagePostAuthor;
                        if (!utils.isVarEmpty(google_tag_params.pageCategory) && !utils.isVarEmpty(google_tag_params.pagePostAuthor))
                            retVal = google_tag_params.pageCategory;
                    }
                    return retVal;
                }
            };
            dataElements.fingerPrintId = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (data.pageName === 'pcs|mktg|merchant|signup/appsubmitted_instant.wsp') {
                        var qboSourceCodeSpan = document.getElementById('qboSourceCode');
                        if (!utils.isVarEmpty(qboSourceCodeSpan))
                            retVal = qboSourceCodeSpan.innerHTML;
                    }
                    return retVal;
                },
                dependencies: ['pageName']
            };
            dataElements.emsLicenseId = {};
            dataElements.decibelSessionId = {
                runOrder: 'last',
                definition: function (data, config, utils, wa) {
                    const $___old_50e0741cccc325a8 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_50e0741cccc325a8)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_a64013dfdee6051c.sessionStorage));
                        return function () {
                            var retVal = '';
                            if (sessionStorage && sessionStorage.vis_di_sessionId)
                                retVal = sessionStorage.vis_di_sessionId;
                            else if (typeof decibelInsight !== 'undefined' || typeof decibelInsight.getSessionId == 'function') {
                                retVal = decibelInsight.getSessionId();
                                sessionStorage.vis_di_sessionId = retVal;
                            }
                            return retVal;
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_50e0741cccc325a8)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_50e0741cccc325a8));
                    }
                }
            };
            dataElements.eStoreOfferCode = {
                definition: function (data, config, utils, wa) {
                    return data.payrollOffer;
                }
            };
            dataElements.internalKeyword = {
                definition: function (data, config, utils, wa) {
                    if (!utils.isVarEmpty(data.formData))
                        return 'ft:' + data.formData;
                    else if (document.location.hostname.search('quickbooks.intuit.com') > -1 && (document.location.pathname.search('community') > -1 || document.location.pathname.search('learn-support') > -1))
                        try {
                            var params = new URL(window.location.href).searchParams;
                            if (params.get('q') === undefined || params.get('q') === 'undefined')
                                return null;
                            else
                                return params.get('q');
                        } catch (err) {
                            console.error('[ShAnalytics - getSearchParam] -> Error \n ');
                            return null;
                        }
                }
            };
            dataElements.pageRating = { persistent: false };
            dataElements.pageRatingVal = {
                definition: function (data, config, utils, wa) {
                    var retVal;
                    if (!utils.isVarEmpty(data.pageRating)) {
                        var objPageRating = data.pageRating;
                        var expectedProperties = {
                            content: '',
                            design: '',
                            usability: '',
                            overall: '',
                            taskComplete: ''
                        };
                        for (key in expectedProperties)
                            objPageRating[key] = objPageRating[key] ? objPageRating[key] : '';
                        retVal = 'c:' + objPageRating.content;
                        retVal += '|d:' + objPageRating.design;
                        retVal += '|u:' + objPageRating.usability;
                        retVal += '|o:' + objPageRating.overall;
                        retVal += '|tc:' + objPageRating.taskComplete;
                        retVal += '|ref:' + (data.queryString['r'] ? data.queryString['r'] : '');
                    } else
                        retVal = '';
                    return retVal;
                },
                dependencies: ['pageRating']
            };
            dataElements.chatSessionId = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (data.chatSessionId)
                        retVal = data.chatSessionId ? data.chatSessionId : '';
                    return retVal;
                }
            };
            dataElements.surveyId = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (!utils.isVarEmpty(data.pageRating))
                        retVal = data.pageRating.surveyId ? data.pageRating.surveyId : '';
                    return retVal;
                },
                dependencies: ['pageRating']
            };
            dataElements.leadEvalID = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (data.leadEvalID)
                        retVal = data.leadEvalID;
                    else
                        retVal = data.queryString['leadid'];
                    return retVal;
                }
            };
            dataElements.navigation = {
                definition: function (data, config, utils, wa) {
                    var retVal = data.queryString['ncid'];
                    retVal = retVal ? retVal.toLowerCase() : '';
                    return retVal;
                }
            };
            dataElements.visitPageCount = {
                enabled: false,
                definition: function (data, config, utils, wa) {
                    var cookieName = 'int-sbg_vpc';
                    var count = parseInt(data.cookie[cookieName]);
                    if (isNaN(count))
                        count = 0;
                    count++;
                    utils.setCookie(cookieName, count, { domain: data.baseDomain });
                    return count;
                },
                dependencies: ['baseDomain']
            };
            dataElements.prevPage = {
                trackOnce: true,
                definition: function (data, config, utils, wa) {
                    if (utils.beginsWith(data.trackType, 'page'))
                        if (utils.objectHasPropertyChain(wa, 's.getPreviousValue') && utils.getType(wa.s.getPreviousValue) == 'function')
                            return wa.s.getPreviousValue(data.pageName, 'gpv_pn');
                    return '';
                },
                dependencies: [
                    'pageName',
                    'trackType'
                ]
            };
            dataElements.prevPagePctViewed = {
                trackOnce: true,
                definition: function (data, config, utils, wa) {
                    if (utils.objectHasPropertyChain(wa, 's.getPercentPageViewed') && data.prevPage && utils.getType(data.prevPage) == 'string' && data.prevPage != 'no value') {
                        var ppv = wa.s.getPercentPageViewed(data.pageName);
                        if (ppv && utils.getType(ppv) == 'array' && ppv[0] == data.prevPage)
                            return ppv[1] + '|' + ppv[2];
                    }
                    return '';
                },
                dependencies: [
                    'prevPage',
                    'pageName'
                ]
            };
            dataElements.inspectorDisabled = {
                definition: function (data, config, utils, wa) {
                    var useWaInspector = Bootstrapper.data.resolve('Manage.WA-v2.use-wa-inspector');
                    if (useWaInspector === 'no')
                        return true;
                    else if (useWaInspector === 'yes')
                        return false;
                    else
                        return !!data.isProd;
                },
                dependencies: ['isProd']
            };
            dataElements.inspectorTestId = {
                runOrder: 'last',
                persistent: false,
                useExplicitValue: false,
                definition: function (data, config, utils, wa) {
                    if (wa.inspectorConditions) {
                        var testIds = [];
                        if (this.explicitValue)
                            testIds = this.explicitValue.split(',');
                        for (var key in wa.inspectorConditions)
                            if (!utils.isUndefined(wa.inspectorConditions[key].expectedKvPairs.ALWAYS))
                                testIds.push(key);
                            else if (utils.objectMatchesTest(data, wa.inspectorConditions[key].expectedKvPairs))
                                testIds.push(key);
                        return testIds.join(',');
                    }
                }
            };
            dataElements.inspectorData = {
                runOrder: 'last',
                persistent: false,
                dependencies: ['inspectorTestId']
            };
            dataElements.wwsuiEventName = { persistent: false };
            dataElements.licenseId = {
                definition: function (data, config, utils, wa) {
                    return data.queryString['license'];
                }
            };
            dataElements.personaMatrix = {
                definition: function (data, config, utils, wa) {
                    if (Intuit && Intuit.Persona && Intuit.Persona.Experiences && Intuit.Persona.Experiences.length > 0)
                        return Intuit.Persona.Experiences.filter(function (exp) {
                            return exp.points > 0;
                        }).filter(function (exp) {
                            return exp.persona === Intuit.Persona.User.slug;
                        }).map(function (exp) {
                            return (exp.persona || '') + '|' + (exp.points || '') + '|' + (exp.name || '') + '|' + (exp.experience_points || '') + '|' + exp.stages.filter(function (stage) {
                                return stage.name === exp.activeStage;
                            }).map(function (stage) {
                                return stage.name + '|' + stage.points_to_activate;
                            });
                        })[0];
                }
            };
            dataElements.aamQbusCookie = {
                definition: function (data, config, utils, wa) {
                    return data.cookie['aam_qbus'];
                }
            };
            dataElements.qbcPersonId = {
                definition: function (data, config, utils, wa) {
                    var retVal = '';
                    if (document.location.host == 'events.quickbooksconnect.com')
                        if (document.getElementById('person-id'))
                            retVal = document.getElementById('person-id').innerText;
                    return retVal;
                }
            };
        }, 3398016, 496141);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.bindDOMParsed(function () {
                var elements = Bootstrapper.qwery('.IntuitBrandClicktoProConnect');
                for (var i = 0; i < elements.length; i++)
                    Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
                        Bootstrapper.ensEvent.trigger('ICom - Button Click to ProConnect');
                    });
            });
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.bindDOMParsed(function () {
                var elements = Bootstrapper.qwery('.IntuitBrandClicktoMint');
                for (var i = 0; i < elements.length; i++)
                    Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
                        Bootstrapper.ensEvent.trigger('ICom - Button Click to Mint');
                    });
            });
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to Mint'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var data = {};
                if ('')
                    data['value'] = '';
                if ('')
                    data['currency'] = '';
                if ('')
                    data['content_name'] = '';
                if ('')
                    data['content_category'] = '';
                if ('')
                    data['content_ids'] = '' ? ''.split(',') : '';
                if ('')
                    data['content_type'] = '';
                if ('')
                    data['num_items'] = '';
                if ('')
                    data['search_string'] = '';
                if ('')
                    data['status'] = '';
                var eventTrackingPixelId = '1827482914219447';
                var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_mint' : 'CustomEvent';
                var trackString = 'CustomEvent' === 'CustomEvent' ? eventTrackingPixelId ? 'trackSingleCustom' : 'trackCustom' : eventTrackingPixelId ? 'trackSingle' : 'track';
                var makeRequest = function () {
                    if (eventTrackingPixelId)
                        fbq(trackString, eventTrackingPixelId, eventType, data);
                    else
                        fbq(trackString, eventType, data);
                };
                if (true)
                    var interval = setInterval(function () {
                        if (window.fbq) {
                            makeRequest();
                            clearInterval(interval);
                        }
                    }, 100);
                else
                    makeRequest();
            });
        }, 2762241, [3309959], 585676, [520782]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function () {
                        const $___old_8e95e4d89d45d386 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_8e95e4d89d45d386)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_a64013dfdee6051c.localStorage));
                            return function () {
                                try {
                                    var useLogs = !!localStorage.getItem('analyticsDebug');
                                    if (useLogs && useLogs === 'yes') {
                                        console.log('Enableing WA Inspector via \'analyticsDebug\' local storage item');
                                        return useLogs;
                                    }
                                    if (Bootstrapper.hasOwnProperty('getQueryParam'))
                                        if (Bootstrapper.getQueryParam('useWaInspector')) {
                                            console.log('Enableing WA Inspector via \'useWaInspector\' query param');
                                            return 'yes';
                                        }
                                } catch (err) {
                                    return 'no';
                                }
                                return 'no';
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_8e95e4d89d45d386)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_8e95e4d89d45d386));
                        }
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'session',
                    trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,
                    dataDefName: 'use-wa-inspector',
                    collection: 'WA-v2',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '52340' });
            }, 52340);
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['ICom - Button Click to ProConnect'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var countingMethod = 'standard';
                var dl = 'dataLayer';
                var floodLightId = 'DC-8344993';
                var send_to = [];
                if (floodLightId) {
                    var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui003' + '+' + countingMethod;
                    send_to.push(receiver);
                } else {
                    var ids = [];
                    for (var i in ids) {
                        var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui003' + '+' + countingMethod;
                        send_to.push(receiver);
                    }
                }
                var allow_custom_scripts = 'true' == 'true' ? true : false;
                var eventObj = {
                    'allow_custom_scripts': allow_custom_scripts,
                    'send_to': send_to
                };
                if (countingMethod === 'per_session')
                    if ('')
                        eventObj.session_id = '';
                if (countingMethod === 'transactions') {
                    if ('')
                        eventObj.value = '';
                    if ('')
                        eventObj.transaction_id = '';
                    if ('')
                        eventObj.quantity = '';
                }
                window[dl] = window[dl] || [];
                window.gtag = window.gtag || function gtag() {
                    window[dl].push(arguments);
                };
                gtag('event', 'conversion', eventObj);
            });
        }, 2762235, [2762202], 585586, [585580]);
        Bootstrapper.bindDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            overAllCookieSizeLimit = 8000;
            perCookieSizeLimit = 1000;
            cookieCleanPerformed = false;
            cookiesSizeExceededOverAllLimit = false;
            var cookie_names = [
                's_cc,.intuit.com',
                's_ppv,.intuit.com',
                's_ppvl,.intuit.com',
                's_sq,.intuit.com',
                '__utma,.intuit.com',
                '__utmb,.intuit.com',
                '__utmc,.intuit.com',
                '__utmt,.intuit.com',
                '__utmz,.intuit.com',
                '_at_id.intuitquickbooks.production.13f2,.intuit.com',
                '_at_id.intuitquickbooks.engage.13f2,.intuit.com',
                'cvo_sid1,.intuit.com',
                'cvo_tid1,.intuit.com',
                'ivid,.intuit.com',
                'ivid_b,.intuit.com',
                'mbox,.intuit.com',
                'propertySegments,.intuit.com',
                'sbm_intuit_id,.intuit.com',
                'SSID,.intuit.com',
                'SSOD,.intuit.com',
                'SSPV,.intuit.com',
                'SSRT,.intuit.com',
                'SSSC,.intuit.com',
                'Survey_Tracker,.intuit.com',
                'SurveyClosed,.intuit.com',
                '_tq_id.TV-278154-1.5ae0,quickbooks.intuit.com',
                '37343836-SKEY,quickbooks.intuit.com',
                '37343836-VID,quickbooks.intuit.com',
                'HumanClickSiteContainerID_37343836,quickbooks.intuit.com',
                'ivid_synced,quickbooks.intuit.com',
                'WRUID,quickbooks.intuit.com',
                'oo_OODynamicRewrite_weight,.intuit.com',
                'oo_inv_percent,.intuit.com',
                'i_websdk_unsentBeaconsExist,quickbooks.intuit.com',
                'optimizelyPendingLogEvents,.intuit.com',
                'qbn.ptc.qbo_sc,.intuit.com',
                'qbn.ptc.qbo_sctimer,.intuit.com',
                'mds_3rdparty_experience_store,.intuit.com'
            ];
            function getCookie(w) {
                cookieValue = '';
                aCookies = new Array();
                aCookies = document.cookie.split('; ');
                for (ctr = 0; ctr < aCookies.length; ctr++) {
                    NmeVal = new Array();
                    NmeVal = aCookies[ctr].split('=');
                    if (NmeVal[0] == w)
                        cookieValue = unescape(NmeVal[1]);
                }
                return cookieValue;
            }
            function getByteSize(s) {
                return encodeURIComponent('<q></q>' + s).length;
            }
            try {
                beforeCookieCleanUp = getByteSize(document.cookie);
                cLength = cookie_names.length;
                startTime = new Date().getTime();
                message = '';
                if (beforeCookieCleanUp > overAllCookieSizeLimit) {
                    cookiesSizeExceededOverAllLimit = true;
                    message = ' Over All Cookies Size Exceeded ' + overAllCookieSizeLimit + '\n';
                }
                for (i = 0; i < cLength; i++) {
                    cNameDomain = cookie_names[i].split(',');
                    c_Name = cNameDomain[0];
                    c_Domain = cNameDomain[1];
                    c_Value = getCookie(c_Name);
                    if (cookiesSizeExceededOverAllLimit || c_Value.length > perCookieSizeLimit) {
                        if (!cookieCleanPerformed) {
                            cookieCleanPerformed = true;
                            if (!cookiesSizeExceededOverAllLimit)
                                message = ' List Of Cookies Deleted\n';
                        }
                        if (!cookiesSizeExceededOverAllLimit)
                            message = message + ' Name : ' + c_Name + ' , Length : ' + c_Value.length + '\n';
                        document.cookie = c_Name + ' =; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=' + c_Domain + '; path=/;';
                    }
                }
                endTime = new Date().getTime();
                afterCookieCleanUp = getByteSize(document.cookie);
                if (cookieCleanPerformed) {
                    message = message + 'Cookies Size Before ' + beforeCookieCleanUp + '\nCookies Size After ' + afterCookieCleanUp + '\n Execution Time ' + (endTime - startTime) + ' ms ';
                    newrelic.addPageAction('Cookie_CleanUp_Performed', { info: message });
                }
            } catch (err) {
            }
        }, 1951771, 465543);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add([
                'ICom - Button Click to ProConnect',
                'ICom - Button Click to Mint',
                'ICom - Button Click to QB',
                'ICom - Button Click to TT'
            ], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var data = {};
                if ('')
                    data['value'] = '';
                if ('')
                    data['currency'] = '';
                if ('')
                    data['content_name'] = '';
                if ('')
                    data['content_category'] = '';
                if ('')
                    data['content_ids'] = '' ? ''.split(',') : '';
                if ('')
                    data['content_type'] = '';
                if ('')
                    data['num_items'] = '';
                if ('')
                    data['search_string'] = '';
                if ('')
                    data['status'] = '';
                var eventTrackingPixelId = '1827482914219447';
                var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_allbrands' : 'CustomEvent';
                var trackString = 'CustomEvent' === 'CustomEvent' ? eventTrackingPixelId ? 'trackSingleCustom' : 'trackCustom' : eventTrackingPixelId ? 'trackSingle' : 'track';
                var makeRequest = function () {
                    if (eventTrackingPixelId)
                        fbq(trackString, eventTrackingPixelId, eventType, data);
                    else
                        fbq(trackString, eventType, data);
                };
                if (true)
                    var interval = setInterval(function () {
                        if (window.fbq) {
                            makeRequest();
                            clearInterval(interval);
                        }
                    }, 100);
                else
                    makeRequest();
            });
        }, 2762244, [3309959], 585678, [520782]);
        Bootstrapper.bindDOMParsed(function () {
            Bootstrapper.ensEvent.add(['ExecuteAAM'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                !function () {
                    function e(e, t, s) {
                        var n = '', i = t || 'Error caught in DIL module/submodule: ';
                        return e === Object(e) ? n = i + (e.message || 'err has no message') : (n = i + 'err is not a valid object', e = {}), e.message = n, s instanceof DIL && (e.partner = s.api.getPartner()), DIL.errorModule.handleError(e), this.errorMessage = n;
                    }
                    var r, a, o, t = {
                            submitUniversalAnalytics: function (e, t, s) {
                                try {
                                    var n, i, r, a, o = e.getAll()[0], d = o[s || 'b'].data.keys, u = {};
                                    for (n = 0, i = d.length; n < i; n++)
                                        r = d[n], void 0 === (a = o.get(r)) || 'function' == typeof a || a === Object(a) || /^_/.test(r) || /^&/.test(r) || (u[r] = a);
                                    return t.api.signals(u, 'c_').submit(), u;
                                } catch (e) {
                                    return 'Caught error with message: ' + e.message;
                                }
                            },
                            dil: null,
                            arr: null,
                            tv: null,
                            errorMessage: '',
                            defaultTrackVars: [
                                '_setAccount',
                                '_setCustomVar',
                                '_addItem',
                                '_addTrans',
                                '_trackSocial'
                            ],
                            defaultTrackVarsObj: null,
                            signals: {},
                            hasSignals: !1,
                            handle: e,
                            init: function (e, t, s) {
                                try {
                                    this.dil = null, this.arr = null, this.tv = null, this.errorMessage = '', this.signals = {}, this.hasSignals = !1;
                                    var n = { name: 'DIL GA Module Error' }, i = '';
                                    t instanceof DIL ? (this.dil = t, n.partner = this.dil.api.getPartner()) : (i = 'dilInstance is not a valid instance of DIL', n.message = i, DIL.errorModule.handleError(n)), e instanceof Array && e.length ? this.arr = e : (i = 'gaArray is not an array or is empty', n.message = i, DIL.errorModule.handleError(n)), this.tv = this.constructTrackVars(s), this.errorMessage = i;
                                } catch (e) {
                                    this.handle(e, 'DIL.modules.GA.init() caught error with message ', this.dil);
                                } finally {
                                    return this;
                                }
                            },
                            constructTrackVars: function (e) {
                                var t, s, n, i, r, a, o = [];
                                if (this.defaultTrackVarsObj !== Object(this.defaultTrackVarsObj)) {
                                    for (a = {}, s = 0, n = (r = this.defaultTrackVars).length; s < n; s++)
                                        a[r[s]] = !0;
                                    this.defaultTrackVarsObj = a;
                                } else
                                    a = this.defaultTrackVarsObj;
                                if (e === Object(e)) {
                                    if ((t = e.names) instanceof Array && (n = t.length))
                                        for (s = 0; s < n; s++)
                                            'string' == typeof (i = t[s]) && i.length && i in a && o.push(i);
                                    if (o.length)
                                        return o;
                                }
                                return this.defaultTrackVars;
                            },
                            constructGAObj: function (e) {
                                var t, s, n, i, r, a, o = {}, d = e instanceof Array ? e : this.arr;
                                for (t = 0, s = d.length; t < s; t++)
                                    (n = d[t]) instanceof Array && n.length && (r = n = [], a = d[t], r instanceof Array && a instanceof Array && Array.prototype.push.apply(r, a), 'string' == typeof (i = n.shift()) && i.length && (o[i] instanceof Array || (o[i] = []), o[i].push(n)));
                                return o;
                            },
                            addToSignals: function (e, t) {
                                return 'string' == typeof e && '' !== e && null != t && '' !== t && (this.signals[e] instanceof Array || (this.signals[e] = []), this.signals[e].push(t), this.hasSignals = !0);
                            },
                            constructSignals: function () {
                                var e, t, s, n, i, r, a = this.constructGAObj(), o = {
                                        _setAccount: function (e) {
                                            this.addToSignals('c_accountId', e);
                                        },
                                        _setCustomVar: function (e, t, s) {
                                            'string' == typeof t && t.length && this.addToSignals('c_' + t, s);
                                        },
                                        _addItem: function (e, t, s, n, i, r) {
                                            this.addToSignals('c_itemOrderId', e), this.addToSignals('c_itemSku', t), this.addToSignals('c_itemName', s), this.addToSignals('c_itemCategory', n), this.addToSignals('c_itemPrice', i), this.addToSignals('c_itemQuantity', r);
                                        },
                                        _addTrans: function (e, t, s, n, i, r, a, o) {
                                            this.addToSignals('c_transOrderId', e), this.addToSignals('c_transAffiliation', t), this.addToSignals('c_transTotal', s), this.addToSignals('c_transTax', n), this.addToSignals('c_transShipping', i), this.addToSignals('c_transCity', r), this.addToSignals('c_transState', a), this.addToSignals('c_transCountry', o);
                                        },
                                        _trackSocial: function (e, t, s, n) {
                                            this.addToSignals('c_socialNetwork', e), this.addToSignals('c_socialAction', t), this.addToSignals('c_socialTarget', s), this.addToSignals('c_socialPagePath', n);
                                        }
                                    }, d = this.tv;
                                for (e = 0, t = d.length; e < t; e++)
                                    if (s = d[e], a.hasOwnProperty(s) && o.hasOwnProperty(s) && (r = a[s]) instanceof Array)
                                        for (n = 0, i = r.length; n < i; n++)
                                            o[s].apply(this, r[n]);
                            },
                            submit: function () {
                                try {
                                    return '' !== this.errorMessage ? this.errorMessage : (this.constructSignals(), this.hasSignals ? (this.dil.api.signals(this.signals).submit(), 'Signals sent: ' + this.dil.helpers.convertObjectToKeyValuePairs(this.signals, '=', !0)) : 'No signals present');
                                } catch (e) {
                                    return this.handle(e, 'DIL.modules.GA.submit() caught error with message ', this.dil);
                                }
                            },
                            Stuffer: {
                                LIMIT: 5,
                                dil: null,
                                cookieName: null,
                                delimiter: null,
                                errorMessage: '',
                                handle: e,
                                callback: null,
                                v: function () {
                                    return !1;
                                },
                                init: function (e, t, s) {
                                    try {
                                        this.dil = null, this.callback = null, this.errorMessage = '', e instanceof DIL ? (this.dil = e, this.v = this.dil.validators.isPopulatedString, this.cookieName = this.v(t) ? t : 'aam_ga', this.delimiter = this.v(s) ? s : '|') : this.handle({ message: 'dilInstance is not a valid instance of DIL' }, 'DIL.modules.GA.Stuffer.init() error: ');
                                    } catch (e) {
                                        this.handle(e, 'DIL.modules.GA.Stuffer.init() caught error with message ', this.dil);
                                    } finally {
                                        return this;
                                    }
                                },
                                process: function (e) {
                                    var t, s, n, i, r, a, o, d, u, c, l, h = !1, f = 1;
                                    if (e === Object(e) && (t = e.stuff) && t instanceof Array && (s = t.length))
                                        for (n = 0; n < s; n++)
                                            if ((i = t[n]) && i === Object(i) && (r = i.cn, a = i.cv, r === this.cookieName && this.v(a))) {
                                                h = !0;
                                                break;
                                            }
                                    if (h) {
                                        for (o = a.split(this.delimiter), void 0 === window._gaq && (window._gaq = []), d = window._gaq, n = 0, s = o.length; n < s && (c = (u = o[n].split('='))[0], l = u[1], this.v(c) && this.v(l) && d.push([
                                                '_setCustomVar',
                                                f++,
                                                c,
                                                l,
                                                1
                                            ]), !(f > this.LIMIT)); n++);
                                        this.errorMessage = 1 < f ? 'No errors - stuffing successful' : 'No valid values to stuff';
                                    } else
                                        this.errorMessage = 'Cookie name and value not found in json';
                                    if ('function' == typeof this.callback)
                                        return this.callback();
                                },
                                submit: function () {
                                    try {
                                        var t = this;
                                        return '' !== this.errorMessage ? this.errorMessage : (this.dil.api.afterResult(function (e) {
                                            t.process(e);
                                        }).submit(), 'DIL.modules.GA.Stuffer.submit() successful');
                                    } catch (e) {
                                        return this.handle(e, 'DIL.modules.GA.Stuffer.submit() caught error with message ', this.dil);
                                    }
                                }
                            }
                        }, s = {
                            dil: null,
                            handle: e,
                            init: function (e, t, s, n) {
                                try {
                                    var f = this, i = { name: 'DIL Site Catalyst Module Error' }, p = function (e) {
                                            return i.message = e, DIL.errorModule.handleError(i), e;
                                        };
                                    if (this.options = n === Object(n) ? n : {}, this.dil = null, !(t instanceof DIL))
                                        return p('dilInstance is not a valid instance of DIL');
                                    if (this.dil = t, i.partner = t.api.getPartner(), e !== Object(e))
                                        return p('siteCatalystReportingSuite is not an object');
                                    var r = e;
                                    return window.AppMeasurement_Module_DIL = r.m_DIL = function (e) {
                                        var t = 'function' == typeof e.m_i ? e.m_i('DIL') : this;
                                        if (t !== Object(t))
                                            return p('m is not an object');
                                        t.trackVars = f.constructTrackVars(s), t.d = 0, t.s = e, t._t = function () {
                                            var e, t, s, n, i, r, a = this, o = ',' + a.trackVars + ',', d = a.s, u = [], c = [], l = {}, h = !1;
                                            if (d !== Object(d))
                                                return p('Error in m._t function: s is not an object');
                                            if (a.d) {
                                                if ('function' == typeof d.foreachVar)
                                                    d.foreachVar(function (e, t) {
                                                        void 0 !== t && (l[e] = t, h = !0);
                                                    }, a.trackVars);
                                                else {
                                                    if (!(d.va_t instanceof Array))
                                                        return p('Error in m._t function: s.va_t is not an array');
                                                    if (d.lightProfileID ? e = (e = d.lightTrackVars) && ',' + e + ',' + d.vl_mr + ',' : (d.pe || d.linkType) && (e = d.linkTrackVars, d.pe && (t = d.pe.substring(0, 1).toUpperCase() + d.pe.substring(1), d[t] && (e = d[t].trackVars)), e = e && ',' + e + ',' + d.vl_l + ',' + d.vl_l2 + ','), e) {
                                                        for (r = 0, u = e.split(','); r < u.length; r++)
                                                            0 <= o.indexOf(',' + u[r] + ',') && c.push(u[r]);
                                                        c.length && (o = ',' + c.join(',') + ',');
                                                    }
                                                    for (n = 0, i = d.va_t.length; n < i; n++)
                                                        s = d.va_t[n], 0 <= o.indexOf(',' + s + ',') && void 0 !== d[s] && null !== d[s] && '' !== d[s] && (l[s] = d[s], h = !0);
                                                }
                                                f.includeContextData(d, l).store_populated && (h = !0), h && a.d.api.signals(l, 'c_').submit();
                                            }
                                        };
                                    }, r.loadModule('DIL'), r.DIL.d = t, i.message ? i.message : 'DIL.modules.siteCatalyst.init() completed with no errors';
                                } catch (e) {
                                    return this.handle(e, 'DIL.modules.siteCatalyst.init() caught error with message ', this.dil);
                                }
                            },
                            constructTrackVars: function (e) {
                                var t, s, n, i, r, a, o, d, u = [];
                                if (e === Object(e)) {
                                    if ((t = e.names) instanceof Array && (i = t.length))
                                        for (n = 0; n < i; n++)
                                            'string' == typeof (r = t[n]) && r.length && u.push(r);
                                    if ((s = e.iteratedNames) instanceof Array && (i = s.length))
                                        for (n = 0; n < i; n++)
                                            if ((a = s[n]) === Object(a) && (r = a.name, d = parseInt(a.maxIndex, 10), 'string' == typeof r && r.length && !isNaN(d) && 0 <= d))
                                                for (o = 0; o <= d; o++)
                                                    u.push(r + o);
                                    if (u.length)
                                        return u.join(',');
                                }
                                return this.constructTrackVars({
                                    names: [
                                        'pageName',
                                        'channel',
                                        'campaign',
                                        'products',
                                        'events',
                                        'pe',
                                        'pev1',
                                        'pev2',
                                        'pev3'
                                    ],
                                    iteratedNames: [
                                        {
                                            name: 'prop',
                                            maxIndex: 75
                                        },
                                        {
                                            name: 'eVar',
                                            maxIndex: 250
                                        }
                                    ]
                                });
                            },
                            includeContextData: function (e, t) {
                                var s = {}, n = !1;
                                if (e.contextData === Object(e.contextData)) {
                                    var i, r, a, o, d, u = e.contextData, c = this.options.replaceContextDataPeriodsWith, l = this.options.filterFromContextVariables, h = {};
                                    if ('string' == typeof c && c.length || (c = '_'), l instanceof Array)
                                        for (i = 0, r = l.length; i < r; i++)
                                            a = l[i], this.dil.validators.isPopulatedString(a) && (h[a] = !0);
                                    for (o in u)
                                        u.hasOwnProperty(o) && !h[o] && (!(d = u[o]) && 'number' != typeof d || (t[o = ('contextData.' + o).replace(/\./g, c)] = d, n = !0));
                                }
                                return s.store_populated = n, s;
                            }
                        };
                    'function' != typeof window.DIL && (window.DIL = function (s) {
                        var c, e, I, r, u, p, t, a, n, i, o, d, y, l, h, g, f, m, b, v, D, S = [], _ = {};
                        function O(e) {
                            return void 0 === e || !0 === e;
                        }
                        s !== Object(s) && (s = {}), I = s.partner, r = s.containerNSID, u = s.mappings, p = s.uuidCookie, t = !0 === s.enableErrorReporting, a = s.visitorService, n = s.declaredId, i = !0 === s.delayAllUntilWindowLoad, o = O(s.secureDataCollection), d = 'boolean' == typeof s.isCoopSafe ? s.isCoopSafe : null, y = O(s.enableHrefererParam), l = O(s.enableLogging), h = O(s.enableUrlDestinations), g = O(s.enableCookieDestinations), f = !0 === s.disableDefaultRequest, m = s.afterResultForDefaultRequest, b = s.visitorConstructor, v = !0 === s.disableCORS, D = !0 === s.ignoreHardDependencyOnVisitorAPI, t && DIL.errorModule.activate(), D && S.push('Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.');
                        var C = !0 === window._dil_unit_tests;
                        if ((c = arguments[1]) && S.push(c + ''), !I || 'string' != typeof I) {
                            var w = {
                                name: 'error',
                                message: c = 'DIL partner is invalid or not specified in initConfig',
                                filename: 'dil.js'
                            };
                            return DIL.errorModule.handleError(w), new Error(c);
                        }
                        if (c = 'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0', !r && 'number' != typeof r || (r = parseInt(r, 10), !isNaN(r) && 0 <= r && (c = '')), c && (r = 0, S.push(c), c = ''), (e = DIL.getDil(I, r)) instanceof DIL && e.api.getPartner() === I && e.api.getContainerNSID() === r)
                            return e;
                        if (!(this instanceof DIL))
                            return new DIL(s, 'DIL was not instantiated with the \'new\' operator, returning a valid instance with partner = ' + I + ' and containerNSID = ' + r);
                        DIL.registerDil(this, I, r);
                        var L = {
                                doesConsoleLogExist: window.console === Object(window.console) && 'function' == typeof window.console.log,
                                logMemo: {},
                                log: function (e) {
                                    S.push(e), l && this.doesConsoleLogExist && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, arguments);
                                },
                                logOnce: function (e) {
                                    this.logMemo[e] || (this.logMemo[e] = !0, L.log(e));
                                }
                            }, A = {
                                IS_HTTPS: o || 'https:' === document.location.protocol,
                                SIX_MONTHS_IN_MINUTES: 259200,
                                IE_VERSION: function () {
                                    if (document.documentMode)
                                        return document.documentMode;
                                    for (var e = 7; 4 < e; e--) {
                                        var t = document.createElement('div');
                                        if (t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->', t.getElementsByTagName('span').length)
                                            return t = null, e;
                                    }
                                    return null;
                                }()
                            };
                        A.IS_IE_LESS_THAN_10 = 'number' == typeof A.IE_VERSION && A.IE_VERSION < 10;
                        var P = { stuffed: {} }, T = {}, R = {
                                firingQueue: [],
                                fired: [],
                                firing: !1,
                                sent: [],
                                errored: [],
                                reservedKeys: {
                                    sids: !0,
                                    pdata: !0,
                                    logdata: !0,
                                    callback: !0,
                                    postCallbackFn: !0,
                                    useImageRequest: !0
                                },
                                firstRequestHasFired: !1,
                                abortRequests: !1,
                                num_of_cors_responses: 0,
                                num_of_cors_errors: 0,
                                corsErrorSources: [],
                                num_of_img_responses: 0,
                                num_of_img_errors: 0,
                                platformParams: {
                                    d_nsid: r + '',
                                    d_rtbd: 'json',
                                    d_jsonv: DIL.jsonVersion + '',
                                    d_dst: '1'
                                },
                                nonModStatsParams: {
                                    d_rtbd: !0,
                                    d_dst: !0,
                                    d_cts: !0,
                                    d_rs: !0
                                },
                                modStatsParams: null,
                                adms: {
                                    TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 30000,
                                    calledBack: !1,
                                    mid: null,
                                    noVisitorAPI: null,
                                    VisitorAPI: null,
                                    instance: null,
                                    releaseType: 'no VisitorAPI',
                                    isOptedOut: !0,
                                    isOptedOutCallbackCalled: !1,
                                    admsProcessingStarted: !1,
                                    process: function (e) {
                                        try {
                                            if (this.admsProcessingStarted)
                                                return;
                                            this.admsProcessingStarted = !0;
                                            var t, s, n, i = a;
                                            if ('function' != typeof e || 'function' != typeof e.getInstance)
                                                throw this.noVisitorAPI = !0, new Error('Visitor does not exist.');
                                            if (i !== Object(i) || !(t = i.namespace) || 'string' != typeof t)
                                                throw this.releaseType = 'no namespace', new Error('DIL.create() needs the initConfig property `visitorService`:{namespace:\'<Experience Cloud Org ID>\'}');
                                            if ((s = e.getInstance(t, { idSyncContainerID: r })) !== Object(s) || 'function' != typeof s.isAllowed || 'function' != typeof s.getMarketingCloudVisitorID || 'function' != typeof s.getCustomerIDs || 'function' != typeof s.isOptedOut || 'function' != typeof s.publishDestinations)
                                                throw this.releaseType = 'invalid instance', n = 'Invalid Visitor instance.', s === Object(s) && 'function' != typeof s.publishDestinations && (n += ' In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ .'), new Error(n);
                                            if (this.VisitorAPI = e, !s.isAllowed())
                                                return this.releaseType = 'VisitorAPI is not allowed to write cookies', void this.releaseRequests();
                                            this.instance = s, this.waitForMidToReleaseRequests();
                                        } catch (e) {
                                            if (!D)
                                                throw new Error('Error in processing Visitor API, which is a hard dependency for DIL v8.0+: ' + e.message);
                                            this.releaseRequests();
                                        }
                                    },
                                    waitForMidToReleaseRequests: function () {
                                        var t = this;
                                        this.instance && (this.instance.getMarketingCloudVisitorID(function (e) {
                                            t.mid = e, t.releaseType = 'VisitorAPI', t.releaseRequests();
                                        }, !0), (!N.exists || !N.isIabContext && N.isApproved() || N.isIabContext && G.hasGoSignal()) && setTimeout(function () {
                                            'VisitorAPI' !== t.releaseType && (t.releaseType = 'timeout', t.releaseRequests());
                                        }, this.getLoadTimeout()));
                                    },
                                    releaseRequests: function () {
                                        this.calledBack = !0, R.registerRequest();
                                    },
                                    getMarketingCloudVisitorID: function () {
                                        return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
                                    },
                                    getMIDQueryString: function () {
                                        var e = V.isPopulatedString, t = this.getMarketingCloudVisitorID();
                                        return e(this.mid) && this.mid === t || (this.mid = t), e(this.mid) ? 'd_mid=' + this.mid + '&' : '';
                                    },
                                    getCustomerIDs: function () {
                                        return this.instance ? this.instance.getCustomerIDs() : null;
                                    },
                                    getCustomerIDsQueryString: function (e) {
                                        if (e !== Object(e))
                                            return '';
                                        var t, s, n, i, r = '', a = [], o = [];
                                        for (t in e)
                                            e.hasOwnProperty(t) && (s = e[o[0] = t]) === Object(s) && (o[1] = s.id || '', o[2] = s.authState || 0, a.push(o), o = []);
                                        if (i = a.length)
                                            for (n = 0; n < i; n++)
                                                r += '&d_cid_ic=' + x.encodeAndBuildRequest(a[n], '%01');
                                        return r;
                                    },
                                    getIsOptedOut: function () {
                                        this.instance ? this.instance.isOptedOut([
                                            this,
                                            this.isOptedOutCallback
                                        ], this.VisitorAPI.OptOut.GLOBAL, !0) : (this.isOptedOut = !1, this.isOptedOutCallbackCalled = !0);
                                    },
                                    isOptedOutCallback: function (e) {
                                        this.isOptedOut = e, this.isOptedOutCallbackCalled = !0, R.registerRequest(), N.isIabContext() && G.checkQueryStringObject();
                                    },
                                    getLoadTimeout: function () {
                                        var e = this.instance;
                                        if (e) {
                                            if ('function' == typeof e.getLoadTimeout)
                                                return e.getLoadTimeout();
                                            if (void 0 !== e.loadTimeout)
                                                return e.loadTimeout;
                                        }
                                        return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
                                    }
                                },
                                declaredId: {
                                    declaredId: {
                                        init: null,
                                        request: null
                                    },
                                    declaredIdCombos: {},
                                    setDeclaredId: function (e, t) {
                                        var s = V.isPopulatedString, n = encodeURIComponent;
                                        if (e === Object(e) && s(t)) {
                                            var i = e.dpid, r = e.dpuuid, a = null;
                                            if (s(i) && s(r))
                                                return a = n(i) + '$' + n(r), !0 === this.declaredIdCombos[a] ? 'setDeclaredId: combo exists for type \'' + t + '\'' : (this.declaredIdCombos[a] = !0, this.declaredId[t] = {
                                                    dpid: i,
                                                    dpuuid: r
                                                }, 'setDeclaredId: succeeded for type \'' + t + '\'');
                                        }
                                        return 'setDeclaredId: failed for type \'' + t + '\'';
                                    },
                                    getDeclaredIdQueryString: function () {
                                        var e = this.declaredId.request, t = this.declaredId.init, s = encodeURIComponent, n = '';
                                        return null !== e ? n = '&d_dpid=' + s(e.dpid) + '&d_dpuuid=' + s(e.dpuuid) : null !== t && (n = '&d_dpid=' + s(t.dpid) + '&d_dpuuid=' + s(t.dpuuid)), n;
                                    }
                                },
                                registerRequest: function (e) {
                                    var t, s = this.firingQueue;
                                    e === Object(e) && (s.push(e), e.isDefaultRequest || (f = !0)), this.firing || !s.length || i && !DIL.windowLoaded || (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(), this.adms.calledBack && !this.adms.isOptedOut && this.adms.isOptedOutCallbackCalled && (N.isApproved() || G.hasGoSignal()) && (this.adms.isOptedOutCallbackCalled = !1, (t = s.shift()).src = t.src.replace(/&d_nsid=/, '&' + this.adms.getMIDQueryString() + G.getQueryString() + 'd_nsid='), V.isPopulatedString(t.corsPostData) && (t.corsPostData = t.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + G.getQueryString() + 'd_nsid=')), M.fireRequest(t), this.firstRequestHasFired || 'script' !== t.tag && 'cors' !== t.tag || (this.firstRequestHasFired = !0)));
                                },
                                processVisitorAPI: function () {
                                    this.adms.process(b || window.Visitor);
                                },
                                getCoopQueryString: function () {
                                    var e = '';
                                    return !0 === d ? e = '&d_coop_safe=1' : !1 === d && (e = '&d_coop_unsafe=1'), e;
                                }
                            };
                        _.requestController = R;
                        var E, j, k = {
                                sendingMessages: !1,
                                messages: [],
                                messagesPosted: [],
                                destinations: [],
                                destinationsPosted: [],
                                jsonForComparison: [],
                                jsonDuplicates: [],
                                jsonWaiting: [],
                                jsonProcessed: [],
                                publishDestinationsVersion: null,
                                requestToProcess: function (e, t) {
                                    var s, n = this;
                                    function i() {
                                        n.jsonForComparison.push(e), n.jsonWaiting.push([
                                            e,
                                            t
                                        ]);
                                    }
                                    if (e && !V.isEmptyObject(e))
                                        if (s = JSON.stringify(e.dests || []), this.jsonForComparison.length) {
                                            var r, a, o, d = !1;
                                            for (r = 0, a = this.jsonForComparison.length; r < a; r++)
                                                if (o = this.jsonForComparison[r], s === JSON.stringify(o.dests || [])) {
                                                    d = !0;
                                                    break;
                                                }
                                            d ? this.jsonDuplicates.push(e) : i();
                                        } else
                                            i();
                                    if (this.jsonWaiting.length) {
                                        var u = this.jsonWaiting.shift();
                                        this.process(u[0], u[1]), this.requestToProcess();
                                    }
                                    this.messages.length && !this.sendingMessages && this.sendMessages();
                                },
                                process: function (e) {
                                    if (h) {
                                        var t, s, n, i, r, a, o = encodeURIComponent, d = this.getPublishDestinationsVersion(), u = !1;
                                        if (-1 !== d) {
                                            if ((t = e.dests) && t instanceof Array && (s = t.length)) {
                                                for (n = 0; n < s; n++)
                                                    i = t[n], a = [
                                                        o('dests'),
                                                        o(i.id || ''),
                                                        o(i.y || ''),
                                                        o(i.c || '')
                                                    ].join('|'), this.addMessage(a), r = {
                                                        url: i.c,
                                                        hideReferrer: void 0 === i.hr || !!i.hr,
                                                        message: a
                                                    }, this.addDestination(r), void 0 !== i.hr && (u = !0);
                                                1 === d && u && L.logOnce('Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.');
                                            }
                                            this.jsonProcessed.push(e);
                                        }
                                    }
                                },
                                addMessage: function (e) {
                                    this.messages.push(e);
                                },
                                addDestination: function (e) {
                                    this.destinations.push(e);
                                },
                                sendMessages: function () {
                                    this.sendingMessages || (this.sendingMessages = !0, h && this.messages.length && this.publishDestinations());
                                },
                                publishDestinations: function () {
                                    function e(e) {
                                        L.log('visitor.publishDestinations() result: ' + (e.error || e.message)), s.sendingMessages = !1, s.requestToProcess();
                                    }
                                    function t() {
                                        s.messages = [], s.destinations = [];
                                    }
                                    var s = this, n = R.adms.instance, i = [], r = [];
                                    return 1 === this.publishDestinationsVersion ? (x.extendArray(i, this.messages), x.extendArray(this.messagesPosted, this.messages), t(), n.publishDestinations(I, i, e), 'Called visitor.publishDestinations() version 1') : 1 < this.publishDestinationsVersion ? (x.extendArray(r, this.destinations), x.extendArray(this.destinationsPosted, this.destinations), t(), n.publishDestinations({
                                        subdomain: I,
                                        callback: e,
                                        urlDestinations: r
                                    }), 'Called visitor.publishDestinations() version > 1') : void 0;
                                },
                                getPublishDestinationsVersion: function () {
                                    if (null !== this.publishDestinationsVersion)
                                        return this.publishDestinationsVersion;
                                    var e = R.adms.instance, s = -1;
                                    return e.publishDestinations(null, null, function (e) {
                                        if (e === Object(e)) {
                                            var t = e.error;
                                            'subdomain is not a populated string.' === t ? s = 1 : 'Invalid parameters passed.' === t && (s = 2);
                                        }
                                    }), this.publishDestinationsVersion = s;
                                }
                            }, q = {
                                traits: function (e) {
                                    return V.isValidPdata(e) && (T.sids instanceof Array || (T.sids = []), x.extendArray(T.sids, e)), this;
                                },
                                pixels: function (e) {
                                    return V.isValidPdata(e) && (T.pdata instanceof Array || (T.pdata = []), x.extendArray(T.pdata, e)), this;
                                },
                                logs: function (e) {
                                    return V.isValidLogdata(e) && (T.logdata !== Object(T.logdata) && (T.logdata = {}), x.extendObject(T.logdata, e)), this;
                                },
                                customQueryParams: function (e) {
                                    return V.isEmptyObject(e) || x.extendObject(T, e, R.reservedKeys), this;
                                },
                                signals: function (e, t) {
                                    var s, n = e;
                                    if (!V.isEmptyObject(n)) {
                                        if (t && 'string' == typeof t)
                                            for (s in (n = {}, e))
                                                e.hasOwnProperty(s) && (n[t + s] = e[s]);
                                        x.extendObject(T, n, R.reservedKeys);
                                    }
                                    return this;
                                },
                                declaredId: function (e) {
                                    return R.declaredId.setDeclaredId(e, 'request'), this;
                                },
                                result: function (e) {
                                    return 'function' == typeof e && (T.callback = e), this;
                                },
                                afterResult: function (e) {
                                    return 'function' == typeof e && (T.postCallbackFn = e), this;
                                },
                                useImageRequest: function () {
                                    return T.useImageRequest = !0, this;
                                },
                                clearData: function () {
                                    return T = {}, this;
                                },
                                submit: function (e) {
                                    return T.isDefaultRequest = !!e, M.submitRequest(T), T = {}, this;
                                },
                                getPartner: function () {
                                    return I;
                                },
                                getContainerNSID: function () {
                                    return r;
                                },
                                getEventLog: function () {
                                    return S;
                                },
                                getState: function () {
                                    var e = {}, t = {};
                                    return x.extendObject(e, R, { registerRequest: !0 }), x.extendObject(t, k, {
                                        requestToProcess: !0,
                                        process: !0,
                                        sendMessages: !0
                                    }), {
                                        initConfig: s,
                                        pendingRequest: T,
                                        otherRequestInfo: e,
                                        destinationPublishingInfo: t,
                                        log: S
                                    };
                                },
                                idSync: function () {
                                    throw new Error('Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance');
                                },
                                aamIdSync: function () {
                                    throw new Error('Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance');
                                },
                                passData: function (e) {
                                    return V.isEmptyObject(e) ? 'Error: json is empty or not an object' : (M.defaultCallback(e), e);
                                },
                                getPlatformParams: function () {
                                    return R.platformParams;
                                },
                                getEventCallConfigParams: function () {
                                    var e, t = R, s = t.modStatsParams, n = t.platformParams;
                                    if (!s) {
                                        for (e in (s = {}, n))
                                            n.hasOwnProperty(e) && !t.nonModStatsParams[e] && (s[e.replace(/^d_/, '')] = n[e]);
                                        !0 === d ? s.coop_safe = 1 : !1 === d && (s.coop_unsafe = 1), t.modStatsParams = s;
                                    }
                                    return s;
                                },
                                setAsCoopSafe: function () {
                                    return d = !0, this;
                                },
                                setAsCoopUnsafe: function () {
                                    return d = !1, this;
                                },
                                getEventCallIabSignals: function (e) {
                                    var t;
                                    return e !== Object(e) ? 'Error: config is not an object' : 'function' != typeof e.callback ? 'Error: config.callback is not a function' : (t = parseInt(e.timeout, 10), isNaN(t) && (t = null), void G.getQueryStringObject(e.callback, t));
                                }
                            }, M = {
                                corsMetadata: (E = 'none', 'undefined' != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && 'withCredentials' in new XMLHttpRequest() && (E = 'XMLHttpRequest'), { corsType: E }),
                                getCORSInstance: function () {
                                    return 'none' === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]();
                                },
                                submitRequest: function (e) {
                                    return R.registerRequest(M.createQueuedRequest(e)), !0;
                                },
                                createQueuedRequest: function (e) {
                                    var t, s, n, i, r, a = e.callback, o = 'img', d = e.isDefaultRequest;
                                    if (delete e.isDefaultRequest, !V.isEmptyObject(u))
                                        for (n in u)
                                            if (u.hasOwnProperty(n)) {
                                                if (null == (i = u[n]) || '' === i)
                                                    continue;
                                                if (n in e && !(i in e) && !(i in R.reservedKeys)) {
                                                    if (null == (r = e[n]) || '' === r)
                                                        continue;
                                                    e[i] = r;
                                                }
                                            }
                                    return V.isValidPdata(e.sids) || (e.sids = []), V.isValidPdata(e.pdata) || (e.pdata = []), V.isValidLogdata(e.logdata) || (e.logdata = {}), e.logdataArray = x.convertObjectToKeyValuePairs(e.logdata, '=', !0), e.logdataArray.push('_ts=' + new Date().getTime()), 'function' != typeof a && (a = this.defaultCallback), t = this.makeRequestSrcData(e), (s = this.getCORSInstance()) && !0 !== e.useImageRequest && (o = 'cors'), {
                                        tag: o,
                                        src: t.src,
                                        corsSrc: t.corsSrc,
                                        callbackFn: a,
                                        postCallbackFn: e.postCallbackFn,
                                        useImageRequest: !!e.useImageRequest,
                                        requestData: e,
                                        corsInstance: s,
                                        corsPostData: t.corsPostData,
                                        isDefaultRequest: d
                                    };
                                },
                                defaultCallback: function (e, t) {
                                    var s, n, i, r, a, o, d, u, c;
                                    if (g && (s = e.stuff) && s instanceof Array && (n = s.length))
                                        for (i = 0; i < n; i++)
                                            (r = s[i]) && r === Object(r) && (a = r.cn, o = r.cv, void 0 !== (d = r.ttl) && '' !== d || (d = Math.floor(x.getMaxCookieExpiresInMinutes() / 60 / 24)), u = r.dmn || '.' + document.domain.replace(/^www\./, ''), c = r.type, a && (o || 'number' == typeof o) && ('var' !== c && (d = parseInt(d, 10)) && !isNaN(d) && x.setCookie(a, o, 24 * d * 60, '/', u, !1), P.stuffed[a] = o));
                                    var l, h, f = e.uuid;
                                    V.isPopulatedString(f) && (V.isEmptyObject(p) || ('string' == typeof (l = p.path) && l.length || (l = '/'), h = parseInt(p.days, 10), isNaN(h) && (h = 100), x.setCookie(p.name || 'aam_did', f, 24 * h * 60, l, p.domain || '.' + document.domain.replace(/^www\./, ''), !0 === p.secure))), R.abortRequests || k.requestToProcess(e, t);
                                },
                                makeRequestSrcData: function (r) {
                                    r.sids = V.removeEmptyArrayValues(r.sids || []), r.pdata = V.removeEmptyArrayValues(r.pdata || []);
                                    var a = R, e = a.platformParams, t = x.encodeAndBuildRequest(r.sids, ','), s = x.encodeAndBuildRequest(r.pdata, ','), n = (r.logdataArray || []).join('&');
                                    delete r.logdataArray;
                                    var i, o, d = encodeURIComponent, u = A.IS_HTTPS ? 'https://' : 'http://', c = a.declaredId.getDeclaredIdQueryString(), l = a.adms.instance ? a.adms.getCustomerIDsQueryString(a.adms.getCustomerIDs()) : '', h = function () {
                                            var e, t, s, n, i = [];
                                            for (e in r)
                                                if (!(e in a.reservedKeys) && r.hasOwnProperty(e))
                                                    if (t = r[e], e = d(e), t instanceof Array)
                                                        for (s = 0, n = t.length; s < n; s++)
                                                            i.push(e + '=' + d(t[s]));
                                                    else
                                                        i.push(e + '=' + d(t));
                                            return i.length ? '&' + i.join('&') : '';
                                        }(), f = 'd_dil_ver=' + d(DIL.version), p = 'd_nsid=' + e.d_nsid + a.getCoopQueryString() + c + l + (t.length ? '&d_sid=' + t : '') + (s.length ? '&d_px=' + s : '') + (n.length ? '&d_ld=' + d(n) : ''), g = '&d_rtbd=' + e.d_rtbd + '&d_jsonv=' + e.d_jsonv + '&d_dst=' + e.d_dst, m = y ? '&h_referer=' + d(location.href) : '';
                                    return o = (i = u + I + '.demdex.net/event') + '?' + f + '&' + p + g + h + m, {
                                        corsSrc: i + '?' + f + '&_ts=' + new Date().getTime(),
                                        src: o,
                                        corsPostData: p + g + h + m,
                                        isDeclaredIdCall: '' !== c
                                    };
                                },
                                fireRequest: function (e) {
                                    if ('img' === e.tag)
                                        this.fireImage(e);
                                    else {
                                        var t = R.declaredId, s = t.declaredId.request || t.declaredId.init || {}, n = {
                                                dpid: s.dpid || '',
                                                dpuuid: s.dpuuid || ''
                                            };
                                        this.fireCORS(e, n);
                                    }
                                },
                                fireImage: function (t) {
                                    var e, s, n = R;
                                    n.abortRequests || (n.firing = !0, e = new Image(0, 0), n.sent.push(t), e.onload = function () {
                                        n.firing = !1, n.fired.push(t), n.num_of_img_responses++, n.registerRequest();
                                    }, s = function (e) {
                                        c = 'imgAbortOrErrorHandler received the event of type ' + e.type, L.log(c), n.abortRequests = !0, n.firing = !1, n.errored.push(t), n.num_of_img_errors++, n.registerRequest();
                                    }, e.addEventListener('error', s), e.addEventListener('abort', s), e.src = t.src);
                                },
                                fireCORS: function (n, i) {
                                    var r = this, a = R, e = this.corsMetadata.corsType, t = n.corsSrc, s = n.corsInstance, o = n.corsPostData, d = n.postCallbackFn, u = 'function' == typeof d;
                                    if (!a.abortRequests && !v) {
                                        a.firing = !0;
                                        try {
                                            s.open('post', t, !0), 'XMLHttpRequest' === e && (s.withCredentials = !0, s.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), s.onreadystatechange = function () {
                                                4 === this.readyState && 200 === this.status && function (e) {
                                                    var t;
                                                    try {
                                                        if ((t = JSON.parse(e)) !== Object(t))
                                                            return r.handleCORSError(n, i, 'Response is not JSON');
                                                    } catch (e) {
                                                        return r.handleCORSError(n, i, 'Error parsing response as JSON');
                                                    }
                                                    try {
                                                        var s = n.callbackFn;
                                                        a.firing = !1, a.fired.push(n), a.num_of_cors_responses++, s(t, i), u && d(t, i);
                                                    } catch (e) {
                                                        e.message = 'DIL handleCORSResponse caught error with message ' + e.message, c = e.message, L.log(c), e.filename = e.filename || 'dil.js', e.partner = I, DIL.errorModule.handleError(e);
                                                        try {
                                                            s({ error: e.name + '|' + e.message }, i), u && d({ error: e.name + '|' + e.message }, i);
                                                        } catch (e) {
                                                        }
                                                    } finally {
                                                        a.registerRequest();
                                                    }
                                                }(this.responseText);
                                            }), s.onerror = function () {
                                                r.handleCORSError(n, i, 'onerror');
                                            }, s.ontimeout = function () {
                                                r.handleCORSError(n, i, 'ontimeout');
                                            }, s.send(o);
                                        } catch (e) {
                                            this.handleCORSError(n, i, 'try-catch');
                                        }
                                        a.sent.push(n), a.declaredId.declaredId.request = null;
                                    }
                                },
                                handleCORSError: function (e, t, s) {
                                    R.num_of_cors_errors++, R.corsErrorSources.push(s);
                                }
                            }, V = {
                                isValidPdata: function (e) {
                                    return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
                                },
                                isValidLogdata: function (e) {
                                    return !this.isEmptyObject(e);
                                },
                                isEmptyObject: function (e) {
                                    if (e !== Object(e))
                                        return !0;
                                    var t;
                                    for (t in e)
                                        if (e.hasOwnProperty(t))
                                            return !1;
                                    return !0;
                                },
                                removeEmptyArrayValues: function (e) {
                                    var t, s = 0, n = e.length, i = [];
                                    for (s = 0; s < n; s++)
                                        null != (t = e[s]) && '' !== t && i.push(t);
                                    return i;
                                },
                                isPopulatedString: function (e) {
                                    return 'string' == typeof e && e.length;
                                }
                            }, x = {
                                convertObjectToKeyValuePairs: function (e, t, s) {
                                    var n, i, r = [];
                                    for (n in (t = t || '=', e))
                                        e.hasOwnProperty(n) && null != (i = e[n]) && '' !== i && r.push(n + t + (s ? encodeURIComponent(i) : i));
                                    return r;
                                },
                                encodeAndBuildRequest: function (e, t) {
                                    return e.map(function (e) {
                                        return encodeURIComponent(e);
                                    }).join(t);
                                },
                                getCookie: function (e) {
                                    var t, s, n, i = e + '=', r = document.cookie.split(';');
                                    for (t = 0, s = r.length; t < s; t++) {
                                        for (n = r[t]; ' ' === n.charAt(0);)
                                            n = n.substring(1, n.length);
                                        if (0 === n.indexOf(i))
                                            return decodeURIComponent(n.substring(i.length, n.length));
                                    }
                                    return null;
                                },
                                setCookie: function (e, t, s, n, i, r) {
                                    var a = new Date();
                                    s = s && 1000 * s * 60, document.cookie = e + '=' + encodeURIComponent(t) + (s ? ';expires=' + new Date(a.getTime() + s).toUTCString() : '') + (n ? ';path=' + n : '') + (i ? ';domain=' + i : '') + (r ? ';secure' : '');
                                },
                                extendArray: function (e, t) {
                                    return e instanceof Array && t instanceof Array && (Array.prototype.push.apply(e, t), !0);
                                },
                                extendObject: function (e, t, s) {
                                    var n;
                                    if (e !== Object(e) || t !== Object(t))
                                        return !1;
                                    for (n in t)
                                        if (t.hasOwnProperty(n)) {
                                            if (!V.isEmptyObject(s) && n in s)
                                                continue;
                                            e[n] = t[n];
                                        }
                                    return !0;
                                },
                                getMaxCookieExpiresInMinutes: function () {
                                    return A.SIX_MONTHS_IN_MINUTES;
                                },
                                replaceMethodsWithFunction: function (e, t) {
                                    var s;
                                    if (e === Object(e) && 'function' == typeof t)
                                        for (s in e)
                                            e.hasOwnProperty(s) && 'function' == typeof e[s] && (e[s] = t);
                                }
                            }, N = (j = _.requestController, {
                                exists: null,
                                instance: null,
                                aamIsApproved: null,
                                init: function () {
                                    var e = this;
                                    this.checkIfExists() ? (this.exists = !0, this.instance = window.adobe.optIn, this.instance.fetchPermissions(function () {
                                        e.callback();
                                    }, !0)) : this.exists = !1;
                                },
                                checkIfExists: function () {
                                    return window.adobe === Object(window.adobe) && window.adobe.optIn === Object(window.adobe.optIn);
                                },
                                callback: function () {
                                    this.aamIsApproved = this.instance.isApproved([this.instance.Categories.AAM]), j.adms.waitForMidToReleaseRequests(), j.adms.getIsOptedOut();
                                },
                                isApproved: function () {
                                    return !this.isIabContext() && !j.adms.isOptedOut && (!this.exists || this.aamIsApproved);
                                },
                                isIabContext: function () {
                                    return this.instance && this.instance.isIabContext;
                                }
                            });
                        _.optIn = N;
                        var U, F, Q, H, G = (F = (U = _).requestController, Q = U.optIn, H = {
                                isVendorConsented: null,
                                doesGdprApply: null,
                                consentString: null,
                                queryStringObjectCallbacks: [],
                                init: function () {
                                    this.fetchConsentData();
                                },
                                hasGoSignal: function () {
                                    return !(!(Q.isIabContext() && this.isVendorConsented && this.doesGdprApply && 'string' == typeof this.consentString && this.consentString.length) || F.adms.isOptedOut);
                                },
                                fetchConsentData: function (s, e) {
                                    var n = this, t = {};
                                    'function' != typeof s && (s = function () {
                                    }), Q.instance && Q.isIabContext() ? (e && (t.timeout = e), Q.instance.execute({
                                        command: 'iabPlugin.fetchConsentData',
                                        params: t,
                                        callback: function (e, t) {
                                            t === Object(t) ? (n.doesGdprApply = !!t.gdprApplies, n.consentString = t.consentString || '') : (n.doesGdprApply = !1, n.consentString = ''), n.isVendorConsented = Q.instance.isApproved(Q.instance.Categories.AAM), e ? s({}) : n.checkQueryStringObject(s), F.adms.waitForMidToReleaseRequests();
                                        }
                                    })) : s({});
                                },
                                getQueryString: function () {
                                    return Q.isIabContext() ? 'gdpr=' + (this.doesGdprApply ? 1 : 0) + '&gdpr_consent=' + this.consentString + '&' : '';
                                },
                                getQueryStringObject: function (e, t) {
                                    this.fetchConsentData(e, t);
                                },
                                checkQueryStringObject: function (e) {
                                    H.hasGoSignal() && 'function' == typeof e && e({
                                        gdpr: this.doesGdprApply ? 1 : 0,
                                        gdpr_consent: this.consentString
                                    });
                                }
                            });
                        _.iab = G, 'error' === I && 0 === r && window.addEventListener('load', function () {
                            DIL.windowLoaded = !0;
                        });
                        function B() {
                            W || (W = !0, R.registerRequest(), K());
                        }
                        var W = !1, K = function () {
                                setTimeout(function () {
                                    f || R.firstRequestHasFired || ('function' == typeof m ? q.afterResult(m).submit(!0) : q.submit(!0));
                                }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                            }, X = document;
                        'error' !== I && (DIL.windowLoaded ? B() : 'complete' !== X.readyState && 'loaded' !== X.readyState ? window.addEventListener('load', function () {
                            DIL.windowLoaded = !0, B();
                        }) : (DIL.windowLoaded = !0, B())), R.declaredId.setDeclaredId(n, 'init'), N.init(), G.init(), R.processVisitorAPI();
                        A.IS_IE_LESS_THAN_10 && x.replaceMethodsWithFunction(q, function () {
                            return this;
                        }), this.api = q, this.getStuffedVariable = function (e) {
                            var t = P.stuffed[e];
                            return t || 'number' == typeof t || (t = x.getCookie(e)) || 'number' == typeof t || (t = ''), t;
                        }, this.validators = V, this.helpers = x, this.constants = A, this.log = S, this.pendingRequest = T, this.requestController = R, this.destinationPublishing = k, this.requestProcs = M, this.units = _, this.initConfig = s, this.logger = L, C && (this.variables = P, this.callWindowLoadFunctions = B);
                    }, DIL.extendStaticPropertiesAndMethods = function (e) {
                        var t;
                        if (e === Object(e))
                            for (t in e)
                                e.hasOwnProperty(t) && (this[t] = e[t]);
                    }, DIL.extendStaticPropertiesAndMethods({
                        version: '9.4',
                        jsonVersion: 1,
                        constants: { TIME_TO_DEFAULT_REQUEST: 500 },
                        variables: { scriptNodeList: document.getElementsByTagName('script') },
                        windowLoaded: !1,
                        dils: {},
                        isAddedPostWindowLoad: function () {
                            var e = arguments[0];
                            this.windowLoaded = 'function' == typeof e ? !!e() : 'boolean' != typeof e || e;
                        },
                        create: function (e) {
                            try {
                                return new DIL(e);
                            } catch (e) {
                                throw new Error('Error in attempt to create DIL instance with DIL.create(): ' + e.message);
                            }
                        },
                        registerDil: function (e, t, s) {
                            var n = t + '$' + s;
                            n in this.dils || (this.dils[n] = e);
                        },
                        getDil: function (e, t) {
                            var s;
                            return 'string' != typeof e && (e = ''), (s = e + '$' + (t = t || 0)) in this.dils ? this.dils[s] : new Error('The DIL instance with partner = ' + e + ' and containerNSID = ' + t + ' was not found');
                        },
                        dexGetQSVars: function (e, t, s) {
                            var n = this.getDil(t, s);
                            return n instanceof this ? n.getStuffedVariable(e) : '';
                        }
                    }), DIL.errorModule = (r = DIL.create({
                        partner: 'error',
                        containerNSID: 0,
                        ignoreHardDependencyOnVisitorAPI: !0
                    }), o = !(a = {
                        harvestererror: 14138,
                        destpuberror: 14139,
                        dpmerror: 14140,
                        generalerror: 14137,
                        error: 14137,
                        noerrortypedefined: 15021,
                        evalerror: 15016,
                        rangeerror: 15017,
                        referenceerror: 15018,
                        typeerror: 15019,
                        urierror: 15020
                    }), {
                        activate: function () {
                            o = !0;
                        },
                        handleError: function (e) {
                            if (!o)
                                return 'DIL error module has not been activated';
                            e !== Object(e) && (e = {});
                            var t = e.name ? (e.name + '').toLowerCase() : '', s = t in a ? a[t] : a.noerrortypedefined, n = [], i = {
                                    name: t,
                                    filename: e.filename ? e.filename + '' : '',
                                    partner: e.partner ? e.partner + '' : 'no_partner',
                                    site: e.site ? e.site + '' : document.location.href,
                                    message: e.message ? e.message + '' : ''
                                };
                            return n.push(s), r.api.pixels(n).logs(i).useImageRequest().submit(), 'DIL error report sent';
                        },
                        pixelMap: a
                    }), DIL.tools = {}, DIL.modules = { helpers: {} }), window.DIL && DIL.tools && DIL.modules && (DIL.tools.getMetaTags = function () {
                        var e, t, s, n, i, r = {}, a = document.getElementsByTagName('meta');
                        for (e = 0, s = arguments.length; e < s; e++)
                            if (null !== (n = arguments[e]))
                                for (t = 0; t < a.length; t++)
                                    if ((i = a[t]).name === n) {
                                        r[n] = i.content;
                                        break;
                                    }
                        return r;
                    }, DIL.tools.decomposeURI = function (e) {
                        var s, t = document.createElement('a');
                        return t.href = e || document.referrer, {
                            hash: t.hash,
                            host: t.host.split(':').shift(),
                            hostname: t.hostname,
                            href: t.href,
                            pathname: t.pathname.replace(/^\//, ''),
                            protocol: t.protocol,
                            search: t.search,
                            uriParams: (s = {}, t.search.replace(/^(\/|\?)?|\/$/g, '').split('&').map(function (e) {
                                var t = e.split('=');
                                s[t.shift()] = t.shift();
                            }), s)
                        };
                    }, DIL.tools.getSearchReferrer = function (e, t) {
                        var s = DIL.getDil('error'), n = DIL.tools.decomposeURI(e || document.referrer), i = '', r = '', a = {
                                DEFAULT: { queryParam: 'q' },
                                SEARCH_ENGINES: [
                                    t === Object(t) ? t : {},
                                    { hostPattern: /aol\./ },
                                    { hostPattern: /ask\./ },
                                    { hostPattern: /bing\./ },
                                    { hostPattern: /google\./ },
                                    {
                                        hostPattern: /yahoo\./,
                                        queryParam: 'p'
                                    }
                                ]
                            }, o = a.DEFAULT;
                        return (i = a.SEARCH_ENGINES.filter(function (e) {
                            return !(!e.hasOwnProperty('hostPattern') || !n.hostname.match(e.hostPattern));
                        }).shift()) ? {
                            valid: !0,
                            name: n.hostname,
                            keywords: (s.helpers.extendObject(o, i), i = ('' + n.search).match(o.queryPattern), r = o.queryPattern ? i ? i[1] : '' : n.uriParams[o.queryParam], decodeURIComponent(r || '').replace(/\+|%20/g, ' '))
                        } : {
                            valid: !1,
                            name: '',
                            keywords: ''
                        };
                    }, DIL.modules.GA = t, DIL.modules.siteCatalyst = s, DIL.modules.helpers.handleModuleError = e);
                }();
                var userOptedOutString = Bootstrapper.data.resolve('55449') || 'true';
                userOptedOut = userOptedOutString === 'true';
                var xintuit = {
                    org: Bootstrapper.data.resolve('55346'),
                    env: Bootstrapper.data.resolve('55347'),
                    src: Bootstrapper.data.resolve('55348'),
                    cNSID: Bootstrapper.data.resolve('55349')
                };
                var dil = DIL.create({
                    partner: 'turbotax',
                    enableLogging: false,
                    visitorService: { namespace: Bootstrapper.data.resolve('55350') },
                    containerNSID: xintuit.cNSID.nsidId,
                    uuidCookie: { name: 'aam_uuid' },
                    isCoopSafe: !userOptedOut,
                    secureDataCollection: false
                });
                if (window.wa.ivid) {
                    var cidIntegrateCode = encodeURIComponent('28016');
                    var cidUserID = encodeURIComponent(window.wa.ivid);
                    var cidFinal = cidIntegrateCode + '%01' + cidUserID;
                    dil.api.signals({
                        d_cid: cidFinal,
                        c_ivid: window.wa.ivid
                    });
                }
                xintuit.cNSID = xintuit.cNSID.nsidId + '|' + xintuit.cNSID.nsidName;
                dil.api.signals(xintuit, 'c_xintuit_');
                var _scDilObj = window.AppMeasurement.getInstance(wa.s.account);
                DIL.modules.siteCatalyst.init(_scDilObj, dil);
            });
        }, 3452280, 559417);
    }())
}