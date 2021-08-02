{
    const $___mock_691c17398c442bbb = {};
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
    })($___mock_691c17398c442bbb);
    const $___mock_a3d4795b1227e751 = {};
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
    })($___mock_a3d4795b1227e751);
    (function () {
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', 'div.internal.horizontal a.linkbox.appointmentbanner', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'appointment',
                    'leaderboard-promo',
                    'appointments-promo-banner'
                ]);
            }, true);
            if (location.pathname.toLowerCase().match(/\/diseases-conditions\/.*\/basics/) || location.pathname.toLowerCase().match(/\/tests-procedures\/.*\/basics/))
                Bootstrapper.on('click', 'div.auto a.linkbox.treatment-at-mayo-link-tile', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'appointment',
                        'appointments-tile',
                        'appointments-care-basics-tab'
                    ]);
                }, true);
            if (location.pathname.toLowerCase().match(/\/diseases-conditions\/.*\/care-at-mayo-clinic/) || location.pathname.toLowerCase().match(/\/tests-procedures\/.*\/care-at-mayo-clinic/))
                Bootstrapper.on('click', 'div.auto a.linkbox.appointment', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'appointment',
                        'appointments-tile',
                        'appointments-care-at-mayo-clinic-tab'
                    ]);
                }, true);
        }, 1724140, [3447009], 231928, [265954]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];
            Bootstrapper.insertScript('//www.googletagservices.com/tag/js/gpt.js');
            window.slots = [];
            googletag.cmd.push(function () {
                var ifElExists = document.getElementById('gpt-ad-mayoclinic.org-top');
                if (ifElExists) {
                    window.adSlot = googletag.defineSlot('129348672/mayoclinic.org_top', [
                        [
                            300,
                            600
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            300,
                            250
                        ]
                    ], 'gpt-ad-mayoclinic.org-top').addService(googletag.pubads()).setCollapseEmptyDiv(true, true);
                    slots.push(adSlot);
                    adSlot.setTargeting('itemId', [function () {
                            return adTargeting.itemId;
                        }()]);
                    adSlot.setTargeting('pocId', [function () {
                            return adTargeting.pocId;
                        }()]);
                    adSlot.setTargeting('contentType', [function () {
                            return adTargeting.contentType;
                        }()]);
                    adSlot.setTargeting('keyWord', [function () {
                            return adTargeting.keyWord;
                        }()]);
                    adSlot.setTargeting('section', [function () {
                            return adTargeting.section;
                        }()]);
                    adSlot.setTargeting('sseSubjectId', [function () {
                            return adTargeting.sseSubjectId;
                        }()]);
                    adSlot.setTargeting('tab', [function () {
                            return adTargeting.tab;
                        }()]);
                    adSlot.setTargeting('environment', [function () {
                            return adTargeting.environment;
                        }()]);
                    adSlot.setTargeting('language', [function () {
                            return adTargeting.language;
                        }()]);
                    adSlot.setTargeting('noThirdPartyAds', [function () {
                            return adTargeting.noThirdPartyAds;
                        }()]);
                }
            });
            googletag.cmd.push(function () {
                var ifElExists = document.getElementById('gpt-ad-mayoclinic.org-bottom');
                if (ifElExists) {
                    window.adSlot = googletag.defineSlot('129348672/mayoclinic.org_bottom', [
                        [
                            300,
                            250
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            300,
                            600
                        ]
                    ], 'gpt-ad-mayoclinic.org-bottom').addService(googletag.pubads()).setCollapseEmptyDiv(true, true);
                    slots.push(adSlot);
                    adSlot.setTargeting('itemId', [function () {
                            return adTargeting.itemId;
                        }()]);
                    adSlot.setTargeting('pocId', [function () {
                            return adTargeting.pocId;
                        }()]);
                    adSlot.setTargeting('contentType', [function () {
                            return adTargeting.contentType;
                        }()]);
                    adSlot.setTargeting('keyWord', [function () {
                            return adTargeting.keyWord;
                        }()]);
                    adSlot.setTargeting('section', [function () {
                            return adTargeting.section;
                        }()]);
                    adSlot.setTargeting('sseSubjectId', [function () {
                            return adTargeting.sseSubjectId;
                        }()]);
                    adSlot.setTargeting('tab', [function () {
                            return adTargeting.tab;
                        }()]);
                    adSlot.setTargeting('environment', [function () {
                            return adTargeting.environment;
                        }()]);
                    adSlot.setTargeting('language', [function () {
                            return adTargeting.language;
                        }()]);
                    adSlot.setTargeting('noThirdPartyAds', [function () {
                            return adTargeting.noThirdPartyAds;
                        }()]);
                }
            });
            googletag.cmd.push(function () {
                googletag.pubads().collapseEmptyDivs();
            });
            googletag.cmd.push(function () {
                googletag.pubads().setTagForChildDirectedTreatment(0);
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
            });
            googletag.cmd.push(function () {
                var DivOnPageElementD = document.getElementById('gpt-ad-mayoclinic.org-top');
                if (DivOnPageElementD)
                    googletag.display('gpt-ad-mayoclinic.org-top');
            });
            googletag.cmd.push(function () {
                var DivOnPageElementD = document.getElementById('gpt-ad-mayoclinic.org-bottom');
                if (DivOnPageElementD)
                    googletag.display('gpt-ad-mayoclinic.org-bottom');
            });
        }, 3006866, 606916);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window._comscore = window._comscore || [];
            window._comscore.push({
                c1: '2',
                c2: '6035818'
            });
            (function () {
                const $___old_f25d2781362b294c = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_f25d2781362b294c)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                    return function () {
                        var s = document.createElement('script'), el = document.getElementsByTagName('script')[0];
                        s.async = true;
                        s.src = (document.location.protocol == 'https:' ? 'https://sb' : 'http://b') + '.scorecardresearch.com/beacon.js';
                        el.parentNode.insertBefore(s, el);
                    }.apply(this, arguments);
                } finally {
                    if ($___old_f25d2781362b294c)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_f25d2781362b294c));
                }
            }());
        }, 626419, 281024);
        Bootstrapper.bindDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function addjQueryListeners() {
                const $___old_6fb11f45ecd576db = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_6fb11f45ecd576db)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                    return function () {
                        jQuery(document).on('click', 'div.contentbox div.phone-button-group > p.phone-call > a.telephone', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'click-to-call',
                                'marketing landing pages',
                                'header static phone number'
                            ]);
                        });
                        jQuery(document).on('click', 'div.p-6 > div.contentbox > div > p > a.telephone', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'click-to-call',
                                'marketing landing pages',
                                'mid content phone number'
                            ]);
                        });
                        jQuery(document).on('mousedown', 'div.contentbox div.phone-button-group > a[href*=\'appointment\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'appointment',
                                'marketing landing pages',
                                'header static button'
                            ]);
                        });
                        jQuery(document).on('mousedown', 'div.p-6 > div.contentbox > div > a[href*=\'appointment\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'appointment',
                                'marketing landing pages',
                                'mid content button'
                            ]);
                        });
                        jQuery(document).on('mousedown', 'ul.links-list > li > a[href*=appointment]', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'appointment',
                                'marketing landing pages',
                                'mid text link'
                            ]);
                        });
                        jQuery(document).on('mousedown', 'ul.footer-links > li > a[href*=appointment]', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'appointment',
                                'marketing landing pages',
                                'footer text link'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > main > section.add-background > div.mm-container > ul.mm-iconlink-items > li > a[href*=\'/diseases-conditions/breast-cancer/diagnosis-treatment/drc-20352475\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'supporting content links',
                                'treating breast cancer'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > main > section.add-background > div.mm-container > ul.mm-iconlink-items > li > a[href*=\'/diseases-conditions/breast-cancer/care-at-mayo-clinic/mac-20352479\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'supporting content links',
                                'what to expect'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > main > section.add-background > div.mm-container > ul.mm-iconlink-items > li > a[href*=\'/diseases-conditions/breast-cancer/doctors-departments/ddc-20352478\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'supporting content links',
                                'doctors'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > main > section.add-background > div.mm-container > ul.mm-iconlink-items > li > a[href*=\'/research/clinical-trials\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'supporting content links',
                                'clinical trials'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > main > section.add-background > div.mm-container > ul.mm-iconlink-items > li > a[href*=\'/group/breast-cancer/\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'supporting content links',
                                'breast cancer online community'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > main > section.add-background > div.mm-container > ul.mm-iconlink-items > li > a[href*=\'/patient-visitor-guide/billing-insurance\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'supporting content links',
                                'costs & insurance'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-links-items > li > a[href=\'https://www.mayoclinic.org\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'mayo clinic'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-links-items > li > a[href*=\'/patient-care-and-health-information\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'patient care information'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-links-items > li > a[href*=\'/research/clinical-trials\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'research & clinical trials'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-links-items > li > a[href=\'https://newsnetwork.mayoclinic.org\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'mayo clinic news network'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-social-items > li > a[href*=\'pinterest\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'pinterest'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-social-items > li > a[href*=\'facebook\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'facebook'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-social-items > li > a[href*=\'twitter\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'twitter'
                            ]);
                        });
                        jQuery(document).on('mousedown', '#form1 > footer.mm-centered > ul.mm-social-items > li > a[href*=\'youtube\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'marketing landing pages',
                                'footer links',
                                'youtube'
                            ]);
                        });
                    }.apply(this, arguments);
                } finally {
                    if ($___old_6fb11f45ecd576db)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_6fb11f45ecd576db));
                }
            }
            function checkjQueryReady() {
                if (window.jQuery && typeof window.jQuery === 'function')
                    addjQueryListeners();
                else
                    setTimeout(checkjQueryReady, 50);
            }
            checkjQueryReady();
        }, 3164537, 594587);
        Bootstrapper.bindDependencyDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (window.location.pathname.match(/^\/medical-professionals\/?$/i)) {
                $('body').on('click', '#main-content div.contentbox > div.contentbutton > a', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'medical professional',
                        'referral ',
                        'referrals button mp landing page'
                    ]);
                });
                $('body').on('click', '#main-content div.contentbox > p > a:contains(\'referral form\')', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'medical professional',
                        'referral ',
                        'download form mp landing page'
                    ]);
                });
                $('body').on('click', '#main-content div.contentbox > p > a:contains(\'a patient\')', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'medical professional',
                        'referral ',
                        'refer a patient mp landing page'
                    ]);
                });
            }
            if (window.location.pathname.match(/^\/medical-professionals\/provider-relations/i))
                (function ($) {
                    var _debugMode = window._analyticsDebugMode || false;
                    var subPath = window.location.pathname.replace(/^\/medical-professionals\/provider-relations\/?/i, '').toLowerCase();
                    var labels = [];
                    switch (subPath) {
                    case 'overview':
                        labels = [
                            'Referrals Button PR Overview page',
                            'Download Form PR Overview page',
                            'Refer A Patient PR Overview page'
                        ];
                        break;
                    case 'services':
                        labels = [
                            'Referrals Button PR Service page',
                            'Download Form PR Service page'
                        ];
                        break;
                    case 'refer-a-patient':
                        labels = [
                            'Referrals Button PR Refer page',
                            'Download Form PR Refer page'
                        ];
                        break;
                    }
                    if (labels.length > 0) {
                        labels = $.map(labels, function (n, i) {
                            return n.toLowerCase();
                        });
                        var buttonSelector = '#secondary div.contentbox > div.contentbutton > a';
                        var formSelector = '#secondary div.contentbox > p > a:contains(\'referral form\')';
                        var textSelector = labels.length === 3 ? '#secondary div.contentbox > p > a:contains(\'a patient\')' : '';
                        if (_debugMode) {
                            $('body').on('click', buttonSelector, function () {
                                console.log(labels[0]);
                            });
                            $('body').on('click', formSelector, function () {
                                console.log(labels[1]);
                            });
                            if (!!textSelector)
                                $('body').on('click', textSelector, function () {
                                    console.log(labels[2]);
                                });
                            return;
                        }
                        $('body').on('click', buttonSelector, function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'medical professional',
                                'referral ',
                                labels[0]
                            ]);
                        });
                        $('body').on('click', formSelector, function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'medical professional',
                                'referral ',
                                labels[1]
                            ]);
                        });
                        if (!!textSelector)
                            $('body').on('click', textSelector, function () {
                                Bootstrapper._GAMT.__TrackIt([
                                    'send',
                                    'event',
                                    'medical professional',
                                    'referral ',
                                    labels[2]
                                ]);
                            });
                    }
                }(jQuery));
            if (window.location.pathname.match(/^\/medical-professionals\/clinical-updates/i))
                (function ($) {
                    var _debugMode = window._analyticsDebugMode || false;
                    var subPath = window.location.pathname.replace(/^\/medical-professionals\/clinical-updates\/?/i, '').toLowerCase();
                    var labels = [];
                    switch (subPath) {
                    case '':
                        labels = [
                            'Referrals Button CU page',
                            'Refer Patient Link CU page'
                        ];
                        break;
                    case 'general-medical':
                        labels = [
                            'Referrals Button CU General Med page',
                            'Refer Patient Link CU General Med page'
                        ];
                        break;
                    case 'cancer':
                        labels = [
                            'Referrals Button CU Cancer page',
                            'Refer Patient Link CU Cancer page'
                        ];
                        break;
                    case 'cardiovascular':
                        labels = [
                            'Referrals Button CU Cardio page',
                            'Refer Patient Link CU Cardio page'
                        ];
                        break;
                    case 'digestive-diseases':
                        labels = [
                            'Referrals Button CU DigestiveD page',
                            'Refer Patient Link CU DigestiveD page'
                        ];
                        break;
                    case 'endocrinology':
                        labels = [
                            'Referrals Button CU Endo page',
                            'Refer Patient Link CU Endo page'
                        ];
                        break;
                    case 'neurosciences':
                        labels = [
                            'Referrals Button CU Neuro page',
                            'Refer Patient Link CU Neuro page'
                        ];
                        break;
                    case 'ophthalmology':
                        labels = [
                            'Referrals Button CU Optha page',
                            'Refer Patient Link CU Optha page'
                        ];
                        break;
                    case 'orthopedic-surgery':
                        labels = [
                            'Referrals Button CU Ortho page',
                            'Refer Patient Link CU Ortho page'
                        ];
                        break;
                    case 'physical-medicine-rehabilitation':
                        labels = [
                            'Referrals Button CU PMR page',
                            'Refer Patient Link CU PMR page'
                        ];
                        break;
                    case 'psychiatry-psychology':
                        labels = [
                            'Referrals Button CU PP page',
                            'Refer Patient LinkCU PP page'
                        ];
                        break;
                    case 'trauma':
                        labels = [
                            'Referrals Button CU Trauma page',
                            'Refer Patient Link CU Trauma page'
                        ];
                        break;
                    }
                    if (labels.length > 0) {
                        labels = $.map(labels, function (n, i) {
                            return n.toLowerCase();
                        });
                        var buttonSelector = '#secondary div.contentbox > div.contentbutton > a';
                        var textSelector = '#secondary div.contentbox > p > a:contains(\'a patient\')';
                        if (_debugMode) {
                            $('body').on('click', buttonSelector, function () {
                                console.log(labels[0]);
                            });
                            $('body').on('click', textSelector, function () {
                                console.log(labels[1]);
                            });
                            return;
                        }
                        $('body').on('click', buttonSelector, function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'medical professional',
                                'referral ',
                                labels[0]
                            ]);
                        });
                        $('body').on('click', textSelector, function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'medical professional',
                                'referral ',
                                labels[1]
                            ]);
                        });
                    }
                }(jQuery));
        }, 800265, [3447009], 308052, [265954]);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window._dl = window._dl || {};
            window._dl.optimization = [];
            Bootstrapper.dataManager.push({
                'name': 'Data Layer',
                'id': 'digitalData',
                'data': {
                    'appointmentSubmissionID': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['appointmentSubmissionID'] || {} : {};
                        }
                    },
                    'doctor': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['doctor'] || {} : {};
                        }
                    },
                    'filter': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['filter'] || {} : {};
                        }
                    },
                    'search_keyword': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['search_keyword'] || {} : {};
                        }
                    },
                    'search_result_count': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['search_result_count'] || {} : {};
                        }
                    },
                    'search_type': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['search_type'] || {} : {};
                        }
                    },
                    'version': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['version'] || {} : {};
                        }
                    },
                    'visitorID': {
                        name: '',
                        'get': function () {
                            return typeof window._dl === 'object' ? window._dl['visitorID'] || {} : {};
                        }
                    }
                }
            });
        }, 2734981, [1478680], 410485, [200932]);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (window.jQuery)
                if ($('#main-content > div.by > h2').text() == 'Page Not Found')
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'page not found',
                        '404 page',
                        location.href
                    ]);
        }, 1976792, [3447009], 282000, [265954]);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', '#et_HeaderLinkQuick_91358B17', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'give-now-link',
                    'give-now-upper-unav'
                ]);
            }, true);
        }, 1731748, [3447009], 309683, [265954]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function intToString(intValue) {
                return String(intValue);
            }
            function stringToInt(strValue) {
                return parseInt(strValue, 10) || 0;
            }
            function isSameSiteNoneCompatible(userAgent) {
                return !isSameSiteNoneIncompatible(String(userAgent));
            }
            function isSameSiteNoneIncompatible(userAgent) {
                return hasWebKitSameSiteBug(userAgent) || dropsUnrecognizedSameSiteCookies(userAgent);
            }
            function hasWebKitSameSiteBug(userAgent) {
                return isIosVersion(12, userAgent) || isMacosxVersion(10, 14, userAgent) && (isSafari(userAgent) || isMacEmbeddedBrowser(userAgent));
            }
            function dropsUnrecognizedSameSiteCookies(userAgent) {
                return isChromiumBased(userAgent) && isChromiumVersionAtLeast(51, userAgent) && !isChromiumVersionAtLeast(67, userAgent) || isUcBrowser(userAgent) && !isUcBrowserVersionAtLeast(12, 13, 2, userAgent);
            }
            function regexContains(stringValue, regex) {
                var matches = stringValue.match(regex);
                return matches !== null;
            }
            function extractRegexMatch(stringValue, regex, offsetIndex) {
                var matches = stringValue.match(regex);
                if (matches !== null && matches[offsetIndex] !== undefined)
                    return matches[offsetIndex];
                return null;
            }
            function isIosVersion(major, userAgent) {
                var regex = /\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//;
                return extractRegexMatch(userAgent, regex, 1) === intToString(major);
            }
            function isMacosxVersion(major, minor, userAgent) {
                var regex = /\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//;
                return extractRegexMatch(userAgent, regex, 1) === intToString(major) && extractRegexMatch(userAgent, regex, 2) === intToString(minor);
            }
            function isSafari(userAgent) {
                var safari_regex = /Version\/.* Safari\//;
                return userAgent.match(safari_regex) !== null && !isChromiumBased(userAgent);
            }
            function isMacEmbeddedBrowser(userAgent) {
                var regex = /^Mozilla\/[\.\d]+ \(Macintosh;.*Mac OS X [_\d]+\) AppleWebKit\/[\.\d]+ \(KHTML, like Gecko\)$/;
                return regexContains(userAgent, regex);
            }
            function isChromiumBased(userAgent) {
                var regex = /Chrom(e|ium)/;
                return regexContains(userAgent, regex);
            }
            function isChromiumVersionAtLeast(major, userAgent) {
                var regex = /Chrom[^ \/]+\/(\d+)[\.\d]* /;
                var version = stringToInt(extractRegexMatch(userAgent, regex, 1));
                return version >= major;
            }
            function isUcBrowser(userAgent) {
                var regex = /UCBrowser\//;
                return regexContains(userAgent, regex);
            }
            function isUcBrowserVersionAtLeast(major, minor, build, userAgent) {
                var regex = /UCBrowser\/(\d+)\.(\d+)\.(\d+)[\.\d]* /;
                var major_version = stringToInt(extractRegexMatch(userAgent, regex, 1));
                var minor_version = stringToInt(extractRegexMatch(userAgent, regex, 2));
                var build_version = stringToInt(extractRegexMatch(userAgent, regex, 3));
                if (major_version !== major)
                    return major_version > major;
                if (minor_version != minor)
                    return minor_version > minor;
                return build_version >= build;
            }
            var sameSiteCompatible = isSameSiteNoneCompatible(navigator.userAgent);
            Bootstrapper.Cookies = function () {
                return {
                    domain: '' || location.hostname,
                    get: function (a, c) {
                        for (var b = document.cookie.split(';'), d = 0; d < b.length; d++) {
                            var e = b[d].replace(/^\s+/, '').split('=');
                            if (e[0] == a)
                                return c ? e[1] : decodeURIComponent(e[1]);
                        }
                        return '';
                    },
                    set: function (a, c, b, f) {
                        var isSecure = /https:/.test(location.protocol), sameSite = sameSiteCompatible ? f ? f : isSecure ? 'None' : 'Lax' : '';
                        document.cookie = a + '=' + encodeURIComponent(c) + (b ? ';expires=' + b : '') + ';path=/;domain=' + this.domain + (isSecure ? ';Secure' : '') + (sameSite ? ';SameSite=' + sameSite : '');
                        this.get(a) === c;
                    },
                    test: function (a) {
                        return this.get(a) ? !0 : !1;
                    },
                    remove: function (a) {
                        document.cookie = a + '="";expires=' + new Date(0).toUTCString() + ';path=/;domain=' + this.domain;
                        return this.get(a) === '' ? true : false;
                    }
                };
            }();
            (function () {
                function s(e, t, n) {
                    const $___old_879a9d605d24a39a = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_879a9d605d24a39a)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                        return function () {
                            var r = t == 'blur' || t == 'focus';
                            e.element.addEventListener(t, n, r);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_879a9d605d24a39a)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_879a9d605d24a39a));
                    }
                }
                function o(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                function u(t) {
                    if (e)
                        return e;
                    if (t.matches)
                        e = t.matches;
                    if (t.webkitMatchesSelector)
                        e = t.webkitMatchesSelector;
                    if (t.mozMatchesSelector)
                        e = t.mozMatchesSelector;
                    if (t.msMatchesSelector)
                        e = t.msMatchesSelector;
                    if (t.oMatchesSelector)
                        e = t.oMatchesSelector;
                    if (!e)
                        e = p.matchesSelector;
                    return e;
                }
                function a(element, n, r) {
                    if (n == '_root')
                        return r;
                    if (element === r)
                        return;
                    try {
                        if (u(element).call(element, n))
                            return element;
                    } catch (error) {
                        e = null;
                        if (u(element).call(element, n))
                            return element;
                    }
                    if (element.parentNode) {
                        t++;
                        return a(element.parentNode, n, r);
                    }
                }
                function f(e, t, n, i) {
                    if (!r[e.id])
                        r[e.id] = {};
                    if (!r[e.id][t])
                        r[e.id][t] = {};
                    if (!r[e.id][t][n])
                        r[e.id][t][n] = [];
                    r[e.id][t][n].push(i);
                }
                function l(e, t, n, i) {
                    if (!i && !n) {
                        r[e.id][t] = {};
                        return;
                    }
                    if (!i) {
                        delete r[e.id][t][n];
                        return;
                    }
                    for (var s = 0; s < r[e.id][t][n].length; s++)
                        if (r[e.id][t][n][s] === i) {
                            r[e.id][t][n].pop(s, 1);
                            break;
                        }
                }
                function c(e, n, s) {
                    if (!r[e][s])
                        return;
                    var o = n.target || n.srcElement, u, f, l = {}, c = 0, h = 0;
                    t = 0;
                    for (u in r[e][s])
                        if (r[e][s].hasOwnProperty(u)) {
                            f = a(o, u, i[e].element);
                            if (f && p.matchesEvent(s, i[e].element, f, u == '_root', n)) {
                                t++;
                                r[e][s][u].match = f;
                                l[t] = r[e][s][u];
                            }
                        }
                    n.stopPropagation = function () {
                        n.cancelBubble = true;
                    };
                    for (c = 0; c <= t; c++)
                        if (l[c])
                            for (h = 0; h < l[c].length; h++) {
                                if (l[c][h].call(l[c].match, n) === false) {
                                    p.cancel(n);
                                    return;
                                }
                                if (n.cancelBubble)
                                    return;
                            }
                }
                function h(e, t, n, i) {
                    function u(e) {
                        return function (t) {
                            c(s, t, e);
                        };
                    }
                    if (!(e instanceof Array))
                        e = [e];
                    if (!n && typeof t == 'function') {
                        n = t;
                        t = '_root';
                    }
                    var s = this.id, o;
                    for (o = 0; o < e.length; o++) {
                        if (!r[s] || !r[s][e[o]])
                            p.addEvent(this, e[o], u(e[o]));
                        if (i) {
                            l(this, e[o], t, n);
                            continue;
                        }
                        f(this, e[o], t, n);
                    }
                    return this;
                }
                function p(e, t) {
                    if (typeof e == 'string' && typeof t == 'function' || typeof t == 'string')
                        p(document).on(arguments[0], arguments[1], arguments[2], arguments[3] || false);
                    if (!(this instanceof p)) {
                        for (var r in i)
                            if (i[r].element === e)
                                return i[r];
                        n++;
                        i[n] = new p(e, n);
                        i[n]._on = i[n].on;
                        i[n].on = function (e, t, n, r) {
                            var i = typeof t == 'function' ? t : n, s = typeof t == 'function' ? n || false : r || false;
                            if (!s)
                                return this._on.call(this, e, t, n);
                            else {
                                var o = [e];
                                if (typeof t == 'string')
                                    o.push(t);
                                o.push(function (e) {
                                    return function (t) {
                                        if (!t.defaultPrevented)
                                            Bootstrapper.Delegate.load(this, s);
                                        if (typeof t.preventDefault != 'undefined')
                                            t.preventDefault();
                                        else
                                            t.returnValue = false;
                                        e.call(this);
                                    };
                                }(i));
                                this._on.apply(this, o);
                            }
                        };
                        return i[n];
                    }
                    this.element = e;
                    this.id = t;
                }
                var e, t = 0, n = 0, r = {}, i = {};
                _delay = 750;
                p.prototype.on = function (e, t, n) {
                    return h.call(this, e, t, n);
                };
                p.prototype.off = function (e, t, n) {
                    return h.call(this, e, t, n, true);
                };
                p.matchesSelector = function () {
                };
                p.cancel = o;
                p.addEvent = s;
                p.matchesEvent = function () {
                    return true;
                };
                p.load = function (e, t) {
                    var n = typeof t == 'number' ? parseInt(t) : 750;
                    setTimeout(function (e, t) {
                        return function () {
                            if (e.nodeName && 'a' == e.nodeName.toLowerCase()) {
                                if (t && /^javascript\s*:/.test(t))
                                    return new Function(unescape(t)).call(window);
                                else if (e.target && /_blank|_new/i.test(e.target))
                                    return true;
                                if (t)
                                    window.location.href = t;
                            }
                        };
                    }(e, e.href || ''), n);
                };
                Bootstrapper.Delegate = p;
            }());
            (function (e) {
                var t = e.addEvent;
                e.addEvent = function (e, n, r) {
                    if (e.element.addEventListener)
                        return t(e, n, r);
                    if (n == 'focus')
                        n = 'focusin';
                    if (n == 'blur')
                        n = 'focusout';
                    e.element.attachEvent('on' + n, r);
                };
                e.simpleMatchesSelector = function (e) {
                    if (e.charAt(0) === '.')
                        return (' ' + this.className + ' ').indexOf(' ' + e.slice(1) + ' ') > -1;
                    if (e.charAt(0) === '#')
                        return this.id === e.slice(1);
                    return this.tagName.toUpperCase() === e.toUpperCase();
                };
                e.matchesSelector = function (t) {
                    if (!~t.indexOf(' ') && !~t.indexOf('>'))
                        return e.simpleMatchesSelector.call(this, t);
                    else {
                        var n = this, r = t.split(' ').reverse();
                        while (r.length) {
                            var i = r.shift();
                            if (~i.indexOf('>')) {
                                i = i.split('>').reverse();
                                while (i.length) {
                                    tempSel = i.shift();
                                    if (e.simpleMatchesSelector.call(n, tempSel))
                                        n = n.parentNode;
                                    else
                                        return false;
                                }
                                if (!r.length)
                                    return true;
                            } else
                                while (n != document) {
                                    var s = e.simpleMatchesSelector.call(n, i);
                                    if (n.parentNode)
                                        n = n.parentNode;
                                    n = n.parentnode ? n.parentnode : document;
                                    if (s) {
                                        if (!r.length)
                                            return true;
                                        break;
                                    }
                                }
                        }
                        return false;
                    }
                };
                e.cancel = function (e) {
                    if (e.preventDefault)
                        e.preventDefault();
                    if (e.stopPropagation)
                        e.stopPropagation();
                    e.returnValue = false;
                    e.cancelBubble = true;
                };
            }(Bootstrapper.Delegate));
            Bootstrapper.on = Bootstrapper.Delegate;
            window._dasoObj = {
                'utils': {
                    'storageFuncs': {
                        'strgOptns': {
                            'local': !1,
                            'session': !1,
                            'cookie': !0
                        },
                        'setStrgOptns': function () {
                            const $___old_25b99f1604740ed4 = {}.constructor.getOwnPropertyDescriptor(window, 'Storage'), $___old_d83a14ddf112bb12 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_e3da19260127853a = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                            try {
                                if ($___old_25b99f1604740ed4)
                                    ({}.constructor.defineProperty(window, 'Storage', $___mock_a3d4795b1227e751.Storage));
                                if ($___old_d83a14ddf112bb12)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_a3d4795b1227e751.localStorage));
                                if ($___old_e3da19260127853a)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_a3d4795b1227e751.sessionStorage));
                                return function () {
                                    if (typeof Storage !== 'undefined') {
                                        try {
                                            window.localStorage.setItem('utilTest', 'test');
                                            window.localStorage.removeItem('utilTest');
                                            this.strgOptns['local'] = !0;
                                        } catch (e) {
                                            this.strgOptns['local'] = !1;
                                        }
                                        try {
                                            window.sessionStorage.setItem('utilTest', 'test');
                                            window.sessionStorage.removeItem('utilTest');
                                            this.strgOptns['session'] = !0;
                                        } catch (e) {
                                            this.strgOptns['session'] = !1;
                                        }
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_25b99f1604740ed4)
                                    ({}.constructor.defineProperty(window, 'Storage', $___old_25b99f1604740ed4));
                                if ($___old_d83a14ddf112bb12)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_d83a14ddf112bb12));
                                if ($___old_e3da19260127853a)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___old_e3da19260127853a));
                            }
                        },
                        'setData': function (key, value, expiry, loc) {
                            var dataSet = !1, expDate = new Date(expiry).getTime();
                            if (loc == 'l' && this.strgOptns['local'] && (expiry && !isNaN(expDate))) {
                                window.localStorage.setItem(key, value + '~|~' + expDate);
                                dataSet = !0;
                            }
                            if (loc == 's' && this.strgOptns['session'] || loc == 'l' && this.strgOptns['local'] && !(expiry && !isNaN(expDate))) {
                                window.sessionStorage.setItem(key, value);
                                dataSet = !0;
                            }
                            if (loc == 'c' || !dataSet) {
                                var hostnameArr = document.location.hostname.split('.'), topLevelDomain = hostnameArr.slice(hostnameArr.length - 2).join('.'), expiration = expiry ? 'expires=' + expiry + ';' : '';
                                document.cookie = '' + key + '=' + value + '; path=/; domain=.' + topLevelDomain + ';' + expiration;
                            }
                        },
                        'getData': function (key, loc) {
                            var value = '';
                            if (loc == 'l' && this.strgOptns['local']) {
                                value = window.localStorage.getItem(key);
                                if (value) {
                                    var valArr = value.split('~|~');
                                    if (valArr.length > 1) {
                                        var expDate = new Date(valArr[1] * 1), currDate = new Date();
                                        if (expDate.getTime() > currDate.getTime())
                                            value = valArr[0];
                                        else {
                                            value = '';
                                            this.clearData(key, 'l');
                                        }
                                    }
                                }
                            }
                            if (loc == 's' && this.strgOptns['session'] || loc == 'l' && this.strgOptns['local'] && !value)
                                value = window.sessionStorage.getItem(key);
                            if (loc == 'c' || !value) {
                                var allCookies = document.cookie.split(';'), i;
                                for (i = 0; i < allCookies.length; i++) {
                                    var keyVal = allCookies[i].split('=');
                                    if (keyVal.length == 2)
                                        if (keyVal[0].indexOf(key) > -1) {
                                            value = keyVal[1];
                                            break;
                                        }
                                }
                            }
                            if (!value)
                                this.clearData(key);
                            return value;
                        },
                        'clearData': function (key, loc) {
                            var locArr = [], value, i;
                            if (loc)
                                if (typeof loc == 'object' && loc.length > -1)
                                    locArr = loc;
                                else if ((typeof loc).toLowerCase() == 'string')
                                    locArr.push(loc);
                            if (locArr.length)
                                for (i = 0; i < locArr.length; i++) {
                                    if (locArr[i] == 'l' && !this.strgOptns['local'] || locArr[i] == 's' && !this.strgOptns['session'] || (locArr[i] != 'l' || locArr[i] != 's' || locArr[i] != 'c')) {
                                        locArr.splice(i, 1);
                                        i--;
                                    }
                                }
                            else {
                                if (this.strgOptns['local'])
                                    locArr.push('l');
                                if (this.strgOptns['session'])
                                    locArr.push('s');
                                locArr.push('c');
                            }
                            for (i = 0; i < locArr.length; i++) {
                                if (locArr[i] == 'l') {
                                    value = window.localStorage.getItem(key);
                                    window.localStorage.removeItem(key);
                                }
                                if (locArr[i] == 's' || locArr[i] == 'l' && value == null) {
                                    value = window.sessionStorage.getItem(key);
                                    window.sessionStorage.removeItem(key);
                                }
                                if (locArr[i] == 'c' || locArr[i] == 'l' && value == null || locArr[i] == 's' && value == null)
                                    this.setData(key, '', new Date());
                            }
                        }
                    },
                    'init': function () {
                        this.storageFuncs.setStrgOptns();
                    }
                }
            };
            window._dasoObj.utils.init();
        }, 3175102, 422068);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (Bootstrapper && Bootstrapper.hasOwnProperty('ensightenOptions') && Bootstrapper.ensightenOptions.hasOwnProperty('publishPath') && Bootstrapper.ensightenOptions.publishPath.indexOf('dev') > -1)
                Bootstrapper._doConsole = true;
            window._dasoObj = {
                'utils': {
                    'storageFuncs': {
                        'options': {
                            'local': !1,
                            'session': !1,
                            'cookie': !0
                        },
                        'setOptions': function () {
                            const $___old_35030e0c35c06aa9 = {}.constructor.getOwnPropertyDescriptor(window, 'Storage'), $___old_2a4292450eb654c8 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_b6644d6519ad3c33 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                            try {
                                if ($___old_35030e0c35c06aa9)
                                    ({}.constructor.defineProperty(window, 'Storage', $___mock_a3d4795b1227e751.Storage));
                                if ($___old_2a4292450eb654c8)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_a3d4795b1227e751.localStorage));
                                if ($___old_b6644d6519ad3c33)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_a3d4795b1227e751.sessionStorage));
                                return function () {
                                    if (typeof Storage !== 'undefined') {
                                        try {
                                            window.localStorage.setItem('utilTest', 'test');
                                            window.localStorage.removeItem('utilTest');
                                            this.options['local'] = !0;
                                        } catch (e) {
                                            this.options['local'] = !1;
                                        }
                                        try {
                                            window.sessionStorage.setItem('utilTest', 'test');
                                            window.sessionStorage.removeItem('utilTest');
                                            this.options['session'] = !0;
                                        } catch (e) {
                                            this.options['session'] = !1;
                                        }
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_35030e0c35c06aa9)
                                    ({}.constructor.defineProperty(window, 'Storage', $___old_35030e0c35c06aa9));
                                if ($___old_2a4292450eb654c8)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_2a4292450eb654c8));
                                if ($___old_b6644d6519ad3c33)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___old_b6644d6519ad3c33));
                            }
                        },
                        'setData': function (key, value, expiry, loc) {
                            var dataSet = !1, expDate = new Date(expiry).getTime() + new Date().getTimezoneOffset() * 60 * 1000;
                            if (loc == 'l' && this.options['local'] && (expiry && !isNaN(expDate))) {
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.setData - local storage to be set:', key, value + '~|~' + expDate) : null;
                                window.localStorage.setItem(key, value + '~|~' + expDate);
                                dataSet = !0;
                            }
                            if (loc == 's' && this.options['session'] || loc == 'l' && this.options['local'] && !(expiry && !isNaN(expDate))) {
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.setData - session storage to be set:', key, value) : null;
                                window.sessionStorage.setItem(key, value);
                                dataSet = !0;
                            }
                            if (loc == 'c' || !dataSet) {
                                var hostnameArr = document.location.hostname.split('.'), topLevelDomain = hostnameArr.slice(hostnameArr.length - 2).join('.'), setCookie = '' + key + '=' + value + '; path=/; domain=.' + topLevelDomain + ';' + (expiry && !isNaN(expDate) ? 'expires=' + new Date(expDate) + ';' : '');
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.setData - cookie to be set:', setCookie) : null;
                                document.cookie = setCookie;
                            }
                        },
                        'getData': function (key, loc) {
                            var value = '';
                            if (loc == 'l' && this.options['local']) {
                                value = window.localStorage.getItem(key);
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - local storage retrieved:', key, value) : null;
                                if (value) {
                                    var valArr = value.split('~|~');
                                    if (valArr.length > 1) {
                                        var expDate = new Date(valArr[1] * 1), cookieDt = new Date();
                                        if (expDate.getTime() > cookieDt.getTime())
                                            value = valArr[0];
                                        else {
                                            value = '';
                                            this.clearData(key, 'l');
                                        }
                                    }
                                }
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - local storage retrieved - final:', key, value) : null;
                            }
                            if (loc == 's' && this.options['session'] || loc == 'l' && this.options['local'] && !value) {
                                value = window.sessionStorage.getItem(key);
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - session storage retrieved:', key, value) : null;
                            }
                            if (loc == 'c' || !value) {
                                var allCookies = document.cookie.split(';'), i;
                                for (i = 0; i < allCookies.length; i++) {
                                    var keyVal = allCookies[i].split('=');
                                    if (keyVal.length == 2)
                                        if (keyVal[0].indexOf(key) > -1) {
                                            value = keyVal[1];
                                            break;
                                        }
                                }
                                Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - cookie retrieved:', key, value) : null;
                            }
                            if (!value)
                                this.clearData(key);
                            return value;
                        },
                        'clearData': function (key, loc) {
                            var locArr = [], value, i;
                            if (loc)
                                if (typeof loc == 'object' && loc.length > -1)
                                    locArr = loc;
                                else if ((typeof loc).toLowerCase() == 'string')
                                    locArr.push(loc);
                            if (locArr.length)
                                for (i = 0; i < locArr.length; i++) {
                                    if (locArr[i] == 'l' && !this.options['local'] || locArr[i] == 's' && !this.options['session'] || locArr[i] != 'l' && locArr[i] != 's' && locArr[i] != 'c') {
                                        locArr.splice(i, 1);
                                        i--;
                                    }
                                }
                            else {
                                if (this.options['local'])
                                    locArr.push('l');
                                if (this.options['session'])
                                    locArr.push('s');
                                locArr.push('c');
                            }
                            for (i = 0; i < locArr.length; i++) {
                                if (locArr[i] == 'l') {
                                    value = window.localStorage.getItem(key);
                                    window.localStorage.removeItem(key);
                                    Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - local storage removed:', key) : null;
                                }
                                if (locArr[i] == 's' || locArr[i] == 'l' && value == null) {
                                    value = window.sessionStorage.getItem(key);
                                    window.sessionStorage.removeItem(key);
                                    Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - session storage removed:', key) : null;
                                }
                                if (locArr[i] == 'c' || locArr[i] == 'l' && value == null || locArr[i] == 's' && value == null) {
                                    var hostnameArr = document.location.hostname.split('.'), expDate = new Date(), remCookie = '';
                                    remCookie = '' + key + '=; path=/;expires=' + expDate + ';';
                                    Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.clearData - cookie to be removed:', remCookie) : null;
                                    document.cookie = remCookie;
                                    for (var j = 0; j < hostnameArr.length - 1; j++) {
                                        var currLevelDomain = hostnameArr.slice(hostnameArr.length - (j + 2)).join('.');
                                        remCookie = '' + key + '=; path=/; domain=' + currLevelDomain + ';expires=' + expDate + ';';
                                        Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.clearData - cookie to be removed:', remCookie) : null;
                                        document.cookie = remCookie;
                                        remCookie = '' + key + '=; path=/; domain=.' + currLevelDomain + ';expires=' + expDate + ';';
                                        Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.clearData - cookie to be removed:', remCookie) : null;
                                        document.cookie = remCookie;
                                    }
                                    Bootstrapper._doConsole ? console.log('window._dasoObj.utils.storageFuncs.getData - cookie removed:', key) : null;
                                }
                            }
                        }
                    },
                    'mktgCookie': {
                        'mktgDtls': {
                            cookieDt: new Date(),
                            landingStr: document.URL,
                            referrerStr: document.referrer
                        },
                        'setMktgDtls': function () {
                            var cookieDt = new Date(this.mktgDtls.cookieDt);
                            this.mktgDtls.expiryDt = new Date(cookieDt.setMonth(cookieDt.getMonth() + 12));
                            this.mktgDtls.referrerStr = this.mktgDtls.referrerStr ? this.mktgDtls.referrerStr : 'DIRECT: ' + this.mktgDtls.landingStr;
                            this.mktgDtls.mcidBl = this.mktgDtls.landingStr.indexOf('mc_id') > -1;
                            this.mktgDtls.killBl = this.mktgDtls.landingStr.indexOf('killcookie') > -1;
                        },
                        'run': function () {
                            this.setMktgDtls();
                            if (this.mktgDtls.mcidBl) {
                                _dasoObj.utils.storageFuncs.clearData('ClickDate', 'c');
                                _dasoObj.utils.storageFuncs.clearData('FullRef', 'c');
                                _dasoObj.utils.storageFuncs.clearData('LandingURL', 'c');
                                _dasoObj.utils.storageFuncs.setData('ClickDate', escape(this.mktgDtls.cookieDt), this.mktgDtls.expiryDt, 'c');
                                _dasoObj.utils.storageFuncs.setData('FullRef', escape(this.mktgDtls.referrerStr), this.mktgDtls.expiryDt, 'c');
                                _dasoObj.utils.storageFuncs.setData('LandingURL', escape(this.mktgDtls.landingStr), this.mktgDtls.expiryDt, 'c');
                            }
                            if (this.mktgDtls.killBl) {
                                _dasoObj.utils.storageFuncs.clearData('ClickDate', 'c');
                                _dasoObj.utils.storageFuncs.clearData('FullRef', 'c');
                                _dasoObj.utils.storageFuncs.clearData('LandingURL', 'c');
                            }
                        }
                    },
                    'init': function () {
                        this.storageFuncs.setOptions();
                        this.mktgCookie.run();
                    }
                }
            };
            window._dasoObj.utils.init();
        }, 3305357, 644738);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.dataManager = function () {
                var config = { allowMerge: true };
                var _private = {
                        data: {},
                        add: function (o) {
                            if (typeof o == 'object' && o.id) {
                                o.get = function (e) {
                                    return Bootstrapper.dataManager.getDataElement(this.id, e);
                                };
                                if (config.allowMerge && this.data[o.id] && typeof o.data === 'object')
                                    for (var key in o.data)
                                        this.data[o.id].data[key] = o.data[key];
                                else
                                    this.data[o.id] = o;
                            }
                        },
                        getObj: function (i) {
                            if (i)
                                return _private.data[i];
                            return _private.data;
                        },
                        getDataElement: function (i, e, f) {
                            var dataObj = this.data[i] ? this.data[i].data : false, retVal;
                            if (typeof dataObj == 'object') {
                                dataObj = dataObj[e];
                                if (typeof dataObj !== 'undefined' && typeof dataObj.get == 'string') {
                                    var d = eval(dataObj.get);
                                    if (typeof dataObj.mod == 'string' && dataObj.mod !== '') {
                                        var m = '(function(){ return ' + (dataObj.mod === '' ? 'this' : dataObj.mod) + ';})';
                                        retVal = eval(m).call(d);
                                    } else if (typeof dataObj.mod == 'function')
                                        retVal = dataObj.mod.call(d, d);
                                    else
                                        retVal = d;
                                } else if (typeof dataObj !== 'undefined' && typeof dataObj.get == 'function') {
                                    var d = dataObj.get.call(this.data[i], f);
                                    if (typeof dataObj.mod == 'string' && dataObj.mod !== '') {
                                        var m = '(function(){ return ' + (dataObj.mod === '' ? 'this' : dataObj.mod) + ';})';
                                        retVal = eval(m).call(d);
                                    } else if (typeof dataObj.mod == 'function')
                                        retVal = dataObj.mod.call(d, d);
                                    else
                                        retVal = d;
                                }
                                return retVal;
                            }
                        },
                        getDataLayer: function (i) {
                            var retObj = {};
                            var dataObj = this.data[i] ? this.data[i].data : false;
                            if (typeof dataObj === 'object')
                                for (key in dataObj)
                                    try {
                                        retObj[key] = this.getDataElement(i, key);
                                    } catch (e) {
                                        retObj[key] = null;
                                    }
                            return retObj;
                        },
                        getAllData: function () {
                            var data = this.data, retObj = { _d: {} };
                            for (var key in data) {
                                retObj._d[key] = {};
                                var d = this.getDataLayer(key);
                                for (var k in d) {
                                    retObj[k] = d[k];
                                    retObj._d[key][k] = d[k];
                                }
                            }
                            return retObj;
                        },
                        getData: function (i) {
                            if (i)
                                return this.getDataLayer(i);
                            else
                                return this.getAllData();
                        },
                        addDataElement: function (layerId, name, o) {
                            if (typeof this.data[layerId] == 'object' && typeof name == 'string' && typeof o == 'object') {
                                var d = this.data[layerId];
                                d.data[name] = o;
                            }
                        }
                    }, _public = {
                        push: function (dl) {
                            _private.add(dl);
                        },
                        getObj: function (i) {
                            return _private.getObj(i);
                        },
                        getData: function (i) {
                            return _private.getData(i);
                        },
                        getDataElement: function (i, e, f) {
                            return _private.getDataElement(i, e, f);
                        },
                        addDataElement: function (layerId, name, o) {
                            return _private.addDataElement(layerId, name, o);
                        }
                    };
                return _public;
            }();
            Bootstrapper.dataManager.map = function () {
                var _private = {
                        gD: {},
                        mD: function () {
                            var r = {}, e = window.document.getElementsByTagName('META') || [];
                            for (var m = 0, l = e.length; m < l; m++) {
                                var n = e[m].name || e[m].getAttribute('property') || '';
                                if (n.length !== 0)
                                    r[n] = e[m].content;
                            }
                            return r;
                        }(),
                        gP: function (p) {
                            return (s = new RegExp('&' + p + '=([^&]*)').exec(window.location.search.replace(/^\?/, '&'))) ? s[0].split('=')[1] : '';
                        },
                        gC: function (c) {
                            return (v = new RegExp('^' + c + '=.*|;\\s*' + c + '=.*').exec(window.document.cookie)) ? v[0].split('=')[1].split(';')[0] : '';
                        },
                        gT: function (g) {
                            try {
                                return this.mD[g] || this.gC(g) || this.gP(g) || window[g] || '';
                            } catch (e) {
                                return '';
                            }
                        },
                        dF: function (n, d) {
                            this.gD = {};
                            for (i in d) {
                                var val = typeof d[i] == 'string' ? this.gT(d[i]) : d[i]();
                                if (~window.location.href.indexOf('ensightenDebug'))
                                    console.log(i + ': ' + val);
                                this.gD[i] = {
                                    name: i,
                                    get: '(function(){return("' + val + '")})()'
                                };
                            }
                            Bootstrapper.dataManager.push({
                                name: n,
                                id: n,
                                data: this.gD
                            });
                        }
                    }, _public = {
                        define: function (n, d) {
                            _private.dF(n, d);
                        },
                        get: function (g) {
                            return _private.gT(g);
                        }
                    };
                return _public;
            }();
            window.$data = function (n, d, a) {
                try {
                    return Bootstrapper.dataManager.getDataElement(n, d, a);
                } catch (e) {
                    return '';
                }
            };
            window.$globals = function () {
                return Bootstrapper.dataManager.getData('global');
            };
            window.$getData = function (d) {
                return Bootstrapper.dataManager.map.get(d);
            };
            Bootstrapper.getElementByXPathStep = function (d, a) {
                var c = ~a.indexOf('#') ? a.split('#')[1] : '', e = c ? 0 : ~a.indexOf('[') ? a.match(/\[(-?\d+)\]/)[1] : 0, f = (c ? a.split('#')[0] : e ? a.split('[')[0] : a).toLowerCase();
                var rev = ~(e + '').indexOf('-') ? true : false, e = Math.abs(parseInt(e));
                if (d == document && f == 'html' && e == 0)
                    return document.getElementsByTagName('html')[0];
                if (~a.indexOf('#'))
                    return document.getElementById(a.split('#')[1]);
                var b = !rev ? d.firstChild : d.lastChild;
                if (!b)
                    return null;
                for (var g = 0, e = e != 0 ? e - 1 : e; b;) {
                    if (b.nodeType == 1)
                        if (b.tagName.toLowerCase() == f && c != '' && b.id == c)
                            return b;
                        else if (b.tagName.toLowerCase() == f && g == e && c == '')
                            return b;
                        else
                            b.tagName.toLowerCase() == f && g++;
                    b = !rev ? b.nextSibling : b.previousSibling;
                }
            };
            Bootstrapper.getElementByXPath = function (d, n) {
                for (var d = d.split('/'), a = Bootstrapper.getElementByXPathStep(n || document, d[1]), c = 2; c < d.length; c++) {
                    if (a == null)
                        return null;
                    a = Bootstrapper.getElementByXPathStep(a, d[c]);
                }
                return a;
            };
        }, 1478680, 200932);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', '#et-internalPromo-08A1FB0A.linkbox.no-border.img-top[href*=\'register.diet.mayoclinic.org\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'register',
                    'left-channel-promo',
                    'the-mayo-clinic-diet-program'
                ]);
            });
            Bootstrapper.on('click', '#et-internalPromo-08A1FB0A.linkbox.no-border.img-top[href*=\'register.mcd.everydayhealth.com\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'register',
                    'left-channel-promo',
                    'the-mayo-clinic-diet-program'
                ]);
            });
            Bootstrapper.on('click', '#productsServicesList ol li a[href*=\'register.diet.mayoclinic.org\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'register',
                    'products-and-services-link',
                    'the-mayo-clinic-diet-program'
                ]);
            });
            Bootstrapper.on('click', '#productsServicesList ol li a[href*=\'register.mcd.everydayhealth.com\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'register',
                    'products-and-services-link',
                    'the-mayo-clinic-diet-program'
                ]);
            });
            Bootstrapper.on('click', '#secondary div.mayoad div.contentbox.book ul li a[href*=\'register.diet.mayoclinic.org\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'register',
                    'bookstore-text-ad',
                    'the-mayo-clinic-diet-program'
                ]);
            });
            Bootstrapper.on('click', '#leftNavigation div.internal.side a.linkbox[href*=\'register.mcd.everydayhealth.com\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'register',
                    'bookstore-text-ad',
                    'the-mayo-clinic-diet-program'
                ]);
            });
        }, 2281984, [3447009], 249260, [265954]);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', '#mayoform > header > div > nav > div ul > li:nth-child(7) > a[href*=\'giving-to-mayo-clinic\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'give now nav link'
                ]);
            });
            Bootstrapper.on('click', '#mayoform > header > div > nav > div > ul > li:nth-child(7) > div > ul > li:nth-child(1) > a', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'giving to mayo link'
                ]);
            });
            Bootstrapper.on('click', '#et_globalNavigation_6DF36AE4', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'give now link'
                ]);
            });
            Bootstrapper.on('click', '#mayoform > header > div > nav > div > ul > li:nth-child(7) > div > div > a', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'give now right header link'
                ]);
            });
            Bootstrapper.on('click', '#mayoform > header > div > nav > div > ul > li:nth-child(7) > div > div > p > a', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'give now right link'
                ]);
            });
            Bootstrapper.on('click', '#et_globalNavigation_91358B17', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'give now lower nav'
                ]);
            });
            Bootstrapper.on('click', '#et_globalNavigation_6BBBDE1D', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'philanthropy in action'
                ]);
            });
            Bootstrapper.on('click', '#et_globalNavigation_08E100B9', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'faq link'
                ]);
            });
            Bootstrapper.on('click', '#et_globalNavigation_2FF5280F', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'hamburger menu',
                    'contact us link'
                ]);
            });
        }, 2755803, [3447009], 312492, [265954]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
                Bootstrapper.data.define({
                    extract: function () {
                        var value = '; ' + document.cookie;
                        var parts = value.split('; InfoButton=');
                        if (parts.length == 2)
                            return decodeURIComponent(parts.pop().split(';').shift());
                    },
                    transform: function (val) {
                        return val ? val : '';
                    },
                    load: 'session',
                    trigger: Bootstrapper.data.bottomOfBodyTrigger,
                    dataDefName: 'Info Button - Cookie',
                    collection: 'Session',
                    source: 'Manage',
                    priv: 'false'
                }, { id: '45293' });
            }, 45293);
        }, -1, -1);
        Bootstrapper.bindDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', 'div.contentbox.book > ul > li > a', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'house-ad',
                    this.href.toLowerCase().slice(0, this.href.indexOf('?')),
                    'right-sidebar'
                ]);
            }, true);
        }, 1724142, 329048);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function campaignAutomation() {
                if (window.jQuery) {
                    var loc = location.search.replace('?', ''), locArr = loc.split('&'), paramMap = {
                            mc_id: {
                                value: '',
                                index: 22
                            },
                            geo: {
                                value: '',
                                index: 23
                            },
                            placementsite: {
                                value: '',
                                index: 24
                            },
                            cauid: {
                                value: '',
                                index: 26
                            }
                        }, hasParam = false, paramArr = [];
                    $.each(locArr, function (ndx, val) {
                        var valArr = val.split('=');
                        if (valArr.length === 2)
                            if (paramMap.hasOwnProperty(valArr[0])) {
                                hasParam = true;
                                paramMap[valArr[0]].value = valArr[1];
                            }
                    });
                    if (hasParam) {
                        $.each(paramMap, function (key, obj) {
                            var passVal = obj.value ? obj.value : 'Not Present';
                            paramArr.push(passVal);
                            Bootstrapper._GAMT.__TrackIt([
                                'set',
                                'dimension' + obj.index,
                                passVal
                            ]);
                        });
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'Campaign Automation',
                            'Values Passed',
                            paramArr.join('|'),
                            { 'nonInteraction': 1 }
                        ]);
                    }
                }
            }());
        }, 2865741, [3447009], 307486, [265954]);
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.on('click', '#nav > li> a[href*=\'giving-to-mayo-clinic\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'giving global unav',
                    'giving to top link'
                ]);
            }, true);
            Bootstrapper.on('click', '#nav > li> a[href*=\'giving-to-mayo-clinic\'] + div > ul > li > a[href*=\'donateMC\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'giving global unav',
                    'give now upper link'
                ]);
            }, true);
            Bootstrapper.on('click', '#nav > li> a[href*=\'giving-to-mayo-clinic\'] + div > ul > li > a[href*=\'your-impact\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'giving global unav',
                    'your impact link'
                ]);
            }, true);
            Bootstrapper.on('click', '#nav > li> a[href*=\'giving-to-mayo-clinic\'] + div > ul > li > a[href*=\'frequently-asked-questions\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'giving global unav',
                    'faq link'
                ]);
            }, true);
            Bootstrapper.on('click', '#nav > li> a[href*=\'giving-to-mayo-clinic\'] + div > ul > li > a[href$=\'contact-us\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'giving global unav',
                    'contact us link'
                ]);
            }, true);
            Bootstrapper.on('click', '#nav > li> a[href*=\'giving-to-mayo-clinic\'] + div > blockquote > a[href*=\'donateMC\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'giving global unav',
                    'give now lower left link'
                ]);
            }, true);
            Bootstrapper.on('click', '#main-content > div.contentbox.you_are_here > ul > li > a[href*=\'general-donate\'], div.main > article > div.row > div.content > div.contentbox.you_are_here > ul > li > a[href*=\'general-donate\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'give-now-tile',
                    'give-now-tile-all-pages'
                ]);
            }, true);
            Bootstrapper.on('click', '#footer > ul > li > a[href*=\'donateMC\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'give-now-link',
                    'give now lower unav link'
                ]);
            }, true);
            Bootstrapper.on('click', 'footer > div.row > div > a[href*=\'donatemc\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'donate',
                    'lower tile',
                    'donation click'
                ]);
            }, true);
        }, 1724145, [3447009], 310688, [265954]);
    }())
}