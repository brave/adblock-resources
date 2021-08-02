var __extends, JL, define;
{
    const $___mock_59d64e1810e2b455 = {};
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
    })($___mock_59d64e1810e2b455);
    (function () {
        JL = $___var_1a66b1c5182ab3ea;
        ({}.constructor.defineProperty(JL, 'name', {
            configurable: true,
            enumerable: false,
            value: 'JL',
            writable: false
        }));
        var $___var_f8f8ac1c0f243908 = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                d.__proto__ = b;
            } || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        __extends = $___var_f8f8ac1c0f243908;
        function $___var_1a66b1c5182ab3ea(loggerName) {
            if (!loggerName) {
                return JL.__;
            }
            if (!Array.prototype.reduce) {
                Array.prototype.reduce = function (callback, initialValue) {
                    var previousValue = initialValue;
                    for (var i = 0; i < this.length; i++) {
                        previousValue = callback(previousValue, this[i], i, this);
                    }
                    return previousValue;
                };
            }
            var accumulatedLoggerName = '';
            var logger = ('.' + loggerName).split('.').reduce(function (prev, curr, idx, arr) {
                if (accumulatedLoggerName) {
                    accumulatedLoggerName += '.' + curr;
                } else {
                    accumulatedLoggerName = curr;
                }
                var currentLogger = prev['__' + accumulatedLoggerName];
                if (currentLogger === undefined) {
                    JL.Logger.prototype = prev;
                    currentLogger = new JL.Logger(accumulatedLoggerName);
                    prev['__' + accumulatedLoggerName] = currentLogger;
                }
                return currentLogger;
            }, JL.__);
            return logger;
        }
        (function (JL) {
            JL.requestId = '';
            JL.entryId = 0;
            JL._createXMLHttpRequest = function () {
                const $___old_ff59a971094b4968 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_5b8fa1ec28127e64 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_ff59a971094b4968)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_59d64e1810e2b455.XMLHttpRequest));
                    if ($___old_5b8fa1ec28127e64)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_59d64e1810e2b455.XMLHttpRequest));
                    return function () {
                        return new XMLHttpRequest();
                    }.apply(this, arguments);
                } finally {
                    if ($___old_ff59a971094b4968)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_ff59a971094b4968));
                    if ($___old_5b8fa1ec28127e64)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_5b8fa1ec28127e64));
                }
            };
            JL._getTime = function () {
                return new Date().getTime();
            };
            JL._console = console;
            function copyProperty(propertyName, from, to) {
                if (from[propertyName] === undefined) {
                    return;
                }
                if (from[propertyName] === null) {
                    delete to[propertyName];
                    return;
                }
                to[propertyName] = from[propertyName];
            }
            function allow(filters) {
                if (!(JL.enabled == null)) {
                    if (!JL.enabled) {
                        return false;
                    }
                }
                try {
                    if (filters.userAgentRegex) {
                        if (!new RegExp(filters.userAgentRegex).test(navigator.userAgent)) {
                            return false;
                        }
                    }
                } catch (e) {
                }
                try {
                    if (filters.ipRegex && JL.clientIP) {
                        if (!new RegExp(filters.ipRegex).test(JL.clientIP)) {
                            return false;
                        }
                    }
                } catch (e) {
                }
                return true;
            }
            function allowMessage(filters, message) {
                try {
                    if (filters.disallow) {
                        if (new RegExp(filters.disallow).test(message)) {
                            return false;
                        }
                    }
                } catch (e) {
                }
                return true;
            }
            function stringifyLogObjectFunction(logObject) {
                if (typeof logObject == 'function') {
                    if (logObject instanceof RegExp) {
                        return logObject.toString();
                    } else {
                        return logObject();
                    }
                }
                return logObject;
            }
            var StringifiedLogObject = function () {
                function StringifiedLogObject(msg, meta, finalString) {
                    this.msg = msg;
                    this.meta = meta;
                    this.finalString = finalString;
                }
                return StringifiedLogObject;
            }();
            function stringifyLogObject(logObject) {
                var actualLogObject = stringifyLogObjectFunction(logObject);
                var finalString;
                switch (typeof actualLogObject) {
                case 'string':
                    return new StringifiedLogObject(actualLogObject, null, actualLogObject);
                case 'number':
                    finalString = actualLogObject.toString();
                    return new StringifiedLogObject(finalString, null, finalString);
                case 'boolean':
                    finalString = actualLogObject.toString();
                    return new StringifiedLogObject(finalString, null, finalString);
                case 'undefined':
                    return new StringifiedLogObject('undefined', null, 'undefined');
                case 'object':
                    if (actualLogObject instanceof RegExp || actualLogObject instanceof String || actualLogObject instanceof Number || actualLogObject instanceof Boolean) {
                        finalString = actualLogObject.toString();
                        return new StringifiedLogObject(finalString, null, finalString);
                    } else {
                        if (typeof JL.serialize === 'function') {
                            finalString = JL.serialize.call(this, actualLogObject);
                        } else {
                            finalString = JSON.stringify(actualLogObject);
                        }
                        return new StringifiedLogObject('', actualLogObject, finalString);
                    }
                default:
                    return new StringifiedLogObject('unknown', null, 'unknown');
                }
            }
            function setOptions(options) {
                copyProperty('enabled', options, this);
                copyProperty('maxMessages', options, this);
                copyProperty('defaultAjaxUrl', options, this);
                copyProperty('clientIP', options, this);
                copyProperty('requestId', options, this);
                copyProperty('defaultBeforeSend', options, this);
                copyProperty('serialize', options, this);
                return this;
            }
            JL.setOptions = setOptions;
            function getAllLevel() {
                return -2147483648;
            }
            JL.getAllLevel = getAllLevel;
            function getTraceLevel() {
                return 1000;
            }
            JL.getTraceLevel = getTraceLevel;
            function getDebugLevel() {
                return 2000;
            }
            JL.getDebugLevel = getDebugLevel;
            function getInfoLevel() {
                return 3000;
            }
            JL.getInfoLevel = getInfoLevel;
            function getWarnLevel() {
                return 4000;
            }
            JL.getWarnLevel = getWarnLevel;
            function getErrorLevel() {
                return 5000;
            }
            JL.getErrorLevel = getErrorLevel;
            function getFatalLevel() {
                return 6000;
            }
            JL.getFatalLevel = getFatalLevel;
            function getOffLevel() {
                return 2147483647;
            }
            JL.getOffLevel = getOffLevel;
            function levelToString(level) {
                if (level <= 1000) {
                    return 'trace';
                }
                if (level <= 2000) {
                    return 'debug';
                }
                if (level <= 3000) {
                    return 'info';
                }
                if (level <= 4000) {
                    return 'warn';
                }
                if (level <= 5000) {
                    return 'error';
                }
                return 'fatal';
            }
            var Exception = function () {
                function Exception(data, inner) {
                    this.inner = inner;
                    this.name = 'JL.Exception';
                    this.message = stringifyLogObject(data).finalString;
                }
                return Exception;
            }();
            JL.Exception = Exception;
            Exception.prototype = new Error();
            var LogItem = function () {
                function LogItem(l, m, n, t, u) {
                    this.l = l;
                    this.m = m;
                    this.n = n;
                    this.t = t;
                    this.u = u;
                }
                return LogItem;
            }();
            JL.LogItem = LogItem;
            function newLogItem(levelNbr, message, loggerName) {
                JL.entryId++;
                return new LogItem(levelNbr, message, loggerName, JL._getTime(), JL.entryId);
            }
            function clearTimer(timer) {
                if (timer.id) {
                    clearTimeout(timer.id);
                    timer.id = null;
                }
            }
            function setTimer(timer, timeoutMs, callback) {
                var that = this;
                if (!timer.id) {
                    timer.id = setTimeout(function () {
                        callback.call(that);
                    }, timeoutMs);
                }
            }
            var Appender = function () {
                function Appender(appenderName, sendLogItems) {
                    this.appenderName = appenderName;
                    this.sendLogItems = sendLogItems;
                    this.level = JL.getTraceLevel();
                    this.sendWithBufferLevel = 2147483647;
                    this.storeInBufferLevel = -2147483648;
                    this.bufferSize = 0;
                    this.batchSize = 1;
                    this.maxBatchSize = 20;
                    this.batchTimeout = 2147483647;
                    this.sendTimeout = 5000;
                    this.buffer = [];
                    this.batchBuffer = [];
                    this.batchTimeoutTimer = { id: null };
                    this.sendTimeoutTimer = { id: null };
                    this.nbrLogItemsSkipped = 0;
                    this.nbrLogItemsBeingSent = 0;
                }
                Appender.prototype.addLogItemsToBuffer = function (logItems) {
                    if (this.batchBuffer.length >= this.maxBatchSize) {
                        this.nbrLogItemsSkipped += logItems.length;
                        return;
                    }
                    if (!(JL.maxMessages == null)) {
                        if (JL.maxMessages < 1) {
                            return;
                        }
                        JL.maxMessages -= logItems.length;
                    }
                    this.batchBuffer = this.batchBuffer.concat(logItems);
                    var that = this;
                    setTimer(this.batchTimeoutTimer, this.batchTimeout, function () {
                        that.sendBatch.call(that);
                    });
                };
                ;
                Appender.prototype.batchBufferHasOverdueMessages = function () {
                    for (var i = 0; i < this.batchBuffer.length; i++) {
                        var messageAgeMs = JL._getTime() - this.batchBuffer[i].t;
                        if (messageAgeMs > this.batchTimeout) {
                            return true;
                        }
                    }
                    return false;
                };
                Appender.prototype.batchBufferHasStrandedMessage = function () {
                    return !(JL.maxMessages == null) && JL.maxMessages < 1 && this.batchBuffer.length > 0;
                };
                Appender.prototype.sendBatchIfComplete = function () {
                    if (this.batchBuffer.length >= this.batchSize || this.batchBufferHasOverdueMessages() || this.batchBufferHasStrandedMessage()) {
                        this.sendBatch();
                    }
                };
                Appender.prototype.onSendingEnded = function () {
                    clearTimer(this.sendTimeoutTimer);
                    this.nbrLogItemsBeingSent = 0;
                    this.sendBatchIfComplete();
                };
                Appender.prototype.setOptions = function (options) {
                    copyProperty('level', options, this);
                    copyProperty('ipRegex', options, this);
                    copyProperty('userAgentRegex', options, this);
                    copyProperty('disallow', options, this);
                    copyProperty('sendWithBufferLevel', options, this);
                    copyProperty('storeInBufferLevel', options, this);
                    copyProperty('bufferSize', options, this);
                    copyProperty('batchSize', options, this);
                    copyProperty('maxBatchSize', options, this);
                    copyProperty('batchTimeout', options, this);
                    copyProperty('sendTimeout', options, this);
                    if (this.bufferSize < this.buffer.length) {
                        this.buffer.length = this.bufferSize;
                    }
                    if (this.maxBatchSize < this.batchSize) {
                        throw new JL.Exception({
                            'message': 'maxBatchSize cannot be smaller than batchSize',
                            'maxBatchSize': this.maxBatchSize,
                            'batchSize': this.batchSize
                        });
                    }
                    return this;
                };
                Appender.prototype.log = function (level, msg, meta, callback, levelNbr, message, loggerName) {
                    var logItem;
                    if (!allow(this)) {
                        return;
                    }
                    if (!allowMessage(this, message)) {
                        return;
                    }
                    if (levelNbr < this.storeInBufferLevel) {
                        return;
                    }
                    logItem = newLogItem(levelNbr, message, loggerName);
                    if (levelNbr < this.level) {
                        if (this.bufferSize > 0) {
                            this.buffer.push(logItem);
                            if (this.buffer.length > this.bufferSize) {
                                this.buffer.shift();
                            }
                        }
                        return;
                    }
                    this.addLogItemsToBuffer([logItem]);
                    if (levelNbr >= this.sendWithBufferLevel) {
                        if (this.buffer.length) {
                            this.addLogItemsToBuffer(this.buffer);
                            this.buffer.length = 0;
                        }
                    }
                    this.sendBatchIfComplete();
                };
                ;
                Appender.prototype.sendBatch = function () {
                    if (this.nbrLogItemsBeingSent > 0) {
                        return;
                    }
                    clearTimer(this.batchTimeoutTimer);
                    if (this.batchBuffer.length == 0) {
                        return;
                    }
                    this.nbrLogItemsBeingSent = this.batchBuffer.length;
                    var that = this;
                    setTimer(this.sendTimeoutTimer, this.sendTimeout, function () {
                        that.onSendingEnded.call(that);
                    });
                    this.sendLogItems(this.batchBuffer, function () {
                        that.batchBuffer.splice(0, that.nbrLogItemsBeingSent);
                        if (that.nbrLogItemsSkipped > 0) {
                            that.batchBuffer.push(newLogItem(getWarnLevel(), 'Lost ' + that.nbrLogItemsSkipped + ' messages. Either connection with the server was down or logging was disabled via the enabled option. Reduce lost messages by increasing the ajaxAppender option maxBatchSize.', that.appenderName));
                            that.nbrLogItemsSkipped = 0;
                        }
                        that.onSendingEnded.call(that);
                    });
                };
                return Appender;
            }();
            JL.Appender = Appender;
            var AjaxAppender = function (_super) {
                __extends(AjaxAppender, _super);
                function AjaxAppender(appenderName) {
                    var _this = _super.call(this, appenderName, AjaxAppender.prototype.sendLogItemsAjax) || this;
                    _this.xhr = JL._createXMLHttpRequest();
                    return _this;
                }
                AjaxAppender.prototype.setOptions = function (options) {
                    copyProperty('url', options, this);
                    copyProperty('beforeSend', options, this);
                    _super.prototype.setOptions.call(this, options);
                    return this;
                };
                AjaxAppender.prototype.sendLogItemsAjax = function (logItems, successCallback) {
                    try {
                        if (!allow(this)) {
                            return;
                        }
                        var xhrState = this.xhr.readyState;
                        if (xhrState != 0 && xhrState != 4) {
                            this.xhr.abort();
                        }
                        var ajaxUrl = '/jsnlog.logger';
                        if (!(JL.defaultAjaxUrl == null)) {
                            ajaxUrl = JL.defaultAjaxUrl;
                        }
                        if (this.url) {
                            ajaxUrl = this.url;
                        }
                        this.xhr.open('POST', ajaxUrl);
                        this.xhr.setRequestHeader('Content-Type', 'application/json');
                        this.xhr.setRequestHeader('JSNLog-RequestId', JL.requestId);
                        var that = this;
                        this.xhr.onreadystatechange = function () {
                            if (that.xhr.readyState == 4 && (that.xhr.status >= 200 && that.xhr.status < 300)) {
                                successCallback();
                            }
                        };
                        var json = {
                            r: JL.requestId,
                            lg: logItems
                        };
                        if (typeof this.beforeSend === 'function') {
                            this.beforeSend.call(this, this.xhr, json);
                        } else if (typeof JL.defaultBeforeSend === 'function') {
                            JL.defaultBeforeSend.call(this, this.xhr, json);
                        }
                        var finalmsg = JSON.stringify(json);
                        this.xhr.send(finalmsg);
                    } catch (e) {
                    }
                };
                return AjaxAppender;
            }(Appender);
            JL.AjaxAppender = AjaxAppender;
            var ConsoleAppender = function (_super) {
                __extends(ConsoleAppender, _super);
                function ConsoleAppender(appenderName) {
                    return _super.call(this, appenderName, ConsoleAppender.prototype.sendLogItemsConsole) || this;
                }
                ConsoleAppender.prototype.clog = function (logEntry) {
                    JL._console.log(logEntry);
                };
                ConsoleAppender.prototype.cerror = function (logEntry) {
                    if (JL._console.error) {
                        JL._console.error(logEntry);
                    } else {
                        this.clog(logEntry);
                    }
                };
                ConsoleAppender.prototype.cwarn = function (logEntry) {
                    if (JL._console.warn) {
                        JL._console.warn(logEntry);
                    } else {
                        this.clog(logEntry);
                    }
                };
                ConsoleAppender.prototype.cinfo = function (logEntry) {
                    if (JL._console.info) {
                        JL._console.info(logEntry);
                    } else {
                        this.clog(logEntry);
                    }
                };
                ConsoleAppender.prototype.cdebug = function (logEntry) {
                    if (JL._console.debug) {
                        JL._console.debug(logEntry);
                    } else {
                        this.cinfo(logEntry);
                    }
                };
                ConsoleAppender.prototype.sendLogItemsConsole = function (logItems, successCallback) {
                    try {
                        if (!allow(this)) {
                            return;
                        }
                        if (!JL._console) {
                            return;
                        }
                        var i;
                        for (i = 0; i < logItems.length; ++i) {
                            var li = logItems[i];
                            var msg = li.n + ': ' + li.m;
                            if (typeof window === 'undefined') {
                                msg = new Date(li.t) + ' | ' + msg;
                            }
                            if (li.l <= JL.getDebugLevel()) {
                                this.cdebug(msg);
                            } else if (li.l <= JL.getInfoLevel()) {
                                this.cinfo(msg);
                            } else if (li.l <= JL.getWarnLevel()) {
                                this.cwarn(msg);
                            } else {
                                this.cerror(msg);
                            }
                        }
                    } catch (e) {
                    }
                    successCallback();
                };
                return ConsoleAppender;
            }(Appender);
            JL.ConsoleAppender = ConsoleAppender;
            var Logger = function () {
                function Logger(loggerName) {
                    this.loggerName = loggerName;
                    this.seenRegexes = [];
                }
                Logger.prototype.setOptions = function (options) {
                    copyProperty('level', options, this);
                    copyProperty('userAgentRegex', options, this);
                    copyProperty('disallow', options, this);
                    copyProperty('ipRegex', options, this);
                    copyProperty('appenders', options, this);
                    copyProperty('onceOnly', options, this);
                    this.seenRegexes = [];
                    return this;
                };
                Logger.prototype.buildExceptionObject = function (e) {
                    var excObject = {};
                    if (e.stack) {
                        excObject.stack = e.stack;
                    } else {
                        excObject.e = e;
                    }
                    if (e.message) {
                        excObject.message = e.message;
                    }
                    if (e.name) {
                        excObject.name = e.name;
                    }
                    if (e.data) {
                        excObject.data = e.data;
                    }
                    if (e.inner) {
                        excObject.inner = this.buildExceptionObject(e.inner);
                    }
                    return excObject;
                };
                Logger.prototype.log = function (level, logObject, e) {
                    var i = 0;
                    var compositeMessage;
                    var excObject;
                    if (!this.appenders) {
                        return this;
                    }
                    if (level >= this.level && allow(this)) {
                        if (e) {
                            excObject = this.buildExceptionObject(e);
                            excObject.logData = stringifyLogObjectFunction(logObject);
                        } else {
                            excObject = logObject;
                        }
                        compositeMessage = stringifyLogObject(excObject);
                        if (allowMessage(this, compositeMessage.finalString)) {
                            if (this.onceOnly) {
                                i = this.onceOnly.length - 1;
                                while (i >= 0) {
                                    if (new RegExp(this.onceOnly[i]).test(compositeMessage.finalString)) {
                                        if (this.seenRegexes[i]) {
                                            return this;
                                        }
                                        this.seenRegexes[i] = true;
                                    }
                                    i--;
                                }
                            }
                            compositeMessage.meta = compositeMessage.meta || {};
                            i = this.appenders.length - 1;
                            while (i >= 0) {
                                this.appenders[i].log(levelToString(level), compositeMessage.msg, compositeMessage.meta, function () {
                                }, level, compositeMessage.finalString, this.loggerName);
                                i--;
                            }
                        }
                    }
                    return this;
                };
                Logger.prototype.trace = function (logObject) {
                    return this.log(getTraceLevel(), logObject);
                };
                Logger.prototype.debug = function (logObject) {
                    return this.log(getDebugLevel(), logObject);
                };
                Logger.prototype.info = function (logObject) {
                    return this.log(getInfoLevel(), logObject);
                };
                Logger.prototype.warn = function (logObject) {
                    return this.log(getWarnLevel(), logObject);
                };
                Logger.prototype.error = function (logObject) {
                    return this.log(getErrorLevel(), logObject);
                };
                Logger.prototype.fatal = function (logObject) {
                    return this.log(getFatalLevel(), logObject);
                };
                Logger.prototype.fatalException = function (logObject, e) {
                    return this.log(getFatalLevel(), logObject, e);
                };
                return Logger;
            }();
            JL.Logger = Logger;
            function createAjaxAppender(appenderName) {
                return new AjaxAppender(appenderName);
            }
            JL.createAjaxAppender = createAjaxAppender;
            function createConsoleAppender(appenderName) {
                return new ConsoleAppender(appenderName);
            }
            JL.createConsoleAppender = createConsoleAppender;
            var defaultAppender = new ConsoleAppender('');
            if (typeof window !== 'undefined') {
                defaultAppender = new AjaxAppender('');
            }
            JL.__ = new JL.Logger('');
            JL.__.setOptions({
                level: JL.getDebugLevel(),
                appenders: [defaultAppender]
            });
        }(JL || (JL = {})));
        if (typeof exports !== 'undefined') {
            exports.__esModule = true;
            exports.JL = JL;
        }
        var $___var_e320df167b72707b;
        define = $___var_e320df167b72707b;
        if (typeof define == 'function' && define.amd) {
            define('jsnlog', [], function () {
                return JL;
            });
        }
        if (typeof __jsnlog_configure == 'function') {
            __jsnlog_configure(JL);
        }
        if (typeof window !== 'undefined' && !window.onerror) {
            window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
                JL('onerrorLogger').fatalException({
                    'msg': 'Uncaught Exception',
                    'errorMsg': errorMsg,
                    'url': url,
                    'line number': lineNumber,
                    'column': column
                }, errorObj);
                return false;
            };
        }
        if (typeof window !== 'undefined' && !window.onunhandledrejection) {
            window.onunhandledrejection = function (event) {
                JL('onerrorLogger').fatalException({
                    'msg': 'unhandledrejection',
                    'errorMsg': event.reason ? event.reason.message : null
                }, event.reason);
            };
        }
    }())
}