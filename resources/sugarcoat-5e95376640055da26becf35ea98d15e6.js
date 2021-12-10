{
    const $___mock_d13e8f9c9109d55e = {};
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
    })($___mock_d13e8f9c9109d55e);
    const $___mock_426638777e368d36 = {};
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
    })($___mock_426638777e368d36);
    const $___mock_b4ba15607b50137b = {};
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
    })($___mock_b4ba15607b50137b);
    (function () {
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function facebook_pixel_id() {
                        var win = window, adl = win.analyticsdatalayer, facebookPixelId = '781087591914833';
                        if (adl.appenvironment === 'test' || adl.appenvironment === 'stage')
                            facebookPixelId = '353582448417477';
                        return facebookPixelId;
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'page',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'facebook-pixel-id',
                    collection: 'computed',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '62359' });
            }, 62359);
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function displaylocale_language() {
                        var win = window, utils = win.haEnsightenUtils, displayLocale = utils.adlExtractor('displaylocale'), localeParts = displayLocale.split('_');
                        if (displayLocale && localeParts.length === 2)
                            return localeParts[0];
                        return '';
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'page',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'displaylocale-language',
                    collection: 'computed',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '59947' });
            }, 59947);
        }, -1, -1);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['Global: Pageview'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                (function (win) {
                    var bs = win.Bootstrapper, utils = win.haEnsightenUtils, shouldSyncCookie = 'ta_timeout', syncCookieValue = utils.getCookie(shouldSyncCookie), timeout = 60, tapAdUrl, eventName, visitorId, replacementString, monikerbrand, syncPayload, encodedSyncUrl, reqUrl;
                    if (syncCookieValue === null) {
                        tapAdUrl = 'https://pixel.tapad.com/idsync/ex/receive?partner_id=2485&partner_device_id={HAV_ID}&partner_url={ENCODED_CB_URL}';
                        eventName = 'sync:tapad.send';
                        visitorId = utils.getVisitorId();
                        replacementString = 'RYANREPLACEME123';
                        monikerbrand = utils.adlExtractor('monikerbrand', '-1');
                        syncPayload = {
                            tapadid: replacementString,
                            monikerbrand: monikerbrand
                        };
                        encodedSyncUrl = encodeURIComponent(utils.generateClientLoggingRequest(eventName, syncPayload, false));
                        reqUrl = tapAdUrl.replace('{HAV_ID}', visitorId).replace('{ENCODED_CB_URL}', encodedSyncUrl);
                        reqUrl = reqUrl.replace(replacementString, '${TA_DEVICE_ID}');
                        bs.imageRequest(reqUrl);
                        utils.setCookie(shouldSyncCookie, '1', utils.getLocationHostname(), timeout);
                    }
                }(window));
            });
        }, 2597348, [3383374], 490342, [349938]);
        Bootstrapper.bindDOMParsed(function () {
            Bootstrapper.ensEvent.add(['Global: Pageview'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var param_ti = '5668975';
                var param_gv = '';
                var param_ea = '';
                var param_ec = '';
                var param_el = '';
                var param_ev = '';
                var pageLoad = true;
                var arrayName = '';
                var onload_function = function () {
                    const $___old_3e0bea6cf199adef = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_4f23e24877ff56d3 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_c183a00c198c5771 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_3e0bea6cf199adef)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d13e8f9c9109d55e.XMLHttpRequest));
                        if ($___old_4f23e24877ff56d3)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d13e8f9c9109d55e.XMLHttpRequest));
                        if ($___old_c183a00c198c5771)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_426638777e368d36.localStorage));
                        return function () {
                            var name = '';
                            if (arrayName === 'uetq' || arrayName === '')
                                name = window.uetq || [];
                            else if (arrayName !== undefined && arrayName != 'uetq')
                                name = window.arrayName || [];
                            var o = { ti: param_ti };
                            o.q = name, name = new UET(o);
                            if (pageLoad)
                                name.push('pageLoad');
                            var local_object = {};
                            param_gv ? local_object['gv'] = +(+param_gv).toFixed(3) : '', param_ea ? local_object['ea'] = param_ea : '', param_ec ? local_object['ec'] = param_ec : '', param_el ? local_object['el'] = param_el : '', param_ev ? local_object['ev'] = param_ev : '';
                            name.push(local_object);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_3e0bea6cf199adef)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_3e0bea6cf199adef));
                        if ($___old_4f23e24877ff56d3)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4f23e24877ff56d3));
                        if ($___old_c183a00c198c5771)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_c183a00c198c5771));
                    }
                };
                var local_scr_url = '//' + 'bat.bing.com/bat.js';
                Bootstrapper.loadScriptCallback(local_scr_url, onload_function);
            });
        }, 2486911, 513978);
        Bootstrapper.bindDOMLoaded(function () {
            Bootstrapper.ensEvent.add(['Global: Pageview [essential]'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                (function (win) {
                    var bs = win.Bootstrapper, utils = win.haEnsightenUtils, visitorId = utils.getVisitorId(), hostname = utils.getLocationHostname(), haAppEnv = utils.adlExtractor('appenvironment', ''), envMapping = {
                            test: 'dev',
                            stage: 'int',
                            production: 'prod'
                        }, travelPixelParams = {
                            guid: visitorId,
                            serverPlatform: 'homeaway',
                            tpid: '',
                            eapid: '',
                            expUserId: '',
                            amcv: '',
                            inAuthId: '',
                            emailHash: ''
                        }, egEnv = envMapping[haAppEnv];
                    if (!egEnv)
                        return;
                    bs.insertScript('https://b.travel-assets.com/travel-pixel-js/1.0.0/app.js');
                    win.travelPixel = win.travelPixel || [];
                    win.travelPixel.push(function (TravelPixelWaiter) {
                        const $___old_06b2b9f9aefb7280 = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                        try {
                            if ($___old_06b2b9f9aefb7280)
                                ({}.constructor.defineProperty(window, 'fetch', $___mock_b4ba15607b50137b.fetch));
                            return function () {
                                var waiter = new TravelPixelWaiter(hostname, egEnv);
                                waiter.loadXdidApi(travelPixelParams).then(function (xdid) {
                                    if (xdid)
                                        win.edap.push({
                                            name: 'xdid.send',
                                            data: { xdid: xdid }
                                        });
                                });
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_06b2b9f9aefb7280)
                                ({}.constructor.defineProperty(window, 'fetch', $___old_06b2b9f9aefb7280));
                        }
                    });
                }(window));
            });
        }, 3255908, 591453);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function ga_marketing_tracking_id() {
                        var win = window, adl = win.analyticsdatalayer, trackingId = 'UA-160705394-2';
                        if (adl.appenvironment === 'production')
                            trackingId = 'UA-160705394-1';
                        return trackingId;
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'page',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'ga-marketing-tracking-id',
                    collection: 'computed',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '62497' });
            }, 62497);
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function criteo_incrementality_test_bucket() {
                        var result;
                        try {
                            result = window.__ABACUS__.HA_INCR_CRITEO.bucket.bucketValue;
                            if (result === undefined)
                                return undefined;
                            return '' + result;
                        } catch (e) {
                            return undefined;
                        }
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'instance',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'criteo-incrementality-test-bucket',
                    collection: 'computed',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '55415' });
            }, 55415);
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            Bootstrapper.ensEvent.add(['Global: Pageview'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                (function (win) {
                    var utils = win.haEnsightenUtils, bs = win.Bootstrapper, data_definition_dc_activity_id = 48082, data_definition_visitorid = 43463, data_definition_ga_tracking_id = 62497, local_params = {}, hotelAdsAccountId = utils.adlExtractor('monikerbrand') === 'vrbo' ? 'HA-1173782784' : 'HA-1995858853', hotelAdsAccountId2 = 'HA-1850600648', adWordsAccountId = 'AW-956451546', adWordsAccountId2 = 'AW-838446621', adWordsAccountId3 = 'AW-619800534', adWordsDataLayer = 'adwordsDataLayer', doubleClickAccountId = 'DC-' + bs.data.resolve(data_definition_dc_activity_id), gaTrackingId = bs.data.resolve(data_definition_ga_tracking_id), url = '//www.googletagmanager.com/gtag/js?id=' + adWordsAccountId + '&l=' + adWordsDataLayer, domains = [
                            'abritel.fr',
                            'aluguetemporada.com.br',
                            'homeaway.es',
                            'fewo-direkt.de',
                            'homeaway.ca',
                            'homeaway.at',
                            'homeaway.ca',
                            'homeaway.co.nz',
                            'homeaway.co.uk',
                            'homeaway.com',
                            'homeaway.com.ar',
                            'homeaway.com.au',
                            'homeaway.com.mx',
                            'homeaway.com.pe',
                            'homeaway.dk',
                            'homeaway.es',
                            'homeaway.fi',
                            'homeaway.gr',
                            'homeaway.it',
                            'homeaway.lk',
                            'homeaway.nl',
                            'homeaway.no',
                            'homeaway.pl',
                            'homeaway.pt',
                            'homeaway.se',
                            'homelidays.com',
                            'stayz.com.au',
                            'vacationrentals.com',
                            'vrbo.com'
                        ];
                    local_params.user_id = bs.data.resolve(data_definition_visitorid);
                    win[adWordsDataLayer] = win[adWordsDataLayer] || [];
                    function callbackFunc() {
                        win.gtag('config', adWordsAccountId);
                        win.gtag('config', adWordsAccountId2);
                        win.gtag('config', adWordsAccountId3);
                        win.gtag('config', doubleClickAccountId);
                        win.gtag('config', hotelAdsAccountId, { 'conversion_cookie_prefix': '_ha' });
                        win.gtag('config', hotelAdsAccountId2, { 'conversion_cookie_prefix': '_ha2' });
                        win.gtag('config', gaTrackingId);
                        win.gtag('event', 'conversion', local_params);
                    }
                    if (!win.gtag) {
                        win.gtag = win.gtag || function gtag() {
                            win[adWordsDataLayer].push(arguments);
                        };
                        win.gtag('set', 'linker', {
                            'domains': domains,
                            'decorate_forms': true
                        });
                        win.gtag('js', new Date());
                        bs.loadScriptCallback(url, callbackFunc);
                    } else
                        callbackFunc();
                }(window));
            });
        }, 3293935, 562379);
        Bootstrapper.bindDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (win) {
                var TAGGING_REQUEST_TIMEOUT = 2000, GLOBAL_EVENT_PREFIX = 'Global', ESSENTIAL_TAG_EVENT_SUFFIX = ' [essential]', utils = win.haEnsightenUtils, bs = win.Bootstrapper, monikerbrand = utils.adlExtractor('monikerbrand', ''), analyticsbrand = utils.adlExtractor('analyticsbrand', ''), referrer = utils.getDocumentReferrer(), brand;
                brand = analyticsbrand || monikerbrand;
                brand = brand.toUpperCase();
                if (!brand || brand === '-1') {
                    bs.reportException('edap event translator requires analyticsbrand or monikerbrand to be set in the ADL');
                    return;
                }
                win.edap = win.edap || [];
                function listenerComplete(done) {
                    setTimeout(function () {
                        done();
                    }, TAGGING_REQUEST_TIMEOUT);
                }
                function triggerAllEvents(eventNames) {
                    var i;
                    utils.runIfFunctionalCookiesAllowed(function () {
                        var j;
                        for (j = 0; j < eventNames.length; j++)
                            bs.ensEvent.trigger(eventNames[j]);
                    });
                    for (i = 0; i < eventNames.length; i++)
                        bs.ensEvent.trigger(eventNames[i] + ESSENTIAL_TAG_EVENT_SUFFIX);
                }
                win.edap.push(function (edap) {
                    edap.on('reservation.request.submit', function (data, setAsync, done) {
                        var eventStr = ': Booking Request Submit', anyStr = ' (Any)', eventNames, listingType, listingTypeStr, brandEventName, globalEventName;
                        setAsync();
                        utils.storeEventData('reservationid', data.reservationid);
                        utils.storeEventData('bidtarget', data.bidtarget);
                        utils.storeEventData('fullorderrentalrate', data.fullorderrentalrate);
                        utils.storeEventData('currency', data.currency);
                        utils.storeEventData('ordertotal', data.ordertotal);
                        utils.storeEventData('lengthofstay', data.lengthofstay);
                        utils.storeEventData('onlinepayments', data.onlinepayments);
                        utils.storeEventData('edapeventid', data.edapeventid);
                        listingType = utils.getListingType();
                        listingTypeStr = ' (' + listingType.toUpperCase() + ')';
                        brandEventName = brand + eventStr;
                        globalEventName = GLOBAL_EVENT_PREFIX + eventStr;
                        eventNames = [
                            brandEventName + anyStr,
                            brandEventName + listingTypeStr,
                            globalEventName + anyStr,
                            globalEventName + listingTypeStr
                        ];
                        triggerAllEvents(eventNames);
                        listenerComplete(done);
                    });
                    edap.on('inquiry.success', function (data, setAsync, done) {
                        var eventStr = ': Inquiry Success', eventNames;
                        setAsync();
                        eventNames = [
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ];
                        triggerAllEvents(eventNames);
                        listenerComplete(done);
                    });
                    edap.on('listing.onboarding.submit', function (data, setAsync, done) {
                        var newOrExisting, brandEventName, globalEventName;
                        setAsync();
                        if (data.newsupplier === 'true')
                            newOrExisting = 'New';
                        else if (data.newsupplier === 'false')
                            newOrExisting = 'Existing';
                        if (newOrExisting) {
                            utils.storeEventData('bidtarget', data.bidtarget);
                            utils.storeEventData('bidtargetuuid', data.bidtargetuuid);
                            utils.storeEventData('newsupplier', data.newsupplier);
                            globalEventName = [
                                GLOBAL_EVENT_PREFIX,
                                ': ',
                                newOrExisting,
                                ' Supplier Onboarding Completion'
                            ].join('');
                            brandEventName = globalEventName.replace(GLOBAL_EVENT_PREFIX, brand);
                            triggerAllEvents([
                                brandEventName,
                                globalEventName
                            ]);
                        }
                        listenerComplete(done);
                    });
                    edap.on('user.account.created', function (data, setAsync, done) {
                        var eventDataPropsToStash = [
                                'newusertype',
                                'stubaccount',
                                'marketingoptout',
                                'publicuuid'
                            ], eventNames = [], brandEventName, globalEventName, currentProp, stubOrFull, accountTypeStr, i;
                        setAsync();
                        for (i = 0; i < eventDataPropsToStash.length; i++) {
                            currentProp = eventDataPropsToStash[i];
                            utils.storeEventData(currentProp, data[currentProp]);
                        }
                        globalEventName = [
                            GLOBAL_EVENT_PREFIX,
                            ': ',
                            'Account Created'
                        ].join('');
                        brandEventName = globalEventName.replace(GLOBAL_EVENT_PREFIX, brand);
                        eventNames.push(brandEventName);
                        eventNames.push(globalEventName);
                        if (data.stubaccount === 'true')
                            stubOrFull = 'stub';
                        else
                            stubOrFull = 'full';
                        if (data.newusertype) {
                            accountTypeStr = ' (' + stubOrFull + ' ' + data.newusertype + ')';
                            eventNames.push(brandEventName + accountTypeStr);
                            eventNames.push(globalEventName + accountTypeStr);
                        }
                        triggerAllEvents(eventNames);
                        listenerComplete(done);
                    });
                    edap.on('generic.modal', function (data, setAsync, done) {
                        var modalName, eventText;
                        setAsync();
                        if (data.modalaction === 'open') {
                            modalName = data.modalname;
                            if (modalName === 'booking') {
                                eventText = ': Booking Modal Opened';
                                triggerAllEvents([
                                    brand + eventText,
                                    GLOBAL_EVENT_PREFIX + eventText
                                ]);
                            } else if (modalName === 'inquiry') {
                                eventText = ': Inquiry Modal Opened';
                                triggerAllEvents([
                                    brand + eventText,
                                    GLOBAL_EVENT_PREFIX + eventText
                                ]);
                            }
                        }
                        listenerComplete(done);
                    });
                    edap.on('dated.search.submit', function (data, setAsync, done) {
                        var eventStr = ': Dated Search Submit';
                        setAsync();
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    edap.on('cart.newsubscription.submit', function (data, setAsync, done) {
                        var eventStr = ': Cart New Subscription Completion';
                        setAsync();
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    edap.on('cart.signup.submit', function (data, setAsync, done) {
                        var eventStr = ': Cart Signup Completion';
                        setAsync();
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    edap.on('hearting.heart', function (data, setAsync, done) {
                        var eventStr = ': Listing Favorite';
                        setAsync();
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    edap.on('owner.registration.submit', function (data, setAsync, done) {
                        var eventStr = ': Owner Registration';
                        setAsync();
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    edap.on('payment.submit', function (data, setAsync, done) {
                        var eventStr = ': Payment Completion';
                        setAsync();
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    edap.on('pageview', function (data, setAsync, done) {
                        var pagetype = data.pagetype || '';
                        var pagename = data.pagename || '';
                        var eventNames = [];
                        utils.storeEventData('edapeventid', data.edapeventid);
                        eventNames.push(brand + ': Pageview');
                        eventNames.push(GLOBAL_EVENT_PREFIX + ': Pageview');
                        if (pagetype && pagetype !== 'property' && pagetype !== 'search' && pagetype !== 'checkout')
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Pageview NOT Search-Property-Checkout');
                        if (utils.getEdapScopeData('isNewSession')) {
                            eventNames.push(brand + ': New Session');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': New Session');
                        }
                        if (win.edap.getScopeData('ua').isNewUser) {
                            eventNames.push(brand + ': New UA Visitor');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': New UA Visitor');
                        }
                        if (pagetype === 'home' || pagetype === 'marketing' || pagetype === 'travel-ideas' || pagetype === 'lyp' || pagetype === 'ownerdash') {
                            eventNames.push(brand + ': Criteo Homepage Tag');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Criteo Homepage Tag');
                        }
                        if (pagetype !== 'search' && pagetype !== 'property' && pagetype !== 'booking' && pagetype !== 'cart') {
                            eventNames.push(brand + ': Non Shopping Flow');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Non Shopping Flow');
                        }
                        if (pagetype === 'ppb' && pagename === 'ha: ppb signup: account info') {
                            eventNames.push(brand + ': PPB: Flow Start');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': PPB: Flow Start');
                        }
                        if (pagetype === 'cart' && pagename === 'ha: list your property: confirm') {
                            eventNames.push(brand + ': Signup Cart: Confirm');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Signup Cart: Confirm');
                        }
                        if (pagetype === 'cart' && pagename === 'ha: list your property: search position') {
                            eventNames.push(brand + ': Signup Cart: Tier');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Signup Cart: Tier');
                        }
                        if ((pagetype === 'inquiry confirmation' || pagetype === 'inquiry') && pagename === 'inquiry confirmation') {
                            eventNames.push(brand + ': Inquiry Confirmation');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Inquiry Confirmation');
                        }
                        if (pagetype === 'ppb' && pagename === 'ha: ppb signup: account info') {
                            eventNames.push(brand + ': PPB: Flow Start');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': PPB: Flow Start');
                        }
                        if (pagetype !== 'pmdash' && typeof referrer === 'string' && referrer.indexOf(utils.getLocationOrigin()) !== 0) {
                            eventNames.push(brand + ': Not Self-Referral');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Not Self-Referral');
                        }
                        if (utils.getLocationProtocol() === 'https:') {
                            eventNames.push(brand + ': HTTPS');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': HTTPS');
                        }
                        if (utils.getLocationProtocol() === 'http:') {
                            eventNames.push(brand + ': HTTP');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': HTTP');
                        }
                        if (pagetype === 'marketing' && pagename.search(/traveler-service-fee/) !== -1)
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Traveler Service Fee/HA3.0 Microsite');
                        if (pagetype === 'marketing' && pagename === 'discoveryhub: discoveryhub')
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Eloqua: Discovery Hub');
                        if (pagetype !== 'home' && pagetype !== 'favorites' && pagetype !== 'search' && pagetype !== 'property' && pagetype !== 'Traveler' && pagetype !== 'dashboard' && pagetype.search(/interstitial/) === -1) {
                            eventNames.push(brand + ': Eloqua Condition');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Eloqua Condition');
                        }
                        if (pagetype === 'careers') {
                            eventNames.push(brand + ': Careers Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Careers Pageview');
                        }
                        if (pagetype === 'booking') {
                            eventNames.push(brand + ': Booking Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Traveler Checkout Pageview');
                        }
                        if (pagetype === 'cart') {
                            eventNames.push(brand + ': Cart Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Cart Pageview');
                        }
                        if (pagetype === 'error') {
                            eventNames.push(brand + ': Error Page Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Error Page Pageview');
                        }
                        if (pagetype === 'haolb') {
                            eventNames.push(brand + ': HAOLB Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': HAOLB Pageview');
                        }
                        if (pagetype.search(/help center/) !== -1) {
                            eventNames.push(brand + ': Help Center Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Help Center Pageview');
                        }
                        if (pagetype === 'home') {
                            eventNames.push(brand + ': Home Page Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Home Page Pageview');
                        }
                        if (pagetype === 'landing page') {
                            eventNames.push(brand + ': Landing Page Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Landing Page Pageview');
                        }
                        if (pagetype === 'lyp') {
                            eventNames.push(brand + ': LYP Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': LYP Pageview');
                        }
                        if (pagetype === 'marketing') {
                            eventNames.push(brand + ': Marketing Pages Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Marketing Pages Pageview');
                        }
                        if (pagetype === 'owner profile') {
                            eventNames.push(brand + ': Owner Profile Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Owner Profile Pageview');
                        }
                        if (pagetype === 'payment setup') {
                            eventNames.push(brand + ': Payment Setup Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Payment Setup Pageview');
                        }
                        if (pagetype === 'pmdash') {
                            eventNames.push(brand + ': PM Dash Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': PM Dash Pageview');
                        }
                        if (pagetype === 'ppb') {
                            eventNames.push(brand + ': PPB Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': PPB Pageview');
                        }
                        if (pagetype === 'property') {
                            eventNames.push(brand + ': Property Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Property Pageview');
                        }
                        if (pagetype === 'ownerdash') {
                            eventNames.push(brand + ': Ownerdash Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Ownerdash Pageview');
                        }
                        if (pagetype === 'reviews') {
                            eventNames.push(brand + ': Reviews Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Reviews Pageview');
                        }
                        if (pagetype === 'search') {
                            eventNames.push(brand + ': Search Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Search Pageview');
                        }
                        if (pagetype === 'search landing page') {
                            eventNames.push(brand + ': Search Landing Page Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Search Landing Page Pageview');
                        }
                        if (pagetype === 'travel-ideas') {
                            eventNames.push(brand + ': Travel Ideas Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Travel Ideas Pageview');
                        }
                        if (pagetype === 'travelerdash') {
                            eventNames.push(brand + ': Travelerdash Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Travelerdash Pageview');
                        }
                        if (pagetype === 'ums') {
                            eventNames.push(brand + ': UMS Pageview');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': UMS Pageview');
                        }
                        if (pagetype && pagetype !== 'booking') {
                            eventNames.push(brand + ': Pageview NOT Booking');
                            eventNames.push(GLOBAL_EVENT_PREFIX + ': Pageview NOT Booking');
                        }
                        setAsync();
                        triggerAllEvents(eventNames);
                        listenerComplete(done);
                    });
                    edap.on('email.form.submit', function (data, setAsync, done) {
                        var eventStr = ': Email Form Submit';
                        setAsync();
                        utils.storeEventData('formuuid', data.formuuid);
                        triggerAllEvents([
                            brand + eventStr,
                            GLOBAL_EVENT_PREFIX + eventStr
                        ]);
                        listenerComplete(done);
                    });
                    bs.bindPageSpecificCompletion(function () {
                        edap['public'].playback.replay();
                    });
                });
            }(window));
        }, 3506442, 431807);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function edapeventid() {
                        var win = window, utils = win.haEnsightenUtils;
                        return utils.getEventData('edapeventid', '');
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'page',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'edapeventid',
                    collection: 'eventdata',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '63171' });
            }, 63171);
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function dc_activity_id_gtag() {
                        var win = window, adl = win.analyticsdatalayer, activityId = 'DC-6519113';
                        if (adl.appenvironment === 'test' || adl.appenvironment === 'stage')
                            activityId = 'DC-6646514';
                        return activityId;
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'instance',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'dc-activity-id-gtag',
                    collection: 'DoubleClick',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '55426' });
            }, 55426);
        }, -1, -1);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function displaylocale_country() {
                        var win = window, utils = win.haEnsightenUtils, displayLocale = utils.adlExtractor('displaylocale'), localeParts = displayLocale.split('_');
                        if (displayLocale && localeParts.length === 2)
                            return localeParts[1];
                        return '';
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'instance',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'displaylocale-country',
                    collection: 'computed',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '59946' });
            }, 59946);
        }, -1, -1);
        Bootstrapper.bindDOMParsed(function () {
            Bootstrapper.ensEvent.add(['Global: Pageview'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                (function (win) {
                    var utils = win.haEnsightenUtils, bs = win.Bootstrapper, locale = 'en_US', data_definition_facebook_pixel_id = 62359, pixelId = bs.data.resolve(data_definition_facebook_pixel_id), matching = {};
                    matching.external_id = utils.getVisitorId();
                    (function (n) {
                        if (window.fbq)
                            return;
                        n = window.fbq = function () {
                            if (n.callMethod)
                                n.callMethod.apply(n, arguments);
                            else
                                n.queue.push(arguments);
                        };
                        if (!window._fbq)
                            window._fbq = n;
                        n.push = n;
                        n.loaded = !0;
                        n.version = '2.0';
                        n.queue = [];
                        bs.insertScript('https://connect.facebook.net/' + locale + '/fbevents.js');
                    }());
                    window.fbq.agent = 'tmensighten';
                    fbq('set', 'autoConfig', false, pixelId);
                    window.fbq('init', pixelId, matching);
                    window.fbq('track', 'PageView');
                }(window));
            });
        }, 3383494, 635956);
        Bootstrapper.bindDOMParsed(function () {
            Bootstrapper.ensEvent.add(['Global: Pageview'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                (function (win) {
                    var bs = win.Bootstrapper, utils = win.haEnsightenUtils, pixelId = bs.data.resolve(62359), monikerBrand = bs.data.resolve(13919), edapEventId = bs.data.resolve(63171), pageType = bs.data.resolve(13642), eventType = 'PageView', visitorIdSha256Promise = utils.visitorIdSha256(), reqUrl;
                    if (visitorIdSha256Promise)
                        visitorIdSha256Promise.then(function (sha256VisitorId) {
                            reqUrl = 'https://www.facebook.com/tr?id=' + pixelId + '&ev=' + eventType + '&noscript=1' + '&eid=' + edapEventId + '&ud[external_id]=' + sha256VisitorId + '&cd[monikerbrand]=' + monikerBrand + '&cd[pagetype]=' + pageType;
                            bs.imageRequest(reqUrl);
                        });
                }(window));
            });
        }, 3383496, 662442);
    }())
}