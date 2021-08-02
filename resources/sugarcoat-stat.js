var closeItems;
{
    const $___mock_1e20fe76504bbe57 = {};
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
    })($___mock_1e20fe76504bbe57);
    const $___mock_82209695f8edf667 = {};
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
    })($___mock_82209695f8edf667);
    (function () {
        closeItems = $___var_dda9094b83a40dd7;
        ({}.constructor.defineProperty(closeItems, 'name', {
            configurable: true,
            enumerable: false,
            value: 'closeItems',
            writable: false
        }));
        $(function () {
            const $___old_a9f73de587bcbb59 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_4cd2b0b415b3b561 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_a9f73de587bcbb59)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1e20fe76504bbe57.XMLHttpRequest));
                if ($___old_4cd2b0b415b3b561)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1e20fe76504bbe57.XMLHttpRequest));
                return function () {
                    function p() {
                        $('.js-stat-dbview-api-view').hide();
                        var b = $('input[name=api_format]:checked').val();
                        $('.js-stat-dbview-api-view[data-format=' + b + ']').show().scrollLeft(0);
                    }
                    function u(b) {
                        b = '?' + $.param(b);
                        if (b !== location.search) {
                            location.origin || (location.origin = location.protocol + '//' + location.host);
                            var c = location.origin + location.pathname + b;
                            history.replaceState(c, null, c);
                            $('#block-languageswitcher .links .ja a').prop('href', base + v + b);
                            $('#block-languageswitcher .links .en a').prop('href', base + '/en' + v + b);
                        }
                    }
                    function w() {
                        var b = new $.Deferred(), c = location.search.substring(1).replace(/\+/g, ' '), c = c ? JSON.parse('{"' + c.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (a, b) {
                                return '' === a ? b : decodeURIComponent(b);
                            }) : {};
                        b.resolve(c);
                        return b.promise();
                    }
                    function q(b) {
                        var c = b.parents('.js-facet').find('.js-facet-list');
                        b.toggleClass('__open');
                        c.stop().slideToggle();
                    }
                    function l(b) {
                        const $___old_9ee0d19a1f153b82 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_72cc93c37b0ac08d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                        try {
                            if ($___old_9ee0d19a1f153b82)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1e20fe76504bbe57.XMLHttpRequest));
                            if ($___old_72cc93c37b0ac08d)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1e20fe76504bbe57.XMLHttpRequest));
                            return function () {
                                b.log || $('.js-loading').addClass('__active');
                                $.ajax({
                                    url: B,
                                    type: 'GET',
                                    dataType: 'json',
                                    cache: !0,
                                    data: b,
                                    context: { params: b }
                                }).done(function (b) {
                                    if (!this.params.log) {
                                        $('.exist-error').html('');
                                        !1 !== b.facets ? ($('.js-targets').html(b.targets).show(), $('.js-facets').html(b.facets).show(), $('.js-facet-area').show(), $('.js-display').removeClass('__center')) : ($('.js-display').addClass('__center'), $('.js-targets').hide(), $('.js-facet-area').hide(), $('.js-facets').hide());
                                        var a = [];
                                        b.title && (a = $('head title').text().split('|'), $('head title').text(b.title + ' |' + a[a.length - 1]));
                                        $('.js-display').show();
                                        $('.js-toukei_query_filed').hide();
                                        b.is_toukei_query && $('.js-toukei_query_filed').show();
                                        b.layout ? 'normal' == b.layout ? ($('.js-search_layout').val('normal'), $('.js-search-option-open').hide(), $('.js-search_option').hide()) : ($('.js-search_layout').val('dataset'), $('.js-search-option-open').show(), $('.js-search_option').show()) : this.params.toukei && ($('.js-search_layout').val('dataset'), $('.js-search-option-open').show(), $('.js-search_option').show());
                                        'normal' == this.params.layout && ('dataset' === b.layout || this.params.toukei ? ($('.js-search-option-open').show(), $('.js-search_option').show(), $('.js-search_option_metadata').prop('checked', !0), $('.js-search_option_data').prop('checked', !0)) : ($('.js-search-option-open').hide(), $('.js-search_option').hide()));
                                        $('.js-items').html(b.items);
                                        closeItems();
                                        set_search_option([]);
                                        '' != c.data.tstat_open && ($('.js-tclass_open[data-parent_value="' + c.data.tstat_open + '"]').click(), '' != c.data.tclass_open && $('.js-click[data-none="' + c.data.tclass_open + '"]').click());
                                        0 !== Object.keys(b.params).length && ($.each(b.params, function (a, b) {
                                            c.data[a] = b;
                                        }), a = c.get_proparty(), u(a));
                                        0 < $('.stat-resource_sheet').length ? $('.js-search_word_btn').addClass('js-search_word_btn_data_set') : $('.js-search_word_btn').removeClass('js-search_word_btn_data_set');
                                        $('.js-facet-list').each(function () {
                                            var a = $(this), b = a.children('.js-facet-list-item').not('.js-facet-list-show'), c = b.length;
                                            c > x && a.find('.js-facet-list-show').addClass('__active');
                                            0 === c && a.find('.js-facet-list-show').addClass('__active');
                                            b.each(function () {
                                                c >= y && $(this).hide();
                                                $(this).index() >= x && $(this).hide();
                                            });
                                        });
                                        0 === $('.js-dl').length && $('.js-dl_all').addClass('__inactive');
                                        $('.js-filters').html(b.filters);
                                    }
                                }).fail(function (b) {
                                }).always(function (c) {
                                    h();
                                    $('.js-loading').removeClass('__active');
                                    $('.js-year-from').val(b.year_from);
                                    $('.js-year-to').val(b.year_to);
                                    $('.js-month-from').val(b.month_from);
                                    $('.js-month-to').val(b.month_to);
                                    $('.js-suggest-list').remove();
                                });
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_9ee0d19a1f153b82)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_9ee0d19a1f153b82));
                            if ($___old_72cc93c37b0ac08d)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_72cc93c37b0ac08d));
                        }
                    }
                    function d(b, A, a, k) {
                        a = a || {};
                        var d = $('head title').text();
                        $('.js-tooltip_alert').remove();
                        $('.js-list-cont').each(function () {
                            $(this).height('auto');
                        });
                        !1 === is_search_option_selected() ? ($('.js-search_option').show(), $('.js-search-option-open_icon').addClass('__active'), $('.js-search_option_error').slideDown()) : (n(b, a).then(function () {
                            c.data.toukei || c.data.tid ? (c.data.kana = '', c.data.abc = '') : remove_second_page();
                            'datalist' === c.data.layout && ('datalist' !== k && !0 !== A) && (c.data.layout = '');
                            if (!1 === is_search_option_selected())
                                $('.js-search_option').show(), $('.js-search-option-open_icon').addClass('__active'), $('.js-search_option_error').slideDown();
                            else {
                                $('.js-search_option_error').slideUp();
                                var a = c.get_proparty(), a = set_search_option(a);
                                l(a);
                                delete a.result_page;
                                a = '?' + $.param(a);
                                if (a !== location.search) {
                                    location.origin || (location.origin = location.protocol + '//' + location.host);
                                    var b = location.origin + location.pathname + a;
                                    history.pushState(b, null, b);
                                    $('#block-languageswitcher .links .ja a').prop('href', base + v + a);
                                    $('#block-languageswitcher .links .en a').prop('href', base + '/en' + v + a);
                                }
                                c.data.result_page = '';
                            }
                        }), window.scrollTo(0, 0), 1 < Object.keys(b).length || !1 in b ? $('title').text(first_disp_title + ' | ' + site_title) : $('title').text(d));
                    }
                    function e(b) {
                        $('.js-modal').removeClass('__active');
                        $('.js-multiple_select').removeClass('__active');
                        w().then(function (b) {
                            var a = new $.Deferred();
                            b.tclass ? $.ajax({
                                url: D,
                                type: 'GET',
                                dataType: 'json',
                                cache: !0,
                                data: b
                            }).done(function (k) {
                                b.layout && (k.layout = b.layout);
                                c = new Model(k);
                                a.resolve();
                            }).fail(function () {
                            }) : b.lid ? $.ajax({
                                url: E,
                                type: 'GET',
                                dataType: 'json',
                                cache: !0,
                                data: b
                            }).done(function (k) {
                                b.layout && (k.layout = b.layout);
                                c = new Model(k);
                                a.resolve();
                            }).fail(function () {
                            }) : 'undefined' === typeof b.toukei && 'undefined' !== typeof b.tstat ? $.ajax({
                                url: F,
                                type: 'GET',
                                dataType: 'json',
                                cache: !0,
                                data: b
                            }).done(function (b) {
                                c = new Model(b);
                                a.resolve();
                            }).fail(function () {
                            }) : ('undefined' === typeof b.query ? 'undefined' === typeof b.survey ? $('.js-search_word').val('') : $('.js-search_word').val(b.survey.substring(0, 128)) : $('.js-search_word').val(b.query.substring(0, 128)), c = new Model(b), a.resolve());
                            if (c && '' != c.data.bunya_s) {
                                var k = c.data.bunya_s.split(','), d = c.data.bunya_l.split(','), C = RegExp(/^([0-9]{2})$/);
                                $.each(k, function (a, c) {
                                    'bunya_l' in b && 1 === d.length && C.test(c) ? k[a] = '' + b.bunya_l + c : 4 !== c.length && delete k[a];
                                });
                                k = k.filter(function (a) {
                                    return '' !== a;
                                });
                                c.data.bunya_s = 0 === k.length ? '' : k.join(',');
                            }
                            return a.promise();
                        }).then(function () {
                            const $___old_7a8748bfa0bf354f = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                            try {
                                if ($___old_7a8748bfa0bf354f)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_82209695f8edf667.sessionStorage));
                                return function () {
                                    h();
                                    var d = c.get_proparty();
                                    u(d);
                                    !1 !== b && (d.log = !0);
                                    l(d);
                                    'close' === get_session_storage('faset') && 1 !== z && facet_close();
                                    z = 1;
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_7a8748bfa0bf354f)
                                    ({}.constructor.defineProperty(window, 'sessionStorage', $___old_7a8748bfa0bf354f));
                            }
                        });
                    }
                    function h() {
                        f(!1, 'bunya_s tstat tclass1 tclass2 tclass3 tclass4 tclass5 hclass'.split(' '));
                        'undefined' != typeof tstat && (c.data.tstat = tstat);
                        tstat = void 0;
                        '' !== c.data.bunya_l && f(!0, [
                            'bunya_l',
                            'bunya_s',
                            'toukei',
                            'cycle'
                        ]);
                        '' !== c.data.bunya_s && f(!0, [
                            'bunya_s',
                            'toukei',
                            'cycle'
                        ]);
                        '' !== c.data.kikan && f(!0, [
                            'kikan',
                            'toukei',
                            'cycle'
                        ]);
                        '' === c.data.toukei && '' === c.data.tid || f(!0, [
                            'toukei',
                            'tstat',
                            'hclass'
                        ]);
                        '' === c.data.tstat && '' === c.data.lid && '' === c.data.bid || f(!0, [
                            'toukei',
                            'tstat',
                            'tclass1'
                        ]);
                        '' === c.data.tclass1 && '' === c.data.lid && '' === c.data.bid || f(!0, ['tclass2']);
                        '' === c.data.tclass2 && '' === c.data.lid && '' === c.data.bid || f(!0, ['tclass3']);
                        '' === c.data.tclass3 && '' === c.data.lid && '' === c.data.bid || f(!0, ['tclass4']);
                        '' === c.data.tclass4 && '' === c.data.lid && '' === c.data.bid || f(!0, ['tclass5']);
                    }
                    function f(b, c) {
                        b ? $.each(c, function (a, b) {
                            $('.js-facet-' + b).show();
                        }) : $.each(c, function (a, b) {
                            $('.js-facet-' + b).css({ display: 'none' });
                        });
                    }
                    function n(b, d) {
                        var a = new $.Deferred(), k = null;
                        $.each(b, function (a, b) {
                            k = 'page' === b.key ? !0 : !1;
                            -1 !== r.indexOf(b.key) ? d.isReset ? c.set(b.key, b.value) : d.minusValue ? (c.minus(b.key, b.value), 'kikan' === b.key && (c.set('toukei', ''), c.set('tid', ''))) : c.joint(b.key, b.value) : c.set(b.key, b.value);
                        });
                        k || c.set('page', '1');
                        a.resolve();
                        return a.promise();
                    }
                    function t(b) {
                        var c = new $.Deferred();
                        $('.js-modal_title').text(b.title || '');
                        $('.js-modal_toukei_name').text(b.toukei_name || '');
                        $('.js-modal_explanation').html(b.explanation || '');
                        $('.js-modal_kikan_kashitsu').text(b.kikan_kashitsu || '');
                        b.exp_url ? $('.js-modal_exp_url').html($('<a />').text(b.exp_url).attr({
                            href: b.exp_url,
                            target: '_blank',
                            tabindex: '22'
                        })) : $('.js-modal_exp_url').html('');
                        b.mail_address ? $('.js-modal_mail_address').html($('<a />').text(b.mail_address).attr({
                            href: 'mailto:' + b.mail_address,
                            tabindex: '22'
                        })) : $('.js-modal_mail_address').html('');
                        b.tel_no ? $('.js-modal_tel_no').html($('<a />').text(b.tel_no).attr({
                            href: 'tel:' + b.tel_no,
                            tabindex: '22'
                        })) : $('.js-modal_tel_no').html('');
                        c.resolve();
                        return c.promise();
                    }
                    var m = base + '/' + ('ja' === lang ? '' : lang + '/') + module_name, B = m + '/api_stat', g = m + '/api_stat_modal', s = m + '/api_file_size', G = m + '/api_stat_facet', H = base + '/' + ('ja' === lang ? '' : lang + '/') + 'stat-search/files/data', D = m + '/api_file_tclass', F = m + '/api_file_tstat', E = m + '/api_file_list_id', x = 10, y = 31, v = '/stat-search', c, r = 'bunya_l bunya_s cycle kikan toukei tstat toukei_kind year month open_date hclass file_type tclass1 tclass2 tclass3 tclass4 tclass5 collect_area iroha alpha'.split(' '), z = 0;
                    $.when($.ready, $.getScript(module_js + 'model_stat.js'), $.getScript(parent_js_dir + 'mustache.min.js')).then(function () {
                        function b() {
                            $('.js-all-file-download-size').text('');
                            var a = $('input[name="file_format"]:checked').data('file_name');
                            $('.js-view-file-format').text(a + format_file);
                            var a = 'undefined' !== typeof c.data.page ? c.data.page : 1, b = '', d = $('input[name="file_format"]:checked').data('file_name');
                            $('.js-dl').each(function (a, c) {
                                d === c.dataset.file_type && (b += c.dataset.file_id + ':' + c.dataset.release_count + ',');
                            });
                            b = b.slice(0, -1);
                            a = {
                                page: a,
                                files: b
                            };
                            $('.js-download_err_msg').hide();
                            $('.js-loading').addClass('__active');
                            $.ajax({
                                url: s,
                                type: 'GET',
                                dataType: 'json',
                                cache: !1,
                                data: a
                            }).done(function (a) {
                                a.zip_err_msg && ($('.js-download_err_msg').text(a.zip_err_msg), $('.js-download_err_msg').show());
                                a = a.file_size;
                                $('.js-all-file-download-size').text(a);
                                0 === parseInt(a) ? $('.js-all-file-download').prop('disabled', !0) : $('.js-all-file-download').prop('disabled', !1);
                            }).fail(function (a) {
                                alert('通信エラー');
                            }).always(function (a) {
                                $('.js-loading').removeClass('__active');
                            });
                        }
                        $(document).on('keydown', '.js-datatype-title, .js-facet-target, .js-facet-title, .js-facet-list-item, .js-facet-list-show, .js-targets-button, .js-search_word_delete, .stat-sort_icon, .js-search-info-header-close, .js-api, .js-api_link-close', function (a) {
                            13 === a.keyCode && $(this).click();
                        });
                        $(document).on('keydown', '.js-paginate span:not(.__current), .js-row_open, .js-modal_open, .js-modal-close, .js-dl, .js-dl_all, .js-all-file-download, .js-all-file-download-close', function (a) {
                            13 === a.keyCode && $(this).click();
                        });
                        $(window).on('keydown', function (a) {
                            if (9 === a.keyCode) {
                                if ($('.js-all-file-download-modal').hasClass('__active') && $(a.target).hasClass('js-dl_all'))
                                    return $('.js-file_format').eq(0).focus(), !1;
                                $('.js-api_link').hasClass('__active') && ($(a.target).hasClass('js-api') || $(a.target).hasClass('js-api_link-close')) && (setTimeout(function () {
                                    $('.js-api_link-url').focus();
                                }, 0), $('.js-api_link-url').focus(function () {
                                    $(this).select();
                                }));
                                if ($('.js-modal').hasClass('__active') && $(a.target).hasClass('js-modal_open'))
                                    return $('.stat-modal-cont-table').find('a').first().focus(), !1;
                            }
                        });
                        $(document).on('keydown', '.js-multiple_select-close, .js-multiple_select-header-close, .js-multiple_select-done', function (a) {
                            if (9 === a.keyCode && !a.shiftKey) {
                                if ($(this).hasClass('js-multiple_select-close'))
                                    return $('.js-multiple_select-header-close').focus(), !1;
                            } else if (9 === a.keyCode && a.shiftKey) {
                                if ($(this).hasClass('js-multiple_select-header-close'))
                                    return $('.js-multiple_select-close').focus(), !1;
                            } else if (13 === a.keyCode)
                                return $(this).click(), !1;
                        });
                        e(!0);
                        $('.js-facet-list').each(function () {
                            var a = $(this), b = a.children('.js-facet-list-item').not('.js-facet-list-show'), c = b.length;
                            10 < c && a.find('.js-facet-list-show').addClass('__active');
                            0 === c && a.find('.js-facet-list-show').addClass('__active');
                            b.each(function () {
                                c >= y && $(this).hide();
                                10 <= $(this).index() && $(this).hide();
                            });
                        });
                        $(document).on('click', '.js-row_open', function () {
                            var a = $(this).closest('.js-row_frame');
                            a.find('.js-row').stop().slideToggle();
                            a.find('.js-plus').toggleClass('__active');
                            setTimeout(function () {
                                0 === $('.js-row:hidden').length && ($('.js-toukei_item_view_link.__show').hide(), $('.js-toukei_item_view_link.__hide').show());
                                0 === $('.js-row:visible').length && ($('.js-toukei_item_view_link.__hide').hide(), $('.js-toukei_item_view_link.__show').show());
                            }, 800);
                            return !1;
                        });
                        $(document).on('click', '.js-toukei_item_view_link.__show', function () {
                            $('.js-row:hidden').stop().slideToggle();
                            $('.js-toukei_item_view_link.__show').hide();
                            $('.js-toukei_item_view_link.__hide').show();
                            return !1;
                        });
                        $(document).on('click', '.js-toukei_item_view_link.__hide', function () {
                            $('.js-row:visible').stop().slideToggle();
                            $('.js-toukei_item_view_link.__hide').hide();
                            $('.js-toukei_item_view_link.__show').show();
                            return !1;
                        });
                        $(document).on('click', '.js-facet-title', function () {
                            var a = $(this);
                            a.hasClass('__lock') || q(a);
                        });
                        $(document).on('click', '.js-datatype-title', function () {
                            $(this).toggleClass('__open');
                            $('.stat-datatype-list').stop().slideToggle();
                        });
                        $(document).on('click', '.js-tclass_open', function (a) {
                            a = $(this).data('parent_value');
                            $(this).find('.fa').toggleClass('fa-plus');
                            $(this).find('.fa').toggleClass('fa-minus');
                            $('.js-itemsss[data-open_value=' + a + ']').slideToggle();
                        });
                        $(document).on('click', '.js-all_tclass_open', function (a) {
                            $(this).find('.fa').toggleClass('fa-plus');
                            $(this).find('.fa').toggleClass('fa-minus');
                            a = 'plus';
                            $(this).find('.fa').hasClass('fa-plus') && (a = 'minus');
                            $('.js-tclass_open > .fa-' + a).parents().click();
                        });
                        $(document).on('click', '.js-facet-list-item', function (a) {
                            a = $(this).data();
                            if (!check_limit_parameters($(this), c.get_proparty(), a.key, String(a.value), r))
                                if ('cycle' != a.key && 'tclass1' != a.key || -1 != c.data.cycle_facet.indexOf(a.key) || (c.data.cycle_facet = c.data.cycle_facet + ':' + a.key), 'toukei' === a.key) {
                                    var b = $('.js-search_word').val();
                                    d([
                                        {
                                            key: a.key,
                                            value: String(a.value)
                                        },
                                        {
                                            key: 'stat_infid',
                                            value: ''
                                        },
                                        {
                                            key: 'sort',
                                            value: ''
                                        },
                                        {
                                            key: 'query',
                                            value: b
                                        },
                                        {
                                            key: 'survey',
                                            value: b
                                        }
                                    ]);
                                } else
                                    'iroha' !== a.key && 'alpha' !== a.key || $('.js-faset_alphabet_list').hide(), d([
                                        {
                                            key: a.key,
                                            value: String(a.value)
                                        },
                                        {
                                            key: 'stat_infid',
                                            value: ''
                                        },
                                        {
                                            key: 'sort',
                                            value: ''
                                        }
                                    ]);
                        });
                        $(document).on('click', '.js-minus-target-value', function () {
                            var a = $(this).data('key'), b = $(this).data('value');
                            $(this).data('pkey');
                            $(this).data('pid');
                            var f = '';
                            if ('hclass' === a || 'open_date' === a)
                                f = 'datalist';
                            var e = $(this).parent().siblings().length, g = c.get_proparty();
                            'bunya_l' === a && 'bunya_l' in g && (g = $('.js-filters [data-key=bunya_l]').attr('data-hidden_count'), g = parseInt(g) ? parseInt(g) : 0, e += g);
                            0 === e ? $('.js-facet-target[data-key=' + a + ']').click() : d([
                                {
                                    key: a,
                                    value: String(b)
                                },
                                {
                                    key: 'page',
                                    value: ''
                                },
                                {
                                    key: 'sort',
                                    value: ''
                                }
                            ], void 0, { minusValue: !0 }, f);
                        });
                        $(document).on('click', '.js-facet-target', function () {
                            var a = $(this).data('key');
                            $(this).data('pkey');
                            switch (a) {
                            case 'all':
                                $('.js-search_word').val('');
                                $('.js-search_option_metadata').prop('checked', 1);
                                $('.js-search_option_data').prop('checked', 1);
                                d([
                                    {
                                        key: 'bunya_l',
                                        value: ''
                                    },
                                    {
                                        key: 'bunya_s',
                                        value: ''
                                    },
                                    {
                                        key: 'kikan',
                                        value: ''
                                    },
                                    {
                                        key: 'toukei_kind',
                                        value: ''
                                    },
                                    {
                                        key: 'toukei',
                                        value: ''
                                    },
                                    {
                                        key: 'cycle',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'open_date',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'kana',
                                        value: ''
                                    },
                                    {
                                        key: 'abc',
                                        value: ''
                                    },
                                    {
                                        key: 'iroha',
                                        value: ''
                                    },
                                    {
                                        key: 'alpha',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'layout',
                                        value: ''
                                    },
                                    {
                                        key: 'query',
                                        value: ''
                                    },
                                    {
                                        key: 'survey',
                                        value: ''
                                    },
                                    {
                                        key: 'file_type',
                                        value: ''
                                    },
                                    {
                                        key: 'collect_area',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat_open',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass_open',
                                        value: ''
                                    },
                                    {
                                        key: 'result_page',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'cycle_facet',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    },
                                    {
                                        key: 'metadata',
                                        value: ''
                                    },
                                    {
                                        key: 'data',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'bunya_l':
                                d([
                                    {
                                        key: 'bunya_l',
                                        value: ''
                                    },
                                    {
                                        key: 'bunya_s',
                                        value: ''
                                    },
                                    {
                                        key: 'toukei_kind',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'result_page',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'bunya_s':
                                d([
                                    {
                                        key: 'bunya_s',
                                        value: ''
                                    },
                                    {
                                        key: 'toukei_kind',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'kikan':
                                d([
                                    {
                                        key: 'kikan',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'toukei':
                                for (var a = [], b = decodeURIComponent(window.location.search.substring(1)).split('&'), c = 0; c < b.length; c++) {
                                    var g = b[c].split('=');
                                    a[g[0]] = g[1];
                                }
                                a = 'survey' in a ? a.survey || '' : '';
                                d([
                                    {
                                        key: 'toukei',
                                        value: ''
                                    },
                                    {
                                        key: 'tid',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'open_date',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'query',
                                        value: a
                                    },
                                    {
                                        key: 'survey',
                                        value: ''
                                    },
                                    {
                                        key: 'file_type',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat_open',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass_open',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    },
                                    {
                                        key: 'metadata',
                                        value: ''
                                    },
                                    {
                                        key: 'data',
                                        value: ''
                                    },
                                    {
                                        key: 'hclass',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'tstat':
                                d([
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'result_page',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'tclass1':
                                d([
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'tclass2':
                                d([
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'tclass3':
                                d([
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'tclass4':
                                d([
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'tclass5':
                                d([
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'cycle':
                                d([
                                    {
                                        key: 'cycle',
                                        value: ''
                                    },
                                    {
                                        key: 'bid',
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'year':
                            case 'month':
                                d([
                                    {
                                        key: a,
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            case 'open_date':
                            case 'hclass':
                                d([
                                    {
                                        key: a,
                                        value: ''
                                    },
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 }, 'datalist');
                                break;
                            case 'query':
                                $('.js-search_word').val('');
                                d([
                                    {
                                        key: 'query',
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'kana',
                                        value: ''
                                    },
                                    {
                                        key: 'abc',
                                        value: ''
                                    },
                                    {
                                        key: 'iroha',
                                        value: ''
                                    },
                                    {
                                        key: 'alpha',
                                        value: ''
                                    },
                                    {
                                        key: 'layout',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 });
                                break;
                            default:
                                d([
                                    {
                                        key: a,
                                        value: ''
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, { isReset: !0 }, 'datalist');
                            }
                        });
                        $('.js-search_word_btn').click(function () {
                            if (!1 === is_search_option_selected())
                                $('.js-search_option').show(), $('.js-search-option-open_icon').addClass('__active'), $('.js-search_option_error').slideDown();
                            else if ($('.js-search_option_error').slideUp(), !check_limit_parameters($('.js-search_layout'), c.get_proparty(), 'query', $('.js-search_word').val(), r))
                                if (c.data.stat_infid) {
                                    var a = $('.js-search_layout').val();
                                    d([
                                        {
                                            key: 'query',
                                            value: $('.js-search_word').val()
                                        },
                                        {
                                            key: 'page',
                                            value: ''
                                        },
                                        {
                                            key: 'sort',
                                            value: ''
                                        },
                                        {
                                            key: 'layout',
                                            value: a
                                        },
                                        {
                                            key: 'stat_infid',
                                            value: ''
                                        },
                                        {
                                            key: 'toukei',
                                            value: ''
                                        },
                                        {
                                            key: 'tid',
                                            value: ''
                                        },
                                        {
                                            key: 'bunya_l',
                                            value: ''
                                        },
                                        {
                                            key: 'bunya_s',
                                            value: ''
                                        },
                                        {
                                            key: 'kikan',
                                            value: ''
                                        },
                                        {
                                            key: 'tstat',
                                            value: ''
                                        },
                                        {
                                            key: 'lid',
                                            value: ''
                                        },
                                        {
                                            key: 'cycle',
                                            value: ''
                                        },
                                        {
                                            key: 'year',
                                            value: ''
                                        },
                                        {
                                            key: 'month',
                                            value: ''
                                        },
                                        {
                                            key: 'open_date',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass1',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass2',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass3',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass4',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass5',
                                            value: ''
                                        },
                                        {
                                            key: 'bid',
                                            value: ''
                                        },
                                        {
                                            key: 'year_from',
                                            value: ''
                                        },
                                        {
                                            key: 'year_to',
                                            value: ''
                                        },
                                        {
                                            key: 'month_from',
                                            value: ''
                                        },
                                        {
                                            key: 'month_to',
                                            value: ''
                                        },
                                        {
                                            key: 'toukei_kind',
                                            value: ''
                                        },
                                        {
                                            key: 'kana',
                                            value: ''
                                        },
                                        {
                                            key: 'abc',
                                            value: ''
                                        },
                                        {
                                            key: 'iroha',
                                            value: ''
                                        },
                                        {
                                            key: 'alpha',
                                            value: ''
                                        },
                                        {
                                            key: 'stat_infid',
                                            value: ''
                                        },
                                        {
                                            key: 'hclass',
                                            value: ''
                                        },
                                        {
                                            key: 'collect_area',
                                            value: ''
                                        },
                                        {
                                            key: 'tstat_open',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass_open',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass1val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass2val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass3val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass4val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass5val',
                                            value: ''
                                        },
                                        {
                                            key: 'cycle_facet',
                                            value: ''
                                        },
                                        {
                                            key: 'result_page',
                                            value: ''
                                        },
                                        {
                                            key: 'result_back',
                                            value: ''
                                        }
                                    ], void 0, { isReset: !0 });
                                } else
                                    a = $('.js-search_layout').val(), 'normal' === a ? d([
                                        {
                                            key: 'page',
                                            value: ''
                                        },
                                        {
                                            key: 'query',
                                            value: $('.js-search_word').val()
                                        },
                                        {
                                            key: 'sort',
                                            value: ''
                                        },
                                        {
                                            key: 'layout',
                                            value: a
                                        },
                                        {
                                            key: 'stat_infid',
                                            value: ''
                                        },
                                        {
                                            key: 'toukei',
                                            value: ''
                                        },
                                        {
                                            key: 'tid',
                                            value: ''
                                        },
                                        {
                                            key: 'tstat',
                                            value: ''
                                        },
                                        {
                                            key: 'lid',
                                            value: ''
                                        },
                                        {
                                            key: 'year',
                                            value: ''
                                        },
                                        {
                                            key: 'month',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass1',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass2',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass3',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass4',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass5',
                                            value: ''
                                        },
                                        {
                                            key: 'bid',
                                            value: ''
                                        },
                                        {
                                            key: 'toukei_kind',
                                            value: ''
                                        },
                                        {
                                            key: 'open_date',
                                            value: ''
                                        },
                                        {
                                            key: 'survey',
                                            value: ''
                                        },
                                        {
                                            key: 'tstat_open',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass_open',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass1val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass2val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass3val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass4val',
                                            value: ''
                                        },
                                        {
                                            key: 'tclass5val',
                                            value: ''
                                        },
                                        {
                                            key: 'result_page',
                                            value: ''
                                        },
                                        {
                                            key: 'result_back',
                                            value: ''
                                        },
                                        {
                                            key: 'metadata',
                                            value: ''
                                        },
                                        {
                                            key: 'data',
                                            value: ''
                                        },
                                        {
                                            key: 'hclass',
                                            value: ''
                                        }
                                    ], void 0, { isReset: !0 }) : d([
                                        {
                                            key: 'query',
                                            value: $('.js-search_word').val()
                                        },
                                        {
                                            key: 'layout',
                                            value: a
                                        },
                                        {
                                            key: 'sort',
                                            value: ''
                                        }
                                    ], void 0, { isReset: !0 });
                        });
                        var f = !1;
                        $('.js-search_word').on('click', function () {
                            f = !0;
                        });
                        $('.js-search_word').keydown(function (a) {
                            $(this).cutKeyword();
                            if (13 === a.keyCode && f) {
                                a = $('.js-suggest-item.__active');
                                if (0 !== a.length)
                                    return $('.js-search_word').val(a.children('.js-suggest-name').text()), $('.js-suggest-list').remove(), !1;
                                f = !1;
                            }
                        });
                        $('.js-search_word').focusin(function (a) {
                            a = $(this).val();
                            128 <= a.length && (a = a.substring(0, 128), $('.js-search_word').val(a));
                        }).focusout(function (a) {
                            a = $(this).val();
                            128 <= a.length && (a = a.substring(0, 128), $('.js-search_word').val(a));
                        });
                        $('.js-search_word_delete').click(function () {
                            $('.js-search_word').val('');
                            if ('normal' === $('.js-search_layout').val())
                                d([
                                    {
                                        key: 'page',
                                        value: ''
                                    },
                                    {
                                        key: 'query',
                                        value: $('.js-search_word').val()
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    },
                                    {
                                        key: 'layout',
                                        value: $('.js-search_layout').val()
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'toukei',
                                        value: ''
                                    },
                                    {
                                        key: 'tid',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat',
                                        value: ''
                                    },
                                    {
                                        key: 'lid',
                                        value: ''
                                    },
                                    {
                                        key: 'cycle',
                                        value: ''
                                    },
                                    {
                                        key: 'year',
                                        value: ''
                                    },
                                    {
                                        key: 'month',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5',
                                        value: ''
                                    },
                                    {
                                        key: 'tstat_open',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass_open',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass1val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass2val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass3val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass4val',
                                        value: ''
                                    },
                                    {
                                        key: 'tclass5val',
                                        value: ''
                                    },
                                    {
                                        key: 'result_page',
                                        value: ''
                                    },
                                    {
                                        key: 'result_back',
                                        value: ''
                                    },
                                    {
                                        key: 'metadata',
                                        value: ''
                                    },
                                    {
                                        key: 'data',
                                        value: ''
                                    }
                                ]);
                            else {
                                var a = '', b = location.search;
                                if (b.match(/tstat=/) && !b.match(/layout=/))
                                    a = '';
                                else if (b.match(/tstat=/) && !b.match(/=dataset/))
                                    a = 'datalist';
                                else if (b.match(/tstat=/) || b.match(/=dataset/))
                                    a = 'dataset';
                                d([
                                    {
                                        key: 'query',
                                        value: ''
                                    },
                                    {
                                        key: 'survey',
                                        value: ''
                                    },
                                    {
                                        key: 'layout',
                                        value: a
                                    },
                                    {
                                        key: 'stat_infid',
                                        value: ''
                                    },
                                    {
                                        key: 'sort',
                                        value: ''
                                    }
                                ], void 0, void 0, 'datalist');
                            }
                        });
                        $(document).on('click', '.js-paginate span:not(.__current)', function () {
                            d([{
                                    key: 'page',
                                    value: $(this).data('page')
                                }], !0);
                        });
                        $(window).on('popstate', function (a) {
                            $('.js-modal').removeClass('__active');
                            $('.js-modal').removeClass('__active_item');
                            $('.js-api_link').removeClass('__active');
                            e(!1);
                        });
                        $(document).on('click', '.js-sort', function () {
                            var a = $(this).data('sort_field');
                            switch ($(this).data('sort_direction')) {
                            case 'asc':
                                d([{
                                        key: 'sort',
                                        value: a + ' desc'
                                    }]);
                                break;
                            case 'desc':
                                d([{
                                        key: 'sort',
                                        value: ''
                                    }]);
                                break;
                            default:
                                d([{
                                        key: 'sort',
                                        value: a + ' asc'
                                    }]);
                            }
                        });
                        $(document).on('click', '.js-modal_open', function () {
                            $('.js-loading').addClass('__active');
                            var a = $(this).data('modal_params');
                            $.ajax({
                                url: g,
                                type: 'GET',
                                dataType: 'json',
                                cache: !0,
                                data: { params: a }
                            }).done(function (a) {
                                t(a).then(function () {
                                    $('.js-modal').addClass('__active');
                                });
                            }).fail(function (a) {
                            }).always(function (a) {
                                $('.js-loading').removeClass('__active');
                            });
                            return !1;
                        });
                        $(document).on('click', '.js-modal-close', function () {
                            $('.js-modal').removeClass('__active');
                        });
                        $(document).on('click', '.js-modal', function () {
                            $('.js-modal').removeClass('__active');
                        });
                        $(document).on('click', '.js-modal-frame', function (a) {
                            a.stopPropagation();
                        });
                        $(document).on('click', '.js-facet-list-show', function () {
                            var a = $(this).parents('.js-facet'), b = a.find('.js-facet-title'), g = a.find('.js-facet-list-show-icon'), e = a.find('.js-facet-list-show-text'), f = a.find('.js-facet-list-item');
                            if (0 === f.length) {
                                var h = $(this).data('key'), s = -1 === r.indexOf(h) ? !1 : !0, a = {
                                        page: 1,
                                        layout: 'dataset',
                                        facet_name: $(this).data('facet_name')
                                    };
                                $('.js-loading').addClass('__active');
                                q(b);
                                g.toggleClass('__active');
                                e.toggle();
                                g.hasClass('__active') && f.slideDown();
                                $.ajax({
                                    url: G,
                                    type: 'GET',
                                    dataType: 'json',
                                    cache: !0,
                                    data: a
                                }).done(function (a) {
                                    f = a.facets.items;
                                    var g = f[0].key, e = [], h = c.data[g].split(','), l = '', m = '';
                                    $.each(f, function (a, b) {
                                        var c = -1 === h.indexOf(b.id) ? !1 : !0;
                                        '' === b.pid && (l = b.id);
                                        m = b.pid === l ? '\u3000' : '';
                                        e.push({
                                            title: m + b.name,
                                            total: b.total,
                                            key: b.field,
                                            value: b.id,
                                            selected: c
                                        });
                                    });
                                    var n = {
                                        title: b.text().trim(),
                                        close: lang_close,
                                        multiple: s,
                                        select: lang_select,
                                        items: e
                                    };
                                    $.get(module_js + 'templates/multiple_select.html', function (a) {
                                        a = Mustache.render(a, n);
                                        $('body').append(a);
                                        $('.js-multiple_select').fadeIn(100);
                                        $('.js-multiple_select-done').on('click', function (a) {
                                            var b = [];
                                            $('.js-multiple_select-item-check:checked').each(function (a, c) {
                                                b.push(c.dataset.value);
                                            });
                                            check_limit_parameters($(this), c.get_proparty(), g, b, r) || ($('.js-tooltip_alert').remove(), d([
                                                {
                                                    key: g,
                                                    value: b.join()
                                                },
                                                {
                                                    key: 'sort',
                                                    value: ''
                                                }
                                            ], void 0, { isReset: !0 }), $('.js-multiple_select').hide(100, function () {
                                                $(this).remove();
                                            }));
                                        });
                                        s ? $('input[type=checkbox]').eq(0).focus() : $('input[type=radio]').eq(0).focus();
                                        $('.js-multiple_select-close, .js-multiple_select, .js-multiple_select-header-close').on('click', function () {
                                            $('.js-multiple_select').fadeOut(100, function () {
                                                $(this).remove();
                                            });
                                            $('.js-tooltip_alert').remove();
                                        });
                                        $('.js-multiple_select-frame').on('click', function (a) {
                                            a.stopPropagation();
                                        });
                                    });
                                    $('.js-multiple_select').show();
                                }).fail(function (a) {
                                    alert('通信エラー');
                                }).always(function (a) {
                                    $('.js-loading').removeClass('__active');
                                });
                            }
                            if (f.length >= y) {
                                if (h = f.eq(0).data('key'), 'iroha' != h && 'alpha' != h) {
                                    var s = -1 === r.indexOf(h) ? !1 : !0, m = c.data[h].split(','), l = [];
                                    $.each(f, function (a, b) {
                                        var c = $(b).data('value'), d = -1 === m.indexOf('' + c) ? !1 : !0;
                                        l.push({
                                            title: $('span:first-child', b).text(),
                                            total: $('span:last-child', b).text(),
                                            key: $(b).data('key'),
                                            value: c,
                                            selected: d
                                        });
                                    });
                                    var n = {
                                        title: b.text().trim(),
                                        multiple: s,
                                        close: lang_close,
                                        select: lang_select,
                                        items: l
                                    };
                                    $.get(module_js + 'templates/multiple_select.html', function (a) {
                                        a = Mustache.render(a, n);
                                        $('body').append(a);
                                        $('.js-multiple_select').fadeIn(100);
                                        $('.js-multiple_select-done').on('click', function (a) {
                                            var b = [];
                                            $('.js-multiple_select-item-check:checked').each(function (a, c) {
                                                b.push(c.dataset.value);
                                            });
                                            check_limit_parameters($(this), c.get_proparty(), h, b, r) || ($('.js-tooltip_alert').remove(), d([
                                                {
                                                    key: h,
                                                    value: b.join()
                                                },
                                                {
                                                    key: 'sort',
                                                    value: ''
                                                }
                                            ], void 0, { isReset: !0 }), $('.js-multiple_select').hide(100, function () {
                                                $(this).remove();
                                            }));
                                        });
                                        s ? $('input[type=checkbox]').eq(0).focus() : $('input[type=radio]').eq(0).focus();
                                        $('.js-multiple_select-close, .js-multiple_select, .js-multiple_select-header-close').on('click', function () {
                                            $('.js-multiple_select').fadeOut(100, function () {
                                                $(this).remove();
                                            });
                                            $('.js-tooltip_alert').remove();
                                        });
                                        $('.js-multiple_select-frame').on('click', function (a) {
                                            a.stopPropagation();
                                        });
                                    });
                                    q(b);
                                }
                            } else
                                g.toggleClass('__active'), e.toggle(), g.hasClass('__active') ? f.slideDown() : f.each(function () {
                                    $(this).index() >= x && $(this).slideUp();
                                });
                        });
                        $(document).on('click', '.js-dl', function () {
                            $(this).data('file_id');
                            $(this).data('release_count');
                            return !0;
                        });
                        $(document).on('click', '.js-dl_all', function () {
                            if (!$(this).hasClass('__inactive')) {
                                var a = {}, c = [];
                                $('.js-dl').each(function (b, d) {
                                    c[b] = d.dataset.file_type;
                                    a[c[b]] = c[b];
                                });
                                $('.js-file-format').html('');
                                $.each(a, function (a, b) {
                                    $('.js-file-format').append('<label><input class="js-file_format" name="file_format" type="radio" data-file_name="' + b + '" tabindex="22"> ' + b + format_file + '</label>');
                                });
                                $('input[name="file_format"]:eq(0)').attr('checked', !0);
                                $('.js-view-file-format').text($('input[name="file_format"]:eq(0)').data('file_name') + format_file);
                                $('.js-loading').addClass('__active');
                                $('.js-all-file-download-modal').addClass('__active');
                                b();
                                $('input[name="file_format"]:radio').change(function () {
                                    b();
                                });
                            }
                        });
                        $('.js-all-file-download-close').on('click', function (a) {
                            $('.js-all-file-download-modal').removeClass('__active');
                        });
                        $('.js-all-file-download-modal').on('click', function (a) {
                            $('.js-all-file-download-modal').removeClass('__active');
                        });
                        $('.js-all-file-download').on('click', function (a) {
                            if (0 !== $('.js-dl').length) {
                                a = 'undefined' !== typeof c.data.page ? c.data.page : 1;
                                var b = '', d = $('input[name="file_format"]:checked').data('file_name');
                                $('.js-dl').each(function (a, c) {
                                    d === c.dataset.file_type && (b += c.dataset.file_id + ':' + c.dataset.release_count + ',');
                                });
                                b = b.slice(0, -1);
                                location.href = H + '?page=' + a + '&files=' + b;
                            }
                        });
                        $('.js-all-file-download-inner').on('click', function (a) {
                            a.stopPropagation();
                        });
                        $('.js-all-file-download-modal').on('click', function (a) {
                            $('.js-all-file-download-modal').removeClass('__active');
                            a.stopPropagation();
                        });
                        $(document).on('click', '.js-reset_filter-btn', function () {
                            d([
                                {
                                    key: 'query',
                                    value: ''
                                },
                                {
                                    key: 'page',
                                    value: ''
                                },
                                {
                                    key: 'sort',
                                    value: ''
                                },
                                {
                                    key: 'layout',
                                    value: ''
                                },
                                {
                                    key: 'stat_infid',
                                    value: ''
                                },
                                {
                                    key: 'toukei',
                                    value: ''
                                },
                                {
                                    key: 'tid',
                                    value: ''
                                },
                                {
                                    key: 'bunya_l',
                                    value: ''
                                },
                                {
                                    key: 'bunya_s',
                                    value: ''
                                },
                                {
                                    key: 'kikan',
                                    value: ''
                                },
                                {
                                    key: 'tstat',
                                    value: ''
                                },
                                {
                                    key: 'lid',
                                    value: ''
                                },
                                {
                                    key: 'cycle',
                                    value: ''
                                },
                                {
                                    key: 'year',
                                    value: ''
                                },
                                {
                                    key: 'month',
                                    value: ''
                                },
                                {
                                    key: 'open_date',
                                    value: ''
                                },
                                {
                                    key: 'tclass1',
                                    value: ''
                                },
                                {
                                    key: 'tclass2',
                                    value: ''
                                },
                                {
                                    key: 'tclass3',
                                    value: ''
                                },
                                {
                                    key: 'tclass4',
                                    value: ''
                                },
                                {
                                    key: 'tclass5',
                                    value: ''
                                },
                                {
                                    key: 'bid',
                                    value: ''
                                },
                                {
                                    key: 'year_from',
                                    value: ''
                                },
                                {
                                    key: 'year_to',
                                    value: ''
                                },
                                {
                                    key: 'month_from',
                                    value: ''
                                },
                                {
                                    key: 'month_to',
                                    value: ''
                                },
                                {
                                    key: 'toukei_kind',
                                    value: ''
                                },
                                {
                                    key: 'kana',
                                    value: ''
                                },
                                {
                                    key: 'abc',
                                    value: ''
                                },
                                {
                                    key: 'iroha',
                                    value: ''
                                },
                                {
                                    key: 'alpha',
                                    value: ''
                                },
                                {
                                    key: 'file_type',
                                    value: ''
                                },
                                {
                                    key: 'collect_area',
                                    value: ''
                                },
                                {
                                    key: 'tstat_open',
                                    value: ''
                                },
                                {
                                    key: 'tclass_open',
                                    value: ''
                                },
                                {
                                    key: 'tclass1val',
                                    value: ''
                                },
                                {
                                    key: 'tclass2val',
                                    value: ''
                                },
                                {
                                    key: 'tclass3val',
                                    value: ''
                                },
                                {
                                    key: 'tclass4val',
                                    value: ''
                                },
                                {
                                    key: 'tclass5val',
                                    value: ''
                                },
                                {
                                    key: 'result_back',
                                    value: ''
                                },
                                {
                                    key: 'cycle_facet',
                                    value: ''
                                },
                                {
                                    key: 'result_page',
                                    value: ''
                                },
                                {
                                    key: 'result_back',
                                    value: ''
                                },
                                {
                                    key: 'metadata',
                                    value: ''
                                },
                                {
                                    key: 'data',
                                    value: ''
                                },
                                {
                                    key: 'hclass',
                                    value: ''
                                }
                            ], void 0, { isReset: !0 });
                        });
                    });
                    $(document).on('click', '.js-api', function (b) {
                        $('.js-api_link-url[data-format=xml]').val($(b.currentTarget).data('url'));
                        $('.js-api_link-url[data-format=json]').val($(b.currentTarget).data('url_json'));
                        $('.js-api_link-url[data-format=csv]').val($(b.currentTarget).data('url_csv'));
                        p();
                        $('.js-api_link').addClass('__active');
                    });
                    $(document).on('change', '.js-api_format_select, .js-api_range_select', function (b) {
                        p();
                    });
                    $('.js-api_link-close, .js-api_link').on('click', function (b) {
                        $('.js-api_link').removeClass('__active');
                    });
                    $('.js-api_link-frame').on('click', function (b) {
                        b.stopPropagation();
                    });
                    $(document).on('keydown', '.js-api_link-url, .js-api_link-close', function (b) {
                        if (9 === b.keyCode && !b.shiftKey) {
                            if ($(b.target).hasClass('js-api_link-url'))
                                return $('.js-api_link-close').focus(), !1;
                        } else if (9 === b.keyCode && b.shiftKey) {
                            if ($(b.target).hasClass('js-api_link-url'))
                                return $('.js-api_link-close').focus(), !1;
                            if ($(b.target).hasClass('js-api_link-close'))
                                return $('.js-api_link-url').focus(), !1;
                        }
                    });
                    $('.js-search-info-open').on('click', function (b) {
                        $('.js-search-info_content').addClass('__active');
                    });
                    $('.js-search-info-close, .js-search-info-header-close').on('click', function (b) {
                        $('.js-search-info_content').removeClass('__active');
                    });
                    $(document).on('keydown', '.js-search-info-open', function (b) {
                        if (9 === b.keyCode && !b.shiftKey && $('.js-search-info_content').hasClass('__active'))
                            return $('.js-search-info-close').focus(), !1;
                    });
                    $(document).on('keydown', '.js-search-info-close, .js-search-info-header-close', function (b) {
                        if (9 === b.keyCode && !b.shiftKey && $(this).hasClass('js-search-info-close'))
                            return $('.js-search-info-header-close').focus(), !1;
                        if (9 === b.keyCode && b.shiftKey && $(this).hasClass('js-search-info-header-close'))
                            return $('.js-search-info-close').focus(), !1;
                    });
                    document.addEventListener('keydown', function (b) {
                        var c = b.target;
                        'INPUT' == c.nodeName && ('search_word' == c.name && 13 == b.keyCode) && (b.stopPropagation(), $('.js-search_word_btn').trigger('click'));
                    });
                }.apply(this, arguments);
            } finally {
                if ($___old_a9f73de587bcbb59)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_a9f73de587bcbb59));
                if ($___old_4cd2b0b415b3b561)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4cd2b0b415b3b561));
            }
        });
        function $___var_dda9094b83a40dd7() {
            var p = {}, u = $('.js-item_child.stat-has-child');
            $.each(u, function (l, d) {
                var e = $(d).data('value1');
                e && (p['1:' + e] = $('.js-item_child[data-value1=' + e + '][data-matter="2"]').length);
                var h = $(d).data('value2');
                h && (p['1:' + e + '_2:' + h] = $('.js-item_child[data-value2=' + h + '][data-matter="3"]').length);
                var f = $(d).data('value3');
                f && (p['1:' + e + '_2:' + h + '_3:' + f] = $('.js-item_child[data-value3=' + f + '][data-matter="4"]').length);
                var n = $(d).data('value4');
                n && (p['1:' + e + '_2:' + h + '_3:' + f + '_4:' + n] = $('.js-item_child[data-value4=' + n + '][data-matter="5"]').length);
                var t = $(d).data('value5');
                t && (p['1:' + e + '_2:' + h + '_3:' + f + '_4:' + n + '5:' + t] = $('.js-item_child[data-value5=' + t + '][data-matter="6"]').length);
            });
            var w, q;
            $.each(p, function (l, d) {
                if (d >= toggleViewCount) {
                    w = l.split('_');
                    var e = '';
                    $.each(w, function (d, g) {
                        q = g.split(':');
                        e += '[data-value' + q[0] + '=' + q[1] + ']';
                    });
                    if ('' != e) {
                        $('.js-item2_parent' + e + ':first').css('display', 'flex');
                        $('.js-item2_parent' + e + ':first > .stat-title-has-child').prepend('<span class="js-click stat-icon"data-none="' + e + '"><i class="fa fa-plus" style="font-size: 1.7rem;color:rgba(40, 107, 198, 1);" aria-hidden="true"></i>&nbsp;&nbsp;</span>').css('display', 'flex');
                        var h = '';
                        $('.js-item2_parent' + e);
                        var f = 1, n = '', p = [];
                        $.each($('.js-item2_parent' + e), function (d, g) {
                            var e = parseInt($(g).attr('data-matter'));
                            0 != d && ('6' == e && ($(g).attr('data-value1') ? $(g).attr('data-value2') ? $(g).attr('data-value3') ? $(g).attr('data-value4') ? $(g).attr('data-value5') || (e = 5) : e = 4 : e = 3 : e = 2 : e = 1), h = parseInt(n) < parseInt(e) && 1 !== f ? h + ('<li class=\'stat-matter' + e + ' \'>' + g.outerHTML + '</li></ul>') : parseInt(n) == parseInt(e) ? h + ('<li class=\'stat-matter' + e + ' \'>' + g.outerHTML + '</li>') : h + ('<ul class=\'stat-matter' + e + ' \'><li class=\'stat-matter' + e + '\'>' + g.outerHTML + '</li>'), p[p.length] = g, f += 1);
                            n = e;
                        });
                        $.each(p, function (d, e) {
                            $(e).parent().remove();
                        });
                        $('.js-item2_parent' + e).eq(0).after('<div style="display: none;" class="js-toggle"data-none="' + e + '">' + h + '</div>');
                        if (h.match(/__new/)) {
                            var m = $('.js-toggle .__new').html();
                            $('.js-item2_parent' + e + ':first > .stat-newinfo-icon > .stat-common-top-page-newslist').addClass('__new').html(m);
                        } else
                            h.match(/__up/) && (m = $('.js-toggle .__up').html(), $('.js-item2_parent' + e + ':first > .stat-newinfo-icon > .stat-common-top-page-newslist').addClass('__up').html(m));
                        $.each($('.js-toggle'), function (d, e) {
                            1 < $(this).find('ul').length && $(this).find('ul:first').addClass('stat-long');
                        });
                        $.each($('.js-items ul'), function (d, e) {
                            0 === $(e).find('li').length && $(e).remove();
                        });
                        $('.js-toggle > ul:last').addClass('stat-last_ul_matters');
                        $('.js-toggle > ul:last li:last').addClass('stat-last_li_matters');
                        $('.js-toggle > li').addClass('stat-list_matters');
                        $('.js-toggle > li:last').addClass('stat-last_list_matters');
                        $.each($('.js-items .js-toggle > ul.stat-last_ul_matters'), function (d, e) {
                            1 === $('li:first > div', e).length && $('li:first', e).addClass('stat-first_li_matters');
                        });
                    }
                }
            });
            $('.js-toggle ul.stat-last:last').addClass('stat-last_tclass');
            $('.js-toggle ul.stat-not-last:last').addClass('stat-last_tclass');
            $('.js-click').on('click', function (l) {
                l = $(this).data('none');
                $(this).find('.fa').toggleClass('fa-plus');
                $(this).find('.fa').toggleClass('fa-minus');
                $('.js-toggle[data-none="' + l + '"]').slideToggle();
                l = $(this).find('.fa').hasClass('fa-plus') ? 1 : 0;
                $(this).parent().siblings('.stat-newinfo-icon').find('.stat-common-top-page-newslist').css('opacity', l);
                $('.js-toggle ul.stat-last:visible:last').addClass('stat-last_tclass');
                $('.js-toggle ul.stat-not-last:visible:last').addClass('stat-last_tclass');
                $('.js-item_child').css('background', '');
                $('.js-item_child span.stat-title, .js-item_child span.stat-title-has-child').css('background', '');
                $('.js-item_child:visible:odd').addClass('stat-odd_items');
            });
            $('.js-tclass_open').length && $('.js-all_tclass_open').css('visibility', 'visible');
        }
        ;
    }())
}