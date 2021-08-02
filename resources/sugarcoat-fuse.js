{
    const $___mock_d7421596b9976de7 = {};
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
    })($___mock_d7421596b9976de7);
    (function () {
        !function (e) {
            'function' == typeof define && define.amd ? define(e) : e();
        }(function () {
            'use strict';
            var t = {
                tenantId: 'DGKSPXNV53',
                fuse_cdn: '//cdn.fuseplatform.net/publift/tags/',
                fuse_tenant: 'publift',
                fuse_uuid: '424d9950-0e6f-4db1-bca9-0a1a2dfe60f8',
                fuse_settings: {
                    adblock: !1,
                    lazy: !1,
                    responsive: !0,
                    headerbidding: 1000,
                    confiant: !1,
                    cmp: !0,
                    identity: { enabled: !1 },
                    prebid: {
                        enabled: !0,
                        breakpoint_options: {
                            xs: {
                                enabled: !0,
                                timeout: 1000
                            },
                            m: {
                                enabled: !0,
                                timeout: 1000
                            },
                            s: {
                                enabled: !0,
                                timeout: 1000
                            }
                        },
                        defaultTimeout: 1000,
                        sendAllBids: !1
                    },
                    amazonUam: { enabled: !1 },
                    quickstart: !1,
                    blockthrough: !0
                },
                fuse_breakpoints: {
                    m: 960,
                    s: 600,
                    xs: 0
                },
                fuse_blocked_url: [],
                fuse_id: 2013,
                fuse_slots: [
                    {
                        id: '21620331939',
                        slot: '5680070/CrateBody',
                        sizes: [
                            [
                                1,
                                1
                            ],
                            [
                                300,
                                250
                            ],
                            [
                                300,
                                255
                            ],
                            [
                                336,
                                280
                            ],
                            [
                                400,
                                300
                            ],
                            [
                                640,
                                480
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            s: [
                                [
                                    1,
                                    1
                                ],
                                [
                                    300,
                                    250
                                ],
                                [
                                    300,
                                    255
                                ],
                                'fluid',
                                [
                                    640,
                                    480
                                ],
                                [
                                    400,
                                    300
                                ]
                            ],
                            l: [],
                            xs: [
                                [
                                    1,
                                    1
                                ],
                                [
                                    300,
                                    250
                                ],
                                [
                                    300,
                                    255
                                ],
                                'fluid',
                                [
                                    336,
                                    280
                                ]
                            ],
                            xl: [],
                            m: []
                        },
                        attributes: {
                            adblock: !1,
                            lazy: !0,
                            refresh: !1,
                            headerbidding: !1
                        },
                        customLazy: {
                            m: !1,
                            s: !1,
                            l: !1,
                            xs: 400,
                            xl: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1x1',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '300x250',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '300x255',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        300,
                                        250
                                    ]
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1486321',
                                    size: '300x250',
                                    publisherSubId: '21620331939_1486321_300x250'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '1x1',
                                    placementId: 122376,
                                    pageId: 112580
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    size: '300x250',
                                    placementId: 133161
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '336x280',
                                    pageId: 122586,
                                    placementId: 133161
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '300x250',
                                    inventoryCode: 'Broadsheet_300x250'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '336x280',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'kargo',
                                params: {
                                    size: '300x250',
                                    placementId: '_cOPyxcsif2'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    inSlot: '64296',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '300x250',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@1x1'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@300x250'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@1x1'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@1x1'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@300x250'
                                },
                                labelAny: [
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@640x480'
                                },
                                labelAny: ['s']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@400x300'
                                },
                                labelAny: ['s']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/CrateBody@336x280'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286148' }
                            }
                        ]
                    },
                    {
                        id: '21753830274',
                        slot: '5680070/AppleNews',
                        sizes: [
                            [
                                1080,
                                1080
                            ],
                            [
                                1080,
                                1920
                            ],
                            [
                                111,
                                111
                            ],
                            [
                                1920,
                                1080
                            ],
                            [
                                375,
                                50
                            ],
                            [
                                375,
                                554
                            ],
                            [
                                768,
                                66
                            ],
                            [
                                768,
                                960
                            ]
                        ],
                        sizeMapping: {
                            s: [
                                [
                                    111,
                                    111
                                ],
                                [
                                    375,
                                    50
                                ],
                                [
                                    375,
                                    554
                                ],
                                [
                                    768,
                                    66
                                ],
                                [
                                    768,
                                    960
                                ],
                                [
                                    1080,
                                    1080
                                ],
                                [
                                    1080,
                                    1920
                                ],
                                [
                                    1920,
                                    1080
                                ]
                            ],
                            xs: [
                                [
                                    111,
                                    111
                                ],
                                [
                                    375,
                                    50
                                ],
                                [
                                    375,
                                    554
                                ],
                                [
                                    768,
                                    66
                                ],
                                [
                                    768,
                                    960
                                ],
                                [
                                    1080,
                                    1080
                                ],
                                [
                                    1080,
                                    1920
                                ],
                                [
                                    1920,
                                    1080
                                ]
                            ],
                            m: [
                                [
                                    111,
                                    111
                                ],
                                [
                                    375,
                                    50
                                ],
                                [
                                    375,
                                    554
                                ],
                                [
                                    768,
                                    66
                                ],
                                [
                                    768,
                                    960
                                ],
                                [
                                    1080,
                                    1080
                                ],
                                [
                                    1080,
                                    1920
                                ],
                                [
                                    1920,
                                    1080
                                ]
                            ],
                            xl: [],
                            l: []
                        },
                        attributes: {
                            adblock: !1,
                            headerbidding: !1,
                            refresh: !1,
                            lazy: !1
                        },
                        customLazy: {
                            xs: !1,
                            xl: !1,
                            s: !1,
                            l: !1,
                            m: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1080x1080',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1080x1920',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '111x111',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1920x1080',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '375x50'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '375x554',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '768x66',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '768x960'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '1080x1080'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '1080x1920',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '111x111'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '1920x1080'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '375x50',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '375x554'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '768x66',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '768x960',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@375x50'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@1080x1920'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@1920x1080'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@375x50'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@1080x1920'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@1920x1080'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@375x50'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@1080x1920'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/AppleNews@1920x1080'
                                },
                                labelAny: [
                                    's',
                                    'xs',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286147' }
                            }
                        ]
                    },
                    {
                        id: '21797707551',
                        slot: '5680070/Outstream',
                        sizes: [
                            [
                                1,
                                1
                            ],
                            [
                                300,
                                250
                            ],
                            [
                                400,
                                300
                            ],
                            [
                                640,
                                480
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            s: [
                                [
                                    300,
                                    250
                                ],
                                [
                                    1,
                                    1
                                ],
                                'fluid',
                                [
                                    400,
                                    300
                                ],
                                [
                                    640,
                                    480
                                ]
                            ],
                            m: [
                                [
                                    300,
                                    250
                                ],
                                [
                                    1,
                                    1
                                ],
                                'fluid',
                                [
                                    400,
                                    300
                                ],
                                [
                                    640,
                                    480
                                ]
                            ],
                            xs: []
                        },
                        attributes: {
                            lazy: !1,
                            refresh: !1,
                            headerbidding: !1,
                            adblock: !1
                        },
                        customLazy: {
                            m: !1,
                            s: !1,
                            xs: !1,
                            l: !1,
                            xl: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    size: '300x250',
                                    unit: '541018132',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    size: [
                                        300,
                                        250
                                    ],
                                    siteId: '454881'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    publisherSubId: '21797707551_1486321_300x250',
                                    size: '300x250',
                                    zoneId: '1486321'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    placementId: 122376,
                                    pageId: 112580,
                                    size: '1x1'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    size: '300x250',
                                    placementId: 133161
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'unruly',
                                params: {
                                    size: '1x1',
                                    siteId: '1081534',
                                    targetingUUID: '6f15e139-5f18-49a1-b52f-87e5e69ee65e'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_300x250',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '300x250',
                                    inSlot: '64296'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '300x250',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@1x1'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@1x1'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@1x1'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@400x300'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Outstream@640x480'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286149' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['s'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543824',
                                    sizes: [
                                        15,
                                        30,
                                        65
                                    ]
                                }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['m'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543824',
                                    sizes: [
                                        15,
                                        30,
                                        65
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: '21956454658',
                        slot: '5680070/AMP_Deckheader',
                        sizes: [[
                                320,
                                50
                            ]],
                        sizeMapping: {
                            xs: [[
                                    320,
                                    50
                                ]],
                            m: [[
                                    320,
                                    50
                                ]],
                            s: [[
                                    320,
                                    50
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            lazy: !1,
                            adblock: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '21956492018',
                        slot: '5680070/AMP_Footer',
                        sizes: [[
                                320,
                                50
                            ]],
                        sizeMapping: {
                            xs: [[
                                    320,
                                    50
                                ]],
                            m: [[
                                    320,
                                    50
                                ]],
                            s: [[
                                    320,
                                    50
                                ]]
                        },
                        attributes: {
                            headerbidding: !0,
                            adblock: !1,
                            lazy: !1,
                            refresh: !1
                        },
                        bids: []
                    },
                    {
                        id: '21956569650',
                        slot: '5680070/AMP_Crate',
                        sizes: [[
                                300,
                                250
                            ]],
                        sizeMapping: {
                            m: [[
                                    300,
                                    250
                                ]],
                            s: [[
                                    300,
                                    250
                                ]],
                            xs: [[
                                    300,
                                    250
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            lazy: !1,
                            adblock: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '22024718872',
                        slot: '5680070/PublisherPartner',
                        sizes: [
                            [
                                1248,
                                250
                            ],
                            [
                                1248,
                                357
                            ],
                            [
                                1248,
                                90
                            ],
                            [
                                324,
                                1287
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            xs: [
                                [
                                    1248,
                                    90
                                ],
                                [
                                    1248,
                                    250
                                ],
                                'fluid',
                                [
                                    324,
                                    1287
                                ]
                            ],
                            s: [
                                [
                                    1248,
                                    90
                                ],
                                [
                                    1248,
                                    250
                                ],
                                'fluid'
                            ],
                            m: [
                                [
                                    1248,
                                    90
                                ],
                                [
                                    1248,
                                    250
                                ],
                                'fluid',
                                [
                                    1248,
                                    357
                                ]
                            ],
                            xl: [],
                            l: []
                        },
                        attributes: {
                            lazy: !1,
                            refresh: !1,
                            adblock: !1,
                            headerbidding: !1
                        },
                        customLazy: {
                            xs: !1,
                            xl: !1,
                            m: !1,
                            l: !1,
                            s: !1
                        },
                        bids: [
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '1248x250',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    'xs',
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '1248x357'
                                },
                                labelAny: ['m']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '1248x90',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    'xs',
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '324x1287',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '19315604' }
                            }
                        ]
                    },
                    {
                        id: '22155969790',
                        slot: '5680070/article_bottom_mrec',
                        sizes: [
                            [
                                1,
                                1
                            ],
                            [
                                300,
                                250
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            m: [
                                [
                                    300,
                                    250
                                ],
                                [
                                    1,
                                    1
                                ],
                                'fluid'
                            ],
                            xl: [],
                            s: [
                                [
                                    300,
                                    250
                                ],
                                [
                                    1,
                                    1
                                ],
                                'fluid'
                            ],
                            l: [],
                            xs: [
                                [
                                    300,
                                    250
                                ],
                                [
                                    1,
                                    1
                                ],
                                'fluid'
                            ]
                        },
                        attributes: {
                            refresh: !1,
                            lazy: !0,
                            headerbidding: !1,
                            adblock: !1
                        },
                        customLazy: {
                            xl: !1,
                            m: 500,
                            xs: 500,
                            l: !1,
                            s: 500
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '300x250',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    size: [
                                        300,
                                        250
                                    ],
                                    siteId: '454881'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    size: '300x250',
                                    zoneId: '1486321',
                                    publisherSubId: '22155969790_1486321_300x250'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '1x1',
                                    pageId: 112580,
                                    placementId: 122376
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    placementId: 133161,
                                    size: '300x250'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '300x250',
                                    inventoryCode: 'Broadsheet_300x250'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    inSlot: '64296',
                                    size: '300x250'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '300x250',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pxyz',
                                params: {
                                    placementId: '20530794',
                                    size: '300x250'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/article_bottom_mrec@300x250'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/article_bottom_mrec@1x1'
                                },
                                labelAny: [
                                    'm',
                                    's',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '20485369' }
                            }
                        ]
                    },
                    {
                        id: '22408859463',
                        slot: '5680070/AMP_Bottom_Mrec',
                        sizes: [[
                                300,
                                250
                            ]],
                        sizeMapping: {
                            m: [[
                                    300,
                                    250
                                ]],
                            s: [[
                                    300,
                                    250
                                ]],
                            xs: [[
                                    300,
                                    250
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            headerbidding: !0,
                            lazy: !1,
                            adblock: !1
                        },
                        bids: []
                    },
                    {
                        id: '22412621095',
                        slot: '5680070/AMP_deck_gallery',
                        sizes: [[
                                320,
                                50
                            ]],
                        sizeMapping: {
                            m: [[
                                    320,
                                    50
                                ]],
                            s: [[
                                    320,
                                    50
                                ]],
                            xs: [[
                                    320,
                                    50
                                ]]
                        },
                        attributes: {
                            adblock: !1,
                            headerbidding: !0,
                            refresh: !1,
                            lazy: !1
                        },
                        bids: []
                    },
                    {
                        id: '22442408502',
                        slot: '5680070/AMP_cratebody',
                        sizes: [[
                                300,
                                250
                            ]],
                        sizeMapping: {
                            m: [[
                                    300,
                                    250
                                ]],
                            xs: [[
                                    300,
                                    250
                                ]],
                            s: [[
                                    300,
                                    250
                                ]]
                        },
                        attributes: {
                            adblock: !1,
                            refresh: !1,
                            headerbidding: !0,
                            lazy: !1
                        },
                        bids: []
                    },
                    {
                        id: '22442508307',
                        slot: '5680070/AMP_pennon',
                        sizes: [[
                                320,
                                50
                            ]],
                        sizeMapping: {
                            m: [[
                                    320,
                                    50
                                ]],
                            s: [[
                                    320,
                                    50
                                ]],
                            xs: [[
                                    320,
                                    50
                                ]]
                        },
                        attributes: {
                            adblock: !1,
                            lazy: !1,
                            refresh: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '22455395752',
                        slot: '5680070/amp_flagship',
                        sizes: [[
                                970,
                                250
                            ]],
                        sizeMapping: {
                            s: [[
                                    970,
                                    250
                                ]],
                            m: [[
                                    970,
                                    250
                                ]],
                            xs: [[
                                    970,
                                    250
                                ]]
                        },
                        attributes: {
                            lazy: !1,
                            adblock: !1,
                            headerbidding: !0,
                            refresh: !1
                        },
                        bids: []
                    },
                    {
                        id: '22455399418',
                        slot: '5680070/amp_towergallery',
                        sizes: [[
                                300,
                                600
                            ]],
                        sizeMapping: {
                            xs: [[
                                    300,
                                    600
                                ]],
                            s: [[
                                    300,
                                    600
                                ]],
                            m: [[
                                    300,
                                    600
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            adblock: !1,
                            lazy: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '22455439062',
                        slot: '5680070/amp_outstream',
                        sizes: [[
                                300,
                                250
                            ]],
                        sizeMapping: {
                            m: [[
                                    300,
                                    250
                                ]],
                            xs: [[
                                    300,
                                    250
                                ]],
                            s: [[
                                    300,
                                    250
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            lazy: !1,
                            adblock: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '22455573602',
                        slot: '5680070/amp_flagshipcollapsed',
                        sizes: [[
                                970,
                                90
                            ]],
                        sizeMapping: {
                            s: [[
                                    970,
                                    90
                                ]],
                            xs: [[
                                    970,
                                    90
                                ]],
                            m: [[
                                    970,
                                    90
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            headerbidding: !0,
                            lazy: !1,
                            adblock: !1
                        },
                        bids: []
                    },
                    {
                        id: '22455575414',
                        slot: '5680070/amp_topsail',
                        sizes: [[
                                728,
                                90
                            ]],
                        sizeMapping: {
                            s: [[
                                    728,
                                    90
                                ]],
                            m: [[
                                    728,
                                    90
                                ]],
                            xs: [[
                                    728,
                                    90
                                ]]
                        },
                        attributes: {
                            adblock: !1,
                            refresh: !1,
                            lazy: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '22455575870',
                        slot: '5680070/amp_tower',
                        sizes: [[
                                300,
                                600
                            ]],
                        sizeMapping: {
                            s: [[
                                    300,
                                    600
                                ]],
                            xs: [[
                                    300,
                                    600
                                ]],
                            m: [[
                                    300,
                                    600
                                ]]
                        },
                        attributes: {
                            refresh: !1,
                            adblock: !1,
                            lazy: !1,
                            headerbidding: !0
                        },
                        bids: []
                    },
                    {
                        id: '96225670',
                        slot: '5680070/Flagship',
                        sizes: [
                            [
                                1024,
                                415
                            ],
                            [
                                1248,
                                250
                            ]
                        ],
                        sizeMapping: {
                            xs: [],
                            s: [
                                [
                                    1024,
                                    415
                                ],
                                [
                                    1248,
                                    250
                                ]
                            ],
                            m: [
                                [
                                    1024,
                                    415
                                ],
                                [
                                    1248,
                                    250
                                ]
                            ]
                        },
                        attributes: {
                            refresh: !1,
                            lazy: !1,
                            headerbidding: !1,
                            adblock: !1
                        },
                        customLazy: {
                            xl: !1,
                            xs: !1,
                            s: !1,
                            m: !1,
                            l: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1024x415',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '1248x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '1024x415'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '1248x250',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286137' }
                            }
                        ]
                    },
                    {
                        id: '96225790',
                        slot: '5680070/FlagshipCollapsed',
                        sizes: [
                            [
                                1024,
                                415
                            ],
                            [
                                1248,
                                90
                            ]
                        ],
                        sizeMapping: {
                            xs: [],
                            s: [
                                [
                                    1024,
                                    415
                                ],
                                [
                                    1248,
                                    90
                                ]
                            ],
                            m: [
                                [
                                    1024,
                                    415
                                ],
                                [
                                    1248,
                                    90
                                ]
                            ]
                        },
                        attributes: {
                            adblock: !1,
                            refresh: !1,
                            headerbidding: !1,
                            lazy: !1
                        },
                        customLazy: {
                            xs: !1,
                            s: !1,
                            xl: !1,
                            m: !1,
                            l: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1024x415',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '1248x90',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '1024x415'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '1248x90'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286138' }
                            }
                        ]
                    },
                    {
                        id: '96225910',
                        slot: '5680070/Topsail',
                        sizes: [
                            [
                                1248,
                                120
                            ],
                            [
                                1,
                                1
                            ],
                            [
                                728,
                                90
                            ],
                            [
                                970,
                                250
                            ],
                            [
                                970,
                                90
                            ]
                        ],
                        sizeMapping: {
                            m: [
                                [
                                    1248,
                                    120
                                ],
                                [
                                    970,
                                    250
                                ],
                                [
                                    970,
                                    90
                                ],
                                [
                                    728,
                                    90
                                ],
                                [
                                    1,
                                    1
                                ]
                            ],
                            xs: [],
                            s: [
                                [
                                    1248,
                                    120
                                ],
                                [
                                    970,
                                    250
                                ],
                                [
                                    970,
                                    90
                                ],
                                [
                                    728,
                                    90
                                ],
                                [
                                    1,
                                    1
                                ]
                            ]
                        },
                        attributes: {
                            refresh: !1,
                            lazy: !1,
                            headerbidding: !1,
                            adblock: !1
                        },
                        customLazy: {
                            xs: !1,
                            m: !1,
                            xl: !1,
                            s: !1,
                            l: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '1248x120'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '728x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '970x250',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '970x90',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    size: '728x90',
                                    unit: '541018125',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    size: '970x250',
                                    unit: '541018125',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    unit: '541018125',
                                    delDomain: 'publift-d.openx.net',
                                    size: '970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    size: [
                                        728,
                                        90
                                    ],
                                    siteId: '454881'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        970,
                                        250
                                    ]
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    size: [
                                        970,
                                        90
                                    ],
                                    siteId: '454881'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    publisherSubId: '96225910_1486324_728x90',
                                    size: '728x90',
                                    zoneId: '1486324'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    size: '970x250',
                                    zoneId: '1486326',
                                    publisherSubId: '96225910_1486326_970x250'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1486325',
                                    publisherSubId: '96225910_1486325_970x90',
                                    size: '970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '728x90',
                                    pageId: 122586,
                                    placementId: 133161
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '970x250',
                                    pageId: 122586,
                                    placementId: 133161
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    placementId: 133161,
                                    pageId: 122586,
                                    size: '970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '728x90',
                                    inventoryCode: 'Broadsheet_728x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '970x250',
                                    inventoryCode: 'Broadsheet_970x250'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '728x90',
                                    inSlot: '64299'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '728x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '970x250'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@970x250'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@728x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@970x250'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@970x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@728x90'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Topsail@1x1'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286140' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['m'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543808',
                                    sizes: [
                                        2,
                                        30,
                                        55,
                                        57
                                    ]
                                }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['s'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543808',
                                    sizes: [
                                        2,
                                        30,
                                        55,
                                        57
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: '96226030',
                        slot: '5680070/Deck',
                        sizes: [
                            [
                                1,
                                1
                            ],
                            [
                                300,
                                50
                            ],
                            [
                                320,
                                50
                            ]
                        ],
                        sizeMapping: {
                            xs: [
                                [
                                    320,
                                    50
                                ],
                                [
                                    1,
                                    1
                                ],
                                [
                                    300,
                                    50
                                ]
                            ],
                            m: [],
                            s: [[
                                    320,
                                    50
                                ]]
                        },
                        attributes: {
                            adblock: !1,
                            refresh: 25,
                            lazy: !1,
                            headerbidding: !1
                        },
                        customLazy: {
                            s: !1,
                            xl: !1,
                            l: !1,
                            m: !1,
                            xs: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '320x50'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        320,
                                        50
                                    ]
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    size: '320x50',
                                    publisherSubId: '96226030_1486319_320x50',
                                    zoneId: '1486319'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    placementId: 133161,
                                    size: '300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    placementId: 133161,
                                    size: '320x50'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '320x50'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'kargo',
                                params: {
                                    size: '320x50',
                                    placementId: '_tUOrSqP3Do'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '1x1',
                                    inScreen: 'mstgjzb3'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '320x50'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Deck@320x50'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Deck@320x50'
                                },
                                labelAny: [
                                    'xs',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Deck@1x1'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Deck@300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286139' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['xs'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543806',
                                    sizes: [
                                        30,
                                        43
                                    ]
                                }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['s'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543806',
                                    sizes: [43]
                                }
                            }
                        ]
                    },
                    {
                        id: '96226150',
                        slot: '5680070/Pennon',
                        sizes: [
                            [
                                1,
                                1
                            ],
                            [
                                300,
                                100
                            ],
                            [
                                300,
                                50
                            ],
                            [
                                320,
                                100
                            ],
                            [
                                320,
                                55
                            ]
                        ],
                        sizeMapping: {
                            m: [],
                            xs: [
                                [
                                    320,
                                    55
                                ],
                                [
                                    320,
                                    100
                                ],
                                [
                                    1,
                                    1
                                ],
                                [
                                    300,
                                    100
                                ],
                                [
                                    300,
                                    50
                                ]
                            ],
                            s: []
                        },
                        attributes: {
                            lazy: !1,
                            adblock: !1,
                            headerbidding: !1,
                            refresh: !1
                        },
                        customLazy: {
                            s: !1,
                            m: !1,
                            xs: !1,
                            xl: !1,
                            l: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '320x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '320x55'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    unit: '541018127',
                                    size: '320x100',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        320,
                                        100
                                    ]
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    publisherSubId: '96226150_1486320_320x100',
                                    zoneId: '1486320',
                                    size: '320x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    placementId: 133161,
                                    size: '300x100',
                                    pageId: 122586
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    size: '300x50',
                                    placementId: 133161
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    size: '320x100',
                                    placementId: 133161
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '300x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '300x50',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '320x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '300x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '320x100',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Pennon@320x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Pennon@320x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Pennon@1x1'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Pennon@300x100'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Pennon@300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286142' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['xs'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543812',
                                    sizes: [
                                        30,
                                        117
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: '96226270',
                        slot: '5680070/Tower',
                        sizes: [
                            [
                                120,
                                600
                            ],
                            [
                                160,
                                600
                            ],
                            [
                                300,
                                600
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            xs: [],
                            m: [
                                [
                                    300,
                                    600
                                ],
                                [
                                    160,
                                    600
                                ],
                                [
                                    120,
                                    600
                                ],
                                'fluid'
                            ],
                            s: [
                                [
                                    300,
                                    600
                                ],
                                [
                                    160,
                                    600
                                ],
                                [
                                    120,
                                    600
                                ],
                                'fluid'
                            ]
                        },
                        attributes: {
                            adblock: !1,
                            lazy: !1,
                            headerbidding: !1,
                            refresh: !1
                        },
                        customLazy: {
                            xl: !1,
                            s: !1,
                            xs: !1,
                            l: !1,
                            m: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '160x600',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '300x600',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    unit: '541018126',
                                    delDomain: 'publift-d.openx.net',
                                    size: '160x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    unit: '541018126',
                                    size: '300x600',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    size: [
                                        160,
                                        600
                                    ],
                                    siteId: '454881'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    size: [
                                        300,
                                        600
                                    ],
                                    siteId: '454881'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    size: '160x600',
                                    zoneId: '1486316',
                                    publisherSubId: '96226270_1486316_160x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    publisherSubId: '96226270_1486322_300x600',
                                    zoneId: '1486322',
                                    size: '300x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '120x600',
                                    placementId: 133161,
                                    pageId: 122586
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    placementId: 133161,
                                    size: '160x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    size: '300x600',
                                    placementId: 133161
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '120x600',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '160x600',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '300x600',
                                    inventoryCode: 'Broadsheet_300x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    inSlot: '64295',
                                    size: '160x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '300x600',
                                    inSlot: '64297'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '120x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '160x600',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '300x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Tower@300x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Tower@160x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Tower@300x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Tower@160x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Tower@120x600'
                                },
                                labelAny: [
                                    'm',
                                    's'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286141' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['m'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543810',
                                    sizes: [
                                        8,
                                        9,
                                        10
                                    ]
                                }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['s'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543810',
                                    sizes: [
                                        8,
                                        9,
                                        10
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: '96226630',
                        slot: '5680070/Crate',
                        sizes: [
                            [
                                300,
                                250
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            xl: [],
                            s: [
                                [
                                    300,
                                    250
                                ],
                                'fluid'
                            ],
                            m: [
                                [
                                    300,
                                    250
                                ],
                                'fluid'
                            ],
                            xs: [
                                [
                                    300,
                                    250
                                ],
                                'fluid'
                            ],
                            l: []
                        },
                        attributes: {
                            lazy: !0,
                            headerbidding: !1,
                            refresh: !1,
                            adblock: !1
                        },
                        customLazy: {
                            xs: !1,
                            xl: !1,
                            s: 600,
                            l: !1,
                            m: 600
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '300x250',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        300,
                                        250
                                    ]
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1486321',
                                    size: '300x250',
                                    publisherSubId: '96226630_1486321_300x250'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '300x250',
                                    pageId: 122586,
                                    placementId: 133161
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_300x250',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '300x250',
                                    inSlot: '64296'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '300x250',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Crate@300x250'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/Crate@300x250'
                                },
                                labelAny: [
                                    's',
                                    'm',
                                    'xs'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286143' }
                            }
                        ]
                    },
                    {
                        id: '96226750',
                        slot: '5680070/PlankFooter',
                        sizes: [
                            [
                                1248,
                                90
                            ],
                            [
                                728,
                                90
                            ]
                        ],
                        sizeMapping: {
                            xs: [],
                            s: [
                                [
                                    728,
                                    90
                                ],
                                [
                                    1248,
                                    90
                                ]
                            ],
                            m: [
                                [
                                    728,
                                    90
                                ],
                                [
                                    1248,
                                    90
                                ]
                            ]
                        },
                        attributes: {
                            lazy: !1,
                            adblock: !1,
                            refresh: !1,
                            headerbidding: !0
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '1248x90'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '728x90',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        728,
                                        90
                                    ]
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    size: '728x90',
                                    zoneId: '1486324',
                                    publisherSubId: '96226750_1486324_728x90'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '1248x90',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '728x90'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '728x90',
                                    inSlot: '64299'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/PlankFooter@728x90'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286144' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['s'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543816',
                                    sizes: [2]
                                }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['m'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543816',
                                    sizes: [2]
                                }
                            }
                        ]
                    },
                    {
                        id: '96354910',
                        slot: '5680070/TowerGallery',
                        sizes: [
                            [
                                160,
                                600
                            ],
                            [
                                300,
                                250
                            ],
                            [
                                300,
                                600
                            ],
                            ['fluid']
                        ],
                        sizeMapping: {
                            s: [
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
                                ],
                                'fluid'
                            ],
                            m: [
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
                                ],
                                'fluid'
                            ],
                            xs: []
                        },
                        attributes: {
                            lazy: !1,
                            refresh: !1,
                            headerbidding: !1,
                            adblock: !1
                        },
                        customLazy: {
                            s: !1,
                            m: !1,
                            l: !1,
                            xs: !1,
                            xl: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '160x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    tagid: '95730',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '300x600',
                                    tagid: '95730'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    size: '160x600',
                                    delDomain: 'publift-d.openx.net',
                                    unit: '541018130'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    delDomain: 'publift-d.openx.net',
                                    size: '300x250',
                                    unit: '541018130'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    unit: '541018130',
                                    size: '300x600',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        160,
                                        600
                                    ]
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        300,
                                        250
                                    ]
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        300,
                                        600
                                    ]
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    publisherSubId: '96354910_1486316_160x600',
                                    zoneId: '1486316',
                                    size: '160x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1486321',
                                    publisherSubId: '96354910_1486321_300x250',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    publisherSubId: '96354910_1486322_300x600',
                                    zoneId: '1486322',
                                    size: '300x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    size: '160x600',
                                    placementId: 133161,
                                    pageId: 122586
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    placementId: 133161,
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    placementId: 133161,
                                    pageId: 122586,
                                    size: '300x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_StandardDisplay',
                                    size: '160x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    inventoryCode: 'Broadsheet_300x250',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '300x600',
                                    inventoryCode: 'Broadsheet_300x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '160x600',
                                    inSlot: '64295'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    inSlot: '64296',
                                    size: '300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '300x600',
                                    inSlot: '64297'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '160x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '300x250',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '300x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/TowerGallery@300x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/TowerGallery@160x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/TowerGallery@300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/TowerGallery@300x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/TowerGallery@160x600'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/TowerGallery@300x250'
                                },
                                labelAny: [
                                    's',
                                    'm'
                                ]
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286146' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['s'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543820',
                                    sizes: [
                                        9,
                                        10,
                                        15
                                    ]
                                }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['m'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543820',
                                    sizes: [
                                        9,
                                        10,
                                        15
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: '96355030',
                        slot: '5680070/DeckGallery',
                        sizes: [
                            [
                                300,
                                50
                            ],
                            [
                                320,
                                50
                            ]
                        ],
                        sizeMapping: {
                            m: [],
                            xs: [
                                [
                                    320,
                                    50
                                ],
                                [
                                    300,
                                    50
                                ]
                            ],
                            s: []
                        },
                        attributes: {
                            adblock: !1,
                            headerbidding: !1,
                            refresh: !1,
                            lazy: !1
                        },
                        customLazy: {
                            xl: !1,
                            m: !1,
                            s: !1,
                            l: !1,
                            xs: !1
                        },
                        bids: [
                            {
                                bidder: 'emx_digital',
                                params: {
                                    size: '320x50',
                                    tagid: '95730'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'openx',
                                params: {
                                    size: '320x50',
                                    unit: '541018129',
                                    delDomain: 'publift-d.openx.net'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'ix',
                                params: {
                                    siteId: '454881',
                                    size: [
                                        320,
                                        50
                                    ]
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1486319',
                                    publisherSubId: '96355030_1486319_320x50',
                                    size: '320x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    pageId: 122586,
                                    placementId: 133161,
                                    size: '300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'teads',
                                params: {
                                    placementId: 133161,
                                    size: '320x50',
                                    pageId: 122586
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '300x50',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'triplelift',
                                params: {
                                    size: '320x50',
                                    inventoryCode: 'Broadsheet_StandardDisplay'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'gumgum',
                                params: {
                                    size: '320x50',
                                    inSlot: '64298'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    tagId: 'cHVibGlmdC5jb20',
                                    size: '300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'amx',
                                params: {
                                    size: '320x50',
                                    tagId: 'cHVibGlmdC5jb20'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/DeckGallery@320x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/DeckGallery@320x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'pubmatic',
                                params: {
                                    publisherId: '156762',
                                    adSlot: '5680070/DeckGallery@300x50'
                                },
                                labelAny: ['xs']
                            },
                            {
                                bidder: 'appnexus',
                                params: { placementId: '18286145' }
                            },
                            {
                                bidder: 'rubicon',
                                labelAny: ['xs'],
                                params: {
                                    accountId: '11504',
                                    siteId: '306190',
                                    zoneId: '1543818',
                                    sizes: [43]
                                }
                            }
                        ]
                    }
                ],
                supported_sizes: {
                    s: [
                        [
                            1,
                            1
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            300,
                            255
                        ],
                        'fluid',
                        [
                            640,
                            480
                        ],
                        [
                            400,
                            300
                        ],
                        [
                            111,
                            111
                        ],
                        [
                            375,
                            50
                        ],
                        [
                            375,
                            554
                        ],
                        [
                            768,
                            66
                        ],
                        [
                            768,
                            960
                        ],
                        [
                            1080,
                            1080
                        ],
                        [
                            1080,
                            1920
                        ],
                        [
                            1920,
                            1080
                        ],
                        [
                            320,
                            50
                        ],
                        [
                            1248,
                            90
                        ],
                        [
                            1248,
                            250
                        ],
                        [
                            970,
                            250
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            970,
                            90
                        ],
                        [
                            728,
                            90
                        ],
                        [
                            1024,
                            415
                        ],
                        [
                            1248,
                            120
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            120,
                            600
                        ]
                    ],
                    l: [],
                    xs: [
                        [
                            1,
                            1
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            300,
                            255
                        ],
                        'fluid',
                        [
                            336,
                            280
                        ],
                        [
                            111,
                            111
                        ],
                        [
                            375,
                            50
                        ],
                        [
                            375,
                            554
                        ],
                        [
                            768,
                            66
                        ],
                        [
                            768,
                            960
                        ],
                        [
                            1080,
                            1080
                        ],
                        [
                            1080,
                            1920
                        ],
                        [
                            1920,
                            1080
                        ],
                        [
                            320,
                            50
                        ],
                        [
                            1248,
                            90
                        ],
                        [
                            1248,
                            250
                        ],
                        [
                            324,
                            1287
                        ],
                        [
                            970,
                            250
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            970,
                            90
                        ],
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            50
                        ],
                        [
                            320,
                            55
                        ],
                        [
                            320,
                            100
                        ],
                        [
                            300,
                            100
                        ]
                    ],
                    xl: [],
                    m: [
                        [
                            111,
                            111
                        ],
                        [
                            375,
                            50
                        ],
                        [
                            375,
                            554
                        ],
                        [
                            768,
                            66
                        ],
                        [
                            768,
                            960
                        ],
                        [
                            1080,
                            1080
                        ],
                        [
                            1080,
                            1920
                        ],
                        [
                            1920,
                            1080
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            1,
                            1
                        ],
                        'fluid',
                        [
                            400,
                            300
                        ],
                        [
                            640,
                            480
                        ],
                        [
                            320,
                            50
                        ],
                        [
                            1248,
                            90
                        ],
                        [
                            1248,
                            250
                        ],
                        [
                            1248,
                            357
                        ],
                        [
                            970,
                            250
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            970,
                            90
                        ],
                        [
                            728,
                            90
                        ],
                        [
                            1024,
                            415
                        ],
                        [
                            1248,
                            120
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            120,
                            600
                        ]
                    ]
                },
                fuse_industry: ['IAB1']
            };
            function s(e) {
                return (s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                    return typeof e;
                } : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                })(e);
            }
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
                }
            }
            function i(e, t, i) {
                return t && a(e.prototype, t), i && a(e, i), e;
            }
            function r(t, e) {
                var i, a = Object.keys(t);
                return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), a.push.apply(a, i)), a;
            }
            function o(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach(function (e) {
                        var t, i;
                        t = a, e = n[i = e], i in t ? Object.defineProperty(t, i, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[i] = e;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return a;
            }
            function d(e, t) {
                return function (e) {
                    if (Array.isArray(e))
                        return e;
                }(e) || function (e, t) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                        var i = [], a = !0, n = !1, s = void 0;
                        try {
                            for (var r, o = e[Symbol.iterator](); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            n = !0, s = e;
                        } finally {
                            try {
                                a || null == o.return || o.return();
                            } finally {
                                if (n)
                                    throw s;
                            }
                        }
                        return i;
                    }
                }(e, t) || function (e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return l(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Map' === (i = 'Object' === i && e.constructor ? e.constructor.name : i) || 'Set' === i ? Array.from(e) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? l(e, t) : void 0;
                    }
                }(e, t) || function () {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }();
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, a = new Array(t); i < t; i++)
                    a[i] = e[i];
                return a;
            }
            var c = void 0;
            Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
                t = t || window;
                for (var i = 0; i < c.length; i++)
                    e.call(t, c[i], i, c);
            }), Array.prototype.includes || Object.defineProperty(Array.prototype, 'includes', {
                value: function (e, t) {
                    if (null == this)
                        throw new TypeError('"this" is null or not defined');
                    var i = Object(this), a = i.length >>> 0;
                    if (0 == a)
                        return !1;
                    for (var n, s, t = 0 | t, r = Math.max(0 <= t ? t : a - Math.abs(t), 0); r < a;) {
                        if ((n = i[r]) === (s = e) || 'number' == typeof n && 'number' == typeof s && isNaN(n) && isNaN(s))
                            return !0;
                        r++;
                    }
                    return !1;
                }
            }), 'undefined' != typeof window && window.NodeList && !window.NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
            var u = function () {
                    function t(e) {
                        n(this, t), this.pubID = e.pubID, this.adServer = e.adServer, this.logger = e.logger, this.browserWindow = e.browserWindow, this.gdpr = {}, this.params = {}, this.sco = e.sco || {};
                    }
                    return i(t, [
                        {
                            key: 'loadAmazonUam',
                            value: function (i, a, e, t, n, s, r) {
                                function o(e, t) {
                                    a[i]._Q.push([
                                        e,
                                        t
                                    ]);
                                }
                                a[i] || (a[i] = {
                                    init: function () {
                                        o('i', arguments);
                                    },
                                    fetchBids: function () {
                                        o('f', arguments);
                                    },
                                    setDisplayBids: function () {
                                    },
                                    targetingKeys: function () {
                                        return [];
                                    },
                                    _Q: []
                                }, (s = e.createElement(t)).async = !0, s.src = n, (r = e.getElementsByTagName(t)[0]).parentNode.insertBefore(s, r));
                            }
                        },
                        {
                            key: 'applyCCPA',
                            value: function (e) {
                                this.params = { us_privacy: e }, this.logger.log('[CONSENT]: CCPA config passed onto UAM');
                            }
                        },
                        {
                            key: 'applyGDPR',
                            value: function () {
                                this.gdpr = { cmpTimeout: 10000 }, this.logger.log('[CONSENT]: GDPR config passed onto UAM');
                            }
                        },
                        {
                            key: 'getUamConfig',
                            value: function () {
                                var e = {
                                    pubID: this.pubID,
                                    adServer: this.adServer
                                };
                                return Object.getOwnPropertyNames(this.gdpr).length && (e.gdpr = this.gdpr), Object.getOwnPropertyNames(this.params).length && (e.params = this.params), Object.getOwnPropertyNames(this.sco).length && (e.schain = {
                                    ver: '1.0',
                                    complete: 1,
                                    nodes: [{
                                            asi: this.sco.asi,
                                            sid: this.sco.sellerId,
                                            hp: 1
                                        }]
                                }), e;
                            }
                        },
                        {
                            key: 'load',
                            value: function () {
                                if (this.loadAmazonUam('apstag', this.browserWindow, this.browserWindow.document, 'script', '//c.amazon-adsystem.com/aax2/apstag.js'), !this.browserWindow.apstag)
                                    return this.logger.error('[LOAD]: 0. UAM script loading failed.');
                            }
                        },
                        {
                            key: 'init',
                            value: function (e) {
                                this.browserWindow.apstag.init(this.getUamConfig()), this.logger.log('[LOAD]: 0. UAM script loaded'), this.logger.log('[TIME]: time in ms it took UAM script to load', new Date() - e);
                            }
                        },
                        {
                            key: 'makeBids',
                            value: function (e, t) {
                                var i = this;
                                this.browserWindow.apstag.fetchBids({ slots: e }, function (e) {
                                    i.browserWindow.googletag.cmd.push(function () {
                                        i.browserWindow.apstag.setDisplayBids(), t(e);
                                    });
                                });
                            }
                        }
                    ]), t;
                }(), p = function () {
                    function t(e) {
                        n(this, t), this.browserWindow = e.browserWindow, this.versionLoader = e.versionLoader, this.logger = e.logger, this.versionNumber = 1, this.version = null, this.gdprApplies = !1, this.ccpaApplies = !1, this.ccpaPrivacyString = null, this.stubFunctionsGenerator = e.stubFunctionsGenerator, this.scriptLoader = e.scriptLoader, this.consentUIPrompt = e.consentUIPrompt;
                    }
                    return i(t, [
                        {
                            key: 'init',
                            value: function () {
                                this.scriptLoader.load(), this.stubFunctionsGenerator.generate(), this.loadVersion();
                            }
                        },
                        {
                            key: 'loadVersion',
                            value: function () {
                                this.checkForVersion1(), this.checkForVersion2();
                            }
                        },
                        {
                            key: 'versionHandler',
                            value: function (e) {
                                var t = this, i = e.found, e = e.versionNumber;
                                null === this.version && (i ? this.setVersion(e) : setTimeout(function () {
                                    t.loadVersion();
                                }, 500));
                            }
                        },
                        {
                            key: 'checkForVersion1',
                            value: function () {
                                var i = this;
                                this.browserWindow.__cmp('ping', null, function (e, t) {
                                    i.versionHandler({
                                        found: t,
                                        versionNumber: 1
                                    });
                                });
                            }
                        },
                        {
                            key: 'checkForVersion2',
                            value: function () {
                                var t = this;
                                this.browserWindow.__tcfapi('ping', null, function (e) {
                                    t.versionHandler({
                                        found: e.cmpLoaded,
                                        versionNumber: 2
                                    });
                                });
                            }
                        },
                        {
                            key: 'setVersion',
                            value: function (e) {
                                this.versionNumber = e, this.version = this.versionLoader.getVersion(e);
                            }
                        },
                        {
                            key: 'checkForCCPA',
                            value: function (e) {
                                this.version.checkForCCPA(e);
                            }
                        },
                        {
                            key: 'cmpLoaded',
                            value: function (e) {
                                if (this.logger.log('[CONSENT]: Check if CMP has been loaded'), null === this.version)
                                    return e(!1);
                                this.version.cmpLoaded(e);
                            }
                        },
                        {
                            key: 'getConsentData',
                            value: function (e) {
                                this.version.getConsentData(e);
                            }
                        },
                        {
                            key: 'setGDPR',
                            value: function (e) {
                                this.gdprApplies = e;
                            }
                        },
                        {
                            key: 'setCCPA',
                            value: function (e) {
                                this.ccpaApplies = e;
                            }
                        },
                        {
                            key: 'setPrivacyString',
                            value: function (e) {
                                this.ccpaPrivacyString = e;
                            }
                        },
                        {
                            key: 'setGDPRConsentPrompt',
                            value: function () {
                                this.version.setGDPRConsentPrompt();
                            }
                        },
                        {
                            key: 'setCCPAConsentPrompt',
                            value: function () {
                                this.version.setCCPAConsentPrompt();
                            }
                        },
                        {
                            key: 'setNonPrivacyRegionsPrompt',
                            value: function () {
                                this.consentUIPrompt.setup('You are outside the CCPA jurisdiction.');
                            }
                        }
                    ]), t;
                }(), b = function () {
                    function a(e, t, i) {
                        n(this, a), this.browserWindow = e, this.domSelector = t || 'div[data-fuse-privacy-tool]', this.elementId = i || 'fuse-privacy-tool';
                    }
                    return i(a, [{
                            key: 'setup',
                            value: function (e, t) {
                                var i, a = this.browserWindow.document.querySelector(this.domSelector);
                                a && (t ? ((i = document.createElement('a')).href = 'javascript:void(0)', i.id = this.elementId, i.innerHTML = e, i.addEventListener('click', t), a.appendChild(i)) : a.textContent = e);
                            }
                        }]), a;
                }(), m = function () {
                    function t(e) {
                        n(this, t), this.logger = e.logger, this.targetAdSlotNodeIdPrefix = e.targetAdSlotNodeIdPrefix, this.packageVersion = e.packageVersion, this.browserWindow = e.browserWindow, this.adSlotRegistry = e.adSlotRegistry, this.isInDebugMode = e.isInDebugMode;
                    }
                    return i(t, [{
                            key: 'getActiveModules',
                            value: function () {
                                return ['no-module'];
                            }
                        }]), t;
                }(), g = function () {
                    function t(e) {
                        n(this, t), this.slots = {}, this.logger = e.logger, this.getMatchedFuseSlot = e.getMatchedFuseSlot, this.destroySlotsFunc = e.destroySlotsFunc;
                    }
                    return i(t, [
                        {
                            key: 'add',
                            value: function (e, t) {
                                e && 'string' == typeof e || this.logger.error('invalid key.'), t || this.logger.error('invalid slot object passed.');
                                e = e.toLowerCase();
                                Array.isArray(this.slots[e]) || (this.slots[e] = []), this.slots[e].push(t);
                            }
                        },
                        {
                            key: 'purgeAll',
                            value: function () {
                                Object.keys(this.slots).forEach(this.purge.bind(this));
                            }
                        },
                        {
                            key: 'purge',
                            value: function (e) {
                                var t;
                                e && 'string' == typeof e && (t = e.toLowerCase(), (e = this.getMatchedFuseSlot(t)) && (e.targeting = {}), e = this.slots[t], Array.isArray(e) && (this.destroySlotsFunc(e), this.slots[t] = []));
                            }
                        },
                        {
                            key: 'getSlots',
                            value: function (e) {
                                if (e && 'string' == typeof e && Array.isArray(this.slots[e.toLowerCase()]))
                                    return this.slots[e.toLowerCase()];
                            }
                        },
                        {
                            key: 'setSlotTargetingById',
                            value: function (t, i, a) {
                                var e, n = this;
                                t && 'string' == typeof t && ((e = this.getMatchedFuseSlot(t)) && (e.targeting || (e.targeting = {}), e.targeting[i] = a), (e = n.slots[t.toLowerCase()]) && Array.isArray(e) && e.length && e.forEach(function (e) {
                                    try {
                                        e.setTargeting(i, a);
                                    } catch (e) {
                                        n.logger.error('error occurred while individually setTargeting for key - '.concat(t, '.'), e.message, e.stack);
                                    }
                                }));
                            }
                        }
                    ]), t;
                }(), f = function () {
                    function t(e) {
                        n(this, t), this.browserWindow = e.browserWindow;
                    }
                    return i(t, [{
                            key: 'load',
                            value: function () {
                                const $___old_a7b8f8d0d52fbc9a = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_b17091e824a907d8 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                try {
                                    if ($___old_a7b8f8d0d52fbc9a)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d7421596b9976de7.XMLHttpRequest));
                                    if ($___old_b17091e824a907d8)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d7421596b9976de7.XMLHttpRequest));
                                    return function () {
                                        var e = new XMLHttpRequest(), t = this.browserWindow.document.location.hostname, i = this.browserWindow.document.createElement('script'), a = this.browserWindow.document.getElementsByTagName('script')[0], n = new Date().getTime(), s = 'https://quantcast.mgr.consensu.org'.concat('/choice/', 'PRrmquD1Ggcb1', '/', t, '/choice.js').concat('?timestamp=', n);
                                        e.onreadystatechange = function () {
                                            var e;
                                            4 === this.readyState && (i.async = !0, i.type = 'text/javascript', 200 === this.status ? i.src = s : (e = 'https://quantcast.mgr.consensu.org'.concat('/choice.js'), i.src = e, s = e), a.parentNode.insertBefore(i, a));
                                        }, e.open('GET', s, !0), e.send();
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_a7b8f8d0d52fbc9a)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_a7b8f8d0d52fbc9a));
                                    if ($___old_b17091e824a907d8)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_b17091e824a907d8));
                                }
                            }
                        }]), t;
                }(), y = function () {
                    function t(e) {
                        n(this, t), this.logger = e.logger, this.browserWindow = e.browserWindow;
                    }
                    return i(t, [
                        {
                            key: 'generate',
                            value: function () {
                                this.createStubFunctionV1(), this.createStubFunctionV2();
                            }
                        },
                        {
                            key: 'createStubFunctionV1',
                            value: function () {
                                var t;
                                void 0 === this.browserWindow.__cmp && (t = this.browserWindow, this.browserWindow.__cmp = function () {
                                    var e = arguments;
                                    'object' !== s(t.__cmp.a) && setTimeout(function () {
                                        t.__cmp.apply(t.__cmp, e);
                                    }, 400);
                                });
                            }
                        },
                        {
                            key: 'createStubFunctionV2',
                            value: function () {
                                function e() {
                                    for (var e, n = '__tcfapiLocator', i = [], s = r.browserWindow, t = function e() {
                                                var t, i = s.document, a = !!s.frames[n];
                                                return a || (i.body ? ((t = i.createElement('iframe')).style.cssText = 'display:none', t.name = n, i.body.appendChild(t)) : setTimeout(e, 5)), !a;
                                            }; s;) {
                                        try {
                                            if (s.frames[n]) {
                                                e = s;
                                                break;
                                            }
                                        } catch (e) {
                                            '{}' !== JSON.stringify(e) && r.logger.error('[CONSENT]:', JSON.stringify(e));
                                        }
                                        if (s === r.browserWindow.top)
                                            break;
                                        s = s.parent;
                                    }
                                    e || (r.logger.log(' !cmpFrame '), t(), s.__tcfapi = function () {
                                        var e, t = arguments;
                                        if (!t.length)
                                            return i;
                                        'setGdprApplies' === t[0] ? 3 < t.length && 2 === t[2] && 'boolean' == typeof t[3] && (e = t[3], 'function' == typeof t[2] && t[2]('set', !0)) : 'ping' === t[0] ? 'function' == typeof t[2] && t[2]({
                                            gdprApplies: e,
                                            cmpLoaded: !1,
                                            cmpStatus: 'stub'
                                        }) : i.push(t);
                                    }, s.addEventListener('message', function (i) {
                                        var a = 'string' == typeof i.data, e = {};
                                        try {
                                            e = a ? JSON.parse(i.data) : i.data;
                                        } catch (e) {
                                            '{}' !== JSON.stringify(e) && r.logger.error('[CONSENT]:', JSON.stringify(e));
                                        }
                                        var n = e.__tcfapiCall;
                                        n && r.browserWindow.__tcfapi(n.command, n.version, function (e, t) {
                                            t = {
                                                __tcfapiReturn: {
                                                    returnValue: e,
                                                    success: t,
                                                    callId: n.callId
                                                }
                                            };
                                            a && (t = JSON.stringify(t)), i.source.postMessage(t, '*');
                                        }, n.parameter);
                                    }, !1));
                                }
                                var r = this;
                                'undefined' != typeof module ? module.exports = e : e();
                            }
                        }
                    ]), t;
                }(), h = function () {
                    function a(e) {
                        n(this, a), this.logger = e.logger, this.browserWindow = e.browserWindow, this.consentUIPrompt = e.consentUIPrompt, this.uspTries = 0, this.uspTriesLimit = 3, this.createUspStub();
                    }
                    return i(a, [
                        {
                            key: 'checkForCCPA',
                            value: function (i) {
                                var a = this;
                                this.browserWindow.__uspapi('uspPing', 1, function (e, t) {
                                    t && e.mode.includes('USP') && e.jurisdiction.includes(e.location.toUpperCase()) ? (a.logger.log('[CONSENT]: CCPA Region'), a.browserWindow.__uspapi('setUspDftData', 1, function (e, t) {
                                        a.logger.log('[CONSENT]: Setting up data for USP API', JSON.stringify(e), t), a.browserWindow.__uspapi('getUSPData', 1, function (e, t) {
                                            return t ? void i({
                                                applies: !0,
                                                privacyString: e.uspString
                                            }) : (a.logger.log('[CONSENT]: Failed retrieving USP data use default instead'), i({
                                                applies: !0,
                                                privacyString: '1---'
                                            }));
                                        });
                                    })) : i({ applies: !1 });
                                });
                            }
                        },
                        {
                            key: 'setGDPRConsentPrompt',
                            value: function () {
                                var e = this;
                                this.consentUIPrompt.setup('Privacy Settings', function () {
                                    e.browserWindow.__tcfapi('displayConsentUi', 2, function () {
                                        return e.logger.log('[CONSENT]: GDPR Consent UI displayed');
                                    });
                                });
                            }
                        },
                        {
                            key: 'setCCPAConsentPrompt',
                            value: function () {
                                var e = this;
                                this.consentUIPrompt.setup('Do Not Sell My Data', function () {
                                    e.browserWindow.__uspapi('displayUspUi');
                                });
                            }
                        },
                        {
                            key: 'cmpLoaded',
                            value: function (t) {
                                var i = !1;
                                setTimeout(function () {
                                    if (!i)
                                        return t(!1);
                                }, 1000), this.browserWindow.__tcfapi('ping', 2, function (e) {
                                    return i = !0, e && e.cmpLoaded ? t(!0) : t(!1);
                                });
                            }
                        },
                        {
                            key: 'getConsentData',
                            value: function (i) {
                                this.browserWindow.__tcfapi('getTCData', 2, function (e, t) {
                                    return t && e ? e.gdprApplies ? a.CONSENT_RECEIVED_STATES.includes(e.eventStatus.toLowerCase()) ? i({
                                        consentReceived: !0,
                                        personalisedAdsConsent: e.purpose.consents[2] && e.purpose.consents[3],
                                        googlePersonalisedAdsConsent: e.purpose.consents[2] && e.purpose.consents[3],
                                        gdprApplies: e.gdprApplies
                                    }) : i({
                                        consentReceived: !1,
                                        gdprApplies: e.gdprApplies
                                    }) : i({
                                        consentReceived: !0,
                                        gdprApplies: !1
                                    }) : i({ consentReceived: !1 });
                                });
                            }
                        },
                        {
                            key: 'createUspStub',
                            value: function () {
                                function t() {
                                    var e = arguments;
                                    s(n.__uspapi) !== t ? setTimeout(function () {
                                        void 0 !== n.__uspapi && n.__uspapi.apply(n.__uspapi, e);
                                    }, 400) : (a.warn('[CONSENT] USP is still in stub mode. Calling to '.concat(e[0], ' API will be unsuccessful')), 'function' == typeof e[2] && e[2](void 0, !1));
                                }
                                var e, i = this, a = this.logger, n = this.browserWindow;
                                void 0 === n.__uspapi && (n.__uspapi = t, e = setInterval(function () {
                                    i.uspTries++, n.__uspapi === t && i.uspTries < i.uspTriesLimit ? a.warn('USP is not accessible') : clearInterval(e);
                                }, 300));
                            }
                        }
                    ]), a;
                }();
            h.CONSENT_RECEIVED_STATES = [
                'useractioncomplete',
                'tcloaded'
            ];
            function x(t) {
                return d(Q.search.split(/[?&]/).filter(function (e) {
                    return '' !== e;
                }).map(function (e) {
                    return e.split('=');
                }).filter(function (e) {
                    return e[0] === t;
                }), 1)[0] || [];
            }
            function A(e, t) {
                var i;
                e.hasOwnProperty('url') && ((i = J.document.createElement('script')).async = !0, i.type = 'text/javascript', 'function' == typeof t && (i.readyState ? i.onreadystatechange = function () {
                    'loaded' !== i.readyState && 'complete' !== i.readyState || (i.onreadystatechange = null, t());
                } : i.onload = function () {
                    t();
                }), i.src = 'https:'.concat(e.url).concat(e.file), (e = J.document.getElementsByTagName('script')[0]).parentNode.insertBefore(i, e));
            }
            function v(t, i, a) {
                function n() {
                    var e = Date.now() - d;
                    e < i && 0 <= e ? s = setTimeout(n, i - e) : (s = null, a || (l = t.apply(o, r), s || (o = r = null)));
                }
                var s, r, o, d, l;
                return function () {
                    o = this, r = arguments, d = Date.now();
                    var e = a && !s;
                    return s = s || setTimeout(n, i), e && (l = t.apply(o, r), o = r = null), l;
                };
            }
            function e(e) {
                X.addEventListener('resize', v(e || function () {
                    Y.log('resized', X.innerWidth, X.innerHeight);
                }, 500));
            }
            function I(e) {
                var i, a = G.fuse_breakpoints, n = e || X.innerWidth;
                return Object.keys(a).forEach(function (e) {
                    var t = a[e];
                    t < n && (!i || n < i) && (i = {
                        size: t,
                        name: e
                    });
                }), i;
            }
            function S() {
                return ie.performance.timing.navigationStart;
            }
            function z() {
                return ae;
            }
            function w(e) {
                return !0 === e ? 0 : e;
            }
            function k(e, t) {
                return t = t.name, e.hasOwnProperty('customLazy') && e.customLazy.hasOwnProperty(t) && !1 !== e.customLazy[t] ? e.customLazy[t] : e.attributes.lazy;
            }
            function _(e, t, i) {
                if (!e)
                    return !1;
                var a, n, s = e.getBoundingClientRect(), r = ie.document.hidden, o = ie.innerWidth || ie.document.documentElement.clientWidth, d = ie.innerHeight || ie.document.documentElement.clientHeight, l = w(i), c = (c = o, a = d, n = l, e = t ? t / 100 : 1, o = (i = s).top, d = i.bottom, l = i.left, t = i.right, s = i.width, i = i.height * e, e *= s, 0 <= o + i + n && 0 <= l + e && d - i <= a && t - e <= c);
                return !r && c;
            }
            function C(e) {
                if (!e)
                    return Z.error('missing parameter fuseSlot');
                e.matched = e.matched || 0, e.matched += 1;
            }
            function P(t) {
                if (!t)
                    return Z.error('missing parameter fuseSlotID');
                if ('string' != typeof t)
                    return Z.error('fuseSlotId should be of type string');
                var i = RegExp(''.concat(t.toLowerCase(), '$'));
                return d(ae.filter(function (e) {
                    return e.id === t || i.test(e.slot.toLowerCase());
                }), 1)[0] || !1;
            }
            function D(e) {
                return e.filter(function (e) {
                    return !ne(e);
                });
            }
            function T() {
                var e = ke.host;
                return e.substring(e.length - 40, e.length);
            }
            function O() {
                var e = ke.pathname;
                return e.substring(e.length - 40, e.length);
            }
            function N() {
                var e = ke.search;
                return e.substring(e.length - 40, e.length);
            }
            function B() {
                for (var e = [], t = ke.pathname.split('/'), i = 0; i < t.length; i += 1)
                    t[i].length && -1 === t[i].indexOf('.') && e.push(t[i]);
                return e;
            }
            function E(e) {
                if (j && j.cmd)
                    return j.cmd.push(e);
                ze.log('googletag or googletag.cmd not exists');
            }
            function L(t) {
                if (j && t) {
                    var e = j.pubads().getSlots();
                    return Array.isArray(t) ? e.filter(function (e) {
                        return 0 <= t.indexOf(e.getSlotElementId());
                    }) : e.filter(function (e) {
                        return e.getSlotElementId() === t;
                    });
                }
            }
            var M, j, W = function () {
                    function t(e) {
                        n(this, t), this.logger = e.logger, this.browserWindow = e.browserWindow, this.consentUIPrompt = e.consentUIPrompt;
                    }
                    return i(t, [
                        {
                            key: 'checkForCCPA',
                            value: function (i) {
                                var a = this;
                                this.browserWindow.__cmp('uspPing', null, function (e, t) {
                                    t && e && e.location && 'ca' === e.location.toLowerCase() ? (a.logger.log('[CONSENT]: CCPA Region'), a.browserWindow.__cmp('getUSPData', 1, function (e, t) {
                                        return t ? void i({
                                            applies: !0,
                                            privacyString: e.uspString
                                        }) : (a.logger.log('[CONSENT]: Failed retrieving USP data use default instead'), i({
                                            applies: !0,
                                            privacyString: '1---'
                                        }));
                                    })) : i({ applies: !1 });
                                });
                            }
                        },
                        {
                            key: 'setGDPRConsentPrompt',
                            value: function () {
                                var e = this;
                                this.consentUIPrompt.setup('Privacy Settings', function () {
                                    e.browserWindow.__cmp('displayConsentUi');
                                });
                            }
                        },
                        {
                            key: 'setCCPAConsentPrompt',
                            value: function () {
                                var e = this;
                                this.consentUIPrompt.setup('Do Not Sell My Data', function () {
                                    e.browserWindow.__cmp('displayUspUi');
                                });
                            }
                        },
                        {
                            key: 'cmpLoaded',
                            value: function (t) {
                                var i = !1;
                                setTimeout(function () {
                                    if (!i)
                                        return t(!1);
                                }, 1000), this.browserWindow.__cmp('ping', 2, function (e) {
                                    return i = !0, e && e.cmpLoaded ? t(!0) : t(!1);
                                });
                            }
                        },
                        {
                            key: 'getConsentData',
                            value: function (i) {
                                var a = this;
                                this.browserWindow.__cmp('getVendorConsents', null, function (t, e) {
                                    e && t ? a.browserWindow.__cmp('getGooglePersonalization', function (e) {
                                        i({
                                            consentReceived: !0,
                                            personalisedAdsConsent: t.purposeConsents && t.purposeConsents[2] && t.purposeConsents[3],
                                            googlePersonalisedAdsConsent: e && e.googlePersonalizationData && 1 === e.googlePersonalizationData.consentValue,
                                            gdprApplies: t.gdprApplies
                                        });
                                    }) : i({
                                        consentReceived: !1,
                                        gdprApplies: t && t.gdprApplies
                                    });
                                });
                            }
                        }
                    ]), t;
                }(), U = function () {
                    function t(e) {
                        n(this, t), this.options = e;
                    }
                    return i(t, [{
                            key: 'getVersion',
                            value: function (e) {
                                var t;
                                switch (e) {
                                case 1:
                                    t = new W(this.options);
                                    break;
                                case 2:
                                    t = new h(this.options);
                                    break;
                                default:
                                    t = new W(this.options);
                                }
                                return t;
                            }
                        }]), t;
                }(), G = t, F = {
                    gpt: {
                        name: 'Google Publisher Tag',
                        url: '//securepubads.g.doubleclick.net/tag/js/',
                        file: 'gpt.js'
                    },
                    prebid: {
                        name: 'Prebid.org',
                        url: G.fuse_cdn || '//cdn.publift.com/fuse/tag/',
                        file: 'prebid.js'
                    },
                    adblock: {
                        name: 'Criteo AdBlock',
                        url: '//static.criteo.net/js/ld/',
                        file: 'publishertag.js'
                    },
                    confiant: {
                        name: 'Confiant',
                        url: '//confiant-integrations.global.ssl.fastly.net/ZVeqITFg3t0RVj7Gh41kEbdx9DA/gpt_and_prebid/',
                        file: 'config.js'
                    },
                    blockthrough: {
                        name: 'Blockthrough',
                        url: '//publift-com.videoplayerhub.com/',
                        file: 'galleryplayer.js'
                    }
                }, V = function () {
                    function t(e) {
                        n(this, t), this.console = e.console, this.logName = e.logName, this.isInDebugMode = e.isInDebugMode;
                    }
                    return i(t, [
                        {
                            key: 'callLogMethod',
                            value: function (e) {
                                if (this.isInDebugMode) {
                                    for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++)
                                        i[a - 1] = arguments[a];
                                    i[0] = '['.concat(this.logName, ']-').concat(i[0]), this.console[e].apply(null, i);
                                }
                            }
                        },
                        {
                            key: 'error',
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                                    t[i] = arguments[i];
                                this.callLogMethod('error', t);
                            }
                        },
                        {
                            key: 'warn',
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                                    t[i] = arguments[i];
                                this.callLogMethod('warn', t);
                            }
                        },
                        {
                            key: 'log',
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                                    t[i] = arguments[i];
                                this.callLogMethod('log', t);
                            }
                        }
                    ]), t;
                }(), R = '2.16.3', H = '2', q = new (function () {
                    function e() {
                        n(this, e);
                        try {
                            this.location = this.getBrowserWindowObject().top.location;
                        } catch (e) {
                            this.location = this.getBrowserWindowObject().location;
                        }
                    }
                    return i(e, [
                        {
                            key: 'getWindowLocation',
                            value: function () {
                                return this.location;
                            }
                        },
                        {
                            key: 'getPackageVersion',
                            value: function () {
                                return R;
                            }
                        },
                        {
                            key: 'getPackageMajorVersion',
                            value: function () {
                                return H;
                            }
                        },
                        {
                            key: 'getEnvironmentType',
                            value: function () {
                                return 'undefined' != typeof module && module.exports ? 'node' : 'browser';
                            }
                        },
                        {
                            key: 'isNodeEnvironment',
                            value: function () {
                                return 'node' === this.getEnvironmentType();
                            }
                        },
                        {
                            key: 'getBrowserWindowObject',
                            value: function () {
                                return window;
                            }
                        },
                        {
                            key: 'getPrebidGlobal',
                            value: function () {
                                return this.getBrowserWindowObject().fusePbjs || (this.getBrowserWindowObject().fusePbjs = { que: [] }), this.getBrowserWindowObject().fusePbjs;
                            }
                        },
                        {
                            key: 'getQueryParam',
                            value: function (t) {
                                return d(this.getWindowLocation().search.split(/[?&]/).filter(function (e) {
                                    return '' !== e;
                                }).map(function (e) {
                                    return e.split('=');
                                }).filter(function (e) {
                                    return e[0] === t;
                                }), 1)[0] || [];
                            }
                        },
                        {
                            key: 'isInDebugMode',
                            value: function () {
                                return this.isNodeEnvironment() || 'true' === this.getQueryParam('fuse_debug')[1];
                            }
                        },
                        {
                            key: 'getMainLogPrefix',
                            value: function () {
                                return 'FUSE';
                            }
                        },
                        {
                            key: 'getAdSlotQuerySelectorElement',
                            value: function () {
                                return 'div';
                            }
                        },
                        {
                            key: 'getTargetAdSlotNodeIdPrefix',
                            value: function () {
                                return 'fuse-slot-';
                            }
                        },
                        {
                            key: 'getTargetAdSlotNodeMainClassName',
                            value: function () {
                                return 'fuse-slot';
                            }
                        },
                        {
                            key: 'getLogger',
                            value: function () {
                                if (this.logger)
                                    return this.logger;
                                var e = this.isInDebugMode();
                                return this.logger = new V({
                                    isInDebugMode: e,
                                    console: this.getBrowserWindowObject().console,
                                    logName: this.getMainLogPrefix()
                                }), this.logger;
                            }
                        }
                    ]), e;
                }())(), J = q.getBrowserWindowObject(), Q = q.getWindowLocation(), Y = q.getLogger(), X = q.getBrowserWindowObject(), K = {
                    watchForBreakpoints: function (t) {
                        var i = X.innerWidth, a = I(i).size;
                        e(function () {
                            i = X.innerWidth;
                            var e = I(i).size;
                            return e !== a ? (a = e, Y.log('Window resized to %spx which crossed a breakpoint: New breakpoint is %spx', i, e), t(!0)) : t(!1);
                        });
                    },
                    setResizeListener: e,
                    getCurrentBreakpoint: I
                }, Z = q.getLogger(), ee = q.getAdSlotQuerySelectorElement(), te = q.getTargetAdSlotNodeMainClassName(), ie = q.getBrowserWindowObject(), ae = JSON.parse(JSON.stringify(G.fuse_slots)), ne = function (e) {
                    return Array.isArray(e) ? 'fluid' === e[0] : 'fluid' === e;
                }, se = function (e, t) {
                    var i;
                    return Z.log('[SLOTS]: Building the fuse slot for '.concat(e.code, ' '), new Date() - S()), t.setAttribute('data-fuse-code', ''.concat(e.code)), t.setAttribute('data-fuse-slot', ''.concat(e.slot)), ie.document.getElementById(e.code) || ((i = ie.document.createElement('div')).setAttribute('id', ''.concat(e.code)), i.className = te, t.appendChild(i)), t;
                }, re = _, oe = function (e, t, i) {
                    return !!t.attributes.hasOwnProperty('lazy') && (!1 !== t.attributes.lazy && !_(e, 50, k(t, i)));
                }, de = function () {
                    for (var e = ie.document.querySelectorAll('div.fuse-custom-skin'), t = 0; t < e.length; t++)
                        e[t].parentNode.removeChild(e[t]);
                }, le = function (e) {
                    return e.map(function (e) {
                        return ne(e) && Array.isArray(e) ? e[0] : e;
                    });
                }, ce = function (t) {
                    var e = K.getCurrentBreakpoint().name, i = d(z().filter(function (e) {
                            return e.id === t;
                        }) || [], 1)[0];
                    return i ? i.sizeMapping && i.sizeMapping[e] ? D(i.sizeMapping[e]) : (Z.warn('Fuse slot "'.concat(t, '" does not have sizemaps configured, sizeless prebid units may act strangely.')), D(i.sizes || [])) : [];
                }, ue = S, pe = function () {
                    return ie.fusetag.que || [];
                }, be = function (e) {
                    var t = ie.document.querySelectorAll(''.concat(ee, '[data-fuse-code="').concat(e, '"]'));
                    return 1 < t.length && Z.warn('There should be only one div with the data-fuse-code of '.concat(e)), t[0];
                }, me = function (e) {
                    e = ie.document.querySelectorAll(''.concat(ee, '[data-fuse="').concat(e, '"]'));
                    return e[e.length - 1];
                }, ge = function (e) {
                    if (e.prebid && e.prebid.enabled && e.prebid.breakpoint_options) {
                        var t = K.getCurrentBreakpoint().name, t = e.prebid.breakpoint_options[t];
                        if (t)
                            return t;
                    }
                    return {
                        enabled: 0 < e.headerbidding,
                        sendAllBids: e && e.prebid && !0 === e.prebid.sendAllBids,
                        timeout: e.headerbidding
                    };
                }, fe = P, ye = function () {
                    return M;
                }, he = function () {
                    return Array.prototype.slice.call(ie.document.querySelectorAll(''.concat(ee, '[data-fuse]')));
                }, xe = k, Ae = function (e) {
                    if (!e)
                        return Z.error('missing parameter fuseSlotNode');
                    var t = e.getAttribute('data-fuse'), i = P(t);
                    return i || Z.warn('[SLOTS]: There is no FuseSlot set up in the account matching the id '.concat(t)), i && (C(i), t = e.getAttribute('data-targeting-key'), e = e.getAttribute('data-targeting-value'), t && t.length && e && e.length && (i.targeting || (i.targeting = {}), i.targeting[t] = e)), i;
                }, ve = function (e) {
                    return M = e;
                }, Ie = function () {
                    return /[E]dge/.test(ie.navigator.userAgent);
                }, Se = F.gpt, ze = q.getLogger(), we = q.getBrowserWindowObject(), ke = q.getWindowLocation();
            function _e(e, t) {
                E(function () {
                    j.pubads().setTargeting(e, t);
                });
            }
            function Ce() {
                var t, i, a;
                _e('fuse_profanity', (t = ke.host, i = ke.pathname, a = 'false', G.fuse_blocked_url && G.fuse_blocked_url.forEach(function (e) {
                    -1 < e.indexOf(t + i) && (a = 'true');
                }), a)), _e('fuse_site', T()), _e('fuse_path', O()), _e('fuse_query', N()), _e('fuse_category', B()), _e('fuse_industry', G.fuse_industry);
                var e = 'false';
                375 <= we.screen.width && (e = 'true'), _e('inskin_yes', e), _e('fuse_uuid', G.fuse_uuid);
            }
            var Pe = Ce, De = function () {
                    we.googletag && we.googletag._loadStarted_ ? ze.log('[LOAD]: 3. GPT v'.concat(j.getVersion(), ' is already on the page, skip loading another copy')) : A(Se, function () {
                        ze.log('[LOAD]: 3. GPT '.concat(we.googletag && we.googletag._loadStarted_ ? 'v'.concat(j.getVersion(), ' is loaded and ready') : 'not loaded')), ze.log('[TIME]: time in ms it took GPT to load', new Date() - ue());
                    });
                }, Te = function (e) {
                    var t, i, a, n, s, r = j.defineSlot(e.slot, e.sizes, e.code), o = Math.ceil(100 * Math.random());
                    return r && (a = r, (n = e).sizeMapping && 0 !== Object.keys(n.sizeMapping).length && (s = j.sizeMapping(), Object.keys(n.sizeMapping).forEach(function (e) {
                        var t = G.fuse_breakpoints[e], i = n.sizeMapping[e];
                        void 0 !== t && (ze.log('[EVENT] Setting breakpoint for slot '.concat(n.slot, ' for size ').concat(e, ' with breakpoint ').concat(t, ' and mapping ').concat(i)), s.addSize([
                            t,
                            0
                        ], le(i)));
                    }), a.defineSizeMapping(s.build())), t = r = a, (i = e).targeting && Object.keys(i.targeting).length && Object.keys(i.targeting).forEach(function (e) {
                        t.setTargeting(e, i.targeting[e]);
                    }), r = t, o = 10 < o ? 'optimized' : o % 10 == 0 ? 'benchmark' : 'exploration'.concat(o % 10), !1 !== G.fuse_settings.adomik && r.setTargeting('publift_mv_testing', o), r.addService(j.pubads())), r;
                }, Oe = function () {
                    return j = we.googletag || (we.googletag = { cmd: [] });
                }, Ne = _e, Be = E, Ee = function (e) {
                    if (j) {
                        e = !e && 0 < j.pubads().getSlots().length ? j.pubads().getSlots()[j.pubads().getSlots().length - 1].getSlotElementId() : e ? e.code : null;
                        return ze.log('[BIDS]: Initialising DFP call at', new Date() - (ye() || ue())), j.display(e);
                    }
                }, Le = function (e) {
                    var t, i = e ? L(e) : null;
                    return ze.log('[BIDS]: Making DFP call for '.concat(e && e.length ? JSON.stringify(e) : 'all units')), !0 === Ie() ? (ze.log('[GC] will trigger GC for iFrames in Edge browser'), t = $('div[data-fuse] iframe'), e = $.Deferred(), t.one('load', function () {
                        try {
                            $(this.contentWindow).empty(), ze.log('[GC]: cleaned iFrame contentWindow');
                        } catch (e) {
                            ze.error('[GC]: error in cleaning iFrame contentWindow => '.concat(e));
                        }
                    }), t.attr('src', 'about:blank'), setTimeout(e.resolve, 5), void e.promise().then(function () {
                        try {
                            CollectGarbage();
                        } catch (e) {
                            ze.error('[GC]: error in CollectGarbage => '.concat(e));
                        }
                        j.cmd.push(function () {
                            j.pubads().refresh(i);
                        });
                    })) : (ze.log('[GC] didn\'t trigger GC for iFrames in non-Edge browser'), j.pubads().refresh(i));
                }, Me = function () {
                    j.pubads().disableInitialLoad(), j.pubads().collapseEmptyDivs(!0), j.pubads().setCentering(!0), j.pubads().enableSingleRequest(), Ce();
                }, je = function (t) {
                    j.pubads().addEventListener('slotRenderEnded', function (e) {
                        ze.log('[BIDS]: Adserver responded '.concat(e.isEmpty ? 'without' : 'with', ' creative for ').concat(e.slot.getSlotElementId())), ze.log('[TIME]: time in ms it took for adserver to respond', new Date() - (ye() || ue())), t({
                            hasCreative: !e.isEmpty,
                            slotId: e.slot.getSlotElementId()
                        });
                    });
                }, We = function () {
                    j.pubads().addEventListener('impressionViewable', function (e) {
                        ze.log('[EVENT]: AD_IMPRESSION_VIEW for '.concat(e.slot.getSlotElementId()), new Date() - (ye() || ue()));
                    });
                }, Ue = function () {
                    we.googletag.enableServices();
                }, Ge = function () {
                    we.googletag.pubads().disableInitialLoad(), we.googletag.pubads().setRequestNonPersonalizedAds(1);
                }, Fe = function (e) {
                    !e || (e = j.defineOutOfPageSlot(e.slot, j.enums.OutOfPageFormat.INTERSTITIAL)) && (e.addService(j.pubads()), j.pubads().disableInitialLoad(), j.enableServices(), j.display(e), j.pubads().refresh([e]));
                }, Ve = function () {
                    function e() {
                        n(this, e);
                    }
                    return i(e, [{
                            key: 'code',
                            value: function (e) {
                                return '1---';
                            }
                        }]), e;
                }(), Re = new (function () {
                    function e() {
                        n(this, e);
                    }
                    return i(e, [
                        {
                            key: 'getCcpaPrivacyStringCoder',
                            value: function () {
                                return new Ve();
                            }
                        },
                        {
                            key: 'getUamPubID',
                            value: function () {
                                return t.fuse_settings.amazonUam && t.fuse_settings.amazonUam.enabled ? t.fuse_settings.amazonUam.pubID : '';
                            }
                        },
                        {
                            key: 'getUamAdServer',
                            value: function () {
                                return 'googletag';
                            }
                        },
                        {
                            key: 'getSco',
                            value: function () {
                                return t.sco;
                            }
                        }
                    ]), e;
                }())(), He = new (function () {
                    function e() {
                        n(this, e);
                    }
                    return i(e, [
                        {
                            key: 'getPackageVersion',
                            value: function () {
                                return q.getPackageVersion();
                            }
                        },
                        {
                            key: 'getPackageMajorVersion',
                            value: function () {
                                return q.getPackageMajorVersion();
                            }
                        },
                        {
                            key: 'isInDebugMode',
                            value: function () {
                                return q.isInDebugMode();
                            }
                        },
                        {
                            key: 'getAdSlotQuerySelectorElement',
                            value: function () {
                                return q.getAdSlotQuerySelectorElement();
                            }
                        },
                        {
                            key: 'getTargetAdSlotNodeIdPrefix',
                            value: function () {
                                return q.getTargetAdSlotNodeIdPrefix();
                            }
                        },
                        {
                            key: 'getBrowserWindowObject',
                            value: function () {
                                return q.getBrowserWindowObject();
                            }
                        },
                        {
                            key: 'getTargetAdSlotNodeMainClassName',
                            value: function () {
                                return q.getTargetAdSlotNodeMainClassName();
                            }
                        },
                        {
                            key: 'getPrebidGlobal',
                            value: function () {
                                return q.getPrebidGlobal();
                            }
                        },
                        {
                            key: 'getLogger',
                            value: function () {
                                return q.getLogger();
                            }
                        },
                        {
                            key: 'getGptSlotRegistry',
                            value: function () {
                                var t = this;
                                return new g({
                                    logger: this.getLogger(),
                                    getMatchedFuseSlot: function (e) {
                                        return fe(e);
                                    },
                                    pushToGoogleTagQueueFunc: function (e) {
                                        return e;
                                    },
                                    destroySlotsFunc: function (e) {
                                        return Be(function () {
                                            t.getBrowserWindowObject().googletag.destroySlots(e);
                                        });
                                    }
                                });
                            }
                        },
                        {
                            key: 'getFuseTag',
                            value: function () {
                                return new m({
                                    logger: this.getLogger(),
                                    targetAdSlotNodeIdPrefix: this.getTargetAdSlotNodeIdPrefix(),
                                    packageVersion: this.getPackageVersion(),
                                    browserWindow: this.getBrowserWindowObject(),
                                    adSlotRegistry: this.getGptSlotRegistry(),
                                    isInDebugMode: this.isInDebugMode()
                                });
                            }
                        },
                        {
                            key: 'getUamPubID',
                            value: function () {
                                return Re.getUamPubID();
                            }
                        },
                        {
                            key: 'getUamAdServer',
                            value: function () {
                                return Re.getUamAdServer();
                            }
                        },
                        {
                            key: 'getSco',
                            value: function () {
                                return Re.getSco();
                            }
                        },
                        {
                            key: 'getAmazonUam',
                            value: function () {
                                return new u({
                                    pubID: this.getUamPubID(),
                                    adServer: this.getUamAdServer(),
                                    logger: this.getLogger(),
                                    browserWindow: this.getBrowserWindowObject(),
                                    sco: this.getSco()
                                });
                            }
                        },
                        {
                            key: 'getCmpVersionLoader',
                            value: function () {
                                return new U({
                                    logger: this.getLogger(),
                                    browserWindow: this.getBrowserWindowObject(),
                                    consentUIPrompt: new b(this.getBrowserWindowObject())
                                });
                            }
                        },
                        {
                            key: 'getStubFunctionsGenerator',
                            value: function () {
                                return new y({
                                    logger: this.getLogger(),
                                    browserWindow: this.getBrowserWindowObject()
                                });
                            }
                        },
                        {
                            key: 'getCmpScriptLoader',
                            value: function () {
                                return new f({ browserWindow: this.getBrowserWindowObject() });
                            }
                        },
                        {
                            key: 'getConsentManger',
                            value: function () {
                                return new p({
                                    browserWindow: this.getBrowserWindowObject(),
                                    logger: this.getLogger(),
                                    versionLoader: this.getCmpVersionLoader(),
                                    stubFunctionsGenerator: this.getStubFunctionsGenerator(),
                                    scriptLoader: this.getCmpScriptLoader(),
                                    consentUIPrompt: new b(this.getBrowserWindowObject())
                                });
                            }
                        }
                    ]), e;
                }())(), qe = He.getLogger(), Je = He.getBrowserWindowObject(), Qe = F.adblock, Ye = {
                    loadAdBlocklLibrary: function () {
                        return A(Qe, function () {
                            qe.log('[LOAD]: 3. Adblock script loaded.'), qe.log('[TIME]: time in ms to load Adblock script', new Date() - ue());
                        });
                    },
                    createAdBlockObj: function () {
                        return Je.Criteo || (Je.Criteo = { events: [] });
                    },
                    buildAdBlockSlots: function (e, t) {
                        var i, a, n, s;
                        0 < t.querySelectorAll('[id^="crt"]').length || e.attributes && e.attributes.adblock && (n = Je.document.createElement('DIV'), i = e.sizes && 0 < e.sizes.length ? ''.concat(e.sizes[0][1], 'px') : '100%', a = {
                            zoneid: Number(e.attributes.adblock),
                            containerid: 'crt-'.concat(e.code),
                            overrideZoneFloor: !1,
                            height: i,
                            callbacksuccess: function (e) {
                                log('[SLOTS]: Adblock slots '.concat(a.containerid, ' loaded')), log('[TIME]: time in ms it took Adblock Slot '.concat(a.containerid, ' to load'), new Date() - ue()), e.target.parentNode.style.display = 'block';
                            }
                        }, n.id = a.containerid, n.className = 'fuse-adblock', t.appendChild(n), n = a, Je.Criteo ? (s = n, Je.Criteo.events.push(function () {
                            qe.log('[SLOTS]: Adblock slots '.concat(s.containerid, ' set up')), Je.Criteo.DisplayAcceptableAdIfAdblocked(s), Je.document.getElementById(s.containerid).style.height = s.height, Je.document.getElementById(s.containerid).style.display = 'none';
                        })) : qe.warn('You need to declare the global Criteo Object first'));
                    }
                }, $e = He.getLogger();
            var Xe = {
                    enable: function () {
                        A(F.blockthrough, function () {
                            $e.log('[LOAD]: 0. Blockthrough tag loaded'), $e.log('[TIME]: time in ms it took Blockthrough tag to load', new Date() - ue());
                        });
                    }
                }, Ke = He.getLogger(), Ze = He.getBrowserWindowObject();
            function et(e) {
                var t = e / 0.835;
                return ot.log('[BIDS]: Adjusting IX bid from Net to Gross from '.concat(e, ' to ').concat(t)), t;
            }
            function tt(e) {
                var t = {};
                return mt(t), t.enableSendAllBids = e && !0 === e.sendAllBids, pt(t, G), gt(t, G), bt(t), ft(t), yt(t, G.sco), t;
            }
            var it = {
                    enable: function () {
                        Ze.confiant = Ze.confiant || {}, A(F.confiant, function () {
                            Ke.log('[LOAD]: 0. Confiant tag loaded'), Ke.log('[TIME]: time in ms it took Confiant tag to load', new Date() - ue());
                        });
                    }
                }, at = function () {
                    function a(e, t) {
                        var i = this;
                        n(this, a), this.log = t, this.registry = {}, e.forEach(function (e) {
                            i.registry[e] = [];
                        });
                    }
                    return i(a, [
                        {
                            key: 'on',
                            value: function (e, t) {
                                return !!this.registry[e] && (this.registry[e].push(t), !0);
                            }
                        },
                        {
                            key: 'off',
                            value: function (e, i) {
                                return !!this.registry[e] && (this.registry[e].forEach(function (e, t) {
                                    e === i && (a = t);
                                }), !(!a && 0 !== a) && (this.registry[e].splice(a, 1), !0));
                                var a;
                            }
                        },
                        {
                            key: 'once',
                            value: function (e, t) {
                                function i() {
                                    t.apply(null, Array.prototype.slice.call(arguments)), a.off(e, i);
                                }
                                var a = this;
                                return a.on(e, i);
                            }
                        },
                        {
                            key: 'emit',
                            value: function (e) {
                                if (!this.registry[e])
                                    return !1;
                                var t = Array.prototype.slice.call(arguments);
                                t.shift(), this.log('[EVENT] '.concat(e, ' triggered with ').concat(this.registry[e].length, ' in the registry')), this.registry[e].forEach(function (e) {
                                    e.apply(null, t);
                                });
                            }
                        }
                    ]), a;
                }(), nt = He.getBrowserWindowObject(), st = {
                    capture: !0,
                    passive: !0
                }, rt = function (i, a, n) {
                    nt.addEventListener('scroll', function e() {
                        var t = K.getCurrentBreakpoint();
                        re(i, null, xe(a, t)) && (xe(a, t) || 0 === xe(a, t)) && (n(), nt.removeEventListener('scroll', e, st));
                    }, st);
                }, ot = He.getLogger(), dt = He.getPackageMajorVersion(), lt = He.getBrowserWindowObject(), ct = He.getPrebidGlobal(), ut = F.prebid, pt = function (e) {
                    'function' != typeof lt.__tcfapi && 'function' != typeof lt.__cmp && !(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).cmp || (e.consentManagement = {
                        gdpr: {
                            cmpApi: 'iab',
                            timeout: 10000
                        },
                        usp: {
                            cmpApi: 'iab',
                            timeout: 100
                        }
                    }, 'function' == typeof lt.__tcfapi ? e.consentManagement.gdpr.defaultGdprScope = !0 : e.consentManagement.gdpr.allowAuctionWithoutConsent = !1, ot.log('[CONSENT]: prebid consent management module in place'));
                }, bt = function (e) {
                    e.userSync = {
                        filterSettings: {
                            iframe: {
                                bidders: '*',
                                filter: 'include'
                            }
                        }
                    };
                }, mt = function (e) {
                    e.priceGranularity = {
                        buckets: [
                            {
                                max: 3,
                                increment: 0.01,
                                precision: 2
                            },
                            {
                                max: 10,
                                increment: 0.1,
                                precision: 2
                            },
                            {
                                max: 50,
                                increment: 1,
                                precision: 2
                            },
                            {
                                max: 100,
                                increment: 10,
                                precision: 2
                            }
                        ]
                    };
                }, gt = function (t, i) {
                    var a;
                    i && i.fuse_settings && i.fuse_settings.responsive && (a = null, t.sizeConfig = [], Object.keys(i.fuse_breakpoints).forEach(function (e) {
                        t.sizeConfig.push({
                            mediaQuery: '(min-width:'.concat(i.fuse_breakpoints[e], 'px)').concat(a ? ' and (max-width: '.concat(a - 1, 'px)') : ''),
                            sizesSupported: i.supported_sizes[e],
                            labels: [e]
                        }), a = i.fuse_breakpoints[e];
                    }));
                }, ft = function (e) {
                    e.bidderSettings = { ix: { bidCpmAdjustment: et } };
                }, yt = function (e, t) {
                    t && (e.schain = {
                        validation: 'strict',
                        config: {
                            ver: '1.0',
                            complete: 1,
                            nodes: [{
                                    asi: t.asi,
                                    sid: t.sellerId,
                                    hp: 1
                                }]
                        }
                    }, e.bidderSettings.schain = e.schain);
                }, ht = {
                    loadPrebidLibrary: function () {
                        if (!ct || !ct.libLoaded) {
                            var e = o({}, ut);
                            return 'true' === x('local_prebid')[1] ? (ot.warn('[LOAD]: local version of prebid in use'), e.url = './') : e.url += ''.concat(dt, '/').concat(G.fuse_id, '/'), x('originId')[1] && (e.file += '?originId=' + x('originId')[1]), A(e, function () {
                                ot.log('[LOAD]: 3. Prebid '.concat(ct && ct.libLoaded ? ''.concat(ct.version, ' is loaded and ready') : 'not loaded')), ot.log('[TIME]: time in ms it took Prebid to load', new Date() - ue()), lt.pbjs && lt.pbjs.libLoaded ? lt.pbjs.renderAd || (lt.pbjs.renderAd = ct.renderAd) : lt.pbjs = ct;
                            });
                        }
                        ot.log('[LOAD]: 3. Prebid '.concat(ct.version, ' is already loaded skip loading it again'));
                    },
                    pushToPrebidQue: function (e) {
                        ct && ct.que && ct.que.push(e);
                    },
                    setPrebidAdUnits: function (e) {
                        var t = ce(e.id);
                        ot.log('[BIDS]: Setting Prebid ad units for '.concat(e.code, ' with sizes ').concat(JSON.stringify(t))), ct.addAdUnits({
                            code: e.code,
                            mediaTypes: { banner: { sizes: t } },
                            bids: e.bids
                        });
                    },
                    getPrebidDefaultConfig: tt,
                    setPrebidConfig: function (e) {
                        var t;
                        return e = e || tt(), ot.log('[BIDS]: Setting Prebid Config'), ct.setConfig(e), (t = G).prebid_analytics && t.prebid_analytics.length && t.prebid_analytics.forEach(function (e, t) {
                            0 !== t && ot.warn('\n          [ANALYTICS]: Having more than one analytics provider active may affect page performance.\n        '), ct.enableAnalytics(e), ot.log('[ANALYTICS]: Analytics enabled for '.concat(e.provider));
                        }), e;
                    }
                };
            var xt = function () {
                    function t(e) {
                        n(this, t), this.browserWindow = e.browserWindow, this.userIdentityGlobal = e.userIdentityGlobal, this.placementId = e.placementId;
                    }
                    return i(t, [
                        {
                            key: 'setup',
                            value: function () {
                                var e, t = this, i = this.browserWindow[this.userIdentityGlobal];
                                i && ('object' === s(a = i) && null !== a) && (i.email || i.phoneNumber || i.emailHashes) ? (e = { placementID: this.placementId }, i.email ? e.email = i.email : i.phoneNumber ? e.phoneNumber = i.phoneNumber : e.emailHashes = i.emailHashes) : e = {
                                    placementID: this.placementId,
                                    storageType: 'localStorage',
                                    detectionType: 'scrapeAndUrl',
                                    cssSelectors: [
                                        'input[type=text]',
                                        'input[type=email]'
                                    ],
                                    detectionSubject: 'all',
                                    urlParameter: 'user_id',
                                    logging: 'debug'
                                };
                                var a = document.createElement('script');
                                a.src = 'https://ats.rlcdn.com/ats.js', a.onload = function () {
                                    t.browserWindow.ats.start(e);
                                };
                                i = this.browserWindow.document.getElementsByTagName('script')[0];
                                i.parentNode.insertBefore(a, i);
                            }
                        },
                        {
                            key: 'configPrebid',
                            value: function (e) {
                                return e.userSync || (e.userSync = {}), e.userSync.userIds = [{
                                        name: 'identityLink',
                                        params: { pid: this.placementId },
                                        storage: {
                                            type: 'cookie',
                                            name: 'idl_env',
                                            expires: 7
                                        }
                                    }], e;
                            }
                        }
                    ]), t;
                }(), At = He.getLogger(), vt = He.getTargetAdSlotNodeIdPrefix(), It = He.getPackageVersion(), St = He.isInDebugMode(), zt = He.getPrebidGlobal(), wt = He.getGptSlotRegistry(), kt = He.getBrowserWindowObject(), _t = He.getAmazonUam(), Ct = He.getConsentManger(), Pt = t, Dt = Pt.fuse_settings;
            Dt.pageTargeting = [];
            var Tt = kt.fusetag || (kt.fusetag = { que: [] });
            Tt.fuseUUID = Pt.fuse_uuid, Tt.initialised = Tt.initialised || !1, Tt.states = Tt.states || [{
                    loaded: !0,
                    ts: Date.now()
                }], St && (Tt.version = It);
            var Ot = {}, Nt = {}, Bt = {}, Et = {}, Lt = 'onTagInitialised', Mt = 'onSlotsInitialised', jt = 'onSlotCreated', Wt = new at([
                    Lt,
                    Mt,
                    jt
                ], function () {
                    return At.log.apply(At, arguments);
                });
            Tt.edgeHtmlMaxAdsRefreshLimit = Dt.edgeHtmlMaxAdsRefreshLimit || 60;
            function Ut() {
                var e = Math.random().toString(16).slice(2);
                return Object.prototype.hasOwnProperty.call(ei, e) ? Ut() : e;
            }
            function Gt(e) {
                ei[e] = {
                    aps: !1,
                    prebid: !1
                };
            }
            function Ft(e) {
                Le(e);
            }
            function Vt(e, t) {
                Dt.prebid.enabled && Dt.amazonUam.enabled ? ei[t].aps && ei[t].prebid && (Ft(e), delete ei[t]) : Ft(e);
            }
            function Rt() {
                return Ot;
            }
            function Ht() {
                return Nt;
            }
            function qt() {
                Object.keys(Bt).forEach(function (e) {
                    return clearInterval(Bt[e]);
                }), Bt = {};
            }
            function Jt(e) {
                var t = Ut();
                Gt(t);
                var i, a = e || Object.keys(Nt), n = ge(Dt);
                At.log('[BIDS]['.concat(t, ']: Going to refresh slots with Prebid options - enabled: ').concat(n.enabled, ' Amazon UAM - enabled: ').concat(Dt.amazonUam.enabled, ' -- timeout: ').concat(n.timeout)), n && n.enabled || Dt.amazonUam.enabled ? (n.enabled && ht.pushToPrebidQue(function () {
                    zt && zt.adUnits && (zt.adUnits = zt.adUnits.map(function (e) {
                        var t = Nt[e.code];
                        if (!t)
                            return e;
                        t = ce(t.id);
                        return e.mediaTypes && e.mediaTypes.banner && (e.mediaTypes.banner.sizes = t), e;
                    })), zt.requestBids({
                        timeout: n.timeout,
                        bidsBackHandler: function (e) {
                            At.log('[BIDS]['.concat(t, ']: Prebid bid response for all'), JSON.stringify(e)), At.log('[TIME]['.concat(t, ']: time it took for Prebid bids to return'), new Date() - (ye() || ue())), zt.setTargetingForGPTAsync(), de(), ei[t].prebid = !0, Vt(a, t);
                        }
                    });
                }), Dt.amazonUam.enabled && Nt && ((i = Object.values(Nt).map(function (e) {
                    return {
                        slotID: e.code,
                        slotName: e.slot,
                        sizes: ce(e.id)
                    };
                }).filter(function (e) {
                    return e.sizes.length;
                })).length && _t.makeBids(i, function (e) {
                    At.log('[BIDS]['.concat(t, ']: UAM slots '), JSON.stringify(i)), At.log('[BIDS]['.concat(t, ']: UAM bid response for all '), JSON.stringify(e)), At.log('[TIME]['.concat(t, ']: time it took for UAM bids to return'), new Date() - (ye() || ue())), ei[t].aps = !0, Vt(a, t);
                }))) : Be(function () {
                    de(), Le(a);
                });
            }
            function Qt(i) {
                var a, n, s, e;
                i && (a = Ut(), Gt(a), At.log('[REFRESH]['.concat(a, ']: Refreshing ').concat(i, ' at: '), new Date() - (ye() || ue())), n = ge(Dt), (s = Nt[i]) && (n && n.enabled || Dt.amazonUam.enabled ? (n.enabled && ht.pushToPrebidQue(function () {
                    var e, t;
                    zt && zt.adUnits && ((e = zt.adUnits[i]) && (t = ce(s.id), e.mediaTypes && e.mediaTypes.banner && (e.mediaTypes.banner.sizes = t), zt.adUnits[i] = e)), zt.requestBids({
                        timeout: n.timeout,
                        adUnitCodes: [i],
                        bidsBackHandler: function (e) {
                            var t;
                            t = i, At.log('[BIDS]['.concat(a, ']: Prebid bid response for ').concat(t), JSON.stringify(e)), At.log('[TIME]['.concat(a, ']: time it took for Prebid bids to return'), new Date() - (ye() || ue())), zt.setTargetingForGPTAsync([t]), ei[a].prebid = !0, Vt(t, a);
                        }
                    });
                }), !Dt.amazonUam.enabled || (e = ce(s.id)).length && (e = [{
                        slotID: s.code,
                        slotName: s.slot,
                        sizes: e
                    }], _t.makeBids(e, function (e) {
                    At.log('[BIDS]['.concat(a, ']: UAM bid response for ').concat(s.code), JSON.stringify(e)), At.log('[TIME]['.concat(a, ']: time it took for UAM bids to return'), new Date() - (ye() || ue())), ei[a].aps = !0, Vt(s, a);
                }))) : Be(function () {
                    Le(i);
                })));
            }
            function Yt(t, e) {
                Bt[t.code] && clearInterval(Bt[t.code]), Bt[t.code] = setInterval(function () {
                    var e = K.getCurrentBreakpoint();
                    Ie() && (Et[t.code] = Et[t.code] || 0, Et[t.code] > Tt.edgeHtmlMaxAdsRefreshLimit || !kt.document.hasFocus()) ? At.log((Et[t.code] > Tt.edgeHtmlMaxAdsRefreshLimit ? 'will skip refreshing ad(code: "'.concat(t.code, '") as it reached Edge browser ads refresh limit of ').concat(Tt.edgeHtmlMaxAdsRefreshLimit, ' at the moment - ') : 'will skip refreshing ad as browser page/tab is NOT active at the moment - ').concat(new Date().toISOString(), '.')) : t.element && re(kt.document.getElementById(t.code) || t.element, 50, xe(t, e)) && (Ie() && (Et[t.code] += 1), Qt(t.code));
                }, 1000 * e);
            }
            function $t(e) {
                e.attributes.refresh ? (At.log('[LOAD]: Setting custom refresh time of '.concat(e.attributes.refresh, ' seconds for ').concat(e.code, ' at: '), new Date() - ue()), Yt(e, e.attributes.refresh)) : 0 === e.attributes.refresh ? At.log('[LOAD]: No refresh timer set for '.concat(e.code, ' at: '), new Date() - ue()) : Dt.refresh && 0 < Dt.refresh ? (At.log('[LOAD]: Setting global refresh time of '.concat(Dt.refresh, ' seconds for ').concat(e.code, ' at: '), new Date() - ue()), Yt(e, Dt.refresh)) : At.log('[LOAD]: No refresh timer exists in account settings.');
            }
            function Xt(e, t) {
                var i = t ? kt.document.getElementById(t) : me(e);
                if (!i)
                    return At.warn('[SLOTS]: Could not find div with data-fuse attribute of '.concat(e));
                if ((t = i.getAttribute('data-fuse-code')) && Ot[t] === i)
                    return At.log('[SLOTS]: '.concat(e, ' has already with been bootstrapped and showing ad with ad slot ID ').concat(t));
                var a = JSON.parse(JSON.stringify(Ae(i)));
                a && (a.code = ''.concat(vt).concat(a.id, '-').concat(a.matched), se(a, i), a.attributes && a.attributes.adblock && Ye.buildAdBlockSlots(a, i), Nt[a.code] = a, Nt[a.code].element = i, Ot[a.code] = i, Be(function () {
                    var e = Te(a);
                    return wt.add(a.id, e), e;
                }), 0 < Dt.headerbidding && ht.pushToPrebidQue(function () {
                    ht.setPrebidAdUnits(a);
                }), Be(function () {
                    Ee(a);
                }), $t(a), Wt.emit(jt, a), Qt(a.code));
            }
            function Kt() {
                At.log('[EVENT]: resetSlots'), ve(new Date()), wt.purgeAll(), Ot = {}, Nt = {}, de(), qt(), Object.keys(Dt.pageTargeting).forEach(function (e) {
                    Be(function () {
                        kt.googletag.pubads().clearTargeting(e.key);
                    });
                }), 0 < Dt.headerbidding && zt && zt.adUnits && (zt.adUnits.length = 0);
            }
            function Zt() {
                At.log('[EVENT]: loadSlots started'), Kt();
                var e = he(), a = [], n = [];
                e.forEach(function (e) {
                    var t, i = Ae(e);
                    i && (i.code || ((i = JSON.parse(JSON.stringify(i))).code = ''.concat(vt).concat(i.id, '-').concat(i.matched)), se(i, e), i.attributes && i.attributes.adblock && Ye.buildAdBlockSlots(i, e), Nt[i.code] = i, Nt[i.code].element = e, Ot[i.code] = e, n.push(i.code), a.push(i), t = K.getCurrentBreakpoint(), oe(e, i, t) ? (At.log('[SLOTS]: Adding lazy listener for '.concat(i.code)), rt(e, i, function () {
                        !function (e) {
                            At.log('[LOAD]: Loading '.concat(e, ' at ').concat(new Date() - (ye() || ue())));
                            var t = be(e).getAttribute('data-fuse-code');
                            t || At.warn('[LOAD]: No fuseCode for fuse-slot-code of '.concat(e, ', this usually means there was an error with initialisation'));
                            var i = Ht()[t];
                            i && (Be(function () {
                                var e = Te(i);
                                return wt.add(i.id, e), e;
                            }), 0 < Dt.headerbidding && ht.pushToPrebidQue(function () {
                                ht.setPrebidAdUnits(i);
                            }), Be(function () {
                                Ee(i);
                            }), Qt(i.code), $t(i));
                        }(i.code);
                    })) : (Be(function () {
                        var e = Te(i);
                        return wt.add(i.id, e), e;
                    }), 0 < Dt.headerbidding && i.bids && 0 < i.bids.length && ht.pushToPrebidQue(function () {
                        ht.setPrebidAdUnits(i);
                    }), Be(function () {
                        Ee(i);
                    }), $t(i)));
                }), Wt.emit(Mt, a), Be(function () {
                    Pe(), Dt.pageTargeting.forEach(function (e) {
                        Ne(e.key, e.value);
                    }), n.length && Jt();
                });
            }
            var ei = {}, St = function () {
                    return JSON.parse(JSON.stringify(Pt));
                }, at = function (e, t) {
                    Tt.initialised ? Xt(e, t) : Tt.onTagInitialised(function () {
                        Xt(e, t);
                    });
                };
            Tt.getAdSlotsById = function (e) {
                if (e && ('string' == typeof e || 'number' == typeof e))
                    return wt.getSlots(''.concat(e));
            }, Tt.setSlotTargetingById = function (e, t, i) {
                !e || 'string' != typeof e && 'number' != typeof e || wt.setSlotTargetingById(e, t, i);
            }, Tt.onSlotRenderEnded = function (e) {
                Be(function () {
                    return je(e);
                });
            }, Tt.onTagInitialised = function (e) {
                Wt.once(Lt, e);
            }, Tt.onSlotsInitialised = function (e) {
                Wt.once(Mt, e);
            }, Tt.onSlotInitialised = function (e) {
                Wt.once(jt, e);
            }, Tt.disableRefresh = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                e && Bt[e] ? (At.log('[REFRESH]: Disabling refresh for '.concat(e)), clearInterval(Bt[e])) : (At.log('[REFRESH]: Disabling refresh for all units'), qt());
            }, Tt.setTargeting = function (i, e) {
                var a = -1;
                Dt.pageTargeting.forEach(function (e, t) {
                    -1 === a && e.key === i && (a = t);
                }), -1 < a ? (Dt.pageTargeting[a].value = e, At.log('[LOAD]: Updating custom targeting for [key: '.concat(i, ', value: ').concat(e, ']'))) : (Dt.pageTargeting.push({
                    key: i,
                    value: e
                }), At.log('[LOAD]: Adding custom targeting for [key: '.concat(i, ', value: ').concat(e, ']'))), Tt.initialised && Be(function () {
                    At.log('[GPT]: Setting targeting for [key: '.concat(i, ', value: ').concat(e, ']')), Ne(i, e);
                });
            }, Tt.getTargeting = function () {
                return Dt.pageTargeting;
            }, Tt.que.push = function (e) {
                if ('function' == typeof e)
                    try {
                        e.call();
                    } catch (e) {
                        At.error('Error processing command :', e.message, e.stack);
                    }
                else
                    At.error('Commands written into fusetag.que.push must be wrapped in a function');
            };
            function ti() {
                Tt.initialised ? At.log('[LOAD]: Fuse tag has been initialised, skip the remaining of the process') : (At.log('[TIME]: time in ms it took the page to load: ', new Date() - ue()), Tt.loaded || (Tt.loaded = !0, pe().forEach(function (e) {
                    if (At.log('[LOAD]: executing functions pushed to Fuse Queue'), 'function' == typeof e)
                        try {
                            e.call(), e.called = !0;
                        } catch (e) {
                            At.error('Error processing command :', e.message, e.stack);
                        }
                    else
                        At.error('Commands written into fusetag.que.push must be wrapped in a function');
                })), At.log('[LOAD]: Calling loadSlots'), Zt(), Wt.emit(Lt), Tt.initialised = !0, Tt.states.push({
                    initialised: !0,
                    ts: Date.now()
                }));
            }
            function ii(e) {
                var t = e.disablePersonalisedAds, e = e.forceDisablePrebid;
                At.log('[INIT]: disablePersonalisedAds is '.concat(t ? 'on' : 'off')), At.log('[INIT]: forceDisablePrebid is '.concat(e ? 'on' : 'off')), t && Be(function () {
                    Ge();
                }), Dt.amazonUam.enabled && (_t.load(), Ct.gdprApplies ? _t.applyGDPR() : Ct.ccpaApplies && _t.applyCCPA(Ct.ccpaPrivacyString), _t.init(ue())), e && (Dt.headerbidding = 0, Dt.prebid && Dt.prebid.breakpoint_options && Object.keys(Dt.prebid.breakpoint_options).forEach(function (e) {
                    Dt.prebid.breakpoint_options[e].enabled = !1;
                })), 0 < Dt.headerbidding && (ht.loadPrebidLibrary(), ht.pushToPrebidQue(function () {
                    var e = Dt.prebid && !0 === Dt.prebid.sendAllBids, e = ht.getPrebidDefaultConfig({ sendAllBids: e });
                    Dt.identity.enabled && Dt.identity.module && (e = Dt.identity.module.configPrebid(e)), ht.setPrebidConfig(e);
                }), Be(function () {
                    kt.googletag.pubads().disableInitialLoad();
                }), At.log('[LOAD]: 2. Headerbidding enabled, settings and '.concat(Dt.headerbidding, 'ms timeout added'))), 0 < Dt.adblock && (Ye.createAdBlockObj(), Ye.loadAdBlocklLibrary(), At.log('[LOAD]: 2. Adblock has been enabled.'));
                var i, a = Pt.fuse_slots.find(function (e) {
                        return e.attributes && !0 === e.attributes.interstitial;
                    });
                Be(function () {
                    Me(), je(function (e) {
                        Nt[e.slotId] ? Nt[e.slotId].hasCreative = e.hasCreative : At.log('[BIDS]: Slot Render Ended Event fired for non fuse units.');
                    }), We(Nt), Ue(), Fe(a);
                }), Dt.responsive && K.watchForBreakpoints(function (e) {
                    e && Jt();
                }), Dt.quickstart ? ti() : i = setInterval(function () {
                    'loading' !== kt.document.readyState && kt.googletag && kt.googletag.apiReady && (clearInterval(i), ti());
                }, 10);
            }
            var ai, ni, si;
            Tt.init = ii, Tt.setDefaultTargeting = Pe, Tt.getRefreshIntervals = function () {
                return JSON.parse(JSON.stringify(Bt));
            }, Tt.getSlots = Ht, Tt.getSettings = St, Tt.getUnits = Rt, Tt.loadSlots = Zt, Tt.loadSlotById = at, Tt.refreshSlots = Jt, Tt.refreshSlotByCode = Qt, Tt.resetSlots = Kt, Tt.getAdSlotsByFuseId = Tt.getAdSlotsById, Tt.getFuseSlots = Ht, Tt.getFuseSettings = St, Tt.getFuseUnits = Rt, Tt.loadFuseSlots = Zt, Tt.resetFuseSlots = Kt, Tt.loadFuseSlotById = at, Tt.setSlotTargetingByFuseId = Tt.setSlotTargetingById, Tt.loaded && At.warn('[LOAD]: Fuse Tag was loaded more than once.'), Dt.confiant && it.enable(), Dt.cmp && Ct.init(), Dt.blockthrough && Xe.enable(), Dt.identity && Dt.identity.enabled && (Dt.identity.module || (Dt.identity.module = new xt({
                browserWindow: kt,
                userIdentityGlobal: Dt.identity.userIdentityGlobal,
                placementId: Dt.identity.placementId
            }), Dt.identity.module.setup())), At.log('[LOAD]: 1. Fuse Tag v'.concat(It, ' is loaded and ready')), At.log('[TIME]: time in ms it took Fuse to load', new Date() - ue()), Dt.wait_cmp_ready && 'function' == typeof __tcfapi ? (ai = !1, At.log('[LOAD]: 3. Wait for CMP to load before start loading GPT'), setTimeout(function () {
                ai || (At.log('[LOAD]: 3. CMP has not been loaded after 3s ignore and continue'), Oe(), De());
            }, 3000), kt.__tcfapi('addEventListener', 2, function (e) {
                ai || (At.log('[LOAD]: 3. CMP has been loaded, going to load GPT script'), Oe(), De(), ai = !0), e && e.listenerId && kt.__tcfapi('addEventListener', 2, function () {
                }, e.listenerId);
            })) : (Oe(), De()), Dt.skip_auto_init ? At.log('[INIT]: auto init is off skip Fuse init') : Dt.cmp ? (At.log('[CONSENT]: Found IAB CMP try to check for CMP status before initiating'), ni = 1, si = setInterval(function () {
                Ct.cmpLoaded(function (e) {
                    if (!e)
                        return ni < 20 ? void (ni += 1) : (At.log('[CONSENT]: Cannot load CMP after 20 seconds, continue as per normal'), clearInterval(si), void ii({
                            disablePersonalisedAds: !1,
                            forceDisablePrebid: !1
                        }));
                    At.log('[CONSENT]: CMP loaded version '.concat(Ct.versionNumber, ', checking for consent')), clearInterval(si);
                    e = function e(t) {
                        var i = t.consentReceived, a = t.personalisedAdsConsent, n = t.googlePersonalisedAdsConsent, t = t.gdprApplies;
                        if (!1 === t) {
                            At.log('[CONSENT]: Not in GDPR region');
                            var s = !1, r = !1;
                            return setTimeout(function () {
                                if (!r)
                                    return At.warn('[CONSENT]: USP API is not responding, continue as if not in CCPA region'), Ct.setNonPrivacyRegionsPrompt(), ii({
                                        disablePersonalisedAds: s,
                                        forceDisablePrebid: s
                                    });
                            }, 1000), void Ct.checkForCCPA(function (e) {
                                return r = !0, e.applies ? (Ct.setCCPAConsentPrompt(), Ct.setCCPA(e.applies), Ct.setPrivacyString(e.privacyString), s = 'Y' === e.privacyString[2].toUpperCase()) : (At.log('[CONSENT]: Not in CCPA region, continue as normal'), Ct.setNonPrivacyRegionsPrompt()), ii({
                                    disablePersonalisedAds: s,
                                    forceDisablePrebid: s
                                });
                            });
                        }
                        if (i || !(ni < 20))
                            return Ct.setGDPR(t), Ct.setGDPRConsentPrompt(), 20 === ni ? ii({
                                disablePersonalisedAds: !1,
                                forceDisablePrebid: !1
                            }) : (At.log('[CONSENT]: '.concat(n ? '[Y]' : '[N]', ' Google Personalised Ads')), At.log('[CONSENT]: '.concat(a ? '[Y]' : '[N]', ' Vendors Personalised Ads')), ii({
                                disablePersonalisedAds: !n,
                                forceDisablePrebid: !a
                            }));
                        setTimeout(function () {
                            ni += 1, Ct.getConsentData(e);
                        }, 1000);
                    };
                    Ct.getConsentData(e);
                });
            }, 1000)) : (At.log('[CONSENT]: No CMP found, continue to init Fuse'), ii(!1));
            He.getBrowserWindowObject();
        });
    }())
}