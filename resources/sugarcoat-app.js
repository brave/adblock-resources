{
    const $___mock_65d8d0ef2016a5d3 = {};
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
    })($___mock_65d8d0ef2016a5d3);
    (function () {
        (function (e) {
            function t(t) {
                for (var n, s, o = t[0], l = t[1], d = t[2], u = 0, h = []; u < o.length; u++)
                    s = o[u], Object.prototype.hasOwnProperty.call(i, s) && i[s] && h.push(i[s][0]), i[s] = 0;
                for (n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                c && c(t);
                while (h.length)
                    h.shift()();
                return r.push.apply(r, d || []), a();
            }
            function a() {
                for (var e, t = 0; t < r.length; t++) {
                    for (var a = r[t], n = !0, o = 1; o < a.length; o++) {
                        var l = a[o];
                        0 !== i[l] && (n = !1);
                    }
                    n && (r.splice(t--, 1), e = s(s.s = a[0]));
                }
                return e;
            }
            var n = {}, i = { index: 0 }, r = [];
            function s(t) {
                if (n[t])
                    return n[t].exports;
                var a = n[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
            }
            s.m = e, s.c = n, s.d = function (e, t, a) {
                s.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a
                });
            }, s.r = function (e) {
                'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t)
                    return e;
                if (4 & t && 'object' === typeof e && e && e.__esModule)
                    return e;
                var a = Object.create(null);
                if (s.r(a), Object.defineProperty(a, 'default', {
                        enumerable: !0,
                        value: e
                    }), 2 & t && 'string' != typeof e)
                    for (var n in e)
                        s.d(a, n, function (t) {
                            return e[t];
                        }.bind(null, n));
                return a;
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e['default'];
                } : function () {
                    return e;
                };
                return s.d(t, 'a', t), t;
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, s.p = '/';
            var o = window['webpackJsonp'] = window['webpackJsonp'] || [], l = o.push.bind(o);
            o.push = t, o = o.slice();
            for (var d = 0; d < o.length; d++)
                t(o[d]);
            var c = l;
            r.push([
                0,
                'chunk-vendors'
            ]), a();
        }({
            0: function (e, t, a) {
                e.exports = a('56d7');
            },
            '56d7': function (e, t, a) {
                'use strict';
                a.r(t);
                a('e260'), a('e6cf'), a('cca6'), a('a79d');
                var n = a('a026'), i = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', {
                            staticClass: 'track_block',
                            attrs: { id: 'track_block' }
                        }, [e.result.visible ? a('main', [
                                a('Heading', { attrs: { trackcode: e.result.trackcode } }),
                                e.result.loading ? a('div', {
                                    staticClass: 'bar',
                                    attrs: { id: 'load-bar' }
                                }) : e._e(),
                                e.result.loading && !e.hasData ? a('section', [a('div', { staticClass: 'container' }, [a('div', { staticClass: 'row' }, [a('div', { staticClass: 'col-12 col-lg-9' }, [a('Loading', { attrs: { result: e.result.data } })], 1)])])]) : e._e(),
                                e.hasData ? a('BlockList', {
                                    key: e.result.key,
                                    attrs: {
                                        result: e.result.data,
                                        translate: e.translate,
                                        isLoading: e.result.loading
                                    },
                                    on: { onRefresh: e.onRefresh }
                                }) : e._e(),
                                e.hasData || e.result.loading ? e._e() : a('Alert', { attrs: { trackcode: e.result.trackcode } })
                            ], 1) : e._e()]);
                    }, r = [], s = (a('d3b7'), function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('section', { staticClass: 'heading' }, [a('div', { staticClass: 'container' }, [a('div', { staticClass: 'row' }, [
                                    a('div', { staticClass: 'col-12 col-lg-8' }, [
                                        a('div', { staticClass: 'top-line row align-items-lg-center' }, [a('div', { staticClass: 'col-12 col-md-12' }, [a('div', { staticClass: 'title title-name' }, [
                                                    a('svg', {
                                                        attrs: {
                                                            viewBox: '0 0 43 37',
                                                            width: '43',
                                                            height: '37',
                                                            fill: 'none',
                                                            xmlns: 'http://www.w3.org/2000/svg'
                                                        }
                                                    }, [a('path', {
                                                            attrs: {
                                                                d: 'M0 0h2.688v37H0V0zM21.5 0h5.375v37H21.5V0zM29.563 0h2.687v37h-2.688V0zM34.938 0h2.687v37h-2.688V0zM40.313 0H43v37h-2.688V0zM5.375 0h8.063v37H5.374V0zM16.125 0h2.688v37h-2.688V0z',
                                                                fill: '#222'
                                                            }
                                                        })]),
                                                    a('div', [
                                                        e.editing ? e._e() : a('h3', { staticClass: 'track-name' }, [e._v(e._s(e.head) + ' ')]),
                                                        e.editing ? a('input', {
                                                            directives: [
                                                                {
                                                                    name: 'focus',
                                                                    rawName: 'v-focus'
                                                                },
                                                                {
                                                                    name: 'model',
                                                                    rawName: 'v-model',
                                                                    value: e.inputValue,
                                                                    expression: 'inputValue'
                                                                }
                                                            ],
                                                            attrs: { placeholder: e.$t('head.track_edit_input') },
                                                            domProps: { value: e.inputValue },
                                                            on: {
                                                                blur: function (t) {
                                                                    return e.saveEditing();
                                                                },
                                                                keyup: function (t) {
                                                                    return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter') ? null : e.saveEditing();
                                                                },
                                                                input: function (t) {
                                                                    t.target.composing || (e.inputValue = t.target.value);
                                                                }
                                                            }
                                                        }) : e._e()
                                                    ])
                                                ])])]),
                                        a('div', { staticClass: 'bottom-line hide' }, [
                                            a('div', { staticClass: 'btn-heading change-name' }, [
                                                a('svg', {
                                                    attrs: {
                                                        width: '22',
                                                        height: '22',
                                                        fill: 'none',
                                                        xmlns: 'http://www.w3.org/2000/svg'
                                                    }
                                                }, [a('path', {
                                                        attrs: {
                                                            d: 'M19.85 13.66a.85.85 0 0 0-1.7 0h1.7zM1 19H.15 1zM3 3v-.85V3zm5.34.85a.85.85 0 0 0 0-1.7v1.7zM17 1l.601-.601a.85.85 0 0 0-1.202 0L17 1zm4 4l.601.601a.85.85 0 0 0 0-1.202L21 5zM11 15v.85a.85.85 0 0 0 .601-.249L11 15zm-4 0h-.85c0 .47.38.85.85.85V15zm0-4l-.601-.601A.85.85 0 0 0 6.15 11H7zm11.15 2.66V19h1.7v-5.34h-1.7zm0 5.34c0 .305-.121.598-.337.813l1.202 1.202A2.85 2.85 0 0 0 19.85 19h-1.7zm-.337.813a1.15 1.15 0 0 1-.813.337v1.7c.756 0 1.48-.3 2.015-.835l-1.202-1.202zM17 20.15H3v1.7h14v-1.7zm-14 0a1.15 1.15 0 0 1-.813-.337L.985 21.015A2.85 2.85 0 0 0 3 21.85v-1.7zm-.813-.337A1.15 1.15 0 0 1 1.85 19H.15c0 .756.3 1.48.835 2.015l1.202-1.202zM1.85 19V5H.15v14h1.7zm0-14c0-.305.121-.598.337-.813L.985 2.985A2.85 2.85 0 0 0 .15 5h1.7zm.337-.813A1.15 1.15 0 0 1 3 3.85v-1.7c-.756 0-1.48.3-2.015.835l1.202 1.202zM3 3.85h5.34v-1.7H3v1.7zm13.399-2.249l4 4 1.202-1.202-4-4-1.202 1.202zm4 2.798l-10 10 1.202 1.202 10-10-1.202-1.202zM11 14.15H7v1.7h4v-1.7zM7.85 15v-4h-1.7v4h1.7zm-.249-3.399l10-10L16.399.399l-10 10 1.202 1.202z',
                                                            fill: '#196BB8'
                                                        }
                                                    })]),
                                                a('p', [e._v('Изменить название')]),
                                                a('div', { staticClass: 'change-input-wrap' }, [
                                                    a('input', {
                                                        attrs: {
                                                            type: 'text',
                                                            value: 'Часы с Алиэкспресс'
                                                        }
                                                    }),
                                                    a('button', { staticClass: 'save' }, [a('svg', {
                                                            attrs: {
                                                                width: '18',
                                                                height: '13',
                                                                fill: 'none',
                                                                xmlns: 'http://www.w3.org/2000/svg'
                                                            }
                                                        }, [a('path', {
                                                                attrs: {
                                                                    d: 'M17 1L6 12 1 7',
                                                                    stroke: '#fff',
                                                                    'stroke-width': '2',
                                                                    'stroke-linecap': 'round',
                                                                    'stroke-linejoin': 'round'
                                                                }
                                                            })])]),
                                                    a('button', { staticClass: 'close-input-wrap' }, [a('svg', {
                                                            attrs: {
                                                                width: '14',
                                                                height: '14',
                                                                fill: 'none',
                                                                xmlns: 'http://www.w3.org/2000/svg'
                                                            }
                                                        }, [a('path', {
                                                                attrs: {
                                                                    d: 'M13.707 1.707A1 1 0 0 0 12.293.293l1.414 1.414zM.293 12.293a1 1 0 1 0 1.414 1.414L.293 12.293zm1.414-12A1 1 0 0 0 .293 1.707L1.707.293zm10.586 13.414a1 1 0 0 0 1.414-1.414l-1.414 1.414zm0-13.414l-12 12 1.414 1.414 12-12L12.293.293zm-12 1.414l12 12 1.414-1.414-12-12L.293 1.707z',
                                                                    fill: '#fff'
                                                                }
                                                            })])])
                                                ])
                                            ]),
                                            a('div', { staticClass: 'btn-heading' }, [
                                                a('svg', {
                                                    attrs: {
                                                        width: '18',
                                                        height: '17',
                                                        fill: 'none',
                                                        xmlns: 'http://www.w3.org/2000/svg'
                                                    }
                                                }, [a('path', {
                                                        attrs: {
                                                            d: 'M9.013 17c.12 0 .232 0 .343-.034a1.722 1.722 0 0 0 1.236-1.003 1.73 1.73 0 0 0 .138-.663H7.296c0 .45.181.883.503 1.202.322.319.759.498 1.214.498zm5.58-9.775c0-2.61-1.838-4.794-4.293-5.372v-.578c0-.338-.135-.662-.377-.902a1.294 1.294 0 0 0-1.82 0c-.242.24-.378.564-.378.902v.578c-2.463.578-4.292 2.763-4.292 5.372V11.9l-1.716 1.7v.85h14.592v-.85l-1.717-1.7V7.225zm1.69-.425H18A8.861 8.861 0 0 0 14.463.128l-1.227 1.215A7.12 7.12 0 0 1 16.283 6.8zM4.79 1.343L3.562.127A8.969 8.969 0 0 0 0 6.8h1.717C1.87 4.548 3.039 2.55 4.79 1.343z',
                                                            fill: '#6FCF97'
                                                        }
                                                    })]),
                                                a('p', [e._v('Оповещения включены')])
                                            ])
                                        ])
                                    ]),
                                    a('div', { staticClass: 'col-12 col-lg-4 hide' }, [a('div', { staticClass: 'input-wrap' }, [
                                            a('input', {
                                                attrs: {
                                                    type: 'text',
                                                    placeholder: 'Введите трек-код своей посылки'
                                                }
                                            }),
                                            a('svg', {
                                                attrs: {
                                                    viewBox: '0 0 21 20',
                                                    width: '21',
                                                    height: '20',
                                                    fill: 'none',
                                                    xmlns: 'http://www.w3.org/2000/svg'
                                                }
                                            }, [a('path', {
                                                    attrs: {
                                                        d: 'M18.317 19.707a1 1 0 0 0 1.415-1.414l-1.415 1.414zm-2.93-5.764a1 1 0 0 0-1.415 1.414l1.415-1.414zM16.027 9c0 3.867-3.131 7-6.99 7v2c4.966 0 8.99-4.03 8.99-9h-2zm-6.99 7c-3.86 0-6.991-3.133-6.991-7h-2c0 4.97 4.024 9 8.99 9v-2zM2.045 9c0-3.867 3.13-7 6.99-7V0C4.07 0 .046 4.03.046 9h2zm6.99-7c3.86 0 6.99 3.133 6.99 7h2c0-4.97-4.023-9-8.99-9v2zm10.696 16.293l-4.345-4.35-1.415 1.414 4.345 4.35 1.415-1.414z',
                                                        fill: '#196BB8'
                                                    }
                                                })])
                                        ])])
                                ])])]);
                    }), o = [], l = {
                        name: 'heading',
                        props: ['trackcode'],
                        data: function () {
                            return {
                                editing: !1,
                                inputValue: '',
                                head: this.trackcode
                            };
                        },
                        mounted: function () {
                            this.head = this.trackcode;
                        },
                        watch: {
                            trackcode: function (e) {
                                this.head = e;
                            }
                        },
                        methods: {
                            toggleEditing: function () {
                                this.editing = !this.editing;
                            },
                            saveEditing: function () {
                                this.editing = !1, this.head = this.inputValue ? this.inputValue : this.trackcode;
                            }
                        }
                    }, d = l, c = a('2877'), u = Object(c['a'])(d, s, o, !1, null, null, null), h = u.exports, g = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('section', { staticClass: 'block-list' }, [a('div', { staticClass: 'container' }, [a('div', { staticClass: 'track-body' }, [
                                    a('div', { staticClass: 'box-layout' }),
                                    a('div', { staticClass: 'box-layout' }),
                                    a('div', { staticClass: 'box-layout' }),
                                    a('div', { staticClass: 'row' }, [
                                        a('div', { staticClass: 'col-12 col-lg-8 track-points' }, [
                                            a('BlockListHeading', {
                                                attrs: {
                                                    data: e.result,
                                                    loading: e.isLoading,
                                                    translate: e.translate,
                                                    grouping: e.grouping
                                                },
                                                on: {
                                                    onRefresh: e.onRefresh,
                                                    setGrouping: e.setGrouping,
                                                    changeEventLang: e.changeEventLang
                                                }
                                            }),
                                            e.result.events.length > 0 ? a('div', [a('Events', {
                                                    attrs: {
                                                        events: e.result.events,
                                                        grouping: e.grouping,
                                                        trackcode: e.result.trackcode,
                                                        show_ads: e.result.show_ads
                                                    }
                                                })], 1) : a('NoPoints', { attrs: { data: e.result } })
                                        ], 1),
                                        a('BlockInfo', { attrs: { data: e.result } })
                                    ], 1)
                                ])])]);
                    }, p = [], m = a('5530'), v = (a('b64b'), function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'top-line' }, [
                            a('div', {
                                staticClass: 'btn-refresh',
                                on: {
                                    click: function (t) {
                                        return e.onRefresh();
                                    }
                                }
                            }, [
                                a('svg', {
                                    class: { anim: e.loading },
                                    attrs: {
                                        id: 'icon_refresh',
                                        viewBox: '0 0 22 22',
                                        width: '22',
                                        height: '22',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg'
                                    }
                                }, [a('path', {
                                        attrs: {
                                            d: 'M21.996 2.87a1 1 0 1 0-2 0h2zm-1 5.98v1a1 1 0 0 0 1-1h-1zm-6-1a1 1 0 1 0 0 2v-2zm4.432 6.316a1 1 0 0 0-1.884-.668l1.884.668zm-3.062-9.661l-.706.708.022.021.684-.73zm3.63-1.634v5.978h2V2.871h-2zm1 4.978h-6v2h6v-2zm-3.452 5.649a7.972 7.972 0 0 1-3.116 3.982l1.104 1.668a9.972 9.972 0 0 0 3.896-4.982l-1.884-.668zm-3.116 3.982A8.024 8.024 0 0 1 9.533 18.8l-.117 1.997c2.164.126 4.31-.452 6.116-1.648l-1.104-1.668zM9.533 18.8a8.017 8.017 0 0 1-4.708-1.878l-1.29 1.528a10.017 10.017 0 0 0 5.881 2.346l.117-1.996zM4.825 16.92a7.963 7.963 0 0 1-2.628-4.317l-1.95.443a9.963 9.963 0 0 0 3.287 5.402l1.291-1.528zm-2.628-4.317a7.939 7.939 0 0 1 .505-5.023L.878 6.76a9.939 9.939 0 0 0-.63 6.287l1.95-.443zm.505-5.023a7.98 7.98 0 0 1 3.434-3.714l-.963-1.752A9.98 9.98 0 0 0 .878 6.76l1.824.821zm3.434-3.714a8.027 8.027 0 0 1 4.988-.912l.28-1.98a10.027 10.027 0 0 0-6.231 1.14l.963 1.752zm4.988-.912a8.012 8.012 0 0 1 4.536 2.258l1.412-1.416A10.012 10.012 0 0 0 11.404.975l-.28 1.98zm4.558 2.28l4.63 4.344L21.68 8.12l-4.63-4.344-1.368 1.458z',
                                            fill: '#196BB8'
                                        }
                                    })]),
                                a('span', [e._v(e._s(e.$t('head.refresh')))])
                            ]),
                            a('p', { attrs: { id: 'info_track_refresh' } }, [e._v(' ' + e._s(e.loading ? e.$t('head.refresh_active') : e.$tc('head.refresh_' + e.getDiffUpdate[0], e.getDiffUpdate[1], [e.getDiffUpdate[1]])) + ' ')]),
                            a('div', { staticClass: 'dropdown-wrap d-flex align-items-center' }, [
                                a('div', { staticClass: 'switch_simple hide' }, [a('input', {
                                        directives: [{
                                                name: 'model',
                                                rawName: 'v-model',
                                                value: e.lang_active,
                                                expression: 'lang_active'
                                            }],
                                        attrs: { type: 'checkbox' },
                                        domProps: { checked: Array.isArray(e.lang_active) ? e._i(e.lang_active, null) > -1 : e.lang_active },
                                        on: {
                                            change: [
                                                function (t) {
                                                    var a = e.lang_active, n = t.target, i = !!n.checked;
                                                    if (Array.isArray(a)) {
                                                        var r = null, s = e._i(a, r);
                                                        n.checked ? s < 0 && (e.lang_active = a.concat([r])) : s > -1 && (e.lang_active = a.slice(0, s).concat(a.slice(s + 1)));
                                                    } else
                                                        e.lang_active = i;
                                                },
                                                function (t) {
                                                    return e.changeActiveEventLanguage();
                                                }
                                            ]
                                        }
                                    })]),
                                a('div', {
                                    directives: [{
                                            name: 'click-outside',
                                            rawName: 'v-click-outside',
                                            value: e.outsideClick('locale'),
                                            expression: 'outsideClick(\'locale\')'
                                        }],
                                    staticClass: 'dropdown dropdown-locales',
                                    class: { show: e.lists.locale.visible }
                                }, [
                                    a('button', {
                                        staticClass: 'dropdown-toggle btn_locale',
                                        attrs: { type: 'button' },
                                        on: {
                                            click: function (t) {
                                                return e.toggleMenu('locale');
                                            }
                                        }
                                    }, [
                                        a('div', {
                                            staticClass: 'i18n_icon',
                                            class: { loading: e.translate.loading }
                                        }, [
                                            a('div', { staticClass: 'pulsating-circle' }),
                                            a('svg', {
                                                attrs: {
                                                    width: '20px',
                                                    height: '20px',
                                                    fill: '#196bb8',
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                                    x: '0px',
                                                    y: '0px',
                                                    viewBox: '0 0 469.333 469.333'
                                                }
                                            }, [
                                                a('path', { attrs: { d: 'M253.227,300.267L253.227,300.267L199.04,246.72l0.64-0.64c37.12-41.387,63.573-88.96,79.147-139.307h62.507V64H192\n                            V21.333h-42.667V64H0v42.453h238.293c-14.4,41.173-36.907,80.213-67.627,114.347c-19.84-22.08-36.267-46.08-49.28-71.467H78.72\n                            c15.573,34.773,36.907,67.627,63.573,97.28l-108.48,107.2L64,384l106.667-106.667l66.347,66.347L253.227,300.267z' } }),
                                                a('path', { attrs: { d: 'M373.333,192h-42.667l-96,256h42.667l24-64h101.333l24,64h42.667L373.333,192z M317.333,341.333L352,248.853\n                            l34.667,92.48H317.333z' } })
                                            ])
                                        ]),
                                        a('span', [e._v(e._s(e.$t('head.language', [e.getCurrent])))])
                                    ]),
                                    a('div', {
                                        staticClass: 'dropdown-menu',
                                        class: { show: e.lists.locale.visible }
                                    }, [
                                        a('div', { staticClass: 'dropdown-item' }, [a('input', {
                                                directives: [{
                                                        name: 'model',
                                                        rawName: 'v-model',
                                                        value: e.locale_search,
                                                        expression: 'locale_search'
                                                    }],
                                                ref: e.data.trackcode + '-search-locale',
                                                attrs: {
                                                    type: 'text',
                                                    placeholder: e.$t('head.language_search.placeholder')
                                                },
                                                domProps: { value: e.locale_search },
                                                on: {
                                                    input: function (t) {
                                                        t.target.composing || (e.locale_search = t.target.value);
                                                    }
                                                }
                                            })]),
                                        a('div', { staticClass: 'dropdown-scroll' }, [
                                            e._l(e.getListLanguageWothoutCurrent, function (t) {
                                                return a('a', {
                                                    key: t.code,
                                                    staticClass: 'dropdown-item',
                                                    class: { active: e.lang_current === t.code },
                                                    attrs: { href: '#' },
                                                    on: {
                                                        click: function (a) {
                                                            return a.preventDefault(), e.changeEventLanguage(t.code);
                                                        }
                                                    }
                                                }, [
                                                    e.lang_current === t.code ? a('svg', {
                                                        attrs: {
                                                            xmlns: 'http://www.w3.org/2000/svg',
                                                            viewBox: '0 0 24 24'
                                                        }
                                                    }, [a('g', { attrs: { 'data-name': 'Layer 2' } }, [a('g', { attrs: { 'data-name': 'checkmark' } }, [
                                                                a('rect', {
                                                                    attrs: {
                                                                        width: '24',
                                                                        height: '24',
                                                                        opacity: '0'
                                                                    }
                                                                }),
                                                                a('path', { attrs: { d: 'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z' } })
                                                            ])])]) : e._e(),
                                                    a('span', [e._v(' ' + e._s('orig' == t.code ? e.$t('head.language_original') : t.name) + ' ')])
                                                ]);
                                            }),
                                            e.getListLanguageWothoutCurrent.length < 1 ? a('div', { staticClass: 'dropdown-item-notfound' }, [
                                                a('span', [e._v(e._s(e.$t('head.language_search.notfound')))]),
                                                e.getListLanguageWothoutCurrent.length < 1 ? a('a', {
                                                    attrs: { href: '#' },
                                                    on: {
                                                        click: function (t) {
                                                            return t.preventDefault(), e.changeEventLanguage('orig');
                                                        }
                                                    }
                                                }, [a('span', [e._v(e._s(e.$t('head.language_search.cancel')))])]) : e._e()
                                            ]) : e._e()
                                        ], 2)
                                    ])
                                ]),
                                a('div', {
                                    directives: [{
                                            name: 'click-outside',
                                            rawName: 'v-click-outside',
                                            value: e.outsideClick('group'),
                                            expression: 'outsideClick(\'group\')'
                                        }],
                                    staticClass: 'dropdown filter-group',
                                    class: { show: e.lists.group.visible }
                                }, [
                                    a('button', {
                                        staticClass: 'dropdown-toggle',
                                        attrs: { type: 'button' },
                                        on: {
                                            click: function (t) {
                                                return e.toggleMenu('group');
                                            }
                                        }
                                    }, [e._v(' ' + e._s(e.$t('head.list_group.' + e.lists.group.current)) + ' ')]),
                                    a('div', {
                                        staticClass: 'dropdown-menu',
                                        class: { show: e.lists.group.visible }
                                    }, e._l(e.lists.group.list, function (t) {
                                        return a('a', {
                                            key: t,
                                            staticClass: 'dropdown-item',
                                            attrs: { href: '#' },
                                            on: {
                                                click: function (a) {
                                                    return a.preventDefault(), e.changeSets('group', t);
                                                }
                                            }
                                        }, [e._v(e._s(e.$t('head.list_group.' + t)))]);
                                    }), 0)
                                ])
                            ])
                        ]);
                    }), f = [], k = (a('4de4'), a('b0c0'), a('4d63'), a('ac1f'), a('25f0'), a('466d'), a('c28b')), _ = a.n(k), w = (a('fb6a'), a('a925')), y = {
                        message: 'Message',
                        loading: {
                            head: 'Search for your package',
                            h2: 'Only a bit left ...',
                            find_text: 'We are looking for companies ...'
                        },
                        tracklist: { delete: 'Delete' },
                        head: {
                            track_edit_input: 'Enter the title...',
                            refresh: 'Refresh',
                            refresh_time: 'Updated {0} {1} ago',
                            refresh_minutes: 'Refreshed just now | Updated {0} minute ago | Updated {0} minutes ago | Updated {0} minutes ago',
                            refresh_hours: 'Refreshed just now | Updated {0} hour ago | Updated {0} hours ago | Updated {0} hours ago',
                            refresh_active: 'Refreshing package information',
                            language: 'Events language: {0}',
                            language_original: 'Not translate',
                            list_group: {
                                all: 'All events',
                                grouped: 'Service Grouping'
                            },
                            language_search: {
                                placeholder: 'Enter language name',
                                notfound: 'Nothing found',
                                cancel: 'Reset language'
                            }
                        },
                        events: {
                            day_number: '{0} day',
                            weight: 'Weight',
                            showAll: 'Show all events'
                        },
                        info: {
                            head: {
                                added: 'Added {0}',
                                in_route: 'Package on the way',
                                in_route_days: '{0} days | {0} day | {0} days | {0} days',
                                last_update: 'Last check',
                                CountryFrom: 'Departure country',
                                CountryTo: 'Destination country',
                                CountryUnknown: 'Country not defined',
                                ComplexItem: 'Package Type',
                                AddressFrom: 'Sender address',
                                AddressTo: 'Address of the recipient',
                                Sender: 'Sender',
                                Recipient: 'Recipient',
                                Phone: 'Phone',
                                Scheduled: 'Delivery scheduled for',
                                Weight: 'Weight',
                                WeightUnitKG: 'kg',
                                WeightUnitG: 'g',
                                WeightUnitLBS: 'lbs',
                                SignedBy: 'Signed',
                                NextTrack: 'Additional Tracking Numbers',
                                finded_at: 'Found in postal services',
                                link: 'Tracking Link',
                                copy: 'Copy',
                                copied: 'Copied!'
                            },
                            values: { g: 'Column' }
                        },
                        official: {
                            head: 'Official sites',
                            p: 'You can track your package on the official sites of postal services'
                        },
                        empty: {
                            head: 'Waiting for package information',
                            h2: 'Information about the location of the package yet.',
                            text: 'If you made an order less than a week ago - this is normal. As a rule, parcel information appears within 10 days.'
                        },
                        we_found: {
                            head: 'We searched in the following services',
                            can_find_question: 'Try to find in others?',
                            can_find_text: 'Do you know which mail service you can search for more?',
                            select_text: 'Choose a postal service'
                        },
                        groups: {
                            track: 'Tracking number: [{0}]',
                            event_count: '{0} events | {0} event | {0} events | {0} events',
                            show: 'Show',
                            hide: 'Hide'
                        },
                        alert: {
                            head: 'Oops! This is an unknown track number.',
                            text: 'We could not determine the service that delivers your package',
                            text2: 'Perhaps you do not have a real track code on hand, check if the track code is entered correctly.'
                        },
                        alert_select_service: {
                            head: 'Choose a postal service',
                            text: 'If you are sure that the track code is real and know which company is involved in tracking this package, you can choose below'
                        },
                        form_request: {
                            text: 'Or perhaps we have not yet added this carrier to our service. If you know where your package is tracked, write to us through this simple form to add a carrier.',
                            btn1: 'Write and add a carrier',
                            alert: 'Your message has been sent successfully. Carrier will be added soon.',
                            service_label: 'Carrier website link',
                            service_ph: 'Enter a name, link or other information',
                            track_label: 'Tracking number',
                            track_ph: 'Enter an example tracking number',
                            text_label: 'Additional message',
                            text_ph: 'Enter your message',
                            send: 'Submit'
                        }
                    }, b = {
                        message: 'Сообщение',
                        loading: {
                            head: 'Выполняем поиск Вашей посылки',
                            h2: 'Осталось совсем немного...',
                            find_text: 'Ищем в компаниях...'
                        },
                        tracklist: { delete: 'Удалить' },
                        head: {
                            track_edit_input: 'Введите название...',
                            refresh: 'Обновить',
                            refresh_time: 'Обновилось {0} {1} назад',
                            refresh_minutes: 'Обновилось только что | Обновилось {0} минуту назад | Обновилось {0} минуты назад |  Обновилось {0} минут назад',
                            refresh_hours: 'Обновилось только что | Обновилось {0} час назад | Обновилось {0} часа назад |  Обновилось {0} часов назад',
                            refresh_active: 'Обновляем информацию о посылке',
                            language: 'Язык статусов: {0}',
                            language_original: 'Без перевода',
                            list_group: {
                                all: 'Все события',
                                grouped: 'Группировка по службам'
                            },
                            language_search: {
                                placeholder: 'Введите название языка',
                                notfound: 'Ничего не найдено',
                                cancel: 'Сбросить язык'
                            }
                        },
                        events: {
                            day_number: '{0} день',
                            weight: 'Вес',
                            showAll: 'Показать все события'
                        },
                        info: {
                            head: {
                                added: 'Добавлено {0}',
                                in_route: 'Посылка в пути',
                                in_route_days: '{0} дней | {0} день | {0} дня | {0} дней',
                                last_update: 'Последняя проверка',
                                CountryFrom: 'Страна отправления',
                                CountryTo: 'Страна назначения',
                                CountryUnknown: 'Страна не определена',
                                ComplexItem: 'Тип посылки',
                                AddressFrom: 'Адрес отправителя',
                                AddressTo: 'Адрес получателя',
                                Sender: 'Отправитель',
                                Recipient: 'Получатель',
                                Phone: 'Телефон',
                                Scheduled: 'Доставка запланирована на',
                                Weight: 'Вес',
                                WeightUnitKG: 'кг.',
                                WeightUnitG: 'гр.',
                                WeightUnitLBS: 'фунт.',
                                SignedBy: 'Расписался',
                                NextTrack: 'Дополнительные номера отслеживания',
                                finded_at: 'Найдено в почтовых службах',
                                link: 'Ссылка для отслеживания',
                                copy: 'Скопировать',
                                copied: 'Скопировано!'
                            },
                            values: { g: 'гр.' }
                        },
                        official: {
                            head: 'Официальные сайты',
                            p: 'Вы можете отследить свою посылку на официальных сайтах почтовых служб'
                        },
                        empty: {
                            head: 'Ожидаем информацию о посылке',
                            h2: 'Информации о местоположении посылки пока нет.',
                            text: 'Если Вы сделали заказ меньше недели назад - это нормально. Как правило, информация о посылке появляется в течение 10 дней.'
                        },
                        we_found: {
                            head: 'Мы искали в следующих службах',
                            can_find_question: 'Попробуем найти в других?',
                            can_find_text: 'Знаете в какой почтовой службе можно поискать еще?',
                            select_text: 'Выберите почтовую службу'
                        },
                        groups: {
                            track: 'Трек-код: [{0}]',
                            event_count: '{0} статусов | {0} статус | {0} статуса | {0} статусов',
                            show: 'Показать',
                            hide: 'Скрыть'
                        },
                        alert: {
                            head: 'УПС! Это неизвестный трек-номер',
                            text: 'Мы не смогли определить службу, которая занимается доставкой Вашей посылки',
                            text2: 'Возможно, у Вас на руках не настоящий трек-код, проверьте правильно ли введен трек-код.'
                        },
                        alert_select_service: {
                            head: 'Выбрать почтовую службу',
                            text: 'Если Вы уверены, что трек-код настоящий и знаете, какая компания занимается отслеживанием данной посылки, можете выбрать ниже'
                        },
                        form_request: {
                            text: 'Или, возможно, мы еще не добавили этого перевозчика в наш сервис. Если Вы знаете, где отслеживается Ваша посылка - напишите нам через эту простую форму для добавления перевозчика.',
                            btn1: 'Написать и добавить перевозчика',
                            alert: 'Ваше сообщение успешно отправлено. В ближайшее время перевозчик будет добавлен',
                            service_label: 'Ссылка на перевозчика',
                            service_ph: 'Введите название, ссылку или другую информацию',
                            track_label: 'Пример трек-кода',
                            track_ph: 'Введите пример номера отслеживания',
                            text_label: 'Дополнительное сообщение',
                            text_ph: 'Введите сообщение',
                            send: 'Отправить'
                        }
                    }, z = {
                        message: 'Message',
                        loading: {
                            head: 'Recherchez votre package',
                            h2: 'Il ne reste qu\'un peu ...',
                            find_text: 'Nous recherchons des entreprises ...'
                        },
                        tracklist: { delete: 'Supprimer' },
                        head: {
                            track_edit_input: 'Entrez le titre ...',
                            refresh: 'Rafraîchir',
                            refresh_time: 'Mis à jour il y a {0} {1}',
                            refresh_minutes: 'Rafraîchi tout à l\'heure | Mis à jour il y a {0} minute | Mis à jour il y a {0} minutes | Mis à jour il y a {0} minutes',
                            refresh_hours: 'Rafraîchi tout à l\'heure | Mis à jour il y a {0} heure | Mis à jour il y a {0} heures | Mis à jour il y a {0} heures',
                            refresh_active: 'Actualisation des informations sur le package',
                            language: 'Langue des événements: {0}',
                            language_original: 'Ne pas traduire',
                            list_group: {
                                all: 'Tous les évènements',
                                grouped: 'Groupement de services'
                            },
                            language_search: {
                                placeholder: 'Entrez le nom de la langue',
                                notfound: 'Rien n\'a été trouvé',
                                cancel: 'Réinitialiser la langue'
                            }
                        },
                        events: {
                            day_number: '{0} jour',
                            weight: 'Poids',
                            showAll: 'Afficher tous les événements'
                        },
                        info: {
                            head: {
                                added: 'Ajouté {0}',
                                in_route: 'Forfait en route',
                                in_route_days: '{0} jours | {0} jour | {0} jours | {0} jours',
                                last_update: 'Dernière vérification',
                                CountryFrom: 'Pays de départ',
                                CountryTo: 'Pays de destination',
                                CountryUnknown: 'Pays non défini',
                                ComplexItem: 'Type d\'emballage',
                                AddressFrom: 'Adresse de l\'expéditeur',
                                AddressTo: 'Adresse du destinataire',
                                Sender: 'Expéditeur',
                                Recipient: 'Bénéficiaire',
                                Phone: 'Téléphone',
                                Scheduled: 'Livraison prévue pour',
                                Weight: 'Poids',
                                WeightUnitKG: 'kg',
                                WeightUnitG: 'g.',
                                WeightUnitLBS: 'lbs',
                                SignedBy: 'Signé',
                                NextTrack: 'Numéros de suivi supplémentaires',
                                finded_at: 'Trouvé dans les services postaux',
                                link: 'Lien de suivi',
                                copy: 'Copie',
                                copied: 'Copié!'
                            },
                            values: { g: 'Colonne' }
                        },
                        official: {
                            head: 'Sites officiels',
                            p: 'Vous pouvez suivre votre colis sur les sites officiels des services postaux'
                        },
                        empty: {
                            head: 'En attente d\'informations sur le colis',
                            h2: 'Informations sur l\'emplacement du colis pour le moment.',
                            text: 'Si vous avez passé une commande il y a moins d\'une semaine - c\'est normal. En règle générale, les informations sur les colis apparaissent dans les 10 jours.'
                        },
                        we_found: {
                            head: 'Nous avons recherché dans les services suivants',
                            can_find_question: 'Essayez de trouver chez les autres?',
                            can_find_text: 'Savez-vous quel service de messagerie vous pouvez rechercher davantage?',
                            select_text: 'Choisissez un service postal'
                        },
                        groups: {
                            track: 'Numéro de suivi: [{0}]',
                            event_count: '{0} événements | {0} événement | {0} événements | {0} événements',
                            show: 'Spectacle',
                            hide: 'Cacher'
                        },
                        alert: {
                            head: 'Oops! Il s\'agit d\'un numéro de piste inconnu.',
                            text: 'Nous n\'avons pas pu déterminer le service qui livre votre colis',
                            text2: 'Peut-être n\'avez-vous pas un vrai code de piste sous la main, vérifiez si le code de piste est entré correctement.'
                        },
                        alert_select_service: {
                            head: 'Choisissez un service postal',
                            text: 'Si vous êtes sûr que le code de suivi est réel et que vous savez quelle entreprise est impliquée dans le suivi de ce package, vous pouvez choisir ci-dessous'
                        },
                        form_request: {
                            text: 'Ou peut-être que nous n\'avons pas encore ajouté ce transporteur à notre service. Si vous savez où votre colis est suivi, écrivez-nous via ce formulaire simple pour ajouter un transporteur.',
                            btn1: 'Écrire et ajouter un transporteur',
                            alert: 'Votre message a été envoyé avec succès. Le transporteur sera bientôt ajouté.',
                            service_label: 'Lien vers le site Web de l\'opérateur',
                            service_ph: 'Entrez un nom, un lien ou d\'autres informations',
                            track_label: 'Numéro de suivi',
                            track_ph: 'Entrez un exemple de numéro de suivi',
                            text_label: 'Message complémentaire',
                            text_ph: 'Entrez votre message',
                            send: 'Soumettre'
                        }
                    }, x = {
                        message: 'رسالة',
                        loading: {
                            head: 'نحن نبحث عن الحزمة الخاصة بك',
                            h2: 'هناك القليل جدا من اليسار ...',
                            find_text: 'نبحث عن شركات ...'
                        },
                        tracklist: { delete: 'حذف' },
                        head: {
                            track_edit_input: 'أدخل العنوان ...',
                            refresh: 'تحديث',
                            refresh_time: 'تم التحديث منذ {0} {1}',
                            refresh_minutes: 'تم تحديثه للتو | تم التحديث منذ {0} دقيقة | تم التحديث منذ {0} دقيقة | تم التحديث منذ {0} دقيقة',
                            refresh_hours: 'تم تحديثه للتو | تم التحديث {0} منذ ساعة | تم التحديث قبل {0} ساعة | تم التحديث منذ {0} ساعة',
                            refresh_active: 'تحديث معلومات الطرد',
                            language: 'لغة الحالة: {0}',
                            language_original: 'لا تترجم',
                            list_group: {
                                all: 'كل الأحداث',
                                grouped: 'تجميع الخدمة'
                            },
                            language_search: {
                                placeholder: 'أدخل اسم اللغة',
                                notfound: 'لم يتم العثور على شيء',
                                cancel: 'إعادة ضبط اللغة'
                            }
                        },
                        events: {
                            day_number: '{0} يوم',
                            weight: 'وزن',
                            showAll: 'عرض كل الأحداث'
                        },
                        info: {
                            head: {
                                added: 'تمت إضافة {0}',
                                in_route: 'الحزمة في العبور',
                                in_route_days: '{0} يوم | {0} يوم | {0} يوم | {0} يوم',
                                last_update: 'اخر فحص',
                                CountryFrom: 'بلد المغادرة',
                                CountryTo: 'بلد المقصد',
                                CountryUnknown: 'البلد غير محدد',
                                ComplexItem: 'نوع الطرد',
                                AddressFrom: 'عنوان المرسل',
                                AddressTo: 'عنوان المستلم',
                                Sender: 'مرسل',
                                Recipient: 'مستلم',
                                Phone: 'هاتف',
                                Scheduled: 'التسليم مقرر ل',
                                Weight: 'وزن',
                                WeightUnitKG: 'كلغ.',
                                WeightUnitG: 'غرام.',
                                WeightUnitLBS: 'رطل.',
                                SignedBy: 'وقعت',
                                NextTrack: 'أرقام تتبع إضافية',
                                finded_at: 'وجدت في الخدمات البريدية',
                                link: 'رابط التتبع',
                                copy: 'نسخ',
                                copied: 'نسخ!'
                            },
                            values: { g: 'غرام.' }
                        },
                        official: {
                            head: 'المواقع الرسمية',
                            p: 'يمكنك تتبع طردك على المواقع الرسمية للخدمات البريدية'
                        },
                        empty: {
                            head: 'نحن في انتظار معلومات حول الطرد',
                            h2: 'لا توجد معلومات عن موقع الحزمة حتى الآن.',
                            text: 'إذا قدمت طلبًا قبل أقل من أسبوع \u060C فهذا أمر طبيعي. كقاعدة عامة \u060C تظهر المعلومات الخاصة بالطرد في غضون 10 أيام.'
                        },
                        we_found: {
                            head: 'بحثنا في الخدمات التالية',
                            can_find_question: 'دعونا نحاول أن نجد في الآخرين\u061F',
                            can_find_text: 'هل تعرف أي خدمة بريدية يمكنك البحث عنها أكثر\u061F',
                            select_text: 'حدد الخدمة البريدية'
                        },
                        groups: {
                            track: 'رمز المسار: [{0}]',
                            event_count: '{0} حالات | {0} الحالة | {0} الحالة | {0} حالة',
                            show: 'تبين',
                            hide: 'إخفاء'
                        },
                        alert: {
                            head: 'وجه الفتاة! هذا رقم مسار غير معروف',
                            text: 'لم نتمكن من تحديد الخدمة التي توصل الطرد الخاص بك',
                            text2: 'ربما لم يكن لديك رمز مسار حقيقي في يديك \u060C تحقق مما إذا كان قد تم إدخال رمز المسار بشكل صحيح.'
                        },
                        alert_select_service: {
                            head: 'حدد الخدمة البريدية',
                            text: 'إذا كنت متأكدًا من أن رمز المسار حقيقي وتعرف الشركة التي تتعقب هذا الطرد \u060C فيمكنك الاختيار أدناه'
                        },
                        form_request: {
                            text: 'أو ربما لم نقم بإضافة هذا الناقل إلى خدمتنا حتى الآن. إذا كنت تعرف مكان تتبع شحنتك \u060C فاكتب إلينا من خلال هذا النموذج البسيط لإضافة شركة نقل.',
                            btn1: 'اكتب وأضف ناقل',
                            alert: 'تم إرسال رسالتك بنجاح. سيتم إضافة الناقل قريبًا',
                            service_label: 'رابط الناقل',
                            service_ph: 'أدخل العنوان أو الارتباط أو معلومات أخرى',
                            track_label: 'مثال على رمز المسار',
                            track_ph: 'أدخل مثالاً لرقم التتبع',
                            text_label: 'رسالة إضافية',
                            text_ph: 'أدخل رسالتك',
                            send: 'أرسل رسالة'
                        }
                    }, C = {
                        message: 'বার্তা',
                        loading: {
                            head: 'আমরা আপনার প্যাকেজটি অনুসন্ধান করি',
                            h2: 'খুব অল্প বামে আছে ...',
                            find_text: 'আমরা সংস্থাগুলি খুঁজছি ...'
                        },
                        tracklist: { delete: 'মুছে ফেলা' },
                        head: {
                            track_edit_input: 'শিরোনাম লিখুন ...',
                            refresh: 'রিফ্রেশ',
                            refresh_time: '{0} {1} আগে আপডেট হয়েছে',
                            refresh_minutes: 'সবেমাত্র আপডেট | আপডেট হয়েছে {0} মিনিট আগে | আপডেট হয়েছে {0} মিনিট আগে | {0} মিনিট আগে আপডেট হয়েছে',
                            refresh_hours: 'সবেমাত্র আপডেট | এক ঘন্টা আগে আপডেট {0\u0964 | আপডেট হয়েছে {0} ঘন্টা আগে | ঘন্টা আগে {0 Updated আপডেট হয়েছে',
                            refresh_active: 'পার্সেল তথ্য আপডেট করা',
                            language: 'স্থিতির ভাষা: {0}',
                            language_original: 'অনুবাদ না',
                            list_group: {
                                all: 'সমস্ত ইভেন্ট',
                                grouped: 'পরিষেবা গ্রুপিং'
                            },
                            language_search: {
                                placeholder: 'ভাষার নাম লিখুন',
                                notfound: 'কিছুই পাওয়া যায়নি',
                                cancel: 'ভাষা পুনরায় সেট করুন'
                            }
                        },
                        events: {
                            day_number: '{0} দিন',
                            weight: 'ওজন',
                            showAll: 'সমস্ত ইভেন্ট দেখান'
                        },
                        info: {
                            head: {
                                added: 'যোগ করা হয়েছে {0}',
                                in_route: 'প্যাকেজ ট্রানজিটে',
                                in_route_days: '{0} দিন | {0} দিন | {0} দিন | {0} দিন',
                                last_update: 'সর্বশেষ অনুসন্ধান',
                                CountryFrom: 'প্রস্থান দেশ',
                                CountryTo: 'গন্তব্য দেশ',
                                CountryUnknown: 'দেশ সংজ্ঞায়িত করা হয়নি',
                                ComplexItem: 'পার্সেল টাইপ',
                                AddressFrom: 'প্রেরকের ঠিকানা',
                                AddressTo: 'প্রাপকের ঠিকানা',
                                Sender: 'প্রেরক',
                                Recipient: 'প্রাপক',
                                Phone: 'টেলিফোন',
                                Scheduled: 'বিতরণ জন্য নির্ধারিত হয়',
                                Weight: 'ওজন',
                                WeightUnitKG: 'কেজি.',
                                WeightUnitG: 'জিআর',
                                WeightUnitLBS: 'পাউন্ড.',
                                SignedBy: 'স্বাক্ষরিত',
                                NextTrack: 'অতিরিক্ত ট্র্যাকিং নম্বর',
                                finded_at: 'ডাক পরিষেবাগুলিতে পাওয়া যায়',
                                link: 'ট্র্যাকিং লিঙ্ক',
                                copy: 'কপি',
                                copied: 'অনুলিপি!'
                            },
                            values: { g: 'জিআর' }
                        },
                        official: {
                            head: 'অফিসিয়াল সাইট',
                            p: 'আপনি ডাক পরিষেবাগুলির অফিসিয়াল ওয়েবসাইটে আপনার পার্সেলটি ট্র্যাক করতে পারেন'
                        },
                        empty: {
                            head: 'আমরা পার্সেল সম্পর্কে তথ্যের জন্য অপেক্ষা করছি',
                            h2: 'প্যাকেজের অবস্থান সম্পর্কে এখনও কোনও তথ্য নেই\u0964',
                            text: 'আপনি যদি এক সপ্তাহেরও কম সময়ের আগে অর্ডার করেন তবে এটি স্বাভাবিক\u0964 একটি নিয়ম হিসাবে, পার্সেল সম্পর্কিত তথ্য 10 দিনের মধ্যে উপস্থিত হয়\u0964'
                        },
                        we_found: {
                            head: 'আমরা নিম্নলিখিত পরিষেবাগুলিতে অনুসন্ধান করেছি',
                            can_find_question: 'অন্যের সন্ধান করার চেষ্টা করা যাক?',
                            can_find_text: 'আপনি কি জানেন যে কোন ডাক পরিষেবাটি আপনি আরও সন্ধান করতে পারেন?',
                            select_text: 'একটি ডাক পরিষেবা নির্বাচন করুন'
                        },
                        groups: {
                            track: 'ট্র্যাক কোড: [{0}]',
                            event_count: '{0} স্থিতি | {0} স্থিতি | {0} স্থিতি | {0} স্থিতি',
                            show: 'দেখান',
                            hide: 'লুকান'
                        },
                        alert: {
                            head: 'ওওপিএস! এটি একটি অজানা ট্র্যাক নম্বর',
                            text: 'আপনার পার্সেল সরবরাহ করে এমন পরিষেবাটি আমরা সনাক্ত করতে পারিনি',
                            text2: 'সম্ভবত আপনার হাতে সত্যিকারের ট্র্যাক কোড নেই, ট্র্যাক কোডটি সঠিকভাবে প্রবেশ করা হয়েছে কিনা তা পরীক্ষা করে দেখুন\u0964'
                        },
                        alert_select_service: {
                            head: 'ডাক পরিষেবা নির্বাচন করুন',
                            text: 'আপনি যদি নিশ্চিত হন যে ট্র্যাক কোডটি আসল এবং আপনি জানেন যে কোন সংস্থা এই পার্সেলটি ট্র্যাক করছে, আপনি নীচে চয়ন করতে পারেন'
                        },
                        form_request: {
                            text: 'অথবা হতে পারে আমরা এখনও আমাদের পরিষেবাতে এই ক্যারিয়ারটি যুক্ত করি নি\u0964 আপনার প্যাকেজটি কোথায় ট্র্যাক করা হচ্ছে তা যদি আপনি জানেন তবে ক্যারিয়ার যুক্ত করতে এই সাধারণ ফর্মের মাধ্যমে আমাদের কাছে লিখুন\u0964',
                            btn1: 'লিখুন এবং একটি ক্যারিয়ার যুক্ত করুন',
                            alert: 'আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে. ক্যারিয়ার শীঘ্রই যুক্ত করা হবে',
                            service_label: 'ক্যারিয়ারের লিঙ্ক',
                            service_ph: 'শিরোনাম, লিঙ্ক বা অন্যান্য তথ্য লিখুন',
                            track_label: 'ট্র্যাক কোড উদাহরণ',
                            track_ph: 'একটি উদাহরণ ট্র্যাকিং নম্বর লিখুন',
                            text_label: 'অতিরিক্ত বার্তা',
                            text_ph: 'আপনার বার্তাটি লিখুন',
                            send: 'বার্তা পাঠান'
                        }
                    }, j = {
                        message: 'Zpráva',
                        loading: {
                            head: 'Vyhledejte svůj balíček',
                            h2: 'Zbývá jen kousek ...',
                            find_text: 'Hledáme společnosti ...'
                        },
                        tracklist: { delete: 'Vymazat' },
                        head: {
                            track_edit_input: 'Zadejte název ...',
                            refresh: 'Obnovit',
                            refresh_time: 'Aktualizováno před {0} {1}',
                            refresh_minutes: 'Obnoveno právě teď | Aktualizováno před {0} minutou | Aktualizováno před {0} minutami | Aktualizováno před {0} minutami',
                            refresh_hours: 'Obnoveno právě teď | Aktualizováno před {0} hodinou | Aktualizováno před {0} hodinami | Aktualizováno před {0} hodinami',
                            refresh_active: 'Osvěžující informace o balíčku',
                            language: 'Jazyk událostí: {0}',
                            language_original: 'Nepřeložit',
                            list_group: {
                                all: 'Všechny události',
                                grouped: 'Seskupování služeb'
                            },
                            language_search: {
                                placeholder: 'Zadejte název jazyka',
                                notfound: 'Nic nalezeno',
                                cancel: 'Obnovit jazyk'
                            }
                        },
                        events: {
                            day_number: '{0} den',
                            weight: 'Hmotnost',
                            showAll: 'Zobrazit všechny události'
                        },
                        info: {
                            head: {
                                added: 'Přidáno {0}',
                                in_route: 'Balíček na cestě',
                                in_route_days: '{0} dní | {0} den | {0} dní | {0} dny',
                                last_update: 'Poslední kontrola',
                                CountryFrom: 'Země odletu',
                                CountryTo: 'Cílová země',
                                CountryUnknown: 'Země není definována',
                                ComplexItem: 'Typ balíčku',
                                AddressFrom: 'Adresa odesílatele',
                                AddressTo: 'Adresa příjemce',
                                Sender: 'Odesílatel',
                                Recipient: 'Příjemce',
                                Phone: 'Telefon',
                                Scheduled: 'Dodání je naplánováno na',
                                Weight: 'Hmotnost',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'Podepsaný',
                                NextTrack: 'Další sledovací čísla',
                                finded_at: 'Nalezeno v poštovních službách',
                                link: 'Sledovací odkaz',
                                copy: 'Kopírovat',
                                copied: 'Zkopírováno!'
                            },
                            values: { g: 'Sloupec' }
                        },
                        official: {
                            head: 'Oficiální stránky',
                            p: 'Svůj balíček můžete sledovat na oficiálních stránkách poštovních služeb'
                        },
                        empty: {
                            head: 'Čekání na informace o balíčku',
                            h2: 'Informace o umístění balíčku zatím.',
                            text: 'Pokud jste provedli objednávku před méně než týdnem - je to normální. Informace o zásilce se zpravidla objeví do 10 dnů.'
                        },
                        we_found: {
                            head: 'Hledali jsme v následujících službách',
                            can_find_question: 'Zkuste najít v jiných?',
                            can_find_text: 'Víte, kterou poštovní službu můžete vyhledat?',
                            select_text: 'Vyberte si poštovní službu'
                        },
                        groups: {
                            track: 'Číslo zásilky: [{0}]',
                            event_count: 'Události ({0}) | {0} událost | Události ({0}) | Počet událostí: {0}',
                            show: 'Ukázat',
                            hide: 'Skrýt'
                        },
                        alert: {
                            head: 'Jejda! Toto je neznámé číslo stopy.',
                            text: 'Nemohli jsme určit službu, která doručuje váš balíček',
                            text2: 'Možná nemáte po ruce skutečný kód stopy, zkontrolujte, zda je kód stopy zadán správně.'
                        },
                        alert_select_service: {
                            head: 'Vyberte si poštovní službu',
                            text: 'Pokud jste si jisti, že kód stopy je skutečný a víte, která společnost se podílí na sledování tohoto balíčku, můžete si vybrat níže'
                        },
                        form_request: {
                            text: 'Nebo jsme snad ještě nepřidali tohoto dopravce do naší služby. Pokud víte, kde je váš balíček sledován, napište nám prostřednictvím tohoto jednoduchého formuláře a přidejte přepravce.',
                            btn1: 'Napište a přidejte dopravce',
                            alert: 'Tvoje zpráva byla úspěšně odeslána. Nosič bude brzy přidán.',
                            service_label: 'Odkaz na web dopravce',
                            service_ph: 'Zadejte jméno, odkaz nebo jiné informace',
                            track_label: 'Sledovací číslo',
                            track_ph: 'Zadejte příklad sledovacího čísla',
                            text_label: 'Další zpráva',
                            text_ph: 'Zadejte svoji zprávu',
                            send: 'Předložit'
                        }
                    }, S = {
                        message: 'Besked',
                        loading: {
                            head: 'Søg efter din pakke',
                            h2: 'Kun lidt tilbage ...',
                            find_text: 'Vi leder efter virksomheder ...'
                        },
                        tracklist: { delete: 'Slet' },
                        head: {
                            track_edit_input: 'Indtast titlen ...',
                            refresh: 'Opdater',
                            refresh_time: 'Opdateret for {0} {1} siden',
                            refresh_minutes: 'Opdateret lige nu | Opdateret for {0} minut siden | Opdateret for {0} minutter siden | Opdateret for {0} minutter siden',
                            refresh_hours: 'Opdateret lige nu | Opdateret for {0} time siden | Opdateret for {0} timer siden | Opdateret for {0} timer siden',
                            refresh_active: 'Forfriskende pakkeinformation',
                            language: 'Begivenhedssprog: {0}',
                            language_original: 'Ikke oversætte',
                            list_group: {
                                all: 'Alle begivenheder',
                                grouped: 'Tjenestegruppering'
                            },
                            language_search: {
                                placeholder: 'Indtast sprognavnet',
                                notfound: 'Intet fundet',
                                cancel: 'Nulstil sprog'
                            }
                        },
                        events: {
                            day_number: '{0} dag',
                            weight: 'Vægt',
                            showAll: 'Vis alle begivenheder'
                        },
                        info: {
                            head: {
                                added: 'Tilføjet {0}',
                                in_route: 'Pakke på vej',
                                in_route_days: '{0} dage | {0} dag | {0} dage | {0} dage',
                                last_update: 'Sidste kontrol',
                                CountryFrom: 'Afgangsland',
                                CountryTo: 'Destinationsland',
                                CountryUnknown: 'Land ikke defineret',
                                ComplexItem: 'Pakketype',
                                AddressFrom: 'Afsenderadresse',
                                AddressTo: 'Modtagerens adresse',
                                Sender: 'Afsender',
                                Recipient: 'Modtager',
                                Phone: 'Telefon',
                                Scheduled: 'Levering planlagt til',
                                Weight: 'Vægt',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'Underskrevet',
                                NextTrack: 'Yderligere sporingsnumre',
                                finded_at: 'Fundet i posttjenester',
                                link: 'Sporingslink',
                                copy: 'Kopi',
                                copied: 'Kopieret!'
                            },
                            values: { g: 'Kolonne' }
                        },
                        official: {
                            head: 'Officielle websteder',
                            p: 'Du kan spore din pakke på de officielle websteder for posttjenester'
                        },
                        empty: {
                            head: 'Venter på pakkeoplysninger',
                            h2: 'Oplysninger om placeringen af pakken endnu.',
                            text: 'Hvis du bestilte for mindre end en uge siden - er det normalt. Som regel vises pakkeoplysninger inden for 10 dage.'
                        },
                        we_found: {
                            head: 'Vi søgte i følgende tjenester',
                            can_find_question: 'Prøv at finde i andre?',
                            can_find_text: 'Ved du, hvilken mailservice du kan søge efter mere?',
                            select_text: 'Vælg en posttjeneste'
                        },
                        groups: {
                            track: 'Sporingsnummer: [{0}]',
                            event_count: '{0} begivenheder | {0} begivenhed | {0} begivenheder | {0} begivenheder',
                            show: 'At vise',
                            hide: 'Skjule'
                        },
                        alert: {
                            head: 'Ups! Dette er et ukendt nummer.',
                            text: 'Vi kunne ikke bestemme den service, der leverer din pakke',
                            text2: 'Måske har du ikke en rigtig sporkode ved hånden, kontroller om sporkoden er indtastet korrekt.'
                        },
                        alert_select_service: {
                            head: 'Vælg en posttjeneste',
                            text: 'Hvis du er sikker på, at sporkoden er reel og ved, hvilket firma der er involveret i at spore denne pakke, kan du vælge nedenfor'
                        },
                        form_request: {
                            text: 'Eller måske har vi endnu ikke tilføjet denne operatør til vores service. Hvis du ved, hvor din pakke spores, skal du skrive til os gennem denne enkle formular for at tilføje en transportør.',
                            btn1: 'Skriv og tilføj en transportør',
                            alert: 'Din besked er sendt. Transportør tilføjes snart.',
                            service_label: 'Link til transportørwebsted',
                            service_ph: 'Indtast et navn, et link eller andre oplysninger',
                            track_label: 'Tracking nummer',
                            track_ph: 'Indtast et eksempel på sporingsnummer',
                            text_label: 'Yderligere besked',
                            text_ph: 'Indtast din besked',
                            send: 'Indsend'
                        }
                    }, A = {
                        message: 'Botschaft',
                        loading: {
                            head: 'Suchen Sie nach Ihrem Paket',
                            h2: 'Nur noch ein bisschen übrig ...',
                            find_text: 'Wir suchen Unternehmen ...'
                        },
                        tracklist: { delete: 'Löschen' },
                        head: {
                            track_edit_input: 'Geben Sie den Titel ein ...',
                            refresh: 'Aktualisierung',
                            refresh_time: 'Vor {0} {1} aktualisiert',
                            refresh_minutes: 'Gerade aktualisiert | Vor {0} Minuten aktualisiert | Vor {0} Minuten aktualisiert | Vor {0} Minuten aktualisiert',
                            refresh_hours: 'Gerade aktualisiert | Vor {0} Stunden aktualisiert | Vor {0} Stunden aktualisiert | Vor {0} Stunden aktualisiert',
                            refresh_active: 'Paketinformationen aktualisieren',
                            language: 'Ereignissprache: {0}',
                            language_original: 'Nicht übersetzen',
                            list_group: {
                                all: 'Alle Veranstaltungen',
                                grouped: 'Service-Gruppierung'
                            },
                            language_search: {
                                placeholder: 'Geben Sie den Namen der Sprache ein',
                                notfound: 'Nichts gefunden',
                                cancel: 'Sprache zurücksetzen'
                            }
                        },
                        events: {
                            day_number: '{0} Tag',
                            weight: 'Gewicht',
                            showAll: 'Alle Ereignisse anzeigen'
                        },
                        info: {
                            head: {
                                added: '{0} hinzugefügt',
                                in_route: 'Paket auf dem Weg',
                                in_route_days: '{0} Tage | {0} Tag | {0} Tage | {0} Tage',
                                last_update: 'Letzte Überprüfung',
                                CountryFrom: 'Abflugland',
                                CountryTo: 'Zielland',
                                CountryUnknown: 'Land nicht definiert',
                                ComplexItem: 'Pakettyp',
                                AddressFrom: 'Absenderadresse',
                                AddressTo: 'Adresse des Empfängers',
                                Sender: 'Absender',
                                Recipient: 'Empfänger',
                                Phone: 'Telefon',
                                Scheduled: 'Lieferung geplant für',
                                Weight: 'Gewicht',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'Unterzeichnet',
                                NextTrack: 'Zusätzliche Tracking-Nummern',
                                finded_at: 'Gefunden in Postdiensten',
                                link: 'Tracking-Link',
                                copy: 'Kopieren',
                                copied: 'Kopiert!'
                            },
                            values: { g: 'Säule' }
                        },
                        official: {
                            head: 'Offizielle Seiten',
                            p: 'Sie können Ihr Paket auf den offiziellen Websites der Postdienste verfolgen'
                        },
                        empty: {
                            head: 'Warten auf Paketinformationen',
                            h2: 'Informationen über den Ort des Pakets noch.',
                            text: 'Wenn Sie vor weniger als einer Woche eine Bestellung aufgegeben haben, ist dies normal. Paketinformationen werden in der Regel innerhalb von 10 Tagen angezeigt.'
                        },
                        we_found: {
                            head: 'Wir haben in den folgenden Diensten gesucht',
                            can_find_question: 'Versuchen Sie, in anderen zu finden?',
                            can_find_text: 'Wissen Sie, nach welchem Mail-Dienst Sie suchen können?',
                            select_text: 'Wählen Sie einen Postdienst'
                        },
                        groups: {
                            track: 'Tracking-Nummer: [{0}]',
                            event_count: '{0} Ereignisse | {0} Ereignis | {0} Ereignisse | {0} Ereignisse',
                            show: 'Show',
                            hide: 'Ausblenden'
                        },
                        alert: {
                            head: 'Hoppla! Dies ist eine unbekannte Titelnummer.',
                            text: 'Wir konnten den Service, der Ihr Paket liefert, nicht bestimmen',
                            text2: 'Möglicherweise haben Sie keinen richtigen Trackcode zur Hand. Überprüfen Sie, ob der Trackcode korrekt eingegeben wurde.'
                        },
                        alert_select_service: {
                            head: 'Wählen Sie einen Postdienst',
                            text: 'Wenn Sie sicher sind, dass der Trackcode echt ist und wissen, welches Unternehmen an der Verfolgung dieses Pakets beteiligt ist, können Sie unten auswählen'
                        },
                        form_request: {
                            text: 'Oder vielleicht haben wir diesen Anbieter noch nicht zu unserem Service hinzugefügt. Wenn Sie wissen, wo Ihr Paket verfolgt wird, schreiben Sie uns über dieses einfache Formular, um einen Spediteur hinzuzufügen.',
                            btn1: 'Schreiben Sie einen Träger und fügen Sie ihn hinzu',
                            alert: 'Ihre Nachricht wurde erfolgreich gesendet. Carrier wird in Kürze hinzugefügt.',
                            service_label: 'Link zur Carrier-Website',
                            service_ph: 'Geben Sie einen Namen, einen Link oder andere Informationen ein',
                            track_label: 'Auftragsnummer, Frachtnummer, Sendungscode',
                            track_ph: 'Geben Sie eine Beispiel-Tracking-Nummer ein',
                            text_label: 'Zusätzliche Nachricht',
                            text_ph: 'Gib deine Nachricht ein',
                            send: 'Einreichen'
                        }
                    }, L = {
                        message: 'Mensaje',
                        loading: {
                            head: 'Buscamos su paquete',
                            h2: 'Queda muy poco ...',
                            find_text: 'Buscamos empresas ...'
                        },
                        tracklist: { delete: 'Eliminar' },
                        head: {
                            track_edit_input: 'Ingrese el título ...',
                            refresh: 'Actualizar',
                            refresh_time: 'Actualizado hace {0} {1}',
                            refresh_minutes: 'Recién actualizado | Actualizado hace {0} minutos | Actualizado hace {0} minutos | Actualizado hace {0} minutos',
                            refresh_hours: 'Recién actualizado | Actualizado {0} hace una hora | Actualizado hace {0} horas | Actualizado hace {0} horas',
                            refresh_active: 'Actualización de la información del paquete',
                            language: 'Idioma de estado: {0}',
                            language_original: 'No traducir',
                            list_group: {
                                all: 'Todos los eventos',
                                grouped: 'Agrupación de servicios'
                            },
                            language_search: {
                                placeholder: 'Ingrese el nombre del idioma',
                                notfound: 'Nada Encontrado',
                                cancel: 'Restablecer idioma'
                            }
                        },
                        events: {
                            day_number: '{0} día',
                            weight: 'Peso',
                            showAll: 'Mostrar todos los eventos'
                        },
                        info: {
                            head: {
                                added: 'Se agregó {0}',
                                in_route: 'Paquete en tránsito',
                                in_route_days: '{0} días | {0} día | {0} días | {0} días',
                                last_update: 'Última revisión',
                                CountryFrom: 'País de salida',
                                CountryTo: 'Pais de destino',
                                CountryUnknown: 'País no definido',
                                ComplexItem: 'Tipo de paquete',
                                AddressFrom: 'Dirección del remitente',
                                AddressTo: 'Dirección del destinatario',
                                Sender: 'Remitente',
                                Recipient: 'Recipiente',
                                Phone: 'Teléfono',
                                Scheduled: 'La entrega está programada para',
                                Weight: 'Peso',
                                WeightUnitKG: 'Kg.',
                                WeightUnitG: 'Gramo.',
                                WeightUnitLBS: 'Lb.',
                                SignedBy: 'Firmado',
                                NextTrack: 'Números de seguimiento adicionales',
                                finded_at: 'Encontrado en servicios postales',
                                link: 'Enlace de seguimiento',
                                copy: 'Copiar',
                                copied: 'Copiado!'
                            },
                            values: { g: 'Gramo.' }
                        },
                        official: {
                            head: 'Sitios oficiales',
                            p: 'Puede rastrear su paquete en los sitios web oficiales de los servicios postales'
                        },
                        empty: {
                            head: 'Estamos esperando información sobre el paquete.',
                            h2: 'Aún no hay información sobre la ubicación del paquete.',
                            text: 'Si hizo un pedido hace menos de una semana, esto es normal. Como regla general, la información sobre el paquete aparece dentro de los 10 días.'
                        },
                        we_found: {
                            head: 'Buscamos en los siguientes servicios',
                            can_find_question: 'Tratemos de encontrar en otros?',
                            can_find_text: '\xBFSabes qué servicio postal puedes buscar más?',
                            select_text: 'Seleccione un servicio postal'
                        },
                        groups: {
                            track: 'Código de seguimiento: [{0}]',
                            event_count: '{0} estados | {0} estado | {0} estado | {0} estados',
                            show: 'Mostrar',
                            hide: 'Esconder'
                        },
                        alert: {
                            head: 'OOPS! Este es un número de pista desconocido',
                            text: 'No pudimos identificar el servicio que entrega su paquete',
                            text2: 'Quizás no tenga un código de pista real en sus manos, verifique si el código de pista se ingresó correctamente.'
                        },
                        alert_select_service: {
                            head: 'Seleccionar servicio postal',
                            text: 'Si está seguro de que el código de seguimiento es real y sabe qué empresa está rastreando este paquete, puede elegir a continuación'
                        },
                        form_request: {
                            text: 'O tal vez aún no hemos agregado este operador a nuestro servicio. Si sabe dónde se está rastreando su paquete, escríbanos a través de este sencillo formulario para agregar un transportista.',
                            btn1: 'Escribe y agrega un transportista',
                            alert: 'Su mensaje ha sido enviado con éxito. El transportista se agregará pronto',
                            service_label: 'Enlace de operador',
                            service_ph: 'Ingrese título, enlace u otra información',
                            track_label: 'Ejemplo de código de seguimiento',
                            track_ph: 'Ingrese un número de seguimiento de ejemplo',
                            text_label: 'Mensaje adicional',
                            text_ph: 'Ingrese su mensaje',
                            send: 'Enviar mensaje'
                        }
                    }, T = {
                        message: 'संदेश',
                        loading: {
                            head: 'हम आपके पैकेज की खोज करते हैं',
                            h2: 'बहुत कम बचा है ...',
                            find_text: 'हम कंपनियों के लिए देख रहे हैं ...'
                        },
                        tracklist: { delete: 'हटा दें' },
                        head: {
                            track_edit_input: 'शीर्षक दर्ज करें ...',
                            refresh: 'ताज़ा करें',
                            refresh_time: 'अद्यतित {0} {1} पहले',
                            refresh_minutes: 'सिर्फ अपडेट | अपडेट किया गया {0} मिनट पहले | अद्यतित {0} मिनट पहले | अपडेट किया गया {0} मिनट पहले',
                            refresh_hours: 'सिर्फ अपडेट | अपडेटेड {0} एक घंटे पहले | अद्यतित {0} घंटे पहले | अपडेट किया गया {0} घंटे पहले',
                            refresh_active: 'पार्सल की जानकारी अपडेट करना',
                            language: 'स्थिति भाषा: {0}',
                            language_original: 'अनुवाद नहीं',
                            list_group: {
                                all: 'सभी कार्यक्रम',
                                grouped: 'सेवा समूहन'
                            },
                            language_search: {
                                placeholder: 'भाषा का नाम दर्ज करें',
                                notfound: 'कुछ नहीं मिला',
                                cancel: 'भाषा को रीसेट करें'
                            }
                        },
                        events: {
                            day_number: '{0} दिन',
                            weight: 'वजन',
                            showAll: 'सभी कार्यक्रम दिखाएं'
                        },
                        info: {
                            head: {
                                added: 'जोड़ा गया {0}',
                                in_route: 'पारगमन में पैकेज',
                                in_route_days: '{0} दिन | {0} दिन | {0} दिन | {0} दिन',
                                last_update: 'अंतिम जांच',
                                CountryFrom: 'दूर देश',
                                CountryTo: 'गंतव्य देश',
                                CountryUnknown: 'देश परिभाषित नहीं',
                                ComplexItem: 'पार्सल प्रकार',
                                AddressFrom: 'भेजने वाले का पता',
                                AddressTo: 'प्राप्तकर्ता का पता',
                                Sender: 'प्रेषक',
                                Recipient: 'प्राप्त करने वाला',
                                Phone: 'टेलीफोन',
                                Scheduled: 'प्रसव के लिए निर्धारित है',
                                Weight: 'वजन',
                                WeightUnitKG: 'किलोग्राम\u0964',
                                WeightUnitG: 'जीआर\u0964',
                                WeightUnitLBS: 'LB\u0964',
                                SignedBy: 'पर हस्ताक्षर किए',
                                NextTrack: 'अतिरिक्त ट्रैकिंग नंबर',
                                finded_at: 'डाक सेवाओं में मिला',
                                link: 'ट्रैकिंग लिंक',
                                copy: 'कॉपी करें',
                                copied: 'नकल की गई!'
                            },
                            values: { g: 'जीआर\u0964' }
                        },
                        official: {
                            head: 'आधिकारिक साइटें',
                            p: 'आप डाक सेवाओं की आधिकारिक वेबसाइटों पर अपने पार्सल को ट्रैक कर सकते हैं'
                        },
                        empty: {
                            head: 'हम पार्सल के बारे में जानकारी की प्रतीक्षा कर रहे हैं',
                            h2: 'पैकेज के स्थान के बारे में अभी तक कोई जानकारी नहीं है\u0964',
                            text: 'यदि आपने एक हफ्ते पहले ऑर्डर कम किया है, तो यह सामान्य है\u0964 एक नियम के रूप में, पार्सल के बारे में जानकारी 10 दिनों के भीतर दिखाई देती है\u0964'
                        },
                        we_found: {
                            head: 'हमने निम्नलिखित सेवाओं में खोज की',
                            can_find_question: 'आइए दूसरों में खोजने की कोशिश करें?',
                            can_find_text: 'क्या आप जानते हैं कि आप किस डाक सेवा की तलाश कर सकते हैं?',
                            select_text: 'डाक सेवा का चयन करें'
                        },
                        groups: {
                            track: 'ट्रैक कोड: [{0}]',
                            event_count: '{0} स्टेटस | {0} स्थिति | {0} स्थिति | {0} स्थितियां',
                            show: 'प्रदर्शन',
                            hide: 'छिपाना'
                        },
                        alert: {
                            head: 'OOPS! यह एक अज्ञात ट्रैक नंबर है',
                            text: 'हम उस सेवा की पहचान नहीं कर सके जो आपके पार्सल की डिलीवरी करती है',
                            text2: 'शायद आपके हाथों में एक वास्तविक ट्रैक कोड नहीं है, जांच लें कि क्या ट्रैक कोड सही तरीके से दर्ज किया गया था\u0964'
                        },
                        alert_select_service: {
                            head: 'डाक सेवा का चयन करें',
                            text: 'यदि आप सुनिश्चित हैं कि ट्रैक कोड वास्तविक है और आप जानते हैं कि कौन सी कंपनी इस पार्सल को ट्रैक कर रही है, तो आप नीचे चुन सकते हैं'
                        },
                        form_request: {
                            text: 'या हो सकता है कि हमने इस वाहक को अभी तक हमारी सेवा में नहीं जोड़ा है\u0964 यदि आप जानते हैं कि आपके पैकेज को कहां ट्रैक किया जा रहा है, तो वाहक जोड़ने के लिए इस सरल फ़ॉर्म के माध्यम से हमें लिखें\u0964',
                            btn1: 'एक वाहक लिखें और जोड़ें',
                            alert: 'आपका संदेश सफलतापूर्वक भेजा गया था\u0964 जल्द ही कैरियर को जोड़ा जाएगा',
                            service_label: 'वाहक लिंक',
                            service_ph: 'शीर्षक, लिंक या अन्य जानकारी दर्ज करें',
                            track_label: 'ट्रैक कोड उदाहरण',
                            track_ph: 'एक उदाहरण ट्रैकिंग नंबर दर्ज करें',
                            text_label: 'अतिरिक्त संदेश',
                            text_ph: 'अपना संदेश दर्ज करें',
                            send: 'मेसेज भेजें'
                        }
                    }, P = {
                        message: 'Pesan',
                        loading: {
                            head: 'Cari paket Anda',
                            h2: 'Hanya sedikit tersisa ...',
                            find_text: 'Kami mencari perusahaan ...'
                        },
                        tracklist: { delete: 'Menghapus' },
                        head: {
                            track_edit_input: 'Masukkan judul ...',
                            refresh: 'Menyegarkan',
                            refresh_time: 'Diperbarui {0} {1} lalu',
                            refresh_minutes: 'Baru saja diperbarui | Diperbarui {0} menit yang lalu | Diperbarui {0} menit yang lalu | Diperbarui {0} menit yang lalu',
                            refresh_hours: 'Baru saja diperbarui | Diperbarui {0} jam yang lalu | Diperbarui {0} jam yang lalu | Diperbarui {0} jam yang lalu',
                            refresh_active: 'Menyegarkan informasi paket',
                            language: 'Bahasa acara: {0}',
                            language_original: 'Tidak menerjemahkan',
                            list_group: {
                                all: 'Semua acara',
                                grouped: 'Pengelompokan Layanan'
                            },
                            language_search: {
                                placeholder: 'Masukkan nama bahasa',
                                notfound: 'Tidak ada yang ditemukan',
                                cancel: 'Setel ulang bahasa'
                            }
                        },
                        events: {
                            day_number: '{0} hari',
                            weight: 'Bobot',
                            showAll: 'Tampilkan semua acara'
                        },
                        info: {
                            head: {
                                added: 'Menambahkan {0}',
                                in_route: 'Paket sedang dalam perjalanan',
                                in_route_days: '{0} hari | {0} hari | {0} hari | {0} hari',
                                last_update: 'Pemeriksaan terakhir',
                                CountryFrom: 'Negara keberangkatan',
                                CountryTo: 'Negara Tujuan',
                                CountryUnknown: 'Negara tidak ditentukan',
                                ComplexItem: 'Jenis Paket',
                                AddressFrom: 'Alamat pengirim',
                                AddressTo: 'Alamat penerima',
                                Sender: 'Pengirim',
                                Recipient: 'Penerima',
                                Phone: 'Telepon',
                                Scheduled: 'Pengiriman dijadwalkan untuk',
                                Weight: 'Bobot',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'Tertanda',
                                NextTrack: 'Nomor Pelacakan Tambahan',
                                finded_at: 'Ditemukan di layanan pos',
                                link: 'Link Pelacakan',
                                copy: 'Salinan',
                                copied: 'Disalin!'
                            },
                            values: { g: 'Kolom' }
                        },
                        official: {
                            head: 'Situs resmi',
                            p: 'Anda dapat melacak paket Anda di situs resmi layanan pos'
                        },
                        empty: {
                            head: 'Menunggu informasi paket',
                            h2: 'Informasi tentang lokasi paket belum.',
                            text: 'Jika Anda melakukan pemesanan kurang dari seminggu yang lalu - ini normal. Biasanya, informasi parsel muncul dalam 10 hari.'
                        },
                        we_found: {
                            head: 'Kami mencari di layanan berikut',
                            can_find_question: 'Coba cari di orang lain?',
                            can_find_text: 'Tahukah Anda layanan email mana yang dapat Anda cari lebih lanjut?',
                            select_text: 'Pilih layanan pos'
                        },
                        groups: {
                            track: 'Nomor pelacakan: [{0}]',
                            event_count: '{0} acara | {0} acara | {0} acara | {0} acara',
                            show: 'Menunjukkan',
                            hide: 'Menyembunyikan'
                        },
                        alert: {
                            head: 'Ups! Ini adalah nomor trek yang tidak diketahui.',
                            text: 'Kami tidak dapat menentukan layanan yang mengirimkan paket Anda',
                            text2: 'Mungkin Anda tidak memiliki kode trek yang sebenarnya, periksa apakah kode trek dimasukkan dengan benar.'
                        },
                        alert_select_service: {
                            head: 'Pilih layanan pos',
                            text: 'Jika Anda yakin bahwa kode trek itu asli dan mengetahui perusahaan mana yang terlibat dalam melacak paket ini, Anda dapat memilih di bawah ini'
                        },
                        form_request: {
                            text: 'Atau mungkin kami belum menambahkan operator ini ke layanan kami. Jika Anda tahu di mana paket Anda dilacak, kirim email kepada kami melalui formulir sederhana ini untuk menambahkan operator.',
                            btn1: 'Tulis dan tambahkan operator',
                            alert: 'Pesan Anda telah berhasil dikirim. Operator akan segera ditambahkan.',
                            service_label: 'Tautan situs web operator',
                            service_ph: 'Masukkan nama, tautan, atau informasi lainnya',
                            track_label: 'Melacak nomor',
                            track_ph: 'Masukkan contoh nomor pelacakan',
                            text_label: 'Pesan tambahan',
                            text_ph: 'Masukkan pesan Anda',
                            send: 'Kirimkan'
                        }
                    }, M = {
                        message: 'Messaggio',
                        loading: {
                            head: 'Cerca il tuo pacco',
                            h2: 'Ne resta solo un po \'...',
                            find_text: 'Cerchiamo aziende ...'
                        },
                        tracklist: { delete: 'Elimina' },
                        head: {
                            track_edit_input: 'Inserisci il titolo ...',
                            refresh: 'Ricaricare',
                            refresh_time: 'Aggiornato {0} {1} fa',
                            refresh_minutes: 'Aggiornato solo ora | Aggiornato {0} minuto fa | Aggiornato {0} minuti fa | Aggiornato {0} minuti fa',
                            refresh_hours: 'Aggiornato solo ora | Aggiornato {0} ora fa | Aggiornato {0} ore fa | Aggiornato {0} ore fa',
                            refresh_active: 'Aggiornamento delle informazioni sul pacchetto',
                            language: 'Lingua degli eventi: {0}',
                            language_original: 'Non tradurre',
                            list_group: {
                                all: 'Tutti gli eventi',
                                grouped: 'Raggruppamento di servizi'
                            },
                            language_search: {
                                placeholder: 'Immettere il nome della lingua',
                                notfound: 'Non abbiamo trovato nulla',
                                cancel: 'Reimposta lingua'
                            }
                        },
                        events: {
                            day_number: '{0} giorno',
                            weight: 'Peso',
                            showAll: 'Mostra tutti gli eventi'
                        },
                        info: {
                            head: {
                                added: 'Aggiunto {0}',
                                in_route: 'Pacchetto in arrivo',
                                in_route_days: '{0} giorni | {0} giorno | {0} giorni | {0} giorni',
                                last_update: 'Ultimo controllo',
                                CountryFrom: 'Paese di partenza',
                                CountryTo: 'Paese di destinazione',
                                CountryUnknown: 'Paese non definito',
                                ComplexItem: 'Tipo di pacchetto',
                                AddressFrom: 'Indirizzo del mittente',
                                AddressTo: 'Indirizzo del destinatario',
                                Sender: 'Mittente',
                                Recipient: 'Destinatario',
                                Phone: 'Telefono',
                                Scheduled: 'Consegna prevista per',
                                Weight: 'Peso',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'Firmato',
                                NextTrack: 'Numeri di monitoraggio aggiuntivi',
                                finded_at: 'Trovato nei servizi postali',
                                link: 'Link di monitoraggio',
                                copy: 'Copia',
                                copied: 'Copiato!'
                            },
                            values: { g: 'Colonna' }
                        },
                        official: {
                            head: 'Siti ufficiali',
                            p: 'Puoi tracciare il tuo pacco sui siti ufficiali dei servizi postali'
                        },
                        empty: {
                            head: 'In attesa di informazioni sul pacchetto',
                            h2: 'Informazioni sulla posizione del pacchetto ancora.',
                            text: 'Se hai effettuato un ordine meno di una settimana fa, è normale. Di norma, le informazioni sul pacco vengono visualizzate entro 10 giorni.'
                        },
                        we_found: {
                            head: 'Abbiamo cercato nei seguenti servizi',
                            can_find_question: 'Prova a trovare negli altri?',
                            can_find_text: 'Sai quale servizio di posta puoi cercare di più?',
                            select_text: 'Scegli un servizio postale'
                        },
                        groups: {
                            track: 'Numero di riferimento: [{0}]',
                            event_count: '{0} eventi | {0} evento | {0} eventi | {0} eventi',
                            show: 'Spettacolo',
                            hide: 'Nascondere'
                        },
                        alert: {
                            head: 'Oops! Questo è un numero di traccia sconosciuto.',
                            text: 'Non siamo riusciti a determinare il servizio che consegna il tuo pacco',
                            text2: 'Forse non hai un codice traccia reale a portata di mano, controlla se il codice traccia è inserito correttamente.'
                        },
                        alert_select_service: {
                            head: 'Scegli un servizio postale',
                            text: 'Se sei sicuro che il codice di monitoraggio sia reale e sai quale azienda è coinvolta nel monitoraggio di questo pacco, puoi scegliere di seguito'
                        },
                        form_request: {
                            text: 'O forse non abbiamo ancora aggiunto questo vettore al nostro servizio. Se sai dove viene tracciato il tuo pacco, scrivici tramite questo semplice modulo per aggiungere un corriere.',
                            btn1: 'Scrivi e aggiungi un corriere',
                            alert: 'Il tuo messaggio è stato inviato con successo. Il vettore verrà aggiunto a breve.',
                            service_label: 'Collegamento al sito Web del vettore',
                            service_ph: 'Immettere un nome, un collegamento o altre informazioni',
                            track_label: 'Numero di identificazione',
                            track_ph: 'Immettere un numero di riferimento di esempio',
                            text_label: 'Messaggio aggiuntivo',
                            text_ph: 'Inserisci il tuo messaggio',
                            send: 'Invia'
                        }
                    }, W = {
                        message: 'メッセージ',
                        loading: {
                            head: '私たちはあなたのパッケージを検索します',
                            h2: '残りはほとんどありません...',
                            find_text: '私たちは会社を探しています...'
                        },
                        tracklist: { delete: '削除' },
                        head: {
                            track_edit_input: 'タイトルを入力してください...',
                            refresh: '更新',
                            refresh_time: '{0} {1}前に更新',
                            refresh_minutes: '更新されました| {0}分前に更新| {0}分前に更新| {0}分前に更新',
                            refresh_hours: '更新されました| 1時間前に{0}を更新| {0}時間前に更新| {0}時間前に更新',
                            refresh_active: '区画情報の更新',
                            language: 'ステータス言語\uFF1A{0}',
                            language_original: '翻訳しない',
                            list_group: {
                                all: 'すべてのイベント',
                                grouped: 'サービスのグループ化'
                            },
                            language_search: {
                                placeholder: '言語名を入力してください',
                                notfound: '何も見つかりません',
                                cancel: '言語をリセット'
                            }
                        },
                        events: {
                            day_number: '{0}日',
                            weight: '重量',
                            showAll: 'すべてのイベントを表示'
                        },
                        info: {
                            head: {
                                added: '{0}を追加しました',
                                in_route: '輸送中のパッケージ',
                                in_route_days: '{0}日| {0}日| {0}日| {0}日',
                                last_update: '最後のチェック',
                                CountryFrom: '出発国',
                                CountryTo: '仕向国',
                                CountryUnknown: '国が定義されていません',
                                ComplexItem: '小包タイプ',
                                AddressFrom: '送信者アドレス',
                                AddressTo: '受信者のアドレス',
                                Sender: '送信者',
                                Recipient: '受信者',
                                Phone: '電話',
                                Scheduled: '配達予定',
                                Weight: '重量',
                                WeightUnitKG: 'Kg\u3002',
                                WeightUnitG: 'Gr\u3002',
                                WeightUnitLBS: 'ポンド\u3002',
                                SignedBy: '手話',
                                NextTrack: '追加の追跡番号',
                                finded_at: '郵便局で見つかりました',
                                link: '追跡リンク',
                                copy: 'コピー',
                                copied: 'コピーしました\uFF01'
                            },
                            values: { g: 'Gr\u3002' }
                        },
                        official: {
                            head: '公式サイト',
                            p: 'あなたは郵便サービスの公式ウェブサイトであなたの小包を追跡することができます'
                        },
                        empty: {
                            head: '小包の情報をお待ちしております',
                            h2: 'パッケージの場所に関する情報はまだありません\u3002',
                            text: '1週間以内に注文した場合\u3001これは正常です\u3002原則として\u3001小包に関する情報は10日以内に表示されます\u3002'
                        },
                        we_found: {
                            head: '以下のサービスで検索しました',
                            can_find_question: '他の人を見つけてみませんか\uFF1F',
                            can_find_text: 'あなたはあなたがもっと探すことができる郵便サービスを知っていますか\uFF1F',
                            select_text: '郵便サービスを選択してください'
                        },
                        groups: {
                            track: 'トラックコード\uFF1A[{0}]',
                            event_count: '{0}ステータス| {0}ステータス| {0}ステータス| {0}ステータス',
                            show: '公演',
                            hide: '隠す'
                        },
                        alert: {
                            head: 'おっと\uFF01これは不明なトラック番号です',
                            text: '私たちはあなたの小包を配達するサービスを特定できませんでした',
                            text2: '手元に実際のトラックコードがない可能性があります\u3002トラックコードが正しく入力されているかどうかを確認してください\u3002'
                        },
                        alert_select_service: {
                            head: '郵便サービスを選択',
                            text: 'トラックコードが本物であり\u3001どの会社がこの小包を追跡しているのかがわかっている場合は\u3001以下を選択できます'
                        },
                        form_request: {
                            text: 'または\u3001このキャリアをまだサービスに追加していない可能性があります\u3002あなたのパッケージがどこで追跡されているか知っているならば\u3001キャリアを加えるためにこの簡単なフォームを通して我々に書いてください\u3002',
                            btn1: 'キャリアを作成して追加する',
                            alert: 'メッセージは正常に送信されました\u3002キャリアはまもなく追加されます',
                            service_label: 'キャリアリンク',
                            service_ph: 'タイトル\u3001リンク\u3001その他の情報を入力してください',
                            track_label: 'トラックコードの例',
                            track_ph: '追跡番号の例を入力してください',
                            text_label: '追加メッセージ',
                            text_ph: 'メッセージを入力してください',
                            send: 'メッセージを送る'
                        }
                    }, U = {
                        message: 'Pranešimas',
                        loading: {
                            head: 'Ieškokite savo pakuotės',
                            h2: 'Liko tik šiek tiek ...',
                            find_text: 'Mes ieškome įmonių ...'
                        },
                        tracklist: { delete: 'Ištrinti' },
                        head: {
                            track_edit_input: 'Įveskite pavadinimą ...',
                            refresh: 'Atnaujinti',
                            refresh_time: 'Atnaujinta prieš {0} {1}',
                            refresh_minutes: 'Atnaujinta ką tik | Atnaujinta prieš {0} minutę | Atnaujinta prieš {0} minutes | Atnaujinta prieš {0} minutes',
                            refresh_hours: 'Atnaujinta ką tik | Atnaujinta prieš {0} valandą | Atnaujinta prieš {0} valandas | Atnaujinta prieš {0} val',
                            refresh_active: 'Atnaujinama informacija apie pakuotę',
                            language: 'Įvykių kalba: {0}',
                            language_original: 'Ne versti',
                            list_group: {
                                all: 'Visi renginiai',
                                grouped: 'Paslaugų grupavimas'
                            },
                            language_search: {
                                placeholder: 'Įveskite kalbos pavadinimą',
                                notfound: 'Nieko nerasta',
                                cancel: 'Iš naujo nustatyti kalbą'
                            }
                        },
                        events: {
                            day_number: '{0} diena',
                            weight: 'Svoris',
                            showAll: 'Rodyti visus įvykius'
                        },
                        info: {
                            head: {
                                added: 'Pridėta {0}',
                                in_route: 'Pakuotė pakeliui',
                                in_route_days: '{0} dienos | {0} diena | {0} dienos | {0} dienos',
                                last_update: 'Paskutinis patikrinimas',
                                CountryFrom: 'Išvykimo šalis',
                                CountryTo: 'Paskirties šalis',
                                CountryUnknown: 'Šalis nenustatyta',
                                ComplexItem: 'Pakuotės tipas',
                                AddressFrom: 'Siuntėjo adresas',
                                AddressTo: 'Gavėjo adresas',
                                Sender: 'Siuntėjas',
                                Recipient: 'Gavėjas',
                                Phone: 'Telefonas',
                                Scheduled: 'Pristatymas numatytas iki',
                                Weight: 'Svoris',
                                WeightUnitKG: 'Kilogramas',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Svarų',
                                SignedBy: 'Pasirašė',
                                NextTrack: 'Papildomi stebėjimo numeriai',
                                finded_at: 'Rasta pašto tarnybose',
                                link: 'Stebėjimo nuoroda',
                                copy: 'Kopijuoti',
                                copied: 'Nukopijuota!'
                            },
                            values: { g: 'Stulpelis' }
                        },
                        official: {
                            head: 'Oficialios svetainės',
                            p: 'Savo paketą galite stebėti oficialiose pašto paslaugų svetainėse'
                        },
                        empty: {
                            head: 'Laukiama informacijos apie paketą',
                            h2: 'Informacija apie pakuotės vietą dar nėra.',
                            text: 'Jei užsakymą atlikote mažiau nei prieš savaitę - tai normalu. Paprastai siuntinių informacija pasirodo per 10 dienų.'
                        },
                        we_found: {
                            head: 'Ieškojome šiose tarnybose',
                            can_find_question: 'Pabandyti rasti kituose?',
                            can_find_text: 'Ar žinote, kurios pašto paslaugos galite ieškoti daugiau?',
                            select_text: 'Pasirinkite pašto paslaugą'
                        },
                        groups: {
                            track: 'Stebėjimo numeris: [{0}]',
                            event_count: '{0} įvykiai | {0} įvykis | {0} įvykiai | {0} įvykiai',
                            show: 'Rodyti',
                            hide: 'Slėpti'
                        },
                        alert: {
                            head: 'Oi! Tai nežinomas takelio numeris.',
                            text: 'Nepavyko nustatyti paslaugos, kuri teikia jūsų paketą',
                            text2: 'Galbūt jūs neturite realaus kelio kodo, patikrinkite, ar kelio kodas įvestas teisingai.'
                        },
                        alert_select_service: {
                            head: 'Pasirinkite pašto paslaugą',
                            text: 'Jei esate tikras, kad sekimo kodas yra tikras ir žinote, kuri įmonė dalyvauja stebint šį paketą, galite pasirinkti toliau'
                        },
                        form_request: {
                            text: 'O galbūt mes dar neįtraukėme šio operatoriaus į savo paslaugą. Jei žinote, kur stebimas jūsų paketas, parašykite mums naudodami šią paprastą formą, kad pridėtumėte vežėją.',
                            btn1: 'Parašykite ir pridėkite nešiklį',
                            alert: 'Jūsų pranešimas sėkmingai išsiųstas. Vežėjas netrukus bus pridėtas.',
                            service_label: 'Vežėjo svetainės nuoroda',
                            service_ph: 'Įveskite vardą, nuorodą ar kitą informaciją',
                            track_label: 'Sekimo numeris',
                            track_ph: 'Įveskite stebėjimo numerio pavyzdį',
                            text_label: 'Papildomas pranešimas',
                            text_ph: 'Įveskite savo pranešimą',
                            send: 'Pateikti'
                        }
                    }, E = {
                        message: 'Ziņojums',
                        loading: {
                            head: 'Meklējiet savu paketi',
                            h2: 'Tikai mazliet palicis ...',
                            find_text: 'Mēs meklējam uzņēmumus ...'
                        },
                        tracklist: { delete: 'Dzēst' },
                        head: {
                            track_edit_input: 'Ievadiet nosaukumu ...',
                            refresh: 'Atjaunot',
                            refresh_time: 'Atjaunināts pirms {0} {1}',
                            refresh_minutes: 'Atsvaidzināts tikko | Atjaunināts pirms {0} minūtes | Atjaunināts pirms {0} minūtēm | Atjaunināts pirms {0} minūtēm',
                            refresh_hours: 'Atsvaidzināts tikko | Atjaunināts pirms {0} stundas | Atjaunināts pirms {0} stundām | Atjaunināts pirms {0} stundām',
                            refresh_active: 'Atsvaidzinoša informācija par pakotni',
                            language: 'Pasākumu valoda: {0}',
                            language_original: 'Nevar tulkot',
                            list_group: {
                                all: 'Visi notikumi',
                                grouped: 'Pakalpojumu grupēšana'
                            },
                            language_search: {
                                placeholder: 'Ievadiet valodas nosaukumu',
                                notfound: 'Nekas nav atrasts',
                                cancel: 'Atiestatīt valodu'
                            }
                        },
                        events: {
                            day_number: '{0} diena',
                            weight: 'Svars',
                            showAll: 'Rādīt visus notikumus'
                        },
                        info: {
                            head: {
                                added: 'Pievienots {0}',
                                in_route: 'Iepakojums pa ceļam',
                                in_route_days: '{0} dienas | {0} diena | {0} dienas | {0} dienas',
                                last_update: 'Pēdējā pārbaude',
                                CountryFrom: 'Izbraukšanas valsts',
                                CountryTo: 'Galamērķa valsts',
                                CountryUnknown: 'Valsts nav definēta',
                                ComplexItem: 'Iepakojuma veids',
                                AddressFrom: 'Sūtītāja adrese',
                                AddressTo: 'Saņēmēja adrese',
                                Sender: 'Sūtītājs',
                                Recipient: 'Saņēmējs',
                                Phone: 'Tālrunis',
                                Scheduled: 'Piegāde paredzēta plkst',
                                Weight: 'Svars',
                                WeightUnitKG: 'Kilograms',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'Parakstīts',
                                NextTrack: 'Papildu izsekošanas numuri',
                                finded_at: 'Atrasts pasta pakalpojumos',
                                link: 'Izsekošanas saite',
                                copy: 'Kopēt',
                                copied: 'Nokopēts!'
                            },
                            values: { g: 'Sleja' }
                        },
                        official: {
                            head: 'Oficiālās vietnes',
                            p: 'Jūs varat izsekot savu paku oficiālajās pasta pakalpojumu vietnēs'
                        },
                        empty: {
                            head: 'Gaida informāciju par paketi',
                            h2: 'Informācija par pakas atrašanās vietu vēl ir.',
                            text: 'Ja pasūtījumu veicāt mazāk nekā pirms nedēļas - tas ir normāli. Informācija par pakām parasti parādās 10 dienu laikā.'
                        },
                        we_found: {
                            head: 'Mēs meklējām šādos pakalpojumos',
                            can_find_question: 'Mēģināt atrast citos?',
                            can_find_text: 'Vai zināt, kuru pasta pakalpojumu varat meklēt vairāk?',
                            select_text: 'Izvēlieties pasta pakalpojumu'
                        },
                        groups: {
                            track: 'Izsekošanas numurs: [{0}]',
                            event_count: '{0} notikumi | {0} notikums | {0} notikumi | {0} notikumi',
                            show: 'Parādīt',
                            hide: 'Paslēpt'
                        },
                        alert: {
                            head: 'Hmm ... Šis ir nezināms dziesmas numurs.',
                            text: 'Mēs nevarējām noteikt pakalpojumu, kas piegādā jūsu paketi',
                            text2: 'Varbūt jums nav īsta ceļa koda, pārbaudiet, vai celiņa kods ir ievadīts pareizi.'
                        },
                        alert_select_service: {
                            head: 'Izvēlieties pasta pakalpojumu',
                            text: 'Ja esat pārliecināts, ka izsekošanas kods ir reāls, un zināt, kurš uzņēmums ir iesaistīts šīs paketes izsekošanā, varat izvēlēties tālāk'
                        },
                        form_request: {
                            text: 'Vai varbūt mēs vēl neesam pievienojuši šo pārvadātāju savam pakalpojumam. Ja zināt, kur tiek izsekota jūsu pakete, rakstiet mums, izmantojot šo vienkāršo veidlapu, lai pievienotu pārvadātāju.',
                            btn1: 'Uzrakstiet un pievienojiet nesēju',
                            alert: 'Jūsu ziņojums ir veiksmīgi nosūtīts. Drīzumā tiks pievienots mobilo sakaru operators.',
                            service_label: 'Pārvadātāja vietnes saite',
                            service_ph: 'Ievadiet vārdu, saiti vai citu informāciju',
                            track_label: 'Izsekošanas numurs',
                            track_ph: 'Ievadiet izsekošanas numura piemēru',
                            text_label: 'Papildu ziņojums',
                            text_ph: 'Ievadiet ziņojumu',
                            send: 'Iesniegt'
                        }
                    }, O = {
                        message: 'Bericht',
                        loading: {
                            head: 'Zoek uw pakket',
                            h2: 'Nog maar een beetje over ...',
                            find_text: 'Wij zoeken bedrijven ...'
                        },
                        tracklist: { delete: 'Verwijderen' },
                        head: {
                            track_edit_input: 'Voer de titel in ...',
                            refresh: 'Vernieuwen',
                            refresh_time: '{0} {1} geleden geüpdatet',
                            refresh_minutes: 'Zojuist vernieuwd | {0} minuut geleden geüpdatet | {0} minuten geleden geüpdatet | {0} minuten geleden geüpdatet',
                            refresh_hours: 'Zojuist vernieuwd | {0} uur geleden geüpdatet | {0} uur geleden geüpdatet | {0} uur geleden geüpdatet',
                            refresh_active: 'Pakketinformatie vernieuwen',
                            language: 'Taal evenement: {0}',
                            language_original: 'Niet vertalen',
                            list_group: {
                                all: 'Alle evenementen',
                                grouped: 'Servicegroepering'
                            },
                            language_search: {
                                placeholder: 'Voer de taalnaam in',
                                notfound: 'Niets gevonden',
                                cancel: 'Reset taal'
                            }
                        },
                        events: {
                            day_number: '{0} dag',
                            weight: 'Gewicht',
                            showAll: 'Toon alle evenementen'
                        },
                        info: {
                            head: {
                                added: 'Toegevoegd {0}',
                                in_route: 'Pakket onderweg',
                                in_route_days: '{0} dagen | {0} dag | {0} dagen | {0} dagen',
                                last_update: 'Laatste controle',
                                CountryFrom: 'Land van vertrek',
                                CountryTo: 'Land van bestemming',
                                CountryUnknown: 'Land niet gedefinieerd',
                                ComplexItem: 'Pakkettype',
                                AddressFrom: 'Zender adres',
                                AddressTo: 'Adres van de ontvanger',
                                Sender: 'Afzender',
                                Recipient: 'Ontvanger',
                                Phone: 'Telefoon',
                                Scheduled: 'Levering gepland voor',
                                Weight: 'Gewicht',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Pond',
                                SignedBy: 'Gesigneerd',
                                NextTrack: 'Extra volgnummers',
                                finded_at: 'Gevonden in postdiensten',
                                link: 'Tracking-link',
                                copy: 'Kopiëren',
                                copied: 'Gekopieerd!'
                            },
                            values: { g: 'Kolom' }
                        },
                        official: {
                            head: 'Officiële sites',
                            p: 'U kunt uw pakket volgen op de officiële sites van postdiensten'
                        },
                        empty: {
                            head: 'Wachten op pakketinformatie',
                            h2: 'Informatie over de locatie van het pakket nog.',
                            text: 'Als u minder dan een week geleden een bestelling heeft geplaatst, is dit normaal. Pakketinformatie verschijnt in de regel binnen 10 dagen.'
                        },
                        we_found: {
                            head: 'We hebben gezocht in de volgende services',
                            can_find_question: 'In anderen proberen te vinden?',
                            can_find_text: 'Weet u naar welke mailservice u nog meer kunt zoeken?',
                            select_text: 'Kies een postbedrijf'
                        },
                        groups: {
                            track: 'Trackingnummer: [{0}]',
                            event_count: '{0} evenementen | {0} evenement | {0} evenementen | {0} evenementen',
                            show: 'Tonen',
                            hide: 'Zich verstoppen'
                        },
                        alert: {
                            head: 'Oeps! Dit is een onbekend tracknummer.',
                            text: 'We konden niet vaststellen welke service uw pakket bezorgt',
                            text2: 'Misschien heeft u geen echte trackcode bij de hand, controleer dan of de trackcode correct is ingevoerd.'
                        },
                        alert_select_service: {
                            head: 'Kies een postbedrijf',
                            text: 'Als u zeker weet dat de trackcode echt is en weet welk bedrijf betrokken is bij het volgen van dit pakket, kunt u hieronder kiezen'
                        },
                        form_request: {
                            text: 'Of misschien hebben we deze vervoerder nog niet aan onze service toegevoegd. Als u weet waar uw pakket wordt gevolgd, schrijf ons dan via dit eenvoudige formulier om een vervoerder toe te voegen.',
                            btn1: 'Schrijf en voeg een koerier toe',
                            alert: 'Uw bericht is succesvol verzonden. Carrier wordt binnenkort toegevoegd.',
                            service_label: 'Link naar website van provider',
                            service_ph: 'Voer een naam, link of andere informatie in',
                            track_label: 'Volg nummer',
                            track_ph: 'Voer een voorbeeld van een trackingnummer in',
                            text_label: 'Extra bericht',
                            text_ph: 'Voer uw bericht in',
                            send: 'Verzenden'
                        }
                    }, N = {
                        message: 'Wiadomość',
                        loading: {
                            head: 'Wyszukaj swój pakiet',
                            h2: 'Zostało tylko trochę ...',
                            find_text: 'Poszukujemy firm ...'
                        },
                        tracklist: { delete: 'Usunąć' },
                        head: {
                            track_edit_input: 'Wpisz tytuł ...',
                            refresh: 'Odświeżać',
                            refresh_time: 'Zaktualizowano {0} {1} temu',
                            refresh_minutes: 'Odświeżony właśnie teraz | Zaktualizowano {0} minutę temu | Zaktualizowano {0} minut temu | Zaktualizowano {0} minut temu',
                            refresh_hours: 'Odświeżony właśnie teraz | Zaktualizowano {0} godzinę temu | Zaktualizowano {0} godzin temu | Zaktualizowano {0} godz. Temu',
                            refresh_active: 'Odświeżam informacje o pakiecie',
                            language: 'Język wydarzeń: {0}',
                            language_original: 'Nie tłumacz',
                            list_group: {
                                all: 'Wszystkie zdarzenia',
                                grouped: 'Grupowanie usług'
                            },
                            language_search: {
                                placeholder: 'Wpisz nazwę języka',
                                notfound: 'Nic nie znaleziono',
                                cancel: 'Zresetuj język'
                            }
                        },
                        events: {
                            day_number: '{0} dzień',
                            weight: 'Waga',
                            showAll: 'Pokaż wszystkie wydarzenia'
                        },
                        info: {
                            head: {
                                added: 'Dodano {0}',
                                in_route: 'Paczka w drodze',
                                in_route_days: '{0} dni | {0} dzień | {0} dni | {0} dni',
                                last_update: 'Ostatnie sprawdzenie',
                                CountryFrom: 'Kraj wyjazdu',
                                CountryTo: 'Kraj docelowy',
                                CountryUnknown: 'Kraj nie został zdefiniowany',
                                ComplexItem: 'Typ przesyłki',
                                AddressFrom: 'Adres nadawcy',
                                AddressTo: 'Adres odbiorcy',
                                Sender: 'Nadawca',
                                Recipient: 'Odbiorca',
                                Phone: 'Telefon',
                                Scheduled: 'Dostawa zaplanowana na',
                                Weight: 'Waga',
                                WeightUnitKG: 'Kg',
                                WeightUnitG: 'Sol',
                                WeightUnitLBS: 'Funty',
                                SignedBy: 'Podpisano',
                                NextTrack: 'Dodatkowe numery monitorowania',
                                finded_at: 'Znaleziono w usługach pocztowych',
                                link: 'Link śledzący',
                                copy: 'Kopiuj',
                                copied: 'Skopiowano!'
                            },
                            values: { g: 'Kolumna' }
                        },
                        official: {
                            head: 'Oficjalne strony',
                            p: 'Możesz śledzić swoją paczkę na oficjalnych stronach usług pocztowych'
                        },
                        empty: {
                            head: 'Czekam na informacje o paczce',
                            h2: 'Informacje o lokalizacji paczki jeszcze.',
                            text: 'Jeśli złożyłeś zamówienie mniej niż tydzień temu - to normalne. Z reguły informacje o przesyłkach pojawiają się w ciągu 10 dni.'
                        },
                        we_found: {
                            head: 'Szukaliśmy w następujących usługach',
                            can_find_question: 'Spróbuj znaleźć w innych?',
                            can_find_text: 'Czy wiesz, w której usłudze pocztowej możesz wyszukać więcej?',
                            select_text: 'Wybierz usługę pocztową'
                        },
                        groups: {
                            track: 'Numer śledzenia: [{0}]',
                            event_count: '{0} wydarzenia | {0} wydarzenie | {0} wydarzenia | {0} wydarzeń',
                            show: 'Pokazać',
                            hide: 'Ukryć'
                        },
                        alert: {
                            head: 'Ups! To jest nieznany numer utworu.',
                            text: 'Nie mogliśmy określić usługi, która dostarcza paczkę',
                            text2: 'Być może nie masz pod ręką prawdziwego kodu utworu, sprawdź, czy kod utworu został wprowadzony poprawnie.'
                        },
                        alert_select_service: {
                            head: 'Wybierz usługę pocztową',
                            text: 'Jeśli jesteś pewien, że kod śledzenia jest prawdziwy i wiesz, która firma jest zaangażowana w śledzenie tej przesyłki, możesz wybrać poniżej'
                        },
                        form_request: {
                            text: 'A może jeszcze nie dodaliśmy tego przewoźnika do naszej usługi. Jeśli wiesz, gdzie śledzona jest Twoja paczka, napisz do nas za pomocą tego prostego formularza, aby dodać przewoźnika.',
                            btn1: 'Napisz i dodaj przewoźnika',
                            alert: 'Twoja wiadomość została wysłana poprawnie. Przewoźnik zostanie wkrótce dodany.',
                            service_label: 'Link do strony przewoźnika',
                            service_ph: 'Wprowadź nazwę, łącze lub inne informacje',
                            track_label: 'Numer przesyłki',
                            track_ph: 'Wpisz przykładowy numer śledzenia',
                            text_label: 'Dodatkowa wiadomość',
                            text_ph: 'Wpisz swoją wiadomość',
                            send: 'Zatwierdź'
                        }
                    }, $ = {
                        message: 'Mensagem',
                        loading: {
                            head: 'Nós procuramos seu pacote',
                            h2: 'Resta muito pouco ...',
                            find_text: 'Procuramos empresas ...'
                        },
                        tracklist: { delete: 'Excluir' },
                        head: {
                            track_edit_input: 'Insira o título ...',
                            refresh: 'Atualizar',
                            refresh_time: 'Atualizado {0} {1} atrás',
                            refresh_minutes: 'Apenas atualizado | Atualizado {0} minutos atrás | Atualizado {0} minutos atrás | Atualizado {0} minutos atrás',
                            refresh_hours: 'Apenas atualizado | Atualizado {0} uma hora atrás | Atualizado {0} horas atrás | Atualizado {0} horas atrás',
                            refresh_active: 'Atualizando as informações do lote',
                            language: 'Idioma do status: {0}',
                            language_original: 'Não traduzir',
                            list_group: {
                                all: 'Todos os eventos',
                                grouped: 'Grupo de serviço'
                            },
                            language_search: {
                                placeholder: 'Insira o nome do idioma',
                                notfound: 'Nada encontrado',
                                cancel: 'Redefinir idioma'
                            }
                        },
                        events: {
                            day_number: '{0} dia',
                            weight: 'Peso',
                            showAll: 'Mostrar todos os eventos'
                        },
                        info: {
                            head: {
                                added: 'Adicionado {0}',
                                in_route: 'Pacote em trânsito',
                                in_route_days: '{0} dias | {0} dia | {0} dias | {0} dias',
                                last_update: 'Última verificação',
                                CountryFrom: 'País de partida',
                                CountryTo: 'País de destino',
                                CountryUnknown: 'País não definido',
                                ComplexItem: 'Tipo de parcela',
                                AddressFrom: 'Endereço do remetente',
                                AddressTo: 'Endereço do destinatário',
                                Sender: 'Remetente',
                                Recipient: 'Destinatário',
                                Phone: 'Telefone',
                                Scheduled: 'A entrega está agendada para',
                                Weight: 'Peso',
                                WeightUnitKG: 'Kg.',
                                WeightUnitG: 'Gr.',
                                WeightUnitLBS: 'Libra.',
                                SignedBy: 'Assinado',
                                NextTrack: 'Números de rastreamento adicionais',
                                finded_at: 'Encontrado nos serviços postais',
                                link: 'Link de rastreamento',
                                copy: 'Cópia de',
                                copied: 'Copiado!'
                            },
                            values: { g: 'Gr.' }
                        },
                        official: {
                            head: 'Sites oficiais',
                            p: 'Você pode rastrear sua encomenda nos sites oficiais dos serviços postais'
                        },
                        empty: {
                            head: 'Estamos aguardando informações sobre o pacote',
                            h2: 'Ainda não há informações sobre a localização da embalagem.',
                            text: 'Se você fez um pedido há menos de uma semana, isso é normal. Como regra, as informações sobre o pacote aparecem em até 10 dias.'
                        },
                        we_found: {
                            head: 'Pesquisamos nos seguintes serviços',
                            can_find_question: 'Vamos tentar encontrar nos outros?',
                            can_find_text: 'Você sabe qual serviço postal pode procurar mais?',
                            select_text: 'Selecione um serviço postal'
                        },
                        groups: {
                            track: 'Código de rastreamento: [{0}]',
                            event_count: '{0} status | {0} status | {0} status | {0} status',
                            show: 'Mostrar',
                            hide: 'Ocultar'
                        },
                        alert: {
                            head: 'OOPS! Este é um número de faixa desconhecido',
                            text: 'Não foi possível identificar o serviço que entrega sua encomenda',
                            text2: 'Talvez você não tenha um código de faixa real em suas mãos, verifique se o código de faixa foi inserido corretamente.'
                        },
                        alert_select_service: {
                            head: 'Selecione o serviço postal',
                            text: 'Se você tem certeza de que o código de rastreamento é real e sabe qual empresa está rastreando este pacote, você pode escolher abaixo'
                        },
                        form_request: {
                            text: 'Ou talvez ainda não tenhamos adicionado esta operadora ao nosso serviço. Se você sabe onde seu pacote está sendo rastreado, escreva para nós por meio deste formulário simples para adicionar uma transportadora.',
                            btn1: 'Escreva e adicione uma operadora',
                            alert: 'Sua mensagem foi enviada com sucesso. A operadora será adicionada em breve',
                            service_label: 'Link da operadora',
                            service_ph: 'Insira o título, link ou outras informações',
                            track_label: 'Exemplo de código de rastreamento',
                            track_ph: 'Insira um exemplo de número de rastreamento',
                            text_label: 'Mensagem adicional',
                            text_ph: 'Digite sua mensagem',
                            send: 'Enviar mensagem'
                        }
                    }, I = {
                        message: 'İleti',
                        loading: {
                            head: 'Paketinizi arayın',
                            h2: 'Sadece biraz kaldı ...',
                            find_text: 'Şirket arıyoruz ...'
                        },
                        tracklist: { delete: 'Sil' },
                        head: {
                            track_edit_input: 'Başlığı girin ...',
                            refresh: 'Yenile',
                            refresh_time: '{0} {1} önce güncellendi',
                            refresh_minutes: 'Az önce yenilendi | {0} dakika önce güncellendi | {0} dakika önce güncellendi | {0} dakika önce güncellendi',
                            refresh_hours: 'Az önce yenilendi | {0} saat önce güncellendi | {0} saat önce güncellendi | {0} saat önce güncellendi',
                            refresh_active: 'Paket bilgilerinin yenilenmesi',
                            language: 'Etkinlik dili: {0}',
                            language_original: 'Tercüme değil',
                            list_group: {
                                all: 'Tüm olaylar',
                                grouped: 'Hizmet Gruplaması'
                            },
                            language_search: {
                                placeholder: 'Dil adını girin',
                                notfound: 'Hiçbirşey Bulunamadı',
                                cancel: 'Dili sıfırla'
                            }
                        },
                        events: {
                            day_number: '{0} gün',
                            weight: 'Ağırlık',
                            showAll: 'Tüm olayları göster'
                        },
                        info: {
                            head: {
                                added: '{0} eklendi',
                                in_route: 'Yolda paket',
                                in_route_days: '{0} gün | {0} gün | {0} gün | {0} gün',
                                last_update: 'Son kontrol',
                                CountryFrom: 'Kalkış ülkesi',
                                CountryTo: 'Hedef Ülke',
                                CountryUnknown: 'Ülke tanımlanmamış',
                                ComplexItem: 'Paket Tipi',
                                AddressFrom: 'Gönderen adresi',
                                AddressTo: 'Alıcının adresi',
                                Sender: 'Gönderen',
                                Recipient: 'Alıcı',
                                Phone: 'Telefon',
                                Scheduled: 'Teslimat için planlandı',
                                Weight: 'Ağırlık',
                                WeightUnitKG: 'Kilogram',
                                WeightUnitG: 'G',
                                WeightUnitLBS: 'Lbs',
                                SignedBy: 'İmzalı',
                                NextTrack: 'Ek Takip Numaraları',
                                finded_at: 'Posta hizmetlerinde bulundu',
                                link: 'İzleme Bağlantısı',
                                copy: 'Kopyala',
                                copied: 'Kopyalandı!'
                            },
                            values: { g: 'Sütun' }
                        },
                        official: {
                            head: 'Resmi siteler',
                            p: 'Paketinizi posta hizmetlerinin resmi sitelerinde takip edebilirsiniz.'
                        },
                        empty: {
                            head: 'Paket bilgileri bekleniyor',
                            h2: 'Paketin konumu hakkında henüz bilgi yok.',
                            text: 'Bir haftadan daha kısa bir süre önce sipariş verdiyseniz - bu normaldir. Kural olarak, paket bilgileri 10 gün içinde görünür.'
                        },
                        we_found: {
                            head: 'Aşağıdaki hizmetlerde aradık',
                            can_find_question: 'Başkalarında bulmaya mı çalışıyorsunuz?',
                            can_find_text: 'Daha fazla hangi posta hizmetini arayabileceğinizi biliyor musunuz?',
                            select_text: 'Posta hizmeti seçin'
                        },
                        groups: {
                            track: 'Takip numarası: [{0}]',
                            event_count: '{0} etkinlik | {0} olay | {0} etkinlik | {0} etkinlik',
                            show: 'Göstermek',
                            hide: 'Saklamak'
                        },
                        alert: {
                            head: 'Oops! Bu bilinmeyen bir parça numarasıdır.',
                            text: 'Paketinizi teslim eden hizmeti belirleyemedik',
                            text2: 'Elinizde gerçek bir parça kodunuz olmayabilir, parça kodunun doğru girilip girilmediğini kontrol edin.'
                        },
                        alert_select_service: {
                            head: 'Posta hizmeti seçin',
                            text: 'Parça kodunun gerçek olduğundan eminseniz ve bu paketi takip etmeye hangi şirketin dahil olduğunu biliyorsanız, aşağıdan seçim yapabilirsiniz.'
                        },
                        form_request: {
                            text: 'Veya belki de bu taşıyıcıyı henüz hizmetimize eklemedik. Paketinizin nerede takip edildiğini biliyorsanız, bir taşıyıcı eklemek için bu basit form aracılığıyla bize yazın.',
                            btn1: 'Bir taşıyıcı yazın ve ekleyin',
                            alert: 'Mesajınız başarıyla gönderilmiştir. Operatör yakında eklenecek.',
                            service_label: 'Operatör web sitesi bağlantısı',
                            service_ph: 'Bir ad, bağlantı veya diğer bilgileri girin',
                            track_label: 'Takip numarası',
                            track_ph: 'Örnek bir takip numarası girin',
                            text_label: 'Ek mesaj',
                            text_ph: 'Mesajınızı girin',
                            send: 'Sunmak'
                        }
                    }, G = {
                        message: '信息',
                        loading: {
                            head: '我们搜索您的包裹',
                            h2: '剩下的几乎没有...',
                            find_text: '我们正在寻找公司...'
                        },
                        tracklist: { delete: '删除' },
                        head: {
                            track_edit_input: '输入标题...',
                            refresh: '刷新',
                            refresh_time: '{0} {1}前更新',
                            refresh_minutes: '刚刚更新|更新{0}分钟前|更新{0}分钟前| {0}分钟前更新',
                            refresh_hours: '刚刚更新|一小时前更新{0} |更新时间{0}小时前| {0}小时前更新',
                            refresh_active: '更新包裹信息',
                            language: '状态语言\uFF1A{0}',
                            language_original: '不翻译',
                            list_group: {
                                all: '所有活动',
                                grouped: '服务分组'
                            },
                            language_search: {
                                placeholder: '输入语言名称',
                                notfound: '什么都没找到',
                                cancel: '重设语言'
                            }
                        },
                        events: {
                            day_number: '{0}天',
                            weight: '重量',
                            showAll: '显示所有活动'
                        },
                        info: {
                            head: {
                                added: '添加了{0}',
                                in_route: '运送中的包裹',
                                in_route_days: '{0}天| {0}天| {0}天| {0}天',
                                last_update: '最后检查',
                                CountryFrom: '出发国家',
                                CountryTo: '目的地国家',
                                CountryUnknown: '国家未定义',
                                ComplexItem: '包裹类型',
                                AddressFrom: '发件人地址',
                                AddressTo: '收件人地址',
                                Sender: '发件人',
                                Recipient: '接受者',
                                Phone: '电话',
                                Scheduled: '预定于',
                                Weight: '重量',
                                WeightUnitKG: '公斤\u3002',
                                WeightUnitG: 'Gr\u3002',
                                WeightUnitLBS: '磅\u3002',
                                SignedBy: '签',
                                NextTrack: '附加跟踪号',
                                finded_at: '在邮政服务中发现',
                                link: '跟踪链接',
                                copy: '复制',
                                copied: '复制\uFF01'
                            },
                            values: { g: 'Gr\u3002' }
                        },
                        official: {
                            head: '官方网站',
                            p: '您可以在邮政服务的官方网站上跟踪包裹'
                        },
                        empty: {
                            head: '我们正在等待有关包裹的信息',
                            h2: '尚无关于包装位置的信息\u3002',
                            text: '如果您不到一周前下订单\uFF0C这是正常现象\u3002通常\uFF0C有关包裹的信息会在10天内显示\u3002'
                        },
                        we_found: {
                            head: '我们搜索了以下服务',
                            can_find_question: '让我们尝试寻找其他人吗\uFF1F',
                            can_find_text: '您知道您可以寻找更多邮政服务吗\uFF1F',
                            select_text: '选择邮政服务'
                        },
                        groups: {
                            track: '跟踪代码\uFF1A[{0}]',
                            event_count: '{0}个状态| {0}状态| {0}状态| {0}个状态',
                            show: '显示',
                            hide: '隐藏'
                        },
                        alert: {
                            head: '哎呀\uFF01这是一个未知的曲目号',
                            text: '我们无法识别提供您包裹的服务',
                            text2: '也许您手中没有真正的跟踪代码\uFF0C请检查跟踪代码输入是否正确\u3002'
                        },
                        alert_select_service: {
                            head: '选择邮政服务',
                            text: '如果您确定跟踪代码是真实的\uFF0C并且知道哪个公司正在跟踪此包裹\uFF0C则可以在下面选择'
                        },
                        form_request: {
                            text: '也许我们还没有将此载体添加到我们的服务中\u3002如果您知道在哪里跟踪包裹\uFF0C请通过此简单表格写信给我们\uFF0C以添加承运人\u3002',
                            btn1: '编写并添加载体',
                            alert: '您的留言已成功发送\u3002运营商即将添加',
                            service_label: '运营商链接',
                            service_ph: '输入标题\uFF0C链接或其他信息',
                            track_label: '跟踪代码示例',
                            track_ph: '输入示例跟踪号',
                            text_label: '附加讯息',
                            text_ph: '输入您的讯息',
                            send: '发信息'
                        }
                    }, B = {
                        message: '信息',
                        loading: {
                            head: '我們搜索您的包裹',
                            h2: '剩下的幾乎沒有...',
                            find_text: '我們正在尋找公司...'
                        },
                        tracklist: { delete: '刪除' },
                        head: {
                            track_edit_input: '輸入標題...',
                            refresh: '刷新',
                            refresh_time: '{0} {1}前更新',
                            refresh_minutes: '剛剛更新|更新{0}分鐘前|更新{0}分鐘前| {0}分鐘前更新',
                            refresh_hours: '剛剛更新|一小時前更新{0} | {0}小時前更新| {0}小時前更新',
                            refresh_active: '更新包裹信息',
                            language: '狀態語言\uFF1A{0}',
                            language_original: '不翻譯',
                            list_group: {
                                all: '所有活動',
                                grouped: '服務分組'
                            },
                            language_search: {
                                placeholder: '輸入語言名稱',
                                notfound: '什麼都沒找到',
                                cancel: '重設語言'
                            }
                        },
                        events: {
                            day_number: '{0}天',
                            weight: '重量',
                            showAll: '顯示所有活動'
                        },
                        info: {
                            head: {
                                added: '添加了{0}',
                                in_route: '運送中的包裹',
                                in_route_days: '{0}天| {0}天| {0}天| {0}天',
                                last_update: '最後檢查',
                                CountryFrom: '出發國家',
                                CountryTo: '目的地國家',
                                CountryUnknown: '國家未定義',
                                ComplexItem: '包裹類型',
                                AddressFrom: '發件人地址',
                                AddressTo: '收件人地址',
                                Sender: '發件人',
                                Recipient: '接受者',
                                Phone: '電話',
                                Scheduled: '預定於',
                                Weight: '重量',
                                WeightUnitKG: '公斤\u3002',
                                WeightUnitG: 'Gr\u3002',
                                WeightUnitLBS: '磅\u3002',
                                SignedBy: '簽',
                                NextTrack: '附加跟踪號',
                                finded_at: '在郵政服務中發現',
                                link: '跟踪鏈接',
                                copy: '複製',
                                copied: '複製\uFF01'
                            },
                            values: { g: 'Gr\u3002' }
                        },
                        official: {
                            head: '官方網站',
                            p: '您可以在郵政服務的官方網站上跟踪包裹'
                        },
                        empty: {
                            head: '我們正在等待有關包裹的信息',
                            h2: '尚無關於包裝位置的信息\u3002',
                            text: '如果您不到一周前下訂單\uFF0C這是正常現象\u3002通常\uFF0C有關包裹的信息會在10天內顯示\u3002'
                        },
                        we_found: {
                            head: '我們搜索了以下服務',
                            can_find_question: '讓我們嘗試尋找其他人嗎\uFF1F',
                            can_find_text: '您知道您可以尋找哪種郵政服務嗎\uFF1F',
                            select_text: '選擇郵政服務'
                        },
                        groups: {
                            track: '跟踪代碼\uFF1A[{0}]',
                            event_count: '{0}個狀態| {0}狀態| {0}狀態| {0}個狀態',
                            show: '顯示',
                            hide: '隱藏'
                        },
                        alert: {
                            head: '哎呀\uFF01這是一個未知的曲目號',
                            text: '我們無法識別提供您包裹的服務',
                            text2: '也許您手中沒有真正的跟踪代碼\uFF0C請檢查跟踪代碼輸入是否正確\u3002'
                        },
                        alert_select_service: {
                            head: '選擇郵政服務',
                            text: '如果您確定跟踪代碼是真實的\uFF0C並且知道哪個公司正在跟踪此包裹\uFF0C則可以在下面選擇'
                        },
                        form_request: {
                            text: '也許我們還沒有將此載體添加到我們的服務中\u3002如果您知道在哪裡跟踪包裹\uFF0C請通過此簡單表格寫信給我們\uFF0C以添加承運人\u3002',
                            btn1: '編寫並添加載體',
                            alert: '您的留言已成功發送\u3002運營商即將添加',
                            service_label: '運營商鏈接',
                            service_ph: '輸入標題\uFF0C鏈接或其他信息',
                            track_label: '跟踪代碼示例',
                            track_ph: '輸入示例跟踪號',
                            text_label: '附加訊息',
                            text_ph: '輸入您的訊息',
                            send: '發信息'
                        }
                    }, R = {
                        en: y,
                        ru: b,
                        fr: z,
                        ar: x,
                        bn: C,
                        cs: j,
                        da: S,
                        de: A,
                        es: L,
                        hi: T,
                        id: P,
                        it: M,
                        ja: W,
                        lt: U,
                        lv: E,
                        nl: O,
                        pl: N,
                        pt: $,
                        tr: I,
                        'zh-cn': G,
                        'zh-tw': B
                    };
                n['a'].use(w['a']);
                var V = window.config && window.config.siteLocale || 'en', D = new w['a']({
                        locale: V,
                        messages: R
                    }), q = D.getChoiceIndex;
                console.log('defaultImpl', q), D.getChoiceIndex = function (e, t) {
                    if ('ru' !== this.locale)
                        return q.apply(this, arguments);
                    if (0 === e)
                        return 0;
                    var a = e > 10 && e < 20, n = e % 10 === 1;
                    return !a && n ? 1 : !a && e % 10 >= 2 && e % 10 <= 4 || t < 4 ? 2 : 3;
                };
                var F = navigator.language || navigator.userLanguage, K = F.length > 2 ? F.substr(3, 4).toLowerCase() : F, H = D.locale.substr(0, 2), Z = D.locale, J = {
                        en: 'English',
                        de: 'Deutsch',
                        ru: 'Русский',
                        fr: 'Français',
                        cs: 'Čeština',
                        da: 'Dansk',
                        id: 'Bahasa Indonesia',
                        it: 'Italiano',
                        lv: 'Latviešu',
                        lt: 'Lietuvių',
                        nl: 'Nederlands',
                        pl: 'Polski',
                        pt: 'Português',
                        tr: 'Türkçe',
                        'zh-cn': '简体中文',
                        'zh-tw': '繁體中文',
                        ko: '한국어'
                    }, Y = function () {
                        var e = [], t = F.substr(0, 2), a = null;
                        J[t] && (a = t), null === a && J[F] && (a = F);
                        var n = J;
                        for (var i in (e.push({
                                code: 'orig',
                                name: ''
                            }), a && e.push({
                                code: a,
                                name: n[a]
                            }), n))
                            a && i === a || e.push({
                                code: i,
                                name: n[i]
                            });
                        return e;
                    }();
                console.log('i18n.locale', D.locale);
                var Q = {
                    en: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    ru: [
                        'Янв',
                        'Фев',
                        'Мар',
                        'Апр',
                        'Мая',
                        'Июн',
                        'Июл',
                        'Авг',
                        'Сен',
                        'Окт',
                        'Ноя',
                        'Дек'
                    ],
                    fr: [
                        'Jan',
                        'Fév',
                        'Mars',
                        'Avr',
                        'Mai',
                        'Juin',
                        'Juil',
                        'Août',
                        'Sept',
                        'Oct',
                        'Nov',
                        'Déc'
                    ]
                };
                function X(e) {
                    var t = [], a = new Date(e), n = Q[Z] ? Z : 'en', i = a.getDate() + ' ' + Q[n][a.getMonth()] + ' ' + a.getFullYear(), r = ('00' + a.getHours().toString()).slice(-2) + ':' + ('00' + a.getMinutes().toString()).slice(-2);
                    return t = [
                        i,
                        r
                    ], 'en' == H && 'us' == K && (i = Q[H][a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear()), 'us' == K && (r = a.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: !0
                    })), t = [
                        i,
                        r
                    ], t;
                }
                function ee() {
                    const $___old_420901ffe6e847ab = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_420901ffe6e847ab)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_65d8d0ef2016a5d3.localStorage));
                        return function () {
                            var e = localStorage.getItem('eventLocale');
                            return e || Z;
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_420901ffe6e847ab)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_420901ffe6e847ab));
                    }
                }
                function te() {
                    const $___old_8d2963ca6517f415 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_8d2963ca6517f415)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_65d8d0ef2016a5d3.localStorage));
                        return function () {
                            var e = localStorage.getItem('activateEventLocale');
                            return !!e && 'true' === e;
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_8d2963ca6517f415)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_8d2963ca6517f415));
                    }
                }
                var ae = {
                        name: 'block-list-heading',
                        props: [
                            'data',
                            'loading',
                            'translate',
                            'grouping'
                        ],
                        directives: { clickOutside: _.a.directive },
                        data: function () {
                            return {
                                lists: {
                                    locale: {
                                        visible: !1,
                                        current: 'orig',
                                        list: [
                                            'orig',
                                            H
                                        ]
                                    },
                                    group: {
                                        visible: !1,
                                        current: this.grouping ? 'grouped' : 'all',
                                        list: [
                                            'all',
                                            'grouped'
                                        ]
                                    }
                                },
                                lang_current: this.translate.language,
                                lang_active: this.translate.active,
                                languages: Y,
                                locale_search: ''
                            };
                        },
                        computed: {
                            getCurrent: function () {
                                var e = this;
                                if ('orig' === this.lang_current)
                                    return this.$t('head.language_original');
                                var t = this.languages.filter(function (t) {
                                    return t.code == e.lang_current;
                                });
                                return t.length > 0 ? t[0].name : this.$t('head.language_original');
                            },
                            getListLanguageWothoutCurrent: function () {
                                if ('' == this.locale_search)
                                    return this.languages;
                                var e = new RegExp(this.locale_search, 'ig');
                                return this.languages.filter(function (t) {
                                    return t.name.match(e);
                                });
                            },
                            getDiffUpdate: function () {
                                var e = this.data;
                                return e.diffUpdateMin < 60 ? [
                                    'minutes',
                                    e.diffUpdateMin
                                ] : [
                                    'hours',
                                    Math.floor(e.diffUpdateMin / 60)
                                ];
                            }
                        },
                        methods: {
                            changeEventLanguage: function (e) {
                                this.lang_active = 'orig' !== e, this.$emit('changeEventLang', e, this.lang_active), this.lang_current = e, this.lists['locale'].visible = !1, localStorage.setItem('eventLocale', e), localStorage.setItem('activateEventLocale', this.lang_active);
                            },
                            changeActiveEventLanguage: function () {
                                this.$emit('changeEventLang', this.lang_current, this.lang_active), localStorage.setItem('activateEventLocale', this.lang_active);
                            },
                            changeSets: function (e, t) {
                                this.lists[e].current = t, this.lists[e].visible = !1, localStorage.setItem('eventGroup', 'grouped' === t), this.$emit('setGrouping', 'grouped' === t);
                            },
                            toggleMenu: function (e) {
                                var t = this;
                                this.lists[e].visible = !this.lists[e].visible, 'locale' == e && this.lists[e].visible && (this.locale_search = '', this.$nextTick(function () {
                                    t.$refs[t.data.trackcode + '-search-locale'].focus();
                                }));
                            },
                            outsideClick: function (e) {
                                var t = this;
                                return function () {
                                    t.lists[e].visible && (t.lists[e].visible = !1);
                                };
                            },
                            onRefresh: function () {
                                this.$emit('onRefresh');
                            }
                        }
                    }, ne = ae, ie = (a('dad8'), Object(c['a'])(ne, v, f, !1, null, '1a1de50e', null)), re = ie.exports, se = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', [
                            a('section', {
                                directives: [{
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !e.grouping,
                                        expression: '!grouping'
                                    }],
                                staticClass: 'list-stages shadow show_nogroups'
                            }, [
                                e.getKdivanuAds ? a('KdivanuEvent', {
                                    key: -1,
                                    attrs: {
                                        event: {
                                            day: e.getEventList[0].day,
                                            place: e.getLastRussianPlace,
                                            trackcode: e.trackcode
                                        }
                                    }
                                }) : e._e(),
                                e.getKdivanuPredzakazAds ? a('KdivanuPredzakazEvent', {
                                    key: -1,
                                    attrs: {
                                        event: {
                                            day: e.getEventList[0].day,
                                            place: e.getLastRussianPlace,
                                            trackcode: e.trackcode
                                        }
                                    }
                                }) : e._e(),
                                e._l(e.getEventList, function (t, n) {
                                    return a('Event', {
                                        key: n,
                                        attrs: { event: t },
                                        on: { showAllEvents: e.showAllEvents }
                                    });
                                })
                            ], 2),
                            a('div', {
                                directives: [{
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: e.grouping,
                                        expression: 'grouping'
                                    }],
                                staticClass: 'show_groups',
                                staticStyle: { display: 'block' }
                            }, e._l(e.grouped, function (t) {
                                return a('div', {
                                    key: t.courier.code,
                                    staticClass: 'grouped-stages',
                                    class: { open: t.open }
                                }, [
                                    a('div', { staticClass: 'group-head' }, [a('div', { staticClass: 'group-head-in' }, [a('div', { staticClass: 'post-name' }, [
                                                a('img', { attrs: { src: t.courier.image } }),
                                                a('div', { staticClass: 'text' }, [
                                                    a('h3', [e._v(e._s(t.courier.name))]),
                                                    a('p', [e._v(e._s(e.$t('groups.track', [t.courier.track])) + ' ' + e._s(e.$tc('groups.event_count', t.events.length, [t.events.length])))])
                                                ]),
                                                a('div', { staticClass: 'ml-auto actions' }, [
                                                    a('a', {
                                                        staticClass: 'minus',
                                                        attrs: { href: '#' },
                                                        on: {
                                                            click: function (a) {
                                                                return a.preventDefault(), e.toggleOpen(t);
                                                            }
                                                        }
                                                    }, [
                                                        a('img', {
                                                            attrs: {
                                                                src: 'https://1track.ru/static/img/icon-minus.svg',
                                                                alt: 'Hide stages'
                                                            }
                                                        }),
                                                        a('span', [e._v(e._s(e.$t('groups.hide')))])
                                                    ]),
                                                    a('a', {
                                                        staticClass: 'plus',
                                                        attrs: { href: '#' },
                                                        on: {
                                                            click: function (a) {
                                                                return a.preventDefault(), e.toggleOpen(t);
                                                            }
                                                        }
                                                    }, [
                                                        a('img', {
                                                            attrs: {
                                                                src: 'https://1track.ru/static/img/icon-plus.svg',
                                                                alt: 'Show stages'
                                                            }
                                                        }),
                                                        a('span', [e._v(e._s(e.$t('groups.show')))])
                                                    ])
                                                ])
                                            ])])]),
                                    a('div', {
                                        directives: [{
                                                name: 'show',
                                                rawName: 'v-show',
                                                value: t.open,
                                                expression: 'group.open'
                                            }],
                                        staticClass: 'group-body'
                                    }, [a('section', { staticClass: 'list-stages shadow' }, [
                                            e.getKdivanuAds ? a('KdivanuEvent', {
                                                key: -1,
                                                attrs: {
                                                    event: {
                                                        day: e.getEventList[0].day,
                                                        place: e.getLastRussianPlace,
                                                        trackcode: e.trackcode
                                                    }
                                                }
                                            }) : e._e(),
                                            e.getKdivanuPredzakazAds ? a('KdivanuPredzakazEvent', {
                                                key: -1,
                                                attrs: {
                                                    event: {
                                                        day: e.getEventList[0].day,
                                                        place: e.getLastRussianPlace,
                                                        trackcode: e.trackcode
                                                    }
                                                }
                                            }) : e._e(),
                                            e._l(t.events, function (e, t) {
                                                return a('Event', {
                                                    key: t,
                                                    attrs: { event: e }
                                                });
                                            })
                                        ], 2)])
                                ]);
                            }), 0)
                        ]);
                    }, oe = [], le = a('2909'), de = (a('99af'), function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', {
                            staticClass: 'stage',
                            class: { 'show-map': e.mapOpen }
                        }, ['btn_more' === e.event.type ? a('div', { staticClass: 'row btn-more' }, [
                                a('div', { staticClass: 'col-12 col-md-2 stage-timing stage-calendar' }),
                                a('div', { staticClass: 'col-12 col-md-10 stage-content' }, [a('a', {
                                        staticClass: 'btn btn-second',
                                        attrs: { href: '#' },
                                        on: {
                                            click: function (t) {
                                                return t.preventDefault(), e.showAllEvents.apply(null, arguments);
                                            }
                                        }
                                    }, [e._v(' ' + e._s(e.$t('events.showAll')) + ' ')])])
                            ]) : a('div', { staticClass: 'row' }, [
                                a('div', {
                                    staticClass: 'col-12 col-md-2 stage-timing',
                                    class: 'stage-' + e.event.status
                                }, [
                                    a('p', { staticClass: 'date' }, [e._v(e._s(e.humanDate[0]) + ' ' + e._s(e.humanDate[1]))]),
                                    a('p', { staticClass: 'day' }, [e._v(e._s(e.$t('events.day_number', [e.event.day])))])
                                ]),
                                a('div', { staticClass: 'col-12 col-md-10 stage-content' }, [a('div', { staticClass: 'row' }, [
                                        a('div', { staticClass: 'col-12 col-md-8 statuses-block' }, [
                                            a('h4', [e._v(e._s(e.event.attribute))]),
                                            a('p', { staticClass: 'text' }, [e._v(e._s(e.event.details))]),
                                            a('p', { staticClass: 'text' }, [e._v(e._s(e.event.place))])
                                        ]),
                                        a('div', { staticClass: 'col-12 col-md-4 relative' }, [
                                            a('a', {
                                                staticClass: 'service-link',
                                                attrs: { href: e.courierUri }
                                            }, [a('div', { staticClass: 'post' }, [
                                                    a('p', [e._v(e._s(e.event.courier.name))]),
                                                    a('img', { attrs: { src: e.event.courier.image } })
                                                ])]),
                                            e.event.weight ? a('p', { staticClass: 'weight' }, [
                                                a('span', { staticClass: 'd-none d-sm-inline' }, [e._v(e._s(e.$t('events.weight')))]),
                                                e._v(' ' + e._s(e.event.weight) + ' ' + e._s(e.event.weight_unit))
                                            ]) : e._e(),
                                            e.widget ? e._e() : a('div', [e.event.location && e.event.location.lat ? a('p', {
                                                    staticClass: 'look-map',
                                                    on: {
                                                        click: function (t) {
                                                            e.mapOpen = !e.mapOpen;
                                                        }
                                                    }
                                                }, [
                                                    a('svg', {
                                                        attrs: {
                                                            width: '14',
                                                            height: '8',
                                                            fill: 'none',
                                                            xmlns: 'http://www.w3.org/2000/svg'
                                                        }
                                                    }, [a('path', {
                                                            attrs: {
                                                                d: 'M1 6.568l6-5 6 5',
                                                                stroke: '#196BB8',
                                                                'stroke-width': '1.2',
                                                                'stroke-linecap': 'round',
                                                                'stroke-linejoin': 'round'
                                                            }
                                                        })]),
                                                    a('span', { staticClass: 'd-none d-xl-block' }, [e._v('Посмотреть на карте')]),
                                                    a('span', { staticClass: 'd-xl-none d-sm-block d-md-block ' }, [e._v('На карте')])
                                                ]) : e._e()])
                                        ]),
                                        e.widget ? e._e() : a('div', [e.mapOpen ? a('div', { staticClass: 'map' }, [
                                                a('div', { staticClass: 'lay' }),
                                                a('GoogleMap', {
                                                    attrs: {
                                                        name: 'map',
                                                        lat: e.event.location.lat,
                                                        lng: e.event.location.long
                                                    }
                                                })
                                            ], 1) : e._e()])
                                    ])])
                            ])]);
                    }), ce = [], ue = a('1da1'), he = (a('96cf'), function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', {
                            staticClass: 'google-map',
                            attrs: { id: e.id }
                        });
                    }), ge = [], pe = (a('d81d'), {
                        name: 'google-map',
                        props: [
                            'name',
                            'lat',
                            'lng',
                            'address'
                        ],
                        data: function () {
                            return {
                                id: 'gmap-' + this.name + '-' + Math.ceil(300000 * Math.random()),
                                map: ''
                            };
                        },
                        mounted: function () {
                            console.log('mounted google map ');
                            var e = document.getElementById(this.id), t = {
                                    zoom: 17,
                                    center: new google.maps.LatLng(parseFloat(this.lat), parseFloat(this.lng)),
                                    mapTypeControl: !1,
                                    streetViewControl: !1,
                                    rotateControl: !1,
                                    scaleControl: !1
                                };
                            this.map = new google.maps.Map(e, t);
                            var a = new google.maps.LatLng(parseFloat(this.lat), parseFloat(this.lng));
                            new google.maps.Marker({
                                map: this.map,
                                position: a
                            });
                        },
                        methods: {}
                    }), me = pe, ve = Object(c['a'])(me, he, ge, !1, null, null, null), fe = ve.exports, ke = {
                        name: 'event',
                        props: ['event'],
                        data: function () {
                            return {
                                mapOpen: !1,
                                courierUri: null,
                                widget: !1
                            };
                        },
                        created: function () {
                            'undefined' !== typeof window.treckConfig && (this.widget = !0), this.$config.genCourierLink && (this.courierUri = this.$config.genCourierLink(this.$config, this.$options.propsData.event.courier.code));
                        },
                        components: { GoogleMap: fe },
                        computed: {
                            humanDate: function () {
                                return X(this.event.date);
                            }
                        },
                        methods: {
                            showAllEvents: function () {
                                var e = this;
                                return Object(ue['a'])(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function (t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.$emit('showAllEvents');
                                            case 2:
                                                e.widget && window.treckConfig.resizeMessage();
                                            case 3:
                                            case 'end':
                                                return t.stop();
                                            }
                                    }, t);
                                }))();
                            },
                            genCourierLink: function () {
                            }
                        }
                    }, _e = ke, we = Object(c['a'])(_e, de, ce, !1, null, null, null), ye = we.exports, be = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'stage' }, [a('div', { staticClass: 'row' }, [
                                a('div', { staticClass: 'col-12 col-md-2 stage-timing stage-kdivanu' }, [
                                    a('p', { staticClass: 'date' }, [e._v('Ближайшая дата')]),
                                    a('p', { staticClass: 'day' }, [e._v(e._s(e.$t('events.day_number', [e.event.day])))])
                                ]),
                                a('div', { staticClass: 'col-12 col-md-10 stage-content' }, [a('div', { staticClass: 'row' }, [
                                        a('div', { staticClass: 'col-12 col-md-8 statuses-block' }, [
                                            a('h4', [e._v('Доставим посылку до вашего адреса!')]),
                                            a('p', { staticClass: 'text' }, [e._v('По району "' + e._s(e.event.place) + '"')]),
                                            a('div', { staticClass: 'mt-3' }, [a('a', {
                                                    staticClass: 'btn btn-primary btn-kdivanu',
                                                    attrs: {
                                                        target: '_blank',
                                                        href: 'https://pochta.kdivanu.ru/tracking/' + e.event.trackcode
                                                    }
                                                }, [e._v(' Запросить доставку ')])])
                                        ]),
                                        e._m(0),
                                        e.mapOpen ? a('div', { staticClass: 'map' }, [a('div', { staticClass: 'lay' })]) : e._e()
                                    ])])
                            ])]);
                    }, ze = [function () {
                            var e = this, t = e.$createElement, a = e._self._c || t;
                            return a('div', { staticClass: 'col-12 col-md-4 relative' }, [a('a', {
                                    staticClass: 'service-link',
                                    attrs: { href: 'https://nationalpost.ru/' }
                                }, [a('div', { staticClass: 'post' }, [
                                        a('p', [e._v('НПС')]),
                                        a('img', { attrs: { src: 'https://pochta.kdivanu.ru/img/logo.png' } })
                                    ])])]);
                        }], xe = {
                        name: 'event',
                        props: ['event'],
                        data: function () {
                            return {
                                mapOpen: !1,
                                courierUri: null
                            };
                        },
                        created: function () {
                            this.$config.genCourierLink && (this.courierUri = this.$config.genCourierLink(this.$config, this.$options.propsData.event.courier.code));
                        },
                        computed: {
                            humanDate: function () {
                                return this.event.date;
                            }
                        },
                        methods: {
                            showAllEvents: function () {
                                this.$emit('showAllEvents');
                            },
                            genCourierLink: function () {
                            }
                        }
                    }, Ce = xe, je = Object(c['a'])(Ce, be, ze, !1, null, null, null), Se = je.exports, Ae = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'stage' }, [a('div', { staticClass: 'row' }, [
                                a('div', { staticClass: 'col-12 col-md-2 stage-timing stage-kdivanu' }, [
                                    a('p', { staticClass: 'date d-none d-sm-block' }, [e._v('Ближайшая дата')]),
                                    a('p', { staticClass: 'day' }, [e._v(e._s(e.$t('events.day_number', [e.event.day])))])
                                ]),
                                a('div', { staticClass: 'col-12 col-md-10 stage-content' }, [a('div', { staticClass: 'row' }, [
                                        a('div', { staticClass: 'col-12 col-md-8 statuses-block' }, [
                                            a('h4', [e._v('Уведомить по прибытии')]),
                                            a('h6', [e._v('+ доставка до адреса получателя')]),
                                            a('p', { staticClass: 'text' }, [e._v('По району "' + e._s(e.event.place) + '"')]),
                                            a('div', { staticClass: 'mt-3' }, [a('a', {
                                                    staticClass: 'btn btn-primary btn-kdivanu',
                                                    attrs: {
                                                        target: '_blank',
                                                        href: 'https://pochta.kdivanu.ru/tracking/' + e.event.trackcode
                                                    }
                                                }, [e._v(' Подключить ')])])
                                        ]),
                                        e._m(0),
                                        e.mapOpen ? a('div', { staticClass: 'map' }, [a('div', { staticClass: 'lay' })]) : e._e()
                                    ])])
                            ])]);
                    }, Le = [function () {
                            var e = this, t = e.$createElement, a = e._self._c || t;
                            return a('div', { staticClass: 'col-12 col-md-4 relative' }, [a('a', {
                                    staticClass: 'service-link',
                                    attrs: { href: 'https://nationalpost.ru/' }
                                }, [a('div', { staticClass: 'post' }, [
                                        a('p', [e._v('НПС')]),
                                        a('img', { attrs: { src: 'https://pochta.kdivanu.ru/img/logo.png' } })
                                    ])])]);
                        }], Te = {
                        name: 'event',
                        props: ['event'],
                        data: function () {
                            return {
                                mapOpen: !1,
                                courierUri: null
                            };
                        },
                        created: function () {
                            this.$config.genCourierLink && (this.courierUri = this.$config.genCourierLink(this.$config, this.$options.propsData.event.courier.code));
                        },
                        computed: {
                            humanDate: function () {
                                return this.event.date;
                            }
                        },
                        methods: {
                            showAllEvents: function () {
                                this.$emit('showAllEvents');
                            },
                            genCourierLink: function () {
                            }
                        }
                    }, Pe = Te, Me = Object(c['a'])(Pe, Ae, Le, !1, null, null, null), We = Me.exports, Ue = {
                        name: 'events',
                        props: [
                            'events',
                            'grouping',
                            'trackcode',
                            'show_ads'
                        ],
                        data: function () {
                            return {
                                hideFewEvents: !0,
                                grouped: []
                            };
                        },
                        components: {
                            Event: ye,
                            KdivanuEvent: Se,
                            KdivanuPredzakazEvent: We
                        },
                        mounted: function () {
                            this.grouped = this.groupedData();
                        },
                        computed: {
                            getEventList: function () {
                                if (this.$config.shortEventList && this.hideFewEvents) {
                                    var e = this.$config.shortEventList;
                                    if (e[0] + e[1] + 1 < this.events.length)
                                        return [].concat(Object(le['a'])(this.events.slice(0, e[0])), [{ type: 'btn_more' }], Object(le['a'])(this.events.slice(this.events.length - e[1])));
                                }
                                return this.events;
                            },
                            getLastRussianPlace: function () {
                                for (var e = this.getEventList, t = 0; t < e.length; t++)
                                    if (console.log(e[t]), 'russian-post' === e[t].courier.code)
                                        return e[t].place ? e[t].place : e[t].zip;
                                return '';
                            },
                            getKdivanuAds: function () {
                                var e;
                                return !(null === (e = this.show_ads) || void 0 === e || !e.kdivanu);
                            },
                            getKdivanuPredzakazAds: function () {
                                var e;
                                return !(null === (e = this.show_ads) || void 0 === e || !e.kdivanu_predzakaz);
                            }
                        },
                        methods: {
                            showAllEvents: function () {
                                console.log('showAllEvents'), this.hideFewEvents = !1;
                            },
                            toggleOpen: function (e) {
                                console.log('toggleOpen'), e.open = !e.open;
                            },
                            groupedData: function () {
                                for (var e = {}, t = 0; t < this.events.length; t++) {
                                    var a = this.events[t], n = a.courier.code;
                                    e[n] || (e[n] = {
                                        courier: a.courier,
                                        open: !0,
                                        events: []
                                    }), e[n].events.push(a);
                                }
                                var i = [];
                                for (var r in e)
                                    i.push(e[r]);
                                return i;
                            }
                        }
                    }, Ee = Ue, Oe = Object(c['a'])(Ee, se, oe, !1, null, null, null), Ne = Oe.exports, $e = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'col-12 col-lg-4 track-aside' }, [
                            a('div', { staticClass: 'btn-print hide' }, [
                                a('svg', {
                                    attrs: {
                                        width: '20',
                                        height: '20',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg'
                                    }
                                }, [
                                    a('path', {
                                        attrs: {
                                            d: 'M4.6 15.975a.75.75 0 1 0 0-1.5v1.5zM1 13.432H.25 1zm1.8-6.278v.75-.75zm12.6 7.321a.75.75 0 0 0 0 1.5v-1.5zM3.85 7.154a.75.75 0 1 0 1.5 0h-1.5zM4.6.876v-.75a.75.75 0 0 0-.75.75h.75zm10.8 0h.75a.75.75 0 0 0-.75-.75v.75zm-.75 6.278a.75.75 0 0 0 1.5 0h-1.5zM4.6 11.638v-.75a.75.75 0 0 0-.75.75h.75zm10.8 0h.75a.75.75 0 0 0-.75-.75v.75zm0 7.175v.75a.75.75 0 0 0 .75-.75h-.75zm-10.8 0h-.75c0 .414.336.75.75.75v-.75zm0-4.338H2.8v1.5h1.8v-1.5zm-1.8 0c-.28 0-.547-.11-.743-.306L.997 15.23a2.553 2.553 0 0 0 1.803.744v-1.5zm-.743-.306a1.04 1.04 0 0 1-.307-.737H.25c0 .675.27 1.322.748 1.8l1.059-1.063zm-.307-.737V8.948H.25v4.484h1.5zm0-4.484c0-.276.11-.542.307-.737L.997 7.148a2.54 2.54 0 0 0-.747 1.8h1.5zm.307-.737c.196-.197.464-.307.743-.307v-1.5c-.675 0-1.324.267-1.802.744l1.059 1.063zm.743-.307h14.4v-1.5H2.8v1.5zm14.4 0c.28 0 .547.11.743.307l1.06-1.063a2.553 2.553 0 0 0-1.803-.744v1.5zm.743.307c.197.195.307.46.307.737h1.5a2.54 2.54 0 0 0-.748-1.8l-1.059 1.063zm.307.737v4.484h1.5V8.948h-1.5zm0 4.484c0 .275-.11.54-.307.737l1.06 1.062a2.54 2.54 0 0 0 .747-1.8h-1.5zm-.307.737a1.053 1.053 0 0 1-.743.306v1.5c.675 0 1.324-.267 1.802-.744l-1.059-1.062zm-.743.306h-1.8v1.5h1.8v-1.5zM5.35 7.154V.876h-1.5v6.278h1.5zM4.6 1.626h10.8v-1.5H4.6v1.5zm10.05-.75v6.278h1.5V.876h-1.5zM4.6 12.388h10.8v-1.5H4.6v1.5zm10.05-.75v7.175h1.5v-7.175h-1.5zm.75 6.425H4.6v1.5h10.8v-1.5zm-10.05.75v-7.175h-1.5v7.175h1.5z',
                                            fill: 'url(#paint0_linear)'
                                        }
                                    }),
                                    a('defs', [a('linearGradient', {
                                            attrs: {
                                                id: 'paint0_linear',
                                                x1: '19',
                                                y1: '.876',
                                                x2: '.145',
                                                y2: '1.825',
                                                gradientUnits: 'userSpaceOnUse'
                                            }
                                        }, [
                                            a('stop', { attrs: { 'stop-color': '#2172BD' } }),
                                            a('stop', {
                                                attrs: {
                                                    offset: '1',
                                                    'stop-color': '#0055A5'
                                                }
                                            })
                                        ], 1)], 1)
                                ]),
                                e._v(' Print '),
                                e._m(0)
                            ]),
                            a('aside', [
                                a('div', { staticClass: 'check-wrap' }, [
                                    a('div', { staticClass: 'hole' }),
                                    a('div', { staticClass: 'checkbl' }, [a('div', { staticClass: 'check' }, [
                                            a('h5', [
                                                a('svg', {
                                                    attrs: {
                                                        viewBox: '0 0 16 14',
                                                        width: '16',
                                                        height: '14',
                                                        fill: 'none',
                                                        xmlns: 'http://www.w3.org/2000/svg'
                                                    }
                                                }, [a('path', {
                                                        attrs: {
                                                            d: 'M0 0h1v14H0V0zM8 0h2v14H8V0zM11 0h1v14h-1V0zM13 0h1v14h-1V0zM15 0h1v14h-1V0zM2 0h3v14H2V0zM6 0h1v14H6V0z',
                                                            fill: '#222'
                                                        }
                                                    })]),
                                                e._v(' ' + e._s(e.data.trackcode) + ' ')
                                            ]),
                                            a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.added', [e.data.createDate])))]),
                                            a('hr'),
                                            a('div', { staticClass: 'row m-0 justify-content-between flex-nowrap' }, [
                                                a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.in_route')))]),
                                                a('p', [e._v(e._s(e.intransitDays))])
                                            ]),
                                            a('div', { staticClass: 'row m-0 justify-content-between flex-nowrap' }, [
                                                a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.last_update')))]),
                                                a('p', [e._v(e._s(e.data.updateDate))])
                                            ]),
                                            a('div', { staticClass: 'row m-0 justify-content-between flex-nowrap' }, [
                                                a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.CountryFrom')))]),
                                                a('p', [
                                                    e._v(' ' + e._s(e.data.origin_country ? e.data.origin_country : e.$t('info.head.CountryUnknown')) + ' '),
                                                    e.data.origin_iso ? a('img', {
                                                        attrs: {
                                                            src: 'https://assets.1trackapp.com/flags/250/' + e.data.origin_iso + '.png',
                                                            alt: e.data.origin_country
                                                        }
                                                    }) : e._e()
                                                ])
                                            ]),
                                            a('div', { staticClass: 'row m-0 justify-content-between flex-nowrap' }, [
                                                a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.CountryTo')))]),
                                                a('p', [a('span', [
                                                        e._v(' ' + e._s(e.data.destination_country ? e.data.destination_country : e.$t('info.head.CountryUnknown')) + ' '),
                                                        e.data.destination_iso ? a('img', {
                                                            attrs: {
                                                                src: 'https://assets.1trackapp.com/flags/250/' + e.data.destination_iso + '.png',
                                                                alt: e.data.destination_country
                                                            }
                                                        }) : e._e()
                                                    ])])
                                            ]),
                                            a('div', { staticClass: 'country-change-select' }),
                                            e._l(e.InfoKeys, function (t) {
                                                return a('div', {
                                                    key: t,
                                                    staticClass: 'row m-0 justify-content-between flex-nowrap'
                                                }, [
                                                    a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.' + t)))]),
                                                    a('p', [e._v(e._s(e.data.info[t]) + ' ' + e._s('Weight' === t ? e.data.info['WeightUnit'] : ''))])
                                                ]);
                                            }),
                                            e.source.length > 0 ? a('div', [
                                                a('hr'),
                                                a('div', {}, [
                                                    a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.finded_at')))]),
                                                    a('div', { staticClass: 'post-services' }, e._l(e.source, function (t) {
                                                        return a('a', {
                                                            key: t.code,
                                                            attrs: {
                                                                href: t.uri,
                                                                target: '_blank'
                                                            }
                                                        }, [
                                                            a('figure', [a('img', { attrs: { src: t.image } })]),
                                                            a('span', [e._v(e._s(t.name))])
                                                        ]);
                                                    }), 0)
                                                ])
                                            ]) : e._e(),
                                            a('hr'),
                                            a('p', { staticClass: 'gray' }, [e._v(e._s(e.$t('info.head.link')))]),
                                            a('p', { staticClass: 'link' }, [e._v(e._s(e.copyLink))]),
                                            a('div', {
                                                staticClass: 'btn-copy',
                                                class: { copied: e.copied },
                                                on: {
                                                    click: function (t) {
                                                        return e.Copy();
                                                    }
                                                }
                                            }, [
                                                a('svg', {
                                                    attrs: {
                                                        viewBox: '0 0 15 15',
                                                        width: '15',
                                                        height: '15',
                                                        fill: 'none',
                                                        xmlns: 'http://www.w3.org/2000/svg'
                                                    }
                                                }, [a('path', {
                                                        attrs: {
                                                            d: 'M6.994 7.556a1 1 0 0 0-1.602 1.197l1.602-1.197zm4.127.952l-.707-.707.707.707zm1.961-1.963l.708.706a.785.785 0 0 0 .012-.012l-.72-.694zM8.461 1.918L7.766 1.2a.986.986 0 0 0-.01.01l.705.71zm-1.83.41a1 1 0 1 0 1.411 1.418L6.632 2.33zm1.375 5.116a1 1 0 0 0 1.602-1.197L8.006 7.444zM3.88 6.492l.707.707-.707-.707zM1.917 8.455L1.21 7.75a1.096 1.096 0 0 0-.012.012l.72.694zm4.622 4.627l.695.718a.89.89 0 0 0 .013-.012l-.708-.706zm1.825-.413a1 1 0 1 0-1.415-1.413l1.415 1.413zM5.392 8.753c.366.49.834.896 1.371 1.19l.96-1.755a2.27 2.27 0 0 1-.73-.632L5.393 8.753zm1.371 1.19a4.266 4.266 0 0 0 1.742.513l.143-1.995a2.266 2.266 0 0 1-.925-.273l-.96 1.755zm1.742.513a4.268 4.268 0 0 0 1.797-.26l-.7-1.873c-.304.114-.63.16-.954.138l-.143 1.995zm1.797-.26a4.268 4.268 0 0 0 1.527-.982l-1.415-1.413c-.23.23-.507.408-.812.522l.7 1.874zm1.527-.982l1.961-1.963-1.415-1.413L10.414 7.8l1.415 1.413zm1.973-1.975A4.273 4.273 0 0 0 15 4.235l-2 .017a2.273 2.273 0 0 1-.637 1.598l1.44 1.389zM15 4.235a4.273 4.273 0 0 0-1.25-2.983l-1.415 1.413c.42.421.66.991.665 1.587l2-.017zm-1.25-2.983A4.267 4.267 0 0 0 10.77 0l-.018 2a2.267 2.267 0 0 1 1.584.665l1.415-1.413zM10.77 0a4.267 4.267 0 0 0-3.003 1.2l1.39 1.437c.428-.413 1-.642 1.595-.637l.018-2zM7.756 1.21L6.63 2.329l1.411 1.417 1.124-1.119-1.41-1.417zm1.852 5.037a4.27 4.27 0 0 0-1.371-1.19l-.96 1.755c.286.156.534.371.73.632l1.601-1.197zm-1.371-1.19a4.266 4.266 0 0 0-1.742-.512l-.143 1.994c.324.024.64.116.925.273l.96-1.755zm-1.742-.512a4.266 4.266 0 0 0-1.797.258l.7 1.874c.304-.114.63-.16.954-.138l.143-1.994zm-1.797.258a4.268 4.268 0 0 0-1.527.983l1.415 1.413c.23-.23.507-.408.812-.522l-.7-1.874zm-1.527.983L1.21 7.749l1.415 1.413L4.586 7.2 3.171 5.786zM1.198 7.76A4.274 4.274 0 0 0 0 10.765l2-.017a2.273 2.273 0 0 1 .637-1.598L1.197 7.76zM0 10.765a4.273 4.273 0 0 0 1.25 2.983l1.415-1.413A2.273 2.273 0 0 1 2 10.748l-2 .017zm1.25 2.983A4.267 4.267 0 0 0 4.23 15l.018-2a2.267 2.267 0 0 1-1.584-.665L1.25 13.748zM4.23 15a4.266 4.266 0 0 0 3.003-1.2l-1.39-1.437c-.428.413-1 .642-1.595.637l-.018 2zm3.016-1.212l1.117-1.119-1.415-1.413-1.117 1.119 1.415 1.413z',
                                                            fill: '#196BB8'
                                                        }
                                                    })]),
                                                a('span', {
                                                    directives: [{
                                                            name: 'show',
                                                            rawName: 'v-show',
                                                            value: !e.copied,
                                                            expression: '!copied'
                                                        }]
                                                }, [e._v(e._s(e.$t('info.head.copy')))]),
                                                a('span', {
                                                    directives: [{
                                                            name: 'show',
                                                            rawName: 'v-show',
                                                            value: e.copied,
                                                            expression: 'copied'
                                                        }],
                                                    staticClass: 'copyok'
                                                }, [e._v(e._s(e.$t('info.head.copied')))])
                                            ])
                                        ], 2)])
                                ]),
                                e.data.source.length > 0 ? a('div', { staticClass: 'side-repost' }, [
                                    a('h4', [e._v(e._s(e.$t('official.head')))]),
                                    a('p', [e._v(e._s(e.$t('official.p')))]),
                                    e._l(e.data.source, function (t) {
                                        return a('a', {
                                            key: t.code,
                                            attrs: {
                                                target: '_blank',
                                                rel: 'nofollow',
                                                href: t.external_link,
                                                onclick: 'window.yaCounter30521527 && yaCounter30521527.reachGoal(\'service_external_link\') && aajax(\'/ajax/go_external?id=<?=$exlink[\'uri\']?>&link=\'+encodeURIComponent(this.href),\'\',\'json\',(d)=>{console.log(d)});'
                                            }
                                        }, [
                                            a('img', { attrs: { src: t.image } }),
                                            a('div', { staticClass: 'service-external-data' }, [
                                                a('div', { staticClass: 'service-name' }, [e._v(e._s(t.name))]),
                                                a('div', { staticClass: 'tc' }, [e._v(e._s(t.track))])
                                            ])
                                        ]);
                                    })
                                ], 2) : e._e()
                            ])
                        ]);
                    }, Ie = [function () {
                            var e = this, t = e.$createElement, a = e._self._c || t;
                            return a('label', { staticClass: 'el-switch' }, [
                                a('input', {
                                    attrs: {
                                        type: 'checkbox',
                                        name: 'switch',
                                        checked: ''
                                    }
                                }),
                                a('span', { staticClass: 'el-switch-style' })
                            ]);
                        }], Ge = {
                        name: 'block-info',
                        props: ['data'],
                        data: function () {
                            var e = this, t = this.data.source.map(function (t) {
                                    return e.$config.genCourierLink && (t.uri = e.$config.genCourierLink(e.$config, t.code)), t;
                                });
                            return {
                                list: [
                                    'Weight',
                                    'NextTrack',
                                    'Sender',
                                    'Recipient',
                                    'AddressFrom',
                                    'AddressTo'
                                ],
                                copied: !1,
                                source: t
                            };
                        },
                        methods: {
                            Copy: function () {
                                var e = this;
                                try {
                                    var t = document.createElement('input');
                                    t.style = 'position: absolute; left: -1000px; top: -1000px', t.value = this.copyLink, document.body.appendChild(t), t.select(), document.execCommand('copy'), document.body.removeChild(t);
                                } catch (a) {
                                    console.log(a);
                                }
                                this.copied = !0, setTimeout(function () {
                                    e.copied = !1;
                                }, 4000);
                            }
                        },
                        computed: {
                            copyLink: function () {
                                return 'https://' + this.$domain + this.$config.genTrackingLink(this.$config, this.data.trackcode);
                            },
                            intransitDays: function () {
                                var e = 0;
                                if (this.data.events.length > 0) {
                                    var t = new Date(), a = new Date(this.data.createDate), n = new Date(this.data.events[this.data.events.length - 1].date);
                                    e = Math.ceil((t - (a < n ? a : n)) / 86400 / 1000);
                                }
                                return e > 0 ? this.$tc('info.head.in_route_days', e, [e]) : '';
                            },
                            InfoList: function () {
                                var e = {};
                                for (var t in this.data.info)
                                    this.data.info[t] && (e[t] = this.data.info[t]);
                                return e;
                            },
                            InfoKeys: function () {
                                var e = [];
                                for (var t in this.list)
                                    this.InfoList[this.list[t]] && e.push(this.list[t]);
                                return e;
                            }
                        }
                    }, Be = Ge, Re = Object(c['a'])(Be, $e, Ie, !1, null, null, null), Ve = Re.exports, De = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'nopoints' }, [
                            a('div', { staticClass: 'trackalert wblp2 shadow r-3' }, [a('div', { staticClass: 'd-flex' }, [
                                    e._m(0),
                                    a('div', [
                                        a('div', { staticClass: 'h4' }, [e._v(' ' + e._s(e.$t('empty.head')) + ' ')]),
                                        a('p', [e._v(' ' + e._s(e.$t('empty.h2')) + ' ')]),
                                        a('p', [e._v(' ' + e._s(e.$t('empty.text')) + ' ')])
                                    ])
                                ])]),
                            e.widget ? e._e() : a('div', [
                                a('div', { staticClass: 'trackalert wblp2 shadow trackalert-searchservice' }, [
                                    a('div', { staticClass: 'h5' }, [e._v(e._s(e.$t('we_found.head')))]),
                                    a('div', { staticClass: 'row' }, e._l(e.data.couriers, function (t) {
                                        return a('div', {
                                            key: t.code,
                                            staticClass: 'col-12 col-lg-4'
                                        }, [a('a', {
                                                attrs: {
                                                    href: '#',
                                                    target: '_blank'
                                                }
                                            }, [a('div', { staticClass: 'try_service d-flex align-items-center' }, [
                                                    a('img', {
                                                        attrs: {
                                                            src: t.image,
                                                            alt: t.name
                                                        }
                                                    }),
                                                    a('span', [e._v(e._s(t.name))])
                                                ])])]);
                                    }), 0)
                                ]),
                                a('AddForm', { attrs: { trackcode: e.data.trackcode } })
                            ], 1)
                        ]);
                    }, qe = [function () {
                            var e = this, t = e.$createElement, a = e._self._c || t;
                            return a('div', [a('img', {
                                    attrs: {
                                        src: 'https://1track.ru/static/img/icon-packagesearch.svg',
                                        alt: 'Package Search'
                                    }
                                })]);
                        }], Fe = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'trackalert wblp2 shadow' }, [
                            a('div', { staticClass: 'd-flex' }, [
                                e._m(0),
                                a('div', [
                                    a('p', [e._v(e._s(e.$t('form_request.text')))]),
                                    e.visible ? e._e() : a('a', {
                                        staticClass: 'btn btn-md btn-second',
                                        attrs: { href: '#' },
                                        on: {
                                            click: function (t) {
                                                return t.preventDefault(), e.openForm.apply(null, arguments);
                                            }
                                        }
                                    }, [e._v(e._s(e.$t('form_request.btn1')))])
                                ])
                            ]),
                            a('div', {
                                directives: [{
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: e.visible,
                                        expression: 'visible'
                                    }]
                            }, [
                                a('hr'),
                                a('form', {
                                    staticClass: 'ajax',
                                    attrs: {
                                        action: '/ajax/add_service',
                                        method: 'post'
                                    }
                                }, [
                                    e.send_status ? a('div', [a('div', { staticClass: 'alert alert-success' }, [e._v(e._s(e.$t('form_request.alert')))])]) : e._e(),
                                    a('div', { staticClass: 'form-group' }, [
                                        a('label', { attrs: { for: 'new_service_name' } }, [e._v(e._s(e.$t('form_request.service_label')))]),
                                        a('input', {
                                            directives: [{
                                                    name: 'model',
                                                    rawName: 'v-model',
                                                    value: e.form.service,
                                                    expression: 'form.service'
                                                }],
                                            staticClass: 'form-control',
                                            attrs: {
                                                type: 'text',
                                                placeholder: e.$t('form_request.service_ph')
                                            },
                                            domProps: { value: e.form.service },
                                            on: {
                                                input: function (t) {
                                                    t.target.composing || e.$set(e.form, 'service', t.target.value);
                                                }
                                            }
                                        })
                                    ]),
                                    a('div', { staticClass: 'form-group' }, [
                                        a('label', { attrs: { for: 'new_track' } }, [e._v(e._s(e.$t('form_request.track_label')))]),
                                        a('input', {
                                            directives: [{
                                                    name: 'model',
                                                    rawName: 'v-model',
                                                    value: e.form.track,
                                                    expression: 'form.track'
                                                }],
                                            staticClass: 'form-control',
                                            attrs: {
                                                type: 'text',
                                                name: 'new_track',
                                                id: 'new_track',
                                                placeholder: e.$t('form_request.track_ph')
                                            },
                                            domProps: { value: e.form.track },
                                            on: {
                                                input: function (t) {
                                                    t.target.composing || e.$set(e.form, 'track', t.target.value);
                                                }
                                            }
                                        })
                                    ]),
                                    a('div', { staticClass: 'form-group' }, [
                                        a('label', { attrs: { for: 'text' } }, [e._v(e._s(e.$t('form_request.text_label')))]),
                                        a('textarea', {
                                            directives: [{
                                                    name: 'model',
                                                    rawName: 'v-model',
                                                    value: e.form.text,
                                                    expression: 'form.text'
                                                }],
                                            staticClass: 'form-control',
                                            attrs: { placeholder: e.$t('form_request.text_ph') },
                                            domProps: { value: e.form.text },
                                            on: {
                                                input: function (t) {
                                                    t.target.composing || e.$set(e.form, 'text', t.target.value);
                                                }
                                            }
                                        })
                                    ]),
                                    a('button', {
                                        staticClass: 'btn btn-default',
                                        class: { disabled: e.send_status },
                                        attrs: { type: 'submit' },
                                        on: {
                                            click: function (t) {
                                                return t.preventDefault(), e.sendForm.apply(null, arguments);
                                            }
                                        }
                                    }, [e._v(e._s(e.$t('form_request.send')))])
                                ])
                            ])
                        ]);
                    }, Ke = [function () {
                            var e = this, t = e.$createElement, a = e._self._c || t;
                            return a('div', [a('img', {
                                    attrs: {
                                        src: 'https://1track.ru/static/img/icon-email.svg',
                                        alt: 'Email'
                                    }
                                })]);
                        }], He = a('d4ec'), Ze = a('ade3'), Je = a('bc3a'), Ye = a.n(Je), Qe = Ye.a.create({ withCredentials: !1 }), Xe = 'https://1trackapp.com/';
                console.log('ENV', Object({
                    NODE_ENV: 'production',
                    BASE_URL: '/'
                }));
                var et, tt, at, nt = function e() {
                        var t = this;
                        Object(He['a'])(this, e), Object(Ze['a'])(this, 'url', Xe), Object(Ze['a'])(this, 'getConfig', function () {
                            return { headers: { 'content-type': 'text/json' } };
                        }), Object(Ze['a'])(this, 'post', function () {
                            var e = Object(ue['a'])(regeneratorRuntime.mark(function e(a) {
                                var n, i, r, s = arguments;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = s.length > 1 && void 0 !== s[1] ? s[1] : {}, i = t.url + a, e.next = 4, Qe.post(i, n, t.getConfig());
                                        case 4:
                                            return r = e.sent, e.abrupt('return', r);
                                        case 6:
                                        case 'end':
                                            return e.stop();
                                        }
                                }, e);
                            }));
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        }()), Object(Ze['a'])(this, 'put', function () {
                            var e = Object(ue['a'])(regeneratorRuntime.mark(function e(a) {
                                var n, i, r, s = arguments;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = s.length > 1 && void 0 !== s[1] ? s[1] : {}, i = t.url + a, e.next = 4, Qe.put(i, n, t.getConfig());
                                        case 4:
                                            return r = e.sent, e.abrupt('return', r);
                                        case 6:
                                        case 'end':
                                            return e.stop();
                                        }
                                }, e);
                            }));
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        }()), Object(Ze['a'])(this, 'get', function () {
                            var e = Object(ue['a'])(regeneratorRuntime.mark(function e(a) {
                                var n, i;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.url + a, e.next = 3, Qe.get(n, t.getConfig());
                                        case 3:
                                            return i = e.sent, e.abrupt('return', i);
                                        case 5:
                                        case 'end':
                                            return e.stop();
                                        }
                                }, e);
                            }));
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        }()), Object(Ze['a'])(this, 'delete', function () {
                            var e = Object(ue['a'])(regeneratorRuntime.mark(function e(a) {
                                var n, i;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.url + a, e.next = 3, Qe.delete(n, t.getConfig());
                                        case 3:
                                            return i = e.sent, e.abrupt('return', i);
                                        case 5:
                                        case 'end':
                                            return e.stop();
                                        }
                                }, e);
                            }));
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        }());
                    }, it = new nt(), rt = function () {
                        var e = Object(ue['a'])(regeneratorRuntime.mark(function e(t) {
                            var a, n, i, r, s, o, l, d, c, u, h, g, p, v, f = arguments;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.trackcodeList, n = t.translate, i = t.needNew, r = f.length > 1 && void 0 !== f[1] ? f[1] : null, s = '', s = 'string' === typeof a ? a : a && a[0] || '', r && ((null === r || void 0 === r ? void 0 : r.trackcode) === s ? r.loading = !0 : (r.loading = !0, r.visible = !0, r.trackcode = s, r.data = {})), console.log('observeParentResult', r), o = n.active ? n.language : '', e.next = 9, ot(s, i, o);
                                    case 9:
                                        if (l = e.sent, d = l.data.data, d) {
                                            if (c = d && d.events || [], u = function () {
                                                    for (var e = {}, t = 0; t < (null === (a = d.source) || void 0 === a ? void 0 : a.length); t++) {
                                                        var a;
                                                        e[d.source[t].code] = d.source[t];
                                                    }
                                                    return e;
                                                }(), c && c.length > 0)
                                                for (h = new Date(c[c.length - 1].date.substr(0, 10)), g = 0; g < c.length; g++)
                                                    p = new Date(c[g].date), c[g].day = Math.ceil((p - h) / 86400 / 1000), 0 == c[g].day && (c[g].day = 1), c[g].courier = u[c[g].courier];
                                            r && null !== r && void 0 !== r && r.loading && (r.loading = !1);
                                        }
                                        return v = Object(m['a'])(Object(m['a'])(Object(m['a'])({}, r), l.data), {}, {
                                            loading: !1,
                                            key: new Date().toDateString()
                                        }), e.abrupt('return', v);
                                    case 14:
                                    case 'end':
                                        return e.stop();
                                    }
                            }, e);
                        }));
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    }(), st = function () {
                        var e = Object(ue['a'])(regeneratorRuntime.mark(function e(t) {
                            var a;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return a = it.post('api/addrequest', t), e.abrupt('return', a.data);
                                    case 2:
                                    case 'end':
                                        return e.stop();
                                    }
                            }, e);
                        }));
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    }(), ot = function () {
                        var e = Object(ue['a'])(regeneratorRuntime.mark(function e(t, a, n) {
                            var i, r;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return i = 'ajax/tracking?lang=' + n + '&track=' + t, a && (i += '&new=true'), e.next = 4, it.get(i);
                                    case 4:
                                        return r = e.sent, e.abrupt('return', r);
                                    case 6:
                                    case 'end':
                                        return e.stop();
                                    }
                            }, e);
                        }));
                        return function (t, a, n) {
                            return e.apply(this, arguments);
                        };
                    }(), lt = function () {
                        var e = Object(ue['a'])(regeneratorRuntime.mark(function e(t, a, n) {
                            var i, r, s, o, l, d, c;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ot(t, a, n);
                                    case 2:
                                        if (r = e.sent, s = null === (i = r.data) || void 0 === i ? void 0 : i.data, o = {}, null !== s && void 0 !== s && s.events)
                                            for (l in s.events)
                                                for (c in (d = s.events[l], d.orig_names))
                                                    d[c] && (o[d.orig_names[c]] = d[c]);
                                        return e.abrupt('return', o);
                                    case 7:
                                    case 'end':
                                        return e.stop();
                                    }
                            }, e);
                        }));
                        return function (t, a, n) {
                            return e.apply(this, arguments);
                        };
                    }(), dt = {
                        name: 'add-form',
                        props: ['trackcode'],
                        data: function () {
                            return {
                                visible: !1,
                                form: {
                                    track: this.trackcode,
                                    text: '',
                                    service: ''
                                },
                                send_status: !1
                            };
                        },
                        watch: {
                            trackcode: function (e) {
                                this.form = {
                                    track: e,
                                    text: '',
                                    service: ''
                                }, this.visible = !1, this.send_status = !1;
                            }
                        },
                        methods: {
                            openForm: function () {
                                this.visible = !0;
                            },
                            sendForm: function () {
                                var e = this;
                                this.send_status || st(this.form).then(function (e) {
                                    console.log(e);
                                }).finally(function () {
                                    e.send_status = !0;
                                });
                            }
                        }
                    }, ct = dt, ut = Object(c['a'])(ct, Fe, Ke, !1, null, null, null), ht = ut.exports, gt = {
                        name: 'no-points',
                        props: ['data'],
                        components: { AddForm: ht },
                        data: function () {
                            return { widget: !1 };
                        },
                        created: function () {
                            'undefined' !== typeof window.treckConfig && (this.widget = !0);
                        }
                    }, pt = gt, mt = Object(c['a'])(pt, De, qe, !1, null, null, null), vt = mt.exports, ft = function () {
                        const $___old_7224151fb24b258c = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_7224151fb24b258c)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_65d8d0ef2016a5d3.localStorage));
                            return function () {
                                return null !== localStorage.getItem('eventGroup') && 'true' === localStorage.getItem('eventGroup');
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_7224151fb24b258c)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_7224151fb24b258c));
                        }
                    }, kt = {
                        name: 'block-list',
                        props: [
                            'result',
                            'translate',
                            'isLoading'
                        ],
                        components: {
                            BlockListHeading: re,
                            Events: Ne,
                            BlockInfo: Ve,
                            NoPoints: vt
                        },
                        data: function () {
                            return { grouping: ft() };
                        },
                        mounted: function () {
                        },
                        updated: function () {
                            console.log('update blok-list', this.result);
                        },
                        methods: {
                            onRefresh: function () {
                                this.$emit('onRefresh', this.result.trackcode);
                            },
                            setGrouping: function (e) {
                                var t = this;
                                console.log('setGrouping', e), this.grouping = e, this.$nextTick(function () {
                                    t.$action('setGrouping');
                                });
                            },
                            changeEventLang: function (e, t) {
                                var a = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                if (n || (n = this.result), this.translate.language = e, this.translate.active = t, 'orig' !== e && t)
                                    this.translate.loading = !0, lt(n.trackcode, !1, this.translate.language).then(function (e) {
                                        if (Object.keys(e).length > 0)
                                            for (var t in a.result.events) {
                                                var n = a.result.events[t], i = Object(m['a'])({}, n.orig_names);
                                                for (var r in i) {
                                                    var s = i[r];
                                                    n[r] && e[s] && (n[r] = e[s]);
                                                }
                                            }
                                    }).finally(function () {
                                        setTimeout(function () {
                                            a.translate.loading = !1;
                                        }, 300);
                                    });
                                else
                                    for (var i in n.events) {
                                        var r = n.events[i], s = r.orig_names;
                                        for (var o in s)
                                            r[o] && (r[o] = s[o]);
                                    }
                            }
                        }
                    }, _t = kt, wt = Object(c['a'])(_t, g, p, !1, null, null, null), yt = wt.exports, bt = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('div', { staticClass: 'trackalert wblp2 shadow r-3 trackalert-loading' }, [a('div', { staticClass: 'row' }, [
                                a('div', { staticClass: 'col-12 col-md-12' }, [a('svg', {
                                        attrs: {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            id: 'Layer_1',
                                            'data-name': 'Layer 1',
                                            viewBox: '0 0 512 512',
                                            width: '512',
                                            height: '512'
                                        }
                                    }, [
                                        a('g', { attrs: { transform: 'scale(0.8) translate(100,100)' } }, [
                                            a('path', {
                                                attrs: {
                                                    id: 'll',
                                                    fill: '#0f69ba',
                                                    d: 'M73.8,339.268a187.693,187.693,0,0,0,260.414,4.85l24.542,24.541-10.225,10.225a7,7,0,0,0,0,9.9l96.777,96.778a26.031,26.031,0,0,0,36.769,0l3.479-3.478h0a26.033,26.033,0,0,0,0-36.77l-96.778-96.776a7,7,0,0,0-9.9,0l-10.224,10.223-24.542-24.541A187.705,187.705,0,0,0,73.805,73.8a187.536,187.536,0,0,0,0,265.464Zm310.029,24.117,91.827,91.827a12.012,12.012,0,0,1,0,16.971l-3.478,3.478a12.013,12.013,0,0,1-16.97,0l-91.827-91.828ZM35.241,177.575A173.722,173.722,0,0,1,329.367,83.7,173.744,173.744,0,1,1,35.241,177.575Z'
                                                }
                                            }),
                                            a('path', {
                                                attrs: {
                                                    transform: 'translate(25,10)',
                                                    fill: '#0f69ba',
                                                    d: 'M103.268,270.333l99.884,57.735a6.788,6.788,0,0,0,3.442.938,6.892,6.892,0,0,0,3.471-.938l100.217-57.735A7.21,7.21,0,0,0,314,264.271V148.8a7.224,7.224,0,0,0-3.732-6.062L210.152,85a7.106,7.106,0,0,0-7.058,0l-99.8,57.735A6.816,6.816,0,0,0,100,148.8v115.47A6.792,6.792,0,0,0,103.268,270.333ZM300,260.229l-86,49.652V210.569l86-49.652ZM292.529,148.8l-85.993,49.648-36.981-21.351,85.993-49.648ZM206.536,99.149l35.012,20.214-85.993,49.648L120.543,148.8ZM114,160.917l86,49.652v99.312l-86-49.652Z'
                                                }
                                            })
                                        ]),
                                        a('animateMotion', {
                                            attrs: {
                                                'xlink:href': '#ll',
                                                dur: '2s',
                                                begin: '0s',
                                                repeatCount: 'indefinite',
                                                fill: 'freeze',
                                                path: 'M0,0a25,25 0 1,0 50,0a25,25 0 1,0 -50,0'
                                            }
                                        })
                                    ], 1)]),
                                a('div', { staticClass: 'col-12 col-md-12 text-center' }, [
                                    a('h4', [e._v(e._s(e.$t('loading.head')))]),
                                    a('p', [e._v(e._s(e.$t('loading.h2')))]),
                                    a('div', { staticClass: 'services-list' }, [
                                        a('div', {
                                            staticClass: 'd-flex justify-content-center',
                                            attrs: { id: 'services-list' }
                                        }),
                                        a('h6', { staticClass: 'd-none' }, [e._v(e._s(e.$t('loading.find_text')))])
                                    ])
                                ])
                            ])]);
                    }, zt = [], xt = { name: 'loading' }, Ct = xt, jt = Object(c['a'])(Ct, bt, zt, !1, null, null, null), St = jt.exports, At = function () {
                        var e = this, t = e.$createElement, a = e._self._c || t;
                        return a('section', [a('div', { staticClass: 'container' }, [a('div', { staticClass: 'row' }, [a('div', { staticClass: 'col-12 col-lg-9' }, [
                                        a('div', { staticClass: 'trackalert wblp2 shadow mb-0' }, [a('div', { staticClass: 'd-flex' }, [
                                                e._m(0),
                                                a('div', [
                                                    a('div', { staticClass: 'h4' }, [e._v(' ' + e._s(e.$t('alert.head')) + ' ')]),
                                                    a('p', [e._v(e._s(e.$t('alert.text')))]),
                                                    a('p', [e._v(e._s(e.$t('alert.text2')) + ' ')])
                                                ])
                                            ])]),
                                        a('AddForm', { attrs: { trackcode: e.trackcode } })
                                    ], 1)])])]);
                    }, Lt = [function () {
                            var e = this, t = e.$createElement, a = e._self._c || t;
                            return a('div', [a('img', {
                                    attrs: {
                                        src: 'https://1track.ru/static/img/icon-attention.svg',
                                        alt: 'attention'
                                    }
                                })]);
                        }], Tt = {
                        name: 'alert',
                        props: ['trackcode'],
                        components: { AddForm: ht }
                    }, Pt = Tt, Mt = Object(c['a'])(Pt, At, Lt, !1, null, null, null), Wt = Mt.exports, Ut = {
                        name: 'App',
                        components: {
                            Heading: h,
                            BlockList: yt,
                            Loading: St,
                            Alert: Wt
                        },
                        mounted: function () {
                            console.log('MOUNTED');
                        },
                        data: function () {
                            return {
                                result: {
                                    trackcode: '',
                                    loading: !1,
                                    visible: !1,
                                    data: {}
                                },
                                lastStatus: null,
                                translate: {
                                    loading: !1,
                                    active: te(),
                                    language: ee()
                                }
                            };
                        },
                        computed: {
                            hasData: function () {
                                return !!this.result.data.createDate && this.result.data.couriers && this.result.trackcode;
                            }
                        },
                        methods: {
                            onRefresh: function (e) {
                                this.tracking([e], !0);
                            },
                            tracking: function (e) {
                                var t = this, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                try {
                                    history.pushState({ key: 'uuu' }, '', this.$config.genTrackingLink(this.$config, e[0]));
                                } catch (n) {
                                    console.log(n);
                                }
                                this.$action('beforeTracking'), rt({
                                    trackcodeList: e,
                                    translate: this.translate,
                                    needNew: a
                                }, this.result).then(function (e) {
                                    var a, n;
                                    console.log('result', e), null !== (a = e.data) && void 0 !== a && a.info && null !== (n = e.data) && void 0 !== n && n.info['WeightUnit'] && e.data.info['WeightUnit'].length > 0 && (e.data.info['WeightUnit'] = e.data.info['WeightUnit'] ? e.data.info['WeightUnit'] : 'g', e.data.info['WeightUnit'] = t.$t('info.head.WeightUnit' + e.data.info['WeightUnit'].toUpperCase())), t.result = e;
                                }).finally(function () {
                                    t.result.loading = !1, t.$nextTick(function () {
                                        t.$action('afterTracking');
                                    });
                                });
                            }
                        }
                    }, Et = Ut, Ot = (a('cf25'), Object(c['a'])(Et, i, r, !1, null, null, null)), Nt = Ot.exports, $t = (a('1276'), a('498a'), a('caad'), a('a434'), new n['a']({
                        el: '#track_form',
                        data: function () {
                            return {
                                inputValue: '',
                                recentList: []
                            };
                        },
                        mounted: function () {
                            this.loadRecentracks();
                        },
                        computed: {
                            cleanTrackList: function () {
                                for (var e = [], t = this.inputValue.split(/[,.\n]+/), a = 0; a < t.length; a++) {
                                    var n = t[a].trim();
                                    e.includes(n) || e.push(n);
                                }
                                return e;
                            }
                        },
                        methods: {
                            loadRecentracks: function () {
                                const $___old_e5e93987825403ea = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_e5e93987825403ea)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_65d8d0ef2016a5d3.localStorage));
                                    return function () {
                                        var e = [];
                                        if ('undefined' !== typeof localStorage.recent_tracks && '' !== localStorage.recent_tracks)
                                            try {
                                                e = JSON.parse(localStorage.recent_tracks);
                                            } catch (t) {
                                                e = [];
                                            }
                                        this.recentList = e;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_e5e93987825403ea)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_e5e93987825403ea));
                                }
                            },
                            Tracking: function (e) {
                                e && (this.inputValue = e), window.WanTrackBlock && window.WanTrackBlock.tracking(this.cleanTrackList), document.getElementById('track_block').scrollIntoView({ behavior: 'smooth' }), this.addRecentTrack(this.cleanTrackList[0]), this.loadRecentracks();
                            },
                            addRecentTrack: function (e) {
                                const $___old_39064c55b1dcf8ef = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_39064c55b1dcf8ef)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_65d8d0ef2016a5d3.localStorage));
                                    return function () {
                                        if ('' !== e) {
                                            var t = 15;
                                            'undefined' !== typeof localStorage.recent_tracks && '' !== localStorage.recent_tracks || (localStorage.recent_tracks = '[]');
                                            for (var a = JSON.parse(localStorage.recent_tracks), n = !0, i = 0; i < a.length; i += 1)
                                                if (a[i] === e) {
                                                    n = !1;
                                                    break;
                                                }
                                            n && (a.unshift(e), a.length > t && a.splice(t, a.length - t), localStorage.recent_tracks = JSON.stringify(a));
                                        }
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_39064c55b1dcf8ef)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_39064c55b1dcf8ef));
                                }
                            },
                            removeRecentTrack: function (e) {
                                var t = JSON.parse(localStorage.recent_tracks), a = t.indexOf(e);
                                if (-1 !== a) {
                                    var n = {};
                                    if ('undefined' !== typeof localStorage.recent_track_names && '' !== localStorage.recent_track_names)
                                        try {
                                            n = JSON.parse(localStorage.recent_track_names);
                                        } catch (i) {
                                            n = {};
                                        }
                                    n[e] && delete n[e], localStorage.recent_track_names = JSON.stringify(n), t.splice(a, 1), localStorage.recent_tracks = JSON.stringify(t), this.loadRecentracks();
                                }
                            }
                        }
                    }));
                n['a'].config.productionTip = !1, n['a'].directive('focus', {
                    inserted: function (e) {
                        e.focus();
                    }
                }), window.config['genTrackingLink'] || (window.config['genTrackingLink'] = function (e, t) {
                    return '/' + e.siteLocale + e.links.tracking + '/' + t;
                }), n['a'].prototype.$domain = null === (et = window.config) || void 0 === et ? void 0 : et.domain, n['a'].prototype.$config = window.config, n['a'].prototype.$action = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.config[e] && window.config[e](t);
                }, window.WanTrackForm = $t;
                var It = new n['a']({
                    i18n: D,
                    render: function (e) {
                        return e(Nt);
                    }
                }).$mount('#track_block');
                window.WanTrackBlock = It.$children[0];
                var Gt = null !== (tt = window.config) && void 0 !== tt && tt.getCurrentTrack ? null === (at = window.config) || void 0 === at ? void 0 : at.getCurrentTrack() : null;
                console.log('currentTrack', Gt), Gt && window.WanTrackForm.Tracking(decodeURIComponent(Gt));
            },
            '921e': function (e, t, a) {
            },
            cf25: function (e, t, a) {
                'use strict';
                a('fea6');
            },
            dad8: function (e, t, a) {
                'use strict';
                a('921e');
            },
            fea6: function (e, t, a) {
            }
        }));
    }())
}