{
    const $___mock_f28674773787b000 = {};
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
    })($___mock_f28674773787b000);
    (function () {
        try {
            var cX = cX || {};
            cX.callQueue = cX.callQueue || [];
            if (!cX.library) {
                cX.library = {
                    eventReceiverBaseUrl: cX.eventReceiverBaseUrl || 'http' + (location.protocol == 'https:' ? 's://' : '://') + 'comcluster.cxense.com/Repo/rep.html',
                    clearIdUrl: cX.clearIdUrl || 'http' + (location.protocol == 'https:' ? 's://' : '://') + 'comcluster.cxense.com/public/clearid',
                    eventReceiverBaseUrlGif: cX.eventReceiverBaseUrlGif || 'http' + (location.protocol == 'https:' ? 's://' : '://') + 'comcluster.cxense.com/Repo/rep.gif',
                    p1BaseUrl: cX.p1BaseUrl || (location.protocol == 'https:' ? 'https://cdn.cxense.com/sp1.html' : 'http://cdn.cxense.com/p1.html'),
                    clearBaseUrl: cX.clearBaseUrl || (location.protocol === 'https:' ? 'https://cdn.cxense.com/sclear.html' : 'http://cdn.cxense.com/clear.html'),
                    cxenseUserIdUrl: 'https://id.cxense.com/public/user/id',
                    cxenseGlobalIdIframeUrl: location.protocol === 'https:' ? 'https://cdn.cxense.com/sglobal.html' : 'http://cdn.cxense.com/global.html',
                    p1JsUrl: 'https://p1cluster.cxense.com/p1.js',
                    backends: {
                        production: {
                            baseAdDeliveryUrl: 'http://adserver.cxad.cxense.com/adserver/search',
                            secureBaseAdDeliveryUrl: 'https://s-adserver.cxad.cxense.com/adserver/search'
                        },
                        sandbox: {
                            baseAdDeliveryUrl: 'http://adserver.sandbox.cxad.cxense.com/adserver/search',
                            secureBaseAdDeliveryUrl: 'https://s-adserver.sandbox.cxad.cxense.com/adserver/search'
                        }
                    },
                    cdn: {
                        template: {
                            direct: {
                                http: 'http://cdn.cxpublic.com/',
                                https: 'https://cdn.cxpublic.com/'
                            },
                            mapped: {
                                http: 'http://cdn-templates.cxpublic.com/',
                                https: 'https://cdn-templates.cxpublic.com/'
                            }
                        }
                    },
                    csdUrls: {
                        domainScriptUrl: '//csd.cxpublic.com/d/',
                        customerScriptUrl: '//csd.cxpublic.com/t/'
                    },
                    dmpPushUrl: 'https://comcluster.cxense.com/dmp/push?callback={{callback}}',
                    clientStorageUrl: 'https://clientstorage.cxense.com',
                    tsridUrl: 'https://tsrid.cxense.com/lookup?callback={{callback}}',
                    userSegmentUrl: 'https://api.cxense.com/profile/user/segment?callback={{callback}}',
                    cookieSyncRUrl: 'csyn-r.cxense.com',
                    publicWidgetDataUrl: 'http' + (location.protocol == 'https:' ? 's' : '') + '://api.cxense.com/public/widget/data',
                    emptyWidgetUrl: 'http' + (location.protocol == 'https:' ? 's://' : '://') + 'cdn.cxense.com/empty.html',
                    consentClasses: [
                        'pv',
                        'segment',
                        'ad',
                        'recs'
                    ],
                    consentClassesV2: [
                        'geo',
                        'device'
                    ],
                    denyWithoutConsent: {
                        sendPageViewEvent: 'pv',
                        sendEvent: 'pv',
                        getUserSegmentIds: 'segment',
                        insertAdSpace: 'ad',
                        insertMultipleAdSpaces: 'ad',
                        addExternalId: 'pv',
                        sync: 'ad'
                    },
                    cleanUpGlobalIds: ['cx:3s61fgeujyscw1v6260r8lm9fk:15uhnb7lrlef8'],
                    initializePage: function () {
                        const $___old_2c6f4350b71739d2 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_2c6f4350b71739d2)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                var cxOptions = cX.options || {};
                                this.m_rnd = this._randomString();
                                this.m_widgetSpecs = {};
                                this.clearCustomParameters();
                                this.m_previousPageViewReport = null;
                                this.m_p1Complete = false;
                                this.m_previousSegmentReport = [];
                                this.m_scriptStartTime = new Date().getTime();
                                this.m_activityState = {
                                    parentMetrics: undefined,
                                    prevActivityTime: new Date().getTime(),
                                    prevTime: new Date().getTime(),
                                    exitLink: '',
                                    activeTime: 0,
                                    prevScreenX: 0,
                                    prevScreenY: 0,
                                    maxViewLeft: 0,
                                    maxViewTop: 0,
                                    prevScrollLeft: 0,
                                    prevScrollTop: 0,
                                    currScrollLeft: 0,
                                    currScrollTop: 0,
                                    prevWindowWidth: 0,
                                    prevWindowHeight: 0,
                                    scrollDepthPercentage: 0,
                                    scrollDepthPixels: 0
                                };
                                this.m_atfr = null;
                                this.m_externalUserIds = [];
                                this.m_documentSizeRequestedFromChild = false;
                                this.m_usesConsent = !!cxOptions.consent || false;
                                this.m_usesSecureCookies = !!cxOptions.secureCookies || true;
                                this.m_usesIabConsent = !!cxOptions.iab || false;
                                this.m_consentVersion = cxOptions.consentVersion ? cxOptions.consentVersion : 1;
                                this.m_thirdPartyIds = typeof cxOptions.thirdPartyIds === 'boolean' ? cxOptions.thirdPartyIds : true;
                                this._requireTcf20(!!cxOptions.tcf20);
                                if (cxOptions.tcf20Restrictions) {
                                    this.setRestrictionsToConsentClasses(cXOptions.tcf20Restrictions);
                                }
                                if (cxOptions.iab) {
                                    this.setupIabCmp();
                                }
                                this.m_compatModeActive = !!cxOptions.compat;
                                this.m_compatMode = cxOptions.compat || {};
                                var c1xOptions = this.m_compatMode.c1x || {};
                                this.m_c1xTpWait = c1xOptions.wait || 0;
                                this.m_compatPvSent = '';
                                this.m_compatSpaInitialPvState = {
                                    pvSent: false,
                                    secondPvAttempted: false
                                };
                                window.removeEventListener('beforeunload', this._activityEventPush);
                                this.m_activityEvents = !!cxOptions.activityEvents || false;
                                if (this.m_activityEvents) {
                                    this.requireActivityEvents();
                                }
                                try {
                                    if (this.hasLocalStorage()) {
                                        this.m_atfr = localStorage.getItem('_cX_atfr');
                                        localStorage.removeItem('_cX_atfr');
                                        if (typeof this.m_atfr !== 'string' || this.m_atfr[0] !== '&') {
                                            this.m_atfr = null;
                                        }
                                    }
                                } catch (e) {
                                }
                                try {
                                    var spaArgs = this.m_spaRecsClickUrl ? this.decodeUrlEncodedNameValuePairs(this.m_spaRecsClickUrl.split('?')[1] || '') : {};
                                    var allArgs = this.combineArgs(this.parseUrlArgs(), this.parseHashArgs(), spaArgs);
                                    var customParametersFromUrl = {};
                                    for (var arg in allArgs) {
                                        if (allArgs.hasOwnProperty(arg) && arg.indexOf('cx_') === 0) {
                                            customParametersFromUrl[arg.substr(3)] = allArgs[arg];
                                        }
                                    }
                                    this.setCustomParameters(customParametersFromUrl);
                                } catch (e) {
                                }
                                this.m_isSpaRecsDestination = !!this.m_spaRecsClickUrl;
                                this.m_spaRecsClickUrl = null;
                                this._delegatedSendApve = this.createDelegate(this, this._sendApve);
                                this._initializeUnloadHandler();
                                if (this.isFirefox() || this.isEdge()) {
                                    cX.library.onP1 = cX.library.onFFP1;
                                }
                                this._setupPreconfiguredActions(cxOptions);
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_2c6f4350b71739d2)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_2c6f4350b71739d2));
                        }
                    },
                    _setupPreconfiguredActions: function (cxOptions) {
                        if (cxOptions.siteId) {
                            this.m_siteId = cxOptions.siteId;
                        }
                        if (cxOptions.customParameters || cxOptions.externalIds)
                            cxOptions.pageView = true;
                        if (cxOptions.randomId) {
                            this.m_rnd = '' + cxOptions.randomId;
                        }
                        if (cxOptions.customEventAttributes) {
                            this.setEventAttributes(cxOptions.customEventAttributes);
                        }
                        if (this.m_siteId !== '0' && cX.callQueue !== undefined) {
                            if (cxOptions.customParameters)
                                cX.callQueue.push([
                                    'setCustomParameters',
                                    cxOptions.customParameters
                                ]);
                            if (cxOptions.externalIds) {
                                for (var i = 0; i < cxOptions.externalIds.length; i++) {
                                    cX.callQueue.push([
                                        'addExternalId',
                                        cxOptions.externalIds[i]
                                    ]);
                                }
                            }
                            if (cxOptions.pageView)
                                cX.callQueue.push([
                                    'sendPageViewEvent',
                                    typeof cxOptions.pageView === 'object' ? cxOptions.pageView : {}
                                ]);
                            if (cxOptions.cookieSyncs) {
                                for (var i = 0; i < cxOptions.cookieSyncs.length; i++) {
                                    cX.callQueue.push([
                                        'sync',
                                        cxOptions.cookieSyncs[i]
                                    ]);
                                }
                            }
                            if (cxOptions.segments) {
                                for (var i = 0; i < cxOptions.segments.length; i++) {
                                    cX.callQueue.push([
                                        'getUserSegmentIds',
                                        cxOptions.segments[i]
                                    ]);
                                }
                            }
                        }
                    },
                    afterInitializePage: function () {
                        this._cleanUpIncorrectGlobals();
                    },
                    _cleanUpIncorrectGlobals: function cleanUpIncorrectGlobals() {
                        if (this.m_siteId === '0') {
                            setTimeout(this.createDelegate(this, cleanUpIncorrectGlobals, 1));
                            return;
                        }
                        for (var i = 0; i < this.cleanUpGlobalIds.length; i++) {
                            if (this._localCxenseUserId() === this.cleanUpGlobalIds[i] || this._localCxenseUserId() === encodeURIComponent(this.cleanUpGlobalIds[i])) {
                                this._localCxenseUserId('');
                                if (this.getUserId(false)) {
                                    this._cxenseUserIdRequest(this.getUserId(false));
                                }
                                return;
                            }
                        }
                    },
                    _initializeUnloadHandler: function () {
                        try {
                            this.removeEventListener(window, 'beforeunload', this._delegatedSendApve);
                            if (this.m_usesConsent && (this.allUserConsents() || {}).pv !== 'true') {
                                this.addEventListener(window, 'beforeunload', this._delegatedSendApve);
                            }
                        } catch (e) {
                        }
                    },
                    requireConsent: function (version) {
                        this.m_usesConsent = true;
                        if (version)
                            this.m_consentVersion = version;
                        this._initializeUnloadHandler();
                    },
                    setupTcfApi: function () {
                        if (this.m_usesTcf20Consent) {
                            this.createDelegate(this, this.Tcf20.run)();
                        }
                    },
                    requireTcf20: function () {
                        this._requireTcf20(true);
                    },
                    _requireTcf20: function (require) {
                        this.m_usesTcf20Consent = require;
                        if (this.m_usesTcf20Consent) {
                            this.requireConsent(2);
                            this.setupTcfApi();
                        }
                    },
                    isConsentRequired: function () {
                        return !!this.m_usesConsent;
                    },
                    setConsent: function (flags, options) {
                        try {
                            var rerunCallQueue = false;
                            if (typeof options === 'undefined') {
                                rerunCallQueue = false;
                            } else {
                                rerunCallQueue = options.runCallQueue;
                            }
                            var flagsAll = this._applyObject({}, this.allUserConsents() || {});
                            flagsAll = this._applyObject(flagsAll, flags);
                            var flagSerialized = this._encodeUrlEncodedNameValuePairs(flagsAll);
                            if (this.hasLocalStorage()) {
                                window.localStorage.setItem('cX_cons', flagSerialized);
                            } else {
                                this.setCookie('cX_cons', flagSerialized, null, '/', this.getTopLevelDomain(), true);
                            }
                            if (flags && rerunCallQueue && this.Object.some(flags, function (value) {
                                    return value === true;
                                })) {
                                var currCall = null;
                                while (currCall = this._consentCallQueue.shift()) {
                                    cX.callQueue.push(currCall);
                                }
                            }
                            if (this._consentActiveAndAvailableFor('pv')) {
                                this.removeEventListener(window, 'beforeunload', this._delegatedSendApve);
                            }
                        } catch (e) {
                        }
                    },
                    allUserConsents: function () {
                        var flags;
                        if (this.hasLocalStorage() && window.localStorage.getItem('cX_cons')) {
                            flags = this.decodeUrlEncodedNameValuePairs(window.localStorage.getItem('cX_cons'));
                        } else if (this.getCookie('cX_cons')) {
                            flags = this.decodeUrlEncodedNameValuePairs(this.getCookie('cX_cons'));
                        }
                        return flags;
                    },
                    setAllConsentsTo: function (value) {
                        this.setConsent({
                            pv: value,
                            ad: value,
                            segment: value,
                            recs: value,
                            device: value,
                            geo: value
                        }, { runCallQueue: value });
                    },
                    _allUserConsentsList: function () {
                        var consents = this.allUserConsents();
                        var consentForPv = ['y'];
                        this.Object.forEach(consents, function (value, key) {
                            if (value === 'true') {
                                consentForPv.push(key);
                            }
                        }, this);
                        return consentForPv;
                    },
                    _allUserConsentsString: function () {
                        return this._allUserConsentsList().join(',');
                    },
                    hasConsent: function (type) {
                        if (this.m_consentVersion !== 2 && this._isV2Consent(type))
                            return true;
                        var flags = cX.allUserConsents() || {};
                        return flags[type] === 'true';
                    },
                    _isV2Consent: function (type) {
                        return this.consentClassesV2.find(function (v2consent) {
                            return v2consent === type;
                        });
                    },
                    _consentActiveAndAvailableFor: function (type) {
                        return !this._doesNotHaveConsent(type);
                    },
                    _doesNotHaveConsent: function (type) {
                        return this.m_usesConsent && !this.hasConsent(type);
                    },
                    _cmpFunc: function (funcName, value, callback) {
                        if (window.__cmp) {
                            window.__cmp(funcName, value, callback);
                        } else {
                            setTimeout(this.createDelegate(this, function () {
                                this._cmpFunc(funcName, value, callback);
                            }), 10);
                        }
                    },
                    _iabToConsentClass: {
                        2: 'segment',
                        3: 'ad',
                        4: 'recs',
                        5: 'pv'
                    },
                    setupIabCmp: function (opts) {
                        var options = opts || {};
                        this.requireConsent();
                        this._cmpFunc('getVendorConsents', [412], this.createDelegate(this, function (result) {
                            try {
                                var hasFullConsent = result.vendorConsents['412'];
                                if (!hasFullConsent) {
                                    this.setConsent({
                                        id: false,
                                        pv: false,
                                        ad: false,
                                        segment: false,
                                        recs: false
                                    });
                                    this.clearIds();
                                    return;
                                }
                                var consentFlags = {};
                                for (var id in result.purposeConsents) {
                                    var consentClass = this._iabToConsentClass[id];
                                    var consentChoice = result.purposeConsents[id];
                                    consentFlags[consentClass] = consentChoice;
                                }
                                this.setConsent(consentFlags, options);
                                if (this._doesNotHaveConsent('pv')) {
                                    this.setConsent({
                                        pv: false,
                                        ad: false,
                                        segment: false,
                                        recs: false
                                    });
                                    this.clearIds();
                                }
                            } catch (e) {
                            }
                        }));
                    },
                    _waitForTcfApi: function (funcName, callback) {
                        if (window.__tcfapi) {
                            window.__tcfapi(funcName, 2, callback, [412]);
                        } else {
                            setTimeout(cX.createDelegate(this, function () {
                                this._waitForTcfApi(funcName, callback);
                            }), 10);
                        }
                    },
                    setRestrictionsToConsentClasses: function (restrictions) {
                        cX.library.Tcf20._restrictionOverrides = restrictions;
                    },
                    Tcf20: {
                        vendorId: 412,
                        restrictionToConsentClass: {
                            pv: [
                                1,
                                9,
                                10
                            ],
                            ad: [
                                2,
                                3,
                                4,
                                7,
                                9
                            ],
                            recs: [
                                1,
                                5,
                                6,
                                8
                            ],
                            segment: [
                                2,
                                3,
                                4,
                                7,
                                9
                            ]
                        },
                        _restrictionOverrides: {},
                        specialFeatureToConsentClass: {
                            device: [1],
                            geo: [2]
                        },
                        cleanUpRestriction: function (restrictions, size) {
                            var restrictionsClean = {};
                            for (var i = 1; i <= size; i++) {
                                if (typeof restrictions[i.toString()] !== 'undefined') {
                                    restrictionsClean[i.toString()] = restrictions[i.toString()];
                                } else {
                                    restrictionsClean[i.toString()] = false;
                                }
                            }
                            return restrictionsClean;
                        },
                        getNotAllowedConsents: function (publisherRestrictions, purposeConsents, specialFeatureOptIns) {
                            var notAllowedRestriction = [];
                            var purposeConsentsClean = cX.library.Tcf20.cleanUpRestriction(purposeConsents, 10);
                            var specialFeatureOptInsClean = cX.library.Tcf20.cleanUpRestriction(specialFeatureOptIns, 2);
                            for (var consentClass in cX.library.Tcf20.restrictionToConsentClass) {
                                var consentClassRestrictions = cX.library.Tcf20.restrictionToConsentClass[consentClass];
                                if (cX.library.Tcf20._restrictionOverrides[consentClass]) {
                                    consentClassRestrictions = cX.library.Tcf20._restrictionOverrides[consentClass];
                                }
                                for (var restriction in publisherRestrictions) {
                                    if (consentClassRestrictions.indexOf(parseInt(restriction)) >= 0 && publisherRestrictions[restriction][412] === 0) {
                                        notAllowedRestriction.push(consentClass);
                                    }
                                }
                                for (var consent in purposeConsentsClean) {
                                    if (!purposeConsentsClean[consent] && consentClassRestrictions.indexOf(parseInt(consent)) > -1) {
                                        notAllowedRestriction.push(consentClass);
                                    }
                                }
                            }
                            if (!specialFeatureOptInsClean['1'])
                                notAllowedRestriction.push('geo');
                            if (!specialFeatureOptInsClean['2'])
                                notAllowedRestriction.push('device');
                            return notAllowedRestriction;
                        },
                        run: function _runTcfApi(callback) {
                            cX.library._waitForTcfApi('getTCData', cX.library.createDelegate(cX.library, function (tcData, success) {
                                if (!success) {
                                    callback(null, false);
                                    return;
                                }
                                if (!tcData || tcData.eventStatus === 'cmpuishown') {
                                    setTimeout(function () {
                                        cX.library.Tcf20.run(callback);
                                    }, 1000);
                                    return;
                                }
                                if (!tcData.gdprApplies) {
                                    this.setAllConsentsTo(true);
                                    if (callback)
                                        callback(tcData);
                                    return;
                                }
                                if (!tcData.vendor.consents['412'] || !tcData.vendor.consents[412]) {
                                    this.setAllConsentsTo(false);
                                    if (callback)
                                        callback(tcData);
                                    return;
                                }
                                var notAllowedConsents = cX.library.Tcf20.getNotAllowedConsents(tcData.publisher ? tcData.publisher.restrictions || {} : {}, tcData.purpose.consents, tcData.specialFeatureOptins);
                                this.setConsent({
                                    pv: notAllowedConsents.indexOf('pv') === -1,
                                    ad: notAllowedConsents.indexOf('ad') === -1,
                                    recs: notAllowedConsents.indexOf('recs') === -1,
                                    segment: notAllowedConsents.indexOf('segment') === -1,
                                    device: notAllowedConsents.indexOf('device') === -1,
                                    geo: notAllowedConsents.indexOf('geo') === -1
                                }, { runCallQueue: true });
                                if (callback) {
                                    callback(tcData);
                                }
                            }));
                        }
                    },
                    addCustomerScript: function (csId, asAsync) {
                        if (typeof csId !== 'string') {
                            return;
                        }
                        var shouldAsync = typeof asAsync === 'boolean' ? asAsync : true;
                        var domainSrc = this.csdUrls.domainScriptUrl + this.getTopLevelDomain() + '.js';
                        if (!document.getElementById('csd_domainScript')) {
                            this.loadScript(domainSrc, shouldAsync, 'UTF-8', 'csd_domainScript');
                        }
                        if (!document.getElementById('cs_' + csId)) {
                            this.loadScript(this.csdUrls.customerScriptUrl + csId + '.js', shouldAsync, 'UTF-8', 'cs_' + csId);
                        }
                    },
                    m_accountId: '0',
                    m_siteId: '0',
                    m_prevLocationHash: location.hash,
                    m_rnd: 0,
                    m_widgetSpecs: {},
                    m_knownMessageSources: [],
                    m_customParameters: [],
                    m_rawCustomParameters: {},
                    m_scriptStartTime: new Date().getTime(),
                    m_activityState: null,
                    m_atfr: null,
                    m_externalUserIds: [],
                    m_isSpaRecsDestination: false,
                    m_spaRecsClickUrl: null,
                    m_activityEvents: false,
                    m_clientStorage: {
                        messageContexts: {},
                        messageQueue: [],
                        iframeEl: null,
                        iframeIsLoaded: false,
                        iframeOrigin: 'https://clientstorage.cxense.com',
                        iframePath: '/clientstorage_v2.html'
                    },
                    m_globalIdLoading: {
                        globalIdIFrameEl: null,
                        globalIdIFrameElLoaded: false
                    },
                    _createCommsIFrame: function (args) {
                        var iframeEl = document.createElement('iframe');
                        if (args.onloadHandler) {
                            this.addEventListener(iframeEl, 'load', args.onloadHandler);
                        }
                        if (args.id) {
                            iframeEl.id = args.id;
                            iframeEl.name = args.id;
                        }
                        iframeEl.width = 0;
                        iframeEl.height = 0;
                        iframeEl.scrolling = 'no';
                        iframeEl.frameBorder = 0;
                        iframeEl.src = args.src;
                        iframeEl.style.display = 'none';
                        (document.getElementById(args.targetElementId || 'cX-root') || document.body).appendChild(iframeEl);
                        return iframeEl;
                    },
                    _initClientStorageIFrame: function () {
                        if (!this.m_clientStorage.iframeEl) {
                            this.m_clientStorage.iframeEl = this._createCommsIFrame({
                                src: this.m_clientStorage.iframeOrigin + this.m_clientStorage.iframePath,
                                onloadHandler: this.createDelegate(this, function () {
                                    this.m_clientStorage.iframeIsLoaded = true;
                                    var encodedMessage;
                                    while (encodedMessage = this.m_clientStorage.messageQueue.shift()) {
                                        try {
                                            this.m_clientStorage.iframeEl.contentWindow.postMessage(encodedMessage, this.m_clientStorage.iframeOrigin);
                                        } catch (e) {
                                            try {
                                                var message = this.decodeUrlEncodedNameValuePairs(encodedMessage);
                                                if (message.id) {
                                                    var context = this.m_clientStorage.messageContexts[message.id];
                                                    if (context.error) {
                                                        context.error('PostMessageError: ' + e);
                                                    }
                                                }
                                            } catch (f) {
                                            }
                                        }
                                    }
                                })
                            });
                        }
                    },
                    _handleClientStorage: function (object) {
                        var context = this.m_clientStorage.messageContexts[object.id];
                        if (context) {
                            var value = typeof object.value === 'undefined' ? null : object.value;
                            if (object.result !== 'OK') {
                                if (context.error) {
                                    context.error(object.result);
                                }
                            } else {
                                if (context.success) {
                                    context.success(value);
                                }
                            }
                            this.m_clientStorage.messageContexts[object.id] = undefined;
                        }
                    },
                    _sendClientStorageMessage: function (message, context) {
                        if (context && (context.error || context.success)) {
                            message.id = this._randomString();
                            this.m_clientStorage.messageContexts[message.id] = context;
                        }
                        if (this.hasLocalStorage() && this.hasPostMessage()) {
                            this._initClientStorageIFrame();
                            var encodedMessage = this._encodeUrlEncodedNameValuePairs(message);
                            if (this.m_clientStorage.iframeIsLoaded) {
                                this.m_clientStorage.iframeEl.contentWindow.postMessage(encodedMessage, this.m_clientStorage.iframeOrigin);
                            } else {
                                this.m_clientStorage.messageQueue.push(encodedMessage);
                            }
                        } else {
                            if (context && context.error) {
                                context.error('MissingPostMessageOrLocalStorage');
                            }
                        }
                    },
                    setClientStorageVariable: function (namespace, name, value, context) {
                        var message = {
                            method: 'clientStorageSet',
                            namespace: namespace,
                            name: name,
                            value: '' + value
                        };
                        if (context && context.allow) {
                            message.allow = context.allow;
                        }
                        if (context && context.deny) {
                            message.deny = context.deny;
                        }
                        return this._sendClientStorageMessage(message, context);
                    },
                    getClientStorageVariable: function (namespace, name, context) {
                        return this._sendClientStorageMessage({
                            method: 'clientStorageGet',
                            namespace: namespace,
                            name: name
                        }, context);
                    },
                    removeClientStorageVariable: function (namespace, name, context) {
                        return this._sendClientStorageMessage({
                            method: 'clientStorageRemove',
                            namespace: namespace,
                            name: name
                        }, context);
                    },
                    setSiteId: function (siteId) {
                        this.m_siteId = siteId;
                    },
                    getSiteId: function () {
                        return this.m_siteId;
                    },
                    setAccountId: function (accountId) {
                        this.m_accountId = accountId;
                    },
                    setGeoPosition: function (latitude, longitude) {
                        this.m_plat = latitude;
                        this.m_plon = longitude;
                    },
                    addExternalId: function (params) {
                        if (this._doesNotHaveConsent('pv'))
                            return;
                        if (!params.id || typeof params.id !== 'string' || cX.Array.some([
                                'null',
                                'undefined',
                                '[object Object]',
                                'false',
                                'true',
                                'NaN',
                                '0'
                            ], function (t) {
                                return params.id === t;
                            })) {
                            return;
                        }
                        var isDuplicate = this.Array.some(this.m_externalUserIds, function (externalId) {
                            return params.id === externalId.id && params.type === externalId.type;
                        });
                        if (!isDuplicate && this.m_externalUserIds.length < 5) {
                            if (('' + params.id).length <= 64 && ('' + params.type).length <= 10) {
                                this.m_externalUserIds.push(params);
                            }
                        }
                    },
                    _getExternalIdsAsUrlParameters: function () {
                        var result = '';
                        this.Array.forEach(this.m_externalUserIds, function (externalId, i) {
                            result += '&eid' + i + '=' + encodeURIComponent('' + externalId.id);
                            result += '&eit' + i + '=' + encodeURIComponent('' + externalId.type);
                        });
                        return result;
                    },
                    setCustomParameters: function (parameters, prefix) {
                        if (typeof parameters !== 'object' || parameters === null) {
                            return;
                        }
                        if (typeof prefix === 'undefined') {
                            prefix = '';
                        }
                        var key, value;
                        for (key in parameters) {
                            if (parameters.hasOwnProperty(key)) {
                                value = parameters[key];
                                if (value === undefined) {
                                    continue;
                                }
                                key = prefix + (key.length > 20 ? key.substr(0, 20) : key);
                                this.m_rawCustomParameters[key] = value;
                                if (this.isArray(value)) {
                                    value = value.slice(0, 10);
                                    for (var i = 0; i < value.length; i++) {
                                        value[i] = '' + value[i];
                                    }
                                    value = value.sort().join(',');
                                } else {
                                    value = '' + value;
                                }
                                var newCustomParameter = 'cp_' + encodeURIComponent(key) + '=' + encodeURIComponent(value);
                                if (!this.Array.some(this.m_customParameters, function (existingCustomParameter) {
                                        return newCustomParameter === existingCustomParameter;
                                    })) {
                                    this.m_customParameters.push(newCustomParameter);
                                }
                            }
                        }
                    },
                    clearCustomParameters: function () {
                        this.m_customParameters = [];
                        this.m_rawCustomParameters = {};
                    },
                    setRetargetingParameters: function (parameters) {
                        this.setCustomParameters(parameters, 't_');
                    },
                    setUserProfileParameters: function (parameters) {
                        this.setCustomParameters(parameters, 'u_');
                    },
                    startSessionAnnotation: function (newAnnotations) {
                        this._setSessionAnnotations(this.combineArgs(this._getSessionAnnotations(), newAnnotations));
                    },
                    stopSessionAnnotation: function (removeAnnotations) {
                        var currentAnnotations = this._getSessionAnnotations();
                        var newAnnotations = {};
                        for (var annotationName in currentAnnotations) {
                            if (currentAnnotations.hasOwnProperty(annotationName)) {
                                var currentAnnotationValue = currentAnnotations[annotationName];
                                var removeAnnotationValue = removeAnnotations[annotationName];
                                if (typeof currentAnnotationValue === 'string') {
                                    if (typeof removeAnnotationValue === 'undefined' || removeAnnotationValue !== null && removeAnnotationValue !== currentAnnotationValue) {
                                        newAnnotations[annotationName] = currentAnnotationValue;
                                    }
                                }
                            }
                        }
                        this._setSessionAnnotations(newAnnotations);
                    },
                    stopAllSessionAnnotations: function () {
                        this._setSessionAnnotations({});
                    },
                    _getSessionAnnotations: function () {
                        const $___old_6808bd4f13c73eb5 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                        try {
                            if ($___old_6808bd4f13c73eb5)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f28674773787b000.sessionStorage));
                            return function () {
                                var annotations = {};
                                if (this.hasSessionStorage()) {
                                    var annotationsString = sessionStorage.getItem('_cX_SA');
                                    if (annotationsString) {
                                        annotations = this.decodeUrlEncodedNameValuePairs(annotationsString);
                                    }
                                }
                                return annotations;
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_6808bd4f13c73eb5)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___old_6808bd4f13c73eb5));
                        }
                    },
                    _setSessionAnnotations: function (annotations) {
                        if (this.hasSessionStorage()) {
                            sessionStorage.setItem('_cX_SA', this._encodeUrlEncodedNameValuePairs(annotations));
                        }
                    },
                    _isInternalRequest: function () {
                        try {
                            return null != navigator.userAgent.match(/cXense/i);
                        } catch (e) {
                            return false;
                        }
                    },
                    _isTemplateCdnUrl: function (url) {
                        var t = this.cdn.template;
                        var cdnBaseUrls = [
                            t.direct.http,
                            t.direct.https,
                            t.mapped.http,
                            t.mapped.https
                        ];
                        url = url.toLowerCase();
                        return cX.Array.some(cdnBaseUrls, function (cdnBaseUrl) {
                            return url.indexOf(cdnBaseUrl.replace(/^https?/, '')) > -1;
                        });
                    },
                    isRecsDestination: function (locationHref, documentReferrer) {
                        locationHref = '' + (locationHref || location.href);
                        documentReferrer = '' + (documentReferrer || document.referrer);
                        return !!(locationHref.indexOf('cxrecs_s') > -1 || documentReferrer.match(/cdn\.cxpublic\.com\/generic_v[0-9]+\.html/)) || this.m_isSpaRecsDestination;
                    },
                    isSafari: function () {
                        try {
                            return !!(navigator.userAgent.match(/Safari/) && !navigator.userAgent.match(/Android|Chrome|bot|link/));
                        } catch (e) {
                            return false;
                        }
                    },
                    isFirefox: function () {
                        return !!navigator.userAgent.match(/Firefox/);
                    },
                    isIE6Or7: function () {
                        try {
                            return navigator.appName === 'Microsoft Internet Explorer' && (navigator.userAgent.indexOf('MSIE 6.') > -1 || navigator.userAgent.indexOf('MSIE 7.') > -1);
                        } catch (e) {
                            return false;
                        }
                    },
                    isEdge: function () {
                        try {
                            return navigator.userAgent.match(/Edg\/8/);
                        } catch (e) {
                            return false;
                        }
                    },
                    isTopWindow: function () {
                        return window.top === window.self;
                    },
                    hasPassiveEventListeners: function () {
                        var support = false;
                        try {
                            var opts = Object.defineProperty({}, 'passive', {
                                get: function () {
                                    support = true;
                                }
                            });
                            window.addEventListener('test', null, opts);
                        } catch (e) {
                        }
                        return support;
                    },
                    isArray: function (item) {
                        return Object.prototype.toString.call(item) === '[object Array]';
                    },
                    isObject: function (item) {
                        return typeof item === 'object' && item !== null && !this.isArray(item);
                    },
                    _isEmptyObject: function (object) {
                        for (var property in object) {
                            if (object.hasOwnProperty(property)) {
                                return false;
                            }
                        }
                        return true;
                    },
                    _clone: function (item) {
                        return this.isObject(item) ? this._cloneObject(item) : this.isArray(item) ? this._cloneArray(item) : item;
                    },
                    _cloneArray: function (array) {
                        return this._applyArray([], array);
                    },
                    _cloneObject: function (object) {
                        return this._applyObject({}, object);
                    },
                    _applyArray: function (target, source) {
                        for (var i = 0; i < source.length; i++) {
                            target.push(this._clone(source[i]));
                        }
                        return target;
                    },
                    _applyObject: function (target, source) {
                        for (var propertyName in source) {
                            if (source.hasOwnProperty(propertyName)) {
                                if (this.isObject(source[propertyName])) {
                                    if (!this.isObject(target[propertyName])) {
                                        target[propertyName] = {};
                                    }
                                    this._applyObject(target[propertyName], source[propertyName]);
                                } else if (this.isArray(source[propertyName])) {
                                    if (!this.isArray(target[propertyName])) {
                                        target[propertyName] = [];
                                    }
                                    this._applyArray(target[propertyName], source[propertyName]);
                                } else {
                                    target[propertyName] = source[propertyName];
                                }
                            }
                        }
                        return target;
                    },
                    Array: {
                        forEach: function (array, callback, thisArg) {
                            for (var i = 0; i < array.length; i++) {
                                callback.call(thisArg, array[i], i, array);
                            }
                        },
                        some: function (array, callback, thisArg) {
                            var someMatch = false;
                            this.forEach(array, function (element) {
                                someMatch = someMatch || callback.call(thisArg, element);
                            });
                            return someMatch;
                        }
                    },
                    Object: {
                        forEach: function (object, callback, thisArg) {
                            for (var prop in object) {
                                if (object.hasOwnProperty(prop)) {
                                    callback.call(thisArg, object[prop], prop, object);
                                }
                            }
                        },
                        some: function (object, callback, thisArg) {
                            var someMatch = false;
                            this.forEach(object, function (element) {
                                someMatch = someMatch || callback.call(thisArg, element);
                            });
                            return someMatch;
                        },
                        keys: function (object) {
                            var keys = [];
                            this.forEach(object, function (value, key) {
                                keys.push(key);
                            });
                            return keys;
                        }
                    },
                    _domMatches: function (element, selector) {
                        var matchesFunc = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                        return matchesFunc.call(element, selector);
                    },
                    _domClosest: function (element, selector) {
                        do {
                            if (this._domMatches(element, selector))
                                return element;
                            element = element.parentElement || element.parentNode;
                        } while (element !== null && element.nodeType === 1);
                        return null;
                    },
                    hasPostMessage: function () {
                        return !!(window.postMessage && typeof window.postMessage !== 'number' && typeof window.postMessage !== 'string' && typeof window.postMessage !== 'boolean');
                    },
                    hasLocalStorage: function () {
                        const $___old_a415196e5e72c132 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_a415196e5e72c132)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                try {
                                    return typeof window.localStorage === 'object' && typeof window.localStorage.getItem === 'function';
                                } catch (e) {
                                    return false;
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_a415196e5e72c132)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_a415196e5e72c132));
                        }
                    },
                    hasHistory: function () {
                        try {
                            return typeof window.history === 'object' && typeof window.history.replaceState === 'function';
                        } catch (e) {
                            return false;
                        }
                    },
                    hasSessionStorage: function () {
                        const $___old_4b587e6a2bb5a191 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                        try {
                            if ($___old_4b587e6a2bb5a191)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f28674773787b000.sessionStorage));
                            return function () {
                                try {
                                    return typeof window.sessionStorage === 'object' && typeof window.sessionStorage.getItem === 'function';
                                } catch (e) {
                                    return false;
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_4b587e6a2bb5a191)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___old_4b587e6a2bb5a191));
                        }
                    },
                    _findRealReferrer: function () {
                        var realReferrer = (typeof cX.documentReferrer === 'string' ? cX.documentReferrer : document.referrer) || '';
                        if (this._isTemplateCdnUrl(realReferrer)) {
                            var matches = realReferrer.match(/[?&]ref=([^&#$]+)/);
                            if (matches && matches.length === 2) {
                                realReferrer = decodeURIComponent(matches[1]);
                            }
                        }
                        return realReferrer;
                    },
                    _isAutoRefresh: function () {
                        var isAutoRefresh = false;
                        try {
                            if (location.href && document.referrer && location.href != '' && location.href.split('#')[0] == document.referrer) {
                                isAutoRefresh = true;
                            }
                        } catch (e) {
                        }
                        return isAutoRefresh;
                    },
                    _ogsFieldModifiedTime: function () {
                        var modifiedTime;
                        cX.Array.forEach(document.getElementsByTagName('meta'), function (metaElement) {
                            if (!modifiedTime && ('' + metaElement.getAttribute('property')).toLowerCase() === 'article:modified_time') {
                                modifiedTime = Date.parse(metaElement.getAttribute('content')) / 1000;
                            }
                        });
                        return modifiedTime;
                    },
                    _sendApve: function () {
                        if (this._doesNotHaveConsent('pv')) {
                            var repEl = new Image();
                            var repSrc = this.eventReceiverBaseUrlGif + '?con=y&loc=' + encodeURIComponent(location.href) + '&sid=' + encodeURIComponent(this.m_siteId) + '&rnd=' + encodeURIComponent(this.m_rnd);
                            repEl.src = repSrc;
                        }
                    },
                    _pageViewCacheKey: function (locationHref) {
                        return this.m_accountId + '_' + this.m_siteId + '_' + (locationHref || location.href);
                    },
                    _isPageViewReported: function (locationHref) {
                        return this.m_previousPageViewReport === this._pageViewCacheKey(locationHref) || this.m_compatModeActive && this.m_compatPvSent;
                    },
                    _canSendPageView: function (location) {
                        return !this._isPageViewReported(location);
                    },
                    _objectToQuery: function (values) {
                        var out = [];
                        for (var key in values) {
                            if (values[key] !== null || values[key] !== undefined || values[key] !== '') {
                                out.push(encodeURIComponent(key) + '=' + encodeURIComponent(values[key]));
                            }
                        }
                        return out.join('&');
                    },
                    _activityEventPush: function () {
                        var atfr = localStorage.getItem('_cX_atfr');
                        localStorage.removeItem('_cX_atfr');
                        navigator.sendBeacon('https://comcluster.cxense.com/activity/push?' + [cX.library._objectToQuery({
                                rnd: cX.library.m_rnd,
                                ckp: cX.getUserId(),
                                loc: window.location,
                                sid: cX.library.m_siteId,
                                glb: cX.getCxenseUserId()
                            })].join('&') + atfr);
                    },
                    requireActivityEvents: function () {
                        this.m_activityEvents = true;
                        window.addEventListener('pagehide', this._activityEventPush);
                    },
                    requireOnlyFirstPartyIds: function () {
                        this.m_thirdPartyIds = false;
                    },
                    sendPageViewEvent: function (args, callback) {
                        const $___old_e88c40b96f91cea5 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_b04a0354d1afae24 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                        try {
                            if ($___old_e88c40b96f91cea5)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            if ($___old_b04a0354d1afae24)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f28674773787b000.sessionStorage));
                            return function () {
                                if (this._doesNotHaveConsent('pv'))
                                    return;
                                var allArgs = args || {};
                                if (cX.isCompatModeActive() && !allArgs.compatRunPageView) {
                                    this._runCompatPageView(args, callback);
                                    return;
                                }
                                var locationHref = allArgs.location || location.href;
                                if (this.isRecsDestination(locationHref) && locationHref.indexOf('cxrecs_s') < 0) {
                                    locationHref += (locationHref.indexOf('#') < 0 ? '#' : '&') + 'cxrecs_s';
                                }
                                var documentReferrer = allArgs.referrer || this._findRealReferrer();
                                if (this._isInternalRequest()) {
                                    return;
                                }
                                var isAutoRefresh = false;
                                if (allArgs.useAutoRefreshCheck !== false) {
                                    isAutoRefresh = this._isAutoRefresh();
                                }
                                if (this._canSendPageView(locationHref)) {
                                    this.m_previousPageViewReport = this._pageViewCacheKey(locationHref);
                                    if (document.images) {
                                        var isNewUser = !this.getUserId(false);
                                        var sessionUserId = this.getSessionId();
                                        var persistentUserId = this.getUserId();
                                        var globalUserId = this.getCxenseUserId();
                                        var now = new Date().getTime();
                                        var useP1 = false;
                                        try {
                                            if (!this.m_thirdPartyIds) {
                                                useP1 = false;
                                            } else if (!(this.isSafari() || this.isFirefox()) && this.hasLocalStorage()) {
                                                var lastP1Time = parseInt(localStorage.getItem('cX_lastP1Time') || '0');
                                                if (isNaN(lastP1Time) || lastP1Time < now - 1000 * 60 * 60 * 24 * 5 || lastP1Time > now) {
                                                    useP1 = true;
                                                    this._setLocalStorage('cX_lastP1Time', '' + now, 7);
                                                }
                                            }
                                        } catch (e) {
                                            useP1 = this.m_thirdPartyIds;
                                        }
                                        var lookupLocalCst = false;
                                        try {
                                            if (this.m_thirdPartyIds && (this.isSafari() || this.isFirefox() || this.isEdge()) && this.hasSessionStorage()) {
                                                var lastLocalCstTime = parseInt(sessionStorage.getItem('cX_lastLocalCstTime') || '0');
                                                if (isNaN(lastLocalCstTime) || lastLocalCstTime < now - 1000 * 60 * 60 * 24 || lastLocalCstTime > now) {
                                                    lookupLocalCst = true;
                                                    sessionStorage.setItem('cX_lastLocalCstTime', '' + now);
                                                }
                                            }
                                        } catch (e) {
                                            lookupLocalCst = false;
                                        }
                                        var baseUrl = useP1 ? this.p1BaseUrl + '#' : this.eventReceiverBaseUrlGif + '?';
                                        var repSrc = baseUrl + 'ver=1&typ=pgv&rnd=' + this.m_rnd;
                                        try {
                                            repSrc += '&sid=' + encodeURIComponent(this.m_siteId);
                                        } catch (e) {
                                        }
                                        try {
                                            repSrc += '&loc=' + encodeURIComponent(locationHref);
                                        } catch (e) {
                                        }
                                        try {
                                            repSrc += '&new=' + (isNewUser ? '1' : '0');
                                        } catch (e) {
                                        }
                                        try {
                                            repSrc += '&arf=' + (isAutoRefresh ? '1' : '0');
                                        } catch (e) {
                                        }
                                        try {
                                            repSrc += '&ltm=' + this.m_scriptStartTime;
                                        } catch (e) {
                                        }
                                        if (this._consentActiveAndAvailableFor('device')) {
                                            try {
                                                repSrc += '&ref=' + encodeURIComponent(documentReferrer);
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&tzo=' + encodeURIComponent('' + this.getTimezoneOffset());
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&res=' + encodeURIComponent('' + window.screen.width + 'x' + window.screen.height);
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&dpr=' + encodeURIComponent(typeof devicePixelRatio === 'undefined' ? '' : '' + devicePixelRatio);
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&col=' + encodeURIComponent('' + window.screen.colorDepth);
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&bln=' + (navigator.browserLanguage ? encodeURIComponent(navigator.browserLanguage) : navigator.language ? encodeURIComponent(navigator.language) : 'OO1OO');
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&chs=' + encodeURIComponent(document.charset || '');
                                            } catch (e) {
                                            }
                                        }
                                        try {
                                            repSrc += '&cks=' + encodeURIComponent(sessionUserId);
                                        } catch (e) {
                                        }
                                        try {
                                            repSrc += '&ckp=' + encodeURIComponent(persistentUserId);
                                        } catch (e) {
                                        }
                                        try {
                                            repSrc += '&glb=' + encodeURIComponent(globalUserId || '');
                                        } catch (e) {
                                        }
                                        try {
                                            if (this.m_usesConsent) {
                                                repSrc += '&con=' + encodeURIComponent(this._allUserConsentsString());
                                                if (this.m_consentVersion === 2) {
                                                    repSrc += '&cv=2';
                                                }
                                            }
                                        } catch (e) {
                                        }
                                        if (!lookupLocalCst && this.hasSessionStorage()) {
                                            var localCst = sessionStorage.getItem('cX_lastLocalCst');
                                            if (localCst && localCst.length === 40 && localCst.match(/^[a-z0-9_+]+$/i)) {
                                                repSrc += '&cst=' + encodeURIComponent(localCst);
                                            }
                                        }
                                        if (this._consentActiveAndAvailableFor('geo') && (this.m_plat || this.m_plon)) {
                                            try {
                                                repSrc += '&plat=' + encodeURIComponent(this.m_plat || '');
                                            } catch (e) {
                                            }
                                            try {
                                                repSrc += '&plon=' + encodeURIComponent(this.m_plon || '');
                                            } catch (e) {
                                            }
                                        }
                                        try {
                                            if (typeof allArgs.assetId === 'string') {
                                                repSrc += '&asi=' + encodeURIComponent(allArgs.assetId);
                                            }
                                        } catch (e) {
                                        }
                                        if (this._consentActiveAndAvailableFor('device')) {
                                            try {
                                                var windowSize = this.getWindowSize();
                                                repSrc += '&wsz=' + encodeURIComponent(windowSize.width + 'x' + windowSize.height);
                                            } catch (e) {
                                            }
                                        }
                                        try {
                                            var ogsFieldModifiedTime = this._ogsFieldModifiedTime();
                                            if (ogsFieldModifiedTime) {
                                                repSrc += '&amo=' + encodeURIComponent(ogsFieldModifiedTime);
                                            }
                                        } catch (e) {
                                        }
                                        repSrc += this._getExternalIdsAsUrlParameters();
                                        var explicitCustomParameters = this.m_customParameters.slice(0);
                                        try {
                                            this.setCustomParameters(this._getSessionAnnotations());
                                        } catch (e) {
                                        }
                                        if (this.m_customParameters.length > 0) {
                                            repSrc += '&' + this.m_customParameters.join('&');
                                        }
                                        this.m_customParameters = explicitCustomParameters;
                                        try {
                                            if (this.m_atfr) {
                                                repSrc += this.m_atfr;
                                            }
                                            this.m_atfr = null;
                                        } catch (e) {
                                        }
                                        var repEl;
                                        if (lookupLocalCst) {
                                            repEl = new Image();
                                            var userIdRequest = this.createDelegate(this, this._cxenseUserIdRequest);
                                            if (this.isSafari()) {
                                                var tsrUrl = this.tsridUrl + '&usi' + encodeURIComponent(this.getUserId());
                                                this.jsonpRequest(tsrUrl, function (data) {
                                                    if (data && typeof data.cst === 'string' && data.cst.length === 40 && data.cst.match(/^[a-z0-9_+]+$/i)) {
                                                        repSrc += '&cst=' + encodeURIComponent(data.cst);
                                                        sessionStorage.setItem('cX_lastLocalCst', data.cst);
                                                        userIdRequest(persistentUserId, undefined, data.cst);
                                                    } else {
                                                        userIdRequest(persistentUserId);
                                                    }
                                                    repEl.src = repSrc;
                                                }, { timeout: 2500 });
                                            } else {
                                                cX.library._onFFP1Final = function (data) {
                                                    repSrc += '&cst=' + encodeURIComponent(data);
                                                    repEl.src = repSrc;
                                                    userIdRequest(persistentUserId, undefined, data);
                                                };
                                                if (localStorage.getItem('ffcXrefresh')) {
                                                    this.loadScript(this.p1JsUrl + '?' + this._randomString());
                                                } else {
                                                    this.loadScript(this.p1JsUrl);
                                                }
                                            }
                                        } else if (useP1) {
                                            var iframeId = 'cx_rep_iframe_' + Math.random();
                                            repEl = document.createElement('iframe');
                                            repEl.id = iframeId;
                                            repEl.name = iframeId;
                                            repEl.width = '1';
                                            repEl.height = '1';
                                            repEl.scrolling = 'no';
                                            repEl.frameBorder = '0';
                                            repEl.src = repSrc;
                                            repEl.style.display = 'none';
                                            var cxRootEl = document.getElementById('cX-root');
                                            if (cxRootEl) {
                                                cxRootEl.appendChild(repEl);
                                            } else {
                                                function pollAppendToDocumentBody() {
                                                    if (document.body) {
                                                        document.body.appendChild(repEl);
                                                    } else {
                                                        setTimeout(pollAppendToDocumentBody, 100);
                                                    }
                                                }
                                                pollAppendToDocumentBody();
                                            }
                                        } else {
                                            repEl = new Image();
                                            repEl.src = repSrc;
                                            if (!this.m_thirdPartyIds) {
                                                this._cxenseUserIdRequest(this.getUserId(false));
                                            }
                                        }
                                        if (typeof callback === 'function') {
                                            repEl.onload = function () {
                                                callback({
                                                    url: repSrc,
                                                    context: allArgs,
                                                    isAnonymous: false
                                                });
                                            };
                                        }
                                    }
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_e88c40b96f91cea5)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_e88c40b96f91cea5));
                            if ($___old_b04a0354d1afae24)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___old_b04a0354d1afae24));
                        }
                    },
                    _onP1IframeLoad: function (repSrc) {
                        return function (event) {
                            if (!this.m_p1Complete) {
                                var baseUrl = this.eventReceiverBaseUrlGif + '?';
                                new Image().src = baseUrl + repSrc.slice(repSrc.indexOf('#') + 1) + '&cp_pvError=iframe';
                            }
                        };
                    },
                    onP1: function (scriptToken) {
                        const $___old_47a9bd401ff0b901 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_47a9bd401ff0b901)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                this._createExpireTokenRequest('');
                                var repSrc = this.eventReceiverBaseUrlGif + '?' + this.getHashFragment();
                                repSrc += '&cst=' + encodeURIComponent(scriptToken);
                                if (this.hasLocalStorage()) {
                                    try {
                                        var localStorageToken = localStorage.getItem('cX_lst');
                                        if (localStorageToken && localStorageToken === scriptToken) {
                                            repSrc += '&lst=' + encodeURIComponent(localStorageToken);
                                        } else {
                                            this._setLocalStorage('cX_lst', scriptToken, 365);
                                            localStorageToken = scriptToken;
                                        }
                                        var message = cX.library._encodeUrlEncodedNameValuePairs({
                                            method: 'setCxenseUserIdParent',
                                            lst: encodeURIComponent(localStorageToken),
                                            cst: encodeURIComponent(scriptToken)
                                        });
                                        this.postMessageToParent(message, '*');
                                    } catch (e) {
                                    }
                                }
                                var repEl = new Image();
                                repEl.src = repSrc;
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_47a9bd401ff0b901)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_47a9bd401ff0b901));
                        }
                    },
                    _onP1RepElError: function (repSrc) {
                        return function () {
                            this.postMessageToParent(cX.library._encodeUrlEncodedNameValuePairs({
                                method: 'sendBasicPageView',
                                repSrc: repSrc + '&cp_pvError=img'
                            }), '*');
                        };
                    },
                    onFFP1: function (data) {
                        sessionStorage.setItem('cX_lastLocalCst', data);
                        if (cX.library._onFFP1Final) {
                            cX.library._onFFP1Final(data);
                        }
                    },
                    getSessionId: function (createIfMissing) {
                        const $___old_b25fbdf90446275d = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                        try {
                            if ($___old_b25fbdf90446275d)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f28674773787b000.sessionStorage));
                            return function () {
                                var sessionUserId = this.getCookie('cX_S');
                                if (!sessionUserId) {
                                    try {
                                        if (this.hasSessionStorage()) {
                                            sessionUserId = sessionStorage.getItem('_cX_S');
                                        }
                                    } catch (e) {
                                    }
                                }
                                if (!sessionUserId && createIfMissing !== false) {
                                    sessionUserId = this._randomString();
                                    try {
                                        this.setCookie('cX_S', sessionUserId, null, '/', this.getTopLevelDomain());
                                    } catch (e) {
                                    }
                                    try {
                                        if (this.hasSessionStorage()) {
                                            sessionStorage.setItem('_cX_S', sessionUserId);
                                        }
                                    } catch (e) {
                                    }
                                }
                                return sessionUserId;
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_b25fbdf90446275d)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___old_b25fbdf90446275d));
                        }
                    },
                    getUserId: function (createIfMissing) {
                        const $___old_c48420adaa644209 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_c48420adaa644209)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                if (this._doesNotHaveConsent('pv'))
                                    return;
                                try {
                                    if (typeof window.cXNative === 'object' && typeof window.cXNative.getUserId === 'function') {
                                        var persistentUserIdNative = window.cXNative.getUserId();
                                        if (persistentUserIdNative) {
                                            return persistentUserIdNative;
                                        }
                                    }
                                } catch (e) {
                                }
                                var persistentUserIdCookie = this.getCookie('cX_P');
                                var persistentUserIdLocalStorage = null;
                                try {
                                    if (this.hasLocalStorage()) {
                                        persistentUserIdLocalStorage = localStorage.getItem('_cX_P');
                                    }
                                } catch (e) {
                                }
                                var persistentUserId = persistentUserIdCookie || persistentUserIdLocalStorage;
                                if (createIfMissing !== false) {
                                    if (!persistentUserId) {
                                        persistentUserId = this._randomString();
                                    }
                                    try {
                                        this.deleteCookie('cX_P', '/');
                                    } catch (e) {
                                    }
                                    try {
                                        this.deleteCookie('cX_P', '/', location.hostname);
                                    } catch (e) {
                                    }
                                    try {
                                        this.setCookie('cX_P', persistentUserId, 365, '/', this.getTopLevelDomain());
                                    } catch (e) {
                                    }
                                    try {
                                        this._setLocalStorage('_cX_P', persistentUserId, 365);
                                    } catch (e) {
                                    }
                                }
                                return persistentUserId;
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_c48420adaa644209)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_c48420adaa644209));
                        }
                    },
                    _localCxenseUserId: function (newId) {
                        const $___old_f6d96e6a6e912ba5 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_f6d96e6a6e912ba5)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                var persistentCxenseUserId;
                                try {
                                    if (newId !== undefined) {
                                        try {
                                            this.deleteCookie('cX_G', '/');
                                        } catch (e) {
                                        }
                                        try {
                                            this.deleteCookie('cX_G', '/', location.hostname);
                                        } catch (e) {
                                        }
                                        if (!this.isSafari()) {
                                            try {
                                                this.setCookie('cX_G', newId, 365, '/', this.getTopLevelDomain());
                                            } catch (e) {
                                            }
                                        }
                                        try {
                                            this._setLocalStorage('_cX_G', newId, 365);
                                        } catch (e) {
                                        }
                                    }
                                    var persistentUserIdCookie = this.getCookie('cX_G');
                                    var persistentUserIdLocalStorage = null;
                                    try {
                                        if (this.hasLocalStorage()) {
                                            persistentUserIdLocalStorage = localStorage.getItem('_cX_G');
                                        }
                                    } catch (e) {
                                    }
                                    persistentCxenseUserId = persistentUserIdCookie || persistentUserIdLocalStorage;
                                    return persistentCxenseUserId;
                                } catch (e) {
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_f6d96e6a6e912ba5)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_f6d96e6a6e912ba5));
                        }
                    },
                    getCxenseUserId: function () {
                        return this._localCxenseUserId();
                    },
                    _cxenseUserIdRequest: function (ckp, lst, cst) {
                        if (this._localCxenseUserId()) {
                            return;
                        }
                        try {
                            var identities = [];
                            identities.push({
                                type: 'ckp',
                                id: ckp
                            });
                            if (lst) {
                                identities.push({
                                    type: 'lst',
                                    id: lst
                                });
                            }
                            if (cst) {
                                identities.push({
                                    type: 'cst',
                                    id: cst
                                });
                            }
                            var url = this.cxenseUserIdUrl + '?' + 'json=' + encodeURIComponent(cX.JSON.stringify({
                                identities: identities,
                                siteId: this.m_siteId,
                                location: location.href
                            })) + '&callback={{callback}}';
                            var jsonpCallback = this.createDelegate(this, function (data) {
                                try {
                                    this._localCxenseUserId(data.response.userId);
                                } catch (e) {
                                }
                            });
                            this.jsonpRequest(url, jsonpCallback, {});
                        } catch (e) {
                        }
                    },
                    clearIds: function () {
                        if (this.hasLocalStorage()) {
                            var localStorageTokens = [
                                'cX_lastP1Time',
                                'cX_lst',
                                '_cX_S',
                                '_cX_P',
                                '_cX_G',
                                '_cX_segmentInfo',
                                '_cX_atfr',
                                '_cX_expires',
                                'cX_cint_set'
                            ];
                            cX.Array.forEach(localStorageTokens, function (token) {
                                if (localStorage.getItem(token))
                                    localStorage.removeItem(token);
                            });
                        }
                        var cookieTokens = [
                            'cX_S',
                            'cX_P',
                            'cX_G',
                            'cX_T',
                            '_cX_segmentInfo',
                            'cX_LSP',
                            'cX_LSS',
                            'cstp',
                            'cX_cint_set'
                        ];
                        cX.Array.forEach(cookieTokens, this.createDelegate(this, function (token) {
                            if (cX.getCookie(token))
                                this._deleteCookie_fix(token, '/', this.getTopLevelDomain());
                        }));
                        var sessionStorageTokens = [
                            '_cX_S',
                            '_cX_SA',
                            'cX_lastLocalCstTime',
                            'cX_lastLocalCst'
                        ];
                        cX.Array.forEach(sessionStorageTokens, function (token) {
                            if (sessionStorage.getItem(token))
                                sessionStorage.removeItem(token, '');
                        });
                        if (!this.isSafari()) {
                            var iframeId = 'cx_rep_iframe_' + Math.random();
                            repEl = document.createElement('iframe');
                            repEl.id = iframeId;
                            repEl.name = iframeId;
                            repEl.width = '1';
                            repEl.height = '1';
                            repEl.scrolling = 'no';
                            repEl.frameBorder = '0';
                            repEl.src = this.clearBaseUrl;
                            repEl.style.display = 'none';
                            var cxRootEl = document.getElementById('cX-clear');
                            if (cxRootEl) {
                                cxRootEl.appendChild(repEl);
                            } else {
                                function pollAppendToDocumentBody() {
                                    if (document.body) {
                                        document.body.appendChild(repEl);
                                    } else {
                                        setTimeout(pollAppendToDocumentBody, 100);
                                    }
                                }
                                pollAppendToDocumentBody();
                            }
                        }
                        if (this.isFirefox()) {
                            this._setLocalStorage('ffcXrefresh', '1', 30);
                            caches.open();
                        }
                        this.jsonpRequest(this.clearIdUrl + '?callback={{callback}}');
                    },
                    _createExpireTokenRequest: function (expire) {
                        document.cookie = 'expiretoken=' + expire + ';path=/;domain=cxense.com;secure;samesite=None';
                    },
                    onClearIds: function () {
                        if (this.hasLocalStorage()) {
                            this._createExpireTokenRequest('1');
                            if (localStorage.getItem('cX_lst'))
                                localStorage.removeItem('cX_lst');
                        }
                    },
                    getPageContext: function () {
                        var parentArgs = this.isTopWindow() ? {} : this.combineArgs(this.parseUrlArgs(), this.parseHashArgs());
                        return {
                            pageViewRandom: parentArgs.prnd || this.m_rnd,
                            userId: parentArgs.usi || this.getUserId(),
                            location: parentArgs.ctx || location.href
                        };
                    },
                    getRandomString: function () {
                        return this._randomString();
                    },
                    setRandomId: function (id) {
                        this.m_rnd = id;
                    },
                    getNowSeconds: function () {
                        return Math.round(new Date().getTime() / 1000);
                    },
                    setEventAttributes: function (attributes) {
                        this.m_customEventAttributes = attributes;
                    },
                    sendEvent: function (type, customParameters, providedArgs, segmentIds) {
                        if (this._doesNotHaveConsent('pv'))
                            return;
                        customParameters = customParameters || {};
                        var args = this.combineArgs(this.m_customEventAttributes || {}, providedArgs || {});
                        var identities = args.identities || [];
                        if (!cX.Array.some(identities, function (id) {
                                return id.type === 'cx';
                            })) {
                            identities.push({
                                id: this.getUserId(),
                                type: 'cx'
                            });
                        }
                        var apiFormattedCustomParameters = [];
                        cX.Object.forEach(customParameters, function (value, name) {
                            apiFormattedCustomParameters.push({
                                group: name,
                                item: value,
                                type: typeof value === 'number' ? 'number' : 'string'
                            });
                        });
                        var requestObject = {
                            events: [{
                                    type: type,
                                    rnd: this._randomString(),
                                    siteId: this.m_siteId,
                                    prnd: this.m_rnd,
                                    userIds: identities,
                                    origin: args.origin,
                                    segmentIds: segmentIds,
                                    customParameters: apiFormattedCustomParameters,
                                    consent: this.m_usesConsent ? this._allUserConsentsList() : undefined
                                }]
                        };
                        var url = this.dmpPushUrl + '&persisted=' + encodeURIComponent(args.persistedQueryId) + '&json=' + encodeURIComponent(cX.JSON.stringify(requestObject));
                        this.jsonpRequest(url, function (result) {
                            if (args.callback) {
                                args.callback(result, {
                                    url: url,
                                    request: requestObject
                                });
                            }
                        }, { synchronous: args.synchronous });
                    },
                    _segmentCacheKey: function (persistedQueryId, requestObject) {
                        return persistedQueryId + '_' + cX.JSON.stringify(requestObject);
                    },
                    getUserSegmentIds: function (args, requestObject) {
                        if (this._doesNotHaveConsent('segment')) {
                            if (args.callback) {
                                args.callback(args.defaultValue || []);
                            }
                            return [];
                        }
                        if (!args || typeof args.persistedQueryId !== 'string' || args.persistedQueryId.length < 5) {
                            throw 'A valid persistedQueryId is required';
                        }
                        var readQueryCache = this.createDelegate(this, function () {
                            const $___old_996ed6b2a40b5023 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_996ed6b2a40b5023)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                                return function () {
                                    var cachedQueries = {}, persistedQueryId, requestTime, segmentIds;
                                    var newFormatQueryCache;
                                    try {
                                        newFormatQueryCache = localStorage.getItem('_cX_segmentInfo');
                                    } catch (e) {
                                    }
                                    try {
                                        if (!newFormatQueryCache) {
                                            newFormatQueryCache = cX.getCookie('_cX_segmentInfo');
                                        }
                                        if (newFormatQueryCache) {
                                            cX.Array.forEach(newFormatQueryCache.split('/'), function (cachedQuery) {
                                                var cacheTokens = cachedQuery.split('_');
                                                if (cacheTokens && cacheTokens.length === 3) {
                                                    persistedQueryId = cacheTokens[0];
                                                    requestTime = parseInt(cacheTokens[1] || '0');
                                                    segmentIds = cacheTokens[2] ? cacheTokens[2].split('.') : args.defaultValue || [];
                                                    cachedQueries[persistedQueryId] = {
                                                        requestTime: requestTime,
                                                        segmentIds: segmentIds
                                                    };
                                                }
                                            });
                                        }
                                    } catch (e) {
                                    }
                                    return cachedQueries;
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_996ed6b2a40b5023)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_996ed6b2a40b5023));
                            }
                        });
                        var writeQueryCache = this.createDelegate(this, function (cachedQueries) {
                            var cachedQuery;
                            var cachedQueriesList = [];
                            for (var persistedQueryId in cachedQueries) {
                                if (cachedQueries.hasOwnProperty(persistedQueryId)) {
                                    cachedQuery = cachedQueries[persistedQueryId];
                                    cachedQueriesList.push({
                                        persistedQueryId: persistedQueryId,
                                        requestTime: cachedQuery.requestTime,
                                        segmentIds: cachedQuery.segmentIds
                                    });
                                }
                            }
                            cachedQueriesList.sort(function (a, b) {
                                return b.requestTime - a.requestTime;
                            });
                            var cookieParts = [];
                            for (var i = 0; i < 5 && i < cachedQueriesList.length; i++) {
                                cachedQuery = cachedQueriesList[i];
                                cookieParts.push(cachedQuery.persistedQueryId + '_' + cachedQuery.requestTime + '_' + cachedQuery.segmentIds.join('.'));
                            }
                            try {
                                this._setLocalStorage('_cX_segmentInfo', cookieParts.join('/'), 365);
                            } catch (e) {
                                while (cookieParts.join('/').length > 1000) {
                                    cookieParts.splice(-1, 1);
                                }
                                cX.setCookie('_cX_segmentInfo', cookieParts.join('/'), 365, '/', cX.getTopLevelDomain());
                            }
                        });
                        var cachedQueries = readQueryCache();
                        var cachedQuery = cachedQueries[args.persistedQueryId];
                        if (!cachedQuery) {
                            cachedQuery = cachedQueries[args.persistedQueryId] = {
                                requestTime: 0,
                                segmentIds: args.defaultValue || []
                            };
                        }
                        var cachedSegmentTime = cachedQuery.requestTime;
                        var segmentIds = cachedQuery.segmentIds;
                        var now = Math.round(new Date().getTime() / 1000);
                        var maxAge = typeof args.maxAge === 'number' && args.maxAge >= 5 * 60 ? args.maxAge : 5 * 60;
                        if (this.m_previousSegmentReport.indexOf(this._segmentCacheKey(args.persistedQueryId, requestObject)) > -1 && cachedSegmentTime > now - maxAge) {
                            if (args.callback) {
                                args.callback(segmentIds);
                            }
                            return segmentIds;
                        }
                        this.m_previousSegmentReport.push(this._segmentCacheKey(args.persistedQueryId, requestObject));
                        if (isNaN(cachedSegmentTime) || cachedSegmentTime < now - maxAge || cachedSegmentTime > now || cX.isArray(segmentIds) && segmentIds.length === 0) {
                            cachedQuery.requestTime = now;
                            writeQueryCache(cachedQueries);
                            requestObject = requestObject || {};
                            requestObject.identities = requestObject.identities || [];
                            if (!cX.Array.some(requestObject.identities, function (id) {
                                    return id.type === 'cx';
                                })) {
                                requestObject.identities.push({
                                    id: this.getUserId(),
                                    type: 'cx'
                                });
                            }
                            var url = this.userSegmentUrl + '&persisted=' + encodeURIComponent(args.persistedQueryId) + '&json=' + encodeURIComponent(cX.JSON.stringify(requestObject));
                            this.jsonpRequest(url, function (data) {
                                var newSegmentIds = ((data || {}).response || {}).segments;
                                if (cX.isArray(newSegmentIds) && newSegmentIds.length > 0) {
                                    segmentIds = newSegmentIds;
                                    cachedQueries = readQueryCache();
                                    (cachedQueries[args.persistedQueryId] || {}).segmentIds = newSegmentIds;
                                    writeQueryCache(cachedQueries);
                                }
                                if (args.callback) {
                                    args.callback(segmentIds || args.defaultValue || []);
                                }
                            }, { synchronous: args.synchronous });
                        } else {
                            if (args.callback) {
                                setTimeout(function () {
                                    args.callback(segmentIds);
                                }, 1);
                            }
                        }
                        return segmentIds;
                    },
                    getTimezoneOffset: function () {
                        var date = new Date();
                        var tzo = date.getTimezoneOffset();
                        try {
                            if (Math.abs(tzo) > 14 * 60 || tzo % 15 !== 0) {
                                var hourDiff = Math.round(date.getUTCHours() - date.getHours()) % 24;
                                hourDiff += hourDiff < -12 ? 24 : hourDiff > 12 ? -24 : 0;
                                tzo = Math.round((hourDiff * 60 + date.getUTCMinutes() - date.getMinutes()) / 30) * 30;
                            }
                        } catch (e) {
                        }
                        return tzo;
                    },
                    _processLocalStats: function () {
                        if (!this.m_localStats) {
                            this.m_localStats = this.decodeUrlEncodedNameValuePairs(this.getCookie('cX_LSS') || '');
                            if (!this.m_localStats.csst) {
                                var prevSessionStats = this.decodeUrlEncodedNameValuePairs(this.getCookie('cX_LSP') || '');
                                this.m_localStats = {
                                    csst: this.m_scriptStartTime,
                                    psst: prevSessionStats.csst
                                };
                                var cookie = this._encodeUrlEncodedNameValuePairs(this.m_localStats);
                                this.setCookie('cX_LSP', cookie, 365, '/', this.getTopLevelDomain());
                                this.setCookie('cX_LSS', cookie, null, '/', this.getTopLevelDomain());
                            }
                        }
                    },
                    startLocalStats: function () {
                        this._processLocalStats();
                    },
                    getLocalStats: function () {
                        this._processLocalStats();
                        var retVal = {};
                        var map = {
                            psst: {
                                name: 'prevSessionStartTime',
                                func: function (v) {
                                    return v ? new Date(parseInt(v)) : undefined;
                                }
                            },
                            csst: {
                                name: 'currSessionStartTime',
                                func: function (v) {
                                    return v ? new Date(parseInt(v)) : undefined;
                                }
                            }
                        };
                        cX.Object.forEach(this.m_localStats, function (propValue, propName) {
                            if (map[propName]) {
                                retVal[map[propName].name] = map[propName].func(propValue);
                            }
                        });
                        return retVal;
                    },
                    requireSecureCookies: function () {
                        this.m_usesSecureCookies = true;
                    },
                    _byteCount: function (str) {
                        return encodeURI(str).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
                    },
                    _assignCookieValue: function (name, value, expireDays, path, domain, secure) {
                        var cookieToSet = name + '=' + escape(value) + (expireDays ? ';expires=' + new Date(new Date().getTime() + expireDays * 1000 * 60 * 60 * 24).toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure || this.m_usesSecureCookies ? ';secure' : '') + (this._canSetSameSite() ? ';SameSite=None' : '');
                        document.cookie = cookieToSet;
                    },
                    _canSetSameSite: function () {
                        if (this.isFirefox()) {
                            return true;
                        }
                        var chromeVersion = navigator.userAgent.match(/Chrome\/(\d*)/);
                        var isCorrectChrome = chromeVersion && parseInt(chromeVersion[1]) > 65;
                        var isCorrectSafari = this.isSafari() && (navigator.userAgent.indexOf('CPU iPhone OS 12') === -1 || navigator.userAgent.indexOf('iPad; CPU OS 12') === -1 || navigator.userAgent.indexOf('Macintosh; Intel Mac OS X 10_14') === -1 && navigator.userAgent.indexOf('Version/') === -1);
                        return isCorrectChrome || isCorrectSafari;
                    },
                    setCookie: function (name, value, expireDays, path, domain, secure) {
                        if (this._byteCount(value) > 1024) {
                            return;
                        }
                        this._assignCookieValue(name, value, expireDays, path, domain, secure);
                    },
                    getCookie: function (check_name) {
                        var a_all_cookies = document.cookie.split(';');
                        var a_temp_cookie = '';
                        var cookie_name = '';
                        var cookie_value = '';
                        var b_cookie_found = false;
                        for (var i = 0; i < a_all_cookies.length; i++) {
                            a_temp_cookie = a_all_cookies[i].split('=');
                            cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
                            if (cookie_name == check_name) {
                                b_cookie_found = true;
                                if (a_temp_cookie.length > 1) {
                                    cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
                                }
                                return cookie_value;
                            }
                            a_temp_cookie = null;
                            cookie_name = '';
                        }
                        if (!b_cookie_found) {
                            return null;
                        }
                    },
                    deleteCookie: function (name, path, domain, secure) {
                        return this.setCookie(name, '', -1, path, domain, secure || this.m_usesSecureCookies);
                    },
                    _deleteCookie_fix: function (name, path, domain, secure) {
                        var domain = this.getTopLevelDomain();
                        document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (domain ? '; domain=' + domain : '') + (path ? '; path=' + path : '') + (secure || this.m_usesSecureCookies ? '; SameSite=None;secure' : '');
                    },
                    getTopLevelDomain: function () {
                        var tld = undefined;
                        var domainParts = ('' + location.hostname).split('.');
                        var testName = 'cX_T';
                        var testValue = this._randomString();
                        for (var i = 0; i < domainParts.length; i++) {
                            try {
                                var candidate = domainParts.slice(-(i + 1)).join('.');
                                this._assignCookieValue(testName, testValue, 1, '/', candidate, true, undefined);
                                var allowed = this.getCookie(testName) === testValue;
                                document.cookie = testName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=' + candidate + ';Secure';
                                if (allowed) {
                                    tld = candidate;
                                    break;
                                }
                            } catch (e) {
                            }
                        }
                        return tld;
                    },
                    renderTemplate: function (templateElementId, targetElementId, data, context) {
                        var templateElement = document.getElementById(templateElementId);
                        var templateHtml = ' ' + templateElement.innerHTML + ' ';
                        this._renderTemplate(templateHtml, targetElementId, data, context);
                    },
                    _renderTemplate: function (templateHtml, targetElementId, data, context) {
                        var depth = 0;
                        while (templateHtml.indexOf('<!--<') > -1) {
                            var htmlReplaceFunc = function (str, p1) {
                                return document.getElementById(p1).innerHTML;
                            };
                            templateHtml = templateHtml.replace(/<!--<\s*"([^"]*)"\s*>-->/g, htmlReplaceFunc);
                            depth++;
                            if (depth > 40) {
                                break;
                            }
                        }
                        var code = '\nvar html = \'\';\n';
                        code += 'var varPrefix = \'cXTmplMgck\' + Math.round(Math.random() * 2147483647).toString(36) + (new Date().getTime()).toString(36);\n';
                        code += 'var varIndex = 0;\n';
                        var parts = templateHtml.split('%-->');
                        for (var i = 0; i < parts.length; i++) {
                            var pair = parts[i].split('<!--%');
                            var textPart = pair[0];
                            if (cX.library.trim(textPart).length > 0) {
                                textPart = textPart.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/'/g, '\\\'');
                                if (textPart.indexOf('{{') > -1) {
                                    code += 'var localText = \'' + textPart + '\';\n';
                                    code += 'var replaceFunc = function (str, p1, p2, offset, s) {\n';
                                    code += '    var varName = varPrefix + varIndex;\n';
                                    code += '    varIndex++;\n';
                                    code += '    window[varName] = eval(p1);\n';
                                    code += '    return \'{{window[\\\'\' + varName + \'\\\']}}\';\n';
                                    code += '}\n';
                                    code += 'localText = localText.replace(/{{([^}]*)}}/g, replaceFunc);\n';
                                    code += 'html += localText;\n';
                                } else {
                                    code += 'html += \'' + textPart + '\';\n';
                                }
                            }
                            var codePart = '';
                            if (pair.length > 1) {
                                codePart = cX.library.trim(pair[1]);
                                codePart = codePart.replace(/(cX\.(library\.)?defaultAdRenderer)/g, 'html += $1');
                                codePart = codePart.replace(/(cX\.(library\.)?renderContainedImage)/g, 'html += $1');
                            }
                            code += codePart + '\n';
                        }
                        code += 'return html;\n';
                        var renderFunc = new Function('data', 'context', code);
                        var renderedHtml = renderFunc(data, context);
                        var targetElement = document.getElementById(targetElementId);
                        targetElement.innerHTML = renderedHtml;
                        var eventHandlerNames = 'on(click|change|(un)?load|error|focus|key(down|press|up)|mouse(over|move|down|up|out)|drag(start|enter|leave|over|end)?|drop|touch(start|end|cancel|move))$';
                        function processNode(node) {
                            if (node.attributes && node.attributes.length && node.attributes.length > 0) {
                                var tmpAttrs = [];
                                for (var i = 0; i < node.attributes.length; i++) {
                                    var attribute = node.attributes[i];
                                    if (typeof attribute.specified === 'undefined' || attribute.specified) {
                                        processText(attribute);
                                        if (attribute.nodeName.indexOf('tmp:') == 0) {
                                            tmpAttrs[tmpAttrs.length] = attribute;
                                        }
                                    }
                                }
                                for (var j = 0; j < tmpAttrs.length; j++) {
                                    var tmpAttribute = tmpAttrs[j];
                                    var newName = tmpAttribute.nodeName.replace(/^tmp:/, '');
                                    if (newName === 'style') {
                                        node.style.cssText = cX.getNodeValue(tmpAttribute);
                                    } else if (newName === 'class') {
                                        node.className = cX.getNodeValue(tmpAttribute);
                                    } else if (new RegExp('^' + eventHandlerNames, 'i').test(newName)) {
                                        node[newName] = new Function(cX.getNodeValue(tmpAttribute));
                                    } else {
                                        node[newName] = cX.getNodeValue(tmpAttribute);
                                    }
                                    try {
                                        if (node.removeAttribute) {
                                            node.removeAttribute(tmpAttribute.nodeName);
                                        }
                                    } catch (e) {
                                    }
                                }
                            }
                            if (cX.isTextNode(node)) {
                                processText(node);
                            }
                            if (node.childNodes && node.childNodes.length && node.childNodes.length > 0) {
                                for (var k = 0; k < node.childNodes.length; k++) {
                                    var child = node.childNodes[k];
                                    processNode(child);
                                }
                            }
                        }
                        function processText(node) {
                            var nodeValue = cX.getNodeValue(node);
                            if (nodeValue && nodeValue.indexOf) {
                                if (nodeValue.indexOf('{{') > -1) {
                                    var replaceFunc = function (str, p1) {
                                        var value = window[p1];
                                        try {
                                            delete window[p1];
                                        } catch (e) {
                                        }
                                        return value;
                                    };
                                    if (new RegExp('^tmp:' + eventHandlerNames, 'i').test(node.nodeName)) {
                                        cX.setNodeValue(node, nodeValue.replace(/{{(window\[\'([^\]]*)\'\])}}/g, '$1'));
                                    } else {
                                        cX.setNodeValue(node, nodeValue.replace(/{{window\[\'([^\]]*)\'\]}}/g, replaceFunc));
                                    }
                                }
                            }
                        }
                        for (var k = 0; k < targetElement.childNodes.length; k++) {
                            var childNode = targetElement.childNodes[k];
                            processNode(childNode);
                        }
                    },
                    isTextNode: function (node) {
                        return node.nodeName.toLowerCase() === '#text';
                    },
                    getNodeValue: function (node) {
                        return navigator.userAgent.match(/MSIE [6-9]\./) ? node.nodeValue : this.isTextNode(node) ? node.data : node.value;
                    },
                    setNodeValue: function (node, value) {
                        if (navigator.userAgent.match(/MSIE [6-9]\./)) {
                            node.nodeValue = value;
                        } else {
                            if (this.isTextNode(node)) {
                                node.data = value;
                            } else {
                                node.value = value;
                            }
                        }
                    },
                    loadScript: function (src, async, charset, elementId) {
                        if (async !== false) {
                            var scriptEl = document.createElement('script');
                            scriptEl.async = 'async';
                            scriptEl.type = 'text/javascript';
                            if (typeof charset === 'string') {
                                scriptEl.charset = charset;
                            }
                            if (typeof elementId === 'string') {
                                scriptEl.id = elementId;
                            }
                            scriptEl.src = src;
                            var headEl = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
                            headEl.insertBefore(scriptEl, headEl.firstChild);
                        } else {
                            document.write('<scr' + 'ipt type="text/javascript" src="' + src + '"' + (typeof elementId === 'string' ? ' id="' + elementId + '"' : '') + (typeof charset === 'string' ? ' charset="' + charset + '"' : '') + '></scr' + 'ipt>');
                        }
                    },
                    jsonpRequest: function (url, callback, options) {
                        var opts = options || {};
                        var callbackName = 'cXJsonpCB' + this._randomString();
                        var scriptId = callbackName + 'script';
                        var timeoutId = undefined;
                        window[callbackName] = function () {
                            if (timeoutId) {
                                clearTimeout(timeoutId);
                            }
                            window[callbackName] = undefined;
                            try {
                                callback.apply(window, arguments);
                            } catch (e) {
                            }
                            var scriptEl = document.getElementById(scriptId);
                            if (scriptEl) {
                                scriptEl.parentElement.removeChild(scriptEl);
                            }
                        };
                        if (opts.timeout) {
                            timeoutId = setTimeout(window[callbackName], opts.timeout);
                        }
                        this.loadScript(url.replace(/\{\{callback\}\}/, encodeURIComponent(callbackName)), opts.async, opts.charset, scriptId);
                    },
                    getAllText: function (object) {
                        var allText = '';
                        var count = 0;
                        for (var key in object) {
                            var node = object[key];
                            count++;
                            if (typeof node === 'string') {
                                allText += node;
                            } else if (typeof node === 'object') {
                                allText += this.getAllText(node);
                            }
                        }
                        if (count === 0 && typeof object === 'string') {
                            return object;
                        } else {
                            return allText;
                        }
                    },
                    createDelegate: function (instance, method) {
                        var outerArgs = Array.prototype.slice.call(arguments, 2);
                        return function () {
                            return method.apply(instance, outerArgs.length > 0 ? Array.prototype.slice.call(arguments, 0).concat(outerArgs) : arguments);
                        };
                    },
                    combineKeywordsIntoArray: function () {
                        var allKeywords = [];
                        for (var j = 0; j < arguments.length; j++) {
                            var keywords = arguments[j];
                            if (typeof keywords === 'string') {
                                allKeywords.push(keywords);
                            } else if (this.isArray(keywords)) {
                                for (var i = 0; i < keywords.length; i++) {
                                    if (typeof keywords[i] === 'string') {
                                        allKeywords.push(keywords[i]);
                                    }
                                }
                            }
                        }
                        return allKeywords;
                    },
                    combineArgs: function () {
                        var allArgs = {};
                        for (var i = 0; i < arguments.length; i++) {
                            if (arguments[i]) {
                                this._applyObject(allArgs, arguments[i]);
                            }
                        }
                        return allArgs;
                    },
                    trim: function (string) {
                        return string.replace(/^\s*/, '').replace(/\s*$/, '');
                    },
                    parseMargins: function (marginsString) {
                        var margins = {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        try {
                            if (marginsString) {
                                var marginParts = this.trim(marginsString).replace(/\s+/g, ' ').split(' ');
                                for (var i = 0; i < marginParts.length; i++) {
                                    marginParts[i] = parseInt(marginParts[i].replace(/px/gi, ''), 10);
                                }
                                if (marginParts.length == 1) {
                                    margins.top = marginParts[0];
                                    margins.right = marginParts[0];
                                    margins.bottom = marginParts[0];
                                    margins.left = marginParts[0];
                                }
                                if (marginParts.length == 2) {
                                    margins.top = marginParts[0];
                                    margins.right = marginParts[1];
                                    margins.bottom = marginParts[0];
                                    margins.left = marginParts[1];
                                }
                                if (marginParts.length == 3) {
                                    margins.top = marginParts[0];
                                    margins.right = marginParts[1];
                                    margins.bottom = marginParts[2];
                                    margins.left = marginParts[1];
                                }
                                if (marginParts.length == 4) {
                                    margins.top = marginParts[0];
                                    margins.right = marginParts[1];
                                    margins.bottom = marginParts[2];
                                    margins.left = marginParts[3];
                                }
                            }
                        } catch (e) {
                        }
                        return margins;
                    },
                    getHashFragment: function () {
                        var href = location.href || '';
                        var hashIndex = href.indexOf('#');
                        return hashIndex > -1 ? href.substr(hashIndex + 1) : '';
                    },
                    parseHashArgs: function () {
                        return this.decodeUrlEncodedNameValuePairs(this.getHashFragment());
                    },
                    parseUrlArgs: function () {
                        return this.decodeUrlEncodedNameValuePairs(location.search);
                    },
                    _filterHashArgs: function (allHashArgs) {
                        var hashArgs = {};
                        for (var argName in allHashArgs) {
                            if (argName === 'media' || argName === 'renderTemplateUrl' || argName === 'useMappedRenderTemplate' || argName === 'rnd' || argName.indexOf('lf-') === 0) {
                            } else if (argName === 'asId') {
                                hashArgs.adSpaceId = allHashArgs[argName];
                            } else if (argName === 'auw') {
                                hashArgs.adUnitWidth = parseInt(allHashArgs.auw);
                            } else if (argName === 'auh') {
                                hashArgs.adUnitHeight = parseInt(allHashArgs.auh);
                            } else {
                                hashArgs[argName] = allHashArgs[argName];
                            }
                        }
                        return hashArgs;
                    },
                    sendSpaRecsClick: function (clickUrl, callback) {
                        var img = new Image();
                        img.src = this.m_spaRecsClickUrl = clickUrl.replace(/\/widget\/click\/(image\/)?/, '/widget/click/image/');
                        if (callback) {
                            img.onload = callback;
                            img.onerror = callback;
                        }
                    },
                    clickTracker: function (clickUrl, linkEl, callback) {
                        var linkId = 'cXLinkId' + this._randomString();
                        if (clickUrl) {
                            var hasPassiveEventListeners = this.hasPassiveEventListeners();
                            setTimeout(function () {
                                if (!linkEl) {
                                    linkEl = document.getElementById(linkId);
                                }
                                if (linkEl) {
                                    cX.addEventListener(linkEl, 'mousedown', function () {
                                        linkEl.href = clickUrl;
                                        if (callback) {
                                            callback();
                                        }
                                    });
                                    cX.addEventListener(linkEl, 'touchstart', function () {
                                        linkEl.href = clickUrl;
                                        if (callback) {
                                            callback();
                                        }
                                    }, hasPassiveEventListeners ? { passive: true } : false);
                                }
                            }, 1);
                        }
                        return linkId;
                    },
                    renderContainedImage: function (args) {
                        var imageDimensions = (args.image.dimensions || '' + args.image.width + 'x' + args.image.height).split('x');
                        var imageWidth = parseInt(imageDimensions[0]);
                        var imageHeight = parseInt(imageDimensions[1]);
                        var imageAspectRatio = imageWidth / imageHeight;
                        var containerAspectRatio = args.container.width / args.container.height;
                        var fitScaleFactor = args.container.width / imageWidth;
                        var zoomScaleFactor = args.container.height / imageHeight;
                        var scaleFactor = (args.tooWideStrategy || 'zoom') === 'zoom' ? zoomScaleFactor : fitScaleFactor;
                        if (imageAspectRatio < containerAspectRatio) {
                            fitScaleFactor = args.container.height / imageHeight;
                            zoomScaleFactor = args.container.width / imageWidth;
                            scaleFactor = (args.tooTallStrategy || 'zoom') === 'zoom' ? zoomScaleFactor : fitScaleFactor;
                        }
                        scaleFactor = Math.min(Math.max(scaleFactor, args.scaleFactorMin || 0.001), args.scaleFactorMax || 1);
                        var scaledWidth = imageWidth * scaleFactor;
                        var scaledHeight = imageHeight * scaleFactor;
                        var imageOffsetLeftFactor = scaledWidth > args.container.width ? imageOffsetLeftFactor = typeof args.tooWideFocusPoint === 'number' ? args.tooWideFocusPoint : 0.5 : {
                            left: 0,
                            center: 0.5,
                            right: 1
                        }[args.horizontalAlign || 'left'];
                        var imageOffsetTopFactor = scaledHeight > args.container.height ? imageOffsetTopFactor = typeof args.tooTallFocusPoint === 'number' ? args.tooTallFocusPoint : 0 : {
                            top: 0,
                            middle: 0.5,
                            bottom: 1
                        }[args.verticalAlign || 'top'];
                        return '<div' + (args.container.cssClass ? ' class="' + args.container.cssClass + '"' : '') + ' style="width: ' + args.container.width + 'px; height: ' + args.container.height + 'px;' + '  overflow: hidden; position: relative;"' + '><img' + (args.image.cssClass ? '  class="' + args.image.cssClass + '"' : '') + '  style="position: relative;' + '   left: ' + (args.container.width - scaledWidth) * imageOffsetLeftFactor + 'px;' + '   top: ' + (args.container.height - scaledHeight) * imageOffsetTopFactor + 'px;"' + '  src="' + args.image.src + '"' + '  width="' + scaledWidth + '"' + '  height="' + scaledHeight + '"' + '  tmp:alt="' + this._tempStore(args.image.alt || '') + '"' + (args.image.id ? '  tmp:id="' + this._tempStore(args.image.id) + '"' : '') + (args.image.title ? '  tmp:title="' + this._tempStore(args.image.title) + '"' : '') + ' /></div>\n';
                    },
                    defaultAdRenderer: function (adSpace, ad) {
                        var adHtml = '';
                        var type = ad.creative.type;
                        if (type.indexOf('ImageCreativeFeature') > -1) {
                            adHtml += this._defaultImageCreativeRenderer(adSpace, ad);
                        } else if (type.indexOf('TextCreativeFeature') > -1) {
                            adHtml += this._defaultTextCreativeRenderer(adSpace, ad);
                        } else if (type.indexOf('FlashCreativeFeature') > -1) {
                            adHtml += this._defaultFlashCreativeRenderer(adSpace, ad);
                        } else if (type.indexOf('ComboCreativeFeature') > -1) {
                            adHtml += this._defaultComboCreativeRenderer(adSpace, ad);
                        } else if (type.indexOf('ThirdPartyCreativeFeature') > -1) {
                            adHtml += this._defaultThirdPartyCreativeRenderer(adSpace, ad);
                        }
                        return adHtml;
                    },
                    _defaultImageCreativeRenderer: function (adSpace, ad) {
                        var html = '';
                        html += '<a class="ad" rel="nofollow" tmp:href="' + this._tempStore(ad.clickUrl) + '" target="_blank">\n';
                        html += '<img tmp:src="' + this._tempStore(ad.creative.source) + '" border="0" alt=""';
                        html += ' width="' + ad.creative.spec.width + '"';
                        html += ' height="' + ad.creative.spec.height + '" />\n';
                        html += '</a>\n';
                        return html;
                    },
                    _defaultTextCreativeRenderer: function (adSpace, ad) {
                        var html = '';
                        html += '<a class="ad" rel="nofollow" tmp:href="' + this._tempStore(ad.clickUrl) + '" target="_blank"';
                        html += ' style="height: ' + adSpace.adUnitHeight + 'px; width: ' + adSpace.adUnitWidth + 'px;">\n';
                        html += '<span class="title">' + this._tempStore(ad.creative.title) + '</span>\n';
                        html += '<span class="body">\n';
                        for (var i = 0; i < ad.creative.content.length; i++) {
                            html += '<span>' + this._tempStore(ad.creative.content[i]) + '</span><br />\n';
                        }
                        html += '</span>\n';
                        if (ad.creative.displayUrl) {
                            html += '<span class="url">' + this._tempStore(ad.creative.displayUrl) + '</span>\n';
                        }
                        html += '</a>\n';
                        return html;
                    },
                    _defaultFlashCreativeRenderer: function (adSpace, ad) {
                        var width = ad.creative.spec.width;
                        var height = ad.creative.spec.height;
                        var clickTag = encodeURIComponent(ad.clickUrl);
                        var movieUrl = ad.creative.source + (ad.creative.source.indexOf('?') > -1 ? '&' : '?') + 'clickTAG=' + clickTag + '&' + 'clickTag=' + clickTag + '&' + 'clicktag=' + clickTag + '&' + 'clickTARGET=' + '_blank';
                        var elId = 'cXFlashObj' + this._randomString();
                        var imageSource = ad.creative.imageSource;
                        var html = '' + '<div style="width: ' + width + 'px; height: ' + height + 'px; margin: 0; padding: 0; border: 0; outline: 0; display: inline-block;">\n' + '<object id="' + elId + 'obj" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + width + '" height="' + height + '">\n' + '  <param name="AllowScriptAccess" value="never" />\n' + '  <param name="movie" value="' + movieUrl + '" />\n' + '  <param name="wmode" value="transparent" />\n' + '  <!--[if !IE]>-->\n' + '  <object id="' + elId + 'obj2" type="application/x-shockwave-flash" data="' + movieUrl + '" width="' + width + '" height="' + height + '">\n' + '    <param name="AllowScriptAccess" value="never" />\n' + '    <param name="movie" value="' + movieUrl + '" />\n' + '    <param name="wmode" value="transparent" />\n' + '  <!--<![endif]-->\n' + '    <a class="ad" rel="nofollow" href="' + ad.clickUrl + '" target="_blank" style="width: ' + width + 'px; height: ' + height + 'px;">\n' + (imageSource ? '    <img src="' + imageSource + '" width="' + width + '" height="' + height + '" alt="Flash ad" />\n' : '') + '    </a>\n' + '  <!--[if !IE]>-->\n' + '  </object>\n' + '  <!--<![endif]-->\n' + '</object>\n' + '</div>\n';
                        return html;
                    },
                    _defaultComboCreativeRenderer: function (adSpace, ad) {
                        var html = '';
                        html += '<a class="ad" rel="nofollow" tmp:href="' + this._tempStore(ad.clickUrl) + '" target="_blank">\n';
                        html += '<span class="title">' + this._tempStore(ad.creative.title) + '</span>\n';
                        html += '<span class="body">\n';
                        for (var i = 0; i < ad.creative.content.length; i++) {
                            var content = ad.creative.content[i];
                            html += '<span>' + this._tempStore(content.value) + '</span><br />\n';
                        }
                        html += '</span>\n';
                        if (ad.creative.displayUrl) {
                            html += '<span class="url">' + this._tempStore(ad.creative.displayUrl) + '</span>\n';
                        }
                        for (var j = 0; j < ad.creative.images.length; j++) {
                            var image = ad.creative.images[j];
                            html += '<img tmp:src="' + this._tempStore(image.source) + '" border="0" alt=""';
                            html += ' width="' + image.width + '"';
                            html += ' height="' + image.height + '" />\n';
                        }
                        for (var k = 0; k < ad.creative.flashFiles.length; k++) {
                            var flashFile = ad.creative.flashFiles[k];
                            var flashAd = {
                                creative: {
                                    source: flashFile.source,
                                    type: 'FlashCreativeFeature',
                                    spec: {
                                        width: flashFile.width,
                                        height: flashFile.height
                                    }
                                },
                                clickUrl: ad.clickUrl
                            };
                            html += this._defaultFlashCreativeRenderer(adSpace, flashAd);
                        }
                        html += '</a>\n';
                        return html;
                    },
                    _defaultThirdPartyCreativeRenderer: function (adSpace, ad) {
                        var html = '';
                        var elId = 'cXThirdParty' + this._randomString();
                        html += '<iframe id="' + elId + '" width="' + adSpace.adUnitWidth + '" height="' + adSpace.adUnitHeight + '" frameborder="0"></iframe>';
                        var renderer = function (elIdParam, thirdPartyTagParam) {
                            var elId = elIdParam;
                            var thirdPartyTag = thirdPartyTagParam;
                            return function () {
                                var thirdPartyIFrameEl = document.getElementById(elId);
                                var contentDoc = thirdPartyIFrameEl.contentDocument || thirdPartyIFrameEl.contentWindow.document;
                                contentDoc.open();
                                contentDoc.write('<!DOCTYPE HTML>\n');
                                contentDoc.write('<html>\n');
                                contentDoc.write('<head>\n<title></title>\n');
                                contentDoc.write('<style type="text/css">html, body, div { margin:0; padding: 0; }</style>\n');
                                contentDoc.write('</head>\n<body style="overflow:hidden;">\n');
                                contentDoc.write('' + thirdPartyTag + '\n</body>\n</html>\n');
                            };
                        }(elId, ad.creative.thirdPartyAdCode);
                        setTimeout(renderer, 1);
                        return html;
                    },
                    _randomString: function () {
                        var randomString = new Date().getTime().toString(36);
                        while (randomString.length < 16) {
                            randomString += Math.round(Math.random() * 2147483647).toString(36);
                        }
                        return randomString.substr(0, 16);
                    },
                    _tempStore: function (data) {
                        var varName = 'cXTmplMgck' + this._randomString();
                        window[varName] = data;
                        return '{{window[\'' + varName + '\']}}';
                    },
                    addEventListener: function (object, eventName, handler, captureFirst) {
                        if (object.addEventListener) {
                            object.addEventListener(eventName, handler, !!captureFirst);
                        } else if (object.attachEvent) {
                            object.attachEvent('on' + eventName, handler);
                        }
                    },
                    removeEventListener: function (object, eventName, handler, captureFirst) {
                        if (object.removeEventListener) {
                            object.removeEventListener(eventName, handler, !!captureFirst);
                        } else if (object.detachEvent) {
                            object.detachEvent('on' + eventName, handler);
                        }
                    },
                    decodeUrlEncodedNameValuePairs: function (urlEncodedNameValuePairs) {
                        var object = {};
                        var pairs = urlEncodedNameValuePairs.replace(/\?/, '').replace(/#/, '').split('&');
                        for (var i = 0; i < pairs.length; i++) {
                            var pairElements = pairs[i].split('=');
                            if (pairElements.length === 2) {
                                var name = decodeURIComponent(pairElements[0]);
                                var value = decodeURIComponent(pairElements[1]);
                                if (typeof object[name] !== 'undefined') {
                                    if (!this.isArray(object[name])) {
                                        object[name] = [object[name]];
                                    }
                                    object[name].push(value);
                                } else {
                                    object[name] = value;
                                }
                            }
                        }
                        return object;
                    },
                    _encodeUrlEncodedNameValuePairs: function (object) {
                        var encodedString = '';
                        for (var attrName in object) {
                            if (object.hasOwnProperty(attrName)) {
                                var attrValue = object[attrName];
                                if (typeof attrValue === 'string' || typeof attrValue === 'number' || typeof attrValue === 'boolean') {
                                    encodedString += (encodedString.length > 0 ? '&' : '') + encodeURIComponent(attrName) + '=' + encodeURIComponent('' + attrValue);
                                } else if (this.isArray(attrValue)) {
                                    for (var i = 0; i < attrValue.length; i++) {
                                        encodedString += (encodedString.length > 0 ? '&' : '') + encodeURIComponent(attrName) + '=' + encodeURIComponent('' + attrValue[i]);
                                    }
                                }
                            }
                        }
                        return encodedString;
                    },
                    postMessageToParent: function (message, domain) {
                        var messageSent = false;
                        if (this.isIE6Or7() && !parent.postMessage) {
                            var allArgs = this.combineArgs(this.parseUrlArgs(), this.parseHashArgs());
                            if (allArgs.loc && allArgs.uhm) {
                                var parentUrl = allArgs.loc;
                                var parentIsTop = false;
                                try {
                                    parentIsTop = parentIsTop || parent === parent.parent;
                                } catch (e) {
                                }
                                try {
                                    parentIsTop = parentIsTop || !parent.parent;
                                } catch (e) {
                                }
                                if (parentIsTop) {
                                    parentUrl += parentUrl.indexOf('#') > -1 ? '&' : '#';
                                    parentUrl += 'cXPostMsg=' + encodeURIComponent(message);
                                    setTimeout(function () {
                                        parent.location.replace(parentUrl);
                                    }, 3000);
                                    messageSent = true;
                                }
                            }
                        } else if (parent.postMessage) {
                            parent.postMessage(message, domain);
                            messageSent = true;
                        }
                        return messageSent;
                    },
                    _sendMessageToChild: function (childFrame, childSrc, message, domain) {
                        if (this.hasPostMessage()) {
                            if (childFrame.contentWindow && childFrame.contentWindow.postMessage) {
                                childFrame.contentWindow.postMessage(message, domain);
                            }
                        } else {
                            childSrc += childSrc.indexOf('#') > -1 ? '&' : '#';
                            childSrc += 'cXPostMsg=' + encodeURIComponent(message);
                        }
                    },
                    _handlePostMessage: function (message) {
                        try {
                            if (typeof message === 'object' && typeof message.data === 'string') {
                                var origin = message.origin;
                                var object = this.decodeUrlEncodedNameValuePairs(message.data);
                                if (typeof object.elementId !== 'undefined' && object.method === 'updateAdSpace') {
                                    this._updateWidget(object);
                                } else if (object.method === 'updateParentMetrics') {
                                    this._updateParentMetrics(object);
                                } else if (object.method === 'requestParentMetrics') {
                                    this._handleParentMetricsRequest(object, message);
                                } else if (object.method === 'clientStorageResult' && origin === this.m_clientStorage.iframeOrigin) {
                                    this._handleClientStorage(object);
                                } else if (object.method === 'setCxenseUserIdParent') {
                                    this.m_p1Complete = true;
                                    this._cxenseUserIdRequest(this.getUserId(false), object.lst, object.cst);
                                } else if (object.method === 'sendBasicPageView') {
                                    new Image().src = object.repSrc;
                                }
                            }
                        } catch (e) {
                        }
                    },
                    _handleParentMetricsRequest: function (request, message) {
                        if (!cX.Array.some(this.m_knownMessageSources, function (messageSource) {
                                return messageSource === message.source;
                            })) {
                            this.m_knownMessageSources.push(message.source);
                            cX.Array.forEach(document.getElementsByTagName('iframe'), function (frameEl) {
                                if (frameEl.src.replace(/#.*$/, '') === request.framesrc.replace(/#.*$/, '')) {
                                    if (!cX.Object.some(this.m_widgetSpecs, function (widgetElId) {
                                            return this.m_widgetSpecs[widgetElId].element === frameEl;
                                        }, this)) {
                                        this.trackElement({ element: frameEl });
                                    }
                                }
                            }, this);
                        }
                        cX.Array.forEach(request.metricNames.split(','), function (metricName) {
                            if (metricName === 'documentSize') {
                                this.m_documentSizeRequestedFromChild = true;
                            }
                        }, this);
                    },
                    _updateParentMetrics: function (update) {
                        var values = update.parentMetrics.split(',');
                        for (var i = 0; i < values.length; i++) {
                            values[i] = parseInt(values[i], 10);
                        }
                        this.m_activityState.parentMetrics = {
                            updateTime: values[0],
                            scrollPos: {
                                left: values[1],
                                top: values[2]
                            },
                            windowSize: {
                                width: values[3],
                                height: values[4]
                            },
                            widgetPos: {
                                left: values[5],
                                top: values[6]
                            },
                            widgetSize: {
                                width: values[7],
                                height: values[8]
                            },
                            overlapPos: {
                                left: values[9],
                                top: values[10]
                            },
                            overlapSize: {
                                width: values[11],
                                height: values[12]
                            },
                            documentSize: {
                                width: values[13],
                                height: values[14]
                            }
                        };
                    },
                    _updateWidget: function (update) {
                        var elementId = update.elementId;
                        var specs = this.m_widgetSpecs[elementId];
                        if (specs) {
                            var matchedAdCount = parseInt(update.matchedAdCount, 10);
                            var isVerticallyOriented = update.isVerticallyOriented !== 'false';
                            var cancelEvent = false;
                            if (specs.onImpressionResult && typeof specs.onImpressionResult === 'function') {
                                var event = {
                                    elementId: elementId,
                                    matchedAdCount: matchedAdCount,
                                    isVerticallyOriented: isVerticallyOriented,
                                    contentWidth: update.contentWidth,
                                    contentHeight: update.contentHeight
                                };
                                cancelEvent = specs.onImpressionResult(event) === false;
                            }
                            if (!cancelEvent) {
                                var iframeEl = document.getElementById(elementId);
                                if (!specs.resizeToContentSize && specs.adUnitWidth && specs.adUnitHeight) {
                                    if (isVerticallyOriented) {
                                        iframeEl.style.height = '' + this.calculateAdSpaceSize(matchedAdCount, specs.adUnitHeight, specs.margins.top, specs.margins.bottom) + 'px';
                                        if (specs.initialHorizontalAdUnits === 0) {
                                            iframeEl.style.width = '' + this.calculateAdSpaceSize(1, specs.adUnitWidth, specs.margins.left, specs.margins.right) + 'px';
                                        }
                                    } else {
                                        iframeEl.style.width = '' + this.calculateAdSpaceSize(matchedAdCount, specs.adUnitWidth, specs.margins.left, specs.margins.right) + 'px';
                                        if (specs.initialVerticalAdUnits === 0) {
                                            iframeEl.style.height = '' + this.calculateAdSpaceSize(1, specs.adUnitHeight, specs.margins.top, specs.margins.bottom) + 'px';
                                        }
                                    }
                                } else {
                                    if (specs.resizeToContentSize !== false) {
                                        if (typeof update.contentWidth !== 'undefined') {
                                            iframeEl.style.width = '' + update.contentWidth + 'px';
                                        }
                                        if (typeof update.contentHeight !== 'undefined') {
                                            iframeEl.style.height = '' + update.contentHeight + 'px';
                                        }
                                    }
                                }
                            }
                        }
                    },
                    calculateAdSpaceSize: function (adCount, adUnitSize, marginA, marginB) {
                        return adCount * (adUnitSize + marginA + marginB);
                    },
                    insertMultipleAdSpaces: function (argsArray, optionalCommonArgs) {
                        if (this._doesNotHaveConsent('ad'))
                            return;
                        var adSpaceIds = [];
                        var masterFrameId = 'cXMaster' + Math.random();
                        var masterTargetElementId;
                        var isUsingRenderTemplates = false;
                        for (var i = 0; i < argsArray.length; i++) {
                            var args = argsArray[i];
                            if (args) {
                                if (typeof args.adSpaceId === 'string') {
                                    adSpaceIds.push(args.adSpaceId);
                                }
                                if (typeof args.renderTemplateUrl === 'string' || args.useMappedRenderTemplate === true) {
                                    isUsingRenderTemplates = true;
                                }
                                masterTargetElementId = masterTargetElementId || args.targetElementId || args.appendToElementId || args.insertBeforeElementId;
                            }
                        }
                        var masterOnLoadHandler = this.createDelegate(this, function () {
                            for (var i = 0; i < argsArray.length; i++) {
                                var args = argsArray[i];
                                args.isSlave = true;
                                args.masterId = masterFrameId;
                                if (this.isObject(optionalCommonArgs)) {
                                    args.backend = optionalCommonArgs.backend;
                                    args.baseAdDeliveryUrl = optionalCommonArgs.baseAdDeliveryUrl;
                                    args.secureBaseAdDeliveryUrl = optionalCommonArgs.secureBaseAdDeliveryUrl;
                                }
                                this.insertAdSpace(args);
                            }
                        });
                        var masterArgs = {
                            adSpaceIds: adSpaceIds,
                            masterOnLoadHandler: masterOnLoadHandler,
                            masterId: masterFrameId,
                            masterTargetElementId: masterTargetElementId
                        };
                        masterArgs = this.combineArgs(optionalCommonArgs, masterArgs);
                        if (isUsingRenderTemplates) {
                            masterArgs.renderTemplateUrl = this.cdn.template.direct.http + 'master-data-template.html';
                        }
                        this.insertAdSpace(masterArgs);
                    },
                    insertAdSpace: function (args) {
                        if (this._doesNotHaveConsent('ad'))
                            return;
                        return this._insertWidget(args);
                    },
                    insertWidget: function (args, requestObject) {
                        args = args || {};
                        if (args.renderTemplateUrl === 'auto') {
                            args.renderTemplateUrl = this.cdn.template.direct.http + 'generic_v1.html';
                        }
                        if (this._isTemplateCdnUrl(args.renderTemplateUrl || '') && !this.hasHistory()) {
                            args.renderTemplateUrl += '?ref=' + encodeURIComponent(location.href);
                        }
                        if (typeof args.forwardHashArgs === 'undefined' && !this.isTopWindow() && location.hash.indexOf('parentElementId') > -1) {
                            args.forwardHashArgs = true;
                        }
                        args.resizeToContentSize = args.resizeToContentSize !== false;
                        return this._insertWidget(args, requestObject);
                    },
                    _insertWidget: function (args, requestObject) {
                        requestObject = requestObject || {};
                        if (this.m_usesConsent) {
                            requestObject.consent = this._allUserConsentsList();
                        }
                        if (this._isInternalRequest()) {
                            return;
                        }
                        var persistentUserId = this.getUserId();
                        var allArgs = window.cx_props ? this.combineArgs(window.cx_props, args) : args;
                        allArgs.k = window.cx_props ? this.combineKeywordsIntoArray(window.cx_props.k, args.k) : this.combineKeywordsIntoArray(args.k);
                        if (allArgs.forwardHashArgs) {
                            var hashArgs = this._filterHashArgs(this.parseHashArgs());
                            allArgs.k = this.combineKeywordsIntoArray(allArgs.k, hashArgs.k);
                            allArgs = this.combineArgs(hashArgs, allArgs);
                            if (hashArgs.requestObject) {
                                var tmpVarName = 'cxParse_' + this._randomString();
                                if (window.JSON && window.JSON.parse) {
                                    window[tmpVarName] = JSON.parse(hashArgs.requestObject);
                                } else {
                                    unescape.constructor('window[\'' + tmpVarName + '\'] = ' + hashArgs.requestObject)();
                                }
                                requestObject = this._applyObject(window[tmpVarName], requestObject);
                            }
                        }
                        requestObject = this._applyObject({ context: { referrer: this._findRealReferrer() } }, requestObject);
                        if (this.isTopWindow()) {
                            requestObject.context.autoRefresh = this._isAutoRefresh();
                        }
                        var media = 'html';
                        var params = '?';
                        var isRenderTemplateRequest = !!(allArgs.renderTemplateUrl || allArgs.useMappedRenderTemplate);
                        if (isRenderTemplateRequest || args.isSlave) {
                            params = '#';
                            if (allArgs.widgetId || requestObject.widgetId) {
                                params += 'requestObject=' + encodeURIComponent(cX.JSON.stringify(requestObject)) + '&';
                            }
                            if (this.isArray(this.m_externalUserIds) && this.m_externalUserIds.length > 0) {
                                params += this._getExternalIdsAsUrlParameters();
                            }
                        } else if (allArgs.templateElementId || allArgs.renderFunction || allArgs.widgetId || requestObject.widgetId) {
                            media = 'javascript';
                            if (!allArgs.adSpaceId && !allArgs.adSpaceIds && (allArgs.widgetId || requestObject.widgetId)) {
                                requestObject.widgetId = requestObject.widgetId || allArgs.widgetId;
                                if (allArgs.backend) {
                                    requestObject.backend = allArgs.backend;
                                    allArgs.backend = 'production';
                                }
                                var user = requestObject.user || (requestObject.user = { ids: {} });
                                if (!this.isConsentRequired() || this.isConsentRequired() && this.hasConsent('pv')) {
                                    if (allArgs.usi || persistentUserId) {
                                        (user.ids || (user.ids = {})).usi = allArgs.usi || persistentUserId;
                                    } else {
                                        user = requestObject.user = undefined;
                                    }
                                    if (this.isArray(this.m_externalUserIds) && this.m_externalUserIds.length > 0) {
                                        this.Array.forEach(this.m_externalUserIds, function (id) {
                                            user.ids[id.type] = id.id;
                                        });
                                    }
                                } else {
                                    user = requestObject.user = undefined;
                                }
                                var context = requestObject.context || (requestObject.context = {});
                                if (!context.url) {
                                    context.url = allArgs.ctx || location.href;
                                }
                                requestObject.prnd = allArgs.prnd || this.m_rnd;
                                if (this.m_consentVersion === 2) {
                                    requestObject.consentVersion = '2';
                                }
                                params += 'json=' + encodeURIComponent(cX.JSON.stringify(requestObject)) + '&';
                                allArgs.templateElementId = allArgs.templateElementId || 'templateElement';
                                allArgs.targetElementId = allArgs.targetElementId || 'targetElement';
                            }
                        }
                        if (allArgs.adSpaceIds) {
                            media = 'multipart-html-json';
                            params += 'asId=' + allArgs.adSpaceIds.join('&asId=') + '&';
                        }
                        if (allArgs.adSpaceId && this.isArray(allArgs.adSpaceId)) {
                            media = 'javascript';
                            params += 'asId=' + allArgs.adSpaceId.join('&asId=') + '&';
                        }
                        params += 'media=' + encodeURIComponent(media);
                        var adSpaceId = allArgs.adSpaceId;
                        if (adSpaceId) {
                            if (!this.isArray(allArgs.adSpaceId)) {
                                params += '&asId=' + encodeURIComponent(adSpaceId);
                            }
                            allArgs.initialHorizontalAdUnits = allArgs.initialHorizontalAdUnits || 0;
                            allArgs.initialVerticalAdUnits = allArgs.initialVerticalAdUnits || 0;
                            allArgs.adUnitWidth = allArgs.adUnitWidth || 0;
                            allArgs.adUnitHeight = allArgs.adUnitHeight || 0;
                        }
                        if (typeof allArgs.siteId !== 'undefined') {
                            params += '&sid=' + encodeURIComponent(allArgs.siteId);
                        } else if (this.m_siteId !== '0') {
                            params += '&sid=' + encodeURIComponent(this.m_siteId);
                        }
                        for (var argName in allArgs) {
                            if (typeof allArgs[argName] !== 'function' && (argName !== 'parentElementId' || media === 'html') && argName !== 'k' && argName !== 'delayImpression' && argName !== 'forwardHashArgs' && argName !== 'renderTemplateUrl' && argName !== 'requestObject' && argName !== 'useSecureUrls' && argName !== 'useMappedRenderTemplate' && argName !== 'templateElementId' && argName !== 'targetElementId' && argName !== 'onImpressionResult' && argName !== 'siteId' && argName !== 'adSpaceId' && argName !== 'adSpaceIds' && argName !== 'parentId' && argName !== 'appendToElementId' && argName !== 'insertBeforeElementId' && argName !== 'adUnitWidth' && argName !== 'adUnitHeight' && argName !== 'loc' && argName !== 'synchronous' && argName !== 'masterTargetElementId' && argName !== 'initialVerticalAdUnits' && argName !== 'initialHorizontalAdUnits' && argName !== 'destinationUrlParameters' && argName !== 'destinationUrlPrefix' && argName !== 'ctrlLinksCss' && argName !== 'ctrlSpaAttr' && (isRenderTemplateRequest || argName !== 'backend' && argName !== 'secureBaseAdDeliveryUrl' && argName !== 'baseAdDeliveryUrl' && argName !== 'width' && argName !== 'height')) {
                                params += '&' + encodeURIComponent(argName) + '=' + encodeURIComponent(allArgs[argName]);
                            }
                            if (argName == 'k') {
                                var keywords = allArgs[argName];
                                for (var i = 0; i < keywords.length; i++) {
                                    params += '&k=' + encodeURIComponent(keywords[i]);
                                }
                            }
                            if (argName == 'destinationUrlParameters') {
                                var packedParameters = '';
                                var firstItem = true;
                                var destinationUrlParameters = allArgs.destinationUrlParameters;
                                for (var destinationUrlParameterName in destinationUrlParameters) {
                                    var destinationUrlParameter = destinationUrlParameters[destinationUrlParameterName];
                                    if (typeof destinationUrlParameter !== 'function') {
                                        if (!firstItem) {
                                            packedParameters += '&';
                                        }
                                        packedParameters += encodeURIComponent(destinationUrlParameterName) + '=' + encodeURIComponent(destinationUrlParameter);
                                        firstItem = false;
                                    }
                                }
                                params += '&' + encodeURIComponent(argName) + '=' + encodeURIComponent(packedParameters);
                            }
                            if (argName == 'destinationUrlPrefix') {
                                params += '&' + encodeURIComponent('dup') + '=' + encodeURIComponent(allArgs[argName]);
                            }
                        }
                        var baseDeliveryUrl = allArgs.baseAdDeliveryUrl || this.backends[allArgs.backend || 'production'].baseAdDeliveryUrl;
                        try {
                            if (location.protocol == 'https:') {
                                params += '&useSecureUrls=true';
                                baseDeliveryUrl = allArgs.secureBaseAdDeliveryUrl || this.backends[allArgs.backend || 'production'].secureBaseAdDeliveryUrl;
                            }
                        } catch (e) {
                        }
                        if (allArgs.renderTemplateUrl || allArgs.useMappedRenderTemplate) {
                            if (allArgs.renderTemplateUrl) {
                                baseDeliveryUrl = allArgs.renderTemplateUrl;
                                if (location.protocol == 'https:') {
                                    baseDeliveryUrl = baseDeliveryUrl.replace(/https?:\/\/cdn\.cxpublic\.com\//gi, this.cdn.template.direct.https);
                                }
                            }
                            if (allArgs.useMappedRenderTemplate) {
                                if (allArgs.widgetId) {
                                    baseDeliveryUrl = this.cdn.template.mapped.http + 'Widget_' + allArgs.widgetId + '.html';
                                    if (!this.hasHistory()) {
                                        baseDeliveryUrl += '?ref=' + encodeURIComponent(location.href);
                                    }
                                } else {
                                    var widgetNamespace = baseDeliveryUrl.indexOf('sandbox') > -1 ? 'AdSpaceSandbox' : 'AdSpaceProduction';
                                    baseDeliveryUrl = this.cdn.template.mapped.http + widgetNamespace + '_' + adSpaceId + '.html';
                                }
                                if (location.protocol == 'https:') {
                                    baseDeliveryUrl = baseDeliveryUrl.replace(/https?:\/\/cdn-templates\.cxpublic\.com\//gi, this.cdn.template.mapped.https);
                                }
                            }
                            if (!allArgs.ctx) {
                                try {
                                    params += '&ctx=' + encodeURIComponent(location.href.replace(/#.*$/, ''));
                                } catch (e) {
                                }
                            }
                        } else if (args.isSlave) {
                            baseDeliveryUrl = 'http' + (location.protocol == 'https:' ? 's://' : '://') + 'cdn.cxense.com/adspace-slave.html';
                        } else if (requestObject.widgetId) {
                            baseDeliveryUrl = this.publicWidgetDataUrl;
                        }
                        if (!isRenderTemplateRequest && media === 'html' && adSpaceId && allArgs.adUnitWidth && allArgs.adUnitHeight) {
                            try {
                                params += '&sz=' + encodeURIComponent('' + allArgs.adUnitWidth + 'x' + allArgs.adUnitHeight);
                            } catch (e) {
                            }
                        }
                        if (!allArgs.usi && persistentUserId) {
                            try {
                                params += '&usi=' + encodeURIComponent(persistentUserId);
                            } catch (e) {
                            }
                        }
                        params += this._getExternalIdsAsUrlParameters();
                        try {
                            params += '&rnd=' + Math.round(Math.random() * 2147483647);
                        } catch (e) {
                        }
                        if (!allArgs.prnd) {
                            try {
                                params += '&prnd=' + this.m_rnd;
                            } catch (e) {
                            }
                        }
                        if (!allArgs.tzo) {
                            try {
                                params += '&tzo=' + encodeURIComponent('' + this.getTimezoneOffset());
                            } catch (e) {
                            }
                        }
                        if (allArgs.uhm) {
                            try {
                                if (location.href.length < 1000) {
                                    params += '&loc=' + encodeURIComponent(location.href);
                                }
                            } catch (e) {
                            }
                        }
                        var margins = this.parseMargins(allArgs['lf-am']);
                        var initialWidth = typeof allArgs.width !== 'undefined' ? allArgs.width : this.calculateAdSpaceSize(allArgs.initialHorizontalAdUnits, allArgs.adUnitWidth, margins.left, margins.right);
                        var initialHeight = typeof allArgs.height !== 'undefined' ? allArgs.height : this.calculateAdSpaceSize(allArgs.initialVerticalAdUnits, allArgs.adUnitHeight, margins.top, margins.bottom);
                        var widgetElId = 'cxWidget_' + Math.random();
                        if (!allArgs.adSpaceIds) {
                            this.m_widgetSpecs[widgetElId] = {
                                adSpaceId: adSpaceId,
                                widgetId: allArgs.widgetId,
                                margins: margins,
                                visible: {
                                    maxPercent: 0,
                                    prevPercent: 0,
                                    timeNone: 0,
                                    timePartly: 0,
                                    timeHalf: 0,
                                    timeFully: 0
                                },
                                callbacks: [],
                                triggers: [],
                                initialHorizontalAdUnits: allArgs.initialHorizontalAdUnits,
                                initialVerticalAdUnits: allArgs.initialVerticalAdUnits,
                                adUnitWidth: allArgs.adUnitWidth,
                                adUnitHeight: allArgs.adUnitHeight,
                                resizeToContentSize: allArgs.resizeToContentSize,
                                onImpressionResult: allArgs.onImpressionResult
                            };
                        }
                        var ifr;
                        if (args.adSpaceIds) {
                            params += '&synchronous=true';
                            ifr = document.createElement('iframe');
                            this.addEventListener(ifr, 'load', args.masterOnLoadHandler);
                            ifr.id = args.masterId;
                            ifr.name = args.masterId;
                            ifr.width = 0;
                            ifr.height = 0;
                            ifr.setAttribute('style', 'display: none;');
                            ifr.src = baseDeliveryUrl + params;
                            var masterTargetElement;
                            if (args.masterTargetElementId) {
                                masterTargetElement = document.getElementById(args.masterTargetElementId);
                            } else {
                                masterTargetElement = document.getElementById('insertAdSpaceBeforeThis_' + args.adSpaceIds[0]);
                                if (!masterTargetElement) {
                                    masterTargetElement = document.getElementById('scriptForAdSpace_' + args.adSpaceIds[0]);
                                }
                            }
                            masterTargetElement.appendChild(ifr);
                        } else if (media === 'html') {
                            try {
                                params += '&parentElementId=' + encodeURIComponent(widgetElId);
                            } catch (e) {
                            }
                            ifr = document.createElement('iframe');
                            ifr.id = widgetElId;
                            ifr.name = widgetElId;
                            ifr.width = initialWidth;
                            ifr.height = initialHeight;
                            ifr.allowTransparency = true;
                            if (allArgs.delayImpression === true) {
                                this.m_widgetSpecs[widgetElId].delayImpressionSrc = baseDeliveryUrl + params;
                                this.m_widgetSpecs[widgetElId].src = this.emptyWidgetUrl;
                            } else {
                                this.m_widgetSpecs[widgetElId].src = baseDeliveryUrl + params;
                            }
                            ifr.src = this.m_widgetSpecs[widgetElId].src;
                            ifr.setAttribute('style', 'display: block;');
                            ifr.setAttribute('scrolling', 'no');
                            ifr.frameBorder = '0';
                            if (args.appendToElementId) {
                                document.getElementById(args.appendToElementId).appendChild(ifr);
                            } else {
                                var targetElementId = args.insertBeforeElementId || args.targetElementId;
                                if (!targetElementId) {
                                    targetElementId = 'insertAdSpaceBeforeThis_' + adSpaceId;
                                }
                                var targetElement = document.getElementById(targetElementId);
                                if (!targetElement) {
                                    targetElementId = 'scriptForAdSpace_' + adSpaceId;
                                    targetElement = document.getElementById(targetElementId);
                                }
                                targetElement.parentNode.insertBefore(ifr, targetElement);
                            }
                            this.m_widgetSpecs[widgetElId].element = ifr;
                        } else {
                            var onGotDataCallback = this.createDelegate(this, function (data) {
                                if (typeof allArgs.renderFunction === 'function') {
                                    allArgs.renderFunction(data, allArgs);
                                }
                                if (allArgs.templateElementId) {
                                    this.renderTemplate(allArgs.templateElementId, allArgs.targetElementId, data, allArgs);
                                }
                                if (allArgs.parentElementId && allArgs.resizeToContentSize && requestObject.widgetId) {
                                    var bodyEl = document.getElementsByTagName('body')[0];
                                    function createDummyDiv() {
                                        var dummyDiv = document.createElement('div');
                                        dummyDiv.innerHTML = '&nbsp;';
                                        dummyDiv.style.clear = 'both';
                                        dummyDiv.style.width = '0';
                                        dummyDiv.style.height = '0';
                                        dummyDiv.style.border = '0';
                                        dummyDiv.style.margin = '0';
                                        dummyDiv.style.padding = '0';
                                        dummyDiv.style.outline = '0';
                                        dummyDiv.style.overflow = 'hidden';
                                        return dummyDiv;
                                    }
                                    var topDummyDiv = createDummyDiv();
                                    var bottomDummyDiv = createDummyDiv();
                                    bodyEl.insertBefore(topDummyDiv, bodyEl.firstChild);
                                    bodyEl.appendChild(bottomDummyDiv);
                                    var currentEl = document.getElementById(allArgs.targetElementId);
                                    var contentWidth = bodyEl.clientWidth || bodyEl.offsetWidth;
                                    while (currentEl && currentEl !== bodyEl) {
                                        contentWidth = currentEl.clientWidth || currentEl.offsetWidth;
                                        currentEl = currentEl.offsetParent;
                                    }
                                    var message = 'method=updateAdSpace' + '&contentWidth=' + contentWidth + '&contentHeight=' + (bodyEl.offsetHeight || bodyEl.clientHeight) + '&elementId=' + encodeURIComponent(allArgs.parentElementId);
                                    this.postMessageToParent(message, '*');
                                    bodyEl.removeChild(topDummyDiv);
                                    bodyEl.removeChild(bottomDummyDiv);
                                }
                                if (typeof allArgs.onImpressionResult === 'function') {
                                    var event = {};
                                    if (data && data.searchResult && data.searchResult.spaces && data.searchResult.spaces[0]) {
                                        var space = data.searchResult.spaces[0];
                                        event.matchedAdCount = space.ads ? space.ads.length : 0;
                                        event.isVerticallyOriented = space.isVerticallyOriented;
                                    }
                                    allArgs.onImpressionResult(event, data, allArgs);
                                }
                            });
                            params += '&callback={{callback}}';
                            if (allArgs.isSlave) {
                                if (document.domain.indexOf('.cxpublic.com') > -1) {
                                    document.domain = 'cxpublic.com';
                                }
                                if (document.domain.indexOf('.ssl.cf2.rackcdn.com') > -1) {
                                    document.domain = 'ssl.cf2.rackcdn.com';
                                }
                                var adResponse = parent.frames[allArgs.masterId].adResponse;
                                var adResponseCopy = { searchResult: { spaces: [] } };
                                for (var dataName in adResponse.searchResult) {
                                    if (adResponse.searchResult.hasOwnProperty(dataName) && dataName !== 'spaces') {
                                        adResponseCopy.searchResult[dataName] = adResponse.searchResult[dataName];
                                    }
                                }
                                for (var j = 0; j < adResponse.searchResult.spaces.length; j++) {
                                    var adSpace = adResponse.searchResult.spaces[j];
                                    if (adSpace.id === allArgs.adSpaceId) {
                                        adResponseCopy.searchResult.spaces.push(adSpace);
                                        break;
                                    }
                                }
                                onGotDataCallback(adResponseCopy);
                            } else {
                                this.jsonpRequest(baseDeliveryUrl + params, onGotDataCallback, { async: !args.synchronous });
                            }
                            if (allArgs.targetElementId) {
                                var widgetTargetElement = document.getElementById(allArgs.targetElementId);
                                if (widgetTargetElement) {
                                    this.m_widgetSpecs[widgetElId].element = widgetTargetElement;
                                }
                            }
                        }
                    },
                    trackElement: function (params) {
                        var element = params.element || document.getElementById(params.elementId);
                        var elementId = element.id || 'cXElId' + this._randomString();
                        if (!this.m_widgetSpecs[elementId]) {
                            this.m_widgetSpecs[elementId] = {
                                element: element,
                                widgetElId: elementId,
                                visible: {
                                    maxPercent: 0,
                                    prevPercent: 0,
                                    timeNone: 0,
                                    timePartly: 0,
                                    timeHalf: 0,
                                    timeFully: 0
                                },
                                callbacks: [],
                                triggers: []
                            };
                        }
                        if (params.callback) {
                            this.m_widgetSpecs[elementId].callbacks.push(params.callback);
                        }
                        if (params.trigger) {
                            this.m_widgetSpecs[elementId].triggers.push(params.trigger);
                        }
                    },
                    _isAmpMessage: function (event, type) {
                        return event.source == window.parent && event.origin != window.location.origin && event.data && event.data.sentinel == 'amp' && event.data.type == type;
                    },
                    isAmpIFrame: function () {
                        return location.hash.match('amp=1');
                    },
                    trackAmpIFrame: function (params) {
                        if (this.isTopWindow()) {
                            return;
                        }
                        var element = 'amp-iframe-widget';
                        var elementId = 'amp-iframe-widget';
                        if (!this.m_widgetSpecs[elementId]) {
                            this.m_widgetSpecs[elementId] = {
                                element: element,
                                widgetElId: elementId,
                                visible: {
                                    maxPercent: 0,
                                    prevPercent: 0,
                                    timeNone: 0,
                                    timePartly: 0,
                                    timeHalf: 0,
                                    timeFully: 0
                                },
                                callbacks: [],
                                triggers: []
                            };
                        }
                        window.parent.postMessage({
                            sentinel: 'amp',
                            type: 'send-intersections'
                        }, '*');
                        if (params.callback) {
                            this.m_widgetSpecs[elementId].callbacks.push(params.callback);
                        }
                        if (params.trigger) {
                            this.m_widgetSpecs[elementId].triggers.push(params.trigger);
                        }
                        var that = this;
                        window.addEventListener('message', function (event) {
                            if (!that._isAmpMessage(event, 'intersection')) {
                                return;
                            }
                            event.data.changes.forEach(function (change) {
                                var now = new Date().getTime();
                                var timeDelta = now - that.m_activityState.prevTime;
                                var widgetSpec = that.m_widgetSpecs[elementId];
                                var visiblePercent = Math.round(change.intersectionRatio * 100);
                                if (visiblePercent === 100 && widgetSpec.visible.prevPercent === 100) {
                                    widgetSpec.visible.timeFully += timeDelta;
                                }
                                if (visiblePercent >= 50 && widgetSpec.visible.prevPercent >= 50) {
                                    widgetSpec.visible.timeHalf += timeDelta;
                                }
                                if (visiblePercent > 0 && widgetSpec.visible.prevPercent > 0) {
                                    widgetSpec.visible.timePartly += timeDelta;
                                } else {
                                    widgetSpec.visible.timeNone += timeDelta;
                                }
                                if (visiblePercent > widgetSpec.visible.maxPercent) {
                                    widgetSpec.visible.maxPercent = visiblePercent;
                                }
                                if (widgetSpec.callbacks.length > 0 || widgetSpec.triggers.length > 0) {
                                    var state = {
                                        visibility: {
                                            percent: visiblePercent,
                                            previousPercent: widgetSpec.visible.prevPercent,
                                            maxPercent: widgetSpec.visible.maxPercent,
                                            timeNone: widgetSpec.visible.timeNone / 1000,
                                            timeSome: widgetSpec.visible.timePartly / 1000,
                                            timeHalf: widgetSpec.visible.timeHalf / 1000,
                                            timeFull: widgetSpec.visible.timeFully / 1000
                                        }
                                    };
                                    for (var j = 0; j < widgetSpec.callbacks.length; j++) {
                                        try {
                                            widgetSpec.callbacks[j](state);
                                        } catch (e) {
                                        }
                                    }
                                    for (var k = 0; k < widgetSpec.triggers.length; k++) {
                                        var trigger = widgetSpec.triggers[k];
                                        try {
                                            if (trigger.on(state)) {
                                                if (trigger.callback) {
                                                    try {
                                                        trigger.callback(state);
                                                    } catch (e) {
                                                    }
                                                }
                                                if (trigger.imageUrl) {
                                                    new Image().src = trigger.imageUrl;
                                                }
                                                widgetSpec.triggers.splice(k, 1);
                                                k--;
                                            }
                                        } catch (e) {
                                        }
                                    }
                                }
                                widgetSpec.visible.prevPercent = visiblePercent;
                            });
                        });
                    },
                    JSON: {
                        stringify: function (item) {
                            if (typeof JSON !== 'undefined' && typeof JSON.stringify === 'function') {
                                return JSON.stringify(item);
                            }
                            function _stringify(item, depth) {
                                if (depth > 30)
                                    throw 'JSON.stringify depth limit reached';
                                if (item === null)
                                    return 'null';
                                var str = '';
                                switch (typeof item) {
                                case 'number':
                                    str += Number.prototype.toString.call(item);
                                    break;
                                case 'boolean':
                                    str += Boolean.prototype.toString.call(item);
                                    break;
                                case 'string':
                                    var escapedStr = item.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\f/g, '\\f').replace(/\u0008/g, '\\b');
                                    for (var k = 0; k < 32; k++) {
                                        escapedStr = escapedStr.replace(new RegExp(String.fromCharCode(k), 'g'), '\\u00' + (k < 16 ? '0' : '') + k.toString(16));
                                    }
                                    str += '"' + escapedStr + '"';
                                    break;
                                case 'object':
                                    if (cX.library.isArray(item)) {
                                        str += '[';
                                        for (var i = 0; i < item.length; i++) {
                                            str += (i !== 0 ? ',' : '') + _stringify(item[i], depth + 1);
                                        }
                                        str += ']';
                                    } else {
                                        str += '{';
                                        var firstTime = true;
                                        for (var prop in item) {
                                            if (item.hasOwnProperty(prop) && typeof item[prop] !== 'undefined') {
                                                str += (firstTime ? '' : ',') + _stringify(prop, depth + 1) + ':' + _stringify(item[prop], depth + 1);
                                                firstTime = false;
                                            }
                                        }
                                        str += '}';
                                    }
                                    break;
                                }
                                return str;
                            }
                            return _stringify(item, 0);
                        }
                    },
                    getElementPosition: function (el) {
                        var elementPos = {
                            left: 0,
                            top: 0
                        };
                        if (el.offsetParent) {
                            do {
                                elementPos.left += el.offsetLeft;
                                elementPos.top += el.offsetTop;
                            } while (el = el.offsetParent);
                        }
                        return elementPos;
                    },
                    getWindowSize: function () {
                        var windowSize = {
                            width: 0,
                            height: 0
                        };
                        if (typeof window.innerWidth == 'number') {
                            windowSize.width = window.innerWidth;
                            windowSize.height = window.innerHeight;
                        } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                            windowSize.width = document.documentElement.clientWidth;
                            windowSize.height = document.documentElement.clientHeight;
                        } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                            windowSize.width = document.body.clientWidth;
                            windowSize.height = document.body.clientHeight;
                        }
                        return windowSize;
                    },
                    getDocumentSize: function () {
                        var b = document.body || {}, d = document.documentElement || {};
                        var width = Math.max(d.clientWidth || 0, b.scrollWidth || 0, d.scrollWidth || 0, b.offsetWidth || 0, d.offsetWidth || 0);
                        var height = Math.max(d.clientHeight || 0, b.scrollHeight || 0, d.scrollHeight || 0, b.offsetHeight || 0, d.offsetHeight || 0);
                        return {
                            width: width,
                            height: height
                        };
                    },
                    getScrollPos: function () {
                        var scrollPos = {
                            left: 0,
                            top: 0
                        };
                        if (this.m_activityState.currScrollTop || this.m_activityState.currScrollLeft) {
                            scrollPos.top = this.m_activityState.currScrollTop;
                            scrollPos.left = this.m_activityState.currScrollLeft;
                        } else if (typeof window.pageYOffset == 'number') {
                            scrollPos.top = window.pageYOffset;
                            scrollPos.left = window.pageXOffset;
                        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                            scrollPos.top = document.body.scrollTop;
                            scrollPos.left = document.body.scrollLeft;
                        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            scrollPos.top = document.documentElement.scrollTop;
                            scrollPos.left = document.documentElement.scrollLeft;
                        }
                        return scrollPos;
                    },
                    _onHIDEvent: function () {
                        try {
                            this.m_activityState.hadHIDActivity = true;
                        } catch (e) {
                        }
                        return true;
                    },
                    _onMouseMoveEvent: function (eventArg) {
                        try {
                            var event = eventArg || window.event;
                            if (event) {
                                if (Math.abs(this.m_activityState.prevScreenX - event.screenX) > 1 || Math.abs(this.m_activityState.prevScreenY - event.screenY) > 1) {
                                    this.m_activityState.prevScreenX = event.screenX;
                                    this.m_activityState.prevScreenY = event.screenY;
                                    this.m_activityState.hadHIDActivity = true;
                                }
                            }
                        } catch (e) {
                        }
                        return true;
                    },
                    _onClickEvent: function (eventArg) {
                        try {
                            this.m_activityState.hadHIDActivity = true;
                            var event = eventArg || window.event;
                            if (event) {
                                var target = event.target || event.srcElement;
                                for (var i = 0; i < 10 && typeof target !== 'undefined' && target; i++) {
                                    if (target.nodeType === 1 && (target.nodeName === 'a' || target.nodeName === 'A') && typeof target.href === 'string') {
                                        this.m_activityState.exitLink = target.href;
                                        this._writeAtfr();
                                        break;
                                    }
                                    target = target.parentNode;
                                }
                            }
                        } catch (e) {
                        }
                        return true;
                    },
                    reportActivity: function () {
                        this.m_activityState.hadHIDActivity = true;
                    },
                    shouldPollActivity: function (value) {
                        this.shouldPoll = value;
                    },
                    _shouldPollActivity: function () {
                        return typeof this.shouldPoll === 'boolean' || typeof cX.shouldPoll === 'boolean' ? this.shouldPoll || cX.shouldPoll : true;
                    },
                    _onPollActiveTime: function () {
                        window.requestAnimationFrame(cX.library.createDelegate(this, function () {
                            var hadActivity = false;
                            try {
                                var windowSize = this.getWindowSize();
                                if (this.m_activityState.prevWindowWidth != windowSize.width || this.m_activityState.prevWindowHeight != windowSize.height) {
                                    this.m_activityState.prevWindowWidth = windowSize.width;
                                    this.m_activityState.prevWindowHeight = windowSize.height;
                                    hadActivity = true;
                                }
                            } catch (e) {
                            }
                            try {
                                var scrollPos = this.getScrollPos();
                                if (this.m_activityState.prevScrollLeft != scrollPos.left || this.m_activityState.prevScrollTop != scrollPos.top) {
                                    this.m_activityState.prevScrollLeft = scrollPos.left;
                                    this.m_activityState.prevScrollTop = scrollPos.top;
                                    hadActivity = true;
                                }
                                this.m_activityState.maxViewLeft = Math.max(scrollPos.left + windowSize.width, this.m_activityState.maxViewLeft);
                                this.m_activityState.maxViewTop = Math.max(scrollPos.top + windowSize.height, this.m_activityState.maxViewTop);
                            } catch (e) {
                            }
                            var now = new Date().getTime();
                            if (hadActivity || this.m_activityState.hadHIDActivity) {
                                this.m_activityState.hadHIDActivity = false;
                                var activeTimeDelta = Math.min(30000, now - this.m_activityState.prevActivityTime);
                                this.m_activityState.activeTime += activeTimeDelta;
                                this.m_activityState.prevActivityTime = now;
                                this._writeAtfr();
                            }
                        }));
                    },
                    _onPollActivity: function () {
                        if (!this._shouldPollActivity()) {
                            return;
                        }
                        var hadActivity = false;
                        try {
                            var windowSize = this.getWindowSize();
                            if (this.m_activityState.prevWindowWidth != windowSize.width || this.m_activityState.prevWindowHeight != windowSize.height) {
                                this.m_activityState.prevWindowWidth = windowSize.width;
                                this.m_activityState.prevWindowHeight = windowSize.height;
                                hadActivity = true;
                            }
                        } catch (e) {
                        }
                        try {
                            var scrollPos = this.getScrollPos();
                            if (this.m_activityState.prevScrollLeft != scrollPos.left || this.m_activityState.prevScrollTop != scrollPos.top) {
                                this.m_activityState.prevScrollLeft = scrollPos.left;
                                this.m_activityState.prevScrollTop = scrollPos.top;
                                hadActivity = true;
                            }
                            this.m_activityState.maxViewLeft = Math.max(scrollPos.left + windowSize.width, this.m_activityState.maxViewLeft);
                            this.m_activityState.maxViewTop = Math.max(scrollPos.top + windowSize.height, this.m_activityState.maxViewTop);
                        } catch (e) {
                        }
                        var now = new Date().getTime();
                        if (hadActivity || this.m_activityState.hadHIDActivity) {
                            this.m_activityState.hadHIDActivity = false;
                            var activeTimeDelta = Math.min(30000, now - this.m_activityState.prevActivityTime);
                            this.m_activityState.activeTime += activeTimeDelta;
                            this.m_activityState.prevActivityTime = now;
                            this._writeAtfr();
                        }
                        if (this.isTopWindow() || this.m_activityState.parentMetrics) {
                            var timeDelta = now - this.m_activityState.prevTime;
                            this.m_activityState.prevTime = now;
                            for (var widgetElId in this.m_widgetSpecs) {
                                try {
                                    if (this.m_widgetSpecs.hasOwnProperty(widgetElId)) {
                                        var widgetSpec = this.m_widgetSpecs[widgetElId];
                                        if (widgetSpec && widgetSpec.hasOwnProperty('element') && widgetSpec.element) {
                                            var widgetEl = widgetSpec.element;
                                            var widgetPos = this.getElementPosition(widgetEl);
                                            var widgetSize = {
                                                width: widgetEl.offsetWidth,
                                                height: widgetEl.offsetHeight
                                            };
                                            var overlapLeft = Math.max(widgetPos.left, scrollPos.left);
                                            var overlapRight = Math.min(widgetPos.left + widgetSize.width, scrollPos.left + windowSize.width);
                                            var overlapTop = Math.max(widgetPos.top, scrollPos.top);
                                            var overlapBottom = Math.min(widgetPos.top + widgetSize.height, scrollPos.top + windowSize.height);
                                            var parentMetrics = this.m_activityState.parentMetrics;
                                            if (parentMetrics) {
                                                overlapLeft = Math.max(parentMetrics.overlapPos.left + scrollPos.left, overlapLeft);
                                                overlapRight = Math.min(parentMetrics.overlapPos.left + parentMetrics.overlapSize.width + scrollPos.left, overlapRight);
                                                overlapTop = Math.max(parentMetrics.overlapPos.top + scrollPos.top, overlapTop);
                                                overlapBottom = Math.min(parentMetrics.overlapPos.top + parentMetrics.overlapSize.height + scrollPos.top, overlapBottom);
                                            }
                                            var overlapWidth = Math.max(overlapRight - overlapLeft, 0);
                                            var overlapHeight = Math.max(overlapBottom - overlapTop, 0);
                                            var visiblePercent = Math.round(overlapWidth * overlapHeight / (widgetSize.width * widgetSize.height) * 100);
                                            if (visiblePercent === 100 && widgetSpec.visible.prevPercent === 100) {
                                                widgetSpec.visible.timeFully += timeDelta;
                                            }
                                            if (visiblePercent >= 50 && widgetSpec.visible.prevPercent >= 50) {
                                                widgetSpec.visible.timeHalf += timeDelta;
                                            }
                                            if (visiblePercent > 0 && widgetSpec.visible.prevPercent > 0) {
                                                widgetSpec.visible.timePartly += timeDelta;
                                            } else {
                                                widgetSpec.visible.timeNone += timeDelta;
                                            }
                                            if (visiblePercent > widgetSpec.visible.maxPercent) {
                                                if (widgetSpec.visible.maxPercent === 0) {
                                                    try {
                                                        if (typeof widgetSpec.delayImpressionSrc === 'string') {
                                                            widgetSpec.src = widgetSpec.delayImpressionSrc;
                                                            widgetEl.contentWindow.location.replace(widgetSpec.src);
                                                        }
                                                    } catch (e) {
                                                    }
                                                }
                                                widgetSpec.visible.maxPercent = visiblePercent;
                                            }
                                            if (widgetSpec.callbacks.length > 0 || widgetSpec.triggers.length > 0) {
                                                var state = {
                                                    visibility: {
                                                        percent: visiblePercent,
                                                        previousPercent: widgetSpec.visible.prevPercent,
                                                        maxPercent: widgetSpec.visible.maxPercent,
                                                        timeNone: widgetSpec.visible.timeNone / 1000,
                                                        timeSome: widgetSpec.visible.timePartly / 1000,
                                                        timeHalf: widgetSpec.visible.timeHalf / 1000,
                                                        timeFull: widgetSpec.visible.timeFully / 1000
                                                    }
                                                };
                                                for (var j = 0; j < widgetSpec.callbacks.length; j++) {
                                                    try {
                                                        widgetSpec.callbacks[j](state);
                                                    } catch (e) {
                                                    }
                                                }
                                                for (var k = 0; k < widgetSpec.triggers.length; k++) {
                                                    var trigger = widgetSpec.triggers[k];
                                                    try {
                                                        if (trigger.on(state)) {
                                                            if (trigger.callback) {
                                                                try {
                                                                    trigger.callback(state);
                                                                } catch (e) {
                                                                }
                                                            }
                                                            if (trigger.imageUrl) {
                                                                new Image().src = trigger.imageUrl;
                                                            }
                                                            widgetSpec.triggers.splice(k, 1);
                                                            k--;
                                                        }
                                                    } catch (e) {
                                                    }
                                                }
                                            }
                                            widgetSpec.visible.prevPercent = visiblePercent;
                                            if (typeof widgetEl.nodeName === 'string' && widgetEl.nodeName.toUpperCase() === 'IFRAME') {
                                                var documentSize = this.m_documentSizeRequestedFromChild ? this.getDocumentSize() : {
                                                    width: -1,
                                                    height: -1
                                                };
                                                var metrics = [
                                                    now,
                                                    scrollPos.left,
                                                    scrollPos.top,
                                                    windowSize.width,
                                                    windowSize.height,
                                                    widgetPos.left,
                                                    widgetPos.top,
                                                    widgetSize.width,
                                                    widgetSize.height,
                                                    overlapLeft - widgetPos.left,
                                                    overlapTop - widgetPos.top,
                                                    overlapWidth,
                                                    overlapHeight,
                                                    documentSize.width,
                                                    documentSize.height
                                                ];
                                                for (var i = 0; i < metrics.length; i++) {
                                                    metrics[i] = Math.round(metrics[i]);
                                                }
                                                var message = 'method=updateParentMetrics&parentMetrics=' + metrics.join(',');
                                                if (this.isTopWindow()) {
                                                    this._sendMessageToChild(widgetEl, widgetSpec.src, message, '*');
                                                }
                                            }
                                        }
                                    }
                                } catch (e) {
                                }
                            }
                            this._writeAtfr();
                        }
                    },
                    _onPollFragmentMessage: function () {
                        if (location.hash !== this.m_prevLocationHash) {
                            var hashArgs = this.parseHashArgs();
                            try {
                                if (typeof hashArgs.cXPostMsg !== 'undefined') {
                                    this._handlePostMessage({
                                        origin: '',
                                        data: hashArgs.cXPostMsg
                                    });
                                    if (this.isTopWindow()) {
                                        var newHash = this.m_prevLocationHash.replace(/^#/, '');
                                        if (newHash === '') {
                                            newHash = '!';
                                        }
                                        location.hash = newHash;
                                    }
                                }
                            } catch (e) {
                            }
                            this.m_prevLocationHash = location.hash;
                        }
                    },
                    _writeAtfr: function () {
                        window.requestAnimationFrame(this.createDelegate(this, function () {
                            const $___old_3d81e856ae90186e = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_3d81e856ae90186e)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                                return function () {
                                    if (this.hasLocalStorage() && this.m_activityState.activeTime > 0) {
                                        var atfr = '';
                                        atfr += '&altm=' + this.m_scriptStartTime;
                                        atfr += '&arnd=' + this.m_rnd;
                                        atfr += '&aatm=' + Math.round(this.m_activityState.activeTime / 1000);
                                        atfr += '&axtl=' + encodeURIComponent(this.m_activityState.exitLink);
                                        var windowSize = this.getWindowSize();
                                        atfr += '&awsz=' + encodeURIComponent('' + windowSize.width + 'x' + windowSize.height);
                                        atfr += '&amvw=' + encodeURIComponent('' + this.m_activityState.maxViewLeft + 'x' + this.m_activityState.maxViewTop);
                                        atfr += '&ascp=' + encodeURIComponent('' + this.m_activityState.scrollDepthPercentage + 'x' + this.m_activityState.scrollDepthPixels);
                                        atfr += '&aclk=' + (this.isRecsDestination() ? 1 : 0);
                                        var ids = '';
                                        var sizes = '';
                                        var times = '';
                                        var positions = '';
                                        var visibility = '';
                                        var widgetIndex = 0;
                                        for (var widgetElId in this.m_widgetSpecs) {
                                            var widgetSpec = this.m_widgetSpecs[widgetElId];
                                            if (widgetSpec && (typeof widgetSpec.adSpaceId === 'string' || typeof widgetSpec.widgetId === 'string')) {
                                                var widgetId = widgetSpec.adSpaceId || widgetSpec.widgetId;
                                                ids += (widgetIndex == 0 ? '&aaid=' : ',') + encodeURIComponent(widgetId);
                                                if (widgetIndex === 0) {
                                                    visibility = '&aavp=';
                                                    positions = '&aaps=';
                                                    sizes = '&aasz=';
                                                    times = '&aavt=';
                                                } else {
                                                    visibility += ',';
                                                    positions += ',';
                                                    sizes += ',';
                                                    times += ',';
                                                }
                                                if (widgetSpec.element) {
                                                    var position = this.getElementPosition(widgetSpec.element);
                                                    visibility += encodeURIComponent('' + widgetSpec.visible.maxPercent);
                                                    positions += encodeURIComponent('' + position.left + 'x' + position.top);
                                                    sizes += encodeURIComponent('' + widgetSpec.element.offsetWidth + 'x' + widgetSpec.element.offsetHeight);
                                                    times += encodeURIComponent('' + Math.round(widgetSpec.visible.timePartly / 1000) + 'x' + Math.round(widgetSpec.visible.timeFully / 1000));
                                                }
                                                widgetIndex++;
                                                if (widgetIndex > 10) {
                                                    break;
                                                }
                                            }
                                        }
                                        atfr += ids + visibility + times + sizes + positions;
                                        try {
                                            if (this.hasLocalStorage()) {
                                                localStorage.setItem('_cX_atfr', atfr);
                                            }
                                        } catch (e) {
                                        }
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_3d81e856ae90186e)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_3d81e856ae90186e));
                            }
                        }));
                    },
                    cint: function (prefix, campaignId) {
                        if (this.isFirefox() || this.isSafari())
                            return;
                        if (prefix !== '219' && prefix !== '220' && prefix !== '221' && prefix !== '222' && prefix !== '223' && prefix !== '224' && prefix !== '0037') {
                            return;
                        }
                        if (this._doesNotHaveConsent('segment') || cX.getCookie('cX_cint_set') === '1' || this.hasLocalStorage() && localStorage.getItem('cX_cint_set') === '1' || cX.getCookie('cbcdfp') !== null) {
                            return;
                        }
                        var clean_userId = encodeURIComponent(this.getUserId());
                        if (prefix !== '0037') {
                            var id = 'cxense_' + prefix + ':' + clean_userId;
                        } else {
                            var id = 'evid_0037:' + clean_userId;
                            if (campaignId === undefined) {
                                prefix = '502520002';
                            } else {
                                prefix = encodeURIComponent(campaignId);
                            }
                        }
                        var url = 'https://c.cintnetworks.com/?a=2495&i=' + prefix + '&id=' + id;
                        new Image().src = url;
                        cX.setCookie('cX_cint_set', '1', 7);
                        this._setLocalStorage('cX_cint_set', '1', 7);
                    },
                    sync: function () {
                        if (this._doesNotHaveConsent('ad'))
                            return;
                        cX.Array.forEach(arguments, function (provider) {
                            var tmpProvider = provider;
                            var customerId;
                            var params = '';
                            if (typeof tmpProvider === 'object') {
                                if (tmpProvider.partner && tmpProvider.customerId) {
                                    provider = tmpProvider.partner;
                                    customerId = tmpProvider.customerId;
                                } else {
                                    return;
                                }
                                if (tmpProvider.params) {
                                    tmpProvider.params.forEach(function (e) {
                                        params += '&' + e.key + '=' + e.value;
                                    });
                                }
                            }
                            try {
                                switch (this._getNumberOfSyncWithExternalParty(provider)) {
                                case 1:
                                    this._setTimeoutInCookie(1);
                                    break;
                                case 2:
                                    this._setTimeoutInCookie(604800);
                                    break;
                                default:
                                    return;
                                }
                            } catch (e) {
                            }
                            var imageFunction;
                            var siteIdParam = this.m_siteId;
                            var getTCData = function (cxenseUserId, callback) {
                                if (window.__tcfapi) {
                                    window.__tcfapi('getTCData', 2, function (data) {
                                        callback(cxenseUserId, data && data.tcString ? data.tcString : '');
                                    });
                                } else {
                                    callback(cxenseUserId, cX.getCookie('euconsent-v2'));
                                }
                            };
                            switch (provider) {
                            case 'pubmatic':
                                imageFunction = function (cxenseUserId, thisObj) {
                                    thisObj._createCommsIFrame({ src: 'https://ads.pubmatic.com/AdServer/js/user_sync.html?p=' + customerId + '&predirect=https%3A%2F%2Fcsyn.cxense.com%2Fpcs.gif%3Fcxsite%3D' + siteIdParam + '%26userId%3D' });
                                };
                                break;
                            case 'bla':
                                imageFunction = function (cxenseUserId, thisObj) {
                                    new Image().src = 'https://aid.send.microad.jp/asr?v=1&code=dY-5ZLLSddc&format=pixel';
                                };
                                break;
                            case 'smart':
                                imageFunction = function (cxenseUserId) {
                                    getTCData(cxenseUserId, function (cxenseUserId, consentString) {
                                        new Image().src = 'https://sync.smartadserver.com/getuid?gdpr=' + (consentString ? '1' : '0') + '&gdpr_consent=' + consentString + '&url=' + encodeURIComponent('https://csyn.cxense.com/smt.png?cxsite=' + siteIdParam + '&userId=[sas_uid]&cxckp=' + cxenseUserId);
                                    });
                                };
                                break;
                            case 'simpli':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://um.simpli.fi/cxense';
                                };
                                break;
                            case 'xl8':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://loadm.exelator.com/load/?p=204&g=820&j=0';
                                };
                                break;
                            case 'neu':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://aa.agkn.com/adscores/g.pixel?sid=9212271498';
                                };
                                break;
                            case 'p161':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://ads.creative-serving.com/cm?redir=https%3A%2F%2Fcsyn.cxense.com%2Fpfm.png%3Fcxsite%3D' + siteIdParam + '%26uuid%3D%24%7BUUID%7D%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'liveramp':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://idsync.rlcdn.com/421746.gif?partner_uid=' + cxenseUserId;
                                };
                                break;
                            case 'liveramp2':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://csyn-r.cxense.com/?cxsite=' + siteIdParam + '&partnerId=lr2&redir=https%3A%2F%2Fidsync.rlcdn.com%2F421746.gif%3Fpartner_uid%3D%24%7BUUID%7D&cxtag';
                                };
                                break;
                            case 'adform':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://csyn-r.cxense.com/?cxsite=' + siteIdParam + '&partnerId=csr&redir=https%3A%2F%2Fdmp.adform.net%2Fserving%2Fcookie%2Fmatch%2F%3Fparty%3D1077%26cid%3D%24%7BUUID%7D%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'ddp':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=cxense_ddp&google_cm&cxckp=' + cxenseUserId + '&cxsite=' + siteIdParam;
                                };
                                break;
                            case 'kccs':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://kcxcs.deqwas.net/DmpSyncService/Sync.aspx';
                                };
                                break;
                            case 'scaleout':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://tg.socdm.com/aux/idsync?proto=cxense';
                                };
                                break;
                            case 'aone':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://aw.dw.impact-ad.jp/c/u/?oid=' + customerId + '&rdr=https://csyn.cxense.com/aon.png?customerId=' + customerId + '%26uid%3D%7BAONEID%7D%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'frk':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://sync.dmp.fout.jp/serve/?id=13336&mt=213';
                                };
                                break;
                            case 'appnexus':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://secure.adnxs.com/getuid?https%3A%2F%2Fcsyn.cxense.com%2Fapn.png%3Fcxsite%3D' + siteIdParam + '%26uid%3D%24UID%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'aam':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://dpm.demdex.net/ibs:redir=https%3a%2f%2fcsyn%2ecxense%2ecom%2faam%2epng%3fcxsite%3D' + siteIdParam + '%26userId%3d%24%7bDD_UUID%7d%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'xro':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://dex.advg.jp/dx/p/sync?_aid=111&_page=2257';
                                };
                                break;
                            case 'pdx':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://tags.bluekai.com/site/48528?redir=https%3A%2F%2Fcsyn.cxense.com%2Fpdx.png%3Fcxsite%3D' + siteIdParam + '%26userId%3D%24_BK_UUID%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'frw':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://ads.stickyadstv.com/data-registering?dataProviderId=1233&redirectId=1617';
                                };
                                break;
                            case 'adition':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://dsp.adfarm1.adition.com/cookie/?redirect=https%3A%2F%2Fcsyn.cxense.com%2Fsia.png%3Fcxsite%3D' + siteIdParam + '%26userId%3D%25%25COOKIE%25%25%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'imdigital':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://ad.360yield.com/ux?publisher_id=' + customerId + '&publisher_dmp_id=5&r=https%3A%2F%2Fcsyn.cxense.com%2Fcoo.png%3Fcxsite%3D' + siteIdParam + '%26userId%3D%7bPUB_USER_ID%7d%26cxckp%3D' + cxenseUserId;
                                };
                                break;
                            case 'admatrix':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://csyn-r.cxense.com/?cxsite=' + siteIdParam + '&partnerId=adm&redir=https%3A%2F%2Frelay-dsp.t-ad-m.asia%2Fdmp%2Fsync%2Fbizmatrix%2Fasync%3Fpid%3D' + customerId + '%26uid%3D' + cxenseUserId;
                                };
                                break;
                            case 'rub':
                                imageFunction = function (cxenseUserId) {
                                    getTCData(cxenseUserId, function (cxenseUserId, consentString) {
                                        new Image().src = 'https://csyn-r.cxense.com/?cxsite=' + siteIdParam + '&partnerId=rub&redir=https' + encodeURIComponent('://token.rubiconproject.com/token?pid=34138&puid=${UUID}&gdpr=' + (consentString ? '1' : '0') + '&gdpr_consent=' + consentString + '&cxckp=' + cxenseUserId);
                                    });
                                };
                                break;
                            case 'spx':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://sync.search.spotxchange.com/audience_sync/19?redir=https' + encodeURIComponent('://csyn.cxense.com/spx.png?cxsite=' + siteIdParam + '&uuid=$SPOTX_AUDIENCE_ID&cxckp=' + cxenseUserId);
                                };
                                break;
                            case 'lgd':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://cr-p10350.ladsp.jp/pid/10350';
                                };
                                break;
                            case 'imi':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://sync.im-apps.net/imid/redirect?cid=' + customerId + '&tid=' + tmpProvider.testId + params;
                                };
                                break;
                            case 'ttd':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://match.adsrvr.org/track/cmf/generic?ttd_pid=' + customerId + '&ttd_tpi=1';
                                };
                                break;
                            case 'test':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://csyn-r-stage.cxense.com/?partnerId=test&redir=https%3A%2F%2Fcsyn-stage.cxense.com%2Ftest.gif%3FuserId%3D%24%7BUUID%7D';
                                };
                                break;
                            case 'tdi':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://in.treasuredata.com/postback/v3/event/datacurrent_pianojapan/cxense_rd?td_redirect=https%3A%2F%2Fcsyn.cxense.com%2Ftdi.png%3Ftd_global_id=td_global_id&td_write_key=8487/8f9ae55cc2626e48d85a6e19cdf9c9030a75f3ac&td_global_id=td_global_id';
                                };
                                break;
                            case 'smc':
                                imageFunction = function (cxenseUserId) {
                                    new Image().src = 'https://sync.sxp.smartclip.net/sync?type=red&dsp=93';
                                };
                                break;
                            case 'ntv':
                                imageFunction = function (cxenseUserId) {
                                    getTCData(cxenseUserId, function (cxenseUserId, consentString) {
                                        new Image().src = 'https://jadserve.postrelease.com/dmp/19?gdpr=' + (consentString ? '1' : '0') + '&gdpr_consent=' + consentString + '&ntv_r=https' + encodeURIComponent('://csyn.cxense.com/ntv.png?userId=NTV_USER_ID');
                                    });
                                };
                                break;
                            }
                            if (imageFunction !== null && imageFunction !== undefined) {
                                this._syncWithGlobalId(imageFunction);
                            }
                        }, this);
                    },
                    _syncWithGlobalId: function (callback) {
                        if (this.getCxenseUserId()) {
                            callback(encodeURIComponent(this.getCxenseUserId()), this);
                        } else {
                            setTimeout(this.createDelegate(this, function () {
                                this._syncWithGlobalId(callback);
                            }), 1000);
                        }
                    },
                    _getNumberOfSyncWithExternalParty: function (provider) {
                        var key = 'cx_partner';
                        var getStorageItem = function () {
                            const $___old_42212447f37fb3b8 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                            try {
                                if ($___old_42212447f37fb3b8)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f28674773787b000.sessionStorage));
                                return function () {
                                    try {
                                        if (this.hasSessionStorage()) {
                                            return sessionStorage.getItem(key);
                                        } else {
                                            return this.getCookie(key);
                                        }
                                    } catch (e) {
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_42212447f37fb3b8)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___old_42212447f37fb3b8));
                            }
                        };
                        var setStorageItem = function (storageItem) {
                            const $___old_858f4bf8ba6ee218 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                            try {
                                if ($___old_858f4bf8ba6ee218)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f28674773787b000.sessionStorage));
                                return function () {
                                    try {
                                        if (this.hasSessionStorage()) {
                                            sessionStorage.setItem(key, storageItem);
                                        } else {
                                            this.setCookie(key, storageItem, null, '/', this.getTopLevelDomain());
                                        }
                                    } catch (e) {
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_858f4bf8ba6ee218)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___old_858f4bf8ba6ee218));
                            }
                        };
                        var incrementNumberOfSyncWithExternalParty = function (provider, storageItem) {
                            var count;
                            if (storageItem === null || typeof storageItem === 'undefined') {
                                storageItem = provider + '=1';
                                count = 1;
                            } else {
                                if (storageItem.indexOf(provider) < 0) {
                                    storageItem = storageItem + ',' + provider + '=1';
                                    count = 1;
                                } else {
                                    var itemsArr = storageItem.split(',');
                                    var updatedItemsArr = [];
                                    cX.Array.forEach(itemsArr, function (item) {
                                        if (item.substring(0, item.indexOf('=')) === provider) {
                                            count = parseInt(item.substring(provider.length + 1), 10) + 1;
                                            item = provider + '=' + count;
                                        }
                                        updatedItemsArr.push(item);
                                    }, this);
                                    storageItem = updatedItemsArr.join();
                                }
                            }
                            setStorageItem.call(this, storageItem);
                            return count;
                        };
                        var storageItem = getStorageItem.call(this);
                        try {
                            var countSync = incrementNumberOfSyncWithExternalParty.call(this, provider, storageItem);
                        } catch (e) {
                        }
                        return countSync;
                    },
                    _setTimeoutInCookie: function (timeout) {
                        this.setCookie('cstp', timeout, null, '/', this.getTopLevelDomain());
                    },
                    invoke: function (func) {
                        func.apply(window, Array.prototype.slice.call(arguments, 1));
                    },
                    _throttle: function (func, wait) {
                        var context, args, result;
                        var timeout = null;
                        var previous = 0;
                        var later = function () {
                            previous = new Date();
                            timeout = null;
                            result = func.apply(context, args);
                        };
                        return function () {
                            var now = new Date();
                            if (!previous)
                                previous = now;
                            var remaining = wait - (now - previous);
                            context = this;
                            args = arguments;
                            if (remaining <= 0) {
                                clearTimeout(timeout);
                                timeout = null;
                                previous = now;
                                result = func.apply(context, args);
                            } else if (!timeout) {
                                timeout = setTimeout(later, remaining);
                            }
                            return result;
                        };
                    },
                    _handleScroll: function (eventArg) {
                        var scrollHeight;
                        var event = eventArg || window.event;
                        if (event) {
                            var target = event.target || event.srcElement;
                            if (target) {
                                this.m_activityState.currScrollLeft = target.scrollLeft;
                                this.m_activityState.currScrollTop = target.scrollTop;
                                scrollHeight = target.scrollHeight;
                            }
                        }
                        var scrollPos = this.getScrollPos();
                        var windowSize = this.getWindowSize();
                        var documentSize = this.getDocumentSize();
                        var scrollDepthPixels = Math.round(scrollPos.top + windowSize.height);
                        var scrollDepthPercentage = Math.min(Math.round(scrollDepthPixels * 100 / (scrollHeight || documentSize.height)), 100);
                        if (scrollDepthPercentage > this.m_activityState.scrollDepthPercentage) {
                            this.m_activityState.scrollDepthPercentage = scrollDepthPercentage;
                            this.m_activityState.scrollDepthPixels = scrollDepthPixels;
                        }
                    },
                    _registerEventListeners: function () {
                        this._delegatedScrollHandler = this.createDelegate(this, this._throttle(this._handleScroll, 100));
                        this.addEventListener(window, 'message', this.createDelegate(this, this._handlePostMessage));
                        this.addEventListener(window, 'scroll', this._delegatedScrollHandler, true);
                        this.addEventListener(document, 'keypress', this.createDelegate(this, this._onHIDEvent));
                        this.addEventListener(document, 'keydown', this.createDelegate(this, this._onHIDEvent));
                        this.addEventListener(document, 'keyup', this.createDelegate(this, this._onHIDEvent));
                        this.addEventListener(document, 'mousedown', this.createDelegate(this, this._onClickEvent), true);
                        this.addEventListener(document, 'mousemove', this.createDelegate(this, this._onMouseMoveEvent));
                    },
                    setCompatMode: function (compatModeOptions) {
                        this.m_compatMode = compatModeOptions;
                        this.m_compatModeActive = true;
                    },
                    isCompatModeActive: function () {
                        return this.m_compatModeActive;
                    },
                    _trackTpState: function (hasTp, hasTimeout, delay) {
                        this.m_customParameters = this.m_customParameters.filter(function (param) {
                            return !param.startsWith('cp_compatTimeout') || !param.startsWith('cp_compatDelay');
                        });
                        this.setCustomParameters({
                            hasTp: hasTp ? 'y' : 'n',
                            compatMode: 'c1x',
                            compatTimeout: hasTimeout ? 'y' : 'n',
                            compatDelay: (delay / 1000).toFixed(1)
                        });
                    },
                    _watchTpLoading: function (args, callback) {
                        if (this.m_compatTpInterval !== undefined) {
                            return;
                        }
                        this.m_compatTpInterval = window.setInterval(this.createDelegate(this, function () {
                            if (typeof window.tp !== 'undefined' && typeof window.tp.experience !== 'undefined' && window.tp.experience && typeof window.tp.experience._getLastExecutionResult !== 'undefined' && !this.m_compatSpaInitialPvState.pvSent) {
                                var exec = tp.experience._getLastExecutionResult();
                                if (!(exec && Object.keys(exec).length === 0 && exec.constructor === Object)) {
                                    this._trackTpState(true, false, this.m_compatDelay);
                                    this.m_compatSpaInitialPvState.pvSent = true;
                                    args.compatRunPageView = true;
                                    this.sendPageViewEvent(args, callback);
                                    window.clearInterval(this.m_compatTpInterval);
                                    this.m_compatTpInterval = undefined;
                                }
                            }
                        }), 100);
                    },
                    _runCompatPageView: function (args, callback) {
                        var allArgs = args || {};
                        this._watchTpLoading(allArgs, callback);
                        var locationHref = allArgs.location || location.href;
                        if (this._isPageViewReported(locationHref) || this.m_compatSpaInitialPvState.pvSent && !this.m_compatSpaInitialPvState.secondPvAttempted) {
                            if (!this.m_compatSpaInitialPvState.secondPvAttempted) {
                                this.m_compatSpaInitialPvState.secondPvAttempted = true;
                            }
                            return;
                        }
                        if (this.m_compatSpaInitialPvState.pvSent && this.m_compatSpaInitialPvState.secondPvAttempted) {
                            this.m_compatSpaInitialPvState = {
                                pvSent: false,
                                secondPvAttempted: false
                            };
                        }
                        this.m_compatDelay = new Date() - this.m_scriptStartTime;
                        if (this.m_compatDelay > this.m_c1xTpWait && !this.m_compatSpaInitialPvState.pvSent) {
                            this._trackTpState(window.tp && window.tp.isInitialized, true, this.m_compatDelay);
                            allArgs.compatRunPageView = true;
                            this.sendPageViewEvent(allArgs, callback);
                            this.m_compatSpaInitialPvState.pvSent = true;
                        } else {
                            setTimeout(this.createDelegate(this, function () {
                                this._runCompatPageView(args, callback);
                            }), 1);
                        }
                    },
                    _setLocalStorage: function (key, value, expireDays) {
                        const $___old_d7bf8bab264a9463 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_d7bf8bab264a9463)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                if (this.hasLocalStorage()) {
                                    localStorage.setItem(key, value);
                                    var expires = this.decodeUrlEncodedNameValuePairs(localStorage.getItem('_cX_expires') || '');
                                    if (expireDays !== null || expires.hasOwnProperty(key)) {
                                        if (expireDays !== null) {
                                            expires[key] = new Date().getTime() + 1000 * 60 * 60 * 24 * expireDays;
                                        } else {
                                            delete expires[key];
                                        }
                                        localStorage.setItem('_cX_expires', this._encodeUrlEncodedNameValuePairs(expires));
                                    }
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_d7bf8bab264a9463)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_d7bf8bab264a9463));
                        }
                    },
                    _expireLocalStorage: function () {
                        const $___old_3964dc52f0fcdddc = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_3964dc52f0fcdddc)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_f28674773787b000.localStorage));
                            return function () {
                                try {
                                    if (this.hasLocalStorage()) {
                                        var expires = this.decodeUrlEncodedNameValuePairs(localStorage.getItem('_cX_expires') || '');
                                        var now = new Date().getTime();
                                        var expiresUpdated = false;
                                        for (var key in expires) {
                                            if (expires.hasOwnProperty(key)) {
                                                if (parseInt(expires[key]) < now) {
                                                    localStorage.removeItem(key);
                                                    delete expires[key];
                                                    expiresUpdated = true;
                                                }
                                            }
                                        }
                                        if (expiresUpdated) {
                                            localStorage.setItem('_cX_expires', this._encodeUrlEncodedNameValuePairs(expires));
                                        }
                                    }
                                } catch (e) {
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_3964dc52f0fcdddc)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_3964dc52f0fcdddc));
                        }
                    }
                };
                cX.library._expireLocalStorage();
                if (cX.library.hasLocalStorage()) {
                    cX.library._deleteCookie_fix('_cX_segmentInfo');
                }
                cX.library.initializePage();
                cX.library._consentCallQueue = [];
                function cx_callQueueExecute() {
                    try {
                        var currCall = null;
                        var denyMethods = cX.Object.keys(cX.library.denyWithoutConsent);
                        while (currCall = cX.callQueue.shift()) {
                            if (cX.library._doesNotHaveConsent(cX.library.denyWithoutConsent[currCall[0]]) && cX.Array.some(denyMethods, function (meth) {
                                    return currCall[0] === meth;
                                })) {
                                cX.library._consentCallQueue.push(currCall);
                            } else {
                                try {
                                    var fnName = currCall[0];
                                    var fnArgs = currCall.slice(1);
                                    cX.library[fnName].apply(cX.library, fnArgs);
                                } catch (e) {
                                }
                            }
                        }
                    } catch (e) {
                    }
                }
                setTimeout(cx_callQueueExecute, 25);
                cX.callQueue.push = function () {
                    Array.prototype.push.apply(this, arguments);
                    setTimeout(cx_callQueueExecute, 1);
                    return this.length;
                };
                function cx_pollActivity() {
                    if (!cX.library._shouldPollActivity()) {
                        return;
                    }
                    try {
                        cX.library._onPollActivity();
                    } catch (e) {
                    }
                    if (!cX.library._shouldPollActivity()) {
                        return;
                    }
                    setTimeout(cx_pollActivity, 500);
                }
                setTimeout(cx_pollActivity, 200);
                cX.library._registerEventListeners();
                function cx_pollActiveTime() {
                    if (cX.shouldPollActiveTime) {
                        cX.library._onPollActiveTime();
                        setTimeout(cx_pollActiveTime, 500);
                    }
                }
                if (cX.shouldPollActiveTime) {
                    setTimeout(cx_pollActiveTime, 200);
                }
                function cx_pollFragmentMessage() {
                    try {
                        cX.library._onPollFragmentMessage();
                    } catch (e) {
                    }
                    setTimeout(cx_pollFragmentMessage, 250);
                }
                if (!cX.library.hasPostMessage()) {
                    setTimeout(cx_pollFragmentMessage, 200);
                }
                (function () {
                    for (var propName in cX.library) {
                        if (cX.library.hasOwnProperty(propName)) {
                            var prop = cX.library[propName];
                            if (typeof prop === 'function' && propName.indexOf('_') !== 0) {
                                cX[propName] = cX.library.createDelegate(cX.library, prop);
                            }
                        }
                    }
                    cX.JSON = cX.library.JSON;
                    cX.Array = cX.library.Array;
                    cX.Object = cX.library.Object;
                    if (cX.library._isTemplateCdnUrl(location.href) && cX.hasHistory() && (('' + location.href).indexOf('widgetId') > -1 || ('' + location.href).indexOf('asId=') < 0)) {
                        var urlArgs = cX.parseUrlArgs();
                        urlArgs.ref = document.referrer;
                        var newLocation = location.href.replace(/[?#].*$/, '') + '?' + cX.library._encodeUrlEncodedNameValuePairs(urlArgs) + '#' + cX.library._encodeUrlEncodedNameValuePairs(cX.parseHashArgs());
                        history.replaceState(0, '', newLocation);
                    }
                    cX.afterInitializePage();
                }());
            }
        } catch (e) {
        }
    }())
}