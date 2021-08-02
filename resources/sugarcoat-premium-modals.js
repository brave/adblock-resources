var premiumModal, welcomeCookie, premiumModalContent, gatewayModal, gatewayModalContent, triggerUpselllGatewayModal, triggerGatewayModal, updateUSThanksgivingPromotion2017, gatewayPremiumModals, welcomeModal, welcomeModalContent, welcomeModel, expiredModal, expiredModalContent, setModalCookieHidden, triggerExpiredModal, trialEndedModal, trialEndedModalContent, giftingEndedModal, giftingEndedModalContent, trialModal, trialModalContent, reactivationModal, reactivationModalContent, setModalSessionHidden, triggerTrialModal, yearlyModal, yearlyModalContent, triggerYearlyModal, freeCovidModalContent, freeCovidModal;
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
        triggerUpselllGatewayModal = $___var_6a5c5e2d92740d28;
        ({}.constructor.defineProperty(triggerUpselllGatewayModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'triggerUpselllGatewayModal',
            writable: false
        }));
        triggerGatewayModal = $___var_30a2f098ef4bc0a5;
        ({}.constructor.defineProperty(triggerGatewayModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'triggerGatewayModal',
            writable: false
        }));
        updateUSThanksgivingPromotion2017 = $___var_787df02c059792f2;
        ({}.constructor.defineProperty(updateUSThanksgivingPromotion2017, 'name', {
            configurable: true,
            enumerable: false,
            value: 'updateUSThanksgivingPromotion2017',
            writable: false
        }));
        gatewayPremiumModals = $___var_10453cd978b84775;
        ({}.constructor.defineProperty(gatewayPremiumModals, 'name', {
            configurable: true,
            enumerable: false,
            value: 'gatewayPremiumModals',
            writable: false
        }));
        welcomeModel = $___var_75996a4ab64eac83;
        ({}.constructor.defineProperty(welcomeModel, 'name', {
            configurable: true,
            enumerable: false,
            value: 'welcomeModel',
            writable: false
        }));
        setModalCookieHidden = $___var_49b72bdd3e0dde7c;
        ({}.constructor.defineProperty(setModalCookieHidden, 'name', {
            configurable: true,
            enumerable: false,
            value: 'setModalCookieHidden',
            writable: false
        }));
        triggerExpiredModal = $___var_20c23ba0ad5af170;
        ({}.constructor.defineProperty(triggerExpiredModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'triggerExpiredModal',
            writable: false
        }));
        setModalSessionHidden = $___var_b622bc34f8ff3135;
        ({}.constructor.defineProperty(setModalSessionHidden, 'name', {
            configurable: true,
            enumerable: false,
            value: 'setModalSessionHidden',
            writable: false
        }));
        triggerTrialModal = $___var_de5cd651f16dd478;
        ({}.constructor.defineProperty(triggerTrialModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'triggerTrialModal',
            writable: false
        }));
        triggerYearlyModal = $___var_a0ffa3673b287525;
        ({}.constructor.defineProperty(triggerYearlyModal, 'name', {
            configurable: true,
            enumerable: false,
            value: 'triggerYearlyModal',
            writable: false
        }));
        var $___var_d4101267eaff4f4f, $___var_bd88c73f29d745a8 = 'undefined' != typeof welcomeModalCookie ? welcomeModalCookie : '', $___var_83a90d915a99538e = document.getElementById('premium-modal');
        premiumModal = $___var_d4101267eaff4f4f;
        welcomeCookie = $___var_bd88c73f29d745a8;
        premiumModalContent = $___var_83a90d915a99538e;
        premiumModalContent && (premiumModal = new MG_Modal({
            content: premiumModalContent,
            className: 'premiumContainer',
            closeButton: !1
        }));
        var $___var_d4eba39ffd8eaebe, $___var_0268012c6148b4a3 = document.getElementById('gateway-modal');
        gatewayModal = $___var_d4eba39ffd8eaebe;
        gatewayModalContent = $___var_0268012c6148b4a3;
        function $___var_6a5c5e2d92740d28(e, t) {
            var l = 'Player2160pUpsell' === e;
            MG_Utils.ajaxCall({
                type: 'GET',
                url: '/premium/ajax_build_upgrade_url',
                data: {
                    entry_code: e,
                    segment: t
                },
                dataType: 'json',
                success: function (e) {
                    if ('PASS' == e.success) {
                        var t = document.querySelector('[id*="gateway-text"]'), o = t ? t.querySelectorAll('span') : null;
                        if (o)
                            for (var a = 0; a < o.length; a++)
                                o[a].style.display = 'none';
                        'undefined' != typeof skipGatewayModal || 'no_gateway' == e.gateway_modal ? window.location.href = e.url : 'undefined' == typeof skipGatewayModal && 'no_gateway' == e.gateway_modal || (l && (e.url = 0 <= e.url.indexOf('?') ? e.url + '&type=Player2160pUpsell' : e.url + '?type=Player2160pUpsell'), document.querySelector('[id*="gateway-text"]').querySelector('span.' + e.gateway_modal).style.display = 'block', document.querySelector('[id*="gateway-button"]').setAttribute('href', e.url), void 0 !== gatewayModal && gatewayModal.openModal(), document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage));
                    }
                }
            });
        }
        function $___var_30a2f098ef4bc0a5(e, t, o) {
            MG_Utils.preventDefault(e);
            e = {
                entry_code: MG_Utils.getData(e.currentTarget, 'entrycode'),
                segment: MG_Utils.getData(e.currentTarget, 'segment')
            };
            void 0 !== o && (e.viewkey = o), MG_Utils.ajaxCall({
                type: 'GET',
                url: '/premium/ajax_build_upgrade_url',
                data: e,
                dataType: 'json',
                success: function (e) {
                    'PASS' == e.success && (void 0 !== t || 'no_gateway' == e.gateway_modal || 'gateway_noAds' == e.gateway_modal || 'undefined' != typeof WIDGET_MODAL_PREMIUM && WIDGET_MODAL_PREMIUM.showExpiredGift ? window.location.href = e.url : void 0 !== trialEndedModal ? trialEndedModal.closeModal(function () {
                        gatewayPremiumModals(e);
                    }) : gatewayPremiumModals(e));
                }
            });
        }
        function $___var_787df02c059792f2(e) {
            0 == e ? (void 0 === WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.addedValueText && ((e = document.createElement('p')).className = 'addedValue-text', e.innerHTML = document.querySelector('.hasPromotion2017 .addedValue-text').innerHTML, WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.addedValueText = e), void 0 === WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.ctaButtonText && (WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.ctaButtonText = document.querySelector('[id*="gateway-button"]').innerText), null != document.querySelector('.hasPromotion2017 .addedValue-text') && document.querySelector('.hasPromotion2017 .addedValue-text').remove(), document.querySelector('[id*="gateway-button"]').innerText = WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.newButtonText) : (document.querySelector('[id*="gateway-modal"] .hasPromotion2017').insertBefore(WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.addedValueText, document.querySelector('[id*="gateway-button"]')), document.querySelector('[id*="gateway-button"]').innerText = WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.ctaButtonText);
        }
        function $___var_10453cd978b84775(e) {
            if (-1 != e.gateway_modal.indexOf('gateway')) {
                if ('no_gateway' != e.gateway_modal) {
                    for (var t = document.querySelector('[id*="gateway-text"]').children, o = 0; o < t.length; o++)
                        t[o].style.display = 'none';
                    e.gateway_modal && (document.querySelector('[id*="gateway-text"]').querySelector('span.' + e.gateway_modal).style.display = 'inline', 'undefined' != typeof WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017 && ('gateway_finally' == e.gateway_modal ? (updateUSThanksgivingPromotion2017(!1), WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.updated = !0) : 1 == WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.updated && updateUSThanksgivingPromotion2017(!0))), document.querySelector('[id*="gateway-button"]').setAttribute('href', e.url), void 0 !== gatewayModal && gatewayModal.openModal();
                }
            } else {
                for (var a, l, n = document.querySelector('[id*="premium-text"]').querySelectorAll('section'), o = 0; o < n.length; o++)
                    n[o].style.display = 'none';
                e.gateway_modal && (a = e.gateway_modal.substring(e.gateway_modal.length - 2), (l = document.querySelector('[id*="premium-text"]').querySelector('section.' + e.gateway_modal.replace(a, 'premium'))).style.display = 'block', l.querySelector('[id*="premium-button"]').setAttribute('href', e.url), document.querySelector('[class*="premiumWrapper"]').querySelector('[class*="cancelButton"]').setAttribute('data-modal', e.gateway_modal.replace(e.gateway_modal.substring(6), 'premium')), document.querySelector('[id*="premium-text"]').className = e.gateway_modal.replace(a, 'Content'), 'premiumWrapper' != document.querySelector('[class*="premiumWrapper"]').getAttribute('class').split(' ').pop() && MG_Utils.removeClass(document.querySelector('[class*="premiumWrapper"]'), document.querySelector('[class*="premiumWrapper"]').getAttribute('class').split(' ').pop()), 'A1' == a ? MG_Utils.addClass(document.querySelector('[class*="premiumWrapper"]'), 'premium_a1') : MG_Utils.addClass(document.querySelector('[class*="premiumWrapper"]'), 'premium_a2')), void 0 !== premiumModal && premiumModal.openModal();
            }
            document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage);
        }
        gatewayModalContent && (gatewayModal = new MG_Modal({
            content: gatewayModalContent,
            className: 'gatewayContainer'
        }));
        var $___var_dd85897627aeaa34, $___var_0a6f7e273e5508c6 = document.getElementById('premium-welcome-modal');
        welcomeModal = $___var_dd85897627aeaa34;
        welcomeModalContent = $___var_0a6f7e273e5508c6;
        function $___var_75996a4ab64eac83(e) {
            document.getElementById('dontAsk').checked && MG_Utils.ajaxCall({
                type: 'POST',
                url: MG_Utils.getData(document.querySelector('[id*="dontAsk"]'), 'cookie')
            }), e && MG_Utils.ajaxCall({
                type: 'POST',
                url: MG_Utils.getData(document.getElementById('go-to-pornhub'), 'logout')
            }).always(function () {
                MG_Utils.ajaxCall({
                    url: premiumRedirectCookieURL + '&do=delete',
                    cache: !1,
                    xhrFields: { withCredentials: !0 },
                    crossDomain: !0
                }).done(function () {
                    window.location.href = MG_Utils.getData(document.querySelector('[id*="go-to-pornhub"]'), 'pornhub-redirect');
                });
            }), welcomeModal.closeModal(function () {
                MG_Utils.ajaxCall({
                    type: 'GET',
                    url: '/front/cookie_kill_ajax',
                    data: { cookie_name: 'showPremiumWelcomeFromPornhub' }
                });
            });
        }
        welcomeModalContent && (welcomeModal = new MG_Modal({
            content: welcomeModalContent,
            className: 'welcomeModalContainer',
            closeDocument: !1,
            closeButton: !1
        }));
        var $___var_bdaadbeb8fd91437, $___var_72c1a749967c3115 = document.getElementById('premium-expired-modal');
        expiredModal = $___var_bdaadbeb8fd91437;
        expiredModalContent = $___var_72c1a749967c3115;
        function $___var_49b72bdd3e0dde7c() {
            setCookie('expiredModalShown', 1);
        }
        function $___var_20c23ba0ad5af170() {
            null == getCookie('expiredModalShown') && (void 0 !== expiredModal && expiredModal.openModal(setModalCookieHidden), document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage));
        }
        expiredModalContent && (expiredModal = new MG_Modal({
            content: expiredModalContent,
            className: 'expiredModalContainer'
        }));
        var $___var_14d080b6a7a2d79e, $___var_e69c991e85e033cc = document.getElementById('trial-ended-modal');
        trialEndedModal = $___var_14d080b6a7a2d79e;
        trialEndedModalContent = $___var_e69c991e85e033cc;
        trialEndedModalContent && (trialEndedModal = new MG_Modal({
            content: trialEndedModalContent,
            className: 'trialEndedModalContainer'
        }));
        var $___var_137777b3c9bc1a38, $___var_75e1cf9f36ae0f41 = document.getElementById('giftingExpired');
        giftingEndedModal = $___var_137777b3c9bc1a38;
        giftingEndedModalContent = $___var_75e1cf9f36ae0f41;
        giftingEndedModalContent && (giftingEndedModal = new MG_Modal({
            content: giftingEndedModalContent,
            className: 'giftingEndedModalContainer'
        }));
        var $___var_ac38148eef84220e, $___var_2290578e694ebb35 = document.getElementById('trial-step1-modal');
        trialModal = $___var_ac38148eef84220e;
        trialModalContent = $___var_2290578e694ebb35;
        trialModalContent && (trialModal = new MG_Modal({
            content: trialModalContent,
            className: 'trialModalContainer'
        }));
        var $___var_5da67652cd7681c9, $___var_3a6bfd043ec47057 = document.getElementById('reactivationModal');
        reactivationModal = $___var_5da67652cd7681c9;
        reactivationModalContent = $___var_3a6bfd043ec47057;
        function $___var_b622bc34f8ff3135(e) {
            setCookie(e + '-shown', 1);
        }
        function $___var_de5cd651f16dd478(e) {
            if (null != getCookie('showModalPremiumTry') && 'trial-step1-modal' == e)
                setCookieAdvanced('premiumTrialAccepted', '1', 1), void 0 !== trialModal && trialModal.openModal(setModalSessionHidden(e)), deleteCookieAdvanced('showModalPremiumTry');
            else if (null == getCookie(e + '-shown'))
                switch (e) {
                case 'trial-step1-modal':
                    void 0 !== trialModal && trialModal.openModal(setModalSessionHidden(e));
                    break;
                case 'trial-ended-modal':
                    void 0 !== trialEndedModal && trialEndedModal.openModal(setModalSessionHidden(e));
                    break;
                case 'giftingExpired':
                    void 0 !== giftingEndedModal && giftingEndedModal.openModal(setModalSessionHidden(e));
                }
            document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage);
        }
        reactivationModalContent && (reactivationModal = new MG_Modal({
            content: reactivationModalContent,
            className: 'reactivationModalContainer'
        }));
        var $___var_9935fae813aad5c4, $___var_27bbb13408a33714 = document.getElementById('yearly-modal');
        yearlyModal = $___var_9935fae813aad5c4;
        yearlyModalContent = $___var_27bbb13408a33714;
        function $___var_a0ffa3673b287525() {
            void 0 !== yearlyModal && yearlyModal.openModal(function () {
                document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage);
            });
        }
        yearlyModalContent && (yearlyModal = new MG_Modal({
            content: yearlyModalContent,
            className: 'yearlyModalContainer'
        }));
        var $___var_e1fbcceb52c7f37e = document.getElementById('free-covid-modal'), $___var_ca2fbe90932cc400 = null;
        freeCovidModalContent = $___var_e1fbcceb52c7f37e;
        freeCovidModal = $___var_ca2fbe90932cc400;
        freeCovidModalContent && (freeCovidModal = new MG_Modal({
            content: freeCovidModalContent,
            className: 'freeCovidModalContainer',
            closeButton: !1
        })), MG_Utils.domReady(function () {
            const $___old_2dff1d3c951adb03 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
            try {
                if ($___old_2dff1d3c951adb03)
                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_3773b652659315ab.localStorage));
                return function () {
                    var e;
                    if (freeCovidModal ? (MG_Utils.storage.hasLocalStorage && (e = localStorage.getItem('covidPageViewCount') ? (e = localStorage.getItem('covidPageViewCount'), parseInt(e) + 1) : 1, localStorage.setItem('covidPageViewCount', e)), e && (1 == e ? freeCovidModal.openModal() : 1 != e && e % 10 == 0 && freeCovidModal.openModal(function () {
                            var e = document.querySelector('#modalWrapMTubes .js-upgradeText'), t = document.querySelector('#modalWrapMTubes #freePromoUpgrade');
                            e && (e.textContent = FREE_COVID_MODAL.upgradeText), t && (t.innerText = FREE_COVID_MODAL.upgradeBtn, t.href = FREE_COVID_MODAL.upGradeLink);
                        })), (e = document.querySelector('#js-CloseCovidModal')) && e.addEventListener('click', function () {
                            freeCovidModal.closeModal();
                        })) : localStorage.getItem('covidPageViewCount') && localStorage.removeItem('covidPageViewCount'), 'undefined' != typeof WIDGET_MODAL_PREMIUM && ('premium-free-trial-ended' === WIDGET_MODAL_PREMIUM.modalReturnName && (WIDGET_MODAL_PREMIUM.showExpiredGift ? triggerTrialModal('giftingExpired') : triggerTrialModal('trial-ended-modal')), 'premium-free-trial-step-one' === WIDGET_MODAL_PREMIUM.modalReturnName && triggerTrialModal('trial-step1-modal')), document.addEventListener('click', function (e) {
                            e = MG_Utils.getEventTarget(e);
                            e && MG_Utils.hasClass(e, 'js-notificationDone') && MG_Utils.ajaxCall({
                                url: isNotifiedObj.ajaxUrl,
                                data: {
                                    token: isNotifiedObj.token,
                                    notificationId: isNotifiedObj.notificationId
                                },
                                type: 'post',
                                success: function (e) {
                                    setCookie('notified_sponsor_' + isNotifiedObj.liuId, 1, 365);
                                }
                            });
                        }), document.addEventListener('click', function (e) {
                            if ('js-startTrial' == MG_Utils.getEventTarget(e).id) {
                                MG_Utils.preventDefault(e);
                                for (var t = document.querySelectorAll('.offerContent, .offerButtons, .offerLasts'), o = 0; o < t.length; o++)
                                    t[o].style.display = 'none';
                                for (var a = document.querySelectorAll('.trialStartedWrapper, .startTrialButton, .premiumPrice'), o = 0; o < a.length; o++)
                                    a[o].style.display = 'block';
                            }
                        }), null != document.getElementById('js-trialExpireReminder') && (null == sessionStorage.getItem('trialBottomNotificationHidden') && MG_Utils.removeClass(document.getElementById('js-trialExpireReminder'), 'hidden'), (l = document.getElementById('js-closeTrialNotification')) && l.addEventListener('click', function (e) {
                            MG_Utils.preventDefault(e), sessionStorage.setItem('trialBottomNotificationHidden', '1'), MG_Utils.addClass(document.getElementById('js-trialExpireReminder'), 'hidden');
                        })), welcomeCookie && (void 0 !== welcomeModal && welcomeModal.openModal(), document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage)), document.addEventListener('click', function (e) {
                            var t = MG_Utils.getEventTarget(e);
                            if (MG_Utils.hasClass(t, 'cancelButton')) {
                                MG_Utils.preventDefault(e);
                                e = e.target;
                                switch (MG_Utils.getData(e, 'modal')) {
                                case 'trial-ended':
                                    void 0 !== trialEndedModal && trialEndedModal.closeModal();
                                    break;
                                case 'trial-step1':
                                    void 0 !== trialModal && trialModal.closeModal();
                                    break;
                                case 'gift-ended':
                                    void 0 !== giftingEndedModal && giftingEndedModal.closeModal();
                                    break;
                                case 'createPlaylist':
                                    'undefined' != typeof createPlaylistModal && createPlaylistModal.closeModal();
                                    break;
                                case 'friendRequestModal':
                                    'undefined' != typeof friendRequestModal && friendRequestModal.closeModal();
                                    break;
                                case 'info':
                                    'undefined' != typeof infoModalHolder && infoModalHolder.closeModal();
                                    break;
                                case 'reactivation':
                                    void 0 !== reactivationModal && reactivationModal.closeModal();
                                    break;
                                case 'Modal_premium':
                                    void 0 !== premiumModal && premiumModal.closeModal();
                                }
                            }
                        }), null != document.getElementById('js-reactivation') && (MG_Utils.removeClass(document.getElementById('js-reactivation'), 'hidden'), document.addEventListener('click', function (e) {
                            'js-closeReactivation' == MG_Utils.getEventTarget(e).id && (MG_Utils.preventDefault(e), MG_Utils.ajaxCall({
                                url: '/user/dismiss_reactivate_subscription',
                                beforeSend: function () {
                                    MG_Utils.addClass(document.getElementById('js-reactivation'), 'hidden');
                                }
                            }));
                        }), document.addEventListener('click', function (e) {
                            var a, t = MG_Utils.getEventTarget(e);
                            ('js-reactivate' == t.id || t.parentElement && 'js-reactivate' == t.parentElement.id) && (MG_Utils.preventDefault(e), a = document.getElementById('js-reactivate'), MG_Utils.ajaxCall({
                                url: '/user/reactivate_subscription',
                                beforeSend: function () {
                                    a.setAttribute('disabled', !0);
                                    for (var e = MG_Utils.children(a), t = 0; t < e.length; t++)
                                        MG_Utils.addClass(e[t], 'visuallyHidden');
                                    var o = document.createElement('span');
                                    o.className = 'spinner', a.appendChild(o);
                                },
                                success: function (e) {
                                    if (e.success)
                                        MG_Utils.addClass(document.getElementById('js-reactivation'), 'hidden'), void 0 !== reactivationModal && reactivationModal.openModal(), document.querySelector('.closeMTubes.buttonMTubes') && (document.querySelector('.closeMTubes.buttonMTubes').textContent = MODAL_PREMIUM_MESSAGE.backMessage);
                                    else {
                                        a.removeAttribute('disabled'), a.removeChild(a.querySelector('.spinner'));
                                        for (var t = MG_Utils.children(a), o = 0; o < t.length; o++)
                                            MG_Utils.removeClass(t[o], 'visuallyHidden');
                                    }
                                }
                            }));
                        })), triggerYearlyModal(), null != document.querySelector('.yearlyModalContainer')) {
                        MG_Utils.addClass(document.querySelector('.yearlyModalContainer').querySelector('button'), 'yearlyClose');
                        var t = MG_Utils.children(document.querySelector('.yearlyModalContainer'));
                        for (i = 0; i < t.length; i++)
                            t[i] && t[i].addEventListener('click', function (e) {
                                e.stopPropagation();
                            });
                        var o = document.querySelectorAll('.yearlyClose, #js-dismissSubscription');
                        for (i = 0; i < o.length; i++)
                            o[i] && o[i].addEventListener('click', function (e) {
                                MG_Utils.preventDefault(e), MG_Utils.ajaxCall({
                                    url: '/user/dismiss_switch_yearly_subscription',
                                    success: function () {
                                        yearlyModal.closeModal();
                                    }
                                });
                            });
                    }
                    var a, l = document.querySelector('.changeTypeBtnWrapper #js_changeTypeBtn'), n = document.getElementById('changTypeModal');
                    n && l && (a = new MG_Modal({
                        content: n,
                        className: 'change_type_modal',
                        closeButton: !0
                    }), l.addEventListener('click', function (e) {
                        e.preventDefault(), a.openModal();
                        e = document.getElementById('changeTypeConfirmBtn');
                        e && e.addEventListener('click', function (e) {
                            MG_Utils.ajaxCall({
                                url: '/lovers/ajax_upgrade',
                                data: {},
                                type: 'POST',
                                success: function (e) {
                                    var t;
                                    e && 'success' == e.success ? e.payload && e.payload.upgrade_url && (window.location.href = e.payload.upgrade_url) : e && e.messages && ((t = n.querySelector('.requestErrors')) && (t.innerHTML = e.messages));
                                }
                            });
                        });
                    }));
                }.apply(this, arguments);
            } finally {
                if ($___old_2dff1d3c951adb03)
                    ({}.constructor.defineProperty(window, 'localStorage', $___old_2dff1d3c951adb03));
            }
        });
    }())
}