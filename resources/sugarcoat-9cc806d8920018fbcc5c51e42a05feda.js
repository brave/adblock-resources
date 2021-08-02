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
    (function () {
        Bootstrapper.bindDependencyDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window.digitalData = [];
            Bootstrapper.on('click', '#et-internalPromo-08A1FB0A', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'house-ad',
                    this.href.toLowerCase().slice(0, this.href.indexOf('?')),
                    'left-products-services'
                ]);
            });
            Bootstrapper.on('click', '#et-internalPromo-82F973D9', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'house-ad',
                    this.href.toLowerCase().slice(0, this.href.indexOf('?')),
                    'left-products-services'
                ]);
            });
            Bootstrapper.on('click', '#nav a[href*=\'/medical-professionals\'] + div a[href*=\'medprof.mayoclinic.org\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'medical professional',
                    'referral',
                    'online service global unav'
                ]);
            }, true);
            Bootstrapper.on('click', '#gnavone a[href$=\'appointments\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'appointment',
                    'global-nav-link',
                    'request-an-appointment-top-right-global-nav'
                ]);
            }, true);
            if (location.pathname.toLowerCase().match(/\/$/))
                Bootstrapper.on('click', '#main-content a[href$=\'appointments\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'appointment',
                        'appointments-tile',
                        'request-an-appointment-middle-of-homepage'
                    ]);
                }, true);
            Bootstrapper.on('click', '#footer a[href$=\'appointments\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'appointment',
                    'footer-link',
                    'request-an-appointment-footer'
                ]);
            }, true);
            Bootstrapper.on('click', '#main > div.other-topics > ul > li.t-6 > a[href$=\'appointments\']', function () {
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'appointment',
                    'appointments-tile',
                    'request-an-appointment-other-topics'
                ]);
            }, true);
            Bootstrapper.on('click', '#privacyManageCookies', function () {
                Bootstrapper.gateway.openBannerCustom();
                document.getElementById('mayo-privacy-update-preferences').focus();
                Bootstrapper._GAMT.__TrackIt([
                    'send',
                    'event',
                    'nav-footer',
                    'click',
                    'manage-cookies'
                ]);
            });
            Bootstrapper.getDimensionValue = function (input, field) {
                var output = [];
                for (var i = 0; i < input.length; ++i)
                    if (input[i][field] !== undefined) {
                        output.push(input[i][field]);
                        break;
                    }
                if (output.length > 0)
                    return output;
                else
                    return null;
            };
            Bootstrapper.getMetaTag = function (metaName) {
                const metas = document.getElementsByTagName('meta');
                for (let i = 0; i < metas.length; i++)
                    if (metas[i].getAttribute('name') === metaName)
                        return metas[i].getAttribute('content');
                return '';
            };
            var query_string = document.location.search;
            var path_name = document.location.pathname;
            var cd70;
            if (query_string && path_name == '/search/search-results')
                if (query_string.indexOf('Page=') > -1)
                    cd70 = query_string.match(/Page=([0-9])/)[1];
            if (cd70)
                window.digitalData.push({ 'dimension70': cd70 });
            var DNT = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || window.msDoNotTrack;
            if (DNT == '1' || DNT == 'yes')
                window.digitalData.push({ 'dimension71': 'enabled' });
            else
                window.digitalData.push({ 'dimension71': 'disabled' });
            if (typeof _dl !== 'undefined' && typeof _dl.optimization !== 'undefined')
                for (var i = 0; i < _dl.optimization.length; i++) {
                    var experimentID = _dl.optimization[i].experimentID.toLowerCase();
                    var experimentName = _dl.optimization[i].experimentName.toLowerCase();
                    var variationName = _dl.optimization[i].variationName.toLowerCase();
                    window.digitalData.push({ 'dimension38': experimentID });
                    window.digitalData.push({ 'dimension39': experimentName });
                    window.digitalData.push({ 'dimension40': variationName });
                }
            if (!document.getElementById('privacyManageCookies'))
                if (location.pathname.match(/^\/appointment-requests/))
                    if (isEU == 'true' || window.location.search.indexOf('privacy=true') > -1)
                        if (!document.getElementById('privacyManageCookies')) {
                            var manageCookiesLink = document.createElement('a');
                            var manageCookiesLI = document.createElement('li');
                            manageCookiesLI.id = 'privacyManageCookiesCntnr';
                            var manageCookiesContainer = document.querySelector('.footer-legal > ul');
                            if (!manageCookiesContainer)
                                setTimeout(addManageCookiesConfirm, 50);
                            else {
                                manageCookiesContainer.appendChild(manageCookiesLI);
                                manageCookiesLI.appendChild(manageCookiesLink);
                                var manageCookiesLinkText = document.createTextNode('Manage Cookies');
                                manageCookiesLink.appendChild(manageCookiesLinkText);
                                manageCookiesLink.id = 'privacyManageCookies';
                                manageCookiesLink.style = 'cursor: pointer;';
                                manageCookiesLink.onclick = function () {
                                    Bootstrapper.gateway.openBannerCustom();
                                };
                            }
                        }
            if (document.getElementById('privacyManageCookies') != null) {
                Bootstrapper.on('click', '#mayo-privacy-save', function () {
                    document.getElementById('privacyManageCookies').style.display = 'block';
                });
                Bootstrapper.on('click', '#mayo-privacy-close', function () {
                    document.getElementById('privacyManageCookies').style.display = 'block';
                });
                Bootstrapper.on('click', '#mayo-privacy-opt-in', function () {
                    document.getElementById('privacyManageCookies').style.display = 'block';
                    var googleAnalytics = window.performance.getEntriesByName('https://www.google-analytics.com/analytics.js', 'resource');
                    if (googleAnalytics.length == 0)
                        (function (i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                            i[r] = i[r] || function () {
                                (i[r].q = i[r].q || []).push(arguments);
                            };
                            i[r].l = 1 * new Date();
                            a = s.createElement(o);
                            m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.src = g;
                            m.parentNode.insertBefore(a, m);
                        }(window, document, 'script', '//www.google-analytics.com/analytics.js', Bootstrapper._GAMT._Tracker));
                });
                if (typeof Bootstrapper.gateway !== 'undefined' && Bootstrapper.gateway.getCookie && typeof Bootstrapper.gateway.getCookie == 'function' && Bootstrapper.gateway.getCookie('BANNER_VIEWED') == '1')
                    document.getElementById('privacyManageCookies').style.display = 'block';
                else
                    document.getElementById('privacyManageCookies').style.display = 'none';
            }
            var lpath = location.pathname.toLowerCase();
            if (lpath.match(/\/ways-to-give\/?$/))
                Bootstrapper.on('click', 'ul.content li a[href*=\'mailto:development\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'contact',
                        'email-link',
                        'email-mayo-development-department'
                    ]);
                });
            var publishedDate = Bootstrapper.getMetaTag('PublishDate');
            if (publishedDate)
                window.digitalData.push({ 'dimension70': publishedDate });
            var PocID = Bootstrapper.getMetaTag('PocID');
            if (PocID)
                window.digitalData.push({ 'dimension47': PocID });
            var contentType;
            if (window.location.href.toLowerCase().indexOf('/art-') > -1)
                contentType = 'ART';
            else if (window.location.href.toLowerCase().indexOf('/bgp-') > -1)
                contentType = 'BGP';
            else if (window.location.href.toLowerCase().indexOf('/cmc-') > -1)
                contentType = 'CMC';
            else if (window.location.href.toLowerCase().indexOf('/con-') > -1)
                contentType = 'CON';
            else if (window.location.href.toLowerCase().indexOf('/drg-') > -1)
                contentType = 'DRG';
            else if (window.location.href.toLowerCase().indexOf('/dtc-') > -1)
                contentType = 'DTC';
            else if (window.location.href.toLowerCase().indexOf('/dxc-') > -1)
                contentType = 'DXC';
            else if (window.location.href.toLowerCase().indexOf('/faq-') > -1)
                contentType = 'FAQ';
            else if (window.location.href.toLowerCase().indexOf('/flh-') > -1)
                contentType = 'FLH';
            else if (window.location.href.toLowerCase().indexOf('/hlv-') > -1)
                contentType = 'HLV';
            else if (window.location.href.toLowerCase().indexOf('/hrb-') > -1)
                contentType = 'HRB';
            else if (window.location.href.toLowerCase().indexOf('/icc-') > -1)
                contentType = 'ICC';
            else if (window.location.href.toLowerCase().indexOf('/img-') > -1)
                contentType = 'IMG';
            else if (window.location.href.toLowerCase().indexOf('/itt-') > -1)
                contentType = 'ITT';
            else if (window.location.href.toLowerCase().indexOf('/nwc-') > -1)
                contentType = 'NWC';
            else if (window.location.href.toLowerCase().indexOf('/ovc-') > -1)
                contentType = 'OVC';
            else if (window.location.href.toLowerCase().indexOf('/ppc-') > -1)
                contentType = 'PPC';
            else if (window.location.href.toLowerCase().indexOf('/prc-') > -1)
                contentType = 'PRC';
            else if (window.location.href.toLowerCase().indexOf('/ptc-') > -1)
                contentType = 'PTC';
            else if (window.location.href.toLowerCase().indexOf('/rcp-') > -1)
                contentType = 'RCP';
            else if (window.location.href.toLowerCase().indexOf('/rcs-') > -1)
                contentType = 'RCS';
            else if (window.location.href.toLowerCase().indexOf('/rec-') > -1)
                contentType = 'REC';
            else if (window.location.href.toLowerCase().indexOf('/rsc-') > -1)
                contentType = 'RSC';
            else if (window.location.href.toLowerCase().indexOf('/scc-') > -1)
                contentType = 'SCC';
            else if (window.location.href.toLowerCase().indexOf('/scs-') > -1)
                contentType = 'SCS';
            else if (window.location.href.toLowerCase().indexOf('/sls-') > -1)
                contentType = 'SLS';
            else if (window.location.href.toLowerCase().indexOf('/ssc-') > -1)
                contentType = 'SSC';
            else if (window.location.href.toLowerCase().indexOf('/sym-') > -1)
                contentType = 'SYM';
            else if (window.location.href.toLowerCase().indexOf('/txc-') > -1)
                contentType = 'TXC';
            else if (window.location.href.toLowerCase().indexOf('/vid-') > -1)
                contentType = 'VID';
            if (contentType)
                window.digitalData.push({ 'dimension48': contentType });
            var videoYouTubePresent = document.querySelector('div.video_player');
            var videoKalturaPresent = document.querySelector('div.myc-kaltura-container');
            var videoDivPresent = document.querySelector('div.video');
            var isVideoPresent;
            if (videoYouTubePresent != null || videoKalturaPresent != null || videoDivPresent != null) {
                isVideoPresent = true;
                window.digitalData.push({ 'dimension49': 'video' });
            }
            function convertLanguage(langVal) {
                langVal = langVal || '/';
                var langMap = {
                    '/': 'english',
                    '/es-es': 'spanish',
                    '/portugues': 'portuguese',
                    '/ar': 'arabic',
                    '/zh-hans': 'mandarin'
                };
                return langMap.hasOwnProperty(langVal) ? langMap[langVal] : langMap.hasOwnProperty(langVal.substring(0, langVal.length - 1)) ? langMap[langVal.substring(0, langVal.length - 1)] : langVal;
            }
            function getCD11() {
                var translatedLang = '', langRegex = new RegExp(/\/(es-es|portugues|ar|zh-hans)(\/|$)/), btnLangRegex = new RegExp(/(es-es|portugues|ar|zh-hans)/), urlPathMatch = window.location.pathname.toLowerCase().match(langRegex), translateBtn = document.querySelector('li.translate-dropdown > a.translate-btn');
                if (translateBtn) {
                    var transBtnPathArr = translateBtn.getAttribute('href').replace('/dotorgmaster', '').split('/'), transBtnPathFirst = transBtnPathArr.length > 1 ? transBtnPathArr[1] : '', transBtnMatch = '/' + (transBtnPathFirst.match(btnLangRegex) && transBtnPathFirst.match(btnLangRegex)[0] == transBtnPathFirst ? transBtnPathFirst.match(btnLangRegex)[0] : '');
                    translatedLang = convertLanguage(transBtnMatch);
                }
                if (!translatedLang)
                    translatedLang = convertLanguage(urlPathMatch ? urlPathMatch[0] : null);
                if (!translatedLang)
                    translatedLang = 'unknown';
                return translatedLang;
            }
            window.digitalData.push({ 'dimension11': getCD11() });
            function convertBrowserLang(langVal) {
                langVal = langVal || '/';
                var langMapAttr = {
                    'ab': 'abkhazian',
                    'aa': 'afar',
                    'af': 'afrikaans',
                    'ak': 'akan',
                    'sq': 'albanian',
                    'am': 'amharic',
                    'ar': 'arabic',
                    'an': 'aragonese',
                    'hy': 'armenian',
                    'as': 'assamese',
                    'av': 'avaric',
                    'ae': 'avestan',
                    'ay': 'aymara',
                    'az': 'azerbaijani',
                    'bm': 'bambara',
                    'ba': 'bashkir',
                    'eu': 'basque',
                    'be': 'belarusian',
                    'bn': 'bengali (bangla)',
                    'bh': 'bihari',
                    'bi': 'bislama',
                    'bs': 'bosnian',
                    'br': 'breton',
                    'bg': 'bulgarian',
                    'my': 'burmese',
                    'ca': 'catalan',
                    'ch': 'chamorro',
                    'ce': 'chechen',
                    'ny': 'chichewa, chewa, nyanja',
                    'zh': 'mandarin',
                    'zh-cn': 'mandarin',
                    'zh-hans': 'mandarin',
                    'zh-hant': 'mandarin',
                    'cv': 'chuvash',
                    'kw': 'cornish',
                    'co': 'corsican',
                    'cr': 'cree',
                    'hr': 'croatian',
                    'cs': 'czech',
                    'da': 'danish',
                    'dv': 'divehi, dhivehi, maldivian',
                    'nl': 'dutch',
                    'dz': 'dzongkha',
                    'en': 'english',
                    'eo': 'esperanto',
                    'et': 'estonian',
                    'ee': 'ewe',
                    'fo': 'faroese',
                    'fj': 'fijian',
                    'fi': 'finnish',
                    'fr': 'french',
                    'ff': 'fula, fulah, pulaar, pular',
                    'gl': 'galician',
                    'gd': 'gaelic (scottish)',
                    'gv': 'gaelic (manx)',
                    'ka': 'georgian',
                    'de': 'german',
                    'el': 'greek',
                    'kl': 'greenlandic',
                    'gn': 'guarani',
                    'gu': 'gujarati',
                    'ht': 'haitian creole',
                    'ha': 'hausa',
                    'he': 'hebrew',
                    'hz': 'herero',
                    'hi': 'hindi',
                    'ho': 'hiri motu',
                    'hu': 'hungarian',
                    'is': 'icelandic',
                    'io': 'ido',
                    'ig': 'igbo',
                    'id, in': 'indonesian',
                    'ia': 'interlingua',
                    'ie': 'interlingue',
                    'iu': 'inuktitut',
                    'ik': 'inupiak',
                    'ga': 'irish',
                    'it': 'italian',
                    'ja': 'japanese',
                    'jv': 'javanese',
                    'kl': 'kalaallisut, greenlandic',
                    'kn': 'kannada',
                    'kr': 'kanuri',
                    'ks': 'kashmiri',
                    'kk': 'kazakh',
                    'km': 'khmer',
                    'ki': 'kikuyu',
                    'rw': 'kinyarwanda (rwanda)',
                    'rn': 'kirundi',
                    'ky': 'kyrgyz',
                    'kv': 'komi',
                    'kg': 'kongo',
                    'ko': 'korean',
                    'ku': 'kurdish',
                    'kj': 'kwanyama',
                    'lo': 'lao',
                    'la': 'latin',
                    'lv': 'latvian (lettish)',
                    'li': 'limburgish (limburger)',
                    'ln': 'lingala',
                    'lt': 'lithuanian',
                    'lu': 'luga-katanga',
                    'lg': 'luganda, ganda',
                    'lb': 'luxembourgish',
                    'gv': 'manx',
                    'mk': 'macedonian',
                    'mg': 'malagasy',
                    'ms': 'malay',
                    'ml': 'malayalam',
                    'mt': 'maltese',
                    'mi': 'maori',
                    'mr': 'marathi',
                    'mh': 'marshallese',
                    'mo': 'moldavian',
                    'mn': 'mongolian',
                    'na': 'nauru',
                    'nv': 'navajo',
                    'ng': 'ndonga',
                    'nd': 'northern ndebele',
                    'ne': 'nepali',
                    'no': 'norwegian',
                    'nb': 'norwegian bokmål',
                    'nn': 'norwegian nynorsk',
                    'ii': 'nuosu',
                    'oc': 'occitan',
                    'oj': 'ojibwe',
                    'cu': 'old church slavonic, old bulgarian',
                    'or': 'oriya',
                    'om': 'oromo (afaan oromo)',
                    'os': 'ossetian',
                    'pi': 'pāli',
                    'ps': 'pashto, pushto',
                    'fa': 'persian (farsi)',
                    'pl': 'polish',
                    'pt': 'portuguese',
                    'pa': 'punjabi (eastern)',
                    'qu': 'quechua',
                    'rm': 'romansh',
                    'ro': 'romanian',
                    'ru': 'russian',
                    'se': 'sami',
                    'sm': 'samoan',
                    'sg': 'sango',
                    'sa': 'sanskrit',
                    'sr': 'serbian',
                    'sh': 'serbo-croatian',
                    'st': 'sesotho',
                    'tn': 'setswana',
                    'sn': 'shona',
                    'ii': 'sichuan yi',
                    'sd': 'sindhi',
                    'si': 'sinhalese',
                    'ss': 'siswati',
                    'sk': 'slovak',
                    'sl': 'slovenian',
                    'so': 'somali',
                    'nr': 'southern ndebele',
                    'es': 'spanish',
                    'su': 'sundanese',
                    'sw': 'swahili (kiswahili)',
                    'ss': 'swati',
                    'sv': 'swedish',
                    'tl': 'tagalog',
                    'ty': 'tahitian',
                    'tg': 'tajik',
                    'ta': 'tamil',
                    'tt': 'tatar',
                    'te': 'telugu',
                    'th': 'thai',
                    'bo': 'tibetan',
                    'ti': 'tigrinya',
                    'to': 'tonga',
                    'ts': 'tsonga',
                    'tr': 'turkish',
                    'tk': 'turkmen',
                    'tw': 'twi',
                    'ug': 'uyghur',
                    'uk': 'ukrainian',
                    'ur': 'urdu',
                    'uz': 'uzbek',
                    've': 'venda',
                    'vi': 'vietnamese',
                    'vo': 'volapük',
                    'wa': 'wallon',
                    'cy': 'welsh',
                    'wo': 'wolof',
                    'fy': 'western frisian',
                    'xh': 'xhosa',
                    'yi': 'yiddish',
                    'ji': 'yiddish',
                    'yo': 'yoruba',
                    'za': 'zhuang',
                    'zu': 'zulu'
                };
                return langMapAttr.hasOwnProperty(langVal) ? langMapAttr[langVal] : langVal;
            }
            function getCD64() {
                var translatedLang = '', pageLang = document.getElementsByTagName('html')[0].getAttribute('lang').toLowerCase();
                if (pageLang)
                    translatedLang = convertBrowserLang(pageLang);
                if (!translatedLang)
                    translatedLang = 'unknown';
                return translatedLang;
            }
            window.digitalData.push({ 'dimension64': getCD64() });
            var adContainers = document.querySelectorAll('div.mayoad');
            if (adContainers.length > 0) {
                if (window && window.adTargeting && adTargeting.hasOwnProperty('noThirdPartyAds'))
                    if (adTargeting.noThirdPartyAds == '1')
                        window.digitalData.push({ 'dimension43': 'house-ad' });
                    else if (adTargeting.noThirdPartyAds == '')
                        window.digitalData.push({ 'dimension43': '3rd-party-ad' });
            } else
                window.digitalData.push({ 'dimension43': 'no-ads' });
            var isRedesigned = document.querySelector('.mc-logo');
            if (isRedesigned != null) {
                window.digitalData.push({ 'dimension50': 'enhanced' });
                Bootstrapper.ensEvent.trigger('WebUserEnhancement');
            } else
                window.digitalData.push({ 'dimension50': 'legacy' });
            if (typeof Bootstrapper.dataManager !== 'undefined') {
                var biosdl = Bootstrapper.dataManager.getData('window.digitalData');
                if (biosdl.doctor) {
                    if (biosdl.doctor.emeritus)
                        window.digitalData.push({ 'dimension44': biosdl.doctor.emeritus.join(',') });
                    if (biosdl.doctor.departments)
                        window.digitalData.push({ 'dimension45': biosdl.doctor.departments.join(',') });
                    if (biosdl.doctor.locations)
                        window.digitalData.push({ 'dimension46': biosdl.doctor.locations.join(',') });
                }
                if (window.location.pathname.indexOf('find-a-doctor/search-results') > -1) {
                    if (biosdl.search_type)
                        window.digitalData.push({ 'dimension56': biosdl.search_type });
                    else
                        window.digitalData.push({ 'dimension56': '(not set)' });
                    if (biosdl.search_keyword && typeof biosdl.search_keyword == 'string') {
                        window.digitalData.push({ 'metric1': 1 });
                        window.digitalData.push({ 'dimension55': biosdl.search_keyword });
                    } else {
                        window.digitalData.push({ 'metric1': 1 });
                        window.digitalData.push({ 'dimension55': '(not set)' });
                    }
                    if (biosdl.search_result_count && typeof biosdl.search_result_count == 'string')
                        window.digitalData.push({ 'metric2': biosdl.search_result_count });
                    else
                        window.digitalData.push({ 'metric2': 0 });
                    if (biosdl.filter) {
                        if (typeof biosdl.filter.search_location == 'object')
                            window.digitalData.push({ 'dimension58': biosdl.filter.search_location.join('|').toLowerCase() });
                        else
                            window.digitalData.push({ 'dimension58': '(not set)' });
                        if (typeof biosdl.filter.search_language == 'object')
                            window.digitalData.push({ 'dimension59': biosdl.filter.search_language.join('|').toLowerCase() });
                        else
                            window.digitalData.push({ 'dimension59': '(not set)' });
                        if (typeof biosdl.filter.search_gender == 'object')
                            window.digitalData.push({ 'dimension60': biosdl.filter.search_gender.join('|').toLowerCase() });
                        else
                            window.digitalData.push({ 'dimension60': '(not set)' });
                        if (typeof biosdl.filter.search_name == 'object')
                            window.digitalData.push({ 'dimension61': biosdl.filter.search_name.join('|').toLowerCase() });
                        else
                            window.digitalData.push({ 'dimension61': '(not set)' });
                        if (typeof biosdl.filter.search_conditions == 'object')
                            window.digitalData.push({ 'dimension62': biosdl.filter.search_conditions.join('|').toLowerCase() });
                        else
                            window.digitalData.push({ 'dimension62': '(not set)' });
                    }
                }
            }
            window.digitalData.push({ 'dimension53': Bootstrapper.getBiosProceduresPerformed() });
            window.digitalData.push({ 'dimension54': Bootstrapper.getBiosConditionsTreated() });
            Bootstrapper.getQueryParam = function (name, url) {
                if (!url)
                    url = window.location.href;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
                if (!results)
                    return null;
                if (!results[2])
                    return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            };
            if (location.pathname.match(/^((\/dotorg|\/dotorgmaster)?\/search\/search-results\/?)$/)) {
                var searchTerm = Bootstrapper.getQueryParam('q'), kwCookie = Bootstrapper.data.cookie.utils.get('kwCookie') || '', searchResults = document.querySelector('div.results');
                if (searchResults != null) {
                    var resultCnt = 0, resultItems = searchResults.querySelector('p');
                    if (resultItems != null)
                        resultCnt = parseInt(searchResults.querySelector('p').innerText.split('of ')[1].match(/[0-9]+/)[0]);
                    if (!Bootstrapper.getQueryParam('Page')) {
                        document.cookie = 'kwCookie=' + kwCookie + searchTerm + '::';
                        var resultItemLinks = document.querySelectorAll('div.results h3 > a');
                        if (resultItemLinks != null)
                            for (var i = 0; i < resultItemLinks.length; ++i) {
                                var linkText = resultItemLinks[i].innerText, rsltPosition = i + 1, rsltUrl = resultItemLinks[i].href;
                                if (!(kwCookie.indexOf(searchTerm) > -1))
                                    Bootstrapper._GAMT.__TrackIt([
                                        'send',
                                        'event',
                                        'Onsite Search',
                                        'Impression',
                                        searchTerm,
                                        {
                                            'dimension68': rsltUrl,
                                            'dimension69': linkText,
                                            'metric4': resultCnt,
                                            'metric5': rsltPosition,
                                            'metric6': 1
                                        }
                                    ]);
                                Bootstrapper.on('mousedown', 'div.results > div > ol > li:nth-child(' + rsltPosition + ') > h3 > a', function () {
                                    var thisRslt = this, thisRsltUrl = thisRslt.href, thisRsltLinkText = thisRslt.innerText, thisRsltPosition = Array.prototype.indexOf.call(resultItemLinks, thisRslt) + 1;
                                    Bootstrapper._GAMT.__TrackIt([
                                        'send',
                                        'event',
                                        'Onsite Search',
                                        'Click',
                                        searchTerm,
                                        {
                                            'dimension68': thisRsltUrl,
                                            'dimension69': thisRsltLinkText,
                                            'metric5': thisRsltPosition,
                                            'metric7': 1
                                        }
                                    ]);
                                });
                            }
                    }
                }
            }
            var ytvidVal = Bootstrapper.getQueryParam('ytvid');
            if (ytvidVal)
                window.digitalData.push({ 'dimension9': '' + ytvidVal });
            function checkPageview() {
                if (typeof _dl == 'object' && typeof _dl.events == 'object') {
                    var pageViewFired = false;
                    for (var i = 0; i < _dl.events.length; i++)
                        if (_dl.events[i].event == 'pageView') {
                            pageViewFired = true;
                            try {
                                var data_id = '62294', proj_id = '' + Bootstrapper.data.resolve(data_id), optimizelyScript = window.performance.getEntriesByName('https://cdn.optimizely.com/js/' + proj_id + '.js', 'resource');
                                window.digitalData.push({ 'metric8': optimizelyScript[0].duration.toFixed(2) });
                            } catch (exception) {
                            }
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'global',
                                'pageload',
                                'custom tracking events',
                                {
                                    'nonInteraction': 1,
                                    'dimension9': Bootstrapper.getDimensionValue(window.digitalData, 'dimension9'),
                                    'dimension11': Bootstrapper.getDimensionValue(window.digitalData, 'dimension11'),
                                    'dimension38': Bootstrapper.getDimensionValue(window.digitalData, 'dimension38'),
                                    'dimension39': Bootstrapper.getDimensionValue(window.digitalData, 'dimension39'),
                                    'dimension40': Bootstrapper.getDimensionValue(window.digitalData, 'dimension40'),
                                    'dimension43': Bootstrapper.getDimensionValue(window.digitalData, 'dimension43'),
                                    'dimension44': Bootstrapper.getDimensionValue(window.digitalData, 'dimension44'),
                                    'dimension45': Bootstrapper.getDimensionValue(window.digitalData, 'dimension45'),
                                    'dimension46': Bootstrapper.getDimensionValue(window.digitalData, 'dimension46'),
                                    'dimension47': Bootstrapper.getDimensionValue(window.digitalData, 'dimension47'),
                                    'dimension48': Bootstrapper.getDimensionValue(window.digitalData, 'dimension48'),
                                    'dimension49': Bootstrapper.getDimensionValue(window.digitalData, 'dimension49'),
                                    'dimension50': Bootstrapper.getDimensionValue(window.digitalData, 'dimension50'),
                                    'dimension53': Bootstrapper.getDimensionValue(window.digitalData, 'dimension53'),
                                    'dimension54': Bootstrapper.getDimensionValue(window.digitalData, 'dimension54'),
                                    'dimension55': Bootstrapper.getDimensionValue(window.digitalData, 'dimension55'),
                                    'dimension56': Bootstrapper.getDimensionValue(window.digitalData, 'dimension56'),
                                    'dimension58': Bootstrapper.getDimensionValue(window.digitalData, 'dimension58'),
                                    'dimension59': Bootstrapper.getDimensionValue(window.digitalData, 'dimension59'),
                                    'dimension60': Bootstrapper.getDimensionValue(window.digitalData, 'dimension60'),
                                    'dimension61': Bootstrapper.getDimensionValue(window.digitalData, 'dimension61'),
                                    'dimension62': Bootstrapper.getDimensionValue(window.digitalData, 'dimension62'),
                                    'dimension64': Bootstrapper.getDimensionValue(window.digitalData, 'dimension64'),
                                    'dimension70': Bootstrapper.getDimensionValue(window.digitalData, 'dimension70'),
                                    'dimension71': Bootstrapper.getDimensionValue(window.digitalData, 'dimension71'),
                                    'metric1': Bootstrapper.getDimensionValue(window.digitalData, 'metric1'),
                                    'metric2': Bootstrapper.getDimensionValue(window.digitalData, 'metric2'),
                                    'metric4': Bootstrapper.getDimensionValue(window.digitalData, 'metric4'),
                                    'metric8': Bootstrapper.getDimensionValue(window.digitalData, 'metric8')
                                }
                            ]);
                            var bodyText = document.getElementById('MainContent');
                            if (bodyText !== null && (bodyText.textContent.indexOf('Web site unavailable') > -1 || document.title.indexOf('Web site unavailable') > -1))
                                Bootstrapper._GAMT.__TrackIt([
                                    'send',
                                    'event',
                                    'exception',
                                    'outage',
                                    'website unavailable'
                                ]);
                        }
                    if (pageViewFired);
                    else
                        setTimeout(checkPageview, 500);
                } else
                    setTimeout(checkPageview, 500);
            }
            checkPageview();
        }, 3493857, [3447009], 424810, [265954]);
        Bootstrapper.bindDOMParsed(function () {
            const $___old_aea612fd4b8617d6 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_aea612fd4b8617d6)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                return function () {
                    var Bootstrapper = window['Bootstrapper'];
                    var ensightenOptions = Bootstrapper.ensightenOptions;
                    if (window.jQuery) {
                        $('body').on('click', '#et_MayoLogo_DDD85D51', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'logo'
                            ]);
                        });
                        $('body').on('click', '#mobilenav > div:nth-child(1) > a', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'logo'
                            ]);
                        });
                        $('body').on('click', '#mayoform > header > div > div.mayo-nav-section.translate-dropdown-container > div > ul > li > a[href*=\'/www.weibo.com/\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'weibo'
                            ]);
                        });
                        $('body').on('click', '#gnavtwo > ul.socialmedia > li > a[href*=\'/www.weibo.com/\']', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'weibo'
                            ]);
                        });
                        $('body').on('click', '#gnavone #et_HeaderLinkQuick_6CBA989C', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'request-an-appointment'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkQuick_6CBA989C', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'request-an-appointment'
                            ]);
                        });
                        $('body').on('click', '#gnavone #et_HeaderLinkQuick_9AC3DFAB', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'find-a-doctor'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkQuick_9AC3DFAB', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'find-a-doctor'
                            ]);
                        });
                        $('body').on('click', '#gnavone #et_HeaderLinkQuick_BB3DC99E', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'find-a-job'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkQuick_BB3DC99E', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'find-a-job'
                            ]);
                        });
                        $('body').on('click', '#gnavone #et_HeaderLinkQuick_91358B17', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'give-now'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkQuick_91358B17', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'give-now'
                            ]);
                        });
                        $('body').on('click', '#et_HeaderLinkSignIn_8D930527', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'login-patient-account'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkSignIn_8D930527', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'login-patient-account'
                            ]);
                        });
                        $('body').on('click', '#et_HeaderLinkLanguage_4BEB6CDC', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-english'
                            ]);
                        });
                        $('body').on('click', '#et_HeaderLinkLanguage_DDB44AFC', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-espanol'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkLanguage_DDB44AFC', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-espanol'
                            ]);
                        });
                        $('body').on('click', '#et_HeaderLinkLanguage_F68622D5', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-portugues'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkLanguage_F68622D5', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-portugues'
                            ]);
                        });
                        $('body').on('click', '#et_HeaderLinkLanguage_CEEDFA68', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-arabic'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkLanguage_CEEDFA68', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-arabic'
                            ]);
                        });
                        $('body').on('click', '#et_HeaderLinkLanguage_3E1D2AE8', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-mandarin'
                            ]);
                        });
                        $('body').on('click', '.mobile-only #et_HeaderLinkLanguage_3E1D2AE8', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'translate-mandarin'
                            ]);
                        });
                        $('body').on('click', '.mayo-nav #et_HeaderLinkQuick_6CBA989C', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'request-an-appointment'
                            ]);
                        });
                        $('body').on('click', '.mayo-nav-section #et_HeaderLinkQuick_9AC3DFAB', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'find-a-doctor'
                            ]);
                        });
                        $('body').on('click', '.mayo-nav-section #et_HeaderLinkQuick_BB3DC99E', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'find-a-job'
                            ]);
                        });
                        $('body').on('click', '.mayo-nav-section #et_HeaderLinkQuick_91358B17', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header',
                                'click',
                                'give-now'
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav.nav a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().toLowerCase(), $columnHead = $this.closest('div[role=\'menu\']').siblings('a.submenu'), columnText = $this.hasClass('submenu') ? thisText : $columnHead.text().trim().toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                columnText + ' - ' + thisText
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav-sub-1 a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                'care at mayo clinic' + ' - ' + thisText
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav-sub-2 a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().replace(/\.|,/g, '').toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                'health information' + ' - ' + thisText
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav-sub-3 a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                'for medical professionals' + ' - ' + thisText
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav-sub-4 a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                'research' + ' - ' + thisText
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav-sub-5 a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                'college of medicine and science' + ' - ' + thisText
                            ]);
                        });
                        jQuery('body').on('mousedown', '#nav-sub-6 a', function () {
                            var $this = jQuery(this), thisText = $this.text().trim().toLowerCase();
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-header-redesign-3.0',
                                'click',
                                'giving to mayo clinic' + ' - ' + thisText
                            ]);
                        });
                        $('body').on('click', 'nav.mc-nav #et_globalNavigation_6CBA989C', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                menuGSEventCategory,
                                'click',
                                $(this).text().toLowerCase()
                            ]);
                        });
                        $('body').on('click', 'nav.mc-nav #et_globalNavigation_9AC3DFAB', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                menuGSEventCategory,
                                'click',
                                $(this).text().toLowerCase()
                            ]);
                        });
                        $('body').on('click', 'nav.mc-nav #et_globalNavigation_BB3DC99E', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                menuGSEventCategory,
                                'click',
                                $(this).text().toLowerCase()
                            ]);
                        });
                        $('body').on('click', 'nav.mc-nav #et_globalNavigation_91358B17', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                menuGSEventCategory,
                                'click',
                                $(this).text().toLowerCase()
                            ]);
                        });
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_request-appointment', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'appointment'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_diagnosis', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'diagnosis'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_treatment', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'treatment'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_mayo-clinic-experience-patient-stories', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'mayo clinic experience patient stories'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_departments-specialties', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'departments specialties'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_expertise-ranking', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'expertise ranking'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_locations-travel-lodging', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'locations travel lodging'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_clinical-trials', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'clinical trials'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_research', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'research'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_costs-insurance', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'costs insurance'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_preparing-for-appointment', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'preparing for appointment'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_mayo-clinic-approach', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'mayo clinic approach'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_expertise-rankings', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'expertise ranking'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#et_RightChannelLinksFacade_treatment-outcomes', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'nav-right-side-menu',
                                'click',
                                'volumes outcomes'
                            ]);
                        }, true);
                        Bootstrapper.on('click', '#orbitaLaunch', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'chat',
                                'chat-started',
                                'orbita'
                            ]);
                        });
                    }
                }.apply(this, arguments);
            } finally {
                if ($___old_aea612fd4b8617d6)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_aea612fd4b8617d6));
            }
        }, 3407510, 423487);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.__getElementByAttributeContains = function (tagname, attribute, search) {
                tagname = tagname || [];
                attribute = attribute || [];
                search = search || [];
                var tmpArr = [], t, e, a, s;
                if (tagname.length > 0 && attribute.length > 0 && search.length > 0)
                    for (t = 0; t < tagname.length; t++) {
                        var tagArr = document.getElementsByTagName(tagname[t]);
                        for (e = 0; e < tagArr.length; e++)
                            for (a = 0; a < attribute.length; a++) {
                                var qualified = false;
                                if (tagArr[e].getAttribute(attribute[a])) {
                                    qualified = true;
                                    for (s = 0; s < search.length; s++) {
                                        if ((typeof search[s] + '').toLowerCase() === 'string')
                                            if (!(tagArr[e].getAttribute(attribute[a]) || '').match(search[s]))
                                                qualified = false;
                                        if (search[s] instanceof RegExp)
                                            if (!search[s].test(tagArr[e].getAttribute(attribute[a]) || ''))
                                                qualified = false;
                                    }
                                }
                                if (qualified)
                                    tmpArr.push(tagArr[e]);
                            }
                    }
                return tmpArr;
            };
            var dmnPropID = location.hostname == 'www.mayo.edu' ? 'UA-46648668-4' : 'UA-46648668-3';
            Bootstrapper._GAMT = {
                _Tracker: 'ga',
                _TrkrIDs: [dmnPropID],
                _TrkrNms: ['main'],
                _CrssDmnTrkrNms: [],
                _CrssDmnDmnNms: [
                    'mayo.edu',
                    'mayoclinichealthsystem.org',
                    'helix.com',
                    'uscovidplasma.org'
                ],
                __TrackIt: function () {
                    var trkArr = typeof Bootstrapper._GAMT._TrkrNms === 'undefined' ? [''] : Bootstrapper._GAMT._TrkrNms, argArr = [].slice.call(arguments), restricted = argArr[0][0] === 'restrict' ? !0 : !1, cntnr = {
                            trks: restricted && trkArr.length > 1 ? argArr[0].splice(1, argArr[0].length) : trkArr,
                            args: restricted ? argArr.splice(1, argArr.length) : argArr
                        }, tmpArr = [];
                    for (var trk = 0; trk < cntnr.trks.length; trk++) {
                        tmpArr[trk] = [];
                        var nmspc = cntnr.trks[trk].toLowerCase();
                        for (var arg = 0; arg < cntnr.args.length; arg++) {
                            tmpArr[trk][arg] = cntnr.args[arg].slice(0);
                            var eventType = tmpArr[trk][arg][0], lastElm = tmpArr[trk][arg].slice(-1)[0];
                            if (nmspc !== 'main' && nmspc !== '')
                                if (eventType === 'create')
                                    if (typeof lastElm === 'object')
                                        lastElm['name'] = nmspc;
                                    else
                                        tmpArr[trk][arg].push({ 'name': nmspc });
                                else
                                    tmpArr[trk][arg][0] = nmspc + '.' + eventType;
                            window[Bootstrapper._GAMT._Tracker].apply(this, tmpArr[trk][arg]);
                        }
                    }
                },
                __DecorateIt: function (element) {
                    var URL = element.href || element.action, link = URL.indexOf('(') > -1 ? URL.substring(URL.indexOf('(') + 2, URL.indexOf(')') - 1) : URL, newLink = '', decorate = false, i;
                    for (i = 0; i < Bootstrapper._GAMT._CrssDmnDmnNms.length; i++)
                        if (link.indexOf(Bootstrapper._GAMT._CrssDmnDmnNms[i]) > -1) {
                            decorate = true;
                            break;
                        }
                    if (decorate) {
                        window[Bootstrapper._GAMT._Tracker](function (tracker) {
                            var linker = new window.gaplugins.Linker(tracker);
                            newLink = linker.decorate(link);
                        });
                        element[element.nodeName.toLowerCase() === 'a' ? 'href' : 'action'] = newLink ? URL.replace(link, newLink) : URL;
                    }
                }
            };
            (function (i, s, o, g, r, a, m) {
                const $___old_2b1d60187f9642f3 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_2b1d60187f9642f3)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                    return function () {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments);
                        };
                        i[r].l = 1 * new Date();
                        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    }.apply(this, arguments);
                } finally {
                    if ($___old_2b1d60187f9642f3)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_2b1d60187f9642f3));
                }
            }(window, document, 'script', '//www.google-analytics.com/analytics.js', Bootstrapper._GAMT._Tracker));
            for (var id = 0; id < Bootstrapper._GAMT._TrkrIDs.length; id++) {
                var trkWhat = [
                        'create',
                        Bootstrapper._GAMT._TrkrIDs[id],
                        'auto'
                    ], trkrNm = Bootstrapper._GAMT._TrkrNms[id].toLowerCase(), crossDomFound = false;
                for (var trkr = 0; trkr < Bootstrapper._GAMT._CrssDmnTrkrNms.length; trkr++)
                    if (Bootstrapper._GAMT._CrssDmnTrkrNms[trkr] === trkrNm) {
                        crossDomFound = true;
                        break;
                    }
                if (crossDomFound) {
                    trkWhat.push({ 'allowLinker': true });
                    Bootstrapper._GAMT.__TrackIt([
                        'restrict',
                        trkrNm
                    ], trkWhat);
                    Bootstrapper._GAMT.__TrackIt([
                        'restrict',
                        Bootstrapper._GAMT._CrssDmnTrkrNms[id]
                    ], [
                        'require',
                        'linker'
                    ]);
                    Bootstrapper._GAMT.__TrackIt([
                        'restrict',
                        Bootstrapper._GAMT._CrssDmnTrkrNms[id]
                    ], [
                        'linker:autoLink',
                        Bootstrapper._GAMT._CrssDmnDmnNms,
                        false,
                        true
                    ]);
                } else {
                    trkWhat.push({ 'allowLinker': true });
                    Bootstrapper._GAMT.__TrackIt([
                        'restrict',
                        trkrNm
                    ], trkWhat);
                    Bootstrapper._GAMT.__TrackIt([
                        'restrict',
                        trkrNm
                    ], [
                        'require',
                        'linker'
                    ]);
                    Bootstrapper._GAMT.__TrackIt([
                        'restrict',
                        trkrNm
                    ], [
                        'linker:autoLink',
                        Bootstrapper._GAMT._CrssDmnDmnNms,
                        false,
                        true
                    ]);
                }
            }
            Bootstrapper.bindDOMParsed(function () {
                var elmArr = Bootstrapper.__getElementByAttributeContains([
                        'a',
                        'form'
                    ], [
                        'href',
                        'action'
                    ], [
                        'javascript',
                        new RegExp(/\(('|")/),
                        new RegExp(/('|")\)/)
                    ]), i;
                for (i = 0; i < elmArr.length; i++)
                    Bootstrapper._GAMT.__DecorateIt(elmArr[i]);
            });
            Bootstrapper._GAMT.__TrackIt([
                'require',
                'displayfeatures'
            ]);
            Bootstrapper._GAMT.__TrackIt([
                'require',
                'linkid'
            ]);
            window.optimizely = window.optimizely || [];
            window.optimizely.push('activateUniversalAnalytics');
            var uaString = navigator.userAgent;
            var autoTestFlag = 'no';
            if (uaString.indexOf('mayo-auto-test') > -1)
                autoTestFlag = 'yes';
            var adBlocker;
            var ad = document.createElement('ins');
            ad.className = 'AdSense';
            ad.style.display = 'block';
            ad.style.position = 'absolute';
            ad.style.top = '-1px';
            ad.style.height = '1px';
            document.body.appendChild(ad);
            if (ad.clientHeight)
                adBlocker = 'disabled';
            else
                adBlocker = 'enabled';
            document.body.removeChild(ad);
            Bootstrapper.getBiosProceduresPerformed = function () {
                var result = null;
                if (document.getElementById('nav_procedures') != null && document.getElementById('nav_procedures').innerText.toLowerCase() == 'procedures performed') {
                    var proceduresPerformed = document.getElementById('nav_procedures').nextSibling.querySelectorAll('ol > li');
                    var proceduresPerformedArr = [];
                    for (var i = 0; i < proceduresPerformed.length; i++)
                        proceduresPerformedArr.push(proceduresPerformed[i].innerText.toLowerCase());
                    result = proceduresPerformedArr.join('|');
                }
                return result;
            };
            Bootstrapper.getBiosConditionsTreated = function () {
                var result = null;
                if (document.getElementById('nav_conditions') != null && document.getElementById('nav_conditions').innerText.toLowerCase() == 'conditions treated') {
                    var conditionsTreated = document.getElementById('nav_conditions').nextSibling.querySelectorAll('ol > li');
                    var conditionsTreatedArr = [];
                    for (var i = 0; i < conditionsTreated.length; i++)
                        conditionsTreatedArr.push(conditionsTreated[i].innerText.toLowerCase());
                    result = conditionsTreatedArr.join('|');
                }
                return result;
            };
            Bootstrapper.getCookie = function (cname) {
                var name = cname + '=';
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ')
                        c = c.substring(1);
                    if (c.indexOf(name) === 0)
                        return c.substring(name.length, c.length);
                }
                return '';
            };
            Bootstrapper.getEpicClientID = function () {
                var infoButtonBCID = null;
                var infoButton = Bootstrapper.getCookie('InfoButton');
                if (infoButton.length > 0) {
                    var infoButtonString = infoButton.split('&');
                    for (var i = 1; i < infoButtonString.length; i++) {
                        var infoButtonValues = infoButtonString[i].split('=');
                        if (infoButtonValues[0] == 'bcid')
                            infoButtonBCID = infoButtonValues[1].replace('{', '').replace('}', '');
                    }
                }
                return infoButtonBCID;
            };
            Bootstrapper._GAMT.__TrackIt([
                'set',
                { 'dimension13': autoTestFlag }
            ]);
            if (document.querySelectorAll('meta[name=\'PocID\'][content=\'ART-20115960\']').length > 0)
                Bootstrapper._GAMT.__TrackIt([
                    'set',
                    { 'title': document.title + '|PNF' }
                ]);
            var pageName = performance.getEntries()[0].name, paramMatch = pageName.match('#:~:text=(.*)'), textHighlight = decodeURIComponent(paramMatch ? paramMatch[1] : ''), txtHghlghtArr = textHighlight.split('&text='), phraseText = txtHghlghtArr.join('||');
            Bootstrapper._GAMT.__pageView = function () {
                if (!Bootstrapper._GAMT.pageViewSent) {
                    Bootstrapper._GAMT.pageViewSent = true;
                    var dimensionObj = {
                        'dimension51': adBlocker,
                        'dimension52': Bootstrapper.getEpicClientID(),
                        'dimension53': Bootstrapper.getBiosProceduresPerformed(),
                        'dimension54': Bootstrapper.getBiosConditionsTreated()
                    };
                    if (phraseText) {
                        dimensionObj['dimension5'] = 'yes';
                        dimensionObj['dimension6'] = phraseText;
                    } else
                        dimensionObj['dimension5'] = 'no';
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'pageview',
                        dimensionObj
                    ]);
                    window._dl = window._dl || {};
                    window._dl.events = [];
                    window._dl.events.push({ 'event': 'pageView' });
                }
            };
            Bootstrapper._GAMT.__pageView();
            if (window.location.search.toLowerCase().indexOf('invsrc') > -1 || Bootstrapper.Cookies.test('invoca_session')) {
                window.InvocaTagId = '1321/2663714470';
                Bootstrapper.insertScript('//solutions.invocacdn.com/js/pnapi_integration-latest.min.js');
            }
        }, 3447009, [3175102], 265954, [422068]);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var currPage = document.location, currPagePath = currPage.pathname, currPageDomain = currPage.hostname, exclPthLngChk = new RegExp('^/(dotorgmaster/)?(es-es|ar[^i]|zh-hans|portugues)/?'), exclDmnLngChk = new RegExp('(mandarin.)'), inclOptly = true;
            if (currPagePath.match(exclPthLngChk))
                inclOptly = false;
            if (currPageDomain.match(exclDmnLngChk))
                inclOptly = false;
            if (inclOptly) {
                Bootstrapper._optlyShowPage = function (b) {
                    var a = b.getElementsByTagName('head')[0];
                    if (a) {
                        var c = b.getElementById('optly-body-style');
                        if (c)
                            a.removeChild(c);
                    }
                };
                Bootstrapper._optlyHidePage = function (g, b, d, f) {
                    (function (a, c, d) {
                        if (a) {
                            var e = b.createElement('style');
                            e.id = c;
                            e.innerHTML = d;
                            a.appendChild(e);
                        }
                    }(b.getElementsByTagName('head')[0], 'optly-body-style', d));
                    setTimeout(function () {
                        Bootstrapper._optlyShowPage(b);
                    }, f);
                };
                var data_id = '62294', proj_id = '' + Bootstrapper.data.resolve(data_id), cust_tags_obj = {}, optly_keys = Object.keys(cust_tags_obj);
                window.optimizely = window.optimizely || [];
                if (optly_keys[0] !== '')
                    if (optly_keys.length == 1)
                        window.optimizely.push([
                            'customTag',
                            optly_keys[0],
                            cust_tags_obj[optly_keys[0]]
                        ]);
                    else
                        window.optimizely.push([
                            'customTag',
                            cust_tags_obj
                        ]);
                Bootstrapper.insertScript('//cdn.optimizely.com/js/' + proj_id + '.js');
                var referrerOverride = function (referrer) {
                    Bootstrapper._GAMT.__TrackIt([
                        'set',
                        'referrer',
                        referrer
                    ]);
                };
                var sendCampaignData = function (campaignId, integrationString) {
                    if (campaignId && integrationString && integrationString != 'null') {
                        Bootstrapper._GAMT.__optlyIntegrationString = (Bootstrapper._GAMT.__optlyIntegrationString ? Bootstrapper._GAMT.__optlyIntegrationString + '|' : '') + integrationString;
                        var sessionIntegrationString = window._dasoObj.utils.storageFuncs.getData('optlySessIntStr', 's');
                        if (!sessionIntegrationString)
                            sessionIntegrationString = integrationString;
                        else {
                            var sessIntStrArr = sessionIntegrationString.split('|'), expFound = !1, i;
                            for (i = 0; i < sessIntStrArr.length; i++)
                                if (sessIntStrArr[i] == integrationString) {
                                    expFound = !0;
                                    break;
                                }
                            if (!expFound)
                                sessionIntegrationString = sessionIntegrationString + '|' + integrationString;
                        }
                        window._dasoObj.utils.storageFuncs.setData('optlySessIntStr', sessionIntegrationString, null, 's');
                        Bootstrapper._GAMT.__TrackIt([
                            'set',
                            {
                                'dimension40': Bootstrapper._GAMT.__optlyIntegrationString,
                                'dimension73': sessionIntegrationString
                            }
                        ]);
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'optimizely experiment',
                            'experiment assigned',
                            campaignId,
                            { 'nonInteraction': 1 }
                        ]);
                    }
                };
                var initNewOptimizelyIntegration = function (referrerOverride, sendCampaignData) {
                    var referrerOverwritten = false;
                    var newActiveCampaign = function (id) {
                        var state = window['optimizely'].get && window['optimizely'].get('state');
                        var referrer = state.getRedirectInfo() && state.getRedirectInfo().referrer;
                        if (!referrerOverwritten && referrer) {
                            referrerOverride(referrer);
                            referrerOverwritten = true;
                        }
                        var campaignId = id;
                        var integrationString = state.getDecisionString({ 'campaignId': campaignId });
                        sendCampaignData(campaignId, integrationString);
                    };
                    var registerFutureActiveCampaigns = function () {
                        window.optimizely = window.optimizely || [];
                        window.optimizely.push({
                            type: 'addListener',
                            filter: {
                                type: 'lifecycle',
                                name: 'campaignDecided'
                            },
                            handler: function (event) {
                                var id = event.data.campaign.id;
                                newActiveCampaign(id);
                            }
                        });
                    };
                    var registerCurrentlyActiveCampaigns = function () {
                        var state = window['optimizely'] && window['optimizely'].get && window['optimizely'].get('state');
                        if (state) {
                            var activeCampaigns = state.getCampaignStates({ isActive: true });
                            for (var id in activeCampaigns)
                                newActiveCampaign(id);
                            registerFutureActiveCampaigns();
                        } else
                            setTimeout(registerCurrentlyActiveCampaigns, 50);
                    };
                    registerCurrentlyActiveCampaigns();
                };
                var initOptimizelyIntegration = function (referrerOverride, sendCampaignData) {
                    initNewOptimizelyIntegration(referrerOverride, sendCampaignData);
                };
                initOptimizelyIntegration(referrerOverride, sendCampaignData);
            }
        }, 3514108, [3447009], 635984, [265954]);
        Bootstrapper.bindDependencyDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function addjQueryListeners() {
                jQuery('body').on('mousedown', 'a', function () {
                    var $this = jQuery(this), thisHref = $this[0].href, thisHost = $this[0].hostname, thisProtocol = $this[0].protocol;
                    if (thisHref && thisHost != document.location.hostname && thisProtocol.indexOf('http') > -1)
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'outbound links',
                            'click',
                            this.href
                        ]);
                });
            }
            function checkReady() {
                if (window.jQuery && typeof window.jQuery === 'function' && Bootstrapper._GAMT && Bootstrapper._GAMT.__TrackIt && typeof Bootstrapper._GAMT.__TrackIt === 'function')
                    addjQueryListeners();
                else
                    setTimeout(checkReady, 50);
            }
            checkReady();
        }, 3531534, [3447009], 641209, [265954]);
    }())
}