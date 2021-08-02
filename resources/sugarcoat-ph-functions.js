var _typeof, _slicedToArray, _nonIterableRest, _unsupportedIterableToArray, _arrayLikeToArray, _iterableToArrayLimit, _arrayWithHoles, Etahub, setCookieAdvanced, closestElement, getCookieAdvanced, deleteCookieAdvanced, checkForGridSupport, getDomain, removeSubdomain, time, safeJSON, addInternalLinks, addAnyLinks, ajaxPost, validateLegalAge, isIpad, substr_count, getUrlAndRefresh, debounce, validateBannedWords, escapeHtml, unEscapeHtml, getURLParameter, storageAvailable, regexSymbolWithCombiningMarks, regexLineBreakCombiningMarks, stripCombiningMarks, PH_Storage, localStorageFull, CollectRecommended, iePolyfill, isObject, isArray, CookiesManager, LocalStorageManager, SessionStorageManager, serializeFormData;
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
    const $___old_21f70ecfe29c509f = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
    try {
        if ($___old_21f70ecfe29c509f)
            ({}.constructor.defineProperty(window, 'localStorage', $___mock_3773b652659315ab.localStorage));
        (function () {
            _typeof = $___var_444e2e3abf9167bc;
            ({}.constructor.defineProperty(_typeof, 'name', {
                configurable: true,
                enumerable: false,
                value: '_typeof',
                writable: false
            }));
            _slicedToArray = $___var_ee7964e2bb10037e;
            ({}.constructor.defineProperty(_slicedToArray, 'name', {
                configurable: true,
                enumerable: false,
                value: '_slicedToArray',
                writable: false
            }));
            _nonIterableRest = $___var_3a848c80741634f8;
            ({}.constructor.defineProperty(_nonIterableRest, 'name', {
                configurable: true,
                enumerable: false,
                value: '_nonIterableRest',
                writable: false
            }));
            _unsupportedIterableToArray = $___var_2fac151c59a1b24f;
            ({}.constructor.defineProperty(_unsupportedIterableToArray, 'name', {
                configurable: true,
                enumerable: false,
                value: '_unsupportedIterableToArray',
                writable: false
            }));
            _arrayLikeToArray = $___var_0f4b0c2618ac3a93;
            ({}.constructor.defineProperty(_arrayLikeToArray, 'name', {
                configurable: true,
                enumerable: false,
                value: '_arrayLikeToArray',
                writable: false
            }));
            _iterableToArrayLimit = $___var_d3a0ecca71af8292;
            ({}.constructor.defineProperty(_iterableToArrayLimit, 'name', {
                configurable: true,
                enumerable: false,
                value: '_iterableToArrayLimit',
                writable: false
            }));
            _arrayWithHoles = $___var_2ffc732efe3eb777;
            ({}.constructor.defineProperty(_arrayWithHoles, 'name', {
                configurable: true,
                enumerable: false,
                value: '_arrayWithHoles',
                writable: false
            }));
            setCookieAdvanced = $___var_5df619d5b2eb9eaa;
            ({}.constructor.defineProperty(setCookieAdvanced, 'name', {
                configurable: true,
                enumerable: false,
                value: 'setCookieAdvanced',
                writable: false
            }));
            closestElement = $___var_307da0d7e821f2d0;
            ({}.constructor.defineProperty(closestElement, 'name', {
                configurable: true,
                enumerable: false,
                value: 'closestElement',
                writable: false
            }));
            getCookieAdvanced = $___var_754c4f268b61a189;
            ({}.constructor.defineProperty(getCookieAdvanced, 'name', {
                configurable: true,
                enumerable: false,
                value: 'getCookieAdvanced',
                writable: false
            }));
            deleteCookieAdvanced = $___var_b22dac02f491c7c1;
            ({}.constructor.defineProperty(deleteCookieAdvanced, 'name', {
                configurable: true,
                enumerable: false,
                value: 'deleteCookieAdvanced',
                writable: false
            }));
            checkForGridSupport = $___var_bdf5e08b6cb57245;
            ({}.constructor.defineProperty(checkForGridSupport, 'name', {
                configurable: true,
                enumerable: false,
                value: 'checkForGridSupport',
                writable: false
            }));
            getDomain = $___var_641b5083b2a22250;
            ({}.constructor.defineProperty(getDomain, 'name', {
                configurable: true,
                enumerable: false,
                value: 'getDomain',
                writable: false
            }));
            removeSubdomain = $___var_93311eb24261942b;
            ({}.constructor.defineProperty(removeSubdomain, 'name', {
                configurable: true,
                enumerable: false,
                value: 'removeSubdomain',
                writable: false
            }));
            time = $___var_4afc790ae910e04d;
            ({}.constructor.defineProperty(time, 'name', {
                configurable: true,
                enumerable: false,
                value: 'time',
                writable: false
            }));
            safeJSON = $___var_0853bd3f9ebaec46;
            ({}.constructor.defineProperty(safeJSON, 'name', {
                configurable: true,
                enumerable: false,
                value: 'safeJSON',
                writable: false
            }));
            addInternalLinks = $___var_1c1991ef0a36ef91;
            ({}.constructor.defineProperty(addInternalLinks, 'name', {
                configurable: true,
                enumerable: false,
                value: 'addInternalLinks',
                writable: false
            }));
            addAnyLinks = $___var_ac454ce46c413197;
            ({}.constructor.defineProperty(addAnyLinks, 'name', {
                configurable: true,
                enumerable: false,
                value: 'addAnyLinks',
                writable: false
            }));
            ajaxPost = $___var_0530aa35a4a3b80d;
            ({}.constructor.defineProperty(ajaxPost, 'name', {
                configurable: true,
                enumerable: false,
                value: 'ajaxPost',
                writable: false
            }));
            validateLegalAge = $___var_2b663b677fa2888e;
            ({}.constructor.defineProperty(validateLegalAge, 'name', {
                configurable: true,
                enumerable: false,
                value: 'validateLegalAge',
                writable: false
            }));
            isIpad = $___var_d9b5314b3e32a157;
            ({}.constructor.defineProperty(isIpad, 'name', {
                configurable: true,
                enumerable: false,
                value: 'isIpad',
                writable: false
            }));
            substr_count = $___var_ad82960be6fc7f4b;
            ({}.constructor.defineProperty(substr_count, 'name', {
                configurable: true,
                enumerable: false,
                value: 'substr_count',
                writable: false
            }));
            getUrlAndRefresh = $___var_983676a6d20d51fe;
            ({}.constructor.defineProperty(getUrlAndRefresh, 'name', {
                configurable: true,
                enumerable: false,
                value: 'getUrlAndRefresh',
                writable: false
            }));
            debounce = $___var_5c61ae93bbafda52;
            ({}.constructor.defineProperty(debounce, 'name', {
                configurable: true,
                enumerable: false,
                value: 'debounce',
                writable: false
            }));
            validateBannedWords = $___var_38834e089d2fc76a;
            ({}.constructor.defineProperty(validateBannedWords, 'name', {
                configurable: true,
                enumerable: false,
                value: 'validateBannedWords',
                writable: false
            }));
            escapeHtml = $___var_f946c03755c96a01;
            ({}.constructor.defineProperty(escapeHtml, 'name', {
                configurable: true,
                enumerable: false,
                value: 'escapeHtml',
                writable: false
            }));
            unEscapeHtml = $___var_5cdad3cad3d76423;
            ({}.constructor.defineProperty(unEscapeHtml, 'name', {
                configurable: true,
                enumerable: false,
                value: 'unEscapeHtml',
                writable: false
            }));
            getURLParameter = $___var_a7c8bea001cdecb4;
            ({}.constructor.defineProperty(getURLParameter, 'name', {
                configurable: true,
                enumerable: false,
                value: 'getURLParameter',
                writable: false
            }));
            storageAvailable = $___var_eb10dedd250686b7;
            ({}.constructor.defineProperty(storageAvailable, 'name', {
                configurable: true,
                enumerable: false,
                value: 'storageAvailable',
                writable: false
            }));
            stripCombiningMarks = $___var_7e7c5aeb87255e99;
            ({}.constructor.defineProperty(stripCombiningMarks, 'name', {
                configurable: true,
                enumerable: false,
                value: 'stripCombiningMarks',
                writable: false
            }));
            localStorageFull = $___var_cef6f9daa428163d;
            ({}.constructor.defineProperty(localStorageFull, 'name', {
                configurable: true,
                enumerable: false,
                value: 'localStorageFull',
                writable: false
            }));
            iePolyfill = $___var_d08dce576b78421e;
            ({}.constructor.defineProperty(iePolyfill, 'name', {
                configurable: true,
                enumerable: false,
                value: 'iePolyfill',
                writable: false
            }));
            isObject = $___var_a282f5db94d89d66;
            ({}.constructor.defineProperty(isObject, 'name', {
                configurable: true,
                enumerable: false,
                value: 'isObject',
                writable: false
            }));
            isArray = $___var_54c099d4a0ad3c9c;
            ({}.constructor.defineProperty(isArray, 'name', {
                configurable: true,
                enumerable: false,
                value: 'isArray',
                writable: false
            }));
            serializeFormData = $___var_7e9a37b9a66b8f88;
            ({}.constructor.defineProperty(serializeFormData, 'name', {
                configurable: true,
                enumerable: false,
                value: 'serializeFormData',
                writable: false
            }));
            function $___var_444e2e3abf9167bc(e) {
                return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                    return typeof e;
                } : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                })(e);
            }
            function $___var_ee7964e2bb10037e(e, t) {
                return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
            }
            function $___var_3a848c80741634f8() {
                throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
            }
            function $___var_2fac151c59a1b24f(e, t) {
                if (e) {
                    if ('string' == typeof e)
                        return _arrayLikeToArray(e, t);
                    var u = Object.prototype.toString.call(e).slice(8, -1);
                    return 'Map' === (u = 'Object' === u && e.constructor ? e.constructor.name : u) || 'Set' === u ? Array.from(e) : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? _arrayLikeToArray(e, t) : void 0;
                }
            }
            function $___var_0f4b0c2618ac3a93(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var u = 0, r = new Array(t); u < t; u++)
                    r[u] = e[u];
                return r;
            }
            function $___var_d3a0ecca71af8292(e, t) {
                var u = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
                if (null != u) {
                    var r, n, o = [], i = !0, a = !1;
                    try {
                        for (u = u.call(e); !(i = (r = u.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        a = !0, n = e;
                    } finally {
                        try {
                            i || null == u.return || u.return();
                        } finally {
                            if (a)
                                throw n;
                        }
                    }
                    return o;
                }
            }
            function $___var_2ffc732efe3eb777(e) {
                if (Array.isArray(e))
                    return e;
            }
            var $___var_f4aad43eb76bc09a = function () {
                var A = 'etavt', u = {
                        1: 'Homepage',
                        2: 'Discover.Explore',
                        3: 'Discover.Recommended',
                        4: 'Search',
                        5: 'ViewVideo',
                        6: 'ModelContestPage',
                        7: 'VideoBrowse'
                    }, r = {
                        1: 'RecommendedVideo',
                        2: 'RelatedVideo',
                        3: 'SearchResults',
                        4: 'BottomSearchResults',
                        5: 'VideoBrowse'
                    }, n = {
                        1: 'BRS',
                        2: 'DD'
                    };
                return {
                    translate: function (e) {
                        var t = e.split('|')[0], e = (t = e.split('_'))[3] && t[4] ? t[3] + '_' + t[4] : t[3];
                        return {
                            source_page: u[t[0]],
                            section: r[t[1]],
                            recommender: n[t[2]],
                            recommender_info: e
                        };
                    },
                    setCookie: function (e, t) {
                        var u = getCookieAdvanced(A), r = {};
                        if (u)
                            try {
                                r = JSON.parse(u);
                            } catch (e) {
                                console.log(e);
                            }
                        var n, o = r[e] ? r[e].split('|')[1] : -1;
                        for (n in r) {
                            var i = _slicedToArray(r[n].split('|'), 2), a = i[0], i = i[1];
                            9 <= i ? -1 === o && delete r[n] : (-1 === o || i <= o && n !== e) && (r[n] = a + '|' + (parseInt(i) + 1));
                        }
                        r[e] = t + '|0', MG_Utils.setCookie(A, JSON.stringify(r));
                    },
                    getCookie: function (e) {
                        var t = getCookieAdvanced(A);
                        if (t)
                            try {
                                var u = JSON.parse(t);
                                return u[e] ? u[e].split('|')[0] : null;
                            } catch (e) {
                                console.log(e);
                            }
                        return null;
                    }
                };
            }();
            Etahub = $___var_f4aad43eb76bc09a;
            function $___var_5df619d5b2eb9eaa(e, t, u, r, n, o) {
                var i;
                u && ((a = new Date()).setTime(a.getTime()), u = 1000 * u * 60 * 60 * 24, i = new Date(a.getTime() + u));
                var a = getDomain();
                document.cookie = e + '=' + escape(t) + (u ? ';expires=' + i.toGMTString() : '') + (r ? ';path=' + r : ';path=/') + (n ? ';domain=' + n : ';domain=' + a) + (o ? ';secure' : '');
            }
            function $___var_307da0d7e821f2d0(e, t) {
                var u;
                for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), u = t.length; 0 <= --u && t.item(u) !== this;);
                        return -1 < u;
                    }); null !== e;) {
                    if (null !== (u = e.parentElement) && u instanceof Element && u.matches(t))
                        return u;
                    e = u;
                }
                return null;
            }
            function $___var_754c4f268b61a189(e) {
                for (var t = document.cookie.split(';'), u = '', r = '', n = !1, o = 0; o < t.length; o++) {
                    if ((u = t[o].split('='))[0].replace(/^\s+|\s+$/g, '') == e)
                        return n = !0, r = 1 < u.length ? unescape(u[1].replace(/^\s+|\s+$/g, '')) : r;
                    u = null;
                }
                if (!n)
                    return null;
            }
            function $___var_b22dac02f491c7c1(e, t, u) {
                var r;
                getCookieAdvanced(e) && (r = getDomain(), document.cookie = e + '=' + (t ? ';path=' + t : ';path=/') + (u ? ';domain=' + u : ';domain=' + r) + ';expires=Thu, 01-Jan-1970 00:00:01 GMT');
            }
            function $___var_bdf5e08b6cb57245() {
                return 'string' == typeof document.createElement('div').style.grid;
            }
            function $___var_641b5083b2a22250() {
                var e = document.domain.toString().split('.'.toString());
                return e[e.length - 2] + '.' + e[e.length - 1];
            }
            function $___var_93311eb24261942b(e) {
                var t = [], t = e.split('.'), e = e.match(/[a-zA-Z0-9\-]*\./)[0];
                return t[0] = e = 'modelhub.' != e ? '' : e, t.join('.');
            }
            function $___var_4afc790ae910e04d() {
                return Math.floor(new Date().getTime() / 1000);
            }
            function $___var_0853bd3f9ebaec46(e) {
                var t;
                try {
                    e = e.replace(/(\t|\n|\r|\s)/gi, ' '), t = JSON.parse(e);
                } catch (e) {
                    t = null;
                }
                return t;
            }
            function $___var_1c1991ef0a36ef91(e) {
                return e.replace(/((?:,|\s|\n|\r|>|^)(?!\[url))(?:http:\/\/)?((?:[a-z]+[0-9]*\.)(?:pornhub\.com|pornhubpremium\.com)(?:\/.*?)?)((?:\s|\n|\r|<|$|,|(?:\.[\s\n\r<$]))(?!\[\/url\]))/gim, '$1<a href="http://$2">$2</a>$3');
            }
            function $___var_ac454ce46c413197(e, t, u) {
                var r = new RegExp('(.*?(?:,|\\s|\\t|\\n|\\r|^))(?:https?://)?((?:[\\da-z\\.-]+)\\.(?:ABOGADO|AC|ACADEMY|ACCOUNTANTS|ACTIVE|ACTOR|AD|AE|AERO|AF|AG|AGENCY|AI|AIRFORCE|AL|ALLFINANZ|ALSACE|AM|AN|AO|AQ|AR|ARCHI|ARMY|ARPA|AS|ASIA|ASSOCIATES|AT|ATTORNEY|AU|AUCTION|AUDIO|AUTOS|AW|AX|AXA|AZ|BA|BAND|BAR|BARGAINS|BAYERN|BB|BD|BE|BEER|BERLIN|BEST|BF|BG|BH|BI|BID|BIKE|BIO|BIZ|BJ|BLACK|BLACKFRIDAY|BLOOMBERG|BLUE|BM|BMW|BN|BNPPARIBAS|BO|BOO|BOUTIQUE|BR|BRUSSELS|BS|BT|BUDAPEST|BUILD|BUILDERS|BUSINESS|BUZZ|BV|BW|BY|BZ|BZH|CA|CAB|CAL|CAMERA|CAMP|CANCERRESEARCH|CAPETOWN|CAPITAL|CARAVAN|CARDS|CARE|CAREER|CAREERS|CASA|CASH|CAT|CATERING|CC|CD|CENTER|CEO|CERN|CF|CG|CH|CHANNEL|CHEAP|CHRISTMAS|CHROME|CHURCH|CI|CITIC|CITY|CK|CL|CLAIMS|CLEANING|CLICK|CLINIC|CLOTHING|CLUB|CM|CN|CO|CODES|COFFEE|COLLEGE|COLOGNE|COM|COMMUNITY|COMPANY|COMPUTER|CONDOS|CONSTRUCTION|CONSULTING|CONTRACTORS|COOKING|COOL|COOP|COUNTRY|CR|CREDIT|CREDITCARD|CRS|CRUISES|CU|CUISINELLA|CV|CW|CX|CY|CYMRU|CZ|DAD|DANCE|DATING|DAY|DE|DEALS|DEGREE|DELIVERY|DEMOCRAT|DENTAL|DENTIST|DESI|DIAMONDS|DIET|DIGITAL|DIRECT|DIRECTORY|DISCOUNT|DJ|DK|DM|DNP|DO|DOMAINS|DURBAN|DVAG|DZ|EAT|EC|EDU|EDUCATION|EE|EG|EMAIL|EMERCK|ENERGY|ENGINEER|ENGINEERING|ENTERPRISES|EQUIPMENT|ER|ES|ESQ|ESTATE|ET|EU|EUS|EVENTS|EXCHANGE|EXPERT|EXPOSED|FAIL|FARM|FEEDBACK|FI|FINANCE|FINANCIAL|FISH|FISHING|FITNESS|FJ|FK|FLIGHTS|FLORIST|FLSMIDTH|FLY|FM|FO|FOO|FORSALE|FOUNDATION|FR|FRL|FROGANS|FUND|FURNITURE|FUTBOL|GA|GAL|GALLERY|GB|GBIZ|GD|GE|GENT|GF|GG|GH|GI|GIFT|GIFTS|GIVES|GL|GLASS|GLE|GLOBAL|GLOBO|GM|GMAIL|GMO|GMX|GN|GOOGLE|GOP|GOV|GP|GQ|GR|GRAPHICS|GRATIS|GREEN|GRIPE|GS|GT|GU|GUIDE|GUITARS|GURU|GW|GY|HAMBURG|HAUS|HEALTHCARE|HELP|HERE|HIPHOP|HIV|HK|HM|HN|HOLDINGS|HOLIDAY|HOMES|HORSE|HOST|HOSTING|HOUSE|HOW|HR|HT|HU|IBM|ID|IE|IL|IM|IMMO|IMMOBILIEN|IN|INDUSTRIES|INFO|ING|INK|INSTITUTE|INSURE|INT|INTERNATIONAL|INVESTMENTS|IO|IQ|IR|IS|IT|JE|JETZT|JM|JO|JOBS|JOBURG|JP|JUEGOS|KAUFEN|KE|KG|KH|KI|KIM|KITCHEN|KIWI|KM|KN|KOELN|KP|KR|KRD|KRED|KW|KY|KZ|LA|LACAIXA|LAND|LAWYER|LB|LC|LEASE|LGBT|LI|LIFE|LIGHTING|LIMITED|LIMO|LINK|LK|LOANS|LONDON|LOTTO|LR|LS|LT|LTDA|LU|LUXE|LUXURY|LV|LY|MA|MAISON|MANAGEMENT|MANGO|MARKET|MARKETING|MC|MD|ME|MEDIA|MEET|MELBOURNE|MEME|MENU|MG|MH|MIAMI|MIL|MINI|MK|ML|MM|MN|MO|MOBI|MODA|MOE|MONASH|MORTGAGE|MOSCOW|MOTORCYCLES|MOV|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAGOYA|NAME|NAVY|NC|NE|NET|NETWORK|NEUSTAR|NEW|NEXUS|NF|NG|NGO|NHK|NI|NINJA|NL|NO|NP|NR|NRA|NRW|NU|NYC|NZ|OKINAWA|OM|ONG|ONL|OOO|ORG|ORGANIC|OTSUKA|OVH|PA|PARIS|PARTNERS|PARTS|PE|PF|PG|PH|PHARMACY|PHOTO|PHOTOGRAPHY|PHOTOS|PHYSIO|PICS|PICTURES|PINK|PIZZA|PK|PL|PLACE|PLUMBING|PM|PN|POHL|POKER|POST|PR|PRAXI|PRESS|PRO|PROD|PRODUCTIONS|PROF|PROPERTIES|PROPERTY|PS|PT|PUB|PW|PY|QA|QPON|QUEBEC|RE|REALTOR|RECIPES|RED|REHAB|REISE|REISEN|REN|RENTALS|REPAIR|REPORT|REPUBLICAN|REST|RESTAURANT|REVIEWS|RICH|RIO|RIP|RO|ROCKS|RODEO|RS|RSVP|RU|RUHR|RW|RYUKYU|SA|SAARLAND|SARL|SB|SC|SCA|SCB|SCHMIDT|SCHULE|SCOT|SD|SE|SERVICES|SEXY|SG|SH|SHIKSHA|SHOES|SI|SINGLES|SJ|SK|SL|SM|SN|SO|SOCIAL|SOFTWARE|SOHU|SOLAR|SOLUTIONS|SOY|SPACE|SPIEGEL|SR|ST|SU|SUPPLIES|SUPPLY|SUPPORT|SURF|SURGERY|SUZUKI|SV|SX|SY|SYDNEY|SYSTEMS|SZ|TAIPEI|TATAR|TATTOO|TAX|TC|TD|TECHNOLOGY|TEL|TF|TG|TH|TIENDA|TIPS|TIROL|TJ|TK|TL|TM|TN|TO|TODAY|TOKYO|TOOLS|TOP|TOWN|TOYS|TP|TR|TRADE|TRAINING|TRAVEL|TT|TUI|TV|TW|TZ|UA|UG|UK|UNIVERSITY|UNO|UOL|US|UY|UZ|VA|VACATIONS|VC|VE|VEGAS|VENTURES|VERSICHERUNG|VET|VG|VI|VIAJES|VILLAS|VISION|VLAANDEREN|VN|VODKA|VOTE|VOTING|VOTO|VOYAGE|VU|WALES|WANG|WATCH|WEBCAM|WEBSITE|WED|WEDDING|WF|WHOSWHO|WIEN|WIKI|WILLIAMHILL|WME|WORK|WORKS|WORLD|WS|WTC|WTF|XN--1QQW23A|XN--3BST00M|XN--3DS443G|XN--3E0B707E|XN--45BRJ9C|XN--4GBRIM|XN--55QW42G|XN--55QX5D|XN--6FRZ82G|XN--6QQ986B3XL|XN--80ADXHKS|XN--80AO21A|XN--80ASEHDB|XN--80ASWG|XN--90A3AC|XN--C1AVG|XN--CG4BKI|XN--CLCHC0EA0B2G2A9GCD|XN--CZR694B|XN--CZRU2D|XN--D1ACJ3B|XN--D1ALF|XN--FIQ228C5HS|XN--FIQ64B|XN--FIQS8S|XN--FIQZ9S|XN--FPCRJ9C3D|XN--FZC2C9E2C|XN--GECRJ9C|XN--H2BRJ9C|XN--I1B6B1A6A2E|XN--IO0A7I|XN--J1AMH|XN--J6W193G|XN--KPRW13D|XN--KPRY57D|XN--KPUT3I|XN--L1ACC|XN--LGBBAT1AD8J|XN--MGB9AWBF|XN--MGBA3A4F16A|XN--MGBAAM7A8H|XN--MGBAB2BD|XN--MGBAYH7GPA|XN--MGBBH1A71E|XN--MGBC0A9AZCG|XN--MGBERP4A5D4AR|XN--MGBX4CD0AB|XN--NGBC5AZD|XN--NODE|XN--NQV7F|XN--NQV7FS00EMA|XN--O3CW4H|XN--OGBPF8FL|XN--P1ACF|XN--P1AI|XN--PGBS0DH|XN--Q9JYB4C|XN--RHQV96G|XN--S9BRJ9C|XN--SES554G|XN--UNUP4Y|XN--VERMGENSBERATER-CTB|XN--VERMGENSBERATUNG-PWB|XN--VHQUV|XN--WGBH1C|XN--WGBL6A|XN--XHQ521B|XN--XKC2AL3HYE2A|XN--XKC2DL3A5EE0H|XN--YFRO4I67O|XN--YGBI2AMMX|XN--ZFR164B|XXX|XYZ|YACHTS|YANDEX|YE|YOGA|YOKOHAMA|YOUTUBE|YT|ZA|ZIP|ZM|ZONE|ZW)(?:/?)(?:[-_A-Z0-9/%]*(?:\\.[A-Z]{3,4})?)(?:[?.+A-Z0-9_=#%&-]*))((?:.|,|\\s|\\t|\\n)*?.*?)', 'igm');
                return e.replace(r, '$1<a' + (t ? ' class="' + t + '"' : '') + (u ? ' oncontextmenu="return false;"' : '') + ' href="http://$2">$2</a>$3');
            }
            function $___var_0530aa35a4a3b80d(e, t) {
                var u;
                return XMLHttpRequest && ((u = new XMLHttpRequest()).open('POST', e, !0), u.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'), u.onreadystatechange = function () {
                    4 === u.readyState && 200 <= u.status && u.status < 400 && t && (document.querySelectorAll(t)[0].innerHTML = u.responseText);
                }, u.send()), !1;
            }
            function $___var_2b663b677fa2888e(e, t, u) {
                t--;
                u = new Date(e, t, u);
                return 18 <= new Date(Date.now() - u).getUTCFullYear() - 1970;
            }
            function $___var_d9b5314b3e32a157() {
                return -1 != navigator.platform.indexOf('iPad');
            }
            function $___var_ad82960be6fc7f4b(e, t, u, r) {
                var n = 0;
                if (e += '', t += '', isNaN(u) && (u = 0), isNaN(r) && (r = 0), 0 == t.length)
                    return !1;
                for (u--; -1 != (u = e.indexOf(t, u + 1));) {
                    if (0 < r && u + t.length > r)
                        return !1;
                    n++;
                }
                return n;
            }
            function $___var_983676a6d20d51fe(e, t) {
                var u = new XMLHttpRequest();
                u.open('GET', e + '&time=' + new Date().getTime(), !0), u.onreadystatechange = function () {
                    4 === u.readyState && 200 === u.status && (window.location = window.location);
                }, u.send();
            }
            function $___var_5c61ae93bbafda52(r, n, o) {
                var i;
                return function () {
                    var e = this, t = arguments, u = o && !i;
                    clearTimeout(i), i = setTimeout(function () {
                        i = null, o || r.apply(e, t);
                    }, n), u && r.apply(e, t);
                };
            }
            function $___var_38834e089d2fc76a(t, u, r) {
                'undefined' != typeof bannedWordsCheckUrl && void 0 !== t && '' !== t && debounce(function (e) {
                    MG_Utils.ajaxCall({
                        type: 'GET',
                        url: bannedWordsCheckUrl,
                        data: {
                            value: t,
                            isPremium: !!u
                        },
                        dataType: 'json',
                        success: function (e) {
                            e && e.hasBannedWords ? 'function' == typeof r && r(!0) : 'function' == typeof r && r(!1);
                        },
                        error: function () {
                            'function' == typeof r && r(!1);
                        }
                    });
                }, 300, !1)();
            }
            function $___var_f946c03755c96a01(e) {
                if ('string' != typeof e)
                    return e;
                var t = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    '\'': '&#039;'
                };
                return e.replace(/[&<>"']/g, function (e) {
                    return t[e];
                });
            }
            function $___var_5cdad3cad3d76423(e) {
                if ('string' != typeof e)
                    return e;
                var t = {
                    '&amp;': '&',
                    '&lt;': '<',
                    '&gt;': '>',
                    '&quot;': '"',
                    '&#039;': '\''
                };
                return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;)/g, function (e) {
                    return t[e];
                });
            }
            function $___var_a7c8bea001cdecb4(e) {
                return decodeURIComponent((new RegExp('[?|&]' + e + '=([^&;]+?)(&|#|;|$)').exec(location.search) || [
                    ,
                    ''
                ])[1].replace(/\+/g, '%20')) || null;
            }
            function $___var_eb10dedd250686b7(e) {
                const $___old_70b6d761213fe947 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_70b6d761213fe947)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_3773b652659315ab.localStorage));
                    return function () {
                        try {
                            var t = window[e], u = '__storage_test__';
                            return t.setItem(u, u), t.removeItem(u), !0;
                        } catch (e) {
                            return e instanceof DOMException && (22 === e.code || 1014 === e.code || 'QuotaExceededError' === e.name || 'NS_ERROR_DOM_QUOTA_REACHED' === e.name) && 0 !== t.length;
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_70b6d761213fe947)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_70b6d761213fe947));
                }
            }
            String.prototype.capitalize || (String.prototype.capitalize = function () {
                return this.charAt(0).toUpperCase() + this.slice(1);
            }), String.prototype.strip = function (e) {
                return this.replace(e, '');
            }, String.prototype.trim = function () {
                return this.strip(/^\s+|\s+$/g);
            }, String.prototype.stripForTags = function () {
                return this.strip(/[^a-z0-9 ,]*/gi);
            }, String.prototype.stripForTagsMultilingual = function () {
                return this.strip(/[^a-zA-Z0-9\u0401\u0410-\u044f\u0451\u3041-\u3096\u30A0-\u30FF\u3400-\u4DB5\u4E00-\u9FCB\uF900-\uFA6A\u2E80-\u2FD5\uFF5F-\uFF9F\u3000-\u303F\u31F0-\u31FF\u3220-\u3243\u3280-\u337F\uFF01-\uFF5E ,]*/g);
            }, String.prototype.stripHtmlTags = function () {
                var e = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*', e = new RegExp('<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b' + e + '>[\\s\\S]*?</script\\s*|style\\b' + e + '>[\\s\\S]*?</style\\s*|/?[a-z]' + e + ')>', 'gi');
                return this.strip(e);
            }, String.prototype.stripExtended = function () {
                return this.strip(/[^\u0000-\u0080]+/g);
            }, String.prototype.stripExtendedMultilingual = function () {
                return this.strip(/[^\u0000-\u0080\u0401\u0410-\u044f\u0451\u3041-\u3096\u30A0-\u30FF\u3400-\u4DB5\u4E00-\u9FCB\uF900-\uFA6A\u2E80-\u2FD5\uFF5F-\uFF9F\u3000-\u303F\u31F0-\u31FF\u3220-\u3243\u3280-\u337F\uFF01-\uFF5E]+/g);
            }, String.prototype.sanitize = function () {
                return this.stripExtended().stripHtmlTags().trim();
            }, String.prototype.sanitizeMultilingual = function () {
                return this.stripExtendedMultilingual().stripHtmlTags().trim();
            };
            var $___var_9763ce4487c37c3c = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g, $___var_e21d23d6d8af381f = /[\0-\x08\x0E-\x1F\x7F-\x84\x86-\x9F\u0300-\u034E\u0350-\u035B\u0363-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u200C\u200E\u200F\u202A-\u202E\u2066-\u206F\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3035\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFFF9-\uFFFB]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDCA-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E\uDCA0-\uDCA3]|\uD834[\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDC01\uDC20-\uDC7F\uDD00-\uDDEF]/g;
            regexSymbolWithCombiningMarks = $___var_9763ce4487c37c3c;
            regexLineBreakCombiningMarks = $___var_e21d23d6d8af381f;
            function $___var_7e7c5aeb87255e99(e) {
                return e.replace(regexLineBreakCombiningMarks, '').replace(regexSymbolWithCombiningMarks, '$1');
            }
            var $___var_b450dd663d531334 = {
                hasLocalStorage: !!window.localStorage,
                defaultExpiry: 1,
                saveWithExpiry: function (e, t, u) {
                    (u = t.expires && !u ? t.expires : u) || (u = new Date()).setDate(u.getDate() + this.defaultExpiry), u = u instanceof Date ? u.getTime() : parseInt(u), this.saveItem(e, {
                        val: t,
                        expires: u
                    });
                },
                getItem: function (t) {
                    if (this.hasLocalStorage) {
                        var e;
                        try {
                            e = JSON.parse(localStorage[t]);
                        } catch (e) {
                            return localStorage[t];
                        }
                        return parseInt(e.expires) < new Date().getTime() ? (this.deleteItem(t), null) : e.val || e;
                    }
                },
                saveItem: function (e, t) {
                    this.hasLocalStorage && (t = JSON.stringify('object' === _typeof(t) ? t : { val: t }), localStorage.setItem(e, t));
                },
                deleteItem: function (e) {
                    this.hasLocalStorage && localStorage.removeItem(e);
                },
                saveExpiry: function (e, t, u) {
                    if ('undefined' == typeof Storage)
                        return !1;
                    u = {
                        value: JSON.stringify(t),
                        timestamp: new Date().getTime() + u
                    };
                    return localStorage.setItem(e, JSON.stringify(u)), t;
                },
                getExpiry: function (e) {
                    if ('undefined' == typeof Storage)
                        return !1;
                    e = JSON.parse(localStorage.getItem(e));
                    return !!e && (new Date().getTime() < e.timestamp && JSON.parse(e.value));
                }
            };
            PH_Storage = $___var_b450dd663d531334;
            function $___var_cef6f9daa428163d(e) {
                var t = !1;
                if (e)
                    if (e.code)
                        switch (e.code) {
                        case 22:
                            t = !0;
                            break;
                        case 1014:
                            'NS_ERROR_DOM_QUOTA_REACHED' === e.name && (t = !0);
                        }
                    else
                        -2147024882 === e.number && (t = !0);
                return t;
            }
            var $___var_a1da631b15d44293 = function () {
                const $___old_e47bad2497801f01 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_e47bad2497801f01)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_3773b652659315ab.localStorage));
                    return function () {
                        var t = {
                            limit: 101,
                            recommendedIds: !!storageAvailable('localStorage') && JSON.parse(localStorage.getItem('watchedVideoIds')) || []
                        };
                        return {
                            set: function (e) {
                                e && -1 === t.recommendedIds.indexOf(e) && t.recommendedIds.push(e), t.recommendedIds.length === t.limit && t.recommendedIds.shift(), storageAvailable('localStorage') && localStorage.setItem('watchedVideoIds', JSON.stringify(t.recommendedIds));
                            }
                        };
                    }.apply(this, arguments);
                } finally {
                    if ($___old_e47bad2497801f01)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_e47bad2497801f01));
                }
            }();
            CollectRecommended = $___var_a1da631b15d44293;
            function $___var_d08dce576b78421e() {
                Object.entries || (Object.entries = function (e) {
                    for (var t = Object.keys(e), u = t.length, r = new Array(u); u--;)
                        r[u] = [
                            t[u],
                            e[t[u]]
                        ];
                    return r;
                });
            }
            function $___var_a282f5db94d89d66(e) {
                return e && 'object' === _typeof(e) && e.constructor === Object;
            }
            function $___var_54c099d4a0ad3c9c(e) {
                return e && 'object' === _typeof(e) && e.constructor === Array;
            }
            var $___var_0633595a99630be9 = function () {
                    'use strict';
                    var e;
                    function t() {
                        var i = { expirationDays: 30 };
                        return {
                            setWithExpiry: function (e, t, u, r, n, o) {
                                setCookieAdvanced(e, t, u = u || i.expirationDays, r, n, o);
                            },
                            isset: function (e) {
                                return null !== getCookieAdvanced(e);
                            },
                            get: function (e) {
                                return getCookieAdvanced(e);
                            },
                            set: function (e, t, u, r, n) {
                                setCookieAdvanced(e, t, null, u, r, n);
                            },
                            remove: function (e, t, u) {
                                deleteCookieAdvanced(e, t, u);
                            },
                            push: function (e, t, u) {
                                var r = getCookieAdvanced(e), u = u || 10;
                                try {
                                    var n = r ? JSON.parse(r) : {}, o = 0;
                                    if (n[t.id] && 0 == (o = n[t.id].split('|')[2] || 0))
                                        return n[t.id] = t.value, document.cookie = e + '=' + escape(JSON.stringify(n)), !0;
                                    for (var i = Object.keys(n), a = 0; a < i.length; a++) {
                                        var A = n[i[a]].split('|');
                                        A[2] = A[2] || a, (0 === o || 0 < o && A[2] < o) && (A[2] = parseInt(A[2]) + 1, n[i[a]] = A.join('|')), A[2] >= u && delete n[i[a]];
                                    }
                                    return n[t.id] = t.value, document.cookie = e + '=' + escape(JSON.stringify(n)), !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                        };
                    }
                    return {
                        getInstance: function () {
                            return e = e || t();
                        }
                    };
                }(), $___var_71ac63878f67e747 = function () {
                    'use strict';
                    var e;
                    function t() {
                        var e = function (e) {
                                try {
                                    var t = window[e], u = 'storage_test';
                                    return t.setItem(u, u), t.removeItem(u), !0;
                                } catch (e) {
                                    return console.error(e), !1;
                                }
                            }('localStorage'), r = { expirationDays: 30 };
                        function t(e) {
                            var t = localStorage.getItem(e);
                            return t && parseInt(t.expires) < new Date().getTime() ? (u(e), null) : t;
                        }
                        function n(e, t) {
                            (isObject(t) || isArray(t)) && (t = JSON.stringify(t)), localStorage.setItem(e, t);
                        }
                        function u(e) {
                            localStorage[e] ? localStorage.removeItem(e) : console.error('Key ' + e + ' does not exist in localStorage.');
                        }
                        return e ? (console.info('Getting LocalStorageManager instance'), {
                            setWithExpiry: function (e, t, u) {
                                (u = t.expires && !u ? t.expires : u) || (u = new Date()).setDate(u.getDate() + r.expirationDays), n(e, {
                                    val: t,
                                    expires: u = u instanceof Date ? u.getTime() : parseInt(u)
                                });
                            },
                            isset: function (e) {
                                return null !== t(e);
                            },
                            get: t,
                            set: n,
                            remove: u,
                            push: function (e, t, u) {
                                var r = localStorage.getItem(e), u = u || 10;
                                try {
                                    var n = r ? JSON.parse(r) : {}, o = 0;
                                    if (n[t.id] && 0 == (o = n[t.id].split('|')[2] || 0))
                                        return n[t.id] = t.value, localStorage.setItem(e, JSON.stringify(n)), !0;
                                    for (var i = Object.keys(n), a = 0; a < i.length; a++) {
                                        var A = n[i[a]].split('|');
                                        A[2] = A[2] || a, (0 === o || 0 < o && A[2] < o) && (A[2] = parseInt(A[2]) + 1, n[i[a]] = A.join('|')), A[2] >= u && delete n[i[a]];
                                    }
                                    return n[t.id] = t.value, localStorage.setItem(e, JSON.stringify(n)), !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                        }) : (console.info('Getting CookiesManager instance'), CookiesManager.getInstance());
                    }
                    return {
                        getInstance: function () {
                            return e = e || t();
                        }
                    };
                }(), $___var_f51103b3703e551c = function () {
                    'use strict';
                    var e;
                    function t() {
                        function e(e) {
                            try {
                                var t = function (t) {
                                    if ('string' == typeof t)
                                        try {
                                            return JSON.parse(t);
                                        } catch (e) {
                                            return t || void 0;
                                        }
                                }(sessionStorage.getItem(e));
                            } catch (e) {
                                return null;
                            }
                            return void 0 === t ? null : t;
                        }
                        function t(e, t) {
                            try {
                                sessionStorage.setItem(e, JSON.stringify(t));
                            } catch (e) {
                                return !1;
                            }
                        }
                        return function (e) {
                            try {
                                var t = window[e], u = 'storage_test';
                                return t.setItem(u, u), t.removeItem(u), !0;
                            } catch (e) {
                                return !1;
                            }
                        }('sessionStorage') ? {
                            get: e,
                            set: t
                        } : {
                            get: function (e) {
                                return getCookieAdvanced(e);
                            },
                            set: function (e, t, u) {
                                setCookieAdvanced(e, t, u);
                            }
                        };
                    }
                    return {
                        getInstance: function () {
                            return e = e || t();
                        }
                    };
                }();
            CookiesManager = $___var_0633595a99630be9;
            LocalStorageManager = $___var_71ac63878f67e747;
            SessionStorageManager = $___var_f51103b3703e551c;
            function $___var_7e9a37b9a66b8f88(e) {
                var t, u = [], r = {};
                if ('object' == _typeof(e) && 'FORM' == e.nodeName) {
                    var n = e.elements.length;
                    for (i = 0; i < n; i++)
                        if ((u = e.elements[i]).name && !u.disabled && 'file' != u.type && 'reset' != u.type && 'submit' != u.type && 'button' != u.type)
                            if ('select-multiple' == u.type)
                                for (j = e.elements[i].options.length - 1; 0 <= j; j--)
                                    u.options[j].selected && (r[encodeURIComponent(u.name)] = encodeURIComponent(u.options[j].value));
                            else
                                ('checkbox' != u.type && 'radio' != u.type || u.checked) && (t = 'text' == u.type ? u.value.trim() : u.value, r[u.name] = t);
                }
                return r;
            }
            Array.prototype.reduce || (Array.prototype.reduce = function (e) {
                if (null == this)
                    throw new TypeError('Array.prototype.reduce called on null or undefined');
                if ('function' != typeof e)
                    throw new TypeError(e + ' is not a function');
                var t, u = Object(this), r = u.length >>> 0, n = 0;
                if (2 == arguments.length)
                    t = arguments[1];
                else {
                    for (; n < r && !(n in u);)
                        n++;
                    if (r <= n)
                        throw new TypeError('Reduce of empty array with no initial value');
                    t = u[n++];
                }
                for (; n < r; n++)
                    n in u && (t = e(t, u[n], n, u));
                return t;
            });
        }())
    } finally {
        if ($___old_21f70ecfe29c509f)
            ({}.constructor.defineProperty(window, 'localStorage', $___old_21f70ecfe29c509f));
    }
}