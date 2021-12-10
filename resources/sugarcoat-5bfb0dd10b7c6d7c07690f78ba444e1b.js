{
    const $___mock_426638777e368d36 = {};
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
    })($___mock_426638777e368d36);
    (function () {
        Bootstrapper.bindDOMParsed(function () {
            Bootstrapper.ensEvent.add(['Global: Non Shopping Flow'], function () {
                var ensEventContext = this;
                if (ensEventContext == window)
                    ensEventContext = undefined;
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                Bootstrapper.data.resolve([
                    '13919',
                    '59946',
                    '59947',
                    '16336',
                    '13642',
                    '55415'
                ], function (manage_13919, manage_59946, manage_59947, manage_16336, manage_13642, manage_55415) {
                    var ensVar0 = function () {
                        return manage_13919;
                    };
                    var ensVar1 = function () {
                        return manage_59946;
                    };
                    var ensVar2 = function () {
                        return manage_59947;
                    };
                    var ensVar3 = function () {
                        return manage_16336;
                    };
                    var ensVar4 = function () {
                        return manage_13642;
                    };
                    var ensVar5 = function () {
                        return manage_55415;
                    };
                    var onload = function () {
                        const $___old_c5b4ca906d30de53 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_c5b4ca906d30de53)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_426638777e368d36.localStorage));
                            return function () {
                                window.criteo_q = window.criteo_q || [];
                                var account_id = ''.split(','), local_accounts_array = [], emailType = 'hashed', customDataObj = {}, setDataObj = undefined, custObj = undefined, emailObj = undefined, loginObj = undefined, accountType = 'name';
                                customDataObj['target'] = ensVar3.call(this);
                                customDataObj['pagetype'] = ensVar4.call(this);
                                customDataObj['extra_criteo'] = ensVar5.call(this);
                                var accountObj = { 'event': 'setAccount' };
                                if (accountType == 'name') {
                                    accountObj.account = {};
                                    accountObj.account.an = ensVar0.call(this);
                                    accountObj.account.cn = ensVar1.call(this);
                                    accountObj.account.ln = ensVar2.call(this);
                                } else {
                                    for (var i = 0; i < account_id.length; i++)
                                        local_accounts_array[i] = parseInt(account_id[i], 10);
                                    accountObj.account = local_accounts_array;
                                }
                                var siteTypeObj = {
                                    'event': 'setSiteType',
                                    'type': 'd' ? 'd' : 'd'
                                };
                                if ('')
                                    custObj = {
                                        'event': 'setCustomerId',
                                        'id': ''
                                    };
                                if ('')
                                    emailObj = {
                                        'event': emailType === 'plaintext' ? 'setEmail' : 'setHashedEmail',
                                        'email': ''.split(',')
                                    };
                                if ('')
                                    loginObj = {
                                        'event': emailType === 'plaintext' ? 'setLogin' : 'setHashedLogin',
                                        'login': ''.split(',')
                                    };
                                var viewObj = { 'event': 'viewHome' };
                                if ('')
                                    viewObj.user_segment = '';
                                if ('')
                                    viewObj.nbra = '';
                                if ('')
                                    viewObj.nbrc = '';
                                if ('')
                                    viewObj.nbrb = '';
                                for (var d in customDataObj)
                                    if (customDataObj.hasOwnProperty(d)) {
                                        setDataObj = customDataObj;
                                        setDataObj.event = 'setData';
                                        break;
                                    }
                                criteo_q.push(accountObj, setDataObj, siteTypeObj, custObj, emailObj, loginObj, viewObj);
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_c5b4ca906d30de53)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_c5b4ca906d30de53));
                        }
                    };
                    Bootstrapper.loadScriptCallback('//static.criteo.net/js/ld/ld.js', onload);
                });
            });
        }, 2915406, 603887);
    }())
}