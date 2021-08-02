var loadRegulation;
{
    const $___mock_deb27e86263b3319 = {};
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
    })($___mock_deb27e86263b3319);
    const $___mock_c7b5359d7d2f18ac = {};
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
    })($___mock_c7b5359d7d2f18ac);
    (function () {
        loadRegulation = $___var_797e119c770a0465;
        ({}.constructor.defineProperty(loadRegulation, 'name', {
            configurable: true,
            enumerable: false,
            value: 'loadRegulation',
            writable: false
        }));
        function $___var_797e119c770a0465() {
            const modalMarkup = '<style>' + '#acceptCookieModal { font-family: Arial, Helvetica, sans-serif; position: fixed; z-index: 99999; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.7); }' + '#acceptCookieModal .modalCookieItem h2 { font-size: 1.5em; }' + '#acceptCookieModal .modalCookieItem { background: linear-gradient(180deg,#000 0,#39579a 42%,#39579a 0,#39579a 0,#39579a 0,#1a70b7 54%,#7db9e8); color: #fefefe; margin: auto; padding: 20px; width: 20%; min-width:300px; }' + '#acceptCookieModal .modalCookieItem a { color: #fff; text-decoration: underline; }' + '#acceptCookieModal .modalCookieItem .modalCookieAgree { border-radius: 3px; color: #fff; display: inline-block; line-height: 1.375; text-decoration: none; text-transform: uppercase; transition: color,background-color .3s; vertical-align: middle; background: #5da9e4; background-image: linear-gradient(180deg,#5da9e4 1%,#3184c9 88%); box-shadow: 1px 1px 0 0 #3184c9; padding: 10px 40px; cursor: pointer; margin-top:10px; }' + '</style>' + '<div id="acceptCookieModal">' + '  <div class="modalCookieItem">' + '    <h2>We use cookies!</h2>' + '\t<div>' + '       <p>By clicking \'OK\', you agree to our and our trusted partners\' use of cookies to enable you to sign in and use our services, measure the performance of our site, provide you with content and advertising tailored to your interests, determine the effectiveness of advertisements and allow you to connect on social media.</p>' + '\t\t<p>You can find out more information on our <a href="https://login.nine.com.au/privacy?client_id=9nowweb#section-cookies" target="_blank">Privacy Policy</a>.</p>' + '\t</div>' + '\t<a class="modalCookieAgree" href="#" title="Click to accept cookies">OK, agreed!</a>' + '  </div>' + '</div>';
            function getCookieAcceptGDPR() {
                let name = 'AcceptGDPRCookies=';
                let decodedCookie = decodeURIComponent(document.cookie);
                let cookieArray = decodedCookie.split(';');
                for (let i = 0; i < cookieArray.length; i++) {
                    let cookie = cookieArray[i];
                    while (cookie.charAt(0) == ' ') {
                        cookie = cookie.substring(1);
                    }
                    if (cookie.indexOf(name) == 0) {
                        return cookie.substring(name.length, cookie.length);
                    }
                }
                return false;
            }
            function setCookieAcceptGDPR() {
                let date = new Date();
                date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
                let expires = 'expires=' + date.toUTCString();
                document.cookie = 'AcceptGDPRCookies=true;' + expires + ';domain=.' + getRootDomain() + ';path=/';
            }
            function getLocalStorageGDPR() {
                const $___old_6ae05156966962d2 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_6ae05156966962d2)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_deb27e86263b3319.localStorage));
                    return function () {
                        if (window.localStorage) {
                            return localStorage.getItem('AcceptGDPRLocal');
                        }
                        return false;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_6ae05156966962d2)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_6ae05156966962d2));
                }
            }
            function setLocalStorageGDPR() {
                const $___old_d45fc9232c47767b = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_d45fc9232c47767b)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_deb27e86263b3319.localStorage));
                    return function () {
                        if (window.localStorage) {
                            localStorage.setItem('AcceptGDPRLocal', 'true');
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_d45fc9232c47767b)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_d45fc9232c47767b));
                }
            }
            function checkEuropeanRequirement(callback) {
                const $___old_d2d31295a17ce1c6 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_27977d5145cc0804 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_d2d31295a17ce1c6)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c7b5359d7d2f18ac.XMLHttpRequest));
                    if ($___old_27977d5145cc0804)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c7b5359d7d2f18ac.XMLHttpRequest));
                    return function () {
                        if (getCookieAcceptGDPR() || getLocalStorageGDPR()) {
                            return callback(false);
                        }
                        let url = 'https://loc.api.nine.com.au/api/location/iseuro';
                        let xmlhttp = new XMLHttpRequest();
                        xmlhttp.onreadystatechange = function () {
                            if (this.readyState == 4) {
                                if (this.status == 200) {
                                    let isEuro = JSON.parse(this.responseText).isEuro;
                                    if (!isEuro) {
                                        setCookieAcceptGDPR();
                                        setLocalStorageGDPR();
                                    }
                                    return callback(isEuro);
                                }
                                return callback(false);
                            }
                        };
                        xmlhttp.onerror = function () {
                            setCookieAcceptGDPR();
                            setLocalStorageGDPR();
                            return callback(false);
                        };
                        xmlhttp.open('GET', url);
                        xmlhttp.send();
                    }.apply(this, arguments);
                } finally {
                    if ($___old_d2d31295a17ce1c6)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_d2d31295a17ce1c6));
                    if ($___old_27977d5145cc0804)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_27977d5145cc0804));
                }
            }
            function getRootDomain() {
                let hostnameArray = location.hostname.replace('www.', '').split('.');
                let splice = hostnameArray[hostnameArray.length - 1].length === 2 && hostnameArray.length > 2 ? 3 : 2;
                return location.hostname.split('.').reverse().splice(0, splice).reverse().join('.');
            }
            function acceptGDPR() {
                setCookieAcceptGDPR();
                setLocalStorageGDPR();
                let modal = document.getElementById('acceptCookieModal');
                modal.hidden = true;
                return false;
            }
            checkEuropeanRequirement(function (displayModal) {
                if (displayModal) {
                    let div = document.createElement('div');
                    div.innerHTML = modalMarkup;
                    let style = div.children[0];
                    let dom = div.children[1];
                    let modalCookie = dom.getElementsByClassName('modalCookieAgree')[0];
                    modalCookie.onclick = acceptGDPR;
                    document.body.appendChild(style);
                    document.body.appendChild(dom);
                }
            });
        }
        loadRegulation();
    }())
}