var searchTypes, BrowserDetect, toggleClickEvent, toggle, gifMenuItem, MG_Flipbook, MG_Scroll, _typeof, dropdown, filterableDropDown, _typeof, autocompleteSearch, _typeof, friendRequestModal, tooltipPromoContent, tooltipPromoRemove, disablePlaylistPlusButon, friendRequestModalContent, appendedTasteProfile, scrollToElement, getCookie, setCookie, builtModal, recal, getUrlVars, nl2br, strpos, updateQueryStringParameter, initTooltip, renderCommentLinks, blurTimeout, focusReply, openReply, addShareExternal, modelNotificationList, VideoPreview, removeProfileItem, removeItem, removeItemSimple, formSubmit, myInt, cacheAjaxNotif, offset, limit, scrollLimit, htmlspecialchars_decode, createMailAlert, createfriendRequestAlert, noAlert, insertNotificationContent, leaveModal, manageRequest, reportSpam, fetchData, fetchDataMessages, fetchDataNotification, avatarPopupHandler, cache, timeout, avatarLoad, mouseEnterAvatar, mouseLeaveAvatar, fadeClickthroughEvent, firstChild, LoverManageModal;
{
    const $___mock_3773b652659315ab = {};
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
    })($___mock_3773b652659315ab);
    (function () {
        toggleClickEvent = $___var_9cce42823d71bd54;
        ({}.constructor.defineProperty(toggleClickEvent, 'name', {
            configurable: true,
            enumerable: false,
            value: 'toggleClickEvent',
            writable: false
        }));
        toggle = $___var_c77dc8367377c2d3;
        ({}.constructor.defineProperty(toggle, 'name', {
            configurable: true,
            enumerable: false,
            value: 'toggle',
            writable: false
        }));
        _typeof = $___var_ac17442df9eb7799;
        ({}.constructor.defineProperty(_typeof, 'name', {
            configurable: true,
            enumerable: false,
            value: '_typeof',
            writable: false
        }));
        filterableDropDown = $___var_c5d2b8c1eae96aeb;
        ({}.constructor.defineProperty(filterableDropDown, 'name', {
            configurable: true,
            enumerable: false,
            value: 'filterableDropDown',
            writable: false
        }));
        _typeof = $___var_64ff2d14def0015c;
        ({}.constructor.defineProperty(_typeof, 'name', {
            configurable: true,
            enumerable: false,
            value: '_typeof',
            writable: false
        }));
        _typeof = $___var_42343678ad61dd02;
        ({}.constructor.defineProperty(_typeof, 'name', {
            configurable: true,
            enumerable: false,
            value: '_typeof',
            writable: false
        }));
        appendedTasteProfile = $___var_993f829efccfd77b;
        ({}.constructor.defineProperty(appendedTasteProfile, 'name', {
            configurable: true,
            enumerable: false,
            value: 'appendedTasteProfile',
            writable: false
        }));
        scrollToElement = $___var_5b90a356ddebb4e6;
        ({}.constructor.defineProperty(scrollToElement, 'name', {
            configurable: true,
            enumerable: false,
            value: 'scrollToElement',
            writable: false
        }));
        getCookie = $___var_255888ef0c4b2926;
        ({}.constructor.defineProperty(getCookie, 'name', {
            configurable: true,
            enumerable: false,
            value: 'getCookie',
            writable: false
        }));
        setCookie = $___var_5cdc690f9dad399e;
        ({}.constructor.defineProperty(setCookie, 'name', {
            configurable: true,
            enumerable: false,
            value: 'setCookie',
            writable: false
        }));
        builtModal = $___var_e76bbc3740cd4f84;
        ({}.constructor.defineProperty(builtModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'builtModal',
            writable: false
        }));
        recal = $___var_1abd5bb1a83f107f;
        ({}.constructor.defineProperty(recal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'recal',
            writable: false
        }));
        getUrlVars = $___var_a140b0e4ba83711c;
        ({}.constructor.defineProperty(getUrlVars, 'name', {
            configurable: true,
            enumerable: false,
            value: 'getUrlVars',
            writable: false
        }));
        nl2br = $___var_5db8979e88710b77;
        ({}.constructor.defineProperty(nl2br, 'name', {
            configurable: true,
            enumerable: false,
            value: 'nl2br',
            writable: false
        }));
        strpos = $___var_4033c18c17455e2c;
        ({}.constructor.defineProperty(strpos, 'name', {
            configurable: true,
            enumerable: false,
            value: 'strpos',
            writable: false
        }));
        updateQueryStringParameter = $___var_e18a3824a1ed5a02;
        ({}.constructor.defineProperty(updateQueryStringParameter, 'name', {
            configurable: true,
            enumerable: false,
            value: 'updateQueryStringParameter',
            writable: false
        }));
        initTooltip = $___var_e45bd37ea049c56e;
        ({}.constructor.defineProperty(initTooltip, 'name', {
            configurable: true,
            enumerable: false,
            value: 'initTooltip',
            writable: false
        }));
        renderCommentLinks = $___var_41460ded9cd6304b;
        ({}.constructor.defineProperty(renderCommentLinks, 'name', {
            configurable: true,
            enumerable: false,
            value: 'renderCommentLinks',
            writable: false
        }));
        focusReply = $___var_63628a360a7b93fa;
        ({}.constructor.defineProperty(focusReply, 'name', {
            configurable: true,
            enumerable: false,
            value: 'focusReply',
            writable: false
        }));
        openReply = $___var_6c7c4f466cc49724;
        ({}.constructor.defineProperty(openReply, 'name', {
            configurable: true,
            enumerable: false,
            value: 'openReply',
            writable: false
        }));
        addShareExternal = $___var_428f6d7a24ae6bd5;
        ({}.constructor.defineProperty(addShareExternal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'addShareExternal',
            writable: false
        }));
        removeProfileItem = $___var_a68dc1bfcd9932b2;
        ({}.constructor.defineProperty(removeProfileItem, 'name', {
            configurable: true,
            enumerable: false,
            value: 'removeProfileItem',
            writable: false
        }));
        removeItem = $___var_cd9712451fdfa365;
        ({}.constructor.defineProperty(removeItem, 'name', {
            configurable: true,
            enumerable: false,
            value: 'removeItem',
            writable: false
        }));
        removeItemSimple = $___var_c19326aa944c9d9e;
        ({}.constructor.defineProperty(removeItemSimple, 'name', {
            configurable: true,
            enumerable: false,
            value: 'removeItemSimple',
            writable: false
        }));
        htmlspecialchars_decode = $___var_186540fb0f4ac087;
        ({}.constructor.defineProperty(htmlspecialchars_decode, 'name', {
            configurable: true,
            enumerable: false,
            value: 'htmlspecialchars_decode',
            writable: false
        }));
        createMailAlert = $___var_f69c4056c0c25d6c;
        ({}.constructor.defineProperty(createMailAlert, 'name', {
            configurable: true,
            enumerable: false,
            value: 'createMailAlert',
            writable: false
        }));
        createfriendRequestAlert = $___var_dc818fe9110e1d37;
        ({}.constructor.defineProperty(createfriendRequestAlert, 'name', {
            configurable: true,
            enumerable: false,
            value: 'createfriendRequestAlert',
            writable: false
        }));
        noAlert = $___var_38126eb6345f7d3d;
        ({}.constructor.defineProperty(noAlert, 'name', {
            configurable: true,
            enumerable: false,
            value: 'noAlert',
            writable: false
        }));
        insertNotificationContent = $___var_572559cba903c5b5;
        ({}.constructor.defineProperty(insertNotificationContent, 'name', {
            configurable: true,
            enumerable: false,
            value: 'insertNotificationContent',
            writable: false
        }));
        leaveModal = $___var_70f0f8b45d80d92a;
        ({}.constructor.defineProperty(leaveModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'leaveModal',
            writable: false
        }));
        manageRequest = $___var_27f64d0a3b379c37;
        ({}.constructor.defineProperty(manageRequest, 'name', {
            configurable: true,
            enumerable: false,
            value: 'manageRequest',
            writable: false
        }));
        reportSpam = $___var_5c4224c1b7a78bfd;
        ({}.constructor.defineProperty(reportSpam, 'name', {
            configurable: true,
            enumerable: false,
            value: 'reportSpam',
            writable: false
        }));
        fetchData = $___var_102a8d1092738ac7;
        ({}.constructor.defineProperty(fetchData, 'name', {
            configurable: true,
            enumerable: false,
            value: 'fetchData',
            writable: false
        }));
        fetchDataMessages = $___var_043bb2c48568de7e;
        ({}.constructor.defineProperty(fetchDataMessages, 'name', {
            configurable: true,
            enumerable: false,
            value: 'fetchDataMessages',
            writable: false
        }));
        fetchDataNotification = $___var_b90c2d422625d301;
        ({}.constructor.defineProperty(fetchDataNotification, 'name', {
            configurable: true,
            enumerable: false,
            value: 'fetchDataNotification',
            writable: false
        }));
        avatarPopupHandler = $___var_29106e402ae56010;
        ({}.constructor.defineProperty(avatarPopupHandler, 'name', {
            configurable: true,
            enumerable: false,
            value: 'avatarPopupHandler',
            writable: false
        }));
        avatarLoad = $___var_2ca2bcd996941d25;
        ({}.constructor.defineProperty(avatarLoad, 'name', {
            configurable: true,
            enumerable: false,
            value: 'avatarLoad',
            writable: false
        }));
        mouseEnterAvatar = $___var_1a67688fe2dd6d0b;
        ({}.constructor.defineProperty(mouseEnterAvatar, 'name', {
            configurable: true,
            enumerable: false,
            value: 'mouseEnterAvatar',
            writable: false
        }));
        mouseLeaveAvatar = $___var_5b6fec87db2cabaa;
        ({}.constructor.defineProperty(mouseLeaveAvatar, 'name', {
            configurable: true,
            enumerable: false,
            value: 'mouseLeaveAvatar',
            writable: false
        }));
        firstChild = $___var_05036c20b74c7478;
        ({}.constructor.defineProperty(firstChild, 'name', {
            configurable: true,
            enumerable: false,
            value: 'firstChild',
            writable: false
        }));
        var $___var_acf8bdea995b79dc, $___var_93918093db3b5a30 = {
                init: function () {
                    this.browser = this.searchString(this.dataBrowser) || 'Other', this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Unknown';
                },
                searchString: function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t].string;
                        if (this.versionSearchString = e[t].subString, -1 != r.indexOf(e[t].subString))
                            return e[t].identity;
                    }
                },
                searchVersion: function (e) {
                    var t = e.indexOf(this.versionSearchString);
                    if (-1 != t)
                        return parseFloat(e.substring(t + this.versionSearchString.length + 1));
                },
                dataBrowser: [
                    {
                        string: navigator.userAgent,
                        subString: 'Edge',
                        identity: 'Edge'
                    },
                    {
                        string: navigator.userAgent,
                        subString: 'Chrome',
                        identity: 'Chrome'
                    },
                    {
                        string: navigator.userAgent,
                        subString: 'MSIE',
                        identity: 'Explorer'
                    },
                    {
                        string: navigator.userAgent,
                        subString: 'Firefox',
                        identity: 'Firefox'
                    },
                    {
                        string: navigator.userAgent,
                        subString: 'Safari',
                        identity: 'Safari'
                    },
                    {
                        string: navigator.userAgent,
                        subString: 'Opera',
                        identity: 'Opera'
                    }
                ]
            };
        searchTypes = $___var_acf8bdea995b79dc;
        BrowserDetect = $___var_93918093db3b5a30;
        function $___var_9cce42823d71bd54() {
            var e = isIpad() ? 'touchstart' : 'click';
            return e;
        }
        function $___var_c77dc8367377c2d3(e, t) {
            e = document.getElementById(e);
            'none' == e.style.display ? (e.style.display = t, e.focus()) : e.style.display = 'none';
        }
        if (BrowserDetect.init(), 'undefined' != typeof AUTOCOMPLETE_SEARCH_TYPES && ((searchTypes = []).push({
                name: AUTOCOMPLETE_SEARCH_TYPES.video,
                className: 'video',
                autocompleteUrl: '/video/search_autocomplete',
                submitUrl: searchUrlVideo,
                testTypePattern: 'video'
            }), void 0 !== AUTOCOMPLETE_SEARCH_TYPES.photos && searchTypes.push({
                name: AUTOCOMPLETE_SEARCH_TYPES.photos,
                className: 'photos',
                autocompleteUrl: '/video/search_autocomplete',
                submitUrl: searchUrlPhoto,
                testTypePattern: 'albums'
            }), searchTypes.push({
                name: AUTOCOMPLETE_SEARCH_TYPES.members,
                className: 'members',
                autocompleteUrl: null,
                submitUrl: searchUrlMember,
                testTypePattern: 'user'
            }), searchTypes.push({
                name: AUTOCOMPLETE_SEARCH_TYPES.pornstars,
                className: 'pornstars',
                autocompleteUrl: '/pornstars/search_autocomplete',
                submitUrl: searchUrlPornstar,
                submitUrlVideo: searchUrlVideo,
                testTypePattern: 'pornstars'
            }), void 0 !== AUTOCOMPLETE_SEARCH_TYPES.gifs && searchTypes.push({
                name: AUTOCOMPLETE_SEARCH_TYPES.gifs,
                className: 'gifs',
                autocompleteUrl: '/video/search_autocomplete',
                submitUrl: searchUrlGifs,
                testTypePattern: 'gifs'
            }), 1 == showStreamate && searchTypes.push({
                name: AUTOCOMPLETE_SEARCH_TYPES.camModels,
                className: 'cam models',
                autocompleteUrl: '/live/search_autocomplete',
                submitUrl: searchUrlCam,
                testTypePattern: 'live'
            })), 'Firefox' === BrowserDetect.browser) {
            var i, arrowIcons = document.querySelectorAll('.arrow.arrowMenu');
            if (arrowIcons)
                for (i = 0; i < arrowIcons.length; i++)
                    MG_Utils.addClass(arrowIcons[i], 'fFox');
        }
        document.querySelector('.fakeClick') && document.querySelector('.fakeClick').addEventListener('click', function () {
            var e = document.querySelector('#searchTypeSelected'), t = document.querySelector('#searchTypeSelected i');
            MG_Utils.hasClass(e, 'active') ? (MG_Utils.removeClass(e, 'active'), MG_Utils.removeClass(t, 'active')) : (MG_Utils.addClass(e, 'active'), MG_Utils.addClass(t, 'active'));
        }), document.addEventListener('click', function (e) {
            var t = document.querySelector('#searchTypeSelected.active'), r = document.querySelector('#searchTypeSelected i');
            t && 'fakeClick' !== e.target.className && (MG_Utils.removeClass(t, 'active'), MG_Utils.removeClass(r, 'active'));
        });
        var $___var_859b886181eb8f04 = (show = function (e) {
            var t, r, s = e.target;
            null == s.querySelector('video') ? (t = s.querySelector('img.thumb'), r = s.querySelector('div'), t && t.setAttribute('src', t.getAttribute('data-gif-url')), MG_Utils.addClass(s.querySelector('img.loader'), 'fade'), r && MG_Utils.addClass(r, 'slide')) : (e = s.querySelector('video')) && (t = e.querySelector('.js-webm'), r = e.querySelector('.js-mp4'), t && t.setAttribute('src', e.getAttribute('data-webm')), r && r.setAttribute('src', e.getAttribute('data-mp4')), s.querySelectorAll('video')[0].load(), e.setAttribute('autoplay', !0)), 'undefined' != typeof gifLoadTimeout && clearTimeout(gifLoadTimeout), function (t) {
                var e = t.querySelectorAll('img.thumb');
                'undefined' != typeof gifLoadTimeout && (gifLoadTimeout = setTimeout(function () {
                    var e = t.querySelector('img.loader');
                    e && MG_Utils.removeClass(e, 'fade');
                }, 10000));
                [].forEach.call(e, function (e) {
                    e.addEventListener('load', function () {
                        MG_Utils.removeClass(e.parentNode.querySelector('img.loader'), 'fade');
                    });
                });
            }(s);
        }, hide = function (e) {
            var t, r, s = e.target;
            null == s.querySelector('video') ? (t = s.querySelector('img.thumb'), r = s.querySelector('div'), t && t.setAttribute('src', t.getAttribute('data-static-url')), MG_Utils.removeClass(s.querySelector('img.loader'), 'fade'), r && MG_Utils.removeClass(r, 'slide')) : (e = s.querySelector('video')) && (t = s.querySelectorAll('video')[0], r = e.querySelector('.js-webm'), s = e.querySelector('.js-mp4'), r && r.removeAttribute('src'), s && s.removeAttribute('src'), t.pause(), e.setAttribute('autoplay', !1), t.load());
        }, {
            hideGifs: hide,
            showGifs: show
        });
        gifMenuItem = $___var_859b886181eb8f04;
        !function () {
            'use strict';
            var i = {
                    options: {
                        debug: !1,
                        parent: '#headerMainMenu',
                        menuItem: '.menu',
                        submenu: '.js-dropdown',
                        submenuContent: '.js-submenu',
                        topMenu: '.js-topMenuLink',
                        discover: '.discover',
                        timeout: 250
                    },
                    asyncMenuItems: ['menu_livesex'],
                    cache: {},
                    cacheTime: new Date().getTime() + 1800000,
                    init: function (e) {
                        document.querySelector(this.options.parent) && (e = e || {}, this.options = MG_Utils.extendSimple(this.options, e), this.options.debug && console.log('Menu debug mode'), this.createMenuInStorage(), this.eventHandlers());
                    },
                    isHovered: function (e) {
                        return 1 == e.getAttribute('data-hover');
                    },
                    createMenuInStorage: function () {
                        this.asyncMenuItems.forEach(function (t) {
                            var e;
                            switch (t) {
                            case 'menu_livesex':
                                e = MENU_MAIN_HEADER.liveSexUrl;
                                break;
                            case 'menu_photos':
                                e = MENU_MAIN_HEADER.photosUrl;
                                break;
                            default:
                                return '';
                            }
                            i.cache[t] || MG_Utils.ajaxCall({
                                dataType: 'html',
                                type: 'GET',
                                url: e,
                                success: function (e) {
                                    i.cache[t] = { data: e };
                                }
                            });
                        });
                    },
                    asyncItems: function (e, t) {
                        var n, s;
                        MG_Utils.hasClass(e, 'asyncLoad') && (n = this, MG_Utils.hasClass(e, 'livesex') ? s = MENU_MAIN_HEADER.liveSexUrl : MG_Utils.hasClass(e, 'photos') && (s = MENU_MAIN_HEADER.photosUrl), MG_Utils.ajaxCall({
                            type: 'GET',
                            url: s,
                            dataType: 'html',
                            beforeSend: function () {
                                t.innerHTML = '<div class="menuAsync"><img class="menuAsyncPreload" src="' + MENU_MAIN_HEADER.preloadImage + '"></div>';
                            },
                            success: function (e) {
                                e && e.length && (n.createMenuInStorage(), t.innerHTML = e);
                            }
                        }));
                    },
                    cacheExpire: function (e) {
                        return this.cacheTime - e <= 0;
                    },
                    loadContent: function (e, t) {
                        var n = new Date().getTime();
                        return MG_Utils.hasClass(e, 'livesex') && i.cache.menu_livesex && !this.cacheExpire(n) ? t.innerHTML = i.cache.menu_livesex.data : MG_Utils.hasClass(e, 'photos') && i.cache.menu_photos && !this.cacheExpire(n) ? t.innerHTML = i.cache.menu_photos.data : (this.cacheExpire(n) && (this.cacheTime = new Date().getTime() + 1800000, this.cache = {}), void this.asyncItems(e, t));
                    },
                    showSubmenu: function (e) {
                        var s = e.target || e.srcElement, o = s.querySelector(i.options.submenu);
                        o && (s.setAttribute('data-hover', 1), (e = document.querySelector('.activeMenuTab')) && MG_Utils.removeClass(e, 'activeMenuTab'), MG_Utils.addClass(s, 'activeMenuTab'), setTimeout(function () {
                            if (i.isHovered(s)) {
                                var e = o.querySelector(i.options.discover);
                                if (e) {
                                    e.style.display = 'inline-block';
                                    var t = o.querySelectorAll('.js-menuSwap'), n = 0;
                                    if (t && t.length)
                                        for (; n < t.length; n++)
                                            t[n].setAttribute('src', t[n].getAttribute('data-image'));
                                } else
                                    o.querySelector(i.options.submenuContent).style.display = checkForGridSupport() ? 'grid' : 'block', MG_Utils.hasClass(s, 'asyncLoad') && i.loadContent(s, o.querySelector(i.options.submenuContent));
                                MG_Utils.addClass(s.querySelector(i.options.topMenu), 'hovered'), o.style.display = 'block';
                            }
                        }, i.options.timeout), (e = document.querySelectorAll('#headerMainMenu li.menu').length) && MG_Utils.hasClass(s, 'item-'.concat(e)) && document.activeElement === s && ((e = s && s.getElementsByTagName('a')[s.getElementsByTagName('a').length - 1]) && e.addEventListener('blur', function () {
                            s.setAttribute('data-hover', 0);
                            var e = s.querySelector('.js-dropdown'), t = s.querySelector('.js-topMenuLink');
                            e && (e.style.display = 'none'), t && MG_Utils.removeClass(t, 'hovered');
                        })));
                    },
                    hideSubmenu: function (e) {
                        var t = e.target || e.srcElement, n = t.querySelector(i.options.submenu);
                        n && (t.setAttribute('data-hover', 0), setTimeout(function () {
                            var e;
                            i.isHovered(t) || (n.style.display = 'none', (e = n.querySelector(i.options.discover)) ? (e.style.display = 'none', MG_Utils.hasClass(t, 'asyncLoad') && (n.querySelector(i.options.submenuContent).innerHTML = '')) : n.querySelector(i.options.submenuContent).style.display = 'none', MG_Utils.removeClass(t.querySelector(i.options.topMenu), 'hovered'));
                        }, i.options.timeout + 200));
                    },
                    eventHandlers: function () {
                        for (var e = document.querySelector(this.options.parent).querySelectorAll(this.options.menuItem), n = this, t = 0; t < e.length; t++) {
                            var s = e[t];
                            MG_Utils.addEventHandler(s, 'mouseenter', this.showSubmenu), MG_Utils.addEventHandler(s, 'mouseleave', this.hideSubmenu), MG_Utils.addEventHandler(s, 'focus', function (e) {
                                var t = e.target;
                                !t || document.activeElement !== t || (t = (t = n.options && document.querySelector(n.options.parent)) && t.querySelectorAll('.menu:not(.activeMenuTab)')) && t.forEach(function (e) {
                                    e.setAttribute('data-hover', 0);
                                    var t = e.querySelector('.js-dropdown'), e = e.querySelector('.js-topMenuLink');
                                    t && (t.style.display = 'none'), e && MG_Utils.removeClass(e, 'hovered');
                                }), n.showSubmenu(e);
                            });
                        }
                    }
                }, a = {
                    options: {
                        debug: !1,
                        parent: '#headerMainMenu',
                        menuItem: '.menu',
                        submenu: '.js-dropdown',
                        submenuContent: '.js-submenu',
                        topMenu: '.js-topMenuLink',
                        discover: '.discover',
                        timeout: 250
                    },
                    asyncMenuItems: ['livesex'],
                    cache: {},
                    cacheTime: new Date().getTime() + 1800000,
                    init: function (e) {
                        document.querySelector(this.options.parent) && (e = e || {}, this.options = MG_Utils.extendSimple(this.options, e), this.options.debug && console.log('Menu debug mode'), this.createMenuInStorage(), this.eventHandlers());
                    },
                    isHovered: function (e) {
                        return 1 == e.getAttribute('data-hover');
                    },
                    createMenuInStorage: function () {
                        ~this.asyncMenuItems.indexOf(this.cache) || MG_Utils.ajaxCall({
                            type: 'GET',
                            url: MENU_MAIN_HEADER.menuUrl,
                            success: function (t) {
                                a.asyncMenuItems.forEach(function (e) {
                                    a.cache[e] = { data: t[e] };
                                });
                            }
                        });
                    },
                    asyncItems: function (n, s) {
                        var e;
                        MG_Utils.hasClass(n, 'asyncLoad') && (e = this, MG_Utils.ajaxCall({
                            type: 'GET',
                            url: MENU_MAIN_HEADER.menuUrl,
                            beforeSend: function () {
                                s.innerHTML = '<div class="menuAsync"><img class="menuAsyncPreload" src="' + MENU_MAIN_HEADER.preloadImage + '"></div>';
                            },
                            success: function (t) {
                                t && (e.createMenuInStorage(), a.asyncMenuItems.forEach(function (e) {
                                    MG_Utils.hasClass(n, e) && (s.innerHTML = t[e]);
                                }));
                            }
                        }));
                    },
                    cacheExpire: function (e) {
                        return this.cacheTime - e <= 0;
                    },
                    displayContent: function (t, n) {
                        var s = new Date().getTime(), o = !1;
                        a.asyncMenuItems.forEach(function (e) {
                            if (MG_Utils.hasClass(t, e) && a.cache[e] && !a.cacheExpire(s))
                                return n.innerHTML = a.cache[e].data, o = !0;
                        }), o || (this.cacheExpire(s) && (this.cacheTime = new Date().getTime() + 1800000, this.cache = {}), this.asyncItems(t, n));
                    },
                    showSubmenu: function (e) {
                        var s = e.target || e.srcElement, o = s.querySelector(a.options.submenu);
                        'undefined' != typeof isVideoPage && o && 'photos' === o.getAttribute('data-submenu-type') ? s.setAttribute('data-hover', 1) : o && (s.setAttribute('data-hover', 1), setTimeout(function () {
                            if (a.isHovered(s)) {
                                var e = o.querySelector(a.options.discover);
                                if (e) {
                                    e.style.display = 'inline-block';
                                    var t = o.querySelectorAll('.js-menuSwap'), n = 0;
                                    if (t && t.length)
                                        for (; n < t.length; n++)
                                            t[n].setAttribute('src', t[n].getAttribute('data-image'));
                                } else
                                    o.querySelector(a.options.submenuContent).style.display = checkForGridSupport() ? 'grid' : 'block', MG_Utils.hasClass(s, 'asyncLoad') && a.displayContent(s, o.querySelector(a.options.submenuContent));
                                MG_Utils.addClass(s.querySelector(a.options.topMenu), 'hovered'), o.style.display = 'block';
                            }
                        }, a.options.timeout));
                    },
                    hideSubmenu: function (e) {
                        var t = e.target || e.srcElement, n = t.querySelector(a.options.submenu);
                        n && (t.setAttribute('data-hover', 0), setTimeout(function () {
                            var e;
                            a.isHovered(t) || (n.style.display = 'none', (e = n.querySelector(a.options.discover)) ? (e.style.display = 'none', MG_Utils.hasClass(t, 'asyncLoad') && (n.querySelector(a.options.submenuContent).innerHTML = '')) : n.querySelector(a.options.submenuContent).style.display = 'none', MG_Utils.removeClass(t.querySelector(a.options.topMenu), 'hovered'));
                        }, a.options.timeout + 200));
                    },
                    eventHandlers: function () {
                        for (var e = document.querySelector(this.options.parent).querySelectorAll(this.options.menuItem), t = 0; t < e.length; t++) {
                            var n = e[t];
                            MG_Utils.addEventHandler(n, 'mouseenter', this.showSubmenu), MG_Utils.addEventHandler(n, 'mouseleave', this.hideSubmenu);
                        }
                    }
                };
            MG_Utils.domReady(function () {
                (page_params.getMenuType ? a : i).init();
            });
        }(), function () {
            var e = document.querySelectorAll('ul.gifsMenuItems li');
            e && [].forEach.call(e, function (e) {
                e.addEventListener('mouseenter', gifMenuItem.showGifs), e.addEventListener('mouseleave', gifMenuItem.hideGifs);
            });
            var n, e = document.getElementById('menuItem6');
            void 0 !== page_params.holiday_promo && e && ((n = e.querySelector('.js-topMenuLink')).href = '/', e.addEventListener('click', function (e) {
                var t = n.dataset.href;
                e.preventDefault(), e.stopPropagation(), window.location.href = t;
            }));
        }();
        var $___var_72fe8e9872d0cb77 = function MG_Flipbook() {
            'use strict';
            var Self = this, timer, o = {}, data = {}, flipTimer, oldThumbUrlAC;
            Self.init = function (e) {
                Self.params = e, Self.addEvents();
            }, Self.addEvent = function (e, t, i) {
                var a;
                e.addEventListener ? e.addEventListener(t, i, !1) : (i.$$guid || (i.$$guid = Self.addEvent.guid++), e.events || (e.events = {}), (a = e.events[t]) || (a = e.events[t] = {}, e['on' + t] && (a[0] = e['on' + t])), a[i.$$guid] = i, e['on' + t] = Self.handleEvent);
            }, Self.addEvent.guid = 1, Self.removeEvent = function (e, t, i) {
                e.removeEventListener ? e.removeEventListener(t, i, !1) : e.events && e.events[t] && delete e.events[t][i.$$guid];
            }, Self.handleEvent = function (e) {
                var t = !0;
                e = e || Self.fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
                var i, a = this.events[e.type];
                for (i in a)
                    this.$$handleEvent = a[i], !1 === this.$$handleEvent(e) && (t = !1);
                return t;
            }, Self.fixEvent = function (e) {
                return e.preventDefault = Self.fixEvent.preventDefault, e.stopPropagation = Self.fixEvent.stopPropagation, e;
            }, Self.fixEvent.preventDefault = function () {
                this.returnValue = !1;
            }, Self.fixEvent.stopPropagation = function () {
                this.cancelBubble = !0;
            }, Self.addEvents = function () {
                Self.addEvent(document.body, 'mousemove', Self.initFlip), Self.addEvent(document.body, 'mouseout', Self.terminateFlip), Self.addEvent(window, 'scroll', Self.endFlip);
            }, Self.hasClass = function (e, t) {
                return e.className && new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className);
            }, Self.closestElm = function (e, t, i) {
                for (var i = i || document.body, a = t.charAt(0); e && e !== i;) {
                    if ('.' === a && Self.hasClass(e, t.substr(1)))
                        return e;
                    if ('#' === a && e.id === t.substr(1))
                        return e;
                    if ('[' === a && e.getAttribute(t.substr(1, t.indexOf(']') - 1)))
                        return e;
                    e = e.parentNode;
                }
                return !1;
            }, Self.dataSet = function (string) {
                var data;
                try {
                    data = eval('(' + string + ')');
                } catch (e) {
                    data = !1;
                }
                return data;
            }, Self.data = function (e, t, i) {
                switch (e.data = e.data || {}, arguments.length) {
                case 3:
                    e.data[t] = i;
                    break;
                case 2:
                    return e.data[t];
                default:
                    return e.data;
                }
            }, Self.callbackData = function () {
                return data = {
                    index: o.index,
                    setLength: o.setLength,
                    currentImage: o.currentImage,
                    imgWrapper: o.imgWrapper,
                    currentUrl: o.currentUrl,
                    active: o.active,
                    status: o.status
                };
            }, Self.initFlip = function (e) {
                var t, e = (e = e || window.event).target || e.srcElement;
                window.clearTimeout(flipTimer), MG_Utils.hasClass(e, 'img') && MG_Utils.hasClass(e.querySelector('.thumb'), 'js-videoThumbFlip') && !e.querySelector('.js-videoThumbFlip').getAttribute('data-flipbook_active') && (t = e.querySelector('.js-videoThumbFlip')), (t = MG_Utils.hasClass(e, 'js-videoThumbFlip') && !e.getAttribute('data-flipbook_active') ? e : t) && (Self.closestElm(t, '.img').querySelector('.privateOverlay') || (flipTimer = window.setTimeout(function () {
                    Self.startFlip(t);
                }, 100)));
            }, Self.terminateFlip = function (e) {
                var t = (e = e || window.event).target, e = e.relatedTarget;
                window.clearTimeout(flipTimer), MG_Utils.hasClass(t, 'img') && MG_Utils.hasClass(t.querySelector('.thumb'), 'js-videoThumbFlip') && t.querySelector('.thumb').getAttribute('data-flipbook_active') && !MG_Utils.hasClass(e, 'thumb') && Self.endFlip(), MG_Utils.hasClass(t, 'js-videoThumbFlip') && t.getAttribute('data-flipbook_active') && Self.endFlip();
            }, Self.startFlip = function (e) {
                var t, i, a, l, n, s, r, f, u, d, c, m, e = e, S = 0, b = Self.params.thumbnailsSets.length;
                for (o.active && !Self.closestElm(e, '[data-flipbook_active]') && Self.endFlip(), oldThumbUrlAC = e.src; S < b; S++)
                    if (Self.closestElm(e, Self.params.thumbnailsSets[S].thumbnailsContainer) && (!Self.params.thumbnailsSets[S].extendHoverClassName && Self.hasClass(e, Self.params.thumbnailsSets[S].thumbnailsClassName) || Self.params.thumbnailsSets[S].extendHoverClassName && Self.closestElm(e, '.' + Self.params.thumbnailsSets[S].extendHoverClassName))) {
                        if (f = r = e, Self.params.thumbnailsSets[S].excludeContainer && Self.closestElm(r, Self.params.thumbnailsSets[S].excludeContainer))
                            return !1;
                        if (Self.params.thumbnailsSets[S].extendHoverClassName && (f = (r = Self.closestElm(r, '.' + Self.params.thumbnailsSets[S].extendHoverClassName)).querySelector('.' + Self.params.thumbnailsSets[S].thumbnailsClassName)), o.active) {
                            if (r.getAttribute('data-flipbook_active'))
                                return !1;
                            Self.endFlip();
                        }
                        return d = Self.params.thumbnailsSets[S].cover ? (l = (s = Self.dataSet(f.getAttribute('data-flipbook'))).setLength, a = s.firstThumbnail, n = parseInt(s.firstThumbnail, 10) - s.incrementer, t = s.digitsPreffix, i = s.digitsSuffix, s = s.incrementer, -1) : (Self.params.thumbnailsSets[S].adultCentro ? (u = 9, f.src = f.src.replace('primary', 'baseline/' + S)) : u = 1, d = /\(([^)]+)\)/, c = f.src.indexOf(').'), t = !(m = d.exec(f.src)) || -1 !== c ? f.src.substring(0, f.src.lastIndexOf(Self.params.thumbnailsSets[S].digitsPreffix) + u) : f.src.substring(0, f.src.lastIndexOf(')') + 1), n = f.src.replace(t, ''), i = Self.params.thumbnailsSets[S].digitsSuffix, n = parseInt(n.replace(i, ''), 10), a = Self.params.thumbnailsSets[S].firstThumbnail, l = Self.params.thumbnailsSets[S].setLength, (n - a) / (s = Self.params.thumbnailsSets[S].incrementer)), o = {
                            index: d,
                            setLength: l,
                            currentUrl: f.src,
                            firstThumbnail: a,
                            digits: n,
                            digitsPreffix: t,
                            digitsSuffix: i,
                            matches: m,
                            testString: c,
                            incrementer: s,
                            currentImage: f,
                            imgWrapper: !1,
                            interval: Self.params.thumbnailsSets[S].interval,
                            active: !0,
                            callback: Self.params.thumbnailsSets[S].callback,
                            init: Self.params.thumbnailsSets[S].init,
                            status: 'started'
                        }, r.setAttribute('data-flipbook_active', '1'), Self.params.thumbnailsSets[S].extendHoverClassName && (o.imgWrapper = r), o.init && !r.init && (Self.callbackData(), o.init(data)), r.init || (Self.params.thumbnailsSets[S].adultCentro ? Self.data(r, 'oldThumbUrl', oldThumbUrlAC) : (Self.data(r, 'oldThumbUrl', f.src), Self.data(r, 'oldIndex', d)), r.init = !0), o.callback && (Self.callbackData(), o.callback(data)), Self.params.thumbnailsSets[S].resetIndex && (o.digits = (l - 1) * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = l - 1, Self.callbackData()), window.clearTimeout(timer), timer = window.setTimeout(Self.preload, 0), !1;
                    }
            }, Self.endFlip = function () {
                var e;
                window.clearTimeout(timer), o.active && ((e = document.querySelector('[data-flipbook_active]')) && (e.removeAttribute('data-flipbook_active'), 'IMG' === e.nodeName ? e.src = Self.data(e, 'oldThumbUrl') : e.querySelector('img').src = Self.data(e, 'oldThumbUrl')), o.active = !1, o.status = 'ended', o.index = Self.data(e, 'oldIndex'), o.callback && (Self.callbackData(), o.callback(data)));
            }, Self.preload = function () {
                var e = new Image();
                o.digits < (o.setLength - 1) * o.incrementer + parseInt(o.firstThumbnail, 10) ? (o.digits = o.digits + o.incrementer, o.index++) : (o.digits = parseInt(o.firstThumbnail, 10), o.index = 0), o.firstThumbnail.length > String(o.digits).length ? o.currentUrl = o.digitsPreffix + o.firstThumbnail.substring(0, o.firstThumbnail.length - String(o.digits).length) + o.digits + o.digitsSuffix : -1 !== o.testString ? o.currentUrl = o.digitsPreffix + o.digits + '(' + o.matches[1] + ')' + o.digitsSuffix : o.currentUrl = o.digitsPreffix + o.digits + o.digitsSuffix, e.onerror = function () {
                    Self.endFlip();
                }, e.onload = function () {
                    o.active && (timer = 'running' !== o.status ? window.setTimeout(Self.flipImage, 0) : window.setTimeout(Self.flipImage, o.interval));
                }, e.src = o.currentUrl;
            }, Self.flipImage = function (e) {
                window.clearTimeout(timer), o.currentImage.src = o.currentUrl, o.status = 'running', o.callback && (Self.callbackData(), o.callback(data)), void 0 !== e && (o.digits = e * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = e, Self.callbackData()), Self.preload();
            }, Self.jumpTo = function (e) {
                o.digits = e * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = e, o.firstThumbnail.length > String(o.digits).length ? o.currentUrl = o.digitsPreffix + o.firstThumbnail.substring(0, o.firstThumbnail.length - String(o.digits).length) + o.digits + o.digitsSuffix : o.currentUrl = o.digitsPreffix + o.digits + o.digitsSuffix, o.currentImage.src = o.currentUrl, o.callback && (Self.callbackData(), o.callback(data));
            }, Self.changeIndex = function (e) {
                o.digits = e * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = e, Self.callbackData();
            }, Self.pauseFlip = function () {
                window.clearTimeout(timer), o.status = 'paused';
            };
        };
        MG_Flipbook = $___var_72fe8e9872d0cb77;
        var $___var_64a5b93500271c8e = {
            init: function (e) {
                MG_Scroll._isPlainObject(e) && MG_Scroll._setupElements(MG_Scroll._extend({}, {
                    width: 'auto',
                    height: '250px',
                    size: '7px',
                    color: '#000',
                    position: 'right',
                    distance: '1px',
                    start: 'top',
                    opacity: 0,
                    alwaysVisible: !0,
                    disableFadeOut: !0,
                    railVisible: !0,
                    railColor: '#333',
                    railOpacity: 0.2,
                    railDraggable: !0,
                    railClass: 'scrollRail',
                    barClass: 'scrollBar',
                    wrapperClass: 'scrollDiv',
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: '7px',
                    railBorderRadius: '7px',
                    selector: null,
                    horizontal: !1
                }, e));
            },
            _extend: function (e) {
                e = e || {};
                for (var t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var l in arguments[t])
                            arguments[t].hasOwnProperty(l) && (e[l] = arguments[t][l]);
                return e;
            },
            _fadeIn: function (e) {
                var t, l = 10 * +MG_Scroll._getStyle(e, 'opacity');
                clearInterval(t), t = setInterval(function () {
                    l < 4 ? (l++, e.style.opacity = (l / 10).toFixed(1)) : (clearInterval(t), t = 0);
                }, 50);
            },
            _fadeOut: function (e) {
                var t, l = 10 * +MG_Scroll._getStyle(e, 'opacity');
                clearInterval(t), t = setInterval(function () {
                    0 < l ? (l--, e.style.opacity = (l / 10).toFixed(1)) : (clearInterval(t), t = 0);
                }, 100);
            },
            _closestClassElement: function (e, t) {
                for (; e.className != t;)
                    if (!(e = e.parentNode))
                        return null;
                return e;
            },
            _getStyle: function (e, t) {
                return window.getComputedStyle ? getComputedStyle(e, '')[t] : e.currentStyle ? e.currentStyle[t] : void 0;
            },
            _isPlainObject: function (e) {
                if (!e || e.nodeType || jQuery.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !core_hasOwn.call(e, 'constructor') && !core_hasOwn.call(e.constructor.prototype, 'isPrototypeOf'))
                        return !1;
                } catch (e) {
                    return !0;
                }
                if (jQuery.support.ownLast)
                    for (var t in e)
                        return core_hasOwn.call(e, t);
                for (t in e);
                return void 0 === t || core_hasOwn.call(e, t);
            },
            isWindow: function (e) {
                return e && (e === function () {
                    return this;
                }() || e.eval && e.eval.call && e.eval('this === (function(){ return this })()')) || !1;
            },
            _makeUnselectable: function (e) {
                (e = 'string' == typeof e ? document.getelentById(e) : e) && (e.onselectstart = function () {
                    return !1;
                }, e.style.MozUserSelect = 'none', e.style.KhtmlUserSelect = 'none', e.unselectable = 'on');
            },
            _getOffset: function (e, t) {
                var l = e.ownerDocument && e.ownerDocument.defaultView && e.ownerDocument.defaultView.getComputedStyle && e.ownerDocument.defaultView.getComputedStyle(e, null), o = l && l.getPropertyValue(t ? 'height' : 'width') || '';
                return o = o && -1 < o.indexOf('.') ? parseFloat(o) + parseInt(l.getPropertyValue(t ? 'padding-top' : 'padding-left')) + parseInt(l.getPropertyValue(t ? 'padding-bottom' : 'padding-right')) + parseInt(l.getPropertyValue(t ? 'border-top-width' : 'border-left-width')) + parseInt(l.getPropertyValue(t ? 'border-bottom-width' : 'border-right-width')) : t ? e.offsetHeight : e.offsetWidth;
            },
            _outerHeight: function (e) {
                var t = MG_Scroll._getOffset(e, !0), l = MG_Scroll._getStyle(e, 'marginTop'), e = MG_Scroll._getStyle(e, 'marginBottom');
                return t += parseInt(l) + parseInt(e);
            },
            _outerWidth: function (e) {
                var t = MG_Scroll._getOffset(e), l = MG_Scroll._getStyle(e, 'marginLeft'), e = MG_Scroll._getStyle(e, 'marginRight');
                return t += parseInt(l) + parseInt(e);
            },
            _wrap: function (e, t) {
                return t = t || document.createElement('div'), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
            },
            _setupElements: function (e) {
                el = e.selector;
                for (var t = 0; t < el.length; t++)
                    MG_Scroll._processElement(el[t], e);
            },
            _processElement: function (e, s) {
                var o, t, r, l, n, d, i, a, c, h, u, f = 30, p = !1, y = e;
                if (MG_Utils.hasClass(y.parentNode, s.wrapperClass)) {
                    var g, _ = s.horizontal ? y.scrollLeft : y.scrollTop, m = (MG_Utils.children(y.parentNode), document.querySelectorAll('.' + s.barClass)[0]), v = document.querySelectorAll('.' + s.railClass)[0];
                    if (S(), MG_Scroll._isPlainObject(s)) {
                        if (!s.horizontal && 'height' in s && 'auto' == s.height ? (y.parentNode.style.height = 'auto', y.style.height = 'auto', g = y.parentNode.parentNode.style.height, y.parentNode.style.height = g, y.style.height = g) : 'height' in s && (g = s.height, y.parentNode.style.height = g, y.style.height = g), 'scrollTo' in s)
                            _ = parseInt(s.scrollTo);
                        else if ('scrollBy' in s)
                            _ += parseInt(s.scrollBy);
                        else if ('bottom' === s.start)
                            _ = 5000;
                        else if ('destroy' in s)
                            return;
                        M(_, !1, !0);
                    }
                } else
                    MG_Scroll._isPlainObject(s) && 'destroy' in s || (s.horizontal ? s.width = 'auto' == s.width ? y.parentNode.clientWidth : s.width : s.height = 'auto' == s.height ? y.parentNode.clientHeight : s.height, (_ = document.createElement('div')).className += s.wrapperClass, _.style.position = 'relative', _.style.overflow = 'hidden', _.style.width = s.width, _.style.height = s.height, y.style.overflow = 'hidden', y.style.width = s.width, y.style.height = s.height, (v = document.createElement('div')).className += s.railClass, v.style.position = 'absolute', v.style.display = s.alwaysVisible && s.railVisible ? 'block' : 'none', v.style.borderRadius = s.railBorderRadius, v.style.background = s.railColor, v.style.opacity = s.railOpacity, v.style.zIndex = 90, s.horizontal ? (v.style.width = '100%', v.style.height = s.size, v.style.bottom = 0) : (v.style.width = s.size, v.style.height = '100%', v.style.top = 0), (m = document.createElement('div')).className += s.barClass, m.style.background = s.color, m.style.position = 'absolute', m.style.opacity = s.opacity, m.style.display = s.alwaysVisible ? 'block' : 'none', m.style.borderRadius = s.borderRadius, m.style.BorderRadius = s.borderRadius, m.style.MozBorderRadius = s.borderRadius, m.style.WebKitBorderRadius = s.borderRadius, m.style.zIndex = 99, s.horizontal ? (m.style.height = s.size, m.style.left = 0, m.style.bottom = 0) : (m.style.top = 0, m.style.width = s.size, 'right' == s.position ? (v.style.right = 0, m.style.right = 0) : (v.style.left = 0, m.style.left = 0)), MG_Scroll._wrap(y, _), y.parentNode.appendChild(m), y.parentNode.appendChild(v), s.railDraggable && (c = a = '', h = y.clientHeight, MG_Utils.addEventHandler(y, 'touchstart', function (e) {
                        a = s.horizontal ? e.touches[0].clientX : e.touches[0].clientY, c = s.horizontal ? parseInt(m.style.left) : parseInt(m.style.top);
                    }), MG_Utils.addEventHandler(y, 'touchmove', function (e) {
                        var t = s.horizontal ? e.touches[0].clientX : e.touches[0].clientY, t = a + c - t;
                        0 <= t && t <= h && e.cancelable && (e.preventDefault(), e.stopPropagation()), M(t, !0, !0);
                    }, !1), MG_Utils.addEventHandler(m, 'mousedown', function (e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1, r = !0;
                        var t = s.horizontal ? e.clientX : e.clientY, l = s.horizontal ? parseInt(m.style.left) : parseInt(m.style.top);
                        function o(e) {
                            e = s.horizontal ? e.clientX : e.clientY;
                            M(l + e - t, !0, !0);
                        }
                        return MG_Utils.addEventHandler(document, 'mousemove', o), MG_Utils.addEventHandler(document, 'mouseup', function (e) {
                            r = !1, G(), MG_Utils.removeEventHandler(document, 'mousemove', o);
                        }), !1;
                    })), MG_Utils.addEventHandler(v, 'mouseenter', function () {
                        b();
                    }), MG_Utils.addEventHandler(v, 'mouseleave', function () {
                        G();
                    }), MG_Utils.addEventHandler(m, 'mouseenter', function () {
                        t = !0, s.horizontal ? m.style.height = '10px' : m.style.width = '10px';
                    }), MG_Utils.addEventHandler(m, 'mouseleave', function () {
                        t = !1, s.horizontal ? m.style.height = s.size : m.style.width = s.size;
                    }), MG_Utils.addEventHandler(y, 'mouseenter', function () {
                        o = !0, b();
                    }), MG_Utils.addEventHandler(y, 'mouseleave', function () {
                        o = !1, G();
                    }), S(), 'bottom' === s.start ? M(s.horizontal ? y.offsetWidth - m.offsetWidth : y.offsetHeight - m.offsetHeight, !0, !0) : 'top' !== s.start && (M(s.start, null, !0), s.alwaysVisible || (m.style.display = 'none')), u = y, MG_Utils.addEventHandler(u, 'DOMMouseScroll', w, !1), MG_Utils.addEventHandler(u, 'mousewheel', w, !1), this.showDefault = function () {
                        b();
                    });
                function w(e) {
                    var t, l;
                    o && (t = 0, (e = e || window.event).wheelDelta && (t = -e.wheelDelta / 120), e.detail && (t = e.detail / 3), l = e.target || e.srcTarget || e.srcElement, MG_Scroll._closestClassElement(l, s.wrapperClass) == y.parentNode && M(t, !0, !1), e.preventDefault && !p && e.preventDefault(), p || (e.returnValue = !1));
                }
                function M(e, t, l) {
                    p = !1;
                    var o, r = e, n = s.horizontal ? MG_Scroll._getOffset(y) : MG_Scroll._getOffset(y, !0), i = s.horizontal ? MG_Scroll._getOffset(m) : MG_Scroll._getOffset(m, !0), n = n - i;
                    function a(e) {
                        s.horizontal ? m.style.left = e + 'px' : m.style.top = e + 'px';
                    }
                    t && (r = s.horizontal ? parseInt(m.style.left) + e * parseInt(s.wheelStep) / 100 * i : parseInt(m.style.top) + e * parseInt(s.wheelStep) / 100 * i, r = Math.min(Math.max(r, 0), n), a(r = 0 < e ? Math.ceil(r) : Math.floor(r))), l && (a(e), (n = Math.min(Math.max(e, 0), n)) <= e && a(n), e <= 0 && a(0)), s.horizontal ? (o = MG_Scroll._outerWidth(y), r = (d = parseInt(m.style.left) / (o - MG_Scroll._outerWidth(m))) * (y.scrollWidth - o), y.scrollLeft = r) : (o = MG_Scroll._outerHeight(y), r = (d = parseInt(m.style.top) / (o - MG_Scroll._outerHeight(m))) * (y.scrollHeight - o), y.scrollTop = r), b(), G();
                }
                function S() {
                    var e;
                    e = s.horizontal ? (i = Math.max(y.offsetWidth / y.scrollWidth * y.offsetWidth, f), m.style.width = i + 'px', i == y.offsetWidth ? 'none' : 'block') : (n = Math.max(y.offsetHeight / y.scrollHeight * y.offsetHeight, f), m.style.height = n + 'px', n == y.offsetHeight ? 'none' : 'block'), m.style.display = e;
                }
                function b() {
                    if (S(), clearTimeout(l), p = d == ~~d && s.allowPageScroll, s.horizontal) {
                        if (i >= y.offsetWidth)
                            return void (p = !0);
                    } else if (n >= y.offsetHeight)
                        return void (p = !0);
                    MG_Scroll._fadeIn(m), s.railVisible && MG_Scroll._fadeIn(v);
                }
                function G() {
                    s.alwaysVisible || (l = setTimeout(function () {
                        s.disableFadeOut && o || t || r || (MG_Scroll._fadeOut(m), MG_Scroll._fadeOut(v));
                    }, 1500));
                }
            }
        };
        MG_Scroll = $___var_64a5b93500271c8e;
        function $___var_ac17442df9eb7799(e) {
            return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                return typeof e;
            } : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            })(e);
        }
        var $___var_6c45380a46125023 = function () {
            'use strict';
            var instance = null, dropdowns = [], id = 0, dontProcess = !1;
            function Dropdown(options) {
                var defaults = {
                    dropdownTrigger: 'dropdownTrigger',
                    dropdownWrapper: 'dropdownWrapper',
                    timeout: 4000,
                    hideDelay: !0
                };
                this.options = MG_Utils.extendDefaults(defaults, options), this.wrapper = this.options.wrapper, this.selector = this.options.selector, this.additionalElements = document.querySelectorAll(eval(this.options.additionalElements)), this.triggers = this.wrapper.querySelectorAll('.' + this.options.dropdownTrigger), this.dropdown = this.wrapper.querySelector('.' + this.options.dropdownWrapper), this.hiddenValue = this.wrapper.querySelector('input[type="hidden"]'), this.activateCloseDelay = hideDelayed.call(this), this.closeCallback = 'function' == typeof this.options.closeCallback ? this.options.closeCallback : '', _init.call(this);
            }
            function _init() {
                return !(!this.triggers || !this.dropdown) && (!MG_Utils.hasClass(this.wrapper, 'js_dropdownBound') && (MG_Utils.addClass(this.wrapper, 'js_dropdownBound'), _initEvents.call(this), _checkHiddenValue.call(this), void this.wrapper.setAttribute('data-dropdown-id', id++)));
            }
            function _initEvents() {
                var t = this;
                [].forEach.call(this.triggers, function (e) {
                    MG_Utils.addEventHandler(e, 'click', function (e) {
                        _triggersHandler.call(t, e);
                    }), MG_Utils.hasClass(e, 'js-accessibleDropdown') && MG_Utils.addEventHandler(e, 'keypress', function (e) {
                        _triggersHandler.call(t, e);
                    });
                }), ('string' == typeof this.selector && '.channelsAZ' != this.selector || 'object' == _typeof(this.selector) && !MG_Utils.hasClass(this.wrapper, 'channelsAZ')) && ('string' == typeof this.selector && '.alphabetFilter' != this.selector || 'object' == _typeof(this.selector) && !MG_Utils.hasClass(this.wrapper, 'alphabetFilter')) && this.options.hideDelay && this.activateCloseDelay(), MG_Utils.addEventHandler(this.dropdown, 'click', function (e) {
                    _dropdownHandler.call(t, e);
                });
            }
            function _nextDivSibling(e) {
                for (; (e = e.nextSibling) && 1 !== e.nodeType && e.tagName && 'div' === e.tagName.toLowerCase(););
                return e;
            }
            function _triggersHandler(e) {
                var t = null;
                if (dontProcess)
                    dontProcess = !1;
                else {
                    var o = (e = e || window.event).target || e.srcElement;
                    if (!MG_Utils.hasClass(o, this.options.dropdownTrigger))
                        for (; (o = o.parentElement) && !MG_Utils.hasClass(o, this.options.dropdownTrigger););
                    var i = !1, n = 'withScroll' == this.dropdown.id ? 1 : 0;
                    1 == this.triggers.length ? i = !(!this.dropdown.style.display || 'none' === this.dropdown.style.display) : 1 < this.triggers.length && (i = !(!this.dropdown.style.display || 'none' === this.dropdown.style.display) && this.dropdown.getAttribute('data-type') == o.getAttribute('data-type')), i ? (this.dropdown.style.display = 'none', n && (t = _nextDivSibling(this.dropdown)) && void 0 !== t.style && (t.style.display = 'none')) : (dropdowns.forEach(function (e) {
                        e.dropdown.style.display = 'none';
                    }), o.getAttribute('data-type') && (this.dropdown.getAttribute('data-type'), o.getAttribute('data-type')), this.dropdown.style.display = 'block', _notificationPosition.call(this, e));
                }
            }
            function _notificationPosition(e) {
                var t, o, i = e.target || e.srcElement;
                'notificationIcons' != i.parentNode.getAttribute('id') && 'notificationIcons' != i.parentNode.parentNode.getAttribute('id') || (o = i.querySelector('i') || i.parentNode.querySelector('i'), e = (t = document.querySelector('#notificationBox')).clientWidth / 2, i = MG_Utils.offset(o).left, o = o.clientWidth / 2, t.style.left = Math.round(i - e + o) + 'px');
            }
            function _dropdownHandler(e) {
                var t = (e = e || window.event).target || e.srcElement;
                if ('li' !== t.tagName.toLowerCase())
                    for (; (t = t.parentElement) && 'li' !== t.tagName.toLowerCase(););
                this.setItem(t);
            }
            function _checkHiddenValue() {
                this.hiddenValue && this.hiddenValue.length && '' != this.hiddenValue.value && (_selectActiveItem.call(this) || setTimeout(function () {
                    _selectActiveItem.apply(context);
                }, 1000));
            }
            function _selectActiveItem() {
                var e = this.dropdown.querySelector('li[data-value="' + this.hiddenValue_.value + '"]');
                if (!e.length)
                    return !1;
                MG_Utils.triggerEvent(e, 'click'), dontProcess = !0;
            }
            Dropdown.prototype = {
                constructor: Dropdown,
                setItem: function (e) {
                    var t, o = this.wrapper.querySelector('.dropdownTrigger .textFilter');
                    if (isNaN(e) || (0 | (t = parseFloat(e))) !== t || (e = this.dropdown.querySelectorAll('li')[e]), !('object' === ('undefined' == typeof HTMLElement ? 'undefined' : _typeof(HTMLElement)) ? e instanceof HTMLElement : e && 'object' === _typeof(e) && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName))
                        return !1;
                    MG_Utils.removeClassMultiple(this.dropdown.querySelectorAll('li'), 'active'), MG_Utils.addClass(e, 'active'), o && MG_Utils.setText(o, e.textContent || e.innerText), this.hiddenValue && (this.hiddenValue.value = e.getAttribute('data-value'));
                }
            };
            var hideDelayed = function () {
                var i = this;
                function o() {
                    i.dropdown.getAttribute('data-hideDelayedTimeoutId') && (clearTimeout(parseInt(MG_Utils.getData(i.dropdown, 'hideDelayedTimeoutId'))), MG_Utils.setData(i.dropdown, 'hideDelayedTimeoutId', ''));
                }
                return function () {
                    for (var e = [], t = 0; t <= i.triggers.length - 1; t++)
                        e.push(i.triggers[t]);
                    e.push(i.dropdown), e.forEach(function (e) {
                        MG_Utils.addEventHandler(e, 'mouseenter', function (e) {
                            MG_Utils.setData(i.dropdown, 'hideDelayedOver', '1'), o(i.dropdown);
                        }), MG_Utils.addEventHandler(e, 'mouseleave', function (e) {
                            MG_Utils.setData(i.dropdown, 'hideDelayedOver', '0'), o(i.dropdown);
                            var t = setTimeout(function () {
                                !function () {
                                    if ('0' == MG_Utils.getData(i.dropdown, 'hideDelayedOver')) {
                                        for (var e, t = [], o = 0; o <= i.additionalElements.length - 1; o++)
                                            t.push(i.additionalElements[o]);
                                        t.push(i.dropdown), t.forEach(function (e) {
                                            e.style.display = 'none';
                                        }), !document.getElementById('withScroll') || (e = _nextDivSibling()) && void 0 !== e.style && (e.style.display = 'none'), 'function' == typeof i.closeCallback && i.closeCallback(), clearTimeout(parseInt(MG_Utils.getData(i.dropdown, 'hideDelayedTimeoutId'))), MG_Utils.setData(i.dropdown, 'hideDelayedTimeoutId', '');
                                    }
                                }();
                            }, i.options.timeout);
                            MG_Utils.setData(i.dropdown, 'hideDelayedTimeoutId', t);
                        });
                    });
                };
            };
            return MG_Utils.addEventHandler(document, 'click', function (e) {
                var t = (e = e || window.event).target || e.srcElement;
                if (!MG_Utils.hasClass(t, 'dropdownTrigger'))
                    for (; (t = t.parentElement) && !MG_Utils.hasClass(t, 'dropdownTrigger'););
                dropdowns.forEach(function (e) {
                    return (!t || t.parentNode.querySelector('.dropdownWrapper') !== e.dropdown) && void (e.dropdown.style.display = 'none');
                });
            }), {
                init: function (t, o) {
                    var o = o || {}, e = 'object' === ('undefined' == typeof HTMLElement ? 'undefined' : _typeof(HTMLElement)) ? t instanceof HTMLElement : t && 'object' === _typeof(t) && null !== t && 1 === t.nodeType && 'string' == typeof t.nodeName, e = t instanceof Array || e ? t : document.querySelectorAll(t);
                    [].forEach.call(e, function (e) {
                        o.wrapper = e, o.selector = t, (instance = new Dropdown(o)).triggers && instance.dropdown && dropdowns.push(instance);
                    });
                },
                get: function (e) {
                    return dropdowns[e];
                }
            };
        }();
        dropdown = $___var_6c45380a46125023;
        function $___var_c5d2b8c1eae96aeb(e, t) {
            var n = document.querySelector('.js-languages'), r = 'displayNone';
            e = e.target, e = MG_Utils.closest(e, '.dropDownColumn') && MG_Utils.closest(e, '.dropDownColumn');
            if (e && MG_Utils.hasClass(e, 'js-filterable'))
                switch (t) {
                case 'mouseleave':
                case 'click':
                    n && (n.value = '', MG_Utils.addClass(n, r));
                    break;
                case 'mouseenter':
                    !function () {
                        var e = 0 < document.querySelectorAll('.dropDownColumn.js-filterable .dropDown li').length && document.querySelectorAll('.dropDownColumn.js-filterable .dropDown li');
                        if (n && (MG_Utils.removeClass(n, r), n.addEventListener('keyup', function () {
                                var e = n.value.toUpperCase(), t = document.querySelector('.dropDownColumn.js-filterable .dropDown') && document.querySelector('.dropDownColumn.js-filterable .dropDown'), o = t && 0 < t.querySelectorAll('li').length && t.querySelectorAll('li');
                                if (o)
                                    for (i = 0; i < o.length; i++)
                                        txtValue = o[i].innerText, -1 < txtValue.toUpperCase().indexOf(e) ? MG_Utils.removeClass(o[i], r) : MG_Utils.addClass(o[i], r);
                            })), e)
                            for (i = 0; i < e.length; i++)
                                MG_Utils.removeClass(e[i], r);
                    }();
                }
        }
        function $___var_64ff2d14def0015c(t) {
            return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                return typeof t;
            } : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
        }
        var $___var_bc2b2f017246947a = function () {
            'use strict';
            var t;
            function e() {
                return this.options = MG_Utils.extendDefaults({
                    minLength: 2,
                    showDelay: 350,
                    showPornstars: !0,
                    defaultType: 'video',
                    boldenResults: !0,
                    typesListContainerId: 'searchTypes',
                    formId: 'search_form',
                    inputId: 'searchInput',
                    submitBtnId: 'btnSearch',
                    suggestionsListId: 'searchSuggestions'
                }, arguments[0]), this.types = this.options.types, this.placeholderData = this.options.placeholderData, this.typesList = document.getElementById(this.options.typesListContainerId), this.form = document.getElementById(this.options.formId), this.input = document.getElementById(this.options.inputId), this.submitBtn = document.getElementById(this.options.submitBtnId), this.suggestionsList = document.getElementById(this.options.suggestionsListId), this.typeSelected = document.getElementById('searchTypeSelected'), this.focusInput = focusSearchInput, this.currentType = null, this.cache = null, this.term = null, this.searchName = null, this.tempTerm = null, this.timeouts = {
                    autocomplete: {
                        timer: null,
                        value: null,
                        name: null,
                        matches: 0
                    }
                }, t || function () {
                    this.input && (!function () {
                        (function () {
                            var s = this.typesList.innerHTML;
                            this.types.forEach(function (t) {
                                var e = t.className || t.name;
                                s += '<li class="' + e + '" data-search-type="' + t.name + '"><i class="' + e + '"></i><span>' + t.name + '</span></li>';
                            }), this.typesList.innerHTML = s;
                        }.call(this), dropdown.init('#searchTypeWrapper'), function () {
                            var t = function () {
                                    for (var t = 0; t < this.types.length; t++)
                                        if (this.types[t].testTypePattern == this.options.defaultType)
                                            return this.types[t];
                                }.call(this), e = window.location.pathname, s = e.split('/')[1];
                            if (s) {
                                var i;
                                'gay' != s && 'transgender' != s || ('gifs' == (i = e.split('/')[2]) ? s = 'gifs' : 'pornstars' == i && (s = 'pornstars')), 'user' == s && 'welcome' == e.split('/')[2] && (s = '');
                                for (var n = 0; n < this.types.length; n++)
                                    this.types[n].testTypePattern == s && 'edit' != e.split('/')[2] && (t = this.types[n]);
                            }
                            this.currentType = t;
                        }.call(this), this.setType(), function () {
                            var i = this;
                            MG_Utils.children(i.typesList).slice(1).forEach(function (t) {
                                MG_Utils.addEventHandler(t, 'click', function (t) {
                                    var e = (t = t || window.event).target || t.srcElement;
                                    if ('li' !== e.nodeName.toLowerCase()) {
                                        for (var s = e; (s = s.parentElement) && 'li' !== s.nodeName.toLowerCase(););
                                        e = s;
                                    }
                                    i.setType(e.getAttribute('data-search-type')), i.typesList.focus(), n.call(i, t);
                                });
                            });
                        }.call(this));
                    }.call(this), this.focusInput ? this.input.focus() : this.input.blur(), function () {
                        var e = this;
                        (function () {
                            var e = this;
                            MG_Utils.addEventHandler(this.input, 'keyup', function (t) {
                                n.call(e, t);
                            }), MG_Utils.addEventHandler(this.input, 'keypress', function (t) {
                                t = t.keyCode || t.charCode;
                                if (60 == t || 62 == t)
                                    return !1;
                            }), MG_Utils.addEventHandler(this.input, 'keydown', function (t) {
                                !function (t) {
                                    var e, s = t.keyCode || t.charCode, i = this.suggestionsList.querySelectorAll('li'), t = this.suggestionsList.querySelector('.selected');
                                    t = t || i[0];
                                    40 != s && 38 != s || (MG_Utils.removeClassMultiple(i, 'selected'), 40 == s ? e = t.length || t !== i[i.length - 1] ? t.nextElementSibling || MG_Utils.nextElementSibling(t) : i[0] : 38 == s && (e = t.length || t !== i[0] ? t.previousElementSibling || MG_Utils.previousElementSibling(t) : i[i.length - 1]), MG_Utils.addClass(e, 'selected'), e.getAttribute('data-value') ? (this.input.value = e.getAttribute('data-value'), this.term = this.input.value) : this.input.value = this.tempTerm);
                                }.call(e, t);
                            }), MG_Utils.addEventHandler(this.input, 'click', function (t) {
                                (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1;
                            }), MG_Utils.addEventHandler(this.suggestionsList, 'click', function (t) {
                                (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1;
                            }), MG_Utils.addEventHandler(document.body, 'click', function (t) {
                                e.suggestionsList.style.display = 'none';
                            });
                        }.call(this), MG_Utils.addEventHandler(this.submitBtn, 'click', function (t) {
                            o.call(e, t);
                        }), MG_Utils.addEventHandler(this.form, 'submit', function (t) {
                            o.call(e, t);
                        }));
                    }.call(this), t = this);
                }.call(this), t;
            }
            function o(t, e) {
                var s = this.input.value.replace(/^[ \t]+|[ \t]+$/gi, ''), i = this.input.getAttribute('placeholder'), n = this.suggestionsList.querySelector('.selected');
                if ('' != s && s != i) {
                    if (n && (MG_Utils.hasClass(n, 'pornstar') || MG_Utils.hasClass(n, 'channel')))
                        return MG_Utils.triggerEvent(n, 'click'), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
                    var a, s = s.toLowerCase();
                    if ('gay' == (s = (s = encodeURIComponent(s)).replace(/%20/g, '+'))) {
                        switch (this.currentType.newUrl = 'gay', this.currentType.name.toLowerCase()) {
                        case 'photos':
                            a = 'albums/' + this.currentType.newUrl;
                            break;
                        case 'pornstars':
                        case 'gifs':
                            a = this.currentType.newUrl + '/' + this.currentType.name.toLowerCase();
                            break;
                        case 'members':
                            a = 'user/search?gender=1&orientation=1';
                            break;
                        case 'video':
                            a = 'gayporn';
                            break;
                        case 'cam models':
                            a = 'live?s=gay';
                            break;
                        default:
                            a = 'gayporn';
                        }
                        window.location = '/' + a;
                    } else
                        a = void 0 !== e && 'Pornstars' === e ? this.currentType.submitUrlVideo + s : this.currentType.submitUrl + s, window.location = a;
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
            }
            function n(t) {
                var e, s = RegExp(/[\<\>]/gi), i = this.input.value.match(s), n = this.input.value.replace(s, ''), s = t.keyCode || t.charCode, a = this, t = this.input.value.trim(), l = this.currentType.name, r = !1;
                if ('38' == s || '40' == s || '13' == s)
                    return !1;
                if (this.term && this.term == t && this.searchName == this.currentType.name)
                    return !1;
                if (i && (this.input.value = n), '13' != s || 'undefined' != typeof arrowKeysSelected || MG_Utils.hasClass(this.form, 'onHold') || 'hd' == this.input.value.toLowerCase() && 'video' == this.currentType.name && (window.location = '/hd'), this.term = t, this.tempTerm = t, this.searchName = this.currentType.name, !this.currentType.autocompleteUrl)
                    return !1;
                for (e in (this.cache = this.input.getAttribute('data-autocomplete-cache') || {}, 'object' !== _typeof(this.cache) && (this.cache = JSON.parse(this.cache)), void 0 === this.cache[l] && (this.cache[l] = {}), this.cache[l]))
                    this.term == e && (response(this.cache[l][e]), r = !0);
                if (r)
                    return !1;
                this.input.value.length < this.options.minLength ? (this.timeouts.autocomplete.value = '', clearTimeout(this.timeouts.autocomplete.timer), this.timeouts.autocomplete.matches = 0, this.suggestionsList.style.display = 'none') : this.input.value == this.timeouts.autocomplete.value && this.currentType.name == this.timeouts.autocomplete.name || (this.timeouts.autocomplete.value = this.input.value, clearTimeout(this.timeouts.autocomplete.timer), 'user' != this.currentType.autocompleteUrl && (this.timeouts.autocomplete.timer = setTimeout(function () {
                    MG_Utils.ajaxGet({
                        url: a.currentType.autocompleteUrl,
                        data: {
                            pornstars: a.options.showPornstars,
                            token: a.input.getAttribute('data-token'),
                            orientation: a.input.getAttribute('data-orientation'),
                            q: a.input.value,
                            alt: 0
                        },
                        success: function (t) {
                            !function (t) {
                                0 == this.timeouts.autocomplete.matches && (this.suggestionsList.style.display = 'none');
                                this.suggestionsList.innerHTML = '';
                                (function (t) {
                                    var e = !1, s = this;
                                    if (t instanceof Array && t.length) {
                                        for (var i in (this.timeouts.autocomplete.matches = t.length, MG_Utils.appendString(this.suggestionsList, '<li class="label"><a class="label">Suggestions</a></li>'), t))
                                            MG_Utils.appendString(this.suggestionsList, '<li class="item query" data-value="' + t[i] + '"><a>' + (1 == this.options.boldenResults ? u.call(this, t[i]) : t[i]) + '</a></li>');
                                        [].forEach.call(this.suggestionsList.querySelectorAll('.query'), function (t) {
                                            MG_Utils.addEventHandler(t, 'click', function (t) {
                                                s.input.value = this.textContent || this.innerText, o.call(s, t);
                                            });
                                        }), e = !0;
                                    } else {
                                        if (t.pornstars instanceof Array && t.pornstars.length && 'Pornstars' == this.currentType.name) {
                                            for (var i in (MG_Utils.appendString(this.suggestionsList, '<li class="label"><a class="label">Pornstar profiles</a></li>'), t.pornstars))
                                                t.pornstars.hasOwnProperty(i) && MG_Utils.appendString(this.suggestionsList, '<li class="item pornstar" data-slug="' + t.pornstars[i].slug + '" data-value="' + t.pornstars[i].name + '"><a>' + (1 == this.options.boldenResults ? u.call(this, t.pornstars[i].name) : t.pornstars[i].name) + '&nbsp;&nbsp;-&nbsp;&nbsp;<span class="rank">Rank: ' + t.pornstars[i].rank + '</span></a></li>');
                                            this.suggestionsList.addEventListener('click', function (t) {
                                                t = MG_Utils.closest(t.target, 'li');
                                                MG_Utils.hasClass(t, 'pornstar') && (t = t.getAttribute('data-slug'), location.href = '/pornstar/' + t);
                                            }, !1), e = !0;
                                        }
                                        if (t.queries instanceof Array && t.queries.length)
                                            if ('photos' == this.currentType.name) {
                                                if (t.albums instanceof Array && 0 < t.albums.length) {
                                                    for (var i in (this.timeouts.autocomplete.matches = t.albums.length, MG_Utils.appendString(this.suggestionsList, '<li class="label"><a class="label">' + this.currentType.name.capitalize() + ' results</a></li>'), t.queries))
                                                        t.albums.hasOwnProperty(i) && MG_Utils.appendString(this.suggestionsList, '<li class="item query" data-value="' + t.albums[i] + '"><a>' + (1 == this.options.boldenResults ? u.call(this, t.albums[i]) : t.albums[i]) + '</a></li>');
                                                    [].forEach.call(this.suggestionsList.querySelectorAll('.query'), function (t) {
                                                        MG_Utils.addEventHandler(t, 'click', function (t) {
                                                            s.input.value = this.textContent || this.innerText, o.call(s, t);
                                                        });
                                                    }), e = !0;
                                                }
                                            } else {
                                                var n = 'Pornstars' == this.currentType.name ? 'video' : this.currentType.name;
                                                for (i in (this.timeouts.autocomplete.matches = t.queries.length, MG_Utils.appendString(this.suggestionsList, '<li class="label"><a class="label">' + n.capitalize() + ' results</a></li>'), t.queries))
                                                    t.queries.hasOwnProperty(i) && MG_Utils.appendString(this.suggestionsList, '<li class="item query" data-value="' + t.queries[i] + '"><a>' + (1 == this.options.boldenResults ? u.call(this, t.queries[i]) : t.queries[i]) + '</a></li>');
                                                [].forEach.call(this.suggestionsList.querySelectorAll('.query'), function (t) {
                                                    t.addEventListener('click', function (t) {
                                                        s.input.value = this.textContent || this.innerText, o.call(s, t, s.currentType.name);
                                                    });
                                                }), e = !0;
                                            }
                                        if (t.pornstars instanceof Array && t.pornstars.length && 'Pornstars' != this.currentType.name) {
                                            for (var i in (MG_Utils.appendString(this.suggestionsList, '<li class="label"><a class="label">Pornstar profiles</a></li>'), t.pornstars))
                                                t.pornstars.hasOwnProperty(i) && MG_Utils.appendString(this.suggestionsList, '<li class="item pornstar" data-slug="' + t.pornstars[i].slug + '" data-value="' + t.pornstars[i].name + '"><a>' + (1 == this.options.boldenResults ? u.call(this, t.pornstars[i].name) : t.pornstars[i].name) + '&nbsp;&nbsp;-&nbsp;&nbsp;<span class="rank">Rank: ' + t.pornstars[i].rank + '</span></a></li>');
                                            [].forEach.call(this.suggestionsList.querySelectorAll('.pornstar'), function (t) {
                                                MG_Utils.addEventHandler(t, 'click', function () {
                                                    var t = this.getAttribute('data-slug');
                                                    location.href = '/pornstar/' + t;
                                                });
                                            }), e = !0;
                                        }
                                        if (t.channels instanceof Array && t.channels.length) {
                                            for (var i in (MG_Utils.appendString(this.suggestionsList, '<li class="label"><a class="label">Channels</a></li>'), t.channels))
                                                t.channels.hasOwnProperty(i) && MG_Utils.appendString(this.suggestionsList, '<li class="item channel" data-slug="' + t.channels[i].slug + '" data-value="' + t.channels[i].name + '"><a>' + (1 == this.options.boldenResults ? u.call(this, t.channels[i].name) : t.channels[i].name) + '&nbsp;&nbsp;-&nbsp;&nbsp;<span class="rank">Rank: ' + t.channels[i].rank + '</span></a></li>');
                                            [].forEach.call(this.suggestionsList.querySelectorAll('.channel'), function (t) {
                                                MG_Utils.addEventHandler(t, 'click', function () {
                                                    var t = this.getAttribute('data-slug');
                                                    location.href = '/channels/' + t;
                                                });
                                            }), e = !0;
                                        }
                                    }
                                    return e;
                                }.call(this, t) ? this.suggestionsList.style.display = 'block' : (this.timeouts.autocomplete.matches = 0, this.suggestionsList.style.display = 'none'));
                            }.call(a, t);
                        }
                    });
                }, this.options.showDelay)));
            }
            function u(t) {
                var e = this.input.value, s = t.search(RegExp('' + e, 'i'));
                if (0 <= s) {
                    for (var e = e.toLowerCase(), i = t.split(/\s|_/), n = 0; n < i.length; n++)
                        i[n] = i[n].substr(0, 1).toUpperCase() + (1 < i[n].length ? i[n].substr(1, i[n].length).toLowerCase() : '');
                    t = (t = i.join(' ')).slice(0, s) + '<span class="soughtValue">' + e + '</span>' + t.slice(s + e.length);
                }
                return t;
            }
            return e.prototype = {
                constructor: e,
                setType: function (t) {
                    'string' == typeof t && (this.currentType = this.getType(t)), this.typeSelected.setAttribute('data-search-type', this.currentType.className || this.currentType.name), this.input.setAttribute('placeholder', function () {
                        switch (this.currentType.className.replace(/\s/g, '').toLowerCase()) {
                        case 'photos':
                            return this.placeholderData.photos;
                        case 'members':
                            return this.placeholderData.members;
                        case 'pornstars':
                            return this.placeholderData.pornstars;
                        case 'gifs':
                            return this.placeholderData.gifs;
                        case 'cammodels':
                            return this.placeholderData.cams;
                        default:
                            return this.placeholderData.videos;
                        }
                    }.call(this)), this.typeSelected.querySelector('i').className = this.currentType.className || this.currentType.name, this.typesList.style.display = 'none';
                },
                getType: function (t) {
                    t = t || this.typeSelected.getAttribute('data-search-type');
                    for (var e = 0; e < this.types.length; e++)
                        if (this.types[e].name == t)
                            return this.currentType = this.types[e], this.currentType;
                }
            }, String.prototype.capitalize = function () {
                return this.charAt(0).toUpperCase() + this.slice(1);
            }, e;
        }();
        autocompleteSearch = $___var_bc2b2f017246947a;
        function $___var_42343678ad61dd02(e) {
            return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                return typeof e;
            } : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            })(e);
        }
        'object' != ('undefined' == typeof console ? 'undefined' : _typeof(console)) && (console = {
            log: function () {
            },
            warn: function () {
            },
            error: function () {
            },
            info: function () {
            }
        });
        var $___var_57030cab86e8c1c9, $___var_bcf39d30840a832a, $___var_e91c8a553f988c00, $___var_c1feaaf57c6fb43d = 'false', $___var_a23167bdecf76b5d = document.getElementById('friendRequestModal');
        friendRequestModal = $___var_57030cab86e8c1c9;
        tooltipPromoContent = $___var_bcf39d30840a832a;
        tooltipPromoRemove = $___var_e91c8a553f988c00;
        disablePlaylistPlusButon = $___var_c1feaaf57c6fb43d;
        friendRequestModalContent = $___var_a23167bdecf76b5d;
        function $___var_993f829efccfd77b(e) {
            const $___old_50293e7f3b49e842 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
            try {
                if ($___old_50293e7f3b49e842)
                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_3773b652659315ab.localStorage));
                return function () {
                    e = document.getElementById(e);
                    if (e && storageAvailable('localStorage') && localStorage.tasteCategories)
                        return e.value = localStorage.getItem('tasteCategories');
                }.apply(this, arguments);
            } finally {
                if ($___old_50293e7f3b49e842)
                    ({}.constructor.defineProperty(window, 'localStorage', $___old_50293e7f3b49e842));
            }
        }
        function $___var_5b90a356ddebb4e6(e, t) {
            for (var o = document.body.scrollTop, e = document.querySelector(e), l = MG_Utils.offset(e).top, i = o; i < l; i += t)
                document.body.scrollTop = i;
        }
        function $___var_255888ef0c4b2926(e) {
            for (var t, o, l = document.cookie.split(';'), i = 0; i < l.length; i++)
                if (t = l[i].substr(0, l[i].indexOf('=')), o = l[i].substr(l[i].indexOf('=') + 1), (t = t.replace(/^\s+|\s+$/g, '')) == e)
                    return unescape(o);
        }
        function $___var_5cdc690f9dad399e(e, t, o) {
            var l = new Date();
            l.setDate(l.getDate() + o);
            l = escape(t) + (null == o ? '' : '; expires=' + l.toUTCString());
            document.cookie = e + '=' + l;
        }
        function $___var_e76bbc3740cd4f84(e, t, o, l, i, a) {
            void 0 !== friendRequestModal && friendRequestModal.openModal();
            var s = document.getElementById('messageRequest'), r = document.getElementById('preventClick'), n = document.getElementById('friendRequestForm'), c = document.getElementById('fromPic');
            userId = document.getElementById('friendRequestUserId'), elements = document.querySelectorAll('.request-modal .last'), r.setAttribute('data-refresh', a), r.setAttribute('data-user-id', e), n.setAttribute('action', i), c.setAttribute('src', t);
            var t = '<a href=\'' + l + '\'></a>', d = document.createElement('div');
            for (d.innerHTML = t; d.firstChild;) {
                var u = d.firstChild;
                c.parentNode.insertBefore(u, c), u.appendChild(c);
            }
            s.value = s.getAttribute('data-val'), MG_Utils.setText(userId, e);
            for (var m = 0; m < elements.length; m++)
                elements[m].innerHTML = 'You are about to add <a href="' + l + '"> ' + o + ' </a> as a friend. We will then notify <a href="' + l + '"> ' + o + ' </a> who will then confirm that you are friends.';
        }
        function $___var_1abd5bb1a83f107f() {
            var e = document.getElementById('messageRequest'), t = document.getElementById('chars_left'), e = 1000 - e.value.length;
            t.innerHTML = Math.max(e, 0) + ' characters left.', e < 0 && MG_Utils.appendString(t, ' <span style = "color: #F00">You have over 1000 characters.<br />Anything past 1000 will get chopped off.</span>');
        }
        function $___var_a140b0e4ba83711c() {
            var l = {};
            return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, o) {
                l[t] = o;
            }), l;
        }
        function $___var_5db8979e88710b77(e) {
            return e.replace(/\n/g, '<br />');
        }
        function $___var_4033c18c17455e2c(e, t, o) {
            o = (e + '').indexOf(t, o || 0);
            return -1 !== o && o;
        }
        function $___var_e18a3824a1ed5a02(e, t, o) {
            var l = new RegExp('([?&])' + t + '=.*?(&|$)', 'i'), i = -1 !== e.indexOf('?') ? '&' : '?';
            return e.match(l) ? e.replace(l, '$1' + t + '=' + o + '$2') : e + i + t + '=' + o;
        }
        function $___var_e45bd37ea049c56e() {
            var o = document.getElementById('tooltip');
            function l(e, t) {
                o.style.left = t.left - o.clientWidth / 2 + Math.floor(e.clientWidth / 2) - 1 + 'px', o.style.left = parseFloat(o.style.left) < 0 ? '0' : o.style.left, o.classList.remove('tooltipSmall'), o.style.width = 'auto';
            }
            o && (document.body.addEventListener('mouseenter', function (e) {
                var t = e.target, e = '';
                t && MG_Utils.hasClass(t, 'tooltipTrig') && (e = t.getAttribute('data-title'), o.innerHTML = '<div class=\'tooltip-sub\'>' + e + ' </div></div><div class=\'arrow-down\'></div>', o.style.display = 'block', MG_Utils.addClass(o, t.getAttribute('type')), function (e) {
                    var t;
                    t = MG_Utils.offset(e), o.style.left = t.left - o.clientWidth / 2 + Math.floor(e.clientWidth / 2) - 1 + 'px', window.onresize = function () {
                        o.style.left = 0;
                    }, e.classList.contains('pornstarPrev') && parseFloat(o.style.left) < -3 ? (o.classList.add('tooltipSmall'), o.style.width = o.clientWidth + parseFloat(o.style.left) - 14 + 'px', o.style.left = '0') : l(e, t);
                    o.style.top = t.top - o.clientHeight - o.querySelector('.arrow-down').clientTop + 'px';
                }(t));
            }, !0), document.body.addEventListener('mouseleave', function (e) {
                e = e.target;
                e && MG_Utils.hasClass(e, 'tooltipTrig') && (o.style.display = 'none');
            }, !0));
        }
        function $___var_41460ded9cd6304b() {
            for (var e, t = document.querySelectorAll('.commentUsernameLink'), o = 0; o < t.length; o++)
                e = t[o], MG_Utils.hasClass(e, 'processed') || (MG_Utils.addClass(e, 'processed'), e.getAttribute('data-href') ? e.innerHTML = '<a href="' + e.getAttribute('data-href') + '">@' + e.getAttribute('data-username') + '</a>' : e.innerHTML = '<span>@' + e.getAttribute('data-username') + '</span>');
            var l = document.querySelectorAll('.js_taggable');
            if (0 < l.length) {
                for (o = 0; o < l.length; o++)
                    MG_Utils.empty(l[o]);
                friendList = [];
            }
        }
        friendRequestModalContent && (friendRequestModal = new MG_Modal({
            content: friendRequestModalContent,
            className: 'friendRequestContainer'
        })), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
            var o, l;
            if (null == this)
                throw new TypeError(' this is null or not defined');
            var i, a = Object(this), s = a.length >>> 0;
            if ('function' != typeof e)
                throw new TypeError(e + ' is not a function');
            for (1 < arguments.length && (o = t), l = 0; l < s;)
                l in a && (i = a[l], e.call(o, i, l, a)), l++;
        }), document.querySelector('.tooltipPromo') && document.querySelector('#headerUpgradePremiumBtn') && (tooltipPromoRemove = (tooltipPromoContent = document.querySelector('.tooltipPromo')).querySelector('span'), MG_Utils.addEventHandler(tooltipPromoRemove, 'click', function (e) {
            e.stopPropagation(), setCookie('promoTooltip', '1'), tooltipPromoContent.remove();
        }));
        var $___var_a9d6c0b2bbf60821 = '';
        blurTimeout = $___var_a9d6c0b2bbf60821;
        function $___var_63628a360a7b93fa() {
            if (document.querySelectorAll('form.streamCommentFrom'))
                for (var e = document.querySelectorAll('form.streamCommentFrom'), t = 0; t < e.length; t++)
                    MG_Utils.addEventHandler(e[t], 'blur', function (e) {
                        blurTimeout = setTimeout(function () {
                            var e = MG_Utils.closest(this, 'form'), t = e.querySelectorAll('.streamSubmitInput'), e = e.querySelectorAll('.streamSections');
                            t && MG_Utils.addClass(t, 'focusReply'), t && MG_Utils.addClass(t, 'hidden'), e && MG_Utils.addClass(e, 'hidden');
                        }, 200);
                    });
            if (document.querySelectorAll('.streamTextArea')) {
                var o = document.querySelectorAll('.streamTextArea');
                MG_Utils.setText(o, '');
                for (t = 0; t < o.length; t++)
                    MG_Utils.addEventHandler(o[t], 'focus', function (e) {
                        var t = this.value, o = MG_Utils.closest(this, '.streamSubmitInput'), l = MG_Utils.closest(this, '.streamSections');
                        'Click to leave a comment' === t && (this.value = ''), o && MG_Utils.addClass(o, 'showme'), l && MG_Utils.addClass(l, 'showme'), MG_Utils.triggerEvent(this, 'resize');
                    });
            }
        }
        function $___var_6c7c4f466cc49724() {
            if (document.querySelectorAll('.reply a'))
                for (var t, o, l, i, e = document.querySelectorAll('.reply a'), a = 0; a < e.length; a++)
                    MG_Utils.addEventHandler(e[a], 'click', function (e) {
                        e = e || window.event, i = MG_Utils.closest(this, '.feedItemSection'), t = i.querySelector('.postingForm'), o = i.querySelector('.formAvatar'), l = i.querySelector('.formText'), i = l.querySelector('textarea'), l.querySelector('.js_taggable'), MG_Utils.addClass(this, 'hideme'), MG_Utils.addClass(t, 'showme'), MG_Utils.addClass(o, 'showme'), MG_Utils.addClass(l, 'showme'), MG_Utils.setText(i, ''), MG_Utils.triggerEvent(i, 'click');
                    });
        }
        function $___var_428f6d7a24ae6bd5(e, t, o) {
            var l, i, a, s;
            WIDGET_SHARE.shareButtonsLoaded ? 'function' == typeof e && e() : (WIDGET_SHARE.shareButtonsLoaded = !0, void 0 === t && (t = WIDGET_SHARE.urlShare), void 0 === o && (o = WIDGET_SHARE.shareTitle), 0 < document.querySelectorAll('a.sharesTwitter').length && (t = (e = document.querySelectorAll('a.sharesTwitter')[0]).getAttribute('href'), e.setAttribute('href', updateQueryStringParameter(t, 'text', encodeURIComponent(o)))), 0 < document.querySelectorAll('a.sharesReddit').length && (i = (l = document.querySelectorAll('a.sharesReddit')[0]).getAttribute('href'), l.setAttribute('href', updateQueryStringParameter(i, 'title', encodeURIComponent(o)))), 0 < document.querySelectorAll('a.sharesTumblr').length && (i = (l = document.querySelectorAll('a.sharesTumblr')[0]).getAttribute('href'), l.setAttribute('href', updateQueryStringParameter(i, 't', encodeURIComponent(o)))), 0 < document.querySelectorAll('a.sharesStubleUpon').length && (s = (a = document.querySelectorAll('a.sharesStubleUpon')[0]).getAttribute('href'), a.setAttribute('href', updateQueryStringParameter(s, 'title', encodeURIComponent(o)))), 0 < document.querySelectorAll('a.sharesBlogger').length && (s = (a = document.querySelectorAll('a.sharesBlogger')[0]).getAttribute('href'), a.setAttribute('href', updateQueryStringParameter(s, 'n', encodeURIComponent(o)))));
        }
        var $___var_66b94d7f00ab7ef6, $___var_4547ca5f8eb5d37f = function () {
                'use strict';
                var c, d = 300;
                function u(e, t, o) {
                    return e.style.opacity = t, e.style.width = o, e;
                }
                function l(e) {
                    var l, i, t, o, a, s, r, n;
                    MG_Utils.hasClass(e.target, 'js-videoPreview') && !MG_Utils.hasClass(e.target, 'activeVideo') && (l = e.target), MG_Utils.hasClass(e.target, 'premiumHolder') && (l = MG_Utils.closest(e.target, '.img').querySelector('.js-videoPreview')), (l = MG_Utils.hasClass(e.target, 'premiumLockedVideo') || MG_Utils.hasClass(e.target, 'fade') ? e.target.querySelector('.js-videoPreview') : l) && (i = l.parentNode, r = MG_Utils.closest(l, '.phimage'), t = r ? r.querySelector('.preloadLine') : void 0, o = function () {
                        var e, t = document.createElement('div'), o = {
                                transition: 'transitionend',
                                OTransition: 'oTransitionEnd',
                                MozTransition: 'transitionend',
                                WebkitTransition: 'webkitTransitionEnd'
                            };
                        for (e in o)
                            if (void 0 !== t.style[e])
                                return o[e];
                    }(), a = MG_Utils.hasClass(l, 'js-menuSwap') ? l.getAttribute('data-image') : l.getAttribute('data-mediumthumb'), e = r ? r.querySelector('.privateOverlay') : void 0, s = i.querySelector('.watchedVideoText'), r = r ? r.querySelector('.modelThumbnail') : void 0, n = 'undefined' != typeof BrowserDetect && 'Safari' == BrowserDetect.browser, t && u(t, 1, '100%'), function (t) {
                        {
                            var o, l, e, i, a, s, r;
                            t && -1 === t.className.indexOf('loaded') && (o = t.querySelector('.js-viewDetails'), l = t.querySelector('.modelThumbnailOverlay'), e = l.dataset.videoId, i = t.querySelector('.js-video-thumb-sold .amount'), a = t.querySelector('.js-video-thumb-earnings span'), s = t.querySelector('.spinner'), r = void 0 !== r ? r : '', MG_Utils.ajaxCall({
                                url: MODEL_OVERLAY_THUMBNAIL.ajaxUrl,
                                type: 'POST',
                                data: {
                                    video_id: e,
                                    token: r
                                },
                                dataType: 'json',
                                success: function (e) {
                                    null != e && (t.className += ' loaded', i.innerHTML = e.sold, a.innerHTML = e.earned, o.href = e.url, MG_Utils.removeClass(l, 'hidden'), s.className += ' hidden');
                                }
                            }));
                        }
                    }(r), !!navigator.userAgent.match(/Trident.*rv[ :]*11\./) || MG_Utils.hasClass(l, 'activeVideo') || i.querySelector('.videoPreviewEl') || e || (c = setTimeout(function () {
                        s && MG_Utils.addClass(s, 'hide');
                        var e, t, o, o = (e = l.getAttribute('data-mediabook'), t = a, (o = document.createElement('video')).autoplay = !0, o.className = 'videoPreviewEl', o.loop = 'loop', o.muted = 'muted', o.src = e, o.poster = t, o);
                        o && o.addEventListener('loadeddata', function () {
                            MG_Utils.addClass(l, 'activeVideo');
                        }), i.appendChild(o), o && n && o.load();
                    }, d)), t && o && t.addEventListener(o, function () {
                        t.style.opacity = 0;
                    }));
                }
                function i(e) {
                    if (MG_Utils.hasClass(e.target, 'js-videoPreview') && MG_Utils.hasClass(e.target, 'activeVideo') && (o = e.target), MG_Utils.hasClass(e.target, 'premiumHolder') && (o = closestElement(e.target, '.img').querySelector('.js-videoPreview')), (MG_Utils.hasClass(e.target, 'premiumLockedVideo') || MG_Utils.hasClass(e.target, 'fade') && e.target.querySelector('.js-videoPreview') && !MG_Utils.hasClass(e.target.querySelector('.js-videoPreview'), 'activeVideo')) && (o = e.target.querySelector('.js-videoPreview')), o = MG_Utils.hasClass(e.target, 'fade') && e.target.querySelector('.js-videoPreview') && MG_Utils.hasClass(e.target.querySelector('.js-videoPreview'), 'activeVideo') && e.relatedTarget && 'IMG' !== e.relatedTarget.nodeName ? e.target.querySelector('.js-videoPreview') : o) {
                        var t = o.parentNode, e = t.querySelectorAll('.videoPreviewEl'), o = MG_Utils.closest(o, '.phimage'), o = o ? o.querySelector('.preloadLine') : void 0, t = t.querySelector('.watchedVideoText'), l = document.querySelectorAll('.activeVideo');
                        if (window.clearTimeout(c), o && u(o, 0, 0), t && MG_Utils.removeClass(t, 'hide'), e.length && [].forEach.call(e, function (e) {
                                e.parentNode.removeChild(e);
                            }), l.length)
                            for (var i = 0; i < l.length; i++)
                                MG_Utils.removeClass(l[i], 'activeVideo');
                    }
                }
                return {
                    getTarget: function () {
                        var e, t, o = 'undefined' != typeof BrowserDetect && 'Safari' == BrowserDetect.browser;
                        if (document.createElement('video').play && (o || function () {
                                var e = document.createElement('video'), t = !1;
                                try {
                                    (t = !!e.canPlayType) && ((t = new Boolean(t)).webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''), t = 'maybe' == t.webm || 'probably' == t.webm);
                                } catch (e) {
                                    console.log(e);
                                }
                                return t;
                            }()))
                            return e = arguments[0], t = document.querySelectorAll('.' + e), o = t.length, e = document.querySelector('body'), MG_Utils.addEventHandler(e, 'mouseover', l), MG_Utils.addEventHandler(e, 'mouseout', i), void (0 < o && MG_Utils.removeClassMultiple(t, 'js-videoThumbFlip'));
                        document.querySelector('body').addEventListener('mouseover', l);
                    }
                };
            }();
        modelNotificationList = $___var_66b94d7f00ab7ef6;
        VideoPreview = $___var_4547ca5f8eb5d37f;
        function $___var_a68dc1bfcd9932b2(e, t) {
            MG_Utils.ajaxCall({
                url: e,
                type: 'POST'
            });
            var o = document.querySelectorAll('#' + t), l = MG_Utils.closest(o[0], '.videoSection'), e = 0;
            o[0].parentNode.removeChild(o[0]), 0 == document.querySelectorAll('#' + t).length && (e += 1);
            var i, o = l.querySelectorAll('.showingInfo .totalSpan'), t = l.querySelectorAll('.showingInfo .videoSpan');
            (o || t) && (2 <= l.querySelectorAll('.showingInfo span').length && (i = parseInt(t[0].textContent, 10)), l = parseInt(o[0].textContent, 10), vVideos = i, vVideos -= 1, l -= e, o.length && (o[0].innerHTML = l), t.length && (t[0].innerHTML = vVideos));
        }
        function $___var_cd9712451fdfa365(e, t, o, l) {
            MG_Utils.ajaxCall({
                url: e,
                data: { id: t },
                type: 'POST'
            });
            o = document.querySelectorAll('#' + o);
            o[0].parentNode.removeChild(o[0]);
        }
        function $___var_c19326aa944c9d9e(e, t) {
            MG_Utils.ajaxCall({
                url: e,
                type: 'POST'
            });
            t = document.querySelectorAll('#' + t);
            t[0].parentNode.removeChild(t[0]);
        }
        0 != document.querySelectorAll('#modelNotificationList').length && (modelNotificationList = (modelNotificationList = document.querySelectorAll('#modelNotificationList'))[0].innerHTML);
        var $___var_8768e168c4513cf5, $___var_355d2957060aa959, $___var_6b0aea4342e9cf04 = [], $___var_3ba862bae0cf2bd0 = [
                5,
                5,
                5
            ], $___var_78be8096eb1bdaae = 5, $___var_bba5a060593ca846 = [
                0,
                0,
                0
            ];
        formSubmit = $___var_8768e168c4513cf5;
        myInt = $___var_355d2957060aa959;
        cacheAjaxNotif = $___var_6b0aea4342e9cf04;
        offset = $___var_3ba862bae0cf2bd0;
        limit = $___var_78be8096eb1bdaae;
        scrollLimit = $___var_bba5a060593ca846;
        function $___var_186540fb0f4ac087(e) {
            return e = 'string' == typeof e ? (e = (e = (e = (e = e.replace(/&amp;/g, '&')).replace(/&quot;/g, '"')).replace(/&#039;/g, '\'')).replace(/&lt;/g, '<')).replace(/&gt;/g, '>') : e;
        }
        function $___var_f69c4056c0c25d6c(e) {
            var t, o;
            (e.lastMessageIdReceived || e.lastMessageSent) && '0000-00-00 00:00:00' != e.lastAction && (e.profileSpammer || (t = '', e.lastMessageIdReceived && e.lastMessageIdSent > e.lastMessageIdReceived ? (e.lastMessageSent = e.lastMessageSent, t = e.lastMessageSent) : e.lastMessageIdReceived ? (e.lastMessageReceived = e.lastMessageReceived, t = e.lastMessageReceived) : e.lastMessageIdSent && (e.lastMessageSent = e.lastMessageSent, t = e.lastMessageSent), t = (t = escapeHtml(unEscapeHtml(t))).replace(/{{phTransactionIcon}}/g, '<i class="transactionIcon"></i>'), o = (o = document.querySelectorAll('ul#modelNotificationList > li.messageTemplate'))[0].cloneNode(!0), document.querySelectorAll('ul#modelNotificationList')[0].appendChild(o), MG_Utils.removeClass(o, 'messageTemplate'), MG_Utils.addClass(o, e.status), MG_Utils.addClass(o, 'newElement'), document.querySelectorAll('.newElement')[0].setAttribute('data-link', e.link), document.querySelectorAll('.newElement .js-messageLink')[0].setAttribute('data-link', e.link), document.querySelectorAll('.newElement img')[0].setAttribute('src', e.profileImage), document.querySelectorAll('.newElement .from')[0].innerHTML = e.profileUsername, document.querySelectorAll('.newElement .userProfileLink')[0].setAttribute('href', e.profileLink), document.querySelectorAll('.newElement .userProfileLink.from')[0].setAttribute('href', e.profileLink), document.querySelectorAll('.newElement .message')[0].innerHTML = t, document.querySelectorAll('.newElement .date')[0].innerHTML = e.lastActionNice, e.isFanClubChat && (document.querySelectorAll('.newElement .js-iconPlaceHolder')[0].className += ' fanOnlyIcon'), e.hasTransaction && (document.querySelectorAll('.newElement .js-transactionIconPlaceHolder')[0].className += ' transactionIcon'), o && o.addEventListener('click', function () {
                window.location.href = this.getAttribute('data-link');
            }), document.querySelectorAll('.newElement')[0].style.display = 'block', MG_Utils.removeClass(o, 'newElement')));
        }
        function $___var_dc818fe9110e1d37(e, t, o, l, i, a, s, r) {
            var n = 'manageRequest(' + s + ', 1, \'' + o + '\', \'' + l + '\')', c = 'manageRequest(' + s + ', 0, \'' + o + '\', \'' + l + '\')', d = r ? 'checked' : 'unchecked', u = (u = document.querySelectorAll('ul#modelNotificationList > li.friendRequestTemplate'))[0].cloneNode(!0);
            document.querySelectorAll('ul#modelNotificationList')[0].appendChild(u), MG_Utils.removeClass(u, 'friendRequestTemplate'), MG_Utils.addClass(u, 'newElement'), u.setAttribute('id', 'request_' + s), document.querySelectorAll('.newElement img')[0].setAttribute('src', e), document.querySelectorAll('.newElement .profileLink')[0].setAttribute('href', l), document.querySelectorAll('.newElement .from .profileLink')[0].setAttribute('href', l), document.querySelectorAll('.newElement .from .profileLink')[0].innerHTML = o, '1' == t ? initTooltip() : document.querySelectorAll('.newElement .verifiedUser')[0].style.display = 'none', document.querySelectorAll('.newElement .message')[0].innerHTML = i, document.querySelectorAll('.newElement .date')[0].innerHTML = a, document.querySelectorAll('.newElement button.confirm')[0].setAttribute('onclick', n), document.querySelectorAll('.newElement button.reject')[0].setAttribute('onclick', c), document.querySelectorAll('.newElement .subscribeConfirm input[type="checkbox"]')[0].setAttribute('id', 'autoSubscribe_' + s), document.querySelectorAll('.newElement .subscribeConfirm input[type="checkbox"]')[0].setAttribute(d, d), document.querySelectorAll('.newElement .subscribeConfirm label')[0].setAttribute('for', 'autoSubscribe_' + s), r && MG_Utils.addClass(document.querySelectorAll('.newElement .subscribeConfirm .fakeCheckBox ')[0], 'checked'), document.querySelectorAll('.newElement button.btnFlag')[0].setAttribute('data-userid', s), document.querySelectorAll('.newElement')[0].style.display = 'block', MG_Utils.removeClass(u, 'newElement');
        }
        function $___var_38126eb6345f7d3d(e) {
            document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', 0), document.querySelectorAll('ul#modelNotificationList > li')[0].style.display = 'none', document.querySelectorAll('ul#modelNotificationList > li.noNewItem')[0].style.display = 'block', document.querySelectorAll('ul#modelNotificationList > li.noNewItem > span')[0].innerHTML = e;
        }
        function $___var_572559cba903c5b5() {
            document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'block';
            for (var e = document.querySelectorAll('#notificationBox')[0].getAttribute('type'), t = document.querySelectorAll('ul#modelNotificationList > li,.handle3, .track3'), o = t.length - 1; 0 <= o; o--)
                t[o].style.display = 'none';
            'messageContent' == e ? (document.querySelectorAll('#notificationBox .headerBox a.headerLink')[0].setAttribute('href', messageViewAll), document.querySelectorAll('#notificationBox .footerBox a')[0].setAttribute('href', messageViewAll), cacheAjaxNotif[0] ? (document.querySelectorAll('#modelNotificationList')[0].innerHTML = cacheAjaxNotif[0], document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', cacheAjaxNotif[3]), document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'none', function (e) {
                for (var t = e.length - 1; 0 <= t; t--)
                    MG_Utils.addEventHandler(e[t], 'click', function (e) {
                        window.location.href = this.getAttribute('data-link');
                    });
            }(document.querySelectorAll('.js-messageLink'))) : MG_Utils.ajaxCall({
                type: 'GET',
                data: { token: token },
                url: '/chat/threads?limit=5&reset=1',
                dataType: 'json',
                success: function (e) {
                    if ('"EXPIRED"' == e)
                        document.location.reload();
                    else {
                        if (0 == e.jsonNonBlockedThreadsCount)
                            noAlert('messages');
                        else {
                            for (var t in e.jsonThreads)
                                createMailAlert(e.jsonThreads[t]);
                            document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', e.count), document.querySelectorAll('ul#modelNotificationList > li.noNewItem')[0].style.display = 'none';
                        }
                        cacheAjaxNotif[0] = document.querySelectorAll('#modelNotificationList')[0].innerHTML, cacheAjaxNotif[3] = document.querySelectorAll('#notificationBox')[0].getAttribute('data-count'), document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'none';
                    }
                }
            })) : 'requestContent' == e ? (document.querySelectorAll('#notificationBox .footerBox a')[0].setAttribute('href', requestViewAll), document.querySelectorAll('#notificationBox .headerBox a.headerLink')[0].setAttribute('href', requestViewAll), cacheAjaxNotif[1] ? (document.querySelectorAll('#modelNotificationList')[0].innerHTML = cacheAjaxNotif[1], document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', cacheAjaxNotif[4]), document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'none') : MG_Utils.ajaxCall({
                url: '/user/ajaxGetFriendRequests',
                type: 'GET',
                data: {
                    limit: 5,
                    token: token
                },
                dataType: 'json',
                success: function (e) {
                    if ('"EXPIRED"' == e)
                        document.location.reload();
                    else {
                        if (0 == e.count)
                            noAlert(WiDGET_NOTIFICATION_ICONS.noNewFriendRequests);
                        else {
                            for (var t = 0; t < e.datas.length; t++)
                                createfriendRequestAlert(e.datas[t].avatar_url, e.datas[t].verified, e.datas[t].username, e.datas[t].user_link, e.datas[t].message, e.datas[t].request_date, e.datas[t].user_id, e.autoSubscribeFriendRequestsReceived);
                            document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', e.count), document.querySelectorAll('ul#modelNotificationList > li.noNewItem')[0].style.display = 'none';
                        }
                        cacheAjaxNotif[1] = document.querySelectorAll('#modelNotificationList')[0].innerHTML, cacheAjaxNotif[4] = document.querySelectorAll('#notificationBox')[0].getAttribute('data-count'), document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'none';
                    }
                }
            })) : 'notifContent' == e && (document.querySelectorAll('#notificationBox .footerBox a')[0].setAttribute('href', notifViewAll), document.querySelectorAll('#notificationBox .headerBox a.headerLink')[0].setAttribute('href', notifViewAll), cacheAjaxNotif[2] ? (document.querySelectorAll('#modelNotificationList')[0].innerHTML = cacheAjaxNotif[2], document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', cacheAjaxNotif[5]), document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'none') : MG_Utils.ajaxCall({
                url: '/stream/notifications_mini',
                type: 'GET',
                data: {
                    limit: 15,
                    token: token
                },
                dataType: 'json',
                success: function (e) {
                    var t = e.html;
                    'REFRESH' == e ? document.location.reload() : e ? (t = JSON.parse(JSON.stringify(t).replace('#*', '').replace('*#', '')), document.querySelectorAll('#modelNotificationList')[0].innerHTML += t, document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', e.count), leaveModal()) : noAlert('notifications'), cacheAjaxNotif[2] = document.querySelectorAll('#modelNotificationList')[0].innerHTML, cacheAjaxNotif[5] = document.querySelectorAll('#notificationBox')[0].getAttribute('data-count'), document.querySelectorAll('#notificationBox #loadingDiv')[0].style.display = 'none';
                }
            }), leaveModal()), MG_Scroll.init({
                selector: document.querySelectorAll('#scrollNotif'),
                height: 'auto',
                color: '#F39000',
                size: '7px',
                alwaysVisible: !0,
                railVisible: !0,
                railOpacity: 1,
                railColor: '#222',
                distance: -2,
                opacity: 1,
                railClass: 'track1',
                barClass: 'handle1',
                wrapperClass: 'wrapper1'
            }), initTooltip();
        }
        function $___var_70f0f8b45d80d92a() {
            document.getElementById('fileupload') && MG_Utils.hasClass(document.getElementById('fileupload'), 'fileUploadPass') && (LeavePageConfirmationModal.formChangedHandler(), LeavePageConfirmationPrompt.formChangedHandler());
        }
        function $___var_27f64d0a3b379c37(i, a, s, r) {
            var n = document.querySelectorAll('#request_' + i)[0], c = document.querySelectorAll('#notificationBox')[0].getAttribute('data-count');
            url = a ? '/user/ajax_accept_friend_request' : '/user/ajax_reject_friend_request', url = url + '?token=' + token, (1 == a && $j('#autoSubscribeHeader').is(':checked') || 1 == a && $j('#autoSubscribe_' + i).is(':checked')) && (url += '&subscribe=1'), MG_Utils.ajaxCall({
                url: url,
                type: 'POST',
                data: { id: i },
                success: function (e) {
                    if ('OK' == e) {
                        if (document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', c - 1), a)
                            MG_Utils.addClass(n, 'accepted'), document.querySelectorAll('#request_' + i + ' .action button')[0].setAttribute('disabled', 'disabled'), document.querySelectorAll('#request_' + i + ' .action')[0].parentNode.removeChild(document.querySelectorAll('#request_' + i + ' .action')[0]), document.querySelectorAll('#request_' + i + ' .contentContainer')[0].innerHTML = 'You and <a href="' + r + '" style="font-weight:bold;">' + s + '</a> are now friends.';
                        else {
                            document.querySelectorAll('#request_' + i)[0].parentNode.removeChild(document.querySelectorAll('#request_' + i)[0]);
                            for (var t = document.querySelectorAll('#modelNotificationList li'), o = 0, l = t.length - 1; 0 <= l; l--)
                                'block' == t[l].style.display && o++;
                            0 == o && 0 == document.querySelectorAll('#notificationBox')[0].getAttribute('data-count') ? noAlert(WiDGET_NOTIFICATION_ICONS.noNewFriendRequests) : 0 == o && fetchData();
                        }
                        setTimeout(function () {
                            cacheAjaxNotif[1] = document.querySelectorAll('#modelNotificationList')[0].innerHTML, cacheAjaxNotif[4] = document.querySelectorAll('#notificationBox')[0].getAttribute('data-count');
                        }, 600);
                    }
                }
            });
        }
        function $___var_5c4224c1b7a78bfd(e) {
            var i = document.querySelectorAll('#request_' + e)[0], a = document.querySelectorAll('#notificationBox')[0].getAttribute('data-count');
            MG_Utils.ajaxCall({
                url: '/user/ajax_friend_request_report?token=' + token,
                type: 'POST',
                data: {
                    id: e,
                    accept: -1
                },
                success: function (e) {
                    if ('OK' == e) {
                        document.querySelectorAll('#tooltip')[0].style.display = 'none', document.querySelectorAll('#notificationBox')[0].setAttribute('data-count', a - 1), i.parentNode.removeChild(i);
                        for (var t = document.querySelectorAll('#modelNotificationList li'), o = 0, l = t.length - 1; 0 <= l; l--)
                            'block' == t[l].style.display && o++;
                        0 == o && 0 == document.querySelectorAll('#notificationBox')[0].getAttribute('data-count') ? noAlert(WiDGET_NOTIFICATION_ICONS.noNewFriendRequests) : 0 == o && fetchData(), setTimeout(function () {
                            cacheAjaxNotif[1] = document.getElementById('modelNotificationList').innerHTML, cacheAjaxNotif[4] = document.getElementById('notificationBox').getAttribute('data-count');
                        }, 600);
                    }
                }
            });
        }
        function $___var_102a8d1092738ac7() {
            var o = document.querySelectorAll('#notificationBox')[0].getAttribute('type');
            'requestContent' == o && (urlToFetch = '/user/ajaxGetFriendRequests', cachetoUse = 1), scrollLimit[cachetoUse] || offset[cachetoUse] >= document.querySelectorAll('#notificationBox')[0].getAttribute('data-count') || MG_Utils.ajaxCall({
                type: 'GET',
                data: {
                    offset: offset[cachetoUse],
                    limit: 5,
                    token: token
                },
                url: urlToFetch,
                dataType: 'json',
                success: function (e) {
                    for (var t = 0; t < e.datas.length; t++)
                        'requestContent' == o && createfriendRequestAlert(e.datas[t].avatar_url, e.datas[t].verified, e.datas[t].username, e.datas[t].user_link, e.datas[t].message, e.datas[t].request_date, e.datas[t].user_id, e.autoSubscribeFriendRequestsReceived);
                    offset[cachetoUse] = offset[cachetoUse] + 5, (offset[cachetoUse] >= document.querySelectorAll('#notificationBox')[0].getAttribute('data-count') || 100 <= offset[cachetoUse]) && (scrollLimit[cachetoUse] = 1), setTimeout(function () {
                        cacheAjaxNotif[cachetoUse] = document.querySelectorAll('#modelNotificationList')[0].innerHTML, initTooltip();
                    }, 600);
                }
            });
        }
        function $___var_043bb2c48568de7e() {
            scrollLimit[0] || MG_Utils.ajaxCall({
                url: '/chat/threads',
                type: 'GET',
                data: {
                    limit: 5,
                    offset: offset[0],
                    token: token
                },
                dataType: 'json',
                success: function (e) {
                    if ('"EXPIRED"' == e)
                        document.location.reload();
                    else {
                        if (0 != e.jsonThreadsCount) {
                            for (var t in (offset[0] = offset[0] + 5, e.jsonThreads))
                                createMailAlert(e.jsonThreads[t]);
                            document.querySelectorAll('ul#modelNotificationList > li.noNewItem')[0].style.display = 'none';
                        }
                        e.jsonNonBlockedThreadsCount < 5 && (scrollLimit[0] = 1), setTimeout(function () {
                            cacheAjaxNotif[0] = document.querySelectorAll('#modelNotificationList')[0].innerHTML;
                        }, 600);
                    }
                }
            });
        }
        function $___var_b90c2d422625d301() {
            scrollLimit[2] || offset[2] >= document.querySelectorAll('#notificationBox')[0].getAttribute('data-count') || MG_Utils.ajaxCall({
                url: '/stream/notifications_mini',
                type: 'GET',
                data: {
                    offset: offset[2],
                    limit: 15,
                    token: token
                },
                dataType: 'json',
                success: function (e) {
                    document.querySelectorAll('#modelNotificationList')[0].innerHTML += e.html, offset[2] = offset[2] + 5, (offset[2] >= document.querySelectorAll('#notificationBox')[0].getAttribute('data-count') || 100 <= offset[2]) && (scrollLimit[2] = 1), setTimeout(function () {
                        cacheAjaxNotif[2] = document.querySelectorAll('#modelNotificationList')[0].innerHTML, initTooltip();
                    }, 600);
                }
            });
        }
        function $___var_29106e402ae56010(l, e) {
            for (var t = document.querySelectorAll('.' + l), i = MG_Utils.hasClass(document.querySelector('body'), 'logged-out'), o = t.length - 1; 0 <= o; o--)
                MG_Utils.addEventHandler(t[o], 'mouseenter', function (e) {
                    var t = this, o = e.target || e.srcElement;
                    for (mouseEnterAvatar(t, i, e); 0 == MG_Utils.hasClass(o, l);)
                        o = o.parentNode;
                    myInt = setInterval(function () {
                        MG_Utils.hasClass(o, l) || (mouseLeaveAvatar(t, i, e), clearInterval(myInt));
                    }, 3000);
                }), MG_Utils.addEventHandler(t[o], 'mouseleave', function (e) {
                    mouseLeaveAvatar(this, i, e), myInt && clearInterval(myInt);
                });
        }
        'undefined' != typeof isLogged && isLogged && (formSubmit = function () {
            var e = document.querySelectorAll('#friendRequestForm')[0], a = document.querySelectorAll('#preventClick')[0], s = a.getAttribute('data-user-id'), e = {
                    url: e.getAttribute('action'),
                    data: {
                        cancelRequest: document.querySelectorAll('#cancelRequest')[0].getAttribute('value'),
                        messageRequest: document.querySelectorAll('#messageRequest')[0].value,
                        subscribe: document.querySelectorAll('#auto_subscribe')[0].checked ? 1 : 0
                    },
                    type: 'POST',
                    beforeSend: function () {
                        for (var e = document.querySelectorAll('.friend_' + s + ' button')[0], t = e.children, o = t.length - 1; 0 <= o; o--)
                            MG_Utils.addClass(t[o], 'visuallyHidden');
                        e.innerHTML += '<span class="spinner" />';
                    },
                    success: function (e) {
                        void 0 !== friendRequestModal && friendRequestModal.closeModal();
                        var t = document.querySelectorAll('.friend_' + s + ' button')[0], o = document.querySelectorAll('.friend_' + s + ' button .spinner'), l = t.children;
                        o[0].parentNode.removeChild(o[0]);
                        for (var i = l.length - 1; 0 <= i; i--)
                            MG_Utils.removeClass(l[i], 'visuallyHidden');
                        'SENT' == e.success && (t.setAttribute('data-friends', 1), o = document.querySelectorAll('.friend_' + s)[0], MG_Utils.removeClass(o, 'removeFriend'), MG_Utils.removeClass(o, 'add'), MG_Utils.addClass(o, 'sent'), e.subscribed && (t = document.querySelectorAll('.subscribe_' + s + ' button')[0], o = document.querySelectorAll('.subscribe_' + s), t.setAttribute('data-subscribed', 1), MG_Utils.removeClass(o[0], 'subscribe'), MG_Utils.addClass(o[0], 'unsubscribe'), document.querySelectorAll('.subscribe_' + s + ' .buttonLabel')[0].innerHTML = 'Subscribed'), a && 1 == a.getAttribute('data-refresh') && location.reload(), document.querySelectorAll('.friend_' + s + ' .buttonLabel')[0].innerHTML = e.text_initial);
                    }
                };
            MG_Utils.ajaxCall(e);
        });
        var $___var_4d880549b47cc434 = {}, $___var_9dfd3c3747fe52b9 = {
                timer: null,
                el: null
            };
        cache = $___var_4d880549b47cc434;
        timeout = $___var_9dfd3c3747fe52b9;
        function $___var_2ca2bcd996941d25() {
            document.querySelectorAll('.avatarWrap') && avatarPopupHandler('avatarWrap'), document.querySelectorAll('.usernameWrap') && avatarPopupHandler('usernameWrap'), document.querySelectorAll('.userLink') && avatarPopupHandler('userLink');
        }
        function $___var_1a67688fe2dd6d0b(e, t, o) {
            var i, l, a;
            0 == MG_Utils.getData(e, 'disable-popover') && (o = (i = o.target).querySelectorAll('.avatarPosition'), (MG_Utils.hasClass(i, 'avatarTrigger') && '' == o[0].innerHTML || MG_Utils.hasClass(i, 'usernameWrap') && '' == o[0].innerHTML || MG_Utils.hasClass(i, 'userLink')) && (l = MG_Utils.getData(e, 'type'), a = MG_Utils.getData(i, l + 'id'), MG_Utils.addClass(i, 'elementHovered'), timeout.timer && clearTimeout(timeout.timer), timeout.el = e, timeout.timer = setTimeout(function (e) {
                cache[a] ? (i.querySelector('.avatarPosition').innerHTML = cache[a], MG_Utils.hasClass(i, 'elementHovered') && (i.querySelector('.avatarPopOver').style.display = 'block')) : MG_Utils.ajaxCall({
                    type: 'POST',
                    url: '/' + l + '/hover?id=' + a,
                    dataType: 'html',
                    context: this,
                    success: function (e) {
                        var t = document.querySelectorAll('.avatarPopOver'), o = document.querySelector('.wrapper').offsetWidth;
                        i.querySelector('.avatarPosition').innerHTML = e;
                        for (var l = t.length - 1; 0 <= l; l--)
                            t[l].style.display = 'none';
                        MG_Utils.hasClass(i, 'elementHovered') && (i.querySelector('.avatarPopOver').style.display = 'block', o < (o = document.querySelector('.avatarPopOver')).getBoundingClientRect().left + o.offsetWidth ? MG_Utils.addClass(o, 'popOverEdge') : MG_Utils.removeClass(o, 'popOverEdge')), MG_Utils.hasClass(i, 'elementHovered') && (cache[a] = i.querySelector('.avatarPosition').innerHTML);
                    }
                });
            }, 1000)));
        }
        function $___var_5b6fec87db2cabaa(e, t, o) {
            var l;
            0 == MG_Utils.getData(e, 'disable-popover') && (l = o.target, o = MG_Utils.getData(e, 'type'), o = MG_Utils.getData(l, o + 'id'), t && e.querySelector('.avatarPosition').length && (cache[o] = e.querySelector('.avatarPosition').innerHTML), e.querySelector('.avatarPopOver') && (e.querySelector('.avatarPopOver').style.display = 'none'), timeout.timer && clearTimeout(timeout.timer), MG_Utils.removeClass(e, 'elementHovered'));
        }
        var $___var_d3e499b9363d157d = function () {
            var e = document.querySelectorAll('#moreData, ul.videos-list, ul.videos, ul.popularSectionListPremium');
            [].forEach.call(e, function (e) {
                e.addEventListener('mousedown', function (e) {
                    var t, o, l = e.target;
                    (MG_Utils.hasClass(l, 'fadeImage') || MG_Utils.hasClass(l, 'fade')) && (t = l.querySelector('a.img'), (l = (o = l.querySelector('a.selectVideoThumb')) ? o.getAttribute('href') : t ? t.getAttribute('href') : (l.querySelector('a') || l.parentElement).getAttribute('href')) && (e.preventDefault(), 1 === e.which && (window.location.href = l), 2 === e.which && window.open(l, '_blank')));
                });
            });
        };
        fadeClickthroughEvent = $___var_d3e499b9363d157d;
        function $___var_05036c20b74c7478(e) {
            if (!e.children.length)
                return null;
            if (e.firstElementChild)
                return e.firstElementChild;
            for (var t = 0, o = e.children.length; t <= o; t++) {
                var l = e.children[t];
                if (1 === l.nodeType)
                    return l;
            }
        }
        MG_Utils.domReady(function () {
            var l, i, e;
            if (e = document.querySelector('#js-noticeWarningModal'), o = document.querySelector('#js-blackListModal'), e && o && (l = new MG_Modal({
                    content: e,
                    closeButton: !1,
                    className: 'noticeModal',
                    closeDocument: !1
                }), i = new MG_Modal({
                    content: o,
                    closeButton: !1,
                    className: 'blackListModal',
                    closeDocument: !1
                }), document.addEventListener('click', function (e) {
                    e = e.target;
                    (MG_Utils.hasClass(e, 'js-closeBlackList') || MG_Utils.hasClass(e, 'js-closeNotice')) && (MG_Utils.hasClass(e, 'js-closeBlackList') && i.closeModal(), MG_Utils.hasClass(e, 'js-closeNotice') && l.closeModal());
                }), document.addEventListener('click', function (e) {
                    var t = e.target;
                    if (!MG_Utils.hasClass(t, 'js-ckeckExternalSource')) {
                        if (null == t.parentNode)
                            return;
                        if (!MG_Utils.hasClass(t.parentNode, 'js-ckeckExternalSource'))
                            return;
                    }
                    e.preventDefault();
                    var o = t.getAttribute('href') || t.parentNode.getAttribute('href');
                    MG_Utils.ajaxCall({
                        type: 'POST',
                        url: modalTranslationText.blackWhiteListUrl,
                        data: { url: o },
                        dataType: 'json',
                        success: function (e) {
                            try {
                                switch (e.status) {
                                case 'blacklist':
                                    return i.openModal(function (e, t) {
                                        t.querySelector('.js-blackListInput').value = o;
                                    });
                                case 'whitelist':
                                    return window.location.href = o;
                                default:
                                    return l.openModal(function (e, t) {
                                        t.querySelector('.js-noticeDivInput').value = o, t.querySelector('.js-extrnalLink').href = o;
                                    });
                                }
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    });
                }), document.querySelector('.js-extrnalLink') && document.addEventListener('click', function (e) {
                    MG_Utils.hasClass(e.target, 'js-extrnalLink') && l.closeModal();
                })), 'undefined' != typeof BrowserDetect) {
                switch (BrowserDetect.browser) {
                case 'Opera':
                    MG_Utils.addClass(document.documentElement, 'opera');
                    break;
                case 'Safari':
                    MG_Utils.addClass(document.documentElement, 'safari');
                    break;
                case 'Firefox':
                    MG_Utils.addClass(document.documentElement, 'firefox');
                    break;
                case 'Chrome':
                    MG_Utils.addClass(document.documentElement, 'chrome');
                    break;
                case 'Explorer':
                    MG_Utils.addClass(document.documentElement, 'ie');
                }
                'Explorer' == BrowserDetect.browser && 10 == BrowserDetect.version && MG_Utils.addClass(document.documentElement, 'ie10'), !navigator.userAgent.match(/Trident.*rv[ :]*11\./) || (MG_Utils.addClass(document.documentElement, 'ie11'), MG_Utils.addClass(document.documentElement, 'ie')), 'Win32' == navigator.platform ? MG_Utils.addClass(document.documentElement, 'windows') : 'MacIntel' == navigator.platform && MG_Utils.addClass(document.documentElement, 'osx'), BrowserDetect.init();
            }
            'undefined' != typeof searchTypes && 'undefined' != typeof autocompleteSearch && new autocompleteSearch({
                types: searchTypes,
                placeholderData: page_params.placeholderData
            }), 'undefined' != typeof dropdown && (dropdown.init('.mainFilter, .sortFilter'), dropdown.init('#languageWrapper'), dropdown.init('.languageWrapper'), dropdown.init('#notificationIcons', {
                closeCallback: function () {
                    var e = document.querySelector('.notificationIcon[data-type="' + document.getElementById('notificationBox').getAttribute('type') + '"] > span');
                    e && (e.style.display = 'none');
                }
            }), 'undefined' != typeof isLogged && isLogged && dropdown.init('#profileMenuWrapper')), renderCommentLinks(), function () {
                for (var e = document.querySelectorAll('textarea[data-val]'), t = 0; t < e.length; t++)
                    element = e[t], '' == element.value && (element.value = element.getAttribute('data-val'));
            }(), function () {
                for (var e = document.querySelectorAll('ul'), t = 0; t < e.length; ++t) {
                    var o = firstChild(e[t]), l = MG_Utils.lastChild(e[t]);
                    o && MG_Utils.addClass(o, 'alpha'), l && (MG_Utils.hasClass(l, 'sectionMoreBtn') ? MG_Utils.addClass(l.previousElementSibling || MG_Utils.previousElementSibling(l), 'omega') : MG_Utils.addClass(l, 'omega'));
                }
            }(), function () {
                for (var e = document.querySelectorAll('.container a.img, .container img'), t = 0; t < e.length; ++t)
                    MG_Utils.hasClass(e[t], 'catIcon') || (e[t].setAttribute('data-title', e[t].title), e[t].setAttribute('title', ''));
            }(), initTooltip(), function () {
                for (var e, t, o, l = document.querySelectorAll('.wideDropdown'), i = 0; i < l.length; ++i)
                    if (t = l[i], e = document.querySelector('.menu.' + t.getAttribute('data-submenu-type')), o = document.querySelectorAll('.wideDropdown.' + t.getAttribute('data-submenu-type')), e)
                        for (var a = 0; a < o.length; a++)
                            e.appendChild(o[a]);
            }(), function () {
                var t = document.getElementById('countryRedirectMessage');
                if (t && !PH_Storage.getItem('hideLangRedirect')) {
                    t.style.display = 'block';
                    for (var e = t.querySelectorAll('i'), o = 0; o < e.length; o++)
                        MG_Utils.addEventHandler(e[o], 'click', function (e) {
                            (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, t.style.display = 'none', PH_Storage.saveWithExpiry('hideLangRedirect', !0);
                        });
                }
            }(), function () {
                for (var e = document.querySelectorAll('.shareIcons a'), t = 0; t < e.length; t++)
                    MG_Utils.addEventHandler(e[t], 'click', function (e) {
                        var t, o = (e = e || window.event).target || e.srcElement;
                        if (MG_Utils.preventDefault(e), 'a' !== o.nodeName.toLowerCase())
                            for (; (o = o.parentElement) && 'a' !== o.nodeName.toLowerCase(););
                        t = Math.floor(((screen.availWidth || 1024) - 640) / 2), e = Math.floor(((screen.availHeight || 700) - 320) / 2), window.open(o.href, 'social', 'width=640,height=320,left=' + t + ',top=' + e + ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');
                    });
            }(), VideoPreview.getTarget('js-videoPreview'), o = function () {
                'use strict';
                function t() {
                    var e = document.querySelector(i.meta);
                    e && 'undefined' != typeof mixpanel && mixpanel.track('Viewed Page', { 'Page Name': e.getAttribute('content') });
                }
                function o() {
                    for (var e = document.querySelectorAll(i.link), t = 0; t < e.length; t++)
                        MG_Utils.addEventHandler(e[t], 'click', l);
                }
                var i = {
                        debug: !1,
                        link: '.js-mxp',
                        parent: '.js-mxpParent',
                        meta: 'head [name="mxp-page"]'
                    }, l = function (e) {
                        var t = MG_Utils.closest(this, i.parent);
                        if (!this.hasAttribute('data-mxptext') || !t || !t.hasAttribute('data-mxp'))
                            return !1;
                        var o = 'None', l = t.getAttribute('data-mxp'), t = {};
                        this.hasAttribute('data-mxptype') && (o = this.getAttribute('data-mxptype')), i.debug && MG_Utils.preventDefault(e), t[o + 'Name'] = this.getAttribute('data-mxptext'), t.PageFrom = l, 'undefined' != typeof mixpanel && mixpanel.track('View ' + o, t);
                    };
                return {
                    init: function (e) {
                        if (!premiumFlag)
                            return !1;
                        e = e || {}, (i = MG_Utils.extendSimple(i, e)).debug && console.log('MixPanel debug mode'), t(), o();
                    },
                    trackClick: o
                };
            }(), 'undefined' != typeof premiumFlag && '1' == premiumFlag && o.init(), (o = document.querySelectorAll('#scrollNotif')[0]) && MG_Utils.addEventHandler(o, 'scroll', function (e) {
                var t = document.querySelectorAll('#scrollNotif');
                t[0].scrollTop + t[0].clientHeight >= t[0].scrollHeight && ('notifContent' == (t = document.querySelectorAll('#notificationBox')[0].getAttribute('type')) ? fetchDataNotification() : 'messageContent' == t ? setTimeout(function () {
                    fetchDataMessages();
                }, 600) : fetchData());
            }), MG_Utils.limit = function (e, t) {
                for (var t = MG_Utils.extendSimple({ limit: 200 }, t), o = e.length - 1; 0 <= o; o--)
                    MG_Utils.addEventHandler(e[o], 'keyup', function (e) {
                        e = (e = e || event).target || e.srcElement;
                        e.value.length > t.limit && (e.value = e.value.substring(0, t.limit));
                    });
            };
            var a, s, t, r = function () {
                    'use strict';
                    var e;
                    function t() {
                        var o = {}, t = 'extended', r = '';
                        function n(e) {
                            e.preventDefault(), l(this.bioAbout, t), l(this.biographyBtns, t), l(this.bioText, t), l(this.profileDetails, t), l(this.showMoreLink, t), l(this.socials, t), this.parentElement && l(this.parentElement, t), this.showMoreLink.innerHTML = MG_Utils.hasClass(this.showMoreLink, t) ? o.showLess : o.showMore;
                        }
                        function l(e, t) {
                            e && MG_Utils.toggleClass(e, t);
                        }
                        this.init = function (e, t) {
                            o = t, function () {
                                var e = {
                                    parentElement: this.querySelector('.bottomDescription '),
                                    bioAbout: this.querySelector('.js-bioAbout'),
                                    biographyBtns: this.querySelector('.biographyBtns'),
                                    bioText: this.querySelector('.js-bioText'),
                                    profileDetails: this.querySelector('.js-infoText'),
                                    showMoreLink: this.querySelector('.js-showMoreLess'),
                                    socials: this.querySelector('.js-socials')
                                };
                                !function () {
                                    if (this.showMoreLink)
                                        if (document.querySelector('.claimed') || document.querySelector('.amateurModel')) {
                                            var e = document.querySelectorAll('.js-headerContent'), t = !1, o = function () {
                                                    var e, t, o = document.querySelector('.bottomDescription').offsetHeight - document.querySelector('.fadeout').offsetHeight, l = !!document.documentMode;
                                                    return 0 === o && l ? (e = 0, t = setInterval(function () {
                                                        o = document.querySelector('.bottomDescription').offsetHeight - document.querySelector('.fadeout').offsetHeight, e++, 0 < o && clearInterval(t), 20 < e && clearInterval(t);
                                                    }, 1500)) : (o = 0, [].forEach.call(document.querySelectorAll('.js-highestChild'), function (e) {
                                                        null !== e.offsetParent && (o = Math.max(e.offsetHeight, o));
                                                    })), o + 20;
                                                }();
                                            if (void 0 !== e && 0 < e.length)
                                                for (var l = 0; l < e.length; l++)
                                                    if (e[l].offsetHeight > o) {
                                                        t = !0;
                                                        break;
                                                    }
                                            t ? (MG_Utils.addClass(this.showMoreLink, 'displayNone'), MG_Utils.addClass(document.querySelector('.fadeout'), 'displayNone')) : this.showMoreLink.addEventListener('click', n.bind(this));
                                        } else {
                                            var i, a, s;
                                            (this.bioText && 0 < this.bioText.scrollHeight || this.profileDetails && 0 < this.profileDetails.scrollHeight) && (i = this.bioText ? this.bioText.scrollHeight : 0, s = this.profileDetails ? this.profileDetails.scrollHeight : 0, a = this.bioAbout ? 205 : a, s = s <= a, i <= a && s ? MG_Utils.addClass(this.showMoreLink, 'displayNone') : this.showMoreLink.addEventListener('click', n.bind(this)), clearInterval(r));
                                        }
                                }.call(e);
                            }.call(e);
                        };
                    }
                    return {
                        getInstance: function () {
                            return null == e && ((e = new t()).constructor = null), e;
                        }
                    };
                }();
            function n(e) {
                e.length && [].forEach.call(e, function (e) {
                    var t = document.querySelector('.add-to-playlist-menu');
                    t && !MG_Utils.hasClass(t, 'display-none') || MG_Utils.removeClass(e, 'active');
                });
            }
            function c(e) {
                var t, o = document.querySelector('.add-to-playlist-menu');
                if (e ? t = e.querySelector('.playlist-trigger') : (e = document.querySelector('.zoom.active')) && (t = e.querySelector('.playlist-trigger')), t)
                    for (; 'block' === o.style.display;)
                        t.click();
            }
            function d(e) {
                return !!e && (!MG_Utils.hasClass(e, 'playlist-trigger') && !(MG_Utils.hasClass(e, 'playlist-menu-addTo') || MG_Utils.hasClass(e, 'playlist-list') || MG_Utils.hasClass(e, 'playlist-menu-createNew')));
            }
            !function () {
                try {
                    var e = document.querySelectorAll('.topProfileHeader') ? document.querySelectorAll('.topProfileHeader')[0] : null, t = 'undefined' != typeof PROFILE_MORE_LESS_TEXT ? PROFILE_MORE_LESS_TEXT : null;
                    e && t && r.getInstance().init(e, t);
                } catch (e) {
                    console.log('ERROR === SHOW MORE LESS CLASS ==='), console.log(e);
                }
                if (document.querySelectorAll('.createPlaylistModalTrigger'))
                    for (var o = document.querySelectorAll('.createPlaylistModalTrigger'), l = o.length - 1; 0 <= l; l--)
                        MG_Utils.addEventHandler(o[l], 'click', function (e) {
                            (e = e || event).preventDefault(), 'undefined' != typeof createPlaylistModalComponent && createPlaylistModalComponent.open(function () {
                                dropdown.init('#playlist-form .privacySelector'), MG_Utils.limit(document.querySelectorAll('#new-playlist-description'), { limit: 1000 });
                            });
                        });
            }(), function () {
                if (document.querySelectorAll('.blockPageScroll'))
                    for (var e = document.querySelectorAll('.blockPageScroll'), t = e.length - 1; 0 <= t; t--)
                        MG_Utils.addEventHandler(e[t], 'mousewheel', function (e) {
                            (e = e || event).preventDefault();
                        }), MG_Utils.addEventHandler(e[t], 'DOMMouseScroll', function (e) {
                            (e = e || event).preventDefault();
                        });
            }(), function () {
                if (document.querySelectorAll('.expandable-title')) {
                    for (var e = document.querySelectorAll('.expandable-title'), t = e.length - 1; 0 <= t; t--)
                        MG_Utils.addEventHandler(e[t], 'click', function () {
                            if (MG_Utils.hasClass(this.parentNode, 'active')) {
                                var e = this.parentNode;
                                e.querySelector('.expandable-content').style.display = 'none', MG_Utils.removeClass(e, 'active');
                            } else {
                                for (var e = this.parentNode, t = document.querySelectorAll('.expandable-section.active'), o = t.length - 1; 0 <= o; o--)
                                    MG_Utils.removeClass(t[o], 'active'), t[o].querySelector('.expandable-content').style.display = 'none';
                                e.querySelector('.expandable-content').style.display = 'block', MG_Utils.addClass(e, 'active');
                            }
                        });
                    for (var o = document.querySelectorAll('.expandable-title .expand-button'), t = o.length - 1; 0 <= t; t--)
                        MG_Utils.addEventHandler(o[t], 'click', function (e) {
                            (e = e || event).preventDefault();
                        });
                }
            }(), (o = document.body).addEventListener('mouseover', function (e) {
                var t = e.target;
                e.relatedTarget;
                window.clearTimeout(a), MG_Utils.hasClass(t, 'fadeUp') && !MG_Utils.hasClass(t.parentNode, 'js-noFade') && (l = t.querySelector('.thumb'), e = t.querySelector('.privateOverlay'), o = (MG_Utils.hasClass(t, 'fade') ? t : MG_Utils.closest(t, '.fade')).querySelector('.watchedVideoText'), !e && l && (!MG_Utils.hasClass(l, 'js-videoPreview') || MG_Utils.hasClass(l, 'js-videoThumbFlip') || MG_Utils.hasClass(l, 'activeVideo') || (a = setTimeout(function () {
                    MG_Utils.removeClass(t, 'fadeUp');
                }, 300)), MG_Utils.hasClass(l, 'js-videoThumbFlip') && !l.getAttribute('data-flipbook_active') && (MG_Utils.hasClass(l, 'js-videoPreview') || (a = setTimeout(function () {
                    MG_Utils.removeClass(t, 'fadeUp'), o && !MG_Utils.hasClass(o, 'hide') && MG_Utils.addClass(o, 'hide');
                }, 100)), MG_Utils.hasClass(l, 'js-videoPreview') && (a = setTimeout(function () {
                    MG_Utils.removeClass(t, 'fadeUp'), o && !MG_Utils.hasClass(o, 'hide') && MG_Utils.addClass(o, 'hide');
                }, 100)))));
                var o, l = !!document.documentMode;
                MG_Utils.hasClass(t, 'js-videoThumbFlip') && l && (o = MG_Utils.closest(t, '.fade').querySelector('.watchedVideoText')) && !MG_Utils.hasClass(o, 'hide') && MG_Utils.addClass(o, 'hide');
            }), o.addEventListener('mouseout', function (e) {
                var t, o, l = e.target, e = e.relatedTarget;
                window.clearTimeout(a), MG_Utils.closest(l, '.fade') && (MG_Utils.hasClass(MG_Utils.closest(l, '.fade'), 'fadeUp') || (o = MG_Utils.closest(l, '.fade').querySelector('.watchedVideoText'), MG_Utils.hasClass(l, 'js-videoThumbFlip') && MG_Utils.hasClass(l, 'js-videoPreview') && (MG_Utils.addClass(MG_Utils.closest(l, '.fade'), 'fadeUp'), o && MG_Utils.hasClass(o, 'hide') && MG_Utils.removeClass(o, 'hide')), MG_Utils.hasClass(l, 'js-videoPreview') && !MG_Utils.hasClass(l, 'js-videoThumbFlip') && MG_Utils.addClass(MG_Utils.closest(l, '.fade'), 'fadeUp')), t = !!document.documentMode, MG_Utils.hasClass(l, 'js-videoThumbFlip') && t && (o = MG_Utils.closest(l, '.fade').querySelector('.watchedVideoText')) && MG_Utils.hasClass(o, 'hide') && MG_Utils.removeClass(o, 'hide')), MG_Utils.hasClass(l, 'fade') && !MG_Utils.hasClass(l, 'fadeUp') && (t = l.querySelector('.thumb'), MG_Utils.hasClass(l, 'fade') && (o = l.querySelector('.watchedVideoText')), t && MG_Utils.hasClass(t, 'js-videoThumbFlip') && MG_Utils.hasClass(t, 'js-videoPreview') && e && !MG_Utils.hasClass(e, 'thumb') && (MG_Utils.addClass(l, 'fadeUp'), o && MG_Utils.hasClass(o, 'hide') && MG_Utils.removeClass(o, 'hide')), t && MG_Utils.hasClass(t, 'js-videoThumbFlip') && !MG_Utils.hasClass(t, 'js-videoPreview') && e && !MG_Utils.hasClass(e, 'thumb') && (MG_Utils.addClass(l, 'fadeUp'), o && MG_Utils.hasClass(o, 'hide') && MG_Utils.removeClass(o, 'hide')), t && MG_Utils.hasClass(t, 'js-videoPreview') && !MG_Utils.hasClass(t, 'js-videoThumbFlip') && !MG_Utils.hasClass(t, 'activeVideo') && MG_Utils.addClass(l, 'fadeUp'));
            }), (o = document.body).addEventListener('mouseover', function (e) {
                var t, o, l, e = e.target;
                window.clearTimeout(s), MG_Utils.closest(e, '.zoom') && !MG_Utils.hasClass(MG_Utils.closest(e, '.zoom'), 'active') && ((MG_Utils.hasClass(e, 'img') && MG_Utils.hasClass(e.querySelector('.thumb'), 'js-videoThumbFlip') || MG_Utils.hasClass(e, 'js-videoThumbFlip')) && (t = MG_Utils.closest(e, '.zoom'), o = document.querySelectorAll('.zoom.active'), (l = document.querySelector('.add-to-playlist-menu')) && 'block' === l.style.display && c(), n(o), s = setTimeout(function () {
                    MG_Utils.addClass(t, 'active');
                }, 100)), (MG_Utils.hasClass(e, 'img') && e.querySelector('.js-videoPreview') && !MG_Utils.hasClass(e.querySelector('.js-videoPreview'), 'activeVideo') && !e.querySelector('.js-videoThumbFlip') || MG_Utils.hasClass(e, 'js-videoPreview') && !MG_Utils.hasClass(e, 'activeVideo') && !MG_Utils.hasClass(e, 'js-videoThumbFlip')) && (t = MG_Utils.closest(e, '.zoom'), o = document.querySelectorAll('.zoom.active'), (l = document.querySelector('.add-to-playlist-menu')) && 'block' === l.style.display && c(), n(o), s = setTimeout(function () {
                    MG_Utils.addClass(t, 'active');
                }, 100)));
            }), o.addEventListener('mouseout', function (e) {
                var t = e.target, o = e.relatedTarget, e = this.querySelector('.add-to-playlist-menu');
                if (MG_Utils.closest(t, '.zoom')) {
                    var l, i = MG_Utils.closest(t, '.zoom');
                    if (window.clearTimeout(s), (MG_Utils.hasClass(t, 'img') || MG_Utils.hasClass(t, 'thumb')) && (!e || MG_Utils.hasClass(e, 'display-none')) && o && (MG_Utils.hasClass(o, 'playlist-trigger') || MG_Utils.hasClass(o, 'not-interested-trigger') || MG_Utils.closest(o, '.playlist-menu-addTo') || MG_Utils.closest(o, '.playlist-list') || MG_Utils.closest(o, '.playlist-menu-createNew') || MG_Utils.closest(o, '.marker-overlays')))
                        return;
                    (MG_Utils.hasClass(i, 'active') && MG_Utils.hasClass(t, 'js-videoPreview') && MG_Utils.hasClass(t, 'js-videoThumbFlip') || t.querySelector('.js-videoPreview') && t.querySelector('.js-videoThumbFlip') && !MG_Utils.hasClass(o, 'thumb') && d(o)) && (l = document.querySelectorAll('.zoom.active'), e && 'block' === e.style.display && c(i), n(l)), (MG_Utils.hasClass(i, 'active') && MG_Utils.hasClass(t, 'js-videoThumbFlip') || MG_Utils.hasClass(t, 'img') && t.querySelector('.js-videoThumbFlip') && o && d(o) && !MG_Utils.hasClass(o, 'thumb')) && (l = document.querySelectorAll('.zoom.active'), e && 'block' === e.style.display && c(i), n(l)), (MG_Utils.hasClass(i, 'active') && MG_Utils.hasClass(t, 'js-videoPreview') && !MG_Utils.hasClass(t, 'activeVideo') && !MG_Utils.hasClass(t, 'js-videoThumbFlip') || MG_Utils.hasClass(t, 'img') && t.querySelector('.js-videoPreview') && !t.querySelector('.js-videoThumbFlip') && !MG_Utils.hasClass(t.querySelector('.js-videoPreview'), 'activeVideo') && d(o)) && (l = document.querySelectorAll('.zoom.active'), e && 'block' === e.style.display && c(i), n(l));
                }
                (MG_Utils.closest(t, '.marker-overlays') || MG_Utils.closest(t, '.add-to-playlist-icon')) && MG_Utils.closest(t, '.zoom') && MG_Utils.hasClass(MG_Utils.closest(t, '.zoom'), 'active') && o && !MG_Utils.closest(o, '.marker-overlays') && !MG_Utils.closest(o, '.phimage') && !MG_Utils.closest(o, '.add-to-playlist-menu') && (l = document.querySelectorAll('.zoom.active'), i = MG_Utils.closest(t, '.zoom'), window.clearTimeout(s), e && 'block' === e.style.display && c(i), n(l)), t && o && (MG_Utils.closest(t, '.playlist-menu-addTo') || MG_Utils.closest(t, '.playlist-list') || MG_Utils.closest(t, '.playlist-menu-createNew')) && !MG_Utils.hasClass(o, 'playlist-trigger') && !MG_Utils.hasClass(o, 'img') && !MG_Utils.closest(o, '.add-to-playlist-menu') && (l = document.querySelectorAll('.zoom.active'), window.clearTimeout(s), e && 'block' === e.style.display && c(), n(l));
            }), o = document.querySelector('#searchInput'), t = document.querySelector('#searchBarContainer'), null !== o && (MG_Utils.addEventHandler(o, 'focus', function () {
                MG_Utils.addClass(t, 'active');
            }), MG_Utils.addEventHandler(o, 'blur', function () {
                MG_Utils.removeClass(t, 'active');
            })), fadeClickthroughEvent();
            var o = document.querySelector('.js-headerUploadBtn'), u = document.querySelector('.js-uploadModalContent');
            o && o.addEventListener('click', function () {
                'undefined' != typeof isLogged && isLogged ? u && MG_Utils.toggleClass(u, 'displayNone') : textPHTranslation && signinbox && signinbox.show(textPHTranslation.loginTitleUploadVideo);
            });
        });
        var $___var_9329b53824e9d3fd = function () {
            var n = this, c = {};
            function d(e, t) {
                e = e.querySelector('.loverEmail');
                e && t.payload && t.payload.loverEmail && (e.innerHTML = t.payload.loverEmail);
            }
            function o(e, t) {
                var o = t.querySelector('.submitBtn'), l = t.querySelector('.customInput'), t = t.querySelector('#loverSubmitForm');
                o && n.type === n.action.POPUPINFO ? o.addEventListener('click', function (e) {
                    n.modal.closeModal();
                }) : (o && l && t && (o.addEventListener('click', function (e) {
                    e.preventDefault();
                    var t = this.querySelector('input[name="loverEmail"]'), o = t ? t.value : '', l = this.querySelector('input[name="senderNickname"]'), e = l ? l.value : '', l = this.querySelector('textarea[name="loverMessage"]'), l = l ? l.value : '';
                    t && !new RegExp('(\\s|^)hideElement(\\s|$)').test(t.className) && function (e) {
                        return !e || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e);
                    }(o.trim()) ? i(t, 'emailInvlidError') : n.type !== n.action.CHANGELOVER || o !== n.secondaryLoverEmail ? (l = l.replace(/(;|\(|\)|\[|\]|#)/g, ''), e = e.replace(/(;|\(|\)|\[|\]|#)/g, ''), MG_Utils.ajaxCall({
                        url: n.settings.apiUrl,
                        data: {
                            loverEmail: o.trim(),
                            senderNickname: e.trim(),
                            loverMessage: l.trim()
                        },
                        type: 'POST',
                        success: function (e) {
                            var t, o, l, i, a, s, r;
                            e && 'success' == e.success ? c[n.type + 'Success'] ? ('undefined' != typeof MANAGE_PREMIUM_SETTINGS ? (t = n.type, o = e, l = document.querySelector('.loversMembership .loversChangeWrapper'), i = document.querySelector('.loversMembership .addLoversWrapper'), a = document.querySelector('.loversMembership .loversWrapper'), s = document.querySelector('.loversMembership .loverEmail'), r = document.querySelector('.loversMembership .loverStatus'), i && l && s && r && a && (t === n.action.REMOVELOVER ? (MG_Utils.addClass(l, 'hidden'), MG_Utils.removeClass(i, 'hidden'), MG_Utils.addClass(a, 'hidden')) : (MG_Utils.addClass(i, 'hidden'), MG_Utils.removeClass(l, 'hidden'), MG_Utils.removeClass(a, 'hidden'), MG_Utils.removeClass(s, 'hidden'), MG_Utils.removeClass(r, 'approved'), MG_Utils.addClass(r, 'pending'), r.innerText = MANAGE_PREMIUM_SETTINGS.pending, o && o.payload && o.payload.loverEmail && (n.secondaryLoverEmail = o.payload.loverEmail, s.innerText = o.payload.loverEmail)))) : (i = n.type, l = e, a = document.querySelector('.loverContent .loverChangeButtons'), r = document.querySelector('.loverContent .addLoverButtonWrap'), s = document.querySelector('.loverContent .loverEmail'), o = document.querySelector('.loverContent .loverStatus'), r && a && s && o && (i === n.action.REMOVELOVER ? (MG_Utils.addClass(a, 'display-none'), MG_Utils.removeClass(r, 'display-none'), MG_Utils.addClass(s, 'display-none'), MG_Utils.removeClass(o, 'pending')) : (MG_Utils.addClass(r, 'display-none'), MG_Utils.removeClass(a, 'display-none'), MG_Utils.removeClass(s, 'display-none'), MG_Utils.addClass(o, 'pending'), l && l.payload && l.payload.loverEmail && (n.secondaryLoverEmail = l.payload.loverEmail, s.innerText = l.payload.loverEmail)))), n._layoutModal('Success', d, e)) : n.type === n.action.CHANGETYPE && e.payload && e.payload.downgrade_url && (window.location.href = e.payload.downgrade_url) : u(e.messages);
                        }
                    })) : i(t, 'emailRepeatError');
                }.bind(t)), l.addEventListener('focus', function () {
                    {
                        var e;
                        MG_Utils.hasClass(this, 'error') && (e = document.querySelector('.referLoveModal #hiddenEmail'), MG_Utils.removeClass(this, 'error'), this.value = e ? e.value : '', u());
                    }
                }.bind(l))), n.type === n.action.INVITELOVER && function () {
                    {
                        var e;
                        n.modal && n.modal.container && (e = function e(t) {
                            MG_Utils.hasClass(t.target, 'closeMTubes') && (MG_Utils.ajaxCall({
                                url: postSignupPageParams.dismissInvitationUrl,
                                type: 'GET',
                                success: function (e) {
                                }
                            }), n.modal.container.removeEventListener('click', e));
                        }, n.modal.container.addEventListener('click', e));
                    }
                }());
            }
            function i(e, t) {
                var o = document.querySelector('.referLoveModal #hiddenEmail');
                o && !MG_Utils.hasClass(e, 'error') && (o.value = e.value), MG_Utils.addClass(e, 'error'), e.value = n._errors[t];
            }
            function u(e) {
                var t = document.querySelector('.referLoveModal .requestErrors');
                t && (e ? (t.innerHTML = e, MG_Utils.addClass(t, 'error')) : (t.innerHTML = '', MG_Utils.removeClass(t, 'error')));
            }
            function a() {
                var e = document.getElementById('js_recommendationList');
                e && e.addEventListener('change', function (e) {
                    var t = this.checked ? 1 : 0;
                    MG_Utils.ajaxCall({
                        url: n._recommendationListUrl,
                        data: { share_recommendation: t },
                        type: 'POST',
                        success: function (e) {
                        }
                    });
                });
            }
            n.type = null, n.modal = null, n.settings = {}, n.action = {
                INVITELOVER: 'inviteLover',
                ADDLOVER: 'addLover',
                CHANGELOVER: 'changeLover',
                REMOVELOVER: 'removeLover',
                CHANGETYPE: 'changeType',
                POPUPINFO: 'popupInfo',
                CHANGEMEMBERSHIP: 'changeMembership'
            }, n.init = function (e, t) {
                n._modalWrapper = e, n._recommendationListUrl = t.recommendationListUrl, n.secondaryLoverEmail = t.secondaryLoverEmail, n._errors = {
                    emailInvlidError: t.emailInvlidError,
                    emailRepeatError: t.emailRepeatError
                }, c = {
                    inviteLover: {
                        apiUrl: t.addLoveRequestUrl,
                        title: t.inviteLoverTitle,
                        button: t.inviteLoverSubmit,
                        content: t.inviteLoverContent,
                        input: !0,
                        textarea: !0
                    },
                    inviteLoverSuccess: {
                        title: t.inviteSuccessTitle,
                        content: t.inviteSuccessContent
                    },
                    addLover: {
                        apiUrl: t.addLoveRequestUrl,
                        title: t.addLoverTitle,
                        button: t.addLoverSubmit,
                        input: !0,
                        textarea: !0
                    },
                    addLoverSuccess: {
                        title: t.inviteSuccessTitle,
                        content: t.inviteSuccessContent
                    },
                    changeLover: {
                        apiUrl: t.changeLoveRequestUrl,
                        title: t.changeLoverTitle,
                        button: t.changeLoverSubmit,
                        input: !0,
                        textarea: !0
                    },
                    changeLoverSuccess: {
                        title: t.inviteSuccessTitle,
                        content: t.inviteSuccessContent
                    },
                    removeLover: {
                        apiUrl: t.removeLoveRequestUrl,
                        title: t.removeLoverTitle,
                        button: t.removeLoverSubmit,
                        process: o,
                        input: !1
                    },
                    removeLoverSuccess: {
                        title: t.removeSuccessTitle,
                        content: t.removeSuccessContent,
                        button: t.addLoverSubmit
                    },
                    changeType: {
                        apiUrl: t.changeTypeRequestUrl,
                        title: t.changeTypeTitle,
                        button: t.changeTypeSubmit,
                        content: t.changeTypeContent,
                        input: !1,
                        disclaimer: t.changeTypeDisclaimer
                    },
                    popupInfo: { button: 'Close' },
                    changeMembership: {
                        title: t.changeTypeTitleSucess,
                        content: t.changeMembershipContent
                    }
                }, n._registerActions();
            }, n.setupModal = function (e) {
                return n.type = e, n.modal && n.modal.closeModal && n.modal.closeModal(), n.settings = c[e], n.modal = new MG_Modal({
                    content: n._modalWrapper,
                    className: 'referLoveModal',
                    closeDocument: !1
                }), n;
            }, n.show = function (e) {
                n.modal.openModal(e || o), n._layoutModal();
            }, n._layoutModal = function (e, t, o) {
                var l, i, a, s = n.modal.modal;
                e && 'Success' === e ? (n.type += e, n.settings = c[n.type], a = s.querySelector('.successContentWrapper'), MG_Utils.removeClass(a, 'display-none'), MG_Utils.addClass(s.querySelector('.requestContentWrapper'), 'display-none')) : (a = s.querySelector('.requestContentWrapper'), MG_Utils.removeClass(a, 'display-none'), MG_Utils.addClass(s.querySelector('.successContentWrapper'), 'display-none'), MG_Utils.addClass(s, n.type)), a.querySelector('.modalTitle').innerHTML = n.settings.title, void 0 !== n.settings.content && (l = a.querySelector('.modalContent'), MG_Utils.removeClass(l, 'hideElement'), l.innerHTML = n.settings.content), void 0 !== n.settings.button && (l = a.querySelector('button'), MG_Utils.removeClass(l, 'hideElement'), l.innerHTML = n.settings.button), void 0 !== n.settings.input && n.settings.input && (i = a.querySelectorAll('#loverSubmitForm input'), MG_Utils.removeClassMultiple(i, 'hideElement')), void 0 === n.settings.textarea || !n.settings.textarea || (i = a.querySelector('#loverSubmitForm textarea')) && MG_Utils.removeClass(i, 'hideElement'), t && o && t(s, o), n.type !== n.action.CHANGETYPE || void 0 === n.settings.disclaimer || (a = a.querySelector('.disclaimer')) && (a.innerHTML = n.settings.disclaimer);
            }, n._registerActions = function () {
                var e = document.getElementById('js_addLoverBtn'), t = document.getElementById('js_changeLoverBtn'), o = document.getElementById('js_removeLoverBtn'), l = document.getElementById('js_changeTypeBtn');
                e && e.addEventListener('click', function (e) {
                    n.setupModal(n.action.ADDLOVER).show();
                }), t && t.addEventListener('click', function (e) {
                    n.setupModal(n.action.CHANGELOVER).show();
                }), o && o.addEventListener('click', function (e) {
                    n.setupModal(n.action.REMOVELOVER).show();
                }), l && l.addEventListener('click', function (e) {
                    n.setupModal(n.action.CHANGETYPE).show();
                }), a();
            }, n.secondaryLoverSetup = function (e) {
                n._recommendationListUrl = e.recommendationListUrl, a();
            };
        };
        LoverManageModal = $___var_9329b53824e9d3fd;
        try {
            var loverManageModal, loverManage, loverModal = document.querySelector('#postSignupModals #referLoveModal'), postSignupPageParams = 'undefined' != typeof PRIMARY_LOVER_DATA ? PRIMARY_LOVER_DATA : null;
            loverModal && postSignupPageParams ? ((loverManageModal = new LoverManageModal()).init(loverModal, postSignupPageParams), postSignupPageParams.changeMembership ? loverManageModal.setupModal(loverManageModal.action.CHANGEMEMBERSHIP).show() : '' === postSignupPageParams.secondaryLoverEmail && postSignupPageParams.showLoverEmailRequestModal && loverManageModal.setupModal(loverManageModal.action.INVITELOVER).show()) : 'undefined' != typeof SECONDARY_LOVER_DATA && (loverManage = new LoverManageModal()).secondaryLoverSetup(SECONDARY_LOVER_DATA);
        } catch (e) {
            console.log('ERROR === MODALS NOT LOADED CORRECTLY ==='), console.log(e);
        }
    }())
}