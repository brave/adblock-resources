{
    const $___mock_5681dcac222e7c62 = {};
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
    })($___mock_5681dcac222e7c62);
    const $___mock_a99706fad836ae13 = {};
    (exports => {
        'use strict';
        const fetch = async (resource, init = null) => {
            throw new TypeError('Failed to fetch');
        };
        exports.fetch = {
            configurable: true,
            enumerable: true,
            value: fetch,
            writable: true
        };
    })($___mock_a99706fad836ae13);
    (function () {
        trx = window.trx || {}, trx.runtime = function () {
            'use strict';
            trx.magicLinksEngine = null, trx.MagicLinks = class {
                static prepareDefaultSettings(e) {
                    return 'object' != typeof e.detection_rules && (e.detection_rules = {
                        auto: !0,
                        custom: [],
                        exclude_urls: [],
                        page_url_filter: ''
                    }), null == e.detection_rules.auto && (e.detection_rules.auto = !0), null == e.detection_rules.auto_networks && (e.detection_rules.auto_networks = {
                        amazon: !1,
                        ls: !0,
                        cj: !0,
                        sas: !1,
                        awin: !1,
                        pj: !1,
                        sl: !1,
                        vl: !1,
                        ir: !1,
                        td: !1,
                        wg: !1,
                        pt: !1,
                        al: !1,
                        at: !1,
                        tt: !1,
                        ho: !1,
                        tc: !1,
                        bol: !1,
                        afs: !1,
                        rv: !1,
                        wyf: !1,
                        ef: !1,
                        dc: !1,
                        dynamic: !1
                    }), e.detection_rules.custom instanceof Array || (e.detection_rules.custom = []), e.detection_rules.exclude_urls instanceof Array || (e.detection_rules.exclude_urls = []), null == e.detection_rules.page_url_filter && (e.detection_rules.page_url_filter = ''), null == e.detection_rules.amazon_no_append && (e.detection_rules.amazon_no_append = !1), 'object' != typeof e.features && (e.features = {}), null == e.features.append_referrer && (e.features.append_referrer = {
                        enabled: !0,
                        attr_name: 'referrer',
                        new_query_param: !1
                    }), null == e.features.asin_map && (e.features.asin_map = { enabled: !1 }), null == e.features.asin_tag && (e.features.asin_tag = { enabled: !1 }), null == e.features.wait_then_click && (e.features.wait_then_click = { enabled: !1 }), null == e.features.use_beacon && (e.features.use_beacon = { enabled: !1 }), null == e.features.observe && (e.features.observe = { enabled: !1 }), null == e.features.urlchange && (e.features.urlchange = { enabled: !1 }), null == e.features.iid_track && (e.features.iid_track = { enabled: !1 }), null == e.features.new_window && (e.features.new_window = { enabled: !1 }), null == e.features.attributes_forwarding && (e.features.attributes_forwarding = {
                        enabled: !0,
                        attributes: [
                            'utm_source',
                            'utm_campaign',
                            'utm_content',
                            'utm_medium',
                            'utm_term',
                            'gclid',
                            'fbclid'
                        ]
                    }), null == e.features.append_timing && (e.features.append_timing = {
                        enabled: !1,
                        t_load: !1,
                        t_clicked: !1,
                        t_toclick: !1,
                        new_query_param: !1
                    }), null == e.features.append_attributes && (e.features.append_attributes = {
                        enabled: !1,
                        attributes: ''
                    }), null == e.features.track_events && (e.features.track_events = {
                        enabled: !1,
                        pageview: !1,
                        clicks: !1,
                        props_map: {
                            xid: 'prop1',
                            link: 'prop2',
                            label: 'prop3',
                            referrer: 'prop4',
                            origin: 'prop5'
                        },
                        props_map_custom: []
                    }), null == e.features.auto_optimize_link && (e.features.auto_optimize_link = { enabled: !1 }), null == e.features.link_preview && (e.features.link_preview = {
                        enabled: !1,
                        show_icon: !1,
                        show_metadata: !1,
                        show_coupons: !1
                    }), null == e.features.shorten_extra_param && (e.features.shorten_extra_param = { enabled: !1 }), null == e.features.metadata && (e.features.metadata = {
                        enabled: !1,
                        selectors: ''
                    }), null == e.features.spot && (e.features.spot = {
                        enabled: !1,
                        link_rules: !1,
                        asin_rules: !1,
                        asin_per_page: !1,
                        direct_deals: !1
                    }), null == e.features.srs && (e.features.srs = { enabled: !1 }), e;
                }
                constructor(e) {
                    try {
                        null == e && (e = !0), null == t && (t = 'prod'), this.isInRunFunction = !1, this._paramsBuffer = {
                            attr_forwarding: {},
                            metadata: {},
                            timing: {},
                            urls: {},
                            attr_append: {},
                            page_trace: [],
                            custom_meta: {}
                        }, this._xids = {}, this._autoRun = e, this.init(e);
                    } catch (e) {
                        this._error(e, e.stack);
                    }
                }
                init() {
                    try {
                        if (this._onPageSettings = trx.magic_links_settings || {}, this._envSettings = {
                                'events_recording_env': 'discovery',
                                'events_recording_api': 'https://2uiyya80pg.execute-api.us-east-1.amazonaws.com/Prod',
                                'app_key': 'gsd65fgr0hgTTT',
                                'events_recording_iid': 'https://trx-hub.com'
                            }, this._serverSettings = {
                                'detection_rules': {
                                    'auto': 'true',
                                    'page_url_filter': '',
                                    'auto_networks': {
                                        'amazon': 'true',
                                        'awin': 'true',
                                        'cj': 'true',
                                        'dynamic': 'true',
                                        'ir': 'true',
                                        'ls': 'true',
                                        'sas': 'true',
                                        'sl': 'true',
                                        'pj': 'true',
                                        'td': 'true',
                                        'wg': 'true',
                                        'pt': 'true',
                                        'al': 'true',
                                        'at': 'false',
                                        'tt': 'false',
                                        'vg': 'true',
                                        'ho': 'false',
                                        'tc': 'false',
                                        'bol': 'false',
                                        'rv': 'false',
                                        'afs': 'false',
                                        'wyf': 'false',
                                        'ef': 'false',
                                        'dc': 'false'
                                    },
                                    'amazon_no_append': 'true'
                                },
                                'features': {
                                    'append_referrer': {
                                        'enabled': 'true',
                                        'attr_name': 'referrer'
                                    },
                                    'spot': {
                                        'enabled': 'true',
                                        'link_rules': 'true',
                                        'asin_rules': 'false',
                                        'asin_per_page': 'true',
                                        'direct_deals': 'false'
                                    },
                                    'asin_map': { 'enabled': 'false' },
                                    'asin_tag': {
                                        'enabled': 'false',
                                        'tags_required': '0'
                                    },
                                    'iid_track': { 'enabled': 'false' },
                                    'wait_then_click': { 'enabled': 'false' },
                                    'use_beacon': { 'enabled': 'false' },
                                    'observe': { 'enabled': 'false' },
                                    'urlchange': { 'enabled': 'false' },
                                    'new_window': { 'enabled': 'false' },
                                    'attributes_forwarding': {
                                        'enabled': 'true',
                                        'attributes': [
                                            'nl',
                                            'c1',
                                            'c2',
                                            'c4',
                                            'c5',
                                            'soc',
                                            'syc',
                                            'xp',
                                            'source',
                                            'medium',
                                            'campaign',
                                            'content',
                                            'utm_source',
                                            'utm_medium',
                                            'utm_campaign',
                                            'utm_content',
                                            'gclid',
                                            'fbclid'
                                        ]
                                    },
                                    'append_timing': {
                                        'enabled': 'false',
                                        't_load': 'false',
                                        't_clicked': 'false',
                                        't_toclick': 'false'
                                    },
                                    'append_attributes': {
                                        'enabled': 'false',
                                        'attributes': ''
                                    },
                                    'track_events': {
                                        'enabled': 'true',
                                        'pageview': 'false',
                                        'clicks': 'false',
                                        'analytics_code': '',
                                        'props_map': {
                                            'xid': 'prop1',
                                            'link': 'prop2',
                                            'label': 'prop3',
                                            'referrer': 'prop4',
                                            'origin': 'prop5'
                                        }
                                    },
                                    'link_preview': {
                                        'enabled': 'false',
                                        'show_icon': 'false',
                                        'show_metadata': 'false',
                                        'show_coupons': 'false'
                                    },
                                    'link_optimization': {
                                        'enabled': 'false',
                                        'shortening_extra_param': 'false'
                                    },
                                    'metadata': {
                                        'enabled': 'true',
                                        'selectors': 'PageUniqueID | js::mdManager.getParameter(\'UniqueID\')\nPageTitle | js::mdManager.getParameter(\'Title\')\nPublicationDate | js::mdManager.getParameter(\'OrigPubDate\')\nPageType | js::mdManager.getParameter(\'Type\')\nCategoryDspName | js::mdManager.getParameter(\'CategoryDspName\')\nPageName | js::mdManager.getParameter(\'Url\')\nTags | js::var tt=\'\';document.getElementsByClassName(\'o-Tags\')[0].querySelectorAll(\'a.a-Tag\').forEach(function(node) {tt =node.innerHTML \',\';});tt.substring(0, tt.length - 1);\nEditorialTracking|js::mdManager.getParameter(\'EditorialTracking\')'
                                    }
                                },
                                'dynamic_domains': [''],
                                'impact_domains': {
                                    '2cw9.net': 1,
                                    'w6fg.net': 1,
                                    '7ymy.net': 1,
                                    'zz6n.net': 1,
                                    'a4v3ci.net': 1,
                                    'dttq.net': 1,
                                    '5oih.net': 1,
                                    'njih.net': 1,
                                    'rfvk.net': 1,
                                    'rt8x.net': 1,
                                    '43k8.net': 1,
                                    '7eer.net': 1,
                                    'uzvs.net': 1,
                                    'u44t.net': 1,
                                    'pvxt.net': 1,
                                    'vaz6fn.net': 1,
                                    'ojrq.net': 1,
                                    'mvvx.net': 1,
                                    'yx69dc.net': 1,
                                    'awb5.net': 1,
                                    'k7qtpo.net': 1,
                                    '8odi.net': 1,
                                    'mp5l.net': 1,
                                    'evyy.net': 1,
                                    'fx3vf7.net': 1,
                                    '2npn3e.net': 1,
                                    'i9pljp.net': 1,
                                    'l9vx.net': 1,
                                    '75r4.net': 1,
                                    'ulnv.net': 1,
                                    '74rjtv.net': 1,
                                    'trw6mw.net': 1,
                                    'xwrk.net': 1,
                                    'dgdrgu.net': 1,
                                    'tnu8.net': 1,
                                    'pq2o.net': 1,
                                    'snlv.net': 1,
                                    'yfb7.net': 1,
                                    'vzck.net': 1,
                                    'glg9ob.net': 1,
                                    '5f77.net': 1,
                                    'sk2bvq.net': 1,
                                    'iln8.net': 1,
                                    '7tiv.net': 1,
                                    'o93x.net': 1,
                                    'yfh6ag.net': 1,
                                    'zfrcsk.net': 1,
                                    'kwpkyy.net': 1,
                                    '6cqhdo.net': 1,
                                    'fziv.net': 1,
                                    'f9tmep.net': 1,
                                    'bwa8.net': 1,
                                    '74az.net': 1,
                                    'gnv2.net': 1,
                                    'uidg.net': 1,
                                    'i3zp.net': 1,
                                    'ssxmnr.net': 1,
                                    'l9yg.net': 1,
                                    'ixmz.net': 1,
                                    'fmtgqt.net': 1,
                                    'uydo.net': 1,
                                    '2lsp.net': 1,
                                    'oie8.net': 1,
                                    '7mh5.net': 1,
                                    'tmfhgn.net': 1,
                                    'ngi2ba.net': 1,
                                    'bs6l.net': 1,
                                    'fdf2.net': 1,
                                    'ruqo.net': 1,
                                    'bts6.net': 1,
                                    'yxku6p.net': 1,
                                    'xhuc.net': 1,
                                    'b9i7.net': 1,
                                    'vzffua.net': 1,
                                    'oteh.net': 1,
                                    'uskn.net': 1,
                                    'kxyi.net': 1,
                                    'hyyc7q.net': 1,
                                    '5ad6.net': 1,
                                    'n76h.net': 1,
                                    'quvl.net': 1,
                                    'qflm.net': 1,
                                    '8hwt.net': 1,
                                    'ig9i.net': 1,
                                    'd2lsjo.net': 1,
                                    '9quv.net': 1,
                                    'rao4.net': 1,
                                    'xikq.net': 1,
                                    '72mu89.net': 1,
                                    'xrx2ci.net': 1,
                                    'q4ew.net': 1,
                                    'j4ib.net': 1,
                                    'wrrv.net': 1,
                                    'uqzq.net': 1,
                                    'mw46.net': 1,
                                    'z6vo.net': 1,
                                    'g39l.net': 1,
                                    '2det.net': 1,
                                    'ibfwsl.net': 1,
                                    'jtlo.net': 1,
                                    'dfjeo3.net': 1,
                                    'wqi6.net': 1,
                                    'jgpt48.net': 1,
                                    'eccsr4.net': 1,
                                    'myi4.net': 1,
                                    'j4df.net': 1,
                                    's7so.net': 1,
                                    'w2wxmz.net': 1,
                                    '64ud.net': 1,
                                    '6rfywi.net': 1,
                                    'rrmo.net': 1,
                                    '2m8f.net': 1,
                                    'fu4n.net': 1,
                                    'ryvx.net': 1,
                                    'mjs4.net': 1,
                                    'bn5x.net': 1,
                                    '7xde.net': 1,
                                    '5vju.net': 1,
                                    '7zd4df.net': 1,
                                    'xuok.net': 1,
                                    'o64jx9.net': 1,
                                    'am3t9s.net': 1,
                                    'w2t6.net': 1,
                                    'xr64.net': 1,
                                    'vayb.net': 1,
                                    'ygwk.net': 1,
                                    'ioym.net': 1,
                                    'dg6u.net': 1,
                                    'oyuv.net': 1,
                                    'otg8.net': 1,
                                    '8ujrgu.net': 1,
                                    '3qag.net': 1,
                                    '3f64ir.net': 1,
                                    'hrlo.net': 1,
                                    'fjbu.net': 1,
                                    'fqik.net': 1,
                                    '43wo.net': 1,
                                    'ncw6.net': 1,
                                    '9nz77o.net': 1,
                                    'xk3g.net': 1,
                                    'p7qb.net': 1,
                                    'mvqw.net': 1,
                                    'ntaf.net': 1,
                                    'iypa.net': 1,
                                    'rv5k.net': 1,
                                    'wjx7.net': 1,
                                    '5d3x.net': 1,
                                    'saq2.net': 1,
                                    'vegb.net': 1,
                                    'pxi6.net': 1,
                                    'b54k.net': 1,
                                    'njv3dp.net': 1,
                                    'nob9.net': 1,
                                    't8puue.net': 1,
                                    'briy.net': 1,
                                    'bpu9.net': 1,
                                    'voq9.net': 1,
                                    '8aog.net': 1,
                                    'dodxnr.net': 1,
                                    'igs4ds.net': 1,
                                    'w9v5.net': 1,
                                    'exgl.net': 1,
                                    '3uu8.net': 1,
                                    'ei7w.net': 1,
                                    'vjggsg.net': 1,
                                    '79ic8e.net': 1,
                                    '6noy.net': 1,
                                    'zrjdwn.net': 1,
                                    'vdcy.net': 1,
                                    '8ne3.net': 1,
                                    'tk2x2c.net': 1,
                                    '2xc8.net': 1,
                                    '3tvl.net': 1,
                                    'tkjf.net': 1,
                                    'r69o.net': 1,
                                    'o5kg.net': 1,
                                    '74wq.net': 1,
                                    'zc5a.net': 1,
                                    'e8i7.net': 1,
                                    'bvrd.net': 1,
                                    'r2oa.net': 1,
                                    'uisv.net': 1,
                                    'uqhv.net': 1,
                                    'y8uw.net': 1,
                                    'o67m.net': 1,
                                    'ydow.net': 1,
                                    'mlvy.net': 1,
                                    'liln.net': 1,
                                    'ga3c.net': 1,
                                    'szey.net': 1,
                                    '2lka.net': 1,
                                    'opfm.net': 1,
                                    'rhq9ml.net': 1,
                                    'jvam.net': 1,
                                    'uqog.net': 1,
                                    'ork2.net': 1,
                                    'nwh3qn.net': 1,
                                    'znqymu.net': 1,
                                    'wsslc4.net': 1,
                                    '8kt6.net': 1,
                                    '9pctbx.net': 1,
                                    '7voo.net': 1,
                                    'ifmu.net': 1,
                                    'fzsu.net': 1,
                                    '9j4c.net': 1,
                                    'ow29pp.net': 1,
                                    'sgur.net': 1,
                                    'icjj.net': 1,
                                    '27exom.net': 1,
                                    '6ywx.net': 1,
                                    'upvt.net': 1,
                                    '4paxeq.net': 1,
                                    'ue8cqz.net': 1,
                                    '2su64p.net': 1,
                                    'wo8g.net': 1,
                                    'lvuv.net': 1,
                                    '36c4.net': 1,
                                    'vzew.net': 1,
                                    'hmqldu.net': 1,
                                    'm768hc.net': 1,
                                    '7no9.net': 1,
                                    'xuvt.net': 1,
                                    'pfm4.net': 1,
                                    '3lki.net': 1,
                                    'p73z.net': 1,
                                    'i3f2.net': 1,
                                    '7isk.net': 1,
                                    '7z5k.net': 1,
                                    'brvi.net': 1,
                                    'fi2z.net': 1,
                                    'znvt.net': 1,
                                    'tpeipe.net': 1,
                                    'imlz.net': 1,
                                    'audw.net': 1,
                                    'rqu9.net': 1,
                                    'hjef.net': 1,
                                    'ln72.net': 1,
                                    'a5fp.net': 1,
                                    'juo2.net': 1,
                                    'ir2by2.net': 1,
                                    'tf77py.net': 1,
                                    'eszb.net': 1,
                                    '2gib.net': 1,
                                    'bop8.net': 1,
                                    'nsji.net': 1,
                                    'mpye.net': 1,
                                    'hs9x.net': 1,
                                    'vocq.net': 1,
                                    'msafflnk.net': 1,
                                    '8zwg.net': 1,
                                    '58dp.net': 1,
                                    '973t.net': 1,
                                    'hu6f.net': 1,
                                    '5kd8.net': 1,
                                    'ue7a.net': 1,
                                    'i8h2.net': 1,
                                    '7orgeq.net': 1,
                                    'mp4l.net': 1,
                                    '6wfgdb.net': 1,
                                    'ayxtyv.net': 1,
                                    'h4km.net': 1,
                                    'mxu9.net': 1,
                                    'w9iork.net': 1,
                                    'ftcv.net': 1,
                                    '6eld.net': 1,
                                    'atkw.net': 1,
                                    'nkwcmr.net': 1,
                                    'vwz6.net': 1,
                                    'xovt.net': 1,
                                    'lkze4s.net': 1,
                                    'uxsi.net': 1,
                                    'wkq9.net': 1,
                                    '8utb.net': 1,
                                    '2j9x.net': 1,
                                    'kk2kau.net': 1,
                                    'iy7a.net': 1,
                                    '2xje.net': 1,
                                    'vqi8.net': 1,
                                    'keof.net': 1,
                                    'givvml.net': 1,
                                    'x57o.net': 1,
                                    '33qw.net': 1,
                                    'nbq93e.net': 1,
                                    'tlir.net': 1,
                                    '7st3op.net': 1,
                                    'l3km.net': 1,
                                    'pb6g.net': 1,
                                    'hj2i.net': 1,
                                    '8f6i.net': 1,
                                    'tql5.net': 1,
                                    'otpb.net': 1,
                                    '2gfm.net': 1,
                                    'whij.net': 1,
                                    '9zpg.net': 1,
                                    '8mz3uu.net': 1,
                                    '8hslpj.net': 1,
                                    'nrku7u.net': 1,
                                    'xg6r.net': 1,
                                    'jyae.net': 1,
                                    'o3ae.net': 1,
                                    '9vn7kv.net': 1,
                                    'rw9xb6.net': 1,
                                    'z5dw.net': 1,
                                    'wk5q.net': 1,
                                    'e9jo.net': 1,
                                    'r7kg.net': 1,
                                    'uikc.net': 1,
                                    '258o.net': 1,
                                    'eyip.net': 1,
                                    'c9ftyd.net': 1,
                                    'a9yw.net': 1,
                                    'krg4.net': 1,
                                    'et7l.net': 1,
                                    'wd2f.net': 1,
                                    'nvaz.net': 1,
                                    'ozkewk.net': 1,
                                    '5sfo.net': 1,
                                    'qumg.net': 1,
                                    '5l5h.net': 1,
                                    'cwv7.net': 1,
                                    'qbt4.net': 1,
                                    'ytuz.net': 1,
                                    '3xvk.net': 1,
                                    'zlyuo6.net': 1,
                                    '58mq.net': 1,
                                    'z27l.net': 1,
                                    'iqoc.net': 1,
                                    'eqjw.net': 1,
                                    'dbapeb.net': 1,
                                    'hgphc2.net': 1,
                                    'wnbi.net': 1,
                                    'te8rfv.net': 1,
                                    'qyiv3c.net': 1,
                                    'jv6k.net': 1,
                                    '9rwv.net': 1,
                                    'zgkv.net': 1,
                                    'p5ld.net': 1,
                                    's4lle7.net': 1,
                                    'eqcm.net': 1,
                                    'wsktbf.net': 1,
                                    '7ema.net': 1,
                                    '2rch.net': 1,
                                    'y6mxrg.net': 1,
                                    'cmuw.net': 1,
                                    'jedg.net': 1,
                                    'wmempi.net': 1,
                                    'lmwjx3.net': 1,
                                    'zpn8dk.net': 1,
                                    'z724.net': 1,
                                    'zihf.net': 1,
                                    'i5md.net': 1,
                                    'yaub.net': 1,
                                    'syuh.net': 1,
                                    'htuy.net': 1,
                                    'pbj2.net': 1,
                                    'zvq6.net': 1,
                                    'rg35.net': 1,
                                    '8ibi.net': 1,
                                    'kbp968.net': 1,
                                    '5zd6.net': 1,
                                    'n72aat.net': 1,
                                    'aiy7.net': 1,
                                    'nnh2.net': 1,
                                    'z6rjha.net': 1,
                                    '7fdy.net': 1,
                                    '8bvm.net': 1,
                                    'qodh.net': 1,
                                    'jwpdsd.net': 1,
                                    'otegtm.net': 1,
                                    '2t23.net': 1,
                                    'i5em.net': 1,
                                    'xibx.net': 1,
                                    'xlwzq3.net': 1,
                                    'deg5.net': 1,
                                    '3anx.net': 1,
                                    '78cfvm.net': 1,
                                    '57ib.net': 1,
                                    '6dny.net': 1,
                                    'auhm.net': 1,
                                    'tm7566.net': 1,
                                    'tm7516.net': 1,
                                    'tm7569.net': 1,
                                    'tm7559.net': 1,
                                    'tm7560.net': 1,
                                    'tm7562.net': 1,
                                    'tm8534.net': 1,
                                    'lusg.net': 1,
                                    'bxvfun.net': 1,
                                    '8bga.net': 1,
                                    '22o6.net': 1,
                                    'ebml.net': 1,
                                    '9q66.net': 1,
                                    'i679.net': 1,
                                    'attfm2.net': 1,
                                    'ztk5.net': 1,
                                    'dubn.net': 1,
                                    'yuxg.net': 1,
                                    '2nm686.net': 1,
                                    'meqk.net': 1,
                                    'kd4a.net': 1,
                                    'e2rq.net': 1,
                                    'm43q4j.net': 1,
                                    'hblm3c.net': 1,
                                    'yvzx.net': 1,
                                    'vp6l.net': 1,
                                    'u97e.net': 1,
                                    '5rmr.net': 1,
                                    'qyov.net': 1,
                                    'yoxl.net': 1,
                                    'e54b.net': 1,
                                    'akum7z.net': 1,
                                    'hg7mxc.net': 1,
                                    'pdy5.net': 1,
                                    'aqpq.net': 1,
                                    'mivh.net': 1,
                                    'eqwh.net': 1,
                                    'vx83.net': 1,
                                    'vtdix3.net': 1,
                                    'xvtl.net': 1,
                                    'ulvh.net': 1,
                                    'cw3o.net': 1,
                                    'zvcr.net': 1,
                                    'eat8mo.net': 1,
                                    'ikkr9x.net': 1,
                                    '6x7g.net': 1,
                                    'bzi2vw.net': 1,
                                    '43a8.net': 1,
                                    'gfpv.net': 1,
                                    'sjv.io': 1,
                                    'pxf.io': 1,
                                    'affiliates.abebooks.com': 1,
                                    'go.corsair.com': 1,
                                    'go.gemvara.com': 1,
                                    'go.jewelry.com': 1,
                                    'go.web.plus.espn.com': 1,
                                    'goto.bodybuilding.com': 1,
                                    'goto.carters.com': 1,
                                    'goto.grocery.walmart.com': 1,
                                    'goto.kayosports.com.au': 1,
                                    'goto.target.com': 1,
                                    'goto.walmart.com': 1,
                                    'hpn.houzz.com': 1,
                                    'linkto.hrblock.com': 1,
                                    'partners.alamo.com': 1,
                                    'partners.enterprise.com': 1,
                                    'partners.hostgator.com': 1,
                                    'partners.hotwire.com': 1,
                                    'partners.nationalcar.com': 1,
                                    'refer.turo.com': 1,
                                    'tracking.maxcdn.com': 1,
                                    'tracking.stackpath.com': 1,
                                    'hpn.houzz.co.uk': 1,
                                    'partners.wantable.co': 1,
                                    'i284638.net': 1,
                                    'xayxet.net': 1,
                                    '7sb2uw.net': 1,
                                    'dcm9zy.net': 1,
                                    '6jxl.net': 1,
                                    'cfzu.net': 1,
                                    'i140643.net': 1,
                                    'i125364.net': 1,
                                    'i127288.net': 1,
                                    '8ocm68.net': 1,
                                    'jlud63.net': 1,
                                    'i312864.net': 1,
                                    'rv8crv.net': 1,
                                    'haujjd.net': 1,
                                    'qq3wj3.net': 1,
                                    '4hyab9.net': 1,
                                    'i308314.net': 1,
                                    'oet7.net': 1,
                                    'uym8.net': 1,
                                    'avo2.net': 1,
                                    'i279709.net': 1,
                                    'i139476.net': 1,
                                    '3tpfen.net': 1,
                                    'bbgqo9.net': 1,
                                    'i139049.net': 1,
                                    'nm3tqp.net': 1,
                                    'soyxmd.net': 1,
                                    'partner.canva.com': 1,
                                    '4xc4ep.net': 1,
                                    'frhi32.net': 1,
                                    'wrjfga.net': 1,
                                    'i206080.net': 1,
                                    '8s4u9r.net': 1,
                                    'fubo.tv': 1,
                                    '8u86.net': 1,
                                    'shrw9t.net': 1,
                                    'ouod.net': 1,
                                    'i157428.net': 1,
                                    'i274555.net': 1,
                                    'gqce.net': 1,
                                    'nhuie7.net': 1,
                                    'i310051.net': 1,
                                    'i351729.net': 1,
                                    'i181536.net': 1,
                                    'xyibsh.net': 1,
                                    'i326295.net': 1,
                                    'obak77.net': 1,
                                    '7w7o67.net': 1,
                                    'i206938.net': 1,
                                    'zvvq7p.net': 1,
                                    'oloiyb.net': 1,
                                    'wvr2.net': 1,
                                    '8rh8hm.net': 1,
                                    'i276600.net': 1,
                                    'i358707.net': 1,
                                    'd67ag4.net': 1,
                                    'magpmk.net': 1,
                                    'i7cdw9.net': 1,
                                    'i114090.net': 1,
                                    'ubertrk.com': 1,
                                    'i240138.net': 1,
                                    '7ufqwl.net': 1,
                                    'fdcm73.net': 1,
                                    'n5ka.net': 1,
                                    'q77h.net': 1,
                                    'goto.bluenile.com': 1,
                                    'bodybuilding.com': 1,
                                    'ayph.net': 1,
                                    'pvzi.net': 1,
                                    '35p2.net': 1,
                                    'cezg3w.net': 1,
                                    'i294747.net': 1,
                                    'ml6pmo.net': 1,
                                    'i200065.net': 1,
                                    'k77v.net': 1,
                                    'l49yho.net': 1,
                                    'i301580.net': 1,
                                    'lf49oc.net': 1,
                                    'i242740.net': 1,
                                    'i142493.net': 1,
                                    'zvbf.net': 1,
                                    'risj.net': 1,
                                    'partners.inmotionhosting.com': 1,
                                    'fum2sp.net': 1,
                                    'av4d.net': 1,
                                    'i240196.net': 1,
                                    'i134524.net': 1,
                                    'i263265.net': 1,
                                    'i8epma.net': 1,
                                    'ihfo.net': 1,
                                    'i209368.net': 1,
                                    'oedf.net': 1,
                                    'i6xjt2.net': 1,
                                    'i328067.net': 1,
                                    'i146980.net': 1,
                                    'idgz2n.net': 1,
                                    'drn3.net': 1,
                                    'i305175.net': 1,
                                    'i271380.net': 1,
                                    'vxca.net': 1,
                                    'c3me6x.net': 1,
                                    'i317579.net': 1,
                                    'iyhh.net': 1,
                                    'wgn3fr.net': 1,
                                    'vthnbx.net': 1,
                                    'i277339.net': 1,
                                    'ifgza3.net': 1,
                                    'llbyf9.net': 1,
                                    'c5l5.net': 1,
                                    'i263671.net': 1,
                                    '4fq8.net': 1,
                                    'blihtq.net': 1,
                                    'rjnwm7.net': 1,
                                    '43zz.net': 1,
                                    'i275503.net': 1,
                                    'i276271.net': 1,
                                    '2gl34e.net': 1,
                                    'i206969.net': 1,
                                    'i303683.net': 1,
                                    'hbbswr.net': 1,
                                    'ewrvdi.net': 1,
                                    'hq6ajo.net': 1,
                                    'kmlj9i.net': 1,
                                    'goto.americanexpress.com': 1,
                                    'hw4zyk.net': 1,
                                    '4ok7ht.net': 1,
                                    'i179050.net': 1,
                                    'wmsyr7.net': 1,
                                    'a6gkwq.net': 1,
                                    'i257289.net': 1,
                                    '4tqiav.net': 1,
                                    'i203032.net': 1,
                                    'ie8t3j.net': 1,
                                    'xr2bd6.net': 1,
                                    'i286093.net': 1,
                                    'ustnul.net': 1,
                                    'uewp.net': 1,
                                    'nd8t.net': 1,
                                    'txuqk6.net': 1,
                                    'xpfo.net': 1,
                                    '8x7ctf.net': 1,
                                    'i130883.net': 1,
                                    'i295461.net': 1,
                                    'i294432.net': 1,
                                    't7c9v8.net': 1,
                                    'chx3kt.net': 1,
                                    'i297327.net': 1,
                                    'c38gzp.net': 1,
                                    'i123888.net': 1,
                                    'i246982.net': 1,
                                    'i148866.net': 1,
                                    'gcc3.net': 1,
                                    'ver28r.net': 1,
                                    'xkpq.net': 1,
                                    'xkri.net': 1,
                                    '9yde.net': 1,
                                    'i134784.net': 1,
                                    'xhtgk3.net': 1,
                                    'hv8ceq.net': 1,
                                    '77jaha.net': 1,
                                    '9u2rlz.net': 1,
                                    'uztnuq.net': 1,
                                    'mkr3.net': 1,
                                    '642pbb.net': 1,
                                    '2xkn.net': 1,
                                    'qk4r.net': 1,
                                    'gfko.net': 1,
                                    'mno8.net': 1,
                                    'znhhcm.net': 1,
                                    'iybsj3.net': 1,
                                    'aht6xo.net': 1,
                                    '8zaeu3.net': 1,
                                    'kjorbe.net': 1,
                                    'sfe5.net': 1,
                                    'i299105.net': 1,
                                    '6uu72h.net': 1,
                                    '4g9yrz.net': 1,
                                    '1.envato.market': 1,
                                    '4drrzr.net': 1,
                                    'c3nu2i.net': 1,
                                    'vs9au6.net': 1,
                                    'tdndqm.net': 1,
                                    'i339540.net': 1,
                                    'i285710.net': 1,
                                    'i250869.net': 1,
                                    '775j.net': 1,
                                    '7q8j.net': 1,
                                    '83ckgt.net': 1,
                                    'i300907.net': 1,
                                    'qn6r.net': 1,
                                    'p8mc.net': 1,
                                    'lgkftb.net': 1,
                                    'i334637.net': 1,
                                    'i205484.net': 1,
                                    'ldw66v.net': 1,
                                    'aqp4qa.net': 1,
                                    'i358993.net': 1,
                                    'i168918.net': 1,
                                    'hnyj8s.net': 1,
                                    '7qto.net': 1,
                                    'i121497.net': 1,
                                    'mrlph3.net': 1,
                                    'fhsxpf.net': 1,
                                    'npfrrw.net': 1,
                                    'i116782.net': 1,
                                    'u7lr6p.net': 1,
                                    '648q.net': 1,
                                    'tbthfv.net': 1,
                                    'i116503.net': 1,
                                    'uqrxu7.net': 1,
                                    'i302106.net': 1,
                                    'i183635.net': 1,
                                    'pa4kxy.net': 1,
                                    '3obyns.net': 1,
                                    'i210675.net': 1,
                                    'xb398u.net': 1,
                                    'i276400.net': 1,
                                    'fb8d.net': 1,
                                    'kbasqv.net': 1,
                                    'i189637.net': 1,
                                    'i190936.net': 1,
                                    'i140070.net': 1,
                                    'i353150.net': 1,
                                    't2bw9u.net': 1,
                                    'vvtnn9.net': 1,
                                    'p3oc.net': 1,
                                    'g6gdil.net': 1,
                                    'i213011.net': 1,
                                    'ule4b9.net': 1,
                                    'qy67zi.net': 1,
                                    '8zgmnp.net': 1,
                                    'wxc9hm.net': 1,
                                    'bueme2.net': 1,
                                    'wcmu8e.net': 1,
                                    'i260660.net': 1,
                                    '2ygtwc.net': 1,
                                    'i122908.net': 1,
                                    '74tzgq.net': 1,
                                    'e4wb.net': 1,
                                    '5nfc.net': 1,
                                    'zafxzt.net': 1,
                                    'e9ppfh.net': 1,
                                    'tv2h87.net': 1,
                                    'nkygzf.net': 1,
                                    'i108736.net': 1,
                                    'i163678.net': 1,
                                    'i144304.net': 1,
                                    'f6rcao.net': 1,
                                    '9yoxzr.net': 1,
                                    'erik73.net': 1,
                                    'r37x9j.net': 1,
                                    'ng4cgr.net': 1,
                                    '8v4lqg.net': 1,
                                    'o7n83a.net': 1,
                                    'i261477.net': 1,
                                    'm4ibck.net': 1,
                                    '74xz8u.net': 1,
                                    'i169060.net': 1,
                                    'i117711.net': 1,
                                    'epvitm.net': 1,
                                    'puasq9.net': 1,
                                    'wf373c.net': 1,
                                    'gyuyee.net': 1,
                                    'pkpakz.net': 1,
                                    'i340849.net': 1,
                                    'i344083.net': 1,
                                    'i203761.net': 1,
                                    'i270719.net': 1,
                                    'vwli.net': 1,
                                    'i295768.net': 1,
                                    'i359245.net': 1,
                                    'i258711.net': 1,
                                    'rvgu.net': 1,
                                    'mwztt8.net': 1,
                                    'elfm.net': 1,
                                    'eyjo.net': 1,
                                    'gqco.net': 1,
                                    'hmxg.net': 1,
                                    'ijrn.net': 1,
                                    'jewn.net': 1,
                                    'tzva.net': 1,
                                    'wfraqy.net': 1,
                                    'dne9je.net': 1,
                                    '4byfvk.net': 1,
                                    'i181990.net': 1,
                                    'xq2wid.net': 1,
                                    '7oyhzp.net': 1,
                                    'aydjxz.net': 1,
                                    'i331371.net': 1,
                                    'ffxwxg.net': 1,
                                    'i363662.net': 1,
                                    'obbk.net': 1,
                                    'fgjaok.net': 1,
                                    'h382za.net': 1,
                                    'i113075.net': 1,
                                    'i130297.net': 1,
                                    'a49pb4.net': 1,
                                    '8kpa2n.net': 1,
                                    'i128439.net': 1,
                                    'i326837.net': 1,
                                    'w27s.net': 1,
                                    'gtlppj.net': 1,
                                    'i104546.net': 1,
                                    'go.silpada.com': 1,
                                    'i160067.net': 1,
                                    'gvhb.net': 1,
                                    '8lvxaf.net': 1,
                                    'i191769.net': 1,
                                    'awv4zz.net': 1,
                                    'gtlptb.net': 1,
                                    '7ck3j6.net': 1,
                                    'w7ma.net': 1,
                                    'j8ujgp.net': 1,
                                    'c2ukkg.net': 1,
                                    'u4prjd.net': 1,
                                    't2nfq3.net': 1,
                                    'i317572.net': 1,
                                    'i246054.net': 1,
                                    'woc3yh.net': 1,
                                    'zytd7d.net': 1,
                                    'jpzeir.net': 1,
                                    'li9jiy.net': 1,
                                    'i141006.net': 1,
                                    'i141602.net': 1,
                                    'mzte.net': 1,
                                    'vz7pkt.net': 1,
                                    'yardaz.net': 1,
                                    'a49tr6.net': 1,
                                    'tkl68z.net': 1,
                                    'i298770.net': 1,
                                    '2uf4ta.net': 1,
                                    'i156748.net': 1,
                                    'jmx223.net': 1,
                                    'nqn6.net': 1,
                                    'n72y7a.net': 1,
                                    'i357552.net': 1,
                                    'i274396.net': 1,
                                    'vdvm.net': 1,
                                    '8n4773.net': 1,
                                    'btyhsg.net': 1,
                                    'g7ix2j.net': 1,
                                    '4qxjn9.net': 1,
                                    'vfjm.net': 1,
                                    'nrlq2m.net': 1,
                                    'wyfx2f.net': 1,
                                    '4emhls.net': 1,
                                    'ovon4f.net': 1,
                                    '2rcf97.net': 1,
                                    'krym8q.net': 1
                                }
                            }, null == this._envSettings.events_recording_env && (this._envSettings.events_recording_env = 'prod'), this._embedUrlToken = 'FR-EMBEDDED-RF', this._delimiter1 = '|', this._delimiter2 = '~', this._delimiter3 = '%40%40', this._delimiter4 = '-', this._logPrefix = 'FunnelRelay:: ', this._loadTime = Date.now(), this._links = [], this._links_unique = {}, this._customLinks = new Map(), this._report = {}, this._exclude_urls_regex = [], this._iframed = window.self !== window.top, !0 === this._iframed && void 0 !== document.referrer && '' !== document.referrer && (trx.source = document.referrer), this._scriptEm = document.getElementById('funnel-relay-installer'), null != this._scriptEm) {
                            if (!this._scriptEm.hasAttribute('data-property-id') || !this._scriptEm.hasAttribute('data-customer-id') || this._isEmpty(this._scriptEm.hasAttribute('data-property-id')) || this._isEmpty(this._scriptEm.hasAttribute('data-customer-id')))
                                return void this._error('Missing one of the mandatory script attributes \'data-customer-id\' and/or \'data-property-id\'');
                            this._customerId = this._scriptEm.getAttribute('data-customer-id'), this._propertyId = this._scriptEm.getAttribute('data-property-id'), this._isSimulator = this._scriptEm.hasAttribute('data-simulator');
                        } else {
                            if (!window.trxFrTag)
                                return void this._error('Installation script is missing  id="funnel-relay-installer" attribute. Funnel Relay will not run');
                            this._customerId = window.trxFrCustomerId, this._propertyId = window.trxFrPropertyId, this._isSimulator = !1;
                        }
                        this._wait_then_click = !1, this._wait_then_click = /iPad|iPhone|iPod/.test(navigator.platform || ''), 0 == this._wait_then_click && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.wait_then_click && !0 === this._asBoolean(this._serverSettings.features.wait_then_click.enabled) && (this._wait_then_click = !0), this._new_window = !1, 0 == this._new_window && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.new_window && !0 === this._asBoolean(this._serverSettings.features.new_window.enabled) && (this._new_window = !0), this._iid_track = !1, 0 == this._iid_track && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.iid_track && !0 === this._asBoolean(this._serverSettings.features.iid_track.enabled) && (this._iid_track = !0), this._asin_map = !1, 0 == this._asin_map && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.asin_map && !0 === this._asBoolean(this._serverSettings.features.asin_map.enabled) && (this._asin_map = !0), this._asin_tag = !1, 0 == this._asin_tag && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.asin_tag && !0 === this._asBoolean(this._serverSettings.features.asin_tag.enabled) && (this._asin_tag = !0), this._use_beacon = !1, 0 == this._use_beacon && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.use_beacon && !0 === this._asBoolean(this._serverSettings.features.use_beacon.enabled) && (this._use_beacon = !0), void 0 !== trx.amp_redirect && 1 == trx.amp_redirect ? this.ampRedirectNow() : (this._prepareSettings(), this._prepareExcludeRegExp(), this._autoRun && this.run(), this.retransmit_sotrage_items(), this._observe = !1, 0 == this._observe && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.observe && !0 === this._asBoolean(this._serverSettings.features.observe.enabled) && (this._observe = !0), this._observe && this.observe(), this._url_change = !1, 0 == this._url_change && void 0 !== this._serverSettings.features && void 0 !== this._serverSettings.features.urlchange && !0 === this._asBoolean(this._serverSettings.features.urlchange.enabled) && (this._url_change = !0), void 0 == trx.his && this._url_change && (trx.his = !0, this._debug('bind location change!'), history.pushState = (e => {
                            return function t() {
                                var i = e.apply(this, arguments);
                                return window.dispatchEvent(new Event('pushstate')), window.dispatchEvent(new Event('locationchange')), i;
                            };
                        })(history.pushState), history.replaceState = (e => {
                            return function t() {
                                var i = e.apply(this, arguments);
                                return window.dispatchEvent(new Event('replacestate')), window.dispatchEvent(new Event('locationchange')), i;
                            };
                        })(history.replaceState), window.addEventListener('popstate', () => {
                            window.dispatchEvent(new Event('locationchange'));
                        }), window.addEventListener('locationchange', e => {
                            this._debug('location: ' + document.location + ', state: ' + JSON.stringify(e.state)), this._runFeatures(!0);
                        })));
                    } catch (e) {
                        console.error('Magic Links \'init\' procedure fail! Details: ' + e), e.stack && console.error(e.stack);
                    }
                }
                observe() {
                    if (void 0 === trx.observer) {
                        var e = 0, t = {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            };
                        window.MutationObserver && (trx.observer = new MutationObserver(function (t) {
                            e > 1 || 1 == (e += 1) && setTimeout(function () {
                                trx.magicLinksSimulator && (this._links = []), this._debug('Rerun...'), this.run(), e = 0;
                            }.bind(this), 3000);
                        }.bind(this)), trx.observer.observe(document.body, t));
                    }
                }
                retransmitlog(e) {
                    let t = this._envSettings.events_recording_api + '/log', i = {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: { 'Content-Type': 'application/json' },
                            redirect: 'follow',
                            referrer: '*client',
                            body: e
                        };
                    return navigator.sendBeacon && this._use_beacon ? navigator.sendBeacon(t, e) : fetch(t, i).then(t => {
                        if (t.ok) {
                            let i = 'Write to events-recording service. Body:\n' + e;
                            return this._isSimulator && this._log(i), this._debug(i), t.json();
                        }
                        this._log('Fail to write event data. HTTP error, status = ' + t.status);
                    }).then(e => {
                        e && e.message && this._log(e.message);
                    }).catch(e => {
                        this._log(e);
                    });
                }
                retransmit(e) {
                    let t = this._envSettings.events_recording_api + '/write', i = {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: { 'Content-Type': 'application/json' },
                            redirect: 'follow',
                            referrer: '*client',
                            body: e
                        };
                    return navigator.sendBeacon && this._use_beacon ? navigator.sendBeacon(t, e) : fetch(t, i).then(t => {
                        if (t.ok) {
                            let i = 'Write to events-recording service. Body:\n' + e;
                            return this._isSimulator && this._log(i), this._debug(i), t.json();
                        }
                        this._log('Fail to write event data. HTTP error, status = ' + t.status);
                    }).then(e => {
                        e && e.message && this._log(e.message);
                    }).catch(e => {
                        this._log(e);
                    });
                }
                retransmit_sotrage_items() {
                    const $___old_27ada83bfbbd7992 = {}.constructor.getOwnPropertyDescriptor(window, 'Storage'), $___old_a3c3b03adad7e83b = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_27ada83bfbbd7992)
                            ({}.constructor.defineProperty(window, 'Storage', $___mock_5681dcac222e7c62.Storage));
                        if ($___old_a3c3b03adad7e83b)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_5681dcac222e7c62.localStorage));
                        return function () {
                            try {
                                if ('undefined' != typeof Storage) {
                                    let e = '';
                                    for (let e = 0; e < localStorage.length; e++) {
                                        let t = localStorage.key(e);
                                        if (t.startsWith('fr_click_')) {
                                            let e = localStorage.getItem(t);
                                            this.retransmit(e), localStorage.removeItem(t);
                                        } else if (t.startsWith('fr_log_')) {
                                            let e = localStorage.getItem(t);
                                            this.retransmitlog(e), localStorage.removeItem(t);
                                        }
                                    }
                                }
                            } catch (e) {
                                this._debug(e);
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_27ada83bfbbd7992)
                            ({}.constructor.defineProperty(window, 'Storage', $___old_27ada83bfbbd7992));
                        if ($___old_a3c3b03adad7e83b)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_a3c3b03adad7e83b));
                    }
                }
                parseQueryString(e) {
                    var t = {}, i, r, s, n;
                    for (s = 0, n = (i = e.split('&')).length; s < n; s++)
                        (r = i[s].split('='))[0] = r[0].replace('?', ''), t[r[0]] = r[1];
                    return t;
                }
                ampRedirectNow() {
                    this.targetUrl = null;
                    let e = this.parseQueryString(location.search);
                    if (!e.anchor_href)
                        return;
                    this.targetUrl = e.anchor_href;
                    let t = document.getElementById('fr-link'), i;
                    if (t.href = decodeURIComponent(this.targetUrl), e.source && (trx.source = decodeURIComponent(e.source)), e.referrer && (trx.referrer = decodeURIComponent(e.referrer), window.history.length > 0)) {
                        var r = window.history.pop();
                        console.log(r);
                    }
                    this._prepareSettings(), this._prepareExcludeRegExp(), this.run(), 0 === this._links.length && (location.href = t.href), this._collectClickTimeParams(), this._addMetadataFromRequest(e), this._writeDataToEventsService(this._links[0], 'AMP').then(() => {
                        t.setAttribute('data-written', 'true'), t.click();
                    });
                }
                _addMetadataFromRequest(e) {
                    if (void 0 !== this._settings.features && void 0 !== this._settings.features.metadata) {
                        let t = this._settings.features.metadata;
                        if (this._asBoolean(t.enabled) && !this._isEmpty(t.selectors)) {
                            let i, r, s, n = t.selectors.split('\n');
                            for (let t = 0; t < n.length; t++)
                                try {
                                    let s = n[t];
                                    if (this._isEmpty(s))
                                        this._log('Ignoring empty line in metadata settings.');
                                    else {
                                        let t = s.split('|');
                                        if (t.length > 1) {
                                            if (i = t[0].trim(), 0 === (r = t[1].trim()).length)
                                                continue;
                                            void 0 === e[i] || this._isEmpty(e[i]) || (this._paramsBuffer.metadata[i] = e[i]);
                                        } else
                                            this._log('Invalid metadata line. Line must have name and Xpath value in this format: name | xpath ');
                                    }
                                } catch (e) {
                                    this._log(e);
                                }
                        }
                    }
                }
                get onPageSettings() {
                    return this._onPageSettings;
                }
                get serverSettings() {
                    return this._serverSettings.hasOwnProperty('SETTINGS_PLACEHOLDER') ? {} : this._serverSettings;
                }
                get paramsBuffer() {
                    return this._paramsBuffer;
                }
                static renderLinkPreview(e, t) {
                    let i = document.querySelector('iframe[data-ml-preview="' + e + '"]');
                    if (null != i)
                        return void i.parentNode.removeChild(i);
                    let r = document.querySelector('a[data-ml-id="' + e + '"]');
                    if (null != r) {
                        let t = document.createElement('iframe');
                        t.setAttribute('data-ml-preview', e), t.setAttribute('scrolling', 'no'), t.setAttribute('frameborder', '0'), t.style.borderStyle = 'solid', t.style.borderWidth = '2px', t.style.borderColor = 'grey', t.style.borderRadius = '3px', t.style.position = 'absolute', t.style.width = '120px', t.style.height = '90px', t.style.background = '#fff';
                        let i = document.documentElement, s = r.getBoundingClientRect();
                        t.style.top = s.top + (window.pageYOffset - i.clientTop) - 100 + 'px', t.style.left = s.left + (window.pageXOffset - i.clientLeft) + (s.width - 60) + 'px', document.body.appendChild(t);
                        let n = t.contentWindow || t.contentDocument;
                        n.document && (n = n.document);
                        let a = n.createElement('img'), o = 'http://images.shrinktheweb.com/xino.php?stwembed=1&stwaccesskeyid=4abc115f8a632c5&stwsize=120x90&stwurl=' + r.href;
                        a.setAttribute('src', o), a.style.width = '100%', a.style.height = 'auto', n.body.appendChild(a), n.body.style.padding = '1px';
                    }
                    t.stopImmediatePropagation();
                }
                run() {
                    if (this.isInRunFunction)
                        this._debug('Already in run function.');
                    else {
                        this.isInRunFunction = !0;
                        try {
                            if (this._isEmpty(this._envSettings.events_recording_api))
                                return void this._error('Missing environment settings. Check that you setup $ENV_SETTINGS in my.cfg.php and that \'events_recording_api\' is set there!');
                            if (!this._checkPageUrlMatch())
                                return;
                            if (document.links.length > 0)
                                for (let e = 0; e < document.links.length; e++) {
                                    let t = document.links[e];
                                    if (trx.magicLinksSimulator) {
                                        let e = t.getAttribute('data-orig-url');
                                        this._isEmpty(e) || (t.href = e), t.removeAttribute('data-ml-dynamic-type'), t.removeAttribute('data-ml-dynamic'), t.removeAttribute('data-ml-id'), t.removeAttribute('data-xid'), t.removeAttribute('data-ml');
                                    }
                                    t.hasAttribute('data-skimlinks-tracking') && t.setAttribute('data-skimlinks-tracking', this._cleanupXid(t.getAttribute('data-skimlinks-tracking')));
                                }
                            this._detectLinks(), this._disbaleLinks(), this._links.length > 0 && (this._appendUUID(), this._runFeatures()), (this._asin_map || this._asin_tag) && this._asinMapCall(), this._logPageTrace(), this._debug('Links count ' + this._links.length);
                            for (let e = 0; e < this._links.length; e++) {
                                let t = this._links[e];
                                t.info.dynamic || t.info.disable || (t.info.embedded ? t.anchor.href = t.info.wrapping_url.replace(this._embedUrlToken, encodeURIComponent(t.info.url)) : void 0 !== t.info.selector_attribute ? t.anchor[t.info.selector_attribute] = t.info.url : t.anchor.href = t.info.url);
                            }
                            null != r && 'true' === r.getAttribute('data-report') && this._postReport(), void 0 !== trx.SpotClient && (trx.spotEngine = new trx.SpotClient(this), trx.spotEngine.start()), this._iid_track && this._updateIID();
                        } catch (e) {
                            this._error('\'run\' procedure fail! Details: ' + e, e.stack), this.isInRunFunction = !1;
                        }
                        this.isInRunFunction = !1;
                    }
                }
                _asinMapCall() {
                    let e = this._customerId.split('_');
                    if (this._envSettings.asin_map_api && trx.LZString && trx.md5 && e.length > 1) {
                        let i = e[e.length - 1], r = window.location.href, s = Object.keys(this._prepareAnchorASIN()).sort(), n = [
                                this._envSettings.asin_map_api,
                                i,
                                '/',
                                trx.md5(r + s.join(',')),
                                '?client=' + e[0]
                            ];
                        this._asin_tag && n.push('&tags=', '1');
                        var t = {
                            method: 'GET',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            redirect: 'follow',
                            referrer: '*client'
                        };
                        this._iframed && (t.referrer = location.href), fetch(n.join('') + '&data=' + trx.LZString.compressToEncodedURIComponent(JSON.stringify({
                            url: r,
                            asin: s
                        })), t).then(e => {
                            e.text().then(e => {
                            });
                        });
                    }
                }
                _prepareAnchorASIN() {
                    let e = {};
                    for (let t = 0; t < document.links.length; t++) {
                        let i = document.links[t], r = i.href, s = i.getAttribute('data-orig-url'), n;
                        if (this._isEmpty(s) || (r = s), 'amazon' === this._detectKnownAffiliateLink(r, {})) {
                            let t = this._findAsin(r);
                            null !== t && (void 0 == e[t] && (e[t] = []), e[t].push(i));
                        }
                    }
                    return e;
                }
                _updateIID() {
                    var e = !1;
                    if (void 0 === trx.iid && (e = !0, trx.iid = this._generateUUID().replace('fr', 'iid')), void 0 !== trx.LZString && void 0 !== this._envSettings.events_recording_iid) {
                        if (e) {
                            let e = this._paramsBuffer;
                            if (e.client_time = new Date().toISOString(), e.page_title = document.title, e.iid = trx.iid, e.event_type = 'impression', void 0 === e.customer_id) {
                                e.cidp1 = e.customer_id = this._customerId;
                                const t = this._paramsBuffer.customer_id.split('_');
                                if (-1 !== e.customer_id.indexOf('_')) {
                                    const t = e.customer_id.split('_');
                                    if (t.length > 2) {
                                        let i = t.slice(0, t.length - 1);
                                        e.cidp1 = i.join('_'), e.cidp2 = t[t.length - 1];
                                    }
                                }
                            }
                            var t = JSON.stringify(e), i = trx.LZString.compressToEncodedURIComponent(t);
                            this._debug('Meta ' + t.length + '  bytes decresed to ' + i.length + ' bytes (' + Math.round(100 * i.length / t.length) + ' %)');
                            var r = this._envSettings.events_recording_iid + '/i/m/i.png?q=' + i;
                            if (this.pixel_append(r), r.length >= 8000)
                                try {
                                    if ('undefined' != typeof Storage) {
                                        var s, n = 'fr_log_' + (s = Math.round(new Date().getTime() / 1000)), a = {}, o;
                                        (o = this._getLogInfomration(a)).url = window.location.href, o.message = 'pixel too big ' + r.length, localStorage.setItem(n, JSON.stringify(o));
                                    }
                                } catch (e) {
                                    this._debug(e);
                                }
                        }
                        if (this._links.length > 0) {
                            var l = [], d = 25, c = 0, h = 0;
                            for (var _ in this._links)
                                void 0 === l[c] && (l[c] = {}), l[c][this._links[_].info.xid] = this._links[_].anchor.getAttribute('data-orig-url'), h >= 25 && (c += 1, h = 0), h += 1;
                            for (var u = 0; u <= c; u++)
                                if (void 0 !== l[u]) {
                                    this._debug(l[u]);
                                    var f = {
                                            pid: this._paramsBuffer.customer_id,
                                            iid: trx.iid,
                                            xids: l[u]
                                        }, g = JSON.stringify(f), m = trx.LZString.compressToEncodedURIComponent(g);
                                    this._debug(g.length + ' bytes decresed to ' + m.length + ' bytes (' + Math.round(100 * m.length / g.length) + ' %)');
                                    var r = this._envSettings.events_recording_iid + '/i/x/i.png?q=' + m;
                                    if (this.pixel_append(r), r.length >= 8000)
                                        try {
                                            if ('undefined' != typeof Storage) {
                                                var s, n = 'fr_log_' + (s = Math.round(new Date().getTime() / 1000)), a = {}, o;
                                                (o = this._getLogInfomration(a)).url = window.location.href, o.message = 'pixel too big ' + r.length, localStorage.setItem(n, JSON.stringify(o));
                                            }
                                        } catch (e) {
                                            this._debug(e);
                                        }
                                }
                        }
                    }
                }
                pixel_append(e) {
                    var t = document.createElement('img');
                    t.height = '1', t.width = '1', t.style = 'border-style:none;', t.alt = '', t.src = e, document.body.appendChild(t);
                }
                registerCustomLinks(e) {
                    for (let [t, i] of e)
                        this.registerCustomLink(t, i);
                }
                registerCustomLink(e, t) {
                    if (this._isEmpty(e) || this._isEmpty(t))
                        this._error('registerCustomLink method was invoked with either empty \'id\' or empty \'url\' arguments. Check you call to method(s) \'registerCustomLink\' / \'registerCustomLinks\'');
                    else {
                        let i = document.getElementById(e);
                        null != i && i.parentNode.removeChild(i), (i = document.createElement('a')).href = t, i.id = e, i.style.display = 'none', i.setAttribute('data-ml-custom-link', 'true'), i.setAttribute('target', '_blank'), document.body.append(i), this._customLinks.set(e, { orig_url: t });
                    }
                }
                getProcessedCustomLinks() {
                    for (let [e, t] of this._customLinks) {
                        let i = document.getElementById(e);
                        t.processed = i.hasAttribute('data-ml'), t.processed && (t.fr_url = i.href);
                    }
                    return this._customLinks;
                }
                recordCustomLinkClick(e, t) {
                    try {
                        let i = !1;
                        for (let r = 0; r < this._links.length; r++) {
                            let s = this._links[r];
                            if (s.anchor.id === e) {
                                let e = { type: 'custom-url' };
                                this._linkClicked(s, e, t), i = !0;
                                break;
                            }
                        }
                        i || this._error('recordCustomLinkClick was invoked with unrecognized id: \'' + e + '\'. The id should be the same as the value used when you invoked registerCustomLink(...) or registerCustomLinks(...)');
                    } catch (e) {
                        this._error('Fail to trigger custom link. Details: ' + e, e.stack);
                    }
                }
                _runFeatures(e) {
                    if (this._paramsBuffer.origin = this.href, this._paramsBuffer.property_id = this._propertyId, this._paramsBuffer.customer_id = this._customerId, this._paramsBuffer.cidp1 = this._paramsBuffer.customer_id, this._paramsBuffer.cidp2 = '-', -1 !== this._paramsBuffer.customer_id.indexOf('_')) {
                        const e = this._paramsBuffer.customer_id.split('_');
                        if (e.length > 2) {
                            let t = e.slice(0, e.length - 1);
                            this._paramsBuffer.cidp1 = t.join('_'), this._paramsBuffer.cidp2 = e[e.length - 1];
                        }
                    }
                    this._paramsBuffer.source = location.href, void 0 !== trx.source && (this._paramsBuffer.source = trx.source, this._paramsBuffer.urls.source = trx.source, this._paramsBuffer.amp_source = location.href), this._paramsBuffer.event_type = 'click', this._prepareCustomMetadata();
                    let t = this._settings.features;
                    for (let i in t)
                        if (t.hasOwnProperty(i)) {
                            let r = t[i];
                            if (!this._asBoolean(r.enabled))
                                continue;
                            switch (i) {
                            case 'append_referrer':
                                this._appendReferrer(r);
                                break;
                            case 'append_timing':
                                this._appendTiming(r);
                                break;
                            case 'append_attributes':
                                this._appendAttributes(r);
                                break;
                            case 'attributes_forwarding':
                                this._attributesForwarding(r, e);
                                break;
                            case 'track_events':
                                this._prepareEventTracking(r);
                                break;
                            case 'auto_optimize_link':
                                this._autoOptimizeLinks(r);
                                break;
                            case 'link_preview':
                                this._preparePreview(r);
                                break;
                            case 'shorten_extra_param':
                                this._prepareShortExtraParam(r);
                                break;
                            case 'metadata':
                                this._prepareMetadata(r);
                                break;
                            }
                        }
                    if (1 != e) {
                        for (let e = 0; e < this._links.length; e++) {
                            let t = this._links[e];
                            if (1 == t.info.disable)
                                continue;
                            null != t.anchor.click_fn && 'function' == typeof t.anchor.click_fn && t.anchor.removeEventListener('click', t.anchor.click_fn);
                            let i = this._linkClicked.bind(this, t);
                            t.anchor.addEventListener('click', i), t.anchor.click_fn = i, null != t.anchor.contextmenu_fn && 'function' == typeof t.anchor.contextmenu_fn && t.anchor.removeEventListener('contextmenu', t.anchor.contextmenu_fn);
                            let r = this._linkClicked.bind(this, t);
                            t.anchor.addEventListener('contextmenu', r), t.anchor.contextmenu_fn = r;
                        }
                        this._setSkimDynamicXcust();
                    }
                }
                _setSkimDynamicXcust() {
                    if (this._asBoolean(this._settings.detection_rules.auto_networks.dynamic))
                        for (let e = 0; e < this._links.length; e++) {
                            let t = this._links[e];
                            if (t.info.dynamic && 'sl' === t.info.dynamicType) {
                                let e = t.anchor.hasAttribute('data-skimlinks-tracking') ? t.anchor.getAttribute('data-skimlinks-tracking') : '';
                                e = this._cleanupXid(e), this._isEmpty(e) || (e += '|'), e += 'xid:' + t.info.xid, t.anchor.setAttribute('data-skimlinks-tracking', e);
                            }
                        }
                }
                _linkClicked(e, t, i) {
                    if ('true' === e.anchor.getAttribute('data-written'))
                        return void this._debug('click already saved.');
                    if (this._wait_then_click && 0 == t.button && t.preventDefault(), e.info.dynamic) {
                        let t;
                        if ('vg' === e.anchor.getAttribute('data-ml-dynamic-type')) {
                            let t = vglnk.opt('cuid');
                            t = this._cleanupXid(t), this._isEmpty(t) || (t += '|'), t += 'xid:' + e.info.xid, vglnk.opt('cuid', t);
                        }
                    }
                    this._collectClickTimeParams();
                    let r = !1;
                    if (void 0 !== e.anchor && 'true' === (r = e.anchor.getAttribute('data-written')))
                        return;
                    let s = this._promiseTimeout(2000, this._writeDataToEventsService(e, t.type, i));
                    this._wait_then_click && 0 == t.button && (s.then(() => {
                        e.anchor.setAttribute('data-written', 'true'), e.anchor.click();
                    }), s.catch(t => {
                        try {
                            if ('undefined' != typeof Storage) {
                                var i, r = 'fr_log_' + Math.round(new Date().getTime() / 1000), s = this._getLogInfomration(JSON.parse(JSON.stringify(this._paramsBuffer)));
                                s.message = t, s.xid = e.info.xid, localStorage.setItem(r, JSON.stringify(s));
                            }
                        } catch (e) {
                            this._debug(e);
                        }
                        e.anchor.setAttribute('data-written', 'true'), e.anchor.click();
                    }));
                }
                _promiseTimeout(e, t) {
                    let i = new Promise((t, i) => {
                        let r = setTimeout(() => {
                            clearTimeout(r), i('Timed out in ' + e + 'ms.');
                        }, e);
                    });
                    return Promise.race([
                        t,
                        i
                    ]);
                }
                _cleanupXid(e, t) {
                    if (null == e)
                        return '';
                    let i, r;
                    return null == t && (t = ''), this._isEmpty(e) || (i = e.indexOf('|xid:fr'), r = '|xid:fr'.length, -1 === i && (i = e.indexOf('xid:fr'), r = 'xid:fr'.length), -1 !== i && (e = this._insertSubstringToString(e, t, i, i + r + 16))), e;
                }
                _appendUUID() {
                    let e = { amazon: this._asBoolean(this._settings.detection_rules.amazon_no_append) };
                    for (let t = 0; t < this._links.length; t++) {
                        let i = this._links[t];
                        if (i.anchor.hasAttribute('data-xid'))
                            continue;
                        let r = i.info.url, s = i.network, n = this._generateUUID();
                        1 == i.anchor.hasAttribute('data-prepend-xid') && (n = i.anchor.getAttribute('data-prepend-xid')), this._xids[n] = '', i.info.xid = n, null != e[s] && !1 !== e[s] || 1 == i.anchor.hasAttribute('data-prepend-xid') && 1 == i.anchor.hasAttribute('data-affiliation-url') || (i.info.embedded && null != i.info.wrapping_url && -1 == i.info.wrapping_url.indexOf('shop-links.co') && (i.info.wrapping_url = this._appendExtraParam(i.info.wrapping_net, i.info.wrapping_url, 'xid', n, !1)), i.info.url = this._appendExtraParam(s, r, 'xid', n, !1)), i.anchor.setAttribute('data-xid', n), this._new_window && 0 == i.anchor.hasAttribute('target') && i.anchor.setAttribute('target', '_blank'), null != window.trxdebug && i.anchor.setAttribute('data-network', s);
                    }
                }
                _appendReferrer(e) {
                    if (this._asBoolean(e.enabled)) {
                        let t = e.attr_name, i = this._asBoolean(e.new_query_param), r = document.referrer;
                        void 0 !== trx.referrer && (r = trx.referrer), '/' === r.charAt(r.length - 1) && (r = r.substring(0, r.length - 1)), this._paramsBuffer[t] = r, this._paramsBuffer.urls.referrer = r, this._paramsBuffer.urls.is_trx_referrer = void 0 !== trx.referrer;
                    }
                }
                _appendTiming(e) {
                    if (this._asBoolean(e.enabled)) {
                        let t = this._asBoolean(e.new_query_param), i;
                        e.t_load && (this._paramsBuffer.t_loaded = this._loadTime, this._paramsBuffer.timing.t_loaded = this._loadTime);
                    }
                }
                _appendAttributes(e) {
                    if (this._asBoolean(e.enabled) && !this._isEmpty(e.attributes) > 0) {
                        let t;
                        this._parseQuery(e.attributes).forEach((e, t, i) => {
                            for (let i = 0; i < this._links.length; i++) {
                                let r = this._links[i];
                                this._paramsBuffer[t] = e, this._paramsBuffer.attr_append[t] = e;
                            }
                        });
                    }
                }
                _attributesForwarding(e, t) {
                    if (this._asBoolean(e.enabled) && e.attributes instanceof Array && e.attributes.length > 0) {
                        !0 === t && (this._paramsBuffer.attr_forwarding = {});
                        let r = location.search;
                        if (void 0 !== trx.source && (r = '?' + trx.source.replace(/(\S*)\?/, '')), !this._isEmpty(r) && r.length > 1) {
                            let t;
                            this._parseQuery(r.substring(1)).forEach((t, i, r) => {
                                e.attributes.includes(i) && (this._paramsBuffer.attr_forwarding[i] = t);
                            });
                        }
                        try {
                            var i;
                            if (sessionStorage)
                                if (null != this._paramsBuffer.attr_forwarding && 'null' != this._paramsBuffer.attr_forwarding || (this._paramsBuffer.attr_forwarding = {}), 0 == Object.keys(this._paramsBuffer.attr_forwarding).length)
                                    try {
                                        this._paramsBuffer.attr_forwarding = JSON.parse(sessionStorage.getItem('fr_attr_forwarding')), null != this._paramsBuffer.attr_forwarding && 'null' != this._paramsBuffer.attr_forwarding || (this._paramsBuffer.attr_forwarding = {});
                                    } catch (e) {
                                        this._debug(e), this._paramsBuffer.attr_forwarding = {};
                                    }
                                else
                                    try {
                                        sessionStorage.setItem('fr_attr_forwarding', JSON.stringify(this._paramsBuffer.attr_forwarding));
                                    } catch (e) {
                                        this._debug(e);
                                    }
                        } catch (e) {
                            this._debug(e);
                        }
                    }
                }
                _prepareEventTracking(e) {
                    if (this._asBoolean(e.enabled)) {
                        if (this._isEmpty(e.analytics_code) || 0 !== e.analytics_code.indexOf('UA-') || 'undefined' == typeof ga) {
                            if (this._isEmpty(e.analytics_code) || 'undefined' == typeof s || 'function' != typeof s.tl)
                                return;
                            this.trackerObj = new trx.AdobeTracker(e.analytics_code);
                        } else
                            this.trackerObj = new trx.GATracker(e.analytics_code);
                        if (this._asBoolean(e.pageview) && this.trackerObj.trackPageView(), this._asBoolean(e.clicks))
                            for (let t = 0; t < this._links.length; t++) {
                                let i = this._links[t], r = i.anchor, s = i.info.xid;
                                r.addEventListener('click', () => {
                                    let t = this._getAnchorLabel(r, 50) + ' [' + r.href + ']';
                                    this.trackerObj.trackEvent('magic-links', 'click', t, '1', {
                                        xid: s,
                                        anchor: r,
                                        props_map: e.props_map,
                                        props_map_custom: e.props_map_custom,
                                        data: this.paramsBuffer
                                    });
                                }), this._markLink('feature', 'track_events', r);
                            }
                    }
                }
                _autoOptimizeLinks(e) {
                    this._asBoolean(e.enabled);
                }
                _preparePreview(e) {
                    if (this._asBoolean(e.enabled)) {
                        if (e.show_icon)
                            for (let e = 0; e < this._links.length; e++) {
                                let t, i = this._links[e].anchor, r = document.createElement('span');
                                r.style.cursor = 'pointer', r.innerHTML = '&nearr;', r.addEventListener('click', trx.MagicLinks.renderLinkPreview.bind(this, i.getAttribute('data-ml-id'))), i.insertAdjacentElement('afterend', r), this._markLink('feature', 'preview', i);
                            }
                        e.show_metadata, e.show_coupons;
                    }
                }
                _prepareShortExtraParam(e) {
                    this._asBoolean(e.enabled);
                }
                _prepareCustomMetadata() {
                    let e = {
                        autorun: 1,
                        report: 1,
                        version: 1,
                        simulator: 1,
                        'property-id': 1,
                        'customer-id': 1
                    };
                    if (null != this._scriptEm && void 0 !== this._scriptEm.attributes)
                        for (var t = 0; t < this._scriptEm.attributes.length; t++) {
                            var i = this._scriptEm.attributes[t];
                            if (-1 !== i.name.indexOf('data-')) {
                                let t = i.name.replace('data-', '');
                                if (e[t])
                                    continue;
                                this._debug(t + ' = ' + i.value), this._paramsBuffer.custom_meta[t] = i.value;
                            }
                        }
                }
                _prepareMetadata(e) {
                    if (!this._isEmpty(e.selectors)) {
                        let t, i, r, s = e.selectors.split('\n');
                        for (let e = 0; e < s.length; e++)
                            try {
                                let n = s[e];
                                if (this._isEmpty(n))
                                    this._log('Ignoring empty line in metadata settings.');
                                else {
                                    let e = n.split('|');
                                    if (e.length > 1) {
                                        if (t = e[0].trim(), 0 === (i = e[1].trim()).length)
                                            continue;
                                        if (0 === i.indexOf('js::')) {
                                            let e = i.replace('js::', '').trim();
                                            null == (r = trx.MagicLinks._getObjectByPath(e)) && ('function' == typeof trx.get[t] ? r = trx.get[t]() : this._log('Missing function trx.get.' + t));
                                        } else if (0 === i.indexOf('ck::')) {
                                            let e = i.replace('ck::', '').trim();
                                            this._isEmpty(e) ? this._log('Invalid metadata cookie line. Cookie name is missing') : r = this._getCookie(e);
                                        } else if (0 === i.indexOf('ls::')) {
                                            let e = i.replace('ls::', '').trim();
                                            try {
                                                if ('undefined' != typeof Storage) {
                                                    let t = void 0;
                                                    t = window.localStorage.getItem(e), this._isEmpty(t) ? this._log('Invalid metadata localStorage line. Sorage name is missing') : r = t;
                                                }
                                            } catch (e) {
                                                this._debug(e);
                                            }
                                        } else if ('function' == typeof document.evaluate) {
                                            let e;
                                            r = document.evaluate(i, document, null, XPathResult.STRING_TYPE, null).stringValue;
                                        }
                                        this._isEmpty(r) || ((r instanceof Array || 'number' == typeof r) && (r = r.toString()), this._paramsBuffer[t] = r.trim(), this._paramsBuffer.metadata[t] = r.trim());
                                    } else
                                        this._log('Invalid metadata line. Line must have name and Xpath value in this format: name | xpath ');
                                }
                            } catch (e) {
                                this._log(e);
                            }
                    }
                }
                _getCookie(e) {
                    try {
                        let t = e + '=', i, r = decodeURIComponent(document.cookie).split(';');
                        for (let e = 0; e < r.length; e++) {
                            let i = r[e];
                            for (; ' ' === i.charAt(0);)
                                i = i.substring(1);
                            if (0 === i.indexOf(t))
                                return i.substring(t.length, i.length);
                        }
                    } catch (e) {
                        this._debug(e);
                    }
                    return '';
                }
                _logPageTrace() {
                    const $___old_80609d61450673e6 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_80609d61450673e6)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_5681dcac222e7c62.sessionStorage));
                        return function () {
                            try {
                                if (sessionStorage) {
                                    let i = this._needToClearTraces();
                                    var e = [];
                                    try {
                                        e = JSON.parse(sessionStorage.getItem('fr_referrer_trace'));
                                    } catch (t) {
                                        this._debug(t), e = [];
                                    }
                                    (null == e || i && 0 == trx.global_trace.length && 1 !== e.length) && (e = trx.global_trace);
                                    try {
                                        let e = sessionStorage.getItem('fr_last_loaded_page');
                                    } catch (e) {
                                        this._debug(e);
                                    }
                                    if (null != lastRecorded && lastRecorded === location.href)
                                        return trx.global_trace = e, void (this._paramsBuffer.page_trace = e);
                                    try {
                                        sessionStorage.setItem('fr_last_loaded_page', location.href);
                                    } catch (e) {
                                        this._debug(e);
                                    }
                                    let r;
                                    if (e.length >= 10)
                                        r = { source: '...' };
                                    else {
                                        var t = location.href;
                                        void 0 !== trx.source && (t = trx.source), r = {
                                            source: t,
                                            referrer: document.referrer,
                                            attr_forwarding: this._paramsBuffer.attr_forwarding
                                        };
                                    }
                                    e.push(r);
                                    try {
                                        sessionStorage.setItem('fr_referrer_trace', JSON.stringify(e));
                                    } catch (e) {
                                        this._debug(e);
                                    }
                                    this._paramsBuffer.page_trace = e;
                                }
                            } catch (e) {
                                this._debug('Error when recording referrer trace. Details: ', e);
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_80609d61450673e6)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_80609d61450673e6));
                    }
                }
                _needToClearTraces() {
                    if (this._isEmpty(document.referrer))
                        return !0;
                    let e = !1, t = '', i = document.referrer.split('/');
                    return !Array.isArray(i) || ('' !== (t = i[2]) && t === location.hostname || (e = !0), e);
                }
                _disbaleLinks() {
                    if (void 0 !== this._settings.disable_rules && this._asBoolean(this._settings.disable_rules.enabled) && void 0 !== this._settings.disable_rules.networks) {
                        var e = [];
                        for (let e = 0; e < this._links.length; e++) {
                            let t = this._links[e], i = t.info.url, r = t.network;
                            if (this._asBoolean(this._settings.disable_rules.networks[r]) && this._disbaleLink(t), void 0 !== this._settings.disable_rules.custom)
                                for (let e of this._settings.disable_rules.custom)
                                    switch (e.type) {
                                    case 'url':
                                        if (!this._isEmpty(i) && this._isAbsolute(i) && !this._isExcludedUrl(i))
                                            try {
                                                let r;
                                                new RegExp(e.pattern).test(i) && this._disbaleLink(t);
                                            } catch (e) {
                                                this._debug(e);
                                            }
                                        break;
                                    }
                        }
                    }
                }
                _disbaleLink(e) {
                    e.info.disable = !0;
                    let t = e.anchor.href;
                    e.anchor.setAttribute('data-orig-url', t), e.anchor.href = 'javascript:void(0)';
                }
                _detectLinks() {
                    if (this._asBoolean(this._settings.detection_rules.auto) && (this._asBoolean(this._settings.detection_rules.auto_networks.dynamic) && this._markDynamicDomainLinks(), this._autoDetectByUrl()), void 0 !== this._settings.detection_rules.custom && this._settings.detection_rules.custom.length > 0) {
                        this._autoDetectCustomRules(this._settings.detection_rules.custom);
                        for (let e of this._settings.detection_rules.custom)
                            switch (e.type) {
                            case 'element':
                                this._detectByElementSelector(e);
                                break;
                            }
                    }
                    for (let e = 0; e < this._links.length; e++) {
                        let t = this._links[e];
                        t.anchor.setAttribute('data-ml-id', e), t.anchor.setAttribute('data-ml', 'true');
                    }
                }
                _autoDetectCustomRules() {
                    let e, t;
                    for (let e of this._settings.detection_rules.custom)
                        if (e.pattern)
                            try {
                                let t = new RegExp(e.pattern);
                                e.regexp = t;
                            } catch (e) {
                                this._debug(e);
                            }
                    for (let s = 0; s < document.links.length; s++) {
                        let n = document.links[s];
                        if (!0 === trx.magicLinksSimulator || !n.hasAttribute('data-xid')) {
                            e = n.href;
                            var i = this._getAbsoluteOffsetFromBody(n);
                            if (void 0 === this._links_unique[i.top + '_' + i.left + '_' + e]) {
                                var r = !1;
                                for (let e of this._settings.detection_rules.custom)
                                    if ('url' == e.type && (r = this._detecLinktByUrlToken(n, e)))
                                        break;
                                if (!this._isEmpty(e) && this._isAbsolute(e) && !this._isExcludedUrl(e) && 1 == r) {
                                    let r = {
                                        inxStart: 0,
                                        inxEnd: 0,
                                        embedded: !1,
                                        dynamic: !1,
                                        dynamicType: null,
                                        url: e
                                    };
                                    !1 === (t = this._detectKnownAffiliateLink(e, r)) && (t = 'other'), this._checkEmbeddedLink(e, r), r.network = t, this._links.push({
                                        network: t,
                                        anchor: n,
                                        info: r
                                    }), this._links_unique[i.top + '_' + i.left + '_' + e] = n, n.hasAttribute('data-orig-url') || n.setAttribute('data-orig-url', e);
                                }
                            }
                        }
                    }
                }
                _detecLinktByUrlToken(e, t) {
                    return !!t.regexp && t.regexp.test(e);
                }
                _autoDetectByUrl() {
                    let e, t, i = this._settings.detection_rules.auto_networks;
                    for (let s = 0; s < document.links.length; s++) {
                        let n = document.links[s];
                        if (!0 === trx.magicLinksSimulator || !n.hasAttribute('data-xid')) {
                            e = n.href;
                            var r = this._getAbsoluteOffsetFromBody(n);
                            if (void 0 === this._links_unique[r.top + '_' + r.left + '_' + e] && !this._isEmpty(e) && this._isAbsolute(e) && !this._isExcludedUrl(e)) {
                                let s = {
                                    inxStart: 0,
                                    inxEnd: 0,
                                    embedded: !1,
                                    dynamic: !1,
                                    dynamicType: null,
                                    url: '',
                                    network: ''
                                };
                                t = this._detectKnownAffiliateLink(e, s), this._checkEmbeddedLink(e, s), !1 !== t && this._asBoolean(i[t]) || n.hasAttribute('data-prepend-xid') ? (n.hasAttribute('data-prepend-xid') && this._debug('found prepended xid'), s.network = t, this._links.push({
                                    network: t,
                                    anchor: n,
                                    info: s
                                }), this._links_unique[r.top + '_' + r.left + '_' + e] = n, n.hasAttribute('data-orig-url') || n.setAttribute('data-orig-url', e)) : !1 === t && this._asBoolean(i.dynamic) && 'true' === n.getAttribute('data-ml-dynamic') && (s.inxStart = 0, s.inxEnd = 0, s.embedded = !1, s.dynamic = !0, s.dynamicType = n.getAttribute('data-ml-dynamic-type'), s.url = '', s.network = n.getAttribute('data-ml-dynamic-type'), this._links.push({
                                    network: t,
                                    anchor: n,
                                    info: s
                                }), this._links_unique[r.top + '_' + r.left + '_' + e] = n, n.hasAttribute('data-orig-url') || n.setAttribute('data-orig-url', e));
                            }
                        }
                    }
                }
                _getAbsoluteOffsetFromBody(e) {
                    for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)
                        t += e.offsetLeft - e.scrollLeft + e.clientLeft, i += e.offsetTop - e.scrollTop + e.clientTop, e = e.offsetParent;
                    return {
                        top: i,
                        left: t
                    };
                }
                _detectByElementSelector(e) {
                    let t, i, r;
                    document.querySelectorAll(e.selector).forEach(r => {
                        if (!0 === trx.magicLinksSimulator || !r.hasAttribute('data-xid'))
                            if ('A' === r.nodeName) {
                                t = r.href;
                                var s = this._getAbsoluteOffsetFromBody(r);
                                if (void 0 !== this._links_unique[s.top + '_' + s.left + '_' + t])
                                    return;
                                if (!this._isEmpty(t) && this._isAbsolute(t) && !this._isExcludedUrl(t))
                                    try {
                                        let n;
                                        if (new RegExp(e.pattern).test(t)) {
                                            let e = {
                                                inxStart: 0,
                                                inxEnd: 0,
                                                embedded: !1,
                                                dynamic: !1,
                                                dynamicType: null,
                                                url: t
                                            };
                                            !1 === (i = this._detectKnownAffiliateLink(t, e)) && (i = 'other'), this._checkEmbeddedLink(t, e), e.network = i, this._links.push({
                                                network: i,
                                                anchor: r,
                                                info: e
                                            }), this._links_unique[s.top + '_' + s.left + '_' + t] = r, r.hasAttribute('data-orig-url') || r.setAttribute('data-orig-url', t);
                                        }
                                    } catch (e) {
                                        this._debug(e);
                                    }
                            } else if (r.nodeName.toLowerCase() === e.selector_element) {
                                console.log('found element ' + e.selector_element), void 0 !== r[e.selector_attribute] && (t = r[e.selector_attribute]);
                                var s = this._getAbsoluteOffsetFromBody(r);
                                if (void 0 !== this._links_unique[s.top + '_' + s.left + '_' + t])
                                    return;
                                if (!this._isEmpty(t) && this._isAbsolute(t) && !this._isExcludedUrl(t))
                                    try {
                                        let n;
                                        if (new RegExp(e.pattern).test(t)) {
                                            let n = {
                                                inxStart: 0,
                                                inxEnd: 0,
                                                embedded: !1,
                                                dynamic: !1,
                                                dynamicType: null,
                                                url: t
                                            };
                                            !1 === (i = this._detectKnownAffiliateLink(t, n)) && (i = 'other'), this._checkEmbeddedLink(t, n), n.selector_element = e.selector_element, n.selector_attribute = e.selector_attribute, n.network = i, this._links.push({
                                                network: i,
                                                anchor: r,
                                                info: n
                                            }), this._links_unique[s.top + '_' + s.left + '_' + t] = r, r.hasAttribute('data-orig-url') || r.setAttribute('data-orig-url', t);
                                        }
                                    } catch (e) {
                                        this._debug(e);
                                    }
                            }
                    });
                }
                _detectKnownAffiliateLink(e, t) {
                    let i, r, s = {};
                    void 0 !== this._serverSettings.impact_domains && (s = this._serverSettings.impact_domains);
                    var n = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i), a = n && n[1];
                    if (null !== a && 1 !== s[a]) {
                        const e = /(([a-z\-0-9]+)(?:\.com|\.fr|\.co.uk|\.io|\.net|\.com.au|\.co))/g;
                        null !== (n = a.match(e)) && 1 == n.length && (a = n[0]);
                    }
                    if (-1 !== e.indexOf('/dp/') && e.includes('tag=') && (r = -1 !== e.indexOf('amazon.')) || -1 !== e.indexOf('/gp/') && e.includes('tag=') && (r = -1 !== e.indexOf('amazon.')) || (r = -1 != e.indexOf('/amzn.')) || (r = -1 != e.indexOf('/www.amzn.')) || (r = -1 != e.indexOf('.amazon-adsystem.com')))
                        i = 'amazon';
                    else if (-1 !== (r = e.indexOf('linksynergy')))
                        i = 'ls';
                    else if (-1 !== (r = e.indexOf('anrdoezrs.net')) || -1 !== (r = e.indexOf('jdoqocy.com')) || -1 !== (r = e.indexOf('tqlkg.com')) || -1 !== (r = e.indexOf('tkqlhce.com')) || -1 !== (r = e.indexOf('dpbolvw.net')) || -1 !== (r = e.indexOf('jqoqocy.com')) || -1 !== (r = e.indexOf('kqzfj.com')) || -1 !== (r = e.indexOf('kqzyfj.com')) || -1 !== (r = e.indexOf('ftjcfx.com')) || -1 !== (r = e.indexOf('lduhtrp.net')) || -1 !== (r = e.indexOf('qksrv.net')))
                        i = 'cj';
                    else if (-1 !== (r = e.indexOf('shareasale.com')))
                        i = 'sas';
                    else if (-1 !== (r = e.indexOf('awin1.com')))
                        i = 'awin';
                    else if (-1 !== (r = e.indexOf('pepperjamnetwork.com')) || -1 !== (r = e.indexOf('pjtra.com/t/')) || -1 !== (r = e.indexOf('gopjn.com/t/')) || -1 !== (r = e.indexOf('pjatr.com/t/')) || -1 !== (r = e.indexOf('pntra.com/t/')) || -1 !== (r = e.indexOf('pntrs.com/t/')) || -1 !== (r = e.indexOf('pntrac.com/t/')))
                        i = 'pj';
                    else if (-1 !== (r = e.indexOf('track.webgains.com')))
                        i = 'wg';
                    else if (-1 !== (r = e.indexOf('prf.hn/click')))
                        i = 'pt';
                    else if (-1 !== (r = e.indexOf('tradedoubler.com/click?')) || -1 !== (r = e.indexOf('pf.tradedoubler.com/pf/')))
                        i = 'td';
                    else if (-1 !== (r = e.search(/\/c\/(\d+)\/(\d+)\//)) || -1 !== (r = e.search(/%2Fc%2F(\d+)%2F(\d+)%2F(\d+)%/)) || 1 == s[a])
                        i = 'ir';
                    else if (-1 !== (r = e.indexOf('go.redirectingat.com')) || -1 !== e.indexOf('go.skimresources.com') || -1 !== e.indexOf('fave.co'))
                        i = 'sl';
                    else if (-1 !== (r = e.indexOf('redirect.viglink.com')))
                        i = 'vg';
                    else if (-1 !== (r = e.indexOf('avantlink.com/click')))
                        i = 'al';
                    else if (-1 !== (r = e.indexOf('track.adtraction.com')) || -1 !== (r = e.indexOf('adtr.co')) || -1 !== (r = e.search(/\/t\/t\/\?a=(\d+)/)) || -1 !== (r = e.search(/\/t\/t\?a=(\d+)/)))
                        i = 'at';
                    else if (-1 !== (r = e.indexOf('tc.tradetracker.net')) || -1 !== (r = e.search(/(\?|\&)tt=(\d+)_(\d+)_(\d+)(_[\w-]+)?/)))
                        i = 'tt';
                    else if (-1 !== (r = e.indexOf('/aff_c')) && -1 !== e.search(/aff_id=(\d+)/))
                        i = 'ho';
                    else if (r = -1 !== e.indexOf('c.trackmytarget.com'))
                        i = 'tc';
                    else if (r = -1 !== e.indexOf('buy.geni.us/Proxy.ashx'))
                        i = 'ge';
                    else if ((r = -1 !== e.indexOf('partner.bol.com/click/click')) || (r = -1 !== e.indexOf('tracking.bol.com/click/click')))
                        i = 'bol';
                    else if (r = -1 !== e.indexOf('track.wg-aff.com/click'))
                        i = 'afs';
                    else if (r = -1 !== e.indexOf('oc.brcclx.com/t/?'))
                        i = 'rv';
                    else if (r = -1 !== e.search(/(wayfair\.com[\S]+refid=)/))
                        i = 'wyf';
                    else if (r = -1 !== e.search(/(ndt5.net\/c\/)/))
                        i = 'dc';
                    else {
                        if (!(r = -1 !== e.search(/(ostlon\.com\/4LS8T4J\/9LLP2M\/)|(hiasor\.com\/4LS8T4J\/ZCJM85\/)|(goplay4\.com\/4LS8T4J\/HWPZ42Z\/)|(trck1t\.com\/4LS8T4J\/J5ZP3HL\/)/)))
                            return !1;
                        i = 'ef';
                    }
                    return t.inxNext = r, i;
                }
                _isCJ(e) {
                    return -1 !== e.indexOf('anrdoezrs.net') || -1 !== e.indexOf('jdoqocy.com') || -1 !== e.indexOf('tqlkg.com') || -1 !== e.indexOf('tkqlhce.com') || -1 !== e.indexOf('dpbolvw.net') || -1 !== e.indexOf('jqoqocy.com') || -1 !== e.indexOf('kqzfj.com') || -1 !== e.indexOf('kqzyfj.com') || -1 !== e.indexOf('ftjcfx.com') || -1 !== e.indexOf('lduhtrp.net') || -1 !== e.indexOf('qksrv.net');
                }
                _findAsin(e) {
                    let t = null;
                    const i = /(?:[/dp/]|$)([A-Z0-9]{10})(?:[\/])/g, r = e.match(i);
                    return null !== r && r.length > 0 && (t = r[0].replace('/', '').replace('/', '')), t;
                }
                _checkEmbeddedLink(e, t) {
                    let i = t.inxNext, r = e.lastIndexOf('=', i);
                    if (-1 !== r && r < i) {
                        t.inxStart = r + 1;
                        let s = e.indexOf('&', i);
                        -1 === s && (s = e.length), t.inxEnd = s, t.embedded = !0, t.url = decodeURIComponent(e.substring(t.inxStart, t.inxEnd));
                        let n = e.substring(0, t.inxStart), a = e.substring(t.inxEnd);
                        t.wrapping_url = n + this._embedUrlToken + a, -1 !== e.indexOf('go.redirectingat.com') || -1 !== e.indexOf('go.skimresources.com') ? t.wrapping_net = 'sl' : -1 !== e.indexOf('redirect.viglink.com') && (t.wrapping_net = 'vg');
                    } else
                        t.inxStart = 0, t.inxEnd = e.length, t.embedded = !1, t.url = e;
                }
                _markDynamicDomainLinks() {
                    let e, t;
                    var i = void 0;
                    if ('undefined' != typeof skimlinksInitialized && (i = !0), 'undefined' != typeof __SKIM_JS_GLOBAL__ && 'function' == typeof __SKIM_JS_GLOBAL__.getDebugInfo)
                        e = 'sl', t = __SKIM_JS_GLOBAL__.getDebugInfo().runTimeInfo.aff_domains;
                    else if (void 0 !== i)
                        e = 'sl';
                    else {
                        if ('undefined' == typeof vglnk || 'function' != typeof vglnk.opt)
                            return;
                        e = 'vg', t = vglnk.opt('commercial_domains');
                    }
                    if (null != t) {
                        for (let i = 0; i < document.links.length; i++)
                            try {
                                let r = document.links[i], s = r.hostname;
                                !0 === t[s = s.replace('www.', '')] && (r.setAttribute('data-ml-dynamic', 'true'), r.setAttribute('data-ml-dynamic-type', e));
                            } catch (e) {
                                this._log(e);
                            }
                        try {
                            this._debug('FR find dynamic domains: ' + JSON.stringify(t));
                        } catch (e) {
                        }
                    } else if (void 0 !== i) {
                        skimlinks_exclude;
                        var r = [];
                        'undefined' != typeof skimlinksInitialized && (r = skimlinks_exclude);
                        let i = document.querySelectorAll('a[data-skimlinks-tracking]'), a = '(' + r.join('|').replace('*', '') + ')', o = new RegExp(a), l = {};
                        for (let t in i)
                            if (void 0 !== i[t].href) {
                                if (o.test(i[t].href))
                                    continue;
                                var s = i[t].href.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i), n = (s && s[1]).replace('www.', '');
                                void 0 !== n && void 0 == l[n] && (l[n] = 1);
                                try {
                                    i[t].setAttribute('data-ml-dynamic', 'true'), i[t].setAttribute('data-ml-dynamic-type', e);
                                } catch (e) {
                                    this._log(e);
                                }
                            }
                        void 0 !== l && (t = Object.keys(l));
                    } else
                        this._debug('FR didn\'t find dynamic domains');
                }
                _isExcludedUrl(e) {
                    let t = this._exclude_urls_regex;
                    for (let i = 0; i < t.length; i++)
                        if (t[i].test(e))
                            return !0;
                    return !1;
                }
                _prepareSettings() {
                    this._settings = trx.MagicLinks.prepareDefaultSettings({}), Object.keys(this.serverSettings).length > 0 && (this._settings = this._extendForte(this._settings, this.serverSettings)), Object.keys(this.onPageSettings).length > 0 && (this._settings = this._extendForte(this._settings, this.onPageSettings));
                }
                _collectClickTimeParams() {
                    let e = this._settings.features.append_timing;
                    if (this._asBoolean(e.enabled)) {
                        let t = e.t_clicked, i = e.t_toclick, r = Date.now();
                        t && (this._paramsBuffer.t_clicked = r, this._paramsBuffer.timing.t_clicked = r), i && (this._paramsBuffer.t_toclick = r - this._loadTime, this._paramsBuffer.timing.t_toclick = r - this._loadTime);
                    }
                }
                _writeDataToEventsService(e, t, i) {
                    let r;
                    try {
                        r = JSON.parse(JSON.stringify(this._paramsBuffer));
                    } catch (e) {
                        r = this._paramsBuffer;
                    }
                    r.uuid = e.info.xid;
                    var s = e.info.xid;
                    if (r.link_replaced = !1, e.anchor.hasAttribute('data-spot-rid')) {
                        let t = e.anchor.getAttribute('data-spot-rid'), i = e.anchor.getAttribute('data-orig-url'), n = e.anchor.getAttribute('data-spot-replaced');
                        s = t, r.uuid = t, r.original_xid = e.info.xid, r.link_replaced = !0, r.orig_url = i, r.link_replace_to = n;
                    }
                    if (void 0 === s && e.anchor.hasAttribute('data-xid') && (s = e.anchor.getAttribute('data-xid')), e.anchor.hasAttribute('data-orig-url') && (r.anchor_orig = e.anchor.getAttribute('data-orig-url')), r.client_time = new Date().toISOString(), r.anchor_id = this._emptyIfNull(e.anchor.id), r.anchor_href = e.anchor.href, r.anchor_label = e.anchor.innerText, r.page_title = document.title, r.spot_id = '', r.network = e.info.network, null != t && (r.event_type = t), e.anchor.hasAttribute('data-affiliation-url') && (r.anchor_href = e.anchor.getAttribute('data-affiliation-url'), r.network = this._detectKnownAffiliateLink(r.anchor_href, {})), e.anchor.hasAttribute('data-vars-link-id') && (void 0 === r.metadata && (r.metadata = {}), r.metadata.linkid = e.anchor.getAttribute('data-vars-link-id')), null != i && 'object' == typeof i)
                        for (let e in i)
                            i.hasOwnProperty(e) && 0 === e.indexOf('custom_') && (r[e] = i[e]);
                    let n = this._envSettings.events_recording_api + '/write', a = {
                            env: this._envSettings.events_recording_env,
                            id: s,
                            app_key: this._envSettings.app_key,
                            property_id: r.property_id,
                            customer_id: r.customer_id,
                            cidp1: r.cidp1,
                            cidp2: r.cidp2,
                            event_type: r.event_type,
                            network: r.network,
                            data: encodeURIComponent(JSON.stringify(r))
                        }, o = JSON.stringify(a), l = JSON.parse(o);
                    l.data = r;
                    let d = JSON.stringify(l), c = r.uuid;
                    delete r.uuid, delete r.client_time, delete r.anchor_href, delete r.anchor_label, delete r.page_title, delete r.spot_id;
                    try {
                        if ('undefined' != typeof Storage) {
                            var h = 'fr_click_' + c;
                            localStorage.setItem(h, o);
                        }
                    } catch (e) {
                        this._debug(e);
                    }
                    if (void 0 !== this._envSettings.events_recording_api2) {
                        let e = this._envSettings.events_recording_api2 + '/write';
                        var _ = {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: { 'Content-Type': 'application/json' },
                            redirect: 'follow',
                            referrer: '*client',
                            body: o
                        };
                        this._iframed && (_.referrer = location.href), fetch(e, _).then(e => {
                            if (e.ok) {
                                let e = 'Write to events-recording service. Body:\n' + d;
                                return this._isSimulator && this._log(e), void this._debug(e);
                            }
                            this._log('Fail to write event data. HTTP error, status = ' + e.status);
                            try {
                                if ('undefined' != typeof Storage) {
                                    var t = Math.round(new Date().getTime() / 1000);
                                    h = 'fr_log_' + t;
                                }
                            } catch (e) {
                                this._debug(e);
                            }
                        }).then(e => {
                            e && e.message && this._log(e.message);
                        }).catch(e => {
                            this._log(e);
                        });
                    }
                    let u = {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        redirect: 'follow',
                        referrer: '*client',
                        body: o
                    };
                    if (this._iframed && (u.referrer = location.href), navigator.sendBeacon && this._use_beacon) {
                        try {
                            let e = navigator.sendBeacon(n, o);
                        } catch (e) {
                            console.log(e);
                        }
                        if (this._debug('sendBeacon: URL = ' + n + '; status = ' + status), 1 == status)
                            try {
                                localStorage.removeItem(h);
                            } catch (e) {
                                this._debug(e);
                            }
                        return status;
                    }
                    return fetch(n, u).then(t => {
                        if (t.ok) {
                            let e = 'Write to events-recording service. Body:\n' + d;
                            if (this._isSimulator && this._log(e), 200 == t.status)
                                try {
                                    'undefined' != typeof Storage && localStorage.removeItem(h);
                                } catch (e) {
                                    this._debug(e);
                                }
                            return this._debug(e), t.json();
                        }
                        this._log('Fail to write event data. HTTP error, status = ' + t.status);
                        try {
                            if ('undefined' != typeof Storage) {
                                var i = Math.round(new Date().getTime() / 1000);
                                h = 'fr_log_' + i;
                                var s = this._getLogInfomration(r);
                                s.message = 'Fail to write event data. HTTP error, status = ' + t.status, s.xid = e.info.xid, localStorage.setItem(h, JSON.stringify(s));
                            }
                        } catch (e) {
                            this._debug(e);
                        }
                    }).then(t => {
                        if (t && t.message) {
                            this._log(t.message);
                            try {
                                if ('undefined' != typeof Storage) {
                                    var i = Math.round(new Date().getTime() / 1000);
                                    h = 'fr_log_' + i;
                                    var s = this._getLogInfomration(r);
                                    s.message = t.message, s.xid = e.info.xid, localStorage.setItem(h, JSON.stringify(s));
                                }
                            } catch (e) {
                                this._debug(e);
                            }
                        }
                    }).catch(t => {
                        this._log(t);
                        try {
                            if ('undefined' != typeof Storage) {
                                var i = Math.round(new Date().getTime() / 1000);
                                h = 'fr_log_' + i;
                                var s = this._getLogInfomration(r);
                                s.message = t.message, s.xid = e.info.xid, localStorage.setItem(h, JSON.stringify(s));
                            }
                        } catch (e) {
                            this._debug(e);
                        }
                    });
                }
                _getLogInfomration(e) {
                    return e.env = this._envSettings.events_recording_env, e.app_key = this._envSettings.app_key, e.property_id = this._propertyId, e.customer_id = this._customerId, e.loginfo = {
                        nAgt: navigator.userAgent,
                        screen: screen.width + '*' + screen.height
                    }, e;
                }
                _log(e) {
                    console.log(this._logPrefix + e);
                }
                _error(e, t) {
                    console.error(this._logPrefix + e), null != t && console.error(t);
                    try {
                        if ('undefined' != typeof Storage) {
                            var i, r = 'fr_log_' + Math.round(new Date().getTime() / 1000), s = {}, n = this._getLogInfomration(s);
                            n.message = this._logPrefix + e, localStorage.setItem(r, JSON.stringify(n));
                        }
                    } catch (e) {
                        this._debug(e);
                    }
                }
                _debug(e) {
                    null != window.trxdebug && console.log(this._logPrefix + e);
                }
                _prepareExcludeRegExp() {
                    this._exclude_urls_regex = [];
                    let e = this._settings.detection_rules.exclude_urls;
                    if (e.length > 0)
                        for (let t = 0; t < e.length; t++)
                            try {
                                this._exclude_urls_regex.push(new RegExp(e[t], 'i'));
                            } catch (e) {
                                this._debug(e);
                            }
                }
                _extendForte(e, t) {
                    if (null == e || null == t)
                        throw 'Null object provided to extendForte!';
                    const i = {};
                    let r;
                    for (r in e)
                        if (e.hasOwnProperty(r)) {
                            let s = e[r];
                            const n = t[r];
                            null != s && null != n ? s instanceof Array ? i[r] = n : i[r] = 'object' == typeof s ? this._extendForte(s, n) : n : i[r] = null == s ? n : null == n ? s : null;
                        }
                    for (r in t)
                        t.hasOwnProperty(r) && (r in e && null != e[r] || (i[r] = t[r]));
                    return i;
                }
                _postReport() {
                    this._report = { links: [] };
                    for (let e = 0; e < this._links.length; e++) {
                        let t = this._links[e].anchor, i = this._getAnchorLabel(t, 100);
                        this._report.links.push({
                            network: this._links[e].network,
                            url: t.href,
                            label: i
                        });
                    }
                    window.postMessage({
                        type: 'MSG_FROM_MAGIC_LINKS',
                        action: 'report',
                        report: JSON.stringify(this._report)
                    }, '*');
                }
                _markLink(e, t, i) {
                    let r = i.getAttribute('data-' + e);
                    r += ',' + t, i.setAttribute('data-' + e, r);
                }
                _appendExtraParam(e, t, i, r, s) {
                    let n = null, a = !1;
                    var o = ':';
                    if (s)
                        n = null;
                    else
                        switch (e) {
                        case 'cj':
                            n = 'sid', a = !0, o = '-';
                            break;
                        case 'ls':
                            n = 'u1';
                            break;
                        case 'sas':
                            n = 'afftrack';
                            break;
                        case 'awin':
                            n = 'clickref';
                            break;
                        case 'pj':
                            n = 'sid';
                            break;
                        case 'sl':
                            n = 'xcust';
                            break;
                        case 'vg':
                            n = 'cuid';
                            break;
                        case 'ir':
                            n = 'subId3';
                            break;
                        case 'wg':
                            n = 'clickref';
                            break;
                        case 'td':
                            n = 'epi(', a = !0;
                            break;
                        case 'pt':
                            n = 'pubref:', a = !0;
                            break;
                        case 'amazon':
                            n = 'ascsubtag';
                            break;
                        case 'al':
                            n = 'ctc';
                            break;
                        case 'at':
                            n = 'epi', o = '%3A';
                            break;
                        case 'tt':
                            -1 !== t.indexOf('tc.tradetracker.net') ? n = 'r' : (n = 'tt', o = '-');
                            break;
                        case 'ho':
                            n = 'aff_sub3', o = '%3A';
                            break;
                        case 'tc':
                            n = 'ref3';
                            break;
                        case 'bol':
                            n = 'subid', o = '-', 'xid' == i && (i = 'fr-xid');
                            break;
                        case 'afs':
                            n = 'sub5', o = '-';
                            break;
                        case 'dc':
                            n = 'ws3';
                            break;
                        case 'ef':
                            n = 'sub3';
                            break;
                        case 'rv':
                            n = 'tid', o = '-', 'xid' == i && (i = 'fr-xid');
                            break;
                        default:
                            n = null;
                        }
                    return this._appendNameValueToUrl(t, i, r, n, a, e, o);
                }
                _appendNameValueToUrl(e, t, i, r, s, n, a, o) {
                    let l, d, c, h, _, u;
                    if (void 0 === o && (o = !1), i = encodeURIComponent(i), void 0 === a && (a = ':'), null != r) {
                        if (_ = t + a + i, s)
                            return -1 !== (l = e.indexOf(r + '/')) ? (l += (r + '/').length, -1 === (d = e.indexOf('/', l)) && (d = e.length), (u = e.substring(l, d)).length > 0 && (_ = this._getDelimiter(e, n) + _), this._insertToString(e, _, d)) : 'pt' === n ? this._appendNameValueToUrl_PT(e, t, i, r, _) : 'cj' === n ? this._appendNameValueToUrl_CJ(e, t, i, r, _) : 'td' === n ? this._appendNameValueToUrl_TD(e, t, i, r, _) : (_ = '/' + r + '/' + _, this._insertToString(e, _, e.length));
                        if (-1 === (l = e.toLocaleLowerCase().indexOf(r.toLocaleLowerCase() + '='))) {
                            a = '=';
                            var f = '?';
                            return -1 !== e.indexOf('?') && (f = '&'), !0 === o && (f = encodeURIComponent(f), a = encodeURIComponent(a)), _ = f + r + a + _, this._insertToString(e, _, e.length);
                        }
                        return -1 === (d = e.indexOf('&', l)) && (d = e.length), (u = e.substring(l + r.length + 1, d)).length > 0 && (_ = this._getDelimiter(e, n) + _), this._insertToString(e, _, d);
                    }
                    return s ? e += t + '/' + i : -1 !== e.indexOf('?') ? e += '&' + t + '=' + i : e += '?' + t + '=' + i, e;
                }
                _appendNameValueToUrl_TD(e, t, i, r, s) {
                    let n, a, o, l, d;
                    return -1 === (n = e.indexOf('epi(')) ? -1 !== (n = e.indexOf('url(')) ? e + 'epi(' + s + ')' : -1 === (o = e.indexOf('&epi=')) ? e + '&epi=' + s : -1 === (l = e.indexOf('&', o + 5)) ? e + this._getDelimiter(e) + s : (s = this._getDelimiter(e) + s, this._insertToString(e, s, l)) : (n += r.length, -1 !== (a = e.indexOf(')', n)) ? ((d = e.substring(n, a)).length > 0 && (s = this._getDelimiter(e) + s), this._insertToString(e, s, a)) : e);
                }
                _appendNameValueToUrl_PT(e, t, i, r, s) {
                    let n, a, o;
                    if (-1 !== (n = e.indexOf(r))) {
                        if (n += r.length, -1 !== (a = e.indexOf('/', n)))
                            return (o = e.substring(n, a)).length > 0 && (s = this._getDelimiter(e) + s), this._insertToString(e, s, a);
                    } else if (-1 !== (n = e.indexOf('/destination')))
                        return s = '/pubref:' + s, this._insertToString(e, s, n);
                    return e;
                }
                _appendNameValueToUrl_CJ(e, t, i, r, s) {
                    let n = e.indexOf('dlg/');
                    if (-1 === n && (n = e.indexOf('/am/')), s = s.replace(':', '-'), -1 !== n)
                        return s = r + '/' + s + '/', this._insertToString(e, s, n + 4);
                    if (-1 === e.indexOf('?'))
                        return e + '?sid=' + s;
                    {
                        let t = e.indexOf('?'), i = e.indexOf('sid=', t + 1);
                        if (-1 === i && (i = e.indexOf('&sid=', t + 1)), -1 !== i) {
                            let t = e.indexOf('&', i + 5);
                            return -1 === t ? e + this._getDelimiter(e).replace('|', this._delimiter4) + s : (s = this._getDelimiter(e).replace('|', this._delimiter4) + s, this._insertToString(e, s, t));
                        }
                        return t === e.length - 1 ? e + 'sid=' + s : e + '&sid=' + s;
                    }
                }
                _checkPageUrlMatch() {
                    return !!this._isEmpty(this._settings.detection_rules.page_url_filter) || location.href.includes(this._settings.detection_rules.page_url_filter);
                }
                _insertToString(e, t, i) {
                    let r, s;
                    return (r = e.substring(0, i)) + t + (s = i < e.length ? e.substring(i) : '');
                }
                _insertSubstringToString(e, t, i, r) {
                    let s, n;
                    return (s = e.substring(0, i)) + t + (n = e.substring(r));
                }
                _parseQuery(e) {
                    let t = new Map();
                    if (!e)
                        return t;
                    const i = e.split(/[;&]/);
                    for (let e = 0; e < i.length; e++) {
                        let r = i[e].split('=');
                        if (!r || 2 !== r.length)
                            continue;
                        const s = unescape(r[0]);
                        let n = unescape(r[1]);
                        n = n.replace(/\+/g, ' '), t.set(s, n);
                    }
                    return t;
                }
                _getAnchorLabel(e, t) {
                    let i = document.createElement('label');
                    i.innerHTML = e.innerHTML, i.normalize();
                    let r = i.innerHTML;
                    return (r = r.trim()).length > t && (r = r.substring(0, t) + '...'), r;
                }
                _isEmpty(e) {
                    return null == e || '' === e || void 0 === e;
                }
                _emptyIfNull(e) {
                    return null == e ? '' : e;
                }
                _isAbsolute(e) {
                    return 0 === e.indexOf('http://') || 0 === e.indexOf('https://');
                }
                _asBoolean(e) {
                    return 'true' === e || !0 === e;
                }
                _generateUUID() {
                    const e = Date.now(), t = String.fromCharCode(Math.floor(10 * Math.random() + 97)), i = String.fromCharCode(Math.floor(10 * Math.random() + 97)), r = String.fromCharCode(Math.floor(10 * Math.random() + 97));
                    return `fr${ e }${ t }${ i }${ r }`;
                }
                static _getObjectByPath(e, t) {
                    null == t && (t = window);
                    const i = e.split('.');
                    if (1 === i.length)
                        return t[i[0]];
                    {
                        let e = t;
                        for (let t = 0; t < i.length; t++) {
                            const r = i[t];
                            if ('window' !== r && (null == (e = e[r]) && t < i.length - 1))
                                return null;
                        }
                        return e;
                    }
                }
                _getDelimiter(e, t) {
                    return e.includes('assoc-redirect.amazon') ? this._delimiter2 : this._isCJ(e) ? this._delimiter4 : 'ho' == t || 'at' == t ? encodeURI(this._delimiter1) : 'tt' == t && -1 === e.indexOf('tc.tradetracker.net') ? this._delimiter4 : 'bol' == t ? this._delimiter4 : 'rv' == t ? this._delimiter4 : 'afs' == t ? this._delimiter4 : this._delimiter1;
                }
                _runFRCallback() {
                    try {
                        null != window.funnelRelayReady && 'function' == typeof window.funnelRelayReady && window.funnelRelayReady();
                    } catch (e) {
                        this._error('Fail to run callback function \'funnelRelayReady\'. Details: ' + e);
                    }
                }
            }, trx.get = {};
            trx.get.PageUniqueID = function () {
                return eval('mdManager.getParameter(\'UniqueID\')');
            };
            trx.get.PageTitle = function () {
                return eval('mdManager.getParameter(\'Title\')');
            };
            trx.get.PublicationDate = function () {
                return eval('mdManager.getParameter(\'OrigPubDate\')');
            };
            trx.get.PageType = function () {
                return eval('mdManager.getParameter(\'Type\')');
            };
            trx.get.CategoryDspName = function () {
                return eval('mdManager.getParameter(\'CategoryDspName\')');
            };
            trx.get.PageName = function () {
                return eval('mdManager.getParameter(\'Url\')');
            };
            trx.get.Tags = function () {
                return eval('var tt=\'\';document.getElementsByClassName(\'o-Tags\')[0].querySelectorAll(\'a.a-Tag\').forEach(function(node) {tt =node.innerHTML \',\';});tt.substring(0, tt.length - 1);');
            };
            trx.get.EditorialTracking = function () {
                return eval('mdManager.getParameter(\'EditorialTracking\')');
            }, trx.GATracker = class {
                constructor(e) {
                    this.gaCode = e, window.ga = window.ga || function () {
                        (ga.q = ga.q || []).push(arguments);
                    }, ga.l = +new Date(), ga('create', this.gaCode, 'auto', 'mlTracker', {
                        alwaysSendReferrer: !0,
                        allowAnchor: !1
                    }), ga('mlTracker.set', 'referrer', document.referrer), ga('mlTracker.set', 'appName', 'trackonomics-relay');
                }
                trackEvent(e, t, i, r, s) {
                    ga(function (n) {
                        ga('mlTracker.send', 'event', {
                            eventCategory: e,
                            eventAction: t,
                            eventLabel: i,
                            eventValue: r,
                            fieldsObject: s,
                            transport: 'beacon'
                        });
                    });
                }
                trackScreenView(e) {
                    ga(function (t) {
                        ga('mlTracker.send', 'screenview', {
                            screenName: e,
                            appId: this.appId,
                            appVersion: this.appVersion,
                            appName: this.appName
                        });
                    });
                }
                trackPageView() {
                    ga(function (e) {
                        ga('mlTracker.set', 'page', location.href), ga('mlTracker.send', 'pageview', {
                            page: location.href,
                            title: document.title
                        });
                    });
                }
            }, trx.AdobeTracker = class {
                constructor(e) {
                    null != e && e.length > 0 ? this._rsId = e : this._rsId = null;
                }
                trackEvent(e, t, i, r, n) {
                    if ('function' == typeof s.tl) {
                        let e = s, t = null != this._rsId ? this._rsId : s_account;
                        null != t && (e = s_gi(t));
                        let i = n.props_map;
                        null == i && (i = {
                            xid: 'prop1',
                            link: 'prop2',
                            label: 'prop3',
                            referrer: 'prop4',
                            origin: 'prop5'
                        });
                        let r = n.props_map_custom, a = [
                                i.xid,
                                i.link,
                                i.label,
                                i.referrer,
                                i.origin
                            ];
                        if (null != r)
                            for (let e = 0; e < r.length; e++) {
                                let t = r[e];
                                a.push(t.prop);
                            }
                        if (e.linkTrackVars = a.join(','), e[i.xid] = n.xid, e[i.link] = n.anchor.href, e[i.label] = n.anchor.innerHTML, e[i.referrer] = document.referrer, e[i.origin] = location.href, null != r)
                            for (let t = 0; t < r.length; t++) {
                                let i = r[t];
                                e[i.prop] = trx.MagicLinks._getObjectByPath(i.field, n.data);
                            }
                        e.linkTrackEvents = 'funnel-relay', e.events = 'funnel-relay';
                        let o = 'funnel-relay-' + n.xid;
                        e.tl(!0, 'o', o, null);
                    }
                }
                trackScreenView(e) {
                }
                trackPageView() {
                }
            };
            let e = void 0, t = 'prod', i = !0, r = document.getElementById('funnel-relay-installer');
            null != r && r.hasAttribute('data-autorun') && (i = 'false' !== r.getAttribute('data-autorun'));
            let n = 3000, a = '{START_DELAY}', o = parseInt('{START_DELAY}');
            Number.isInteger(o) && (n = o), void 0 == trx.global_trace && (trx.global_trace = []), n > 0 ? setTimeout(() => {
                trx.magicLinksEngine = new trx.MagicLinks(i), trx.magicLinksEngine._runFRCallback();
            }, n) : (trx.magicLinksEngine = new trx.MagicLinks(i), trx.magicLinksEngine._runFRCallback());
            trx.SpotClient = class {
                constructor(t, e) {
                    this._frClient = t, null == e && (e = {}), this._options = e, this._settingsLoaded = !1, this._websiteId = null, this._pageId = null, this._actionLinks = [], this._asinRules = {}, this._spotSettings = { 's3_rule_action_links_url': 'https://fr-actions.trackonomics.net/prod' }, this._dataset = {
                        uri: {},
                        asin: {}
                    }, this._autoRun = this._asBoolean(!0), this._reportEnabled = this._asBoolean(e.report_enabled), this._report = {
                        links: [],
                        activity: []
                    }, this._refDate = 0;
                }
                _asBoolean(t) {
                    return 'true' === t || !0 === t;
                }
                set autoRun(t) {
                    this._autoRun = t;
                }
                set reportEnabled(t) {
                    this._reportEnabled = t;
                }
                set refDate(t) {
                    null != t && t > 0 && (this._refDate = t);
                }
                get report() {
                    return this._report;
                }
                async start() {
                    try {
                        return this._report = {
                            links: [],
                            activity: []
                        }, this.applyRules(), !0;
                    } catch (t) {
                        return console.error('Fail to start SpotClient.', t), !1;
                    }
                }
                async applyRules() {
                    if (this._logActivity('Rules actions were found for this page and will be apply depending on spot feature settings.'), this._asBoolean(this._frClient._settings.features.spot.enabled)) {
                        let t = !1;
                        if (this._asBoolean(this._frClient._settings.features.spot.link_rules) ? (!1 !== (t = await this._loadPageActionLinks()) && (this._websiteId = t.website_id, this._pageId = t.page_id, this._actionLinks = t.action_links, this._settingsLoaded = !0, this._reportEnabled && (this.report.num_actions = Object.keys(this._actionLinks).length)), this._prepareAnchorURI(), Object.keys(this._actionLinks).length > 0 ? (this._logActivity('Checking link_rules.'), this._applyLinkRules()) : this._logActivity('link_rules no rules to apply.')) : this._logActivity('link_rules feature is disabled.'), this._asBoolean(this._frClient._settings.features.spot.asin_rules) ? (!1 !== (t = await this._loadAsinsPerEnv()) && (this._asinRules = t.asins, this._settingsLoaded = !0, this._reportEnabled && (this.report.num_asins = Object.keys(this._asinRules).length)), Object.keys(this._asinRules).length > 0 ? (this._dataset.asin = this._frClient._prepareAnchorASIN(), this._applyASINRules(), this._logActivity('Checking asin_rules.')) : this._logActivity('link_rules no rules to apply.')) : this._logActivity('asin_rules feature is disabled.'), this._asBoolean(this._frClient._settings.features.spot.asin_per_page)) {
                            let e = this._getAllPerPageAnchors();
                            e.length > 0 ? !1 !== (t = await this._loadLogic('/{l}/{c}/{p}/{u}/{i}', 'pp', 'tags.json')) && this._applyPerPageLogic(t, e) : this._logActivity('no asin to replace.');
                        } else
                            this._logActivity('asin_per_page feature is disabled.');
                        this._asBoolean(this._frClient._settings.features.spot.direct_deals) ? !1 !== (t = await this._loadLogic('/{l}/{c}/{u}/{i}', 'pl', 'place.json')) && void 0 !== trx.LZString && this._applyDirectDealsLogic(t) : this._logActivity('direct deals feature is disabled.');
                    } else
                        console.log('Spot inactive for this profile.');
                }
                async _loadPageActionLinks() {
                    const $___old_228e61175eee6382 = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                    try {
                        if ($___old_228e61175eee6382)
                            ({}.constructor.defineProperty(window, 'fetch', $___mock_a99706fad836ae13.fetch));
                        return function () {
                            if ('api' === this._spotSettings.rulesSource) {
                                let t = {
                                    profile: '',
                                    href: location.href,
                                    app_key: this._spotSettings.app_key
                                };
                                const e = await fetch(this._spotSettings.spot_host + '/page-action-links?' + this.createHttpQuery(t));
                                if (e.ok) {
                                    let t = await e.json();
                                    return 1 === t.status ? t.data : 2 === t.status ? (this._logActivity('No rule\'s action-links found for page'), !1) : (this._logWarning('Fail to read rule\'s action-links for page from api. Details: ' + t.message), !1);
                                }
                                return this._logWarning(`Fail to read rule's action-links for page from api. Status: ${ e.statusText } Code: ${ e.status }`), !1;
                            }
                            {
                                let t = this.getWebPageURI();
                                const e = await fetch(this._spotSettings.s3_rule_action_links_url + '/' + t + '/action_links.json');
                                return e.ok ? await e.json() : (this._logWarning(`Fail to read rule's action-links for page from S3. Possibly file does not exist on S3. Status: ${ e.statusText } Code: ${ e.status }`), !1);
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_228e61175eee6382)
                            ({}.constructor.defineProperty(window, 'fetch', $___old_228e61175eee6382));
                    }
                }
                async _loadAsinsPerEnv() {
                    let t = this._frClient._settings.features.spot.profile, e = this._spotSettings.s3_rule_action_links_url + '/publisher_code/' + t + '/asin_map.json';
                    const i = await fetch(e);
                    return i.ok ? await i.json() : (this._logWarning(`Fail to read rule's action-links for page from S3. Possibly file does not exist on S3. Status: ${ i.statusText } Code: ${ i.status }`), !1);
                }
                async _loadLogic(t, e, i) {
                    let a = this._frClient._customerId, r = a.split('_'), n = r[0], s = a.replace(r[0] + '_' + r[1] + '_', ''), o = this.getWebPageURI();
                    var l = t.replace('{l}', e).replace('{c}', n).replace('{p}', s).replace('{u}', o).replace('{i}', i);
                    let d = this._spotSettings.s3_rule_action_links_url + l;
                    const h = await fetch(d);
                    return h.ok ? await h.json() : 403 !== h.status && (this._logWarning(`Fail to read rule's logic for page from S3. Possibly file does not exist on S3. Status: ${ h.statusText } Code: ${ h.status }`), !1);
                }
                async _loadAsinsPerDomain() {
                    let t = this.getWebPageHost();
                    const e = await fetch(this._spotSettings.s3_rule_action_links_url + '/' + t + '/asins.json');
                    return e.ok ? await e.json() : (this._logWarning(`Fail to read rule's action-links for page from S3. Possibly file does not exist on S3. Status: ${ e.statusText } Code: ${ e.status }`), !1);
                }
                createHttpQuery(t) {
                    let e = '';
                    for (let a in t)
                        if (t.hasOwnProperty(a)) {
                            e.length > 0 && (e += '&');
                            let r = t[a];
                            if (Array.isArray(r))
                                for (var i = 0; i < r.length; i++)
                                    e += encodeURIComponent(a + `[${ i }]`) + '=' + encodeURIComponent(r[i]);
                            else
                                e += encodeURIComponent(a) + '=' + encodeURIComponent(r);
                        }
                    return e;
                }
                getWebPageURI() {
                    let t = location.hostname, e = location.pathname;
                    return '/' !== e.charAt(0) && (e = '/' + e), '/' === e.charAt(e.length - 1) && (e = e.slice(0, -1)), (t + e).toLowerCase();
                }
                getWebPageHost() {
                    let t = location.hostname, e = location.pathname;
                    return '/' !== e.charAt(0) && (e = '/' + e), t.toLowerCase();
                }
                _getAllPerPageAnchors() {
                    let t = [];
                    for (let e = 0; e < document.links.length; e++) {
                        let i = document.links[e], a = i.href, r = i.getAttribute('data-orig-url');
                        ((-1 !== a.indexOf('/dp/') || a.indexOf(encodeURIComponent('/dp/'))) && -1 !== a.indexOf('amazon.') || (-1 !== a.indexOf('/gp/') || a.indexOf(encodeURIComponent('/gp/'))) && -1 !== a.indexOf('amazon.') || -1 != a.indexOf('/amzn.') || -1 != a.indexOf('/www.amzn.') || -1 != a.indexOf('.amazon-adsystem.com')) && t.push(i);
                    }
                    return t;
                }
                _applyDirectDealsLogic(t) {
                    var e, e;
                    if ((e = document.getElementsByClassName('trx_ppp')).length > 0)
                        for (var i = 0; i < e.length; i++)
                            e[i].parentNode.removeChild(e[i]);
                    if ((e = document.getElementsByClassName('trx_ppp_txt')).length > 0)
                        for (var i = 0; i < e.length; i++) {
                            var a = e[i].innerHTML;
                            e[i].outerHTML = a;
                        }
                    if (void 0 !== t.length) {
                        for (var r = {}, n = {}, i = 0; i < t.length; i++)
                            t[i], 'large' != t[i].ad_unit && 'small' != t[i].ad_unit || (t[i].ad_unit = 'ad'), void 0 == r[t[i].ad_unit] && (r[t[i].ad_unit] = 0, n[t[i].ad_unit] = []), r[t[i].ad_unit] += 1, n[t[i].ad_unit].push(i), 'text' == t[i].ad_unit && this._applyDirectDealLogic(t[i]);
                        if (void 0 !== r.ad)
                            if (1 == r.ad)
                                this._applyDirectDealLogic(t[n.ad[0]]);
                            else {
                                var e = Math.floor(Math.random() * n.ad.length);
                                this._applyDirectDealLogic(t[n.ad[e]]);
                            }
                    } else
                        this._applyDirectDealLogic(t);
                }
                _applyDirectDealLogic(t) {
                    let e = this._frClient._generateUUID();
                    var i = t.aff_link.replace('%7bxid%7d', e);
                    if (i = (i = (i = (i = i.replace('%7boffer_id%7d', t.offer_id)).replace('%7bcampaign_id%7d', t.campaign_id)).replace('%7badtype%7d', t.ad_unit)) + '&p=' + encodeURIComponent(location.href), void 0 !== t.placement) {
                        var a = trx.LZString.decompressFromEncodedURIComponent(t.placement);
                        let l = document.createElement('div');
                        l.style = 'margin: 40px 0px;', l.className = 'trx_ppp', a = a.replace('{tracking_url}', i), l.innerHTML = a;
                        var r = document.querySelector(t.placement_positions);
                        if (null !== r) {
                            var n = i.indexOf('q=');
                            if (-1 !== n) {
                                var s = i.indexOf('&p=');
                                if (-1 !== s)
                                    var o = i.substring(n + 2, s);
                                else
                                    var o = i.substring(n + 2);
                                o.length > 0 && (o = decodeURIComponent(o).replace('/c/', '/i/'), l.innerHTML += '<img src=\'' + o + '\'/>');
                            }
                            r.appendChild(l), this._recordDirectDealsImp(t, e);
                        }
                    } else if ('text' == t.ad_unit) {
                        let a = document.getElementsByTagName('body')[0].innerHTML;
                        var l = new RegExp(t.keywords, 'i');
                        a = a.replace(l, '<a href="' + i + '" class="trx_ppp_txt" target="_blank" >' + t.keywords + '</a>'), document.getElementsByTagName('body')[0].innerHTML = a, this._recordDirectDealsImp(t, e);
                    }
                }
                _recordDirectDealsImp(t, e) {
                    let i = this._frClient._paramsBuffer;
                    if (i.client_time = new Date().toISOString(), i.page_title = document.title, i.iid = e, i.event_type = 'impression', void 0 === i.customer_id) {
                        i.cidp1 = i.customer_id = this._frClient._customerId;
                        const t = this._frClient._paramsBuffer.customer_id.split('_');
                        if (-1 !== i.customer_id.indexOf('_')) {
                            const t = i.customer_id.split('_');
                            if (t.length > 2) {
                                let e = t.slice(0, t.length - 1);
                                i.cidp1 = e.join('_'), i.cidp2 = t[t.length - 1];
                            }
                        }
                    }
                    var a = {};
                    a.campaign_id = t.campaign_id, a.offer_id = t.offer_id, a.ad_unit = t.ad_unit, a.agent = navigator.userAgent, i.ad = a;
                    var r = JSON.stringify(i), n = trx.LZString.compressToEncodedURIComponent(r);
                    this._frClient._debug('Meta ' + r.length + '  bytes decresed to ' + n.length + ' bytes (' + Math.round(100 * n.length / r.length) + ' %)');
                    var s = this._frClient._envSettings.events_recording_iid + '/i/c/i.png?q=' + n;
                    if (this._frClient.pixel_append(s), s.length >= 8000 && 'undefined' != typeof Storage) {
                        var o, l = 'fr_log_' + Math.round(new Date().getTime() / 1000), d = {}, h = this._frClient._getLogInfomration(d);
                        h.url = window.location.href, h.message = 'pixel too big ' + s.length, localStorage.setItem(l, JSON.stringify(h));
                    }
                }
                _applyPerPageLogic(t, e) {
                    if (void 0 !== t.replace && void 0 !== t.replace.amazon || void 0 !== t.all && void 0 !== t.all.amazon || void 0 !== t.add && void 0 !== t.add.amazon) {
                        let d = 0, h = 0, _ = 0, c = 0;
                        var i = {};
                        for (var a in (void 0 !== t.all && (t.all = this._perPageCleanParams(t.all)), void 0 !== t.replace && (t.replace = this._perPageCleanParams(t.replace)), void 0 !== t.add && (t.add = this._perPageCleanParams(t.add)), e)) {
                            let i = e[a];
                            if (i.hasAttribute('data-spot-replaced'))
                                continue;
                            void 0 !== t.sl && void 0 !== i.href && void 0 !== t.sl && void 0 !== t.sl[i.href] && (i.setAttribute('data-orig-url', i.href), i.href = t.sl[i], c += 1);
                            let p = i.href, u = i.getAttribute('data-orig-url');
                            this._isEmpty(u) || (p = u), u = p, i.setAttribute('data-orig-url', u), i.setAttribute('data-spot-replaced', '1');
                            let f = this._pageId;
                            null == f && (f = '');
                            let g = this._frClient.parseQueryString(u), m = '';
                            this._isEmpty(g.tag) || (m = g.tag);
                            let v = this._frClient._detectKnownAffiliateLink(i.href, {});
                            var r = !1;
                            void 0 !== t.all && (r = this._perPageReplaceParams(i, t.all.amazon, r)), void 0 !== t.replace && (r = this._perPageReplaceParams(i, t.replace.amazon, r));
                            var n = !1;
                            if (!1 === r && (-1 !== p.indexOf('/dp/') || -1 !== p.indexOf('/gp/') || -1 !== p.indexOf(encodeURIComponent('/dp/')) || -1 !== p.indexOf(encodeURIComponent('/gp/')))) {
                                '' !== v && null !== v || (v = 'amazon');
                                var s = !1;
                                -1 === p.indexOf(encodeURIComponent('/dp/')) && -1 === p.indexOf(encodeURIComponent('/gp/')) || (s = !0), void 0 !== t.all && (n = this._perPageAppendParams(i, t.all.amazon, n, s)), void 0 !== t.add && (n = this._perPageAppendParams(i, t.add.amazon, n, s));
                            }
                            if (!0 === n && !i.hasAttribute('data-xid')) {
                                let t = this._frClient._generateUUID();
                                i.setAttribute('data-xid', t);
                            }
                            if (!1 === r && !1 === n)
                                continue;
                            var o = { 20: 'United States' };
                            if ('ge' == v && void 0 !== t.all && void 0 !== t.all.amazon.tag && void 0 !== permutive && void 0 !== permutive.context && void 0 !== permutive.context.country) {
                                var l = t.all.amazon.tag.split('-');
                                if (l.length > 0 && -1 !== o[l[l.length - 1]] && o[l[l.length - 1]] == permutive.context.country && (i.href = i.href.replace(/(TSID=[\d]*&)/, ''), !i.hasAttribute('data-xid'))) {
                                    let t = this._frClient._generateUUID();
                                    i.setAttribute('data-xid', t);
                                }
                            }
                            let y = {
                                orig_url: u,
                                url: i.href
                            };
                            this._reportEnabled && this._report.links.push(y);
                            let k = {
                                network: v,
                                anchor: i,
                                info: y
                            };
                            this._clickRebind(k), d += 1, !0 === r && (_ += 1), !0 === n && (h += 1);
                        }
                        this._logActivity(`Action applied for rule per page '${ d }' , switched tag '${ _ }', reattributed '${ h }', short links opend '${ c }' `);
                    }
                }
                _perPageCleanParams(t) {
                    for (var e in t)
                        for (var i in t[e])
                            'string' == typeof t[e][i] && (t[e][i] = t[e][i].trim());
                    return t;
                }
                _perPageReplaceParams(t, e, i) {
                    for (var a in e) {
                        var r = new RegExp('(\\%26|\\%3F|\\&|\\?)(' + a + '=|' + a + '\\%3D)([^\\&|\\%])+', 'g');
                        t.href.search(r) >= 0 && !1 === i && (i = !0, t.href = t.href.replace(r, '$1$2' + e[a]));
                    }
                    return i;
                }
                _perPageAppendParams(t, e, i, a) {
                    for (var r in e) {
                        var n;
                        !1 === new RegExp('(\\&|\\?)(' + r + '=)[^\\&]]+', 'g').test(t.href) && !1 === i && (i = !0, t.href = !0 === a ? this._frClient._appendNameValueToUrl(t.href, '', e[r], r, !1, 'amazon', '', a) : this._frClient._appendNameValueToUrl(t.href, '', e[r], r, !1, 'amazon', ''));
                    }
                    return i;
                }
                _applyASINRules() {
                    for (let t of Object.keys(this._dataset.asin)) {
                        let e = this._dataset.asin[t];
                        if (void 0 !== this._asinRules[t]) {
                            let i = 0;
                            for (let a in e) {
                                let r = e[a], n = r.href, s = r.getAttribute('data-orig-url');
                                this._isEmpty(s) || (n = s), s = n, r.setAttribute('data-orig-url', s), r.setAttribute('data-spot-replaced', this._asinRules[t]), r.href = this._asinRules[t];
                                let o = this._pageId;
                                null == o && (o = '');
                                let l = this._frClient.parseQueryString(s), d = '';
                                this._isEmpty(l.tag) || (d = l.tag);
                                let h = {
                                        '{tag}': d,
                                        '{asin}': t,
                                        '{page_id}': o
                                    }, _ = this._generateGenricRID(h, 'fr{ts}_{asin}_{page_id}_{c1}{c2}{c3}_{tag}'), c = this._frClient._detectKnownAffiliateLink(r.href, {});
                                r.href = this._frClient._appendExtraParam(c, r.href, 'rid', _, !1), r.setAttribute('data-spot-rid', _);
                                let p = {
                                    rule_id: t,
                                    orig_url: s,
                                    url: r.href
                                };
                                this._reportEnabled && this._report.links.push(p);
                                let u = {
                                    network: c,
                                    anchor: r,
                                    info: p
                                };
                                this._clickRebind(u), i += 1;
                            }
                            this._logActivity(`Action applied for rule asin '${ t }'`);
                        }
                    }
                }
                _clickRebind(t) {
                    if (t.anchor.hasAttribute('data-skimlinks-tracking')) {
                        let e = t.anchor.cloneNode(!0);
                        null !== anchor.parentNode && (t.anchor.parentNode.replaceChild(e, t.anchor), t.anchor = e);
                    }
                    null != t.anchor.click_fn && 'function' == typeof t.anchor.click_fn && t.anchor.removeEventListener('click', t.anchor.click_fn);
                    let e = this._frClient._linkClicked.bind(this._frClient, t);
                    t.anchor.addEventListener('click', e), t.anchor.click_fn = e, null != t.anchor.contextmenu_fn && 'function' == typeof t.anchor.contextmenu_fn && t.anchor.removeEventListener('contextmenu', t.anchor.contextmenu_fn);
                    let i = this._frClient._linkClicked.bind(this._frClient, t);
                    t.anchor.addEventListener('contextmenu', i), t.anchor.contextmenu_fn = i;
                }
                _applyLinkRules() {
                    let t = {};
                    for (let i of Object.keys(this._actionLinks)) {
                        let a = this._actionLinks[i], r = a.actions;
                        if (null == r) {
                            console.warn(`Rule's page actions with old format was found and ignored. Save the rule with Id: ${ i } to update actions data.`);
                            continue;
                        }
                        let n = 0, s = 0;
                        null != a.start_date && (n = parseInt(a.start_date), Number.isNaN(n) && (n = 0)), null != a.end_date && (s = parseInt(a.end_date), Number.isNaN(s) && (s = 0));
                        let o = null != this._refDate && this._refDate > 0 ? this._refDate : Math.round(Date.now() / 1000);
                        if (n > 0 && o < n)
                            this._logActivity(`Action found for rule '${ i }' but rule's start-date has not arrived yet. Rule action ignored.`);
                        else if (s > 0 && o > s)
                            this._logActivity(`Action found for rule '${ i }' but rule's end date passed. Rule action ignored.`);
                        else
                            for (let a of Object.keys(r))
                                if (null == t[a]) {
                                    let n = r[a], s = this._findAnchorByUri(n.uri);
                                    if (null != s)
                                        for (var e = 0; e < s.length; e++)
                                            this._processLink(n, s[e], i), t[a] = !0, this._logActivity(`Action applied for rule '${ i }'`);
                                }
                    }
                }
                _prepareQuery(t) {
                    let e = '';
                    for (let i in t)
                        if (t.hasOwnProperty(i)) {
                            e.length > 0 && (e += '&');
                            let a = t[i];
                            e += i + '=' + encodeURIComponent(a);
                        }
                    return e;
                }
                _processLink(t, e, i) {
                    let a = e.href;
                    if (e.hasAttribute('data-skimlinks-tracking')) {
                        let t = e.cloneNode(!0);
                        if (null !== e.parentNode) {
                            e.parentNode.replaceChild(t, e), e = t;
                            let r, n, s = {
                                    network: this._frClient._detectKnownAffiliateLink(e.href, {}),
                                    anchor: e,
                                    info: {
                                        rule_id: i,
                                        orig_url: a,
                                        url: e.href
                                    }
                                }, o = this._frClient._linkClicked.bind(this._frClient, s);
                            e.addEventListener('click', o);
                        }
                    }
                    e.setAttribute('data-orig-url', a), e.setAttribute('data-spot-replaced', ''), e.href = t.url, this._appendRID(e, t, i);
                    let r = {
                        rule_id: i,
                        orig_url: a,
                        url: t.url
                    };
                    this._reportEnabled && this._report.links.push(r);
                }
                _findAnchorByUri(t, e) {
                    return void 0 !== this._dataset.uri[t] && (void 0 === e && (e = 0), this._dataset.uri[t]) ? this._dataset.uri[t] : null;
                }
                _prepareAnchorURI() {
                    let t = {};
                    for (let e = 0; e < document.links.length; e++) {
                        let i = document.links[e], a = i.href, r = i.getAttribute('data-orig-url');
                        this._isEmpty(r) || (a = r);
                        let n = 0;
                        null != t[a] && (n = t[a] + 1), n = 0, i.dataset.uri = this.getWebLinkURI(this._websiteId, this._pageId, n, a), void 0 == this._dataset.uri[i.dataset.uri] && (this._dataset.uri[i.dataset.uri] = []), this._dataset.uri[i.dataset.uri].push(i);
                    }
                }
                _isEmpty(t) {
                    return null == t || '' === t;
                }
                getWebLinkURI(t, e, i, a) {
                    a = this.decodeHtmlSpecialChars(a), a = this.replaceAll(a, '\n', '');
                    let r = t + e + i + (a = this.replaceAll(a, '\r', ''));
                    return trx.md5 ? trx.md5(r) : md5 ? md5(r) : (this.error('Fail to load the md5 function. Spot\'s links recognition will not work properly.'), a);
                }
                replaceAll(t, e, i) {
                    return null == t ? t : t.replace(new RegExp(e, 'g'), i);
                }
                decodeHtmlSpecialChars(t) {
                    const e = {
                        '&amp;': '&',
                        '&lt;': '<',
                        '&gt;': '>',
                        '&quot;': '"',
                        '&#39;': '\''
                    };
                    return t.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function (t) {
                        return e[t];
                    });
                }
                _appendRID(t, e, i) {
                    let a = this._frClient._detectKnownAffiliateLink(t.href, {});
                    a || (a = '');
                    let r = this._generateRID(e, i);
                    t.href = this._frClient._appendExtraParam(a, t.href, 'rid', r, !1), t.setAttribute('data-spot-rid', r);
                }
                _generateRID(t, e) {
                    const i = Date.now(), a = String.fromCharCode(Math.floor(10 * Math.random() + 97)), r = String.fromCharCode(Math.floor(10 * Math.random() + 97)), n = String.fromCharCode(Math.floor(10 * Math.random() + 97));
                    return `fr${ i }_${ e }_${ t.link_id }_${ a }${ r }${ n }`;
                }
                _generateGenricRID(t, e) {
                    const i = Date.now(), a = String.fromCharCode(Math.floor(10 * Math.random() + 97)), r = String.fromCharCode(Math.floor(10 * Math.random() + 97)), n = String.fromCharCode(Math.floor(10 * Math.random() + 97));
                    void 0 === e && (e = 'fr{ts}_{ruleId}_{link_id}_{c1}{c2}{c3}');
                    let s = e.replace('{ts}', i).replace('{c1}', a).replace('{c2}', r).replace('{c3}', n);
                    for (let e in t)
                        s = s.replace(e, t[e]);
                    return s;
                }
                _logActivity(t) {
                    null != window.trxdebug && console.log(t), this._reportEnabled && this.report.activity.push('I::' + t);
                }
                _logError(t) {
                    console.error(t), this._reportEnabled && this.report.activity.push('E::' + t);
                }
                _logWarning(t) {
                    console.warn(t), this._reportEnabled && this.report.activity.push('E::' + t);
                }
            };
        }();
        trx.run_md5 = !function (n) {
            'use strict';
            function d(n, t) {
                var r = (65535 & n) + (65535 & t);
                return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
            }
            function f(n, t, r, e, o, u) {
                return d(function (n, t) {
                    return n << t | n >>> 32 - t;
                }(d(d(t, n), d(e, u)), o), r);
            }
            function l(n, t, r, e, o, u, c) {
                return f(t & r | ~t & e, n, t, o, u, c);
            }
            function g(n, t, r, e, o, u, c) {
                return f(t & e | r & ~e, n, t, o, u, c);
            }
            function v(n, t, r, e, o, u, c) {
                return f(t ^ r ^ e, n, t, o, u, c);
            }
            function m(n, t, r, e, o, u, c) {
                return f(r ^ (t | ~e), n, t, o, u, c);
            }
            function i(n, t) {
                var r, e, o, u, c;
                n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
                var f = 1732584193, i = -271733879, a = -1732584194, h = 271733878;
                for (r = 0; r < n.length; r += 16)
                    i = m(i = m(i = m(i = m(i = v(i = v(i = v(i = v(i = g(i = g(i = g(i = g(i = l(i = l(i = l(i = l(o = i, a = l(u = a, h = l(c = h, f = l(e = f, i, a, h, n[r], 7, -680876936), i, a, n[r + 1], 12, -389564586), f, i, n[r + 2], 17, 606105819), h, f, n[r + 3], 22, -1044525330), a = l(a, h = l(h, f = l(f, i, a, h, n[r + 4], 7, -176418897), i, a, n[r + 5], 12, 1200080426), f, i, n[r + 6], 17, -1473231341), h, f, n[r + 7], 22, -45705983), a = l(a, h = l(h, f = l(f, i, a, h, n[r + 8], 7, 1770035416), i, a, n[r + 9], 12, -1958414417), f, i, n[r + 10], 17, -42063), h, f, n[r + 11], 22, -1990404162), a = l(a, h = l(h, f = l(f, i, a, h, n[r + 12], 7, 1804603682), i, a, n[r + 13], 12, -40341101), f, i, n[r + 14], 17, -1502002290), h, f, n[r + 15], 22, 1236535329), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 1], 5, -165796510), i, a, n[r + 6], 9, -1069501632), f, i, n[r + 11], 14, 643717713), h, f, n[r], 20, -373897302), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 5], 5, -701558691), i, a, n[r + 10], 9, 38016083), f, i, n[r + 15], 14, -660478335), h, f, n[r + 4], 20, -405537848), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 9], 5, 568446438), i, a, n[r + 14], 9, -1019803690), f, i, n[r + 3], 14, -187363961), h, f, n[r + 8], 20, 1163531501), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 13], 5, -1444681467), i, a, n[r + 2], 9, -51403784), f, i, n[r + 7], 14, 1735328473), h, f, n[r + 12], 20, -1926607734), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 5], 4, -378558), i, a, n[r + 8], 11, -2022574463), f, i, n[r + 11], 16, 1839030562), h, f, n[r + 14], 23, -35309556), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 1], 4, -1530992060), i, a, n[r + 4], 11, 1272893353), f, i, n[r + 7], 16, -155497632), h, f, n[r + 10], 23, -1094730640), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 13], 4, 681279174), i, a, n[r], 11, -358537222), f, i, n[r + 3], 16, -722521979), h, f, n[r + 6], 23, 76029189), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 9], 4, -640364487), i, a, n[r + 12], 11, -421815835), f, i, n[r + 15], 16, 530742520), h, f, n[r + 2], 23, -995338651), a = m(a, h = m(h, f = m(f, i, a, h, n[r], 6, -198630844), i, a, n[r + 7], 10, 1126891415), f, i, n[r + 14], 15, -1416354905), h, f, n[r + 5], 21, -57434055), a = m(a, h = m(h, f = m(f, i, a, h, n[r + 12], 6, 1700485571), i, a, n[r + 3], 10, -1894986606), f, i, n[r + 10], 15, -1051523), h, f, n[r + 1], 21, -2054922799), a = m(a, h = m(h, f = m(f, i, a, h, n[r + 8], 6, 1873313359), i, a, n[r + 15], 10, -30611744), f, i, n[r + 6], 15, -1560198380), h, f, n[r + 13], 21, 1309151649), a = m(a, h = m(h, f = m(f, i, a, h, n[r + 4], 6, -145523070), i, a, n[r + 11], 10, -1120210379), f, i, n[r + 2], 15, 718787259), h, f, n[r + 9], 21, -343485551), f = d(f, e), i = d(i, o), a = d(a, u), h = d(h, c);
                return [
                    f,
                    i,
                    a,
                    h
                ];
            }
            function a(n) {
                var t, r = '', e = 32 * n.length;
                for (t = 0; t < e; t += 8)
                    r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
                return r;
            }
            function h(n) {
                var t, r = [];
                for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)
                    r[t] = 0;
                var e = 8 * n.length;
                for (t = 0; t < e; t += 8)
                    r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
                return r;
            }
            function e(n) {
                var t, r, e = '0123456789abcdef', o = '';
                for (r = 0; r < n.length; r += 1)
                    t = n.charCodeAt(r), o += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
                return o;
            }
            function r(n) {
                return unescape(encodeURIComponent(n));
            }
            function o(n) {
                return function (n) {
                    return a(i(h(n), 8 * n.length));
                }(r(n));
            }
            function u(n, t) {
                return function (n, t) {
                    var r, e, o = h(n), u = [], c = [];
                    for (u[15] = c[15] = void 0, 16 < o.length && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)
                        u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
                    return e = i(u.concat(h(t)), 512 + 8 * t.length), a(i(c.concat(e), 640));
                }(r(n), r(t));
            }
            function t(n, t, r) {
                return t ? r ? u(t, n) : function (n, t) {
                    return e(u(n, t));
                }(t, n) : r ? o(n) : function (n) {
                    return e(o(n));
                }(n);
            }
            'function' == typeof define && define.amd ? define(function () {
                return t;
            }) : 'object' == typeof module && module.exports ? module.exports = t : n.md5 = t;
            trx.md5 = t;
        }(this);
    }())
}