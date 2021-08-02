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
        Bootstrapper.bindImmediate(function () {
            Bootstrapper.ensEvent.add(['BingConversionUSAppointmentForm'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var param_ti = '5669593';
                var param_gv = '';
                var param_ea = 'General Form';
                var param_ec = 'Form Interaction';
                var param_el = 'Successful Form Submission';
                var param_ev = '1';
                var pageLoad = true;
                var arrayName = '';
                var onload_function = function () {
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
                };
                var local_scr_url = '//' + 'bat.bing.com/bat.js';
                Bootstrapper.loadScriptCallback(local_scr_url, onload_function);
            });
        }, 2161581, 502107);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function () {
                const $___old_952269cd26f9499f = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_952269cd26f9499f)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                    return function () {
                        var uz = document.createElement('script');
                        uz.type = 'text/javascript';
                        uz.async = true;
                        uz.charset = 'utf-8';
                        uz.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn5.userzoom.com/files/js/QzU3NjZUMyAg.js?t=uz_til&cuid=E7D5DAD86DCDE41180C90050569444FB';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(uz, s);
                    }.apply(this, arguments);
                } finally {
                    if ($___old_952269cd26f9499f)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_952269cd26f9499f));
                }
            }());
        }, 3249618, 642077);
        Bootstrapper.bindImmediate(function () {
            const $___old_20018a99f8d20b31 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_20018a99f8d20b31)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                return function () {
                    var Bootstrapper = window['Bootstrapper'];
                    var ensightenOptions = Bootstrapper.ensightenOptions;
                    window.dcTrackingId = 'DC-9063344';
                    var gtagSrc = 'https://www.googletagmanager.com/gtag/js?id=' + window.dcTrackingId;
                    Bootstrapper.loadScriptCallback(gtagSrc, function () {
                        window.dataLayer = window.dataLayer || [];
                        window.gtag = function () {
                            dataLayer.push(arguments);
                        };
                        window.gtag('js', new Date());
                        window.gtag('config', window.dcTrackingId);
                        window.gtag('event', 'conversion', {
                            'allow_custom_scripts': true,
                            'send_to': window.dcTrackingId + '/entgloba/gloentpu+unique'
                        });
                    });
                }.apply(this, arguments);
            } finally {
                if ($___old_20018a99f8d20b31)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_20018a99f8d20b31));
            }
        }, 3521123, 681939);
        Bootstrapper.bindDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (document, window, config) {
                var _config = config || {};
                var forceSyntax = _config.forceSyntax || 0;
                var dataLayerName = _config.dataLayerName || 'dataLayer';
                var eventsFired = {
                    'media play': true,
                    'media pause': true,
                    'media complete': true
                };
                var key;
                var tag = document.createElement('script');
                tag.src = '//www.youtube.com/iframe_api';
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                for (key in _config.events)
                    if (_config.events.hasOwnProperty(key))
                        eventsFired[key] = _config.events[key];
                window.onYouTubeIframeAPIReady = function () {
                    var cached = window.onYouTubeIframeAPIReady;
                    return function () {
                        if (cached)
                            cached.apply(this, arguments);
                        if (navigator.userAgent.match(/MSIE [67]\./gi))
                            return;
                        if (document.readyState !== 'loading')
                            init();
                        else if (document.addEventListener)
                            addEvent(document, 'DOMContentLoaded', init);
                        else
                            addEvent(window, 'load', init);
                    };
                }();
                function init() {
                    var potentialVideos = getTagsAsArr_('iframe').concat(getTagsAsArr_('embed'));
                    digestPotentialVideos(potentialVideos);
                    if ('addEventListener' in document)
                        document.addEventListener('load', bindToNewVideos_, true);
                }
                function digestPotentialVideos(potentialVideos) {
                    var i;
                    for (i = 0; i < potentialVideos.length; i++) {
                        var isYouTubeVideo = checkIfYouTubeVideo(potentialVideos[i]);
                        if (isYouTubeVideo) {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'video youtube',
                                'video loaded',
                                potentialVideos[i].src
                            ]);
                            var normalizedYouTubeIframe = normalizeYouTubeIframe(potentialVideos[i]);
                            addYouTubeEvents(normalizedYouTubeIframe);
                        }
                    }
                }
                function checkIfYouTubeVideo(potentialYouTubeVideo) {
                    var potentialYouTubeVideoSrc = potentialYouTubeVideo.src || '';
                    if (potentialYouTubeVideoSrc.indexOf('youtube.com/embed/') > -1 || potentialYouTubeVideoSrc.indexOf('youtube.com/v/') > -1)
                        return true;
                    return false;
                }
                function jsApiEnabled(url) {
                    return url.indexOf('enablejsapi') > -1;
                }
                function originEnabled(url) {
                    return url.indexOf('origin') > -1;
                }
                function normalizeYouTubeIframe(youTubeVideo) {
                    var loc = window.location;
                    var a = document.createElement('a');
                    a.href = youTubeVideo.src;
                    a.hostname = 'www.youtube.com';
                    a.protocol = loc.protocol;
                    var tmpPathname = a.pathname.charAt(0) === '/' ? a.pathname : '/' + a.pathname;
                    if (!jsApiEnabled(a.search))
                        a.search = (a.search.length > 0 ? a.search + '&' : '') + 'enablejsapi=1';
                    if (!originEnabled(a.search) && loc.hostname.indexOf('localhost') === -1) {
                        var port = loc.port ? ':' + loc.port : '';
                        var origin = loc.protocol + '%2F%2F' + loc.hostname + port;
                        a.search = a.search + '&origin=' + origin;
                    }
                    if (youTubeVideo.type === 'application/x-shockwave-flash') {
                        var newIframe = document.createElement('iframe');
                        newIframe.height = youTubeVideo.height;
                        newIframe.width = youTubeVideo.width;
                        tmpPathname = tmpPathname.replace('/v/', '/embed/');
                        youTubeVideo.parentNode.parentNode.replaceChild(newIframe, youTubeVideo.parentNode);
                        youTubeVideo = newIframe;
                    }
                    a.pathname = tmpPathname;
                    if (youTubeVideo.src !== a.href + a.hash)
                        youTubeVideo.src = a.href + a.hash;
                    return youTubeVideo;
                }
                function addYouTubeEvents(youTubeIframe) {
                    var player = YT.get(youTubeIframe.id);
                    if (!player)
                        player = new YT.Player(youTubeIframe, {});
                    if (typeof youTubeIframe.pauseFlag === 'undefined') {
                        youTubeIframe.pauseFlag = false;
                        player.addEventListener('onStateChange', function (evt) {
                            onStateChangeHandler(evt, youTubeIframe);
                        });
                    }
                }
                function getMarks(duration) {
                    var marks = {};
                    if (_config.events['media complete'])
                        marks['media complete'] = Math.min(duration - 3, Math.floor(duration * 0.99));
                    if (_config.percentageTracking) {
                        var points = [];
                        var i;
                        if (_config.percentageTracking.each)
                            points = points.concat(_config.percentageTracking.each);
                        if (_config.percentageTracking.every) {
                            var every = parseInt(_config.percentageTracking.every, 10);
                            var num = 100 / every;
                            for (i = 1; i < num; i++)
                                points.push(i * every);
                        }
                        for (i = 0; i < points.length; i++) {
                            var _point = points[i];
                            if (_point == 10)
                                _point = 0;
                            var _mark = 'percent played ' + _point + '%';
                            var _time = duration * _point / 100;
                            marks[_mark] = Math.floor(_time);
                        }
                    }
                    return marks;
                }
                function checkCompletion(player, marks, videoId) {
                    var currentTime = player.getCurrentTime();
                    var key;
                    player[videoId] = player[videoId] || {};
                    for (key in marks)
                        if (marks[key] <= currentTime && !player[videoId][key]) {
                            player[videoId][key] = true;
                            fireAnalyticsEvent(videoId, key);
                        }
                }
                function onStateChangeHandler(evt, youTubeIframe) {
                    var stateIndex = evt.data;
                    var player = evt.target;
                    var targetVideoUrl = player.getVideoUrl();
                    var targetVideoId = targetVideoUrl.match(/[?&]v=([^&#]*)/)[1];
                    var playerState = player.getPlayerState();
                    var duration = Math.floor(player.getDuration());
                    var marks = getMarks(duration);
                    var playerStatesIndex = {
                        1: 'media play',
                        2: 'media pause'
                    };
                    var state = playerStatesIndex[stateIndex];
                    youTubeIframe.playTracker = youTubeIframe.playTracker || {};
                    if (playerState === 1 && !youTubeIframe.timer) {
                        clearInterval(youTubeIframe.timer);
                        youTubeIframe.timer = setInterval(function () {
                            checkCompletion(player, marks, youTubeIframe.videoId);
                        }, 1000);
                    } else {
                        clearInterval(youTubeIframe.timer);
                        youTubeIframe.timer = false;
                    }
                    if (stateIndex === 1) {
                        youTubeIframe.playTracker[targetVideoId] = true;
                        youTubeIframe.videoId = targetVideoId;
                        youTubeIframe.pauseFlag = false;
                    }
                    if (!youTubeIframe.playTracker[youTubeIframe.videoId])
                        return false;
                    if (stateIndex === 2)
                        if (!youTubeIframe.pauseFlag)
                            youTubeIframe.pauseFlag = true;
                        else
                            return false;
                    if (eventsFired[state])
                        fireAnalyticsEvent(youTubeIframe.videoId, state);
                }
                function fireAnalyticsEvent(videoId, state) {
                    var videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'video youtube',
                        state,
                        videoUrl
                    ]);
                }
                function addEvent(el, name, fn) {
                    if (el.addEventListener)
                        el.addEventListener(name, fn);
                    else if (el.attachEvent)
                        el.attachEvent('on' + name, function (evt) {
                            evt.target = evt.target || evt.srcElement;
                            fn.call(el, evt);
                        });
                    else if (typeof el['on' + name] === 'undefined' || el['on' + name] === null)
                        el['on' + name] = function (evt) {
                            evt.target = evt.target || evt.srcElement;
                            fn.call(el, evt);
                        };
                }
                function getTagsAsArr_(tagName) {
                    return [].slice.call(document.getElementsByTagName(tagName));
                }
                function bindToNewVideos_(evt) {
                    var el = evt.target || evt.srcElement;
                    var isYT = checkIfYouTubeVideo(el);
                    if (el.tagName === 'IFRAME' && isYT && jsApiEnabled(el.src) && originEnabled(el.src))
                        addYouTubeEvents(el);
                }
            }(document, window, {
                'forceSyntax': 1,
                'events': {
                    'media play': true,
                    'media pause': true,
                    'media complete': true
                },
                'percentageTracking': {
                    'every': 25,
                    'each': [10]
                }
            }));
        }, 1981231, 479621);
        Bootstrapper.bindDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (w, d, s, m, n, t) {
                const $___old_3158362021a8e15b = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_3158362021a8e15b)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                    return function () {
                        w[m] = w[m] || {
                            init: function () {
                                (w[m].q = w[m].q || []).push(arguments);
                            },
                            ready: function (c) {
                                if ('function' != typeof c)
                                    return;
                                n.onload = n.onreadystatechange = function () {
                                    if (!n.readyState || /loaded|complete/.test(n.readyState)) {
                                        n.onload = n.onreadystatechange = null;
                                        if (t.parentNode && n.parentNode)
                                            t.parentNode.removeChild(n);
                                        if (c)
                                            c();
                                    }
                                };
                            }
                        }, w[m].d = 1 * new Date();
                        n = d.createElement(s);
                        t = d.getElementsByTagName(s)[0];
                        n.async = 1;
                        n.src = '//www.medtargetsystem.com/javascript/beacon.js?v2.5.12';
                        t.parentNode.insertBefore(n, t);
                    }.apply(this, arguments);
                } finally {
                    if ($___old_3158362021a8e15b)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_3158362021a8e15b));
                }
            }(window, document, 'script', 'AIM'));
            AIM.init('105-478-061A5F57');
        }, 2865737, 588904);
        Bootstrapper.bindDependencyDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function addjQueryListeners() {
                jQuery('body').on('mousedown', '#ul_e6d09fbd-19fe-49ac-9b47-bd857c0d411b > li > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'products & services',
                        'top',
                        $(this).text().toLowerCase()
                    ]);
                });
                jQuery('body').on('mousedown', '#ul_5cad3603-6c0e-45d0-9a6c-e22e9aa3b98c > li > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'products & services',
                        'top',
                        $(this).text().toLowerCase()
                    ]);
                });
                jQuery('body').on('mousedown', '#relatedLinks_856c6d24-3cca-4078-b129-b556b4342c38 > li > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'products & services',
                        'bottom',
                        $(this).text().toLowerCase()
                    ]);
                });
                jQuery('body').on('mousedown', '#productsServicesList > ol > li > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'products & services',
                        'bottom',
                        $(this).text().toLowerCase()
                    ]);
                });
                jQuery('body').on('mousedown', 'div.contentbox.mc-remove-bullets > p > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'related information',
                        'right',
                        $(this).text().toLowerCase()
                    ]);
                });
                jQuery('body').on('mousedown', '#secondary > div > p > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'related information',
                        'right',
                        $(this).text().toLowerCase()
                    ]);
                });
                jQuery('body').on('mousedown', '#leftNavigation > div > p > a[href$=\'/map\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'related information',
                        'right',
                        $(this).text().toLowerCase()
                    ]);
                });
            }
            function checkjQueryReady() {
                if (window.jQuery && typeof window.jQuery === 'function')
                    addjQueryListeners();
                else
                    setTimeout(checkjQueryReady, 50);
            }
            checkjQueryReady();
        }, 3334636, [3447009], 654746, [265954]);
        Bootstrapper.bindDOMParsed(function () {
            Bootstrapper.ensEvent.add(['AdWordsConversionUSAppointmentForm'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var custom_conversion_id = '1058061167';
                var custom_conversion_label = 'sLxPCKqfrWoQ7_bC-AM';
                var custom_conversion_value = '1';
                var custom_conversion_currency = '';
                var custom_conversion_language = 'en';
                var custom_conversion_format = '3';
                var custom_conversion_color = 'ffffff';
                var custom_conversion_order_id = '';
                var google_conversion_obj = {
                    'google_conversion_id': custom_conversion_id,
                    'google_conversion_label': custom_conversion_label,
                    'google_conversion_value': custom_conversion_value,
                    'google_conversion_currency': custom_conversion_currency,
                    'google_conversion_language': custom_conversion_language,
                    'google_conversion_format': custom_conversion_format,
                    'google_conversion_color': custom_conversion_color
                };
                if (custom_conversion_order_id)
                    google_conversion_obj.google_conversion_order_id = custom_conversion_order_id;
                var fn = function (o) {
                    return function () {
                        window.google_trackConversion(o);
                    };
                }(google_conversion_obj);
                'function' != typeof window.google_trackConversion ? Bootstrapper.loadScriptCallback('//www.googleadservices.com/pagead/conversion_async.js', function (a) {
                    return a;
                }(fn)) : fn();
            });
        }, 1610238, 427149);
        Bootstrapper.bindImmediate(function () {
            Bootstrapper.ensEvent.add(['TradeDeskConversionUSAppointmentForm'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                var tagID = '976q0s8';
                var advertiserID = 'qh49go7';
                var responseFormat = '3';
                var value = '';
                var currency = '';
                var orderID = '';
                var gdpr = '';
                var gdpr_consent = '';
                var domain = 'insight.adsrvr.org';
                var td1 = '';
                var td2 = '';
                var td3 = '';
                var td4 = '';
                var td5 = '';
                var td6 = '';
                var td7 = '';
                var td8 = '';
                var td9 = '';
                var td10 = '';
                responseFormat = responseFormat ? '&fmt=' + responseFormat : '';
                value = value ? '&v=' + value : '';
                currency = currency ? '&vf=' + currency : '';
                orderID = orderID ? '&orderid=' + orderID : '';
                gdpr = gdpr ? '&gdpr=' + gdpr : '';
                gdpr_consent = gdpr_consent ? '&gdpr_consent=' + gdpr_consent : '';
                var td_array = [
                    td1,
                    td2,
                    td3,
                    td4,
                    td5,
                    td6,
                    td7,
                    td8,
                    td9,
                    td10
                ];
                var td_parameters = '';
                for (var i = 0; i < td_array.length; i++)
                    if (td_array[i])
                        td_parameters += '&td' + (i + 1) + '=' + td_array[i];
                var source = '//' + domain + '/track/conv/?ct=0:' + tagID + '&adv=' + advertiserID + responseFormat + value + currency + orderID + td_parameters + gdpr + gdpr_consent;
                Bootstrapper.imageRequest(source);
            });
        }, 2800876, 589932);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function addjQueryListeners(cnt) {
                cnt = cnt || 0;
                var $chatBubble = jQuery('#open-toggle, .gyant-tooltip'), chatIframe = document.getElementById('gyant-iframe'), isReady = true;
                if ($chatBubble.length > 0 && chatIframe) {
                    var chatIframeDoc = chatIframe.contentWindow.document;
                    if (chatIframeDoc) {
                        $chatBubble.on('mousedown', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'covid-19 vaccine chatbot',
                                'click',
                                'open'
                            ]);
                        });
                        jQuery(chatIframeDoc).on('mousedown', '.gyant-chat-close-wrapper', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'covid-19 vaccine chatbot',
                                'click',
                                'close'
                            ]);
                        });
                        jQuery(chatIframeDoc).on('mousedown', '#userenterimg.active', function () {
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'covid-19 vaccine chatbot',
                                'click',
                                'send message'
                            ]);
                        });
                    } else
                        isReady = false;
                } else
                    isReady = false;
                if (!isReady && cnt < 40) {
                    cnt = cnt + 1;
                    setTimeout(addjQueryListeners, 50);
                }
            }
            function checkReady() {
                if (window.jQuery && typeof window.jQuery === 'function' && Bootstrapper._GAMT && Bootstrapper._GAMT.__TrackIt && typeof Bootstrapper._GAMT.__TrackIt === 'function')
                    addjQueryListeners();
                else
                    setTimeout(checkReady, 50);
            }
            checkReady();
        }, 3477157, [3447009], 678024, [265954]);
        Bootstrapper.bindImmediate(function () {
            Bootstrapper.ensEvent.add(['DCMConversionUSAppointmentForm'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                Bootstrapper.bindDOMParsed(function () {
                    Bootstrapper.imageRequest('https://8007881.fls.doubleclick.net/activityi/src=8007881;type=conve0;cat=mayoc0;ord=' + Math.round(Math.random() * 10000000000000) + '?');
                });
            });
        }, 2502350, 544012);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            try {
                if (Bootstrapper && Bootstrapper.hasOwnProperty('ensightenOptions') && Bootstrapper.ensightenOptions.hasOwnProperty('publishPath') && Bootstrapper.ensightenOptions.publishPath.indexOf('dev') > -1)
                    var doConsole = true;
                var htmlDoc = document.getElementsByTagName('html')[0], htmlClassOrig = htmlDoc.getAttribute('class') || '', htmlLangOrig = htmlDoc.getAttribute('lang') || '';
                var headObserver = new MutationObserver(function (mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                        var mutation = mutations[i], addedNode = mutation.addedNodes[0], nodeHref = addedNode.href;
                        if (nodeHref === null || nodeHref && nodeHref.indexOf('https://translate.google') < 0)
                            return;
                        doConsole ? console.log('HEAD MutationObserver fired', {
                            'addedNode': addedNode,
                            'nodeHref': nodeHref
                        }) : null;
                        checkForTranslateUpdates();
                        headObserver.disconnect();
                    }
                });
                var htmlObserver = new MutationObserver(function (mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                        var htmlLangMod = htmlDoc.getAttribute('lang');
                        if (htmlLangOrig == htmlLangMod)
                            return;
                        doConsole ? console.log('HTML MutationObserver fired', {
                            'htmlLangOrig': htmlLangOrig,
                            'htmlLangMod': htmlLangMod
                        }) : null;
                        checkForTranslateUpdates();
                    }
                });
                var checkForTranslateUpdates = function () {
                    var htmlClassMod = htmlDoc.getAttribute('class') || '', htmlLangMod = htmlDoc.getAttribute('lang') || '', htmlClassArr = htmlClassOrig.split(' '), htmlClassDiff = '' + htmlClassMod, i;
                    for (i = 0; i < htmlClassArr.length; i++)
                        htmlClassDiff = htmlClassDiff.replace(htmlClassArr[i], '');
                    htmlClassDiff = htmlClassDiff.trim();
                    if (htmlClassDiff && htmlLangMod != htmlLangOrig) {
                        doConsole ? console.log('Translation Data', {
                            'htmlClassOrig': htmlClassOrig,
                            'htmlClassMod': htmlClassMod,
                            'htmlClassDiff': htmlClassDiff,
                            'htmlLangOrig': htmlLangOrig,
                            'htmlLangMod': htmlLangMod
                        }) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'browser translate',
                            'from: ' + htmlLangOrig,
                            'to: ' + htmlLangMod,
                            { nonInteraction: 1 }
                        ]);
                        htmlLangOrig = htmlLangMod;
                        htmlObserver.observe(document.getElementsByTagName('html')[0], {
                            attributes: true,
                            attributeFilter: ['lang']
                        });
                    } else
                        setTimeout(checkForTranslateUpdates, 50);
                };
                var checkReady = function () {
                    if (Bootstrapper._GAMT && Bootstrapper._GAMT.__TrackIt && typeof Bootstrapper._GAMT.__TrackIt === 'function')
                        headObserver.observe(document.head, { childList: true });
                    else
                        setTimeout(checkReady, 50);
                };
                checkReady();
            } catch (e) {
            }
        }, 3294200, [3447009], 649464, [265954]);
        Bootstrapper.bindImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var siteId = '74881809';
            window._elqQ = window._elqQ || [];
            window._elqQ.push([
                'elqSetSiteId',
                siteId
            ]);
            window._elqQ.push(['elqTrackPageView']);
            (function () {
                function async_load() {
                    const $___old_09a2e2932fe754ef = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_09a2e2932fe754ef)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                        return function () {
                            var s = document.createElement('script');
                            s.type = 'text/javascript';
                            s.async = true;
                            s.src = '//img.en25.com/i/elqCfg.min.js';
                            var x = document.getElementsByTagName('script')[0];
                            x.parentNode.insertBefore(s, x);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_09a2e2932fe754ef)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_09a2e2932fe754ef));
                    }
                }
                if (document.readyState !== 'loading')
                    async_load();
                else if (window.addEventListener)
                    window.addEventListener('DOMContentLoaded', async_load, false);
                else if (window.attachEvent)
                    window.attachEvent('onload', async_load);
            }());
        }, 3173647, 584260);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function sendImpression() {
                var covid19GlobalNoticeLink = document.querySelectorAll('.globalnotice a[href*=\'covid-19\']');
                if (covid19GlobalNoticeLink)
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'covid-19',
                        'global .org banner',
                        'impression',
                        { nonInteraction: 1 }
                    ]);
                else
                    setTimeout(sendImpression, 50);
            }
            function addjQueryListeners() {
                jQuery('body').on('mousedown', '.globalnotice a[href*=\'covid-19\']', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'covid-19',
                        'global .org banner',
                        jQuery(this).text().trim().toLowerCase()
                    ]);
                });
            }
            function checkReady() {
                if (Bootstrapper._GAMT && Bootstrapper._GAMT.__TrackIt && typeof Bootstrapper._GAMT.__TrackIt === 'function')
                    addjQueryListeners();
                else
                    setTimeout(checkReady, 50);
            }
            checkReady();
        }, 3264113, [3447009], 645452, [265954]);
        Bootstrapper.bindDependencyDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function addjQueryListeners() {
                jQuery('body').on('mousedown', '#bannerTrigger', function () {
                    var $this = jQuery(this), bannerState = $this.attr('aria-expanded');
                    if (bannerState == 'true')
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'covid-19',
                            'global .org banner',
                            'collapse'
                        ]);
                    else
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'covid-19',
                            'global .org banner',
                            'expand'
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
        }, 3523194, [3447009], 684806, [265954]);
        Bootstrapper.bindDOMLoaded(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (window.jQuery) {
                var spanish = $('#et_spanishItemFallbackToEnglish');
                if (spanish.length > 0)
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'page not translated',
                        'spanish',
                        'page alert'
                    ]);
            }
            if (window.jQuery) {
                var chinese = $('#et_chineseItemFallbackToEnglish');
                if (chinese.length > 0)
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'page not translated',
                        'chinese',
                        'page alert'
                    ]);
            }
        }, 3083103, 459174);
        Bootstrapper.bindDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (!Bootstrapper.__excludeFromTracking) {
                function addjQueryListeners() {
                    $('body').on('mousedown', 'a[href*=\'.pdf\'], a[href*=\'.doc\'], a[href*=\'.docx\'], a[href*=\'.ppt\'], a[href*=\'.pptx\'], a[href*=\'.csv\']', function () {
                        var $this = $(this), thisHref = $this.attr('href'), fileName = thisHref.split('?')[0].split('/').slice(-1).pop(), fileType = '';
                        if (thisHref.match(/.pdf($|\?)/))
                            fileType = 'PDF';
                        else if (thisHref.match(/.docx($|\?)/))
                            fileType = 'DOCX';
                        else if (thisHref.match(/.doc($|\?)/))
                            fileType = 'DOC';
                        else if (thisHref.match(/.pptx($|\?)/))
                            fileType = 'PPTX';
                        else if (thisHref.match(/.ppt($|\?)/))
                            fileType = 'PPT';
                        else if (thisHref.match(/.csv($|\?)/))
                            fileType = 'CSV';
                        if (fileType)
                            ga('send', 'event', 'downloads', fileType, fileName);
                    });
                }
                function checkjQueryReady() {
                    if (window.jQuery && typeof window.jQuery === 'function')
                        addjQueryListeners();
                    else
                        setTimeout(checkjQueryReady, 50);
                }
                checkjQueryReady();
            }
        }, 2792695, 589722);
        Bootstrapper.bindDependencyImmediate(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (Bootstrapper && Bootstrapper.hasOwnProperty('ensightenOptions') && Bootstrapper.ensightenOptions.hasOwnProperty('publishPath') && Bootstrapper.ensightenOptions.publishPath.indexOf('dev') > -1)
                var doConsole = true;
            function addKWidgetListeners() {
                kWidget.addReadyCallback(function (playerId) {
                    var kdp = document.getElementById(playerId);
                    kdp.kBind('playerReady', function () {
                        doConsole ? console.log('player loaded', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'player loaded',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                    kdp.kBind('mediaLoaded', function () {
                        doConsole ? console.log('video loaded', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'video loaded',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                    kdp.kBind('playerPlayed', function () {
                        doConsole ? console.log('media play', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'media play',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                    kdp.kBind('playerPaused', function () {
                        var dur = kdp.evaluate('{duration}'), cur = kdp.evaluate('{video.player.currentTime}');
                        if (cur < dur - 1) {
                            doConsole ? console.log('media paused', playerId, 'currentTime: ' + cur + ' | dur: ' + dur) : null;
                            Bootstrapper._GAMT.__TrackIt([
                                'send',
                                'event',
                                'video kaltura',
                                'media paused',
                                kdp.evaluate('{mediaProxy.entry.name}'),
                                { 'nonInteraction': 1 }
                            ]);
                        }
                    });
                    kdp.kBind('firstQuartile', function () {
                        doConsole ? console.log('percent played 25%', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'percent played 25%',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                    kdp.kBind('secondQuartile', function () {
                        doConsole ? console.log('percent played 50%', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'percent played 50%',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                    kdp.kBind('thirdQuartile', function () {
                        doConsole ? console.log('percent played 75%', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'percent played 75%',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                    kdp.kBind('playbackComplete', function () {
                        doConsole ? console.log('media complete', playerId) : null;
                        Bootstrapper._GAMT.__TrackIt([
                            'send',
                            'event',
                            'video kaltura',
                            'media complete',
                            kdp.evaluate('{mediaProxy.entry.name}'),
                            { 'nonInteraction': 1 }
                        ]);
                    });
                });
            }
            function checkKWidgetReady(cntr) {
                cntr = cntr || 0;
                if (window.kWidget && window.kWidget.addReadyCallback && typeof window.kWidget.addReadyCallback === 'function' && Bootstrapper._GAMT && Bootstrapper._GAMT.__TrackIt && typeof Bootstrapper._GAMT.__TrackIt === 'function')
                    addKWidgetListeners();
                else
                    setTimeout(function () {
                        if (cntr < 50) {
                            cntr = cntr + 1;
                            checkKWidgetReady(cntr);
                        }
                    }, 50);
            }
            checkKWidgetReady();
        }, 3349275, [3447009], 624534, [265954]);
        Bootstrapper.bindDependencyDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function sendImpression() {
                var $contentCovidAlert = jQuery('div.contentbox.covid-alert, div.contentbox.alert-L1 a');
                if ($contentCovidAlert.length > 0)
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'covid-19',
                        'in-content notification',
                        'impression',
                        { nonInteraction: 1 }
                    ]);
                else
                    setTimeout(sendImpression, 50);
            }
            function addjQueryListeners() {
                sendImpression();
                jQuery('body').on('mousedown', 'div.contentbox.covid-alert > p > a, div.contentbox.alert-L1 a', function () {
                    Bootstrapper._GAMT.__TrackIt([
                        'send',
                        'event',
                        'covid-19',
                        'in-content notification',
                        jQuery(this).text().trim().toLowerCase()
                    ]);
                });
            }
            function checkjQueryReady() {
                if (window.jQuery && typeof window.jQuery === 'function')
                    addjQueryListeners();
                else
                    setTimeout(checkjQueryReady, 50);
            }
            checkjQueryReady();
        }, 3256918, [3447009], 641095, [265954]);
        Bootstrapper.bindImmediate(function () {
            const $___old_b20b1ad34c0d0941 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_b20b1ad34c0d0941)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                return function () {
                    var Bootstrapper = window['Bootstrapper'];
                    var ensightenOptions = Bootstrapper.ensightenOptions;
                    var param_ti = '5669593';
                    var param_gv = '';
                    var param_ea = '';
                    var param_ec = '';
                    var param_el = '';
                    var param_ev = '';
                    var pageLoad = true;
                    var arrayName = '';
                    var onload_function = function () {
                        const $___old_5f256dbf06053531 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_a8d99ebec0449339 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_e8a18f0f4c14dbf1 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_5f256dbf06053531)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                            if ($___old_a8d99ebec0449339)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                            if ($___old_e8a18f0f4c14dbf1)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_a3d4795b1227e751.localStorage));
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
                            if ($___old_5f256dbf06053531)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_5f256dbf06053531));
                            if ($___old_a8d99ebec0449339)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_a8d99ebec0449339));
                            if ($___old_e8a18f0f4c14dbf1)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_e8a18f0f4c14dbf1));
                        }
                    };
                    var local_scr_url = '//' + 'bat.bing.com/bat.js';
                    Bootstrapper.loadScriptCallback(local_scr_url, onload_function);
                }.apply(this, arguments);
            } finally {
                if ($___old_b20b1ad34c0d0941)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_b20b1ad34c0d0941));
            }
        }, 2865740, 501355);
        Bootstrapper.bindDOMParsed(function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (location.pathname.match(/^((\/es-es|\/ar|\/zh-hans)?(\/dotorg(master)?)?\/*)$/i))
                (function () {
                    const $___old_4adfff6be7dfb12d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_4adfff6be7dfb12d)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_691c17398c442bbb.XMLHttpRequest));
                        return function () {
                            var params = {};
                            var cid = [];
                            var paramsArr = [];
                            var cidParams = [];
                            var pl = document.createElement('script');
                            var defaultParams = { 'vid': 'hot' };
                            for (key in defaultParams)
                                params[key] = defaultParams[key];
                            for (key in cidParams)
                                cid.push(params[cidParams[key]]);
                            params.cid = cid.join('|');
                            for (key in params)
                                paramsArr.push(key + '=' + encodeURIComponent(params[key]));
                            pl.type = 'text/javascript';
                            pl.async = true;
                            pl.src = 'https://beacon.sojern.com/pixel/p/316998?f_v=v6_js&p_v=1&' + paramsArr.join('&');
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_4adfff6be7dfb12d)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4adfff6be7dfb12d));
                    }
                }());
            else
                (function () {
                    var params = {};
                    var cid = [];
                    var paramsArr = [];
                    var cidParams = [];
                    var pl = document.createElement('script');
                    var defaultParams = { 'vid': 'hot' };
                    for (key in defaultParams)
                        params[key] = defaultParams[key];
                    for (key in cidParams)
                        cid.push(params[cidParams[key]]);
                    params.cid = cid.join('|');
                    for (key in params)
                        paramsArr.push(key + '=' + encodeURIComponent(params[key]));
                    pl.type = 'text/javascript';
                    pl.async = true;
                    pl.src = 'https://beacon.sojern.com/pixel/p/317007?f_v=v6_js&p_v=1&' + paramsArr.join('&');
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
                }());
        }, 3540413, 687007);
    }())
}