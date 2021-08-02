var __trcCopyProps, __trcFromError, __trcClientTimestamp, __trcLog, __trcError, __trcDebug, __trcInfo, __trcWarn, __trcWarnUsingBeacon, __trcDOMWalker, __trcJSONify, __trcUnJSONify, __trcTrim, __trcGetElementsByClass, __trcToArray, __trcObjectCreate;
{
    const $___mock_f73d56c07eb0fd57 = {};
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
    })($___mock_f73d56c07eb0fd57);
    (function () {
        __trcCopyProps = $___var_cb114abba9f525e7;
        ({}.constructor.defineProperty(__trcCopyProps, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcCopyProps',
            writable: false
        }));
        __trcFromError = $___var_889c01352054a171;
        ({}.constructor.defineProperty(__trcFromError, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcFromError',
            writable: false
        }));
        __trcClientTimestamp = $___var_35fcb5658a217338;
        ({}.constructor.defineProperty(__trcClientTimestamp, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcClientTimestamp',
            writable: false
        }));
        __trcLog = $___var_14875485bc6198af;
        ({}.constructor.defineProperty(__trcLog, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcLog',
            writable: false
        }));
        __trcError = $___var_08f78d8b4a293fb2;
        ({}.constructor.defineProperty(__trcError, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcError',
            writable: false
        }));
        __trcDebug = $___var_f808de6d35e6b9b5;
        ({}.constructor.defineProperty(__trcDebug, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcDebug',
            writable: false
        }));
        __trcInfo = $___var_11164517accfed03;
        ({}.constructor.defineProperty(__trcInfo, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcInfo',
            writable: false
        }));
        __trcWarn = $___var_35aa07f0b688f492;
        ({}.constructor.defineProperty(__trcWarn, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcWarn',
            writable: false
        }));
        __trcWarnUsingBeacon = $___var_9be7321235cc6db8;
        ({}.constructor.defineProperty(__trcWarnUsingBeacon, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcWarnUsingBeacon',
            writable: false
        }));
        __trcDOMWalker = $___var_55bd1ec8eb255f38;
        ({}.constructor.defineProperty(__trcDOMWalker, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcDOMWalker',
            writable: false
        }));
        __trcJSONify = $___var_618ca93ab7fcc13d;
        ({}.constructor.defineProperty(__trcJSONify, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcJSONify',
            writable: false
        }));
        __trcUnJSONify = $___var_66f3603470c2ae8e;
        ({}.constructor.defineProperty(__trcUnJSONify, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcUnJSONify',
            writable: false
        }));
        __trcTrim = $___var_3e4535ecdafe0f07;
        ({}.constructor.defineProperty(__trcTrim, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcTrim',
            writable: false
        }));
        __trcGetElementsByClass = $___var_159d59740f85254a;
        ({}.constructor.defineProperty(__trcGetElementsByClass, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcGetElementsByClass',
            writable: false
        }));
        __trcToArray = $___var_fd62f6d8a318449d;
        ({}.constructor.defineProperty(__trcToArray, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcToArray',
            writable: false
        }));
        __trcObjectCreate = $___var_f117746a1c28df12;
        ({}.constructor.defineProperty(__trcObjectCreate, 'name', {
            configurable: true,
            enumerable: false,
            value: '__trcObjectCreate',
            writable: false
        }));
        function $___var_cb114abba9f525e7(e, t, i) {
            for (r in e)
                t[r] = e[r];
            if (i)
                for (var r in i)
                    t[r] = i[r];
            return t;
        }
        function $___var_889c01352054a171(e) {
            return TRC.Browser.ie && e.message ? e.message + '[' + e.number + ': ' + e.name + ']' : e.message ? e.message + (e.fileName ? e.fileName + ':' + e.lineNumber : '') : e;
        }
        function $___var_35fcb5658a217338() {
            var e = new Date(), t = e.getHours(), i = e.getMinutes(), r = e.getSeconds() + e.getMilliseconds() / 1000;
            return (t < 10 ? '0' : '') + t + ':' + (i < 10 ? '0' : '') + i + ':' + (r < 10 ? '0' : '') + r.toFixed(3);
        }
        function $___var_14875485bc6198af(e, t, i, r, n) {
            function o(e) {
                return e && e.stack && window.TRCImpl && TRC.util && TRC.util.isPercentEnabled(window.TRCImpl.global, 'rbox-error-stack-reporting-pct');
            }
            function a(e, t) {
                return Math.random() <= +t && (e <= window.trc_debug_level || document.cookie && document.cookie.search('taboola-debug') > 0);
            }
            if (TRC.pConsole('page', TRC.modDebug.getType(e), t, t), '0' == e && TRC.pConsole('errors', TRC.modDebug.getType(e), t, t), !(window.trc_debug_level < e)) {
                'object' == typeof window.console && console.log(t);
                try {
                    if ((isNaN(r) || null === r) && (r = 1), a(e, r)) {
                        var s = { pct: r };
                        if (o(i)) {
                            var l = TRCImpl && TRCImpl.global['rbox-err-stack-max-length'] || 250;
                            s.errStack = i.stack.substr(0, l);
                        }
                        TRC.modDebug.logMessageToServer(e, t, s, n);
                    }
                } catch (e) {
                }
            }
        }
        function $___var_08f78d8b4a293fb2(e, t, i) {
            __trcLog(0, e + (t ? ': ' + __trcFromError(t) : ''), t, i), t && t.stack && void 0 !== window.console && console.trace && console.trace();
        }
        function $___var_f808de6d35e6b9b5(e, t, i) {
            __trcLog(3, e, t, i);
        }
        function $___var_11164517accfed03(e, t, i) {
            __trcLog(2, e, t, i);
        }
        function $___var_35aa07f0b688f492(e, t, i) {
            __trcLog(1, e + (t ? '(' + t + ')' : ''), t, i);
        }
        function $___var_9be7321235cc6db8(e, t, i) {
            __trcLog(1, e + (t ? '(' + t + ')' : ''), t, i, !0);
        }
        function $___var_55bd1ec8eb255f38(e, t) {
            for (t(e), e = e.firstChild; e;)
                arguments.callee(e, t), e = e.nextSibling;
        }
        function $___var_618ca93ab7fcc13d(e) {
            return window.JSON.stringify(e);
        }
        function $___var_66f3603470c2ae8e(e) {
            try {
                return 'string' == typeof e ? TRC.util.jsonParseWithNative(e) : e;
            } catch (t) {
                throw new Error('JSON parse update error - invalid input! ' + e);
            }
        }
        function $___var_3e4535ecdafe0f07(e) {
            return e.replace(/^\s+|\s+$/g, '');
        }
        function $___var_159d59740f85254a(e, t, i) {
            var r = [], n = new RegExp('(^|\\s)' + e + '(\\s|$)'), o, a, s;
            for (i = i || document, t = t || '*', a = (o = i.getElementsByTagName(t)).length, s = 0; s < a; s++)
                n.test(o[s].className) && r.push(o[s]);
            return r;
        }
        function $___var_fd62f6d8a318449d(e, t) {
            var i;
            for (i in e)
                e.hasOwnProperty(i) && t.push([
                    i,
                    e[i]
                ]);
        }
        function $___var_f117746a1c28df12(e) {
            if ('function' == typeof Object.create)
                return Object.create(e);
            var t = function () {
            };
            if (e !== Object(e) && null !== e)
                throw TypeError('Argument must be an object, or null');
            t.prototype = e || {};
            var i = new t();
            return t.prototype = null, null === e && (i.__proto__ = null), i;
        }
        !function (e) {
            e.TRC = e.TRC || {}, e.TRC.sharedObjects = e.TRC.sharedObjects || {}, e.TRC.sharedObjects.loadedScripts = e.TRC.sharedObjects.loadedScripts || {}, e.TRC.sharedObjects.loadedPixels = e.TRC.sharedObjects.loadedPixels || {};
        }(window), ((e, t, i) => {
            const r = 'trc_modal_hidden', n = 'trc_modal_mask', o = 'trc_modal_dialog', a = 'trc_close_modal', s = t.createElement('div'), l = t.createElement('div');
            let c, d = '';
            function h() {
                p(l, r), p(s, r), i.dom.off(t, 'keyup', m), i.dom.off(t, 'click', g), i.dom.off(t.getElementById(a), 'click', g), i.dom.off(e, 'message', f);
            }
            function u() {
                p(l, n), p(l, r), p(s, o), p(s, r), x.appendChild(l), x.appendChild(s), t.body.appendChild(R), y(d), c = !0;
            }
            const p = function (e, t) {
                    if (e.classList)
                        return e.classList.add(t);
                    i.dom.removeClass(e, t), e.className += ` ${ t }`;
                }, m = e => {
                    const t = e.which || e.keyCode;
                    27 === t && h();
                }, g = e => {
                    const t = e.target || e.srcElement;
                    t !== l && t.id !== a || (i.dom.stopEvent(e), h());
                }, f = e => {
                    /http(s)?:\/\/www\.taboola\.com/.test(e.origin) && e.data && 1025 == +e.data && h();
                }, b = function (e, t = (() => {
                    return 'no';
                })()) {
                    const i = [];
                    return i.push(`<a id="${ a }" class="trc_modal_close">&times;</a>\n                <iframe class="trc_modal_frame" scrolling=${ t } frameborder=0 allowTransparency=true src="${ e }"></iframe>`), i.join('');
                }, C = function (e, t) {
                    for (; e.tagName.toUpperCase() !== t.toUpperCase();)
                        e = e.parentNode;
                    return e;
                }, T = function (r) {
                    const n = C(r.target || r.srcElement, 'A');
                    r && i.dom.stopEvent(r), c || u();
                    const o = n.getAttribute('tblEnablesScrolling');
                    s.innerHTML = b(n.href, o), i.dom.removeClass(l, 'trc_modal_hidden'), i.dom.removeClass(s, 'trc_modal_hidden'), i.dom.on(t, 'keyup', m), i.dom.on(t, 'click', g), i.dom.on(t.getElementById('trc_close_modal'), 'click', g), i.dom.on(e, 'message', f);
                }, v = function (e) {
                    const i = t.createElement('div');
                    return i.id = `tbl-aug-${ Math.floor(2147483648 * Math.random()).toString(36) }`, d = `#${ i.id }`, e && e.appendChild(i), i;
                }, y = function (e) {
                    TRC.dom.injectStyle(`${ e } .trc_modal_dialog { width: 660px; height: 550px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; padding: 12px; border: 2px solid #417cc3; position: fixed; z-index: 9999999; background: #f7f9fc; top: 50%; left: 50%; margin-top: -250px; margin-left: -330px; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; -ms-box-sizing: content-box; -o-box-sizing: content-box; box-sizing: content-box; -webkit-box-shadow: black 0 0 18px 0; -moz-box-shadow: black 0 0 18px 0; -ms-box-shadow: black 0 0 18px 0; -o-box-shadow: black 0 0 18px 0; box-shadow: black 0 0 18px 0; -webkit-border-radius: 10px; -moz-border-radius: 10px; -ms-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; }${ e } .trc_modal_mask { z-index: 9999998; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #000; opacity: 0.5; filter: alpha(opacity=50); }${ e } .trc_modal_close { font-family: sans-serif !important; width: 30px !important; height: 30px !important; font-size: 30px !important; font-weight: bold !important; line-height: 28px !important; color: #fff !important; text-shadow: 0 1px 0 #000; opacity: 0.9; filter: alpha(opacity=90); background: #417cc3; padding: 0; cursor: pointer; border: 0; -webkit-appearance: none; text-align: center; position: absolute !important; top: -13px; right: -13px; text-decoration: none !important; z-index: 9; -webkit-border-radius: 15px !important; -moz-border-radius: 15px !important; -ms-border-radius: 15px !important; -o-border-radius: 15px !important; border-radius: 15px !important; }${ e } .trc_modal_hidden { display: none !important; }${ e } .trc_modal_frame { width: 100% !important; height: 550px !important; }`, null);
                }, R = v(), _ = v(R), x = v(_);
            i.aboutUs = {
                open: T,
                close: h
            };
        })(window, document, TRC), function (e, t) {
            TRC.blocker = TRC.blocker || {
                states: {
                    ABP_DETECTION_DISABLED: -2,
                    ABP_NOT_DETECTED: 0,
                    ABP_DETECTED: 1
                },
                createBlockDetectionDiv: function (e) {
                    var i = t.createElement('div');
                    return i.className = e, i.style.fontSize = '12px', i.style.lineHeight = '1', i.appendChild(t.createTextNode('.')), t.documentElement.appendChild(i), i;
                },
                isBlockDetectedOnDiv: function (e) {
                    return e.offsetHeight ? (TRC.pConsole('page', 'warn', 'No AdBlockPlus detected on div with class: ' + e.className), !1) : (TRC.pConsole('page', 'warn', 'AdBlockPlus detected on div with class: ' + e.className), !0);
                },
                isBlockDetectedOnClassNames: function (e) {
                    var i, r = e.length, n;
                    for (i = 0; i < r; i++)
                        if (e[i]) {
                            n = this.createBlockDetectionDiv(e[i]);
                            try {
                                if (this.isBlockDetectedOnDiv(n))
                                    return !0;
                            } catch (e) {
                                TRC.pConsole('page', 'error', 'unable to inspect offsetHeight of div with class: ' + n.className);
                            } finally {
                                t.documentElement.removeChild(n);
                            }
                        }
                    return !1;
                },
                getBlockedState: function (e, t) {
                    return this.blockedState !== this.states.ABP_DETECTED || t ? (this.blockedState = e && this.isBlockDetectedOnClassNames(e) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED, this.blockedState) : this.blockedState;
                }
            };
        }(window, document), function () {
            TRC.amp = {};
            var e = TRC.amp, t, i;
            e.getRboxContainer = function () {
                return t || (t = document.getElementsByClassName('trc_rbox_container')[0]), t;
            }, e.getAMPContainer = function () {
                return i || (i = document.getElementById('c'));
            }, e.setAMPmodule = function (t) {
                t.manualVisibilityTrigger = !0, t.disableReadMore = !0, t.slider = !1;
                var i = null, r = this.sendAMPResize, n = this.sendAMPFeedResize, o = t.global['amp-neg-threshold'] || 5, a = t.global['amp-pos-threshold'] || 100, s = t.global['amp-debounce-time'] || 200, l = void 0 !== t.amp_disable_resize ? t.amp_disable_resize : t.global['amp-disable-resize'], c = 'function' == typeof t.global['amp-onrender'] ? t.global['amp-onrender'] : function () {
                        return !0;
                    };
                e.getAMPContainer().classList.add('tbl-amp-container'), TRC.eventDelegator.subscribe('onrender', function (t) {
                    var d = {
                        negative: o,
                        positive: a
                    };
                    if (!c(t) || l)
                        return !1;
                    null === i && (i = !(!t.container.placementData || !t.container.placementData.isFeedCard)), i ? (e.getAMPContainer().style.position = 'static', n()) : (r(d, TRC.lastVisibleRects ? TRC.lastVisibleRects : null), TRC.listen('visible::' + t.placement, TRC.util.debounce(r.trcBind(this, d), s, !1, this)));
                });
            }, e.sendAMPResize = function (t, i) {
                var r = i ? i.boundingClientRect.height : TRC.dom.getWindowHeight(), n = e.getRboxContainer().scrollHeight, o = r - n, a = o < 0 ? t.negative : t.positive;
                Math.abs(o) >= a && window.context.requestResize(void 0, n);
            }, e.sendAMPFeedResize = function () {
                window.context.requestResize(void 0, e.getAMPContainer().offsetHeight + 50), TRC.dispatch('ampFeedResize');
            };
        }(), function (e, t) {
            TRC.aspect = {
                before: function (e, t, i, r) {
                    var n = e[t];
                    e[t] = function () {
                        return r && (e[t] = n), i.apply(this, arguments), n.apply(this, arguments);
                    };
                },
                after: function (e, t, i, r) {
                    var n = e[t];
                    e[t] = function () {
                        r && (e[t] = n);
                        var o = n.apply(this, arguments);
                        return i.apply(this, arguments), o;
                    };
                }
            };
        }(window, document), (() => {
            const e = 'tbl-labels-arrow', t = 'video-title', i = 'FAST', r = 'MARGIN', n = 'uics', o = 'uicm';
            class a {
                constructor(e, t, i) {
                    this.trcManager = e.trc, this.container = t, this.blockClicksSource = a.getBlockClicksSource(this.trcManager.global, i), this.isBlockingFastClicks = !0, this.isStoryWidget = TRC.StoryWidget.shouldInitStoryWidget(e), this.blockMarginalClicksValue = this.getBlockMarginalClicksValue(i, o), this.fastClicksTimeoutInMilliseconds = this.getBlockFastClicksTimeoutInMilliseconds(i, n), TRC.dom.on(this.container, 'click', this.handleBlockClicks.trcBind(this)), this.observeItem();
                }
                getBlockMarginalClicksValue(e, t) {
                    const i = this.getClickValueByPriority(e, t);
                    return a.isValidClickValue(i) ? i : a.getDefaultMarginValue();
                }
                getBlockFastClicksTimeoutInMilliseconds(e, t) {
                    const i = this.getClickValueByPriority(e, t);
                    return a.isValidClickValue(i) ? 1000 * parseFloat(i) : a.getDefaultFastClickValue();
                }
                static getBlockClicksSource(e, t) {
                    return a.checkIsFraudEnabled(e) ? a.BLOCK_CLICK_SOURCE.fraud : a.checkIsDemandEnabled(t) ? a.BLOCK_CLICK_SOURCE.demand : null;
                }
                getClickValueByPriority(e, t) {
                    switch (this.blockClicksSource) {
                    case a.BLOCK_CLICK_SOURCE.fraud:
                        return this.trcManager.global[`unintentional-clicks-fraud-${ t }`];
                    case a.BLOCK_CLICK_SOURCE.demand:
                        return e[t];
                    default:
                        return this.trcManager.global[`unintentional-clicks-${ t }`];
                    }
                }
                static isBlockClicksEnabled(e, t) {
                    return !1 === a.isBlockClicksDisabled(e) && (a.checkIsFraudEnabled(e) || a.checkIsDemandEnabled(t));
                }
                static isBlockClicksDisabled(e) {
                    return TRC.util.isTrue(e['unintentional-clicks-disabled']);
                }
                static checkIsFraudEnabled(e) {
                    return TRC.util.isTrue(e['unintentional-clicks-fraud-enable']);
                }
                static checkIsDemandEnabled(e) {
                    return TRC.util.isTrue(e.uic);
                }
                sendBlockClickEvent(e) {
                    this.trcManager.sendEvent('supply-feature', {
                        d: JSON.stringify({
                            event_type: a.CLICK_BLOCKED_EVENT[e],
                            block_clicks_source: this.blockClicksSource
                        })
                    }, null);
                }
                handleBlockClicks(e) {
                    if (this.isBlockingFastClicks)
                        return a.preventClickBubbling(e), void this.sendBlockClickEvent(i);
                    this.isMarginalClick(e) && this.isBlockableClick(e) && (a.preventClickBubbling(e), this.sendBlockClickEvent(r));
                }
                isBlockableClick(i) {
                    return !(this.isStoryWidget && i.target.parentNode.className.indexOf(e) > -1) && !(i.target.className.indexOf(t) > -1);
                }
                isMarginalClick(e) {
                    const t = this.container.offsetWidth, i = this.container.offsetHeight, r = this.transformBlockMarginalClicksConfig(t, i), n = this.container.getBoundingClientRect(), o = e.clientX - n.left, a = e.clientY - n.top;
                    return a < r.top || o > t - r.right || o < r.left || a > i - r.bottom;
                }
                static preventClickBubbling(e) {
                    e.preventDefault(), e.stopPropagation();
                }
                transformBlockMarginalClicksConfig(e, t) {
                    return {
                        top: a.calculatePercentage(this.blockMarginalClicksValue, t),
                        right: a.calculatePercentage(this.blockMarginalClicksValue, e),
                        bottom: a.calculatePercentage(this.blockMarginalClicksValue, t),
                        left: a.calculatePercentage(this.blockMarginalClicksValue, e)
                    };
                }
                static calculatePercentage(e, t) {
                    return parseFloat(e) / 100 * t;
                }
                observeItem() {
                    TRC.intersections.observe({
                        targetElement: this.container,
                        threshold: 0,
                        onExit: () => {
                            return this.clearFastClickTimeout();
                        },
                        onEnter: () => {
                            return this.setFastClickTimeout();
                        }
                    });
                }
                setFastClickTimeout() {
                    this.clearFastClickTimeoutId(), this.setIsBlockingFastClicks(!0);
                    const e = TRC.Timeout.set(() => {
                        this.setIsBlockingFastClicks(!1), this.clearFastClickTimeoutId();
                    }, this.fastClicksTimeoutInMilliseconds);
                    this.timeoutId = e;
                }
                clearFastClickTimeout() {
                    this.setIsBlockingFastClicks(!0), this.timeoutId && this.clearFastClickTimeoutId();
                }
                clearFastClickTimeoutId() {
                    TRC.Timeout.clear(this.timeoutId), this.timeoutId = null;
                }
                setIsBlockingFastClicks(e) {
                    this.isBlockingFastClicks = e;
                }
                static isValidClickValue(e) {
                    return !isNaN(parseFloat(e));
                }
                static getDefaultMarginValue() {
                    return '0.5';
                }
                static getDefaultFastClickValue() {
                    return '3000';
                }
            }
            a.CLICK_BLOCKED_EVENT = {
                MARGIN: 'marginal_click_blocked',
                FAST: 'fast_click_blocked'
            }, a.BLOCK_CLICK_SOURCE = {
                fraud: 'fraud',
                demand: 'demand'
            }, TRC.BlockClicksManager = a;
        })(), function (e, t) {
            var i = function () {
                    this.dom = !!t.getElementById && 1, this.dom && (!t.importNode || (this.dom = 2), !t.normalizeDocument || (this.dom = 3));
                    var i = this.opera = !!e.opera && 9;
                    if (this.opera && (!navigator.geolocation || (this.opera = 10), !e.opera.version || (this.opera = parseFloat(e.opera.version()))), this.ie = navigator.userAgent.match(/Trident/) && /rv:11.0/i.test(navigator.userAgent) ? 11 : 'object' == typeof t.all && !i && ('CSS1Compat' != t.compatMode ? 6 : e.XMLHttpRequest ? Object.defineProperty ? 'object' != typeof DOMImplementation || 'function' != typeof DOMImplementation.prototype.createDocument ? 8 : e['msMatchMedia'] ? 10 : 9 : 7 : 6), this.webkit = !!e.openDatabase && !this.opera, this.chrome = !(!this.webkit || !e.chrome), this.safari = this.webkit && !this.chrome, this.safari && (!t.compareDocumentPosition || (this.safari = 4), !navigator['registerContentHandler'] || (this.safari = 5), !e['matchMedia'] || (this.safari = 6)), this.firefox = !!navigator.userAgent.match(/firefox/i), this.firefox) {
                        try {
                            'function' == typeof t.createElement('canvas').getContext && (this.firefox = 1.5);
                        } catch (e) {
                        }
                        'object' == typeof e['globalStorage'] && (this.firefox = 2), !t.elementFromPoint || (this.firefox = 3), !t.querySelector || (this.firefox = 3.5), !t.getElementsByTagName('head')[0]['mozMatchesSelector'] || (this.firefox = 3.6), !e.Uint8Array || (this.firefox = 4), !Function.prototype['isGenerator'] || (this.firefox = 5), !e['matchMedia'] || (this.firefox = 6), !e.FileReader || !e.FileReader.prototype.readAsArrayBuffer || (this.firefox = 7), !t.head || !t.head.insertAdjacentHTML || (this.firefox = 8);
                    }
                    for (var r = [
                                'firefox',
                                'chrome',
                                'safari',
                                'webkit',
                                'khtml',
                                'ie',
                                'opera'
                            ], n = 0; n < r.length; n++)
                        !function (e, t) {
                            e[t + 'Upto'] = function (e) {
                                return this[t] && ('number' != typeof this[t] || this[t] <= e);
                            }, e[t + 'Atleast'] = function (e) {
                                return this[t] && ('number' != typeof this[t] || this[t] >= e);
                            };
                        }(this, r[n]);
                    return this.compatibility = {
                        lineClamp: void 0 !== t.createElement('div').style['webkitLineClamp'],
                        cssTransforms: function () {
                            for (var e = t.createElement('div'), i = [
                                        'transformProperty',
                                        'WebkitTransform',
                                        'MozTransform',
                                        'OTransform',
                                        'msTransform'
                                    ], r = 0; r < i.length; r++)
                                if (void 0 !== e.style[i[r]])
                                    return !0;
                            return !1;
                        }(),
                        passiveEvents: function () {
                            var e = !1;
                            try {
                                window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                                    get: function () {
                                        e = !0;
                                    }
                                }));
                            } catch (e) {
                            }
                            return e;
                        }()
                    }, this;
                }, r = function () {
                    var e;
                    this.isTouchDevice = 'ontouchstart' in window, this.deviceType = (e = navigator.userAgent.match(/iPhone|iPod|iPad/i)) ? e[0] : 'other';
                }, n = {
                    isEnabled: function () {
                        return !!e.taboolaMobile;
                    }
                };
            TRC.Browser = new i(), TRC.Device = new r(), TRC.MobileSdk = n;
        }(window, document), (() => {
            class e {
                constructor(e, t, i) {
                    this.localStorage = e, this.cacheName = t, this.cacheTtl = i;
                }
                isOverTtl(e) {
                    const t = new Date().getTime();
                    return t - e > this.cacheTtl;
                }
                setCacheClean(e, t) {
                    const {
                        localStorage: i,
                        cacheName: r,
                        cacheTtl: n
                    } = this;
                    TRC.Timeout.set(() => {
                        TRC.tlf && console.time('in setCacheClean'), t.removeKey(e), i.setValue(r, __trcJSONify(t.getData())), TRC.tlf && console.timeEnd('in setCacheClean');
                    }, n);
                }
                static removeKey(e, t) {
                    return !!t.getValue(e) && (t.removeKey(e), !0);
                }
                cleanCache(e, t, i) {
                    const r = e || TRC.util.keys(t.getData());
                    let n;
                    for (let o = 0; o < r.length; o++)
                        n = r[o], this.isOverTtl(t.getValue(n).s) && i.removeKey(n);
                    this.localStorage.setValue(this.cacheName, __trcJSONify(t.getData()));
                }
                getCache(e) {
                    const t = this.localStorage.getValue(this.cacheName) || {};
                    try {
                        if (t)
                            return e.getDummyStorage(TRC.util.jsonParseWithNative(t));
                    } catch (t) {
                        return e.getDummyStorage();
                    }
                }
            }
            TRC.CacheUtils = e;
        })(), (() => {
            const e = 'allowed-categories-map';
            class t {
                constructor(t) {
                    const {
                            sourceCategory: i,
                            global: r
                        } = t.trc, {
                            publisherId: n,
                            dom: {addClass: o}
                        } = TRC, a = r[e];
                    let s = {};
                    if (this.text = '', this.isCategoryCard = !0, this.sourceCategory = i, o(t.container, 'tbl-category-card-enabled'), !i)
                        return void this.sendEvent('No Source Category');
                    a && (s = a[n] || a);
                    const l = s[i];
                    l ? (this.render = this.validateCategoryLogic(t), this.render && (o(t.container, 'tbl-category-card-rendered'), this.text = l.toUpperCase())) : this.sendEvent('No category translation');
                }
                sendEvent(e) {
                    TRCImpl.sendAbTestEvent('category-card', `Channel: ${ this.sourceCategory }, Result: ${ e }`);
                }
                validateCategoryLogic(e) {
                    const {
                        length: t = 0
                    } = e.recommendationList;
                    if (!t)
                        return !1;
                    for (let i = 0; i < t; i++) {
                        const t = e.recommendationList[i];
                        if (!t.category)
                            return this.sendEvent('No Category'), !1;
                        if (this.sourceCategory !== t.category)
                            return this.sendEvent(`fallback. item category is: ${ t.category }`), !1;
                    }
                    return !0;
                }
                static enableCategoryCard(e) {
                    return !!e.trc.getProperty(e.mode_name, 'enable-category-card', e.propertiesOverride);
                }
            }
            TRC.CategoryCard = t;
        })(), ((e, t, i) => {
            const r = (e = (() => {
                    return [];
                })(), t = (() => {
                    return {};
                })()) => {
                    h.isInitialized = !0, o(t), n(e), TRC.dom.injectStyle(`a.tbl-ccpa { font-weight: normal; font-size: 11px; Color: #999999; margin: 0 3px 0 0; text-decoration: none; font-family: Arial, Helvetica, sans-serif; float: right; } a.tbl-ccpa.tbl-ccpa-left { float: left; } a.tbl-ccpa.tbl-ccpa-right { float: right; }.logoDiv a.tbl-ccpa span { font-size: 11px; color: #999999; }div.tbl-feed-header.tbl-ccpa-container .tbl-ccpa { margin-top: 3px; }div.tbl-feed-header.tbl-ccpa-container div.tbl-feed-header-logo { display: inline-block; }.trc-widget-footer a.tbl-ccpa.tbl-cpa-pipe-before::before { content: '|'; margin-right: 2px; font-size: 11px; color: #999999; }.tbl-rtl .tb-ccpa-mobile { line-height: 11px; }.tbl-rtl .logoDiv.link-ccpa { display: inline-block; }.tbl-rtl div.tbl-feed-header .tbl-ccpa { margin-top: 0; }.tbl-rtl .trc-widget-footer a.tbl-ccpa { float: none; } .tbl-rtl .trc-widget-footer a.tbl-ccpa.tbl-cpa-pipe-before::before { content: ''; } .tbl-rtl .trc-widget-footer a.tbl-ccpa.tbl-cpa-pipe-before::after { content: '|'; margin-left: 2px; font-size: 11px; color: #999999; }`, null), d();
                }, n = e => {
                    let t = h.config && h.config.placement;
                    if (t)
                        return i.ccpa.placement = t, t;
                    for (let i = 0; i < e.length; i++) {
                        const r = e[i];
                        if ((t = r.dc || r.uuip || r.uip).toLowerCase().indexOf('below') > -1 && r.v.length > 0)
                            return h.placement = t, t;
                    }
                    h.placement = t;
                }, o = ({
                    markup: e = 'CCPA Notice',
                    href: t = 'https://ccparequest.taboola.com/',
                    enableScrolling: i = 'yes',
                    classList: r,
                    style: n,
                    inlineStyle: o = '',
                    location: a = 'beforeend',
                    renderOnce: s = !0,
                    placement: l = ''
                }) => {
                    const c = r ? [
                        ...r,
                        'tbl-ccpa'
                    ] : 'tbl-ccpa';
                    h.config = {
                        markup: e,
                        href: t,
                        enableScrolling: i,
                        classList: c,
                        style: n,
                        inlineStyle: o,
                        location: a,
                        renderOnce: s,
                        placement: l
                    };
                }, a = e => {
                    const {
                        config: t,
                        firstTime: i,
                        placement: r
                    } = h;
                    return t && !t.renderOnce || i && r === e;
                }, s = (e, t = (() => {
                    return {};
                })()) => {
                    i.ccpa.firstTime = !1;
                    let r = 'tbl-ccpa-container';
                    TRC.dom.isSmartPhone() && (r += ' tb-ccpa-mobile'), TRC.dom.addClass(e, r);
                    const n = TRC.util.merge({}, h.config, t);
                    TRC.PopupLink.create(e, n);
                }, l = (e, t, i) => {
                    if (h.shouldCreateCcpa(t)) {
                        const t = {};
                        let r = '';
                        'RIGHT' === i ? r = ' tbl-ccpa-left' : 'LEFT' === i && (r = ' tbl-ccpa-right'), t.classList = `${ h.config.classList }${ r }`, h.create(e, t);
                    }
                }, c = e => {
                    if (e.isFeedCard || !a(e.placement))
                        return;
                    const t = e.getWidgetFooter();
                    let i = '';
                    t.children.length > 0 && (i = ' tbl-cpa-pipe-before');
                    const r = {
                        markup: `<span>${ h.config.markup }</span>`,
                        classList: `${ h.config.classList } tbl-ccpa-on-widget${ i }`,
                        location: 'afterbegin',
                        wrapper: {
                            type: 'div',
                            className: 'logoDiv link-ccpa'
                        }
                    };
                    e.hasAdChoicesLogo && (r.children = '<span class="trc_logos_v_align">&nbsp;</span>'), h.create(t, r);
                }, d = function (e = (() => {
                    return 'taboola';
                })(), t = (() => {
                    return 'Rendered';
                })(), i = (() => {
                    return null;
                })()) {
                    if (TRC.dom.isInIframe()) {
                        const e = 'in-iframe';
                        i = i ? [
                            i,
                            e
                        ].join(', ') : e;
                    }
                    const r = {
                        event_type: 'ccpa',
                        event_state: t,
                        event_value: e,
                        event_msg: i
                    };
                    TRCImpl.sendEvent('supply-feature', { d: JSON.stringify(r) }, null);
                }, h = i.ccpa = {
                    placement: '',
                    isInitialized: !1,
                    firstTime: !0,
                    sendCcpaEvent: d,
                    create: s,
                    init: r,
                    shouldCreateCcpa: a,
                    renderOnWidgetFooter: c,
                    renderOnHeaderFeed: l
                };
        })(window, document, TRC), function () {
            var e = 0, t = 1, i = 2, r = 3, n = 5, o = { taboola_default: 'BOOx2jhOOx2mtAKABDENAqAAAAAYSAAA' }, a = { cmpStatus: r }, s = '', l = { getConsentData: [] }, c = { getConsentData: 1 };
            function d() {
                a.gdprApplies = !0, a.consentData = o.taboola_default, a.consentPreset = 'taboola_default';
            }
            function h(e, t, i) {
                return c[e] && l[e].push(i), 'tcf' === s ? f() : 'iab' === s ? p() : void 0;
            }
            function u(t) {
                t.cmpStatus = e, b(t);
            }
            function p() {
                return !!window.__cmp && (window.__cmp('getConsentData', null, u), !0);
            }
            function m(e, t) {
                if (t && ('tcloaded' === e.eventStatus || 'useractioncomplete' === e.eventStatus)) {
                    g(e), b(a);
                    try {
                        window.__tcfapi('removeEventListener', 2, function () {
                        }, e.listenerId);
                    } catch (e) {
                        __trcWarn('Error while calling __tcfapi:removeEventListener', e);
                    }
                }
            }
            function g(t) {
                a.cmpStatus = e, a.gdprApplies = t.gdprApplies, a.tcString = t.tcString, a.consentData = null;
            }
            function f() {
                try {
                    return window.__tcfapi('addEventListener', 2, m), !0;
                } catch (e) {
                    __trcWarn('Error while calling __tcfapi:addEventListener', e);
                }
            }
            function b(e) {
                a = TRC.util.merge(a, e), C();
            }
            function C() {
                var e = l['getConsentData'];
                if (!0 !== e.pushOverride) {
                    e.push = function (e) {
                        'function' == typeof e && e(a);
                    }, e.pushOverride = !0;
                    for (var t = 0; t < e.length; t++)
                        e[t](a);
                }
            }
            function T(e) {
                try {
                    window.__tcfapi('getTCData', 2, function (t, i) {
                        i && (g(t), a = TRC.util.merge(a, e));
                    });
                } catch (e) {
                    __trcWarn('Error while calling __tcfapi:getTCData', e);
                }
                b();
            }
            TRC.consent = TRC.consent || {}, TRC.consent.setPresets = function (e) {
                o = TRC.util.merge(o, e);
            }, TRC.consent.setConsent = function (t) {
                'tcf' === s ? T(t) : TRC.consent.hasCMP() ? (d(), t && (a.cmpStatus = t.consentData ? e : a.cmpStatus, a.consentPreset = t.consentData ? '' : a.consentPreset, (a = TRC.util.merge(a, t)).consentData = o[t.consentPreset] || a.consentData), b()) : __trcError('TRC.consent.setConsent:- no consent source was set');
            }, TRC.consent.getConsentStatus = function () {
                return a.cmpStatus;
            }, TRC.consent.hasCMP = function () {
                return !!s;
            }, TRC.consent.setConsentSource = function (e, i) {
                return d(), s = e.source.toLowerCase() || s, o = TRC.util.merge(o, e.presets), TRC.cmp = h, a.cmpStatus = t, i && (o = i), !0;
            }, TRC.consent.getAMPConsent = function (e) {
                if (window.context)
                    if (TRC.util.isEmptyString(window.context.initialConsentValue))
                        if ('function' == typeof window.context.getConsentState)
                            try {
                                window.context.getConsentState(function (t) {
                                    1 === t.consentState ? e('true', null) : 2 === t.consentState ? e('false', null) : e(null, null);
                                });
                            } catch (t) {
                                __trcError('Error while calling AMP getConsentState', t), e(null, null);
                            }
                        else
                            e(null, null);
                    else
                        /\d[YN-]{3}$/.test(window.context.initialConsentValue) ? (a.ccpaString = window.context.initialConsentValue, a.gdprApplies = null, a.consentData = null, a.tcString = null) : (a.tcString = window.context.initialConsentValue, a.gdprApplies = !0, a.consentData = null), a.cmpStatus = n, e(null, a);
                else
                    e(null, null);
            }, window._trcIsUTactive && (TRC.consent.setCurrentSource = function (e) {
                s = e, l = { getConsentData: [] }, a = { cmpStatus: r };
            });
        }(), (e => {
            TRC.CLSReporter = {
                listenStarted: !1,
                CLSEventsFilters: [],
                maxSelectors2Send: 100,
                CLSSelectorsEnabled: !1,
                CLSSelectorsMessage: '',
                CLSSelectorsFilter: 'selectors',
                generateQuerySelector(e) {
                    if (!e)
                        return null;
                    let t = e.tagName;
                    return e.id ? t += `#${ e.id }` : e.className && (t += `${ e.className }`), t;
                },
                getSelectorEventData(e) {
                    let t = '';
                    for (let i = 0; i < e.sources.length; i++) {
                        const r = e.sources[i], {node: n} = r;
                        if (n) {
                            const i = TRC.CLSReporter.generateQuerySelector(n);
                            i && (t += `selector='${ i }',val=${ e.value }|`);
                        }
                    }
                    return t;
                },
                push(e) {
                    e && e.prefixMessage && TRC.CLSReporter.reportFilteredCLS(e.prefixMessage, e.eventFilter);
                },
                addCLSEventFilter(e, t) {
                    t === TRC.CLSReporter.CLSSelectorsFilter ? TRC.CLSReporter.CLSSelectorsEnabled || (TRC.CLSReporter.CLSSelectorsEnabled = !0, TRC.CLSReporter.CLSSelectorsMessage = e) : TRC.CLSReporter.CLSEventsFilters.push({
                        prefixMessage: e,
                        eventFilter: t,
                        clsValue: 0
                    });
                },
                reportFilteredCLS(e, t) {
                    TRC.CLSReporter.addCLSEventFilter(e, t), TRC.CLSReporter.listenToCLSEventsAndReport();
                },
                listenToCLSEventsAndReport() {
                    if (!TRC.CLSReporter.listenStarted && TRC.performance) {
                        TRC.CLSReporter.listenStarted = !0;
                        let t = 0;
                        TRC.listen('onCls', e => {
                            TRC.CLSReporter.CLSEventsFilters.forEach(t => {
                                t.eventFilter && !t.eventFilter(e) || (t.clsValue += e.value);
                            }), TRC.CLSReporter.CLSSelectorsEnabled && TRC.CLSReporter.maxSelectors2Send > t++ && (TRC.CLSReporter.CLSSelectorsMessage += TRC.CLSReporter.getSelectorEventData(e));
                        }), e.addEventListener('beforeunload', TRC.CLSReporter.fireCLSBeaconOnUnload.bind(this));
                    }
                },
                fireCLSBeaconOnUnload() {
                    TRC.CLSReporter.CLSEventsFilters.forEach(e => {
                        __trcWarnUsingBeacon(`${ e.prefixMessage }:${ e.clsValue.toFixed(6) }`);
                    }), TRC.CLSReporter.CLSSelectorsEnabled && __trcWarnUsingBeacon(TRC.CLSReporter.CLSSelectorsMessage);
                },
                init() {
                    TRC.CLSEvents && TRC.CLSEvents.forEach(e => {
                        TRC.CLSReporter.push(e);
                    }), TRCImpl.global['cls-max-selectors'] && (TRC.CLSReporter.maxSelectors2Send = TRCImpl.global['cls-max-selectors']), TRCImpl.global['enable-cls-selectors'] && TRC.CLSReporter.push({
                        prefixMessage: 'accumulating cls selectors:',
                        eventFilter: TRC.CLSReporter.CLSSelectorsFilter
                    });
                }
            };
        })(window), TRC.CustomModulesManager = {
            registeredModules: {},
            getPath(e, t) {
                switch (e) {
                case void 0:
                case 'ui-innovation':
                    return `${ this.PATH.UI }/${ t }`;
                case 'demand-formats':
                    return `${ this.PATH.DEMAND }/${ t }`;
                default:
                    return e;
                }
            },
            setGlobalPaths() {
                const e = TRCImpl.global['cdn-taboola-path'] || 'cdn.taboola.com';
                this.setGlobal = !0, this.CDN = TRC.shiftDomain(e), this.PATH = {
                    UI: TRCImpl.global['ui-innovation-modules-path'] || 'ui-ab-tests',
                    DEMAND: 'demand-formats'
                };
            },
            getCustomModulesFromResponse(e) {
                if (!e || !e.trc)
                    return;
                const t = {
                    feedExtension: this.createModuleMap(e.trc.f, !0, 'drp'),
                    demandGenericAction: this.createModuleMap(e.trc.dcga, !1),
                    clientGenericActionPageLevel: this.createModuleMap(e.trc.cga, !1),
                    clientGenericActionPlacementLevel: this.createModuleMap(e.trc.vl, !0, 'cga')
                };
                this.loadModules(t);
            },
            createModuleMap: (e, t, i) => {
                return {
                    root: e,
                    loop: t,
                    key: i
                };
            },
            loadModules(e) {
                !this.setGlobal && this.setGlobalPaths();
                const t = Object.keys(e);
                t.forEach(t => {
                    const i = e[t];
                    i.root && (i.loop ? this.loadModulesFromChildren(i) : this.loadModulesFromRoot(i));
                });
            },
            loadModulesFromChildren(e) {
                Object.keys(e.root).forEach(t => {
                    const i = e.root[t];
                    i && i[e.key] && i[e.key].customModules && this.loadCustomModules(i[e.key].customModules, t);
                });
            },
            loadModulesFromRoot(e) {
                e.root && e.root.customModules && this.loadCustomModules(e.root.customModules);
            },
            loadCustomModules(e, t) {
                try {
                    const i = __trcUnJSONify(e);
                    Object.keys(i).forEach(e => {
                        this.loadModule(e, i[e], t);
                    });
                } catch (t) {
                    __trcError(`Error while trying to parse json custom module, error msg: ${ t } ,module data: ${ e }`);
                }
            },
            loadModule(e, t, i) {
                let r = this.registeredModules[e];
                const n = r && -1 === r.feedsOriginPlacementNames.indexOf(i);
                if (n && r.feedsOriginPlacementNames.push(i), r || !0 === t.disable)
                    return;
                r = this.registeredModules[e] = {
                    options: t,
                    moduleName: e,
                    feedsOriginPlacementNames: [i]
                };
                const o = this.getPath(t.path, e);
                if (this.shouldLoadResource(t.js) && !r.jsRequested) {
                    TRC.customHooks || (TRC.customHooks = {});
                    const i = t.js || e;
                    this.loadModuleResource(`${ o }/${ i }`, 'js', e, r), r.jsRequested = !0;
                }
                if (this.shouldLoadResource(t.css) && !r.cssRequested) {
                    const i = t.css || e;
                    this.loadModuleResource(`${ o }/${ i }`, 'css', e, r), r.cssRequested = !0;
                }
            },
            shouldLoadResource: e => {
                return void 0 === e || !TRC.util.isFalse(e);
            },
            runHook(e, t, i, ...r) {
                this.dispatchHook(e, t, i, r);
            },
            dispatchHook(e, t, i, r) {
                Object.keys(this.registeredModules).forEach(n => {
                    const o = this.registeredModules[n];
                    if (this.isRelevantType(t, o, i))
                        if (o.ready) {
                            const t = this.getModuleHook(o, e, i, ...r);
                            t && t();
                        } else
                            TRC.listen(`TRC.${ n }.ready`, () => {
                                const t = this.getModuleHook(o, e, i, ...r);
                                t && t();
                            });
                });
            },
            isRelevantType(e, t, i) {
                const {
                    uiModes: r,
                    placements: n
                } = t.options;
                return !e || (i instanceof TRC.Feed ? -1 !== t.feedsOriginPlacementNames.indexOf(i.mainContainerPlacement) && (!n || e && n && n.indexOf(e) > -1) : i instanceof TRC.implClasses.TRCRBox ? !r || e && r && r.indexOf(e) > -1 : void 0);
            },
            getModuleHook(e, t, i, ...r) {
                const n = TRC.customHooks[e.moduleName];
                return n && n.hooks && n.hooks[t] && n.hooks[t].trcBind(i, ...r, i);
            },
            loadModuleResource(e, t, i, r) {
                const n = `${ TRC.PROTOCOL }//${ this.CDN }/${ e }.${ t }`;
                TRC.net.loadScript(n, t, e => {
                    'error' === e.type ? __trcError(`Failed to load custom module resource ${ n }`) : (r[`${ t }Ready`] = !0, !1 !== r.options.js && !r.jsReady || !1 !== r.options.css && !r.cssReady || (TRC.dispatch(`TRC.${ i }.ready`), r.ready = !0));
                });
            }
        }, ((e, t) => {
            TRC.docVisibilityUtil = function () {
                let e = '', i = '';
                if (void 0 !== t.hidden ? (e = 'hidden', i = 'visibilitychange') : void 0 !== t.msHidden ? (e = 'msHidden', i = 'msvisibilitychange') : void 0 !== t.webkitHidden && (e = 'webkitHidden', i = 'webkitvisibilitychange'), !e)
                    return {
                        addEventListener: () => {
                        },
                        isVisible: () => {
                            return null;
                        }
                    };
                function r() {
                    return !t[e];
                }
                function n(e) {
                    t.addEventListener(i, () => {
                        e(r());
                    }, !1);
                }
                return {
                    addEventListener: n,
                    isVisible: r
                };
            }();
        })(window, document), TRC.lazyLoadingDependencies = {
            'distance-from-article': [{
                    fileName: 'article-detection',
                    objectName: 'ArticleDetection'
                }],
            'tfa-eid': [{
                    fileName: 'sha256',
                    objectName: 'sha256'
                }],
            'bid-detection': [{
                    fileName: 'distance-from-article',
                    objectName: 'DistanceFromArticle'
                }]
        }, TRC.ModuleLoader = {
            requestedModules: {},
            load(e, t, i, r, n) {
                if (n = void 0 === n ? window.TRCImpl && TRCImpl.global && TRCImpl.global['module-load-retry'] || 2 : n, t)
                    i();
                else if (this.requestedModules[e] && !r)
                    this.requestedModules[e].callbacks.push(i);
                else {
                    r || (this.requestedModules[e] = {
                        callbacks: [
                            this.logSuccessToPerformance.trcBind(this, e),
                            i
                        ]
                    }, TRC.performance && TRC.performance.mark(`moduleLazyLoad${ e }start`, null, '', e, 'moduleLazyLoadTime', TRC.PerfEvenType.START));
                    const o = this.toFingerPrintedName(e), a = TRC.lazyLoadingDependencies[e];
                    if (!a || a.length <= 0)
                        TRC.loadTaboolaScript(o, !0, this.requestedModules[e].callbacks, r => {
                            this.loadErrorCallback(r, n, e, t, i, o);
                        });
                    else {
                        let s = 0;
                        TRC.loadTaboolaScript(o, !0, t => {
                            this.invokeCallbackUponFullLoad(++s, a.length, e, t);
                        }, r => {
                            this.loadErrorCallback(r, n, e, t, i, o);
                        }), r || a.forEach(t => {
                            this.load(t.fileName, TRC[t.objectName], t => {
                                this.invokeCallbackUponFullLoad(++s, a.length, e, t);
                            });
                        });
                    }
                }
            },
            invokeCallbackUponFullLoad(e, t, i, r) {
                if (e < t + 1)
                    return;
                const n = this.chainCallbacks(this.requestedModules[i].callbacks);
                n(r);
            },
            logSuccessToPerformance(e) {
                TRC.performance && TRC.performance.mark(`moduleLazyLoad${ e }stop`, null, '', e, 'moduleLazyLoadTime', TRC.PerfEvenType.STOP);
            },
            toFingerPrintedName(e) {
                const t = `${ TRC.hasES6Support() ? 'es6' : 'es5' }.js`;
                return `${ e }.${ TRC.version }.${ t }`;
            },
            chainCallbacks: e => {
                return Array.isArray(e) ? t => {
                    e.forEach(e => {
                        return e(t);
                    });
                } : 'function' == typeof e ? e : () => {
                };
            },
            loadErrorCallback(e, t, i, r, n, o) {
                t > 0 ? TRC.ModuleLoader.load(i, r, n, !0, --t) : (this.logError(e, o), this.requestedModules[i] = null);
            },
            logError(e, t) {
                __trcError(`failed to load module ${ t }. Error is: ${ e.message }`, e);
            }
        }, (e => {
            const t = !!e.navigator.sendBeacon;
            TRC.hasNetworkAsyncSupport = () => {
                return t;
            }, TRC.sendPostAsyncCall = (i, r) => {
                return !!t && (e.navigator.sendBeacon(i, r), !0);
            };
        })(window), TRC.RBoxUsage = {
            logUsage(e, {
                file: t = '',
                method: i = '',
                position: r = '',
                skipCaching: n,
                extraData: o = {}
            } = (() => {
                return {};
            })()) {
                TRCImpl && TRCImpl.global && TRCImpl.global['disable-rbox-usage-logging'] || TRC.modDebug.logMessageToServer(4, e, {
                    file: t,
                    method: i,
                    position: r,
                    extraData: __trcJSONify(o)
                }, n);
            }
        }, TRC.unifiedPlacementsProductsUtil = {
            containersReset: (e, t) => {
                Object.keys(e).forEach(i => {
                    const r = e[i].mainContainerId, n = document.querySelectorAll(`[${ t }=${ r }]`);
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e], i = t.getAttribute(TRC.intersections.TARGET_ATTRIB);
                        e > 0 ? t.remove() : (t.className = t.origClassName, t.innerHTML = '', i && TRC.intersections.unobserveAll(i));
                    }
                });
            }
        }, (() => {
            class e {
                constructor() {
                    this.cardIndexOnPage = 0;
                }
                static renderCTAItem(e, t) {
                    TRC.ModuleLoader.load('call-to-action-component', TRC.CallToActionComponent, () => {
                        t.CallToActionComponent = new TRC.CallToActionComponent(e, t), t.CallToActionComponent.renderCTAButton();
                    });
                }
                shouldRenderCTAForItem(e, t) {
                    const i = t.video_data;
                    if (this.cardIndexOnPage++, TRC.Browser.ieUpto(10))
                        return;
                    if (!i['cta-text'])
                        return !1;
                    if (!i.isSyndicated)
                        return !1;
                    if (!t.rbox.isFeedCard)
                        return !1;
                    if ('start' === t.thumbnail_position)
                        return !1;
                    const {
                        detail_order: r,
                        link: n
                    } = t;
                    return (!r || !r.length || 'branding' !== r[0]) && (!!n && (this.sendAbTestEvent('rendered', i.itemIndex, e.placement), !0));
                }
                sendAbTestEvent(e, t, i) {
                    const r = {
                        module: 'cta-lazy-module',
                        event: e,
                        cardIndexOnPage: this.cardIndexOnPage,
                        index: t,
                        placement: i
                    };
                    window.TRCImpl.sendAbTestEvent('cta-lazy-module', JSON.stringify(r));
                }
            }
            TRC.CTAManager = e;
        })(), (() => {
            const e = {}, t = 'page view Id str';
            function i() {
                return window.crypto.subtle.generateKey({
                    name: 'AES-GCM',
                    length: 256
                }, !0, [
                    'encrypt',
                    'decrypt'
                ]);
            }
            function r(e, t, i) {
                return window.crypto.subtle.encrypt({
                    name: 'AES-GCM',
                    iv: i,
                    tagLength: 128
                }, t, e);
            }
            function n(e) {
                return [...new Uint8Array(e)].map(e => {
                    return e.toString(16).padStart(2, '0');
                }).join('');
            }
            const o = function () {
                let o = null;
                return window._trcIsUTactive && (TRC.cryptoKeysUtils = {
                    resetPageViewUniqueIdPromise() {
                        o = null;
                    }
                }), function () {
                    return e.pvuid ? Promise.resolve(e.pvuid) : o || (o = o || i().then(e => {
                        const i = new Uint8Array([
                                188,
                                185,
                                57,
                                146,
                                246,
                                194,
                                114,
                                34,
                                12,
                                80,
                                198,
                                77
                            ]), n = new TextEncoder(), o = n.encode(t);
                        return r(o, e, i);
                    }).then(t => {
                        const i = n(t);
                        return e.pvuid = i, e.pvuid;
                    }));
                };
            }();
            TRC.cryptoKeysManager = { getPageViewUniqueID: o }, window._trcIsUTactive && (TRC.cryptoKeysUtils.setPageViewUniqueID = function (t, i) {
                e[t] = i;
            }, TRC.cryptoKeysUtils.PVUID_STR_LEN = 32 + 2 * t.length);
        })(), TRC.css = TRC.css || {}, TRC.css.utils = (() => {
            let e = 0, t = 0, i = '';
            const r = 4040, n = ' style_split', o = '{class},', a = 'vidiscovery-note';
            function s(e, i) {
                const r = e.indexOf('@media') >= 0 ? `${ e.split('{')[0] }{` : '', n = (e = r ? e.substring(e.indexOf('{') + 1) : e).split('{'), o = n.length > 1 ? n[0].split('.') : e.split('.'), s = o.length;
                if (s < 2)
                    return r + e;
                const l = o[1];
                return __trcTrim(l) === a ? r + e : (i[__trcTrim(l)] ? (h(1), o[0] = `#${ i[__trcTrim(l)].cssDivsArr.join(' #') } ${ o[0] }`) : (h(t), o[0] = m(o.join('.')) + o[0]), n.length > 1 ? (n[0] = o.join('.'), r + n.join('{')) : r + o.join('.'));
            }
            function l(e, t) {
                const i = e.split(','), o = i.length;
                let a = '';
                if (p() > r && (a = n, __trcDebug(`Number of augmented css rules before Split : ${ p() }`), u(0)), null === t)
                    return c(o < 2 ? e : i, a);
                if (o < 2)
                    return a + s(e, t);
                for (let r = 0; r < o && (i[r] = s(i[r], t), !(i[r].indexOf('{') >= 0 && r < o - 1)); r++);
                return a + i.join(',');
            }
            function c(e, t) {
                const i = e.length;
                if ('string' == typeof e)
                    return h(1), t + e;
                for (let r = 0; r < i && (h(1), !(e[r].indexOf('{') >= 0 && r < i - 1)); r++);
                return t + e.join(',');
            }
            function d(e, t) {
                const i = e.split('}'), r = i.length;
                return r < 2 ? l(e, t) : (i.forEach(e => {
                    return l(e, t);
                }), i.join('}'));
            }
            function h(t) {
                e += t;
            }
            function u(t) {
                e = t;
            }
            function p() {
                return e;
            }
            function m(e) {
                return g(!1, !1).replace(new RegExp('{class}', 'gm'), e);
            }
            function g(e, r) {
                let n;
                if ('object' == typeof e) {
                    i = '', Object.keys(e).forEach(r => {
                        'string' == typeof r && '' !== r && (n = `#${ e[r].cssDivsArr.join(' #') } `, i = `${ i }${ n } ${ o }`), t++;
                    });
                    const a = `#${ r.iframe.join(' #') } ${ o }`, s = `#${ r.topDiv.join(' #') } ${ o }`, l = i.slice(0, i.length - o.length);
                    return i = `${ a }${ s }${ l }`;
                }
                return i;
            }
            function f(e, t, i) {
                const r = e.trc.vl, {modes: n} = i, o = n[TRC.inflate.COMMON];
                let a = '', s = '';
                return r && r.forEach((r, l) => {
                    const c = b(e, r, l, i);
                    c.forEach(e => {
                        TRC.injectedModes.indexOf(e) < 0 && n[e] && (a += TRC.inflate.inflateStyle(e, TRC.inflate.inflateObject(o[TRC.inflate.STYLE], n[e][TRC.inflate.STYLE])), t && n[e].mode_custom && (s += n[e].mode_custom), TRC.injectedModes.push(e));
                    });
                }), {
                    inflatedStyle: a,
                    customCss: s
                };
            }
            function b(e, t, i, r) {
                const {TRCRBox: n} = TRC.implClasses, o = r.preloadRequest[t.fpl || t.uuip || t.uip], a = n.prototype.calcModeName(r.addVariantProperties(null, e, i).trc, o ? o.mode : void 0), s = C(a, t, o, r);
                let l = s ? [s] : [];
                return t.multiWidget && t.multiWidget.children && (l = [
                    ...l,
                    ...T(t.multiWidget.children)
                ]), l;
            }
            function C(e, t, i, r) {
                return r.modes[e] ? e : r.modes[t.m] ? t.m : i && r.modes[i.mode] ? i.mode : void 0;
            }
            function T(e) {
                let t = [];
                return e.forEach(e => {
                    e.children ? t = [
                        ...t,
                        ...T(e.children)
                    ] : e.name && t.push(e.name);
                }), t;
            }
            return {
                bakeCss(e, t) {
                    const i = t.global['enable-custom-injection'];
                    TRC.injectedModes = TRC.injectedModes || [];
                    let r = TRC.injectedCustomStyle ? '' : t.defaults.style + t.global.style.rtl;
                    const n = f(e, i, t);
                    r += n.inflatedStyle, r += t.global.style.custom && !TRC.injectedCustomStyle ? t.global.style.custom : '', r += i ? n.customCss ? n.customCss : '' : t.global.style.mode_custom && !TRC.injectedCustomStyle ? t.global.style.mode_custom : '', r += TRC.injectedCustomStyle ? '' : TRC.dom.pullAggregatedStyle(), TRC.blocker.blockedState > 0 && t.global['switch-abp-class'] && (r = this.ABPswap(r)), r && (TRC.dom.injectStyle(r, null), TRC.injectedCustomStyle = !0);
                },
                setStyleTextIdPrefix(e, t, i) {
                    t && g(t, i);
                    const r = d(e, t);
                    return __trcDebug(`Number of augmented css rules left : ${ p() }`), u(0), r;
                },
                setStyleElements(e) {
                    const t = e.split(n), i = t.length;
                    i > 1 && TRC.pConsole('page', 'debug', 'splitting css', ''), t.forEach(e => {
                        return TRC.dom.injectStyle(e);
                    });
                },
                setStyleProperty(e, t, i, r) {
                    let {cssText: n} = e.style;
                    n += `;${ t }:${ i }${ r ? '!important' : '' }`, e.style.cssText = n;
                },
                generateCssRuleWithVendorPrefixes(e, t) {
                    const i = [
                            ' -webkit-',
                            '-moz-',
                            '-ms-',
                            '-o-'
                        ], r = '{property}: {value};', n = r.replace('{property}', e).replace('{value}', t), o = [];
                    return i.forEach(e => {
                        return o.push(e + n);
                    }), o.push(n), o.join(' ');
                },
                escape: (() => {
                    return window.CSS && window.CSS.escape || function (e) {
                        const t = function (e) {
                            this.message = e;
                        };
                        (t.prototype = new Error()).name = 'InvalidCharacterError';
                        const i = String(e), {length: r} = i;
                        let n = -1, o, a = '';
                        const s = i.charCodeAt(0);
                        for (; ++n < r;) {
                            if (0 === (o = i.charCodeAt(n)))
                                throw new t('Invalid character: the input contains U+0000.');
                            o >= 1 && o <= 31 || 127 === o || 0 === n && o >= 48 && o <= 57 || 1 === n && o >= 48 && o <= 57 && 45 === s ? a += `\\${ o.toString(16) } ` : a += o >= 128 || 45 === o || 95 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? i.charAt(n) : `\\${ i.charAt(n) }`;
                        }
                        return a;
                    };
                })()
            };
        })(window), TRC.css.Stack = function (e, t) {
            const {
                    stack: i,
                    idPrefix: r = 'tab_'
                } = e, n = {}, o = document.createDocumentFragment(), a = t ? document.head.appendChild(document.createElement('style')) : null;
            i.forEach(e => {
                return n[e.type] = TRC.dom.injectStyle(e.cssText || '', o, r + e.type);
            }), this.injectAllStyles = function () {
                a ? document.head.insertBefore(o, a) : document.head.appendChild(o), TRC.styleInjected = !0;
            }, this.addStyle = function (e, t, i) {
                const a = n[e], s = i ? document : o, l = r + e;
                t && (a ? a.styleSheet ? a.styleSheet.cssText += t : a.appendChild(document.createTextNode(t)) : n[e] = TRC.dom.injectStyle(t, s, l));
            };
        }, TRC.css.responsive = function () {
            function e(e, t) {
                return (99.99 - e * t) / e;
            }
            function t(t, i, r, n, o, a) {
                const s = e(t, r), l = 'rtl' === a ? 'right' : 'left', {utils: c} = TRC.css, d = `.${ i } .videoCube{width: ${ s }%; position: relative; float: ${ l }; margin: 0 0 ${ r }% 0; margin-${ l }: ${ r }%;}`;
                o ? n.push(c.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)) : n.push(d);
            }
            function i(e, t, i, r, n) {
                const o = 'rtl' === n ? 'right' : 'left', a = 'rtl' === n ? 'left' : 'right', s = `.${ t } .trc_rbox_div .videoCube {width: ${ 1 == +e.cells ? '100' : '48' }%;}`, l = `.${ t } .trc_header_left_column {width: ${ 1 == +e.cells ? '100' : '48' }%;}`, c = `.${ t } .trc_header_right_column {display: ${ 1 == +e.cells ? 'none' : 'inline' };}`, d = `.${ t } .trc_rbox_div div.videoCube:nth-of-type(-n+${ e.rows }){float:${ o };clear:${ o };}`, h = `.${ t } .trc_rbox_div div.videoCube:nth-of-type(n+${ e.rows + 1 }){float:none;clear:${ a };margin-${ o }:auto;}`;
                r ? (i.push(TRC.css.utils.setStyleTextIdPrefix(h, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(s, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(l, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(c, TRC.modesCache, TRC.lightBoxCssReset))) : (i.push(h), i.push(d), i.push(s), i.push(l), i.push(c));
            }
            function r(e, t, i, r, o, a, s) {
                const l = e.rows * e.cells, c = `.${ t } div.videoCube:nth-of-type(-n+${ l }){display:block;visibility:visible;}`, d = `.${ t } div.videoCube:nth-of-type(n+${ l + 1 }){display:none;visibility:hidden;}`;
                o ? (i.push(TRC.css.utils.setStyleTextIdPrefix(c, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset))) : (i.push(c), i.push(d)), a && n(e, t, i, s);
            }
            function n(e, t, i, r) {
                const n = e.cells, o = n / r * 100;
                i.push(`.${ t } .trc_rbox_div { width: ${ o }%; }`), i.push(`.${ t } .trc_rbox_outer { overflow-x: scroll; -webkit-overflow-scrolling: touch; }`);
            }
            function o(e, t, i, r, n) {
                const o = 'rtl' === i ? 'right' : 'left';
                return r ? `.${ t } .trc_rbox_div{margin-${ o }:-${ e.margin * e.cells / n }%;}` : `.${ t } .trc_rbox_outer{margin-${ o }:-${ e.margin }%;}`;
            }
            function a(e, i, r, n, a, s, l) {
                const c = 1 == +e.cells ? 'video-label-box' : 'trc-main-label', d = `.${ i } .trc_rbox_outer .videoCube .${ c } {height:auto;}`, h = `.${ i } .trc_rbox_outer .videoCube {margin-bottom:10px;}`, u = o(e, i, a, s, l), p = TRCImpl.global['disable-one-row-widget-auto-height'], m = (s || !p) && 1 == +e.rows;
                (1 == +e.cells || m) && (n ? (r.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(h, TRC.modesCache, TRC.lightBoxCssReset))) : (r.push(d), r.push(h))), n ? r.push(TRC.css.utils.setStyleTextIdPrefix(u, TRC.modesCache, TRC.lightBoxCssReset)) : r.push(u), r.push(`.${ i } .videoCube_aspect{padding-bottom:${ e.ratio }%; width: 100%;}`), t(e.cells, i, e.margin, r, n, a);
            }
            return {
                injectedStyles: {},
                rulesToCssText(e, t, n, o, s, l, c, d) {
                    const h = [];
                    let u, p, m;
                    for (u = 0; p = t[u]; u++)
                        (m = void 0 !== p.min || void 0 !== p.max) && h.push('@media screen and '), void 0 !== p.min && (h.push(`(min-width: ${ p.min }px) `), p.max && h.push('and ')), void 0 !== p.max && h.push(`(max-width: ${ p.max }px) `), m && h.push('{'), s ? i(p, e, h, o, l) : a(p, e, h, o, l, c, d), r(p, e, h, n, o, c, d), m && h.push('} ');
                    return h.join('');
                },
                getRulePercentageWidth: e
            };
        }(), (() => {
            const e = {
                en: {
                    now: 'Now',
                    today: 'Today',
                    yesterday: 'Yesterday',
                    minutes: '{0} minutes ago',
                    hour: '1 hour ago',
                    hours: '{0} hours ago',
                    days: '{0} days ago'
                },
                de: {
                    now: 'Jetzt',
                    today: 'Heute',
                    yesterday: 'Gestern',
                    minutes: 'Vor {0} minuten',
                    hour: 'Vor 1 stunde',
                    hours: 'Vor {0} stunden',
                    days: 'Vor {0} tagen'
                },
                ru: {
                    now: 'Теперь',
                    today: 'cегодня',
                    yesterday: 'вчера',
                    minutes: '{0} минут назад',
                    'minutes-above5': '{0} минуты назад',
                    hour: '1 час назад',
                    hours: '{0} часа назад',
                    'hours-above5': '{0} часов назад',
                    days: '{0} дня назад',
                    'days-above5': '{0} дней назад'
                },
                fr: {
                    now: 'A l`instant',
                    today: 'Aujourd`hui',
                    yesterday: 'Hier',
                    minutes: 'Il y a {0} minutes',
                    hour: 'Il y a 1 heure',
                    hours: 'Il y a {0} heures',
                    days: 'Il y a {0} journées'
                },
                es: {
                    now: 'Ahora',
                    today: 'Hoy',
                    yesterday: 'Ayer',
                    minutes: 'Hace {0} minutos',
                    hour: 'Hace 1 hora',
                    hours: 'Hace {0} horas',
                    days: 'Hace {0} dias'
                },
                it: {
                    now: 'Adesso',
                    today: 'Oggi',
                    yesterday: 'Leri',
                    minutes: '{0} minuti fa',
                    hour: '1 ora fa',
                    hours: '{0} ore fa',
                    days: '{0} giorni fa'
                },
                th: {
                    now: 'เดี๋ยวนี้',
                    today: 'วันนี้',
                    yesterday: 'เมื่อวาน',
                    minutes: `{0} นาทีที่แล้ว`,
                    hour: '1 ชั่วโมงที่แล้ว',
                    hours: `{0} ชั่วโมงที่แล้ว`,
                    days: `{0} วันที่แล้ว`
                },
                hi: {
                    now: 'अभी',
                    today: 'आज',
                    yesterday: 'कल',
                    minutes: `{0} मिनिट पहले`,
                    hour: '1 तासापूर्वी',
                    hours: '{0} तासांपूर्वी',
                    days: `{0} दिन पहले`
                },
                'pt-br': {
                    now: 'Agora',
                    today: 'Hoje',
                    yesterday: 'Ontem',
                    minutes: '{0} minutos atrás',
                    hour: '1 hora atrás',
                    hours: '{0} horas atrás',
                    days: `{0} dias atrás`
                },
                ms: {
                    now: 'Sekarang',
                    today: 'Hari ini',
                    yesterday: 'Semalam',
                    minutes: '{0} minit yang lalu',
                    hour: '1 jam yang lalu',
                    hours: '{0} jam yang lalu',
                    days: `{0} yang lalu`
                },
                jp: {
                    now: '今',
                    today: '今日',
                    yesterday: '昨日',
                    minutes: `{0} 分前`,
                    hour: '1 時間前',
                    hours: `{0} 時間前`,
                    days: `{0}日前`
                },
                vi: {
                    now: 'Mới cập nhật',
                    today: 'Hôm nay',
                    yesterday: 'Một ngày trước',
                    minutes: `{0} phút trước`,
                    hour: '1 giờ trước',
                    hours: `{0} giờ trước`,
                    days: `{0} ngày trước`
                },
                tr: {
                    now: 'Şimdi',
                    today: 'Bugün',
                    yesterday: 'Dün',
                    minutes: `{0} dakika önce`,
                    hour: '1 saat önce',
                    hours: `{0} saat önce`,
                    days: `{0} gün önce`
                },
                ko: {
                    now: '지금',
                    today: '오늘',
                    yesterday: '어제',
                    minutes: `{0} 분전`,
                    hour: '1 시간전',
                    hours: `{0} 시간전`,
                    days: `{0} 일 전`
                },
                bn: {
                    now: 'এখন',
                    today: 'আজ',
                    yesterday: 'গতকাল',
                    minutes: `{0} মিনিট আগে`,
                    hour: '1 ঘন্টা আগে',
                    hours: `{0} ঘন্টা আগে`,
                    days: `{0} দিন আগে`
                },
                'zh-TW': {
                    now: '現在',
                    today: '今天',
                    yesterday: '昨天',
                    minutes: `{0} 分鐘前`,
                    hour: '1小時前',
                    hours: `{0} 小時前`,
                    days: `{0}天前`
                },
                mr: {
                    now: 'आता',
                    today: 'आज',
                    yesterday: 'उद्या',
                    minutes: '{0} मिनिटांपूर्वी',
                    hour: '1 तासापूर्वी',
                    hours: '{0} तासांपूर्वी',
                    days: `{0} दिवसांपूर्वी`
                }
            };
            TRC._translationQueue = TRC._translationQueue || [], TRC._translationQueue.push({ 'time-ago': e });
            class t {
                static setTimeAgoCustomLanguage() {
                    __trcWarn('TRCRbox.dateFormatDays - custom language is depreciated');
                }
                static dateFormatTimeAgo(i, r, n) {
                    let o;
                    if (!i || 0 === parseInt(i, 10) || isNaN(i))
                        return __trcWarn(`TRCRbox.dateFormatDays - published_date cannot be parsed, it is ${ i }`), '';
                    o = new Date(1000 * parseInt(i, 10));
                    const a = 'time-ago', s = TRC.translationManager.getAll(a) || e.en, l = TRC.translationManager.getLabel, c = new Date(), d = Date.now() - o.getTime();
                    try {
                        if (d < 30 * t.minute)
                            return l({
                                feature: a,
                                label: 'now'
                            });
                        if (d < t.hour) {
                            const e = Math.floor(d / t.minute);
                            return l({
                                feature: a,
                                label: 'minutes',
                                data: [e]
                            });
                        }
                        if (d < 7 * t.hour) {
                            const e = Math.floor(d / t.hour);
                            return 1 === e ? l({
                                feature: a,
                                label: 'hour'
                            }) : !s['days-above5'] || e < 5 ? l({
                                feature: a,
                                label: 'hours',
                                data: [e]
                            }) : l({
                                feature: a,
                                label: 'hours-above5',
                                data: [e]
                            });
                        }
                        if (d < 24 * t.hour && c.getDate() === o.getDate())
                            return l({
                                feature: a,
                                label: 'today'
                            });
                        if (TRC.util.isTrue(TRCImpl.global['timeago-string-dates']))
                            return n.formatData('published-date', i);
                        if (d < 48 * t.hour)
                            return l({
                                feature: a,
                                label: 'yesterday'
                            });
                        const e = Math.floor(d / t.day);
                        return !s['days-above5'] || e < 5 ? l({
                            feature: a,
                            label: 'days',
                            data: [e]
                        }) : l({
                            feature: a,
                            label: 'days-above5',
                            data: [e]
                        });
                    } catch (e) {
                        return __trcError(`TRCRbox.dateFormatDays - error in calculating time ago. this might be due to bad date or custom lang not properly init. date: ${ i } lang: ${ r }`), '';
                    }
                }
                static dateFormatISO(e) {
                    const t = new Date(1000 * parseInt(e, 10)), i = t.getFullYear();
                    let r = t.getMonth() + 1, n = t.getDate();
                    return n < 10 && (n = `0${ n }`), r < 10 && (r = `0${ r }`), `${ i }-${ r }-${ n }`;
                }
                static dateFormatAmerican(e) {
                    const t = new Date(1000 * parseInt(e, 10)), i = t.getFullYear(), r = t.getMonth() + 1, n = t.getDate();
                    return `${ r }/${ n }/${ i }`;
                }
                static dateFormatEuropean(e) {
                    const t = new Date(1000 * parseInt(e, 10)), i = t.getFullYear(), r = t.getMonth() + 1, n = t.getDate();
                    return `${ n }/${ r }/${ i }`;
                }
            }
            t.millisecond = 1, t.second = 1000 * t.millisecond, t.minute = 60 * t.second, t.hour = 60 * t.minute, t.day = 24 * t.hour, TRC.DateUtils = t;
        })(), TRC.modDebug = function (e, t) {
            var i = 2, r, n = (o = {}, {
                    setMessageCache: function (e) {
                        o[e] ? o[e] += 1 : o[e] = 1;
                    },
                    getMessageCount: function (e) {
                        return o[e] ? o[e] : 0;
                    }
                }), o;
            function a(e) {
                switch (e) {
                case 0:
                    return 'error';
                case 0.5:
                    return 'perf';
                case 1:
                    return 'warn';
                case 2:
                    return 'info';
                case 3:
                    return 'debug';
                case 4:
                    return 'usage';
                default:
                    return;
                }
            }
            return r = {
                logMessageToServer: function (t, r, o, a, s) {
                    if (n.setMessageCache(r), n.getMessageCount(r) <= i || a) {
                        var l = e.TRCImpl && TRCImpl.domain ? TRCImpl.domain : 'trc.taboola.com', c = e.TRCImpl ? TRCImpl['normalize-log-param']('publisher', TRC.publisherId) : TRC.publisherId, d = __trcClientTimestamp(), h = TRC.newDebugLogger.logMsg.bind(TRC.newDebugLogger);
                        TRCImpl.trcEventRoute && TRCImpl.eventTypesToRoute.indexOf('debug') > -1 ? (h(TRCImpl.trcEventRoute, t, r, d, c, o, s), TRCImpl.enableTrcEventRouteExperiment && h(l, t, r, d, c, o, s)) : h(l, t, r, d, c, o, s);
                    }
                },
                getType: a
            };
        }(window, document), (() => {
            const e = '-delta', t = (i, r) => {
                    if (i.children)
                        i.children.forEach(e => {
                            t(e, r);
                        });
                    else if (i.name && !n(i.name)) {
                        const t = i.name + e;
                        r.modes[t] ? i.name = t : r.modes[i.name] && __trcWarn(`Could not resolve Multi-Widget delta mode name ${ t }`);
                    }
                }, i = (t, i) => {
                    const r = t.m + e;
                    n(t.m) || (i.modes[r] ? t.m = r : i.modes[t.m] && __trcWarn(`Could not resolve Feed / Added Widget delta mode name ${ r }`));
                }, r = (t, i) => {
                    const r = i.preloadRequest[t.uip];
                    if (r) {
                        if (n(r.mode))
                            return;
                        const t = r.mode + e;
                        i.modes[t] ? r.mode = r.mode_name = t : i.modes[r.mode] && __trcWarn(`Could not resolve Widget delta mode name ${ t }`);
                    } else
                        __trcWarn(`Delta mode replace: placement ${ t.uip } is missing from preloadRequest`);
                }, n = t => {
                    return new RegExp(`${ e }$`).test(t);
                };
            TRC.deltaModeAdapter = {
                switchModeNamesIfInDeltaTest(e, n) {
                    n && n.trc && n.trc.vl && n.trc.vl.length && n.trc.vl.forEach(n => {
                        TRC.util.isTrue(n.dlt) && (n.multiWidget ? t(n.multiWidget, e) : n.m ? i(n, e) : r(n, e));
                    });
                }
            };
        })(), function (e, t) {
            var i = [], r = null, n = !1, o, a, s;
            function l(e) {
                try {
                    if (r && (TRC.Browser['ieUpto'](10) ? t.detachEvent('onreadystatechange', r) : (t.removeEventListener('DOMContentLoaded', arguments.callee, !1), TRC.Interval.clear(r))), TRC.dom.isReady)
                        return;
                    TRC.dom.isReady = !0, TRC.dom.onReady = function (e) {
                        e();
                    };
                    for (var n = 0; n < i.length; n++)
                        i[n]();
                } catch (e) {
                    __trcError('Error in DOMReady processing', e);
                }
            }
            function c() {
                return e.pageXOffset || t.body.scrollLeft;
            }
            TRC.dom = {
                injectedStyles: [],
                aggregatedStyles: '',
                isReady: !1,
                onReady: function (e, t) {
                    t ? TRC.Timeout.set(e, 10) : i.push(e);
                },
                init: function () {
                    if (!n)
                        if (n = !0, t.readyState && /loaded|complete/.test(t.readyState))
                            l(!0);
                        else {
                            if (TRC.Browser['ieUpto'](10)) {
                                var i = t.createElement('div');
                                !function () {
                                    try {
                                        i.doScroll('left');
                                    } catch (e) {
                                        return void (i.to = TRC.Timeout.set(arguments.callee, 10));
                                    }
                                    l();
                                }(), t.attachEvent('onreadystatechange', r = function () {
                                    /loaded|complete/.test(t.readyState) && (TRC.Timeout.clear(i.to), l());
                                });
                            } else {
                                if (/interactive/.test(t.readyState))
                                    return void l(!0);
                                t.addEventListener('DOMContentLoaded', l, !1), r = TRC.Interval.set(function () {
                                    /loaded|complete|interactive/.test(t.readyState) && l();
                                }, 10);
                            }
                            var o = e.onload;
                            e.onload = function () {
                                if (l(), o)
                                    try {
                                        o();
                                    } catch (e) {
                                    }
                            };
                        }
                },
                on: e.addEventListener ? function (e, t, i) {
                    var r;
                    'touchstart' !== t && 'touchmove' !== t || !TRC.Browser.compatibility.passiveEvents || (r = { passive: !0 }), e.addEventListener(t, i, r);
                } : e.attachEvent ? function (e, t, i) {
                    e.attachEvent('on' + t, i);
                } : void (el['on' + sType] = fn),
                off: e.removeEventListener ? function (e, t, i) {
                    e.removeEventListener(t, i, !1);
                } : e.detachEvent ? function (e, t, i) {
                    e.detachEvent('on' + t, i);
                } : void (el['on' + sType] = fn),
                getText: function (e) {
                    return e.textContent || e.innerText || e.innerHTML;
                },
                lineHeight: function (e) {
                    var t;
                    return e.computedClientHeight || (t = e.style.display, e.style.display = 'inline-block', e.computedClientHeight = parseFloat(getComputedStyle(e).height), e.style.display = t), e.computedClientHeight;
                },
                isAncestor: function (e, t, i) {
                    for (t = i ? t : t.parentNode; t && t !== e && 9 != t.nodeType;)
                        t = t.parentNode;
                    return e === t;
                },
                pullAggregatedStyle: function () {
                    var e = this.aggregatedStyles;
                    return this.aggregatedStyles = '', e;
                },
                aggregateStyles: function (e) {
                    TRC.styleInjected ? this.injectStyle(e) : this.aggregatedStyles += e;
                },
                injectStyle: function (e, i, r) {
                    var n = document.createElement('style'), i = i || t;
                    return n.type = 'text/css', r && (n.id = r), i.head ? i.head.appendChild(n) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), this.injectStyleOverflowFix(e), TRC.styleInjected = !0, this.injectedStyles.push(n), n;
                },
                injectStyleOverflowFix: function (e) {
                    if (TRC.Browser.ie && 31 == document.styleSheets.length) {
                        var i = document.getElementById('trc_rbox_css_loaded');
                        if (null == i && ((i = document.createElement('div')).id = 'trc_rbox_css_loaded', t.body.appendChild(i)), 'hidden' != document.trcGetCurrentStyle(i, 'overflow')) {
                            var r = e.split('}'), n = null;
                            try {
                                for (var o = 0; o < document.styleSheets.length; o++) {
                                    var a = document.styleSheets[o];
                                    if (r.length + a.rules.length <= 4096) {
                                        n = a;
                                        break;
                                    }
                                }
                                null != n && (n.cssText += e);
                            } catch (e) {
                                __trcError('Error in injectStyleOverflowFix processing', e);
                            }
                        }
                    }
                },
                removeAllInjectedStyleSheets: function () {
                    for (var e, t = 0; t < this.injectedStyles.length; t++)
                        (e = this.injectedStyles[t]).parentNode && e.parentNode.removeChild(e);
                    this.injectedStyles = [], this.aggregatedStyles = '', TRC.styleInjected = !1, TRC.css.responsive.injectedStyles = [];
                },
                swapElements: function (e, t, i) {
                    return i && TRC.dom.purgeEventHandlers(e), e && e.parentNode && e.parentNode.replaceChild(t, e), t;
                },
                iterateOnNode: function (e, t) {
                    for (t(e), e = e.firstChild; e;)
                        arguments.callee(e, t), e = e.nextSibling;
                },
                purgeEventHandlers: function (e) {
                    try {
                        TRC.dom.iterateOnNode(e, function (e) {
                            for (var t in e)
                                'function' == typeof e[t] && (e[t] = null);
                        });
                    } catch (e) {
                        __trcError('TRC.dom.purgeEventHandlers : ', e.message);
                    }
                },
                clearInnerElements: function (e) {
                    for (var t; t = e.firstChild;)
                        this.purgeEventHandlers(t), e.removeChild(t);
                },
                stopEvent: function (e) {
                    return e.cancelBubble = !0, e.returnValue = !1, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1;
                },
                addClass: function (e, t) {
                    e && (e.className += ' ' + t + ' ');
                },
                removeClass: function (e, t) {
                    var i;
                    if (e) {
                        if (e.classList)
                            return e.classList.remove(t);
                        i = new RegExp('s*' + t, 'g'), e.className = e.className.replace(i, '');
                    }
                },
                containsClass: function (e, t) {
                    return e && e.className.split(' ').indexOf(t) > -1;
                },
                detectAnimationEvent: function (e, t) {
                    var i = 'animation' + t, r = {
                            animation: 'animation' + t,
                            WebkitAnimation: 'webkitAnimation' + t.charAt(0).toUpperCase() + t.slice(1),
                            OAnimation: 'oanimation' + t,
                            MozAnimation: 'animation' + t,
                            MSAnimation: 'MSAnimation' + t
                        };
                    return Object.keys(r).some(function (t) {
                        if (void 0 !== e.style[t])
                            return i = r[t], !0;
                    }), i;
                },
                createHTMLElement: function (e, t) {
                    var i;
                    return i = document.createElement(e), t && Object.keys(t).length && Object.keys(t).forEach(function (e) {
                        i[e] = t[e];
                    }), i;
                },
                elementMatchesSelector: function (e, t) {
                    var i, r;
                    return [
                        'matches',
                        'msMatchesSelector',
                        'oMatchesSelector',
                        'mozMatchesSelector',
                        'webkitMatchesSelector'
                    ].some(function (t) {
                        return 'function' == typeof e[t] && (r = t), e[t];
                    }), r ? e[r](t) : null;
                },
                closest: function (e, t) {
                    if (TRC.util.isNativeFunction(e.closest))
                        return e.closest(t);
                    for (; !this.elementMatchesSelector(e, t);)
                        if (!(e = e.parentElement))
                            return null;
                    return e;
                },
                getWindowWidth: function () {
                    return window.innerWidth ? this.getWindowWidth = function () {
                        return window.innerWidth;
                    } : 0 != document.documentElement.clientWidth ? this.getWindowWidth = function () {
                        return document.documentElement.clientWidth;
                    } : this.getWindowWidth = function () {
                        return document.body.clientWidth;
                    }, this.getWindowWidth();
                },
                getWindowHeight: function () {
                    return window.innerHeight ? this.getWindowHeight = function () {
                        return window.innerHeight;
                    } : 0 != document.documentElement.clientHeight ? this.getWindowHeight = function () {
                        return document.documentElement.clientHeight;
                    } : this.getWindowHeight = function () {
                        return document.body.clientHeight;
                    }, this.getWindowHeight();
                },
                getDocumentWidth: function () {
                    return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth));
                },
                getDocumentHeight: function () {
                    return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight));
                },
                getScreenDensity: function () {
                    var e = window.devicePixelRatio && window.devicePixelRatio.toFixed(3);
                    return e || (e = -1), e;
                },
                getPageVerticalScroll: function () {
                    return e.pageYOffset || t.body.scrollTop;
                },
                getScrollTop: function (t) {
                    return t === e ? this.getPageVerticalScroll() || document.documentElement.scrollTop : t.scrollTop;
                },
                getViewportVerticalRange: function () {
                    var e = this.getPageVerticalScroll(), t;
                    return {
                        min: e,
                        max: e + this.getWindowHeight()
                    };
                },
                getViewportHorizontalRange: function () {
                    var e = c(), t;
                    return {
                        min: e,
                        max: e + this.getWindowWidth()
                    };
                },
                getElementRect: function (e) {
                    return e.getBoundingClientRect();
                },
                isInIframe: function (t) {
                    try {
                        return e.top !== e.self;
                    } catch (e) {
                        return 'boolean' == typeof t && t;
                    }
                },
                createAugmentingContainers: function (e, t) {
                    for (var i = [], r = null, n, o = 0; o < e; o++)
                        r = n = this.createAugmentingContainer(r), i.push(n);
                    return t && i[e - 1].appendChild(t), i;
                },
                createAugmentingContainer: function (e) {
                    var i = t.createElement('div');
                    return i.id = 'tbl-aug-' + Math.floor(2147483648 * Math.random()).toString(36), e && e.appendChild(i), i;
                },
                generateAugmentationPrefix: function (e) {
                    for (var t = '', i = 0; i < e.length; i++)
                        t += '#' + e[i].id + ' ';
                    return t;
                },
                isHighDensity: (s = window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3, function () {
                    return s;
                }),
                isSmartPhone: (a = window.matchMedia && window.matchMedia(' only screen and (min-device-width : 320px) and (max-device-width : 480px)').matches || /(iPhone|iPod)/g.test(navigator.userAgent), function () {
                    return a;
                }),
                isTablet: (o = window.matchMedia && window.matchMedia(' only screen and (min-device-width : 768px) and (max-device-width : 1024px)').matches || /(iPhone|iPod)/g.test(navigator.userAgent), function () {
                    return o;
                }),
                isDesktop: function () {
                    return !(this.isTablet() || this.isSmartPhone());
                },
                getOuterWidth: function (e) {
                    var t, i, r;
                    return e.getBoundingClientRect().width + parseFloat(getComputedStyle(e).marginLeft) + parseFloat(getComputedStyle(e).marginRight);
                },
                isHtmlContent: function (e) {
                    return /(?:%3C|[<>&])/.test(e);
                },
                setContentToElement: function (e, t) {
                    TRC.dom.isHtmlContent(t) ? e.innerHTML = t : e.innerText = t;
                }
            };
        }(window, document), (() => {
            const e = {
                ID: 'id',
                TITLE: 'title',
                THUMBNAIL: 'thumb'
            };
            class t {
                constructor(e, t) {
                    this.trcManager = e, this.parentContainerSelector = t.parentContainerSelector, this.additionalLogDataBuilder = t.additionalLogDataBuilder, this.initReportedItemsMap(), this.trcManager.sendAbTestEvent('DEDUP_DEBUG', 'true'), TRC.modDebug.logMessageToServer(1, 'Duplicated items monitoring enabled', {
                        pcs: this.parentContainerSelector,
                        vi: TRC.pageManager.getPageData()
                    });
                }
                initReportedItemsMap() {
                    this.reportedItems = {}, Object.keys(e).forEach(t => {
                        const i = e[t];
                        this.reportedItems[i] = [];
                    });
                }
                checkForDuplicatedItems() {
                    const t = [].slice.call(document.querySelectorAll(`${ this.parentContainerSelector } .videoCube`));
                    this.checkAndNotifyMetaDataDuplication(t, e.ID) || (this.checkAndNotifyMetaDataDuplication(t, e.TITLE), this.checkAndNotifyMetaDataDuplication(t, e.THUMBNAIL));
                }
                checkAndNotifyMetaDataDuplication(e, i) {
                    const r = `data-item-${ i }`, n = e.map(e => {
                            return e.getAttribute(r);
                        }), o = e.filter(e => {
                            return t.isItemMetaDataFoundMoreThanOnce(e, n, r);
                        });
                    if (o.length)
                        return o.forEach(e => {
                            return this.notifyItemMetaDataDuplication(e, r, i);
                        }), !0;
                }
                static isItemMetaDataFoundMoreThanOnce(e, t, i) {
                    const r = e.getAttribute(i);
                    return t.indexOf(r) !== t.lastIndexOf(r);
                }
                notifyItemMetaDataDuplication(e, t, i) {
                    if (-1 !== this.reportedItems[i].indexOf(e))
                        return;
                    const r = `DUP_${ i.toUpperCase() }`, n = e.getAttribute('data-item-id'), o = e.getAttribute(t), a = {
                            mdt: i,
                            md: o,
                            ii: n,
                            pcs: this.parentContainerSelector,
                            vi: TRC.pageManager.getPageData()
                        };
                    this.trcManager.sendAbTestEvent(r, n), 'function' == typeof this.additionalLogDataBuilder && __trcCopyProps(this.additionalLogDataBuilder(e), a), TRC.modDebug.logMessageToServer(1, 'Duplicated item served', a, !0), this.reportedItems[i].push(e);
                }
            }
            TRC.DuplicatedItemsMonitor = t;
        })(), function (e, t) {
            'use strict';
            var i = {}, r = e.TRC, n;
            function o(e, t) {
                e.innerHTML = i._tokenizeSingle(r.dom.getText(e), t);
            }
            function a(e, t) {
                if (e) {
                    var i = n(function e(t) {
                            return t.className.search('title') >= 0;
                        }, e, 'span'), r = n(function e(t) {
                            return t.className.search('description') >= 0;
                        }, e, 'span');
                    t.call(this, e, i, r);
                }
            }
            function s(e) {
                return function (t) {
                    for (var i in t) {
                        var r;
                        if (t.hasOwnProperty(i))
                            t[i].boxes.forEach(function t(i) {
                                a(i.labelsBox, e), a(i.preLabelsBox, e);
                            });
                    }
                };
            }
            r.Ellipsis = i, i.doEllipsis = function (e) {
                n = n || r.implClasses.TRCRBox.prototype.findElement, r.ellipsisPerf && console.timeStamp('Taboola new ellipsis'), r.performance && r.performance.mark('7.2.1', null, 'Ellipsis', 'all', 'SmartEllipsis', r.PerfEvenType.START), i.measure(e), i.renderEllipsis(e), r.performance && r.performance.mark('7.2.9', null, 'Ellipsis', 'all', 'SmartEllipsis', r.PerfEvenType.STOP);
            }, i.tokenize = function (e, t) {
                return t = t in i._tokenizeStrategies ? t : 'word', s(function (e, r, n) {
                    e.trcEllipsisTokenized && delete e.trcEllipsisTokenized;
                    var a = i._tokenizeStrategies[t];
                    r && o(r, a), n && o(n, a), e.trcEllipsisTokenized = !0;
                })(e);
            }, i.verifyTokenized = function (e) {
                var t = !0;
                return s(function (e) {
                    t = t && e.trcEllipsisTokenized;
                })(e), t;
            }, i.measure = s(function (e, t, r) {
                var n = t && i._measureSingleElementSizes(t), o = r && i._measureSingleElementSizes(r);
                e.trcEllipsisPositions = {
                    title: n,
                    description: o
                };
            }), i.renderEllipsis = s(function (e, t, r) {
                var n = e.trcEllipsisPositions;
                if (!n || t && !n.title || r && !n.description)
                    __trcDebug('Calling renderEllipsis without measuring first. Skipping');
                else
                    try {
                        t && i._repaintSingleEllipsis(t, n.title), r && i._repaintSingleEllipsis(r, n.description);
                    } catch (e) {
                        __trcDebug(e.message + '. Skipping');
                    }
            }), i._tokenizeStrategies = {
                word: function (e) {
                    return {
                        spaces: !0,
                        tokens: e.split(/\s+/)
                    };
                },
                letter: function (e) {
                    return {
                        spaces: !1,
                        tokens: e.match(/&[\w#]+;|./g)
                    };
                }
            }, i._tokenizeSingle = function (e, t) {
                var i = t.call(this, e);
                return r.util.map(i.tokens, function (e) {
                    return ' ' === e ? e : '<ins>' + e + '</ins>';
                }).join(i.spaces ? ' ' : '');
            }, i._measureSingleElementSizes = function (e) {
                if (!e || !e.offsetHeight)
                    return null;
                if (!e.firstChild || 'INS' != e.firstChild.tagName)
                    return __trcDebug('Attempted to call measure on element before tokenize. Skipping');
                var t = n(function e(t) {
                    return t.className.search('lastLineEllipsis') >= 0;
                }, e, 'ins');
                if (t) {
                    var i = e.getElementsByTagName('ins');
                    if (t.className.replace(/[\t\r\n\f]/g, ' ').indexOf('tblHideAllButFirst') >= 0)
                        for (var o = 0; o < i.length; o++) {
                            var a;
                            (a = i[o]).style.display = '';
                        }
                    t.parentNode.removeChild(t);
                }
                for (var i = e.getElementsByTagName('ins'), s = r.dom.lineHeight(i[0]), l = Math.floor(parseFloat(getComputedStyle(e).height) / s) * s, c = l - s, d = e.offsetWidth, h = i[0].offsetWidth, u = [], p, m, o = 0; o < i.length; o++) {
                    var a = i[o];
                    void 0 === p && a.offsetTop >= c && (p = i[o]), void 0 !== p && u.push(r.dom.getText(a)), !m && a.offsetTop >= l && (m = i[o - 1]);
                }
                return {
                    lastLineStartsAt: p,
                    lastVisibleWord: m,
                    singleLineContent: u,
                    elementWidth: d,
                    firstWordWidth: h
                };
            }, i._repaintSingleEllipsis = function (e, n) {
                if (n.lastVisibleWord) {
                    var o = t.createElement('ins');
                    r.dom.addClass(o, 'lastLineEllipsis');
                    var a = e.tokenizeStrategy || 'word', s = i._tokenizeStrategies[a]('').spaces;
                    if (o.appendChild(document.createTextNode(n.singleLineContent.join(s ? ' ' : ''))), e.insertBefore(o, n.lastLineStartsAt), 'word' === a && n.firstWordWidth >= n.elementWidth)
                        for (var l = e.getElementsByTagName('ins'), c = 0; c < l.length; c++) {
                            var d = l[c];
                            -1 == d.className.replace(/[\t\r\n\f]/g, ' ').indexOf('lastLineEllipsis') ? d.style.display = 'none' : d.className += ' tblHideAllButFirst';
                        }
                }
            };
        }(window, document), TRC.eventDelegator = function (e, t) {
            var i = [], r = {}, n;
            function o(e, t) {
                var r;
                i[e] && (a(r = i[e]['_all'], t || ''), t && i[e][t.container.id] && a(r = i[e][t.container.id], t));
            }
            function a(e, t) {
                if (e) {
                    var i, r = e.length;
                    for (i = 0; i < r; i++)
                        try {
                            'function' == typeof e[i] && setTimeout(function (e, t) {
                                return function () {
                                    e(t);
                                };
                            }(e[i], t), 0);
                        } catch (e) {
                            __trcError('executeHandlers', e);
                        }
                }
            }
            function s(e, t) {
                var i;
                if (t)
                    for (i in t)
                        try {
                            'function' == typeof e && setTimeout(function (e, t) {
                                return function () {
                                    e(t);
                                };
                            }(e, t[i]), 0);
                        } catch (e) {
                            __trcError('executeHandlers', e);
                        }
                else
                    setTimeout(e, 0);
            }
            function l(e) {
                i[e] = [], i[e]['_all'] = [];
            }
            function c(e, t) {
                i[e][t] = [];
            }
            var d = {
                subscribe: function (e, t, n) {
                    i[e] || l(e), n ? (i[e][n] || c(e, n), i[e][n].push(t), r[e] && r[e][n] && s(t, { mode: r[e][n] })) : (i[e]['_all'].push(t), r[e] && s(t, r[e]));
                },
                dispatch: function (e, t) {
                    r[e] = r[e] || {}, t ? r[e][t.container.id] = t : r[e]['_all'] = {}, o(e, t || null);
                },
                resetEvents: function () {
                    r = {};
                }
            };
            if (e._trcIsUTactive && (d.processDelegatorsStack = o, d.executeHandlers = a, d.executePreviousEvents = s, d.delegatorsStack = i, d.eventsStack = r), TRC.subscriptionRegister)
                for (; TRC.subscriptionRegister.length;)
                    n = TRC.subscriptionRegister.shift(), d.subscribe(n.event, n.handler, n.container);
            return d;
        }(window, document), function (e, t) {
            function i(e) {
                return { detail: e };
            }
            function r(e) {
                return 'api::' + e;
            }
            function n(e, t) {
                TRC.dispatch(r(e), i(t));
            }
            function o(e, t) {
                var i = TRC.TRCParser, r;
                return e = e || {}, r = {
                    mode: i.parseModeName(e),
                    placement: i.parsePlacementName(e),
                    baseMode: i.parseBaseModeName(e),
                    variant: i.parseTestVariant(e),
                    itemCount: i.getItemCount(e)
                }, t && (r.container = t.container, r.items = t.apiData), r;
            }
            TRC.EventsAPI = {
                dispatchClick: function (e, t) {
                    var i = TRC.TRCParser, r;
                    e = e || {}, r = new TRC.ItemParser(e), t = t || {}, n('click', {
                        slot: r.getSlot(),
                        id: r.getId(),
                        type: r.getType(),
                        title: r.getTitle(),
                        url: r.getUrl(),
                        linkTarget: r.getLinkTarget(),
                        mode: i.parseModeName(t),
                        placement: i.parsePlacementName(t),
                        baseMode: i.parseBaseModeName(t),
                        variant: i.parseTestVariant(t),
                        itemCount: i.getItemCount(t)
                    });
                },
                dispatchVisible: function (e, t) {
                    var i;
                    n('visible', o(e, t));
                },
                dispatchRender: function (e, t) {
                    var i;
                    n('render', o(e, t));
                },
                dispatchNoContent: function (e, t, i) {
                    var r = { reason: e };
                    t && (r.placement = t), r.isFeedCard = i || !1, n('nocontent', r);
                },
                listen: function (e, t) {
                    TRC.listen(r(e), t, !0);
                },
                dispatchStoriesLoaded: function () {
                    n('storiesLoaded');
                },
                dispatchStoriesCloseVerticalUi: function () {
                    n('closedVerticalUI');
                },
                dispatchStoriesSwipeVerticalUi: function (e) {
                    n('swipeVerticalUI', e);
                },
                readmore: function (e, t) {
                    var i = TRC.TRCParser;
                    t = t || {}, n('readmore.' + e, {
                        mode: i.parseModeName(t),
                        placement: i.parsePlacementName(t),
                        variant: i.parseTestVariant(t)
                    });
                }
            };
        }(window, document), function (e, t) {
            var i, r, n = {}, o = 0;
            function a(e) {
                void 0 === n[e] && (n[e] = []);
            }
            function s(e, t) {
                a(e), n[e] = n[e].filter(function (e) {
                    return t !== e.id;
                });
            }
            if (TRC.listen = function (e, t, i) {
                    if ('object' == typeof e && e.length)
                        return e.forEach(function (e) {
                            TRC.listen(e, t);
                        }), null;
                    a(e);
                    var r = {
                        id: o++,
                        handler: t,
                        eventName: e,
                        sync: i,
                        remove: function () {
                            s(this.eventName, this.id);
                        }
                    };
                    return n[e].push(r), r;
                }, TRC.dispatch = function (e, t) {
                    a(e);
                    var o = i(e, t);
                    n[e].forEach(function (e) {
                        if (e.sync)
                            try {
                                e.handler.call(this, o);
                            } catch (e) {
                            }
                        else
                            r(function () {
                                e.handler.call(this, o);
                            }.trcBind(this));
                    }.trcBind(this));
                }, TRC.getEventsMap = function () {
                    return n;
                }, t.addEventListener && t.dispatchEvent)
                return t.addEventListener('trcFakeEvents', function (e) {
                    e.cx();
                }, !1), i = function (e, i) {
                    var r = t.createEvent('Event');
                    return r.initEvent(e, !1, !1), '[object Array]' === Object.prototype.toString.call(i) ? r.data = i : 'object' == typeof i ? __trcCopyProps(i, r) : r.data = i, r;
                }, void (r = function (e) {
                    var r = i('trcFakeEvents');
                    r.cx = e, t.dispatchEvent(r);
                });
            t.documentElement.attachEvent('onpropertychange', function (e) {
                'trcFakeEvents' == e.propertyName && e.cx();
            }), i = function (e, i) {
                var r;
                return i && i.generator && 'ceo' === i.generator ? (i.type = e, i) : ((r = t.createEventObject()).generator = 'ceo', r.type = e, '[object Array]' === Object.prototype.toString.call(i) ? r.data = i : 'object' == typeof i ? __trcCopyProps(i, r) : r.data = i, r);
            }, r = function (e) {
                var r = i('trcFakeEvents');
                r.cx = e, r.propertyName = 'trcFakeEvents', t.documentElement.fireEvent('onpropertychange', r);
            };
        }(window, document), function (e) {
            var t = TRC.ExpandAnimationManager = function (t) {
                TRC.RBoxUsage.logUsage('ExpandAnimationManager'), this.rbox = t, this.container = t.container, this.trcContainer = this.container._trc_container, TRC.css.utils.setStyleElements(this.createCSS()), this.trcContainer.className += ' trc_expandable', this.throttledExpandScrollHandler = this.scrollHandler.trcBind(this).trcThrottle(10), TRC.dom.on(e, 'scroll', this.throttledExpandScrollHandler);
            };
            t.prototype.scrollHandler = function () {
                this.rbox.isInViewPort(this.container, 0) ? this.trcContainer.wasOutOfViewPort && (this.trcContainer.className += ' trc_show', TRC.dom.off(window, 'scroll', this.throttledExpandScrollHandler)) : this.trcContainer.wasOutOfViewPort = !0;
            }, t.prototype.createCSS = function () {
                for (var e = [], t = '#' + TRC.css.utils.escape(this.container.id), i = this.rbox.trc.getProperty(this.rbox.mode_name, 'expand-animation-duration'), r = this.rbox.trc.getProperty(this.rbox.mode_name, 'expand-animation-max-height'), n = [
                            t + ' .trc_rbox_container.trc_expandable {' + TRC.css.utils.generateCssRuleWithVendorPrefixes('transition-duration', i + 'ms') + '}',
                            t + ' .trc_rbox_container.trc_expandable.trc_show { max-height: ' + r + 'px;}'
                        ], o = 0; o < n.length; o++)
                    this.rbox.trc.cssReset ? e.push(TRC.css.utils.setStyleTextIdPrefix(n[o], TRC.modesCache, TRC.lightBoxCssReset)) : e.push(n[o]);
                return e.join('');
            };
        }(window), (() => {
            const e = {
                collapsedHeight: 490,
                expandButtonCaption: 'Show More',
                collapseButtonCaption: 'Show Less',
                fadeBackgroundColor: '#fff',
                fadeHeight: 60,
                buttonTop: 28,
                buttonBottom: 10,
                fadeGradient: 40
            };
            class t {
                constructor(t, i, r) {
                    this.externalCardMaxRetries = t.global['external-card-max-retries'] || 5, this.externalCardRetryInterval = t.global['external-card-retry-interval'] || 1000, r = __trcCopyProps(e, {}, r), this.init(i, r);
                }
                init(e, i, r = (() => {
                    return 0;
                })()) {
                    if (this.boxElement = document.getElementById(e), this.boxElement) {
                        if (this.boxElement.getBoundingClientRect().height < i.collapsedHeight)
                            return void (r < this.externalCardMaxRetries ? (r++, setTimeout(this.init.trcBind(this, e, i, r), this.externalCardRetryInterval)) : TRC.dom.addClass(this.boxElement, 'tbl-expandable-box-inactive'));
                        TRC.dom.addClass(this.boxElement, 'tbl-collapsed'), TRC.dom.injectStyle(t.getExpandableBoxCSS(e, i)), this.boxElement.appendChild(this.createExpandButton(i)), this.boxElement.appendChild(this.createCollapseButton(i)), this.listenToBoxClick();
                    } else
                        __trcError(`Cannot find expandable box element by ID: ${ e }`);
                }
                createExpandButton(e) {
                    return this.createButton(e.expandButtonCaption, this.handleExpandClick, 'tbl-expand-btn-container');
                }
                createCollapseButton(e) {
                    return this.createButton(e.collapseButtonCaption, this.handleCollapseClick, 'tbl-collapse-btn-container');
                }
                createButton(e, t, i) {
                    const r = document.createElement('div'), n = document.createElement('a');
                    return n.className += 'tbl-expandable-box-btn', n.textContent ? n.textContent = e : n.innerText = e, TRC.dom.on(n, 'click', t.trcBind(this)), r.className = `tbl-expandable-box-btn-container ${ i }`, r.appendChild(n), r;
                }
                addExpandClasses() {
                    TRC.dom.addClass(this.boxElement, 'tbl-expanded'), TRC.dom.removeClass(this.boxElement, 'tbl-collapsed'), this.isExpanded = !0;
                }
                addCollapseClasses() {
                    TRC.dom.addClass(this.boxElement, 'tbl-collapsed'), TRC.dom.removeClass(this.boxElement, 'tbl-expanded'), this.isExpanded = !1;
                }
                handleExpandClick(e) {
                    e.preventDefault(), e.stopPropagation(), this.isExpanded || this.addExpandClasses();
                }
                handleCollapseClick(e) {
                    e.preventDefault(), e.stopPropagation(), this.addCollapseClasses(), this.boxElement.scrollIntoView && this.boxElement.scrollIntoView();
                }
                static getExpandableBoxCSS(e, t) {
                    return `#${ e }.tbl-expanded { max-height: inherit; } #${ e }.tbl-expanded .tbl-collapse-btn-container { display: block; padding: 0 5px; }#${ e }.tbl-collapsed { max-height: ${ t.collapsedHeight }px; overflow: hidden; position: relative; } #${ e }.tbl-collapsed .tbl-expand-btn-container { display: block; }#${ e } .tbl-expandable-box-btn { margin: ${ t.buttonTop }px 0 ${ t.buttonBottom }px !important; display: inline-block !important; line-height: 38px !important; text-align: center !important; white-space: nowrap !important; vertical-align: middle !important; cursor: pointer !important; -webkit-touch-action: manipulation; -moz-touch-action: manipulation; -ms-touch-action: manipulation; -o-touch-action: manipulation; touch-action: manipulation; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none; color: #326891 !important; background: #edf2f5 none !important; border: 1px solid #93abbc !important; height: 38px !important; width: 100% !important; font-size: 15px !important; font-weight: bold !important; border-radius: 3px !important; font-family: sans-serif !important; } #${ e } .tbl-expandable-box-btn:hover { background-color: #bed0dc !important; border-color: #7399b3 !important; color: #326891 !important; }#${ e } .tbl-expandable-box-btn-container { display: none; text-align: center; }#${ e } .tbl-expand-btn-container { position: absolute; z-index: 100; left: 0; right: 0; bottom: 0; padding: ${ t.fadeHeight }px 10px 0px 10px; box-sizing: border-box; background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${ t.fadeBackgroundColor } ${ t.fadeGradient }%, ${ t.fadeBackgroundColor } 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(50%, ${ t.fadeBackgroundColor }), color-stop(100%, ${ t.fadeBackgroundColor })); background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${ t.fadeBackgroundColor } ${ t.fadeGradient }%, ${ t.fadeBackgroundColor } 100%); background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${ t.fadeBackgroundColor } ${ t.fadeGradient }%, ${ t.fadeBackgroundColor } 100%); background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${ t.fadeBackgroundColor } ${ t.fadeGradient }%, ${ t.fadeBackgroundColor } 100%); background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${ t.fadeBackgroundColor } ${ t.fadeGradient }%, ${ t.fadeBackgroundColor } 100%); }`;
                }
                listenToBoxClick() {
                    TRC.listen('expandableBoxChildIFrameClick', e => {
                        e.container !== this.boxElement || this.isExpanded || this.addExpandClasses();
                    });
                }
            }
            TRC.ExpandableBox = t;
        })(), TRC.ExternalContainerAppender = {
            MAX_RETRIES: 50,
            TIMEOUT: 100,
            move(e, t, i = (() => {
                return 0;
            })()) {
                if (document.querySelector)
                    if (t) {
                        let r, n = !1;
                        try {
                            r = document.querySelector(e);
                        } catch (t) {
                            __trcWarn(`Exception while trying to find external container with selector ${ e }: ${ t }`), n = !0;
                        }
                        r ? (t.appendChild(r), TRC.dispatch('trcContentReady', { container: t })) : i < this.MAX_RETRIES && !n ? TRC.Timeout.set(this.move.trcBind(this, e, t, i + 1), this.TIMEOUT) : __trcWarn(`Could not find external container with selector ${ e } to move`);
                    } else
                        __trcError(`Could not find target container for external container move`);
            }
        }, function () {
            let e = {};
            const t = {}, i = {
                    isPlacementApprovedToRender: () => {
                        return !0;
                    },
                    hideFallbackElements() {
                        return this;
                    },
                    reportTimeToRender() {
                    }
                };
            class r {
                constructor(e, {
                    enable: t,
                    elements_to_hide: i
                } = (() => {
                    return {};
                })(), {should_render: r} = (() => {
                    return {};
                })()) {
                    this.originalPlacementName = e, this.isApprovedToRender = null, this.triedToHideFallbackElements = !1, this.enable = t, this.elements_to_hide = i, this.should_render = r;
                }
                setIsApprovedToRender() {
                    if (null === this.isApprovedToRender && this.enable && 'function' == typeof this.should_render)
                        try {
                            this.should_render() ? this.isApprovedToRender = !0 : (this.isApprovedToRender = !1, l.report({
                                type: 'ERROR',
                                reason: 'notAllowedToRender',
                                originalPlacementName: this.originalPlacementName
                            }));
                        } catch (e) {
                            this.isApprovedToRender = !1, __trcError('Fallback Error in should_render', e);
                        }
                }
                isPlacementApprovedToRender() {
                    return this.setIsApprovedToRender(), this.isApprovedToRender;
                }
                hideFallbackElements({placement: e}) {
                    return this.isApprovedToRender && !this.triedToHideFallbackElements && (this.triedToHideFallbackElements = !0, this.hideElements(e)), this;
                }
                reportTimeToRender({
                    isCache: e,
                    placement: t,
                    recommendationList: i
                }) {
                    l.report({
                        type: 'placementData',
                        timeToRendered: performance.now && performance.now(),
                        originalPlacementName: this.originalPlacementName,
                        placementName: t,
                        items: i ? i.length : null,
                        isCache: !!e
                    });
                }
                hideElements(e) {
                    Array.isArray(this.elements_to_hide) && this.elements_to_hide.forEach(t => {
                        const i = document.querySelectorAll(t);
                        if (i.length)
                            for (let e = 0; e < i.length; ++e)
                                i[e].style.display = 'none';
                        else
                            l.report({
                                type: 'ERROR',
                                reason: 'noFallbackElements',
                                placement: e
                            });
                    });
                }
            }
            const n = (e, t) => {
                    try {
                        return a(e, t).isPlacementApprovedToRender();
                    } catch (e) {
                        __trcError('Fallback shouldRenderPlacement Error', e);
                    }
                    return !0;
                }, o = e => {
                    try {
                        s(e).hideFallbackElements(e).reportTimeToRender(e);
                    } catch (e) {
                        __trcError('Fallback Error in finalize', e, 0.2);
                    }
                }, a = ({
                    cga: t,
                    fpl: n,
                    uip: o
                }, a = (() => {
                    return {};
                })()) => {
                    const s = n || o, l = e[s];
                    if (l)
                        return l;
                    const c = t && t.fallback;
                    return c && !l ? (e[s] = new r(s, c, a[s]), e[s]) : i;
                }, s = ({
                    response: t,
                    placement: r
                }) => {
                    const n = t.feedPlacement || r;
                    return e[n] || i;
                }, l = {
                    report: e => {
                        if (TRC.util.isPercentEnabled(TRCImpl.global, 'enable-fallback-events')) {
                            const t = {
                                data: JSON.stringify(e),
                                type: 'fallback'
                            };
                            TRCImpl.sendEvent('pubs-generic', { d: JSON.stringify(t) }, {});
                        }
                    },
                    runOnError: i => {
                        const {placement: r} = i, n = e[r], o = t[r];
                        if (o && 'function' == typeof o)
                            try {
                                o();
                            } catch (e) {
                                __trcError('Fallback Error in on_error', e);
                            }
                        n && n.enable && l.report({
                            type: 'ERROR',
                            reason: 'failedToRender',
                            placement: r
                        });
                    },
                    setOnError: ({
                        placement: e,
                        on_error: i
                    }) => {
                        t[e] = i;
                    }
                };
            TRC.listen('onRboxFlowError', l.runOnError), TRC.fallbackApi = {
                shouldRenderPlacement: n,
                finalize: o,
                setOnError: l.setOnError
            }, window._trcIsUTactive && (TRC.fallbackApi.unitestsHelpers = {
                fallbackUtils: l,
                getFallbackPlacement: s,
                build: a,
                clearFallbackPlacements: () => {
                    e = {};
                }
            });
        }(), function () {
            let e = !1;
            function t() {
                try {
                    !e && i() && (TRCImpl.sendAbTestEvent('isFeedViewIframe', window.top.TRC.pageManager.getPageData()), e = !0);
                } catch (e) {
                    __trcError('Error in TRC.FeedViewInIframeReport.report(): ', e);
                }
            }
            function i() {
                let e = !1, t, i;
                try {
                    return TRC.dom.isInIframe(!0) && (t = window.top && window.top.TRC && window.top.TRC.FeedView) && (i = t.getSelectors(), e = window.frames && window.frames.name === i.IFRAME_ID), e;
                } catch (e) {
                    __trcError('Error in TRC.FeedViewInIframeReport.isFeedViewIframe(): ', e);
                }
            }
            TRC.FeedViewInIframeReport = { report: t }, window._trcIsUTactive && (TRC.FeedViewInIframeReport.isFeedViewIframe = i);
        }(), (() => {
            class e {
                constructor(t) {
                    e.loadFeedViewModuleWhenNeeded(), t.feedViewConfig = !0, TRC.hasFeedView = !0;
                }
                static loadFeedViewModuleWhenNeeded() {
                    const e = TRC.util.isRboxEncapsulated(TRC), t = TRC.dom.isInIframe(!0);
                    e || t || TRC.feedViewModuleLoaded || TRC.ModuleLoader.load('feed-view', TRC.FeedView, () => {
                        TRC.feedViewModuleLoaded = !0;
                    });
                }
                static isFeedViewWidget(e, t) {
                    const i = e.getProperty(null, 'feed-view-devices'), r = e.getProperty(null, 'feed-view-enable'), n = e => {
                            return 'all' === i || i === e;
                        };
                    return !(TRC.util.isFalse(r) || TRC.util.isTrue(TRC.dom.isSmartPhone()) && TRC.util.isFalse(n('smart_phone')) || TRC.util.isFalse(TRC.dom.isSmartPhone()) && TRC.util.isFalse(n('desktop')) || TRC.util.isFalse(e.getProperty(t.mode_name, 'mode-enable-feed-view')) || TRC.util.isTrue(TRC.hasFeedView) || e.global['disable-feed-view-top-referrer']);
                }
            }
            TRC.FeedViewWidgetLoaderManager = e;
        })(), (() => {
            class e {
                constructor(e, t) {
                    this.trcManager = e, this.trcCache = e.trcCache, this.firstIframe = t, this.renderedCardsPreviously = !1, this.feedContainerNum = TRC.feedContainerNum, this.shouldBreakForAMPSplitFeed = !1, this.CACHE_KEYS = {
                        F: 'tbl_f',
                        SYNC_FI: 'tbl_syncFi',
                        SYNC_FB: 'tbl_syncFb',
                        SYNC_VIEW_ID: 'tbl_syncViewID',
                        PUB_CARD_LOCS: 'tbl_pubCardLocs',
                        NEXT_IFRAME_TO_LOAD: 'tbl_nextIframeToLoad',
                        CURRENT_AMP_FRAME_NUM: 'tbl_currentAmpFrameNum'
                    };
                }
                cacheOrAssignFeedResponseData(e) {
                    !0 === this.firstIframe && !1 === this.renderedCardsPreviously ? (this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.F, e.trc.f), this.renderedCardsPreviously = !0) : !1 === this.renderedCardsPreviously && !1 === this.firstIframe && (e.trc.f = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.F), this.renderedCardsPreviously = !0);
                }
                handleFeedIndexOffset(e) {
                    return e.fi = this.syncFi + 1, e.fi;
                }
                cacheLeftoverCards(e, t) {
                    const i = {};
                    __trcCopyProps(e, i);
                    const r = TRC.TrcCache.extractKey(this.reqForCacheKey);
                    this.trcCache.enableCacheViaStorageFlag(), i.trc.vl.splice(0, t + 1), this.trcCache.cacheResponse(r, i);
                }
                handlePubCardInResponse(e, t) {
                    const i = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.PUB_CARD_LOCS), r = parseInt(sessionStorage.getItem(this.CACHE_KEYS.NEXT_IFRAME_TO_LOAD), 10);
                    r === parseInt(this.feedContainerNum, 10) && sessionStorage.setItem(this.CACHE_KEYS.NEXT_IFRAME_TO_LOAD, r + 1);
                    const n = t + 1 + this.oldSyncFi;
                    -1 === i.indexOf(n) && this.currentAmpFrameNum <= this.feedContainerNum && i.push(n), this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.PUB_CARD_LOCS, i), this.currentAmpFrameNum = i.length + 1, TRC.currentAmpFrameNum = this.currentAmpFrameNum, this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.CURRENT_AMP_FRAME_NUM, this.currentAmpFrameNum), TRC.keyWriting = !0, this.cacheLeftoverCards(e, t), this.shouldBreakForAMPSplitFeed = !0;
                }
                updateFeedIndexAndBatch(e) {
                    let t, i;
                    this.oldSyncFi = this.syncFi, t = Number(this.oldSyncFi) + e.trc.vl.length;
                    const r = Object.keys(e.trc.f), n = r[0];
                    this.syncFb = parseInt(e.trc.f[n].nb, 10), !0 === e.cached && (t -= i = e.trc.vl.length), this.syncFi = t, this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.SYNC_FI, t), this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.SYNC_FB, this.syncFb);
                }
                copyReqToReqForCacheKey(e) {
                    this.reqForCacheKey = {}, __trcCopyProps(e, this.reqForCacheKey);
                }
                static getPlacementId(e) {
                    return e && e.placement ? e.placement.split('|').pop().trim() : '';
                }
                detectDuplicateCards(t) {
                    const i = e.getPlacementId(t);
                    null !== this.ampSplitFeedCache.getCacheData(i) ? __trcError('Duplicate Card Index In AMP Split Feed') : this.ampSplitFeedCache.cacheData(i, !0);
                }
                detectSkippedCard(t) {
                    const i = e.getPlacementId(t), r = i.split(' '), n = r[0], o = r[1];
                    if (isNaN(o))
                        return void __trcError('Card name doesn\'t contain numeric index In AMP Split Feed');
                    const a = `${ n } ${ parseInt(o, 10) - 1 }`;
                    o > 1 && null === this.ampSplitFeedCache.getCacheData(a) && __trcError('Card(s) Skipped In AMP Split Feed');
                }
                initParametersForSplitFeedFrames() {
                    const e = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.SYNC_FI), t = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.SYNC_FB);
                    this.syncFi = null === e ? null : parseInt(e, 10), this.syncFb = null === t ? null : parseInt(t, 10);
                    const i = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.SYNC_VIEW_ID);
                    null === i ? this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.SYNC_VIEW_ID, TRC.pageManager.getPageData()) : TRC.syncViewID = i;
                    let r = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.PUB_CARD_LOCS);
                    r || (r = [], this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.PUB_CARD_LOCS, r)), this.currentAmpFrameNum = r.length + 1;
                }
                checkAMPSplitFeedFlagsAndInit(e, t) {
                    this.nextIframeToLoad = sessionStorage.getItem('tbl_nextIframeToLoad'), this.sentIframeLoadFailed = !1, this.attemptCounter = 0, this.MAX_ATTEMPTS = 20, !this.nextIframeToLoad && this.firstIframe && (this.nextIframeToLoad = '1', sessionStorage.setItem('tbl_nextIframeToLoad', this.nextIframeToLoad)), this.nextIframeToLoad !== this.feedContainerNum ? this.timeoutID = setTimeout(this.delayInit.trcBind(this, e, t), 300) : (this.didInit = !0, t(e));
                }
                static sendIframeLoadFailed(e) {
                    TRC.pConsole('errors', 'error', 'AMP split feed iframe', e, 'blocked from out of order loading');
                }
                delayInit(t, i) {
                    try {
                        this.attemptCounter++, !this.sentIframeLoadFailed && this.attemptCounter >= this.MAX_ATTEMPTS && (e.sendIframeLoadFailed(TRC.feedContainerNum), this.sentIframeLoadFailed = !0), this.nextIframeToLoad = sessionStorage.getItem('tbl_nextIframeToLoad'), this.nextIframeToLoad === TRC.feedContainerNum ? (this.didInit = !0, clearTimeout(this.timeoutID), i(t)) : this.timeoutID = setTimeout(this.delayInit.trcBind(this, t, i), 300);
                    } catch (e) {
                        __trcError('AMP split feed - error in delaying iframe init', e);
                    }
                }
                initAmpSplitFeedIframe(e) {
                    this.trcManager.trcCache.reloadCache(), this.ampSplitFeedCache = new TRC.KeyValueCache({
                        cacheName: 'trc_amp_split_feed_cache',
                        noTtl: !0
                    }), this.initParametersForSplitFeedFrames(), this.trcManager.dispatchRequestWrapper(e);
                }
            }
            TRC.AmpSplitFeedManager = e;
        })(), (() => {
            const e = 'card-available', t = 'card-visible', i = 'card-interaction', r = ['click'];
            class n {
                constructor(e, t, i, r) {
                    const {feedDynamicParameters: n} = t;
                    this.trcManager = e, this.cardPlacementData = i, this.exactVisibleDistanceThresholdFromTop = n && n.exactVisibleDistanceThresholdFromTop || this.trcManager.global['exact-visible-distance-threshold-from-top'] || 200, this.listenToCardInteractionEvents(r);
                }
                sendEvent(e, t) {
                    TRC.TrcEventsLogger.sendPlacementEvent(this.trcManager, this.cardPlacementData, e, t);
                }
                handleRenderedCard(t) {
                    t.style.position = 'relative', this.sendEvent(e), this.observeCardVisibility(t);
                }
                listenToCardInteractionEvents(e) {
                    r.forEach(t => {
                        TRC.dom.on(e, t, this.sendCardInteractionEvent.trcBind(this, t)), 'click' === t && e.querySelector('iframe') && TRC.dom.on(window, 'blur', this.checkIfCardIFrameClickedAndLog.trcBind(this, e));
                    });
                }
                checkIfCardIFrameClickedAndLog(e) {
                    const {activeElement: t} = document;
                    t && 'iframe' === t.tagName.toLowerCase() && (t === e || e.contains(t)) && this.sendCardInteractionEvent('click');
                }
                sendCardInteractionEvent(e) {
                    const t = {
                            id: Date.now(),
                            type: e
                        }, r = { d: JSON.stringify(t) };
                    this.sendEvent(i, r);
                }
                observeCardVisibility(e) {
                    const i = {
                        targetElement: e,
                        enableDelayedVisibilityCheck: !0,
                        exactVisibleThresholdFromTop: this.exactVisibleDistanceThresholdFromTop,
                        onTrigger: this.sendEvent.trcBind(this, t, null)
                    };
                    TRC.intersections.isInViewPort(i);
                }
            }
            TRC.CardEventsManager = n;
        })(), (() => {
            const e = 'tbl-feed-container', t = 'tbl-feed-card', i = 'tbl-feed-full-width', r = 'tbl-feed-partial-width', n = 'tbl-feed-abp', o = 'data-feed-container-num', a = 'data-feed-main-container-id', s = 'data-parent-placement-name', l = 'data-pub-lang', c = {
                    FULL_WIDTH: 'FULL_WIDTH',
                    PARTIAL_WIDTH: 'PARTIAL_WIDTH'
                };
            class d {
                constructor(e, t, i) {
                    const r = __trcCopyProps(i, {});
                    this.trcManager = e, this.container = t.container, this.origContainer = this.container, this.mainContainerId = this.container.id, this.mainContainerPlacement = t.placement, this.numContainers = 1, this.testData = e.testData, this.experimentsData = e.experimentsData, this.experimentsHash = e.experimentsHash, this.options = i, this.numPendingPublisherCards = 0, this.layout = i.mobileLayout || i.feedUi && i.feedUi.layout, this.shouldDisableScopeCss = this.trcManager.global['disable-scope-feed-css'], this.firstCardRequestId = t.firstCardRequestId, this.unifiedPlacement = t.unifiedPlacement, i.wasWidget && (this.widgetToFeedHelper = new TRC.WidgetToFeedHelper(this, e, i.hasFeedUI)), i.videoSingleManager && this.loadVideoSingleManager(t, e, i), !1 !== i.hasFeedUI && TRC.dom.injectStyle(this.createCss(i), null), r.afterPlacementContainerCreated = d.addFeedCardAttributes.trcBind(this), r.itemsParentContainerSelector = `[${ a }="${ this.mainContainerId }"]`, this.infiniteScrollEngine = new TRC.InfiniteScrollEngine(e, t, r), this.publisherCardsManager = new TRC.PublisherCardsManager(this, e, t, i);
                    const n = d.getFeedConfig(i, 'footerOverlayConfig', 'footerOverlay');
                    n && TRC.ModuleLoader.load('feed-footer-overlay', TRC.FooterOverlay, () => {
                        this.footerOverlay = new TRC.FooterOverlay(e, n);
                    }), TRC.isAMPSplitFeed && (this.numContainers = this.trcManager.ampSplitFeedManager.feedContainerNum), this.setMainContainerCssClassesAndAttributes(this.container, i), this.listenToCardContentReady(), this.header = this.createHeader(i.feedUi), TRC.Heatmap.isEnabled(this.trcManager) && (this.heatmap = new TRC.Heatmap(e), TRC.dom.on(this.container, 'click', e => {
                        this.heatmap.captureAndSendClickData(e);
                    }));
                }
                handlePlacement(e) {
                    const t = e.trcResponse && e.trcResponse.spl, i = e.trcResponse && e.trcResponse.pcp, r = e.trcResponse && e.trcResponse.scac ? null : this.infiniteScrollEngine.numPlacements;
                    return t ? (this.infiniteScrollEngine.handlePlacement(e), this.publisherCardsManager.registerPublisherCardForHandling(e), void this.publisherCardsManager.handlePendingPublisherCards(0, r, null, t)) : (TRC.isAMPSplitFeed && (this.trcManager.ampSplitFeedManager.detectDuplicateCards(e), this.trcManager.ampSplitFeedManager.detectSkippedCard(e)), i ? TRC.isAMPSplitFeed ? void this.stopScrolling() : (this.publisherCardsManager.registerPublisherCardForHandling(e), this.infiniteScrollEngine.numPlacements++, void this.numPendingPublisherCards++) : (this.numPendingPublisherCards > 0 && (this.publisherCardsManager.handlePendingPublisherCards(0, r, null, t), this.numPendingPublisherCards = 0), this.infiniteScrollEngine.handlePlacement(e), this.trcManager['after-card-created'](e, r, this), void TRC.CustomModulesManager.runHook('after-card-created', this.mainContainerPlacement, this, e, r, this)));
                }
                stopScrolling() {
                    this.infiniteScrollEngine.stopScrolling();
                }
                setIsAllowedToRequestMoreContent(e) {
                    this.infiniteScrollEngine.setIsAllowedToRequestMoreContent(e);
                }
                updateNextBatchNumber(e) {
                    this.infiniteScrollEngine.updateNextBatchNumber(e);
                }
                setMainContainerCssClassesAndAttributes(t, d) {
                    const h = [e];
                    switch (this.layout) {
                    case c.FULL_WIDTH:
                        h.push(i);
                        break;
                    case c.PARTIAL_WIDTH:
                        h.push(r);
                    }
                    d.feedUi && d.feedUi.cardFrame && h.push(`tbl-feed-frame-${ d.feedUi.cardFrame }`), TRC.blocker.blockedState > 0 && h.push(n), TRC.dom.addClass(this.container, h.join(' ')), this.numContainers > 1 && (this.container.id = `${ this.mainContainerId }-split-num-${ this.numContainers - 1 }`), t.setAttribute(o, this.numContainers), t.setAttribute(a, this.mainContainerId), t.setAttribute(s, this.mainContainerPlacement), this.trcManager.language && t.setAttribute(l, this.trcManager.language);
                }
                createHeader(e) {
                    if (TRC.isAMPSplitFeed && this.trcManager.ampSplitFeedManager && 1 !== Number(this.trcManager.ampSplitFeedManager.feedContainerNum))
                        return;
                    const t = document.createElement('div'), i = document.createElement('div'), r = !(!e || !e.feedHeaderData), n = e && e.logoPosition && 'NONE' !== e.logoPosition ? e.logoPosition : null, o = n ? `tbl-logo-${ n.toLowerCase() }-position` : '';
                    if (i.className = 'tbl-feed-header-logo', t.className = ` tbl-feed-header ${ o }`, t.appendChild(i), TRC.ccpa.renderOnHeaderFeed(t, this.unifiedPlacement, n), r) {
                        const i = d.createFeedHeaderTextElement(e.feedHeaderData.headerText);
                        t.className += ' tbl-header-with-text', t.appendChild(i);
                    }
                    return this.container.insertBefore(t, this.container.firstChild), t;
                }
                static createFeedHeaderTextElement(e) {
                    const t = document.createElement('div');
                    return t.className = 'tbl-feed-header-text', t.innerText = e, t;
                }
                static addFeedCardAttributes(e, t) {
                    e.setAttribute('tbl-feed-card', ''), t.isStandaloneVideo && d.setFeedVideoCardAttribute(e), d.setFeedCardVideoIndication(e, t);
                }
                static setFeedCardVideoIndication(e, t) {
                    t.trcResponse.nvb && e.setAttribute('no-vbelow', ''), t.trcResponse.nva && e.setAttribute('no-vabove', '');
                }
                static setFeedVideoCardAttribute(e) {
                    e.setAttribute('tbl-feed-video', '');
                }
                listenToCardContentReady() {
                    TRC.listen('trcContentReady', this.onTrcContentReady.trcBind(this));
                }
                onTrcContentReady(e) {
                    const {container: t} = e;
                    if (t && t.placementData) {
                        const {placementData: e} = t;
                        if (!e.isFeedCard)
                            return;
                        this.onCardContentReady(t, e);
                    }
                }
                onCardContentReady(e, i) {
                    const {
                            style: r,
                            id: n
                        } = e, {
                            trcResponse: o,
                            expandOptions: a
                        } = i;
                    TRC.dom.addClass(e, t), o.cpad && (r.padding = o.cpad), a && (e.expandableBox = new TRC.ExpandableBox(this.trcManager, n, a), this.listenToBoxChildIFrameClick());
                }
                listenToBoxChildIFrameClick() {
                    this.expandableBoxIFrameClickListener || (this.expandableBoxIFrameClickListener = !0, TRC.dom.on(window, 'blur', () => {
                        const {activeElement: e} = document;
                        e && TRC.dom.elementMatchesSelector(e, `[${ a }="${ this.mainContainerId }"] .${ t } iframe`) && TRC.dispatch('expandableBoxChildIFrameClick', { container: TRC.dom.closest(e, ` .${ t }`) });
                    }));
                }
                createCss(e) {
                    const t = [];
                    e.feedCss ? t.push(e.feedCss.replace(/{FEED_MAIN_CONTAINER_ID_ATT}/g, `[${ a }="${ this.mainContainerId }"]`)) : t.push(d.getDefaultFeedCSS()), this.isFullWidthMobileFeed(e) && t.push(this.getMobileFullWidthMarginsCss()), e.feedUi && t.push(d.getFeedUiCss(e.feedUi, this.mainContainerId)), e.publisherFeedCss && t.push(e.publisherFeedCss), t.push(e.feedCssOverride);
                    let i = t.join('');
                    return this.shouldDisableScopeCss || (i = d.scopeCss(i, this.mainContainerId)), i;
                }
                static scopeCss(t, i) {
                    return t.replace(new RegExp(`.${ e }`, 'g'), `[${ a }="${ i }"]`);
                }
                getTestData() {
                    return this.testData;
                }
                getExperimentsData() {
                    return this.experimentsData;
                }
                getExperimentsHash() {
                    return this.experimentsHash;
                }
                static getFeedUiCss(e, t) {
                    const i = [], r = e.feedBackgroundColor || e.feedBackground, n = `[${ a }="${ t }"]`;
                    if (i.push(`${ n }[${ o }] {background-color: ${ r }; padding: ${ e.feedPadding };}`), 'NONE' === e.logoPosition ? i.push(`${ n } .tbl-feed-header .tbl-feed-header-logo {display:none;}`) : i.push(`${ n } .tbl-feed-header {padding: 0px 5px 10px 5px; background: transparent; text-align: initial; display: table; width: 100%;}`), e.feedHeaderData) {
                        const {
                            headerFontSize: t = '20px',
                            headerFontFamily: r = 'Arial, Helvetica, sans-serif',
                            headerColor: o = '#000000',
                            headerFontStyle: a = 'normal'
                        } = e.feedHeaderData;
                        i.push(`${ n } .tbl-feed-header .tbl-feed-header-text {font-size: ${ t }; color: ${ o }; line-height: ${ t }; font-family: ${ r }; font-weight: ${ a }}`);
                    }
                    return i.join('');
                }
                getMobileFullWidthMarginsCss(t) {
                    const r = t ? this.container.parentNode : this.container, n = r.getBoundingClientRect(), a = -1 * n.left, s = -1 * (document.documentElement.clientWidth - n.width - Math.abs(a));
                    let l = `#${ this.container.id }.${ e }.${ i }`;
                    return (a || s) && r.offsetParent ? (t && (l += `[${ o }="${ t }"]`), `@media screen and (max-width: 480px) {\n                        ${ l } {\n                            margin-left: ${ a }px;\n                            margin-right: ${ s }px;\n                        }\n                    }`) : '';
                }
                static getDefaultFeedCSS() {
                    return `.${ e } { position: relative; margin-top: 20px; margin-bottom: 20px; -webkit-text-size-adjust: 100%; clear: both; } .${ e } .tbl-feed-header { padding: 5px; background-color: #ffffff; display: inline-block; } .${ e } .tbl-feed-header-logo { background: url(//cdn.taboola.com/static/f8/f89e1763-220d-4e09-ba69-9e040548fb7a.svg) no-repeat 0 0; background-size: contain; height: 11px; width: 76px; display: inline-block; } .${ e } .tbl-loading-spinner { margin-bottom: 10px; } .${ e } .${ t } { margin-bottom: 10px; background-color: #ffffff; border: 1px solid #f1f1f1; } .${ e } .${ n } { max-width: 770px; margin: 20px auto 0; }/** Mobile CSS Rules **/@media screen and (max-width: 480px) { .${ e } { padding: 0; background-color: #ffffff; } .${ e } .tbl-feed-header { margin-left: 2px; padding: 5px 0; } .${ e } .${ t } { margin-bottom: 5px; padding-bottom: 5px; border-width: 0; border-bottom: 4px solid #f1f1f1; } .${ e } .trc_header_ext, .${ e } .trc-widget-footer { padding-right: 3px; } }/** End of Mobile CSS Rules **/`;
                }
                getVideoManagerRequestData() {
                    return {
                        'session-data': TRC.pageManager.getPublisherValue(TRC.publisherId, 'session-data'),
                        req: this.firstCardRequestId
                    };
                }
                loadVideoSingleManager(e, t, i) {
                    const r = __trcCopyProps(e, {}, null), n = __trcCopyProps(i.videoSingleManager, {});
                    n.parentFeedOptions = i, this.videoManager = new TRC.VideoTagLoader(t, n, r, null, this.getVideoManagerRequestData()), this.videoManager.loadVideo();
                }
                switchMainContainer(e) {
                    this.container = e, this.infiniteScrollEngine.switchMainContainer(this.container);
                }
                isFullWidthMobileFeed(e) {
                    const t = e.mobileLayout || this.layout;
                    return t === c.FULL_WIDTH;
                }
                getIsFirstBatch() {
                    return this.infiniteScrollEngine.getIsFirstBatch();
                }
                static getFeedConfig(e, t, i) {
                    if (e) {
                        const r = this.getFeedDynamicParameter(e.feedDynamicParameters, t);
                        return r || e[i];
                    }
                    return null;
                }
                static getFeedDynamicParameter(e, t) {
                    if (e) {
                        const i = e[t];
                        if (i)
                            return JSON.parse(i);
                    }
                    return null;
                }
            }
            TRC.Feed = d;
        })(), (() => {
            class e {
                constructor(e) {
                    this.trcManager = e, this.feeds = {}, this.invalidFeedsMap = {}, this.configs = {};
                }
                handleFeedCardPlacement(t, i) {
                    i.isFeedCard = !0, e.setScaArray(i, t);
                    const r = this.getOrCreateFeed(t), n = r && r.options, o = n && TRC.Feed.getFeedDynamicParameter(n.feedDynamicParameters, 'feedViewConfig'), a = n && n.feedView, s = n && (o || a), l = o && TRC.util.isFalse(o.isFeedView) ? o.isFeedView : s;
                    r && (l && (TRC.hasFeedView || this.trcManager.global['disable-feed-view-top-referrer'] || (TRC.hasFeedView = !0), TRC.FeedViewWidgetLoaderManager.loadFeedViewModuleWhenNeeded(), s && s.enableAEClicks && (r.enableAEClicks = !0), i.feedViewConfig = s), i.parentFeed = r, i.parentFeed.handlePlacement(i));
                }
                getOrCreateFeed(e) {
                    const t = e.fpl, i = this.getFeedConfig(t), r = this.feeds[t] || this.createNewFeed(i, t, e);
                    if (r instanceof TRC.Feed)
                        return i.eof && r.stopScrolling(), i.nb && r.updateNextBatchNumber(i.nb), r;
                }
                createNewFeed(t, i, r) {
                    const {
                            uuip: n,
                            ri: o,
                            sca: a
                        } = r, {
                            fcs: s,
                            rooc: l,
                            exm: c
                        } = t, d = e.parseFeedOptionsFromResponse(t);
                    c && this.trcManager.enableExploreMore(t, i), TRC.VirtualPlacementsManager.handleVirtualPlacement(this.trcManager, i);
                    const h = this.trcManager.preloadRequest[i];
                    if (h) {
                        if (h.isFeed = !0, !s || (h.container = this.getNewFeedContainer(h.container, i, s, l), h.container))
                            return h.fti = t.fti, h.unifiedPlacement = n, h.firstCardRequestId = o, h.sca = a, this.feeds[i] = new TRC.Feed(this.trcManager, h, d);
                    } else
                        __trcDebug(`'createNewFeed' : placement '${ i }' was not in the request - ignore`);
                }
                getNewFeedContainer(e, t, i, r) {
                    const n = 'feed', o = {
                            container: e,
                            'container-selectors': i,
                            'render-on-orig-container': r
                        }, a = this.trcManager.getWidgetContainer(o, n);
                    if (a)
                        return a;
                    this.invalidFeedsMap[t] = !0;
                }
                getFeedConfig(e) {
                    return this.configs && this.configs[e] ? this.configs[e] : {};
                }
                hasFeedConflict(e, t) {
                    return this.feeds[e] || this.hasFeedTestDataMismatch(t);
                }
                hasFeedTestDataMismatch(e) {
                    const t = this.feeds[e];
                    if (!t)
                        return !1;
                    if (t.getTestData() !== this.trcManager.testData)
                        return !0;
                    const i = t.getExperimentsHash(), r = this.trcManager.experimentsHash;
                    return i && !r || !i && r || i && r && i !== r;
                }
                static setScaArray(e, t) {
                    e && e.globalTrcResponseJSON && e.globalTrcResponseJSON.sca && (t.sca = e.globalTrcResponseJSON.sca);
                }
                static isExperimentDataEqual(e, t) {
                    const i = JSON.stringify(e), r = JSON.stringify(t);
                    return i === r;
                }
                static parseFeedOptionsFromResponse(e) {
                    return {
                        nextBatchDistanceThreshold: e.nbdt,
                        feedCss: e.css,
                        feedCssOverride: e.fcss,
                        publisherFeedCss: e.pfcss,
                        mobileLayout: e.fml,
                        videoSingleManager: e.vsm,
                        feedUi: e.fui,
                        feedNextUp: e.fnu,
                        exploreMore: e.exm,
                        footerOverlay: e.fov,
                        feedDynamicParameters: e.drp,
                        videoDisclosurePosition: e.vdp,
                        uiDesignVersion: e.udv,
                        wasWidget: TRC.util.isTrue(e.ww),
                        firstBatchLazyLoadingEnabled: TRC.util.isTrue(e.fbll),
                        hasFeedUI: void 0 === e.hfu || TRC.util.isTrue(e.hfu),
                        hasPreventReachingFooter: TRC.util.isTrue(e.prf),
                        preventReachingFooterData: e.prfd,
                        feedView: TRC.util.isTrue(e.fv)
                    };
                }
                static createFeedScriptWidgetData(e, t) {
                    return {
                        placement: e,
                        scriptData: t,
                        addWidget: !0
                    };
                }
                static createFeedIframe(e, t) {
                    return {
                        placement: e,
                        iframeData: t,
                        addWidget: !0,
                        isIframeCard: !0
                    };
                }
                static createPublisherCardData(e, t) {
                    return {
                        placement: e,
                        addWidget: !0,
                        publisherCardData: t.pcp
                    };
                }
                static createExternalWidgetData(e, t) {
                    return {
                        placement: e,
                        externalContainerSelector: t.es
                    };
                }
                static isExternalContainerWidget(e) {
                    return void 0 !== e.es && null !== e.es;
                }
                static isFeedScriptWidget(e) {
                    return e.fpl && e.js;
                }
                static isFeedIframe(e) {
                    return e.fpl && e.ifr;
                }
                static isPublisherCard(e) {
                    return e.fpl && e.pcp;
                }
            }
            TRC.FeedsManager = e;
        })(), (() => {
            class e {
                constructor(e, t, i) {
                    this.trcManager = e, this.parentPlacementData = t, this.parentPlacementName = t.placement, this.container = t.container, this.origContainer = this.container, this.parentContainerId = this.container.id, this.afterPlacementContainerCreated = i.afterPlacementContainerCreated, this.nextBatchDistanceThreshold = i.nextBatchDistanceThreshold || 2000, this.numPlacements = 1, this.scAdjacencyPlacements = 0, this.feedDynamicParameters = i.feedDynamicParameters, this.uiBatchNumberCounter = 1, this.isPendingNextBatch = !0, this.numOfConsecutiveFailedRequests = 0, this.maxNumOfConsecutiveFailedRequests = this.trcManager.global['feed-max-num-of-consecutive-failed-requests'] || 10, this.nbLoaderLayerEnabled = this.trcManager.global['enable-cls-loader-optim'], this.firstBatchLazyLoadingEnabled = i.firstBatchLazyLoadingEnabled, this.isFirstBatchRequest = !0, this.isLoadNextBatchAnchorObserveEnter = !1, this.currentBatchSuccessful = !1, this.enableManualLoadNextBatch = this.trcManager.manualVisibilityTrigger && this.trcManager.global['enable-manual-visible'] || this.feedDynamicParameters && this.feedDynamicParameters.manualLoadNextBatch, this.numPlaceholderItems = this.feedDynamicParameters && this.feedDynamicParameters.numPlaceholderItems || 3, this.itemsParentContainerSelector = i.itemsParentContainerSelector || `#${ this.parentContainerId }`;
                    const r = this.feedDynamicParameters && this.feedDynamicParameters.rootSelectorScrollElement || this.trcManager.global['feed-load-next-batch-root-selector'];
                    this.observerRootSelector = r || null, this.observerScrollElement = r && document.querySelector(r) || window, this.feedObserverLoadNextBatch = this.feedDynamicParameters && this.feedDynamicParameters.feedObserverLoadNextBatch || this.trcManager.global['feed-observer-load-next-batch'], this.firstBatchDistanceThresholdFromTop = this.feedDynamicParameters && this.feedDynamicParameters.firstBatchDistanceThresholdFromTop || this.trcManager.global['first-batch-distance-threshold-from-top'], this.feedObserverLoadNextBatch && !this.enableManualLoadNextBatch && (this.isLoadNextBatchUsingObserver = !0), this.firstBatchDistanceThresholdFromTop && !this.enableManualLoadNextBatch && (this.throttledLoadRestOfBatchScrollHandler = this.loadRestOfBatchScrollHandler.trcBind(this, this.firstBatchDistanceThresholdFromTop).trcThrottle(10), TRC.dom.on(this.observerScrollElement, 'scroll', this.throttledLoadRestOfBatchScrollHandler)), this.enableManualLoadNextBatch && (this.lastManualRectsTop = 0, this.listenToManualLoadNextBatchEvent()), this.feedDynamicParameters && this.feedDynamicParameters.enableHistory && (this.historyManager = new TRC.HistoryManager(e)), this.isLoadNextBatchUsingObserver && this.createLoadNextBatchObserverAnchorElement();
                    const n = TRC.Feed.getFeedConfig(i, 'preventReachingFooterConfig', 'preventReachingFooterData');
                    this.hasPreventReachingFooter = n && void 0 !== n.enable ? TRC.util.isTrue(n.enable) : i.hasPreventReachingFooter, n && this.hasPreventReachingFooter && TRC.PreventReachingTheFooter.init(this, n), this.listenToTrcResponse(), this.createLoadingIndicator(), this.initMonitoringOfDuplicatedItemsIfNeeded();
                }
                loadRestOfBatchScrollHandler(e) {
                    const t = this.isNearingStartOfPage(e);
                    this.restOfFirstBatchLoaded || this.isCache ? TRC.dom.off(this.observerScrollElement, 'scroll', this.throttledLoadRestOfBatchScrollHandler) : !this.restOfFirstBatchLoaded && t && (this.getNextBatch(), TRC.dom.off(this.observerScrollElement, 'scroll', this.throttledLoadRestOfBatchScrollHandler));
                }
                createNewNextBatchAnchorObserver() {
                    TRC.dom.off(this.observerScrollElement, 'scroll', this.nextBatchObserverCreator), TRC.intersections.unobserve(this.loadNextBatchAnchorObserverId), this.ampFeedResizeListener && this.ampFeedResizeListener.remove(), this.nextBatchObserverCreator = null, this.isLoadNextBatchAnchorObserveEnter = !1, this.observeNextBatchAnchor();
                }
                observeNextBatchAnchor() {
                    const e = this.getNextBatchDistanceThreshold(), t = {
                            rootSelector: this.observerRootSelector,
                            targetElement: this.loadNextBatchAnchorContainer,
                            threshold: [
                                0,
                                0.25,
                                0.5,
                                0.75,
                                1
                            ],
                            rootMargin: `0px 0px ${ e }px 0px`,
                            onEnter: this.getNextBatch.trcBind(this)
                        };
                    this.loadNextBatchAnchorObserverId = TRC.intersections.observe(t);
                }
                createLoadingSpinner() {
                    this.spinnerContainer = document.createElement('div'), this.spinnerContainer.className += 'tbl-loading-spinner tbl-hidden', this.container.appendChild(this.spinnerContainer);
                }
                createLoadingCardPlaceholder() {
                    this.spinnerContainer = document.createElement('div'), TRC.ModuleLoader.load('feed-card-placeholder', TRC.FeedCardPlaceHolder, () => {
                        TRC.FeedCardPlaceHolder.createLoadingCardPlaceholder({
                            direction: this.trcManager.direction,
                            container: this.container,
                            cardPlaceholder: this.spinnerContainer,
                            numPlaceholderItems: this.numPlaceholderItems
                        });
                    });
                }
                reserveSpaceForLoader(e, t, i) {
                    if (this.nbLoaderLayerEnabled)
                        if (t) {
                            const e = t.style.getPropertyValue('padding-bottom');
                            t.style.removeProperty('padding-bottom'), i.style.setProperty('padding-bottom', `${ e }`, 'important');
                        } else {
                            let t;
                            if (e)
                                t = 50;
                            else if (TRC.dom.isSmartPhone()) {
                                const e = 95, i = 8;
                                t = this.numPlaceholderItems * e + i;
                            } else {
                                const e = 173, i = 40;
                                t = this.numPlaceholderItems * e + i;
                            }
                            i.style.setProperty('padding-bottom', `${ t }px`, 'important'), this.spinnerContainer.style.setProperty('position', 'absolute', 'important');
                        }
                }
                createLoadingIndicator() {
                    const e = this.trcManager.global['disable-nb-anim'];
                    if (!e) {
                        const e = this.feedDynamicParameters && 'true' === this.feedDynamicParameters.disableLoadingCardsPlaceholder || this.trcManager.global['disable-loading-cards-placeholder'];
                        e ? this.createLoadingSpinner() : this.createLoadingCardPlaceholder(), this.reserveSpaceForLoader(e, null, this.container);
                    }
                }
                createLoadNextBatchObserverAnchorElement() {
                    this.loadNextBatchAnchorContainer = document.createElement('div'), this.loadNextBatchAnchorContainer.className = 'tbl-batch-anchor', this.container.appendChild(this.loadNextBatchAnchorContainer), this.observeNextBatchAnchor();
                }
                stopScrolling() {
                    if (this.preventReachingTheFooter && this.preventReachingTheFooter.disable(), this.isLoadNextBatchUsingObserver)
                        return this.isAllowedToRequestMoreContent = !1, void TRC.intersections.unobserve(this.loadNextBatchAnchorObserverId);
                    this.enableManualLoadNextBatch ? this.isAllowedToRequestMoreContent = !1 : TRC.dom.off(this.observerScrollElement, 'scroll', this.throttledScrollHandler);
                }
                hideLoadingSpinner() {
                    this.spinnerContainer && -1 === this.spinnerContainer.className.indexOf('tbl-hidden') && TRC.dom.addClass(this.spinnerContainer, 'tbl-hidden');
                }
                showLoadingSpinner() {
                    this.spinnerContainer && TRC.dom.removeClass(this.spinnerContainer, 'tbl-hidden');
                }
                listenToTrcResponse() {
                    let e;
                    e = this.hasPreventReachingFooter ? this.onTrcResponsePreventReachingFooterWrapper.trcBind(this) : this.onTrcResponse.trcBind(this), TRC.EventsAPI.listen('nocontent', this.onTrcNoContent.trcBind(this)), TRC.listen('trcResponseHandled', e), TRC.listen('resumeFeedRendering', e);
                }
                listenToManualLoadNextBatchEvent() {
                    TRC.listen(`visible::${ this.parentPlacementName }`, this.manualLoadNextBatchHandler.trcBind(this));
                }
                shouldEnableLoadNextBatch(e) {
                    const t = e.boundingClientRect.top < this.lastManualRectsTop, i = e.boundingClientRect.top + e.boundingClientRect.height - e.rootBounds.height, r = i <= this.getNextBatchDistanceThreshold();
                    return r && t;
                }
                manualLoadNextBatchHandler(e) {
                    this.shouldEnableLoadNextBatch(e) && this.getNextBatch(), this.lastManualRectsTop = e.boundingClientRect.top;
                }
                isNearingStartOfPage(e) {
                    return e <= this.getScrollTop();
                }
                getNextBatchDistanceThreshold() {
                    if (!this.isFirstBatchRequest)
                        return this.nextBatchDistanceThreshold;
                    const e = this.firstBatchLazyLoadingEnabled && this.trcManager.global['feed-first-batch-distance-threshold'] || this.nextBatchDistanceThreshold;
                    return this.trcManager.renderController.isLazyRenderEnabled ? this.trcManager.renderController.getBatchThreshold(this, e) : e;
                }
                updateNextBatchNumber(e) {
                    this.trcNextBatchNumber = +e;
                }
                getNextBatch(e) {
                    try {
                        this.preventReachingTheFooter && this.preventReachingTheFooter.lateRenderEnabled && this.preventReachingTheFooter.handleGetNextBatch();
                        const t = {};
                        if (!1 === this.isAllowedToRequestMoreContent || this.isPendingNextBatch)
                            return;
                        if (this.isLoadNextBatchUsingObserver) {
                            if (!e && this.isLoadNextBatchAnchorObserveEnter)
                                return;
                            this.isLoadNextBatchAnchorObserveEnter = !0;
                        }
                        this.isFirstBatchRequest = !1, this.parentPlacementData.fb = this.trcNextBatchNumber || ++this.uiBatchNumberCounter, this.restOfFirstBatchLoaded = !0, this.parentPlacementData.fi = this.numPlacements + this.scAdjacencyPlacements, t[this.parentPlacementName] = this.parentPlacementData, this.isPendingNextBatch = !0, this.showLoadingSpinner(), this.trcManager.dispatchLoadRequest(t);
                    } catch (e) {
                        __trcError('Failed to load next batch in getNextBatch()', e);
                    }
                }
                getScrollTop() {
                    return TRC.dom.getScrollTop(this.observerScrollElement);
                }
                static isVideoItemPreviewOn(e, t) {
                    return !(e.uimvip !== t.mode && !e.evip);
                }
                handlePlacement(t) {
                    const i = document.createElement('div'), r = t.trcResponse.scac;
                    if (this.feedDynamicParameters && e.isVideoItemPreviewOn(this.feedDynamicParameters, t) && (i.className = 'tbl-preview'), t.isCache) {
                        if (this.isCache = !0, this.cachedViewId = t.cachedViewId, !this.loadFromCacheEventSent) {
                            const e = 'backToFeed_loadFromCache', i = __trcJSONify({
                                    origViewId: this.cachedViewId,
                                    placement: t.placement,
                                    cardIndex: r ? null : this.numPlacements
                                });
                            this.trcManager.sendAbTestEvent(e, i), this.loadFromCacheEventSent = !0;
                        }
                    } else if (this.isCache && !this.loadNotFromCacheEventSent) {
                        const e = 'backToFeed_loadNotFromCache', i = __trcJSONify({
                                origViewId: this.cachedViewId,
                                placement: t.placement,
                                cardIndex: r ? null : this.numPlacements
                            });
                        this.trcManager.sendAbTestEvent(e, i), this.loadNotFromCacheEventSent = !0;
                    }
                    t.container = i, t.modeGroupOrder = this.numPlacements, r || i.setAttribute('data-card-index', this.numPlacements), i.placementData = t, this.uiBatchNumberCounter = +t.trcResponse.fb || this.uiBatchNumberCounter, this.parentContainerId && (i.id = `${ this.parentContainerId }${ r ? `-sca${ this.scAdjacencyPlacements + 1 }` : `-pl${ this.numPlacements }` }`, i.setAttribute('data-batch-num', this.uiBatchNumberCounter)), 'function' == typeof this.afterPlacementContainerCreated && this.afterPlacementContainerCreated(i, t), this.isLoadNextBatchUsingObserver ? this.container.insertBefore(i, this.container.querySelector('.tbl-batch-anchor')) : this.container.insertBefore(i, this.container.querySelector('.tbl-loading-spinner')), this.historyManager && (this.historyManager.trackElement(i), this.historyManager.scrollToElementIfWasLastInViewPort(i)), r ? this.scAdjacencyPlacements++ : this.numPlacements++, (!t.trcResponse.v || t.trcResponse.v.length > 0) && (this.currentBatchSuccessful = !0);
                }
                switchMainContainer(e) {
                    this.nbLoaderLayerEnabled && this.reserveSpaceForLoader(null, this.container, e), this.container = e, this.isLoadNextBatchUsingObserver && this.container.appendChild(this.loadNextBatchAnchorContainer), this.container.appendChild(this.spinnerContainer);
                }
                onTrcResponsePreventReachingFooterWrapper(e) {
                    this.preventReachingTheFooter && this.preventReachingTheFooter.preparePreventScroll(e);
                }
                onTrcNoContent(e) {
                    e.detail.placement || (this.currentBatchSuccessful = !1, this.onTrcResponse());
                }
                onTrcResponse() {
                    if (this.currentBatchSuccessful)
                        this.numOfConsecutiveFailedRequests = 0;
                    else if (this.numOfConsecutiveFailedRequests++, this.numOfConsecutiveFailedRequests >= this.maxNumOfConsecutiveFailedRequests)
                        return this.stopScrolling(), void this.hideLoadingSpinner();
                    this.currentBatchSuccessful = !1, this.isPendingNextBatch = !1, this.preventReachingTheFooter && !0 === this.preventReachingTheFooter.isWaitToHide ? this.preventReachingTheFooter.isWaitToHide = !1 : this.hideLoadingSpinner(), this.isLoadNextBatchUsingObserver && !this.nextBatchObserverCreator && !1 !== this.isAllowedToRequestMoreContent && (this.nextBatchObserverCreator = this.createNewNextBatchAnchorObserver.trcBind(this).trcThrottle(10), TRC.dom.on(this.observerScrollElement, 'scroll', this.nextBatchObserverCreator), this.ampFeedResizeListener = TRC.listen('ampFeedResize', this.nextBatchObserverCreator)), this.duplicatedItemsMonitor && this.duplicatedItemsMonitor.checkForDuplicatedItems(), this.preventReachingTheFooter && this.preventReachingTheFooter.isEnableLateRender && (this.preventReachingTheFooter.isEnableLateRender = !1, this.getNextBatch(!0));
                }
                setIsAllowedToRequestMoreContent(e) {
                    this.isAllowedToRequestMoreContent = e;
                }
                getIsFirstBatch() {
                    return this.isFirstBatchRequest;
                }
                initMonitoringOfDuplicatedItemsIfNeeded() {
                    if (this.shouldMonitorForDuplicatedItems()) {
                        const e = {
                            parentContainerSelector: this.itemsParentContainerSelector,
                            additionalLogDataBuilder: e => {
                                return { cardIndex: TRC.dom.closest(e, '[data-card-index]').getAttribute('data-card-index') };
                            }
                        };
                        this.duplicatedItemsMonitor = new TRC.DuplicatedItemsMonitor(this.trcManager, e);
                    }
                }
                shouldMonitorForDuplicatedItems() {
                    return this.trcManager.global['monitor-dup-items-traffic-pct'] > 100 * Math.random() || -1 !== [
                        'yes',
                        'true',
                        '1'
                    ].indexOf(TRC.URL.prototype.getParameter.call(location.href, 'taboola_dedup_debug'));
                }
            }
            TRC.InfiniteScrollEngine = e;
        })(), (() => {
            class e {
                constructor(e) {
                    this.getConfig(e), this.trackFastScroller();
                }
                getConfig(e) {
                    this.lateRenderTimeout = parseInt(e.timeout, 10) || 5000, this.fastScrollerTime = parseInt(e.fastScrollerTime, 10) || 10000, this.maxCards = parseInt(e.maxCards, 10) || 5, this.detectCardNumber = parseInt(e.detectCardNumber, 10) || 5, this.trcManager = e.trcManager, this.infiniteScrollEngine = e.infiniteScrollEngine, this.cardOneTime = null, this.detectCardTime = null, this.observerTargets = [], this.onScroll = this.observeScroll.trcBind(this).trcThrottle(50), this.onEndKey = this.endKeyHandler.trcBind(this), this.isFastScroller = !1, this.prevPosition = window.pageYOffset, this.scrollThrottleTime = parseInt(e.scrollThrottleTime, 10) || 10, this.timeout = null, this.scrollTimeoutLength = parseInt(e.scrollTimeoutLength, 10) || 5000, this.timeoutEnabled = !1, this.stopListenToBatch = !0, this.shouldPreventScrolling = !0, this.loadNextBatchAnchorContainer = e.infiniteScrollEngine.loadNextBatchAnchorContainer, this.isPreventScroll = !1;
                }
                trackFastScroller() {
                    TRC.dom.on(window, 'scroll', this.onScroll), TRC.dom.on(document, 'keydown', this.onEndKey);
                }
                unTrackFastScroller() {
                    TRC.dom.off(window, 'scroll', this.onScroll), TRC.dom.off(document, 'keydown', this.onEndKey), this.observerTargets.forEach(e => {
                        TRC.intersections.unobserve(e);
                    });
                }
                enableLateRender() {
                    this.isFastScroller = !0, this.lateRenderEnabled = !0;
                }
                observeScroll() {
                    this.cardOne && 0 !== this.cardOne.length || (this.cardOne = this.infiniteScrollEngine.origContainer.querySelector('[data-card-index="1"]'), this.cardOne && this.observeCard(this.cardOne, this.saveCardVisibilityTime.trcBind(this, 'cardOneTime'))), this.detectCard && 0 !== this.detectCard.length || (this.detectCard = this.infiniteScrollEngine.origContainer.querySelector(`[data-card-index="${ this.detectCardNumber }"]`), this.detectCard && this.observeCard(this.detectCard, this.saveCardVisibilityTime.trcBind(this, 'detectCardTime'))), this.detectCardTime && this.cardOneTime && (this.detectCardTime - this.cardOneTime < this.fastScrollerTime && this.enableLateRender(), this.unTrackFastScroller());
                }
                observeCard(e, t) {
                    const i = {
                            targetElement: e,
                            onEnter: t,
                            threshold: 0.5
                        }, r = TRC.intersections.observe(i);
                    this.observerTargets.push(r);
                }
                saveCardVisibilityTime(e) {
                    this[e] || (this[e] = new Date().getTime());
                }
                endKeyHandler() {
                    const e = window.event, {
                            keyCode: t,
                            metaKey: i
                        } = e;
                    this.lateRenderEnabled || (35 === t || i && 40 === t) && (this.unTrackFastScroller(), this.enableLateRender());
                }
                handleGetNextBatch() {
                    this.getNextBatchTime = new Date().getTime();
                }
                handleBatch(e, t) {
                    const i = t.trc.vl.length;
                    void 0 === this.numOfCards && (this.numOfCards = 0), this.numOfCards += i, this.isPreventScroll = !1, this.numOfCards >= this.maxCards && (this.numOfCards = 0, this.isPreventScroll = !0, this.isEnableLateRender = !0, this.preventScrollBelowAnchor()), this.stopListenToBatch || this.stopListenToScrollForPrevent();
                }
                listenToScrollForPrevent() {
                    this.onScrollForPrevent = this.observeScrollForPrevent.trcBind(this), TRC.dom.on(window, 'scroll', this.onScrollForPrevent), this.stopListenToBatch = !1;
                }
                stopListenToScrollForPrevent() {
                    TRC.dom.off(window, 'scroll', this.onScrollForPrevent), TRC.dom.off(document, 'keydown', this.onEndKeyOnPreventScroll), this.stopListenToBatch = !0, clearTimeout(this.timeout);
                }
                observeScrollForPrevent() {
                    const e = new Date().getTime();
                    if (e - this.scrollEventTime < this.scrollThrottleTime)
                        return;
                    const t = TRC.dom.getScrollTop(window), i = this.prevPosition > t, r = this.infiniteScrollEngine.parentContainerId, n = document.getElementById(`${ r }-pl${ this.infiniteScrollEngine.numPlacements - 1 }`).scrollHeight, o = window.innerHeight - n / 1.5, a = TRC.PreventReachingTheFooter.getOffsetFromTopOfPage(this.loadNextBatchAnchorContainer), s = a < t + o;
                    if (!i && s && this.shouldPreventScrolling) {
                        const e = a - o;
                        window.scrollTo(TRC.PreventReachingTheFooter.getWindowScrollLeft(), e), this.timeoutEnabled || this.enableScrollBelowAnchorOnTimeout();
                    }
                    this.prevPosition = TRC.dom.getScrollTop(window), this.scrollEventTime = new Date().getTime();
                }
                enableScrollBelowAnchorOnTimeout() {
                    this.timeout = setTimeout(() => {
                        this.shouldPreventScrolling = !1;
                    }, this.scrollTimeoutLength), this.timeoutEnabled = !0;
                }
                preventScrollBelowAnchor() {
                    this.shouldPreventScrolling = !0, clearTimeout(this.timeout), this.timeoutEnabled = !1;
                }
                static getWindowScrollLeft() {
                    return window.scrollX ? window.scrollX : document.documentElement.scrollLeft;
                }
                static getOffsetFromTopOfPage(e) {
                    return e.getBoundingClientRect().top + window.pageYOffset;
                }
                listenToKeysOnPreventScroll() {
                    this.onEndKeyOnPreventScroll = this.endKeyHandlerOnPreventScroll.trcBind(this), TRC.dom.on(document, 'keydown', this.onEndKeyOnPreventScroll);
                }
                endKeyHandlerOnPreventScroll(e) {
                    const t = e || window.event, {
                            keyCode: i,
                            metaKey: r
                        } = t;
                    (35 === i || r && 40 === i) && window.scrollTo(0, TRC.PreventReachingTheFooter.getOffsetFromTopOfPage(this.loadNextBatchAnchorContainer) - window.innerHeight);
                }
                shouldLateRender(e) {
                    return this.isFastScroller && this.isEnableLateRender && e < this.lateRenderTimeout;
                }
                preparePreventScroll(e) {
                    this.trcResponseTime = new Date().getTime();
                    const t = this.trcResponseTime - this.getNextBatchTime;
                    if (!this.shouldLateRender(t))
                        return void this.infiniteScrollEngine.onTrcResponse(e);
                    const i = this.lateRenderTimeout - t;
                    setTimeout(this.infiniteScrollEngine.onTrcResponse.trcBind(this.infiniteScrollEngine, e), i), this.trcResponseTime = null, this.getNextBatchTime = null, this.isWaitToHide = !0, this.isPreventScroll && (this.listenToScrollForPrevent(), this.listenToKeysOnPreventScroll());
                }
                disable() {
                    this.infiniteScrollEngine.hideLoadingSpinner(), this.isPreventScroll = !1, this.stopListenToScrollForPrevent();
                }
                static init(e, t) {
                    e.preventReachingTheFooter = new TRC.PreventReachingTheFooter({
                        timeout: t.timeout,
                        fastScrollerTime: t.fastScrollerTime,
                        maxCards: t.maxCards,
                        detectCardNumber: t.detectCardNumber,
                        infiniteScrollEngine: e,
                        trcManager: TRCImpl,
                        scrollTimeoutLength: t.scrollTimeoutLength,
                        scrollThrottleTime: t.scrollThrottleTime
                    });
                }
            }
            TRC.PreventReachingTheFooter = e;
        })(), (() => {
            const e = 5, t = 1000, i = 100;
            class r {
                constructor(r, n, o, a) {
                    this.parentFeed = r, this.trcManager = n, this.options = a, this.container = r.container, this.origContainer = this.container, this.pendingPublisherCardsList = [], this.feedDynamicParameters = this.options.feedDynamicParameters, this.shouldStopFeedOnMissingPublisherCard = this.feedDynamicParameters && 'STOP' === this.feedDynamicParameters.missingPublisherCardFeedStrategy || 'STOP' === this.trcManager.global['missing-publisher-card-feed-strategy'], this.shouldSendCardEvents = !(this.feedDynamicParameters && this.feedDynamicParameters.disableSendingCardEvents || this.trcManager.global['disable-sending-card-events']), this.publisherCardMaxRetries = n.global['feed-split-max-retries'] || e, this.publisherCardRetryInterval = n.global['feed-split-retry-interval'] || t, this.feedCardEventsMaxRetries = n.global['feed-card-events-max-retries'] || e, this.feedCardEventsRetryInterval = n.global['feed-card-events-retry-interval'] || t, this.feedCardEventsMinContainerHeight = n.global['feed-card-events-min-container-height'] || i;
                }
                handlePendingPublisherCards(e = (() => {
                    return 0;
                })(), t, i, r) {
                    const n = (i = i || this.pendingPublisherCardsList[0]).trcResponse, o = r ? 'spl' : 'pcp', a = n[o], s = a.tps, l = a.sun || a.pun;
                    let c, d = !1;
                    try {
                        c = document.querySelector(s);
                    } catch (e) {
                        __trcWarn(`Exception while trying to find publisher card with selector ${ s }: ${ e }`), d = !0;
                    }
                    if (!c || !c.parentNode)
                        return this.parentFeed.setIsAllowedToRequestMoreContent(!1), void (e < this.publisherCardMaxRetries && !d ? (e++, setTimeout(this.handlePendingPublisherCards.trcBind(this, e, t, i, r), this.publisherCardRetryInterval)) : (e = 0, this.pendingPublisherCardsList.shift(), this.pendingPublisherCardsList.length ? setTimeout(this.handlePendingPublisherCards.trcBind(this, e, t, this.pendingPublisherCardsList[0], r), this.publisherCardRetryInterval) : (r || this.shouldStopFeedOnMissingPublisherCard ? this.parentFeed.stopScrolling() : (this.pendingPublisherCardsList = [], this.parentFeed.setIsAllowedToRequestMoreContent(!0), TRC.dispatch('resumeFeedRendering')), TRC.modDebug.logMessageToServer(1, `Load publisher card: ${ l } on Card: ${ t } with the anchor element selector: ${ s } failed after ${ this.publisherCardMaxRetries } retries`, {
                            idx: 'pc',
                            pc: l,
                            st: 0,
                            sel: s,
                            slot: t,
                            plat: this.trcManager.getPlatformCode()
                        }))));
                    this.createFeedContainerForResumeAfterPublisherCard(c, a), this.shouldSendCardEvents && !r && this.pendingPublisherCardsList.forEach(this.initCardEventsManager.trcBind(this)), TRC.modDebug.logMessageToServer(2, `Load publisher card: ${ l } on Card: ${ t } with the anchor element selector: ${ s } succeed`, {
                        idx: 'pc',
                        pc: l,
                        st: 1
                    }), this.pendingPublisherCardsList = [], this.parentFeed.setIsAllowedToRequestMoreContent(!0), e > 0 && TRC.dispatch('resumeFeedRendering');
                }
                initCardEventsManager(e, t = (() => {
                    return 0;
                })()) {
                    const i = e.trcResponse.pcp.tps, r = document.querySelector(i);
                    if (!r)
                        return void (t < this.publisherCardMaxRetries && (t++, setTimeout(this.initCardEventsManager.trcBind(this, e, t), this.feedCardEventsRetryInterval)));
                    const n = new TRC.CardEventsManager(this.trcManager, this.options, e, r);
                    this.checkIfCardRendered(n, r);
                }
                createFeedContainerForResumeAfterPublisherCard(e, t) {
                    const i = document.createElement('div'), n = this.parentFeed.container;
                    if (this.parentFeed.numContainers++, this.parentFeed.switchMainContainer(i), this.parentFeed.setMainContainerCssClassesAndAttributes(i, this.options), e.parentNode.insertBefore(i, e.nextElementSibling), t && (TRC.util.isTrue(t.scw) || TRC.util.isTrue(t.acw)) && (this.setPublisherCardContainerStyle(i), TRC.dom.on(window, 'resize', this.setPublisherCardContainerStyle.trcBind(this, i))), r.sendWarnIfAnchorIsIncorrectlyPositioned(n, e), this.parentFeed.isFullWidthMobileFeed(this.options)) {
                        const e = this.parentFeed.getMobileFullWidthMarginsCss(this.parentFeed.numContainers);
                        e && TRC.dom.injectStyle(e, null);
                    }
                }
                static sendWarnIfAnchorIsIncorrectlyPositioned(e, t) {
                    const i = t.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
                    i < r && __trcWarn('anchor element is above the original feed container');
                }
                static getContainerWidth(e) {
                    return getComputedStyle(e).width;
                }
                getPageDirection() {
                    return 'rtl' === this.trcManager.direction ? 'right' : 'left';
                }
                setPublisherCardContainerMargin(e) {
                    const t = this.getPageDirection(), i = this.origContainer.getBoundingClientRect()[t], r = e.getBoundingClientRect()[t];
                    let n, o = 1;
                    if (i === r)
                        return;
                    'right' === t ? (n = 'marginRight', o = -1) : n = 'marginLeft';
                    const a = parseInt(getComputedStyle(e)[n], 10), s = i - r, l = (s + a) * o;
                    e.style[n] = `${ l }px`;
                }
                setPublisherCardContainerStyle(e) {
                    const t = r.getContainerWidth(this.origContainer), i = r.getContainerWidth(e), {feedDynamicParameters: n} = this.options, o = n && n.disableFeedSplitContainerAlignment || this.trcManager.global['disable-feed-split-container-alignment'], a = t === i;
                    a && o || (a || (e.style.width = t), o || this.setPublisherCardContainerMargin(e));
                }
                registerPublisherCardForHandling(e) {
                    this.pendingPublisherCardsList.unshift(e);
                }
                checkIfCardRendered(e, t, i = (() => {
                    return 0;
                })()) {
                    t.getBoundingClientRect().height < this.feedCardEventsMinContainerHeight ? i < this.feedCardEventsMaxRetries && (i++, setTimeout(this.checkIfCardRendered.trcBind(this, e, t, i), this.feedCardEventsRetryInterval)) : e.handleRenderedCard(t);
                }
            }
            TRC.PublisherCardsManager = r;
        })(), (() => {
            const e = 'trc-w2f', t = 'trc-w2f-no-ui';
            class i {
                constructor(e, t, i) {
                    this.parentFeed = e, this.trcManager = t, this.hasFeedUI = i, this.setUpFeedContainer(), TRC.listen('trcResponseHandled', this.setContentTypeCssClass.trcBind(this));
                }
                setUpFeedContainer() {
                    const i = this.parentFeed.container;
                    i.className += ` ${ e }`, !1 === this.hasFeedUI && (i.className += ` ${ t }`);
                }
                setContentTypeCssClass() {
                    const e = this.parentFeed.container, t = e.querySelectorAll('.videoCube.syndicatedItem').length, i = e.querySelectorAll('.videoCube:not(.syndicatedItem)').length;
                    let r = 'sponsored';
                    i && (r = t ? 'hybrid' : 'organic'), this.parentFeed.container.className = this.parentFeed.container.className.replace(/\btrc-content-(hybrid|sponsored|organic)\b/g, ''), this.parentFeed.container.className += ` trc-content-${ r }`;
                }
                addHeaderToFeed(e) {
                    this.parentFeed.header.appendChild(e), this.header = e;
                }
                addFooterToFeed(e) {
                    this.footer = document.createElement('div'), this.footer.className = 'tbl-feed-footer', this.footer.appendChild(e), this.parentFeed.container.appendChild(this.footer);
                }
                getHeader() {
                    return this.header;
                }
                getFooter() {
                    return this.footer;
                }
                applyWidgetHeaderAndFooterStylesToFeed(t) {
                    if (this.headerAndFooterStylesApplied)
                        return;
                    const i = new RegExp(`(\\.${ t })([^{]+\\.(trc_rbox_header|logoDiv|trc-widget-footer))`, 'g'), r = new RegExp(`^(?![^}]*.${ e }[^{]+).*$`, 'gm');
                    TRC.dom.injectedStyles.forEach(t => {
                        if (!i.test(t.innerText))
                            return;
                        let n = t.innerText.replace(i, `.${ e }$2`);
                        n = (n = (n = (n = n.replace(/\n/g, '')).replace(/}/g, '}\n')).replace(r, '')).replace(/\n/g, ''), TRC.dom.injectStyle(n, document);
                    }), this.headerAndFooterStylesApplied = !0;
                }
            }
            TRC.WidgetToFeedHelper = i;
        })(), (() => {
            const e = {
                TABOOLA_REMINDER: {
                    name: 'taboola_reminder',
                    responseKey: 'taboola-reminder',
                    contentElementId: 'tbl-taboola-reminder-inner',
                    moduleFileName: 'taboola-reminder',
                    moduleClass: 'TaboolaReminder',
                    closeBtn: 'tbl-taboola-reminder-closeBtn',
                    closeBtnWrapper: 'tbl-taboola-reminder-closeBtn-wrapper'
                },
                NEXT_UP: {
                    name: 'next_up',
                    responseKey: 'next-up-widget',
                    contentElementId: 'tbl-next-up-inner',
                    moduleFileName: 'next-up-widget',
                    moduleClass: 'NextUpWidget',
                    closeBtn: 'tbl-next-up-closeBtn',
                    closeBtnWrapper: 'tbl-next-up-closeBtn-wrapper'
                }
            };
            class t {
                constructor(e, i, r) {
                    t.isFloatingUnitOn ? __trcWarn('Floating Unit: Trying To Add More Than One Floating Unit') : (t.isFloatingUnitOn = !0, this.formattedResponse = e, this.placementData = i, this.trcManager = r, this.videoList = this.formattedResponse.trc['video-list'], this.unit = t.getUnitByResponseKey(this.videoList), this.contentSelector = `#${ this.unit.contentElementId }`, this.sendSupplyEvent('RENDERED'), this.initFloatingUnit());
                }
                sendSupplyEvent(e, t = (() => {
                    return null;
                })(), i = (() => {
                    return null;
                })()) {
                    const r = {
                        event_type: this.unit.name,
                        event_state: e,
                        event_value: t,
                        event_msg: i
                    };
                    TRCImpl.sendEvent('supply-feature', { d: JSON.stringify(r) }, null);
                }
                static getUnitByResponseKey(t) {
                    let i;
                    return Object.keys(e).some(r => {
                        const n = e[r];
                        return !!t[n.responseKey] && (i = n, !0);
                    }), i;
                }
                initFloatingUnit() {
                    this.createElementForFloatingUnitContent(), this.setFloatingUnitOptions(), this.definePlacementDataContainerSelector(), this.lazyLoadModules();
                }
                definePlacementDataContainerSelector() {
                    this.placementData['container-selectors'] = [{
                            container: this.contentSelector,
                            location: 'first',
                            shouldCreateContainer: !0,
                            isFloatingUnit: !0
                        }];
                }
                setFloatingUnitOptions() {
                    this.floatingUnitOptions = this.videoList[this.unit.responseKey] || {}, this.floatingUnitOptions.unit = this.unit;
                }
                setNextUpSpecificOptions() {
                    this.floatingUnitOptions.nupOverlayConfig = this.trcManager.global['nup-overlay-config'] ? JSON.parse(this.trcManager.global['nup-overlay-config']) : {};
                }
                lazyLoadModules() {
                    TRC.ModuleLoader.load('floating-unit', TRC.FloatingUnit, (() => {
                        this.lazyLoadChildClass();
                    }).trcBind(this));
                }
                lazyLoadChildClass() {
                    this.unit.responseKey === e.NEXT_UP.responseKey && this.setNextUpSpecificOptions(), TRC.ModuleLoader.load(this.unit.moduleFileName, TRC[this.unit.moduleClass], (() => {
                        const e = TRC[this.unit.moduleClass];
                        new e(this.floatingUnitOptions, this.trcManager, this.contentElement), this.trcManager.initRBoxDrawingIfPlacementEligible(this.placementData);
                    }).trcBind(this));
                }
                createElementForFloatingUnitContent() {
                    const e = document.createElement('div');
                    e.id = this.unit.contentElementId, e.className = this.unit.contentElementId, TRC.dom.addClass(e, 'tbl-hidden'), this.contentElement = document.body.appendChild(e);
                }
                static isFloatingUnit(e) {
                    return e && !!t.getUnitByResponseKey(e);
                }
            }
            t.isFloatingUnitOn = !1, TRC.FloatingUnitGenerator = t;
        })(), function () {
            var t = 1000075, i = {}, r = '', n;
            function o(e, o, a, s, h) {
                var u;
                r = l(), n = TRCImpl.additional_data && TRCImpl.additional_data.sdkd || {};
                var m = c(), g = s.global['fraud-detection-script-url'] || 'https://js.ad-score.com/score.min.js?pid=' + t + '#', f = i = {
                        tid: d(),
                        l1: e,
                        l4: a,
                        uid: o,
                        pub_domain: m,
                        ref: a
                    };
                n.appid ? f['l3'] = f['pub_app'] = n.appid : f['l3'] = TRC.platform_code, u = TRC.URL.prototype.switchProtocol.call(g, TRC.PROTOCOL) + TRC.util.keys(f).map(function (e) {
                    return encodeURIComponent(e) + '=' + encodeURIComponent(f[e]);
                }).join('&'), this.isInitialized = !0, p(u, {
                    impressionUTID: {
                        enabled: !0 === s.global['fraud-enable-impression-utid'],
                        publisherId: e,
                        userId: o,
                        viewId: h
                    }
                });
            }
            function a(r, n, o, a, s, l) {
                setTimeout(function () {
                    try {
                        if (TRC.clickFraudDetect.isLoaded) {
                            var c = {}, d = TRC.clickFraudDetect.impressionUTID;
                            TRC.util.keys(i).forEach(function (e) {
                                c[e] = i[e];
                            }), c['pid'] = '' + t, c['l2'] = r, c['l3'] = c['l3'] || TRC.platform_code, c['l4'] = a, c['l5'] = s, c['l6'] = 'clicked', c['uid'] = n, c['utid'] = d ? d + '_' + o : o, c['isTRCUrl'] = l, adScore('send', 'adclick', {}, c);
                        } else
                            __trcWarn('Fraud script did not render', e);
                    } catch (e) {
                        __trcWarn('fraudScriptCallback: Error in fraud detection', e);
                    }
                }, 0);
            }
            function s() {
                return TRC.MobileSdk.isEnabled();
            }
            function l() {
                if (!s())
                    return TRC.isAMP && window.context && window.context.canonicalUrl || TRC.pageManager.getTopMostWindow().location.href;
                var e = TRC._taboolaClone && TRC._taboolaClone.filter(function (e) {
                    return !!e.url;
                });
                return e && e.url || window.location.href;
            }
            function c() {
                var e = document.createElement('a');
                return e.href = r || l(), e.hostname;
            }
            function d() {
                return s() ? '_InAPP' : 'PHON' === TRC.platform_code ? '_MW' : '_Desktop';
            }
            function h(e) {
                TRC.clickFraudDetect.isLoaded = !0, e.impressionUTID.enabled && u(e.impressionUTID);
            }
            function u(e) {
                var i = [
                    e.viewId,
                    e.publisherId,
                    e.userId
                ].join('-');
                if (e.publisherId && e.userId && e.viewId)
                    try {
                        window.adScore('set', 'utid', {}, {
                            pid: t,
                            utid: i
                        }), TRC.clickFraudDetect.impressionUTID = i;
                    } catch (e) {
                        __trcError('Failed to set fraud UTID on impression', e);
                    }
                else
                    __trcError('Error in clickFraudDetect.setImpressionUTID: missing parameters');
            }
            function p(e, t) {
                if (!TRC.botDetected)
                    try {
                        TRC.net.loadScript(e, 'js', h.bind(null, t), null, !0);
                    } catch (e) {
                        __trcWarn('loadFraudScript: Error appending fraud script', e);
                    }
            }
            TRC.clickFraudDetect = {
                init: o,
                fraudScriptCallback: a,
                isInitialized: !1,
                isLoaded: !1,
                impressionUTID: null
            };
        }(), TRC.util = function (win, doc) {
            var modObject = {
                    isType: function (e, t) {
                        return t = t.charAt(0).toUpperCase() + t.substr(1), Object.prototype.toString.call(e) == '[object ' + t + ']';
                    },
                    hasKeys: function (e) {
                        var t;
                        if (this.isType(e, 'object'))
                            if (Object.keys && !Object.propertyIsEnumerable('keys')) {
                                if (Object.keys(e).length > 0)
                                    return !0;
                            } else
                                for (t in e)
                                    if (e.hasOwnProperty(t))
                                        return !0;
                        return !1;
                    },
                    getRandomIds: function (e) {
                        for (var t = 0; t < e.len; t++)
                            e.arr[t] = e.prefix + Math.floor(Math.random() * Math.pow(10, e.strength) + 1) + e.suffix;
                    },
                    getHtmlDecodeText: (element = doc.createElement('div'), decodeSpecialCharacters = function () {
                        var e = {
                                amp: '&',
                                apos: '\'',
                                '#x27': '\'',
                                '#x2F': '/',
                                '#39': '\'',
                                '#47': '/',
                                lt: '<',
                                gt: '>',
                                nbsp: ' ',
                                quot: '"'
                            }, t = /&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi;
                        function i(t, i) {
                            return '#' === i[0] ? String.fromCharCode('x' === i[1].toLowerCase() ? parseInt(i.substr(2), 16) : parseInt(i.substr(1), 10)) : e[i] || t;
                        }
                        return function (e) {
                            return e.replace(t, i);
                        };
                    }(), function (e) {
                        if ('string' != typeof e)
                            return '';
                        if (!TRC.dom.isHtmlContent(e))
                            return e;
                        var t = decodeSpecialCharacters(e);
                        return TRC.dom.isHtmlContent(t) ? (element.innerHTML = encodeURI(e), t = element.textContent || element.innerText, decodeURI(t)) : t;
                    }),
                    isEmptyString: function (e) {
                        return !e || /^\s*$/.test(e);
                    },
                    keys: function () {
                        'use strict';
                        if (Object.keys)
                            return function (e) {
                                return 'object' == typeof e || 'function' == typeof e && null !== e ? Object.keys(e) : [];
                            };
                        var e = Object.prototype.hasOwnProperty, t = !{ toString: null }.propertyIsEnumerable('toString'), i = [
                                'toString',
                                'toLocaleString',
                                'valueOf',
                                'hasOwnProperty',
                                'isPrototypeOf',
                                'propertyIsEnumerable',
                                'constructor'
                            ], r = i.length;
                        return function (n) {
                            if ('object' != typeof n && ('function' != typeof n || null === n))
                                return [];
                            var o = [], a, s;
                            for (a in n)
                                e.call(n, a) && o.push(a);
                            if (t)
                                for (s = 0; s < r; s++)
                                    e.call(n, i[s]) && o.push(i[s]);
                            return o;
                        };
                    }(),
                    merge: function (e) {
                        'use strict';
                        if (void 0 === e || null === e || e.constructor !== Object)
                            return null;
                        for (var t = TRC.util, i = 1; i < arguments.length; i++) {
                            var r = arguments[i];
                            if (void 0 !== r && null !== r && r.constructor === Object)
                                for (var n = t.keys(r), o = 0, a, s = n.length; o < s; o++)
                                    e[a = n[o]] = r[a];
                        }
                        return e;
                    },
                    debounce: function (e, t, i, r) {
                        var n;
                        return function () {
                            var o = r || window, a = arguments, s = function () {
                                    n = null, i || e.apply(o, a);
                                }, l = i && !n;
                            clearTimeout(n), n = setTimeout(s, t), l && e.apply(o, a);
                        };
                    },
                    preprocessJsonString: function (e) {
                        return 'string' != typeof e ? '' : ([
                            {
                                regex: /({|\[)\s*'/g,
                                replace: '$1"'
                            },
                            {
                                regex: /'\s*(:|}|,|\])/g,
                                replace: '"$1'
                            },
                            {
                                regex: /(:|,)\s*'/g,
                                replace: '$1"'
                            },
                            {
                                regex: /(?:([^"\s:\[{,])"([^"\s:,\]}]))/g,
                                replace: '$1\\"$2'
                            }
                        ].forEach(function (t) {
                            e = e.replace(t.regex, t.replace);
                        }), e);
                        var t;
                    },
                    jsonParseWithNative: function (e) {
                        try {
                            return JSON.parse(e);
                        } catch (t) {
                            return TRC.util.jsonParseWithEval(e);
                        }
                    },
                    jsonParseCustomNative: function (e) {
                        if (win.TRCImpl && win.TRCImpl.global && TRC.util.isTrue(TRCImpl.global['enable-json-parse-preprocess']))
                            try {
                                return JSON.parse(TRC.util.preprocessJsonString(e));
                            } catch (t) {
                                return __trcWarn('JSON Preprocess failed: \'' + e + '\''), null;
                            }
                        return TRC.util.jsonParseWithEval(e);
                    },
                    jsonParseWithEval: function (text) {
                        try {
                            return eval('(' + String(text) + ')');
                        } catch (e) {
                            throw new Error('JSON parse error - invalid input!');
                        }
                    },
                    isNativeFunction: function (e) {
                        return /\{\s*\[native code\]\s*\}/.test('' + e);
                    },
                    filterObj: function (e, t) {
                        var i = {};
                        for (var r in t)
                            t.hasOwnProperty(r) && e.call(this, t[r], r, t) && (i[r] = t[r]);
                        return i;
                    },
                    textIsRTL: function (e) {
                        if (!e)
                            return !1;
                        var t = 'A-Za-zÀ-ÖØ-öø-ʸ̀-\u0590ࠀ-\u1FFFⰀ-\uFB1C︀-\uFE6F\uFEFD-ï', i = '֑-\u07FFיִ-\uFDFFﹰ-ﻼ', r = e.match(new RegExp('^[^' + t + i + ']*(?:([' + t + ']+)|([' + i + ']+))'));
                        return !(!r || !r[2]);
                    },
                    isArray: function (e) {
                        return !(!e || Array !== e.constructor);
                    },
                    map: function (e, t, i) {
                        if (Array.prototype.map)
                            return e.map(t, i);
                        var r, n, o;
                        if (null == e)
                            throw new TypeError(' array is null or not defined');
                        var a = Object(e), s = a.length >>> 0;
                        if ('function' != typeof t)
                            throw new TypeError(t + ' is not a function');
                        for (arguments.length > 1 && (r = i), n = new Array(s), o = 0; o < s;) {
                            var l, c;
                            o in a && (l = a[o], c = t.call(r, l, o, a), n[o] = c), o++;
                        }
                        return n;
                    },
                    isTrue: function (e) {
                        return 'true' === e || !0 === e || '1' === e;
                    },
                    isFalse: function (e) {
                        return !e || 'false' === e;
                    },
                    isNumber: function (e) {
                        if (TRC.util.isType(e, 'string')) {
                            if (!e.trim())
                                return !1;
                        } else if (!TRC.util.isType(e, 'number'))
                            return !1;
                        return e - e + 1 >= 0;
                    },
                    parseTimeout: function (e, t) {
                        var i;
                        return t = void 0 !== t ? t : -1, void 0 !== e ? parseInt(e, 10) : t;
                    },
                    splitUrlParts: (linkElement = document.createElement('a'), function (e) {
                        return e ? (linkElement.href = e, { search: linkElement.search }) : {};
                    }),
                    hashString: function (e) {
                        var t = 0;
                        if (0 == e.length)
                            return t;
                        for (var i = 0; i < e.length; i++) {
                            var r;
                            t = (t << 5) - t + e.charCodeAt(i), t &= t;
                        }
                        return t;
                    },
                    isPercentEnabled: (flags = {}, window._trcIsUTactive && (TRC._rolledFlagsByPercent = flags), function (e, t) {
                        if (void 0 === flags[t] || null === flags[t]) {
                            var i = Math.random();
                            flags[t] = 'true' === e[t] || i <= +e[t];
                        }
                        return flags[t];
                    }),
                    haveMutualKeys: function (e, t) {
                        if (!(e && TRC.util.hasKeys(e) && t && TRC.util.hasKeys(t)))
                            return !1;
                        var i = TRC.util.merge({}, e, t);
                        return Object.keys(i).length < Object.keys(e).length + Object.keys(t).length;
                    },
                    isAmp: function (e) {
                        return !!e.isAMP;
                    },
                    isMobileSDK: function (e) {
                        return !(!e.mobile || !e.mobile.reportClick);
                    },
                    isRboxEncapsulated: function (e) {
                        return !(!this.isAmp(e) && !this.isMobileSDK(e));
                    },
                    formatString: function (e, t) {
                        var i;
                        return i = t && 0 !== t.length ? e.replace(/\{(\d+)\}/g, function (e, i) {
                            var r = i[0];
                            return void 0 !== t[r] ? t[r] : e;
                        }) : e;
                    },
                    objectify: function (e, t) {
                        var i = {};
                        return t || (t = '.'), Object.keys(e).forEach(function (r) {
                            var n = {}, o = e[r];
                            Object.keys(o).forEach(function (e) {
                                var i = o[e];
                                if (-1 !== e.indexOf(t)) {
                                    var r = n, a = e.split(t).filter(function (e, t, i) {
                                            return r[e] = r[e] || {}, t + 1 === i.length || (r = r[e], !1);
                                        });
                                    r[a[0]] = i;
                                } else
                                    n[e] = i;
                            }), i[r] = n;
                        }), i;
                    }
                }, flags, linkElement, element, decodeSpecialCharacters;
            return modObject;
        }(window, document), void 0 === document.trcGetCurrentStyle && (document.trcGetCurrentStyle = function (e, t, i) {
            if ('string' == typeof e && (e = document.getElementById(e)), window.getComputedStyle) {
                var r = window.getComputedStyle(e, i);
                return r ? r.getPropertyValue(t) : i ? null : e.style[t];
            }
            return t = t.replace(/-(\w)/, function (e, t) {
                return t.toUpperCase();
            }), e.currentStyle[t];
        }), Function.prototype.trcBind || (Function.prototype.trcBind = Function.prototype.bind), void 0 === Function.prototype.trcThrottle && (Function.prototype.trcThrottle = function (e) {
            var t, i = this;
            return function () {
                var r = arguments;
                t && clearTimeout(t), t = setTimeout(function () {
                    i.apply(i, r);
                }, e);
            };
        }), void 0 === document.head && (document.head = document.getElementsByTagName('head')[0]), TRC.GoogleAds = function () {
            return 'object' == typeof window.console && console.log('TRC.GoogleAds is Deprecated'), {
                draw: function () {
                }
            };
        }, TRC.math = TRC.math || function (e, t) {
            function i(e, t, i) {
                return void 0 === i || 0 == +i ? Math[e](t) : (t = +t, i = +i, isNaN(t) || 'number' != typeof i || i % 1 != 0 ? NaN : (t = t.toString().split('e'), +((t = (t = Math[e](+(t[0] + 'e' + (t[1] ? +t[1] - i : -i)))).toString().split('e'))[0] + 'e' + (t[1] ? +t[1] + i : i))));
            }
            return {
                roundByDecimal: function e(t, i) {
                    var r = t / i, n = r.toFixed(0), o = r - n;
                    return n * i + i * Math.round(o);
                },
                round10: function (e, t) {
                    return i('round', e, t);
                }
            };
        }(window, document), (() => {
            const e = 'trc_rbox_div', t = 'videoCube', i = 'item-thumbnail-href', r = 'item-label-href';
            class n {
                constructor(e) {
                    this.trcManager = e, this.itemAppearanceTime = {};
                }
                static isEnabled(e) {
                    return TRC.util.isPercentEnabled(e.global, 'enable-rbox-heatmap');
                }
                captureItemTime(e) {
                    this.itemAppearanceTime[e] = Date.now();
                }
                captureAndSendClickData(o) {
                    if (!c(o) || s(o))
                        return;
                    const a = n.collectClickHeatmapCardData(o);
                    function s(e) {
                        return TRC.dom.closest(e.target, `a.${ i }`) || TRC.dom.closest(e.target, `a.${ r }`);
                    }
                    function l(e) {
                        return TRC.dom.closest(e.target, `.${ t }`);
                    }
                    function c(t) {
                        return TRC.dom.closest(t.target, `.${ e }`);
                    }
                    l(o) && (a['item-d'] = this.collectClickHeatmapItemData(o)), this.trcManager.sendEvent('heatmap', { d: JSON.stringify(a) }, {});
                }
                static collectEventTargetData(i, r) {
                    const o = r ? e : t, a = TRC.dom.containsClass(i.target, o), s = a ? i.target : TRC.dom.closest(i.target, `.${ o }`), l = s.getClientRects()[0], c = a ? {
                            x: 0,
                            y: 0
                        } : i.target.getClientRects()[0], [d, h] = n.getClickPoints(i, c), u = a ? d : Math.abs((c.x || c.left) - (l.x || l.left)) + d, p = a ? h : Math.abs((c.y || c.top) - (l.y || l.top)) + h;
                    return {
                        el: s,
                        x: u,
                        y: p,
                        h: l.height,
                        w: l.width
                    };
                }
                static collectClickHeatmapCardData(e) {
                    const t = n.collectEventTargetData(e, !0);
                    return {
                        x: t.x,
                        y: t.y,
                        h: t.h,
                        w: t.w,
                        'c-time': Math.floor(e.timeStamp)
                    };
                }
                collectClickHeatmapItemData(e) {
                    const t = n.collectEventTargetData(e, !1), i = this.itemAppearanceTime[t.el.video_data.id], r = {
                            x: t.x,
                            y: t.y,
                            h: t.h,
                            w: t.w,
                            slot: t.el.video_data.itemIndex,
                            'ap-time': i
                        };
                    return r;
                }
                static getClickPoints(e, t) {
                    if (i(e)) {
                        const i = {
                            x: t.x || t.left,
                            y: t.y || t.top
                        };
                        return [
                            e.touches[0].clientX - i.x,
                            e.touches[0].clientY - i.y
                        ];
                    }
                    return [
                        e.offsetX,
                        e.offsetY
                    ];
                    function i(e) {
                        return e.touches;
                    }
                }
            }
            TRC.Heatmap = n;
        })(), (() => {
            let e, t, i = 0.1, r = 0.3, n = !1;
            const o = [
                    '4',
                    '254'
                ], a = function ({
                    mybox: t,
                    containerElm: n,
                    boxesList: o
                }) {
                    e = o;
                    const a = !(!t.trcResponse || !t.trcResponse.vtag) && t.trcResponse.vtag, c = !!a.advancedVideoConfiguration && a.advancedVideoConfiguration;
                    if (!a || !s(a.unitType, c))
                        return !1;
                    if (c) {
                        const e = c['mid-article-hip-rbox-percent-inview-to-report'], t = c['mid-article-hip-min-percent-to-display'];
                        i = e ? Number(e) : i, r = t ? Number(t) : i;
                    }
                    l(t.id, n), n.classList.add('tbl-invisible'), TRC.listen('noAdjacInFirstWF', e => {
                        t.trcResponse.scac && (TRC.trcHipCloseUnit = TRC.trcHipCloseUnit ? TRC.trcHipCloseUnit : {}, TRC.trcHipCloseUnit[e.data] = !0), TRCImpl.sendAbTestEvent('HipLostNoAdjacInFirstWF', 'HipLost'), h(e.data);
                    });
                }, s = (e, t) => {
                    return (!t || 'true' !== t['mid-article-hip-opt-out']) && -1 !== o.indexOf(e.toString());
                }, l = (e, t) => {
                    c(e, t), d(e, t);
                }, c = (e, r) => {
                    const n = [];
                    for (let t = 10 * i; t <= 10; t++) {
                        const e = t / 100;
                        n.push(e);
                    }
                    const o = {
                        targetElement: r,
                        threshold: n,
                        onEnter: p.trcBind(this, e)
                    };
                    t = TRC.intersections.observe(o);
                }, d = (e, t) => {
                    const i = {
                            targetElement: t,
                            threshold: [r],
                            onEnter: u.trcBind(this, e),
                            disableDuplicatePrevention: !0
                        }, n = TRC.intersections.observe(i);
                    TRC.listen('adjacAdPlaying', m.trcBind(this, n)), TRC.listen('rBoxVisible', m.trcBind(this, n));
                }, h = t => {
                    const {container: i} = e[t];
                    i.classList.remove('tbl-invisible'), TRC.dispatch('rBoxVisible', t), TRC.trcHipContainersShowing = TRC.trcHipContainersShowing ? TRC.trcHipContainersShowing : {}, TRC.trcHipContainersShowing[t] = !0;
                }, u = (e, t) => {
                    TRCImpl.sendAbTestEvent('HipLostRboxInViewPort', Math.floor(100 * t.intersectionRatio)), h(e);
                }, p = (e, r) => {
                    r.intersectionRatio > i && !n ? (n = !0, TRCImpl.sendAbTestEvent('rboxViewPortIntersection', Math.floor(100 * r.intersectionRatio))) : r.intersectionRatio < i && n && (TRCImpl.sendAbTestEvent('rboxOutOfViewPort', Math.floor(100 * r.intersectionRatio)), m(t));
                }, m = e => {
                    TRC.intersections.unobserve(e);
                };
            TRC.HighImpactPlacement = { handleHighImpactPlacement: a }, window._trcIsUTactive && (TRC.HighImpactPlacement.reportRboxInViewPort = p, TRC.HighImpactPlacement.checkIfHIP = s), TRC.listen('beforeBoxRender', a);
        })(), function () {
            var e = 'trc_vp_els', t = 5;
            function i(e) {
                this.trcManager = e, this.sessionStorage = TRC.pageManager.getLocalStorageImplementation('strict-w3c-storage', 'session'), this.lastViewportElementData = this.getVPElementsHistory()[e.getItemId()], e.trcCache.enableCacheViaStorageFlag();
            }
            i.prototype.trackElement = function (e) {
                TRC.dom.on(e, 'click', this.storeElementPosition.trcBind(this, e));
            }, i.prototype.scrollToElementIfWasLastInViewPort = function (e) {
                var t, i = this.trcManager;
                this.lastViewportElementData && e.id === this.lastViewportElementData.id && (delete (t = this.getVPElementsHistory())[this.trcManager.getItemId()], this.storeVPElementsHistory(t), 'scrollRestoration' in window.history && (window.history.scrollRestoration = 'manual'), setTimeout(function () {
                    e.scrollIntoView(!1);
                    var t = {
                        abTestsEventType: 'simple',
                        name: 'backToFeed_backToCard',
                        type: __trcJSONify({
                            origViewId: e.placementData.cachedViewId,
                            viewId: TRC.pageManager.getPageData(),
                            placement: e.getAttribute('data-placement-name'),
                            cardIndex: e.getAttribute('data-card-index')
                        }),
                        eventTime: new Date().getTime()
                    };
                    i.sendEvent('abtests', { 'unescape-d': encodeURIComponent(__trcJSONify(t)) }, null, !1, null, null);
                }, 0));
            }, i.prototype.storeElementPosition = function (e) {
                var t = this.getVPElementsHistory();
                t[this.trcManager.getItemId()] = {
                    id: e.id,
                    s: new Date().getTime()
                };
                var i = {
                    abTestsEventType: 'simple',
                    name: 'backToFeed_exitFromCard',
                    type: __trcJSONify({
                        viewId: TRC.pageManager.getPageData(),
                        placement: e.getAttribute('data-placement-name'),
                        cardIndex: e.getAttribute('data-card-index')
                    }),
                    eventTime: new Date().getTime()
                };
                this.trcManager.sendEvent('abtests', { 'unescape-d': encodeURIComponent(__trcJSONify(i)) }, null, !1, null, null), this.storeVPElementsHistory(t);
            }, i.prototype.storeVPElementsHistory = function (t) {
                t = this.removeEntriesToLimit(t), this.sessionStorage.setValue(e, __trcJSONify(t));
            }, i.prototype.getVPElementsHistory = function () {
                var t = this.sessionStorage.getValue(e) || '{}';
                return TRC.util.jsonParseWithNative(t);
            }, i.prototype.removeEntriesToLimit = function (e) {
                var i = {}, r;
                if (TRC.util.keys(e).length <= t)
                    return e;
                for (var n in e)
                    e.hasOwnProperty(n) && (i[e[n].s] = n);
                for ((r = TRC.util.keys(i)).sort(); r.length > t;)
                    r.shift();
                for (var o in i)
                    i.hasOwnProperty(o) && -1 === r.indexOf(o) && delete e[i[o]];
                return e;
            }, TRC.HistoryManager = i;
        }(), (() => {
            const e = 'https://images.taboola.com/taboola/image/fetch';
            TRC.imageUtils = {
                getImageUrlBasedOnCloudinaryApi(t, i, r = (() => {
                    return e;
                })()) {
                    const n = this.cloudinaryEncoding(t);
                    return [
                        r,
                        i,
                        n
                    ].join('/');
                },
                cloudinaryEncoding(e) {
                    if (null === e || void 0 === e)
                        return '';
                    let t = void 0, i = void 0, r = '', n = 0;
                    const o = `${ e }`, a = o.length;
                    for (t = i = 0; n < a;) {
                        const e = o.charCodeAt(n);
                        let a = null;
                        e < 128 ? i++ : a = e > 127 && e < 2048 ? String.fromCharCode(e >> 6 | 192, 63 & e | 128) : String.fromCharCode(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128), null !== a && (i > t && (r += o.slice(t, i)), r += a, t = i = n + 1), n++;
                    }
                    return i > t && (r += o.slice(t, a)), escape(r);
                }
            };
        })(), function (e, t) {
            'use strict';
            if ('IntersectionObserver' in e && 'IntersectionObserverEntry' in e && 'intersectionRatio' in e.IntersectionObserverEntry.prototype)
                'isIntersecting' in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, 'isIntersecting', {
                    get: function () {
                        return this.intersectionRatio > 0;
                    }
                });
            else {
                var i = [];
                n.prototype.THROTTLE_TIMEOUT = 1000, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function (e) {
                    if (!this._observationTargets.some(function (t) {
                            return t.element == e;
                        })) {
                        if (!e || 1 != e.nodeType)
                            throw new Error('target must be an Element');
                        this._registerInstance(), this._observationTargets.push({
                            element: e,
                            entry: null
                        }), this._monitorIntersections();
                    }
                }, n.prototype.unobserve = function (e) {
                    this._observationTargets = this._observationTargets.filter(function (t) {
                        return t.element != e;
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
                }, n.prototype.disconnect = function () {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance();
                }, n.prototype.takeRecords = function () {
                    var e = this._queuedEntries.slice();
                    return this._queuedEntries = [], e;
                }, n.prototype._initThresholds = function (e) {
                    var t = e || [0];
                    return Array.isArray(t) || (t = [t]), t.sort().filter(function (e, t, i) {
                        if ('number' != typeof e || isNaN(e) || e < 0 || e > 1)
                            throw new Error('threshold must be a number between 0 and 1 inclusively');
                        return e !== i[t - 1];
                    });
                }, n.prototype._parseRootMargin = function (e) {
                    var t, i = (e || '0px').split(/\s+/).map(function (e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t)
                                throw new Error('rootMargin must be specified in pixels or percent');
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            };
                        });
                    return i[1] = i[1] || i[0], i[2] = i[2] || i[0], i[3] = i[3] || i[1], i;
                }, n.prototype._monitorIntersections = function () {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, 'resize', this._checkForIntersections, !0), s(t, 'scroll', this._checkForIntersections, !0), 'MutationObserver' in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))));
                }, n.prototype._unmonitorIntersections = function () {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, l(e, 'resize', this._checkForIntersections, !0), l(t, 'scroll', this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null));
                }, n.prototype._checkForIntersections = function () {
                    var e = this._rootIsInDom(), t = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function (i) {
                        var n = i.element, a = d(n), s = this._rootContainsTarget(n), l = i.entry, c = e && s && this._computeTargetAndRootIntersection(n, t), h = i.entry = new r({
                                time: o(),
                                target: n,
                                boundingClientRect: a,
                                rootBounds: t,
                                intersectionRect: c
                            });
                        l ? e && s ? this._hasCrossedThreshold(l, h) && this._queuedEntries.push(h) : l && l.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h);
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
                }, n.prototype._computeTargetAndRootIntersection = function (i, r) {
                    var n = e.getComputedStyle(i);
                    if (n && 'none' !== n.display) {
                        for (var o, a = d(i), s = p(i), l = !1; !l;) {
                            var h = null, u = 1 == s.nodeType ? e.getComputedStyle(s) : {};
                            if (!u || 'none' === u.display)
                                return;
                            if (s == this.root || s == t ? (l = !0, h = r) : s != t.body && s != t.documentElement && 'visible' != u.overflow && (h = d(s)), h && !(a = c(h, a)))
                                break;
                            s = p(s);
                        }
                        return a;
                    }
                }, n.prototype._getRootRect = function () {
                    var e;
                    if (this.root)
                        e = d(this.root);
                    else {
                        var i = t.documentElement, r = t.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: i.clientWidth || r.clientWidth,
                            width: i.clientWidth || r.clientWidth,
                            bottom: i.clientHeight || r.clientHeight,
                            height: i.clientHeight || r.clientHeight
                        };
                    }
                    return this._expandRectByRootMargin(e);
                }, n.prototype._expandRectByRootMargin = function (e) {
                    var t = this._rootMarginValues.map(function (t, i) {
                            return 'px' == t.unit ? t.value : t.value * (i % 2 ? e.width : e.height) / 100;
                        }), i = {
                            top: e.top - t[0],
                            right: e.right + t[1],
                            bottom: e.bottom + t[2],
                            left: e.left - t[3]
                        };
                    return i.width = i.right - i.left, i.height = i.bottom - i.top, i;
                }, n.prototype._hasCrossedThreshold = function (e, t) {
                    var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1, r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                    if (i !== r)
                        for (var n = 0; n < this.thresholds.length; n++) {
                            var o = this.thresholds[n];
                            if (o == i || o == r || o < i != o < r)
                                return !0;
                        }
                }, n.prototype._rootIsInDom = function () {
                    return !this.root || u(t, this.root);
                }, n.prototype._rootContainsTarget = function (e) {
                    return u(this.root || t, e);
                }, n.prototype._registerInstance = function () {
                    i.indexOf(this) < 0 && i.push(this);
                }, n.prototype._unregisterInstance = function () {
                    var e = i.indexOf(this);
                    -1 != e && i.splice(e, 1);
                }, TRC.IntersectionObserver = n, TRC.IntersectionObserverEntry = r;
            }
            function r(e) {
                this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect, i = t.width * t.height, r = this.intersectionRect, n = r.width * r.height;
                this.intersectionRatio = i ? n / i : this.isIntersecting ? 1 : 0;
            }
            function n(e, t) {
                var i = t || {};
                if ('function' != typeof e)
                    throw new Error('callback must be a function');
                if (i.root && 1 != i.root.nodeType)
                    throw new Error('root must be an Element');
                this._checkForIntersections = a(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function (e) {
                    return e.value + e.unit;
                }).join(' ');
            }
            function o() {
                return e.performance && performance.now && performance.now();
            }
            function a(e, t) {
                var i = null;
                return function () {
                    i || (i = setTimeout(function () {
                        e(), i = null;
                    }, t));
                };
            }
            function s(e, t, i, r) {
                'function' == typeof e.addEventListener ? e.addEventListener(t, i, r || !1) : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, i);
            }
            function l(e, t, i, r) {
                'function' == typeof e.removeEventListener ? e.removeEventListener(t, i, r || !1) : 'function' == typeof e.detatchEvent && e.detatchEvent('on' + t, i);
            }
            function c(e, t) {
                var i = Math.max(e.top, t.top), r = Math.min(e.bottom, t.bottom), n = Math.max(e.left, t.left), o = Math.min(e.right, t.right), a = o - n, s = r - i;
                return a >= 0 && s >= 0 && {
                    top: i,
                    bottom: r,
                    left: n,
                    right: o,
                    width: a,
                    height: s
                };
            }
            function d(e) {
                var t;
                try {
                    t = e.getBoundingClientRect();
                } catch (e) {
                }
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }), t) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }
            function h() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }
            function u(e, t) {
                for (var i = t; i;) {
                    if (i == e)
                        return !0;
                    i = p(i);
                }
                return !1;
            }
            function p(e) {
                var t = e.parentNode;
                return t && 11 == t.nodeType && t.host ? t.host : t;
            }
        }(window, document), TRC.intersections = function (e, t) {
            var i = 0, r = {}, n = {}, o = 'observeId';
            function a() {
            }
            function s(e, t) {
                if (TRC.util.isArray(e.threshold))
                    for (var i = 0; i < e.threshold.length; i++) {
                        var r = e.threshold[i];
                        -1 === t.indexOf(r) && t.push(e.threshold);
                    }
                else
                    -1 === t.indexOf(e.threshold) && t.push(e.threshold);
            }
            function l(e, i, r, n, o) {
                var a, s;
                return e.disableCheckOverlay || i !== TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE || (a = t.elementFromPoint(n - 1, o - 1) || t.elementFromPoint(n + 1, o + 1), isNaN(e.exactVisibleThresholdFromTop) || (s = t.elementFromPoint(n, r.boundingClientRect.top + e.exactVisibleThresholdFromTop)), c(a, r.target) || c(s, r.target) || (i = TRC.intersections.visibilityState.IN_VIEW_PORT_NOT_VISIBLE, r.intersectionRatio >= 1 && null !== a && TRC.intersections.observePolling(e))), i;
            }
            function c(e, t) {
                return e && (e === t || t.contains(e) || 'getAttribute' in e && e.getAttribute('data-tbl-friendly-overlay'));
            }
            function d(e, t, i, r) {
                return i.height >= r || e <= i.right && t <= i.bottom && t > 0;
            }
            function h(e) {
                var t, i;
                return c(u(e), e);
            }
            function u(e) {
                var i, r = p(e.getBoundingClientRect()), n = r.targetElementCenterX, o = r.targetElementCenterY;
                return t.elementFromPoint(n, o);
            }
            function p(e) {
                return m(e, ['mm']).mm;
            }
            function m(e, t) {
                var i = {};
                return t.forEach(function (t) {
                    i[t] = r(e, t);
                }), i;
                function r(e, t) {
                    switch (t) {
                    case 'lt':
                        return n(e, 0, 0);
                    case 'mt':
                        return n(e, 0.5, 0);
                    case 'rt':
                        return n(e, 1, 0);
                    case 'lm':
                        return n(e, 0, 0.5);
                    case 'mm':
                        return n(e, 0.5, 0.5);
                    case 'rm':
                        return n(e, 1, 0.5);
                    case 'lb':
                        return n(e, 0, 1);
                    case 'mb':
                        return n(e, 0.5, 1);
                    case 'rb':
                        return n(e, 1, 1);
                    default:
                        __trcWarn('intersections.getPointInElementByPosition - pos parameter not recognized. pos is: ' + t);
                    }
                }
                function n(e, t, i) {
                    return {
                        targetElementCenterX: e.left + Math.round((e.right - e.left) * t),
                        targetElementCenterY: e.top + Math.round((e.bottom - e.top) * i)
                    };
                }
            }
            function g(e, t) {
                t === TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE && TRC.intersections.unObservePolling(e);
            }
            function f(e, t, i) {
                t.onTrigger(e, t.observer, i, t.lastBoundingClientRect), g(i, t);
            }
            function b(e) {
                TRC.Timeout.clear(e.visibleTimeout), delete e.visibleTimeout;
            }
            function C(e, t, i) {
                t.isEnter && e.isVisible && ('function' != typeof t.visibleWidgetPredicate || t.visibleWidgetPredicate()) && (delete e.isVisible, e.visibilityReported = !0, f(e, t, i));
            }
            function T(e, t, i) {
                b(e), e.visibilityReported || C(e, t, i);
            }
            function v(e, t, i) {
                var r = TRCImpl && TRCImpl.global['visibility-intersection-api-delay'] || 1000, n = i === TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE && !e.visibleTimeout || TRC.intersections.forceEnableDelayedVisibilityState();
                t.enableDelayedVisibilityCheck ? n && (e.isVisible = !0, e.lastVisibleBoundingClientRect = t.lastBoundingClientRect, e.lastVisibleBoundingClientRect.pageXOffset = t.geometryOffsets.pageXOffset, e.lastVisibleBoundingClientRect.pageYOffset = t.geometryOffsets.pageYOffset, e.visibleTimeout = TRC.Timeout.set(T.trcBind(this, e, t, i), r)) : f(e, t, i);
            }
            function y(e, t, i) {
                var r = t.target, n, o, a, s, c;
                e.isEnter = t.isIntersecting, e.isExit = !e.isEnter, e.intersection = t.intersectionRatio, e.isEnter ? e.onEnter(t, r, e.observer) : e.isExit && (r.visibleTimeout && b(r), r.isVisible = !1, e.onExit(t, r, e.observer), TRC.intersections.unObservePolling(e));
                var h = p(n = t.boundingClientRect);
                return a = h.targetElementCenterX, s = h.targetElementCenterY, o = TRCImpl && TRCImpl.global['visibility-threshold-override'] || 0, c = l(e, c = t.isIntersecting && t.intersectionRatio >= o && d(a, s, t.intersectionRect, e.exactVisibleThresholdFromTop) ? TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE : t.isIntersecting ? TRC.intersections.visibilityState.IN_VIEW_PORT_NOT_VISIBLE : TRC.intersections.visibilityState.NOT_IN_VIEW_PORT, t, a, s), i.disableDuplicatePrevention ? v(r, e, c) : e.lastEventId && e.lastEventId === c || (v(r, e, c), e.lastEventId = c), c;
            }
            var R = {
                getPointsOnElement: m,
                TARGET_ATTRIB: o,
                visibilityState: {
                    IN_VIEW_PORT_VISIBLE: 1,
                    IN_VIEW_PORT_NOT_VISIBLE: 2,
                    NOT_IN_VIEW_PORT: 3
                },
                observe: function (e) {
                    var t, l, c, d = e.disableCheckOverlay ? [
                            0,
                            0.5
                        ] : [
                            0,
                            0.25,
                            0.5,
                            0.75,
                            1
                        ];
                    function h(t) {
                        for (var i, n = 0; n < t.length; n++) {
                            var a = t[n];
                            i = a.target.getAttribute(o).split(' ');
                            for (var s = 0; s < i.length; s++) {
                                var l = i[s], c = r[l];
                                c.lastBoundingClientRect = a.boundingClientRect, c.geometryOffsets = {
                                    pageXOffset: window.pageXOffset,
                                    pageYOffset: window.pageYOffset
                                }, c && c.observer.tblObserverKey === this.tblObserverKey && y(c, a, e);
                            }
                        }
                    }
                    if (e.targetElement && null !== e.threshold && (e.onEnter || e.onExit || e.onTrigger)) {
                        t = e.targetElement, l = 'tbl-observe-' + i, c = t.getAttribute(o) ? t.getAttribute(o) + ' ' + l : l, t.setAttribute(o, c), i++, s(e, d), r[l] = {
                            targetSelector: l,
                            targetElement: t,
                            isEnter: null,
                            isExit: null,
                            intersection: null,
                            disableCheckOverlay: e.disableCheckOverlay,
                            disableDuplicatePrevention: e.disableDuplicatePrevention,
                            enableDelayedVisibilityCheck: e.enableDelayedVisibilityCheck,
                            visibleWidgetPredicate: e.visibleWidgetPredicate,
                            exactVisibleThresholdFromTop: e.exactVisibleThresholdFromTop,
                            threshold: e.threshold,
                            onExit: e.onExit || a,
                            onEnter: e.onEnter || a,
                            onTrigger: e.onTrigger || a,
                            boundingClientRect: null
                        };
                        var u = {
                                root: e.rootSelector || null,
                                rootMargin: e.rootMargin || '0px',
                                threshold: e.threshold
                            }, p = TRC.util.hashString(JSON.stringify(u)), m;
                        return n[p] ? m = n[p] : (u.root = u.root && document.querySelector(u.root), m = TRC.IntersectionObserver ? new TRC.IntersectionObserver(h.trcBind(u), u) : new IntersectionObserver(h.trcBind(u), u), 'MutationObserver' in window || (m.POLL_INTERVAL = TRCImpl.global['intersections-polyfill-poll-interval'] || 500), u.tblObserverKey = m.tblObserverKey = p, n[p] = m), r[l].observer = m, m.observe(t), l;
                    }
                    __trcDebug('missing params for intersectionHandler');
                },
                isInViewPort: function (e) {
                    var t = TRCImpl.global['visibility-threshold'] || e.disableCheckOverlay ? [
                            0,
                            0.5
                        ] : [
                            0,
                            0.25,
                            0.5,
                            0.75,
                            1
                        ], i = {
                            rootSelector: e.rootSelector || null,
                            targetElement: e.targetElement,
                            threshold: t,
                            rootMargin: '0px',
                            disableCheckOverlay: e.disableCheckOverlay,
                            disableDuplicatePrevention: e.disableDuplicatePrevention,
                            enableDelayedVisibilityCheck: e.enableDelayedVisibilityCheck,
                            visibleWidgetPredicate: e.visibleWidgetPredicate,
                            exactVisibleThresholdFromTop: e.exactVisibleThresholdFromTop,
                            onTrigger: e.onTrigger,
                            onEnter: e.onEnter
                        };
                    return this.observe(i);
                },
                unobserve: function (e) {
                    var t = r[e], i, n;
                    if (t)
                        return n = (i = (t = r[e].targetElement).getAttribute(o).split(' ')).indexOf(e), 1 === i.length && (r[e].observer.unobserve(t), t.removeAttribute(o)), n > -1 && i.length > 1 && (i.splice(n, 1), t.setAttribute(o, i.join(' '))), delete r[e];
                    __trcLog('missing target element for unobserve');
                },
                unobserveAll: function (e) {
                    for (var t = e.split(' '), i = 0; i < t.length; i++)
                        this.unobserve(t[i]);
                },
                getIntersectionState: function () {
                    return r;
                },
                observePolling: function (e) {
                    var t = 500;
                    this.observedElementsInPolling[e.targetSelector] || (this.observedElementsInPolling[e.targetSelector] = {
                        target: e.targetElement,
                        state: e
                    }, e.underPolling = !0, this.observedElementsInPollingCounter++), this.observedElementsInPollingCounter > 0 && this.startPolling(t);
                },
                unObservePolling: function (e) {
                    this.observedElementsInPolling[e.targetSelector] && (delete this.observedElementsInPolling[e.targetSelector], this.observedElementsInPollingCounter--, e.underPolling = !1), 0 === this.observedElementsInPollingCounter && this.stopPolling();
                },
                stopPolling: function () {
                    clearInterval(this.pollingInterval), this.pollingInterval = null;
                },
                startPolling: function (e) {
                    this.pollingInterval || (this.pollingInterval = setInterval(function () {
                        var e, t = !1, i, r, n = R.observedElementsInPolling;
                        for (var o in n)
                            if (n.hasOwnProperty(o) && (t = h((e = n[o]).target))) {
                                i = e.target.getAttribute(R.TARGET_ATTRIB).split(' '), r = R.getIntersectionState();
                                for (var a = 0; a < i.length; a++) {
                                    var s = i[a];
                                    v(e.target, r[s], R.visibilityState.IN_VIEW_PORT_VISIBLE);
                                }
                                R.unObservePolling(e.state);
                            }
                    }, e));
                },
                observedElementsInPolling: {},
                observedElementsInPollingCounter: 0,
                forceEnableDelayedVisibilityState: function () {
                    return !1;
                }
            };
            return R;
        }(window, document), (() => {
            const e = 'tbl_creative_preview', t = 'tbl_should_override_all_slots', i = 'tbl_should_repeat_override_items', r = 'additional-properties', n = {
                    sentUsageLog: !1,
                    overriddenPlacements: {}
                }, o = !1, a = !0, s = {
                    autoTriggerConfig: {
                        hover: 'true',
                        viewabilityConfig: {
                            percentage: '5',
                            time: '0'
                        }
                    },
                    repeat: 'true',
                    scriptUrlTemplate: '//15.taboola.com/tbp?oid=15&pubid=166277&tagid=948107&pstn=[pstn]&cb=[cb]&callback={CALLBACK_NAME}',
                    unitBootSrc: '//vidstat.taboola.com/vpaid/units/{version}/creatives/creative_js.js'
                }, l = 'tbl_pvideo_version', c = '27_6_17', d = (e, t) => {
                    if (n.isEnabled(e)) {
                        const e = n.getNewItemFromUrl();
                        p(e);
                        const [i] = e, r = t && t.trc && t.trc.vl || [];
                        e && i && r.length && (y(e, t), n.handleOverrideItems(r, e));
                    }
                };
            n.handleOverrideItems = (e, i) => {
                let r;
                r = n.getValueFromUrl(t, o) ? b(e, i) : f(e, i[0].itemType), n.overrideItems(r, i);
            };
            const h = e => {
                    const t = e[r];
                    if (t)
                        try {
                            return __trcUnJSONify(t);
                        } catch (t) {
                            return __trcDebug(`invalid json in ${ e[r] }`), {};
                        }
                    return {};
                }, u = (e, t) => {
                    const i = h(e);
                    i && Object.keys(i).forEach(e => {
                        t[e] = i[e];
                    });
                };
            n.overrideItems = (e, t) => {
                e.length > 0 && t && e.forEach((i, r) => {
                    const o = r % t.length;
                    n.overrideItem(e[r], t[o]);
                });
            }, n.overrideItem = (e, t) => {
                e.thumbnail = t.thumbnail || '', e.title = t.title || '', e.description = t.description || '', e['branding-text'] = t['branding-text'] || '', e.uploader = t.uploader || '', u(t, e), e.url = '#';
            };
            const p = e => {
                if (!n.sentUsageLog) {
                    const t = e ? e.map(e => {
                        return e && e.creativeId || null;
                    }) : null;
                    TRC.RBoxUsage.logUsage('TRC.ItemOverride', {
                        extraData: {
                            creativeIds: t,
                            url: window.location.href
                        }
                    }), n.sentUsageLog = !0;
                }
            };
            n.isEnabled = e => {
                return e && n.isItemOverrideUrlParam();
            }, n.isItemOverrideUrlParam = () => {
                return location.search.indexOf(e) >= 0;
            };
            const m = (e, t) => {
                    return !!e[t] || !(e['is-syndicated'] || e['is-in-network'] || e['is-native']) && 'is-organic' === t;
                }, g = (e, t) => {
                    if (!t)
                        return e[0];
                    for (let i = 0; i < e.length; i++)
                        if (m(e[i], t))
                            return e[i];
                }, f = (e, t) => {
                    const {
                            overriddenPlacements: i = {}
                        } = n, r = [];
                    let o, a;
                    return e.forEach(e => {
                        a = e.uuip || e.uip;
                        const {v: n} = e;
                        n && a && !i[a] && (o = g(n, t)) && (r.push(o), i[a] = !0);
                    }), r;
                }, b = (e, t) => {
                    const r = n.getValueFromUrl(i, a), o = [];
                    return r || C(e, t), e.forEach(e => {
                        e.v && e.v.forEach(e => {
                            o.push(e);
                        });
                    }), o;
                }, C = (e, t) => {
                    let i = t.length;
                    for (let r = 0; r < e.length; r++) {
                        const t = e[r].v;
                        t && (t.length >= i ? T(e, r + 1, i) : (i -= t.length, r === e.length - 1 && i > 0 && v(t, i)));
                    }
                }, T = (e, t, i) => {
                    e.splice(t), e[t - 1].v.splice(i);
                }, v = (e, t) => {
                    for (let i = 0; i < t; i++)
                        e.push(Object.assign({}, e[0]));
                };
            n.getValueFromUrl = (e, t) => {
                try {
                    const i = TRC.URL.prototype.getParameter.call(window.location.search, e, decodeURIComponent);
                    let r = __trcUnJSONify(i);
                    return (void 0 === r || null === r && t) && (r = t), r;
                } catch (t) {
                    return __trcDebug(`invalid data in url param ${ e }`), null;
                }
            }, n.getNewItemFromUrl = () => {
                let t = n.getValueFromUrl(e);
                return Array.isArray(t) || (t = [t]), t;
            }, TRC.ItemOverride = { run: d }, window._trcIsUTactive && (TRC.ItemOverride.privateProps = n);
            const y = (e, t) => {
                const i = n.getValueFromUrl(l, c);
                s.unitBootSrc = s.unitBootSrc.replace('{version}', i);
                for (let r = 0; r < e.length; r++)
                    if (e[r] && e[r]['additional-properties'] && e[r]['additional-properties']['pvideo-url']) {
                        for (let e = 0; e < t.trc.vl.length; e++)
                            t.trc.vl[e].pvc = s;
                        return;
                    }
            };
        })(), function () {
            function e(e) {
                this._data = e;
            }
            e.prototype.getId = function () {
                return this._data.id;
            }, e.prototype.getLinkTarget = function () {
                return this._data.linkTarget;
            }, e.prototype.getUrl = function () {
                return this._data.url;
            }, e.prototype.getTitle = function () {
                return this._data.title;
            }, e.prototype.getType = function () {
                var e = this._data;
                return e['is-syndicated'] ? 'sponsored' : e['is-in-network'] ? 'exchange' : e['is-native'] ? 'native' : 'organic';
            }, e.prototype.getSlot = function () {
                return this._data.itemIndex;
            }, TRC.ItemParser = e;
        }(), (() => {
            class e {
                constructor(e, t = (() => {
                    return !1;
                })()) {
                    if (this.onlyClean = t, this.pm = TRC.pageManager, this.storageType = e.storageType || 'session', this.localStorage = this.pm.getLocalStorageImplementation('strict-w3c-storage', this.storageType), this.keyValueCache = null, this.cacheTtl = e.ttl || 1000 * 60 * 20, this.noTtl = e.noTtl || !1, this.cacheName = e.cacheName || 'key_value_cache', this.cacheUtils = new TRC.CacheUtils(this.localStorage, this.cacheName, this.cacheTtl), !localStorage)
                        return { isValidCache: !1 };
                    this.isValidCache = !0, this.init();
                }
                cacheData(e, t) {
                    const i = this.setCacheData(e, t);
                    return this.localStorage.setValue(this.cacheName, __trcJSONify(this.keyValueCache.getData())), i;
                }
                setCacheData(e, t) {
                    const i = new Date().getTime();
                    try {
                        this.keyValueCache.setValue(e, {
                            value: t,
                            s: i
                        }), !1 === this.noTtl && this.setCacheClean(e);
                    } catch (e) {
                        return !1;
                    }
                    return !0;
                }
                getCacheData(e) {
                    const t = this.keyValueCache.getValue(e);
                    return !0 === this.noTtl && t || t && !this.isOverTtl(this.keyValueCache.getValue(e).s) ? this.keyValueCache.getValue(e).value : null;
                }
                isOverTtl(e) {
                    return this.cacheUtils.isOverTtl(e);
                }
                setCacheClean(e) {
                    this.cacheUtils.setCacheClean(e, this.keyValueCache);
                }
                cleanCache(e) {
                    this.cacheUtils.cleanCache(e, this.keyValueCache, this);
                }
                removeKey(e) {
                    TRC.CacheUtils.removeKey(e, this.keyValueCache);
                }
                getKeyValueCache() {
                    return this.cacheUtils.getCache(this.pm);
                }
                init() {
                    if (this.onlyClean)
                        return this.localStorage.removeKey(this.cacheName), !1;
                    this.keyValueCache = this.getKeyValueCache();
                    const e = TRC.util.keys(this.keyValueCache.getData());
                    return this.cleanCache(e), !0;
                }
            }
            TRC.KeyValueCache = e;
        })(window, document), (() => {
            let e = !1, t = [];
            const i = TRC.LineClamp = {
                fixBoxOverflow(e, t, r, n, o, a, s, l) {
                    let c = !1;
                    if (null == e)
                        return;
                    if (s && (c = i.setupBoxLineClamp(e)))
                        return;
                    if (l && !c)
                        return __trcDebug('Skipping fixBoxOverflow due to feature flag.');
                    if (TRC.ellipsisPerf && console.timeStamp('Taboola old ellipsis'), e.clientHeight <= 0 || e.clientWidth <= 0)
                        return;
                    let d = !1;
                    e.parentNode.font = i.getFontSize(e);
                    const h = e.innerHTML;
                    e.innerText = '';
                    const u = i.add_span(null, 'H', e), p = Math.max(u.offsetHeight, u.clientHeight), m = Math.max(0, e.scrollHeight - e.clientHeight);
                    for (e.removeChild(u), TRC.dom.setContentToElement(e, h), i.addInlineElementsForMeasure(e.inlineDetailsElements, e, !0), e.inlineDetailsElementsHTML = e.innerHTML.replace(h, ''), t = t.replace(/^\s+|\s+$/g, ''); e.clientHeight + m + p / 2 < e.scrollHeight && t.length;)
                        d = !0, t = i.truncateOverflowingText(e, t, r), e.inlineDetailsElementsHTML && (e.innerHTML += e.inlineDetailsElementsHTML);
                    i.hideClonedElementsAfterMeasure(o, a), TRC.Browser.ie && !d && (e.style.height = 'auto');
                },
                setupBoxLineClamp(r) {
                    const n = parseInt(document.trcGetCurrentStyle(r, 'line-height'), 10), o = parseInt(document.trcGetCurrentStyle(r, 'height'), 10), a = n && o ? Math.round(o / n).toString() : null;
                    return !(!a || r.isRTL || 'rtl' === document.trcGetCurrentStyle(r, 'direction')) && (t.push({
                        domElm: r,
                        numLine: a
                    }), window._trcIsUTactive && (TRC._lineClampCache = t), !!e || (requestAnimationFrame(() => {
                        t.forEach(e => {
                            const t = e && e.domElm, r = e && e.numLine;
                            TRC.dom.addClass(t, 'trc_ellipsis'), TRC.css.utils.setStyleProperty(t, '-webkit-line-clamp', r, !1), t.parentNode.font = i.getFontSize(t);
                        }), e = !1, t = [];
                    }), e = !0, !0));
                },
                getFontSize(e) {
                    let t = 0, i = !1, r = document.trcGetCurrentStyle(e, 'font-size');
                    const n = [
                        'px',
                        'pt',
                        'em',
                        'ch'
                    ];
                    for (; !i && t < n.length;) {
                        if (r.indexOf(n[t])) {
                            switch (r = parseInt(r, 10), n[t]) {
                            case 'px':
                                break;
                            case 'pt':
                                r /= 0.75;
                                break;
                            case 'em':
                            case 'ch':
                                r *= 10;
                            }
                            i = !0;
                        }
                        t++;
                    }
                    return r;
                },
                add_span(e, t, i) {
                    const r = document.createElement('span');
                    return null != e && (r.className = e), null != t && ('object' == typeof t ? r.appendChild(t) : TRC.dom.setContentToElement(r, t)), void 0 !== i && i.appendChild(r), r;
                },
                addInlineElementsForMeasure(e, t, r) {
                    let n, o, a;
                    for (let s = 0; e && s < e.length; s++)
                        n = e[s], !(o = i.findElement(e => {
                            const i = e.className.search(n) >= 0 && e.parentNode === t;
                            return i;
                        }, t)) && n && ((a = document.createElement('span')).className = 'trc_inline_detail_spacer', a.innerHTML = ' ', t.appendChild(a), t.appendChild(r ? n.cloneNode(!0) : n));
                },
                findElement(e, t, i, r) {
                    void 0 === t && (t = document), void 0 === i && (i = '*');
                    const n = t.getElementsByTagName(i);
                    for (let o = 0; o < n.length; o++)
                        if (e(n[o]))
                            return n[o];
                    return r;
                },
                truncateOverflowingText(e, t, r) {
                    t = r && t.search(/\s/) >= 0 ? t.replace(/\s+\S+$/, '') : t.substr(0, t.length - 1);
                    const n = e.getElementsByTagName('bde');
                    let o;
                    e.inlineDetailsElementsHTML && n.length && (o = e.innerHTML.replace(e.inlineDetailsElementsHTML, ''), TRC.dom.setContentToElement(e, o)), e.getElementsByTagName('span').length > 0 && e.removeChild(e.getElementsByTagName('span')[0]);
                    const a = n.length > 0 ? n[0] : e;
                    return TRC.dom.setContentToElement(a, t), i.add_span(null, i.createEllipsis(), e), t;
                },
                hideClonedElementsAfterMeasure(e, t) {
                    let r, n;
                    for (let o = 0; e && o < e.length; o++)
                        r = e[o], (n = i.findElement(e => {
                            const i = e.className.search(r) >= 0 && e.parentNode === t;
                            return i;
                        }, t, 'span')) && (n.style.display = 'none');
                },
                createEllipsis: () => {
                    return document.createTextNode('\u2026');
                }
            };
        })(), function (e, t) {
            var i = {
                    source: '|v|h|c|t|s|p|o|z|video|home|category|text|search|photo|other|content_hub',
                    target: '|v|p|t|m|video|photo|text|mix|'
                }, r = 'v', n = function (e, t) {
                    return e = e.toLowerCase(), -1 !== i[t].indexOf('|' + e + '|') ? 'content_hub' === e ? 'z' : e.substr(0, 1) : (__trcError('illegal parameter "' + e + '" was passed to trc_ListOriginBuilder method: "set' + t.substr(0, 1).toUpperCase() + t.substr(1) + '" \nUsing "video" instead'), 'v');
                }, o = TRC.ListOriginBuilder = function (e, t) {
                    this.setSource(e || r), this.setTarget(t || 'v');
                };
            o.prototype.setSource = function (e) {
                r = n(e, 'source');
            }, o.prototype.getSource = function () {
                return r;
            }, o.prototype.setTarget = function (e) {
                this.target = n(e, 'target');
            }, o.prototype.getTarget = function () {
                return this.target;
            }, o.prototype.toString = function () {
                return (r + '2' + this.target).replace(/v2v/, 'blended');
            };
        }(window, document), TRC.multiWidget = {
            init({
                originalContainer: e,
                multiWidget: t,
                widgetOptions: i,
                initRBox: r,
                trcManager: n
            }) {
                const o = e;
                this.trcManager = n;
                const a = 'rtl' === this.trcManager.direction, s = [t];
                return e.parentNode ? (i.multiWidgetRecItems = [].slice.call(i.response.trc['video-list'].video), !i.multiWidgetRecItems.length && this.trcManager.global['mw-display-none-on-no-items-to-render'] && (e.style.display = 'none'), TRC.multiWidget.recursiveBuild.call(this, {
                    widgetsArr: s,
                    containerElm: o,
                    depth: 0,
                    parentLayout: s,
                    widgetOptions: i,
                    initRBox: r,
                    isRTL: a
                }), o.className += ' trc_multi_widget', o) : null;
            },
            recursiveBuild({
                widgetsArr: e,
                containerElm: t,
                depth: i,
                parentLayout: r,
                widgetOptions: n,
                initRBox: o,
                isRTL: a
            }) {
                r.isRTL = a, e.forEach(e => {
                    const s = __trcCopyProps(e, {});
                    if (s.children) {
                        if (!s.children.length)
                            return;
                        const e = TRC.multiWidget.createWrapper(s);
                        t.appendChild(e), t = e, TRC.multiWidget.addMargin(t.previousSibling, r), TRC.multiWidget.recursiveBuild.call(this, {
                            widgetsArr: s.children,
                            depth: i + 1,
                            parentLayout: s,
                            containerElm: t,
                            widgetOptions: n,
                            initRBox: o,
                            isRTL: a
                        });
                    } else {
                        const e = TRC.multiWidget.createWidget.call(this, {
                            layout: s,
                            widgetOptions: n,
                            initRBox: o,
                            isRTL: a
                        });
                        t.appendChild(e), TRC.multiWidget.addMargin(e.previousSibling, r);
                    }
                    s.flexSize && (s.container.style.msFlex = s.container.style.flex = s.flexSize, s.container.style.overflow = 'hidden');
                });
            },
            addMargin(e, {
                gap: t,
                orientation: i,
                isRTL: r
            }) {
                if (!e || !t)
                    return;
                const n = r ? 'Left' : 'Right', o = `margin${ 'V' === i ? 'Bottom' : n }`;
                e.style[o] = t;
            },
            createWrapper(e) {
                const t = document.createElement('div');
                return t.className += ' trc_multi_widget_container', 'V' === e.orientation && (t.style.msFlexDirection = t.style.flexDirection = 'column'), e.container = t, t;
            },
            createWidget({
                layout: e,
                widgetOptions: t,
                initRBox: i
            }) {
                e.container = document.createElement('div');
                const {
                    container: r,
                    name: n
                } = e;
                return this.ensureValidContainer(r), n && r.setAttribute('widget-name', n), t.mode_name = t.mode = t.response.trc['video-list']['base-mode'] = e.name, e.RBox = i.call(this, r, t), r;
            }
        }, TRC.net = function (e, t) {
            var i = [], r;
            return {
                loadScript: function (e, i, r, n, o) {
                    var a = t.getElementsByTagName('script')[0], s = null;
                    if ('js' == i)
                        (s = t.createElement('script')).type = 'text/javascript', s.src = TRC.shiftDomain(e), s.charset = 'UTF-8', n ? s.setAttribute('defer', 'defer') : o && s.setAttribute('async', 'async');
                    else {
                        if ('css' != i)
                            throw new Error('External reference loaded must be of type \'js\' or \'css\'!');
                        (s = t.createElement('link')).rel = 'stylesheet', s.type = 'text/css', s.href = e;
                    }
                    return 'function' == typeof r && (s.addEventListener('load', r, !1), s.addEventListener('error', r, !1)), a.parentNode.insertBefore(s, a), s;
                },
                fireSimpleHttpRequest: function (e) {
                    var t = new Image();
                    t.src = e, i.push(t);
                },
                fireBeaconHttpRequest: function (t) {
                    e.navigator && navigator.sendBeacon && navigator.sendBeacon(t);
                }
            };
        }(window, document), (() => {
            const e = {
                    timeStamp: 'tim=',
                    type: 'type=',
                    message: 'msg=',
                    debugLevel: 'llvl=',
                    id: 'id='
                }, t = TRC.PROTOCOL, i = function (e) {
                    const t = [];
                    return Object.keys(e).forEach(i => {
                        t.push(`${ encodeURIComponent(i) }=${ encodeURIComponent(e[i]) }`);
                    }), t.join('&');
                };
            let r = 0;
            function n() {
                return TRC.util.isPercentEnabled(TRCImpl.global, 'new-logging-mechanism-on');
            }
            function o(e, t) {
                t ? TRC.net.fireBeaconHttpRequest(e) : TRC.net.fireSimpleHttpRequest(e);
            }
            function a(e, i, r, o, a, l, c) {
                if (n() && window.SubtleCrypto)
                    return TRC.cryptoKeysManager.getPageViewUniqueID().then(n => {
                        this.logMsgToServer(`${ t }//${ e }/${ a }/log/2/debug?${ s(i, r, o, l, n) }`, c);
                    }).catch(() => {
                        this.logMsgToServer(`${ t }//${ e }/${ a }/log/2/debug?${ s(i, r, o, l) }`, c);
                    });
                this.logMsgToServer(`${ t }//${ e }/${ a }/log/2/debug?${ s(i, r, o, l) }`);
            }
            function s(t, o, a, s, l) {
                const c = window.TRCImpl && window.TRCImpl.getSystemFlag('loaderType');
                return `${ e.timeStamp + encodeURIComponent(a) }&${ e.type }${ encodeURIComponent(TRC.modDebug.getType(t)) }&${ e.message }${ encodeURIComponent(o) }${ window.trc_debug_level > 1 ? `&${ e.debugLevel }${ window.trc_debug_level }` : '' }&${ e.id }${ Math.floor(10000 * Math.random()) }${ window.TRC.version ? `&cv=${ window.TRC.version }` : '' }${ c ? `&lt=${ c }` : '' }${ n() && window.SubtleCrypto && l ? `&uuid=${ l }&dcc=${ ++r }` : '' }${ s ? `&${ i(s) }` : '' }`;
            }
            TRC.newDebugLogger = {
                logMsg: a,
                logMsgToServer: o
            }, window._trcIsUTactive && (TRC.newDebugLogger.getLogParams = s, TRC.newDebugLogger.resetCounter = function () {
                r = 0;
            });
        })(), (() => {
            const e = 'ack';
            TRC.pageLevelFeaturesManager = {
                features: {
                    'explore-more': {
                        responseKey: 'exm',
                        enableInIframe: !0,
                        functionCall: (e, t) => {
                            TRC.pageLevelFeaturesManager.getFeatureOnFeedLevel(e, t);
                        }
                    },
                    'virtual-placement': {
                        responseKey: 'vpl',
                        enableInIframe: !0,
                        functionCall: (e, t) => {
                            TRC.pageLevelFeaturesManager.getFeatureOnPageLevel(e, t);
                        }
                    },
                    stories: {
                        responseKey: 's',
                        enableInIframe: !0,
                        functionCall: (e, t) => {
                            TRC.pageLevelFeaturesManager.getFeatureOnPageLevel(e, t);
                        }
                    }
                },
                pageLevelFeatures: {},
                disableFeatureOnIframe() {
                    const {pageLevelFeatures: e} = TRC.pageLevelFeaturesManager, t = window.self !== window.top;
                    if (t) {
                        const t = Object.keys(this.features);
                        for (let i = 0; i < t.length; i++) {
                            const r = t[i], {responseKey: n} = this.features[r], o = TRCImpl.global[`enable-${ n }-inside-iframe`];
                            let {enableInIframe: a} = this.features[r];
                            if (void 0 !== o && (a = o), !1 === a) {
                                const t = this.getPlfKey(n);
                                e[t] = !0;
                            }
                        }
                    }
                },
                getFeature(e) {
                    Object.keys(this.features).forEach(t => {
                        const i = this.features[t], r = i.responseKey, n = this.pageLevelFeatures[r];
                        if (!n)
                            try {
                                i.functionCall(e, r);
                            } catch (e) {
                                __trcError('Error in functionCall in pageLevelFeaturesManager', e);
                            }
                    });
                },
                getFeatureOnFeedLevel(e, t) {
                    const i = e.trc.f, r = i && Object.keys(i);
                    if (r)
                        for (let n = 0; n < r.length; n++) {
                            const e = i[r[n]], o = e[t];
                            if (o) {
                                const e = this.getPlfKey(t);
                                return this.pageLevelFeatures[e] = !0;
                            }
                        }
                },
                getFeatureOnPageLevel(e, t) {
                    if (e.trc && e.trc[t]) {
                        const e = this.getPlfKey(t);
                        return this.pageLevelFeatures[e] = !0;
                    }
                },
                getPlfKey: t => {
                    return `${ e }_${ t }`;
                }
            };
        })(), (() => {
            let e = null;
            class t {
                static init(e) {
                    t.setReferrer(e), e['keep-referrer-in-session'] && TRC.pageManager.sessionStorageSetValue('tbl-session-referrer', location.href);
                }
                static updateReferrer(t) {
                    e = t;
                }
                static getReferrer() {
                    return e;
                }
                static setReferrer(t) {
                    function i() {
                        const e = document.head.getElementsByTagName('link');
                        for (let t = 0; t < e.length; t++)
                            if ('referrer' === e[t].rel)
                                return e[t].href;
                    }
                    function r() {
                        let e = '';
                        try {
                            return (e = top.window.TRC && top.window.TRC.hasFeedView ? decodeURI(document.referrer) : decodeURI(top.window.document.referrer)) && !/https?:\/\/(\w+)\.taboola(syndication)?\.com/.test(e) ? e.substr(0, 400) : e.split('?')[0];
                        } catch (e) {
                            __trcDebug('TRC.Manager.getReferrer : rendering in cross domain iframe');
                        }
                    }
                    function n(e) {
                        if (e['keep-referrer-in-session']) {
                            const e = TRC.pageManager.sessionStorageGetValue('tbl-session-referrer');
                            if (e && location.hostname === new TRC.URL(e).host)
                                return e;
                        }
                    }
                    e = e || i() || r() || n(t) || '';
                }
            }
            TRC.PageReferrer = t;
        })(), function (e, t) {
            e.TRC = e.TRC || {};
            var i, r = !1, n = 'taboola global', o = 'trctestcookie';
            function a() {
                for (var e = 'trc_cookie_storage', t = {}, i = document.cookie.split(/;\s+/), r = 0; r < i.length; r++) {
                    var n = TRC.text.lsplit(i[r], '=', 2), o = unescape(n[0]), a = unescape(n[1]);
                    if (o == e) {
                        for (var s = a.split('|'), l = 0; l < s.length; l++) {
                            var n = s[l].split('=');
                            t[unescape(n[0])] = unescape(n[1]);
                        }
                        break;
                    }
                }
                return this.save = function () {
                    var i = new Array(), r, n;
                    for (var o in t)
                        t.hasOwnProperty(o) && null != t[o] && (i[i.length] = escape(o) + '=' + escape(t[o]));
                    r = i.length > 0 ? 1 : -1, n = new Date(new Date().getTime() + 365 * r * 86400000);
                    var a = this.getDomain();
                    void 0 !== document.cookie && (document.cookie = e + '=' + escape(i.join('|')) + ';domain=' + a + ';path=/;expires=' + n.toUTCString());
                }, this.getDomain = function () {
                    return !0 === TRCImpl.global['store-first-party-cookie-in-subdomain'] || 'true' === TRCImpl.global['store-first-party-cookie-in-subdomain'] ? h.getPageSubDomain() : '';
                }, this.getValue = function (e) {
                    return t.hasOwnProperty(e) ? t[e] : null;
                }, this.setValue = function (e, i) {
                    t[e] = i, this.save();
                }, this.removeKey = function (e) {
                    delete t[e], this.save();
                }, this.delete = function () {
                    t = {}, this.save();
                }, this;
            }
            function s(e) {
                var t = e || {};
                return this.getValue = function (e) {
                    return t[e] ? t[e] : null;
                }, this.setValue = function (e, i) {
                    t[e] = i;
                }, this.removeKey = function (e) {
                    delete t[e];
                }, this.getData = function () {
                    return t;
                }, this.delete = function () {
                    t = {};
                }, this;
            }
            function l(t) {
                return this.getValue = function (i) {
                    const $___old_3280521949144a0c = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_682899021332acea = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_3280521949144a0c)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_f73d56c07eb0fd57.localStorage));
                        if ($___old_682899021332acea)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f73d56c07eb0fd57.sessionStorage));
                        return function () {
                            return e[t + 'Storage'].getItem(i);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_3280521949144a0c)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_3280521949144a0c));
                        if ($___old_682899021332acea)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_682899021332acea));
                    }
                }, this.setValue = function (i, r) {
                    const $___old_7b319fbfc6c55bf3 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_7b319fbfc6c55bf3)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f73d56c07eb0fd57.sessionStorage));
                        return function () {
                            try {
                                e[t + 'Storage'].setItem(i, r);
                            } catch (e) {
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_7b319fbfc6c55bf3)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_7b319fbfc6c55bf3));
                    }
                }, this.removeKey = function (i) {
                    try {
                        e[t + 'Storage'].removeItem(i);
                    } catch (e) {
                    }
                }, this;
            }
            function c(t) {
                const $___old_59e18dd8991ffc3a = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_f90b67f4e949006c = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                try {
                    if ($___old_59e18dd8991ffc3a)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_f73d56c07eb0fd57.localStorage));
                    if ($___old_f90b67f4e949006c)
                        ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f73d56c07eb0fd57.sessionStorage));
                    return function () {
                        var i = e[t + 'Storage'], r = new Date().getTime() + '', n = '_taboolaStorageDetection';
                        try {
                            if (i.setItem(n, r), i.getItem(n) == r)
                                return i.removeItem(n), i;
                        } catch (e) {
                        }
                        return null;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_59e18dd8991ffc3a)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_59e18dd8991ffc3a));
                    if ($___old_f90b67f4e949006c)
                        ({}.constructor.defineProperty(window, 'sessionStorage', $___old_f90b67f4e949006c));
                }
            }
            function d(t) {
                const $___old_0b6351df0ca8ddfc = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_00b5dda28376f23f = {}.constructor.getOwnPropertyDescriptor(window, 'Storage');
                try {
                    if ($___old_0b6351df0ca8ddfc)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_f73d56c07eb0fd57.localStorage));
                    if ($___old_00b5dda28376f23f)
                        ({}.constructor.defineProperty(window, 'Storage', $___mock_f73d56c07eb0fd57.Storage));
                    return function () {
                        try {
                            if (e.localStorage instanceof Storage && TRC.useStorageDetection && c(t))
                                return new l(t);
                        } catch (e) {
                            return null;
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_0b6351df0ca8ddfc)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_0b6351df0ca8ddfc));
                    if ($___old_00b5dda28376f23f)
                        ({}.constructor.defineProperty(window, 'Storage', $___old_00b5dda28376f23f));
                }
            }
            var h = function () {
                return this.publisher_id = null, this.item_id = null, this.page_id = null, this.state = {}, this.stateStack = [], this.getPageSubDomain = function () {
                    return this.getPageDomainFromHostName(t.location.hostname);
                }, this.getPageDomainFromHostName = function (e) {
                    var t = '';
                    try {
                        var i = e.split('.').reverse();
                        t = '.' + i[1] + '.' + i[0], i.length >= 3 && i[1].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i) && (t = '.' + i[2] + '.' + i[1] + '.' + i[0]);
                    } catch (e) {
                    }
                    return t;
                }, this.getLocalStorageImplementation = function (t, i) {
                    if (null != this.state.privateStorageImpl && 'strict-w3c-storage' != t)
                        return this.state.privateStorageImpl;
                    var r = e.TRCImpl ? e.TRCImpl.global : {};
                    switch (t = t || (r['local-storage-usage'] ? r['local-storage-usage'] : 'prefer-w3c-storage')) {
                    case 'strict-w3c-storage':
                        return d('session' === i ? 'session' : 'local');
                    case 'prefer-w3c-storage':
                        var n = d('local');
                        if (n)
                            return this.state.privateStorageImpl = n;
                    case 'prefer-cookies':
                        try {
                            if (this.canWriteCookies())
                                return this.state.privateStorageImpl = new a();
                        } catch (e) {
                        }
                    default:
                        return this.state.privateStorageImpl = new s();
                    }
                }, this.getFirstPartyCookie = function () {
                    if (this.state.firstPartyCookie)
                        return this.state.firstPartyCookie;
                    var e = this.getLocalStorageImplementation();
                    if (e instanceof a || e instanceof s)
                        return this.state.firstPartyCookie = e;
                    try {
                        if (this.canWriteCookies())
                            return this.state.firstPartyCookie = new a();
                    } catch (e) {
                    }
                    return this.state.firstPartyCookie = new s();
                }, this.canWriteCookies = function () {
                    var t, i;
                    return (e.TRCImpl ? e.TRCImpl.global : {})['use-trctestcookie'] ? (document.cookie = o + '=ok', i = -1 !== document.cookie.indexOf(o), document.cookie = o + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;', i) : e.navigator.cookieEnabled;
                }, this.getDummyStorage = function (e) {
                    return new s(e);
                }, this.trcParseParams = function (e) {
                    if (e && !owner.item_id)
                        for (var t = e.split('&'), i = 0; i < t.length; i++) {
                            var r = TRC.text.lsplit(t[i], '=', 2);
                            switch (unescape(r[0])) {
                            case 'item_id':
                                owner.item_id = unescape(r[1]);
                                break;
                            case 'publisher_id':
                                owner.publisher_id = unescape(r[1]);
                            }
                        }
                }, this.trcGetPublisherParams = function () {
                    for (var e = document.getElementsByTagName('script'), t = 0; t < e.length; t++) {
                        var i = e[t].src.split('taboola(syndication)?.com/libtrc/')[1];
                        if (i && e[t].src.search(/taboola(syndication)?.com.*page_management/) >= 0) {
                            var r = (i = i.split('?')[0]).split('/');
                            owner.page_id = r[0], r.length > 2 && (owner.page_id += '/' + r[1]), owner.trcParseParams(e[t].src.split('?')[1]);
                        }
                    }
                }, this.getPageData = function () {
                    var e = this.getTopMostWindow();
                    return e.taboola_view_id || (e.taboola_view_id = new Date().getTime()), TRC.isAMPSplitFeed && void 0 !== TRC.syncViewID && '' !== TRC.syncViewID ? TRC.syncViewID : e.taboola_view_id;
                }, this.storeValue = function (e, t) {
                    this.storePublisherValue(n, e, t);
                }, this.removeKey = function (e) {
                    this.removePublisherKey(n, e);
                }, this.getValue = function (e) {
                    return this.getPublisherValue(n, e);
                }, this.storePublisherValue = function (e, t, i) {
                    var r;
                    this.isNotAllowedToWriteValue(t, i) || (r = this.buildKeyWithPublisher(e, t), this.getLocalStorageImplementation().setValue(r, i), this.addKeyToStoredKeysList(r));
                }, this.isNotAllowedToWriteValue = function (e, t) {
                    return null == t || void 0 == t || TRC.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(e);
                }, this.buildKeyWithPublisher = function (e, t) {
                    return e + ':' + t;
                }, this.getPublisherValue = function (e, t) {
                    return TRC.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(t) ? null : this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(e, t));
                }, this.removePublisherKey = function (e, t) {
                    return this.getLocalStorageImplementation().removeKey(this.buildKeyWithPublisher(e, t));
                }, this.removeAllKeys = function () {
                    for (var e = this.getStoredKeysList(), t = [], i, r = 0; r < e.length; r++)
                        i = e[r], this.isAllowedKeyWhenDoNotTrack(i) ? t.push(i) : this.getLocalStorageImplementation().removeKey(i);
                    this.setStoredKeysList(t);
                }, this.addKeyToStoredKeysList = function (e) {
                    var t = this.getStoredKeysList();
                    -1 === t.indexOf(e) && (t.push(e), this.setStoredKeysList(t));
                }, this.getStoredKeysList = function () {
                    var e = this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(n, 'local-storage-keys')), t;
                    try {
                        t = TRC.util.jsonParseWithNative(e) || [];
                    } catch (e) {
                        t = [], __trcError('Could not parse local storage keys', e);
                    }
                    return t;
                }, this.setStoredKeysList = function (e) {
                    var t;
                    try {
                        t = __trcJSONify(e), this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(n, 'local-storage-keys'), t);
                    } catch (e) {
                        return void __trcError('Could not stringify local storage keys', e);
                    }
                }, this.isAllowedKeyWhenDoNotTrack = function (t) {
                    var i, r = (e.TRCImpl && e.TRCImpl.global || {})['dnt-allowed-keys'] || [
                            'session-id',
                            'trc_css-isolation'
                        ], n;
                    return null !== t && void 0 !== t && (n = t.split(':')[1] || t, -1 !== r.indexOf(n));
                }, this.removeUserId = function () {
                    TRC.pageManager.removeKey('user-id'), TRCImpl.global['store-userid-first-party-cookie'] && this.getFirstPartyCookie().removeKey(this.buildKeyWithPublisher(n, 'user-id'));
                }, this.storeUserId = function (e, t) {
                    this.isNotAllowedToWriteValue('user-id', e) || (t ? this.getFirstPartyCookie().delete() : (this.storePublisherValue(n, 'user-id', e), TRCImpl.global['store-userid-first-party-cookie'] && this.getFirstPartyCookie() !== this.getLocalStorageImplementation() && this.getFirstPartyCookie().setValue(this.buildKeyWithPublisher(n, 'user-id'), e)));
                }, this.getUserId = function () {
                    return TRC.user_id || TRC.pageManager.getValue('user-id');
                }, this.storeSessionId = function (e, t) {
                    this.isNotAllowedToWriteValue('session-id', e) || (t ? this.getFirstPartyCookie().delete() : 1 == TRCImpl.global['store-sessiondata-first-party-cookie'] && this.getFirstPartyCookie() !== this.getLocalStorageImplementation() && this.getFirstPartyCookie().setValue(this.buildKeyWithPublisher(n, 'session-data'), e));
                }, this.getUserIdFirstPartyCookie = function () {
                    return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(n, 'user-id'));
                }, this.getTopMostWindow = function () {
                    var t;
                    try {
                        if ((t = e.top).TRC = t.TRC || {}, t.TRC || (t = e), !TRCImpl || !TRCImpl.global || !TRCImpl.global['disable-strict-top-window-check'])
                            var i = t.location;
                    } catch (i) {
                        t = e;
                    }
                    return t;
                }, this.additionalDispatchParams = function () {
                    return null == this.state.moreDispatchParams && (this.state.moreDispatchParams = this.getCurrentURL().filtered), 0 == this.state.moreDispatchParams.length ? '' : '&' + this.state.moreDispatchParams.join('&');
                }, this.getForceTrcCache = function () {
                    return r;
                }, this.getCurrentURL = function () {
                    var t = TRC.isAMP && e.context && e.context.canonicalUrl || e.location.href, i = new TRC.URL(t), n = [], o = [];
                    i.search.replace(/^\?/, '').split(/&/).forEach(function (e) {
                        e && (0 == e.search('trc_') || 'taboola-debug' == e ? (r = new Boolean(e.match(/trc_cache/)).valueOf(), o.push(e)) : n.push(e));
                    }), i.search = n.length > 0 ? '?' + n.join('&') : '';
                    var a = new String(i.toString());
                    return a.filtered = o, a;
                }, this.sessionStorageGetValue = function (e) {
                    var t = this.getLocalStorageImplementation('strict-w3c-storage', 'session');
                    return t && t.getValue(e) || null;
                }, this.sessionStorageSetValue = function (e, t) {
                    var i = this.getLocalStorageImplementation('strict-w3c-storage', 'session');
                    i && i.setValue(e, t);
                }, this.initState = function () {
                    void 0 === this.state && (this.state = {}), this.state.privateStorageImpl = null, this.state.m_publisherDomains = {
                        host: [],
                        path: [],
                        query: []
                    }, this.state.moreDispatchParams = null;
                }, this.getReferrer = function () {
                    return TRC.PageReferrer.getReferrer();
                }, this.updateReferrer = function (e) {
                    TRC.PageReferrer.updateReferrer(e);
                }, this.initReferrer = function (e) {
                    TRC.PageReferrer.init(e);
                }, this.pushState = function () {
                    this.stateStack.push(this.state), delete this.state, this.initState();
                }, this.popState = function () {
                    this.stateStack.length > 0 && (this.state = this.stateStack.pop());
                }, this.initState(), this;
            };
            h.getPageData = function () {
                return i.getPageData();
            }, h.storeValue = function (e, t) {
                return i.storeValue(e, t);
            }, h.storePublisherValue = function (e, t, r) {
                return i.storePublisherValue(e, t, r);
            }, h.getValue = function (e) {
                return i.getValue(e);
            }, h.getPublisherValue = function (e, t) {
                return i.getPublisherValue(e, t);
            }, h.additionalDispatchParams = function () {
                return i.additionalDispatchParams();
            }, h.getCurrentURL = function () {
                return i.getCurrentURL();
            }, h.getPageSubDomain = function () {
                return i.getPageSubDomain();
            }, h.pushState = function () {
                return i.pushState();
            }, h.popState = function () {
                return i.popState();
            }, TRC.pageManager = i = TRC.pageManager || new h(), e.PageManager = e.PageManager || h;
        }(window, document), (() => {
            class e {
                constructor() {
                    this.postData = {};
                }
                setFullItemList(e) {
                    'object' == typeof e ? this.postData.fil = __trcJSONify(e) : 'string' == typeof e && (this.postData.fil = e);
                }
                setScreenHeight(e) {
                    this.postData.sh = e;
                }
                setScreenWidth(e) {
                    this.postData.sw = e;
                }
                setScreenDensity(e) {
                    this.postData.sde = e;
                }
                setBrowserWidth(e) {
                    this.postData.bw = e;
                }
                setBrowserHeight(e) {
                    this.postData.bh = e;
                }
                setDocumentWidth(e) {
                    this.postData.dw = e;
                }
                setDocumentHeight(e) {
                    this.postData.dh = e;
                }
                setArticlePos(e) {
                    this.postData.bad = e;
                }
                setContainerPos(e) {
                    this.postData.cd = e;
                }
                setContainerWidth(e) {
                    this.postData.mw = e;
                }
                getAll() {
                    return this.postData;
                }
            }
            TRC.PlacementEventPostData = e;
        })(), ((e, t, i) => {
            const r = (e, t) => {
                    const {
                        style: i = '',
                        location: r = 'beforeend'
                    } = t;
                    i && TRC.dom.injectStyle(i), e.insertAdjacentHTML(r, n(t)), o(a(r, e));
                }, n = e => {
                    const {
                        markup: t = '',
                        href: i = '#',
                        enableScrolling: r = 'no',
                        classList: n = '',
                        children: o = '',
                        inlineStyle: a = '',
                        wrapper: s
                    } = e;
                    let l = `<a tblenablesscrolling="${ r }" href="${ i }" \n                               class="${ n }" style="${ a }" rel="nofollow" target="_blank"\n                               >${ t }${ o }</a>`;
                    return s && (l = `<${ s.type } class="${ s.className }">${ l }</${ s.type }>`), l;
                }, o = e => {
                    TRC.Device.isTouchDevice || TRC.dom.isInIframe() || TRC.dom.on(e, 'click', e => {
                        return TRC.aboutUs.open(e) || !1;
                    });
                }, a = (e, t) => {
                    switch (e) {
                    case 'beforebegin':
                        return t.previousElementSibling;
                    case 'afterbegin':
                        return t.firstElementChild;
                    case 'beforeend':
                        return t.lastElementChild;
                    case 'afterend':
                        return t.nextElementSibling;
                    default:
                        return t.firstElementChild;
                    }
                };
            i.PopupLink = { create: r };
        })(window, document, TRC), function (e, t) {
            var i = TRC.PostRenderQueue = function () {
                return this.backend = [], this;
            };
            i.prototype.pushBack = function (e, t) {
                __trcDebug('postRenderQueue.pushBack(' + e + ')'), this.backend.push({
                    name: e,
                    func: t
                });
            }, i.prototype.pushFront = function (e, t) {
                __trcDebug('postRenderQueue.pushFront(' + e + ')'), this.backend.unshift({
                    name: e,
                    func: t
                });
            }, i.prototype.popFront = function () {
                if (0 == this.backend.length)
                    return null;
                var e = this.backend.shift();
                return 'function' == typeof e ? {
                    name: 'unknown',
                    func: e
                } : e;
            };
        }(window, document), ((e, t) => {
            const i = 'tbl-forkorts-article', r = ` ${ i } ${ i }-active`, n = `tbl-read-more-box-btn`, o = 'tbl-read-more-button-arrow', a = {
                    de: 'Weiterlesen',
                    el: '%CE%94%CE%B9%CE%B1%CE%B2%CE%AC%CF%83%CF%84%CE%B5%20%CE%A0%CE%B5%CF%81%CE%B9%CF%83%CF%83%CF%8C%CF%84%CE%B5%CF%81%CE%B1',
                    en: 'Read%20More',
                    es: 'Leer%20M%C3%A1s',
                    fr: 'Lire%20La%20Suite',
                    he: '%D7%A7%D7%A8%D7%90%20%D7%A2%D7%95%D7%93',
                    hi: '%E0%A4%94%E0%A4%B0%20%E0%A4%AA%E0%A4%A2%E0%A4%BC%E0%A5%87%E0%A4%82',
                    it: 'Per%20saperne%20di%20pi%C3%B9',
                    jp: '%E7%B6%9A%E3%81%8D%E3%82%92%E8%AA%AD%E3%82%80',
                    ko: '%EC%9E%90%EC%84%B8%ED%9E%88%EB%B3%B4%EA%B8%B0',
                    nl: 'Lees%20Meer',
                    pt: 'Leia%20Mais',
                    ru: '%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D0%B4%D0%B0%D0%BB%D0%B5%D0%B5',
                    ta: '%E0%AE%AE%E0%AF%87%E0%AE%B2%E0%AF%81%E0%AE%AE%E0%AF%8D%20%E0%AE%AA%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95',
                    th: '%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%A1'
                };
            function s(e, t) {
                const i = TRC.translationManager.getLabel({
                    feature: 'read-more',
                    label: 'DEFAULT_CAPTION'
                });
                return {
                    caption: e && e.caption || t && t.caption || i && decodeURIComponent(i) || 'Read More',
                    boxSelector: e && e.boxSelector || t && t.boxSelector || null,
                    threshold: e && e.threshold || t && t.threshold || 1100,
                    backgroundColor: e && e.backgroundColor || t && t.backgroundColor || '#fff',
                    minimizedSize: e && e.minimizedSize || t && t.minimizedSize || 800,
                    scrollSize: e && e.scrollSize || t && t.scrollSize || 800,
                    buttonTop: e && e.buttonTop || t && t.buttonTop || 48,
                    buttonBottom: e && e.buttonBottom || t && t.buttonBottom || 28,
                    divTop: e && e.divTop || t && t.divTop || 75,
                    gradient: e && e.gradient || t && t.gradient || 40,
                    cutoffType: e && e.cutoffType || t && t.cutoffType || 'ARTICLE',
                    anchorSelector: e && e.anchorSelector || t && t.anchorSelector || null,
                    lengthFromAnchorElementType: e && e.lengthFromAnchorElementType || t && t.lengthFromAnchorElementType || 'BELOW',
                    lengthFromAnchorElement: e && e.lengthFromAnchorElement || t && t.lengthFromAnchorElement || 30
                };
            }
            function l(e) {
                return `.${ i } { max-height: inherit; } .${ i }.tbl-forkorts-article-active { max-height: calc(${ e.minimizedSize }px - 35px); overflow: hidden; position: relative; }.tbl-read-more-box { position: absolute; z-index: 4; left: 0; right: 0; /* there's a small line between the start of the feed/widget aand you can see the content there. so i placed the gradient 2px lower. */ bottom: -2px; display: none; text-align: center; padding: ${ e.divTop }px 12px calc(50px - 35px); background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 10%, ${ e.backgroundColor } 60%, ${ e.backgroundColor } 100%); } .tbl-read-more-box .tbl-read-more-btn { background: #F7F7F7; border: 1px solid #bebebe; border-radius: 24px; color: #5C5C5C; width: 130px; margin: -6px 0 40px 0; padding: 8px 20px 8px 25px; height: 30px; line-height: 14px; font-size: 14px; font-weight: 500; text-align: center; } .tbl-read-more-box .tbl-read-more-btn.tbl-rtl-read-more-btn { padding: 8px 25px 8px 20px; } .tbl-read-more-box .tbl-read-more-btn.tbl-rtl-read-more-btn .tbl-read-more-button-arrow { margin: 0 6px 0 0; } .tbl-read-more-box .tbl-read-more-btn .tbl-read-more-button-arrow { width: 8px; height: 8px; margin: 0 0 0 6px; } .tbl-read-more-box .tbl-read-more-btn:hover { cursor: pointer; text-decoration: none; background: #ececec; color: #5C5C5C; }.${ i }-active .tbl-read-more-box { display: block; }`;
            }
            function c() {
                return e.pageYOffset || t.documentElement.scrollTop || t.body.scrollTop;
            }
            function d(e) {
                const r = t.querySelector(`.${ i }`);
                e.preventDefault(), e.stopPropagation(), r.classList.remove(`${ i }-active`), r.style.maxHeight = '', f.call(this, 'clicked', 'true', null), TRC.EventsAPI.readmore('click', this.response && this.response.trc), TRC.dispatch('readMoreClicked'), TRC.readMoreVisible = !1;
            }
            function h(e, i) {
                const r = t.createElement('div');
                return r.className = `tbl-read-more-box`, r.innerHTML = `<a \n                            id="${ n }_${ i }" \n                            class="tbl-read-more-btn ${ 'rtl' === TRCImpl.direction ? 'tbl-rtl-read-more-btn' : '' }"\n                            href="#" \n                        > \n                            ${ e.caption }\n                            ${ u() }\n                        </a>`, r;
            }
            function u() {
                return `\n            <svg class='${ o }' viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path \n                    d="M6.85381 0.203525L3.99181 3.06553L1.12981 0.203525C1.00407 0.0820867 0.835672 0.0148905 0.660874 0.0164095C0.486076 0.0179284 0.318868 0.088041 0.195262 0.211646C0.0716568 0.335252 0.00154415 0.50246 2.52017e-05 0.677258C-0.00149374 0.852056 0.0657025 1.02046 0.187141 1.14619L3.52047 4.47953C3.64549 4.60451 3.81503 4.67472 3.99181 4.67472C4.16858 4.67472 4.33812 4.60451 4.46314 4.47953L7.79647 1.14619C7.86015 1.08469 7.91094 1.01113 7.94588 0.929795C7.98081 0.848459 7.99921 0.760979 7.99997 0.67246C8.00074 0.58394 7.98388 0.496154 7.95036 0.414223C7.91683 0.332292 7.86733 0.257857 7.80474 0.195262C7.74214 0.132667 7.66771 0.083165 7.58578 0.0496444C7.50385 0.0161238 7.41606 -0.00074404 7.32754 2.51711e-05C7.23902 0.000794382 7.15154 0.0191852 7.0702 0.0541246C6.98887 0.0890639 6.91531 0.139852 6.85381 0.203525Z"\n                    fill="#BCBCBC"\n                />\n            </svg>\n        `;
            }
            function p(i, r) {
                const n = i.context || r.context;
                'parent' === n && (e = e.parent, t = e.parent.document), 'top' === n && (e = e.top, t = e.top.document);
            }
            function m(e, i) {
                const r = i || 'kortWidgetCssStyle';
                let n = t.querySelector(`#${ r }`);
                n && n.parentNode.removeChild(n), (n = t.createElement('div')).id = r, n.innerHTML = `&shy;<style>${ e }</style>`, t.documentElement.appendChild(n);
            }
            function g(e, i, r) {
                let n, o;
                if ('PAGE_ELEMENT' === e.cutoffType && (o = t.querySelector(e.anchorSelector))) {
                    const t = o.getBoundingClientRect(), a = i.getBoundingClientRect();
                    'ABOVE' === e.lengthFromAnchorElementType ? n = t.top - a.top - e.lengthFromAnchorElement : (n = t.bottom - a.top + e.lengthFromAnchorElement, n += r.getBoundingClientRect().height);
                }
                return n;
            }
            function f(e, t, i) {
                if (TRC.util.isPercentEnabled(TRCImpl.global, 'read-more-events-enabled')) {
                    const r = {
                        event_type: 'read_more',
                        event_state: e,
                        event_value: t,
                        event_msg: i
                    };
                    this.sendEvent('supply-feature', { d: JSON.stringify(r) }, null);
                }
            }
            function b(o) {
                const a = u(o);
                function u(o) {
                    try {
                        const a = f.trcBind(o);
                        TRC.tlf && console.time('init Read More'), a('Available', !0, null);
                        const u = s(o.readMorePageConfig, o.readMoreConfig);
                        if (p(o.readMorePageConfig, o.readMoreConfig), !e.matchMedia)
                            return a('Rendered', !1, 'match media is not supported'), !1;
                        if (!u.boxSelector)
                            return a('Rendered', !1, 'no box selector defined'), !1;
                        const b = t.querySelector(u.boxSelector);
                        if (!b)
                            return a('Rendered', !1, 'box content not detected'), !1;
                        if (t.querySelector(`.${ i }`) === b)
                            return a('Rendered', !1, 'box content already in use'), !1;
                        if (b.offsetHeight < u.threshold || c() >= u.scrollSize)
                            return a('Rendered', !1, 'dimensions exception'), !1;
                        b.className += r, m(l(u));
                        const C = h(u, o.id);
                        b.appendChild(C);
                        const T = g(u, b, C);
                        T && (b.style.maxHeight = `${ T }px`), TRC.readMoreVisible = !0, TRC.dispatch('readMoreRendered'), TRC.EventsAPI.readmore('render', o.response && o.response.trc), t.querySelector(`#${ n }_${ o.id }`).addEventListener('click', d.trcBind(o), !1), a('Rendered', !0, null);
                        const v = {
                                targetElement: C,
                                onEnter: () => {
                                    a('Visible', !0, null), TRC.intersections.unobserve(y);
                                }
                            }, y = TRC.intersections.observe(v);
                        return TRC.tlf && console.timeEnd('init Read More'), !0;
                    } catch (e) {
                        return __trcError('Error read more init', e), !1;
                    }
                }
                a || TRC.EventsAPI.readmore('none', o.response && o.response.trc);
            }
            TRC._translationQueue = TRC._translationQueue || [], TRC._translationQueue.push({ 'read-more': a }), TRC.setReadMore = b;
        })(window, document), (() => {
            const e = 'Feed - Explore More', t = 'api::render', i = 5, r = 1, n = '2500px', o = {
                    threshold: 0,
                    disableCheckOverlay: !0,
                    root: null
                };
            class a {
                constructor(e) {
                    this.trcManager = e, this.cardsCounters = {}, this.lazyBatches = {}, this.init();
                }
                init() {
                    this.isLazyRenderEnabled = 'boolean' == typeof this.isLazyRenderEnabled ? this.isLazyRenderEnabled : this.checkLazyRenderEnabled(), this.isLazyRenderEnabled && this.setLazyConfig();
                }
                checkLazyRenderEnabled() {
                    const {
                            global: e,
                            yieldingEnabled: t,
                            framework: i
                        } = this.trcManager, r = !(!e || !e['lazy-render-enable']), n = !t, o = !i, a = !TRC.dom.isInIframe(!0);
                    return r && n && o && a;
                }
                setLazyConfig() {
                    const t = this.trcManager.global['lazy-render'] || {}, {
                            excPlc: i,
                            sbKill: r,
                            dispatchPlacements: n,
                            raKill: o
                        } = t;
                    this.lazyConfig = {
                        excludePlacements: TRC.util.isArray(i) ? i : [e],
                        sbKill: TRC.util.isTrue(r),
                        dispatchPlacements: a.getDispatchPlacements(n),
                        raKill: TRC.util.isTrue(o)
                    }, this.lazyConfig.sbKill && (TRC.pageLevelFeaturesManager.pageLevelFeatures.sb_kill = !0), this.placementsConfigs = {}, __trcCopyProps(a.proxyPlacementLevelConfigs(t), this.lazyConfig);
                }
                getPlacementConfig(e, t) {
                    const {unifiedPlacement: i} = t;
                    return this.isFppEnabled(i) && this.placementsConfigs[i][e] || this.lazyConfig[e];
                }
                setPlacementsConfig(e) {
                    e && Object.keys(e).forEach(t => {
                        this.placementsConfigs[t] = a.proxyPlacementLevelConfigs(e[t]);
                    });
                }
                static proxyPlacementLevelConfigs(e) {
                    const {
                        enable: t,
                        rootMargin: o,
                        minCards: a,
                        maxBatch: s,
                        fullLazyBatch: l,
                        dispatchEnabled: c
                    } = e;
                    return {
                        enable: TRC.util.isTrue(t),
                        minCards: TRC.util.isNumber(a) ? parseInt(a, 10) : i,
                        maxBatch: TRC.util.isNumber(s) ? parseInt(s, 10) : r,
                        rootMargin: 'string' == typeof o && o.indexOf('px') > 1 ? o : n,
                        fullLazyBatch: TRC.util.isTrue(l),
                        dispatchEnabled: TRC.util.isTrue(c)
                    };
                }
                static getDispatchPlacements(e) {
                    return Array.isArray(e) ? e : 'string' == typeof e ? __trcUnJSONify(e) : [];
                }
                isLazyBatch(e, t) {
                    return !!(this.getPlacementConfig('maxBatch', t) >= e || t.isCache);
                }
                addResponse(e) {
                    const t = e.trc.vl;
                    this.onePlacementRendered = !1, e.trc.f ? this.updateCardsCounters(t) : this.onePlacementRendered = !0;
                }
                updateCardsCounters(e) {
                    e.forEach(e => {
                        if (e.fb) {
                            const {
                                uuip: t,
                                fb: i
                            } = e;
                            this.cardsCounters[t] = this.cardsCounters[t] || {}, this.cardsCounters[t][i] = this.cardsCounters[t][i] ? ++this.cardsCounters[t][i] : 1;
                        }
                    });
                }
                placementRender(e) {
                    (void 0 !== e.container || e.addWidget) && (this.trcManager.yieldingEnabled ? this.yieldRenderer(e) : this.isLazyRenderEnabled && this.isLazyPlacement(e) ? this.lazyRenderer(e) : this.standardRenderer(e));
                }
                getBatchThreshold(e, t) {
                    const {
                        uiBatchNumberCounter: i,
                        parentPlacementData: r
                    } = e;
                    if (this.isValidLazyPlacement(r) && this.isLazyBatch(i, r)) {
                        const e = this.getNumberOfCards(r.unifiedPlacement, i), n = this.getPlacementConfig('minCards', r);
                        return e && e > n ? Math.floor(t * n / e) : t;
                    }
                    return t;
                }
                getNumberOfCards(e, t) {
                    try {
                        return this.cardsCounters[e][t];
                    } catch (i) {
                        return __trcError(`failed to get number of cards for lazy rendering :- ${ e } | ${ t }`), 0;
                    }
                }
                isValidLazyPlacement(e) {
                    const {unifiedPlacement: t} = e;
                    if (this.isFppEnabled(t))
                        return !0;
                    if (this.isFppDisabled(t) || !this.lazyConfig.enable)
                        return !1;
                    const i = this.lazyConfig.excludePlacements.indexOf(t) > -1, r = !(!e.trcResponse || !e.trcResponse.nup);
                    return !r && !i;
                }
                isFppEnabled(e) {
                    const t = this.placementsConfigs[e];
                    return !(!t || !TRC.util.isTrue(t.enable));
                }
                isFppDisabled(e) {
                    const t = this.placementsConfigs[e];
                    return !(!t || !TRC.util.isFalse(t.enable));
                }
                yieldRenderer(e) {
                    this.trcManager.loadRBoxDrawQueue(e);
                }
                standardRenderer(e) {
                    this.onePlacementRendered = !1, this.trcManager.internalDrawRBox(e);
                }
                static getRootElement(e) {
                    return e.parentFeed && e.parentFeed.infiniteScrollEngine.observerScrollElement.children ? e.parentFeed.infiniteScrollEngine.observerScrollElement : null;
                }
                lazyRenderer(e) {
                    const t = this.getPlacementConfig('minCards', e), {unifiedPlacement: i} = e;
                    if (void 0 === i || e.modeGroupOrder > t) {
                        const t = this.getPlacementConfig('fullLazyBatch', e), {dispatchPlacements: r} = this.lazyConfig, n = this.getPlacementConfig('dispatchEnabled', e) || r.indexOf(i) > -1;
                        n ? this.dispatchPlacements(e) : i && t && this.lazyBatches[i] ? this.pushLazyBatchPlacement(e) : this.setObserverParams(e);
                    } else
                        this.standardRenderer(e);
                }
                dispatchPlacements(e) {
                    this.pushLazyBatchPlacement(e), this.listener || (this.listener = TRC.listen('render-placement', e => {
                        this.lazyRenderBatch(e.placement, e.cb);
                    }));
                }
                setObserverParams(e) {
                    const t = this.getObserverConfig(e), i = TRC.IntersectionObserver ? new TRC.IntersectionObserver(t.onEnter, t.observerParams) : new IntersectionObserver(t.onEnter, t.observerParams);
                    i.observe(e.container);
                }
                isLazyPlacement(e) {
                    return !(this.onRenderApiKill() || this.onePlacementRendered || !e.container || !this.isValidLazyPlacement(e)) && (!e.trcResponse.fb || this.isLazyBatch(e.trcResponse.fb, e));
                }
                onRenderApiKill() {
                    const e = TRC.getEventsMap()[t];
                    return !!(this.lazyConfig.raKill && Array.isArray(e) && e.length > 0);
                }
                pushLazyBatchPlacement(e) {
                    const t = this.lazyBatches[e.unifiedPlacement];
                    t ? this.lazyBatches[e.unifiedPlacement].push(e) : this.lazyBatches[e.unifiedPlacement] = [e];
                }
                lazyRenderBatch(e, t) {
                    const i = this.lazyBatches[e];
                    i && (i.forEach(e => {
                        return this.standardRenderer(e);
                    }), delete this.lazyBatches[e]), t && t();
                }
                getObserverConfig(e) {
                    let t;
                    const i = __trcCopyProps(o, {});
                    return i.root = a.getRootElement(e), i.rootMargin = this.getPlacementConfig('rootMargin', e), this.getPlacementConfig('fullLazyBatch', e) ? (this.pushLazyBatchPlacement(e), t = this.lazyRenderBatch.trcBind(this, e.unifiedPlacement)) : t = this.trcManager.internalDrawRBox.trcBind(this.trcManager, e), {
                        targetElement: e.container,
                        observerParams: i,
                        onEnter: (i, r) => {
                            i[0].isIntersecting && (t(), r.unobserve(e.container));
                        }
                    };
                }
            }
            TRC.RenderControl = a;
        })(), (() => {
            const e = 'tbl_rtus_id', t = 1, i = 2, r = 42, n = 91, o = 'RealTimeUserSyncMain', a = 'RealTimeUserSyncCallback';
            class s {
                constructor(e) {
                    this.trc = e, this.localStorage = e.pageManager.getLocalStorageImplementation();
                }
                applyRtus() {
                    this.trc.ccpaPs ? (this._log('ccpaPushTriggerRtus'), this._validateCcpaConsentAndCallRtusWithCcpaParams(this.trc.ccpaPs)) : 'function' == typeof window.__uspapi ? this._applyRtusWithCcpa() : 'function' == typeof window.__tcfapi ? this._applyRtusWithGdpr() : 'function' == typeof window.__cmp ? this._log('gdprV1') : (this._log('default'), this._triggerRtusCall(''));
                }
                _applyRtusWithCcpa() {
                    window.__uspapi('getUSPData', t, (e, t) => {
                        try {
                            t ? (this._log('ccpaApiTriggerRtus'), this._validateCcpaConsentAndCallRtusWithCcpaParams(e.uspString)) : this._log('ccpaApiFail');
                        } catch (e) {
                            this._log('ccpaApiError');
                        }
                    });
                }
                _validateCcpaConsentAndCallRtusWithCcpaParams(e) {
                    if ('Y' === e.charAt(2))
                        return;
                    const t = `&us_privacy=${ e }&gdpr=0&gdpr_consent=&gdpr_pd=`;
                    this._triggerRtusCall(t);
                }
                _applyRtusWithGdpr() {
                    window.__tcfapi('getTCData', i, (e, t) => {
                        try {
                            t ? TRC.Rtus.shouldCallRtusWithGdprParams(e) ? (this._log('gdprV2triggerRtus'), this._callRtusWithGdprParams(e)) : this._log('gdprV2notTriggerRtus') : this._log('gdprV2fail');
                        } catch (e) {
                            this._log('gdprV2error');
                        }
                    }, [
                        r,
                        n
                    ]);
                }
                static shouldCallRtusWithGdprParams(e) {
                    return TRC.Rtus.isGdprNotApplies(e) || TRC.Rtus.hasConsent(e);
                }
                static isGdprNotApplies(e) {
                    return !e.gdprApplies;
                }
                static hasConsent(e) {
                    const {consents: t} = e.vendor || {};
                    return t[r] && t[n];
                }
                _callRtusWithGdprParams(e) {
                    const t = `&us_privacy=&gdpr=${ e.gdprApplies ? 1 : 0 }&gdpr_consent=${ e.tcString }&gdpr_pd=0`;
                    this._triggerRtusCall(t);
                }
                _triggerRtusCall(t) {
                    const i = 'getRTUS', r = `//gum.criteo.com/sync?c=72&r=2&j=TRC.${ i }${ t }`;
                    this._setRtusCallback(i), this.trc.performance && this.trc.performance.mark(`${ o }Start`, null, o, 0, o, this.trc.PerfEvenType.START), this.trc.performance && this.trc.performance.mark(`${ a }Start`, null, a, 0, a, this.trc.PerfEvenType.START);
                    try {
                        this.trc.net.loadScript(r, 'js', null, null, !0), this.trc.pConsole('page', 'info', 'injected RTUS service');
                    } catch (e) {
                        __trcWarn('Error during RTUS loading asset file: ', e);
                    }
                    try {
                        this.trc.rtbRealTimeUserId = this.localStorage.getValue(e);
                    } catch (e) {
                        __trcWarn('Error during fetching RTUI from local storage: ', e);
                    }
                }
                _setRtusCallback(t) {
                    this.trc[t] = t => {
                        try {
                            this.trc.performance && this.trc.performance.mark(`${ a }Stop`, null, a, 0, a, this.trc.PerfEvenType.STOP);
                            const {
                                status: i,
                                userid: r
                            } = t || {};
                            'OK' === i ? (this.trc.rtbRealTimeUserId = r, this.localStorage.setValue(e, r)) : (this.trc.rtbRealTimeUserId = null, this.localStorage.removeKey(e));
                        } catch (e) {
                            __trcWarn('Error during RTUS callback: ', e);
                        }
                    };
                }
                _log(e) {
                    this.trc.RBoxUsage.logUsage('rtus', {
                        file: 'rtus.js',
                        method: 'injectRtus',
                        position: e
                    });
                }
            }
            TRC.Rtus = s;
        })(), TRC.ScriptRenderer = {
            render(e, t) {
                e && e.js ? (e.normalizedTag = TRC.text.htmlUnescape(e.js), this.renderInIframe(this.createIframe(t.container), e)) : __trcError('could not find script to render');
            },
            createIframe(e) {
                if (!e)
                    return void __trcError('could not find container to create Iframe within');
                const t = document.createElement('iframe');
                return t.style.border = t.frameBorder = t.border = '0', t.style.display = 'block', t.scrolling = 'no', e.appendChild(t), t;
            },
            renderInIframe(e, t) {
                if (!e)
                    return void __trcError('could not find iframe to render within');
                let i = e.contentWindow || e.contentDocument;
                i.document && (i = i.document), this.setOuterIframeStyle(e, t), this.runTagInIframe(i, t.normalizedTag), this.resetStyleInIframe(i);
            },
            setOuterIframeStyle(e, t) {
                e.style.width = t.w || '0px', e.style.height = t.h || '0px';
            },
            runTagInIframe(e, t) {
                void 0 !== t && null !== t ? (e.open(), e.write(t), e.close()) : __trcError('could not find normalizedTag to render');
            },
            resetStyleInIframe(e) {
                const t = e.createElement('style'), i = 'body { margin: 0px }';
                t.type = 'text/css', t.styleSheet ? t.styleSheet.cssText = i : t.appendChild(e.createTextNode(i)), e.getElementsByTagName('head')[0].appendChild(t);
            }
        }, function (e, t) {
            TRC.SpotlightLoader = {
                load: function (e) {
                    this.shouldLoad(e) && (this.loadedScript ? TRC.dispatch('trc_afterRboxDraw') : (__trcDebug('Detected Spotlight Administrator(' + e.trc['pi'] + ')'), TRC.backstageDomainPrefix = e.trc['bdp'], TRC.backstageDomainSuffix = e.trc['bds'], this.loadedScript = TRC.URL.prototype.switchProtocol.call(TRC.getBackstageUrl() + 'resources/js/1.1.0/spotlight.js', TRC.PROTOCOL), TRC.Manager.prototype.loadExternal(this.loadedScript, 'js')));
                },
                shouldLoad: function (e) {
                    return !(!t.querySelectorAll || TRC.Device.isTouchDevice || !e || !e.trc || '1' != e.trc['sl']);
                },
                registerOnMainContainer: function (e, t) {
                    e && this.shouldLoad(t) && e.setAttribute('data-spotlight-publisher-id', t.trc['pi']);
                }
            };
        }(window, document), (() => {
            const e = {
                    CAROUSEL_CONTAINER: 'tbl-stories-carousel-container',
                    CAROUSEL_TOPICS_WRAPPER: 'tbl-stories-topics-wrapper',
                    CAROUSEL_TOPIC_CONTAINER: 'tbl-stories-topics-container',
                    CAROUSEL_TOPIC_IMAGE_WRAPPER: 'tbl-stories-topic-image-wrapper',
                    CAROUSEL_TOPIC_TITLE: 'tbl-stories-topic-title',
                    CAROUSEL_TOPIC_IMAGE: 'tbl-stories-topic-image',
                    CAROUSEL_TOPIC_CLICK_LOADING: 'tbl-stories-topic-loading',
                    CAROUSEL_ONBOARDING: 'tbl-stories-onboarding',
                    CAROUSEL_READY: 'tbl-stories-carousel-ready'
                }, t = {
                    cs: '#4472c4',
                    ce: '#00b5d9'
                };
            class i {
                constructor(e) {
                    this.storiesContext = e, this.options = this.getCarouselOptions(), this.injectCarouselStyle(), this.createCarouselLayout();
                }
                injectCarouselStyle() {
                    const {onBoardingColor: e} = this.options;
                    TRC.dom.injectStyle(`.tbl-stories-carousel-container { box-sizing: initial; float: initial; padding: initial; width: initial; vertical-align: initial; border: initial; }.tbl-stories-carousel-container .tbl-stories-topic-image { top: 0; left: 0; bottom: 0; right: 0; }.tbl-stories-carousel-container { position: relative; height: 105px; } .tbl-stories-carousel-container .tbl-stories-topics-wrapper { height: 105px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin: 0; padding: 0 5px; overflow-x: auto; } .tbl-stories-carousel-container .tbl-stories-topics-wrapper::-webkit-scrollbar { display: none; } .tbl-stories-carousel-container .tbl-stories-topics-container { list-style: none; text-align: center; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: 72px; height: 105px; position: relative; } .tbl-stories-carousel-container .tbl-stories-topic-image-wrapper { height: 64px; width: 64px; position: absolute; left: 0; top: 0; border-radius: 32px; margin: 0 4px; z-index: 0; } .tbl-stories-carousel-container .tbl-stories-topic-image-wrapper svg { vertical-align: inherit; fill: transparent; } .tbl-stories-carousel-container .tbl-stories-topic-title { font-size: 12px; position: absolute; line-height: 14px; bottom: 0; left: 0; width: 100%; font-weight: normal; font-style: normal; height: 28px; margin: auto; } .tbl-stories-carousel-container .tbl-stories-topic-loading svg { animation: tbl-stories-rotate 2s infinite linear; -webkit-animation: tbl-stories-rotate 2s infinite linear; } .tbl-stories-carousel-container .tbl-stories-topic-loading .tbl-stories-topic-image { filter: grayscale(100%); } .tbl-stories-carousel-container .tbl-stories-onboarding { position: absolute; opacity: 0; background-color: ${ e }; color: #fcfcfc; padding: 0 15px; z-index: 1; right: 0; -webkit-transform: translateX(-100vh); -ms-transform: translateX(-100vh); transform: translateX(-100vh); border-radius: 16px 0 0 16px; font-size: 12px; height: 30px; line-height: 30px; top: 0; } .tbl-stories-carousel-container .tbl-stories-topic-image { width: 60px; height: 60px; border: 2px solid #fcfcfc; position: absolute; border-radius: 50%; z-index: 1; opacity: 0; transition: opacity 1s ease-in, filter 1s ease-in; box-sizing: border-box; margin: auto; overflow: auto; } .tbl-stories-carousel-container.tbl-stories-carousel-ready .tbl-stories-topic-image { opacity: 1; } .tbl-stories-carousel-container.tbl-stories-carousel-ready .tbl-stories-onboarding { -webkit-animation: tbl-stories-onboarding-fade 6s linear; animation: tbl-stories-onboarding-fade 6s linear; -webkit-animation-delay: 2s; animation-delay: 2s; }@-webkit-keyframes tbl-stories-rotate { from { -webkit-transform: rotate(-360deg); transform: rotate(-360deg); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }@keyframes tbl-stories-rotate { from { -webkit-transform: rotate(-360deg); transform: rotate(-360deg); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }@-webkit-keyframes tbl-stories-onboarding-fade { 0%, 100% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0; } 10%, 90% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0.8; } }@keyframes tbl-stories-onboarding-fade { 0%, 100% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0; } 10%, 90% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0.8; } }`);
                }
                carouselReady() {
                    requestAnimationFrame(() => {
                        TRC.dom.addClass(this.carouselContainer, e.CAROUSEL_READY);
                    });
                }
                getCarouselOptions() {
                    let {cc: e} = this.storiesContext.options.storiesUi;
                    return e || (e = {}), {
                        topicBorderColor: e.tc || t,
                        onBoardingColor: e.obc || '#2676F7',
                        onBoardingText: e.obt || 'New! Click to view visual Stories',
                        useCloudinaryCroppingForThumbs: void 0 === e.clcrt || TRC.util.isTrue(e.clcrt)
                    };
                }
                createCarouselLayout() {
                    this.carouselContainer = TRC.dom.createHTMLElement('nav', { className: e.CAROUSEL_CONTAINER }), this.topicsList = TRC.dom.createHTMLElement('ul', { className: e.CAROUSEL_TOPICS_WRAPPER }), this.carouselContainer.insertAdjacentHTML('afterbegin', this.getOnBoarding()), this.carouselContainer.appendChild(this.topicsList);
                }
                addTopic(e) {
                    this.topicsList.insertAdjacentElement('beforeend', this.getTopicElement(e));
                }
                getTopicElement({
                    id: t,
                    imageUrl: i,
                    title: r,
                    slotPosition: n
                }) {
                    const o = TRC.dom.createHTMLElement('li', {
                            className: e.CAROUSEL_TOPIC_CONTAINER,
                            'data-rel': t,
                            'data-slot-position': n
                        }), a = `<div class="${ e.CAROUSEL_TOPIC_IMAGE_WRAPPER }">\n                            <img alt="${ t }" class="${ e.CAROUSEL_TOPIC_IMAGE }" src="${ i }" onerror="this.style.display='none'">\n                            ${ this.getBorderTopic() }\n                           </div>`, s = `<label class="${ e.CAROUSEL_TOPIC_TITLE }">${ r }</label>`;
                    return o.insertAdjacentHTML('afterbegin', `${ a }${ s }`), TRC.dom.on(o, 'click', this.carouselTopicClickHandler.trcBind(this, t)), o;
                }
                carouselTopicClickHandler(e, t) {
                    const r = this.storiesContext.topics[e];
                    i.clickOnCarouselTopicLoadingIndication(t.currentTarget), TRC.StoriesVerticalUi ? this.storiesContext.renderVerticalUiPlacements(r) : TRC.listen('vertical-ui-loaded', this.storiesContext.renderVerticalUiPlacements.trcBind(this.storiesContext, r));
                }
                carouselSDKTopicClickHandler(e) {
                    const t = this.storiesContext.topics[e];
                    TRC.StoriesVerticalUi ? this.storiesContext.renderVerticalUiPlacements(t, !0) : TRC.listen('vertical-ui-loaded', this.storiesContext.renderVerticalUiPlacements.trcBind(this.storiesContext, t));
                }
                getBorderTopic() {
                    const {topicBorderColor: e} = this.options;
                    return `<svg height="64px" width="64px"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">  \n                            <linearGradient id="topic-background-grad" x1="0%" y1="0%" x2="100%" y2="0%">\n                                <stop offset="0%" style="stop-color:${ e.cs };stop-opacity:1"></stop>\n                                <stop offset="100%" style="stop-color:${ e.ce };stop-opacity:1"></stop>\n                            </linearGradient>\n                            <circle cx="50" cy="50" r="50" fill="url(#topic-background-grad)"></circle>\n                        </svg>`;
                }
                getTopicImage(e, t) {
                    const i = 'g_auto,c_thumb,r_max,q_auto,w_60,h_60', {useCloudinaryCroppingForThumbs: r} = this.options;
                    let n = t.length > 0 ? t[0].thumbnail : '';
                    return e && (n = e), r ? TRC.imageUtils.getImageUrlBasedOnCloudinaryApi(n, i) : n;
                }
                static clickOnCarouselTopicLoadingIndication(t) {
                    TRC.dom.addClass(t, e.CAROUSEL_TOPIC_CLICK_LOADING), TRC.Timeout.set(() => {
                        TRC.dom.removeClass(t, e.CAROUSEL_TOPIC_CLICK_LOADING);
                    }, 2000);
                }
                getOnBoarding() {
                    return `<div class="${ e.CAROUSEL_ONBOARDING }">${ this.options.onBoardingText }</div>`;
                }
            }
            TRC.StoriesCarousel = i;
        })(), (() => {
            class e {
                constructor(e) {
                    this.trcManager = e, this.stories = {}, this.configs = {};
                }
                static lazyLoadStoriesModules() {
                    TRC.StoriesVerticalUi || TRC.ModuleLoader.load('stories-vertical-ui', TRC.StoriesVerticalUi, () => {
                        TRC.dispatch('vertical-ui-loaded');
                    });
                }
                createNewStories(t, i) {
                    e.lazyLoadStoriesModules(), Object.keys(t).forEach(r => {
                        if (this.stories[r])
                            return void __trcWarn(`Stories already created for '${ r }'`);
                        const n = t[r], o = e.parseStoriesOptionsFromResponse(n);
                        o.storiesPlacementsAmount = i, TRC.VirtualPlacementsManager.handleVirtualPlacement(this.trcManager, r), this.stories[r] = new TRC.Stories(this.trcManager, r, o);
                    });
                }
                handleStoryPlacement(e, t) {
                    t.isStories = !0, t.parentStories = this.getRelevantStories(e), t.parentStories.handlePlacement(t);
                }
                getRelevantStories(e) {
                    return this.stories[e.stpl];
                }
                static parseStoriesOptionsFromResponse({
                    sti: e,
                    sui: t,
                    fv: i,
                    st: r
                }) {
                    return {
                        storiesProductId: e,
                        storiesUi: t || {},
                        enableFeedView: TRC.util.isTrue(i),
                        injectScStrategy: r || 'static'
                    };
                }
            }
            TRC.StoriesManager = e;
        })(), (() => {
            const e = {
                    STORIES_CONTAINER: 'tbl-stories-container',
                    PLACEMENTS_CONTAINER: 'tbl-stories-placements-container',
                    CAROUSEL_CONTAINER: 'tbl-stories-carousel-container',
                    STORIES_PLACEMENT: 'tbl-stories-placement'
                }, t = {
                    MAIN_CONTAINER_ID: 'data-stories-main-container-id',
                    STORY_INDEX: 'data-story-index',
                    STORY_TOPIC_INDEX: 'data-story-topic-index',
                    STORY_TOPIC: 'data-story-topic'
                };
            class i {
                constructor(e, t, r) {
                    this.trcManager = e, this.storiesPlacements = {}, this.topics = {}, this.options = r, this.unifiedPlacementName = t, this.numPlacements = 0, this.numTopics = 0, this.container = this.trcManager.preloadRequest[t].container, this.parentContainerId = this.container.id, i.injectCss(), this.createStoriesContainer(), this.storiesCarouselInstance = new TRC.StoriesCarousel(this);
                }
                static injectCss() {
                    TRC.dom.injectStyle(`.tbl-stories-container { height: 105px; width: 100vw; font-family: helvetica, arial, sans-serif; -webkit-overflow-scrolling: auto; padding-top: 10px; margin-bottom: 5px; } .tbl-stories-container .tbl-stories-placement { display: none; }`);
                }
                createStoriesContainer() {
                    TRC.dom.addClass(this.container, e.STORIES_CONTAINER), this.container.setAttribute(t.MAIN_CONTAINER_ID, this.unifiedPlacementName), this.placementsContainer = TRC.dom.createHTMLElement('section', { className: e.PLACEMENTS_CONTAINER });
                }
                handlePlacement(i) {
                    const {
                        placement: r,
                        trcResponse: n
                    } = i;
                    if (this.storiesPlacements[r])
                        return void __trcWarn(`Stories placement already created for '${ r }'`);
                    const o = document.createElement('section');
                    i.container = o, i.modeGroupOrder = ++this.numPlacements, o.setAttribute(t.STORY_INDEX, this.numPlacements), o.placementData = i, o.id = `${ this.parentContainerId }-pl${ this.numPlacements }`, TRC.dom.addClass(o, e.STORIES_PLACEMENT), this.handleTopicRelatedPlacement(o, n), this.placementsContainer.appendChild(o), this.isStoriesLastPlacement(), this.storiesPlacements[r] = i;
                }
                isStoriesLastPlacement() {
                    if (this.options.storiesPlacementsAmount === this.numPlacements) {
                        const {carouselContainer: e} = this.storiesCarouselInstance;
                        this.container.appendChild(e), this.container.appendChild(this.placementsContainer), this.storiesCarouselInstance.carouselReady(), TRC.EventsAPI.dispatchStoriesLoaded();
                    }
                }
                renderVerticalUiPlacements(e, t) {
                    this.verticalUi || (this.verticalUi = new TRC.StoriesVerticalUi(this)), t && this.verticalUi.handleVerticalUiLayout(), this.verticalUi.openVerticalUi(e);
                }
                handleTopicRelatedPlacement(e, r) {
                    const {
                        categoryId: n,
                        categoryTitle: o,
                        categoryImage: a
                    } = i.getPlacementCategoryData(r);
                    if (!n)
                        return;
                    e.setAttribute(t.STORY_TOPIC, n), e.setAttribute(t.STORY_TOPIC_INDEX, ++this.numTopics);
                    const s = {
                        id: n,
                        title: o || n,
                        imageUrl: this.storiesCarouselInstance.getTopicImage(a, r.v),
                        slotPosition: this.numPlacements,
                        placementContainer: e
                    };
                    this.topics[n] = s, this.storiesCarouselInstance.addTopic(s);
                }
                static getPlacementCategoryData(e) {
                    const {
                        cid: t,
                        ct: i,
                        ciu: r
                    } = e;
                    return {
                        categoryId: t,
                        categoryTitle: i,
                        categoryImage: r
                    };
                }
            }
            TRC.Stories = i;
        })(), function () {
            let e = !1;
            const t = {
                    SHOW_ITEM: 'tbl-show-item',
                    NEXT_ITEM: 'tbl-next-item',
                    REMOVE_LEFT: 'tbl-remove-item',
                    REMOVE_RIGHT: 'tbl-remove-item-to-right',
                    IMAGE_HOLDER: 'thumbBlock_holder',
                    ZOOM_IN: TRC.Browser.ie ? '' : 'tbl-zoom-in-item',
                    PROGRESS_BAR_WRAPPER: 'tbl-story-progressBar-wrp',
                    PROGRESS_BAR_WRAPPER_TEXT_OVER: 'tbl-story-progressBar-wrp-text-over',
                    PROGRESS_BAR_OVERFLOW_WRAPPER: 'tbl-story-progressBar-overflow-wrp',
                    PROGRESS_BAR: 'tbl-story-progressBar',
                    PROGRESS_RUNNER: 'tbl-progress-runner',
                    PROGRESS_ANIM: 'tbl-progress-anim',
                    PREVENT_CLICK: 'tbl-prevent-click-progressBar',
                    ARROW_BUTTON: 'tbl-arrow-btn',
                    CLICKABLE_AREA: 'tbl-clickable-area-btn',
                    TOUCH_DEVICE: 'tbl-story-touch-device',
                    DESKTOP: 'tbl-story-desktop',
                    TEXT_UNDER_CONTROLS: 'tbl-text-under-controls',
                    TEXT_OVER: 'story-widget-text-over',
                    TEXT_UNDER_SLIDE_IN: 'story-widget-text-under-slide-in',
                    TEXT_UNDER_RTL: 'story-widget-text-under-rtl',
                    HIDDEN: 'tbl-hidden',
                    LABEL_SHOW: 'label-show',
                    ANIMATION_ZOOM_IN: 'tbl-animation-zoom-In'
                }, i = {
                    SLIDE_OUT_LEFT: 'tbl-animation-slide-out-left',
                    SLIDE_OUT_RIGHT: 'tbl-animation-slide-out-right',
                    PROGRESS_BAR_ANIMATION: 'tbl-animation-progress-bar'
                }, r = {
                    LABELS: '.item-label-href',
                    LABELS_BOX: '.item-label-href .video-label-box',
                    LABELS_BRANDING: '.item-label-href .branding',
                    LABELS_GRADIENT_CONTAINER: 'tbl-text-over-container',
                    LABELS_GRADIENT_OVERLAY: 'tbl-text-over',
                    LABELS_ALIGN: 'tbl-text-over-align',
                    LABELS_ALIGN_LEFT: 'tbl-text-over-labels-left',
                    LABELS_ALIGN_RIGHT: 'tbl-text-over-labels-right',
                    VIDEO_TITLE: 'video-title'
                }, n = [
                    i.SLIDE_OUT_LEFT,
                    i.SLIDE_OUT_RIGHT
                ], o = 56, a = 0.15, s = 100, l = 300, c = 270, d = -38, h = -35, u = {
                    BACK: 'back',
                    PLAY: 'play',
                    PAUSE: 'pause',
                    FORWARD: 'forward'
                }, p = {
                    play: 'running',
                    pause: 'paused'
                };
            class m {
                constructor(i) {
                    this.props = m.GetStoryWidgetProps(i), this.active = !1, this.finishFirstCycle = !1, this.browserWidth = TRC.dom.getWindowWidth(), this.internalc = i.internalContainer, this.mainContainer = i.container, this.rbox = i, this.setNumOfItems(i.responsiveRules), this.items = Array.prototype.slice.call(i.boxes, 0, this.amountOfItems), this.intervalLength = this.props.storyInterval, this.debugWidget = -1 !== window.location.search.indexOf('tbl-debug=true'), this.isTouchDevice = TRC.Device.isTouchDevice, this.deviceType = this.isTouchDevice ? t.TOUCH_DEVICE : t.DESKTOP, this.calcImageHeight(), this.thumbnailPosition = i.getThumbnailPosition(), this.isTextOver = 'under' === this.thumbnailPosition, this.direction = m.getDirection(i), this.isTextUnderSlideIn = m.checkIsTextUnderSlideIn(i) && !this.isTextOver, this.state = {
                        previousItem: null,
                        showItem: this.items[0],
                        showNextItem: this.items[1],
                        activePB: null,
                        previousPosition: null,
                        currentPosition: 0
                    }, !e && m.setDefaultCss();
                    const r = TRC.listen('trcContentReady', e => {
                        e.container === this.mainContainer && this.init(r);
                    });
                }
                static shouldInitStoryWidget(e) {
                    return !0 === e.trc.getProperty(e.mode_name, 'storyWidget', e.propertiesOverride);
                }
                static GetStoryWidgetProps(e) {
                    return { storyInterval: e.trc.getProperty(e.mode_name, 'storyWidget-story-interval', e.propertiesOverride) || 7 };
                }
                static checkIsTextUnderSlideIn(e) {
                    return TRC.util.isTrue(e.trc.getProperty(e.mode_name, 'storyWidget-recommendation-reel-enable-text-under-slide-in'));
                }
                static setTextOverForStoryWidget(e, t) {
                    const i = document.createElement('span'), n = this.getDirection(e);
                    TRC.dom.addClass(i, r.LABELS_GRADIENT_OVERLAY), t.link.appendChild(i), TRC.dom.addClass(t.link, r.LABELS_GRADIENT_CONTAINER), this.alignLabelsBox(t, n), this.addArrowIcon(t.link, n);
                }
                calcImageHeight() {
                    this.imageHeight = m.getOuter('height', this.items[0].querySelector(`.${ t.IMAGE_HOLDER }`)), this.imageWidth = m.getOuter('width', this.items[0].querySelector(`.${ t.IMAGE_HOLDER }`));
                }
                init(e) {
                    const t = this.getStoryTypeContainerClass();
                    try {
                        e.remove(), setTimeout(() => {
                            this.container = this.mainContainer.querySelector('.trc_rbox_container'), TRC.dom.addClass(this.container, `story-widget ${ t } ${ this.deviceType }`), TRC.dom.addClass(this.internalc, 'tbl-recommendation-reel'), this.isTextUnderSlideIn && (this.addLabelsBoxAnimatedElements(), this.calcLabelBoxSizes()), this.calcImageHeight(), this.buildStoryWidget(), this.setDynamicCss(), TRC.dispatch('widgetHeightReady');
                        }, 0);
                        const i = {
                            onEnter: this.startTheStory.trcBind(this),
                            onExit: this.stopTheStory.trcBind(this),
                            targetElement: this.internalc
                        };
                        TRC.intersections.observe(i);
                    } catch (e) {
                        __trcError('error on reco reel initialisation', e);
                    }
                }
                buildStoryWidget() {
                    if (this.rbox.trc.sendAbTestEvent('animated_story', 'available'), this.listenToAnimationEvents(), this.arrows = [], this.clickedAreas = [], this.progressBar = this.createProgressBar(), this.internalc.parentNode.appendChild(this.progressBar), this.allowRecalculateSize = !0, this.deviceType === t.DESKTOP)
                        this.arrows = [], this.isTextUnderSlideIn || (this.arrows = this.createArrowBtns(), TRC.dom.on(this.internalc, 'mouseover', this.playStateAnimation.trcBind(this, 'paused')), TRC.dom.on(this.internalc, 'mouseleave', this.playStateAnimation.trcBind(this, 'running')));
                    else {
                        this.clickedAreas = this.createMobileClickedArea();
                        const e = document.createElement('div');
                        e.className = t.PREVENT_CLICK, this.progressBar.appendChild(e);
                    }
                    const e = this.calcCardHeight();
                    this.isTextUnderSlideIn ? (this.createControls(), this.responsiveAlignmentTextUnder(e)) : this.responsiveAlignment(e), TRC.dom.on(window, 'resize', TRC.util.debounce(() => {
                        this.recalculateWidgetSize(e), this.isTextUnderSlideIn && this.calcLabelBoxSizes();
                    }, 100, !1, this));
                }
                recalculateWidgetSize(e) {
                    e.item.style.removeProperty('top'), e.itemHeight = m.getOuter('height', e.item), this.isTextUnderSlideIn ? this.responsiveAlignmentTextUnder(e) : this.responsiveAlignment(e);
                }
                static getConsts() {
                    return {
                        CSS_CLASSES: t,
                        CSS_ANIMATION: i,
                        SLIDE_EVENTS: n,
                        ARROW_SIZE: o,
                        PROGRESS_BAR_HEIGHT: s
                    };
                }
                setNumOfItems(e) {
                    const t = this.rbox.boxes.length;
                    e ? e.forEach(e => {
                        const i = e.min < this.browserWidth && (this.browserWidth < e.max || void 0 === e.max), r = e.rows * e.cells, n = r <= t;
                        i && (this.amountOfItems = n ? r : t);
                    }) : this.amountOfItems = t;
                }
                getStoryTypeContainerClass() {
                    let e = '';
                    return this.isTextUnderSlideIn ? (e = t.TEXT_UNDER_SLIDE_IN, 'rtl' === this.direction && (e += ` ${ t.TEXT_UNDER_RTL }`)) : this.isTextOver && (e = t.TEXT_OVER), e;
                }
                static setDefaultCss() {
                    e = !0, TRC.dom.injectStyle(`div.story-widget { position: relative; /*DEFAULTS */ /*EVENTS*/ /*PROGRESS BAR */ /*ARROWS */ } div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { position: absolute; } div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { width: 91%; } div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-right { right: 0; left: auto; } div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-left { left: 0; right: auto; } div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp { position: absolute; width: 100%; font-size: 0; background: -webkit-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(1, 0, 0, 0.8)), to(rgba(0, 0, 0, 0))); background: -o-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); } div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar { top: 5px; height: 2px; } div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar { pointer-events: auto; } div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 0; } div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { bottom: 10px; } div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right { right: 3%; } div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left { left: 3%; } div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-story-progressBar-wrp { opacity: 0; transform: translateY(100px); } div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-story-progressBar-wrp-text-over { opacity: 1; transform: none; } div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 15px; } div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow { bottom: 20px; } div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-right { right: 4%; } div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-left { left: 4%; } div.story-widget .trc_rbox_outer { margin: 0; } div.story-widget .trc_rbox_outer .trc_rbox_div { overflow: hidden; } div.story-widget .trc_rbox_outer .videoCube { position: absolute; width: 100%; margin: 0; bottom: 0; } div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder { overflow: hidden; z-index: -1; } div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock_placeholder { background-color: #aeaeae; position: absolute; top: 0; left: 0; width: 100%; height: 100%; } div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock_placeholder svg { width: 100px; height: 100px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); } div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock { -webkit-transform: scale(1.00); -moz-transform: scale(1.00); -ms-transform: scale(1.00); -o-transform: scale(1.00); transform: scale(1.00); } div.story-widget .trc_rbox_outer .videoCube .video-label-box { z-index: -1; opacity: 0; } div.story-widget .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container { z-index: -1; opacity: 0; } div.story-widget .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container .video-label-box { z-index: auto; opacity: 1; } div.story-widget .videoCube.tbl-show-item { z-index: 1; } div.story-widget .videoCube.tbl-show-item .thumbBlock_holder { z-index: 1; } div.story-widget .videoCube.tbl-show-item .video-label-box { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.story-widget .videoCube.tbl-show-item .item-label-href.tbl-text-over-container { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.story-widget .videoCube.tbl-show-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; z-index: auto; } div.story-widget .videoCube.tbl-show-item .tbl-labels-arrow-right { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.story-widget .videoCube.tbl-show-item .tbl-labels-arrow-left { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.story-widget .videoCube.tbl-remove-item .thumbBlock_holder { -webkit-animation: tbl-animation-slide-out-left 0.75s; -moz-animation: tbl-animation-slide-out-left 0.75s; -ms-animation: tbl-animation-slide-out-left 0.75s; -o-animation: tbl-animation-slide-out-left 0.75s; animation: tbl-animation-slide-out-left 0.75s; } div.story-widget .videoCube.tbl-remove-item .video-label-box { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.story-widget .videoCube.tbl-remove-item .tbl-labels-arrow-right { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget .videoCube.tbl-remove-item .tbl-labels-arrow-left { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget .videoCube.tbl-remove-item-to-right .thumbBlock_holder { -webkit-animation: tbl-animation-slide-out-right 0.75s; animation: tbl-animation-slide-out-right 0.75s; } div.story-widget .videoCube.tbl-remove-item-to-right .video-label-box { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.story-widget .videoCube.tbl-next-item .video-label-box { opacity: 0; } div.story-widget .videoCube.tbl-next-item .item-label-href.tbl-text-over-container { opacity: 0; } div.story-widget .videoCube.tbl-next-item .item-label-href.tbl-text-over-container .video-label-box { opacity: 0; } div.story-widget .videoCube.tbl-next-item .thumbBlock_holder { z-index: 0; } div.story-widget .tbl-story-progressBar-overflow-wrp { z-index: 9; position: absolute; pointer-events: none; overflow: hidden; width: 100%; } div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp { direction: ltr; width: 100%; box-sizing: border-box; position: absolute; padding: 0 4%; background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.8) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(1, 0, 0, 0.8))); background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.8) 100%); background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.8) 100%); opacity: 1; } div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar { position: relative; top: 85px; display: inline-block; vertical-align: top; /* set bars to the absolute top container when using inline block */ width: 23%; height: 3px; background-color: rgba(255, 255, 255, 0.4); margin: 0 1%; overflow: hidden; } div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner { width: 100%; height: 100%; position: absolute; left: 0; overflow: hidden; display: block; background-color: #fcfcfc; } div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim { -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over { padding: 0 3%; background: none; } div.story-widget .tbl-arrow-btn { position: absolute; background-color: rgba(0, 0, 0, 0.419608); z-index: 2; font-size: 40px; text-align: center; color: #ffffff; cursor: pointer; line-height: 0; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none; -webkit-transition: transform 1s; -moz-transition: transform 1s; -ms-transition: transform 1s; -o-transition: transform 1s; transition: transform 1s; display: none; } div.story-widget .tbl-arrow-btn svg { transform: translateY(50%); } div.story-widget .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: scaleX(-1); -moz-transform: scaleX(-1); -ms-transform: scaleX(-1); -o-transform: scaleX(-1); transform: scaleX(-1); } div.story-widget .tbl-clickable-area-btn { position: absolute; z-index: 2; } div.story-widget .tbl-clickable-area-btn.tbl-clickable-area-back { left: 0; } div.story-widget .tbl-clickable-area-btn.tbl-clickable-area-forward { right: 0; }@-webkit-keyframes tbl-animation-slide-out-left { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(-100%); -moz-transform: translateX(-100%); -ms-transform: translateX(-100%); -o-transform: translateX(-100%); transform: translateX(-100%); } }@keyframes tbl-animation-slide-out-left { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(-100%); -moz-transform: translateX(-100%); -ms-transform: translateX(-100%); -o-transform: translateX(-100%); transform: translateX(-100%); } }@-webkit-keyframes tbl-animation-slide-out-right { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }@keyframes tbl-animation-slide-out-right { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }@-webkit-keyframes tbl-animation-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }@keyframes tbl-animation-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }@-webkit-keyframes tbl-animation-fade-out { 0% { opacity: 1; } 100% { opacity: 0; } }@keyframes tbl-animation-fade-out { 0% { opacity: 1; } 100% { opacity: 0; } }@-webkit-keyframes tbl-animation-zoom-In { 0% { -webkit-transform: scale(1.00); -moz-transform: scale(1.00); -ms-transform: scale(1.00); -o-transform: scale(1.00); transform: scale(1.00); } 100% { -webkit-transform: scale(1.1); -moz-transform: scale(1.1); -ms-transform: scale(1.1); -o-transform: scale(1.1); transform: scale(1.1); } }@keyframes tbl-animation-zoom-In { 0% { -webkit-transform: scale(1.00); -moz-transform: scale(1.00); -ms-transform: scale(1.00); -o-transform: scale(1.00); transform: scale(1.00); } 100% { -webkit-transform: scale(1.1); -moz-transform: scale(1.1); -ms-transform: scale(1.1); -o-transform: scale(1.1); transform: scale(1.1); } }@-webkit-keyframes tbl-animation-progress-bar { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }@keyframes tbl-animation-progress-bar { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }`), TRC.dom.injectStyle(`div.story-widget.story-widget-text-over { position: relative; /*DEFAULTS */ /*EVENTS*/ /*PROGRESS BAR */ } div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { position: absolute; } div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { width: 91%; } div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-right { right: 0; left: auto; } div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-left { left: 0; right: auto; } div.story-widget.story-widget-text-over.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp { background: -webkit-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(1, 0, 0, 0.8)), to(rgba(0, 0, 0, 0))); background: -o-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); } div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 0; } div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { bottom: 10px; } div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right { right: 3%; } div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left { left: 3%; } div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-arrow-btn.tbl-arrow-left { left: 0; } div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-arrow-btn.tbl-arrow-right { right: 0; } div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-story-progressBar-wrp { opacity: 0; transform: translateY(100px); } div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-story-progressBar-wrp-text-over { opacity: 1; transform: none; } div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 15px; } div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow { bottom: 20px; } div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-right { right: 4%; } div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-left { left: 4%; } div.story-widget.story-widget-text-over .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container { z-index: -1; opacity: 0; } div.story-widget.story-widget-text-over .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container .video-label-box { opacity: 1; } div.story-widget.story-widget-text-over .videoCube.tbl-show-item .item-label-href.tbl-text-over-container { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.story-widget.story-widget-text-over .videoCube.tbl-show-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; z-index: auto; } div.story-widget.story-widget-text-over .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget.story-widget-text-over .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.story-widget.story-widget-text-over .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.story-widget.story-widget-text-over .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.story-widget.story-widget-text-over .videoCube.tbl-next-item .item-label-href.tbl-text-over-container { opacity: 0; } div.story-widget.story-widget-text-over .videoCube.tbl-next-item .item-label-href.tbl-text-over-container .video-label-box { opacity: 0; } div.story-widget.story-widget-text-over .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over { padding: 0 3%; background: none; }`), TRC.dom.injectStyle(`.story-widget-text-under-slide-in .tbl-ui-line { background-color: #333333; }.story-widget-text-under-slide-in .tbl-text-under-title-background { background-color: #EBEBEB; }.story-widget.story-widget-text-under-slide-in { /*Here added weak selectors for css client properties to be able to override SW styles*/ /* Device specifics */ /*DEFAULTS */ /*PROGRESS BAR */ /* Control buttons */ } .story-widget.story-widget-text-under-slide-in .video-label-box { margin: 0; max-height: initial; } .story-widget.story-widget-text-under-slide-in .video-title { max-height: initial; } .story-widget.story-widget-text-under-slide-in .branding { display: inline-block; } .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href { left: 10px; width: 90%; } .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .video-label-box, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper { top: -35px; } .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .video-title, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .video-title { margin: 10px 0 10px 7px; } .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar { top: 7px; height: 2px; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer { /*EVENTS*/ } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href { position: absolute; left: 20px; width: 90%; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box { position: absolute; top: -38px; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding { z-index: 0; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title { position: relative; margin: 10px 0 10px 7px; left: 5px; opacity: 0; transition: opacity .3s; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title.label-show { opacity: 1; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background { position: absolute; display: inline; top: 0; left: -5px; width: 122%; height: 100%; z-index: -1; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding.tbl-branding-on-top { top: -2px; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding { margin: 0 0 0 12px; position: relative; left: -110%; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding.label-show { left: 0; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper { position: absolute; top: -38px; left: 0; display: block; overflow: hidden; width: 5px; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .tbl-ui-line { position: absolute; top: 0; left: 0; right: 0; bottom: 100%; transition: bottom .3s; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .tbl-ui-line.label-show { bottom: 0; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper { position: absolute; top: -38px; left: 5px; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .tbl-text-under-title-background { position: absolute; top: 0; height: 100%; width: 0; transition: width .3s; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .tbl-text-under-title-background.label-show { width: 100%; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item { z-index: 1; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .thumbBlock_holder { z-index: 1; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .branding { z-index: 2; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-remove-item .thumbBlock_holder { -webkit-animation: tbl-animation-slide-out-left 0.75s; -moz-animation: tbl-animation-slide-out-left 0.75s; -ms-animation: tbl-animation-slide-out-left 0.75s; -o-animation: tbl-animation-slide-out-left 0.75s; animation: tbl-animation-slide-out-left 0.75s; } .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-next-item .thumbBlock_holder { z-index: 0; } .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp { top: 0; } .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp { background: -webkit-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(1, 0, 0, 0.8)), to(rgba(0, 0, 0, 0))); background: -o-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); } .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar { top: 10px; } .story-widget.story-widget-text-under-slide-in .tbl-text-under-controls { position: absolute; right: 10px; z-index: 2; direction: ltr; } .story-widget.story-widget-text-under-slide-in .tbl-text-under-controls span { cursor: pointer; } .story-widget.story-widget-text-under-slide-in .tbl-text-under-controls span svg { width: 33px; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href { left: auto; right: 20px; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-title { margin: 10px 7px 10px 0; left: auto; right: 5px; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding { position: relative; margin: 0 12px 0 0; left: auto; right: -110%; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background { left: auto; right: -5px; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding.label-show { left: auto; right: 0; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper { left: auto; right: 0; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper { left: auto; right: 5px; } .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .tbl-text-under-controls { right: auto; left: 10px; }`);
                }
                setDynamicCss() {
                    const e = `${ this.intervalLength }s`, t = `${ +this.intervalLength + 0.5 }s`, i = `${ o }`, r = this.rbox.mode_name, n = this.isTouchDevice ? Math.round(0.3 * this.imageHeight) : s, a = this.isTouchDevice ? Math.round(0.15 * this.imageHeight) : 0, l = this.imageHeight - s;
                    TRC.dom.injectStyle(`.story-widget.tbl-story-touch-device .${ r } .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar { height: ${ a }px; }.story-widget .${ r } { /*EVENTS*/ } .story-widget .${ r } .videoCube.tbl-show-item.tbl-zoom-in-item .thumbBlock_holder .thumbBlock { -webkit-animation: tbl-animation-zoom-In ${ t } ease-in; -moz-animation: tbl-animation-zoom-In ${ t } ease-in; -ms-animation: tbl-animation-zoom-In ${ t } ease-in; -o-animation: tbl-animation-zoom-In ${ t } ease-in; animation: tbl-animation-zoom-In ${ t } ease-in; } .story-widget .${ r } .tbl-story-progressBar-overflow-wrp { height: ${ n }px; } .story-widget .${ r } .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp { height: ${ n }px; -webkit--webkit-transition: all 1s; -moz--webkit-transition: all 1s; -ms--webkit-transition: all 1s; -o--webkit-transition: all 1s; -webkit-transition: all 1s; } .story-widget .${ r } .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-progress-anim { -webkit-animation: tbl-animation-progress-bar ${ e } linear; -moz-animation: tbl-animation-progress-bar ${ e } linear; -ms-animation: tbl-animation-progress-bar ${ e } linear; -o-animation: tbl-animation-progress-bar ${ e } linear; animation: tbl-animation-progress-bar ${ e } linear; } .story-widget .${ r } .tbl-arrow-btn { height: ${ i }px; width: ${ i }px; display: block; } .story-widget .${ r } .tbl-clickable-area-btn { top: ${ a }px; width: ${ i }px; height: ${ this.imageHeight - a }px; } .story-widget .${ r } .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: translateX(${ -1 * i }px) scaleX(-1); -moz-transform: translateX(${ -1 * i }px) scaleX(-1); -ms-transform: translateX(${ -1 * i }px) scaleX(-1); -o-transform: translateX(${ -1 * i }px) scaleX(-1); transform: translateX(${ -1 * i }px) scaleX(-1); } .story-widget .${ r } .tbl-arrow-btn.tbl-arrow-right { -webkit-transform: translateX(${ 1 * this.imageWidth + 1 * i }px); -moz-transform: translateX(${ 1 * this.imageWidth + 1 * i }px); -ms-transform: translateX(${ 1 * this.imageWidth + 1 * i }px); -o-transform: translateX(${ 1 * this.imageWidth + 1 * i }px); transform: translateX(${ 1 * this.imageWidth + 1 * i }px); }.story-widget.tbl-story-desktop .${ r }:hover .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: scaleX(-1) translateX(0); -moz-transform: scaleX(-1) translateX(0); -ms-transform: scaleX(-1) translateX(0); -o-transform: scaleX(-1) translateX(0); transform: scaleX(-1) translateX(0); }.story-widget.tbl-story-desktop .${ r }:hover .tbl-arrow-btn.tbl-arrow-right { -webkit-transform: translateX(${ 1 * this.imageWidth - 1 * i }px); -moz-transform: translateX(${ 1 * this.imageWidth - 1 * i }px); -ms-transform: translateX(${ 1 * this.imageWidth - 1 * i }px); -o-transform: translateX(${ 1 * this.imageWidth - 1 * i }px); transform: translateX(${ 1 * this.imageWidth - 1 * i }px); }.tbl-rtl .story-widget.tbl-story-desktop .${ r } .tbl-arrow-btn.tbl-arrow-right { -webkit-transform: translateX(${ i }px); -moz-transform: translateX(${ i }px); -ms-transform: translateX(${ i }px); -o-transform: translateX(${ i }px); transform: translateX(${ i }px); }.tbl-rtl .story-widget.tbl-story-desktop .${ r } .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: translateX(${ -1 * this.imageWidth }px) scaleX(-1); -moz-transform: translateX(${ -1 * this.imageWidth }px) scaleX(-1); -ms-transform: translateX(${ -1 * this.imageWidth }px) scaleX(-1); -o-transform: translateX(${ -1 * this.imageWidth }px) scaleX(-1); transform: translateX(${ -1 * this.imageWidth }px) scaleX(-1); }.tbl-rtl .story-widget.tbl-story-desktop .${ r }:hover .tbl-arrow-btn.tbl-arrow-right { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); }.tbl-rtl .story-widget.tbl-story-desktop .${ r }:hover .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: translateX(${ -1 * this.imageWidth + 1 * i }px) scaleX(-1); -moz-transform: translateX(${ -1 * this.imageWidth + 1 * i }px) scaleX(-1); -ms-transform: translateX(${ -1 * this.imageWidth + 1 * i }px) scaleX(-1); -o-transform: translateX(${ -1 * this.imageWidth + 1 * i }px) scaleX(-1); transform: translateX(${ -1 * this.imageWidth + 1 * i }px) scaleX(-1); }`);
                }
                listenToAnimationEvents() {
                    const e = TRC.dom.detectAnimationEvent(this.container, 'end') || 'animationend', t = TRC.dom.detectAnimationEvent(this.container, 'start') || 'animationstart';
                    TRC.dom.on(this.container, t, e => {
                        return this.animationStartHandler(e);
                    }), TRC.dom.on(this.container, e, e => {
                        return this.animationEndHandler(e);
                    });
                }
                static getOuter(e, t) {
                    return t && t.getBoundingClientRect()[e];
                }
                static addASvgArrow() {
                    return `<svg width="17px" height="29px" viewBox="0 0 17 29" version="1.1" xmlns="http://www.w3.org/2000/svg">\n                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                           <g id="Desktop-4-cards" transform="translate(-1073.000000, -436.000000)" fill="#FFFDFD" fill-rule="nonzero">\n                               <g id="Group" transform="translate(1081.500000, 450.500000) scale(-1, 1) translate(-1081.500000, -450.500000) translate(1073.000000, 436.000000)">\n                                   <polygon id="Rectangle-5" transform="translate(8.294336, 8.495231) rotate(45.000000) translate(-8.294336, -8.495231) " points="7.05498966 -1.37457069 9.68971053 -1.39537442 9.53368258 18.3650322 6.8989617 18.3858359"></polygon>\n                                   <polygon id="Rectangle-5" transform="translate(8.294336, 20.257858) scale(1, -1) rotate(45.000000) translate(-8.294336, -20.257858) " points="7.05498966 10.3880565 9.68971053 10.3672528 9.53368258 30.1276594 6.8989617 30.1484631"></polygon>\n                               </g>\n'\n                           </g>\n'\n                       </g>\n'\n                   </svg>`;
                }
                static addASvgPlaceHolder() {
                    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n                     <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">\n                    <animateTransform\n                       attributeName="transform"\n                       dur="0.5s"\n                       from="0 50 50"\n                       to="180 50 50"\n                       type="rotate"\n                       id="strokeBox"\n                       attributeType="XML"\n                       begin="rectBox.end"/>\n                    </rect>\n                     <rect x="27" y="27" fill="#fff" width="46" height="50">\n                    <animate\n                       attributeName="height"\n                       dur="1.3s"\n                       attributeType="XML"\n                       from="50" \n                       to="0"\n                       id="rectBox" \n                       fill="freeze"\n                       begin="0s;strokeBox.end"/>\n                    </rect>\n                  </svg>`;
                }
                static addArrowIcon(e, t) {
                    let i;
                    i = 'ltr' === t ? `<div class="tbl-labels-arrow tbl-labels-arrow-right">\n                          <?xml version="1.0" encoding="UTF-8"?>\n                          <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                          <title>Group 3</title>\n                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n                          <g id="Mobile-SC-CTA" transform="translate(-320.000000, -479.000000)" stroke="#FFFFFF">\n                          <g id="Group-3" transform="translate(321.000000, 480.000000)">\n                          <polyline id="Path" points="8.2173913 5.47826087 13.6956522 10.0434783 8.2173913 14.6086957"></polyline>\n                          <circle id="Oval" cx="10.5" cy="10.5" r="10.5"></circle>\n                          </g>\n                          </g>\n                          </g>\n                          </svg>\n                        </div>` : `<div class="tbl-labels-arrow tbl-labels-arrow-left">\n                    <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\n                    <svg width="23px" height="23px"\n                         viewBox="0 0 23 23"\n                         version="1.1"\n                         xmlns="http://www.w3.org/2000/svg"\n                         xmlns:xlink="http://www.w3.org/1999/xlink">\n                      <title id="title37">Group 3</title>\n                      <desc id="desc39">Created with Sketch.</desc>\n                      <g transform="rotate(180,11.5,11.5)"\n                         stroke-linejoin="round"\n                         stroke-linecap="round"\n                         fill-rule="evenodd"\n                         fill="none"\n                         stroke-width="1"\n                         stroke="none"\n                         id="Page-1">\n                        <g stroke="#ffffff" transform="translate(-320,-479)" id="Mobile-SC-CTA">\n                          <g transform="translate(321,480)" id="Group-3">\n                            <polyline points="8.2173913 5.47826087 13.6956522 10.0434783 8.2173913 14.6086957" id="Path" />\n                            <circle r="10.5" cy="10.5" cx="10.5" id="Oval" />\n                          </g>\n                        </g>\n                      </g>\n                    </svg>\n                    </div>`, e.insertAdjacentHTML('beforeend', i);
                }
                createControls() {
                    this.controls = document.createElement('div'), TRC.dom.addClass(this.controls, t.TEXT_UNDER_CONTROLS);
                    const e = Object.keys(u).map(e => {
                        return u[e];
                    });
                    e.forEach(e => {
                        return this[`${ e }Button`] = this.createControlButton(e);
                    }), this.internalc.parentNode.insertAdjacentElement('beforeend', this.controls);
                }
                createControlButton(e) {
                    const i = {
                            back: `<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter0_d)">\n                            <rect x="11" y="12.137" width="3.27471" height="14.1904" fill="white"/>\n                            <path d="M27.1615 11.0844C27.0293 11.0181 26.8811 10.99 26.7338 11.0032C26.5865 11.0164 26.4457 11.0704 26.3274 11.1592L16.7761 18.3226C16.6773 18.3967 16.5971 18.4929 16.5418 18.6034C16.4865 18.7139 16.4578 18.8358 16.4578 18.9593C16.4578 19.0829 16.4865 19.2048 16.5418 19.3153C16.5971 19.4258 16.6773 19.522 16.7761 19.5961L26.3274 26.7595C26.4651 26.8629 26.6327 26.9187 26.8049 26.9187C26.9287 26.9182 27.0507 26.8894 27.1615 26.8343C27.2936 26.7682 27.4046 26.6666 27.4822 26.5409C27.5598 26.4152 27.6009 26.2705 27.6009 26.1228V11.7959C27.6009 11.6482 27.5598 11.5035 27.4822 11.3778C27.4046 11.2521 27.2936 11.1505 27.1615 11.0844Z" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter0_d" x="0" y="0" width="38.6009" height="37.9187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`,
                            play: `<svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter1_d)">\n                            <path d="M11.4787 11.0844C11.6228 11.0181 11.7841 10.99 11.9446 11.0032C12.1052 11.0164 12.2585 11.0704 12.3874 11.1592L22.7932 18.3226C22.9009 18.3967 22.9883 18.4929 23.0485 18.6034C23.1087 18.7139 23.14 18.8358 23.14 18.9593C23.14 19.0829 23.1087 19.2048 23.0485 19.3153C22.9883 19.4258 22.9009 19.522 22.7932 19.5961L12.3874 26.7595C12.2373 26.8629 12.0548 26.9187 11.8672 26.9187C11.7323 26.9182 11.5994 26.8894 11.4787 26.8343C11.3348 26.7682 11.2139 26.6666 11.1293 26.5409C11.0448 26.4152 11 26.2705 11 26.1228V11.7959C11 11.6482 11.0448 11.5035 11.1293 11.3778C11.2139 11.2521 11.3348 11.1505 11.4787 11.0844Z" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter1_d" x="0" y="0" width="34.14" height="37.9187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`,
                            pause: `<svg width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter2_d)">\n                            <rect x="11" y="11.0455" width="3.82049" height="15.8278" fill="white"/>\n                            <rect x="18.0952" y="11.0455" width="3.82049" height="15.8278" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter2_d" x="0" y="0.0454712" width="32.9157" height="37.8278" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`,
                            forward: `<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter3_d)">\n                            <rect width="3.27471" height="14.1904" transform="matrix(-1 0 0 1 28.0001 12.137)" fill="white"/>\n                            <path d="M11.8385 11.0844C11.9708 11.0181 12.1189 10.99 12.2663 11.0032C12.4136 11.0164 12.5543 11.0704 12.6727 11.1592L22.2239 18.3226C22.3228 18.3967 22.403 18.4929 22.4583 18.6034C22.5135 18.7139 22.5423 18.8358 22.5423 18.9593C22.5423 19.0829 22.5135 19.2048 22.4583 19.3153C22.403 19.4258 22.3228 19.522 22.2239 19.5961L12.6727 26.7595C12.5349 26.8629 12.3673 26.9187 12.1951 26.9187C12.0714 26.9182 11.9494 26.8894 11.8385 26.8343C11.7065 26.7682 11.5955 26.6666 11.5179 26.5409C11.4403 26.4152 11.3992 26.2705 11.3992 26.1228V11.7959C11.3992 11.6482 11.4403 11.5035 11.5179 11.3778C11.5955 11.2521 11.7065 11.1505 11.8385 11.0844Z" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter3_d" x="0.39917" y="0" width="38.6009" height="37.9187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`
                        }, r = document.createElement('span');
                    e === u.PLAY && TRC.dom.addClass(r, t.HIDDEN), r.innerHTML = i[e];
                    const n = this.generateControlButtonOnClick(e);
                    return TRC.dom.on(r, 'click', n), this.controls.insertAdjacentElement('beforeend', r), r;
                }
                generateControlButtonOnClick(e) {
                    switch (e) {
                    case u.BACK:
                    case u.FORWARD:
                        return TRC.util.debounce(() => {
                            this.animationInProgress || (this.toggleMiddleControlButton(u.PLAY), this.slideCard(e === u.BACK ? 'right' : 'left', !0));
                        }, l, !0, this);
                    case u.PAUSE:
                    case u.PLAY:
                        return this.toggleMiddleControlButton.trcBind(this, e);
                    }
                }
                toggleMiddleControlButton(e) {
                    if (!this.animationInProgress)
                        switch (this.playStateAnimation(p[e]), e) {
                        case u.PLAY:
                            TRC.dom.addClass(this.playButton, t.HIDDEN), TRC.dom.removeClass(this.pauseButton, t.HIDDEN);
                            break;
                        case u.PAUSE:
                            TRC.dom.addClass(this.pauseButton, t.HIDDEN), TRC.dom.removeClass(this.playButton, t.HIDDEN);
                        }
                }
                static getDirection(e) {
                    const t = e.trc.getProperty(e.mode_name, 'direction', e.propertiesOverride);
                    return TRC.direction || t || 'ltr';
                }
                static alignLabelsBox(e, t) {
                    const i = 'rtl' === t ? r.LABELS_ALIGN_RIGHT : r.LABELS_ALIGN_LEFT;
                    TRC.dom.addClass(e.labelsBox, r.LABELS_ALIGN), TRC.dom.addClass(e.labelsBox, i);
                }
                listenToSwipeEvents(e) {
                    const t = {
                        start: {
                            screenX: 0,
                            screenY: 0
                        },
                        end: {
                            screenX: 0,
                            screenY: 0
                        }
                    };
                    TRC.dom.on(e, 'touchstart', e => {
                        t.start = {
                            screenX: e.changedTouches[0].screenX,
                            screenY: e.changedTouches[0].screenY
                        };
                    }), TRC.dom.on(e, 'touchend', i => {
                        t.end = {
                            screenX: i.changedTouches[0].screenX,
                            screenY: i.changedTouches[0].screenY
                        }, this.handleGesture(e, t);
                    });
                }
                handleGesture(e, t) {
                    const {
                            start: i,
                            end: r
                        } = t, n = e.getBoundingClientRect(), {
                            width: o,
                            height: a
                        } = n, s = (r.screenX - i.screenX) / o, l = (r.screenY - i.screenY) / a, c = 0.25;
                    return s > l && s > c ? this.slideCard('right', !0) : s < l && s < -c ? this.slideCard('left', !0) : void 0;
                }
                calcCardHeight() {
                    let e = {
                        itemHeight: 0,
                        item: null
                    };
                    return this.items.forEach((i, r) => {
                        0 === r && (e.item = i);
                        const n = i.querySelector('.thumbBlock_holder');
                        n && n.insertAdjacentHTML('afterbegin', `<div class="thumbBlock_placeholder">${ m.addASvgPlaceHolder() }</div>`);
                        const o = m.getOuter('height', i);
                        i.style.top = 0, o > e.itemHeight && (e = {
                            itemHeight: o,
                            item: i
                        }), this.isTouchDevice && this.listenToSwipeEvents(i.querySelector(`.${ t.IMAGE_HOLDER }`));
                    }), e;
                }
                responsiveAlignment(e) {
                    const {
                        progressBar: t,
                        arrows: i,
                        clickedAreas: r
                    } = this;
                    e.item.style.top = 0, this.calcImageHeight(), e.itemHeight > 0 && (this.internalc.style.height = `${ e.itemHeight }px`);
                    const n = this.items[0];
                    let l = 0;
                    n && n.pre_detail_order && n.pre_detail_order.length > 0 && (l += m.getOuter('height', n.preLabelsBox));
                    const c = `${ this.imageHeight - s + l }px`;
                    t.firstChild.style.top = 0, t.style.top = this.isTouchDevice ? `${ l }px` : c, i.forEach(e => {
                        e.style.top = `${ (this.imageHeight + l) / 2 - o / 2 }px`;
                    }), r.forEach(e => {
                        e.style.width = `${ this.imageWidth * a }px`;
                    });
                }
                responsiveAlignmentTextUnder(e) {
                    const {
                        controls: t,
                        clickedAreas: i
                    } = this;
                    e.item.style.top = 0, this.calcImageHeight();
                    let r = 0;
                    this.items.forEach(e => {
                        const t = m.getOuter('height', e.querySelector('.video-label-box'));
                        r < t && (r = t);
                    }), e.itemHeight > 0 && (this.internalc.style.height = `${ e.itemHeight + r + h }px`);
                    let n = 0.25;
                    const o = parseInt(this.imageHeight, 10);
                    o <= c ? (n = 0.37, !TRC.dom.containsClass(this.container, 'tbl-story-touch-device') && TRC.dom.addClass(this.container, 'tbl-story-touch-device'), TRC.dom.removeClass(this.container, 'tbl-story-desktop')) : (!TRC.dom.containsClass(this.container, 'tbl-story-desktop') && TRC.dom.addClass(this.container, 'tbl-story-desktop'), TRC.dom.removeClass(this.container, 'tbl-story-touch-device')), t.style.top = `${ o - o * n }px`, this.isTouchDevice && i.forEach(e => {
                        e.style.width = `${ this.imageWidth * a }px`;
                    });
                }
                static calcLabelsTopByDetailsOrder(e) {
                    const t = e.querySelector(r.LABELS_BOX), i = TRC.dom.isDesktop();
                    let n = i ? d : h;
                    const o = t.children;
                    for (let a = 0; a < o.length; a++) {
                        const e = o[a];
                        if (TRC.dom.containsClass(e, r.VIDEO_TITLE))
                            break;
                        const t = getComputedStyle(e).height, i = parseInt(t, 10);
                        i > 0 ? n -= i : e.style.display = 'none';
                    }
                    return i && n !== d || !i && n !== h ? n : '';
                }
                static insertBrandingBackground(e) {
                    const t = e.querySelector(r.LABELS_BRANDING);
                    TRC.dom.addClass(t, 'tbl-branding-on-top');
                    const i = `<span class="tbl-text-under-branding-background"></span>`;
                    t.insertAdjacentHTML('beforeend', i);
                }
                addLabelsBoxAnimatedElements() {
                    this.items.forEach(e => {
                        const t = e.querySelector(r.LABELS), i = m.calcLabelsTopByDetailsOrder(e);
                        if (i) {
                            const t = e.querySelector(r.LABELS_BOX);
                            t.style.top = `${ i }px`, m.insertBrandingBackground(e);
                        }
                        const n = `<span class="tbl-ui-line-wrapper">\n                                             <span class="tbl-ui-line"></span></span>\n                                             <span class="tbl-text-under-title-background-wrapper">\n                                             <span class="tbl-text-under-title-background"></span></span>`;
                        t.insertAdjacentHTML('beforeend', n);
                    });
                }
                playStateAnimation(e) {
                    const {
                            activePB: t,
                            showItem: i
                        } = this.state, r = i.querySelector('.thumbBlock'), n = t.firstChild;
                    n && (n.style.webkitAnimationPlayState = e, n.style.animationPlayState = e), r && (r.style.webkitAnimationPlayState = e, r.style.animationPlayState = e);
                }
                createProgressBar() {
                    const e = document.createElement('div');
                    e.className = t.PROGRESS_BAR_OVERFLOW_WRAPPER;
                    const i = document.createElement('div');
                    return i.className = t.PROGRESS_BAR_WRAPPER, 'under' === this.thumbnailPosition && TRC.dom.addClass(i, t.PROGRESS_BAR_WRAPPER_TEXT_OVER), i.insertAdjacentHTML('afterbegin', this.createProgressUnits()), this.progressBars = Array.prototype.slice.call(i.childNodes), this.state.activePB = this.progressBars[0], e.appendChild(i), e;
                }
                createProgressUnits() {
                    let e = '';
                    for (let i = 0; this.amountOfItems > i; i++)
                        e += `<div class="${ t.PROGRESS_BAR }" style="width: ${ 100 / this.amountOfItems - 2 }%" data-progress-bar-index="${ i }"><span class="${ t.PROGRESS_RUNNER }"></span></div>`;
                    return `${ e }`;
                }
                createArrowBtns() {
                    return [
                        'left',
                        'right'
                    ].map(e => {
                        const i = document.createElement('div');
                        return i.className = `${ t.ARROW_BUTTON } tbl-arrow-${ e }`, i.insertAdjacentHTML('beforeend', m.addASvgArrow()), TRC.dom.on(i, 'click', this.slideCard.trcBind(this)), this.internalc.parentNode.appendChild(i), i;
                    });
                }
                createMobileClickedArea() {
                    return [
                        u.BACK,
                        u.FORWARD
                    ].map(e => {
                        const i = document.createElement('div');
                        i.style.height = `${ this.calcImageHeight() }px`;
                        const r = this.isTextUnderSlideIn ? this.generateControlButtonOnClick(e) : this.slideCard.trcBind(this);
                        return i.className = `${ t.CLICKABLE_AREA } tbl-clickable-area-${ e }`, TRC.dom.on(i, 'click', r), this.internalc.parentNode.appendChild(i), i;
                    });
                }
                startTheStory() {
                    if (this.isImageHeightChanged() && this.allowRecalculateSize) {
                        this.allowRecalculateSize = !1;
                        const e = this.calcCardHeight();
                        this.recalculateWidgetSize(e);
                    }
                    this.active = !0, this.restartAnimation();
                }
                isImageHeightChanged() {
                    const {imageHeight: e} = this;
                    return this.calcImageHeight(), e !== this.imageHeight;
                }
                stopTheStory() {
                    this.active = !1;
                }
                restartAnimation() {
                    setTimeout(() => {
                        this.isTextUnderSlideIn && this.calcLabelBoxSizes(), this.updateItem(), this.updateCarouselIteration('left');
                    });
                }
                slideCard(e, t) {
                    if (this.disableClickEvents)
                        return !1;
                    const i = m.resolveAnimationDirection(e, t), {showItem: r} = this.state;
                    return TRCImpl.sendAbTestEvent('animated_story', `click_${ 'left' === i ? 'right' : 'left' }`), this.isTextUnderSlideIn ? this.hideAnimatedLabelBox(r, this.updateIteration.trcBind(this, i)) : this.updateIteration(i), !0;
                }
                static resolveAnimationDirection(e, i) {
                    let r;
                    return r = i ? e : TRC.dom.containsClass(e.currentTarget, t.ARROW_BUTTON) ? TRC.dom.containsClass(e.currentTarget, 'tbl-arrow-left') ? 'right' : 'left' : TRC.dom.containsClass(e.currentTarget, t.CLICKABLE_AREA) && TRC.dom.containsClass(e.currentTarget, 'tbl-clickable-area-back') ? 'right' : 'left';
                }
                updateIteration(e) {
                    e = e || 'left', this.debugWidget && this.debugSlider();
                    let i = 1;
                    const {
                        showNextItem: r,
                        currentPosition: n
                    } = this.state;
                    if ('right' === e) {
                        let e;
                        TRC.dom.removeClass(r, t.NEXT_ITEM), n ? (i = -1, e = n - 1) : e = i = this.amountOfItems - 1, TRC.dom.addClass(this.items[e], t.NEXT_ITEM);
                    }
                    const o = +n + i === this.amountOfItems ? 0 : n + i;
                    this.setState({
                        showPosition: o,
                        nextShowPosition: Number(o + 1) === this.amountOfItems ? 0 : o + 1
                    }), this.updateCarouselIteration(e);
                }
                setState({
                    showPosition: e,
                    nextShowPosition: t
                }) {
                    const i = this.items[e], r = this.items[t], n = this.progressBars[e];
                    return this.state = {
                        previousItem: this.state.showItem,
                        showItem: i,
                        showNextItem: r,
                        activePB: n,
                        previousPosition: this.state.currentPosition,
                        currentPosition: e
                    };
                }
                isFirstIteration() {
                    return null === this.state.previousPosition;
                }
                updateCarouselIteration(e) {
                    if (!this.active)
                        return;
                    const {
                            REMOVE_LEFT: i,
                            REMOVE_RIGHT: r
                        } = t, n = 'left' === e ? i : r, {previousPosition: o} = this.state;
                    !this.isFirstIteration() && this.slideAnimation(n), this.updateProgressBar(), this.progressBars.length - 1 === o && (this.finishFirstCycle = !0);
                }
                debugSlider() {
                    const e = {}, i = [
                            'SHOW_ITEM',
                            'NEXT_ITEM',
                            'REMOVE_LEFT',
                            'REMOVE_RIGHT',
                            'ZOOM_IN'
                        ];
                    this.items.forEach((r, n) => {
                        e[`item_${ n }`] = {}, Object.keys(t).forEach(r => {
                            i.includes(r) && (e[`item_${ n }`][r] = TRC.dom.containsClass(t[r]) ? 'X' : null);
                        });
                    }), console.log(`%c card ${ this.container.dataset.cardIndex }`, `background: #5${ 10 * this.container.dataset.cardIndex }; color: white`), console.table(e);
                }
                slideAnimation(e = (() => {
                    return t.REMOVE_LEFT;
                })()) {
                    const i = this.state.previousPosition, r = this.items[i];
                    TRC.dom.addClass(r, e);
                }
                updateProgressBar() {
                    const {
                        activePB: e,
                        currentPosition: i,
                        previousPosition: r
                    } = this.state;
                    this.isFirstIteration() || TRC.dom.removeClass(this.progressBars[r].firstChild, t.PROGRESS_ANIM), TRC.dom.addClass(e.firstChild, t.PROGRESS_ANIM), this.progressBars.forEach((e, t) => {
                        e.firstChild.style.left = i > t ? '0' : '-100%';
                    });
                }
                updateItem() {
                    const {
                        showItem: e,
                        showNextItem: i,
                        currentPosition: r
                    } = this.state;
                    this.clearThePreviousItem(), document.querySelector(`.${ t.SHOW_ITEM }`) && this.clearAll(), TRC.dom.addClass(e, `${ t.SHOW_ITEM } ${ t.ZOOM_IN }`), TRC.dom.removeClass(e, t.NEXT_ITEM), TRC.dom.addClass(i, t.NEXT_ITEM), this.finishFirstCycle || TRCImpl.sendAbTestEvent('animated_story', `Visible_${ r + 1 }`);
                }
                clearThePreviousItem() {
                    const {previousItem: e} = this.state;
                    return !!e && (m.clearClassNames(e), !0);
                }
                clearAll() {
                    this.items.forEach(e => {
                        return m.clearClassNames(e), !0;
                    });
                }
                static clearClassNames(e) {
                    TRC.dom.removeClass(e, t.SHOW_ITEM), TRC.dom.removeClass(e, t.REMOVE_LEFT), TRC.dom.removeClass(e, t.REMOVE_RIGHT), t.ZOOM_IN && TRC.dom.removeClass(e, t.ZOOM_IN);
                }
                calcLabelBoxSizes() {
                    requestAnimationFrame(() => {
                        this.items.forEach(e => {
                            const t = e.querySelector('.item-label-href .video-title'), i = e.querySelector('.item-label-href .tbl-ui-line-wrapper'), r = e.querySelector('.item-label-href .tbl-text-under-title-background-wrapper'), n = getComputedStyle(t);
                            e.titleElemsAndSizes = {
                                line: i,
                                background: r,
                                titleHeight: `${ parseInt(n.height, 10) + 20 }px`,
                                titleWidth: `${ parseInt(n.width, 10) + 20 }px`
                            };
                        }), this.items.forEach(e => {
                            const {
                                line: t,
                                background: i,
                                titleHeight: r,
                                titleWidth: n
                            } = e.titleElemsAndSizes;
                            t && (t.style.height = r), i && (i.style.height = r, i.style.width = n);
                        });
                    });
                }
                static getLabelBoxElements(e) {
                    return {
                        href: e.querySelector('.item-label-href'),
                        title: e.querySelector('.item-label-href .video-title'),
                        background: e.querySelector('.item-label-href .tbl-text-under-title-background'),
                        branding: e.querySelector('.item-label-href .branding'),
                        description: e.querySelector('.item-label-href .video-description'),
                        line: e.querySelector('.item-label-href .tbl-ui-line')
                    };
                }
                showAnimatedLabelBox(e) {
                    const i = m.getLabelBoxElements(e);
                    Object.keys(i).forEach(e => {
                        TRC.dom.removeClass(i[e], t.LABEL_SHOW);
                    }), i.href && (i.href.style.zIndex = '2'), TRC.dom.addClass(i.line, t.LABEL_SHOW), setTimeout(() => {
                        TRC.dom.addClass(i.background, t.LABEL_SHOW), TRC.dom.addClass(i.branding, t.LABEL_SHOW), TRC.dom.addClass(i.description, t.LABEL_SHOW), setTimeout(() => {
                            TRC.dom.addClass(i.title, t.LABEL_SHOW), this.animationInProgress = !1;
                        }, l);
                    }, l);
                }
                hideAnimatedLabelBox(e, i) {
                    if (this.animationInProgress)
                        return;
                    this.animationInProgress = !0;
                    const r = m.getLabelBoxElements(e);
                    TRC.dom.removeClass(r.title, t.LABEL_SHOW), setTimeout(() => {
                        TRC.dom.removeClass(r.background, t.LABEL_SHOW), TRC.dom.removeClass(r.branding, t.LABEL_SHOW), TRC.dom.removeClass(r.description, t.LABEL_SHOW), setTimeout(() => {
                            TRC.dom.removeClass(r.line, t.LABEL_SHOW), setTimeout(() => {
                                r.href && (r.href.style.zIndex = '-1'), i();
                            }, l);
                        }, l);
                    }, l);
                }
                animationStartHandler(e) {
                    if (this.isTextUnderSlideIn) {
                        const {showItem: t} = this.state;
                        e.animationName === i.PROGRESS_BAR_ANIMATION && this.showAnimatedLabelBox(t);
                    }
                    -1 !== n.indexOf(e.animationName) && (this.disableClickEvents = !0);
                }
                animationEndHandler(e) {
                    if (e.animationName === i.PROGRESS_BAR_ANIMATION)
                        if (this.disableClickEvents = !1, this.isTextUnderSlideIn) {
                            const {showItem: e} = this.state;
                            this.hideAnimatedLabelBox(e, this.updateIteration.trcBind(this));
                        } else
                            this.updateIteration();
                    -1 !== n.indexOf(e.animationName) && (this.disableClickEvents = !1, this.updateItem());
                }
            }
            TRC.StoryWidget = m;
        }(), function () {
            var e = TRC.taboolaConnect = {}, t = !1, i = {}, r = !!(TRC && TRC.mobile && TRC.mobile.reportClick), n = 'dynamic-content-loader';
            function o(e, t) {
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i]);
            }
            function a(e, t) {
                'available' === t && TRC.dispatch('available::' + e.placementName, { container: e.container }), 'click' === t && TRC.dispatch('click::' + e.placementName);
            }
            function s(e, t, i) {
                var r = t.config['max-height'] && parseInt(t.config['max-height']);
                r && parseInt(i.height) > r && (i.height = r), e.height = e.style.height = parseInt(i.height) + 'px';
            }
            e.createIframe = function (t, n, a, s, l, c) {
                if (t) {
                    var d = a || {}, h = Math.floor(2147483648 * Math.random()).toString(36), u = document.createElement('iframe');
                    return d.attributes && o(d.attributes, u), u.style.border = u.frameBorder = u.border = '0', u.style.display = 'block', u.style.height = parseInt(a.height) ? parseInt(a.height) + 'px' : '0px', u.style.width = '100%', u.scrolling = 'no', u.sandbox = d.sandbox || 'allow-same-origin allow-scripts allow-popups allow-forms', d.fifr ? e.lazyLoadDynamicContentLoader(u) : (n = addHashParam(n, 'tbcId', h), n = addHashParam(n, 'lang', c || window.navigator.language), r && (n = addHashParam(n, 'isMobileSDK', '' + r)), u.src = n), i[h] = {
                        origin: s,
                        placementName: l,
                        frame: u,
                        config: a,
                        container: t
                    }, t.innerHTML = '', t.appendChild(u), u;
                }
                __trcError('could not find container to create Iframe within');
            }, e.lazyLoadDynamicContentLoader = function (e) {
                TRC.ModuleLoader.load(n, TRC.dcl, function () {
                    var t = e.contentWindow || e.contentDocument;
                    t && (t.document.open(), t.document.write(TRC.dcl), t.document.close());
                }.trcBind(e));
            }, e.receiveMessage = function (e, t) {
                var r = t.data, n;
                r && i[r.id] && ((void 0 === e.origin ? i[r.id].origin : e.origin) === t.origin && this[r.action] && this[r.action](r.payload ? r.payload : { sizeObject: r.sizeObject }, i[r.id]));
            }, e.openInIframe = function (t, i) {
                var r = i.frame, n = i.container, o = t.iframeArgs, a = {
                        isSmallIOS: function () {
                            return TRCImpl['small-ios-device'].indexOf(TRC.Device.deviceType) >= 0;
                        },
                        getPublisherBrandingName: function () {
                            return o.publisherName;
                        },
                        trc: TRCImpl
                    }, s = {
                        title: o.title,
                        url: o.logger_url,
                        logger_url: o.logger_url
                    };
                new TRC.FeedView(a, s, n), e.postMessage(r, {
                    action: 'openInIframe',
                    message: 'openInIframe done',
                    dimension: { height: r.style.height }
                }, '*');
            }, addHashParam = function (e, t, i) {
                var r, n = t + '=' + i;
                if (e.indexOf('#') > 0) {
                    var o = e.slice(-1);
                    return e + (n = '&' === o || '#' === o ? n : '&' + n);
                }
                return e + '#' + n;
            }, e.getOrigin = function (e) {
                return e.match(/^(https:|http:)?\/\/[^/]+/i)[0];
            }, e.postMessage = function (e, t, i) {
                e.contentWindow.postMessage(t, i);
            }, e.rendered = function (t, i) {
                var r = i.frame, n = i.container, o;
                s(r, i, t.sizeObject), n.className += ' tbl-feed-card', a(i, 'available');
                var l = {
                        action: 'rendered',
                        message: 'rendered done',
                        dimension: { height: r.style.height }
                    }, c = TRCImpl.global['start-magazine-url'];
                c && i.origin === c && (l.publisherId = TRC.publisherId, l.placementName = i.placementName), e.postMessage(r, l, '*');
            }, e.expand = function (t, i) {
                var r = i.frame, n;
                s(r, i, t.sizeObject), e.postMessage(r, {
                    action: 'expand',
                    message: 'expand done',
                    dimension: { height: r.style.height }
                }, '*');
            }, e.click = function (t, i) {
                var r = i.frame, n = t.sizeObject;
                n && s(r, i, n), a(i, 'click'), e.postMessage(r, {
                    action: 'click',
                    message: 'click done',
                    dimension: { height: r.style.height }
                }, '*'), TRC.mobile && TRC.mobile.reportClick && TRC.mobile.reportClick(t.sizeObject);
            }, e.collapse = function (t, i) {
                var r = i.frame, n;
                s(r, i, t.sizeObject), e.postMessage(r, {
                    action: 'collapse',
                    message: 'collapse done',
                    dimension: { height: r.style.height }
                }, '*');
            }, e.maxHeight = function (t, i) {
                var r = i.frame, n = i.config['max-height'] ? i.config['max-height'] : '';
                e.postMessage(r, {
                    action: 'maxHeight',
                    message: n,
                    dimension: { height: r.style.height }
                }, '*');
            }, e.createCard = function (e, i, r, n, o) {
                if (!r.fifr) {
                    var a = this.getOrigin(r.origin || i);
                    if (!a)
                        return void __trcError('non valid origin for third party card');
                }
                t || (window.addEventListener('message', this.receiveMessage.bind(this, r), !1), t = !0), this.createIframe(e, i, r, a, n, o);
            }, e.error = function (e) {
                __trcWarn('External error report to taboola-connect: ' + e);
            }, window._trcIsUTactive && (TRC.taboolaConnect.addHashParam = addHashParam);
        }();
        class TasksExecutorQueue {
            constructor() {
                this.tasks = [], this.runningTask = null;
            }
            add(e) {
                return this.tasks.push(e), 1 === this.tasks.length && this.callNext(), this;
            }
            callNext() {
                if (this.tasks.length)
                    if ('function' == typeof this.tasks[0]) {
                        [this.runningTask] = this.tasks;
                        let e = !1;
                        const t = () => {
                            e || (e = !0, this.tasks.shift(), this.callNext());
                        };
                        this.runningTask.cancel = () => {
                            e = !0;
                        }, this.runningTask(t);
                    } else
                        this.tasks.shift(), this.callNext();
            }
            resetQueue() {
                this.runningTask.cancel(), this.tasks = [];
            }
        }
        TRC.TasksExecutorQueue = TasksExecutorQueue, window, document, TRC.text = {
            replaceAll(e, t, i, r) {
                let n;
                return void 0 !== t && void 0 !== i && t !== i ? (n = new RegExp(t, 'gi'), e.replace(n, 'function' == typeof i && 'object' == typeof r ? i.trcBind(r) : i)) : e;
            },
            lsplit(e, t, i) {
                const r = e.split(t);
                return r.slice(0, i - 1).concat(r.length >= i ? r.slice(i - 1).join(t) : []);
            },
            parseCSV(e) {
                const t = e.split(','), i = [];
                for (; t.length;) {
                    let e = t.shift();
                    if ('"' === e[0]) {
                        do {
                            if ('"' === e.slice(1).replace(/""/g, '').slice(-1))
                                break;
                            e += `,${ t.shift() }`;
                        } while (t.length);
                        i.push(e.slice(1, e.length - 1).replace(/""/g, '"'));
                    } else
                        i.push(e);
                }
                return i;
            },
            toStringList(e) {
                if (!e)
                    return [];
                if (!(e instanceof Array))
                    return [`${ e }`];
                const t = [];
                return e.forEach(e => {
                    e && t.push(`${ e }`);
                }), t;
            },
            htmlUnescape: e => {
                return String(e).replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&#34;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
            },
            encodeHTML: e => {
                return 'string' == typeof e && e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
            },
            toLowerCamelCase(e) {
                if (-1 === e.indexOf('-'))
                    return e;
                const t = e.toLowerCase().split('-').map(e => {
                    return e.charAt(0).toUpperCase() + e.substr(1);
                }).join('');
                return t.charAt(0).toLowerCase() + t.substr(1);
            },
            splitAndJoin(e, t) {
                let i = e.split('.');
                return i = (i = i.map(e => {
                    return t(e);
                })).join('.');
            }
        }, (() => {
            let e = !1;
            const t = {
                    POSITION: {
                        SPONSORED: 'syndicated-static-text-position',
                        ORGANIC: 'organic-static-text-position',
                        EMBLEM: 'emblem-position'
                    },
                    TEXT: {
                        SPONSORED: 'syndicated-static-text',
                        ORGANIC: 'organic-static-text'
                    },
                    SHOW_ORGANIC_FIXED_LABEL: 'organic-show-static-text',
                    EMBLEM: 'emblem'
                }, i = {
                    EMBLEM_WRAPPER: 'thumbnail-emblem',
                    STATIC_TEXT: 'static-text',
                    FIXED_LABEL: 'tbl-fixed-label',
                    BIG_LABEL: 'tbl-big-label',
                    SMALL_LABEL: 'tbl-small-label'
                };
            class r {
                constructor(e, i, n) {
                    const {
                            categoryCard: o,
                            recommendationList: a,
                            add_span: s
                        } = n, l = i ? 'SPONSORED' : 'ORGANIC';
                    if (this.categoryCard = o, this.getModeClientProperty = n.getModeClientProperty.trcBind(n), this.size = a && a.length, this.addSpan = s, this.emblemSrc = this.getModeClientProperty(t.EMBLEM), this.fixedLabelPosition = this.getFixedLabelPosition(i, t.POSITION[l]), this.fixedLabelText = this.getModeClientProperty(t.TEXT[l]), this.emblemSrc && 'null' !== this.emblemSrc && (r.setCss(), this.emblemPosition = this.getModeClientProperty(t.POSITION.EMBLEM) || 'top-left', this.addEmblem(e, l)), !this.emblemRenderd || this.isEmblemAndTextNotOnSamePosition()) {
                        if (this.categoryCard && this.categoryCard.isCategoryCard && !this.categoryCard.render)
                            return;
                        this.addFixedLabel(e, i);
                    }
                }
                static setCss() {
                    e || (e = !0, TRC.dom.injectStyle(`.thumbnail-emblem { height: 35px; width: 35px; }.trc_related_container .thumbnail-emblem.bottom-right, .trc_related_container .static-text.bottom-right { bottom: 0; right: 0; background-position: bottom; }.trc_related_container .thumbnail-emblem.top-right, .trc_related_container .static-text.top-right { top: 0; right: 0; background-position: top; }.trc_related_container .thumbnail-emblem.bottom-left, .trc_related_container .static-text.bottom-left { bottom: 0; left: 0; background-position: bottom; }.trc_related_container .thumbnail-emblem.top-left, .trc_related_container .static-text.top-left { top: 0; left: 0; background-position: top; }.trc_related_container .thumbnail-emblem.top, .trc_related_container .static-text.top { width: 100%; top: 0; }.trc_related_container .thumbnail-emblem.bottom, .trc_related_container .static-text.bottom { width: 100%; bottom: 0; padding: 2px 0; }.trc_related_container .videoCube .thumbBlock .static-text { position: absolute; z-index: 1; margin: 0; padding: 5px; display: block; opacity: 0.7; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label { opacity: 1; padding: 0 5px; text-align: center; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label.tbl-small-label { min-width: 107px; min-height: 27px; line-height: 27px; letter-spacing: 0.31px; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label.tbl-big-label { min-width: 140px; min-height: 33px; font-size: 14px; line-height: 33px; letter-spacing: 0.39px; }.trc_related_container .thumbnail-emblem { background-position-x: center; }`));
                }
                isEmblemAndTextNotOnSamePosition() {
                    return this.emblemRenderd && this.fixedLabelPosition !== this.emblemPosition;
                }
                addEmblem(e) {
                    this.emblemRenderd = !0;
                    const t = this.addSpan(i.EMBLEM_WRAPPER, null, e);
                    t.style.backgroundImage = `url('${ this.emblemSrc }')`, TRC.dom.addClass(t, this.emblemPosition);
                }
                addFixedLabel(e, n) {
                    const o = [i.STATIC_TEXT], a = document.createElement('span');
                    if (!n) {
                        const e = this.getModeClientProperty(t.SHOW_ORGANIC_FIXED_LABEL);
                        if (!e)
                            return;
                        o.push(i.FIXED_LABEL), o.push(1 === this.size ? i.BIG_LABEL : i.SMALL_LABEL), this.categoryCard && this.categoryCard.render && (this.fixedLabelText = this.categoryCard.text);
                    }
                    r.setCss(), o.push(this.fixedLabelPosition), a.className = o.join(' '), this.fixedLabelText && a.appendChild(document.createTextNode(this.fixedLabelText)), e.appendChild(a);
                }
                getFixedLabelPosition(e, t) {
                    const i = e ? 'top-right' : 'bottom-left';
                    return this.getModeClientProperty(t) || i;
                }
            }
            TRC.ThumbnailOverlayComponents = r;
        })(), (e => {
            const t = 'tn_t_on', i = TRC.pageManager.getLocalStorageImplementation('strict-w3c-storage', 'session');
            let r = TRC.taboolaNews && TRC.taboolaNews.timeOn, n = !1;
            if (!r && i)
                try {
                    r = JSON.parse(i.getValue(t)), n = !0;
                } catch (e) {
                    __trcError('Error occurred while trying to read Taboola News data from SessionStorage but object data was corrupted.');
                }
            if (!r)
                return;
            function o() {
                const t = new Date().getTime();
                if (!TRC.isAMP)
                    return e.performance && e.performance.timing && e.performance.timing.navigationStart || t;
                try {
                    const i = JSON.parse(e.context.ca).attributes._context.initialIntersection.time || t;
                    return new Date(e.context.startTime - i);
                } catch (e) {
                    return t;
                }
            }
            !n && i && i.setValue(t, JSON.stringify(r));
            let a = o(), s = -1, l = 0;
            function c(e) {
                e ? a = new Date().getTime() : (s = new Date().getTime(), l += 1, TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent('taboola_news_timeon', `${ l.toString() }::${ (s - a).toString() }`, null, !0));
            }
            TRC.docVisibilityUtil.addEventListener(c);
        })(window), function () {
            function e(e, t) {
                var r = document.createElement('span');
                a(r, 'span');
                for (var n = 0; n < t.length; n++) {
                    var o = i(t[n], e);
                    r.appendChild(o);
                }
                e.appendChild(r);
            }
            function t(e, t) {
                var i;
                if (e && e.contentDocument && t)
                    return (i = e.contentDocument.querySelector('.moat_trackable')).moatObject = {
                        adElement: t,
                        adLoaded: 1,
                        creativeType: 'banner',
                        versions: '1'
                    }, i;
                __trcError('Error occurred while trying to prepare trackable object for MOAT');
            }
            function i(e, i) {
                var n = document.createElement('iframe');
                return a(n, 'iFrame'), e && i ? (e.tag && e.trackableObject ? (n.src = 'javascript:\'<html><head></head><body>' + e.tag + e.trackableObject + '</body></html>\'', TRC.dom.on(n, 'load', function () {
                    e.trackableObject.indexOf('moat_trackable') > -1 && r(t(n, i));
                })) : e.tag ? n.src = 'javascript:\'<html><head></head><body>' + e.tag + '</body></html>\'' : n.src = 'javascript:\'<html><head></head><body>' + e + '</body></html>\'', n) : n;
            }
            function r(e) {
                if (e)
                    try {
                        __trcDebug('dispatching adLoaded event for MOAT'), e.dispatchEvent(new CustomEvent('adLoaded', {
                            bubbles: !0,
                            cancelable: !1
                        }));
                    } catch (e) {
                    }
            }
            function n(e, t) {
                try {
                    TRC.dom.addClass(e, t);
                } catch (e) {
                    __trcError('Error occurred while trying to add tblUniqueTagId To Relevant videoBoxContainer');
                }
            }
            function o(e, t) {
                var i, r = [];
                try {
                    for (var n = 0; n < e.length; n++)
                        i = TRC.TrackingScriptIdAppender && TRC.TrackingScriptIdAppender.setTagDetails(e[n], t), r.push(i);
                } catch (t) {
                    return __trcError('Error occurred while trying to add tblUniqueTagId To Relevant Js Tags'), e;
                }
                return r;
            }
            function a(e, t) {
                e.id = 'script-tracking-' + t + '-' + parseInt(10000 * Math.random(), 10), e.name = e.id, e.width = 0, e.height = 0, e.style.display = 'none';
            }
            TRC.TrackingScriptLoader = {
                TRC_SCRIPT_TAGS_ATTRIBUTE: 'viewability-tags',
                renderScriptTagIntoVideoBox: function (t, i, r) {
                    try {
                        if (t && i && i[this.TRC_SCRIPT_TAGS_ATTRIBUTE] && i[this.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0) {
                            var a = o(i[this.TRC_SCRIPT_TAGS_ATTRIBUTE], r);
                            n(t, r), TRC.MobileSdk.isEnabled() || e(t, a);
                        } else
                            __trcDebug('renderScriptTagIntoVideoBox: videoBoxContainer/recommendation is null or TRC_SCRIPT_TAGS_ATTRIBUTE not exist');
                    } catch (e) {
                        __trcError('failed to add JS script tracking to single videoBoxContainer Container');
                    }
                }
            };
        }(), function () {
            var e = 'adsafeprotected.com', t = 'ias_adpath', i = '.{uniqueId}', r = '></script>', n = 'cdn.doubleverify.com', o = 'btreg', a = 'z.moatads.com', s = 'taboolaTrackable', l, c = new RegExp('(src|SRC)\\s*=\\s*"?(.+?)\\"|\\|s>'), d = [
                    new h(e, t, i, u, !1, null),
                    new h(n, o, null, p, !1, null),
                    new h(a, s, null, m, !0, g)
                ];
            function h(e, t, i, r, n, o) {
                this.tagDomain = e, this.tagParamName = t, this.uniqueParamFormat = i, this.tagUrlExtractor = r, this.hasTrackableObject = n, this.trackableObjectCreator = o;
            }
            function u(e) {
                var t = e.indexOf(r), i = e.slice(0, t);
                return this.extractSrcValue(i);
            }
            function p(e) {
                return this.extractSrcValue(e);
            }
            function m(e) {
                return this.extractSrcValue(e);
            }
            function g() {
                return '<div class="moat_trackable" style="display: none;"></div>';
            }
            h.prototype.isMatchingTagDomain = function (e) {
                return -1 !== e.indexOf(this.tagDomain);
            }, h.prototype.shouldAddTrackableObject = function () {
                return this.hasTrackableObject;
            }, h.prototype.appendId = function (e, t) {
                try {
                    var i = this.tagUrlExtractor(e);
                    if (i)
                        return t = this.formatUniqueId(t), e.replace(i, i + this.getUrlParamsSeparator(i) + this.tagParamName + '=' + t);
                } catch (t) {
                    return __trcWarn('failed to append unique Id to a specific tag: ' + e), e;
                }
                return e;
            }, h.prototype.extractSrcValue = function (e) {
                var t = c.exec(e), i;
                return t[t.length - 1].replace(/^"+|"+$/g, '');
            }, h.prototype.formatUniqueId = function (e) {
                return this.uniqueParamFormat ? this.uniqueParamFormat.replace('{uniqueId}', e) : e;
            }, h.prototype.getUrlParamsSeparator = function (e) {
                return -1 !== e.indexOf('?') || -1 !== e.indexOf('#') ? '&' : '?';
            }, h.prototype.createTrackableObject = function () {
                return this.trackableObjectCreator();
            }, TRC.TrackingScriptIdAppender = {
                setTagDetails: function (e, t) {
                    if (!e || !t)
                        return e;
                    for (var i = 0; i < d.length; i++) {
                        var r = d[i];
                        if (r.isMatchingTagDomain(e)) {
                            var n = {};
                            return n.tag = r.appendId(e, t), r.shouldAddTrackableObject() && (n.trackableObject = r.createTrackableObject()), n;
                        }
                    }
                    return e;
                }
            };
        }(), (() => {
            const e = 'stop_tslt', t = {};
            let i = {}, r = m, n = 'en', o = !0, a = !1, s = !1;
            const l = {};
            function c(e) {
                const {
                        feature: t,
                        label: i = '',
                        data: r = []
                    } = e, o = t + i + n + JSON.stringify(r);
                let a = !1;
                return l[o] ? {
                    cached: a = !0,
                    translation: l[o]
                } : {
                    cached: a,
                    translation: o
                };
            }
            function d(e) {
                n = 'tb-jp' === e ? e.substr(e.indexOf('-') + 1) : e;
            }
            function h(e) {
                Object.keys(e).forEach(t => {
                    TRC.translationManager.register(t, e[t]);
                });
            }
            function u(e, t) {
                if (!e)
                    return;
                const {
                        label: i,
                        data: r
                    } = t, n = e[i];
                return n ? r ? TRC.util.formatString(n, r) : n : e;
            }
            function p(e) {
                const {feature: r} = e;
                let o = i[r];
                const a = u(o, e);
                return 'string' == typeof a ? a : e.data || !a ? (__trcWarn(`TRC.TranslationsManager - language key: ${ n } not recognized for feature ${ r }.`), u(o = t[r].en, e)) : a;
            }
            function m(e) {
                const {feature: i} = e, r = t[i][n];
                return r ? u(r, e) : (__trcWarn(`TRC.TranslationsManager - language key: ${ n } not recognized for feature ${ i }.`), u(t[i].en, e));
            }
            TRC.translationManager = {
                getLabel: e => {
                    const n = e.feature;
                    if (!i[n] && !t[n])
                        return;
                    const {
                        cached: o,
                        translation: a
                    } = c(e);
                    if (o)
                        return a;
                    const s = r(e);
                    return s ? (l[a] = s, s) : void 0;
                },
                setTranslations: t => {
                    if (!o && !a) {
                        if (!t || !TRC.util.hasKeys(t))
                            return __trcWarn('Dynamic Translation load is enabled but response is missing the map. Using embedded solution', null, 1), void (o = !0);
                        i = TRC.util.objectify(t), TRC.pageLevelFeaturesManager.pageLevelFeatures[e] = !0, a = !0, r = p;
                    }
                },
                getAll: e => {
                    return o ? t[e][n] || t[e].en : i[e];
                },
                register: (e, i) => {
                    t[e] = TRC.util.merge(i, t[e]);
                },
                setLanguage: e => {
                    d(e);
                },
                init: (e = (() => {
                    return !1;
                })(), t = (() => {
                    return 'en';
                })()) => {
                    s || (d(t), s = !0, o = !e);
                }
            }, TRC._translationQueue || (TRC._translationQueue = []), TRC._translationQueue.forEach(h), TRC._translationQueue.push = h;
        })(), (e => {
            e.TRC = e.TRC || {};
            const t = 'disable', i = 0;
            let r, n;
            const o = {
                    bulkingStrategy: {
                        delay: (() => {
                            let e = [];
                            return (t, i, r, n, o) => {
                                e.push(r), 1 === e.length && setTimeout(() => {
                                    const i = s(e);
                                    if ((o = o || {}).bulkSize = e.length, TRC.util.isPercentEnabled(TRCImpl.global, 'bulk-body-debug-sample-rate')) {
                                        const e = i.events;
                                        TRC.RBoxUsage.logUsage('Debug body size of bulk events', {
                                            extraData: {
                                                name: 'bulk_body_debug',
                                                method: 'bulkPost',
                                                body: {
                                                    type: typeof e,
                                                    size: (e && e.length) + 0
                                                }
                                            }
                                        });
                                    }
                                    TRC.TRCLogger.post(t, 'bulk', i, n, o), e = [];
                                }, a(i));
                            };
                        })(),
                        sendFirstThenDelay: (() => {
                            const e = {};
                            return (t, i, r, n, a) => {
                                e[i] ? o.bulkingStrategy.delay(t, i, r, n, a) : ((a = a || {}).bulkSize = 1, TRC.TRCLogger.post(t, 'bulk', s([r]), n, a), e[i] = !0);
                            };
                        })()
                    }
                }, a = e => {
                    return 'number' == typeof TRCImpl.global[`bulk-${ e }-events-delay`] ? TRCImpl.global[`bulk-${ e }-events-delay`] : 'number' == typeof TRCImpl.global[`bulk-events-delay`] ? TRCImpl.global[`bulk-events-delay`] : i;
                }, s = e => {
                    return e.forEach(e => {
                        e.data = TRC.TRCLogger.formatParams(e.data);
                    }), {
                        sd: n,
                        ui: r,
                        events: __trcJSONify(e)
                    };
                }, l = (e, t) => {
                    return {
                        type: e,
                        timestamp: Date.now(),
                        data: t
                    };
                }, c = e => {
                    if (e && e !== t) {
                        const t = o.bulkingStrategy[e];
                        if ('function' == typeof t)
                            return t;
                    }
                    return null;
                };
            e.TRC.TRCBulkLogger = TRC.TRCBulkLogger = {
                bulkPost: (e, i, o, a, s) => {
                    const d = TRCImpl.global[`bulk-${ i }-events-strategy`] || t, h = c(d);
                    h ? (n = n || o.sd, r = r || o.ui, h(e, i, l(i, o), a, s)) : (TRC.TRCLogger.post(e, i, o, a, s), d !== t && __trcWarn(`FailedSendingBulkEvent for eventType: ${ i }, with strategy: ${ d }`));
                }
            }, window._trcIsUTactive && (TRC.TRCBulkLogger.privateProps = o);
        })(window), (() => {
            class e {
                constructor(e, t = (() => {
                    return !1;
                })()) {
                    if (this.onlyClean = t, this.pm = TRC.pageManager, this.storageType = e.storageType || 'session', this.localStorage = this.pm.getLocalStorageImplementation('strict-w3c-storage', this.storageType), this.currentSize = 0, this.trcCache = null, this.trcCacheByPlacement = null, this.cacheSize = e.cacheSize || 5, this.cacheTtl = e.ttl || 1000 * 60 * 20, this.disableFeedCache = e.disableFeedCache, this.trcCacheName = e.cacheName || 'trc_cache', this.trcCacheByPlacementName = `${ this.trcCacheName }_by_placement`, this.TRC_CACHE_ACTIVE_STORAGE_KEY = 'trc_cache_active', this.cacheUtils = new TRC.CacheUtils(this.localStorage, this.trcCacheName, this.cacheTtl), this.cacheByPlacementUtils = new TRC.CacheUtils(this.localStorage, this.trcCacheByPlacementName, this.cacheTtl), !this.localStorage)
                        return { isValidCache: !1 };
                    this.isValidCache = !0, this.init();
                }
                extractAndResolveKey(e) {
                    const t = TRC.TrcCache.extractKey(e);
                    return this.getFeedRelatedKeyFromCache(this.trcCacheByPlacement, this.trcCache, t) || t;
                }
                static extractKey(t) {
                    const i = t.it, r = t.ii, n = [];
                    let o = `${ i }=${ r }`;
                    for (let e = 0; e < t.r.length; e++)
                        n.push(`,${ t.r[e].uip }=${ t.r[e].uim }`);
                    return e.sortByPlacements(n), o += n.join(), TRC.isAMPSplitFeed && void 0 !== TRC.currentAmpFrameNum && (!0 === TRC.keyWriting ? (o += TRC.currentAmpFrameNum, TRC.keyWriting = !1) : o += TRC.feedContainerNum), o;
                }
                cacheResponse(e, t) {
                    TRC.tlf && console.time('in cacheResponse');
                    const i = this.setCacheResponse(e, t);
                    return this.currentSize > this.cacheSize && this.removeToLimit(), this.localStorage.setValue(this.trcCacheName, __trcJSONify(this.trcCache.getData())), this.localStorage.setValue(this.trcCacheByPlacementName, __trcJSONify(this.trcCacheByPlacement.getData())), TRC.tlf && console.timeEnd('in cacheResponse'), i;
                }
                setCacheResponse(t, i) {
                    const r = new Date().getTime(), n = this.trcCache.getData();
                    let o;
                    try {
                        if ((o = n[t]) && o.r.trc.f)
                            TRC.TrcCache.updateFeedConfigPropsInCache(i.trc.f, o.r.trc.f), TRC.TrcCache.addNewFeedCardsToCachedResponse(i.trc.vl, o.r.trc.vl);
                        else {
                            const n = {
                                    s: r,
                                    r: i,
                                    vi: this.pm.getPageData()
                                }, o = !(!i.trc || !i.trc.cga) && !!i.trc.cga.selectiveCache;
                            o && (n.is = o), this.trcCache.setValue(t, n), e.splitKeyToPlacementLookupKeys(t).forEach(e => {
                                this.trcCacheByPlacement.setValue(e, t);
                            }), this.currentSize++, this.setCacheClean(t);
                        }
                    } catch (e) {
                        return __trcError('setCacheResponse Error', e), !1;
                    }
                    return !0;
                }
                getCacheResponse(e) {
                    TRC.tlf && console.time('in getCacheResponse');
                    const t = this.trcCache.getValue(e);
                    if (t && !this.isOverTtl(this.trcCache.getValue(e).s)) {
                        TRC.tlf && console.timeEnd('in getCacheResponse');
                        const t = this.trcCache.getValue(e);
                        return {
                            response: t.r,
                            viewId: t.vi,
                            isSelective: t.is
                        };
                    }
                    return TRC.tlf && console.timeEnd('in getCacheResponse'), null;
                }
                isOverTtl(e) {
                    this.cacheUtils.isOverTtl(e);
                }
                static splitKeyToPlacementLookupKeys(e) {
                    const t = (e, t, i) => {
                        return 0 !== t && e ? `${ i[0] },${ e }` : null;
                    };
                    return 'string' != typeof e ? [] : e.split(',').map(t).filter(e => {
                        return null !== e;
                    });
                }
                setCacheClean(t) {
                    this.cacheUtils.setCacheClean(t, this.trcCache), e.splitKeyToPlacementLookupKeys(t).forEach(e => {
                        return this.cacheByPlacementUtils.setCacheClean(e, this.trcCacheByPlacement);
                    });
                }
                cleanCache(t) {
                    const i = e => {
                        return e.reduce((e, t) => {
                            return e.concat(t);
                        }, []);
                    };
                    this.cacheUtils.cleanCache(t, this.trcCache, this);
                    const r = i(t.map(e.splitKeyToPlacementLookupKeys));
                    this.cacheByPlacementUtils.cleanCache(r, this.trcCacheByPlacement, this);
                }
                removeKey(t) {
                    const i = TRC.CacheUtils.removeKey(t, this.trcCache);
                    !0 === i && this.currentSize--, e.splitKeyToPlacementLookupKeys(i).forEach(e => {
                        TRC.CacheUtils.removeKey(e, this.trcCacheByPlacement);
                    });
                }
                getTrcCache() {
                    return this.cacheUtils.getCache(this.pm);
                }
                getTrcCacheByPlacement() {
                    return this.cacheByPlacementUtils.getCache(this.pm);
                }
                removeToLimit(e) {
                    e = e || TRC.util.keys(this.trcCache.getData());
                    const t = this.currentSize - this.cacheSize;
                    let i;
                    this.sortByStamp(e);
                    for (let r = 0; r < t; r++)
                        i = e.shift(), this.removeKey(i);
                }
                static sortByPlacements(e) {
                    let t, i;
                    for (let r = 1; r <= e.length - 1; ++r) {
                        for (t = e[r], i = r; i > 0 && e[i - 1] >= t;)
                            e[i] = e[i - 1], --i;
                        e[i] = t;
                    }
                }
                sortByStamp(e) {
                    let t, i;
                    for (let r = 1; r <= e.length - 1; ++r)
                        for (i = r; i > 0 && this.trcCache.getValue(e[i - 1]).s >= t;)
                            t = e[i], e[i] = this.keys[i - 1], e[i] = t, --i;
                }
                reloadCache() {
                    this.trcCache = this.getTrcCache(), this.trcCacheByPlacement = this.getTrcCacheByPlacement();
                }
                init() {
                    if (TRC.tlf && console.time('in init cache trc'), this.onlyClean)
                        return void this.localStorage.removeKey(this.trcCacheName);
                    this.trcCache = this.getTrcCache(), this.trcCacheByPlacement = this.getTrcCacheByPlacement();
                    const e = TRC.util.keys(this.trcCache.getData());
                    this.currentSize = e.length, this.cleanCache(e), this.currentSize > this.cacheSize && this.removeToLimit(e), TRC.tlf && console.timeEnd('in init cache trc');
                }
                enableCacheViaStorageFlag() {
                    this.localStorage.setValue(this.TRC_CACHE_ACTIVE_STORAGE_KEY, 'true');
                }
                isCacheEnabledViaStorageFlag() {
                    return 'true' === this.localStorage.getValue(this.TRC_CACHE_ACTIVE_STORAGE_KEY);
                }
                getFeedRelatedKeyFromCache(e, t, i) {
                    const r = e.getData(), n = i.split(',');
                    if (n.length > 2)
                        return;
                    if (this.disableFeedCache)
                        return;
                    const o = t.getValue(i);
                    if (o)
                        return o.r && o.r.trc && o.r.trc.f ? i : void 0;
                    const a = `${ n[0] },${ n[1] }`;
                    return r[a];
                }
                static addNewFeedCardsToCachedResponse(e, t) {
                    e.forEach(e => {
                        let i;
                        for (let r = 0; r < t.length; r++)
                            if (e.uip === t[r].uip) {
                                t[r] = e, i = !0;
                                break;
                            }
                        i || t.push(e);
                    });
                }
                static updateFeedConfigPropsInCache(e, t) {
                    e && t && Object.keys(e).forEach(i => {
                        Object.keys(t).some(r => {
                            if (r === i) {
                                const n = e[i], o = t[r];
                                return o.nb = n.nb, o.eof = n.eof, !0;
                            }
                            return !1;
                        });
                    });
                }
                shouldRequestUseViewIdFromCache(e, t, i, r) {
                    const n = e && e.response && r.cachedResponses[t];
                    return n && (this.isCacheEnabledViaStorageFlag() || !r.global['disable-trc-cache-reuse-view-id'] && i);
                }
            }
            TRC.TrcCache = e;
        })(window, document), (() => {
            const e = TRC.TrcEventsLogger = {};
            e.sendPlacementEvent = function (e, t, i, r, n, o, a, s) {
                let l = !1;
                const c = t.trcResponse, d = t.globalTrcResponseJSON, h = c.ri, u = d.sd, p = t.placement, m = Math.floor(100000 * Math.random()), g = {
                        ri: h,
                        sd: e.getSessionData(u),
                        ui: TRC.pageManager.getUserId(),
                        pi: e.getItemId(),
                        wi: d.wi,
                        pt: e.getItemType(),
                        vi: t.cachedViewId || TRC.pageManager.getPageData()
                    }, f = function () {
                        l || (l = !0, a && a());
                    };
                t.cachedViewId && (g.cache = '1'), __trcCopyProps(r, g), o ? (TRC.pConsole(p, 'info', `sending event type: ${ i }`, g, 'object'), e.log1(i, g, n, f, p)) : e.logTrcEvent(i, g, n, f);
                const b = null;
                TRC.performance && 'card-visible' === i && TRC.performance.mark(`11.0.${ m }`, b, p, h, 'card-visible', TRC.PerfEvenType.MARK), 'number' == typeof s && TRC.Timeout.set(f, s);
            };
        })(), function (e, t) {
            TRC.TRCParser = {
                parseModeName: function (e) {
                    return e.mode || null;
                },
                parsePlacementName: function (e) {
                    return e.placement || null;
                },
                parseABModeName: function (e, t) {
                    var i = this.parseTestVariant(t);
                    return null === i ? null : 'ab_' + e + '_' + i;
                },
                parseBaseModeName: function (e) {
                    if ('object' != typeof e)
                        return null;
                    var t = e['video-list'];
                    return 'object' == typeof t && t['base-mode'] ? t['base-mode'] : null;
                },
                parseTestVariant: function (e) {
                    var t;
                    return 'object' != typeof e ? null : (t = e['video-list'], e.uvpw && 'object' == typeof t && t['test-variant'] ? t['test-variant'] : void 0 === e['test-variant'] ? null : e['test-variant']);
                },
                IsBaseModeAndABModeExist: function (e) {
                    var t = this.parseBaseModeName(e), i = this.parseTestVariant(e);
                    return !(!t || !i);
                },
                parseBaseModeAndABModeName: function (e) {
                    var t = this.parseTestVariant(e), i = this.parseBaseModeName(e);
                    return null !== i && null !== t ? 'ab_' + i + '_' + t : null;
                },
                getItemCount: function (e) {
                    return e['video-list'].video ? e['video-list'].video.length : 0;
                },
                hasVariantMismatch: function (e) {
                    var t = e['test-variant'], i = e['video-list']['test-variant'];
                    return !(!t || !i) && t !== i;
                }
            };
        }(window, document), (() => {
            let e = '';
            const t = 'rbox:serving-piggyback-enabled';
            TRC.TrcRequestPiggyBack = {
                setPiggyBackData: i => {
                    TRCImpl.global[t] && i && i.trc && i.trc.srpg && (e = i.trc.srpg);
                },
                getPiggyBackData: () => {
                    return TRCImpl.global[t] && e ? e : '';
                }
            };
        })(), function (win, doc) {
            var TRANSPORT_FORM_ELEMENT = 'trc-transport-form-element';
            function initEventsRedirectParams(e, t, i) {
                if (this.enableTrcEventRoute || e.trc.el2r && TRC.util.isArray(e.trc.el2r)) {
                    try {
                        e.trc.el2r && (this.eventTypesToRoute = e.trc.el2r);
                    } catch (e) {
                        __trcError('TRC.parseResponse: even list to route is not a valid json', e);
                    }
                    e.trc.route && (t = e.trc.route.split(':')[1], i = this.global['trc-event-route-template'] || '<dc>-trc-events.taboola.com', this.trcEventRoute = i.replace('<dc>', t.toLocaleLowerCase()));
                }
            }
            var Manager = TRC.Manager = function (e, t) {
                    this.feedsManager = new window.TRC.FeedsManager(this), this.storiesManager = new window.TRC.StoriesManager(this), this.totalModeCounter = 0, this.renderedModeCounter = 0;
                    var i = 500;
                    function r(e, t) {
                        var i;
                        if ((t ? t.global : {})['disable-yield'])
                            return !1;
                        if (TRC.URL.prototype.getParameter.call(win.location.href, 'yield-batch'))
                            return !0;
                        for (var r in e) {
                            var n;
                            if (void 0 !== e[r].modeGroupOrder)
                                return !0;
                        }
                        return !1;
                    }
                    function n(e) {
                        const $___old_2e2fcd5666d94d5f = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                        try {
                            if ($___old_2e2fcd5666d94d5f)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f73d56c07eb0fd57.sessionStorage));
                            return function () {
                                try {
                                    var t = window.sessionStorage && window.sessionStorage.getItem('tbl_disable_cache');
                                    e['enable-trc-cache'] && (t || TRC.URL.prototype.getParameter.call(location.href, 'tbl_disable_cache')) && (window.sessionStorage.setItem('tbl_disable_cache', 'true'), e['enable-trc-cache'] = !1);
                                } catch (e) {
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_2e2fcd5666d94d5f)
                                ({}.constructor.defineProperty(window, 'sessionStorage', $___old_2e2fcd5666d94d5f));
                        }
                    }
                    this.numOfResetCssDivs = 3, this.eventLogger = [], this.eventCounter = {}, this.NO_CONTENT = {
                        noItems: 'NO_ITEMS',
                        mute: 'MUTE',
                        error: 'ERROR',
                        timeOut: 'TIMEOUT'
                    }, this.cloudinarySortedRatios, this.cachedResponses = {}, this.pendingRequests = [], this.iframePixelReporter, this.virtualPlacementsManager = new TRC.VirtualPlacementsManager(), this.reset = function () {
                        for (var e in (this.reset = !0, TRC.dispatch('trcReset'), this.clearPageElements(), this.widgetContainerReset(), TRC.unifiedPlacementsProductsUtil.containersReset(this.feedsManager.feeds, 'data-feed-main-container-id'), TRC.unifiedPlacementsProductsUtil.containersReset(this.storiesManager.stories, 'data-stories-main-container-id'), TRC.callbacks))
                            TRC.callbacks.hasOwnProperty(e) && e.search('recommendations') >= 0 && (TRC.callbacks[e] = function () {
                            });
                        this.global['enable-old-preloadRequestLoader'] && this.preloadRequestLoader && (TRC.Timeout.clear(this.preloadRequestLoader.timeout), this.clearPreloadRequestLoader());
                        try {
                            delete win.trc_video_id, delete win.trc_article_id, delete win.trc_item_url, delete win.trc_adPlayer;
                        } catch (e) {
                            win.trc_video_id = null, win.trc_article_id = null, win.trc_item_url = null, win.trc_adPlayer = null;
                        } finally {
                            this.global['enable-old-preloadRequestLoader'] || this.clearPreloadRequestLoaderAndResetQueue();
                        }
                    }, this.renderRBox = function (e) {
                        var t = TRC.dom.closest(e.getContainer(), '.trc_rbox_container');
                        function i() {
                            try {
                                t.style.display = 'none';
                            } catch (e) {
                                __trcError('Failed to hide main container on Error', e);
                            }
                        }
                        e.load(i);
                    }, this.getConfig = function (e, t) {
                        return void 0 !== e[t] ? e[t] : void 0 !== win['trc_' + t] && null != win['trc_' + t] ? e[t] = win['trc_' + t] : (void 0 !== this[t] && this[t], e[t] = this[t]);
                    }, this.getItemId = function () {
                        var e = this.itemid;
                        return win.trc_video_id || '' == win.trc_video_id ? e = win.trc_video_id : (win.trc_article_id || '' == win.trc_article_id) && (e = win.trc_article_id), '' == e && (e = this.getAutoItemMeta('item-id', null, this.urlPreNormalizer, this['normalize-item-id'])), this.itemid = e;
                    }, this.getGlobalRequestId = function () {
                        return TRC.events_ri;
                    }, this.getGlobalSessionData = function () {
                        return TRC.session_data;
                    }, this.getSessionId = function () {
                        return this.sessionId;
                    }, this.getPlatformCode = function () {
                        return TRC.platform_code;
                    }, this.getReferrer = function () {
                        return TRC.pageManager.getReferrer();
                    }, this.getItemUrlQueryString = function () {
                        if (this.itemUrlQueryString)
                            return this.itemUrlQueryString;
                        var e = TRC.pageManager.getTopMostWindow(), t = this.global['item-query-string-max-length'] || 400, i;
                        if (TRC.isAMP) {
                            var r = TRC.util.splitUrlParts(document.referrer);
                            this.itemUrlQueryString = r.search || '';
                        } else
                            this.itemUrlQueryString = e.location.search;
                        return this.itemUrlQueryString.length > t && (i = this.itemUrlQueryString.substring(0, t - 1), this.itemUrlQueryString = i.substring(0, i.lastIndexOf('&'))), this.itemUrlQueryString;
                    }, this.getListSize = function (e) {
                        return e.visible && 'rbox-only-video' !== e.mode ? this.calculateAutoListSize(e) : 0;
                    }, this.getListId = function (e) {
                        return 'rbox-only-video' === e.mode ? 'rbox-invisible-widget' : e.list_id || 'rbox-tracking' === e.mode ? e.mode : 'rbox-' + (e.visible ? e.origin.toString() : 'tracking');
                    }, this.getExtraResponsiveRecom = function (e) {
                        var t = this.getProperty(e.mode_name, 'responsive-extra-columns'), i = this.getProperty(e.mode_name, 'rows');
                        return t ? t * (i || 1) : 0;
                    }, this.getResponsiveRecommendations = function (e) {
                        var t, i = 0, r, n, o, a = 'function' == typeof win['matchMedia'];
                        t = this.getMatchMediaRuleMaxWidth(e, a);
                        for (var s = 0, l = e.length; s < l; s++)
                            r = (o = e[s]).cells * o.rows, n = a && (win['matchMedia']('(min-width: ' + o.minWidth + 'px)' + (isNaN(o.maxWidth) ? '' : ' and (max-width: ' + o.maxWidth + 'px)')).matches || win['matchMedia']('screen and (min-height: ' + o.minWidth + 'px)' + (isNaN(o.maxWidth) ? '' : ' and (max-height: ' + o.maxWidth + 'px)') + ' and (orientation: portrait)').matches), (isNaN(t) || o.minWidth <= t || t < 0 || n) && i < r && (i = r);
                        return {
                            listSize: i,
                            rule: i ? o : null
                        };
                    }, this.getMatchMediaRuleMaxWidth = function (e, t) {
                        var i, r;
                        if (!t)
                            return screen.width;
                        for (var n = 0, o = e.length; n < o; n++)
                            if (r = e[n], (i = win['matchMedia']('screen and (min-device-width: ' + r.minWidth + 'px)' + (isNaN(r.maxWidth) ? '' : ' and (max-device-width: ' + r.maxWidth + 'px)'))).matches)
                                return r.maxWidth;
                    }, this.calculateAutoListSize = function (e) {
                        var t = this.getProperty(e.mode_name, 'list-size'), i = 0, r = this.getProperty(e.mode_name, 'responsive-rules'), n = null, o, a;
                        if (this.getProperty(e.mode_name, 'mode-is-responsive')) {
                            if (r && r.length)
                                return n = this.getResponsiveRecommendations(r), e.matched_rule = n.rule, n.listSize;
                            i = this.getExtraResponsiveRecom(e);
                        }
                        if (a = t + i, e.autoSize = this.getProperty(e.mode_name, 'auto-size'), !e.autoSize)
                            return e.autoSize = !1, a;
                        if (0 == (o = Math.floor(e.container.clientWidth > 0 ? e.container.clientWidth : e.container.offsetWidth)))
                            return e.autoSize = !1, a;
                        for (var s = this.getProperty(e.mode_name, 'auto-size-rules'), l = 0; l < s.length; l++)
                            parseInt(s[l]['minWc']) <= o && o <= parseInt(s[l]['maxWc']) && (e.AutoSizeRule = s[l]);
                        return e.AutoSizeRule ? (e.rows = this.getProperty(e.mode_name, 'rows'), e.rows <= 1 ? this.modes[e.mode_name]['list-size'] = e.AutoSizeRule.n + i : this.modes[e.mode_name]['list-size'] = e.AutoSizeRule.n * e.rows + i) : 0;
                    }, this.calculateAutoSizeParameters = function (e) {
                        var t, i;
                        if (this.calculateAutoListSize(e), e.AutoSizeRule)
                            for (var r = Math.floor(e.container.clientWidth > 0 ? e.container.clientWidth : e.container.offsetWidth), n = e.AutoSizeRule['minWsRange']; n <= e.AutoSizeRule['maxWsRange']; n++)
                                if (t = (r - (e.AutoSizeRule.n - 1) * n) / e.AutoSizeRule.n, (i = parseInt(t)) == t) {
                                    e.AutoSizeRule.Wi = t, e.AutoSizeRule.Ws = n;
                                    break;
                                }
                    }, this.getItemUrl = function () {
                        var e = this.itemurl;
                        return (win.trc_item_url || null == this.itemurl) && (e = this.getAutoItemMeta('item-url', null, this.urlPreNormalizer, this['normalize-item-url'])), this.itemurl = e;
                    }, this.urlPreNormalizer = function (e, t) {
                        var i = this['prenormalize-' + e], r;
                        if (!i)
                            return t;
                        (i['truncate-at'] || []).forEach(function (e) {
                            var i = t.search(e);
                            i >= 0 && (t = t.substr(0, i));
                        });
                        var n = new win.TRC.URL(t);
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (!i[o])
                                    continue;
                                switch (o) {
                                case 'host':
                                    delete n.host;
                                    break;
                                case 'trailing-dirsep':
                                    for (; '/' == n.pathname.substr(n.pathname.length - 1);)
                                        n.pathname = n.pathname.substr(0, n.pathname.length - 1);
                                    break;
                                case 'query':
                                    var a = [], s = n.search.replace(/^\?/, '').split('&');
                                    'string' == typeof (r = i[o]) && (r = new RegExp(r));
                                    var l = r instanceof Array ? function (e) {
                                        for (var t = 0; t < r.length; t++)
                                            if (e == r[t])
                                                return !0;
                                        return !1;
                                    } : r instanceof RegExp ? r.test.trcBind(r) : function () {
                                        return !1;
                                    };
                                    s.forEach(function (e) {
                                        l(decodeURIComponent(e.split('=')[0])) && a.push(e);
                                    }), n.search = (a.length ? '?' : '') + a.join('&');
                                    break;
                                case 'fragment':
                                    var c = n.hash.replace(/^#/, '');
                                    'string' == typeof (r = i[o]) && (r = new RegExp(r)), n.hash = '', r instanceof RegExp && r.test(c) ? n.hash = '#' + c : r instanceof Array && r.forEach(function (e) {
                                        c.search(e) >= 0 && (n.hash = '#' + c);
                                    });
                                }
                            }
                        return n.pathname || (n.pathname = '/'), 'item-id' == e ? n.toString().toLowerCase() : n.toString();
                    }, this.genCallback = function (e) {
                        var t = 'recommendations_' + (TRC.callbacks.auto_gen_callback_seq = TRC.callbacks.auto_gen_callback_seq + 1 || 1);
                        return TRC.callbacks[t] = e, 'TRC.callbacks.' + t;
                    }, this.formatTRCRequest = function (e, t, i) {
                        try {
                            e.hasOwnProperty('rbox-tracking') && Object.keys && Object.keys(e).length > 1 && delete e['rbox-tracking'], TRC.pageLevelFeaturesManager.disableFeatureOnIframe();
                            var r = new this.GlobalRequetParams();
                            return (TRC.isOptim('geom') && !i || !TRC.isOptim('geom')) && (this.setGlobalParmas(r, t), this.setGlobalParamsDecorators(r)), r.setPlacementsParamsArray(this.getPlacementsRequestParams(e, r, i)), TRC.pConsole('recommendations', 'debug', 'hook : normalize-request-param', this['normalize-request-param'].toString(), 'string'), r.setAll(this['normalize-request-param'](r.getAll(), null)), this.setNewPlacementsInRequest(e, r), TRC.pConsole('recommendations', 'info', 'formatted request', r.getAll(), 'object'), r.getAll();
                        } catch (e) {
                            __trcError('TRC.formatTRCRequest', e);
                        }
                    }, this.setGlobalParmas = function (e, t) {
                        var i = e, r = TRCImpl ? TRCImpl.global : {};
                        i.setItemId(this.getItemId()), i.setTemplate(TRC.pageTemplate), i.setItemType(t || this.getItemType()), i.setSessionData(this.getSessionData(TRC.session_data)), i.setUserId(this.getUserId(TRC.user_id)), r['store-userid-first-party-cookie'] && i.setUserIdFirstPartyCookie(TRC.pageManager.getUserIdFirstPartyCookie()), i.setLoaderBuildTime(this.global['bakeTime']), i.setViewId(TRC.pageManager.getPageData()), i.setClientVersion(this.version), i.setPublisherVersion(this.getPublisherVersion()), i.setItemUrl(this.getItemUrl()), i.setDeviceId(this.deviceId), i.setUnifiedId(this.unifiedId), i.setUserType(this.userType), i.setPaywall(this.paywall), i.setPremium(this.premium), i.setAdvertorialSource(this.advertorialSource), i.setExternalPageView(this.external_page_view), i.setBlockVideoLoader(this.blockVideoLoader ? '1' : '0'), i.setUserLanguages(this.getUserLanguages()), i.setExperimentVariant(this.getSystemFlag('experimentID')), this.consentState && (i.setCmpStatus(this.consentState.cmpStatus), i.setGdprApplies(this.consentState.gdprApplies), i.setConsentDaisyBit(this.consentState.consentData), i.setConsentTcString(this.consentState.tcString, this.global['max-tcs-size']), i.setGdprWasTimeout(this.consentState.wasTimeout)), TRC.consentData && (i.setCmpStatus(TRC.consentData.cmpStatus), i.setGdprApplies(TRC.consentData.gdprApplies), i.setConsentDaisyBit(TRC.consentData.consentDaisyBit)), this.getUSPData(function (e) {
                            TRC.ccpaPs = e;
                        }), i.setCex(TRC.cexConsentData), i.setCcpaDns(TRC.ccpaCdns), i.setCcpaPs(TRC.ccpaPs), i.setExcludedPublishers(TRC.exp), i.setBlockThumbnailVideoLoader(this.blockThumbnailVideoLoader ? '1' : '0'), r['flc-enabled'] && TRC.flc && i.setFlc(TRC.flc.readFlcFromLocalStorage()), void 0 !== navigator.connection && (i.setConnectionType(navigator.connection.type), i.setConnectionSpeed(navigator.connection.effectiveType)), i.setPageLevelFeature(TRC.pageLevelFeaturesManager.pageLevelFeatures), i.setTrcPiggyBack(TRC.TrcRequestPiggyBack.getPiggyBackData());
                    }, this.setNewPlacementsInRequest = function (e, t) {
                        var i, r, n = t.getPlacementsParamsArray();
                        if (e)
                            for (var o = 0, a = n.length; o < a; o++)
                                i = n[o].uip, r = n[o].orig_uip, e[i] || (e[i] = e[r], e[r] = e[i], e[r].new_uip = i);
                    }, this.setRequestMetaData = function (e) {
                        var t = {};
                        for (var i in (this.tags && this.tags.length && (t.k = this.tags.join(',')), this.metadata))
                            this.metadata.hasOwnProperty(i) && this.metadata[i] && (t[this.parseMetaName(i)] = this.metadata[i]);
                        TRC.util.hasKeys(t) && e.setMetaData(t);
                    }, this.parseMetaName = function (e) {
                        switch (e) {
                        case 'user':
                            return 'u';
                        case 'uploader':
                            return 'U';
                        case 'content-rating':
                            return 'c';
                        case 'publish-date':
                            return 't';
                        case 'duration':
                            return 'd';
                        case 'category':
                            return 'x';
                        case 'v':
                        case 'r':
                        default:
                            return e;
                        }
                    }, this.getPlacementsRequestParams = function (e, t, i) {
                        for (var r = [], n, o = TRC.util.keys(e), a, s, l = 0; l < o.length; l++)
                            (a = e[s = o[l]]).placement && (this.setModeGlobalParamsDecorators(t, a), (n = this.createNewPlacementParams(a, e[s], i)).setAll(this['normalize-request-param'](n.getAll(), a.mode_name)), r.push(n.getAll()));
                        return r;
                    }, this.createNewPlacementParams = function (e, t, i) {
                        var r = new this.PlacementParams();
                        return r.setListId(this.getListId(e)), r.setListSize(this.getListSize(e)), r.setUIMode(this.computeUIM(t)), r.setUIPlacement(e.placement), r.setOriginalUIPlacement(e.placement), this.setPlacementParamsDecorators(r, e, i), r;
                    }, this.setPlacementParamsDecorators = function (e, t, i) {
                        var r = this.getProperty(t.mode_name, 'required-attributes');
                        if ('string' == typeof r && 'none' != r && e.setRequiredAttr(r), t.dfp && t.dfp.campaign_id && e.setNativeCampaignID(t.dfp.campaign_id), t.category && e.setAllowedCategories(t.category), this.enablePlacementGeometry && (TRC.isOptim('geom') && !i || !TRC.isOptim('geom')) && this.addGeometryPlacementData(e, t.container), t.exclude && e.setExclusions(TRC.text.toStringList(t.exclude)), t.fi && (TRC.isAMPSplitFeed && (t.fi = this.ampSplitFeedManager.handleFeedIndexOffset(t)), e.setFeedIndex(t.fi)), t.fb) {
                            if (TRC.isAMPSplitFeed) {
                                var n = Number(this.ampSplitFeedManager.syncFb);
                                null !== n && (t.fb = n);
                            }
                            e.setFeedBatch(t.fb);
                        }
                        t.fti && e.setFeedTemplateId(t.fti);
                    }, this.addGeometryPageData = function (e, t) {
                        try {
                            TRC.tlf && console.time('page geometry'), e.setArticlePos(this.getGeometryPageData(t)), e.setScreenWidth(window.screen.availWidth), e.setScreenHeight(window.screen.availHeight), e.setBrowserWidth(TRC.dom.getWindowWidth()), TRC.tlf && console.timeEnd('page geometry');
                        } catch (t) {
                            e.bad = -5;
                        }
                    }, this.addGeometryExtendedPageData = function (e) {
                        try {
                            TRC.tlf && console.time('page geometry extended'), e.setScreenDensity(TRC.dom.getScreenDensity()), e.setBrowserHeight(TRC.dom.getWindowHeight()), e.setDocumentWidth(TRC.dom.getDocumentWidth()), e.setDocumentHeight(TRC.dom.getDocumentHeight()), TRC.tlf && console.timeEnd('page geometry extended');
                        } catch (t) {
                            e.bad = -6;
                        }
                    }, this.addGeometryPlacementData = function (e, t) {
                        try {
                            TRC.tlf && console.time('mode geometry - ' + e.getAll().uim), e.setContainerPos(this.getPosFromDocTop(t, 'top')), e.setContainerWidth(this.getModeWidth(t)), TRC.tlf && console.timeEnd('mode geometry - ' + e.getAll().uim);
                        } catch (t) {
                            e.cd = -5;
                        }
                    }, this.getModeWidth = function (e) {
                        return e.getBoundingClientRect().width;
                    }, this.getGeometryPageData = function (e) {
                        var t, i;
                        switch (!0) {
                        case 'function' != typeof doc.querySelector:
                            return -4;
                        case 'string' == typeof e:
                            return this.computeGeometryPageData(e);
                        case e instanceof Array && e.length > 0:
                            for (i = 0; i < e.length; i++)
                                if ((t = this.computeGeometryPageData(e)) > -1)
                                    return t;
                            return -2;
                        default:
                            return -1;
                        }
                    }, this.computeGeometryPageData = function (e) {
                        try {
                            var t = doc.querySelector(e);
                            return t ? this.getPosFromDocTop(t, 'bottom') : -2;
                        } catch (e) {
                            return -3;
                        }
                    }, this.getPosFromDocTop = function (e, t) {
                        return e.getBoundingClientRect()[t] + TRC.dom.getPageVerticalScroll();
                    }, this.setGlobalParamsDecorators = function (e) {
                        TRC.pageManager.getValue('past-exclusions') && e.setPastExclusions(TRC.pageManager.getValue('past-exclusions')), this.excludedItems && e.setExclusions(TRC.text.toStringList(this.excludedItems)), this.getReferrer() && e.setReferrer(this.getReferrer()), this.enablePageGeometry && this.addGeometryPageData(e, this.global['page-geometry-selectors']), this.enablePageGeometryExtended && this.addGeometryExtendedPageData(e), this.setRequestMetaData(e), !0 === this.global['send-item-query-string-in-req'] && e.setItemUrlQueryString(this.getItemUrlQueryString()), TRC.networkId && e.setNetworkID(TRC.networkId), this.tracking_codes && e.setUTMParams(this.buildUTMParams(this.tracking_codes)), this.additional_data && e.setAdditionalData(this.additional_data), TRC.rtbRealTimeUserId && (TRC.performance && TRC.performance.mark('RealTimeUserSyncMainStop', null, 'RealTimeUserSyncMain', 0, 'RealTimeUserSyncMain', TRC.PerfEvenType.STOP), e.setRtui(TRC.rtbRealTimeUserId));
                    }, Manager.prototype.buildUTMParams = function (e) {
                        var t = [];
                        for (var i in e)
                            e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + '=' + encodeURIComponent(e[i]));
                        return t.join('&');
                    }, this.setModeGlobalParamsDecorators = function (e, t) {
                        this.setPlayerGlobalParams(e, t), 0 == t.origin.toString().indexOf('h2') && e.setItemId('_homepage_');
                    }, this.setPlayerGlobalParams = function (e, t) {
                        e.setItemId(t.item_id), e.setItemType(t.item_type), e.setItemUrl(t.item_url);
                    }, this.computeUIM = function (e) {
                        var t = e.mode_name, i, r, n;
                        return t + (this.global['disable-network-uim'] || void 0 === TRC.networkId ? '' : ':pub=' + TRC.networkId) + (TRC.blocker.blockedState > -2 && this.global['use-abp-uim'] ? ':abp=' + TRC.blocker.blockedState : '') + (this.global['use-calibration-uim'] && this.getProperty(t, 'mode-is-responsive') ? this.computeCalbUIM(e) : '');
                    }, this.computeCalbUIM = function (e) {
                        if (!e.matched_rule)
                            return '';
                        var t = TRC.implClasses.TRCRBox, i = this.modes[e.mode_name], r = e.matched_rule, n = 'none' != i['thumbnail-position'] && i['thumbnail-position'] || void 0, o = n ? TRC.math.round10(t.prototype.getRuleAspectRatio(r, 'ratio') || t.prototype.getThumbAspectRatio(i, 'ratio') || t.prototype.DEFAULT_THUMB_RATIO, -1) : void 0, a = n ? this.caclculateThumbnailWidth(e.container, r) : void 0;
                        return ':type=responsive,rows=' + r.rows + ',cells=' + r.cells + ',thumb-pos=' + n + (n && 'none' != n ? ',thumb-ratio=' + o + ',thumb-width=' + a : '');
                    }, this.caclculateThumbnailWidth = function (e, t) {
                        var i = TRC.css.responsive.getRulePercentageWidth(t.cells, t.margin.h) / 100, r, n = 50;
                        return e && i ? (r = parseInt(e.clientWidth > 0 ? e.clientWidth : e.offsetWidth, 10), TRC.math.roundByDecimal(r * i, n)) : null;
                    }, this.dispatchLoadRequest = function (e) {
                        this.global['enable-old-preloadRequestLoader'] ? this.performDispatchLoadRequest(e) : TRC.recoRequestsQueue.add(this.performDispatchLoadRequest.bind(this, e));
                    }, this.performDispatchLoadRequest = function (e, t) {
                        if (TRC.util.hasKeys(e))
                            if (this.global['enable-old-preloadRequestLoader'] && this.preloadRequestLoader && !this.global['disable-simultaneous-req-protection']) {
                                var i = arguments;
                                TRC.Timeout.set(function () {
                                    i.callee.apply(this, [].slice.call(i).concat([!0]));
                                }.trcBind(this), 100);
                            } else {
                                var r = this.getProperty(null, 'timeout') || 8000, n, o, a = !1;
                                if (this.preloadRequest = e, null != this.getItemId()) {
                                    this.delayedDispatchLoadRequest = null;
                                    try {
                                        if (this.formattedTRCRequest = n = this.formatTRCRequest(this.preloadRequest), TRC.isAMPSplitFeed && this.ampSplitFeedManager.copyReqToReqForCacheKey(n), TRC.utm.push(new Date().getTime() - TRC.utm.start), this.isValidForCache(n.it) && (a = this.activateTrcCache(n, this.trcCache, this.trcCacheItemType, this.handleLoadResponse, this)))
                                            return 'function' == typeof t && t(), void (TRC.usingCacheForPageRefresh = !this.trcCache.isCacheEnabledViaStorageFlag());
                                        n.cb = this.genCallback(this.handleLoadResponse.trcBind(this, n.cacheKey)), o = this.createRequestUrl(n);
                                        var s = void 0 === this.global['enable-trc-ajax'] || TRC.util.isTrue(this.global['enable-trc-ajax']);
                                        TRC.workerInited || TRC.initWorkerIfAvailable(o, r), TRC.worker ? this.callTrcByWorker(o, n, r) : s ? this.callTrcByAjax(o, n, r, t) : this.callTrc(o, n, r, t), delete n.cacheKey;
                                    } catch (e) {
                                        __trcError('TRC.dispatchLoadRequest: Error in request processing', e);
                                    }
                                } else
                                    this.delayedDispatchLoadRequest = this.dispatchLoadRequest.trcBind(this, e);
                            }
                    }, this.isValidForCache = function (e) {
                        return !!(this.trcCache && this.trcCache.isValidCache && (this.trcCache.isCacheEnabledViaStorageFlag() || this.trcCacheItemType[e] && ('' === this.trcParams || TRC.pageManager.getForceTrcCache())));
                    }, this.activateTrcCache = function (e, t, i, r, n) {
                        if (!e.r && !e.r.length)
                            return !1;
                        void 0 === TRC.currentAmpFrameNum && (TRC.currentAmpFrameNum = 1);
                        var o = t.extractAndResolveKey(e), a = t.getCacheResponse(o), s = 'c' === i[e.it];
                        if (a && a.response && !this.cachedResponses[o]) {
                            if (s || t.isCacheEnabledViaStorageFlag() || a.isSelective)
                                return this.setCachedResponse(a, r, n), this.cachedResponses[o] = !0, !0;
                            'd' === i[e.it] && (e.cache = 1, e.cacheKey = o);
                        } else
                            e.cacheKey = o, t.shouldRequestUseViewIdFromCache(a, o, s, this) && (e.vi = a.viewId);
                        return !1;
                    }, this.setCachedResponse = function (e, t, i) {
                        e.response.cached = !0, e.response.cachedViewId = e.viewId, TRC.Timeout.set(t.trcBind(i, null, e.response, !0), 0), TRC.pConsole('recommendations', 'warn', 'using cached recommendations', '');
                    }, this.createRequestUrl = function (e) {
                        this.systemFlags && this.systemFlags.loaderType && (e.lt = this.systemFlags.loaderType);
                        var t = '';
                        e.cache && (t = '&cache=1', delete e.cache);
                        var i = protocol + '//' + this.domain + '/' + encodeURIComponent(TRC.publisherId) + '/trc/3/json?' + 'tim=' + encodeURIComponent(__trcClientTimestamp()) + (this.trcByPass ? '&trc_skip_failover=yes&' : '&') + (this.enableTrcRoute && this.trcRoute ? 'route=' + this.trcRoute + '&' : '') + (this.enableExperimentsVariantIdEvent && this.experimentsVariantIdParamsStr ? this.experimentsVariantIdParamsStr + '&' : '') + (this.getLoaderTypesValue() ? this.getLoaderTypesValue() + '&' : '') + 'data=' + encodeURIComponent(__trcJSONify(e)) + this.getOptOut() + TRC.pageManager.additionalDispatchParams() + t + (win.trc_debug_level > 1 ? '&llvl=' + win.trc_debug_level : '');
                        return this.enableTrcEventRouteExperiment && (i += '&trc_evi=21|1434|2154'), i;
                    }, this.abortLoadRequest = function (e, t) {
                        var i;
                        for (i in (e ? TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.timeOut) : TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.error), this.preloadRequest))
                            if (this.preloadRequest.hasOwnProperty(i)) {
                                if (i.search('rbox-tracking') >= 0)
                                    continue;
                                e && (e = !1, __trcWarn('TRC.abortLoadRequest: pv3 timeout'), t && (TRC.callbacks[t.replace('TRC.callbacks.', '')] = function () {
                                })), TRC.dispatch('onRboxFlowError', { placement: i });
                                var r = this.preloadRequest[i];
                                delete this.preloadRequest[i], r.loadRBoxRequestFailed = !0, this.internalDrawRBox(r);
                            }
                        this.clearPreloadRequestLoaderAndCallNext();
                    }, this.getOptOut = function () {
                        return void 0 !== this.userOptOut && null !== this.userOptOut && [
                            !0,
                            'true',
                            !1,
                            'false'
                        ].indexOf(this.userOptOut) > -1 ? '&user.opt_out=' + this.userOptOut : '';
                    }, this.handleLoadResponseFailure = function (e) {
                        TRC.performance && TRC.performance.mark('5.1.8', null, 'TrcPv3', this.lastReqId, 'pv3call', TRC.PerfEvenType.STOP), null == this.preloadRequestLoader || !this.global['disable-simultaneous-req-protection'] && e && e.target && this.preloadRequestLoader.src !== e.target.src || (__trcError('Server did not respond to loadRBox'), this.abortLoadRequest());
                    }, this.isActivePlacementData = function (e, t) {
                        return !e.new_uip || t === e.new_uip;
                    }, this.loadEid = function (e) {
                        !this.global['eid-enabled'] || e.trc['DNT'] || e.trc['cm'] || TRC.ModuleLoader.load('tfa-eid', TRC.tfaEid, function () {
                        });
                    }, this.handleLoadResponse = function (e, t, i) {
                        TRC.performance && TRC.performance.mark('handleLoadResponseStart', null, 'handleLoadResponse', '', 'handleLoadResponse', TRC.PerfEvenType.START), this.global['disable-delta-mode-switch'] || TRC.deltaModeAdapter.switchModeNamesIfInDeltaTest(this, t), this.cssLiteInject && !this.global['css-isolation'] && TRC.css.utils.bakeCss(t, this), TRC.ItemOverride.run(this.global['enable-item-override'], t);
                        var r, n = TRCImpl ? TRCImpl.global : {};
                        function o() {
                            this.parseResponse(t, i), TRC.util.isPercentEnabled(TRCImpl.global, 'enable-feed-view-iframe-report') && TRC.FeedViewInIframeReport.report(), this.global['enable-old-preloadRequestLoader'] && this.checkPreloadRequest(r), this.global['smart-ellipsis'] && TRC.dom.on(win, 'resize', TRC.util.debounce(this._repaintEllipsis, 500, !1, this)), this.clearPreloadRequestLoaderAndCallNext();
                            try {
                                TRC.SpotlightLoader.load(t);
                            } catch (e) {
                                __trcError('Error while trying to load Spotlight');
                            }
                            TRC.tlf && console.timeEnd('in handleLoadResponse'), TRC.tlf && console.timeStamp('end handleLoadResponse'), TRC.performance && TRC.performance.mark('6.0.9', null, 'TrcPv3', '', 'pv3prase', TRC.PerfEvenType.STOP);
                        }
                        try {
                            if (TRC.tlf && console.timeStamp('start handleLoadResponse(pv3)'), TRC.tlf && console.time('in handleLoadResponse'), TRC.performance && TRC.performance.mark('6.0.1', null, 'TrcPv3', '', 'pv3prase', TRC.PerfEvenType.START), TRC.pConsole('recommendations', 'info', 'recommendations response', t, t.trc.verbose ? 'verbose' : 'object'), TRC.pConsole('', 'time', 'recommendations loaded', ''), TRC.utm.push(new Date().getTime() - TRC.utm.start), t && t.trc && t.trc.f)
                                for (var a = Object.keys(t.trc.f), s = 0; s < a.length; s++) {
                                    var l = a[s];
                                    if (this.feedsManager && this.feedsManager.feeds && this.feedsManager.feeds[l]) {
                                        var c = this.feedsManager.feeds[l];
                                        if (c && c.infiniteScrollEngine && c.infiniteScrollEngine.preventReachingTheFooter) {
                                            var d = c.infiniteScrollEngine.preventReachingTheFooter;
                                            d && d.lateRenderEnabled && c.infiniteScrollEngine.preventReachingTheFooter.handleBatch(e, t);
                                        }
                                    }
                                }
                            if (t && t.trc && t.trc.ui) {
                                this.watchedItem = t.trc['wi'], this.globaleRequestId = t.trc['vl'] && t.trc['vl'].length ? t.trc['vl'][0].ri : this.globaleRequestId, TRC.events_ri = this.globaleRequestId, TRC.session_data = t && t.trc ? t.trc['sd'] : null, TRC.platform_code = t && t.trc ? t.trc['plc'] : null, TRC.user_id = t.trc['ui'] || null, TRC.isOptim('defer-events') ? setTimeout(function () {
                                    TRC.eventDelegator.dispatch('user_id_ready');
                                }, 0) : TRC.eventDelegator.dispatch('user_id_ready'), TRC.eventDelegator.dispatch('user_id_ready');
                                var h = TRC.util.parseTimeout(this.global['defer-cookie-sync']);
                                t.trc.stp && (-1 === h ? TRC.dispatch('send_user_id', t.trc.stp) : setTimeout(function () {
                                    TRC.dispatch('send_user_id', t.trc.stp);
                                }, h)), t.trc.jst && (-1 === h ? TRC.dispatch('load_script_tags', t.trc.jst) : setTimeout(function () {
                                    TRC.dispatch('load_script_tags', t.trc.jst);
                                }, h)), TRC.responseLoaded = !0, TRC.alertVVResponseLoaded && TRC.alertVVResponseLoaded(TRC.version);
                            }
                            if (TRC.CustomModulesManager.getCustomModulesFromResponse(t), !(t && t.trc && t.trc['vl'] && t.trc['vl'].length))
                                return __trcError('Invalid response from server: ' + t), void this.abortLoadRequest();
                            t.trc['tc'] && !TRC.taboolaConsole && TRC.Manager.prototype.loadExternal('//c2.taboola.com/console/console_loader.js', 'js'), TRC.UserIdMerger.notifyPossibleUserChange(this, TRC.publisherId, t.trc['ui'], t.trc['sd']), t.trc['cm'] || TRC.pageManager.storePublisherValue(TRC.publisherId, 'session-data', t.trc['sd']), TRC.TrcRequestPiggyBack.setPiggyBackData(t), TRC.translationManager.setTranslations(t.trc.tslt), t.trc['DNT'] && 'TRUE' === t.trc['DNT'].toUpperCase() ? (TRC.doNotTrack = !0, TRC.pageManager.removeAllKeys(), TRC.pageManager.removeUserId()) : (TRC.pageManager.storeUserId(t.trc['ui'], t.trc['cm']), !0 !== n['store-sessiondata-first-party-cookie'] && 'true' !== n['store-sessiondata-first-party-cookie'] || TRC.pageManager.storeSessionId(t.trc['sd'], t.trc['cm']), TRC.pConsole('page', 'debug', 'Storing user-id: ' + t.trc['ui'])), this.loadEid(t), e && (this.trcCache.cacheResponse(e, t, TRC.pageManager.state.moreDispatchParams), this.cachedResponses[e] = !0), n['disable-page-level-feature'] || TRC.pageLevelFeaturesManager.getFeature(t), o.call(this), this.global['enable-old-preloadRequestLoader'] ? this.handleLoadResponseFailure() : this.checkPreloadRequest(), TRC.dispatch('trcResponseHandled'), TRC.performance && TRC.performance.mark('handleLoadResponseStop', null, 'handleLoadResponse', '', 'handleLoadResponse', TRC.PerfEvenType.STOP);
                        } catch (e) {
                            __trcError('Error in TRC.handleLoadResponse : ', e);
                        }
                    }, this.parseResponse = function (e, i) {
                        var n, o, a, s, l, c = {}, d, h, u, p = e.trc['vl'];
                        this.yieldingEnabled = r(this.preloadRequest, this), this.testData = e.trc['td'], this.experimentsData = e.trc['evi'], this.experimentsHash = e.trc['evh'], this.sourceCategory = e.trc['scat'], e.trc['vpl'] && (this.virtualPlacementsManager.response = e.trc['vpl']);
                        var m = this.parseClientGenericAction(e), g, f;
                        if (this.initCcpa(m, e), this.initPubConfigGenericActionOverride(m), this.renderController.setLazyConfig(), this.renderController.setPlacementsConfig(e.trc.lzr), this.enableTrcRoute && (d = e.trc['route']) && (this.trcRoute = d), this.enableLoaderCacheBuster)
                            try {
                                window.fetch && window.Request ? (g = TRC.PROTOCOL + '//cdn.taboola.com/libtrc/' + t.publisher + '/loader.js', e.trc['lfr'] && (f = new Request(g, {
                                    cache: 'reload',
                                    mode: 'no-cors'
                                }), fetch(f))) : __trcDebug('Cache Bust not supported');
                            } catch (e) {
                                __trcError('failed to run cache busting on this browser on: ' + g, e);
                            }
                        if (initEventsRedirectParams.call(this, e, h, u), this.enableExperimentsVariantIdEvent && this.experimentsData && this.buildExperimentsVariantIdParams(), e.trc['s']) {
                            var b = p.filter(function (e) {
                                return !!e.stpl;
                            });
                            this.storiesManager.createNewStories(e.trc['s'], b.length);
                        }
                        for (TRC.isAMPSplitFeed && (this.ampSplitFeedManager.updateFeedIndexAndBatch(e), this.ampSplitFeedManager.cacheOrAssignFeedResponseData(e)), __trcCopyProps(e.trc['f'], this.feedsManager.configs), this.renderController.addResponse(e), a = 0; a < p.length; a++)
                            if ((s = p[a])['pcp'] && TRC.isAMPSplitFeed && this.ampSplitFeedManager.handlePubCardInResponse(e, a), n = s.uip, this.global['disable-skip-placement'] || !this.shouldSkipPlacement(s, e))
                                if (this.sessionId = e.trc['si'], void 0 !== (o = this.getOrCreatePlacementData(n, s))) {
                                    if (o.unifiedPlacement = s.uuip, o.globalTrcResponseJSON = e.trc, o.trcResponse = s, TRC.fallbackApi.shouldRenderPlacement(s, this.preloadRequest))
                                        if (n.search('rbox-tracking') >= 0)
                                            o.response = this.formatPlacementRecommendations(e, a);
                                        else if (this.feedsManager.hasFeedConflict(n, s.fpl))
                                            __trcWarn('Feed conflict detected for \'' + n + '\' with feed placement \'' + s.fpl + '\' and test data \'' + this.td + '\' and \'' + JSON.stringify(this.experimentsData) + '\''), TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.noItems, n, !0);
                                        else {
                                            if (s.et && (o.expandOptions = this.getExpandOptions(s)), o.isCache = i, e.cachedViewId && (o.cachedViewId = e.cachedViewId), s.fpl) {
                                                if (this.feedsManager.invalidFeedsMap[s.fpl])
                                                    continue;
                                                if (this.feedsManager.handleFeedCardPlacement(s, o), !o.parentFeed)
                                                    continue;
                                            } else
                                                s.stpl && this.storiesManager.handleStoryPlacement(s, o);
                                            if (TRC.isAMPSplitFeed && !0 === this.ampSplitFeedManager.shouldBreakForAMPSplitFeed)
                                                break;
                                            if (!o.scriptData && !o.publisherCardData)
                                                if (s.es)
                                                    TRC.ExternalContainerAppender.move(s.es, o.container);
                                                else if (this.isStandaloneVideo(s))
                                                    o.videoTagLoader = new TRC.VideoTagLoader(this, s.vtag, o, null, {
                                                        'session-data': e.trc['sd'],
                                                        req: s['ri']
                                                    }), o.videoTagLoader.loadVideo();
                                                else if (l = this.formatPlacementRecommendations(e, a, c), o.response = l, this.addFormattedResponseToWidgetAddedFromTrc(s, l, o.addWidget), o.response) {
                                                    o.dc && delete o.dc;
                                                    var C = l.trc['video-list'];
                                                    TRC.FloatingUnitGenerator.isFloatingUnit(C) ? this.floatingUnitGenerator = new TRC.FloatingUnitGenerator(l, o, this) : (C && (o['container-selectors'] = C['container-selectors'], o['render-on-orig-container'] = C['render-on-orig-container']), !s.fpl && TRC.FeedViewWidgetLoaderManager.isFeedViewWidget(this, o) && new TRC.FeedViewWidgetLoaderManager(o), this.initRBoxDrawingIfPlacementEligible(o));
                                                }
                                        }
                                } else
                                    __trcWarn('Invalid placement in server response', n);
                            else
                                __trcDebug('\'parseResponse\' : Skip on placement \'' + n + '\'');
                        if (c.text && (TRC.cssStack ? TRC.cssStack.addStyle('override', c.text, TRC.styleInjected) : TRC.dom.injectStyle(c.text)), this.yieldingEnabled) {
                            var T = this.global ? this.global : {}, v = T['yield-delay'] ? T['yield-delay'] : 0;
                            this.executeRBoxDrawQueue(v);
                        }
                    }, this.checkPreloadRequest = function () {
                        var e = TRC.util.parseTimeout(this.global['defer-scripts-render']);
                        for (var t in this.preloadRequest)
                            if (this.preloadRequest.hasOwnProperty(t) && (placementData = this.preloadRequest[t], this.placementShouldHaveResponseData(placementData, t) && !this.placementHasResponseData(placementData) && (__trcWarn('Server did not provide response for \'' + t + '"!'), delete this.preloadRequest[t], this.shouldRetryFailedPlacementRequest(placementData) ? this.retryFailedPlacementRequest(t, placementData) : TRC.dispatch('onRboxFlowError', { placement: t })), this.isActivePlacementData(placementData, t) && placementData.dc && placementData.dc.renderAd(), placementData.scriptData && (-1 !== e ? setTimeout(function (e, t) {
                                    TRC.ScriptRenderer.render(t.scriptData, t);
                                }.trcBind(null, placementData.scriptData, placementData), e) : TRC.ScriptRenderer.render(placementData.scriptData, placementData)), placementData.iframeData)) {
                                var i = 'tb-jp' === this.language ? 'ja-JP' : this.language;
                                TRC.taboolaConnect.createCard(placementData.container, placementData.iframeData.url, placementData.iframeData.config, placementData.placement, i);
                            }
                    }, this.initRBoxDrawingIfPlacementEligible = function (e) {
                        this.renderController.placementRender(e);
                    }, this.buildExperimentsVariantIdParams = function () {
                        var e = this.global['rbox-reported-experiments-layers'] || [
                            2,
                            6
                        ];
                        this.experimentsVariantIdParamsStr = '', this.experimentsVariantIdParamsMap = Object.keys(this.experimentsData).reduce(function (t, i) {
                            return e.indexOf(Number(i)) > -1 && (t['tvi' + i] = this.experimentsData[i].split('|')[1]), t;
                        }.trcBind(this), {}), this.experimentsVariantIdParamsStr = TRC.TRCLogger.formatParams(this.experimentsVariantIdParamsMap);
                    }, this.addFormattedResponseToWidgetAddedFromTrc = function (e, t, i) {
                        i && (this.preloadRequest[e.uip].response = t);
                    }, this.getWidgetContainer = function (e, t) {
                        var i = e['container'], r = !(0 == e['render-on-orig-container']);
                        if (!doc.querySelectorAll)
                            return i;
                        var n = this.getOrCreateContainerForMoveOrAddWidget(e['container-selectors'], i, t);
                        return n || (r ? i : (__trcWarn('TRC.getWidgetContainer: Not falling back to original container even though could not find valid container when trying to move ' + t), null));
                    }, this.getOrCreateContainerForMoveOrAddWidget = function (e, t, i) {
                        if (e)
                            try {
                                for (var r = 0; r < e.length; r++) {
                                    var n = this.getOrCreateContainer(e[r], t);
                                    if (n)
                                        return n;
                                }
                                __trcWarn('TRC.extractValidContainer: Could not find any valid container when trying to move ' + i);
                            } catch (e) {
                                __trcError('TRC.extractValidContainer: Error occured while trying to find valid container', e);
                            }
                        return null;
                    }, this.getOrCreateContainer = function (e, t) {
                        var i = e.container, r = e.shouldCreateContainer, n = doc.querySelectorAll(i);
                        if (n && 1 === n.length) {
                            TRC.util.isTrue(r) && (e.shouldCreateContainer = !1, n = [this.createNewContainer(e.location, n[0], e.id)]);
                            var o = this.ensureValidContainer(n[0]);
                            if (o === t)
                                return t;
                            if (o)
                                return e.isFloatingUnit || this.cleanContainerClasses(t), o;
                        }
                    }, this.createNewContainer = function (e, t, i) {
                        var r, n, o;
                        return r = doc.createElement('div'), n = i || new Date().getTime(), r.id = n, (o = this.getLocationContainer(e)) && t.insertAdjacentElement(o, r), r;
                    }, this.getLocationContainer = function (e) {
                        switch (e) {
                        case 'first':
                            return 'afterbegin';
                        case 'last':
                            return 'beforeend';
                        case 'before':
                            return 'beforebegin';
                        case 'after':
                            return 'afterend';
                        default:
                            return '';
                        }
                    }, this.cleanContainerClasses = function (e) {
                        e && (e.className = '');
                    }, this.addVariantProperties = function (e, t, i) {
                        var r = t.trc['vl'][i], n = e || { trc: { 'video-list': {} } };
                        return n.trc['test-variant'] = t.trc.t, n.trc.uvpw = t.trc.uvpw, n.trc['video-list']['base-mode'] = r.m, n.trc['video-list']['test-variant'] = r.t, n;
                    }, this.formatPlacementRecommendations = function (e, t, i) {
                        var r = e.trc['vl'][t], n, o = this.preloadRequest[r.uip] || {}, a = {
                                trc: {
                                    req: r['ri'],
                                    'session-id': e.trc['si'],
                                    'session-data': e.trc['sd'],
                                    'user-id': e.trc['ui'],
                                    'watched-item': e.trc['wi'],
                                    'country-code': e.trc['cc'],
                                    'test-variant': e.trc['t'],
                                    'is-provider': !!e.trc['iframeData'],
                                    uvpw: e.trc['uvpw'],
                                    placement: r.uip,
                                    mode: o.mode,
                                    DNT: e.trc['DNT'],
                                    cpb: e.trc['cpb'],
                                    sl: e.trc['sl'],
                                    pi: e.trc['pi'],
                                    bdp: e.trc['bdp'],
                                    ppb: r['ppb'],
                                    'test-data': e.trc['td'],
                                    'placement-group': r['pg']
                                }
                            };
                        return (r.prty || r.caty) && (a.trc.prty = r.prty, a.trc.caty = r.caty), e.cached && (a.cached = !0, a.cachedViewId = e.cachedViewId), r.dc && 'tbl' !== r.typ ? a.trc['tag'] = r : a.trc['video-list'] = {
                            video: r['v'],
                            'base-mode': r['m'],
                            'test-variant': r['t'],
                            'properties-override': r['po'] && TRC.util.jsonParseCustomNative('{' + r['po'] + '}') || null,
                            'container-selectors': r['cs'],
                            'next-up-widget': r['nup'],
                            'taboola-reminder': r['tr'],
                            'render-on-orig-container': r['rooc'],
                            vtag: r['vtag'],
                            pvc: r['pvc'],
                            'content-hub-forced-placement': !!r['chf']
                        }, e.trc['cm'] && (a.trc['consent-missing'] = e.trc['cm']), (n = r['csso']) && (i.text = this.getModeOverrideCss(i, n, o)), r['fpl'] && (a.feedPlacement = r['fpl']), e.trc['evi'] && (a.experimentsData = e.trc['evi']), this.addVariantProperties(a, e, t);
                    }, this.getModeOverrideCss = function (e, t, i) {
                        if (t.indexOf('$container_id$') > -1)
                            try {
                                t = TRC.text.replaceAll(t, '\\$container_id\\$', '#' + i.container.id, null);
                            } catch (e) {
                                t = TRC.text.replaceAll(t, '\\$container_id\\$', '', null);
                            }
                        return e.text ? e.text + t : t;
                    }, this.loadSpotlight = function () {
                        document.querySelectorAll && (this.spotlightLoaded ? TRC.dispatch('trc_afterRboxDraw') : (this.spotlightLoaded = TRC.URL.prototype.switchProtocol.call(TRC.getBackstageUrl() + 'resources/js/1.1.0/spotlight.js', protocol), this.loadExternal(this.spotlightLoaded, 'js')));
                    }, this.setCssDivsIds = function (e, t) {
                        var i = 4;
                        for (var r in e)
                            e.hasOwnProperty(r) && (e[r].cssDivsArr = [], r && TRC.util.getRandomIds({
                                arr: e[r].cssDivsArr,
                                len: t,
                                strength: i,
                                prefix: 't',
                                suffix: '_r'
                            }));
                    }, this.setLBCssDivsIds = function (e, t) {
                        var i = 4;
                        TRC.util.getRandomIds({
                            arr: e.iframe,
                            len: t,
                            strength: i,
                            prefix: 't',
                            suffix: '_r'
                        }), TRC.util.getRandomIds({
                            arr: e.topDiv,
                            len: t,
                            strength: i,
                            prefix: 't',
                            suffix: '_r'
                        });
                    }, this.getModesCache = function () {
                        if (TRC.modesCache)
                            return TRC.modesCache;
                        for (var e in (TRC.modesCache = {}, this.modes))
                            this.modes.hasOwnProperty(e) && (TRC.modesCache[e] = {});
                        return TRC.modesCache;
                    }, this.sendUserIdTags = function (e) {
                        return this.sendExternalTracking(e.data, win.TRC.sharedObjects.loadedPixels);
                    }, this.initFrameworks = function (e) {
                        'amp' === e && TRC.amp ? TRC.amp.setAMPmodule(this) : 'mobile-sdk' !== e || (this.manualVisibilityTrigger = !0);
                    }, this.init = function (e) {
                        TRC.tlf && console.timeStamp('init TRCImpl');
                        var r = TRC.URL.prototype.getParameter.call(location.href, 'trc_css-isolation') || TRC.pageManager.getValue('trc_css-isolation'), o = TRC.URL.prototype.getParameter.call(location.href, 'trc_abp'), a;
                        if (__trcCopyProps(e, this), TRC.util.hasKeys(this['trc-network-mapping'])) {
                            TRC.networkId = TRC.publisherId, this.shiftPublisherId(this['trc-network-mapping']);
                            var s = this['network-pubs-global'];
                            s && s[TRC.publisherId] && TRC.util.merge(this.global, s[TRC.publisherId]);
                        }
                        t.framework && this.initFrameworks(t.framework), this.boxes = {}, this.unique_placement_count = {}, this.tags = [], this.metadata = {}, this.cssReset = 'yes' === r || 'no' !== r && !1 !== this.global['css-isolation'], this.trcRequestDelay = this.global['trc-request-delay'] || i, this.trcByPass = !0 === this['trc-skip-failover'], this.enablePageGeometry = this.global['has-page-geometry'], this.enablePageGeometryExtended = this.global['has-page-geometry-extended'], this.enableSlotsGeometry = this.global['has-slots-geometry'], this.enableSlotsSaliency = this.global['has-slots-saliency'], this.cssLiteInject = this.global['enable-mode-injection'] && !(window.navigator && 'string' == typeof window.navigator.userAgent && /(iPhone|iPad)(?=.*AppleWebKit)(?!.*CriOS)/i.test(window.navigator.userAgent)), this.spatialSlotsThrottleMax = this.global['spatial-slots-throttle-max'], this.spatialSlotsThrottleTH = this.global['spatial-slots-throttle-th'], this.spatialSlotsThrottleTHPerPage = this.global['spatial-slots-throttle-th-per-page'], this.enablePlacementGeometry = this.global['has-mode-geometry'], this.maxRetriesPerFailedPlacementRequest = this.global['max-retries-per-failed-placement-req'] || 1, r && TRC.pageManager.storeValue('trc_css-isolation', r), doc.interestCohort && this.global['flc-enabled'] && TRC.ModuleLoader.load('flc', TRC.flc, function () {
                        }), this.configForPostEvent = {
                            available: this.global['send-avail-as-post'],
                            visible: this.global['send-event-as-post'],
                            'new-visible': this.global['send-event-as-post'],
                            explore: this.global['send-explore-as-post'],
                            'content-hub-available': this.global['send-avail-as-post'],
                            'content-hub-visible': this.global['send-event-as-post'],
                            'content-hub-explore': this.global['send-explore-as-post'],
                            perf: !0,
                            'rtb-win': !0
                        }, this.configForGetEvent = {
                            available: this.global['send-avail-as-get'],
                            visible: this.global['send-visible-as-get'],
                            'new-visible': this.global['send-visible-as-get'],
                            explore: this.global['send-explore-as-get'],
                            'content-hub-available': this.global['send-avail-as-get'],
                            'content-hub-visible': this.global['send-visible-as-get'],
                            'content-hub-explore': this.global['send-explore-as-get'],
                            perf: !1,
                            'rtb-win': !1
                        }, this.trcRoute = null, this.enableTrcRoute = !0 === this.global['enable-trc-route'], this.enableLoaderCacheBuster = !0 === this.global['enable-loader-cache-buster'], this.eventTypesToRoute = this.global['event-types-to-route'] || [], this.enableTrcEventRoute = this.eventTypesToRoute.length > 0, this.trcEventRoute = this.enableTrcEventRoute ? this.global['default-event-route'] || !1 : null, this.enableTrcEventRouteExperiment = !0 === this.global['enable-trc-event-route-experiment'], this.enableExperimentsVariantIdEvent = this.global['enable-experiments-variant-id-event'], this.enableLoaderTypeEvent = this.global['enable-loader-type-event'], this.isDeferredAvailable = this.global['enable-deferred-available'], this.enableExpoImageTag = !1 !== this.global['enable-expo-img-tag'], this.trcParams = TRC.pageManager.additionalDispatchParams(), this.trcCacheClean = this.global['clean-trc-cache'], n(this.global), this.trcCache = this.global['enable-trc-cache'] ? new TRC.TrcCache(this.global['trc-cache-conf'] || {}) : null, this.trcCacheItemType = this.global['trc-cache-it'], this.disableReadMore = !1 === this.global['enable-read-more'] || !1 === this.disableReadMore, this.blockVideoLoader = this.shouldBlockVideoLoader(this.global['block-video-prob']), this.blockThumbnailVideoLoader = this.shouldBlockThumbnailVideoLoader(this.global['block-thumbnail-video-prob']), this.global['enable-consent'] && this.setConsentConfig(this.consentConfigOverride, this.global['consent-presets']), TRC.getBackstageUrl = function () {
                            var e = TRC.backstageDomainPrefix || 'backstage', t = TRC.backstageDomainSuffix || 'taboola.com';
                            return this['backstage-domain-url'] || 'https://' + e + '.' + t + '/backstage/';
                        }.trcBind(this), o ? this.setABPEmulation(o) : this.global['abp-detection-enabled'] ? TRC.blocker.blockedState = TRC.blocker.getBlockedState(this.global['abp-detection-class-names'] || [
                            'banner_ad',
                            'sponsored_ad'
                        ], this.global['abp-ignore-cached-state']) : TRC.blocker.blockedState = TRC.blocker.states.ABP_DETECTION_DISABLED, TRC.styleInjected || this.cssLiteInject || this.bakedStyelInjection(), this.domain = TRC.shiftDomain(this.global['requests-domain'] ? this.global['requests-domain'] : 'trc.taboola.com'), this.origin instanceof Array || (this.origin = [this.origin]), null != this.userMetadata ? this.metadata.user = __trcJSONify(this.userMetadata) : void 0 === win['trc_user_id'] ? this.metadata.user = this['get-user']() : this.metadata.user = win['trc_user_id'];
                        try {
                            TRC.pConsole('page', 'debug', 'Hook : publisher_start', this['publisher-start'].toString()), this['publisher-start']();
                        } catch (e) {
                            __trcError('Error running publisher-start', e);
                        }
                        this.metadata.uploader = this['get-creator'](), this.tags = this['get-tags']();
                        try {
                            this.metadata.v = this['get-views'](), this.metadata.r = this['get-rating'](), this['metafields'].split(',').forEach(function (e) {
                                e && (this.metadata[e] = this['get-' + e] ? this['get-' + e]() : this.readMetaTag(e));
                            }.trcBind(this));
                        } catch (e) {
                        }
                        this.initFraudDetection(), TRC.listen('send_user_id', this.sendUserIdTags.trcBind(this)), TRC.listen('load_script_tags', this.loadScriptTags.trcBind(this)), window.context && window.context.data && window.context.data.feedContainerNum && parseInt(window.context.data.feedContainerNum, 10) >= 1 && (TRC.isAMPSplitFeed = !0, TRC.feedContainerNum = window.context.data.feedContainerNum), !(!TRC.mobile || !TRC.mobile.reportClick) || TRC.isAMP || !TRC.util.isPercentEnabled(this.global, 'spa-detection-enabled') || TRC.ModuleLoader.load('spa-detector', TRC.SpaDetector, function () {
                            TRC.SpaDetector.getInstance(this);
                        }.trcBind(this)), TRC.util.isPercentEnabled(this.global, 'guarantee-card-clash-detection') && TRC.ModuleLoader.load('card-interference-detector', TRC.CardInterferenceDetector, function () {
                        }), TRC.pageManager.initReferrer(this.global), this.renderController = new TRC.RenderControl(this), this.init = function () {
                        }, TRC.isInteractive = !1, TRC.isPageLoaded = !1, this.trcCacheClean && !this.trcCache && (this.trcCache = new TRC.TrcCache({}, !0), this.trcCache = null), this.listenToRenderedModes(), this.global['enable-always-track'] && !TRC.pushedRboxTracking && (l(), TRC.pushedRboxTracking = !0);
                        var c = TRC.util.isTrue(this.global['tm-dynamic-load']);
                        TRC.translationManager.init(c, this.language);
                    }, this.initFraudDetection = function () {
                        this.shouldEnableFraudDetection() && TRC.listen('trcResponseHandled', this.enableFraudDetection.trcBind(this));
                    };
                    var o = null;
                    this.getExpoImageTag = function () {
                        return null !== o ? o : (o = '', this.enableExpoImageTag && null !== this.getSystemFlag('imageExternal') && (o = 'tb_expo_img=' + this.getSystemFlag('imageExternal')), o);
                    };
                    var a = null, s = null;
                    function l() {
                        if (document.body) {
                            var e = 'rbox-tracking', t = e + '-div';
                            if (!document.getElementById(t)) {
                                var i = document.createElement('div');
                                i.id = t, document.body.appendChild(i).style.display = 'none';
                            }
                            win._taboola.push({
                                mode: e,
                                container: t
                            });
                        }
                    }
                    return this.getLoaderTypesValue = function () {
                        if (s)
                            return a;
                        if (a = '', s = {}, !this.enableLoaderTypeEvent)
                            return a;
                        this.systemFlags.loaderType && (a = 'lti=' + this.systemFlags.loaderType, s['lti'] = this.systemFlags.loaderType);
                        var e = this.systemFlags.eventExternal;
                        return e ? (Object.keys(e).forEach(function (t) {
                            a += (a ? '&' : '') + 'ex_' + t + '=' + e[t], s['ex_' + t] = e[t];
                        }), a) : a;
                    }, this.getLoaderTypesObject = function () {
                        return s || this.getLoaderTypesValue(), s;
                    }, this.ABPswap = function (e) {
                        return TRC.text.replaceAll(e, '\\.' + TRC.SYNDICATED_CLASS_NAME + '|' + '\\.' + TRC.SPONSORED_CONTAINER_CLASS_NAME, function (e) {
                            return '.' + this[e.slice(1)];
                        }, this.global['switch-abp-class']);
                    }, this.stackedStyleInjection = function (e, t, i, r) {
                        TRC.cssStack || (TRC.cssStack = new TRC.css.Stack({
                            idPrefix: 'tab_',
                            stack: [
                                {
                                    type: 'default',
                                    cssText: e + (i || '')
                                },
                                {
                                    type: 'mode',
                                    cssText: ''
                                },
                                {
                                    type: 'publisher',
                                    cssText: t
                                },
                                {
                                    type: 'custom',
                                    cssText: ''
                                }
                            ]
                        }, r));
                    }, this.bakedStyelInjection = function () {
                        var e = this.defaults.style + this.global.style;
                        TRC.blocker.blockedState > 0 && this.global['switch-abp-class'] && (e = this.ABPswap(e)), this.cssReset ? (this.setLBCssDivsIds(TRC.lightBoxCssReset = {
                            iframe: [],
                            topDiv: []
                        }, this.numOfResetCssDivs), this.setCssDivsIds(this.getModesCache(), this.numOfResetCssDivs), TRC.css.utils.setStyleElements(TRC.css.utils.setStyleTextIdPrefix(e, TRC.modesCache, TRC.lightBoxCssReset)), __trcInfo('CSS Isolation is active')) : this.global['css-ie-split'] && TRC.Browser['ieUpto'](9) ? TRC.css.utils.setStyleElements(TRC.css.utils.setStyleTextIdPrefix(e, null, TRC.lightBoxCssReset)) : TRC.dom.injectStyle(e);
                    }, this.setABPEmulation = function (e) {
                        TRC.blocker.blockedState = e, this.global['abp-detection-enabled'] = !0, this.global['use-abp-uim'] = !0, TRC.pConsole('page', 'warn', 'emulating Ad Blocker Plus detection.');
                    }, this.setConsentConfig = function (e, t) {
                        TRC.consent.hasCMP() || (t && TRC.consent.setPresets(t), e ? TRC.consent.setConsentSource(TRC.util.merge({ source: 'iab_override' }, e)) : 'function' == typeof window.__tcfapi ? TRC.consent.setConsentSource({ source: 'tcf' }) : 'function' == typeof window.__cmp && TRC.consent.setConsentSource({ source: 'iab' }));
                    }, this.countTrcContainerMissingError = 0, this.ensureValidContainer = function (e, t) {
                        var i = e, r = 'trc_related_container', n, o, a = ' ' + r + ' trc_spotlight_widget' + (TRC.dom.isInIframe(!0) ? ' trc_in_iframe' : '') + ('rtl' === this.direction ? ' tbl-rtl' : '');
                        if ('string' == typeof e && (e = document.getElementById(e), t && !e))
                            return null;
                        if ('object' != typeof e && (e = null), null != e) {
                            if (e.className.match(r))
                                return e;
                            for (; e.hasChildNodes();)
                                e.removeChild(e.firstChild);
                            return e.origClassName = e.className, e.className += a, e;
                        }
                        return null != (e = document.getElementById(r)) ? (e.className.search(r) <= 0 && (e.origClassName = e.className), e.className += a, e) : document.body ? (this.countTrcContainerMissingError < 2 && (this.countTrcContainerMissingError += 1, __trcError('Didn\'t manage to find TRC container for R-Box with ID ' + i + ' (retry=' + this.countTrcContainerMissingError + ') ' + (TRC.dom.isReady ? '(Document is Ready)' : '') + '!')), null) : null;
                    }, this.getPublisherVersion = function () {
                        try {
                            if (TRC.baseDomain.search(TRC.publisherId) >= 0) {
                                var e = TRC.baseDomain.split('/');
                                if ('' == e[e.length - 1] && e.pop(), e[e.length - 1] != TRC.publisherId)
                                    return e[e.length - 1];
                            }
                        } catch (e) {
                        }
                        return 'default';
                    }, this.getItemType = function () {
                        switch (TRC.listOrigin.getSource()) {
                        case 'h':
                            return 'home';
                        case 'c':
                            return 'category';
                        case 't':
                            return 'text';
                        case 's':
                            return 'search';
                        case 'p':
                            return 'photo';
                        case 'o':
                            return 'other';
                        case 'z':
                            return 'content_hub';
                        case 'v':
                        default:
                            return 'video';
                        }
                    }, this.getUserLanguages = function () {
                        return navigator.languages || (navigator.language ? [navigator.language] : []);
                    }, this.playVideo = function (e) {
                        TRC.RBoxUsage.logUsage('TRCImpl.playVideo');
                        try {
                            TRC.dispatch('videoPlaying', e);
                        } catch (e) {
                            __trcError('Problem in playVideo:videoPlaying', e);
                        }
                        if (void 0 !== e.id && win.trc_video_id != e.id) {
                            var t = TRC.listOrigin.getSource();
                            void 0 === e.url && (win.trc_video_id || 'v' != t ? e.url = null : (e.url = this.getAutoItemMeta('item-url', null, this.urlPreNormalizer, this['normalize-item-url']), this.trc_url_auto_detection = e.id)), win.trc_video_id = e.id, win.trc_item_url = e.url, null != this.delayedDispatchLoadRequest && this.delayedDispatchLoadRequest();
                        }
                    }, this.setUser = function (e) {
                        this.userMetadata = e, TRC.pConsole('page', 'info', 'user meta data ', e, 'object');
                    }, this.calculatePlacement = function (e) {
                        if (e['mode_name'].search('rbox-tracking') >= 0)
                            return e['mode_name'];
                        var t = e['mode_name'] + (e['category'] ? '!' + e['category'] : '');
                        return void 0 !== this.unique_placement_count[t] && (t += '#' + ++this.unique_placement_count[t]), t;
                    }, this.computeRBoxOptions = function (e) {
                        return 'string' == typeof e && (e = { mode_name: e }), e.pubOpts ? e : (e.pubOpts = __trcCopyProps(e, {}), e.on_error && TRC.fallbackApi.setOnError(e), e['tracking'] = (this.tracking ? this.tracking : '') + (e['tracking'] ? e['tracking'] : ''), e['target_type'] = e['target_type'] || this.target_type || this.getProperty(e['mode_name'], 'target_type') || 'video', e['origin'] = new TRC.ListOriginBuilder(TRC.listOrigin.getSource(), e['target_type']), e['mode_name'] = !!e['mode'] && e['mode'] || !!e['mode_name'] && e['mode_name'] || !!win['trc_mode_name'] && win['trc_mode_name'] || 'rbox-' + e['origin'].toString(), e['mode_name'] = e['mode_name'].replace(/\s+/g, ''), e['category'] = !!e['category'] && e['category'], e['link_target'] = e['link_target'] || this.link_target, void 0 === e['placement'] && (e['placement'] = this.calculatePlacement(e)), this.unique_placement_count[e['placement']] = 0, e['visible'] = 'boolean' == typeof e['visible'] ? e['visible'] : !this.invisible, 'string' == typeof e['autoplaybox'] && (e['autoplaybox'] = document.getElementById(e['autoplaybox'])), !e['player'] && !0 !== e['slider'] && e['visible'] && (e['original_container'] = e['container'], e['container'] = this.ensureValidContainer(e['container'])), e.addWidget || (e.response = null), e.computed = !0, e);
                    }, this.listenToPlayer = function (e, t) {
                        var i = 'trc_related_container', r = 'rtl' === this.direction ? ' tbl-rtl' : '', n;
                        n = TRC.listen('videoPlaying', function (o) {
                            var a = document.getElementById(o.player_id), s;
                            a ? TRC.dom.isAncestor(t, a, !0) ? (n.remove(), TRC.listen('videoPlaying', function (e) {
                                e.player_id === t.player_id ? s.style.left = '-999999em' : __trcError('TRC.listenToPlayer: wrong player_id was used for videoPlaying');
                            }), t.player_id = o.player_id, e['container'] && ('string' == typeof e['container'] && (e['container'] = document.getElementById(e['container'])), s = e['container']), s || (e['container'] = s = document.createElement('div')), s.className = i + ' trc-inplayer-rbox' + r, s.style.left = '-999999em', s.style.width = a.offsetWidth + 'px', s.style.marginTop = '-' + a.offsetHeight + 'px', t.appendChild(s), TRC.kaltura_API && TRC.Browser.firefox && (delete TRC.kaltura_API, TRC.kaltura_support()), e.getListId = function () {
                                return 'rplayer-after';
                            }, e.list_id = e.getListId(), e.loaded = !0, this.internalDrawRBox(e)) : __trcError('TRC.listenToPlayer: object with player_id wasn\'t found in playerContainer that was passed') : __trcError('TRC.listenToPlayer: wrong player_id was passed');
                        }.trcBind(this)), TRC.listen('videoDone', function (i) {
                            var r = e['container'];
                            r ? i.player_id === t.player_id ? r.style.left = '0' : __trcError('TRC.listenToPlayer: wrong player_id was used for videoDone') : __trcError('TRC.listenToPlayer:videoDone mainContainer wasn\'t found');
                        }), TRC.ooyala_API && (TRC.listen('ooyala_stateChanged', function (i) {
                            var r = e['container'];
                            r && (i.player_id === t.player_id ? r.style.left = '-999999em' : __trcError('TRC.listenToPlayer: wrong player_id was used for ooyala_stateChanged'));
                        }), TRC.listen('ooyala_activePanelChanged', function (i) {
                            var r = e['container'];
                            r && (i.player_id === t.player_id ? r.style.left = 'more' === i['activePanel'] || 'info' === i['activePanel'] ? '0' : '-999999em' : __trcError('TRC.listenToPlayer: wrong player_id was used for ooyala_activePanelChanged'));
                        }));
                    }, this.loadRBoxDrawQueue = function e(t) {
                        function i(e) {
                            if (!this.urlOverrideYieldArr) {
                                var t = TRC.URL.prototype.getParameter.call(win.location.href, 'yield-batch');
                                this.urlOverrideYieldArr = t ? t.split('|') : [];
                            }
                            return this.urlOverrideYieldArr.indexOf(e) > -1;
                        }
                        if (i(t.placement) && (t.modeGroupOrder = 0), this.itemsToDraw = this.itemsToDraw || [], this.itemsToDrawWithoutOrder = this.itemsToDrawWithoutOrder || [], void 0 !== t.modeGroupOrder) {
                            var r = parseInt(t.modeGroupOrder, 10);
                            isNaN(r) ? this.itemsToDrawWithoutOrder.push(t) : (this.itemsToDraw[r] = this.itemsToDraw[r] || [], this.itemsToDraw[r].push(t));
                        } else
                            this.itemsToDrawWithoutOrder.push(t);
                    }, this.executeRBoxDrawQueue = function e(t, i) {
                        TRC.yieldingOrderArr = TRC.yieldingOrderArr || [];
                        var i = i || 0;
                        TRC.taboola_yield_report && 0 == i && (console.time('executeRBoxDrawQ'), performance.mark('start executeRBoxDrawQueue')), this.itemsToDrawWithoutOrder.length > 0 && (this.itemsToDraw.push(this.itemsToDrawWithoutOrder), this.itemsToDrawWithoutOrder = []);
                        var r = this.itemsToDraw.shift();
                        if (TRC.yieldingOrderArr.push(r ? r.length : 0), r) {
                            TRC.taboola_yield_report && (console.time('executeRBoxDrawQueue batch-' + i), performance.mark('start executeRBoxDrawQueue batch-' + i));
                            var n = {};
                            r.forEach(function e(t) {
                                var i = this.internalDrawRBox(t);
                                i && (n[i.id] = i);
                            }.trcBind(this)), TRC.dispatch('batchrender', { data: { boxes: n } }), TRC.taboola_yield_report && (console.timeEnd('executeRBoxDrawQueue batch-' + i), performance.mark('end executeRBoxDrawQueue batch-' + i));
                        }
                        var o = function (e, t) {
                            this.executeRBoxDrawQueue(e, t);
                        }.bind(this);
                        if (this.itemsToDraw.length > 0)
                            return r ? void TRC.Timeout.set(function () {
                                o(t, ++i);
                            }, t) : void o(t, ++i);
                        TRC.taboola_yield_report && (console.timeEnd('executeRBoxDrawQ'), performance.mark('end executeRBoxDrawQueue'), performance.measure('total rbox rendering time', 'start executeRBoxDrawQueue', 'end executeRBoxDrawQueue'));
                        var a = this;
                        i > 0 && (a = { boxes: {} }), TRC.dispatch('allrender', { data: a });
                    }, this.internalDrawRBox = function (e) {
                        var t, i = 'widget';
                        if (e['container'] = this.getWidgetContainer(e, i), (e = this.computeRBoxOptions(e))['player']) {
                            var r = e['player'];
                            return delete e['player'], void this.listenToPlayer(e, document.getElementById(r));
                        }
                        if (t = e['container']) {
                            if (e['visible'] || (t.style.display = 'none'), e['spotlight'] && t.setAttribute('data-spotlight-publisher-id', e['spotlight-publisher-id']), null != e.response || !this.loadCalled || void 0 === this.preloadRequest[e['placement']] || (e.response = this.preloadRequest[e['placement']].response, __trcCopyProps(e, this.preloadRequest[e['placement']]), null != e.response)) {
                                try {
                                    TRC.SpotlightLoader.registerOnMainContainer(t, e.response);
                                } catch (e) {
                                    __trcError('Error while trying to register Spotlight data on main container');
                                }
                                return e.trcResponse && e.trcResponse.multiWidget ? (TRC.multiWidget.init.call(this, {
                                    originalContainer: t,
                                    multiWidget: e.trcResponse.multiWidget,
                                    widgetOptions: e,
                                    initRBox: this.initRBox,
                                    trcManager: this
                                }), this.boxes) : this.initRBox.call(this, t, e);
                            }
                            this.preloadRequest[e['placement']]['container'] = e['container'];
                        }
                    }, this.createCssResetContainers = function (e, t) {
                        for (var i = TRC.modesCache[t] ? TRC.modesCache[t].cssDivsArr : [], r, n = e, o, a = i.length - 1; a >= 0; a--)
                            (o = document.createElement('div')).id = i[a], o.className = 'trc_isolation', o.appendChild(n), n = o;
                        return n;
                    }, this.handleAMPSplitFeedRequest = function (e) {
                        if (void 0 === this.ampSplitFeedManager) {
                            var t = 1 === parseInt(window.context.data.feedContainerNum, 10);
                            this.ampSplitFeedManager = new TRC.AmpSplitFeedManager(this, t);
                        }
                        !0 !== this.ampSplitFeedManager.didInit && this.ampSplitFeedManager.checkAMPSplitFeedFlagsAndInit(e, this.ampSplitFeedManager.initAmpSplitFeedIframe.trcBind(this.ampSplitFeedManager));
                    }, this.handlePushedRequest = function (e) {
                        this.global['disable-skip-load-request'] || !this.shouldSkipPushedRequest(e) ? TRC.isAMPSplitFeed ? this.handleAMPSplitFeedRequest(e) : e[Object.keys(e)[0]] && e[Object.keys(e)[0]].rec ? (this.preloadRequest = e, this.handleLoadResponse('', e[Object.keys(e)[0]].rec)) : this.dispatchRequestWrapper(e) : __trcDebug('\'handlePushedRequest\' : Skip on push request');
                    }, this.dispatchRequestWrapper = function (e) {
                        this.loadCalled = !0, this.dispatchLoadRequest(e), this.isPendingLoadRBox = !1;
                    }, this.dispatchCMPRequest = function (e, t) {
                        var i = parseInt(100000 * Math.random());
                        this.pendingRequests[i] = 1, TRC.cmp('getConsentData', null, function (r) {
                            e.pendingRequests[i] && (delete e.pendingRequests[i], e.consentState = r, e.handlePushedRequest(t));
                        }), this.global['max-wait-for-cmp'] && TRC.Timeout.set(function () {
                            e.pendingRequests[i] && TRC.consent.setConsent({ wasTimeout: !0 });
                        }, this.global['max-wait-for-cmp']);
                    }, this.dispatchAmpConsentRequest = function (e, t) {
                        if (!1 === this.global['amp-consent-enable'])
                            e.handlePushedRequest(t);
                        else {
                            var i = parseInt(100000 * Math.random());
                            this.pendingRequests[i] = 1, TRC.consent.getAMPConsent(function (r, n) {
                                e.pendingRequests[i] && (delete e.pendingRequests[i], n && (e.consentState = n, TRC.ccpaPs = n.ccpaString), TRC.cexConsentData = r, e.handlePushedRequest(t));
                            }), this.global['max-wait-for-cmp'] && TRC.Timeout.set(function () {
                                e.pendingRequests[i] && (e.consentState = { wasTimeout: !0 });
                            }, this.global['max-wait-for-cmp']);
                        }
                    }, this.getUSPData = function (e) {
                        if (!1 !== this.global['ccpa-ps-enable'] && 'function' == typeof __uspapi)
                            try {
                                __uspapi('getUSPData', 1, function (t, i) {
                                    i && t && e(t.uspString);
                                });
                            } catch (e) {
                                __trcError('Error while calling __uspapi for getUSPData', e);
                            }
                    }, this.loadRBox = function () {
                        var e = arguments, t = Array.prototype.slice.call(arguments), i = {}, r, n = 40, o = this;
                        if (!(t.length < 1))
                            try {
                                if (this.isPendingLoadRBox || this.preloadRequestLoader)
                                    return void setTimeout(function () {
                                        this.loadRBox.apply(this, e);
                                    }.trcBind(this), 100);
                                t[0] instanceof Array && (t = t[0]), this.till_request_count = 0;
                                for (var a = 0; a < t.length; a++)
                                    t[a]['player'] || this.till_request_count++;
                                function s(e, t) {
                                    var i = {};
                                    i[t.placement] = t, this.handlePushedRequest(i);
                                }
                                for (; t.length;)
                                    if ((r = this.computeRBoxOptions(__trcCopyProps(t.shift(), {})))['player'] || !0 === r['slider'])
                                        !0 === r['slider'] && this.createContainerForEscalatorWidget(r), TRC.Timeout.set(s.trcBind(this, i, r), 0);
                                    else {
                                        if (i[r.placement])
                                            throw new Error('Placement \'' + r.placement + '\' is not unique in loadRBox()!');
                                        i[r.placement] = r, function (e, t, i) {
                                            if (this.isPendingLoadRBox = !0, e.container && 1 === e.container.nodeType)
                                                this.till_request_count--;
                                            else {
                                                if (!TRC.dom.isReady)
                                                    return !e['player'] && e['visible'] && (e['container'] = this.ensureValidContainer(e['original_container'])), void TRC.Timeout.set(arguments.callee.trcBind(this, e, t, i), t);
                                                this.error('Invalid container provided for request ' + e.placement + ' (' + e.container + ')!'), delete i[e.placement], this.till_request_count--;
                                            }
                                            this.till_request_count <= 0 && (TRC.isAMP ? this.dispatchAmpConsentRequest(o, i) : TRC.consent.hasCMP() ? this.dispatchCMPRequest(o, i) : this.handlePushedRequest(i));
                                        }.trcBind(this, r, n, i)();
                                    }
                            } catch (e) {
                                throw __trcError('Error in loadRBox()', e), e;
                            }
                    }, this.parseLoaderParams(t), TRC.dom.init(), this.init(e), this;
                }, protocol = TRC.PROTOCOL;
            TRC.recoRequestsQueue = new TRC.TasksExecutorQueue(), Manager.prototype['list-size'] = 0, Manager.prototype.MAX_RETRY = 2, Manager.prototype.drawInterface = !1, Manager.prototype.delayedDispatchLoadRequest = null, Manager.prototype.invisible = !1, Manager.prototype.excludedItems = null, Manager.prototype.boxes = {}, Manager.prototype.itemid = null, Manager.prototype.itemurl = null, Manager.prototype.tags = [], Manager.prototype.metadata = {}, Manager.prototype.userMetadata = null, Manager.prototype.loadCalled = !1, Manager.prototype.unique_placement_count = {}, Manager.prototype.trc_url_auto_detection = null, Manager.prototype.shiftPublisherId = function (e) {
                var t = TRC.URL.prototype.getParameter.call(location.href, 'taboola_sim_domain') || TRC.URL.prototype.getParameter.call(location.href, 'fakeurl'), i = win.trc_item_url ? new TRC.URL(win.trc_item_url) : null, r = (t || (i ? i.host : null) || location.host).toLowerCase(), n = (t || (i ? i.href : null) || location.href).toLowerCase(), o = e[r], a = '/', s = [
                        'm',
                        'mobile',
                        'www2',
                        'www3'
                    ], l, c, d, h, u, p;
                if (!o) {
                    for (__trcToArray(e, l = []), l.sort(function (e, t) {
                            return e[0].length > t[0].length ? -1 : e[0].length < t[0].length ? 1 : 0;
                        }), c = 0, d = l.length; c < d; c++)
                        if ((h = l[c][0].toLowerCase()).indexOf(a) > 0) {
                            if (n.match(h)) {
                                o = l[c][1];
                                break;
                            }
                            if (h.indexOf('www.') > -1 && n.match(h.replace('www.', ''))) {
                                o = l[c][1];
                                break;
                            }
                        } else if (r.match(h)) {
                            o = l[c][1];
                            break;
                        }
                    if (!o && r.indexOf('www.') < 0) {
                        for (c = 0, d = s.length; c < d && (u = new RegExp('(https://|http://|^)' + s[c] + '.'), !(o = e[p = r.replace(u, 'www.')])); c++);
                        o || (o = e[p = 'www.' + r]);
                    }
                }
                TRC.publisherId = o || 'unknown-site-on-' + TRC.publisherId, TRC.pConsole('page', 'info', 'in \'Network-Solution\' : publisher-id was set to - ' + TRC.publisherId, '');
            }, Manager.prototype.widgetContainerReset = function () {
                for (var e in this.boxes)
                    if (this.boxes.hasOwnProperty(e)) {
                        var t = this.boxes[e].container, i;
                        if (t) {
                            for (i = t.getAttribute(TRC.intersections.TARGET_ATTRIB), t.className = t.origClassName, delete t._trc_container, delete t._trc_anonbox; t.hasChildNodes();)
                                t.removeChild(t.lastChild);
                            i && TRC.intersections.unobserveAll(i);
                        }
                        TRC.Timeout.reset(), TRC.Interval.reset(), delete this.boxes[e];
                    }
            }, Manager.prototype.getProperty = function (e, t, i) {
                return i && i.hasOwnProperty(t) && void 0 !== i[t] ? i[t] : void 0 === this.modes || void 0 === this.modes[e] || void 0 === this.modes[e][t] ? this[t] : TRC.propertiesOverride && void 0 !== TRC.propertiesOverride[t] ? TRC.propertiesOverride[t] : this.modes[e][t];
            }, Manager.prototype.runHook = function (e, t, i, r, n) {
                var o = Array.prototype.slice.call(arguments, 5), a = this.getFunction(t, i, r, o);
                return n && TRC.CustomModulesManager.dispatchHook(i, t, e, o), a;
            }, Manager.prototype.getFunction = function (e, t, i, r) {
                this.global['disable-runHook'] && (r = Array.prototype.slice.call(arguments, 3));
                var n = this.getProperty(e, t, i);
                if ('function' == typeof n)
                    return TRC.pConsole(e, 'debug', 'Hook : ' + t, n.toString(), 'function'), n.apply(this, r);
            }, Manager.prototype.readMetaTag = function (e) {
                for (var t = document.head.getElementsByTagName('meta'), i = null, r = 0; r < t.length; r++)
                    if (t[r].name) {
                        if (t[r].name.toLowerCase() == 'item-' + e.toLowerCase())
                            return t[r].content;
                        t[r].name.toLowerCase() == e.toLowerCase() && (i = t[r].content);
                    }
                return i;
            }, Manager.prototype.get_intent = function () {
                var e = win.location.href, t = TRC.pageManager.getPublisherValue(TRC.publisherId, 'auto-play-intent');
                if (null != t) {
                    var i = t.split(':');
                    if (parseInt(i[0]) > new Date().getTime() - 30000 && i[1] == this.getItemId())
                        return void 0 !== i[2] ? i[2] : 'n';
                }
                return e.search(this.getItemId()) >= 0 ? 's' : 'u';
            }, Manager.prototype['get-creator'] = function () {
                return this.readMetaTag('uploader') || this.readMetaTag('creator');
            }, Manager.prototype['get-tags'] = function () {
            }, TRC.implClasses = TRC.implClasses || {}, Manager.prototype.logTrcEvent = function (e, t, i, r, n) {
                var o = !1, a, s, l, c, d;
                if (t.tim = __trcClientTimestamp(), t.id = parseInt(10000 * Math.random()), t.llvl = win.trc_debug_level, this.global['tmp-disable-cv'] || (t.cv = this.version), this.configForPostEvent[e])
                    try {
                        if (a = this.global['send-full-list'] && i ? __trcCopyProps(t, {}, i) : t, c = this.shouldPostEventAsAjax(e), l = (s = (d = this.global['rbox-ajax-post-events-full-rollout']) ? '' : 'new-') + e, c)
                            try {
                                this.logPostTrcEventAsAjax(l, a);
                            } catch (o) {
                                !1 !== this.configForGetEvent[e] && d || (t.fbe = 1, this.logGetTrcEvent(l, t, r, i, n));
                            }
                        d || this.logPostTrcEvent(e, a);
                    } catch (e) {
                        o = !0, __trcError('Error in sending post event', e);
                    }
                (o || !1 !== this.configForGetEvent[e] || !0 !== this.configForPostEvent[e]) && ((!1 === this.configForGetEvent[e] || o) && (t.fbe = 1), this.logGetTrcEvent(e, t, r, i, n));
            }, Manager.prototype.isValidForFill = function (e, t) {
                try {
                    if (('available' == e || 'visible' == e) && this.global['enable-get-fil'] && this.global['get-fil-n-items'] >= this.preloadRequest[t].response.trc['video-list'].video.length)
                        return !0;
                } catch (e) {
                }
                return !1;
            }, Manager.prototype.shouldEnableFraudDetection = function () {
                var e, t, i;
                return !!this.global['test_for_fraud'] && (0 !== (t = this.global['fraud-traffic-percentage']) && (t = t || 10, (i = Math.floor(100 * Math.random())) <= t));
            }, Manager.prototype.enableFraudDetection = function () {
                if (!TRC.clickFraudDetect.isInitialized)
                    try {
                        TRC.clickFraudDetect.init(TRC.publisherId, TRC.pageManager.getUserId(), this.getReferrer(), this, TRC.pageManager.getPageData());
                    } catch (e) {
                        __trcWarn('failed to init fraud detection');
                    }
            }, Manager.prototype.logGetTrcEvent = function (e, t, i, r, n) {
                this.trcEventRoute && this.eventTypesToRoute.indexOf(e) > -1 ? (this.logGetTrcEventImpl(this.trcEventRoute, e, t, i, r, n), this.enableTrcEventRouteExperiment && this.logGetTrcEventImpl(this.domain, e, t, i, r, n)) : this.logGetTrcEventImpl(this.domain, e, t, i, r, n);
            }, Manager.prototype.logGetTrcEventImpl = function (e, t, i, r, n, o) {
                var a, s;
                for (var l in (TRC.tlf && console.time('in logGetTrcEvent - ' + t), i))
                    i.hasOwnProperty(l) && (i[l] = this['normalize-log-param'](l, i[l]));
                t = this['normalize-log-param']('type', t), this.isValidForFill(t, o) && (i = __trcCopyProps(i, {}, n));
                try {
                    a = this.composeGetURL(t, i, e), s = new Image(), this.eventLogger.push(s), r && (s.onload = s.onerror = function () {
                        if ('function' == typeof r)
                            try {
                                r();
                            } catch (e) {
                                __trcError('Error in event callback', e);
                            }
                        return !0;
                    }), s.src = a;
                } catch (e) {
                    __trcError('Error in sending event', e);
                }
                TRC.tlf && console.timeEnd('in logGetTrcEvent - ' + t), TRC.performance && 'available' === t && TRC.performance.mark('8.1.9'), TRC.performance && 'visible' === t && TRC.performance.mark('9.1.9');
            }, Manager.prototype.logPostTrcEvent = function (e, t) {
                this.trcEventRoute && this.eventTypesToRoute.indexOf(e) > -1 ? (this.logPostTrcEventImpl(this.trcEventRoute, e, t), this.enableTrcEventRouteExperiment && this.logPostTrcEventImpl(this.domain, e, t)) : this.logPostTrcEventImpl(this.domain, e, t);
            }, Manager.prototype.logPostTrcEventImpl = function (e, t, i) {
                TRC.tlf && console.time('in logPostTrcEvent - ' + t);
                var r, n = this['normalize-log-param']('publisher', TRC.publisherId), t, o = 'tb-trc-transportFrame-' + (t = this['normalize-log-param']('type', t)) + '-' + i.id, a = this.getTransportForm(o), s = document.getElementById(o), l;
                for (var c in i)
                    i.hasOwnProperty(c) && ((r = doc.createElement('input')).name = ('_' == c.charAt(0) ? c.substr(1) : c).replace(/unescape-/g, ''), r.type = 'hidden', r.value = this['normalize-log-param'](c, i[c]), a.appendChild(r));
                if (!s)
                    throw new Error('post iframe can be created');
                TRC.Browser.ie && ((l = s.contentDocument ? s.contentDocument : s.contentWindow.document).write(''), l.close());
                var d = [];
                this.trcByPass && d.push('trc_skip_failover=yes'), this.enableTrcRoute && this.trcRoute && d.push('route=' + this.trcRoute), this.enableExperimentsVariantIdEvent && this.experimentsVariantIdParamsStr && d.push(this.experimentsVariantIdParamsStr), this.getLoaderTypesValue() && d.push(this.getLoaderTypesValue()), a.action = protocol + '//' + e + '/' + n + '/log/3/' + escape(t) + (d.length > 0 ? '?' + d.join('&') : ''), a.submit(), TRC.tlf && console.timeEnd('in logPostTrcEvent - ' + t), TRC.performance && 'available' === t && TRC.performance.mark('8.2.9'), TRC.performance && 'visible' === t && TRC.performance.mark('9.2.9');
            }, Manager.prototype.getTransportForm = function (e) {
                var t, i;
                return (i = doc.createElement('form')).className = 'trc-hidden ' + TRANSPORT_FORM_ELEMENT, i.target = e, i.style.display = 'none', i.method = 'post', doc.body.appendChild(i), (t = doc.createElement('span')).className = TRANSPORT_FORM_ELEMENT, t.innerHTML = '<iframe class="trc-hidden" id="' + e + '" name="' + e + '" width="0" height="0" style="display:none"></iframe>', doc.body.appendChild(t), i;
            }, Manager.prototype.shouldPostEventAsAjax = function (e) {
                var t = this.global['rbox-post-events-as-ajax'];
                return t && ('boolean' == typeof t || -1 !== t.indexOf(e));
            }, Manager.prototype.logPostTrcEventAsAjax = function (e, t) {
                var i = !1, r = win.XDomainRequest || TRC.Browser.ieUpto(9);
                if (!r)
                    try {
                        this.queryParamsObj = __trcCopyProps(this.experimentsVariantIdParamsMap, {}), this.enableTrcRoute && this.trcRoute && (this.queryParamsObj.route = this.trcRoute), __trcCopyProps(this.getLoaderTypesObject(), this.queryParamsObj);
                        var n = function (i, r) {
                            TRC.util.isPercentEnabled(i.global, 'enable-bulk-events') && i.global['bulk-' + e + '-events-strategy'] ? TRC.TRCBulkLogger.bulkPost(r, e, t, null, i.queryParamsObj) : TRC.TRCLogger.post(r, e, t, null, i.queryParamsObj);
                        };
                        this.trcEventRoute && this.eventTypesToRoute.indexOf(e) > -1 ? (n(this, protocol + '//' + this.trcEventRoute), this.enableTrcEventRouteExperiment && n(this, protocol + '//' + this.domain)) : n(this, protocol + '//' + this.domain);
                    } catch (e) {
                        i = !0, __trcError('Error in sending post event as ajax', e);
                    }
                (r || i) && this.logPostTrcEvent(e, t);
            }, Manager.prototype.log1 = function (e, t, i, r, n, o) {
                var a = e + ':' + (n || t.li + t.ii) + t.ri;
                t.ii && t.it && (a = e + ':' + t.li + t.ii + t.ri), this.eventCounter[a] ? this.eventCounter[a]++ : ('function' == typeof o ? o() : this.logTrcEvent(e, t, i, r, n), this.eventCounter[a] = 1);
            }, Manager.prototype.loadExternal = function () {
                return TRC.net.loadScript.apply(null, arguments);
            }, Manager.prototype.parseLoaderParams = function (e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var i = e[t];
                        if ('unknown' == i)
                            continue;
                        switch ('auto' == i && (i = ''), t) {
                        case 'visible':
                            this.invisible = !('boolean' == typeof i ? i : 'false' != i);
                            break;
                        case 'video':
                            win.trc_video_id = i, TRC.listOrigin.setSource('v');
                            break;
                        case 'url':
                            win.trc_item_url = i;
                            break;
                        case 'article':
                            win.trc_article_id = i, TRC.listOrigin.setSource('t');
                            break;
                        case 'category':
                            win.trc_article_id = i, TRC.listOrigin.setSource('c');
                            break;
                        case 'home':
                        case 'homepage':
                            win.trc_article_id = i, TRC.listOrigin.setSource('h');
                            break;
                        case 'search':
                            win.trc_article_id = i, TRC.listOrigin.setSource('s');
                            break;
                        case 'photo':
                            win.trc_article_id = i, TRC.listOrigin.setSource('p');
                            break;
                        case 'other':
                            win.trc_article_id = i, TRC.listOrigin.setSource('o');
                            break;
                        case 'content_hub':
                            win.trc_article_id = i, TRC.listOrigin.setSource('z');
                            break;
                        case 'link_target':
                            this.link_target = i;
                            break;
                        case 'video_source':
                            this.video_source = i;
                            break;
                        case 'callback':
                            this.video_player_callback = i;
                            break;
                        case 'player_reference':
                            this.video_player_reference = i;
                            break;
                        case 'target_type':
                            TRC.listOrigin.setTarget(this.target_type = i);
                            break;
                        case 'exclude':
                            this.excludedItems = i instanceof Array ? i : [i];
                            break;
                        case 'tracking':
                            this.tracking = i;
                            break;
                        case 'referrer':
                            TRC.pageManager.updateReferrer(i);
                            break;
                        case 'amp_disable_resize':
                            this.amp_disable_resize = i;
                            break;
                        case 'user_opt_out':
                            this.userOptOut = !(!i || 'false' == i || '0' == i) || i;
                            break;
                        case 'device':
                            this.deviceId = i;
                            break;
                        case 'unified_id':
                            this.unifiedId = i;
                            break;
                        case 'user_type':
                            this.userType = i;
                            break;
                        case 'paywall':
                            this.paywall = i;
                            break;
                        case 'premium':
                            this.premium = !!i;
                            break;
                        case 'advertorial_source':
                            this.advertorialSource = i;
                            break;
                        case 'external_page_view':
                            this.external_page_view = i;
                            break;
                        case 'tracking_codes':
                            this.tracking_codes = i;
                            break;
                        case 'additional_data':
                            this.additional_data = i;
                            break;
                        case 'framework':
                            this.framework = i;
                            break;
                        case 'iab_alternative_config':
                            this.consentConfigOverride = i;
                            break;
                        case 'consentMessage':
                            TRC.consent.setConsent(i);
                        }
                    }
            }, Manager.prototype.getItemByMetaValue = function (e) {
                for (var t = document.head.getElementsByTagName('meta'), i = 0; i < t.length; i++)
                    if (t[i].name == e)
                        return t[i].content;
                return null;
            }, Manager.prototype.getItemByCanonicalValue = function (e, t) {
                for (var i = document.head.getElementsByTagName('link'), r = 0; r < i.length; r++)
                    if ('canonical' == i[r].rel)
                        return t.call(this, e, i[r].href);
                return null;
            }, Manager.prototype.getItemByOgValue = function (e, t) {
                for (var i = document.head.getElementsByTagName('meta'), r = 0; r < i.length; r++)
                    if ('og:url' == i[r].getAttribute('property') && i[r].content.length > 5)
                        return t.call(this, e, i[r].content);
                return null;
            }, Manager.prototype.getItemByLocationValue = function (e, t) {
                return t.call(this, e, TRC.pageManager.getCurrentURL().toString());
            }, Manager.prototype.getItemByParamUrl = function (e, t) {
                return !win.trc_item_url || 'item-id' != e && 'item-url' != e ? null : t.call(this, e, win.trc_item_url);
            }, Manager.prototype.getAutoItemMeta = function (e, t, i, r) {
                var n = [
                        'paramUrl',
                        'meta',
                        'canonical',
                        'og',
                        'location'
                    ], o = {
                        paramUrl: 'getItemByParamUrl',
                        meta: 'getItemByMetaValue',
                        canonical: 'getItemByCanonicalValue',
                        og: 'getItemByOgValue',
                        location: 'getItemByLocationValue'
                    }, a = this.global['url-extract-order'] ? this.global['url-extract-order'] : n, s = 0, l, c, d;
                for (a.push('location'), t = t ? i.call(this, e, t) : null; s < a.length && TRC.util.isEmptyString(t);) {
                    c = a[s], l = this[o[a[s]]];
                    try {
                        t = l ? l.call(this, e, i) : null;
                    } catch (e) {
                        if (!this.global['tmp-catch-item-url-err'])
                            throw new Error(e.message);
                        t = '';
                    }
                    s++;
                }
                return 'item-url' == e && 'getItemByParamUrl' == c ? t : (d = 'getItemByLocationValue' != c, t = r ? r.call(this, t, win.trc_video_id ? 'video' : 'text', d) : t);
            }, Manager.prototype.getEventParams = function () {
                return {
                    ri: TRC.events_ri,
                    sd: this.getSessionData(TRC.session_data),
                    ui: TRC.pageManager.getUserId(),
                    pi: this.getItemId(),
                    wi: this.watchedItem ? this.watchedItem : null,
                    pt: this.getItemType(),
                    vi: TRC.pageManager.getPageData()
                };
            }, Manager.prototype.sendEvent = function (e, t, i, r, n, o) {
                var a = !1, s = this.getEventParams(), l = function () {
                        a || (a = !0, n && n());
                    };
                __trcCopyProps(t, s), r ? (this.log1(e, s, i, l, this.placement), TRC.pConsole('page', 'info', 'event type : ' + e + ' - this event will be sent only once for the widget', s, 'object')) : (this.logTrcEvent(e, s, i, l), TRC.pConsole('page', 'info', 'sending event type : ' + e, s, 'object')), 'number' == typeof o && TRC.Timeout.set(l, o);
            }, Manager.prototype.getSystemFlag = function (e) {
                return this.systemFlags && void 0 !== this.systemFlags[e] ? this.systemFlags[e] : null;
            }, Manager.prototype.getSessionData = function (e) {
                var t = TRC.pageManager.getPublisherValue(TRC.publisherId, 'session-data'), i, r;
                return (!0 === this.global['prefer-response-session-data'] || !t) && e ? e : t;
            }, Manager.prototype.getUserId = function (e) {
                var t = TRC.pageManager.getValue('user-id');
                return t || e || null;
            }, Manager.prototype.GlobalRequetParams = function () {
                var e = { id: parseInt(1000 * Math.random()) };
                this.setItemId = function (t) {
                    t && (e.ii = t);
                }, this.setTemplate = function (t) {
                    t && (e.tmpl = t);
                }, this.setItemType = function (t) {
                    t && (e.it = t);
                }, this.setSessionData = function (t) {
                    e.sd = t;
                }, this.setUserId = function (t) {
                    e.ui = t;
                }, this.setLoaderBuildTime = function (t) {
                    t && (e.lbt = t);
                }, this.setUserIdFirstPartyCookie = function (t) {
                    e.uifp = t;
                }, this.setUserLanguages = function (t) {
                    t && (e.ul = t);
                }, this.setCmpStatus = function (t) {
                    'number' == typeof t && (e.cmps = t);
                }, this.setConsentDaisyBit = function (t) {
                    'string' == typeof t && (e.cdb = t);
                }, this.setConsentTcString = function (t, i) {
                    'string' == typeof t && (!i || t.length < i) && (e.tcs = t);
                }, this.setCmpStatus = function (t) {
                    'number' == typeof t && (e.cmps = t);
                }, this.setGdprApplies = function (t) {
                    'boolean' == typeof t && (e.ga = t);
                }, this.setGdprWasTimeout = function (t) {
                    'boolean' == typeof t && (e.gwto = t);
                }, this.setCex = function (t) {
                    t && 'string' == typeof t && (e.cex = t);
                }, this.setCcpaDns = function (t) {
                    t && 'string' == typeof t && (e.ccpa_dns = t);
                }, this.setCcpaPs = function (t) {
                    t && 'string' == typeof t && (e.ccpa_ps = t);
                }, this.setExcludedPublishers = function (t) {
                    t && 'string' == typeof t && (e.exp = t);
                }, this.setViewId = function (t) {
                    e.vi = t;
                }, this.setClientVersion = function (t) {
                    e.cv = t;
                }, this.setPublisherVersion = function (t) {
                    e.uiv = t;
                }, this.setItemUrl = function (t) {
                    t && (e.u = t);
                }, this.setPlacementsParamsArray = function (t) {
                    e.r = t;
                }, this.getPlacementsParamsArray = function () {
                    return e.r;
                }, this.setExperimentVariant = function (t) {
                    t && (e.pev = t);
                }, this.setPastExclusions = function (t) {
                    e.px = t;
                }, this.setScreenHeight = function (t) {
                    e.sh = t;
                }, this.setScreenWidth = function (t) {
                    e.sw = t;
                }, this.setBrowserWidth = function (t) {
                    e.bw = t;
                }, this.setArticlePos = function (t) {
                    e.bad = t;
                }, this.setScreenDensity = function (t) {
                    e.sde = t;
                }, this.setBrowserHeight = function (t) {
                    e.bh = t;
                }, this.setDocumentWidth = function (t) {
                    e.dw = t;
                }, this.setDocumentHeight = function (t) {
                    e.dh = t;
                }, this.setExclusions = function (t) {
                    e.ex = t;
                }, this.enableTrcTesMode = function () {
                    e.y = !0;
                }, this.setReferrer = function (t) {
                    e.e = t;
                }, this.setMetaData = function (t) {
                    e.m = t;
                }, this.setItemUrlQueryString = function (t) {
                    t && (e.qs = t);
                }, this.setNetworkID = function (t) {
                    e.nsid = t;
                }, this.getId = function () {
                    return e.id;
                }, this.setAll = function (t) {
                    t && (e = t);
                }, this.getAll = function () {
                    return e;
                }, this.setRtui = function (t) {
                    e.rtui = t;
                }, this.setDeviceId = function (t) {
                    t && (e.did = t);
                }, this.setUnifiedId = function (t) {
                    t && (e.unuid = t);
                }, this.setUserType = function (t) {
                    t && (e.usrtyp = t);
                }, this.setPaywall = function (t) {
                    t && (e.pywl = t);
                }, this.setPremium = function (t) {
                    t && (e.prem = t);
                }, this.setAdvertorialSource = function (t) {
                    t && (e.advrtsrc = t);
                }, this.setExternalPageView = function (t) {
                    t && (e.extpvid = t);
                }, this.setUTMParams = function (t) {
                    t && (e.pp = t);
                }, this.setBlockVideoLoader = function (t) {
                    t && (e.bv = t);
                }, this.setFlc = function (t) {
                    t && (e.fl = t);
                }, this.setBlockThumbnailVideoLoader = function (t) {
                    t && (e.btv = t);
                }, this.setConnectionType = function (t) {
                    t && (e.con = t);
                }, this.setConnectionSpeed = function (t) {
                    t && (e.cos = t);
                }, this.setAdditionalData = function (t) {
                    t && (e.ad = t);
                }, this.setPageLevelFeature = function (t) {
                    t && Object.keys(t).length > 0 && (e.plf = t);
                }, this.setTrcPiggyBack = function (t) {
                    t && (e.srpg = t);
                };
            }, Manager.prototype.PlacementParams = function () {
                var e = {};
                this.setListId = function (t) {
                    e.li = t;
                }, this.setListSize = function (t) {
                    e.s = t;
                }, this.setUIMode = function (t) {
                    e.uim = t;
                }, this.setUIPlacement = function (t) {
                    e.uip = t;
                }, this.setContainerPos = function (t) {
                    e.cd = t;
                }, this.setContainerWidth = function (t) {
                    e.mw = t;
                }, this.setOriginalUIPlacement = function (t) {
                    e.orig_uip = t;
                }, this.setRequiredAttr = function (t) {
                    e.ra = t;
                }, this.setAllowedCategories = function (t) {
                    e.ac = t;
                }, this.setNativeCampaignID = function (t) {
                    e.nvcid = t;
                }, this.setExclusions = function (t) {
                    e.ex = t;
                }, this.setAll = function (t) {
                    e = t;
                }, this.getAll = function () {
                    return e;
                }, this.setFeedBatch = function (t) {
                    e.fb = t;
                }, this.setFeedTemplateId = function (t) {
                    e.fti = t;
                }, this.setFeedIndex = function (t) {
                    e.fi = t;
                };
            }, Manager.prototype.log = __trcLog, Manager.prototype.error = __trcError, Manager.prototype.warn = __trcWarn, Manager.prototype.info = __trcInfo, Manager.prototype.debug = __trcDebug, Manager.prototype._repaintEllipsis = function (e) {
                var t = e.data && e.data.boxes;
                TRC.Ellipsis.doEllipsis(TRC.util.filterObj(function (e) {
                    return e.shouldUseSmartEllipsis();
                }, t || this.boxes));
            }, Manager.prototype.sendExternalTracking = function (e, t) {
                if (!TRC.botDetected) {
                    var i = this.generatePixelsMarkup(e, t), r, n = this.shouldWritePixelsToIframe(e);
                    try {
                        i && (n && (n = this.appendPixelsToIFrame(i)), n || ((r = doc.createElement('span')).innerHTML = i, doc.body.appendChild(r)));
                    } catch (e) {
                        __trcError('Error in Manager.sendExternalTracking');
                    }
                    return i;
                }
            }, Manager.prototype.shouldWritePixelsToIframe = function (e) {
                return e && this.isInternalPixels(e) || void 0 === this.global['disable-iframe-for-tracking-pixel'] || !this.global['disable-iframe-for-tracking-pixel'];
            }, Manager.prototype.isInternalPixels = function (e) {
                for (var t = 0; t < e.length; t++) {
                    var i;
                    if (this.stripDomainFromPixel(e[t]).indexOf('taboola.com') > -1)
                        return !0;
                }
                return !1;
            }, Manager.prototype.stripDomainFromPixel = function (e) {
                var t = e.replace(/(http[s]*:\/\/)|(^\/\/)/, '');
                return t.indexOf('?') > -1 && (t = t.substring(0, t.indexOf('?'))), t.indexOf('/') > -1 && (t = t.substring(0, t.indexOf('/'))), t;
            }, Manager.prototype.loadScriptTags = function (e) {
                var t = e.data, i, r, n = win.TRC.sharedObjects.loadedScripts, o = [];
                for (r = 0; t && r < t.length; r++)
                    if ((i = t[r]) && !n[i])
                        try {
                            n[i] = !0, i = TRC.URL.prototype.switchProtocol.call(i, TRC.PROTOCOL), o.push(TRC.net.loadScript(i, 'js', null, null, !0));
                        } catch (e) {
                            __trcWarn('Error appending script at position ' + r + ', url=' + i, e);
                        }
                return o;
            }, Manager.prototype.listenToRenderedModes = function () {
                TRC.eventDelegator.subscribe('onrender', function () {
                    this.renderedModeCounter++, this.renderedModeCounter !== this.totalModeCounter || TRC.yieldingEnabled || TRC.dispatch('allrender', { data: this });
                }.trcBind(this));
            }, Manager.prototype.generatePixelsMarkup = function (e, t) {
                for (var i = '', r, n, o = 0; e && o < e.length; o++)
                    (r = e[o]) && (!t || t && !t[r]) && (t && (t[r] = !0), (n = TRC.text.encodeHTML(r)) && (i += '<img width="0" height="0" src="' + TRC.URL.prototype.switchProtocol.call(n, protocol, !0) + '">'));
                return i;
            }, Manager.prototype.appendPixelsToIFrame = function (e) {
                var t = /<img [^>]*src="([^"]+)"[^>]*>/gm, i;
                return (i = this.global['disable-unified-iframe-pixel-reporter'] ? this.appendPixelsToIFrameMultipleIframes(e) : this.appendPixelsToIFrameUnifiedIframes(e)) && this.global['track-external-pixel-traffic'] && this.global['track-external-pixel-traffic'] > 100 * Math.random() && TRC.modDebug.logMessageToServer(1, 'fire external pixel', {
                    idx: 'pix',
                    plat: this.getPlatformCode(),
                    urls: e.match(t)
                }), i;
            }, Manager.prototype.appendPixelsToIFrameUnifiedIframes = function (e) {
                var t, i = 'trc-pixel-iframe-' + parseInt(10000 * Math.random(), 10), r, n, o = !1, a;
                if (e) {
                    try {
                        this.iframePixelReporter ? r = this.iframePixelReporter : (t = this.getPixelWrapper(i), doc.body.appendChild(t), r = doc.getElementById(i), this.iframePixelReporter = r), n = r.contentDocument ? r.contentDocument : r.contentWindow.document, (a = doc.createElement('span')).innerHTML = e, n.body.appendChild(a), o = !0, n.close();
                    } catch (e) {
                        __trcDebug('Failed to create IFrame for external tracking');
                    }
                    return o;
                }
            }, Manager.prototype.appendPixelsToIFrameMultipleIframes = function (e) {
                var t = 'trc-pixel-iframe-' + parseInt(10000 * Math.random(), 10), i, r, n, o = !1;
                if (e) {
                    try {
                        r = this.getPixelWrapper(t), doc.body.appendChild(r), i = doc.getElementById(t), this.iframePixelReporter = i, (n = i.contentDocument ? i.contentDocument : i.contentWindow.document).body.innerHTML = e, o = !0, n.close();
                    } catch (e) {
                        __trcDebug('Failed to create IFrame for external tracking');
                    }
                    return o;
                }
            }, Manager.prototype.getPixelWrapper = function (e) {
                var t;
                return !this.global['disable-iframe-span-wrapping'] || TRC.Browser['ieUpto'](8) ? (t = doc.createElement('span')).innerHTML = '<iframe class="trc-hidden" id="' + e + '" name="' + e + '" width="0" height="0" style="display:none"></iframe>' : ((t = doc.createElement('iframe')).className = 'trc-hidden', t.id = e, t.name = e, t.style.height = '0px', t.style.width = '0px', t.style.display = 'none'), t;
            }, Manager.prototype.placementShouldHaveResponseData = function (e, t) {
                return t.search('rbox-tracking') < 0 && !e.isFeed && !e.isIframeCard && !e.externalContainerSelector && !e.isStandaloneVideo && !e.scriptData && !e.publisherCardData;
            }, Manager.prototype.placementHasResponseData = function (e) {
                return null != e.response || e.dc;
            }, Manager.prototype.getOrCreatePlacementData = function (e, t) {
                var i = this.preloadRequest[e];
                return i || (i = this.createPlacementData(e, t)) && (this.preloadRequest[e] = i), i;
            }, Manager.prototype.createPlacementData = function (e, t) {
                return this.isRegularWidget(t) ? this.createAddedWidgetData(e, t) : this.isStandaloneVideo(t) ? this.createStandaloneVideoWidgetData(e, t) : TRC.FeedsManager.isFeedIframe(t) ? TRC.FeedsManager.createFeedIframe(e, t) : TRC.FeedsManager.isFeedScriptWidget(t) ? TRC.FeedsManager.createFeedScriptWidgetData(e, t) : TRC.FeedsManager.isExternalContainerWidget(t) ? TRC.FeedsManager.createExternalWidgetData(e, t) : TRC.FeedsManager.isPublisherCard(t) ? TRC.FeedsManager.createPublisherCardData(e, t) : void 0;
            }, Manager.prototype.isRegularWidget = function (e) {
                return e.m;
            }, Manager.prototype.createAddedWidgetData = function (e, t) {
                return {
                    placement: e,
                    mode: t.m,
                    mode_name: t.m,
                    addWidget: !0
                };
            }, Manager.prototype.isStandaloneVideo = function (e) {
                return e.vtag && e.vtag.position === TRC.VideoTagLoader.prototype.LOCATION_TYPES.STANDALONE;
            }, Manager.prototype.createStandaloneVideoWidgetData = function (e, t) {
                return {
                    placement: e,
                    isStandaloneVideo: !0
                };
            }, Manager.prototype.getSortedCloudinaryRatios = function () {
                var e, t;
                if (!this.cloudinarySortedRatios) {
                    e = this.global['cloudinary-aspect-ratios-list'] || [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            1.9
                        ],
                        [
                            1,
                            1.8
                        ],
                        [
                            9,
                            16
                        ],
                        [
                            1,
                            1.7
                        ],
                        [
                            1,
                            1.6
                        ],
                        [
                            1,
                            1.5
                        ],
                        [
                            1,
                            1.4
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            1,
                            1.3
                        ],
                        [
                            1,
                            1.2
                        ],
                        [
                            1,
                            1.1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            0.9
                        ],
                        [
                            6,
                            5
                        ],
                        [
                            1,
                            0.8
                        ],
                        [
                            4,
                            3
                        ],
                        [
                            1,
                            0.7
                        ],
                        [
                            3,
                            2
                        ],
                        [
                            1,
                            0.6
                        ],
                        [
                            16,
                            9
                        ],
                        [
                            2,
                            1
                        ]
                    ];
                    for (var i = 0; i < e.length; i++)
                        t = e[i], e[i] = t[0] / t[1];
                    this.cloudinarySortedRatios = e.sort();
                }
                return this.cloudinarySortedRatios;
            }, Manager.prototype.getExpandOptions = function (e) {
                var t = { expandType: e['et'] };
                return e['ch'] && (t.collapsedHeight = e['ch']), e['ebc'] && (t.expandButtonCaption = e['ebc']), e['cbc'] && (t.collapseButtonCaption = e['cbc']), t;
            }, Manager.prototype.clearPageElements = function () {
                this.clearTransportFrames(), this.clearUserXElements(), this.clearStyleSheets();
            }, Manager.prototype.clearTransportFrames = function () {
                var e;
                document.querySelector && [].slice.call(document.querySelectorAll('.' + TRANSPORT_FORM_ELEMENT)).forEach(function (e) {
                    e.parentNode.removeChild(e);
                });
            }, Manager.prototype.clearUserXElements = function () {
                TRC.userX && TRC.userX.reset();
            }, Manager.prototype.clearStyleSheets = function () {
                this.global['clear-styles-on-reset'] && TRC.dom.removeAllInjectedStyleSheets();
            }, Manager.prototype.shouldBlockVideoLoader = function (e) {
                var t = !1;
                return isNaN(e) || (t = Math.random() < e / 100), TRC.pConsole('page', 'info', 'Blocked video: ' + t + ', block-video-prob: ' + e, 'string'), t;
            }, Manager.prototype.shouldBlockThumbnailVideoLoader = function (e) {
                var t = !1;
                return isNaN(e) || (t = Math.random() < e / 100), TRC.pConsole('page', 'info', 'Blocked thumbnail video: ' + t + ', block-Thumbnail-video-prob: ' + e, 'string'), t;
            }, Manager.prototype.getPublisherVersionPropertyWithFallbackToNetwork = function (e) {
                return this[e][TRC.publisherId] || TRC.networkId && this[e][TRC.networkId];
            }, Manager.prototype.getSiteNameOgValue = function () {
                return this.siteName || (this.siteName = this.getPageMetaPropertyValue('og:site_name')), this.siteName;
            }, Manager.prototype.getPageMetaPropertyValue = function (e) {
                for (var t = document.head.getElementsByTagName('meta'), i = 0; i < t.length; i++)
                    if (t[i].getAttribute('property') === e)
                        return t[i].content;
                return __trcDebug('Failed finding meta tag property : ' + e + ' value'), null;
            }, Manager.prototype.composeGetURL = function (e, t, i) {
                var r = this['normalize-log-param']('publisher', TRC.publisherId), n = protocol + '//' + (i || this.domain) + '/' + r + '/log/3/' + escape(e) + '?';
                for (var o in (n += this.trcByPass ? 'trc_skip_failover=yes&' : '', n += this.enableTrcRoute && this.trcRoute ? 'route=' + this.trcRoute + '&' : '', n += this.enableExperimentsVariantIdEvent && this.experimentsVariantIdParamsStr ? this.experimentsVariantIdParamsStr + '&' : '', n += this.getLoaderTypesValue() ? this.getLoaderTypesValue() + '&' : '', t))
                    t.hasOwnProperty(o) && (nam = '_' == o.charAt(0) ? o.substr(1) : o, void 0 !== t[o] && null != t[o] && (0 == o.indexOf('unescape-') ? n += o.replace('unescape-', '') + '=' + t[o] + '&' : n += escape(nam) + '=' + escape(t[o]) + '&'));
                return n;
            }, Manager.prototype.sendAbTestEvent = function (e, t, i, r) {
                var n = {
                        abTestsEventType: 'simple',
                        name: e,
                        type: t,
                        eventTime: new Date().getTime()
                    }, o = { 'unescape-d': encodeURIComponent(__trcJSONify(n)) };
                if (r && TRC.hasNetworkAsyncSupport()) {
                    o.tim = __trcClientTimestamp(), o.id = parseInt(10000 * Math.random()), o.llvl = win.trc_debug_level, __trcCopyProps(this.getEventParams(), o);
                    var a = this.composeGetURL('abtests', o);
                    TRC.sendPostAsyncCall(a);
                } else
                    this.sendEvent('abtests', o, null, !1, i, null, r);
            }, Manager.prototype.initRBox = function (e, t) {
                var i, r;
                return i = new TRC.implClasses.TRCRBox(t.origin.toString(), t, this), e._trcRboxId = i.id, this.boxes[i.id] = i, e._trc_container || (e._trc_container = document.createElement('div'), e._trc_container.className = 'trc_rbox_container', e._trc_anonbox = document.createElement('div'), e._trc_container.appendChild(e._trc_anonbox), e.appendChild(e._trc_container), this.cssReset && 'rbox-tracking' !== i.mode_name ? (r = doc.createElement('div'), TRC.dom.swapElements(e, r, !1), i['outermostContainer'] = this.createCssResetContainers(e, i.mode_name), TRC.dom.swapElements(r, i['outermostContainer'], !1), TRC.pConsole('page', 'info', 'CSS reset is enabled on all widgets')) : i['outermostContainer'] = e), TRC.dispatch('beforeBoxRender', {
                    mybox: i,
                    containerElm: e,
                    boxesList: this.boxes
                }), i.render(e._trc_anonbox), this.renderRBox(i), win.TRC.trc_drawRBox = !0, i;
            }, Manager.prototype.shouldRetryFailedPlacementRequest = function (e) {
                return !e.addWidget && !e.fpl && (!e.numFailedRequests || e.numFailedRequests < this.maxRetriesPerFailedPlacementRequest);
            }, Manager.prototype.retryFailedPlacementRequest = function (e, t) {
                t.numFailedRequests = t.numFailedRequests || 0;
                var i = {};
                i[e] = t, t.numFailedRequests++, this.dispatchLoadRequest(i);
            }, Manager.prototype.createContainerForEscalatorWidget = function (e) {
                e['container'] = document.createElement('div'), e['container'].id = 'trc_rbox_slider_' + Math.floor(2147483648 * Math.random()).toString(36), e['container'].className = 'trc_related_container', this.cssReset && doc.body.appendChild(e['container']);
            }, Manager.prototype.callTrc = function (e, t, i, r) {
                TRC.isAMPSplitFeed && this.ampSplitFeedManager.ampSplitFeedCache.getCacheData('tbl_syncViewID') !== t.vi && __trcError('View ID Not Synched Between AMP Split Feed iFrames'), this.preloadRequestLoader = this.loadExternal(e, 'js', this.handleLoadResponseFailure.trcBind(this), !0), this.preloadRequestLoader.doneCurrentRequest = r, this.preloadRequestLoader.timeout = TRC.Timeout.set(this.abortLoadRequest.trcBind(this, !0, t.cb), i), this.lastReqId = t.id, TRC.performance && TRC.performance.mark('5.1.0', null, 'TrcPv3', this.lastReqId, 'pv3call', TRC.PerfEvenType.START), TRC.pConsole('', 'time', 'dispatch recommendation request', '');
            }, Manager.prototype.callTrcByWorker = function (url, req, timeout) {
                TRC.performance && TRC.performance.mark('5.1.0', null, 'TrcPv3', this.lastReqId, 'pv3call', TRC.PerfEvenType.START), this.lastReqId = req.id, TRC.worker.xhr(url, timeout, function (data) {
                    try {
                        eval(data);
                    } catch (e) {
                        __trcError('TRC.worker: Worker Error in trc response', e);
                    }
                }, this.handleLoadResponseFailure.bind(this)), TRC.pConsole('', 'time', 'dispatch recommendation request', '');
            }, Manager.prototype.callTrcByAjax = function (e, t, i, r) {
                TRC.performance && TRC.performance.mark('5.1.0', null, 'TrcPv3', this.lastReqId, 'pv3call', TRC.PerfEvenType.START), this.lastReqId = t.id;
                var n = function (e) {
                        this.handleLoadResponseFailure(), this.abortLoadRequest(!0, t.cb), __trcWarn(e);
                    }.trcBind(this), o = this.handleLoadResponse.trcBind(this, t.cacheKey);
                this.preloadRequestLoader = {}, this.preloadRequestLoader.doneCurrentRequest = r;
                var a = new XMLHttpRequest();
                a.open('GET', e, !0), a.setRequestHeader('Content-Type', 'text/plain'), a.withCredentials = !0, a.timeout = i, a.addEventListener('readystatechange', this.handleTrcAjaxResponseStatus.trcBind(this, a, o, n)), a.addEventListener('error', function () {
                    n('Network error');
                }), a.addEventListener('timeout', function () {
                    n('Network timeout: ' + i);
                }), a.send(''), TRC.pConsole('', 'time', 'dispatch recommendation request', '');
            }, Manager.prototype.handleTrcAjaxResponseStatus = function (e, t, i) {
                if (4 === e.readyState && 0 !== e.status)
                    if (e.status < 200 || e.status >= 300)
                        i('Ajax status code not valid');
                    else {
                        var r = /^[^{]*(.*)\)$/, n = e.responseText;
                        if (!n || n.indexOf('{"trc":{}}') > -1)
                            i('Invalid response from server: ' + n);
                        else if (n.indexOf('TRC.callbacks.mute()') > -1)
                            TRC.callbacks.mute();
                        else {
                            var o = n.match(r);
                            if (o)
                                try {
                                    t(JSON.parse(o[1]));
                                } catch (e) {
                                    i('TRC response not a valid JSON: ' + n);
                                }
                            else
                                i('Can\'t validate TRC response: ' + n);
                        }
                    }
            }, Manager.prototype.clearPreloadRequestLoader = function () {
                this.preloadRequestLoader && (TRC.Timeout.clear(this.preloadRequestLoader.timeout), this.preloadRequestLoader.parentNode && this.preloadRequestLoader.parentNode.removeChild(this.preloadRequestLoader), this.preloadRequestLoader = null);
            }, Manager.prototype.clearPreloadRequestLoaderAndCallNext = function () {
                var e;
                this.preloadRequestLoader && 'function' == typeof this.preloadRequestLoader.doneCurrentRequest && (e = this.preloadRequestLoader.doneCurrentRequest), this.clearPreloadRequestLoader(), e && e();
            }, Manager.prototype.clearPreloadRequestLoaderAndResetQueue = function () {
                this.clearPreloadRequestLoader(), TRC.recoRequestsQueue.resetQueue();
            }, Manager.prototype.enableExploreMore = function (e, t) {
                e.shouldNotCopyPublisherHeaderHtml = this.global['shouldNotCopyPublisherHeaderHtml'] || !1, this.loadExploreMoreModule(e);
                var i = this.createAndAppendExploreMoreContainer(e.exm.container);
                this.setPlacementDataInPreloadRequest(t, i), TRC.exploreMoreInitialized = !0;
            }, Manager.prototype.setPlacementDataInPreloadRequest = function (e, t) {
                this.preloadRequest[e] = this.computeRBoxOptions({
                    container: t,
                    placement: e,
                    target_type: 'mix',
                    addedWidget: !0
                });
            }, Manager.prototype.createAndAppendExploreMoreContainer = function (e) {
                var t = document.createElement('div');
                return t.id = e, TRC.dom.addClass(t, 'tbl-invisible'), document.body.appendChild(t), t;
            }, Manager.prototype.loadExploreMoreModule = function (e) {
                TRC.ModuleLoader.load('explore-more', TRC.ExploreMore, function () {
                    this.exploreMore = new TRC.ExploreMore(this, e);
                }.trcBind(this));
            }, Manager.prototype.shouldSkipPlacement = function (e, t) {
                return !!TRC.exploreMoreInitialized && (TRC.ExploreMore && TRC.ExploreMore.shouldSkipPlacement(e, t, this.feedsManager));
            }, Manager.prototype.shouldSkipPushedRequest = function (e) {
                return !!TRC.exploreMoreInitialized && (TRC.ExploreMore && TRC.ExploreMore.shouldSkipPushedRequest(e));
            }, Manager.prototype.parseClientGenericAction = function (e) {
                var t = this.emulateCga() || e.trc['cga'];
                if (t)
                    return __trcUnJSONify(t);
            }, Manager.prototype.emulateCga = function () {
                return TRC.URL.prototype.getParameter.call(location.href, 'trc_cga');
            }, Manager.prototype.initCcpa = function (e, t) {
                var i = e && e.ccpa;
                !this.global['disable-ccpa'] && i && TRC.ccpa && !TRC.ccpa.isInitialized && (TRC.ccpaPs ? (TRC.ccpa.isInitialized = !0, TRC.ccpa.sendCcpaEvent('publisher')) : TRC.ccpa.init(t.trc['vl'], e.ccpa));
            }, Manager.prototype.initPubConfigGenericActionOverride = function (e) {
                if (e && e.pubConfigOverride) {
                    this.isExpoTest() && TRC.util.haveMutualKeys(e.pubConfigOverride, TRC.overrideGlobalConfig) && __trcError('client generic action override publisher config used in an expo test! expo test:' + this.getSystemFlag('experimentID') + ',override is:' + JSON.stringify(e.pubConfigOverride) + ' expo is:' + JSON.stringify(TRC.overrideGlobalConfig));
                    var t = TRC.util.merge({}, this.global, e.pubConfigOverride);
                    Object.defineProperty(this, 'global', {
                        get: function () {
                            return t;
                        }
                    });
                }
            }, Manager.prototype.isExpoTest = function () {
                return !!this.getSystemFlag('experimentID');
            };
        }(window, document), function (e, t) {
            var i = 'sponsored';
            function r() {
                return document.createTextNode('\xA0');
            }
            function n() {
                return document.createTextNode('\u2026');
            }
            TRC.implClasses = TRC.implClasses || {};
            var o = TRC.implClasses.TRCRBox = function (e, t, i) {
                    return this._id = Math.floor(100000 * Math.random()), this.fixHeight = t.height, this.domain = i.domain, this.origin = e, this.header = !1, this.id = 'trc_' + this._id, this.response = this.request = null, __trcCopyProps(t, this), this.loaded = !!this.loaded && this.loaded, this.element = null, this.listContainer = null, this.retryCount = 0, this.drawList = !1, this.forceItemType = !1, this.trc = i, this.util = TRC.util, this.timeoutId = null, this.errorHandler = '', this.boxes = [], this.recommendationList = null, this.use_cdn = !0 === this.trc.getProperty(this.mode_name, 'use-cdn-recommendations', this.propertiesOverride), this.postRenderQueue = new TRC['PostRenderQueue'](), this.src = null, this.fullEventItemsHash = {}, this.isCssImportant = this.trc.getProperty(this.mode_name, 'use-css-important', this.propertiesOverride), this.publisher = TRC.publisherId, this.smallIOSDevice = this.trc['small-ios-device'] || 'iPhone|iPod', this.isSmallIOS = this.smallIOSDevice.indexOf(TRC.Device.deviceType) >= 0, this.isFeedCard = t.isFeedCard, this.enableFeedView = t.feedViewConfig || this.trc.global['enable-feed-view'] || !1, this.iosLinkTarget = this.trc.getProperty(this.mode_name, 'ios-sc-link-target-mode', this.propertiesOverride) || this.trc.global['ios-sc-link-target'], this.defaultLinkTarget = this.trc.global['link-target-conf'] || {
                        NAV: '_self',
                        NT: '_blank',
                        SP: '_blank'
                    }, this.linkTargetConf = this.isSmallIOS && this.iosLinkTarget ? this.iosLinkTarget : this.trc['link-target-conf'], this.ntHandlerEnabled = this.trc.global['publisher-onclick-nt-enabled'], this.organicRedirParam = this.trc.global['organic-redirect-param'], this.shiftRedirOnclick = this.trc.global['shift-redir-onclick'], this.useRedirect = TRC.util.isAmp(TRC) ? this.trc.global['enable-organic-redirect-on-amp'] : this.trc.global['enable-organic-redirect'], this.useRedirectOnLink = this.trc.global['use-redirect-on-link'], this.adcItemTypes = this.trc.global['adchoice-item-types'] || {
                        'is-organic': !1,
                        'is-in-network': !1,
                        'is-syndicated': !0,
                        'is-native': !0
                    }, this.sendClickPiggyBack = this.trc.global['send-pb-in-click'], this.imagesAltUrls = this.trc.global['images-alt-urls'] || [], this.disableResponsiveCSSReuse = this.trc.global['disable-responsive-css-reuse'], this.options = t, this.apiData = [], this.lazyLoadImageObserversIds = [], this.isMultiWidget = t.trcResponse && t.trcResponse.multiWidget, TRC.util.isPercentEnabled(this.trc.global, 'custom-image-size-round-percent') && (this.customImageSizeRound = this.trc.global['custom-image-size-round-value']), this;
                }, a = 'https://images.taboola.com/taboola/image/fetch/', s = 'h_{h},w_{w}', l = a + 'f_jpg%2Cq_80%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces%2Ce_sharpen/', c = a + 'fl_lossy%2Cf_gif%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/', d = a + '$pw_{w}%2C$ph_{h}/t_tbl-cnd/', h = TRC.PROTOCOL, u, p;
            o.prototype.DEFAULT_THUMB_RATIO = 0.8, o.prototype.getImageUrlPrefix = function () {
                return l;
            }, o.prototype.getListId = function () {
                return this.visible ? 'rbox-' + this.origin : 'rbox-tracking';
            }, o.prototype.getSessionId = function () {
                return this.response && this.response.trc ? this.response.trc['session-id'] : null;
            }, o.prototype.getItemType = function () {
                return this.forceItemType ? this.forceItemType : this.trc.getItemType();
            }, o.prototype.generateHeader = function (e) {
                var t = this.getWidgetToFeedHelper(), i = document.createElement('div'), r = document.createElement('span'), n = this.trc.getProperty(this.mode_name, 'header', this.propertiesOverride), o = this.trc.getProperty(this.mode_name, 'header-right', this.propertiesOverride), a = 'No Header' !== o;
                if (i.id = this.id.replace('trc_', 'trc_header_'), i.className = 'trc_rbox_header trc_rbox_border_elm', r.className = 'trc_rbox_header_span', this.generateHeaderIcon(r), i['ext'] = document.createElement('div'), i['ext'].className = 'trc_header_ext', i.appendChild(i['ext']), a)
                    this.generateHeaderPart(r, n, 'trc_header_left_column trc_header_left_part'), this.generateHeaderPart(r, o, 'trc_header_right_column trc_header_right_part');
                else {
                    var s = 'No Header' !== n ? n : '';
                    r.insertAdjacentHTML('beforeend', s);
                }
                return i['titleBox'] = r, i.appendChild(r), t && !t.getHeader() ? t.addHeaderToFeed(i) : e.appendChild(i), i;
            }, o.prototype.generateHeaderIcon = function (e) {
                var t, i, r, n = this.trc.getProperty(this.mode_name, 'header-icon', this.propertiesOverride) || 'NONE';
                'CUSTOM' === n ? r = this.trc.getProperty(this.mode_name, 'header-icon-url', this.propertiesOverride) : 'PUBLISHER_LOGO' === n && (r = this.trc.getPublisherVersionPropertyWithFallbackToNetwork('publisher-logo')), r && ((i = document.createElement('img')).className = 'trc_rbox_header_icon_img trc_img', i.src = TRC.URL.prototype.switchProtocol.call(r, h), (t = document.createElement('div')).className = 'trc_rbox_header_icon_div', t.appendChild(i), e.appendChild(t), e.className += ' trc_rbox_header_icon_span');
            }, o.prototype.generateHeaderPart = function (e, t, i) {
                var r = document.createElement('span');
                r.className = 'trc_inner_header ' + (i || ''), r.insertAdjacentHTML('beforeend', t), e.appendChild(r);
            }, o.prototype.render = function (e) {
                this.element = document.createElement('div'), this.element.id = this.id.replace('trc_', 'trc_wrapper_'), this.element.className = 'trc_rbox ' + this.mode_name, this.element.style.overflow = 'hidden', e.appendChild(this.element), this.element.style.display = 'none', !0 === this.trc.getProperty(this.mode_name, 'has-expand-animation', this.propertiesOverride) && new TRC.ExpandAnimationManager(this);
            }, o.prototype.setTargetItemsList = function (e, t, i) {
                if (t)
                    for (var r = 0, n = t.length; r < n; r++)
                        e[t[r]['item-id']] = {
                            tii: t[r]['item-id'],
                            tipt: this.getProviderType(t[r]),
                            tit: t[r]['type'],
                            tids: i
                        };
            }, o.prototype.getJsonTargetItemsList = function (e) {
                var t = [], i;
                for (i in e)
                    e.hasOwnProperty(i) && t.push(e[i]);
                return t;
            }, o.prototype.getProviderType = function (e, t) {
                return e['is-syndicated'] ? t ? 'sponsored' : 'SP' : e['is-in-network'] ? t ? 'exchange' : 'NT' : e['is-native'] ? t ? 'native' : 'NAV' : t ? 'organic' : 'RC';
            }, o.prototype.setApiItemsData = function (e) {
                this.apiData.push({
                    url: e.url,
                    slot: e.itemIndex,
                    id: e.id,
                    type: this.getProviderType(e, !0),
                    title: e.title
                });
            }, o.prototype.isReadMoreDevice = function (e) {
                for (var t = e.split('|'), i = {
                            smart_phone: TRC.dom.isSmartPhone(),
                            tablet: TRC.dom.isTablet(),
                            desktop: TRC.dom.isDesktop()
                        }, r = 0; r < t.length; r++) {
                    if ('all' === t[r])
                        return !0;
                    if (i[t[r]])
                        return !0;
                }
                return !1;
            }, o.prototype.getReadMoreConfig = function () {
                var e = this.trc.getProperty(this.mode_name, 'read-more-config', this.propertiesOverride) || {};
                return e.boxSelector = this.trc.getProperty(this.mode_name, 'read-more-box-selector', this.propertiesOverride), e.threshold = this.trc.getProperty(this.mode_name, 'read-more-threshold', this.propertiesOverride), e.minimizedSize = this.trc.getProperty(this.mode_name, 'read-more-minimized-size', this.propertiesOverride), e.caption = this.trc.getProperty(this.mode_name, 'read-more-caption', this.propertiesOverride), e.cutoffType = this.trc.getProperty(this.mode_name, 'read-more-cutoff-from-type', this.propertiesOverride), e.anchorSelector = this.trc.getProperty(this.mode_name, 'read-more-anchor-selector', this.propertiesOverride), e.lengthFromAnchorElementType = this.trc.getProperty(this.mode_name, 'read-more-cutoff-length-type', this.propertiesOverride), e.lengthFromAnchorElement = this.trc.getProperty(this.mode_name, 'read-more-cutoff-length-from-anchor-element', this.propertiesOverride), e.modeDevices = this.trc.getProperty(this.mode_name, 'read-more-mode-devices', this.propertiesOverride), e;
            }, o.prototype.isNoRecommendationsMode = function () {
                return 'rbox-tracking' == this.getListId() || 'rbox-only-video' === this.mode_name;
            }, o.prototype.calcModeName = function (e, t) {
                var i, r;
                return TRC.TRCParser.IsBaseModeAndABModeExist(e) ? TRC.TRCParser.parseBaseModeAndABModeName(e) : (i = TRC.TRCParser.parseBaseModeName(e)) ? i : (r = TRC.TRCParser.parseTestVariant(e)) ? (TRC.pConsole(this.mode_name, 'info', 'test variant = ' + r), TRC.TRCParser.parseABModeName(t, e)) : void 0;
            }, o.prototype.loadScriptCallback = function (e, t) {
                this.propertiesOverride = t.trc && t.trc['video-list'] && t.trc['video-list']['properties-override'], this.isProviderIframe = this.trcResponse && this.trcResponse.hasOwnProperty('ifr') && this.trcResponse.ifr;
                var i = 'TRCRBox.loadScriptCallback' + '(retry=' + this.retryCount + ')', r = t.trc, n, o = this.response && this.response.trc['DNT'] && 'TRUE' === this.response.trc['DNT'].toUpperCase(), a = TRC.TRCParser, s, l, c, d, h = this.trc.getProperty(this.mode_name, 'thumbnail-position', this.propertiesOverride);
                if (__trcDebug('Enter ' + i), this.abortRequest(), this.utm = this.requestTime && [
                        this.requestTime,
                        new Date().getTime() - TRC.utm.start
                    ], e && (this.trc.trcCache.cacheResponse(e, t, TRC.pageManager.state.moreDispatchParams), this.trc.cachedResponses[e] = !0), r && r['video-list'] && r['video-list'].pvc && (this.pVideoLoader = new TRC.PVideoLoader(this, r['video-list'].pvc, this.response.trc, this.trc)), !(r && r['video-list'] && r['video-list'].video || this.isProviderIframe)) {
                    __trcError('Exit ' + i + ': request format error');
                    var u = this.response.feedPlacement || this.placement;
                    return TRC.dispatch('onRboxFlowError', { placement: u }), void TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, this.placement, this.isFeedCard);
                }
                if (TRC.UserIdMerger.notifyPossibleUserChange(this.trc, TRC.publisherId, r['user-id'], r['session-data']), r['consent-missing'] || TRC.pageManager.storePublisherValue(TRC.publisherId, 'session-data', r['session-data']), t.trc['DNT'] && 'TRUE' === t.trc['DNT'].toUpperCase() ? (TRC.doNotTrack = !0, TRC.pageManager.removeAllKeys(), TRC.pageManager.removeUserId()) : TRC.pageManager.storeUserId(r['user-id'], r['consent-missing']), this.drawList)
                    __trcWarn('Exit ' + i + ': got another response after already drawing');
                else {
                    if (this.response = t, this.isResponseFromCache() && (this.cachedViewId = this.response.cachedViewId), this.setTargetItemsList(this.fullEventItemsHash, r['video-list'].video, 'a'), (c = new TRC.PlacementEventPostData()).setFullItemList(this.getJsonTargetItemsList(this.fullEventItemsHash)), d = this.createUtmParam(), void 0 !== this.modeGroupOrder && this.util.merge(d, { mgo: this.modeGroupOrder }), r['video-list'].video && r['video-list'].video.length < 1 && !this.isNoRecommendationsMode()) {
                        __trcError('Exit ' + i + ': no items in response - ' + this.mode_name), TRC.EventsAPI.dispatchRender(r), this.abortRendering(), this.sendAvailableEvent(d, c, !0, !1);
                        var u = this.response.feedPlacement || this.placement;
                        return TRC.dispatch('onRboxFlowError', { placement: u }), void TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, this.placement, this.isFeedCard);
                    }
                    if (this.isResponsive = this.trc.getProperty(this.mode_name, 'mode-is-responsive', this.propertiesOverride), this.recommendationList = this.isMultiWidget ? this.multiWidgetRecItems.splice(0, this.getCurrentListSize()) : r['video-list'].video || [], this.isProviderIframe ? TRC.listen('available::' + this.placement, function (e) {
                            !1 !== this.trcResponse.config['send-events'] && (this.sendAvailableEvent(d, c, !1, !0), this.visibilityReporter = new TRC.WidgetVisibilityReporter(this), TRC.intersections.isInViewPort({
                                targetElement: e.container,
                                enableDelayedVisibilityCheck: !0,
                                onTrigger: function () {
                                    this.recommendationList.length && this.visibilityReporter.calculateVisibleItems(null, !0, this.recommendationList), this.visibilityReporter.reportVisibility();
                                }.trcBind(this)
                            }), this.registerProviderClicks(this.recommendationList)), this.sendPlacementTrackingPixelsOnce('i');
                        }.trcBind(this)) : this.sendAvailableEvent(d, c, !1, !1), this['rtb-win'] && this.sendEvent('rtb-win', this['rtb-win']), this.itemsTypes = this.getItemsTypesList(this.recommendationList), this.privacyId = this.getPrivacyId(this.recommendationList), this.orig_name = this.mode_name, this.orig_placement = this.placement, this.isProviderIframe || this.sendPlacementTrackingPixelsOnce('i'), n = this.calcModeName(t.trc, this.mode_name), this.changeModeName(n, !0, 'mode - ' + n + ' has no config :- fallback - ' + this.mode_name), this.isProviderIframe || this.isNoRecommendationsMode() || void 0 !== this.trc.modes[this.mode_name]) {
                        s = this.trc.getProperty(this.mode_name, 'auto-size', this.propertiesOverride), l = 'none' != this.trc.getProperty(this.mode_name, 'thumbnail-position', this.propertiesOverride), this.useNativeLineClamp = TRC.Browser.compatibility.lineClamp && !this.trc.getProperty(this.mode_name, 'details-inline-with-title', this.propertiesOverride) && this.trc.getProperty(this.mode_name, 'use-browser-line-clamp', this.propertiesOverride), this.widgetCreatorLayout = this.trc.getProperty(this.mode_name, 'widget-creator-layout', this.propertiesOverride), this.isWCTextLinks = 'autowidget-template-text-links' === this.widgetCreatorLayout, this.isCarousel = 'scrolling' === this.trc.getProperty(this.mode_name, 'navigation-type', this.propertiesOverride), this.shouldLazyLoadImages = this.trc.getProperty(this.mode_name, 'has-thumbs-image-lazy-load', this.propertiesOverride) || this.trc.global['thumbnail-image-lazy-load'], this.link_target = this.link_target || this.trc.getProperty(this.mode_name, 'link-target') || 'normal', __trcDebug('Exit ' + i + ': success'), this.drawList = !0, this.hasReadMore = !0 !== this.trc.disableReadMore && this.trc.getProperty(this.mode_name, 'enable-read-more', this.propertiesOverride), this.readMorePageConfig = this['read_more'] || {}, this.readMoreConfig = this.getReadMoreConfig(), this.readMoreDevices = this.trc.getProperty(this.mode_name, 'read-more-mode-devices', this.propertiesOverride) || this.trc['read-more-devices'], this.getWidgetToFeedHelper() && this.getWidgetToFeedHelper().applyWidgetHeaderAndFooterStylesToFeed(this.mode_name), this.callPreRenderHooks(), this.trc.getProperty(this.mode_name, 'pending-archive') && TRC.modDebug.logMessageToServer(0, 'PENDING_ARCHIVE_MODE_ERROR[' + this.mode_name + ']', { 'event-type': 'ARCHIVE_MODE_ERROR' }), TRC.setReadMore && this.hasReadMore && this.isReadMoreDevice(this.readMoreDevices) ? TRC.isOptim('defer-read-more') ? setTimeout(function () {
                            TRC.setReadMore(this);
                        }.trcBind(this), 0) : TRC.setReadMore(this) : TRC.EventsAPI.readmore('none', this.response && this.response.trc), this.trc.yieldingEnabled || this.trc.totalModeCounter++;
                        var p = null;
                        try {
                            this.reqId = this.response.trc.req;
                        } catch (e) {
                            this.reqId = -1;
                        }
                        TRC.performance && TRC.performance.mark('7.0.1.' + this._id, p, this.mode_name, this.reqId, 'rendering', TRC.PerfEvenType.REQ_LEVEL_START), this.container && this.container.setAttribute('data-placement-name', this.placement), this.isProviderIframe || (TRC.CategoryCard.enableCategoryCard(this) && (this.categoryCard = new TRC.CategoryCard(this)), this.isResponsive && !this.isWCTextLinks ? (this.generateResponsiveOuters(this.element), this.drawResponsiveList(r), this.postHandleRecommendationsResponseData(r, t, h, l, o, p)) : 'rbox-only-video' === t.trc.mode ? (this.postHandleRecommendationsResponseData(r, t, h, l, o, p), this.postRender()) : (s && this.container && 0 == this.container.clientWidth && (this.container.style.width = '100%'), TRC.ModuleLoader.load('non-responsive-widget', this.drawListBody, function () {
                            this.generateVisibleParts(), this.drawListBody(r), this.postHandleRecommendationsResponseData(r, t, h, l, o, p);
                        }.trcBind(this))));
                    } else
                        __trcError('TRCRBox.loadScriptCallback: Mode name \'' + this.mode_name + '\' doesn\'t exist in configuration file ');
                }
            }, o.prototype.postHandleRecommendationsResponseData = function (e, t, i, r, n, o) {
                if (this.shouldLazyLoadImages && (this.lazyLoadViewportMarginThreshold = this.trc.getProperty(this.mode_name, 'thumbs-image-lazy-load-margins', this.propertiesOverride) || this.trc.global['thumbs-image-lazy-load-margins'] || '600px 1500px 600px 1500px', this.isCarousel && 'none' !== i && this.createCarouselContainerImgLazyLoadObserver()), TRC.StoryWidget.shouldInitStoryWidget(this) && new TRC.StoryWidget(this), TRC.performance && TRC.performance.mark('7.0.9.' + this._id, o, this.mode_name, this.reqId, 'rendering', TRC.PerfEvenType.REQ_LEVEL_STOP), TRC.dispatch('trcContentReady', { container: this.container }), e && e['video-list'] && e['video-list'].vtag && this.trc['mode-before-video-load'](this)) {
                    TRC.performance && TRC.performance.mark('10.0.1.' + this._id, null, 'videotag', '', 'videoTagLoad', TRC.PerfEvenType.START);
                    var a = {
                        placement: this.placement,
                        container: this.container
                    };
                    this.videoTagLoader = new TRC.VideoTagLoader(this.trc, e['video-list'].vtag, a, this, this.response.trc), this.videoTagLoader.loadVideo(), TRC.performance && TRC.performance.mark('10.0.9.' + this._id, null, 'videotag', '', 'videoTagLoad', TRC.PerfEvenType.STOP);
                }
                try {
                    TRC.SpotlightLoader.registerOnMainContainer(this.container, t), TRC.SpotlightLoader.load(this.response);
                } catch (e) {
                    __trcError('Error while trying to load Spotlight');
                }
                this.shouldInitRTBUserAdChoice(r, n) && TRC.ModuleLoader.load('user-adchoice', TRC.userAdChoice, this.initRTBUserAdChoice.trcBind(this)), this.shouldInitTaboolaChoice(r, n) && TRC.ModuleLoader.load('userx', TRC.userX, this.initTaboolaChoice.trcBind(this)), this.shouldInitSliderManager() && (TRC.RBoxUsage.logUsage('Init Escalator'), TRC.ModuleLoader.load('slider', TRC.SliderManager, function () {
                    new TRC.SliderManager(this);
                }.trcBind(this)));
            }, o.prototype.shouldInitTaboolaChoice = function (e, t) {
                var i = this.trc.global['has-userx'] && this.trc.getProperty(this.mode_name, 'mode-has-userx', this.propertiesOverride), r = this.options && this.options.trcResponse && !!this.options.trcResponse.nup;
                return TRC.pConsole(this.mode_name, 'info', 'has user X = ' + i, ''), i && e && !t && !TRC.Device.isTouchDevice && !TRC.SpotlightLoader.loadedScript && !r;
            }, o.prototype.initTaboolaChoice = function () {
                if (TRC.userX && !TRC.userX.isInitialized)
                    try {
                        TRC.userX.init(this.trc);
                    } catch (e) {
                        __trcDebug('failed to init Taboola Choice', e);
                    }
                try {
                    TRC.userX.initForMode(this);
                } catch (e) {
                    __trcDebug('failed to init Taboola Choice for mode ' + this.mode_name);
                }
            }, o.prototype.shouldInitRTBUserAdChoice = function (e, t) {
                return this.trc.global['show-rtb-ad-choices-icon'] && e && !t && !TRC.SpotlightLoader.loadedScript && this.recommendationList && this.recommendationList.some(function (e) {
                    return e.plink;
                });
            }, o.prototype.initRTBUserAdChoice = function () {
                if (!TRC.userAdChoice.isInitialized)
                    try {
                        TRC.userAdChoice.init();
                    } catch (e) {
                        __trcDebug('failed to init RTB Choice');
                    }
                try {
                    TRC.userAdChoice.initForMode(this);
                } catch (e) {
                    __trcDebug('failed to init RTB Choice for mode ' + this.mode_name);
                }
            }, o.prototype.shouldInitSliderManager = function () {
                return (!0 === this.slider || !0 === this.trc.getProperty(this.mode_name, 'slider', this.propertiesOverride)) && !1 !== this.trc.slider;
            }, o.prototype.callPreRenderHooks = function () {
                var e = this.trc.getProperty(this.mode_name, 'mode-start'), t = this.trc['mode-pub-start'];
                try {
                    'function' == typeof t && (t(this, this.container), TRC.CustomModulesManager.runHook('mode-pub-start', null, this, this, this.container)), 'function' == typeof e && e(this, this.container);
                } catch (e) {
                    __trcError('Error in pre rendered hooks - ' + e.message);
                }
            }, o.prototype.registerProviderClicks = function (e) {
                for (var t, i = 0; i < e.length; i++) {
                    t = e[i], TRC.listen('click::' + this.placement, function () {
                        this.sendEvent('click', {
                            it: t.type,
                            ii: t['item-id'],
                            p: t['is-syndicated'] ? t.publisher : '',
                            li: this.getListId()
                        }, null, !1), this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()['c']);
                    }.trcBind(this));
                    break;
                }
            }, o.prototype.changeModeName = function (e, t, i) {
                e && (void 0 !== this.trc.modes[e] ? (this.trc.cssReset && this.switchCSSResetDivIds(this.mode_name, e), this.mode_name = e, this.element.className = 'trc_rbox' + ' ' + this.mode_name) : this.trc.global['send-variant-warning'] && (t ? __trcWarn(i) : __trcDebug(i)));
            }, o.prototype.switchCSSResetDivIds = function (e, i) {
                var r = TRC.modesCache[e] ? TRC.modesCache[e].cssDivsArr : [], n = TRC.modesCache[i] ? TRC.modesCache[i].cssDivsArr : [], o = r.length;
                try {
                    for (var a = 0; a < o; a++)
                        t.getElementById(r[a]).id = n[a];
                } catch (e) {
                    __trcError('TRCRBox.prototype.switchCSSResetDivs : ', e.message);
                }
            }, o.prototype.abortRequest = function () {
                this.timeoutId && (TRC.Timeout.clear(this.timeoutId), this.timeoutId = null), this.request && (this.request.parentNode.removeChild(this.request), this.request = null);
            }, o.prototype.abortRendering = function () {
                var e;
                switch (__trcDebug('Called ' + ('TRCRBox.abortRendering' + '(retry=' + this.retryCount + ')')), this.drawList = !0, typeof this.errorHandler) {
                case 'string':
                    return void (null != this.listContainer && this.listContainer.appendChild(document.createTextNode('Error getting recommendations: ' + this.errorHandler)));
                case 'function':
                    return void this['errorHandler']();
                }
            }, o.prototype.getContainer = function () {
                return this.element.parentNode;
            }, o.prototype.sendEvent = function (e, t, i, r, n, o) {
                var a = !1, s = this.trc.formattedTRCRequest && this.trc.formattedTRCRequest.tmpl, l = this.response.trc['placement-group'], c = this.response && this.response.trc ? this.response.trc['session-data'] : null, d = {
                        ri: this.response ? this.response.trc['req'] : null,
                        sd: this.trc.getSessionData(c),
                        ui: TRC.pageManager.getUserId(),
                        pi: this.trc.getItemId(),
                        wi: this.response ? this.response.trc['watched-item'] : null,
                        pt: this.getItemType(),
                        vi: this.cachedViewId || TRC.pageManager.getPageData(),
                        li: this.getListId()
                    }, h = function () {
                        a || (a = !0, n && n());
                    };
                this.isResponseFromCache() && (d.cache = '1'), this.trc.formattedTRCRequest && this.trc.formattedTRCRequest.ad && (d.ad = __trcJSONify(this.trc.formattedTRCRequest.ad)), this.trc.systemFlags && 'normal' !== this.trc.systemFlags.loaderType && (d.lt = this.trc.systemFlags.loaderType), this.response.trc && (this.trc.global['tmp-use-pb-params'] && this.trc.configForPostEvent[e] || 'click' === e && this.sendClickPiggyBack) && (this.response.trc['ppb'] && (t.ppb = this.response.trc['ppb']), this.response.trc['cpb'] && (t.cpb = this.response.trc['cpb']), this.response.trc['prty'] && (t.prty = this.response.trc['prty']), this.response.trc['caty'] && (t.caty = this.response.trc['caty'])), 'click' == e && 'nt' == t.prt && (d = {}), s && (d.tmpl = s), l && (d.pg = l), __trcCopyProps(t, d), !0 !== this.response.trc['video-list']['content-hub-forced-placement'] || 'available' !== e && 'explore' !== e && 'visible' !== e || (e = 'content-hub-' + e), r ? (TRC.pConsole(this.mode_name, 'info', 'sending event type : ' + e, d, 'object'), this.trc.log1(e, d, i, h, this.placement)) : this.trc.logTrcEvent(e, d, i, h);
                var u = null;
                TRC.performance && 'visible' == e && TRC.performance.mark('11.0.' + this._id, u, this.mode_name, this.reqId, 'visible', TRC.PerfEvenType.MARK), 'number' == typeof o && TRC.Timeout.set(h, o);
            }, o.prototype.load = function (e) {
                if (this.errorHandler = e, this.loadRBoxRequestFailed)
                    return __trcError('loadRBox failed, aborting.'), void this.abortRendering();
                var t;
                ({}[this.placement] = this, this.loadScriptCallback(null, this.response), this.detectBids(), this.measureDistanceFromArticle(), this.takePageScreenshot());
            }, o.prototype.detectBids = function () {
                TRC.util.isPercentEnabled(this.trc.global, 'enable-bid-detection') && TRC.ModuleLoader.load('bid-detection', TRC.BidDetection, function () {
                    TRC.bidDetector || (TRC.bidDetector = new TRC.BidDetection(this.response.trc), TRC.bidDetector.detect());
                }.trcBind(this));
            }, o.prototype.measureDistanceFromArticle = function () {
                TRC.util.isRboxEncapsulated(TRC) || TRC.util.isPercentEnabled(this.trc.global, 'enable-distance-from-article') && TRC.ModuleLoader.load('distance-from-article', TRC.DistanceFromArticle, function () {
                    TRC.DistanceFromArticle.measureAndReport(this.trc.global['distance-violation-minimal-article-text-percentage']);
                }.bind(this));
            }, o.prototype.takePageScreenshot = function () {
                !TRC.util.isRboxEncapsulated(TRC) && TRC.util.isPercentEnabled(this.trc.global, 'screenshot-capture-enabled') && TRC.ModuleLoader.load('screenshot-capture', TRC.screenshotCaputre, function () {
                    TRC.screenshotCaputre.init(document.body, { keepImages: !0 });
                }.trcBind(this));
            }, o.prototype.getBoundingClientRect = function (e, t) {
                var i;
                return t ? {
                    left: t.boundingClientRect.left + e.left,
                    right: t.boundingClientRect.right + e.left,
                    top: t.boundingClientRect.top + e.top,
                    bottom: t.boundingClientRect.top + e.bottom,
                    width: t.boundingClientRect.width,
                    height: t.boundingClientRect.height
                } : e;
            }, o.prototype.clearChilds = function (e) {
                for (; e.hasChildNodes();)
                    e.removeChild(e.lastChild);
            }, o.prototype.hasDuration = function () {
                for (var e, t = this.trc.getProperty(this.mode_name, 'detail-order', this.propertiesOverride).split(','), i = 0; e = t[i]; i++)
                    if ('duration' == e)
                        return !0;
                return !1;
            }, o.prototype.cleanStyleDimensions = function (e) {
                var t = null;
                try {
                    __trcDOMWalker(e, function (e) {
                        e.style.cssText && (e.style.width = '', e.style.height = ''), -1 !== (e.className + '').indexOf('video-duration') && (t = e);
                    });
                } catch (e) {
                }
                return t;
            }, o.prototype.createBillboard = function () {
                var e = __trcGetElementsByClass('trc_rbox_outer', 'div', this.element)[0];
                if (!e)
                    return null;
                var t = document.createElement('div');
                return this.billboard = t, t.className = 'trc_billboard', t.style.width = 'auto', e.parentNode.insertBefore(t, e), e.style.clear = 'both', t;
            }, o.prototype.checkForBlocking = function () {
                var e, t, i, r, n, o, a, s, l = '', c = [], d = [], h = [];
                if (this.trc.global['enable-old-abp-check']) {
                    for (e = 0; t = this.boxes[e]; e++) {
                        try {
                            (n = t.video_data['is-in-network'] || t.video_data['is-native']) || (r = t.video_data['is-syndicated']);
                        } catch (e) {
                        }
                        o = n ? d : r ? h : c, t && 1 === t.nodeType && t.childNodes.length ? (a = document.trcGetCurrentStyle(t, '-moz-binding'), i = document.trcGetCurrentStyle(t, 'orphans'), 'hidden' != (s = document.trcGetCurrentStyle(t, 'visibility')) && ('none' == document.trcGetCurrentStyle(t, 'display') ? ('4321' == document.trcGetCurrentStyle(t, 'orphans') && (l = l || 'adblockplus'), o.push(1)) : a && 'none' != a && (l = l || 'adblockplus', o.push(1)))) : o.push(1);
                    }
                    (c.length || h.length || d.length) && __trcWarn('blocked:' + c.length + '-' + d.length + '-' + h.length + '-' + (l || 'unknown'));
                }
            }, o.prototype.setVideoPlayerLoad = function (e, t, i, r, n, o) {
                try {
                    this.pVideoLoader.loadVideo({
                        playerContainer: e,
                        url: t,
                        poster: i,
                        itemIndex: r,
                        itemId: n
                    }, o), TRC.tlf && console.time('in setVideoPlayerLoad');
                } catch (e) {
                    __trcWarn('Error in setVideoPlayerLoad', e);
                }
            }, o.prototype.getThumbnailsDimensions = function (e) {
                var t = e.boundingClientRect, i;
                return {
                    width: Math.ceil(t.width),
                    height: Math.ceil(t.height)
                };
            }, o.prototype.removeCarouselItemImgLazyLoadObserver = function (e) {
                for (var e = e.split(' '), t, i = 0; i < e.length; i++)
                    -1 !== (t = this.lazyLoadImageObserversIds.indexOf(e[i])) && (TRC.intersections.unobserve(this.lazyLoadImageObserversIds[t]), this.lazyLoadImageObserversIds.splice(t, 1));
            }, o.prototype.createCarouselContainerImgLazyLoadObserver = function () {
                var e = {
                    targetElement: this.container,
                    threshold: 0,
                    rootMargin: this.lazyLoadViewportMarginThreshold,
                    disableCheckOverlay: !0,
                    onEnter: this.createCarouselItemImgLazyLoadObserver.trcBind(this)
                };
                this.lazyLoadImageObserversIds.push(TRC.intersections.observe(e));
            }, o.prototype.loadCarouselItemImage = function (e, t, i, r, n, o, a, s, l, c) {
                var d = this.getThumbnailsDimensions(a), h = s.getAttribute(TRC.intersections.TARGET_ATTRIB);
                this.setImageLoad(e, t, i, r, n, o, !0, d), h && this.removeCarouselItemImgLazyLoadObserver(h);
            }, o.prototype.createCarouselItemImgLazyLoadObserver = function (e, t, i, r) {
                for (var n, o = t.getAttribute(TRC.intersections.TARGET_ATTRIB), a = 0; a < this.boxes.length; a++)
                    n = {
                        rootSelector: '#' + this.outerBox.id,
                        targetElement: this.boxes[a].thumbBlock,
                        threshold: 0,
                        rootMargin: this.lazyLoadViewportMarginThreshold,
                        onEnter: this.loadCarouselItemImage.trcBind(this, this.boxes[a].img, this.boxes[a], this.boxes[a].img_src, 100, this.boxes[a].thumbBlock, this.trc.global['thumb-lazy-load-switch'])
                    }, this.lazyLoadImageObserversIds.push(TRC.intersections.observe(n));
                o && this.removeCarouselItemImgLazyLoadObserver(o);
            }, o.prototype.lazyLoadImage = function (e, t, i, r, n, o, a, s, l, c) {
                var d = this.getThumbnailsDimensions(a), h = s.getAttribute(TRC.intersections.TARGET_ATTRIB);
                this.setImageLoad(e, t, i, r, n, o, !0, d), h && this.removeCarouselItemImgLazyLoadObserver(h);
            }, o.prototype.alternateImgBaseUrl = function (e) {
                return TRC.imageCounter++, e.replace('images.taboola.com', this.imagesAltUrls[TRC.imageCounter % this.imagesAltUrls.length]);
            }, o.prototype.setImageLoad = function (e, t, i, r, n, o, a, s) {
                var l, c, d, u, p, m, g, f, b;
                if (g = TRC.util.isPercentEnabled(this.trc.global, 'cloudinary-encode') ? TRC.imageUtils.cloudinaryEncoding(i) : this.trc.global['tmp-image-utf8-encode'] ? encodeURIComponent(i) : escape(i), !a && this.shouldLazyLoadImages) {
                    if (this.isCarousel)
                        return;
                    return f = {
                        targetElement: n,
                        threshold: 0,
                        rootMargin: this.lazyLoadViewportMarginThreshold,
                        disableCheckOverlay: !0,
                        onEnter: this.lazyLoadImage.trcBind(this, e, t, i, r, n, o)
                    }, void this.lazyLoadImageObserversIds.push(TRC.intersections.observe(f));
                }
                if (m = a ? s : this.getContainerDim(n, t, this.isHiddenItem(t)))
                    u = this.getImageOptimizationUrlByItemRtbProp(t.video_data), i = this.getImageOptimizePrefix(i, u, m) + g;
                else if (r)
                    return void TRC.Timeout.set(this.setImageLoad.trcBind(this, e, t, i, r--, n, o, a, s), 50);
                l = t.video_data['pvideo-url'], c = t.video_data.itemIndex, d = t.video_data['item-id'], this.imagesAltUrls.length > 0 && (i = this.alternateImgBaseUrl(i)), this.trc.getExpoImageTag() && (i += (-1 === i.indexOf('?') ? '?' : '&') + this.trc.getExpoImageTag()), t.img_src = i = TRC.URL.prototype.switchProtocol.call(i, h), e.src = i, b = Date.now(), TRC.performance && TRC.performance.mark('imgLoad' + b + 'start', null, '', b, 'imgLoadTime', TRC.PerfEvenType.START), TRC.dom.on(e, 'load', function (e) {
                    return TRC.performance && TRC.performance.mark('imgLoad' + b + 'stop', null, '', b, 'imgLoadTime', TRC.PerfEvenType.STOP), !0;
                }), this.pVideoLoader && l && (p = {
                    isCreatePVideoOverlay: this.trc.getProperty(this.mode_name, 'p-video-overlay', this.propertiesOverride),
                    video_data: t.video_data,
                    container: t,
                    language: this.trc['language'],
                    isSendEvents: this.trc.global['p-video-overlay-send-events']
                }, n = this.isResponsive ? n : n.firstChild, this.setVideoPlayerLoad(n, l, i, c, d, p));
            }, o.prototype.getImageOptimizationUrlByItemRtbProp = function (e) {
                return this.imageOptimizePrefixFlag = !0, e['is-rtb'] ? this.rtbImageOptimizePrefix = this.rtbImageOptimizePrefix || this.getImageOptimizationUrl(e) : (e['thumbnail-transformations'] || e['is-gift']) && this.trc.global['image-optimization-url-per-item-is-enabled'] ? this.getImageOptimizationUrl(e) : this.imageOptimizePrefix = this.imageOptimizePrefix || this.getImageOptimizationUrl(e);
            }, o.prototype.setImagePrefixUrl = function (e) {
                var t = 'image-url-prefix', i = l, r;
                return e['is-rtb'] ? (t = 'rtb-image-url-prefix', i = d) : e['is-gift'] ? (t = 'gif-url-prefix', i = c) : e['thumbnail-transformations'] && (r = a + s + ',' + e['thumbnail-transformations'] + '/'), TRC.shiftDomain(r || this.trc.getProperty(this.mode_name, t, this.propertiesOverride) || this.trc.global[t] || i);
            }, o.prototype.handleGifPrefixParams = function (e) {
                var t = this.trc.global['gif-fade-effect-in-ms'], i, r;
                return t && '0' !== t && (r = encodeURIComponent(',e_fade:{fade},e_fade:-{fade}'.replace(new RegExp('{fade}', 'g'), t)), e = e.substr(0, e.length - 1) + r + (e.lastIndexOf('/') === e.length - 1 ? '/' : '')), e;
            }, o.prototype.forceGifPrefixUrl = function () {
                return TRC.shiftDomain(this.trc.getProperty(this.mode_name, 'gif-url-prefix', this.propertiesOverride) || this.trc.global['gif-url-prefix'] || c);
            }, o.prototype.getImageOptimizationUrl = function (e) {
                var t = this.setImagePrefixUrl(e), i = this.trc.global['images-host'], r = this.trc.getProperty(this.mode_name, 'images-radius', this.propertiesOverride), n = e['is-gift'], o;
                return e['pvideo-url'] && e.thumbnail && e.thumbnail.indexOf('.gif') > -1 && (t = this.forceGifPrefixUrl(), n = !0), i && i.length > 2 && ((o = new TRC.URL(t)).host = i, t = o.toString()), r && '0' != r && (t = n ? t.replace(new RegExp('f_gif'), 'f_gif%2Cr_' + r) : (t = t.replace(/f_jpg(%2C)?/, '')).replace(/fetch\//, 'fetch/f_png%2C' + 'r_' + r + '%2C')), n && (t = this.handleGifPrefixParams(t)), t;
            }, o.prototype.isHiddenItem = function (e) {
                return 'none' === t.trcGetCurrentStyle(e, 'display', null);
            }, o.prototype.getContainerDim = function (e, t, i) {
                var r, n, o = 100;
                if (i) {
                    if (this.cachedImageDim)
                        return this.cachedImageDim;
                } else if (r = TRC.dom.getElementRect(e), n = Math.ceil(r.right - r.left))
                    return o = Math.ceil(r.bottom - r.top || this.getAspectHeight(t) || n * this.getThumbAspectRatio(this.trc.modes[this.mode_name], 'ratio') || o), this.cachedImageDim = {
                        width: n,
                        height: o
                    };
                return null;
            }, o.prototype.getAspectHeight = function (e) {
                var t;
                return e.thumbnail_aspect ? (t = TRC.dom.getElementRect(e.thumbnail_aspect)).bottom - t.top : 0;
            }, o.prototype.getImageOptimizePrefix = function (e, t, i) {
                TRC.performance && TRC.performance.mark('7.1.1.' + this._id);
                var r = this.getImageSizeFactor(), n = this.trc.getProperty(this.mode_name, 'image-min-width', this.propertiesOverride) || 110, o = this.trc.getProperty(this.mode_name, 'image-max-dimension', this.propertiesOverride) || 1500, a = parseInt(this.customImageSizeRound) || this.trc.getProperty(this.mode_name, 'image-size-round', this.propertiesOverride) || 20, s = this.trc.getProperty(this.mode_name, 'image-max-ratio', this.propertiesOverride) || 2.5, l = Math.min(Math.ceil(Math.max(i.width * r, n) / a) * a, o), c = Math.max(Math.min(this.getAllowedRatio(i), s), 1 / s), d = Math.ceil(l * c);
                return t = t.replace(new RegExp('{w}', 'g'), l.toString()).replace(new RegExp('{h}', 'g'), d.toString()), TRC.performance && TRC.performance.mark('7.1.9.' + this._id), t;
            }, o.prototype.getImageSizeFactor = function () {
                var e = this.trc.getProperty(this.mode_name, 'image-size-factor', this.propertiesOverride) || 1.2;
                return this.trc.global['use-dpr-images'] && this.trc.getProperty(this.mode_name, 'use-dpr-images', this.propertiesOverride) && TRC.dom.isHighDensity() && (e = this.trc.getProperty(this.mode_name, 'image-dpr-factor', this.propertiesOverride) || e), e;
            }, o.prototype.getAllowedRatio = function (e) {
                for (var t = this.trc.getSortedCloudinaryRatios(), i = this.trc.getProperty(this.mode_name, 'image-allowed-ratio-diff', this.propertiesOverride) || 0.01, r = 1 * e.height / e.width, n = Math.abs(r - i), o = 0; o < t.length; o++) {
                    var a = t[o];
                    if (!isNaN(a) && a >= n)
                        return a;
                }
                return r;
            }, o.prototype.isInViewPort = function (e, t) {
                var i = TRC.visibility.getMinViewPortOffsets(this.container);
                return !(i < 0 && Math.abs(i) > t);
            }, o.prototype.createUtmParam = function () {
                return { utm: TRC.utm.join(',') + (this.utm ? ',' + this.utm.join(',') : '') };
            }, o.prototype.postRender = function (e) {
                if (e) {
                    var t = this.postRenderQueue.popFront();
                    if (null == t)
                        return void __trcDebug('TRCRBox.postRender: finished');
                    try {
                        t.func.call(this), TRC.pConsole(this.mode_name, 'debug', 'executing postRender functions - see info', t.func.toString());
                    } catch (e) {
                        __trcError('Error in TRCRBox.postRender while executing ' + t.name, e);
                    }
                }
                TRC.Timeout.set(this.postRender.trcBind(this, !0), 0);
            }, o.prototype.getPopupUrl = function () {
                return this.trc.getProperty(this.mode_name, 'popup-custom-url', this.propertiesOverride) || 'popup.taboola.com/' + (this.trc['language'] || 'en');
            }, o.prototype.check_visibility = function () {
                for (var e = 0; e < this.boxes.length; e++) {
                    var t = this.boxes[e];
                    this.itemMaxHeight && (t.style.height = this.itemMaxHeight + 'px');
                }
            }, o.prototype.findElement = function (e, t, i, r) {
                void 0 === t && (t = document), void 0 === i && (i = '*');
                for (var n = t.getElementsByTagName(i), o = 0; o < n.length; o++)
                    if (e(n[o]))
                        return n[o];
                return r;
            }, o.prototype.findElements = function (e, t, i) {
                for (var r = [], n = 0; e && n < e.length; n++) {
                    var o = e[n], a = this.findElement(function (e) {
                            return e.className.search(o) >= 0;
                        }, t, 'span');
                    a && (i && (a = a.cloneNode(!0)), r.push(a));
                }
                return r;
            }, o.prototype.getLinkTarget = function (e, t, i) {
                var r;
                return (r = t && t[e] || i[e]) || (r = '_blank'), r;
            }, o.prototype.addPiggyBackParams = function (e) {
                if (e)
                    return e + '&ppb=' + this.response.trc['ppb'] + '&cpb=' + this.response.trc['cpb'];
            }, o.prototype.detectItemFromSameHost = function (e, t) {
                if (e === t || this.trc['detect-item-from-same-host'](e, t))
                    return !0;
                for (var i = e.split('.').reverse().join(''), r = t.split('.').reverse().join(''), n = 6, o = !0, a = 0; a < n; a++)
                    if (i[a] !== r[a]) {
                        o = !1;
                        break;
                    }
                return o;
            }, o.prototype.createVideoLinkRel = function (e, t, r) {
                var n;
                return (this.trc.global['allow-nofollow-for-exchange'] || !e['is-in-network'] || e['is-in-network'] && !t) && (n = 'nofollow', this.trc.global['disable-noopener-for-links'] || '_blank' !== r || (n += ' noopener')), this.trc.global['disable-sponsored-for-links'] || e['is-in-network'] || e['is-dc'] || (n += ' ' + i), n;
            }, o.prototype.createVideoLink = function (e, t) {
                var i = document.createElement('a'), r = this.ntHandlerEnabled && e['is-in-network'], n, o, a = this.sendClickPiggyBack ? this.addPiggyBackParams(e.logger_url) : e.logger_url, s = !0 !== this.trc.global['disable-stop-propagation'], l = TRC.pageManager.getTopMostWindow().location.hostname, c = TRC.URL(e['url']).host, d, h;
                !0 === this.response.trc['video-list']['content-hub-forced-placement'] && (a = a.replace('click', 'content-hub-click'));
                var u = !1;
                return h = this.detectItemFromSameHost(l, c), e['is-in-network'] && TRC.hasFeedView && this.parentFeed && this.parentFeed.enableAEClicks && (h ? (e.scParams = e.scParams || {}, e.original_url = e.original_url || e.url, u = !0) : (this.feedViewExchangeFallbackEventData = {
                    eventType: 'fallback',
                    original_url: l,
                    target_url: c
                }, this.shouldSendFeedViewExchangeFallbackEvent = !0)), r && (e.hasNtClckHnadler = !0), TRC.isOptim('title-decode') ? i.title = t : i.title = TRC.util.getHtmlDecodeText(t), e.link_target = this.link_target, !e.isSyndicated || r || u ? (i.href = e.url, 'blank' != this.link_target ? TRC.util.isAmp(TRC) && this.trc.global['amp_target'] ? i.target = this.trc.global['amp_target'] : i.target = '_parent' : (i.target = '_blank', i.onmousedown = function (e) {
                    ((e = e || event).target || e.srcElement).target = '_blank';
                }), e['is-in-network'] && (e.scParams.prt = 'nt'), this.organicRedirParam && (a = a.replace('&url=', '&' + this.organicRedirParam + '=')), this.useRedirect && this.useRedirectOnLink && (i.href = a), i.onmousedown = function (e) {
                    var t = this.attachHeatMapDataToLink(a, e);
                    i.href = t;
                }.trcBind(this), i.onclick = this.videoLinkClickHandler.trcBind(this, e, i, a)) : (i.href = e.url, n = this.getLinkTarget(this.getProviderType(e), this.linkTargetConf, this.defaultLinkTarget), (d = this.createVideoLinkRel(e, h, n)) && (i.rel = d), i.logger_url = a.replace('&url=', '&redir=') + (e['is-in-network'] ? '&prt=nt' : '') + (e['is-native'] ? '&prt=nav' : ''), i.target = n, 1 == this.trc.global['enable-ie-split-click-event'] && TRC.Browser.ie && (o = i.logger_url.length > 2048), !0 === this.trc.global['touchstart-enabled'] && TRC.dom.on(i, 'touchstart', function (e) {
                    var t = this.attachHeatMapDataToLink(i.logger_url, e);
                    i.href = t, i.isTouchPropagation = 1, s && e.stopPropagation();
                }.trcBind(this)), i.onmousedown = function (e) {
                    if (((e = e || event).target || e.srcElement).target = n, i.isTouchPropagation)
                        return !0;
                    if (!o)
                        if (this.shiftRedirOnclick)
                            i.href = i.logger_url;
                        else {
                            var t = this.attachHeatMapDataToLink(i.logger_url, e);
                            i.href = t;
                        }
                }.trcBind(this), i.onclick = function (t) {
                    try {
                        if (TRC.clickFraudDetect.isInitialized && e['is-syndicated']) {
                            var r = i.search.match(/[^&??=]+/g), n = r.indexOf('ri'), a = '';
                            if (n > -1 && (a += r[n + 1]), (n = r.indexOf('ii')) > -1) {
                                var s = r[n + 1].match(/^~~V1~~(-?[\d]{10,})/);
                                a += s ? '_' + s[1] : '';
                            }
                            var l = i.href.indexOf('trc.taboola.com') >= 0;
                            TRC.clickFraudDetect.fraudScriptCallback(this.placement, TRC.pageManager.getUserId(), a, this.trc.referrer, e.itemIndex, l);
                        }
                    } catch (e) {
                        __trcError('Publisher \'onclick\' Fraud handler had an error', e);
                    }
                    if (this.shouldSendFeedViewExchangeFallbackEvent && this.trc.sendAbTestEvent('feedView_ae', this.feedViewExchangeFallbackEventData), this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(e)['c']), i.isTouchPropagation)
                        return !0;
                    if (o)
                        this.sendEvent('click', {
                            ii: e['item-id'],
                            it: e.type
                        }, null, !1);
                    else if (this.shiftRedirOnclick) {
                        var c = this.attachHeatMapDataToLink(i.logger_url, t);
                        i.href = c;
                    }
                    return !0;
                }.trcBind(this)), this.trc.global['events-api-click-enabled'] && TRC.dom.on(i, 'click', function (t) {
                    var r = i.target;
                    e.linkTarget = r, '_blank' === r ? setTimeout(function () {
                        TRC.EventsAPI.dispatchClick(e, this.response.trc);
                    }.trcBind(this), 0) : TRC.EventsAPI.dispatchClick(e, this.response.trc);
                }.trcBind(this)), i;
            }, o.prototype.attachHeatMapDataToLink = function (e, t) {
                if (!TRC.Heatmap.isEnabled(this.trc) || !this.listContainer.heatmap)
                    return e;
                try {
                    var i = this.listContainer.heatmap, r = TRC.Heatmap.collectClickHeatmapCardData(t), n;
                    return r['item-d'] = i.collectClickHeatmapItemData(t), e + '&' + 'd=' + JSON.stringify(r);
                } catch (t) {
                    return __trcError('Error in trcrbox-ui.attachHeatMapDataToLink - ' + t, t), e;
                }
            }, o.prototype.changeUrlProtocol = function (e, t) {
                var i = window.location.protocol, r = new TRC.URL(e.original_url), n = r && r.protocol;
                i !== n && (this.trc.global['enable-feed-view-redirect-url'] || (e.url = e.url.replace(n, i)), i = encodeURIComponent(i), n = encodeURIComponent(n), e.logger_url = this.options && this.options.feedViewConfig && this.options.feedViewConfig.disableHandlePublisherChangesToFeedView ? e.logger_url.replace(i, n) : e.logger_url.replace(n, i), t.href = e.logger_url.replace(n, i));
            }, o.prototype.openFeedView = function (e, t, i, r) {
                if (this.changeUrlProtocol(e, t), !TRC.feedViewModuleLoaded || r)
                    return '_self' !== t.target && (t.target = '_self'), !0;
                var n = this.recommendationList && this.recommendationList.length > 1 && this.videoBoxContainer ? this.videoBoxContainer : this.container;
                return new TRC.FeedView(this, e, n), !1;
            }, o.prototype.videoLinkClickHandler = (u = 2000, p = function (e, t, i, r) {
                return i.target = '_blank', r ? !!TRC.Browser['firefoxUpto'](8) || (e.clickLink(i.href, i.target), !1) : (i.href = t.url, e.sendEvent('click', {
                    ii: t['item-id'],
                    it: t.type
                }, null, !1), !0);
            }, function (t, i, r, n) {
                var o, a, s;
                if (n = n || event, TRC.feedViewModuleLoaded && TRC.FeedView && (s = (a = TRC.FeedView.getSelectors()) && window.frames && window.frames.name === a.IFRAME_ID, this.enableFeedView || s)) {
                    var l = new TRC.URL(t.url), c = l && l.host;
                    this.detectItemFromSameHost(window.location.host, c) ? t.link_target = 'feedView' : this.trc.sendAbTestEvent('feedView_different_domains', 'true');
                }
                var d = t.link_target, h = !1, m = this.useRedirect;
                switch ('embed' !== d && this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(t)['c']), d) {
                case 'feedView':
                    h = this.openFeedView(t, i, a, s);
                    break;
                case 'blank':
                    if ((n.target || n.srcElement).target = '_blank', m) {
                        var g = this.attachHeatMapDataToLink(r, n);
                        i.href = g;
                    }
                    h = p(this, t, i, m);
                    break;
                default:
                    if (m && 'local' != t.link_target && 'function' != typeof this.onclick && 'function' != typeof this.trc.onclick) {
                        if (this.shiftRedirOnclick) {
                            var g = this.attachHeatMapDataToLink(r, n);
                            i.href = g;
                        }
                        h = !0;
                    } else
                        this.sendEvent('click', t.hasNtClckHnadler ? t.scParams : {
                            ii: t['item-id'],
                            it: t.type
                        }, null, !1, this.publisherClickHandler.trcBind(this, t, this.clickLink.trcBind(this, t.url)), u);
                }
                return t.url != t.original_url && __trcDebug('url:' + t.original_url + ', changed to:' + t.url + ', on page:' + e.location.href), h || (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation()), h;
            }), o.prototype.clickLink = function (t, i) {
                TRC.Browser['firefoxUpto'](8) && (e.location.href = t);
                var r = document.createElement('a');
                if (r.href = t, r.target = i || '_parent', r.style.visibility = 'hidden', document.body.appendChild(r), r.click)
                    r.click();
                else {
                    var n = new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        button: 0
                    });
                    r.dispatchEvent(n);
                }
            }, o.prototype.publisherClickHandler = function (e, t) {
                var i = __trcCopyProps(e, {});
                delete i['item-id'], delete i.link;
                try {
                    if ('function' == typeof this.onclick && !this.onclick.call(this.pubOpts, i))
                        return !1;
                    if ('function' == typeof this.trc.onclick && !this.trc.onclick.call(this.pubOpts, i))
                        return !1;
                } catch (e) {
                    __trcError('Publisher \'onclick\' handler had an error', e);
                }
                return t();
            }, o.prototype.add_span = function (e, t, i) {
                var r = document.createElement('span');
                return null != e && (r.className = e), null != t && ('object' == typeof t ? r.appendChild(t) : TRC.dom.setContentToElement(r, t)), void 0 !== i && i.appendChild(r), r;
            }, o.prototype.genBidiLabel = function (e, t, i) {
                var r, n, o = TRC.util.textIsRTL(t), a = n = t, s = 'video-label ' + i;
                if (this.shouldUseSmartEllipsis()) {
                    var l = this.trc.getProperty(this.mode_name, 'tokenize-strategy') || 'word', c = TRC.Ellipsis._tokenizeStrategies[l], d;
                    a = TRC.Ellipsis._tokenizeSingle(n.innerHTML || n, c), s += ' trc-smart-ellipsis', 'ltr' === this.trc.direction && (o ? s += ' tbl-rtl-label' : 'title' !== i && (s += ' tbl-ltr-label'));
                }
                return r = this.add_span(s, a, e), e[i] = r, r.isRTL = o, r.tokenizeStrategy = l, r;
            }, o.prototype.handlePublishedDate = function (e, t) {
                var i = 'published-date', r, n = this.trc.getProperty(this.mode_name, 'format-x-days-ago', this.propertiesOverride) ? TRC.DateUtils.dateFormatTimeAgo(e[i], this.trc.language, this) : this.formatData(i, e[i]), o;
                if ('with-branding' === this.trc.getProperty(this.mode_name, 'published-date-position', this.propertiesOverride)) {
                    var a = t.querySelector('.branding'), s;
                    a && TRC.dom.addClass(a, 'inline-branding'), n = ' ' + (this.trc.getProperty(this.mode_name, 'branding-separator', this.propertiesOverride) || '|') + ' ' + n;
                }
                this.add_span('video-label video-published-date', n, t);
            }, o.prototype.buildLabelBox = function (e, t, i) {
                var r, n, o;
                for (-1 !== i.indexOf('title') && this.createTitleAndIconContainer(e), r = 0; r < i.length; r++)
                    switch (n = i[r]) {
                    case 'title':
                        this.genBidiLabel(e, t.title, 'video-title');
                        break;
                    case 'uploader':
                        void 0 !== t.uploader && this.add_span('video-label video-uploader', this.formatData('uploader', t.uploader), e);
                        break;
                    case 'category':
                        void 0 !== t.category && this.add_span('video-label video-category', this.formatData('category', decodeURIComponent(t.category.split(';')[0].split('//')[0])), e);
                        break;
                    case 'views':
                        this.add_span('video-label video-views', this.formatData('views', t['views']), e);
                        break;
                    case 'rating':
                        this.add_span('video-label video-rating', this.formatData('rating', t['rating']), e);
                        break;
                    case 'description':
                        var a;
                        this.genBidiLabel(e, t.description, 'video-description').title = '"Description: ' + this.removeHtmlTags(t.description) + '"';
                        break;
                    case 'duration':
                        void 0 !== t.duration && '' != t.duration && this.add_span('video-label video-duration-detail', this.formatData('duration', t.duration), e);
                        break;
                    case 'branding':
                        o = t.isSyndicated ? this.shouldHandleScBrandingWithSponsoredLink() ? this.createScBrandingWithSponsoredLink(t, e) : this.createScBranding(t, e) : this.createOrganicBranding(t, e), e['branding'] = o;
                        break;
                    case 'url':
                        break;
                    case 'published-date':
                        this.handlePublishedDate(t, e);
                        break;
                    default:
                        void 0 !== t[n] && t[n] && this.add_span('video-label video-' + n, this.formatData(n, t[n]), e);
                    }
            }, o.prototype.shouldHandleScBrandingWithSponsoredLink = function () {
                return 'after_branding' === this.getDisclosurePosition();
            }, o.prototype.getDisclosurePosition = function () {
                return this.disclosurePosition || (this.disclosurePosition = this.trc.getProperty(this.mode_name, 'disclosure-position', this.propertiesOverride)), this.disclosurePosition;
            }, o.prototype.getDisclosureAlignment = function () {
                return this.disclosureAlignment || (this.disclosureAlignment = this.trc.getProperty(this.mode_name, 'disclosure-alignment', this.propertiesOverride)), this.disclosureAlignment;
            }, o.prototype.createScBrandingWithSponsoredLink = function (e, t) {
                var i, r, n;
                if (i = this.trc.getProperty(this.mode_name, 'branding-separator', this.propertiesOverride), this.branding = this.add_span('branding composite-branding', null, t), this.add_span('branding-inner', this.formatData('syndicator', e['branding-text']), this.branding), r = this.trc.getProperty(this.mode_name, 'disclosure-link-text-sponsored', this.propertiesOverride))
                    return 'right' !== (n = this.getDisclosureAlignment()) && this.add_span('branding-separator', i, this.branding), this.renderDisclosureLinkWithBranding(this.branding, r, n), this.branding;
            }, o.prototype.createScBranding = function (e, t) {
                return e['branding-text'] ? this.add_span('branding', this.formatData('syndicator', e['branding-text']), t) : e['branding-url'] ? this.add_span('branding', '<img src=\'' + e['branding-url'] + '\'>', t) : void 0;
            }, o.prototype.createOrganicBranding = function (e, t) {
                return this.add_span('branding', this.formatData('syndicator', this.getPublisherBrandingName()), t);
            }, o.prototype.createTitleAndIconContainer = function (e) {
                var t, i, r, n = this.trc.getProperty(this.mode_name, 'title-icon', this.propertiesOverride) || 'NONE';
                'CUSTOM' === n ? r = this.trc.getProperty(this.mode_name, 'title-icon-url', this.propertiesOverride) : 'PUBLISHER_LOGO' === n && (r = this.trc.getPublisherVersionPropertyWithFallbackToNetwork('publisher-logo')), r && (t = document.createElement('span'), i = document.createElement('img'), t.className = 'video-icon-container', i.className = 'video-icon-img trc_img', i.src = TRC.URL.prototype.switchProtocol.call(r, h), e.className += ' label-box-with-title-icon', t.appendChild(i), e.appendChild(t));
            }, o.prototype.isUsingImageOptimizationService = function (e) {
                var t = this.trc.global['images-host'] ? this.trc.global['images-host'] : 'images.taboola.com';
                return e.indexOf(t) > -1;
            }, o.prototype.isTaboolaCDNImage = function (e) {
                return e.match(/cdn.taboola.com\/.*thumbnails\S/);
            }, o.prototype.logImageError = function (e, t, i, r) {
                var n, o;
                __trcWarn('Failed to load ' + (r ? r + ' ' : '') + 'thumbnail ' + e + ' for item=' + t + ', loading ' + i + ' thumbnail instead', null, this.trc.global['rbox-image-error-reporting-pct'] || 0.1);
            }, o.prototype.getFallbackImageForTaboolaCDNImage = function (e, t, i) {
                var r = this.isUsingImageOptimizationService(e), n = e.search(/\Shttp\S/), o = unescape(e.slice(n + 1)), a = TRC.URL.prototype.switchProtocol.call(r ? unescape(o) : o, i);
                return this.logImageError(e, t, a, 'taboola CDN'), a;
            }, o.prototype.getFallbackImageForNonTaboolaCDNImage = function (e, t, i) {
                var r = e.src, n = this.isUsingImageOptimizationService(r), o = r.search(/\Shttp\S/), a = n && unescape(e.src.slice(o + 1)), s = 'https:' !== i || a && 0 === a.indexOf(i) || this.trc.global['always-allow-orig-image-fallback'];
                return o > 5 && n && s ? this.getOrigImageFromOptimizationUrl(e.src, a, t) : this.getDefaultThumbnail(e, t, i);
            }, o.prototype.getOrigImageFromOptimizationUrl = function (e, t, i) {
                return this.logImageError(e, i, t), t;
            }, o.prototype.getDefaultThumbnail = function (e, t, i) {
                var r = this.trc.getProperty(this.mode_name, 'default-thumbnail', this.propertiesOverride), n = TRC.URL.prototype.switchProtocol.call('undefined' != r ? r : '', i);
                return e.onerror = null, this.logImageError(e.src, t, 'default'), n;
            }, o.prototype.getRuleAspectRatio = function (e, t) {
                return !(!e['virtualThumbWidth'] || !e['virtualThumbHeight'] || isNaN(e['virtualThumbWidth']) || isNaN(e['virtualThumbHeight'])) && ('ratio' == t ? e['virtualThumbHeight'] / e['virtualThumbWidth'] : e['virtualThumbHeight'] / e['virtualThumbWidth'] * 100);
            }, o.prototype.getThumbAspectRatio = function (e, t) {
                try {
                    var i = e['thumbnail-height'] / e['thumbnail-width'];
                    return 'ratio' == t ? i : Math.round(100 * i);
                } catch (e) {
                    return __trcWarn('getThumbAspectRatio', e.message), null;
                }
            }, o.prototype.getThumbnailURL = function (e, t, i) {
                if (void 0 === e['thumb-size'])
                    return e['thumbnail'];
                for (var r = [{
                                w: e['thumb-size'].split('x')[0],
                                h: e['thumb-size'].split('x')[1],
                                u: e['thumbnail']
                            }], n = 1; void 0 !== e['thumb-size-' + n]; n++)
                    r.push({
                        w: e['thumb-size-' + n].split('x')[0],
                        h: e['thumb-size-' + n].split('x')[1],
                        u: e['thumbnail-' + n]
                    });
                r = r.sort(function (e, t) {
                    return e.w * e.h - t.w * t.h;
                });
                for (var o = 0; o < r.length; o++)
                    if (t * i <= r[o].w * r[o].h)
                        return r[o].u;
                return r.pop().u;
            }, o.prototype.addTaboolaLogo = function () {
                this.renderAdchoicesLink(this.getAdchoiceConfig(), this.itemsTypes, this.adcItemTypes), this.renderAttributionLink(), this.renderDisclosureLink(), this.addClearingDiv(), this.addWidgetContentType(), TRC.ccpa.renderOnWidgetFooter(this);
            }, o.prototype.renderAttributionLink = function () {
                var e = this.add_span(null, this.trc.getProperty(this.mode_name, 'attribution-text', this.propertiesOverride)), t = this.trc.getProperty(this.mode_name, 'attribution-position', this.propertiesOverride), i = this.trc['attribution'] && 'none' != t, r = this.trc.getProperty(this.mode_name, 'hide-attribution-when-no-place', this.propertiesOverride), n = this.trc['attribution-disclosure-direction'];
                i && ('top' === t ? this.isContainerNarrowForAttribution() ? r || this.generateLinksBox(this.getWidgetFooter(), e, n, 'attribution', null, 'bottom') : this.generateLinksBox(this.header.ext, e, n, 'attribution', null, 'top') : this.generateLinksBox(this.getWidgetFooter(), e, n, 'attribution', null, 'bottom'));
            }, o.prototype.isContainerNarrowForAttribution = function () {
                if (TRC.isOptim('attribution') && this.isFeedCard)
                    return !1;
                var e = this.trc.getProperty(this.mode_name, 'min-width-for-attribution', this.propertiesOverride), t = this.container.clientWidth || this.container.offsetWidth;
                return t && e > t;
            }, o.prototype.adcHoverHandler = function (e, t) {
                var i = __trcGetElementsByClass('trc_adc_b_logo', null, e)[0];
                i.style.display = t ? 'inline-block' : 'none';
            }, o.prototype.isAdchoicesEnabled = function (e, t, i) {
                return !!e && ('off' != e.status && !!this.isAdchoiceItemTypes(t, i));
            }, o.prototype.isAdchoiceItemTypes = function (e, t) {
                for (var i in e)
                    if (t[i])
                        return !0;
                return !1;
            }, o.prototype.getAdchoiceConfig = function () {
                var e = this.trc.getProperty(this.mode_name, 'adchoice-position', this.propertiesOverride);
                return {
                    status: this.trc.global['has-adchoice'] && 'none' !== e ? 'on' : 'off',
                    position: e,
                    url: this.trc.getProperty(this.mode_name, 'adchoice-target-url', this.propertiesOverride) || this.trc.global['adchoice-url'],
                    enableBig: this.trc.getProperty(this.mode_name, 'adchoice-large', this.propertiesOverride)
                };
            }, o.prototype.getAdchoicesPosition = function (e, t) {
                var i = 'top';
                return 'auto' === e ? (i = 'none' === t ? i : t, this.isContainerNarrowForAttribution() && (i = 'bottom')) : i = e, i;
            }, o.prototype.renderAdchoicesLink = function (e, t, i) {
                if (this.hasAdChoicesLogo = this.isAdchoicesEnabled(e, t, i), this.hasAdChoicesLogo) {
                    var n = null, a = this.getAdchoicesPosition(e.position, this.trc.getProperty(this.mode_name, 'attribution-position', this.propertiesOverride)), s, l = e.url || null, c = this.trc['attribution-disclosure-direction'];
                    (n = this.add_span('trc_adc_wrapper', null)).appendChild(this.add_span('trc_adc_s_logo', null)), e.enableBig && n.appendChild(this.add_span('trc_adc_b_logo', null)), n.appendChild(r()), s = 'top' === a ? this.generateLinksBox(this.header.ext, n, c, 'adc', null, 'top', l) : this.generateLinksBox(this.getWidgetFooter(), n, c, 'adc', null, a, l), e.enableBig && (s.onmouseover = function () {
                        o.prototype.adcHoverHandler(this, !0);
                    }, s.onmouseout = function () {
                        o.prototype.adcHoverHandler(this, !1);
                    });
                }
            }, o.prototype.generateLinksBox = function (e, t, i, n, o, a, s, l) {
                var c, d = document.createElement('div'), h = [
                        'trc_desktop_' + n + '_link',
                        'trc_mobile_' + n + '_link'
                    ], u, p = this.getPopupUrl(), m = TRC.PROTOCOL + '//' + TRC.shiftDomain(p) + '/?' + this.getAttributionLinkParams(), g = s || m, f = 'sponsored', b = function (e) {
                        return TRC.aboutUs.open(e) || !1;
                    };
                if (e) {
                    for (c = 0; c < h.length; c++) {
                        if ((u = document.createElement('a')).className = h[c] + ' trc_attribution_position_' + (a || 'bottom'), u.rel = 'nofollow', this.trc.global['disable-sponsored-for-links'] || (u.rel += ' ' + f), this.trc.global['disable-noopener-for-links'] || (u.rel += ' noopener'), u.appendChild(t.cloneNode(!0)), u.href = g, u.target = '_blank', this.hasAdChoicesLogo) {
                            var C = this.add_span('trc_logos_v_align', null);
                            C.appendChild(r()), u.appendChild(C);
                        }
                        c || (u.onclick = b), d.appendChild(u);
                    }
                    return 'rtl' === i && (d.style.cssFloat = d.style.styleFloat = 'left'), d.className = 'logoDiv link-' + n + ' ' + (o ? ' attribution-disclosure-link-' + o : '') + (l ? ' align-' + n + '-' + l : ''), e.appendChild(d), d;
                }
            }, o.prototype.getAttributionLinkParams = function () {
                var e = [
                    'template=colorbox',
                    'utm_source=' + this.publisher,
                    'utm_medium=referral',
                    'utm_content=' + this.mode_name + ':' + this.placement + ':' + (this.trc['test-variant'] || '')
                ];
                return !this.trc.global['show-rtb-ad-choices-icon'] && this.privacyId && e.push('plink=' + this.privacyId), e.join('&');
            }, o.prototype.addWidgetContentType = function () {
                var e = this.getWidgetContentType(this.itemsTypes);
                this.element.className += ' ' + ('sponsored' === e && TRC.blocker.blockedState > 0 && this.trc.global['switch-abp-class'] ? this.trc.global['switch-abp-class']['trc-content-sponsored'] : 'trc-content-' + e) + ' ';
            }, o.prototype.getWidgetContentType = function (e) {
                var t = e['is-syndicated'] || e['is-in-network'] || e['is-native'];
                return t && e['is-organic'] ? 'hybrid' : t ? 'sponsored' : 'organic';
            }, o.prototype.getItemsTypesList = function (e) {
                for (var t = {}, i = 0, r; r = e[i]; i++)
                    r['is-syndicated'] ? t['is-syndicated'] = !0 : r['is-in-network'] ? t['is-in-network'] = !0 : r['is-native'] ? t['is-native'] = !0 : t['is-organic'] = !0, r['is-adc'] && (t['is-adc'] = !0);
                return t;
            }, o.prototype.getPrivacyId = function (e) {
                for (var t = 0, i; i = e[t]; t++)
                    if (i['plink'])
                        return i['plink'];
                return null;
            }, o.prototype.getWidgetFooter = function () {
                var e = this.getWidgetToFeedHelper();
                return this.footer || (this.footer = document.createElement('div'), this.footer.className = 'trc-widget-footer', e && !e.getFooter() ? e.addFooterToFeed(this.footer) : this.element.appendChild(this.footer)), this.footer;
            }, o.prototype.renderDisclosureLink = function () {
                var e = this.trc.getProperty(this.mode_name, 'min-width-for-disclosure', this.propertiesOverride), t = this.trc.getProperty(this.mode_name, 'hide-disclosure-when-no-place', this.propertiesOverride), i = this.add_span(null, this.trc.getProperty(this.mode_name, 'disclosure-link-text-sponsored', this.propertiesOverride)), r = this.add_span(null, this.trc.getProperty(this.mode_name, 'disclosure-link-text-hybrid', this.propertiesOverride)), n, o = this.trc['attribution-disclosure-direction'];
                'none' !== this.getDisclosurePosition() && 'after_branding' !== this.getDisclosurePosition() && (n = this.isFeedCard && TRC.isOptim('disclosure') ? 0 : this.container.clientWidth || this.container.offsetWidth, 'bottom' !== this.getDisclosurePosition() && this.isHeaderExtContainerAvailable() && (!n || n >= e) ? (this.generateLinksBox(this.header.ext, i, o, 'disclosure', 'sponsored', 'top'), this.generateLinksBox(this.header.ext, r, o, 'disclosure', 'hybrid', 'top')) : t || (this.generateLinksBox(this.getWidgetFooter(), i, o, 'disclosure', 'sponsored', 'bottom'), this.generateLinksBox(this.getWidgetFooter(), r, o, 'disclosure', 'hybrid', 'bottom')));
            }, o.prototype.renderDisclosureLinkWithBranding = function (e, t) {
                var i = this.add_span(null, t), r = 'right' === this.getDisclosureAlignment() ? this.trc.direction : null;
                this.generateLinksBox(e, i, r, 'disclosure', 'sponsored', this.getDisclosurePosition(), null, this.getDisclosureAlignment());
            }, o.prototype.isHeaderExtContainerAvailable = function () {
                return this.header.ext && 'No Header' != this.trc.getProperty(this.mode_name, 'header', this.propertiesOverride);
            }, o.prototype.addClearingDiv = function () {
                var e = document.createElement('div');
                e.className = 'trc_clearer', this.element.appendChild(e);
            }, o.prototype.genDuration = function (e) {
                var t = this.formatDuration(e), i = document.createElement('dt');
                i.style.position = 'absolute', i.style.overflow = 'hidden', i.style.height = 'auto', i.style.width = 'auto', i.style.zIndex = 48, i.style.right = 0;
                var r = document.createElement('div');
                return r.style.zIndex = 50, r.style.paddingLeft = '4px', r.style.paddingRight = '4px', r.innerText = t, i.appendChild(r), i;
            }, o.prototype.fixBoxOverflow = function (e, t, i, r, n, o) {
                return TRC.util.isPercentEnabled(TRCImpl.global, 'enable-new-ellipsis-module') ? TRC.LineClamp.fixBoxOverflow(e, t, i, r, n, o, this.useNativeLineClamp, this.shouldUseSmartEllipsis()) : this.legacyFixBoxOverflow(e, t, i, r, n, o);
            }, o.prototype.legacyFixBoxOverflow = function (e, t, i, r, n, o) {
                var a = !1;
                if (!(null == e || this.useNativeLineClamp && (a = this.setupBoxLineClamp(e)))) {
                    if (this.shouldUseSmartEllipsis() && !a)
                        return __trcDebug('Skipping fixBoxOverflow due to feature flag.');
                    if (TRC.ellipsisPerf && console.timeStamp('Taboola old ellipsis'), !(e.clientHeight <= 0 || e.clientWidth <= 0)) {
                        var s = !1;
                        e.parentNode.font = this.getFontSize(e);
                        var l = e.innerHTML;
                        e.innerText = '';
                        var c = this.add_span(null, 'H', e), d = Math.max(c.offsetHeight, c.clientHeight), h = Math.max(0, e.scrollHeight - e.clientHeight);
                        for (e.removeChild(c), TRC.dom.setContentToElement(e, l), this.addInlineElementsForMeasure(e.inlineDetailsElements, e, !0), e.inlineDetailsElementsHTML = e.innerHTML.replace(l, ''), t = t.replace(/^\s+|\s+$/g, ''); e.clientHeight + h + d / 2 < e.scrollHeight && t.length;)
                            s = !0, t = this.truncateOverflowingText(e, t, i), e.inlineDetailsElementsHTML && (e.innerHTML += e.inlineDetailsElementsHTML);
                        this.hideClonedElementsAfterMeasure(n, o), TRC.Browser.ie && !s && (e.style.height = 'auto');
                    }
                }
            }, o.prototype.setupBoxLineClamp = function (e) {
                TRC.dom.removeClass(e, 'trc_ellipsis');
                var t = parseInt(document.trcGetCurrentStyle(e, 'line-height'), 10), i = parseInt(document.trcGetCurrentStyle(e, 'height'), 10), r = t && i ? Math.round(i / t).toString() : null;
                return !(!r || e.isRTL || 'rtl' == document.trcGetCurrentStyle(e, 'direction')) && (TRC.dom.addClass(e, 'trc_ellipsis'), TRC.css.utils.setStyleProperty(e, '-webkit-line-clamp', r, !1), e.parentNode.font = this.getFontSize(e), !0);
            }, o.prototype.truncateOverflowingText = function (e, t, i) {
                t = i && t.search(/\s/) >= 0 ? t.replace(/\s+\S+$/, '') : t.substr(0, t.length - 1);
                var r = e.getElementsByTagName('bde');
                if (e.inlineDetailsElementsHTML && r.length) {
                    var o = e.innerHTML.replace(e.inlineDetailsElementsHTML, '');
                    TRC.dom.setContentToElement(e, o);
                }
                e.getElementsByTagName('span').length > 0 && e.removeChild(e.getElementsByTagName('span')[0]);
                var a = r.length > 0 ? r[0] : e;
                return TRC.dom.setContentToElement(a, t), this.add_span(null, n(), e), t;
            }, o.prototype.addInlineElementsForMeasure = function (e, t, i) {
                for (var r, n, o, a = 0; e && a < e.length; a++)
                    r = e[a], !(n = this.findElement(function (e) {
                        return e.className.search(r) >= 0 && e.parentNode === t;
                    }, t)) && r && ((o = document.createElement('span')).className = 'trc_inline_detail_spacer', o.innerHTML = ' ', t.appendChild(o), t.appendChild(i ? r.cloneNode(!0) : r));
            }, o.prototype.hideClonedElementsAfterMeasure = function (e, t) {
                for (var i, r, n = 0; e && n < e.length; n++)
                    i = e[n], (r = this.findElement(function (e) {
                        return e.className.search(i) >= 0 && e.parentNode === t;
                    }, t, 'span')) && (r.style.display = 'none');
            }, o.prototype.removeHtmlTags = function (e) {
                return e.replace(new RegExp('<[^>]+>', 'g'), '');
            }, o.prototype.formatData = function (e, t) {
                var i = this.trc.getProperty(this.mode_name, 'format-' + e, this.propertiesOverride);
                return 'function' == typeof (i = i || '%s') ? i.call(this, t) : ((e.search('duration') >= 0 || e.search('Duration') >= 0) && (t = this.formatDuration(t)), void 0 === t && (t = ''), i.replace(new RegExp('%\\w'), '<dt style="display:inline">' + t + '</dt>'));
            }, o.prototype.formatDuration = function (e) {
                var t = parseInt(e / 3600);
                t >= 1 ? e %= 3600 : t = 0;
                var i = parseInt(e / 60), r = parseInt(e % 60);
                return 'number' != typeof t || 'number' != typeof i || 'number' != typeof r || isNaN(t) || isNaN(i) || isNaN(r) || e < 1 ? '' : (t >= 1 ? t + ':' : '') + (i < 10 ? '0' : '') + i + ':' + (r < 10 ? '0' : '') + r;
            }, o.prototype.formatNumber = function (e) {
                return void 0 === e ? '' : this.trc.runHook(this, this.mode_name, 'format-number', this.propertiesOverride, !1, e);
            }, o.prototype.dateFormatISO = TRC.DateUtils.dateFormatISO, o.prototype.dateFormatAmerican = TRC.DateUtils.dateFormatAmerican, o.prototype.dateFormatEuropean = TRC.DateUtils.dateFormatEuropean, o.prototype.getFontSize = function (e) {
                for (var t = 0, i = !1, r = document.trcGetCurrentStyle(e, 'font-size'), n = [
                            'px',
                            'pt',
                            'em',
                            'ch'
                        ]; !i && t < n.length;) {
                    if (r.indexOf(n[t])) {
                        switch (r = parseInt(r), n[t]) {
                        case 'px':
                            break;
                        case 'pt':
                            r /= 0.75;
                            break;
                        case 'em':
                        case 'ch':
                            r *= 10;
                        }
                        i = !0;
                    }
                    t++;
                }
                return r;
            }, o.prototype.sendExploreEvent = function () {
                this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null), this.sendEvent('explore', {}, null, !0);
            }, o.prototype.onMouseOverExploreTrackerHandler = function (t, i) {
                var r = (i = i || e.event).target || i.srcElement;
                r != this.container && null != this.exploreTimeoutId || r == this.container && null != this.exploreTimeoutId || (this.exploreTimeoutId = TRC.Timeout.set(this.sendExploreEvent.trcBind(this), t));
            }, o.prototype.setExploreTracker = function () {
                var e = 0;
                this.exploreTimeoutId = null, void 0 !== this.trc.global && (e = this.trc.global['explore-delay'] ? this.trc.global['explore-delay'] : e), this.container.onmouseover = this.onMouseOverExploreTrackerHandler.trcBind(this, e), 0 != e && (this.container.onmouseout = this.onMouseOutExploreTrackerHandler.trcBind(this));
            }, o.prototype.onMouseOutExploreTrackerHandler = function (t) {
                t = t || e.event;
                var i = this.container.getBoundingClientRect();
                t.clientX >= i.left && t.clientX < i.right && t.clientY >= i.top && t.clientY < i.bottom || this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null);
            }, o.prototype.resetBoxes = function () {
                this.boxes = [];
            }, o.prototype.setResponsiveRules = function (e, t) {
                if (!TRC.css.responsive.injectedStyles[e] || this.disableResponsiveCSSReuse) {
                    var i = this.trc.getProperty(this.mode_name, 'responsive-rules', this.propertiesOverride);
                    i ? this.setOnStandardResponsiveRules(e, t, i) : this.setOnAutoSizeResponsiveRules(e, t, this.trc.getProperty(this.mode_name, 'auto-size-rules', this.propertiesOverride)), TRC.css.responsive.injectedStyles[e] = !0;
                }
            }, o.prototype.setOnStandardResponsiveRules = function (e, t, i) {
                var r = this.trc.getProperty(this.mode_name, 'rows', this.propertiesOverride), n = 1, o, a = this.trc.getProperty(this.mode_name, 'carousel-min-items', this.propertiesOverride) || 1.33;
                try {
                    o = this.responsiveRules = [];
                    for (var s = 0, l = i.length; s < l; s++)
                        o[s] = {
                            rows: i[s].rows || r || n,
                            cells: i[s].cells,
                            min: i[s].minWidth,
                            max: i[s].maxWidth,
                            margin: i[s].margin.h,
                            ratio: this.getRuleAspectRatio(i[s]) || this.getThumbAspectRatio(this.trc.modes[this.mode_name]) || 100 * this.DEFAULT_THUMB_RATIO
                        };
                    TRC.css.utils.setStyleElements(TRC.css.responsive.rulesToCssText(e, this.responsiveRules, t, this.trc.cssReset, this.isWCTextLinks, this.trc.direction, this.isCarousel, a));
                } catch (e) {
                    __trcError('Error in setOnStandardResponsiveRules : ', e.message);
                }
            }, o.prototype.setOnAutoSizeResponsiveRules = function (e, t, i) {
                var r = TRC.dom.getWindowWidth(), n = this.container.clientWidth > 0 ? this.container.clientWidth : this.container.offsetWidth, o = r / n, a = this.trc.getProperty(this.mode_name, 'rows', this.propertiesOverride), s = 1, l, c = this.trc.getProperty(this.mode_name, 'carousel-min-items', this.propertiesOverride);
                try {
                    l = this.responsiveRules = [];
                    for (var d = 0, h = i.length; d < h; d++)
                        l[d] = {
                            rows: i[d].rows || a || s,
                            cells: i[d].n,
                            min: o * i[d]['minWc'],
                            margin: Math.round((i[d]['maxWsRange'] + i[d]['minWsRange']) / 2) / n * 100,
                            ratio: this.getThumbAspectRatio(this.trc.modes[this.mode_name]) || i[d].ratio || 100 * this.DEFAULT_THUMB_RATIO
                        };
                    TRC.css.utils.setStyleElements(TRC.css.responsive.rulesToCssText(e, this.responsiveRules, t, this.trc.cssReset, !1, this.trc.direction), this.isCarousel, c);
                } catch (e) {
                    __trcError('Error in setOnAutoSizeResponsiveRules : ', e.message);
                }
            }, o.prototype.setMetaAttribute = function (e) {
                e.meta = {}, __trcCopyProps(this.trc, e.meta), delete e.meta['video-list'];
            }, o.prototype.drawResponsiveList = function (t) {
                TRC.tlf && console.timeStamp('start mode - ' + this.mode_name), TRC.tlf && console.group('mode - ' + this.mode_name), TRC.tlf && console.time('mode rendering');
                var i = this.listContainer, r = document.createElement('div'), n = this.recommendationList.length, o = 0, a = 1000, s = TRC.dom.closest(this.getContainer(), '.trc_related_container'), l = 'trc_elastic';
                TRC.pConsole(this.mode_name, 'debug', 'start drawing responsive mode - see info', this.trc.getProperty(this.mode_name, 'responsive-rules', this.propertiesOverride), 'object'), this.internalContainer = r, this.orientation = this.trc.getProperty(this.mode_name, 'orientation', this.propertiesOverride);
                var c = this.disableResponsiveCSSReuse ? this.id : this.mode_name;
                if (TRC.dom.addClass(s, l + ' ' + l + '_' + c), this.resetBoxes(), r.id = 'internal_' + this.id, TRC.dom.clearInnerElements(i), i.appendChild(r), this.setExploreTracker(), this.setMetaAttribute(r), this.firstVideo = null, this.setResponsiveRules(l + '_' + c, n), this.pasreRecommendationList(n, this.hasDuration(), r), this.trc.global['smart-ellipsis'] || (this.isClassFilter ? TRC.listen('IE_ClassShift', this.fixResponsiveVideoBoxes.trcBind(this)) : (TRC.dom.on(e, 'resize', this.fixResponsiveVideoBoxes.trcBind(this).trcThrottle(500)), TRC.listen('videoCubeChange', this.fixResponsiveVideoBoxes.trcBind(this)))), !this.boxes.length || this.boxes.length <= 0) {
                    var d = this.response.feedPlacement || this.placement;
                    TRC.dispatch('onRboxFlowError', { placement: d });
                }
                TRC.dom.addClass(this.boxes[0], 'trc-first-recommendation trc-spotlight-first-recommendation'), this.postRenderQueue.pushBack('list-suffix,publisher-end', function (e) {
                    this.trc.runHook(this, this.mode_name, 'list-suffix', this.propertiesOverride, !0, e, this), this.trc['publisher-end'](this.id), TRC.CustomModulesManager.runHook('publisher-end', null, this, this.id);
                }.trcBind(this, r)), this.postRenderQueue.pushBack('checkForBlocking', this.checkForBlocking.trcBind(this)), this.postRender(), this.visibleTimeoutId = null, void 0 !== this.trc.global && (o = this.trc.global['visible-delay'] ? this.trc.global['visible-delay'] : o, a = this.trc.global['visible-cycle'] ? this.trc.global['visible-cycle'] : a), TRC.fallbackApi.finalize(this), TRC.Heatmap.isEnabled(this.trc) && this.attachHeatMapToContainer(s), this.visibilityReporter = new TRC.WidgetVisibilityReporter(this), TRC.eventDelegator.dispatch('onrender', {
                    name: this.mode_name,
                    container: this.container,
                    placement: this.orig_placement
                }), TRC.EventsAPI.dispatchRender(t, this), TRC.tlf && console.timeEnd('mode rendering'), TRC.tlf && console.groupEnd();
            }, o.prototype.attachHeatMapToContainer = function (e) {
                this.isFeedCard ? this.listContainer.heatmap = this.getCurrentFeed(e).heatmap : (this.listContainer.heatmap = new TRC.Heatmap(this.trc), TRC.dom.on(this.listContainer, 'click', function (e) {
                    this.listContainer.heatmap.captureAndSendClickData(e);
                }.bind(this)));
            }, o.prototype.getCurrentFeed = function (e) {
                var t = this.trc.feedsManager.feeds, i = e.getAttribute('data-placement-name');
                for (var r in t)
                    if (t.hasOwnProperty(r) && i.indexOf(r) > -1)
                        return t[r];
            }, o.prototype.createVideoBoxDirectURL = function (e) {
                var t = e.video_data, i = t.url;
                try {
                    if (!t.isSyndicated) {
                        t.original_url = i;
                        var r = this.formatTrackingParam() || this.tracking;
                        (i = this.trc.runHook(this, this.mode_name, 'change-url', this.propertiesOverride, !1, i, e, r)) === t.original_url && r && (i = TRC.URL.prototype.addParamsToUrl(i, r));
                    }
                    t.url = i, e.directURL = i;
                } catch (e) {
                    __trcError('Error in createVideoBoxDirectURL', e);
                }
            }, o.prototype.formatTrackingParam = function () {
                var e = this.getModeClientProperty('organic-tracking-params');
                if (e)
                    return Object.keys(e).reduce(function (t, i, r) {
                        return t + (0 !== r ? '&' : '') + i + '=' + e[i];
                    }, '');
            }, o.prototype.createVideoBoxClickUrlParams = function (e, t) {
                var i = this.response && this.response.trc ? this.response.trc['session-data'] : null, r = {
                        pi: this.trc.getItemId(),
                        ri: this.response.trc['req'],
                        sd: this.trc.getSessionData(i),
                        ui: TRC.pageManager.getUserId(),
                        it: e.type,
                        ii: e['item-id'],
                        pt: this.getItemType(),
                        li: this.listContainer.id,
                        sig: e.sig,
                        url: t,
                        vi: this.cachedViewId || TRC.pageManager.getPageData(),
                        p: e.isSyndicated ? e.publisher : '',
                        r: Math.floor(100 * Math.random())
                    }, n = this.trc.formattedTRCRequest && this.trc.formattedTRCRequest.tmpl, o = this.response.trc['placement-group'];
                return n && (r.tmpl = n), o && (r.pg = o), r;
            }, o.prototype.createVideoBoxClickUrlWithParams = function (e) {
                var t = [], i;
                for (var r in e)
                    e.hasOwnProperty(r) && e[r] && (this.trc['normalize-log-param'](r, e[r]), t.push(encodeURIComponent(r) + '=' + encodeURIComponent(e[r])));
                return i = h + '//' + this.domain + '/' + encodeURIComponent(this.trc['normalize-log-param']('publisher', TRC.publisherId)) + '/log/3/click?' + t.join('&'), this.trc.enableExperimentsVariantIdEvent && this.trc.experimentsVariantIdParamsStr && (i += '&' + this.trc.experimentsVariantIdParamsStr), this.trc.getLoaderTypesValue() && (i += '&' + this.trc.getLoaderTypesValue()), i;
            }, o.prototype.createVideoBoxClickUrl = function (e, t) {
                var i = this.createVideoBoxClickUrlParams(e, t);
                return this.createVideoBoxClickUrlWithParams(i);
            }, o.prototype.fixResponsiveBoxTitleAndDesc = function (e) {
                var t = e.labelsBox, i = e.video_data, r = e.link, n = this.getDetailSpansFromLabelsBoxes('title', e), o = this.getDetailSpansFromLabelsBoxes('description', e), a = function () {
                        i.thumbUnder && t.font && (r.style.fontSize = t.font + 'px');
                    };
                try {
                    if (!this.trc.global['smart-ellipsis'])
                        for (var s = 0; s < n.length; s++)
                            TRC.dom.setContentToElement(n[s], e.getAttribute('data-item-title'));
                    setTimeout(function () {
                        for (var t = 0; t < n.length; t++)
                            this.fixBoxOverflow(n[t], e.getAttribute('data-item-title'), !1, 'false' != i['truncate-title']);
                        a();
                    }.trcBind(this), 0), o.length && setTimeout(function () {
                        for (var e = 0; e < o.length; e++)
                            this.fixBoxOverflow(o[e], i['description'], !0, !0);
                    }.trcBind(this), 0);
                } catch (e) {
                    __trcError('Problem in fixResponsiveBoxTitleAndDesc', e);
                }
            }, o.prototype.getDetailSpansFromLabelsBoxes = function (e, t) {
                var i = t.querySelectorAll('.video-label-box [class*="' + e + '"]');
                return [].slice.call(i);
            }, o.prototype.createVideoBoxLabels = function (e) {
                var t = document.createElement('span');
                return this.setVideoBoxLabelsClass(t), e.appendChild(t), t;
            }, o.prototype.setVideoBoxLabelsClass = function (e) {
                e.className = 'video-label-box';
            }, o.prototype.createThumbBlockHolder = function (e, i, r) {
                var n = t.createElement('div');
                n.className = 'thumbBlock_holder', i.appendChild(n), this.createVideoBoxThumbBlock(e, n, r), this.createVideoBoxAspect(n, e);
            }, o.prototype.createVideoBoxAspect = function (e, t) {
                var i = document.createElement('div');
                i.className = 'videoCube_aspect', e.appendChild(i), t.thumbnail_aspect = i;
            }, o.prototype.drawVideoBoxThumbnailLink = function (e, t, i, r) {
                var n;
                return e.img_src = this.getThumbnailURL(i, this.trc.getProperty(this.mode_name, 'thumbnail-width', this.propertiesOverride), this.trc.getProperty(this.mode_name, 'thumbnail-height', this.propertiesOverride)), n = this.createVideoLink(i, r), TRC.dom.addClass(n, 'item-thumbnail-href'), this.createThumbBlockHolder(e, n, t), n;
            }, o.prototype.createVideoBoxThumbBlock = function (e, t, i) {
                var r = document.createElement('span'), n = '', o = e.video_data;
                i || 'video' != o.type || void 0 === o.duration || '' == o.duration || '0' == o.duration || (n = this.genDuration(o.duration)), r.className = 'thumbBlock', o.imageIframe && (this.drawImageIframe(r, o.imageIframe, (e.link || e.preLink).logger_url), e.hasFloatingButton = !0), e.thumbBlock = r, t.appendChild(r);
            }, o.prototype.setVideoBoxImageHandlers = function (e, t, i) {
                e.onerror = this.responsiveImageOnErrorHandler.trcBind(this, e, t, i, h), e.onload = this.responsiveImageOnLoadHandler.trcBind(this, e, t, i);
            }, o.prototype.responsiveImageOnErrorHandler = function (e, t, i, r) {
                var n = e.src, o = n.search(/\Shttp\S/), a = i['item-id'];
                if (o > 5 && this.isTaboolaCDNImage(n) && !TRC.Browser.ie)
                    return n = this.getFallbackImageForTaboolaCDNImage(n, a, r), void (t.img_src = e.src = n);
                n = this.getFallbackImageForNonTaboolaCDNImage(e, a, r), t.thumbBlock.style.backgroundImage = 'URL(\'' + n + '\')';
            }, o.prototype.responsiveImageOnLoadHandler = function (e, t, i) {
                e && e.complete ? this.appendVideoBoxImage(t) : TRC.Timeout.set(arguments.callee.trcBind(this, t.thumbBlock, e), 50);
            }, o.prototype.fixResponsiveVideoImage = function (e, t, i) {
                var r;
                if (this.imageOptimizePrefixFlag)
                    return t.style.visibility = 'visible', t.style.width = '100%', void (t.style.height = '100%');
                var n = null, o = e.thumbBlock, a = n ? n.right - n.left : o.clientWidth, s = n ? n.bottom - n.top : o.clientHeight, l, c, d, h, u, p = this.isCssImportant, m = TRC.css.utils;
                if (0 != s && 0 != a && 0 != t.height)
                    try {
                        (l = a / s) > (c = this.getImageAspectRatio(t)) ? (d = Math.floor(a / c), h = Math.floor((s - d) / 2), m.setStyleProperty(t, 'width', a + 'px', p), 0 != h && (t.style.position = 'relative', m.setStyleProperty(t, 'top', h + 'px', p))) : (r = Math.floor(s * c), u = Math.floor((a - r) / 2), m.setStyleProperty(t, 'height', s + 'px', p), 0 != u && (t.style.position = 'relative', 'ltr' == this.trc.direction ? m.setStyleProperty(t, 'left', u + 'px', p) : m.setStyleProperty(t, 'left', -1 * u + 'px', p))), t.style.visibility = 'visible';
                    } catch (e) {
                        alert(e.message), __trcError('Error in fixResponsiveVideoImage : ', e.message);
                    }
                else
                    i || TRC.Timeout.set(this.fixResponsiveVideoImage.trcBind(this, e, t, !0), 500);
            }, o.prototype.getImageAspectRatio = function (e) {
                return e.trcRatio || (e.trcRatio = e.width / e.height), e.trcRatio;
            }, o.prototype.createVideoBoxImageLoader = function (e) {
                var t = new Image(), i = e.video_data, r = e.thumbBlock;
                this.trc.global['thumb-lazy-load-switch'] && this.updateThumbnailStack(t), t.style.visibility = 'hidden', e.img = t, this.setVideoBoxImageHandlers(t, e, i), this.trc.global['use-delay-image-load'] ? TRC.Timeout.set(this.setImageLoad.trcBind(this, t, e, e.img_src, 100, r, this.trc.global['thumb-lazy-load-switch']), 10) : this.setImageLoad(t, e, e.img_src, 100, r, this.trc.global['thumb-lazy-load-switch']), this.add_span('thumbnail-overlay', null, r), i.isSyndicated && this.addVideoBoxBranding(r, i), new TRC.ThumbnailOverlayComponents(r, i.isSyndicated, this);
            }, o.prototype.updateThumbnailStack = function (e) {
                this.thumbnailImageStack = this.thumbnailImageStack || [], this.thumbnailImageStack.push(e);
            }, o.prototype.addVideoBoxBranding = function (e, t) {
                var i = document.createElement('span');
                i.className = 'branding', t['branding-text'] ? i.appendChild(document.createTextNode(this.formatData('syndicator', t['branding-text']))) : t['branding-url'] && this.createBrandingImage(i, t['branding-url']), e.appendChild(i);
            }, o.prototype.createBrandingImage = function (e, i) {
                var r = t.createElement('img');
                r.src = i, e.appendChild(r);
            }, o.prototype.createVideoBoxThumbLink = function (e, t) {
                try {
                    var i = e.video_data, r = e.thumbnail_position, n = this.drawVideoBoxThumbnailLink(e, t, i, e.getAttribute('data-item-title'));
                    if ('under' === r) {
                        if (n.title = e.link.title = '', e.insertBefore(n, e.link), TRC.StoryWidget.shouldInitStoryWidget(this))
                            TRC.StoryWidget.setTextOverForStoryWidget(this, e);
                        else {
                            var o = document.createElement('span');
                            TRC.dom.addClass(e.link, 'tbl-text-over-container'), TRC.dom.addClass(o, 'tbl-text-over'), e.link.appendChild(o);
                        }
                        this.findElement(function (e) {
                            return e.className.search('title') >= 0;
                        }, e.labelsBox, 'span', null), i.thumbUnder = !0;
                    } else
                        'bottom' === r ? e.appendChild(n) : e.insertBefore(n, e.link);
                } catch (e) {
                    __trcError('Error in createVideoBoxThumbLink', e);
                }
            }, o.prototype.setVideoBoxDataAttr = function (e, t) {
                e.setAttribute('data-item-id', t['item-id']), e.setAttribute('data-item-title', t.title), e.setAttribute('data-item-thumb', this.getThumbnailURL(t, 100, 80)), e.setAttribute('data-item-syndicated', !!t.isSyndicated);
            }, o.prototype.getThumbnailPosition = function (e, t) {
                return t || this.trc.getProperty(this.mode_name, 'thumbnail-position', this.propertiesOverride);
            }, o.prototype.drawResponsiveVideoBox = function (e, t, i, r, n, o) {
                var a = this.videoBoxContainer = document.createElement('div');
                try {
                    if (t = __trcCopyProps(t, {}, {
                            isSyndicated: t['is-syndicated'] || t['is-in-network'] || t['is-native'],
                            isPhoto: 'photo' === t.type,
                            isText: 'text' === t.type,
                            imageIframe: t.hasOwnProperty('image-iframe') && t['image-iframe'],
                            tags: 'string' == typeof t.tags ? TRC.text.parseCSV(t.tags) : []
                        }), this.setApiItemsData(t), this.createResponsiveVideoBox(a, t, n, o), 'none' !== a.thumbnail_position && this.createVideoBoxThumbLink(a, i), this.createResponsiveLabelsBoxes(a), this.createCallToActionButton(this, a), !TRC.botDetected && t[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE] && t[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0) {
                        var s = this.outermostContainer.id ? this.outermostContainer.id : this.placement.split(' ').join('-');
                        s += '-' + t['itemIndex'], TRC.TrackingScriptLoader.renderScriptTagIntoVideoBox(a, t, s);
                    }
                    return this.trc.runHook(this, this.mode_name, 'item-renderer', this.propertiesOverride, !0, a, a.video_data), e.appendChild(a), this.fixResponsiveBoxTitleAndDesc(a), this.boxes.push(a), this.shouldHandleScBrandingWithSponsoredLink() && TRC.Browser.ieUpto(10) && this.handleBrandingWithDisclosureContainerWidth(), t.imageIframe || this.createVideoBoxImageLoader(a), TRC.BlockClicksManager.isBlockClicksEnabled(this.trc.global, t) && new TRC.BlockClicksManager(this, a, t), a;
                } catch (e) {
                    __trcError('Error in drawResponsiveVideoBox', e);
                }
                return null;
            }, o.prototype.createResponsiveLabelsBoxes = function (e) {
                this.buildLabelBox(e.preLabelsBox, e.video_data, e.pre_detail_order), this.buildLabelBox(e.labelsBox, e.video_data, e.detail_order);
            }, o.prototype.createCallToActionButton = function (e, t) {
                this.trc.global['enable-call-to-action-creative-component'] && this.trc.getProperty(this.mode_name, 'ctaWidget') && (TRC.ctaManager = TRC.ctaManager || new TRC.CTAManager(), TRC.ctaManager.shouldRenderCTAForItem(e, t) && TRC.CTAManager.renderCTAItem(e, t));
            }, o.prototype.handleBrandingWithDisclosureContainerWidth = function () {
                var e = this.branding;
                if (e) {
                    var t = e.querySelector('.branding-inner'), i = e.querySelector('.branding-separator'), r = e.querySelector('.logoDiv'), n = i && TRC.dom.getOuterWidth(i), o = TRC.dom.getOuterWidth(r);
                    t.style.maxWidth = 'calc(100% - ' + (n + o) + 'px)';
                }
            }, o.prototype.createResponsiveVideoBox = function (e, t, i, r) {
                e.rbox = this, e.video_data = t, e.thumbnail_position = this.getThumbnailPosition(t, r || null), this.setVideoBoxDataAttr(e, t), this.setVideoBoxClassName(e), this.createVideoBoxDirectURL(e), t.logger_url = this.createVideoBoxClickUrl(e.video_data, e.directURL), e.setAttribute('data-item-title', t.title), this.setVideoBoxDetailsOrder(e, i || null), this.createDetailsLabelsContainers(e);
            }, o.prototype.createDetailsLabelsContainers = function (e) {
                var t = 0;
                e.pre_detail_order.length > 0 && (this.createVideoBoxPreThumbnailLink(e), t++), e.detail_order.length > 0 && (this.createVideoBoxAfterThumbnailLink(e), t++), t > 1 && TRC.dom.addClass(e, 'trc-split-label');
            }, o.prototype.setVideoBoxClassName = function (e) {
                var t = 0, i = this.isResponsive, r = this.trc.getProperty(this.mode_name, 'orientation', this.propertiesOverride), n = TRC.blocker.blockedState > 0 && this.trc.global['switch-abp-class'] ? this.trc.global['switch-abp-class']['syndicatedItem'] : TRC.SYNDICATED_CLASS_NAME;
                this.setVideoBoxClassName = function (e) {
                    var o = e.video_data;
                    e.className = 'videoCube ' + 'trc_spotlight_item ' + 'origin-' + o.origin + ' thumbnail_' + e.thumbnail_position + (o.isSyndicated ? ' ' + n : '') + (o['is-in-network'] ? ' inNetworkItem' : '') + (o['is-native'] ? ' tabNativeItem' : '') + (o.isPhoto ? ' photoItem' : '') + (o.isText ? ' textItem' : '') + ' ' + (i ? 'videoCube_' + (t += 1) + '_child' : r);
                }, this.setVideoBoxClassName(e);
            }, o.prototype.setVideoBoxDetailsOrder = function (e, t) {
                var i = t || this.trc.getProperty(this.mode_name, 'detail-order' + (e.video_data.isSyndicated ? '-syndicated' : ''), this.propertiesOverride), r = this.trc.getProperty(this.mode_name, 'before-detail-order' + (e.video_data.isSyndicated ? '-syndicated' : ''), this.propertiesOverride);
                e.detail_order = i ? i.split(',') : [], e.pre_detail_order = r ? r.split(',') : [];
            }, o.prototype.createVideoBoxAfterThumbnailLink = function (e) {
                var t = e.video_data, i = e.getAttribute('data-item-title'), r = this.createVideoLink(t, i);
                e.labelsBox = this.createVideoBoxLabels(r), e.appendChild(r), e.link = r, TRC.dom.addClass(r, 'item-label-href'), TRC.dom.addClass(e.labelsBox, 'trc-main-label');
            }, o.prototype.createVideoBoxPreThumbnailLink = function (e) {
                var t = e.video_data, i = e.getAttribute('data-item-title'), r = this.createVideoLink(t, i);
                e.preLabelsBox = this.createVideoBoxLabels(r), e.appendChild(r), e.preLink = r, TRC.dom.addClass(r, 'item-label-href'), TRC.dom.addClass(e.preLabelsBox, 'trc-pre-label'), TRC.dom.addClass(e, 'item-has-pre-label');
            }, o.prototype.appendVideoBoxImage = function (e) {
                try {
                    (null != e.img_src || this.trc.global['thumb-lazy-load-switch']) && (void 0 === e.image_div ? e.thumbBlock.style.backgroundImage = 'URL(\'' + e.img_src + '\')' : (e.thumbBlock.appendChild(e.image_div), e.image_div.appendChild(e.img), e.img.style.visibility = 'visible'));
                } catch (e) {
                    __trcError('Pager thumbnail images fixing errors', e);
                }
            }, o.prototype.pasreRecommendationList = function (e, t, i) {
                var r, n;
                this.stopBoxRendering = !1;
                for (var o = 0; o < e; o++) {
                    TRC.tlf && 0 === o && console.time('item rendering'), (r = this.recommendationList[o]).itemIndex = o, null == this.firstVideo && 'video' == r.type && (this.firstVideo = r);
                    try {
                        this.trc.runHook(this, this.mode_name, 'item-data-filter', this.propertiesOverride, !1, r), this.fixHeight && !this.stopBoxRendering ? (n = this.drawResponsiveVideoBox(i, r, t, this.orientation), this.stopBoxRendering = this.hasMaxHeightExploitation(parseInt(document.trcGetCurrentStyle(this.container, 'height'), 10), this.fixHeight), this.stopBoxRendering && this.safeRemoveItem(n)) : this.fixHeight || this.drawResponsiveVideoBox(i, r, t, this.orientation, null, null);
                    } catch (e) {
                        __trcError('Error in pasreRecommendationList', e);
                    }
                    TRC.tlf && 0 == o && console.timeEnd('item rendering');
                }
            }, o.prototype.safeRemoveItem = function (e) {
                var t = e.parentNode;
                TRC.dom.clearInnerElements(e), t.removeChild(e);
            }, o.prototype.hasMaxHeightExploitation = function (e, t) {
                return t <= e;
            }, o.prototype.fixResponsiveVideoBoxes = function () {
                for (var e = this.boxes, t = 0, i = e.length; t < i; t++)
                    this.fixResponsiveBoxTitleAndDesc(e[t]);
            }, o.prototype.createSponsoredOverlay = function (e) {
                var i = t.createElement('span');
                i.className = 'trc_sponsored_overlay', e.appendChild(i);
            }, o.prototype.setSponsoredOverlayClass = function (e, t) {
                t.className = 'thumbnail' == e ? 'trc_sponsored_overlay_base' : 'trc_sponsored_overlay_base round';
            }, o.prototype.genrateResponsiveSponsoredLabel = function (e, t) {
                var i = this.trc.getProperty(this.mode_name, 'sponsored-location', this.propertiesOverride);
                if (i.match(/^thumbnail/)) {
                    var r = document.createElement('span');
                    try {
                        this.setSponsoredOverlayClass(i, r), this.createSponsoredOverlay(r), t.appendChild(r), e['spnoverlay'] = r;
                    } catch (e) {
                        __trcError('Error while generating sponsored label', e);
                    }
                }
            }, o.prototype.generateResponsiveOuters = function (e) {
                if (null == this.listContainer) {
                    this.header = this.generateHeader(e);
                    var i = t.createElement('div');
                    i.id = this.id.replace('trc_', 'outer_'), i.className = 'trc_rbox_outer', this.generateResponsiveRBoxDiv(i), e.appendChild(i), this.outerBox = i, this.addTaboolaLogo(), e.style.display = 'block';
                }
            }, o.prototype.generateResponsiveRBoxDiv = function (e) {
                var i = t.createElement('div');
                i.id = this.getListId(), i.className = 'trc_rbox_div trc_rbox_border_elm', e.appendChild(i), this.listContainer = i;
            }, o.prototype.getAllExternalTrackingURLsList = function () {
                var e = this.response.trc['video-list'].video, t;
                try {
                    if (!this.externalTrackingURLsList) {
                        this.externalTrackingURLsList = {};
                        for (var i = 0; e && i < e.length; i++)
                            for (var r in t = this.getItemExternalTrackingURLsList(e[i]))
                                t.hasOwnProperty(r) && (this.externalTrackingURLsList[r] || (this.externalTrackingURLsList[r] = []), this.externalTrackingURLsList[r] = this.externalTrackingURLsList[r].concat(t[r]));
                    }
                    return this.externalTrackingURLsList;
                } catch (e) {
                    return __trcError('Error in TRCRBox.getAllExternalTrackingURLsList'), {};
                }
            }, o.prototype.getItemExternalTrackingURLsList = function (e) {
                var t = e['item-id'], i = e['itp'], r, n, o, a = {};
                if (!t)
                    return __trcDebug('Item does not have id. External tracking pixel will not be sent if defined'), [];
                try {
                    if (this.externalTrackingURLsListByItemId || (this.externalTrackingURLsListByItemId = {}), !this.externalTrackingURLsListByItemId[t]) {
                        for (var s = 0; i && s < i.length; s++)
                            n = (r = i[s])['t'], o = r['u'], n && o && (a[n] || (a[n] = []), a[n].push(o));
                        this.externalTrackingURLsListByItemId[t] = a;
                    }
                    return this.externalTrackingURLsListByItemId[t];
                } catch (e) {
                    return __trcError('Error in TRCRBox.getItemExternalTrackingURLsList'), [];
                }
            }, o.prototype.sendPlacementTrackingPixelsOnce = function (e) {
                this.trc.log1(e, { ri: this.response.trc.req }, null, null, this.placement, this.sendAllTrackingPixelsOfType.trcBind(this, e));
            }, o.prototype.sendAllTrackingPixelsOfType = function (e) {
                this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()[e]);
            }, o.prototype.shouldUseSmartEllipsis = function () {
                return this.trc.global['smart-ellipsis'] && ('enableAndOverrideModeFlag' === this.trc.global['smart-ellipsis'] || this.trc.getProperty(this.mode_name, 'smart-ellipsis'));
            }, o.prototype.getEffectiveResponsiveRule = function (t, i, r) {
                if (t = t || this.responsiveRules, i = i || 'min', r = r || 'max', 'function' != typeof e['matchMedia'] || !this.isResponsive || !t)
                    return null;
                for (var n = 0; n < t.length; n++)
                    if (e['matchMedia']('screen and (min-width: ' + t[n][i] + 'px)' + (isNaN(t[n][r]) ? '' : ' and (max-width: ' + t[n][r] + 'px)')).matches)
                        return t[n];
                return null;
            }, o.prototype.getCurrentListSize = function () {
                var e = this.trc.getProperty(this.mode_name, 'responsive-rules', this.propertiesOverride), t = this.getEffectiveResponsiveRule(e, 'minWidth', 'maxWidth');
                return this.isResponsive && t ? t.rows * t.cells : this.trc.getListSize(this);
            }, o.prototype.drawImageIframe = function (e, t, i) {
                t = t || '', i = i && i.replace(/&redir=[^&]*/, '') + '&redir=', e.innerHTML = t.replace('${CLICK_URL_ESC}', encodeURIComponent(i));
            }, o.prototype.getWidgetToFeedHelper = function () {
                return this.parentFeed && this.parentFeed.widgetToFeedHelper;
            }, o.prototype.getPublisherBrandingName = function () {
                if (!this.publisherBrandingText) {
                    var e = this.trc.getPublisherVersionPropertyWithFallbackToNetwork('publisher-branding') || '';
                    this.publisherBrandingText = TRC.text.encodeHTML(e) || this.trc.getSiteNameOgValue() || '';
                }
                return this.publisherBrandingText;
            }, o.prototype.sendAvailableEvent = function (e, t, i, r) {
                if (!this.isResponseFromCache() || this.trc.global['send-available-for-cached-response'])
                    if (!r && this.trc.isDeferredAvailable) {
                        TRC.performance && TRC.performance.mark('8.0.1.' + this._id);
                        var n = this.sendEvent.trcBind(this, 'available', this.util.merge(e, { df: 1 }), t.getAll(), !0);
                        i ? TRC.Timeout.set(n, 0) : this.postRenderQueue.pushBack('available', n);
                    } else
                        this.sendEvent('available', e, t.getAll(), !0);
            }, o.prototype.isResponseFromCache = function () {
                return this.response && this.response.cached;
            }, o.prototype.getModeClientProperty = function (e) {
                return this.trc.getProperty(this.mode_name, e, this.propertiesOverride);
            };
        }(window, document), function (e, t) {
            var i = TRC.URL = function (e) {
                    var t = TRC.text.lsplit;
                    if (!e)
                        throw new Error('Invalid URL!');
                    this.href = e;
                    var i = t(e, '#', 2);
                    return this.hash = i.length > 1 ? '#' + i.pop() : '', i = t(e = i[0], '?', 2), this.search = i.length > 1 ? '?' + i.pop() : '', i = t(e = i[0], '://', 2), this.protocol = i.length > 1 ? i.shift() + ':' : '', i = t(e = i[0], '/', 2), this.pathname = i.length > 1 ? '/' + i.pop() : '/', i = t(e = i[0], '@', 2), this.auth = i.length > 1 ? i.shift() : '', i = t(e = i[0], ':', 2), this.port = i.length > 1 ? parseInt(i.pop()) : 0, this.host = i[0], this;
                }, r = {
                    'http:': 1,
                    'https:': 1
                };
            i.prototype.toString = function (e) {
                return (this.host ? this.protocol + '//' + (this.auth ? this.auth + '@' : '') + this.host + (this.port ? ':' + this.port : '') : '') + this.pathname + this.search + (e ? '' : this.hash || '');
            }, i.prototype.switchProtocol = function (e, t) {
                var i = this instanceof TRC.URL ? this : new TRC.URL(this), n;
                return r[e] && (t && 'https:' == i.protocol || (i.protocol = e)), (n = i.toString(!1)).length > 1 ? n : '';
            }, i.prototype.getParameter = function (e, t) {
                var i = TRC.URL.prototype.getQueryStringObj.call(this);
                for (var r in i)
                    if (unescape(r) == e)
                        return t ? t(i[r]) : unescape(i[r]);
                return null;
            }, i.prototype.getQueryStringObj = function () {
                for (var e, t = (this instanceof TRC.URL ? this : new TRC.URL(this)).search.substr(1).split(/&/), i = {}, r = 0; r < t.length; r++)
                    if (t[r]) {
                        var n = t[r].split(new RegExp('='), 2);
                        i[n[0]] = n[1];
                    }
                return i;
            }, i.prototype.addParamsToUrl = function (e, t) {
                var i = e.split('#');
                return i[0] + (i[0].search('\\?') >= 0 ? '&' : '?') + t + (i[1] ? '#' + i[1] : '');
            };
        }(window, document), function (e, t) {
            e.TRC = e.TRC || {}, TRC.UserIdMerger = {
                notifyPossibleUserChange: function (e, t, i, r) {
                    var n, o, a;
                    e.global['rbox-enable-fix-user-id-event'] && (n = TRC.pageManager.getValue('user-id'), o = TRC.pageManager.getPublisherValue(t, 'session-data'), this.multipleUsersExist(i, n) && this.sendUserIdFixEvent(e, n, i, o, r));
                },
                multipleUsersExist: function (e, t) {
                    return t && e && t !== e;
                },
                sendUserIdFixEvent: function (e, t, i, r, n) {
                    var o = {
                        time: new Date().getTime(),
                        fromUser: t,
                        toUser: i,
                        fromSD: r,
                        toSD: n
                    };
                    e.sendEvent('fix-user-id', o);
                }
            };
        }(window, document), function () {
            TRC.InvokePVideoLoader = function () {
                TRC.PVideoLoader = function e(t, i, r, n) {
                    this.blockVideo = n.blockThumbnailVideoLoader, this.blockVideo || (TRC.VideoLoader.call(this, t.trc, i, t.placement, t.container, r), this.rbox = t);
                }, TRC.PVideoLoader.prototype = __trcObjectCreate(TRC.VideoLoader.prototype), TRC.VideoLoader.prototype.ITEM_ID_SEPARATOR = '~~', TRC.PVideoLoader.prototype.getCallbacksObjectKey = function () {
                    return 'pVideoCallbacks';
                }, TRC.PVideoLoader.prototype.genVideoCallback = function (videoCallbackParams) {
                    var videoCallbackName = this.generateCallbackName(), that = this;
                    return TRC.pVideoCallbacks[videoCallbackName] = function (data) {
                        if (TRCImpl.global['enable-video-ajax']) {
                            if (!TRC.VideoTagLoader.prototype.isXHRDone(data.target))
                                return;
                            TRC.performance && TRC.performance.mark('videoAjaxStop', null, '', '', 'videoAjaxRoundtrip', TRC.PerfEvenType.STOP), data = TRC.VideoTagLoader.prototype.parseTBResponse(data.target.responseText);
                        }
                        if (TRC.performance && TRC.performance.mark('videoJsonpRequestStop', null, '', '', 'videoJsonpRequestTime', TRC.PerfEvenType.STOP), data = data || {}, data.tags && data.tags[0]) {
                            var unitBootSrc = data.tags[0].unitBootSrc || that.videoConfig.unitBootSrc, script = document.createElement('script');
                            script.src = unitBootSrc, script.setAttribute('type', 'text/javascript'), script.setAttribute('src', unitBootSrc), script.onload = function () {
                                var unit = eval(data.tags[0].url), viewabilityConfig = that.videoConfig['autoTriggerConfig']['viewabilityConfig'];
                                if (-1 == viewabilityConfig.time && (viewabilityConfig.time = 0, viewabilityConfig.percentage = 101), unit.set('pVideoUrl', videoCallbackParams.url), unit.set('playerContainer', videoCallbackParams.playerContainer), unit.set('components.PosterView', {
                                        isActive: !0,
                                        imageLocation: videoCallbackParams.poster
                                    }), unit.set('customization.placeHolder.background-color', 'black'), unit.set('viewPercent', viewabilityConfig.percentage), unit.set('secondsInView', viewabilityConfig.time), unit.set('isPlayOnHover', that.videoConfig['autoTriggerConfig']['hover']), unit.set('isRepeat', that.videoConfig.repeat), that.videoConfig['videoEventsEnabled']) {
                                    var videoDataForEvent = that.getVideoDataForEvent(videoCallbackParams.itemIndex, videoCallbackParams.itemId);
                                    unit.on('error', function () {
                                        that.sendDebugEvent('error', videoDataForEvent);
                                    }), unit.on('eligible', function () {
                                        that.sendDebugEvent('eligible', videoDataForEvent);
                                    }), unit.on('play', function (e) {
                                        that.sendDebugEvent('play', videoDataForEvent, e);
                                    }), unit.on('render', function () {
                                        that.sendDebugEvent('rendered', videoDataForEvent);
                                    }), unit.on('quarterly', function (e) {
                                        that.sendDebugEvent('quarterly', videoDataForEvent, e);
                                    }), unit.on('complete', function () {
                                        that.sendDebugEvent('complete', videoDataForEvent);
                                    });
                                }
                                TRC.tlf && console.timeEnd('in setVideoPlayerLoad'), TRC.tlf && console.timeStamp('end setVideoPlayerLoad');
                            }, document.getElementsByTagName('head')[0].appendChild(script);
                        }
                    }, 'TRC.' + this.getCallbacksObjectKey() + '.' + videoCallbackName;
                }, TRC.PVideoLoader.prototype.sendDebugEvent = function (e, t, i) {
                    var r, n = window.trc_debug_level;
                    r = {
                        event: e,
                        data: i || null,
                        rii: t.rii,
                        placement: t.placement,
                        mode: t.modeName,
                        itemIndex: t.itemIndex,
                        itemId: t.itemId
                    }, window.trc_debug_level = 3, __trcDebug('Performance Video Event: ' + JSON.stringify(r)), window.trc_debug_level = n;
                }, TRC.PVideoLoader.prototype.getVideoDataForEvent = function (e, t) {
                    return {
                        rii: this.rbox['response']['trc']['req'],
                        placement: this.rbox['placement'],
                        modeName: this.rbox['mode_name'],
                        itemIndex: e,
                        itemId: this.extractRealItemId(t)
                    };
                }, TRC.PVideoLoader.prototype.extractRealItemId = function (e) {
                    if (!e)
                        return null;
                    var t = e.split(this.ITEM_ID_SEPARATOR)[2];
                    return t && t.length > 0 && !isNaN(parseFloat(t)) && isFinite(t) ? t : null;
                }, TRC.PVideoLoader.prototype.loadVideo = function (e, t) {
                    var i, r, n, o = TRC.VideoLoader.prototype.loadVideo.call(this, e);
                    return o && t && (i = (n = t.container.getElementsByClassName('thumbBlock_holder')) && n[0]) && t.isCreatePVideoOverlay && (r = TRC.pVideoOverlay.create(t.video_data, t.language, t.isSendEvents), i.appendChild(r)), o;
                };
            };
        }(), ((e, t, i) => {
            const r = {
                    en: {
                        cancel: 'CANCEL',
                        goto: 'GO TO'
                    },
                    de: {
                        cancel: 'Abbrechen',
                        goto: 'Mehr erfahren'
                    },
                    fr: {
                        cancel: 'Annuler',
                        goto: 'Se rendre sur'
                    },
                    it: {
                        cancel: 'Annulla',
                        goto: 'Vai a'
                    },
                    jp: {
                        cancel: 'キャンセル',
                        goto: 'サイトへ行く'
                    },
                    pt: {
                        cancel: 'Fechar',
                        goto: 'Ir para'
                    },
                    es: {
                        cancel: 'Cancelar',
                        goto: 'Ir a'
                    },
                    ko: {
                        cancel: 'CANCEL',
                        goto: '지금 더 알아보기'
                    },
                    he: {
                        cancel: 'סגור',
                        goto: 'עבור לדף'
                    }
                }, n = (i = i || {
                    dom: {
                        stopEvent(e) {
                            e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
                        },
                        on(e, t, i) {
                            e.addEventListener(t, i);
                        },
                        addClass(e, t) {
                            e.className += ` ${ t } `;
                        },
                        removeClass(e, t) {
                            const i = new RegExp(`s*${ t }`, 'g');
                            e.className = e.className.replace(i, '');
                        }
                    },
                    global: { 'p-video-overlay-send-events': !1 }
                }).dom;
            TRC._translationQueue = TRC._translationQueue || [], TRC._translationQueue.push({ 'p-video-overlay': r });
            let o = {}, a;
            const s = function (e, t) {
                    if (!a)
                        return;
                    const r = {
                        itemId: t['item-id'],
                        publisher: t.publisher,
                        syndicatorId: t['syndicator-id']
                    };
                    TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent(e, __trcJSONify(r)), i.modDebug.logMessageToServer(1, e, r);
                }, l = function (e) {
                    if (!e || !e.length)
                        return '';
                    const t = e.replace(/(^\w+:|^)\/\//, '');
                    return t.replace(/\/.*/, '');
                }, c = function (e) {
                    const t = e.className.match(/p-video-overlay-show/);
                    n[t ? 'removeClass' : 'addClass'](e, 'p-video-overlay-show');
                }, d = function (e, t) {
                    c(t.currentTarget.firstElementChild), void 0 === t.gotoSyndicator && s('p-video-overlay__display-overlay', e), t.gotoSyndicator || n.stopEvent(t);
                }, h = function (e, t, i) {
                    s(t.msg, e), i.gotoSyndicator = t.flag;
                }, u = function (e, t, i) {
                    const r = n.createHTMLElement('div', { className: e || '' });
                    return 'function' == typeof t && n.on(r, 'click', t), i && i.length && i.forEach && i.forEach(e => {
                        r.appendChild(e);
                    }), r;
                }, p = function (e) {
                    const t = n.createHTMLElement('span', {
                            className: 'p-video-back-action-label',
                            innerText: o.cancel || r.en.cancel
                        }), i = u('p-video-overlay-action p-video-back-action', h.bind(this, e, {
                            msg: 'p-video-overlay__hide-overlay',
                            flag: !1
                        }), [t]);
                    return i;
                }, m = function (e) {
                    const t = n.createHTMLElement('span', {
                            className: 'p-video-goto-action-label',
                            innerText: o.goto || r.en.goto
                        }), i = n.createHTMLElement('span', {
                            className: 'p-video-goto-action-url',
                            innerHTML: e['branding-text']
                        }), a = u('p-video-overlay-action p-video-goto-action', h.bind(this, e, {
                            msg: 'p-video-overlay__go-to-syndicator-page',
                            flag: !0
                        }), [
                            t,
                            i
                        ]);
                    return a;
                }, g = function (e) {
                    const t = p(e), i = m(e), r = u('p-video-overlay', null, [
                            i,
                            t
                        ]);
                    return r;
                }, f = function (e, t, i) {
                    const n = g(e);
                    a = i, o = TRC.translationManager.getLabel({ feature: 'p-video-overlay' }) || r.en;
                    const l = u('p-video-overlay-container', d.bind(this, e), [n]);
                    return s('p-video-overlay__overlay-created-on-item', e), l;
                };
            i.pVideoOverlay = {
                create: f,
                createVideoPlayerOverlayElement: g,
                createActionElement: u,
                createGotoActionElement: m,
                createBackActionElement: p,
                actionClickHandler: h,
                videoOverlayClickHandler: d,
                videoOverlayToggleDisplay: c,
                stripUrl: l,
                sendDebugEvent: s
            };
        })(window, document, TRC), (() => {
            class BaseVideoUnitLoader {
                constructor(e) {
                    this.videoConfig = e;
                }
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark('videoEvalBaseLoadUnitStart', null, '', '', 'videoEvalBaseLoadUnitTime', TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    TRC.performance && TRC.performance.mark('videoEvalBaseLoadUnitStop', null, '', '', 'videoEvalBaseLoadUnitTime', TRC.PerfEvenType.STOP);
                    const {rawJsonValue: rawJsonValue} = this.videoConfig;
                    return this.setUnitParams(unit, rawJsonValue), unit;
                }
                getVideoContainerSelector() {
                    return null;
                }
                setUnitParams(e) {
                    const {advancedVideoConfiguration: t} = this.videoConfig, i = {
                            detachToSlider: !0,
                            unitType: !0,
                            parentFeedOptions: !0,
                            rawJsonValue: !0
                        };
                    Object.keys(this.videoConfig).forEach(t => {
                        this.videoConfig[t] && (i[t] || e.set(t, this.videoConfig[t]));
                    }), BaseVideoUnitLoader.setAdvancedVideoConfiguration(e, t);
                    const r = this.videoConfig.aggLevel || 1, n = { level: r };
                    r > 1 && e.set('preset', n);
                }
                static setAdvancedVideoConfiguration(e, t) {
                    t && Object.keys(t).forEach(i => {
                        const r = TRC.text.splitAndJoin(i, TRC.text.toLowerCamelCase);
                        BaseVideoUnitLoader.setToUnit(e, t, i, r);
                    });
                }
                static setToUnit(e, t, i, r) {
                    const n = {
                        unitType: !0,
                        parentFeedOptions: !0,
                        rawJsonValue: !0
                    };
                    'IN_WIDGET' !== t.unitType && (n.detachToSlider = !0);
                    const o = { 'additionalCss.zIndex': 'additionalCss.z-index' };
                    n[r] || (o[r] ? e.set(o[r], t[i]) : e.set(r, t[i]));
                }
            }
            TRC.BaseVideoUnitLoader = BaseVideoUnitLoader;
        })(), (() => {
            class SingleVideoManagerUnitLoader extends TRC.BaseVideoUnitLoader {
                constructor(e, t) {
                    super(e), this.trcManager = t, this.parentFeedOptions = e.parentFeedOptions;
                }
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark('videoEvalSingleManagerLoadUnitStart', null, '', '', 'videoEvalSingleManagerLoadUnitTime', TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark('videoEvalSingleManagerLoadUnitStop', null, '', '', 'videoEvalSingleManagerLoadUnitTime', TRC.PerfEvenType.STOP), this.setUnitParams(unit), unit;
                }
                getVideoContainerSelector() {
                    return null;
                }
                setUnitParams(e) {
                    super.setUnitParams(e);
                    const t = this.videoConfig.distanceRepeat || 0, i = TRC.util.isTrue(this.videoConfig.startFromSlider), r = TRC.util.isTrue(this.videoConfig.detachToSlider), n = TRC.util.isTrue(this.videoConfig.detachToSliderAnimation), o = this.videoConfig.videoAbTest || null, a = this.videoConfig.startCard || null, s = this.videoConfig.maxVideoCards || null, l = this.videoConfig.permanentCard || null, {feedDynamicParameters: c} = this.parentFeedOptions, d = c && c.videoDisclosurePosition || this.parentFeedOptions.videoDisclosurePosition || this.trcManager.global['video-disclosure-position'], h = this.parentFeedOptions && this.parentFeedOptions.uiDesignVersion;
                    e.set('distanceRepeat', t), e.set('detachToSlider.isStartFromSlider', i), e.set('detachToSlider.isDetachToSlider', r), e.set('detachToSlider.animation', n), e.set('abTest', o), a && e.set('startCard', a), s && e.set('maxVideoCards', s), l && e.set('permanentCard', l), d && e.set('components.adChoice.position', d), h >= 3 && (e.set('components.adChoice.title.style.color', '#999999'), e.set('components.adChoice.title.logoStyle.display', 'none'));
                }
            }
            TRC.SingleVideoManagerUnitLoader = SingleVideoManagerUnitLoader;
        })(), (() => {
            class SliderVideoUnitLoader extends TRC.BaseVideoUnitLoader {
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark('videoEvalSliderLoadUnitStart', null, '', '', 'videoEvalSliderLoadUnitTime', TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark('videoEvalSliderLoadUnitStop', null, '', '', 'videoEvalSliderLoadUnitTime', TRC.PerfEvenType.STOP), this.setUnitParams(unit), unit;
                }
                getVideoContainerSelector() {
                    return null;
                }
                setUnitParams(e) {
                    super.setUnitParams(e);
                }
            }
            TRC.SliderVideoUnitLoader = SliderVideoUnitLoader;
        })(), (() => {
            class StandaloneVideoUnitLoader extends TRC.BaseVideoUnitLoader {
                constructor(e, t) {
                    super(e), this.options = t;
                }
                loadUnit(videoCallbackData, videoContainer) {
                    this.setCmTag(videoContainer), TRC.performance && TRC.performance.mark('videoEvalStandaloneLoadUnitStart', null, '', '', 'videoEvalStandaloneLoadUnitTime', TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark('videoEvalStandaloneLoadUnitStop', null, '', '', 'videoEvalStandaloneLoadUnitTime', TRC.PerfEvenType.STOP), this.setupVideo(videoContainer, unit), unit;
                }
                getVideoContainerSelector(e) {
                    return e && e.id ? `#${ e.id }` : (__trcWarn('Cannot get a selector for standalone video container - Taboola publisher container must be defined and have an ID'), null);
                }
                setCmTag(e) {
                    window.cmTag.set('isCustomEvents', !0), window.cmTag.set('width', e.getBoundingClientRect().width), window.cmTag.set('customization', this.options.videoCssCustomization);
                }
                setupVideo(e, t) {
                    let i = !1;
                    const r = TRC.util.isTrue(this.videoConfig.startFromSlider), n = TRC.util.isTrue(this.videoConfig.detachToSlider), o = TRC.util.isTrue(this.videoConfig.detachToSliderAnimation), a = function () {
                            !i && TRC.visibility.isInViewPortWithOffset(e, -50) && (t.play && 'function' == typeof t.play && t.play(e), i = !0, TRC.dispatch('trcContentReady', { container: e }), TRC.dom.off(window, 'scroll', a));
                        };
                    t.set('detachToSlider.isStartFromSlider', r), t.set('detachToSlider.isDetachToSlider', n), t.set('detachToSlider.animation', o), t.on('ready', () => {
                        a(), i || TRC.dom.on(window, 'scroll', a);
                    });
                }
            }
            TRC.StandaloneVideoUnitLoader = StandaloneVideoUnitLoader;
        })(), (() => {
            class VideoAsItemUnitLoader extends TRC.BaseVideoUnitLoader {
                constructor(e, t, i) {
                    super(e), this.options = t, this.rbox = i, this.allowExpandInViewport = TRC.util.isTrue(e.allowExpandInViewport), this.replaceWidgetItems = TRC.util.isTrue(e.replaceWidgetItems), this.disableFitToSizeForSingleColumn = TRC.util.isTrue(e.disableFitToSizeForSingleColumn), this.isContainerRatioValidForTakeOver = !1, this.getContainerDimensions(t.container);
                }
                loadUnit(videoCallbackData, videoContainer) {
                    const itemsToHide = this.getSponsoredItemsToHide();
                    let unit;
                    if (!this.replaceWidgetItems || itemsToHide && itemsToHide.length) {
                        const slotItem = this.getSlotWidgetItem();
                        if (slotItem) {
                            const slotItemComputedStyle = getComputedStyle(slotItem);
                            this.setCmTag(slotItem, slotItemComputedStyle), TRC.performance && TRC.performance.mark('videoEvalItemLoadUnitStart', null, '', '', 'videoEvalItemLoadUnitTime', TRC.PerfEvenType.START), unit = eval(videoCallbackData.tags[0].url), TRC.performance && TRC.performance.mark('videoEvalItemLoadUnitStop', null, '', '', 'videoEvalItemLoadUnitTime', TRC.PerfEvenType.STOP), this.setUnitParams(unit), this.setupVideo(unit, itemsToHide, videoContainer, slotItemComputedStyle);
                        }
                    }
                    return unit;
                }
                getVideoContainerSelector(e) {
                    const t = this.createVideoContainer(e);
                    return t ? `#${ t.id }` : null;
                }
                createVideoContainer(e) {
                    const t = document.createElement('figure'), i = this.getSlotWidgetItem(), r = i && i.parentNode;
                    return i && r && e ? (e.id ? t.id = e.id : t.id = Math.floor(2147483648 * Math.random()).toString(36), t.id += '-video', r.insertBefore(t, i), t) : (__trcWarn('Could not create video container selector for integrated widget - nowhere to append the video container'), null);
                }
                setCmTag(e, t) {
                    const i = this.getUnitContainerStyle(e, t);
                    window.cmTag.set('isCustomEvents', !0), window.cmTag.set('width', parseInt(i.width, 10)), window.cmTag.set('customization', this.getUnitCustomization(e, i)), window.cmTag.set('isFitToSize', this.isFitToSizeVideo()), window.cmTag.set('openingEffect', this.videoConfig.expandEffect), window.cmTag.set('isContainerRatioNotValidForTakeOver', !this.isContainerRatioValidForTakeOver), window.cmTag.set('rboxContainerRatio', this.containerRatio);
                }
                getUnitCustomization(e, t) {
                    const i = {};
                    if (i.unitContainer = t, !this.isFitToSizeVideo()) {
                        const t = e.querySelector('.thumbBlock_holder'), r = e.querySelector('.video-label-box .video-title'), n = e.querySelector('.video-label-box .branding');
                        i.placeHolder = getComputedStyle(t), i.titleContainer = {
                            title: getComputedStyle(r),
                            branding: getComputedStyle(n)
                        };
                    }
                    return i;
                }
                isFitToSizeVideo() {
                    if (!this.disableFitToSizeForSingleColumn)
                        return !0;
                    const e = this.rbox.getEffectiveResponsiveRule();
                    return !e || 1 !== e.cells;
                }
                getUnitContainerStyle(e, t) {
                    const i = parseFloat(t.marginLeft), r = parseFloat(t.marginRight), n = parseFloat(t.width), o = this.getNumOfSlotsToOccupy(), a = Math.ceil(n * o + (i + r) * (o - 1));
                    return {
                        width: `${ a }px`,
                        height: t.height
                    };
                }
                setTakeOverUnitContainerStyle(e, t) {
                    const i = this.getUnitContainerStyle(e, t), r = this.rbox.getEffectiveResponsiveRule(), n = parseFloat(t.marginTop), o = parseFloat(t.marginBottom), a = parseFloat(t.height), s = r.rows;
                    i.height = Math.ceil(a * s + (n + o) * (s - 1)), TRC.dispatch('widgetTakeoverSizeChange', {
                        width: parseInt(i.width, 10),
                        customization: this.getUnitCustomization(e, i)
                    });
                }
                setupVideo(e, t, i, r) {
                    const {allowExpandInViewport: n} = this, o = this.rbox.container;
                    let a = this.getSlotWidgetItem();
                    this.setVideoContainerInitialStyle(i, r), e.on('ready', r => {
                        if (r && r.isTakeoverWidget && r.isContainerRatioValidForTakeOver) {
                            this.setPlacementSingleAdConf(), a = this.getMaxHeightSlot();
                            const e = getComputedStyle(a);
                            this.setTakeOverUnitContainerStyle(a, e), this.setVideoContainerInitialStyle(i, e), i.style.zIndex = 999;
                        }
                        !n && TRC.visibility.isInViewPortWithOffset(a, 0) || (o && TRC.dom.addClass(o, 'iw_video_frame'), this.replaceWidgetItems ? t && t.length ? (parseInt(this.videoConfig.expandEffect, 10) ? e.on('renderAnimation:completed', VideoAsItemUnitLoader.displayVideoInsteadOfItems.trcBind(this, i, t)) : VideoAsItemUnitLoader.displayVideoInsteadOfItems(i, t), e.play && 'function' == typeof e.play && e.play(i)) : __trcDebug('Not enough sponsored items to hide - aborting integrated widget video load') : e.play && 'function' == typeof e.play && e.play(i));
                    });
                }
                setVideoContainerInitialStyle(e, t) {
                    const i = this.getSlotWidgetItem(), r = parseFloat(t.marginLeft), n = this.getOuterRBoxComputedStyle(), o = parseFloat(n.marginLeft), a = i.offsetLeft - r - (o + r);
                    e.style.position = 'absolute', e.style.float = t.float, e.style.top = `${ i.offsetTop }px`, e.style.left = `${ a }px`, e.style.width = 'auto', e.style.marginLeft = t.marginLeft, e.style.marginRight = t.marginRight, e.style.marginTop = t.marginTop, e.style.marginBottom = t.marginBottom, this.replaceWidgetItems || (e.style.zIndex = 90);
                }
                getOuterRBoxComputedStyle() {
                    const e = this.rbox.outerBox;
                    return getComputedStyle(e);
                }
                static displayVideoInsteadOfItems(e, t) {
                    VideoAsItemUnitLoader.hideWidgetItems(t), e.style.position = 'static';
                }
                static hideWidgetItems(e) {
                    e.forEach(e => {
                        e.style.display = 'none', e.style.visibility = 'hidden';
                    });
                }
                getSlotWidgetItem() {
                    if (this.slotWidgetItem)
                        return this.slotWidgetItem;
                    const e = this.getWidgetItems(), t = this.getInsertionPointSlotNumber() - 1;
                    return isNaN(t) ? void 0 : this.slotWidgetItem = e[t];
                }
                getInsertionPointSlotNumber() {
                    const e = this.getWidgetItems(), t = parseInt(this.videoConfig.slot, 10);
                    if (void 0 !== this.insertionPointSlotNumber)
                        return this.insertionPointSlotNumber;
                    if (!isNaN(t) && t > 0) {
                        if (this.allowExpandInViewport)
                            return this.insertionPointSlotNumber = t;
                        let i;
                        for (let r = t; r <= e.length; r++)
                            if (i = r - 1, !TRC.visibility.isInViewPortWithOffset(e[i], 0))
                                return this.insertionPointSlotNumber = r;
                    }
                    return __trcWarn(`video tag loader - unknown slot (${ t }) for integrated widget implementation`), null;
                }
                getSponsoredItemsToHide() {
                    const e = this.getWidgetItems(), t = this.getInsertionPointSlotNumber(), i = this.getNumOfSlotsToOccupy(), r = [];
                    let n = e.length, o, a;
                    for (; n >= t; n--)
                        if ((o = e[a = n - 1]).video_data['is-syndicated'] && null !== o.offsetParent && (r.push(o), r.length === i))
                            return r;
                    return __trcWarn('video tag loader - didn\'t find enough sponsored items for integrated widget replacement'), null;
                }
                getWidgetItems() {
                    return this.rbox.boxes;
                }
                getNumOfSlotsToOccupy() {
                    const e = this.videoConfig.slotMaxSize || 2, t = this.getInsertionPointSlotNumber();
                    if (void 0 === this.numOfSlotsToOccupy) {
                        const i = this.rbox.getEffectiveResponsiveRule();
                        if (i) {
                            const r = t % i.cells || i.cells, n = i.cells - r + 1;
                            this.numOfSlotsToOccupy = Math.min(n, e);
                        } else
                            this.numOfSlotsToOccupy = e;
                    }
                    return this.numOfSlotsToOccupy;
                }
                setPlacementSingleAdConf() {
                    this.videoConfig.slot = 1, this.videoConfig.slotMaxSize = 99, this.slotWidgetItem = null, this.insertionPointSlotNumber = void 0, this.numOfSlotsToOccupy = void 0, this.isTakeoverWidget = !0;
                }
                getContainerDimensions(e) {
                    if (e) {
                        const t = e.getBoundingClientRect();
                        this.containerWidth = t.width, this.containerHeight = t.height, this.containerRatio = this.containerWidth / this.containerHeight, this.containerRatio < 2.36 && this.containerRatio > 1 && (this.isContainerRatioValidForTakeOver = !0);
                    }
                }
                getMaxHeightSlot() {
                    const e = this.getWidgetItems();
                    let t = -1, i = e[0];
                    for (let r = 0; r < e.length; r++) {
                        const n = parseInt(getComputedStyle(e[r]).height, 10);
                        n > t && (t = n, i = e[r]);
                    }
                    return i;
                }
            }
            TRC.VideoAsItemUnitLoader = VideoAsItemUnitLoader;
        })(), (() => {
            class WidgetAdjacentVideoUnitLoader extends TRC.BaseVideoUnitLoader {
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark('videoEvalWidgetLoadUnitStart', null, '', '', 'videoEvalWidgetLoadUnitTime', TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark('videoEvalWidgetLoadUnitStop', null, '', '', 'videoEvalWidgetLoadUnitTime', TRC.PerfEvenType.STOP), this.setUnitParams(unit), unit;
                }
                getVideoContainerSelector(e) {
                    if (this.videoConfig.position) {
                        const t = this.createVideoContainer(e);
                        return `#${ t.id }`;
                    }
                    return null;
                }
                createVideoContainer(e) {
                    const t = document.createElement('div'), i = e._trc_container;
                    if (e.id ? t.id = e.id : t.id = Math.floor(2147483648 * Math.random()).toString(36), t.id += '-video', !i)
                        return __trcWarn('Cannot generate a selector for widget adjacent video container - widget container is not found'), null;
                    let r;
                    switch (this.videoConfig.position) {
                    case 'above':
                        r = i;
                        break;
                    case 'below':
                        r = i.nextSibling;
                        break;
                    default:
                        __trcWarn(`Unknown position in video config: ${ this.videoConfig.position }`);
                    }
                    return e.insertBefore(t, r), t;
                }
            }
            TRC.WidgetAdjacentVideoUnitLoader = WidgetAdjacentVideoUnitLoader;
        })(), TRC.InvokeVideoLoader = function () {
            TRC.VideoLoader = function e(t, i, r, n, o) {
                this.trcManager = t, this.videoConfig = i, this.placement = r, this.unifiedPlacement = i.unifiedPlacement, this.taboolaContainer = n, this.trcResponse = o, this.consentData = t.consentState || TRC.consentData || {};
            }, TRC.VideoLoader.prototype.CALLBACK_NAME_PREFIX = 'videoCallback', TRC.VideoLoader.prototype.valueOrEmptyString = function (e) {
                return null !== e && void 0 !== e ? e : '';
            }, TRC.VideoLoader.prototype.loadVideo = function (t) {
                if (TRC.botDetected)
                    __trcDebug('video loader - not loading. Bot detected.');
                else if (this.blockVideo)
                    __trcDebug('video loader - not loading. Video was blocked due to configuration.');
                else {
                    if (!TRC.Browser['ieUpto'](10)) {
                        var i = this.videoConfig.scriptUrlTemplate, r = TRC.util.isTrue(TRCImpl.global['enable-video-ajax']);
                        TRC.pConsole('video loader', 'info', 'loading video for placement: ' + this.placement);
                        var n = TRC.URL.prototype.getParameter.call(location.href, 'video-integration-variant');
                        if (null === n && (n = this.trcManager.global['video-integration-variant']), i) {
                            var o = document.createElement('script');
                            o.id = this.taboolaContainer.id + '-v-loader';
                            var a = this.genVideoCallback(t);
                            o.src = e.trcBind(this, t, n, TRC.shiftDomain(i), a)(), TRC.performance && TRC.performance.mark('videoJsonpRequestStart', null, '', '', 'videoJsonpRequestTime', TRC.PerfEvenType.START), r ? this.loadVideoByAjax(o.src, a) : this.taboolaContainer.appendChild(o);
                        } else
                            TRC.pConsole('video loader', 'error', 'error while loading video for placement: ' + this.placement + '. missing script url template in response');
                        return !0;
                    }
                    __trcDebug('video loader - not loading. Unsupported browser.');
                }
            };
            var e = function (e, i, n, o) {
                    return n.replace('{PUBLISHER_NAME}', TRC.publisherId).replace('{UNIT_TYPE}', encodeURIComponent(this.videoConfig.unitType)).replace('{UNIT_LOCATION}', encodeURIComponent(this.valueOrEmptyString(this.videoConfig.unitLocation))).replace('{SOURCE_PAGE_TYPE}', this.trcManager.getItemType()).replace('{PLACEMENT_NAME}', encodeURIComponent(this.getPlacementName())).replace('{UNIFIED_PLACEMENT_NAME}', encodeURIComponent(this.valueOrEmptyString(this.getUnifiedPlacementName()))).replace('{USER_ID}', TRC.pageManager.getUserId()).replace('{CALLBACK_NAME}', o).replace('{REFERRER}', encodeURIComponent(this.trcManager.getReferrer())).replace('{PAGE_URL}', encodeURIComponent(this.valueOrEmptyString(this.getItemUrlForVideo()))).replace('{CACHE_BUSTER}', this.getScriptCacheBuster()).replace('{PLATFORM}', this.valueOrEmptyString(this.videoConfig.platform)).replace('{NORM_PLATFORM}', this.valueOrEmptyString(this.videoConfig.fullyNormalizedPlatform)).replace('{COUNTRY}', this.valueOrEmptyString(this.videoConfig.country)).replace('{TAG_ID}', this.valueOrEmptyString(this.videoConfig.tagId)).replace('{VARIANT}', this.valueOrEmptyString(this.videoConfig.variant)).replace('{INTEGRATION_VARIANT}', this.valueOrEmptyString(i)).replace('{SESSION_ID}', this.valueOrEmptyString(this.trcManager.getSessionId())).replace('{SOURCE_ITEM_ID}', this.valueOrEmptyString(this.trcManager.getItemId())).replace('{VIEW_ID}', this.valueOrEmptyString(TRC.pageManager.getPageData())).replace('{GEO_LAT}', this.valueOrEmptyString((r('loc') || {}).lat)).replace('{GEO_ING}', this.valueOrEmptyString((r('loc') || {}).ing)).replace('{DEVICE_IFA}', this.valueOrEmptyString(this.trcManager.deviceId)).replace('{APP_ID}', this.valueOrEmptyString(r('appid'))).replace('{SESSION_DATA}', this.valueOrEmptyString(this.getSessionData())).replace('{REQUEST_ID}', this.valueOrEmptyString(this.getRequestId())).replace('{APP_NAME}', this.valueOrEmptyString(r('app'))).replace('{CONSENT_DAISY_BIT}', this.valueOrEmptyString(this.getConsentString())).replace('{GDPR_APPLIES}', this.valueOrEmptyString(this.getGdprApplies())).replace('{SC_PREDICTIONS}', this.valueOrEmptyString(this.getPredictions())).replace('{OPEN_EXCHANGE_ENABLED}', this.valueOrEmptyString(this.getOpenExchangeEnabled())).replace('{EXTERNAL_VIEW_ID}', this.valueOrEmptyString(this.getExternalViewId())).replace('{SOURCE_ITEM_ID}', this.valueOrEmptyString(this.getSourceItemId())).replace('{SOURCE_ITEM_ID_INT}', this.valueOrEmptyString(this.getSourceItemId())).replace('{PUBLISHER_ID}', this.valueOrEmptyString(this.getPublisherId())).replace('{SDK_NAME}', encodeURIComponent(this.valueOrEmptyString(r('sdkt')))).replace('{SDK_VERSION}', this.valueOrEmptyString(r('sdkv'))).replace('{OS}', encodeURIComponent(this.valueOrEmptyString(r('os')))).replace('{USER_ID_SOURCE}', this.valueOrEmptyString(this.getUserIdSource())).replace('{FAGG}', this.valueOrEmptyString(this.videoConfig.aggLevel || 1)).replace('{CCPA_DNS}', this.valueOrEmptyString(this.getCcpaDoNotSell())).replace('{CCPA_PRIVACY}', this.valueOrEmptyString(this.getCcpaPrivacyString())).replace('{REGION}', this.valueOrEmptyString(this.getRegion())).replace('{HAS_GDPR_CONSENT}', this.valueOrEmptyString(this.getHasGDPRConsent())).replace('{TCF_VERSION}', this.valueOrEmptyString(this.getTCFVersion())).replace('{CMP_STATUS}', this.valueOrEmptyString(this.consentData.cmpStatus)).replace('{TABOOLA_NETWORK_ID}', this.valueOrEmptyString(this.getTaboolaNetworkId())).replace('{AB_TEST_PERCENT}', this.valueOrEmptyString(t('vidABTestPercent'))).replace('{AB_TEST_LAYER}', this.valueOrEmptyString(t('vidABTestLayer')));
                }, t = function (e) {
                    try {
                        var t;
                        return TRC.URL.prototype.getParameter.call(i(), 'tb_' + e, !1);
                    } catch (e) {
                        return '';
                    }
                }, i = function () {
                    return window.TRCImpl.getItemUrlQueryString && 'function' == typeof window.TRCImpl.getItemUrlQueryString ? window.TRCImpl.getItemUrlQueryString() || '' : document.location.search;
                }, r = function (e) {
                    if (n() && void 0 !== TRCImpl.additional_data.sdkd[e])
                        return TRCImpl.additional_data.sdkd[e];
                }, n = function () {
                    return void 0 !== TRCImpl.additional_data && void 0 !== TRCImpl.additional_data.sdkd;
                };
            TRC.VideoLoader.prototype.loadVideoByAjax = function (e, t) {
                var i = new XMLHttpRequest();
                i.open('GET', this.addProtocolToUrl(e), !0), i.setRequestHeader('Content-Type', 'text/plain'), i.withCredentials = !0, i.addEventListener('readystatechange', o(t)), TRC.performance && TRC.performance.mark('videoAjaxStart', null, '', '', 'videoAjaxRoundtrip', TRC.PerfEvenType.START), i.send(null);
            }, TRC.VideoLoader.prototype.addProtocolToUrl = function (e) {
                return 0 === e.indexOf('//') && (e = TRC.PROTOCOL + e), e;
            };
            var o = function (e) {
                for (var t = e.split('.') || [], i = window, r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (!i[n]) {
                        i = function () {
                        };
                        break;
                    }
                    i = i[n];
                }
                return i;
            };
            TRC.VideoLoader.prototype.generateCallbackName = function () {
                var e, t = this.getCallbacksObjectKey();
                return TRC[t] = TRC[t] || {}, e = TRC[t].auto_gen_callback_seq = TRC[t].auto_gen_callback_seq + 1 || 1, this.CALLBACK_NAME_PREFIX + e;
            }, TRC.VideoLoader.prototype.genVideoCallback = function () {
                throw new Error('This is an abstract method that should be inherited.');
            }, TRC.VideoLoader.prototype.getCallbacksObjectKey = function () {
                throw new Error('This is an abstract method that should be inherited.');
            }, TRC.VideoLoader.prototype.getItemUrlForVideo = function () {
                var e = [], t = '', i, r, n, o, a;
                if (!(i = this.trcManager.getItemUrl()))
                    return null;
                if (r = this.getVideoParametersToKeep(), (n = (n = this.getWindowLocationSearch()).substr(1)).length) {
                    e = n.split('&');
                    for (var s = 0; s < e.length; s++)
                        (o = e[s].split('=')[0]).length && -1 !== r.indexOf(o) && -1 === i.indexOf(o.concat('=')) && (t = t.concat(o, '=', e[s].split('=')[1], '&'));
                    t.length >= 1 && (t = t.substring(0, t.length - 1), t = (a = -1 === i.indexOf('?') ? '?' : '&').concat(t)), i = i.concat(t);
                }
                return i;
            }, TRC.VideoLoader.prototype.getSessionData = function () {
                return this.trcResponse['session-data'];
            }, TRC.VideoLoader.prototype.getRequestId = function () {
                return this.trcResponse['req'];
            }, TRC.VideoLoader.prototype.getPlacementName = function () {
                return this.videoConfig.placement || this.placement;
            }, TRC.VideoLoader.prototype.getUnifiedPlacementName = function () {
                return this.unifiedPlacement;
            }, TRC.VideoLoader.prototype.getPredictions = function () {
                return this.videoConfig.predictions;
            }, TRC.VideoLoader.prototype.getExternalViewId = function () {
                return this.videoConfig.rid;
            }, TRC.VideoLoader.prototype.getOpenExchangeEnabled = function () {
                return this.videoConfig.oee;
            }, TRC.VideoLoader.prototype.getSourceItemId = function () {
                return this.videoConfig.sii;
            }, TRC.VideoLoader.prototype.getScriptCacheBuster = function () {
                return new Date().getTime().toString();
            }, TRC.VideoLoader.prototype.getWindowLocationSearch = function () {
                return window.location.search || '';
            }, TRC.VideoLoader.prototype.getVideoParametersToKeep = function () {
                return this.trcManager.global['video-tag-keep-url-params'] || [
                    'vstaging',
                    'keyword',
                    'customTB'
                ];
            }, TRC.VideoLoader.prototype.getPublisherId = function () {
                return this.videoConfig.tpubid;
            }, TRC.VideoLoader.prototype.getUserIdSource = function () {
                return this.videoConfig.uis;
            }, TRC.VideoLoader.prototype.getCcpaDoNotSell = function () {
                return this.videoConfig.ccpaDns;
            }, TRC.VideoLoader.prototype.getCcpaPrivacyString = function () {
                return this.videoConfig.ccpaPrivacy;
            }, TRC.VideoLoader.prototype.getRegion = function () {
                return this.videoConfig.region;
            }, TRC.VideoLoader.prototype.getHasGDPRConsent = function () {
                return this.videoConfig.hasGDPRConsent;
            }, TRC.VideoLoader.prototype.getConsentDaisyBit = function () {
                return this.consentData.consentData || this.consentData.consentDaisyBit;
            }, TRC.VideoLoader.prototype.getTCFVersionByConsentStr = function () {
                return this.consentData.tcString ? 2 : this.getConsentDaisyBit() ? 1 : void 0;
            }, TRC.VideoLoader.prototype.getTCFVersionByMethodImpl = function () {
                return 'function' == typeof window.__tcfapi ? 2 : 'function' == typeof window.__cmp ? 1 : void 0;
            }, TRC.VideoLoader.prototype.getTCFVersion = function () {
                return this.videoConfig.tcfVersion || this.getTCFVersionByConsentStr() || this.getTCFVersionByMethodImpl();
            }, TRC.VideoLoader.prototype.getConsentString = function () {
                return 2 == this.getTCFVersion() ? this.consentData.tcString : this.getConsentDaisyBit();
            }, TRC.VideoLoader.prototype.getTaboolaNetworkId = function () {
                return this.videoConfig.tnetid;
            }, TRC.VideoLoader.prototype.getGdprApplies = function () {
                return this.trcManager.global['video-gdpr-applies-use-requires-consent'] ? this.videoConfig.gdprApplies : this.consentData.gdprApplies;
            };
        }, TRC.InvokeVideoTagLoader = function () {
            TRC.VideoTagLoader = function e(t, i, r, n, o) {
                n && 'rbox-only-video' === n.mode && (this.invisibleContainer = '#' + r.container.id), this.blockVideo = t.blockVideoLoader || !t['before-video-load'](), this.blockVideo || (TRC.VideoLoader.call(this, t, i, r.placement, r.container, o), this.options = r, this.videoConfig = i, this.videoConfig.isHip = this.isHip(n), this.videoConfig.rboxContainerId = n && n.id, this.unitLoader = this.initUnitLoader(i, r, n, t));
            }, TRC.VideoTagLoader.prototype = __trcObjectCreate(TRC.VideoLoader.prototype), TRC.VideoTagLoader.prototype.LOCATION_TYPES = {
                ABOVE: 'above',
                BELOW: 'below',
                ITEM: 'item',
                STANDALONE: 'standalone',
                SINGLE_MANAGER: 'singleManager'
            }, TRC.VideoTagLoader.prototype.initUnitLoader = function (e, t, i, r) {
                switch (e.position) {
                case this.LOCATION_TYPES.STANDALONE:
                    return new TRC.StandaloneVideoUnitLoader(e, t);
                case this.LOCATION_TYPES.ITEM:
                    return new TRC.VideoAsItemUnitLoader(e, t, i);
                case this.LOCATION_TYPES.SINGLE_MANAGER:
                    return new TRC.SingleVideoManagerUnitLoader(e, r);
                case this.LOCATION_TYPES.ABOVE:
                case this.LOCATION_TYPES.BELOW:
                    return new TRC.WidgetAdjacentVideoUnitLoader(e);
                default:
                    return new TRC.SliderVideoUnitLoader(e);
                }
            }, TRC.VideoTagLoader.prototype.setGlobalUnitParams = function (e) {
                this.trcManager && this.trcManager.framework && 'mobile-sdk' === this.trcManager.framework && (e.set('isSDK', !0), e.set('widgetPlacement', this.getPlacementName())), this.options && this.options.isFeed && this.options.container && e.set('feedContainer', this.options.container);
                var t = this.getPlacementName();
                this.options && this.options.sca && this.isFeedHasSC(this.options.sca, t) && e.set('placementWithScAdjacency', t), TRC.filledImpressions = TRC.filledImpressions || [], e.on('filledImpression', function (e) {
                    TRC.filledImpressions.push(e);
                });
            }, TRC.VideoTagLoader.prototype.getCallbacksObjectKey = function () {
                return 'videoTagCallbacks';
            }, TRC.VideoTagLoader.prototype.genVideoCallback = function () {
                var e = this.generateCallbackName(), t = this;
                return TRC.videoTagCallbacks[e] = function (e) {
                    if (TRCImpl.global['enable-video-ajax']) {
                        if (!t.isXHRDone(e.target))
                            return;
                        TRC.performance && TRC.performance.mark('videoAjaxStop', null, '', '', 'videoAjaxRoundtrip', TRC.PerfEvenType.STOP), e = t.parseTBResponse(e.target.responseText);
                    }
                    var i, r;
                    if (TRC.performance && TRC.performance.mark('videoJsonpRequestStop', null, '', '', 'videoJsonpRequestTime', TRC.PerfEvenType.STOP), (e = e || {}).tags && e.tags[0]) {
                        (i = t.getLiteUnitVersion(e.tags[0].liteUnitBootSrc || t.videoConfig.liteUnitBootSrc)) || (i = e.tags[0].unitBootSrc || t.videoConfig.unitBootSrc), window.TRC.liteUnit && (i = t.getLiteUnitFromTRCConfig(i));
                        var n = t.getVideoMacrosLiteUnitVersion(e.tags[0].url);
                        n && -1 === window.location.href.indexOf('static-test-files.taboolasyndication') && (i = t.replaceVersion(i, n));
                        var o = TRC.isAMP ? window.context.location.search : window.TRCImpl.getItemUrlQueryString() || '';
                        (o.indexOf('tb_liteUnitUrl') > -1 || o.indexOf('tb_liteUnitVersion') > -1) && (i = t.getVersionFromUrl(i, o)), (r = document.createElement('script')).src = i, r.onload = function () {
                            window.TRC = window.TRC || {}, window.TRC.liteUnit = window.TRC.liteUnit || {}, TRCImpl.global['enable-mw-no-items-exit'] ? window.TRC.liteUnit.abTest = 'scadjtst1_vA' : TRCImpl.global['enable-mw-content-ready-margins'] ? window.TRC.liteUnit.abTest = 'scadjtst1_vB' : TRCImpl.global['enable-mw-control'] && (window.TRC.liteUnit.abTest = 'scadjtst1_vC'), window.TRC.liteUnit && window.TRC.liteUnit.abTest && (window.cmTag.set('pixels.startWithABT.isFire', !0), window.cmTag.push('abTest', window.TRC.liteUnit.abTest));
                            var i = t.videoConfig.containerSelector || t.unitLoader.getVideoContainerSelector(t.taboolaContainer) || t.invisibleContainer, r;
                            i && (window.cmTag.set('parentSelector', i), r = document.querySelector(i));
                            var n = t.unitLoader.loadUnit(e, r);
                            n && t.setGlobalUnitParams(n);
                        }, document.getElementsByTagName('head')[0].appendChild(r);
                    }
                }, 'TRC.' + this.getCallbacksObjectKey() + '.' + e;
            }, TRC.VideoTagLoader.prototype.isXHRDone = function (e) {
                return 200 === e.status && e.readyState === XMLHttpRequest.DONE;
            }, TRC.VideoTagLoader.prototype.parseTBResponse = function (e) {
                var t;
                try {
                    TRC.performance && TRC.performance.mark('videoAjaxParsingStart', null, '', '', 'videoAjaxParsing', TRC.PerfEvenType.START), t = JSON.parse(this.extractJSONFromResponse(e));
                } catch (e) {
                    t = void 0;
                } finally {
                    TRC.performance && TRC.performance.mark('videoAjaxParsingStop', null, '', '', 'videoAjaxParsing', TRC.PerfEvenType.STOP);
                }
                return t;
            }, TRC.VideoTagLoader.prototype.extractJSONFromResponse = function (e) {
                return e.slice(e.indexOf('(') + 1, e.lastIndexOf(')'));
            }, TRC.VideoTagLoader.prototype.getLiteUnitVersion = function (e) {
                if (e && 'lite-unit-boot-src' !== (e = decodeURIComponent(e))) {
                    var t = this.getUnitType();
                    if (t)
                        return e.replace('{{UNIT_TYPE}}', t).replace('{{PLATFORM}}', TRC.dom.isDesktop() ? 'Desktop' : 'Mobile');
                }
                return '';
            }, TRC.VideoTagLoader.prototype.getUnitType = function () {
                for (var e in this.UNIT_TYPES)
                    if (this.UNIT_TYPES[e].indexOf(this.videoConfig.unitType) > -1)
                        return e;
                return '';
            }, TRC.VideoTagLoader.prototype.UNIT_TYPES = {
                Slider: [
                    '46',
                    '59'
                ],
                Inline: [
                    '193',
                    '198',
                    '199',
                    '194',
                    '216',
                    '48',
                    '32',
                    '215'
                ],
                WidgetItem: [
                    '226',
                    '227',
                    '248',
                    '4',
                    '5'
                ],
                FeedManager: [
                    '244',
                    '245',
                    '247'
                ],
                VideoForPerformance: [
                    '232',
                    '233'
                ],
                RecoReelWidget: [
                    '254',
                    '255'
                ],
                StoriesWidget: [
                    '143',
                    '144'
                ],
                Instream: [
                    '107',
                    '108'
                ]
            }, TRC.VideoTagLoader.prototype.getLiteUnitFromTRCConfig = function (e) {
                return window.TRC.liteUnit.liteUnitVersion && (e = this.getLiteUnitVersion(window.TRC.liteUnit.liteUnitVersion)), window.TRC.liteUnit.version && (e = this.replaceVersion(e, window.TRC.liteUnit.version)), e;
            }, TRC.VideoTagLoader.prototype.replaceVersion = function (e, t) {
                return e.replace(/\d+[_|.]\d+[_|.]\d+/, t);
            }, TRC.VideoTagLoader.prototype.getVideoMacrosLiteUnitVersion = function (e) {
                for (var t = new RegExp('liteUnitVersion', 'gi'), i = void 0; t.exec(e);)
                    i = t.lastIndex;
                if (void 0 !== i) {
                    var r = (e = (e = e.substring(i)).substring(2, e.indexOf(');'))).replace(/\'|\"|\s+/g, '');
                    if (r)
                        return r;
                }
            }, TRC.VideoTagLoader.prototype.getVersionFromUrl = function (e, t) {
                var i = void 0, r = void 0;
                return t.split('&').forEach(function (e) {
                    e.indexOf('tb_liteUnitUrl') > -1 ? i = e.split('=')[1] : e.indexOf('tb_liteUnitVersion') > -1 && (r = e.split('=')[1]);
                }), i && (e = this.getLiteUnitVersion(i)), r && (e = this.replaceVersion(e, r)), e;
            }, TRC.VideoTagLoader.prototype.isFeedHasSC = function (e, t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t)
                        return !0;
                return !1;
            }, TRC.VideoTagLoader.prototype.isHip = function (e) {
                var t = [
                    '4',
                    '254'
                ];
                if (!e || !e.trcResponse || !e.trcResponse.vtag)
                    return !1;
                var i = e.trcResponse.vtag;
                return (!i.advancedVideoConfiguration || 'true' !== i.advancedVideoConfiguration['mid-article-hip-opt-out']) && i.unitType && t.indexOf(i.unitType.toString()) > -1;
            };
        }, (() => {
            class e {
                constructor() {
                    this.virtualPlacementsMap = {}, this.response = {};
                }
                static handleVirtualPlacement(e, t) {
                    const {virtualPlacementsManager: i} = e, r = i.response[t];
                    if (r) {
                        const n = __trcCopyProps(r, {});
                        n.id = t, i.createVirtualPlacement(n, t, e);
                    }
                }
                createVirtualPlacement(e, t, i) {
                    if (!e || this.virtualPlacementsMap[t])
                        return;
                    this.virtualPlacementsMap[t] = e;
                    const r = i.getOrCreateContainer(e);
                    i.setPlacementDataInPreloadRequest(t, r);
                }
            }
            TRC.VirtualPlacementsManager = e;
        })(), TRC.visibility = TRC.visibility || {}, TRC.visibility = function (e, t) {
            function i(e) {
                var t = TRC.dom.getViewportVerticalRange(), i = TRC.dom.getElementRect(e);
                return i.top < 0 ? Math.max(i.top, i.bottom) : t.max - i.top - t.min;
            }
            function r(e) {
                var t = TRC.dom.getViewportHorizontalRange(), i = TRC.dom.getElementRect(e);
                return i.left < 0 ? Math.max(i.left, i.right) : t.max - i.left - t.min;
            }
            var n = {
                getViewPortOffsets: function (e) {
                    var t, n;
                    return {
                        verticalOffset: i(e),
                        horizontalOffset: r(e)
                    };
                },
                getMinViewPortOffsets: function (e) {
                    var t = this.getViewPortOffsets(e);
                    return t.verticalOffset < 0 && t.horizontalOffset < 0 ? Math.max(t.verticalOffset, t.horizontalOffset) : Math.min(t.verticalOffset, t.horizontalOffset);
                },
                isInViewPortWithOffset: function (e, t) {
                    var i;
                    return !(this.getMinViewPortOffsets(e) < (t = t || 0));
                }
            };
            return e._trcIsUTactive && (n.getVerticalVPShift = i, n.getHorizontalVPShift = r), n;
        }(window, document), (() => {
            const e = {
                defaultMaxSlotsGeometryPerPage: 50,
                maxDefaultThrottleNumber: 1000,
                defaultThresholdThrottleNumber: 10
            };
            class t {
                constructor(e) {
                    this.rBoxWidget = e, this.trcManager = this.rBoxWidget.trc, this.widgetContainer = this.rBoxWidget.container, this.widgetItems = this.rBoxWidget.boxes, this.uiModeName = this.rBoxWidget.mode_name, this.MIN_VISIBLE_ITMES = this.trcManager.global['min-visible-items'] || 1, this.init();
                }
                init() {
                    this.resetVisibilityData(), this.rBoxWidget.isProviderIframe || (this.isManualVisibilityMode() ? TRC.listen(`visible::${ this.rBoxWidget.orig_placement }`, this.reportManualVisibilityIfVisibleByRects.trcBind(this)) : this.initVisibilityObserver());
                }
                resetVisibilityData() {
                    this.organicVisibleItems = {}, this.sponsoredVisibleItems = {}, this.exchangeVisibleItems = {}, this.nativeVisibleItems = {}, this.visibleItemsIdxList = [];
                }
                isManualVisibilityMode() {
                    return !((this.rBoxWidget.isFeedCard || window.AMP_MODE) && 'mobile-sdk' !== this.trcManager.framework || !this.rBoxWidget.manualVisibilityTrigger && !this.trcManager.manualVisibilityTrigger || !this.trcManager.global['enable-manual-visible']);
                }
                reportVisibility() {
                    const e = new TRC.PlacementEventPostData(), t = this.trcManager.getProperty(this.uiModeName, 'thumbnail-position', this.rBoxWidget.propertiesOverride), i = [], r = [], n = [], o = [], a = [], s = [], l = [], c = [], d = [], h = [], u = [];
                    if (!this.visibilityReported && (Object.keys(this.organicVisibleItems).forEach(e => {
                            i.push(this.organicVisibleItems[e].id), n.push(this.organicVisibleItems[e].type);
                        }), Object.keys(this.sponsoredVisibleItems).forEach(e => {
                            r.push(this.sponsoredVisibleItems[e].id), o.push(this.sponsoredVisibleItems[e].type), l.push(this.sponsoredVisibleItems[e].publisher);
                        }), Object.keys(this.exchangeVisibleItems).forEach(e => {
                            a.push(this.exchangeVisibleItems[e].id), s.push(this.exchangeVisibleItems[e].type), c.push(this.exchangeVisibleItems[e].publisher);
                        }), Object.keys(this.nativeVisibleItems).forEach(e => {
                            d.push(this.nativeVisibleItems[e].id), h.push(this.nativeVisibleItems[e].type), u.push(this.nativeVisibleItems[e].publisher);
                        }), i.length > 0 || r.length > 0 || a.length > 0 || d.length > 0 || this.rBoxWidget.isProviderIframe)) {
                        TRC.pConsole(this.uiModeName, 'info', 'sending new visible event', ''), e.setFullItemList(this.rBoxWidget.getJsonTargetItemsList(this.rBoxWidget.fullEventItemsHash)), this.trcManager.enablePageGeometry && this.trcManager.addGeometryPageData(e, this.trcManager.global['page-geometry-selectors']), this.trcManager.enablePageGeometryExtended && this.trcManager.addGeometryExtendedPageData(e), this.trcManager.enablePlacementGeometry && this.trcManager.addGeometryPlacementData(e, this.widgetContainer), TRC.EventsAPI.dispatchVisible(this.rBoxWidget.response.trc, this);
                        const p = {
                            il: i.join(','),
                            sil: r.join(','),
                            ilt: n.join(','),
                            navil: d.join(','),
                            silt: o.join(','),
                            ntil: a.join(','),
                            ntilt: s.join(','),
                            navilt: h.join(','),
                            niltp: c.join(','),
                            siltp: l.join(','),
                            naviltp: u.join(','),
                            tp: t
                        };
                        this.processSpatialSlotsData(p), this.rBoxWidget.sendEvent('visible', p, e.getAll(), !0), !this.trcManager.global['disable-external-visibility-once'] && this.externalVisibleSent || (this.rBoxWidget.sendPlacementTrackingPixelsOnce('vi'), this.externalVisibleSent = !0), this.trcManager.global['disable-runHook'] ? (this.trcManager.getFunction(this.uiModeName, 'after-visible', this.rBoxWidget.propertiesOverride, this.rBoxWidget.internalContainer, this), TRC.CustomModulesManager.runHook('after-visible', this.uiModeName, this, this.rBoxWidget.propertiesOverride, this.rBoxWidget.internalContainer, this)) : this.trcManager.runHook(this, this.uiModeName, 'after-visible', this.rBoxWidget.propertiesOverride, !0, this.rBoxWidget.internalContainer, this), this.visibilityReported = !0;
                    }
                }
                static isSpatialEnabled(e) {
                    return TRC.util.isPercentEnabled(e.global, 'enable-spatial-data-per-page') || e.spatialSlotsThrottleTHPerPage;
                }
                processSpatialSlotsData(i) {
                    if (this.rBoxWidget.isProviderIframe)
                        return;
                    if (!t.isSpatialEnabled(this.trcManager))
                        return;
                    if (!this.isThrottleValidated())
                        return;
                    const r = this.trcManager.global['max-slots-geometry-per-page'] || e.defaultMaxSlotsGeometryPerPage, n = [], o = [];
                    let a = null;
                    this.trcManager.enableSlotsSaliency && (a = window.getComputedStyle(window.document.body)), this.visibleItemsIdxList.slice(-r).forEach(e => {
                        const i = this.rBoxWidget.boxes[e];
                        this.trcManager.enableSlotsGeometry && t.processVisibleItemGeometry(i, n), this.trcManager.enableSlotsSaliency && t.processVisibleItemSaliency(i, a, o);
                    });
                    const s = [];
                    if (0 === n.length && o.length > 0) {
                        const e = o.map(e => {
                            return e.id;
                        });
                        e.forEach((e, t) => {
                            const i = o[t];
                            delete i.id, s.push({
                                id: e,
                                ssd: i
                            });
                        }), i.spatialData = __trcJSONify(s);
                    } else if (n.length > 0 && 0 === o.length) {
                        const e = n.map(e => {
                            return e.id;
                        });
                        e.forEach((e, t) => {
                            const i = n[t];
                            delete i.id, s.push({
                                id: e,
                                sgd: i
                            });
                        }), i.spatialData = __trcJSONify(s);
                    } else if (n.length > 0 && o.length > 0) {
                        const e = n.map(e => {
                            return e.id;
                        });
                        e.forEach((e, t) => {
                            const i = n[t];
                            delete i.id;
                            const r = o[t];
                            delete r.id, s.push({
                                id: e,
                                sgd: i,
                                ssd: r
                            });
                        }), i.spatialData = __trcJSONify(s);
                    }
                }
                isThrottleValidated() {
                    const t = this.trcManager.spatialSlotsThrottleMax || e.maxDefaultThrottleNumber;
                    let i = this.trcManager.spatialSlotsThrottleTH;
                    if ('number' != typeof i && (i = e.defaultThresholdThrottleNumber), i !== t) {
                        if (!(i > 0))
                            return !1;
                        {
                            const e = Math.floor(Math.random() * t);
                            if (e > i)
                                return !1;
                        }
                    }
                    return !0;
                }
                static processVisibleItemGeometry(e, t) {
                    let i = {
                        id: -1,
                        x: -1,
                        y: -1,
                        h: -1,
                        w: -1
                    };
                    if (e.lastVisibleBoundingClientRect) {
                        const t = (e.lastVisibleBoundingClientRect.left + e.lastVisibleBoundingClientRect.pageXOffset).toFixed(2), r = (e.lastVisibleBoundingClientRect.top + e.lastVisibleBoundingClientRect.pageYOffset).toFixed(2);
                        i = {
                            id: e.video_data['item-id'],
                            x: t,
                            y: r,
                            h: e.lastVisibleBoundingClientRect.height.toFixed(2),
                            w: e.lastVisibleBoundingClientRect.width.toFixed(2)
                        };
                    }
                    t.push(i);
                }
                static processVisibleItemSaliency(e, t, i) {
                    const r = window.getComputedStyle(e), n = {
                            id: e.video_data['item-id'],
                            fsi: r.getPropertyValue('font-size'),
                            fst: r.getPropertyValue('font-style'),
                            fn: r.getPropertyValue('font-family'),
                            cbg: r.getPropertyValue('background-color'),
                            dbg: t.getPropertyValue('background-color')
                        };
                    i.push(n);
                }
                calculateVisibleItems(e, i, r) {
                    const n = r || this.rBoxWidget.boxes;
                    let o = 0;
                    return this.visibleItemsIdxList = [], n.forEach((r, n) => {
                        const a = r.video_data || r, s = this.rBoxWidget.fullEventItemsHash[a['item-id']];
                        i || r.isVisible || e && this.isElementVisibleByRects(r, e) ? (a['is-syndicated'] ? t.addVisibleItemToList(this.sponsoredVisibleItems, a, 'is-syndicated') : a['is-in-network'] ? t.addVisibleItemToList(this.exchangeVisibleItems, a, 'is-in-network') : a['is-native'] ? t.addVisibleItemToList(this.nativeVisibleItems, a, 'is-native') : t.addVisibleItemToList(this.organicVisibleItems, a, 'is-organic'), s.tids = 'vp', o++, this.visibleItemsIdxList.push(n)) : 'vp' !== s.tids && (s.tids = 'nvp');
                    }), o;
                }
                static addVisibleItemToList(e, t) {
                    e[t['item-id']] = {
                        id: t['item-id'],
                        type: t.type,
                        publisher: t.publisher
                    };
                }
                isVisibleWidget() {
                    return this.calculateVisibleItems() >= this.MIN_VISIBLE_ITMES || this.widgetContainer.isVisible;
                }
                initVisibilityObserver() {
                    const e = this.reportVisibility.trcBind(this), t = this.isVisibleWidget.trcBind(this);
                    if (TRC.tlf && console.time(`visibility - ${ this.uiModeName }`), this.resetVisibilityData(), !this.isVisibilityObserverInitialized) {
                        const i = {
                            targetElement: this.widgetContainer,
                            enableDelayedVisibilityCheck: !0,
                            visibleWidgetPredicate: t,
                            onTrigger: e,
                            onEnter: () => {
                                TRC.util.isPercentEnabled(this.trcManager.global, 'guarantee-card-clash-detection') && TRC.ModuleLoader.load('card-interference-detector', TRC.CardInterferenceDetector, () => {
                                    TRC.CardInterferenceDetector.detectCardInterrupted(this.widgetContainer);
                                });
                            }
                        };
                        TRC.intersections.isInViewPort(i);
                        const r = this.rBoxWidget.listContainer && this.rBoxWidget.listContainer.heatmap;
                        this.widgetItems.forEach(i => {
                            const n = {
                                targetElement: i,
                                enableDelayedVisibilityCheck: !0,
                                visibleWidgetPredicate: t,
                                onTrigger: e,
                                onEnter: () => {
                                    return r && r.captureItemTime(i.video_data.id);
                                }
                            };
                            TRC.intersections.isInViewPort(n);
                        }), this.isVisibilityObserverInitialized = !0;
                    }
                    TRC.tlf && console.timeEnd(`visibility - ${ this.uiModeName }`);
                }
                reportManualVisibilityIfVisibleByRects(e) {
                    (this.calculateVisibleItems(e) >= this.MIN_VISIBLE_ITMES || this.isElementVisibleByRects(this.widgetContainer, e)) && this.reportVisibility();
                }
                isElementVisibleByRects(e, i) {
                    const r = (e = e || this.widgetContainer).getBoundingClientRect();
                    if (!t.hasVolume(r))
                        return !1;
                    const n = this.rBoxWidget.getBoundingClientRect(r, i), o = n.left + Math.round((n.right - n.left) / 2), a = n.top + Math.round((n.bottom - n.top) / 2), s = TRC.Browser.operaUpto(10.1) || TRC.Browser.safariUpto(4) ? document.elementFromPoint(o + document.body.scrollLeft, a + document.body.scrollTop) : document.elementFromPoint(o, a), l = t.getRootBounds(i), c = o > 0 && o < l.maxX && a > 0 && a < l.maxY;
                    return i ? c : c && s && t.isAncestor(s, e);
                }
                static hasVolume(e) {
                    return e.top !== e.bottom;
                }
                static getRootBounds(e) {
                    const t = {};
                    return e ? (t.maxX = e.rootBounds.width, t.maxY = e.rootBounds.height, t) : (t.maxX = 'CSS1Compat' === document.compatMode && document.documentElement.clientWidth || document.body.clientWidth, t.maxY = 'CSS1Compat' === document.compatMode && document.documentElement.clientHeight || document.body.clientHeight, t);
                }
                static isAncestor(e, i) {
                    return !(!e.parentNode || e.parentNode === document.documentElement && e !== i) && (e === i || t.isAncestor(e.parentNode, i));
                }
            }
            TRC.WidgetVisibilityReporter = t;
        })(), (() => {
            const e = -1;
            class t {
                constructor(e) {
                    this.initialUrl = e.initialUrl, this.initialUrlTimeout = e.initialUrlTimeout, this.initialUrl && (this.initialUrlPending = !0);
                    const i = new Worker(t._buildBlob(this.initialUrl, this.initialUrlTimeout));
                    TRC.URL = TRC.URL || TRC.webkitURL, i.onmessage = this.onWorkerMessage.bind(this), this.worker = i, this.contextCallbacks = {}, this.context = 0;
                }
                handshake(e) {
                    const t = {
                        type: 'handshake',
                        _context: this._generateContextId()
                    };
                    this.contextCallbacks[t._context] = { resolve: e }, this.worker.postMessage(t);
                }
                xhr(t, i, r, n) {
                    const o = {
                        url: t,
                        timeout: i || 8000,
                        type: 'xhr',
                        _context: this._generateContextId()
                    };
                    t === this.initialUrl && this.initialUrlPending && (o._context = e), this.initialUrlPending = !1, this.contextCallbacks[o._context] = {
                        resolve: r,
                        reject: n
                    }, o._context !== e && this.worker.postMessage(o);
                }
                onWorkerMessage(e) {
                    const t = e.data, {
                            _context: i,
                            type: r,
                            error: n
                        } = t, o = this.contextCallbacks[i] || {}, {
                            resolve: a,
                            reject: s
                        } = o, l = 'xhrBlob' === r ? t.buffer : t.result;
                    a && 'function' == typeof a && !n ? a(l || {}) : 'function' == typeof s && s(), delete this.contextCallbacks[i];
                }
                _generateContextId() {
                    return ++this.context;
                }
                static _buildBlob(e, t) {
                    e = e || '';
                    let i = `/*! 20210729-2-RELEASE */\n\nfunction onHandshake(t){const e={_context:t,type:"handshake"};self.postMessage(e)}function fetch(t,e,o,n){t=t.replace("/trc/3/json?","/trc/3/json?wrkr=1&");const r=new XMLHttpRequest;r.withCredentials=!0,r.onreadystatechange=function(){r.readyState<4||200!==r.status||4===r.readyState&&o(r)},r.onerror=function(t){(new Image).src="http://trc.taboola.com/xhrworker-errors/log/2/debug?tim=10:24:11.81&type=xhrerror",n(t)},r.ontimeout=function(t){(new Image).src="http://trc.taboola.com/xhrworker-errors/log/2/debug?tim=10:24:11.81&type=xhrtimeout",n(t)},r.open("GET",t,!0),e&&(r.timeout=e),r.send("")}self.addEventListener("message",t=>{const e=t.data,{url:o,timeout:n,_context:r,type:s}=e;if("handshake"===s)return onHandshake(r);fetch(o,n,t=>{const e=t.responseText,o={result:e,type:s,_context:r};self.postMessage(o)},()=>{const t={error:!0,type:s,_context:r};self.postMessage(t)})},!1);const initialUrl="%%initialUrl%%",initialTimeout="%%timeout%%"||8e3;initialUrl&&fetch(initialUrl,initialTimeout,t=>{const e=t.responseText,o={result:e,_context:-1,type:"xhr"};postMessage(o)},()=>{const t={_context:-1,error:!0,type:"xhr"};postMessage(t)});`;
                    i = (i = i.replace('%%initialUrl%%', e)).replace('%%timeout%%', t || '');
                    const r = new Blob([i], { type: 'text/javascript' });
                    return window.URL.createObjectURL(r);
                }
            }
            TRC.initWorkerIfAvailable = function (e, i) {
                if (TRC.workerInited = !0, !TRC.worker && window.Worker && window.URL && window.URL.createObjectURL && TRCImpl.global['xhr-worker']) {
                    const r = new t({
                        initialUrl: e,
                        timeout: i
                    });
                    TRC.worker = r;
                    const n = setTimeout(() => {
                        __trcError('worker timeout'), o = () => {
                        }, TRC.worker = !1;
                    }, 200);
                    let o = () => {
                        return clearTimeout(n);
                    };
                    r.handshake(() => {
                        return o();
                    });
                }
            }, TRC.WebWorker = t;
        })(), function (e, t) {
            e.TRC = e.TRC || {};
            var i = function () {
                    return !0;
                }, r = function (i, r, n, o) {
                    var a = i + '/' + encodeURIComponent(n || e.TRC.publisherId) + '/log/3' + '/' + r;
                    return o && (a += '?' + t.TRCLogger.formatParams(o)), a;
                }, n = function (t, r) {
                    var n, o = new (e.XDomainRequest || e.XMLHttpRequest)();
                    return o.open(t, r), o.onload = i, o.onerror = i, o.ontimeout = i, o.onprogress = i, o.withCredentials = !0, o;
                };
            e.TRC.TRCLogger = t.TRCLogger = {
                post: function (e, i, o, a, s) {
                    var l = r(e, i, a, s), c = n('POST', l);
                    c.setRequestHeader && c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), c.send(t.TRCLogger.formatParams(o));
                },
                get: function (e, t, i, o) {
                    var a = r(e, t, o, i), s;
                    n('GET', a).send();
                },
                formatParams: function (e) {
                    var t = [];
                    for (var i in e)
                        e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + '=' + encodeURIComponent(e[i]));
                    return t.join('&');
                }
            };
        }(window, window['${jsScope}'.indexOf('{jsScope}') >= 0 ? 'TRC' : '${jsScope}']), function (win, doc) {
            TRC.performance && TRC.performance.mark('4.0');
            var protocol = TRC.PROTOCOL, getParameter = TRC.URL.prototype.getParameter, taboolaConsole = getParameter.call(location.href, 'trc_console'), timers, div;
            function invokeInheritedModules() {
                TRC.InvokeVideoLoader(), TRC.InvokePVideoLoader(), TRC.InvokeVideoTagLoader();
            }
            win.trc_debug_level = getParameter.call(location.href, 'taboola-debug'), TRC.tlf = !!getParameter.call(location.href, 'taboola-perf'), TRC.taboola_yield_report = !!getParameter.call(location.href, 'taboola-yield-report'), taboolaConsole && 'yes' === taboolaConsole.toLowerCase() && (TRC.taboolaConsole = !0, TRC.Manager.prototype.loadExternal('http://c2.taboola.com/console/console_loader.js', 'js')), isNaN(parseInt(win.trc_debug_level)) && (trc_debug_level = 1), TRC.callbacks = {
                mute: function () {
                    var e = TRCImpl.boxes, t;
                    if (TRCImpl.clearPreloadRequestLoaderAndCallNext(), TRC.Timeout.reset(), e)
                        for (t in e)
                            e[t].request = null;
                    TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.mute), TRC.pConsole('warning - mute!', 'warn', 'server returned mute', '');
                }
            }, TRC.trc_drawRBox = !1, TRC.listOrigin = new TRC.ListOriginBuilder(), TRC.baseDomain = TRC.baseDomain || protocol + '//cdn.taboola.com/libtrc/' + TRC.publisherId + '/', TRC.prototype = TRC.prototype || {}, TRC.Interval = function () {
                var intervals = {};
                return {
                    set: function (callback, interval) {
                        var aArgs = Array.prototype.slice.call(arguments, 2), intervalId = win.setInterval(function () {
                                'function' == typeof callback ? callback.apply(null, aArgs) : eval(callback);
                            }, interval);
                        return intervals[intervalId.toString()] = 1, intervalId;
                    },
                    clear: function (e) {
                        e && (win.clearInterval(e), delete intervals[e.toString()]);
                    },
                    reset: function () {
                        for (intervalId in intervals)
                            win.clearInterval(intervalId), delete intervals[intervalId.toString()];
                    }
                };
            }(), TRC.Timeout = (timers = {}, {
                set: function (e, t) {
                    var i = win.setTimeout(function () {
                        delete timers[i.toString()], e();
                    }, t);
                    return timers[i.toString()] = 1, i;
                },
                clear: function (e) {
                    e && (win.clearTimeout(e), delete timers[e.toString()]);
                },
                reset: function () {
                    var e;
                    for (e in timers)
                        win.clearTimeout(e), delete timers[e.toString()];
                }
            }), TRC.trcReady = function () {
                try {
                    TRC.pConsole('page', 'debug', 'libtrc : calling TRC.ready', ''), invokeInheritedModules(), TRC.implLoaded = !0;
                    var e = TRC.ready({ style: '.trc_rbox_container{direction:ltr;text-align:left}.trc_rbox_container [class*=span]{float:none;margin-left:0}.trc_multi_widget_container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.trc_multi_widget_container .trc_rbox_div{margin:0}.trc_rbox_header{border:0 solid;overflow:hidden;vertical-align:middle}.trc_rbox_container .trc_img{display:inline-block!important}.trc_rbox_header_icon_div{display:table-cell;vertical-align:baseline}.trc_rbox_header .trc_rbox_header_icon_div .trc_rbox_header_icon_img{vertical-align:middle;width:auto}.trc_rbox_header_icon_span{display:inline-table}.in_trc_header{position:relative!important;float:right;margin:0}#trc_rbox_css_loaded{overflow:hidden;width:0;height:0}.trc_rbox{margin-top:0}.trc_rbox_div{margin:0 0 3px;direction:ltr;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:auto;position:relative;width:auto;border:solid #ccc 1px}.loading-animation span{display:block}.videoCube{zoom:1;cursor:pointer;float:none;overflow:hidden;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.videoCube_hover,div.videoCube:hover{cursor:pointer}.videoCube span.video-title:hover,.videoCube_hover span.video-title{text-decoration:underline}.videoCube a{text-decoration:none;border:0;color:#000;cursor:pointer}.videoCube a,.videoCube a:hover,.videoCube a:link,.videoCube_hover a{text-decoration:none!important;outline:0}.videoCube a .thumbBlock{float:left;display:block;overflow:hidden!important}.videoCube a img,.videoCube img{border:0;display:block;margin:0;height:auto;width:auto}.videoCube .video-label{display:block;overflow:hidden}.videoCube .video-label{width:auto!important;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.videoCube .video-label-box.label-box-with-title-icon{display:table}.video-icon-container{float:left;display:table-cell;vertical-align:baseline}.video-icon-img{vertical-align:middle}.videoCube .video-duration{height:0;float:left;position:relative;color:#fff;font-size:11px}.videoCube .video-duration dt{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;background-color:#000;opacity:.6}.videoCube span.video-label.trc_ellipsis{position:relative;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.videoCube span.video-label.trc-smart-ellipsis{position:relative;overflow:hidden}.videoCube span.video-label.trc-smart-ellipsis ins{display:inline-block;text-decoration:inherit}.videoCube span.video-label.trc-smart-ellipsis.tbl-ltr-label{direction:ltr}.videoCube span.video-label.trc-smart-ellipsis.tbl-ltr-label ins{float:left;margin-right:5px;direction:ltr}.videoCube span.video-label.trc-smart-ellipsis.tbl-rtl-label{float:right;direction:rtl;width:100%!important}.videoCube span.video-label.trc-smart-ellipsis.tbl-rtl-label ins{float:right;margin-left:5px;direction:rtl}.videoCube span.video-label.trc-smart-ellipsis ins.lastLineEllipsis{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;width:100%}.video-duration.video-duration-detail div{color:#fff}.trc_rbox .sponsored{position:relative;display:block;overflow:visible;height:auto;width:auto;padding-right:0;text-align:right;font-size:9px}.trc_rbox_div{height:410px}.videoCube{direction:ltr;font-size:11px;margin:0;color:#000;border-width:0}.videoCube.vertical:first-child{border-top:0;margin-top:0}.videoCube.horizontal:first-child{border-left:0;margin-left:0}.videoCube_hover,div.videoCube:hover{background-color:#ebf0ff;color:#000}.videoCube .thumbBlock{margin:0;border-style:solid}.videoCube a img,.videoCube img{border-color:#ececec}.videoCube .video-label-box{margin-left:81px}.videoCube .video-label dt{font-weight:700}.videoCube .video-title{height:auto;margin-bottom:3px;white-space:normal}.videoCube .trc_inline_detail_spacer{display:inline-block;white-space:pre}.loading-animation{font-family:sans;font-size:1.5em;text-align:center;color:gray;height:100%}.trc_rbox_header{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-decoration:none;color:#000}.trc_header_right_part{position:absolute;left:50%;top:0}.branding_div{overflow:visible;float:right}.branding_div img{height:20px}.videoCube .branding .logoDiv{font-size:inherit;line-height:inherit;background:0 0;margin:0;padding:0}.videoCube .branding .logoDiv a{vertical-align:inherit;color:inherit;line-height:inherit}.videoCube .branding .logoDiv a span{vertical-align:inherit}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored{display:inline-block;float:none}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored.align-disclosure-right{float:right;margin-left:auto;padding-left:2px}.videoCube .video-label-box .branding.composite-branding{display:-webkit-box;display:-ms-flexbox;display:flex}.branding.composite-branding>*{display:inline-block;vertical-align:bottom}.branding .branding-separator{margin:0 2px;font-weight:400}.branding .branding-inner{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.video-label-box span.branding.inline-branding{display:inline-block}.trc_related_container div.horizontal{float:left;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.trc_related_container DIV.videoCube.thumbnail_bottom .thumbBlock,.trc_related_container DIV.videoCube.thumbnail_top .thumbBlock{float:none}.vidiscovery-note{display:none}.videoCube .thumbBlock .trc_sponsored_overlay_base{display:block;width:auto;margin-left:0;position:absolute;color:#fff!important}.videoCube .thumbBlock .trc_sponsored_overlay{opacity:.6;display:block;position:absolute}.videoCube .thumbBlock .trc_sponsored_overlay_base .sponsored{position:relative;display:block;overflow:visible;width:auto;text-align:center;padding:0 5px;margin-top:0}.videoCube .thumbBlock .trc_sponsored_overlay_base.round .trc_sponsored_overlay{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px}.videoCube .thumbBlock .trc_sponsored_overlay_base.round{margin-left:4px}.thumbnail-emblem,.videoCube .thumbnail-overlay,.videoCube:hover .thumbnail-overlay,.videoCube_hover .thumbnail-overlay{position:absolute;background:transparent no-repeat;background-size:contain;z-index:50}.thumbnail_bottom{padding-bottom:8px}.trc_related_container .logoDiv{font-family:Arial,Helvetica,sans-serif;white-space:nowrap;font-size:9px}.trc_related_container .logoDiv a{font-size:9px;text-decoration:none!important;color:#000;margin-right:1px;vertical-align:text-bottom}.logoDiv a span:hover{text-decoration:underline}.trc_rbox_header .logoDiv{font-size:1em}.trc_tl .trc_rbox_header .logoDiv{position:relative;z-index:1}.trc_tl .trc_rbox_header_span .trc_header_right_column{position:absolute;width:48%;left:52%;top:0}.trc_tl .trc_rbox_div .videoCube.horizontal{clear:left}.trc_tl .trc_rbox_div .videoCube.trc_tl_right_col{float:none;clear:right;margin-left:auto}.trc_tl .videoCube .video-title .branding{line-height:1.3em}.trc_tl .videoCube:hover span.branding,.trc_tl .videoCube_hover span.branding{text-decoration:none}.trc_tl .trc_rbox_div .videoCube.thumbnail_none a{vertical-align:top;overflow:visible}.trc_tl .videoCube .video-label-box{display:inline-block;vertical-align:top;width:100%}.trc_rbox_container.trc_expandable{overflow:hidden;max-height:0;transition-property:max-height;-webkit-transition-property:max-height;-moz-transition-property:max-height;-o-transition-property:max-height;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.trc_related_container .videoCube .thumbBlock .branding{position:absolute;bottom:0;z-index:1;width:100%;margin:0;padding:5px 0;text-align:center}.syndicatedItem .branding{margin:0}.trc-inplayer-rbox{background:#333;background:rgba(30,30,30,.9);bottom:0;position:absolute;height:300px;text-align:center}.trc-inplayer-rbox .trc_rbox_container{margin:50px auto 0;width:640px}.trc_rbox.trc-auto-size{width:100%;height:100%}.videoCube.thumbnail_under .video-title{min-height:2.58em}.videoCube.thumbnail_under .tbl-text-over-container{width:100%;position:absolute;z-index:1;left:0;bottom:0;min-height:66%;max-height:66%;padding-top:2px;padding-bottom:2px;line-height:1.25em}.videoCube.thumbnail_under .tbl-text-over-container .tbl-text-over{height:100%;width:100%;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 100%)}.videoCube.thumbnail_under .tbl-text-over-container span.branding,.videoCube.thumbnail_under .tbl-text-over-container span.video-description,.videoCube.thumbnail_under .tbl-text-over-container span.video-title{position:relative;z-index:1;padding:0 8px;margin:0}.videoCube.thumbnail_under .tbl-text-over-container span.video-title{margin-bottom:6px;min-height:auto}.videoCube.thumbnail_under .tbl-text-over-container .video-label-box{position:absolute;bottom:0;left:0;width:100%;padding:0 8px 6px 8px;min-height:auto}.trc-auto-size .trc_rbox_outer .trc_rbox_div{height:auto;width:auto}.trc-auto-size .trc_rbox_div .videoCube{height:auto}.trc-auto-size .trc_rbox_div .videoCube.trc-first-recommendation{margin-top:0}.trc_rbox .trc_rbox_outer .trc_rbox_div .videoCube.trc-first-in-row{margin-left:0}.trc_elastic .trc_rbox{width:auto}.trc_elastic .videoCube{overflow:hidden}.trc_elastic .videoCube .thumbBlock{background:transparent no-repeat center center;background-size:cover;position:absolute;display:inline-block;top:0;right:0;bottom:0;left:0;margin-left:0;margin-right:0}.trc_elastic .thumbBlock_holder{position:relative;width:100%}.trc_elastic .thumbnail_start .thumbBlock_holder{float:left;margin-right:10px}.trc_elastic .thumbnail_start.item-has-pre-label .thumbBlock_holder{margin-right:0}.trc_elastic .videoCube_aspect{width:1px}.trc_elastic .trc_rbox .trc_rbox_div{height:auto}.trc_elastic .thumbnail_start .trc-pre-label{float:left;padding-right:10px}.trc_elastic .thumbnail_start.trc-split-label .trc-main-label{float:left;padding-left:10px}.trc_elastic .video-label-box{display:block}.trc_elastic .thumbnail_start .video-label-box{box-sizing:border-box}.trc_user_adChoice_btn{background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat scroll 0 0 rgba(255,255,255,1);border-radius:0 0 0 5px;width:16px;height:16px;position:absolute;right:0;top:0;z-index:9000;cursor:pointer;border-width:2px 0 2px 4px;border-style:solid;border-color:#fff;opacity:.7;background-size:contain;visibility:hidden}.videoCube:hover .trc_user_adChoice_btn,.videoCube_hover .trc_user_adChoice_btn{visibility:visible}.videoCube .trc_user_adChoice_btn_static{visibility:visible}.p-video-overlay-container{position:absolute;width:100%;height:100%;top:0;left:0;background-color:transparent}.p-video-overlay.p-video-overlay-show{display:flex}.p-video-overlay{display:none;background-color:#000;opacity:.7;width:100%;height:100%;flex-direction:column}.p-video-overlay-action{color:#fff;width:100%;direction:ltr;text-align:center;display:flex;justify-content:center;flex-direction:column}.p-video-overlay-action.p-video-back-action{height:34%}.p-video-back-action-label{font-family:Helvetica Neue,serif;font-size:14px;font-weight:200;letter-spacing:1px}.p-video-overlay-action.p-video-goto-action{height:66%}.p-video-goto-action-url{font-family:Helvetica Neue,serif;font-size:24px;font-weight:400;text-decoration:underline;margin-top:5px}.p-video-goto-action-label{font-family:Helvetica Neue,serif;font-size:14px;font-weight:100;letter-spacing:1px}.trc_related_container .trc_clearer{clear:both;height:0;overflow:hidden;font-size:0;line-height:0;visibility:hidden}.link-adc{float:right!important}.trc-widget-footer .logoDiv{line-height:normal;padding-bottom:5px}.trc-widget-footer .link-adc a .trc_adc_wrapper,.trc_header_ext .link-adc a .trc_adc_wrapper{height:12px;width:18px;display:inline-block;padding-left:1px;margin-bottom:2px}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{vertical-align:middle;height:15px;display:inline-block;margin-top:-1px}.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{width:12px;height:14px;background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat;background-size:contain;vertical-align:middle}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_b_logo{width:77px;background:#fff url(//cdn.taboola.com/libtrc/static/thumbnails/0781f9c5a8637d1e162874f157460048.png) no-repeat!important;right:-1px;display:none;position:absolute}.logoDiv .trc_mobile_adc_link,.logoDiv .trc_mobile_attribution_link,.logoDiv .trc_mobile_disclosure_link{display:none}.logoDiv .trc_desktop_adc_link,.logoDiv .trc_desktop_attribution_link,.logoDiv .trc_desktop_disclosure_link{display:inline}@media screen and (max-width:767px){.logoDiv .trc_mobile_disclosure_link{display:inline}.logoDiv .trc_mobile_attribution_link{display:inline}.logoDiv .trc_mobile_adc_link{display:inline}.logoDiv .trc_desktop_disclosure_link{display:none}.logoDiv .trc_desktop_attribution_link{display:none}.logoDiv .trc_desktop_adc_link{display:none}}.trc_in_iframe .logoDiv .trc_mobile_attribution_link,.trc_in_iframe .logoDiv .trc_mobile_disclosure_link{display:inline}.trc_in_iframe .logoDiv .trc_desktop_attribution_link,.trc_in_iframe .logoDiv .trc_desktop_disclosure_link{display:none}.trc_related_container .logoDiv,.trc_related_container .trc_header_ext .logoDiv{float:right}.trc_related_container .logoDiv+.logoDiv{margin-right:2px}.trc_related_container .attribution-disclosure-link-hybrid,.trc_related_container .attribution-disclosure-link-sponsored{display:none}.trc-w2f.trc-content-sponsored .attribution-disclosure-link-sponsored,.trc_related_container .trc-content-sponsored .attribution-disclosure-link-sponsored{display:block}.trc-w2f.trc-content-hybrid .attribution-disclosure-link-hybrid,.trc_related_container .trc-content-hybrid .attribution-disclosure-link-hybrid{display:block}.trc_related_container .trc-widget-footer:hover a span,.trc_related_container .trc_header_ext:hover a span{text-decoration:underline!important}.logoDiv a span.trc_logos_v_align{display:inline-block!important;font-size:15px!important;line-height:1em!important;width:0!important}.trc_related_container .trc-widget-footer:hover a span.trc_adc_wrapper,.trc_related_container .trc-widget-footer:hover a span.trc_logos_v_align,.trc_related_container .trc_header_ext:hover a span.trc_adc_wrapper,.trc_related_container .trc_header_ext:hover a span.trc_logos_v_align{text-decoration:none!important}.trc_related_container .trc_rbox_header_span .trc_header_right_column{display:none}.trc_related_container img{max-width:none}.trc_related_container{clear:both}.tbl-loading-spinner{width:100%;height:40px;background:url(//cdn.taboola.com/static/91/91a25024-792d-4b52-84e6-ad1478c3f552.gif) center center no-repeat;background-size:40px}.tbl-hidden{display:none!important}.tbl-invisible{opacity:0;pointer-events:none}.tbl-batch-anchor{width:100%;height:1px}.iw_video_frame .trc_rbox_div{overflow:hidden}.trc-w2f .trc_rbox .trc-widget-footer,.trc-w2f .trc_rbox .trc_rbox_header{display:none!important}' });
                    if (e.global['smart-ellipsis'] && !TRC.ellipsisListening && (TRC.listen('ellipsis', e._repaintEllipsis.trcBind(e)), TRC.listen('allrender', e._repaintEllipsis.trcBind(e)), TRC.listen('batchrender', e._repaintEllipsis.trcBind(e)), TRC.ellipsisListening = !0), TRC.CLSReporter && TRC.CLSReporter.init(), !e.invisible)
                        return;
                    TRC.dom.onReady(function () {
                        div ? (div.innerHTML = '', div.style.display = 'none') : (div = doc.createElement('div'), doc.body.appendChild(div).style.display = 'none'), _taboola.push({
                            mode: 'rbox-tracking',
                            container: div
                        });
                    });
                } catch (e) {
                    __trcError('Error in libtrc initialization', e);
                }
            }, TRC.pConsole('', 'time', 'impl file loaded', ''), TRC.utm.push(new Date().getTime() - TRC.utm.start), TRC.tlf && console.timeStamp('call trcReady'), TRC.trcReady();
        }(window, document);
    }())
}