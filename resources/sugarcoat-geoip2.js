var geoip2;
{
    const $___mock_81b598c2c2864be7 = {};
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
    })($___mock_81b598c2c2864be7);
    (function () {
        'use strict';
        var $___var_8d8fe98185d9ccd7 = function () {
            var e = {};
            function t(e, t, n, r) {
                this.successCallback = e, this.errorCallback = t, this.type = r;
            }
            t.prototype.returnSuccess = function (e) {
                this.successCallback && 'function' == typeof this.successCallback && this.successCallback(this.fillInObject(JSON.parse(e)));
            }, t.prototype.returnError = function (e) {
                this.errorCallback && 'function' == typeof this.errorCallback && (e || (e = { error: 'Unknown error' }), this.errorCallback(e));
            };
            var n = {
                country: [
                    [
                        'continent',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'country',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'registered_country',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'represented_country',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'traits',
                        'Object'
                    ]
                ],
                city: [
                    [
                        'city',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'continent',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'country',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'location',
                        'Object'
                    ],
                    [
                        'postal',
                        'Object'
                    ],
                    [
                        'registered_country',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'represented_country',
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'subdivisions',
                        'Array',
                        0,
                        'Object',
                        'names',
                        'Object'
                    ],
                    [
                        'traits',
                        'Object'
                    ]
                ]
            };
            return t.prototype.fillInObject = function (e) {
                for (var t = 'country' === this.type ? n.country : n.city, r = 0; r < t.length; r++)
                    for (var o = t[r], s = e, i = 0; i < o.length; i += 2) {
                        var c = o[i];
                        s[c] || (s[c] = 'Object' === o[i + 1] ? {} : []), s = s[c];
                    }
                try {
                    Object.defineProperty(e.continent, 'continent_code', {
                        enumerable: !1,
                        get: function () {
                            return this.code;
                        },
                        set: function (e) {
                            this.code = e;
                        }
                    });
                } catch (t) {
                    e.continent.code && (e.continent.continent_code = e.continent.code);
                }
                if ('country' !== this.type)
                    try {
                        Object.defineProperty(e, 'most_specific_subdivision', {
                            enumerable: !1,
                            get: function () {
                                return this.subdivisions[this.subdivisions.length - 1];
                            },
                            set: function (e) {
                                this.subdivisions[this.subdivisions.length - 1] = e;
                            }
                        });
                    } catch (t) {
                        e.most_specific_subdivision = e.subdivisions[e.subdivisions.length - 1];
                    }
                return e;
            }, t.prototype.getGeoIPResult = function () {
                const $___old_63e7ee63e05b8e5d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_947f308f36c25b38 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_63e7ee63e05b8e5d)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_81b598c2c2864be7.XMLHttpRequest));
                    if ($___old_947f308f36c25b38)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_81b598c2c2864be7.XMLHttpRequest));
                    return function () {
                        var e, t = window.location.hostname, n = t.split('.').reverse();
                        'maxmind' !== n[1] || 'com' !== n[0] && 'dev' !== n[0] || 'www.maxmind.com' === t || (e = t);
                        var r, o = this, s = new window.XMLHttpRequest(), i = 'https://' + (e || 'geoip-js.com') + '/geoip/v2.1/' + this.type + '/me?', c = { referrer: location.protocol + '//' + location.hostname };
                        if (!this.alreadyRan) {
                            for (r in (this.alreadyRan = 1, c))
                                c.hasOwnProperty(r) && c[r] && (i += r + '=' + encodeURIComponent(c[r]) + '&');
                            i = i.substring(0, i.length - 1), s.open('GET', i, !0), s.onload = function () {
                                if (void 0 === s.status || 200 === s.status)
                                    o.returnSuccess(s.responseText);
                                else {
                                    var e, t = s.hasOwnProperty('contentType') ? s.contentType : s.getResponseHeader('Content-Type');
                                    if (/json/.test(t) && s.responseText.length)
                                        try {
                                            e = JSON.parse(s.responseText);
                                        } catch (t) {
                                            e = {
                                                code: 'HTTP_ERROR',
                                                error: 'The server returned a ' + s.status + ' status with an invalid JSON body.'
                                            };
                                        }
                                    else
                                        e = s.responseText.length ? {
                                            code: 'HTTP_ERROR',
                                            error: 'The server returned a ' + s.status + ' status with the following body: ' + s.responseText
                                        } : {
                                            code: 'HTTP_ERROR',
                                            error: 'The server returned a ' + s.status + ' status but either the server did not return a body or this browser is a version of Internet Explorer that hides error bodies.'
                                        };
                                    o.returnError(e);
                                }
                            }, s.ontimeout = function () {
                                o.returnError({
                                    code: 'HTTP_TIMEOUT',
                                    error: 'The request to the GeoIP2 web service timed out.'
                                });
                            }, s.onerror = function () {
                                o.returnError({
                                    code: 'HTTP_ERROR',
                                    error: 'There was a network error receiving the response from the GeoIP2 web service.'
                                });
                            }, s.send(null);
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_63e7ee63e05b8e5d)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_63e7ee63e05b8e5d));
                    if ($___old_947f308f36c25b38)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_947f308f36c25b38));
                }
            }, e.country = function (e, n, r) {
                new t(e, n, r, 'country').getGeoIPResult();
            }, e.city = function (e, n, r) {
                new t(e, n, r, 'city').getGeoIPResult();
            }, e.insights = function (e, n, r) {
                new t(e, n, r, 'insights').getGeoIPResult();
            }, e;
        }();
        geoip2 = $___var_8d8fe98185d9ccd7;
    }())
}