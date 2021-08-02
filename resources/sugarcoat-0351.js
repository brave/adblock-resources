{
    const $___mock_ec20ad2df7691a38 = {};
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
    })($___mock_ec20ad2df7691a38);
    (function () {
        if (CE_USER_SCRIPT = !0, 'object' == typeof CE2 && (CE2.uid || CE2.data))
            throw Error('CE: multiple userscripts installed');
        'undefined' == typeof CE2 && (CE2 = {}), CE2.userDataToJs = function (t) {
            for (var e = [
                        [
                            'uid',
                            'uid'
                        ],
                        [
                            'snapshots',
                            'snapshots'
                        ],
                        [
                            'status',
                            'status'
                        ],
                        [
                            'flows',
                            'flows'
                        ],
                        [
                            'pageEdits',
                            'page_edits'
                        ],
                        [
                            'sites',
                            'sites'
                        ],
                        [
                            'USER_SCRIPT_VERSION',
                            'updated_at'
                        ],
                        [
                            '__CE_HOST__',
                            'ce_app_url'
                        ],
                        [
                            'COMMON_SCRIPT',
                            'common_script_url'
                        ],
                        [
                            'COMMON_SCRIPT_SECURE',
                            'common_script_url'
                        ],
                        [
                            'TRACKING_SCRIPT',
                            'tracking_script_url'
                        ],
                        [
                            'TRACKING_SCRIPT_SECURE',
                            'tracking_script_url'
                        ],
                        [
                            'AUTH_KEY',
                            'hud_auth_key'
                        ],
                        [
                            'HUD',
                            'hud'
                        ],
                        [
                            'GLOBAL_IP_BLOCK_LIST',
                            'global_ip_block_list'
                        ],
                        [
                            'IS_USING_IP_BLOCKING',
                            'is_using_ip_blocking'
                        ],
                        [
                            'TRACKING_DEST_NEW',
                            'v6_tracking_dest'
                        ],
                        [
                            'TRACKING_DEST_NEW_SECURE',
                            'v6_secure_tracking_dest'
                        ],
                        [
                            'DEST_V11',
                            'v11_tracking_dest'
                        ],
                        [
                            'FT_DEST',
                            'flow_tracking_dest'
                        ],
                        [
                            'PAGE_VIEWS_LIMIT_REACHED',
                            'page_views_limit_reached'
                        ],
                        [
                            'NUMBER_OF_RECORDINGS',
                            'recordings_number'
                        ],
                        [
                            'RECORDINGS_ACTIVATION',
                            'recordings_activation'
                        ],
                        [
                            'ERROR_TRACKING',
                            'error_tracking'
                        ],
                        [
                            'DEST_ERRORS_API',
                            'error_tracking_dest'
                        ],
                        [
                            'DEST_ERRORS_API_DOMAIN',
                            'error_tracking_script_url'
                        ]
                    ], r = 0; r < e.length; r++) {
                var a = e[r];
                CE2.data[a[1]] && (CE2[a[0]] = CE2.data[a[1]]);
            }
            CE2.data.recordings_dest && (CE2.SREC_DEST = {
                record: CE2.data.recordings_dest,
                sample: CE2.data.recordings_sampling_dest
            });
        }, CE_USER_DATA_URL = 'https://script.crazyegg.com/pages/data-scripts/0014/0351.json', CE2.debugEnabled = function () {
            return 'undefined' != typeof CE_DEBUG && CE_DEBUG;
        }, CE2.debug = function (t) {
            if (!CE2.debugEnabled())
                return !1;
            console.log('string' == typeof t ? 'CE: ' + t : t);
        }, CE2.runLoadedScriptCallbacks = function (t) {
            for (var e; e = CE2.LOADED_SCRIPTS_CALLBACKS[t].pop();)
                e();
        }, CE2.loadScript = function (t, e) {
            if (CE2.LOADED_SCRIPTS || (CE2.LOADED_SCRIPTS = []), CE2.INCLUDED_SCRIPTS || (CE2.INCLUDED_SCRIPTS = []), CE2.LOADED_SCRIPTS_CALLBACKS || (CE2.LOADED_SCRIPTS_CALLBACKS = {}), CE2.LOADED_SCRIPTS_CALLBACKS[t] || (CE2.LOADED_SCRIPTS_CALLBACKS[t] = []), e && CE2.LOADED_SCRIPTS_CALLBACKS[t].push(e), -1 < CE2.LOADED_SCRIPTS.indexOf(t))
                return CE2.runLoadedScriptCallbacks(t);
            if (!(-1 < CE2.INCLUDED_SCRIPTS.indexOf(t))) {
                var r = document.createElement('script');
                CE2.debug('Loading script ' + t), r.src = t, r.type = 'text/javascript', r.async = !0;
                var a = document.getElementsByTagName('script')[0];
                return a.parentNode.insertBefore(r, a), r.onload = r.onreadystatechange = function () {
                    r.readyState && !/complete|loaded/.test(r.readyState) || (CE2.LOADED_SCRIPTS.push(t), CE2.runLoadedScriptCallbacks(t), r.onload = null, r.onreadystatechange = null);
                }, CE2.INCLUDED_SCRIPTS.push(t), !1;
            }
        }, CE2.loadCommonScript = function (t) {
            if (CE2.userMain)
                return t();
            CE2.loadScript(CE2.data.common_script_url, t);
        }, CE2.loadTrackingScript = function (t) {
            if (CE2.V11Tracker)
                return t();
            CE2.loadScript(CE2.data.tracking_script_url, t);
        }, CE2.loadSessionTrackingScript = function (t) {
            if (CE2.pageState)
                return t();
            CE2.loadScript(CE2.data.trackingpagestate_script_url, function () {
                CE2.loadTrackingScript(t);
            });
        }, CE2.getUserDataTime = function () {
            if (window.performance && performance.getEntriesByType) {
                var t = performance.getEntriesByType('navigation');
                if (t && t[0])
                    return 'back_forward' === t[0].type ? parseInt(+new Date() / 300000, 10) : 1;
            }
            return parseInt(+new Date() / 3600000, 10);
        }, CE2.isNativeFunction = function (t) {
            return !!t && /\{\s+\[native code\]/.test(Function.prototype.toString.call(t));
        }, CE2.cleanPrototype = function (t) {
            const $___old_c7aa8002103d559e = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_c7aa8002103d559e)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_ec20ad2df7691a38.XMLHttpRequest));
                return function () {
                    if ('undefined' == typeof window)
                        return CE2.s[t];
                    var e = 'ce_proto_iframe', r = document.getElementById(e);
                    return r || ((r = document.createElement('iframe')).id = e, r.title = 'CrazyEgg Tracking iframe', r.style.display = 'none', document.documentElement.appendChild(r)), r.contentWindow[t];
                }.apply(this, arguments);
            } finally {
                if ($___old_c7aa8002103d559e)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_c7aa8002103d559e));
            }
        }, CE2.XMLHttpRequest || Object.defineProperty(CE2, 'XMLHttpRequest', {
            get: function () {
                return CE2._xmlHttpRequest || CE2.isNativeFunction(XMLHttpRequest.prototype.send) || (CE2._xmlHttpRequest = CE2.cleanPrototype('XMLHttpRequest')), CE2._xmlHttpRequest || XMLHttpRequest;
            }
        }), CE2.loadUserData = function (t) {
            const $___old_e1064bf9dd4b6752 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_e1064bf9dd4b6752)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_ec20ad2df7691a38.XMLHttpRequest));
                return function () {
                    var e = new CE2.XMLHttpRequest();
                    e.onreadystatechange = function () {
                        if (4 == e.readyState)
                            try {
                                200 == e.status && e.responseText && (CE2.data = JSON.parse(e.responseText), 'undefined' != typeof CE_LOCAL_SCRIPT_HOST && (CE2.data.common_script_url = CE_LOCAL_SCRIPT_HOST + '/pages/versioned/common-scripts-source/latest.js', CE2.data.tracking_script_url = CE_LOCAL_SCRIPT_HOST + '/pages/versioned/tracking-scripts-source/latest.js', CE2.data.trackingpagestate_script_url = CE_LOCAL_SCRIPT_HOST + '/pages/versioned/trackingpagestate-scripts-source/latest.js'), window.CE_USER_COMMON_SCRIPT_URL || (window.CE_USER_COMMON_SCRIPT_URL = CE2.data.common_script_url, window.CE_USER_THIRDPARTY_SCRIPT_URL = CE2.data.thirdparty_script_url), CE2.userDataToJs(CE2.data), 'ok' === CE2.data.status && CE2.loadCommonScript());
                            } catch (t) {
                                CE2.debug('Error loading user data: ' + t.message);
                            }
                    }, CE2.debug('Loading user data ' + CE_USER_DATA_URL), e.open('GET', CE_USER_DATA_URL + '?t=' + CE2.getUserDataTime(), !0), e.send();
                }.apply(this, arguments);
            } finally {
                if ($___old_e1064bf9dd4b6752)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_e1064bf9dd4b6752));
            }
        }, 'undefined' != typeof CE_USER_DATA_URL ? CE2.loadUserData() : CE2.debugEnabled() && CE2.debug('Missing CE_USER_DATA_URL');
    }())
}