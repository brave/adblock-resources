var Visitor;
{
    const $___mock_1e14b11c183bc3de = {};
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
    })($___mock_1e14b11c183bc3de);
    (function () {
        Visitor = $___var_c85b793257e0d6a7;
        ({}.constructor.defineProperty(Visitor, 'name', {
            configurable: true,
            enumerable: false,
            value: 'Visitor',
            writable: false
        }));
        function $___var_c85b793257e0d6a7(t, e) {
            const $___old_950d9dc2bb736fb3 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
            try {
                if ($___old_950d9dc2bb736fb3)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1e14b11c183bc3de.XMLHttpRequest));
                return function () {
                    if (!t)
                        throw 'Visitor requires Adobe Marketing Cloud Org ID';
                    var l = this;
                    l.version = '1.9.0';
                    var o = window, n = o.Visitor;
                    n.version = l.version, o.s_c_in || (o.s_c_il = [], o.s_c_in = 0), l._c = 'Visitor', l._il = o.s_c_il, l._in = o.s_c_in, l._il[l._in] = l, o.s_c_in++, l.ha = { Da: [] };
                    var s = o.document, f = n.Bb;
                    f || (f = null);
                    var r = n.Cb;
                    r || (r = void 0);
                    var c = n.La;
                    c || (c = !0);
                    var u = n.Ja;
                    u || (u = !1), l.da = function (t) {
                        var e, i = 0;
                        if (t)
                            for (e = 0; e < t.length; e++)
                                i = (i << 5) - i + t.charCodeAt(e), i &= i;
                        return i;
                    }, l.r = function (t, e) {
                        var i, n, a = '0123456789', r = '', o = '', s = 8, u = 10, d = 10;
                        if (e === p && (T.isClientSideMarketingCloudVisitorID = c), 1 == t) {
                            for (a += 'ABCDEF', i = 0; i < 16; i++)
                                n = Math.floor(Math.random() * s), r += a.substring(n, n + 1), n = Math.floor(Math.random() * s), o += a.substring(n, n + 1), s = 16;
                            return r + '-' + o;
                        }
                        for (i = 0; i < 19; i++)
                            n = Math.floor(Math.random() * u), r += a.substring(n, n + 1), 0 == i && 9 == n ? u = 3 : (1 == i || 2 == i) && 10 != u && n < 2 ? u = 10 : 2 < i && (u = 10), n = Math.floor(Math.random() * d), o += a.substring(n, n + 1), 0 == i && 9 == n ? d = 3 : (1 == i || 2 == i) && 10 != d && n < 2 ? d = 10 : 2 < i && (d = 10);
                        return r + o;
                    }, l.Pa = function () {
                        var t;
                        if (!t && o.location && (t = o.location.hostname), t)
                            if (/^[0-9.]+$/.test(t))
                                t = '';
                            else {
                                var e = t.split('.'), i = e.length - 1, n = i - 1;
                                if (1 < i && e[i].length <= 2 && (2 == e[i - 1].length || ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,'.indexOf(',' + e[i] + ',') < 0) && n--, 0 < n)
                                    for (t = ''; n <= i;)
                                        t = e[i] + (t ? '.' : '') + t, i--;
                            }
                        return t;
                    }, l.cookieRead = function (t) {
                        t = encodeURIComponent(t);
                        var e = (';' + s.cookie).split(' ').join(';'), i = e.indexOf(';' + t + '='), n = i < 0 ? i : e.indexOf(';', i + 1);
                        return i < 0 ? '' : decodeURIComponent(e.substring(i + 2 + t.length, n < 0 ? e.length : n));
                    }, l.cookieWrite = function (t, e, i) {
                        e = '' + e;
                        var n, a = (a = l.cookieLifetime) ? ('' + a).toUpperCase() : '';
                        return i && 'SESSION' != a && 'NONE' != a ? (n = '' != e ? parseInt(a || 0, 10) : -60) ? (i = new Date()).setTime(i.getTime() + 1000 * n) : 1 == i && (n = (i = new Date()).getYear(), i.setYear(n + 2 + (n < 1900 ? 1900 : 0))) : i = 0, t && 'NONE' != a ? (s.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e) + '; path=/;' + (i ? ' expires=' + i.toGMTString() + ';' : '') + (l.cookieDomain ? ' domain=' + l.cookieDomain + ';' : ''), l.cookieRead(t) == e) : 0;
                    }, l.h = f, l.J = function (t, e) {
                        try {
                            'function' == typeof t ? t.apply(o, e) : t[1].apply(t[0], e);
                        } catch (t) {
                        }
                    }, l.Va = function (t, e) {
                        e && (l.h == f && (l.h = {}), l.h[t] == r && (l.h[t] = []), l.h[t].push(e));
                    }, l.q = function (t, e) {
                        if (l.h != f) {
                            var i = l.h[t];
                            if (i)
                                for (; 0 < i.length;)
                                    l.J(i.shift(), e);
                        }
                    }, l.v = function (t, e, i, n) {
                        if (i = encodeURIComponent(e) + '=' + encodeURIComponent(i), e = O.ub(t), -1 === (t = O.lb(t)).indexOf('?'))
                            return t + '?' + i + e;
                        var a = t.split('?');
                        return (t = a[0] + '?') + (n = O.Ya(a[1], i, n)) + e;
                    }, l.Oa = function (t, e) {
                        var i = RegExp('[\\?&#]' + e + '=([^&#]*)').exec(t);
                        if (i && i.length)
                            return decodeURIComponent(i[1]);
                    }, l.Ua = function () {
                        var t = f, e = o.location.href;
                        try {
                            var i = l.Oa(e, S.Y);
                            if (i) {
                                t = {};
                                for (var n = i.split('|'), a = (e = 0, n.length); e < a; e++) {
                                    var r = n[e].split('=');
                                    t[r[0]] = decodeURIComponent(r[1]);
                                }
                            }
                            return t;
                        } catch (t) {
                        }
                    }, l.Ma = function () {
                        var t = l.Ua();
                        if (t) {
                            var e = t[p], i = l.setMarketingCloudVisitorID;
                            e && e.match(S.u) && i(e), l.j(I, -1), t = t[C], e = l.setAnalyticsVisitorID, t && t.match(S.u) && e(t);
                        }
                    }, l.Ta = function (t) {
                        var e, i;
                        t && t[l.marketingCloudOrgID] && (t = t[l.marketingCloudOrgID], i = t.customerIDs, O.ob(i) && l.setCustomerIDs(i), e = (e = t.sdid) || {}, l._supplementalDataIDCurrent = e.supplementalDataIDCurrent || '', l._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, l._supplementalDataIDLast = e.supplementalDataIDLast || '', l._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {});
                    }, l.l = f, l.Ra = function (t, e, i, n) {
                        e = l.v(e, 'd_fieldgroup', t, 1), n.url = l.v(n.url, 'd_fieldgroup', t, 1), n.m = l.v(n.m, 'd_fieldgroup', t, 1), T.d[t] = c, n === Object(n) && n.m && 'XMLHttpRequest' === l.ja.C.D ? l.ja.hb(n, i, t) : l.useCORSOnly || l.ga(t, e, i);
                    }, l.ga = function (t, e, i) {
                        var n, a = 0, r = 0;
                        if (e && s) {
                            for (n = 0; !a && n < 2;) {
                                try {
                                    a = (a = s.getElementsByTagName(0 < n ? 'HEAD' : 'head')) && 0 < a.length ? a[0] : 0;
                                } catch (t) {
                                    a = 0;
                                }
                                n++;
                            }
                            if (!a)
                                try {
                                    s.body && (a = s.body);
                                } catch (t) {
                                    a = 0;
                                }
                            if (a)
                                for (n = 0; !r && n < 2;) {
                                    try {
                                        r = s.createElement(0 < n ? 'SCRIPT' : 'script');
                                    } catch (t) {
                                        r = 0;
                                    }
                                    n++;
                                }
                        }
                        e && a && r ? (r.type = 'text/javascript', r.src = e, a.firstChild ? a.insertBefore(r, a.firstChild) : a.appendChild(r), a = l.loadTimeout, A.d[t] = {
                            requestStart: A.o(),
                            url: e,
                            sa: a,
                            qa: A.wa(),
                            ra: 0
                        }, i && (l.l == f && (l.l = {}), l.l[t] = setTimeout(function () {
                            i(c);
                        }, a)), l.ha.Da.push(e)) : i && i();
                    }, l.Na = function (t) {
                        l.l != f && l.l[t] && (clearTimeout(l.l[t]), l.l[t] = 0);
                    }, l.ea = u, l.fa = u, l.isAllowed = function () {
                        return !l.ea && (l.ea = c, l.cookieRead(l.cookieName) || l.cookieWrite(l.cookieName, 'T', 1)) && (l.fa = c), l.fa;
                    }, l.b = f, l.c = f;
                    var d = n.Tb;
                    d || (d = 'MC');
                    var p = n.Zb;
                    p || (p = 'MCMID');
                    var m = n.Ub;
                    m || (m = 'MCCIDH');
                    var h = n.Xb;
                    h || (h = 'MCSYNCS');
                    var g = n.Yb;
                    g || (g = 'MCSYNCSOP');
                    var i = n.Vb;
                    i || (i = 'MCIDTS');
                    var b = n.Wb;
                    b || (b = 'MCOPTOUT');
                    var v = n.Rb;
                    v || (v = 'A');
                    var C = n.Ob;
                    C || (C = 'MCAID');
                    var D = n.Sb;
                    D || (D = 'AAM');
                    var _ = n.Qb;
                    _ || (_ = 'MCAAMLH');
                    var I = n.Pb;
                    I || (I = 'MCAAMB');
                    var y = n.$b;
                    y || (y = 'NONE'), l.L = 0, l.ca = function () {
                        if (!l.L) {
                            var t = l.version;
                            l.audienceManagerServer && (t += '|' + l.audienceManagerServer), l.audienceManagerServerSecure && (t += '|' + l.audienceManagerServerSecure), l.L = l.da(t);
                        }
                        return l.L;
                    }, l.ia = u, l.f = function () {
                        if (!l.ia) {
                            l.ia = c;
                            var t, e, i, n, a = l.ca(), r = u, o = l.cookieRead(l.cookieName), s = new Date();
                            if (l.b == f && (l.b = {}), o && 'T' != o)
                                for ((o = o.split('|'))[0].match(/^[\-0-9]+$/) && (parseInt(o[0], 10) != a && (r = c), o.shift()), 1 == o.length % 2 && o.pop(), a = 0; a < o.length; a += 2)
                                    e = (t = o[a].split('-'))[0], i = o[a + 1], t = 1 < t.length ? (n = parseInt(t[1], 10), 0 < t[1].indexOf('s')) : (n = 0, u), r && (e == m && (i = ''), 0 < n && (n = s.getTime() / 1000 - 60)), e && i && (l.e(e, i, 1), 0 < n && (l.b['expire' + e] = n + (t ? 's' : ''), s.getTime() >= 1000 * n || t && !l.cookieRead(l.sessionCookieName))) && (l.c || (l.c = {}), l.c[e] = c);
                            r = l.loadSSL ? !!l.trackingServerSecure : !!l.trackingServer, !l.a(C) && r && (o = l.cookieRead('s_vi')) && (1 < (o = o.split('|')).length && 0 <= o[0].indexOf('v1') && (0 <= (a = (i = o[1]).indexOf('[')) && (i = i.substring(0, a)), i && i.match(S.u) && l.e(C, i)));
                        }
                    }, l.Xa = function () {
                        var t, e, i = l.ca();
                        for (t in l.b)
                            !Object.prototype[t] && l.b[t] && 'expire' != t.substring(0, 6) && (e = l.b[t], i += (i ? '|' : '') + t + (l.b['expire' + t] ? '-' + l.b['expire' + t] : '') + '|' + e);
                        l.cookieWrite(l.cookieName, i, 1);
                    }, l.a = function (t, e) {
                        return l.b == f || !e && l.c && l.c[t] ? f : l.b[t];
                    }, l.e = function (t, e, i) {
                        l.b == f && (l.b = {}), l.b[t] = e, i || l.Xa();
                    }, l.Qa = function (t, e) {
                        var i = l.a(t, e);
                        return i ? i.split('*') : f;
                    }, l.Wa = function (t, e, i) {
                        l.e(t, e ? e.join('*') : '', i);
                    }, l.Ib = function (t, e) {
                        var i = l.Qa(t, e);
                        if (i) {
                            var n, a = {};
                            for (n = 0; n < i.length; n += 2)
                                a[i[n]] = i[n + 1];
                            return a;
                        }
                        return f;
                    }, l.Kb = function (t, e, i) {
                        var n, a = f;
                        if (e)
                            for (n in (a = [], e))
                                Object.prototype[n] || (a.push(n), a.push(e[n]));
                        l.Wa(t, a, i);
                    }, l.j = function (t, e, i) {
                        var n = new Date();
                        n.setTime(n.getTime() + 1000 * e), l.b == f && (l.b = {}), l.b['expire' + t] = Math.floor(n.getTime() / 1000) + (i ? 's' : ''), e < 0 ? (l.c || (l.c = {}), l.c[t] = c) : l.c && (l.c[t] = u), i && (l.cookieRead(l.sessionCookieName) || l.cookieWrite(l.sessionCookieName, '1'));
                    }, l.ba = function (t) {
                        return t && ('object' == typeof t && (t = t.d_mid ? t.d_mid : t.visitorID ? t.visitorID : t.id ? t.id : t.uuid ? t.uuid : '' + t), t && ('NOTARGET' == (t = t.toUpperCase()) && (t = y)), !t || t != y && !t.match(S.u)) && (t = ''), t;
                    }, l.k = function (t, e) {
                        if (l.Na(t), l.i != f && (l.i[t] = u), A.d[t] && (A.d[t].zb = A.o(), A.I(t)), T.d[t] && T.Fa(t, u), t == d) {
                            T.isClientSideMarketingCloudVisitorID !== c && (T.isClientSideMarketingCloudVisitorID = u);
                            var i = l.a(p);
                            if (!i) {
                                if (!(i = 'object' == typeof e && e.mid ? e.mid : l.ba(e))) {
                                    if (l.B)
                                        return void l.getAnalyticsVisitorID(f, u, c);
                                    i = l.r(0, p);
                                }
                                l.e(p, i);
                            }
                            i && i != y || (i = ''), 'object' == typeof e && ((e.d_region || e.dcs_region || e.d_blob || e.blob) && l.k(D, e), l.B && e.mid && l.k(v, { id: e.id })), l.q(p, [i]);
                        }
                        if (t == D && 'object' == typeof e) {
                            i = 604800, e.id_sync_ttl != r && e.id_sync_ttl && (i = parseInt(e.id_sync_ttl, 10));
                            var n = l.a(_);
                            n || ((n = e.d_region) || (n = e.dcs_region), n && (l.j(_, i), l.e(_, n))), n || (n = ''), l.q(_, [n]), n = l.a(I), (e.d_blob || e.blob) && ((n = e.d_blob) || (n = e.blob), l.j(I, i), l.e(I, n)), n || (n = ''), l.q(I, [n]), !e.error_msg && l.A && l.e(m, l.A);
                        }
                        var a;
                        (t == v && ((i = l.a(C)) || ((i = l.ba(e)) ? i !== y && l.j(I, -1) : i = y, l.e(C, i)), i && i != y || (i = ''), l.q(C, [i])), l.idSyncDisableSyncs ? M.xa = c : (M.xa = u, (i = {}).ibs = e.ibs, i.subdomain = e.subdomain, M.vb(i)), e === Object(e)) && (l.isAllowed() && (a = l.a(b)), a || (a = y, e.d_optout && e.d_optout instanceof Array && (a = e.d_optout.join(',')), i = parseInt(e.d_ottl, 10), isNaN(i) && (i = 7200), l.j(b, i, c), l.e(b, a)), l.q(b, [a]));
                    }, l.i = f, l.s = function (n, t, e, i, a) {
                        var r, o = '', s = O.nb(n);
                        return l.isAllowed() && (l.f(), o = l.a(n, L[n] === c), l.disableThirdPartyCalls && !o && (n === p ? (o = l.r(0, p), l.setMarketingCloudVisitorID(o)) : n === C && !s && (o = '', l.setAnalyticsVisitorID(o))), (!o || l.c && l.c[n]) && (!l.disableThirdPartyCalls || s)) && (n == p || n == b ? r = d : n == _ || n == I ? r = D : n == C && (r = v), r) ? (!t || l.i != f && l.i[r] || (l.i == f && (l.i = {}), l.i[r] = c, l.Ra(r, t, function (t, e) {
                            if (!l.a(n))
                                if (A.d[r] && (A.d[r].timeout = A.o(), A.d[r].mb = !!t, A.I(r)), e !== Object(e) || l.useCORSOnly) {
                                    t && T.Fa(r, c);
                                    var i = '';
                                    n == p ? i = l.r(0, p) : r == D && (i = { error_msg: 'timeout' }), l.k(r, i);
                                } else
                                    l.ga(r, e.url, e.G);
                        }, a)), o || (l.Va(n, e), t || l.k(r, { id: y }), '')) : (n != p && n != C || o != y || (o = '', i = c), e && i && l.J(e, [o]), o);
                    }, l._setMarketingCloudFields = function (t) {
                        l.f(), l.k(d, t);
                    }, l.setMarketingCloudVisitorID = function (t) {
                        l._setMarketingCloudFields(t);
                    }, l.B = u, l.getMarketingCloudVisitorID = function (t, e) {
                        if (l.isAllowed()) {
                            l.marketingCloudServer && l.marketingCloudServer.indexOf('.demdex.net') < 0 && (l.B = c);
                            var i = l.z('_setMarketingCloudFields');
                            return l.s(p, i.url, t, e, i);
                        }
                        return '';
                    }, l.Sa = function () {
                        l.getAudienceManagerBlob();
                    }, n.AuthState = {
                        UNKNOWN: 0,
                        AUTHENTICATED: 1,
                        LOGGED_OUT: 2
                    }, l.w = {}, l.aa = u, l.A = '', l.setCustomerIDs = function (t) {
                        if (l.isAllowed() && t) {
                            var e, i;
                            for (e in (l.f(), t))
                                if (!Object.prototype[e] && (i = t[e]))
                                    if ('object' == typeof i) {
                                        var n = {};
                                        i.id && (n.id = i.id), i.authState != r && (n.authState = i.authState), l.w[e] = n;
                                    } else
                                        l.w[e] = { id: i };
                            t = l.getCustomerIDs(), n = l.a(m);
                            var a = '';
                            for (e in (n || (n = 0), t))
                                Object.prototype[e] || (a += (a ? '|' : '') + e + '|' + ((i = t[e]).id ? i.id : '') + (i.authState ? i.authState : ''));
                            l.A = l.da(a), l.A != n && (l.aa = c, l.Sa());
                        }
                    }, l.getCustomerIDs = function () {
                        l.f();
                        var t, e, i = {};
                        for (t in l.w)
                            Object.prototype[t] || (e = l.w[t], i[t] || (i[t] = {}), e.id && (i[t].id = e.id), i[t].authState = e.authState != r ? e.authState : n.AuthState.UNKNOWN);
                        return i;
                    }, l._setAnalyticsFields = function (t) {
                        l.f(), l.k(v, t);
                    }, l.setAnalyticsVisitorID = function (t) {
                        l._setAnalyticsFields(t);
                    }, l.getAnalyticsVisitorID = function (t, e, i) {
                        if (l.isAllowed()) {
                            var n = '';
                            if (i || (n = l.getMarketingCloudVisitorID(function () {
                                    l.getAnalyticsVisitorID(t, c);
                                })), n || i) {
                                var a = i ? l.marketingCloudServer : l.trackingServer, r = '';
                                l.loadSSL && (i ? l.marketingCloudServerSecure && (a = l.marketingCloudServerSecure) : l.trackingServerSecure && (a = l.trackingServerSecure));
                                var o = {};
                                if (a) {
                                    a = 'http' + (l.loadSSL ? 's' : '') + '://' + a + '/id', n = 'd_visid_ver=' + l.version + '&mcorgid=' + encodeURIComponent(l.marketingCloudOrgID) + (n ? '&mid=' + encodeURIComponent(n) : '') + (l.idSyncDisable3rdPartySyncing ? '&d_coppa=true' : '');
                                    var s = [
                                        's_c_il',
                                        l._in,
                                        '_set' + (i ? 'MarketingCloud' : 'Analytics') + 'Fields'
                                    ];
                                    r = a + '?' + n + '&callback=s_c_il%5B' + l._in + '%5D._set' + (i ? 'MarketingCloud' : 'Analytics') + 'Fields';
                                    o.m = a + '?' + n, o.na = s;
                                }
                                return o.url = r, l.s(i ? p : C, r, t, e, o);
                            }
                        }
                        return '';
                    }, l._setAudienceManagerFields = function (t) {
                        l.f(), l.k(D, t);
                    }, l.z = function (t) {
                        var e = l.audienceManagerServer, i = '', n = l.a(p), a = l.a(I, c), r = (r = l.a(C)) && r != y ? '&d_cid_ic=AVID%01' + encodeURIComponent(r) : '';
                        if (l.loadSSL && l.audienceManagerServerSecure && (e = l.audienceManagerServerSecure), e) {
                            var o, s;
                            if (i = l.getCustomerIDs())
                                for (o in i)
                                    Object.prototype[o] || (s = i[o], r += '&d_cid_ic=' + encodeURIComponent(o) + '%01' + encodeURIComponent(s.id ? s.id : '') + (s.authState ? '%01' + s.authState : ''));
                            return t || (t = '_setAudienceManagerFields'), e = 'http' + (l.loadSSL ? 's' : '') + '://' + e + '/id', n = 'd_visid_ver=' + l.version + '&d_rtbd=json&d_ver=2' + (!n && l.B ? '&d_verify=1' : '') + '&d_orgid=' + encodeURIComponent(l.marketingCloudOrgID) + '&d_nsid=' + (l.idSyncContainerID || 0) + (n ? '&d_mid=' + encodeURIComponent(n) : '') + (l.idSyncDisable3rdPartySyncing ? '&d_coppa=true' : '') + (a ? '&d_blob=' + encodeURIComponent(a) : '') + r, a = [
                                's_c_il',
                                l._in,
                                t
                            ], {
                                url: i = e + '?' + n + '&d_cb=s_c_il%5B' + l._in + '%5D.' + t,
                                m: e + '?' + n,
                                na: a
                            };
                        }
                        return { url: i };
                    }, l.getAudienceManagerLocationHint = function (t, e) {
                        if (l.isAllowed() && l.getMarketingCloudVisitorID(function () {
                                l.getAudienceManagerLocationHint(t, c);
                            })) {
                            var i = l.a(C);
                            if (i || (i = l.getAnalyticsVisitorID(function () {
                                    l.getAudienceManagerLocationHint(t, c);
                                })), i)
                                return i = l.z(), l.s(_, i.url, t, e, i);
                        }
                        return '';
                    }, l.getAudienceManagerBlob = function (t, e) {
                        if (l.isAllowed() && l.getMarketingCloudVisitorID(function () {
                                l.getAudienceManagerBlob(t, c);
                            }) && ((i = l.a(C)) || (i = l.getAnalyticsVisitorID(function () {
                                l.getAudienceManagerBlob(t, c);
                            })), i)) {
                            var i, n = (i = l.z()).url;
                            return l.aa && l.j(I, -1), l.s(I, n, t, e, i);
                        }
                        return '';
                    }, l._supplementalDataIDCurrent = '', l._supplementalDataIDCurrentConsumed = {}, l._supplementalDataIDLast = '', l._supplementalDataIDLastConsumed = {}, l.getSupplementalDataID = function (t, e) {
                        !l._supplementalDataIDCurrent && !e && (l._supplementalDataIDCurrent = l.r(1));
                        var i = l._supplementalDataIDCurrent;
                        return l._supplementalDataIDLast && !l._supplementalDataIDLastConsumed[t] ? (i = l._supplementalDataIDLast, l._supplementalDataIDLastConsumed[t] = c) : i && (l._supplementalDataIDCurrentConsumed[t] && (l._supplementalDataIDLast = l._supplementalDataIDCurrent, l._supplementalDataIDLastConsumed = l._supplementalDataIDCurrentConsumed, l._supplementalDataIDCurrent = i = e ? '' : l.r(1), l._supplementalDataIDCurrentConsumed = {}), i && (l._supplementalDataIDCurrentConsumed[t] = c)), i;
                    }, n.OptOut = { GLOBAL: 'global' }, l.getOptOut = function (t, e) {
                        if (l.isAllowed()) {
                            var i = l.z('_setMarketingCloudFields');
                            return l.s(b, i.url, t, e, i);
                        }
                        return '';
                    }, l.isOptedOut = function (e, i, t) {
                        return l.isAllowed() ? (i || (i = n.OptOut.GLOBAL), (t = l.getOptOut(function (t) {
                            l.J(e, [t == n.OptOut.GLOBAL || 0 <= t.indexOf(i)]);
                        }, t)) ? t == n.OptOut.GLOBAL || 0 <= t.indexOf(i) : f) : u;
                    }, l.appendVisitorIDsTo = function (e) {
                        for (var t = S.Y, i = [
                                    [
                                        p,
                                        l.a(p)
                                    ],
                                    [
                                        C,
                                        l.a(C)
                                    ]
                                ], n = '', a = 0, r = i.length; a < r; a++) {
                            var o, s = (o = i[a])[0];
                            (o = o[1]) != f && o !== y && (n = n ? n += '|' : n, n += s + '=' + encodeURIComponent(o));
                        }
                        try {
                            return l.v(e, t, n);
                        } catch (t) {
                            return e;
                        }
                    };
                    var S = {
                        p: !!o.postMessage,
                        Ia: 1,
                        $: 86400000,
                        Y: 'adobe_mc',
                        u: /^[0-9a-fA-F\-]+$/
                    };
                    l.Db = S, l.la = {
                        postMessage: function (t, e, i) {
                            var n = 1;
                            e && (S.p ? i.postMessage(t, e.replace(/([^:]+:\/\/[^\/]+).*/, '$1')) : e && (i.location = e.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + t));
                        },
                        T: function (e, i) {
                            var t;
                            try {
                                S.p && (e && (t = function (t) {
                                    if ('string' == typeof i && t.origin !== i || '[object Function]' === Object.prototype.toString.call(i) && !1 === i(t.origin))
                                        return !1;
                                    e(t);
                                }), window.addEventListener ? window[e ? 'addEventListener' : 'removeEventListener']('message', t, !1) : window[e ? 'attachEvent' : 'detachEvent']('onmessage', t));
                            } catch (t) {
                            }
                        }
                    };
                    var O = {
                        M: s.addEventListener ? function (t, e, i) {
                            t.addEventListener(e, function (t) {
                                'function' == typeof i && i(t);
                            }, u);
                        } : s.attachEvent ? function (t, e, i) {
                            t.attachEvent('on' + e, function (t) {
                                'function' == typeof i && i(t);
                            });
                        } : void 0,
                        map: function (t, e) {
                            if (Array.prototype.map)
                                return t.map(e);
                            if (void 0 === t || t === f)
                                throw new TypeError();
                            var i = Object(t), n = i.length >>> 0;
                            if ('function' != typeof e)
                                throw new TypeError();
                            for (var a = Array(n), r = 0; r < n; r++)
                                r in i && (a[r] = e.call(e, i[r], r, i));
                            return a;
                        },
                        gb: function (t, e) {
                            return this.map(t, function (t) {
                                return encodeURIComponent(t);
                            }).join(e);
                        },
                        ub: function (t) {
                            var e = t.indexOf('#');
                            return 0 < e ? t.substr(e) : '';
                        },
                        lb: function (t) {
                            var e = t.indexOf('#');
                            return 0 < e ? t.substr(0, e) : t;
                        },
                        Ya: function (t, e, i) {
                            return t = t.split('&'), i = i != f ? i : t.length, t.splice(i, 0, e), t.join('&');
                        },
                        nb: function (t, e, i) {
                            return t !== C ? u : (e || (e = l.trackingServer), i || (i = l.trackingServerSecure), 'string' == typeof (t = l.loadSSL ? i : e) && t.length ? t.indexOf('2o7.net') < 0 && t.indexOf('omtrdc.net') < 0 : u);
                        },
                        ob: function (t) {
                            return Boolean(t && t === Object(t));
                        }
                    };
                    l.Jb = O;
                    var a, k, w = {
                            C: (a = 'none', k = c, 'undefined' != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ('withCredentials' in new XMLHttpRequest() ? a = 'XMLHttpRequest' : new Function('/*@cc_on return /^10/.test(@_jscript_version) @*/')() ? a = 'XMLHttpRequest' : 'undefined' != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (k = u), 0 < Object.prototype.toString.call(window.Ab).indexOf('Constructor') && (k = u)), {
                                D: a,
                                Mb: k
                            }),
                            ib: function () {
                                const $___old_07955b1a35617233 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                try {
                                    if ($___old_07955b1a35617233)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_1e14b11c183bc3de.XMLHttpRequest));
                                    return function () {
                                        return 'none' === this.C.D ? f : new window[this.C.D]();
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_07955b1a35617233)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_07955b1a35617233));
                                }
                            },
                            hb: function (a, t, e) {
                                var r = this;
                                t && (a.G = t);
                                try {
                                    var i = this.ib();
                                    i.open('get', a.m + '&ts=' + new Date().getTime(), c), 'XMLHttpRequest' === this.C.D && (i.withCredentials = c, i.timeout = l.loadTimeout, i.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), i.onreadystatechange = function () {
                                        if (4 === this.readyState && 200 === this.status)
                                            t: {
                                                var t;
                                                try {
                                                    if ((t = JSON.parse(this.responseText)) !== Object(t)) {
                                                        r.n(a, f, 'Response is not JSON');
                                                        break t;
                                                    }
                                                } catch (t) {
                                                    r.n(a, t, 'Error parsing response as JSON');
                                                    break t;
                                                }
                                                try {
                                                    for (var e = a.na, i = window, n = 0; n < e.length; n++)
                                                        i = i[e[n]];
                                                    i(t);
                                                } catch (t) {
                                                    r.n(a, t, 'Error forming callback function');
                                                }
                                            }
                                    }), i.onerror = function (t) {
                                        r.n(a, t, 'onerror');
                                    }, i.ontimeout = function (t) {
                                        r.n(a, t, 'ontimeout');
                                    }, i.send(), A.d[e] = {
                                        requestStart: A.o(),
                                        url: a.m,
                                        sa: i.timeout,
                                        qa: A.wa(),
                                        ra: 1
                                    }, l.ha.Da.push(a.m);
                                } catch (t) {
                                    this.n(a, t, 'try-catch');
                                }
                            },
                            n: function (t, e, i) {
                                l.CORSErrors.push({
                                    Nb: t,
                                    error: e,
                                    description: i
                                }), t.G && ('ontimeout' === i ? t.G(c) : t.G(u, t));
                            }
                        };
                    l.ja = w;
                    var M = {
                        Ka: 30000,
                        Z: 649,
                        Ha: u,
                        id: f,
                        S: [],
                        P: f,
                        va: function (t) {
                            if ('string' == typeof t)
                                return (t = t.split('/'))[0] + '//' + t[2];
                        },
                        g: f,
                        url: f,
                        jb: function () {
                            var t = 'http://fast.', e = '?d_nsid=' + l.idSyncContainerID + '#' + encodeURIComponent(s.location.href);
                            return this.g || (this.g = 'nosubdomainreturned'), l.loadSSL && (t = l.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'), t = t + this.g + '.demdex.net/dest5.html' + e, this.P = this.va(t), this.id = 'destination_publishing_iframe_' + this.g + '_' + l.idSyncContainerID, t;
                        },
                        ab: function () {
                            var t = '?d_nsid=' + l.idSyncContainerID + '#' + encodeURIComponent(s.location.href);
                            'string' == typeof l.K && l.K.length && (this.id = 'destination_publishing_iframe_' + new Date().getTime() + '_' + l.idSyncContainerID, this.P = this.va(l.K), this.url = l.K + t);
                        },
                        xa: f,
                        ta: u,
                        V: u,
                        F: f,
                        ac: f,
                        tb: f,
                        bc: f,
                        U: u,
                        H: [],
                        rb: [],
                        sb: [],
                        za: S.p ? 15 : 100,
                        Q: [],
                        pb: [],
                        oa: c,
                        Ca: u,
                        Ba: function () {
                            return !l.idSyncDisable3rdPartySyncing && (this.ta || l.Fb) && this.g && 'nosubdomainreturned' !== this.g && this.url && !this.V;
                        },
                        N: function () {
                            function t() {
                                (n = document.createElement('iframe')).sandbox = 'allow-scripts allow-same-origin', n.title = 'Adobe ID Syncing iFrame', n.id = i.id, n.style.cssText = 'display: none; width: 0; height: 0;', n.src = i.url, i.tb = c, e(), document.body.appendChild(n);
                            }
                            function e() {
                                O.M(n, 'load', function () {
                                    n.className = 'aamIframeLoaded', i.F = c, i.t();
                                });
                            }
                            this.V = c;
                            var i = this, n = document.getElementById(this.id);
                            n ? 'IFRAME' !== n.nodeName ? (this.id += '_2', t()) : 'aamIframeLoaded' !== n.className ? e() : (this.F = c, this.ya = n, this.t()) : t(), this.ya = n;
                        },
                        t: function (t) {
                            var e = this;
                            t === Object(t) && (this.Q.push(t), this.wb(t)), (this.Ca || !S.p || this.F) && this.Q.length && (this.I(this.Q.shift()), this.t()), !l.idSyncDisableSyncs && this.F && this.H.length && !this.U && (this.Ha || (this.Ha = c, setTimeout(function () {
                                e.za = S.p ? 15 : 150;
                            }, this.Ka)), this.U = c, this.Ea());
                        },
                        wb: function (t) {
                            var e, i, n;
                            if ((e = t.ibs) && e instanceof Array && (i = e.length))
                                for (t = 0; t < i; t++)
                                    (n = e[t]).syncOnPage && this.pa(n, '', 'syncOnPage');
                        },
                        I: function (t) {
                            var e, i, n, a, r, o = encodeURIComponent;
                            if ((e = t.ibs) && e instanceof Array && (i = e.length))
                                for (n = 0; n < i; n++)
                                    a = e[n], r = [
                                        o('ibs'),
                                        o(a.id || ''),
                                        o(a.tag || ''),
                                        O.gb(a.url || [], ','),
                                        o(a.ttl || ''),
                                        '',
                                        '',
                                        a.fireURLSync ? 'true' : 'false'
                                    ], a.syncOnPage || (this.oa ? this.ma(r.join('|')) : a.fireURLSync && this.pa(a, r.join('|')));
                            this.pb.push(t);
                        },
                        pa: function (t, e, i) {
                            var n = (i = 'syncOnPage' === i ? c : u) ? g : h;
                            l.f();
                            var a = l.a(n), r = u, o = u, s = Math.ceil(new Date().getTime() / S.$);
                            a ? (a = a.split('*'), r = (o = this.xb(a, t.id, s)).eb, o = o.fb, (!r || !o) && this.ua(i, t, e, a, n, s)) : (a = [], this.ua(i, t, e, a, n, s));
                        },
                        xb: function (t, e, i) {
                            var n, a, r, o = u, s = u;
                            for (a = 0; a < t.length; a++)
                                n = t[a], r = parseInt(n.split('-')[1], 10), n.match('^' + e + '-') ? (o = c, i < r ? s = c : (t.splice(a, 1), a--)) : r <= i && (t.splice(a, 1), a--);
                            return {
                                eb: o,
                                fb: s
                            };
                        },
                        qb: function (t) {
                            if (t.join('*').length > this.Z)
                                for (t.sort(function (t, e) {
                                        return parseInt(t.split('-')[1], 10) - parseInt(e.split('-')[1], 10);
                                    }); t.join('*').length > this.Z;)
                                    t.shift();
                        },
                        ua: function (t, e, i, n, d, a) {
                            var c = this;
                            if (t) {
                                if ('img' === e.tag) {
                                    var r, o, s;
                                    t = e.url, i = l.loadSSL ? 'https:' : 'http:';
                                    for (n = 0, r = t.length; n < r; n++) {
                                        o = t[n], s = /^\/\//.test(o);
                                        var u = new Image();
                                        O.M(u, 'load', function (r, o, s, u) {
                                            return function () {
                                                c.S[r] = f, l.f();
                                                var t, e, i, n, a = [];
                                                if (t = l.a(d))
                                                    for (e = 0, i = (t = t.split('*')).length; e < i; e++)
                                                        (n = t[e]).match('^' + o.id + '-') || a.push(n);
                                                c.Ga(a, o, s, u);
                                            };
                                        }(this.S.length, e, d, a)), u.src = (s ? i : '') + o, this.S.push(u);
                                    }
                                }
                            } else
                                this.ma(i), this.Ga(n, e, d, a);
                        },
                        ma: function (t) {
                            var e = encodeURIComponent;
                            this.H.push((l.Gb ? e('---destpub-debug---') : e('---destpub---')) + t);
                        },
                        Ga: function (t, e, i, n) {
                            t.push(e.id + '-' + (n + Math.ceil(e.ttl / 60 / 24))), this.qb(t), l.e(i, t.join('*'));
                        },
                        Ea: function () {
                            var t, e = this;
                            this.H.length ? (t = this.H.shift(), l.la.postMessage(t, this.url, this.ya.contentWindow), this.rb.push(t), setTimeout(function () {
                                e.Ea();
                            }, this.za)) : this.U = u;
                        },
                        T: function (t) {
                            var e = /^---destpub-to-parent---/;
                            'string' == typeof t && e.test(t) && ('canSetThirdPartyCookies' === (e = t.replace(e, '').split('|'))[0] && (this.oa = 'true' === e[1] ? c : u, this.Ca = c, this.t()), this.sb.push(t));
                        },
                        vb: function (t) {
                            (this.url === f || t.subdomain && 'nosubdomainreturned' === this.g) && (this.g = 'string' == typeof l.ka && l.ka.length ? l.ka : t.subdomain || '', this.url = this.jb()), t.ibs instanceof Array && t.ibs.length && (this.ta = c), this.Ba() && (l.idSyncAttachIframeOnWindowLoad ? (n.X || 'complete' === s.readyState || 'loaded' === s.readyState) && this.N() : this.Za()), 'function' == typeof l.idSyncIDCallResult ? l.idSyncIDCallResult(t) : this.t(t), 'function' == typeof l.idSyncAfterIDCallResult && l.idSyncAfterIDCallResult(t);
                        },
                        $a: function (t, e) {
                            return l.Hb || !t || e - t > S.Ia;
                        },
                        Za: function () {
                            var e = this;
                            !function t() {
                                e.V || (document.body ? e.N() : setTimeout(t, 30));
                            }();
                        }
                    };
                    l.Eb = M, l.timeoutMetricsLog = [];
                    var A = {
                        cb: window.performance && window.performance.timing ? 1 : 0,
                        Aa: window.performance && window.performance.timing ? window.performance.timing : f,
                        W: f,
                        O: f,
                        d: {},
                        R: [],
                        send: function (t) {
                            if (l.takeTimeoutMetrics && t === Object(t)) {
                                var e, i = [], n = encodeURIComponent;
                                for (e in t)
                                    t.hasOwnProperty(e) && i.push(n(e) + '=' + n(t[e]));
                                t = 'http' + (l.loadSSL ? 's' : '') + '://dpm.demdex.net/event?d_visid_ver=' + l.version + '&d_visid_stg_timeout=' + l.loadTimeout + '&' + i.join('&') + '&d_orgid=' + n(l.marketingCloudOrgID) + '&d_timingapi=' + this.cb + '&d_winload=' + this.kb() + '&d_ld=' + this.o(), new Image().src = t, l.timeoutMetricsLog.push(t);
                            }
                        },
                        kb: function () {
                            return this.O === f && (this.O = this.Aa ? this.W - this.Aa.navigationStart : this.W - n.bb), this.O;
                        },
                        o: function () {
                            return new Date().getTime();
                        },
                        I: function (t) {
                            var e = this.d[t], i = {};
                            i.d_visid_stg_timeout_captured = e.sa, i.d_visid_cors = e.ra, i.d_fieldgroup = t, i.d_settimeout_overriden = e.qa, e.timeout ? e.mb ? (i.d_visid_timedout = 1, i.d_visid_timeout = e.timeout - e.requestStart, i.d_visid_response = -1) : (i.d_visid_timedout = 'n/a', i.d_visid_timeout = 'n/a', i.d_visid_response = 'n/a') : (i.d_visid_timedout = 0, i.d_visid_timeout = -1, i.d_visid_response = e.zb - e.requestStart), i.d_visid_url = e.url, n.X ? this.send(i) : this.R.push(i), delete this.d[t];
                        },
                        yb: function () {
                            for (var t = 0, e = this.R.length; t < e; t++)
                                this.send(this.R[t]);
                        },
                        wa: function () {
                            return 'function' == typeof setTimeout.toString ? -1 < setTimeout.toString().indexOf('[native code]') ? 0 : 1 : -1;
                        }
                    };
                    l.Lb = A;
                    var T = {
                        isClientSideMarketingCloudVisitorID: f,
                        MCIDCallTimedOut: f,
                        AnalyticsIDCallTimedOut: f,
                        AAMIDCallTimedOut: f,
                        d: {},
                        Fa: function (t, e) {
                            switch (t) {
                            case d:
                                e === u ? this.MCIDCallTimedOut !== c && (this.MCIDCallTimedOut = u) : this.MCIDCallTimedOut = e;
                                break;
                            case v:
                                e === u ? this.AnalyticsIDCallTimedOut !== c && (this.AnalyticsIDCallTimedOut = u) : this.AnalyticsIDCallTimedOut = e;
                                break;
                            case D:
                                e === u ? this.AAMIDCallTimedOut !== c && (this.AAMIDCallTimedOut = u) : this.AAMIDCallTimedOut = e;
                            }
                        }
                    };
                    l.isClientSideMarketingCloudVisitorID = function () {
                        return T.isClientSideMarketingCloudVisitorID;
                    }, l.MCIDCallTimedOut = function () {
                        return T.MCIDCallTimedOut;
                    }, l.AnalyticsIDCallTimedOut = function () {
                        return T.AnalyticsIDCallTimedOut;
                    }, l.AAMIDCallTimedOut = function () {
                        return T.AAMIDCallTimedOut;
                    }, l.idSyncGetOnPageSyncInfo = function () {
                        return l.f(), l.a(g);
                    }, t.indexOf('@') < 0 && (t += '@AdobeOrg'), l.marketingCloudOrgID = t, l.cookieName = 'AMCV_' + t, l.sessionCookieName = 'AMCVS_' + t, l.cookieDomain = l.Pa(), l.cookieDomain == o.location.hostname && (l.cookieDomain = ''), l.loadSSL = 0 <= o.location.protocol.toLowerCase().indexOf('https'), l.loadTimeout = 30000, l.CORSErrors = [], l.marketingCloudServer = l.audienceManagerServer = 'dpm.demdex.net';
                    var L = {};
                    if (L[_] = c, L[I] = c, l.Ma(), e && 'object' == typeof e) {
                        for (var R in e)
                            !Object.prototype[R] && (l[R] = e[R]);
                        l.idSyncContainerID = l.idSyncContainerID || 0, l.f(), w = l.a(i), R = Math.ceil(new Date().getTime() / S.$), !l.idSyncDisableSyncs && M.$a(w, R) && (l.j(I, -1), l.e(i, R)), l.getMarketingCloudVisitorID(), l.getAudienceManagerLocationHint(), l.getAudienceManagerBlob(), l.Ta(l.serverState);
                    }
                    if (!l.idSyncDisableSyncs) {
                        M.ab(), O.M(window, 'load', function () {
                            n.X = c, A.W = A.o(), A.yb();
                            var t = M;
                            t.Ba() && t.N();
                        });
                        try {
                            l.la.T(function (t) {
                                M.T(t.data);
                            }, M.P);
                        } catch (t) {
                        }
                    }
                }.apply(this, arguments);
            } finally {
                if ($___old_950d9dc2bb736fb3)
                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_950d9dc2bb736fb3));
            }
        }
        Visitor.getInstance = function (t, e) {
            var i, n, a = window.s_c_il;
            if (t.indexOf('@') < 0 && (t += '@AdobeOrg'), a)
                for (n = 0; n < a.length; n++)
                    if ((i = a[n]) && 'Visitor' == i._c && i.marketingCloudOrgID == t)
                        return i;
            return new Visitor(t, e);
        }, function () {
            function t() {
                e.X = i;
            }
            var e = window.Visitor, i = e.La, n = e.Ja;
            i || (i = !0), n || (n = !1), window.addEventListener ? window.addEventListener('load', t) : window.attachEvent && window.attachEvent('onload', t), e.bb = new Date().getTime();
        }();
    }())
}